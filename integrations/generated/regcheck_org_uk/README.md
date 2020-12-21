# @datafire/regcheck_org_uk

Client library for Car Registration API

## Installation and Usage
```bash
npm install --save @datafire/regcheck_org_uk
```
```js
let regcheck_org_uk = require('@datafire/regcheck_org_uk').create();

.then(data => {
  console.log(data);
});
```

## Description

Car Registration API, An API that retrieves car information from its numberplate in many countries worldwide, uncluding the USA, UK, India, Australia and most of Europe. A username and password is required to access the API, which can be obtained from www.carregistrationapi.com - Use https://www.regcheck.org.uk/api/json.aspx/ as the root of all API calls.

## Actions

### Check
Gets details of a UK Vehicle



```js
regcheck_org_uk.Check({
  "searchString": ""
}, context)
```

#### Input
* input `object`
  * searchString **required** `string`: A registration number

#### Output
* output `array`
  * items [Car](#car)



## Definitions

### Car
* Car `object`


