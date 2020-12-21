# @datafire/interzoid_getcitymatch

Client library for Interzoid Get City Match Similarity Key API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getcitymatch
```
```js
let interzoid_getcitymatch = require('@datafire/interzoid_getcitymatch').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides a similarity key used to match with other similar city name data, including for purposes of deduplication, fuzzy matching, or merging of datasets. A much higher match rate will be achieved by matching on the algorithmically generated similarity key rather than the data itself.

## Actions

### getcitymatch
Gets a similarity key for matching purposes for city name data.


```js
interzoid_getcitymatch.getcitymatch({
  "license": "",
  "city": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * city **required** `string`: City name from which to generate similarity key

#### Output
* output `object`
  * Code `string`
  * Credits `string`
  * Simkey `string`



## Definitions

*This integration has no definitions*
