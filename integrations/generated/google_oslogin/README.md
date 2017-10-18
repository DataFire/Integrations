# @datafire/google_oslogin

Client library for Google Cloud OS Login

## Installation and Usage
```bash
npm install --save datafire @datafire/google_oslogin
```

```js
let datafire = require('datafire');
let google_oslogin = require('@datafire/google_oslogin').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_oslogin.users.sshPublicKeys.delete({}).then(data => {
  console.log(data);
})
```

## Description
Manages OS login configuration for Directory API users.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_oslogin.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_oslogin.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### users.sshPublicKeys.delete
Deletes an SSH public key.


```js
google_oslogin.users.sshPublicKeys.delete({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The fingerprint of the public key to update. Public keys are identified by
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### users.sshPublicKeys.get
Retrieves an SSH public key.


```js
google_oslogin.users.sshPublicKeys.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The fingerprint of the public key to retrieve. Public keys are identified
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### users.sshPublicKeys.patch
Updates an SSH public key and returns the profile information. This method
supports patch semantics.


```js
google_oslogin.users.sshPublicKeys.patch({
  "name": ""
}, context)
```

#### Parameters
* body (object) - The SSH public key information associated with a Directory API User.
* name (string) **required** - The fingerprint of the public key to update. Public keys are identified by
* updateMask (string) - Mask to control which fields get updated. Updates all if not present.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### users.getLoginProfile
Retrieves the profile information used for logging in to a virtual machine
on Google Compute Engine.


```js
google_oslogin.users.getLoginProfile({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The unique ID for the user in format `users/{user}`.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### users.importSshPublicKey
Adds an SSH public key and returns the profile information. Default POSIX
account information is set when no username and UID exist as part of the
login profile.


```js
google_oslogin.users.importSshPublicKey({
  "parent": ""
}, context)
```

#### Parameters
* body (object) - The SSH public key information associated with a Directory API User.
* parent (string) **required** - The unique ID for the user in format `users/{user}`.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

