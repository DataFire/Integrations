# @datafire/deutschebahn_betriebsstellen

Client library for Betriebsstellen

## Installation and Usage
```bash
npm install --save @datafire/deutschebahn_betriebsstellen
```
```js
let deutschebahn_betriebsstellen = require('@datafire/deutschebahn_betriebsstellen').create();

.then(data => {
  console.log(data);
});
```

## Description

This REST-API enables you to query station and stop infos

## Actions

### betriebsstellen.get
Get all station and stop infos


```js
deutschebahn_betriebsstellen.betriebsstellen.get({}, context)
```

#### Input
* input `object`
  * name `string`: A station name or part of it

#### Output
* output [StationList](#stationlist)

### betriebsstellen.abbrev.get
Get information about a specific station or stop by abbrevation


```js
deutschebahn_betriebsstellen.betriebsstellen.abbrev.get({
  "abbrev": ""
}, context)
```

#### Input
* input `object`
  * abbrev **required** `string`: Station or stop abbrevation

#### Output
* output [Station](#station)



## Definitions

### Error
* Error `object`
  * code `integer`
  * message `string`

### Station
* Station `object`
  * RB `integer`: Regional code
  * UIC `string`: UIC RICS code
  * abbrev `string`: Abbrevation name of station or halt
  * borderStation `boolean`: Station is at a country border
  * id `integer`: Identifying number
  * locationCode `string`: Primary location code
  * name `string`: Long name of station or halt
  * short `string`: Short name of station or halt
  * status `string` (values: in use, out of service, formerly, planned, study): State of operation
  * timeTableRelevant `boolean`: Relevant for time table
  * type `string` (values: Abzw, Anst, Awanst, Bf): Type of station or halt
  * validFrom `string`: Start date for validity
  * validTill `string`: End date for validity or null if still valid

### StationList
* StationList `array`
  * items [Station](#station)


