# @datafire/google_groupsmigration

Client library for Groups Migration

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

google_groupsmigration.archive.insert({
  "groupId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Groups Migration Api.

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

### archive.insert
Inserts a new mail into the archive of the Google group.


```js
google_groupsmigration.archive.insert({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The group ID
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Groups](#groups)



## Definitions

### Groups
* Groups `object`: JSON response template for groups migration API.
  * kind `string`: The kind of insert resource this is.
  * responseCode `string`: The status of the insert request.


