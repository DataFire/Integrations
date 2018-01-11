# @datafire/refugerestrooms

Client library for Refuge Restrooms

## Installation and Usage
```bash
npm install --save @datafire/refugerestrooms
```
```js
let refugerestrooms = require('@datafire/refugerestrooms').create();

refugerestrooms.v1.restrooms.json.get({}).then(data => {
  console.log(data);
})
```

## Description

REFUGE is a web application that seeks to provide safe restroom access for transgender, intersex, and gender nonconforming individuals.

## Actions

### v1.restrooms.json.get
Get all restroom records ordered by date descending.


```js
refugerestrooms.v1.restrooms.json.get({}, context)
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

### v1.restrooms.by_date.json.get
Search for restroom records updated or created on or after a given date


```js
refugerestrooms.v1.restrooms.by_date.json.get({
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

### v1.restrooms.by_location.json.get
Search by location.


```js
refugerestrooms.v1.restrooms.by_location.json.get({
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

### v1.restrooms.search.json.get
Perform full-text search of restroom records.


```js
refugerestrooms.v1.restrooms.search.json.get({
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
