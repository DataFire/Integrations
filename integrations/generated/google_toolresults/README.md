# @datafire/google_toolresults
Reads and publishes results from Firebase Test Lab.

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
## Operation: projects.histories.list
Lists Histories for a given Project.

The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id.\n\nRequired."
    },
    "filterByName": {
      "type": "string",
      "description": "If set, only return histories with the given name.\n\nOptional."
    },
    "pageSize": {
      "type": "integer",
      "description": "The maximum number of Histories to fetch.\n\nDefault value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100.\n\nOptional."
    },
    "pageToken": {
      "type": "string",
      "description": "A continuation token to resume the query at the next item.\n\nOptional."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
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
  "$ref": "#/definitions/ListHistoriesResponse"
}
```
## Operation: projects.histories.create
Creates a History.

The returned History will have the id set.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id.\n\nRequired."
    },
    "requestId": {
      "type": "string",
      "description": "A unique request ID for server to detect duplicated requests. For example, a UUID.\n\nOptional, but strongly recommended."
    },
    "body": {
      "$ref": "#/definitions/History"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
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
  "$ref": "#/definitions/History"
}
```
## Operation: projects.histories.get
Gets a History.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id.\n\nRequired."
    },
    "historyId": {
      "type": "string",
      "description": "A History id.\n\nRequired."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/History"
}
```
## Operation: projects.histories.executions.list
Lists Histories for a given Project.

The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id.\n\nRequired."
    },
    "historyId": {
      "type": "string",
      "description": "A History id.\n\nRequired."
    },
    "pageSize": {
      "type": "integer",
      "description": "The maximum number of Executions to fetch.\n\nDefault value: 25. The server will use this default if the field is not set or has a value of 0.\n\nOptional."
    },
    "pageToken": {
      "type": "string",
      "description": "A continuation token to resume the query at the next item.\n\nOptional."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListExecutionsResponse"
}
```
## Operation: projects.histories.executions.create
Creates an Execution.

The returned Execution will have the id set.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id.\n\nRequired."
    },
    "historyId": {
      "type": "string",
      "description": "A History id.\n\nRequired."
    },
    "requestId": {
      "type": "string",
      "description": "A unique request ID for server to detect duplicated requests. For example, a UUID.\n\nOptional, but strongly recommended."
    },
    "body": {
      "$ref": "#/definitions/Execution"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Execution"
}
```
## Operation: projects.histories.executions.get
Gets an Execution.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id.\n\nRequired."
    },
    "historyId": {
      "type": "string",
      "description": "A History id.\n\nRequired."
    },
    "executionId": {
      "type": "string",
      "description": "An Execution id.\n\nRequired."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId",
    "executionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Execution"
}
```
## Operation: projects.histories.executions.patch
Updates an existing Execution with the supplied partial entity.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id. Required."
    },
    "historyId": {
      "type": "string",
      "description": "Required."
    },
    "executionId": {
      "type": "string",
      "description": "Required."
    },
    "requestId": {
      "type": "string",
      "description": "A unique request ID for server to detect duplicated requests. For example, a UUID.\n\nOptional, but strongly recommended."
    },
    "body": {
      "$ref": "#/definitions/Execution"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId",
    "executionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Execution"
}
```
## Operation: projects.histories.executions.steps.list
Lists Steps for a given Execution.

The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id.\n\nRequired."
    },
    "historyId": {
      "type": "string",
      "description": "A History id.\n\nRequired."
    },
    "executionId": {
      "type": "string",
      "description": "A Execution id.\n\nRequired."
    },
    "pageSize": {
      "type": "integer",
      "description": "The maximum number of Steps to fetch.\n\nDefault value: 25. The server will use this default if the field is not set or has a value of 0.\n\nOptional."
    },
    "pageToken": {
      "type": "string",
      "description": "A continuation token to resume the query at the next item.\n\nOptional."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId",
    "executionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListStepsResponse"
}
```
## Operation: projects.histories.executions.steps.create
Creates a Step.

