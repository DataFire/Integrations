# @datafire/google_fusiontables

Client library for Fusion Tables

## Installation and Usage
```bash
npm install --save datafire @datafire/google_fusiontables
```

```js
let datafire = require('datafire');
let google_fusiontables = require('@datafire/google_fusiontables').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_fusiontables: account,
  }
})

google_fusiontables.table.insert({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_fusiontables.oauthRefresh(null, context)
```


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

#### Parameters
* sql (string) **required** - A SQL statement which can be any of 
* hdrs (boolean) - Whether column names are included (in the first row). Default is true.
* typed (boolean) - Whether typed values are returned in the (JSON) response: numbers for numeric values and parsed geometries for KML values. Default is true.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* sql (string) **required** - A Fusion Tables SQL statement, which can be any of 
* hdrs (boolean) - Whether column names are included in the first row. Default is true.
* typed (boolean) - Whether typed values are returned in the (JSON) response: numbers for numeric values and parsed geometries for KML values. Default is true.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### table.list
Retrieves a list of tables a user owns.


```js
google_fusiontables.table.list({}, context)
```

#### Parameters
* maxResults (integer) - Maximum number of tables to return. Default is 5.
* pageToken (string) - Continuation token specifying which result page to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### table.insert
Creates a new table.


```js
google_fusiontables.table.insert({}, context)
```

#### Parameters
* body (object) - Represents a table.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### table.importTable
Imports a new table.


