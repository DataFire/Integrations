# @datafire/google_firestore

Client library for Cloud Firestore

## Installation and Usage
```bash
npm install --save @datafire/google_firestore
```
```js
let google_firestore = require('@datafire/google_firestore').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_firestore.projects.databases.documents.batchGet({
  "database": ""
}).then(data => {
  console.log(data);
});
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
google_firestore.oauthRefresh(null, context)
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

### projects.databases.documents.batchGet
Gets multiple documents.

Documents returned by this method are not guaranteed to be returned in the
same order that they were requested.


```js
google_firestore.projects.databases.documents.batchGet({
  "database": ""
}, context)
```

#### Input
* input `object`
  * body [BatchGetDocumentsRequest](#batchgetdocumentsrequest)
  * database **required** `string`: The database name. In the format:
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [BatchGetDocumentsResponse](#batchgetdocumentsresponse)

### projects.databases.documents.beginTransaction
Starts a new transaction.


```js
google_firestore.projects.databases.documents.beginTransaction({
  "database": ""
}, context)
```

#### Input
* input `object`
  * body [BeginTransactionRequest](#begintransactionrequest)
  * database **required** `string`: The database name. In the format:
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [BeginTransactionResponse](#begintransactionresponse)

### projects.databases.documents.commit
Commits a transaction, while optionally updating documents.


```js
google_firestore.projects.databases.documents.commit({
  "database": ""
}, context)
```

#### Input
* input `object`
  * body [CommitRequest](#commitrequest)
  * database **required** `string`: The database name. In the format:
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [CommitResponse](#commitresponse)

### projects.databases.documents.listen
Listens to changes.


```js
google_firestore.projects.databases.documents.listen({
  "database": ""
}, context)
```

#### Input
* input `object`
  * body [ListenRequest](#listenrequest)
  * database **required** `string`: The database name. In the format:
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListenResponse](#listenresponse)

### projects.databases.documents.rollback
Rolls back a transaction.


```js
google_firestore.projects.databases.documents.rollback({
  "database": ""
}, context)
```

#### Input
* input `object`
  * body [RollbackRequest](#rollbackrequest)
  * database **required** `string`: The database name. In the format:
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

### projects.databases.documents.write
Streams batches of document updates and deletes, in order.


```js
google_firestore.projects.databases.documents.write({
  "database": ""
}, context)
```

#### Input
* input `object`
  * body [WriteRequest](#writerequest)
  * database **required** `string`: The database name. In the format:
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [WriteResponse](#writeresponse)

### projects.databases.indexes.delete
Deletes an index.


```js
google_firestore.projects.databases.indexes.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * currentDocument.exists `boolean`: When set to `true`, the target document must exist.
  * currentDocument.updateTime `string`: When set, the target document must exist and have been last updated at
  * name **required** `string`: The index name. For example:
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

### projects.databases.indexes.get
Gets an index.


