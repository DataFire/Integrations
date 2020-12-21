# @datafire/tomtom_maps

Client library for Maps

## Installation and Usage
```bash
npm install --save @datafire/tomtom_maps
```
```js
let tomtom_maps = require('@datafire/tomtom_maps').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Maps API web services suite offers the following APIs:
  - Raster
  The Maps Raster API renders map data that is divided into gridded sections called tiles. Tiles are square images (png or jpg format) in various sizes which are available at 19 different zoom levels, ranging from 0 to 20. For zoom level 0, the entire earth is displayed on one single tile, while at zoom level 20, the world is divided into 2<sup>40</sup> tiles.
  - Vector
  Similar to Maps Raster API, the Maps Vector API serves data on different zoom level ranging from 0 to 22. For zoom level 0, the entire earth is displayed on one single tile, while at zoom level 22, the world is divided into 2<sup>44</sup> tiles.
  The Maps Vector Service delivers geographic map data packaged in a vector representation of squared sections called vector tiles. Each tile includes pre-defined collections of map features (points, lines, road shapes, water polygons, building footprints, ect.) delivered in one of the specified vector formats. Format of the tile is formally described using protobuf schema.

## Actions

### map.versionNumber.copyrights.format.get
The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for the whole world.


```js
tomtom_maps.map.versionNumber.copyrights.format.get({
  "versionNumber": 0,
  "format": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 1): Version of the service to call. The current version is 1
  * format **required** `string` (values: json, jsonp, xml): Format of the response
  * callback `string`: Specifies the jsonp callback method. Only used when format is jsonp

#### Output
*Output schema unknown*

### map.versionNumber.copyrights.caption.format.get
This API returns copyright captions for the map service.


```js
tomtom_maps.map.versionNumber.copyrights.caption.format.get({
  "versionNumber": 0,
  "format": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 1): Version of the service to call. The current version is 1.
  * format **required** `string` (values: json, jsonp, xml): Format of the response
  * callback `string`: Specifies the jsonp callback method. Only used when format is jsonp

#### Output
*Output schema unknown*

### map.versionNumber.copyrights.minLon.minLat.maxLon.maxLat.format.get
The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for a specific bounding box.


```js
tomtom_maps.map.versionNumber.copyrights.minLon.minLat.maxLon.maxLat.format.get({
  "versionNumber": 0,
  "format": "",
  "minLon": 0,
  "minLat": 0,
  "maxLon": 0,
  "maxLat": 0
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 1): Version of the service to call. The current version is 1
  * format **required** `string` (values: json, jsonp, xml): Format of the response
  * minLon **required** `number`: Minimum longitude coordinate of bounding box defined in terms of latitude/longitude.
  * minLat **required** `number`: Minimum latitude coordinate of bounding box defined in terms of latitude/longitude.
  * maxLon **required** `number`: Maximum longitude coordinate of bounding box defined in terms of latitude/longitude.
  * maxLat **required** `number`: Maximum latitude coordinate of bounding box defined in terms of latitude/longitude.
  * callback `string`: Specifies the jsonp callback method. Only used when format is jsonp.

#### Output
*Output schema unknown*

### map.versionNumber.copyrights.zoom.X.Y.format.get
The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for the a specific map tile.


```js
tomtom_maps.map.versionNumber.copyrights.zoom.X.Y.format.get({
  "versionNumber": 0,
  "format": "",
  "zoom": 0,
  "X": 0,
  "Y": 0
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 1): Version of the service to call. The current version is 1
  * format **required** `string` (values: json, jsonp, xml): Format of the response
  * zoom **required** `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18): Zoom level of tile to be rendered. Only used for tile-level
  * X **required** `integer`: X coordinate of the tile on zoom grid. Only used for tile-level
  * Y **required** `integer`: Y coordinate of the tile on zoom grid. Only used for tile-level
  * callback `string`: Specifies the jsonp callback method. Only used when format is jsonp.

#### Output
*Output schema unknown*

### map.versionNumber.staticimage.get
The Static Image service renders a rectangular raster image
in the style, size, and zoom level specified. The image can be requested
using either a center point plus width and height or a bounding box.


```js
tomtom_maps.map.versionNumber.staticimage.get({
  "versionNumber": 0
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 1): Version of the service to call. The current version is 1.
  * layer `string` (values: basic, hybrid, labels): Layer of image to be rendered. <em>Hybrid</em> and <em>labels</em>
  * style `string` (values: main, night): Map style to be returned
  * format `string` (values: png, jpg, jpeg): Image format to be returned
  * zoom `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22): Zoom level of map image to be returned.
  * center `string`: Coordinates for the center point of the image.
  * width `integer`: Width of the resulting image in pixels. Width must be a positive integer between 1 and 8192.
  * height `integer`: Height of the resulting image in pixels. Height must be a positive integer between 1 and 8192.
  * bbox `string`: Bounding box for the image, using EPSG:3857 projection (functionally equivalent to EPSG:900910).
  * view `string` (values: Unified, IN): Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-api/maps-api-documentation-raster/raster-tile">documentation</a> for an explanation of how this works in live services.

