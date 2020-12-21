# @datafire/geodatasource

Client library for GeoDataSource Location Search

## Installation and Usage
```bash
npm install --save @datafire/geodatasource
```
```js
let geodatasource = require('@datafire/geodatasource').create();

.then(data => {
  console.log(data);
});
```

## Description

GeoDataSource™ Web Service is a REST API enable user to lookup for a city by using latitude and longitude coordinate. It will return the result in either JSON or XML containing the information of country, region, city, latitude and longitude. Visit https://www.geodatasource.com/web-service for further information.

## Actions

### city.get
Get City name by using latitude and longitude


```js
geodatasource.city.get({
  "key": "",
  "lng": 0,
  "lat": 0
}, context)
```

#### Input
* input `object`
  * key **required** `string`
  * lng **required** `number`
  * lat **required** `number`
  * format `string` (values: json, xml)

#### Output
* output `string`



## Definitions

*This integration has no definitions*
