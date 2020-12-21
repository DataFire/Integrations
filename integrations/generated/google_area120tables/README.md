# @datafire/google_area120tables

Client library for Area120 Tables API

## Installation and Usage
```bash
npm install --save @datafire/google_area120tables
```
```js
let google_area120tables = require('@datafire/google_area120tables').create({
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



## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_area120tables.oauthCallback({
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
google_area120tables.oauthRefresh(null, context)
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

### area120tables.tables.list
Lists tables for the user.


```js
google_area120tables.area120tables.tables.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of tables to return. The service may return fewer than this value. If unspecified, at most 20 tables are returned. The maximum value is 100; values above 100 are coerced to 100.
  * pageToken `string`: A page token, received from a previous `ListTables` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTables` must match the call that provided the page token.
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
* output [ListTablesResponse](#listtablesresponse)

### area120tables.workspaces.list
Lists workspaces for the user.


```js
google_area120tables.area120tables.workspaces.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of workspaces to return. The service may return fewer than this value. If unspecified, at most 10 workspaces are returned. The maximum value is 25; values above 25 are coerced to 25.
  * pageToken `string`: A page token, received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces` must match the call that provided the page token.
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
* output [ListWorkspacesResponse](#listworkspacesresponse)

### area120tables.tables.rows.delete
Deletes a row.


```js
google_area120tables.area120tables.tables.rows.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the row to delete. Format: tables/{table}/rows/{row}
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

### area120tables.workspaces.get
Gets a workspace. Returns NOT_FOUND if the workspace does not exist.


