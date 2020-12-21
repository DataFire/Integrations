# @datafire/google_recommendationengine

Client library for Recommendations AI

## Installation and Usage
```bash
npm install --save @datafire/google_recommendationengine
```
```js
let google_recommendationengine = require('@datafire/google_recommendationengine').create({
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

Recommendations AI service enables customers to build end-to-end personalized recommendation systems without requiring a high level of expertise in machine learning, recommendation system, or Google Cloud.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_recommendationengine.oauthCallback({
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
google_recommendationengine.oauthRefresh(null, context)
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

### recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.delete
Unregister an apiKey from using for predict method.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The API key to unregister including full resource path. "projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/predictionApiKeyRegistrations/"
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
* output [GoogleProtobufEmpty](#googleprotobufempty)

### recommendationengine.projects.locations.catalogs.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.operations.get({
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### recommendationengine.projects.locations.catalogs.catalogItems.patch
Updates a catalog item. Partial updating is supported. Non-existing items will be created.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.catalogItems.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Full resource name of catalog item, such as "projects/*/locations/global/catalogs/default_catalog/catalogItems/some_catalog_item_id".
  * updateMask `string`: Optional. Indicates which fields in the provided 'item' to update. If not set, will by default update all fields.
  * body [GoogleCloudRecommendationengineV1beta1CatalogItem](#googlecloudrecommendationenginev1beta1catalogitem)
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
* output [GoogleCloudRecommendationengineV1beta1CatalogItem](#googlecloudrecommendationenginev1beta1catalogitem)

### recommendationengine.projects.locations.catalogs.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.operations.list({
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
* output [GoogleLongrunningListOperationsResponse](#googlelongrunninglistoperationsresponse)

### recommendationengine.projects.locations.catalogs.eventStores.placements.predict
Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](/recommendations-ai/docs/setting-up#register-key).


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.eventStores.placements.predict({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Full resource name of the format: {name=projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*} The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction. We currently support three placements with the following IDs by default: * `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` events, on product detail pages, or on the shopping cart page. * `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you. * `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this. * `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed. The full list of available placements can be seen at https://console.cloud.google.com/recommendation/datafeeds/default_catalog/dashboard
  * body [GoogleCloudRecommendationengineV1beta1PredictRequest](#googlecloudrecommendationenginev1beta1predictrequest)
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
* output [GoogleCloudRecommendationengineV1beta1PredictResponse](#googlecloudrecommendationenginev1beta1predictresponse)

### recommendationengine.projects.locations.catalogs.catalogItems.list
Gets a list of catalog items.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.catalogItems.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent catalog resource name, such as "projects/*/locations/global/catalogs/default_catalog".
  * filter `string`: Optional. A filter to apply on the list results.
  * pageSize `integer`: Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default.
  * pageToken `string`: Optional. The previous ListCatalogItemsResponse.next_page_token.
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
* output [GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse](#googlecloudrecommendationenginev1beta1listcatalogitemsresponse)

### recommendationengine.projects.locations.catalogs.catalogItems.create
Creates a catalog item.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.catalogItems.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent catalog resource name, such as "projects/*/locations/global/catalogs/default_catalog".
  * body [GoogleCloudRecommendationengineV1beta1CatalogItem](#googlecloudrecommendationenginev1beta1catalogitem)
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
* output [GoogleCloudRecommendationengineV1beta1CatalogItem](#googlecloudrecommendationenginev1beta1catalogitem)

### recommendationengine.projects.locations.catalogs.catalogItems.import
Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.catalogItems.import({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. "projects/1234/locations/global/catalogs/default_catalog" If no updateMask is specified, requires catalogItems.create permission. If updateMask is specified, requires catalogItems.update permission.
  * body [GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest](#googlecloudrecommendationenginev1beta1importcatalogitemsrequest)
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

### recommendationengine.projects.locations.catalogs.list
Lists all the catalog configurations associated with the project.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The account resource name with an associated location.
  * pageSize `integer`: Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
  * pageToken `string`: Optional. A page token, received from a previous `ListCatalogs` call. Provide this to retrieve the subsequent page.
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
* output [GoogleCloudRecommendationengineV1beta1ListCatalogsResponse](#googlecloudrecommendationenginev1beta1listcatalogsresponse)

### recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.list
List the registered apiKeys for use with predict method.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent placement resource name such as "projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store"
  * pageSize `integer`: Optional. Maximum number of results to return per page. If unset, the service will choose a reasonable default.
  * pageToken `string`: Optional. The previous `ListPredictionApiKeyRegistration.nextPageToken`.
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
* output [GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse](#googlecloudrecommendationenginev1beta1listpredictionapikeyregistrationsresponse)

### recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.create
Register an API key for use with predict method.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource path. "projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store".
  * body [GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest](#googlecloudrecommendationenginev1beta1createpredictionapikeyregistrationrequest)
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
* output [GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration](#googlecloudrecommendationenginev1beta1predictionapikeyregistration)

### recommendationengine.projects.locations.catalogs.eventStores.userEvents.list
Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.eventStores.userEvents.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent eventStore resource name, such as "projects/*/locations/*/catalogs/default_catalog/eventStores/default_event_store".
  * filter `string`: Optional. Filtering expression to specify restrictions over returned events. This is a sequence of terms, where each term applies some kind of a restriction to the returned user events. Use this expression to restrict results to a specific time range, or filter events by eventType. eg: eventTime > "2012-04-23T18:25:43.511Z" eventsMissingCatalogItems eventTime<"2012-04-23T18:25:43.511Z" eventType=search We expect only 3 types of fields: * eventTime: this can be specified a maximum of 2 times, once with a less than operator and once with a greater than operator. The eventTime restrict should result in one contiguous valid eventTime range. * eventType: only 1 eventType restriction can be specified. * eventsMissingCatalogItems: specififying this will restrict results to events for which catalog items were not found in the catalog. The default behavior is to return only those events for which catalog items were found. Some examples of valid filters expressions: * Example 1: eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z" * Example 2: eventTime > "2012-04-23T18:25:43.511Z" eventType = detail-page-view * Example 3: eventsMissingCatalogItems eventType = search eventTime < "2018-04-23T18:30:43.511Z" * Example 4: eventTime > "2012-04-23T18:25:43.511Z" * Example 5: eventType = search * Example 6: eventsMissingCatalogItems
  * pageSize `integer`: Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default.
  * pageToken `string`: Optional. The previous ListUserEventsResponse.next_page_token.
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
* output [GoogleCloudRecommendationengineV1beta1ListUserEventsResponse](#googlecloudrecommendationenginev1beta1listusereventsresponse)

### recommendationengine.projects.locations.catalogs.eventStores.userEvents.collect
Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.eventStores.userEvents.collect({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent eventStore name, such as "projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store".
  * ets `string`: Optional. The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
  * uri `string`: Optional. The url including cgi-parameters but excluding the hash fragment. The URL must be truncated to 1.5K bytes to conservatively be under the 2K bytes. This is often more useful than the referer url, because many browsers only send the domain for 3rd party requests.
  * userEvent `string`: Required. URL encoded UserEvent proto.
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
* output [GoogleApiHttpBody](#googleapihttpbody)

### recommendationengine.projects.locations.catalogs.eventStores.userEvents.import
Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.eventStores.userEvents.import({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. "projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store"
  * body [GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest](#googlecloudrecommendationenginev1beta1importusereventsrequest)
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

### recommendationengine.projects.locations.catalogs.eventStores.userEvents.purge
Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.eventStores.userEvents.purge({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the event_store under which the events are created. The format is "projects/${projectId}/locations/global/catalogs/${catalogId}/eventStores/${eventStoreId}"
  * body [GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest](#googlecloudrecommendationenginev1beta1purgeusereventsrequest)
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

### recommendationengine.projects.locations.catalogs.eventStores.userEvents.rejoin
Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.eventStores.userEvents.rejoin({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Full resource name of user event, such as "projects/*/locations/*/catalogs/default_catalog/eventStores/default_event_store".
  * body [GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest](#googlecloudrecommendationenginev1beta1rejoinusereventsrequest)
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

### recommendationengine.projects.locations.catalogs.eventStores.userEvents.write
Writes a single user event.


```js
google_recommendationengine.recommendationengine.projects.locations.catalogs.eventStores.userEvents.write({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent eventStore resource name, such as "projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store".
  * body [GoogleCloudRecommendationengineV1beta1UserEvent](#googlecloudrecommendationenginev1beta1userevent)
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
* output [GoogleCloudRecommendationengineV1beta1UserEvent](#googlecloudrecommendationenginev1beta1userevent)



## Definitions

### GoogleApiHttpBody
* GoogleApiHttpBody `object`: Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
  * contentType `string`: The HTTP Content-Type header value specifying the content type of the body.
  * data `string`: The HTTP request/response body as raw binary.
  * extensions `array`: Application specific response metadata. Must be set in the first response for streaming APIs.
    * items `object`

### GoogleCloudRecommendationengineV1alphaRejoinCatalogMetadata
* GoogleCloudRecommendationengineV1alphaRejoinCatalogMetadata `object`: Metadata for TriggerCatalogRejoin method.

### GoogleCloudRecommendationengineV1alphaRejoinCatalogResponse
* GoogleCloudRecommendationengineV1alphaRejoinCatalogResponse `object`: Response message for TriggerCatalogRejoin method.
  * rejoinedUserEventsCount `string`: Number of user events that were joined with latest catalog items.

### GoogleCloudRecommendationengineV1alphaTuningMetadata
* GoogleCloudRecommendationengineV1alphaTuningMetadata `object`: Metadata associated with a tune operation.
  * recommendationModel `string`: The resource name of the recommendation model that this tune applies to. Format: projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/eventStores/{event_store_id}/recommendationModels/{recommendation_model_id}

### GoogleCloudRecommendationengineV1alphaTuningResponse
* GoogleCloudRecommendationengineV1alphaTuningResponse `object`: Response associated with a tune operation.

### GoogleCloudRecommendationengineV1beta1BigQuerySource
* GoogleCloudRecommendationengineV1beta1BigQuerySource `object`: BigQuery source import data from.
  * dataSchema `string`: Optional. The schema to use when parsing the data from the source. Supported values for catalog imports: 1: "catalog_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#json (Default for catalogItems.import) 2: "catalog_merchant_center" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#mc Supported values for user event imports: 1: "user_events_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/manage-user-events#import (Default for userEvents.import) 2. "user_events_ga360" using https://support.google.com/analytics/answer/3437719?hl=en
  * datasetId `string`: Required. The BigQuery data set to copy the data from.
  * gcsStagingDir `string`: Optional. Intermediate Cloud Storage directory used for the import. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.
  * projectId `string`: Optional. The project id (can be project # or id) that the BigQuery source is in. If not specified, inherits the project id from the parent request.
  * tableId `string`: Required. The BigQuery table to copy the data from.

### GoogleCloudRecommendationengineV1beta1Catalog
* GoogleCloudRecommendationengineV1beta1Catalog `object`: The catalog configuration. Next ID: 5.
  * catalogItemLevelConfig [GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig](#googlecloudrecommendationenginev1beta1catalogitemlevelconfig)
  * defaultEventStoreId `string`: Required. The ID of the default event store.
  * displayName `string`: Required. The catalog display name.
  * name `string`: The fully qualified resource name of the catalog.

### GoogleCloudRecommendationengineV1beta1CatalogInlineSource
* GoogleCloudRecommendationengineV1beta1CatalogInlineSource `object`: The inline source for the input config for ImportCatalogItems method.
  * catalogItems `array`: Optional. A list of catalog items to update/create. Recommended max of 10k items.
    * items [GoogleCloudRecommendationengineV1beta1CatalogItem](#googlecloudrecommendationenginev1beta1catalogitem)

### GoogleCloudRecommendationengineV1beta1CatalogItem
* GoogleCloudRecommendationengineV1beta1CatalogItem `object`: CatalogItem captures all metadata information of items to be recommended.
  * tags `array`: Optional. Filtering tags associated with the catalog item. Each tag should be a UTF-8 encoded string with a length limit of 1 KiB. This tag can be used for filtering recommendation results by passing the tag as part of the predict request filter.
    * items `string`
  * categoryHierarchies `array`: Required. Catalog item categories. This field is repeated for supporting one catalog item belonging to several parallel category hierarchies. For example, if a shoes product belongs to both ["Shoes & Accessories" -> "Shoes"] and ["Sports & Fitness" -> "Athletic Clothing" -> "Shoes"], it could be represented as: "categoryHierarchies": [ { "categories": ["Shoes & Accessories", "Shoes"]}, { "categories": ["Sports & Fitness", "Athletic Clothing", "Shoes"] } ]
    * items [GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy](#googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy)
  * description `string`: Optional. Catalog item description. UTF-8 encoded string with a length limit of 5 KiB.
  * id `string`: Required. Catalog item identifier. UTF-8 encoded string with a length limit of 128 bytes. This id must be unique among all catalog items within the same catalog. It should also be used when logging user events in order for the user events to be joined with the Catalog.
  * itemAttributes [GoogleCloudRecommendationengineV1beta1FeatureMap](#googlecloudrecommendationenginev1beta1featuremap)
  * itemGroupId `string`: Optional. Variant group identifier for prediction results. UTF-8 encoded string with a length limit of 128 bytes. This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id).
  * languageCode `string`: Optional. Deprecated. The model automatically detects the text language. Your catalog can include text in different languages, but duplicating catalog items to provide text in multiple languages can result in degraded model performance.
  * productMetadata [GoogleCloudRecommendationengineV1beta1ProductCatalogItem](#googlecloudrecommendationenginev1beta1productcatalogitem)
  * title `string`: Required. Catalog item title. UTF-8 encoded string with a length limit of 1 KiB.

### GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy
* GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy `object`: Category represents catalog item category hierarchy.
  * categories `array`: Required. Catalog item categories. Each category should be a UTF-8 encoded string with a length limit of 2 KiB. Note that the order in the list denotes the specificity (from least to most specific).
    * items `string`

### GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig
* GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig `object`: Configures the catalog level that users send events to, and the level at which predictions are made.
  * eventItemLevel `string` (values: CATALOG_ITEM_LEVEL_UNSPECIFIED, VARIANT, MASTER): Optional. Level of the catalog at which events are uploaded. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details.
  * predictItemLevel `string` (values: CATALOG_ITEM_LEVEL_UNSPECIFIED, VARIANT, MASTER): Optional. Level of the catalog at which predictions are made. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details.

### GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest
* GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest `object`: Request message for the `CreatePredictionApiKeyRegistration` method.
  * predictionApiKeyRegistration [GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration](#googlecloudrecommendationenginev1beta1predictionapikeyregistration)

### GoogleCloudRecommendationengineV1beta1EventDetail
* GoogleCloudRecommendationengineV1beta1EventDetail `object`: User event details shared by all recommendation types.
  * eventAttributes [GoogleCloudRecommendationengineV1beta1FeatureMap](#googlecloudrecommendationenginev1beta1featuremap)
  * experimentIds `array`: Optional. A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Recommendation Engine system, using different recommendation models).
    * items `string`
  * pageViewId `string`: Optional. A unique id of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. This `pageViewId` will be automatically generated if using the JavaScript pixel.
  * recommendationToken `string`: Optional. Recommendation token included in the recommendation prediction response. This field enables accurate attribution of recommendation model performance. This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased item. If user clicks on product K in the recommendation results, pass the `PredictResponse.recommendationToken` property as a url parameter to product K's page. When recording events on product K's page, log the PredictResponse.recommendation_token to this field. Optional, but highly encouraged for user events that are the result of a recommendation prediction query.
  * referrerUri `string`: Optional. The referrer url of the current page. When using the JavaScript pixel, this value is filled in automatically.
  * uri `string`: Optional. Complete url (window.location.href) of the user's current page. When using the JavaScript pixel, this value is filled in automatically. Maximum length 5KB.

### GoogleCloudRecommendationengineV1beta1FeatureMap
* GoogleCloudRecommendationengineV1beta1FeatureMap `object`: FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.
  * categoricalFeatures `object`: Categorical features that can take on one of a limited number of possible values. Some examples would be the brand/maker of a product, or country of a customer. Feature names and values must be UTF-8 encoded strings. For example: `{ "colors": {"value": ["yellow", "green"]}, "sizes": {"value":["S", "M"]}`
  * numericalFeatures `object`: Numerical features. Some examples would be the height/weight of a product, or age of a customer. Feature names must be UTF-8 encoded strings. For example: `{ "lengths_cm": {"value":[2.3, 15.4]}, "heights_cm": {"value":[8.1, 6.4]} }`

### GoogleCloudRecommendationengineV1beta1FeatureMapFloatList
* GoogleCloudRecommendationengineV1beta1FeatureMapFloatList `object`: A list of float features.
  * value `array`: Float feature value.
    * items `number`

### GoogleCloudRecommendationengineV1beta1FeatureMapStringList
* GoogleCloudRecommendationengineV1beta1FeatureMapStringList `object`: A list of string features.
  * value `array`: String feature value with a length limit of 128 bytes.
    * items `string`

### GoogleCloudRecommendationengineV1beta1GcsSource
* GoogleCloudRecommendationengineV1beta1GcsSource `object`: Google Cloud Storage location for input content. format.
  * inputUris `array`: Required. Google Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, gs://bucket/directory/object.json) or a pattern matching one or more files, such as gs://bucket/directory/*.json. A request can contain at most 100 files, and each file can be up to 2 GB. See [Importing catalog information](/recommendations-ai/docs/upload-catalog) for the expected file format and setup instructions.
    * items `string`
  * jsonSchema `string`: Optional. The schema to use when parsing the data from the source. Supported values for catalog imports: 1: "catalog_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#json (Default for catalogItems.import) 2: "catalog_merchant_center" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#mc Supported values for user events imports: 1: "user_events_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/manage-user-events#import (Default for userEvents.import) 2. "user_events_ga360" using https://support.google.com/analytics/answer/3437719?hl=en

### GoogleCloudRecommendationengineV1beta1Image
* GoogleCloudRecommendationengineV1beta1Image `object`: Catalog item thumbnail/detail image.
  * height `integer`: Optional. Height of the image in number of pixels.
  * uri `string`: Required. URL of the image with a length limit of 5 KiB.
  * width `integer`: Optional. Width of the image in number of pixels.

### GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest
* GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest `object`: Request message for Import methods.
  * errorsConfig [GoogleCloudRecommendationengineV1beta1ImportErrorsConfig](#googlecloudrecommendationenginev1beta1importerrorsconfig)
  * inputConfig [GoogleCloudRecommendationengineV1beta1InputConfig](#googlecloudrecommendationenginev1beta1inputconfig)
  * requestId `string`: Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency and used for request deduplication. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response.
  * updateMask `string`: Optional. Indicates which fields in the provided imported 'items' to update. If not set, will by default update all fields.

### GoogleCloudRecommendationengineV1beta1ImportCatalogItemsResponse
* GoogleCloudRecommendationengineV1beta1ImportCatalogItemsResponse `object`: Response of the ImportCatalogItemsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
  * errorSamples `array`: A sample of errors encountered while processing the request.
    * items [GoogleRpcStatus](#googlerpcstatus)
  * errorsConfig [GoogleCloudRecommendationengineV1beta1ImportErrorsConfig](#googlecloudrecommendationenginev1beta1importerrorsconfig)

### GoogleCloudRecommendationengineV1beta1ImportErrorsConfig
* GoogleCloudRecommendationengineV1beta1ImportErrorsConfig `object`: Configuration of destination for Import related errors.
  * gcsPrefix `string`: Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Import errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message.

### GoogleCloudRecommendationengineV1beta1ImportMetadata
* GoogleCloudRecommendationengineV1beta1ImportMetadata `object`: Metadata related to the progress of the Import operation. This will be returned by the google.longrunning.Operation.metadata field.
  * createTime `string`: Operation create time.
  * failureCount `string`: Count of entries that encountered errors while processing.
  * operationName `string`: Name of the operation.
  * requestId `string`: Id of the request / operation. This is parroting back the requestId that was passed in the request.
  * successCount `string`: Count of entries that were processed successfully.
  * updateTime `string`: Operation last update time. If the operation is done, this is also the finish time.

### GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest
* GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest `object`: Request message for the ImportUserEvents request.
  * errorsConfig [GoogleCloudRecommendationengineV1beta1ImportErrorsConfig](#googlecloudrecommendationenginev1beta1importerrorsconfig)
  * inputConfig [GoogleCloudRecommendationengineV1beta1InputConfig](#googlecloudrecommendationenginev1beta1inputconfig)
  * requestId `string`: Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency for expensive long running operations. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response. Note that this field must not be set if the desired input config is catalog_inline_source.

### GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse
* GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse `object`: Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
  * errorSamples `array`: A sample of errors encountered while processing the request.
    * items [GoogleRpcStatus](#googlerpcstatus)
  * errorsConfig [GoogleCloudRecommendationengineV1beta1ImportErrorsConfig](#googlecloudrecommendationenginev1beta1importerrorsconfig)
  * importSummary [GoogleCloudRecommendationengineV1beta1UserEventImportSummary](#googlecloudrecommendationenginev1beta1usereventimportsummary)

### GoogleCloudRecommendationengineV1beta1InputConfig
* GoogleCloudRecommendationengineV1beta1InputConfig `object`: The input config source.
  * bigQuerySource [GoogleCloudRecommendationengineV1beta1BigQuerySource](#googlecloudrecommendationenginev1beta1bigquerysource)
  * catalogInlineSource [GoogleCloudRecommendationengineV1beta1CatalogInlineSource](#googlecloudrecommendationenginev1beta1cataloginlinesource)
  * gcsSource [GoogleCloudRecommendationengineV1beta1GcsSource](#googlecloudrecommendationenginev1beta1gcssource)
  * userEventInlineSource [GoogleCloudRecommendationengineV1beta1UserEventInlineSource](#googlecloudrecommendationenginev1beta1usereventinlinesource)

### GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse
* GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse `object`: Response message for ListCatalogItems method.
  * catalogItems `array`: The catalog items.
    * items [GoogleCloudRecommendationengineV1beta1CatalogItem](#googlecloudrecommendationenginev1beta1catalogitem)
  * nextPageToken `string`: If empty, the list is complete. If nonempty, the token to pass to the next request's ListCatalogItemRequest.page_token.

### GoogleCloudRecommendationengineV1beta1ListCatalogsResponse
* GoogleCloudRecommendationengineV1beta1ListCatalogsResponse `object`: Response for ListCatalogs method.
  * catalogs `array`: Output only. All the customer's catalogs.
    * items [GoogleCloudRecommendationengineV1beta1Catalog](#googlecloudrecommendationenginev1beta1catalog)
  * nextPageToken `string`: Pagination token, if not returned indicates the last page.

### GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse
* GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse `object`: Response message for the `ListPredictionApiKeyRegistrations`.
  * nextPageToken `string`: If empty, the list is complete. If nonempty, pass the token to the next request's `ListPredictionApiKeysRegistrationsRequest.pageToken`.
  * predictionApiKeyRegistrations `array`: The list of registered API keys.
    * items [GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration](#googlecloudrecommendationenginev1beta1predictionapikeyregistration)

### GoogleCloudRecommendationengineV1beta1ListUserEventsResponse
* GoogleCloudRecommendationengineV1beta1ListUserEventsResponse `object`: Response message for ListUserEvents method.
  * nextPageToken `string`: If empty, the list is complete. If nonempty, the token to pass to the next request's ListUserEvents.page_token.
  * userEvents `array`: The user events.
    * items [GoogleCloudRecommendationengineV1beta1UserEvent](#googlecloudrecommendationenginev1beta1userevent)

### GoogleCloudRecommendationengineV1beta1PredictRequest
* GoogleCloudRecommendationengineV1beta1PredictRequest `object`: Request message for Predict method.
  * dryRun `boolean`: Optional. Use dryRun mode for this prediction query. If set to true, a dummy model will be used that returns arbitrary catalog items. Note that the dryRun mode should only be used for testing the API, or if the model is not ready.
  * filter `string`: Optional. Filter for restricting prediction results. Accepts values for tags and the `filterOutOfStockItems` flag. * Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB. * filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT_OF_STOCK. Examples: * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional") * filterOutOfStockItems tag=(-"promotional") * filterOutOfStockItems If your filter blocks all prediction results, nothing will be returned. If you want generic (unfiltered) popular items to be returned instead, set `strictFiltering` to false in `PredictRequest.params`.
  * labels `object`: Optional. The labels for the predict request. * Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * No more than 64 labels can be associated with a given request. See https://goo.gl/xmQnxf for more information on and examples of labels.
  * pageSize `integer`: Optional. Maximum number of results to return per page. Set this property to the number of prediction results required. If zero, the service will choose a reasonable default.
  * pageToken `string`: Optional. The previous PredictResponse.next_page_token.
  * params `object`: Optional. Additional domain specific parameters for the predictions. Allowed values: * `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response. * `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular items instead of empty if your filter blocks all prediction results.
  * userEvent [GoogleCloudRecommendationengineV1beta1UserEvent](#googlecloudrecommendationenginev1beta1userevent)

### GoogleCloudRecommendationengineV1beta1PredictResponse
* GoogleCloudRecommendationengineV1beta1PredictResponse `object`: Response message for predict method.
  * dryRun `boolean`: True if the dryRun property was set in the request.
  * itemsMissingInCatalog `array`: IDs of items in the request that were missing from the catalog.
    * items `string`
  * metadata `object`: Additional domain specific prediction response metadata.
  * nextPageToken `string`: If empty, the list is complete. If nonempty, the token to pass to the next request's PredictRequest.page_token.
  * recommendationToken `string`: A unique recommendation token. This should be included in the user event logs resulting from this recommendation, which enables accurate attribution of recommendation model performance.
  * results `array`: A list of recommended items. The order represents the ranking (from the most relevant item to the least).
    * items [GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult](#googlecloudrecommendationenginev1beta1predictresponsepredictionresult)

### GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult
* GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult `object`: PredictionResult represents the recommendation prediction results.
  * id `string`: ID of the recommended catalog item
  * itemMetadata `object`: Additional item metadata / annotations. Possible values: * `catalogItem`: JSON representation of the catalogItem. Will be set if `returnCatalogItem` is set to true in `PredictRequest.params`. * `score`: Prediction score in double value. Will be set if `returnItemScore` is set to true in `PredictRequest.params`.

### GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration
* GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration `object`: Registered Api Key.
  * apiKey `string`: The API key.

### GoogleCloudRecommendationengineV1beta1ProductCatalogItem
* GoogleCloudRecommendationengineV1beta1ProductCatalogItem `object`: ProductCatalogItem captures item metadata specific to retail products.
  * availableQuantity `string`: Optional. The available quantity of the item.
  * canonicalProductUri `string`: Optional. Canonical URL directly linking to the item detail page with a length limit of 5 KiB..
  * costs `object`: Optional. A map to pass the costs associated with the product. For example: {"manufacturing": 45.5} The profit of selling this item is computed like so: * If 'exactPrice' is provided, profit = displayPrice - sum(costs) * If 'priceRange' is provided, profit = minPrice - sum(costs)
  * currencyCode `string`: Optional. Only required if the price is set. Currency code for price/costs. Use three-character ISO-4217 code.
  * exactPrice [GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice](#googlecloudrecommendationenginev1beta1productcatalogitemexactprice)
  * images `array`: Optional. Product images for the catalog item.
    * items [GoogleCloudRecommendationengineV1beta1Image](#googlecloudrecommendationenginev1beta1image)
  * priceRange [GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange](#googlecloudrecommendationenginev1beta1productcatalogitempricerange)
  * stockState `string` (values: STOCK_STATE_UNSPECIFIED, IN_STOCK, OUT_OF_STOCK, PREORDER, BACKORDER): Optional. Online stock state of the catalog item. Default is `IN_STOCK`.

### GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice
* GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice `object`: Exact product price.
  * displayPrice `number`: Optional. Display price of the product.
  * originalPrice `number`: Optional. Price of the product without any discount. If zero, by default set to be the 'displayPrice'.

### GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange
* GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange `object`: Product price range when there are a range of prices for different variations of the same product.
  * max `number`: Required. The maximum product price.
  * min `number`: Required. The minimum product price.

### GoogleCloudRecommendationengineV1beta1ProductDetail
* GoogleCloudRecommendationengineV1beta1ProductDetail `object`: Detailed product information associated with a user event.
  * availableQuantity `integer`: Optional. Quantity of the products in stock when a user event happens. Optional. If provided, this overrides the available quantity in Catalog for this event. and can only be set if `stock_status` is set to `IN_STOCK`. Note that if an item is out of stock, you must set the `stock_state` field to be `OUT_OF_STOCK`. Leaving this field unspecified / as zero is not sufficient to mark the item out of stock.
  * currencyCode `string`: Optional. Currency code for price/costs. Use three-character ISO-4217 code. Required only if originalPrice or displayPrice is set.
  * displayPrice `number`: Optional. Display price of the product (e.g. discounted price). If provided, this will override the display price in Catalog for this product.
  * id `string`: Required. Catalog item ID. UTF-8 encoded string with a length limit of 128 characters.
  * itemAttributes [GoogleCloudRecommendationengineV1beta1FeatureMap](#googlecloudrecommendationenginev1beta1featuremap)
  * originalPrice `number`: Optional. Original price of the product. If provided, this will override the original price in Catalog for this product.
  * quantity `integer`: Optional. Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `add-to-cart` event. Required for `add-to-cart`, `add-to-list`, `remove-from-cart`, `checkout-start`, `purchase-complete`, `refund` event types.
  * stockState `string` (values: STOCK_STATE_UNSPECIFIED, IN_STOCK, OUT_OF_STOCK, PREORDER, BACKORDER): Optional. Item stock state. If provided, this overrides the stock state in Catalog for items in this event.

### GoogleCloudRecommendationengineV1beta1ProductEventDetail
* GoogleCloudRecommendationengineV1beta1ProductEventDetail `object`: ProductEventDetail captures user event information specific to retail products.
  * cartId `string`: Optional. The id or name of the associated shopping cart. This id is used to associate multiple items added or present in the cart before purchase. This can only be set for `add-to-cart`, `remove-from-cart`, `checkout-start`, `purchase-complete`, or `shopping-cart-page-view` events.
  * listId `string`: Required for `add-to-list` and `remove-from-list` events. The id or name of the list that the item is being added to or removed from. Other event types should not set this field.
  * pageCategories `array`: Required for `category-page-view` events. Other event types should not set this field. The categories associated with a category page. Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: categories : ["Sales", "2017 Black Friday Deals"].
    * items [GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy](#googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy)
  * productDetails `array`: The main product details related to the event. This field is required for the following event types: * `add-to-cart` * `add-to-list` * `checkout-start` * `detail-page-view` * `purchase-complete` * `refund` * `remove-from-cart` * `remove-from-list` This field is optional for the following event types: * `page-visit` * `shopping-cart-page-view` - note that 'product_details' should be set for this unless the shopping cart is empty. * `search` (highly encouraged) In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished broswing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new SEARCH event with different product_details is desired. The end user may have not finished broswing the whole page yet. This field is not allowed for the following event types: * `category-page-view` * `home-page-view`
    * items [GoogleCloudRecommendationengineV1beta1ProductDetail](#googlecloudrecommendationenginev1beta1productdetail)
  * purchaseTransaction [GoogleCloudRecommendationengineV1beta1PurchaseTransaction](#googlecloudrecommendationenginev1beta1purchasetransaction)
  * searchQuery `string`: Required for `search` events. Other event types should not set this field. The user's search query as UTF-8 encoded text with a length limit of 5 KiB.

### GoogleCloudRecommendationengineV1beta1PurchaseTransaction
* GoogleCloudRecommendationengineV1beta1PurchaseTransaction `object`: A transaction represents the entire purchase transaction.
  * costs `object`: Optional. All the costs associated with the product. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs. Total product cost such that profit = revenue - (sum(taxes) + sum(costs)) If product_cost is not set, then profit = revenue - tax - shipping - sum(CatalogItem.costs). If CatalogItem.cost is not specified for one of the items, CatalogItem.cost based profit *cannot* be calculated for this Transaction.
  * currencyCode `string`: Required. Currency code. Use three-character ISO-4217 code. This field is not required if the event type is `refund`.
  * id `string`: Optional. The transaction ID with a length limit of 128 bytes.
  * revenue `number`: Required. Total revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations. This field is not required if the event type is `refund`.
  * taxes `object`: Optional. All the taxes associated with the transaction.

### GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata
* GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata `object`: Metadata related to the progress of the PurgeUserEvents operation. This will be returned by the google.longrunning.Operation.metadata field.
  * createTime `string`: Operation create time.
  * operationName `string`: The ID of the request / operation.

### GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest
* GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest `object`: Request message for PurgeUserEvents method.
  * filter `string`: Required. The filter string to specify the events to be deleted. Empty string filter is not allowed. The eligible fields for filtering are: * `eventType`: UserEvent.eventType field of type string. * `eventTime`: in ISO 8601 "zulu" format. * `visitorId`: field of type string. Specifying this will delete all events associated with a visitor. * `userId`: field of type string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: `eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z"` * Deleting specific eventType in time range: `eventTime > "2012-04-23T18:25:43.511Z" eventType = "detail-page-view"` * Deleting all events for a specific visitor: `visitorId = "visitor1024"` The filtering fields are assumed to have an implicit AND.
  * force `boolean`: Optional. The default value is false. Override this flag to true to actually perform the purge. If the field is not set to true, a sampling of events to be deleted will be returned.

### GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse
* GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse `object`: Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.
  * purgedEventsCount `string`: The total count of events purged as a result of the operation.
  * userEventsSample `array`: A sampling of events deleted (or will be deleted) depending on the `force` property in the request. Max of 500 items will be returned.
    * items [GoogleCloudRecommendationengineV1beta1UserEvent](#googlecloudrecommendationenginev1beta1userevent)

### GoogleCloudRecommendationengineV1beta1RejoinUserEventsMetadata
* GoogleCloudRecommendationengineV1beta1RejoinUserEventsMetadata `object`: Metadata for RejoinUserEvents method.

### GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest
* GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest `object`: Request message for CatalogRejoin method.
  * userEventRejoinScope `string` (values: USER_EVENT_REJOIN_SCOPE_UNSPECIFIED, JOINED_EVENTS, UNJOINED_EVENTS): Required. The type of the catalog rejoin to define the scope and range of the user events to be rejoined with catalog items.

### GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse
* GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse `object`: Response message for RejoinUserEvents method.
  * rejoinedUserEventsCount `string`: Number of user events that were joined with latest catalog items.

### GoogleCloudRecommendationengineV1beta1UserEvent
* GoogleCloudRecommendationengineV1beta1UserEvent `object`: UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website.
  * eventDetail [GoogleCloudRecommendationengineV1beta1EventDetail](#googlecloudrecommendationenginev1beta1eventdetail)
  * eventSource `string` (values: EVENT_SOURCE_UNSPECIFIED, AUTOML, ECOMMERCE, BATCH_UPLOAD): Optional. This field should *not* be set when using JavaScript pixel or the Recommendations AI Tag. Defaults to `EVENT_SOURCE_UNSPECIFIED`.
  * eventTime `string`: Optional. Only required for ImportUserEvents method. Timestamp of user event created.
  * eventType `string`: Required. User event type. Allowed values are: * `add-to-cart` Products being added to cart. * `add-to-list` Items being added to a list (shopping list, favorites etc). * `category-page-view` Special pages such as sale or promotion pages viewed. * `checkout-start` User starting a checkout process. * `detail-page-view` Products detail page viewed. * `home-page-view` Homepage viewed. * `page-visit` Generic page visits not included in the event types above. * `purchase-complete` User finishing a purchase. * `refund` Purchased items being refunded or returned. * `remove-from-cart` Products being removed from cart. * `remove-from-list` Items being removed from a list. * `search` Product search. * `shopping-cart-page-view` User viewing a shopping cart. * `impression` List of items displayed. Used by Google Tag Manager.
  * productEventDetail [GoogleCloudRecommendationengineV1beta1ProductEventDetail](#googlecloudrecommendationenginev1beta1producteventdetail)
  * userInfo [GoogleCloudRecommendationengineV1beta1UserInfo](#googlecloudrecommendationenginev1beta1userinfo)

### GoogleCloudRecommendationengineV1beta1UserEventImportSummary
* GoogleCloudRecommendationengineV1beta1UserEventImportSummary `object`: A summary of import result. The UserEventImportSummary summarizes the import status for user events.
  * joinedEventsCount `string`: Count of user events imported with complete existing catalog information.
  * unjoinedEventsCount `string`: Count of user events imported, but with catalog information not found in the imported catalog.

### GoogleCloudRecommendationengineV1beta1UserEventInlineSource
* GoogleCloudRecommendationengineV1beta1UserEventInlineSource `object`: The inline source for the input config for ImportUserEvents method.
  * userEvents `array`: Optional. A list of user events to import. Recommended max of 10k items.
    * items [GoogleCloudRecommendationengineV1beta1UserEvent](#googlecloudrecommendationenginev1beta1userevent)

### GoogleCloudRecommendationengineV1beta1UserInfo
* GoogleCloudRecommendationengineV1beta1UserInfo `object`: Information of end users.
  * directUserRequest `boolean`: Optional. Indicates if the request is made directly from the end user in which case the user_agent and ip_address fields can be populated from the HTTP request. This should *not* be set when using the javascript pixel. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events).
  * ipAddress `string`: Optional. IP address of the user. This could be either IPv4 (e.g. 104.133.9.80) or IPv6 (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). This should *not* be set when using the javascript pixel or if `direct_user_request` is set. Used to extract location information for personalization.
  * userAgent `string`: Optional. User agent as included in the HTTP header. UTF-8 encoded string with a length limit of 1 KiB. This should *not* be set when using the JavaScript pixel or if `directUserRequest` is set.
  * userId `string`: Optional. Unique identifier for logged-in user with a length limit of 128 bytes. Required only for logged-in users.
  * visitorId `string`: Required. A unique identifier for tracking visitors with a length limit of 128 bytes. For example, this could be implemented with a http cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Maximum length 128 bytes. Cannot be empty.

### GoogleLongrunningListOperationsResponse
* GoogleLongrunningListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [GoogleLongrunningOperation](#googlelongrunningoperation)

### GoogleLongrunningOperation
* GoogleLongrunningOperation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [GoogleRpcStatus](#googlerpcstatus)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### GoogleProtobufEmpty
* GoogleProtobufEmpty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### GoogleRpcStatus
* GoogleRpcStatus `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.


