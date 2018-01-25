# @datafire/citycontext

Client library for City Context

## Installation and Usage
```bash
npm install --save @datafire/citycontext
```
```js
let citycontext = require('@datafire/citycontext').create({
  user_key: ""
});

citycontext.byPoint({
  "lat": 0,
  "lon": 0
}).then(data => {
  console.log(data);
});
```

## Description

City Context provides a straightforward API to access UK Open Data: crime statistics, schools, demographics and more.

## Actions

### byPoint
Query by coordinates (SRID 4326 - decimal degrees)


```js
citycontext.byPoint({
  "lat": 0,
  "lon": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude
  * lon **required** `number`: Longitude
  * school_search_radius `integer`: Search radius for schools, in metres, between 100 and 4000
  * park_search_radius `integer`: Search radius for parks, in metres, between 100 and 2000

#### Output
* output [PointInfo](#pointinfo)

### byPostcode
Query by postcode


```js
citycontext.byPostcode({
  "postcode": ""
}, context)
```

#### Input
* input `object`
  * postcode **required** `string`: Postcode
  * school_search_radius `integer`: Search radius for schools, in metres, between 100 and 4000
  * park_search_radius `integer`: Search radius for parks, in metres, between 100 and 2000

#### Output
* output [PointInfo](#pointinfo)

### usage
Get usage in current month


```js
citycontext.usage(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Usage](#usage)



## Definitions

### Latlon


### Location
* Location `object`: Latitude, Longitude and other info related to the given point
  * lat **required** `number`
  * lon **required** `number`
  * withinLondonCCZ `boolean`: Boolean flag indicating whether this point is located within London's Congestion Charge zone

### PointInfo
* PointInfo `object`: Contextual information around a given point
  * location **required** [Location](#location)
  * lsoa `object`: Statistics for lower layer super output areas (LSOA)
    * crimes `object`
    * name **required** `string`
    * population `object`
      * allUsualResidents **required** `integer`
      * communalEstablishmentResidents **required** `integer`
      * householdResidents **required** `integer`
      * households **required** `integer`
      * personsPerHectare **required** `integer`
      * personsPerHousehold **required** `integer`
  * parks **required** `array`: Parks within 1km of the point of interest, sorted by descending area
    * items `object`
      * areaSqm **required** `integer`
      * centroid **required** [Latlon](#latlon)
      * distanceMeters **required** `integer`
      * name `string`
  * schools **required** `array`: Schools within 1km of the point of interest, sorted by ascending distance from the POI
    * items `object`
      * distanceMeters **required** `integer`
      * lastInpectionUrl **required** `string`: URL to the last inspection report
      * lastInspectionDate **required** `string`: Date of the last Ofsted inspection
      * leadershipAndManagement **required** `integer`: Leadership and management grade in the last Ofsted report, from 1 (outstanding) to 4 (inadequate)
      * location **required** [Latlon](#latlon)
      * overallEffectiveness **required** `integer`: Overall effectiveness grade in the last Ofsted report, from 1 (outstanding) to 4 (inadequate)
      * phase **required** `string`
      * qualityOfTeaching **required** `integer`: Quality of teaching grade in the last Ofsted report, from 1 (outstanding) to 4 (inadequate)
      * schoolName **required** `string`
      * typeOfEstablishment **required** `string`
      * urn **required** `integer`: Unique school identifier

### Usage
* Usage `object`: User plan monthly API quota and usage
  * allowance `integer`
  * period **required** `string`
  * periodEnd **required** `string`
  * periodStart **required** `string`
  * plan **required** `string`
  * usage **required** `integer`


