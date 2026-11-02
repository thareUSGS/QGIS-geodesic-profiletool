<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it_IT">
    <context>
        <name>DlgAbout</name>
        <message>
            <location filename="../ui/about.ui" line="14" />
            <source>Geodesic Profiler Tool</source>
            <translation>Strumento per profili geodetici</translation>
        </message>
        <message>
            <location filename="../ui/about.ui" line="34" />
            <source>geodesic_profiletool</source>
            <translation>geodesic_profiletool</translation>
        </message>
        <message>
            <location filename="../ui/about.ui" line="52" />
            <source>$PLUGIN_DESCRIPTION$</source>
            <translation>Crea profili geodetici del terreno</translation>
        </message>
        <message>
            <location filename="../ui/about.ui" line="98" />
            <source>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN" "http://www.w3.org/TR/REC-html40/strict.dtd"&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name="qrichtext" content="1" /&gt;&lt;style type="text/css"&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=" font-family:'MS Shell Dlg 2'; font-size:8pt; font-weight:400; font-style:normal;"&gt;
&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-family:'Sans Serif'; font-size:9pt;"&gt;Geodesic Profiler Tool&lt;/span&gt;&lt;/p&gt;
&lt;p style="-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Sans Serif'; font-size:9pt;"&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-family:'Sans Serif'; font-size:9pt;"&gt;The Profile Plugin plots terrain profiles along interactive pointed or selected polylines.&lt;/span&gt;&lt;/p&gt;
&lt;p style="-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Sans Serif'; font-size:9pt;"&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-family:'Sans Serif'; font-size:9pt;"&gt;Data could come from raster layer or point vector layer with elevation field.&lt;/span&gt;&lt;/p&gt;
&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-family:'Sans Serif'; font-size:9pt;"&gt;Graph could be exported to SVG or PNG format. The polyline used  can be exported to 3D polyline in dxf format.&lt;/span&gt;&lt;/p&gt;
&lt;p style="-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Sans Serif'; font-size:9pt;"&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-family:'Sans Serif'; font-size:9pt;"&gt;Geodesic distance measures each line segment over an ellipsoid and sums the segment lengths. Profile distances use the layer CRS and the project's ellipsoid, falling back to the CRS ellipsoid if needed. Planar distance measures coordinate length in the map projection; projection distortion can make it differ from surface distance. For geographic CRSs, planar coordinate lengths are in degrees and are not reported; use the geodesic distance instead.&lt;/span&gt;&lt;/p&gt;
&lt;p style="-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Sans Serif'; font-size:9pt;"&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-family:'Sans Serif'; font-size:9pt;"&gt;Please send your reflections, opinions, suggestions and wishes (especially related to this plugin;) on &lt;/span&gt;&lt;a href="https://github.com/etiennesky/profiletool/issues"&gt;&lt;span style=" text-decoration: underline; color:#0000ff;"&gt;https://github.com/etiennesky/profiletool/issues&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;
&lt;p style="-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Sans'; font-size:9pt;"&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-family:'Sans Serif'; font-size:9pt;"&gt;Geodesic Profiler Tool - License GNU GPL 2&lt;/span&gt;&lt;/p&gt;
&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-family:'Sans Serif'; font-size:9pt;"&gt;Written in 2008 by Borys Jurgiel&lt;/span&gt;&lt;/p&gt;
&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-family:'Sans Serif'; font-size:9pt;"&gt;Written in 2012 by Borys Jurgiel, Patrice Verchere&lt;/span&gt;&lt;/p&gt;
&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-family:'Sans Serif'; font-size:9pt;"&gt;Geodesic profile enhancements by CoPilot GPT-6 Luna&lt;/span&gt;&lt;/p&gt;
&lt;p style="-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Sans Serif'; font-size:9pt;"&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-family:'Sans Serif'; font-size:9pt;"&gt;REQUIREMENTS:&lt;/span&gt;&lt;/p&gt;
&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-family:'Sans Serif'; font-size:9pt;"&gt;- Qwt5 (python-qwt5-qt4) and/or python-matplotlib&lt;/span&gt;&lt;/p&gt;
&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-family:'Sans Serif'; font-size:9pt;"&gt;- QT ver 4.1 for saving to PDF and 4.3 for saving to SVG&lt;/span&gt;&lt;/p&gt;
&lt;p style="-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Sans Serif'; font-size:9pt;"&gt;&lt;br /&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
            <translation>&lt;html&gt;&lt;body&gt;
