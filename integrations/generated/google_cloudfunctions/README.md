# @datafire/google_cloudfunctions

Client library for Cloud Functions API

## Installation and Usage
```bash
npm install --save @datafire/google_cloudfunctions
```
```js
let google_cloudfunctions = require('@datafire/google_cloudfunctions').create({
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

Manages lightweight user-provided functions executed in response to events.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudfunctions.oauthCallback({
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
google_cloudfunctions.oauthRefresh(null, context)
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

### cloudfunctions.operations.list
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
google_cloudfunctions.cloudfunctions.operations.list({}, context)
```

#### Input
* input `object`
  * filter `string`: Required. A filter for matching the requested operations.<br><br> The supported formats of <b>filter</b> are:<br> To query for a specific function: <code>project:*,location:*,function:*</code><br> To query for all of the latest operations for a project: <code>project:*,latest:true</code>
  * name `string`: Must not be set.
  * pageSize `integer`: The maximum number of records that should be returned.<br> Requested page size cannot exceed 100. If not set, the default page size is 100.<br><br> Pagination is only supported when querying for a specific function.
  * pageToken `string`: Token identifying which result to start with, which is returned by a previous list call.<br><br> Pagination is only supported when querying for a specific function.
  * access_token `string`: OAuth access token.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * callback `string`: JSONP

