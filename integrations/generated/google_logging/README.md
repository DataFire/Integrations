# @datafire/google_logging
Writes log entries and manages your Stackdriver Logging configuration.

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
## Operation: entries.list
Lists log entries. Use this method to retrieve log entries from Stackdriver Logging. For ways to export log entries, see Exporting Logs.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/ListLogEntriesRequest"
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListLogEntriesResponse"
}
```
## Operation: entries.write
Writes log entries to Stackdriver Logging.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/WriteLogEntriesRequest"
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WriteLogEntriesResponse"
}
```
## Operation: monitoredResourceDescriptors.list
Lists the descriptors for monitored resource types used by Stackdriver Logging.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pageToken": {
      "type": "string",
      "description": "Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call."
    },
    "pageSize": {
      "type": "integer",
      "description": "Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListMonitoredResourceDescriptorsResponse"
}
```
## Operation: billingAccounts.logs.delete
Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "logName": {
      "type": "string",
      "description": "Required. The resource name of the log to delete:\n\"projects/[PROJECT_ID]/logs/[LOG_ID]\"\n\"organizations/[ORGANIZATION_ID]/logs/[LOG_ID]\"\n\"billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]\"\n\"folders/[FOLDER_ID]/logs/[LOG_ID]\"\n[LOG_ID] must be URL-encoded. For example, \"projects/my-project-id/logs/syslog\", \"organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity\". For more information about log names, see LogEntry."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "logName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: projects.metrics.delete
Deletes a logs-based metric.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "metricName": {
      "type": "string",
      "description": "The resource name of the metric to delete:\n\"projects/[PROJECT_ID]/metrics/[METRIC_ID]\"\n"
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "metricName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: projects.metrics.get
Gets a logs-based metric.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "metricName": {
      "type": "string",
      "description": "The resource name of the desired metric:\n\"projects/[PROJECT_ID]/metrics/[METRIC_ID]\"\n"
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "metricName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LogMetric"
}
```
## Operation: projects.metrics.update
Creates or updates a logs-based metric.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "metricName": {
      "type": "string",
      "description": "The resource name of the metric to update:\n\"projects/[PROJECT_ID]/metrics/[METRIC_ID]\"\nThe updated metric must be provided in the request and it's name field must be the same as [METRIC_ID] If the metric does not exist in [PROJECT_ID], then a new metric is created."
    },
    "body": {
      "$ref": "#/definitions/LogMetric"
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "metricName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LogMetric"
}
```
## Operation: billingAccounts.logs.list
Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "Required. The resource name that owns the logs:\n\"projects/[PROJECT_ID]\"\n\"organizations/[ORGANIZATION_ID]\"\n\"billingAccounts/[BILLING_ACCOUNT_ID]\"\n\"folders/[FOLDER_ID]\"\n"
    },
    "pageToken": {
      "type": "string",
      "description": "Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call."
    },
    "pageSize": {
      "type": "integer",
      "description": "Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "parent"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListLogsResponse"
}
```
## Operation: projects.metrics.list
Lists logs-based metrics.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "Required. The name of the project containing the metrics:\n\"projects/[PROJECT_ID]\"\n"
    },
    "pageToken": {
      "type": "string",
      "description": "Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call."
    },
    "pageSize": {
      "type": "integer",
      "description": "Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "parent"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListLogMetricsResponse"
}
```
## Operation: projects.metrics.create
Creates a logs-based metric.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "The resource name of the project in which to create the metric:\n\"projects/[PROJECT_ID]\"\nThe new metric must be provided in the request."
    },
    "body": {
      "$ref": "#/definitions/LogMetric"
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "parent"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LogMetric"
}
```
## Operation: billingAccounts.sinks.list
Lists sinks.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "Required. The parent resource whose sinks are to be listed:\n\"projects/[PROJECT_ID]\"\n\"organizations/[ORGANIZATION_ID]\"\n\"billingAccounts/[BILLING_ACCOUNT_ID]\"\n\"folders/[FOLDER_ID]\"\n"
    },
    "pageToken": {
      "type": "string",
      "description": "Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call."
    },
    "pageSize": {
      "type": "integer",
      "description": "Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "parent"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListSinksResponse"
}
```
## Operation: billingAccounts.sinks.create
Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the current time is outside the sink's start and end times or the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "Required. The resource in which to create the sink:\n\"projects/[PROJECT_ID]\"\n\"organizations/[ORGANIZATION_ID]\"\n\"billingAccounts/[BILLING_ACCOUNT_ID]\"\n\"folders/[FOLDER_ID]\"\nExamples: \"projects/my-logging-project\", \"organizations/123456789\"."
    },
    "uniqueWriterIdentity": {
      "type": "boolean",
      "description": "Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink."
    },
    "body": {
      "$ref": "#/definitions/LogSink"
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "parent"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LogSink"
}
```
## Operation: billingAccounts.sinks.delete
Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sinkName": {
      "type": "string",
      "description": "Required. The full resource name of the sink to delete, including the parent resource and the sink identifier:\n\"projects/[PROJECT_ID]/sinks/[SINK_ID]\"\n\"organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]\"\n\"billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]\"\n\"folders/[FOLDER_ID]/sinks/[SINK_ID]\"\nExample: \"projects/my-project-id/sinks/my-sink-id\"."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "sinkName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: billingAccounts.sinks.get
Gets a sink.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sinkName": {
      "type": "string",
      "description": "Required. The resource name of the sink:\n\"projects/[PROJECT_ID]/sinks/[SINK_ID]\"\n\"organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]\"\n\"billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]\"\n\"folders/[FOLDER_ID]/sinks/[SINK_ID]\"\nExample: \"projects/my-project-id/sinks/my-sink-id\"."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "sinkName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LogSink"
}
```
## Operation: billingAccounts.sinks.update
Updates a sink. If the named sink doesn't exist, then this method is identical to sinks.create. If the named sink does exist, then this method replaces the following fields in the existing sink with values from the new sink: destination, filter, output_version_format, start_time, and end_time. The updated filter might also have a new writer_identity; see the unique_writer_identity field.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sinkName": {
      "type": "string",
      "description": "Required. The full resource name of the sink to update, including the parent resource and the sink identifier:\n\"projects/[PROJECT_ID]/sinks/[SINK_ID]\"\n\"organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]\"\n\"billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]\"\n\"folders/[FOLDER_ID]/sinks/[SINK_ID]\"\nExample: \"projects/my-project-id/sinks/my-sink-id\"."
    },
    "uniqueWriterIdentity": {
      "type": "boolean",
      "description": "Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field:\nIf the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.\nIf the old value is false and the new value is true, then writer_identity is changed to a unique service account.\nIt is an error if the old value is true and the new value is false."
    },
    "body": {
      "$ref": "#/definitions/LogSink"
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
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
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
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
    "sinkName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LogSink"
}
```
