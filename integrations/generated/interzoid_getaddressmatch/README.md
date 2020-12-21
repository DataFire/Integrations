# @datafire/interzoid_getaddressmatch

Client library for Interzoid Get Address Match Similarity Key API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getaddressmatch
```
```js
let interzoid_getaddressmatch = require('@datafire/interzoid_getaddressmatch').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides a similarity key used to match with other similar street address data, including for purposes of deduplication, fuzzy matching, or merging of datasets. A much higher match rate will be achieved by matching on the algorithmically generated similarity key rather than the data itself.

## Actions

### getaddressmatch
Gets a similarity key for matching purposes for street address data



```js
interzoid_getaddressmatch.getaddressmatch({
  "license": "",
  "address": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * address **required** `string`: Address from which to generate similarity key

#### Output
* output `object`
  * Code `string`
  * Credits `string`
  * Simkey `string`



## Definitions

*This integration has no definitions*