&lt;p&gt;&lt;b&gt;Strumento per profili geodetici&lt;/b&gt;&lt;/p&gt;
&lt;p&gt;Il plugin crea profili del terreno lungo polilinee tracciate o selezionate. I dati possono provenire da raster o da layer vettoriali di punti con un campo di elevazione. I grafici possono essere esportati in SVG, PDF, PNG o CSV; le polilinee possono essere esportate in DXF 3D.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Distanza geodetica e planare&lt;/b&gt;&lt;br/&gt;La distanza geodetica misura ogni segmento sulla superficie di un ellissoide e somma le lunghezze. Le distanze del profilo usano il CRS del layer e l'ellissoide del progetto, oppure quello del CRS se non ? configurato un ellissoide del progetto. La distanza planare misura la lunghezza delle coordinate nella proiezione cartografica; la distorsione della proiezione pu? farla differire dalla distanza sulla superficie. Nei CRS geografici la lunghezza planare ? espressa in gradi e non viene mostrata: viene riportata solo la distanza geodetica.&lt;/p&gt;
&lt;p&gt;Il plugin richiede QGIS 4.2.3 o versione successiva per il supporto planetario introdotto negli aggiornamenti di settembre 2026.&lt;/p&gt;
&lt;p&gt;Suggerimenti e commenti: &lt;a href="https://github.com/thareUSGS/QGIS-geodesic-profiletool/issues"&gt;segnala un problema o un suggerimento&lt;/a&gt;.&lt;/p&gt;
&lt;p&gt;Licenza GNU GPL 2. Autori originali: Borys Jurgiel, Patrice Verchere, Etienne Tourigny e Javier Becerra. Miglioramenti geodetici: CoPilot GPT-6 Luna.&lt;/p&gt;
&lt;/body&gt;&lt;/html&gt;</translation>
        </message>
    </context>
    <context>
        <name>GroupBox</name>
        <message>
            <location filename="../ui/ptdockwidget.py" line="453" />
            <source>Copy to clipboard</source>
            <translation>Copia negli appunti</translation>
        </message>
        <message>
            <location filename="../ui/ptdockwidget.py" line="465" />
            <source>Copy to clipboard (with coordinates)</source>
            <translation>Copia negli appunti (con coordinate)</translation>
        </message>
        <message>
            <location filename="../ui/ptdockwidget.py" line="475" />
            <source>Create Temporary layer</source>
            <translation>Crea layer temporaneo</translation>
        </message>
    </context>
    <context>
        <name>PTDockWidget</name>
        <message>
            <location filename="../ui/ptdockwidget.py" line="111" />
            <source>Layer</source>
            <translation>Layer</translation>
        </message>
        <message>
            <location filename="../ui/ptdockwidget.py" line="111" />
            <source>Band/Field</source>
            <translation>Banda/Campo</translation>
        </message>
        <message>
            <location filename="../ui/ptdockwidget.py" line="111" />
            <source>Search buffer</source>
            <translation>Buffer di ricerca</translation>
        </message>
    </context>
    <context>
        <name>ProfilePlugin</name>
        <message>
            <location filename="../profileplugin.py" line="62" />
            <source>Geodesic terrain profile</source>
            <translation>Profilo altimetrico geodetico</translation>
        </message>
        <message>
            <location filename="../profileplugin.py" line="65" />
            <source>Plots geodesic terrain profiles</source>
            <translation>Disegna profili altimetrici geodetici</translation>
        </message>
        <message>
            <location filename="../profileplugin.py" line="71" />
            <source>&amp;Geodesic Profile Tool</source>
            <translation>&amp;Strumento per profili geodetici</translation>
        </message>
    </context>
    <context>
        <name>ProfileTool</name>
        <message>
            <location filename="../ui/profiletool.ui" line="14" />
            <source>Geodesic Profiler Tool</source>
            <translation>Strumento per profili geodetici</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="67" />
            <source>&amp;Profile</source>
            <translation>&amp;Profilo</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="134" />
            <source>maximum</source>
            <translation>massimo</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="157" />
            <source>minimum</source>
            <translation>minimo</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="230" />
            <source>Reset view</source>
            <translation>Reimposta vista</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="253" />
            <source>When checked, profile is calculated along the polyline. Unchecked, only the values at polyline vertices are shown.</source>
            <translation>Se selezionato, il profilo viene calcolato lungo la polilinea. Se non selezionato, vengono mostrati solo i valori nei vertici della polilinea.</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="256" />
            <source>Interpolated profile</source>
            <translation>Profilo interpolato</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="271" />
            <source>Geodesic:</source>
            <translation>Geodetica:</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="274" />
            <source>Ellipsoidal distance along the profile line.</source>
            <translation>Distanza ellissoidica lungo la linea del profilo.</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="287" />
            <source>Copyable ellipsoidal distance along the profile line.</source>
            <translation>Distanza ellissoidica copiabile lungo la linea del profilo.</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="290" />
            <location filename="../ui/profiletool.ui" line="326" />
            <source>—</source>
            <translation>—</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="307" />
            <source>Planar:</source>
            <translation>Planare:</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="310" />
            <source>Planar distance is not reported for geographic CRSs because coordinate lengths in degrees are not meaningful surface distances.</source>
            <translation>La distanza planare non viene indicata per i CRS geografici, perch? le lunghezze delle coordinate in gradi non rappresentano distanze significative sulla superficie.</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="323" />
            <source>Copyable planar length in map units (or converted to meters). Not applicable for geographic CRSs; use the geodesic distance instead.</source>
            <translation>Lunghezza planare copiabile nelle unit? della mappa (o convertita in metri). Non applicabile ai CRS geografici; usare invece la distanza geodetica.</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="375" />
            <source>PDF</source>
            <translation>PDF</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="380" />
            <source>PNG</source>
            <translation>PNG</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="385" />
            <source>SVG</source>
            <translation>SVG</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="390" />
            <source>print (PS)</source>
            <translation>Stampa (PS)</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="398" />
            <source>Save as</source>
            <translation>Salva come</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="469" />
            <source>Add Layer</source>
            <translation>Aggiungi layer</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="494" />
            <source>Remove Layer</source>
            <translation>Rimuovi layer</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="503" />
            <source>Options</source>
            <translation>Opzioni</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="519" />
            <source>Temporary polyline</source>
            <translation>Polilinea temporanea</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="524" />
            <source>Selected polyline</source>
            <translation>Polilinea selezionata</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="529" />
            <source>Selected layer</source>
            <translation>Layer selezionato</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="537" />
            <source>Show cursor</source>
            <translation>Mostra cursore</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="553" />
            <source>Link mouse position 
