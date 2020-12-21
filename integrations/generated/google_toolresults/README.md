# @datafire/google_toolresults

Client library for Cloud Tool Results API

## Installation and Usage
```bash
npm install --save @datafire/google_toolresults
```
```js
let google_toolresults = require('@datafire/google_toolresults').create({
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

API to publish and access results from developer tools.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_toolresults.oauthCallback({
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
google_toolresults.oauthRefresh(null, context)
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

### toolresults.projects.histories.list
Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist


```js
google_toolresults.toolresults.projects.histories.list({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * filterByName `string`: If set, only return histories with the given name. Optional.
  * pageSize `integer`: The maximum number of Histories to fetch. Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100. Optional.
  * pageToken `string`: A continuation token to resume the query at the next item. Optional.
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
* output [ListHistoriesResponse](#listhistoriesresponse)

### toolresults.projects.histories.create
Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist


```js
google_toolresults.toolresults.projects.histories.create({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * requestId `string`: A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
  * body [History](#history)
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
* output [History](#history)

### toolresults.projects.histories.get
Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist


```js
google_toolresults.toolresults.projects.histories.get({
  "projectId": "",
  "historyId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * historyId **required** `string`: A History id. Required.
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
* output [History](#history)

### toolresults.projects.histories.executions.list
Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist


```js
google_toolresults.toolresults.projects.histories.executions.list({
  "projectId": "",
  "historyId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * historyId **required** `string`: A History id. Required.
  * pageSize `integer`: The maximum number of Executions to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.
  * pageToken `string`: A continuation token to resume the query at the next item. Optional.
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

### toolresults.projects.histories.executions.create
Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist


```js
google_toolresults.toolresults.projects.histories.executions.create({
  "projectId": "",
  "historyId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * historyId **required** `string`: A History id. Required.
  * requestId `string`: A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
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

### toolresults.projects.histories.executions.get
Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist


```js
google_toolresults.toolresults.projects.histories.executions.get({
  "projectId": "",
  "historyId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * historyId **required** `string`: A History id. Required.
  * executionId **required** `string`: An Execution id. Required.
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

### toolresults.projects.histories.executions.patch
Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist


```js
google_toolresults.toolresults.projects.histories.executions.patch({
  "projectId": "",
  "historyId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * historyId **required** `string`: Required.
  * executionId **required** `string`: Required.
  * requestId `string`: A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
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

### toolresults.projects.histories.executions.clusters.list
Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.


```js
google_toolresults.toolresults.projects.histories.executions.clusters.list({
  "projectId": "",
  "historyId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * historyId **required** `string`: A History id. Required.
  * executionId **required** `string`: An Execution id. Required.
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
* output [ListScreenshotClustersResponse](#listscreenshotclustersresponse)

### toolresults.projects.histories.executions.clusters.get
Retrieves a single screenshot cluster by its ID


```js
google_toolresults.toolresults.projects.histories.executions.clusters.get({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * historyId **required** `string`: A History id. Required.
  * executionId **required** `string`: An Execution id. Required.
  * clusterId **required** `string`: A Cluster id Required.
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
* output [ScreenshotCluster](#screenshotcluster)

### toolresults.projects.histories.executions.environments.list
Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist


```js
google_toolresults.toolresults.projects.histories.executions.environments.list({
  "projectId": "",
  "historyId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. A Project id.
  * historyId **required** `string`: Required. A History id.
  * executionId **required** `string`: Required. An Execution id.
  * pageSize `integer`: The maximum number of Environments to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0.
  * pageToken `string`: A continuation token to resume the query at the next item.
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
* output [ListEnvironmentsResponse](#listenvironmentsresponse)

### toolresults.projects.histories.executions.environments.get
Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist


```js
google_toolresults.toolresults.projects.histories.executions.environments.get({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. A Project id.
  * historyId **required** `string`: Required. A History id.
  * executionId **required** `string`: Required. An Execution id.
  * environmentId **required** `string`: Required. An Environment id.
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
* output [Environment](#environment)

### toolresults.projects.histories.executions.steps.list
Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.list({
  "projectId": "",
  "historyId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * historyId **required** `string`: A History id. Required.
  * executionId **required** `string`: A Execution id. Required.
  * pageSize `integer`: The maximum number of Steps to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.
  * pageToken `string`: A continuation token to resume the query at the next item. Optional.
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
* output [ListStepsResponse](#liststepsresponse)

### toolresults.projects.histories.executions.steps.create
Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.create({
  "projectId": "",
  "historyId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. A Project id.
  * historyId **required** `string`: Required. A History id.
  * executionId **required** `string`: Required. An Execution id.
  * requestId `string`: A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
  * body [Step](#step)
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
* output [Step](#step)

### toolresults.projects.histories.executions.steps.get
Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.get({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * historyId **required** `string`: A History id. Required.
  * executionId **required** `string`: A Execution id. Required.
  * stepId **required** `string`: A Step id. Required.
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
* output [Step](#step)

### toolresults.projects.histories.executions.steps.patch
Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.patch({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * historyId **required** `string`: A History id. Required.
  * executionId **required** `string`: A Execution id. Required.
  * stepId **required** `string`: A Step id. Required.
  * requestId `string`: A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
  * body [Step](#step)
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
* output [Step](#step)

### toolresults.projects.histories.executions.steps.getPerfMetricsSummary
Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.getPerfMetricsSummary({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The cloud project
  * historyId **required** `string`: A tool results history ID.
  * executionId **required** `string`: A tool results execution ID.
  * stepId **required** `string`: A tool results step ID.
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
* output [PerfMetricsSummary](#perfmetricssummary)

### toolresults.projects.histories.executions.steps.perfMetricsSummary.create
Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.perfMetricsSummary.create({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The cloud project
  * historyId **required** `string`: A tool results history ID.
  * executionId **required** `string`: A tool results execution ID.
  * stepId **required** `string`: A tool results step ID.
  * body [PerfMetricsSummary](#perfmetricssummary)
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
* output [PerfMetricsSummary](#perfmetricssummary)

### toolresults.projects.histories.executions.steps.perfSampleSeries.list
Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.perfSampleSeries.list({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The cloud project
  * historyId **required** `string`: A tool results history ID.
  * executionId **required** `string`: A tool results execution ID.
  * stepId **required** `string`: A tool results step ID.
  * filter `array`: Specify one or more PerfMetricType values such as CPU to filter the result
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
* output [ListPerfSampleSeriesResponse](#listperfsampleseriesresponse)

### toolresults.projects.histories.executions.steps.perfSampleSeries.create
Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.perfSampleSeries.create({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The cloud project
  * historyId **required** `string`: A tool results history ID.
  * executionId **required** `string`: A tool results execution ID.
  * stepId **required** `string`: A tool results step ID.
  * body [PerfSampleSeries](#perfsampleseries)
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
* output [PerfSampleSeries](#perfsampleseries)

### toolresults.projects.histories.executions.steps.perfSampleSeries.get
Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.perfSampleSeries.get({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": "",
  "sampleSeriesId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The cloud project
  * historyId **required** `string`: A tool results history ID.
  * executionId **required** `string`: A tool results execution ID.
  * stepId **required** `string`: A tool results step ID.
  * sampleSeriesId **required** `string`: A sample series id
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
* output [PerfSampleSeries](#perfsampleseries)

### toolresults.projects.histories.executions.steps.perfSampleSeries.samples.list
Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.perfSampleSeries.samples.list({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": "",
  "sampleSeriesId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The cloud project
  * historyId **required** `string`: A tool results history ID.
  * executionId **required** `string`: A tool results execution ID.
  * stepId **required** `string`: A tool results step ID.
  * sampleSeriesId **required** `string`: A sample series id
  * pageSize `integer`: The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000
  * pageToken `string`: Optional, the next_page_token returned in the previous response
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
* output [ListPerfSamplesResponse](#listperfsamplesresponse)

### toolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate
Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": "",
  "sampleSeriesId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The cloud project
  * historyId **required** `string`: A tool results history ID.
  * executionId **required** `string`: A tool results execution ID.
  * stepId **required** `string`: A tool results step ID.
  * sampleSeriesId **required** `string`: A sample series id
  * body [BatchCreatePerfSamplesRequest](#batchcreateperfsamplesrequest)
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
* output [BatchCreatePerfSamplesResponse](#batchcreateperfsamplesresponse)

### toolresults.projects.histories.executions.steps.testCases.list
Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.testCases.list({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * historyId **required** `string`: A History id. Required.
  * executionId **required** `string`: A Execution id Required.
  * stepId **required** `string`: A Step id. Note: This step must include a TestExecutionStep. Required.
  * pageSize `integer`: The maximum number of TestCases to fetch. Default value: 100. The server will use this default if the field is not set or has a value of 0. Optional.
  * pageToken `string`: A continuation token to resume the query at the next item. Optional.
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
* output [ListTestCasesResponse](#listtestcasesresponse)

### toolresults.projects.histories.executions.steps.testCases.get
Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.testCases.get({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": "",
  "testCaseId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * historyId **required** `string`: A History id. Required.
  * executionId **required** `string`: A Execution id Required.
  * stepId **required** `string`: A Step id. Note: This step must include a TestExecutionStep. Required.
  * testCaseId **required** `string`: A Test Case id. Required.
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
* output [TestCase](#testcase)

### toolresults.projects.histories.executions.steps.thumbnails.list
Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.thumbnails.list({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * historyId **required** `string`: A History id. Required.
  * executionId **required** `string`: An Execution id. Required.
  * stepId **required** `string`: A Step id. Required.
  * pageSize `integer`: The maximum number of thumbnails to fetch. Default value: 50. The server will use this default if the field is not set or has a value of 0. Optional.
  * pageToken `string`: A continuation token to resume the query at the next item. Optional.
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
* output [ListStepThumbnailsResponse](#liststepthumbnailsresponse)

### toolresults.projects.histories.executions.steps.publishXunitXmlFiles
Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.publishXunitXmlFiles({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
  * historyId **required** `string`: A History id. Required.
  * executionId **required** `string`: A Execution id. Required.
  * stepId **required** `string`: A Step id. Note: This step must include a TestExecutionStep. Required.
  * body [PublishXunitXmlFilesRequest](#publishxunitxmlfilesrequest)
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
* output [Step](#step)

### toolresults.projects.getSettings
Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project


```js
google_toolresults.toolresults.projects.getSettings({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
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
* output [ProjectSettings](#projectsettings)

### toolresults.projects.initializeSettings
Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage


```js
google_toolresults.toolresults.projects.initializeSettings({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id. Required.
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
* output [ProjectSettings](#projectsettings)

### toolresults.projects.histories.executions.steps.accessibilityClusters
Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist


```js
google_toolresults.toolresults.projects.histories.executions.steps.accessibilityClusters({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Required.
  * locale `string`: The accepted format is the canonical Unicode format with hyphen as a delimiter. Language must be lowercase, Language Script - Capitalized, Region - UPPERCASE. See http://www.unicode.org/reports/tr35/#Unicode_locale_identifier for details. Required.
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
* output [ListStepAccessibilityClustersResponse](#liststepaccessibilityclustersresponse)



## Definitions

### ANR
* ANR `object`: Additional details for an ANR crash.
  * stackTrace [StackTrace](#stacktrace)

### AndroidAppInfo
* AndroidAppInfo `object`: Android app information.
  * name `string`: The name of the app. Optional
  * packageName `string`: The package name of the app. Required.
  * versionCode `string`: The internal version code of the app. Optional.
  * versionName `string`: The version name of the app. Optional.

### AndroidInstrumentationTest
* AndroidInstrumentationTest `object`: A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests.
  * testPackageId `string`: The java package for the test to be executed. Required
  * testRunnerClass `string`: The InstrumentationTestRunner class. Required
  * testTargets `array`: Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name" If empty, all targets in the module will be run.
    * items `string`
  * useOrchestrator `boolean`: The flag indicates whether Android Test Orchestrator will be used to run test or not.

### AndroidRoboTest
* AndroidRoboTest `object`: A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes.
  * appInitialActivity `string`: The initial activity that should be used to start the app. Optional
  * bootstrapPackageId `string`: The java package for the bootstrap. Optional
  * bootstrapRunnerClass `string`: The runner class for the bootstrap. Optional
  * maxDepth `integer`: The max depth of the traversal stack Robo can explore. Optional
  * maxSteps `integer`: The max number of steps/actions Robo can execute. Default is no limit (0). Optional

### AndroidTest
* AndroidTest `object`: An Android mobile test specification.
  * androidAppInfo [AndroidAppInfo](#androidappinfo)
  * androidInstrumentationTest [AndroidInstrumentationTest](#androidinstrumentationtest)
  * androidRoboTest [AndroidRoboTest](#androidrobotest)
  * androidTestLoop [AndroidTestLoop](#androidtestloop)
  * testTimeout [Duration](#duration)

### AndroidTestLoop
* AndroidTestLoop `object`: Test Loops are tests that can be launched by the app itself, determining when to run by listening for an intent.

### Any
* Any `object`:  `Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message. Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type. Example 1: Pack and unpack a message in C++. Foo foo = ...; Any any; any.PackFrom(foo); ... if (any.UnpackTo(&foo)) { ... } Example 2: Pack and unpack a message in Java. Foo foo = ...; Any any = Any.pack(foo); ... if (any.is(Foo.class)) { foo = any.unpack(Foo.class); } Example 3: Pack and unpack a message in Python. foo = Foo(...) any = Any() any.Pack(foo) ... if any.Is(Foo.DESCRIPTOR): any.Unpack(foo) ... Example 4: Pack and unpack a message in Go foo := &pb.Foo{...} any, err := ptypes.MarshalAny(foo) ... foo := &pb.Foo{} if err := ptypes.UnmarshalAny(any, foo); err != nil { ... } The pack methods provided by protobuf library will by default use 'type.googleapis.com/full.type.name' as the type URL and the unpack methods only use the fully qualified type name after the last '/' in the type URL, for example "foo.bar.com/x/y.z" will yield type name "y.z". # JSON The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example: package google.profile; message Person { string first_name = 1; string last_name = 2; } { "@type": "type.googleapis.com/google.profile.Person", "firstName": , "lastName": } If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message google.protobuf.Duration): { "@type": "type.googleapis.com/google.protobuf.Duration", "value": "1.212s" }
  * typeUrl `string`: A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a google.protobuf.Type value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.
  * value `string`: Must be a valid serialized protocol buffer of the above specified type.

### AppStartTime
* AppStartTime `object`
  * fullyDrawnTime [Duration](#duration)
  * initialDisplayTime [Duration](#duration)

### AvailableDeepLinks
* AvailableDeepLinks `object`: A suggestion to use deep links for a Robo run.

### BasicPerfSampleSeries
* BasicPerfSampleSeries `object`: Encapsulates the metadata for basic sample series represented by a line chart
  * perfMetricType `string` (values: perfMetricTypeUnspecified, memory, cpu, network, graphics)
  * perfUnit `string` (values: perfUnitUnspecified, kibibyte, percent, bytesPerSecond, framesPerSecond, byte)
  * sampleSeriesLabel `string` (values: sampleSeriesTypeUnspecified, memoryRssPrivate, memoryRssShared, memoryRssTotal, memoryTotal, cpuUser, cpuKernel, cpuTotal, ntBytesTransferred, ntBytesReceived, networkSent, networkReceived, graphicsFrameRate)

### BatchCreatePerfSamplesRequest
* BatchCreatePerfSamplesRequest `object`: The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error
  * perfSamples `array`: The set of PerfSamples to create should not include existing timestamps
    * items [PerfSample](#perfsample)

### BatchCreatePerfSamplesResponse
* BatchCreatePerfSamplesResponse `object`
  * perfSamples `array`
    * items [PerfSample](#perfsample)

### BlankScreen
* BlankScreen `object`: A warning that Robo encountered a screen that was mostly blank; this may indicate a problem with the app.
  * screenId `string`: The screen id of the element

### CPUInfo
* CPUInfo `object`
  * cpuProcessor `string`: description of the device processor ie '1.8 GHz hexa core 64-bit ARMv8-A'
  * cpuSpeedInGhz `number`: the CPU clock speed in GHz
  * numberOfCores `integer`: the number of CPU cores

### CrashDialogError
* CrashDialogError `object`: Crash dialog was detected during the test execution
  * crashPackage `string`: The name of the package that caused the dialog.

### DeviceOutOfMemory
* DeviceOutOfMemory `object`: A warning that device ran out of memory

### Duration
* Duration `object`:  A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years.
  * nanos `integer`: Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 `seconds` field and a positive or negative `nanos` field. For durations of one second or more, a non-zero value for the `nanos` field must be of the same sign as the `seconds` field. Must be from -999,999,999 to +999,999,999 inclusive.
  * seconds `string`: Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years

### EncounteredLoginScreen
* EncounteredLoginScreen `object`: Additional details about encountered login screens.
  * distinctScreens `integer`: Number of encountered distinct login screens.
  * screenIds `array`: Subset of login screens.
    * items `string`

### EncounteredNonAndroidUiWidgetScreen
* EncounteredNonAndroidUiWidgetScreen `object`: Additional details about encountered screens with elements that are not Android UI widgets.
  * distinctScreens `integer`: Number of encountered distinct screens with non Android UI widgets.
  * screenIds `array`: Subset of screens which contain non Android UI widgets.
    * items `string`

### Environment
* Environment `object`: An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes).
  * completionTime [Timestamp](#timestamp)
  * creationTime [Timestamp](#timestamp)
  * dimensionValue `array`: Dimension values describing the environment. Dimension values always consist of "Model", "Version", "Locale", and "Orientation". - In response: always set - In create request: always set - In update request: never set
    * items [EnvironmentDimensionValueEntry](#environmentdimensionvalueentry)
  * displayName `string`: A short human-readable name to display in the UI. Maximum of 100 characters. For example: Nexus 5, API 27.
  * environmentId `string`: Output only. An Environment id.
  * environmentResult [MergedResult](#mergedresult)
  * executionId `string`: Output only. An Execution id.
  * historyId `string`: Output only. A History id.
  * projectId `string`: Output only. A Project id.
  * resultsStorage [ResultsStorage](#resultsstorage)
  * shardSummaries `array`: Output only. Summaries of shards. Only one shard will present unless sharding feature is enabled in TestExecutionService.
    * items [ShardSummary](#shardsummary)

### EnvironmentDimensionValueEntry
* EnvironmentDimensionValueEntry `object`
  * key `string`
  * value `string`

### Execution
* Execution `object`: An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step The maximum size of an execution message is 1 MiB. An Execution can be updated until its state is set to COMPLETE at which point it becomes immutable.
  * completionTime [Timestamp](#timestamp)
  * creationTime [Timestamp](#timestamp)
  * dimensionDefinitions `array`: The dimensions along which different steps in this execution may vary. This must remain fixed over the life of the execution. Returns INVALID_ARGUMENT if this field is set in an update request. Returns INVALID_ARGUMENT if the same name occurs in more than one dimension_definition. Returns INVALID_ARGUMENT if the size of the list is over 100. - In response: present if set by create - In create request: optional - In update request: never set
    * items [MatrixDimensionDefinition](#matrixdimensiondefinition)
  * executionId `string`: A unique identifier within a History for this Execution. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create/update request: never set
  * outcome [Outcome](#outcome)
  * specification [Specification](#specification)
  * state `string` (values: unknownState, pending, inProgress, complete): The initial state is IN_PROGRESS. The only legal state transitions is from IN_PROGRESS to COMPLETE. A PRECONDITION_FAILED will be returned if an invalid transition is requested. The state can only be set to COMPLETE once. A FAILED_PRECONDITION will be returned if the state is set to COMPLETE multiple times. If the state is set to COMPLETE, all the in-progress steps within the execution will be set as COMPLETE. If the outcome of the step is not set, the outcome will be set to INCONCLUSIVE. - In response always set - In create/update request: optional
  * testExecutionMatrixId `string`: TestExecution Matrix ID that the TestExecutionService uses. - In response: present if set by create - In create: optional - In update: never set

### FailedToInstall
* FailedToInstall `object`: Failed to install the APK.

### FailureDetail
* FailureDetail `object`: Details for an outcome with a FAILURE outcome summary.
  * crashed `boolean`: If the failure was severe because the system (app) under test crashed.
  * deviceOutOfMemory `boolean`: If the device ran out of memory during a test, causing the test to crash.
  * failedRoboscript `boolean`: If the Roboscript failed to complete successfully, e.g., because a Roboscript action or assertion failed or a Roboscript action could not be matched during the entire crawl.
  * notInstalled `boolean`: If an app is not installed and thus no test can be run with the app. This might be caused by trying to run a test on an unsupported platform.
  * otherNativeCrash `boolean`: If a native process (including any other than the app) crashed.
  * timedOut `boolean`: If the test overran some time limit, and that is why it failed.
  * unableToCrawl `boolean`: If the robo was unable to crawl the app; perhaps because the app did not start.

### FatalException
* FatalException `object`: Additional details for a fatal exception.
  * stackTrace [StackTrace](#stacktrace)

### FileReference
* FileReference `object`: A reference to a file.
  * fileUri `string`: The URI of a file stored in Google Cloud Storage. For example: http://storage.googleapis.com/mybucket/path/to/test.xml or in gsutil format: gs://mybucket/path/to/test.xml with version-specific info, gs://mybucket/path/to/test.xml#1360383693690000 An INVALID_ARGUMENT error will be returned if the URI format is not supported. - In response: always set - In create/update request: always set

### GraphicsStats
* GraphicsStats `object`: Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+.
  * buckets `array`: Histogram of frame render times. There should be 154 buckets ranging from [5ms, 6ms) to [4950ms, infinity)
    * items [GraphicsStatsBucket](#graphicsstatsbucket)
  * highInputLatencyCount `string`: Total "high input latency" events.
  * jankyFrames `string`: Total frames with slow render time. Should be <= total_frames.
  * missedVsyncCount `string`: Total "missed vsync" events.
  * p50Millis `string`: 50th percentile frame render time in milliseconds.
  * p90Millis `string`: 90th percentile frame render time in milliseconds.
  * p95Millis `string`: 95th percentile frame render time in milliseconds.
  * p99Millis `string`: 99th percentile frame render time in milliseconds.
  * slowBitmapUploadCount `string`: Total "slow bitmap upload" events.
  * slowDrawCount `string`: Total "slow draw" events.
  * slowUiThreadCount `string`: Total "slow UI thread" events.
  * totalFrames `string`: Total frames rendered by package.

### GraphicsStatsBucket
* GraphicsStatsBucket `object`
  * frameCount `string`: Number of frames in the bucket.
  * renderMillis `string`: Lower bound of render time in milliseconds.

### History
* History `object`: A History represents a sorted list of Executions ordered by the start_timestamp_millis field (descending). It can be used to group all the Executions of a continuous build. Note that the ordering only operates on one-dimension. If a repository has multiple branches, it means that multiple histories will need to be used in order to order Executions per branch.
  * displayName `string`: A short human-readable (plain text) name to display in the UI. Maximum of 100 characters. - In response: present if set during create. - In create request: optional
  * historyId `string`: A unique identifier within a project for this History. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create request: never set
  * name `string`: A name to uniquely identify a history within a project. Maximum of 200 characters. - In response always set - In create request: always set
  * testPlatform `string` (values: unknownPlatform, android, ios): The platform of the test history. - In response: always set. Returns the platform of the last execution if unknown.

### Image
* Image `object`: An image, with a link to the main image and a thumbnail.
  * error [Status](#status)
  * sourceImage [ToolOutputReference](#tooloutputreference)
  * stepId `string`: The step to which the image is attached. Always set.
  * thumbnail [Thumbnail](#thumbnail)

### InAppPurchasesFound
* InAppPurchasesFound `object`: Additional details of in-app purchases encountered during the crawl.
  * inAppPurchasesFlowsExplored `integer`: The total number of in-app purchases flows explored: how many times the robo tries to buy a SKU.
  * inAppPurchasesFlowsStarted `integer`: The total number of in-app purchases flows started.

### InconclusiveDetail
* InconclusiveDetail `object`: Details for an outcome with an INCONCLUSIVE outcome summary.
  * abortedByUser `boolean`: If the end user aborted the test execution before a pass or fail could be determined. For example, the user pressed ctrl-c which sent a kill signal to the test runner while the test was running.
  * hasErrorLogs `boolean`: If results are being provided to the user in certain cases of infrastructure failures
  * infrastructureFailure `boolean`: If the test runner could not determine success or failure because the test depends on a component other than the system under test which failed. For example, a mobile test requires provisioning a device where the test executes, and that provisioning can fail.

### IndividualOutcome
* IndividualOutcome `object`: Step Id and outcome of each individual step that was run as a group with other steps with the same configuration.
  * multistepNumber `integer`: Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0.
  * outcomeSummary `string` (values: unset, success, failure, inconclusive, skipped, flaky)
  * runDuration [Duration](#duration)
  * stepId `string`

### InsufficientCoverage
* InsufficientCoverage `object`: A warning that Robo did not crawl potentially important parts of the app.

### IosAppCrashed
* IosAppCrashed `object`: Additional details for an iOS app crash.
  * stackTrace [StackTrace](#stacktrace)

### IosAppInfo
* IosAppInfo `object`: iOS app information
  * name `string`: The name of the app. Required

### IosRoboTest
* IosRoboTest `object`: A Robo test for an iOS application.

### IosTest
* IosTest `object`: A iOS mobile test specification
  * iosAppInfo [IosAppInfo](#iosappinfo)
  * iosRoboTest [IosRoboTest](#iosrobotest)
  * iosTestLoop [IosTestLoop](#iostestloop)
  * iosXcTest [IosXcTest](#iosxctest)
  * testTimeout [Duration](#duration)

### IosTestLoop
* IosTestLoop `object`: A game loop test of an iOS application.
  * bundleId `string`: Bundle ID of the app.

### IosXcTest
* IosXcTest `object`: A test of an iOS application that uses the XCTest framework.
  * bundleId `string`: Bundle ID of the app.
  * xcodeVersion `string`: Xcode version that the test was run with.

### LauncherActivityNotFound
* LauncherActivityNotFound `object`: Failed to find the launcher activity of an app.

### ListEnvironmentsResponse
* ListEnvironmentsResponse `object`: Response message for EnvironmentService.ListEnvironments.
  * environments `array`: Environments. Always set.
    * items [Environment](#environment)
  * executionId `string`: A Execution id Always set.
  * historyId `string`: A History id. Always set.
  * nextPageToken `string`: A continuation token to resume the query at the next item. Will only be set if there are more Environments to fetch.
  * projectId `string`: A Project id. Always set.

### ListExecutionsResponse
* ListExecutionsResponse `object`
  * executions `array`: Executions. Always set.
    * items [Execution](#execution)
  * nextPageToken `string`: A continuation token to resume the query at the next item. Will only be set if there are more Executions to fetch.

### ListHistoriesResponse
* ListHistoriesResponse `object`: Response message for HistoryService.List
  * histories `array`: Histories.
    * items [History](#history)
  * nextPageToken `string`: A continuation token to resume the query at the next item. Will only be set if there are more histories to fetch. Tokens are valid for up to one hour from the time of the first list request. For instance, if you make a list request at 1PM and use the token from this first request 10 minutes later, the token from this second response will only be valid for 50 minutes.

### ListPerfSampleSeriesResponse
* ListPerfSampleSeriesResponse `object`
  * perfSampleSeries `array`: The resulting PerfSampleSeries sorted by id
    * items [PerfSampleSeries](#perfsampleseries)

### ListPerfSamplesResponse
* ListPerfSamplesResponse `object`
  * nextPageToken `string`: Optional, returned if result size exceeds the page size specified in the request (or the default page size, 500, if unspecified). It indicates the last sample timestamp to be used as page_token in subsequent request
  * perfSamples `array`
    * items [PerfSample](#perfsample)

### ListScreenshotClustersResponse
* ListScreenshotClustersResponse `object`
  * clusters `array`: The set of clusters associated with an execution Always set
    * items [ScreenshotCluster](#screenshotcluster)

### ListStepAccessibilityClustersResponse
* ListStepAccessibilityClustersResponse `object`: Response message for AccessibilityService.ListStepAccessibilityClusters.
  * clusters `array`: A sequence of accessibility suggestions, grouped into clusters. Within the sequence, clusters that belong to the same SuggestionCategory should be adjacent. Within each category, clusters should be ordered by their SuggestionPriority (ERRORs first). The categories should be ordered by their highest priority cluster.
    * items [SuggestionClusterProto](#suggestionclusterproto)
  * name `string`: A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Always presents.

### ListStepThumbnailsResponse
* ListStepThumbnailsResponse `object`: A response containing the thumbnails in a step.
  * nextPageToken `string`: A continuation token to resume the query at the next item. If set, indicates that there are more thumbnails to read, by calling list again with this value in the page_token field.
  * thumbnails `array`: A list of image data. Images are returned in a deterministic order; they are ordered by these factors, in order of importance: * First, by their associated test case. Images without a test case are considered greater than images with one. * Second, by their creation time. Images without a creation time are greater than images with one. * Third, by the order in which they were added to the step (by calls to CreateStep or UpdateStep).
    * items [Image](#image)

### ListStepsResponse
* ListStepsResponse `object`: Response message for StepService.List.
  * nextPageToken `string`: A continuation token to resume the query at the next item. If set, indicates that there are more steps to read, by calling list again with this value in the page_token field.
  * steps `array`: Steps.
    * items [Step](#step)

### ListTestCasesResponse
* ListTestCasesResponse `object`: Response message for StepService.ListTestCases.
  * nextPageToken `string`
  * testCases `array`: List of test cases.
    * items [TestCase](#testcase)

### MatrixDimensionDefinition
* MatrixDimensionDefinition `object`: One dimension of the matrix of different runs of a step.

### MemoryInfo
* MemoryInfo `object`
  * memoryCapInKibibyte `string`: Maximum memory that can be allocated to the process in KiB
  * memoryTotalInKibibyte `string`: Total memory available on the device in KiB

### MergedResult
* MergedResult `object`: Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.
  * outcome [Outcome](#outcome)
  * state `string` (values: unknownState, pending, inProgress, complete): State of the resource
  * testSuiteOverviews `array`: The combined and rolled-up result of each test suite that was run as part of this environment. Combining: When the test cases from a suite are run in different steps (sharding), the results are added back together in one overview. (e.g., if shard1 has 2 failures and shard2 has 1 failure than the overview failure_count = 3). Rollup: When test cases from the same suite are run multiple times (flaky), the results are combined (e.g., if testcase1.run1 fails, testcase1.run2 passes, and both testcase2.run1 and testcase2.run2 fail then the overview flaky_count = 1 and failure_count = 1).
    * items [TestSuiteOverview](#testsuiteoverview)

### MultiStep
* MultiStep `object`: Details when multiple steps are run with the same configuration as a group.
  * multistepNumber `integer`: Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0.
  * primaryStep [PrimaryStep](#primarystep)
  * primaryStepId `string`: Step Id of the primary (original) step, which might be this step.

### NativeCrash
* NativeCrash `object`: Additional details for a native crash.
  * stackTrace [StackTrace](#stacktrace)

### NonSdkApi
* NonSdkApi `object`: A non-sdk API and examples of it being called along with other metadata See https://developer.android.com/distribute/best-practices/develop/restrictions-non-sdk-interfaces
  * apiSignature `string`: The signature of the Non-SDK API
  * exampleStackTraces `array`: Example stack traces of this API being called.
    * items `string`
  * insights `array`: Optional debugging insights for non-SDK API violations.
    * items [NonSdkApiInsight](#nonsdkapiinsight)
  * invocationCount `integer`: The total number of times this API was observed to have been called.
  * list `string` (values: NONE, WHITE, BLACK, GREY, GREY_MAX_O, GREY_MAX_P, GREY_MAX_Q, GREY_MAX_R): Which list this API appears on

### NonSdkApiInsight
* NonSdkApiInsight `object`: Non-SDK API insights (to address debugging solutions).
  * exampleTraceMessages `array`: Optional sample stack traces, for which this insight applies (there should be at least one).
    * items `string`
  * matcherId `string`: A unique ID, to be used for determining the effectiveness of this particular insight in the context of a matcher. (required)
  * pendingGoogleUpdateInsight [PendingGoogleUpdateInsight](#pendinggoogleupdateinsight)
  * upgradeInsight [UpgradeInsight](#upgradeinsight)

### NonSdkApiUsageViolation
* NonSdkApiUsageViolation `object`: Additional details for a non-sdk API usage violation.
  * apiSignatures `array`: Signatures of a subset of those hidden API's.
    * items `string`
  * uniqueApis `integer`: Total number of unique hidden API's accessed.

### NonSdkApiUsageViolationReport
* NonSdkApiUsageViolationReport `object`: Contains a summary and examples of non-sdk API usage violations.
  * exampleApis `array`: Examples of the detected API usages.
    * items [NonSdkApi](#nonsdkapi)
  * minSdkVersion `integer`: Minimum API level required for the application to run.
  * targetSdkVersion `integer`: Specifies the API Level on which the application is designed to run.
  * uniqueApis `integer`: Total number of unique Non-SDK API's accessed.

### Outcome
* Outcome `object`: Interprets a result so that humans and machines can act on it.
  * failureDetail [FailureDetail](#failuredetail)
  * inconclusiveDetail [InconclusiveDetail](#inconclusivedetail)
  * skippedDetail [SkippedDetail](#skippeddetail)
  * successDetail [SuccessDetail](#successdetail)
  * summary `string` (values: unset, success, failure, inconclusive, skipped, flaky): The simplest way to interpret a result. Required

### OverlappingUIElements
* OverlappingUIElements `object`: A warning that Robo encountered a screen that has overlapping clickable elements; this may indicate a potential UI issue.
  * resourceName `array`: Resource names of the overlapping screen elements
    * items `string`
  * screenId `string`: The screen id of the elements

### PendingGoogleUpdateInsight
* PendingGoogleUpdateInsight `object`: This insight indicates that the hidden API usage originates from a Google-provided library. Users need not take any action.
  * nameOfGoogleLibrary `string`: The name of the Google-provided library with the non-SDK API dependency.

### PerfEnvironment
* PerfEnvironment `object`: Encapsulates performance environment info
  * cpuInfo [CPUInfo](#cpuinfo)
  * memoryInfo [MemoryInfo](#memoryinfo)

### PerfMetricsSummary
* PerfMetricsSummary `object`: A summary of perf metrics collected and performance environment info
  * appStartTime [AppStartTime](#appstarttime)
  * executionId `string`: A tool results execution ID. @OutputOnly
  * graphicsStats [GraphicsStats](#graphicsstats)
  * historyId `string`: A tool results history ID. @OutputOnly
  * perfEnvironment [PerfEnvironment](#perfenvironment)
  * perfMetrics `array`: Set of resource collected
    * items `string` (values: perfMetricTypeUnspecified, memory, cpu, network, graphics)
  * projectId `string`: The cloud project @OutputOnly
  * stepId `string`: A tool results step ID. @OutputOnly

### PerfSample
* PerfSample `object`: Resource representing a single performance measure or data point
  * sampleTime [Timestamp](#timestamp)
  * value `number`: Value observed

### PerfSampleSeries
* PerfSampleSeries `object`: Resource representing a collection of performance samples (or data points)
  * basicPerfSampleSeries [BasicPerfSampleSeries](#basicperfsampleseries)
  * executionId `string`: A tool results execution ID. @OutputOnly
  * historyId `string`: A tool results history ID. @OutputOnly
  * projectId `string`: The cloud project @OutputOnly
  * sampleSeriesId `string`: A sample series id @OutputOnly
  * stepId `string`: A tool results step ID. @OutputOnly

### PerformedGoogleLogin
* PerformedGoogleLogin `object`: A notification that Robo signed in with Google.

### PerformedMonkeyActions
* PerformedMonkeyActions `object`: A notification that Robo performed some monkey actions.
  * totalActions `integer`: The total number of monkey actions performed during the crawl.

### PrimaryStep
* PrimaryStep `object`: Stores rollup test status of multiple steps that were run as a group and outcome of each individual step.
  * individualOutcome `array`: Step Id and outcome of each individual step.
    * items [IndividualOutcome](#individualoutcome)
  * rollUp `string` (values: unset, success, failure, inconclusive, skipped, flaky): Rollup test status of multiple steps that were run with the same configuration as a group.

### ProjectSettings
* ProjectSettings `object`: Per-project settings for the Tool Results service.
  * defaultBucket `string`: The name of the Google Cloud Storage bucket to which results are written. By default, this is unset. In update request: optional In response: optional
  * name `string`: The name of the project's settings. Always of the form: projects/{project-id}/settings In update request: never set In response: always set

### PublishXunitXmlFilesRequest
* PublishXunitXmlFilesRequest `object`: Request message for StepService.PublishXunitXmlFiles.
  * xunitXmlFiles `array`: URI of the Xunit XML files to publish. The maximum size of the file this reference is pointing to is 50MB. Required.
    * items [FileReference](#filereference)

### RegionProto
* RegionProto `object`: A rectangular region.
  * heightPx `integer`: The height, in pixels. Always set.
  * leftPx `integer`: The left side of the rectangle, in pixels. Always set.
  * topPx `integer`: The top of the rectangle, in pixels. Always set.
  * widthPx `integer`: The width, in pixels. Always set.

### ResultsStorage
* ResultsStorage `object`: The storage for test results.
  * resultsStoragePath [FileReference](#filereference)
  * xunitXmlFile [FileReference](#filereference)

### RoboScriptExecution
* RoboScriptExecution `object`: Execution stats for a user-provided Robo script.
  * successfulActions `integer`: The number of Robo script actions executed successfully.
  * totalActions `integer`: The total number of actions in the Robo script.

### SafeHtmlProto
* SafeHtmlProto `object`: IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests.
  * privateDoNotAccessOrElseSafeHtmlWrappedValue `string`: IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message.

### Screen
* Screen `object`
  * fileReference `string`: File reference of the png file. Required.
  * locale `string`: Locale of the device that the screenshot was taken on. Required.
  * model `string`: Model of the device that the screenshot was taken on. Required.
  * version `string`: OS version of the device that the screenshot was taken on. Required.

### ScreenshotCluster
* ScreenshotCluster `object`
  * activity `string`: A string that describes the activity of every screen in the cluster.
  * clusterId `string`: A unique identifier for the cluster. @OutputOnly
  * keyScreen [Screen](#screen)
  * screens `array`: Full list of screens.
    * items [Screen](#screen)

### ShardSummary
* ShardSummary `object`: Result summary for a shard in an environment.
  * runs `array`: Summaries of the steps belonging to the shard. With flaky_test_attempts enabled from TestExecutionService, more than one run (Step) can present. And the runs will be sorted by multistep_number.
    * items [StepSummary](#stepsummary)
  * shardResult [MergedResult](#mergedresult)

### SkippedDetail
* SkippedDetail `object`: Details for an outcome with a SKIPPED outcome summary.
  * incompatibleAppVersion `boolean`: If the App doesn't support the specific API level.
  * incompatibleArchitecture `boolean`: If the App doesn't run on the specific architecture, for example, x86.
  * incompatibleDevice `boolean`: If the requested OS version doesn't run on the specific device model.

### Specification
* Specification `object`: The details about how to run the execution.
  * androidTest [AndroidTest](#androidtest)
  * iosTest [IosTest](#iostest)

### StackTrace
* StackTrace `object`: A stacktrace.
  * exception `string`: The stack trace message. Required

### StartActivityNotFound
* StartActivityNotFound `object`: User provided intent failed to resolve to an activity.
  * action `string`
  * uri `string`

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### Step
* Step `object`: A Step represents a single operation performed as part of Execution. A step can be used to represent the execution of a tool ( for example a test runner execution or an execution of a compiler). Steps can overlap (for instance two steps might have the same start time if some operations are done in parallel). Here is an example, let's consider that we have a continuous build is executing a test runner for each iteration. The workflow would look like: - user creates a Execution with id 1 - user creates an TestExecutionStep with id 100 for Execution 1 - user update TestExecutionStep with id 100 to add a raw xml log + the service parses the xml logs and returns a TestExecutionStep with updated TestResult(s). - user update the status of TestExecutionStep with id 100 to COMPLETE A Step can be updated until its state is set to COMPLETE at which points it becomes immutable. Next tag: 27
  * completionTime [Timestamp](#timestamp)
  * creationTime [Timestamp](#timestamp)
  * description `string`: A description of this tool For example: mvn clean package -D skipTests=true - In response: present if set by create/update request - In create/update request: optional
  * deviceUsageDuration [Duration](#duration)
  * dimensionValue `array`: If the execution containing this step has any dimension_definition set, then this field allows the child to specify the values of the dimensions. The keys must exactly match the dimension_definition of the execution. For example, if the execution has `dimension_definition = ['attempt', 'device']` then a step must define values for those dimensions, eg. `dimension_value = ['attempt': '1', 'device': 'Nexus 6']` If a step does not participate in one dimension of the matrix, the value for that dimension should be empty string. For example, if one of the tests is executed by a runner which does not support retries, the step could have `dimension_value = ['attempt': '', 'device': 'Nexus 6']` If the step does not participate in any dimensions of the matrix, it may leave dimension_value unset. A PRECONDITION_FAILED will be returned if any of the keys do not exist in the dimension_definition of the execution. A PRECONDITION_FAILED will be returned if another step in this execution already has the same name and dimension_value, but differs on other data fields, for example, step field is different. A PRECONDITION_FAILED will be returned if dimension_value is set, and there is a dimension_definition in the execution which is not specified as one of the keys. - In response: present if set by create - In create request: optional - In update request: never set
    * items [StepDimensionValueEntry](#stepdimensionvalueentry)
  * hasImages `boolean`: Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails. - In response: always set - In create/update request: never set
  * labels `array`: Arbitrary user-supplied key/value pairs that are associated with the step. Users are responsible for managing the key namespace such that keys don't accidentally collide. An INVALID_ARGUMENT will be returned if the number of labels exceeds 100 or if the length of any of the keys or values exceeds 100 characters. - In response: always set - In create request: optional - In update request: optional; any new key/value pair will be added to the map, and any new value for an existing key will update that key's value
    * items [StepLabelsEntry](#steplabelsentry)
  * multiStep [MultiStep](#multistep)
  * name `string`: A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build A PRECONDITION_FAILED will be returned upon creating a new step if it shares its name and dimension_value with an existing step. If two steps represent a similar action, but have different dimension values, they should share the same name. For instance, if the same set of tests is run on two different platforms, the two steps should have the same name. - In response: always set - In create request: always set - In update request: never set
  * outcome [Outcome](#outcome)
  * runDuration [Duration](#duration)
  * state `string` (values: unknownState, pending, inProgress, complete): The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -> COMPLETE A PRECONDITION_FAILED will be returned if an invalid transition is requested. It is valid to create Step with a state set to COMPLETE. The state can only be set to COMPLETE once. A PRECONDITION_FAILED will be returned if the state is set to COMPLETE multiple times. - In response: always set - In create/update request: optional
  * stepId `string`: A unique identifier within a Execution for this Step. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response: always set - In create/update request: never set
  * testExecutionStep [TestExecutionStep](#testexecutionstep)
  * toolExecutionStep [ToolExecutionStep](#toolexecutionstep)

### StepDimensionValueEntry
* StepDimensionValueEntry `object`
  * key `string`
  * value `string`

### StepLabelsEntry
* StepLabelsEntry `object`
  * key `string`
  * value `string`

### StepSummary
* StepSummary `object`: Lightweight summary of a step within this execution.

### SuccessDetail
* SuccessDetail `object`: Details for an outcome with a SUCCESS outcome summary. LINT.IfChange
  * otherNativeCrash `boolean`: If a native process other than the app crashed.

### SuggestionClusterProto
* SuggestionClusterProto `object`: A set of similar suggestions that we suspect are closely related. This proto and most of the nested protos are branched from foxandcrown.prelaunchreport.service.SuggestionClusterProto, replacing PLR's dependencies with FTL's.
  * category `string` (values: unknownCategory, contentLabeling, touchTargetSize, lowContrast, implementation): Category in which these types of suggestions should appear. Always set.
  * suggestions `array`: A sequence of suggestions. All of the suggestions within a cluster must have the same SuggestionPriority and belong to the same SuggestionCategory. Suggestions with the same screenshot URL should be adjacent.
    * items [SuggestionProto](#suggestionproto)

### SuggestionProto
* SuggestionProto `object`
  * helpUrl `string`: Reference to a help center article concerning this type of suggestion. Always set.
  * longMessage [SafeHtmlProto](#safehtmlproto)
  * priority `string` (values: unknownPriority, error, warning, info): Relative importance of a suggestion. Always set.
  * pseudoResourceId `string`: A somewhat human readable identifier of the source view, if it does not have a resource_name. This is a path within the accessibility hierarchy, an element with resource name; similar to an XPath.
  * region [RegionProto](#regionproto)
  * resourceName `string`: Reference to a view element, identified by its resource name, if it has one.
  * screenId `string`: ID of the screen for the suggestion. It is used for getting the corresponding screenshot path. For example, screen_id "1" corresponds to "1.png" file in GCS. Always set.
  * secondaryPriority `number`: Relative importance of a suggestion as compared with other suggestions that have the same priority and category. This is a meaningless value that can be used to order suggestions that are in the same category and have the same priority. The larger values have higher priority (i.e., are more important). Optional.
  * shortMessage [SafeHtmlProto](#safehtmlproto)
  * title `string`: General title for the suggestion, in the user's language, without markup. Always set.

### TestCase
* TestCase `object`
  * elapsedTime [Duration](#duration)
  * endTime [Timestamp](#timestamp)
  * skippedMessage `string`: Why the test case was skipped. Present only for skipped test case
  * stackTraces `array`: The stack trace details if the test case failed or encountered an error. The maximum size of the stack traces is 100KiB, beyond which the stack track will be truncated. Zero if the test case passed.
    * items [StackTrace](#stacktrace)
  * startTime [Timestamp](#timestamp)
  * status `string` (values: passed, failed, error, skipped, flaky): The status of the test case. Required.
  * testCaseId `string`: A unique identifier within a Step for this Test Case.
  * testCaseReference [TestCaseReference](#testcasereference)
  * toolOutputs `array`: References to opaque files of any format output by the tool execution. @OutputOnly
    * items [ToolOutputReference](#tooloutputreference)

### TestCaseReference
* TestCaseReference `object`: A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name.
  * className `string`: The name of the class.
  * name `string`: The name of the test case. Required.
  * testSuiteName `string`: The name of the test suite to which this test case belongs.

### TestExecutionStep
* TestExecutionStep `object`: A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field.
  * testIssues `array`: Issues observed during the test execution. For example, if the mobile app under test crashed during the test, the error message and the stack trace content can be recorded here to assist debugging. - In response: present if set by create or update - In create/update request: optional
    * items [TestIssue](#testissue)
  * testSuiteOverviews `array`: List of test suite overview contents. This could be parsed from xUnit XML log by server, or uploaded directly by user. This references should only be called when test suites are fully parsed or uploaded. The maximum allowed number of test suite overviews per step is 1000. - In response: always set - In create request: optional - In update request: never (use publishXunitXmlFiles custom method instead)
    * items [TestSuiteOverview](#testsuiteoverview)
  * testTiming [TestTiming](#testtiming)
  * toolExecution [ToolExecution](#toolexecution)

### TestIssue
* TestIssue `object`: An issue detected occurring during a test execution.
  * category `string` (values: unspecifiedCategory, common, robo): Category of issue. Required.
  * errorMessage `string`: A brief human-readable message describing the issue. Required.
  * severity `string` (values: unspecifiedSeverity, info, suggestion, warning, severe): Severity of issue. Required.
  * stackTrace [StackTrace](#stacktrace)
  * type `string` (values: unspecifiedType, fatalException, nativeCrash, anr, unusedRoboDirective, compatibleWithOrchestrator, launcherActivityNotFound, startActivityNotFound, incompleteRoboScriptExecution, completeRoboScriptExecution, failedToInstall, availableDeepLinks, nonSdkApiUsageViolation, nonSdkApiUsageReport, encounteredNonAndroidUiWidgetScreen, encounteredLoginScreen, performedGoogleLogin, iosException, iosCrash, performedMonkeyActions, usedRoboDirective, usedRoboIgnoreDirective, insufficientCoverage, inAppPurchases, crashDialogError, uiElementsTooDeep, blankScreen, overlappingUiElements, unityException, deviceOutOfMemory): Type of issue. Required.
  * warning [Any](#any)

### TestSuiteOverview
* TestSuiteOverview `object`: A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step.
  * elapsedTime [Duration](#duration)
  * errorCount `integer`: Number of test cases in error, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never
  * failureCount `integer`: Number of failed test cases, typically set by the service by parsing the xml_source. May also be set by the user. - In create/response: always set - In update request: never
  * flakyCount `integer`: Number of flaky test cases, set by the service by rolling up flaky test attempts. Present only for rollup test suite overview at environment level. A step cannot have flaky test cases.
  * name `string`: The name of the test suite. - In create/response: always set - In update request: never
  * skippedCount `integer`: Number of test cases not run, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never
  * totalCount `integer`: Number of test cases, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never
  * xmlSource [FileReference](#filereference)

### TestTiming
* TestTiming `object`: Testing timing break down to know phases.
  * testProcessDuration [Duration](#duration)

### Thumbnail
* Thumbnail `object`: A single thumbnail, with its size and format.
  * contentType `string`: The thumbnail's content type, i.e. "image/png". Always set.
  * data `string`: The thumbnail file itself. That is, the bytes here are precisely the bytes that make up the thumbnail file; they can be served as an image as-is (with the appropriate content type.) Always set.
  * heightPx `integer`: The height of the thumbnail, in pixels. Always set.
  * widthPx `integer`: The width of the thumbnail, in pixels. Always set.

### Timestamp
* Timestamp `object`: A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
  * nanos `integer`: Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
  * seconds `string`: Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.

### ToolExecution
* ToolExecution `object`: An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code.
  * commandLineArguments `array`: The full tokenized command line including the program name (equivalent to argv in a C program). - In response: present if set by create request - In create request: optional - In update request: never set
    * items `string`
  * exitCode [ToolExitCode](#toolexitcode)
  * toolLogs `array`: References to any plain text logs output the tool execution. This field can be set before the tool has exited in order to be able to have access to a live view of the logs while the tool is running. The maximum allowed number of tool logs per step is 1000. - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list
    * items [FileReference](#filereference)
  * toolOutputs `array`: References to opaque files of any format output by the tool execution. The maximum allowed number of tool outputs per step is 1000. - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list
    * items [ToolOutputReference](#tooloutputreference)

### ToolExecutionStep
* ToolExecutionStep `object`: Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another.
  * toolExecution [ToolExecution](#toolexecution)

### ToolExitCode
* ToolExitCode `object`: Exit code from a tool execution.
  * number `integer`: Tool execution exit code. A value of 0 means that the execution was successful. - In response: always set - In create/update request: always set

### ToolOutputReference
* ToolOutputReference `object`: A reference to a ToolExecution output file.
  * creationTime [Timestamp](#timestamp)
  * output [FileReference](#filereference)
  * testCase [TestCaseReference](#testcasereference)

### UIElementTooDeep
* UIElementTooDeep `object`: A warning that the screen hierarchy is deeper than the recommended threshold.
  * depth `integer`: The depth of the screen element
  * screenId `string`: The screen id of the element
  * screenStateId `string`: The screen state id of the element

### UnspecifiedWarning
* UnspecifiedWarning `object`: Default unspecified warning.

### UnusedRoboDirective
* UnusedRoboDirective `object`: Additional details of an unused robodirective.
  * resourceName `string`: The name of the resource that was unused.

### UpgradeInsight
* UpgradeInsight `object`: This insight is a recommendation to upgrade a given library to the specified version, in order to avoid dependencies on non-SDK APIs.
  * packageName `string`: The name of the package to be upgraded.
  * upgradeToVersion `string`: The suggested version to upgrade to. Optional: In case we are not sure which version solves this problem

### UsedRoboDirective
* UsedRoboDirective `object`: Additional details of a used Robo directive.
  * resourceName `string`: The name of the resource that was used.

### UsedRoboIgnoreDirective
* UsedRoboIgnoreDirective `object`: Additional details of a used Robo directive with an ignore action. Note: This is a different scenario than unused directive.
  * resourceName `string`: The name of the resource that was ignored.


