# @datafire/google_oauth2

Client library for Google OAuth2

## Installation and Usage
```bash
npm install --save @datafire/google_oauth2
```
```js
let google_oauth2 = require('@datafire/google_oauth2').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_oauth2.userinfo.v2.me.get({}).then(data => {
  console.log(data);
});
```

## Description

Obtains end-user authorization grants for use with other Google APIs.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_oauth2.oauthCallback({
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
google_oauth2.oauthRefresh(null, context)
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

### getCertForOpenIdConnect



```js
google_oauth2.getCertForOpenIdConnect({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Jwk](#jwk)

### tokeninfo



```js
google_oauth2.tokeninfo({}, context)
```

#### Input
* input `object`
  * access_token `string`
  * id_token `string`
  * token_handle `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Tokeninfo](#tokeninfo)

### userinfo.get



```js
google_oauth2.userinfo.get({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Userinfoplus](#userinfoplus)

### userinfo.v2.me.get



```js
google_oauth2.userinfo.v2.me.get({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Userinfoplus](#userinfoplus)



## Definitions

### Jwk
* Jwk `object`
  * keys `array`
    * items `object`
      * alg `string`
      * e `string`
      * kid `string`
      * kty `string`
      * n `string`
      * use `string`

### Tokeninfo
* Tokeninfo `object`
  * access_type `string`: The access type granted with this token. It can be offline or online.
  * audience `string`: Who is the intended audience for this token. In general the same as issued_to.
  * email `string`: The email address of the user. Present only if the email scope is present in the request.
  * expires_in `integer`: The expiry time of the token, as number of seconds left until expiry.
  * issued_to `string`: To whom was the token issued to. In general the same as audience.
  * scope `string`: The space separated list of scopes granted to this token.
  * token_handle `string`: The token handle associated with this token.
  * user_id `string`: The obfuscated user id.
  * verified_email `boolean`: Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request.

### Userinfoplus
* Userinfoplus `object`
  * email `string`: The user's email address.
  * family_name `string`: The user's last name.
  * gender `string`: The user's gender.
  * given_name `string`: The user's first name.
  * hd `string`: The hosted domain e.g. example.com if the user is Google apps user.
  * id `string`: The obfuscated ID of the user.
  * link `string`: URL of the profile page.
  * locale `string`: The user's preferred locale.
  * name `string`: The user's full name.
  * picture `string`: URL of the user's picture image.
  * verified_email `boolean`: Boolean flag which is true if the email address is verified. Always verified because we only return the user's primary email address.


