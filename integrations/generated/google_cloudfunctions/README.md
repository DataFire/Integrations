# @datafire/google_cloudfunctions

Client library for Google Cloud Functions

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

google_cloudfunctions.operations.list({}).then(data => {
  console.log(data);
});
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
google_cloudfunctions.operations.list({}, context)
```

#### Input
* input `object`
  * filter `string`: The standard list filter.
  * name `string`: The name of the operation's parent resource.
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
* output [ListOperationsResponse](#listoperationsresponse)

### projects.locations.functions.create
Creates a new function. If a function with the given name already exists in
the specified project, the long running operation will return
`ALREADY_EXISTS` error.


```js
google_cloudfunctions.projects.locations.functions.create({
  "location": ""
}, context)
```

#### Input
* input `object`
  * body [CloudFunction](#cloudfunction)
  * location **required** `string`: The project and location in which the function should be created, specified
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
* output [Operation](#operation)

### projects.locations.functions.delete
Deletes a function with the given name from the specified project. If the
given function is used by some trigger, the trigger will be updated to
remove this function.


```js
google_cloudfunctions.projects.locations.functions.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the function which should be deleted.
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
* output [Operation](#operation)

### operations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.


```js
google_cloudfunctions.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
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
* output [Operation](#operation)

### projects.locations.functions.patch
Updates existing function.


```js
google_cloudfunctions.projects.locations.functions.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CloudFunction](#cloudfunction)
  * name **required** `string`: A user-defined name of the function. Function names must be unique
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
* output [Operation](#operation)

### projects.locations.list
Lists information about the supported locations for this service.


```js
google_cloudfunctions.projects.locations.list({
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

### projects.locations.functions.call
Invokes synchronously deployed function. To be used for testing, very
limited traffic allowed.


```js
google_cloudfunctions.projects.locations.functions.call({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CallFunctionRequest](#callfunctionrequest)
  * name **required** `string`: The name of the function to be called.
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
* output [CallFunctionResponse](#callfunctionresponse)

### projects.locations.functions.generateDownloadUrl
Returns a signed URL for downloading deployed function source code.
The URL is only valid for a limited period and should be used within
minutes after generation.
For more information about the signed URL usage see:
https://cloud.google.com/storage/docs/access-control/signed-urls


```js
google_cloudfunctions.projects.locations.functions.generateDownloadUrl({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GenerateDownloadUrlRequest](#generatedownloadurlrequest)
  * name **required** `string`: The name of function for which source code Google Cloud Storage signed
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
* output [GenerateDownloadUrlResponse](#generatedownloadurlresponse)

### projects.locations.functions.list
Returns a list of functions that belong to the requested project.


```js
google_cloudfunctions.projects.locations.functions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Maximum number of functions to return per call.
  * pageToken `string`: The value returned by the last
  * parent **required** `string`: The project and location from which the function should be listed,
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
* output [ListFunctionsResponse](#listfunctionsresponse)

### projects.locations.functions.generateUploadUrl
Returns a signed URL for uploading a function source code.
For more information about the signed URL usage see:
https://cloud.google.com/storage/docs/access-control/signed-urls.
Once the function source code upload is complete, the used signed
URL should be provided in CreateFunction or UpdateFunction request
as a reference to the function source code.

When uploading source code to the generated signed URL, please follow
these restrictions:

* Source file type should be a zip file.
* Source file size should not exceed 100MB limit.

When making a HTTP PUT request, these two headers need to be specified:

* `content-type: application/zip`
* `x-google-content-length-range: 0,104857600`


```js
google_cloudfunctions.projects.locations.functions.generateUploadUrl({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [GenerateUploadUrlRequest](#generateuploadurlrequest)
  * parent **required** `string`: The project and location in which the Google Cloud Storage signed URL
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
* output [GenerateUploadUrlResponse](#generateuploadurlresponse)



## Definitions

### CallFunctionRequest
* CallFunctionRequest `object`: Request for the `CallFunction` method.
  * data `string`: Input to be passed to the function.

### CallFunctionResponse
* CallFunctionResponse `object`: Response of `CallFunction` method.
  * error `string`: Either system or user-function generated error. Set if execution
  * executionId `string`: Execution id of function invocation.
  * result `string`: Result populated for successful execution of synchronous function. Will

### CloudFunction
* CloudFunction `object`: Describes a Cloud Function that contains user computation executed in
  * availableMemoryMb `integer`: The amount of memory in MB available for a function.
  * description `string`: User-provided description of a function.
  * entryPoint `string`: The name of the function (as defined in source code) that will be
  * eventTrigger [EventTrigger](#eventtrigger)
  * httpsTrigger [HttpsTrigger](#httpstrigger)
  * labels `object`: Labels associated with this Cloud Function.
  * name `string`: A user-defined name of the function. Function names must be unique
  * serviceAccountEmail `string`: Output only. The email of the function's service account.
  * sourceArchiveUrl `string`: The Google Cloud Storage URL, starting with gs://, pointing to the zip
  * sourceRepository [SourceRepository](#sourcerepository)
  * sourceUploadUrl `string`: The Google Cloud Storage signed URL used for source uploading, generated
  * status `string` (values: CLOUD_FUNCTION_STATUS_UNSPECIFIED, ACTIVE, OFFLINE, DEPLOY_IN_PROGRESS, DELETE_IN_PROGRESS, UNKNOWN): Output only. Status of the function deployment.
  * timeout `string`: The function execution timeout. Execution is considered failed and
  * updateTime `string`: Output only. The last update timestamp of a Cloud Function.
  * versionId `string`: Output only.

### EventTrigger
* EventTrigger `object`: Describes EventTrigger, used to request events be sent from another
  * eventType `string`: Required. The type of event to observe. For example:
  * failurePolicy [FailurePolicy](#failurepolicy)
  * resource `string`: Required. The resource(s) from which to observe events, for example,
  * service `string`: The hostname of the service that should be observed.

### FailurePolicy
* FailurePolicy `object`: Describes the policy in case of function's execution failure.
  * retry [Retry](#retry)

### GenerateDownloadUrlRequest
* GenerateDownloadUrlRequest `object`: Request of `GenerateDownloadUrl` method.
  * versionId `string`: The optional version of function. If not set, default, current version

### GenerateDownloadUrlResponse
* GenerateDownloadUrlResponse `object`: Response of `GenerateDownloadUrl` method.
  * downloadUrl `string`: The generated Google Cloud Storage signed URL that should be used for

### GenerateUploadUrlRequest
* GenerateUploadUrlRequest `object`: Request of `GenerateSourceUploadUrl` method.

### GenerateUploadUrlResponse
* GenerateUploadUrlResponse `object`: Response of `GenerateSourceUploadUrl` method.
  * uploadUrl `string`: The generated Google Cloud Storage signed URL that should be used for a

### HttpsTrigger
* HttpsTrigger `object`: Describes HttpsTrigger, could be used to connect web hooks to function.
  * url `string`: Output only. The deployed url for the function.

### ListFunctionsResponse
* ListFunctionsResponse `object`: Response for the `ListFunctions` method.
  * functions `array`: The functions that match the request.
    * items [CloudFunction](#cloudfunction)
  * nextPageToken `string`: If not empty, indicates that there may be more functions that match

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
* SourceRepository `object`: Describes SourceRepository, used to represent parameters related to
  * deployedUrl `string`: Output only. The URL pointing to the hosted repository where the function
  * url `string`: The URL pointing to the hosted repository where the function is defined.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any


