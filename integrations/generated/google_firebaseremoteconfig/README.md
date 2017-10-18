# @datafire/google_firebaseremoteconfig

Client library for Firebase Remote Config

## Installation and Usage
```bash
npm install --save datafire @datafire/google_firebaseremoteconfig
```

```js
let datafire = require('datafire');
let google_firebaseremoteconfig = require('@datafire/google_firebaseremoteconfig').create();

google_firebaseremoteconfig.projects.getRemoteConfig({}).then(data => {
  console.log(data);
})
```

## Description
Firebase Remote Config API allows the 3P clients to manage Remote Config conditions and parameters for Firebase applications.

## Actions
### projects.getRemoteConfig
Get the latest version Remote Configuration for a project.
Returns the RemoteConfig as the payload, and also the eTag as a
response header.


```js
google_firebaseremoteconfig.projects.getRemoteConfig({
  "project": ""
}, context)
```

#### Parameters
* project (string) **required** - The GMP project identifier. Required.
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

### projects.updateRemoteConfig
Update a RemoteConfig. We treat this as an always-existing
resource (when it is not found in our data store, we treat it as version
0, a template with zero conditions and zero parameters). Hence there are
no Create or Delete operations. Returns the updated template when
successful (and the updated eTag as a response header), or an error if
things go wrong.
Possible error messages:
* VALIDATION_ERROR (HTTP status 400) with additional details if the
template being passed in can not be validated.
* AUTHENTICATION_ERROR (HTTP status 401) if the request can not be
authenticate (e.g. no access token, or invalid access token).
* AUTHORIZATION_ERROR (HTTP status 403) if the request can not be
authorized (e.g. the user has no access to the specified project id).
* VERSION_MISMATCH (HTTP status 412) when trying to update when the
expected eTag (passed in via the "If-match" header) is not specified, or
is specified but does does not match the current eTag.
* Internal error (HTTP status 500) for Database problems or other internal
errors.


```js
google_firebaseremoteconfig.projects.updateRemoteConfig({
  "project": ""
}, context)
```

#### Parameters
* body (object) - *
* project (string) **required** - The GMP project identifier. Required.
* validateOnly (boolean) - Optional. Defaults to <code>false</code> (UpdateRemoteConfig call should
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

