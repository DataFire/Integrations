# @datafire/google_datastore

Client library for Google Cloud Datastore

## Installation and Usage
```bash
npm install --save datafire @datafire/google_datastore
```

```js
let datafire = require('datafire');
let google_datastore = require('@datafire/google_datastore').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_datastore.projects.allocateIds({}).then(data => {
  console.log(data);
})
```

## Description
Accesses the schemaless NoSQL database to provide fully managed, robust, scalable storage for your application.


## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_datastore.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_datastore.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### projects.allocateIds
Allocates IDs for the given keys, which is useful for referencing an entity
before it is inserted.


```js
google_datastore.projects.allocateIds({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The ID of the project against which to make the request.
* body (object) - The request for Datastore.AllocateIds.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.beginTransaction
Begins a new transaction.


```js
google_datastore.projects.beginTransaction({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The ID of the project against which to make the request.
* body (object) - The request for Datastore.BeginTransaction.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.commit
Commits a transaction, optionally creating, deleting or modifying some
entities.


```js
google_datastore.projects.commit({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The ID of the project against which to make the request.
* body (object) - The request for Datastore.Commit.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.lookup
Looks up entities by key.


```js
google_datastore.projects.lookup({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The ID of the project against which to make the request.
* body (object) - The request for Datastore.Lookup.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.reserveIds
Prevents the supplied keys' IDs from being auto-allocated by Cloud
Datastore.


```js
google_datastore.projects.reserveIds({
  "projectId": ""
}, context)
```

#### Parameters
* body (object) - The request for Datastore.ReserveIds.
* projectId (string) **required** - The ID of the project against which to make the request.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.rollback
Rolls back a transaction.


```js
google_datastore.projects.rollback({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The ID of the project against which to make the request.
* body (object) - The request for Datastore.Rollback.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.runQuery
Queries for entities.


```js
google_datastore.projects.runQuery({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The ID of the project against which to make the request.
* body (object) - The request for Datastore.RunQuery.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.operations.delete
Deletes a long-running operation. This method indicates that the client is
no longer interested in the operation result. It does not cancel the
operation. If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.


```js
google_datastore.projects.operations.delete({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the operation resource to be deleted.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.operations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.


```js
google_datastore.projects.operations.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the operation resource.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.operations.list
Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.


```js
google_datastore.projects.operations.list({
  "name": ""
}, context)
```

#### Parameters
* filter (string) - The standard list filter.
* name (string) **required** - The name of the operation's parent resource.
* pageSize (integer) - The standard list page size.
* pageToken (string) - The standard list page token.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.operations.cancel
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
google_datastore.projects.operations.cancel({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the operation resource to be cancelled.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

