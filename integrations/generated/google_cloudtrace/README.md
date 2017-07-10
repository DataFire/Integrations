# @datafire/google_cloudtrace
Send and retrieve trace data from Stackdriver Trace. Data is generated and available by default for all App Engine applications. Data from other applications can be written to Stackdriver Trace for display, reporting, and analysis.


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
## Operation: projects.traces.list
Returns of a list of traces that match the specified filter conditions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "endTime": {
      "type": "string",
      "description": "End of the time interval (inclusive) during which the trace data was\ncollected from the application."
    },
    "filter": {
      "type": "string",
      "description": "An optional filter against labels for the request.\n\nBy default, searches use prefix matching. To specify exact match, prepend\na plus symbol (`+`) to the search term.\nMultiple terms are ANDed. Syntax:\n\n*   `root:NAME_PREFIX` or `NAME_PREFIX`: Return traces where any root\n    span starts with `NAME_PREFIX`.\n*   `+root:NAME` or `+NAME`: Return traces where any root span's name is\n    exactly `NAME`.\n*   `span:NAME_PREFIX`: Return traces where any span starts with\n    `NAME_PREFIX`.\n*   `+span:NAME`: Return traces where any span's name is exactly\n    `NAME`.\n*   `latency:DURATION`: Return traces whose overall latency is\n    greater or equal to than `DURATION`. Accepted units are nanoseconds\n    (`ns`), milliseconds (`ms`), and seconds (`s`). Default is `ms`. For\n    example, `latency:24ms` returns traces whose overall latency\n    is greater than or equal to 24 milliseconds.\n*   `label:LABEL_KEY`: Return all traces containing the specified\n    label key (exact match, case-sensitive) regardless of the key:value\n    pair's value (including empty values).\n*   `LABEL_KEY:VALUE_PREFIX`: Return all traces containing the specified\n    label key (exact match, case-sensitive) whose value starts with\n    `VALUE_PREFIX`. Both a key and a value must be specified.\n*   `+LABEL_KEY:VALUE`: Return all traces containing a key:value pair\n    exactly matching the specified text. Both a key and a value must be\n    specified.\n*   `method:VALUE`: Equivalent to `/http/method:VALUE`.\n*   `url:VALUE`: Equivalent to `/http/url:VALUE`."
    },
    "orderBy": {
      "type": "string",
      "description": "Field used to sort the returned traces. Optional.\nCan be one of the following:\n\n*   `trace_id`\n*   `name` (`name` field of root span in the trace)\n*   `duration` (difference between `end_time` and `start_time` fields of\n     the root span)\n*   `start` (`start_time` field of the root span)\n\nDescending order can be specified by appending `desc` to the sort field\n(for example, `name desc`).\n\nOnly one sort field is permitted."
    },
    "pageSize": {
      "type": "integer",
      "description": "Maximum number of traces to return. If not specified or <= 0, the\nimplementation selects a reasonable value.  The implementation may\nreturn fewer traces than the requested page size. Optional."
    },
    "pageToken": {
      "type": "string",
      "description": "Token identifying the page of results to return. If provided, use the\nvalue of the `next_page_token` field from a previous request. Optional."
    },
    "projectId": {
      "type": "string",
      "description": "ID of the Cloud project where the trace data is stored."
    },
    "startTime": {
      "type": "string",
      "description": "Start of the time interval (inclusive) during which the trace data was\ncollected from the application."
    },
    "view": {
      "type": "string",
      "description": "Type of data returned for traces in the list. Optional. Default is\n`MINIMAL`.",
      "enum": [
        "VIEW_TYPE_UNSPECIFIED",
        "MINIMAL",
        "ROOTSPAN",
        "COMPLETE"
      ]
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
  "$ref": "#/definitions/ListTracesResponse"
}
```
## Operation: projects.patchTraces
Sends new traces to Stackdriver Trace or updates existing traces. If the ID
of a trace that you send matches that of an existing trace, any fields
in the existing trace and its spans are overwritten by the provided values,
and any new fields provided are merged with the existing trace data. If the
ID does not match, a new trace is created.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "ID of the Cloud project where the trace data is stored."
    },
    "body": {
      "$ref": "#/definitions/Traces"
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
  "$ref": "#/definitions/Empty"
}
```
## Operation: projects.traces.get
Gets a single trace by its ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "description": "ID of the Cloud project where the trace data is stored."
    },
    "traceId": {
      "type": "string",
      "description": "ID of the trace to return."
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
    }
  },
  "additionalProperties": false,
  "required": [
    "projectId",
    "traceId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Trace"
}
```
