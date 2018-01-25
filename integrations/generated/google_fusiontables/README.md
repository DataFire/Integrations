# @datafire/google_fusiontables

Client library for Fusion Tables

## Installation and Usage
```bash
npm install --save @datafire/google_fusiontables
```
```js
let google_fusiontables = require('@datafire/google_fusiontables').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_fusiontables.table.insert({}).then(data => {
  console.log(data);
});
```

## Description

API for working with Fusion Tables data.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_fusiontables.oauthCallback({
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
google_fusiontables.oauthRefresh(null, context)
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

### query.sqlGet
Executes a SQL statement which can be any of 
- SELECT
- SHOW
- DESCRIBE


```js
google_fusiontables.query.sqlGet({
  "sql": ""
}, context)
```

#### Input
* input `object`
  * sql **required** `string`: A SQL statement which can be any of 
  * hdrs `boolean`: Whether column names are included (in the first row). Default is true.
  * typed `boolean`: Whether typed values are returned in the (JSON) response: numbers for numeric values and parsed geometries for KML values. Default is true.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Sqlresponse](#sqlresponse)

### query.sql
Executes a Fusion Tables SQL statement, which can be any of 
- SELECT
- INSERT
- UPDATE
- DELETE
- SHOW
- DESCRIBE
- CREATE statement.


```js
google_fusiontables.query.sql({
  "sql": ""
}, context)
```

#### Input
* input `object`
  * sql **required** `string`: A Fusion Tables SQL statement, which can be any of 
  * hdrs `boolean`: Whether column names are included in the first row. Default is true.
  * typed `boolean`: Whether typed values are returned in the (JSON) response: numbers for numeric values and parsed geometries for KML values. Default is true.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Sqlresponse](#sqlresponse)

### table.list
Retrieves a list of tables a user owns.


```js
google_fusiontables.table.list({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: Maximum number of tables to return. Default is 5.
  * pageToken `string`: Continuation token specifying which result page to return.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TableList](#tablelist)

### table.insert
Creates a new table.


```js
google_fusiontables.table.insert({}, context)
```

#### Input
* input `object`
  * body [Table](#table)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Table](#table)

### table.importTable
Imports a new table.


```js
google_fusiontables.table.importTable({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name to be assigned to the new table.
  * delimiter `string`: The delimiter used to separate cell values. This can only consist of a single character. Default is ,.
  * encoding `string`: The encoding of the content. Default is UTF-8. Use auto-detect if you are unsure of the encoding.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Table](#table)

### table.delete
Deletes a table.


```js
google_fusiontables.table.delete({
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: ID of the table to be deleted.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### table.get
Retrieves a specific table by its ID.


```js
google_fusiontables.table.get({
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Identifier for the table being requested.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Table](#table)

### table.patch
Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch semantics.


```js
google_fusiontables.table.patch({
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: ID of the table that is being updated.
  * replaceViewDefinition `boolean`: Whether the view definition is also updated. The specified view definition replaces the existing one. Only a view can be updated with a new definition.
  * body [Table](#table)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Table](#table)

### table.update
Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated.


```js
google_fusiontables.table.update({
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: ID of the table that is being updated.
  * replaceViewDefinition `boolean`: Whether the view definition is also updated. The specified view definition replaces the existing one. Only a view can be updated with a new definition.
  * body [Table](#table)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Table](#table)

### column.list
Retrieves a list of columns.


```js
google_fusiontables.column.list({
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table whose columns are being listed.
  * maxResults `integer`: Maximum number of columns to return. Default is 5.
  * pageToken `string`: Continuation token specifying which result page to return.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ColumnList](#columnlist)

### column.insert
Adds a new column to the table.


```js
google_fusiontables.column.insert({
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table for which a new column is being added.
  * body [Column](#column)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Column](#column)

### column.delete
Deletes the specified column.


```js
google_fusiontables.column.delete({
  "tableId": "",
  "columnId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table from which the column is being deleted.
  * columnId **required** `string`: Name or identifier for the column being deleted.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### column.get
Retrieves a specific column by its ID.


```js
google_fusiontables.column.get({
  "tableId": "",
  "columnId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table to which the column belongs.
  * columnId **required** `string`: Name or identifier for the column that is being requested.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Column](#column)

### column.patch
Updates the name or type of an existing column. This method supports patch semantics.


```js
google_fusiontables.column.patch({
  "tableId": "",
  "columnId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table for which the column is being updated.
  * columnId **required** `string`: Name or identifier for the column that is being updated.
  * body [Column](#column)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Column](#column)

### column.update
Updates the name or type of an existing column.


```js
google_fusiontables.column.update({
  "tableId": "",
  "columnId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table for which the column is being updated.
  * columnId **required** `string`: Name or identifier for the column that is being updated.
  * body [Column](#column)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Column](#column)

### table.copy
Copies a table.


```js
google_fusiontables.table.copy({
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: ID of the table that is being copied.
  * copyPresentation `boolean`: Whether to also copy tabs, styles, and templates. Default is false.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Table](#table)

### table.importRows
Imports more rows into a table.


```js
google_fusiontables.table.importRows({
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: The table into which new rows are being imported.
  * delimiter `string`: The delimiter used to separate cell values. This can only consist of a single character. Default is ,.
  * encoding `string`: The encoding of the content. Default is UTF-8. Use auto-detect if you are unsure of the encoding.
  * endLine `integer`: The index of the line up to which data will be imported. Default is to import the entire file. If endLine is negative, it is an offset from the end of the file; the imported content will exclude the last endLine lines.
  * isStrict `boolean`: Whether the imported CSV must have the same number of values for each row. If false, rows with fewer values will be padded with empty values. Default is true.
  * startLine `integer`: The index of the first line from which to start importing, inclusive. Default is 0.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Import](#import)

### table.replaceRows
Replaces rows of an existing table. Current rows remain visible until all replacement rows are ready.


```js
google_fusiontables.table.replaceRows({
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table whose rows will be replaced.
  * delimiter `string`: The delimiter used to separate cell values. This can only consist of a single character. Default is ,.
  * encoding `string`: The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
  * endLine `integer`: The index of the line up to which data will be imported. Default is to import the entire file. If endLine is negative, it is an offset from the end of the file; the imported content will exclude the last endLine lines.
  * isStrict `boolean`: Whether the imported CSV must have the same number of column values for each row. If true, throws an exception if the CSV does not have the same number of columns. If false, rows with fewer column values will be padded with empty values. Default is true.
  * startLine `integer`: The index of the first line from which to start importing, inclusive. Default is 0.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Task](#task)

### style.list
Retrieves a list of styles.


```js
google_fusiontables.style.list({
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table whose styles are being listed
  * maxResults `integer`: Maximum number of styles to return. Optional. Default is 5.
  * pageToken `string`: Continuation token specifying which result page to return. Optional.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StyleSettingList](#stylesettinglist)

### style.insert
Adds a new style for the table.


```js
google_fusiontables.style.insert({
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table for which a new style is being added
  * body [StyleSetting](#stylesetting)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StyleSetting](#stylesetting)

### style.delete
Deletes a style.


```js
google_fusiontables.style.delete({
  "tableId": "",
  "styleId": 0
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table from which the style is being deleted
  * styleId **required** `integer`: Identifier (within a table) for the style being deleted
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### style.get
Gets a specific style.


```js
google_fusiontables.style.get({
  "tableId": "",
  "styleId": 0
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table to which the requested style belongs
  * styleId **required** `integer`: Identifier (integer) for a specific style in a table
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StyleSetting](#stylesetting)

### style.patch
Updates an existing style. This method supports patch semantics.


```js
google_fusiontables.style.patch({
  "tableId": "",
  "styleId": 0
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table whose style is being updated.
  * styleId **required** `integer`: Identifier (within a table) for the style being updated.
  * body [StyleSetting](#stylesetting)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StyleSetting](#stylesetting)

### style.update
Updates an existing style.


```js
google_fusiontables.style.update({
  "tableId": "",
  "styleId": 0
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table whose style is being updated.
  * styleId **required** `integer`: Identifier (within a table) for the style being updated.
  * body [StyleSetting](#stylesetting)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [StyleSetting](#stylesetting)

### task.list
Retrieves a list of tasks.


```js
google_fusiontables.task.list({
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table whose tasks are being listed.
  * maxResults `integer`: Maximum number of tasks to return. Default is 5.
  * pageToken `string`: Continuation token specifying which result page to return.
  * startIndex `integer`: Index of the first result returned in the current page.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TaskList](#tasklist)

### task.delete
Deletes a specific task by its ID, unless that task has already started running.


```js
google_fusiontables.task.delete({
  "tableId": "",
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table from which the task is being deleted.
  * taskId **required** `string`: The identifier of the task to delete.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### task.get
Retrieves a specific task by its ID.


```js
google_fusiontables.task.get({
  "tableId": "",
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table to which the task belongs.
  * taskId **required** `string`: The identifier of the task to get.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Task](#task)

### template.list
Retrieves a list of templates.


```js
google_fusiontables.template.list({
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Identifier for the table whose templates are being requested
  * maxResults `integer`: Maximum number of templates to return. Optional. Default is 5.
  * pageToken `string`: Continuation token specifying which results page to return. Optional.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TemplateList](#templatelist)

### template.insert
Creates a new template for the table.


```js
google_fusiontables.template.insert({
  "tableId": ""
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table for which a new template is being created
  * body [Template](#template)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Template](#template)

### template.delete
Deletes a template


```js
google_fusiontables.template.delete({
  "tableId": "",
  "templateId": 0
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table from which the template is being deleted
  * templateId **required** `integer`: Identifier for the template which is being deleted
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### template.get
Retrieves a specific template by its id


```js
google_fusiontables.template.get({
  "tableId": "",
  "templateId": 0
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table to which the template belongs
  * templateId **required** `integer`: Identifier for the template that is being requested
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Template](#template)

### template.patch
Updates an existing template. This method supports patch semantics.


```js
google_fusiontables.template.patch({
  "tableId": "",
  "templateId": 0
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table to which the updated template belongs
  * templateId **required** `integer`: Identifier for the template that is being updated
  * body [Template](#template)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Template](#template)

### template.update
Updates an existing template


```js
google_fusiontables.template.update({
  "tableId": "",
  "templateId": 0
}, context)
```

#### Input
* input `object`
  * tableId **required** `string`: Table to which the updated template belongs
  * templateId **required** `integer`: Identifier for the template that is being updated
  * body [Template](#template)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Template](#template)



## Definitions

### Bucket
* Bucket `object`: Specifies the minimum and maximum values, the color, opacity, icon and weight of a bucket within a StyleSetting.
  * color `string`: Color of line or the interior of a polygon in #RRGGBB format.
  * icon `string`: Icon name used for a point.
  * max `number`: Maximum value in the selected column for a row to be styled according to the bucket color, opacity, icon, or weight.
  * min `number`: Minimum value in the selected column for a row to be styled according to the bucket color, opacity, icon, or weight.
  * opacity `number`: Opacity of the color: 0.0 (transparent) to 1.0 (opaque).
  * weight `integer`: Width of a line (in pixels).

### Column
* Column `object`: Specifies the details of a column in a table.
  * baseColumn `object`: Identifier of the base column. If present, this column is derived from the specified base column.
    * columnId `integer`: The id of the column in the base table from which this column is derived.
    * tableIndex `integer`: Offset to the entry in the list of base tables in the table definition.
  * columnId `integer`: Identifier for the column.
  * columnJsonSchema `string`: JSON schema for interpreting JSON in this column.
  * columnPropertiesJson `string`: JSON object containing custom column properties.
  * description `string`: Column description.
  * formatPattern `string`: Format pattern.
  * graphPredicate `string`: Column graph predicate.
  * kind `string`: The kind of item this is. For a column, this is always fusiontables#column.
  * name `string`: Name of the column.
  * type `string`: Type of the column.
  * validValues `array`: List of valid values used to validate data and supply a drop-down list of values in the web application.
    * items `string`
  * validateData `boolean`: If true, data entered via the web application is validated.

### ColumnList
* ColumnList `object`: Represents a list of columns in a table.
  * items `array`: List of all requested columns.
    * items [Column](#column)
  * kind `string`: The kind of item this is. For a column list, this is always fusiontables#columnList.
  * nextPageToken `string`: Token used to access the next page of this result. No token is displayed if there are no more pages left.
  * totalItems `integer`: Total number of columns for the table.

### Geometry
* Geometry `object`: Represents a Geometry object.
  * geometries `array`: The list of geometries in this geometry collection.

  * type `string`: Type: A collection of geometries.

### Import
* Import `object`: Represents an import request.
  * kind `string`: The kind of item this is. For an import, this is always fusiontables#import.
  * numRowsReceived `string`: The number of rows received from the import request.

### Line
* Line `object`: Represents a line geometry.
  * coordinates `array`: The coordinates that define the line.
    * items `array`
      * items `number`
  * type `string`: Type: A line geometry.

### LineStyle
* LineStyle `object`: Represents a LineStyle within a StyleSetting
  * strokeColor `string`: Color of the line in #RRGGBB format.
  * strokeColorStyler [StyleFunction](#stylefunction)
  * strokeOpacity `number`: Opacity of the line : 0.0 (transparent) to 1.0 (opaque).
  * strokeWeight `integer`: Width of the line in pixels.
  * strokeWeightStyler [StyleFunction](#stylefunction)

### Point
* Point `object`: Represents a point object.
  * coordinates `array`: The coordinates that define the point.
    * items `number`
  * type `string`: Point: A point geometry.

### PointStyle
* PointStyle `object`: Represents a PointStyle within a StyleSetting
  * iconName `string`: Name of the icon. Use values defined in http://www.google.com/fusiontables/DataSource?dsrcid=308519
  * iconStyler [StyleFunction](#stylefunction)

### Polygon
* Polygon `object`: Represents a polygon object.
  * coordinates `array`: The coordinates that define the polygon.
    * items `array`
      * items `array`
        * items `number`
  * type `string`: Type: A polygon geometry.

### PolygonStyle
* PolygonStyle `object`: Represents a PolygonStyle within a StyleSetting
  * fillColor `string`: Color of the interior of the polygon in #RRGGBB format.
  * fillColorStyler [StyleFunction](#stylefunction)
  * fillOpacity `number`: Opacity of the interior of the polygon: 0.0 (transparent) to 1.0 (opaque).
  * strokeColor `string`: Color of the polygon border in #RRGGBB format.
  * strokeColorStyler [StyleFunction](#stylefunction)
  * strokeOpacity `number`: Opacity of the polygon border: 0.0 (transparent) to 1.0 (opaque).
  * strokeWeight `integer`: Width of the polyon border in pixels.
  * strokeWeightStyler [StyleFunction](#stylefunction)

### Sqlresponse
* Sqlresponse `object`: Represents a response to a SQL statement.
  * columns `array`: Columns in the table.
    * items `string`
  * kind `string`: The kind of item this is. For responses to SQL queries, this is always fusiontables#sqlresponse.
  * rows `array`: The rows in the table. For each cell we print out whatever cell value (e.g., numeric, string) exists. Thus it is important that each cell contains only one value.
    * items `array`


### StyleFunction
* StyleFunction `object`: Represents a StyleFunction within a StyleSetting
  * buckets `array`: Bucket function that assigns a style based on the range a column value falls into.
    * items [Bucket](#bucket)
  * columnName `string`: Name of the column whose value is used in the style.
  * gradient `object`: Gradient function that interpolates a range of colors based on column value.
    * colors `array`: Array with two or more colors.
      * items `object`
        * color `string`: Color in #RRGGBB format.
        * opacity `number`: Opacity of the color: 0.0 (transparent) to 1.0 (opaque).
    * max `number`: Higher-end of the interpolation range: rows with this value will be assigned to colors[n-1].
    * min `number`: Lower-end of the interpolation range: rows with this value will be assigned to colors[0].
  * kind `string`: Stylers can be one of three kinds: "fusiontables#fromColumn if the column value is to be used as is, i.e., the column values can have colors in #RRGGBBAA format or integer line widths or icon names; fusiontables#gradient if the styling of the row is to be based on applying the gradient function on the column value; or fusiontables#buckets if the styling is to based on the bucket into which the the column value falls.

### StyleSetting
* StyleSetting `object`: Represents a complete StyleSettings object. The primary key is a combination of the tableId and a styleId.
  * kind `string`: The kind of item this is. A StyleSetting contains the style definitions for points, lines, and polygons in a table. Since a table can have any one or all of them, a style definition can have point, line and polygon style definitions.
  * markerOptions [PointStyle](#pointstyle)
  * name `string`: Optional name for the style setting.
  * polygonOptions [PolygonStyle](#polygonstyle)
  * polylineOptions [LineStyle](#linestyle)
  * styleId `integer`: Identifier for the style setting (unique only within tables).
  * tableId `string`: Identifier for the table.

### StyleSettingList
* StyleSettingList `object`: Represents a list of styles for a given table.
  * items `array`: All requested style settings.
    * items [StyleSetting](#stylesetting)
  * kind `string`: The kind of item this is. For a style list, this is always fusiontables#styleSettingList .
  * nextPageToken `string`: Token used to access the next page of this result. No token is displayed if there are no more styles left.
  * totalItems `integer`: Total number of styles for the table.

### Table
* Table `object`: Represents a table.
  * attribution `string`: Attribution assigned to the table.
  * attributionLink `string`: Optional link for attribution.
  * baseTableIds `array`: Base table identifier if this table is a view or merged table.
    * items `string`
  * columnPropertiesJsonSchema `string`: Default JSON schema for validating all JSON column properties.
  * columns `array`: Columns in the table.
    * items [Column](#column)
  * description `string`: Description assigned to the table.
  * isExportable `boolean`: Variable for whether table is exportable.
  * kind `string`: The kind of item this is. For a table, this is always fusiontables#table.
  * name `string`: Name assigned to a table.
  * sql `string`: SQL that encodes the table definition for derived tables.
  * tableId `string`: Encrypted unique alphanumeric identifier for the table.
  * tablePropertiesJson `string`: JSON object containing custom table properties.
  * tablePropertiesJsonSchema `string`: JSON schema for validating the JSON table properties.

### TableList
* TableList `object`: Represents a list of tables.
  * items `array`: List of all requested tables.
    * items [Table](#table)
  * kind `string`: The kind of item this is. For table list, this is always fusiontables#tableList.
  * nextPageToken `string`: Token used to access the next page of this result. No token is displayed if there are no more pages left.

### Task
* Task `object`: A background task on a table, initiated for time- or resource-consuming operations such as changing column types or deleting all rows.
  * kind `string`: Type of the resource. This is always "fusiontables#task".
  * progress `string`: Task percentage completion.
  * started `boolean`: false while the table is busy with some other task. true if this background task is currently running.
  * taskId `string`: Identifier for the task.
  * type `string`: Type of background task.

### TaskList
* TaskList `object`: Represents a list of tasks for a table.
  * items `array`: List of all requested tasks.
    * items [Task](#task)
  * kind `string`: Type of the resource. This is always "fusiontables#taskList".
  * nextPageToken `string`: Token used to access the next page of this result. No token is displayed if there are no more pages left.
  * totalItems `integer`: Total number of tasks for the table.

### Template
* Template `object`: Represents the contents of InfoWindow templates.
  * automaticColumnNames `array`: List of columns from which the template is to be automatically constructed. Only one of body or automaticColumns can be specified.
    * items `string`
  * body `string`: Body of the template. It contains HTML with {column_name} to insert values from a particular column. The body is sanitized to remove certain tags, e.g., script. Only one of body or automaticColumns can be specified.
  * kind `string`: The kind of item this is. For a template, this is always fusiontables#template.
  * name `string`: Optional name assigned to a template.
  * tableId `string`: Identifier for the table for which the template is defined.
  * templateId `integer`: Identifier for the template, unique within the context of a particular table.

### TemplateList
* TemplateList `object`: Represents a list of templates for a given table.
  * items `array`: List of all requested templates.
    * items [Template](#template)
  * kind `string`: The kind of item this is. For a template list, this is always fusiontables#templateList .
  * nextPageToken `string`: Token used to access the next page of this result. No token is displayed if there are no more pages left.
  * totalItems `integer`: Total number of templates for the table.