```js
google_area120tables.area120tables.workspaces.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the workspace to retrieve. Format: workspaces/{workspace}
  * view `string` (values: VIEW_UNSPECIFIED, COLUMN_ID_VIEW): Optional. Column key to use for values in the row. Defaults to user entered name.
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
* output [Workspace](#workspace)

### area120tables.tables.rows.patch
Updates a row.


```js
google_area120tables.area120tables.tables.rows.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row.
  * updateMask `string`: The list of fields to update.
  * view `string` (values: VIEW_UNSPECIFIED, COLUMN_ID_VIEW): Optional. Column key to use for values in the row. Defaults to user entered name.
  * body [Row](#row)
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
* output [Row](#row)

### area120tables.tables.rows.list
Lists rows in a table. Returns NOT_FOUND if the table does not exist.


```js
google_area120tables.area120tables.tables.rows.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent table. Format: tables/{table}
  * pageSize `integer`: The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 50 rows are returned. The maximum value is 1,000; values above 1,000 are coerced to 1,000.
  * pageToken `string`: A page token, received from a previous `ListRows` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRows` must match the call that provided the page token.
  * view `string` (values: VIEW_UNSPECIFIED, COLUMN_ID_VIEW): Optional. Column key to use for values in the row. Defaults to user entered name.
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
* output [ListRowsResponse](#listrowsresponse)

### area120tables.tables.rows.create
Creates a row.


```js
google_area120tables.area120tables.tables.rows.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent table where this row will be created. Format: tables/{table}
  * view `string` (values: VIEW_UNSPECIFIED, COLUMN_ID_VIEW): Optional. Column key to use for values in the row. Defaults to user entered name.
  * body [Row](#row)
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
* output [Row](#row)

### area120tables.tables.rows.batchCreate
Creates multiple rows.


```js
google_area120tables.area120tables.tables.rows.batchCreate({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent table where the rows will be created. Format: tables/{table}
  * body [BatchCreateRowsRequest](#batchcreaterowsrequest)
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
* output [BatchCreateRowsResponse](#batchcreaterowsresponse)

### area120tables.tables.rows.batchUpdate
Updates multiple rows.


```js
google_area120tables.area120tables.tables.rows.batchUpdate({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent table shared by all rows being updated. Format: tables/{table}
  * body [BatchUpdateRowsRequest](#batchupdaterowsrequest)
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
* output [BatchUpdateRowsResponse](#batchupdaterowsresponse)



## Definitions

### BatchCreateRowsRequest
* BatchCreateRowsRequest `object`: Request message for TablesService.BatchCreateRows.
  * requests `array`: Required. The request message specifying the rows to create. A maximum of 500 rows can be created in a single batch.
    * items [CreateRowRequest](#createrowrequest)

### BatchCreateRowsResponse
* BatchCreateRowsResponse `object`: Response message for TablesService.BatchCreateRows.
  * rows `array`: The created rows.
    * items [Row](#row)

### BatchUpdateRowsRequest
* BatchUpdateRowsRequest `object`: Request message for TablesService.BatchUpdateRows.
  * requests `array`: Required. The request messages specifying the rows to update. A maximum of 500 rows can be modified in a single batch.
    * items [UpdateRowRequest](#updaterowrequest)

### BatchUpdateRowsResponse
* BatchUpdateRowsResponse `object`: Response message for TablesService.BatchUpdateRows.
  * rows `array`: The updated rows.
    * items [Row](#row)

### ColumnDescription
* ColumnDescription `object`: Details on a column in the table.
  * dataType `string`: Data type of the column Supported types are auto_id, boolean, boolean_list, creator, create_timestamp, date, dropdown, location, integer, integer_list, number, number_list, person, person_list, tags, check_list, text, text_list, update_timestamp, updater, relationship, file_attachment_list. These types directly map to the column types supported on Tables website.
  * id `string`: Internal id for a column.
  * labels `array`: Optional. Range of labeled values for the column. Some columns like tags and drop-downs limit the values to a set of possible values. We return the range of values in such cases to help clients implement better user data validation.
    * items [LabeledItem](#labeleditem)
  * lookupDetails [LookupDetails](#lookupdetails)
  * name `string`: column name
  * relationshipDetails [RelationshipDetails](#relationshipdetails)

### CreateRowRequest
* CreateRowRequest `object`: Request message for TablesService.CreateRow.
  * parent `string`: Required. The parent table where this row will be created. Format: tables/{table}
  * row [Row](#row)
  * view `string` (values: VIEW_UNSPECIFIED, COLUMN_ID_VIEW): Optional. Column key to use for values in the row. Defaults to user entered name.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### LabeledItem
* LabeledItem `object`: A single item in a labeled column.
  * id `string`: Internal id associated with the item.
  * name `string`: Display string as entered by user.

### ListRowsResponse
* ListRowsResponse `object`: Response message for TablesService.ListRows.
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
  * rows `array`: The rows from the specified table.
    * items [Row](#row)

### ListTablesResponse
* ListTablesResponse `object`: Response message for TablesService.ListTables.
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
  * tables `array`: The list of tables.
    * items [Table](#table)

### ListWorkspacesResponse
* ListWorkspacesResponse `object`: Response message for TablesService.ListWorkspaces.
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
  * workspaces `array`: The list of workspaces.
    * items [Workspace](#workspace)

### LookupDetails
* LookupDetails `object`: Details about a lookup column whose value comes from the associated relationship.
  * relationshipColumn `string`: The name of the relationship column associated with the lookup.
  * relationshipColumnId `string`: The id of the relationship column.

### RelationshipDetails
* RelationshipDetails `object`: Details about a relationship column.
  * linkedTable `string`: The name of the table this relationship is linked to.

### Row
* Row `object`: A single row in a table.
  * name `string`: The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row.
  * values `object`: The values of the row. This is a map of column key to value. Key is user entered name(default) or the internal column id based on the view in the request.

### Table
* Table `object`: A single table.
  * columns `array`: List of columns in this table. Order of columns matches the display order.
    * items [ColumnDescription](#columndescription)
  * displayName `string`: The human readable title of the table.
  * name `string`: The resource name of the table. Table names have the form `tables/{table}`.

### UpdateRowRequest
* UpdateRowRequest `object`: Request message for TablesService.UpdateRow.
  * row [Row](#row)
  * updateMask `string`: The list of fields to update.
  * view `string` (values: VIEW_UNSPECIFIED, COLUMN_ID_VIEW): Optional. Column key to use for values in the row. Defaults to user entered name.

### Workspace
* Workspace `object`: A single workspace.
  * displayName `string`: The human readable title of the workspace.
  * name `string`: The resource name of the workspace. Workspace names have the form `workspaces/{workspace}`.
  * tables `array`: The list of tables in the workspace.
    * items [Table](#table)


