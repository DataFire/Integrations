# @datafire/interzoid_lookupareacode

Client library for Interzoid Get Area Code API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_lookupareacode
```
```js
let interzoid_lookupareacode = require('@datafire/interzoid_lookupareacode').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides area code information for a given telephone area code.

## Actions

### getareacode
Gets telephone area code information for a given area code.


```js
interzoid_lookupareacode.getareacode({
  "license": "",
  "areacode": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * areacode **required** `string`: Telephone area code to retrieve area code information

#### Output
* output `object`
  * Abbreviation `string`
  * AreaCode `string`
  * Code `string`
  * Credits `string`
  * Locale `string`
  * PrimaryCity `string`



## Definitions

*This integration has no definitions*