#### Output
*Output schema unknown*

### map.versionNumber.tile.layer.style.zoom.X.Y.pbf.get
The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.


```js
tomtom_maps.map.versionNumber.tile.layer.style.zoom.X.Y.pbf.get({
  "versionNumber": 0,
  "layer": "",
  "style": "",
  "zoom": 0,
  "X": 0,
  "Y": 0
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 1): Version of the service to call. The current version is 1
  * layer **required** `string` (values: basic, hybrid, labels): Layer of tile to be rendered
  * style **required** `string` (values: main): Style of tile to be rendered
  * zoom **required** `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22): Zoom level of tile to be rendered
  * X **required** `integer`: x coordinate of tile on zoom grid
  * Y **required** `integer`: y coordinate of tile on zoom grid
  * view `string` (values: Unified, IL, IN): Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-api/maps-api-documentation-vector/tile">documentation</a> for an explanation of how this works in live services.
  * language `string`: Language to be used for labels in the response. The default is NGT: Neutral Ground Truth, which uses each place's local official language and script (where available). See the <a href="/maps-api/maps-api-documentation-vector/tile">documentation</a> for a full list of options.

#### Output
*Output schema unknown*

### map.versionNumber.tile.layer.style.zoom.X.Y.format.get
The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.


```js
tomtom_maps.map.versionNumber.tile.layer.style.zoom.X.Y.format.get({
  "versionNumber": 0,
  "layer": "",
  "style": "",
  "zoom": 0,
  "X": 0,
  "Y": 0,
  "format": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 1): Version of the service to call. The current version is 1.
  * layer **required** `string` (values: basic, hybrid, labels): Layer of tile to be rendered. <em>Hybrid</em> and <em>labels</em> are intended for layering with other data and are only available in <em>png</em> format.
  * style **required** `string` (values: main, night): Style of tile to be rendered
  * zoom **required** `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22): Zoom level of tile to be rendered
  * X **required** `integer`: x coordinate of tile on zoom grid
  * Y **required** `integer`: y coordinate of tile on zoom grid
  * format **required** `string` (values: jpg, png): Format of the response.
  * tileSize `integer` (values: 256, 512): Tile dimensions in pixels. <em>512</em> is only available for the <em>main</em> style and <em>basic</em> or <em>labels</em> layers.
  * view `string` (values: Unified, IN): Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-sdk-web/functional-examples#geopolitical-views">documentation</a> for an explanation of how this works in live services.

#### Output
*Output schema unknown*

### GetMap
The GetMap call implements the Web Map Service 1.1.1 standard
to access TomTom raster map tiles. This service is described
in the response to the GetCapabilities API call.


```js
tomtom_maps.GetMap({
  "versionNumber": 0,
  "request": "",
  "srs": "",
  "bbox": "",
  "width": 0,
  "height": 0,
  "format": "",
  "layers": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 1): Version of the service to call. The current version is 1
  * request **required** `string` (values: GetMap): Request type
  * srs **required** `string` (values: EPSG:3857, EPSG:4326): Projection used in describing the <b>bbox</b> EPSG:3857 is
  * bbox **required** `string`: Bounding box in the projection stated in <b>srs</b>
  * width **required** `integer`: Width of the resulting image, in pixels Maximum value is 2048
  * height **required** `integer`: Height of the resulting image, in pixels Maximum value is 2048
  * format **required** `string` (values: image/jpeg, image/png): Image format to be returned
  * layers **required** `string` (values: basic): Map layers requested Currently only the basic layer is available
  * styles `string` (values: ): Map styles to be returned. Currently, no styles are available. This
  * service `string` (values: WMS): Service type
  * version **required** `string` (values: 1.1.1): WMS service version

#### Output
*Output schema unknown*

### GetCapabilities
The GetCapabilities call is part of TomTom's implementation of version 1.1.1
the Web Map Service (WMS). It provides descriptions of the other calls
that are available in the implementation.


```js
tomtom_maps.GetCapabilities({
  "versionNumber": 0,
  "service": "",
  "request": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 1)
  * service **required** `string` (values: WMS)
  * request **required** `string` (values: GetCapabilities)
  * version `string` (values: 1.1.1): WMS service version

#### Output
*Output schema unknown*

### map.versionNumber.wmts.key.wmtsVersion.WMTSCapabilities.xml.get
The WMTS GetCapabilities call implements version 1.0.0 of
the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
(WMTS) standard. It returns metadata that allows compatible calling systems to construct
calls to TomTom's raster map tile service. See the
<a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
for more information on WMTS.


```js
tomtom_maps.map.versionNumber.wmts.key.wmtsVersion.WMTSCapabilities.xml.get({
  "versionNumber": 0,
  "key": "",
  "wmtsVersion": ""
}, context)
```

#### Input
* input `object`
  * versionNumber **required** `integer` (values: 1): Version of the service to call. The current version is 1
  * key **required** `string`: Your API key for calling this service.
  * wmtsVersion **required** `string` (values: 1.0.0)

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
