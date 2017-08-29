# @datafire/google_bigquery

Client library for BigQuery

## Installation and Usage
```bash
npm install --save datafire @datafire/google_bigquery
```

```js
let datafire = require('datafire');
let google_bigquery = require('@datafire/google_bigquery').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_bigquery.projects.list({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_bigquery.oauthRefresh(null, context)
```


### projects.list
Lists all projects to which you have been granted any project role.


```js
google_bigquery.projects.list({}, context)
```

#### Parameters
* maxResults (integer) - Maximum number of results to return
* pageToken (string) - Page token, returned by a previous call, to request the next page of results
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datasets.list
Lists all datasets in the specified project to which you have been granted the READER dataset role.


```js
google_bigquery.datasets.list({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the datasets to be listed
* all (boolean) - Whether to list all datasets, including hidden ones
* filter (string) - An expression for filtering the results of the request by label. The syntax is "labels.<name>[:<value>]". Multiple filters can be ANDed together by connecting with a space. Example: "labels.department:receiving labels.active". See Filtering datasets using labels for details.
* maxResults (integer) - The maximum number of results to return
* pageToken (string) - Page token, returned by a previous call, to request the next page of results
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datasets.insert
Creates a new empty dataset.


```js
google_bigquery.datasets.insert({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the new dataset
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datasets.delete
Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.


```js
google_bigquery.datasets.delete({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the dataset being deleted
* datasetId (string) **required** - Dataset ID of dataset being deleted
* deleteContents (boolean) - If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datasets.get
Returns the dataset specified by datasetID.


```js
google_bigquery.datasets.get({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the requested dataset
* datasetId (string) **required** - Dataset ID of the requested dataset
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datasets.patch
Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.


```js
google_bigquery.datasets.patch({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the dataset being updated
* datasetId (string) **required** - Dataset ID of the dataset being updated
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datasets.update
Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.


```js
google_bigquery.datasets.update({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the dataset being updated
* datasetId (string) **required** - Dataset ID of the dataset being updated
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tables.list
Lists all tables in the specified dataset. Requires the READER dataset role.


```js
google_bigquery.tables.list({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the tables to list
* datasetId (string) **required** - Dataset ID of the tables to list
* maxResults (integer) - Maximum number of results to return
* pageToken (string) - Page token, returned by a previous call, to request the next page of results
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tables.insert
Creates a new, empty table in the dataset.


```js
google_bigquery.tables.insert({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the new table
* datasetId (string) **required** - Dataset ID of the new table
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tables.delete
Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.


```js
google_bigquery.tables.delete({
  "projectId": "",
  "datasetId": "",
  "tableId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the table to delete
* datasetId (string) **required** - Dataset ID of the table to delete
* tableId (string) **required** - Table ID of the table to delete
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tables.get
Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.


```js
google_bigquery.tables.get({
  "projectId": "",
  "datasetId": "",
  "tableId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the requested table
* datasetId (string) **required** - Dataset ID of the requested table
* tableId (string) **required** - Table ID of the requested table
* selectedFields (string) - List of fields to return (comma-separated). If unspecified, all fields are returned
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tables.patch
Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.


```js
google_bigquery.tables.patch({
  "projectId": "",
  "datasetId": "",
  "tableId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the table to update
* datasetId (string) **required** - Dataset ID of the table to update
* tableId (string) **required** - Table ID of the table to update
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tables.update
Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.


```js
google_bigquery.tables.update({
  "projectId": "",
  "datasetId": "",
  "tableId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the table to update
* datasetId (string) **required** - Dataset ID of the table to update
* tableId (string) **required** - Table ID of the table to update
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tabledata.list
Retrieves table data from a specified set of rows. Requires the READER dataset role.


```js
google_bigquery.tabledata.list({
  "projectId": "",
  "datasetId": "",
  "tableId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the table to read
* datasetId (string) **required** - Dataset ID of the table to read
* tableId (string) **required** - Table ID of the table to read
* maxResults (integer) - Maximum number of results to return
* pageToken (string) - Page token, returned by a previous call, identifying the result set
* selectedFields (string) - List of fields to return (comma-separated). If unspecified, all fields are returned
* startIndex (string) - Zero-based index of the starting row to read
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### tabledata.insertAll
Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.


```js
google_bigquery.tabledata.insertAll({
  "projectId": "",
  "datasetId": "",
  "tableId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the destination table.
* datasetId (string) **required** - Dataset ID of the destination table.
* tableId (string) **required** - Table ID of the destination table.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### jobs.list
Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.


```js
google_bigquery.jobs.list({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the jobs to list
* allUsers (boolean) - Whether to display jobs owned by all users in the project. Default false
* maxResults (integer) - Maximum number of results to return
* pageToken (string) - Page token, returned by a previous call, to request the next page of results
* projection (string) - Restrict information returned to a set of selected fields
* stateFilter (array) - Filter for job state
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### jobs.insert
Starts a new asynchronous job. Requires the Can View project role.


```js
google_bigquery.jobs.insert({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the project that will be billed for the job
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### jobs.get
Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.


```js
google_bigquery.jobs.get({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - [Required] Project ID of the requested job
* jobId (string) **required** - [Required] Job ID of the requested job
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### jobs.cancel
Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.


```js
google_bigquery.jobs.cancel({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - [Required] Project ID of the job to cancel
* jobId (string) **required** - [Required] Job ID of the job to cancel
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### jobs.query
Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.


```js
google_bigquery.jobs.query({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - Project ID of the project billed for the query
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### jobs.getQueryResults
Retrieves the results of a query job.


```js
google_bigquery.jobs.getQueryResults({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - [Required] Project ID of the query job
* jobId (string) **required** - [Required] Job ID of the query job
* maxResults (integer) - Maximum number of results to read
* pageToken (string) - Page token, returned by a previous call, to request the next page of results
* startIndex (string) - Zero-based index of the starting row
* timeoutMs (integer) - How long to wait for the query to complete, in milliseconds, before returning. Default is 10 seconds. If the timeout passes before the job completes, the 'jobComplete' field in the response will be false
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

