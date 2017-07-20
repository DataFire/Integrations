# @datafire/google_licensing

Client library for Enterprise License Manager

## Installation and Usage
```bash
npm install --save datafire @datafire/google_licensing
```

```js
let datafire = require('datafire');
let google_licensing = require('@datafire/google_licensing').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_licensing: account,
  }
})

google_licensing.licenseAssignments.insert({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_licensing.oauthRefresh(null, context)
```


### licenseAssignments.insert
Assign License.


```js
google_licensing.licenseAssignments.insert({
  "productId": "",
  "skuId": ""
}, context)
```

#### Parameters
* productId (string) **required** - Name for product
* skuId (string) **required** - Name for sku
* body (object) - Template for LicenseAssignment Insert request
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### licenseAssignments.delete
Revoke License.


```js
google_licensing.licenseAssignments.delete({
  "productId": "",
  "skuId": "",
  "userId": ""
}, context)
```

#### Parameters
* productId (string) **required** - Name for product
* skuId (string) **required** - Name for sku
* userId (string) **required** - email id or unique Id of the user
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### licenseAssignments.get
Get license assignment of a particular product and sku for a user


```js
google_licensing.licenseAssignments.get({
  "productId": "",
  "skuId": "",
  "userId": ""
}, context)
```

#### Parameters
* productId (string) **required** - Name for product
* skuId (string) **required** - Name for sku
* userId (string) **required** - email id or unique Id of the user
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### licenseAssignments.patch
Assign License. This method supports patch semantics.


```js
google_licensing.licenseAssignments.patch({
  "productId": "",
  "skuId": "",
  "userId": ""
}, context)
```

#### Parameters
* productId (string) **required** - Name for product
* skuId (string) **required** - Name for sku for which license would be revoked
* userId (string) **required** - email id or unique Id of the user
* body (object) - Template for LiscenseAssignment Resource
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### licenseAssignments.update
Assign License.


```js
google_licensing.licenseAssignments.update({
  "productId": "",
  "skuId": "",
  "userId": ""
}, context)
```

#### Parameters
* productId (string) **required** - Name for product
* skuId (string) **required** - Name for sku for which license would be revoked
* userId (string) **required** - email id or unique Id of the user
* body (object) - Template for LiscenseAssignment Resource
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### licenseAssignments.listForProductAndSku
List license assignments for given product and sku of the customer.


```js
google_licensing.licenseAssignments.listForProductAndSku({
  "productId": "",
  "skuId": "",
  "customerId": ""
}, context)
```

#### Parameters
* productId (string) **required** - Name for product
* skuId (string) **required** - Name for sku
* customerId (string) **required** - CustomerId represents the customer for whom licenseassignments are queried
* maxResults (integer) - Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
* pageToken (string) - Token to fetch the next page.Optional. By default server will return first page
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### licenseAssignments.listForProduct
List license assignments for given product of the customer.


```js
google_licensing.licenseAssignments.listForProduct({
  "productId": "",
  "customerId": ""
}, context)
```

#### Parameters
* productId (string) **required** - Name for product
* customerId (string) **required** - CustomerId represents the customer for whom licenseassignments are queried
* maxResults (integer) - Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
* pageToken (string) - Token to fetch the next page.Optional. By default server will return first page
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

