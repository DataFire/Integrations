# @datafire/extpose

Client library for Extpose

## Installation and Usage
```bash
npm install --save @datafire/extpose
```
```js
let extpose = require('@datafire/extpose').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Extpose — in‑store performance analytics and optimization tool for Chrome extensions. [https://extpose.com](https://extpose.com)

## Actions

### getUserExtensions
This endpoint allows you to get list of your extensions including extensions from the watchlist.


```js
extpose.getUserExtensions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Extension](#extension)



## Definitions

### Extension
* Extension `object`
  * avg_rating `number`
  * extension_id `integer`
  * install_count `integer`
  * prev_avg_rating `number`
  * prev_install_count `integer`
  * prev_rating_count `integer`
  * rating_count `integer`
  * update_ts `string`
  * url `string`


