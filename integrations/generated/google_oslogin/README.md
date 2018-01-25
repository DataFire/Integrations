# @datafire/google_oslogin

Client library for Google Cloud OS Login

## Installation and Usage
```bash
npm install --save @datafire/google_oslogin
```
```js
let google_oslogin = require('@datafire/google_oslogin').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_oslogin.users.sshPublicKeys.delete({
  "name": ""
}).then(data => {
  console.log(data);
});
```

## Description

Manages OS login configuration for Google account users.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_oslogin.oauthCallback({
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
google_oslogin.oauthRefresh(null, context)
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

### users.sshPublicKeys.delete
Deletes an SSH public key.


```js
google_oslogin.users.sshPublicKeys.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The fingerprint of the public key to update. Public keys are identified by
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

### users.sshPublicKeys.get
Retrieves an SSH public key.


```js
google_oslogin.users.sshPublicKeys.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The fingerprint of the public key to retrieve. Public keys are identified
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [SshPublicKey](#sshpublickey)

### users.sshPublicKeys.patch
Updates an SSH public key and returns the profile information. This method
supports patch semantics.


```js
google_oslogin.users.sshPublicKeys.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [SshPublicKey](#sshpublickey)
  * name **required** `string`: The fingerprint of the public key to update. Public keys are identified by
  * updateMask `string`: Mask to control which fields get updated. Updates all if not present.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [SshPublicKey](#sshpublickey)

### users.getLoginProfile
Retrieves the profile information used for logging in to a virtual machine
on Google Compute Engine.


```js
google_oslogin.users.getLoginProfile({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The unique ID for the user in format `users/{user}`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [LoginProfile](#loginprofile)

### users.importSshPublicKey
Adds an SSH public key and returns the profile information. Default POSIX
account information is set when no username and UID exist as part of the
login profile.


```js
google_oslogin.users.importSshPublicKey({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [SshPublicKey](#sshpublickey)
  * parent **required** `string`: The unique ID for the user in format `users/{user}`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ImportSshPublicKeyResponse](#importsshpublickeyresponse)



## Definitions

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### ImportSshPublicKeyResponse
* ImportSshPublicKeyResponse `object`: A response message for importing an SSH public key.
  * loginProfile [LoginProfile](#loginprofile)

### LoginProfile
* LoginProfile `object`: The Directory API profile information used for logging in to a virtual
  * name `string`: A unique user ID for identifying the user.
  * posixAccounts `array`: The list of POSIX accounts associated with the Directory API user.
    * items [PosixAccount](#posixaccount)
  * sshPublicKeys `object`: A map from SSH public key fingerprint to the associated key object.
  * suspended `boolean`: Indicates if the user is suspended.

### PosixAccount
* PosixAccount `object`: The POSIX account information associated with a Directory API User.
  * gecos `string`: The GECOS (user information) entry for this account.
  * gid `string`: The default group ID.
  * homeDirectory `string`: The path to the home directory for this account.
  * primary `boolean`: Only one POSIX account can be marked as primary.
  * shell `string`: The path to the logic shell for this account.
  * systemId `string`: System identifier for which account the username or uid applies to.
  * uid `string`: The user ID.
  * username `string`: The username of the POSIX account.

### SshPublicKey
* SshPublicKey `object`: The SSH public key information associated with a Directory API User.
  * expirationTimeUsec `string`: An expiration time in microseconds since epoch.
  * fingerprint `string`: The SHA-256 fingerprint of the SSH public key.
  * key `string`: Public key text in SSH format, defined by


