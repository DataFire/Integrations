# @datafire/interzoid_getcompanymatch

Client library for Interzoid Get Company Name Match Similarity Key API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getcompanymatch
```
```js
let interzoid_getcompanymatch = require('@datafire/interzoid_getcompanymatch').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides a similarity key used to match with other similar company name data, including for purposes of deduplication, fuzzy matching, or merging of datasets. A much higher match rate will be achieved by matching on the algorithmically generated similarity key rather than the data itself.

## Actions

### getcompanymatch
Gets a similarity key for matching purposes for company name data


```js
interzoid_getcompanymatch.getcompanymatch({
  "license": "",
  "company": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * company **required** `string`: Company name from which to generate similarity key

#### Output
* output `object`
  * Code `string`
  * Credits `string`
  * Simkey `string`



## Definitions

*This integration has no definitions*
