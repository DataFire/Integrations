# @datafire/google_spanner

Client library for Cloud Spanner

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

google_spanner.projects.instances.databases.dropDatabase({}).then(data => {
  console.log(data);
})
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

### projects.instances.databases.dropDatabase
Drops (aka deletes) a Cloud Spanner database.


```js
google_spanner.projects.instances.databases.dropDatabase({
  "database": ""
}, context)
```

#### Input
* input `object`
  * database **required** `string`: Required. The database to be dropped.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [Empty](#empty)

### projects.instances.databases.getDdl
Returns the schema of a Cloud Spanner database as a list of formatted
DDL statements. This method does not show pending schema updates, those may
be queried using the Operations API.


```js
google_spanner.projects.instances.databases.getDdl({
  "database": ""
}, context)
```

#### Input
* input `object`
  * database **required** `string`: Required. The database whose schema we wish to get.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GetDatabaseDdlResponse](#getdatabaseddlresponse)

### projects.instances.databases.updateDdl
Updates the schema of a Cloud Spanner database by
creating/altering/dropping tables, columns, indexes, etc. The returned
long-running operation will have a name of
the format `<database_name>/operations/<operation_id>` and can be used to
track execution of the schema change(s). The
metadata field type is
UpdateDatabaseDdlMetadata.  The operation has no response.


```js
google_spanner.projects.instances.databases.updateDdl({
  "database": ""
}, context)
```

#### Input
* input `object`
  * database **required** `string`: Required. The database to update.
  * body [UpdateDatabaseDdlRequest](#updatedatabaseddlrequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [Operation](#operation)

### projects.instances.databases.sessions.list
Lists all sessions in a given database.


```js
google_spanner.projects.instances.databases.sessions.list({
  "database": ""
}, context)
```

#### Input
* input `object`
  * database **required** `string`: Required. The database in which to list sessions.
  * filter `string`: An expression for filtering the results of the request. Filter rules are
  * pageSize `integer`: Number of sessions to be returned in the response. If 0 or less, defaults
  * pageToken `string`: If non-empty, `page_token` should contain a
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [ListSessionsResponse](#listsessionsresponse)

### projects.instances.databases.sessions.create
Creates a new session. A session can be used to perform
transactions that read and/or modify data in a Cloud Spanner database.
Sessions are meant to be reused for many consecutive
transactions.

Sessions can only execute one transaction at a time. To execute
multiple concurrent read-write/write-only transactions, create
multiple sessions. Note that standalone reads and queries use a
transaction internally, and count toward the one transaction
limit.

Cloud Spanner limits the number of sessions that can exist at any given
time; thus, it is a good idea to delete idle and/or unneeded sessions.
Aside from explicit deletes, Cloud Spanner can delete sessions for which no
operations are sent for more than an hour. If a session is deleted,
requests to it return `NOT_FOUND`.

Idle sessions can be kept alive by sending a trivial SQL query
periodically, e.g., `"SELECT 1"`.


```js
google_spanner.projects.instances.databases.sessions.create({
  "database": ""
}, context)
```

#### Input
* input `object`
  * body [CreateSessionRequest](#createsessionrequest)
  * database **required** `string`: Required. The database in which the new session is created.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [Session](#session)

### projects.instances.operations.delete
Deletes a long-running operation. This method indicates that the client is
no longer interested in the operation result. It does not cancel the
operation. If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.


```js
google_spanner.projects.instances.operations.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be deleted.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [Empty](#empty)

### projects.instanceConfigs.get
Gets information about a particular instance configuration.


```js
google_spanner.projects.instanceConfigs.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the requested instance configuration. Values are of
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [InstanceConfig](#instanceconfig)

### projects.instances.patch
Updates an instance, and begins allocating or releasing resources
as requested. The returned long-running
operation can be used to track the
progress of updating the instance. If the named instance does not
exist, returns `NOT_FOUND`.

Immediately upon completion of this request:

  * For resource types for which a decrease in the instance's allocation
    has been requested, billing is based on the newly-requested level.

Until completion of the returned operation:

  * Cancelling the operation sets its metadata's
    cancel_time, and begins
    restoring resources to their pre-request values. The operation
    is guaranteed to succeed at undoing all resource changes,
    after which point it terminates with a `CANCELLED` status.
  * All other attempts to modify the instance are rejected.
  * Reading the instance via the API continues to give the pre-request
    resource levels.

Upon completion of the returned operation:

  * Billing begins for all successfully-allocated resources (some types
    may have lower than the requested levels).
  * All newly-reserved resources are available for serving the instance's
    tables.
  * The instance's new resource levels are readable via the API.

The returned long-running operation will
have a name of the format `<instance_name>/operations/<operation_id>` and
can be used to track the instance modification.  The
metadata field type is
UpdateInstanceMetadata.
The response field type is
Instance, if successful.

Authorization requires `spanner.instances.update` permission on
resource name.


```js
google_spanner.projects.instances.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. A unique identifier for the instance, which cannot be changed
  * body [UpdateInstanceRequest](#updateinstancerequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [Operation](#operation)

### projects.instances.operations.cancel
Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.


```js
google_spanner.projects.instances.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [Empty](#empty)

### projects.instances.databases.list
Lists Cloud Spanner databases.


```js
google_spanner.projects.instances.databases.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The instance whose databases should be listed.
  * pageToken `string`: If non-empty, `page_token` should contain a
  * pageSize `integer`: Number of databases to be returned in the response. If 0 or less,
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [ListDatabasesResponse](#listdatabasesresponse)

### projects.instances.databases.create
Creates a new Cloud Spanner database and starts to prepare it for serving.
The returned long-running operation will
have a name of the format `<database_name>/operations/<operation_id>` and
can be used to track preparation of the database. The
metadata field type is
CreateDatabaseMetadata. The
response field type is
Database, if successful.


```js
google_spanner.projects.instances.databases.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the instance that will serve the new database.
  * body [CreateDatabaseRequest](#createdatabaserequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [Operation](#operation)

### projects.instanceConfigs.list
Lists the supported instance configurations for a given project.


```js
google_spanner.projects.instanceConfigs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project for which a list of supported instance
  * pageToken `string`: If non-empty, `page_token` should contain a
  * pageSize `integer`: Number of instance configurations to be returned in the response. If 0 or
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [ListInstanceConfigsResponse](#listinstanceconfigsresponse)

### projects.instances.list
Lists all instances in the given project.


```js
google_spanner.projects.instances.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project for which a list of instances is
  * pageToken `string`: If non-empty, `page_token` should contain a
  * pageSize `integer`: Number of instances to be returned in the response. If 0 or less, defaults
  * filter `string`: An expression for filtering the results of the request. Filter rules are
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [ListInstancesResponse](#listinstancesresponse)

### projects.instances.create
Creates an instance and begins preparing it to begin serving. The
returned long-running operation
can be used to track the progress of preparing the new
instance. The instance name is assigned by the caller. If the
named instance already exists, `CreateInstance` returns
`ALREADY_EXISTS`.

Immediately upon completion of this request:

  * The instance is readable via the API, with all requested attributes
    but no allocated resources. Its state is `CREATING`.

Until completion of the returned operation:

  * Cancelling the operation renders the instance immediately unreadable
    via the API.
  * The instance can be deleted.
  * All other attempts to modify the instance are rejected.

Upon completion of the returned operation:

  * Billing for all successfully-allocated resources begins (some types
    may have lower than the requested levels).
  * Databases can be created in the instance.
  * The instance's allocated resource levels are readable via the API.
  * The instance's state becomes `READY`.

The returned long-running operation will
have a name of the format `<instance_name>/operations/<operation_id>` and
can be used to track creation of the instance.  The
metadata field type is
CreateInstanceMetadata.
The response field type is
Instance, if successful.


```js
google_spanner.projects.instances.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project in which to create the instance. Values
  * body [CreateInstanceRequest](#createinstancerequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [Operation](#operation)

### projects.instances.databases.getIamPolicy
Gets the access control policy for a database resource. Returns an empty
policy if a database exists but does not have a policy set.

Authorization requires `spanner.databases.getIamPolicy` permission on
resource.


```js
google_spanner.projects.instances.databases.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
  * body [GetIamPolicyRequest](#getiampolicyrequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [Policy](#policy)

### projects.instances.databases.setIamPolicy
Sets the access control policy on a database resource. Replaces any
existing policy.

Authorization requires `spanner.databases.setIamPolicy` permission on
resource.


```js
google_spanner.projects.instances.databases.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for databases resources.
  * body [SetIamPolicyRequest](#setiampolicyrequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [Policy](#policy)

### projects.instances.databases.testIamPermissions
Returns permissions that the caller has on the specified database resource.

Attempting this RPC on a non-existent Cloud Spanner database will result in
a NOT_FOUND error if the user has `spanner.databases.list` permission on
the containing Cloud Spanner instance. Otherwise returns an empty set of
permissions.


```js
google_spanner.projects.instances.databases.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [TestIamPermissionsResponse](#testiampermissionsresponse)

### projects.instances.databases.sessions.beginTransaction
Begins a new transaction. This step can often be skipped:
Read, ExecuteSql and
Commit can begin a new transaction as a
side-effect.


```js
google_spanner.projects.instances.databases.sessions.beginTransaction({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the transaction runs.
  * body [BeginTransactionRequest](#begintransactionrequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [Transaction](#transaction)

### projects.instances.databases.sessions.commit
Commits a transaction. The request includes the mutations to be
applied to rows in the database.

`Commit` might return an `ABORTED` error. This can occur at any time;
commonly, the cause is conflicts with concurrent
transactions. However, it can also happen for a variety of other
reasons. If `Commit` returns `ABORTED`, the caller should re-attempt
the transaction from the beginning, re-using the same session.


```js
google_spanner.projects.instances.databases.sessions.commit({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the transaction to be committed is running.
  * body [CommitRequest](#commitrequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [CommitResponse](#commitresponse)

### projects.instances.databases.sessions.executeSql
Executes an SQL query, returning all rows in a single reply. This
method cannot be used to return a result set larger than 10 MiB;
if the query yields more data than that, the query fails with
a `FAILED_PRECONDITION` error.

Queries inside read-write transactions might return `ABORTED`. If
this occurs, the application should restart the transaction from
the beginning. See Transaction for more details.

Larger result sets can be fetched in streaming fashion by calling
ExecuteStreamingSql instead.


```js
google_spanner.projects.instances.databases.sessions.executeSql({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the SQL query should be performed.
  * body [ExecuteSqlRequest](#executesqlrequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [ResultSet](#resultset)

### projects.instances.databases.sessions.executeStreamingSql
Like ExecuteSql, except returns the result
set as a stream. Unlike ExecuteSql, there
is no limit on the size of the returned result set. However, no
individual row in the result set can exceed 100 MiB, and no
column value can exceed 10 MiB.


```js
google_spanner.projects.instances.databases.sessions.executeStreamingSql({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the SQL query should be performed.
  * body [ExecuteSqlRequest](#executesqlrequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [PartialResultSet](#partialresultset)

### projects.instances.databases.sessions.read
Reads rows from the database using key lookups and scans, as a
simple key/value style alternative to
ExecuteSql.  This method cannot be used to
return a result set larger than 10 MiB; if the read matches more
data than that, the read fails with a `FAILED_PRECONDITION`
error.

Reads inside read-write transactions might return `ABORTED`. If
this occurs, the application should restart the transaction from
the beginning. See Transaction for more details.

Larger result sets can be yielded in streaming fashion by calling
StreamingRead instead.


```js
google_spanner.projects.instances.databases.sessions.read({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the read should be performed.
  * body [ReadRequest](#readrequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [ResultSet](#resultset)

### projects.instances.databases.sessions.rollback
Rolls back a transaction, releasing any locks it holds. It is a good
idea to call this for any transaction that includes one or more
Read or ExecuteSql requests and
ultimately decides not to commit.

`Rollback` returns `OK` if it successfully aborts the transaction, the
transaction was already aborted, or the transaction is not
found. `Rollback` never returns `ABORTED`.


```js
google_spanner.projects.instances.databases.sessions.rollback({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the transaction to roll back is running.
  * body [RollbackRequest](#rollbackrequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [Empty](#empty)

### projects.instances.databases.sessions.streamingRead
Like Read, except returns the result set as a
stream. Unlike Read, there is no limit on the
size of the returned result set. However, no individual row in
the result set can exceed 100 MiB, and no column value can exceed
10 MiB.


```js
google_spanner.projects.instances.databases.sessions.streamingRead({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The session in which the read should be performed.
  * body [ReadRequest](#readrequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [PartialResultSet](#partialresultset)



## Definitions

### BeginTransactionRequest
* BeginTransactionRequest `object`: The request for BeginTransaction.
  * options [TransactionOptions](#transactionoptions)

### Binding
* Binding `object`: Associates `members` with a `role`.
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource.
    * items `string`
  * role `string`: Role that is assigned to `members`.

### ChildLink
* ChildLink `object`: Metadata associated with a parent-child relationship appearing in a
  * childIndex `integer`: The node to which the link points.
  * type `string`: The type of the link. For example, in Hash Joins this could be used to
  * variable `string`: Only present if the child node is SCALAR and corresponds

### CommitRequest
* CommitRequest `object`: The request for Commit.
  * mutations `array`: The mutations to be executed when this transaction commits. All
    * items [Mutation](#mutation)
  * singleUseTransaction [TransactionOptions](#transactionoptions)
  * transactionId `string`: Commit a previously-started transaction.

### CommitResponse
* CommitResponse `object`: The response for Commit.
  * commitTimestamp `string`: The Cloud Spanner timestamp at which the transaction committed.

### CreateDatabaseMetadata
* CreateDatabaseMetadata `object`: Metadata type for the operation returned by
  * database `string`: The database being created.

### CreateDatabaseRequest
* CreateDatabaseRequest `object`: The request for CreateDatabase.
  * createStatement `string`: Required. A `CREATE DATABASE` statement, which specifies the ID of the
  * extraStatements `array`: An optional list of DDL statements to run inside the newly created
    * items `string`

### CreateInstanceMetadata
* CreateInstanceMetadata `object`: Metadata type for the operation returned by
  * cancelTime `string`: The time at which this operation was cancelled. If set, this operation is
  * endTime `string`: The time at which this operation failed or was completed successfully.
  * instance [Instance](#instance)
  * startTime `string`: The time at which the

### CreateInstanceRequest
* CreateInstanceRequest `object`: The request for CreateInstance.
  * instance [Instance](#instance)
  * instanceId `string`: Required. The ID of the instance to create.  Valid identifiers are of the

### CreateSessionRequest
* CreateSessionRequest `object`: The request for CreateSession.
  * session [Session](#session)

### Database
* Database `object`: A Cloud Spanner database.
  * name `string`: Required. The name of the database. Values are of the form
  * state `string` (values: STATE_UNSPECIFIED, CREATING, READY): Output only. The current database state.

### Delete
* Delete `object`: Arguments to delete operations.
  * keySet [KeySet](#keyset)
  * table `string`: Required. The table whose rows will be deleted.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### ExecuteSqlRequest
* ExecuteSqlRequest `object`: The request for ExecuteSql and
  * paramTypes `object`: It is not always possible for Cloud Spanner to infer the right SQL type
  * params `object`: The SQL query string can contain parameter placeholders. A parameter
  * queryMode `string` (values: NORMAL, PLAN, PROFILE): Used to control the amount of debugging information returned in
  * resumeToken `string`: If this request is resuming a previously interrupted SQL query
  * sql `string`: Required. The SQL query string.
  * transaction [TransactionSelector](#transactionselector)

### Field
* Field `object`: Message representing a single field of a struct.
  * name `string`: The name of the field. For reads, this is the column name. For
  * type [Type](#type)

### GetDatabaseDdlResponse
* GetDatabaseDdlResponse `object`: The response for GetDatabaseDdl.
  * statements `array`: A list of formatted DDL statements defining the schema of the database
    * items `string`

### GetIamPolicyRequest
* GetIamPolicyRequest `object`: Request message for `GetIamPolicy` method.

### Instance
* Instance `object`: An isolated set of Cloud Spanner resources on which databases can be hosted.
  * config `string`: Required. The name of the instance's configuration. Values are of the form
  * displayName `string`: Required. The descriptive name for this instance as it appears in UIs.
  * labels `object`: Cloud Labels are a flexible and lightweight mechanism for organizing cloud
  * name `string`: Required. A unique identifier for the instance, which cannot be changed
  * nodeCount `integer`: Required. The number of nodes allocated to this instance. This may be zero
  * state `string` (values: STATE_UNSPECIFIED, CREATING, READY): Output only. The current instance state. For

### InstanceConfig
* InstanceConfig `object`: A possible configuration for a Cloud Spanner instance. Configurations
  * displayName `string`: The name of this instance configuration as it appears in UIs.
  * name `string`: A unique identifier for the instance configuration.  Values

### KeyRange
* KeyRange `object`: KeyRange represents a range of rows in a table or index.
  * endClosed `array`: If the end is closed, then the range includes all rows whose

  * endOpen `array`: If the end is open, then the range excludes rows whose first

  * startClosed `array`: If the start is closed, then the range includes all rows whose

  * startOpen `array`: If the start is open, then the range excludes rows whose first


### KeySet
* KeySet `object`: `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All
  * all `boolean`: For convenience `all` can be set to `true` to indicate that this
  * keys `array`: A list of specific keys. Entries in `keys` should have exactly as
    * items `array`

  * ranges `array`: A list of key ranges. See KeyRange for more information about
    * items [KeyRange](#keyrange)

### ListDatabasesResponse
* ListDatabasesResponse `object`: The response for ListDatabases.
  * databases `array`: Databases that matched the request.
    * items [Database](#database)
  * nextPageToken `string`: `next_page_token` can be sent in a subsequent

### ListInstanceConfigsResponse
* ListInstanceConfigsResponse `object`: The response for ListInstanceConfigs.
  * instanceConfigs `array`: The list of requested instance configurations.
    * items [InstanceConfig](#instanceconfig)
  * nextPageToken `string`: `next_page_token` can be sent in a subsequent

### ListInstancesResponse
* ListInstancesResponse `object`: The response for ListInstances.
  * instances `array`: The list of requested instances.
    * items [Instance](#instance)
  * nextPageToken `string`: `next_page_token` can be sent in a subsequent

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### ListSessionsResponse
* ListSessionsResponse `object`: The response for ListSessions.
  * nextPageToken `string`: `next_page_token` can be sent in a subsequent
  * sessions `array`: The list of requested sessions.
    * items [Session](#session)

### Mutation
* Mutation `object`: A modification to one or more Cloud Spanner rows.  Mutations can be
  * delete [Delete](#delete)
  * insert [Write](#write)
  * insertOrUpdate [Write](#write)
  * replace [Write](#write)
  * update [Write](#write)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation.  It typically
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: The normal response of the operation in case of success.  If the original

### PartialResultSet
* PartialResultSet `object`: Partial results from a streaming read or SQL query. Streaming reads and
  * chunkedValue `boolean`: If true, then the final value in values is chunked, and must
  * metadata [ResultSetMetadata](#resultsetmetadata)
  * resumeToken `string`: Streaming calls might be interrupted for a variety of reasons, such
  * stats [ResultSetStats](#resultsetstats)
  * values `array`: A streamed result set consists of a stream of values, which might


### PlanNode
* PlanNode `object`: Node information for nodes appearing in a QueryPlan.plan_nodes.
  * childLinks `array`: List of child node `index`es and their relationship to this parent.
    * items [ChildLink](#childlink)
  * displayName `string`: The display name for the node.
  * executionStats `object`: The execution statistics associated with the node, contained in a group of
  * index `integer`: The `PlanNode`'s index in node list.
  * kind `string` (values: KIND_UNSPECIFIED, RELATIONAL, SCALAR): Used to determine the type of node. May be needed for visualizing
  * metadata `object`: Attributes relevant to the node contained in a group of key-value pairs.
  * shortRepresentation [ShortRepresentation](#shortrepresentation)

### Policy
* Policy `object`: Defines an Identity and Access Management (IAM) policy. It is used to
  * bindings `array`: Associates a list of `members` to a `role`.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * version `integer`: Version of the `Policy`. The default version is 0.

### QueryPlan
* QueryPlan `object`: Contains an ordered list of nodes appearing in the query plan.
  * planNodes `array`: The nodes in the query plan. Plan nodes are returned in pre-order starting
    * items [PlanNode](#plannode)

### ReadOnly
* ReadOnly `object`: Message type to initiate a read-only transaction.
  * exactStaleness `string`: Executes all reads at a timestamp that is `exact_staleness`
  * maxStaleness `string`: Read data at a timestamp >= `NOW - max_staleness`
  * minReadTimestamp `string`: Executes all reads at a timestamp >= `min_read_timestamp`.
  * readTimestamp `string`: Executes all reads at the given timestamp. Unlike other modes,
  * returnReadTimestamp `boolean`: If true, the Cloud Spanner-selected read timestamp is included in
  * strong `boolean`: Read at a timestamp where all previously committed transactions

### ReadRequest
* ReadRequest `object`: The request for Read and
  * columns `array`: The columns of table to be returned for each row matching
    * items `string`
  * index `string`: If non-empty, the name of an index on table. This index is
  * keySet [KeySet](#keyset)
  * limit `string`: If greater than zero, only the first `limit` rows are yielded. If `limit`
  * resumeToken `string`: If this request is resuming a previously interrupted read,
  * table `string`: Required. The name of the table in the database to be read.
  * transaction [TransactionSelector](#transactionselector)

### ReadWrite
* ReadWrite `object`: Message type to initiate a read-write transaction. Currently this

### ResultSet
* ResultSet `object`: Results from Read or
  * metadata [ResultSetMetadata](#resultsetmetadata)
  * rows `array`: Each element in `rows` is a row whose format is defined by
    * items `array`

  * stats [ResultSetStats](#resultsetstats)

### ResultSetMetadata
* ResultSetMetadata `object`: Metadata about a ResultSet or PartialResultSet.
  * rowType [StructType](#structtype)
  * transaction [Transaction](#transaction)

### ResultSetStats
* ResultSetStats `object`: Additional statistics about a ResultSet or PartialResultSet.
  * queryPlan [QueryPlan](#queryplan)
  * queryStats `object`: Aggregated statistics from the execution of the query. Only present when

### RollbackRequest
* RollbackRequest `object`: The request for Rollback.
  * transactionId `string`: Required. The transaction to roll back.

### Session
* Session `object`: A session in the Cloud Spanner API.
  * approximateLastUseTime `string`: Output only. The approximate timestamp when the session is last used. It is
  * createTime `string`: Output only. The timestamp when the session is created.
  * labels `object`: The labels for the session.
  * name `string`: The name of the session.

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)

### ShortRepresentation
* ShortRepresentation `object`: Condensed representation of a node and its subtree. Only present for
  * description `string`: A string representation of the expression subtree rooted at this node.
  * subqueries `object`: A mapping of (subquery variable name) -> (subquery node id) for cases

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### StructType
* StructType `object`: `StructType` defines the fields of a STRUCT type.
  * fields `array`: The list of fields that make up this struct. Order is
    * items [Field](#field)

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: REQUIRED: The set of permissions to check for 'resource'.
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is
    * items `string`

### Transaction
* Transaction `object`: A transaction.
  * id `string`: `id` may be used to identify the transaction in subsequent
  * readTimestamp `string`: For snapshot read-only transactions, the read timestamp chosen

### TransactionOptions
* TransactionOptions `object`: # Transactions
  * readOnly [ReadOnly](#readonly)
  * readWrite [ReadWrite](#readwrite)

### TransactionSelector
* TransactionSelector `object`: This message is used to select the transaction in which a
  * begin [TransactionOptions](#transactionoptions)
  * id `string`: Execute the read or SQL query in a previously-started transaction.
  * singleUse [TransactionOptions](#transactionoptions)

### Type
* Type `object`: `Type` indicates the type of a Cloud Spanner value, as might be stored in a
  * arrayElementType [Type](#type)
  * code `string` (values: TYPE_CODE_UNSPECIFIED, BOOL, INT64, FLOAT64, TIMESTAMP, DATE, STRING, BYTES, ARRAY, STRUCT): Required. The TypeCode for this type.
  * structType [StructType](#structtype)

### UpdateDatabaseDdlMetadata
* UpdateDatabaseDdlMetadata `object`: Metadata type for the operation returned by
  * commitTimestamps `array`: Reports the commit timestamps of all statements that have
    * items `string`
  * database `string`: The database being modified.
  * statements `array`: For an update this list contains all the statements. For an
    * items `string`

### UpdateDatabaseDdlRequest
* UpdateDatabaseDdlRequest `object`: Enqueues the given DDL statements to be applied, in order but not
  * operationId `string`: If empty, the new update request is assigned an
  * statements `array`: DDL statements to be applied to the database.
    * items `string`

### UpdateInstanceMetadata
* UpdateInstanceMetadata `object`: Metadata type for the operation returned by
  * cancelTime `string`: The time at which this operation was cancelled. If set, this operation is
  * endTime `string`: The time at which this operation failed or was completed successfully.
  * instance [Instance](#instance)
  * startTime `string`: The time at which UpdateInstance

### UpdateInstanceRequest
* UpdateInstanceRequest `object`: The request for UpdateInstance.
  * fieldMask `string`: Required. A mask specifying which fields in [][google.spanner.admin.instance.v1.UpdateInstanceRequest.instance] should be updated.
  * instance [Instance](#instance)

### Write
* Write `object`: Arguments to insert, update, insert_or_update, and
  * columns `array`: The names of the columns in table to be written.
    * items `string`
  * table `string`: Required. The table whose rows will be written.
  * values `array`: The values to be written. `values` can contain more than one
    * items `array`