```js
google_firestore.projects.databases.indexes.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * mask.fieldPaths `array`: The list of field paths in the mask. See Document.fields for a field
  * name **required** `string`: The name of the index. For example:
  * readTime `string`: Reads the version of the document at the given time.
  * transaction `string`: Reads the document in a transaction.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Index](#index)

### projects.databases.documents.patch
Updates or inserts a document.


```js
google_firestore.projects.databases.documents.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [Document](#document)
  * currentDocument.exists `boolean`: When set to `true`, the target document must exist.
  * currentDocument.updateTime `string`: When set, the target document must exist and have been last updated at
  * mask.fieldPaths `array`: The list of field paths in the mask. See Document.fields for a field
  * name **required** `string`: The resource name of the document, for example
  * updateMask.fieldPaths `array`: The list of field paths in the mask. See Document.fields for a field
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Document](#document)

### projects.databases.indexes.list
Lists the indexes that match the specified filters.


```js
google_firestore.projects.databases.indexes.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * filter `string`
  * pageSize `integer`: The standard List page size.
  * pageToken `string`: The standard List page token.
  * parent **required** `string`: The database name. For example:
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListIndexesResponse](#listindexesresponse)

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

#### Input
* input `object`
  * body [Index](#index)
  * parent **required** `string`: The name of the database this index will apply to. For example:
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)

### projects.databases.documents.list
Lists documents.


```js
google_firestore.projects.databases.documents.list({
  "collectionId": "",
  "parent": ""
}, context)
```

#### Input
* input `object`
  * collectionId **required** `string`: The collection ID, relative to `parent`, to list. For example: `chatrooms`
  * mask.fieldPaths `array`: The list of field paths in the mask. See Document.fields for a field
  * orderBy `string`: The order to sort results by. For example: `priority desc, name`.
  * pageSize `integer`: The maximum number of documents to return.
  * pageToken `string`: The `next_page_token` value returned from a previous List request, if any.
  * parent **required** `string`: The parent resource name. In the format:
  * readTime `string`: Reads documents as they were at the given time.
  * showMissing `boolean`: If the list should show missing documents. A missing document is a
  * transaction `string`: Reads documents in a transaction.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListDocumentsResponse](#listdocumentsresponse)

### projects.databases.documents.createDocument
Creates a new document.


```js
google_firestore.projects.databases.documents.createDocument({
  "collectionId": "",
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [Document](#document)
  * collectionId **required** `string`: The collection ID, relative to `parent`, to list. For example: `chatrooms`.
  * documentId `string`: The client-assigned document ID to use for this document.
  * mask.fieldPaths `array`: The list of field paths in the mask. See Document.fields for a field
  * parent **required** `string`: The parent resource. For example:
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Document](#document)

### projects.databases.documents.listCollectionIds
Lists all the collection IDs underneath a document.


```js
google_firestore.projects.databases.documents.listCollectionIds({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [ListCollectionIdsRequest](#listcollectionidsrequest)
  * parent **required** `string`: The parent document. In the format:
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListCollectionIdsResponse](#listcollectionidsresponse)

### projects.databases.documents.runQuery
Runs a query.


```js
google_firestore.projects.databases.documents.runQuery({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [RunQueryRequest](#runqueryrequest)
  * parent **required** `string`: The parent resource name. In the format:
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [RunQueryResponse](#runqueryresponse)



## Definitions

### ArrayValue
* ArrayValue `object`: An array value.
  * values `array`: Values in the array.
    * items [Value](#value)

### BatchGetDocumentsRequest
* BatchGetDocumentsRequest `object`: The request for Firestore.BatchGetDocuments.
  * documents `array`: The names of the documents to retrieve. In the format:
    * items `string`
  * mask [DocumentMask](#documentmask)
  * newTransaction [TransactionOptions](#transactionoptions)
  * readTime `string`: Reads documents as they were at the given time.
  * transaction `string`: Reads documents in a transaction.

### BatchGetDocumentsResponse
* BatchGetDocumentsResponse `object`: The streamed response for Firestore.BatchGetDocuments.
  * found [Document](#document)
  * missing `string`: A document name that was requested but does not exist. In the format:
  * readTime `string`: The time at which the document was read.
  * transaction `string`: The transaction that was started as part of this request.

### BeginTransactionRequest
* BeginTransactionRequest `object`: The request for Firestore.BeginTransaction.
  * options [TransactionOptions](#transactionoptions)

### BeginTransactionResponse
* BeginTransactionResponse `object`: The response for Firestore.BeginTransaction.
  * transaction `string`: The transaction that was started.

### CollectionSelector
* CollectionSelector `object`: A selection of a collection, such as `messages as m1`.
  * allDescendants `boolean`: When false, selects only collections that are immediate children of
  * collectionId `string`: The collection ID.

### CommitRequest
* CommitRequest `object`: The request for Firestore.Commit.
  * transaction `string`: If set, applies all writes in this transaction, and commits it.
  * writes `array`: The writes to apply.
    * items [Write](#write)

### CommitResponse
* CommitResponse `object`: The response for Firestore.Commit.
  * commitTime `string`: The time at which the commit occurred.
  * writeResults `array`: The result of applying the writes.
    * items [WriteResult](#writeresult)

### CompositeFilter
* CompositeFilter `object`: A filter that merges multiple other filters using the given operator.
  * filters `array`: The list of filters to combine.
    * items [Filter](#filter)
  * op `string` (values: OPERATOR_UNSPECIFIED, AND): The operator for combining multiple filters.

### Cursor
* Cursor `object`: A position in a query result set.
  * before `boolean`: If the position is just before or just after the given values, relative
  * values `array`: The values that represent a position, in the order they appear in
    * items [Value](#value)

### Document
* Document `object`: A Firestore document.
  * createTime `string`: Output only. The time at which the document was created.
  * fields `object`: The document's fields.
  * name `string`: The resource name of the document, for example
  * updateTime `string`: Output only. The time at which the document was last changed.

### DocumentChange
* DocumentChange `object`: A Document has changed.
  * document [Document](#document)
  * removedTargetIds `array`: A set of target IDs for targets that no longer match this document.
    * items `integer`
  * targetIds `array`: A set of target IDs of targets that match this document.
    * items `integer`

### DocumentDelete
* DocumentDelete `object`: A Document has been deleted.
  * document `string`: The resource name of the Document that was deleted.
  * readTime `string`: The read timestamp at which the delete was observed.
  * removedTargetIds `array`: A set of target IDs for targets that previously matched this entity.
    * items `integer`

### DocumentMask
* DocumentMask `object`: A set of field paths on a document.
  * fieldPaths `array`: The list of field paths in the mask. See Document.fields for a field
    * items `string`

### DocumentRemove
* DocumentRemove `object`: A Document has been removed from the view of the targets.
  * document `string`: The resource name of the Document that has gone out of view.
  * readTime `string`: The read timestamp at which the remove was observed.
  * removedTargetIds `array`: A set of target IDs for targets that previously matched this document.
    * items `integer`

### DocumentTransform
* DocumentTransform `object`: A transformation of a document.
  * document `string`: The name of the document to transform.
  * fieldTransforms `array`: The list of transformations to apply to the fields of the document, in
    * items [FieldTransform](#fieldtransform)

### DocumentsTarget
* DocumentsTarget `object`: A target specified by a set of documents names.
  * documents `array`: The names of the documents to retrieve. In the format:
    * items `string`

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### ExistenceFilter
* ExistenceFilter `object`: A digest of all the documents that match a given target.
  * count `integer`: The total count of documents that match target_id.
  * targetId `integer`: The target ID to which this filter applies.

### FieldFilter
* FieldFilter `object`: A filter on a specific field.
  * field [FieldReference](#fieldreference)
  * op `string` (values: OPERATOR_UNSPECIFIED, LESS_THAN, LESS_THAN_OR_EQUAL, GREATER_THAN, GREATER_THAN_OR_EQUAL, EQUAL): The operator to filter by.
  * value [Value](#value)

### FieldReference
* FieldReference `object`: A reference to a field, such as `max(messages.time) as max_time`.
  * fieldPath `string`

### FieldTransform
* FieldTransform `object`: A transformation of a field of the document.
  * fieldPath `string`: The path of the field. See Document.fields for the field path syntax
  * setToServerValue `string` (values: SERVER_VALUE_UNSPECIFIED, REQUEST_TIME): Sets the field to the given server value.

### Filter
* Filter `object`: A filter.
  * compositeFilter [CompositeFilter](#compositefilter)
  * fieldFilter [FieldFilter](#fieldfilter)
  * unaryFilter [UnaryFilter](#unaryfilter)

### Index
* Index `object`: An index definition.
  * collectionId `string`: The collection ID to which this index applies. Required.
  * fields `array`: The fields to index.
    * items [IndexField](#indexfield)
  * name `string`: The resource name of the index.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, READY, ERROR): The state of the index.

### IndexField
* IndexField `object`: A field of an index.
  * fieldPath `string`: The path of the field. Must match the field path specification described
  * mode `string` (values: MODE_UNSPECIFIED, ASCENDING, DESCENDING): The field's mode.

### LatLng
* LatLng `object`: An object representing a latitude/longitude pair. This is expressed as a pair
  * latitude `number`: The latitude in degrees. It must be in the range [-90.0, +90.0].
  * longitude `number`: The longitude in degrees. It must be in the range [-180.0, +180.0].

### ListCollectionIdsRequest
* ListCollectionIdsRequest `object`: The request for Firestore.ListCollectionIds.
  * pageSize `integer`: The maximum number of results to return.
  * pageToken `string`: A page token. Must be a value from

### ListCollectionIdsResponse
* ListCollectionIdsResponse `object`: The response from Firestore.ListCollectionIds.
  * collectionIds `array`: The collection ids.
    * items `string`
  * nextPageToken `string`: A page token that may be used to continue the list.

### ListDocumentsResponse
* ListDocumentsResponse `object`: The response for Firestore.ListDocuments.
  * documents `array`: The Documents found.
    * items [Document](#document)
  * nextPageToken `string`: The next page token.

### ListIndexesResponse
* ListIndexesResponse `object`: The response for FirestoreAdmin.ListIndexes.
  * indexes `array`: The indexes.
    * items [Index](#index)
  * nextPageToken `string`: The standard List next-page token.

### ListenRequest
* ListenRequest `object`: A request for Firestore.Listen
  * addTarget [Target](#target)
  * labels `object`: Labels associated with this target change.
  * removeTarget `integer`: The ID of a target to remove from this stream.

### ListenResponse
* ListenResponse `object`: The response for Firestore.Listen.
  * documentChange [DocumentChange](#documentchange)
  * documentDelete [DocumentDelete](#documentdelete)
  * documentRemove [DocumentRemove](#documentremove)
  * filter [ExistenceFilter](#existencefilter)
  * targetChange [TargetChange](#targetchange)

### MapValue
* MapValue `object`: A map value.
  * fields `object`: The map's fields.

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation.  It typically
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: The normal response of the operation in case of success.  If the original

### Order
* Order `object`: An order on a field.
  * direction `string` (values: DIRECTION_UNSPECIFIED, ASCENDING, DESCENDING): The direction to order by. Defaults to `ASCENDING`.
  * field [FieldReference](#fieldreference)

### Precondition
* Precondition `object`: A precondition on a document, used for conditional operations.
  * exists `boolean`: When set to `true`, the target document must exist.
  * updateTime `string`: When set, the target document must exist and have been last updated at

### Projection
* Projection `object`: The projection of document's fields to return.
  * fields `array`: The fields to return.
    * items [FieldReference](#fieldreference)

### QueryTarget
* QueryTarget `object`: A target specified by a query.
  * parent `string`: The parent resource name. In the format:
  * structuredQuery [StructuredQuery](#structuredquery)

### ReadOnly
* ReadOnly `object`: Options for a transaction that can only be used to read documents.
  * readTime `string`: Reads documents at the given time.

### ReadWrite
* ReadWrite `object`: Options for a transaction that can be used to read and write documents.
  * retryTransaction `string`: An optional transaction to retry.

### RollbackRequest
* RollbackRequest `object`: The request for Firestore.Rollback.
  * transaction `string`: The transaction to roll back.

### RunQueryRequest
* RunQueryRequest `object`: The request for Firestore.RunQuery.
  * newTransaction [TransactionOptions](#transactionoptions)
  * readTime `string`: Reads documents as they were at the given time.
  * structuredQuery [StructuredQuery](#structuredquery)
  * transaction `string`: Reads documents in a transaction.

### RunQueryResponse
* RunQueryResponse `object`: The response for Firestore.RunQuery.
  * document [Document](#document)
  * readTime `string`: The time at which the document was read. This may be monotonically
  * skippedResults `integer`: The number of results that have been skipped due to an offset between
  * transaction `string`: The transaction that was started as part of this request.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### StructuredQuery
* StructuredQuery `object`: A Firestore query.
  * endAt [Cursor](#cursor)
  * from `array`: The collections to query.
    * items [CollectionSelector](#collectionselector)
  * limit `integer`: The maximum number of results to return.
  * offset `integer`: The number of results to skip.
  * orderBy `array`: The order to apply to the query results.
    * items [Order](#order)
  * select [Projection](#projection)
  * startAt [Cursor](#cursor)
  * where [Filter](#filter)

### Target
* Target `object`: A specification of a set of documents to listen to.
  * documents [DocumentsTarget](#documentstarget)
  * once `boolean`: If the target should be removed once it is current and consistent.
  * query [QueryTarget](#querytarget)
  * readTime `string`: Start listening after a specific `read_time`.
  * resumeToken `string`: A resume token from a prior TargetChange for an identical target.
  * targetId `integer`: A client provided target ID.

### TargetChange
* TargetChange `object`: Targets being watched have changed.
  * cause [Status](#status)
  * readTime `string`: The consistent `read_time` for the given `target_ids` (omitted when the
  * resumeToken `string`: A token that can be used to resume the stream for the given `target_ids`,
  * targetChangeType `string` (values: NO_CHANGE, ADD, REMOVE, CURRENT, RESET): The type of change that occurred.
  * targetIds `array`: The target IDs of targets that have changed.
    * items `integer`

### TransactionOptions
* TransactionOptions `object`: Options for creating a new transaction.
  * readOnly [ReadOnly](#readonly)
  * readWrite [ReadWrite](#readwrite)

### UnaryFilter
* UnaryFilter `object`: A filter with a single operand.
  * field [FieldReference](#fieldreference)
  * op `string` (values: OPERATOR_UNSPECIFIED, IS_NAN, IS_NULL): The unary operator to apply.

### Value
* Value `object`: A message that can hold any of the supported value types.
  * arrayValue [ArrayValue](#arrayvalue)
  * booleanValue `boolean`: A boolean value.
  * bytesValue `string`: A bytes value.
  * doubleValue `number`: A double value.
  * geoPointValue [LatLng](#latlng)
  * integerValue `string`: An integer value.
  * mapValue [MapValue](#mapvalue)
  * nullValue `string` (values: NULL_VALUE): A null value.
  * referenceValue `string`: A reference to a document. For example:
  * stringValue `string`: A string value.
  * timestampValue `string`: A timestamp value.

### Write
* Write `object`: A write on a document.
  * currentDocument [Precondition](#precondition)
  * delete `string`: A document name to delete. In the format:
  * transform [DocumentTransform](#documenttransform)
  * update [Document](#document)
  * updateMask [DocumentMask](#documentmask)

### WriteRequest
* WriteRequest `object`: The request for Firestore.Write.
  * labels `object`: Labels associated with this write request.
  * streamId `string`: The ID of the write stream to resume.
  * streamToken `string`: A stream token that was previously sent by the server.
  * writes `array`: The writes to apply.
    * items [Write](#write)

### WriteResponse
* WriteResponse `object`: The response for Firestore.Write.
  * commitTime `string`: The time at which the commit occurred.
  * streamId `string`: The ID of the stream.
  * streamToken `string`: A token that represents the position of this response in the stream.
  * writeResults `array`: The result of applying the writes.
    * items [WriteResult](#writeresult)

### WriteResult
* WriteResult `object`: The result of applying a write.
  * transformResults `array`: The results of applying each DocumentTransform.FieldTransform, in the
    * items [Value](#value)
  * updateTime `string`: The last update time of the document after applying the write. Not set