The returned Step will have the id set.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id.\n\nRequired."
    },
    "historyId": {
      "type": "string",
      "description": "A History id.\n\nRequired."
    },
    "executionId": {
      "type": "string",
      "description": "A Execution id.\n\nRequired."
    },
    "requestId": {
      "type": "string",
      "description": "A unique request ID for server to detect duplicated requests. For example, a UUID.\n\nOptional, but strongly recommended."
    },
    "body": {
      "$ref": "#/definitions/Step"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId",
    "executionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Step"
}
```
## Operation: projects.histories.executions.steps.get
Gets a Step.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id.\n\nRequired."
    },
    "historyId": {
      "type": "string",
      "description": "A History id.\n\nRequired."
    },
    "executionId": {
      "type": "string",
      "description": "A Execution id.\n\nRequired."
    },
    "stepId": {
      "type": "string",
      "description": "A Step id.\n\nRequired."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId",
    "executionId",
    "stepId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Step"
}
```
## Operation: projects.histories.executions.steps.patch
Updates an existing Step with the supplied partial entity.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id.\n\nRequired."
    },
    "historyId": {
      "type": "string",
      "description": "A History id.\n\nRequired."
    },
    "executionId": {
      "type": "string",
      "description": "A Execution id.\n\nRequired."
    },
    "stepId": {
      "type": "string",
      "description": "A Step id.\n\nRequired."
    },
    "requestId": {
      "type": "string",
      "description": "A unique request ID for server to detect duplicated requests. For example, a UUID.\n\nOptional, but strongly recommended."
    },
    "body": {
      "$ref": "#/definitions/Step"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId",
    "executionId",
    "stepId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Step"
}
```
## Operation: projects.histories.executions.steps.getPerfMetricsSummary
Retrieves a PerfMetricsSummary.

May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The cloud project"
    },
    "historyId": {
      "type": "string",
      "description": "A tool results history ID."
    },
    "executionId": {
      "type": "string",
      "description": "A tool results execution ID."
    },
    "stepId": {
      "type": "string",
      "description": "A tool results step ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId",
    "executionId",
    "stepId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PerfMetricsSummary"
}
```
## Operation: projects.histories.executions.steps.perfMetricsSummary.create
Creates a PerfMetricsSummary resource.

May return any of the following error code(s): - ALREADY_EXISTS - A PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The cloud project"
    },
    "historyId": {
      "type": "string",
      "description": "A tool results history ID."
    },
    "executionId": {
      "type": "string",
      "description": "A tool results execution ID."
    },
    "stepId": {
      "type": "string",
      "description": "A tool results step ID."
    },
    "body": {
      "$ref": "#/definitions/PerfMetricsSummary"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId",
    "executionId",
    "stepId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PerfMetricsSummary"
}
```
## Operation: projects.histories.executions.steps.perfSampleSeries.list
Lists PerfSampleSeries for a given Step.

The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids.

May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "executionId": {
      "type": "string",
      "description": "A tool results execution ID."
    },
    "filter": {
      "type": "array",
      "description": "Specify one or more PerfMetricType values such as CPU to filter the result"
    },
    "historyId": {
      "type": "string",
      "description": "A tool results history ID."
    },
    "projectId": {
      "type": "string",
      "description": "The cloud project"
    },
    "stepId": {
      "type": "string",
      "description": "A tool results step ID."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "executionId",
    "historyId",
    "projectId",
    "stepId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListPerfSampleSeriesResponse"
}
```
## Operation: projects.histories.executions.steps.perfSampleSeries.create
Creates a PerfSampleSeries.

May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The cloud project"
    },
    "historyId": {
      "type": "string",
      "description": "A tool results history ID."
    },
    "executionId": {
      "type": "string",
      "description": "A tool results execution ID."
    },
    "stepId": {
      "type": "string",
      "description": "A tool results step ID."
    },
    "body": {
      "$ref": "#/definitions/PerfSampleSeries"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId",
    "executionId",
    "stepId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PerfSampleSeries"
}
```
## Operation: projects.histories.executions.steps.perfSampleSeries.get
Gets a PerfSampleSeries.

May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The cloud project"
    },
    "historyId": {
      "type": "string",
      "description": "A tool results history ID."
    },
    "executionId": {
      "type": "string",
      "description": "A tool results execution ID."
    },
    "stepId": {
      "type": "string",
      "description": "A tool results step ID."
    },
    "sampleSeriesId": {
      "type": "string",
      "description": "A sample series id"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId",
    "executionId",
    "stepId",
    "sampleSeriesId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PerfSampleSeries"
}
```
## Operation: projects.histories.executions.steps.perfSampleSeries.samples.list
Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit

