# @datafire/google_firestore

Client library for Google Cloud Firestore

## Installation and Usage
```bash
npm install --save datafire @datafire/google_firestore
```

```js
let datafire = require('datafire');
let google_firestore = require('@datafire/google_firestore').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_firestore.projects.databases.documents.batchGet({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_firestore.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_firestore.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### projects.databases.documents.batchGet
Gets multiple documents.

Documents returned by this method are not guaranteed to be returned in the
same order that they were requested.


```js
google_firestore.projects.databases.documents.batchGet({
  "database": ""
}, context)
```

#### Parameters
* body (object) - The request for Firestore.BatchGetDocuments.
* database (string) **required** - The database name. In the format:
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

### projects.databases.documents.beginTransaction
Starts a new transaction.


```js
google_firestore.projects.databases.documents.beginTransaction({
  "database": ""
}, context)
```

#### Parameters
* body (object) - The request for Firestore.BeginTransaction.
* database (string) **required** - The database name. In the format:
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

### projects.databases.documents.commit
Commits a transaction, while optionally updating documents.


```js
google_firestore.projects.databases.documents.commit({
  "database": ""
}, context)
```

#### Parameters
* body (object) - The request for Firestore.Commit.
* database (string) **required** - The database name. In the format:
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

### projects.databases.documents.listen
Listens to changes.


```js
google_firestore.projects.databases.documents.listen({
  "database": ""
}, context)
```

#### Parameters
* body (object) - A request for Firestore.Listen
* database (string) **required** - The database name. In the format:
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

### projects.databases.documents.rollback
Rolls back a transaction.


```js
google_firestore.projects.databases.documents.rollback({
  "database": ""
}, context)
```

#### Parameters
* body (object) - The request for Firestore.Rollback.
* database (string) **required** - The database name. In the format:
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

### projects.databases.documents.write
Streams batches of document updates and deletes, in order.


```js
google_firestore.projects.databases.documents.write({
  "database": ""
}, context)
```

#### Parameters
* body (object) - The request for Firestore.Write.
* database (string) **required** - The database name. In the format:
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

### projects.databases.indexes.delete
Deletes an index.


```js
google_firestore.projects.databases.indexes.delete({
  "name": ""
}, context)
```

#### Parameters
* currentDocument.exists (boolean) - When set to `true`, the target document must exist.
* currentDocument.updateTime (string) - When set, the target document must exist and have been last updated at
* name (string) **required** - The index name. For example:
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

### projects.databases.indexes.get
Gets an index.


```js
google_firestore.projects.databases.indexes.get({
  "name": ""
}, context)
```

#### Parameters
* mask.fieldPaths (array) - The list of field paths in the mask. See Document.fields for a field
* name (string) **required** - The name of the index. For example:
* readTime (string) - Reads the version of the document at the given time.
* transaction (string) - Reads the document in a transaction.
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

### projects.databases.documents.patch
Updates or inserts a document.


```js
google_firestore.projects.databases.documents.patch({
  "name": ""
}, context)
```

#### Parameters
* body (object) - A Firestore document.
* currentDocument.exists (boolean) - When set to `true`, the target document must exist.
* currentDocument.updateTime (string) - When set, the target document must exist and have been last updated at
* mask.fieldPaths (array) - The list of field paths in the mask. See Document.fields for a field
* name (string) **required** - The resource name of the document, for example
* updateMask.fieldPaths (array) - The list of field paths in the mask. See Document.fields for a field
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

### projects.databases.indexes.list
Lists the indexes that match the specified filters.


```js
google_firestore.projects.databases.indexes.list({
  "parent": ""
}, context)
```

#### Parameters
* filter (string)
* pageSize (integer) - The standard List page size.
* pageToken (string) - The standard List page token.
* parent (string) **required** - The database name. For example:
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

### projects.databases.indexes.create
Creates the specified index.
A newly created index's initial state is `CREATING`. On completion of the
returned google.longrunning.Operation, the state will be `READY`.
If the index already exists, the call will return an `ALREADY_EXISTS`
status.

During creation, the process could result in an error, in which case the
index will move to the `ERROR` state. The process can be recovered by
fixing the data that caused the error, removing the index with
delete, then re-creating the index with
create.

Indexes with a single field cannot be created.


```js
google_firestore.projects.databases.indexes.create({
  "parent": ""
}, context)
```

#### Parameters
* body (object) - An index definition.
* parent (string) **required** - The name of the database this index will apply to. For example:
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

### projects.databases.documents.list
Lists documents.


```js
google_firestore.projects.databases.documents.list({
  "collectionId": "",
  "parent": ""
}, context)
```

#### Parameters
* collectionId (string) **required** - The collection ID, relative to `parent`, to list. For example: `chatrooms`
* mask.fieldPaths (array) - The list of field paths in the mask. See Document.fields for a field
* orderBy (string) - The order to sort results by. For example: `priority desc, name`.
* pageSize (integer) - The maximum number of documents to return.
* pageToken (string) - The `next_page_token` value returned from a previous List request, if any.
* parent (string) **required** - The parent resource name. In the format:
* readTime (string) - Reads documents as they were at the given time.
* showMissing (boolean) - If the list should show missing documents. A missing document is a
* transaction (string) - Reads documents in a transaction.
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

### projects.databases.documents.createDocument
Creates a new document.


```js
google_firestore.projects.databases.documents.createDocument({
  "collectionId": "",
  "parent": ""
}, context)
```

#### Parameters
* body (object) - A Firestore document.
* collectionId (string) **required** - The collection ID, relative to `parent`, to list. For example: `chatrooms`.
* documentId (string) - The client-assigned document ID to use for this document.
* mask.fieldPaths (array) - The list of field paths in the mask. See Document.fields for a field
* parent (string) **required** - The parent resource. For example:
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

### projects.databases.documents.listCollectionIds
Lists all the collection IDs underneath a document.


```js
google_firestore.projects.databases.documents.listCollectionIds({
  "parent": ""
}, context)
```

#### Parameters
* body (object) - The request for Firestore.ListCollectionIds.
* parent (string) **required** - The parent document. In the format:
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

### projects.databases.documents.runQuery
Runs a query.


```js
google_firestore.projects.databases.documents.runQuery({
  "parent": ""
}, context)
```

#### Parameters
* body (object) - The request for Firestore.RunQuery.
* parent (string) **required** - The parent resource name. In the format:
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

