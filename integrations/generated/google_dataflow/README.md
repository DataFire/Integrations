# @datafire/google_dataflow

Client library for Dataflow API

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

.then(data => {
  console.log(data);
});
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

### dataflow.projects.workerMessages
Send a worker_message to the service.


```js
google_dataflow.dataflow.projects.workerMessages({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project to send the WorkerMessages to.
  * body [SendWorkerMessagesRequest](#sendworkermessagesrequest)
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
* output [SendWorkerMessagesResponse](#sendworkermessagesresponse)

### dataflow.projects.jobs.list
List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.


```js
google_dataflow.dataflow.projects.jobs.list({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project which owns the jobs.
  * filter `string` (values: UNKNOWN, ALL, TERMINATED, ACTIVE): The kind of filter to use.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
  * pageSize `integer`: If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
  * pageToken `string`: Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
  * view `string` (values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION): Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
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
* output [ListJobsResponse](#listjobsresponse)

### dataflow.projects.jobs.create
Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`.


```js
google_dataflow.dataflow.projects.jobs.create({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the job belongs to.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
  * replaceJobId `string`: Deprecated. This field is now in the Job message.
  * view `string` (values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION): The level of information requested in response.
  * body [Job](#job)
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
* output [Job](#job)

### dataflow.projects.jobs.get
Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.


```js
google_dataflow.dataflow.projects.jobs.get({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the job belongs to.
  * jobId **required** `string`: The job ID.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
  * view `string` (values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION): The level of information requested in response.
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
* output [Job](#job)

### dataflow.projects.jobs.update
Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.


```js
google_dataflow.dataflow.projects.jobs.update({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the job belongs to.
  * jobId **required** `string`: The job ID.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
  * body [Job](#job)
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
* output [Job](#job)

### dataflow.projects.jobs.debug.getConfig
Get encoded debug configuration for component. Not cacheable.


```js
google_dataflow.dataflow.projects.jobs.debug.getConfig({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * jobId **required** `string`: The job id.
  * body [GetDebugConfigRequest](#getdebugconfigrequest)
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
* output [GetDebugConfigResponse](#getdebugconfigresponse)

### dataflow.projects.jobs.debug.sendCapture
Send encoded debug capture data for component.


```js
google_dataflow.dataflow.projects.jobs.debug.sendCapture({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * jobId **required** `string`: The job id.
  * body [SendDebugCaptureRequest](#senddebugcapturerequest)
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
* output [SendDebugCaptureResponse](#senddebugcaptureresponse)

### dataflow.projects.jobs.messages.list
Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.


```js
google_dataflow.dataflow.projects.jobs.messages.list({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A project id.
  * jobId **required** `string`: The job to get messages about.
  * endTime `string`: Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
  * minimumImportance `string` (values: JOB_MESSAGE_IMPORTANCE_UNKNOWN, JOB_MESSAGE_DEBUG, JOB_MESSAGE_DETAILED, JOB_MESSAGE_BASIC, JOB_MESSAGE_WARNING, JOB_MESSAGE_ERROR): Filter to only get messages with importance >= level
  * pageSize `integer`: If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
  * pageToken `string`: If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
  * startTime `string`: If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
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
* output [ListJobMessagesResponse](#listjobmessagesresponse)

### dataflow.projects.jobs.getMetrics
Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.


```js
google_dataflow.dataflow.projects.jobs.getMetrics({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A project id.
  * jobId **required** `string`: The job to get metrics for.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
  * startTime `string`: Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.
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
* output [JobMetrics](#jobmetrics)

### dataflow.projects.jobs.workItems.lease
Leases a dataflow WorkItem to run.


```js
google_dataflow.dataflow.projects.jobs.workItems.lease({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Identifies the project this worker belongs to.
  * jobId **required** `string`: Identifies the workflow job this worker belongs to.
  * body [LeaseWorkItemRequest](#leaseworkitemrequest)
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
* output [LeaseWorkItemResponse](#leaseworkitemresponse)

### dataflow.projects.jobs.workItems.reportStatus
Reports the status of dataflow WorkItems leased by a worker.


```js
google_dataflow.dataflow.projects.jobs.workItems.reportStatus({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project which owns the WorkItem's job.
  * jobId **required** `string`: The job which the WorkItem is part of.
  * body [ReportWorkItemStatusRequest](#reportworkitemstatusrequest)
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
* output [ReportWorkItemStatusResponse](#reportworkitemstatusresponse)

### dataflow.projects.jobs.snapshot
Snapshot the state of a streaming job.


```js
google_dataflow.dataflow.projects.jobs.snapshot({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project which owns the job to be snapshotted.
  * jobId **required** `string`: The job to be snapshotted.
  * body [SnapshotJobRequest](#snapshotjobrequest)
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
* output [Snapshot](#snapshot)

### dataflow.projects.jobs.aggregated
List the jobs of a project across all regions.


```js
google_dataflow.dataflow.projects.jobs.aggregated({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project which owns the jobs.
  * filter `string` (values: UNKNOWN, ALL, TERMINATED, ACTIVE): The kind of filter to use.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
  * pageSize `integer`: If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
  * pageToken `string`: Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
  * view `string` (values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION): Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
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
* output [ListJobsResponse](#listjobsresponse)

### dataflow.projects.locations.workerMessages
Send a worker_message to the service.


```js
google_dataflow.dataflow.projects.locations.workerMessages({
  "projectId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project to send the WorkerMessages to.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job.
  * body [SendWorkerMessagesRequest](#sendworkermessagesrequest)
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
* output [SendWorkerMessagesResponse](#sendworkermessagesresponse)

### dataflow.projects.locations.flexTemplates.launch
Launch a job with a FlexTemplate.


```js
google_dataflow.dataflow.projects.locations.flexTemplates.launch({
  "projectId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Cloud Platform project that the job belongs to.
  * location **required** `string`: Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. E.g., us-central1, us-west1.
  * body [LaunchFlexTemplateRequest](#launchflextemplaterequest)
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
* output [LaunchFlexTemplateResponse](#launchflextemplateresponse)

### dataflow.projects.locations.jobs.list
List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.


```js
google_dataflow.dataflow.projects.locations.jobs.list({
  "projectId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project which owns the jobs.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
  * filter `string` (values: UNKNOWN, ALL, TERMINATED, ACTIVE): The kind of filter to use.
  * pageSize `integer`: If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
  * pageToken `string`: Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
  * view `string` (values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION): Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
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
* output [ListJobsResponse](#listjobsresponse)

### dataflow.projects.locations.jobs.create
Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`.


```js
google_dataflow.dataflow.projects.locations.jobs.create({
  "projectId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the job belongs to.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
  * replaceJobId `string`: Deprecated. This field is now in the Job message.
  * view `string` (values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION): The level of information requested in response.
  * body [Job](#job)
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
* output [Job](#job)

### dataflow.projects.locations.jobs.get
Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.


```js
google_dataflow.dataflow.projects.locations.jobs.get({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the job belongs to.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
  * jobId **required** `string`: The job ID.
  * view `string` (values: JOB_VIEW_UNKNOWN, JOB_VIEW_SUMMARY, JOB_VIEW_ALL, JOB_VIEW_DESCRIPTION): The level of information requested in response.
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
* output [Job](#job)

### dataflow.projects.locations.jobs.update
Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.


```js
google_dataflow.dataflow.projects.locations.jobs.update({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the job belongs to.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
  * jobId **required** `string`: The job ID.
  * body [Job](#job)
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
* output [Job](#job)

### dataflow.projects.locations.jobs.debug.getConfig
Get encoded debug configuration for component. Not cacheable.


```js
google_dataflow.dataflow.projects.locations.jobs.debug.getConfig({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
  * jobId **required** `string`: The job id.
  * body [GetDebugConfigRequest](#getdebugconfigrequest)
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
* output [GetDebugConfigResponse](#getdebugconfigresponse)

### dataflow.projects.locations.jobs.debug.sendCapture
Send encoded debug capture data for component.


```js
google_dataflow.dataflow.projects.locations.jobs.debug.sendCapture({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
  * jobId **required** `string`: The job id.
  * body [SendDebugCaptureRequest](#senddebugcapturerequest)
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
* output [SendDebugCaptureResponse](#senddebugcaptureresponse)

### dataflow.projects.locations.jobs.getExecutionDetails
Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.


```js
google_dataflow.dataflow.projects.locations.jobs.getExecutionDetails({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A project id.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
  * jobId **required** `string`: The job to get execution details for.
  * pageSize `integer`: If specified, determines the maximum number of stages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
  * pageToken `string`: If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
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
* output [JobExecutionDetails](#jobexecutiondetails)

### dataflow.projects.locations.jobs.messages.list
Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.


```js
google_dataflow.dataflow.projects.locations.jobs.messages.list({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A project id.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
  * jobId **required** `string`: The job to get messages about.
  * endTime `string`: Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
  * minimumImportance `string` (values: JOB_MESSAGE_IMPORTANCE_UNKNOWN, JOB_MESSAGE_DEBUG, JOB_MESSAGE_DETAILED, JOB_MESSAGE_BASIC, JOB_MESSAGE_WARNING, JOB_MESSAGE_ERROR): Filter to only get messages with importance >= level
  * pageSize `integer`: If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
  * pageToken `string`: If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
  * startTime `string`: If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
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
* output [ListJobMessagesResponse](#listjobmessagesresponse)

### dataflow.projects.locations.jobs.getMetrics
Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.


```js
google_dataflow.dataflow.projects.locations.jobs.getMetrics({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A project id.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
  * jobId **required** `string`: The job to get metrics for.
  * startTime `string`: Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.
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
* output [JobMetrics](#jobmetrics)

### dataflow.projects.locations.jobs.snapshots.list
Lists snapshots.


```js
google_dataflow.dataflow.projects.locations.jobs.snapshots.list({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project ID to list snapshots for.
  * location **required** `string`: The location to list snapshots in.
  * jobId **required** `string`: If specified, list snapshots created from this job.
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
* output [ListSnapshotsResponse](#listsnapshotsresponse)

### dataflow.projects.locations.jobs.stages.getExecutionDetails
Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.


```js
google_dataflow.dataflow.projects.locations.jobs.stages.getExecutionDetails({
  "projectId": "",
  "location": "",
  "jobId": "",
  "stageId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A project id.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
  * jobId **required** `string`: The job to get execution details for.
  * stageId **required** `string`: The stage for which to fetch information.
  * endTime `string`: Upper time bound of work items to include, by start time.
  * pageSize `integer`: If specified, determines the maximum number of work items to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
  * pageToken `string`: If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
  * startTime `string`: Lower time bound of work items to include, by start time.
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
* output [StageExecutionDetails](#stageexecutiondetails)

### dataflow.projects.locations.jobs.workItems.lease
Leases a dataflow WorkItem to run.


```js
google_dataflow.dataflow.projects.locations.jobs.workItems.lease({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Identifies the project this worker belongs to.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.
  * jobId **required** `string`: Identifies the workflow job this worker belongs to.
  * body [LeaseWorkItemRequest](#leaseworkitemrequest)
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
* output [LeaseWorkItemResponse](#leaseworkitemresponse)

### dataflow.projects.locations.jobs.workItems.reportStatus
Reports the status of dataflow WorkItems leased by a worker.


```js
google_dataflow.dataflow.projects.locations.jobs.workItems.reportStatus({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project which owns the WorkItem's job.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.
  * jobId **required** `string`: The job which the WorkItem is part of.
  * body [ReportWorkItemStatusRequest](#reportworkitemstatusrequest)
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
* output [ReportWorkItemStatusResponse](#reportworkitemstatusresponse)

### dataflow.projects.locations.jobs.snapshot
Snapshot the state of a streaming job.


```js
google_dataflow.dataflow.projects.locations.jobs.snapshot({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project which owns the job to be snapshotted.
  * location **required** `string`: The location that contains this job.
  * jobId **required** `string`: The job to be snapshotted.
  * body [SnapshotJobRequest](#snapshotjobrequest)
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
* output [Snapshot](#snapshot)

### dataflow.projects.locations.snapshots.list
Lists snapshots.


```js
google_dataflow.dataflow.projects.locations.snapshots.list({
  "projectId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project ID to list snapshots for.
  * location **required** `string`: The location to list snapshots in.
  * jobId `string`: If specified, list snapshots created from this job.
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
* output [ListSnapshotsResponse](#listsnapshotsresponse)

### dataflow.projects.locations.snapshots.delete
Deletes a snapshot.


```js
google_dataflow.dataflow.projects.locations.snapshots.delete({
  "projectId": "",
  "location": "",
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the snapshot belongs to.
  * location **required** `string`: The location that contains this snapshot.
  * snapshotId **required** `string`: The ID of the snapshot.
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
* output [DeleteSnapshotResponse](#deletesnapshotresponse)

### dataflow.projects.locations.snapshots.get
Gets information about a snapshot.


```js
google_dataflow.dataflow.projects.locations.snapshots.get({
  "projectId": "",
  "location": "",
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the snapshot belongs to.
  * location **required** `string`: The location that contains this snapshot.
  * snapshotId **required** `string`: The ID of the snapshot.
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
* output [Snapshot](#snapshot)

### dataflow.projects.locations.sql.validate
Validates a GoogleSQL query for Cloud Dataflow syntax. Will always confirm the given query parses correctly, and if able to look up schema information from DataCatalog, will validate that the query analyzes properly as well.


```js
google_dataflow.dataflow.projects.locations.sql.validate({
  "projectId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Cloud Platform project that the job belongs to.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
  * query `string`: The sql query to validate.
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
* output [ValidateResponse](#validateresponse)

### dataflow.projects.locations.templates.create
Creates a Cloud Dataflow job from a template.


```js
google_dataflow.dataflow.projects.locations.templates.create({
  "projectId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Cloud Platform project that the job belongs to.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
  * body [CreateJobFromTemplateRequest](#createjobfromtemplaterequest)
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
* output [Job](#job)

### dataflow.projects.locations.templates.get
Get the template associated with a template.


```js
google_dataflow.dataflow.projects.locations.templates.get({
  "projectId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Cloud Platform project that the job belongs to.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
  * gcsPath `string`: Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
  * view `string` (values: METADATA_ONLY): The view to retrieve. Defaults to METADATA_ONLY.
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
* output [GetTemplateResponse](#gettemplateresponse)

### dataflow.projects.locations.templates.launch
Launch a template.


```js
google_dataflow.dataflow.projects.locations.templates.launch({
  "projectId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Cloud Platform project that the job belongs to.
  * location **required** `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
  * dynamicTemplate.gcsPath `string`: Path to dynamic template spec file on GCS. The file must be a Json serialized DynamicTemplateFieSpec object.
  * dynamicTemplate.stagingLocation `string`: Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`.
  * gcsPath `string`: A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
  * validateOnly `boolean`: If true, the request is validated but not actually executed. Defaults to false.
  * body [LaunchTemplateParameters](#launchtemplateparameters)
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
* output [LaunchTemplateResponse](#launchtemplateresponse)

### dataflow.projects.deleteSnapshots
Deletes a snapshot.


```js
google_dataflow.dataflow.projects.deleteSnapshots({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the snapshot belongs to.
  * location `string`: The location that contains this snapshot.
  * snapshotId `string`: The ID of the snapshot.
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
* output [DeleteSnapshotResponse](#deletesnapshotresponse)

### dataflow.projects.snapshots.list
Lists snapshots.


```js
google_dataflow.dataflow.projects.snapshots.list({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project ID to list snapshots for.
  * jobId `string`: If specified, list snapshots created from this job.
  * location `string`: The location to list snapshots in.
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
* output [ListSnapshotsResponse](#listsnapshotsresponse)

### dataflow.projects.snapshots.get
Gets information about a snapshot.


```js
google_dataflow.dataflow.projects.snapshots.get({
  "projectId": "",
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the Cloud Platform project that the snapshot belongs to.
  * snapshotId **required** `string`: The ID of the snapshot.
  * location `string`: The location that contains this snapshot.
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
* output [Snapshot](#snapshot)

### dataflow.projects.templates.create
Creates a Cloud Dataflow job from a template.


```js
google_dataflow.dataflow.projects.templates.create({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Cloud Platform project that the job belongs to.
  * body [CreateJobFromTemplateRequest](#createjobfromtemplaterequest)
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
* output [Job](#job)

### dataflow.projects.templates.get
Get the template associated with a template.


```js
google_dataflow.dataflow.projects.templates.get({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Cloud Platform project that the job belongs to.
  * gcsPath `string`: Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
  * view `string` (values: METADATA_ONLY): The view to retrieve. Defaults to METADATA_ONLY.
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
* output [GetTemplateResponse](#gettemplateresponse)

### dataflow.projects.templates.launch
Launch a template.


```js
google_dataflow.dataflow.projects.templates.launch({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Cloud Platform project that the job belongs to.
  * dynamicTemplate.gcsPath `string`: Path to dynamic template spec file on GCS. The file must be a Json serialized DynamicTemplateFieSpec object.
  * dynamicTemplate.stagingLocation `string`: Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`.
  * gcsPath `string`: A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
  * validateOnly `boolean`: If true, the request is validated but not actually executed. Defaults to false.
  * body [LaunchTemplateParameters](#launchtemplateparameters)
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
* output [LaunchTemplateResponse](#launchtemplateresponse)

### dataflow.projects.catalogTemplates.delete
Deletes an existing Template. Do nothing if Template does not exist.


```js
google_dataflow.dataflow.projects.catalogTemplates.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: name includes project_id and display_name. Delete by project_id(pid1) and display_name(tid1). Format: projects/{pid1}/catalogTemplates/{tid1}
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

### dataflow.projects.catalogTemplates.get
Get TemplateVersion using project_id and display_name with an optional version_id field. Get latest (has tag "latest") TemplateVersion if version_id not set.


```js
google_dataflow.dataflow.projects.catalogTemplates.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name includes project_id and display_name. version_id is optional. Get the latest TemplateVersion if version_id not set. Get by project_id(pid1) and display_name(tid1): Format: projects/{pid1}/catalogTemplates/{tid1} Get by project_id(pid1), display_name(tid1), and version_id(vid1): Format: projects/{pid1}/catalogTemplates/{tid1@vid}
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
* output [TemplateVersion](#templateversion)

### dataflow.projects.catalogTemplates.commit
Creates a new TemplateVersion (Important: not new Template) entry in the spanner table. Requires project_id and display_name (template).


```js
google_dataflow.dataflow.projects.catalogTemplates.commit({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The location of the template, name includes project_id and display_name. Commit using project_id(pid1) and display_name(tid1). Format: projects/{pid1}/catalogTemplates/{tid1}
  * body [CommitTemplateVersionRequest](#committemplateversionrequest)
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
* output [TemplateVersion](#templateversion)

### dataflow.projects.catalogTemplates.label
Updates the label of the TemplateVersion. Label can be duplicated in Template, so either add or remove the label in the TemplateVersion.


```js
google_dataflow.dataflow.projects.catalogTemplates.label({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name includes project_id, display_name, and version_id. Updates by project_id(pid1), display_name(tid1), and version_id(vid1): Format: projects/{pid1}/catalogTemplates/{tid1@vid}
  * body [ModifyTemplateVersionLabelRequest](#modifytemplateversionlabelrequest)
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
* output [ModifyTemplateVersionLabelResponse](#modifytemplateversionlabelresponse)

### dataflow.projects.catalogTemplates.tag
Updates the tag of the TemplateVersion, and tag is unique in Template. If tag exists in another TemplateVersion in the Template, updates the tag to this TemplateVersion will remove it from the old TemplateVersion and add it to this TemplateVersion. If request is remove_only (remove_only = true), remove the tag from this TemplateVersion.


```js
google_dataflow.dataflow.projects.catalogTemplates.tag({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name includes project_id, display_name, and version_id. Updates by project_id(pid1), display_name(tid1), and version_id(vid1): Format: projects/{pid1}/catalogTemplates/{tid1@vid}
  * body [ModifyTemplateVersionTagRequest](#modifytemplateversiontagrequest)
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
* output [ModifyTemplateVersionTagResponse](#modifytemplateversiontagresponse)

### dataflow.projects.templateVersions.list
List TemplateVersions using project_id and an optional display_name field. List all the TemplateVersions in the Template if display set. List all the TemplateVersions in the Project if display_name not set.


```js
google_dataflow.dataflow.projects.templateVersions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: parent includes project_id, and display_name is optional. List by project_id(pid1) and display_name(tid1). Format: projects/{pid1}/catalogTemplates/{tid1} List by project_id(pid1). Format: projects/{pid1}
  * pageSize `integer`: The maximum number of TemplateVersions to return per page.
  * pageToken `string`: The page token, received from a previous ListTemplateVersions call. Provide this to retrieve the subsequent page.
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
* output [ListTemplateVersionsResponse](#listtemplateversionsresponse)

### dataflow.projects.catalogTemplates.templateVersions.create
Creates a new Template with TemplateVersion. Requires project_id(projects) and template display_name(catalogTemplates). The template display_name is set by the user.


```js
google_dataflow.dataflow.projects.catalogTemplates.templateVersions.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The parent project and template that the TemplateVersion will be created under. Create using project_id(pid1) and display_name(tid1). Format: projects/{pid1}/catalogTemplates/{tid1}
  * body [CreateTemplateVersionRequest](#createtemplateversionrequest)
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
* output [TemplateVersion](#templateversion)



## Definitions

### ApproximateProgress
* ApproximateProgress `object`: Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest.
  * percentComplete `number`: Obsolete.
  * position [Position](#position)
  * remainingTime `string`: Obsolete.

### ApproximateReportedProgress
* ApproximateReportedProgress `object`: A progress measurement of a WorkItem by a worker.
  * consumedParallelism [ReportedParallelism](#reportedparallelism)
  * fractionConsumed `number`: Completion as fraction of the input consumed, from 0.0 (beginning, nothing consumed), to 1.0 (end of the input, entire input consumed).
  * position [Position](#position)
  * remainingParallelism [ReportedParallelism](#reportedparallelism)

### ApproximateSplitRequest
* ApproximateSplitRequest `object`: A suggestion by the service to the worker to dynamically split the WorkItem.
  * fractionConsumed `number`: A fraction at which to split the work item, from 0.0 (beginning of the input) to 1.0 (end of the input).
  * fractionOfRemainder `number`: The fraction of the remainder of work to split the work item at, from 0.0 (split at the current position) to 1.0 (end of the input).
  * position [Position](#position)

### Artifact
* Artifact `object`: Job information for templates.
  * containerSpec [ContainerSpec](#containerspec)
  * jobGraphGcsPath `string`: job_graph_gcs_path set for legacy Template.
  * metadata [TemplateMetadata](#templatemetadata)

### AutoscalingEvent
* AutoscalingEvent `object`: A structured message reporting an autoscaling decision made by the Dataflow service.
  * currentNumWorkers `string`: The current number of workers the job has.
  * description [StructuredMessage](#structuredmessage)
  * eventType `string` (values: TYPE_UNKNOWN, TARGET_NUM_WORKERS_CHANGED, CURRENT_NUM_WORKERS_CHANGED, ACTUATION_FAILURE, NO_CHANGE): The type of autoscaling event to report.
  * targetNumWorkers `string`: The target number of workers the worker pool wants to resize to use.
  * time `string`: The time this event was emitted to indicate a new target or current num_workers value.
  * workerPool `string`: A short and friendly name for the worker pool this event refers to, populated from the value of PoolStageRelation::user_pool_name.

### AutoscalingSettings
* AutoscalingSettings `object`: Settings for WorkerPool autoscaling.
  * algorithm `string` (values: AUTOSCALING_ALGORITHM_UNKNOWN, AUTOSCALING_ALGORITHM_NONE, AUTOSCALING_ALGORITHM_BASIC): The algorithm to use for autoscaling.
  * maxNumWorkers `integer`: The maximum number of workers to cap scaling at.

### BigQueryIODetails
* BigQueryIODetails `object`: Metadata for a BigQuery connector used by the job.
  * dataset `string`: Dataset accessed in the connection.
  * projectId `string`: Project accessed in the connection.
  * query `string`: Query used to access data in the connection.
  * table `string`: Table accessed in the connection.

### BigTableIODetails
* BigTableIODetails `object`: Metadata for a BigTable connector used by the job.
  * instanceId `string`: InstanceId accessed in the connection.
  * projectId `string`: ProjectId accessed in the connection.
  * tableId `string`: TableId accessed in the connection.

### CPUTime
* CPUTime `object`: Modeled after information exposed by /proc/stat.
  * rate `number`: Average CPU utilization rate (% non-idle cpu / second) since previous sample.
  * timestamp `string`: Timestamp of the measurement.
  * totalMs `string`: Total active CPU time across all cores (ie., non-idle) in milliseconds since start-up.

### CommitTemplateVersionRequest
* CommitTemplateVersionRequest `object`: Commit will add a new TemplateVersion to an existing template.
  * templateVersion [TemplateVersion](#templateversion)

### ComponentSource
* ComponentSource `object`: Description of an interstitial value between transforms in an execution stage.
  * name `string`: Dataflow service generated name for this source.
  * originalTransformOrCollection `string`: User name for the original user transform or collection with which this source is most closely associated.
  * userName `string`: Human-readable name for this transform; may be user or system generated.

### ComponentTransform
* ComponentTransform `object`: Description of a transform executed as part of an execution stage.
  * name `string`: Dataflow service generated name for this source.
  * originalTransform `string`: User name for the original user transform with which this transform is most closely associated.
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
* ConcatPosition `object`: A position that encapsulates an inner position and an index for the inner position. A ConcatPosition can be used by a reader of a source that encapsulates a set of other sources.
  * index `integer`: Index of the inner source.
  * position [Position](#position)

### ContainerSpec
* ContainerSpec `object`: Container Spec.
  * defaultEnvironment [FlexTemplateRuntimeEnvironment](#flextemplateruntimeenvironment)
  * image `string`: Name of the docker container image. E.g., gcr.io/project/some-image
  * metadata [TemplateMetadata](#templatemetadata)
  * sdkInfo [SDKInfo](#sdkinfo)

### CounterMetadata
* CounterMetadata `object`: CounterMetadata includes all static non-name non-value counter attributes.
  * description `string`: Human-readable description of the counter semantics.
  * kind `string` (values: INVALID, SUM, MAX, MIN, MEAN, OR, AND, SET, DISTRIBUTION, LATEST_VALUE): Counter aggregation kind.
  * otherUnits `string`: A string referring to the unit type.
  * standardUnits `string` (values: BYTES, BYTES_PER_SEC, MILLISECONDS, MICROSECONDS, NANOSECONDS, TIMESTAMP_MSEC, TIMESTAMP_USEC, TIMESTAMP_NSEC): System defined Units, see above enum.

### CounterStructuredName
* CounterStructuredName `object`: Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job.
  * componentStepName `string`: Name of the optimized step being executed by the workers.
  * executionStepName `string`: Name of the stage. An execution step contains multiple component steps.
  * inputIndex `integer`: Index of an input collection that's being read from/written to as a side input. The index identifies a step's side inputs starting by 1 (e.g. the first side input has input_index 1, the third has input_index 3). Side inputs are identified by a pair of (original_step_name, input_index). This field helps uniquely identify them.
  * name `string`: Counter name. Not necessarily globally-unique, but unique within the context of the other fields. Required.
  * origin `string` (values: SYSTEM, USER): One of the standard Origins defined above.
  * originNamespace `string`: A string containing a more specific namespace of the counter's origin.
  * originalRequestingStepName `string`: The step name requesting an operation, such as GBK. I.e. the ParDo causing a read/write from shuffle to occur, or a read from side inputs.
  * originalStepName `string`: System generated name of the original step in the user's graph, before optimization.
  * portion `string` (values: ALL, KEY, VALUE): Portion of this counter, either key or value.
  * workerId `string`: ID of a particular worker.

### CounterStructuredNameAndMetadata
* CounterStructuredNameAndMetadata `object`: A single message which encapsulates structured name and metadata for a given counter.
  * metadata [CounterMetadata](#countermetadata)
  * name [CounterStructuredName](#counterstructuredname)

### CounterUpdate
* CounterUpdate `object`: An update to a Counter sent from a worker.
  * boolean `boolean`: Boolean value for And, Or.
  * cumulative `boolean`: True if this counter is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this counter is reported as a delta.
  * distribution [DistributionUpdate](#distributionupdate)
  * floatingPoint `number`: Floating point value for Sum, Max, Min.
  * floatingPointList [FloatingPointList](#floatingpointlist)
  * floatingPointMean [FloatingPointMean](#floatingpointmean)
  * integer [SplitInt64](#splitint64)
  * integerGauge [IntegerGauge](#integergauge)
  * integerList [IntegerList](#integerlist)
  * integerMean [IntegerMean](#integermean)
  * nameAndKind [NameAndKind](#nameandkind)
  * shortId `string`: The service-generated short identifier for this counter. The short_id -> (name, metadata) mapping is constant for the lifetime of a job.
  * stringList [StringList](#stringlist)
  * structuredNameAndMetadata [CounterStructuredNameAndMetadata](#counterstructurednameandmetadata)

### CreateJobFromTemplateRequest
* CreateJobFromTemplateRequest `object`: A request to create a Cloud Dataflow job from a template.
  * parameters `object`: The runtime parameters to pass to the job.
  * environment [RuntimeEnvironment](#runtimeenvironment)
  * gcsPath `string`: Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with `gs://`.
  * jobName `string`: Required. The job name to use for the created job.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.

### CreateTemplateVersionRequest
* CreateTemplateVersionRequest `object`: Creates a new Template with TemplateVersions.
  * templateVersion [TemplateVersion](#templateversion)

### CustomSourceLocation
* CustomSourceLocation `object`: Identifies the location of a custom souce.
  * stateful `boolean`: Whether this source is stateful.

### DataDiskAssignment
* DataDiskAssignment `object`: Data disk assignment for a given VM instance.
  * dataDisks `array`: Mounted data disks. The order is important a data disk's 0-based index in this list defines which persistent directory the disk is mounted to, for example the list of { "myproject-1014-104817-4c2-harness-0-disk-0" }, { "myproject-1014-104817-4c2-harness-0-disk-1" }.
    * items `string`
  * vmInstance `string`: VM instance name the data disks mounted to, for example "myproject-1014-104817-4c2-harness-0".

### DatastoreIODetails
* DatastoreIODetails `object`: Metadata for a Datastore connector used by the job.
  * namespace `string`: Namespace used in the connection.
  * projectId `string`: ProjectId accessed in the connection.

### DeleteSnapshotResponse
* DeleteSnapshotResponse `object`: Response from deleting a snapshot.

### DerivedSource
* DerivedSource `object`: Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split.
  * derivationMode `string` (values: SOURCE_DERIVATION_MODE_UNKNOWN, SOURCE_DERIVATION_MODE_INDEPENDENT, SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT, SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT): What source to base the produced source on (if any).
  * source [Source](#source)

### Disk
* Disk `object`: Describes the data disk used by a workflow job.
  * diskType `string`: Disk storage type, as defined by Google Compute Engine. This must be a disk type appropriate to the project and zone in which the workers will run. If unknown or unspecified, the service will attempt to choose a reasonable default. For example, the standard persistent disk type is a resource name typically ending in "pd-standard". If SSD persistent disks are available, the resource name typically ends with "pd-ssd". The actual valid values are defined the Google Compute Engine API, not by the Cloud Dataflow API; consult the Google Compute Engine documentation for more information about determining the set of available disk types for a particular project and zone. Google Compute Engine Disk types are local to a particular project in a particular zone, and so the resource name will typically look something like this: compute.googleapis.com/projects/project-id/zones/zone/diskTypes/pd-standard
  * mountPoint `string`: Directory in a VM where disk is mounted.
  * sizeGb `integer`: Size of disk in GB. If zero or unspecified, the service will attempt to choose a reasonable default.

### DisplayData
* DisplayData `object`: Data provided with a pipeline or transform to provide descriptive info.
  * boolValue `boolean`: Contains value if the data is of a boolean type.
  * durationValue `string`: Contains value if the data is of duration type.
  * floatValue `number`: Contains value if the data is of float type.
  * int64Value `string`: Contains value if the data is of int64 type.
  * javaClassValue `string`: Contains value if the data is of java class type.
  * key `string`: The key identifying the display data. This is intended to be used as a label for the display data when viewed in a dax monitoring system.
  * label `string`: An optional label to display in a dax UI for the element.
  * namespace `string`: The namespace for the key. This is usually a class name or programming language namespace (i.e. python module) which defines the display data. This allows a dax monitoring system to specially handle the data and perform custom rendering.
  * shortStrValue `string`: A possible additional shorter value to display. For example a java_class_name_value of com.mypackage.MyDoFn will be stored with MyDoFn as the short_str_value and com.mypackage.MyDoFn as the java_class_name value. short_str_value can be displayed and java_class_name_value will be displayed as a tooltip.
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
* DynamicSourceSplit `object`: When a task splits using WorkItemStatus.dynamic_source_split, this message describes the two parts of the split relative to the description of the current task's input.
  * primary [DerivedSource](#derivedsource)
  * residual [DerivedSource](#derivedsource)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### Environment
* Environment `object`: Describes the environment in which a Dataflow Job runs.
  * clusterManagerApiService `string`: The type of cluster manager API to use. If unknown or unspecified, the service will attempt to choose a reasonable default. This should be in the form of the API service name, e.g. "compute.googleapis.com".
  * dataset `string`: The dataset for the current project where various workflow related tables are stored. The supported resource type is: Google BigQuery: bigquery.googleapis.com/{dataset}
  * experiments `array`: The list of experiments to enable.
    * items `string`
  * flexResourceSchedulingGoal `string` (values: FLEXRS_UNSPECIFIED, FLEXRS_SPEED_OPTIMIZED, FLEXRS_COST_OPTIMIZED): Which Flexible Resource Scheduling mode to run in.
  * internalExperiments `object`: Experimental settings.
  * sdkPipelineOptions `object`: The Cloud Dataflow SDK pipeline options specified by the user. These options are passed through the service and are used to recreate the SDK pipeline options on the worker in a language agnostic and platform independent way.
  * serviceAccountEmail `string`: Identity to run virtual machines as. Defaults to the default account.
  * serviceKmsKeyName `string`: If set, contains the Cloud KMS key identifier used to encrypt data at rest, AKA a Customer Managed Encryption Key (CMEK). Format: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY
  * tempStoragePrefix `string`: The prefix of the resources the system should use for temporary storage. The system will append the suffix "/temp-{JOBNAME} to this resource prefix, where {JOBNAME} is the value of the job_name field. The resulting bucket and object prefix is used as the prefix of the resources used to store temporary data needed during the job execution. NOTE: This will override the value in taskrunner_settings. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
  * userAgent `object`: A description of the process that generated the request.
  * version `object`: A structure describing which components and their versions of the service are required in order to run the job.
  * workerPools `array`: The worker pools. At least one "harness" worker pool must be specified in order for the job to have workers.
    * items [WorkerPool](#workerpool)
  * workerRegion `string`: The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region.
  * workerZone `string`: The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity.

### ExecutionStageState
* ExecutionStageState `object`: A message describing the state of a particular execution stage.
  * currentStateTime `string`: The time at which the stage transitioned to this state.
  * executionStageName `string`: The name of the execution stage.
  * executionStageState `string` (values: JOB_STATE_UNKNOWN, JOB_STATE_STOPPED, JOB_STATE_RUNNING, JOB_STATE_DONE, JOB_STATE_FAILED, JOB_STATE_CANCELLED, JOB_STATE_UPDATED, JOB_STATE_DRAINING, JOB_STATE_DRAINED, JOB_STATE_PENDING, JOB_STATE_CANCELLING, JOB_STATE_QUEUED, JOB_STATE_RESOURCE_CLEANING_UP): Executions stage states allow the same set of values as JobState.

### ExecutionStageSummary
* ExecutionStageSummary `object`: Description of the composing transforms, names/ids, and input/outputs of a stage of execution. Some composing transforms and sources may have been generated by the Dataflow service during execution planning.
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
  * prerequisiteStage `array`: Other stages that must complete before this stage can run.
    * items `string`

### FailedLocation
* FailedLocation `object`: Indicates which [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) failed to respond to a request for data.
  * name `string`: The name of the [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that failed to respond.

### FileIODetails
* FileIODetails `object`: Metadata for a File connector used by the job.
  * filePattern `string`: File Pattern used to access files by the connector.

### FlattenInstruction
* FlattenInstruction `object`: An instruction that copies its inputs (zero or more) to its (single) output.
  * inputs `array`: Describes the inputs to the flatten instruction.
    * items [InstructionInput](#instructioninput)

### FlexTemplateRuntimeEnvironment
* FlexTemplateRuntimeEnvironment `object`: The environment values to be set at runtime for flex template.
  * additionalExperiments `array`: Additional experiment flags for the job.
    * items `string`
  * additionalUserLabels `object`: Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }.
  * enableStreamingEngine `boolean`: Whether to enable Streaming Engine for the job.
  * ipConfiguration `string` (values: WORKER_IP_UNSPECIFIED, WORKER_IP_PUBLIC, WORKER_IP_PRIVATE): Configuration for VM IPs.
  * kmsKeyName `string`: Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/
  * machineType `string`: The machine type to use for the job. Defaults to the value from the template if not specified.
  * maxWorkers `integer`: The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.
  * network `string`: Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".
  * numWorkers `integer`: The initial number of Google Compute Engine instances for the job.
  * serviceAccountEmail `string`: The email address of the service account to run the job as.
  * subnetwork `string`: Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.
  * tempLocation `string`: The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`.
  * workerRegion `string`: The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region.
  * workerZone `string`: The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence.
  * zone `string`: The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence.

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
  * componentId `string`: The internal component id for which debug configuration is requested.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
  * workerId `string`: The worker id, i.e., VM hostname.

### GetDebugConfigResponse
* GetDebugConfigResponse `object`: Response to a get debug configuration request.
  * config `string`: The encoded debug configuration for the requested component.

### GetTemplateResponse
* GetTemplateResponse `object`: The response to a GetTemplate request.
  * metadata [TemplateMetadata](#templatemetadata)
  * runtimeMetadata [RuntimeMetadata](#runtimemetadata)
  * status [Status](#status)
  * templateType `string` (values: UNKNOWN, LEGACY, FLEX): Template Type.

### Histogram
* Histogram `object`: Histogram of value counts for a distribution. Buckets have an inclusive lower bound and exclusive upper bound and use "1,2,5 bucketing": The first bucket range is from [0,1) and all subsequent bucket boundaries are powers of ten multiplied by 1, 2, or 5. Thus, bucket boundaries are 0, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, ... Negative values are not supported.
  * bucketCounts `array`: Counts of values in each bucket. For efficiency, prefix and trailing buckets with count = 0 are elided. Buckets can store the full range of values of an unsigned long, with ULLONG_MAX falling into the 59th bucket with range [1e19, 2e19).
    * items `string`
  * firstBucketOffset `integer`: Starting index of first stored bucket. The non-inclusive upper-bound of the ith bucket is given by: pow(10,(i-first_bucket_offset)/3) * (1,2,5)[(i-first_bucket_offset)%3]

### HotKeyDetection
* HotKeyDetection `object`: Proto describing a hot key detected on a given WorkItem.
  * hotKeyAge `string`: The age of the hot key measured from when it was first detected.
  * systemName `string`: System-defined name of the step containing this hot key. Unique across the workflow.
  * userStepName `string`: User-provided name of the step that contains this hot key.

### InstructionInput
* InstructionInput `object`: An input of an instruction, as a reference to an output of a producer instruction.
  * outputNum `integer`: The output index (origin zero) within the producer.
  * producerInstructionIndex `integer`: The index (origin zero) of the parallel instruction that produces the output to be consumed by this input. This index is relative to the list of instructions in this input's instruction's containing MapTask.

### InstructionOutput
* InstructionOutput `object`: An output of an instruction.
  * codec `object`: The codec to use to encode data being written via this output.
  * name `string`: The user-provided name of this output.
  * onlyCountKeyBytes `boolean`: For system-generated byte and mean byte metrics, certain instructions should only report the key size.
  * onlyCountValueBytes `boolean`: For system-generated byte and mean byte metrics, certain instructions should only report the value size.
  * originalName `string`: System-defined name for this output in the original workflow graph. Outputs that do not contribute to an original instruction do not set this.
  * systemName `string`: System-defined name of this output. Unique across the workflow.

### IntegerGauge
* IntegerGauge `object`: A metric value representing temporal values of a variable.
  * timestamp `string`: The time at which this value was measured. Measured as msecs from epoch.
  * value [SplitInt64](#splitint64)

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
  * clientRequestId `string`: The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.
  * createTime `string`: The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service.
  * createdFromSnapshotId `string`: If this is specified, the job's initial state is populated from the given snapshot.
  * currentState `string` (values: JOB_STATE_UNKNOWN, JOB_STATE_STOPPED, JOB_STATE_RUNNING, JOB_STATE_DONE, JOB_STATE_FAILED, JOB_STATE_CANCELLED, JOB_STATE_UPDATED, JOB_STATE_DRAINING, JOB_STATE_DRAINED, JOB_STATE_PENDING, JOB_STATE_CANCELLING, JOB_STATE_QUEUED, JOB_STATE_RESOURCE_CLEANING_UP): The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.
  * currentStateTime `string`: The timestamp associated with the current state.
  * environment [Environment](#environment)
  * executionInfo [JobExecutionInfo](#jobexecutioninfo)
  * id `string`: The unique ID of this job. This field is set by the Cloud Dataflow service when the Job is created, and is immutable for the life of the job.
  * jobMetadata [JobMetadata](#jobmetadata)
  * labels `object`: User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
  * name `string`: The user-specified Cloud Dataflow job name. Only one Job with a given name may exist in a project at any given time. If a caller attempts to create a Job with the same name as an already-existing Job, the attempt returns the existing Job. The name must match the regular expression `[a-z]([-a-z0-9]{0,38}[a-z0-9])?`
  * pipelineDescription [PipelineDescription](#pipelinedescription)
  * projectId `string`: The ID of the Cloud Platform project that the job belongs to.
  * replaceJobId `string`: If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job.
  * replacedByJobId `string`: If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job.
  * requestedState `string` (values: JOB_STATE_UNKNOWN, JOB_STATE_STOPPED, JOB_STATE_RUNNING, JOB_STATE_DONE, JOB_STATE_FAILED, JOB_STATE_CANCELLED, JOB_STATE_UPDATED, JOB_STATE_DRAINING, JOB_STATE_DRAINED, JOB_STATE_PENDING, JOB_STATE_CANCELLING, JOB_STATE_QUEUED, JOB_STATE_RESOURCE_CLEANING_UP): The job's requested state. `UpdateJob` may be used to switch between the `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING` states, by setting requested_state. `UpdateJob` may also be used to directly set a job's requested state to `JOB_STATE_CANCELLED` or `JOB_STATE_DONE`, irrevocably terminating the job if it has not already reached a terminal state.
  * stageStates `array`: This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.
    * items [ExecutionStageState](#executionstagestate)
  * startTime `string`: The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service.
  * steps `array`: Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL.
    * items [Step](#step)
  * stepsLocation `string`: The GCS location where the steps are stored.
  * tempFiles `array`: A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
    * items `string`
  * transformNameMapping `object`: The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.
  * type `string` (values: JOB_TYPE_UNKNOWN, JOB_TYPE_BATCH, JOB_TYPE_STREAMING): The type of Cloud Dataflow job.

### JobExecutionDetails
* JobExecutionDetails `object`: Information about the execution of a job.
  * nextPageToken `string`: If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value.
  * stages `array`: The stages of the job execution.
    * items [StageSummary](#stagesummary)

### JobExecutionInfo
* JobExecutionInfo `object`: Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job.
  * stages `object`: A mapping from each stage to the information about that stage.

### JobExecutionStageInfo
* JobExecutionStageInfo `object`: Contains information about how a particular google.dataflow.v1beta3.Step will be executed.
  * stepName `array`: The steps associated with the execution stage. Note that stages may have several steps, and that a given step might be run by more than one stage.
    * items `string`

### JobMessage
* JobMessage `object`: A particular message pertaining to a Dataflow job.
  * id `string`: Deprecated.
  * messageImportance `string` (values: JOB_MESSAGE_IMPORTANCE_UNKNOWN, JOB_MESSAGE_DEBUG, JOB_MESSAGE_DETAILED, JOB_MESSAGE_BASIC, JOB_MESSAGE_WARNING, JOB_MESSAGE_ERROR): Importance level of the message.
  * messageText `string`: The text of the message.
  * time `string`: The timestamp of the message.

### JobMetadata
* JobMetadata `object`: Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view.
  * bigTableDetails `array`: Identification of a BigTable source used in the Dataflow job.
    * items [BigTableIODetails](#bigtableiodetails)
  * bigqueryDetails `array`: Identification of a BigQuery source used in the Dataflow job.
    * items [BigQueryIODetails](#bigqueryiodetails)
  * datastoreDetails `array`: Identification of a Datastore source used in the Dataflow job.
    * items [DatastoreIODetails](#datastoreiodetails)
  * fileDetails `array`: Identification of a File source used in the Dataflow job.
    * items [FileIODetails](#fileiodetails)
  * pubsubDetails `array`: Identification of a PubSub source used in the Dataflow job.
    * items [PubSubIODetails](#pubsubiodetails)
  * sdkVersion [SdkVersion](#sdkversion)
  * spannerDetails `array`: Identification of a Spanner source used in the Dataflow job.
    * items [SpannerIODetails](#spanneriodetails)

### JobMetrics
* JobMetrics `object`: JobMetrics contains a collection of metrics describing the detailed progress of a Dataflow job. Metrics correspond to user-defined and system-defined metrics in the job. This resource captures only the most recent values of each metric; time-series data can be queried for them (under the same metric names) from Cloud Monitoring.
  * metricTime `string`: Timestamp as of which metric values are current.
  * metrics `array`: All metrics for this job.
    * items [MetricUpdate](#metricupdate)

### KeyRangeDataDiskAssignment
* KeyRangeDataDiskAssignment `object`: Data disk assignment information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.
  * dataDisk `string`: The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1".
  * end `string`: The end (exclusive) of the key range.
  * start `string`: The start (inclusive) of the key range.

### KeyRangeLocation
* KeyRangeLocation `object`: Location information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.
  * dataDisk `string`: The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1".
  * deliveryEndpoint `string`: The physical location of this range assignment to be used for streaming computation cross-worker message delivery.
  * deprecatedPersistentDirectory `string`: DEPRECATED. The location of the persistent state for this range, as a persistent directory in the worker local filesystem.
  * end `string`: The end (exclusive) of the key range.
  * start `string`: The start (inclusive) of the key range.

### LaunchFlexTemplateParameter
* LaunchFlexTemplateParameter `object`: Launch FlexTemplate Parameter.
  * parameters `object`: The parameters for FlexTemplate. Ex. {"num_workers":"5"}
  * containerSpec [ContainerSpec](#containerspec)
  * containerSpecGcsPath `string`: Gcs path to a file with json serialized ContainerSpec as content.
  * environment [FlexTemplateRuntimeEnvironment](#flextemplateruntimeenvironment)
  * jobName `string`: Required. The job name to use for the created job. For update job request, job name should be same as the existing running job.
  * launchOptions `object`: Launch options for this flex template job. This is a common set of options across languages and templates. This should not be used to pass job parameters.
  * transformNameMappings `object`: Users need to set transform_name_mappings Ex:{"oldTransformName":"newTransformName",...}'
  * update `boolean`: Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job.

### LaunchFlexTemplateRequest
* LaunchFlexTemplateRequest `object`: A request to launch a Cloud Dataflow job from a FlexTemplate.
  * launchParameter [LaunchFlexTemplateParameter](#launchflextemplateparameter)
  * validateOnly `boolean`: If true, the request is validated but not actually executed. Defaults to false.

### LaunchFlexTemplateResponse
* LaunchFlexTemplateResponse `object`: Response to the request to launch a job from Flex Template.
  * job [Job](#job)

### LaunchTemplateParameters
* LaunchTemplateParameters `object`: Parameters to provide to the template being launched.
  * parameters `object`: The runtime parameters to pass to the job.
  * environment [RuntimeEnvironment](#runtimeenvironment)
  * jobName `string`: Required. The job name to use for the created job.
  * transformNameMapping `object`: Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.
  * update `boolean`: If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.

### LaunchTemplateResponse
* LaunchTemplateResponse `object`: Response to the request to launch a template.
  * job [Job](#job)

### LeaseWorkItemRequest
* LeaseWorkItemRequest `object`: Request to lease WorkItems.
  * currentWorkerTime `string`: The current timestamp at the worker.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.
  * requestedLeaseDuration `string`: The initial lease period.
  * unifiedWorkerRequest `object`: Untranslated bag-of-bytes WorkRequest from UnifiedWorker.
  * workItemTypes `array`: Filter for WorkItem type.
    * items `string`
  * workerCapabilities `array`: Worker capabilities. WorkItems might be limited to workers with specific capabilities.
    * items `string`
  * workerId `string`: Identifies the worker leasing work -- typically the ID of the virtual machine running the worker.

### LeaseWorkItemResponse
* LeaseWorkItemResponse `object`: Response to a request to lease WorkItems.
  * unifiedWorkerResponse `object`: Untranslated bag-of-bytes WorkResponse for UnifiedWorker.
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
* ListJobsResponse `object`: Response to a request to list Cloud Dataflow jobs in a project. This might be a partial response, depending on the page size in the ListJobsRequest. However, if the project does not have any jobs, an instance of ListJobsResponse is not returned and the requests's response body is empty {}.
  * failedLocation `array`: Zero or more messages describing the [regional endpoints] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that failed to respond.
    * items [FailedLocation](#failedlocation)
  * jobs `array`: A subset of the requested job information.
    * items [Job](#job)
  * nextPageToken `string`: Set if there may be more results than fit in this response.

### ListSnapshotsResponse
* ListSnapshotsResponse `object`: List of snapshots.
  * snapshots `array`: Returned snapshots.
    * items [Snapshot](#snapshot)

### ListTemplateVersionsResponse
* ListTemplateVersionsResponse `object`: Respond a list of TemplateVersions.
  * nextPageToken `string`: A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * templateVersions `array`: A list of TemplateVersions.
    * items [TemplateVersion](#templateversion)

### MapTask
* MapTask `object`: MapTask consists of an ordered set of instructions, each of which describes one particular low-level operation for the worker to perform in order to accomplish the MapTask's WorkItem. Each instruction must appear in the list before any instructions which depends on its output.
  * counterPrefix `string`: Counter prefix that can be used to prefix counters. Not currently used in Dataflow.
  * instructions `array`: The instructions in the MapTask.
    * items [ParallelInstruction](#parallelinstruction)
  * stageName `string`: System-defined name of the stage containing this MapTask. Unique across the workflow.
  * systemName `string`: System-defined name of this MapTask. Unique across the workflow.

### MemInfo
* MemInfo `object`: Information about the memory usage of a worker or a container within a worker.
  * currentLimitBytes `string`: Instantenous memory limit in bytes.
  * currentRssBytes `string`: Instantenous memory (RSS) size in bytes.
  * timestamp `string`: Timestamp of the measurement.
  * totalGbMs `string`: Total memory (RSS) usage since start up in GB * ms.

### MetricShortId
* MetricShortId `object`: The metric short id is returned to the user alongside an offset into ReportWorkItemStatusRequest
  * metricIndex `integer`: The index of the corresponding metric in the ReportWorkItemStatusRequest. Required.
  * shortId `string`: The service-generated short identifier for the metric.

### MetricStructuredName
* MetricStructuredName `object`: Identifies a metric, by describing the source which generated the metric.
  * context `object`: Zero or more labeled fields which identify the part of the job this metric is associated with, such as the name of a step or collection. For example, built-in counters associated with steps will have context['step'] = . Counters associated with PCollections in the SDK will have context['pcollection'] = .
  * name `string`: Worker-defined metric name.
  * origin `string`: Origin (namespace) of metric name. May be blank for user-define metrics; will be "dataflow" for metrics defined by the Dataflow service or SDK.

### MetricUpdate
* MetricUpdate `object`: Describes the state of a metric.
  * cumulative `boolean`: True if this metric is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this metric is reported as a delta that is not associated with any WorkItem.
  * kind `string`: Metric aggregation kind. The possible metric aggregation kinds are "Sum", "Max", "Min", "Mean", "Set", "And", "Or", and "Distribution". The specified aggregation kind is case-insensitive. If omitted, this is not an aggregated value but instead a single metric sample value.
  * name [MetricStructuredName](#metricstructuredname)
  * updateTime `string`: Timestamp associated with the metric value. Optional when workers are reporting work progress; it will be filled in responses from the metrics API.

### ModifyTemplateVersionLabelRequest
* ModifyTemplateVersionLabelRequest `object`: Either add the label to TemplateVersion or remove it from the TemplateVersion.
  * key `string`: The label key for update.
  * op `string` (values: OPERATION_UNSPECIFIED, ADD, REMOVE): Requests for add label to TemplateVersion or remove label from TemplateVersion.
  * value `string`: The label value for update.

### ModifyTemplateVersionLabelResponse
* ModifyTemplateVersionLabelResponse `object`: Respond the labels in the TemplateVersion.
  * labels `object`: All the label in the TemplateVersion.

### ModifyTemplateVersionTagRequest
* ModifyTemplateVersionTagRequest `object`: Add a tag to the current TemplateVersion. If tag exist in another TemplateVersion in the Template, remove the tag before add it to the current TemplateVersion. If remove_only set, remove the tag from the current TemplateVersion.
  * removeOnly `boolean`: The flag that indicates if the request is only for remove tag from TemplateVersion.
  * tag `string`: The tag for update.

### ModifyTemplateVersionTagResponse
* ModifyTemplateVersionTagResponse `object`: Respond the current tags in the TemplateVersion.
  * tags `array`: All the tags in the TemplateVersion.
    * items `string`

### MountedDataDisk
* MountedDataDisk `object`: Describes mounted data disk.
  * dataDisk `string`: The name of the data disk. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1".

### MultiOutputInfo
* MultiOutputInfo `object`: Information about an output of a multi-output DoFn.
  * tag `string`: The id of the tag the user code will emit to this output by; this should correspond to the tag of some SideInputInfo.

### NameAndKind
* NameAndKind `object`: Basic metadata about a counter.
  * kind `string` (values: INVALID, SUM, MAX, MIN, MEAN, OR, AND, SET, DISTRIBUTION, LATEST_VALUE): Counter aggregation kind.
  * name `string`: Name of the counter.

### Package
* Package `object`: The packages that must be installed in order for a worker to run the steps of the Cloud Dataflow job that will be assigned to its worker pool. This is the mechanism by which the Cloud Dataflow SDK causes code to be loaded onto the workers. For example, the Cloud Dataflow Java SDK might use this to install jars containing the user's code and all of the various dependencies (libraries, data files, etc.) required in order for that code to run.
  * location `string`: The resource to read the package from. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket} bucket.storage.googleapis.com/
  * name `string`: The name of the package.

### ParDoInstruction
* ParDoInstruction `object`: An instruction that does a ParDo operation. Takes one main input and zero or more side inputs, and produces zero or more outputs. Runs user code.
  * input [InstructionInput](#instructioninput)
  * multiOutputInfos `array`: Information about each of the outputs, if user_fn is a MultiDoFn.
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
  * systemName `string`: System-defined name of this operation. Unique across the workflow.
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
  * paramType `string` (values: DEFAULT, TEXT, GCS_READ_BUCKET, GCS_WRITE_BUCKET, GCS_READ_FILE, GCS_WRITE_FILE, GCS_READ_FOLDER, GCS_WRITE_FOLDER, PUBSUB_TOPIC, PUBSUB_SUBSCRIPTION): Optional. The type of the parameter. Used for selecting input picker.
  * regexes `array`: Optional. Regexes that the parameter must match.
    * items `string`

### PartialGroupByKeyInstruction
* PartialGroupByKeyInstruction `object`: An instruction that does a partial group-by-key. One input and one output.
  * input [InstructionInput](#instructioninput)
  * inputElementCodec `object`: The codec to use for interpreting an element in the input PTable.
  * originalCombineValuesInputStoreName `string`: If this instruction includes a combining function this is the name of the intermediate store between the GBK and the CombineValues.
  * originalCombineValuesStepName `string`: If this instruction includes a combining function, this is the name of the CombineValues instruction lifted into this instruction.
  * sideInputs `array`: Zero or more side inputs.
    * items [SideInputInfo](#sideinputinfo)
  * valueCombiningFn `object`: The value combining function to invoke.

### PipelineDescription
* PipelineDescription `object`: A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics.
  * displayData `array`: Pipeline level display data.
    * items [DisplayData](#displaydata)
  * executionPipelineStage `array`: Description of each stage of execution of the pipeline.
    * items [ExecutionStageSummary](#executionstagesummary)
  * originalPipelineTransform `array`: Description of each transform in the pipeline and collections between them.
    * items [TransformSummary](#transformsummary)

### Point
* Point `object`: A point in the timeseries.
  * time `string`: The timestamp of the point.
  * value `number`: The value of the point.

### Position
* Position `object`: Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.
  * byteOffset `string`: Position is a byte offset.
  * concatPosition [ConcatPosition](#concatposition)
  * end `boolean`: Position is past all other positions. Also useful for the end position of an unbounded range.
  * key `string`: Position is a string key, ordered lexicographically.
  * recordIndex `string`: Position is a record index.
  * shufflePosition `string`: CloudPosition is a base64 encoded BatchShufflePosition (with FIXED sharding).

### ProgressTimeseries
* ProgressTimeseries `object`: Information about the progress of some component of job execution.
  * currentProgress `number`: The current progress of the component, in the range [0,1].
  * dataPoints `array`: History of progress for the component. Points are sorted by time.
    * items [Point](#point)

### PubSubIODetails
* PubSubIODetails `object`: Metadata for a PubSub connector used by the job.
  * subscription `string`: Subscription used in the connection.
  * topic `string`: Topic accessed in the connection.

### PubsubLocation
* PubsubLocation `object`: Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job.
  * dropLateData `boolean`: Indicates whether the pipeline allows late-arriving data.
  * idLabel `string`: If set, contains a pubsub label from which to extract record ids. If left empty, record deduplication will be strictly best effort.
  * subscription `string`: A pubsub subscription, in the form of "pubsub.googleapis.com/subscriptions//"
  * timestampLabel `string`: If set, contains a pubsub label from which to extract record timestamps. If left empty, record timestamps will be generated upon arrival.
  * topic `string`: A pubsub topic, in the form of "pubsub.googleapis.com/topics//"
  * trackingSubscription `string`: If set, specifies the pubsub subscription that will be used for tracking custom time timestamps for watermark estimation.
  * withAttributes `boolean`: If true, then the client has requested to get pubsub attributes.

### PubsubSnapshotMetadata
* PubsubSnapshotMetadata `object`: Represents a Pubsub snapshot.
  * expireTime `string`: The expire time of the Pubsub snapshot.
  * snapshotName `string`: The name of the Pubsub snapshot.
  * topicName `string`: The name of the Pubsub topic.

### QueryInfo
* QueryInfo `object`: Information about a validated query.
  * queryProperty `array`: Includes an entry for each satisfied QueryProperty.
    * items `string` (values: QUERY_PROPERTY_UNSPECIFIED, HAS_UNBOUNDED_SOURCE)

### ReadInstruction
* ReadInstruction `object`: An instruction that reads records. Takes no inputs, produces one output.
  * source [Source](#source)

### ReportWorkItemStatusRequest
* ReportWorkItemStatusRequest `object`: Request to report the status of WorkItems.
  * currentWorkerTime `string`: The current timestamp at the worker.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.
  * unifiedWorkerRequest `object`: Untranslated bag-of-bytes WorkProgressUpdateRequest from UnifiedWorker.
  * workItemStatuses `array`: The order is unimportant, except that the order of the WorkItemServiceState messages in the ReportWorkItemStatusResponse corresponds to the order of WorkItemStatus messages here.
    * items [WorkItemStatus](#workitemstatus)
  * workerId `string`: The ID of the worker reporting the WorkItem status. If this does not match the ID of the worker which the Dataflow service believes currently has the lease on the WorkItem, the report will be dropped (with an error response).

### ReportWorkItemStatusResponse
* ReportWorkItemStatusResponse `object`: Response from a request to report the status of WorkItems.
  * unifiedWorkerResponse `object`: Untranslated bag-of-bytes WorkProgressUpdateResponse for UnifiedWorker.
  * workItemServiceStates `array`: A set of messages indicating the service-side state for each WorkItem whose status was reported, in the same order as the WorkItemStatus messages in the ReportWorkItemStatusRequest which resulting in this response.
    * items [WorkItemServiceState](#workitemservicestate)

### ReportedParallelism
* ReportedParallelism `object`: Represents the level of parallelism in a WorkItem's input, reported by the worker.
  * isInfinite `boolean`: Specifies whether the parallelism is infinite. If true, "value" is ignored. Infinite parallelism means the service will assume that the work item can always be split into more non-empty work items by dynamic splitting. This is a work-around for lack of support for infinity by the current JSON-based Java RPC stack.
  * value `number`: Specifies the level of parallelism in case it is finite.

### ResourceUtilizationReport
* ResourceUtilizationReport `object`: Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals.
  * containers `object`: Per container information. Key: container name.
  * cpuTime `array`: CPU utilization samples.
    * items [CPUTime](#cputime)
  * memoryInfo `array`: Memory utilization samples.
    * items [MemInfo](#meminfo)

### ResourceUtilizationReportResponse
* ResourceUtilizationReportResponse `object`: Service-side response to WorkerMessage reporting resource utilization.

### RuntimeEnvironment
* RuntimeEnvironment `object`: The environment values to set at runtime.
  * additionalExperiments `array`: Additional experiment flags for the job.
    * items `string`
  * additionalUserLabels `object`: Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }.
  * bypassTempDirValidation `boolean`: Whether to bypass the safety checks for the job's temporary directory. Use with caution.
  * enableStreamingEngine `boolean`: Whether to enable Streaming Engine for the job.
  * ipConfiguration `string` (values: WORKER_IP_UNSPECIFIED, WORKER_IP_PUBLIC, WORKER_IP_PRIVATE): Configuration for VM IPs.
  * kmsKeyName `string`: Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/
  * machineType `string`: The machine type to use for the job. Defaults to the value from the template if not specified.
  * maxWorkers `integer`: The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.
  * network `string`: Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".
  * numWorkers `integer`: The initial number of Google Compute Engine instnaces for the job.
  * serviceAccountEmail `string`: The email address of the service account to run the job as.
  * subnetwork `string`: Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.
  * tempLocation `string`: The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`.
  * workerRegion `string`: The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region.
  * workerZone `string`: The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence.
  * zone `string`: The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence.

### RuntimeMetadata
* RuntimeMetadata `object`: RuntimeMetadata describing a runtime environment.
  * parameters `array`: The parameters for the template.
    * items [ParameterMetadata](#parametermetadata)
  * sdkInfo [SDKInfo](#sdkinfo)

### SDKInfo
* SDKInfo `object`: SDK Information.
  * language `string` (values: UNKNOWN, JAVA, PYTHON): Required. The SDK Language.
  * version `string`: Optional. The SDK version.

### SdkHarnessContainerImage
* SdkHarnessContainerImage `object`: Defines a SDK harness container for executing Dataflow pipelines.
  * containerImage `string`: A docker container image that resides in Google Container Registry.
  * useSingleCorePerContainer `boolean`: If true, recommends the Dataflow service to use only one core per SDK container instance with this image. If false (or unset) recommends using more than one core per SDK container instance with this image for efficiency. Note that Dataflow service may choose to override this property if needed.

### SdkVersion
* SdkVersion `object`: The version of the SDK used to run the job.
  * sdkSupportStatus `string` (values: UNKNOWN, SUPPORTED, STALE, DEPRECATED, UNSUPPORTED): The support status for this SDK version.
  * version `string`: The version of the SDK used to run the job.
  * versionDisplayName `string`: A readable string describing the version of the SDK.

### SendDebugCaptureRequest
* SendDebugCaptureRequest `object`: Request to send encoded debug information.
  * componentId `string`: The internal component id for which debug information is sent.
  * data `string`: The encoded debug information.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
  * workerId `string`: The worker id, i.e., VM hostname.

### SendDebugCaptureResponse
* SendDebugCaptureResponse `object`: Response to a send capture request. nothing

### SendWorkerMessagesRequest
* SendWorkerMessagesRequest `object`: A request for sending worker messages to the service.
  * location `string`: The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job.
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
  * stageName `string`: System-defined name of the stage containing the SeqDo operation. Unique across the workflow.
  * systemName `string`: System-defined name of the SeqDo operation. Unique across the workflow.
  * userFn `object`: The user function to invoke.

### SeqMapTaskOutputInfo
* SeqMapTaskOutputInfo `object`: Information about an output of a SeqMapTask.
  * sink [Sink](#sink)
  * tag `string`: The id of the TupleTag the user code will tag the output value by.

### ShellTask
* ShellTask `object`: A task which consists of a shell command for the worker to execute.
  * command `string`: The shell command to run.
  * exitCode `integer`: Exit code for the task.

### SideInputInfo
* SideInputInfo `object`: Information about a side input of a DoFn or an input of a SeqDoFn.
  * kind `object`: How to interpret the source element(s) as a side input value.
  * sources `array`: The source(s) to read element(s) from to get the value of this side input. If more than one source, then the elements are taken from the sources, in the specified order if order matters. At least one source is required.
    * items [Source](#source)
  * tag `string`: The id of the tag the user code will access this side input by; this should correspond to the tag of some MultiOutputInfo.

### Sink
* Sink `object`: A sink that records can be encoded and written to.
  * codec `object`: The codec to use to encode data written to the sink.
  * spec `object`: The sink to write to, plus its parameters.

### Snapshot
* Snapshot `object`: Represents a snapshot of a job.
  * creationTime `string`: The time this snapshot was created.
  * description `string`: User specified description of the snapshot. Maybe empty.
  * diskSizeBytes `string`: The disk byte size of the snapshot. Only available for snapshots in READY state.
  * id `string`: The unique ID of this snapshot.
  * projectId `string`: The project this snapshot belongs to.
  * pubsubMetadata `array`: PubSub snapshot metadata.
    * items [PubsubSnapshotMetadata](#pubsubsnapshotmetadata)
  * sourceJobId `string`: The job this snapshot was created from.
  * state `string` (values: UNKNOWN_SNAPSHOT_STATE, PENDING, RUNNING, READY, FAILED, DELETED): State of the snapshot.
  * ttl `string`: The time after which this snapshot will be automatically deleted.

### SnapshotJobRequest
* SnapshotJobRequest `object`: Request to create a snapshot of a job.
  * description `string`: User specified description of the snapshot. Maybe empty.
  * location `string`: The location that contains this job.
  * snapshotSources `boolean`: If true, perform snapshots for sources which support this.
  * ttl `string`: TTL for the snapshot.

### Source
* Source `object`: A source that records can be read and decoded from.
  * baseSpecs `array`: While splitting, sources may specify the produced bundles as differences against another source, in order to save backend-side memory and allow bigger jobs. For details, see SourceSplitRequest. To support this use case, the full set of parameters of the source is logically obtained by taking the latest explicitly specified value of each parameter in the order: base_specs (later items win), spec (overrides anything in base_specs).
    * items `object`
  * codec `object`: The codec to use to decode data read from the source.
  * doesNotNeedSplitting `boolean`: Setting this value to true hints to the framework that the source doesn't need splitting, and using SourceSplitRequest on it would yield SOURCE_SPLIT_OUTCOME_USE_CURRENT. E.g. a file splitter may set this to true when splitting a single file into a set of byte ranges of appropriate size, and set this to false when splitting a filepattern into individual files. However, for efficiency, a file splitter may decide to produce file subranges directly from the filepattern to avoid a splitting round-trip. See SourceSplitRequest for an overview of the splitting process. This field is meaningful only in the Source objects populated by the user (e.g. when filling in a DerivedSource). Source objects supplied by the framework to the user don't have this field populated.
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
* SourceMetadata `object`: Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc.
  * estimatedSizeBytes `string`: An estimate of the total size (in bytes) of the data that would be read from this source. This estimate is in terms of external storage size, before any decompression or other processing done by the reader.
  * infinite `boolean`: Specifies that the size of this source is known to be infinite (this is a streaming source).
  * producesSortedKeys `boolean`: Whether this source is known to produce key/value pairs with the (encoded) keys in lexicographically sorted order.

### SourceOperationRequest
* SourceOperationRequest `object`: A work item that represents the different operations that can be performed on a user-defined Source specification.
  * getMetadata [SourceGetMetadataRequest](#sourcegetmetadatarequest)
  * name `string`: User-provided name of the Read instruction for this source.
  * originalName `string`: System-defined name for the Read instruction for this source in the original workflow graph.
  * split [SourceSplitRequest](#sourcesplitrequest)
  * stageName `string`: System-defined name of the stage containing the source operation. Unique across the workflow.
  * systemName `string`: System-defined name of the Read instruction for this source. Unique across the workflow.

### SourceOperationResponse
* SourceOperationResponse `object`: The result of a SourceOperationRequest, specified in ReportWorkItemStatusRequest.source_operation when the work item is completed.
  * getMetadata [SourceGetMetadataResponse](#sourcegetmetadataresponse)
  * split [SourceSplitResponse](#sourcesplitresponse)

### SourceSplitOptions
* SourceSplitOptions `object`: Hints for splitting a Source into bundles (parts for parallel processing) using SourceSplitRequest.
  * desiredBundleSizeBytes `string`: The source should be split into a set of bundles where the estimated size of each is approximately this many bytes.
  * desiredShardSizeBytes `string`: DEPRECATED in favor of desired_bundle_size_bytes.

### SourceSplitRequest
* SourceSplitRequest `object`: Represents the operation to split a high-level Source specification into bundles (parts for parallel processing). At a high level, splitting of a source into bundles happens as follows: SourceSplitRequest is applied to the source. If it returns SOURCE_SPLIT_OUTCOME_USE_CURRENT, no further splitting happens and the source is used "as is". Otherwise, splitting is applied recursively to each produced DerivedSource. As an optimization, for any Source, if its does_not_need_splitting is true, the framework assumes that splitting this source would return SOURCE_SPLIT_OUTCOME_USE_CURRENT, and doesn't initiate a SourceSplitRequest. This applies both to the initial source being split and to bundles produced from it.
  * options [SourceSplitOptions](#sourcesplitoptions)
  * source [Source](#source)

### SourceSplitResponse
* SourceSplitResponse `object`: The response to a SourceSplitRequest.
  * bundles `array`: If outcome is SPLITTING_HAPPENED, then this is a list of bundles into which the source was split. Otherwise this field is ignored. This list can be empty, which means the source represents an empty input.
    * items [DerivedSource](#derivedsource)
  * outcome `string` (values: SOURCE_SPLIT_OUTCOME_UNKNOWN, SOURCE_SPLIT_OUTCOME_USE_CURRENT, SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED): Indicates whether splitting happened and produced a list of bundles. If this is USE_CURRENT_SOURCE_AS_IS, the current source should be processed "as is" without splitting. "bundles" is ignored in this case. If this is SPLITTING_HAPPENED, then "bundles" contains a list of bundles into which the source was split.
  * shards `array`: DEPRECATED in favor of bundles.
    * items [SourceSplitShard](#sourcesplitshard)

### SourceSplitShard
* SourceSplitShard `object`: DEPRECATED in favor of DerivedSource.
  * derivationMode `string` (values: SOURCE_DERIVATION_MODE_UNKNOWN, SOURCE_DERIVATION_MODE_INDEPENDENT, SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT, SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT): DEPRECATED
  * source [Source](#source)

### SpannerIODetails
* SpannerIODetails `object`: Metadata for a Spanner connector used by the job.
  * databaseId `string`: DatabaseId accessed in the connection.
  * instanceId `string`: InstanceId accessed in the connection.
  * projectId `string`: ProjectId accessed in the connection.

### SplitInt64
* SplitInt64 `object`: A representation of an int64, n, that is immune to precision loss when encoded in JSON.
  * highBits `integer`: The high order bits, including the sign: n >> 32.
  * lowBits `integer`: The low order bits: n & 0xffffffff.

### StageExecutionDetails
* StageExecutionDetails `object`: Information about the workers and work items within a stage.
  * nextPageToken `string`: If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value.
  * workers `array`: Workers that have done work on the stage.
    * items [WorkerDetails](#workerdetails)

### StageSource
* StageSource `object`: Description of an input or output of an execution stage.
  * name `string`: Dataflow service generated name for this source.
  * originalTransformOrCollection `string`: User name for the original user transform or collection with which this source is most closely associated.
  * sizeBytes `string`: Size of the source, if measurable.
  * userName `string`: Human-readable name for this source; may be user or system generated.

### StageSummary
* StageSummary `object`: Information about a particular execution stage of a job.
  * endTime `string`: End time of this stage. If the work item is completed, this is the actual end time of the stage. Otherwise, it is the predicted end time.
  * metrics `array`: Metrics for this stage.
    * items [MetricUpdate](#metricupdate)
  * progress [ProgressTimeseries](#progresstimeseries)
  * stageId `string`: ID of this stage
  * startTime `string`: Start time of this stage.
  * state `string` (values: EXECUTION_STATE_UNKNOWN, EXECUTION_STATE_NOT_STARTED, EXECUTION_STATE_RUNNING, EXECUTION_STATE_SUCCEEDED, EXECUTION_STATE_FAILED, EXECUTION_STATE_CANCELLED): State of this stage.

### StateFamilyConfig
* StateFamilyConfig `object`: State family configuration.
  * isRead `boolean`: If true, this family corresponds to a read operation.
  * stateFamily `string`: The state family value.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### Step
* Step `object`: Defines a particular step within a Cloud Dataflow job. A job consists of multiple steps, each of which performs some specific operation as part of the overall job. Data is typically passed from one step to another as part of the job. Here's an example of a sequence of steps which together implement a Map-Reduce job: * Read a collection of data from some source, parsing the collection's elements. * Validate the elements. * Apply a user-defined function to map each element to some value and extract an element-specific key value. * Group elements with the same key into a single element with that key, transforming a multiply-keyed collection into a uniquely-keyed collection. * Write the elements out to some data sink. Note that the Cloud Dataflow service may be used to run many different types of jobs, not just Map-Reduce.
  * kind `string`: The kind of step in the Cloud Dataflow job.
  * name `string`: The name that identifies the step. This must be unique for each step with respect to all other steps in the Cloud Dataflow job.
  * properties `object`: Named properties associated with the step. Each kind of predefined step has its own required set of properties. Must be provided on Create. Only retrieved with JOB_VIEW_ALL.

### StreamLocation
* StreamLocation `object`: Describes a stream of data, either as input to be processed or as output of a streaming Dataflow job.
  * customSourceLocation [CustomSourceLocation](#customsourcelocation)
  * pubsubLocation [PubsubLocation](#pubsublocation)
  * sideInputLocation [StreamingSideInputLocation](#streamingsideinputlocation)
  * streamingStageLocation [StreamingStageLocation](#streamingstagelocation)

### StreamingApplianceSnapshotConfig
* StreamingApplianceSnapshotConfig `object`: Streaming appliance snapshot configuration.
  * importStateEndpoint `string`: Indicates which endpoint is used to import appliance state.
  * snapshotId `string`: If set, indicates the snapshot id for the snapshot being performed.

### StreamingComputationConfig
* StreamingComputationConfig `object`: Configuration information for a single streaming computation.
  * computationId `string`: Unique identifier for this computation.
  * instructions `array`: Instructions that comprise the computation.
    * items [ParallelInstruction](#parallelinstruction)
  * stageName `string`: Stage name of this computation.
  * systemName `string`: System defined name for this computation.
  * transformUserNameToStateFamily `object`: Map from user name of stateful transforms in this stage to their state family.

### StreamingComputationRanges
* StreamingComputationRanges `object`: Describes full or partial data disk assignment information of the computation ranges.
  * computationId `string`: The ID of the computation.
  * rangeAssignments `array`: Data disk assignments for ranges from this computation.
    * items [KeyRangeDataDiskAssignment](#keyrangedatadiskassignment)

### StreamingComputationTask
* StreamingComputationTask `object`: A task which describes what action should be performed for the specified streaming computation ranges.
  * computationRanges `array`: Contains ranges of a streaming computation this task should apply to.
    * items [StreamingComputationRanges](#streamingcomputationranges)
  * dataDisks `array`: Describes the set of data disks this task should apply to.
    * items [MountedDataDisk](#mounteddatadisk)
  * taskType `string` (values: STREAMING_COMPUTATION_TASK_UNKNOWN, STREAMING_COMPUTATION_TASK_STOP, STREAMING_COMPUTATION_TASK_START): A type of streaming computation task.

### StreamingConfigTask
* StreamingConfigTask `object`: A task that carries configuration information for streaming computations.
  * commitStreamChunkSizeBytes `string`: Chunk size for commit streams from the harness to windmill.
  * getDataStreamChunkSizeBytes `string`: Chunk size for get data streams from the harness to windmill.
  * maxWorkItemCommitBytes `string`: Maximum size for work item commit supported windmill storage layer.
  * streamingComputationConfigs `array`: Set of computation configuration information.
    * items [StreamingComputationConfig](#streamingcomputationconfig)
  * userStepToStateFamilyNameMap `object`: Map from user step names to state families.
  * windmillServiceEndpoint `string`: If present, the worker must use this endpoint to communicate with Windmill Service dispatchers, otherwise the worker must continue to use whatever endpoint it had been using.
  * windmillServicePort `string`: If present, the worker must use this port to communicate with Windmill Service dispatchers. Only applicable when windmill_service_endpoint is specified.

### StreamingSetupTask
* StreamingSetupTask `object`: A task which initializes part of a streaming Dataflow job.
  * drain `boolean`: The user has requested drain.
  * receiveWorkPort `integer`: The TCP port on which the worker should listen for messages from other streaming computation workers.
  * snapshotConfig [StreamingApplianceSnapshotConfig](#streamingappliancesnapshotconfig)
  * streamingComputationTopology [TopologyConfig](#topologyconfig)
  * workerHarnessPort `integer`: The TCP port used by the worker to communicate with the Dataflow worker harness.

### StreamingSideInputLocation
* StreamingSideInputLocation `object`: Identifies the location of a streaming side input.
  * stateFamily `string`: Identifies the state family where this side input is stored.
  * tag `string`: Identifies the particular side input within the streaming Dataflow job.

### StreamingStageLocation
* StreamingStageLocation `object`: Identifies the location of a streaming computation stage, for stage-to-stage communication.
  * streamId `string`: Identifies the particular stream within the streaming Dataflow job.

### StringList
* StringList `object`: A metric value representing a list of strings.
  * elements `array`: Elements of the list.
    * items `string`

### StructuredMessage
* StructuredMessage `object`: A rich message format, including a human readable string, a key for identifying the message, and structured data associated with the message for programmatic consumption.
  * parameters `array`: The structured data associated with this message.
    * items [Parameter](#parameter)
  * messageKey `string`: Identifier for this message type. Used by external systems to internationalize or personalize message.
  * messageText `string`: Human-readable version of message.

### TaskRunnerSettings
* TaskRunnerSettings `object`: Taskrunner configuration settings.
  * alsologtostderr `boolean`: Whether to also send taskrunner log info to stderr.
  * baseTaskDir `string`: The location on the worker for task-specific subdirectories.
  * baseUrl `string`: The base URL for the taskrunner to use when accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/"
  * commandlinesFileName `string`: The file to store preprocessing commands in.
  * continueOnException `boolean`: Whether to continue taskrunner if an exception is hit.
  * dataflowApiVersion `string`: The API version of endpoint, e.g. "v1b3"
  * harnessCommand `string`: The command to launch the worker harness.
  * languageHint `string`: The suggested backend language.
  * logDir `string`: The directory on the VM to store logs.
  * logToSerialconsole `boolean`: Whether to send taskrunner log info to Google Compute Engine VM serial console.
  * logUploadLocation `string`: Indicates where to put logs. If this is not specified, the logs will not be uploaded. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
  * oauthScopes `array`: The OAuth2 scopes to be requested by the taskrunner in order to access the Cloud Dataflow API.
    * items `string`
  * parallelWorkerSettings [WorkerSettings](#workersettings)
  * streamingWorkerMainClass `string`: The streaming worker main class name.
  * taskGroup `string`: The UNIX group ID on the worker VM to use for tasks launched by taskrunner; e.g. "wheel".
  * taskUser `string`: The UNIX user ID on the worker VM to use for tasks launched by taskrunner; e.g. "root".
  * tempStoragePrefix `string`: The prefix of the resources the taskrunner should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
  * vmId `string`: The ID string of the VM.
  * workflowFileName `string`: The file to store the workflow in.

### TemplateMetadata
* TemplateMetadata `object`: Metadata describing a template.
  * parameters `array`: The parameters for the template.
    * items [ParameterMetadata](#parametermetadata)
  * description `string`: Optional. A description of the template.
  * name `string`: Required. The name of the template.

### TemplateVersion
* TemplateVersion `object`: ///////////////////////////////////////////////////////////////////////////// //// Template Catalog is used to organize user TemplateVersions. //// TemplateVersions that have the same project_id and display_name are //// belong to the same Template. //// Templates with the same project_id belong to the same Project. //// TemplateVersion may have labels and multiple labels are allowed. //// Duplicated labels in the same `TemplateVersion` are not allowed. //// TemplateVersion may have tags and multiple tags are allowed. Duplicated //// tags in the same `Template` are not allowed!
  * tags `array`: Alias for version_id, helps locate a TemplateVersion.
    * items `string`
  * artifact [Artifact](#artifact)
  * createTime `string`: Creation time of this TemplateVersion.
  * description `string`: Template description from the user.
  * displayName `string`: A customized name for Template. Multiple TemplateVersions per Template.
  * labels `object`: Labels for the Template Version. Labels can be duplicate within Template.
  * projectId `string`: A unique project_id. Multiple Templates per Project.
  * type `string` (values: TEMPLATE_TYPE_UNSPECIFIED, LEGACY, FLEX): Either LEGACY or FLEX. This should match with the type of artifact.
  * versionId `string`: An auto generated version_id for TemplateVersion.

### TopologyConfig
* TopologyConfig `object`: Global topology of the streaming Dataflow job, including all computations and their sharded locations.
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
  * outputCollectionName `array`: User names for all collection outputs to this transform.
    * items `string`

### ValidateResponse
* ValidateResponse `object`: Response to the validation request.
  * errorMessage `string`: Will be empty if validation succeeds.
  * queryInfo [QueryInfo](#queryinfo)

### WorkItem
* WorkItem `object`: WorkItem represents basic information about a WorkItem to be executed in the cloud.
  * configuration `string`: Work item-specific configuration as an opaque blob.
  * id `string`: Identifies this WorkItem.
  * initialReportIndex `string`: The initial index to use when reporting the status of the WorkItem.
  * jobId `string`: Identifies the workflow job this WorkItem belongs to.
  * leaseExpireTime `string`: Time when the lease on this Work will expire.
  * mapTask [MapTask](#maptask)
  * packages `array`: Any required packages that need to be fetched in order to execute this WorkItem.
    * items [Package](#package)
  * projectId `string`: Identifies the cloud project this WorkItem belongs to.
  * reportStatusInterval `string`: Recommended reporting interval.
  * seqMapTask [SeqMapTask](#seqmaptask)
  * shellTask [ShellTask](#shelltask)
  * sourceOperationTask [SourceOperationRequest](#sourceoperationrequest)
  * streamingComputationTask [StreamingComputationTask](#streamingcomputationtask)
  * streamingConfigTask [StreamingConfigTask](#streamingconfigtask)
  * streamingSetupTask [StreamingSetupTask](#streamingsetuptask)

### WorkItemDetails
* WorkItemDetails `object`: Information about an individual work item execution.
  * attemptId `string`: Attempt ID of this work item
  * endTime `string`: End time of this work item attempt. If the work item is completed, this is the actual end time of the work item. Otherwise, it is the predicted end time.
  * metrics `array`: Metrics for this work item.
    * items [MetricUpdate](#metricupdate)
  * progress [ProgressTimeseries](#progresstimeseries)
  * startTime `string`: Start time of this work item attempt.
  * state `string` (values: EXECUTION_STATE_UNKNOWN, EXECUTION_STATE_NOT_STARTED, EXECUTION_STATE_RUNNING, EXECUTION_STATE_SUCCEEDED, EXECUTION_STATE_FAILED, EXECUTION_STATE_CANCELLED): State of this work item.
  * taskId `string`: Name of this work item.

### WorkItemServiceState
* WorkItemServiceState `object`: The Dataflow service's idea of the current state of a WorkItem being processed by a worker.
  * completeWorkStatus [Status](#status)
  * harnessData `object`: Other data returned by the service, specific to the particular worker harness.
  * hotKeyDetection [HotKeyDetection](#hotkeydetection)
  * leaseExpireTime `string`: Time at which the current lease will expire.
  * metricShortId `array`: The short ids that workers should use in subsequent metric updates. Workers should strive to use short ids whenever possible, but it is ok to request the short_id again if a worker lost track of it (e.g. if the worker is recovering from a crash). NOTE: it is possible that the response may have short ids for a subset of the metrics.
    * items [MetricShortId](#metricshortid)
  * nextReportIndex `string`: The index value to use for the next report sent by the worker. Note: If the report call fails for whatever reason, the worker should reuse this index for subsequent report attempts.
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
  * errors `array`: Specifies errors which occurred during processing. If errors are provided, and completed = true, then the WorkItem is considered to have failed.
    * items [Status](#status)
  * metricUpdates `array`: DEPRECATED in favor of counter_updates.
    * items [MetricUpdate](#metricupdate)
  * progress [ApproximateProgress](#approximateprogress)
  * reportIndex `string`: The report index. When a WorkItem is leased, the lease will contain an initial report index. When a WorkItem's status is reported to the system, the report should be sent with that report index, and the response will contain the index the worker should use for the next report. Reports received with unexpected index values will be rejected by the service. In order to preserve idempotency, the worker should not alter the contents of a report, even if the worker must submit the same report multiple times before getting back a response. The worker should not submit a subsequent report until the response for the previous report had been received from the service.
  * reportedProgress [ApproximateReportedProgress](#approximatereportedprogress)
  * requestedLeaseDuration `string`: Amount of time the worker requests for its lease.
  * sourceFork [SourceFork](#sourcefork)
  * sourceOperationResponse [SourceOperationResponse](#sourceoperationresponse)
  * stopPosition [Position](#position)
  * totalThrottlerWaitTimeSeconds `number`: Total time the worker spent being throttled by external systems.
  * workItemId `string`: Identifies the WorkItem.

### WorkerDetails
* WorkerDetails `object`: Information about a worker
  * workItems `array`: Work items processed by this worker, sorted by time.
    * items [WorkItemDetails](#workitemdetails)
  * workerName `string`: Name of this worker

### WorkerHealthReport
* WorkerHealthReport `object`: WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to.
  * msg `string`: A message describing any unusual health reports.
  * pods `array`: The pods running on the worker. See: http://kubernetes.io/v1.1/docs/api-reference/v1/definitions.html#_v1_pod This field is used by the worker to send the status of the indvidual containers running on each worker.
    * items `object`
  * reportInterval `string`: The interval at which the worker is sending health reports. The default value of 0 should be interpreted as the field is not being explicitly set by the worker.
  * vmIsBroken `boolean`: Whether the VM is in a permanently broken state. Broken VMs should be abandoned or deleted ASAP to avoid assigning or completing any work.
  * vmIsHealthy `boolean`: Whether the VM is currently healthy.
  * vmStartupTime `string`: The time the VM was booted.

### WorkerHealthReportResponse
* WorkerHealthReportResponse `object`: WorkerHealthReportResponse contains information returned to the worker in response to a health ping.
  * reportInterval `string`: A positive value indicates the worker should change its reporting interval to the specified value. The default value of zero means no change in report rate is requested by the server.

### WorkerLifecycleEvent
* WorkerLifecycleEvent `object`: A report of an event in a worker's lifecycle. The proto contains one event, because the worker is expected to asynchronously send each message immediately after the event. Due to this asynchrony, messages may arrive out of order (or missing), and it is up to the consumer to interpret. The timestamp of the event is in the enclosing WorkerMessage proto.
  * containerStartTime `string`: The start time of this container. All events will report this so that events can be grouped together across container/VM restarts.
  * event `string` (values: UNKNOWN_EVENT, OS_START, CONTAINER_START, NETWORK_UP, STAGING_FILES_DOWNLOAD_START, STAGING_FILES_DOWNLOAD_FINISH, SDK_INSTALL_START, SDK_INSTALL_FINISH): The event being reported.
  * metadata `object`: Other stats that can accompany an event. E.g. { "downloaded_bytes" : "123456" }

### WorkerMessage
* WorkerMessage `object`: WorkerMessage provides information to the backend about a worker.
  * labels `object`: Labels are used to group WorkerMessages. For example, a worker_message about a particular container might have the labels: { "JOB_ID": "2015-04-22", "WORKER_ID": "wordcount-vm-2015…" "CONTAINER_TYPE": "worker", "CONTAINER_ID": "ac1234def"} Label tags typically correspond to Label enum values. However, for ease of development other strings can be used as tags. LABEL_UNSPECIFIED should not be used here.
  * time `string`: The timestamp of the worker_message.
  * workerHealthReport [WorkerHealthReport](#workerhealthreport)
  * workerLifecycleEvent [WorkerLifecycleEvent](#workerlifecycleevent)
  * workerMessageCode [WorkerMessageCode](#workermessagecode)
  * workerMetrics [ResourceUtilizationReport](#resourceutilizationreport)
  * workerShutdownNotice [WorkerShutdownNotice](#workershutdownnotice)

### WorkerMessageCode
* WorkerMessageCode `object`: A message code is used to report status and error messages to the service. The message codes are intended to be machine readable. The service will take care of translating these into user understandable messages if necessary. Example use cases: 1. Worker processes reporting successful startup. 2. Worker processes reporting specific errors (e.g. package staging failure).
  * parameters `object`: Parameters contains specific information about the code. This is a struct to allow parameters of different types. Examples: 1. For a "HARNESS_STARTED" message parameters might provide the name of the worker and additional data like timing information. 2. For a "GCS_DOWNLOAD_ERROR" parameters might contain fields listing the GCS objects being downloaded and fields containing errors. In general complex data structures should be avoided. If a worker needs to send a specific and complicated data structure then please consider defining a new proto and adding it to the data oneof in WorkerMessageResponse. Conventions: Parameters should only be used for information that isn't typically passed as a label. hostname and other worker identifiers should almost always be passed as labels since they will be included on most messages.
  * code `string`: The code is a string intended for consumption by a machine that identifies the type of message being sent. Examples: 1. "HARNESS_STARTED" might be used to indicate the worker harness has started. 2. "GCS_DOWNLOAD_ERROR" might be used to indicate an error downloading a GCS file as part of the boot process of one of the worker containers. This is a string and not an enum to make it easy to add new codes without waiting for an API change.

### WorkerMessageResponse
* WorkerMessageResponse `object`: A worker_message response allows the server to pass information to the sender.
  * workerHealthReportResponse [WorkerHealthReportResponse](#workerhealthreportresponse)
  * workerMetricsResponse [ResourceUtilizationReportResponse](#resourceutilizationreportresponse)
  * workerShutdownNoticeResponse [WorkerShutdownNoticeResponse](#workershutdownnoticeresponse)

### WorkerPool
* WorkerPool `object`: Describes one particular pool of Cloud Dataflow workers to be instantiated by the Cloud Dataflow service in order to perform the computations required by a job. Note that a workflow job may use multiple pools, in order to match the various computational requirements of the various stages of the job.
  * autoscalingSettings [AutoscalingSettings](#autoscalingsettings)
  * dataDisks `array`: Data disks that are used by a VM in this workflow.
    * items [Disk](#disk)
  * defaultPackageSet `string` (values: DEFAULT_PACKAGE_SET_UNKNOWN, DEFAULT_PACKAGE_SET_NONE, DEFAULT_PACKAGE_SET_JAVA, DEFAULT_PACKAGE_SET_PYTHON): The default package set to install. This allows the service to select a default set of packages which are useful to worker harnesses written in a particular language.
  * diskSizeGb `integer`: Size of root disk for VMs, in GB. If zero or unspecified, the service will attempt to choose a reasonable default.
  * diskSourceImage `string`: Fully qualified source image for disks.
  * diskType `string`: Type of root disk for VMs. If empty or unspecified, the service will attempt to choose a reasonable default.
  * ipConfiguration `string` (values: WORKER_IP_UNSPECIFIED, WORKER_IP_PUBLIC, WORKER_IP_PRIVATE): Configuration for VM IPs.
  * kind `string`: The kind of the worker pool; currently only `harness` and `shuffle` are supported.
  * machineType `string`: Machine type (e.g. "n1-standard-1"). If empty or unspecified, the service will attempt to choose a reasonable default.
  * metadata `object`: Metadata to set on the Google Compute Engine VMs.
  * network `string`: Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".
  * numThreadsPerWorker `integer`: The number of threads per worker harness. If empty or unspecified, the service will choose a number of threads (according to the number of cores on the selected machine type for batch, or 1 by convention for streaming).
  * numWorkers `integer`: Number of Google Compute Engine workers in this pool needed to execute the job. If zero or unspecified, the service will attempt to choose a reasonable default.
  * onHostMaintenance `string`: The action to take on host maintenance, as defined by the Google Compute Engine API.
  * packages `array`: Packages to be installed on workers.
    * items [Package](#package)
  * poolArgs `object`: Extra arguments for this worker pool.
  * sdkHarnessContainerImages `array`: Set of SDK harness containers needed to execute this pipeline. This will only be set in the Fn API path. For non-cross-language pipelines this should have only one entry. Cross-language pipelines will have two or more entries.
    * items [SdkHarnessContainerImage](#sdkharnesscontainerimage)
  * subnetwork `string`: Subnetwork to which VMs will be assigned, if desired. Expected to be of the form "regions/REGION/subnetworks/SUBNETWORK".
  * taskrunnerSettings [TaskRunnerSettings](#taskrunnersettings)
  * teardownPolicy `string` (values: TEARDOWN_POLICY_UNKNOWN, TEARDOWN_ALWAYS, TEARDOWN_ON_SUCCESS, TEARDOWN_NEVER): Sets the policy for determining when to turndown worker pool. Allowed values are: `TEARDOWN_ALWAYS`, `TEARDOWN_ON_SUCCESS`, and `TEARDOWN_NEVER`. `TEARDOWN_ALWAYS` means workers are always torn down regardless of whether the job succeeds. `TEARDOWN_ON_SUCCESS` means workers are torn down if the job succeeds. `TEARDOWN_NEVER` means the workers are never torn down. If the workers are not torn down by the service, they will continue to run and use Google Compute Engine VM resources in the user's project until they are explicitly terminated by the user. Because of this, Google recommends using the `TEARDOWN_ALWAYS` policy except for small, manually supervised test jobs. If unknown or unspecified, the service will attempt to choose a reasonable default.
  * workerHarnessContainerImage `string`: Required. Docker container image that executes the Cloud Dataflow worker harness, residing in Google Container Registry. Deprecated for the Fn API path. Use sdk_harness_container_images instead.
  * zone `string`: Zone to run the worker pools in. If empty or unspecified, the service will attempt to choose a reasonable default.

### WorkerSettings
* WorkerSettings `object`: Provides data to pass through to the worker harness.
  * baseUrl `string`: The base URL for accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/"
  * reportingEnabled `boolean`: Whether to send work progress updates to the service.
  * servicePath `string`: The Cloud Dataflow service path relative to the root URL, for example, "dataflow/v1b3/projects".
  * shuffleServicePath `string`: The Shuffle service path relative to the root URL, for example, "shuffle/v1beta1".
  * tempStoragePrefix `string`: The prefix of the resources the system should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
  * workerId `string`: The ID of the worker running this pipeline.

### WorkerShutdownNotice
* WorkerShutdownNotice `object`: Shutdown notification from workers. This is to be sent by the shutdown script of the worker VM so that the backend knows that the VM is being shut down.
  * reason `string`: The reason for the worker shutdown. Current possible values are: "UNKNOWN": shutdown reason is unknown. "PREEMPTION": shutdown reason is preemption. Other possible reasons may be added in the future.

### WorkerShutdownNoticeResponse
* WorkerShutdownNoticeResponse `object`: Service-side response to WorkerMessage issuing shutdown notice.

### WriteInstruction
* WriteInstruction `object`: An instruction that writes records. Takes one input, produces no outputs.
  * input [InstructionInput](#instructioninput)
  * sink [Sink](#sink)


