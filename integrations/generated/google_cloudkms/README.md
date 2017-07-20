# @datafire/google_cloudkms

Client library for Google Cloud Key Management Service (KMS)

## Installation and Usage
```bash
npm install --save datafire @datafire/google_cloudkms
```

```js
let datafire = require('datafire');
let google_cloudkms = require('@datafire/google_cloudkms').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_cloudkms: account,
  }
})

google_cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_cloudkms.oauthRefresh(null, context)
```


### projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get
Returns metadata for a given CryptoKeyVersion.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the CryptoKeyVersion to get.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

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

#### Parameters
* name (string) **required** - Output only. The resource name for this CryptoKeyVersion in the format
* updateMask (string) - Required list of fields to be updated in this request.
* body (object) - A CryptoKeyVersion represents an individual cryptographic key, and the
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.list
Lists information about the supported locations for this service.


```js
google_cloudkms.projects.locations.list({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource that owns the locations collection, if applicable.
* pageSize (integer) - The standard list page size.
* filter (string) - The standard list filter.
* pageToken (string) - The standard list page token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.keyRings.cryptoKeys.decrypt
Decrypt data that was protected by Encrypt.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.decrypt({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Required. The resource name of the CryptoKey to use for decryption.
* body (object) - Request message for KeyManagementService.Decrypt.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

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

#### Parameters
* name (string) **required** - The resource name of the CryptoKeyVersion to destroy.
* body (object) - Request message for KeyManagementService.DestroyCryptoKeyVersion.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.keyRings.cryptoKeys.encrypt
Encrypt data, so that it can only be recovered by a call to Decrypt.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.encrypt({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Required. The resource name of the CryptoKey or CryptoKeyVersion
* body (object) - Request message for KeyManagementService.Encrypt.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore
Restore a CryptoKeyVersion in the
DESTROY_SCHEDULED,
state.

Upon restoration of the CryptoKeyVersion, state
will be set to DISABLED,
and destroy_time will be cleared.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource name of the CryptoKeyVersion to restore.
* body (object) - Request message for KeyManagementService.RestoreCryptoKeyVersion.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.keyRings.cryptoKeys.updatePrimaryVersion
Update the version of a CryptoKey that will be used in Encrypt


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.updatePrimaryVersion({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource name of the CryptoKey to update.
* body (object) - Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list
Lists CryptoKeyVersions.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list({
  "parent": ""
}, context)
```

#### Parameters
* parent (string) **required** - Required. The resource name of the CryptoKey to list, in the format
* pageToken (string) - Optional pagination token, returned earlier via
* pageSize (integer) - Optional limit on the number of CryptoKeyVersions to
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

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

#### Parameters
* parent (string) **required** - Required. The name of the CryptoKey associated with
* body (object) - A CryptoKeyVersion represents an individual cryptographic key, and the
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.keyRings.cryptoKeys.list
Lists CryptoKeys.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.list({
  "parent": ""
}, context)
```

#### Parameters
* parent (string) **required** - Required. The resource name of the KeyRing to list, in the format
* pageToken (string) - Optional pagination token, returned earlier via
* pageSize (integer) - Optional limit on the number of CryptoKeys to include in the
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.keyRings.cryptoKeys.create
Create a new CryptoKey within a KeyRing.

CryptoKey.purpose is required.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.create({
  "parent": ""
}, context)
```

#### Parameters
* parent (string) **required** - Required. The name of the KeyRing associated with the
* cryptoKeyId (string) - Required. It must be unique within a KeyRing and match the regular
* body (object) - A CryptoKey represents a logical key that can be used for cryptographic
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.keyRings.list
Lists KeyRings.


```js
google_cloudkms.projects.locations.keyRings.list({
  "parent": ""
}, context)
```

#### Parameters
* parent (string) **required** - Required. The resource name of the location associated with the
* pageToken (string) - Optional pagination token, returned earlier via
* pageSize (integer) - Optional limit on the number of KeyRings to include in the
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.keyRings.create
Create a new KeyRing in a given Project and Location.


```js
google_cloudkms.projects.locations.keyRings.create({
  "parent": ""
}, context)
```

#### Parameters
* parent (string) **required** - Required. The resource name of the location associated with the
* keyRingId (string) - Required. It must be unique within a location and match the regular
* body (object) - A KeyRing is a toplevel logical grouping of CryptoKeys.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.keyRings.cryptoKeys.getIamPolicy
Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.getIamPolicy({
  "resource": ""
}, context)
```

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy is being requested.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.keyRings.cryptoKeys.setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy.


```js
google_cloudkms.projects.locations.keyRings.cryptoKeys.setIamPolicy({
  "resource": ""
}, context)
```

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy is being specified.
* body (object) - Request message for `SetIamPolicy` method.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

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

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy detail is being requested.
* body (object) - Request message for `TestIamPermissions` method.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

