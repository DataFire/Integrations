# @datafire/gov_bc_ca_geomark

Client library for GeoMark Web Service

## Installation and Usage
```bash
npm install --save datafire @datafire/gov_bc_ca_geomark
```

```js
let datafire = require('datafire');
let gov_bc_ca_geomark = require('@datafire/gov_bc_ca_geomark').create();

gov_bc_ca_geomark.geomarks.new.post({}).then(data => {
  console.log(data);
})
```

## Description
The Geomark Web Service allows you to create and share geographic areas of interest over the web in a variety of formats and coordinate systems. This service is especially helpful when you need to share an area of interest with people who require that the data be in a different format, or they use different mapping software.

## Actions
### geomarks.copy.post
The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks


```js
gov_bc_ca_geomark.geomarks.copy.post({
  "geomarkUrl": ""
}, context)
```

#### Parameters
* geomarkUrl (string) **required** - One or more geomark URLs or identifiers to create the new geomark from.
* resultFormat (string) - The file format the geomark info resource should be returned using.
* callback (string) - The callback function a JSON result format would be wrapped in to support Ajax requests.
* redirectUrl (string) - The optional external URL to redirect the user to when the geomark is created rather than showing the geomark info page. The geomarkId and geomarkUrl query string parameters will be added to the redirectUrl so that the target application gets a reference to the geomark.
* failureRedirectUrl (string) - The url to redirect if the geomark could not be created. The URL will include a <fieldName>_Error parameter with the error message for the field that caused the error.
* bufferMetres (integer) - The amount to buffer the geometry in metres, must only contain numerical digits (e.g 10). Leave blank and no buffer will be added to input geometries. If blank then any Point, LineString, MultiPoint and MultiLineString geometries will be ignored.
* bufferJoin (string) - If bufferMetres is specified, The style of buffer to use for joins between the line segments for lines and polygons.
* bufferCap (string) - If bufferMetres is specified, The style of buffer to use at the ends of a buffered line.
* bufferMitreLimit (integer) - If bufferMetres is specified, the maximum ratio of distance from the original geometry to a mitre buffer point and the buffer amount. If the ratio is greater than this a bevel will be used instead. This prevents infinite distances when the angle between the two lines at a join is small. Must be > 0.
* bufferSegments (integer) - If bufferMetres is specified, the number of line segments used in each quadrant to approximate the curve for round end-cap and join styles. Must be > 0.

### geomarks.new.post
Create a new geomark from the geometries read from the 'body' parameter or file.


```js
gov_bc_ca_geomark.geomarks.new.post({}, context)
```

#### Parameters
* format (string) - The file format name extension of the input geometry.
* srid (integer) - The srid of the coordinate system the input geometries are in. If the file includes a coordinate system definition that will be used.
* resultFormat (string) - The file format the geomark info resource should be returned using.
* multiple (boolean) - Boolean flag indicating if multiple geometries are to be used for the geomark (true) or only a single geometry from the first geometry (false).
* callback (string) - The callback function a JSON result format would be wrapped in to support Ajax requests.
* redirectUrl (string) - The optional external URL to redirect the user to when the geomark is created rather than showing the geomark info page. The geomarkId and geomarkUrl query string parameters will be added to the redirectUrl so that the target application gets a reference to the geomark.
* failureRedirectUrl (string) - The url to redirect if the geomark could not be created. The URL will include a <fieldName>_Error parameter with the error message for the field that caused the error.
* bufferMetres (integer) - The amount to buffer the geometry in metres, must only contain numerical digits (e.g 10). Leave blank and no buffer will be added to input geometries. If blank then any Point, LineString, MultiPoint and MultiLineString geometries will be ignored.
* bufferJoin (string) - If bufferMetres is specified, The style of buffer to use for joins between the line segments for lines and polygons.
* bufferCap (string) - If bufferMetres is specified, The style of buffer to use at the ends of a buffered line.
* bufferMitreLimit (integer) - If bufferMetres is specified, the maximum ratio of distance from the original geometry to a mitre buffer point and the buffer amount. If the ratio is greater than this a bevel will be used instead. This prevents infinite distances when the angle between the two lines at a join is small. Must be > 0.
* bufferSegments (integer) - If bufferMetres is specified, the number of line segments used in each quadrant to approximate the curve for round end-cap and join styles. Must be > 0.
* body (string) - The binary or character content representing the geometry or geometries

