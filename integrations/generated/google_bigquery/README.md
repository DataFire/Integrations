# @datafire/google_bigquery

Client library for BigQuery API

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

.then(data => {
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

### bigquery.projects.list
Lists all projects to which you have been granted any project role.


```js
google_bigquery.bigquery.projects.list({}, context)
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
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ProjectList](#projectlist)

### bigquery.datasets.list
Lists all datasets in the specified project to which you have been granted the READER dataset role.


```js
google_bigquery.bigquery.datasets.list({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the datasets to be listed
  * all `boolean`: Whether to list all datasets, including hidden ones
  * filter `string`: An expression for filtering the results of the request by label. The syntax is "labels.<name>[:<value>]". Multiple filters can be ANDed together by connecting with a space. Example: "labels.department:receiving labels.active". See Filtering datasets using labels for details.
  * maxResults `integer`: The maximum number of results to return
  * pageToken `string`: Page token, returned by a previous call, to request the next page of results
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [DatasetList](#datasetlist)

### bigquery.datasets.insert
Creates a new empty dataset.


```js
google_bigquery.bigquery.datasets.insert({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the new dataset
  * body [Dataset](#dataset)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Dataset](#dataset)

### bigquery.datasets.delete
Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.


```js
google_bigquery.bigquery.datasets.delete({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the dataset being deleted
  * datasetId **required** `string`: Dataset ID of dataset being deleted
  * deleteContents `boolean`: If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### bigquery.datasets.get
Returns the dataset specified by datasetID.


```js
google_bigquery.bigquery.datasets.get({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the requested dataset
  * datasetId **required** `string`: Dataset ID of the requested dataset
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Dataset](#dataset)

### bigquery.datasets.patch
Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.


```js
google_bigquery.bigquery.datasets.patch({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the dataset being updated
  * datasetId **required** `string`: Dataset ID of the dataset being updated
  * body [Dataset](#dataset)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Dataset](#dataset)

### bigquery.datasets.update
Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.


```js
google_bigquery.bigquery.datasets.update({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the dataset being updated
  * datasetId **required** `string`: Dataset ID of the dataset being updated
  * body [Dataset](#dataset)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Dataset](#dataset)

### bigquery.models.list
Lists all models in the specified dataset. Requires the READER dataset role.


```js
google_bigquery.bigquery.models.list({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Project ID of the models to list.
  * datasetId **required** `string`: Required. Dataset ID of the models to list.
  * maxResults `integer`: The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
  * pageToken `string`: Page token, returned by a previous call to request the next page of results
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ListModelsResponse](#listmodelsresponse)

### bigquery.models.delete
Deletes the model specified by modelId from the dataset.


```js
google_bigquery.bigquery.models.delete({
  "projectId": "",
  "datasetId": "",
  "modelId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Project ID of the model to delete.
  * datasetId **required** `string`: Required. Dataset ID of the model to delete.
  * modelId **required** `string`: Required. Model ID of the model to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### bigquery.models.get
Gets the specified model resource by model ID.


```js
google_bigquery.bigquery.models.get({
  "projectId": "",
  "datasetId": "",
  "modelId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Project ID of the requested model.
  * datasetId **required** `string`: Required. Dataset ID of the requested model.
  * modelId **required** `string`: Required. Model ID of the requested model.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Model](#model)

### bigquery.models.patch
Patch specific fields in the specified model.


```js
google_bigquery.bigquery.models.patch({
  "projectId": "",
  "datasetId": "",
  "modelId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Project ID of the model to patch.
  * datasetId **required** `string`: Required. Dataset ID of the model to patch.
  * modelId **required** `string`: Required. Model ID of the model to patch.
  * body [Model](#model)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Model](#model)

### bigquery.routines.list
Lists all routines in the specified dataset. Requires the READER dataset role.


```js
google_bigquery.bigquery.routines.list({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Project ID of the routines to list
  * datasetId **required** `string`: Required. Dataset ID of the routines to list
  * filter `string`: If set, then only the Routines matching this filter are returned. The current supported form is either "routine_type:" or "routineType:", where is a RoutineType enum. Example: "routineType:SCALAR_FUNCTION".
  * maxResults `integer`: The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
  * pageToken `string`: Page token, returned by a previous call, to request the next page of results
  * readMask `string`: If set, then only the Routine fields in the field mask, as well as project_id, dataset_id and routine_id, are returned in the response. If unset, then the following Routine fields are returned: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, and language.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ListRoutinesResponse](#listroutinesresponse)

### bigquery.routines.insert
Creates a new routine in the dataset.


```js
google_bigquery.bigquery.routines.insert({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Project ID of the new routine
  * datasetId **required** `string`: Required. Dataset ID of the new routine
  * body [Routine](#routine)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Routine](#routine)

### bigquery.routines.delete
Deletes the routine specified by routineId from the dataset.


```js
google_bigquery.bigquery.routines.delete({
  "projectId": "",
  "datasetId": "",
  "routineId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Project ID of the routine to delete
  * datasetId **required** `string`: Required. Dataset ID of the routine to delete
  * routineId **required** `string`: Required. Routine ID of the routine to delete
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### bigquery.routines.get
Gets the specified routine resource by routine ID.


```js
google_bigquery.bigquery.routines.get({
  "projectId": "",
  "datasetId": "",
  "routineId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Project ID of the requested routine
  * datasetId **required** `string`: Required. Dataset ID of the requested routine
  * routineId **required** `string`: Required. Routine ID of the requested routine
  * readMask `string`: If set, only the Routine fields in the field mask are returned in the response. If unset, all Routine fields are returned.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Routine](#routine)

### bigquery.routines.update
Updates information in an existing routine. The update method replaces the entire Routine resource.


```js
google_bigquery.bigquery.routines.update({
  "projectId": "",
  "datasetId": "",
  "routineId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Project ID of the routine to update
  * datasetId **required** `string`: Required. Dataset ID of the routine to update
  * routineId **required** `string`: Required. Routine ID of the routine to update
  * body [Routine](#routine)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Routine](#routine)

### bigquery.tables.list
Lists all tables in the specified dataset. Requires the READER dataset role.


```js
google_bigquery.bigquery.tables.list({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the tables to list
  * datasetId **required** `string`: Dataset ID of the tables to list
  * maxResults `integer`: Maximum number of results to return
  * pageToken `string`: Page token, returned by a previous call, to request the next page of results
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [TableList](#tablelist)

### bigquery.tables.insert
Creates a new, empty table in the dataset.


```js
google_bigquery.bigquery.tables.insert({
  "projectId": "",
  "datasetId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the new table
  * datasetId **required** `string`: Dataset ID of the new table
  * body [Table](#table)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Table](#table)

### bigquery.tables.delete
Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.


```js
google_bigquery.bigquery.tables.delete({
  "projectId": "",
  "datasetId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the table to delete
  * datasetId **required** `string`: Dataset ID of the table to delete
  * tableId **required** `string`: Table ID of the table to delete
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### bigquery.tables.get
Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.


```js
google_bigquery.bigquery.tables.get({
  "projectId": "",
  "datasetId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the requested table
  * datasetId **required** `string`: Dataset ID of the requested table
  * tableId **required** `string`: Table ID of the requested table
  * selectedFields `string`: List of fields to return (comma-separated). If unspecified, all fields are returned
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Table](#table)

### bigquery.tables.patch
Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.


```js
google_bigquery.bigquery.tables.patch({
  "projectId": "",
  "datasetId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the table to update
  * datasetId **required** `string`: Dataset ID of the table to update
  * tableId **required** `string`: Table ID of the table to update
  * body [Table](#table)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Table](#table)

### bigquery.tables.update
Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.


```js
google_bigquery.bigquery.tables.update({
  "projectId": "",
  "datasetId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the table to update
  * datasetId **required** `string`: Dataset ID of the table to update
  * tableId **required** `string`: Table ID of the table to update
  * body [Table](#table)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Table](#table)

### bigquery.tabledata.list
Retrieves table data from a specified set of rows. Requires the READER dataset role.


```js
google_bigquery.bigquery.tabledata.list({
  "projectId": "",
  "datasetId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the table to read
  * datasetId **required** `string`: Dataset ID of the table to read
  * tableId **required** `string`: Table ID of the table to read
  * maxResults `integer`: Maximum number of results to return
  * pageToken `string`: Page token, returned by a previous call, identifying the result set
  * selectedFields `string`: List of fields to return (comma-separated). If unspecified, all fields are returned
  * startIndex `string`: Zero-based index of the starting row to read
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [TableDataList](#tabledatalist)

### bigquery.tabledata.insertAll
Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.


```js
google_bigquery.bigquery.tabledata.insertAll({
  "projectId": "",
  "datasetId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the destination table.
  * datasetId **required** `string`: Dataset ID of the destination table.
  * tableId **required** `string`: Table ID of the destination table.
  * body [TableDataInsertAllRequest](#tabledatainsertallrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [TableDataInsertAllResponse](#tabledatainsertallresponse)

### bigquery.rowAccessPolicies.list
Lists all row access policies on the specified table.


```js
google_bigquery.bigquery.rowAccessPolicies.list({
  "projectId": "",
  "datasetId": "",
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Project ID of the row access policies to list.
  * datasetId **required** `string`: Required. Dataset ID of row access policies to list.
  * tableId **required** `string`: Required. Table ID of the table to list row access policies.
  * pageSize `integer`: The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
  * pageToken `string`: Page token, returned by a previous call, to request the next page of results.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ListRowAccessPoliciesResponse](#listrowaccesspoliciesresponse)

### bigquery.jobs.list
Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.


```js
google_bigquery.bigquery.jobs.list({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the jobs to list
  * allUsers `boolean`: Whether to display jobs owned by all users in the project. Default false
  * maxCreationTime `string`: Max value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created before or at this timestamp are returned
  * maxResults `integer`: Maximum number of results to return
  * minCreationTime `string`: Min value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created after or at this timestamp are returned
  * pageToken `string`: Page token, returned by a previous call, to request the next page of results
  * parentJobId `string`: If set, retrieves only jobs whose parent is this job. Otherwise, retrieves only jobs which have no parent
  * projection `string` (values: full, minimal): Restrict information returned to a set of selected fields
  * stateFilter `array`: Filter for job state
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [JobList](#joblist)

### bigquery.jobs.insert
Starts a new asynchronous job. Requires the Can View project role.


```js
google_bigquery.bigquery.jobs.insert({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the project that will be billed for the job
  * body [Job](#job)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Job](#job)

### bigquery.jobs.get
Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.


```js
google_bigquery.bigquery.jobs.get({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: [Required] Project ID of the requested job
  * jobId **required** `string`: [Required] Job ID of the requested job
  * location `string`: The geographic location of the job. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Job](#job)

### bigquery.jobs.cancel
Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.


```js
google_bigquery.bigquery.jobs.cancel({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: [Required] Project ID of the job to cancel
  * jobId **required** `string`: [Required] Job ID of the job to cancel
  * location `string`: The geographic location of the job. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [JobCancelResponse](#jobcancelresponse)

### bigquery.jobs.query
Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.


```js
google_bigquery.bigquery.jobs.query({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project ID of the project billed for the query
  * body [QueryRequest](#queryrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [QueryResponse](#queryresponse)

### bigquery.jobs.getQueryResults
Retrieves the results of a query job.


```js
google_bigquery.bigquery.jobs.getQueryResults({
  "projectId": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: [Required] Project ID of the query job
  * jobId **required** `string`: [Required] Job ID of the query job
  * location `string`: The geographic location where the job should run. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
  * maxResults `integer`: Maximum number of results to read
  * pageToken `string`: Page token, returned by a previous call, to request the next page of results
  * startIndex `string`: Zero-based index of the starting row
  * timeoutMs `integer`: How long to wait for the query to complete, in milliseconds, before returning. Default is 10 seconds. If the timeout passes before the job completes, the 'jobComplete' field in the response will be false
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [GetQueryResultsResponse](#getqueryresultsresponse)

### bigquery.projects.getServiceAccount
Returns the email address of the service account for your project used for interactions with Google Cloud KMS.


```js
google_bigquery.bigquery.projects.getServiceAccount({
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
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [GetServiceAccountResponse](#getserviceaccountresponse)

### bigquery.tables.getIamPolicy
Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.


```js
google_bigquery.bigquery.tables.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
  * body [GetIamPolicyRequest](#getiampolicyrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Policy](#policy)

### bigquery.tables.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.


```js
google_bigquery.bigquery.tables.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
  * body [SetIamPolicyRequest](#setiampolicyrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Policy](#policy)

### bigquery.tables.testIamPermissions
Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.


```js
google_bigquery.bigquery.tables.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [TestIamPermissionsResponse](#testiampermissionsresponse)



## Definitions

### AggregateClassificationMetrics
* AggregateClassificationMetrics `object`: Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows.
  * accuracy `number`: Accuracy is the fraction of predictions given the correct label. For multiclass this is a micro-averaged metric.
  * f1Score `number`: The F1 score is an average of recall and precision. For multiclass this is a macro-averaged metric.
  * logLoss `number`: Logarithmic Loss. For multiclass this is a macro-averaged metric.
  * precision `number`: Precision is the fraction of actual positive predictions that had positive actual labels. For multiclass this is a macro-averaged metric treating each class as a binary classifier.
  * recall `number`: Recall is the fraction of actual positive labels that were given a positive prediction. For multiclass this is a macro-averaged metric.
  * rocAuc `number`: Area Under a ROC Curve. For multiclass this is a macro-averaged metric.
  * threshold `number`: Threshold at which the metrics are computed. For binary classification models this is the positive class threshold. For multi-class classfication models this is the confidence threshold.

### Argument
* Argument `object`: Input/output argument of a function or a stored procedure.
  * argumentKind `string` (values: ARGUMENT_KIND_UNSPECIFIED, FIXED_TYPE, ANY_TYPE): Optional. Defaults to FIXED_TYPE.
  * dataType [StandardSqlDataType](#standardsqldatatype)
  * mode `string` (values: MODE_UNSPECIFIED, IN, OUT, INOUT): Optional. Specifies whether the argument is input or output. Can be set for procedures only.
  * name `string`: Optional. The name of this argument. Can be absent for function return argument.

### ArimaCoefficients
* ArimaCoefficients `object`: Arima coefficients.
  * autoRegressiveCoefficients `array`: Auto-regressive coefficients, an array of double.
    * items `number`
  * interceptCoefficient `number`: Intercept coefficient, just a double not an array.
  * movingAverageCoefficients `array`: Moving-average coefficients, an array of double.
    * items `number`

### ArimaFittingMetrics
* ArimaFittingMetrics `object`: ARIMA model fitting metrics.
  * aic `number`: AIC.
  * logLikelihood `number`: Log-likelihood.
  * variance `number`: Variance.

### ArimaForecastingMetrics
* ArimaForecastingMetrics `object`: Model evaluation metrics for ARIMA forecasting models.
  * arimaFittingMetrics `array`: Arima model fitting metrics.
    * items [ArimaFittingMetrics](#arimafittingmetrics)
  * arimaSingleModelForecastingMetrics `array`: Repeated as there can be many metric sets (one for each model) in auto-arima and the large-scale case.
    * items [ArimaSingleModelForecastingMetrics](#arimasinglemodelforecastingmetrics)
  * hasDrift `array`: Whether Arima model fitted with drift or not. It is always false when d is not 1.
    * items `boolean`
  * nonSeasonalOrder `array`: Non-seasonal order.
    * items [ArimaOrder](#arimaorder)
  * seasonalPeriods `array`: Seasonal periods. Repeated because multiple periods are supported for one time series.
    * items `string` (values: SEASONAL_PERIOD_TYPE_UNSPECIFIED, NO_SEASONALITY, DAILY, WEEKLY, MONTHLY, QUARTERLY, YEARLY)
  * timeSeriesId `array`: Id to differentiate different time series for the large-scale case.
    * items `string`

### ArimaModelInfo
* ArimaModelInfo `object`: Arima model information.
  * arimaCoefficients [ArimaCoefficients](#arimacoefficients)
  * arimaFittingMetrics [ArimaFittingMetrics](#arimafittingmetrics)
  * hasDrift `boolean`: Whether Arima model fitted with drift or not. It is always false when d is not 1.
  * nonSeasonalOrder [ArimaOrder](#arimaorder)
  * seasonalPeriods `array`: Seasonal periods. Repeated because multiple periods are supported for one time series.
    * items `string` (values: SEASONAL_PERIOD_TYPE_UNSPECIFIED, NO_SEASONALITY, DAILY, WEEKLY, MONTHLY, QUARTERLY, YEARLY)
  * timeSeriesId `string`: The id to indicate different time series.

### ArimaOrder
* ArimaOrder `object`: Arima order, can be used for both non-seasonal and seasonal parts.
  * d `string`: Order of the differencing part.
  * p `string`: Order of the autoregressive part.
  * q `string`: Order of the moving-average part.

### ArimaResult
* ArimaResult `object`: (Auto-)arima fitting result. Wrap everything in ArimaResult for easier refactoring if we want to use model-specific iteration results.
  * arimaModelInfo `array`: This message is repeated because there are multiple arima models fitted in auto-arima. For non-auto-arima model, its size is one.
    * items [ArimaModelInfo](#arimamodelinfo)
  * seasonalPeriods `array`: Seasonal periods. Repeated because multiple periods are supported for one time series.
    * items `string` (values: SEASONAL_PERIOD_TYPE_UNSPECIFIED, NO_SEASONALITY, DAILY, WEEKLY, MONTHLY, QUARTERLY, YEARLY)

### ArimaSingleModelForecastingMetrics
* ArimaSingleModelForecastingMetrics `object`: Model evaluation metrics for a single ARIMA forecasting model.
  * arimaFittingMetrics [ArimaFittingMetrics](#arimafittingmetrics)
  * hasDrift `boolean`: Is arima model fitted with drift or not. It is always false when d is not 1.
  * nonSeasonalOrder [ArimaOrder](#arimaorder)
  * seasonalPeriods `array`: Seasonal periods. Repeated because multiple periods are supported for one time series.
    * items `string` (values: SEASONAL_PERIOD_TYPE_UNSPECIFIED, NO_SEASONALITY, DAILY, WEEKLY, MONTHLY, QUARTERLY, YEARLY)
  * timeSeriesId `string`: The id to indicate different time series.

### AuditConfig
* AuditConfig `object`: Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
  * auditLogConfigs `array`: The configuration for logging of each type of permission.
    * items [AuditLogConfig](#auditlogconfig)
  * service `string`: Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.

### AuditLogConfig
* AuditLogConfig `object`: Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
  * exemptedMembers `array`: Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
    * items `string`
  * logType `string` (values: LOG_TYPE_UNSPECIFIED, ADMIN_READ, DATA_WRITE, DATA_READ): The log type that this config enables.

### BigQueryModelTraining
* BigQueryModelTraining `object`
  * currentIteration `integer`: [Output-only, Beta] Index of current ML training iteration. Updated during create model query job to show job progress.
  * expectedTotalIterations `string`: [Output-only, Beta] Expected number of iterations for the create model query job specified as num_iterations in the input query. The actual total number of iterations may be less than this number due to early stop.

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

### BinaryClassificationMetrics
* BinaryClassificationMetrics `object`: Evaluation metrics for binary classification/classifier models.
  * aggregateClassificationMetrics [AggregateClassificationMetrics](#aggregateclassificationmetrics)
  * binaryConfusionMatrixList `array`: Binary confusion matrix at multiple thresholds.
    * items [BinaryConfusionMatrix](#binaryconfusionmatrix)
  * negativeLabel `string`: Label representing the negative class.
  * positiveLabel `string`: Label representing the positive class.

### BinaryConfusionMatrix
* BinaryConfusionMatrix `object`: Confusion matrix for binary classification models.
  * accuracy `number`: The fraction of predictions given the correct label.
  * f1Score `number`: The equally weighted average of recall and precision.
  * falseNegatives `string`: Number of false samples predicted as false.
  * falsePositives `string`: Number of false samples predicted as true.
  * positiveClassThreshold `number`: Threshold value used when computing each of the following metric.
  * precision `number`: The fraction of actual positive predictions that had positive actual labels.
  * recall `number`: The fraction of actual positive labels that were given a positive prediction.
  * trueNegatives `string`: Number of true samples predicted as false.
  * truePositives `string`: Number of true samples predicted as true.

### Binding
* Binding `object`: Associates `members` with a `role`.
  * bindingId `string`
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### BqmlIterationResult
* BqmlIterationResult `object`
  * durationMs `string`: [Output-only, Beta] Time taken to run the training iteration in milliseconds.
  * evalLoss `number`: [Output-only, Beta] Eval loss computed on the eval data at the end of the iteration. The eval loss is used for early stopping to avoid overfitting. No eval loss if eval_split_method option is specified as no_split or auto_split with input data size less than 500 rows.
  * index `integer`: [Output-only, Beta] Index of the ML training iteration, starting from zero for each training run.
  * learnRate `number`: [Output-only, Beta] Learning rate used for this iteration, it varies for different training iterations if learn_rate_strategy option is not constant.
  * trainingLoss `number`: [Output-only, Beta] Training loss computed on the training data at the end of the iteration. The training loss function is defined by model type.

### BqmlTrainingRun
* BqmlTrainingRun `object`
  * iterationResults `array`: [Output-only, Beta] List of each iteration results.
    * items [BqmlIterationResult](#bqmliterationresult)
  * startTime `string`: [Output-only, Beta] Training run start time in milliseconds since the epoch.
  * state `string`: [Output-only, Beta] Different state applicable for a training run. IN PROGRESS: Training run is in progress. FAILED: Training run ended due to a non-retryable failure. SUCCEEDED: Training run successfully completed. CANCELLED: Training run cancelled by the user.
  * trainingOptions `object`: [Output-only, Beta] Training options used by this training run. These options are mutable for subsequent training runs. Default values are explicitly stored for options not specified in the input query of the first training run. For subsequent training runs, any option not explicitly specified in the input query will be copied from the previous training run.
    * earlyStop `boolean`
    * l1Reg `number`
    * l2Reg `number`
    * learnRate `number`
    * learnRateStrategy `string`
    * lineSearchInitLearnRate `number`
    * maxIteration `string`
    * minRelProgress `number`
    * warmStart `boolean`

### CategoricalValue
* CategoricalValue `object`: Representative value of a categorical feature.
  * categoryCounts `array`: Counts of all categories for the categorical feature. If there are more than ten categories, we return top ten (by count) and return one more CategoryCount with category "_OTHER_" and count as aggregate counts of remaining categories.
    * items [CategoryCount](#categorycount)

### CategoryCount
* CategoryCount `object`: Represents the count of a single category within the cluster.
  * category `string`: The name of category.
  * count `string`: The count of training samples matching the category within the cluster.

### Cluster
* Cluster `object`: Message containing the information about one cluster.
  * centroidId `string`: Centroid id.
  * count `string`: Count of training data rows that were assigned to this cluster.
  * featureValues `array`: Values of highly variant features for this cluster.
    * items [FeatureValue](#featurevalue)

### ClusterInfo
* ClusterInfo `object`: Information about a single cluster for clustering model.
  * centroidId `string`: Centroid id.
  * clusterRadius `number`: Cluster radius, the average distance from centroid to each point assigned to the cluster.
  * clusterSize `string`: Cluster size, the total number of points assigned to the cluster.

### Clustering
* Clustering `object`
  * fields `array`: [Repeated] One or more fields on which data should be clustered. Only top-level, non-repeated, simple-type fields are supported. When you cluster a table using multiple columns, the order of columns you specify is important. The order of the specified columns determines the sort order of the data.
    * items `string`

### ClusteringMetrics
* ClusteringMetrics `object`: Evaluation metrics for clustering models.
  * clusters `array`: [Beta] Information for all clusters.
    * items [Cluster](#cluster)
  * daviesBouldinIndex `number`: Davies-Bouldin index.
  * meanSquaredDistance `number`: Mean of squared distances between each sample to its cluster centroid.

### ConfusionMatrix
* ConfusionMatrix `object`: Confusion matrix for multi-class classification models.
  * confidenceThreshold `number`: Confidence threshold used when computing the entries of the confusion matrix.
  * rows `array`: One row per actual label.
    * items [Row](#row)

### ConnectionProperty
* ConnectionProperty `object`
  * key `string`: [Required] Name of the connection property to set.
  * value `string`: [Required] Value of the connection property.

### CsvOptions
* CsvOptions `object`
  * allowJaggedRows `boolean`: [Optional] Indicates if BigQuery should accept rows that are missing trailing optional columns. If true, BigQuery treats missing trailing columns as null values. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.
  * allowQuotedNewlines `boolean`: [Optional] Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
  * encoding `string`: [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties.
  * fieldDelimiter `string`: [Optional] The separator for fields in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator. The default value is a comma (',').
  * quote `string`: [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
  * skipLeadingRows `string`: [Optional] The number of rows at the top of a CSV file that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.

### DataSplitResult
* DataSplitResult `object`: Data split result. This contains references to the training and evaluation data tables that were used to train the model.
  * evaluationTable [TableReference](#tablereference)
  * trainingTable [TableReference](#tablereference)

### Dataset
* Dataset `object`
  * access `array`: [Optional] An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER;
    * items `object`
      * domain `string`: [Pick one] A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. Example: "example.com". Maps to IAM policy member "domain:DOMAIN".
      * groupByEmail `string`: [Pick one] An email address of a Google Group to grant access to. Maps to IAM policy member "group:GROUP".
      * iamMember `string`: [Pick one] Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group.
      * role `string`: [Required] An IAM role ID that should be granted to the user, group, or domain specified in this access entry. The following legacy mappings will be applied: OWNER  roles/bigquery.dataOwner WRITER  roles/bigquery.dataEditor READER  roles/bigquery.dataViewer This field will accept any of the above formats, but will return only the legacy format. For example, if you set this field to "roles/bigquery.dataOwner", it will be returned back as "OWNER".
      * routine [RoutineReference](#routinereference)
      * specialGroup `string`: [Pick one] A special group to grant access to. Possible values include: projectOwners: Owners of the enclosing project. projectReaders: Readers of the enclosing project. projectWriters: Writers of the enclosing project. allAuthenticatedUsers: All authenticated BigQuery users. Maps to similarly-named IAM members.
      * userByEmail `string`: [Pick one] An email address of a user to grant access to. For example: fred@example.com. Maps to IAM policy member "user:EMAIL" or "serviceAccount:EMAIL".
      * view [TableReference](#tablereference)
  * creationTime `string`: [Output-only] The time when this dataset was created, in milliseconds since the epoch.
  * datasetReference [DatasetReference](#datasetreference)
  * defaultEncryptionConfiguration [EncryptionConfiguration](#encryptionconfiguration)
  * defaultPartitionExpirationMs `string`: [Optional] The default partition expiration for all partitioned tables in the dataset, in milliseconds. Once this property is set, all newly-created partitioned tables in the dataset will have an expirationMs property in the timePartitioning settings set to this value, and changing the value will only affect new tables, not existing ones. The storage in a partition will have an expiration time of its partition time plus this value. Setting this property overrides the use of defaultTableExpirationMs for partitioned tables: only one of defaultTableExpirationMs and defaultPartitionExpirationMs will be used for any new partitioned table. If you provide an explicit timePartitioning.expirationMs when creating or updating a partitioned table, that value takes precedence over the default partition expiration time indicated by this property.
  * defaultTableExpirationMs `string`: [Optional] The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds (one hour). Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property.
  * description `string`: [Optional] A user-friendly description of the dataset.
  * etag `string`: [Output-only] A hash of the resource.
  * friendlyName `string`: [Optional] A descriptive name for the dataset.
  * id `string`: [Output-only] The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field.
  * kind `string`: [Output-only] The resource type.
  * labels `object`: The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See Creating and Updating Dataset Labels for more information.
  * lastModifiedTime `string`: [Output-only] The date when this dataset or any of its tables was last modified, in milliseconds since the epoch.
  * location `string`: The geographic location where the dataset should reside. The default value is US. See details at https://cloud.google.com/bigquery/docs/locations.
  * satisfiesPZS `boolean`: [Output-only] Reserved for future use.
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
      * location `string`: The geographic location where the data resides.
  * etag `string`: A hash value of the results page. You can use this property to determine if the page has changed since the last request.
  * kind `string`: The list type. This property always returns the value "bigquery#datasetList".
  * nextPageToken `string`: A token that can be used to request the next results page. This property is omitted on the final results page.

### DatasetReference
* DatasetReference `object`
  * datasetId `string`: [Required] A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
  * projectId `string`: [Optional] The ID of the project containing this dataset.

### DestinationTableProperties
* DestinationTableProperties `object`
  * description `string`: [Optional] The description for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current description is provided, the job will fail.
  * friendlyName `string`: [Optional] The friendly name for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current friendly name is provided, the job will fail.
  * labels `object`: [Optional] The labels associated with this table. You can use these to organize and group your tables. This will only be used if the destination table is newly created. If the table already exists and labels are different than the current labels are provided, the job will fail.

### EncryptionConfiguration
* EncryptionConfiguration `object`
  * kmsKeyName `string`: [Optional] Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key.

### Entry
* Entry `object`: A single entry in the confusion matrix.
  * itemCount `string`: Number of items being predicted as this label.
  * predictedLabel `string`: The predicted label. For confidence_threshold > 0, we will also add an entry indicating the number of items under the confidence threshold.

### ErrorProto
* ErrorProto `object`
  * debugInfo `string`: Debugging information. This property is internal to Google and should not be used.
  * location `string`: Specifies where the error occurred, if present.
  * message `string`: A human-readable description of the error.
  * reason `string`: A short error code that summarizes the error.

### EvaluationMetrics
* EvaluationMetrics `object`: Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.
  * arimaForecastingMetrics [ArimaForecastingMetrics](#arimaforecastingmetrics)
  * binaryClassificationMetrics [BinaryClassificationMetrics](#binaryclassificationmetrics)
  * clusteringMetrics [ClusteringMetrics](#clusteringmetrics)
  * multiClassClassificationMetrics [MultiClassClassificationMetrics](#multiclassclassificationmetrics)
  * rankingMetrics [RankingMetrics](#rankingmetrics)
  * regressionMetrics [RegressionMetrics](#regressionmetrics)

### ExplainQueryStage
* ExplainQueryStage `object`
  * completedParallelInputs `string`: Number of parallel input segments completed.
  * computeMsAvg `string`: Milliseconds the average shard spent on CPU-bound tasks.
  * computeMsMax `string`: Milliseconds the slowest shard spent on CPU-bound tasks.
  * computeRatioAvg `number`: Relative amount of time the average shard spent on CPU-bound tasks.
  * computeRatioMax `number`: Relative amount of time the slowest shard spent on CPU-bound tasks.
  * endMs `string`: Stage end time represented as milliseconds since epoch.
  * id `string`: Unique ID for stage within plan.
  * inputStages `array`: IDs for stages that are inputs to this stage.
    * items `string`
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
  * slotMs `string`: Slot-milliseconds used by the stage.
  * startMs `string`: Stage start time represented as milliseconds since epoch.
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

### Explanation
* Explanation `object`: Explanation for a single feature.
  * attribution `number`: Attribution of feature.
  * featureName `string`: Full name of the feature. For non-numerical features, will be formatted like .. Overall size of feature name will always be truncated to first 120 characters.

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### ExternalDataConfiguration
* ExternalDataConfiguration `object`
  * autodetect `boolean`: Try to detect schema and format options automatically. Any option specified explicitly will be honored.
  * bigtableOptions [BigtableOptions](#bigtableoptions)
  * compression `string`: [Optional] The compression type of the data source. Possible values include GZIP and NONE. The default value is NONE. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats.
  * connectionId `string`: [Optional, Trusted Tester] Connection for external data source.
  * csvOptions [CsvOptions](#csvoptions)
  * googleSheetsOptions [GoogleSheetsOptions](#googlesheetsoptions)
  * hivePartitioningOptions [HivePartitioningOptions](#hivepartitioningoptions)
  * ignoreUnknownValues `boolean`: [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names Google Cloud Bigtable: This setting is ignored. Google Cloud Datastore backups: This setting is ignored. Avro: This setting is ignored.
  * maxBadRecords `integer`: [Optional] The maximum number of bad records that BigQuery can ignore when reading data. If the number of bad records exceeds this value, an invalid error is returned in the job result. This is only valid for CSV, JSON, and Google Sheets. The default value is 0, which requires that all records are valid. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats.
  * schema [TableSchema](#tableschema)
  * sourceFormat `string`: [Required] The data format. For CSV files, specify "CSV". For Google sheets, specify "GOOGLE_SHEETS". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro files, specify "AVRO". For Google Cloud Datastore backups, specify "DATASTORE_BACKUP". [Beta] For Google Cloud Bigtable, specify "BIGTABLE".
  * sourceUris `array`: [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups, exactly one URI can be specified. Also, the '*' wildcard character is not allowed.
    * items `string`

### FeatureValue
* FeatureValue `object`: Representative value of a single feature within the cluster.
  * categoricalValue [CategoricalValue](#categoricalvalue)
  * featureColumn `string`: The feature column name.
  * numericalValue `number`: The numerical feature value. This is the centroid value for this feature.

### GetIamPolicyRequest
* GetIamPolicyRequest `object`: Request message for `GetIamPolicy` method.
  * options [GetPolicyOptions](#getpolicyoptions)

### GetPolicyOptions
* GetPolicyOptions `object`: Encapsulates settings provided to GetIamPolicy.
  * requestedPolicyVersion `integer`: Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

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

### GlobalExplanation
* GlobalExplanation `object`: Global explanations containing the top most important features after training.
  * classLabel `string`: Class label for this set of global explanations. Will be empty/null for binary logistic and linear regression models. Sorted alphabetically in descending order.
  * explanations `array`: A list of the top global explanations. Sorted by absolute value of attribution in descending order.
    * items [Explanation](#explanation)

### GoogleSheetsOptions
* GoogleSheetsOptions `object`
  * range `string`: [Optional] Range of a sheet to query from. Only used when non-empty. Typical format: sheet_name!top_left_cell_id:bottom_right_cell_id For example: sheet1!A1:B20
  * skipLeadingRows `string`: [Optional] The number of rows at the top of a sheet that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows that should be skipped. When autodetect is on, behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.

### HivePartitioningOptions
* HivePartitioningOptions `object`
  * mode `string`: [Optional] When set, what mode of hive partitioning to use when reading data. The following modes are supported. (1) AUTO: automatically infer partition key name(s) and type(s). (2) STRINGS: automatically infer partition key name(s). All types are interpreted as strings. (3) CUSTOM: partition key schema is encoded in the source URI prefix. Not all storage formats support hive partitioning. Requesting hive partitioning on an unsupported format will lead to an error. Currently supported types include: AVRO, CSV, JSON, ORC and Parquet.
  * requirePartitionFilter `boolean`: [Optional] If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. Note that this field should only be true when creating a permanent external table or querying a temporary external table. Hive-partitioned loads with requirePartitionFilter explicitly set to true will fail.
  * sourceUriPrefix `string`: [Optional] When hive partition detection is requested, a common prefix for all source uris should be supplied. The prefix must end immediately before the partition key encoding begins. For example, consider files following this data layout. gs://bucket/path_to_table/dt=2019-01-01/country=BR/id=7/file.avro gs://bucket/path_to_table/dt=2018-12-31/country=CA/id=3/file.avro When hive partitioning is requested with either AUTO or STRINGS detection, the common prefix can be either of gs://bucket/path_to_table or gs://bucket/path_to_table/ (trailing slash does not matter).

### IterationResult
* IterationResult `object`: Information about a single iteration of the training run.
  * arimaResult [ArimaResult](#arimaresult)
  * clusterInfos `array`: Information about top clusters for clustering models.
    * items [ClusterInfo](#clusterinfo)
  * durationMs `string`: Time taken to run the iteration in milliseconds.
  * evalLoss `number`: Loss computed on the eval data at the end of iteration.
  * index `integer`: Index of the iteration, 0 based.
  * learnRate `number`: Learn rate used for this iteration.
  * trainingLoss `number`: Loss computed on the training data at the end of iteration.

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
  * jobType `string`: [Output-only] The type of the job. Can be QUERY, LOAD, EXTRACT, COPY or UNKNOWN.
  * labels `object`: The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
  * load [JobConfigurationLoad](#jobconfigurationload)
  * query [JobConfigurationQuery](#jobconfigurationquery)

### JobConfigurationExtract
* JobConfigurationExtract `object`
  * compression `string`: [Optional] The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE. The default value is NONE. DEFLATE and SNAPPY are only supported for Avro. Not applicable when extracting models.
  * destinationFormat `string`: [Optional] The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON, PARQUET or AVRO for tables and ML_TF_SAVED_MODEL or ML_XGBOOST_BOOSTER for models. The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV. The default value for models is ML_TF_SAVED_MODEL.
  * destinationUri `string`: [Pick one] DEPRECATED: Use destinationUris instead, passing only one URI as necessary. The fully-qualified Google Cloud Storage URI where the extracted table should be written.
  * destinationUris `array`: [Pick one] A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.
    * items `string`
  * fieldDelimiter `string`: [Optional] Delimiter to use between fields in the exported data. Default is ','. Not applicable when extracting models.
  * printHeader `boolean`: [Optional] Whether to print out a header row in the results. Default is true. Not applicable when extracting models.
  * sourceModel [ModelReference](#modelreference)
  * sourceTable [TableReference](#tablereference)
  * useAvroLogicalTypes `boolean`: [Optional] If destinationFormat is set to "AVRO", this flag indicates whether to enable extracting applicable column types (such as TIMESTAMP) to their corresponding AVRO logical types (timestamp-micros), instead of only using their raw types (avro-long). Not applicable when extracting models.

### JobConfigurationLoad
* JobConfigurationLoad `object`
  * allowJaggedRows `boolean`: [Optional] Accept rows that are missing trailing optional columns. The missing values are treated as nulls. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.
  * allowQuotedNewlines `boolean`: Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
  * autodetect `boolean`: [Optional] Indicates if we should automatically infer the options and schema for CSV and JSON sources.
  * clustering [Clustering](#clustering)
  * createDisposition `string`: [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
  * decimalTargetTypes `array`: [Trusted Tester] Defines the list of possible SQL data types to which the source decimal values are converted. This list and the precision and the scale parameters of the decimal field determine the target type. In the order of NUMERIC, BIGNUMERIC, and STRING, a type is picked if it is in the specified list and if it supports the precision and the scale. STRING supports all precision and scale values. If none of the listed types supports the precision and the scale, the type supporting the widest range in the specified list is picked, and if a value exceeds the supported range when reading the data, an error will be thrown. For example: suppose decimal_target_type = ["NUMERIC", "BIGNUMERIC"]. Then if (precision,scale) is: * (38,9) -> NUMERIC; * (39,9) -> BIGNUMERIC (NUMERIC cannot hold 30 integer digits); * (38,10) -> BIGNUMERIC (NUMERIC cannot hold 10 fractional digits); * (76,38) -> BIGNUMERIC; * (77,38) -> BIGNUMERIC (error if value exeeds supported range). For duplicated types in this field, only one will be considered and the rest will be ignored. The order of the types in this field is ignored. For example, ["BIGNUMERIC", "NUMERIC"] is the same as ["NUMERIC", "BIGNUMERIC"] and NUMERIC always takes precedence over BIGNUMERIC.
    * items `string`
  * destinationEncryptionConfiguration [EncryptionConfiguration](#encryptionconfiguration)
  * destinationTable [TableReference](#tablereference)
  * destinationTableProperties [DestinationTableProperties](#destinationtableproperties)
  * encoding `string`: [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties.
  * fieldDelimiter `string`: [Optional] The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character. To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator. The default value is a comma (',').
  * hivePartitioningOptions [HivePartitioningOptions](#hivepartitioningoptions)
  * ignoreUnknownValues `boolean`: [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names
  * maxBadRecords `integer`: [Optional] The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value, an invalid error is returned in the job result. This is only valid for CSV and JSON. The default value is 0, which requires that all records are valid.
  * nullMarker `string`: [Optional] Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery interprets "\N" as a null value when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as an empty value.
  * projectionFields `array`: If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties. If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.
    * items `string`
  * quote `string`: [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
  * rangePartitioning [RangePartitioning](#rangepartitioning)
  * schema [TableSchema](#tableschema)
  * schemaInline `string`: [Deprecated] The inline schema. For CSV schemas, specify as "Field1:Type1[,Field2:Type2]*". For example, "foo:STRING, bar:INTEGER, baz:FLOAT".
  * schemaInlineFormat `string`: [Deprecated] The format of the schemaInline property.
  * schemaUpdateOptions `array`: Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
    * items `string`
  * skipLeadingRows `integer`: [Optional] The number of rows at the top of a CSV file that BigQuery will skip when loading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped.
  * sourceFormat `string`: [Optional] The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET". For orc, specify "ORC". The default value is CSV.
  * sourceUris `array`: [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.
    * items `string`
  * timePartitioning [TimePartitioning](#timepartitioning)
  * useAvroLogicalTypes `boolean`: [Optional] If sourceFormat is set to "AVRO", indicates whether to enable interpreting logical types into their corresponding types (ie. TIMESTAMP), instead of only using their raw types (ie. INTEGER).
  * writeDisposition `string`: [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.

### JobConfigurationQuery
* JobConfigurationQuery `object`
  * allowLargeResults `boolean`: [Optional] If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed. However, you must still set destinationTable when result size exceeds the allowed maximum response size.
  * clustering [Clustering](#clustering)
  * connectionProperties `array`: Connection properties.
    * items [ConnectionProperty](#connectionproperty)
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
  * rangePartitioning [RangePartitioning](#rangepartitioning)
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
  * operationType `string`: [Optional] Supported operation types in table copy job.
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
  * location `string`: The geographic location of the job. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
  * projectId `string`: [Required] The ID of the project containing this job.

### JobStatistics
* JobStatistics `object`
  * completionRatio `number`: [TrustedTester] [Output-only] Job progress (0.0 -> 1.0) for LOAD and EXTRACT jobs.
  * creationTime `string`: [Output-only] Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs.
  * endTime `string`: [Output-only] End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the DONE state.
  * extract [JobStatistics4](#jobstatistics4)
  * load [JobStatistics3](#jobstatistics3)
  * numChildJobs `string`: [Output-only] Number of child jobs executed.
  * parentJobId `string`: [Output-only] If this is a child job, the id of the parent.
  * query [JobStatistics2](#jobstatistics2)
  * quotaDeferments `array`: [Output-only] Quotas which delayed this job's start time.
    * items `string`
  * reservationUsage `array`: [Output-only] Job resource usage breakdown by reservation.
    * items `object`
      * name `string`: [Output-only] Reservation name or "unreserved" for on-demand resources usage.
      * slotMs `string`: [Output-only] Slot-milliseconds the job spent in the given reservation.
  * reservation_id `string`: [Output-only] Name of the primary reservation assigned to this job. Note that this could be different than reservations reported in the reservation usage field if parent reservations were used to execute this job.
  * rowLevelSecurityStatistics [RowLevelSecurityStatistics](#rowlevelsecuritystatistics)
  * scriptStatistics [ScriptStatistics](#scriptstatistics)
  * startTime `string`: [Output-only] Start time of this job, in milliseconds since the epoch. This field will be present when the job transitions from the PENDING state to either RUNNING or DONE.
  * totalBytesProcessed `string`: [Output-only] [Deprecated] Use the bytes processed in the query statistics instead.
  * totalSlotMs `string`: [Output-only] Slot-milliseconds for the job.
  * transactionInfoTemplate [TransactionInfo](#transactioninfo)

### JobStatistics2
* JobStatistics2 `object`
  * billingTier `integer`: [Output-only] Billing tier for the job.
  * cacheHit `boolean`: [Output-only] Whether the query result was fetched from the query cache.
  * ddlAffectedRowAccessPolicyCount `string`: [Output-only] [Preview] The number of row access policies affected by a DDL statement. Present only for DROP ALL ROW ACCESS POLICIES queries.
  * ddlOperationPerformed `string`: The DDL operation performed, possibly dependent on the pre-existence of the DDL target. Possible values (new values might be added in the future): "CREATE": The query created the DDL target. "SKIP": No-op. Example cases: the query is CREATE TABLE IF NOT EXISTS while the table already exists, or the query is DROP TABLE IF EXISTS while the table does not exist. "REPLACE": The query replaced the DDL target. Example case: the query is CREATE OR REPLACE TABLE, and the table already exists. "DROP": The query deleted the DDL target.
  * ddlTargetRoutine [RoutineReference](#routinereference)
  * ddlTargetRowAccessPolicy [RowAccessPolicyReference](#rowaccesspolicyreference)
  * ddlTargetTable [TableReference](#tablereference)
  * estimatedBytesProcessed `string`: [Output-only] The original estimate of bytes processed for the job.
  * modelTraining [BigQueryModelTraining](#bigquerymodeltraining)
  * modelTrainingCurrentIteration `integer`: [Output-only, Beta] Deprecated; do not use.
  * modelTrainingExpectedTotalIteration `string`: [Output-only, Beta] Deprecated; do not use.
  * numDmlAffectedRows `string`: [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
  * queryPlan `array`: [Output-only] Describes execution plan for the query.
    * items [ExplainQueryStage](#explainquerystage)
  * referencedRoutines `array`: [Output-only] Referenced routines (persistent user-defined functions and stored procedures) for the job.
    * items [RoutineReference](#routinereference)
  * referencedTables `array`: [Output-only] Referenced tables for the job. Queries that reference more than 50 tables will not have a complete list.
    * items [TableReference](#tablereference)
  * reservationUsage `array`: [Output-only] Job resource usage breakdown by reservation.
    * items `object`
      * name `string`: [Output-only] Reservation name or "unreserved" for on-demand resources usage.
      * slotMs `string`: [Output-only] Slot-milliseconds the job spent in the given reservation.
  * schema [TableSchema](#tableschema)
  * statementType `string`: The type of query statement, if valid. Possible values (new values might be added in the future): "SELECT": SELECT query. "INSERT": INSERT query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "UPDATE": UPDATE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "DELETE": DELETE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "MERGE": MERGE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "ALTER_TABLE": ALTER TABLE query. "ALTER_VIEW": ALTER VIEW query. "ASSERT": ASSERT condition AS 'description'. "CREATE_FUNCTION": CREATE FUNCTION query. "CREATE_MODEL": CREATE [OR REPLACE] MODEL ... AS SELECT ... . "CREATE_PROCEDURE": CREATE PROCEDURE query. "CREATE_TABLE": CREATE [OR REPLACE] TABLE without AS SELECT. "CREATE_TABLE_AS_SELECT": CREATE [OR REPLACE] TABLE ... AS SELECT ... . "CREATE_VIEW": CREATE [OR REPLACE] VIEW ... AS SELECT ... . "DROP_FUNCTION" : DROP FUNCTION query. "DROP_PROCEDURE": DROP PROCEDURE query. "DROP_TABLE": DROP TABLE query. "DROP_VIEW": DROP VIEW query.
  * timeline `array`: [Output-only] [Beta] Describes a timeline of job execution.
    * items [QueryTimelineSample](#querytimelinesample)
  * totalBytesBilled `string`: [Output-only] Total bytes billed for the job.
  * totalBytesProcessed `string`: [Output-only] Total bytes processed for the job.
  * totalBytesProcessedAccuracy `string`: [Output-only] For dry-run jobs, totalBytesProcessed is an estimate and this field specifies the accuracy of the estimate. Possible values can be: UNKNOWN: accuracy of the estimate is unknown. PRECISE: estimate is precise. LOWER_BOUND: estimate is lower bound of what the query would cost. UPPER_BOUND: estimate is upper bound of what the query would cost.
  * totalPartitionsProcessed `string`: [Output-only] Total number of partitions processed from all partitioned tables referenced in the job.
  * totalSlotMs `string`: [Output-only] Slot-milliseconds for the job.
  * undeclaredQueryParameters `array`: Standard SQL only: list of undeclared query parameters detected during a dry run validation.
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
  * inputBytes `string`: [Output-only] Number of user bytes extracted into the result. This is the byte count as computed by BigQuery for billing purposes.

### JobStatus
* JobStatus `object`
  * errorResult [ErrorProto](#errorproto)
  * errors `array`: [Output-only] The first errors encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful.
    * items [ErrorProto](#errorproto)
  * state `string`: [Output-only] Running state of the job.

### JsonObject
* JsonObject `object`: Represents a single JSON object.

### JsonValue


### ListModelsResponse
* ListModelsResponse `object`
  * models `array`: Models in the requested dataset. Only the following fields are populated: model_reference, model_type, creation_time, last_modified_time and labels.
    * items [Model](#model)
  * nextPageToken `string`: A token to request the next page of results.

### ListRoutinesResponse
* ListRoutinesResponse `object`
  * nextPageToken `string`: A token to request the next page of results.
  * routines `array`: Routines in the requested dataset. Unless read_mask is set in the request, only the following fields are populated: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, and language.
    * items [Routine](#routine)

### ListRowAccessPoliciesResponse
* ListRowAccessPoliciesResponse `object`: Response message for the ListRowAccessPolicies method.
  * nextPageToken `string`: A token to request the next page of results.
  * rowAccessPolicies `array`: Row access policies on the requested table.
    * items [RowAccessPolicy](#rowaccesspolicy)

### LocationMetadata
* LocationMetadata `object`: BigQuery-specific metadata about a location. This will be set on google.cloud.location.Location.metadata in Cloud Location API responses.
  * legacyLocationId `string`: The legacy BigQuery location ID, e.g. “EU” for the “europe” location. This is for any API consumers that need the legacy “US” and “EU” locations.

### MaterializedViewDefinition
* MaterializedViewDefinition `object`
  * enableRefresh `boolean`: [Optional] [TrustedTester] Enable automatic refresh of the materialized view when the base table is updated. The default value is "true".
  * lastRefreshTime `string`: [Output-only] [TrustedTester] The time when this materialized view was last modified, in milliseconds since the epoch.
  * query `string`: [Required] A query whose result is persisted.
  * refreshIntervalMs `string`: [Optional] [TrustedTester] The maximum frequency at which this materialized view will be refreshed. The default value is "1800000" (30 minutes).

### Model
* Model `object`
  * creationTime `string`: Output only. The time when this model was created, in millisecs since the epoch.
  * description `string`: Optional. A user-friendly description of this model.
  * encryptionConfiguration [EncryptionConfiguration](#encryptionconfiguration)
  * etag `string`: Output only. A hash of this resource.
  * expirationTime `string`: Optional. The time when this model expires, in milliseconds since the epoch. If not present, the model will persist indefinitely. Expired models will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created models.
  * featureColumns `array`: Output only. Input feature columns that were used to train this model.
    * items [StandardSqlField](#standardsqlfield)
  * friendlyName `string`: Optional. A descriptive name for this model.
  * labelColumns `array`: Output only. Label columns that were used to train this model. The output of the model will have a "predicted_" prefix to these columns.
    * items [StandardSqlField](#standardsqlfield)
  * labels `object`: The labels associated with this model. You can use these to organize and group your models. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
  * lastModifiedTime `string`: Output only. The time when this model was last modified, in millisecs since the epoch.
  * location `string`: Output only. The geographic location where the model resides. This value is inherited from the dataset.
  * modelReference [ModelReference](#modelreference)
  * modelType `string` (values: MODEL_TYPE_UNSPECIFIED, LINEAR_REGRESSION, LOGISTIC_REGRESSION, KMEANS, MATRIX_FACTORIZATION, DNN_CLASSIFIER, TENSORFLOW, DNN_REGRESSOR, BOOSTED_TREE_REGRESSOR, BOOSTED_TREE_CLASSIFIER, ARIMA, AUTOML_REGRESSOR, AUTOML_CLASSIFIER): Output only. Type of the model resource.
  * trainingRuns `array`: Output only. Information for all training runs in increasing order of start_time.
    * items [TrainingRun](#trainingrun)

### ModelDefinition
* ModelDefinition `object`
  * modelOptions `object`: [Output-only, Beta] Model options used for the first training run. These options are immutable for subsequent training runs. Default values are used for any options not specified in the input query.
    * labels `array`
      * items `string`
    * lossType `string`
    * modelType `string`
  * trainingRuns `array`: [Output-only, Beta] Information about ml training runs, each training run comprises of multiple iterations and there may be multiple training runs for the model if warm start is used or if a user decides to continue a previously cancelled query.
    * items [BqmlTrainingRun](#bqmltrainingrun)

### ModelReference
* ModelReference `object`
  * datasetId `string`: [Required] The ID of the dataset containing this model.
  * modelId `string`: [Required] The ID of the model. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
  * projectId `string`: [Required] The ID of the project containing this model.

### MultiClassClassificationMetrics
* MultiClassClassificationMetrics `object`: Evaluation metrics for multi-class classification/classifier models.
  * aggregateClassificationMetrics [AggregateClassificationMetrics](#aggregateclassificationmetrics)
  * confusionMatrixList `array`: Confusion matrix at different thresholds.
    * items [ConfusionMatrix](#confusionmatrix)

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [AuditConfig](#auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

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
  * connectionProperties `array`: Connection properties.
    * items [ConnectionProperty](#connectionproperty)
  * defaultDataset [DatasetReference](#datasetreference)
  * dryRun `boolean`: [Optional] If set to true, BigQuery doesn't run the job. Instead, if the query is valid, BigQuery returns statistics about the job such as how many bytes would be processed. If the query is invalid, an error returns. The default value is false.
  * kind `string`: The resource type of the request.
  * labels `object`: The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
  * location `string`: The geographic location where the job should run. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
  * maxResults `integer`: [Optional] The maximum number of rows of data to return per page of results. Setting this flag to a small value such as 1000 and then paging through results might improve reliability when the query result set is large. In addition to this limit, responses are also limited to 10 MB. By default, there is no maximum row count, and only the byte limit applies.
  * maximumBytesBilled `string`: [Optional] Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge). If unspecified, this will be set to your project default.
  * parameterMode `string`: Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
  * preserveNulls `boolean`: [Deprecated] This property is deprecated.
  * query `string`: [Required] A query string, following the BigQuery query syntax, of the query to execute. Example: "SELECT count(f1) FROM [myProjectId:myDatasetId.myTableId]".
  * queryParameters `array`: Query parameters for Standard SQL queries.
    * items [QueryParameter](#queryparameter)
  * requestId `string`: A unique user provided identifier to ensure idempotent behavior for queries. Note that this is different from the job_id. It has the following properties: 1. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended. 2. Read only queries can ignore this token since they are nullipotent by definition. 3. For the purposes of idempotency ensured by the request_id, a request is considered duplicate of another only if they have the same request_id and are actually duplicates. When determining whether a request is a duplicate of the previous request, all parameters in the request that may affect the behavior are considered. For example, query, connection_properties, query_parameters, use_legacy_sql are parameters that affect the result and are considered when determining whether a request is a duplicate, but properties like timeout_ms don't affect the result and are thus not considered. Dry run query requests are never considered duplicate of another request. 4. When a duplicate mutating query request is detected, it returns: a. the results of the mutation if it completes successfully within the timeout. b. the running operation if it is still in progress at the end of the timeout. 5. Its lifetime is limited to 15 minutes. In other words, if two requests are sent with the same request_id, but more than 15 minutes apart, idempotency is not guaranteed.
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
  * activeUnits `string`: Total number of units currently being processed by workers. This does not correspond directly to slot usage. This is the largest value observed since the last sample.
  * completedUnits `string`: Total parallel units of work completed by this query.
  * elapsedMs `string`: Milliseconds elapsed since the start of query execution.
  * pendingUnits `string`: Total parallel units of work remaining for the active stages.
  * totalSlotMs `string`: Cumulative slot-ms consumed by the query.

### RangePartitioning
* RangePartitioning `object`
  * field `string`: [TrustedTester] [Required] The table is partitioned by this field. The field must be a top-level NULLABLE/REQUIRED field. The only supported type is INTEGER/INT64.
  * range `object`: [TrustedTester] [Required] Defines the ranges for range partitioning.
    * end `string`: [TrustedTester] [Required] The end of range partitioning, exclusive.
    * interval `string`: [TrustedTester] [Required] The width of each interval.
    * start `string`: [TrustedTester] [Required] The start of range partitioning, inclusive.

### RankingMetrics
* RankingMetrics `object`: Evaluation metrics used by weighted-ALS models specified by feedback_type=implicit.
  * averageRank `number`: Determines the goodness of a ranking by computing the percentile rank from the predicted confidence and dividing it by the original rank.
  * meanAveragePrecision `number`: Calculates a precision per user for all the items by ranking them and then averages all the precisions across all the users.
  * meanSquaredError `number`: Similar to the mean squared error computed in regression and explicit recommendation models except instead of computing the rating directly, the output from evaluate is computed against a preference which is 1 or 0 depending on if the rating exists or not.
  * normalizedDiscountedCumulativeGain `number`: A metric to determine the goodness of a ranking calculated from the predicted confidence by comparing it to an ideal rank measured by the original ratings.

### RegressionMetrics
* RegressionMetrics `object`: Evaluation metrics for regression and explicit feedback type matrix factorization models.
  * meanAbsoluteError `number`: Mean absolute error.
  * meanSquaredError `number`: Mean squared error.
  * meanSquaredLogError `number`: Mean squared log error.
  * medianAbsoluteError `number`: Median absolute error.
  * rSquared `number`: R^2 score.

### Routine
* Routine `object`: A user-defined function or a stored procedure.
  * arguments `array`: Optional.
    * items [Argument](#argument)
  * creationTime `string`: Output only. The time when this routine was created, in milliseconds since the epoch.
  * definitionBody `string`: Required. The body of the routine. For functions, this is the expression in the AS clause. If language=SQL, it is the substring inside (but excluding) the parentheses. For example, for the function created with the following statement: `CREATE FUNCTION JoinLines(x string, y string) as (concat(x, "\n", y))` The definition_body is `concat(x, "\n", y)` (\n is not replaced with linebreak). If language=JAVASCRIPT, it is the evaluated string in the AS clause. For example, for the function created with the following statement: `CREATE FUNCTION f() RETURNS STRING LANGUAGE js AS 'return "\n";\n'` The definition_body is `return "\n";\n` Note that both \n are replaced with linebreaks.
  * description `string`: Optional. [Experimental] The description of the routine if defined.
  * determinismLevel `string` (values: DETERMINISM_LEVEL_UNSPECIFIED, DETERMINISTIC, NOT_DETERMINISTIC): Optional. [Experimental] The determinism level of the JavaScript UDF if defined.
  * etag `string`: Output only. A hash of this resource.
  * importedLibraries `array`: Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.
    * items `string`
  * language `string` (values: LANGUAGE_UNSPECIFIED, SQL, JAVASCRIPT): Optional. Defaults to "SQL".
  * lastModifiedTime `string`: Output only. The time when this routine was last modified, in milliseconds since the epoch.
  * returnType [StandardSqlDataType](#standardsqldatatype)
  * routineReference [RoutineReference](#routinereference)
  * routineType `string` (values: ROUTINE_TYPE_UNSPECIFIED, SCALAR_FUNCTION, PROCEDURE): Required. The type of routine.

### RoutineReference
* RoutineReference `object`
  * datasetId `string`: [Required] The ID of the dataset containing this routine.
  * projectId `string`: [Required] The ID of the project containing this routine.
  * routineId `string`: [Required] The ID of the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.

### Row
* Row `object`: A single row in the confusion matrix.
  * actualLabel `string`: The original label of this row.
  * entries `array`: Info describing predicted label distribution.
    * items [Entry](#entry)

### RowAccessPolicy
* RowAccessPolicy `object`: Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy.
  * creationTime `string`: Output only. The time when this row access policy was created, in milliseconds since the epoch.
  * etag `string`: Output only. A hash of this resource.
  * filterPredicate `string`: Required. A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table. References to other tables, routines, and temporary functions are not supported. Examples: region="EU" date_field = CAST('2019-9-27' as DATE) nullable_field is not NULL numeric_field BETWEEN 1.0 AND 5.0
  * lastModifiedTime `string`: Output only. The time when this row access policy was last modified, in milliseconds since the epoch.
  * rowAccessPolicyReference [RowAccessPolicyReference](#rowaccesspolicyreference)

### RowAccessPolicyReference
* RowAccessPolicyReference `object`
  * datasetId `string`: [Required] The ID of the dataset containing this row access policy.
  * policyId `string`: [Required] The ID of the row access policy. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
  * projectId `string`: [Required] The ID of the project containing this row access policy.
  * tableId `string`: [Required] The ID of the table containing this row access policy.

### RowLevelSecurityStatistics
* RowLevelSecurityStatistics `object`
  * rowLevelSecurityApplied `boolean`: [Output-only] [Preview] Whether any accessed data was protected by row access policies.

### ScriptStackFrame
* ScriptStackFrame `object`
  * endColumn `integer`: [Output-only] One-based end column.
  * endLine `integer`: [Output-only] One-based end line.
  * procedureId `string`: [Output-only] Name of the active procedure, empty if in a top-level script.
  * startColumn `integer`: [Output-only] One-based start column.
  * startLine `integer`: [Output-only] One-based start line.
  * text `string`: [Output-only] Text of the current statement/expression.

### ScriptStatistics
* ScriptStatistics `object`
  * evaluationKind `string`: [Output-only] Whether this child job was a statement or expression.
  * stackFrames `array`: Stack trace showing the line/column/procedure name of each frame on the stack at the point where the current evaluation happened. The leaf frame is first, the primary script is last. Never empty.
    * items [ScriptStackFrame](#scriptstackframe)

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)
  * updateMask `string`: OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`

### SnapshotDefinition
* SnapshotDefinition `object`
  * baseTableReference [TableReference](#tablereference)
  * snapshotTime `string`: [Required] The time at which the base table was snapshot.

### StandardSqlDataType
* StandardSqlDataType `object`: The type of a variable, e.g., a function argument. Examples: INT64: {type_kind="INT64"} ARRAY: {type_kind="ARRAY", array_element_type="STRING"} STRUCT>: {type_kind="STRUCT", struct_type={fields=[ {name="x", type={type_kind="STRING"}}, {name="y", type={type_kind="ARRAY", array_element_type="DATE"}} ]}}
  * arrayElementType [StandardSqlDataType](#standardsqldatatype)
  * structType [StandardSqlStructType](#standardsqlstructtype)
  * typeKind `string` (values: TYPE_KIND_UNSPECIFIED, INT64, BOOL, FLOAT64, STRING, BYTES, TIMESTAMP, DATE, TIME, DATETIME, GEOGRAPHY, NUMERIC, BIGNUMERIC, ARRAY, STRUCT): Required. The top level type of this field. Can be any standard SQL data type (e.g., "INT64", "DATE", "ARRAY").

### StandardSqlField
* StandardSqlField `object`: A field or a column.
  * name `string`: Optional. The name of this field. Can be absent for struct fields.
  * type [StandardSqlDataType](#standardsqldatatype)

### StandardSqlStructType
* StandardSqlStructType `object`
  * fields `array`
    * items [StandardSqlField](#standardsqlfield)

### Streamingbuffer
* Streamingbuffer `object`
  * estimatedBytes `string`: [Output-only] A lower-bound estimate of the number of bytes currently in the streaming buffer.
  * estimatedRows `string`: [Output-only] A lower-bound estimate of the number of rows currently in the streaming buffer.
  * oldestEntryTime `string`: [Output-only] Contains the timestamp of the oldest entry in the streaming buffer, in milliseconds since the epoch, if the streaming buffer is available.

### Table
* Table `object`
  * clustering [Clustering](#clustering)
  * creationTime `string`: [Output-only] The time when this table was created, in milliseconds since the epoch.
  * description `string`: [Optional] A user-friendly description of this table.
  * encryptionConfiguration [EncryptionConfiguration](#encryptionconfiguration)
  * etag `string`: [Output-only] A hash of the table metadata. Used to ensure there were no concurrent modifications to the resource when attempting an update. Not guaranteed to change when the table contents or the fields numRows, numBytes, numLongTermBytes or lastModifiedTime change.
  * expirationTime `string`: [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created tables.
  * externalDataConfiguration [ExternalDataConfiguration](#externaldataconfiguration)
  * friendlyName `string`: [Optional] A descriptive name for this table.
  * id `string`: [Output-only] An opaque ID uniquely identifying the table.
  * kind `string`: [Output-only] The type of the resource.
  * labels `object`: The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
  * lastModifiedTime `string`: [Output-only] The time when this table was last modified, in milliseconds since the epoch.
  * location `string`: [Output-only] The geographic location where the table resides. This value is inherited from the dataset.
  * materializedView [MaterializedViewDefinition](#materializedviewdefinition)
  * model [ModelDefinition](#modeldefinition)
  * numBytes `string`: [Output-only] The size of this table in bytes, excluding any data in the streaming buffer.
  * numLongTermBytes `string`: [Output-only] The number of bytes in the table that are considered "long-term storage".
  * numPhysicalBytes `string`: [Output-only] [TrustedTester] The physical size of this table in bytes, excluding any data in the streaming buffer. This includes compression and storage used for time travel.
  * numRows `string`: [Output-only] The number of rows of data in this table, excluding any data in the streaming buffer.
  * rangePartitioning [RangePartitioning](#rangepartitioning)
  * requirePartitionFilter `boolean`: [Optional] If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
  * schema [TableSchema](#tableschema)
  * selfLink `string`: [Output-only] A URL that can be used to access this resource again.
  * snapshotDefinition [SnapshotDefinition](#snapshotdefinition)
  * streamingBuffer [Streamingbuffer](#streamingbuffer)
  * tableReference [TableReference](#tablereference)
  * timePartitioning [TimePartitioning](#timepartitioning)
  * type `string`: [Output-only] Describes the table type. The following values are supported: TABLE: A normal BigQuery table. VIEW: A virtual table defined by a SQL query. SNAPSHOT: An immutable, read-only table that is a copy of another table. [TrustedTester] MATERIALIZED_VIEW: SQL query whose result is persisted. EXTERNAL: A table that references data stored in an external storage system, such as Google Cloud Storage. The default value is TABLE.
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
  * templateSuffix `string`: If specified, treats the destination table as a base template, and inserts the rows into an instance table named "{destination}{templateSuffix}". BigQuery will manage creation of the instance table, using the schema of the base template table. See https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables for considerations when working with templates tables.

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
  * categories `object`: [Optional] The categories attached to this field, used for field-level access control.
    * names `array`: A list of category resource names. For example, "projects/1/taxonomies/2/categories/3". At most 5 categories are allowed.
      * items `string`
  * description `string`: [Optional] The field description. The maximum length is 1,024 characters.
  * fields `array`: [Optional] Describes the nested schema fields if the type property is set to RECORD.
    * items [TableFieldSchema](#tablefieldschema)
  * mode `string`: [Optional] The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE.
  * name `string`: [Required] The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 128 characters.
  * policyTags `object`
    * names `array`: A list of category resource names. For example, "projects/1/location/eu/taxonomies/2/policyTags/3". At most 1 policy tag is allowed.
      * items `string`
  * type `string`: [Required] The field data type. Possible values include STRING, BYTES, INTEGER, INT64 (same as INTEGER), FLOAT, FLOAT64 (same as FLOAT), BOOLEAN, BOOL (same as BOOLEAN), TIMESTAMP, DATE, TIME, DATETIME, RECORD (where RECORD indicates that the field contains a nested schema) or STRUCT (same as RECORD).

### TableList
* TableList `object`
  * etag `string`: A hash of this page of results.
  * kind `string`: The type of list.
  * nextPageToken `string`: A token to request the next page of results.
  * tables `array`: Tables in the requested dataset.
    * items `object`
      * clustering [Clustering](#clustering)
      * creationTime `string`: The time when this table was created, in milliseconds since the epoch.
      * expirationTime `string`: [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.
      * friendlyName `string`: The user-friendly name for this table.
      * id `string`: An opaque ID of the table
      * kind `string`: The resource type.
      * labels `object`: The labels associated with this table. You can use these to organize and group your tables.
      * rangePartitioning [RangePartitioning](#rangepartitioning)
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

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

### TimePartitioning
* TimePartitioning `object`
  * expirationMs `string`: [Optional] Number of milliseconds for which to keep the storage for partitions in the table. The storage in a partition will have an expiration time of its partition time plus this value.
  * field `string`: [Beta] [Optional] If not set, the table is partitioned by pseudo column, referenced via either '_PARTITIONTIME' as TIMESTAMP type, or '_PARTITIONDATE' as DATE type. If field is specified, the table is instead partitioned by this field. The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
  * requirePartitionFilter `boolean`
  * type `string`: [Required] The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively. When the type is not specified, the default behavior is DAY.

### TrainingOptions
* TrainingOptions `object`
  * autoArima `boolean`: Whether to enable auto ARIMA or not.
  * autoArimaMaxOrder `string`: The max value of non-seasonal p and q.
  * batchSize `string`: Batch size for dnn models.
  * dataFrequency `string` (values: DATA_FREQUENCY_UNSPECIFIED, AUTO_FREQUENCY, YEARLY, QUARTERLY, MONTHLY, WEEKLY, DAILY, HOURLY): The data frequency of a time series.
  * dataSplitColumn `string`: The column to split data with. This column won't be used as a feature. 1. When data_split_method is CUSTOM, the corresponding column should be boolean. The rows with true value tag are eval data, and the false are training data. 2. When data_split_method is SEQ, the first DATA_SPLIT_EVAL_FRACTION rows (from smallest to largest) in the corresponding column are used as training data, and the rest are eval data. It respects the order in Orderable data types: https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#data-type-properties
  * dataSplitEvalFraction `number`: The fraction of evaluation data over the whole input data. The rest of data will be used as training data. The format should be double. Accurate to two decimal places. Default value is 0.2.
  * dataSplitMethod `string` (values: DATA_SPLIT_METHOD_UNSPECIFIED, RANDOM, CUSTOM, SEQUENTIAL, NO_SPLIT, AUTO_SPLIT): The data split type for training and evaluation, e.g. RANDOM.
  * distanceType `string` (values: DISTANCE_TYPE_UNSPECIFIED, EUCLIDEAN, COSINE): Distance type for clustering models.
  * dropout `number`: Dropout probability for dnn models.
  * earlyStop `boolean`: Whether to stop early when the loss doesn't improve significantly any more (compared to min_relative_progress). Used only for iterative training algorithms.
  * feedbackType `string` (values: FEEDBACK_TYPE_UNSPECIFIED, IMPLICIT, EXPLICIT): Feedback type that specifies which algorithm to run for matrix factorization.
  * hiddenUnits `array`: Hidden units for dnn models.
    * items `string`
  * holidayRegion `string` (values: HOLIDAY_REGION_UNSPECIFIED, GLOBAL, NA, JAPAC, EMEA, LAC, AE, AR, AT, AU, BE, BR, CA, CH, CL, CN, CO, CS, CZ, DE, DK, DZ, EC, EE, EG, ES, FI, FR, GB, GR, HK, HU, ID, IE, IL, IN, IR, IT, JP, KR, LV, MA, MX, MY, NG, NL, NO, NZ, PE, PH, PK, PL, PT, RO, RS, RU, SA, SE, SG, SI, SK, TH, TR, TW, UA, US, VE, VN, ZA): The geographical region based on which the holidays are considered in time series modeling. If a valid value is specified, then holiday effects modeling is enabled.
  * horizon `string`: The number of periods ahead that need to be forecasted.
  * includeDrift `boolean`: Include drift when fitting an ARIMA model.
  * initialLearnRate `number`: Specifies the initial learning rate for the line search learn rate strategy.
  * inputLabelColumns `array`: Name of input label columns in training data.
    * items `string`
  * itemColumn `string`: Item column specified for matrix factorization models.
  * kmeansInitializationColumn `string`: The column used to provide the initial centroids for kmeans algorithm when kmeans_initialization_method is CUSTOM.
  * kmeansInitializationMethod `string` (values: KMEANS_INITIALIZATION_METHOD_UNSPECIFIED, RANDOM, CUSTOM, KMEANS_PLUS_PLUS): The method used to initialize the centroids for kmeans algorithm.
  * l1Regularization `number`: L1 regularization coefficient.
  * l2Regularization `number`: L2 regularization coefficient.
  * labelClassWeights `object`: Weights associated with each label class, for rebalancing the training data. Only applicable for classification models.
  * learnRate `number`: Learning rate in training. Used only for iterative training algorithms.
  * learnRateStrategy `string` (values: LEARN_RATE_STRATEGY_UNSPECIFIED, LINE_SEARCH, CONSTANT): The strategy to determine learn rate for the current iteration.
  * lossType `string` (values: LOSS_TYPE_UNSPECIFIED, MEAN_SQUARED_LOSS, MEAN_LOG_LOSS): Type of loss function used during training run.
  * maxIterations `string`: The maximum number of iterations in training. Used only for iterative training algorithms.
  * maxTreeDepth `string`: Maximum depth of a tree for boosted tree models.
  * minRelativeProgress `number`: When early_stop is true, stops training when accuracy improvement is less than 'min_relative_progress'. Used only for iterative training algorithms.
  * minSplitLoss `number`: Minimum split loss for boosted tree models.
  * modelUri `string`: [Beta] Google Cloud Storage URI from which the model was imported. Only applicable for imported models.
  * nonSeasonalOrder [ArimaOrder](#arimaorder)
  * numClusters `string`: Number of clusters for clustering models.
  * numFactors `string`: Num factors specified for matrix factorization models.
  * optimizationStrategy `string` (values: OPTIMIZATION_STRATEGY_UNSPECIFIED, BATCH_GRADIENT_DESCENT, NORMAL_EQUATION): Optimization strategy for training linear regression models.
  * preserveInputStructs `boolean`: Whether to preserve the input structs in output feature names. Suppose there is a struct A with field b. When false (default), the output feature name is A_b. When true, the output feature name is A.b.
  * subsample `number`: Subsample fraction of the training data to grow tree to prevent overfitting for boosted tree models.
  * timeSeriesDataColumn `string`: Column to be designated as time series data for ARIMA model.
  * timeSeriesIdColumn `string`: The id column that will be used to indicate different time series to forecast in parallel.
  * timeSeriesTimestampColumn `string`: Column to be designated as time series timestamp for ARIMA model.
  * userColumn `string`: User column specified for matrix factorization models.
  * walsAlpha `number`: Hyperparameter for matrix factoration when implicit feedback type is specified.
  * warmStart `boolean`: Whether to train a model from the last checkpoint.

### TrainingRun
* TrainingRun `object`: Information about a single training query run for the model.
  * dataSplitResult [DataSplitResult](#datasplitresult)
  * evaluationMetrics [EvaluationMetrics](#evaluationmetrics)
  * globalExplanations `array`: Global explanations for important features of the model. For multi-class models, there is one entry for each label class. For other models, there is only one entry in the list.
    * items [GlobalExplanation](#globalexplanation)
  * results `array`: Output of each iteration run, results.size() <= max_iterations.
    * items [IterationResult](#iterationresult)
  * startTime `string`: The start time of this training run.
  * trainingOptions [TrainingOptions](#trainingoptions)

### TransactionInfo
* TransactionInfo `object`
  * transactionId `string`: [Output-only] // [Alpha] Id of the transaction.

### UserDefinedFunctionResource
* UserDefinedFunctionResource `object`: This is used for defining User Defined Function (UDF) resources only when using legacy SQL. Users of Standard SQL should leverage either DDL (e.g. CREATE [TEMPORARY] FUNCTION ... ) or the Routines API to define UDF resources. For additional information on migrating, see: https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql#differences_in_user-defined_javascript_functions
  * inlineCode `string`: [Pick one] An inline resource that contains code for a user-defined function (UDF). Providing a inline code resource is equivalent to providing a URI for a file containing the same code.
  * resourceUri `string`: [Pick one] A code resource to load from a Google Cloud Storage URI (gs://bucket/path).

### ViewDefinition
* ViewDefinition `object`
  * query `string`: [Required] A query that BigQuery executes when the view is referenced.
  * useLegacySql `boolean`: Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ Queries and views that reference this view must use the same flag value.
  * userDefinedFunctionResources `array`: Describes user-defined function resources used in the query.
    * items [UserDefinedFunctionResource](#userdefinedfunctionresource)


