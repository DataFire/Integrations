# @datafire/google_cloudsearch

Client library for Cloud Search API

## Installation and Usage
```bash
npm install --save @datafire/google_cloudsearch
```
```js
let google_cloudsearch = require('@datafire/google_cloudsearch').create({
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

Cloud Search provides cloud-based search capabilities over G Suite data. The Cloud Search API allows indexing of non-G Suite data into Cloud Search.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudsearch.oauthCallback({
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
google_cloudsearch.oauthRefresh(null, context)
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

### cloudsearch.debug.datasources.items.searchByViewUrl
Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.


```js
google_cloudsearch.cloudsearch.debug.datasources.items.searchByViewUrl({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Source name, format: datasources/{source_id}
  * body [SearchItemsByViewUrlRequest](#searchitemsbyviewurlrequest)
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
* output [SearchItemsByViewUrlResponse](#searchitemsbyviewurlresponse)

### cloudsearch.debug.datasources.items.checkAccess
Checks whether an item is accessible by specified principal. **Note:** This API requires an admin account to execute.


```js
google_cloudsearch.cloudsearch.debug.datasources.items.checkAccess({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Item name, format: datasources/{source_id}/items/{item_id}
  * debugOptions.enableDebugging `boolean`: If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
  * body [Principal](#principal)
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
* output [CheckAccessResponse](#checkaccessresponse)

### cloudsearch.debug.identitysources.items.listForunmappedidentity
Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.


```js
google_cloudsearch.cloudsearch.debug.identitysources.items.listForunmappedidentity({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the identity source, in the following format: identitysources/{source_id}}
  * debugOptions.enableDebugging `boolean`: If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
  * groupResourceName `string`
  * pageSize `integer`: Maximum number of items to fetch in a request. Defaults to 100.
  * pageToken `string`: The next_page_token value returned from a previous List request, if any.
  * userResourceName `string`
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
* output [ListItemNamesForUnmappedIdentityResponse](#listitemnamesforunmappedidentityresponse)

### cloudsearch.debug.identitysources.unmappedids.list
Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.


```js
google_cloudsearch.cloudsearch.debug.identitysources.unmappedids.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the identity source, in the following format: identitysources/{source_id}
  * debugOptions.enableDebugging `boolean`: If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
  * pageSize `integer`: Maximum number of items to fetch in a request. Defaults to 100.
  * pageToken `string`: The next_page_token value returned from a previous List request, if any.
  * resolutionStatusCode `string` (values: CODE_UNSPECIFIED, NOT_FOUND, IDENTITY_SOURCE_NOT_FOUND, IDENTITY_SOURCE_MISCONFIGURED, TOO_MANY_MAPPINGS_FOUND, INTERNAL_ERROR): Limit users selection to this status.
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
* output [ListUnmappedIdentitiesResponse](#listunmappedidentitiesresponse)

### cloudsearch.indexing.datasources.items.delete
Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.


```js
google_cloudsearch.cloudsearch.indexing.datasources.items.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the item to delete. Format: datasources/{source_id}/items/{item_id}
  * connectorName `string`: Name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
  * debugOptions.enableDebugging `boolean`: If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
  * mode `string` (values: UNSPECIFIED, SYNCHRONOUS, ASYNCHRONOUS): Required. The RequestMode for this request.
  * version `string`: Required. The incremented version of the item to delete from the index. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes.
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

### cloudsearch.indexing.datasources.items.get
Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.


```js
google_cloudsearch.cloudsearch.indexing.datasources.items.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the item to get info. Format: datasources/{source_id}/items/{item_id}
  * connectorName `string`: Name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
  * debugOptions.enableDebugging `boolean`: If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
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
* output [Item](#item)

### cloudsearch.indexing.datasources.items.list
Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.


```js
google_cloudsearch.cloudsearch.indexing.datasources.items.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the Data Source to list Items. Format: datasources/{source_id}
  * brief `boolean`: When set to true, the indexing system only populates the following fields: name, version, queue. metadata.hash, metadata.title, metadata.sourceRepositoryURL, metadata.objectType, metadata.createTime, metadata.updateTime, metadata.contentLanguage, metadata.mimeType, structured_data.hash, content.hash, itemType, itemStatus.code, itemStatus.processingError.code, itemStatus.repositoryError.type, If this value is false, then all the fields are populated in Item.
  * connectorName `string`: Name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
  * debugOptions.enableDebugging `boolean`: If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
  * pageSize `integer`: Maximum number of items to fetch in a request. The max value is 1000 when brief is true. The max value is 10 if brief is false. The default value is 10
  * pageToken `string`: The next_page_token value returned from a previous List request, if any.
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
* output [ListItemsResponse](#listitemsresponse)

### cloudsearch.indexing.datasources.items.deleteQueueItems
Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.


```js
google_cloudsearch.cloudsearch.indexing.datasources.items.deleteQueueItems({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the Data Source to delete items in a queue. Format: datasources/{source_id}
  * body [DeleteQueueItemsRequest](#deletequeueitemsrequest)
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

### cloudsearch.indexing.datasources.items.poll
Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.


```js
google_cloudsearch.cloudsearch.indexing.datasources.items.poll({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the Data Source to poll items. Format: datasources/{source_id}
  * body [PollItemsRequest](#pollitemsrequest)
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
* output [PollItemsResponse](#pollitemsresponse)

### cloudsearch.indexing.datasources.items.unreserve
Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.


```js
google_cloudsearch.cloudsearch.indexing.datasources.items.unreserve({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the Data Source to unreserve all items. Format: datasources/{source_id}
  * body [UnreserveItemsRequest](#unreserveitemsrequest)
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

### cloudsearch.indexing.datasources.deleteSchema
Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.


```js
google_cloudsearch.cloudsearch.indexing.datasources.deleteSchema({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the data source to delete Schema. Format: datasources/{source_id}
  * debugOptions.enableDebugging `boolean`: If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
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

### cloudsearch.indexing.datasources.getSchema
Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.


```js
google_cloudsearch.cloudsearch.indexing.datasources.getSchema({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the data source to get Schema. Format: datasources/{source_id}
  * debugOptions.enableDebugging `boolean`: If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
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
* output [Schema](#schema)

### cloudsearch.indexing.datasources.updateSchema
Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.


```js
google_cloudsearch.cloudsearch.indexing.datasources.updateSchema({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the data source to update Schema. Format: datasources/{source_id}
  * body [UpdateSchemaRequest](#updateschemarequest)
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

### cloudsearch.indexing.datasources.items.index
Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.


```js
google_cloudsearch.cloudsearch.indexing.datasources.items.index({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the Item. Format: datasources/{source_id}/items/{item_id} This is a required field. The maximum length is 1536 characters.
  * body [IndexItemRequest](#indexitemrequest)
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

### cloudsearch.indexing.datasources.items.push
Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.


```js
google_cloudsearch.cloudsearch.indexing.datasources.items.push({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the item to push into the indexing queue. Format: datasources/{source_id}/items/{ID} This is a required field. The maximum length is 1536 characters.
  * body [PushItemRequest](#pushitemrequest)
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
* output [Item](#item)

### cloudsearch.indexing.datasources.items.upload
Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.


```js
google_cloudsearch.cloudsearch.indexing.datasources.items.upload({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the Item to start a resumable upload. Format: datasources/{source_id}/items/{item_id}. The maximum length is 1536 bytes.
  * body [StartUploadItemRequest](#startuploaditemrequest)
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
* output [UploadItemRef](#uploaditemref)

### cloudsearch.media.upload
Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.


```js
google_cloudsearch.cloudsearch.media.upload({
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceName **required** `string`: Name of the media that is being downloaded. See ReadRequest.resource_name.
  * body [Media](#media)
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
* output [Media](#media)

### cloudsearch.query.search
The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from G Suite Apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [G Suite domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).


```js
google_cloudsearch.cloudsearch.query.search({}, context)
```

#### Input
* input `object`
  * body [SearchRequest](#searchrequest)
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
* output [SearchResponse](#searchresponse)

### cloudsearch.query.sources.list
Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [G Suite domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).


```js
google_cloudsearch.cloudsearch.query.sources.list({}, context)
```

#### Input
* input `object`
  * pageToken `string`: Number of sources to return in the response.
  * requestOptions.debugOptions.enableDebugging `boolean`: If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
  * requestOptions.languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. The suggest API does not use this parameter. Instead, suggest autocompletes only based on characters in the query.
  * requestOptions.searchApplicationId `string`: The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922).
  * requestOptions.timeZone `string`: Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.
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
* output [ListQuerySourcesResponse](#listquerysourcesresponse)

### cloudsearch.query.suggest
Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [G Suite domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).


```js
google_cloudsearch.cloudsearch.query.suggest({}, context)
```

#### Input
* input `object`
  * body [SuggestRequest](#suggestrequest)
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
* output [SuggestResponse](#suggestresponse)

### cloudsearch.settings.datasources.list
Lists datasources. **Note:** This API requires an admin account to execute.


```js
google_cloudsearch.cloudsearch.settings.datasources.list({}, context)
```

#### Input
* input `object`
  * debugOptions.enableDebugging `boolean`: If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
  * pageSize `integer`: Maximum number of datasources to fetch in a request. The max value is 100. The default value is 10
  * pageToken `string`: Starting index of the results.
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
* output [ListDataSourceResponse](#listdatasourceresponse)

### cloudsearch.settings.datasources.create
Creates a datasource. **Note:** This API requires an admin account to execute.


```js
google_cloudsearch.cloudsearch.settings.datasources.create({}, context)
```

#### Input
* input `object`
  * body [DataSource](#datasource)
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

### cloudsearch.settings.searchapplications.list
Lists all search applications. **Note:** This API requires an admin account to execute.


```js
google_cloudsearch.cloudsearch.settings.searchapplications.list({}, context)
```

#### Input
* input `object`
  * debugOptions.enableDebugging `boolean`: If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
  * pageSize `integer`: The maximum number of items to return.
  * pageToken `string`: The next_page_token value returned from a previous List request, if any. The default value is 10
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
* output [ListSearchApplicationsResponse](#listsearchapplicationsresponse)

### cloudsearch.settings.searchapplications.create
Creates a search application. **Note:** This API requires an admin account to execute.


```js
google_cloudsearch.cloudsearch.settings.searchapplications.create({}, context)
```

#### Input
* input `object`
  * body [SearchApplication](#searchapplication)
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

### cloudsearch.settings.searchapplications.delete
Deletes a search application. **Note:** This API requires an admin account to execute.


```js
google_cloudsearch.cloudsearch.settings.searchapplications.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the search application to be deleted. Format: applications/{application_id}.
  * debugOptions.enableDebugging `boolean`: If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
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

### cloudsearch.settings.searchapplications.get
Gets the specified search application. **Note:** This API requires an admin account to execute.


```js
google_cloudsearch.cloudsearch.settings.searchapplications.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the search application. Format: searchapplications/{application_id}.
  * debugOptions.enableDebugging `boolean`: If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
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
* output [SearchApplication](#searchapplication)

### cloudsearch.settings.searchapplications.update
Updates a search application. **Note:** This API requires an admin account to execute.


```js
google_cloudsearch.cloudsearch.settings.searchapplications.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the Search Application. Format: searchapplications/{application_id}.
  * body [SearchApplication](#searchapplication)
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

### cloudsearch.settings.searchapplications.reset
Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.


```js
google_cloudsearch.cloudsearch.settings.searchapplications.reset({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the search application to be reset. Format: applications/{application_id}.
  * body [ResetSearchApplicationRequest](#resetsearchapplicationrequest)
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

### cloudsearch.stats.getIndex
Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.


```js
google_cloudsearch.cloudsearch.stats.getIndex({}, context)
```

#### Input
* input `object`
  * fromDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * fromDate.month `integer`: Month of date. Must be from 1 to 12.
  * fromDate.year `integer`: Year of date. Must be from 1 to 9999.
  * toDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * toDate.month `integer`: Month of date. Must be from 1 to 12.
  * toDate.year `integer`: Year of date. Must be from 1 to 9999.
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
* output [GetCustomerIndexStatsResponse](#getcustomerindexstatsresponse)

### cloudsearch.stats.index.datasources.get
Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.


```js
google_cloudsearch.cloudsearch.stats.index.datasources.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource id of the data source to retrieve statistics for, in the following format: "datasources/{source_id}"
  * fromDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * fromDate.month `integer`: Month of date. Must be from 1 to 12.
  * fromDate.year `integer`: Year of date. Must be from 1 to 9999.
  * toDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * toDate.month `integer`: Month of date. Must be from 1 to 12.
  * toDate.year `integer`: Year of date. Must be from 1 to 9999.
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
* output [GetDataSourceIndexStatsResponse](#getdatasourceindexstatsresponse)

### cloudsearch.stats.getQuery
Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.


```js
google_cloudsearch.cloudsearch.stats.getQuery({}, context)
```

#### Input
* input `object`
  * fromDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * fromDate.month `integer`: Month of date. Must be from 1 to 12.
  * fromDate.year `integer`: Year of date. Must be from 1 to 9999.
  * toDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * toDate.month `integer`: Month of date. Must be from 1 to 12.
  * toDate.year `integer`: Year of date. Must be from 1 to 9999.
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
* output [GetCustomerQueryStatsResponse](#getcustomerquerystatsresponse)

### cloudsearch.stats.query.searchapplications.get
Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.


```js
google_cloudsearch.cloudsearch.stats.query.searchapplications.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource id of the search application query stats, in the following format: searchapplications/{application_id}
  * fromDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * fromDate.month `integer`: Month of date. Must be from 1 to 12.
  * fromDate.year `integer`: Year of date. Must be from 1 to 9999.
  * toDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * toDate.month `integer`: Month of date. Must be from 1 to 12.
  * toDate.year `integer`: Year of date. Must be from 1 to 9999.
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
* output [GetSearchApplicationQueryStatsResponse](#getsearchapplicationquerystatsresponse)

### cloudsearch.stats.getSession
Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.


```js
google_cloudsearch.cloudsearch.stats.getSession({}, context)
```

#### Input
* input `object`
  * fromDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * fromDate.month `integer`: Month of date. Must be from 1 to 12.
  * fromDate.year `integer`: Year of date. Must be from 1 to 9999.
  * toDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * toDate.month `integer`: Month of date. Must be from 1 to 12.
  * toDate.year `integer`: Year of date. Must be from 1 to 9999.
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
* output [GetCustomerSessionStatsResponse](#getcustomersessionstatsresponse)

### cloudsearch.stats.session.searchapplications.get
Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.


```js
google_cloudsearch.cloudsearch.stats.session.searchapplications.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource id of the search application session stats, in the following format: searchapplications/{application_id}
  * fromDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * fromDate.month `integer`: Month of date. Must be from 1 to 12.
  * fromDate.year `integer`: Year of date. Must be from 1 to 9999.
  * toDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * toDate.month `integer`: Month of date. Must be from 1 to 12.
  * toDate.year `integer`: Year of date. Must be from 1 to 9999.
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
* output [GetSearchApplicationSessionStatsResponse](#getsearchapplicationsessionstatsresponse)

### cloudsearch.stats.getUser
Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.


```js
google_cloudsearch.cloudsearch.stats.getUser({}, context)
```

#### Input
* input `object`
  * fromDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * fromDate.month `integer`: Month of date. Must be from 1 to 12.
  * fromDate.year `integer`: Year of date. Must be from 1 to 9999.
  * toDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * toDate.month `integer`: Month of date. Must be from 1 to 12.
  * toDate.year `integer`: Year of date. Must be from 1 to 9999.
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
* output [GetCustomerUserStatsResponse](#getcustomeruserstatsresponse)

### cloudsearch.stats.user.searchapplications.get
Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.


```js
google_cloudsearch.cloudsearch.stats.user.searchapplications.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource id of the search application session stats, in the following format: searchapplications/{application_id}
  * fromDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * fromDate.month `integer`: Month of date. Must be from 1 to 12.
  * fromDate.year `integer`: Year of date. Must be from 1 to 9999.
  * toDate.day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * toDate.month `integer`: Month of date. Must be from 1 to 12.
  * toDate.year `integer`: Year of date. Must be from 1 to 9999.
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
* output [GetSearchApplicationUserStatsResponse](#getsearchapplicationuserstatsresponse)

### cloudsearch.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.


```js
google_cloudsearch.cloudsearch.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
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

### cloudsearch.operations.lro.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_cloudsearch.cloudsearch.operations.lro.list({
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



## Definitions

### BooleanOperatorOptions
* BooleanOperatorOptions `object`: Used to provide a search operator for boolean properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
  * operatorName `string`: Indicates the operator name required in the query in order to isolate the boolean property. For example, if operatorName is *closed* and the property's name is *isClosed*, then queries like *closed:<value>* show results only where the value of the property named *isClosed* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.

### BooleanPropertyOptions
* BooleanPropertyOptions `object`: Options for boolean properties.
  * operatorOptions [BooleanOperatorOptions](#booleanoperatoroptions)

### CheckAccessResponse
* CheckAccessResponse `object`
  * hasAccess `boolean`: Returns true if principal has access. Returns false otherwise.

### CompositeFilter
* CompositeFilter `object`
  * logicOperator `string` (values: AND, OR, NOT): The logic operator of the sub filter.
  * subFilters `array`: Sub filters.
    * items [Filter](#filter)

### CustomerIndexStats
* CustomerIndexStats `object`: Aggregation of items by status code as of the specified date.
  * date [Date](#date)
  * itemCountByStatus `array`: Number of items aggregrated by status code.
    * items [ItemCountByStatus](#itemcountbystatus)

### CustomerQueryStats
* CustomerQueryStats `object`
  * date [Date](#date)
  * queryCountByStatus `array`
    * items [QueryCountByStatus](#querycountbystatus)

### CustomerSessionStats
* CustomerSessionStats `object`
  * date [Date](#date)
  * searchSessionsCount `string`: The count of search sessions on the day

### CustomerUserStats
* CustomerUserStats `object`
  * date [Date](#date)
  * oneDayActiveUsersCount `string`: The count of unique active users in the past one day
  * sevenDaysActiveUsersCount `string`: The count of unique active users in the past seven days
  * thirtyDaysActiveUsersCount `string`: The count of unique active users in the past thirty days

### DataSource
* DataSource `object`: Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search.
  * disableModifications `boolean`: If true, sets the datasource to read-only mode. In read-only mode, the Indexing API rejects any requests to index or delete items in this source. Enabling read-only mode does not stop the processing of previously accepted data.
  * disableServing `boolean`: Disable serving any search or assist results.
  * displayName `string`: Required. Display name of the datasource The maximum length is 300 characters.
  * indexingServiceAccounts `array`: List of service accounts that have indexing access.
    * items `string`
  * itemsVisibility `array`: This field restricts visibility to items at the datasource level. Items within the datasource are restricted to the union of users and groups included in this field. Note that, this does not ensure access to a specific item, as users need to have ACL permissions on the contained items. This ensures a high level access on the entire datasource, and that the individual items are not shared outside this visibility.
    * items [GSuitePrincipal](#gsuiteprincipal)
  * name `string`: Name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource.
  * operationIds `array`: IDs of the Long Running Operations (LROs) currently running for this schema.
    * items `string`
  * shortName `string`: A short name or alias for the source. This value will be used to match the 'source' operator. For example, if the short name is *<value>* then queries like *source:<value>* will only return results for this source. The value must be unique across all datasources. The value must only contain alphanumeric characters (a-zA-Z0-9). The value cannot start with 'google' and cannot be one of the following: mail, gmail, docs, drive, groups, sites, calendar, hangouts, gplus, keep, people, teams. Its maximum length is 32 characters.

### DataSourceIndexStats
* DataSourceIndexStats `object`: Aggregation of items by status code as of the specified date.
  * date [Date](#date)
  * itemCountByStatus `array`: Number of items aggregrated by status code.
    * items [ItemCountByStatus](#itemcountbystatus)

### DataSourceRestriction
* DataSourceRestriction `object`: Restriction on Datasource.
  * filterOptions `array`: Filter options restricting the results. If multiple filters are present, they are grouped by object type before joining. Filters with the same object type are joined conjunctively, then the resulting expressions are joined disjunctively. The maximum number of elements is 20. NOTE: Suggest API supports only few filters at the moment: "objecttype", "type" and "mimetype". For now, schema specific filters cannot be used to filter suggestions.
    * items [FilterOptions](#filteroptions)
  * source [Source](#source)

### Date
* Date `object`: Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999.
  * day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month.
  * month `integer`: Month of date. Must be from 1 to 12.
  * year `integer`: Year of date. Must be from 1 to 9999.

### DateOperatorOptions
* DateOperatorOptions `object`: Optional. Provides a search operator for date properties. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
  * greaterThanOperatorName `string`: Indicates the operator name required in the query in order to isolate the date property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property's name is *closeDate*, then queries like *closedafter:<value>* show results only where the value of the property named *closeDate* is later than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
  * lessThanOperatorName `string`: Indicates the operator name required in the query in order to isolate the date property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property's name is *closeDate*, then queries like *closedbefore:<value>* show results only where the value of the property named *closeDate* is earlier than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
  * operatorName `string`: Indicates the actual string required in the query in order to isolate the date property. For example, suppose an issue tracking schema object has a property named *closeDate* that specifies an operator with an operatorName of *closedon*. For searches on that data, queries like *closedon:<value>* show results only where the value of the *closeDate* property matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the indexed datasource. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.

### DatePropertyOptions
* DatePropertyOptions `object`: Options for date properties.
  * operatorOptions [DateOperatorOptions](#dateoperatoroptions)

### DateValues
* DateValues `object`: List of date values.
  * values `array`
    * items [Date](#date)

### DebugOptions
* DebugOptions `object`: Shared request debug options for all cloudsearch RPC methods.
  * enableDebugging `boolean`: If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.

### DeleteQueueItemsRequest
* DeleteQueueItemsRequest `object`
  * connectorName `string`: Name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
  * debugOptions [DebugOptions](#debugoptions)
  * queue `string`: Name of a queue to delete items from.

### DisplayedProperty
* DisplayedProperty `object`: A reference to a top-level property within the object that should be displayed in search results. The values of the chosen properties is displayed in the search results along with the display label for that property if one is specified. If a display label is not specified, only the values is shown.
  * propertyName `string`: The name of the top-level property as defined in a property definition for the object. If the name is not a defined property in the schema, an error is given when attempting to update the schema.

### DoubleOperatorOptions
* DoubleOperatorOptions `object`: Used to provide a search operator for double properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
  * operatorName `string`: Indicates the operator name required in the query in order to use the double property in sorting or as a facet. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.

### DoublePropertyOptions
* DoublePropertyOptions `object`: Options for double properties.
  * operatorOptions [DoubleOperatorOptions](#doubleoperatoroptions)

### DoubleValues
* DoubleValues `object`: List of double values.
  * values `array`
    * items `number`

### DriveFollowUpRestrict
* DriveFollowUpRestrict `object`: Drive follow-up search restricts (e.g. "followup:suggestions").
  * type `string` (values: UNSPECIFIED, FOLLOWUP_SUGGESTIONS, FOLLOWUP_ACTION_ITEMS)

### DriveLocationRestrict
* DriveLocationRestrict `object`: Drive location search restricts (e.g. "is:starred").
  * type `string` (values: UNSPECIFIED, TRASHED, STARRED)

### DriveMimeTypeRestrict
* DriveMimeTypeRestrict `object`: Drive mime-type search restricts (e.g. "type:pdf").
  * type `string` (values: UNSPECIFIED, PDF, DOCUMENT, PRESENTATION, SPREADSHEET, FORM, DRAWING, SCRIPT, MAP, IMAGE, AUDIO, VIDEO, FOLDER, ARCHIVE, SITE)

### DriveTimeSpanRestrict
* DriveTimeSpanRestrict `object`: The time span search restrict (e.g. "after:2017-09-11 before:2017-09-12").
  * type `string` (values: UNSPECIFIED, TODAY, YESTERDAY, LAST_7_DAYS, LAST_30_DAYS, LAST_90_DAYS)

### EmailAddress
* EmailAddress `object`: A person's email address.
  * emailAddress `string`: The email address.

### EnumOperatorOptions
* EnumOperatorOptions `object`: Used to provide a search operator for enum properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. For example, if you provide no operator for a *priority* enum property with possible values *p0* and *p1*, a query that contains the term *p0* returns items that have *p0* as the value of the *priority* property, as well as any items that contain the string *p0* in other fields. If you provide an operator name for the enum, such as *priority*, then search users can use that operator to refine results to only items that have *p0* as this property's value, with the query *priority:p0*.
  * operatorName `string`: Indicates the operator name required in the query in order to isolate the enum property. For example, if operatorName is *priority* and the property's name is *priorityVal*, then queries like *priority:<value>* show results only where the value of the property named *priorityVal* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.

### EnumPropertyOptions
* EnumPropertyOptions `object`: Options for enum properties, which allow you to define a restricted set of strings to match user queries, set rankings for those string values, and define an operator name to be paired with those strings so that users can narrow results to only items with a specific value. For example, for items in a request tracking system with priority information, you could define *p0* as an allowable enum value and tie this enum to the operator name *priority* so that search users could add *priority:p0* to their query to restrict the set of results to only those items indexed with the value *p0*.
  * operatorOptions [EnumOperatorOptions](#enumoperatoroptions)
  * orderedRanking `string` (values: NO_ORDER, ASCENDING, DESCENDING): Used to specify the ordered ranking for the enumeration that determines how the integer values provided in the possible EnumValuePairs are used to rank results. If specified, integer values must be provided for all possible EnumValuePair values given for this property. Can only be used if isRepeatable is false.
  * possibleValues `array`: The list of possible values for the enumeration property. All EnumValuePairs must provide a string value. If you specify an integer value for one EnumValuePair, then all possible EnumValuePairs must provide an integer value. Both the string value and integer value must be unique over all possible values. Once set, possible values cannot be removed or modified. If you supply an ordered ranking and think you might insert additional enum values in the future, leave gaps in the initial integer values to allow adding a value in between previously registered values. The maximum number of elements is 100.
    * items [EnumValuePair](#enumvaluepair)

### EnumValuePair
* EnumValuePair `object`: The enumeration value pair defines two things: a required string value and an optional integer value. The string value defines the necessary query term required to retrieve that item, such as *p0* for a priority item. The integer value determines the ranking of that string value relative to other enumerated values for the same property. For example, you might associate *p0* with *0* and define another enum pair such as *p1* and *1*. You must use the integer value in combination with ordered ranking to set the ranking of a given value relative to other enumerated values for the same property name. Here, a ranking order of DESCENDING for *priority* properties results in a ranking boost for items indexed with a value of *p0* compared to items indexed with a value of *p1*. Without a specified ranking order, the integer value has no effect on item ranking.
  * integerValue `integer`: The integer value of the EnumValuePair which must be non-negative. Optional.
  * stringValue `string`: The string value of the EnumValuePair. The maximum length is 32 characters.

### EnumValues
* EnumValues `object`: List of enum values.
  * values `array`: The maximum allowable length for string values is 32 characters.
    * items `string`

### ErrorInfo
* ErrorInfo `object`: Error information about the response.
  * errorMessages `array`
    * items [ErrorMessage](#errormessage)

### ErrorMessage
* ErrorMessage `object`: Error message per source response.
  * errorMessage `string`
  * source [Source](#source)

### FacetBucket
* FacetBucket `object`: A bucket in a facet is the basic unit of operation. A bucket can comprise either a single value OR a contiguous range of values, depending on the type of the field bucketed. FacetBucket is currently used only for returning the response object.
  * count `integer`: Number of results that match the bucket value. Counts are only returned for searches when count accuracy is ensured. Can be empty.
  * percentage `integer`: Percent of results that match the bucket value. The returned value is between (0-100], and is rounded down to an integer if fractional. If the value is not explicitly returned, it represents a percentage value that rounds to 0. Percentages are returned for all searches, but are an estimate. Because percentages are always returned, you should render percentages instead of counts.
  * value [Value](#value)

### FacetOptions
* FacetOptions `object`: Specifies operators to return facet results for. There will be one FacetResult for every source_name/object_type/operator_name combination.
  * numFacetBuckets `integer`: Maximum number of facet buckets that should be returned for this facet. Defaults to 10. Maximum value is 100.
  * objectType `string`: If object_type is set, only those objects of that type will be used to compute facets. If empty, then all objects will be used to compute facets.
  * operatorName `string`: Name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions
  * sourceName `string`: Source name to facet on. Format: datasources/{source_id} If empty, all data sources will be used.

### FacetResult
* FacetResult `object`: Source specific facet response
  * buckets `array`: FacetBuckets for values in response containing at least a single result.
    * items [FacetBucket](#facetbucket)
  * objectType `string`: Object type for which facet results are returned. Can be empty.
  * operatorName `string`: Name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions
  * sourceName `string`: Source name for which facet results are returned. Will not be empty.

### FieldViolation
* FieldViolation `object`
  * description `string`: Description of the error.
  * field `string`: Path of field with violation.

### Filter
* Filter `object`: A generic way of expressing filters in a query, which supports two approaches: **1. Setting a ValueFilter.** The name must match an operator_name defined in the schema for your data source. **2. Setting a CompositeFilter.** The filters are evaluated using the logical operator. The top-level operators can only be either an AND or a NOT. AND can appear only at the top-most level. OR can appear only under a top-level AND.
  * compositeFilter [CompositeFilter](#compositefilter)
  * valueFilter [ValueFilter](#valuefilter)

### FilterOptions
* FilterOptions `object`: Filter options to be applied on query.
  * filter [Filter](#filter)
  * objectType `string`: If object_type is set, only objects of that type are returned. This should correspond to the name of the object that was registered within the definition of schema. The maximum length is 256 characters.

### FreshnessOptions
* FreshnessOptions `object`: Indicates which freshness property to use when adjusting search ranking for an item. Fresher, more recent dates indicate higher quality. Use the freshness option property that best works with your data. For fileshare documents, last modified time is most relevant. For calendar event data, the time when the event occurs is a more relevant freshness indicator. In this way, calendar events that occur closer to the time of the search query are considered higher quality and ranked accordingly.
  * freshnessDuration `string`: The duration after which an object should be considered stale. The default value is 180 days (in seconds).
  * freshnessProperty `string`: This property indicates the freshness level of the object in the index. If set, this property must be a top-level property within the property definitions and it must be a timestamp type or date type. Otherwise, the Indexing API uses updateTime as the freshness indicator. The maximum length is 256 characters. When a property is used to calculate freshness, the value defaults to 2 years from the current time.

### GSuitePrincipal
* GSuitePrincipal `object`
  * gsuiteDomain `boolean`: This principal represents all users of the G Suite domain of the customer.
  * gsuiteGroupEmail `string`: This principal references a G Suite group account
  * gsuiteUserEmail `string`: This principal references a G Suite user account

### GetCustomerIndexStatsResponse
* GetCustomerIndexStatsResponse `object`
  * stats `array`: Summary of indexed item counts, one for each day in the requested range.
    * items [CustomerIndexStats](#customerindexstats)

### GetCustomerQueryStatsResponse
* GetCustomerQueryStatsResponse `object`
  * stats `array`
    * items [CustomerQueryStats](#customerquerystats)

### GetCustomerSessionStatsResponse
* GetCustomerSessionStatsResponse `object`
  * stats `array`
    * items [CustomerSessionStats](#customersessionstats)

### GetCustomerUserStatsResponse
* GetCustomerUserStatsResponse `object`
  * stats `array`
    * items [CustomerUserStats](#customeruserstats)

### GetDataSourceIndexStatsResponse
* GetDataSourceIndexStatsResponse `object`
  * stats `array`: Summary of indexed item counts, one for each day in the requested range.
    * items [DataSourceIndexStats](#datasourceindexstats)

### GetSearchApplicationQueryStatsResponse
* GetSearchApplicationQueryStatsResponse `object`
  * stats `array`
    * items [SearchApplicationQueryStats](#searchapplicationquerystats)

### GetSearchApplicationSessionStatsResponse
* GetSearchApplicationSessionStatsResponse `object`
  * stats `array`
    * items [SearchApplicationSessionStats](#searchapplicationsessionstats)

### GetSearchApplicationUserStatsResponse
* GetSearchApplicationUserStatsResponse `object`
  * stats `array`
    * items [SearchApplicationUserStats](#searchapplicationuserstats)

### HtmlOperatorOptions
* HtmlOperatorOptions `object`: Used to provide a search operator for html properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
  * operatorName `string`: Indicates the operator name required in the query in order to isolate the html property. For example, if operatorName is *subject* and the property's name is *subjectLine*, then queries like *subject:<value>* show results only where the value of the property named *subjectLine* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator return all items where *<value>* matches the value of any html properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.

### HtmlPropertyOptions
* HtmlPropertyOptions `object`: Options for html properties.
  * operatorOptions [HtmlOperatorOptions](#htmloperatoroptions)
  * retrievalImportance [RetrievalImportance](#retrievalimportance)

### HtmlValues
* HtmlValues `object`: List of html values.
  * values `array`: The maximum allowable length for html values is 2048 characters.
    * items `string`

### IndexItemOptions
* IndexItemOptions `object`
  * allowUnknownGsuitePrincipals `boolean`: Specifies if the index request should allow gsuite principals that do not exist or are deleted in the index request.

### IndexItemRequest
* IndexItemRequest `object`
  * connectorName `string`: Name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
  * debugOptions [DebugOptions](#debugoptions)
  * indexItemOptions [IndexItemOptions](#indexitemoptions)
  * item [Item](#item)
  * mode `string` (values: UNSPECIFIED, SYNCHRONOUS, ASYNCHRONOUS): Required. The RequestMode for this request.

### IntegerOperatorOptions
* IntegerOperatorOptions `object`: Used to provide a search operator for integer properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
  * greaterThanOperatorName `string`: Indicates the operator name required in the query in order to isolate the integer property using the greater-than operator. For example, if greaterThanOperatorName is *priorityabove* and the property's name is *priorityVal*, then queries like *priorityabove:<value>* show results only where the value of the property named *priorityVal* is greater than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
  * lessThanOperatorName `string`: Indicates the operator name required in the query in order to isolate the integer property using the less-than operator. For example, if lessThanOperatorName is *prioritybelow* and the property's name is *priorityVal*, then queries like *prioritybelow:<value>* show results only where the value of the property named *priorityVal* is less than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
  * operatorName `string`: Indicates the operator name required in the query in order to isolate the integer property. For example, if operatorName is *priority* and the property's name is *priorityVal*, then queries like *priority:<value>* show results only where the value of the property named *priorityVal* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.

### IntegerPropertyOptions
* IntegerPropertyOptions `object`: Options for integer properties.
  * maximumValue `string`: The maximum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values greater than the maximum are accepted and ranked with the same weight as items indexed with the maximum value.
  * minimumValue `string`: The minimum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values less than the minimum are accepted and ranked with the same weight as items indexed with the minimum value.
  * operatorOptions [IntegerOperatorOptions](#integeroperatoroptions)
  * orderedRanking `string` (values: NO_ORDER, ASCENDING, DESCENDING): Used to specify the ordered ranking for the integer. Can only be used if isRepeatable is false.

### IntegerValues
* IntegerValues `object`: List of integer values.
  * values `array`
    * items `string`

### Interaction
* Interaction `object`: Represents an interaction between a user and an item.
  * interactionTime `string`: The time when the user acted on the item. If multiple actions of the same type exist for a single user, only the most recent action is recorded.
  * principal [Principal](#principal)
  * type `string` (values: UNSPECIFIED, VIEW, EDIT)

### Item
* Item `object`: Represents a single object that is an item in the search index, such as a file, folder, or a database record.
  * acl [ItemAcl](#itemacl)
  * content [ItemContent](#itemcontent)
  * itemType `string` (values: UNSPECIFIED, CONTENT_ITEM, CONTAINER_ITEM, VIRTUAL_CONTAINER_ITEM): Type for this item.
  * metadata [ItemMetadata](#itemmetadata)
  * name `string`: Name of the Item. Format: datasources/{source_id}/items/{item_id} This is a required field. The maximum length is 1536 characters.
  * payload `string`: Additional state connector can store for this item. The maximum length is 10000 bytes.
  * queue `string`: Queue this item belongs to. The maximum length is 100 characters.
  * status [ItemStatus](#itemstatus)
  * structuredData [ItemStructuredData](#itemstructureddata)
  * version `string`: Required. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't index or delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes.

### ItemAcl
* ItemAcl `object`: Access control list information for the item. For more information see [Map ACLs](/cloud-search/docs/guides/acls).
  * aclInheritanceType `string` (values: NOT_APPLICABLE, CHILD_OVERRIDE, PARENT_OVERRIDE, BOTH_PERMIT): Sets the type of access rules to apply when an item inherits its ACL from a parent. This should always be set in tandem with the inheritAclFrom field. Also, when the inheritAclFrom field is set, this field should be set to a valid AclInheritanceType.
  * deniedReaders `array`: List of principals who are explicitly denied access to the item in search results. While principals are denied access by default, use denied readers to handle exceptions and override the list allowed readers. The maximum number of elements is 100.
    * items [Principal](#principal)
  * inheritAclFrom `string`: Name of the item to inherit the Access Permission List (ACL) from. Note: ACL inheritance *only* provides access permissions to child items and does not define structural relationships, nor does it provide convenient ways to delete large groups of items. Deleting an ACL parent from the index only alters the access permissions of child items that reference the parent in the inheritAclFrom field. The item is still in the index, but may not visible in search results. By contrast, deletion of a container item also deletes all items that reference the container via the containerName field. The maximum length for this field is 1536 characters.
  * owners `array`: Optional. List of owners for the item. This field has no bearing on document access permissions. It does, however, offer a slight ranking boosts items where the querying user is an owner. The maximum number of elements is 5.
    * items [Principal](#principal)
  * readers `array`: List of principals who are allowed to see the item in search results. Optional if inheriting permissions from another item or if the item is not intended to be visible, such as virtual containers. The maximum number of elements is 1000.
    * items [Principal](#principal)

### ItemContent
* ItemContent `object`: Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded.
  * contentDataRef [UploadItemRef](#uploaditemref)
  * contentFormat `string` (values: UNSPECIFIED, HTML, TEXT, RAW)
  * hash `string`: Hashing info calculated and provided by the API client for content. Can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.
  * inlineContent `string`: Content that is supplied inlined within the update method. The maximum length is 102400 bytes (100 KiB).

### ItemCountByStatus
* ItemCountByStatus `object`
  * count `string`: Number of items matching the status code.
  * statusCode `string` (values: CODE_UNSPECIFIED, ERROR, MODIFIED, NEW_ITEM, ACCEPTED): Status of the items.

### ItemMetadata
* ItemMetadata `object`: Available metadata fields for the item.
  * containerName `string`: The name of the container for this item. Deletion of the container item leads to automatic deletion of this item. Note: ACLs are not inherited from a container item. To provide ACL inheritance for an item, use the inheritAclFrom field. The maximum length is 1536 characters.
  * contentLanguage `string`: The BCP-47 language code for the item, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. The maximum length is 32 characters.
  * createTime `string`: The time when the item was created in the source repository.
  * hash `string`: Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.
  * interactions `array`: A list of interactions for the item. Interactions are used to improve Search quality, but are not exposed to end users. The maximum number of elements is 1000.
    * items [Interaction](#interaction)
  * keywords `array`: Additional keywords or phrases that should match the item. Used internally for user generated content. The maximum number of elements is 100. The maximum length is 8192 characters.
    * items `string`
  * mimeType `string`: The original mime-type of ItemContent.content in the source repository. The maximum length is 256 characters.
  * objectType `string`: The type of the item. This should correspond to the name of an object definition in the schema registered for the data source. For example, if the schema for the data source contains an object definition with name 'document', then item indexing requests for objects of that type should set objectType to 'document'. The maximum length is 256 characters.
  * searchQualityMetadata [SearchQualityMetadata](#searchqualitymetadata)
  * sourceRepositoryUrl `string`: Link to the source repository serving the data. Search results apply this link to the title. Whitespace or special characters may cause Cloud Search result links to trigger a redirect notice; to avoid this, encode the URL. The maximum length is 2048 characters.
  * title `string`: The title of the item. If given, this will be the displayed title of the Search result. The maximum length is 2048 characters.
  * updateTime `string`: The time when the item was last modified in the source repository.

### ItemStatus
* ItemStatus `object`: This contains item's status and any errors.
  * code `string` (values: CODE_UNSPECIFIED, ERROR, MODIFIED, NEW_ITEM, ACCEPTED): Status code.
  * processingErrors `array`: Error details in case the item is in ERROR state.
    * items [ProcessingError](#processingerror)
  * repositoryErrors `array`: Repository error reported by connector.
    * items [RepositoryError](#repositoryerror)

### ItemStructuredData
* ItemStructuredData `object`: Available structured data fields for the item.
  * hash `string`: Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.
  * object [StructuredDataObject](#structureddataobject)

### ListDataSourceResponse
* ListDataSourceResponse `object`
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * sources `array`
    * items [DataSource](#datasource)

### ListItemNamesForUnmappedIdentityResponse
* ListItemNamesForUnmappedIdentityResponse `object`
  * itemNames `array`
    * items `string`
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### ListItemsResponse
* ListItemsResponse `object`
  * items `array`
    * items [Item](#item)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### ListQuerySourcesResponse
* ListQuerySourcesResponse `object`: List sources response.
  * nextPageToken `string`
  * sources `array`
    * items [QuerySource](#querysource)

### ListSearchApplicationsResponse
* ListSearchApplicationsResponse `object`
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * searchApplications `array`
    * items [SearchApplication](#searchapplication)

### ListUnmappedIdentitiesResponse
* ListUnmappedIdentitiesResponse `object`
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * unmappedIdentities `array`
    * items [UnmappedIdentity](#unmappedidentity)

### MatchRange
* MatchRange `object`: Matched range of a snippet [start, end).
  * end `integer`: End of the match in the snippet.
  * start `integer`: Starting position of the match in the snippet.

### Media
* Media `object`: Media resource.
  * resourceName `string`: Name of the media resource.

### Metadata
* Metadata `object`: Metadata of a matched search result.
  * createTime `string`: The creation time for this document or object in the search result.
  * displayOptions [ResultDisplayMetadata](#resultdisplaymetadata)
  * fields `array`: Indexed fields in structured data, returned as a generic named property.
    * items [NamedProperty](#namedproperty)
  * mimeType `string`: Mime type of the search result.
  * objectType `string`: Object type of the search result.
  * owner [Person](#person)
  * source [Source](#source)
  * updateTime `string`: The last modified date for the object in the search result. If not set in the item, the value returned here is empty. When `updateTime` is used for calculating freshness and is not set, this value defaults to 2 years from the current time.

### Metaline
* Metaline `object`: A metaline is a list of properties that are displayed along with the search result to provide context.
  * properties `array`: The list of displayed properties for the metaline. The maximum number of properties is 5.
    * items [DisplayedProperty](#displayedproperty)

### Name
* Name `object`: A person's name.
  * displayName `string`: The read-only display name formatted according to the locale specified by the viewer's account or the Accept-Language HTTP header.

### NamedProperty
* NamedProperty `object`: A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`.
  * booleanValue `boolean`
  * dateValues [DateValues](#datevalues)
  * doubleValues [DoubleValues](#doublevalues)
  * enumValues [EnumValues](#enumvalues)
  * htmlValues [HtmlValues](#htmlvalues)
  * integerValues [IntegerValues](#integervalues)
  * name `string`: The name of the property. This name should correspond to the name of the property that was registered for object definition in the schema. The maximum allowable length for this property is 256 characters.
  * objectValues [ObjectValues](#objectvalues)
  * textValues [TextValues](#textvalues)
  * timestampValues [TimestampValues](#timestampvalues)

### ObjectDefinition
* ObjectDefinition `object`: The definition for an object within a data source.
  * name `string`: Name for the object, which then defines its type. Item indexing requests should set the objectType field equal to this value. For example, if *name* is *Document*, then indexing requests for items of type Document should set objectType equal to *Document*. Each object definition must be uniquely named within a schema. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters.
  * options [ObjectOptions](#objectoptions)
  * propertyDefinitions `array`: The property definitions for the object. The maximum number of elements is 1000.
    * items [PropertyDefinition](#propertydefinition)

### ObjectDisplayOptions
* ObjectDisplayOptions `object`: The display options for an object.
  * metalines `array`: Defines the properties that are displayed in the metalines of the search results. The property values are displayed in the order given here. If a property holds multiple values, all of the values are displayed before the next properties. For this reason, it is a good practice to specify singular properties before repeated properties in this list. All of the properties must set is_returnable to true. The maximum number of metalines is 3.
    * items [Metaline](#metaline)
  * objectDisplayLabel `string`: The user friendly label to display in the search result to indicate the type of the item. This is OPTIONAL; if not provided, an object label isn't displayed on the context line of the search results. The maximum length is 64 characters.

### ObjectOptions
* ObjectOptions `object`: The options for an object.
  * displayOptions [ObjectDisplayOptions](#objectdisplayoptions)
  * freshnessOptions [FreshnessOptions](#freshnessoptions)

### ObjectPropertyOptions
* ObjectPropertyOptions `object`: Options for object properties.
  * subobjectProperties `array`: The properties of the sub-object. These properties represent a nested object. For example, if this property represents a postal address, the subobjectProperties might be named *street*, *city*, and *state*. The maximum number of elements is 1000.
    * items [PropertyDefinition](#propertydefinition)

### ObjectValues
* ObjectValues `object`: List of object values.
  * values `array`
    * items [StructuredDataObject](#structureddataobject)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### PeopleSuggestion
* PeopleSuggestion `object`: This field contains information about the person being suggested.
  * person [Person](#person)

### Person
* Person `object`: Object to represent a person.
  * emailAddresses `array`: The person's email addresses
    * items [EmailAddress](#emailaddress)
  * name `string`: The resource name of the person to provide information about. See People.get from Google People API.
  * obfuscatedId `string`: Obfuscated ID of a person.
  * personNames `array`: The person's name
    * items [Name](#name)
  * photos `array`: A person's read-only photo. A picture shown next to the person's name to help others recognize the person in search results.
    * items [Photo](#photo)

### Photo
* Photo `object`: A person's photo.
  * url `string`: The URL of the photo.

### PollItemsRequest
* PollItemsRequest `object`
  * connectorName `string`: Name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
  * debugOptions [DebugOptions](#debugoptions)
  * limit `integer`: Maximum number of items to return. The maximum value is 100 and the default value is 20.
  * queue `string`: Queue name to fetch items from. If unspecified, PollItems will fetch from 'default' queue. The maximum length is 100 characters.
  * statusCodes `array`: Limit the items polled to the ones with these statuses.
    * items `string` (values: CODE_UNSPECIFIED, ERROR, MODIFIED, NEW_ITEM, ACCEPTED)

### PollItemsResponse
* PollItemsResponse `object`
  * items `array`: Set of items from the queue available for connector to process. These items have the following subset of fields populated: version metadata.hash structured_data.hash content.hash payload status queue
    * items [Item](#item)

### Principal
* Principal `object`: Reference to a user, group, or domain.
  * groupResourceName `string`: This principal is a group identified using an external identity. The name field must specify the group resource name with this format: identitysources/{source_id}/groups/{ID}
  * gsuitePrincipal [GSuitePrincipal](#gsuiteprincipal)
  * userResourceName `string`: This principal is a user identified using an external identity. The name field must specify the user resource name with this format: identitysources/{source_id}/users/{ID}

### ProcessingError
* ProcessingError `object`
  * code `string` (values: PROCESSING_ERROR_CODE_UNSPECIFIED, MALFORMED_REQUEST, UNSUPPORTED_CONTENT_FORMAT, INDIRECT_BROKEN_ACL, ACL_CYCLE): Error code indicating the nature of the error.
  * errorMessage `string`: Description of the error.
  * fieldViolations `array`: In case the item fields are invalid, this field contains the details about the validation errors.
    * items [FieldViolation](#fieldviolation)

### PropertyDefinition
* PropertyDefinition `object`: The definition of a property within an object.
  * booleanPropertyOptions [BooleanPropertyOptions](#booleanpropertyoptions)
  * datePropertyOptions [DatePropertyOptions](#datepropertyoptions)
  * displayOptions [PropertyDisplayOptions](#propertydisplayoptions)
  * doublePropertyOptions [DoublePropertyOptions](#doublepropertyoptions)
  * enumPropertyOptions [EnumPropertyOptions](#enumpropertyoptions)
  * htmlPropertyOptions [HtmlPropertyOptions](#htmlpropertyoptions)
  * integerPropertyOptions [IntegerPropertyOptions](#integerpropertyoptions)
  * isFacetable `boolean`: Indicates that the property can be used for generating facets. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for Boolean, Enum, and Text properties.
  * isRepeatable `boolean`: Indicates that multiple values are allowed for the property. For example, a document only has one description but can have multiple comments. Cannot be true for properties whose type is a boolean. If set to false, properties that contain more than one value cause the indexing request for that item to be rejected.
  * isReturnable `boolean`: Indicates that the property identifies data that should be returned in search results via the Query API. If set to *true*, indicates that Query API users can use matching property fields in results. However, storing fields requires more space allocation and uses more bandwidth for search queries, which impacts performance over large datasets. Set to *true* here only if the field is needed for search results. Cannot be true for properties whose type is an object.
  * isSortable `boolean`: Indicates that the property can be used for sorting. Cannot be true for properties that are repeatable. Cannot be true for properties whose type is object or user identifier. IsReturnable must be true to set this option. Only supported for Boolean, Date, Double, Integer, and Timestamp properties.
  * isSuggestable `boolean`: Indicates that the property can be used for generating query suggestions.
  * isWildcardSearchable `boolean`: Indicates that users can perform wildcard search for this property. Only supported for Text properties. IsReturnable must be true to set this option. In a given datasource maximum of 5 properties can be marked as is_wildcard_searchable.
  * name `string`: The name of the property. Item indexing requests sent to the Indexing API should set the property name equal to this value. For example, if name is *subject_line*, then indexing requests for document items with subject fields should set the name for that field equal to *subject_line*. Use the name as the identifier for the object property. Once registered as a property for an object, you cannot re-use this name for another property within that object. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters.
  * objectPropertyOptions [ObjectPropertyOptions](#objectpropertyoptions)
  * textPropertyOptions [TextPropertyOptions](#textpropertyoptions)
  * timestampPropertyOptions [TimestampPropertyOptions](#timestamppropertyoptions)

### PropertyDisplayOptions
* PropertyDisplayOptions `object`: The display options for a property.
  * displayLabel `string`: The user friendly label for the property that is used if the property is specified to be displayed in ObjectDisplayOptions. If provided, the display label is shown in front of the property values when the property is part of the object display options. For example, if the property value is '1', the value by itself may not be useful context for the user. If the display name given was 'priority', then the user sees 'priority : 1' in the search results which provides clear context to search users. This is OPTIONAL; if not given, only the property values are displayed. The maximum length is 64 characters.

### PushItem
* PushItem `object`: Represents an item to be pushed to the indexing queue.
  * contentHash `string`: Content hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.
  * metadataHash `string`: Metadata hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.
  * payload `string`: Provides additional document state information for the connector, such as an alternate repository ID and other metadata. The maximum length is 8192 bytes.
  * queue `string`: Queue to which this item belongs to. The default queue is chosen if this field is not specified. The maximum length is 512 characters.
  * repositoryError [RepositoryError](#repositoryerror)
  * structuredDataHash `string`: Structured data hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.
  * type `string` (values: UNSPECIFIED, MODIFIED, NOT_MODIFIED, REPOSITORY_ERROR, REQUEUE): The type of the push operation that defines the push behavior.

### PushItemRequest
* PushItemRequest `object`
  * connectorName `string`: Name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
  * debugOptions [DebugOptions](#debugoptions)
  * item [PushItem](#pushitem)

### QueryCountByStatus
* QueryCountByStatus `object`
  * count `string`
  * statusCode `integer`: This represents the http status code.

### QueryInterpretation
* QueryInterpretation `object`
  * interpretationType `string` (values: NONE, BLEND, REPLACE)
  * interpretedQuery `string`: The interpretation of the query used in search. For example, queries with natural language intent like "email from john" will be interpreted as "from:john source:mail". This field will not be filled when the reason is NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY.
  * reason `string` (values: UNSPECIFIED, QUERY_HAS_NATURAL_LANGUAGE_INTENT, NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY): The reason for interpretation of the query. This field will not be UNSPECIFIED if the interpretation type is not NONE.

### QueryInterpretationOptions
* QueryInterpretationOptions `object`: Options to interpret user query.
  * disableNlInterpretation `boolean`: Flag to disable natural language (NL) interpretation of queries. Default is false, Set to true to disable natural language interpretation. NL interpretation only applies to predefined datasources.
  * enableVerbatimMode `boolean`: Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental result retrieval, and usage of synonyms including custom ones. Nl interpretation will be disabled if either one of the two flags is true.

### QueryItem
* QueryItem `object`: Information relevant only to a query entry.
  * isSynthetic `boolean`: True if the text was generated by means other than a previous user search.

### QueryOperator
* QueryOperator `object`: The definition of a operator that can be used in a Search/Suggest request.
  * displayName `string`: Display name of the operator
  * enumValues `array`: Potential list of values for the opeatror field. This field is only filled when we can safely enumerate all the possible values of this operator.
    * items `string`
  * greaterThanOperatorName `string`: Indicates the operator name that can be used to isolate the property using the greater-than operator.
  * isFacetable `boolean`: Can this operator be used to get facets.
  * isRepeatable `boolean`: Indicates if multiple values can be set for this property.
  * isReturnable `boolean`: Will the property associated with this facet be returned as part of search results.
  * isSortable `boolean`: Can this operator be used to sort results.
  * isSuggestable `boolean`: Can get suggestions for this field.
  * lessThanOperatorName `string`: Indicates the operator name that can be used to isolate the property using the less-than operator.
  * objectType `string`: Name of the object corresponding to the operator. This field is only filled for schema-specific operators, and is unset for common operators.
  * operatorName `string`: The name of the operator.
  * type `string` (values: UNKNOWN, INTEGER, DOUBLE, TIMESTAMP, BOOLEAN, ENUM, DATE, TEXT, HTML): Type of the operator.

### QuerySource
* QuerySource `object`: List of sources that the user can search using the query API.
  * displayName `string`: Display name of the data source.
  * operators `array`: List of all operators applicable for this source.
    * items [QueryOperator](#queryoperator)
  * shortName `string`: A short name or alias for the source. This value can be used with the 'source' operator.
  * source [Source](#source)

### QuerySuggestion
* QuerySuggestion `object`: This field does not contain anything as of now and is just used as an indicator that the suggest result was a phrase completion.

### RepositoryError
* RepositoryError `object`: Errors when the connector is communicating to the source repository.
  * errorMessage `string`: Message that describes the error. The maximum allowable length of the message is 8192 characters.
  * httpStatusCode `integer`: Error codes. Matches the definition of HTTP status codes.
  * type `string` (values: UNKNOWN, NETWORK_ERROR, DNS_ERROR, CONNECTION_ERROR, AUTHENTICATION_ERROR, AUTHORIZATION_ERROR, SERVER_ERROR, QUOTA_EXCEEDED, SERVICE_UNAVAILABLE, CLIENT_ERROR): Type of error.

### RequestOptions
* RequestOptions `object`: Shared request options for all RPC methods.
  * debugOptions [DebugOptions](#debugoptions)
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. The suggest API does not use this parameter. Instead, suggest autocompletes only based on characters in the query.
  * searchApplicationId `string`: The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922).
  * timeZone `string`: Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.

### ResetSearchApplicationRequest
* ResetSearchApplicationRequest `object`
  * debugOptions [DebugOptions](#debugoptions)

### ResponseDebugInfo
* ResponseDebugInfo `object`: Debugging information about the response.
  * formattedDebugInfo `string`: General debug info formatted for display.

### RestrictItem
* RestrictItem `object`: Information relevant only to a restrict entry. NextId: 12
  * driveFollowUpRestrict [DriveFollowUpRestrict](#drivefollowuprestrict)
  * driveLocationRestrict [DriveLocationRestrict](#drivelocationrestrict)
  * driveMimeTypeRestrict [DriveMimeTypeRestrict](#drivemimetyperestrict)
  * driveTimeSpanRestrict [DriveTimeSpanRestrict](#drivetimespanrestrict)
  * searchOperator `string`: The search restrict (e.g. "after:2017-09-11 before:2017-09-12").

### ResultCounts
* ResultCounts `object`: Result count information
  * sourceResultCounts `array`: Result count information for each source with results.
    * items [SourceResultCount](#sourceresultcount)

### ResultDebugInfo
* ResultDebugInfo `object`: Debugging information about the result.
  * formattedDebugInfo `string`: General debug info formatted for display.

### ResultDisplayField
* ResultDisplayField `object`: Display Fields for Search Results
  * label `string`: The display label for the property.
  * operatorName `string`: The operator name of the property.
  * property [NamedProperty](#namedproperty)

### ResultDisplayLine
* ResultDisplayLine `object`: The collection of fields that make up a displayed line
  * fields `array`
    * items [ResultDisplayField](#resultdisplayfield)

### ResultDisplayMetadata
* ResultDisplayMetadata `object`
  * metalines `array`: The metalines content to be displayed with the result.
    * items [ResultDisplayLine](#resultdisplayline)
  * objectTypeLabel `string`: The display label for the object.

### RetrievalImportance
* RetrievalImportance `object`
  * importance `string` (values: DEFAULT, HIGHEST, HIGH, LOW, NONE): Indicates the ranking importance given to property when it is matched during retrieval. Once set, the token importance of a property cannot be changed.

### Schema
* Schema `object`: The schema definition for a data source.
  * objectDefinitions `array`: The list of top-level objects for the data source. The maximum number of elements is 10.
    * items [ObjectDefinition](#objectdefinition)
  * operationIds `array`: IDs of the Long Running Operations (LROs) currently running for this schema. After modifying the schema, wait for operations to complete before indexing additional content.
    * items `string`

### ScoringConfig
* ScoringConfig `object`: Scoring configurations for a source while processing a Search or Suggest request.
  * disableFreshness `boolean`: Whether to use freshness as a ranking signal. By default, freshness is used as a ranking signal. Note that this setting is not available in the Admin UI.
  * disablePersonalization `boolean`: Whether to personalize the results. By default, personal signals will be used to boost results.

### SearchApplication
* SearchApplication `object`: SearchApplication
  * dataSourceRestrictions `array`: Retrictions applied to the configurations. The maximum number of elements is 10.
    * items [DataSourceRestriction](#datasourcerestriction)
  * defaultFacetOptions `array`: The default fields for returning facet results. The sources specified here also have been included in data_source_restrictions above.
    * items [FacetOptions](#facetoptions)
  * defaultSortOptions [SortOptions](#sortoptions)
  * displayName `string`: Display name of the Search Application. The maximum length is 300 characters.
  * name `string`: Name of the Search Application. Format: searchapplications/{application_id}.
  * operationIds `array`: Output only. IDs of the Long Running Operations (LROs) currently running for this schema. Output only field.
    * items `string`
  * scoringConfig [ScoringConfig](#scoringconfig)
  * sourceConfig `array`: Configuration for a sources specified in data_source_restrictions.
    * items [SourceConfig](#sourceconfig)

### SearchApplicationQueryStats
* SearchApplicationQueryStats `object`
  * date [Date](#date)
  * queryCountByStatus `array`
    * items [QueryCountByStatus](#querycountbystatus)

### SearchApplicationSessionStats
* SearchApplicationSessionStats `object`
  * date [Date](#date)
  * searchSessionsCount `string`: The count of search sessions on the day

### SearchApplicationUserStats
* SearchApplicationUserStats `object`
  * date [Date](#date)
  * oneDayActiveUsersCount `string`: The count of unique active users in the past one day
  * sevenDaysActiveUsersCount `string`: The count of unique active users in the past seven days
  * thirtyDaysActiveUsersCount `string`: The count of unique active users in the past thirty days

### SearchItemsByViewUrlRequest
* SearchItemsByViewUrlRequest `object`
  * debugOptions [DebugOptions](#debugoptions)
  * pageToken `string`: The next_page_token value returned from a previous request, if any.
  * viewUrl `string`: Specify the full view URL to find the corresponding item. The maximum length is 2048 characters.

### SearchItemsByViewUrlResponse
* SearchItemsByViewUrlResponse `object`
  * items `array`
    * items [Item](#item)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### SearchQualityMetadata
* SearchQualityMetadata `object`: Additional search quality metadata of the item.
  * quality `number`: An indication of the quality of the item, used to influence search quality. Value should be between 0.0 (lowest quality) and 1.0 (highest quality). The default value is 0.0.

### SearchRequest
* SearchRequest `object`: The search API request.
  * dataSourceRestrictions `array`: The sources to use for querying. If not specified, all data sources from the current search application are used.
    * items [DataSourceRestriction](#datasourcerestriction)
  * facetOptions `array`
    * items [FacetOptions](#facetoptions)
  * pageSize `integer`: Maximum number of search results to return in one page. Valid values are between 1 and 100, inclusive. Default value is 10. Minimum value is 50 when results beyond 2000 are requested.
  * query `string`: The raw query string. See supported search operators in the [Cloud search Cheat Sheet](https://support.google.com/a/users/answer/9299929)
  * queryInterpretationOptions [QueryInterpretationOptions](#queryinterpretationoptions)
  * requestOptions [RequestOptions](#requestoptions)
  * sortOptions [SortOptions](#sortoptions)
  * start `integer`: Starting index of the results.

### SearchResponse
* SearchResponse `object`: The search API response.
  * debugInfo [ResponseDebugInfo](#responsedebuginfo)
  * errorInfo [ErrorInfo](#errorinfo)
  * facetResults `array`: Repeated facet results.
    * items [FacetResult](#facetresult)
  * hasMoreResults `boolean`: Whether there are more search results matching the query.
  * queryInterpretation [QueryInterpretation](#queryinterpretation)
  * resultCountEstimate `string`: The estimated result count for this query.
  * resultCountExact `string`: The exact result count for this query.
  * resultCounts [ResultCounts](#resultcounts)
  * results `array`: Results from a search query.
    * items [SearchResult](#searchresult)
  * spellResults `array`: Suggested spelling for the query.
    * items [SpellResult](#spellresult)
  * structuredResults `array`: Structured results for the user query. These results are not counted against the page_size.
    * items [StructuredResult](#structuredresult)

### SearchResult
* SearchResult `object`: Results containing indexed information for a document.
  * clusteredResults `array`: If source is clustered, provide list of clustered results. There will only be one level of clustered results. If current source is not enabled for clustering, this field will be empty.
    * items [SearchResult](#searchresult)
  * debugInfo [ResultDebugInfo](#resultdebuginfo)
  * metadata [Metadata](#metadata)
  * snippet [Snippet](#snippet)
  * title `string`: Title of the search result.
  * url `string`: The URL of the search result. The URL contains a Google redirect to the actual item. This URL is signed and shouldn't be changed.

### Snippet
* Snippet `object`: Snippet of the search result, which summarizes the content of the resulting page.
  * matchRanges `array`: The matched ranges in the snippet.
    * items [MatchRange](#matchrange)
  * snippet `string`: The snippet of the document. The snippet of the document. May contain escaped HTML character that should be unescaped prior to rendering.

### SortOptions
* SortOptions `object`
  * operatorName `string`: Name of the operator corresponding to the field to sort on. The corresponding property must be marked as sortable.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Ascending is the default sort order

### Source
* Source `object`: Defines sources for the suggest/search APIs.
  * name `string`: Source name for content indexed by the Indexing API.
  * predefinedSource `string` (values: NONE, QUERY_HISTORY, PERSON, GOOGLE_DRIVE, GOOGLE_GMAIL, GOOGLE_SITES, GOOGLE_GROUPS, GOOGLE_CALENDAR, GOOGLE_KEEP): Predefined content source for Google Apps.

### SourceConfig
* SourceConfig `object`: Configurations for a source while processing a Search or Suggest request.
  * crowdingConfig [SourceCrowdingConfig](#sourcecrowdingconfig)
  * scoringConfig [SourceScoringConfig](#sourcescoringconfig)
  * source [Source](#source)

### SourceCrowdingConfig
* SourceCrowdingConfig `object`: Set search results crowding limits. Crowding is a situation in which multiple results from the same source or host "crowd out" other results, diminishing the quality of search for users. To foster better search quality and source diversity in search results, you can set a condition to reduce repetitive results by source.
  * numResults `integer`: Maximum number of results allowed from a source. No limits will be set on results if this value is less than or equal to 0.
  * numSuggestions `integer`: Maximum number of suggestions allowed from a source. No limits will be set on results if this value is less than or equal to 0.

### SourceResultCount
* SourceResultCount `object`: Per source result count information.
  * hasMoreResults `boolean`: Whether there are more search results for this source.
  * resultCountEstimate `string`: The estimated result count for this source.
  * resultCountExact `string`: The exact result count for this source.
  * source [Source](#source)

### SourceScoringConfig
* SourceScoringConfig `object`: Set the scoring configuration. This allows modifying the ranking of results for a source.
  * sourceImportance `string` (values: DEFAULT, LOW, HIGH): Importance of the source.

### SpellResult
* SpellResult `object`
  * suggestedQuery `string`: The suggested spelling of the query.

### StartUploadItemRequest
* StartUploadItemRequest `object`: Start upload file request.
  * connectorName `string`: Name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
  * debugOptions [DebugOptions](#debugoptions)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### StructuredDataObject
* StructuredDataObject `object`: A structured data object consisting of named properties.
  * properties `array`: The properties for the object. The maximum number of elements is 1000.
    * items [NamedProperty](#namedproperty)

### StructuredResult
* StructuredResult `object`: Structured results that are returned as part of search request.
  * person [Person](#person)

### SuggestRequest
* SuggestRequest `object`: Request of suggest API.
  * dataSourceRestrictions `array`: The sources to use for suggestions. If not specified, the data sources are taken from the current search application. NOTE: Suggestions are supported only for third party data sources and people (i.e. PredefinedSource.PERSON).
    * items [DataSourceRestriction](#datasourcerestriction)
  * query `string`: Partial query for which autocomplete suggestions will be shown. For example, if the query is "sea", then the server might return "season", "search", "seagull" and so on.
  * requestOptions [RequestOptions](#requestoptions)

### SuggestResponse
* SuggestResponse `object`: Response of the suggest API.
  * suggestResults `array`: List of suggestions.
    * items [SuggestResult](#suggestresult)

### SuggestResult
* SuggestResult `object`: One suggestion result.
  * peopleSuggestion [PeopleSuggestion](#peoplesuggestion)
  * querySuggestion [QuerySuggestion](#querysuggestion)
  * source [Source](#source)
  * suggestedQuery `string`: The suggested query that will be used for search, when the user clicks on the suggestion

### TextOperatorOptions
* TextOperatorOptions `object`: Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
  * exactMatchWithOperator `boolean`: If true, the text value is tokenized as one atomic value in operator searches and facet matches. For example, if the operator name is "genre" and the value is "science-fiction" the query restrictions "genre:science" and "genre:fiction" doesn't match the item; "genre:science-fiction" does. Value matching is case-sensitive and does not remove special characters. If false, the text is tokenized. For example, if the value is "science-fiction" the queries "genre:science" and "genre:fiction" matches the item.
  * operatorName `string`: Indicates the operator name required in the query in order to isolate the text property. For example, if operatorName is *subject* and the property's name is *subjectLine*, then queries like *subject:<value>* show results only where the value of the property named *subjectLine* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any text properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.

### TextPropertyOptions
* TextPropertyOptions `object`: Options for text properties.
  * operatorOptions [TextOperatorOptions](#textoperatoroptions)
  * retrievalImportance [RetrievalImportance](#retrievalimportance)

### TextValues
* TextValues `object`: List of text values.
  * values `array`: The maximum allowable length for text values is 2048 characters.
    * items `string`

### TimestampOperatorOptions
* TimestampOperatorOptions `object`: Used to provide a search operator for timestamp properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
  * greaterThanOperatorName `string`: Indicates the operator name required in the query in order to isolate the timestamp property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property's name is *closeDate*, then queries like *closedafter:<value>* show results only where the value of the property named *closeDate* is later than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
  * lessThanOperatorName `string`: Indicates the operator name required in the query in order to isolate the timestamp property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property's name is *closeDate*, then queries like *closedbefore:<value>* show results only where the value of the property named *closeDate* is earlier than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.
  * operatorName `string`: Indicates the operator name required in the query in order to isolate the timestamp property. For example, if operatorName is *closedon* and the property's name is *closeDate*, then queries like *closedon:<value>* show results only where the value of the property named *closeDate* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.

### TimestampPropertyOptions
* TimestampPropertyOptions `object`: Options for timestamp properties.
  * operatorOptions [TimestampOperatorOptions](#timestampoperatoroptions)

### TimestampValues
* TimestampValues `object`: List of timestamp values.
  * values `array`
    * items `string`

### UnmappedIdentity
* UnmappedIdentity `object`
  * externalIdentity [Principal](#principal)
  * resolutionStatusCode `string` (values: CODE_UNSPECIFIED, NOT_FOUND, IDENTITY_SOURCE_NOT_FOUND, IDENTITY_SOURCE_MISCONFIGURED, TOO_MANY_MAPPINGS_FOUND, INTERNAL_ERROR): The resolution status for the external identity.

### UnreserveItemsRequest
* UnreserveItemsRequest `object`
  * connectorName `string`: Name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
  * debugOptions [DebugOptions](#debugoptions)
  * queue `string`: Name of a queue to unreserve items from.

### UpdateDataSourceRequest
* UpdateDataSourceRequest `object`
  * debugOptions [DebugOptions](#debugoptions)
  * source [DataSource](#datasource)

### UpdateSchemaRequest
* UpdateSchemaRequest `object`
  * debugOptions [DebugOptions](#debugoptions)
  * schema [Schema](#schema)
  * validateOnly `boolean`: If true, the schema will be checked for validity, but will not be registered with the data source, even if valid.

### UploadItemRef
* UploadItemRef `object`: Represents an upload session reference. This reference is created via upload method. Updating of item content may refer to this uploaded content via contentDataRef.
  * name `string`: Name of the content reference. The maximum length is 2048 characters.

### Value
* Value `object`: Definition of a single value with generic type.
  * booleanValue `boolean`
  * dateValue [Date](#date)
  * doubleValue `number`
  * integerValue `string`
  * stringValue `string`
  * timestampValue `string`

### ValueFilter
* ValueFilter `object`
  * operatorName `string`: The `operator_name` applied to the query, such as *price_greater_than*. The filter can work against both types of filters defined in the schema for your data source: 1. `operator_name`, where the query filters results by the property that matches the value. 2. `greater_than_operator_name` or `less_than_operator_name` in your schema. The query filters the results for the property values that are greater than or less than the supplied value in the query.
  * value [Value](#value)


