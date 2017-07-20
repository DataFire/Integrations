# @datafire/google_adexchangebuyer

Client library for Ad Exchange Buyer

## Installation and Usage
```bash
npm install --save datafire @datafire/google_adexchangebuyer
```

```js
let datafire = require('datafire');
let google_adexchangebuyer = require('@datafire/google_adexchangebuyer').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_adexchangebuyer: account,
  }
})


google_adexchangebuyer.proposals.search({}, context).then(data => {
  console.log(data);
})
```

## Description
Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_adexchangebuyer.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_adexchangebuyer.oauthRefresh(null, context)
```


### accounts.list
Retrieves the authenticated user's list of accounts.


```js
google_adexchangebuyer.accounts.list({}, context)
```


### accounts.get
Gets one account by ID.


```js
google_adexchangebuyer.accounts.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The account id
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.patch
Updates an existing account. This method supports patch semantics.


```js
google_adexchangebuyer.accounts.patch({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The account id
* confirmUnsafeAccountChange (boolean) - Confirmation for erasing bidder and cookie matching urls.
* body (object) - Configuration data for an Ad Exchange buyer account.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.update
Updates an existing account.


```js
google_adexchangebuyer.accounts.update({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - The account id
* confirmUnsafeAccountChange (boolean) - Confirmation for erasing bidder and cookie matching urls.
* body (object) - Configuration data for an Ad Exchange buyer account.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### billingInfo.list
Retrieves a list of billing information for all accounts of the authenticated user.


```js
google_adexchangebuyer.billingInfo.list({}, context)
```


### billingInfo.get
Returns the billing information for one account specified by account ID.


```js
google_adexchangebuyer.billingInfo.get({
  "accountId": 0
}, context)
```

#### Parameters
* accountId (integer) **required** - The account id.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### budget.get
Returns the budget information for the adgroup specified by the accountId and billingId.


```js
google_adexchangebuyer.budget.get({
  "accountId": "",
  "billingId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account id to get the budget information for.
* billingId (string) **required** - The billing id to get the budget information for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### budget.patch
Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.


```js
google_adexchangebuyer.budget.patch({
  "accountId": "",
  "billingId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account id associated with the budget being updated.
* billingId (string) **required** - The billing id associated with the budget being updated.
* body (object) - The configuration data for Ad Exchange RTB - Budget API.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### budget.update
Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.


```js
google_adexchangebuyer.budget.update({
  "accountId": "",
  "billingId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account id associated with the budget being updated.
* billingId (string) **required** - The billing id associated with the budget being updated.
* body (object) - The configuration data for Ad Exchange RTB - Budget API.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creatives.list
Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.


```js
google_adexchangebuyer.creatives.list({}, context)
```


### creatives.insert
Submit a new creative.


```js
google_adexchangebuyer.creatives.insert({}, context)
```


### creatives.get
Gets the status for a single creative. A creative will be available 30-40 minutes after submission.


```js
google_adexchangebuyer.creatives.get({
  "accountId": 0,
  "buyerCreativeId": ""
}, context)
```

#### Parameters
* accountId (integer) **required** - The id for the account that will serve this creative.
* buyerCreativeId (string) **required** - The buyer-specific id for this creative.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creatives.addDeal
Add a deal id association for the creative.


```js
google_adexchangebuyer.creatives.addDeal({
  "accountId": 0,
  "buyerCreativeId": "",
  "dealId": ""
}, context)
```

#### Parameters
* accountId (integer) **required** - The id for the account that will serve this creative.
* buyerCreativeId (string) **required** - The buyer-specific id for this creative.
* dealId (string) **required** - The id of the deal id to associate with this creative.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creatives.listDeals
Lists the external deal ids associated with the creative.


```js
google_adexchangebuyer.creatives.listDeals({
  "accountId": 0,
  "buyerCreativeId": ""
}, context)
```

#### Parameters
* accountId (integer) **required** - The id for the account that will serve this creative.
* buyerCreativeId (string) **required** - The buyer-specific id for this creative.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creatives.removeDeal
Remove a deal id associated with the creative.


```js
google_adexchangebuyer.creatives.removeDeal({
  "accountId": 0,
  "buyerCreativeId": "",
  "dealId": ""
}, context)
```

#### Parameters
* accountId (integer) **required** - The id for the account that will serve this creative.
* buyerCreativeId (string) **required** - The buyer-specific id for this creative.
* dealId (string) **required** - The id of the deal id to disassociate with this creative.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### performanceReport.list
Retrieves the authenticated user's list of performance metrics.


```js
google_adexchangebuyer.performanceReport.list({
  "accountId": "",
  "endDateTime": "",
  "startDateTime": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account id to get the reports.
* endDateTime (string) **required** - The end time of the report in ISO 8601 timestamp format using UTC.
* startDateTime (string) **required** - The start time of the report in ISO 8601 timestamp format using UTC.
* maxResults (integer) - Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
* pageToken (string) - A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pretargetingConfig.list
Retrieves a list of the authenticated user's pretargeting configurations.


```js
google_adexchangebuyer.pretargetingConfig.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account id to get the pretargeting configs for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pretargetingConfig.insert
Inserts a new pretargeting configuration.


```js
google_adexchangebuyer.pretargetingConfig.insert({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account id to insert the pretargeting config for.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pretargetingConfig.delete
Deletes an existing pretargeting config.


```js
google_adexchangebuyer.pretargetingConfig.delete({
  "accountId": "",
  "configId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account id to delete the pretargeting config for.
* configId (string) **required** - The specific id of the configuration to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pretargetingConfig.get
Gets a specific pretargeting configuration


```js
google_adexchangebuyer.pretargetingConfig.get({
  "accountId": "",
  "configId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account id to get the pretargeting config for.
* configId (string) **required** - The specific id of the configuration to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pretargetingConfig.patch
Updates an existing pretargeting config. This method supports patch semantics.


```js
google_adexchangebuyer.pretargetingConfig.patch({
  "accountId": "",
  "configId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account id to update the pretargeting config for.
* configId (string) **required** - The specific id of the configuration to update.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pretargetingConfig.update
Updates an existing pretargeting config.


```js
google_adexchangebuyer.pretargetingConfig.update({
  "accountId": "",
  "configId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account id to update the pretargeting config for.
* configId (string) **required** - The specific id of the configuration to update.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### marketplaceprivateauction.updateproposal
Update a given private auction proposal


```js
google_adexchangebuyer.marketplaceprivateauction.updateproposal({
  "privateAuctionId": ""
}, context)
```

#### Parameters
* privateAuctionId (string) **required**
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### products.search
Gets the requested product.


```js
google_adexchangebuyer.products.search({}, context)
```


### products.get
Gets the requested product by id.


```js
google_adexchangebuyer.products.get({
  "productId": ""
}, context)
```

#### Parameters
* productId (string) **required** - The id for the product to get the head revision for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### proposals.insert
Create the given list of proposals


```js
google_adexchangebuyer.proposals.insert({}, context)
```


### proposals.search
Search for proposals using pql query


```js
google_adexchangebuyer.proposals.search({}, context)
```


### proposals.get
Get a proposal given its id


```js
google_adexchangebuyer.proposals.get({
  "proposalId": ""
}, context)
```

#### Parameters
* proposalId (string) **required** - Id of the proposal to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### marketplacedeals.list
List all the deals for a given proposal


```js
google_adexchangebuyer.marketplacedeals.list({
  "proposalId": ""
}, context)
```

#### Parameters
* proposalId (string) **required** - The proposalId to get deals for. To search across all proposals specify order_id = '-' as part of the URL.
* pqlQuery (string) - Query string to retrieve specific deals.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### marketplacedeals.delete
Delete the specified deals from the proposal


```js
google_adexchangebuyer.marketplacedeals.delete({
  "proposalId": ""
}, context)
```

#### Parameters
* proposalId (string) **required** - The proposalId to delete deals from.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### marketplacedeals.insert
Add new deals for the specified proposal


```js
google_adexchangebuyer.marketplacedeals.insert({
  "proposalId": ""
}, context)
```

#### Parameters
* proposalId (string) **required** - proposalId for which deals need to be added.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### marketplacedeals.update
Replaces all the deals in the proposal with the passed in deals


```js
google_adexchangebuyer.marketplacedeals.update({
  "proposalId": ""
}, context)
```

#### Parameters
* proposalId (string) **required** - The proposalId to edit deals on.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### marketplacenotes.list
Get all the notes associated with a proposal


```js
google_adexchangebuyer.marketplacenotes.list({
  "proposalId": ""
}, context)
```

#### Parameters
* proposalId (string) **required** - The proposalId to get notes for. To search across all proposals specify order_id = '-' as part of the URL.
* pqlQuery (string) - Query string to retrieve specific notes. To search the text contents of notes, please use syntax like "WHERE note.note = "foo" or "WHERE note.note LIKE "%bar%"
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### marketplacenotes.insert
Add notes to the proposal


```js
google_adexchangebuyer.marketplacenotes.insert({
  "proposalId": ""
}, context)
```

#### Parameters
* proposalId (string) **required** - The proposalId to add notes for.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### proposals.setupcomplete
Update the given proposal to indicate that setup has been completed.


```js
google_adexchangebuyer.proposals.setupcomplete({
  "proposalId": ""
}, context)
```

#### Parameters
* proposalId (string) **required** - The proposal id for which the setup is complete
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### proposals.patch
Update the given proposal. This method supports patch semantics.


```js
google_adexchangebuyer.proposals.patch({
  "proposalId": "",
  "revisionNumber": "",
  "updateAction": ""
}, context)
```

#### Parameters
* proposalId (string) **required** - The proposal id to update.
* revisionNumber (string) **required** - The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
* updateAction (string) **required** - The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
* body (object) - Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### proposals.update
Update the given proposal


```js
google_adexchangebuyer.proposals.update({
  "proposalId": "",
  "revisionNumber": "",
  "updateAction": ""
}, context)
```

#### Parameters
* proposalId (string) **required** - The proposal id to update.
* revisionNumber (string) **required** - The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
* updateAction (string) **required** - The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
* body (object) - Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### pubprofiles.list
Gets the requested publisher profile(s) by publisher accountId.


```js
google_adexchangebuyer.pubprofiles.list({
  "accountId": 0
}, context)
```

#### Parameters
* accountId (integer) **required** - The accountId of the publisher to get profiles for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

