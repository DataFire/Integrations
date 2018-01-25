# @datafire/google_toolresults

Client library for Cloud Tool Results

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

google_toolresults.projects.histories.list({
  "projectId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Reads and publishes results from Firebase Test Lab.

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

### projects.histories.list
Lists Histories for a given Project.

The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist


```js
google_toolresults.projects.histories.list({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id.
  * filterByName `string`: If set, only return histories with the given name.
  * pageSize `integer`: The maximum number of Histories to fetch.
  * pageToken `string`: A continuation token to resume the query at the next item.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListHistoriesResponse](#listhistoriesresponse)

### projects.histories.create
Creates a History.

The returned History will have the id set.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist


```js
google_toolresults.projects.histories.create({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id.
  * requestId `string`: A unique request ID for server to detect duplicated requests. For example, a UUID.
  * body [History](#history)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [History](#history)

### projects.histories.get
Gets a History.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist


```js
google_toolresults.projects.histories.get({
  "projectId": "",
  "historyId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id.
  * historyId **required** `string`: A History id.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [History](#history)

### projects.histories.executions.list
Lists Histories for a given Project.

The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist


```js
google_toolresults.projects.histories.executions.list({
  "projectId": "",
  "historyId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id.
  * historyId **required** `string`: A History id.
  * pageSize `integer`: The maximum number of Executions to fetch.
  * pageToken `string`: A continuation token to resume the query at the next item.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListExecutionsResponse](#listexecutionsresponse)

### projects.histories.executions.create
Creates an Execution.

The returned Execution will have the id set.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist


```js
google_toolresults.projects.histories.executions.create({
  "projectId": "",
  "historyId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id.
  * historyId **required** `string`: A History id.
  * requestId `string`: A unique request ID for server to detect duplicated requests. For example, a UUID.
  * body [Execution](#execution)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Execution](#execution)

### projects.histories.executions.get
Gets an Execution.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist


```js
google_toolresults.projects.histories.executions.get({
  "projectId": "",
  "historyId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id.
  * historyId **required** `string`: A History id.
  * executionId **required** `string`: An Execution id.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Execution](#execution)

### projects.histories.executions.patch
Updates an existing Execution with the supplied partial entity.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist


```js
google_toolresults.projects.histories.executions.patch({
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
  * requestId `string`: A unique request ID for server to detect duplicated requests. For example, a UUID.
  * body [Execution](#execution)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Execution](#execution)

### projects.histories.executions.clusters.list
Lists Screenshot Clusters

Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.


```js
google_toolresults.projects.histories.executions.clusters.list({
  "executionId": "",
  "historyId": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * executionId **required** `string`: An Execution id.
  * historyId **required** `string`: A History id.
  * projectId **required** `string`: A Project id.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListScreenshotClustersResponse](#listscreenshotclustersresponse)

### projects.histories.executions.clusters.get
Retrieves a single screenshot cluster by its ID


```js
google_toolresults.projects.histories.executions.clusters.get({
  "clusterId": "",
  "executionId": "",
  "historyId": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * clusterId **required** `string`: A Cluster id
  * executionId **required** `string`: An Execution id.
  * historyId **required** `string`: A History id.
  * projectId **required** `string`: A Project id.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ScreenshotCluster](#screenshotcluster)

### projects.histories.executions.steps.list
Lists Steps for a given Execution.

The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist


```js
google_toolresults.projects.histories.executions.steps.list({
  "projectId": "",
  "historyId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id.
  * historyId **required** `string`: A History id.
  * executionId **required** `string`: A Execution id.
  * pageSize `integer`: The maximum number of Steps to fetch.
  * pageToken `string`: A continuation token to resume the query at the next item.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListStepsResponse](#liststepsresponse)

### projects.histories.executions.steps.create
Creates a Step.

The returned Step will have the id set.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist


```js
google_toolresults.projects.histories.executions.steps.create({
  "projectId": "",
  "historyId": "",
  "executionId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id.
  * historyId **required** `string`: A History id.
  * executionId **required** `string`: A Execution id.
  * requestId `string`: A unique request ID for server to detect duplicated requests. For example, a UUID.
  * body [Step](#step)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Step](#step)

### projects.histories.executions.steps.get
Gets a Step.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist


```js
google_toolresults.projects.histories.executions.steps.get({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id.
  * historyId **required** `string`: A History id.
  * executionId **required** `string`: A Execution id.
  * stepId **required** `string`: A Step id.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Step](#step)

### projects.histories.executions.steps.patch
Updates an existing Step with the supplied partial entity.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist


```js
google_toolresults.projects.histories.executions.steps.patch({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id.
  * historyId **required** `string`: A History id.
  * executionId **required** `string`: A Execution id.
  * stepId **required** `string`: A Step id.
  * requestId `string`: A unique request ID for server to detect duplicated requests. For example, a UUID.
  * body [Step](#step)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Step](#step)

### projects.histories.executions.steps.getPerfMetricsSummary
Retrieves a PerfMetricsSummary.

May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist


```js
google_toolresults.projects.histories.executions.steps.getPerfMetricsSummary({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PerfMetricsSummary](#perfmetricssummary)

### projects.histories.executions.steps.perfMetricsSummary.create
Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created.

May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist


```js
google_toolresults.projects.histories.executions.steps.perfMetricsSummary.create({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PerfMetricsSummary](#perfmetricssummary)

### projects.histories.executions.steps.perfSampleSeries.list
Lists PerfSampleSeries for a given Step.

The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids.

May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist


```js
google_toolresults.projects.histories.executions.steps.perfSampleSeries.list({
  "executionId": "",
  "historyId": "",
  "projectId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * executionId **required** `string`: A tool results execution ID.
  * filter `array`: Specify one or more PerfMetricType values such as CPU to filter the result
  * historyId **required** `string`: A tool results history ID.
  * projectId **required** `string`: The cloud project
  * stepId **required** `string`: A tool results step ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListPerfSampleSeriesResponse](#listperfsampleseriesresponse)

### projects.histories.executions.steps.perfSampleSeries.create
Creates a PerfSampleSeries.

May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist


```js
google_toolresults.projects.histories.executions.steps.perfSampleSeries.create({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PerfSampleSeries](#perfsampleseries)

### projects.histories.executions.steps.perfSampleSeries.get
Gets a PerfSampleSeries.

May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist


```js
google_toolresults.projects.histories.executions.steps.perfSampleSeries.get({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PerfSampleSeries](#perfsampleseries)

### projects.histories.executions.steps.perfSampleSeries.samples.list
Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit

May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist


```js
google_toolresults.projects.histories.executions.steps.perfSampleSeries.samples.list({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListPerfSamplesResponse](#listperfsamplesresponse)

### projects.histories.executions.steps.perfSampleSeries.samples.batchCreate
Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database).

May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist


```js
google_toolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate({
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
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BatchCreatePerfSamplesResponse](#batchcreateperfsamplesresponse)

### projects.histories.executions.steps.thumbnails.list
Lists thumbnails of images attached to a step.

May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist


```js
google_toolresults.projects.histories.executions.steps.thumbnails.list({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id.
  * historyId **required** `string`: A History id.
  * executionId **required** `string`: An Execution id.
  * stepId **required** `string`: A Step id.
  * pageSize `integer`: The maximum number of thumbnails to fetch.
  * pageToken `string`: A continuation token to resume the query at the next item.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListStepThumbnailsResponse](#liststepthumbnailsresponse)

### projects.histories.executions.steps.publishXunitXmlFiles
Publish xml files to an existing Step.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist


```js
google_toolresults.projects.histories.executions.steps.publishXunitXmlFiles({
  "projectId": "",
  "historyId": "",
  "executionId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id.
  * historyId **required** `string`: A History id.
  * executionId **required** `string`: A Execution id.
  * stepId **required** `string`: A Step id. Note: This step must include a TestExecutionStep.
  * body [PublishXunitXmlFilesRequest](#publishxunitxmlfilesrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Step](#step)

### projects.getSettings
Gets the Tool Results settings for a project.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read from project


```js
google_toolresults.projects.getSettings({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProjectSettings](#projectsettings)

### projects.initializeSettings
Creates resources for settings which have not yet been set.

Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days.

The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details.

If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created.

May return any canonical error codes, including the following:

- PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage


```js
google_toolresults.projects.initializeSettings({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: A Project id.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProjectSettings](#projectsettings)



## Definitions

### AndroidAppInfo
* AndroidAppInfo `object`: Android app information.
  * name `string`: The name of the app. Optional
  * packageName `string`: The package name of the app. Required.
  * versionCode `string`: The internal version code of the app. Optional.
  * versionName `string`: The version name of the app. Optional.

### AndroidInstrumentationTest
* AndroidInstrumentationTest `object`: A test of an Android application that can control an Android component independently of its normal lifecycle.
  * testPackageId `string`: The java package for the test to be executed. Required
  * testRunnerClass `string`: The InstrumentationTestRunner class. Required
  * testTargets `array`: Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name"
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
  * testTimeout [Duration](#duration)

### Any
* Any `object`: `Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message.
  * typeUrl `string`: A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted).
  * value `string`: Must be a valid serialized protocol buffer of the above specified type.

### AppStartTime
* AppStartTime `object`
  * fullyDrawnTime [Duration](#duration)
  * initialDisplayTime [Duration](#duration)

### BasicPerfSampleSeries
* BasicPerfSampleSeries `object`: Encapsulates the metadata for basic sample series represented by a line chart
  * perfMetricType `string` (values: cpu, graphics, memory, network, perfMetricTypeUnspecified)
  * perfUnit `string` (values: byte, bytesPerSecond, framesPerSecond, kibibyte, percent, perfUnitUnspecified)
  * sampleSeriesLabel `string` (values: cpuKernel, cpuTotal, cpuUser, graphicsFrameRate, memoryRssPrivate, memoryRssShared, memoryRssTotal, memoryTotal, networkReceived, networkSent, ntBytesReceived, ntBytesTransferred, sampleSeriesTypeUnspecified)

### BatchCreatePerfSamplesRequest
* BatchCreatePerfSamplesRequest `object`: The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error
  * perfSamples `array`: The set of PerfSamples to create should not include existing timestamps
    * items [PerfSample](#perfsample)

### BatchCreatePerfSamplesResponse
* BatchCreatePerfSamplesResponse `object`
  * perfSamples `array`
    * items [PerfSample](#perfsample)

### CPUInfo
* CPUInfo `object`
  * cpuProcessor `string`: description of the device processor ie '1.8 GHz hexa core 64-bit ARMv8-A'
  * cpuSpeedInGhz `number`: the CPU clock speed in GHz
  * numberOfCores `integer`: the number of CPU cores

### Duration
* Duration `object`: A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years.
  * nanos `integer`: Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 `seconds` field and a positive or negative `nanos` field. For durations of one second or more, a non-zero value for the `nanos` field must be of the same sign as the `seconds` field. Must be from -999,999,999 to +999,999,999 inclusive.
  * seconds `string`: Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years

### Execution
* Execution `object`: An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step
  * completionTime [Timestamp](#timestamp)
  * creationTime [Timestamp](#timestamp)
  * executionId `string`: A unique identifier within a History for this Execution.
  * outcome [Outcome](#outcome)
  * specification [Specification](#specification)
  * state `string` (values: complete, inProgress, pending, unknownState): The initial state is IN_PROGRESS.
  * testExecutionMatrixId `string`: TestExecution Matrix ID that the TestExecutionService uses.

### FailureDetail
* FailureDetail `object`
  * crashed `boolean`: If the failure was severe because the system (app) under test crashed.
  * notInstalled `boolean`: If an app is not installed and thus no test can be run with the app. This might be caused by trying to run a test on an unsupported platform.
  * otherNativeCrash `boolean`: If a native process (including any other than the app) crashed.
  * timedOut `boolean`: If the test overran some time limit, and that is why it failed.
  * unableToCrawl `boolean`: If the robo was unable to crawl the app; perhaps because the app did not start.

### FileReference
* FileReference `object`: A reference to a file.
  * fileUri `string`: The URI of a file stored in Google Cloud Storage.

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
* History `object`: A History represents a sorted list of Executions ordered by the start_timestamp_millis field (descending). It can be used to group all the Executions of a continuous build.
  * displayName `string`: A short human-readable (plain text) name to display in the UI. Maximum of 100 characters.
  * historyId `string`: A unique identifier within a project for this History.
  * name `string`: A name to uniquely identify a history within a project. Maximum of 100 characters.

### Image
* Image `object`: An image, with a link to the main image and a thumbnail.
  * error [Status](#status)
  * sourceImage [ToolOutputReference](#tooloutputreference)
  * stepId `string`: The step to which the image is attached.
  * thumbnail [Thumbnail](#thumbnail)

### InconclusiveDetail
* InconclusiveDetail `object`
  * abortedByUser `boolean`: If the end user aborted the test execution before a pass or fail could be determined. For example, the user pressed ctrl-c which sent a kill signal to the test runner while the test was running.
  * infrastructureFailure `boolean`: If the test runner could not determine success or failure because the test depends on a component other than the system under test which failed.

### ListExecutionsResponse
* ListExecutionsResponse `object`
  * executions `array`: Executions.
    * items [Execution](#execution)
  * nextPageToken `string`: A continuation token to resume the query at the next item.

### ListHistoriesResponse
* ListHistoriesResponse `object`: Response message for HistoryService.List
  * histories `array`: Histories.
    * items [History](#history)
  * nextPageToken `string`: A continuation token to resume the query at the next item.

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
  * clusters `array`: The set of clustres associated with an execution Always set
    * items [ScreenshotCluster](#screenshotcluster)

### ListStepThumbnailsResponse
* ListStepThumbnailsResponse `object`: A response containing the thumbnails in a step.
  * nextPageToken `string`: A continuation token to resume the query at the next item.
  * thumbnails `array`: A list of image data.
    * items [Image](#image)

### ListStepsResponse
* ListStepsResponse `object`: Response message for StepService.List.
  * nextPageToken `string`: A continuation token to resume the query at the next item.
  * steps `array`: Steps.
    * items [Step](#step)

### MemoryInfo
* MemoryInfo `object`
  * memoryCapInKibibyte `string`: Maximum memory that can be allocated to the process in KiB
  * memoryTotalInKibibyte `string`: Total memory available on the device in KiB

### Outcome
* Outcome `object`: Interprets a result so that humans and machines can act on it.
  * failureDetail [FailureDetail](#failuredetail)
  * inconclusiveDetail [InconclusiveDetail](#inconclusivedetail)
  * skippedDetail [SkippedDetail](#skippeddetail)
  * successDetail [SuccessDetail](#successdetail)
  * summary `string` (values: failure, inconclusive, skipped, success, unset): The simplest way to interpret a result.

### PerfEnvironment
* PerfEnvironment `object`: Encapsulates performance environment info
  * cpuInfo [CPUInfo](#cpuinfo)
  * memoryInfo [MemoryInfo](#memoryinfo)

### PerfMetricsSummary
* PerfMetricsSummary `object`: A summary of perf metrics collected and performance environment info
  * appStartTime [AppStartTime](#appstarttime)
  * executionId `string`: A tool results execution ID.
  * graphicsStats [GraphicsStats](#graphicsstats)
  * historyId `string`: A tool results history ID.
  * perfEnvironment [PerfEnvironment](#perfenvironment)
  * perfMetrics `array`: Set of resource collected
    * items `string` (values: cpu, graphics, memory, network, perfMetricTypeUnspecified)
  * projectId `string`: The cloud project
  * stepId `string`: A tool results step ID.

### PerfSample
* PerfSample `object`: Resource representing a single performance measure or data point
  * sampleTime [Timestamp](#timestamp)
  * value `number`: Value observed

### PerfSampleSeries
* PerfSampleSeries `object`: Resource representing a collection of performance samples (or data points)
  * basicPerfSampleSeries [BasicPerfSampleSeries](#basicperfsampleseries)
  * executionId `string`: A tool results execution ID.
  * historyId `string`: A tool results history ID.
  * projectId `string`: The cloud project
  * sampleSeriesId `string`: A sample series id
  * stepId `string`: A tool results step ID.

### ProjectSettings
* ProjectSettings `object`: Per-project settings for the Tool Results service.
  * defaultBucket `string`: The name of the Google Cloud Storage bucket to which results are written.
  * name `string`: The name of the project's settings.

### PublishXunitXmlFilesRequest
* PublishXunitXmlFilesRequest `object`: Request message for StepService.PublishXunitXmlFiles.
  * xunitXmlFiles `array`: URI of the Xunit XML files to publish.
    * items [FileReference](#filereference)

### Screen
* Screen `object`
  * fileReference `string`: File reference of the png file. Required.
  * locale `string`: Locale of the device that the screenshot was taken on. Required.
  * model `string`: Model of the device that the screenshot was taken on. Required.
  * version `string`: OS version of the device that the screenshot was taken on. Required.

### ScreenshotCluster
* ScreenshotCluster `object`
  * activity `string`: A string that describes the activity of every screen in the cluster.
  * clusterId `string`: A unique identifier for the cluster.
  * keyScreen [Screen](#screen)
  * screens `array`: Full list of screens.
    * items [Screen](#screen)

### SkippedDetail
* SkippedDetail `object`
  * incompatibleAppVersion `boolean`: If the App doesn't support the specific API level.
  * incompatibleArchitecture `boolean`: If the App doesn't run on the specific architecture, for example, x86.
  * incompatibleDevice `boolean`: If the requested OS version doesn't run on the specific device model.

### Specification
* Specification `object`: The details about how to run the execution.
  * androidTest [AndroidTest](#androidtest)

### StackTrace
* StackTrace `object`: A stacktrace.
  * clusterId `string`: Exception cluster ID
  * exception `string`: The stack trace message.
  * reportId `string`: Exception report ID

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). The error model is designed to be:
  * code `integer`: The status code, which should be an enum value of [google.rpc.Code][].
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items [Any](#any)
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][] field, or localized by the client.

### Step
* Step `object`: A Step represents a single operation performed as part of Execution. A step can be used to represent the execution of a tool ( for example a test runner execution or an execution of a compiler).
  * completionTime [Timestamp](#timestamp)
  * creationTime [Timestamp](#timestamp)
  * description `string`: A description of this tool For example: mvn clean package -D skipTests=true
  * deviceUsageDuration [Duration](#duration)
  * dimensionValue `array`: If the execution containing this step has any dimension_definition set, then this field allows the child to specify the values of the dimensions.
    * items [StepDimensionValueEntry](#stepdimensionvalueentry)
  * hasImages `boolean`: Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails.
  * labels `array`: Arbitrary user-supplied key/value pairs that are associated with the step.
    * items [StepLabelsEntry](#steplabelsentry)
  * name `string`: A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build
  * outcome [Outcome](#outcome)
  * runDuration [Duration](#duration)
  * state `string` (values: complete, inProgress, pending, unknownState): The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -> COMPLETE
  * stepId `string`: A unique identifier within a Execution for this Step.
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

### SuccessDetail
* SuccessDetail `object`
  * otherNativeCrash `boolean`: If a native process other than the app crashed.

### TestCaseReference
* TestCaseReference `object`: A reference to a test case.
  * className `string`: The name of the class.
  * name `string`: The name of the test case.
  * testSuiteName `string`: The name of the test suite to which this test case belongs.

### TestExecutionStep
* TestExecutionStep `object`: A step that represents running tests.
  * testIssues `array`: Issues observed during the test execution.
    * items [TestIssue](#testissue)
  * testSuiteOverviews `array`: List of test suite overview contents. This could be parsed from xUnit XML log by server, or uploaded directly by user. This references should only be called when test suites are fully parsed or uploaded.
    * items [TestSuiteOverview](#testsuiteoverview)
  * testTiming [TestTiming](#testtiming)
  * toolExecution [ToolExecution](#toolexecution)

### TestIssue
* TestIssue `object`: An issue detected occurring during a test execution.
  * errorMessage `string`: A brief human-readable message describing the issue. Required.
  * severity `string` (values: info, severe, unspecifiedSeverity, warning): Severity of issue. Required.
  * stackTrace [StackTrace](#stacktrace)
  * type `string` (values: anr, compatibleWithOrchestrator, fatalException, nativeCrash, unspecifiedType, unusedRoboDirective): Type of issue. Required.
  * warning [Any](#any)

### TestSuiteOverview
* TestSuiteOverview `object`: A summary of a test suite result either parsed from XML or uploaded directly by a user.
  * errorCount `integer`: Number of test cases in error, typically set by the service by parsing the xml_source.
  * failureCount `integer`: Number of failed test cases, typically set by the service by parsing the xml_source. May also be set by the user.
  * name `string`: The name of the test suite.
  * skippedCount `integer`: Number of test cases not run, typically set by the service by parsing the xml_source.
  * totalCount `integer`: Number of test cases, typically set by the service by parsing the xml_source.
  * xmlSource [FileReference](#filereference)

### TestTiming
* TestTiming `object`: Testing timing break down to know phases.
  * testProcessDuration [Duration](#duration)

### Thumbnail
* Thumbnail `object`: A single thumbnail, with its size and format.
  * contentType `string`: The thumbnail's content type, i.e. "image/png".
  * data `string`: The thumbnail file itself.
  * heightPx `integer`: The height of the thumbnail, in pixels.
  * widthPx `integer`: The width of the thumbnail, in pixels.

### Timestamp
* Timestamp `object`: A Timestamp represents a point in time independent of any time zone or calendar, represented as seconds and fractions of seconds at nanosecond resolution in UTC Epoch time. It is encoded using the Proleptic Gregorian Calendar which extends the Gregorian calendar backwards to year one. It is encoded assuming all minutes are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from RFC 3339 date strings. See [https://www.ietf.org/rfc/rfc3339.txt](https://www.ietf.org/rfc/rfc3339.txt).
  * nanos `integer`: Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
  * seconds `string`: Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.

### ToolExecution
* ToolExecution `object`: An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code.
  * commandLineArguments `array`: The full tokenized command line including the program name (equivalent to argv in a C program).
    * items `string`
  * exitCode [ToolExitCode](#toolexitcode)
  * toolLogs `array`: References to any plain text logs output the tool execution.
    * items [FileReference](#filereference)
  * toolOutputs `array`: References to opaque files of any format output by the tool execution.
    * items [ToolOutputReference](#tooloutputreference)

### ToolExecutionStep
* ToolExecutionStep `object`: Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another.
  * toolExecution [ToolExecution](#toolexecution)

### ToolExitCode
* ToolExitCode `object`: Exit code from a tool execution.
  * number `integer`: Tool execution exit code. A value of 0 means that the execution was successful.

### ToolOutputReference
* ToolOutputReference `object`: A reference to a ToolExecution output file.
  * creationTime [Timestamp](#timestamp)
  * output [FileReference](#filereference)
  * testCase [TestCaseReference](#testcasereference)


