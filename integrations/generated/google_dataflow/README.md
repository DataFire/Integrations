# @datafire/google_dataflow

Client library for Google Dataflow

## Installation and Usage
```bash
npm install --save @datafire/google_dataflow
```
```js
let google_dataflow = require('@datafire/google_dataflow').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_dataflow.projects.workerMessages({}).then(data => {
  console.log(data);
})
```

## Description

Manages Google Cloud Dataflow projects on Google Cloud Platform.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_dataflow.oauthCallback({
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
google_dataflow.oauthRefresh(null, context)
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

### projects.workerMessages
Send a worker_message to the service.


```js
google_dataflow.projects.workerMessages({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project to send the WorkerMessages to.
  * body [SendWorkerMessagesRequest](#sendworkermessagesrequest)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [SendWorkerMessagesResponse](#sendworkermessagesresponse)

### projects.jobs.list
List the jobs of a project in a given region.


```js
google_dataflow.projects.jobs.list({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project which owns the jobs.
  * filter `string` (values: UNKNOWN, ALL, TERMINATED, ACTIVE): The kind of filter to use.
  * location `string`: The location that contains this job.
  * pageToken `string`: Set this to the 'next_page_token' field of a previous response
  * pageSize `integer`: If there are many jobs, limit response to at most this many.
  * view `string` (values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION): Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [ListJobsResponse](#listjobsresponse)

### projects.jobs.create
Creates a Cloud Dataflow job.


```js
google_dataflow.projects.jobs.create({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the job belongs to.
  * replaceJobId `string`: Deprecated. This field is now in the Job message.
  * view `string` (values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION): The level of information requested in response.
  * location `string`: The location that contains this job.
  * body [Job](#job)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [Job](#job)

### projects.jobs.get
Gets the state of the specified Cloud Dataflow job.


```js
google_dataflow.projects.jobs.get({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the job belongs to.
  * jobId **required** `string`: The job ID.
  * view `string` (values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION): The level of information requested in response.
  * location `string`: The location that contains this job.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [Job](#job)

### projects.jobs.update
Updates the state of an existing Cloud Dataflow job.


```js
google_dataflow.projects.jobs.update({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the job belongs to.
  * jobId **required** `string`: The job ID.
  * location `string`: The location that contains this job.
  * body [Job](#job)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [Job](#job)

### projects.jobs.debug.getConfig
Get encoded debug configuration for component. Not cacheable.


```js
google_dataflow.projects.jobs.debug.getConfig({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * jobId **required** `string`: The job id.
  * body [GetDebugConfigRequest](#getdebugconfigrequest)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [GetDebugConfigResponse](#getdebugconfigresponse)

### projects.jobs.debug.sendCapture
Send encoded debug capture data for component.


```js
google_dataflow.projects.jobs.debug.sendCapture({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * jobId **required** `string`: The job id.
  * body [SendDebugCaptureRequest](#senddebugcapturerequest)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [SendDebugCaptureResponse](#senddebugcaptureresponse)

### projects.jobs.messages.list
Request the job status.


```js
google_dataflow.projects.jobs.messages.list({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A project id.
  * jobId **required** `string`: The job to get messages about.
  * location `string`: The location which contains the job specified by job_id.
  * endTime `string`: Return only messages with timestamps < end_time. The default is now
  * pageToken `string`: If supplied, this should be the value of next_page_token returned
  * startTime `string`: If specified, return only messages with timestamps >= start_time.
  * pageSize `integer`: If specified, determines the maximum number of messages to
  * minimumImportance `string` (values: JOB_MESSAGE_IMPORTANCE_UNKNOWN, JOB_MESSAGE_DEBUG, JOB_MESSAGE_DETAILED, JOB_MESSAGE_BASIC, JOB_MESSAGE_WARNING, JOB_MESSAGE_ERROR): Filter to only get messages with importance >= level
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [ListJobMessagesResponse](#listjobmessagesresponse)

### projects.jobs.getMetrics
Request the job status.


```js
google_dataflow.projects.jobs.getMetrics({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A project id.
  * jobId **required** `string`: The job to get messages for.
  * location `string`: The location which contains the job specified by job_id.
  * startTime `string`: Return only metric data that has changed since this time.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [JobMetrics](#jobmetrics)

### projects.jobs.workItems.lease
Leases a dataflow WorkItem to run.


```js
google_dataflow.projects.jobs.workItems.lease({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Identifies the project this worker belongs to.
  * jobId **required** `string`: Identifies the workflow job this worker belongs to.
  * body [LeaseWorkItemRequest](#leaseworkitemrequest)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [LeaseWorkItemResponse](#leaseworkitemresponse)

### projects.jobs.workItems.reportStatus
Reports the status of dataflow WorkItems leased by a worker.


```js
google_dataflow.projects.jobs.workItems.reportStatus({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project which owns the WorkItem's job.
  * jobId **required** `string`: The job which the WorkItem is part of.
  * body [ReportWorkItemStatusRequest](#reportworkitemstatusrequest)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [ReportWorkItemStatusResponse](#reportworkitemstatusresponse)

### projects.jobs.aggregated
List the jobs of a project across all regions.


```js
google_dataflow.projects.jobs.aggregated({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * filter `string` (values: UNKNOWN, ALL, TERMINATED, ACTIVE): The kind of filter to use.
  * location `string`: The location that contains this job.
  * pageSize `integer`: If there are many jobs, limit response to at most this many.
  * pageToken `string`: Set this to the 'next_page_token' field of a previous response
  * projectId **required** `string`: The project which owns the jobs.
  * view `string` (values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION): Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
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
* output [ListJobsResponse](#listjobsresponse)

### projects.locations.workerMessages
Send a worker_message to the service.


```js
google_dataflow.projects.locations.workerMessages({
  "location": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [SendWorkerMessagesRequest](#sendworkermessagesrequest)
  * location **required** `string`: The location which contains the job
  * projectId **required** `string`: The project to send the WorkerMessages to.
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
* output [SendWorkerMessagesResponse](#sendworkermessagesresponse)

### projects.locations.jobs.list
List the jobs of a project in a given region.


```js
google_dataflow.projects.locations.jobs.list({
  "projectId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project which owns the jobs.
  * location **required** `string`: The location that contains this job.
  * filter `string` (values: UNKNOWN, ALL, TERMINATED, ACTIVE): The kind of filter to use.
  * pageToken `string`: Set this to the 'next_page_token' field of a previous response
  * pageSize `integer`: If there are many jobs, limit response to at most this many.
  * view `string` (values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION): Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [ListJobsResponse](#listjobsresponse)

### projects.locations.jobs.create
Creates a Cloud Dataflow job.


```js
google_dataflow.projects.locations.jobs.create({
  "projectId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the job belongs to.
  * location **required** `string`: The location that contains this job.
  * replaceJobId `string`: Deprecated. This field is now in the Job message.
  * view `string` (values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION): The level of information requested in response.
  * body [Job](#job)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [Job](#job)

### projects.locations.jobs.get
Gets the state of the specified Cloud Dataflow job.


```js
google_dataflow.projects.locations.jobs.get({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the job belongs to.
  * location **required** `string`: The location that contains this job.
  * jobId **required** `string`: The job ID.
  * view `string` (values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION): The level of information requested in response.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [Job](#job)

### projects.locations.jobs.update
Updates the state of an existing Cloud Dataflow job.


```js
google_dataflow.projects.locations.jobs.update({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the job belongs to.
  * location **required** `string`: The location that contains this job.
  * jobId **required** `string`: The job ID.
  * body [Job](#job)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [Job](#job)

### projects.locations.jobs.debug.getConfig
Get encoded debug configuration for component. Not cacheable.


```js
google_dataflow.projects.locations.jobs.debug.getConfig({
  "jobId": "",
  "location": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [GetDebugConfigRequest](#getdebugconfigrequest)
  * jobId **required** `string`: The job id.
  * location **required** `string`: The location which contains the job specified by job_id.
  * projectId **required** `string`: The project id.
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
* output [GetDebugConfigResponse](#getdebugconfigresponse)

### projects.locations.jobs.debug.sendCapture
Send encoded debug capture data for component.


```js
google_dataflow.projects.locations.jobs.debug.sendCapture({
  "jobId": "",
  "location": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [SendDebugCaptureRequest](#senddebugcapturerequest)
  * jobId **required** `string`: The job id.
  * location **required** `string`: The location which contains the job specified by job_id.
  * projectId **required** `string`: The project id.
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
* output [SendDebugCaptureResponse](#senddebugcaptureresponse)

### projects.locations.jobs.messages.list
Request the job status.


```js
google_dataflow.projects.locations.jobs.messages.list({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A project id.
  * location **required** `string`: The location which contains the job specified by job_id.
  * jobId **required** `string`: The job to get messages about.
  * endTime `string`: Return only messages with timestamps < end_time. The default is now
  * startTime `string`: If specified, return only messages with timestamps >= start_time.
  * pageToken `string`: If supplied, this should be the value of next_page_token returned
  * pageSize `integer`: If specified, determines the maximum number of messages to
  * minimumImportance `string` (values: JOB_MESSAGE_IMPORTANCE_UNKNOWN, JOB_MESSAGE_DEBUG, JOB_MESSAGE_DETAILED, JOB_MESSAGE_BASIC, JOB_MESSAGE_WARNING, JOB_MESSAGE_ERROR): Filter to only get messages with importance >= level
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [ListJobMessagesResponse](#listjobmessagesresponse)

### projects.locations.jobs.getMetrics
Request the job status.


```js
google_dataflow.projects.locations.jobs.getMetrics({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A project id.
  * location **required** `string`: The location which contains the job specified by job_id.
  * jobId **required** `string`: The job to get messages for.
  * startTime `string`: Return only metric data that has changed since this time.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [JobMetrics](#jobmetrics)

### projects.locations.jobs.workItems.lease
Leases a dataflow WorkItem to run.


```js
google_dataflow.projects.locations.jobs.workItems.lease({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Identifies the project this worker belongs to.
  * location **required** `string`: The location which contains the WorkItem's job.
  * jobId **required** `string`: Identifies the workflow job this worker belongs to.
  * body [LeaseWorkItemRequest](#leaseworkitemrequest)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [LeaseWorkItemResponse](#leaseworkitemresponse)

### projects.locations.jobs.workItems.reportStatus
Reports the status of dataflow WorkItems leased by a worker.


```js
google_dataflow.projects.locations.jobs.workItems.reportStatus({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project which owns the WorkItem's job.
  * location **required** `string`: The location which contains the WorkItem's job.
  * jobId **required** `string`: The job which the WorkItem is part of.
  * body [ReportWorkItemStatusRequest](#reportworkitemstatusrequest)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [ReportWorkItemStatusResponse](#reportworkitemstatusresponse)

### projects.locations.templates.create
Creates a Cloud Dataflow job from a template.


```js
google_dataflow.projects.locations.templates.create({
  "location": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [CreateJobFromTemplateRequest](#createjobfromtemplaterequest)
  * location **required** `string`: The location to which to direct the request.
  * projectId **required** `string`: Required. The ID of the Cloud Platform project that the job belongs to.
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
* output [Job](#job)

### projects.locations.templates.get
Get the template associated with a template.


```js
google_dataflow.projects.locations.templates.get({
  "location": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * gcsPath `string`: Required. A Cloud Storage path to the template from which to
  * location **required** `string`: The location to which to direct the request.
  * projectId **required** `string`: Required. The ID of the Cloud Platform project that the job belongs to.
  * view `string` (values: METADATA_ONLY): The view to retrieve. Defaults to METADATA_ONLY.
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
* output [GetTemplateResponse](#gettemplateresponse)

### projects.locations.templates.launch
Launch a template.


```js
google_dataflow.projects.locations.templates.launch({
  "location": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [LaunchTemplateParameters](#launchtemplateparameters)
  * gcsPath `string`: Required. A Cloud Storage path to the template from which to create
  * location **required** `string`: The location to which to direct the request.
  * projectId **required** `string`: Required. The ID of the Cloud Platform project that the job belongs to.
  * validateOnly `boolean`: If true, the request is validated but not actually executed.
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
* output [LaunchTemplateResponse](#launchtemplateresponse)

### projects.templates.create
Creates a Cloud Dataflow job from a template.


```js
google_dataflow.projects.templates.create({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Cloud Platform project that the job belongs to.
  * body [CreateJobFromTemplateRequest](#createjobfromtemplaterequest)
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [Job](#job)

### projects.templates.get
Get the template associated with a template.


```js
google_dataflow.projects.templates.get({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * gcsPath `string`: Required. A Cloud Storage path to the template from which to
  * location `string`: The location to which to direct the request.
  * projectId **required** `string`: Required. The ID of the Cloud Platform project that the job belongs to.
  * view `string` (values: METADATA_ONLY): The view to retrieve. Defaults to METADATA_ONLY.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [GetTemplateResponse](#gettemplateresponse)

### projects.templates.launch
Launch a template.


```js
google_dataflow.projects.templates.launch({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [LaunchTemplateParameters](#launchtemplateparameters)
  * gcsPath `string`: Required. A Cloud Storage path to the template from which to create
  * location `string`: The location to which to direct the request.
  * projectId **required** `string`: Required. The ID of the Cloud Platform project that the job belongs to.
  * validateOnly `boolean`: If true, the request is validated but not actually executed.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * bearer_token `string`: OAuth bearer token.
  * oauth_token `string`: OAuth 2.0 token for the current user.

#### Output
* output [LaunchTemplateResponse](#launchtemplateresponse)



## Definitions

### ApproximateProgress
* ApproximateProgress `object`: Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest.
  * percentComplete `number`: Obsolete.
  * position [Position](#position)
  * remainingTime `string`: Obsolete.

### ApproximateReportedProgress
* ApproximateReportedProgress `object`: A progress measurement of a WorkItem by a worker.
  * consumedParallelism [ReportedParallelism](#reportedparallelism)
  * fractionConsumed `number`: Completion as fraction of the input consumed, from 0.0 (beginning, nothing
  * position [Position](#position)
  * remainingParallelism [ReportedParallelism](#reportedparallelism)

### ApproximateSplitRequest
* ApproximateSplitRequest `object`: A suggestion by the service to the worker to dynamically split the WorkItem.
  * fractionConsumed `number`: A fraction at which to split the work item, from 0.0 (beginning of the
  * position [Position](#position)

### AutoscalingEvent
* AutoscalingEvent `object`: A structured message reporting an autoscaling decision made by the Dataflow
  * currentNumWorkers `string`: The current number of workers the job has.
  * description [StructuredMessage](#structuredmessage)
  * eventType `string` (values: TYPE_UNKNOWN, TARGET_NUM_WORKERS_CHANGED, CURRENT_NUM_WORKERS_CHANGED, ACTUATION_FAILURE, NO_CHANGE): The type of autoscaling event to report.
  * targetNumWorkers `string`: The target number of workers the worker pool wants to resize to use.
  * time `string`: The time this event was emitted to indicate a new target or current

### AutoscalingSettings
* AutoscalingSettings `object`: Settings for WorkerPool autoscaling.
  * algorithm `string` (values: AUTOSCALING_ALGORITHM_UNKNOWN, AUTOSCALING_ALGORITHM_NONE, AUTOSCALING_ALGORITHM_BASIC): The algorithm to use for autoscaling.
  * maxNumWorkers `integer`: The maximum number of workers to cap scaling at.

### CPUTime
* CPUTime `object`: Modeled after information exposed by /proc/stat.
  * rate `number`: Average CPU utilization rate (% non-idle cpu / second) since previous
  * timestamp `string`: Timestamp of the measurement.
  * totalMs `string`: Total active CPU time across all cores (ie., non-idle) in milliseconds

### ComponentSource
* ComponentSource `object`: Description of an interstitial value between transforms in an execution
  * name `string`: Dataflow service generated name for this source.
  * originalTransformOrCollection `string`: User name for the original user transform or collection with which this
  * userName `string`: Human-readable name for this transform; may be user or system generated.

### ComponentTransform
* ComponentTransform `object`: Description of a transform executed as part of an execution stage.
  * name `string`: Dataflow service generated name for this source.
  * originalTransform `string`: User name for the original user transform with which this transform is
  * userName `string`: Human-readable name for this transform; may be user or system generated.

### ComputationTopology
* ComputationTopology `object`: All configuration data for a particular Computation.
  * computationId `string`: The ID of the computation.
  * inputs `array`: The inputs to the computation.
    * items [StreamLocation](#streamlocation)
  * keyRanges `array`: The key ranges processed by the computation.
    * items [KeyRangeLocation](#keyrangelocation)
  * outputs `array`: The outputs from the computation.
    * items [StreamLocation](#streamlocation)
  * stateFamilies `array`: The state family values.
    * items [StateFamilyConfig](#statefamilyconfig)
  * systemStageName `string`: The system stage name.

### ConcatPosition
* ConcatPosition `object`: A position that encapsulates an inner position and an index for the inner
  * index `integer`: Index of the inner source.
  * position [Position](#position)

### CounterMetadata
* CounterMetadata `object`: CounterMetadata includes all static non-name non-value counter attributes.
  * description `string`: Human-readable description of the counter semantics.
  * kind `string` (values: INVALID, SUM, MAX, MIN, MEAN, OR, AND, SET, DISTRIBUTION): Counter aggregation kind.
  * otherUnits `string`: A string referring to the unit type.
  * standardUnits `string` (values: BYTES, BYTES_PER_SEC, MILLISECONDS, MICROSECONDS, NANOSECONDS, TIMESTAMP_MSEC, TIMESTAMP_USEC, TIMESTAMP_NSEC): System defined Units, see above enum.

### CounterStructuredName
* CounterStructuredName `object`: Identifies a counter within a per-job namespace. Counters whose structured
  * componentStepName `string`: Name of the optimized step being executed by the workers.
  * executionStepName `string`: Name of the stage. An execution step contains multiple component steps.
  * name `string`: Counter name. Not necessarily globally-unique, but unique within the
  * origin `string` (values: SYSTEM, USER): One of the standard Origins defined above.
  * originNamespace `string`: A string containing a more specific namespace of the counter's origin.
  * originalRequestingStepName `string`: The step name requesting an operation, such as GBK.
  * originalStepName `string`: System generated name of the original step in the user's graph, before
  * portion `string` (values: ALL, KEY, VALUE): Portion of this counter, either key or value.
  * sideInput [SideInputId](#sideinputid)
  * workerId `string`: ID of a particular worker.

### CounterStructuredNameAndMetadata
* CounterStructuredNameAndMetadata `object`: A single message which encapsulates structured name and metadata for a given
  * metadata [CounterMetadata](#countermetadata)
  * name [CounterStructuredName](#counterstructuredname)

### CounterUpdate
* CounterUpdate `object`: An update to a Counter sent from a worker.
  * boolean `boolean`: Boolean value for And, Or.
  * cumulative `boolean`: True if this counter is reported as the total cumulative aggregate
  * distribution [DistributionUpdate](#distributionupdate)
  * floatingPoint `number`: Floating point value for Sum, Max, Min.
  * floatingPointList [FloatingPointList](#floatingpointlist)
  * floatingPointMean [FloatingPointMean](#floatingpointmean)
  * integer [SplitInt64](#splitint64)
  * integerList [IntegerList](#integerlist)
  * integerMean [IntegerMean](#integermean)
  * nameAndKind [NameAndKind](#nameandkind)
  * shortId `string`: The service-generated short identifier for this counter.
  * stringList [StringList](#stringlist)
  * structuredNameAndMetadata [CounterStructuredNameAndMetadata](#counterstructurednameandmetadata)

### CreateJobFromTemplateRequest
* CreateJobFromTemplateRequest `object`: A request to create a Cloud Dataflow job from a template.
  * environment [RuntimeEnvironment](#runtimeenvironment)
  * gcsPath `string`: Required. A Cloud Storage path to the template from which to
  * jobName `string`: Required. The job name to use for the created job.
  * location `string`: The location to which to direct the request.
  * parameters `object`: The runtime parameters to pass to the job.

### CustomSourceLocation
* CustomSourceLocation `object`: Identifies the location of a custom souce.
  * stateful `boolean`: Whether this source is stateful.

### DataDiskAssignment
* DataDiskAssignment `object`: Data disk assignment for a given VM instance.
  * dataDisks `array`: Mounted data disks. The order is important a data disk's 0-based index in
    * items `string`
  * vmInstance `string`: VM instance name the data disks mounted to, for example

### DerivedSource
* DerivedSource `object`: Specification of one of the bundles produced as a result of splitting
  * derivationMode `string` (values: SOURCE_DERIVATION_MODE_UNKNOWN, SOURCE_DERIVATION_MODE_INDEPENDENT, SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT, SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT): What source to base the produced source on (if any).
  * source [Source](#source)

### Disk
* Disk `object`: Describes the data disk used by a workflow job.
  * diskType `string`: Disk storage type, as defined by Google Compute Engine.  This
  * mountPoint `string`: Directory in a VM where disk is mounted.
  * sizeGb `integer`: Size of disk in GB.  If zero or unspecified, the service will

### DisplayData
* DisplayData `object`: Data provided with a pipeline or transform to provide descriptive info.
  * boolValue `boolean`: Contains value if the data is of a boolean type.
  * durationValue `string`: Contains value if the data is of duration type.
  * floatValue `number`: Contains value if the data is of float type.
  * int64Value `string`: Contains value if the data is of int64 type.
  * javaClassValue `string`: Contains value if the data is of java class type.
  * key `string`: The key identifying the display data.
  * label `string`: An optional label to display in a dax UI for the element.
  * namespace `string`: The namespace for the key. This is usually a class name or programming
  * shortStrValue `string`: A possible additional shorter value to display.
  * strValue `string`: Contains value if the data is of string type.
  * timestampValue `string`: Contains value if the data is of timestamp type.
  * url `string`: An optional full URL.

### DistributionUpdate
* DistributionUpdate `object`: A metric value representing a distribution.
  * count [SplitInt64](#splitint64)
  * histogram [Histogram](#histogram)
  * max [SplitInt64](#splitint64)
  * min [SplitInt64](#splitint64)
  * sum [SplitInt64](#splitint64)
  * sumOfSquares `number`: Use a double since the sum of squares is likely to overflow int64.

### DynamicSourceSplit
* DynamicSourceSplit `object`: When a task splits using WorkItemStatus.dynamic_source_split, this
  * primary [DerivedSource](#derivedsource)
  * residual [DerivedSource](#derivedsource)

### Environment
* Environment `object`: Describes the environment in which a Dataflow Job runs.
  * clusterManagerApiService `string`: The type of cluster manager API to use.  If unknown or
  * dataset `string`: The dataset for the current project where various workflow
  * experiments `array`: The list of experiments to enable.
    * items `string`
  * internalExperiments `object`: Experimental settings.
  * sdkPipelineOptions `object`: The Cloud Dataflow SDK pipeline options specified by the user. These
  * serviceAccountEmail `string`: Identity to run virtual machines as. Defaults to the default account.
  * tempStoragePrefix `string`: The prefix of the resources the system should use for temporary
  * userAgent `object`: A description of the process that generated the request.
  * version `object`: A structure describing which components and their versions of the service
  * workerPools `array`: The worker pools. At least one "harness" worker pool must be
    * items [WorkerPool](#workerpool)

### ExecutionStageState
* ExecutionStageState `object`: A message describing the state of a particular execution stage.
  * currentStateTime `string`: The time at which the stage transitioned to this state.
  * executionStageName `string`: The name of the execution stage.
  * executionStageState `string` (values: JOB_STATE_UNKNOWN, JOB_STATE_STOPPED, JOB_STATE_RUNNING, JOB_STATE_DONE, JOB_STATE_FAILED, JOB_STATE_CANCELLED, JOB_STATE_UPDATED, JOB_STATE_DRAINING, JOB_STATE_DRAINED, JOB_STATE_PENDING, JOB_STATE_CANCELLING): Executions stage states allow the same set of values as JobState.

### ExecutionStageSummary
* ExecutionStageSummary `object`: Description of the composing transforms, names/ids, and input/outputs of a
  * componentSource `array`: Collections produced and consumed by component transforms of this stage.
    * items [ComponentSource](#componentsource)
  * componentTransform `array`: Transforms that comprise this execution stage.
    * items [ComponentTransform](#componenttransform)
  * id `string`: Dataflow service generated id for this stage.
  * inputSource `array`: Input sources for this stage.
    * items [StageSource](#stagesource)
  * kind `string` (values: UNKNOWN_KIND, PAR_DO_KIND, GROUP_BY_KEY_KIND, FLATTEN_KIND, READ_KIND, WRITE_KIND, CONSTANT_KIND, SINGLETON_KIND, SHUFFLE_KIND): Type of tranform this stage is executing.
  * name `string`: Dataflow service generated name for this stage.
  * outputSource `array`: Output sources for this stage.
    * items [StageSource](#stagesource)

### FailedLocation
* FailedLocation `object`: Indicates which location failed to respond to a request for data.
  * name `string`: The name of the failed location.

### FlattenInstruction
* FlattenInstruction `object`: An instruction that copies its inputs (zero or more) to its (single) output.
  * inputs `array`: Describes the inputs to the flatten instruction.
    * items [InstructionInput](#instructioninput)

### FloatingPointList
* FloatingPointList `object`: A metric value representing a list of floating point numbers.
  * elements `array`: Elements of the list.
    * items `number`

### FloatingPointMean
* FloatingPointMean `object`: A representation of a floating point mean metric contribution.
  * count [SplitInt64](#splitint64)
  * sum `number`: The sum of all values being aggregated.

### GetDebugConfigRequest
* GetDebugConfigRequest `object`: Request to get updated debug configuration for component.
  * componentId `string`: The internal component id for which debug configuration is
  * location `string`: The location which contains the job specified by job_id.
  * workerId `string`: The worker id, i.e., VM hostname.

### GetDebugConfigResponse
* GetDebugConfigResponse `object`: Response to a get debug configuration request.
  * config `string`: The encoded debug configuration for the requested component.

### GetTemplateResponse
* GetTemplateResponse `object`: The response to a GetTemplate request.
  * metadata [TemplateMetadata](#templatemetadata)
  * status [Status](#status)

### Histogram
* Histogram `object`: Histogram of value counts for a distribution.
  * bucketCounts `array`: Counts of values in each bucket. For efficiency, prefix and trailing
    * items `string`
  * firstBucketOffset `integer`: Starting index of first stored bucket. The non-inclusive upper-bound of

### InstructionInput
* InstructionInput `object`: An input of an instruction, as a reference to an output of a
  * outputNum `integer`: The output index (origin zero) within the producer.
  * producerInstructionIndex `integer`: The index (origin zero) of the parallel instruction that produces

### InstructionOutput
* InstructionOutput `object`: An output of an instruction.
  * codec `object`: The codec to use to encode data being written via this output.
  * name `string`: The user-provided name of this output.
  * onlyCountKeyBytes `boolean`: For system-generated byte and mean byte metrics, certain instructions
  * onlyCountValueBytes `boolean`: For system-generated byte and mean byte metrics, certain instructions
  * originalName `string`: System-defined name for this output in the original workflow graph.
  * systemName `string`: System-defined name of this output.

### IntegerList
* IntegerList `object`: A metric value representing a list of integers.
  * elements `array`: Elements of the list.
    * items [SplitInt64](#splitint64)

### IntegerMean
* IntegerMean `object`: A representation of an integer mean metric contribution.
  * count [SplitInt64](#splitint64)
  * sum [SplitInt64](#splitint64)

### Job
* Job `object`: Defines a job to be run by the Cloud Dataflow service.
  * clientRequestId `string`: The client's unique identifier of the job, re-used across retried attempts.
  * createTime `string`: The timestamp when the job was initially created. Immutable and set by the
  * currentState `string` (values: JOB_STATE_UNKNOWN, JOB_STATE_STOPPED, JOB_STATE_RUNNING, JOB_STATE_DONE, JOB_STATE_FAILED, JOB_STATE_CANCELLED, JOB_STATE_UPDATED, JOB_STATE_DRAINING, JOB_STATE_DRAINED, JOB_STATE_PENDING, JOB_STATE_CANCELLING): The current state of the job.
  * currentStateTime `string`: The timestamp associated with the current state.
  * environment [Environment](#environment)
  * executionInfo [JobExecutionInfo](#jobexecutioninfo)
  * id `string`: The unique ID of this job.
  * labels `object`: User-defined labels for this job.
  * location `string`: The location that contains this job.
  * name `string`: The user-specified Cloud Dataflow job name.
  * pipelineDescription [PipelineDescription](#pipelinedescription)
  * projectId `string`: The ID of the Cloud Platform project that the job belongs to.
  * replaceJobId `string`: If this job is an update of an existing job, this field is the job ID
  * replacedByJobId `string`: If another job is an update of this job (and thus, this job is in
  * requestedState `string` (values: JOB_STATE_UNKNOWN, JOB_STATE_STOPPED, JOB_STATE_RUNNING, JOB_STATE_DONE, JOB_STATE_FAILED, JOB_STATE_CANCELLED, JOB_STATE_UPDATED, JOB_STATE_DRAINING, JOB_STATE_DRAINED, JOB_STATE_PENDING, JOB_STATE_CANCELLING): The job's requested state.
  * stageStates `array`: This field may be mutated by the Cloud Dataflow service;
    * items [ExecutionStageState](#executionstagestate)
  * steps `array`: The top-level steps that constitute the entire job.
    * items [Step](#step)
  * tempFiles `array`: A set of files the system should be aware of that are used
    * items `string`
  * transformNameMapping `object`: The map of transform name prefixes of the job to be replaced to the
  * type `string` (values: JOB_TYPE_UNKNOWN, JOB_TYPE_BATCH, JOB_TYPE_STREAMING): The type of Cloud Dataflow job.

### JobExecutionInfo
* JobExecutionInfo `object`: Additional information about how a Cloud Dataflow job will be executed that
  * stages `object`: A mapping from each stage to the information about that stage.

### JobExecutionStageInfo
* JobExecutionStageInfo `object`: Contains information about how a particular
  * stepName `array`: The steps associated with the execution stage.
    * items `string`

### JobMessage
* JobMessage `object`: A particular message pertaining to a Dataflow job.
  * id `string`: Deprecated.
  * messageImportance `string` (values: JOB_MESSAGE_IMPORTANCE_UNKNOWN, JOB_MESSAGE_DEBUG, JOB_MESSAGE_DETAILED, JOB_MESSAGE_BASIC, JOB_MESSAGE_WARNING, JOB_MESSAGE_ERROR): Importance level of the message.
  * messageText `string`: The text of the message.
  * time `string`: The timestamp of the message.

### JobMetrics
* JobMetrics `object`: JobMetrics contains a collection of metrics descibing the detailed progress
  * metricTime `string`: Timestamp as of which metric values are current.
  * metrics `array`: All metrics for this job.
    * items [MetricUpdate](#metricupdate)

### KeyRangeDataDiskAssignment
* KeyRangeDataDiskAssignment `object`: Data disk assignment information for a specific key-range of a sharded
  * dataDisk `string`: The name of the data disk where data for this range is stored.
  * end `string`: The end (exclusive) of the key range.
  * start `string`: The start (inclusive) of the key range.

### KeyRangeLocation
* KeyRangeLocation `object`: Location information for a specific key-range of a sharded computation.
  * dataDisk `string`: The name of the data disk where data for this range is stored.
  * deliveryEndpoint `string`: The physical location of this range assignment to be used for
  * deprecatedPersistentDirectory `string`: DEPRECATED. The location of the persistent state for this range, as a
  * end `string`: The end (exclusive) of the key range.
  * start `string`: The start (inclusive) of the key range.

### LaunchTemplateParameters
* LaunchTemplateParameters `object`: Parameters to provide to the template being launched.
  * environment [RuntimeEnvironment](#runtimeenvironment)
  * jobName `string`: Required. The job name to use for the created job.
  * parameters `object`: The runtime parameters to pass to the job.

### LaunchTemplateResponse
* LaunchTemplateResponse `object`: Response to the request to launch a template.
  * job [Job](#job)

### LeaseWorkItemRequest
* LeaseWorkItemRequest `object`: Request to lease WorkItems.
  * currentWorkerTime `string`: The current timestamp at the worker.
  * location `string`: The location which contains the WorkItem's job.
  * requestedLeaseDuration `string`: The initial lease period.
  * workItemTypes `array`: Filter for WorkItem type.
    * items `string`
  * workerCapabilities `array`: Worker capabilities. WorkItems might be limited to workers with specific
    * items `string`
  * workerId `string`: Identifies the worker leasing work -- typically the ID of the

### LeaseWorkItemResponse
* LeaseWorkItemResponse `object`: Response to a request to lease WorkItems.
  * workItems `array`: A list of the leased WorkItems.
    * items [WorkItem](#workitem)

### ListJobMessagesResponse
* ListJobMessagesResponse `object`: Response to a request to list job messages.
  * autoscalingEvents `array`: Autoscaling events in ascending timestamp order.
    * items [AutoscalingEvent](#autoscalingevent)
  * jobMessages `array`: Messages in ascending timestamp order.
    * items [JobMessage](#jobmessage)
  * nextPageToken `string`: The token to obtain the next page of results if there are more.

### ListJobsResponse
* ListJobsResponse `object`: Response to a request to list Cloud Dataflow jobs.  This may be a partial
  * failedLocation `array`: Zero or more messages describing locations that failed to respond.
    * items [FailedLocation](#failedlocation)
  * jobs `array`: A subset of the requested job information.
    * items [Job](#job)
  * nextPageToken `string`: Set if there may be more results than fit in this response.

### MapTask
* MapTask `object`: MapTask consists of an ordered set of instructions, each of which
  * instructions `array`: The instructions in the MapTask.
    * items [ParallelInstruction](#parallelinstruction)
  * stageName `string`: System-defined name of the stage containing this MapTask.
  * systemName `string`: System-defined name of this MapTask.

### MetricShortId
* MetricShortId `object`: The metric short id is returned to the user alongside an offset into
  * metricIndex `integer`: The index of the corresponding metric in
  * shortId `string`: The service-generated short identifier for the metric.

### MetricStructuredName
* MetricStructuredName `object`: Identifies a metric, by describing the source which generated the
  * context `object`: Zero or more labeled fields which identify the part of the job this
  * name `string`: Worker-defined metric name.
  * origin `string`: Origin (namespace) of metric name. May be blank for user-define metrics;

### MetricUpdate
* MetricUpdate `object`: Describes the state of a metric.
  * cumulative `boolean`: True if this metric is reported as the total cumulative aggregate
  * kind `string`: Metric aggregation kind.  The possible metric aggregation kinds are
  * name [MetricStructuredName](#metricstructuredname)
  * updateTime `string`: Timestamp associated with the metric value. Optional when workers are

### MountedDataDisk
* MountedDataDisk `object`: Describes mounted data disk.
  * dataDisk `string`: The name of the data disk.

### MultiOutputInfo
* MultiOutputInfo `object`: Information about an output of a multi-output DoFn.
  * tag `string`: The id of the tag the user code will emit to this output by; this

### NameAndKind
* NameAndKind `object`: Basic metadata about a counter.
  * kind `string` (values: INVALID, SUM, MAX, MIN, MEAN, OR, AND, SET, DISTRIBUTION): Counter aggregation kind.
  * name `string`: Name of the counter.

### Package
* Package `object`: The packages that must be installed in order for a worker to run the
  * location `string`: The resource to read the package from. The supported resource type is:
  * name `string`: The name of the package.

### ParDoInstruction
* ParDoInstruction `object`: An instruction that does a ParDo operation.
  * input [InstructionInput](#instructioninput)
  * multiOutputInfos `array`: Information about each of the outputs, if user_fn is a  MultiDoFn.
    * items [MultiOutputInfo](#multioutputinfo)
  * numOutputs `integer`: The number of outputs.
  * sideInputs `array`: Zero or more side inputs.
    * items [SideInputInfo](#sideinputinfo)
  * userFn `object`: The user function to invoke.

### ParallelInstruction
* ParallelInstruction `object`: Describes a particular operation comprising a MapTask.
  * flatten [FlattenInstruction](#flatteninstruction)
  * name `string`: User-provided name of this operation.
  * originalName `string`: System-defined name for the operation in the original workflow graph.
  * outputs `array`: Describes the outputs of the instruction.
    * items [InstructionOutput](#instructionoutput)
  * parDo [ParDoInstruction](#pardoinstruction)
  * partialGroupByKey [PartialGroupByKeyInstruction](#partialgroupbykeyinstruction)
  * read [ReadInstruction](#readinstruction)
  * systemName `string`: System-defined name of this operation.
  * write [WriteInstruction](#writeinstruction)

### Parameter
* Parameter `object`: Structured data associated with this message.
  * key `string`: Key or name for this parameter.

### ParameterMetadata
* ParameterMetadata `object`: Metadata for a specific parameter.
  * helpText `string`: Required. The help text to display for the parameter.
  * isOptional `boolean`: Optional. Whether the parameter is optional. Defaults to false.
  * label `string`: Required. The label to display for the parameter.
  * name `string`: Required. The name of the parameter.
  * regexes `array`: Optional. Regexes that the parameter must match.
    * items `string`

### PartialGroupByKeyInstruction
* PartialGroupByKeyInstruction `object`: An instruction that does a partial group-by-key.
  * input [InstructionInput](#instructioninput)
  * inputElementCodec `object`: The codec to use for interpreting an element in the input PTable.
  * originalCombineValuesInputStoreName `string`: If this instruction includes a combining function this is the name of the
  * originalCombineValuesStepName `string`: If this instruction includes a combining function, this is the name of the
  * sideInputs `array`: Zero or more side inputs.
    * items [SideInputInfo](#sideinputinfo)
  * valueCombiningFn `object`: The value combining function to invoke.

### PipelineDescription
* PipelineDescription `object`: A descriptive representation of submitted pipeline as well as the executed
  * displayData `array`: Pipeline level display data.
    * items [DisplayData](#displaydata)
  * executionPipelineStage `array`: Description of each stage of execution of the pipeline.
    * items [ExecutionStageSummary](#executionstagesummary)
  * originalPipelineTransform `array`: Description of each transform in the pipeline and collections between them.
    * items [TransformSummary](#transformsummary)

### Position
* Position `object`: Position defines a position within a collection of data.  The value
  * byteOffset `string`: Position is a byte offset.
  * concatPosition [ConcatPosition](#concatposition)
  * end `boolean`: Position is past all other positions. Also useful for the end
  * key `string`: Position is a string key, ordered lexicographically.
  * recordIndex `string`: Position is a record index.
  * shufflePosition `string`: CloudPosition is a base64 encoded BatchShufflePosition (with FIXED

### PubsubLocation
* PubsubLocation `object`: Identifies a pubsub location to use for transferring data into or
  * dropLateData `boolean`: Indicates whether the pipeline allows late-arriving data.
  * idLabel `string`: If set, contains a pubsub label from which to extract record ids.
  * subscription `string`: A pubsub subscription, in the form of
  * timestampLabel `string`: If set, contains a pubsub label from which to extract record timestamps.
  * topic `string`: A pubsub topic, in the form of
  * trackingSubscription `string`: If set, specifies the pubsub subscription that will be used for tracking
  * withAttributes `boolean`: If true, then the client has requested to get pubsub attributes.

### ReadInstruction
* ReadInstruction `object`: An instruction that reads records.
  * source [Source](#source)

### ReportWorkItemStatusRequest
* ReportWorkItemStatusRequest `object`: Request to report the status of WorkItems.
  * currentWorkerTime `string`: The current timestamp at the worker.
  * location `string`: The location which contains the WorkItem's job.
  * workItemStatuses `array`: The order is unimportant, except that the order of the
    * items [WorkItemStatus](#workitemstatus)
  * workerId `string`: The ID of the worker reporting the WorkItem status.  If this

### ReportWorkItemStatusResponse
* ReportWorkItemStatusResponse `object`: Response from a request to report the status of WorkItems.
  * workItemServiceStates `array`: A set of messages indicating the service-side state for each
    * items [WorkItemServiceState](#workitemservicestate)

### ReportedParallelism
* ReportedParallelism `object`: Represents the level of parallelism in a WorkItem's input,
  * isInfinite `boolean`: Specifies whether the parallelism is infinite. If true, "value" is
  * value `number`: Specifies the level of parallelism in case it is finite.

### ResourceUtilizationReport
* ResourceUtilizationReport `object`: Worker metrics exported from workers. This contains resource utilization
  * cpuTime `array`: CPU utilization samples.
    * items [CPUTime](#cputime)

### ResourceUtilizationReportResponse
* ResourceUtilizationReportResponse `object`: Service-side response to WorkerMessage reporting resource utilization.

### RuntimeEnvironment
* RuntimeEnvironment `object`: The environment values to set at runtime.
  * bypassTempDirValidation `boolean`: Whether to bypass the safety checks for the job's temporary directory.
  * machineType `string`: The machine type to use for the job. Defaults to the value from the
  * maxWorkers `integer`: The maximum number of Google Compute Engine instances to be made
  * serviceAccountEmail `string`: The email address of the service account to run the job as.
  * tempLocation `string`: The Cloud Storage path to use for temporary files.
  * zone `string`: The Compute Engine [availability

### SendDebugCaptureRequest
* SendDebugCaptureRequest `object`: Request to send encoded debug information.
  * componentId `string`: The internal component id for which debug information is sent.
  * data `string`: The encoded debug information.
  * location `string`: The location which contains the job specified by job_id.
  * workerId `string`: The worker id, i.e., VM hostname.

### SendDebugCaptureResponse
* SendDebugCaptureResponse `object`: Response to a send capture request.

### SendWorkerMessagesRequest
* SendWorkerMessagesRequest `object`: A request for sending worker messages to the service.
  * location `string`: The location which contains the job
  * workerMessages `array`: The WorkerMessages to send.
    * items [WorkerMessage](#workermessage)

### SendWorkerMessagesResponse
* SendWorkerMessagesResponse `object`: The response to the worker messages.
  * workerMessageResponses `array`: The servers response to the worker messages.
    * items [WorkerMessageResponse](#workermessageresponse)

### SeqMapTask
* SeqMapTask `object`: Describes a particular function to invoke.
  * inputs `array`: Information about each of the inputs.
    * items [SideInputInfo](#sideinputinfo)
  * name `string`: The user-provided name of the SeqDo operation.
  * outputInfos `array`: Information about each of the outputs.
    * items [SeqMapTaskOutputInfo](#seqmaptaskoutputinfo)
  * stageName `string`: System-defined name of the stage containing the SeqDo operation.
  * systemName `string`: System-defined name of the SeqDo operation.
  * userFn `object`: The user function to invoke.

### SeqMapTaskOutputInfo
* SeqMapTaskOutputInfo `object`: Information about an output of a SeqMapTask.
  * sink [Sink](#sink)
  * tag `string`: The id of the TupleTag the user code will tag the output value by.

### ShellTask
* ShellTask `object`: A task which consists of a shell command for the worker to execute.
  * command `string`: The shell command to run.
  * exitCode `integer`: Exit code for the task.

### SideInputId
* SideInputId `object`: Uniquely identifies a side input.
  * declaringStepName `string`: The step that receives and usually consumes this side input.
  * inputIndex `integer`: The index of the side input, from the list of non_parallel_inputs.

### SideInputInfo
* SideInputInfo `object`: Information about a side input of a DoFn or an input of a SeqDoFn.
  * kind `object`: How to interpret the source element(s) as a side input value.
  * sources `array`: The source(s) to read element(s) from to get the value of this side input.
    * items [Source](#source)
  * tag `string`: The id of the tag the user code will access this side input by;

### Sink
* Sink `object`: A sink that records can be encoded and written to.
  * codec `object`: The codec to use to encode data written to the sink.
  * spec `object`: The sink to write to, plus its parameters.

### Source
* Source `object`: A source that records can be read and decoded from.
  * baseSpecs `array`: While splitting, sources may specify the produced bundles
    * items `object`
  * codec `object`: The codec to use to decode data read from the source.
  * doesNotNeedSplitting `boolean`: Setting this value to true hints to the framework that the source
  * metadata [SourceMetadata](#sourcemetadata)
  * spec `object`: The source to read from, plus its parameters.

### SourceFork
* SourceFork `object`: DEPRECATED in favor of DynamicSourceSplit.
  * primary [SourceSplitShard](#sourcesplitshard)
  * primarySource [DerivedSource](#derivedsource)
  * residual [SourceSplitShard](#sourcesplitshard)
  * residualSource [DerivedSource](#derivedsource)

### SourceGetMetadataRequest
* SourceGetMetadataRequest `object`: A request to compute the SourceMetadata of a Source.
  * source [Source](#source)

### SourceGetMetadataResponse
* SourceGetMetadataResponse `object`: The result of a SourceGetMetadataOperation.
  * metadata [SourceMetadata](#sourcemetadata)

### SourceMetadata
* SourceMetadata `object`: Metadata about a Source useful for automatically optimizing
  * estimatedSizeBytes `string`: An estimate of the total size (in bytes) of the data that would be
  * infinite `boolean`: Specifies that the size of this source is known to be infinite
  * producesSortedKeys `boolean`: Whether this source is known to produce key/value pairs with

### SourceOperationRequest
* SourceOperationRequest `object`: A work item that represents the different operations that can be
  * getMetadata [SourceGetMetadataRequest](#sourcegetmetadatarequest)
  * name `string`: User-provided name of the Read instruction for this source.
  * originalName `string`: System-defined name for the Read instruction for this source
  * split [SourceSplitRequest](#sourcesplitrequest)
  * stageName `string`: System-defined name of the stage containing the source operation.
  * systemName `string`: System-defined name of the Read instruction for this source.

### SourceOperationResponse
* SourceOperationResponse `object`: The result of a SourceOperationRequest, specified in
  * getMetadata [SourceGetMetadataResponse](#sourcegetmetadataresponse)
  * split [SourceSplitResponse](#sourcesplitresponse)

### SourceSplitOptions
* SourceSplitOptions `object`: Hints for splitting a Source into bundles (parts for parallel
  * desiredBundleSizeBytes `string`: The source should be split into a set of bundles where the estimated size
  * desiredShardSizeBytes `string`: DEPRECATED in favor of desired_bundle_size_bytes.

### SourceSplitRequest
* SourceSplitRequest `object`: Represents the operation to split a high-level Source specification
  * options [SourceSplitOptions](#sourcesplitoptions)
  * source [Source](#source)

### SourceSplitResponse
* SourceSplitResponse `object`: The response to a SourceSplitRequest.
  * bundles `array`: If outcome is SPLITTING_HAPPENED, then this is a list of bundles
    * items [DerivedSource](#derivedsource)
  * outcome `string` (values: SOURCE_SPLIT_OUTCOME_UNKNOWN, SOURCE_SPLIT_OUTCOME_USE_CURRENT, SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED): Indicates whether splitting happened and produced a list of bundles.
  * shards `array`: DEPRECATED in favor of bundles.
    * items [SourceSplitShard](#sourcesplitshard)

### SourceSplitShard
* SourceSplitShard `object`: DEPRECATED in favor of DerivedSource.
  * derivationMode `string` (values: SOURCE_DERIVATION_MODE_UNKNOWN, SOURCE_DERIVATION_MODE_INDEPENDENT, SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT, SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT): DEPRECATED
  * source [Source](#source)

### SplitInt64
* SplitInt64 `object`: A representation of an int64, n, that is immune to precision loss when
  * highBits `integer`: The high order bits, including the sign: n >> 32.
  * lowBits `integer`: The low order bits: n & 0xffffffff.

### StageSource
* StageSource `object`: Description of an input or output of an execution stage.
  * name `string`: Dataflow service generated name for this source.
  * originalTransformOrCollection `string`: User name for the original user transform or collection with which this
  * sizeBytes `string`: Size of the source, if measurable.
  * userName `string`: Human-readable name for this source; may be user or system generated.

### StateFamilyConfig
* StateFamilyConfig `object`: State family configuration.
  * isRead `boolean`: If true, this family corresponds to a read operation.
  * stateFamily `string`: The state family value.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### Step
* Step `object`: Defines a particular step within a Cloud Dataflow job.
  * kind `string`: The kind of step in the Cloud Dataflow job.
  * name `string`: The name that identifies the step. This must be unique for each
  * properties `object`: Named properties associated with the step. Each kind of

### StreamLocation
* StreamLocation `object`: Describes a stream of data, either as input to be processed or as
  * customSourceLocation [CustomSourceLocation](#customsourcelocation)
  * pubsubLocation [PubsubLocation](#pubsublocation)
  * sideInputLocation [StreamingSideInputLocation](#streamingsideinputlocation)
  * streamingStageLocation [StreamingStageLocation](#streamingstagelocation)

### StreamingComputationConfig
* StreamingComputationConfig `object`: Configuration information for a single streaming computation.
  * computationId `string`: Unique identifier for this computation.
  * instructions `array`: Instructions that comprise the computation.
    * items [ParallelInstruction](#parallelinstruction)
  * stageName `string`: Stage name of this computation.
  * systemName `string`: System defined name for this computation.

### StreamingComputationRanges
* StreamingComputationRanges `object`: Describes full or partial data disk assignment information of the computation
  * computationId `string`: The ID of the computation.
  * rangeAssignments `array`: Data disk assignments for ranges from this computation.
    * items [KeyRangeDataDiskAssignment](#keyrangedatadiskassignment)

### StreamingComputationTask
* StreamingComputationTask `object`: A task which describes what action should be performed for the specified
  * computationRanges `array`: Contains ranges of a streaming computation this task should apply to.
    * items [StreamingComputationRanges](#streamingcomputationranges)
  * dataDisks `array`: Describes the set of data disks this task should apply to.
    * items [MountedDataDisk](#mounteddatadisk)
  * taskType `string` (values: STREAMING_COMPUTATION_TASK_UNKNOWN, STREAMING_COMPUTATION_TASK_STOP, STREAMING_COMPUTATION_TASK_START): A type of streaming computation task.

### StreamingConfigTask
* StreamingConfigTask `object`: A task that carries configuration information for streaming computations.
  * streamingComputationConfigs `array`: Set of computation configuration information.
    * items [StreamingComputationConfig](#streamingcomputationconfig)
  * userStepToStateFamilyNameMap `object`: Map from user step names to state families.
  * windmillServiceEndpoint `string`: If present, the worker must use this endpoint to communicate with Windmill
  * windmillServicePort `string`: If present, the worker must use this port to communicate with Windmill

### StreamingSetupTask
* StreamingSetupTask `object`: A task which initializes part of a streaming Dataflow job.
  * drain `boolean`: The user has requested drain.
  * receiveWorkPort `integer`: The TCP port on which the worker should listen for messages from
  * streamingComputationTopology [TopologyConfig](#topologyconfig)
  * workerHarnessPort `integer`: The TCP port used by the worker to communicate with the Dataflow

### StreamingSideInputLocation
* StreamingSideInputLocation `object`: Identifies the location of a streaming side input.
  * stateFamily `string`: Identifies the state family where this side input is stored.
  * tag `string`: Identifies the particular side input within the streaming Dataflow job.

### StreamingStageLocation
* StreamingStageLocation `object`: Identifies the location of a streaming computation stage, for
  * streamId `string`: Identifies the particular stream within the streaming Dataflow

### StringList
* StringList `object`: A metric value representing a list of strings.
  * elements `array`: Elements of the list.
    * items `string`

### StructuredMessage
* StructuredMessage `object`: A rich message format, including a human readable string, a key for
  * messageKey `string`: Idenfier for this message type.  Used by external systems to
  * messageText `string`: Human-readable version of message.
  * parameters `array`: The structured data associated with this message.
    * items [Parameter](#parameter)

### TaskRunnerSettings
* TaskRunnerSettings `object`: Taskrunner configuration settings.
  * alsologtostderr `boolean`: Whether to also send taskrunner log info to stderr.
  * baseTaskDir `string`: The location on the worker for task-specific subdirectories.
  * baseUrl `string`: The base URL for the taskrunner to use when accessing Google Cloud APIs.
  * commandlinesFileName `string`: The file to store preprocessing commands in.
  * continueOnException `boolean`: Whether to continue taskrunner if an exception is hit.
  * dataflowApiVersion `string`: The API version of endpoint, e.g. "v1b3"
  * harnessCommand `string`: The command to launch the worker harness.
  * languageHint `string`: The suggested backend language.
  * logDir `string`: The directory on the VM to store logs.
  * logToSerialconsole `boolean`: Whether to send taskrunner log info to Google Compute Engine VM serial
  * logUploadLocation `string`: Indicates where to put logs.  If this is not specified, the logs
  * oauthScopes `array`: The OAuth2 scopes to be requested by the taskrunner in order to
    * items `string`
  * parallelWorkerSettings [WorkerSettings](#workersettings)
  * streamingWorkerMainClass `string`: The streaming worker main class name.
  * taskGroup `string`: The UNIX group ID on the worker VM to use for tasks launched by
  * taskUser `string`: The UNIX user ID on the worker VM to use for tasks launched by
  * tempStoragePrefix `string`: The prefix of the resources the taskrunner should use for
  * vmId `string`: The ID string of the VM.
  * workflowFileName `string`: The file to store the workflow in.

### TemplateMetadata
* TemplateMetadata `object`: Metadata describing a template.
  * description `string`: Optional. A description of the template.
  * name `string`: Required. The name of the template.
  * parameters `array`: The parameters for the template.
    * items [ParameterMetadata](#parametermetadata)

### TopologyConfig
* TopologyConfig `object`: Global topology of the streaming Dataflow job, including all
  * computations `array`: The computations associated with a streaming Dataflow job.
    * items [ComputationTopology](#computationtopology)
  * dataDiskAssignments `array`: The disks assigned to a streaming Dataflow job.
    * items [DataDiskAssignment](#datadiskassignment)
  * forwardingKeyBits `integer`: The size (in bits) of keys that will be assigned to source messages.
  * persistentStateVersion `integer`: Version number for persistent state.
  * userStageToComputationNameMap `object`: Maps user stage names to stable computation names.

### TransformSummary
* TransformSummary `object`: Description of the type, names/ids, and input/outputs for a transform.
  * displayData `array`: Transform-specific display data.
    * items [DisplayData](#displaydata)
  * id `string`: SDK generated id of this transform instance.
  * inputCollectionName `array`: User names for all collection inputs to this transform.
    * items `string`
  * kind `string` (values: UNKNOWN_KIND, PAR_DO_KIND, GROUP_BY_KEY_KIND, FLATTEN_KIND, READ_KIND, WRITE_KIND, CONSTANT_KIND, SINGLETON_KIND, SHUFFLE_KIND): Type of transform.
  * name `string`: User provided name for this transform instance.
  * outputCollectionName `array`: User  names for all collection outputs to this transform.
    * items `string`

### WorkItem
* WorkItem `object`: WorkItem represents basic information about a WorkItem to be executed
  * configuration `string`: Work item-specific configuration as an opaque blob.
  * id `string`: Identifies this WorkItem.
  * initialReportIndex `string`: The initial index to use when reporting the status of the WorkItem.
  * jobId `string`: Identifies the workflow job this WorkItem belongs to.
  * leaseExpireTime `string`: Time when the lease on this Work will expire.
  * mapTask [MapTask](#maptask)
  * packages `array`: Any required packages that need to be fetched in order to execute
    * items [Package](#package)
  * projectId `string`: Identifies the cloud project this WorkItem belongs to.
  * reportStatusInterval `string`: Recommended reporting interval.
  * seqMapTask [SeqMapTask](#seqmaptask)
  * shellTask [ShellTask](#shelltask)
  * sourceOperationTask [SourceOperationRequest](#sourceoperationrequest)
  * streamingComputationTask [StreamingComputationTask](#streamingcomputationtask)
  * streamingConfigTask [StreamingConfigTask](#streamingconfigtask)
  * streamingSetupTask [StreamingSetupTask](#streamingsetuptask)

### WorkItemServiceState
* WorkItemServiceState `object`: The Dataflow service's idea of the current state of a WorkItem
  * harnessData `object`: Other data returned by the service, specific to the particular
  * leaseExpireTime `string`: Time at which the current lease will expire.
  * metricShortId `array`: The short ids that workers should use in subsequent metric updates.
    * items [MetricShortId](#metricshortid)
  * nextReportIndex `string`: The index value to use for the next report sent by the worker.
  * reportStatusInterval `string`: New recommended reporting interval.
  * splitRequest [ApproximateSplitRequest](#approximatesplitrequest)
  * suggestedStopPoint [ApproximateProgress](#approximateprogress)
  * suggestedStopPosition [Position](#position)

### WorkItemStatus
* WorkItemStatus `object`: Conveys a worker's progress through the work described by a WorkItem.
  * completed `boolean`: True if the WorkItem was completed (successfully or unsuccessfully).
  * counterUpdates `array`: Worker output counters for this WorkItem.
    * items [CounterUpdate](#counterupdate)
  * dynamicSourceSplit [DynamicSourceSplit](#dynamicsourcesplit)
  * errors `array`: Specifies errors which occurred during processing.  If errors are
    * items [Status](#status)
  * metricUpdates `array`: DEPRECATED in favor of counter_updates.
    * items [MetricUpdate](#metricupdate)
  * progress [ApproximateProgress](#approximateprogress)
  * reportIndex `string`: The report index.  When a WorkItem is leased, the lease will
  * reportedProgress [ApproximateReportedProgress](#approximatereportedprogress)
  * requestedLeaseDuration `string`: Amount of time the worker requests for its lease.
  * sourceFork [SourceFork](#sourcefork)
  * sourceOperationResponse [SourceOperationResponse](#sourceoperationresponse)
  * stopPosition [Position](#position)
  * totalThrottlerWaitTimeSeconds `number`: Total time the worker spent being throttled by external systems.
  * workItemId `string`: Identifies the WorkItem.

### WorkerHealthReport
* WorkerHealthReport `object`: WorkerHealthReport contains information about the health of a worker.
  * pods `array`: The pods running on the worker. See:
    * items `object`
  * reportInterval `string`: The interval at which the worker is sending health reports.
  * vmIsHealthy `boolean`: Whether the VM is healthy.
  * vmStartupTime `string`: The time the VM was booted.

### WorkerHealthReportResponse
* WorkerHealthReportResponse `object`: WorkerHealthReportResponse contains information returned to the worker
  * reportInterval `string`: A positive value indicates the worker should change its reporting interval

### WorkerMessage
* WorkerMessage `object`: WorkerMessage provides information to the backend about a worker.
  * labels `object`: Labels are used to group WorkerMessages.
  * time `string`: The timestamp of the worker_message.
  * workerHealthReport [WorkerHealthReport](#workerhealthreport)
  * workerMessageCode [WorkerMessageCode](#workermessagecode)
  * workerMetrics [ResourceUtilizationReport](#resourceutilizationreport)
  * workerShutdownNotice [WorkerShutdownNotice](#workershutdownnotice)

### WorkerMessageCode
* WorkerMessageCode `object`: A message code is used to report status and error messages to the service.
  * code `string`: The code is a string intended for consumption by a machine that identifies
  * parameters `object`: Parameters contains specific information about the code.

### WorkerMessageResponse
* WorkerMessageResponse `object`: A worker_message response allows the server to pass information to the
  * workerHealthReportResponse [WorkerHealthReportResponse](#workerhealthreportresponse)
  * workerMetricsResponse [ResourceUtilizationReportResponse](#resourceutilizationreportresponse)
  * workerShutdownNoticeResponse [WorkerShutdownNoticeResponse](#workershutdownnoticeresponse)

### WorkerPool
* WorkerPool `object`: Describes one particular pool of Cloud Dataflow workers to be
  * autoscalingSettings [AutoscalingSettings](#autoscalingsettings)
  * dataDisks `array`: Data disks that are used by a VM in this workflow.
    * items [Disk](#disk)
  * defaultPackageSet `string` (values: DEFAULT_PACKAGE_SET_UNKNOWN, DEFAULT_PACKAGE_SET_NONE, DEFAULT_PACKAGE_SET_JAVA, DEFAULT_PACKAGE_SET_PYTHON): The default package set to install.  This allows the service to
  * diskSizeGb `integer`: Size of root disk for VMs, in GB.  If zero or unspecified, the service will
  * diskSourceImage `string`: Fully qualified source image for disks.
  * diskType `string`: Type of root disk for VMs.  If empty or unspecified, the service will
  * ipConfiguration `string` (values: WORKER_IP_UNSPECIFIED, WORKER_IP_PUBLIC, WORKER_IP_PRIVATE): Configuration for VM IPs.
  * kind `string`: The kind of the worker pool; currently only `harness` and `shuffle`
  * machineType `string`: Machine type (e.g. "n1-standard-1").  If empty or unspecified, the
  * metadata `object`: Metadata to set on the Google Compute Engine VMs.
  * network `string`: Network to which VMs will be assigned.  If empty or unspecified,
  * numThreadsPerWorker `integer`: The number of threads per worker harness. If empty or unspecified, the
  * numWorkers `integer`: Number of Google Compute Engine workers in this pool needed to
  * onHostMaintenance `string`: The action to take on host maintenance, as defined by the Google
  * packages `array`: Packages to be installed on workers.
    * items [Package](#package)
  * poolArgs `object`: Extra arguments for this worker pool.
  * subnetwork `string`: Subnetwork to which VMs will be assigned, if desired.  Expected to be of
  * taskrunnerSettings [TaskRunnerSettings](#taskrunnersettings)
  * teardownPolicy `string` (values: TEARDOWN_POLICY_UNKNOWN, TEARDOWN_ALWAYS, TEARDOWN_ON_SUCCESS, TEARDOWN_NEVER): Sets the policy for determining when to turndown worker pool.
  * workerHarnessContainerImage `string`: Required. Docker container image that executes the Cloud Dataflow worker
  * zone `string`: Zone to run the worker pools in.  If empty or unspecified, the service

### WorkerSettings
* WorkerSettings `object`: Provides data to pass through to the worker harness.
  * baseUrl `string`: The base URL for accessing Google Cloud APIs.
  * reportingEnabled `boolean`: Whether to send work progress updates to the service.
  * servicePath `string`: The Cloud Dataflow service path relative to the root URL, for example,
  * shuffleServicePath `string`: The Shuffle service path relative to the root URL, for example,
  * tempStoragePrefix `string`: The prefix of the resources the system should use for temporary
  * workerId `string`: The ID of the worker running this pipeline.

### WorkerShutdownNotice
* WorkerShutdownNotice `object`: Shutdown notification from workers. This is to be sent by the shutdown
  * reason `string`: The reason for the worker shutdown.

### WorkerShutdownNoticeResponse
* WorkerShutdownNoticeResponse `object`: Service-side response to WorkerMessage issuing shutdown notice.

### WriteInstruction
* WriteInstruction `object`: An instruction that writes records.
  * input [InstructionInput](#instructioninput)
  * sink [Sink](#sink)


