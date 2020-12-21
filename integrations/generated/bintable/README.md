# @datafire/bintable

Client library for BIN Lookup API

## Installation and Usage
```bash
npm install --save @datafire/bintable
```
```js
let bintable = require('@datafire/bintable').create();

.then(data => {
  console.log(data);
});
```

## Description

BIN lookup API, the free api service from bintable.com to lookup card information using it's BIN. the service maintains updated database based on the comunity and other third party services to make sure all BINs in the database are accurate and up to date.

## Actions

### balanceLookup
Get Account balance and expiry


```js
bintable.balanceLookup({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: The API key, which you can get from bintable.com website.

#### Output
* output `array`
  * items [ResponseItem](#responseitem)

### binLookup
By passing in the appropriate BIN, you can lookup for
card meta data in bintable.com API



```js
bintable.binLookup({
  "bin": "",
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * bin **required** `string`: pass the required BIN code
  * api_key **required** `string`: The API key, which you can get from bintable.com website.

#### Output
* output `array`
  * items [ResponseItem](#responseitem)



## Definitions

### ResponseItem
* ResponseItem `object`
  * data **required** `object`
  * message **required** `string`
  * result **required** `integer`


