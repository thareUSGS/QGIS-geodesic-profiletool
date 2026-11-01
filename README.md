# geodesic_profiletool ![image](https://github.com/thareUSGS/QGIS-geodesic-profiletool/blob/main/icons/profileIcon.png?raw=true)

This tool plots profile lines from raster layers or point vector layer with elevation field. 
Supports multiple lines as well as graph export to svg, pdf, png or csv file. 
Supports 3D polyline export to dxf. 
Horizontal profile distances are measured geodesically in meters using each
profile layer's CRS and the project's ellipsoid (or the CRS ellipsoid when the
project does not specify one).

## Installation

Download `geodesic_profiletool_0.2.0.zip` from the GitHub release and install it
in QGIS using **Plugins > Manage and Install Plugins > Install from ZIP**.

## Releases

Pushing a version tag such as `v0.2.0` creates a GitHub Release with a
QGIS-installable `geodesic_profiletool_0.2.0.zip` asset. The tag version must
match the plugin version in `metadata.txt`.

Authors: CoPilot Lunar - (Orginal authors: Borys Jurgiel - Patrice Verchere - Etienne Tourigny - Javier Becerra)

**geodesic_profiletool license:**

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
