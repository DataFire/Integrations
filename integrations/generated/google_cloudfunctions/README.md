# @datafire/google_cloudfunctions

Client library for Google Cloud Functions

## Installation and Usage
```bash
npm install --save datafire @datafire/google_cloudfunctions
```

```js
let datafire = require('datafire');
let google_cloudfunctions = require('@datafire/google_cloudfunctions').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_cloudfunctions.projects.locations.functions.list({}).then(data => {
  console.log(data);
})
```

## Description
API for managing lightweight user-provided functions executed in response to events.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudfunctions.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_cloudfunctions.oauthRefresh(null, context)
```


### projects.locations.functions.list
Returns a list of functions that belong to the requested project.


```js
google_cloudfunctions.projects.locations.functions.list({
  "location": ""
}, context)
```

#### Parameters
* location (string) **required** - The project and location from which the function should be listed,
* pageToken (string) - The value returned by the last
* pageSize (integer) - Maximum number of functions to return per call.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.functions.create
Creates a new function. If a function with the given name already exists in
the specified project, the long running operation will return
`ALREADY_EXISTS` error.


```js
google_cloudfunctions.projects.locations.functions.create({
  "location": ""
}, context)
```

#### Parameters
* location (string) **required** - The project and location in which the function should be created, specified
* body (object) - Describes a Cloud Function that contains user computation executed in
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.functions.delete
Deletes a function with the given name from the specified project. If the
given function is used by some trigger, the trigger will be updated to
remove this function.


```js
google_cloudfunctions.projects.locations.functions.delete({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the function which should be deleted.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### operations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.


```js
google_cloudfunctions.operations.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the operation resource.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.functions.update
Updates existing function.


```js
google_cloudfunctions.projects.locations.functions.update({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the function to be updated.
* body (object) - Describes a Cloud Function that contains user computation executed in
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
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
google_cloudfunctions.projects.locations.list({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The resource that owns the locations collection, if applicable.
* pageToken (string) - The standard list page token.
* pageSize (integer) - The standard list page size.
* filter (string) - The standard list filter.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### projects.locations.functions.call
Invokes synchronously deployed function. To be used for testing, very
limited traffic allowed.


```js
google_cloudfunctions.projects.locations.functions.call({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the function to be called.
* body (object) - Request for the `CallFunction` method.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