### geomarks.geomarkId.fileFormatExtension.get
The attribution can be downloaded as a info file format. The download files can then be processed by a client application to access the geomark info fields and to get the URLs to the geometry download resources.


```js
gov_bc_ca_geomark.geomarks.geomarkId.fileFormatExtension.get({
  "geomarkId": "",
  "fileFormatExtension": ""
}, context)
```

#### Parameters
* geomarkId (string) **required** - The unique identifier for the geomark (e.g. gm-abcdefghijklmnopqrstuv0bcislands).
* fileFormatExtension (string) **required** - The file format name extension used to represent the geomark download.
* srid (integer) - The srid of the coordinate system the geometry should be converted to.

### geomarks.geomarkId.boundingBox.fileFormatExtension.get
The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks


```js
gov_bc_ca_geomark.geomarks.geomarkId.boundingBox.fileFormatExtension.get({
  "geomarkId": "",
  "fileFormatExtension": ""
}, context)
```

#### Parameters
* geomarkId (string) **required** - The unique identifier for the geomark (e.g. gm-abcdefghijklmnopqrstuv0bcislands).
* fileFormatExtension (string) **required** - The file format name extension used to represent the geomark download.
* srid (integer) - The srid of the coordinate system the geometry should be converted to.

### geomarks.geomarkId.feature.fileFormatExtension.get
The geomark feature resource returns a single spatial feature with either a single (Point, LineString, Polygon) or multi-part geometry (MultiPoint, MultiLineString, MultiPolygon) and the geomark attribution.  The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.


```js
gov_bc_ca_geomark.geomarks.geomarkId.feature.fileFormatExtension.get({
  "geomarkId": "",
  "fileFormatExtension": ""
}, context)
```

#### Parameters
* geomarkId (string) **required** - The unique identifier for the geomark (e.g. gm-abcdefghijklmnopqrstuv0bcislands).
* fileFormatExtension (string) **required** - The file format name extension used to represent the geomark download.
* srid (integer) - The srid of the coordinate system the geometry should be converted to.

### geomarks.geomarkId.parts.fileFormatExtension.get
The geomark parts resource returns a one or more spatial features. One for each part of the Geomark's geomerty. Each part contains a single (Point, LineString, Polygon) geometry and the geomark attribution.


```js
gov_bc_ca_geomark.geomarks.geomarkId.parts.fileFormatExtension.get({
  "geomarkId": "",
  "fileFormatExtension": ""
}, context)
```

#### Parameters
* geomarkId (string) **required** - The unique identifier for the geomark (e.g. gm-abcdefghijklmnopqrstuv0bcislands).
* fileFormatExtension (string) **required** - The file format name extension used to represent the geomark download.
* srid (integer) - The srid of the coordinate system the geometry should be converted to.

### geomarks.geomarkId.point.fileFormatExtension.get
The geomark point resource returns a single spatial feature with a single Point and the geomark attribution.  The point geometry will be created from the first geometry part of the Geomark. Point geomarks will return the first Point part in the geomark.  LineString geomarks will return the first coordinate of the first LineString part in the geomark. Polygon geomarks will return the centroid or another point inside the first Polygon part in the geomark. The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.


```js
gov_bc_ca_geomark.geomarks.geomarkId.point.fileFormatExtension.get({
  "geomarkId": "",
  "fileFormatExtension": ""
}, context)
```

#### Parameters
* geomarkId (string) **required** - The unique identifier for the geomark (e.g. gm-abcdefghijklmnopqrstuv0bcislands).
* fileFormatExtension (string) **required** - The file format name extension used to represent the geomark download.
* srid (integer) - The srid of the coordinate system the geometry should be converted to.