on graph with canvas</source>
            <translation>Collega la posizione del mouse
nel grafico alla mappa</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="564" />
            <source>Selection</source>
            <translation>Selezione</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="579" />
            <source>Table</source>
            <translation>Tabella</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="603" />
            <source>Settings</source>
            <translation>Impostazioni</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="609" />
            <source>Plot library</source>
            <translation>Libreria grafica</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="621" />
            <source>Tool Settings</source>
            <translation>Impostazioni strumento</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="627" />
            <source>Live update</source>
            <translation>Aggiornamento in tempo reale</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="637" />
            <source>Same axis scale</source>
            <translation>Stessa scala degli assi</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="650" />
            <source>Unchecked, each polyline segment is profiled with a max of 1000 points. When checked, each segment is profiled with the map's full resolution.</source>
            <translation>Se non selezionato, ogni segmento della polilinea viene campionato con un massimo di 1000 punti. Se selezionato, ogni segmento viene campionato alla risoluzione completa della mappa.</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="653" />
            <source>Full resolution enabled</source>
            <translation>Risoluzione completa attiva</translation>
        </message>
        <message>
            <location filename="../ui/profiletool.ui" line="660" />
            <source>Save selected points in layer "profile_points"</source>
            <translation>Salva i punti selezionati nel layer "profile_points"</translation>
        </message>
    </context>
    <context>
        <name>ProfileToolCore</name>
        <message>
            <location filename="../tools/profiletool_core.py" line="248" />
            <source>Unavailable</source>
            <translation>Non disponibile</translation>
        </message>
        <message>
            <location filename="../tools/profiletool_core.py" line="256" />
            <source>Copyable ellipsoidal distance along the profile line.</source>
            <translation>Distanza ellissoidica copiabile lungo la linea del profilo.</translation>
        </message>
        <message>
            <location filename="../tools/profiletool_core.py" line="264" />
            <source>Not applicable</source>
            <translation>Non applicabile</translation>
        </message>
        <message>
            <location filename="../tools/profiletool_core.py" line="267" />
            <source>Planar distance is not reported for geographic CRSs because coordinate lengths in degrees are not meaningful surface distances. Use the geodesic readout.</source>
            <translation>La distanza planare non viene indicata per i CRS geografici, perch? le lunghezze delle coordinate in gradi non rappresentano distanze significative sulla superficie. Usare la distanza geodetica.</translation>
        </message>
        <message>
            <location filename="../tools/profiletool_core.py" line="287" />
            <source>Copyable planar length in map units (or converted to meters).</source>
            <translation>Lunghezza planare copiabile nelle unit? della mappa (o convertita in metri).</translation>
        </message>
    </context>
</TS>
