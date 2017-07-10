# @datafire/google_clouderrorreporting
Stackdriver Error Reporting groups and counts similar errors from cloud services. The Stackdriver Error Reporting API provides a way to report new errors and read access to error groups and their associated errors.


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
## Operation: projects.groups.get
Get the specified group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupName": {
      "type": "string",
      "description": "[Required] The group resource name. Written as\n<code>projects/<var>projectID</var>/groups/<var>group_name</var></code>.\nCall\n<a href=\"/error-reporting/reference/rest/v1beta1/projects.groupStats/list\">\n<code>groupStats.list</code></a> to return a list of groups belonging to\nthis project.\n\nExample: <code>projects/my-project-123/groups/my-group</code>"
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
    "groupName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ErrorGroup"
}
```
## Operation: projects.groups.update
Replace the data for the specified group.
Fails if the group does not exist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The group resource name.\nExample: <code>projects/my-project-123/groups/my-groupid</code>"
    },
    "body": {
      "$ref": "#/definitions/ErrorGroup"
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
    "name"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ErrorGroup"
}
```
## Operation: projects.deleteEvents
Deletes all error events of a given project.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectName": {
      "type": "string",
      "description": "[Required] The resource name of the Google Cloud Platform project. Written\nas `projects/` plus the\n[Google Cloud Platform project\nID](https://support.google.com/cloud/answer/6158840).\nExample: `projects/my-project-123`."
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
    "projectName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/DeleteEventsResponse"
}
```
## Operation: projects.events.list
Lists the specified events.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectName": {
      "type": "string",
      "description": "[Required] The resource name of the Google Cloud Platform project. Written\nas `projects/` plus the\n[Google Cloud Platform project\nID](https://support.google.com/cloud/answer/6158840).\nExample: `projects/my-project-123`."
    },
    "groupId": {
      "type": "string",
      "description": "[Required] The group for which events shall be returned."
    },
    "pageToken": {
      "type": "string",
      "description": "[Optional] A `next_page_token` provided by a previous response."
    },
    "serviceFilter.service": {
      "type": "string",
      "description": "[Optional] The exact value to match against\n[`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service)."
    },
    "pageSize": {
      "type": "integer",
      "description": "[Optional] The maximum number of results to return per response."
    },
    "serviceFilter.version": {
      "type": "string",
      "description": "[Optional] The exact value to match against\n[`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version)."
    },
    "serviceFilter.resourceType": {
      "type": "string",
      "description": "[Optional] The exact value to match against\n[`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type)."
    },
    "timeRange.period": {
      "type": "string",
      "description": "Restricts the query to the specified time range.",
      "enum": [
        "PERIOD_UNSPECIFIED",
        "PERIOD_1_HOUR",
        "PERIOD_6_HOURS",
        "PERIOD_1_DAY",
        "PERIOD_1_WEEK",
        "PERIOD_30_DAYS"
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
    "projectName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListEventsResponse"
}
```
## Operation: projects.events.report
Report an individual error event.

This endpoint accepts <strong>either</strong> an OAuth token,
<strong>or</strong> an
<a href="https://support.google.com/cloud/answer/6158862">API key</a>
for authentication. To use an API key, append it to the URL as the value of
a `key` parameter. For example:
<pre>POST https://clouderrorreporting.googleapis.com/v1beta1/projects/example-project/events:report?key=123ABC456</pre>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectName": {
      "type": "string",
      "description": "[Required] The resource name of the Google Cloud Platform project. Written\nas `projects/` plus the\n[Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840).\nExample: `projects/my-project-123`."
    },
    "body": {
      "$ref": "#/definitions/ReportedErrorEvent"
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
    "projectName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ReportErrorEventResponse"
}
```
## Operation: projects.groupStats.list
Lists the specified groups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectName": {
      "type": "string",
      "description": "[Required] The resource name of the Google Cloud Platform project. Written\nas <code>projects/</code> plus the\n<a href=\"https://support.google.com/cloud/answer/6158840\">Google Cloud\nPlatform project ID</a>.\n\nExample: <code>projects/my-project-123</code>."
    },
    "serviceFilter.service": {
      "type": "string",
      "description": "[Optional] The exact value to match against\n[`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service)."
    },
    "pageSize": {
      "type": "integer",
      "description": "[Optional] The maximum number of results to return per response.\nDefault is 20."
    },
    "serviceFilter.version": {
      "type": "string",
      "description": "[Optional] The exact value to match against\n[`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version)."
    },
    "order": {
      "type": "string",
      "description": "[Optional] The sort order in which the results are returned.\nDefault is `COUNT_DESC`.",
      "enum": [
        "GROUP_ORDER_UNSPECIFIED",
        "COUNT_DESC",
        "LAST_SEEN_DESC",
        "CREATED_DESC",
        "AFFECTED_USERS_DESC"
      ]
    },
    "serviceFilter.resourceType": {
      "type": "string",
      "description": "[Optional] The exact value to match against\n[`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type)."
    },
    "alignmentTime": {
      "type": "string",
      "description": "[Optional] Time where the timed counts shall be aligned if rounded\nalignment is chosen. Default is 00:00 UTC."
    },
    "timedCountDuration": {
      "type": "string",
      "description": "[Optional] The preferred duration for a single returned `TimedCount`.\nIf not set, no timed counts are returned."
    },
    "pageToken": {
      "type": "string",
      "description": "[Optional] A `next_page_token` provided by a previous response. To view\nadditional results, pass this token along with the identical query\nparameters as the first request."
    },
    "timeRange.period": {
      "type": "string",
      "description": "Restricts the query to the specified time range.",
      "enum": [
        "PERIOD_UNSPECIFIED",
        "PERIOD_1_HOUR",
        "PERIOD_6_HOURS",
        "PERIOD_1_DAY",
        "PERIOD_1_WEEK",
        "PERIOD_30_DAYS"
      ]
    },
    "alignment": {
      "type": "string",
      "description": "[Optional] The alignment of the timed counts to be returned.\nDefault is `ALIGNMENT_EQUAL_AT_END`.",
      "enum": [
        "ERROR_COUNT_ALIGNMENT_UNSPECIFIED",
        "ALIGNMENT_EQUAL_ROUNDED",
        "ALIGNMENT_EQUAL_AT_END"
      ]
    },
    "groupId": {
      "type": "array",
      "description": "[Optional] List all <code>ErrorGroupStats</code> with these IDs."
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
    "projectName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListGroupStatsResponse"
}
```
