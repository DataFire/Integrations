# @datafire/google_licensing

Client library for Enterprise License Manager API

## Installation and Usage
```bash
npm install --save @datafire/google_licensing
```
```js
let google_licensing = require('@datafire/google_licensing').create({
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

The Google Enterprise License Manager API's allows you to license apps for all the users of a domain managed by you.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_licensing.oauthCallback({
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
google_licensing.oauthRefresh(null, context)
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

### licensing.licenseAssignments.insert
Assign a license.


```js
google_licensing.licensing.licenseAssignments.insert({
  "productId": "",
  "skuId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
  * skuId **required** `string`: A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
  * body [LicenseAssignmentInsert](#licenseassignmentinsert)
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
* output [LicenseAssignment](#licenseassignment)

### licensing.licenseAssignments.delete
Revoke a license.


```js
google_licensing.licensing.licenseAssignments.delete({
  "productId": "",
  "skuId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
  * skuId **required** `string`: A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
  * userId **required** `string`: The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
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

### licensing.licenseAssignments.get
Get a specific user's license by product SKU.


```js
google_licensing.licensing.licenseAssignments.get({
  "productId": "",
  "skuId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
  * skuId **required** `string`: A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
  * userId **required** `string`: The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
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
* output [LicenseAssignment](#licenseassignment)

### licensing.licenseAssignments.patch
Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.


```js
google_licensing.licensing.licenseAssignments.patch({
  "productId": "",
  "skuId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
  * skuId **required** `string`: A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
  * userId **required** `string`: The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
  * body [LicenseAssignment](#licenseassignment)
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
* output [LicenseAssignment](#licenseassignment)

### licensing.licenseAssignments.update
Reassign a user's product SKU with a different SKU in the same product.


```js
google_licensing.licensing.licenseAssignments.update({
  "productId": "",
  "skuId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
  * skuId **required** `string`: A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
  * userId **required** `string`: The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
  * body [LicenseAssignment](#licenseassignment)
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
* output [LicenseAssignment](#licenseassignment)

### licensing.licenseAssignments.listForProductAndSku
List all users assigned licenses for a specific product SKU.


```js
google_licensing.licensing.licenseAssignments.listForProductAndSku({
  "productId": "",
  "skuId": "",
  "customerId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
  * skuId **required** `string`: A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
  * customerId **required** `string`: Customer's `customerId`. A previous version of this API accepted the primary domain name as a value for this field. If the customer is suspended, the server returns an error.
  * maxResults `integer`: The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
  * pageToken `string`: Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
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
* output [LicenseAssignmentList](#licenseassignmentlist)

### licensing.licenseAssignments.listForProduct
List all users assigned licenses for a specific product SKU.


```js
google_licensing.licensing.licenseAssignments.listForProduct({
  "productId": "",
  "customerId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
  * customerId **required** `string`: Customer's `customerId`. A previous version of this API accepted the primary domain name as a value for this field. If the customer is suspended, the server returns an error.
  * maxResults `integer`: The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
  * pageToken `string`: Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
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
* output [LicenseAssignmentList](#licenseassignmentlist)



## Definitions

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### LicenseAssignment
* LicenseAssignment `object`: Representation of a license assignment.
  * etags `string`: ETag of the resource.
  * kind `string`: Identifies the resource as a LicenseAssignment, which is `licensing#licenseAssignment`.
  * productId `string`: A product's unique identifier. For more information about products in this version of the API, see Product and SKU IDs.
  * productName `string`: Display Name of the product.
  * selfLink `string`: Link to this page.
  * skuId `string`: A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
  * skuName `string`: Display Name of the sku of the product.
  * userId `string`: The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.

### LicenseAssignmentInsert
* LicenseAssignmentInsert `object`: Representation of a license assignment.
  * userId `string`: Email id of the user

### LicenseAssignmentList
* LicenseAssignmentList `object`
  * etag `string`: ETag of the resource.
  * items `array`: The LicenseAssignments in this page of results.
    * items [LicenseAssignment](#licenseassignment)
  * kind `string`: Identifies the resource as a collection of LicenseAssignments.
  * nextPageToken `string`: The token that you must submit in a subsequent request to retrieve additional license results matching your query parameters. The `maxResults` query string is related to the `nextPageToken` since `maxResults` determines how many entries are returned on each next page.


