# @datafire/google_cloudprivatecatalog

Client library for Cloud Private Catalog

## Installation and Usage
```bash
npm install --save @datafire/google_cloudprivatecatalog
```
```js
let google_cloudprivatecatalog = require('@datafire/google_cloudprivatecatalog').create({
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

Enable cloud users to discover enterprise catalogs and products in their organizations.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudprivatecatalog.oauthCallback({
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
google_cloudprivatecatalog.oauthRefresh(null, context)
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

### cloudprivatecatalog.organizations.catalogs.search
Search Catalog resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.


```js
google_cloudprivatecatalog.cloudprivatecatalog.organizations.catalogs.search({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: Required. The name of the resource context. It can be in following formats:
  * pageSize `integer`: The maximum number of entries that are requested.
  * pageToken `string`: A pagination token returned from a previous call to SearchCatalogs that
  * query `string`: The query to filter the catalogs. The supported queries are:
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse](#googlecloudprivatecatalogv1beta1searchcatalogsresponse)

### cloudprivatecatalog.organizations.products.search
Search Product resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.


```js
google_cloudprivatecatalog.cloudprivatecatalog.organizations.products.search({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: Required. The name of the resource context. See
  * pageSize `integer`: The maximum number of entries that are requested.
  * pageToken `string`: A pagination token returned from a previous call to SearchProducts that
  * query `string`: The query to filter the products.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudPrivatecatalogV1beta1SearchProductsResponse](#googlecloudprivatecatalogv1beta1searchproductsresponse)

### cloudprivatecatalog.organizations.versions.search
Search Version resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.


```js
google_cloudprivatecatalog.cloudprivatecatalog.organizations.versions.search({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: Required. The name of the resource context. See
  * pageSize `integer`: The maximum number of entries that are requested.
  * pageToken `string`: A pagination token returned from a previous call to SearchVersions
  * query `string`: The query to filter the versions. Required.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse](#googlecloudprivatecatalogv1beta1searchversionsresponse)



## Definitions

### GoogleCloudPrivatecatalogV1beta1Catalog
* GoogleCloudPrivatecatalogV1beta1Catalog `object`: The readonly representation of a catalog computed with a given resource
  * createTime `string`: Output only. The time when the catalog was created.
  * description `string`: Output only. The description of the catalog.
  * displayName `string`: Output only. The descriptive name of the catalog as it appears in UIs.
  * name `string`: Output only. The resource name of the target catalog, in the format of
  * updateTime `string`: Output only. The time when the catalog was last updated.

### GoogleCloudPrivatecatalogV1beta1Product
* GoogleCloudPrivatecatalogV1beta1Product `object`: The readonly representation of a product computed with a given resource
  * assetType `string`: Output only. The type of the product asset. It can be one of the
  * createTime `string`: Output only. The time when the product was created.
  * displayMetadata `object`: Output only. The display metadata to describe the product.
  * iconUri `string`: Output only. The icon URI of the product.
  * name `string`: Output only. The resource name of the target product, in the format of
  * updateTime `string`: Output only. The time when the product was last updated.

### GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse
* GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse `object`: Response message for PrivateCatalog.SearchCatalogs.
  * catalogs `array`: The `Catalog`s computed from the resource context.
    * items [GoogleCloudPrivatecatalogV1beta1Catalog](#googlecloudprivatecatalogv1beta1catalog)
  * nextPageToken `string`: A pagination token returned from a previous call to SearchCatalogs that

### GoogleCloudPrivatecatalogV1beta1SearchProductsResponse
* GoogleCloudPrivatecatalogV1beta1SearchProductsResponse `object`: Response message for PrivateCatalog.SearchProducts.
  * nextPageToken `string`: A pagination token returned from a previous call to SearchProducts that
  * products `array`: The `Product` resources computed from the resource context.
    * items [GoogleCloudPrivatecatalogV1beta1Product](#googlecloudprivatecatalogv1beta1product)

### GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse
* GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse `object`: Response message for PrivateCatalog.SearchVersions.
  * nextPageToken `string`: A pagination token returned from a previous call to SearchVersions that
  * versions `array`: The `Version` resources computed from the resource context.
    * items [GoogleCloudPrivatecatalogV1beta1Version](#googlecloudprivatecatalogv1beta1version)

### GoogleCloudPrivatecatalogV1beta1Version
* GoogleCloudPrivatecatalogV1beta1Version `object`: The consumer representation of a version which is a child resource under a
  * asset `object`: Output only. The asset which has been validated and is ready to be
  * createTime `string`: Output only. The time when the version was created.
  * description `string`: Output only. The user-supplied description of the version. Maximum of 256
  * name `string`: Output only. The resource name of the version, in the format
  * updateTime `string`: Output only. The time when the version was last updated.


