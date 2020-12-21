# @datafire/iptwist

Client library for ipTwist

## Installation and Usage
```bash
npm install --save @datafire/iptwist
```
```js
let iptwist = require('@datafire/iptwist').create({
  ApiKeyAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The reliable, secure, and simple IP geolocation API.

## Actions

### .post
Geolocate a given IP address


```js
iptwist..post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Request](#request)

#### Output
* output [Response](#response)



## Definitions

### Request
* Request `object`
  * ip `string`

### Response
* Response `object`
  * city `string`
  * country `string`
  * country_code `string`
  * ip `string`
  * latitude `number`
  * longitude `number`
  * state `string`
  * timezone `string`
  * zip `string`


