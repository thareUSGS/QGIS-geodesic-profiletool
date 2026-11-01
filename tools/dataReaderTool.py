# -*- coding: utf-8 -*-
# -----------------------------------------------------------
#
# Profile
# Copyright (C) 2008  Borys Jurgiel
# Copyright (C) 2012  Patrice Verchere
# -----------------------------------------------------------
#
# licensed under the terms of GNU GPL 2
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License along
# with this program; if not, print to the Free Software Foundation, Inc.,
# 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
#
# ---------------------------------------------------------------------
from math import sqrt

import numpy as np
from qgis.core import (
    QgsCoordinateTransform,
    QgsDistanceArea,
    QgsFeatureRequest,
    QgsGeometry,
    QgsPointXY,
    QgsProject,
    QgsRaster,
)
from qgis.gui import QgsMapToolIdentify
from qgis.PyQt.QtCore import QCoreApplication

from .utils import isProfilable


class DataReaderTool:
    @staticmethod
    def _createDistanceArea(crs):
        project = QgsProject.instance()
        distance = QgsDistanceArea()
        distance.setSourceCrs(crs, project.transformContext())

        ellipsoid = project.ellipsoid()
        if not ellipsoid or ellipsoid.upper() == "NONE":
            ellipsoid = crs.ellipsoidAcronym()
        distance.setEllipsoid(ellipsoid)
        if not distance.willUseEllipsoid():
            raise ValueError(f"No valid ellipsoid is available for CRS {crs.authid()}")

        return distance

    @staticmethod
    def _geodesicChainages(geom, chainages, distance):
        """Convert planar geometry chainages to geodesic distances in meters."""
        line = geom.asPolyline()
        segments = []
        planar_start = 0.0
        geodesic_start = 0.0

        for start, end in zip(line[:-1], line[1:]):
            start_xy = QgsPointXY(start)
            end_xy = QgsPointXY(end)
            planar_length = sqrt(
                (end_xy.x() - start_xy.x()) ** 2 + (end_xy.y() - start_xy.y()) ** 2
            )
            geodesic_length = distance.measureLine(start_xy, end_xy)
            segments.append(
                (start_xy, end_xy, planar_start, planar_length, geodesic_start)
            )
            planar_start += planar_length
            geodesic_start += geodesic_length

        result = []
        for chainage in chainages:
            chainage = float(chainage)
            for index, (start, end, planar_start, planar_length, geodesic_start) in enumerate(
                segments
            ):
                if chainage <= planar_start + planar_length or index == len(segments) - 1:
                    fraction = (
                        0.0
                        if planar_length == 0
                        else min(1.0, max(0.0, (chainage - planar_start) / planar_length))
                    )
                    point = QgsPointXY(
                        start.x() + fraction * (end.x() - start.x()),
                        start.y() + fraction * (end.y() - start.y()),
                    )
                    result.append(geodesic_start + distance.measureLine(start, point))
                    break
            else:
                result.append(geodesic_start)

        return result

    def dataRasterReaderTool(self, iface1, tool1, profile1, pointstoDraw1, resolution_mode):
        """
        Return a dictionnary : {"layer" : layer read,
                                "band" : band read,
                                "l" : geodesic distance in meters from the line origin,
                                "z" : array of computed z
        """
        # init
        self.tool = tool1  # needed to transform point coordinates
        self.profiles = profile1  # profile with layer and band to compute
        self.pointstoDraw = pointstoDraw1  # the polyline to compute
        self.iface = iface1  # QGis interface to show messages in status bar

        distance = self._createDistanceArea(self.profiles["layer"].crs())

        # Sample each segment at the requested resolution.
        l = []
        x = []
        y = []
        lbefore = 0
        # First create the list of x and y coordinates along the path
        # Also store distance projected on map.
        # work for each segment of polyline
        first_segment = True
        for p_start, p_end in zip(self.pointstoDraw[:-1], self.pointstoDraw[1:]):

            # Transform each line segment into the sampled layer's CRS.
            pointstoCal1 = self.tool.toLayerCoordinates(
                self.profiles["layer"], QgsPointXY(*p_start)
            )
            pointstoCal2 = self.tool.toLayerCoordinates(self.profiles["layer"], QgsPointXY(*p_end))
            x1C = float(pointstoCal1.x())
            y1C = float(pointstoCal1.y())
            x2C = float(pointstoCal2.x())
            y2C = float(pointstoCal2.y())
            tlC = sqrt(((x2C - x1C) * (x2C - x1C)) + ((y2C - y1C) * (y2C - y1C)))
            try:
                res = (
                    min(
                        self.profiles["layer"].rasterUnitsPerPixelX(),
                        self.profiles["layer"].rasterUnitsPerPixelY(),
                    )
                    * tlC
                    / max(abs(x2C - x1C), abs(y2C - y1C))
                )  # res depend on the angle of ligne with normal
            except ZeroDivisionError:
                res = (
                    min(
                        self.profiles["layer"].rasterUnitsPerPixelX(),
                        self.profiles["layer"].rasterUnitsPerPixelY(),
                    )
                    * 1.2
                )
            except AttributeError:
                # MeshLayers have no rasterUnitsPerPixelX/Y attribute
                res = 1
            if resolution_mode == "samples":
                # Sample only the line vertices.
                steps = 1
            else:
                if res != 0:
                    steps = int(tlC / res)
                    if resolution_mode == "limited":
                        steps = min(steps, 1000)
                else:
                    steps = 1000

            if steps < 1:
                steps = 1
            dxC = (x2C - x1C) / steps
            dyC = (y2C - y1C) / steps
            if first_segment:
                debut = 0
                first_segment = False
            else:
                debut = 1
            segment_distance = 0.0
            previous_point = QgsPointXY(x1C, y1C)
            for n in range(debut, steps + 1):
                xC = x1C + dxC * n
                yC = y1C + dyC * n
                current_point = QgsPointXY(xC, yC)
                if n > 0:
                    segment_distance += distance.measureLine(previous_point, current_point)
                x.append(xC)
                y.append(yC)
                l.append(lbefore + segment_distance)
                previous_point = current_point
            lbefore += segment_distance
        z = self._extractZValues(x, y)

        self.profiles["l"] = l
        self.profiles["z"] = z
        self.profiles["x"] = x
        self.profiles["y"] = y
        self.iface.mainWindow().statusBar().showMessage("")

        return self.profiles

    def _status_update(self, advancement_pct):
        """Display profile sampling progress in the QGIS status bar."""
        if advancement_pct % 10 == 0:
            progress = "Creating profile: " + "|" * (advancement_pct // 10)
            self.iface.mainWindow().statusBar().showMessage(progress)

    def _extractZValues(self, x, y):
        layer = self.profiles["layer"]
        choosenBand = self.profiles["band"]

        z = []
        if layer.type() == layer.PluginLayer and isProfilable(layer):
            for n, coords in enumerate(zip(x, y)):
                ident = layer.identify(QgsPointXY(*coords))
                try:
                    attr = float(list(ident[1].values())[choosenBand])
                except (AttributeError, IndexError, KeyError, TypeError, ValueError):
                    attr = 0
                z.append(attr)
                self._status_update((100 * n) // (len(x) - 1))
        elif layer.type() == layer.MeshLayer:
            identifier = QgsMapToolIdentify(self.iface.mapCanvas())
            meshFld = QCoreApplication.translate("QgsMapToolIdentify", "Scalar Value")
            for n, coords in enumerate(zip(x, y)):
                ident = identifier.identify(
                    QgsGeometry.fromPointXY(QgsPointXY(*coords)),
                    QgsMapToolIdentify.DefaultQgsSetting,
                    [layer],
                    QgsMapToolIdentify.MeshLayer,
                )[0]

                try:
                    attr = float(ident.mAttributes[meshFld])
                except (AttributeError, ValueError):
                    attr = 0
                z.append(attr)
                self._status_update((100 * n) // (len(x) - 1))
        else:  # RASTER LAYERS
            for n, coords in enumerate(zip(x, y)):
                # this code adapted from valuetool plugin
                ident = layer.dataProvider().identify(
                    QgsPointXY(*coords), QgsRaster.IdentifyFormat.IdentifyFormatValue
                )
                if ident is not None and (choosenBand in ident.results()):
                    attr = ident.results()[choosenBand]
                else:
                    attr = 0
                z.append(attr)
                self._status_update((100 * n) // (len(x) - 1))
        return z

    def dataVectorReaderTool(self, iface, profile1, pointstoDraw1, valbuf1):
        """Return point elevations projected onto the line and overlay geometries."""
        layer_crs = profile1["layer"].crs()
        buffer_distance = valbuf1

        projectedpoints = []
        source_crs = iface.mapCanvas().mapSettings().destinationCrs()
        xform = QgsCoordinateTransform(source_crs, layer_crs, QgsProject.instance())

        geom = QgsGeometry.fromPolylineXY(
            [QgsPointXY(point[0], point[1]) for point in pointstoDraw1]
        )

        geominlayercrs = QgsGeometry(geom)
        geominlayercrs.transform(xform)

        buffergeom = geom.buffer(buffer_distance, 12)
        buffergeominlayercrs = QgsGeometry(buffergeom)
        buffergeominlayercrs.transform(xform)

        featsPnt = profile1["layer"].getFeatures(
            QgsFeatureRequest().setFilterRect(buffergeominlayercrs.boundingBox())
        )

        for featPnt in featsPnt:
            # iterate preselected point features and perform exact check with current polygon
            point3 = featPnt.geometry()
            distpoint = geominlayercrs.distance(point3)
            if distpoint <= buffer_distance:
                distline = geominlayercrs.lineLocatePoint(point3)
                pointprojected = geominlayercrs.interpolate(distline)
                if profile1["band"] > -1:
                    try:
                        interptemp = float(featPnt[profile1["band"]])
                    except (TypeError, ValueError):
                        continue
                else:
                    interptemp = None

                projectedpoints.append(
                    [
                        distline,
                        pointprojected.asPoint().x(),
                        pointprojected.asPoint().y(),
                        distpoint,
                        0,
                        interptemp,
                        featPnt.geometry().asPoint().x(),
                        featPnt.geometry().asPoint().y(),
                        featPnt,
                    ]
                )

        projectedpoints = np.array(projectedpoints)

        # perform postprocess computation

        if len(projectedpoints) > 0:
            projectedpoints = self.removeDuplicateLength(projectedpoints)
            projectedpoints = self.interpolateNodesOfPolyline(geominlayercrs, projectedpoints)

        # preparing return value
        profile = {}
        profile["layer"] = profile1["layer"]
        profile["band"] = profile1["band"]
        distance = self._createDistanceArea(layer_crs)
        profile["l"] = self._geodesicChainages(
            geominlayercrs, [projectedpoint[0] for projectedpoint in projectedpoints], distance
        )
        profile["z"] = [projectedpoint[5] for projectedpoint in projectedpoints]
        profile["x"] = [projectedpoint[1] for projectedpoint in projectedpoints]
        profile["y"] = [projectedpoint[2] for projectedpoint in projectedpoints]

        multipoly = QgsGeometry.fromMultiPolylineXY(
            [
                [
                    xform.transform(
                        QgsPointXY(projectedpoint[1], projectedpoint[2]),
                        QgsCoordinateTransform.ReverseTransform,
                    ),
                    xform.transform(
                        QgsPointXY(projectedpoint[6], projectedpoint[7]),
                        QgsCoordinateTransform.ReverseTransform,
                    ),
                ]
                for projectedpoint in projectedpoints
            ]
        )

        return profile, buffergeom, multipoly

    def removeDuplicateLength(self, projectedpoints):

        projectedpointsfinal = []
        duplicate = []
        tolerance = 0.01

        for i in range(len(projectedpoints)):
            if i in duplicate:
                continue
            else:
                mindist = np.absolute(projectedpoints[:, 0] - projectedpoints[i, 0])
                mindistindex = np.where(mindist < tolerance)

                closestindex = np.argmin(projectedpoints[mindistindex[0], 3])
                projectedpointsfinal.append(projectedpoints[mindistindex[0][closestindex]])
                duplicate += mindistindex[0].tolist()

        projectedpoints = np.array(projectedpointsfinal)
        projectedpoints = projectedpoints[projectedpoints[:, 0].argsort()]
        return projectedpoints

    def interpolateNodesOfPolyline(self, geom, projectedpoints):
        tolerance = 0.01
        polyline = geom.asPolyline()
        projectedpoints = projectedpoints[projectedpoints[:, 0].argsort()]

        # Write fist and last element if no value
        if projectedpoints[0][0] != 0:
            projectedpoints = np.append(
                projectedpoints,
                [
                    [
                        0,
                        polyline[0].x(),
                        polyline[0].y(),
                        -1,
                        0,
                        projectedpoints[0][5],
                        polyline[0].x(),
                        polyline[0].y(),
                        projectedpoints[0][8],
                    ]
                ],
                axis=0,
            )
            projectedpoints = projectedpoints[projectedpoints[:, 0].argsort()]
        if projectedpoints[-1][0] != geom.length():
            projectedpoints = np.append(
                projectedpoints,
                [
                    [
                        geom.length(),
                        polyline[-1].x(),
                        polyline[-1].y(),
                        -1,
                        len(polyline) - 2,
                        projectedpoints[-1][5],
                        polyline[-1].x(),
                        polyline[-1].y(),
                        projectedpoints[0][8],
                    ]
                ],
                axis=0,
            )
            projectedpoints = projectedpoints[projectedpoints[:, 0].argsort()]

        projectedpointsinterp = []

        for i in range(1, len(polyline) - 1):
            vertexpoint_xy = QgsPointXY(geom.vertexAt(i))
            lenpoly = geom.lineLocatePoint(QgsGeometry.fromPointXY(vertexpoint_xy))

            if min(abs(projectedpoints[:, 0] - lenpoly)) < tolerance:
                continue

            interpolated = self.interpolatePointAtNode(vertexpoint_xy, geom, projectedpoints)
            if interpolated is not None:
                projectedpointsinterp.append(interpolated)

        temp = projectedpoints.tolist() + projectedpointsinterp
        projectedpoints = np.array(temp)

        projectedpoints = projectedpoints[projectedpoints[:, 0].argsort()]

        return projectedpoints

    def interpolatePointAtNode(self, vertexpoint, geom, projectedpoints):
        """Interpolate the sampled value at a vertex missing from the profile."""
        lenpoly = geom.lineLocatePoint(QgsGeometry.fromPointXY(vertexpoint))

        previouspointindex = np.max(np.where(projectedpoints[:, 0] <= lenpoly)[0])
        nextpointindex = np.min(np.where(projectedpoints[:, 0] >= lenpoly)[0])

        lentot = projectedpoints[nextpointindex][0] - projectedpoints[previouspointindex][0]
        if lentot > 0:
            lentemp = lenpoly - projectedpoints[previouspointindex][0]
            z = (
                projectedpoints[previouspointindex][5]
                + (projectedpoints[nextpointindex][5] - projectedpoints[previouspointindex][5])
                / lentot
                * lentemp
            )
            return [
                lenpoly,
                vertexpoint.x(),
                vertexpoint.y(),
                -1,
                None,
                z,
                vertexpoint.x(),
                vertexpoint.y(),
                None,
            ]
        else:
            return None
