# @datafire/google_clouddebugger
Examines the call stack and variables of a running application without stopping or slowing it down.


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
## Operation: controller.debuggees.register
Registers the debuggee with the controller service.

All agents attached to the same application should call this method with
the same request content to get back the same stable `debuggee_id`. Agents
should call this method again whenever `google.rpc.Code.NOT_FOUND` is
returned from any controller method.

This allows the controller service to disable the agent or recover from any
data loss. If the debuggee is disabled by the server, the response will
have `is_disabled` set to `true`.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/RegisterDebuggeeRequest"
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RegisterDebuggeeResponse"
}
```
## Operation: controller.debuggees.breakpoints.list
Returns the list of all active breakpoints for the debuggee.

The breakpoint specification (location, condition, and expression
fields) is semantically immutable, although the field values may
change. For example, an agent may update the location line number
to reflect the actual line where the breakpoint was set, but this
doesn't change the breakpoint semantics.

This means that an agent does not need to check if a breakpoint has changed
when it encounters the same breakpoint on a successive call.
Moreover, an agent should remember the breakpoints that are completed
until the controller removes them from the active list to avoid
setting those breakpoints again.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "debuggeeId": {
      "type": "string",
      "description": "Identifies the debuggee."
    },
    "successOnTimeout": {
      "type": "boolean",
      "description": "If set to `true`, returns `google.rpc.Code.OK` status and sets the\n`wait_expired` response field to `true` when the server-selected timeout\nhas expired (recommended).\n\nIf set to `false`, returns `google.rpc.Code.ABORTED` status when the\nserver-selected timeout has expired (deprecated)."
    },
    "waitToken": {
      "type": "string",
      "description": "A wait token that, if specified, blocks the method call until the list\nof active breakpoints has changed, or a server selected timeout has\nexpired.  The value should be set from the last returned response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
    }
  },
  "additionalProperties": false,
  "required": [
    "debuggeeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListActiveBreakpointsResponse"
}
```
## Operation: controller.debuggees.breakpoints.update
Updates the breakpoint state or mutable fields.
The entire Breakpoint message must be sent back to the controller
service.

Updates to active breakpoint fields are only allowed if the new value
does not change the breakpoint specification. Updates to the `location`,
`condition` and `expression` fields should not alter the breakpoint
semantics. These may only make changes such as canonicalizing a value
or snapping the location to the correct line of code.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "debuggeeId": {
      "type": "string",
      "description": "Identifies the debuggee being debugged."
    },
    "id": {
      "type": "string",
      "description": "Breakpoint identifier, unique in the scope of the debuggee."
    },
    "body": {
      "$ref": "#/definitions/UpdateActiveBreakpointRequest"
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
    }
  },
  "additionalProperties": false,
  "required": [
    "debuggeeId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdateActiveBreakpointResponse"
}
```
## Operation: debugger.debuggees.list
Lists all the debuggees that the user can set breakpoints to.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "clientVersion": {
      "type": "string",
      "description": "The client version making the call.\nFollowing: `domain/type/version` (e.g., `google.com/intellij/v1`)."
    },
    "includeInactive": {
      "type": "boolean",
      "description": "When set to `true`, the result includes all debuggees. Otherwise, the\nresult includes only debuggees that are active."
    },
    "project": {
      "type": "string",
      "description": "Project number of a Google Cloud project whose debuggees to list."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListDebuggeesResponse"
}
```
## Operation: debugger.debuggees.breakpoints.list
Lists all breakpoints for the debuggee.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "debuggeeId": {
      "type": "string",
      "description": "ID of the debuggee whose breakpoints to list."
    },
    "stripResults": {
      "type": "boolean",
      "description": "This field is deprecated. The following fields are always stripped out of\nthe result: `stack_frames`, `evaluated_expressions` and `variable_table`."
    },
    "waitToken": {
      "type": "string",
      "description": "A wait token that, if specified, blocks the call until the breakpoints\nlist has changed, or a server selected timeout has expired.  The value\nshould be set from the last response. The error code\n`google.rpc.Code.ABORTED` (RPC) is returned on wait timeout, which\nshould be called again with the same `wait_token`."
    },
    "clientVersion": {
      "type": "string",
      "description": "The client version making the call.\nFollowing: `domain/type/version` (e.g., `google.com/intellij/v1`)."
    },
    "action.value": {
      "type": "string",
      "description": "Only breakpoints with the specified action will pass the filter.",
      "enum": [
        "CAPTURE",
        "LOG"
      ]
    },
    "includeAllUsers": {
      "type": "boolean",
      "description": "When set to `true`, the response includes the list of breakpoints set by\nany user. Otherwise, it includes only breakpoints set by the caller."
    },
    "includeInactive": {
      "type": "boolean",
      "description": "When set to `true`, the response includes active and inactive\nbreakpoints. Otherwise, it includes only active breakpoints."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
    }
  },
  "additionalProperties": false,
  "required": [
    "debuggeeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListBreakpointsResponse"
}
```
## Operation: debugger.debuggees.breakpoints.set
Sets the breakpoint to the debuggee.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "debuggeeId": {
      "type": "string",
      "description": "ID of the debuggee where the breakpoint is to be set."
    },
    "clientVersion": {
      "type": "string",
      "description": "The client version making the call.\nFollowing: `domain/type/version` (e.g., `google.com/intellij/v1`)."
    },
    "body": {
      "$ref": "#/definitions/Breakpoint"
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
    }
  },
  "additionalProperties": false,
  "required": [
    "debuggeeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SetBreakpointResponse"
}
```
## Operation: debugger.debuggees.breakpoints.delete
Deletes the breakpoint from the debuggee.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "debuggeeId": {
      "type": "string",
      "description": "ID of the debuggee whose breakpoint to delete."
    },
    "breakpointId": {
      "type": "string",
      "description": "ID of the breakpoint to delete."
    },
    "clientVersion": {
      "type": "string",
      "description": "The client version making the call.\nFollowing: `domain/type/version` (e.g., `google.com/intellij/v1`)."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
    }
  },
  "additionalProperties": false,
  "required": [
    "debuggeeId",
    "breakpointId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: debugger.debuggees.breakpoints.get
Gets breakpoint information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "debuggeeId": {
      "type": "string",
      "description": "ID of the debuggee whose breakpoint to get."
    },
    "breakpointId": {
      "type": "string",
      "description": "ID of the breakpoint to get."
    },
    "clientVersion": {
      "type": "string",
      "description": "The client version making the call.\nFollowing: `domain/type/version` (e.g., `google.com/intellij/v1`)."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
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
    }
  },
  "additionalProperties": false,
  "required": [
    "debuggeeId",
    "breakpointId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetBreakpointResponse"
}
```
