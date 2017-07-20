# @datafire/gov_bc_ca_geocoder

Client library for Gated Geocoder

## Installation and Usage
```bash
npm install --save datafire @datafire/gov_bc_ca_geocoder
```

```js
let datafire = require('datafire');
let gov_bc_ca_geocoder = require('@datafire/gov_bc_ca_geocoder').actions;

let account = {
  apikey: "",
}
let context = new datafire.Context({
  accounts: {
    gov_bc_ca_geocoder: account,
  }
})

gov_bc_ca_geocoder.addresses.outputFormat.get({}, context).then(data => {
  console.log(data);
})
```

## Description
This gated API computes the physical locations (i.e., latitude and longitude) and correct, standardized forms of civic and non-civic addresses in British Columbia.  CORS is enabled for any domain. To request an apikey, please contact the <a href=https://forms.gov.bc.ca/databc-contact-us/  target="_blank">DataBC Help Desk</a><br>Please read our <a href=https://github.com/bcgov/api-specs/blob/master/COLLECTION_NOTICE.md#collection-notice target="_blank">data collection notice</a>

## Actions
### addresses.outputFormat.get
Represents the set of geocoded and standardized sites and intersections whose address best matches a given query address.


```js
gov_bc_ca_geocoder.addresses.outputFormat.get({
  "outputFormat": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
* addressString (string) - Examples: 525 Superior Street, Victoria, BC<br>301-780 Blanshard St, Victoria, BC<br>Johnson St and Government St, Victoria, BC.<br> Civic or intersection address as a single string. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#addressString target="_blank">addressString</a>
* locationDescriptor (string) - Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
* maxResults (integer) - The maximum number of search results to return.
* interpolation (string) - accessPoint interpolation method. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#interpolation target="_blank">interpolation</a>
* echo (boolean) - If true, include unmatched address details such as site name in results.
* setBack (integer) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
* minScore (integer) - The minimum score required for a match to be returned. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#minScore target="_blank">minScore</a>
* matchPrecision (string) - Example: street,locality.  A comma separated list of individual match precision levels to include in results. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#matchPrecision target="_blank">matchPrecision</a>
* matchPrecisionNot (string) - Example: street,locality.  A comma separated list of individual match precision levels to exclude from results. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#matchPrecisionNot target="_blank">matchPrecisionNot</a>
* siteName (string) - A string containing the name of the building, facility, or institution (e.g., Duck Building, Casa Del Mar, Crystal Garden, Bluebird House).See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#siteName target="_blank">siteName</a>
* unitDesignator (string) - The type of unit within a house or building. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#unitDesignator target="_blank">unitDesignator</a>
* unitNumber (string) - The number of the unit, suite, or apartment within a house or building.
* unitNumberSuffix (string) - A letter that follows the unit number as in Unit 1A or Suite 302B.
* civicNumber (string) - The official number assigned to a site by an address authority. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#civicNumber target="_blank">civicNumber</a>
* civicNumberSuffix (string) - A letter or fraction that follows the civic number (e.g., the A in 1039A Bledsoe St). See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#civicNumberSuffix target="_blank">civicNumberSuffix</a>
* streetName (string) - The official name of the street as assigned by an address authority (e.g., the Douglas in 1175 Douglas Street). See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetName target="_blank">streetName</a>
* streetType (string) - The type of street as assigned by a municipality (e.g., the ST in 1175 DOUGLAS St). See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetType target="_blank">streetType</a>
* streetDirection (string) - The abbreviated compass direction as defined by Canada Post and B.C. civic addressing authorities. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetDirection target="_blank">streetDirection</a>
* streetQualifier (string) - Example: the Bridge in Johnson St Bridge. The qualifier of a street name. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetQulifier target="_blank">streetQualifier</a>
* localityName (string) - The name of the locality assigned to a given site by an address authority. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#localityName target="_blank">localityName</a>
* provinceCode (string) - The ISO 3166-2 Sub-Country Code. The code for British Columbia is BC.
* localities (string) - A comma separated list of locality names that matched addresses must belong to. For example, setting localities to Nanaimo only returns addresses in Nanaimo
* notLocalities (string) - A comma-separated list of localities to exclude from the search.
* bbox (string) - Example: -126.0792,49.7628,-126.0163,49.7907.  A bounding box (xmin,ymin,xmax,ymax) that limits the search area. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#bbox target="_blank">bbox</a>
* centre (string) - Example: -124.01659,49.2296.  The coordinates of a centre point (x,y) used to define a bounding circle that will limit the search area. This parameter must be specified together with 'maxDistance'. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#centre target='_blank'>centre</a>
* maxDistance (number) - The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
* extrapolate (boolean) - If true, uses supplied parcelPoint to derive an appropriate accessPoint.           See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#extrapolate target="_blank">extrapolate</a>
* parcelPoint (string) - The coordinates of a point (x,y) known to be inside the parcel containing a given address. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#parcelPoint target="_blank">parcelPoint</a>

### intersections.near.outputFormat.get
Represents intersections near a given point


```js
gov_bc_ca_geocoder.intersections.near.outputFormat.get({
  "outputFormat": "",
  "point": "",
  "outputSRS": 0
}, context)
```

#### Parameters
* outputFormat (string) **required** - Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
* point (string) **required** - Example: -122.377,50.121  The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.
* maxDistance (integer) - The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
* outputSRS (integer) **required** - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
* maxResults (integer) - The maximum number of search results to return.
* minDegree (integer) - The minimum degree an intersection can have to be included in results. A dead-end has a degree of 1.
* maxDegree (integer) - The maximum degree an interesection can have to be included in results. A four-way stop has a degree of 4.

### intersections.nearest.outputFormat.get
Represents the closest intersection to a given point


```js
gov_bc_ca_geocoder.intersections.nearest.outputFormat.get({
  "outputFormat": "",
  "point": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
* point (string) **required** - Example: -122.377,50.121  The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.
* maxDistance (integer) - The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
* minDegree (integer) - The minimum degree an intersection can have to be included in results. A dead-end has a degree of 1.
* maxDegree (integer) - The maximum degree an interesection can have to be included in results. A four-way stop has a degree of 4.

### intersections.within.outputFormat.get
Represents all intersections within a given area


```js
gov_bc_ca_geocoder.intersections.within.outputFormat.get({
  "outputFormat": "",
  "bbox": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormattarget="_blank">outputFormat</a>
* bbox (string) **required** - Example: -119.51,49.48,-119.53,49.50. A bounding box (xmin,ymin,xmax,ymax) used to limit the search area. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#bbox target="_blank">bbox</a>
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
* maxResults (integer) - The maximum number of search results
* minDegree (integer) - The minimum degree an intersection can have to be included in results. A dead-end has a degree of 1.
* maxDegree (integer) - The maximum degree an interesection can have to be included in results. A four-way stop has a degree of 4.

### intersections.intersectionID.outputFormat.get
Represents a individual intersection


```js
gov_bc_ca_geocoder.intersections.intersectionID.outputFormat.get({
  "intersectionID": "",
  "outputFormat": ""
}, context)
```

#### Parameters
* intersectionID (string) **required** - A unique intersection identifier
* outputFormat (string) **required** - Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>

### occupants.addresses.outputFormat.get
Represents the set of occupants whose addresses best match a given query address. Every occupant has an associated site which has a standardized address and a coordinate location on the Earth.


```js
gov_bc_ca_geocoder.occupants.addresses.outputFormat.get({
  "outputFormat": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
* addressString (string) - Examples: Redfish Elementary --<br>Redfish Elementary -- Balfour<br>Redfish Elementary School -- 265 Bryan Rd, Balfour, BC<br>Occupant name followed by a frontGate delimiter ('--') followed by an optional address
* tags (string) - Example: schools;courts;employment<br>A list of tags separated by semicolons.
* locationDescriptor (string) - Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
* maxResults (integer) - The maximum number of search results to return.
* interpolation (string) - accessPoint interpolation method. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#interpolation target="_blank">interpolation</a>
* echo (boolean) - If true, include unmatched address details such as site name in results.
* setBack (integer) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
* minScore (integer) - The minimum score required for a match to be returned. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#minScore target="_blank">minScore</a>
* matchPrecision (string) - Example: street,locality.  A comma separated list of individual match precision levels to include in results. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#matchPrecision target="_blank">matchPrecision</a>
* matchPrecisionNot (string) - Example: street,locality.  A comma separated list of individual match precision levels to exclude from results. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#matchPrecisionNot target="_blank">matchPrecisionNot</a>
* siteName (string) - A string containing the name of the building, facility, or institution (e.g., Duck Building, Casa Del Mar, Crystal Garden, Bluebird House).See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#siteName target="_blank">siteName</a>
* unitDesignator (string) - The type of unit within a house or building. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#unitDesignator target="_blank">unitDesignator</a>
* unitNumber (string) - The number of the unit, suite, or apartment within a house or building.
* unitNumberSuffix (string) - A letter that follows the unit number as in Unit 1A or Suite 302B.
* civicNumber (string) - The official number assigned to a site by an address authority. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#civicNumber target="_blank">civicNumber</a>
* civicNumberSuffix (string) - A letter or fraction that follows the civic number (e.g., the A in 1039A Bledsoe St). See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#civicNumberSuffix target="_blank">civicNumberSuffix</a>
* streetName (string) - The official name of the street as assigned by an address authority (e.g., the Douglas in 1175 Douglas Street). See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetName target="_blank">streetName</a>
* streetType (string) - The type of street as assigned by a municipality (e.g., the ST in 1175 DOUGLAS St). See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetType target="_blank">streetType</a>
* streetDirection (string) - The abbreviated compass direction as defined by Canada Post and B.C. civic addressing authorities. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetDirection target="_blank">streetDirection</a>
* streetQualifier (string) - The qualifier of a street name (e.g., the Bridge in Johnson St Bridge)
* localityName (string) - The name of the locality assigned to a given site by an address authority. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#streetDirection target="_blank">streetDirection</a>
* provinceCode (string) - The ISO 3166-2 Sub-Country Code. The code for British Columbia is BC.
* localities (string) - A comma separated list of locality names that matched addresses must belong to. For example, setting localities to Nanaimo only returns addresses in Nanaimo
* notLocalities (string) - A comma-separated list of localities to exclude from the search.
* bbox (string) - Example: -126.07929,49.7628,-126.0163,49.7907.  A bounding box (xmin,ymin,xmax,ymax) that limits the search area. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#bbox target="_blank">bbox</a>
* centre (string) - Example: -124.0165,49.2296.  The coordinates of a centre point (x,y) used to define a bounding circle that will limit the search area. This parameter must be specified together with 'maxDistance'. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#centre target='_blank'>centre</a>
* maxDistance (number) - The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
* extrapolate (boolean) - If true, uses supplied parcelPoint to derive an appropriate accessPoint.           See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#extrapolate target="_blank">extrapolate</a>
* parcelPoint (string) - The coordinates of a point (x,y) known to be inside the parcel containing a given address. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#parcelPoint target="_blank">parcelPoint</a>

### occupants.near.outputFormat.get
Represents occupants near a given point in order of closest to farthest


```js
gov_bc_ca_geocoder.occupants.near.outputFormat.get({
  "outputFormat": "",
  "point": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
* point (string) **required** - Example: -122.377,50.121  The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.
* tags (string) - Example: schools;courts;employment<br>A list of tags separated by semicolons.
* maxDistance (integer) - The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
* maxResults (integer) - The maximum number of search results to return.
* locationDescriptor (string) - Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
* setBack (integer) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
* excludeUnits (boolean) - If true, excludes sites that are units of a parent site

### occupants.nearest.outputFormat.get
Represents the closest occupant to a given point


```js
gov_bc_ca_geocoder.occupants.nearest.outputFormat.get({
  "outputFormat": "",
  "point": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
* point (string) **required** - Example: -122.377,50.121  The point (x,y) from which the nearest site will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.
* maxDistance (integer) - The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
* tags (string) - Example: schools;courts;employment<br>A list of tags separated by semicolons.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
* locationDescriptor (string) - Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
* setBack (integer) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.

### occupants.within.outputFormat.get
Represents all occupants within a given area


```js
gov_bc_ca_geocoder.occupants.within.outputFormat.get({
  "outputFormat": "",
  "bbox": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
* bbox (string) **required** - Example: -119.51,49.48,-119.53,49.50. A bounding box (xmin,ymin,xmax,ymax) used to limit the search area. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#bbox target="_blank">bbox</a>
* tags (string) - Example: schools;courts;employment<br>A list of tags separated by semicolons.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
* maxResults (integer) - The maximum number of search results to return.
* locationDescriptor (string) - Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
* setBack (integer) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.

### occupants.occupantID.outputFormat.get
Represents an individual occupant


```js
gov_bc_ca_geocoder.occupants.occupantID.outputFormat.get({
  "occupantID": "",
  "outputFormat": ""
}, context)
```

#### Parameters
* occupantID (string) **required** - Occupant identifier
* outputFormat (string) **required** - Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
* locationDescriptor (string) - Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
* setBack (integer) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.

### sites.near.outputFormat.get
Represents sites near a given point in the order of closest to farthest


```js
gov_bc_ca_geocoder.sites.near.outputFormat.get({
  "outputFormat": "",
  "point": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
* point (string) **required** - Example: -122.377,50.121  The point (x,y) from which the nearby sites will be identified. The coordinates must be specified in the same SRS as given by the 'outputSRS' parameter.
* maxDistance (integer) - The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
* maxResults (integer) - The maximum number of search results to return.
* locationDescriptor (string) - Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
* setBack (integer) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
* excludeUnits (boolean) - If true, excludes sites that are units of a parent site

### sites.nearest.outputFormat.get
Represents the site nearest a given point


```js
gov_bc_ca_geocoder.sites.nearest.outputFormat.get({
  "outputFormat": "",
  "point": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
* point (string) **required** - Example: -122.377,50.121  Centre point of search. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#point target="_blank">point</a>
* maxDistance (integer) - The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
* locationDescriptor (string) - Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
* setBack (integer) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
* excludeUnits (boolean) - If true, excludes sites that are units of a parent site

### sites.within.outputFormat.get
Represents sites within a given area


```js
gov_bc_ca_geocoder.sites.within.outputFormat.get({
  "outputFormat": "",
  "bbox": ""
}, context)
```

#### Parameters
* outputFormat (string) **required** - Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
* bbox (string) **required** - Example: -119.51,49.48,-119.53,49.50. A bounding box (xmin,ymin,xmax,ymax) used to limit the search area. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#bbox target="_blank">bbox</a>
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
* maxResults (integer) - The maximum number of search results to return.
* locationDescriptor (string) - Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
* setBack (integer) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
* excludeUnits (boolean) - If true, excludes sites that are units of a parent site

### sites.siteID.outputFormat.get
Represents an individual site


```js
gov_bc_ca_geocoder.sites.siteID.outputFormat.get({
  "siteID": "",
  "outputFormat": ""
}, context)
```

#### Parameters
* siteID (string) **required** - A unique, but not immutable, site identifier.
* outputFormat (string) **required** - Results format. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputFormat target="_blank">outputFormat</a>
* outputSRS (integer) - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#outputSRS target="_blank">outputSRS</a>
* locationDescriptor (string) - Describes the nature of the address location. See <a href=https://github.com/bcgov/api-specs/blob/master/geocoder/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
* setBack (integer) - The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.

