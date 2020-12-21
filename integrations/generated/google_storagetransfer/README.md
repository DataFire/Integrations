# @datafire/google_storagetransfer

Client library for Storage Transfer API

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

.then(data => {
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

### storagetransfer.googleServiceAccounts.get
Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is associated with one Google Cloud Platform Console project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.


```js
google_storagetransfer.storagetransfer.googleServiceAccounts.get({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform Console project that the Google service account is associated with.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleServiceAccount](#googleserviceaccount)

### storagetransfer.transferJobs.list
Lists transfer jobs.


```js
google_storagetransfer.storagetransfer.transferJobs.list({
  "filter": ""
}, context)
```

#### Input
* input `object`
  * filter **required** `string`: Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobStatuses":["status1","status2",...]}` Since `jobNames` and `jobStatuses` support multiple values, their values must be specified with array notation. `projectId` is required. `jobNames` and `jobStatuses` are optional. The valid values for `jobStatuses` are case-insensitive: ENABLED, DISABLED, and DELETED.
  * pageSize `integer`: The list page size. The max allowed value is 256.
  * pageToken `string`: The list page token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListTransferJobsResponse](#listtransferjobsresponse)

### storagetransfer.transferJobs.create
Creates a transfer job that runs periodically.


```js
google_storagetransfer.storagetransfer.transferJobs.create({}, context)
```

#### Input
* input `object`
  * body [TransferJob](#transferjob)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [TransferJob](#transferjob)

### storagetransfer.transferJobs.get
Gets a transfer job.


```js
google_storagetransfer.storagetransfer.transferJobs.get({
  "jobName": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * jobName **required** `string`: Required. " The job to get.
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform Console project that owns the job.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [TransferJob](#transferjob)

### storagetransfer.transferJobs.patch
Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).


```js
google_storagetransfer.storagetransfer.transferJobs.patch({
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * jobName **required** `string`: Required. The name of job to update.
  * body [UpdateTransferJobRequest](#updatetransferjobrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [TransferJob](#transferjob)

### storagetransfer.transferOperations.list
Lists transfer operations.


```js
google_storagetransfer.storagetransfer.transferOperations.list({
  "name": "",
  "filter": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The value `transferOperations`.
  * filter **required** `string`: Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "operationNames":["opid1","opid2",...], "transferStatuses":["status1","status2",...]}` Since `jobNames`, `operationNames`, and `transferStatuses` support multiple values, they must be specified with array notation. `projectId` is required. `jobNames`, `operationNames`, and `transferStatuses` are optional. The valid values for `transferStatuses` are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED.
  * pageSize `integer`: The list page size. The max allowed value is 256.
  * pageToken `string`: The list page token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListOperationsResponse](#listoperationsresponse)

### storagetransfer.transferOperations.cancel
Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the operation completed despite the `cancel` request. When you cancel an operation, the currently running transfer is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example, if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running operations. If an operation is not currently running, `cancel` does nothing. *Caution:* Canceling a transfer job can leave your data in an unknown state. We recommend that you restore the state at both the destination and the source after the `cancel` request completes so that your data is in a consistent state. When you cancel a job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a job every day, and today's job found 10 new files and transferred five files before you canceled the job, tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any new files discovered tomorrow.


```js
google_storagetransfer.storagetransfer.transferOperations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
  * body [CancelOperationRequest](#canceloperationrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### storagetransfer.transferOperations.pause
Pauses a transfer operation.


```js
google_storagetransfer.storagetransfer.transferOperations.pause({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the transfer operation.
  * body [PauseTransferOperationRequest](#pausetransferoperationrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### storagetransfer.transferOperations.resume
Resumes a transfer operation that is paused.


```js
google_storagetransfer.storagetransfer.transferOperations.resume({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the transfer operation.
  * body [ResumeTransferOperationRequest](#resumetransferoperationrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)



## Definitions

### AwsAccessKey
* AwsAccessKey `object`: AWS access key (see [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For information on our data retention policy for user credentials, see [User credentials](data-retention#user-credentials).
  * accessKeyId `string`: Required. AWS access key ID.
  * secretAccessKey `string`: Required. AWS secret access key. This field is not returned in RPC responses.

### AwsS3Data
* AwsS3Data `object`: An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name.
  * awsAccessKey [AwsAccessKey](#awsaccesskey)
  * bucketName `string`: Required. S3 Bucket name (see [Creating a bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/create-bucket-get-location-example.html)).

### AzureBlobStorageData
* AzureBlobStorageData `object`: An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names).
  * azureCredentials [AzureCredentials](#azurecredentials)
  * container `string`: Required. The container to transfer from the Azure Storage account.
  * storageAccount `string`: Required. The name of the Azure Storage account.

### AzureCredentials
* AzureCredentials `object`: Azure credentials For information on our data retention policy for user credentials, see [User credentials](data-retention#user-credentials).
  * sasToken `string`: Required. Azure shared access signature. (see [Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview)).

### CancelOperationRequest
* CancelOperationRequest `object`: The request message for Operations.CancelOperation.

### Date
* Date `object`: Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
  * day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### ErrorLogEntry
* ErrorLogEntry `object`: An entry describing an error that has occurred.
  * errorDetails `array`: A list of messages that carry the error details.
    * items `string`
  * url `string`: Required. A URL that refers to the target (a data source, a data sink, or an object) with which the error is associated.

### ErrorSummary
* ErrorSummary `object`: A summary of errors by error code, plus a count and sample error log entries.
  * errorCode `string` (values: OK, CANCELLED, UNKNOWN, INVALID_ARGUMENT, DEADLINE_EXCEEDED, NOT_FOUND, ALREADY_EXISTS, PERMISSION_DENIED, UNAUTHENTICATED, RESOURCE_EXHAUSTED, FAILED_PRECONDITION, ABORTED, OUT_OF_RANGE, UNIMPLEMENTED, INTERNAL, UNAVAILABLE, DATA_LOSS): Required.
  * errorCount `string`: Required. Count of this type of error.
  * errorLogEntries `array`: Error samples. At most 5 error log entries will be recorded for a given error code for a single transfer operation.
    * items [ErrorLogEntry](#errorlogentry)

### GcsData
* GcsData `object`: In a GcsData resource, an object's name is the Cloud Storage object's name and its "last modification time" refers to the object's `updated` property of Cloud Storage objects, which changes when the content or the metadata of the object is updated.
  * bucketName `string`: Required. Cloud Storage bucket name (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/naming#requirements)).

### GoogleServiceAccount
* GoogleServiceAccount `object`: Google service account
  * accountEmail `string`: Email address of the service account.

### HttpData
* HttpData `object`: An HttpData resource specifies a list of objects on the web to be transferred over HTTP. The information of the objects to be transferred is contained in a file referenced by a URL. The first line in the file must be `"TsvHttpData-1.0"`, which specifies the format of the file. Subsequent lines specify the information of the list of objects, one object per list entry. Each entry has the following tab-delimited fields: * **HTTP URL** — The location of the object. * **Length** — The size of the object in bytes. * **MD5** — The base64-encoded MD5 hash of the object. For an example of a valid TSV file, see [Transferring data from URLs](https://cloud.google.com/storage-transfer/docs/create-url-list). When transferring data based on a URL list, keep the following in mind: * When an object located at `http(s)://hostname:port/` is transferred to a data sink, the name of the object at the data sink is `/`. * If the specified size of an object does not match the actual size of the object fetched, the object will not be transferred. * If the specified MD5 does not match the MD5 computed from the transferred bytes, the object transfer will fail. For more information, see [Generating MD5 hashes] (https://cloud.google.com/storage-transfer/docs/create-url-list#md5-checksum) * Ensure that each URL you specify is publicly accessible. For example, in Cloud Storage you can [share an object publicly] (https://cloud.google.com/storage/docs/cloud-console#_sharingdata) and get a link to it. * Storage Transfer Service obeys `robots.txt` rules and requires the source HTTP server to support `Range` requests and to return a `Content-Length` header in each response. * ObjectConditions have no effect when filtering objects to transfer.
  * listUrl `string`: Required. The URL that points to the file that stores the object list entries. This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.

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

### NotificationConfig
* NotificationConfig `object`: Specification to configure notifications published to Cloud Pub/Sub. Notifications will be published to the customer-provided topic using the following `PubsubMessage.attributes`: * `"eventType"`: one of the EventType values * `"payloadFormat"`: one of the PayloadFormat values * `"projectId"`: the project_id of the `TransferOperation` * `"transferJobName"`: the transfer_job_name of the `TransferOperation` * `"transferOperationName"`: the name of the `TransferOperation` The `PubsubMessage.data` will contain a TransferOperation resource formatted according to the specified `PayloadFormat`.
  * eventTypes `array`: Event types for which a notification is desired. If empty, send notifications for all event types.
    * items `string` (values: EVENT_TYPE_UNSPECIFIED, TRANSFER_OPERATION_SUCCESS, TRANSFER_OPERATION_FAILED, TRANSFER_OPERATION_ABORTED)
  * payloadFormat `string` (values: PAYLOAD_FORMAT_UNSPECIFIED, NONE, JSON): Required. The desired format of the notification message payloads.
  * pubsubTopic `string`: Required. The `Topic.name` of the Cloud Pub/Sub topic to which to publish notifications. Must be of the format: `projects/{project}/topics/{topic}`. Not matching this format will result in an INVALID_ARGUMENT error.

### ObjectConditions
* ObjectConditions `object`: Conditions that determine which objects will be transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage. The "last modification time" refers to the time of the last change to the object's content or metadata — specifically, this is the `updated` property of Cloud Storage objects, the `LastModified` field of S3 objects, and the `Last-Modified` header of Azure blobs.
  * excludePrefixes `array`: `exclude_prefixes` must follow the requirements described for include_prefixes. The max size of `exclude_prefixes` is 1000.
    * items `string`
  * includePrefixes `array`: If `include_prefixes` is specified, objects that satisfy the object conditions must have names that start with one of the `include_prefixes` and that do not start with any of the exclude_prefixes. If `include_prefixes` is not specified, all objects except those that have names starting with one of the `exclude_prefixes` must satisfy the object conditions. Requirements: * Each include-prefix and exclude-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported. * Each include-prefix and exclude-prefix must omit the leading slash. For example, to include the `requests.gz` object in a transfer from `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the include prefix as `logs/y=2015/requests.gz`. * None of the include-prefix or the exclude-prefix values can be empty, if specified. * Each include-prefix must include a distinct portion of the object namespace. No include-prefix may be a prefix of another include-prefix. * Each exclude-prefix must exclude a distinct portion of the object namespace. No exclude-prefix may be a prefix of another exclude-prefix. * If `include_prefixes` is specified, then each exclude-prefix must start with the value of a path explicitly included by `include_prefixes`. The max size of `include_prefixes` is 1000.
    * items `string`
  * lastModifiedBefore `string`: If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" will be transferred.
  * lastModifiedSince `string`: If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. The `last_modified_since` and `last_modified_before` fields can be used together for chunked data processing. For example, consider a script that processes each day's worth of data at a time. For that you'd set each of the fields as follows: * `last_modified_since` to the start of the day * `last_modified_before` to the end of the day
  * maxTimeElapsedSinceLastModification `string`: If specified, only objects with a "last modification time" on or after `NOW` - `max_time_elapsed_since_last_modification` and objects that don't have a "last modification time" are transferred. For each TransferOperation started by this TransferJob, `NOW` refers to the start_time of the `TransferOperation`.
  * minTimeElapsedSinceLastModification `string`: If specified, only objects with a "last modification time" before `NOW` - `min_time_elapsed_since_last_modification` and objects that don't have a "last modification time" are transferred. For each TransferOperation started by this TransferJob, `NOW` refers to the start_time of the `TransferOperation`.

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Represents the transfer operation object. To request a TransferOperation object, use transferOperations.get.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `transferOperations/some/unique/name`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### PauseTransferOperationRequest
* PauseTransferOperationRequest `object`: Request passed to PauseTransferOperation.

### ResumeTransferOperationRequest
* ResumeTransferOperationRequest `object`: Request passed to ResumeTransferOperation.

### Schedule
* Schedule `object`: Transfers can be scheduled to recur or to run just once.
  * endTimeOfDay [TimeOfDay](#timeofday)
  * repeatInterval `string`: Interval between the start of each scheduled TransferOperation. If unspecified, the default value is 24 hours. This value may not be less than 1 hour.
  * scheduleEndDate [Date](#date)
  * scheduleStartDate [Date](#date)
  * startTimeOfDay [TimeOfDay](#timeofday)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### TimeOfDay
* TimeOfDay `object`: Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
  * hours `integer`: Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  * minutes `integer`: Minutes of hour of day. Must be from 0 to 59.
  * nanos `integer`: Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * seconds `integer`: Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.

### TransferCounters
* TransferCounters `object`: A collection of counters that report the progress of a transfer operation.
  * bytesCopiedToSink `string`: Bytes that are copied to the data sink.
  * bytesDeletedFromSink `string`: Bytes that are deleted from the data sink.
  * bytesDeletedFromSource `string`: Bytes that are deleted from the data source.
  * bytesFailedToDeleteFromSink `string`: Bytes that failed to be deleted from the data sink.
  * bytesFoundFromSource `string`: Bytes found in the data source that are scheduled to be transferred, excluding any that are filtered based on object conditions or skipped due to sync.
  * bytesFoundOnlyFromSink `string`: Bytes found only in the data sink that are scheduled to be deleted.
  * bytesFromSourceFailed `string`: Bytes in the data source that failed to be transferred or that failed to be deleted after being transferred.
  * bytesFromSourceSkippedBySync `string`: Bytes in the data source that are not transferred because they already exist in the data sink.
  * objectsCopiedToSink `string`: Objects that are copied to the data sink.
  * objectsDeletedFromSink `string`: Objects that are deleted from the data sink.
  * objectsDeletedFromSource `string`: Objects that are deleted from the data source.
  * objectsFailedToDeleteFromSink `string`: Objects that failed to be deleted from the data sink.
  * objectsFoundFromSource `string`: Objects found in the data source that are scheduled to be transferred, excluding any that are filtered based on object conditions or skipped due to sync.
  * objectsFoundOnlyFromSink `string`: Objects found only in the data sink that are scheduled to be deleted.
  * objectsFromSourceFailed `string`: Objects in the data source that failed to be transferred or that failed to be deleted after being transferred.
  * objectsFromSourceSkippedBySync `string`: Objects in the data source that are not transferred because they already exist in the data sink.

### TransferJob
* TransferJob `object`: This resource represents the configuration of a transfer job that runs periodically.
  * creationTime `string`: Output only. The time that the transfer job was created.
  * deletionTime `string`: Output only. The time that the transfer job was deleted.
  * description `string`: A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded.
  * lastModificationTime `string`: Output only. The time that the transfer job was last modified.
  * latestOperationName `string`: The name of the most recently started TransferOperation of this JobConfig. Present if and only if at least one TransferOperation has been created for this JobConfig.
  * name `string`: A unique name (within the transfer project) assigned when the job is created. If this field is empty in a CreateTransferJobRequest, Storage Transfer Service will assign a unique name. Otherwise, the specified name is used as the unique name for this job. If the specified name is in use by a job, the creation request fails with an ALREADY_EXISTS error. This name must start with `"transferJobs/"` prefix and end with a letter or a number, and should be no more than 128 characters. Example: `"transferJobs/[A-Za-z0-9-._~]*[A-Za-z0-9]$"` Invalid job names will fail with an INVALID_ARGUMENT error.
  * notificationConfig [NotificationConfig](#notificationconfig)
  * projectId `string`: The ID of the Google Cloud Platform Project that owns the job.
  * schedule [Schedule](#schedule)
  * status `string` (values: STATUS_UNSPECIFIED, ENABLED, DISABLED, DELETED): Status of the job. This value MUST be specified for `CreateTransferJobRequests`. **Note:** The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.
  * transferSpec [TransferSpec](#transferspec)

### TransferOperation
* TransferOperation `object`: A description of the execution of a transfer.
  * counters [TransferCounters](#transfercounters)
  * endTime `string`: End time of this transfer execution.
  * errorBreakdowns `array`: Summarizes errors encountered with sample error log entries.
    * items [ErrorSummary](#errorsummary)
  * name `string`: A globally unique ID assigned by the system.
  * notificationConfig [NotificationConfig](#notificationconfig)
  * projectId `string`: The ID of the Google Cloud Platform Project that owns the operation.
  * startTime `string`: Start time of this transfer execution.
  * status `string` (values: STATUS_UNSPECIFIED, IN_PROGRESS, PAUSED, SUCCESS, FAILED, ABORTED, QUEUED): Status of the transfer operation.
  * transferJobName `string`: The name of the transfer job that triggers this transfer operation.
  * transferSpec [TransferSpec](#transferspec)

### TransferOptions
* TransferOptions `object`: TransferOptions define the actions to be performed on objects in a transfer.
  * deleteObjectsFromSourceAfterTransfer `boolean`: Whether objects should be deleted from the source after they are transferred to the sink. **Note:** This option and delete_objects_unique_in_sink are mutually exclusive.
  * deleteObjectsUniqueInSink `boolean`: Whether objects that exist only in the sink should be deleted. **Note:** This option and delete_objects_from_source_after_transfer are mutually exclusive.
  * overwriteObjectsAlreadyExistingInSink `boolean`: When to overwrite objects that already exist in the sink. The default is that only objects that are different from the source are ovewritten. If true, all objects in the sink whose name matches an object in the source will be overwritten with the source object.

### TransferSpec
* TransferSpec `object`: Configuration for running a transfer.
  * awsS3DataSource [AwsS3Data](#awss3data)
  * azureBlobStorageDataSource [AzureBlobStorageData](#azureblobstoragedata)
  * gcsDataSink [GcsData](#gcsdata)
  * gcsDataSource [GcsData](#gcsdata)
  * httpDataSource [HttpData](#httpdata)
  * objectConditions [ObjectConditions](#objectconditions)
  * transferOptions [TransferOptions](#transferoptions)

### UpdateTransferJobRequest
* UpdateTransferJobRequest `object`: Request passed to UpdateTransferJob.
  * projectId `string`: Required. The ID of the Google Cloud Platform Console project that owns the job.
  * transferJob [TransferJob](#transferjob)
  * updateTransferJobFieldMask `string`: The field mask of the fields in `transferJob` that are to be updated in this request. Fields in `transferJob` that can be updated are: description, transfer_spec, notification_config, and status. To update the `transfer_spec` of the job, a complete transfer specification must be provided. An incomplete specification missing any required fields will be rejected with the error INVALID_ARGUMENT.


