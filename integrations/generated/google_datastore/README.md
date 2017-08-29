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

