# @datafire/google_licensing

Client library for Enterprise License Manager

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

google_licensing.licenseAssignments.insert({
  "productId": "",
  "skuId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Views and manages licenses for your domain.

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

### licenseAssignments.insert
Assign License.


```js
google_licensing.licenseAssignments.insert({
  "productId": "",
  "skuId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: Name for product
  * skuId **required** `string`: Name for sku
  * body [LicenseAssignmentInsert](#licenseassignmentinsert)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LicenseAssignment](#licenseassignment)

### licenseAssignments.delete
Revoke License.


```js
google_licensing.licenseAssignments.delete({
  "productId": "",
  "skuId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: Name for product
  * skuId **required** `string`: Name for sku
  * userId **required** `string`: email id or unique Id of the user
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### licenseAssignments.get
Get license assignment of a particular product and sku for a user


```js
google_licensing.licenseAssignments.get({
  "productId": "",
  "skuId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: Name for product
  * skuId **required** `string`: Name for sku
  * userId **required** `string`: email id or unique Id of the user
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LicenseAssignment](#licenseassignment)

### licenseAssignments.patch
Assign License. This method supports patch semantics.


```js
google_licensing.licenseAssignments.patch({
  "productId": "",
  "skuId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: Name for product
  * skuId **required** `string`: Name for sku for which license would be revoked
  * userId **required** `string`: email id or unique Id of the user
  * body [LicenseAssignment](#licenseassignment)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LicenseAssignment](#licenseassignment)

### licenseAssignments.update
Assign License.


```js
google_licensing.licenseAssignments.update({
  "productId": "",
  "skuId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: Name for product
  * skuId **required** `string`: Name for sku for which license would be revoked
  * userId **required** `string`: email id or unique Id of the user
  * body [LicenseAssignment](#licenseassignment)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LicenseAssignment](#licenseassignment)

### licenseAssignments.listForProductAndSku
List license assignments for given product and sku of the customer.


```js
google_licensing.licenseAssignments.listForProductAndSku({
  "productId": "",
  "skuId": "",
  "customerId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: Name for product
  * skuId **required** `string`: Name for sku
  * customerId **required** `string`: CustomerId represents the customer for whom licenseassignments are queried
  * maxResults `integer`: Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
  * pageToken `string`: Token to fetch the next page.Optional. By default server will return first page
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LicenseAssignmentList](#licenseassignmentlist)

### licenseAssignments.listForProduct
List license assignments for given product of the customer.


```js
google_licensing.licenseAssignments.listForProduct({
  "productId": "",
  "customerId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: Name for product
  * customerId **required** `string`: CustomerId represents the customer for whom licenseassignments are queried
  * maxResults `integer`: Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
  * pageToken `string`: Token to fetch the next page.Optional. By default server will return first page
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LicenseAssignmentList](#licenseassignmentlist)



## Definitions

### LicenseAssignment
* LicenseAssignment `object`: Template for LiscenseAssignment Resource
  * etags `string`: ETag of the resource.
  * kind `string`: Identifies the resource as a LicenseAssignment.
  * productId `string`: Id of the product.
  * productName `string`: Display Name of the product.
  * selfLink `string`: Link to this page.
  * skuId `string`: Id of the sku of the product.
  * skuName `string`: Display Name of the sku of the product.
  * userId `string`: Email id of the user.

### LicenseAssignmentInsert
* LicenseAssignmentInsert `object`: Template for LicenseAssignment Insert request
  * userId `string`: Email id of the user

### LicenseAssignmentList
* LicenseAssignmentList `object`: LicesnseAssignment List for a given product/sku for a customer.
  * etag `string`: ETag of the resource.
  * items `array`: The LicenseAssignments in this page of results.
    * items [LicenseAssignment](#licenseassignment)
  * kind `string`: Identifies the resource as a collection of LicenseAssignments.
  * nextPageToken `string`: The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.


