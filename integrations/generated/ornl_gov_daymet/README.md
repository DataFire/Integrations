# @datafire/ornl_gov_daymet

Client library for Daymet Single Pixel Tool

## Installation and Usage
```bash
npm install --save @datafire/ornl_gov_daymet
```
```js
let ornl_gov_daymet = require('@datafire/ornl_gov_daymet').create();

ornl_gov_daymet.api.data.get({
  "lat": 0,
  "lon": 0
}).then(data => {
  console.log(data);
});
```

## Description

Welcome to the Daymet Single Pixel Tool API. You can use this API to download daily surface data within the Daymet database in a `csv` or `json` format for a single point. This API allows users to query a single geographic point by latitude and longitude in decimal degrees. A routine is executed that translates the (lon, lat) coordinates into projected Daymet (x,y) Lambert Conformal Coordinates. These coordinates are used to access the Daymet database of daily interpolated surface weather variables. Daily data from the nearest 1 km x 1 km Daymet grid cell are extracted from the database.

If you would like to learn how to automate the download of multiple locations for the Daymet Single Pixel Took, click [here](https://github.com/ornldaac/daymet-single-pixel-batch).

## Actions

### api.data.get
Returns a csv or json of the requested data to local machine


```js
ornl_gov_daymet.api.data.get({
  "lat": 0,
  "lon": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude component of location.
  * lon **required** `number`: Longitude component of location.
  * vars `array`: Daymet Daily weather estimates.
  * years `array`: Subset on years [1980..2017].
  * start `string`: Subset on dates (start date).
  * end `string`: Subset on dates (end date).
  * format `string`: Specify a format for data retrieval.

#### Output
*Output schema unknown*

### preview.get
Returns a table to the browser displaying requested data


```js
ornl_gov_daymet.preview.get({
  "lat": 0,
  "lon": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude component of location
  * lon **required** `number`: Longitude component of location.
  * vars `array`: Daymet Daily weather estimates.
  * years `array`: Subset on years [1980..2016].
  * start `string`: Subset on dates (start date).
  * end `string`: Subset on dates (end date).
  * format `string`: Specify a format for data retrieval.

#### Output
*Output schema unknown*

### send.saveData.get
Returns a csv or json of the requested data to local machine


```js
ornl_gov_daymet.send.saveData.get({
  "lat": 0,
  "lon": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude component of location.
  * lon **required** `number`: Longitude component of location.
  * vars `array`: Daymet Daily weather estimates.
  * years `array`: Subset on years [1980..2016].
  * start `string`: Subset on dates (start date).
  * end `string`: Subset on dates (end date).
  * format `string`: Specify a format for data retrieval.

#### Output
*Output schema unknown*

### visualize.get
Returns plots to a web browser of requested data using Plotly


```js
ornl_gov_daymet.visualize.get({
  "lat": 0,
  "lon": 0
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude component of location.
  * lon **required** `number`: Longitude component of location.
  * vars `array`: Daymet Daily weather estimates.
  * years `array`: Subset on years [1980..2016].
  * start `string`: Subset on dates (start date).
  * end `string`: Subset on dates (end date).
  * format `string`: Specify a format for data retrieval.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
