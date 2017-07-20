# @datafire/refugerestrooms

Client library for Refuge Restrooms

## Installation and Usage
```bash
npm install --save datafire @datafire/refugerestrooms
```

```js
let datafire = require('datafire');
let refugerestrooms = require('@datafire/refugerestrooms').actions;
let context = new datafire.Context();

refugerestrooms.v1.restrooms.json.get({}, context).then(data => {
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

#### Parameters
* page (integer) - Page offset to fetch.
* per_page (integer) - Number of results to return per page.
* offset (integer) - Pad a number of results.
* ada (boolean) - Only return restrooms that are ADA accessible.
* unisex (boolean) - Only return restrooms that are unisex.

### v1.restrooms.by_date.json.get
Search for restroom records updated or created on or after a given date


```js
refugerestrooms.v1.restrooms.by_date.json.get({
  "day": 0,
  "month": 0,
  "year": 0
}, context)
```

#### Parameters
* page (integer) - Page offset to fetch.
* per_page (integer) - Number of results to return per page.
* offset (integer) - Pad a number of results.
* ada (boolean) - Only return restrooms that are ADA accessible.
* unisex (boolean) - Only return restrooms that are unisex.
* updated (boolean) - Return restroom records updated (rather than created) since given date
* day (integer) **required** - Day
* month (integer) **required** - Month
* year (integer) **required** - Year

### v1.restrooms.by_location.json.get
Search by location.


```js
refugerestrooms.v1.restrooms.by_location.json.get({
  "lat": 0,
  "lng": 0
}, context)
```

#### Parameters
* page (integer) - Page offset to fetch.
* per_page (integer) - Number of results to return per page.
* offset (integer) - Pad a number of results.
* ada (boolean) - Only return restrooms that are ADA accessible.
* unisex (boolean) - Only return restrooms that are unisex.
* lat (number) **required** - latitude
* lng (number) **required** - longitude

### v1.restrooms.search.json.get
Perform full-text search of restroom records.


```js
refugerestrooms.v1.restrooms.search.json.get({
  "query": ""
}, context)
```

#### Parameters
* page (integer) - Page offset to fetch.
* per_page (integer) - Number of results to return per page.
* offset (integer) - Pad a number of results.
* ada (boolean) - Only return restrooms that are ADA accessible.
* unisex (boolean) - Only return restrooms that are unisex.
* query (string) **required** - Your search query.

