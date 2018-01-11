# @datafire/google_datastore

Client library for Google Cloud Datastore

## Installation and Usage
```bash
npm install --save @datafire/google_datastore
```
```js
let google_datastore = require('@datafire/google_datastore').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
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
google_datastore.oauthRefresh(null, context)
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

### projects.allocateIds
Allocates IDs for the given keys, which is useful for referencing an entity
before it is inserted.


```js
google_datastore.projects.allocateIds({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the project against which to make the request.
  * body [AllocateIdsRequest](#allocateidsrequest)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [AllocateIdsResponse](#allocateidsresponse)

### projects.beginTransaction
Begins a new transaction.


```js
google_datastore.projects.beginTransaction({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the project against which to make the request.
  * body [BeginTransactionRequest](#begintransactionrequest)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [BeginTransactionResponse](#begintransactionresponse)

### projects.commit
Commits a transaction, optionally creating, deleting or modifying some
entities.


```js
google_datastore.projects.commit({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the project against which to make the request.
  * body [CommitRequest](#commitrequest)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [CommitResponse](#commitresponse)

### projects.lookup
Looks up entities by key.


```js
google_datastore.projects.lookup({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the project against which to make the request.
  * body [LookupRequest](#lookuprequest)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [LookupResponse](#lookupresponse)

### projects.reserveIds
Prevents the supplied keys' IDs from being auto-allocated by Cloud
Datastore.


```js
google_datastore.projects.reserveIds({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * body [ReserveIdsRequest](#reserveidsrequest)
  * projectId **required** `string`: The ID of the project against which to make the request.
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
* output [ReserveIdsResponse](#reserveidsresponse)

### projects.rollback
Rolls back a transaction.


```js
google_datastore.projects.rollback({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the project against which to make the request.
  * body [RollbackRequest](#rollbackrequest)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [RollbackResponse](#rollbackresponse)

### projects.runQuery
Queries for entities.


```js
google_datastore.projects.runQuery({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The ID of the project against which to make the request.
  * body [RunQueryRequest](#runqueryrequest)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [RunQueryResponse](#runqueryresponse)

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

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be deleted.
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

### projects.operations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.


```js
google_datastore.projects.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

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

#### Input
* input `object`
  * filter `string`: The standard list filter.
  * name **required** `string`: The name of the operation's parent resource.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
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
* output [GoogleLongrunningListOperationsResponse](#googlelongrunninglistoperationsresponse)

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

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
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



## Definitions

### AllocateIdsRequest
* AllocateIdsRequest `object`: The request for Datastore.AllocateIds.
  * keys `array`: A list of keys with incomplete key paths for which to allocate IDs.
    * items [Key](#key)

### AllocateIdsResponse
* AllocateIdsResponse `object`: The response for Datastore.AllocateIds.
  * keys `array`: The keys specified in the request (in the same order), each with
    * items [Key](#key)

### ArrayValue
* ArrayValue `object`: An array value.
  * values `array`: Values in the array.
    * items [Value](#value)

### BeginTransactionRequest
* BeginTransactionRequest `object`: The request for Datastore.BeginTransaction.
  * transactionOptions [TransactionOptions](#transactionoptions)

### BeginTransactionResponse
* BeginTransactionResponse `object`: The response for Datastore.BeginTransaction.
  * transaction `string`: The transaction identifier (always present).

### CommitRequest
* CommitRequest `object`: The request for Datastore.Commit.
  * mode `string` (values: MODE_UNSPECIFIED, TRANSACTIONAL, NON_TRANSACTIONAL): The type of commit to perform. Defaults to `TRANSACTIONAL`.
  * mutations `array`: The mutations to perform.
    * items [Mutation](#mutation)
  * transaction `string`: The identifier of the transaction associated with the commit. A

### CommitResponse
* CommitResponse `object`: The response for Datastore.Commit.
  * indexUpdates `integer`: The number of index entries updated during the commit, or zero if none were
  * mutationResults `array`: The result of performing the mutations.
    * items [MutationResult](#mutationresult)

### CompositeFilter
* CompositeFilter `object`: A filter that merges multiple other filters using the given operator.
  * filters `array`: The list of filters to combine.
    * items [Filter](#filter)
  * op `string` (values: OPERATOR_UNSPECIFIED, AND): The operator for combining multiple filters.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### Entity
* Entity `object`: A Datastore data object.
  * key [Key](#key)
  * properties `object`: The entity's properties.

### EntityResult
* EntityResult `object`: The result of fetching an entity from Datastore.
  * cursor `string`: A cursor that points to the position after the result entity.
  * entity [Entity](#entity)
  * version `string`: The version of the entity, a strictly positive number that monotonically

### Filter
* Filter `object`: A holder for any type of filter.
  * compositeFilter [CompositeFilter](#compositefilter)
  * propertyFilter [PropertyFilter](#propertyfilter)

### GoogleDatastoreAdminV1beta1CommonMetadata
* GoogleDatastoreAdminV1beta1CommonMetadata `object`: Metadata common to all Datastore Admin operations.
  * endTime `string`: The time the operation ended, either successfully or otherwise.
  * labels `object`: The client-assigned labels which were provided when the operation was
  * operationType `string` (values: OPERATION_TYPE_UNSPECIFIED, EXPORT_ENTITIES, IMPORT_ENTITIES): The type of the operation. Can be used as a filter in
  * startTime `string`: The time that work began on the operation.
  * state `string` (values: STATE_UNSPECIFIED, INITIALIZING, PROCESSING, CANCELLING, FINALIZING, SUCCESSFUL, FAILED, CANCELLED): The current state of the Operation.

### GoogleDatastoreAdminV1beta1EntityFilter
* GoogleDatastoreAdminV1beta1EntityFilter `object`: Identifies a subset of entities in a project. This is specified as
  * kinds `array`: If empty, then this represents all kinds.
    * items `string`
  * namespaceIds `array`: An empty list represents all namespaces. This is the preferred
    * items `string`

### GoogleDatastoreAdminV1beta1ExportEntitiesMetadata
* GoogleDatastoreAdminV1beta1ExportEntitiesMetadata `object`: Metadata for ExportEntities operations.
  * common [GoogleDatastoreAdminV1beta1CommonMetadata](#googledatastoreadminv1beta1commonmetadata)
  * entityFilter [GoogleDatastoreAdminV1beta1EntityFilter](#googledatastoreadminv1beta1entityfilter)
  * outputUrlPrefix `string`: Location for the export metadata and data files. This will be the same
  * progressBytes [GoogleDatastoreAdminV1beta1Progress](#googledatastoreadminv1beta1progress)
  * progressEntities [GoogleDatastoreAdminV1beta1Progress](#googledatastoreadminv1beta1progress)

### GoogleDatastoreAdminV1beta1ExportEntitiesResponse
* GoogleDatastoreAdminV1beta1ExportEntitiesResponse `object`: The response for
  * outputUrl `string`: Location of the output metadata file. This can be used to begin an import

### GoogleDatastoreAdminV1beta1ImportEntitiesMetadata
* GoogleDatastoreAdminV1beta1ImportEntitiesMetadata `object`: Metadata for ImportEntities operations.
  * common [GoogleDatastoreAdminV1beta1CommonMetadata](#googledatastoreadminv1beta1commonmetadata)
  * entityFilter [GoogleDatastoreAdminV1beta1EntityFilter](#googledatastoreadminv1beta1entityfilter)
  * inputUrl `string`: The location of the import metadata file. This will be the same value as
  * progressBytes [GoogleDatastoreAdminV1beta1Progress](#googledatastoreadminv1beta1progress)
  * progressEntities [GoogleDatastoreAdminV1beta1Progress](#googledatastoreadminv1beta1progress)

### GoogleDatastoreAdminV1beta1Progress
* GoogleDatastoreAdminV1beta1Progress `object`: Measures the progress of a particular metric.
  * workCompleted `string`: The amount of work that has been completed. Note that this may be greater
  * workEstimated `string`: An estimate of how much work needs to be performed. May be zero if the

### GoogleLongrunningListOperationsResponse
* GoogleLongrunningListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [GoogleLongrunningOperation](#googlelongrunningoperation)

### GoogleLongrunningOperation
* GoogleLongrunningOperation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation.  It typically
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: The normal response of the operation in case of success.  If the original

### GqlQuery
* GqlQuery `object`: A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
  * allowLiterals `boolean`: When false, the query string must not contain any literals and instead must
  * namedBindings `object`: For each non-reserved named binding site in the query string, there must be
  * positionalBindings `array`: Numbered binding site @1 references the first numbered parameter,
    * items [GqlQueryParameter](#gqlqueryparameter)
  * queryString `string`: A string of the format described

### GqlQueryParameter
* GqlQueryParameter `object`: A binding parameter for a GQL query.
  * cursor `string`: A query cursor. Query cursors are returned in query
  * value [Value](#value)

### Key
* Key `object`: A unique identifier for an entity.
  * partitionId [PartitionId](#partitionid)
  * path `array`: The entity path.
    * items [PathElement](#pathelement)

### KindExpression
* KindExpression `object`: A representation of a kind.
  * name `string`: The name of the kind.

### LatLng
* LatLng `object`: An object representing a latitude/longitude pair. This is expressed as a pair
  * latitude `number`: The latitude in degrees. It must be in the range [-90.0, +90.0].
  * longitude `number`: The longitude in degrees. It must be in the range [-180.0, +180.0].

### LookupRequest
* LookupRequest `object`: The request for Datastore.Lookup.
  * keys `array`: Keys of entities to look up.
    * items [Key](#key)
  * readOptions [ReadOptions](#readoptions)

### LookupResponse
* LookupResponse `object`: The response for Datastore.Lookup.
  * deferred `array`: A list of keys that were not looked up due to resource constraints. The
    * items [Key](#key)
  * found `array`: Entities found as `ResultType.FULL` entities. The order of results in this
    * items [EntityResult](#entityresult)
  * missing `array`: Entities not found as `ResultType.KEY_ONLY` entities. The order of results
    * items [EntityResult](#entityresult)

### Mutation
* Mutation `object`: A mutation to apply to an entity.
  * baseVersion `string`: The version of the entity that this mutation is being applied to. If this
  * delete [Key](#key)
  * insert [Entity](#entity)
  * update [Entity](#entity)
  * upsert [Entity](#entity)

### MutationResult
* MutationResult `object`: The result of applying a mutation.
  * conflictDetected `boolean`: Whether a conflict was detected for this mutation. Always false when a
  * key [Key](#key)
  * version `string`: The version of the entity on the server after processing the mutation. If

### PartitionId
* PartitionId `object`: A partition ID identifies a grouping of entities. The grouping is always
  * namespaceId `string`: If not empty, the ID of the namespace to which the entities belong.
  * projectId `string`: The ID of the project to which the entities belong.

### PathElement
* PathElement `object`: A (kind, ID/name) pair used to construct a key path.
  * id `string`: The auto-allocated ID of the entity.
  * kind `string`: The kind of the entity.
  * name `string`: The name of the entity.

### Projection
* Projection `object`: A representation of a property in a projection.
  * property [PropertyReference](#propertyreference)

### PropertyFilter
* PropertyFilter `object`: A filter on a specific property.
  * op `string` (values: OPERATOR_UNSPECIFIED, LESS_THAN, LESS_THAN_OR_EQUAL, GREATER_THAN, GREATER_THAN_OR_EQUAL, EQUAL, HAS_ANCESTOR): The operator to filter by.
  * property [PropertyReference](#propertyreference)
  * value [Value](#value)

### PropertyOrder
* PropertyOrder `object`: The desired order for a specific property.
  * direction `string` (values: DIRECTION_UNSPECIFIED, ASCENDING, DESCENDING): The direction to order by. Defaults to `ASCENDING`.
  * property [PropertyReference](#propertyreference)

### PropertyReference
* PropertyReference `object`: A reference to a property relative to the kind expressions.
  * name `string`: The name of the property.

### Query
* Query `object`: A query for entities.
  * distinctOn `array`: The properties to make distinct. The query results will contain the first
    * items [PropertyReference](#propertyreference)
  * endCursor `string`: An ending point for the query results. Query cursors are
  * filter [Filter](#filter)
  * kind `array`: The kinds to query (if empty, returns entities of all kinds).
    * items [KindExpression](#kindexpression)
  * limit `integer`: The maximum number of results to return. Applies after all other
  * offset `integer`: The number of results to skip. Applies before limit, but after all other
  * order `array`: The order to apply to the query results (if empty, order is unspecified).
    * items [PropertyOrder](#propertyorder)
  * projection `array`: The projection to return. Defaults to returning all properties.
    * items [Projection](#projection)
  * startCursor `string`: A starting point for the query results. Query cursors are

### QueryResultBatch
* QueryResultBatch `object`: A batch of results produced by a query.
  * endCursor `string`: A cursor that points to the position after the last result in the batch.
  * entityResultType `string` (values: RESULT_TYPE_UNSPECIFIED, FULL, PROJECTION, KEY_ONLY): The result type for every entity in `entity_results`.
  * entityResults `array`: The results for this batch.
    * items [EntityResult](#entityresult)
  * moreResults `string` (values: MORE_RESULTS_TYPE_UNSPECIFIED, NOT_FINISHED, MORE_RESULTS_AFTER_LIMIT, MORE_RESULTS_AFTER_CURSOR, NO_MORE_RESULTS): The state of the query after the current batch.
  * skippedCursor `string`: A cursor that points to the position after the last skipped result.
  * skippedResults `integer`: The number of results skipped, typically because of an offset.
  * snapshotVersion `string`: The version number of the snapshot this batch was returned from.

### ReadOnly
* ReadOnly `object`: Options specific to read-only transactions.

### ReadOptions
* ReadOptions `object`: The options shared by read requests.
  * readConsistency `string` (values: READ_CONSISTENCY_UNSPECIFIED, STRONG, EVENTUAL): The non-transactional read consistency to use.
  * transaction `string`: The identifier of the transaction in which to read. A

### ReadWrite
* ReadWrite `object`: Options specific to read / write transactions.
  * previousTransaction `string`: The transaction identifier of the transaction being retried.

### ReserveIdsRequest
* ReserveIdsRequest `object`: The request for Datastore.ReserveIds.
  * databaseId `string`: If not empty, the ID of the database against which to make the request.
  * keys `array`: A list of keys with complete key paths whose numeric IDs should not be
    * items [Key](#key)

### ReserveIdsResponse
* ReserveIdsResponse `object`: The response for Datastore.ReserveIds.

### RollbackRequest
* RollbackRequest `object`: The request for Datastore.Rollback.
  * transaction `string`: The transaction identifier, returned by a call to

### RollbackResponse
* RollbackResponse `object`: The response for Datastore.Rollback.

### RunQueryRequest
* RunQueryRequest `object`: The request for Datastore.RunQuery.
  * gqlQuery [GqlQuery](#gqlquery)
  * partitionId [PartitionId](#partitionid)
  * query [Query](#query)
  * readOptions [ReadOptions](#readoptions)

### RunQueryResponse
* RunQueryResponse `object`: The response for Datastore.RunQuery.
  * batch [QueryResultBatch](#queryresultbatch)
  * query [Query](#query)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### TransactionOptions
* TransactionOptions `object`: Options for beginning a new transaction.
  * readOnly [ReadOnly](#readonly)
  * readWrite [ReadWrite](#readwrite)

### Value
* Value `object`: A message that can hold any of the supported value types and associated
  * arrayValue [ArrayValue](#arrayvalue)
  * blobValue `string`: A blob value.
  * booleanValue `boolean`: A boolean value.
  * doubleValue `number`: A double value.
  * entityValue [Entity](#entity)
  * excludeFromIndexes `boolean`: If the value should be excluded from all indexes including those defined
  * geoPointValue [LatLng](#latlng)
  * integerValue `string`: An integer value.
  * keyValue [Key](#key)
  * meaning `integer`: The `meaning` field should only be populated for backwards compatibility.
  * nullValue `string` (values: NULL_VALUE): A null value.
  * stringValue `string`: A UTF-8 encoded string value.
  * timestampValue `string`: A timestamp value.


