# @datafire/google_clouddebugger

Client library for Stackdriver Debugger

## Installation and Usage
```bash
npm install --save @datafire/google_clouddebugger
```
```js
let google_clouddebugger = require('@datafire/google_clouddebugger').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_clouddebugger.debugger.debuggees.list({}).then(data => {
  console.log(data);
});
```

## Description

Examines the call stack and variables of a running application without stopping or slowing it down.


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_clouddebugger.oauthCallback({
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
google_clouddebugger.oauthRefresh(null, context)
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

### controller.debuggees.register
Registers the debuggee with the controller service.

All agents attached to the same application must call this method with
exactly the same request content to get back the same stable `debuggee_id`.
Agents should call this method again whenever `google.rpc.Code.NOT_FOUND`
is returned from any controller method.

This protocol allows the controller service to disable debuggees, recover
from data loss, or change the `debuggee_id` format. Agents must handle
`debuggee_id` value changing upon re-registration.


```js
google_clouddebugger.controller.debuggees.register({}, context)
```

#### Input
* input `object`
  * body [RegisterDebuggeeRequest](#registerdebuggeerequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [RegisterDebuggeeResponse](#registerdebuggeeresponse)

### controller.debuggees.breakpoints.list
Returns the list of all active breakpoints for the debuggee.

The breakpoint specification (`location`, `condition`, and `expressions`
fields) is semantically immutable, although the field values may
change. For example, an agent may update the location line number
to reflect the actual line where the breakpoint was set, but this
doesn't change the breakpoint semantics.

This means that an agent does not need to check if a breakpoint has changed
when it encounters the same breakpoint on a successive call.
Moreover, an agent should remember the breakpoints that are completed
until the controller removes them from the active list to avoid
setting those breakpoints again.


```js
google_clouddebugger.controller.debuggees.breakpoints.list({
  "debuggeeId": ""
}, context)
```

#### Input
* input `object`
  * debuggeeId **required** `string`: Identifies the debuggee.
  * successOnTimeout `boolean`: If set to `true` (recommended), returns `google.rpc.Code.OK` status and
  * waitToken `string`: A token that, if specified, blocks the method call until the list
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [ListActiveBreakpointsResponse](#listactivebreakpointsresponse)

### controller.debuggees.breakpoints.update
Updates the breakpoint state or mutable fields.
The entire Breakpoint message must be sent back to the controller service.

Updates to active breakpoint fields are only allowed if the new value
does not change the breakpoint specification. Updates to the `location`,
`condition` and `expressions` fields should not alter the breakpoint
semantics. These may only make changes such as canonicalizing a value
or snapping the location to the correct line of code.


```js
google_clouddebugger.controller.debuggees.breakpoints.update({
  "debuggeeId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * debuggeeId **required** `string`: Identifies the debuggee being debugged.
  * id **required** `string`: Breakpoint identifier, unique in the scope of the debuggee.
  * body [UpdateActiveBreakpointRequest](#updateactivebreakpointrequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [UpdateActiveBreakpointResponse](#updateactivebreakpointresponse)

### debugger.debuggees.list
Lists all the debuggees that the user has access to.


```js
google_clouddebugger.debugger.debuggees.list({}, context)
```

#### Input
* input `object`
  * clientVersion `string`: The client version making the call.
  * includeInactive `boolean`: When set to `true`, the result includes all debuggees. Otherwise, the
  * project `string`: Project number of a Google Cloud project whose debuggees to list.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [ListDebuggeesResponse](#listdebuggeesresponse)

### debugger.debuggees.breakpoints.list
Lists all breakpoints for the debuggee.


```js
google_clouddebugger.debugger.debuggees.breakpoints.list({
  "debuggeeId": ""
}, context)
```

#### Input
* input `object`
  * action.value `string` (values: CAPTURE, LOG): Only breakpoints with the specified action will pass the filter.
  * clientVersion `string`: The client version making the call.
  * debuggeeId **required** `string`: ID of the debuggee whose breakpoints to list.
  * includeAllUsers `boolean`: When set to `true`, the response includes the list of breakpoints set by
  * includeInactive `boolean`: When set to `true`, the response includes active and inactive
  * stripResults `boolean`: This field is deprecated. The following fields are always stripped out of
  * waitToken `string`: A wait token that, if specified, blocks the call until the breakpoints
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [ListBreakpointsResponse](#listbreakpointsresponse)

### debugger.debuggees.breakpoints.set
Sets the breakpoint to the debuggee.


```js
google_clouddebugger.debugger.debuggees.breakpoints.set({
  "debuggeeId": ""
}, context)
```

#### Input
* input `object`
  * body [Breakpoint](#breakpoint)
  * clientVersion `string`: The client version making the call.
  * debuggeeId **required** `string`: ID of the debuggee where the breakpoint is to be set.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [SetBreakpointResponse](#setbreakpointresponse)

### debugger.debuggees.breakpoints.delete
Deletes the breakpoint from the debuggee.


```js
google_clouddebugger.debugger.debuggees.breakpoints.delete({
  "breakpointId": "",
  "debuggeeId": ""
}, context)
```

#### Input
* input `object`
  * breakpointId **required** `string`: ID of the breakpoint to delete.
  * clientVersion `string`: The client version making the call.
  * debuggeeId **required** `string`: ID of the debuggee whose breakpoint to delete.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [Empty](#empty)

### debugger.debuggees.breakpoints.get
Gets breakpoint information.


```js
google_clouddebugger.debugger.debuggees.breakpoints.get({
  "breakpointId": "",
  "debuggeeId": ""
}, context)
```

#### Input
* input `object`
  * breakpointId **required** `string`: ID of the breakpoint to get.
  * clientVersion `string`: The client version making the call.
  * debuggeeId **required** `string`: ID of the debuggee whose breakpoint to get.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GetBreakpointResponse](#getbreakpointresponse)



## Definitions

### AliasContext
* AliasContext `object`: An alias to a repo revision.
  * kind `string` (values: ANY, FIXED, MOVABLE, OTHER): The alias kind.
  * name `string`: The alias name.

### Breakpoint
* Breakpoint `object`: Represents the breakpoint specification, status and results.
  * action `string` (values: CAPTURE, LOG): Action that the agent should perform when the code at the
  * condition `string`: Condition that triggers the breakpoint.
  * createTime `string`: Time this breakpoint was created by the server in seconds resolution.
  * evaluatedExpressions `array`: Values of evaluated expressions at breakpoint time.
    * items [Variable](#variable)
  * expressions `array`: List of read-only expressions to evaluate at the breakpoint location.
    * items `string`
  * finalTime `string`: Time this breakpoint was finalized as seen by the server in seconds
  * id `string`: Breakpoint identifier, unique in the scope of the debuggee.
  * isFinalState `boolean`: When true, indicates that this is a final result and the
  * labels `object`: A set of custom breakpoint properties, populated by the agent, to be
  * location [SourceLocation](#sourcelocation)
  * logLevel `string` (values: INFO, WARNING, ERROR): Indicates the severity of the log. Only relevant when action is `LOG`.
  * logMessageFormat `string`: Only relevant when action is `LOG`. Defines the message to log when
  * stackFrames `array`: The stack at breakpoint time.
    * items [StackFrame](#stackframe)
  * status [StatusMessage](#statusmessage)
  * userEmail `string`: E-mail address of the user that created this breakpoint
  * variableTable `array`: The `variable_table` exists to aid with computation, memory and network
    * items [Variable](#variable)

### CloudRepoSourceContext
* CloudRepoSourceContext `object`: A CloudRepoSourceContext denotes a particular revision in a cloud
  * aliasContext [AliasContext](#aliascontext)
  * aliasName `string`: The name of an alias (branch, tag, etc.).
  * repoId [RepoId](#repoid)
  * revisionId `string`: A revision ID.

### CloudWorkspaceId
* CloudWorkspaceId `object`: A CloudWorkspaceId is a unique identifier for a cloud workspace.
  * name `string`: The unique name of the workspace within the repo.  This is the name
  * repoId [RepoId](#repoid)

### CloudWorkspaceSourceContext
* CloudWorkspaceSourceContext `object`: A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot.
  * snapshotId `string`: The ID of the snapshot.
  * workspaceId [CloudWorkspaceId](#cloudworkspaceid)

### Debuggee
* Debuggee `object`: Represents the debugged application. The application may include one or more
  * agentVersion `string`: Version ID of the agent.
  * description `string`: Human readable description of the debuggee.
  * extSourceContexts `array`: References to the locations and revisions of the source code used in the
    * items [ExtendedSourceContext](#extendedsourcecontext)
  * id `string`: Unique identifier for the debuggee generated by the controller service.
  * isDisabled `boolean`: If set to `true`, indicates that the agent should disable itself and
  * isInactive `boolean`: If set to `true`, indicates that Controller service does not detect any
  * labels `object`: A set of custom debuggee properties, populated by the agent, to be
  * project `string`: Project the debuggee is associated with.
  * sourceContexts `array`: References to the locations and revisions of the source code used in the
    * items [SourceContext](#sourcecontext)
  * status [StatusMessage](#statusmessage)
  * uniquifier `string`: Uniquifier to further distiguish the application.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### ExtendedSourceContext
* ExtendedSourceContext `object`: An ExtendedSourceContext is a SourceContext combined with additional
  * context [SourceContext](#sourcecontext)
  * labels `object`: Labels with user defined metadata.

### FormatMessage
* FormatMessage `object`: Represents a message with parameters.
  * format `string`: Format template for the message. The `format` uses placeholders `$0`,
  * parameters `array`: Optional parameters to be embedded into the message.
    * items `string`

### GerritSourceContext
* GerritSourceContext `object`: A SourceContext referring to a Gerrit project.
  * aliasContext [AliasContext](#aliascontext)
  * aliasName `string`: The name of an alias (branch, tag, etc.).
  * gerritProject `string`: The full project name within the host. Projects may be nested, so
  * hostUri `string`: The URI of a running Gerrit instance.
  * revisionId `string`: A revision (commit) ID.

### GetBreakpointResponse
* GetBreakpointResponse `object`: Response for getting breakpoint information.
  * breakpoint [Breakpoint](#breakpoint)

### GitSourceContext
* GitSourceContext `object`: A GitSourceContext denotes a particular revision in a third party Git
  * revisionId `string`: Git commit hash.
  * url `string`: Git repository URL.

### ListActiveBreakpointsResponse
* ListActiveBreakpointsResponse `object`: Response for listing active breakpoints.
  * breakpoints `array`: List of all active breakpoints.
    * items [Breakpoint](#breakpoint)
  * nextWaitToken `string`: A token that can be used in the next method call to block until
  * waitExpired `boolean`: If set to `true`, indicates that there is no change to the

### ListBreakpointsResponse
* ListBreakpointsResponse `object`: Response for listing breakpoints.
  * breakpoints `array`: List of breakpoints matching the request.
    * items [Breakpoint](#breakpoint)
  * nextWaitToken `string`: A wait token that can be used in the next call to `list` (REST) or

### ListDebuggeesResponse
* ListDebuggeesResponse `object`: Response for listing debuggees.
  * debuggees `array`: List of debuggees accessible to the calling user.
    * items [Debuggee](#debuggee)

### ProjectRepoId
* ProjectRepoId `object`: Selects a repo using a Google Cloud Platform project ID
  * projectId `string`: The ID of the project.
  * repoName `string`: The name of the repo. Leave empty for the default repo.

### RegisterDebuggeeRequest
* RegisterDebuggeeRequest `object`: Request to register a debuggee.
  * debuggee [Debuggee](#debuggee)

### RegisterDebuggeeResponse
* RegisterDebuggeeResponse `object`: Response for registering a debuggee.
  * debuggee [Debuggee](#debuggee)

### RepoId
* RepoId `object`: A unique identifier for a cloud repo.
  * projectRepoId [ProjectRepoId](#projectrepoid)
  * uid `string`: A server-assigned, globally unique identifier.

### SetBreakpointResponse
* SetBreakpointResponse `object`: Response for setting a breakpoint.
  * breakpoint [Breakpoint](#breakpoint)

### SourceContext
* SourceContext `object`: A SourceContext is a reference to a tree of files. A SourceContext together
  * cloudRepo [CloudRepoSourceContext](#cloudreposourcecontext)
  * cloudWorkspace [CloudWorkspaceSourceContext](#cloudworkspacesourcecontext)
  * gerrit [GerritSourceContext](#gerritsourcecontext)
  * git [GitSourceContext](#gitsourcecontext)

### SourceLocation
* SourceLocation `object`: Represents a location in the source code.
  * line `integer`: Line inside the file. The first line in the file has the value `1`.
  * path `string`: Path to the source file within the source context of the target binary.

### StackFrame
* StackFrame `object`: Represents a stack frame context.
  * arguments `array`: Set of arguments passed to this function.
    * items [Variable](#variable)
  * function `string`: Demangled function name at the call site.
  * locals `array`: Set of local variables at the stack frame location.
    * items [Variable](#variable)
  * location [SourceLocation](#sourcelocation)

### StatusMessage
* StatusMessage `object`: Represents a contextual status message.
  * description [FormatMessage](#formatmessage)
  * isError `boolean`: Distinguishes errors from informational messages.
  * refersTo `string` (values: UNSPECIFIED, BREAKPOINT_SOURCE_LOCATION, BREAKPOINT_CONDITION, BREAKPOINT_EXPRESSION, BREAKPOINT_AGE, VARIABLE_NAME, VARIABLE_VALUE): Reference to which the message applies.

### UpdateActiveBreakpointRequest
* UpdateActiveBreakpointRequest `object`: Request to update an active breakpoint.
  * breakpoint [Breakpoint](#breakpoint)

### UpdateActiveBreakpointResponse
* UpdateActiveBreakpointResponse `object`: Response for updating an active breakpoint.

### Variable
* Variable `object`: Represents a variable or an argument possibly of a compound object type.
  * members `array`: Members contained or pointed to by the variable.
    * items [Variable](#variable)
  * name `string`: Name of the variable, if any.
  * status [StatusMessage](#statusmessage)
  * type `string`: Variable type (e.g. `MyClass`). If the variable is split with
  * value `string`: Simple value of the variable.
  * varTableIndex `integer`: Reference to a variable in the shared variable table. More than


