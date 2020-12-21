# @datafire/google_datastore

Client library for Cloud Datastore API

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

.then(data => {
  console.log(data);
});
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

### datastore.projects.allocateIds
Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.


```js
google_datastore.datastore.projects.allocateIds({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the project against which to make the request.
  * body [AllocateIdsRequest](#allocateidsrequest)
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
* output [AllocateIdsResponse](#allocateidsresponse)

### datastore.projects.beginTransaction
Begins a new transaction.


```js
google_datastore.datastore.projects.beginTransaction({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the project against which to make the request.
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
* output [BeginTransactionResponse](#begintransactionresponse)

### datastore.projects.commit
Commits a transaction, optionally creating, deleting or modifying some entities.


```js
google_datastore.datastore.projects.commit({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the project against which to make the request.
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

### datastore.projects.lookup
Looks up entities by key.


```js
google_datastore.datastore.projects.lookup({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the project against which to make the request.
  * body [LookupRequest](#lookuprequest)
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
* output [LookupResponse](#lookupresponse)

### datastore.projects.reserveIds
Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.


```js
google_datastore.datastore.projects.reserveIds({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the project against which to make the request.
  * body [ReserveIdsRequest](#reserveidsrequest)
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
* output [ReserveIdsResponse](#reserveidsresponse)

### datastore.projects.rollback
Rolls back a transaction.


```js
google_datastore.datastore.projects.rollback({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the project against which to make the request.
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
* output [RollbackResponse](#rollbackresponse)

### datastore.projects.runQuery
Queries for entities.


```js
google_datastore.datastore.projects.runQuery({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the project against which to make the request.
  * body [RunQueryRequest](#runqueryrequest)
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
* output [RunQueryResponse](#runqueryresponse)



## Definitions

### AllocateIdsRequest
* AllocateIdsRequest `object`: The request for Datastore.AllocateIds.
  * keys `array`: Required. A list of keys with incomplete key paths for which to allocate IDs. No key may be reserved/read-only.
    * items [Key](#key)

### AllocateIdsResponse
* AllocateIdsResponse `object`: The response for Datastore.AllocateIds.
  * keys `array`: The keys specified in the request (in the same order), each with its key path completed with a newly allocated ID.
    * items [Key](#key)

### ArrayValue
* ArrayValue `object`: An array value.
  * values `array`: Values in the array. The order of values in an array is preserved as long as all values have identical settings for 'exclude_from_indexes'.
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
  * mutations `array`: The mutations to perform. When mode is `TRANSACTIONAL`, mutations affecting a single entity are applied in order. The following sequences of mutations affecting a single entity are not permitted in a single `Commit` request: - `insert` followed by `insert` - `update` followed by `insert` - `upsert` followed by `insert` - `delete` followed by `update` When mode is `NON_TRANSACTIONAL`, no two mutations may affect a single entity.
    * items [Mutation](#mutation)
  * transaction `string`: The identifier of the transaction associated with the commit. A transaction identifier is returned by a call to Datastore.BeginTransaction.

### CommitResponse
* CommitResponse `object`: The response for Datastore.Commit.
  * indexUpdates `integer`: The number of index entries updated during the commit, or zero if none were updated.
  * mutationResults `array`: The result of performing the mutations. The i-th mutation result corresponds to the i-th mutation in the request.
    * items [MutationResult](#mutationresult)

### CompositeFilter
* CompositeFilter `object`: A filter that merges multiple other filters using the given operator.
  * filters `array`: The list of filters to combine. Must contain at least one filter.
    * items [Filter](#filter)
  * op `string` (values: OPERATOR_UNSPECIFIED, AND): The operator for combining multiple filters.

### Entity
* Entity `object`: A Datastore data object. An entity is limited to 1 megabyte when stored. That _roughly_ corresponds to a limit of 1 megabyte for the serialized form of this message.
  * key [Key](#key)
  * properties `object`: The entity's properties. The map's keys are property names. A property name matching regex `__.*__` is reserved. A reserved property name is forbidden in certain documented contexts. The name must not contain more than 500 characters. The name cannot be `""`.

### EntityResult
* EntityResult `object`: The result of fetching an entity from Datastore.
  * cursor `string`: A cursor that points to the position after the result entity. Set only when the `EntityResult` is part of a `QueryResultBatch` message.
  * entity [Entity](#entity)
  * version `string`: The version of the entity, a strictly positive number that monotonically increases with changes to the entity. This field is set for `FULL` entity results. For missing entities in `LookupResponse`, this is the version of the snapshot that was used to look up the entity, and it is always set except for eventually consistent reads.

### Filter
* Filter `object`: A holder for any type of filter.
  * compositeFilter [CompositeFilter](#compositefilter)
  * propertyFilter [PropertyFilter](#propertyfilter)

### GoogleDatastoreAdminV1CommonMetadata
* GoogleDatastoreAdminV1CommonMetadata `object`: Metadata common to all Datastore Admin operations.
  * endTime `string`: The time the operation ended, either successfully or otherwise.
  * labels `object`: The client-assigned labels which were provided when the operation was created. May also include additional labels.
  * operationType `string` (values: OPERATION_TYPE_UNSPECIFIED, EXPORT_ENTITIES, IMPORT_ENTITIES, CREATE_INDEX, DELETE_INDEX): The type of the operation. Can be used as a filter in ListOperationsRequest.
  * startTime `string`: The time that work began on the operation.
  * state `string` (values: STATE_UNSPECIFIED, INITIALIZING, PROCESSING, CANCELLING, FINALIZING, SUCCESSFUL, FAILED, CANCELLED): The current state of the Operation.

### GoogleDatastoreAdminV1EntityFilter
* GoogleDatastoreAdminV1EntityFilter `object`: Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz']
  * kinds `array`: If empty, then this represents all kinds.
    * items `string`
  * namespaceIds `array`: An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique.
    * items `string`

### GoogleDatastoreAdminV1ExportEntitiesMetadata
* GoogleDatastoreAdminV1ExportEntitiesMetadata `object`: Metadata for ExportEntities operations.
  * common [GoogleDatastoreAdminV1CommonMetadata](#googledatastoreadminv1commonmetadata)
  * entityFilter [GoogleDatastoreAdminV1EntityFilter](#googledatastoreadminv1entityfilter)
  * outputUrlPrefix `string`: Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1.ExportEntitiesResponse.output_url.
  * progressBytes [GoogleDatastoreAdminV1Progress](#googledatastoreadminv1progress)
  * progressEntities [GoogleDatastoreAdminV1Progress](#googledatastoreadminv1progress)

### GoogleDatastoreAdminV1ExportEntitiesResponse
* GoogleDatastoreAdminV1ExportEntitiesResponse `object`: The response for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.
  * outputUrl `string`: Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully.

### GoogleDatastoreAdminV1ImportEntitiesMetadata
* GoogleDatastoreAdminV1ImportEntitiesMetadata `object`: Metadata for ImportEntities operations.
  * common [GoogleDatastoreAdminV1CommonMetadata](#googledatastoreadminv1commonmetadata)
  * entityFilter [GoogleDatastoreAdminV1EntityFilter](#googledatastoreadminv1entityfilter)
  * inputUrl `string`: The location of the import metadata file. This will be the same value as the google.datastore.admin.v1.ExportEntitiesResponse.output_url field.
  * progressBytes [GoogleDatastoreAdminV1Progress](#googledatastoreadminv1progress)
  * progressEntities [GoogleDatastoreAdminV1Progress](#googledatastoreadminv1progress)

### GoogleDatastoreAdminV1IndexOperationMetadata
* GoogleDatastoreAdminV1IndexOperationMetadata `object`: Metadata for Index operations.
  * common [GoogleDatastoreAdminV1CommonMetadata](#googledatastoreadminv1commonmetadata)
  * indexId `string`: The index resource ID that this operation is acting on.
  * progressEntities [GoogleDatastoreAdminV1Progress](#googledatastoreadminv1progress)

### GoogleDatastoreAdminV1Progress
* GoogleDatastoreAdminV1Progress `object`: Measures the progress of a particular metric.
  * workCompleted `string`: The amount of work that has been completed. Note that this may be greater than work_estimated.
  * workEstimated `string`: An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable.

### GoogleDatastoreAdminV1beta1CommonMetadata
* GoogleDatastoreAdminV1beta1CommonMetadata `object`: Metadata common to all Datastore Admin operations.
  * endTime `string`: The time the operation ended, either successfully or otherwise.
  * labels `object`: The client-assigned labels which were provided when the operation was created. May also include additional labels.
  * operationType `string` (values: OPERATION_TYPE_UNSPECIFIED, EXPORT_ENTITIES, IMPORT_ENTITIES): The type of the operation. Can be used as a filter in ListOperationsRequest.
  * startTime `string`: The time that work began on the operation.
  * state `string` (values: STATE_UNSPECIFIED, INITIALIZING, PROCESSING, CANCELLING, FINALIZING, SUCCESSFUL, FAILED, CANCELLED): The current state of the Operation.

### GoogleDatastoreAdminV1beta1EntityFilter
* GoogleDatastoreAdminV1beta1EntityFilter `object`: Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz']
  * kinds `array`: If empty, then this represents all kinds.
    * items `string`
  * namespaceIds `array`: An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique.
    * items `string`

### GoogleDatastoreAdminV1beta1ExportEntitiesMetadata
* GoogleDatastoreAdminV1beta1ExportEntitiesMetadata `object`: Metadata for ExportEntities operations.
  * common [GoogleDatastoreAdminV1beta1CommonMetadata](#googledatastoreadminv1beta1commonmetadata)
  * entityFilter [GoogleDatastoreAdminV1beta1EntityFilter](#googledatastoreadminv1beta1entityfilter)
  * outputUrlPrefix `string`: Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.
  * progressBytes [GoogleDatastoreAdminV1beta1Progress](#googledatastoreadminv1beta1progress)
  * progressEntities [GoogleDatastoreAdminV1beta1Progress](#googledatastoreadminv1beta1progress)

### GoogleDatastoreAdminV1beta1ExportEntitiesResponse
* GoogleDatastoreAdminV1beta1ExportEntitiesResponse `object`: The response for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.
  * outputUrl `string`: Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully.

### GoogleDatastoreAdminV1beta1ImportEntitiesMetadata
* GoogleDatastoreAdminV1beta1ImportEntitiesMetadata `object`: Metadata for ImportEntities operations.
  * common [GoogleDatastoreAdminV1beta1CommonMetadata](#googledatastoreadminv1beta1commonmetadata)
  * entityFilter [GoogleDatastoreAdminV1beta1EntityFilter](#googledatastoreadminv1beta1entityfilter)
  * inputUrl `string`: The location of the import metadata file. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field.
  * progressBytes [GoogleDatastoreAdminV1beta1Progress](#googledatastoreadminv1beta1progress)
  * progressEntities [GoogleDatastoreAdminV1beta1Progress](#googledatastoreadminv1beta1progress)

### GoogleDatastoreAdminV1beta1Progress
* GoogleDatastoreAdminV1beta1Progress `object`: Measures the progress of a particular metric.
  * workCompleted `string`: The amount of work that has been completed. Note that this may be greater than work_estimated.
  * workEstimated `string`: An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable.

### GqlQuery
* GqlQuery `object`: A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
  * allowLiterals `boolean`: When false, the query string must not contain any literals and instead must bind all values. For example, `SELECT * FROM Kind WHERE a = 'string literal'` is not allowed, while `SELECT * FROM Kind WHERE a = @value` is.
  * namedBindings `object`: For each non-reserved named binding site in the query string, there must be a named parameter with that name, but not necessarily the inverse. Key must match regex `A-Za-z_$*`, must not match regex `__.*__`, and must not be `""`.
  * positionalBindings `array`: Numbered binding site @1 references the first numbered parameter, effectively using 1-based indexing, rather than the usual 0. For each binding site numbered i in `query_string`, there must be an i-th numbered parameter. The inverse must also be true.
    * items [GqlQueryParameter](#gqlqueryparameter)
  * queryString `string`: A string of the format described [here](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).

### GqlQueryParameter
* GqlQueryParameter `object`: A binding parameter for a GQL query.
  * cursor `string`: A query cursor. Query cursors are returned in query result batches.
  * value [Value](#value)

### Key
* Key `object`: A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
  * partitionId [PartitionId](#partitionid)
  * path `array`: The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element's _ancestors_. An entity path is always fully complete: *all* of the entity's ancestors are required to be in the path along with the entity identifier itself. The only exception is that in some documented cases, the identifier in the last path element (for the entity) itself may be omitted. For example, the last path element of the key of `Mutation.insert` may have no identifier. A path can never be empty, and a path can have at most 100 elements.
    * items [PathElement](#pathelement)

### KindExpression
* KindExpression `object`: A representation of a kind.
  * name `string`: The name of the kind.

### LatLng
* LatLng `object`: An object representing a latitude/longitude pair. This is expressed as a pair of doubles representing degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges.
  * latitude `number`: The latitude in degrees. It must be in the range [-90.0, +90.0].
  * longitude `number`: The longitude in degrees. It must be in the range [-180.0, +180.0].

### LookupRequest
* LookupRequest `object`: The request for Datastore.Lookup.
  * keys `array`: Required. Keys of entities to look up.
    * items [Key](#key)
  * readOptions [ReadOptions](#readoptions)

### LookupResponse
* LookupResponse `object`: The response for Datastore.Lookup.
  * deferred `array`: A list of keys that were not looked up due to resource constraints. The order of results in this field is undefined and has no relation to the order of the keys in the input.
    * items [Key](#key)
  * found `array`: Entities found as `ResultType.FULL` entities. The order of results in this field is undefined and has no relation to the order of the keys in the input.
    * items [EntityResult](#entityresult)
  * missing `array`: Entities not found as `ResultType.KEY_ONLY` entities. The order of results in this field is undefined and has no relation to the order of the keys in the input.
    * items [EntityResult](#entityresult)

### Mutation
* Mutation `object`: A mutation to apply to an entity.
  * baseVersion `string`: The version of the entity that this mutation is being applied to. If this does not match the current version on the server, the mutation conflicts.
  * delete [Key](#key)
  * insert [Entity](#entity)
  * update [Entity](#entity)
  * upsert [Entity](#entity)

### MutationResult
* MutationResult `object`: The result of applying a mutation.
  * conflictDetected `boolean`: Whether a conflict was detected for this mutation. Always false when a conflict detection strategy field is not set in the mutation.
  * key [Key](#key)
  * version `string`: The version of the entity on the server after processing the mutation. If the mutation doesn't change anything on the server, then the version will be the version of the current entity or, if no entity is present, a version that is strictly greater than the version of any previous entity and less than the version of any possible future entity.

### PartitionId
* PartitionId `object`: A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. Partition dimensions: - May be `""`. - Must be valid UTF-8 bytes. - Must have values that match regex `[A-Za-z\d\.\-_]{1,100}` If the value of any dimension matches regex `__.*__`, the partition is reserved/read-only. A reserved/read-only partition ID is forbidden in certain documented contexts. Foreign partition IDs (in which the project ID does not match the context project ID ) are discouraged. Reads and writes of foreign partition IDs may fail if the project is not in an active state.
  * namespaceId `string`: If not empty, the ID of the namespace to which the entities belong.
  * projectId `string`: The ID of the project to which the entities belong.

### PathElement
* PathElement `object`: A (kind, ID/name) pair used to construct a key path. If either name or ID is set, the element is complete. If neither is set, the element is incomplete.
  * id `string`: The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future.
  * kind `string`: The kind of the entity. A kind matching regex `__.*__` is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be `""`.
  * name `string`: The name of the entity. A name matching regex `__.*__` is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be `""`.

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
  * name `string`: The name of the property. If name includes "."s, it may be interpreted as a property name path.

### Query
* Query `object`: A query for entities.
  * distinctOn `array`: The properties to make distinct. The query results will contain the first result for each distinct combination of values for the given properties (if empty, all results are returned).
    * items [PropertyReference](#propertyreference)
  * endCursor `string`: An ending point for the query results. Query cursors are returned in query result batches and [can only be used to limit the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
  * filter [Filter](#filter)
  * kind `array`: The kinds to query (if empty, returns entities of all kinds). Currently at most 1 kind may be specified.
    * items [KindExpression](#kindexpression)
  * limit `integer`: The maximum number of results to return. Applies after all other constraints. Optional. Unspecified is interpreted as no limit. Must be >= 0 if specified.
  * offset `integer`: The number of results to skip. Applies before limit, but after all other constraints. Optional. Must be >= 0 if specified.
  * order `array`: The order to apply to the query results (if empty, order is unspecified).
    * items [PropertyOrder](#propertyorder)
  * projection `array`: The projection to return. Defaults to returning all properties.
    * items [Projection](#projection)
  * startCursor `string`: A starting point for the query results. Query cursors are returned in query result batches and [can only be used to continue the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).

### QueryResultBatch
* QueryResultBatch `object`: A batch of results produced by a query.
  * endCursor `string`: A cursor that points to the position after the last result in the batch.
  * entityResultType `string` (values: RESULT_TYPE_UNSPECIFIED, FULL, PROJECTION, KEY_ONLY): The result type for every entity in `entity_results`.
  * entityResults `array`: The results for this batch.
    * items [EntityResult](#entityresult)
  * moreResults `string` (values: MORE_RESULTS_TYPE_UNSPECIFIED, NOT_FINISHED, MORE_RESULTS_AFTER_LIMIT, MORE_RESULTS_AFTER_CURSOR, NO_MORE_RESULTS): The state of the query after the current batch.
  * skippedCursor `string`: A cursor that points to the position after the last skipped result. Will be set when `skipped_results` != 0.
  * skippedResults `integer`: The number of results skipped, typically because of an offset.
  * snapshotVersion `string`: The version number of the snapshot this batch was returned from. This applies to the range of results from the query's `start_cursor` (or the beginning of the query if no cursor was given) to this batch's `end_cursor` (not the query's `end_cursor`). In a single transaction, subsequent query result batches for the same query can have a greater snapshot version number. Each batch's snapshot version is valid for all preceding batches. The value will be zero for eventually consistent queries.

### ReadOnly
* ReadOnly `object`: Options specific to read-only transactions.

### ReadOptions
* ReadOptions `object`: The options shared by read requests.
  * readConsistency `string` (values: READ_CONSISTENCY_UNSPECIFIED, STRONG, EVENTUAL): The non-transactional read consistency to use. Cannot be set to `STRONG` for global queries.
  * transaction `string`: The identifier of the transaction in which to read. A transaction identifier is returned by a call to Datastore.BeginTransaction.

### ReadWrite
* ReadWrite `object`: Options specific to read / write transactions.
  * previousTransaction `string`: The transaction identifier of the transaction being retried.

### ReserveIdsRequest
* ReserveIdsRequest `object`: The request for Datastore.ReserveIds.
  * databaseId `string`: If not empty, the ID of the database against which to make the request.
  * keys `array`: Required. A list of keys with complete key paths whose numeric IDs should not be auto-allocated.
    * items [Key](#key)

### ReserveIdsResponse
* ReserveIdsResponse `object`: The response for Datastore.ReserveIds.

### RollbackRequest
* RollbackRequest `object`: The request for Datastore.Rollback.
  * transaction `string`: Required. The transaction identifier, returned by a call to Datastore.BeginTransaction.

### RollbackResponse
* RollbackResponse `object`: The response for Datastore.Rollback. (an empty message).

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

### TransactionOptions
* TransactionOptions `object`: Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests.
  * readOnly [ReadOnly](#readonly)
  * readWrite [ReadWrite](#readwrite)

### Value
* Value `object`: A message that can hold any of the supported value types and associated metadata.
  * arrayValue [ArrayValue](#arrayvalue)
  * blobValue `string`: A blob value. May have at most 1,000,000 bytes. When `exclude_from_indexes` is false, may have at most 1500 bytes. In JSON requests, must be base64-encoded.
  * booleanValue `boolean`: A boolean value.
  * doubleValue `number`: A double value.
  * entityValue [Entity](#entity)
  * excludeFromIndexes `boolean`: If the value should be excluded from all indexes including those defined explicitly.
  * geoPointValue [LatLng](#latlng)
  * integerValue `string`: An integer value.
  * keyValue [Key](#key)
  * meaning `integer`: The `meaning` field should only be populated for backwards compatibility.
  * nullValue `string` (values: NULL_VALUE): A null value.
  * stringValue `string`: A UTF-8 encoded string value. When `exclude_from_indexes` is false (it is indexed) , may have at most 1500 bytes. Otherwise, may be set to at most 1,000,000 bytes.
  * timestampValue `string`: A timestamp value. When stored in the Datastore, precise only to microseconds; any additional precision is rounded down.


