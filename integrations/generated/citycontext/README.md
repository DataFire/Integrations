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

citycontext.byPoint({}).then(data => {
  console.log(data);
})
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

** No definitions **
