# @datafire/google_toolresults

Client library for Cloud Tool Results

## Installation and Usage
```bash
npm install --save datafire @datafire/google_toolresults
```

```js
let datafire = require('datafire');
let google_toolresults = require('@datafire/google_toolresults').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_toolresults.projects.histories.list({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_toolresults.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

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

#### Parameters
* projectId (string) **required** - A Project id.
* filterByName (string) - If set, only return histories with the given name.
* pageSize (integer) - The maximum number of Histories to fetch.
* pageToken (string) - A continuation token to resume the query at the next item.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - A Project id.
* requestId (string) - A unique request ID for server to detect duplicated requests. For example, a UUID.
* body (object) - A History represents a sorted list of Executions ordered by the start_timestamp_millis field (descending). It can be used to group all the Executions of a continuous build.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - A Project id.
* historyId (string) **required** - A History id.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - A Project id.
* historyId (string) **required** - A History id.
* pageSize (integer) - The maximum number of Executions to fetch.
* pageToken (string) - A continuation token to resume the query at the next item.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - A Project id.
* historyId (string) **required** - A History id.
* requestId (string) - A unique request ID for server to detect duplicated requests. For example, a UUID.
* body (object) - An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - A Project id.
* historyId (string) **required** - A History id.
* executionId (string) **required** - An Execution id.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - A Project id. Required.
* historyId (string) **required** - Required.
* executionId (string) **required** - Required.
* requestId (string) - A unique request ID for server to detect duplicated requests. For example, a UUID.
* body (object) - An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* executionId (string) **required** - An Execution id.
* historyId (string) **required** - A History id.
* projectId (string) **required** - A Project id.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* clusterId (string) **required** - A Cluster id
* executionId (string) **required** - An Execution id.
* historyId (string) **required** - A History id.
* projectId (string) **required** - A Project id.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - A Project id.
* historyId (string) **required** - A History id.
* executionId (string) **required** - A Execution id.
* pageSize (integer) - The maximum number of Steps to fetch.
* pageToken (string) - A continuation token to resume the query at the next item.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - A Project id.
* historyId (string) **required** - A History id.
* executionId (string) **required** - A Execution id.
* requestId (string) - A unique request ID for server to detect duplicated requests. For example, a UUID.
* body (object) - A Step represents a single operation performed as part of Execution. A step can be used to represent the execution of a tool ( for example a test runner execution or an execution of a compiler).
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - A Project id.
* historyId (string) **required** - A History id.
* executionId (string) **required** - A Execution id.
* stepId (string) **required** - A Step id.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - A Project id.
* historyId (string) **required** - A History id.
* executionId (string) **required** - A Execution id.
* stepId (string) **required** - A Step id.
* requestId (string) - A unique request ID for server to detect duplicated requests. For example, a UUID.
* body (object) - A Step represents a single operation performed as part of Execution. A step can be used to represent the execution of a tool ( for example a test runner execution or an execution of a compiler).
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - The cloud project
* historyId (string) **required** - A tool results history ID.
* executionId (string) **required** - A tool results execution ID.
* stepId (string) **required** - A tool results step ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - The cloud project
* historyId (string) **required** - A tool results history ID.
* executionId (string) **required** - A tool results execution ID.
* stepId (string) **required** - A tool results step ID.
* body (object) - A summary of perf metrics collected and performance environment info
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* executionId (string) **required** - A tool results execution ID.
* filter (array) - Specify one or more PerfMetricType values such as CPU to filter the result
* historyId (string) **required** - A tool results history ID.
* projectId (string) **required** - The cloud project
* stepId (string) **required** - A tool results step ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - The cloud project
* historyId (string) **required** - A tool results history ID.
* executionId (string) **required** - A tool results execution ID.
* stepId (string) **required** - A tool results step ID.
* body (object) - Resource representing a collection of performance samples (or data points)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - The cloud project
* historyId (string) **required** - A tool results history ID.
* executionId (string) **required** - A tool results execution ID.
* stepId (string) **required** - A tool results step ID.
* sampleSeriesId (string) **required** - A sample series id
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - The cloud project
* historyId (string) **required** - A tool results history ID.
* executionId (string) **required** - A tool results execution ID.
* stepId (string) **required** - A tool results step ID.
* sampleSeriesId (string) **required** - A sample series id
* pageSize (integer) - The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000
* pageToken (string) - Optional, the next_page_token returned in the previous response
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - The cloud project
* historyId (string) **required** - A tool results history ID.
* executionId (string) **required** - A tool results execution ID.
* stepId (string) **required** - A tool results step ID.
* sampleSeriesId (string) **required** - A sample series id
* body (object) - The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - A Project id.
* historyId (string) **required** - A History id.
* executionId (string) **required** - An Execution id.
* stepId (string) **required** - A Step id.
* pageSize (integer) - The maximum number of thumbnails to fetch.
* pageToken (string) - A continuation token to resume the query at the next item.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - A Project id.
* historyId (string) **required** - A History id.
* executionId (string) **required** - A Execution id.
* stepId (string) **required** - A Step id. Note: This step must include a TestExecutionStep.
* body (object) - Request message for StepService.PublishXunitXmlFiles.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### projects.getSettings
Gets the Tool Results settings for a project.

May return any of the following canonical error codes:

- PERMISSION_DENIED - if the user is not authorized to read from project


```js
google_toolresults.projects.getSettings({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - A Project id.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* projectId (string) **required** - A Project id.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

