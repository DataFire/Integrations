# @datafire/interzoid_getglobalnumberinfo

Client library for Interzoid Get Global Phone Number Information API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getglobalnumberinfo
```
```js
let interzoid_getglobalnumberinfo = require('@datafire/interzoid_getglobalnumberinfo').create();

.then(data => {
  console.log(data);
});
```

## Description

This API provides geographic information for a global telephone number, including city and country information, primary languages spoken, and mobile device identification.

## Actions

### getglobalnumberinfo
Get demographic information for a global telephone number, including city and country information, primary languages spoken, and mobile device identification.


```js
interzoid_getglobalnumberinfo.getglobalnumberinfo({
  "license": "",
  "intlnumber": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * intlnumber **required** `string`: International number (with country code) to retrieve information for

#### Output
* output `object`
  * Code `string`
  * Country `string`
  * Credits `string`
  * Language2 `string`
  * Language3 `string`
  * Mobile `string`
  * PrimaryCity `string`
  * PrimaryLanguage `string`
  * Region `string`
  * Wealth `string`



## Definitions

*This integration has no definitions*
