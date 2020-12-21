# @datafire/google_firestore

Client library for Cloud Firestore API

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

.then(data => {
  console.log(data);
});
```

## Description

Accesses the NoSQL document database built for automatic scaling, high performance, and ease of application development. 

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

### firestore.projects.databases.collectionGroups.indexes.delete
Deletes a composite index.


```js
google_firestore.firestore.projects.databases.collectionGroups.indexes.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
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

### firestore.projects.databases.collectionGroups.indexes.get
Gets a composite index.


```js
google_firestore.firestore.projects.databases.collectionGroups.indexes.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
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
* output [GoogleFirestoreAdminV1beta2Index](#googlefirestoreadminv1beta2index)

### firestore.projects.databases.collectionGroups.fields.patch
Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.


```js
google_firestore.firestore.projects.databases.collectionGroups.fields.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.
  * updateMask `string`: A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field.
  * body [GoogleFirestoreAdminV1beta2Field](#googlefirestoreadminv1beta2field)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### firestore.projects.databases.exportDocuments
Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.


```js
google_firestore.firestore.projects.databases.exportDocuments({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`.
  * body [GoogleFirestoreAdminV1beta2ExportDocumentsRequest](#googlefirestoreadminv1beta2exportdocumentsrequest)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### firestore.projects.databases.importDocuments
Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.


```js
google_firestore.firestore.projects.databases.importDocuments({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`.
  * body [GoogleFirestoreAdminV1beta2ImportDocumentsRequest](#googlefirestoreadminv1beta2importdocumentsrequest)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### firestore.projects.databases.collectionGroups.fields.list
Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.


```js
google_firestore.firestore.projects.databases.collectionGroups.fields.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
  * filter `string`: The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
  * pageSize `integer`: The number of results to return.
  * pageToken `string`: A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results.
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
* output [GoogleFirestoreAdminV1beta2ListFieldsResponse](#googlefirestoreadminv1beta2listfieldsresponse)

### firestore.projects.databases.collectionGroups.indexes.list
Lists composite indexes.


```js
google_firestore.firestore.projects.databases.collectionGroups.indexes.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
  * filter `string`: The filter to apply to list results.
  * pageSize `integer`: The number of results to return.
  * pageToken `string`: A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results.
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
* output [GoogleFirestoreAdminV1beta2ListIndexesResponse](#googlefirestoreadminv1beta2listindexesresponse)

### firestore.projects.databases.collectionGroups.indexes.create
Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.


```js
google_firestore.firestore.projects.databases.collectionGroups.indexes.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
  * body [GoogleFirestoreAdminV1beta2Index](#googlefirestoreadminv1beta2index)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)



## Definitions

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### GoogleFirestoreAdminV1beta2ExportDocumentsMetadata
* GoogleFirestoreAdminV1beta2ExportDocumentsMetadata `object`: Metadata for google.longrunning.Operation results from FirestoreAdmin.ExportDocuments.
  * collectionIds `array`: Which collection ids are being exported.
    * items `string`
  * endTime `string`: The time this operation completed. Will be unset if operation still in progress.
  * operationState `string` (values: OPERATION_STATE_UNSPECIFIED, INITIALIZING, PROCESSING, CANCELLING, FINALIZING, SUCCESSFUL, FAILED, CANCELLED): The state of the export operation.
  * outputUriPrefix `string`: Where the entities are being exported to.
  * progressBytes [GoogleFirestoreAdminV1beta2Progress](#googlefirestoreadminv1beta2progress)
  * progressDocuments [GoogleFirestoreAdminV1beta2Progress](#googlefirestoreadminv1beta2progress)
  * startTime `string`: The time this operation started.

### GoogleFirestoreAdminV1beta2ExportDocumentsRequest
* GoogleFirestoreAdminV1beta2ExportDocumentsRequest `object`: The request for FirestoreAdmin.ExportDocuments.
  * collectionIds `array`: Which collection ids to export. Unspecified means all collections.
    * items `string`
  * outputUriPrefix `string`: The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time.

### GoogleFirestoreAdminV1beta2ExportDocumentsResponse
* GoogleFirestoreAdminV1beta2ExportDocumentsResponse `object`: Returned in the google.longrunning.Operation response field.
  * outputUriPrefix `string`: Location of the output files. This can be used to begin an import into Cloud Firestore (this project or another project) after the operation completes successfully.

### GoogleFirestoreAdminV1beta2Field
* GoogleFirestoreAdminV1beta2Field `object`: Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id.
  * indexConfig [GoogleFirestoreAdminV1beta2IndexConfig](#googlefirestoreadminv1beta2indexconfig)
  * name `string`: A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.

### GoogleFirestoreAdminV1beta2FieldOperationMetadata
* GoogleFirestoreAdminV1beta2FieldOperationMetadata `object`: Metadata for google.longrunning.Operation results from FirestoreAdmin.UpdateField.
  * bytesProgress [GoogleFirestoreAdminV1beta2Progress](#googlefirestoreadminv1beta2progress)
  * documentProgress [GoogleFirestoreAdminV1beta2Progress](#googlefirestoreadminv1beta2progress)
  * endTime `string`: The time this operation completed. Will be unset if operation still in progress.
  * field `string`: The field resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`
  * indexConfigDeltas `array`: A list of IndexConfigDelta, which describe the intent of this operation.
    * items [GoogleFirestoreAdminV1beta2IndexConfigDelta](#googlefirestoreadminv1beta2indexconfigdelta)
  * startTime `string`: The time this operation started.
  * state `string` (values: OPERATION_STATE_UNSPECIFIED, INITIALIZING, PROCESSING, CANCELLING, FINALIZING, SUCCESSFUL, FAILED, CANCELLED): The state of the operation.

### GoogleFirestoreAdminV1beta2ImportDocumentsMetadata
* GoogleFirestoreAdminV1beta2ImportDocumentsMetadata `object`: Metadata for google.longrunning.Operation results from FirestoreAdmin.ImportDocuments.
  * collectionIds `array`: Which collection ids are being imported.
    * items `string`
  * endTime `string`: The time this operation completed. Will be unset if operation still in progress.
  * inputUriPrefix `string`: The location of the documents being imported.
  * operationState `string` (values: OPERATION_STATE_UNSPECIFIED, INITIALIZING, PROCESSING, CANCELLING, FINALIZING, SUCCESSFUL, FAILED, CANCELLED): The state of the import operation.
  * progressBytes [GoogleFirestoreAdminV1beta2Progress](#googlefirestoreadminv1beta2progress)
  * progressDocuments [GoogleFirestoreAdminV1beta2Progress](#googlefirestoreadminv1beta2progress)
  * startTime `string`: The time this operation started.

### GoogleFirestoreAdminV1beta2ImportDocumentsRequest
* GoogleFirestoreAdminV1beta2ImportDocumentsRequest `object`: The request for FirestoreAdmin.ImportDocuments.
  * collectionIds `array`: Which collection ids to import. Unspecified means all collections included in the import.
    * items `string`
  * inputUriPrefix `string`: Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1beta2.ExportDocumentsResponse.output_uri_prefix.

### GoogleFirestoreAdminV1beta2Index
* GoogleFirestoreAdminV1beta2Index `object`: Cloud Firestore indexes enable simple and complex queries against documents in a database.
  * fields `array`: The fields supported by this index. For composite indexes, this is always 2 or more fields. The last field entry is always for the field path `__name__`. If, on creation, `__name__` was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the `__name__` will be ordered ASCENDING (unless explicitly specified). For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field.
    * items [GoogleFirestoreAdminV1beta2IndexField](#googlefirestoreadminv1beta2indexfield)
  * name `string`: Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}` For single field indexes, this field will be empty.
  * queryScope `string` (values: QUERY_SCOPE_UNSPECIFIED, COLLECTION, COLLECTION_GROUP): Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection id. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection id as this index.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, READY, NEEDS_REPAIR): Output only. The serving state of the index.

### GoogleFirestoreAdminV1beta2IndexConfig
* GoogleFirestoreAdminV1beta2IndexConfig `object`: The index configuration for this field.
  * ancestorField `string`: Output only. Specifies the resource name of the `Field` from which this field's index configuration is set (when `uses_ancestor_config` is true), or from which it *would* be set if this field had no index configuration (when `uses_ancestor_config` is false).
  * indexes `array`: The indexes supported for this field.
    * items [GoogleFirestoreAdminV1beta2Index](#googlefirestoreadminv1beta2index)
  * reverting `boolean`: Output only When true, the `Field`'s index configuration is in the process of being reverted. Once complete, the index config will transition to the same state as the field specified by `ancestor_field`, at which point `uses_ancestor_config` will be `true` and `reverting` will be `false`.
  * usesAncestorConfig `boolean`: Output only. When true, the `Field`'s index configuration is set from the configuration specified by the `ancestor_field`. When false, the `Field`'s index configuration is defined explicitly.

### GoogleFirestoreAdminV1beta2IndexConfigDelta
* GoogleFirestoreAdminV1beta2IndexConfigDelta `object`: Information about an index configuration change.
  * changeType `string` (values: CHANGE_TYPE_UNSPECIFIED, ADD, REMOVE): Specifies how the index is changing.
  * index [GoogleFirestoreAdminV1beta2Index](#googlefirestoreadminv1beta2index)

### GoogleFirestoreAdminV1beta2IndexField
* GoogleFirestoreAdminV1beta2IndexField `object`: A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed.
  * arrayConfig `string` (values: ARRAY_CONFIG_UNSPECIFIED, CONTAINS): Indicates that this field supports operations on `array_value`s.
  * fieldPath `string`: Can be __name__. For single field indexes, this must match the name of the field or may be omitted.
  * order `string` (values: ORDER_UNSPECIFIED, ASCENDING, DESCENDING): Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.

### GoogleFirestoreAdminV1beta2IndexOperationMetadata
* GoogleFirestoreAdminV1beta2IndexOperationMetadata `object`: Metadata for google.longrunning.Operation results from FirestoreAdmin.CreateIndex.
  * endTime `string`: The time this operation completed. Will be unset if operation still in progress.
  * index `string`: The index resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
  * progressBytes [GoogleFirestoreAdminV1beta2Progress](#googlefirestoreadminv1beta2progress)
  * progressDocuments [GoogleFirestoreAdminV1beta2Progress](#googlefirestoreadminv1beta2progress)
  * startTime `string`: The time this operation started.
  * state `string` (values: OPERATION_STATE_UNSPECIFIED, INITIALIZING, PROCESSING, CANCELLING, FINALIZING, SUCCESSFUL, FAILED, CANCELLED): The state of the operation.

### GoogleFirestoreAdminV1beta2ListFieldsResponse
* GoogleFirestoreAdminV1beta2ListFieldsResponse `object`: The response for FirestoreAdmin.ListFields.
  * fields `array`: The requested fields.
    * items [GoogleFirestoreAdminV1beta2Field](#googlefirestoreadminv1beta2field)
  * nextPageToken `string`: A page token that may be used to request another page of results. If blank, this is the last page.

### GoogleFirestoreAdminV1beta2ListIndexesResponse
* GoogleFirestoreAdminV1beta2ListIndexesResponse `object`: The response for FirestoreAdmin.ListIndexes.
  * indexes `array`: The requested indexes.
    * items [GoogleFirestoreAdminV1beta2Index](#googlefirestoreadminv1beta2index)
  * nextPageToken `string`: A page token that may be used to request another page of results. If blank, this is the last page.

### GoogleFirestoreAdminV1beta2Progress
* GoogleFirestoreAdminV1beta2Progress `object`: Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used.
  * completedWork `string`: The amount of work completed.
  * estimatedWork `string`: The amount of work estimated.

### GoogleLongrunningOperation
* GoogleLongrunningOperation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.


