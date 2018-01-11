# @datafire/gov_bc_ca_geocoder

Client library for Geocoder

## Installation and Usage
```bash
npm install --save @datafire/gov_bc_ca_geocoder
```
```js
let gov_bc_ca_geocoder = require('@datafire/gov_bc_ca_geocoder').create({
  apikey: ""
});

gov_bc_ca_geocoder.addresses.outputFormat.get({}).then(data => {
  console.log(data);
})
```

## Description

This API represents address cleaning, correction, completion, geocoding, reverse geocoding, and proximity resources for intersection addresses, physical addresses and their occupants in British Columbia. CORS is enabled for gov.bc.ca only. Please read our <a href=https://github.com/bcgov/api-specs/blob/master/COLLECTION_NOTICE.md#collection-notice target="_blank">data collection notice</a>

## Actions

### addresses.outputFormat.get
Represents the set of geocoded and standardized sites and intersections whose address best matches a given query address.


```js
gov_bc_ca_geocoder.addresses.outputFormat.get({
  "outputFormat": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
  * addressString `string`: Examples: 525 Superior Street, Victoria, BC<br>301-780 Blanshard St, Victoria, BC<br>Johnson St and Government St, Victoria, BC.<br> Civic or intersection address as a single string. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#addressString target="_blank">addressString</a>
  * locationDescriptor `string` (values: any, accessPoint, frontDoorPoint, parcelPoint, rooftopPoint, routingPoint): Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
  * maxResults `integer`: The maximum number of search results to return.
  * interpolation `string` (values: adaptive, linear, none): accessPoint interpolation method. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#interpolation target="_blank">interpolation</a>
  * echo `boolean`: If true, include unmatched address details such as site name in results.
  * brief `boolean`: If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.
  * autoComplete `boolean`: If true, addressString is expected to contain a partial address that requires completion. Not supported for shp, csv, gml formats.
  * setBack `integer`: The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
  * minScore `integer`: The minimum score required for a match to be returned. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#minScore target="_blank">minScore</a>
  * matchPrecision `string`: Example: street,locality.  A comma separated list of individual match precision levels to include in results. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#matchPrecision target="_blank">matchPrecision</a>
  * matchPrecisionNot `string`: Example: street,locality.  A comma separated list of individual match precision levels to exclude from results. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#matchPrecisionNot target="_blank">matchPrecisionNot</a>
  * siteName `string`: A string containing the name of the building, facility, or institution (e.g., Duck Building, Casa Del Mar, Crystal Garden, Bluebird House).See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#siteName target="_blank">siteName</a>
  * unitDesignator `string` (values: APT, BLDG, BSMT, FLR, LOBBY, LWR, PAD, PH, REAR, RM, SIDE, SITE, SUITE, TH, UNIT, UPPR): The type of unit within a house or building. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#unitDesignator target="_blank">unitDesignator</a>
  * unitNumber `string`: The number of the unit, suite, or apartment within a house or building.
  * unitNumberSuffix `string`: A letter that follows the unit number as in Unit 1A or Suite 302B.
  * civicNumber `string`: The official number assigned to a site by an address authority. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#civicNumber target="_blank">civicNumber</a>
  * civicNumberSuffix `string`: A letter or fraction that follows the civic number (e.g., the A in 1039A Bledsoe St). See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#civicNumberSuffix target="_blank">civicNumberSuffix</a>
  * streetName `string`: The official name of the street as assigned by an address authority (e.g., the Douglas in 1175 Douglas Street). See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetName target="_blank">streetName</a>
  * streetType `string`: The type of street as assigned by a municipality (e.g., the ST in 1175 DOUGLAS St). See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetType target="_blank">streetType</a>
  * streetDirection `string` (values: N, S, E, W, O, NE, NO, NW, SE, SO, SW): The abbreviated compass direction as defined by Canada Post and B.C. civic addressing authorities. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetDirection target="_blank">streetDirection</a>
  * streetQualifier `string`: Example: the Bridge in Johnson St Bridge. The qualifier of a street name. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetQualifier target="_blank">streetQualifier</a>
  * localityName `string`: The name of the locality assigned to a given site by an address authority. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#localityName target="_blank">localityName</a>
  * provinceCode `string`: The ISO 3166-2 Sub-Country Code. The code for British Columbia is BC.
  * localities `string`: A comma separated list of locality names that matched addresses must belong to. For example, setting localities to Nanaimo only returns addresses in Nanaimo
  * notLocalities `string`: A comma-separated list of localities to exclude from the search.
  * bbox `string`: Example: -126.07929,49.7628,-126.0163,49.7907.  A bounding box (xmin,ymin,xmax,ymax) that limits the search area. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#bbox target="_blank">bbox</a>
  * centre `string`: Example: -124.0165926,49.2296251 .  The coordinates of a centre point (x,y) used to define a bounding circle that will limit the search area. This parameter must be specified together with 'maxDistance'. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#centre target='_blank'>centre</a>
  * maxDistance `number`: The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
  * extrapolate `boolean`: If true, uses supplied parcelPoint to derive an appropriate accessPoint.           See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#extrapolate target="_blank">extrapolate</a>
  * parcelPoint `string`: The coordinates of a point (x,y) known to be inside the parcel containing a given address. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#parcelPoint target="_blank">parcelPoint</a>

#### Output
*Output schema unknown*

### intersections.near.outputFormat.get
Represents intersections near a given point


```js
gov_bc_ca_geocoder.intersections.near.outputFormat.get({
  "outputFormat": "",
  "point": "",
  "outputSRS": 0
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
  * point **required** `string`: Example: -122.377,50.121  The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.
  * maxDistance `integer`: The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
  * outputSRS **required** `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgovapi-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
  * maxResults `integer`: The maximum number of search results to return.
  * minDegree `integer`: The minimum degree an intersection can have to be included in results. A dead-end has a degree of 1.
  * maxDegree `integer`: The maximum degree an interesection can have to be included in results. A four-way stop has a degree of 4.

#### Output
*Output schema unknown*

### intersections.nearest.outputFormat.get
Represents the closest intersection to a given point


```js
gov_bc_ca_geocoder.intersections.nearest.outputFormat.get({
  "outputFormat": "",
  "point": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
  * point **required** `string`: Example: -122.377,50.121  The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.
  * maxDistance `integer`: The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
  * minDegree `integer`: The minimum degree an intersection can have to be included in results. A dead-end has a degree of 1.
  * maxDegree `integer`: The maximum degree an interesection can have to be included in results. A four-way stop has a degree of 4.

#### Output
*Output schema unknown*

### intersections.within.outputFormat.get
Represents all intersections within a given area


```js
gov_bc_ca_geocoder.intersections.within.outputFormat.get({
  "outputFormat": "",
  "bbox": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormattarget="_blank">outputFormat</a>
  * bbox **required** `string`: Example: -119.51,49.48,-119.53,49.50. A bounding box (xmin,ymin,xmax,ymax) used to limit the search area. See <a href=https://github.com/bcgovapi-specs/blob/master/geocoder/glossary.md#bbox target="_blank">bbox</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
  * maxResults `integer`: The maximum number of search results
  * minDegree `integer`: The minimum degree an intersection can have to be included in results. A dead-end has a degree of 1.
  * maxDegree `integer`: The maximum degree an interesection can have to be included in results. A four-way stop has a degree of 4.

#### Output
*Output schema unknown*

### intersections.intersectionID.outputFormat.get
Represents a individual intersection


```js
gov_bc_ca_geocoder.intersections.intersectionID.outputFormat.get({
  "intersectionID": "",
  "outputFormat": ""
}, context)
```

#### Input
* input `object`
  * intersectionID **required** `string`: A unique intersection identifier
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>

#### Output
*Output schema unknown*

### occupants.addresses.outputFormat.get
Represents the set of occupants whose addresses best match a given query address. Every occupant has an associated site which has a standardized address and a coordinate location on the Earth.


```js
gov_bc_ca_geocoder.occupants.addresses.outputFormat.get({
  "outputFormat": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
  * addressString `string`: Examples: Redfish Elementary --<br>Redfish Elementary -- Balfour<br>Redfish Elementary School -- 265 Bryan Rd, Balfour, BC<br>Occupant name followed by a frontGate delimiter ('--') followed by an optional address
  * tags `string`: Example: schools;courts;employment<br>A list of tags separated by semicolons.
  * locationDescriptor `string` (values: any, accessPoint, frontDoorPoint, parcelPoint, rooftopPoint, routingPoint): Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
  * maxResults `integer`: The maximum number of search results to return.
  * interpolation `string` (values: adaptive, linear, none): accessPoint interpolation method. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#interpolation target="_blank">interpolation</a>
  * echo `boolean`: If true, include unmatched address details such as site name in results.
  * brief `boolean`: If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.
  * autoComplete `boolean`: If true, addressString is expected to contain a partial address that requires completion. Not supported for shp, csv, gml formats.
  * setBack `integer`: The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
  * minScore `integer`: The minimum score required for a match to be returned. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#minScore target="_blank">minScore</a>
  * matchPrecision `string`: Example: street,locality.  A comma separated list of individual match precision levels to include in results. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#matchPrecision target="_blank">matchPrecision</a>
  * matchPrecisionNot `string`: Example: street,locality.  A comma separated list of individual match precision levels to exclude from results. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#matchPrecisionNot target="_blank">matchPrecisionNot</a>
  * siteName `string`: A string containing the name of the building, facility, or institution (e.g., Duck Building, Casa Del Mar, Crystal Garden, Bluebird House).See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#siteName target="_blank">siteName</a>
  * unitDesignator `string` (values: APT, BLDG, BSMT, FLR, LOBBY, LWR, PAD, PH, REAR, RM, SIDE, SITE, SUITE, TH, UNIT, UPPR): The type of unit within a house or building. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#unitDesignator target="_blank">unitDesignator</a>
  * unitNumber `string`: The number of the unit, suite, or apartment within a house or building.
  * unitNumberSuffix `string`: A letter that follows the unit number as in Unit 1A or Suite 302B.
  * civicNumber `string`: The official number assigned to a site by an address authority. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#civicNumber target="_blank">civicNumber</a>
  * civicNumberSuffix `string`: A letter or fraction that follows the civic number (e.g., the A in 1039A Bledsoe St). See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#civicNumberSuffix target="_blank">civicNumberSuffix</a>
  * streetName `string`: The official name of the street as assigned by an address authority (e.g., the Douglas in 1175 Douglas Street). See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetName target="_blank">streetName</a>
  * streetType `string`: The type of street as assigned by a municipality (e.g., the ST in 1175 DOUGLAS St). See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetType target="_blank">streetType</a>
  * streetDirection `string` (values: N, S, E, W, O, NE, NO, NW, SE, SO, SW): The abbreviated compass direction as defined by Canada Post and B.C. civic addressing authorities. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetDirection target="_blank">streetDirection</a>
  * streetQualifier `string`: The qualifier of a street name (e.g., the Bridge in Johnson St Bridge)
  * localityName `string`: The name of the locality assigned to a given site by an address authority. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetDirection target="_blank">streetDirection</a>
  * provinceCode `string`: The ISO 3166-2 Sub-Country Code. The code for British Columbia is BC.
  * localities `string`: A comma separated list of locality names that matched addresses must belong to. For example, setting localities to Nanaimo only returns addresses in Nanaimo
  * notLocalities `string`: A comma-separated list of localities to exclude from the search.
  * bbox `string`: Example: -126.07929,49.7628,-126.0163,49.7907.  A bounding box (xmin,ymin,xmax,ymax) that limits the search area. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#bbox target="_blank">bbox</a>
  * centre `string`: Example: -124.0165926,49.2296251 .  The coordinates of a centre point (x,y) used to define a bounding circle that will limit the search area. This parameter must be specified together with 'maxDistance'. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#centre target='_blank'>centre</a>
  * maxDistance `number`: The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
  * extrapolate `boolean`: If true, uses supplied parcelPoint to derive an appropriate accessPoint.           See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#extrapolate target="_blank">extrapolate</a>
  * parcelPoint `string`: The coordinates of a point (x,y) known to be inside the parcel containing a given address. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#parcelPoint target="_blank">parcelPoint</a>

#### Output
*Output schema unknown*

### occupants.near.outputFormat.get
Represents occupants near a given point in order of closest to farthest


```js
gov_bc_ca_geocoder.occupants.near.outputFormat.get({
  "outputFormat": "",
  "point": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
  * point **required** `string`: Example: -122.377,50.121  The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.
  * tags `string`: Example: schools;courts;employment<br>A list of tags separated by semicolons.
  * maxDistance `integer`: The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
  * maxResults `integer`: The maximum number of search results to return.
  * locationDescriptor `string` (values: any, accessPoint, frontDoorPoint, parcelPoint, rooftopPoint, routingPoint): Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
  * brief `boolean`: If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.
  * setBack `integer`: The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.

#### Output
*Output schema unknown*

### occupants.nearest.outputFormat.get
Represents the closest occupant to a given point


```js
gov_bc_ca_geocoder.occupants.nearest.outputFormat.get({
  "outputFormat": "",
  "point": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
  * point **required** `string`: Example: -122.377,50.121  The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.
  * maxDistance `integer`: The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
  * tags `string`: Example: schools;courts;employment<br>A list of tags separated by semicolons.
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
  * locationDescriptor `string` (values: any, accessPoint, frontDoorPoint, parcelPoint, rooftopPoint, routingPoint): Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
  * brief `boolean`: If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.
  * setBack `integer`: The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.

#### Output
*Output schema unknown*

### occupants.within.outputFormat.get
Represents all occupants within a given area


```js
gov_bc_ca_geocoder.occupants.within.outputFormat.get({
  "outputFormat": "",
  "bbox": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
  * bbox **required** `string`: Example: -119.51,49.48,-119.53,49.50. A bounding box (xmin,ymin,xmax,ymax) used to limit the search area. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#bbox target="_blank">bbox</a>
  * tags `string`: Example: schools;courts;employment<br>A list of tags separated by semicolons.
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgovapi-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
  * maxResults `integer`: The maximum number of search results to return.
  * locationDescriptor `string` (values: any, accessPoint, frontDoorPoint, parcelPoint, rooftopPoint, routingPoint): Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
  * brief `boolean`: If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.
  * setBack `integer`: The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.

#### Output
*Output schema unknown*

### occupants.occupantID.outputFormat.get
Represents an individual occupant


```js
gov_bc_ca_geocoder.occupants.occupantID.outputFormat.get({
  "occupantID": "",
  "outputFormat": ""
}, context)
```

#### Input
* input `object`
  * occupantID **required** `string`: Occupant identifier
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgovapi-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
  * locationDescriptor `string` (values: any, accessPoint, frontDoorPoint, parcelPoint, rooftopPoint, routingPoint): Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
  * brief `boolean`: If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.
  * setBack `integer`: The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.

#### Output
*Output schema unknown*

### sites.near.outputFormat.get
Represents sites near a given point in the order of closest to farthest


```js
gov_bc_ca_geocoder.sites.near.outputFormat.get({
  "outputFormat": "",
  "point": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
  * point **required** `string`: Example: -122.377,50.121  The point (x,y) from which the nearby sites will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.
  * maxDistance `integer`: The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
  * maxResults `integer`: The maximum number of search results to return.
  * locationDescriptor `string` (values: any, accessPoint, frontDoorPoint, parcelPoint, rooftopPoint, routingPoint): Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
  * setBack `integer`: The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
  * brief `boolean`: If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.
  * excludeUnits `boolean`: If true, excludes sites that are units of a parent site
  * onlyCivic `boolean`: If true, excludes sites without a civic address

#### Output
*Output schema unknown*

### sites.nearest.outputFormat.get
Represents the site nearest a given point


```js
gov_bc_ca_geocoder.sites.nearest.outputFormat.get({
  "outputFormat": "",
  "point": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
  * point **required** `string`: Example: -122.377,50.121  Centre point of search. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#point target="_blank">point</a>
  * maxDistance `integer`: The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
  * locationDescriptor `string` (values: any, accessPoint, frontDoorPoint, parcelPoint, rooftopPoint, routingPoint): Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
  * setBack `integer`: The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
  * brief `boolean`: If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.
  * excludeUnits `boolean`: If true, excludes sites that are units of a parent site
  * onlyCivic `boolean`: If true, excludes sites without a civic address

#### Output
*Output schema unknown*

### sites.within.outputFormat.get
Represents sites within a given area


```js
gov_bc_ca_geocoder.sites.within.outputFormat.get({
  "outputFormat": "",
  "bbox": ""
}, context)
```

#### Input
* input `object`
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
  * bbox **required** `string`: Example: -119.51,49.48,-119.53,49.50. A bounding box (xmin,ymin,xmax,ymax) used to limit the search area. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#bbox target="_blank">bbox</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
  * maxResults `integer`: The maximum number of search results to return.
  * locationDescriptor `string` (values: any, accessPoint, frontDoorPoint, parcelPoint, rooftopPoint, routingPoint): Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
  * setBack `integer`: The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
  * brief `boolean`: If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.
  * excludeUnits `boolean`: If true, excludes sites that are units of a parent site
  * onlyCivic `boolean`: If true, excludes sites without a civic address

#### Output
*Output schema unknown*

### sites.siteID.outputFormat.get
Represents an individual site


```js
gov_bc_ca_geocoder.sites.siteID.outputFormat.get({
  "siteID": "",
  "outputFormat": ""
}, context)
```

#### Input
* input `object`
  * siteID **required** `string`: A unique, but not immutable, site identifier.
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
  * locationDescriptor `string` (values: any, accessPoint, frontDoorPoint, parcelPoint, rooftopPoint, routingPoint): Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
  * brief `boolean`: If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.
  * setBack `integer`: The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.

#### Output
*Output schema unknown*

### sites.siteID.subsites.outputFormat.get
Represents all subsites of a given site


```js
gov_bc_ca_geocoder.sites.siteID.subsites.outputFormat.get({
  "siteID": "",
  "outputFormat": ""
}, context)
```

#### Input
* input `object`
  * siteID **required** `string`: A unique, but not immutable, site identifier.
  * outputFormat **required** `string` (values: json, geojson, xhtml, kml, gml, csv, shpz): Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
  * outputSRS `integer` (values: 4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911): The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
  * locationDescriptor `string` (values: any, accessPoint, frontDoorPoint, parcelPoint, rooftopPoint, routingPoint): Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
  * brief `boolean`: If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.
  * setBack `integer`: The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.

#### Output
*Output schema unknown*



## Definitions

** No definitions **
