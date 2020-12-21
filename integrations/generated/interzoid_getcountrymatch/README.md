# @datafire/interzoid_getcountrymatch

Client library for Interzoid Get Country Match Similarity Key API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getcountrymatch
```
```js
let interzoid_getcountrymatch = require('@datafire/interzoid_getcountrymatch').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides a similarity key used to match with other similar country name data, including for purposes of deduplication, fuzzy matching, or merging of datasets. A much higher match rate will be achieved by matching on the algorithmically generated similarity key rather than the data itself.

## Actions

### getcountrymatch
Gets a similarity key to use for matching purposes for country name data


```js
interzoid_getcountrymatch.getcountrymatch({
  "license": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * country **required** `string`: Country name from which to generate similarity key

#### Output
* output `object`
  * Code `string`
  * Credits `string`
  * Simkey `string`



## Definitions

*This integration has no definitions*
