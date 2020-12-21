# @datafire/refugerestrooms

Client library for API title

## Installation and Usage
```bash
npm install --save @datafire/refugerestrooms
```
```js
let refugerestrooms = require('@datafire/refugerestrooms').create();

.then(data => {
  console.log(data);
});
```

## Description

REFUGE is a web application that seeks to provide safe restroom access for transgender, intersex, and gender nonconforming individuals.

## Actions

### getV1Restrooms
Get all restroom records ordered by date descending.


```js
refugerestrooms.getV1Restrooms({}, context)
```

#### Input
* input `object`
  * page `integer`: Page offset to fetch.
  * per_page `integer`: Number of results to return per page.
  * offset `integer`: Pad a number of results.
  * ada `boolean`: Only return restrooms that are ADA accessible.
  * unisex `boolean`: Only return restrooms that are unisex.

#### Output
*Output schema unknown*

### getV1RestroomsByDate
Search for restroom records updated or created on or after a given date


```js
refugerestrooms.getV1RestroomsByDate({
  "day": 0,
  "month": 0,
  "year": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: Page offset to fetch.
  * per_page `integer`: Number of results to return per page.
  * offset `integer`: Pad a number of results.
  * ada `boolean`: Only return restrooms that are ADA accessible.
  * unisex `boolean`: Only return restrooms that are unisex.
  * updated `boolean`: Return restroom records updated (rather than created) since given date
  * day **required** `integer`: Day
  * month **required** `integer`: Month
  * year **required** `integer`: Year

#### Output
*Output schema unknown*

### getV1RestroomsByLocation
Search by location.


```js
refugerestrooms.getV1RestroomsByLocation({
  "lat": 0,
  "lng": 0
}, context)
```

#### Input
* input `object`
  * page `integer`: Page offset to fetch.
  * per_page `integer`: Number of results to return per page.
  * offset `integer`: Pad a number of results.
  * ada `boolean`: Only return restrooms that are ADA accessible.
  * unisex `boolean`: Only return restrooms that are unisex.
  * lat **required** `number`: latitude
  * lng **required** `number`: longitude

#### Output
*Output schema unknown*

### getV1RestroomsSearch
Perform full-text search of restroom records.


```js
refugerestrooms.getV1RestroomsSearch({
  "query": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: Page offset to fetch.
  * per_page `integer`: Number of results to return per page.
  * offset `integer`: Pad a number of results.
  * ada `boolean`: Only return restrooms that are ADA accessible.
  * unisex `boolean`: Only return restrooms that are unisex.
  * query **required** `string`: Your search query.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
