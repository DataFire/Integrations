# @datafire/interzoid_getareacodefromnumber

Client library for Interzoid Get Area Code From Number API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getareacodefromnumber
```
```js
let interzoid_getareacodefromnumber = require('@datafire/interzoid_getareacodefromnumber').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides area code information for a given telephone number.

## Actions

### getareacodefromnumber
The area code will be parsed out of a telephone number and used to retrieve information about the area code.


```js
interzoid_getareacodefromnumber.getareacodefromnumber({
  "license": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * number **required** `string`: Telephone number to retrieve area code information

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
