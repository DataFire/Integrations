# @datafire/google_storagetransfer

Client library for Google Storage Transfer

## Installation and Usage
```bash
npm install --save @datafire/google_storagetransfer
```
```js
let google_storagetransfer = require('@datafire/google_storagetransfer').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_storagetransfer.transferJobs.create({}).then(data => {
  console.log(data);
});
```

## Description

Transfers data from external data sources to a Google Cloud Storage bucket or between Google Cloud Storage buckets.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_storagetransfer.oauthCallback({
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
google_storagetransfer.oauthRefresh(null, context)
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

### googleServiceAccounts.get
Returns the Google service account that is used by Storage Transfer
Service to access buckets in the project where transfers
run or in other projects. Each Google service account is associated
with one Google Cloud Platform Console project. Users
should add this service account to the Google Cloud Storage bucket
ACLs to grant access to Storage Transfer Service. This service
account is created and owned by Storage Transfer Service and can
only be used by Storage Transfer Service.


```js
google_storagetransfer.googleServiceAccounts.get({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Google Cloud Platform Console project that the Google service
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
* output [GoogleServiceAccount](#googleserviceaccount)

### transferJobs.list
Lists transfer jobs.


```js
google_storagetransfer.transferJobs.list({}, context)
```

#### Input
* input `object`
  * filter `string`: A list of query parameters specified as JSON text in the form of
  * pageSize `integer`: The list page size. The max allowed value is 256.
  * pageToken `string`: The list page token.
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
* output [ListTransferJobsResponse](#listtransferjobsresponse)

### transferJobs.create
Creates a transfer job that runs periodically.


```js
google_storagetransfer.transferJobs.create({}, context)
```

#### Input
* input `object`
  * body [TransferJob](#transferjob)
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
* output [TransferJob](#transferjob)

### transferJobs.get
Gets a transfer job.


```js
google_storagetransfer.transferJobs.get({
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * jobName **required** `string`: The job to get.
  * projectId `string`: The ID of the Google Cloud Platform Console project that owns the job.
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
* output [TransferJob](#transferjob)

### transferJobs.patch
Updates a transfer job. Updating a job's transfer spec does not affect
transfer operations that are running already. Updating the scheduling
of a job is not allowed.


```js
google_storagetransfer.transferJobs.patch({
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateTransferJobRequest](#updatetransferjobrequest)
  * jobName **required** `string`: The name of job to update.
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
* output [TransferJob](#transferjob)

### transferOperations.delete
This method is not supported and the server returns `UNIMPLEMENTED`.


```js
google_storagetransfer.transferOperations.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be deleted.
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
* output [Empty](#empty)

### transferOperations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.


```js
google_storagetransfer.transferOperations.get({
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

### transferOperations.cancel
Cancels a transfer. Use the get method to check whether the cancellation succeeded or whether the operation completed despite cancellation.


```js
google_storagetransfer.transferOperations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
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
* output [Empty](#empty)

### transferOperations.pause
Pauses a transfer operation.


```js
google_storagetransfer.transferOperations.pause({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [PauseTransferOperationRequest](#pausetransferoperationrequest)
  * name **required** `string`: The name of the transfer operation.
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
* output [Empty](#empty)

### transferOperations.resume
Resumes a transfer operation that is paused.


```js
google_storagetransfer.transferOperations.resume({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [ResumeTransferOperationRequest](#resumetransferoperationrequest)
  * name **required** `string`: The name of the transfer operation.
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
* output [Empty](#empty)



## Definitions

### AwsAccessKey
* AwsAccessKey `object`: AWS access key (see
  * accessKeyId `string`: AWS access key ID.
  * secretAccessKey `string`: AWS secret access key. This field is not returned in RPC responses.

### AwsS3Data
* AwsS3Data `object`: An AwsS3Data can be a data source, but not a data sink.
  * awsAccessKey [AwsAccessKey](#awsaccesskey)
  * bucketName `string`: S3 Bucket name (see

### Date
* Date `object`: Represents a whole calendar date, e.g. date of birth. The time of day and
  * day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month, or 0
  * month `integer`: Month of year. Must be from 1 to 12.
  * year `integer`: Year of date. Must be from 1 to 9999, or 0 if specifying a date without

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### ErrorLogEntry
* ErrorLogEntry `object`: An entry describing an error that has occurred.
  * errorDetails `array`: A list of messages that carry the error details.
    * items `string`
  * url `string`: A URL that refers to the target (a data source, a data sink,

### ErrorSummary
* ErrorSummary `object`: A summary of errors by error code, plus a count and sample error log
  * errorCode `string` (values: OK, CANCELLED, UNKNOWN, INVALID_ARGUMENT, DEADLINE_EXCEEDED, NOT_FOUND, ALREADY_EXISTS, PERMISSION_DENIED, UNAUTHENTICATED, RESOURCE_EXHAUSTED, FAILED_PRECONDITION, ABORTED, OUT_OF_RANGE, UNIMPLEMENTED, INTERNAL, UNAVAILABLE, DATA_LOSS): Required.
  * errorCount `string`: Count of this type of error.
  * errorLogEntries `array`: Error samples.
    * items [ErrorLogEntry](#errorlogentry)

### GcsData
* GcsData `object`: In a GcsData, an object's name is the Google Cloud Storage object's name and
  * bucketName `string`: Google Cloud Storage bucket name (see

### GoogleServiceAccount
* GoogleServiceAccount `object`: Google service account
  * accountEmail `string`: Required.

### HttpData
* HttpData `object`: An HttpData specifies a list of objects on the web to be transferred over
  * listUrl `string`: The URL that points to the file that stores the object list entries.

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### ListTransferJobsResponse
* ListTransferJobsResponse `object`: Response from ListTransferJobs.
  * nextPageToken `string`: The list next page token.
  * transferJobs `array`: A list of transfer jobs.
    * items [TransferJob](#transferjob)

### ObjectConditions
* ObjectConditions `object`: Conditions that determine which objects will be transferred.
  * excludePrefixes `array`: `excludePrefixes` must follow the requirements described for
    * items `string`
  * includePrefixes `array`: If `includePrefixes` is specified, objects that satisfy the object
    * items `string`
  * maxTimeElapsedSinceLastModification `string`: `maxTimeElapsedSinceLastModification` is the complement to
  * minTimeElapsedSinceLastModification `string`: If unspecified, `minTimeElapsedSinceLastModification` takes a zero value

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [Status](#status)
  * metadata `object`: Represents the transfer operation object.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `transferOperations/some/unique/name`.
  * response `object`: The normal response of the operation in case of success.  If the original

### PauseTransferOperationRequest
* PauseTransferOperationRequest `object`: Request passed to PauseTransferOperation.

### ResumeTransferOperationRequest
* ResumeTransferOperationRequest `object`: Request passed to ResumeTransferOperation.

### Schedule
* Schedule `object`: Transfers can be scheduled to recur or to run just once.
  * scheduleEndDate [Date](#date)
  * scheduleStartDate [Date](#date)
  * startTimeOfDay [TimeOfDay](#timeofday)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### TimeOfDay
* TimeOfDay `object`: Represents a time of day. The date and time zone are either not significant
  * hours `integer`: Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
  * minutes `integer`: Minutes of hour of day. Must be from 0 to 59.
  * nanos `integer`: Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * seconds `integer`: Seconds of minutes of the time. Must normally be from 0 to 59. An API may

### TransferCounters
* TransferCounters `object`: A collection of counters that report the progress of a transfer operation.
  * bytesCopiedToSink `string`: Bytes that are copied to the data sink.
  * bytesDeletedFromSink `string`: Bytes that are deleted from the data sink.
  * bytesDeletedFromSource `string`: Bytes that are deleted from the data source.
  * bytesFailedToDeleteFromSink `string`: Bytes that failed to be deleted from the data sink.
  * bytesFoundFromSource `string`: Bytes found in the data source that are scheduled to be transferred,
  * bytesFoundOnlyFromSink `string`: Bytes found only in the data sink that are scheduled to be deleted.
  * bytesFromSourceFailed `string`: Bytes in the data source that failed during the transfer.
  * bytesFromSourceSkippedBySync `string`: Bytes in the data source that are not transferred because they already
  * objectsCopiedToSink `string`: Objects that are copied to the data sink.
  * objectsDeletedFromSink `string`: Objects that are deleted from the data sink.
  * objectsDeletedFromSource `string`: Objects that are deleted from the data source.
  * objectsFailedToDeleteFromSink `string`: Objects that failed to be deleted from the data sink.
  * objectsFoundFromSource `string`: Objects found in the data source that are scheduled to be transferred,
  * objectsFoundOnlyFromSink `string`: Objects found only in the data sink that are scheduled to be deleted.
  * objectsFromSourceFailed `string`: Objects in the data source that failed during the transfer.
  * objectsFromSourceSkippedBySync `string`: Objects in the data source that are not transferred because they already

### TransferJob
* TransferJob `object`: This resource represents the configuration of a transfer job that runs
  * creationTime `string`: This field cannot be changed by user requests.
  * deletionTime `string`: This field cannot be changed by user requests.
  * description `string`: A description provided by the user for the job. Its max length is 1024
  * lastModificationTime `string`: This field cannot be changed by user requests.
  * name `string`: A globally unique name assigned by Storage Transfer Service when the
  * projectId `string`: The ID of the Google Cloud Platform Console project that owns the job.
  * schedule [Schedule](#schedule)
  * status `string` (values: STATUS_UNSPECIFIED, ENABLED, DISABLED, DELETED): Status of the job. This value MUST be specified for
  * transferSpec [TransferSpec](#transferspec)

### TransferOperation
* TransferOperation `object`: A description of the execution of a transfer.
  * counters [TransferCounters](#transfercounters)
  * endTime `string`: End time of this transfer execution.
  * errorBreakdowns `array`: Summarizes errors encountered with sample error log entries.
    * items [ErrorSummary](#errorsummary)
  * name `string`: A globally unique ID assigned by the system.
  * projectId `string`: The ID of the Google Cloud Platform Console project that owns the operation.
  * startTime `string`: Start time of this transfer execution.
  * status `string` (values: STATUS_UNSPECIFIED, IN_PROGRESS, PAUSED, SUCCESS, FAILED, ABORTED): Status of the transfer operation.
  * transferJobName `string`: The name of the transfer job that triggers this transfer operation.
  * transferSpec [TransferSpec](#transferspec)

### TransferOptions
* TransferOptions `object`: TransferOptions uses three boolean parameters to define the actions
  * deleteObjectsFromSourceAfterTransfer `boolean`: Whether objects should be deleted from the source after they are
  * deleteObjectsUniqueInSink `boolean`: Whether objects that exist only in the sink should be deleted.  Note that
  * overwriteObjectsAlreadyExistingInSink `boolean`: Whether overwriting objects that already exist in the sink is allowed.

### TransferSpec
* TransferSpec `object`: Configuration for running a transfer.
  * awsS3DataSource [AwsS3Data](#awss3data)
  * gcsDataSink [GcsData](#gcsdata)
  * gcsDataSource [GcsData](#gcsdata)
  * httpDataSource [HttpData](#httpdata)
  * objectConditions [ObjectConditions](#objectconditions)
  * transferOptions [TransferOptions](#transferoptions)

### UpdateTransferJobRequest
* UpdateTransferJobRequest `object`: Request passed to UpdateTransferJob.
  * projectId `string`: The ID of the Google Cloud Platform Console project that owns the job.
  * transferJob [TransferJob](#transferjob)
  * updateTransferJobFieldMask `string`: The field mask of the fields in `transferJob` that are to be updated in


