# @datafire/google_clouddebugger

Client library for Cloud Debugger API

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

.then(data => {
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

### clouddebugger.controller.debuggees.register
Registers the debuggee with the controller service. All agents attached to the same application must call this method with exactly the same request content to get back the same stable `debuggee_id`. Agents should call this method again whenever `google.rpc.Code.NOT_FOUND` is returned from any controller method. This protocol allows the controller service to disable debuggees, recover from data loss, or change the `debuggee_id` format. Agents must handle `debuggee_id` value changing upon re-registration.


```js
google_clouddebugger.clouddebugger.controller.debuggees.register({}, context)
```

#### Input
* input `object`
  * body [RegisterDebuggeeRequest](#registerdebuggeerequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [RegisterDebuggeeResponse](#registerdebuggeeresponse)

### clouddebugger.controller.debuggees.breakpoints.list
Returns the list of all active breakpoints for the debuggee. The breakpoint specification (`location`, `condition`, and `expressions` fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line where the breakpoint was set, but this doesn't change the breakpoint semantics. This means that an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember the breakpoints that are completed until the controller removes them from the active list to avoid setting those breakpoints again.


```js
google_clouddebugger.clouddebugger.controller.debuggees.breakpoints.list({
  "debuggeeId": ""
}, context)
```

#### Input
* input `object`
  * debuggeeId **required** `string`: Required. Identifies the debuggee.
  * agentId `string`: Identifies the agent. This is the ID returned in the RegisterDebuggee response.
  * successOnTimeout `boolean`: If set to `true` (recommended), returns `google.rpc.Code.OK` status and sets the `wait_expired` response field to `true` when the server-selected timeout has expired. If set to `false` (deprecated), returns `google.rpc.Code.ABORTED` status when the server-selected timeout has expired.
  * waitToken `string`: A token that, if specified, blocks the method call until the list of active breakpoints has changed, or a server-selected timeout has expired. The value should be set from the `next_wait_token` field in the last response. The initial value should be set to `"init"`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListActiveBreakpointsResponse](#listactivebreakpointsresponse)

### clouddebugger.controller.debuggees.breakpoints.update
Updates the breakpoint state or mutable fields. The entire Breakpoint message must be sent back to the controller service. Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the `location`, `condition` and `expressions` fields should not alter the breakpoint semantics. These may only make changes such as canonicalizing a value or snapping the location to the correct line of code.


```js
google_clouddebugger.clouddebugger.controller.debuggees.breakpoints.update({
  "debuggeeId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * debuggeeId **required** `string`: Required. Identifies the debuggee being debugged.
  * id **required** `string`: Breakpoint identifier, unique in the scope of the debuggee.
  * body [UpdateActiveBreakpointRequest](#updateactivebreakpointrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [UpdateActiveBreakpointResponse](#updateactivebreakpointresponse)

### clouddebugger.debugger.debuggees.list
Lists all the debuggees that the user has access to.


```js
google_clouddebugger.clouddebugger.debugger.debuggees.list({}, context)
```

#### Input
* input `object`
  * clientVersion `string`: Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
  * includeInactive `boolean`: When set to `true`, the result includes all debuggees. Otherwise, the result includes only debuggees that are active.
  * project `string`: Required. Project number of a Google Cloud project whose debuggees to list.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListDebuggeesResponse](#listdebuggeesresponse)

### clouddebugger.debugger.debuggees.breakpoints.list
Lists all breakpoints for the debuggee.


```js
google_clouddebugger.clouddebugger.debugger.debuggees.breakpoints.list({
  "debuggeeId": ""
}, context)
```

#### Input
* input `object`
  * debuggeeId **required** `string`: Required. ID of the debuggee whose breakpoints to list.
  * action.value `string` (values: CAPTURE, LOG): Only breakpoints with the specified action will pass the filter.
  * clientVersion `string`: Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
  * includeAllUsers `boolean`: When set to `true`, the response includes the list of breakpoints set by any user. Otherwise, it includes only breakpoints set by the caller.
  * includeInactive `boolean`: When set to `true`, the response includes active and inactive breakpoints. Otherwise, it includes only active breakpoints.
  * stripResults `boolean`: This field is deprecated. The following fields are always stripped out of the result: `stack_frames`, `evaluated_expressions` and `variable_table`.
  * waitToken `string`: A wait token that, if specified, blocks the call until the breakpoints list has changed, or a server selected timeout has expired. The value should be set from the last response. The error code `google.rpc.Code.ABORTED` (RPC) is returned on wait timeout, which should be called again with the same `wait_token`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListBreakpointsResponse](#listbreakpointsresponse)

### clouddebugger.debugger.debuggees.breakpoints.set
Sets the breakpoint to the debuggee.


```js
google_clouddebugger.clouddebugger.debugger.debuggees.breakpoints.set({
  "debuggeeId": ""
}, context)
```

#### Input
* input `object`
  * debuggeeId **required** `string`: Required. ID of the debuggee where the breakpoint is to be set.
  * canaryOption `string` (values: CANARY_OPTION_UNSPECIFIED, CANARY_OPTION_TRY_ENABLE, CANARY_OPTION_TRY_DISABLE): The canary option set by the user upon setting breakpoint.
  * clientVersion `string`: Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
  * body [Breakpoint](#breakpoint)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SetBreakpointResponse](#setbreakpointresponse)

### clouddebugger.debugger.debuggees.breakpoints.delete
Deletes the breakpoint from the debuggee.


```js
google_clouddebugger.clouddebugger.debugger.debuggees.breakpoints.delete({
  "debuggeeId": "",
  "breakpointId": ""
}, context)
```

#### Input
* input `object`
  * debuggeeId **required** `string`: Required. ID of the debuggee whose breakpoint to delete.
  * breakpointId **required** `string`: Required. ID of the breakpoint to delete.
  * clientVersion `string`: Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### clouddebugger.debugger.debuggees.breakpoints.get
Gets breakpoint information.


```js
google_clouddebugger.clouddebugger.debugger.debuggees.breakpoints.get({
  "debuggeeId": "",
  "breakpointId": ""
}, context)
```

#### Input
* input `object`
  * debuggeeId **required** `string`: Required. ID of the debuggee whose breakpoint to get.
  * breakpointId **required** `string`: Required. ID of the breakpoint to get.
  * clientVersion `string`: Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GetBreakpointResponse](#getbreakpointresponse)



## Definitions

### AliasContext
* AliasContext `object`: An alias to a repo revision.
  * kind `string` (values: ANY, FIXED, MOVABLE, OTHER): The alias kind.
  * name `string`: The alias name.

### Breakpoint
* Breakpoint `object`: ------------------------------------------------------------------------------ ## Breakpoint (the resource) Represents the breakpoint specification, status and results.
  * action `string` (values: CAPTURE, LOG): Action that the agent should perform when the code at the breakpoint location is hit.
  * canaryExpireTime `string`: The deadline for the breakpoint to stay in CANARY_ACTIVE state. The value is meaningless when the breakpoint is not in CANARY_ACTIVE state.
  * condition `string`: Condition that triggers the breakpoint. The condition is a compound boolean expression composed using expressions in a programming language at the source location.
  * createTime `string`: Time this breakpoint was created by the server in seconds resolution.
  * evaluatedExpressions `array`: Values of evaluated expressions at breakpoint time. The evaluated expressions appear in exactly the same order they are listed in the `expressions` field. The `name` field holds the original expression text, the `value` or `members` field holds the result of the evaluated expression. If the expression cannot be evaluated, the `status` inside the `Variable` will indicate an error and contain the error text.
    * items [Variable](#variable)
  * expressions `array`: List of read-only expressions to evaluate at the breakpoint location. The expressions are composed using expressions in the programming language at the source location. If the breakpoint action is `LOG`, the evaluated expressions are included in log statements.
    * items `string`
  * finalTime `string`: Time this breakpoint was finalized as seen by the server in seconds resolution.
  * id `string`: Breakpoint identifier, unique in the scope of the debuggee.
  * isFinalState `boolean`: When true, indicates that this is a final result and the breakpoint state will not change from here on.
  * labels `object`: A set of custom breakpoint properties, populated by the agent, to be displayed to the user.
  * location [SourceLocation](#sourcelocation)
  * logLevel `string` (values: INFO, WARNING, ERROR): Indicates the severity of the log. Only relevant when action is `LOG`.
  * logMessageFormat `string`: Only relevant when action is `LOG`. Defines the message to log when the breakpoint hits. The message may include parameter placeholders `$0`, `$1`, etc. These placeholders are replaced with the evaluated value of the appropriate expression. Expressions not referenced in `log_message_format` are not logged. Example: `Message received, id = $0, count = $1` with `expressions` = `[ message.id, message.count ]`.
  * stackFrames `array`: The stack at breakpoint time, where stack_frames[0] represents the most recently entered function.
    * items [StackFrame](#stackframe)
  * state `string` (values: STATE_UNSPECIFIED, STATE_CANARY_PENDING_AGENTS, STATE_CANARY_ACTIVE, STATE_ROLLING_TO_ALL, STATE_IS_FINAL): The current state of the breakpoint.
  * status [StatusMessage](#statusmessage)
  * userEmail `string`: E-mail address of the user that created this breakpoint
  * variableTable `array`: The `variable_table` exists to aid with computation, memory and network traffic optimization. It enables storing a variable once and reference it from multiple variables, including variables stored in the `variable_table` itself. For example, the same `this` object, which may appear at many levels of the stack, can have all of its data stored once in this table. The stack frame variables then would hold only a reference to it. The variable `var_table_index` field is an index into this repeated field. The stored objects are nameless and get their name from the referencing variable. The effective variable is a merge of the referencing variable and the referenced variable.
    * items [Variable](#variable)

### CloudRepoSourceContext
* CloudRepoSourceContext `object`: A CloudRepoSourceContext denotes a particular revision in a cloud repo (a repo hosted by the Google Cloud Platform).
  * aliasContext [AliasContext](#aliascontext)
  * aliasName `string`: The name of an alias (branch, tag, etc.).
  * repoId [RepoId](#repoid)
  * revisionId `string`: A revision ID.

### CloudWorkspaceId
* CloudWorkspaceId `object`: A CloudWorkspaceId is a unique identifier for a cloud workspace. A cloud workspace is a place associated with a repo where modified files can be stored before they are committed.
  * name `string`: The unique name of the workspace within the repo. This is the name chosen by the client in the Source API's CreateWorkspace method.
  * repoId [RepoId](#repoid)

### CloudWorkspaceSourceContext
* CloudWorkspaceSourceContext `object`: A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot.
  * snapshotId `string`: The ID of the snapshot. An empty snapshot_id refers to the most recent snapshot.
  * workspaceId [CloudWorkspaceId](#cloudworkspaceid)

### Debuggee
* Debuggee `object`: Represents the debugged application. The application may include one or more replicated processes executing the same code. Each of these processes is attached with a debugger agent, carrying out the debugging commands. Agents attached to the same debuggee identify themselves as such by using exactly the same Debuggee message value when registering.
  * agentVersion `string`: Version ID of the agent. Schema: `domain/language-platform/vmajor.minor` (for example `google.com/java-gcp/v1.1`).
  * canaryMode `string` (values: CANARY_MODE_UNSPECIFIED, CANARY_MODE_ALWAYS_ENABLED, CANARY_MODE_ALWAYS_DISABLED, CANARY_MODE_DEFAULT_ENABLED, CANARY_MODE_DEFAULT_DISABLED): Used when setting breakpoint canary for this debuggee.
  * description `string`: Human readable description of the debuggee. Including a human-readable project name, environment name and version information is recommended.
  * extSourceContexts `array`: References to the locations and revisions of the source code used in the deployed application.
    * items [ExtendedSourceContext](#extendedsourcecontext)
  * id `string`: Unique identifier for the debuggee generated by the controller service.
  * isDisabled `boolean`: If set to `true`, indicates that the agent should disable itself and detach from the debuggee.
  * isInactive `boolean`: If set to `true`, indicates that Controller service does not detect any activity from the debuggee agents and the application is possibly stopped.
  * labels `object`: A set of custom debuggee properties, populated by the agent, to be displayed to the user.
  * project `string`: Project the debuggee is associated with. Use project number or id when registering a Google Cloud Platform project.
  * sourceContexts `array`: References to the locations and revisions of the source code used in the deployed application.
    * items [SourceContext](#sourcecontext)
  * status [StatusMessage](#statusmessage)
  * uniquifier `string`: Uniquifier to further distinguish the application. It is possible that different applications might have identical values in the debuggee message, thus, incorrectly identified as a single application by the Controller service. This field adds salt to further distinguish the application. Agents should consider seeding this field with value that identifies the code, binary, configuration and environment.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### ExtendedSourceContext
* ExtendedSourceContext `object`: An ExtendedSourceContext is a SourceContext combined with additional details describing the context.
  * context [SourceContext](#sourcecontext)
  * labels `object`: Labels with user defined metadata.

### FormatMessage
* FormatMessage `object`: Represents a message with parameters.
  * parameters `array`: Optional parameters to be embedded into the message.
    * items `string`
  * format `string`: Format template for the message. The `format` uses placeholders `$0`, `$1`, etc. to reference parameters. `$$` can be used to denote the `$` character. Examples: * `Failed to load '$0' which helps debug $1 the first time it is loaded. Again, $0 is very important.` * `Please pay $$10 to use $0 instead of $1.`

### GerritSourceContext
* GerritSourceContext `object`: A SourceContext referring to a Gerrit project.
  * aliasContext [AliasContext](#aliascontext)
  * aliasName `string`: The name of an alias (branch, tag, etc.).
  * gerritProject `string`: The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is hostURI/project.
  * hostUri `string`: The URI of a running Gerrit instance.
  * revisionId `string`: A revision (commit) ID.

### GetBreakpointResponse
* GetBreakpointResponse `object`: Response for getting breakpoint information.
  * breakpoint [Breakpoint](#breakpoint)

### GitSourceContext
* GitSourceContext `object`: A GitSourceContext denotes a particular revision in a third party Git repository (e.g. GitHub).
  * revisionId `string`: Git commit hash. required.
  * url `string`: Git repository URL.

### ListActiveBreakpointsResponse
* ListActiveBreakpointsResponse `object`: Response for listing active breakpoints.
  * breakpoints `array`: List of all active breakpoints. The fields `id` and `location` are guaranteed to be set on each breakpoint.
    * items [Breakpoint](#breakpoint)
  * nextWaitToken `string`: A token that can be used in the next method call to block until the list of breakpoints changes.
  * waitExpired `boolean`: If set to `true`, indicates that there is no change to the list of active breakpoints and the server-selected timeout has expired. The `breakpoints` field would be empty and should be ignored.

### ListBreakpointsResponse
* ListBreakpointsResponse `object`: Response for listing breakpoints.
  * breakpoints `array`: List of breakpoints matching the request. The fields `id` and `location` are guaranteed to be set on each breakpoint. The fields: `stack_frames`, `evaluated_expressions` and `variable_table` are cleared on each breakpoint regardless of its status.
    * items [Breakpoint](#breakpoint)
  * nextWaitToken `string`: A wait token that can be used in the next call to `list` (REST) or `ListBreakpoints` (RPC) to block until the list of breakpoints has changes.

### ListDebuggeesResponse
* ListDebuggeesResponse `object`: Response for listing debuggees.
  * debuggees `array`: List of debuggees accessible to the calling user. The fields `debuggee.id` and `description` are guaranteed to be set. The `description` field is a human readable field provided by agents and can be displayed to users.
    * items [Debuggee](#debuggee)

### ProjectRepoId
* ProjectRepoId `object`: Selects a repo using a Google Cloud Platform project ID (e.g. winged-cargo-31) and a repo name within that project.
  * projectId `string`: The ID of the project.
  * repoName `string`: The name of the repo. Leave empty for the default repo.

### RegisterDebuggeeRequest
* RegisterDebuggeeRequest `object`: Request to register a debuggee.
  * debuggee [Debuggee](#debuggee)

### RegisterDebuggeeResponse
* RegisterDebuggeeResponse `object`: Response for registering a debuggee.
  * agentId `string`: A unique ID generated for the agent. Each RegisterDebuggee request will generate a new agent ID.
  * debuggee [Debuggee](#debuggee)

### RepoId
* RepoId `object`: A unique identifier for a cloud repo.
  * projectRepoId [ProjectRepoId](#projectrepoid)
  * uid `string`: A server-assigned, globally unique identifier.

### SetBreakpointResponse
* SetBreakpointResponse `object`: Response for setting a breakpoint.
  * breakpoint [Breakpoint](#breakpoint)

### SourceContext
* SourceContext `object`: A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
  * cloudRepo [CloudRepoSourceContext](#cloudreposourcecontext)
  * cloudWorkspace [CloudWorkspaceSourceContext](#cloudworkspacesourcecontext)
  * gerrit [GerritSourceContext](#gerritsourcecontext)
  * git [GitSourceContext](#gitsourcecontext)

### SourceLocation
* SourceLocation `object`: Represents a location in the source code.
  * column `integer`: Column within a line. The first column in a line as the value `1`. Agents that do not support setting breakpoints on specific columns ignore this field.
  * line `integer`: Line inside the file. The first line in the file has the value `1`.
  * path `string`: Path to the source file within the source context of the target binary.

### StackFrame
* StackFrame `object`: Represents a stack frame context.
  * arguments `array`: Set of arguments passed to this function. Note that this might not be populated for all stack frames.
    * items [Variable](#variable)
  * function `string`: Demangled function name at the call site.
  * locals `array`: Set of local variables at the stack frame location. Note that this might not be populated for all stack frames.
    * items [Variable](#variable)
  * location [SourceLocation](#sourcelocation)

### StatusMessage
* StatusMessage `object`: Represents a contextual status message. The message can indicate an error or informational status, and refer to specific parts of the containing object. For example, the `Breakpoint.status` field can indicate an error referring to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.
  * description [FormatMessage](#formatmessage)
  * isError `boolean`: Distinguishes errors from informational messages.
  * refersTo `string` (values: UNSPECIFIED, BREAKPOINT_SOURCE_LOCATION, BREAKPOINT_CONDITION, BREAKPOINT_EXPRESSION, BREAKPOINT_AGE, BREAKPOINT_CANARY_FAILED, VARIABLE_NAME, VARIABLE_VALUE): Reference to which the message applies.

### UpdateActiveBreakpointRequest
* UpdateActiveBreakpointRequest `object`: Request to update an active breakpoint.
  * breakpoint [Breakpoint](#breakpoint)

### UpdateActiveBreakpointResponse
* UpdateActiveBreakpointResponse `object`: Response for updating an active breakpoint. The message is defined to allow future extensions.

### Variable
* Variable `object`: Represents a variable or an argument possibly of a compound object type. Note how the following variables are represented: 1) A simple variable: int x = 5 { name: "x", value: "5", type: "int" } // Captured variable 2) A compound object: struct T { int m1; int m2; }; T x = { 3, 7 }; { // Captured variable name: "x", type: "T", members { name: "m1", value: "3", type: "int" }, members { name: "m2", value: "7", type: "int" } } 3) A pointer where the pointee was captured: T x = { 3, 7 }; T* p = &x; { // Captured variable name: "p", type: "T*", value: "0x00500500", members { name: "m1", value: "3", type: "int" }, members { name: "m2", value: "7", type: "int" } } 4) A pointer where the pointee was not captured: T* p = new T; { // Captured variable name: "p", type: "T*", value: "0x00400400" status { is_error: true, description { format: "unavailable" } } } The status should describe the reason for the missing value, such as ``, ``, ``. Note that a null pointer should not have members. 5) An unnamed value: int* p = new int(7); { // Captured variable name: "p", value: "0x00500500", type: "int*", members { value: "7", type: "int" } } 6) An unnamed pointer where the pointee was not captured: int* p = new int(7); int** pp = &p; { // Captured variable name: "pp", value: "0x00500500", type: "int**", members { value: "0x00400400", type: "int*" status { is_error: true, description: { format: "unavailable" } } } } } To optimize computation, memory and network traffic, variables that repeat in the output multiple times can be stored once in a shared variable table and be referenced using the `var_table_index` field. The variables stored in the shared table are nameless and are essentially a partition of the complete variable. To reconstruct the complete variable, merge the referencing variable with the referenced variable. When using the shared variable table, the following variables: T x = { 3, 7 }; T* p = &x; T& r = x; { name: "x", var_table_index: 3, type: "T" } // Captured variables { name: "p", value "0x00500500", type="T*", var_table_index: 3 } { name: "r", type="T&", var_table_index: 3 } { // Shared variable table entry #3: members { name: "m1", value: "3", type: "int" }, members { name: "m2", value: "7", type: "int" } } Note that the pointer address is stored with the referencing variable and not with the referenced variable. This allows the referenced variable to be shared between pointers and references. The type field is optional. The debugger agent may or may not support it.
  * members `array`: Members contained or pointed to by the variable.
    * items [Variable](#variable)
  * name `string`: Name of the variable, if any.
  * status [StatusMessage](#statusmessage)
  * type `string`: Variable type (e.g. `MyClass`). If the variable is split with `var_table_index`, `type` goes next to `value`. The interpretation of a type is agent specific. It is recommended to include the dynamic type rather than a static type of an object.
  * value `string`: Simple value of the variable.
  * varTableIndex `integer`: Reference to a variable in the shared variable table. More than one variable can reference the same variable in the table. The `var_table_index` field is an index into `variable_table` in Breakpoint.


