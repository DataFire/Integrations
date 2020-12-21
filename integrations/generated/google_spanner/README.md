# @datafire/google_spanner

Client library for Cloud Spanner API

## Installation and Usage
```bash
npm install --save @datafire/google_spanner
```
```js
let google_spanner = require('@datafire/google_spanner').create({
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

Cloud Spanner is a managed, mission-critical, globally consistent and scalable relational database service.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_spanner.oauthCallback({
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
google_spanner.oauthRefresh(null, context)
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

### spanner.projects.instances.databases.dropDatabase
Drops (aka deletes) a Cloud Spanner database. Completed backups for the database will be retained according to their `expire_time`.


```js
google_spanner.spanner.projects.instances.databases.dropDatabase({
  "database": ""
}, context)
```

#### Input
* input `object`
  * database **required** `string`: Required. The database to be dropped.
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

### spanner.projects.instances.databases.getDdl
Returns the schema of a Cloud Spanner database as a list of formatted DDL statements. This method does not show pending schema updates, those may be queried using the Operations API.


```js
google_spanner.spanner.projects.instances.databases.getDdl({
  "database": ""
}, context)
```

#### Input
* input `object`
  * database **required** `string`: Required. The database whose schema we wish to get. Values are of the form `projects//instances//databases/`
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
* output [GetDatabaseDdlResponse](#getdatabaseddlresponse)

### spanner.projects.instances.databases.updateDdl
Updates the schema of a Cloud Spanner database by creating/altering/dropping tables, columns, indexes, etc. The returned long-running operation will have a name of the format `/operations/` and can be used to track execution of the schema change(s). The metadata field type is UpdateDatabaseDdlMetadata. The operation has no response.


```js
google_spanner.spanner.projects.instances.databases.updateDdl({
  "database": ""
}, context)
```

#### Input
* input `object`
  * database **required** `string`: Required. The database to update.
  * body [UpdateDatabaseDdlRequest](#updatedatabaseddlrequest)
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
* output [Operation](#operation)

### spanner.projects.instances.databases.sessions.list
Lists all sessions in a given database.


```js
google_spanner.spanner.projects.instances.databases.sessions.list({
  "database": ""
}, context)
```

#### Input
* input `object`
  * database **required** `string`: Required. The database in which to list sessions.
  * filter `string`: An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `labels.key` where key is the name of a label Some examples of using filters are: * `labels.env:*` --> The session has the label "env". * `labels.env:dev` --> The session has the label "env" and the value of the label contains the string "dev".
  * pageSize `integer`: Number of sessions to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
  * pageToken `string`: If non-empty, `page_token` should contain a next_page_token from a previous ListSessionsResponse.
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
* output [ListSessionsResponse](#listsessionsresponse)

### spanner.projects.instances.databases.sessions.create
Creates a new session. A session can be used to perform transactions that read and/or modify data in a Cloud Spanner database. Sessions are meant to be reused for many consecutive transactions. Sessions can only execute one transaction at a time. To execute multiple concurrent read-write/write-only transactions, create multiple sessions. Note that standalone reads and queries use a transaction internally, and count toward the one transaction limit. Active sessions use additional server resources, so it is a good idea to delete idle and unneeded sessions. Aside from explicit deletes, Cloud Spanner may delete sessions for which no operations are sent for more than an hour. If a session is deleted, requests to it return `NOT_FOUND`. Idle sessions can be kept alive by sending a trivial SQL query periodically, e.g., `"SELECT 1"`.


```js
google_spanner.spanner.projects.instances.databases.sessions.create({
  "database": ""
}, context)
```

#### Input
* input `object`
  * database **required** `string`: Required. The database in which the new session is created.
  * body [CreateSessionRequest](#createsessionrequest)
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
* output [Session](#session)

### spanner.projects.instances.databases.sessions.batchCreate
Creates multiple new sessions. This API can be used to initialize a session cache on the clients. See https://goo.gl/TgSFN2 for best practices on session cache management.


```js
google_spanner.spanner.projects.instances.databases.sessions.batchCreate({
  "database": ""
}, context)
```

#### Input
* input `object`
  * database **required** `string`: Required. The database in which the new sessions are created.
  * body [BatchCreateSessionsRequest](#batchcreatesessionsrequest)
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
* output [BatchCreateSessionsResponse](#batchcreatesessionsresponse)

### spanner.projects.instances.operations.delete
Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.


```js
google_spanner.spanner.projects.instances.operations.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be deleted.
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

### spanner.projects.instances.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_spanner.spanner.projects.instances.operations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation's parent resource.
  * filter `string`: The standard list filter.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
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
* output [ListOperationsResponse](#listoperationsresponse)

### spanner.projects.instances.backups.patch
Updates a pending or completed Backup.


```js
google_spanner.spanner.projects.instances.backups.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only for the CreateBackup operation. Required for the UpdateBackup operation. A globally unique identifier for the backup which cannot be changed. Values are of the form `projects//instances//backups/a-z*[a-z0-9]` The final segment of the name must be between 2 and 60 characters in length. The backup is stored in the location(s) specified in the instance configuration of the instance containing the backup, identified by the prefix of the backup name of the form `projects//instances/`.
  * updateMask `string`: Required. A mask specifying which fields (e.g. `expire_time`) in the Backup resource should be updated. This mask is relative to the Backup resource, not to the request message. The field mask must always be specified; this prevents any future fields from being erased accidentally by clients that do not know about them.
  * body [Backup](#backup)
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
* output [Backup](#backup)

### spanner.projects.instances.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.


```js
google_spanner.spanner.projects.instances.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
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

### spanner.projects.instances.backupOperations.list
Lists the backup long-running operations in the given instance. A backup operation has a name of the form `projects//instances//backups//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations. Operations returned are ordered by `operation.metadata.value.progress.start_time` in descending order starting from the most recently started operation.


```js
google_spanner.spanner.projects.instances.backupOperations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The instance of the backup operations. Values are of the form `projects//instances/`.
  * filter `string`: An expression that filters the list of returned backup operations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the operation are eligible for filtering: * `name` - The name of the long-running operation * `done` - False if the operation is in progress, else true. * `metadata.@type` - the type of metadata. For example, the type string for CreateBackupMetadata is `type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata`. * `metadata.` - any field in metadata.value. * `error` - Error associated with the long-running operation. * `response.@type` - the type of response. * `response.` - any field in response.value. You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic, but you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `done:true` - The operation is complete. * `metadata.database:prod` - The database the backup was taken from has a name containing the string "prod". * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \ `(metadata.name:howl) AND` \ `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` \ `(error:*)` - Returns operations where: * The operation's metadata type is CreateBackupMetadata. * The backup name contains the string "howl". * The operation started before 2018-03-28T14:50:00Z. * The operation resulted in an error.
  * pageSize `integer`: Number of operations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
  * pageToken `string`: If non-empty, `page_token` should contain a next_page_token from a previous ListBackupOperationsResponse to the same `parent` and with the same `filter`.
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
* output [ListBackupOperationsResponse](#listbackupoperationsresponse)

### spanner.projects.instances.backups.list
Lists completed and pending backups. Backups returned are ordered by `create_time` in descending order, starting from the most recent `create_time`.


```js
google_spanner.spanner.projects.instances.backups.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The instance to list backups from. Values are of the form `projects//instances/`.
  * filter `string`: An expression that filters the list of returned backups. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Backup are eligible for filtering: * `name` * `database` * `state` * `create_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `expire_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `size_bytes` You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic, but you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `name:Howl` - The backup's name contains the string "howl". * `database:prod` - The database's name contains the string "prod". * `state:CREATING` - The backup is pending creation. * `state:READY` - The backup is fully created and ready for use. * `(name:howl) AND (create_time < \"2018-03-28T14:50:00Z\")` - The backup name contains the string "howl" and `create_time` of the backup is before 2018-03-28T14:50:00Z. * `expire_time < \"2018-03-28T14:50:00Z\"` - The backup `expire_time` is before 2018-03-28T14:50:00Z. * `size_bytes > 10000000000` - The backup's size is greater than 10GB
  * pageSize `integer`: Number of backups to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
  * pageToken `string`: If non-empty, `page_token` should contain a next_page_token from a previous ListBackupsResponse to the same `parent` and with the same `filter`.
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
* output [ListBackupsResponse](#listbackupsresponse)

### spanner.projects.instances.backups.create
Starts creating a new Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects//instances//backups//operations/` and can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup. There can be only one pending backup creation per database. Backup creation of different databases can run concurrently.


```js
google_spanner.spanner.projects.instances.backups.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the instance in which the backup will be created. This must be the same instance that contains the database the backup will be created from. The backup will be stored in the location(s) specified in the instance configuration of this instance. Values are of the form `projects//instances/`.
  * backupId `string`: Required. The id of the backup to be created. The `backup_id` appended to `parent` forms the full backup name of the form `projects//instances//backups/`.
  * body [Backup](#backup)
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
* output [Operation](#operation)

### spanner.projects.instances.databaseOperations.list
Lists database longrunning-operations. A database operation has a name of the form `projects//instances//databases//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations.


```js
google_spanner.spanner.projects.instances.databaseOperations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The instance of the database operations. Values are of the form `projects//instances/`.
  * filter `string`: An expression that filters the list of returned operations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Operation are eligible for filtering: * `name` - The name of the long-running operation * `done` - False if the operation is in progress, else true. * `metadata.@type` - the type of metadata. For example, the type string for RestoreDatabaseMetadata is `type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata`. * `metadata.` - any field in metadata.value. * `error` - Error associated with the long-running operation. * `response.@type` - the type of response. * `response.` - any field in response.value. You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic. However, you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `done:true` - The operation is complete. * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata) AND` \ `(metadata.source_type:BACKUP) AND` \ `(metadata.backup_info.backup:backup_howl) AND` \ `(metadata.name:restored_howl) AND` \ `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` \ `(error:*)` - Return operations where: * The operation's metadata type is RestoreDatabaseMetadata. * The database is restored from a backup. * The backup name contains "backup_howl". * The restored database's name contains "restored_howl". * The operation started before 2018-03-28T14:50:00Z. * The operation resulted in an error.
  * pageSize `integer`: Number of operations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
  * pageToken `string`: If non-empty, `page_token` should contain a next_page_token from a previous ListDatabaseOperationsResponse to the same `parent` and with the same `filter`.
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
* output [ListDatabaseOperationsResponse](#listdatabaseoperationsresponse)

### spanner.projects.instances.databases.list
Lists Cloud Spanner databases.


```js
google_spanner.spanner.projects.instances.databases.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The instance whose databases should be listed. Values are of the form `projects//instances/`.
  * pageSize `integer`: Number of databases to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
  * pageToken `string`: If non-empty, `page_token` should contain a next_page_token from a previous ListDatabasesResponse.
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
* output [ListDatabasesResponse](#listdatabasesresponse)

### spanner.projects.instances.databases.create
Creates a new Cloud Spanner database and starts to prepare it for serving. The returned long-running operation will have a name of the format `/operations/` and can be used to track preparation of the database. The metadata field type is CreateDatabaseMetadata. The response field type is Database, if successful.


```js
google_spanner.spanner.projects.instances.databases.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the instance that will serve the new database. Values are of the form `projects//instances/`.
  * body [CreateDatabaseRequest](#createdatabaserequest)
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
* output [Operation](#operation)

### spanner.projects.instances.databases.restore
Create a new database by restoring from a completed backup. The new database must be in the same project and in an instance with the same instance configuration as the instance containing the backup. The returned database long-running operation has a name of the format `projects//instances//databases//operations/`, and can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreDatabaseMetadata. The response type is Database, if successful. Cancelling the returned operation will stop the restore and delete the database. There can be only one database being restored into an instance at a time. Once the restore operation completes, a new restore operation can be initiated, without waiting for the optimize operation associated with the first restore to complete.


```js
google_spanner.spanner.projects.instances.databases.restore({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the instance in which to create the restored database. This instance must be in the same project and have the same instance configuration as the instance containing the source backup. Values are of the form `projects//instances/`.
  * body [RestoreDatabaseRequest](#restoredatabaserequest)
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
* output [Operation](#operation)

### spanner.projects.instanceConfigs.list
Lists the supported instance configurations for a given project.


```js
google_spanner.spanner.projects.instanceConfigs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project for which a list of supported instance configurations is requested. Values are of the form `projects/`.
  * pageSize `integer`: Number of instance configurations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
  * pageToken `string`: If non-empty, `page_token` should contain a next_page_token from a previous ListInstanceConfigsResponse.
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
* output [ListInstanceConfigsResponse](#listinstanceconfigsresponse)

### spanner.projects.instances.list
Lists all instances in the given project.


```js
google_spanner.spanner.projects.instances.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project for which a list of instances is requested. Values are of the form `projects/`.
  * filter `string`: An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `display_name` * `labels.key` where key is the name of a label Some examples of using filters are: * `name:*` --> The instance has a name. * `name:Howl` --> The instance's name contains the string "howl". * `name:HOWL` --> Equivalent to above. * `NAME:howl` --> Equivalent to above. * `labels.env:*` --> The instance has the label "env". * `labels.env:dev` --> The instance has the label "env" and the value of the label contains the string "dev". * `name:howl labels.env:dev` --> The instance's name contains "howl" and it has the label "env" with its value containing "dev".
  * pageSize `integer`: Number of instances to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
  * pageToken `string`: If non-empty, `page_token` should contain a next_page_token from a previous ListInstancesResponse.
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
* output [ListInstancesResponse](#listinstancesresponse)

### spanner.projects.instances.create
Creates an instance and begins preparing it to begin serving. The returned long-running operation can be used to track the progress of preparing the new instance. The instance name is assigned by the caller. If the named instance already exists, `CreateInstance` returns `ALREADY_EXISTS`. Immediately upon completion of this request: * The instance is readable via the API, with all requested attributes but no allocated resources. Its state is `CREATING`. Until completion of the returned operation: * Cancelling the operation renders the instance immediately unreadable via the API. * The instance can be deleted. * All other attempts to modify the instance are rejected. Upon completion of the returned operation: * Billing for all successfully-allocated resources begins (some types may have lower than the requested levels). * Databases can be created in the instance. * The instance's allocated resource levels are readable via the API. * The instance's state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance. The metadata field type is CreateInstanceMetadata. The response field type is Instance, if successful.


```js
google_spanner.spanner.projects.instances.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project in which to create the instance. Values are of the form `projects/`.
  * body [CreateInstanceRequest](#createinstancerequest)
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
* output [Operation](#operation)

### spanner.projects.instances.databases.getIamPolicy
Gets the access control policy for a database or backup resource. Returns an empty policy if a database or backup exists but does not have a policy set. Authorization requires `spanner.databases.getIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.getIamPolicy` permission on resource.


```js
google_spanner.spanner.projects.instances.databases.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources.
  * body [GetIamPolicyRequest](#getiampolicyrequest)
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
* output [Policy](#policy)

### spanner.projects.instances.databases.setIamPolicy
Sets the access control policy on a database or backup resource. Replaces any existing policy. Authorization requires `spanner.databases.setIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.setIamPolicy` permission on resource.


```js
google_spanner.spanner.projects.instances.databases.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for databases resources.
  * body [SetIamPolicyRequest](#setiampolicyrequest)
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
* output [Policy](#policy)

### spanner.projects.instances.databases.testIamPermissions
Returns permissions that the caller has on the specified database or backup resource. Attempting this RPC on a non-existent Cloud Spanner database will result in a NOT_FOUND error if the user has `spanner.databases.list` permission on the containing Cloud Spanner instance. Otherwise returns an empty set of permissions. Calling this method on a backup that does not exist will result in a NOT_FOUND error if the user has `spanner.backups.list` permission on the containing instance.


```js
google_spanner.spanner.projects.instances.databases.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources.
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
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
* output [TestIamPermissionsResponse](#testiampermissionsresponse)

### spanner.projects.instances.databases.sessions.beginTransaction
Begins a new transaction. This step can often be skipped: Read, ExecuteSql and Commit can begin a new transaction as a side-effect.


```js
google_spanner.spanner.projects.instances.databases.sessions.beginTransaction({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the transaction runs.
  * body [BeginTransactionRequest](#begintransactionrequest)
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
* output [Transaction](#transaction)

### spanner.projects.instances.databases.sessions.commit
Commits a transaction. The request includes the mutations to be applied to rows in the database. `Commit` might return an `ABORTED` error. This can occur at any time; commonly, the cause is conflicts with concurrent transactions. However, it can also happen for a variety of other reasons. If `Commit` returns `ABORTED`, the caller should re-attempt the transaction from the beginning, re-using the same session. On very rare occasions, `Commit` might return `UNKNOWN`. This can happen, for example, if the client job experiences a 1+ hour networking failure. At that point, Cloud Spanner has lost track of the transaction outcome and we recommend that you perform another read from the database to see the state of things as they are now.


```js
google_spanner.spanner.projects.instances.databases.sessions.commit({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the transaction to be committed is running.
  * body [CommitRequest](#commitrequest)
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
* output [CommitResponse](#commitresponse)

### spanner.projects.instances.databases.sessions.executeBatchDml
Executes a batch of SQL DML statements. This method allows many statements to be run with lower latency than submitting them sequentially with ExecuteSql. Statements are executed in sequential order. A request can succeed even if a statement fails. The ExecuteBatchDmlResponse.status field in the response provides information about the statement that failed. Clients must inspect this field to determine whether an error occurred. Execution stops after the first failed statement; the remaining statements are not executed.


```js
google_spanner.spanner.projects.instances.databases.sessions.executeBatchDml({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the DML statements should be performed.
  * body [ExecuteBatchDmlRequest](#executebatchdmlrequest)
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
* output [ExecuteBatchDmlResponse](#executebatchdmlresponse)

### spanner.projects.instances.databases.sessions.executeSql
Executes an SQL statement, returning all results in a single reply. This method cannot be used to return a result set larger than 10 MiB; if the query yields more data than that, the query fails with a `FAILED_PRECONDITION` error. Operations inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details. Larger result sets can be fetched in streaming fashion by calling ExecuteStreamingSql instead.


```js
google_spanner.spanner.projects.instances.databases.sessions.executeSql({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the SQL query should be performed.
  * body [ExecuteSqlRequest](#executesqlrequest)
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
* output [ResultSet](#resultset)

### spanner.projects.instances.databases.sessions.executeStreamingSql
Like ExecuteSql, except returns the result set as a stream. Unlike ExecuteSql, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.


```js
google_spanner.spanner.projects.instances.databases.sessions.executeStreamingSql({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the SQL query should be performed.
  * body [ExecuteSqlRequest](#executesqlrequest)
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
* output [PartialResultSet](#partialresultset)

### spanner.projects.instances.databases.sessions.partitionQuery
Creates a set of partition tokens that can be used to execute a query operation in parallel. Each of the returned partition tokens can be used by ExecuteStreamingSql to specify a subset of the query result to read. The same session and read-only transaction must be used by the PartitionQueryRequest used to create the partition tokens and the ExecuteSqlRequests that use the partition tokens. Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old. When any of these happen, it is not possible to resume the query, and the whole operation must be restarted from the beginning.


```js
google_spanner.spanner.projects.instances.databases.sessions.partitionQuery({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session used to create the partitions.
  * body [PartitionQueryRequest](#partitionqueryrequest)
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
* output [PartitionResponse](#partitionresponse)

### spanner.projects.instances.databases.sessions.partitionRead
Creates a set of partition tokens that can be used to execute a read operation in parallel. Each of the returned partition tokens can be used by StreamingRead to specify a subset of the read result to read. The same session and read-only transaction must be used by the PartitionReadRequest used to create the partition tokens and the ReadRequests that use the partition tokens. There are no ordering guarantees on rows returned among the returned partition tokens, or even within each individual StreamingRead call issued with a partition_token. Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old. When any of these happen, it is not possible to resume the read, and the whole operation must be restarted from the beginning.


```js
google_spanner.spanner.projects.instances.databases.sessions.partitionRead({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session used to create the partitions.
  * body [PartitionReadRequest](#partitionreadrequest)
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
* output [PartitionResponse](#partitionresponse)

### spanner.projects.instances.databases.sessions.read
Reads rows from the database using key lookups and scans, as a simple key/value style alternative to ExecuteSql. This method cannot be used to return a result set larger than 10 MiB; if the read matches more data than that, the read fails with a `FAILED_PRECONDITION` error. Reads inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details. Larger result sets can be yielded in streaming fashion by calling StreamingRead instead.


```js
google_spanner.spanner.projects.instances.databases.sessions.read({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the read should be performed.
  * body [ReadRequest](#readrequest)
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
* output [ResultSet](#resultset)

### spanner.projects.instances.databases.sessions.rollback
Rolls back a transaction, releasing any locks it holds. It is a good idea to call this for any transaction that includes one or more Read or ExecuteSql requests and ultimately decides not to commit. `Rollback` returns `OK` if it successfully aborts the transaction, the transaction was already aborted, or the transaction is not found. `Rollback` never returns `ABORTED`.


```js
google_spanner.spanner.projects.instances.databases.sessions.rollback({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the transaction to roll back is running.
  * body [RollbackRequest](#rollbackrequest)
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

### spanner.projects.instances.databases.sessions.streamingRead
Like Read, except returns the result set as a stream. Unlike Read, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.


```js
google_spanner.spanner.projects.instances.databases.sessions.streamingRead({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the read should be performed.
  * body [ReadRequest](#readrequest)
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
* output [PartialResultSet](#partialresultset)



## Definitions

### Backup
* Backup `object`: A backup of a Cloud Spanner database.
  * createTime `string`: Output only. The backup will contain an externally consistent copy of the database at the timestamp specified by `create_time`. `create_time` is approximately the time the CreateBackup request is received.
  * database `string`: Required for the CreateBackup operation. Name of the database from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects//instances//databases/`.
  * expireTime `string`: Required for the CreateBackup operation. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 366 days from the time the CreateBackup request is processed. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup.
  * name `string`: Output only for the CreateBackup operation. Required for the UpdateBackup operation. A globally unique identifier for the backup which cannot be changed. Values are of the form `projects//instances//backups/a-z*[a-z0-9]` The final segment of the name must be between 2 and 60 characters in length. The backup is stored in the location(s) specified in the instance configuration of the instance containing the backup, identified by the prefix of the backup name of the form `projects//instances/`.
  * referencingDatabases `array`: Output only. The names of the restored databases that reference the backup. The database names are of the form `projects//instances//databases/`. Referencing databases may exist in different instances. The existence of any referencing database prevents the backup from being deleted. When a restored database from the backup enters the `READY` state, the reference to the backup is removed.
    * items `string`
  * sizeBytes `string`: Output only. Size of the backup in bytes.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, READY): Output only. The current state of the backup.

### BackupInfo
* BackupInfo `object`: Information about a backup.
  * backup `string`: Name of the backup.
  * createTime `string`: The backup contains an externally consistent copy of `source_database` at the timestamp specified by `create_time`.
  * sourceDatabase `string`: Name of the database the backup was created from.

### BatchCreateSessionsRequest
* BatchCreateSessionsRequest `object`: The request for BatchCreateSessions.
  * sessionCount `integer`: Required. The number of sessions to be created in this batch call. The API may return fewer than the requested number of sessions. If a specific number of sessions are desired, the client can make additional calls to BatchCreateSessions (adjusting session_count as necessary).
  * sessionTemplate [Session](#session)

### BatchCreateSessionsResponse
* BatchCreateSessionsResponse `object`: The response for BatchCreateSessions.
  * session `array`: The freshly created sessions.
    * items [Session](#session)

### BeginTransactionRequest
* BeginTransactionRequest `object`: The request for BeginTransaction.
  * options [TransactionOptions](#transactionoptions)

### Binding
* Binding `object`: Associates `members` with a `role`.
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### ChildLink
* ChildLink `object`: Metadata associated with a parent-child relationship appearing in a PlanNode.
  * childIndex `integer`: The node to which the link points.
  * type `string`: The type of the link. For example, in Hash Joins this could be used to distinguish between the build child and the probe child, or in the case of the child being an output variable, to represent the tag associated with the output variable.
  * variable `string`: Only present if the child node is SCALAR and corresponds to an output variable of the parent node. The field carries the name of the output variable. For example, a `TableScan` operator that reads rows from a table will have child links to the `SCALAR` nodes representing the output variables created for each column that is read by the operator. The corresponding `variable` fields will be set to the variable names assigned to the columns.

### CommitRequest
* CommitRequest `object`: The request for Commit.
  * mutations `array`: The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.
    * items [Mutation](#mutation)
  * singleUseTransaction [TransactionOptions](#transactionoptions)
  * transactionId `string`: Commit a previously-started transaction.

### CommitResponse
* CommitResponse `object`: The response for Commit.
  * commitTimestamp `string`: The Cloud Spanner timestamp at which the transaction committed.

### CreateBackupMetadata
* CreateBackupMetadata `object`: Metadata type for the operation returned by CreateBackup.
  * cancelTime `string`: The time at which cancellation of this operation was received. Operations.CancelOperation starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
  * database `string`: The name of the database the backup is created from.
  * name `string`: The name of the backup being created.
  * progress [OperationProgress](#operationprogress)

### CreateDatabaseMetadata
* CreateDatabaseMetadata `object`: Metadata type for the operation returned by CreateDatabase.
  * database `string`: The database being created.

### CreateDatabaseRequest
* CreateDatabaseRequest `object`: The request for CreateDatabase.
  * createStatement `string`: Required. A `CREATE DATABASE` statement, which specifies the ID of the new database. The database ID must conform to the regular expression `a-z*[a-z0-9]` and be between 2 and 30 characters in length. If the database ID is a reserved word or if it contains a hyphen, the database ID must be enclosed in backticks (`` ` ``).
  * extraStatements `array`: Optional. A list of DDL statements to run inside the newly created database. Statements can create tables, indexes, etc. These statements execute atomically with the creation of the database: if there is an error in any statement, the database is not created.
    * items `string`

### CreateInstanceMetadata
* CreateInstanceMetadata `object`: Metadata type for the operation returned by CreateInstance.
  * cancelTime `string`: The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is guaranteed to succeed) and cannot be cancelled again.
  * endTime `string`: The time at which this operation failed or was completed successfully.
  * instance [Instance](#instance)
  * startTime `string`: The time at which the CreateInstance request was received.

### CreateInstanceRequest
* CreateInstanceRequest `object`: The request for CreateInstance.
  * instance [Instance](#instance)
  * instanceId `string`: Required. The ID of the instance to create. Valid identifiers are of the form `a-z*[a-z0-9]` and must be between 2 and 64 characters in length.

### CreateSessionRequest
* CreateSessionRequest `object`: The request for CreateSession.
  * session [Session](#session)

### Database
* Database `object`: A Cloud Spanner database.
  * createTime `string`: Output only. If exists, the time at which the database creation started.
  * name `string`: Required. The name of the database. Values are of the form `projects//instances//databases/`, where `` is as specified in the `CREATE DATABASE` statement. This name can be passed to other API methods to identify the database.
  * restoreInfo [RestoreInfo](#restoreinfo)
  * state `string` (values: STATE_UNSPECIFIED, CREATING, READY, READY_OPTIMIZING): Output only. The current database state.

### Delete
* Delete `object`: Arguments to delete operations.
  * keySet [KeySet](#keyset)
  * table `string`: Required. The table whose rows will be deleted.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### ExecuteBatchDmlRequest
* ExecuteBatchDmlRequest `object`: The request for ExecuteBatchDml.
  * seqno `string`: Required. A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed. The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution.
  * statements `array`: Required. The list of statements to execute in this batch. Statements are executed serially, such that the effects of statement `i` are visible to statement `i+1`. Each statement must be a DML statement. Execution stops at the first failed statement; the remaining statements are not executed. Callers must provide at least one statement.
    * items [Statement](#statement)
  * transaction [TransactionSelector](#transactionselector)

### ExecuteBatchDmlResponse
* ExecuteBatchDmlResponse `object`: The response for ExecuteBatchDml. Contains a list of ResultSet messages, one for each DML statement that has successfully executed, in the same order as the statements in the request. If a statement fails, the status in the response body identifies the cause of the failure. To check for DML statements that failed, use the following approach: 1. Check the status in the response message. The google.rpc.Code enum value `OK` indicates that all statements were executed successfully. 2. If the status was not `OK`, check the number of result sets in the response. If the response contains `N` ResultSet messages, then statement `N+1` in the request failed. Example 1: * Request: 5 DML statements, all executed successfully. * Response: 5 ResultSet messages, with the status `OK`. Example 2: * Request: 5 DML statements. The third statement has a syntax error. * Response: 2 ResultSet messages, and a syntax error (`INVALID_ARGUMENT`) status. The number of ResultSet messages indicates that the third statement failed, and the fourth and fifth statements were not executed.
  * resultSets `array`: One ResultSet for each statement in the request that ran successfully, in the same order as the statements in the request. Each ResultSet does not contain any rows. The ResultSetStats in each ResultSet contain the number of rows modified by the statement. Only the first ResultSet in the response contains valid ResultSetMetadata.
    * items [ResultSet](#resultset)
  * status [Status](#status)

### ExecuteSqlRequest
* ExecuteSqlRequest `object`: The request for ExecuteSql and ExecuteStreamingSql.
  * paramTypes `object`: It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.
  * params `object`: Parameter names and values that bind to placeholders in the SQL string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names must conform to the naming requirements of identifiers as specified at https://cloud.google.com/spanner/docs/lexical#identifiers. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters.
  * partitionToken `string`: If present, results will be restricted to the specified partition previously created using PartitionQuery(). There must be an exact match for the values of fields common to this message and the PartitionQueryRequest message used to create this partition_token.
  * queryMode `string` (values: NORMAL, PLAN, PROFILE): Used to control the amount of debugging information returned in ResultSetStats. If partition_token is set, query_mode can only be set to QueryMode.NORMAL.
  * queryOptions [QueryOptions](#queryoptions)
  * resumeToken `string`: If this request is resuming a previously interrupted SQL statement execution, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new SQL statement execution to resume where the last one left off. The rest of the request parameters must exactly match the request that yielded this token.
  * seqno `string`: A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed. The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution. Required for DML statements. Ignored for queries.
  * sql `string`: Required. The SQL string.
  * transaction [TransactionSelector](#transactionselector)

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### Field
* Field `object`: Message representing a single field of a struct.
  * name `string`: The name of the field. For reads, this is the column name. For SQL queries, it is the column alias (e.g., `"Word"` in the query `"SELECT 'hello' AS Word"`), or the column name (e.g., `"ColName"` in the query `"SELECT ColName FROM Table"`). Some columns might have an empty name (e.g., `"SELECT UPPER(ColName)"`). Note that a query result can contain multiple fields with the same name.
  * type [Type](#type)

### GetDatabaseDdlResponse
* GetDatabaseDdlResponse `object`: The response for GetDatabaseDdl.
  * statements `array`: A list of formatted DDL statements defining the schema of the database specified in the request.
    * items `string`

### GetIamPolicyRequest
* GetIamPolicyRequest `object`: Request message for `GetIamPolicy` method.
  * options [GetPolicyOptions](#getpolicyoptions)

### GetPolicyOptions
* GetPolicyOptions `object`: Encapsulates settings provided to GetIamPolicy.
  * requestedPolicyVersion `integer`: Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### Instance
* Instance `object`: An isolated set of Cloud Spanner resources on which databases can be hosted.
  * config `string`: Required. The name of the instance's configuration. Values are of the form `projects//instanceConfigs/`. See also InstanceConfig and ListInstanceConfigs.
  * displayName `string`: Required. The descriptive name for this instance as it appears in UIs. Must be unique per project and between 4 and 30 characters in length.
  * endpointUris `array`: Deprecated. This field is not populated.
    * items `string`
  * labels `object`: Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated. And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.). * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. * No more than 64 labels can be associated with a given resource. See https://goo.gl/xmQnxf for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. And so you are advised to use an internal label representation, such as JSON, which doesn't rely upon specific characters being disallowed. For example, representing labels as the string: name + "_" + value would prove problematic if we were to allow "_" in a future release.
  * name `string`: Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects//instances/a-z*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length.
  * nodeCount `integer`: The number of nodes allocated to this instance. This may be zero in API responses for instances that are not yet in state `READY`. See [the documentation](https://cloud.google.com/spanner/docs/instances#node_count) for more information about nodes.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, READY): Output only. The current instance state. For CreateInstance, the state must be either omitted or set to `CREATING`. For UpdateInstance, the state must be either omitted or set to `READY`.

### InstanceConfig
* InstanceConfig `object`: A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.
  * displayName `string`: The name of this instance configuration as it appears in UIs.
  * name `string`: A unique identifier for the instance configuration. Values are of the form `projects//instanceConfigs/a-z*`
  * replicas `array`: The geographic placement of nodes in this instance configuration and their replication properties.
    * items [ReplicaInfo](#replicainfo)

### KeyRange
* KeyRange `object`: KeyRange represents a range of rows in a table or index. A range has a start key and an end key. These keys can be open or closed, indicating if the range includes rows with that key. Keys are represented by lists, where the ith value in the list corresponds to the ith component of the table or index primary key. Individual values are encoded as described here. For example, consider the following table definition: CREATE TABLE UserEvents ( UserName STRING(MAX), EventDate STRING(10) ) PRIMARY KEY(UserName, EventDate); The following keys name rows in this table: "Bob", "2014-09-23" Since the `UserEvents` table's `PRIMARY KEY` clause names two columns, each `UserEvents` key has two elements; the first is the `UserName`, and the second is the `EventDate`. Key ranges with multiple components are interpreted lexicographically by component using the table or index key's declared sort order. For example, the following range returns all events for user `"Bob"` that occurred in the year 2015: "start_closed": ["Bob", "2015-01-01"] "end_closed": ["Bob", "2015-12-31"] Start and end keys can omit trailing key components. This affects the inclusion and exclusion of rows that exactly match the provided key components: if the key is closed, then rows that exactly match the provided components are included; if the key is open, then rows that exactly match are not included. For example, the following range includes all events for `"Bob"` that occurred during and after the year 2000: "start_closed": ["Bob", "2000-01-01"] "end_closed": ["Bob"] The next example retrieves all events for `"Bob"`: "start_closed": ["Bob"] "end_closed": ["Bob"] To retrieve events before the year 2000: "start_closed": ["Bob"] "end_open": ["Bob", "2000-01-01"] The following range includes all rows in the table: "start_closed": [] "end_closed": [] This range returns all users whose `UserName` begins with any character from A to C: "start_closed": ["A"] "end_open": ["D"] This range returns all users whose `UserName` begins with B: "start_closed": ["B"] "end_open": ["C"] Key ranges honor column sort order. For example, suppose a table is defined as follows: CREATE TABLE DescendingSortedTable { Key INT64, ... ) PRIMARY KEY(Key DESC); The following range retrieves all rows with key values between 1 and 100 inclusive: "start_closed": ["100"] "end_closed": ["1"] Note that 100 is passed as the start, and 1 is passed as the end, because `Key` is a descending column in the schema.
  * endClosed `array`: If the end is closed, then the range includes all rows whose first `len(end_closed)` key columns exactly match `end_closed`.
  * endOpen `array`: If the end is open, then the range excludes rows whose first `len(end_open)` key columns exactly match `end_open`.
  * startClosed `array`: If the start is closed, then the range includes all rows whose first `len(start_closed)` key columns exactly match `start_closed`.
  * startOpen `array`: If the start is open, then the range excludes rows whose first `len(start_open)` key columns exactly match `start_open`.

### KeySet
* KeySet `object`: `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All the keys are expected to be in the same table or index. The keys need not be sorted in any particular way. If the same key is specified multiple times in the set (for example if two ranges, two keys, or a key and a range overlap), Cloud Spanner behaves as if the key were only specified once.
  * all `boolean`: For convenience `all` can be set to `true` to indicate that this `KeySet` matches all keys in the table or index. Note that any keys specified in `keys` or `ranges` are only yielded once.
  * keys `array`: A list of specific keys. Entries in `keys` should have exactly as many elements as there are columns in the primary or index key with which this `KeySet` is used. Individual key values are encoded as described here.
    * items `array`
  * ranges `array`: A list of key ranges. See KeyRange for more information about key range specifications.
    * items [KeyRange](#keyrange)

### ListBackupOperationsResponse
* ListBackupOperationsResponse `object`: The response for ListBackupOperations.
  * nextPageToken `string`: `next_page_token` can be sent in a subsequent ListBackupOperations call to fetch more of the matching metadata.
  * operations `array`: The list of matching backup long-running operations. Each operation's name will be prefixed by the backup's name and the operation's metadata will be of type CreateBackupMetadata. Operations returned include those that are pending or have completed/failed/canceled within the last 7 days. Operations returned are ordered by `operation.metadata.value.progress.start_time` in descending order starting from the most recently started operation.
    * items [Operation](#operation)

### ListBackupsResponse
* ListBackupsResponse `object`: The response for ListBackups.
  * backups `array`: The list of matching backups. Backups returned are ordered by `create_time` in descending order, starting from the most recent `create_time`.
    * items [Backup](#backup)
  * nextPageToken `string`: `next_page_token` can be sent in a subsequent ListBackups call to fetch more of the matching backups.

### ListDatabaseOperationsResponse
* ListDatabaseOperationsResponse `object`: The response for ListDatabaseOperations.
  * nextPageToken `string`: `next_page_token` can be sent in a subsequent ListDatabaseOperations call to fetch more of the matching metadata.
  * operations `array`: The list of matching database long-running operations. Each operation's name will be prefixed by the database's name. The operation's metadata field type `metadata.type_url` describes the type of the metadata.
    * items [Operation](#operation)

### ListDatabasesResponse
* ListDatabasesResponse `object`: The response for ListDatabases.
  * databases `array`: Databases that matched the request.
    * items [Database](#database)
  * nextPageToken `string`: `next_page_token` can be sent in a subsequent ListDatabases call to fetch more of the matching databases.

### ListInstanceConfigsResponse
* ListInstanceConfigsResponse `object`: The response for ListInstanceConfigs.
  * instanceConfigs `array`: The list of requested instance configurations.
    * items [InstanceConfig](#instanceconfig)
  * nextPageToken `string`: `next_page_token` can be sent in a subsequent ListInstanceConfigs call to fetch more of the matching instance configurations.

### ListInstancesResponse
* ListInstancesResponse `object`: The response for ListInstances.
  * instances `array`: The list of requested instances.
    * items [Instance](#instance)
  * nextPageToken `string`: `next_page_token` can be sent in a subsequent ListInstances call to fetch more of the matching instances.

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### ListSessionsResponse
* ListSessionsResponse `object`: The response for ListSessions.
  * nextPageToken `string`: `next_page_token` can be sent in a subsequent ListSessions call to fetch more of the matching sessions.
  * sessions `array`: The list of requested sessions.
    * items [Session](#session)

### Mutation
* Mutation `object`: A modification to one or more Cloud Spanner rows. Mutations can be applied to a Cloud Spanner database by sending them in a Commit call.
  * delete [Delete](#delete)
  * insert [Write](#write)
  * insertOrUpdate [Write](#write)
  * replace [Write](#write)
  * update [Write](#write)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### OperationProgress
* OperationProgress `object`: Encapsulates progress related information for a Cloud Spanner long running operation.
  * endTime `string`: If set, the time at which this operation failed or was completed successfully.
  * progressPercent `integer`: Percent completion of the operation. Values are between 0 and 100 inclusive.
  * startTime `string`: Time the request was received.

### OptimizeRestoredDatabaseMetadata
* OptimizeRestoredDatabaseMetadata `object`: Metadata type for the long-running operation used to track the progress of optimizations performed on a newly restored database. This long-running operation is automatically created by the system after the successful completion of a database restore, and cannot be cancelled.
  * name `string`: Name of the restored database being optimized.
  * progress [OperationProgress](#operationprogress)

### PartialResultSet
* PartialResultSet `object`: Partial results from a streaming read or SQL query. Streaming reads and SQL queries better tolerate large result sets, large rows, and large values, but are a little trickier to consume.
  * chunkedValue `boolean`: If true, then the final value in values is chunked, and must be combined with more values from subsequent `PartialResultSet`s to obtain a complete field value.
  * metadata [ResultSetMetadata](#resultsetmetadata)
  * resumeToken `string`: Streaming calls might be interrupted for a variety of reasons, such as TCP connection loss. If this occurs, the stream of results can be resumed by re-sending the original request and including `resume_token`. Note that executing any other transaction in the same session invalidates the token.
  * stats [ResultSetStats](#resultsetstats)
  * values `array`: A streamed result set consists of a stream of values, which might be split into many `PartialResultSet` messages to accommodate large rows and/or large values. Every N complete values defines a row, where N is equal to the number of entries in metadata.row_type.fields. Most values are encoded based on type as described here. It is possible that the last value in values is "chunked", meaning that the rest of the value is sent in subsequent `PartialResultSet`(s). This is denoted by the chunked_value field. Two or more chunked values can be merged to form a complete value as follows: * `bool/number/null`: cannot be chunked * `string`: concatenate the strings * `list`: concatenate the lists. If the last element in a list is a `string`, `list`, or `object`, merge it with the first element in the next list by applying these rules recursively. * `object`: concatenate the (field name, field value) pairs. If a field name is duplicated, then apply these rules recursively to merge the field values. Some examples of merging: # Strings are concatenated. "foo", "bar" => "foobar" # Lists of non-strings are concatenated. [2, 3], [4] => [2, 3, 4] # Lists are concatenated, but the last and first elements are merged # because they are strings. ["a", "b"], ["c", "d"] => ["a", "bc", "d"] # Lists are concatenated, but the last and first elements are merged # because they are lists. Recursively, the last and first elements # of the inner lists are merged because they are strings. ["a", ["b", "c"]], [["d"], "e"] => ["a", ["b", "cd"], "e"] # Non-overlapping object fields are combined. {"a": "1"}, {"b": "2"} => {"a": "1", "b": 2"} # Overlapping object fields are merged. {"a": "1"}, {"a": "2"} => {"a": "12"} # Examples of merging objects containing lists of strings. {"a": ["1"]}, {"a": ["2"]} => {"a": ["12"]} For a more complete example, suppose a streaming SQL query is yielding a result set whose rows contain a single string field. The following `PartialResultSet`s might be yielded: { "metadata": { ... } "values": ["Hello", "W"] "chunked_value": true "resume_token": "Af65..." } { "values": ["orl"] "chunked_value": true "resume_token": "Bqp2..." } { "values": ["d"] "resume_token": "Zx1B..." } This sequence of `PartialResultSet`s encodes two rows, one containing the field value `"Hello"`, and a second containing the field value `"World" = "W" + "orl" + "d"`.

### Partition
* Partition `object`: Information returned for each partition returned in a PartitionResponse.
  * partitionToken `string`: This token can be passed to Read, StreamingRead, ExecuteSql, or ExecuteStreamingSql requests to restrict the results to those identified by this partition token.

### PartitionOptions
* PartitionOptions `object`: Options for a PartitionQueryRequest and PartitionReadRequest.
  * maxPartitions `string`: **Note:** This hint is currently ignored by PartitionQuery and PartitionRead requests. The desired maximum number of partitions to return. For example, this may be set to the number of workers available. The default for this option is currently 10,000. The maximum value is currently 200,000. This is only a hint. The actual number of partitions returned may be smaller or larger than this maximum count request.
  * partitionSizeBytes `string`: **Note:** This hint is currently ignored by PartitionQuery and PartitionRead requests. The desired data size for each partition generated. The default for this option is currently 1 GiB. This is only a hint. The actual size of each partition may be smaller or larger than this size request.

### PartitionQueryRequest
* PartitionQueryRequest `object`: The request for PartitionQuery
  * paramTypes `object`: It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL query parameters. See the definition of Type for more information about SQL types.
  * params `object`: Parameter names and values that bind to placeholders in the SQL string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters.
  * partitionOptions [PartitionOptions](#partitionoptions)
  * sql `string`: Required. The query request to generate partitions for. The request will fail if the query is not root partitionable. The query plan of a root partitionable query has a single distributed union operator. A distributed union operator conceptually divides one or more tables into multiple splits, remotely evaluates a subquery independently on each split, and then unions all results. This must not contain DML commands, such as INSERT, UPDATE, or DELETE. Use ExecuteStreamingSql with a PartitionedDml transaction for large, partition-friendly DML operations.
  * transaction [TransactionSelector](#transactionselector)

### PartitionReadRequest
* PartitionReadRequest `object`: The request for PartitionRead
  * columns `array`: The columns of table to be returned for each row matching this request.
    * items `string`
  * index `string`: If non-empty, the name of an index on table. This index is used instead of the table primary key when interpreting key_set and sorting result rows. See key_set for further information.
  * keySet [KeySet](#keyset)
  * partitionOptions [PartitionOptions](#partitionoptions)
  * table `string`: Required. The name of the table in the database to be read.
  * transaction [TransactionSelector](#transactionselector)

### PartitionResponse
* PartitionResponse `object`: The response for PartitionQuery or PartitionRead
  * partitions `array`: Partitions created by this request.
    * items [Partition](#partition)
  * transaction [Transaction](#transaction)

### PartitionedDml
* PartitionedDml `object`: Message type to initiate a Partitioned DML transaction.

### PlanNode
* PlanNode `object`: Node information for nodes appearing in a QueryPlan.plan_nodes.
  * childLinks `array`: List of child node `index`es and their relationship to this parent.
    * items [ChildLink](#childlink)
  * displayName `string`: The display name for the node.
  * executionStats `object`: The execution statistics associated with the node, contained in a group of key-value pairs. Only present if the plan was returned as a result of a profile query. For example, number of executions, number of rows/time per execution etc.
  * index `integer`: The `PlanNode`'s index in node list.
  * kind `string` (values: KIND_UNSPECIFIED, RELATIONAL, SCALAR): Used to determine the type of node. May be needed for visualizing different kinds of nodes differently. For example, If the node is a SCALAR node, it will have a condensed representation which can be used to directly embed a description of the node in its parent.
  * metadata `object`: Attributes relevant to the node contained in a group of key-value pairs. For example, a Parameter Reference node could have the following information in its metadata: { "parameter_reference": "param1", "parameter_type": "array" }
  * shortRepresentation [ShortRepresentation](#shortrepresentation)

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### QueryOptions
* QueryOptions `object`: Query optimizer configuration.
  * optimizerVersion `string`: An option to control the selection of optimizer version. This parameter allows individual queries to pick different query optimizer versions. Specifying "latest" as a value instructs Cloud Spanner to use the latest supported query optimizer version. If not specified, Cloud Spanner uses optimizer version set at the database level options. Any other positive integer (from the list of supported optimizer versions) overrides the default optimizer version for query execution. The list of supported optimizer versions can be queried from SPANNER_SYS.SUPPORTED_OPTIMIZER_VERSIONS. Executing a SQL statement with an invalid optimizer version will fail with a syntax error (`INVALID_ARGUMENT`) status. See https://cloud.google.com/spanner/docs/query-optimizer/manage-query-optimizer for more information on managing the query optimizer. The `optimizer_version` statement hint has precedence over this setting.

### QueryPlan
* QueryPlan `object`: Contains an ordered list of nodes appearing in the query plan.
  * planNodes `array`: The nodes in the query plan. Plan nodes are returned in pre-order starting with the plan root. Each PlanNode's `id` corresponds to its index in `plan_nodes`.
    * items [PlanNode](#plannode)

### ReadOnly
* ReadOnly `object`: Message type to initiate a read-only transaction.
  * exactStaleness `string`: Executes all reads at a timestamp that is `exact_staleness` old. The timestamp is chosen soon after the read is started. Guarantees that all writes that have committed more than the specified number of seconds ago are visible. Because Cloud Spanner chooses the exact timestamp, this mode works even if the client's local clock is substantially skewed from Cloud Spanner commit timestamps. Useful for reading at nearby replicas without the distributed timestamp negotiation overhead of `max_staleness`.
  * maxStaleness `string`: Read data at a timestamp >= `NOW - max_staleness` seconds. Guarantees that all writes that have committed more than the specified number of seconds ago are visible. Because Cloud Spanner chooses the exact timestamp, this mode works even if the client's local clock is substantially skewed from Cloud Spanner commit timestamps. Useful for reading the freshest data available at a nearby replica, while bounding the possible staleness if the local replica has fallen behind. Note that this option can only be used in single-use transactions.
  * minReadTimestamp `string`: Executes all reads at a timestamp >= `min_read_timestamp`. This is useful for requesting fresher data than some previous read, or data that is fresh enough to observe the effects of some previously committed transaction whose timestamp is known. Note that this option can only be used in single-use transactions. A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds. Example: `"2014-10-02T15:01:23.045123456Z"`.
  * readTimestamp `string`: Executes all reads at the given timestamp. Unlike other modes, reads at a specific timestamp are repeatable; the same read at the same timestamp always returns the same data. If the timestamp is in the future, the read will block until the specified timestamp, modulo the read's deadline. Useful for large scale consistent reads such as mapreduces, or for coordinating many reads against a consistent snapshot of the data. A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds. Example: `"2014-10-02T15:01:23.045123456Z"`.
  * returnReadTimestamp `boolean`: If true, the Cloud Spanner-selected read timestamp is included in the Transaction message that describes the transaction.
  * strong `boolean`: Read at a timestamp where all previously committed transactions are visible.

### ReadRequest
* ReadRequest `object`: The request for Read and StreamingRead.
  * columns `array`: Required. The columns of table to be returned for each row matching this request.
    * items `string`
  * index `string`: If non-empty, the name of an index on table. This index is used instead of the table primary key when interpreting key_set and sorting result rows. See key_set for further information.
  * keySet [KeySet](#keyset)
  * limit `string`: If greater than zero, only the first `limit` rows are yielded. If `limit` is zero, the default is no limit. A limit cannot be specified if `partition_token` is set.
  * partitionToken `string`: If present, results will be restricted to the specified partition previously created using PartitionRead(). There must be an exact match for the values of fields common to this message and the PartitionReadRequest message used to create this partition_token.
  * resumeToken `string`: If this request is resuming a previously interrupted read, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new read to resume where the last read left off. The rest of the request parameters must exactly match the request that yielded this token.
  * table `string`: Required. The name of the table in the database to be read.
  * transaction [TransactionSelector](#transactionselector)

### ReadWrite
* ReadWrite `object`: Message type to initiate a read-write transaction. Currently this transaction type has no options.

### ReplicaInfo
* ReplicaInfo `object`
  * defaultLeaderLocation `boolean`: If true, this location is designated as the default leader location where leader replicas are placed. See the [region types documentation](https://cloud.google.com/spanner/docs/instances#region_types) for more details.
  * location `string`: The location of the serving resources, e.g. "us-central1".
  * type `string` (values: TYPE_UNSPECIFIED, READ_WRITE, READ_ONLY, WITNESS): The type of replica.

### RestoreDatabaseMetadata
* RestoreDatabaseMetadata `object`: Metadata type for the long-running operation returned by RestoreDatabase.
  * backupInfo [BackupInfo](#backupinfo)
  * cancelTime `string`: The time at which cancellation of this operation was received. Operations.CancelOperation starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
  * name `string`: Name of the database being created and restored to.
  * optimizeDatabaseOperationName `string`: If exists, the name of the long-running operation that will be used to track the post-restore optimization process to optimize the performance of the restored database, and remove the dependency on the restore source. The name is of the form `projects//instances//databases//operations/` where the is the name of database being created and restored to. The metadata type of the long-running operation is OptimizeRestoredDatabaseMetadata. This long-running operation will be automatically created by the system after the RestoreDatabase long-running operation completes successfully. This operation will not be created if the restore was not successful.
  * progress [OperationProgress](#operationprogress)
  * sourceType `string` (values: TYPE_UNSPECIFIED, BACKUP): The type of the restore source.

### RestoreDatabaseRequest
* RestoreDatabaseRequest `object`: The request for RestoreDatabase.
  * backup `string`: Name of the backup from which to restore. Values are of the form `projects//instances//backups/`.
  * databaseId `string`: Required. The id of the database to create and restore to. This database must not already exist. The `database_id` appended to `parent` forms the full database name of the form `projects//instances//databases/`.

### RestoreInfo
* RestoreInfo `object`: Information about the database restore.
  * backupInfo [BackupInfo](#backupinfo)
  * sourceType `string` (values: TYPE_UNSPECIFIED, BACKUP): The type of the restore source.

### ResultSet
* ResultSet `object`: Results from Read or ExecuteSql.
  * metadata [ResultSetMetadata](#resultsetmetadata)
  * rows `array`: Each element in `rows` is a row whose format is defined by metadata.row_type. The ith element in each row matches the ith field in metadata.row_type. Elements are encoded based on type as described here.
    * items `array`
  * stats [ResultSetStats](#resultsetstats)

### ResultSetMetadata
* ResultSetMetadata `object`: Metadata about a ResultSet or PartialResultSet.
  * rowType [StructType](#structtype)
  * transaction [Transaction](#transaction)

### ResultSetStats
* ResultSetStats `object`: Additional statistics about a ResultSet or PartialResultSet.
  * queryPlan [QueryPlan](#queryplan)
  * queryStats `object`: Aggregated statistics from the execution of the query. Only present when the query is profiled. For example, a query could return the statistics as follows: { "rows_returned": "3", "elapsed_time": "1.22 secs", "cpu_time": "1.19 secs" }
  * rowCountExact `string`: Standard DML returns an exact count of rows that were modified.
  * rowCountLowerBound `string`: Partitioned DML does not offer exactly-once semantics, so it returns a lower bound of the rows modified.

### RollbackRequest
* RollbackRequest `object`: The request for Rollback.
  * transactionId `string`: Required. The transaction to roll back.

### Session
* Session `object`: A session in the Cloud Spanner API.
  * approximateLastUseTime `string`: Output only. The approximate timestamp when the session is last used. It is typically earlier than the actual last use time.
  * createTime `string`: Output only. The timestamp when the session is created.
  * labels `object`: The labels for the session. * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. * No more than 64 labels can be associated with a given session. See https://goo.gl/xmQnxf for more information on and examples of labels.
  * name `string`: Output only. The name of the session. This is always system-assigned.

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)

### ShortRepresentation
* ShortRepresentation `object`: Condensed representation of a node and its subtree. Only present for `SCALAR` PlanNode(s).
  * description `string`: A string representation of the expression subtree rooted at this node.
  * subqueries `object`: A mapping of (subquery variable name) -> (subquery node id) for cases where the `description` string of this node references a `SCALAR` subquery contained in the expression subtree rooted at this node. The referenced `SCALAR` subquery may not necessarily be a direct child of this node.

### Statement
* Statement `object`: A single DML statement.
  * paramTypes `object`: It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.
  * params `object`: Parameter names and values that bind to placeholders in the DML string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters.
  * sql `string`: Required. The DML string.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### StructType
* StructType `object`: `StructType` defines the fields of a STRUCT type.
  * fields `array`: The list of fields that make up this struct. Order is significant, because values of this struct type are represented as lists, where the order of field values matches the order of fields in the StructType. In turn, the order of fields matches the order of columns in a read request, or the order of fields in the `SELECT` clause of a query.
    * items [Field](#field)

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: REQUIRED: The set of permissions to check for 'resource'. Permissions with wildcards (such as '*', 'spanner.*', 'spanner.instances.*') are not allowed.
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

### Transaction
* Transaction `object`: A transaction.
  * id `string`: `id` may be used to identify the transaction in subsequent Read, ExecuteSql, Commit, or Rollback calls. Single-use read-only transactions do not have IDs, because single-use transactions do not support multiple requests.
  * readTimestamp `string`: For snapshot read-only transactions, the read timestamp chosen for the transaction. Not returned by default: see TransactionOptions.ReadOnly.return_read_timestamp. A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds. Example: `"2014-10-02T15:01:23.045123456Z"`.

### TransactionOptions
* TransactionOptions `object`: # Transactions Each session can have at most one active transaction at a time (note that standalone reads and queries use a transaction internally and do count towards the one transaction limit). After the active transaction is completed, the session can immediately be re-used for the next transaction. It is not necessary to create a new session for each transaction. # Transaction Modes Cloud Spanner supports three transaction modes: 1. Locking read-write. This type of transaction is the only way to write data into Cloud Spanner. These transactions rely on pessimistic locking and, if necessary, two-phase commit. Locking read-write transactions may abort, requiring the application to retry. 2. Snapshot read-only. This transaction type provides guaranteed consistency across several reads, but does not allow writes. Snapshot read-only transactions can be configured to read at timestamps in the past. Snapshot read-only transactions do not need to be committed. 3. Partitioned DML. This type of transaction is used to execute a single Partitioned DML statement. Partitioned DML partitions the key space and runs the DML statement over each partition in parallel using separate, internal transactions that commit independently. Partitioned DML transactions do not need to be committed. For transactions that only read, snapshot read-only transactions provide simpler semantics and are almost always faster. In particular, read-only transactions do not take locks, so they do not conflict with read-write transactions. As a consequence of not taking locks, they also do not abort, so retry loops are not needed. Transactions may only read/write data in a single database. They may, however, read/write data in different tables within that database. ## Locking Read-Write Transactions Locking transactions may be used to atomically read-modify-write data anywhere in a database. This type of transaction is externally consistent. Clients should attempt to minimize the amount of time a transaction is active. Faster transactions commit with higher probability and cause less contention. Cloud Spanner attempts to keep read locks active as long as the transaction continues to do reads, and the transaction has not been terminated by Commit or Rollback. Long periods of inactivity at the client may cause Cloud Spanner to release a transaction's locks and abort it. Conceptually, a read-write transaction consists of zero or more reads or SQL statements followed by Commit. At any time before Commit, the client can send a Rollback request to abort the transaction. ### Semantics Cloud Spanner can commit the transaction if all read locks it acquired are still valid at commit time, and it is able to acquire write locks for all writes. Cloud Spanner can abort the transaction for any reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees that the transaction has not modified any user data in Cloud Spanner. Unless the transaction commits, Cloud Spanner makes no guarantees about how long the transaction's locks were held for. It is an error to use Cloud Spanner locks for any sort of mutual exclusion other than between Cloud Spanner transactions themselves. ### Retrying Aborted Transactions When a transaction aborts, the application can choose to retry the whole transaction again. To maximize the chances of successfully committing the retry, the client should execute the retry in the same session as the original attempt. The original session's lock priority increases with each consecutive abort, meaning that each attempt has a slightly better chance of success than the previous. Under some circumstances (e.g., many transactions attempting to modify the same row(s)), a transaction can abort many times in a short period before successfully committing. Thus, it is not a good idea to cap the number of retries a transaction can attempt; instead, it is better to limit the total amount of wall time spent retrying. ### Idle Transactions A transaction is considered idle if it has no outstanding reads or SQL queries and has not started a read or SQL query within the last 10 seconds. Idle transactions can be aborted by Cloud Spanner so that they don't hold on to locks indefinitely. In that case, the commit will fail with error `ABORTED`. If this behavior is undesirable, periodically executing a simple SQL query in the transaction (e.g., `SELECT 1`) prevents the transaction from becoming idle. ## Snapshot Read-Only Transactions Snapshot read-only transactions provides a simpler method than locking read-write transactions for doing several consistent reads. However, this type of transaction does not support writes. Snapshot transactions do not take locks. Instead, they work by choosing a Cloud Spanner timestamp, then executing all reads at that timestamp. Since they do not acquire locks, they do not block concurrent read-write transactions. Unlike locking read-write transactions, snapshot read-only transactions never abort. They can fail if the chosen read timestamp is garbage collected; however, the default garbage collection policy is generous enough that most applications do not need to worry about this in practice. Snapshot read-only transactions do not need to call Commit or Rollback (and in fact are not permitted to do so). To execute a snapshot transaction, the client specifies a timestamp bound, which tells Cloud Spanner how to choose a read timestamp. The types of timestamp bound are: - Strong (the default). - Bounded staleness. - Exact staleness. If the Cloud Spanner database to be read is geographically distributed, stale read-only transactions can execute more quickly than strong or read-write transaction, because they are able to execute far from the leader replica. Each type of timestamp bound is discussed in detail below. ### Strong Strong reads are guaranteed to see the effects of all transactions that have committed before the start of the read. Furthermore, all rows yielded by a single read are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Strong reads are not repeatable: two consecutive strong read-only transactions might return inconsistent results if there are concurrent writes. If consistency across reads is required, the reads should be executed within a transaction or at an exact read timestamp. See TransactionOptions.ReadOnly.strong. ### Exact Staleness These timestamp bounds execute reads at a user-specified timestamp. Reads at a timestamp are guaranteed to see a consistent prefix of the global transaction history: they observe modifications done by all transactions with a commit timestamp <= the read timestamp, and observe none of the modifications done by transactions with a larger commit timestamp. They will block until all conflicting transactions that may be assigned commit timestamps <= the read timestamp have finished. The timestamp can either be expressed as an absolute Cloud Spanner commit timestamp or a staleness relative to the current time. These modes do not require a "negotiation phase" to pick a timestamp. As a result, they execute slightly faster than the equivalent boundedly stale concurrency modes. On the other hand, boundedly stale reads usually return fresher results. See TransactionOptions.ReadOnly.read_timestamp and TransactionOptions.ReadOnly.exact_staleness. ### Bounded Staleness Bounded staleness modes allow Cloud Spanner to pick the read timestamp, subject to a user-provided staleness bound. Cloud Spanner chooses the newest timestamp within the staleness bound that allows execution of the reads at the closest available replica without blocking. All rows yielded are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Boundedly stale reads are not repeatable: two stale reads, even if they use the same staleness bound, can execute at different timestamps and thus return inconsistent results. Boundedly stale reads execute in two phases: the first phase negotiates a timestamp among all replicas needed to serve the read. In the second phase, reads are executed at the negotiated timestamp. As a result of the two phase execution, bounded staleness reads are usually a little slower than comparable exact staleness reads. However, they are typically able to return fresher results, and are more likely to execute at the closest replica. Because the timestamp negotiation requires up-front knowledge of which rows will be read, it can only be used with single-use read-only transactions. See TransactionOptions.ReadOnly.max_staleness and TransactionOptions.ReadOnly.min_read_timestamp. ### Old Read Timestamps and Garbage Collection Cloud Spanner continuously garbage collects deleted and overwritten data in the background to reclaim storage space. This process is known as "version GC". By default, version GC reclaims versions after they are one hour old. Because of this, Cloud Spanner cannot perform reads at read timestamps more than one hour in the past. This restriction also applies to in-progress reads and/or SQL queries whose timestamp become too old while executing. Reads and SQL queries with too-old read timestamps fail with the error `FAILED_PRECONDITION`. ## Partitioned DML Transactions Partitioned DML transactions are used to execute DML statements with a different execution strategy that provides different, and often better, scalability properties for large, table-wide operations than DML in a ReadWrite transaction. Smaller scoped statements, such as an OLTP workload, should prefer using ReadWrite transactions. Partitioned DML partitions the keyspace and runs the DML statement on each partition in separate, internal transactions. These transactions commit automatically when complete, and run independently from one another. To reduce lock contention, this execution strategy only acquires read locks on rows that match the WHERE clause of the statement. Additionally, the smaller per-partition transactions hold locks for less time. That said, Partitioned DML is not a drop-in replacement for standard DML used in ReadWrite transactions. - The DML statement must be fully-partitionable. Specifically, the statement must be expressible as the union of many statements which each access only a single row of the table. - The statement is not applied atomically to all rows of the table. Rather, the statement is applied atomically to partitions of the table, in independent transactions. Secondary index rows are updated atomically with the base table rows. - Partitioned DML does not guarantee exactly-once execution semantics against a partition. The statement will be applied at least once to each partition. It is strongly recommended that the DML statement should be idempotent to avoid unexpected results. For instance, it is potentially dangerous to run a statement such as `UPDATE table SET column = column + 1` as it could be run multiple times against some rows. - The partitions are committed automatically - there is no support for Commit or Rollback. If the call returns an error, or if the client issuing the ExecuteSql call dies, it is possible that some rows had the statement executed on them successfully. It is also possible that statement was never executed against other rows. - Partitioned DML transactions may only contain the execution of a single DML statement via ExecuteSql or ExecuteStreamingSql. - If any error is encountered during the execution of the partitioned DML operation (for instance, a UNIQUE INDEX violation, division by zero, or a value that cannot be stored due to schema constraints), then the operation is stopped at that point and an error is returned. It is possible that at this point, some partitions have been committed (or even committed multiple times), and other partitions have not been run at all. Given the above, Partitioned DML is good fit for large, database-wide, operations that are idempotent, such as deleting old rows from a very large table.
  * partitionedDml [PartitionedDml](#partitioneddml)
  * readOnly [ReadOnly](#readonly)
  * readWrite [ReadWrite](#readwrite)

### TransactionSelector
* TransactionSelector `object`: This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions.
  * begin [TransactionOptions](#transactionoptions)
  * id `string`: Execute the read or SQL query in a previously-started transaction.
  * singleUse [TransactionOptions](#transactionoptions)

### Type
* Type `object`: `Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query.
  * arrayElementType [Type](#type)
  * code `string` (values: TYPE_CODE_UNSPECIFIED, BOOL, INT64, FLOAT64, TIMESTAMP, DATE, STRING, BYTES, ARRAY, STRUCT, NUMERIC): Required. The TypeCode for this type.
  * structType [StructType](#structtype)

### UpdateDatabaseDdlMetadata
* UpdateDatabaseDdlMetadata `object`: Metadata type for the operation returned by UpdateDatabaseDdl.
  * commitTimestamps `array`: Reports the commit timestamps of all statements that have succeeded so far, where `commit_timestamps[i]` is the commit timestamp for the statement `statements[i]`.
    * items `string`
  * database `string`: The database being modified.
  * statements `array`: For an update this list contains all the statements. For an individual statement, this list contains only that statement.
    * items `string`
  * throttled `boolean`: Output only. When true, indicates that the operation is throttled e.g due to resource constraints. When resources become available the operation will resume and this field will be false again.

### UpdateDatabaseDdlRequest
* UpdateDatabaseDdlRequest `object`: Enqueues the given DDL statements to be applied, in order but not necessarily all at once, to the database schema at some point (or points) in the future. The server checks that the statements are executable (syntactically valid, name tables that exist, etc.) before enqueueing them, but they may still fail upon later execution (e.g., if a statement from another batch of statements is applied first and it conflicts in some way, or if there is some data-related problem like a `NULL` value in a column to which `NOT NULL` would be added). If a statement fails, all subsequent statements in the batch are automatically cancelled. Each batch of statements is assigned a name which can be used with the Operations API to monitor progress. See the operation_id field for more details.
  * operationId `string`: If empty, the new update request is assigned an automatically-generated operation ID. Otherwise, `operation_id` is used to construct the name of the resulting Operation. Specifying an explicit operation ID simplifies determining whether the statements were executed in the event that the UpdateDatabaseDdl call is replayed, or the return value is otherwise lost: the database and `operation_id` fields can be combined to form the name of the resulting longrunning.Operation: `/operations/`. `operation_id` should be unique within the database, and must be a valid identifier: `a-z*`. Note that automatically-generated operation IDs always begin with an underscore. If the named operation already exists, UpdateDatabaseDdl returns `ALREADY_EXISTS`.
  * statements `array`: Required. DDL statements to be applied to the database.
    * items `string`

### UpdateInstanceMetadata
* UpdateInstanceMetadata `object`: Metadata type for the operation returned by UpdateInstance.
  * cancelTime `string`: The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is guaranteed to succeed) and cannot be cancelled again.
  * endTime `string`: The time at which this operation failed or was completed successfully.
  * instance [Instance](#instance)
  * startTime `string`: The time at which UpdateInstance request was received.

### UpdateInstanceRequest
* UpdateInstanceRequest `object`: The request for UpdateInstance.
  * fieldMask `string`: Required. A mask specifying which fields in Instance should be updated. The field mask must always be specified; this prevents any future fields in Instance from being erased accidentally by clients that do not know about them.
  * instance [Instance](#instance)

### Write
* Write `object`: Arguments to insert, update, insert_or_update, and replace operations.
  * columns `array`: The names of the columns in table to be written. The list of columns must contain enough columns to allow Cloud Spanner to derive values for all primary key columns in the row(s) to be modified.
    * items `string`
  * table `string`: Required. The table whose rows will be written.
  * values `array`: The values to be written. `values` can contain more than one list of values. If it does, then multiple rows are written, one for each entry in `values`. Each list in `values` must have exactly as many entries as there are entries in columns above. Sending multiple lists is equivalent to sending multiple `Mutation`s, each containing one `values` entry and repeating table and columns. Individual values in each list are encoded as described here.
    * items `array`


