# @datafire/google_playcustomapp

Client library for Google Play Custom App Publishing

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

google_playcustomapp.accounts.customApps.create({
  "account": ""
}).then(data => {
  console.log(data);
});
```

## Description

An API to publish custom Android apps.

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

### accounts.customApps.create
Create and publish a new custom app.


```js
google_playcustomapp.accounts.customApps.create({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`: Developer account ID.
  * body [CustomApp](#customapp)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CustomApp](#customapp)



## Definitions

### CustomApp
* CustomApp `object`: This resource represents a custom app.
  * languageCode `string`: Default listing language in BCP 47 format.
  * title `string`: Title for the Android app.


