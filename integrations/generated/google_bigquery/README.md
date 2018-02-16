# @datafire/google_bigquery

Client library for BigQuery

## Installation and Usage
```bash
npm install --save @datafire/google_bigquery
```
```js
let google_bigquery = require('@datafire/google_bigquery').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_bigquery.projects.list({}).then(data => {
  console.log(data);
});
```

## Description

A data platform for customers to create, manage, share and query data.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_bigquery.oauthCallback({
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
google_bigquery.oauthRefresh(null, context)
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

### projects.list
Lists all projects to which you have been granted any project role.


```js
google_bigquery.projects.list({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: Maximum number of results to return
  * pageToken `string`: Page token, returned by a previous call, to request the next page of results
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProjectList](#projectlist)

### datasets.list
Lists all datasets in the specified project to which you have been granted the READER dataset role.


```js
google_bigquery.datasets.list({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * all `boolean`: Whether to list all datasets, including hidden ones
  * filter `string`: An expression for filtering the results of the request by label. The syntax is "labels.<name>[:<value>]". Multiple filters can be ANDed together by connecting with a space. Example: "labels.department:receiving labels.active". See Filtering datasets using labels for details.
  * maxResults `integer`: The maximum number of results to return
  * pageToken `string`: Page token, returned by a previous call, to request the next page of results
  * projectId **required** `string`: Project ID of the datasets to be listed
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DatasetList](#datasetlist)

### datasets.insert
Creates a new empty dataset.


```js
google_bigquery.datasets.insert({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [Dataset](#dataset)
  * projectId **required** `string`: Project ID of the new dataset
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Dataset](#dataset)

### datasets.delete
Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.


```js
google_bigquery.datasets.delete({
  "datasetId": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * datasetId **required** `string`: Dataset ID of dataset being deleted
  * deleteContents `boolean`: If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
  * projectId **required** `string`: Project ID of the dataset being deleted
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### datasets.get
Returns the dataset specified by datasetID.


```js
google_bigquery.datasets.get({
  "datasetId": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * datasetId **required** `string`: Dataset ID of the requested dataset
  * projectId **required** `string`: Project ID of the requested dataset
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Dataset](#dataset)

### datasets.patch
Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.


```js
google_bigquery.datasets.patch({
  "datasetId": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [Dataset](#dataset)
  * datasetId **required** `string`: Dataset ID of the dataset being updated
  * projectId **required** `string`: Project ID of the dataset being updated
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Dataset](#dataset)

### datasets.update
Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.


```js
google_bigquery.datasets.update({
  "datasetId": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [Dataset](#dataset)
  * datasetId **required** `string`: Dataset ID of the dataset being updated
  * projectId **required** `string`: Project ID of the dataset being updated
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Dataset](#dataset)

### tables.list
Lists all tables in the specified dataset. Requires the READER dataset role.


```js
google_bigquery.tables.list({
  "datasetId": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * datasetId **required** `string`: Dataset ID of the tables to list
  * maxResults `integer`: Maximum number of results to return
  * pageToken `string`: Page token, returned by a previous call, to request the next page of results
  * projectId **required** `string`: Project ID of the tables to list
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TableList](#tablelist)

### tables.insert
Creates a new, empty table in the dataset.


```js
google_bigquery.tables.insert({
  "datasetId": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [Table](#table)
  * datasetId **required** `string`: Dataset ID of the new table
  * projectId **required** `string`: Project ID of the new table
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Table](#table)

### tables.delete
Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.


```js
google_bigquery.tables.delete({
  "datasetId": "",
  "projectId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * datasetId **required** `string`: Dataset ID of the table to delete
  * projectId **required** `string`: Project ID of the table to delete
  * tableId **required** `string`: Table ID of the table to delete
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### tables.get
Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.


```js
google_bigquery.tables.get({
  "datasetId": "",
  "projectId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * datasetId **required** `string`: Dataset ID of the requested table
  * projectId **required** `string`: Project ID of the requested table
  * selectedFields `string`: List of fields to return (comma-separated). If unspecified, all fields are returned
  * tableId **required** `string`: Table ID of the requested table
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Table](#table)

### tables.patch
Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.


```js
google_bigquery.tables.patch({
  "datasetId": "",
  "projectId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * body [Table](#table)
  * datasetId **required** `string`: Dataset ID of the table to update
  * projectId **required** `string`: Project ID of the table to update
  * tableId **required** `string`: Table ID of the table to update
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Table](#table)

### tables.update
Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.


```js
google_bigquery.tables.update({
  "datasetId": "",
  "projectId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * body [Table](#table)
  * datasetId **required** `string`: Dataset ID of the table to update
  * projectId **required** `string`: Project ID of the table to update
  * tableId **required** `string`: Table ID of the table to update
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Table](#table)

### tabledata.list
Retrieves table data from a specified set of rows. Requires the READER dataset role.


```js
google_bigquery.tabledata.list({
  "datasetId": "",
  "projectId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * datasetId **required** `string`: Dataset ID of the table to read
  * maxResults `integer`: Maximum number of results to return
  * pageToken `string`: Page token, returned by a previous call, identifying the result set
  * projectId **required** `string`: Project ID of the table to read
  * selectedFields `string`: List of fields to return (comma-separated). If unspecified, all fields are returned
  * startIndex `string`: Zero-based index of the starting row to read
  * tableId **required** `string`: Table ID of the table to read
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TableDataList](#tabledatalist)

### tabledata.insertAll
Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.


```js
google_bigquery.tabledata.insertAll({
  "datasetId": "",
  "projectId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * body [TableDataInsertAllRequest](#tabledatainsertallrequest)
  * datasetId **required** `string`: Dataset ID of the destination table.
  * projectId **required** `string`: Project ID of the destination table.
  * tableId **required** `string`: Table ID of the destination table.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TableDataInsertAllResponse](#tabledatainsertallresponse)

### jobs.list
Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.


```js
google_bigquery.jobs.list({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * allUsers `boolean`: Whether to display jobs owned by all users in the project. Default false
  * maxResults `integer`: Maximum number of results to return
  * pageToken `string`: Page token, returned by a previous call, to request the next page of results
  * projectId **required** `string`: Project ID of the jobs to list
  * projection `string` (values: full, minimal): Restrict information returned to a set of selected fields
  * stateFilter `array`: Filter for job state
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [JobList](#joblist)

### jobs.insert
Starts a new asynchronous job. Requires the Can View project role.


```js
google_bigquery.jobs.insert({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [Job](#job)
  * projectId **required** `string`: Project ID of the project that will be billed for the job
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Job](#job)

### jobs.get
Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.


```js
google_bigquery.jobs.get({
  "jobId": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: [Required] Job ID of the requested job
  * location `string`: [Experimental] The geographic location of the job. Required except for US and EU.
  * projectId **required** `string`: [Required] Project ID of the requested job
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Job](#job)

### jobs.cancel
Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.


```js
google_bigquery.jobs.cancel({
  "jobId": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: [Required] Job ID of the job to cancel
  * location `string`: [Experimental] The geographic location of the job. Required except for US and EU.
  * projectId **required** `string`: [Required] Project ID of the job to cancel
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [JobCancelResponse](#jobcancelresponse)

### jobs.query
Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.


```js
google_bigquery.jobs.query({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [QueryRequest](#queryrequest)
  * projectId **required** `string`: Project ID of the project billed for the query
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [QueryResponse](#queryresponse)

### jobs.getQueryResults
Retrieves the results of a query job.


```js
google_bigquery.jobs.getQueryResults({
  "jobId": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: [Required] Job ID of the query job
  * location `string`: [Experimental] The geographic location where the job should run. Required except for US and EU.
  * maxResults `integer`: Maximum number of results to read
  * pageToken `string`: Page token, returned by a previous call, to request the next page of results
  * projectId **required** `string`: [Required] Project ID of the query job
  * startIndex `string`: Zero-based index of the starting row
  * timeoutMs `integer`: How long to wait for the query to complete, in milliseconds, before returning. Default is 10 seconds. If the timeout passes before the job completes, the 'jobComplete' field in the response will be false
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetQueryResultsResponse](#getqueryresultsresponse)

### projects.getServiceAccount
Returns the email address of the service account for your project used for interactions with Google Cloud KMS.


```js
google_bigquery.projects.getServiceAccount({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID for which the service account is requested.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetServiceAccountResponse](#getserviceaccountresponse)



## Definitions

### BigtableColumn
* BigtableColumn `object`
  * encoding `string`: [Optional] The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. 'encoding' can also be set at the column family level. However, the setting at this level takes precedence if 'encoding' is set at both levels.
  * fieldName `string`: [Optional] If the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as the column field name and is used as field name in queries.
  * onlyReadLatest `boolean`: [Optional] If this is set, only the latest version of value in this column are exposed. 'onlyReadLatest' can also be set at the column family level. However, the setting at this level takes precedence if 'onlyReadLatest' is set at both levels.
  * qualifierEncoded `string`: [Required] Qualifier of the column. Columns in the parent column family that has this exact qualifier are exposed as . field. If the qualifier is valid UTF-8 string, it can be specified in the qualifier_string field. Otherwise, a base-64 encoded value must be set to qualifier_encoded. The column field name is the same as the column qualifier. However, if the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as field_name.
  * qualifierString `string`
  * type `string`: [Optional] The type to convert the value in cells of this column. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive) - BYTES STRING INTEGER FLOAT BOOLEAN Default type is BYTES. 'type' can also be set at the column family level. However, the setting at this level takes precedence if 'type' is set at both levels.

### BigtableColumnFamily
* BigtableColumnFamily `object`
  * columns `array`: [Optional] Lists of columns that should be exposed as individual fields as opposed to a list of (column name, value) pairs. All columns whose qualifier matches a qualifier in this list can be accessed as .. Other columns can be accessed as a list through .Column field.
    * items [BigtableColumn](#bigtablecolumn)
  * encoding `string`: [Optional] The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. This can be overridden for a specific column by listing that column in 'columns' and specifying an encoding for it.
  * familyId `string`: Identifier of the column family.
  * onlyReadLatest `boolean`: [Optional] If this is set only the latest version of value are exposed for all columns in this column family. This can be overridden for a specific column by listing that column in 'columns' and specifying a different setting for that column.
  * type `string`: [Optional] The type to convert the value in cells of this column family. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive) - BYTES STRING INTEGER FLOAT BOOLEAN Default type is BYTES. This can be overridden for a specific column by listing that column in 'columns' and specifying a type for it.

### BigtableOptions
* BigtableOptions `object`
  * columnFamilies `array`: [Optional] List of column families to expose in the table schema along with their types. This list restricts the column families that can be referenced in queries and specifies their value types. You can use this list to do type conversions - see the 'type' field for more details. If you leave this list empty, all column families are present in the table schema and their values are read as BYTES. During a query only the column families referenced in that query are read from Bigtable.
    * items [BigtableColumnFamily](#bigtablecolumnfamily)
  * ignoreUnspecifiedColumnFamilies `boolean`: [Optional] If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema. Otherwise, they are read with BYTES type values. The default value is false.
  * readRowkeyAsString `boolean`: [Optional] If field is true, then the rowkey column families will be read and converted to string. Otherwise they are read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false.

### CsvOptions
* CsvOptions `object`
  * allowJaggedRows `boolean`: [Optional] Indicates if BigQuery should accept rows that are missing trailing optional columns. If true, BigQuery treats missing trailing columns as null values. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.
  * allowQuotedNewlines `boolean`: [Optional] Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
  * encoding `string`: [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties.
  * fieldDelimiter `string`: [Optional] The separator for fields in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator. The default value is a comma (',').
  * quote `string`: [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
  * skipLeadingRows `string`: [Optional] The number of rows at the top of a CSV file that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped.

### Dataset
* Dataset `object`
  * access `array`: [Optional] An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER;
    * items `object`
      * domain `string`: [Pick one] A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. Example: "example.com".
      * groupByEmail `string`: [Pick one] An email address of a Google Group to grant access to.
      * role `string`: [Required] Describes the rights granted to the user specified by the other member of the access object. The following string values are supported: READER, WRITER, OWNER.
      * specialGroup `string`: [Pick one] A special group to grant access to. Possible values include: projectOwners: Owners of the enclosing project. projectReaders: Readers of the enclosing project. projectWriters: Writers of the enclosing project. allAuthenticatedUsers: All authenticated BigQuery users.
      * userByEmail `string`: [Pick one] An email address of a user to grant access to. For example: fred@example.com.
      * view [TableReference](#tablereference)
  * creationTime `string`: [Output-only] The time when this dataset was created, in milliseconds since the epoch.
  * datasetReference [DatasetReference](#datasetreference)
  * defaultTableExpirationMs `string`: [Optional] The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds (one hour). Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property.
  * description `string`: [Optional] A user-friendly description of the dataset.
  * etag `string`: [Output-only] A hash of the resource.
  * friendlyName `string`: [Optional] A descriptive name for the dataset.
  * id `string`: [Output-only] The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field.
  * kind `string`: [Output-only] The resource type.
  * labels `object`: The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See Labeling Datasets for more information.
  * lastModifiedTime `string`: [Output-only] The date when this dataset or any of its tables was last modified, in milliseconds since the epoch.
  * location `string`: The geographic location where the dataset should reside. Possible values include EU and US. The default value is US.
  * selfLink `string`: [Output-only] A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource.

### DatasetList
* DatasetList `object`
  * datasets `array`: An array of the dataset resources in the project. Each resource contains basic information. For full information about a particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the project.
    * items `object`
      * datasetReference [DatasetReference](#datasetreference)
      * friendlyName `string`: A descriptive name for the dataset, if one exists.
      * id `string`: The fully-qualified, unique, opaque ID of the dataset.
      * kind `string`: The resource type. This property always returns the value "bigquery#dataset".
      * labels `object`: The labels associated with this dataset. You can use these to organize and group your datasets.
      * location `string`: [Experimental] The geographic location where the data resides.
  * etag `string`: A hash value of the results page. You can use this property to determine if the page has changed since the last request.
  * kind `string`: The list type. This property always returns the value "bigquery#datasetList".
  * nextPageToken `string`: A token that can be used to request the next results page. This property is omitted on the final results page.

### DatasetReference
* DatasetReference `object`
  * datasetId `string`: [Required] A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
  * projectId `string`: [Optional] The ID of the project containing this dataset.

### EncryptionConfiguration
* EncryptionConfiguration `object`
  * kmsKeyName `string`: [Optional] Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key.

### ErrorProto
* ErrorProto `object`
  * debugInfo `string`: Debugging information. This property is internal to Google and should not be used.
  * location `string`: Specifies where the error occurred, if present.
  * message `string`: A human-readable description of the error.
  * reason `string`: A short error code that summarizes the error.

### ExplainQueryStage
* ExplainQueryStage `object`
  * completedParallelInputs `string`: Number of parallel input segments completed.
  * computeMsAvg `string`: Milliseconds the average shard spent on CPU-bound tasks.
  * computeMsMax `string`: Milliseconds the slowest shard spent on CPU-bound tasks.
  * computeRatioAvg `number`: Relative amount of time the average shard spent on CPU-bound tasks.
  * computeRatioMax `number`: Relative amount of time the slowest shard spent on CPU-bound tasks.
  * id `string`: Unique ID for stage within plan.
  * name `string`: Human-readable name for stage.
  * parallelInputs `string`: Number of parallel input segments to be processed.
  * readMsAvg `string`: Milliseconds the average shard spent reading input.
  * readMsMax `string`: Milliseconds the slowest shard spent reading input.
  * readRatioAvg `number`: Relative amount of time the average shard spent reading input.
  * readRatioMax `number`: Relative amount of time the slowest shard spent reading input.
  * recordsRead `string`: Number of records read into the stage.
  * recordsWritten `string`: Number of records written by the stage.
  * shuffleOutputBytes `string`: Total number of bytes written to shuffle.
  * shuffleOutputBytesSpilled `string`: Total number of bytes written to shuffle and spilled to disk.
  * status `string`: Current status for the stage.
  * steps `array`: List of operations within the stage in dependency order (approximately chronological).
    * items [ExplainQueryStep](#explainquerystep)
  * waitMsAvg `string`: Milliseconds the average shard spent waiting to be scheduled.
  * waitMsMax `string`: Milliseconds the slowest shard spent waiting to be scheduled.
  * waitRatioAvg `number`: Relative amount of time the average shard spent waiting to be scheduled.
  * waitRatioMax `number`: Relative amount of time the slowest shard spent waiting to be scheduled.
  * writeMsAvg `string`: Milliseconds the average shard spent on writing output.
  * writeMsMax `string`: Milliseconds the slowest shard spent on writing output.
  * writeRatioAvg `number`: Relative amount of time the average shard spent on writing output.
  * writeRatioMax `number`: Relative amount of time the slowest shard spent on writing output.

### ExplainQueryStep
* ExplainQueryStep `object`
  * kind `string`: Machine-readable operation type.
  * substeps `array`: Human-readable stage descriptions.
    * items `string`

### ExternalDataConfiguration
* ExternalDataConfiguration `object`
  * autodetect `boolean`: Try to detect schema and format options automatically. Any option specified explicitly will be honored.
  * bigtableOptions [BigtableOptions](#bigtableoptions)
  * compression `string`: [Optional] The compression type of the data source. Possible values include GZIP and NONE. The default value is NONE. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats.
  * csvOptions [CsvOptions](#csvoptions)
  * googleSheetsOptions [GoogleSheetsOptions](#googlesheetsoptions)
  * ignoreUnknownValues `boolean`: [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names Google Cloud Bigtable: This setting is ignored. Google Cloud Datastore backups: This setting is ignored. Avro: This setting is ignored.
  * maxBadRecords `integer`: [Optional] The maximum number of bad records that BigQuery can ignore when reading data. If the number of bad records exceeds this value, an invalid error is returned in the job result. The default value is 0, which requires that all records are valid. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats.
  * schema [TableSchema](#tableschema)
  * sourceFormat `string`: [Required] The data format. For CSV files, specify "CSV". For Google sheets, specify "GOOGLE_SHEETS". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro files, specify "AVRO". For Google Cloud Datastore backups, specify "DATASTORE_BACKUP". [Beta] For Google Cloud Bigtable, specify "BIGTABLE".
  * sourceUris `array`: [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups, exactly one URI can be specified. Also, the '*' wildcard character is not allowed.
    * items `string`

### GetQueryResultsResponse
* GetQueryResultsResponse `object`
  * cacheHit `boolean`: Whether the query result was fetched from the query cache.
  * errors `array`: [Output-only] The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful.
    * items [ErrorProto](#errorproto)
  * etag `string`: A hash of this response.
  * jobComplete `boolean`: Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.
  * jobReference [JobReference](#jobreference)
  * kind `string`: The resource type of the response.
  * numDmlAffectedRows `string`: [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
  * pageToken `string`: A token used for paging results.
  * rows `array`: An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. Present only when the query completes successfully.
    * items [TableRow](#tablerow)
  * schema [TableSchema](#tableschema)
  * totalBytesProcessed `string`: The total number of bytes processed for this query.
  * totalRows `string`: The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. Present only when the query completes successfully.

### GetServiceAccountResponse
* GetServiceAccountResponse `object`
  * email `string`: The service account email address.
  * kind `string`: The resource type of the response.

### GoogleSheetsOptions
* GoogleSheetsOptions `object`
  * skipLeadingRows `string`: [Optional] The number of rows at the top of a sheet that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows that should be skipped. When autodetect is on, behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.

### Job
* Job `object`
  * configuration [JobConfiguration](#jobconfiguration)
  * etag `string`: [Output-only] A hash of this resource.
  * id `string`: [Output-only] Opaque ID field of the job
  * jobReference [JobReference](#jobreference)
  * kind `string`: [Output-only] The type of the resource.
  * selfLink `string`: [Output-only] A URL that can be used to access this resource again.
  * statistics [JobStatistics](#jobstatistics)
  * status [JobStatus](#jobstatus)
  * user_email `string`: [Output-only] Email address of the user who ran the job.

### JobCancelResponse
* JobCancelResponse `object`
  * job [Job](#job)
  * kind `string`: The resource type of the response.

### JobConfiguration
* JobConfiguration `object`
  * copy [JobConfigurationTableCopy](#jobconfigurationtablecopy)
  * dryRun `boolean`: [Optional] If set, don't actually run this job. A valid query will return a mostly empty response with some processing statistics, while an invalid query will return the same error it would if it wasn't a dry run. Behavior of non-query jobs is undefined.
  * extract [JobConfigurationExtract](#jobconfigurationextract)
  * jobTimeoutMs `string`: [Optional] Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.
  * labels `object`: The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
  * load [JobConfigurationLoad](#jobconfigurationload)
  * query [JobConfigurationQuery](#jobconfigurationquery)

### JobConfigurationExtract
* JobConfigurationExtract `object`
  * compression `string`: [Optional] The compression type to use for exported files. Possible values include GZIP and NONE. The default value is NONE.
  * destinationFormat `string`: [Optional] The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO. The default value is CSV. Tables with nested or repeated fields cannot be exported as CSV.
  * destinationUri `string`: [Pick one] DEPRECATED: Use destinationUris instead, passing only one URI as necessary. The fully-qualified Google Cloud Storage URI where the extracted table should be written.
  * destinationUris `array`: [Pick one] A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.
    * items `string`
  * fieldDelimiter `string`: [Optional] Delimiter to use between fields in the exported data. Default is ','
  * printHeader `boolean`: [Optional] Whether to print out a header row in the results. Default is true.
  * sourceTable [TableReference](#tablereference)

### JobConfigurationLoad
* JobConfigurationLoad `object`
  * allowJaggedRows `boolean`: [Optional] Accept rows that are missing trailing optional columns. The missing values are treated as nulls. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.
  * allowQuotedNewlines `boolean`: Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
  * autodetect `boolean`: Indicates if we should automatically infer the options and schema for CSV and JSON sources.
  * createDisposition `string`: [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
  * destinationEncryptionConfiguration [EncryptionConfiguration](#encryptionconfiguration)
  * destinationTable [TableReference](#tablereference)
  * encoding `string`: [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties.
  * fieldDelimiter `string`: [Optional] The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character. To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator. The default value is a comma (',').
  * ignoreUnknownValues `boolean`: [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names
  * maxBadRecords `integer`: [Optional] The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value, an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.
  * nullMarker `string`: [Optional] Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery interprets "\N" as a null value when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as an empty value.
  * projectionFields `array`: If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties. If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.
    * items `string`
  * quote `string`: [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
  * schema [TableSchema](#tableschema)
  * schemaInline `string`: [Deprecated] The inline schema. For CSV schemas, specify as "Field1:Type1[,Field2:Type2]*". For example, "foo:STRING, bar:INTEGER, baz:FLOAT".
  * schemaInlineFormat `string`: [Deprecated] The format of the schemaInline property.
  * schemaUpdateOptions `array`: Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
    * items `string`
  * skipLeadingRows `integer`: [Optional] The number of rows at the top of a CSV file that BigQuery will skip when loading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped.
  * sourceFormat `string`: [Optional] The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". The default value is CSV.
  * sourceUris `array`: [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.
    * items `string`
  * timePartitioning [TimePartitioning](#timepartitioning)
  * writeDisposition `string`: [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.

### JobConfigurationQuery
* JobConfigurationQuery `object`
  * allowLargeResults `boolean`: [Optional] If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed. However, you must still set destinationTable when result size exceeds the allowed maximum response size.
  * createDisposition `string`: [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
  * defaultDataset [DatasetReference](#datasetreference)
  * destinationEncryptionConfiguration [EncryptionConfiguration](#encryptionconfiguration)
  * destinationTable [TableReference](#tablereference)
  * flattenResults `boolean`: [Optional] If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.
  * maximumBillingTier `integer`: [Optional] Limits the billing tier for this job. Queries that have resource usage beyond this tier will fail (without incurring a charge). If unspecified, this will be set to your project default.
  * maximumBytesBilled `string`: [Optional] Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge). If unspecified, this will be set to your project default.
  * parameterMode `string`: Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
  * preserveNulls `boolean`: [Deprecated] This property is deprecated.
  * priority `string`: [Optional] Specifies a priority for the query. Possible values include INTERACTIVE and BATCH. The default value is INTERACTIVE.
  * query `string`: [Required] SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
  * queryParameters `array`: Query parameters for standard SQL queries.
    * items [QueryParameter](#queryparameter)
  * schemaUpdateOptions `array`: Allows the schema of the destination table to be updated as a side effect of the query job. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
    * items `string`
  * tableDefinitions `object`: [Optional] If querying an external data source outside of BigQuery, describes the data format, location and other properties of the data source. By defining these properties, the data source can then be queried as if it were a standard BigQuery table.
  * timePartitioning [TimePartitioning](#timepartitioning)
  * useLegacySql `boolean`: Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false.
  * useQueryCache `boolean`: [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified. The default value is true.
  * userDefinedFunctionResources `array`: Describes user-defined function resources used in the query.
    * items [UserDefinedFunctionResource](#userdefinedfunctionresource)
  * writeDisposition `string`: [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.

### JobConfigurationTableCopy
* JobConfigurationTableCopy `object`
  * createDisposition `string`: [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
  * destinationEncryptionConfiguration [EncryptionConfiguration](#encryptionconfiguration)
  * destinationTable [TableReference](#tablereference)
  * sourceTable [TableReference](#tablereference)
  * sourceTables `array`: [Pick one] Source tables to copy.
    * items [TableReference](#tablereference)
  * writeDisposition `string`: [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.

### JobList
* JobList `object`
  * etag `string`: A hash of this page of results.
  * jobs `array`: List of jobs that were requested.
    * items `object`
      * configuration [JobConfiguration](#jobconfiguration)
      * errorResult [ErrorProto](#errorproto)
      * id `string`: Unique opaque ID of the job.
      * jobReference [JobReference](#jobreference)
      * kind `string`: The resource type.
      * state `string`: Running state of the job. When the state is DONE, errorResult can be checked to determine whether the job succeeded or failed.
      * statistics [JobStatistics](#jobstatistics)
      * status [JobStatus](#jobstatus)
      * user_email `string`: [Full-projection-only] Email address of the user who ran the job.
  * kind `string`: The resource type of the response.
  * nextPageToken `string`: A token to request the next page of results.

### JobReference
* JobReference `object`
  * jobId `string`: [Required] The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
  * location [Location](#location)
  * projectId `string`: [Required] The ID of the project containing this job.

### JobStatistics
* JobStatistics `object`
  * completionRatio `number`: [Experimental] [Output-only] Job progress (0.0 -> 1.0) for LOAD and EXTRACT jobs.
  * creationTime `string`: [Output-only] Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs.
  * endTime `string`: [Output-only] End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the DONE state.
  * extract [JobStatistics4](#jobstatistics4)
  * load [JobStatistics3](#jobstatistics3)
  * query [JobStatistics2](#jobstatistics2)
  * startTime `string`: [Output-only] Start time of this job, in milliseconds since the epoch. This field will be present when the job transitions from the PENDING state to either RUNNING or DONE.
  * totalBytesProcessed `string`: [Output-only] [Deprecated] Use the bytes processed in the query statistics instead.

### JobStatistics2
* JobStatistics2 `object`
  * billingTier `integer`: [Output-only] Billing tier for the job.
  * cacheHit `boolean`: [Output-only] Whether the query result was fetched from the query cache.
  * ddlOperationPerformed `string`: [Output-only, Experimental] The DDL operation performed, possibly dependent on the pre-existence of the DDL target. Possible values (new values might be added in the future): "CREATE": The query created the DDL target. "SKIP": No-op. Example cases: the query is CREATE TABLE IF NOT EXISTS while the table already exists, or the query is DROP TABLE IF EXISTS while the table does not exist. "REPLACE": The query replaced the DDL target. Example case: the query is CREATE OR REPLACE TABLE, and the table already exists. "DROP": The query deleted the DDL target.
  * ddlTargetTable [TableReference](#tablereference)
  * estimatedBytesProcessed `string`: [Output-only] The original estimate of bytes processed for the job.
  * numDmlAffectedRows `string`: [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
  * queryPlan `array`: [Output-only] Describes execution plan for the query.
    * items [ExplainQueryStage](#explainquerystage)
  * referencedTables `array`: [Output-only] Referenced tables for the job. Queries that reference more than 50 tables will not have a complete list.
    * items [TableReference](#tablereference)
  * schema [TableSchema](#tableschema)
  * statementType `string`: [Output-only, Experimental] The type of query statement, if valid. Possible values (new values might be added in the future): "SELECT": SELECT query. "INSERT": INSERT query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language "UPDATE": UPDATE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language "DELETE": DELETE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language "CREATE_TABLE": CREATE [OR REPLACE] TABLE without AS SELECT. "CREATE_TABLE_AS_SELECT": CREATE [OR REPLACE] TABLE ... AS SELECT ... "DROP_TABLE": DROP TABLE query. "CREATE_VIEW": CREATE [OR REPLACE] VIEW ... AS SELECT ... "DROP_VIEW": DROP VIEW query.
  * timeline `array`: [Output-only] Describes a timeline of job execution.
    * items [QueryTimelineSample](#querytimelinesample)
  * totalBytesBilled `string`: [Output-only] Total bytes billed for the job.
  * totalBytesProcessed `string`: [Output-only] Total bytes processed for the job.
  * totalSlotMs `string`: [Output-only] Slot-milliseconds for the job.
  * undeclaredQueryParameters `array`: [Output-only, Experimental] Standard SQL only: list of undeclared query parameters detected during a dry run validation.
    * items [QueryParameter](#queryparameter)

### JobStatistics3
* JobStatistics3 `object`
  * badRecords `string`: [Output-only] The number of bad records encountered. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data.
  * inputFileBytes `string`: [Output-only] Number of bytes of source data in a load job.
  * inputFiles `string`: [Output-only] Number of source files in a load job.
  * outputBytes `string`: [Output-only] Size of the loaded data in bytes. Note that while a load job is in the running state, this value may change.
  * outputRows `string`: [Output-only] Number of rows imported in a load job. Note that while an import job is in the running state, this value may change.

### JobStatistics4
* JobStatistics4 `object`
  * destinationUriFileCounts `array`: [Output-only] Number of files per destination URI or URI pattern specified in the extract configuration. These values will be in the same order as the URIs specified in the 'destinationUris' field.
    * items `string`

### JobStatus
* JobStatus `object`
  * errorResult [ErrorProto](#errorproto)
  * errors `array`: [Output-only] The first errors encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful.
    * items [ErrorProto](#errorproto)
  * state `string`: [Output-only] Running state of the job.

### JsonObject
* JsonObject `object`: Represents a single JSON object.

### JsonValue


### Location
* Location `string`

### ProjectList
* ProjectList `object`
  * etag `string`: A hash of the page of results
  * kind `string`: The type of list.
  * nextPageToken `string`: A token to request the next page of results.
  * projects `array`: Projects to which you have at least READ access.
    * items `object`
      * friendlyName `string`: A descriptive name for this project.
      * id `string`: An opaque ID of this project.
      * kind `string`: The resource type.
      * numericId `string`: The numeric ID of this project.
      * projectReference [ProjectReference](#projectreference)
  * totalItems `integer`: The total number of projects in the list.

### ProjectReference
* ProjectReference `object`
  * projectId `string`: [Required] ID of the project. Can be either the numeric ID or the assigned ID of the project.

### QueryParameter
* QueryParameter `object`
  * name `string`: [Optional] If unset, this is a positional parameter. Otherwise, should be unique within a query.
  * parameterType [QueryParameterType](#queryparametertype)
  * parameterValue [QueryParameterValue](#queryparametervalue)

### QueryParameterType
* QueryParameterType `object`
  * arrayType [QueryParameterType](#queryparametertype)
  * structTypes `array`: [Optional] The types of the fields of this struct, in order, if this is a struct.
    * items `object`
      * description `string`: [Optional] Human-oriented description of the field.
      * name `string`: [Optional] The name of this field.
      * type [QueryParameterType](#queryparametertype)
  * type `string`: [Required] The top level type of this field.

### QueryParameterValue
* QueryParameterValue `object`
  * arrayValues `array`: [Optional] The array values, if this is an array type.
    * items [QueryParameterValue](#queryparametervalue)
  * structValues `object`: [Optional] The struct field values, in order of the struct type's declaration.
  * value `string`: [Optional] The value of this value, if a simple scalar type.

### QueryRequest
* QueryRequest `object`
  * defaultDataset [DatasetReference](#datasetreference)
  * dryRun `boolean`: [Optional] If set to true, BigQuery doesn't run the job. Instead, if the query is valid, BigQuery returns statistics about the job such as how many bytes would be processed. If the query is invalid, an error returns. The default value is false.
  * kind `string`: The resource type of the request.
  * location [Location](#location)
  * maxResults `integer`: [Optional] The maximum number of rows of data to return per page of results. Setting this flag to a small value such as 1000 and then paging through results might improve reliability when the query result set is large. In addition to this limit, responses are also limited to 10 MB. By default, there is no maximum row count, and only the byte limit applies.
  * parameterMode `string`: Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
  * preserveNulls `boolean`: [Deprecated] This property is deprecated.
  * query `string`: [Required] A query string, following the BigQuery query syntax, of the query to execute. Example: "SELECT count(f1) FROM [myProjectId:myDatasetId.myTableId]".
  * queryParameters `array`: Query parameters for Standard SQL queries.
    * items [QueryParameter](#queryparameter)
  * timeoutMs `integer`: [Optional] How long to wait for the query to complete, in milliseconds, before the request times out and returns. Note that this is only a timeout for the request, not the query. If the query takes longer to run than the timeout value, the call returns without any results and with the 'jobComplete' flag set to false. You can call GetQueryResults() to wait for the query to complete and read the results. The default value is 10000 milliseconds (10 seconds).
  * useLegacySql `boolean`: Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false.
  * useQueryCache `boolean`: [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. The default value is true.

### QueryResponse
* QueryResponse `object`
  * cacheHit `boolean`: Whether the query result was fetched from the query cache.
  * errors `array`: [Output-only] The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful.
    * items [ErrorProto](#errorproto)
  * jobComplete `boolean`: Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.
  * jobReference [JobReference](#jobreference)
  * kind `string`: The resource type.
  * numDmlAffectedRows `string`: [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
  * pageToken `string`: A token used for paging results.
  * rows `array`: An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above.
    * items [TableRow](#tablerow)
  * schema [TableSchema](#tableschema)
  * totalBytesProcessed `string`: The total number of bytes processed for this query. If this query was a dry run, this is the number of bytes that would be processed if the query were run.
  * totalRows `string`: The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results.

### QueryTimelineSample
* QueryTimelineSample `object`
  * activeInputs `integer`: Total number of active workers. This does not correspond directly to slot usage. This is the largest value observed since the last sample.
  * completedInputs `integer`: Total parallel units of work completed by this query.
  * elapsedMs `string`: Milliseconds elapsed since the start of query execution.
  * pendingInputs `string`: Total parallel units of work remaining for the active stages.
  * totalSlotMs `string`: Cumulative slot-ms consumed by the query.

### Streamingbuffer
* Streamingbuffer `object`
  * estimatedBytes `string`: [Output-only] A lower-bound estimate of the number of bytes currently in the streaming buffer.
  * estimatedRows `string`: [Output-only] A lower-bound estimate of the number of rows currently in the streaming buffer.
  * oldestEntryTime `string`: [Output-only] Contains the timestamp of the oldest entry in the streaming buffer, in milliseconds since the epoch, if the streaming buffer is available.

### Table
* Table `object`
  * creationTime `string`: [Output-only] The time when this table was created, in milliseconds since the epoch.
  * description `string`: [Optional] A user-friendly description of this table.
  * encryptionConfiguration [EncryptionConfiguration](#encryptionconfiguration)
  * etag `string`: [Output-only] A hash of this resource.
  * expirationTime `string`: [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created tables.
  * externalDataConfiguration [ExternalDataConfiguration](#externaldataconfiguration)
  * friendlyName `string`: [Optional] A descriptive name for this table.
  * id `string`: [Output-only] An opaque ID uniquely identifying the table.
  * kind `string`: [Output-only] The type of the resource.
  * labels `object`: The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
  * lastModifiedTime `string`: [Output-only] The time when this table was last modified, in milliseconds since the epoch.
  * location `string`: [Output-only] The geographic location where the table resides. This value is inherited from the dataset.
  * numBytes `string`: [Output-only] The size of this table in bytes, excluding any data in the streaming buffer.
  * numLongTermBytes `string`: [Output-only] The number of bytes in the table that are considered "long-term storage".
  * numRows `string`: [Output-only] The number of rows of data in this table, excluding any data in the streaming buffer.
  * schema [TableSchema](#tableschema)
  * selfLink `string`: [Output-only] A URL that can be used to access this resource again.
  * streamingBuffer [Streamingbuffer](#streamingbuffer)
  * tableReference [TableReference](#tablereference)
  * timePartitioning [TimePartitioning](#timepartitioning)
  * type `string`: [Output-only] Describes the table type. The following values are supported: TABLE: A normal BigQuery table. VIEW: A virtual table defined by a SQL query. EXTERNAL: A table that references data stored in an external storage system, such as Google Cloud Storage. The default value is TABLE.
  * view [ViewDefinition](#viewdefinition)

### TableCell
* TableCell `object`

### TableDataInsertAllRequest
* TableDataInsertAllRequest `object`
  * ignoreUnknownValues `boolean`: [Optional] Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is false, which treats unknown values as errors.
  * kind `string`: The resource type of the response.
  * rows `array`: The rows to insert.
    * items `object`
      * insertId `string`: [Optional] A unique ID for each row. BigQuery uses this property to detect duplicate insertion requests on a best-effort basis.
      * json [JsonObject](#jsonobject)
  * skipInvalidRows `boolean`: [Optional] Insert all valid rows of a request, even if invalid rows exist. The default value is false, which causes the entire request to fail if any invalid rows exist.
  * templateSuffix `string`: [Experimental] If specified, treats the destination table as a base template, and inserts the rows into an instance table named "{destination}{templateSuffix}". BigQuery will manage creation of the instance table, using the schema of the base template table. See https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables for considerations when working with templates tables.

### TableDataInsertAllResponse
* TableDataInsertAllResponse `object`
  * insertErrors `array`: An array of errors for rows that were not inserted.
    * items `object`
      * errors `array`: Error information for the row indicated by the index property.
        * items [ErrorProto](#errorproto)
      * index `integer`: The index of the row that error applies to.
  * kind `string`: The resource type of the response.

### TableDataList
* TableDataList `object`
  * etag `string`: A hash of this page of results.
  * kind `string`: The resource type of the response.
  * pageToken `string`: A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable results when an underlying table is changing.
  * rows `array`: Rows of results.
    * items [TableRow](#tablerow)
  * totalRows `string`: The total number of rows in the complete table.

### TableFieldSchema
* TableFieldSchema `object`
  * description `string`: [Optional] The field description. The maximum length is 1,024 characters.
  * fields `array`: [Optional] Describes the nested schema fields if the type property is set to RECORD.
    * items [TableFieldSchema](#tablefieldschema)
  * mode `string`: [Optional] The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE.
  * name `string`: [Required] The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 128 characters.
  * type `string`: [Required] The field data type. Possible values include STRING, BYTES, INTEGER, INT64 (same as INTEGER), FLOAT, FLOAT64 (same as FLOAT), BOOLEAN, BOOL (same as BOOLEAN), TIMESTAMP, DATE, TIME, DATETIME, RECORD (where RECORD indicates that the field contains a nested schema) or STRUCT (same as RECORD).

### TableList
* TableList `object`
  * etag `string`: A hash of this page of results.
  * kind `string`: The type of list.
  * nextPageToken `string`: A token to request the next page of results.
  * tables `array`: Tables in the requested dataset.
    * items `object`
      * creationTime `string`: The time when this table was created, in milliseconds since the epoch.
      * expirationTime `string`: [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.
      * friendlyName `string`: The user-friendly name for this table.
      * id `string`: An opaque ID of the table
      * kind `string`: The resource type.
      * labels `object`: The labels associated with this table. You can use these to organize and group your tables.
      * tableReference [TableReference](#tablereference)
      * timePartitioning [TimePartitioning](#timepartitioning)
      * type `string`: The type of table. Possible values are: TABLE, VIEW.
      * view `object`: Additional details for a view.
        * useLegacySql `boolean`: True if view is defined in legacy SQL dialect, false if in standard SQL.
  * totalItems `integer`: The total number of tables in the dataset.

### TableReference
* TableReference `object`
  * datasetId `string`: [Required] The ID of the dataset containing this table.
  * projectId `string`: [Required] The ID of the project containing this table.
  * tableId `string`: [Required] The ID of the table. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.

### TableRow
* TableRow `object`
  * f `array`: Represents a single row in the result set, consisting of one or more fields.
    * items [TableCell](#tablecell)

### TableSchema
* TableSchema `object`
  * fields `array`: Describes the fields in a table.
    * items [TableFieldSchema](#tablefieldschema)

### TimePartitioning
* TimePartitioning `object`
  * expirationMs `string`: [Optional] Number of milliseconds for which to keep the storage for a partition.
  * field `string`: [Experimental] [Optional] If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; if set, the table is partitioned by this field. The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
  * type `string`: [Required] The only type supported is DAY, which will generate one partition per day.

### UserDefinedFunctionResource
* UserDefinedFunctionResource `object`
  * inlineCode `string`: [Pick one] An inline resource that contains code for a user-defined function (UDF). Providing a inline code resource is equivalent to providing a URI for a file containing the same code.
  * resourceUri `string`: [Pick one] A code resource to load from a Google Cloud Storage URI (gs://bucket/path).

### ViewDefinition
* ViewDefinition `object`
  * query `string`: [Required] A query that BigQuery executes when the view is referenced.
  * useLegacySql `boolean`: Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ Queries and views that reference this view must use the same flag value.
  * userDefinedFunctionResources `array`: Describes user-defined function resources used in the query.
    * items [UserDefinedFunctionResource](#userdefinedfunctionresource)


