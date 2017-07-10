# @datafire/google_dataflow
Manages Google Cloud Dataflow projects on Google Cloud Platform.

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: projects.workerMessages
Send a worker_message to the service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The project to send the WorkerMessages to."
    },
    "body": {
      "$ref": "#/definitions/SendWorkerMessagesRequest"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SendWorkerMessagesResponse"
}
```
## Operation: projects.jobs.list
List the jobs of a project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The project which owns the jobs."
    },
    "filter": {
      "type": "string",
      "description": "The kind of filter to use.",
      "enum": [
        "UNKNOWN",
        "ALL",
        "TERMINATED",
        "ACTIVE"
      ]
    },
    "location": {
      "type": "string",
      "description": "The location that contains this job."
    },
    "pageToken": {
      "type": "string",
      "description": "Set this to the 'next_page_token' field of a previous response\nto request additional results in a long list."
    },
    "pageSize": {
      "type": "integer",
      "description": "If there are many jobs, limit response to at most this many.\nThe actual number of jobs returned will be the lesser of max_responses\nand an unspecified server-defined limit."
    },
    "view": {
      "type": "string",
      "description": "Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.",
      "enum": [
        "JOB_VIEW_UNKNOWN",
        "JOB_VIEW_SUMMARY",
        "JOB_VIEW_ALL",
        "JOB_VIEW_DESCRIPTION"
      ]
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListJobsResponse"
}
```
## Operation: projects.jobs.create
Creates a Cloud Dataflow job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The ID of the Cloud Platform project that the job belongs to."
    },
    "replaceJobId": {
      "type": "string",
      "description": "Deprecated. This field is now in the Job message."
    },
    "view": {
      "type": "string",
      "description": "The level of information requested in response.",
      "enum": [
        "JOB_VIEW_UNKNOWN",
        "JOB_VIEW_SUMMARY",
        "JOB_VIEW_ALL",
        "JOB_VIEW_DESCRIPTION"
      ]
    },
    "location": {
      "type": "string",
      "description": "The location that contains this job."
    },
    "body": {
      "$ref": "#/definitions/Job"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Job"
}
```
## Operation: projects.jobs.get
Gets the state of the specified Cloud Dataflow job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The ID of the Cloud Platform project that the job belongs to."
    },
    "jobId": {
      "type": "string",
      "description": "The job ID."
    },
    "view": {
      "type": "string",
      "description": "The level of information requested in response.",
      "enum": [
        "JOB_VIEW_UNKNOWN",
        "JOB_VIEW_SUMMARY",
        "JOB_VIEW_ALL",
        "JOB_VIEW_DESCRIPTION"
      ]
    },
    "location": {
      "type": "string",
      "description": "The location that contains this job."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Job"
}
```
## Operation: projects.jobs.update
Updates the state of an existing Cloud Dataflow job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The ID of the Cloud Platform project that the job belongs to."
    },
    "jobId": {
      "type": "string",
      "description": "The job ID."
    },
    "location": {
      "type": "string",
      "description": "The location that contains this job."
    },
    "body": {
      "$ref": "#/definitions/Job"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Job"
}
```
## Operation: projects.jobs.debug.getConfig
Get encoded debug configuration for component. Not cacheable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The project id."
    },
    "jobId": {
      "type": "string",
      "description": "The job id."
    },
    "body": {
      "$ref": "#/definitions/GetDebugConfigRequest"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetDebugConfigResponse"
}
```
## Operation: projects.jobs.debug.sendCapture
Send encoded debug capture data for component.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The project id."
    },
    "jobId": {
      "type": "string",
      "description": "The job id."
    },
    "body": {
      "$ref": "#/definitions/SendDebugCaptureRequest"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SendDebugCaptureResponse"
}
```
## Operation: projects.jobs.messages.list
Request the job status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A project id."
    },
    "jobId": {
      "type": "string",
      "description": "The job to get messages about."
    },
    "location": {
      "type": "string",
      "description": "The location which contains the job specified by job_id."
    },
    "endTime": {
      "type": "string",
      "description": "Return only messages with timestamps < end_time. The default is now\n(i.e. return up to the latest messages available)."
    },
    "pageToken": {
      "type": "string",
      "description": "If supplied, this should be the value of next_page_token returned\nby an earlier call. This will cause the next page of results to\nbe returned."
    },
    "startTime": {
      "type": "string",
      "description": "If specified, return only messages with timestamps >= start_time.\nThe default is the job creation time (i.e. beginning of messages)."
    },
    "pageSize": {
      "type": "integer",
      "description": "If specified, determines the maximum number of messages to\nreturn.  If unspecified, the service may choose an appropriate\ndefault, or may return an arbitrarily large number of results."
    },
    "minimumImportance": {
      "type": "string",
      "description": "Filter to only get messages with importance >= level",
      "enum": [
        "JOB_MESSAGE_IMPORTANCE_UNKNOWN",
        "JOB_MESSAGE_DEBUG",
        "JOB_MESSAGE_DETAILED",
        "JOB_MESSAGE_BASIC",
        "JOB_MESSAGE_WARNING",
        "JOB_MESSAGE_ERROR"
      ]
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListJobMessagesResponse"
}
```
## Operation: projects.jobs.getMetrics
Request the job status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A project id."
    },
    "jobId": {
      "type": "string",
      "description": "The job to get messages for."
    },
    "location": {
      "type": "string",
      "description": "The location which contains the job specified by job_id."
    },
    "startTime": {
      "type": "string",
      "description": "Return only metric data that has changed since this time.\nDefault is to return all information about all metrics for the job."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobMetrics"
}
```
## Operation: projects.jobs.workItems.lease
Leases a dataflow WorkItem to run.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "Identifies the project this worker belongs to."
    },
    "jobId": {
      "type": "string",
      "description": "Identifies the workflow job this worker belongs to."
    },
    "body": {
      "$ref": "#/definitions/LeaseWorkItemRequest"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeaseWorkItemResponse"
}
```
## Operation: projects.jobs.workItems.reportStatus
Reports the status of dataflow WorkItems leased by a worker.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The project which owns the WorkItem's job."
    },
    "jobId": {
      "type": "string",
      "description": "The job which the WorkItem is part of."
    },
    "body": {
      "$ref": "#/definitions/ReportWorkItemStatusRequest"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ReportWorkItemStatusResponse"
}
```
## Operation: projects.locations.workerMessages
Send a worker_message to the service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/SendWorkerMessagesRequest"
    },
    "location": {
      "type": "string",
      "description": "The location which contains the job"
    },
    "projectId": {
      "type": "string",
      "description": "The project to send the WorkerMessages to."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SendWorkerMessagesResponse"
}
```
## Operation: projects.locations.jobs.list
List the jobs of a project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The project which owns the jobs."
    },
    "location": {
      "type": "string",
      "description": "The location that contains this job."
    },
    "filter": {
      "type": "string",
      "description": "The kind of filter to use.",
      "enum": [
        "UNKNOWN",
        "ALL",
        "TERMINATED",
        "ACTIVE"
      ]
    },
    "pageToken": {
      "type": "string",
      "description": "Set this to the 'next_page_token' field of a previous response\nto request additional results in a long list."
    },
    "pageSize": {
      "type": "integer",
      "description": "If there are many jobs, limit response to at most this many.\nThe actual number of jobs returned will be the lesser of max_responses\nand an unspecified server-defined limit."
    },
    "view": {
      "type": "string",
      "description": "Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.",
      "enum": [
        "JOB_VIEW_UNKNOWN",
        "JOB_VIEW_SUMMARY",
        "JOB_VIEW_ALL",
        "JOB_VIEW_DESCRIPTION"
      ]
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "location"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListJobsResponse"
}
```
## Operation: projects.locations.jobs.create
Creates a Cloud Dataflow job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The ID of the Cloud Platform project that the job belongs to."
    },
    "location": {
      "type": "string",
      "description": "The location that contains this job."
    },
    "replaceJobId": {
      "type": "string",
      "description": "Deprecated. This field is now in the Job message."
    },
    "view": {
      "type": "string",
      "description": "The level of information requested in response.",
      "enum": [
        "JOB_VIEW_UNKNOWN",
        "JOB_VIEW_SUMMARY",
        "JOB_VIEW_ALL",
        "JOB_VIEW_DESCRIPTION"
      ]
    },
    "body": {
      "$ref": "#/definitions/Job"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "location"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Job"
}
```
## Operation: projects.locations.jobs.get
Gets the state of the specified Cloud Dataflow job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The ID of the Cloud Platform project that the job belongs to."
    },
    "location": {
      "type": "string",
      "description": "The location that contains this job."
    },
    "jobId": {
      "type": "string",
      "description": "The job ID."
    },
    "view": {
      "type": "string",
      "description": "The level of information requested in response.",
      "enum": [
        "JOB_VIEW_UNKNOWN",
        "JOB_VIEW_SUMMARY",
        "JOB_VIEW_ALL",
        "JOB_VIEW_DESCRIPTION"
      ]
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "location",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Job"
}
```
## Operation: projects.locations.jobs.update
Updates the state of an existing Cloud Dataflow job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The ID of the Cloud Platform project that the job belongs to."
    },
    "location": {
      "type": "string",
      "description": "The location that contains this job."
    },
    "jobId": {
      "type": "string",
      "description": "The job ID."
    },
    "body": {
      "$ref": "#/definitions/Job"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "location",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Job"
}
```
## Operation: projects.locations.jobs.debug.getConfig
Get encoded debug configuration for component. Not cacheable.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/GetDebugConfigRequest"
    },
    "jobId": {
      "type": "string",
      "description": "The job id."
    },
    "location": {
      "type": "string",
      "description": "The location which contains the job specified by job_id."
    },
    "projectId": {
      "type": "string",
      "description": "The project id."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "jobId",
    "location",
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetDebugConfigResponse"
}
```
## Operation: projects.locations.jobs.debug.sendCapture
Send encoded debug capture data for component.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/SendDebugCaptureRequest"
    },
    "jobId": {
      "type": "string",
      "description": "The job id."
    },
    "location": {
      "type": "string",
      "description": "The location which contains the job specified by job_id."
    },
    "projectId": {
      "type": "string",
      "description": "The project id."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "jobId",
    "location",
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SendDebugCaptureResponse"
}
```
## Operation: projects.locations.jobs.messages.list
Request the job status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A project id."
    },
    "location": {
      "type": "string",
      "description": "The location which contains the job specified by job_id."
    },
    "jobId": {
      "type": "string",
      "description": "The job to get messages about."
    },
    "endTime": {
      "type": "string",
      "description": "Return only messages with timestamps < end_time. The default is now\n(i.e. return up to the latest messages available)."
    },
    "startTime": {
      "type": "string",
      "description": "If specified, return only messages with timestamps >= start_time.\nThe default is the job creation time (i.e. beginning of messages)."
    },
    "pageToken": {
      "type": "string",
      "description": "If supplied, this should be the value of next_page_token returned\nby an earlier call. This will cause the next page of results to\nbe returned."
    },
    "pageSize": {
      "type": "integer",
      "description": "If specified, determines the maximum number of messages to\nreturn.  If unspecified, the service may choose an appropriate\ndefault, or may return an arbitrarily large number of results."
    },
    "minimumImportance": {
      "type": "string",
      "description": "Filter to only get messages with importance >= level",
      "enum": [
        "JOB_MESSAGE_IMPORTANCE_UNKNOWN",
        "JOB_MESSAGE_DEBUG",
        "JOB_MESSAGE_DETAILED",
        "JOB_MESSAGE_BASIC",
        "JOB_MESSAGE_WARNING",
        "JOB_MESSAGE_ERROR"
      ]
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "location",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListJobMessagesResponse"
}
```
## Operation: projects.locations.jobs.getMetrics
Request the job status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A project id."
    },
    "location": {
      "type": "string",
      "description": "The location which contains the job specified by job_id."
    },
    "jobId": {
      "type": "string",
      "description": "The job to get messages for."
    },
    "startTime": {
      "type": "string",
      "description": "Return only metric data that has changed since this time.\nDefault is to return all information about all metrics for the job."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "location",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/JobMetrics"
}
```
## Operation: projects.locations.jobs.workItems.lease
Leases a dataflow WorkItem to run.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "Identifies the project this worker belongs to."
    },
    "location": {
      "type": "string",
      "description": "The location which contains the WorkItem's job."
    },
    "jobId": {
      "type": "string",
      "description": "Identifies the workflow job this worker belongs to."
    },
    "body": {
      "$ref": "#/definitions/LeaseWorkItemRequest"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "location",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeaseWorkItemResponse"
}
```
## Operation: projects.locations.jobs.workItems.reportStatus
Reports the status of dataflow WorkItems leased by a worker.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The project which owns the WorkItem's job."
    },
    "location": {
      "type": "string",
      "description": "The location which contains the WorkItem's job."
    },
    "jobId": {
      "type": "string",
      "description": "The job which the WorkItem is part of."
    },
    "body": {
      "$ref": "#/definitions/ReportWorkItemStatusRequest"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "location",
    "jobId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ReportWorkItemStatusResponse"
}
```
## Operation: projects.locations.templates.create
Creates a Cloud Dataflow job from a template.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CreateJobFromTemplateRequest"
    },
    "location": {
      "type": "string",
      "description": "The location to which to direct the request."
    },
    "projectId": {
      "type": "string",
      "description": "Required. The ID of the Cloud Platform project that the job belongs to."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Job"
}
```
## Operation: projects.locations.templates.get
Get the template associated with a template.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "gcsPath": {
      "type": "string",
      "description": "Required. A Cloud Storage path to the template from which to\ncreate the job.\nMust be a valid Cloud Storage URL, beginning with `gs://`."
    },
    "location": {
      "type": "string",
      "description": "The location to which to direct the request."
    },
    "projectId": {
      "type": "string",
      "description": "Required. The ID of the Cloud Platform project that the job belongs to."
    },
    "view": {
      "type": "string",
      "description": "The view to retrieve. Defaults to METADATA_ONLY.",
      "enum": [
        "METADATA_ONLY"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetTemplateResponse"
}
```
## Operation: projects.locations.templates.launch
Launch a template.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/LaunchTemplateParameters"
    },
    "gcsPath": {
      "type": "string",
      "description": "Required. A Cloud Storage path to the template from which to create\nthe job.\nMust be valid Cloud Storage URL, beginning with 'gs://'."
    },
    "location": {
      "type": "string",
      "description": "The location to which to direct the request."
    },
    "projectId": {
      "type": "string",
      "description": "Required. The ID of the Cloud Platform project that the job belongs to."
    },
    "validateOnly": {
      "type": "boolean",
      "description": "If true, the request is validated but not actually executed.\nDefaults to false."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LaunchTemplateResponse"
}
```
## Operation: projects.templates.create
Creates a Cloud Dataflow job from a template.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "Required. The ID of the Cloud Platform project that the job belongs to."
    },
    "body": {
      "$ref": "#/definitions/CreateJobFromTemplateRequest"
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Job"
}
```
## Operation: projects.templates.get
Get the template associated with a template.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "gcsPath": {
      "type": "string",
      "description": "Required. A Cloud Storage path to the template from which to\ncreate the job.\nMust be a valid Cloud Storage URL, beginning with `gs://`."
    },
    "location": {
      "type": "string",
      "description": "The location to which to direct the request."
    },
    "projectId": {
      "type": "string",
      "description": "Required. The ID of the Cloud Platform project that the job belongs to."
    },
    "view": {
      "type": "string",
      "description": "The view to retrieve. Defaults to METADATA_ONLY.",
      "enum": [
        "METADATA_ONLY"
      ]
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetTemplateResponse"
}
```
## Operation: projects.templates.launch
Launch a template.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/LaunchTemplateParameters"
    },
    "gcsPath": {
      "type": "string",
      "description": "Required. A Cloud Storage path to the template from which to create\nthe job.\nMust be valid Cloud Storage URL, beginning with 'gs://'."
    },
    "location": {
      "type": "string",
      "description": "The location to which to direct the request."
    },
    "projectId": {
      "type": "string",
      "description": "Required. The ID of the Cloud Platform project that the job belongs to."
    },
    "validateOnly": {
      "type": "boolean",
      "description": "If true, the request is validated but not actually executed.\nDefaults to false."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LaunchTemplateResponse"
}
```
