# @datafire/google_dataflow

Client library for Google Dataflow

## Installation and Usage
```bash
npm install --save datafire @datafire/google_dataflow
```

```js
let datafire = require('datafire');
let google_dataflow = require('@datafire/google_dataflow').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_dataflow.oauthRefresh(null, context)
```


### projects.workerMessages
Send a worker_message to the service.


```js
google_dataflow.projects.workerMessages({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The project to send the WorkerMessages to.
* body (object) - A request for sending worker messages to the service.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.jobs.list
List the jobs of a project.


```js
google_dataflow.projects.jobs.list({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The project which owns the jobs.
* filter (string) - The kind of filter to use.
* location (string) - The location that contains this job.
* pageToken (string) - Set this to the 'next_page_token' field of a previous response
* pageSize (integer) - If there are many jobs, limit response to at most this many.
* view (string) - Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.jobs.create
Creates a Cloud Dataflow job.


```js
google_dataflow.projects.jobs.create({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The ID of the Cloud Platform project that the job belongs to.
* replaceJobId (string) - Deprecated. This field is now in the Job message.
* view (string) - The level of information requested in response.
* location (string) - The location that contains this job.
* body (object) - Defines a job to be run by the Cloud Dataflow service.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.jobs.get
Gets the state of the specified Cloud Dataflow job.


```js
google_dataflow.projects.jobs.get({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The ID of the Cloud Platform project that the job belongs to.
* jobId (string) **required** - The job ID.
* view (string) - The level of information requested in response.
* location (string) - The location that contains this job.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.jobs.update
Updates the state of an existing Cloud Dataflow job.


```js
google_dataflow.projects.jobs.update({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The ID of the Cloud Platform project that the job belongs to.
* jobId (string) **required** - The job ID.
* location (string) - The location that contains this job.
* body (object) - Defines a job to be run by the Cloud Dataflow service.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.jobs.debug.getConfig
Get encoded debug configuration for component. Not cacheable.


```js
google_dataflow.projects.jobs.debug.getConfig({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The project id.
* jobId (string) **required** - The job id.
* body (object) - Request to get updated debug configuration for component.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.jobs.debug.sendCapture
Send encoded debug capture data for component.


```js
google_dataflow.projects.jobs.debug.sendCapture({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The project id.
* jobId (string) **required** - The job id.
* body (object) - Request to send encoded debug information.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.jobs.messages.list
Request the job status.


```js
google_dataflow.projects.jobs.messages.list({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - A project id.
* jobId (string) **required** - The job to get messages about.
* location (string) - The location which contains the job specified by job_id.
* endTime (string) - Return only messages with timestamps < end_time. The default is now
* pageToken (string) - If supplied, this should be the value of next_page_token returned
* startTime (string) - If specified, return only messages with timestamps >= start_time.
* pageSize (integer) - If specified, determines the maximum number of messages to
* minimumImportance (string) - Filter to only get messages with importance >= level
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.jobs.getMetrics
Request the job status.


```js
google_dataflow.projects.jobs.getMetrics({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - A project id.
* jobId (string) **required** - The job to get messages for.
* location (string) - The location which contains the job specified by job_id.
* startTime (string) - Return only metric data that has changed since this time.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.jobs.workItems.lease
Leases a dataflow WorkItem to run.


```js
google_dataflow.projects.jobs.workItems.lease({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Identifies the project this worker belongs to.
* jobId (string) **required** - Identifies the workflow job this worker belongs to.
* body (object) - Request to lease WorkItems.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.jobs.workItems.reportStatus
Reports the status of dataflow WorkItems leased by a worker.


```js
google_dataflow.projects.jobs.workItems.reportStatus({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The project which owns the WorkItem's job.
* jobId (string) **required** - The job which the WorkItem is part of.
* body (object) - Request to report the status of WorkItems.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.locations.workerMessages
Send a worker_message to the service.


```js
google_dataflow.projects.locations.workerMessages({
  "location": "",
  "projectId": ""
}, context)
```

#### Parameters
* body (object) - A request for sending worker messages to the service.
* location (string) **required** - The location which contains the job
* projectId (string) **required** - The project to send the WorkerMessages to.
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

### projects.locations.jobs.list
List the jobs of a project.


```js
google_dataflow.projects.locations.jobs.list({
  "projectId": "",
  "location": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The project which owns the jobs.
* location (string) **required** - The location that contains this job.
* filter (string) - The kind of filter to use.
* pageToken (string) - Set this to the 'next_page_token' field of a previous response
* pageSize (integer) - If there are many jobs, limit response to at most this many.
* view (string) - Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.locations.jobs.create
Creates a Cloud Dataflow job.


```js
google_dataflow.projects.locations.jobs.create({
  "projectId": "",
  "location": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The ID of the Cloud Platform project that the job belongs to.
* location (string) **required** - The location that contains this job.
* replaceJobId (string) - Deprecated. This field is now in the Job message.
* view (string) - The level of information requested in response.
* body (object) - Defines a job to be run by the Cloud Dataflow service.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.locations.jobs.get
Gets the state of the specified Cloud Dataflow job.


```js
google_dataflow.projects.locations.jobs.get({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The ID of the Cloud Platform project that the job belongs to.
* location (string) **required** - The location that contains this job.
* jobId (string) **required** - The job ID.
* view (string) - The level of information requested in response.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.locations.jobs.update
Updates the state of an existing Cloud Dataflow job.


```js
google_dataflow.projects.locations.jobs.update({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The ID of the Cloud Platform project that the job belongs to.
* location (string) **required** - The location that contains this job.
* jobId (string) **required** - The job ID.
* body (object) - Defines a job to be run by the Cloud Dataflow service.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.locations.jobs.debug.getConfig
Get encoded debug configuration for component. Not cacheable.


```js
google_dataflow.projects.locations.jobs.debug.getConfig({
  "jobId": "",
  "location": "",
  "projectId": ""
}, context)
```

#### Parameters
* body (object) - Request to get updated debug configuration for component.
* jobId (string) **required** - The job id.
* location (string) **required** - The location which contains the job specified by job_id.
* projectId (string) **required** - The project id.
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

### projects.locations.jobs.debug.sendCapture
Send encoded debug capture data for component.


```js
google_dataflow.projects.locations.jobs.debug.sendCapture({
  "jobId": "",
  "location": "",
  "projectId": ""
}, context)
```

#### Parameters
* body (object) - Request to send encoded debug information.
* jobId (string) **required** - The job id.
* location (string) **required** - The location which contains the job specified by job_id.
* projectId (string) **required** - The project id.
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

### projects.locations.jobs.messages.list
Request the job status.


```js
google_dataflow.projects.locations.jobs.messages.list({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - A project id.
* location (string) **required** - The location which contains the job specified by job_id.
* jobId (string) **required** - The job to get messages about.
* endTime (string) - Return only messages with timestamps < end_time. The default is now
* startTime (string) - If specified, return only messages with timestamps >= start_time.
* pageToken (string) - If supplied, this should be the value of next_page_token returned
* pageSize (integer) - If specified, determines the maximum number of messages to
* minimumImportance (string) - Filter to only get messages with importance >= level
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.locations.jobs.getMetrics
Request the job status.


```js
google_dataflow.projects.locations.jobs.getMetrics({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - A project id.
* location (string) **required** - The location which contains the job specified by job_id.
* jobId (string) **required** - The job to get messages for.
* startTime (string) - Return only metric data that has changed since this time.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.locations.jobs.workItems.lease
Leases a dataflow WorkItem to run.


```js
google_dataflow.projects.locations.jobs.workItems.lease({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Identifies the project this worker belongs to.
* location (string) **required** - The location which contains the WorkItem's job.
* jobId (string) **required** - Identifies the workflow job this worker belongs to.
* body (object) - Request to lease WorkItems.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.locations.jobs.workItems.reportStatus
Reports the status of dataflow WorkItems leased by a worker.


```js
google_dataflow.projects.locations.jobs.workItems.reportStatus({
  "projectId": "",
  "location": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The project which owns the WorkItem's job.
* location (string) **required** - The location which contains the WorkItem's job.
* jobId (string) **required** - The job which the WorkItem is part of.
* body (object) - Request to report the status of WorkItems.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.locations.templates.create
Creates a Cloud Dataflow job from a template.


```js
google_dataflow.projects.locations.templates.create({
  "location": "",
  "projectId": ""
}, context)
```

#### Parameters
* body (object) - A request to create a Cloud Dataflow job from a template.
* location (string) **required** - The location to which to direct the request.
* projectId (string) **required** - Required. The ID of the Cloud Platform project that the job belongs to.
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

### projects.locations.templates.get
Get the template associated with a template.


```js
google_dataflow.projects.locations.templates.get({
  "location": "",
  "projectId": ""
}, context)
```

#### Parameters
* gcsPath (string) - Required. A Cloud Storage path to the template from which to
* location (string) **required** - The location to which to direct the request.
* projectId (string) **required** - Required. The ID of the Cloud Platform project that the job belongs to.
* view (string) - The view to retrieve. Defaults to METADATA_ONLY.
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

### projects.locations.templates.launch
Launch a template.


```js
google_dataflow.projects.locations.templates.launch({
  "location": "",
  "projectId": ""
}, context)
```

#### Parameters
* body (object) - Parameters to provide to the template being launched.
* gcsPath (string) - Required. A Cloud Storage path to the template from which to create
* location (string) **required** - The location to which to direct the request.
* projectId (string) **required** - Required. The ID of the Cloud Platform project that the job belongs to.
* validateOnly (boolean) - If true, the request is validated but not actually executed.
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

### projects.templates.create
Creates a Cloud Dataflow job from a template.


```js
google_dataflow.projects.templates.create({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Required. The ID of the Cloud Platform project that the job belongs to.
* body (object) - A request to create a Cloud Dataflow job from a template.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.templates.get
Get the template associated with a template.


```js
google_dataflow.projects.templates.get({
  "projectId": ""
}, context)
```

#### Parameters
* gcsPath (string) - Required. A Cloud Storage path to the template from which to
* location (string) - The location to which to direct the request.
* projectId (string) **required** - Required. The ID of the Cloud Platform project that the job belongs to.
* view (string) - The view to retrieve. Defaults to METADATA_ONLY.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

### projects.templates.launch
Launch a template.


```js
google_dataflow.projects.templates.launch({
  "projectId": ""
}, context)
```

#### Parameters
* body (object) - Parameters to provide to the template being launched.
* gcsPath (string) - Required. A Cloud Storage path to the template from which to create
* location (string) - The location to which to direct the request.
* projectId (string) **required** - Required. The ID of the Cloud Platform project that the job belongs to.
* validateOnly (boolean) - If true, the request is validated but not actually executed.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
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