May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The cloud project"
    },
    "historyId": {
      "type": "string",
      "description": "A tool results history ID."
    },
    "executionId": {
      "type": "string",
      "description": "A tool results execution ID."
    },
    "stepId": {
      "type": "string",
      "description": "A tool results step ID."
    },
    "sampleSeriesId": {
      "type": "string",
      "description": "A sample series id"
    },
    "pageSize": {
      "type": "integer",
      "description": "The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000"
    },
    "pageToken": {
      "type": "string",
      "description": "Optional, the next_page_token returned in the previous response"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId",
    "executionId",
    "stepId",
    "sampleSeriesId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListPerfSamplesResponse"
}
```
## Operation: projects.histories.executions.steps.perfSampleSeries.samples.batchCreate
Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database).

May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The cloud project"
    },
    "historyId": {
      "type": "string",
      "description": "A tool results history ID."
    },
    "executionId": {
      "type": "string",
      "description": "A tool results execution ID."
    },
    "stepId": {
      "type": "string",
      "description": "A tool results step ID."
    },
    "sampleSeriesId": {
      "type": "string",
      "description": "A sample series id"
    },
    "body": {
      "$ref": "#/definitions/BatchCreatePerfSamplesRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId",
    "executionId",
    "stepId",
    "sampleSeriesId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BatchCreatePerfSamplesResponse"
}
```
## Operation: projects.histories.executions.steps.thumbnails.list
Lists thumbnails of images attached to a step.

May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id.\n\nRequired."
    },
    "historyId": {
      "type": "string",
      "description": "A History id.\n\nRequired."
    },
    "executionId": {
      "type": "string",
      "description": "An Execution id.\n\nRequired."
    },
    "stepId": {
      "type": "string",
      "description": "A Step id.\n\nRequired."
    },
    "pageSize": {
      "type": "integer",
      "description": "The maximum number of thumbnails to fetch.\n\nDefault value: 50. The server will use this default if the field is not set or has a value of 0.\n\nOptional."
    },
    "pageToken": {
      "type": "string",
      "description": "A continuation token to resume the query at the next item.\n\nOptional."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId",
    "executionId",
    "stepId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListStepThumbnailsResponse"
}
```
## Operation: projects.histories.executions.steps.publishXunitXmlFiles
Publish xml files to an existing Step.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id.\n\nRequired."
    },
    "historyId": {
      "type": "string",
      "description": "A History id.\n\nRequired."
    },
    "executionId": {
      "type": "string",
      "description": "A Execution id.\n\nRequired."
    },
    "stepId": {
      "type": "string",
      "description": "A Step id. Note: This step must include a TestExecutionStep.\n\nRequired."
    },
    "body": {
      "$ref": "#/definitions/PublishXunitXmlFilesRequest"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "historyId",
    "executionId",
    "stepId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Step"
}
```
## Operation: projects.getSettings
Gets the Tool Results settings for a project.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read from project

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id.\n\nRequired."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
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
  "$ref": "#/definitions/ProjectSettings"
}
```
## Operation: projects.initializeSettings
Creates resources for settings which have not yet been set.

Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in the name of the user calling. Except in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days.

The bucket is created with the project-private ACL: All project team members are given permissions to the bucket and objects created within it according to their roles. Project owners have owners rights, and so on. The default ACL on objects created in the bucket is project-private as well. See Google Cloud Storage documentation for more details.

If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deteleted, a new bucket will be created.

May return any canonical error codes, including the following:

- PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "A Project id.\n\nRequired."
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "json"
      ]
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
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
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
  "$ref": "#/definitions/ProjectSettings"
}
```
