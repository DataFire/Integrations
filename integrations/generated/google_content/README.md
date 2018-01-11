# @datafire/google_content

Client library for Content API for Shopping

## Installation and Usage
```bash
npm install --save @datafire/google_content
```
```js
let google_content = require('@datafire/google_content').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_content.shippingsettings.custombatch({}).then(data => {
  console.log(data);
})
```

## Description

Manages product items, inventory, and Merchant Center accounts for Google Shopping.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_content.oauthCallback({
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
google_content.oauthRefresh(null, context)
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

### accounts.authinfo
Returns information about the authenticated user.


```js
google_content.accounts.authinfo({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccountsAuthInfoResponse](#accountsauthinforesponse)

### accounts.custombatch
Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.


```js
google_content.accounts.custombatch({}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * body [AccountsCustomBatchRequest](#accountscustombatchrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccountsCustomBatchResponse](#accountscustombatchresponse)

### accountstatuses.custombatch



```js
google_content.accountstatuses.custombatch({}, context)
```

#### Input
* input `object`
  * body [AccountstatusesCustomBatchRequest](#accountstatusescustombatchrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccountstatusesCustomBatchResponse](#accountstatusescustombatchresponse)

### accounttax.custombatch
Retrieves and updates tax settings of multiple accounts in a single request.


```js
google_content.accounttax.custombatch({}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * body [AccounttaxCustomBatchRequest](#accounttaxcustombatchrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccounttaxCustomBatchResponse](#accounttaxcustombatchresponse)

### datafeeds.custombatch



```js
google_content.datafeeds.custombatch({}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * body [DatafeedsCustomBatchRequest](#datafeedscustombatchrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DatafeedsCustomBatchResponse](#datafeedscustombatchresponse)

### datafeedstatuses.custombatch



```js
google_content.datafeedstatuses.custombatch({}, context)
```

#### Input
* input `object`
  * body [DatafeedstatusesCustomBatchRequest](#datafeedstatusescustombatchrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DatafeedstatusesCustomBatchResponse](#datafeedstatusescustombatchresponse)

### inventory.custombatch
Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products.


```js
google_content.inventory.custombatch({}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * body [InventoryCustomBatchRequest](#inventorycustombatchrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InventoryCustomBatchResponse](#inventorycustombatchresponse)

### orders.custombatch
Retrieves or modifies multiple orders in a single request.


```js
google_content.orders.custombatch({}, context)
```

#### Input
* input `object`
  * body [OrdersCustomBatchRequest](#orderscustombatchrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OrdersCustomBatchResponse](#orderscustombatchresponse)

### products.custombatch
Retrieves, inserts, and deletes multiple products in a single request.


```js
google_content.products.custombatch({}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * body [ProductsCustomBatchRequest](#productscustombatchrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProductsCustomBatchResponse](#productscustombatchresponse)

### productstatuses.custombatch
Gets the statuses of multiple products in a single request.


```js
google_content.productstatuses.custombatch({}, context)
```

#### Input
* input `object`
  * body [ProductstatusesCustomBatchRequest](#productstatusescustombatchrequest)
  * includeAttributes `boolean`: Flag to include full product data in the results of this request. The default value is false.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProductstatusesCustomBatchResponse](#productstatusescustombatchresponse)

### shippingsettings.custombatch
Retrieves and updates the shipping settings of multiple accounts in a single request.


```js
google_content.shippingsettings.custombatch({}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * body [ShippingsettingsCustomBatchRequest](#shippingsettingscustombatchrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ShippingsettingsCustomBatchResponse](#shippingsettingscustombatchresponse)

### accounts.list
Lists the sub-accounts in your Merchant Center account.


```js
google_content.accounts.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of accounts to return in the response, used for paging.
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccountsListResponse](#accountslistresponse)

### accounts.insert
Creates a Merchant Center sub-account.


```js
google_content.accounts.insert({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * body [Account](#account)
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Account](#account)

### accounts.delete
Deletes a Merchant Center sub-account.


```js
google_content.accounts.delete({
  "accountId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The ID of the account.
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * force `boolean`: Flag to delete sub-accounts with products. The default value is false.
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### accounts.get
Retrieves a Merchant Center account.


```js
google_content.accounts.get({
  "accountId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The ID of the account.
  * merchantId **required** `string`: The ID of the managing account. If this account is not a multi-client account, then this parameter must be the same as accountId.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Account](#account)

### accounts.patch
Updates a Merchant Center account. This method supports patch semantics.


```js
google_content.accounts.patch({
  "accountId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The ID of the account.
  * body [Account](#account)
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * merchantId **required** `string`: The ID of the managing account. If this account is not a multi-client account, then this parameter must be the same as accountId.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Account](#account)

### accounts.update
Updates a Merchant Center account.


```js
google_content.accounts.update({
  "accountId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The ID of the account.
  * body [Account](#account)
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * merchantId **required** `string`: The ID of the managing account. If this account is not a multi-client account, then this parameter must be the same as accountId.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Account](#account)

### accounts.claimwebsite
Claims the website of a Merchant Center sub-account.


```js
google_content.accounts.claimwebsite({
  "accountId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The ID of the account whose website is claimed.
  * merchantId **required** `string`: The ID of the managing account. If this account is not a multi-client account, then this parameter must be the same as accountId.
  * overwrite `boolean`: Only available to selected merchants. When set to True, this flag removes any existing claim on the requested website by another account and replaces it with a claim from this account.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccountsClaimWebsiteResponse](#accountsclaimwebsiteresponse)

### accountstatuses.list
Lists the statuses of the sub-accounts in your Merchant Center account.


```js
google_content.accountstatuses.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of account statuses to return in the response, used for paging.
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccountstatusesListResponse](#accountstatuseslistresponse)

### accountstatuses.get
Retrieves the status of a Merchant Center account.


```js
google_content.accountstatuses.get({
  "accountId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The ID of the account.
  * merchantId **required** `string`: The ID of the managing account. If this account is not a multi-client account, then this parameter must be the same as accountId.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccountStatus](#accountstatus)

### accounttax.list
Lists the tax settings of the sub-accounts in your Merchant Center account.


```js
google_content.accounttax.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of tax settings to return in the response, used for paging.
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccounttaxListResponse](#accounttaxlistresponse)

### accounttax.get
Retrieves the tax settings of the account.


```js
google_content.accounttax.get({
  "accountId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The ID of the account for which to get/update account tax settings.
  * merchantId **required** `string`: The ID of the managing account. If this account is not a multi-client account, then this parameter must be the same as accountId.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccountTax](#accounttax)

### accounttax.patch
Updates the tax settings of the account. This method supports patch semantics.


```js
google_content.accounttax.patch({
  "accountId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The ID of the account for which to get/update account tax settings.
  * body [AccountTax](#accounttax)
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * merchantId **required** `string`: The ID of the managing account. If this account is not a multi-client account, then this parameter must be the same as accountId.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccountTax](#accounttax)

### accounttax.update
Updates the tax settings of the account.


```js
google_content.accounttax.update({
  "accountId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The ID of the account for which to get/update account tax settings.
  * body [AccountTax](#accounttax)
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * merchantId **required** `string`: The ID of the managing account. If this account is not a multi-client account, then this parameter must be the same as accountId.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccountTax](#accounttax)

### datafeeds.list
Lists the datafeeds in your Merchant Center account.


```js
google_content.datafeeds.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of products to return in the response, used for paging.
  * merchantId **required** `string`: The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DatafeedsListResponse](#datafeedslistresponse)

### datafeeds.insert
Registers a datafeed configuration with your Merchant Center account.


```js
google_content.datafeeds.insert({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * body [Datafeed](#datafeed)
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Datafeed](#datafeed)

### datafeeds.delete
Deletes a datafeed configuration from your Merchant Center account.


```js
google_content.datafeeds.delete({
  "datafeedId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * datafeedId **required** `string`: The ID of the datafeed.
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### datafeeds.get
Retrieves a datafeed configuration from your Merchant Center account.


```js
google_content.datafeeds.get({
  "datafeedId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * datafeedId **required** `string`: The ID of the datafeed.
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Datafeed](#datafeed)

### datafeeds.patch
Updates a datafeed configuration of your Merchant Center account. This method supports patch semantics.


```js
google_content.datafeeds.patch({
  "datafeedId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * body [Datafeed](#datafeed)
  * datafeedId **required** `string`: The ID of the datafeed.
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Datafeed](#datafeed)

### datafeeds.update
Updates a datafeed configuration of your Merchant Center account.


```js
google_content.datafeeds.update({
  "datafeedId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * body [Datafeed](#datafeed)
  * datafeedId **required** `string`: The ID of the datafeed.
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Datafeed](#datafeed)

### datafeedstatuses.list
Lists the statuses of the datafeeds in your Merchant Center account.


```js
google_content.datafeedstatuses.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of products to return in the response, used for paging.
  * merchantId **required** `string`: The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DatafeedstatusesListResponse](#datafeedstatuseslistresponse)

### datafeedstatuses.get
Retrieves the status of a datafeed from your Merchant Center account.


```js
google_content.datafeedstatuses.get({
  "datafeedId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * country `string`: The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
  * datafeedId **required** `string`: The ID of the datafeed.
  * language `string`: The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DatafeedStatus](#datafeedstatus)

### inventory.set
Updates price and availability of a product in your Merchant Center account.


```js
google_content.inventory.set({
  "merchantId": "",
  "productId": "",
  "storeCode": ""
}, context)
```

#### Input
* input `object`
  * body [InventorySetRequest](#inventorysetrequest)
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * productId **required** `string`: The REST id of the product for which to update price and availability.
  * storeCode **required** `string`: The code of the store for which to update price and availability. Use online to update price and availability of an online product.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InventorySetResponse](#inventorysetresponse)

### orders.list
Lists the orders in your Merchant Center account.


```js
google_content.orders.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * acknowledged `boolean`: Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged.
  * maxResults `integer`: The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page.
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderBy `string` (values: placedDate asc, placedDate desc): The ordering of the returned list. The only supported value are placedDate desc and placedDate asc for now, which returns orders sorted by placement date. "placedDate desc" stands for listing orders by placement date, from oldest to most recent. "placedDate asc" stands for listing orders by placement date, from most recent to oldest. In future releases we'll support other sorting criteria.
  * pageToken `string`: The token returned by the previous request.
  * placedDateEnd `string`: Obtains orders placed before this date (exclusively), in ISO 8601 format.
  * placedDateStart `string`: Obtains orders placed after this date (inclusively), in ISO 8601 format.
  * statuses `array`: Obtains orders that match any of the specified statuses. Multiple values can be specified with comma separation. Additionally, please note that active is a shortcut for pendingShipment and partiallyShipped, and completed is a shortcut for shipped , partiallyDelivered, delivered, partiallyReturned, returned, and canceled.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OrdersListResponse](#orderslistresponse)

### orders.get
Retrieves an order from your Merchant Center account.


```js
google_content.orders.get({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Order](#order)

### orders.acknowledge
Marks an order as acknowledged.


```js
google_content.orders.acknowledge({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * body [OrdersAcknowledgeRequest](#ordersacknowledgerequest)
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OrdersAcknowledgeResponse](#ordersacknowledgeresponse)

### orders.cancel
Cancels all line items in an order, making a full refund.


```js
google_content.orders.cancel({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * body [OrdersCancelRequest](#orderscancelrequest)
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order to cancel.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OrdersCancelResponse](#orderscancelresponse)

### orders.cancellineitem
Cancels a line item, making a full refund.


```js
google_content.orders.cancellineitem({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * body [OrdersCancelLineItemRequest](#orderscancellineitemrequest)
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OrdersCancelLineItemResponse](#orderscancellineitemresponse)

### orders.refund
Refund a portion of the order, up to the full amount paid.


```js
google_content.orders.refund({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * body [OrdersRefundRequest](#ordersrefundrequest)
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order to refund.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OrdersRefundResponse](#ordersrefundresponse)

### orders.returnlineitem
Returns a line item.


```js
google_content.orders.returnlineitem({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * body [OrdersReturnLineItemRequest](#ordersreturnlineitemrequest)
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OrdersReturnLineItemResponse](#ordersreturnlineitemresponse)

### orders.shiplineitems
Marks line item(s) as shipped.


```js
google_content.orders.shiplineitems({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * body [OrdersShipLineItemsRequest](#ordersshiplineitemsrequest)
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OrdersShipLineItemsResponse](#ordersshiplineitemsresponse)

### orders.updatemerchantorderid
Updates the merchant order ID for a given order.


```js
google_content.orders.updatemerchantorderid({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * body [OrdersUpdateMerchantOrderIdRequest](#ordersupdatemerchantorderidrequest)
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OrdersUpdateMerchantOrderIdResponse](#ordersupdatemerchantorderidresponse)

### orders.updateshipment
Updates a shipment's status, carrier, and/or tracking ID.


```js
google_content.orders.updateshipment({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * body [OrdersUpdateShipmentRequest](#ordersupdateshipmentrequest)
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OrdersUpdateShipmentResponse](#ordersupdateshipmentresponse)

### orders.getbymerchantorderid
Retrieves an order using merchant order id.


```js
google_content.orders.getbymerchantorderid({
  "merchantId": "",
  "merchantOrderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * merchantOrderId **required** `string`: The merchant order id to be looked for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OrdersGetByMerchantOrderIdResponse](#ordersgetbymerchantorderidresponse)

### products.list
Lists the products in your Merchant Center account.


```js
google_content.products.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * includeInvalidInsertedItems `boolean`: Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
  * maxResults `integer`: The maximum number of products to return in the response, used for paging.
  * merchantId **required** `string`: The ID of the account that contains the products. This account cannot be a multi-client account.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProductsListResponse](#productslistresponse)

### products.insert
Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.


```js
google_content.products.insert({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * body [Product](#product)
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Product](#product)

### products.delete
Deletes a product from your Merchant Center account.


```js
google_content.products.delete({
  "merchantId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * productId **required** `string`: The REST id of the product.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### products.get
Retrieves a product from your Merchant Center account.


```js
google_content.products.get({
  "merchantId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * productId **required** `string`: The REST id of the product.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Product](#product)

### productstatuses.list
Lists the statuses of the products in your Merchant Center account.


```js
google_content.productstatuses.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * includeAttributes `boolean`: Flag to include full product data in the results of the list request. The default value is false.
  * includeInvalidInsertedItems `boolean`: Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
  * maxResults `integer`: The maximum number of product statuses to return in the response, used for paging.
  * merchantId **required** `string`: The ID of the account that contains the products. This account cannot be a multi-client account.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProductstatusesListResponse](#productstatuseslistresponse)

### productstatuses.get
Gets the status of a product from your Merchant Center account.


```js
google_content.productstatuses.get({
  "merchantId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * includeAttributes `boolean`: Flag to include full product data in the result of this get request. The default value is false.
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * productId **required** `string`: The REST id of the product.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProductStatus](#productstatus)

### shippingsettings.list
Lists the shipping settings of the sub-accounts in your Merchant Center account.


```js
google_content.shippingsettings.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of shipping settings to return in the response, used for paging.
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ShippingsettingsListResponse](#shippingsettingslistresponse)

### shippingsettings.get
Retrieves the shipping settings of the account.


```js
google_content.shippingsettings.get({
  "accountId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The ID of the account for which to get/update shipping settings.
  * merchantId **required** `string`: The ID of the managing account. If this account is not a multi-client account, then this parameter must be the same as accountId.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ShippingSettings](#shippingsettings)

### shippingsettings.patch
Updates the shipping settings of the account. This method supports patch semantics.


```js
google_content.shippingsettings.patch({
  "accountId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The ID of the account for which to get/update shipping settings.
  * body [ShippingSettings](#shippingsettings)
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * merchantId **required** `string`: The ID of the managing account. If this account is not a multi-client account, then this parameter must be the same as accountId.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ShippingSettings](#shippingsettings)

### shippingsettings.update
Updates the shipping settings of the account.


```js
google_content.shippingsettings.update({
  "accountId": "",
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The ID of the account for which to get/update shipping settings.
  * body [ShippingSettings](#shippingsettings)
  * dryRun `boolean`: Flag to run the request in dry-run mode.
  * merchantId **required** `string`: The ID of the managing account. If this account is not a multi-client account, then this parameter must be the same as accountId.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ShippingSettings](#shippingsettings)

### shippingsettings.getsupportedcarriers
Retrieves supported carriers and carrier services for an account.


```js
google_content.shippingsettings.getsupportedcarriers({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account for which to retrieve the supported carriers.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ShippingsettingsGetSupportedCarriersResponse](#shippingsettingsgetsupportedcarriersresponse)

### orders.createtestorder
Sandbox only. Creates a test order.


```js
google_content.orders.createtestorder({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * body [OrdersCreateTestOrderRequest](#orderscreatetestorderrequest)
  * merchantId **required** `string`: The ID of the account that should manage the order. This cannot be a multi-client account.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OrdersCreateTestOrderResponse](#orderscreatetestorderresponse)

### orders.advancetestorder
Sandbox only. Moves a test order from state "inProgress" to state "pendingShipment".


```js
google_content.orders.advancetestorder({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the test order to modify.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OrdersAdvanceTestOrderResponse](#ordersadvancetestorderresponse)

### orders.gettestordertemplate
Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.


```js
google_content.orders.gettestordertemplate({
  "merchantId": "",
  "templateName": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that should manage the order. This cannot be a multi-client account.
  * templateName **required** `string` (values: template1, template1a, template1b, template2): The name of the template to retrieve.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OrdersGetTestOrderTemplateResponse](#ordersgettestordertemplateresponse)



## Definitions

### Account
* Account `object`: Account data.
  * adultContent `boolean`: Indicates whether the merchant sells adult content.
  * adwordsLinks `array`: List of linked AdWords accounts that are active or pending approval. To create a new link request, add a new link with status active to the list. It will remain in a pending state until approved or rejected either in the AdWords interface or through the  AdWords API. To delete an active link, or to cancel a link request, remove it from the list.
    * items [AccountAdwordsLink](#accountadwordslink)
  * id `string`: Merchant Center account ID.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#account".
  * name `string`: Display name for the account.
  * reviewsUrl `string`: URL for individual seller reviews, i.e., reviews for each child account.
  * sellerId `string`: Client-specific, locally-unique, internal ID for the child account.
  * users `array`: Users with access to the account. Every account (except for subaccounts) must have at least one admin user.
    * items [AccountUser](#accountuser)
  * websiteUrl `string`: The merchant's website.
  * youtubeChannelLinks `array`: List of linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status active to the list. It will remain in a pending state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list.
    * items [AccountYouTubeChannelLink](#accountyoutubechannellink)

### AccountAdwordsLink
* AccountAdwordsLink `object`
  * adwordsId `string`: Customer ID of the AdWords account.
  * status `string`: Status of the link between this Merchant Center account and the AdWords account. Upon retrieval, it represents the actual status of the link and can be either active if it was approved in Google AdWords or pending if it's pending approval. Upon insertion, it represents the intended status of the link. Re-uploading a link with status active when it's still pending or with status pending when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status inactive is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending.

### AccountIdentifier
* AccountIdentifier `object`
  * aggregatorId `string`: The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount).
  * merchantId `string`: The merchant account ID, set for individual accounts and subaccounts.

### AccountStatus
* AccountStatus `object`: The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time.
  * accountId `string`: The ID of the account for which the status is reported.
  * accountLevelIssues `array`: A list of account level issues.
    * items [AccountStatusAccountLevelIssue](#accountstatusaccountlevelissue)
  * dataQualityIssues `array`: A list of data quality issues.
    * items [AccountStatusDataQualityIssue](#accountstatusdataqualityissue)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountStatus".
  * websiteClaimed `boolean`: Whether the account's website is claimed or not.

### AccountStatusAccountLevelIssue
* AccountStatusAccountLevelIssue `object`
  * country `string`: Country for which this issue is reported.
  * detail `string`: Additional details about the issue.
  * id `string`: Issue identifier.
  * severity `string`: Severity of the issue.
  * title `string`: Short description of the issue.

### AccountStatusDataQualityIssue
* AccountStatusDataQualityIssue `object`
  * country `string`: Country for which this issue is reported.
  * detail `string`: A more detailed description of the issue.
  * displayedValue `string`: Actual value displayed on the landing page.
  * exampleItems `array`: Example items featuring the issue.
    * items [AccountStatusExampleItem](#accountstatusexampleitem)
  * id `string`: Issue identifier.
  * lastChecked `string`: Last time the account was checked for this issue.
  * location `string`: The attribute name that is relevant for the issue.
  * numItems `integer`: Number of items in the account found to have the said issue.
  * severity `string`: Severity of the problem.
  * submittedValue `string`: Submitted value that causes the issue.

### AccountStatusExampleItem
* AccountStatusExampleItem `object`: An example of an item that has poor data quality. An item value on the landing page differs from what is submitted, or conflicts with a policy.
  * itemId `string`: Unique item ID as specified in the uploaded product data.
  * link `string`: Landing page of the item.
  * submittedValue `string`: The item value that was submitted.
  * title `string`: Title of the item.
  * valueOnLandingPage `string`: The actual value on the landing page.

### AccountTax
* AccountTax `object`: The tax settings of a merchant account.
  * accountId `string`: The ID of the account to which these account tax settings belong.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountTax".
  * rules `array`: Tax rules. Updating the tax rules will enable US taxes (not reversible). Defining no rules is equivalent to not charging tax at all.
    * items [AccountTaxTaxRule](#accounttaxtaxrule)

### AccountTaxTaxRule
* AccountTaxTaxRule `object`: Tax calculation rule to apply in a state or province (USA only).
  * country `string`: Country code in which tax is applicable.
  * locationId `string`: State (or province) is which the tax is applicable, described by its location id (also called criteria id).
  * ratePercent `string`: Explicit tax rate in percent, represented as a floating point number without the percentage character. Must not be negative.
  * shippingTaxed `boolean`: If true, shipping charges are also taxed.
  * useGlobalRate `boolean`: Whether the tax rate is taken from a global tax table or specified explicitly.

### AccountUser
* AccountUser `object`
  * admin `boolean`: Whether user is an admin.
  * emailAddress `string`: User's email address.

### AccountYouTubeChannelLink
* AccountYouTubeChannelLink `object`
  * channelId `string`: Channel ID.
  * status `string`: Status of the link between this Merchant Center account and the YouTube channel. Upon retrieval, it represents the actual status of the link and can be either active if it was approved in YT Creator Studio or pending if it's pending approval. Upon insertion, it represents the intended status of the link. Re-uploading a link with status active when it's still pending or with status pending when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status inactive is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending.

### AccountsAuthInfoResponse
* AccountsAuthInfoResponse `object`
  * accountIdentifiers `array`: The account identifiers corresponding to the authenticated user.
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
  * accountId `string`: The ID of the targeted account. Only defined if the method is get, delete or claimwebsite.
  * batchId `integer`: An entry ID, unique within the batch request.
  * force `boolean`: Whether the account should be deleted if the account has offers. Only applicable if the method is delete.
  * merchantId `string`: The ID of the managing account.
  * method `string`
  * overwrite `boolean`: Only applicable if the method is claimwebsite. Indicates whether or not to take the claim from another account in case there is a conflict.

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
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountsCustomBatchResponseEntry".

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
  * merchantId `string`: The ID of the managing account.
  * method `string`: The method (get).

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
  * method `string`

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
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accounttaxCustomBatchResponseEntry".

### AccounttaxListResponse
* AccounttaxListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accounttaxListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of account tax settings.
  * resources `array`
    * items [AccountTax](#accounttax)

### CarrierRate
* CarrierRate `object`
  * carrierName `string`: Carrier service, such as "UPS" or "Fedex". The list of supported carriers can be retrieved via the getSupportedCarriers method. Required.
  * carrierService `string`: Carrier service, such as "ground" or "2 days". The list of supported services for a carrier can be retrieved via the getSupportedCarriers method. Required.
  * flatAdjustment [Price](#price)
  * name `string`: Name of the carrier rate. Must be unique per rate group. Required.
  * originPostalCode `string`: Shipping origin for this carrier rate. Required.
  * percentageAdjustment `string`: Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example "5.4" increases the rate by 5.4%, "-3" decreases the rate by 3%. Optional.

### CarriersCarrier
* CarriersCarrier `object`
  * country `string`: The CLDR country code of the carrier (e.g., "US"). Always present.
  * name `string`: The name of the carrier (e.g., "UPS"). Always present.
  * services `array`: A list of supported services (e.g., "ground") for that carrier. Contains at least one service.
    * items `string`

### Datafeed
* Datafeed `object`: Datafeed configuration data.
  * attributeLanguage `string`: The two-letter ISO 639-1 language in which the attributes are defined in the data feed.
  * contentLanguage `string`: [DEPRECATED] Please use targets[].language instead. The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for targetCountry.
  * contentType `string`: The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are supported.
  * fetchSchedule [DatafeedFetchSchedule](#datafeedfetchschedule)
  * fileName `string`: The filename of the feed. All feeds must have a unique file name.
  * format [DatafeedFormat](#datafeedformat)
  * id `string`: The ID of the data feed.
  * intendedDestinations `array`: [DEPRECATED] Please use targets[].includedDestinations instead. The list of intended destinations (corresponds to checked check boxes in Merchant Center).
    * items `string`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#datafeed".
  * name `string`: A descriptive name of the data feed.
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
  * weekday `string`: The day of the week the feed file should be fetched.

### DatafeedFormat
* DatafeedFormat `object`
  * columnDelimiter `string`: Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be auto-detected. Ignored for non-DSV data feeds.
  * fileEncoding `string`: Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected.
  * quotingMode `string`: Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data feeds.

### DatafeedStatus
* DatafeedStatus `object`: The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished.
  * country `string`: The country for which the status is reported, represented as a  CLDR territory code.
  * datafeedId `string`: The ID of the feed for which the status is reported.
  * errors `array`: The list of errors occurring in the feed.
    * items [DatafeedStatusError](#datafeedstatuserror)
  * itemsTotal `string`: The number of items in the feed that were processed.
  * itemsValid `string`: The number of items in the feed that were valid.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#datafeedStatus".
  * language `string`: The two-letter ISO 639-1 language for which the status is reported.
  * lastUploadDate `string`: The last date at which the feed was uploaded.
  * processingStatus `string`: The processing status of the feed.
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
  * country `string`: The country where the items in the feed will be included in the search index, represented as a  CLDR territory code.
  * excludedDestinations `array`: The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center).
    * items `string`
  * includedDestinations `array`: The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in the excluded_destination field.
    * items `string`
  * language `string`: The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for targets[].country.

### DatafeedsCustomBatchRequest
* DatafeedsCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [DatafeedsCustomBatchRequestEntry](#datafeedscustombatchrequestentry)

### DatafeedsCustomBatchRequestEntry
* DatafeedsCustomBatchRequestEntry `object`: A batch entry encoding a single non-batch datafeeds request.
  * batchId `integer`: An entry ID, unique within the batch request.
  * datafeed [Datafeed](#datafeed)
  * datafeedId `string`: The ID of the data feed to get or delete.
  * merchantId `string`: The ID of the managing account.
  * method `string`

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
  * method `string`

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
  * maxTransitTimeInDays `integer`: Maximum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to minTransitTimeInDays. Required.
  * minTransitTimeInDays `integer`: Minimum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Required.

### Error
* Error `object`: An error returned by the API.
  * domain `string`: The domain of the error.
  * message `string`: A description of the error.
  * reason `string`: The error code.

### Errors
* Errors `object`: A list of errors returned by a failed batch entry.
  * code `integer`: The HTTP status of the first error in errors.
  * errors `array`: A list of errors.
    * items [Error](#error)
  * message `string`: The message of the first error in errors.

### Headers
* Headers `object`: A non-empty list of row or column headers for a table. Exactly one of prices, weights, numItems, postalCodeGroupNames, or locations must be set.
  * locations `array`: A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set.
    * items [LocationIdSet](#locationidset)
  * numberOfItems `array`: A list of inclusive number of items upper bounds. The last value can be "infinity". For example ["10", "50", "infinity"] represents the headers "<= 10 items", " 50 items". Must be non-empty. Can only be set if all other fields are not set.
    * items `string`
  * postalCodeGroupNames `array`: A list of postal group names. The last value can be "all other locations". Example: ["zone 1", "zone 2", "all other locations"]. The referred postal code groups must match the delivery country of the service. Must be non-empty. Can only be set if all other fields are not set.
    * items `string`
  * prices `array`: A list of inclusive order price upper bounds. The last price's value can be "infinity". For example [{"value": "10", "currency": "USD"}, {"value": "500", "currency": "USD"}, {"value": "infinity", "currency": "USD"}] represents the headers "<= $10", " $500". All prices within a service must have the same currency. Must be non-empty. Can only be set if all other fields are not set.
    * items [Price](#price)
  * weights `array`: A list of inclusive order weight upper bounds. The last weight's value can be "infinity". For example [{"value": "10", "unit": "kg"}, {"value": "50", "unit": "kg"}, {"value": "infinity", "unit": "kg"}] represents the headers "<= 10kg", " 50kg". All weights within a service must have the same unit. Must be non-empty. Can only be set if all other fields are not set.
    * items [Weight](#weight)

### Installment
* Installment `object`
  * amount [Price](#price)
  * months `string`: The number of installments the buyer has to pay.

### Inventory
* Inventory `object`
  * availability `string`: The availability of the product.
  * installment [Installment](#installment)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#inventory".
  * loyaltyPoints [LoyaltyPoints](#loyaltypoints)
  * pickup [InventoryPickup](#inventorypickup)
  * price [Price](#price)
  * quantity `integer`: The quantity of the product. Must be equal to or greater than zero. Supported only for local products.
  * salePrice [Price](#price)
  * salePriceEffectiveDate `string`: A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided.
  * sellOnGoogleQuantity `integer`: The quantity of the product that is reserved for sell-on-google ads. Supported only for online products.

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
  * storeCode `string`: The code of the store for which to update price and availability. Use online to update price and availability of an online product.

### InventoryCustomBatchResponse
* InventoryCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [InventoryCustomBatchResponseEntry](#inventorycustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#inventoryCustomBatchResponse".

### InventoryCustomBatchResponseEntry
* InventoryCustomBatchResponseEntry `object`: A batch entry encoding a single non-batch inventory response.
  * batchId `integer`: The ID of the request entry this entry responds to.
  * errors [Errors](#errors)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#inventoryCustomBatchResponseEntry".

### InventoryPickup
* InventoryPickup `object`
  * pickupMethod `string`: Whether store pickup is available for this offer and whether the pickup option should be shown as buy, reserve, or not supported. Only supported for local inventory. Unless the value is "not supported", must be submitted together with pickupSla.
  * pickupSla `string`: The expected date that an order will be ready for pickup, relative to when the order is placed. Only supported for local inventory. Must be submitted together with pickupMethod.

### InventorySetRequest
* InventorySetRequest `object`
  * availability `string`: The availability of the product.
  * installment [Installment](#installment)
  * loyaltyPoints [LoyaltyPoints](#loyaltypoints)
  * pickup [InventoryPickup](#inventorypickup)
  * price [Price](#price)
  * quantity `integer`: The quantity of the product. Must be equal to or greater than zero. Supported only for local products.
  * salePrice [Price](#price)
  * salePriceEffectiveDate `string`: A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided.
  * sellOnGoogleQuantity `integer`: The quantity of the product that is reserved for sell-on-google ads. Supported only for online products.

### InventorySetResponse
* InventorySetResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#inventorySetResponse".

### LocationIdSet
* LocationIdSet `object`
  * locationIds `array`: A non-empty list of location IDs. They must all be of the same location type (e.g., state).
    * items `string`

### LoyaltyPoints
* LoyaltyPoints `object`
  * name `string`: Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters.
  * pointsValue `string`: The retailer's loyalty points in absolute value.
  * ratio `number`: The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0.

### Order
* Order `object`
  * acknowledged `boolean`: Whether the order was acknowledged.
  * channelType `string`: The channel type of the order: "purchaseOnGoogle" or "googleExpress".
  * customer [OrderCustomer](#ordercustomer)
  * deliveryDetails [OrderDeliveryDetails](#orderdeliverydetails)
  * id `string`: The REST id of the order. Globally unique.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#order".
  * lineItems `array`: Line items that are ordered.
    * items [OrderLineItem](#orderlineitem)
  * merchantId `string`
  * merchantOrderId `string`: Merchant-provided id of the order.
  * netAmount [Price](#price)
  * paymentMethod [OrderPaymentMethod](#orderpaymentmethod)
  * paymentStatus `string`: The status of the payment.
  * placedDate `string`: The date when the order was placed, in ISO 8601 format.
  * promotions `array`: The details of the merchant provided promotions applied to the order. More details about the program are here.
    * items [OrderPromotion](#orderpromotion)
  * refunds `array`: Refunds for the order.
    * items [OrderRefund](#orderrefund)
  * shipments `array`: Shipments of the order.
    * items [OrderShipment](#ordershipment)
  * shippingCost [Price](#price)
  * shippingCostTax [Price](#price)
  * shippingOption `string`: The requested shipping option.
  * status `string`: The status of the order.

### OrderAddress
* OrderAddress `object`
  * country `string`: CLDR country code (e.g. "US").
  * fullAddress `array`: Strings representing the lines of the printed label for mailing the order, for example:
    * items `string`
  * isPostOfficeBox `boolean`: Whether the address is a post office box.
  * locality `string`: City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
  * postalCode `string`: Postal Code or ZIP (e.g. "94043").
  * recipientName `string`: Name of the recipient.
  * region `string`: Top-level administrative subdivision of the country (e.g. "CA").
  * streetAddress `array`: Street-level part of the address.
    * items `string`

### OrderCancellation
* OrderCancellation `object`
  * actor `string`: The actor that created the cancellation.
  * creationDate `string`: Date on which the cancellation has been created, in ISO 8601 format.
  * quantity `integer`: The quantity that was canceled.
  * reason `string`: The reason for the cancellation. Orders that are cancelled with a noInventory reason will lead to the removal of the product from POG until you make an update to that product. This will not affect your Shopping ads.
  * reasonText `string`: The explanation of the reason.

### OrderCustomer
* OrderCustomer `object`
  * email `string`: Email address of the customer.
  * explicitMarketingPreference `boolean`: If set, this indicates the user explicitly chose to opt in or out of providing marketing rights to the merchant. If unset, this indicates the user has already made this choice in a previous purchase, and was thus not shown the marketing right opt in/out checkbox during the checkout flow.
  * fullName `string`: Full name of the customer.

### OrderDeliveryDetails
* OrderDeliveryDetails `object`
  * address [OrderAddress](#orderaddress)
  * phoneNumber `string`: The phone number of the person receiving the delivery.

### OrderLineItem
* OrderLineItem `object`
  * cancellations `array`: Cancellations of the line item.
    * items [OrderCancellation](#ordercancellation)
  * channelType `string`: The channel type of the order: "purchaseOnGoogle" or "googleExpress".
  * id `string`: The id of the line item.
  * price [Price](#price)
  * product [OrderLineItemProduct](#orderlineitemproduct)
  * quantityCanceled `integer`: Number of items canceled.
  * quantityDelivered `integer`: Number of items delivered.
  * quantityOrdered `integer`: Number of items ordered.
  * quantityPending `integer`: Number of items pending.
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
  * channel `string`: The item's channel (online or local).
  * condition `string`: Condition or state of the item.
  * contentLanguage `string`: The two-letter ISO 639-1 language code for the item.
  * gtin `string`: Global Trade Item Number (GTIN) of the item.
  * id `string`: The REST id of the product.
  * imageLink `string`: URL of an image of the item.
  * itemGroupId `string`: Shared identifier for all variants of the same product.
  * mpn `string`: Manufacturer Part Number (MPN) of the item.
  * offerId `string`: An identifier of the item.
  * price [Price](#price)
  * shownImage `string`: URL to the cached image shown to the user when order was placed.
  * targetCountry `string`: The CLDR territory code of the target country of the product.
  * title `string`: The title of the product.
  * variantAttributes `array`: Variant attributes for the item. These are dimensions of the product, such as color, gender, material, pattern, and size. You can find a comprehensive list of variant attributes here.
    * items [OrderLineItemProductVariantAttribute](#orderlineitemproductvariantattribute)

### OrderLineItemProductVariantAttribute
* OrderLineItemProductVariantAttribute `object`
  * dimension `string`: The dimension of the variant.
  * value `string`: The value for the dimension.

### OrderLineItemReturnInfo
* OrderLineItemReturnInfo `object`
  * daysToReturn `integer`: How many days later the item can be returned.
  * isReturnable `boolean`: Whether the item is returnable.
  * policyUrl `string`: URL of the item return policy.

### OrderLineItemShippingDetails
* OrderLineItemShippingDetails `object`
  * deliverByDate `string`: The delivery by date, in ISO 8601 format.
  * method [OrderLineItemShippingDetailsMethod](#orderlineitemshippingdetailsmethod)
  * shipByDate `string`: The ship by date, in ISO 8601 format.

### OrderLineItemShippingDetailsMethod
* OrderLineItemShippingDetailsMethod `object`
  * carrier `string`: The carrier for the shipping. Optional. See shipments[].carrier for a list of acceptable values.
  * maxDaysInTransit `integer`: Maximum transit time.
  * methodName `string`: The name of the shipping method.
  * minDaysInTransit `integer`: Minimum transit time.

### OrderPaymentMethod
* OrderPaymentMethod `object`
  * billingAddress [OrderAddress](#orderaddress)
  * expirationMonth `integer`: The card expiration month (January = 1, February = 2 etc.).
  * expirationYear `integer`: The card expiration year (4-digit, e.g. 2015).
  * lastFourDigits `string`: The last four digits of the card number.
  * phoneNumber `string`: The billing phone number.
  * type `string`: The type of instrument.

### OrderPromotion
* OrderPromotion `object`
  * benefits `array`
    * items [OrderPromotionBenefit](#orderpromotionbenefit)
  * effectiveDates `string`: The date and time frame when the promotion is active and ready for validation review. Note that the promotion live time may be delayed for a few hours due to the validation review.
  * genericRedemptionCode `string`: Optional. The text code that corresponds to the promotion when applied on the retailer?s website.
  * id `string`: The unique ID of the promotion.
  * longTitle `string`: The full title of the promotion.
  * productApplicability `string`: Whether the promotion is applicable to all products or only specific products.
  * redemptionChannel `string`: Indicates that the promotion is valid online.

### OrderPromotionBenefit
* OrderPromotionBenefit `object`
  * discount [Price](#price)
  * offerIds `array`: The OfferId(s) that were purchased in this order and map to this specific benefit of the promotion.
    * items `string`
  * subType `string`: Further describes the benefit of the promotion. Note that we will expand on this enumeration as we support new promotion sub-types.
  * taxImpact [Price](#price)
  * type `string`: Describes whether the promotion applies to products (e.g. 20% off) or to shipping (e.g. Free Shipping).

### OrderRefund
* OrderRefund `object`
  * actor `string`: The actor that created the refund.
  * amount [Price](#price)
  * creationDate `string`: Date on which the item has been created, in ISO 8601 format.
  * reason `string`: The reason for the refund.
  * reasonText `string`: The explanation of the reason.

### OrderReturn
* OrderReturn `object`
  * actor `string`: The actor that created the refund.
  * creationDate `string`: Date on which the item has been created, in ISO 8601 format.
  * quantity `integer`: Quantity that is returned.
  * reason `string`: The reason for the return.
  * reasonText `string`: The explanation of the reason.

### OrderShipment
* OrderShipment `object`
  * carrier `string`: The carrier handling the shipment.
  * creationDate `string`: Date on which the shipment has been created, in ISO 8601 format.
  * deliveryDate `string`: Date on which the shipment has been delivered, in ISO 8601 format. Present only if status is delievered
  * id `string`: The id of the shipment.
  * lineItems `array`: The line items that are shipped.
    * items [OrderShipmentLineItemShipment](#ordershipmentlineitemshipment)
  * status `string`: The status of the shipment.
  * trackingId `string`: The tracking id for the shipment.

### OrderShipmentLineItemShipment
* OrderShipmentLineItemShipment `object`
  * lineItemId `string`: The id of the line item that is shipped.
  * quantity `integer`: The quantity that is shipped.

### OrdersAcknowledgeRequest
* OrdersAcknowledgeRequest `object`
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.

### OrdersAcknowledgeResponse
* OrdersAcknowledgeResponse `object`
  * executionStatus `string`: The status of the execution.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersAcknowledgeResponse".

### OrdersAdvanceTestOrderResponse
* OrdersAdvanceTestOrderResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersAdvanceTestOrderResponse".

### OrdersCancelLineItemRequest
* OrdersCancelLineItemRequest `object`
  * amount [Price](#price)
  * lineItemId `string`: The ID of the line item to cancel.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * quantity `integer`: The quantity to cancel.
  * reason `string`: The reason for the cancellation.
  * reasonText `string`: The explanation of the reason.

### OrdersCancelLineItemResponse
* OrdersCancelLineItemResponse `object`
  * executionStatus `string`: The status of the execution.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelLineItemResponse".

### OrdersCancelRequest
* OrdersCancelRequest `object`
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * reason `string`: The reason for the cancellation.
  * reasonText `string`: The explanation of the reason.

### OrdersCancelResponse
* OrdersCancelResponse `object`
  * executionStatus `string`: The status of the execution.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelResponse".

### OrdersCreateTestOrderRequest
* OrdersCreateTestOrderRequest `object`
  * templateName `string`: The test order template to use. Specify as an alternative to testOrder as a shortcut for retrieving a template and then creating an order using that template.
  * testOrder [TestOrder](#testorder)

### OrdersCreateTestOrderResponse
* OrdersCreateTestOrderResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestOrderResponse".
  * orderId `string`: The ID of the newly created test order.

### OrdersCustomBatchRequest
* OrdersCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [OrdersCustomBatchRequestEntry](#orderscustombatchrequestentry)

### OrdersCustomBatchRequestEntry
* OrdersCustomBatchRequestEntry `object`
  * batchId `integer`: An entry ID, unique within the batch request.
  * cancel [OrdersCustomBatchRequestEntryCancel](#orderscustombatchrequestentrycancel)
  * cancelLineItem [OrdersCustomBatchRequestEntryCancelLineItem](#orderscustombatchrequestentrycancellineitem)
  * merchantId `string`: The ID of the managing account.
  * merchantOrderId `string`: The merchant order id. Required for updateMerchantOrderId and getByMerchantOrderId methods.
  * method `string`: The method to apply.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order. Required for all methods beside get and getByMerchantOrderId.
  * orderId `string`: The ID of the order. Required for all methods beside getByMerchantOrderId.
  * refund [OrdersCustomBatchRequestEntryRefund](#orderscustombatchrequestentryrefund)
  * returnLineItem [OrdersCustomBatchRequestEntryReturnLineItem](#orderscustombatchrequestentryreturnlineitem)
  * shipLineItems [OrdersCustomBatchRequestEntryShipLineItems](#orderscustombatchrequestentryshiplineitems)
  * updateShipment [OrdersCustomBatchRequestEntryUpdateShipment](#orderscustombatchrequestentryupdateshipment)

### OrdersCustomBatchRequestEntryCancel
* OrdersCustomBatchRequestEntryCancel `object`
  * reason `string`: The reason for the cancellation.
  * reasonText `string`: The explanation of the reason.

### OrdersCustomBatchRequestEntryCancelLineItem
* OrdersCustomBatchRequestEntryCancelLineItem `object`
  * amount [Price](#price)
  * lineItemId `string`: The ID of the line item to cancel.
  * quantity `integer`: The quantity to cancel.
  * reason `string`: The reason for the cancellation.
  * reasonText `string`: The explanation of the reason.

### OrdersCustomBatchRequestEntryRefund
* OrdersCustomBatchRequestEntryRefund `object`
  * amount [Price](#price)
  * reason `string`: The reason for the refund.
  * reasonText `string`: The explanation of the reason.

### OrdersCustomBatchRequestEntryReturnLineItem
* OrdersCustomBatchRequestEntryReturnLineItem `object`
  * lineItemId `string`: The ID of the line item to return.
  * quantity `integer`: The quantity to return.
  * reason `string`: The reason for the return.
  * reasonText `string`: The explanation of the reason.

### OrdersCustomBatchRequestEntryShipLineItems
* OrdersCustomBatchRequestEntryShipLineItems `object`
  * carrier `string`: Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See shipments[].carrier in the  Orders resource representation for a list of acceptable values.
  * lineItems `array`: Line items to ship.
    * items [OrderShipmentLineItemShipment](#ordershipmentlineitemshipment)
  * shipmentId `string`: Deprecated. Please use shipmentInfo instead. The ID of the shipment.
  * shipmentInfos `array`: Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs).
    * items [OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo](#orderscustombatchrequestentryshiplineitemsshipmentinfo)
  * trackingId `string`: Deprecated. Please use shipmentInfo instead. The tracking id for the shipment.

### OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo
* OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo `object`
  * carrier `string`: The carrier handling the shipment. See shipments[].carrier in the  Orders resource representation for a list of acceptable values.
  * shipmentId `string`: The ID of the shipment.
  * trackingId `string`: The tracking id for the shipment.

### OrdersCustomBatchRequestEntryUpdateShipment
* OrdersCustomBatchRequestEntryUpdateShipment `object`
  * carrier `string`: The carrier handling the shipment. Not updated if missing. See shipments[].carrier in the  Orders resource representation for a list of acceptable values.
  * shipmentId `string`: The ID of the shipment.
  * status `string`: New status for the shipment. Not updated if missing.
  * trackingId `string`: The tracking id for the shipment. Not updated if missing.

### OrdersCustomBatchResponse
* OrdersCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [OrdersCustomBatchResponseEntry](#orderscustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponse".

### OrdersCustomBatchResponseEntry
* OrdersCustomBatchResponseEntry `object`
  * batchId `integer`: The ID of the request entry this entry responds to.
  * errors [Errors](#errors)
  * executionStatus `string`: The status of the execution. Only defined if the method is not get or getByMerchantOrderId and if the request was successful.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponseEntry".
  * order [Order](#order)

### OrdersGetByMerchantOrderIdResponse
* OrdersGetByMerchantOrderIdResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersGetByMerchantOrderIdResponse".
  * order [Order](#order)

### OrdersGetTestOrderTemplateResponse
* OrdersGetTestOrderTemplateResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersGetTestOrderTemplateResponse".
  * template [TestOrder](#testorder)

### OrdersListResponse
* OrdersListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of orders.
  * resources `array`
    * items [Order](#order)

### OrdersRefundRequest
* OrdersRefundRequest `object`
  * amount [Price](#price)
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * reason `string`: The reason for the refund.
  * reasonText `string`: The explanation of the reason.

### OrdersRefundResponse
* OrdersRefundResponse `object`
  * executionStatus `string`: The status of the execution.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersRefundResponse".

### OrdersReturnLineItemRequest
* OrdersReturnLineItemRequest `object`
  * lineItemId `string`: The ID of the line item to return.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * quantity `integer`: The quantity to return.
  * reason `string`: The reason for the return.
  * reasonText `string`: The explanation of the reason.

### OrdersReturnLineItemResponse
* OrdersReturnLineItemResponse `object`
  * executionStatus `string`: The status of the execution.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnLineItemResponse".

### OrdersShipLineItemsRequest
* OrdersShipLineItemsRequest `object`
  * carrier `string`: Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See shipments[].carrier in the  Orders resource representation for a list of acceptable values.
  * lineItems `array`: Line items to ship.
    * items [OrderShipmentLineItemShipment](#ordershipmentlineitemshipment)
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * shipmentId `string`: Deprecated. Please use shipmentInfo instead. The ID of the shipment.
  * shipmentInfos `array`: Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs).
    * items [OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo](#orderscustombatchrequestentryshiplineitemsshipmentinfo)
  * trackingId `string`: Deprecated. Please use shipmentInfo instead. The tracking id for the shipment.

### OrdersShipLineItemsResponse
* OrdersShipLineItemsResponse `object`
  * executionStatus `string`: The status of the execution.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersShipLineItemsResponse".

### OrdersUpdateMerchantOrderIdRequest
* OrdersUpdateMerchantOrderIdRequest `object`
  * merchantOrderId `string`: The merchant order id to be assigned to the order. Must be unique per merchant.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.

### OrdersUpdateMerchantOrderIdResponse
* OrdersUpdateMerchantOrderIdResponse `object`
  * executionStatus `string`: The status of the execution.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateMerchantOrderIdResponse".

### OrdersUpdateShipmentRequest
* OrdersUpdateShipmentRequest `object`
  * carrier `string`: The carrier handling the shipment. Not updated if missing. See shipments[].carrier in the  Orders resource representation for a list of acceptable values.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * shipmentId `string`: The ID of the shipment.
  * status `string`: New status for the shipment. Not updated if missing.
  * trackingId `string`: The tracking id for the shipment. Not updated if missing.

### OrdersUpdateShipmentResponse
* OrdersUpdateShipmentResponse `object`
  * executionStatus `string`: The status of the execution.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateShipmentResponse".

### PostalCodeGroup
* PostalCodeGroup `object`
  * country `string`: The CLDR territory code of the country the postal code group applies to. Required.
  * name `string`: The name of the postal code group, referred to in headers. Required.
  * postalCodeRanges `array`: A range of postal codes. Required.
    * items [PostalCodeRange](#postalcoderange)

### PostalCodeRange
* PostalCodeRange `object`
  * postalCodeRangeBegin `string`: A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: "94108", "9410*", "9*". Required.
  * postalCodeRangeEnd `string`: A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area. It must have the same length as postalCodeRangeBegin: if postalCodeRangeBegin is a postal code then postalCodeRangeEnd must be a postal code too; if postalCodeRangeBegin is a pattern then postalCodeRangeEnd must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching postalCodeRangeBegin.

### Price
* Price `object`
  * currency `string`: The currency of the price.
  * value `string`: The price represented as a number.

### Product
* Product `object`: Product data.
  * additionalImageLinks `array`: Additional URLs of images of the item.
    * items `string`
  * additionalProductTypes `array`: Additional categories of the item (formatted as in products feed specification).
    * items `string`
  * adult `boolean`: Set to true if the item is targeted towards adults.
  * adwordsGrouping `string`: Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise.
  * adwordsLabels `array`: Similar to adwords_grouping, but only works on CPC.
    * items `string`
  * adwordsRedirect `string`: Allows advertisers to override the item URL when the product is shown within the context of Product Ads.
  * ageGroup `string`: Target age group of the item.
  * aspects `array`: Specifies the intended aspects for the product.
    * items [ProductAspect](#productaspect)
  * availability `string`: Availability status of the item.
  * availabilityDate `string`: The day a pre-ordered product becomes available for delivery, in ISO 8601 format.
  * brand `string`: Brand of the item.
  * channel `string`: The item's channel (online or local).
  * color `string`: Color of the item.
  * condition `string`: Condition or state of the item.
  * contentLanguage `string`: The two-letter ISO 639-1 language code for the item.
  * customAttributes `array`: A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (e.g., { "name": "size type", "type": "text", "value": "regular" }). This is useful for submitting attributes not explicitly exposed by the API.
    * items [ProductCustomAttribute](#productcustomattribute)
  * customGroups `array`: A list of custom (merchant-provided) custom attribute groups.
    * items [ProductCustomGroup](#productcustomgroup)
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
  * energyEfficiencyClass `string`: The energy efficiency class as defined in EU directive 2010/30/EU.
  * expirationDate `string`: Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in productstatuses as googleExpirationDate and might be earlier if expirationDate is too far in the future.
  * gender `string`: Target gender of the item.
  * googleProductCategory `string`: Google's category of the item (see Google product taxonomy).
  * gtin `string`: Global Trade Item Number (GTIN) of the item.
  * id `string`: The REST id of the product. Content API methods that operate on products take this as their productId parameter.
  * identifierExists `boolean`: False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada.
  * imageLink `string`: URL of an image of the item.
  * installment [Installment](#installment)
  * isBundle `boolean`: Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price.
  * itemGroupId `string`: Shared identifier for all variants of the same product.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#product".
  * link `string`: URL directly linking to your item's page on your website.
  * loyaltyPoints [LoyaltyPoints](#loyaltypoints)
  * material `string`: The material of which the item is made.
  * maxHandlingTime `string`: Maximal product handling time (in business days).
  * minHandlingTime `string`: Minimal product handling time (in business days).
  * mobileLink `string`: Link to a mobile-optimized version of the landing page.
  * mpn `string`: Manufacturer Part Number (MPN) of the item.
  * multipack `string`: The number of identical products in a merchant-defined multipack.
  * offerId `string`: A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details.
  * onlineOnly `boolean`: Whether an item is available for purchase only online.
  * pattern `string`: The item's pattern (e.g. polka dots).
  * price [Price](#price)
  * productType `string`: Your category of the item (formatted as in products feed specification).
  * promotionIds `array`: The unique ID of a promotion.
    * items `string`
  * salePrice [Price](#price)
  * salePriceEffectiveDate `string`: Date range during which the item is on sale (see products feed specification).
  * sellOnGoogleQuantity `string`: The quantity of the product that is reserved for sell-on-google ads.
  * shipping `array`: Shipping rules.
    * items [ProductShipping](#productshipping)
  * shippingHeight [ProductShippingDimension](#productshippingdimension)
  * shippingLabel `string`: The shipping label of the product, used to group product in account-level shipping rules.
  * shippingLength [ProductShippingDimension](#productshippingdimension)
  * shippingWeight [ProductShippingWeight](#productshippingweight)
  * shippingWidth [ProductShippingDimension](#productshippingdimension)
  * sizeSystem `string`: System in which the size is specified. Recommended for apparel items.
  * sizeType `string`: The cut of the item. Recommended for apparel items.
  * sizes `array`: Size of the item.
    * items `string`
  * targetCountry `string`: The CLDR territory code for the item.
  * taxes `array`: Tax information.
    * items [ProductTax](#producttax)
  * title `string`: Title of the item.
  * unitPricingBaseMeasure [ProductUnitPricingBaseMeasure](#productunitpricingbasemeasure)
  * unitPricingMeasure [ProductUnitPricingMeasure](#productunitpricingmeasure)
  * validatedDestinations `array`: The read-only list of intended destinations which passed validation.
    * items `string`
  * warnings `array`: Read-only warnings.
    * items [Error](#error)

### ProductAspect
* ProductAspect `object`
  * aspectName `string`: The name of the aspect.
  * destinationName `string`: The name of the destination. Leave out to apply to all destinations.
  * intention `string`: Whether the aspect is required, excluded or should be validated.

### ProductCustomAttribute
* ProductCustomAttribute `object`
  * name `string`: The name of the attribute. Underscores will be replaced by spaces upon insertion.
  * type `string`: The type of the attribute.
  * unit `string`: Free-form unit of the attribute. Unit can only be used for values of type INT or FLOAT.
  * value `string`: The value of the attribute.

### ProductCustomGroup
* ProductCustomGroup `object`
  * attributes `array`: The sub-attributes.
    * items [ProductCustomAttribute](#productcustomattribute)
  * name `string`: The name of the group. Underscores will be replaced by spaces upon insertion.

### ProductDestination
* ProductDestination `object`
  * destinationName `string`: The name of the destination.
  * intention `string`: Whether the destination is required, excluded or should be validated.

### ProductShipping
* ProductShipping `object`
  * country `string`: The CLDR territory code of the country to which an item will ship.
  * locationGroupName `string`: The location where the shipping is applicable, represented by a location group name.
  * locationId `string`: The numeric id of a location that the shipping rate applies to as defined in the AdWords API.
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
* ProductStatus `object`: The status of a product, i.e., information about a product computed asynchronously by the data quality analysis.
  * creationDate `string`: Date on which the item has been created, in ISO 8601 format.
  * dataQualityIssues `array`: A list of data quality issues associated with the product.
    * items [ProductStatusDataQualityIssue](#productstatusdataqualityissue)
  * destinationStatuses `array`: The intended destinations for the product.
    * items [ProductStatusDestinationStatus](#productstatusdestinationstatus)
  * googleExpirationDate `string`: Date on which the item expires in Google Shopping, in ISO 8601 format.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#productStatus".
  * lastUpdateDate `string`: Date on which the item has been last updated, in ISO 8601 format.
  * link `string`: The link to the product.
  * product [Product](#product)
  * productId `string`: The id of the product for which status is reported.
  * title `string`: The title of the product.

### ProductStatusDataQualityIssue
* ProductStatusDataQualityIssue `object`
  * detail `string`: A more detailed error string.
  * fetchStatus `string`: The fetch status for landing_page_errors.
  * id `string`: The id of the data quality issue.
  * location `string`: The attribute name that is relevant for the issue.
  * severity `string`: The severity of the data quality issue.
  * timestamp `string`: The time stamp of the data quality issue.
  * valueOnLandingPage `string`: The value of that attribute that was found on the landing page
  * valueProvided `string`: The value the attribute had at time of evaluation.

### ProductStatusDestinationStatus
* ProductStatusDestinationStatus `object`
  * approvalStatus `string`: The destination's approval status.
  * destination `string`: The name of the destination
  * intention `string`: Whether the destination is required, excluded, selected by default or should be validated.

### ProductTax
* ProductTax `object`
  * country `string`: The country within which the item is taxed, specified as a CLDR territory code.
  * locationId `string`: The numeric id of a location that the tax rate applies to as defined in the AdWords API.
  * postalCode `string`: The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using * wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460, 94*-95*.
  * rate `number`: The percentage of tax rate that applies to the item price.
  * region `string`: The geographic region to which the tax rate applies.
  * taxShip `boolean`: Set to true if tax is charged on shipping.

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
  * method `string`
  * product [Product](#product)
  * productId `string`: The ID of the product to get or delete. Only defined if the method is get or delete.

### ProductsCustomBatchResponse
* ProductsCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [ProductsCustomBatchResponseEntry](#productscustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#productsCustomBatchResponse".

### ProductsCustomBatchResponseEntry
* ProductsCustomBatchResponseEntry `object`: A batch entry encoding a single non-batch products response.
  * batchId `integer`: The ID of the request entry this entry responds to.
  * errors [Errors](#errors)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#productsCustomBatchResponseEntry".
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
  * includeAttributes `boolean`
  * merchantId `string`: The ID of the managing account.
  * method `string`
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
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#productstatusesCustomBatchResponseEntry".
  * productStatus [ProductStatus](#productstatus)

### ProductstatusesListResponse
* ProductstatusesListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#productstatusesListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of products statuses.
  * resources `array`
    * items [ProductStatus](#productstatus)

### RateGroup
* RateGroup `object`
  * applicableShippingLabels `array`: A list of shipping labels defining the products to which this rate group applies to. This is a disjunction: only one of the labels has to match for the rate group to apply. May only be empty for the last rate group of a service. Required.
    * items `string`
  * carrierRates `array`: A list of carrier rates that can be referred to by mainTable or singleValue.
    * items [CarrierRate](#carrierrate)
  * mainTable [Table](#table)
  * singleValue [Value](#value)
  * subtables `array`: A list of subtables referred to by mainTable. Can only be set if mainTable is set.
    * items [Table](#table)

### Row
* Row `object`
  * cells `array`: The list of cells that constitute the row. Must have the same length as columnHeaders for two-dimensional tables, a length of 1 for one-dimensional tables. Required.
    * items [Value](#value)

### Service
* Service `object`
  * active `boolean`: A boolean exposing the active status of the shipping service. Required.
  * currency `string`: The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups.
  * deliveryCountry `string`: The CLDR territory code of the country to which the service applies. Required.
  * deliveryTime [DeliveryTime](#deliverytime)
  * minimumOrderValue [Price](#price)
  * name `string`: Free-form name of the service. Must be unique within target account. Required.
  * rateGroups `array`: Shipping rate group definitions. Only the last one is allowed to have an empty applicableShippingLabels, which means "everything else". The other applicableShippingLabels must not overlap.
    * items [RateGroup](#rategroup)

### ShippingSettings
* ShippingSettings `object`: The merchant account's shipping settings.
  * accountId `string`: The ID of the account to which these account shipping settings belong. Ignored upon update, always present in get request responses.
  * postalCodeGroups `array`: A list of postal code groups that can be referred to in services. Optional.
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
  * method `string`
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
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsCustomBatchResponseEntry".
  * shippingSettings [ShippingSettings](#shippingsettings)

### ShippingsettingsGetSupportedCarriersResponse
* ShippingsettingsGetSupportedCarriersResponse `object`
  * carriers `array`: A list of supported carriers. May be empty.
    * items [CarriersCarrier](#carrierscarrier)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedCarriersResponse".

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
  * rows `array`: The list of rows that constitute the table. Must have the same length as rowHeaders. Required.
    * items [Row](#row)

### TestOrder
* TestOrder `object`
  * customer [TestOrderCustomer](#testordercustomer)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#testOrder".
  * lineItems `array`: Line items that are ordered. At least one line item must be provided.
    * items [TestOrderLineItem](#testorderlineitem)
  * paymentMethod [TestOrderPaymentMethod](#testorderpaymentmethod)
  * predefinedDeliveryAddress `string`: Identifier of one of the predefined delivery addresses for the delivery.
  * promotions `array`: The details of the merchant provided promotions applied to the order. More details about the program are here.
    * items [OrderPromotion](#orderpromotion)
  * shippingCost [Price](#price)
  * shippingCostTax [Price](#price)
  * shippingOption `string`: The requested shipping option.

### TestOrderCustomer
* TestOrderCustomer `object`
  * email `string`: Email address of the customer.
  * explicitMarketingPreference `boolean`: If set, this indicates the user explicitly chose to opt in or out of providing marketing rights to the merchant. If unset, this indicates the user has already made this choice in a previous purchase, and was thus not shown the marketing right opt in/out checkbox during the checkout flow. Optional.
  * fullName `string`: Full name of the customer.

### TestOrderLineItem
* TestOrderLineItem `object`
  * product [TestOrderLineItemProduct](#testorderlineitemproduct)
  * quantityOrdered `integer`: Number of items ordered.
  * returnInfo [OrderLineItemReturnInfo](#orderlineitemreturninfo)
  * shippingDetails [OrderLineItemShippingDetails](#orderlineitemshippingdetails)
  * unitTax [Price](#price)

### TestOrderLineItemProduct
* TestOrderLineItemProduct `object`
  * brand `string`: Brand of the item.
  * channel `string`: The item's channel.
  * condition `string`: Condition or state of the item.
  * contentLanguage `string`: The two-letter ISO 639-1 language code for the item.
  * gtin `string`: Global Trade Item Number (GTIN) of the item. Optional.
  * imageLink `string`: URL of an image of the item.
  * itemGroupId `string`: Shared identifier for all variants of the same product. Optional.
  * mpn `string`: Manufacturer Part Number (MPN) of the item. Optional.
  * offerId `string`: An identifier of the item.
  * price [Price](#price)
  * targetCountry `string`: The CLDR territory code of the target country of the product.
  * title `string`: The title of the product.
  * variantAttributes `array`: Variant attributes for the item. Optional.
    * items [OrderLineItemProductVariantAttribute](#orderlineitemproductvariantattribute)

### TestOrderPaymentMethod
* TestOrderPaymentMethod `object`
  * expirationMonth `integer`: The card expiration month (January = 1, February = 2 etc.).
  * expirationYear `integer`: The card expiration year (4-digit, e.g. 2015).
  * lastFourDigits `string`: The last four digits of the card number.
  * predefinedBillingAddress `string`: The billing address.
  * type `string`: The type of instrument. Note that real orders might have different values than the four values accepted by createTestOrder.

### Value
* Value `object`: The single value of a rate group or the value of a rate group table's cell. Exactly one of noShipping, flatRate, pricePercentage, carrierRateName, subtableName must be set.
  * carrierRateName `string`: The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set.
  * flatRate [Price](#price)
  * noShipping `boolean`: If true, then the product can't ship. Must be true when set, can only be set if all other fields are not set.
  * pricePercentage `string`: A percentage of the price represented as a number in decimal notation (e.g., "5.4"). Can only be set if all other fields are not set.
  * subtableName `string`: The name of a subtable. Can only be set in table cells (i.e., not for single values), and only if all other fields are not set.

### Weight
* Weight `object`
  * unit `string`: The weight unit.
  * value `string`: The weight represented as a number.


