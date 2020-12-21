# @datafire/google_script

Client library for Apps Script API

## Installation and Usage
```bash
npm install --save @datafire/google_script
```
```js
let google_script = require('@datafire/google_script').create({
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

Manages and executes Google Apps Script projects. 

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_script.oauthCallback({
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
google_script.oauthRefresh(null, context)
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

### script.processes.list
List information about processes made by or on behalf of a user, such as process type and current status.


```js
google_script.script.processes.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of returned processes per page of results. Defaults to 50.
  * pageToken `string`: The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
  * userProcessFilter.deploymentId `string`: Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
  * userProcessFilter.endTime `string`: Optional field used to limit returned processes to those that completed on or before the given timestamp.
  * userProcessFilter.functionName `string`: Optional field used to limit returned processes to those originating from a script function with the given function name.
  * userProcessFilter.projectName `string`: Optional field used to limit returned processes to those originating from projects with project names containing a specific string.
  * userProcessFilter.scriptId `string`: Optional field used to limit returned processes to those originating from projects with a specific script ID.
  * userProcessFilter.startTime `string`: Optional field used to limit returned processes to those that were started on or after the given timestamp.
  * userProcessFilter.statuses `array`: Optional field used to limit returned processes to those having one of the specified process statuses.
  * userProcessFilter.types `array`: Optional field used to limit returned processes to those having one of the specified process types.
  * userProcessFilter.userAccessLevels `array`: Optional field used to limit returned processes to those having one of the specified user access levels.
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
* output [ListUserProcessesResponse](#listuserprocessesresponse)

### script.processes.listScriptProcesses
List information about a script's executed processes, such as process type and current status.


```js
google_script.script.processes.listScriptProcesses({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of returned processes per page of results. Defaults to 50.
  * pageToken `string`: The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
  * scriptId `string`: The script ID of the project whose processes are listed.
  * scriptProcessFilter.deploymentId `string`: Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
  * scriptProcessFilter.endTime `string`: Optional field used to limit returned processes to those that completed on or before the given timestamp.
  * scriptProcessFilter.functionName `string`: Optional field used to limit returned processes to those originating from a script function with the given function name.
  * scriptProcessFilter.startTime `string`: Optional field used to limit returned processes to those that were started on or after the given timestamp.
  * scriptProcessFilter.statuses `array`: Optional field used to limit returned processes to those having one of the specified process statuses.
  * scriptProcessFilter.types `array`: Optional field used to limit returned processes to those having one of the specified process types.
  * scriptProcessFilter.userAccessLevels `array`: Optional field used to limit returned processes to those having one of the specified user access levels.
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
* output [ListScriptProcessesResponse](#listscriptprocessesresponse)

### script.projects.create
Creates a new, empty script project with no script files and a base manifest file.


```js
google_script.script.projects.create({}, context)
```

#### Input
* input `object`
  * body [CreateProjectRequest](#createprojectrequest)
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
* output [Project](#project)

### script.projects.get
Gets a script project's metadata.


```js
google_script.script.projects.get({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: The script project's Drive ID.
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
* output [Project](#project)

### script.projects.getContent
Gets the content of the script project, including the code source and metadata for each script file.


```js
google_script.script.projects.getContent({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: The script project's Drive ID.
  * versionNumber `integer`: The version number of the project to retrieve. If not provided, the project's HEAD version is returned.
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
* output [Content](#content)

### script.projects.updateContent
Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.


```js
google_script.script.projects.updateContent({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: The script project's Drive ID.
  * body [Content](#content)
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
* output [Content](#content)

### script.projects.deployments.list
Lists the deployments of an Apps Script project.


```js
google_script.script.projects.deployments.list({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: The script project's Drive ID.
  * pageSize `integer`: The maximum number of deployments on each returned page. Defaults to 50.
  * pageToken `string`: The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
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
* output [ListDeploymentsResponse](#listdeploymentsresponse)

### script.projects.deployments.create
Creates a deployment of an Apps Script project.


```js
google_script.script.projects.deployments.create({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: The script project's Drive ID.
  * body [DeploymentConfig](#deploymentconfig)
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
* output [Deployment](#deployment)

### script.projects.deployments.delete
Deletes a deployment of an Apps Script project.


```js
google_script.script.projects.deployments.delete({
  "scriptId": "",
  "deploymentId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: The script project's Drive ID.
  * deploymentId **required** `string`: The deployment ID to be undeployed.
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

### script.projects.deployments.get
Gets a deployment of an Apps Script project.


```js
google_script.script.projects.deployments.get({
  "scriptId": "",
  "deploymentId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: The script project's Drive ID.
  * deploymentId **required** `string`: The deployment ID.
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
* output [Deployment](#deployment)

### script.projects.deployments.update
Updates a deployment of an Apps Script project.


```js
google_script.script.projects.deployments.update({
  "scriptId": "",
  "deploymentId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: The script project's Drive ID.
  * deploymentId **required** `string`: The deployment ID for this deployment.
  * body [UpdateDeploymentRequest](#updatedeploymentrequest)
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
* output [Deployment](#deployment)

### script.projects.getMetrics
Get metrics data for scripts, such as number of executions and active users.


```js
google_script.script.projects.getMetrics({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: Required field indicating the script to get metrics for.
  * metricsFilter.deploymentId `string`: Optional field indicating a specific deployment to retrieve metrics from.
  * metricsGranularity `string` (values: UNSPECIFIED_GRANULARITY, WEEKLY, DAILY): Required field indicating what granularity of metrics are returned.
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
* output [Metrics](#metrics)

### script.projects.versions.list
List the versions of a script project.


```js
google_script.script.projects.versions.list({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: The script project's Drive ID.
  * pageSize `integer`: The maximum number of versions on each returned page. Defaults to 50.
  * pageToken `string`: The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
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
* output [ListVersionsResponse](#listversionsresponse)

### script.projects.versions.create
Creates a new immutable version using the current code, with a unique version number.


```js
google_script.script.projects.versions.create({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: The script project's Drive ID.
  * body [Version](#version)
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
* output [Version](#version)

### script.projects.versions.get
Gets a version of a script project.


```js
google_script.script.projects.versions.get({
  "scriptId": "",
  "versionNumber": 0
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: The script project's Drive ID.
  * versionNumber **required** `integer`: The version number.
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
* output [Version](#version)

### script.scripts.run
Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the project in the script editor, then select **File > Project properties** and click the **Scopes** tab. The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.


```js
google_script.script.scripts.run({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: The script ID of the script to be executed. To find the script ID, open the project in the script editor and select **File > Project properties**.
  * body [ExecutionRequest](#executionrequest)
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
* output [Operation](#operation)



## Definitions

### Content
* Content `object`: The Content resource.
  * files `array`: The list of script project files. One of the files is a script manifest; it must be named "appsscript", must have type of JSON, and include the manifest configurations for the project.
    * items [File](#file)
  * scriptId `string`: The script project's Drive ID.

### CreateProjectRequest
* CreateProjectRequest `object`: Request to create a script project.
  * parentId `string`: The Drive ID of a parent file that the created script project is bound to. This is usually the ID of a Google Doc, Google Sheet, Google Form, or Google Slides file. If not set, a standalone script project is created.
  * title `string`: The title for the project.

### Deployment
* Deployment `object`: Representation of a single script deployment.
  * deploymentConfig [DeploymentConfig](#deploymentconfig)
  * deploymentId `string`: The deployment ID for this deployment.
  * entryPoints `array`: The deployment's entry points.
    * items [EntryPoint](#entrypoint)
  * updateTime `string`: Last modified date time stamp.

### DeploymentConfig
* DeploymentConfig `object`: Metadata the defines how a deployment is configured.
  * description `string`: The description for this deployment.
  * manifestFileName `string`: The manifest file name for this deployment.
  * scriptId `string`: The script project's Drive ID.
  * versionNumber `integer`: The version number on which this deployment is based.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### EntryPoint
* EntryPoint `object`: A configuration that defines how a deployment is accessed externally.
  * addOn [GoogleAppsScriptTypeAddOnEntryPoint](#googleappsscripttypeaddonentrypoint)
  * entryPointType `string` (values: ENTRY_POINT_TYPE_UNSPECIFIED, WEB_APP, EXECUTION_API, ADD_ON): The type of the entry point.
  * executionApi [GoogleAppsScriptTypeExecutionApiEntryPoint](#googleappsscripttypeexecutionapientrypoint)
  * webApp [GoogleAppsScriptTypeWebAppEntryPoint](#googleappsscripttypewebappentrypoint)

### ExecuteStreamResponse
* ExecuteStreamResponse `object`: The response for executing or debugging a function in an Apps Script project.
  * result [ScriptExecutionResult](#scriptexecutionresult)

### ExecutionError
* ExecutionError `object`: An object that provides information about the nature of an error resulting from an attempted execution of a script function using the Apps Script API. If a run call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains a Status object. The `Status` object's `details` field contains an array with a single one of these `ExecutionError` objects.
  * errorMessage `string`: The error message thrown by Apps Script, usually localized into the user's language.
  * errorType `string`: The error type, for example `TypeError` or `ReferenceError`. If the error type is unavailable, this field is not included.
  * scriptStackTraceElements `array`: An array of objects that provide a stack trace through the script to show where the execution failed, with the deepest call first.
    * items [ScriptStackTraceElement](#scriptstacktraceelement)

### ExecutionRequest
* ExecutionRequest `object`: A request to run the function in a script. The script is identified by the specified `script_id`. Executing a function on a script returns results based on the implementation of the script.
  * parameters `array`: The parameters to be passed to the function being executed. The object type for each parameter should match the expected type in Apps Script. Parameters cannot be Apps Script-specific object types (such as a `Document` or a `Calendar`); they can only be primitive types such as `string`, `number`, `array`, `object`, or `boolean`. Optional.
  * devMode `boolean`: If `true` and the user is an owner of the script, the script runs at the most recently saved version rather than the version deployed for use with the Apps Script API. Optional; default is `false`.
  * function `string`: The name of the function to execute in the given script. The name does not include parentheses or parameters. It can reference a function in an included library such as `Library.libFunction1`.
  * sessionState `string`: *Deprecated*. For use with Android add-ons only. An ID that represents the user's current session in the Android app for Google Docs or Sheets, included as extra data in the [Intent](https://developer.android.com/guide/components/intents-filters.html) that launches the add-on. When an Android add-on is run with a session state, it gains the privileges of a [bound](https://developers.google.com/apps-script/guides/bound) script—that is, it can access information like the user's current cursor position (in Docs) or selected cell (in Sheets). To retrieve the state, call `Intent.getStringExtra("com.google.android.apps.docs.addons.SessionState")`. Optional.

### ExecutionResponse
* ExecutionResponse `object`: An object that provides the return value of a function executed using the Apps Script API. If the script function returns successfully, the response body's response field contains this `ExecutionResponse` object.

### File
* File `object`: An individual file within a script project. A file is a third-party source code created by one or more developers. It can be a server-side JS code, HTML, or a configuration file. Each script project can contain multiple files.
  * createTime `string`: Creation date timestamp. This read-only field is only visible to users who have WRITER permission for the script project.
  * functionSet [GoogleAppsScriptTypeFunctionSet](#googleappsscripttypefunctionset)
  * lastModifyUser [GoogleAppsScriptTypeUser](#googleappsscripttypeuser)
  * name `string`: The name of the file. The file extension is not part of the file name, which can be identified from the type field.
  * source `string`: The file content.
  * type `string` (values: ENUM_TYPE_UNSPECIFIED, SERVER_JS, HTML, JSON): The type of the file.
  * updateTime `string`: Last modified date timestamp. This read-only field is only visible to users who have WRITER permission for the script project.

### GoogleAppsScriptTypeAddOnEntryPoint
* GoogleAppsScriptTypeAddOnEntryPoint `object`: An add-on entry point.
  * addOnType `string` (values: UNKNOWN_ADDON_TYPE, GMAIL, DATA_STUDIO): The add-on's required list of supported container types.
  * description `string`: The add-on's optional description.
  * helpUrl `string`: The add-on's optional help URL.
  * postInstallTipUrl `string`: The add-on's required post install tip URL.
  * reportIssueUrl `string`: The add-on's optional report issue URL.
  * title `string`: The add-on's required title.

### GoogleAppsScriptTypeExecutionApiConfig
* GoogleAppsScriptTypeExecutionApiConfig `object`: API executable entry point configuration.
  * access `string` (values: UNKNOWN_ACCESS, MYSELF, DOMAIN, ANYONE, ANYONE_ANONYMOUS): Who has permission to run the API executable.

### GoogleAppsScriptTypeExecutionApiEntryPoint
* GoogleAppsScriptTypeExecutionApiEntryPoint `object`: An API executable entry point.
  * entryPointConfig [GoogleAppsScriptTypeExecutionApiConfig](#googleappsscripttypeexecutionapiconfig)

### GoogleAppsScriptTypeFunction
* GoogleAppsScriptTypeFunction `object`: Represents a function in a script project.
  * name `string`: The function name in the script project.

### GoogleAppsScriptTypeFunctionSet
* GoogleAppsScriptTypeFunctionSet `object`: A set of functions. No duplicates are permitted.
  * values `array`: A list of functions composing the set.
    * items [GoogleAppsScriptTypeFunction](#googleappsscripttypefunction)

### GoogleAppsScriptTypeProcess
* GoogleAppsScriptTypeProcess `object`: Representation of a single script process execution that was started from the script editor, a trigger, an application, or using the Apps Script API. This is distinct from the `Operation` resource, which only represents executions started via the Apps Script API.
  * duration `string`: Duration the execution spent executing.
  * functionName `string`: Name of the function the started the execution.
  * processStatus `string` (values: PROCESS_STATUS_UNSPECIFIED, RUNNING, PAUSED, COMPLETED, CANCELED, FAILED, TIMED_OUT, UNKNOWN, DELAYED): The executions status.
  * processType `string` (values: PROCESS_TYPE_UNSPECIFIED, ADD_ON, EXECUTION_API, TIME_DRIVEN, TRIGGER, WEBAPP, EDITOR, SIMPLE_TRIGGER, MENU, BATCH_TASK): The executions type.
  * projectName `string`: Name of the script being executed.
  * startTime `string`: Time the execution started.
  * userAccessLevel `string` (values: USER_ACCESS_LEVEL_UNSPECIFIED, NONE, READ, WRITE, OWNER): The executing users access level to the script.

### GoogleAppsScriptTypeUser
* GoogleAppsScriptTypeUser `object`: A simple user profile resource.
  * domain `string`: The user's domain.
  * email `string`: The user's identifying email address.
  * name `string`: The user's display name.
  * photoUrl `string`: The user's photo.

### GoogleAppsScriptTypeWebAppConfig
* GoogleAppsScriptTypeWebAppConfig `object`: Web app entry point configuration.
  * access `string` (values: UNKNOWN_ACCESS, MYSELF, DOMAIN, ANYONE, ANYONE_ANONYMOUS): Who has permission to run the web app.
  * executeAs `string` (values: UNKNOWN_EXECUTE_AS, USER_ACCESSING, USER_DEPLOYING): Who to execute the web app as.

### GoogleAppsScriptTypeWebAppEntryPoint
* GoogleAppsScriptTypeWebAppEntryPoint `object`: A web application entry point.
  * entryPointConfig [GoogleAppsScriptTypeWebAppConfig](#googleappsscripttypewebappconfig)
  * url `string`: The URL for the web application.

### ListDeploymentsResponse
* ListDeploymentsResponse `object`: Response with the list of deployments for the specified Apps Script project.
  * deployments `array`: The list of deployments.
    * items [Deployment](#deployment)
  * nextPageToken `string`: The token that can be used in the next call to get the next page of results.

### ListScriptProcessesResponse
* ListScriptProcessesResponse `object`: Response with the list of Process resources.
  * nextPageToken `string`: Token for the next page of results. If empty, there are no more pages remaining.
  * processes `array`: List of processes matching request parameters.
    * items [GoogleAppsScriptTypeProcess](#googleappsscripttypeprocess)

### ListUserProcessesResponse
* ListUserProcessesResponse `object`: Response with the list of Process resources.
  * nextPageToken `string`: Token for the next page of results. If empty, there are no more pages remaining.
  * processes `array`: List of processes matching request parameters.
    * items [GoogleAppsScriptTypeProcess](#googleappsscripttypeprocess)

### ListValue
* ListValue `object`: `ListValue` is a wrapper around a repeated field of values.
  * values `array`: Repeated field of dynamically typed values.
    * items [Value](#value)

### ListVersionsResponse
* ListVersionsResponse `object`: Response with the list of the versions for the specified script project.
  * nextPageToken `string`: The token use to fetch the next page of records. if not exist in the response, that means no more versions to list.
  * versions `array`: The list of versions.
    * items [Version](#version)

### Metrics
* Metrics `object`: Resource containing usage stats for a given script, based on the supplied filter and mask present in the request.
  * activeUsers `array`: Number of active users.
    * items [MetricsValue](#metricsvalue)
  * failedExecutions `array`: Number of failed executions.
    * items [MetricsValue](#metricsvalue)
  * totalExecutions `array`: Number of total executions.
    * items [MetricsValue](#metricsvalue)

### MetricsValue
* MetricsValue `object`: Metrics value that holds number of executions counted.
  * endTime `string`: Required field indicating the end time of the interval.
  * startTime `string`: Required field indicating the start time of the interval.
  * value `string`: Indicates the number of executions counted.

### Operation
* Operation `object`: A representation of an execution of an Apps Script function started with run. The execution response does not arrive until the function finishes executing. The maximum execution runtime is listed in the [Apps Script quotas guide](/apps-script/guides/services/quotas#current_limitations). After execution has started, it can have one of four outcomes: - If the script function returns successfully, the response field contains an ExecutionResponse object with the function's return value in the object's `result` field. - If the script function (or Apps Script itself) throws an exception, the error field contains a Status object. The `Status` object's `details` field contains an array with a single ExecutionError object that provides information about the nature of the error. - If the execution has not yet completed, the done field is `false` and the neither the `response` nor `error` fields are present. - If the `run` call itself fails (for example, because of a malformed request or an authorization error), the method returns an HTTP response code in the 4XX range with a different format for the response body. Client libraries automatically convert a 4XX response into an exception class. 
  * done `boolean`: This field indicates whether the script execution has completed. A completed execution has a populated `response` field containing the ExecutionResponse from function that was executed.
  * error [Status](#status)
  * response `object`: If the script function returns successfully, this field contains an ExecutionResponse object with the function's return value.

### Project
* Project `object`: The script project resource.
  * createTime `string`: When the script was created.
  * creator [GoogleAppsScriptTypeUser](#googleappsscripttypeuser)
  * lastModifyUser [GoogleAppsScriptTypeUser](#googleappsscripttypeuser)
  * parentId `string`: The parent's Drive ID that the script will be attached to. This is usually the ID of a Google Document or Google Sheet. This filed is optional, and if not set, a stand-alone script will be created.
  * scriptId `string`: The script project's Drive ID.
  * title `string`: The title for the project.
  * updateTime `string`: When the script was last updated.

### ScriptExecutionResult
* ScriptExecutionResult `object`: The result of an execution.
  * returnValue [Value](#value)

### ScriptStackTraceElement
* ScriptStackTraceElement `object`: A stack trace through the script that shows where the execution failed.
  * function `string`: The name of the function that failed.
  * lineNumber `integer`: The line number where the script failed.

### Status
* Status `object`: If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object.
  * code `integer`: The status code. For this API, this value either: - 10, indicating a `SCRIPT_TIMEOUT` error, - 3, indicating an `INVALID_ARGUMENT` error, or - 1, indicating a `CANCELLED` execution. 
  * details `array`: An array that contains a single ExecutionError object that provides information about the nature of the error.
    * items `object`
  * message `string`: A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the details field, or localized by the client.

### Struct
* Struct `object`: `Struct` represents a structured data value, consisting of fields which map to dynamically typed values.
  * fields `object`: Unordered map of dynamically typed values.

### UpdateDeploymentRequest
* UpdateDeploymentRequest `object`: Request with deployment information to update an existing deployment.
  * deploymentConfig [DeploymentConfig](#deploymentconfig)

### Value
* Value `object`: `Value` represents a dynamically typed value which is the outcome of an executed script.
  * boolValue `boolean`: Represents a boolean value.
  * bytesValue `string`: Represents raw byte values.
  * dateValue `string`: Represents a date in ms since the epoch.
  * listValue [ListValue](#listvalue)
  * nullValue `string` (values: NULL_VALUE): Represents a null value.
  * numberValue `number`: Represents a double value.
  * protoValue `object`: Represents a structured proto value.
  * stringValue `string`: Represents a string value.
  * structValue [Struct](#struct)

### Version
* Version `object`: A resource representing a script project version. A version is a "snapshot" of a script project and is similar to a read-only branched release. When creating deployments, the version to use must be specified.
  * createTime `string`: When the version was created.
  * description `string`: The description for this version.
  * scriptId `string`: The script project's Drive ID.
  * versionNumber `integer`: The incremental ID that is created by Apps Script when a version is created. This is system assigned number and is immutable once created.


