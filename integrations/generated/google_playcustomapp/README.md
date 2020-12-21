# @datafire/google_playcustomapp

Client library for Google Play Custom App Publishing API

## Installation and Usage
```bash
npm install --save @datafire/google_playcustomapp
```
```js
let google_playcustomapp = require('@datafire/google_playcustomapp').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

API to create and publish custom Android apps

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_playcustomapp.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_playcustomapp.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### playcustomapp.accounts.customApps.create
Creates a new custom app.


```js
google_playcustomapp.playcustomapp.accounts.customApps.create({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`: Developer account ID.
  * body [CustomApp](#customapp)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CustomApp](#customapp)



## Definitions

### CustomApp
* CustomApp `object`: This resource represents a custom app.
  * languageCode `string`: Default listing language in BCP 47 format.
  * packageName `string`: Output only. Package name of the created Android app. Only present in the API response.
  * title `string`: Title for the Android app.


