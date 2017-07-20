# @datafire/google_spanner

Client library for Cloud Spanner

## Installation and Usage
```bash
npm install --save datafire @datafire/google_spanner
```

```js
let datafire = require('datafire');
let google_spanner = require('@datafire/google_spanner').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_spanner: account,
  }
})

google_spanner.projects.instances.databases.dropDatabase({}, context).then(data => {
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_spanner.oauthRefresh(null, context)
```


### projects.instances.databases.dropDatabase
Drops (aka deletes) a Cloud Spanner database.


```js
google_spanner.projects.instances.databases.dropDatabase({
  "database": ""
}, context)
```

#### Parameters
* database (string) **required** - Required. The database to be dropped.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### projects.instances.databases.getDdl
Returns the schema of a Cloud Spanner database as a list of formatted
DDL statements. This method does not show pending schema updates, those may
be queried using the Operations API.


```js
google_spanner.projects.instances.databases.getDdl({
  "database": ""
}, context)
```

#### Parameters
* database (string) **required** - Required. The database whose schema we wish to get.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* database (string) **required** - Required. The database to update.
* body (object) - Enqueues the given DDL statements to be applied, in order but not
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* database (string) **required** - Required. The database in which the new session is created.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* name (string) **required** - The name of the operation resource to be deleted.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### projects.instanceConfigs.get
Gets information about a particular instance configuration.


```js
google_spanner.projects.instanceConfigs.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Required. The name of the requested instance configuration. Values are of
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* name (string) **required** - Required. A unique identifier for the instance, which cannot be changed
* body (object) - The request for UpdateInstance.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* name (string) **required** - The name of the operation resource to be cancelled.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### projects.instances.databases.list
Lists Cloud Spanner databases.


```js
google_spanner.projects.instances.databases.list({
  "parent": ""
}, context)
```

#### Parameters
* parent (string) **required** - Required. The instance whose databases should be listed.
* pageToken (string) - If non-empty, `page_token` should contain a
* pageSize (integer) - Number of databases to be returned in the response. If 0 or less,
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* parent (string) **required** - Required. The name of the instance that will serve the new database.
* body (object) - The request for CreateDatabase.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### projects.instanceConfigs.list
Lists the supported instance configurations for a given project.


```js
google_spanner.projects.instanceConfigs.list({
  "parent": ""
}, context)
```

#### Parameters
* parent (string) **required** - Required. The name of the project for which a list of supported instance
* pageToken (string) - If non-empty, `page_token` should contain a
* pageSize (integer) - Number of instance configurations to be returned in the response. If 0 or
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

### projects.instances.list
Lists all instances in the given project.


```js
google_spanner.projects.instances.list({
  "parent": ""
}, context)
```

#### Parameters
* parent (string) **required** - Required. The name of the project for which a list of instances is
* pageToken (string) - If non-empty, `page_token` should contain a
* pageSize (integer) - Number of instances to be returned in the response. If 0 or less, defaults
* filter (string) - An expression for filtering the results of the request. Filter rules are
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* parent (string) **required** - Required. The name of the project in which to create the instance. Values
* body (object) - The request for CreateInstance.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* resource (string) **required** - REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
* body (object) - Request message for `GetIamPolicy` method.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* resource (string) **required** - REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for databases resources.
* body (object) - Request message for `SetIamPolicy` method.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* resource (string) **required** - REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
* body (object) - Request message for `TestIamPermissions` method.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* session (string) **required** - Required. The session in which the transaction runs.
* body (object) - The request for BeginTransaction.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* session (string) **required** - Required. The session in which the transaction to be committed is running.
* body (object) - The request for Commit.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* session (string) **required** - Required. The session in which the SQL query should be performed.
* body (object) - The request for ExecuteSql and
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* session (string) **required** - Required. The session in which the SQL query should be performed.
* body (object) - The request for ExecuteSql and
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* session (string) **required** - Required. The session in which the read should be performed.
* body (object) - The request for Read and
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* session (string) **required** - Required. The session in which the transaction to roll back is running.
* body (object) - The request for Rollback.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

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

#### Parameters
* session (string) **required** - Required. The session in which the read should be performed.
* body (object) - The request for Read and
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.

