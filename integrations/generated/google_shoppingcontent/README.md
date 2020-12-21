# @datafire/google_shoppingcontent

Client library for Content API for Shopping

## Installation and Usage
```bash
npm install --save @datafire/google_shoppingcontent
```
```js
let google_shoppingcontent = require('@datafire/google_shoppingcontent').create({
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

Manage your product listings and accounts for Google Shopping

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_shoppingcontent.oauthCallback({
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
google_shoppingcontent.oauthRefresh(null, context)
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

### content.accounts.authinfo
Returns information about the authenticated user.


```js
google_shoppingcontent.content.accounts.authinfo({}, context)
```

#### Input
* input `object`
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
* output [AccountsAuthInfoResponse](#accountsauthinforesponse)

### content.accounts.custombatch
Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.


```js
google_shoppingcontent.content.accounts.custombatch({}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [AccountsCustomBatchRequest](#accountscustombatchrequest)
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
* output [AccountsCustomBatchResponse](#accountscustombatchresponse)

### content.accountstatuses.custombatch
Retrieves multiple Merchant Center account statuses in a single request.


```js
google_shoppingcontent.content.accountstatuses.custombatch({}, context)
```

#### Input
* input `object`
  * body [AccountstatusesCustomBatchRequest](#accountstatusescustombatchrequest)
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
* output [AccountstatusesCustomBatchResponse](#accountstatusescustombatchresponse)

### content.accounttax.custombatch
Retrieves and updates tax settings of multiple accounts in a single request.


```js
google_shoppingcontent.content.accounttax.custombatch({}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [AccounttaxCustomBatchRequest](#accounttaxcustombatchrequest)
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
* output [AccounttaxCustomBatchResponse](#accounttaxcustombatchresponse)

### content.datafeeds.custombatch
Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.


```js
google_shoppingcontent.content.datafeeds.custombatch({}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [DatafeedsCustomBatchRequest](#datafeedscustombatchrequest)
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
* output [DatafeedsCustomBatchResponse](#datafeedscustombatchresponse)

### content.datafeedstatuses.custombatch
Gets multiple Merchant Center datafeed statuses in a single request.


```js
google_shoppingcontent.content.datafeedstatuses.custombatch({}, context)
```

#### Input
* input `object`
  * body [DatafeedstatusesCustomBatchRequest](#datafeedstatusescustombatchrequest)
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
* output [DatafeedstatusesCustomBatchResponse](#datafeedstatusescustombatchresponse)

### content.inventory.custombatch
Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products.


```js
google_shoppingcontent.content.inventory.custombatch({}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [InventoryCustomBatchRequest](#inventorycustombatchrequest)
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
* output [InventoryCustomBatchResponse](#inventorycustombatchresponse)

### content.liasettings.custombatch
Retrieves and/or updates the LIA settings of multiple accounts in a single request.


```js
google_shoppingcontent.content.liasettings.custombatch({}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [LiasettingsCustomBatchRequest](#liasettingscustombatchrequest)
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
* output [LiasettingsCustomBatchResponse](#liasettingscustombatchresponse)

### content.liasettings.listposdataproviders
Retrieves the list of POS data providers that have active settings for the all eiligible countries.


```js
google_shoppingcontent.content.liasettings.listposdataproviders({}, context)
```

#### Input
* input `object`
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
* output [LiasettingsListPosDataProvidersResponse](#liasettingslistposdataprovidersresponse)

### content.orders.custombatch
Retrieves or modifies multiple orders in a single request.


```js
google_shoppingcontent.content.orders.custombatch({}, context)
```

#### Input
* input `object`
  * body [OrdersCustomBatchRequest](#orderscustombatchrequest)
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
* output [OrdersCustomBatchResponse](#orderscustombatchresponse)

### content.pos.custombatch
Batches multiple POS-related calls in a single request.


```js
google_shoppingcontent.content.pos.custombatch({}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [PosCustomBatchRequest](#poscustombatchrequest)
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
* output [PosCustomBatchResponse](#poscustombatchresponse)

### content.products.custombatch
Retrieves, inserts, and deletes multiple products in a single request.


```js
google_shoppingcontent.content.products.custombatch({}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [ProductsCustomBatchRequest](#productscustombatchrequest)
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
* output [ProductsCustomBatchResponse](#productscustombatchresponse)

### content.productstatuses.custombatch
Gets the statuses of multiple products in a single request.


```js
google_shoppingcontent.content.productstatuses.custombatch({}, context)
```

#### Input
* input `object`
  * includeAttributes `boolean`: Flag to include full product data in the results of this request. The default value is false.
  * body [ProductstatusesCustomBatchRequest](#productstatusescustombatchrequest)
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
* output [ProductstatusesCustomBatchResponse](#productstatusescustombatchresponse)

### content.shippingsettings.custombatch
Retrieves and updates the shipping settings of multiple accounts in a single request.


```js
google_shoppingcontent.content.shippingsettings.custombatch({}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [ShippingsettingsCustomBatchRequest](#shippingsettingscustombatchrequest)
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
* output [ShippingsettingsCustomBatchResponse](#shippingsettingscustombatchresponse)

### content.accounts.list
Lists the sub-accounts in your Merchant Center account.


```js
google_shoppingcontent.content.accounts.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account.
  * maxResults `integer`: The maximum number of accounts to return in the response, used for paging.
  * pageToken `string`: The token returned by the previous request.
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
* output [AccountsListResponse](#accountslistresponse)

### content.accounts.insert
Creates a Merchant Center sub-account.


```js
google_shoppingcontent.content.accounts.insert({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [Account](#account)
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
* output [Account](#account)

### content.accounts.delete
Deletes a Merchant Center sub-account.


```js
google_shoppingcontent.content.accounts.delete({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * force `boolean`: Flag to delete sub-accounts with products. The default value is false.
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
*Output schema unknown*

### content.accounts.get
Retrieves a Merchant Center account.


```js
google_shoppingcontent.content.accounts.get({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account.
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
* output [Account](#account)

### content.accounts.update
Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.


```js
google_shoppingcontent.content.accounts.update({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [Account](#account)
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
* output [Account](#account)

### content.accounts.claimwebsite
Claims the website of a Merchant Center sub-account.


```js
google_shoppingcontent.content.accounts.claimwebsite({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account whose website is claimed.
  * overwrite `boolean`: Only available to selected merchants. When set to `True`, this flag removes any existing claim on the requested website by another account and replaces it with a claim from this account.
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
* output [AccountsClaimWebsiteResponse](#accountsclaimwebsiteresponse)

### content.accounts.link
Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.


```js
google_shoppingcontent.content.accounts.link({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account that should be linked.
  * body [AccountsLinkRequest](#accountslinkrequest)
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
* output [AccountsLinkResponse](#accountslinkresponse)

### content.accountstatuses.list
Lists the statuses of the sub-accounts in your Merchant Center account.


```js
google_shoppingcontent.content.accountstatuses.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account.
  * destinations `array`: If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
  * maxResults `integer`: The maximum number of account statuses to return in the response, used for paging.
  * pageToken `string`: The token returned by the previous request.
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
* output [AccountstatusesListResponse](#accountstatuseslistresponse)

### content.accountstatuses.get
Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.


```js
google_shoppingcontent.content.accountstatuses.get({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account.
  * destinations `array`: If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
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
* output [AccountStatus](#accountstatus)

### content.accounttax.list
Lists the tax settings of the sub-accounts in your Merchant Center account.


```js
google_shoppingcontent.content.accounttax.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account.
  * maxResults `integer`: The maximum number of tax settings to return in the response, used for paging.
  * pageToken `string`: The token returned by the previous request.
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
* output [AccounttaxListResponse](#accounttaxlistresponse)

### content.accounttax.get
Retrieves the tax settings of the account.


```js
google_shoppingcontent.content.accounttax.get({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account for which to get/update account tax settings.
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
* output [AccountTax](#accounttax)

### content.accounttax.update
Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.


```js
google_shoppingcontent.content.accounttax.update({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account for which to get/update account tax settings.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [AccountTax](#accounttax)
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
* output [AccountTax](#accounttax)

### content.datafeeds.list
Lists the configurations for datafeeds in your Merchant Center account.


```js
google_shoppingcontent.content.datafeeds.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
  * maxResults `integer`: The maximum number of products to return in the response, used for paging.
  * pageToken `string`: The token returned by the previous request.
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
* output [DatafeedsListResponse](#datafeedslistresponse)

### content.datafeeds.insert
Registers a datafeed configuration with your Merchant Center account.


```js
google_shoppingcontent.content.datafeeds.insert({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [Datafeed](#datafeed)
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
* output [Datafeed](#datafeed)

### content.datafeeds.delete
Deletes a datafeed configuration from your Merchant Center account.


```js
google_shoppingcontent.content.datafeeds.delete({
  "merchantId": "",
  "datafeedId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
  * datafeedId **required** `string`: The ID of the datafeed.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
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
*Output schema unknown*

### content.datafeeds.get
Retrieves a datafeed configuration from your Merchant Center account.


```js
google_shoppingcontent.content.datafeeds.get({
  "merchantId": "",
  "datafeedId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
  * datafeedId **required** `string`: The ID of the datafeed.
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
* output [Datafeed](#datafeed)

### content.datafeeds.update
Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.


```js
google_shoppingcontent.content.datafeeds.update({
  "merchantId": "",
  "datafeedId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
  * datafeedId **required** `string`: The ID of the datafeed.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [Datafeed](#datafeed)
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
* output [Datafeed](#datafeed)

### content.datafeeds.fetchnow
Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.


```js
google_shoppingcontent.content.datafeeds.fetchnow({
  "merchantId": "",
  "datafeedId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
  * datafeedId **required** `string`: The ID of the datafeed to be fetched.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
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
* output [DatafeedsFetchNowResponse](#datafeedsfetchnowresponse)

### content.datafeedstatuses.list
Lists the statuses of the datafeeds in your Merchant Center account.


```js
google_shoppingcontent.content.datafeedstatuses.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
  * maxResults `integer`: The maximum number of products to return in the response, used for paging.
  * pageToken `string`: The token returned by the previous request.
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
* output [DatafeedstatusesListResponse](#datafeedstatuseslistresponse)

### content.datafeedstatuses.get
Retrieves the status of a datafeed from your Merchant Center account.


```js
google_shoppingcontent.content.datafeedstatuses.get({
  "merchantId": "",
  "datafeedId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
  * datafeedId **required** `string`: The ID of the datafeed.
  * country `string`: The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
  * language `string`: The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
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
* output [DatafeedStatus](#datafeedstatus)

### content.inventory.set
Updates price and availability of a product in your Merchant Center account.


```js
google_shoppingcontent.content.inventory.set({
  "merchantId": "",
  "storeCode": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * storeCode **required** `string`: The code of the store for which to update price and availability. Use `online` to update price and availability of an online product.
  * productId **required** `string`: The REST ID of the product for which to update price and availability.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [InventorySetRequest](#inventorysetrequest)
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
* output [InventorySetResponse](#inventorysetresponse)

### content.liasettings.list
Lists the LIA settings of the sub-accounts in your Merchant Center account.


```js
google_shoppingcontent.content.liasettings.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account.
  * maxResults `integer`: The maximum number of LIA settings to return in the response, used for paging.
  * pageToken `string`: The token returned by the previous request.
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
* output [LiasettingsListResponse](#liasettingslistresponse)

### content.liasettings.get
Retrieves the LIA settings of the account.


```js
google_shoppingcontent.content.liasettings.get({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account for which to get or update LIA settings.
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
* output [LiaSettings](#liasettings)

### content.liasettings.update
Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.


```js
google_shoppingcontent.content.liasettings.update({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account for which to get or update LIA settings.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [LiaSettings](#liasettings)
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
* output [LiaSettings](#liasettings)

### content.liasettings.getaccessiblegmbaccounts
Retrieves the list of accessible Google My Business accounts.


```js
google_shoppingcontent.content.liasettings.getaccessiblegmbaccounts({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account for which to retrieve accessible Google My Business accounts.
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
* output [LiasettingsGetAccessibleGmbAccountsResponse](#liasettingsgetaccessiblegmbaccountsresponse)

### content.liasettings.requestgmbaccess
Requests access to a specified Google My Business account.


```js
google_shoppingcontent.content.liasettings.requestgmbaccess({
  "merchantId": "",
  "accountId": "",
  "gmbEmail": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account for which GMB access is requested.
  * gmbEmail **required** `string`: The email of the Google My Business account.
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
* output [LiasettingsRequestGmbAccessResponse](#liasettingsrequestgmbaccessresponse)

### content.liasettings.requestinventoryverification
Requests inventory validation for the specified country.


```js
google_shoppingcontent.content.liasettings.requestinventoryverification({
  "merchantId": "",
  "accountId": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * country **required** `string`: The country for which inventory validation is requested.
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
* output [LiasettingsRequestInventoryVerificationResponse](#liasettingsrequestinventoryverificationresponse)

### content.liasettings.setinventoryverificationcontact
Sets the inventory verification contract for the specified country.


```js
google_shoppingcontent.content.liasettings.setinventoryverificationcontact({
  "merchantId": "",
  "accountId": "",
  "country": "",
  "language": "",
  "contactName": "",
  "contactEmail": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * country **required** `string`: The country for which inventory verification is requested.
  * language **required** `string`: The language for which inventory verification is requested.
  * contactName **required** `string`: The name of the inventory verification contact.
  * contactEmail **required** `string`: The email of the inventory verification contact.
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
* output [LiasettingsSetInventoryVerificationContactResponse](#liasettingssetinventoryverificationcontactresponse)

### content.liasettings.setposdataprovider
Sets the POS data provider for the specified country.


```js
google_shoppingcontent.content.liasettings.setposdataprovider({
  "merchantId": "",
  "accountId": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account for which to retrieve accessible Google My Business accounts.
  * country **required** `string`: The country for which the POS data provider is selected.
  * posDataProviderId `string`: The ID of POS data provider.
  * posExternalAccountId `string`: The account ID by which this merchant is known to the POS data provider.
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
* output [LiasettingsSetPosDataProviderResponse](#liasettingssetposdataproviderresponse)

### content.orderinvoices.createchargeinvoice
Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.


```js
google_shoppingcontent.content.orderinvoices.createchargeinvoice({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * body [OrderinvoicesCreateChargeInvoiceRequest](#orderinvoicescreatechargeinvoicerequest)
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
* output [OrderinvoicesCreateChargeInvoiceResponse](#orderinvoicescreatechargeinvoiceresponse)

### content.orderinvoices.createrefundinvoice
Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.


```js
google_shoppingcontent.content.orderinvoices.createrefundinvoice({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * body [OrderinvoicesCreateRefundInvoiceRequest](#orderinvoicescreaterefundinvoicerequest)
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
* output [OrderinvoicesCreateRefundInvoiceResponse](#orderinvoicescreaterefundinvoiceresponse)

### content.orderreports.listdisbursements
Retrieves a report for disbursements from your Merchant Center account.


```js
google_shoppingcontent.content.orderreports.listdisbursements({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * disbursementEndDate `string`: The last date which disbursements occurred. In ISO 8601 format. Default: current date.
  * disbursementStartDate `string`: The first date which disbursements occurred. In ISO 8601 format.
  * maxResults `integer`: The maximum number of disbursements to return in the response, used for paging.
  * pageToken `string`: The token returned by the previous request.
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
* output [OrderreportsListDisbursementsResponse](#orderreportslistdisbursementsresponse)

### content.orderreports.listtransactions
Retrieves a list of transactions for a disbursement from your Merchant Center account.


```js
google_shoppingcontent.content.orderreports.listtransactions({
  "merchantId": "",
  "disbursementId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * disbursementId **required** `string`: The Google-provided ID of the disbursement (found in Wallet).
  * maxResults `integer`: The maximum number of disbursements to return in the response, used for paging.
  * pageToken `string`: The token returned by the previous request.
  * transactionEndDate `string`: The last date in which transaction occurred. In ISO 8601 format. Default: current date.
  * transactionStartDate `string`: The first date in which transaction occurred. In ISO 8601 format.
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
* output [OrderreportsListTransactionsResponse](#orderreportslisttransactionsresponse)

### content.orderreturns.list
Lists order returns in your Merchant Center account.


```js
google_shoppingcontent.content.orderreturns.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * createdEndDate `string`: Obtains order returns created before this date (inclusively), in ISO 8601 format.
  * createdStartDate `string`: Obtains order returns created after this date (inclusively), in ISO 8601 format.
  * maxResults `integer`: The maximum number of order returns to return in the response, used for paging. The default value is 25 returns per page, and the maximum allowed value is 250 returns per page.
  * orderBy `string` (values: RETURN_CREATION_TIME_DESC, RETURN_CREATION_TIME_ASC): Return the results in the specified order.
  * pageToken `string`: The token returned by the previous request.
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
* output [OrderreturnsListResponse](#orderreturnslistresponse)

### content.orderreturns.get
Retrieves an order return from your Merchant Center account.


```js
google_shoppingcontent.content.orderreturns.get({
  "merchantId": "",
  "returnId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * returnId **required** `string`: Merchant order return ID generated by Google.
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
* output [MerchantOrderReturn](#merchantorderreturn)

### content.orders.list
Lists the orders in your Merchant Center account.


```js
google_shoppingcontent.content.orders.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * acknowledged `boolean`: Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged. We recommend using this filter set to `false`, in conjunction with the `acknowledge` call, such that only un-acknowledged orders are returned. 
  * maxResults `integer`: The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page.
  * orderBy `string`: Order results by placement date in descending or ascending order. Acceptable values are: - placedDateAsc - placedDateDesc 
  * pageToken `string`: The token returned by the previous request.
  * placedDateEnd `string`: Obtains orders placed before this date (exclusively), in ISO 8601 format.
  * placedDateStart `string`: Obtains orders placed after this date (inclusively), in ISO 8601 format.
  * statuses `array`: Obtains orders that match any of the specified statuses. Please note that `active` is a shortcut for `pendingShipment` and `partiallyShipped`, and `completed` is a shortcut for `shipped`, `partiallyDelivered`, `delivered`, `partiallyReturned`, `returned`, and `canceled`.
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
* output [OrdersListResponse](#orderslistresponse)

### content.orders.get
Retrieves an order from your Merchant Center account.


```js
google_shoppingcontent.content.orders.get({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
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
* output [Order](#order)

### content.orders.acknowledge
Marks an order as acknowledged.


```js
google_shoppingcontent.content.orders.acknowledge({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * body [OrdersAcknowledgeRequest](#ordersacknowledgerequest)
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
* output [OrdersAcknowledgeResponse](#ordersacknowledgeresponse)

### content.orders.cancel
Cancels all line items in an order, making a full refund.


```js
google_shoppingcontent.content.orders.cancel({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order to cancel.
  * body [OrdersCancelRequest](#orderscancelrequest)
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
* output [OrdersCancelResponse](#orderscancelresponse)

### content.orders.cancellineitem
Cancels a line item, making a full refund.


```js
google_shoppingcontent.content.orders.cancellineitem({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * body [OrdersCancelLineItemRequest](#orderscancellineitemrequest)
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
* output [OrdersCancelLineItemResponse](#orderscancellineitemresponse)

### content.orders.instorerefundlineitem
Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.


```js
google_shoppingcontent.content.orders.instorerefundlineitem({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * body [OrdersInStoreRefundLineItemRequest](#ordersinstorerefundlineitemrequest)
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
* output [OrdersInStoreRefundLineItemResponse](#ordersinstorerefundlineitemresponse)

### content.orders.refund
Deprecated, please use returnRefundLineItem instead.


```js
google_shoppingcontent.content.orders.refund({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order to refund.
  * body [OrdersRefundRequest](#ordersrefundrequest)
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
* output [OrdersRefundResponse](#ordersrefundresponse)

### content.orders.rejectreturnlineitem
Rejects return on an line item.


```js
google_shoppingcontent.content.orders.rejectreturnlineitem({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * body [OrdersRejectReturnLineItemRequest](#ordersrejectreturnlineitemrequest)
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
* output [OrdersRejectReturnLineItemResponse](#ordersrejectreturnlineitemresponse)

### content.orders.returnlineitem
Returns a line item.


```js
google_shoppingcontent.content.orders.returnlineitem({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * body [OrdersReturnLineItemRequest](#ordersreturnlineitemrequest)
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
* output [OrdersReturnLineItemResponse](#ordersreturnlineitemresponse)

### content.orders.returnrefundlineitem
Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.


```js
google_shoppingcontent.content.orders.returnrefundlineitem({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * body [OrdersReturnRefundLineItemRequest](#ordersreturnrefundlineitemrequest)
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
* output [OrdersReturnRefundLineItemResponse](#ordersreturnrefundlineitemresponse)

### content.orders.setlineitemmetadata
Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.


```js
google_shoppingcontent.content.orders.setlineitemmetadata({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * body [OrdersSetLineItemMetadataRequest](#orderssetlineitemmetadatarequest)
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
* output [OrdersSetLineItemMetadataResponse](#orderssetlineitemmetadataresponse)

### content.orders.shiplineitems
Marks line item(s) as shipped.


```js
google_shoppingcontent.content.orders.shiplineitems({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * body [OrdersShipLineItemsRequest](#ordersshiplineitemsrequest)
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
* output [OrdersShipLineItemsResponse](#ordersshiplineitemsresponse)

### content.orders.createtestreturn
Sandbox only. Creates a test return.


```js
google_shoppingcontent.content.orders.createtestreturn({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * body [OrdersCreateTestReturnRequest](#orderscreatetestreturnrequest)
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
* output [OrdersCreateTestReturnResponse](#orderscreatetestreturnresponse)

### content.orders.updatelineitemshippingdetails
Updates ship by and delivery by dates for a line item.


```js
google_shoppingcontent.content.orders.updatelineitemshippingdetails({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * body [OrdersUpdateLineItemShippingDetailsRequest](#ordersupdatelineitemshippingdetailsrequest)
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
* output [OrdersUpdateLineItemShippingDetailsResponse](#ordersupdatelineitemshippingdetailsresponse)

### content.orders.updatemerchantorderid
Updates the merchant order ID for a given order.


```js
google_shoppingcontent.content.orders.updatemerchantorderid({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * body [OrdersUpdateMerchantOrderIdRequest](#ordersupdatemerchantorderidrequest)
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
* output [OrdersUpdateMerchantOrderIdResponse](#ordersupdatemerchantorderidresponse)

### content.orders.updateshipment
Updates a shipment's status, carrier, and/or tracking ID.


```js
google_shoppingcontent.content.orders.updateshipment({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * body [OrdersUpdateShipmentRequest](#ordersupdateshipmentrequest)
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
* output [OrdersUpdateShipmentResponse](#ordersupdateshipmentresponse)

### content.orders.getbymerchantorderid
Retrieves an order using merchant order ID.


```js
google_shoppingcontent.content.orders.getbymerchantorderid({
  "merchantId": "",
  "merchantOrderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * merchantOrderId **required** `string`: The merchant order ID to be looked for.
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
* output [OrdersGetByMerchantOrderIdResponse](#ordersgetbymerchantorderidresponse)

### content.pos.inventory
Submit inventory for the given merchant.


```js
google_shoppingcontent.content.pos.inventory({
  "merchantId": "",
  "targetMerchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the POS or inventory data provider.
  * targetMerchantId **required** `string`: The ID of the target merchant.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [PosInventoryRequest](#posinventoryrequest)
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
* output [PosInventoryResponse](#posinventoryresponse)

### content.pos.sale
Submit a sale event for the given merchant.


```js
google_shoppingcontent.content.pos.sale({
  "merchantId": "",
  "targetMerchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the POS or inventory data provider.
  * targetMerchantId **required** `string`: The ID of the target merchant.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [PosSaleRequest](#possalerequest)
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
* output [PosSaleResponse](#possaleresponse)

### content.pos.list
Lists the stores of the target merchant.


```js
google_shoppingcontent.content.pos.list({
  "merchantId": "",
  "targetMerchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the POS or inventory data provider.
  * targetMerchantId **required** `string`: The ID of the target merchant.
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
* output [PosListResponse](#poslistresponse)

### content.pos.insert
Creates a store for the given merchant.


```js
google_shoppingcontent.content.pos.insert({
  "merchantId": "",
  "targetMerchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the POS or inventory data provider.
  * targetMerchantId **required** `string`: The ID of the target merchant.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [PosStore](#posstore)
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
* output [PosStore](#posstore)

### content.pos.delete
Deletes a store for the given merchant.


```js
google_shoppingcontent.content.pos.delete({
  "merchantId": "",
  "targetMerchantId": "",
  "storeCode": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the POS or inventory data provider.
  * targetMerchantId **required** `string`: The ID of the target merchant.
  * storeCode **required** `string`: A store code that is unique per merchant.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
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
*Output schema unknown*

### content.pos.get
Retrieves information about the given store.


```js
google_shoppingcontent.content.pos.get({
  "merchantId": "",
  "targetMerchantId": "",
  "storeCode": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the POS or inventory data provider.
  * targetMerchantId **required** `string`: The ID of the target merchant.
  * storeCode **required** `string`: A store code that is unique per merchant.
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
* output [PosStore](#posstore)

### content.products.list
Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.


```js
google_shoppingcontent.content.products.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the products. This account cannot be a multi-client account.
  * includeInvalidInsertedItems `boolean`: Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
  * maxResults `integer`: The maximum number of products to return in the response, used for paging.
  * pageToken `string`: The token returned by the previous request.
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
* output [ProductsListResponse](#productslistresponse)

### content.products.insert
Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.


```js
google_shoppingcontent.content.products.insert({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [Product](#product)
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
* output [Product](#product)

### content.products.delete
Deletes a product from your Merchant Center account.


```js
google_shoppingcontent.content.products.delete({
  "merchantId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * productId **required** `string`: The REST ID of the product.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
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
*Output schema unknown*

### content.products.get
Retrieves a product from your Merchant Center account.


```js
google_shoppingcontent.content.products.get({
  "merchantId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * productId **required** `string`: The REST ID of the product.
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
* output [Product](#product)

### content.productstatuses.list
Lists the statuses of the products in your Merchant Center account.


```js
google_shoppingcontent.content.productstatuses.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the products. This account cannot be a multi-client account.
  * destinations `array`: If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
  * includeAttributes `boolean`: Flag to include full product data in the results of the list request. The default value is false.
  * includeInvalidInsertedItems `boolean`: Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
  * maxResults `integer`: The maximum number of product statuses to return in the response, used for paging.
  * pageToken `string`: The token returned by the previous request.
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
* output [ProductstatusesListResponse](#productstatuseslistresponse)

### content.productstatuses.get
Gets the status of a product from your Merchant Center account.


```js
google_shoppingcontent.content.productstatuses.get({
  "merchantId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * productId **required** `string`: The REST ID of the product.
  * destinations `array`: If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
  * includeAttributes `boolean`: Flag to include full product data in the result of this get request. The default value is false.
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
* output [ProductStatus](#productstatus)

### content.shippingsettings.list
Lists the shipping settings of the sub-accounts in your Merchant Center account.


```js
google_shoppingcontent.content.shippingsettings.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account.
  * maxResults `integer`: The maximum number of shipping settings to return in the response, used for paging.
  * pageToken `string`: The token returned by the previous request.
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
* output [ShippingsettingsListResponse](#shippingsettingslistresponse)

### content.shippingsettings.get
Retrieves the shipping settings of the account.


```js
google_shoppingcontent.content.shippingsettings.get({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account for which to get/update shipping settings.
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
* output [ShippingSettings](#shippingsettings)

### content.shippingsettings.update
Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.


```js
google_shoppingcontent.content.shippingsettings.update({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account for which to get/update shipping settings.
  * dryRun `boolean`: Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
  * body [ShippingSettings](#shippingsettings)
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
* output [ShippingSettings](#shippingsettings)

### content.shippingsettings.getsupportedcarriers
Retrieves supported carriers and carrier services for an account.


```js
google_shoppingcontent.content.shippingsettings.getsupportedcarriers({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account for which to retrieve the supported carriers.
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
* output [ShippingsettingsGetSupportedCarriersResponse](#shippingsettingsgetsupportedcarriersresponse)

### content.shippingsettings.getsupportedholidays
Retrieves supported holidays for an account.


```js
google_shoppingcontent.content.shippingsettings.getsupportedholidays({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account for which to retrieve the supported holidays.
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
* output [ShippingsettingsGetSupportedHolidaysResponse](#shippingsettingsgetsupportedholidaysresponse)

### content.shippingsettings.getsupportedpickupservices
Retrieves supported pickup services for an account.


```js
google_shoppingcontent.content.shippingsettings.getsupportedpickupservices({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account for which to retrieve the supported pickup services.
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
* output [ShippingsettingsGetSupportedPickupServicesResponse](#shippingsettingsgetsupportedpickupservicesresponse)

### content.orders.createtestorder
Sandbox only. Creates a test order.


```js
google_shoppingcontent.content.orders.createtestorder({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that should manage the order. This cannot be a multi-client account.
  * body [OrdersCreateTestOrderRequest](#orderscreatetestorderrequest)
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
* output [OrdersCreateTestOrderResponse](#orderscreatetestorderresponse)

### content.orders.advancetestorder
Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".


```js
google_shoppingcontent.content.orders.advancetestorder({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the test order to modify.
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
* output [OrdersAdvanceTestOrderResponse](#ordersadvancetestorderresponse)

### content.orders.canceltestorderbycustomer
Sandbox only. Cancels a test order for customer-initiated cancellation.


```js
google_shoppingcontent.content.orders.canceltestorderbycustomer({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the test order to cancel.
  * body [OrdersCancelTestOrderByCustomerRequest](#orderscanceltestorderbycustomerrequest)
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
* output [OrdersCancelTestOrderByCustomerResponse](#orderscanceltestorderbycustomerresponse)

### content.orders.gettestordertemplate
Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.


```js
google_shoppingcontent.content.orders.gettestordertemplate({
  "merchantId": "",
  "templateName": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that should manage the order. This cannot be a multi-client account.
  * templateName **required** `string` (values: TEMPLATE1, TEMPLATE2, TEMPLATE1A, TEMPLATE1B, TEMPLATE3): The name of the template to retrieve.
  * country `string`: The country of the template to retrieve. Defaults to `US`.
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
* output [OrdersGetTestOrderTemplateResponse](#ordersgettestordertemplateresponse)



## Definitions

### Account
* Account `object`: Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role.
  * adultContent `boolean`: Indicates whether the merchant sells adult content.
  * adwordsLinks `array`: List of linked AdWords accounts that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected either in the AdWords interface or through the AdWords API. To delete an active link, or to cancel a link request, remove it from the list.
    * items [AccountAdwordsLink](#accountadwordslink)
  * businessInformation [AccountBusinessInformation](#accountbusinessinformation)
  * googleMyBusinessLink [AccountGoogleMyBusinessLink](#accountgooglemybusinesslink)
  * id `string`: Required for update. Merchant Center account ID.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#account`"
  * name `string`: Required. Display name for the account.
  * reviewsUrl `string`: [DEPRECATED] This field is never returned and will be ignored if provided.
  * sellerId `string`: Client-specific, locally-unique, internal ID for the child account.
  * users `array`: Users with access to the account. Every account (except for subaccounts) must have at least one admin user.
    * items [AccountUser](#accountuser)
  * websiteUrl `string`: The merchant's website.
  * youtubeChannelLinks `array`: List of linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list.
    * items [AccountYouTubeChannelLink](#accountyoutubechannellink)

### AccountAddress
* AccountAddress `object`
  * country `string`: CLDR country code (e.g. "US"). This value cannot be set for a sub-account of an MCA. All MCA sub-accounts inherit the country of their parent MCA.
  * locality `string`: City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
  * postalCode `string`: Postal code or ZIP (e.g. "94043").
  * region `string`: Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
  * streetAddress `string`: Street-level part of the address.

### AccountAdwordsLink
* AccountAdwordsLink `object`
  * adwordsId `string`: Customer ID of the AdWords account.
  * status `string`: Status of the link between this Merchant Center account and the AdWords account. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in Google AdWords or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. Acceptable values are: - "`active`" - "`pending`" 

### AccountBusinessInformation
* AccountBusinessInformation `object`
  * address [AccountAddress](#accountaddress)
  * customerService [AccountCustomerService](#accountcustomerservice)
  * phoneNumber `string`: The phone number of the business.

### AccountCustomerService
* AccountCustomerService `object`
  * email `string`: Customer service email.
  * phoneNumber `string`: Customer service phone number.
  * url `string`: Customer service URL.

### AccountGoogleMyBusinessLink
* AccountGoogleMyBusinessLink `object`
  * gmbEmail `string`: The GMB email address of which a specific account within a GMB account. A sample account within a GMB account could be a business account with set of locations, managed under the GMB account.
  * status `string`: Status of the link between this Merchant Center account and the GMB account. Acceptable values are: - "`active`" - "`pending`" 

### AccountIdentifier
* AccountIdentifier `object`
  * aggregatorId `string`: The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount).
  * merchantId `string`: The merchant account ID, set for individual accounts and subaccounts.

### AccountStatus
* AccountStatus `object`: The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time.
  * accountId `string`: The ID of the account for which the status is reported.
  * accountLevelIssues `array`: A list of account level issues.
    * items [AccountStatusAccountLevelIssue](#accountstatusaccountlevelissue)
  * dataQualityIssues `array`: DEPRECATED - never populated.
    * items [AccountStatusDataQualityIssue](#accountstatusdataqualityissue)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#accountStatus`"
  * products `array`: List of product-related data by channel, destination, and country. Data in this field may be delayed by up to 30 minutes.
    * items [AccountStatusProducts](#accountstatusproducts)
  * websiteClaimed `boolean`: Whether the account's website is claimed or not.

### AccountStatusAccountLevelIssue
* AccountStatusAccountLevelIssue `object`
  * country `string`: Country for which this issue is reported.
  * destination `string`: The destination the issue applies to. If this field is empty then the issue applies to all available destinations.
  * detail `string`: Additional details about the issue.
  * documentation `string`: The URL of a web page to help resolving this issue.
  * id `string`: Issue identifier.
  * severity `string`: Severity of the issue. Acceptable values are: - "`critical`" - "`error`" - "`suggestion`" 
  * title `string`: Short description of the issue.

### AccountStatusDataQualityIssue
* AccountStatusDataQualityIssue `object`
  * country `string`
  * destination `string`
  * detail `string`
  * displayedValue `string`
  * exampleItems `array`
    * items [AccountStatusExampleItem](#accountstatusexampleitem)
  * id `string`
  * lastChecked `string`
  * location `string`
  * numItems `integer`
  * severity `string`:  Acceptable values are: - "`critical`" - "`error`" - "`suggestion`" 
  * submittedValue `string`

### AccountStatusExampleItem
* AccountStatusExampleItem `object`
  * itemId `string`
  * link `string`
  * submittedValue `string`
  * title `string`
  * valueOnLandingPage `string`

### AccountStatusItemLevelIssue
* AccountStatusItemLevelIssue `object`
  * attributeName `string`: The attribute's name, if the issue is caused by a single attribute.
  * code `string`: The error code of the issue.
  * description `string`: A short issue description in English.
  * detail `string`: A detailed issue description in English.
  * documentation `string`: The URL of a web page to help with resolving this issue.
  * numItems `string`: Number of items with this issue.
  * resolution `string`: Whether the issue can be resolved by the merchant.
  * servability `string`: How this issue affects serving of the offer.

### AccountStatusProducts
* AccountStatusProducts `object`
  * channel `string`: The channel the data applies to. Acceptable values are: - "`local`" - "`online`" 
  * country `string`: The country the data applies to.
  * destination `string`: The destination the data applies to.
  * itemLevelIssues `array`: List of item-level issues.
    * items [AccountStatusItemLevelIssue](#accountstatusitemlevelissue)
  * statistics [AccountStatusStatistics](#accountstatusstatistics)

### AccountStatusStatistics
* AccountStatusStatistics `object`
  * active `string`: Number of active offers.
  * disapproved `string`: Number of disapproved offers.
  * expiring `string`: Number of expiring offers.
  * pending `string`: Number of pending offers.

### AccountTax
* AccountTax `object`: The tax settings of a merchant account. All methods require the admin role.
  * accountId `string`: Required. The ID of the account to which these account tax settings belong.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountTax".
  * rules `array`: Tax rules. Updating the tax rules will enable US taxes (not reversible). Defining no rules is equivalent to not charging tax at all.
    * items [AccountTaxTaxRule](#accounttaxtaxrule)

### AccountTaxTaxRule
* AccountTaxTaxRule `object`: Tax calculation rule to apply in a state or province (USA only).
  * country `string`: Country code in which tax is applicable.
  * locationId `string`: Required. State (or province) is which the tax is applicable, described by its location ID (also called criteria ID).
  * ratePercent `string`: Explicit tax rate in percent, represented as a floating point number without the percentage character. Must not be negative.
  * shippingTaxed `boolean`: If true, shipping charges are also taxed.
  * useGlobalRate `boolean`: Whether the tax rate is taken from a global tax table or specified explicitly.

### AccountUser
* AccountUser `object`
  * admin `boolean`: Whether user is an admin.
  * emailAddress `string`: User's email address.
  * orderManager `boolean`: Whether user is an order manager.
  * paymentsAnalyst `boolean`: Whether user can access payment statements.
  * paymentsManager `boolean`: Whether user can manage payment settings.

### AccountYouTubeChannelLink
* AccountYouTubeChannelLink `object`
  * channelId `string`: Channel ID.
  * status `string`: Status of the link between this Merchant Center account and the YouTube channel. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in YT Creator Studio or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending.

### AccountsAuthInfoResponse
* AccountsAuthInfoResponse `object`
  * accountIdentifiers `array`: The account identifiers corresponding to the authenticated user. - For an individual account: only the merchant ID is defined - For an aggregator: only the aggregator ID is defined - For a subaccount of an MCA: both the merchant ID and the aggregator ID are defined. 
    * items [AccountIdentifier](#accountidentifier)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountsAuthInfoResponse".

### AccountsClaimWebsiteResponse
* AccountsClaimWebsiteResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountsClaimWebsiteResponse".

### AccountsCustomBatchRequest
* AccountsCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [AccountsCustomBatchRequestEntry](#accountscustombatchrequestentry)

### AccountsCustomBatchRequestEntry
* AccountsCustomBatchRequestEntry `object`: A batch entry encoding a single non-batch accounts request.
  * account [Account](#account)
  * accountId `string`: The ID of the targeted account. Only defined if the method is not `insert`.
  * batchId `integer`: An entry ID, unique within the batch request.
  * force `boolean`: Whether the account should be deleted if the account has offers. Only applicable if the method is `delete`.
  * labelIds `array`: Label IDs for the 'updatelabels' request.
    * items `string`
  * linkRequest [AccountsCustomBatchRequestEntryLinkRequest](#accountscustombatchrequestentrylinkrequest)
  * merchantId `string`: The ID of the managing account.
  * method `string`: The method of the batch entry. Acceptable values are: - "`claimWebsite`" - "`delete`" - "`get`" - "`insert`" - "`link`" - "`update`" 
  * overwrite `boolean`: Only applicable if the method is `claimwebsite`. Indicates whether or not to take the claim from another account in case there is a conflict.

### AccountsCustomBatchRequestEntryLinkRequest
* AccountsCustomBatchRequestEntryLinkRequest `object`
  * action `string`: Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" 
  * linkType `string`: Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" 
  * linkedAccountId `string`: The ID of the linked account.

### AccountsCustomBatchResponse
* AccountsCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [AccountsCustomBatchResponseEntry](#accountscustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountsCustomBatchResponse".

### AccountsCustomBatchResponseEntry
* AccountsCustomBatchResponseEntry `object`: A batch entry encoding a single non-batch accounts response.
  * account [Account](#account)
  * batchId `integer`: The ID of the request entry this entry responds to.
  * errors [Errors](#errors)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponseEntry`"
  * linkStatus `string`: Deprecated. This field is never set. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" 

### AccountsLinkRequest
* AccountsLinkRequest `object`
  * action `string`: Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" 
  * linkType `string`: Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" 
  * linkedAccountId `string`: The ID of the linked account.

### AccountsLinkResponse
* AccountsLinkResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountsLinkResponse".

### AccountsListResponse
* AccountsListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountsListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of accounts.
  * resources `array`
    * items [Account](#account)

### AccountstatusesCustomBatchRequest
* AccountstatusesCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [AccountstatusesCustomBatchRequestEntry](#accountstatusescustombatchrequestentry)

### AccountstatusesCustomBatchRequestEntry
* AccountstatusesCustomBatchRequestEntry `object`: A batch entry encoding a single non-batch accountstatuses request.
  * accountId `string`: The ID of the (sub-)account whose status to get.
  * batchId `integer`: An entry ID, unique within the batch request.
  * destinations `array`: If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
    * items `string`
  * merchantId `string`: The ID of the managing account.
  * method `string`: The method of the batch entry. Acceptable values are: - "`get`" 

### AccountstatusesCustomBatchResponse
* AccountstatusesCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [AccountstatusesCustomBatchResponseEntry](#accountstatusescustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesCustomBatchResponse".

### AccountstatusesCustomBatchResponseEntry
* AccountstatusesCustomBatchResponseEntry `object`: A batch entry encoding a single non-batch accountstatuses response.
  * accountStatus [AccountStatus](#accountstatus)
  * batchId `integer`: The ID of the request entry this entry responds to.
  * errors [Errors](#errors)

### AccountstatusesListResponse
* AccountstatusesListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of account statuses.
  * resources `array`
    * items [AccountStatus](#accountstatus)

### AccounttaxCustomBatchRequest
* AccounttaxCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [AccounttaxCustomBatchRequestEntry](#accounttaxcustombatchrequestentry)

### AccounttaxCustomBatchRequestEntry
* AccounttaxCustomBatchRequestEntry `object`: A batch entry encoding a single non-batch accounttax request.
  * accountId `string`: The ID of the account for which to get/update account tax settings.
  * accountTax [AccountTax](#accounttax)
  * batchId `integer`: An entry ID, unique within the batch request.
  * merchantId `string`: The ID of the managing account.
  * method `string`: The method of the batch entry. Acceptable values are: - "`get`" - "`update`" 

### AccounttaxCustomBatchResponse
* AccounttaxCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [AccounttaxCustomBatchResponseEntry](#accounttaxcustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accounttaxCustomBatchResponse".

### AccounttaxCustomBatchResponseEntry
* AccounttaxCustomBatchResponseEntry `object`: A batch entry encoding a single non-batch accounttax response.
  * accountTax [AccountTax](#accounttax)
  * batchId `integer`: The ID of the request entry this entry responds to.
  * errors [Errors](#errors)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxCustomBatchResponseEntry`"

### AccounttaxListResponse
* AccounttaxListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accounttaxListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of account tax settings.
  * resources `array`
    * items [AccountTax](#accounttax)

### Amount
* Amount `object`
  * pretax [Price](#price)
  * tax [Price](#price)

### BusinessDayConfig
* BusinessDayConfig `object`
  * businessDays `array`: Regular business days. May not be empty.
    * items `string`

### CarrierRate
* CarrierRate `object`
  * carrierName `string`: Carrier service, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved via the `getSupportedCarriers` method. Required.
  * carrierService `string`: Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved via the `getSupportedCarriers` method. Required.
  * flatAdjustment [Price](#price)
  * name `string`: Name of the carrier rate. Must be unique per rate group. Required.
  * originPostalCode `string`: Shipping origin for this carrier rate. Required.
  * percentageAdjustment `string`: Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example `"5.4"` increases the rate by 5.4%, `"-3"` decreases the rate by 3%. Optional.

### CarriersCarrier
* CarriersCarrier `object`
  * country `string`: The CLDR country code of the carrier (e.g., "US"). Always present.
  * name `string`: The name of the carrier (e.g., `"UPS"`). Always present.
  * services `array`: A list of supported services (e.g., `"ground"`) for that carrier. Contains at least one service.
    * items `string`

### CustomAttribute
* CustomAttribute `object`
  * name `string`: The name of the attribute. Underscores will be replaced by spaces upon insertion.
  * type `string`: The type of the attribute. Acceptable values are: - "`boolean`" - "`datetimerange`" - "`float`" - "`group`" - "`int`" - "`price`" - "`text`" - "`time`" - "`url`" 
  * unit `string`: Free-form unit of the attribute. Unit can only be used for values of type int, float, or price.
  * value `string`: The value of the attribute.

### CustomGroup
* CustomGroup `object`
  * attributes `array`: The sub-attributes.
    * items [CustomAttribute](#customattribute)
  * name `string`: The name of the group. Underscores will be replaced by spaces upon insertion.

### CustomerReturnReason
* CustomerReturnReason `object`
  * description `string`: Description of the reason.
  * reasonCode `string`: Code of the return reason. Acceptable values are: - "`betterPriceFound`" - "`changedMind`" - "`damagedOrDefectiveItem`" - "`didNotMatchDescription`" - "`doesNotFit`" - "`expiredItem`" - "`incorrectItemReceived`" - "`noLongerNeeded`" - "`notSpecified`" - "`orderedWrongItem`" - "`other`" - "`qualityNotExpected`" - "`receivedTooLate`" - "`undeliverable`" 

### CutoffTime
* CutoffTime `object`
  * hour `integer`: Hour of the cutoff time until which an order has to be placed to be processed in the same day. Required.
  * minute `integer`: Minute of the cutoff time until which an order has to be placed to be processed in the same day. Required.
  * timezone `string`: Timezone identifier for the cutoff time. A list of identifiers can be found in the AdWords API documentation. E.g. "Europe/Zurich". Required.

### Datafeed
* Datafeed `object`: Datafeed configuration data.
  * attributeLanguage `string`: The two-letter ISO 639-1 language in which the attributes are defined in the data feed.
  * contentLanguage `string`: [DEPRECATED] Please use targets[].language instead. The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targetCountry`.
  * contentType `string`: Required. The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are supported. Acceptable values are: - "`local products`" - "`product inventory`" - "`products`" 
  * fetchSchedule [DatafeedFetchSchedule](#datafeedfetchschedule)
  * fileName `string`: Required. The filename of the feed. All feeds must have a unique file name.
  * format [DatafeedFormat](#datafeedformat)
  * id `string`: Required for update. The ID of the data feed.
  * intendedDestinations `array`: [DEPRECATED] Please use targets[].includedDestinations instead. The list of intended destinations (corresponds to checked check boxes in Merchant Center).
    * items `string`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#datafeed`"
  * name `string`: Required for insert. A descriptive name of the data feed.
  * targetCountry `string`: [DEPRECATED] Please use targets[].country instead. The country where the items in the feed will be included in the search index, represented as a CLDR territory code.
  * targets `array`: The targets this feed should apply to (country, language, destinations).
    * items [DatafeedTarget](#datafeedtarget)

### DatafeedFetchSchedule
* DatafeedFetchSchedule `object`: The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required.
  * dayOfMonth `integer`: The day of the month the feed file should be fetched (1-31).
  * fetchUrl `string`: The URL where the feed file can be fetched. Google Merchant Center will support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP protocols, so the value will need to be a valid link using one of those four protocols.
  * hour `integer`: The hour of the day the feed file should be fetched (0-23).
  * minuteOfHour `integer`: The minute of the hour the feed file should be fetched (0-59). Read-only.
  * password `string`: An optional password for fetch_url.
  * paused `boolean`: Whether the scheduled fetch is paused or not.
  * timeZone `string`: Time zone used for schedule. UTC by default. E.g., "America/Los_Angeles".
  * username `string`: An optional user name for fetch_url.
  * weekday `string`: The day of the week the feed file should be fetched. Acceptable values are: - "`monday`" - "`tuesday`" - "`wednesday`" - "`thursday`" - "`friday`" - "`saturday`" - "`sunday`" 

### DatafeedFormat
* DatafeedFormat `object`
  * columnDelimiter `string`: Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`pipe`" - "`tab`" - "`tilde`" 
  * fileEncoding `string`: Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected. Acceptable values are: - "`latin-1`" - "`utf-16be`" - "`utf-16le`" - "`utf-8`" - "`windows-1252`" 
  * quotingMode `string`: Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`normal character`" - "`value quoting`" 

### DatafeedStatus
* DatafeedStatus `object`: The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished.
  * country `string`: The country for which the status is reported, represented as a CLDR territory code.
  * datafeedId `string`: The ID of the feed for which the status is reported.
  * errors `array`: The list of errors occurring in the feed.
    * items [DatafeedStatusError](#datafeedstatuserror)
  * itemsTotal `string`: The number of items in the feed that were processed.
  * itemsValid `string`: The number of items in the feed that were valid.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#datafeedStatus`"
  * language `string`: The two-letter ISO 639-1 language for which the status is reported.
  * lastUploadDate `string`: The last date at which the feed was uploaded.
  * processingStatus `string`: The processing status of the feed. Acceptable values are: - "`"`failure`": The feed could not be processed or all items had errors.`" - "`in progress`": The feed is being processed. - "`none`": The feed has not yet been processed. For example, a feed that has never been uploaded will have this processing status. - "`success`": The feed was processed successfully, though some items might have had errors. 
  * warnings `array`: The list of errors occurring in the feed.
    * items [DatafeedStatusError](#datafeedstatuserror)

### DatafeedStatusError
* DatafeedStatusError `object`: An error occurring in the feed, like "invalid price".
  * code `string`: The code of the error, e.g., "validation/invalid_value".
  * count `string`: The number of occurrences of the error in the feed.
  * examples `array`: A list of example occurrences of the error, grouped by product.
    * items [DatafeedStatusExample](#datafeedstatusexample)
  * message `string`: The error message, e.g., "Invalid price".

### DatafeedStatusExample
* DatafeedStatusExample `object`: An example occurrence for a particular error.
  * itemId `string`: The ID of the example item.
  * lineNumber `string`: Line number in the data feed where the example is found.
  * value `string`: The problematic value.

### DatafeedTarget
* DatafeedTarget `object`
  * country `string`: The country where the items in the feed will be included in the search index, represented as a CLDR territory code.
  * excludedDestinations `array`: The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center).
    * items `string`
  * includedDestinations `array`: The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`. List of supported destinations (if available to the account): - DisplayAds - Shopping - ShoppingActions - SurfacesAcrossGoogle 
    * items `string`
  * language `string`: The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targets[].country`.

### DatafeedsCustomBatchRequest
* DatafeedsCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [DatafeedsCustomBatchRequestEntry](#datafeedscustombatchrequestentry)

### DatafeedsCustomBatchRequestEntry
* DatafeedsCustomBatchRequestEntry `object`: A batch entry encoding a single non-batch datafeeds request.
  * batchId `integer`: An entry ID, unique within the batch request.
  * datafeed [Datafeed](#datafeed)
  * datafeedId `string`: The ID of the data feed to get, delete or fetch.
  * merchantId `string`: The ID of the managing account.
  * method `string`: The method of the batch entry. Acceptable values are: - "`delete`" - "`fetchNow`" - "`get`" - "`insert`" - "`update`" 

### DatafeedsCustomBatchResponse
* DatafeedsCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [DatafeedsCustomBatchResponseEntry](#datafeedscustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#datafeedsCustomBatchResponse".

### DatafeedsCustomBatchResponseEntry
* DatafeedsCustomBatchResponseEntry `object`: A batch entry encoding a single non-batch datafeeds response.
  * batchId `integer`: The ID of the request entry this entry responds to.
  * datafeed [Datafeed](#datafeed)
  * errors [Errors](#errors)

### DatafeedsFetchNowResponse
* DatafeedsFetchNowResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#datafeedsFetchNowResponse".

### DatafeedsListResponse
* DatafeedsListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#datafeedsListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of datafeeds.
  * resources `array`
    * items [Datafeed](#datafeed)

### DatafeedstatusesCustomBatchRequest
* DatafeedstatusesCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [DatafeedstatusesCustomBatchRequestEntry](#datafeedstatusescustombatchrequestentry)

### DatafeedstatusesCustomBatchRequestEntry
* DatafeedstatusesCustomBatchRequestEntry `object`: A batch entry encoding a single non-batch datafeedstatuses request.
  * batchId `integer`: An entry ID, unique within the batch request.
  * country `string`: The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that for multi-target datafeeds this parameter is required.
  * datafeedId `string`: The ID of the data feed to get.
  * language `string`: The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that for multi-target datafeeds this parameter is required.
  * merchantId `string`: The ID of the managing account.
  * method `string`: The method of the batch entry. Acceptable values are: - "`get`" 

### DatafeedstatusesCustomBatchResponse
* DatafeedstatusesCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [DatafeedstatusesCustomBatchResponseEntry](#datafeedstatusescustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesCustomBatchResponse".

### DatafeedstatusesCustomBatchResponseEntry
* DatafeedstatusesCustomBatchResponseEntry `object`: A batch entry encoding a single non-batch datafeedstatuses response.
  * batchId `integer`: The ID of the request entry this entry responds to.
  * datafeedStatus [DatafeedStatus](#datafeedstatus)
  * errors [Errors](#errors)

### DatafeedstatusesListResponse
* DatafeedstatusesListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of datafeed statuses.
  * resources `array`
    * items [DatafeedStatus](#datafeedstatus)

### DeliveryTime
* DeliveryTime `object`
  * cutoffTime [CutoffTime](#cutofftime)
  * handlingBusinessDayConfig [BusinessDayConfig](#businessdayconfig)
  * holidayCutoffs `array`: Holiday cutoff definitions. If configured, they specify order cutoff times for holiday-specific shipping.
    * items [HolidayCutoff](#holidaycutoff)
  * maxHandlingTimeInDays `integer`: Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. Must be greater than or equal to `minHandlingTimeInDays`.
  * maxTransitTimeInDays `integer`: Maximum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to `minTransitTimeInDays`.
  * minHandlingTimeInDays `integer`: Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped.
  * minTransitTimeInDays `integer`: Minimum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Either `{min,max}TransitTimeInDays` or `transitTimeTable` must be set, but not both.
  * transitBusinessDayConfig [BusinessDayConfig](#businessdayconfig)
  * transitTimeTable [TransitTable](#transittable)

### Error
* Error `object`: An error returned by the API.
  * domain `string`: The domain of the error.
  * message `string`: A description of the error.
  * reason `string`: The error code.

### Errors
* Errors `object`: A list of errors returned by a failed batch entry.
  * code `integer`: The HTTP status of the first error in `errors`.
  * errors `array`: A list of errors.
    * items [Error](#error)
  * message `string`: The message of the first error in `errors`.

### GmbAccounts
* GmbAccounts `object`
  * accountId `string`: The ID of the Merchant Center account.
  * gmbAccounts `array`: A list of GMB accounts which are available to the merchant.
    * items [GmbAccountsGmbAccount](#gmbaccountsgmbaccount)

### GmbAccountsGmbAccount
* GmbAccountsGmbAccount `object`
  * email `string`: The email which identifies the GMB account.
  * listingCount `string`: Number of listings under this account.
  * name `string`: The name of the GMB account.
  * type `string`: The type of the GMB account (User or Business).

### Headers
* Headers `object`: A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set.
  * locations `array`: A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set.
    * items [LocationIdSet](#locationidset)
  * numberOfItems `array`: A list of inclusive number of items upper bounds. The last value can be `"infinity"`. For example `["10", "50", "infinity"]` represents the headers "<= 10 items", "<= 50 items", and "> 50 items". Must be non-empty. Can only be set if all other fields are not set.
    * items `string`
  * postalCodeGroupNames `array`: A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service. Must be non-empty. Can only be set if all other fields are not set.
    * items `string`
  * prices `array`: A list of inclusive order price upper bounds. The last price's value can be `"infinity"`. For example `[{"value": "10", "currency": "USD"}, {"value": "500", "currency": "USD"}, {"value": "infinity", "currency": "USD"}]` represents the headers "<= $10", "<= $500", and "> $500". All prices within a service must have the same currency. Must be non-empty. Can only be set if all other fields are not set.
    * items [Price](#price)
  * weights `array`: A list of inclusive order weight upper bounds. The last weight's value can be `"infinity"`. For example `[{"value": "10", "unit": "kg"}, {"value": "50", "unit": "kg"}, {"value": "infinity", "unit": "kg"}]` represents the headers "<= 10kg", "<= 50kg", and "> 50kg". All weights within a service must have the same unit. Must be non-empty. Can only be set if all other fields are not set.
    * items [Weight](#weight)

### HolidayCutoff
* HolidayCutoff `object`
  * deadlineDate `string`: Date of the order deadline, in ISO 8601 format. E.g. "2016-11-29" for 29th November 2016. Required.
  * deadlineHour `integer`: Hour of the day on the deadline date until which the order has to be placed to qualify for the delivery guarantee. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Required.
  * deadlineTimezone `string`: Timezone identifier for the deadline hour. A list of identifiers can be found in the AdWords API documentation. E.g. "Europe/Zurich". Required.
  * holidayId `string`: Unique identifier for the holiday. Required.
  * visibleFromDate `string`: Date on which the deadline will become visible to consumers in ISO 8601 format. E.g. "2016-10-31" for 31st October 2016. Required.

### HolidaysHoliday
* HolidaysHoliday `object`
  * countryCode `string`: The CLDR territory code of the country in which the holiday is available. E.g. "US", "DE", "GB". A holiday cutoff can only be configured in a shipping settings service with matching delivery country. Always present.
  * date `string`: Date of the holiday, in ISO 8601 format. E.g. "2016-12-25" for Christmas 2016. Always present.
  * deliveryGuaranteeDate `string`: Date on which the order has to arrive at the customer's, in ISO 8601 format. E.g. "2016-12-24" for 24th December 2016. Always present.
  * deliveryGuaranteeHour `string`: Hour of the day in the delivery location's timezone on the guaranteed delivery date by which the order has to arrive at the customer's. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Always present.
  * id `string`: Unique identifier for the holiday to be used when configuring holiday cutoffs. Always present.
  * type `string`: The holiday type. Always present. Acceptable values are: - "`Christmas`" - "`Easter`" - "`Father's Day`" - "`Halloween`" - "`Independence Day (USA)`" - "`Mother's Day`" - "`Thanksgiving`" - "`Valentine's Day`" 

### Installment
* Installment `object`
  * amount [Price](#price)
  * months `string`: The number of installments the buyer has to pay.

### Inventory
* Inventory `object`
  * availability `string`: The availability of the product. Acceptable values are: - "`in stock`" - "`out of stock`" - "`preorder`" 
  * customLabel0 `string`: Custom label 0 for custom grouping of items in a Shopping campaign. Only supported for online products.
  * customLabel1 `string`: Custom label 1 for custom grouping of items in a Shopping campaign. Only supported for online products.
  * customLabel2 `string`: Custom label 2 for custom grouping of items in a Shopping campaign. Only supported for online products.
  * customLabel3 `string`: Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products.
  * customLabel4 `string`: Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products.
  * installment [Installment](#installment)
  * instoreProductLocation `string`: The instore product location. Supported only for local products.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#inventory`"
  * loyaltyPoints [LoyaltyPoints](#loyaltypoints)
  * pickup [InventoryPickup](#inventorypickup)
  * price [Price](#price)
  * quantity `integer`: The quantity of the product. Must be equal to or greater than zero. Supported only for local products.
  * salePrice [Price](#price)
  * salePriceEffectiveDate `string`: A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided.
  * sellOnGoogleQuantity `integer`: The quantity of the product that is available for selling on Google. Supported only for online products.

### InventoryCustomBatchRequest
* InventoryCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [InventoryCustomBatchRequestEntry](#inventorycustombatchrequestentry)

### InventoryCustomBatchRequestEntry
* InventoryCustomBatchRequestEntry `object`: A batch entry encoding a single non-batch inventory request.
  * batchId `integer`: An entry ID, unique within the batch request.
  * inventory [Inventory](#inventory)
  * merchantId `string`: The ID of the managing account.
  * productId `string`: The ID of the product for which to update price and availability.
  * storeCode `string`: The code of the store for which to update price and availability. Use `online` to update price and availability of an online product.

### InventoryCustomBatchResponse
* InventoryCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [InventoryCustomBatchResponseEntry](#inventorycustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#inventoryCustomBatchResponse".

### InventoryCustomBatchResponseEntry
* InventoryCustomBatchResponseEntry `object`: A batch entry encoding a single non-batch inventory response.
  * batchId `integer`: The ID of the request entry this entry responds to.
  * errors [Errors](#errors)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#inventoryCustomBatchResponseEntry`"

### InventoryPickup
* InventoryPickup `object`
  * pickupMethod `string`: Whether store pickup is available for this offer and whether the pickup option should be shown as buy, reserve, or not supported. Only supported for local inventory. Unless the value is "not supported", must be submitted together with `pickupSla`. Acceptable values are: - "`buy`" - "`not supported`" - "`reserve`" - "`ship to store`" 
  * pickupSla `string`: The expected date that an order will be ready for pickup, relative to when the order is placed. Only supported for local inventory. Must be submitted together with `pickupMethod`. Acceptable values are: - "`five day`" - "`four day`" - "`multi day`" - "`multi week`" - "`next day`" - "`same day`" - "`seven day`" - "`six day`" - "`three day`" - "`two day`" 

### InventorySetRequest
* InventorySetRequest `object`
  * availability `string`: The availability of the product. Acceptable values are: - "`in stock`" - "`out of stock`" - "`preorder`" 
  * customLabel0 `string`: Custom label 0 for custom grouping of items in a Shopping campaign. Only supported for online products.
  * customLabel1 `string`: Custom label 1 for custom grouping of items in a Shopping campaign. Only supported for online products.
  * customLabel2 `string`: Custom label 2 for custom grouping of items in a Shopping campaign. Only supported for online products.
  * customLabel3 `string`: Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products.
  * customLabel4 `string`: Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products.
  * installment [Installment](#installment)
  * instoreProductLocation `string`: The instore product location. Supported only for local products.
  * loyaltyPoints [LoyaltyPoints](#loyaltypoints)
  * pickup [InventoryPickup](#inventorypickup)
  * price [Price](#price)
  * quantity `integer`: The quantity of the product. Must be equal to or greater than zero. Supported only for local products.
  * salePrice [Price](#price)
  * salePriceEffectiveDate `string`: A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided.
  * sellOnGoogleQuantity `integer`: The quantity of the product that is available for selling on Google. Supported only for online products.

### InventorySetResponse
* InventorySetResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#inventorySetResponse".

### InvoiceSummary
* InvoiceSummary `object`
  * additionalChargeSummaries `array`: Summary of the total amounts of the additional charges.
    * items [InvoiceSummaryAdditionalChargeSummary](#invoicesummaryadditionalchargesummary)
  * customerBalance [Amount](#amount)
  * googleBalance [Amount](#amount)
  * merchantBalance [Amount](#amount)
  * productTotal [Amount](#amount)
  * promotionSummaries `array`: Deprecated.
    * items [Promotion](#promotion)

### InvoiceSummaryAdditionalChargeSummary
* InvoiceSummaryAdditionalChargeSummary `object`
  * totalAmount [Amount](#amount)
  * type `string`: [required] Type of the additional charge. Acceptable values are: - "`shipping`" 

### LiaAboutPageSettings
* LiaAboutPageSettings `object`
  * status `string`: The status of the verification process for the About page. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" 
  * url `string`: The URL for the About page.

### LiaCountrySettings
* LiaCountrySettings `object`
  * about [LiaAboutPageSettings](#liaaboutpagesettings)
  * country `string`: Required. CLDR country code (e.g. "US").
  * hostedLocalStorefrontActive `boolean`: The status of the "Merchant hosted local storefront" feature.
  * inventory [LiaInventorySettings](#liainventorysettings)
  * onDisplayToOrder [LiaOnDisplayToOrderSettings](#liaondisplaytoordersettings)
  * posDataProvider [LiaPosDataProvider](#liaposdataprovider)
  * storePickupActive `boolean`: The status of the "Store pickup" feature.

### LiaInventorySettings
* LiaInventorySettings `object`
  * inventoryVerificationContactEmail `string`: The email of the contact for the inventory verification process.
  * inventoryVerificationContactName `string`: The name of the contact for the inventory verification process.
  * inventoryVerificationContactStatus `string`: The status of the verification contact. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" 
  * status `string`: The status of the inventory verification process. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" 

### LiaOnDisplayToOrderSettings
* LiaOnDisplayToOrderSettings `object`
  * shippingCostPolicyUrl `string`: Shipping cost and policy URL.
  * status `string`: The status of the ?On display to order? feature. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" 

### LiaPosDataProvider
* LiaPosDataProvider `object`
  * posDataProviderId `string`: The ID of the POS data provider.
  * posExternalAccountId `string`: The account ID by which this merchant is known to the POS data provider.

### LiaSettings
* LiaSettings `object`: Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
  * accountId `string`: The ID of the account to which these LIA settings belong. Ignored upon update, always present in get request responses.
  * countrySettings `array`: The LIA settings for each country.
    * items [LiaCountrySettings](#liacountrysettings)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#liaSettings`"

### LiasettingsCustomBatchRequest
* LiasettingsCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [LiasettingsCustomBatchRequestEntry](#liasettingscustombatchrequestentry)

### LiasettingsCustomBatchRequestEntry
* LiasettingsCustomBatchRequestEntry `object`
  * accountId `string`: The ID of the account for which to get/update account LIA settings.
  * batchId `integer`: An entry ID, unique within the batch request.
  * contactEmail `string`: Inventory validation contact email. Required only for SetInventoryValidationContact.
  * contactName `string`: Inventory validation contact name. Required only for SetInventoryValidationContact.
  * country `string`: The country code. Required only for RequestInventoryVerification.
  * gmbEmail `string`: The GMB account. Required only for RequestGmbAccess.
  * liaSettings [LiaSettings](#liasettings)
  * merchantId `string`: The ID of the managing account.
  * method `string`: The method of the batch entry. Acceptable values are: - "`get`" - "`getAccessibleGmbAccounts`" - "`requestGmbAccess`" - "`requestInventoryVerification`" - "`setInventoryVerificationContact`" - "`update`" 
  * posDataProviderId `string`: The ID of POS data provider. Required only for SetPosProvider.
  * posExternalAccountId `string`: The account ID by which this merchant is known to the POS provider.

### LiasettingsCustomBatchResponse
* LiasettingsCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [LiasettingsCustomBatchResponseEntry](#liasettingscustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#liasettingsCustomBatchResponse".

### LiasettingsCustomBatchResponseEntry
* LiasettingsCustomBatchResponseEntry `object`
  * batchId `integer`: The ID of the request entry to which this entry responds.
  * errors [Errors](#errors)
  * gmbAccounts [GmbAccounts](#gmbaccounts)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponseEntry`"
  * liaSettings [LiaSettings](#liasettings)
  * posDataProviders `array`: The list of POS data providers.
    * items [PosDataProviders](#posdataproviders)

### LiasettingsGetAccessibleGmbAccountsResponse
* LiasettingsGetAccessibleGmbAccountsResponse `object`
  * accountId `string`: The ID of the Merchant Center account.
  * gmbAccounts `array`: A list of GMB accounts which are available to the merchant.
    * items [GmbAccountsGmbAccount](#gmbaccountsgmbaccount)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#liasettingsGetAccessibleGmbAccountsResponse".

### LiasettingsListPosDataProvidersResponse
* LiasettingsListPosDataProvidersResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#liasettingsListPosDataProvidersResponse".
  * posDataProviders `array`: The list of POS data providers for each eligible country
    * items [PosDataProviders](#posdataproviders)

### LiasettingsListResponse
* LiasettingsListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#liasettingsListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of LIA settings.
  * resources `array`
    * items [LiaSettings](#liasettings)

### LiasettingsRequestGmbAccessResponse
* LiasettingsRequestGmbAccessResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#liasettingsRequestGmbAccessResponse".

### LiasettingsRequestInventoryVerificationResponse
* LiasettingsRequestInventoryVerificationResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#liasettingsRequestInventoryVerificationResponse".

### LiasettingsSetInventoryVerificationContactResponse
* LiasettingsSetInventoryVerificationContactResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#liasettingsSetInventoryVerificationContactResponse".

### LiasettingsSetPosDataProviderResponse
* LiasettingsSetPosDataProviderResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#liasettingsSetPosDataProviderResponse".

### LocationIdSet
* LocationIdSet `object`
  * locationIds `array`: A non-empty list of location IDs. They must all be of the same location type (e.g., state).
    * items `string`

### LoyaltyPoints
* LoyaltyPoints `object`
  * name `string`: Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters.
  * pointsValue `string`: The retailer's loyalty points in absolute value.
  * ratio `number`: The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0.

### MerchantOrderReturn
* MerchantOrderReturn `object`: Order return. Production access (all methods) requires the order manager role. Sandbox access does not.
  * creationDate `string`: The date of creation of the return, in ISO 8601 format.
  * merchantOrderId `string`: Merchant defined order ID.
  * orderId `string`: Google order ID.
  * orderReturnId `string`: Order return ID generated by Google.
  * returnItems `array`: Items of the return.
    * items [MerchantOrderReturnItem](#merchantorderreturnitem)
  * returnShipments `array`: Shipments of the return.
    * items [ReturnShipment](#returnshipment)

### MerchantOrderReturnItem
* MerchantOrderReturnItem `object`
  * customerReturnReason [CustomerReturnReason](#customerreturnreason)
  * itemId `string`: Product level item ID. If the returned items are of the same product, they will have the same ID.
  * merchantReturnReason [RefundReason](#refundreason)
  * product [OrderLineItemProduct](#orderlineitemproduct)
  * returnShipmentIds `array`: IDs of the return shipments that this return item belongs to.
    * items `string`
  * state `string`: State of the item. Acceptable values are: - "`canceled`" - "`new`" - "`received`" - "`refunded`" - "`rejected`" 

### MinimumOrderValueTable
* MinimumOrderValueTable `object`
  * storeCodeSetWithMovs `array`
    * items [MinimumOrderValueTableStoreCodeSetWithMov](#minimumordervaluetablestorecodesetwithmov)

### MinimumOrderValueTableStoreCodeSetWithMov
* MinimumOrderValueTableStoreCodeSetWithMov `object`: A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency.
  * storeCodes `array`: A list of unique store codes or empty for the catch all.
    * items `string`
  * value [Price](#price)

### Order
* Order `object`: Order. Production access (all methods) requires the order manager role. Sandbox access does not.
  * acknowledged `boolean`: Whether the order was acknowledged.
  * channelType `string`: Deprecated. Acceptable values are: - "`googleExpress`" - "`purchasesOnGoogle`" 
  * customer [OrderCustomer](#ordercustomer)
  * deliveryDetails [OrderDeliveryDetails](#orderdeliverydetails)
  * id `string`: The REST ID of the order. Globally unique.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#order`"
  * lineItems `array`: Line items that are ordered.
    * items [OrderLineItem](#orderlineitem)
  * merchantId `string`
  * merchantOrderId `string`: Merchant-provided ID of the order.
  * netAmount [Price](#price)
  * paymentMethod [OrderPaymentMethod](#orderpaymentmethod)
  * paymentStatus `string`: The status of the payment. Acceptable values are: - "`paymentCaptured`" - "`paymentRejected`" - "`paymentSecured`" - "`pendingAuthorization`" 
  * pickupDetails [OrderPickupDetails](#orderpickupdetails)
  * placedDate `string`: The date when the order was placed, in ISO 8601 format.
  * promotions `array`: The details of the merchant provided promotions applied to the order. To determine which promotions apply to which products, check the `Promotions[].Benefits[].OfferIds` field against the `LineItems[].Product.OfferId` field for each promotion. If a promotion is applied to more than 1 `offerId`, divide the discount value by the number of affected offers to determine how much discount to apply to each `offerId`. Examples: 1. To calculate the line item level discount for a single specific item: For each promotion, subtract the `Promotions[].Benefits[].Discount.value` amount from the `LineItems[].Price.value`. 2. To calculate the line item level discount for multiple quantity of a specific item: For each promotion, divide the `Promotions[].Benefits[].Discount.value` by the quantity of products and substract it from `LineItems[].Product.Price.value` for each quantity item. Only 1 promotion can be applied to an offerId in a given order. To refund an item which had a promotion applied to it, make sure to refund the amount after first subtracting the promotion discount from the item price. More details about the program are here.
    * items [OrderLegacyPromotion](#orderlegacypromotion)
  * refunds `array`: Refunds for the order.
    * items [OrderRefund](#orderrefund)
  * shipments `array`: Shipments of the order.
    * items [OrderShipment](#ordershipment)
  * shippingCost [Price](#price)
  * shippingCostTax [Price](#price)
  * shippingOption `string`: Deprecated. Shipping details are provided with line items instead. Acceptable values are: - "`economy`" - "`expedited`" - "`oneDay`" - "`sameDay`" - "`standard`" - "`twoDay`" 
  * status `string`: The status of the order. Acceptable values are: - "`canceled`" - "`delivered`" - "`inProgress`" - "`partiallyDelivered`" - "`partiallyReturned`" - "`partiallyShipped`" - "`pendingShipment`" - "`returned`" - "`shipped`" 
  * taxCollector `string`: The party responsible for collecting and remitting taxes. Acceptable values are: - "`marketplaceFacilitator`" - "`merchant`" 

### OrderAddress
* OrderAddress `object`
  * country `string`: CLDR country code (e.g. "US").
  * fullAddress `array`: Strings representing the lines of the printed label for mailing the order, for example: John Smith 1600 Amphitheatre Parkway Mountain View, CA, 94043 United States 
    * items `string`
  * isPostOfficeBox `boolean`: Whether the address is a post office box.
  * locality `string`: City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
  * postalCode `string`: Postal Code or ZIP (e.g. "94043").
  * recipientName `string`: Name of the recipient.
  * region `string`: Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
  * streetAddress `array`: Street-level part of the address.
    * items `string`

### OrderCancellation
* OrderCancellation `object`
  * actor `string`: The actor that created the cancellation. Acceptable values are: - "`customer`" - "`googleBot`" - "`googleCustomerService`" - "`googlePayments`" - "`googleSabre`" - "`merchant`" 
  * creationDate `string`: Date on which the cancellation has been created, in ISO 8601 format.
  * quantity `integer`: The quantity that was canceled.
  * reason `string`: The reason for the cancellation. Orders that are canceled with a noInventory reason will lead to the removal of the product from Buy on Google until you make an update to that product. This will not affect your Shopping ads. Acceptable values are: - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`customerCanceled`" - "`customerInitiatedCancel`" - "`customerSupportRequested`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceError`" - "`returnRefundAbuse`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" 
  * reasonText `string`: The explanation of the reason.

### OrderCustomer
* OrderCustomer `object`
  * email `string`: Deprecated.
  * explicitMarketingPreference `boolean`: Deprecated. Please use marketingRightsInfo instead.
  * fullName `string`: Full name of the customer.
  * invoiceReceivingEmail `string`: Email address for the merchant to send value-added tax or invoice documentation of the order. Only the last document sent is made available to the customer. For more information, see About automated VAT invoicing for Buy on Google.
  * marketingRightsInfo [OrderCustomerMarketingRightsInfo](#ordercustomermarketingrightsinfo)

### OrderCustomerMarketingRightsInfo
* OrderCustomerMarketingRightsInfo `object`
  * explicitMarketingPreference `string`: Last known customer selection regarding marketing preferences. In certain cases this selection might not be known, so this field would be empty. If a customer selected `granted` in their most recent order, they can be subscribed to marketing emails. Customers who have chosen `denied` must not be subscribed, or must be unsubscribed if already opted-in. Acceptable values are: - "`denied`" - "`granted`" 
  * lastUpdatedTimestamp `string`: Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet.
  * marketingEmailAddress `string`: Email address that can be used for marketing purposes. The field may be empty even if `explicitMarketingPreference` is 'granted'. This happens when retrieving an old order from the customer who deleted their account.

### OrderDeliveryDetails
* OrderDeliveryDetails `object`
  * address [OrderAddress](#orderaddress)
  * phoneNumber `string`: The phone number of the person receiving the delivery.

### OrderLegacyPromotion
* OrderLegacyPromotion `object`
  * benefits `array`
    * items [OrderLegacyPromotionBenefit](#orderlegacypromotionbenefit)
  * effectiveDates `string`: The date and time frame when the promotion is active and ready for validation review. Note that the promotion live time may be delayed for a few hours due to the validation review. Start date and end date are separated by a forward slash (/). The start date is specified by the format (YYYY-MM-DD), followed by the letter ?T?, the time of the day when the sale starts (in Greenwich Mean Time, GMT), followed by an expression of the time zone for the sale. The end date is in the same format.
  * genericRedemptionCode `string`: Optional. The text code that corresponds to the promotion when applied on the retailer?s website.
  * id `string`: The unique ID of the promotion.
  * longTitle `string`: The full title of the promotion.
  * productApplicability `string`: Whether the promotion is applicable to all products or only specific products. Acceptable values are: - "`allProducts`" - "`specificProducts`" 
  * redemptionChannel `string`: Indicates that the promotion is valid online. Acceptable values are: - "`online`" 

### OrderLegacyPromotionBenefit
* OrderLegacyPromotionBenefit `object`
  * discount [Price](#price)
  * offerIds `array`: The OfferId(s) that were purchased in this order and map to this specific benefit of the promotion.
    * items `string`
  * subType `string`: Further describes the benefit of the promotion. Note that we will expand on this enumeration as we support new promotion sub-types. Acceptable values are: - "`buyMGetMoneyOff`" - "`buyMGetNMoneyOff`" - "`buyMGetNPercentOff`" - "`buyMGetPercentOff`" - "`freeGift`" - "`freeGiftWithItemId`" - "`freeGiftWithValue`" - "`freeOvernightShipping`" - "`freeShipping`" - "`freeTwoDayShipping`" - "`moneyOff`" - "`percentageOff`" - "`rewardPoints`" - "`salePrice`" 
  * taxImpact [Price](#price)
  * type `string`: Describes whether the promotion applies to products (e.g. 20% off) or to shipping (e.g. Free Shipping). Acceptable values are: - "`product`" - "`shipping`" 

### OrderLineItem
* OrderLineItem `object`
  * annotations `array`: Annotations that are attached to the line item.
    * items [OrderMerchantProvidedAnnotation](#ordermerchantprovidedannotation)
  * cancellations `array`: Cancellations of the line item.
    * items [OrderCancellation](#ordercancellation)
  * id `string`: The ID of the line item.
  * price [Price](#price)
  * product [OrderLineItemProduct](#orderlineitemproduct)
  * quantityCanceled `integer`: Number of items canceled.
  * quantityDelivered `integer`: Number of items delivered.
  * quantityOrdered `integer`: Number of items ordered.
  * quantityPending `integer`: Number of items pending.
  * quantityReadyForPickup `integer`: Number of items ready for pickup.
  * quantityReturned `integer`: Number of items returned.
  * quantityShipped `integer`: Number of items shipped.
  * returnInfo [OrderLineItemReturnInfo](#orderlineitemreturninfo)
  * returns `array`: Returns of the line item.
    * items [OrderReturn](#orderreturn)
  * shippingDetails [OrderLineItemShippingDetails](#orderlineitemshippingdetails)
  * tax [Price](#price)

### OrderLineItemProduct
* OrderLineItemProduct `object`
  * brand `string`: Brand of the item.
  * channel `string`: The item's channel (online or local). Acceptable values are: - "`local`" - "`online`" 
  * condition `string`: Condition or state of the item. Acceptable values are: - "`new`" - "`refurbished`" - "`used`" 
  * contentLanguage `string`: The two-letter ISO 639-1 language code for the item.
  * fees `array`: Associated fees at order creation time.
    * items [OrderLineItemProductFee](#orderlineitemproductfee)
  * gtin `string`: Global Trade Item Number (GTIN) of the item.
  * id `string`: The REST ID of the product.
  * imageLink `string`: URL of an image of the item.
  * itemGroupId `string`: Shared identifier for all variants of the same product.
  * mpn `string`: Manufacturer Part Number (MPN) of the item.
  * offerId `string`: An identifier of the item.
  * price [Price](#price)
  * shownImage `string`: URL to the cached image shown to the user when order was placed.
  * targetCountry `string`: The CLDR territory // code of the target country of the product.
  * title `string`: The title of the product.
  * variantAttributes `array`: Variant attributes for the item. These are dimensions of the product, such as color, gender, material, pattern, and size. You can find a comprehensive list of variant attributes here.
    * items [OrderLineItemProductVariantAttribute](#orderlineitemproductvariantattribute)

### OrderLineItemProductFee
* OrderLineItemProductFee `object`
  * amount [Price](#price)
  * name `string`: Name of the fee.

### OrderLineItemProductVariantAttribute
* OrderLineItemProductVariantAttribute `object`
  * dimension `string`: The dimension of the variant.
  * value `string`: The value for the dimension.

### OrderLineItemReturnInfo
* OrderLineItemReturnInfo `object`
  * daysToReturn `integer`: Required. How many days later the item can be returned.
  * isReturnable `boolean`: Required. Whether the item is returnable.
  * policyUrl `string`: Required. URL of the item return policy.

### OrderLineItemShippingDetails
* OrderLineItemShippingDetails `object`
  * deliverByDate `string`: Required. The delivery by date, in ISO 8601 format.
  * method [OrderLineItemShippingDetailsMethod](#orderlineitemshippingdetailsmethod)
  * shipByDate `string`: Required. The ship by date, in ISO 8601 format.
  * type `string`: Type of shipment. Indicates whether `deliveryDetails` or `pickupDetails` is applicable for this shipment. Acceptable values are: - "`delivery`" - "`pickup`" 

### OrderLineItemShippingDetailsMethod
* OrderLineItemShippingDetailsMethod `object`
  * carrier `string`: The carrier for the shipping. Optional. See `shipments[].carrier` for a list of acceptable values.
  * maxDaysInTransit `integer`: Required. Maximum transit time.
  * methodName `string`: Required. The name of the shipping method.
  * minDaysInTransit `integer`: Required. Minimum transit time.

### OrderMerchantProvidedAnnotation
* OrderMerchantProvidedAnnotation `object`
  * key `string`: Key for additional merchant provided (as key-value pairs) annotation about the line item.
  * value `string`: Value for additional merchant provided (as key-value pairs) annotation about the line item.

### OrderPaymentMethod
* OrderPaymentMethod `object`
  * billingAddress [OrderAddress](#orderaddress)
  * expirationMonth `integer`: The card expiration month (January = 1, February = 2 etc.).
  * expirationYear `integer`: The card expiration year (4-digit, e.g. 2015).
  * lastFourDigits `string`: The last four digits of the card number.
  * phoneNumber `string`: The billing phone number.
  * type `string`: The type of instrument. Acceptable values are: - "`AMEX`" - "`DISCOVER`" - "`JCB`" - "`MASTERCARD`" - "`UNIONPAY`" - "`VISA`" - "``" 

### OrderPickupDetails
* OrderPickupDetails `object`
  * address [OrderAddress](#orderaddress)
  * collectors `array`: Collectors authorized to pick up shipment from the pickup location.
    * items [OrderPickupDetailsCollector](#orderpickupdetailscollector)
  * locationId `string`: ID of the pickup location.

### OrderPickupDetailsCollector
* OrderPickupDetailsCollector `object`
  * name `string`: Name of the person picking up the shipment.
  * phoneNumber `string`: Phone number of the person picking up the shipment.

### OrderRefund
* OrderRefund `object`
  * actor `string`: The actor that created the refund. Acceptable values are: - "`customer`" - "`googleBot`" - "`googleCustomerService`" - "`googlePayments`" - "`googleSabre`" - "`merchant`" 
  * amount [Price](#price)
  * creationDate `string`: Date on which the item has been created, in ISO 8601 format.
  * reason `string`: The reason for the refund. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" - "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" - "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" 
  * reasonText `string`: The explanation of the reason.

### OrderReportDisbursement
* OrderReportDisbursement `object`: Order disbursement. All methods require the payment analyst role.
  * disbursementAmount [Price](#price)
  * disbursementCreationDate `string`: The disbursement date, in ISO 8601 format.
  * disbursementDate `string`: The date the disbursement was initiated, in ISO 8601 format.
  * disbursementId `string`: The ID of the disbursement.
  * merchantId `string`: The ID of the managing account.

### OrderReportTransaction
* OrderReportTransaction `object`
  * disbursementAmount [Price](#price)
  * disbursementCreationDate `string`: The date the disbursement was created, in ISO 8601 format.
  * disbursementDate `string`: The date the disbursement was initiated, in ISO 8601 format.
  * disbursementId `string`: The ID of the disbursement.
  * merchantId `string`: The ID of the managing account.
  * merchantOrderId `string`: Merchant-provided ID of the order.
  * orderId `string`: The ID of the order.
  * productAmount [Amount](#amount)
  * productAmountWithRemittedTax [ProductAmount](#productamount)
  * transactionDate `string`: The date of the transaction, in ISO 8601 format.

### OrderReturn
* OrderReturn `object`
  * actor `string`: The actor that created the refund. Acceptable values are: - "`customer`" - "`googleBot`" - "`googleCustomerService`" - "`googlePayments`" - "`googleSabre`" - "`merchant`" 
  * creationDate `string`: Date on which the item has been created, in ISO 8601 format.
  * quantity `integer`: Quantity that is returned.
  * reason `string`: The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" 
  * reasonText `string`: The explanation of the reason.

### OrderShipment
* OrderShipment `object`
  * carrier `string`: The carrier handling the shipment. For supported carriers, Google includes the carrier name and tracking URL in emails to customers. For select supported carriers, Google also automatically updates the shipment status based on the provided shipment ID. *Note:* You can also use unsupported carriers, but emails to customers will not include the carrier name or tracking URL, and there will be no automatic order status updates. Supported carriers for US are: - "`ups`" (United Parcel Service) *automatic status updates* - "`usps`" (United States Postal Service) *automatic status updates* - "`fedex`" (FedEx) *automatic status updates * - "`dhl`" (DHL eCommerce) *automatic status updates* (US only) - "`ontrac`" (OnTrac) *automatic status updates * - "`dhl express`" (DHL Express) - "`deliv`" (Deliv) - "`dynamex`" (TForce) - "`lasership`" (LaserShip) - "`mpx`" (Military Parcel Xpress) - "`uds`" (United Delivery Service) - "`efw`" (Estes Forwarding Worldwide) - "`jd logistics`" (JD Logistics) - "`yunexpress`" (YunExpress) - "`china post`" (China Post) - "`china ems`" (China Post Express Mail Service) - "`singapore post`" (Singapore Post) - "`pos malaysia`" (Pos Malaysia) - "`postnl`" (PostNL) - "`ptt`" (PTT Turkish Post) - "`eub`" (ePacket) - "`chukou1`" (Chukou1 Logistics) - "`bestex`" (Best Express) - "`canada post`" (Canada Post) - "`purolator`" (Purolator) - "`canpar`" (Canpar) - "`india post`" (India Post) - "`blue dart`" (Blue Dart) - "`delhivery`" (Delhivery) - "`dtdc`" (DTDC) - "`tpc india`" (TPC India) Supported carriers for FR are: - "`la poste`" (La Poste) *automatic status updates * - "`colissimo`" (Colissimo by La Poste) *automatic status updates* - "`ups`" (United Parcel Service) *automatic status updates * - "`chronopost`" (Chronopost by La Poste) - "`gls`" (General Logistics Systems France) - "`dpd`" (DPD Group by GeoPost) - "`bpost`" (Belgian Post Group) - "`colis prive`" (Colis Privé) - "`boxtal`" (Boxtal) - "`geodis`" (GEODIS) - "`tnt`" (TNT) - "`db schenker`" (DB Schenker) - "`aramex`" (Aramex) 
  * creationDate `string`: Date on which the shipment has been created, in ISO 8601 format.
  * deliveryDate `string`: Date on which the shipment has been delivered, in ISO 8601 format. Present only if `status` is `delivered`
  * id `string`: The ID of the shipment.
  * lineItems `array`: The line items that are shipped.
    * items [OrderShipmentLineItemShipment](#ordershipmentlineitemshipment)
  * scheduledDeliveryDetails [OrderShipmentScheduledDeliveryDetails](#ordershipmentscheduleddeliverydetails)
  * status `string`: The status of the shipment. Acceptable values are: - "`delivered`" - "`readyForPickup`" - "`shipped`" - "`undeliverable`" 
  * trackingId `string`: The tracking ID for the shipment.

### OrderShipmentLineItemShipment
* OrderShipmentLineItemShipment `object`
  * lineItemId `string`: The ID of the line item that is shipped. This value is assigned by Google when an order is created. Either lineItemId or productId is required.
  * productId `string`: The ID of the product to ship. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * quantity `integer`: The quantity that is shipped.

### OrderShipmentScheduledDeliveryDetails
* OrderShipmentScheduledDeliveryDetails `object`
  * carrierPhoneNumber `string`: The phone number of the carrier fulfilling the delivery. The phone number is formatted as the international notation in ITU-T Recommendation E.123 (e.g., "+41 44 668 1800").
  * scheduledDate `string`: The date a shipment is scheduled for delivery, in ISO 8601 format.

### OrderinvoicesCreateChargeInvoiceRequest
* OrderinvoicesCreateChargeInvoiceRequest `object`
  * invoiceId `string`: [required] The ID of the invoice.
  * invoiceSummary [InvoiceSummary](#invoicesummary)
  * lineItemInvoices `array`: [required] Invoice details per line item.
    * items [ShipmentInvoiceLineItemInvoice](#shipmentinvoicelineiteminvoice)
  * operationId `string`: [required] The ID of the operation, unique across all operations for a given order.
  * shipmentGroupId `string`: [required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group multiple line items that have the same kind of shipping charges.

### OrderinvoicesCreateChargeInvoiceResponse
* OrderinvoicesCreateChargeInvoiceResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#orderinvoicesCreateChargeInvoiceResponse".

### OrderinvoicesCreateRefundInvoiceRequest
* OrderinvoicesCreateRefundInvoiceRequest `object`
  * invoiceId `string`: [required] The ID of the invoice.
  * operationId `string`: [required] The ID of the operation, unique across all operations for a given order.
  * refundOnlyOption [OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption](#orderinvoicescustombatchrequestentrycreaterefundinvoicerefundoption)
  * returnOption [OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption](#orderinvoicescustombatchrequestentrycreaterefundinvoicereturnoption)
  * shipmentInvoices `array`: Invoice details for different shipment groups.
    * items [ShipmentInvoice](#shipmentinvoice)

### OrderinvoicesCreateRefundInvoiceResponse
* OrderinvoicesCreateRefundInvoiceResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#orderinvoicesCreateRefundInvoiceResponse".

### OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption
* OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption `object`
  * description `string`: Optional description of the refund reason.
  * reason `string`: [required] Reason for the refund. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" - "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" - "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" 

### OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption
* OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption `object`
  * description `string`: Optional description of the return reason.
  * reason `string`: [required] Reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" 

### OrderreportsListDisbursementsResponse
* OrderreportsListDisbursementsResponse `object`
  * disbursements `array`: The list of disbursements.
    * items [OrderReportDisbursement](#orderreportdisbursement)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#orderreportsListDisbursementsResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of disbursements.

### OrderreportsListTransactionsResponse
* OrderreportsListTransactionsResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#orderreportsListTransactionsResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of transactions.
  * transactions `array`: The list of transactions.
    * items [OrderReportTransaction](#orderreporttransaction)

### OrderreturnsListResponse
* OrderreturnsListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#orderreturnsListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of returns.
  * resources `array`
    * items [MerchantOrderReturn](#merchantorderreturn)

### OrdersAcknowledgeRequest
* OrdersAcknowledgeRequest `object`
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.

### OrdersAcknowledgeResponse
* OrdersAcknowledgeResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersAcknowledgeResponse".

### OrdersAdvanceTestOrderResponse
* OrdersAdvanceTestOrderResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersAdvanceTestOrderResponse".

### OrdersCancelLineItemRequest
* OrdersCancelLineItemRequest `object`
  * amount [Price](#price)
  * amountPretax [Price](#price)
  * amountTax [Price](#price)
  * lineItemId `string`: The ID of the line item to cancel. Either lineItemId or productId is required.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * productId `string`: The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * quantity `integer`: The quantity to cancel.
  * reason `string`: The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" 
  * reasonText `string`: The explanation of the reason.

### OrdersCancelLineItemResponse
* OrdersCancelLineItemResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelLineItemResponse".

### OrdersCancelRequest
* OrdersCancelRequest `object`
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * reason `string`: The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" 
  * reasonText `string`: The explanation of the reason.

### OrdersCancelResponse
* OrdersCancelResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelResponse".

### OrdersCancelTestOrderByCustomerRequest
* OrdersCancelTestOrderByCustomerRequest `object`
  * reason `string`: The reason for the cancellation. Acceptable values are: - "`changedMind`" - "`orderedWrongItem`" - "`other`" 

### OrdersCancelTestOrderByCustomerResponse
* OrdersCancelTestOrderByCustomerResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelTestOrderByCustomerResponse".

### OrdersCreateTestOrderRequest
* OrdersCreateTestOrderRequest `object`
  * country `string`: The CLDR territory code of the country of the test order to create. Affects the currency and addresses of orders created via `template_name`, or the addresses of orders created via `test_order`. Acceptable values are: - "`US`" - "`FR`" Defaults to `US`.
  * templateName `string`: The test order template to use. Specify as an alternative to `testOrder` as a shortcut for retrieving a template and then creating an order using that template. Acceptable values are: - "`template1`" - "`template1a`" - "`template1b`" - "`template2`" - "`template3`" 
  * testOrder [TestOrder](#testorder)

### OrdersCreateTestOrderResponse
* OrdersCreateTestOrderResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestOrderResponse".
  * orderId `string`: The ID of the newly created test order.

### OrdersCreateTestReturnRequest
* OrdersCreateTestReturnRequest `object`
  * items `array`: Returned items.
    * items [OrdersCustomBatchRequestEntryCreateTestReturnReturnItem](#orderscustombatchrequestentrycreatetestreturnreturnitem)

### OrdersCreateTestReturnResponse
* OrdersCreateTestReturnResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestReturnResponse".
  * returnId `string`: The ID of the newly created test order return.

### OrdersCustomBatchRequest
* OrdersCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [OrdersCustomBatchRequestEntry](#orderscustombatchrequestentry)

### OrdersCustomBatchRequestEntry
* OrdersCustomBatchRequestEntry `object`
  * batchId `integer`: An entry ID, unique within the batch request.
  * cancel [OrdersCustomBatchRequestEntryCancel](#orderscustombatchrequestentrycancel)
  * cancelLineItem [OrdersCustomBatchRequestEntryCancelLineItem](#orderscustombatchrequestentrycancellineitem)
  * inStoreRefundLineItem [OrdersCustomBatchRequestEntryInStoreRefundLineItem](#orderscustombatchrequestentryinstorerefundlineitem)
  * merchantId `string`: The ID of the managing account.
  * merchantOrderId `string`: The merchant order ID. Required for `updateMerchantOrderId` and `getByMerchantOrderId` methods.
  * method `string`: The method of the batch entry. Acceptable values are: - "`acknowledge`" - "`cancel`" - "`cancelLineItem`" - "`get`" - "`getByMerchantOrderId`" - "`inStoreRefundLineItem`" - "`refund`" - "`rejectReturnLineItem`" - "`returnLineItem`" - "`returnRefundLineItem`" - "`setLineItemMetadata`" - "`shipLineItems`" - "`updateLineItemShippingDetails`" - "`updateMerchantOrderId`" - "`updateShipment`" 
  * operationId `string`: The ID of the operation. Unique across all operations for a given order. Required for all methods beside `get` and `getByMerchantOrderId`.
  * orderId `string`: The ID of the order. Required for all methods beside `getByMerchantOrderId`.
  * refund [OrdersCustomBatchRequestEntryRefund](#orderscustombatchrequestentryrefund)
  * rejectReturnLineItem [OrdersCustomBatchRequestEntryRejectReturnLineItem](#orderscustombatchrequestentryrejectreturnlineitem)
  * returnLineItem [OrdersCustomBatchRequestEntryReturnLineItem](#orderscustombatchrequestentryreturnlineitem)
  * returnRefundLineItem [OrdersCustomBatchRequestEntryReturnRefundLineItem](#orderscustombatchrequestentryreturnrefundlineitem)
  * setLineItemMetadata [OrdersCustomBatchRequestEntrySetLineItemMetadata](#orderscustombatchrequestentrysetlineitemmetadata)
  * shipLineItems [OrdersCustomBatchRequestEntryShipLineItems](#orderscustombatchrequestentryshiplineitems)
  * updateLineItemShippingDetails [OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails](#orderscustombatchrequestentryupdatelineitemshippingdetails)
  * updateShipment [OrdersCustomBatchRequestEntryUpdateShipment](#orderscustombatchrequestentryupdateshipment)

### OrdersCustomBatchRequestEntryCancel
* OrdersCustomBatchRequestEntryCancel `object`
  * reason `string`: The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" 
  * reasonText `string`: The explanation of the reason.

### OrdersCustomBatchRequestEntryCancelLineItem
* OrdersCustomBatchRequestEntryCancelLineItem `object`
  * amount [Price](#price)
  * amountPretax [Price](#price)
  * amountTax [Price](#price)
  * lineItemId `string`: The ID of the line item to cancel. Either lineItemId or productId is required.
  * productId `string`: The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * quantity `integer`: The quantity to cancel.
  * reason `string`: The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" 
  * reasonText `string`: The explanation of the reason.

### OrdersCustomBatchRequestEntryCreateTestReturnReturnItem
* OrdersCustomBatchRequestEntryCreateTestReturnReturnItem `object`
  * lineItemId `string`: The ID of the line item to return.
  * quantity `integer`: Quantity that is returned.

### OrdersCustomBatchRequestEntryInStoreRefundLineItem
* OrdersCustomBatchRequestEntryInStoreRefundLineItem `object`
  * amountPretax [Price](#price)
  * amountTax [Price](#price)
  * lineItemId `string`: The ID of the line item to return. Either lineItemId or productId is required.
  * productId `string`: The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * quantity `integer`: The quantity to return and refund.
  * reason `string`: The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" 
  * reasonText `string`: The explanation of the reason.

### OrdersCustomBatchRequestEntryRefund
* OrdersCustomBatchRequestEntryRefund `object`
  * amount [Price](#price)
  * amountPretax [Price](#price)
  * amountTax [Price](#price)
  * reason `string`: The reason for the refund. Acceptable values are: - "`adjustment`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`deliveredLateByCarrier`" - "`feeAdjustment`" - "`lateShipmentCredit`" - "`noInventory`" - "`other`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`shippingCostAdjustment`" - "`taxAdjustment`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`" 
  * reasonText `string`: The explanation of the reason.

### OrdersCustomBatchRequestEntryRejectReturnLineItem
* OrdersCustomBatchRequestEntryRejectReturnLineItem `object`
  * lineItemId `string`: The ID of the line item to return. Either lineItemId or productId is required.
  * productId `string`: The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * quantity `integer`: The quantity to return and refund.
  * reason `string`: The reason for the return. Acceptable values are: - "`damagedOrUsed`" - "`missingComponent`" - "`notEligible`" - "`other`" - "`outOfReturnWindow`" 
  * reasonText `string`: The explanation of the reason.

### OrdersCustomBatchRequestEntryReturnLineItem
* OrdersCustomBatchRequestEntryReturnLineItem `object`
  * lineItemId `string`: The ID of the line item to return. Either lineItemId or productId is required.
  * productId `string`: The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * quantity `integer`: The quantity to return.
  * reason `string`: The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" 
  * reasonText `string`: The explanation of the reason.

### OrdersCustomBatchRequestEntryReturnRefundLineItem
* OrdersCustomBatchRequestEntryReturnRefundLineItem `object`
  * amountPretax [Price](#price)
  * amountTax [Price](#price)
  * lineItemId `string`: The ID of the line item to return. Either lineItemId or productId is required.
  * productId `string`: The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * quantity `integer`: The quantity to return and refund.
  * reason `string`: The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" 
  * reasonText `string`: The explanation of the reason.

### OrdersCustomBatchRequestEntrySetLineItemMetadata
* OrdersCustomBatchRequestEntrySetLineItemMetadata `object`
  * annotations `array`
    * items [OrderMerchantProvidedAnnotation](#ordermerchantprovidedannotation)
  * lineItemId `string`: The ID of the line item to set metadata. Either lineItemId or productId is required.
  * productId `string`: The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required.

### OrdersCustomBatchRequestEntryShipLineItems
* OrdersCustomBatchRequestEntryShipLineItems `object`
  * carrier `string`: Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values.
  * lineItems `array`: Line items to ship.
    * items [OrderShipmentLineItemShipment](#ordershipmentlineitemshipment)
  * shipmentGroupId `string`: ID of the shipment group. Required for orders that use the orderinvoices service.
  * shipmentId `string`: Deprecated. Please use shipmentInfo instead. The ID of the shipment.
  * shipmentInfos `array`: Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs).
    * items [OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo](#orderscustombatchrequestentryshiplineitemsshipmentinfo)
  * trackingId `string`: Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment.

### OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo
* OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo `object`
  * carrier `string`: The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values.
  * shipmentId `string`: Required. The ID of the shipment. This is assigned by the merchant and is unique to each shipment.
  * trackingId `string`: The tracking ID for the shipment.

### OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails
* OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails `object`
  * deliverByDate `string`: Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past.
  * lineItemId `string`: The ID of the line item to set metadata. Either lineItemId or productId is required.
  * productId `string`: The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * shipByDate `string`: Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past.

### OrdersCustomBatchRequestEntryUpdateShipment
* OrdersCustomBatchRequestEntryUpdateShipment `object`
  * carrier `string`: The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values.
  * deliveryDate `string`: Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is `delivered`.
  * shipmentId `string`: The ID of the shipment.
  * status `string`: New status for the shipment. Not updated if missing. Acceptable values are: - "`delivered`" - "`undeliverable`" - "`readyForPickup`" 
  * trackingId `string`: The tracking ID for the shipment. Not updated if missing.

### OrdersCustomBatchResponse
* OrdersCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [OrdersCustomBatchResponseEntry](#orderscustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponse".

### OrdersCustomBatchResponseEntry
* OrdersCustomBatchResponseEntry `object`
  * batchId `integer`: The ID of the request entry this entry responds to.
  * errors [Errors](#errors)
  * executionStatus `string`: The status of the execution. Only defined if 1. the request was successful; and 2. the method is not `get`, `getByMerchantOrderId`, or one of the test methods. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#ordersCustomBatchResponseEntry`"
  * order [Order](#order)

### OrdersGetByMerchantOrderIdResponse
* OrdersGetByMerchantOrderIdResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersGetByMerchantOrderIdResponse".
  * order [Order](#order)

### OrdersGetTestOrderTemplateResponse
* OrdersGetTestOrderTemplateResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersGetTestOrderTemplateResponse".
  * template [TestOrder](#testorder)

### OrdersInStoreRefundLineItemRequest
* OrdersInStoreRefundLineItemRequest `object`
  * amountPretax [Price](#price)
  * amountTax [Price](#price)
  * lineItemId `string`: The ID of the line item to return. Either lineItemId or productId is required.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * productId `string`: The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * quantity `integer`: The quantity to return and refund.
  * reason `string`: The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" 
  * reasonText `string`: The explanation of the reason.

### OrdersInStoreRefundLineItemResponse
* OrdersInStoreRefundLineItemResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersInStoreRefundLineItemResponse".

### OrdersListResponse
* OrdersListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of orders.
  * resources `array`
    * items [Order](#order)

### OrdersRefundRequest
* OrdersRefundRequest `object`
  * amount [Price](#price)
  * amountPretax [Price](#price)
  * amountTax [Price](#price)
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * reason `string`: The reason for the refund. Acceptable values are: - "`adjustment`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`deliveredLateByCarrier`" - "`feeAdjustment`" - "`lateShipmentCredit`" - "`noInventory`" - "`other`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`shippingCostAdjustment`" - "`taxAdjustment`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`" 
  * reasonText `string`: The explanation of the reason.

### OrdersRefundResponse
* OrdersRefundResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersRefundResponse".

### OrdersRejectReturnLineItemRequest
* OrdersRejectReturnLineItemRequest `object`
  * lineItemId `string`: The ID of the line item to return. Either lineItemId or productId is required.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * productId `string`: The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * quantity `integer`: The quantity to return and refund.
  * reason `string`: The reason for the return. Acceptable values are: - "`damagedOrUsed`" - "`missingComponent`" - "`notEligible`" - "`other`" - "`outOfReturnWindow`" 
  * reasonText `string`: The explanation of the reason.

### OrdersRejectReturnLineItemResponse
* OrdersRejectReturnLineItemResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersRejectReturnLineItemResponse".

### OrdersReturnLineItemRequest
* OrdersReturnLineItemRequest `object`
  * lineItemId `string`: The ID of the line item to return. Either lineItemId or productId is required.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * productId `string`: The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * quantity `integer`: The quantity to return.
  * reason `string`: The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" 
  * reasonText `string`: The explanation of the reason.

### OrdersReturnLineItemResponse
* OrdersReturnLineItemResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnLineItemResponse".

### OrdersReturnRefundLineItemRequest
* OrdersReturnRefundLineItemRequest `object`
  * amountPretax [Price](#price)
  * amountTax [Price](#price)
  * lineItemId `string`: The ID of the line item to return. Either lineItemId or productId is required.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * productId `string`: The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * quantity `integer`: The quantity to return and refund.
  * reason `string`: The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" 
  * reasonText `string`: The explanation of the reason.

### OrdersReturnRefundLineItemResponse
* OrdersReturnRefundLineItemResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnRefundLineItemResponse".

### OrdersSetLineItemMetadataRequest
* OrdersSetLineItemMetadataRequest `object`
  * annotations `array`
    * items [OrderMerchantProvidedAnnotation](#ordermerchantprovidedannotation)
  * lineItemId `string`: The ID of the line item to set metadata. Either lineItemId or productId is required.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * productId `string`: The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required.

### OrdersSetLineItemMetadataResponse
* OrdersSetLineItemMetadataResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersSetLineItemMetadataResponse".

### OrdersShipLineItemsRequest
* OrdersShipLineItemsRequest `object`
  * carrier `string`: Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values.
  * lineItems `array`: Line items to ship.
    * items [OrderShipmentLineItemShipment](#ordershipmentlineitemshipment)
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * shipmentGroupId `string`: ID of the shipment group. Required for orders that use the orderinvoices service.
  * shipmentId `string`: Deprecated. Please use shipmentInfo instead. The ID of the shipment.
  * shipmentInfos `array`: Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs).
    * items [OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo](#orderscustombatchrequestentryshiplineitemsshipmentinfo)
  * trackingId `string`: Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment.

### OrdersShipLineItemsResponse
* OrdersShipLineItemsResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersShipLineItemsResponse".

### OrdersUpdateLineItemShippingDetailsRequest
* OrdersUpdateLineItemShippingDetailsRequest `object`
  * deliverByDate `string`: Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past.
  * lineItemId `string`: The ID of the line item to set metadata. Either lineItemId or productId is required.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * productId `string`: The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * shipByDate `string`: Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past.

### OrdersUpdateLineItemShippingDetailsResponse
* OrdersUpdateLineItemShippingDetailsResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateLineItemShippingDetailsResponse".

### OrdersUpdateMerchantOrderIdRequest
* OrdersUpdateMerchantOrderIdRequest `object`
  * merchantOrderId `string`: The merchant order id to be assigned to the order. Must be unique per merchant.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.

### OrdersUpdateMerchantOrderIdResponse
* OrdersUpdateMerchantOrderIdResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateMerchantOrderIdResponse".

### OrdersUpdateShipmentRequest
* OrdersUpdateShipmentRequest `object`
  * carrier `string`: The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values.
  * deliveryDate `string`: Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is `delivered`.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * shipmentId `string`: The ID of the shipment.
  * status `string`: New status for the shipment. Not updated if missing. Acceptable values are: - "`delivered`" - "`undeliverable`" - "`readyForPickup`" 
  * trackingId `string`: The tracking ID for the shipment. Not updated if missing.

### OrdersUpdateShipmentResponse
* OrdersUpdateShipmentResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateShipmentResponse".

### PickupCarrierService
* PickupCarrierService `object`
  * carrierName `string`: The name of the pickup carrier (e.g., `"UPS"`). Required.
  * serviceName `string`: The name of the pickup service (e.g., `"Access point"`). Required.

### PickupServicesPickupService
* PickupServicesPickupService `object`
  * carrierName `string`: The name of the carrier (e.g., `"UPS"`). Always present.
  * country `string`: The CLDR country code of the carrier (e.g., "US"). Always present.
  * serviceName `string`: The name of the pickup service (e.g., `"Access point"`). Always present.

### PosCustomBatchRequest
* PosCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [PosCustomBatchRequestEntry](#poscustombatchrequestentry)

### PosCustomBatchRequestEntry
* PosCustomBatchRequestEntry `object`
  * batchId `integer`: An entry ID, unique within the batch request.
  * inventory [PosInventory](#posinventory)
  * merchantId `string`: The ID of the POS data provider.
  * method `string`: The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" - "`inventory`" - "`sale`" 
  * sale [PosSale](#possale)
  * store [PosStore](#posstore)
  * storeCode `string`: The store code. This should be set only if the method is `delete` or `get`.
  * targetMerchantId `string`: The ID of the account for which to get/submit data.

### PosCustomBatchResponse
* PosCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [PosCustomBatchResponseEntry](#poscustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#posCustomBatchResponse".

### PosCustomBatchResponseEntry
* PosCustomBatchResponseEntry `object`
  * batchId `integer`: The ID of the request entry to which this entry responds.
  * errors [Errors](#errors)
  * inventory [PosInventory](#posinventory)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponseEntry`"
  * sale [PosSale](#possale)
  * store [PosStore](#posstore)

### PosDataProviders
* PosDataProviders `object`
  * country `string`: Country code.
  * posDataProviders `array`: A list of POS data providers.
    * items [PosDataProvidersPosDataProvider](#posdataprovidersposdataprovider)

### PosDataProvidersPosDataProvider
* PosDataProvidersPosDataProvider `object`
  * displayName `string`: The display name of Pos data Provider.
  * fullName `string`: The full name of this POS data Provider.
  * providerId `string`: The ID of the account.

### PosInventory
* PosInventory `object`: The absolute quantity of an item available at the given store.
  * contentLanguage `string`: Required. The two-letter ISO 639-1 language code for the item.
  * gtin `string`: Global Trade Item Number.
  * itemId `string`: Required. A unique identifier for the item.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#posInventory`"
  * price [Price](#price)
  * quantity `string`: Required. The available quantity of the item.
  * storeCode `string`: Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.
  * targetCountry `string`: Required. The CLDR territory code for the item.
  * timestamp `string`: Required. The inventory timestamp, in ISO 8601 format.

### PosInventoryRequest
* PosInventoryRequest `object`
  * contentLanguage `string`: Required. The two-letter ISO 639-1 language code for the item.
  * gtin `string`: Global Trade Item Number.
  * itemId `string`: Required. A unique identifier for the item.
  * price [Price](#price)
  * quantity `string`: Required. The available quantity of the item.
  * storeCode `string`: Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.
  * targetCountry `string`: Required. The CLDR territory code for the item.
  * timestamp `string`: Required. The inventory timestamp, in ISO 8601 format.

### PosInventoryResponse
* PosInventoryResponse `object`
  * contentLanguage `string`: Required. The two-letter ISO 639-1 language code for the item.
  * gtin `string`: Global Trade Item Number.
  * itemId `string`: Required. A unique identifier for the item.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#posInventoryResponse".
  * price [Price](#price)
  * quantity `string`: Required. The available quantity of the item.
  * storeCode `string`: Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.
  * targetCountry `string`: Required. The CLDR territory code for the item.
  * timestamp `string`: Required. The inventory timestamp, in ISO 8601 format.

### PosListResponse
* PosListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#posListResponse".
  * resources `array`
    * items [PosStore](#posstore)

### PosSale
* PosSale `object`: The change of the available quantity of an item at the given store.
  * contentLanguage `string`: Required. The two-letter ISO 639-1 language code for the item.
  * gtin `string`: Global Trade Item Number.
  * itemId `string`: Required. A unique identifier for the item.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#posSale`"
  * price [Price](#price)
  * quantity `string`: Required. The relative change of the available quantity. Negative for items returned.
  * saleId `string`: A unique ID to group items from the same sale event.
  * storeCode `string`: Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.
  * targetCountry `string`: Required. The CLDR territory code for the item.
  * timestamp `string`: Required. The inventory timestamp, in ISO 8601 format.

### PosSaleRequest
* PosSaleRequest `object`
  * contentLanguage `string`: Required. The two-letter ISO 639-1 language code for the item.
  * gtin `string`: Global Trade Item Number.
  * itemId `string`: Required. A unique identifier for the item.
  * price [Price](#price)
  * quantity `string`: Required. The relative change of the available quantity. Negative for items returned.
  * saleId `string`: A unique ID to group items from the same sale event.
  * storeCode `string`: Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.
  * targetCountry `string`: Required. The CLDR territory code for the item.
  * timestamp `string`: Required. The inventory timestamp, in ISO 8601 format.

### PosSaleResponse
* PosSaleResponse `object`
  * contentLanguage `string`: Required. The two-letter ISO 639-1 language code for the item.
  * gtin `string`: Global Trade Item Number.
  * itemId `string`: Required. A unique identifier for the item.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#posSaleResponse".
  * price [Price](#price)
  * quantity `string`: Required. The relative change of the available quantity. Negative for items returned.
  * saleId `string`: A unique ID to group items from the same sale event.
  * storeCode `string`: Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.
  * targetCountry `string`: Required. The CLDR territory code for the item.
  * timestamp `string`: Required. The inventory timestamp, in ISO 8601 format.

### PosStore
* PosStore `object`: Store resource.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#posStore`"
  * storeAddress `string`: Required. The street address of the store.
  * storeCode `string`: Required. A store identifier that is unique for the given merchant.

### PostalCodeGroup
* PostalCodeGroup `object`
  * country `string`: The CLDR territory code of the country the postal code group applies to. Required.
  * name `string`: The name of the postal code group, referred to in headers. Required.
  * postalCodeRanges `array`: A range of postal codes. Required.
    * items [PostalCodeRange](#postalcoderange)

### PostalCodeRange
* PostalCodeRange `object`
  * postalCodeRangeBegin `string`: A postal code or a pattern of the form `prefix*` denoting the inclusive lower bound of the range defining the area. Examples values: `"94108"`, `"9410*"`, `"9*"`. Required.
  * postalCodeRangeEnd `string`: A postal code or a pattern of the form `prefix*` denoting the inclusive upper bound of the range defining the area. It must have the same length as `postalCodeRangeBegin`: if `postalCodeRangeBegin` is a postal code then `postalCodeRangeEnd` must be a postal code too; if `postalCodeRangeBegin` is a pattern then `postalCodeRangeEnd` must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching `postalCodeRangeBegin`.

### Price
* Price `object`
  * currency `string`: The currency of the price.
  * value `string`: The price represented as a number.

### Product
* Product `object`:  Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Some attributes are country-specific, so make sure you select the appropriate country in the drop-down selector at the top of the page. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
  * additionalImageLinks `array`: Additional URLs of images of the item.
    * items `string`
  * additionalProductTypes `array`: Additional categories of the item (formatted as in products data specification).
    * items `string`
  * adult `boolean`: Should be set to true if the item is targeted towards adults.
  * adwordsGrouping `string`: Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise.
  * adwordsLabels `array`: Similar to adwords_grouping, but only works on CPC.
    * items `string`
  * adwordsRedirect `string`: Allows advertisers to override the item URL when the product is shown within the context of Product Ads.
  * ageGroup `string`: Target age group of the item. Acceptable values are: - "`adult`" - "`infant`" - "`kids`" - "`newborn`" - "`toddler`" - "`youngAdult`" 
  * aspects `array`: Deprecated. Do not use.
    * items [ProductAspect](#productaspect)
  * availability `string`: Availability status of the item. Acceptable values are: - "`in stock`" - "`out of stock`" - "`preorder`" 
  * availabilityDate `string`: The day a pre-ordered product becomes available for delivery, in ISO 8601 format.
  * brand `string`: Brand of the item.
  * canonicalLink `string`: URL for the canonical version of your item's landing page.
  * channel `string`: Required. The item's channel (online or local). Acceptable values are: - "`local`" - "`online`" 
  * color `string`: Color of the item.
  * condition `string`: Condition or state of the item. Acceptable values are: - "`local`" - "`online`" 
  * contentLanguage `string`: Required. The two-letter ISO 639-1 language code for the item.
  * costOfGoodsSold [Price](#price)
  * customAttributes `array`: A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (e.g., `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google (formerly known as Shopping Actions).
    * items [CustomAttribute](#customattribute)
  * customGroups `array`: A list of custom (merchant-provided) custom attribute groups.
    * items [CustomGroup](#customgroup)
  * customLabel0 `string`: Custom label 0 for custom grouping of items in a Shopping campaign.
  * customLabel1 `string`: Custom label 1 for custom grouping of items in a Shopping campaign.
  * customLabel2 `string`: Custom label 2 for custom grouping of items in a Shopping campaign.
  * customLabel3 `string`: Custom label 3 for custom grouping of items in a Shopping campaign.
  * customLabel4 `string`: Custom label 4 for custom grouping of items in a Shopping campaign.
  * description `string`: Description of the item.
  * destinations `array`: Specifies the intended destinations for the product.
    * items [ProductDestination](#productdestination)
  * displayAdsId `string`: An identifier for an item for dynamic remarketing campaigns.
  * displayAdsLink `string`: URL directly to your item's landing page for dynamic remarketing campaigns.
  * displayAdsSimilarIds `array`: Advertiser-specified recommendations.
    * items `string`
  * displayAdsTitle `string`: Title of an item for dynamic remarketing campaigns.
  * displayAdsValue `number`: Offer margin for dynamic remarketing campaigns.
  * energyEfficiencyClass `string`: The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`" 
  * expirationDate `string`: Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is too far in the future.
  * gender `string`: Target gender of the item. Acceptable values are: - "`female`" - "`male`" - "`unisex`" 
  * googleProductCategory `string`: Google's category of the item (see Google product taxonomy).
  * gtin `string`: Global Trade Item Number (GTIN) of the item.
  * id `string`: The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter. The REST ID for a product is of the form channel:contentLanguage: targetCountry: offerId.
  * identifierExists `boolean`: False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada.
  * imageLink `string`: URL of an image of the item.
  * installment [Installment](#installment)
  * isBundle `boolean`: Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price.
  * itemGroupId `string`: Shared identifier for all variants of the same product.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#product`"
  * link `string`: URL directly linking to your item's page on your website.
  * loyaltyPoints [LoyaltyPoints](#loyaltypoints)
  * material `string`: The material of which the item is made.
  * maxEnergyEfficiencyClass `string`: The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`" 
  * maxHandlingTime `string`: Maximal product handling time (in business days).
  * minEnergyEfficiencyClass `string`: The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`" 
  * minHandlingTime `string`: Minimal product handling time (in business days).
  * mobileLink `string`: URL for the mobile-optimized version of your item's landing page.
  * mpn `string`: Manufacturer Part Number (MPN) of the item.
  * multipack `string`: The number of identical products in a merchant-defined multipack.
  * offerId `string`: Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details. *Note:* Content API methods that operate on products take the REST ID of the product, *not* this identifier.
  * onlineOnly `boolean`: Deprecated.
  * pattern `string`: The item's pattern (e.g. polka dots).
  * price [Price](#price)
  * productType `string`: Your category of the item (formatted as in products data specification).
  * promotionIds `array`: The unique ID of a promotion.
    * items `string`
  * salePrice [Price](#price)
  * salePriceEffectiveDate `string`: Date range during which the item is on sale (see products data specification ).
  * sellOnGoogleQuantity `string`: The quantity of the product that is available for selling on Google. Supported only for online products.
  * shipping `array`: Shipping rules.
    * items [ProductShipping](#productshipping)
  * shippingHeight [ProductShippingDimension](#productshippingdimension)
  * shippingLabel `string`: The shipping label of the product, used to group product in account-level shipping rules.
  * shippingLength [ProductShippingDimension](#productshippingdimension)
  * shippingWeight [ProductShippingWeight](#productshippingweight)
  * shippingWidth [ProductShippingDimension](#productshippingdimension)
  * sizeSystem `string`: System in which the size is specified. Recommended for apparel items. Acceptable values are: - "`AU`" - "`BR`" - "`CN`" - "`DE`" - "`EU`" - "`FR`" - "`IT`" - "`JP`" - "`MEX`" - "`UK`" - "`US`" 
  * sizeType `string`: The cut of the item. Recommended for apparel items. Acceptable values are: - "`big and tall`" - "`maternity`" - "`oversize`" - "`petite`" - "`plus`" - "`regular`" 
  * sizes `array`: Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value (see size definition).
    * items `string`
  * source `string`: The source of the offer, i.e., how the offer was created. Acceptable values are: - "`api`" - "`crawl`" - "`feed`" 
  * targetCountry `string`: Required. The CLDR territory code for the item.
  * taxes `array`: Tax information.
    * items [ProductTax](#producttax)
  * title `string`: Title of the item.
  * unitPricingBaseMeasure [ProductUnitPricingBaseMeasure](#productunitpricingbasemeasure)
  * unitPricingMeasure [ProductUnitPricingMeasure](#productunitpricingmeasure)
  * validatedDestinations `array`: Deprecated. The read-only list of intended destinations which passed validation.
    * items `string`
  * warnings `array`: Read-only warnings.
    * items [Error](#error)

### ProductAmount
* ProductAmount `object`
  * priceAmount [Price](#price)
  * remittedTaxAmount [Price](#price)
  * taxAmount [Price](#price)

### ProductAspect
* ProductAspect `object`
  * aspectName `string`: Deprecated.
  * destinationName `string`: Deprecated.
  * intention `string`: Deprecated.

### ProductDestination
* ProductDestination `object`
  * destinationName `string`: The name of the destination.
  * intention `string`: Whether the destination is required, excluded or should be validated. Acceptable values are: - "`default`" - "`excluded`" - "`optional`" - "`required`" 

### ProductShipping
* ProductShipping `object`
  * country `string`: The CLDR territory code of the country to which an item will ship.
  * locationGroupName `string`: The location where the shipping is applicable, represented by a location group name.
  * locationId `string`: The numeric ID of a location that the shipping rate applies to as defined in the AdWords API.
  * postalCode `string`: The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a * wildcard, a range between two postal codes or two postal code prefixes of equal length.
  * price [Price](#price)
  * region `string`: The geographic region to which a shipping rate applies.
  * service `string`: A free-form description of the service class or delivery speed.

### ProductShippingDimension
* ProductShippingDimension `object`
  * unit `string`: The unit of value.
  * value `number`: The dimension of the product used to calculate the shipping cost of the item.

### ProductShippingWeight
* ProductShippingWeight `object`
  * unit `string`: The unit of value.
  * value `number`: The weight of the product used to calculate the shipping cost of the item.

### ProductStatus
* ProductStatus `object`: The status of a product, i.e., information about a product computed asynchronously.
  * creationDate `string`: Date on which the item has been created, in ISO 8601 format.
  * dataQualityIssues `array`: DEPRECATED - never populated
    * items [ProductStatusDataQualityIssue](#productstatusdataqualityissue)
  * destinationStatuses `array`: The intended destinations for the product.
    * items [ProductStatusDestinationStatus](#productstatusdestinationstatus)
  * googleExpirationDate `string`: Date on which the item expires in Google Shopping, in ISO 8601 format.
  * itemLevelIssues `array`: A list of all issues associated with the product.
    * items [ProductStatusItemLevelIssue](#productstatusitemlevelissue)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#productStatus`"
  * lastUpdateDate `string`: Date on which the item has been last updated, in ISO 8601 format.
  * link `string`: The link to the product.
  * product [Product](#product)
  * productId `string`: The ID of the product for which status is reported.
  * title `string`: The title of the product.

### ProductStatusDataQualityIssue
* ProductStatusDataQualityIssue `object`
  * destination `string`
  * detail `string`
  * fetchStatus `string`
  * id `string`
  * location `string`
  * severity `string`
  * timestamp `string`
  * valueOnLandingPage `string`
  * valueProvided `string`

### ProductStatusDestinationStatus
* ProductStatusDestinationStatus `object`
  * approvalPending `boolean`: Whether the approval status might change due to further processing.
  * approvalStatus `string`: The destination's approval status. Acceptable values are: - "`approved`" - "`disapproved`" 
  * destination `string`: The name of the destination
  * intention `string`: Provided for backward compatibility only. Always set to "required". Acceptable values are: - "`default`" - "`excluded`" - "`optional`" - "`required`" 

### ProductStatusItemLevelIssue
* ProductStatusItemLevelIssue `object`
  * attributeName `string`: The attribute's name, if the issue is caused by a single attribute.
  * code `string`: The error code of the issue.
  * description `string`: A short issue description in English.
  * destination `string`: The destination the issue applies to.
  * detail `string`: A detailed issue description in English.
  * documentation `string`: The URL of a web page to help with resolving this issue.
  * resolution `string`: Whether the issue can be resolved by the merchant.
  * servability `string`: How this issue affects serving of the offer.

### ProductTax
* ProductTax `object`
  * country `string`: The country within which the item is taxed, specified as a CLDR territory code.
  * locationId `string`: The numeric ID of a location that the tax rate applies to as defined in the AdWords API.
  * postalCode `string`: The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using * wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460, 94*-95*.
  * rate `number`: The percentage of tax rate that applies to the item price.
  * region `string`: The geographic region to which the tax rate applies.
  * taxShip `boolean`: Should be set to true if tax is charged on shipping.

### ProductUnitPricingBaseMeasure
* ProductUnitPricingBaseMeasure `object`
  * unit `string`: The unit of the denominator.
  * value `string`: The denominator of the unit price.

### ProductUnitPricingMeasure
* ProductUnitPricingMeasure `object`
  * unit `string`: The unit of the measure.
  * value `number`: The measure of an item.

### ProductsCustomBatchRequest
* ProductsCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [ProductsCustomBatchRequestEntry](#productscustombatchrequestentry)

### ProductsCustomBatchRequestEntry
* ProductsCustomBatchRequestEntry `object`: A batch entry encoding a single non-batch products request.
  * batchId `integer`: An entry ID, unique within the batch request.
  * merchantId `string`: The ID of the managing account.
  * method `string`: The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" 
  * product [Product](#product)
  * productId `string`: The ID of the product to get or delete. Only defined if the method is `get` or `delete`.

### ProductsCustomBatchResponse
* ProductsCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [ProductsCustomBatchResponseEntry](#productscustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#productsCustomBatchResponse".

### ProductsCustomBatchResponseEntry
* ProductsCustomBatchResponseEntry `object`: A batch entry encoding a single non-batch products response.
  * batchId `integer`: The ID of the request entry this entry responds to.
  * errors [Errors](#errors)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponseEntry`"
  * product [Product](#product)

### ProductsListResponse
* ProductsListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#productsListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of products.
  * resources `array`
    * items [Product](#product)

### ProductstatusesCustomBatchRequest
* ProductstatusesCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [ProductstatusesCustomBatchRequestEntry](#productstatusescustombatchrequestentry)

### ProductstatusesCustomBatchRequestEntry
* ProductstatusesCustomBatchRequestEntry `object`: A batch entry encoding a single non-batch productstatuses request.
  * batchId `integer`: An entry ID, unique within the batch request.
  * destinations `array`: If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
    * items `string`
  * includeAttributes `boolean`
  * merchantId `string`: The ID of the managing account.
  * method `string`: The method of the batch entry. Acceptable values are: - "`get`" 
  * productId `string`: The ID of the product whose status to get.

### ProductstatusesCustomBatchResponse
* ProductstatusesCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [ProductstatusesCustomBatchResponseEntry](#productstatusescustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#productstatusesCustomBatchResponse".

### ProductstatusesCustomBatchResponseEntry
* ProductstatusesCustomBatchResponseEntry `object`: A batch entry encoding a single non-batch productstatuses response.
  * batchId `integer`: The ID of the request entry this entry responds to.
  * errors [Errors](#errors)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponseEntry`"
  * productStatus [ProductStatus](#productstatus)

### ProductstatusesListResponse
* ProductstatusesListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#productstatusesListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of products statuses.
  * resources `array`
    * items [ProductStatus](#productstatus)

### Promotion
* Promotion `object`
  * promotionAmount [Amount](#amount)
  * promotionId `string`: [required] ID of the promotion.

### RateGroup
* RateGroup `object`
  * applicableShippingLabels `array`: A list of shipping labels defining the products to which this rate group applies to. This is a disjunction: only one of the labels has to match for the rate group to apply. May only be empty for the last rate group of a service. Required.
    * items `string`
  * carrierRates `array`: A list of carrier rates that can be referred to by `mainTable` or `singleValue`.
    * items [CarrierRate](#carrierrate)
  * mainTable [Table](#table)
  * name `string`: Name of the rate group. Optional. If set has to be unique within shipping service.
  * singleValue [Value](#value)
  * subtables `array`: A list of subtables referred to by `mainTable`. Can only be set if `mainTable` is set.
    * items [Table](#table)

### RefundReason
* RefundReason `object`
  * description `string`: Description of the reason.
  * reasonCode `string`: Code of the refund reason. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" - "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" - "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" 

### ReturnShipment
* ReturnShipment `object`
  * creationDate `string`: The date of creation of the shipment, in ISO 8601 format.
  * deliveryDate `string`: The date of delivery of the shipment, in ISO 8601 format.
  * returnMethodType `string`: Type of the return method. Acceptable values are: - "`byMail`" - "`contactCustomerSupport`" - "`returnless`" 
  * shipmentId `string`: Shipment ID generated by Google.
  * shipmentTrackingInfos `array`: Tracking information of the shipment. One return shipment might be handled by several shipping carriers sequentially.
    * items [ShipmentTrackingInfo](#shipmenttrackinginfo)
  * shippingDate `string`: The date of shipping of the shipment, in ISO 8601 format.
  * state `string`: State of the shipment. Acceptable values are: - "`completed`" - "`new`" - "`shipped`" - "`undeliverable`" - "`pending`" 

### Row
* Row `object`
  * cells `array`: The list of cells that constitute the row. Must have the same length as `columnHeaders` for two-dimensional tables, a length of 1 for one-dimensional tables. Required.
    * items [Value](#value)

### Service
* Service `object`
  * active `boolean`: A boolean exposing the active status of the shipping service. Required.
  * currency `string`: The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups.
  * deliveryCountry `string`: The CLDR territory code of the country to which the service applies. Required.
  * deliveryTime [DeliveryTime](#deliverytime)
  * eligibility `string`: Eligibility for this service. Acceptable values are: - "`All scenarios`" - "`All scenarios except Shopping Actions`" - "`Shopping Actions`" 
  * minimumOrderValue [Price](#price)
  * minimumOrderValueTable [MinimumOrderValueTable](#minimumordervaluetable)
  * name `string`: Free-form name of the service. Must be unique within target account. Required.
  * pickupService [PickupCarrierService](#pickupcarrierservice)
  * rateGroups `array`: Shipping rate group definitions. Only the last one is allowed to have an empty `applicableShippingLabels`, which means "everything else". The other `applicableShippingLabels` must not overlap.
    * items [RateGroup](#rategroup)
  * shipmentType `string`: Type of locations this service ships orders to. Acceptable values are: - "`delivery`" - "`pickup`" 

### ShipmentInvoice
* ShipmentInvoice `object`
  * invoiceSummary [InvoiceSummary](#invoicesummary)
  * lineItemInvoices `array`: [required] Invoice details per line item.
    * items [ShipmentInvoiceLineItemInvoice](#shipmentinvoicelineiteminvoice)
  * shipmentGroupId `string`: [required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group multiple line items that have the same kind of shipping charges.

### ShipmentInvoiceLineItemInvoice
* ShipmentInvoiceLineItemInvoice `object`
  * lineItemId `string`: ID of the line item. Either lineItemId or productId must be set.
  * productId `string`: ID of the product. This is the REST ID used in the products service. Either lineItemId or productId must be set.
  * shipmentUnitIds `array`: [required] The shipment unit ID is assigned by the merchant and defines individual quantities within a line item. The same ID can be assigned to units that are the same while units that differ must be assigned a different ID (for example: free or promotional units).
    * items `string`
  * unitInvoice [UnitInvoice](#unitinvoice)

### ShipmentTrackingInfo
* ShipmentTrackingInfo `object`
  * carrier `string`: The shipping carrier that handles the package. Acceptable values are: - "`boxtal`" - "`bpost`" - "`chronopost`" - "`colisPrive`" - "`colissimo`" - "`cxt`" - "`deliv`" - "`dhl`" - "`dpd`" - "`dynamex`" - "`eCourier`" - "`easypost`" - "`efw`" - "`fedex`" - "`fedexSmartpost`" - "`geodis`" - "`gls`" - "`googleCourier`" - "`gsx`" - "`jdLogistics`" - "`laPoste`" - "`lasership`" - "`manual`" - "`mpx`" - "`onTrac`" - "`other`" - "`tnt`" - "`uds`" - "`ups`" - "`usps`" 
  * trackingNumber `string`: The tracking number for the package.

### ShippingSettings
* ShippingSettings `object`: The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.
  * accountId `string`: The ID of the account to which these account shipping settings belong. Ignored upon update, always present in get request responses.
  * postalCodeGroups `array`: A list of postal code groups that can be referred to in `services`. Optional.
    * items [PostalCodeGroup](#postalcodegroup)
  * services `array`: The target account's list of services. Optional.
    * items [Service](#service)

### ShippingsettingsCustomBatchRequest
* ShippingsettingsCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [ShippingsettingsCustomBatchRequestEntry](#shippingsettingscustombatchrequestentry)

### ShippingsettingsCustomBatchRequestEntry
* ShippingsettingsCustomBatchRequestEntry `object`: A batch entry encoding a single non-batch shippingsettings request.
  * accountId `string`: The ID of the account for which to get/update account shipping settings.
  * batchId `integer`: An entry ID, unique within the batch request.
  * merchantId `string`: The ID of the managing account.
  * method `string`: The method of the batch entry. Acceptable values are: - "`get`" - "`update`" 
  * shippingSettings [ShippingSettings](#shippingsettings)

### ShippingsettingsCustomBatchResponse
* ShippingsettingsCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [ShippingsettingsCustomBatchResponseEntry](#shippingsettingscustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsCustomBatchResponse".

### ShippingsettingsCustomBatchResponseEntry
* ShippingsettingsCustomBatchResponseEntry `object`: A batch entry encoding a single non-batch shipping settings response.
  * batchId `integer`: The ID of the request entry to which this entry responds.
  * errors [Errors](#errors)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsCustomBatchResponseEntry`"
  * shippingSettings [ShippingSettings](#shippingsettings)

### ShippingsettingsGetSupportedCarriersResponse
* ShippingsettingsGetSupportedCarriersResponse `object`
  * carriers `array`: A list of supported carriers. May be empty.
    * items [CarriersCarrier](#carrierscarrier)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedCarriersResponse".

### ShippingsettingsGetSupportedHolidaysResponse
* ShippingsettingsGetSupportedHolidaysResponse `object`
  * holidays `array`: A list of holidays applicable for delivery guarantees. May be empty.
    * items [HolidaysHoliday](#holidaysholiday)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedHolidaysResponse".

### ShippingsettingsGetSupportedPickupServicesResponse
* ShippingsettingsGetSupportedPickupServicesResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedPickupServicesResponse".
  * pickupServices `array`: A list of supported pickup services. May be empty.
    * items [PickupServicesPickupService](#pickupservicespickupservice)

### ShippingsettingsListResponse
* ShippingsettingsListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of shipping settings.
  * resources `array`
    * items [ShippingSettings](#shippingsettings)

### Table
* Table `object`
  * columnHeaders [Headers](#headers)
  * name `string`: Name of the table. Required for subtables, ignored for the main table.
  * rowHeaders [Headers](#headers)
  * rows `array`: The list of rows that constitute the table. Must have the same length as `rowHeaders`. Required.
    * items [Row](#row)

### TestOrder
* TestOrder `object`
  * customer [TestOrderCustomer](#testordercustomer)
  * enableOrderinvoices `boolean`: Whether the orderinvoices service should support this order.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#testOrder`"
  * lineItems `array`: Required. Line items that are ordered. At least one line item must be provided.
    * items [TestOrderLineItem](#testorderlineitem)
  * notificationMode `string`: Restricted. Do not use.
  * paymentMethod [TestOrderPaymentMethod](#testorderpaymentmethod)
  * predefinedDeliveryAddress `string`: Required. Identifier of one of the predefined delivery addresses for the delivery. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" 
  * predefinedPickupDetails `string`: Identifier of one of the predefined pickup details. Required for orders containing line items with shipping type `pickup`. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" 
  * promotions `array`: Deprecated. Ignored if provided.
    * items [OrderLegacyPromotion](#orderlegacypromotion)
  * shippingCost [Price](#price)
  * shippingCostTax [Price](#price)
  * shippingOption `string`: Required. The requested shipping option. Acceptable values are: - "`economy`" - "`expedited`" - "`oneDay`" - "`sameDay`" - "`standard`" - "`twoDay`" 

### TestOrderCustomer
* TestOrderCustomer `object`
  * email `string`: Required. Email address of the customer. Acceptable values are: - "`pog.dwight.schrute@gmail.com`" - "`pog.jim.halpert@gmail.com`" - "`penpog.pam.beesly@gmail.comding`" 
  * explicitMarketingPreference `boolean`: Deprecated. Please use marketingRightsInfo instead.
  * fullName `string`: Full name of the customer.
  * marketingRightsInfo [TestOrderCustomerMarketingRightsInfo](#testordercustomermarketingrightsinfo)

### TestOrderCustomerMarketingRightsInfo
* TestOrderCustomerMarketingRightsInfo `object`
  * explicitMarketingPreference `string`: Last know user use selection regards marketing preferences. In certain cases selection might not be known, so this field would be empty. Acceptable values are: - "`denied`" - "`granted`" 
  * lastUpdatedTimestamp `string`: Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet.

### TestOrderLineItem
* TestOrderLineItem `object`
  * product [TestOrderLineItemProduct](#testorderlineitemproduct)
  * quantityOrdered `integer`: Required. Number of items ordered.
  * returnInfo [OrderLineItemReturnInfo](#orderlineitemreturninfo)
  * shippingDetails [OrderLineItemShippingDetails](#orderlineitemshippingdetails)
  * unitTax [Price](#price)

### TestOrderLineItemProduct
* TestOrderLineItemProduct `object`
  * brand `string`: Required. Brand of the item.
  * channel `string`: Deprecated. Acceptable values are: - "`online`" 
  * condition `string`: Required. Condition or state of the item. Acceptable values are: - "`new`" 
  * contentLanguage `string`: Required. The two-letter ISO 639-1 language code for the item. Acceptable values are: - "`en`" - "`fr`" 
  * fees `array`: Fees for the item. Optional.
    * items [OrderLineItemProductFee](#orderlineitemproductfee)
  * gtin `string`: Global Trade Item Number (GTIN) of the item. Optional.
  * imageLink `string`: Required. URL of an image of the item.
  * itemGroupId `string`: Shared identifier for all variants of the same product. Optional.
  * mpn `string`: Manufacturer Part Number (MPN) of the item. Optional.
  * offerId `string`: Required. An identifier of the item.
  * price [Price](#price)
  * targetCountry `string`: Required. The CLDR territory // code of the target country of the product.
  * title `string`: Required. The title of the product.
  * variantAttributes `array`: Variant attributes for the item. Optional.
    * items [OrderLineItemProductVariantAttribute](#orderlineitemproductvariantattribute)

### TestOrderPaymentMethod
* TestOrderPaymentMethod `object`
  * expirationMonth `integer`: The card expiration month (January = 1, February = 2 etc.).
  * expirationYear `integer`: The card expiration year (4-digit, e.g. 2015).
  * lastFourDigits `string`: The last four digits of the card number.
  * predefinedBillingAddress `string`: The billing address. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" 
  * type `string`: The type of instrument. Note that real orders might have different values than the four values accepted by `createTestOrder`. Acceptable values are: - "`AMEX`" - "`DISCOVER`" - "`MASTERCARD`" - "`VISA`" 

### TransitTable
* TransitTable `object`
  * postalCodeGroupNames `array`: A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service.
    * items `string`
  * rows `array`
    * items [TransitTableTransitTimeRow](#transittabletransittimerow)
  * transitTimeLabels `array`: A list of transit time labels. The last value can be `"all other labels"`. Example: `["food", "electronics", "all other labels"]`.
    * items `string`

### TransitTableTransitTimeRow
* TransitTableTransitTimeRow `object`
  * values `array`
    * items [TransitTableTransitTimeRowTransitTimeValue](#transittabletransittimerowtransittimevalue)

### TransitTableTransitTimeRowTransitTimeValue
* TransitTableTransitTimeRowTransitTimeValue `object`
  * maxTransitTimeInDays `integer`: Must be greater than or equal to `minTransitTimeInDays`.
  * minTransitTimeInDays `integer`: Transit time range (min-max) in business days. 0 means same day delivery, 1 means next day delivery.

### UnitInvoice
* UnitInvoice `object`
  * additionalCharges `array`: Additional charges for a unit, e.g. shipping costs.
    * items [UnitInvoiceAdditionalCharge](#unitinvoiceadditionalcharge)
  * promotions `array`: Deprecated.
    * items [Promotion](#promotion)
  * unitPricePretax [Price](#price)
  * unitPriceTaxes `array`: Tax amounts to apply to the unit price.
    * items [UnitInvoiceTaxLine](#unitinvoicetaxline)

### UnitInvoiceAdditionalCharge
* UnitInvoiceAdditionalCharge `object`
  * additionalChargeAmount [Amount](#amount)
  * additionalChargePromotions `array`: Deprecated.
    * items [Promotion](#promotion)
  * type `string`: [required] Type of the additional charge. Acceptable values are: - "`shipping`" 

### UnitInvoiceTaxLine
* UnitInvoiceTaxLine `object`
  * taxAmount [Price](#price)
  * taxName `string`: Optional name of the tax type. This should only be provided if `taxType` is `otherFeeTax`.
  * taxType `string`: [required] Type of the tax. Acceptable values are: - "`otherFee`" - "`otherFeeTax`" - "`sales`" 

### Value
* Value `object`: The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set.
  * carrierRateName `string`: The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set.
  * flatRate [Price](#price)
  * noShipping `boolean`: If true, then the product can't ship. Must be true when set, can only be set if all other fields are not set.
  * pricePercentage `string`: A percentage of the price represented as a number in decimal notation (e.g., `"5.4"`). Can only be set if all other fields are not set.
  * subtableName `string`: The name of a subtable. Can only be set in table cells (i.e., not for single values), and only if all other fields are not set.

### Weight
* Weight `object`
  * unit `string`: Required. The weight unit. Acceptable values are: - "`kg`" - "`lb`" 
  * value `string`: Required. The weight represented as a number.


