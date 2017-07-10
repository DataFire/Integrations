# @datafire/google_cloudbuild
Builds container images in the cloud.

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
## Operation: projects.builds.list
Lists previously requested builds.

Previously requested builds may still be in-progress, or may have finished
successfully or unsuccessfully.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "ID of the project."
    },
    "filter": {
      "type": "string",
      "description": "The raw filter text to constrain the results."
    },
    "pageToken": {
      "type": "string",
      "description": "Token to provide to skip to a particular spot in the list."
    },
    "pageSize": {
      "type": "integer",
      "description": "Number of results to return in the list."
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
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
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
  "$ref": "#/definitions/ListBuildsResponse"
}
```
## Operation: projects.builds.create
Starts a build with the specified configuration.

The long-running Operation returned by this method will include the ID of
the build, which can be passed to GetBuild to determine its status (e.g.,
success or failure).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "ID of the project."
    },
    "body": {
      "$ref": "#/definitions/Build"
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
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
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
  "$ref": "#/definitions/Operation"
}
```
## Operation: projects.builds.get
Returns information about a previously requested build.

The Build that is returned includes its status (e.g., success or failure,
or in-progress), and timing information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "ID of the project."
    },
    "id": {
      "type": "string",
      "description": "ID of the build."
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
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Build"
}
```
## Operation: projects.builds.cancel
Cancels a requested build in progress.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "ID of the project."
    },
    "id": {
      "type": "string",
      "description": "ID of the build."
    },
    "body": {
      "$ref": "#/definitions/CancelBuildRequest"
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
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Build"
}
```
## Operation: projects.triggers.list
Lists existing BuildTrigger.

This API is experimental.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "ID of the project for which to list BuildTriggers."
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
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
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
  "$ref": "#/definitions/ListBuildTriggersResponse"
}
```
## Operation: projects.triggers.create
Creates a new BuildTrigger.

This API is experimental.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "ID of the project for which to configure automatic builds."
    },
    "body": {
      "$ref": "#/definitions/BuildTrigger"
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
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
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
  "$ref": "#/definitions/BuildTrigger"
}
```
## Operation: projects.triggers.delete
Deletes an BuildTrigger by its project ID and trigger ID.

This API is experimental.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "ID of the project that owns the trigger."
    },
    "triggerId": {
      "type": "string",
      "description": "ID of the BuildTrigger to delete."
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
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "triggerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: projects.triggers.get
Gets information about a BuildTrigger.

This API is experimental.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "ID of the project that owns the trigger."
    },
    "triggerId": {
      "type": "string",
      "description": "ID of the BuildTrigger to get."
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
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "triggerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BuildTrigger"
}
```
## Operation: projects.triggers.patch
Updates an BuildTrigger by its project ID and trigger ID.

This API is experimental.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "ID of the project that owns the trigger."
    },
    "triggerId": {
      "type": "string",
      "description": "ID of the BuildTrigger to update."
    },
    "body": {
      "$ref": "#/definitions/BuildTrigger"
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
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "triggerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BuildTrigger"
}
```
## Operation: operations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the operation resource."
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
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
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
  "$ref": "#/definitions/Operation"
}
```
## Operation: operations.cancel
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the operation resource to be cancelled."
    },
    "body": {
      "$ref": "#/definitions/CancelOperationRequest"
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
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
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
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
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
