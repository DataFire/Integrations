# @datafire/interzoid_getfullnamematch

Client library for Interzoid Get Full Name Match Similarity Key API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getfullnamematch
```
```js
let interzoid_getfullnamematch = require('@datafire/interzoid_getfullnamematch').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides a similarity key used to match with other similar full name data, including for purposes of deduplication, fuzzy matching, or merging of datasets. A much higher match rate will be achieved by matching on the similarity key rather than the data itself. This API is for full name data where first and last name are in the same field. Use the Full Name Parsed Similarity Key API for first and last name data that are in separate fields.

## Actions

### getfullnamematch
Gets a similarity key for matching purposes for full name data, where first and last name are part of the same field.


```js
interzoid_getfullnamematch.getfullnamematch({
  "license": "",
  "fullname": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * fullname **required** `string`: Full name from which to generate similarity key

#### Output
* output `object`
  * Code `string`
  * Credits `string`
  * Simkey `string`



## Definitions

*This integration has no definitions*
