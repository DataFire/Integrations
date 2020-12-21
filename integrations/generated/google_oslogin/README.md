# @datafire/google_oslogin

Client library for Cloud OS Login API

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

.then(data => {
  console.log(data);
});
```

## Description

You can use OS Login to manage access to your VM instances using IAM roles.

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

### oslogin.users.sshPublicKeys.delete
Deletes an SSH public key.


```js
google_oslogin.oslogin.users.sshPublicKeys.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
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
* output [Empty](#empty)

### oslogin.users.sshPublicKeys.get
Retrieves an SSH public key.


```js
google_oslogin.oslogin.users.sshPublicKeys.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
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
* output [SshPublicKey](#sshpublickey)

### oslogin.users.sshPublicKeys.patch
Updates an SSH public key and returns the profile information. This method supports patch semantics.


```js
google_oslogin.oslogin.users.sshPublicKeys.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
  * updateMask `string`: Mask to control which fields get updated. Updates all if not present.
  * body [SshPublicKey](#sshpublickey)
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
* output [SshPublicKey](#sshpublickey)

### oslogin.users.getLoginProfile
Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.


```js
google_oslogin.oslogin.users.getLoginProfile({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The unique ID for the user in format `users/{user}`.
  * projectId `string`: The project ID of the Google Cloud Platform project.
  * systemId `string`: A system ID for filtering the results of the request.
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
* output [LoginProfile](#loginprofile)

### oslogin.users.importSshPublicKey
Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.


```js
google_oslogin.oslogin.users.importSshPublicKey({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The unique ID for the user in format `users/{user}`.
  * projectId `string`: The project ID of the Google Cloud Platform project.
  * body [SshPublicKey](#sshpublickey)
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
* output [ImportSshPublicKeyResponse](#importsshpublickeyresponse)



## Definitions

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### ImportSshPublicKeyResponse
* ImportSshPublicKeyResponse `object`: A response message for importing an SSH public key.
  * details `string`: Detailed information about import results.
  * loginProfile [LoginProfile](#loginprofile)

### LoginProfile
* LoginProfile `object`: The user profile information used for logging in to a virtual machine on Google Compute Engine.
  * name `string`: Required. A unique user ID.
  * posixAccounts `array`: The list of POSIX accounts associated with the user.
    * items [PosixAccount](#posixaccount)
  * sshPublicKeys `object`: A map from SSH public key fingerprint to the associated key object.

### PosixAccount
* PosixAccount `object`: The POSIX account information associated with a Google account.
  * accountId `string`: Output only. A POSIX account identifier.
  * gecos `string`: The GECOS (user information) entry for this account.
  * gid `string`: The default group ID.
  * homeDirectory `string`: The path to the home directory for this account.
  * name `string`: Output only. The canonical resource name.
  * operatingSystemType `string` (values: OPERATING_SYSTEM_TYPE_UNSPECIFIED, LINUX, WINDOWS): The operating system type where this account applies.
  * primary `boolean`: Only one POSIX account can be marked as primary.
  * shell `string`: The path to the logic shell for this account.
  * systemId `string`: System identifier for which account the username or uid applies to. By default, the empty value is used.
  * uid `string`: The user ID.
  * username `string`: The username of the POSIX account.

### SshPublicKey
* SshPublicKey `object`: The SSH public key information associated with a Google account.
  * expirationTimeUsec `string`: An expiration time in microseconds since epoch.
  * fingerprint `string`: Output only. The SHA-256 fingerprint of the SSH public key.
  * key `string`: Public key text in SSH format, defined by RFC4253 section 6.6.
  * name `string`: Output only. The canonical resource name.


