# @datafire/google_clouddebugger

Client library for Stackdriver Debugger

## Installation and Usage
```bash
npm install --save datafire @datafire/google_clouddebugger
```

```js
let datafire = require('datafire');
let google_clouddebugger = require('@datafire/google_clouddebugger').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_clouddebugger: account,
  }
})


google_clouddebugger.debugger.debuggees.list({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_clouddebugger.oauthRefresh(null, context)
```


### controller.debuggees.register
Registers the debuggee with the controller service.

All agents attached to the same application should call this method with
the same request content to get back the same stable `debuggee_id`. Agents
should call this method again whenever `google.rpc.Code.NOT_FOUND` is
returned from any controller method.

This allows the controller service to disable the agent or recover from any
data loss. If the debuggee is disabled by the server, the response will
have `is_disabled` set to `true`.


```js
google_clouddebugger.controller.debuggees.register({}, context)
```


### controller.debuggees.breakpoints.list
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


```js
google_clouddebugger.controller.debuggees.breakpoints.list({
  "debuggeeId": ""
}, context)
```

#### Parameters
* debuggeeId (string) **required** - Identifies the debuggee.
* successOnTimeout (boolean) - If set to `true`, returns `google.rpc.Code.OK` status and sets the
* waitToken (string) - A wait token that, if specified, blocks the method call until the list
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### controller.debuggees.breakpoints.update
Updates the breakpoint state or mutable fields.
The entire Breakpoint message must be sent back to the controller
service.

Updates to active breakpoint fields are only allowed if the new value
does not change the breakpoint specification. Updates to the `location`,
`condition` and `expression` fields should not alter the breakpoint
semantics. These may only make changes such as canonicalizing a value
or snapping the location to the correct line of code.


```js
google_clouddebugger.controller.debuggees.breakpoints.update({
  "debuggeeId": "",
  "id": ""
}, context)
```

#### Parameters
* debuggeeId (string) **required** - Identifies the debuggee being debugged.
* id (string) **required** - Breakpoint identifier, unique in the scope of the debuggee.
* body (object) - Request to update an active breakpoint.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### debugger.debuggees.list
Lists all the debuggees that the user can set breakpoints to.


```js
google_clouddebugger.debugger.debuggees.list({}, context)
```


### debugger.debuggees.breakpoints.list
Lists all breakpoints for the debuggee.


```js
google_clouddebugger.debugger.debuggees.breakpoints.list({
  "debuggeeId": ""
}, context)
```

#### Parameters
* debuggeeId (string) **required** - ID of the debuggee whose breakpoints to list.
* stripResults (boolean) - This field is deprecated. The following fields are always stripped out of
* waitToken (string) - A wait token that, if specified, blocks the call until the breakpoints
* clientVersion (string) - The client version making the call.
* action.value (string) - Only breakpoints with the specified action will pass the filter.
* includeAllUsers (boolean) - When set to `true`, the response includes the list of breakpoints set by
* includeInactive (boolean) - When set to `true`, the response includes active and inactive
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### debugger.debuggees.breakpoints.set
Sets the breakpoint to the debuggee.


```js
google_clouddebugger.debugger.debuggees.breakpoints.set({
  "debuggeeId": ""
}, context)
```

#### Parameters
* debuggeeId (string) **required** - ID of the debuggee where the breakpoint is to be set.
* clientVersion (string) - The client version making the call.
* body (object) - Represents the breakpoint specification, status and results.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### debugger.debuggees.breakpoints.delete
Deletes the breakpoint from the debuggee.


```js
google_clouddebugger.debugger.debuggees.breakpoints.delete({
  "debuggeeId": "",
  "breakpointId": ""
}, context)
```

#### Parameters
* debuggeeId (string) **required** - ID of the debuggee whose breakpoint to delete.
* breakpointId (string) **required** - ID of the breakpoint to delete.
* clientVersion (string) - The client version making the call.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### debugger.debuggees.breakpoints.get
Gets breakpoint information.


```js
google_clouddebugger.debugger.debuggees.breakpoints.get({
  "debuggeeId": "",
  "breakpointId": ""
}, context)
```

#### Parameters
* debuggeeId (string) **required** - ID of the debuggee whose breakpoint to get.
* breakpointId (string) **required** - ID of the breakpoint to get.
* clientVersion (string) - The client version making the call.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

