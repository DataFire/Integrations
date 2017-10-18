# @datafire/google_testing

Client library for Google Cloud Testing

## Installation and Usage
```bash
npm install --save datafire @datafire/google_testing
```

```js
let datafire = require('datafire');
let google_testing = require('@datafire/google_testing').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_testing.projects.testMatrices.create({}).then(data => {
  console.log(data);
})
```

## Description
Allows developers to run automated tests for their mobile applications on Google infrastructure.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_testing.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_testing.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### projects.testMatrices.create
Request to run a matrix of tests according to the given specifications.
Unsupported environments will be returned in the state UNSUPPORTED.
Matrices are limited to at most 200 supported executions.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write to project
- INVALID_ARGUMENT - if the request is malformed or if the matrix expands
                     to more than 200 supported executions


```js
google_testing.projects.testMatrices.create({
  "projectId": ""
}, context)
```

#### Parameters
* body (object) - A group of one or more TestExecutions, built by taking a
* projectId (string) **required** - The GCE project under which this job will run.
* requestId (string) - A string id used to detect duplicated requests.
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

### projects.testMatrices.get
Check the status of a test matrix.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read project
- INVALID_ARGUMENT - if the request is malformed
- NOT_FOUND - if the Test Matrix does not exist


```js
google_testing.projects.testMatrices.get({
  "projectId": "",
  "testMatrixId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Cloud project that owns the test matrix.
* testMatrixId (string) **required** - Unique test matrix id which was assigned by the service.
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

### projects.testMatrices.cancel
Cancels unfinished test executions in a test matrix.
This call returns immediately and cancellation proceeds asychronously.
If the matrix is already final, this operation will have no effect.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read project
- INVALID_ARGUMENT - if the request is malformed
- NOT_FOUND - if the Test Matrix does not exist


```js
google_testing.projects.testMatrices.cancel({
  "projectId": "",
  "testMatrixId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Cloud project that owns the test.
* testMatrixId (string) **required** - Test matrix that will be canceled.
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

### testEnvironmentCatalog.get
Get the catalog of supported test environments.

May return any of the following canonical error codes:

- INVALID_ARGUMENT - if the request is malformed
- NOT_FOUND - if the environment type does not exist
- INTERNAL - if an internal error occurred


```js
google_testing.testEnvironmentCatalog.get({
  "environmentType": ""
}, context)
```

#### Parameters
* environmentType (string) **required** - The type of environment that should be listed.
* projectId (string) - For authorization, the cloud project requesting the TestEnvironmentCatalog.
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

