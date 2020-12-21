# @datafire/google_workflowexecutions

Client library for Workflow Executions API

## Installation and Usage
```bash
npm install --save @datafire/google_workflowexecutions
```
```js
let google_workflowexecutions = require('@datafire/google_workflowexecutions').create({
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

Execute workflows created with Workflows API.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_workflowexecutions.oauthCallback({
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
google_workflowexecutions.oauthRefresh(null, context)
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

### workflowexecutions.projects.locations.workflows.executions.get
Returns an execution of the given name.


```js
google_workflowexecutions.workflowexecutions.projects.locations.workflows.executions.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the execution to be retrieved. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
  * view `string` (values: EXECUTION_VIEW_UNSPECIFIED, BASIC, FULL): Optional. A view defining which fields should be filled in the returned execution. The API will default to the FULL view.
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
* output [Execution](#execution)

### workflowexecutions.projects.locations.workflows.executions.cancel
Cancels an execution of the given name.


```js
google_workflowexecutions.workflowexecutions.projects.locations.workflows.executions.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the execution to be cancelled. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
  * body [CancelExecutionRequest](#cancelexecutionrequest)
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
* output [Execution](#execution)

### workflowexecutions.projects.locations.workflows.executions.list
Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).


```js
google_workflowexecutions.workflowexecutions.projects.locations.workflows.executions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the workflow for which the executions should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow}
  * pageSize `integer`: Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 10000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.
  * pageToken `string`: A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token.
  * view `string` (values: EXECUTION_VIEW_UNSPECIFIED, BASIC, FULL): Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.
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
* output [ListExecutionsResponse](#listexecutionsresponse)

### workflowexecutions.projects.locations.workflows.executions.create
Creates a new execution using the latest revision of the given workflow.


```js
google_workflowexecutions.workflowexecutions.projects.locations.workflows.executions.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the workflow for which an execution should be created. Format: projects/{project}/locations/{location}/workflows/{workflow} The latest revision of the workflow will be used.
  * body [Execution](#execution)
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
* output [Execution](#execution)



## Definitions

### CancelExecutionRequest
* CancelExecutionRequest `object`: Request for the CancelExecution method.

### Error
* Error `object`: Error describes why the execution was abnormally terminated.
  * context `string`: Human readable error context, helpful for debugging purposes.
  * payload `string`: Error payload returned by the execution, represented as a JSON string.

### Execution
* Execution `object`: A running instance of a [Workflow](/workflows/docs/reference/rest/v1beta/projects.locations.workflows).
  * argument `string`: Input parameters of the execution represented as a JSON string. The size limit is 32KB.
  * endTime `string`: Output only. Marks the end of execution, successful or not.
  * error [Error](#error)
  * name `string`: Output only. The resource name of the execution. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
  * result `string`: Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`.
  * startTime `string`: Output only. Marks the beginning of execution.
  * state `string` (values: STATE_UNSPECIFIED, ACTIVE, SUCCEEDED, FAILED, CANCELLED): Output only. Current state of the execution.
  * workflowRevisionId `string`: Output only. Revision of the workflow this execution is using.

### ListExecutionsResponse
* ListExecutionsResponse `object`: Response for the ListExecutions method.
  * executions `array`: The executions which match the request.
    * items [Execution](#execution)
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.