#### Output
* output [ListOperationsResponse](#listoperationsresponse)

### cloudfunctions.projects.locations.functions.list
Returns a list of functions that belong to the requested project.


```js
google_cloudfunctions.cloudfunctions.projects.locations.functions.list({
  "location": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: Required. The project and location from which the function should be listed,
  * pageSize `integer`: Maximum number of functions to return per call.
  * pageToken `string`: The value returned by the last
  * access_token `string`: OAuth access token.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * callback `string`: JSONP

#### Output
* output [ListFunctionsResponse](#listfunctionsresponse)

### cloudfunctions.projects.locations.functions.create
Creates a new function. If a function with the given name already exists in
the specified project, the long running operation will return
`ALREADY_EXISTS` error.


```js
google_cloudfunctions.cloudfunctions.projects.locations.functions.create({
  "location": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: Required. The project and location in which the function should be created, specified
  * body [CloudFunction](#cloudfunction)
  * access_token `string`: OAuth access token.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * callback `string`: JSONP

#### Output
* output [Operation](#operation)

### cloudfunctions.projects.locations.functions.delete
Deletes a function with the given name from the specified project. If the
given function is used by some trigger, the trigger will be updated to
remove this function.


```js
google_cloudfunctions.cloudfunctions.projects.locations.functions.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the function which should be deleted.
  * access_token `string`: OAuth access token.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * callback `string`: JSONP

#### Output
* output [Operation](#operation)

### cloudfunctions.projects.locations.functions.get
Returns a function with the given name from the requested project.


```js
google_cloudfunctions.cloudfunctions.projects.locations.functions.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the function which details should be obtained.
  * access_token `string`: OAuth access token.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * callback `string`: JSONP

#### Output
* output [CloudFunction](#cloudfunction)

### cloudfunctions.projects.locations.functions.update
Updates existing function.


```js
google_cloudfunctions.cloudfunctions.projects.locations.functions.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the function to be updated.
  * body [CloudFunction](#cloudfunction)
  * access_token `string`: OAuth access token.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * callback `string`: JSONP

#### Output
* output [Operation](#operation)

### cloudfunctions.projects.locations.list
Lists information about the supported locations for this service.


```js
google_cloudfunctions.cloudfunctions.projects.locations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource that owns the locations collection, if applicable.
  * filter `string`: The standard list filter.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
  * access_token `string`: OAuth access token.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * callback `string`: JSONP

#### Output
* output [ListLocationsResponse](#listlocationsresponse)

### cloudfunctions.projects.locations.functions.call
Synchronously invokes a deployed Cloud Function. To be used for testing
purposes as very limited traffic is allowed. For more information on
the actual limits refer to [API Calls](
https://cloud.google.com/functions/quotas#rate_limits).


```js
google_cloudfunctions.cloudfunctions.projects.locations.functions.call({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the function to be called.
  * body [CallFunctionRequest](#callfunctionrequest)
  * access_token `string`: OAuth access token.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * callback `string`: JSONP

#### Output
* output [CallFunctionResponse](#callfunctionresponse)

### cloudfunctions.projects.locations.functions.generateDownloadUrl
Returns a signed URL for downloading deployed function source code.
The URL is only valid for a limited period and should be used within
minutes after generation.
For more information about the signed URL usage see:
https://cloud.google.com/storage/docs/access-control/signed-urls


```js
google_cloudfunctions.cloudfunctions.projects.locations.functions.generateDownloadUrl({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of function for which source code Google Cloud Storage signed
  * body [GenerateDownloadUrlRequest](#generatedownloadurlrequest)
  * access_token `string`: OAuth access token.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * callback `string`: JSONP

#### Output
* output [GenerateDownloadUrlResponse](#generatedownloadurlresponse)

### cloudfunctions.projects.locations.functions.generateUploadUrl
Returns a signed URL for uploading a function source code.
For more information about the signed URL usage see:
https://cloud.google.com/storage/docs/access-control/signed-urls
Once the function source code upload is complete, the used signed
URL should be provided in CreateFunction or UpdateFunction request
as a reference to the function source code.

When uploading source code to the generated signed URL, please follow
these restrictions:

* Source file type should be a zip file.
* Source file size should not exceed 100MB limit.
* No credentials should be attached - the signed URLs provide access to the
  target bucket using internal service identity; if credentials were
  attached, the identity from the credentials would be used, but that
  identity does not have permissions to upload files to the URL.

When making a HTTP PUT request, these two headers need to be specified:

* `content-type: application/zip`
* `x-goog-content-length-range: 0,104857600`

And this header SHOULD NOT be specified:

* `Authorization: Bearer YOUR_TOKEN`


```js
google_cloudfunctions.cloudfunctions.projects.locations.functions.generateUploadUrl({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project and location in which the Google Cloud Storage signed URL
  * body [GenerateUploadUrlRequest](#generateuploadurlrequest)
  * access_token `string`: OAuth access token.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * callback `string`: JSONP

#### Output
* output [GenerateUploadUrlResponse](#generateuploadurlresponse)



## Definitions

### CallFunctionRequest
* CallFunctionRequest `object`: Request for the `CallFunction` method.
  * data `string`: Required. Input to be passed to the function.

### CallFunctionResponse
* CallFunctionResponse `object`: Response of `CallFunction` method.
  * error `string`: Either system or user-function generated error. Set if execution
  * executionId `string`: Execution id of function invocation.
  * result `string`: Result populated for successful execution of synchronous function. Will

### CloudFunction
* CloudFunction `object`: Describes a Cloud Function that contains user computation executed in
  * availableMemoryMb `integer`: The amount of memory in MB available for a function.
  * entryPoint `string`: The name of the function (as defined in source code) that will be
  * environmentVariables `object`: Environment variables that shall be available during function execution.
  * eventTrigger [EventTrigger](#eventtrigger)
  * httpsTrigger [HTTPSTrigger](#httpstrigger)
  * labels `object`: Labels associated with this Cloud Function.
  * latestOperation `string`: Output only. Name of the most recent operation modifying the function. If
  * maxInstances `integer`: The limit on the maximum number of function instances that may coexist at a
  * name `string`: A user-defined name of the function. Function names must be unique
  * network `string`: The VPC Network that this cloud function can connect to. It can be
  * runtime `string`: The runtime in which to run the function. Required when deploying a new
  * serviceAccount `string`: The email of the function's service account. If empty, defaults to
  * sourceArchiveUrl `string`: The Google Cloud Storage URL, starting with gs://, pointing to the zip
  * sourceRepository [SourceRepository](#sourcerepository)
  * sourceRepositoryUrl `string`: The URL pointing to the hosted repository where the function is defined.
  * sourceUploadUrl `string`: The Google Cloud Storage signed URL used for source uploading, generated
  * status `string` (values: STATUS_UNSPECIFIED, READY, FAILED, DEPLOYING, DELETING): Output only. Status of the function deployment.
  * timeout `string`: The function execution timeout. Execution is considered failed and
  * updateTime `string`: Output only. The last update timestamp of a Cloud Function.
  * versionId `string`: Output only. The version identifier of the Cloud Function. Each deployment attempt
  * vpcConnector `string`: The VPC Network Connector that this cloud function can connect to. It can

### EventTrigger
* EventTrigger `object`: Describes EventTrigger, used to request events be sent from another
  * eventType `string`: `event_type` names contain the service that is sending an event and the
  * failurePolicy [FailurePolicy](#failurepolicy)
  * resource `string`: Which instance of the source's service should send events. E.g. for Pub/Sub
  * service `string`: The hostname of the service that should be observed.

### FailurePolicy
* FailurePolicy `object`: Describes the policy in case of function's execution failure.
  * retry [Retry](#retry)

### GenerateDownloadUrlRequest
* GenerateDownloadUrlRequest `object`: Request of `GenerateDownloadUrl` method.
  * versionId `string`: The optional version of function.

### GenerateDownloadUrlResponse
* GenerateDownloadUrlResponse `object`: Response of `GenerateDownloadUrl` method.
  * downloadUrl `string`: The generated Google Cloud Storage signed URL that should be used for

### GenerateUploadUrlRequest
* GenerateUploadUrlRequest `object`: Request of `GenerateUploadUrl` method.

### GenerateUploadUrlResponse
* GenerateUploadUrlResponse `object`: Response of `GenerateUploadUrl` method.
  * uploadUrl `string`: The generated Google Cloud Storage signed URL that should be used for a

### HTTPSTrigger
* HTTPSTrigger `object`: Describes HTTPSTrigger, could be used to connect web hooks to function.
  * url `string`: Output only. The deployed url for the function.

### ListFunctionsResponse
* ListFunctionsResponse `object`: Response for the `ListFunctions` method.
  * functions `array`: The functions that match the request.
    * items [CloudFunction](#cloudfunction)
  * nextPageToken `string`: If not empty, indicates that there may be more functions that match
  * unreachable `array`: Locations that could not be reached. The response does not include any
    * items `string`

### ListLocationsResponse
* ListLocationsResponse `object`: The response message for Locations.ListLocations.
  * locations `array`: A list of locations that matches the specified filter in the request.
    * items [Location](#location)
  * nextPageToken `string`: The standard List next-page token.

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name.
  * labels `object`: Cross-service attributes for the location. For example
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given
  * name `string`: Resource name for the location, which may vary between implementations.

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation.  It typically
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: The normal response of the operation in case of success.  If the original

### OperationMetadataV1
* OperationMetadataV1 `object`: Metadata describing an Operation
  * buildId `string`: The Cloud Build ID of the function created or updated by an API call.
  * request `object`: The original request that started the operation.
  * target `string`: Target of the operation - for example
  * type `string` (values: OPERATION_UNSPECIFIED, CREATE_FUNCTION, UPDATE_FUNCTION, DELETE_FUNCTION): Type of operation.
  * updateTime `string`: The last update timestamp of the operation.
  * versionId `string`: Version id of the function created or updated by an API call.

### OperationMetadataV1Beta2
* OperationMetadataV1Beta2 `object`: Metadata describing an Operation
  * request `object`: The original request that started the operation.
  * target `string`: Target of the operation - for example
  * type `string` (values: OPERATION_UNSPECIFIED, CREATE_FUNCTION, UPDATE_FUNCTION, DELETE_FUNCTION): Type of operation.
  * updateTime `string`: The last update timestamp of the operation.
  * versionId `string`: Version id of the function created or updated by an API call.

### Retry
* Retry `object`: Describes the retry policy in case of function's execution failure.

### SourceRepository
* SourceRepository `object`: Describes the location of the function source in a remote repository.
  * branch `string`: The name of the branch from which the function should be fetched.
  * deployedRevision `string`: Output only. The id of the revision that was resolved at the moment of
  * repositoryUrl `string`: URL to the hosted repository where the function is defined. Only paths in
  * revision `string`: The id of the revision that captures the state of the repository from
  * sourcePath `string`: The path within the repository where the function is defined. The path
  * tag `string`: The name of the tag that captures the state of the repository from

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any


