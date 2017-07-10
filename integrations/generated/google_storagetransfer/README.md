# @datafire/google_storagetransfer
Transfers data from external data sources to a Google Cloud Storage bucket or between Google Cloud Storage buckets.

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
## Operation: googleServiceAccounts.get
Returns the Google service account that is used by Storage Transfer
Service to access buckets in the project where transfers
run or in other projects. Each Google service account is associated
with one Google Cloud Platform Console project. Users
should add this service account to the Google Cloud Storage bucket
ACLs to grant access to Storage Transfer Service. This service
account is created and owned by Storage Transfer Service and can
only be used by Storage Transfer Service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The ID of the Google Cloud Platform Console project that the Google service\naccount is associated with.\nRequired."
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
    "projectId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GoogleServiceAccount"
}
```
## Operation: transferJobs.list
Lists transfer jobs.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "filter": {
      "type": "string",
      "description": "A list of query parameters specified as JSON text in the form of\n{\"project_id\":\"my_project_id\",\n\"job_names\":[\"jobid1\",\"jobid2\",...],\n\"job_statuses\":[\"status1\",\"status2\",...]}.\nSince `job_names` and `job_statuses` support multiple values, their values\nmust be specified with array notation. `project_id` is required. `job_names`\nand `job_statuses` are optional.  The valid values for `job_statuses` are\ncase-insensitive: `ENABLED`, `DISABLED`, and `DELETED`."
    },
    "pageSize": {
      "type": "integer",
      "description": "The list page size. The max allowed value is 256."
    },
    "pageToken": {
      "type": "string",
      "description": "The list page token."
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
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListTransferJobsResponse"
}
```
## Operation: transferJobs.create
Creates a transfer job that runs periodically.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/TransferJob"
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
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TransferJob"
}
```
## Operation: transferJobs.get
Gets a transfer job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "jobName": {
      "type": "string",
      "description": "The job to get.\nRequired."
    },
    "projectId": {
      "type": "string",
      "description": "The ID of the Google Cloud Platform Console project that owns the job.\nRequired."
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
    "jobName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TransferJob"
}
```
## Operation: transferJobs.patch
Updates a transfer job. Updating a job's transfer spec does not affect
transfer operations that are running already. Updating the scheduling
of a job is not allowed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UpdateTransferJobRequest"
    },
    "jobName": {
      "type": "string",
      "description": "The name of job to update.\nRequired."
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
    "jobName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TransferJob"
}
```
## Operation: transferOperations.delete
This method is not supported and the server returns `UNIMPLEMENTED`.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the operation resource to be deleted."
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
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: transferOperations.list
Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding below allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "filter": {
      "type": "string",
      "description": "A list of query parameters specified as JSON text in the form of {\\\"project_id\\\" : \\\"my_project_id\\\", \\\"job_names\\\" : [\\\"jobid1\\\", \\\"jobid2\\\",...], \\\"operation_names\\\" : [\\\"opid1\\\", \\\"opid2\\\",...], \\\"transfer_statuses\\\":[\\\"status1\\\", \\\"status2\\\",...]}. Since `job_names`, `operation_names`, and `transfer_statuses` support multiple values, they must be specified with array notation. `job_names`, `operation_names`, and `transfer_statuses` are optional."
    },
    "name": {
      "type": "string",
      "description": "The value `transferOperations`."
    },
    "pageSize": {
      "type": "integer",
      "description": "The list page size. The max allowed value is 256."
    },
    "pageToken": {
      "type": "string",
      "description": "The list page token."
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
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListOperationsResponse"
}
```
## Operation: transferOperations.cancel
Cancels a transfer. Use the get method to check whether the cancellation succeeded or whether the operation completed despite cancellation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the operation resource to be cancelled."
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
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: transferOperations.pause
Pauses a transfer operation.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PauseTransferOperationRequest"
    },
    "name": {
      "type": "string",
      "description": "The name of the transfer operation.\nRequired."
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
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: transferOperations.resume
Resumes a transfer operation that is paused.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ResumeTransferOperationRequest"
    },
    "name": {
      "type": "string",
      "description": "The name of the transfer operation.\nRequired."
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
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
