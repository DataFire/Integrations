# @datafire/personio_de_authentication

Client library for Authentication

## Installation and Usage
```bash
npm install --save @datafire/personio_de_authentication
```
```js
let personio_de_authentication = require('@datafire/personio_de_authentication').create();

personio_de_authentication.auth.post({
  "client_id": "",
  "client_secret": ""
}).then(data => {
  console.log(data);
});
```

## Description

Personio Authentication API

## Actions

### auth.post
Request Authentication Token


```js
personio_de_authentication.auth.post({
  "client_id": "",
  "client_secret": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: Client id of the downloaded credentials file
  * client_secret **required** `string`: Client secret of the downloaded credentials file

#### Output
* output [AuthenticationTokenResponse](#authenticationtokenresponse)



## Definitions

### AuthenticationTokenResponse
* Request Authentication Token response
  * data **required** `object`
  * success **required** `boolean`
  * data `object`
    * token **required** `string`

### Response
* Default response object `object`
  * data **required** `object`
  * success **required** `boolean`


