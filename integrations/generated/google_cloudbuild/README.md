# @datafire/google_cloudbuild

Client library for Google Cloud Container Builder

## Installation and Usage
```bash
npm install --save datafire @datafire/google_cloudbuild
```

```js
let datafire = require('datafire');
let google_cloudbuild = require('@datafire/google_cloudbuild').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_cloudbuild.projects.builds.list({}).then(data => {
  console.log(data);
})
```

## Description
Builds container images in the cloud.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudbuild.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_cloudbuild.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### projects.builds.list
Lists previously requested builds.

Previously requested builds may still be in-progress, or may have finished
successfully or unsuccessfully.


```js
google_cloudbuild.projects.builds.list({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - ID of the project.
* filter (string) - The raw filter text to constrain the results.
* pageToken (string) - Token to provide to skip to a particular spot in the list.
* pageSize (integer) - Number of results to return in the list.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.builds.create
Starts a build with the specified configuration.

The long-running Operation returned by this method will include the ID of
the build, which can be passed to GetBuild to determine its status (e.g.,
success or failure).


```js
google_cloudbuild.projects.builds.create({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - ID of the project.
* body (object) - A build resource in the Container Builder API.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.builds.get
Returns information about a previously requested build.

The Build that is returned includes its status (e.g., success or failure,
or in-progress), and timing information.


```js
google_cloudbuild.projects.builds.get({
  "projectId": "",
  "id": ""
}, context)
```

#### Parameters
* projectId (string) **required** - ID of the project.
* id (string) **required** - ID of the build.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.builds.cancel
Cancels a requested build in progress.


```js
google_cloudbuild.projects.builds.cancel({
  "projectId": "",
  "id": ""
}, context)
```

#### Parameters
* projectId (string) **required** - ID of the project.
* id (string) **required** - ID of the build.
* body (object) - Request to cancel an ongoing build.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.builds.retry
Creates a new build based on the given build.

This API creates a new build using the original build request,  which may
or may not result in an identical build.

For triggered builds:

* Triggered builds resolve to a precise revision, so a retry of a triggered
build will result in a build that uses the same revision.

For non-triggered builds that specify RepoSource:

* If the original build built from the tip of a branch, the retried build
will build from the tip of that branch, which may not be the same revision
as the original build.
* If the original build specified a commit sha or revision ID, the retried
build will use the identical source.

For builds that specify StorageSource:

* If the original build pulled source from Cloud Storage without specifying
the generation of the object, the new build will use the current object,
which may be different from the original build source.
* If the original build pulled source from Cloud Storage and specified the
generation of the object, the new build will attempt to use the same
object, which may or may not be available depending on the bucket's
lifecycle management settings.


```js
google_cloudbuild.projects.builds.retry({
  "id": "",
  "projectId": ""
}, context)
```

#### Parameters
* body (object) - RetryBuildRequest specifies a build to retry.
* id (string) **required** - Build ID of the original build.
* projectId (string) **required** - ID of the project.
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

### projects.triggers.list
Lists existing BuildTrigger.

This API is experimental.


```js
google_cloudbuild.projects.triggers.list({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - ID of the project for which to list BuildTriggers.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.triggers.create
Creates a new BuildTrigger.

This API is experimental.


```js
google_cloudbuild.projects.triggers.create({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - ID of the project for which to configure automatic builds.
* body (object) - Configuration for an automated build in response to source repository
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.triggers.delete
Deletes an BuildTrigger by its project ID and trigger ID.

This API is experimental.


```js
google_cloudbuild.projects.triggers.delete({
  "projectId": "",
  "triggerId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - ID of the project that owns the trigger.
* triggerId (string) **required** - ID of the BuildTrigger to delete.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.triggers.get
Gets information about a BuildTrigger.

This API is experimental.


```js
google_cloudbuild.projects.triggers.get({
  "projectId": "",
  "triggerId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - ID of the project that owns the trigger.
* triggerId (string) **required** - ID of the BuildTrigger to get.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.triggers.patch
Updates an BuildTrigger by its project ID and trigger ID.

This API is experimental.


```js
google_cloudbuild.projects.triggers.patch({
  "projectId": "",
  "triggerId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - ID of the project that owns the trigger.
* triggerId (string) **required** - ID of the BuildTrigger to update.
* body (object) - Configuration for an automated build in response to source repository
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### projects.triggers.run
Runs a BuildTrigger at a particular source revision.


```js
google_cloudbuild.projects.triggers.run({
  "projectId": "",
  "triggerId": ""
}, context)
```

#### Parameters
* body (object) - RepoSource describes the location of the source in a Google Cloud Source
* projectId (string) **required** - ID of the project.
* triggerId (string) **required** - ID of the trigger.
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

### operations.list
Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.


```js
google_cloudbuild.operations.list({
  "name": ""
}, context)
```

#### Parameters
* filter (string) - The standard list filter.
* name (string) **required** - The name of the operation's parent resource.
* pageSize (integer) - The standard list page size.
* pageToken (string) - The standard list page token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

### operations.cancel
Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.


```js
google_cloudbuild.operations.cancel({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the operation resource to be cancelled.
* body (object) - The request message for Operations.CancelOperation.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.

