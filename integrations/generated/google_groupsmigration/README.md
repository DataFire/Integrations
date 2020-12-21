# @datafire/google_groupsmigration

Client library for Groups Migration API

## Installation and Usage
```bash
npm install --save @datafire/google_groupsmigration
```
```js
let google_groupsmigration = require('@datafire/google_groupsmigration').create({
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

The Groups Migration API allows domain administrators to archive emails into Google groups.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_groupsmigration.oauthCallback({
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
google_groupsmigration.oauthRefresh(null, context)
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

### groupsmigration.archive.insert
Inserts a new mail into the archive of the Google group.


```js
google_groupsmigration.groupsmigration.archive.insert({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The group ID
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
* output [Groups](#groups)



## Definitions

### Groups
* Groups `object`: JSON response template for groups migration API.
  * kind `string`: The kind of insert resource this is.
  * responseCode `string`: The status of the insert request.


