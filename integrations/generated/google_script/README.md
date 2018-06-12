# @datafire/google_script

Client library for Apps Script

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

google_script.projects.create({}).then(data => {
  console.log(data);
});
```

## Description

An API for managing and executing Google Apps Script projects. <aside class="note"><b>Note</b>: In order to use this API in your apps, you must <a href="/apps-script/api/how-tos/enable#using_the_apps_script_api_in_your_app"> enable it for use</a>. To allow other apps to manage your scripts, you must <a href="/apps-script/api/how-tos/enable#granting_third-party_applications_access_to_your_script_projects"> grant them access</a>.</aside>


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

### processes.list
List information about processes made by or on behalf of a user,
such as process type and current status.


```js
google_script.processes.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of returned processes per page of results. Defaults to
  * pageToken `string`: The token for continuing a previous list request on the next page. This
  * userProcessFilter.deploymentId `string`: Optional field used to limit returned processes to those originating from
  * userProcessFilter.endTime `string`: Optional field used to limit returned processes to those that completed
  * userProcessFilter.functionName `string`: Optional field used to limit returned processes to those originating from
  * userProcessFilter.projectName `string`: Optional field used to limit returned processes to those originating from
  * userProcessFilter.scriptId `string`: Optional field used to limit returned processes to those originating from
  * userProcessFilter.startTime `string`: Optional field used to limit returned processes to those that were
  * userProcessFilter.statuses `array`: Optional field used to limit returned processes to those having one of
  * userProcessFilter.types `array`: Optional field used to limit returned processes to those having one of
  * userProcessFilter.userAccessLevels `array`: Optional field used to limit returned processes to those having one of
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListUserProcessesResponse](#listuserprocessesresponse)

### processes.listScriptProcesses
List information about a script's executed processes, such as process type
and current status.


```js
google_script.processes.listScriptProcesses({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of returned processes per page of results. Defaults to
  * pageToken `string`: The token for continuing a previous list request on the next page. This
  * scriptId `string`: The script ID of the project whose processes are listed.
  * scriptProcessFilter.deploymentId `string`: Optional field used to limit returned processes to those originating from
  * scriptProcessFilter.endTime `string`: Optional field used to limit returned processes to those that completed
  * scriptProcessFilter.functionName `string`: Optional field used to limit returned processes to those originating from
  * scriptProcessFilter.startTime `string`: Optional field used to limit returned processes to those that were
  * scriptProcessFilter.statuses `array`: Optional field used to limit returned processes to those having one of
  * scriptProcessFilter.types `array`: Optional field used to limit returned processes to those having one of
  * scriptProcessFilter.userAccessLevels `array`: Optional field used to limit returned processes to those having one of
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListScriptProcessesResponse](#listscriptprocessesresponse)

### projects.create
Creates a new, empty script project with no script files and a base
manifest file.


```js
google_script.projects.create({}, context)
```

#### Input
* input `object`
  * body [CreateProjectRequest](#createprojectrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Project](#project)

### projects.get
Gets a script project's metadata.


```js
google_script.projects.get({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: The script project's Drive ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Project](#project)

### projects.getContent
Gets the content of the script project, including the code source and
metadata for each script file.


```js
google_script.projects.getContent({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * scriptId **required** `string`: The script project's Drive ID.
  * versionNumber `integer`: The version number of the project to retrieve. If not provided, the
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Content](#content)

### projects.updateContent
Updates the content of the specified script project.
This content is stored as the HEAD version, and is used when the script is
executed as a trigger, in the script editor, in add-on preview mode, or as
a web app or Apps Script API in development mode. This clears all the
existing files in the project.


```js
google_script.projects.updateContent({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * body [Content](#content)
  * scriptId **required** `string`: The script project's Drive ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Content](#content)

### projects.deployments.list
Lists the deployments of an Apps Script project.


```js
google_script.projects.deployments.list({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of deployments on each returned page. Defaults to 50.
  * pageToken `string`: The token for continuing a previous list request on the next page. This
  * scriptId **required** `string`: The script project's Drive ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListDeploymentsResponse](#listdeploymentsresponse)

### projects.deployments.create
Creates a deployment of an Apps Script project.


```js
google_script.projects.deployments.create({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * body [DeploymentConfig](#deploymentconfig)
  * scriptId **required** `string`: The script project's Drive ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Deployment](#deployment)

### projects.deployments.delete
Deletes a deployment of an Apps Script project.


```js
google_script.projects.deployments.delete({
  "deploymentId": "",
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * deploymentId **required** `string`: The deployment ID to be undeployed.
  * scriptId **required** `string`: The script project's Drive ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

### projects.deployments.get
Gets a deployment of an Apps Script project.


```js
google_script.projects.deployments.get({
  "deploymentId": "",
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * deploymentId **required** `string`: The deployment ID.
  * scriptId **required** `string`: The script project's Drive ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Deployment](#deployment)

### projects.deployments.update
Updates a deployment of an Apps Script project.


```js
google_script.projects.deployments.update({
  "deploymentId": "",
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateDeploymentRequest](#updatedeploymentrequest)
  * deploymentId **required** `string`: The deployment ID for this deployment.
  * scriptId **required** `string`: The script project's Drive ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Deployment](#deployment)

### projects.getMetrics
Get metrics data for scripts, such as number of executions and
active users.


```js
google_script.projects.getMetrics({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * metricsFilter.deploymentId `string`: Optional field indicating a specific deployment to retrieve metrics from.
  * metricsGranularity `string` (values: UNSPECIFIED_GRANULARITY, WEEKLY, DAILY): Required field indicating what granularity of metrics are returned.
  * scriptId **required** `string`: Required field indicating the script to get metrics for.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Metrics](#metrics)

### projects.versions.list
List the versions of a script project.


```js
google_script.projects.versions.list({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of versions on each returned page. Defaults to 50.
  * pageToken `string`: The token for continuing a previous list request on the next page. This
  * scriptId **required** `string`: The script project's Drive ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListVersionsResponse](#listversionsresponse)

### projects.versions.create
Creates a new immutable version using the current code, with a unique
version number.


```js
google_script.projects.versions.create({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * body [Version](#version)
  * scriptId **required** `string`: The script project's Drive ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Version](#version)

### projects.versions.get
Gets a version of a script project.


```js
google_script.projects.versions.get({
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
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Version](#version)

### scripts.run
Runs a function in an Apps Script project. The project must be deployed
for use with the Apps Script API.

This method requires authorization with an OAuth 2.0 token that includes at
least one of the scopes listed in the [Authorization](#authorization)
section; script projects that do not require authorization cannot be
executed through this API. To find the correct scopes to include in the
authentication token, open the project in the script editor, then select
**File > Project properties** and click the **Scopes** tab.


```js
google_script.scripts.run({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * body [ExecutionRequest](#executionrequest)
  * scriptId **required** `string`: The script ID of the script to be executed. To find the script ID, open
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)



## Definitions

### Content
* Content `object`: The Content resource.
  * files `array`: The list of script project files.
    * items [File](#file)
  * scriptId `string`: The script project's Drive ID.

### CreateProjectRequest
* CreateProjectRequest `object`: Request to create a script project.
  * parentId `string`: The Drive ID of a parent file that the created script project is bound to.
  * title `string`: The title for the project.

### Deployment
* Deployment `object`: Representation of a single script deployment.
  * deploymentConfig [DeploymentConfig](#deploymentconfig)
  * deploymentId `string`: The deployment ID for this deployment.
  * entryPoints `array`: The deployment's entry points.
    * items [EntryPoint](#entrypoint)
  * functionSet [GoogleAppsScriptTypeFunctionSet](#googleappsscripttypefunctionset)
  * scopeSet [GoogleAppsScriptTypeScopeSet](#googleappsscripttypescopeset)
  * updateTime `string`: Last modified date time stamp.

### DeploymentConfig
* DeploymentConfig `object`: Metadata the defines how a deployment is configured.
  * description `string`: The description for this deployment.
  * manifestFileName `string`: The manifest file name for this deployment.
  * scriptId `string`: The script project's Drive ID.
  * versionNumber `integer`: The version number on which this deployment is based.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### EntryPoint
* EntryPoint `object`: A configuration that defines how a deployment is accessed externally.
  * addOn [GoogleAppsScriptTypeAddOnEntryPoint](#googleappsscripttypeaddonentrypoint)
  * entryPointType `string` (values: ENTRY_POINT_TYPE_UNSPECIFIED, WEB_APP, EXECUTION_API, ADD_ON): The type of the entry point.
  * executionApi [GoogleAppsScriptTypeExecutionApiEntryPoint](#googleappsscripttypeexecutionapientrypoint)
  * webApp [GoogleAppsScriptTypeWebAppEntryPoint](#googleappsscripttypewebappentrypoint)

### ExecutionError
* ExecutionError `object`: An object that provides information about the nature of an error resulting
  * errorMessage `string`: The error message thrown by Apps Script, usually localized into the user's
  * errorType `string`: The error type, for example `TypeError` or `ReferenceError`. If the error
  * scriptStackTraceElements `array`: An array of objects that provide a stack trace through the script to show
    * items [ScriptStackTraceElement](#scriptstacktraceelement)

### ExecutionRequest
* ExecutionRequest `object`: A request to run the function in a script. The script is identified by the
  * devMode `boolean`: If `true` and the user is an owner of the script, the script runs at the
  * function `string`: The name of the function to execute in the given script. The name does not
  * parameters `array`: The parameters to be passed to the function being executed. The object type

  * sessionState `string`: For Android add-ons only. An ID that represents the user's current session

### ExecutionResponse
* ExecutionResponse `object`: An object that provides the return value of a function executed using the

### File
* File `object`: An individual file within a script project.
  * createTime `string`: Creation date timestamp.
  * functionSet [GoogleAppsScriptTypeFunctionSet](#googleappsscripttypefunctionset)
  * lastModifyUser [GoogleAppsScriptTypeUser](#googleappsscripttypeuser)
  * name `string`: The name of the file. The file extension is not part of the file
  * source `string`: The file content.
  * type `string` (values: ENUM_TYPE_UNSPECIFIED, SERVER_JS, HTML, JSON): The type of the file.
  * updateTime `string`: Last modified date timestamp.

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
* GoogleAppsScriptTypeProcess `object`: Representation of a single script process execution that was started from
  * duration `string`: Duration the execution spent executing.
  * executingUser `string`: User-facing name for the user executing the script.
  * functionName `string`: Name of the function the started the execution.
  * processStatus `string` (values: PROCESS_STATUS_UNSPECIFIED, RUNNING, PAUSED, COMPLETED, CANCELED, FAILED, TIMED_OUT, UNKNOWN, DELAYED): The executions status.
  * processType `string` (values: PROCESS_TYPE_UNSPECIFIED, ADD_ON, EXECUTION_API, TIME_DRIVEN, TRIGGER, WEBAPP, EDITOR, SIMPLE_TRIGGER, MENU): The executions type.
  * projectName `string`: Name of the script being executed.
  * startTime `string`: Time the execution started.
  * userAccessLevel `string` (values: USER_ACCESS_LEVEL_UNSPECIFIED, NONE, READ, WRITE, OWNER): The executing users access level to the script.

### GoogleAppsScriptTypeScope
* GoogleAppsScriptTypeScope `object`: Represents an authorization scope.
  * authorizer `string` (values: SCOPE_AUTHORIZER_UNSPECIFIED, AUTHORIZED_BY_DEVELOPER, AUTHORIZED_BY_END_USER): Who authorized the scope.
  * name `string`: The scope's identifying string.

### GoogleAppsScriptTypeScopeSet
* GoogleAppsScriptTypeScopeSet `object`: A set of scopes. No duplicates are permitted.
  * values `array`: List of scope values in the set.
    * items [GoogleAppsScriptTypeScope](#googleappsscripttypescope)

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
  * nextPageToken `string`: The token that can be used in the next call to get the next page of

### ListScriptProcessesResponse
* ListScriptProcessesResponse `object`: Response with the list of
  * nextPageToken `string`: Token for the next page of results. If empty, there are no more pages
  * processes `array`: List of processes matching request parameters.
    * items [GoogleAppsScriptTypeProcess](#googleappsscripttypeprocess)

### ListUserProcessesResponse
* ListUserProcessesResponse `object`: Response with the list of
  * nextPageToken `string`: Token for the next page of results. If empty, there are no more pages
  * processes `array`: List of processes matching request parameters.
    * items [GoogleAppsScriptTypeProcess](#googleappsscripttypeprocess)

### ListVersionsResponse
* ListVersionsResponse `object`: Response with the list of the versions for the specified script project.
  * nextPageToken `string`: The token use to fetch the next page of records. if not exist in the
  * versions `array`: The list of versions.
    * items [Version](#version)

### Metrics
* Metrics `object`: Resource containing usage stats for a given script, based on the supplied
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
* Operation `object`: A representation of a execution of an Apps Script function that is started using run. The execution response does not arrive until the function finishes executing. The maximum execution runtime is listed in the [Apps Script quotas guide](/apps-script/guides/services/quotas#current_limitations). <p>After the execution is started, it can have one of four outcomes:</p> <ul> <li> If the script function returns successfully, the
  * done `boolean`: This field indicates whether the script execution has completed. A completed execution has a populated `response` field containing the ExecutionResponse from function that was executed.
  * error [Status](#status)
  * response `object`: If the script function returns successfully, this field contains an ExecutionResponse object with the function's return value.

### Project
* Project `object`: The script project resource.
  * createTime `string`: When the script was created.
  * creator [GoogleAppsScriptTypeUser](#googleappsscripttypeuser)
  * lastModifyUser [GoogleAppsScriptTypeUser](#googleappsscripttypeuser)
  * parentId `string`: The parent's Drive ID that the script will be attached to. This is usually
  * scriptId `string`: The script project's Drive ID.
  * title `string`: The title for the project.
  * updateTime `string`: When the script was last updated.

### ScriptStackTraceElement
* ScriptStackTraceElement `object`: A stack trace through the script that shows where the execution failed.
  * function `string`: The name of the function that failed.
  * lineNumber `integer`: The line number where the script failed.

### Status
* Status `object`: If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object.
  * code `integer`: The status code. For this API, this value either: <ul> <li> 10, indicating a `SCRIPT_TIMEOUT` error,</li> <li> 3, indicating an `INVALID_ARGUMENT` error, or</li> <li> 1, indicating a `CANCELLED` execution.</li> </ul>
  * details `array`: An array that contains a single ExecutionError object that provides information about the nature of the error.
    * items `object`
  * message `string`: A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the [google.rpc.Status.details](google.rpc.Status.details) field, or localized by the client.

### UpdateDeploymentRequest
* UpdateDeploymentRequest `object`: Request with deployment information to update an existing deployment.
  * deploymentConfig [DeploymentConfig](#deploymentconfig)

### Version
* Version `object`: A resource representing a script project version. A version is a "snapshot"
  * createTime `string`: When the version was created.
  * description `string`: The description for this version.
  * scriptId `string`: The script project's Drive ID.
  * versionNumber `integer`: The incremental ID that is created by Apps Script when a version is


