# @datafire/google_cloudkms

Client library for Cloud Key Management Service (KMS)

## Installation and Usage
```bash
npm install --save @datafire/google_cloudkms
```
```js
let google_cloudkms = require('@datafire/google_cloudkms').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get({
  "name": ""
}).then(data => {
  console.log(data);
});
```

## Description

Manages encryption for your cloud services the same way you do on-premises. You can generate, use, rotate, and destroy AES256 encryption keys.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudkms.oauthCallback({
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
google_cloudkms.oauthRefresh(null, context)
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

### projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get
Returns metadata for a given CryptoKeyVersion.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the CryptoKeyVersion to get.
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
* output [CryptoKeyVersion](#cryptokeyversion)

### projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch
Update a CryptoKeyVersion's metadata.

state may be changed between
ENABLED and
DISABLED using this
method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to
move between other states.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CryptoKeyVersion](#cryptokeyversion)
  * name **required** `string`: Output only. The resource name for this CryptoKeyVersion in the format
  * updateMask `string`: Required list of fields to be updated in this request.
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
* output [CryptoKeyVersion](#cryptokeyversion)

### projects.locations.list
Lists information about the supported locations for this service.


```js
google_cloudkms.projects.locations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: The standard list filter.
  * name **required** `string`: The resource that owns the locations collection, if applicable.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
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
* output [ListLocationsResponse](#listlocationsresponse)

### projects.locations.keyRings.cryptoKeys.decrypt
Decrypts data that was protected by Encrypt.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.decrypt({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [DecryptRequest](#decryptrequest)
  * name **required** `string`: Required. The resource name of the CryptoKey to use for decryption.
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
* output [DecryptResponse](#decryptresponse)

### projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy
Schedule a CryptoKeyVersion for destruction.

Upon calling this method, CryptoKeyVersion.state will be set to
DESTROY_SCHEDULED
and destroy_time will be set to a time 24
hours in the future, at which point the state
will be changed to
DESTROYED, and the key
material will be irrevocably destroyed.

Before the destroy_time is reached,
RestoreCryptoKeyVersion may be called to reverse the process.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [DestroyCryptoKeyVersionRequest](#destroycryptokeyversionrequest)
  * name **required** `string`: The resource name of the CryptoKeyVersion to destroy.
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
* output [CryptoKeyVersion](#cryptokeyversion)

### projects.locations.keyRings.cryptoKeys.encrypt
Encrypts data, so that it can only be recovered by a call to Decrypt.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.encrypt({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [EncryptRequest](#encryptrequest)
  * name **required** `string`: Required. The resource name of the CryptoKey or CryptoKeyVersion
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
* output [EncryptResponse](#encryptresponse)

### projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore
Restore a CryptoKeyVersion in the
DESTROY_SCHEDULED
state.

Upon restoration of the CryptoKeyVersion, state
will be set to DISABLED,
and destroy_time will be cleared.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [RestoreCryptoKeyVersionRequest](#restorecryptokeyversionrequest)
  * name **required** `string`: The resource name of the CryptoKeyVersion to restore.
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
* output [CryptoKeyVersion](#cryptokeyversion)

### projects.locations.keyRings.cryptoKeys.updatePrimaryVersion
Update the version of a CryptoKey that will be used in Encrypt


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.updatePrimaryVersion({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateCryptoKeyPrimaryVersionRequest](#updatecryptokeyprimaryversionrequest)
  * name **required** `string`: The resource name of the CryptoKey to update.
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
* output [CryptoKey](#cryptokey)

### projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list
Lists CryptoKeyVersions.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional limit on the number of CryptoKeyVersions to
  * pageToken `string`: Optional pagination token, returned earlier via
  * parent **required** `string`: Required. The resource name of the CryptoKey to list, in the format
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
* output [ListCryptoKeyVersionsResponse](#listcryptokeyversionsresponse)

### projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create
Create a new CryptoKeyVersion in a CryptoKey.

The server will assign the next sequential id. If unset,
state will be set to
ENABLED.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [CryptoKeyVersion](#cryptokeyversion)
  * parent **required** `string`: Required. The name of the CryptoKey associated with
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
* output [CryptoKeyVersion](#cryptokeyversion)

### projects.locations.keyRings.cryptoKeys.list
Lists CryptoKeys.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional limit on the number of CryptoKeys to include in the
  * pageToken `string`: Optional pagination token, returned earlier via
  * parent **required** `string`: Required. The resource name of the KeyRing to list, in the format
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
* output [ListCryptoKeysResponse](#listcryptokeysresponse)

### projects.locations.keyRings.cryptoKeys.create
Create a new CryptoKey within a KeyRing.

CryptoKey.purpose is required.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [CryptoKey](#cryptokey)
  * cryptoKeyId `string`: Required. It must be unique within a KeyRing and match the regular
  * parent **required** `string`: Required. The name of the KeyRing associated with the
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
* output [CryptoKey](#cryptokey)

### projects.locations.keyRings.list
Lists KeyRings.


```js
google_cloudkms.projects.locations.keyRings.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional limit on the number of KeyRings to include in the
  * pageToken `string`: Optional pagination token, returned earlier via
  * parent **required** `string`: Required. The resource name of the location associated with the
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
* output [ListKeyRingsResponse](#listkeyringsresponse)

### projects.locations.keyRings.create
Create a new KeyRing in a given Project and Location.


```js
google_cloudkms.projects.locations.keyRings.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [KeyRing](#keyring)
  * keyRingId `string`: Required. It must be unique within a location and match the regular
  * parent **required** `string`: Required. The resource name of the location associated with the
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
* output [KeyRing](#keyring)

### projects.locations.keyRings.cryptoKeys.getIamPolicy
Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested.
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
* output [Policy](#policy)

### projects.locations.keyRings.cryptoKeys.setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [SetIamPolicyRequest](#setiampolicyrequest)
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified.
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
* output [Policy](#policy)

### projects.locations.keyRings.cryptoKeys.testIamPermissions
Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested.
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
* output [TestIamPermissionsResponse](#testiampermissionsresponse)



## Definitions

### AuditConfig
* AuditConfig `object`: Specifies the audit configuration for a service.
  * auditLogConfigs `array`: The configuration for logging of each type of permission.
    * items [AuditLogConfig](#auditlogconfig)
  * service `string`: Specifies a service that will be enabled for audit logging.

### AuditLogConfig
* AuditLogConfig `object`: Provides the configuration for logging a type of permissions.
  * exemptedMembers `array`: Specifies the identities that do not cause logging for this type of
    * items `string`
  * logType `string` (values: LOG_TYPE_UNSPECIFIED, ADMIN_READ, DATA_WRITE, DATA_READ): The log type that this config enables.

### Binding
* Binding `object`: Associates `members` with a `role`.
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource.
    * items `string`
  * role `string`: Role that is assigned to `members`.

### CryptoKey
* CryptoKey `object`: A CryptoKey represents a logical key that can be used for cryptographic
  * createTime `string`: Output only. The time at which this CryptoKey was created.
  * labels `object`: Labels with user-defined metadata. For more information, see
  * name `string`: Output only. The resource name for this CryptoKey in the format
  * nextRotationTime `string`: At next_rotation_time, the Key Management Service will automatically:
  * primary [CryptoKeyVersion](#cryptokeyversion)
  * purpose `string` (values: CRYPTO_KEY_PURPOSE_UNSPECIFIED, ENCRYPT_DECRYPT): The immutable purpose of this CryptoKey. Currently, the only acceptable
  * rotationPeriod `string`: next_rotation_time will be advanced by this period when the service

### CryptoKeyVersion
* CryptoKeyVersion `object`: A CryptoKeyVersion represents an individual cryptographic key, and the
  * createTime `string`: Output only. The time at which this CryptoKeyVersion was created.
  * destroyEventTime `string`: Output only. The time this CryptoKeyVersion's key material was
  * destroyTime `string`: Output only. The time this CryptoKeyVersion's key material is scheduled
  * name `string`: Output only. The resource name for this CryptoKeyVersion in the format
  * state `string` (values: CRYPTO_KEY_VERSION_STATE_UNSPECIFIED, ENABLED, DISABLED, DESTROYED, DESTROY_SCHEDULED): The current state of the CryptoKeyVersion.

### DecryptRequest
* DecryptRequest `object`: Request message for KeyManagementService.Decrypt.
  * additionalAuthenticatedData `string`: Optional data that must match the data originally supplied in
  * ciphertext `string`: Required. The encrypted data originally returned in

### DecryptResponse
* DecryptResponse `object`: Response message for KeyManagementService.Decrypt.
  * plaintext `string`: The decrypted data originally supplied in EncryptRequest.plaintext.

### DestroyCryptoKeyVersionRequest
* DestroyCryptoKeyVersionRequest `object`: Request message for KeyManagementService.DestroyCryptoKeyVersion.

### EncryptRequest
* EncryptRequest `object`: Request message for KeyManagementService.Encrypt.
  * additionalAuthenticatedData `string`: Optional data that, if specified, must also be provided during decryption
  * plaintext `string`: Required. The data to encrypt. Must be no larger than 64KiB.

### EncryptResponse
* EncryptResponse `object`: Response message for KeyManagementService.Encrypt.
  * ciphertext `string`: The encrypted data.
  * name `string`: The resource name of the CryptoKeyVersion used in encryption.

### KeyRing
* KeyRing `object`: A KeyRing is a toplevel logical grouping of CryptoKeys.
  * createTime `string`: Output only. The time at which this KeyRing was created.
  * name `string`: Output only. The resource name for the KeyRing in the format

### ListCryptoKeyVersionsResponse
* ListCryptoKeyVersionsResponse `object`: Response message for KeyManagementService.ListCryptoKeyVersions.
  * cryptoKeyVersions `array`: The list of CryptoKeyVersions.
    * items [CryptoKeyVersion](#cryptokeyversion)
  * nextPageToken `string`: A token to retrieve next page of results. Pass this value in
  * totalSize `integer`: The total number of CryptoKeyVersions that matched the

### ListCryptoKeysResponse
* ListCryptoKeysResponse `object`: Response message for KeyManagementService.ListCryptoKeys.
  * cryptoKeys `array`: The list of CryptoKeys.
    * items [CryptoKey](#cryptokey)
  * nextPageToken `string`: A token to retrieve next page of results. Pass this value in
  * totalSize `integer`: The total number of CryptoKeys that matched the query.

### ListKeyRingsResponse
* ListKeyRingsResponse `object`: Response message for KeyManagementService.ListKeyRings.
  * keyRings `array`: The list of KeyRings.
    * items [KeyRing](#keyring)
  * nextPageToken `string`: A token to retrieve next page of results. Pass this value in
  * totalSize `integer`: The total number of KeyRings that matched the query.

### ListLocationsResponse
* ListLocationsResponse `object`: The response message for Locations.ListLocations.
  * locations `array`: A list of locations that matches the specified filter in the request.
    * items [Location](#location)
  * nextPageToken `string`: The standard List next-page token.

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name.
  * labels `object`: Cross-service attributes for the location. For example
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given
  * name `string`: Resource name for the location, which may vary between implementations.

### Policy
* Policy `object`: Defines an Identity and Access Management (IAM) policy. It is used to
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [AuditConfig](#auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * version `integer`: Deprecated.

### RestoreCryptoKeyVersionRequest
* RestoreCryptoKeyVersionRequest `object`: Request message for KeyManagementService.RestoreCryptoKeyVersion.

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)
  * updateMask `string`: OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is
    * items `string`

### UpdateCryptoKeyPrimaryVersionRequest
* UpdateCryptoKeyPrimaryVersionRequest `object`: Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion.
  * cryptoKeyVersionId `string`: The id of the child CryptoKeyVersion to use as primary.


