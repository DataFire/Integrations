# @datafire/tinyuid

Client library for TinyUID.com

## Installation and Usage
```bash
npm install --save @datafire/tinyuid
```
```js
let tinyuid = require('@datafire/tinyuid').create();

.then(data => {
  console.log(data);
});
```

## Description

Paste a Long URL link to shorten it

## Actions

### v1.shorten.post
Create short link


```js
tinyuid.v1.shorten.post({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: Link

#### Output
* output `object`
  * result_url **required** `string`: Short link



## Definitions

*This integration has no definitions*