```js
google_fusiontables.table.importTable({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name to be assigned to the new table.
* delimiter (string) - The delimiter used to separate cell values. This can only consist of a single character. Default is ,.
* encoding (string) - The encoding of the content. Default is UTF-8. Use auto-detect if you are unsure of the encoding.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### table.delete
Deletes a table.


```js
google_fusiontables.table.delete({
  "tableId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - ID of the table to be deleted.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### table.get
Retrieves a specific table by its ID.


```js
google_fusiontables.table.get({
  "tableId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Identifier for the table being requested.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### table.patch
Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch semantics.


```js
google_fusiontables.table.patch({
  "tableId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - ID of the table that is being updated.
* replaceViewDefinition (boolean) - Whether the view definition is also updated. The specified view definition replaces the existing one. Only a view can be updated with a new definition.
* body (object) - Represents a table.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### table.update
Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated.


```js
google_fusiontables.table.update({
  "tableId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - ID of the table that is being updated.
* replaceViewDefinition (boolean) - Whether the view definition is also updated. The specified view definition replaces the existing one. Only a view can be updated with a new definition.
* body (object) - Represents a table.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### column.list
Retrieves a list of columns.


```js
google_fusiontables.column.list({
  "tableId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Table whose columns are being listed.
* maxResults (integer) - Maximum number of columns to return. Default is 5.
* pageToken (string) - Continuation token specifying which result page to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### column.insert
Adds a new column to the table.


```js
google_fusiontables.column.insert({
  "tableId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Table for which a new column is being added.
* body (object) - Specifies the details of a column in a table.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### column.delete
Deletes the specified column.


```js
google_fusiontables.column.delete({
  "tableId": "",
  "columnId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Table from which the column is being deleted.
* columnId (string) **required** - Name or identifier for the column being deleted.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### column.get
Retrieves a specific column by its ID.


```js
google_fusiontables.column.get({
  "tableId": "",
  "columnId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Table to which the column belongs.
* columnId (string) **required** - Name or identifier for the column that is being requested.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### column.patch
Updates the name or type of an existing column. This method supports patch semantics.


```js
google_fusiontables.column.patch({
  "tableId": "",
  "columnId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Table for which the column is being updated.
* columnId (string) **required** - Name or identifier for the column that is being updated.
* body (object) - Specifies the details of a column in a table.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### column.update
Updates the name or type of an existing column.


```js
google_fusiontables.column.update({
  "tableId": "",
  "columnId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Table for which the column is being updated.
* columnId (string) **required** - Name or identifier for the column that is being updated.
* body (object) - Specifies the details of a column in a table.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### table.copy
Copies a table.


```js
google_fusiontables.table.copy({
  "tableId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - ID of the table that is being copied.
* copyPresentation (boolean) - Whether to also copy tabs, styles, and templates. Default is false.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### table.importRows
Imports more rows into a table.


```js
google_fusiontables.table.importRows({
  "tableId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - The table into which new rows are being imported.
* delimiter (string) - The delimiter used to separate cell values. This can only consist of a single character. Default is ,.
* encoding (string) - The encoding of the content. Default is UTF-8. Use auto-detect if you are unsure of the encoding.
* endLine (integer) - The index of the line up to which data will be imported. Default is to import the entire file. If endLine is negative, it is an offset from the end of the file; the imported content will exclude the last endLine lines.
* isStrict (boolean) - Whether the imported CSV must have the same number of values for each row. If false, rows with fewer values will be padded with empty values. Default is true.
* startLine (integer) - The index of the first line from which to start importing, inclusive. Default is 0.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### table.replaceRows
Replaces rows of an existing table. Current rows remain visible until all replacement rows are ready.


```js
google_fusiontables.table.replaceRows({
  "tableId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Table whose rows will be replaced.
* delimiter (string) - The delimiter used to separate cell values. This can only consist of a single character. Default is ,.
* encoding (string) - The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
* endLine (integer) - The index of the line up to which data will be imported. Default is to import the entire file. If endLine is negative, it is an offset from the end of the file; the imported content will exclude the last endLine lines.
* isStrict (boolean) - Whether the imported CSV must have the same number of column values for each row. If true, throws an exception if the CSV does not have the same number of columns. If false, rows with fewer column values will be padded with empty values. Default is true.
* startLine (integer) - The index of the first line from which to start importing, inclusive. Default is 0.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### style.list
Retrieves a list of styles.


```js
google_fusiontables.style.list({
  "tableId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Table whose styles are being listed
* maxResults (integer) - Maximum number of styles to return. Optional. Default is 5.
* pageToken (string) - Continuation token specifying which result page to return. Optional.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### style.insert
Adds a new style for the table.


```js
google_fusiontables.style.insert({
  "tableId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Table for which a new style is being added
* body (object) - Represents a complete StyleSettings object. The primary key is a combination of the tableId and a styleId.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### style.delete
Deletes a style.


```js
google_fusiontables.style.delete({
  "tableId": "",
  "styleId": 0
}, context)
```

#### Parameters
* tableId (string) **required** - Table from which the style is being deleted
* styleId (integer) **required** - Identifier (within a table) for the style being deleted
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### style.get
Gets a specific style.


```js
google_fusiontables.style.get({
  "tableId": "",
  "styleId": 0
}, context)
```

#### Parameters
* tableId (string) **required** - Table to which the requested style belongs
* styleId (integer) **required** - Identifier (integer) for a specific style in a table
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### style.patch
Updates an existing style. This method supports patch semantics.


```js
google_fusiontables.style.patch({
  "tableId": "",
  "styleId": 0
}, context)
```

#### Parameters
* tableId (string) **required** - Table whose style is being updated.
* styleId (integer) **required** - Identifier (within a table) for the style being updated.
* body (object) - Represents a complete StyleSettings object. The primary key is a combination of the tableId and a styleId.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### style.update
Updates an existing style.


```js
google_fusiontables.style.update({
  "tableId": "",
  "styleId": 0
}, context)
```

#### Parameters
* tableId (string) **required** - Table whose style is being updated.
* styleId (integer) **required** - Identifier (within a table) for the style being updated.
* body (object) - Represents a complete StyleSettings object. The primary key is a combination of the tableId and a styleId.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### task.list
Retrieves a list of tasks.


```js
google_fusiontables.task.list({
  "tableId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Table whose tasks are being listed.
* maxResults (integer) - Maximum number of tasks to return. Default is 5.
* pageToken (string) - Continuation token specifying which result page to return.
* startIndex (integer) - Index of the first result returned in the current page.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### task.delete
Deletes a specific task by its ID, unless that task has already started running.


```js
google_fusiontables.task.delete({
  "tableId": "",
  "taskId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Table from which the task is being deleted.
* taskId (string) **required** - The identifier of the task to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### task.get
Retrieves a specific task by its ID.


```js
google_fusiontables.task.get({
  "tableId": "",
  "taskId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Table to which the task belongs.
* taskId (string) **required** - The identifier of the task to get.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### template.list
Retrieves a list of templates.


```js
google_fusiontables.template.list({
  "tableId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Identifier for the table whose templates are being requested
* maxResults (integer) - Maximum number of templates to return. Optional. Default is 5.
* pageToken (string) - Continuation token specifying which results page to return. Optional.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### template.insert
Creates a new template for the table.


```js
google_fusiontables.template.insert({
  "tableId": ""
}, context)
```

#### Parameters
* tableId (string) **required** - Table for which a new template is being created
* body (object) - Represents the contents of InfoWindow templates.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### template.delete
Deletes a template


```js
google_fusiontables.template.delete({
  "tableId": "",
  "templateId": 0
}, context)
```

#### Parameters
* tableId (string) **required** - Table from which the template is being deleted
* templateId (integer) **required** - Identifier for the template which is being deleted
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### template.get
Retrieves a specific template by its id


```js
google_fusiontables.template.get({
  "tableId": "",
  "templateId": 0
}, context)
```

#### Parameters
* tableId (string) **required** - Table to which the template belongs
* templateId (integer) **required** - Identifier for the template that is being requested
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### template.patch
Updates an existing template. This method supports patch semantics.


```js
google_fusiontables.template.patch({
  "tableId": "",
  "templateId": 0
}, context)
```

#### Parameters
* tableId (string) **required** - Table to which the updated template belongs
* templateId (integer) **required** - Identifier for the template that is being updated
* body (object) - Represents the contents of InfoWindow templates.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### template.update
Updates an existing template


```js
google_fusiontables.template.update({
  "tableId": "",
  "templateId": 0
}, context)
```

#### Parameters
* tableId (string) **required** - Table to which the updated template belongs
* templateId (integer) **required** - Identifier for the template that is being updated
* body (object) - Represents the contents of InfoWindow templates.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

