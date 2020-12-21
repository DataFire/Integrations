# @datafire/interzoid_getfullnameparsedmatch

Client library for Interzoid Get Full Name Parsed Match Similarity Key API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getfullnameparsedmatch
```
```js
let interzoid_getfullnameparsedmatch = require('@datafire/interzoid_getfullnameparsedmatch').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides a similarity key used to match with other similar full name data when data fields are parsed into first name and last name components, including for purposes of deduplication, fuzzy matching, or merging of datasets. A much higher match rate will be achieved by matching on the similarity key rather than the data itself. This API is for full name data where first and last name are in separate fields. Use the Full Name Similarity Key API for first and last name data that are in the same field.

## Actions

### getfullnameparsedmatch
Gets a similarity key for matching purposes for parsed full name data, where the first name and last name are split into separate fields in the source data rather than combined.


```js
interzoid_getfullnameparsedmatch.getfullnameparsedmatch({
  "license": "",
  "firstname": "",
  "lastname": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * firstname **required** `string`: First name from which to generate similarity key
  * lastname **required** `string`: Last name from which to generate similarity key

#### Output
* output `object`
  * Code `string`
  * Credits `string`
  * Simkey `string`



## Definitions

*This integration has no definitions*
