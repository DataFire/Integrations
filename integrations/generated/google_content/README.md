# @datafire/google_content

Client library for Content API for Shopping

## Installation and Usage
```bash
npm install --save datafire @datafire/google_content
```

```js
let datafire = require('datafire');
let google_content = require('@datafire/google_content').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_content.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### accounts.authinfo
Returns information about the authenticated user.


```js
google_content.accounts.authinfo({}, context)
```

#### Parameters
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.custombatch
Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.


```js
google_content.accounts.custombatch({}, context)
```

#### Parameters
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accountstatuses.custombatch



```js
google_content.accountstatuses.custombatch({}, context)
```

#### Parameters
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounttax.custombatch
Retrieves and updates tax settings of multiple accounts in a single request.


```js
google_content.accounttax.custombatch({}, context)
```

#### Parameters
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datafeeds.custombatch



```js
google_content.datafeeds.custombatch({}, context)
```

#### Parameters
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datafeedstatuses.custombatch



```js
google_content.datafeedstatuses.custombatch({}, context)
```

#### Parameters
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### inventory.custombatch
Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products. This method can only be called for non-multi-client accounts.


```js
google_content.inventory.custombatch({}, context)
```

#### Parameters
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.custombatch
Retrieves or modifies multiple orders in a single request. This method can only be called for non-multi-client accounts.


```js
google_content.orders.custombatch({}, context)
```

#### Parameters
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### products.custombatch
Retrieves, inserts, and deletes multiple products in a single request. This method can only be called for non-multi-client accounts.


```js
google_content.products.custombatch({}, context)
```

#### Parameters
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### productstatuses.custombatch
Gets the statuses of multiple products in a single request. This method can only be called for non-multi-client accounts.


```js
google_content.productstatuses.custombatch({}, context)
```

#### Parameters
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### shippingsettings.custombatch
Retrieves and updates the shipping settings of multiple accounts in a single request.


```js
google_content.shippingsettings.custombatch({}, context)
```

#### Parameters
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.list
Lists the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.


```js
google_content.accounts.list({
  "merchantId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* maxResults (integer) - The maximum number of accounts to return in the response, used for paging.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.insert
Creates a Merchant Center sub-account. This method can only be called for multi-client accounts.


```js
google_content.accounts.insert({
  "merchantId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object) - Account data.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.delete
Deletes a Merchant Center sub-account. This method can only be called for multi-client accounts.


```js
google_content.accounts.delete({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* accountId (string) **required** - The ID of the account.
* dryRun (boolean) - Flag to run the request in dry-run mode.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.get
Retrieves a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.


```js
google_content.accounts.get({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* accountId (string) **required** - The ID of the account.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.patch
Updates a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account. This method supports patch semantics.


```js
google_content.accounts.patch({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* accountId (string) **required** - The ID of the account.
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object) - Account data.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.update
Updates a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.


```js
google_content.accounts.update({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* accountId (string) **required** - The ID of the account.
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object) - Account data.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accountstatuses.list
Lists the statuses of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.


```js
google_content.accountstatuses.list({
  "merchantId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* maxResults (integer) - The maximum number of account statuses to return in the response, used for paging.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accountstatuses.get
Retrieves the status of a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.


```js
google_content.accountstatuses.get({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* accountId (string) **required** - The ID of the account.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounttax.list
Lists the tax settings of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.


```js
google_content.accounttax.list({
  "merchantId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* maxResults (integer) - The maximum number of tax settings to return in the response, used for paging.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounttax.get
Retrieves the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.


```js
google_content.accounttax.get({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* accountId (string) **required** - The ID of the account for which to get/update account tax settings.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounttax.patch
Updates the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account. This method supports patch semantics.


```js
google_content.accounttax.patch({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* accountId (string) **required** - The ID of the account for which to get/update account tax settings.
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object) - The tax settings of a merchant account.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounttax.update
Updates the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.


```js
google_content.accounttax.update({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* accountId (string) **required** - The ID of the account for which to get/update account tax settings.
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object) - The tax settings of a merchant account.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datafeeds.list
Lists the datafeeds in your Merchant Center account. This method can only be called for non-multi-client accounts.


```js
google_content.datafeeds.list({
  "merchantId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* maxResults (integer) - The maximum number of products to return in the response, used for paging.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datafeeds.insert
Registers a datafeed with your Merchant Center account. This method can only be called for non-multi-client accounts.


```js
google_content.datafeeds.insert({
  "merchantId": ""
}, context)
```

#### Parameters
* merchantId (string) **required**
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object) - Datafeed data.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datafeeds.delete
Deletes a datafeed from your Merchant Center account. This method can only be called for non-multi-client accounts.


```js
google_content.datafeeds.delete({
  "merchantId": "",
  "datafeedId": ""
}, context)
```

#### Parameters
* merchantId (string) **required**
* datafeedId (string) **required**
* dryRun (boolean) - Flag to run the request in dry-run mode.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datafeeds.get
Retrieves a datafeed from your Merchant Center account. This method can only be called for non-multi-client accounts.


```js
google_content.datafeeds.get({
  "merchantId": "",
  "datafeedId": ""
}, context)
```

#### Parameters
* merchantId (string) **required**
* datafeedId (string) **required**
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datafeeds.patch
Updates a datafeed of your Merchant Center account. This method can only be called for non-multi-client accounts. This method supports patch semantics.


```js
google_content.datafeeds.patch({
  "merchantId": "",
  "datafeedId": ""
}, context)
```

#### Parameters
* merchantId (string) **required**
* datafeedId (string) **required**
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object) - Datafeed data.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datafeeds.update
Updates a datafeed of your Merchant Center account. This method can only be called for non-multi-client accounts.


```js
google_content.datafeeds.update({
  "merchantId": "",
  "datafeedId": ""
}, context)
```

#### Parameters
* merchantId (string) **required**
* datafeedId (string) **required**
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object) - Datafeed data.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datafeedstatuses.list
Lists the statuses of the datafeeds in your Merchant Center account. This method can only be called for non-multi-client accounts.


```js
google_content.datafeedstatuses.list({
  "merchantId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* maxResults (integer) - The maximum number of products to return in the response, used for paging.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### datafeedstatuses.get
Retrieves the status of a datafeed from your Merchant Center account. This method can only be called for non-multi-client accounts.


```js
google_content.datafeedstatuses.get({
  "merchantId": "",
  "datafeedId": ""
}, context)
```

#### Parameters
* merchantId (string) **required**
* datafeedId (string) **required**
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### inventory.set
Updates price and availability of a product in your Merchant Center account. This operation does not update the expiration date of the product. This method can only be called for non-multi-client accounts.


```js
google_content.inventory.set({
  "merchantId": "",
  "storeCode": "",
  "productId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* storeCode (string) **required** - The code of the store for which to update price and availability. Use online to update price and availability of an online product.
* productId (string) **required** - The ID of the product for which to update price and availability.
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.list
Lists the orders in your Merchant Center account. This method can only be called for non-multi-client accounts.


```js
google_content.orders.list({
  "merchantId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* acknowledged (boolean) - Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged.
* maxResults (integer) - The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page.
* orderBy (string) - The ordering of the returned list. The only supported value are placedDate desc and placedDate asc for now, which returns orders sorted by placement date. "placedDate desc" stands for listing orders by placement date, from oldest to most recent. "placedDate asc" stands for listing orders by placement date, from most recent to oldest. In future releases we'll support other sorting criteria.
* pageToken (string) - The token returned by the previous request.
* placedDateEnd (string) - Obtains orders placed before this date (exclusively), in ISO 8601 format.
* placedDateStart (string) - Obtains orders placed after this date (inclusively), in ISO 8601 format.
* statuses (array) - Obtains orders that match any of the specified statuses. Multiple values can be specified with comma separation. Additionally, please note that active is a shortcut for pendingShipment and partiallyShipped, and completed is a shortcut for shipped , partiallyDelivered, delivered, partiallyReturned, returned, and canceled.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.get
Retrieves an order from your Merchant Center account. This method can only be called for non-multi-client accounts.


```js
google_content.orders.get({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* orderId (string) **required** - The ID of the order.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.acknowledge
Marks an order as acknowledged. This method can only be called for non-multi-client accounts.


```js
google_content.orders.acknowledge({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* orderId (string) **required** - The ID of the order.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.cancel
Cancels all line items in an order, making a full refund. This method can only be called for non-multi-client accounts.


```js
google_content.orders.cancel({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* orderId (string) **required** - The ID of the order to cancel.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.cancellineitem
Cancels a line item, making a full refund. This method can only be called for non-multi-client accounts.


```js
google_content.orders.cancellineitem({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* orderId (string) **required** - The ID of the order.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.refund
Refund a portion of the order, up to the full amount paid. This method can only be called for non-multi-client accounts.


```js
google_content.orders.refund({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* orderId (string) **required** - The ID of the order to refund.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.returnlineitem
Returns a line item. This method can only be called for non-multi-client accounts.


```js
google_content.orders.returnlineitem({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* orderId (string) **required** - The ID of the order.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.shiplineitems
Marks line item(s) as shipped. This method can only be called for non-multi-client accounts.


```js
google_content.orders.shiplineitems({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* orderId (string) **required** - The ID of the order.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.updatemerchantorderid
Updates the merchant order ID for a given order. This method can only be called for non-multi-client accounts.


```js
google_content.orders.updatemerchantorderid({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* orderId (string) **required** - The ID of the order.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.updateshipment
Updates a shipment's status, carrier, and/or tracking ID. This method can only be called for non-multi-client accounts.


```js
google_content.orders.updateshipment({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* orderId (string) **required** - The ID of the order.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.getbymerchantorderid
Retrieves an order using merchant order id. This method can only be called for non-multi-client accounts.


```js
google_content.orders.getbymerchantorderid({
  "merchantId": "",
  "merchantOrderId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* merchantOrderId (string) **required** - The merchant order id to be looked for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### products.list
Lists the products in your Merchant Center account. This method can only be called for non-multi-client accounts.


```js
google_content.products.list({
  "merchantId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* includeInvalidInsertedItems (boolean) - Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
* maxResults (integer) - The maximum number of products to return in the response, used for paging.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### products.insert
Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry. This method can only be called for non-multi-client accounts.


```js
google_content.products.insert({
  "merchantId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object) - Product data.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### products.delete
Deletes a product from your Merchant Center account. This method can only be called for non-multi-client accounts.


```js
google_content.products.delete({
  "merchantId": "",
  "productId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* productId (string) **required** - The ID of the product.
* dryRun (boolean) - Flag to run the request in dry-run mode.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### products.get
Retrieves a product from your Merchant Center account. This method can only be called for non-multi-client accounts.


```js
google_content.products.get({
  "merchantId": "",
  "productId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* productId (string) **required** - The ID of the product.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### productstatuses.list
Lists the statuses of the products in your Merchant Center account. This method can only be called for non-multi-client accounts.


```js
google_content.productstatuses.list({
  "merchantId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* includeInvalidInsertedItems (boolean) - Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
* maxResults (integer) - The maximum number of product statuses to return in the response, used for paging.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### productstatuses.get
Gets the status of a product from your Merchant Center account. This method can only be called for non-multi-client accounts.


```js
google_content.productstatuses.get({
  "merchantId": "",
  "productId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* productId (string) **required** - The ID of the product.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### shippingsettings.list
Lists the shipping settings of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.


```js
google_content.shippingsettings.list({
  "merchantId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* maxResults (integer) - The maximum number of shipping settings to return in the response, used for paging.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### shippingsettings.get
Retrieves the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.


```js
google_content.shippingsettings.get({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* accountId (string) **required** - The ID of the account for which to get/update shipping settings.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### shippingsettings.patch
Updates the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account. This method supports patch semantics.


```js
google_content.shippingsettings.patch({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* accountId (string) **required** - The ID of the account for which to get/update shipping settings.
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object) - The merchant account's shipping settings.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### shippingsettings.update
Updates the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.


```js
google_content.shippingsettings.update({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* accountId (string) **required** - The ID of the account for which to get/update shipping settings.
* dryRun (boolean) - Flag to run the request in dry-run mode.
* body (object) - The merchant account's shipping settings.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### shippingsettings.getsupportedcarriers
Retrieves supported carriers and carrier services for an account.


```js
google_content.shippingsettings.getsupportedcarriers({
  "merchantId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the account for which to retrieve the supported carriers.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.createtestorder
Sandbox only. Creates a test order. This method can only be called for non-multi-client accounts.


```js
google_content.orders.createtestorder({
  "merchantId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.advancetestorder
Sandbox only. Moves a test order from state "inProgress" to state "pendingShipment". This method can only be called for non-multi-client accounts.


```js
google_content.orders.advancetestorder({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* orderId (string) **required** - The ID of the test order to modify.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.gettestordertemplate
Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox. This method can only be called for non-multi-client accounts.


```js
google_content.orders.gettestordertemplate({
  "merchantId": "",
  "templateName": ""
}, context)
```

#### Parameters
* merchantId (string) **required** - The ID of the managing account.
* templateName (string) **required** - The name of the template to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

