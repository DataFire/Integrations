# @datafire/google_sourcerepo

Client library for Cloud Source Repositories

## Installation and Usage
```bash
npm install --save datafire @datafire/google_sourcerepo
```

```js
let datafire = require('datafire');
let google_sourcerepo = require('@datafire/google_sourcerepo').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_sourcerepo.projects.repos.delete({}).then(data => {
  console.log(data);
})
```

## Description
Access source code repositories hosted by Google.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_sourcerepo.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_sourcerepo.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### projects.repos.delete
Deletes a repo.


```js
google_sourcerepo.projects.repos.delete({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the repo to delete. Values are of the form
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### projects.repos.get
Returns information about a repo.


```js
google_sourcerepo.projects.repos.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the requested repository. Values are of the form
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### projects.repos.list
Returns all repos belonging to a project.


```js
google_sourcerepo.projects.repos.list({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The project ID whose repos should be listed. Values are of the form
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### projects.repos.create
Creates a repo in the given project with the given name..

If the named repository already exists, `CreateRepo` returns
`ALREADY_EXISTS`.


```js
google_sourcerepo.projects.repos.create({
  "parent": ""
}, context)
```

#### Parameters
* parent (string) **required** - The project in which to create the repo. Values are of the form
* body (object) - A repository (or repo) is a Git repository storing versioned source content.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### projects.repos.getIamPolicy
Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.


```js
google_sourcerepo.projects.repos.getIamPolicy({
  "resource": ""
}, context)
```

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy is being requested.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### projects.repos.setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy.


```js
google_sourcerepo.projects.repos.setIamPolicy({
  "resource": ""
}, context)
```

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy is being specified.
* body (object) - Request message for `SetIamPolicy` method.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### projects.repos.testIamPermissions
Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.


```js
google_sourcerepo.projects.repos.testIamPermissions({
  "resource": ""
}, context)
```

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy detail is being requested.
* body (object) - Request message for `TestIamPermissions` method.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

