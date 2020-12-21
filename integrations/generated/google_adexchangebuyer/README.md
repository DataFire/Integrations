# @datafire/google_adexchangebuyer

Client library for Ad Exchange Buyer API

## Installation and Usage
```bash
npm install --save @datafire/google_adexchangebuyer
```
```js
let google_adexchangebuyer = require('@datafire/google_adexchangebuyer').create({
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

Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_adexchangebuyer.oauthCallback({
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
google_adexchangebuyer.oauthRefresh(null, context)
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

### adexchangebuyer.accounts.list
Retrieves the authenticated user's list of accounts.


```js
google_adexchangebuyer.adexchangebuyer.accounts.list({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AccountsList](#accountslist)

### adexchangebuyer.accounts.get
Gets one account by ID.


```js
google_adexchangebuyer.adexchangebuyer.accounts.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The account id
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Account](#account)

### adexchangebuyer.accounts.patch
Updates an existing account. This method supports patch semantics.


```js
google_adexchangebuyer.adexchangebuyer.accounts.patch({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The account id
  * confirmUnsafeAccountChange `boolean`: Confirmation for erasing bidder and cookie matching urls.
  * body [Account](#account)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Account](#account)

### adexchangebuyer.accounts.update
Updates an existing account.


```js
google_adexchangebuyer.adexchangebuyer.accounts.update({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: The account id
  * confirmUnsafeAccountChange `boolean`: Confirmation for erasing bidder and cookie matching urls.
  * body [Account](#account)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Account](#account)

### adexchangebuyer.billingInfo.list
Retrieves a list of billing information for all accounts of the authenticated user.


```js
google_adexchangebuyer.adexchangebuyer.billingInfo.list({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [BillingInfoList](#billinginfolist)

### adexchangebuyer.billingInfo.get
Returns the billing information for one account specified by account ID.


```js
google_adexchangebuyer.adexchangebuyer.billingInfo.get({
  "accountId": 0
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: The account id.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [BillingInfo](#billinginfo)

### adexchangebuyer.budget.get
Returns the budget information for the adgroup specified by the accountId and billingId.


```js
google_adexchangebuyer.adexchangebuyer.budget.get({
  "accountId": "",
  "billingId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account id to get the budget information for.
  * billingId **required** `string`: The billing id to get the budget information for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Budget](#budget)

### adexchangebuyer.budget.patch
Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.


```js
google_adexchangebuyer.adexchangebuyer.budget.patch({
  "accountId": "",
  "billingId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account id associated with the budget being updated.
  * billingId **required** `string`: The billing id associated with the budget being updated.
  * body [Budget](#budget)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Budget](#budget)

### adexchangebuyer.budget.update
Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.


```js
google_adexchangebuyer.adexchangebuyer.budget.update({
  "accountId": "",
  "billingId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account id associated with the budget being updated.
  * billingId **required** `string`: The billing id associated with the budget being updated.
  * body [Budget](#budget)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Budget](#budget)

### adexchangebuyer.creatives.list
Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.


```js
google_adexchangebuyer.adexchangebuyer.creatives.list({}, context)
```

#### Input
* input `object`
  * accountId `array`: When specified, only creatives for the given account ids are returned.
  * buyerCreativeId `array`: When specified, only creatives for the given buyer creative ids are returned.
  * dealsStatusFilter `string` (values: approved, conditionally_approved, disapproved, not_checked): When specified, only creatives having the given deals status are returned.
  * maxResults `integer`: Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
  * openAuctionStatusFilter `string` (values: approved, conditionally_approved, disapproved, not_checked): When specified, only creatives having the given open auction status are returned.
  * pageToken `string`: A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CreativesList](#creativeslist)

### adexchangebuyer.creatives.insert
Submit a new creative.


```js
google_adexchangebuyer.adexchangebuyer.creatives.insert({}, context)
```

#### Input
* input `object`
  * body [Creative](#creative)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Creative](#creative)

### adexchangebuyer.creatives.get
Gets the status for a single creative. A creative will be available 30-40 minutes after submission.


```js
google_adexchangebuyer.adexchangebuyer.creatives.get({
  "accountId": 0,
  "buyerCreativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: The id for the account that will serve this creative.
  * buyerCreativeId **required** `string`: The buyer-specific id for this creative.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Creative](#creative)

### adexchangebuyer.creatives.addDeal
Add a deal id association for the creative.


```js
google_adexchangebuyer.adexchangebuyer.creatives.addDeal({
  "accountId": 0,
  "buyerCreativeId": "",
  "dealId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: The id for the account that will serve this creative.
  * buyerCreativeId **required** `string`: The buyer-specific id for this creative.
  * dealId **required** `string`: The id of the deal id to associate with this creative.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### adexchangebuyer.creatives.listDeals
Lists the external deal ids associated with the creative.


```js
google_adexchangebuyer.adexchangebuyer.creatives.listDeals({
  "accountId": 0,
  "buyerCreativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: The id for the account that will serve this creative.
  * buyerCreativeId **required** `string`: The buyer-specific id for this creative.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CreativeDealIds](#creativedealids)

### adexchangebuyer.creatives.removeDeal
Remove a deal id associated with the creative.


```js
google_adexchangebuyer.adexchangebuyer.creatives.removeDeal({
  "accountId": 0,
  "buyerCreativeId": "",
  "dealId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: The id for the account that will serve this creative.
  * buyerCreativeId **required** `string`: The buyer-specific id for this creative.
  * dealId **required** `string`: The id of the deal id to disassociate with this creative.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### adexchangebuyer.performanceReport.list
Retrieves the authenticated user's list of performance metrics.


```js
google_adexchangebuyer.adexchangebuyer.performanceReport.list({
  "accountId": "",
  "endDateTime": "",
  "startDateTime": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account id to get the reports.
  * endDateTime **required** `string`: The end time of the report in ISO 8601 timestamp format using UTC.
  * startDateTime **required** `string`: The start time of the report in ISO 8601 timestamp format using UTC.
  * maxResults `integer`: Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
  * pageToken `string`: A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PerformanceReportList](#performancereportlist)

### adexchangebuyer.pretargetingConfig.list
Retrieves a list of the authenticated user's pretargeting configurations.


```js
google_adexchangebuyer.adexchangebuyer.pretargetingConfig.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account id to get the pretargeting configs for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PretargetingConfigList](#pretargetingconfiglist)

### adexchangebuyer.pretargetingConfig.insert
Inserts a new pretargeting configuration.


```js
google_adexchangebuyer.adexchangebuyer.pretargetingConfig.insert({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account id to insert the pretargeting config for.
  * body [PretargetingConfig](#pretargetingconfig)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PretargetingConfig](#pretargetingconfig)

### adexchangebuyer.pretargetingConfig.delete
Deletes an existing pretargeting config.


```js
google_adexchangebuyer.adexchangebuyer.pretargetingConfig.delete({
  "accountId": "",
  "configId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account id to delete the pretargeting config for.
  * configId **required** `string`: The specific id of the configuration to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### adexchangebuyer.pretargetingConfig.get
Gets a specific pretargeting configuration


```js
google_adexchangebuyer.adexchangebuyer.pretargetingConfig.get({
  "accountId": "",
  "configId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account id to get the pretargeting config for.
  * configId **required** `string`: The specific id of the configuration to retrieve.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PretargetingConfig](#pretargetingconfig)

### adexchangebuyer.pretargetingConfig.patch
Updates an existing pretargeting config. This method supports patch semantics.


```js
google_adexchangebuyer.adexchangebuyer.pretargetingConfig.patch({
  "accountId": "",
  "configId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account id to update the pretargeting config for.
  * configId **required** `string`: The specific id of the configuration to update.
  * body [PretargetingConfig](#pretargetingconfig)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PretargetingConfig](#pretargetingconfig)

### adexchangebuyer.pretargetingConfig.update
Updates an existing pretargeting config.


```js
google_adexchangebuyer.adexchangebuyer.pretargetingConfig.update({
  "accountId": "",
  "configId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account id to update the pretargeting config for.
  * configId **required** `string`: The specific id of the configuration to update.
  * body [PretargetingConfig](#pretargetingconfig)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PretargetingConfig](#pretargetingconfig)

### adexchangebuyer.marketplaceprivateauction.updateproposal
Update a given private auction proposal


```js
google_adexchangebuyer.adexchangebuyer.marketplaceprivateauction.updateproposal({
  "privateAuctionId": ""
}, context)
```

#### Input
* input `object`
  * privateAuctionId **required** `string`: The private auction id to be updated.
  * body [UpdatePrivateAuctionProposalRequest](#updateprivateauctionproposalrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### adexchangebuyer.products.search
Gets the requested product.


```js
google_adexchangebuyer.adexchangebuyer.products.search({}, context)
```

#### Input
* input `object`
  * pqlQuery `string`: The pql query used to query for products.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [GetOffersResponse](#getoffersresponse)

### adexchangebuyer.products.get
Gets the requested product by id.


```js
google_adexchangebuyer.adexchangebuyer.products.get({
  "productId": ""
}, context)
```

#### Input
* input `object`
  * productId **required** `string`: The id for the product to get the head revision for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Product](#product)

### adexchangebuyer.proposals.insert
Create the given list of proposals


```js
google_adexchangebuyer.adexchangebuyer.proposals.insert({}, context)
```

#### Input
* input `object`
  * body [CreateOrdersRequest](#createordersrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CreateOrdersResponse](#createordersresponse)

### adexchangebuyer.proposals.search
Search for proposals using pql query


```js
google_adexchangebuyer.adexchangebuyer.proposals.search({}, context)
```

#### Input
* input `object`
  * pqlQuery `string`: Query string to retrieve specific proposals.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [GetOrdersResponse](#getordersresponse)

### adexchangebuyer.proposals.get
Get a proposal given its id


```js
google_adexchangebuyer.adexchangebuyer.proposals.get({
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * proposalId **required** `string`: Id of the proposal to retrieve.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Proposal](#proposal)

### adexchangebuyer.marketplacedeals.list
List all the deals for a given proposal


```js
google_adexchangebuyer.adexchangebuyer.marketplacedeals.list({
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * proposalId **required** `string`: The proposalId to get deals for. To search across all proposals specify order_id = '-' as part of the URL.
  * pqlQuery `string`: Query string to retrieve specific deals.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [GetOrderDealsResponse](#getorderdealsresponse)

### adexchangebuyer.marketplacedeals.delete
Delete the specified deals from the proposal


```js
google_adexchangebuyer.adexchangebuyer.marketplacedeals.delete({
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * proposalId **required** `string`: The proposalId to delete deals from.
  * body [DeleteOrderDealsRequest](#deleteorderdealsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [DeleteOrderDealsResponse](#deleteorderdealsresponse)

### adexchangebuyer.marketplacedeals.insert
Add new deals for the specified proposal


```js
google_adexchangebuyer.adexchangebuyer.marketplacedeals.insert({
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * proposalId **required** `string`: proposalId for which deals need to be added.
  * body [AddOrderDealsRequest](#addorderdealsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AddOrderDealsResponse](#addorderdealsresponse)

### adexchangebuyer.marketplacedeals.update
Replaces all the deals in the proposal with the passed in deals


```js
google_adexchangebuyer.adexchangebuyer.marketplacedeals.update({
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * proposalId **required** `string`: The proposalId to edit deals on.
  * body [EditAllOrderDealsRequest](#editallorderdealsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [EditAllOrderDealsResponse](#editallorderdealsresponse)

### adexchangebuyer.marketplacenotes.list
Get all the notes associated with a proposal


```js
google_adexchangebuyer.adexchangebuyer.marketplacenotes.list({
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * proposalId **required** `string`: The proposalId to get notes for. To search across all proposals specify order_id = '-' as part of the URL.
  * pqlQuery `string`: Query string to retrieve specific notes. To search the text contents of notes, please use syntax like "WHERE note.note = "foo" or "WHERE note.note LIKE "%bar%"
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [GetOrderNotesResponse](#getordernotesresponse)

### adexchangebuyer.marketplacenotes.insert
Add notes to the proposal


```js
google_adexchangebuyer.adexchangebuyer.marketplacenotes.insert({
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * proposalId **required** `string`: The proposalId to add notes for.
  * body [AddOrderNotesRequest](#addordernotesrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AddOrderNotesResponse](#addordernotesresponse)

### adexchangebuyer.proposals.setupcomplete
Update the given proposal to indicate that setup has been completed.


```js
google_adexchangebuyer.adexchangebuyer.proposals.setupcomplete({
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * proposalId **required** `string`: The proposal id for which the setup is complete
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### adexchangebuyer.proposals.patch
Update the given proposal. This method supports patch semantics.


```js
google_adexchangebuyer.adexchangebuyer.proposals.patch({
  "proposalId": "",
  "revisionNumber": "",
  "updateAction": ""
}, context)
```

#### Input
* input `object`
  * proposalId **required** `string`: The proposal id to update.
  * revisionNumber **required** `string`: The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
  * updateAction **required** `string` (values: accept, cancel, propose, proposeAndAccept, unknownAction, updateNonTerms): The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
  * body [Proposal](#proposal)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Proposal](#proposal)

### adexchangebuyer.proposals.update
Update the given proposal


```js
google_adexchangebuyer.adexchangebuyer.proposals.update({
  "proposalId": "",
  "revisionNumber": "",
  "updateAction": ""
}, context)
```

#### Input
* input `object`
  * proposalId **required** `string`: The proposal id to update.
  * revisionNumber **required** `string`: The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
  * updateAction **required** `string` (values: accept, cancel, propose, proposeAndAccept, unknownAction, updateNonTerms): The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
  * body [Proposal](#proposal)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Proposal](#proposal)

### adexchangebuyer.pubprofiles.list
Gets the requested publisher profile(s) by publisher accountId.


```js
google_adexchangebuyer.adexchangebuyer.pubprofiles.list({
  "accountId": 0
}, context)
```

#### Input
* input `object`
  * accountId **required** `integer`: The accountId of the publisher to get profiles for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [GetPublisherProfilesByAccountIdResponse](#getpublisherprofilesbyaccountidresponse)



## Definitions

### Account
* Account `object`: Configuration data for an Ad Exchange buyer account.
  * applyPretargetingToNonGuaranteedDeals `boolean`: When this is false, bid requests that include a deal ID for a private auction or preferred deal are always sent to your bidder. When true, all active pretargeting configs will be applied to private auctions and preferred deals. Programmatic Guaranteed deals (when enabled) are always sent to your bidder.
  * bidderLocation `array`: Your bidder locations that have distinct URLs.
    * items `object`
      * bidProtocol `string`: The protocol that the bidder endpoint is using. OpenRTB protocols with prefix PROTOCOL_OPENRTB_PROTOBUF use proto buffer, otherwise use JSON.  Allowed values:  
      * maximumQps `integer`: The maximum queries per second the Ad Exchange will send.
      * region `string`: The geographical region the Ad Exchange should send requests from. Only used by some quota systems, but always setting the value is recommended. Allowed values:  
      * url `string`: The URL to which the Ad Exchange will send bid requests.
  * cookieMatchingNid `string`: The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this.
  * cookieMatchingUrl `string`: The base URL used in cookie match requests.
  * id `integer`: Account id.
  * kind `string`: Resource type.
  * maximumActiveCreatives `integer`: The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this.
  * maximumTotalQps `integer`: The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.
  * numberActiveCreatives `integer`: The number of creatives that this account inserted or bid with in the last 30 days.

### AccountsList
* AccountsList `object`: An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account.
  * items `array`: A list of accounts.
    * items [Account](#account)
  * kind `string`: Resource type.

### AddOrderDealsRequest
* AddOrderDealsRequest `object`
  * deals `array`: The list of deals to add
    * items [MarketplaceDeal](#marketplacedeal)
  * proposalRevisionNumber `string`: The last known proposal revision number.
  * updateAction `string`: Indicates an optional action to take on the proposal

### AddOrderDealsResponse
* AddOrderDealsResponse `object`
  * deals `array`: List of deals added (in the same proposal as passed in the request)
    * items [MarketplaceDeal](#marketplacedeal)
  * proposalRevisionNumber `string`: The updated revision number for the proposal.

### AddOrderNotesRequest
* AddOrderNotesRequest `object`
  * notes `array`: The list of notes to add.
    * items [MarketplaceNote](#marketplacenote)

### AddOrderNotesResponse
* AddOrderNotesResponse `object`
  * notes `array`
    * items [MarketplaceNote](#marketplacenote)

### BillingInfo
* BillingInfo `object`: The configuration data for an Ad Exchange billing info.
  * accountId `integer`: Account id.
  * accountName `string`: Account name.
  * billingId `array`: A list of adgroup IDs associated with this particular account. These IDs may show up as part of a realtime bidding BidRequest, which indicates a bid request for this account.
    * items `string`
  * kind `string`: Resource type.

### BillingInfoList
* BillingInfoList `object`: A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info.
  * items `array`: A list of billing info relevant for your account.
    * items [BillingInfo](#billinginfo)
  * kind `string`: Resource type.

### Budget
* Budget `object`: The configuration data for Ad Exchange RTB - Budget API.
  * accountId `string`: The id of the account. This is required for get and update requests.
  * billingId `string`: The billing id to determine which adgroup to provide budget information for. This is required for get and update requests.
  * budgetAmount `string`: The daily budget amount in unit amount of the account currency to apply for the billingId provided. This is required for update requests.
  * currencyCode `string`: The currency code for the buyer. This cannot be altered here.
  * id `string`: The unique id that describes this item.
  * kind `string`: The kind of the resource, i.e. "adexchangebuyer#budget".

### Buyer
* Buyer `object`
  * accountId `string`: Adx account id of the buyer.

### ContactInformation
* ContactInformation `object`
  * email `string`: Email address of the contact.
  * name `string`: The name of the contact.

### CreateOrdersRequest
* CreateOrdersRequest `object`
  * proposals `array`: The list of proposals to create.
    * items [Proposal](#proposal)
  * webPropertyCode `string`: Web property id of the seller creating these orders

### CreateOrdersResponse
* CreateOrdersResponse `object`
  * proposals `array`: The list of proposals successfully created.
    * items [Proposal](#proposal)

### Creative
* Creative `object`: A creative and its classification data.
  * HTMLSnippet `string`: The HTML snippet that displays the ad when inserted in the web page. If set, videoURL, videoVastXML, and nativeAd should not be set.
  * accountId `integer`: Account id.
  * adChoicesDestinationUrl `string`: The link to the Ad Preferences page. This is only supported for native ads.
  * adTechnologyProviders `object`
    * detectedProviderIds `array`: The detected ad technology provider IDs for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. If this creative contains provider IDs that are outside of those listed in the `BidRequest.adslot.consented_providers_settings.consented_providers` field on the  Authorized Buyers Real-Time Bidding protocol or the `BidRequest.user.ext.consented_providers_settings.consented_providers` field on the OpenRTB protocol, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the "Third-party Ad Technology Vendors" section of Authorized Buyers Program Guidelines.
      * items `string`
    * hasUnidentifiedProvider `boolean`: Whether the creative contains an unidentified ad technology provider. If true, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the "Third-party Ad Technology Vendors" section of Authorized Buyers Program Guidelines.
  * advertiserId `array`: Detected advertiser id, if any. Read-only. This field should not be set in requests.
    * items `string`
  * advertiserName `string`: The name of the company being advertised in the creative. A list of advertisers is provided in the advertisers.txt file.
  * agencyId `string`: The agency id for this creative.
  * apiUploadTimestamp `string`: The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp).
  * attribute `array`: List of buyer selectable attributes for the ads that may be shown from this snippet. Each attribute is represented by an integer as defined in  buyer-declarable-creative-attributes.txt.
    * items `integer`
  * buyerCreativeId `string`: A buyer-specific id identifying the creative in this ad.
  * clickThroughUrl `array`: The set of destination urls for the snippet.
    * items `string`
  * corrections `array`: Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests.
    * items `object`
      * contexts `array`: All known serving contexts containing serving status information.
        * items `object`
          * auctionType `array`: Only set when contextType=AUCTION_TYPE. Represents the auction types this correction applies to.
          * contextType `string`: The type of context (e.g., location, platform, auction type, SSL-ness).
          * geoCriteriaId `array`: Only set when contextType=LOCATION. Represents the geo criterias this correction applies to.
          * platform `array`: Only set when contextType=PLATFORM. Represents the platforms this correction applies to.
      * details `array`: Additional details about the correction.
        * items `string`
      * reason `string`: The type of correction that was applied to the creative.
  * creativeStatusIdentityType `string`: Creative status identity type that the creative item applies to. Ad Exchange real-time bidding is migrating to the sizeless creative verification. Originally, Ad Exchange assigned creative verification status to a unique combination of a buyer creative ID and creative dimensions. Post-migration, a single verification status will be assigned at the buyer creative ID level. This field allows to distinguish whether a given creative status applies to a unique combination of a buyer creative ID and creative dimensions, or to a buyer creative ID as a whole.
  * dealsStatus `string`: Top-level deals status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=DIRECT_DEALS (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from servingRestrictions directly.
  * detectedDomains `array`: Detected domains for this creative. Read-only. This field should not be set in requests.
    * items `string`
  * filteringReasons `object`: The filtering reasons for the creative. Read-only. This field should not be set in requests.
    * date `string`: The date in ISO 8601 format for the data. The data is collected from 00:00:00 to 23:59:59 in PST.
    * reasons `array`: The filtering reasons.
      * items `object`
        * filteringCount `string`: The number of times the creative was filtered for the status. The count is aggregated across all publishers on the exchange.
        * filteringStatus `integer`: The filtering status code as defined in  creative-status-codes.txt.
  * height `integer`: Ad height.
  * impressionTrackingUrl `array`: The set of urls to be called to record an impression.
    * items `string`
  * kind `string`: Resource type.
  * languages `array`: Detected languages for this creative. Read-only. This field should not be set in requests.
    * items `string`
  * nativeAd `object`: If nativeAd is set, HTMLSnippet, videoVastXML, and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.)
    * advertiser `string`
    * appIcon `object`: The app icon, for app download ads.
      * height `integer`
      * url `string`
      * width `integer`
    * body `string`: A long description of the ad.
    * callToAction `string`: A label for the button that the user is supposed to click.
    * clickLinkUrl `string`: The URL that the browser/SDK will load when the user clicks the ad.
    * clickTrackingUrl `string`: The URL to use for click tracking.
    * headline `string`: A short title for the ad.
    * image `object`: A large image.
      * height `integer`
      * url `string`
      * width `integer`
    * impressionTrackingUrl `array`: The URLs are called when the impression is rendered.
      * items `string`
    * logo `object`: A smaller image, for the advertiser logo.
      * height `integer`
      * url `string`
      * width `integer`
    * price `string`: The price of the promoted app including the currency info.
    * starRating `number`: The app rating in the app store. Must be in the range [0-5].
    * videoURL `string`: The URL of the XML VAST for a native ad. Note this is a separate field from resource.video_url.
  * openAuctionStatus `string`: Top-level open auction status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=OPEN_AUCTION (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from ServingRestrictions directly.
  * productCategories `array`: Detected product categories, if any. Each category is represented by an integer as defined in  ad-product-categories.txt. Read-only. This field should not be set in requests.
    * items `integer`
  * restrictedCategories `array`: All restricted categories for the ads that may be shown from this snippet. Each category is represented by an integer as defined in the  ad-restricted-categories.txt.
    * items `integer`
  * sensitiveCategories `array`: Detected sensitive categories, if any. Each category is represented by an integer as defined in  ad-sensitive-categories.txt. Read-only. This field should not be set in requests.
    * items `integer`
  * servingRestrictions `array`: The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS vs HTTP request, or the type of auction). Read-only. This field should not be set in requests. See the examples in the Creatives guide for more details.
    * items `object`
      * contexts `array`: All known contexts/restrictions.
        * items `object`
          * auctionType `array`: Only set when contextType=AUCTION_TYPE. Represents the auction types this restriction applies to.
          * contextType `string`: The type of context (e.g., location, platform, auction type, SSL-ness).
          * geoCriteriaId `array`: Only set when contextType=LOCATION. Represents the geo criterias this restriction applies to. Impressions are considered to match a context if either the user location or publisher location matches a given geoCriteriaId.
          * platform `array`: Only set when contextType=PLATFORM. Represents the platforms this restriction applies to.
      * disapprovalReasons `array`: The reasons for disapproval within this restriction, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED or CONDITIONALLY_APPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue.
        * items `object`
          * details `array`: Additional details about the reason for disapproval.
          * reason `string`: The categorized reason for disapproval.
      * reason `string`: Why the creative is ineligible to serve in this context (e.g., it has been explicitly disapproved or is pending review).
  * vendorType `array`: List of vendor types for the ads that may be shown from this snippet. Each vendor type is represented by an integer as defined in vendors.txt.
    * items `integer`
  * version `integer`: The version for this creative. Read-only. This field should not be set in requests.
  * videoURL `string`: The URL to fetch a video ad. If set, HTMLSnippet, videoVastXML, and nativeAd should not be set. Note, this is different from resource.native_ad.video_url above.
  * videoVastXML `string`: The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. If set, HTMLSnippet, videoURL, and nativeAd and should not be set.
  * width `integer`: Ad width.

### CreativeDealIds
* CreativeDealIds `object`: The external deal ids associated with a creative.
  * dealStatuses `array`: A list of external deal ids and ARC approval status.
    * items `object`
      * arcStatus `string`: ARC approval status.
      * dealId `string`: External deal ID.
      * webPropertyId `integer`: Publisher ID.
  * kind `string`: Resource type.

### CreativesList
* CreativesList `object`: The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative.
  * items `array`: A list of creatives.
    * items [Creative](#creative)
  * kind `string`: Resource type.
  * nextPageToken `string`: Continuation token used to page through creatives. To retrieve the next page of results, set the next request's "pageToken" value to this.

### DealServingMetadata
* DealServingMetadata `object`
  * alcoholAdsAllowed `boolean`: True if alcohol ads are allowed for this deal (read-only). This field is only populated when querying for finalized orders using the method GetFinalizedOrderDeals
  * dealPauseStatus [DealServingMetadataDealPauseStatus](#dealservingmetadatadealpausestatus)

### DealServingMetadataDealPauseStatus
* DealServingMetadataDealPauseStatus `object`: Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently.
  * buyerPauseReason `string`
  * firstPausedBy `string`: If the deal is paused, records which party paused the deal first.
  * hasBuyerPaused `boolean`
  * hasSellerPaused `boolean`
  * sellerPauseReason `string`

### DealTerms
* DealTerms `object`
  * brandingType `string`: Visibility of the URL in bid requests.
  * crossListedExternalDealIdType `string`: Indicates that this ExternalDealId exists under at least two different AdxInventoryDeals. Currently, the only case that the same ExternalDealId will exist is programmatic cross sell case.
  * description `string`: Description for the proposed terms of the deal.
  * estimatedGrossSpend [Price](#price)
  * estimatedImpressionsPerDay `string`: Non-binding estimate of the impressions served per day Can be set by buyer or seller.
  * guaranteedFixedPriceTerms [DealTermsGuaranteedFixedPriceTerms](#dealtermsguaranteedfixedpriceterms)
  * nonGuaranteedAuctionTerms [DealTermsNonGuaranteedAuctionTerms](#dealtermsnonguaranteedauctionterms)
  * nonGuaranteedFixedPriceTerms [DealTermsNonGuaranteedFixedPriceTerms](#dealtermsnonguaranteedfixedpriceterms)
  * rubiconNonGuaranteedTerms [DealTermsRubiconNonGuaranteedTerms](#dealtermsrubiconnonguaranteedterms)
  * sellerTimeZone `string`: For deals with Cost Per Day billing, defines the timezone used to mark the boundaries of a day (buyer-readonly)

### DealTermsGuaranteedFixedPriceTerms
* DealTermsGuaranteedFixedPriceTerms `object`
  * billingInfo [DealTermsGuaranteedFixedPriceTermsBillingInfo](#dealtermsguaranteedfixedpricetermsbillinginfo)
  * fixedPrices `array`: Fixed price for the specified buyer.
    * items [PricePerBuyer](#priceperbuyer)
  * guaranteedImpressions `string`: Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy.
  * guaranteedLooks `string`: Count of guaranteed looks. Required for deal, optional for product. For CPD deals, buyer changes to guaranteed_looks will be ignored.
  * minimumDailyLooks `string`: Count of minimum daily looks for a CPD deal. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks.

### DealTermsGuaranteedFixedPriceTermsBillingInfo
* DealTermsGuaranteedFixedPriceTermsBillingInfo `object`
  * currencyConversionTimeMs `string`: The timestamp (in ms since epoch) when the original reservation price for the deal was first converted to DFP currency. This is used to convert the contracted price into buyer's currency without discrepancy.
  * dfpLineItemId `string`: The DFP line item id associated with this deal. For features like CPD, buyers can retrieve the DFP line item for billing reconciliation.
  * originalContractedQuantity `string`: The original contracted quantity (# impressions) for this deal. To ensure delivery, sometimes the publisher will book the deal with a impression buffer, such that guaranteed_looks is greater than the contracted quantity. However clients are billed using the original contracted quantity.
  * price [Price](#price)

### DealTermsNonGuaranteedAuctionTerms
* DealTermsNonGuaranteedAuctionTerms `object`
  * autoOptimizePrivateAuction `boolean`: True if open auction buyers are allowed to compete with invited buyers in this private auction (buyer-readonly).
  * reservePricePerBuyers `array`: Reserve price for the specified buyer.
    * items [PricePerBuyer](#priceperbuyer)

### DealTermsNonGuaranteedFixedPriceTerms
* DealTermsNonGuaranteedFixedPriceTerms `object`
  * fixedPrices `array`: Fixed price for the specified buyer.
    * items [PricePerBuyer](#priceperbuyer)

### DealTermsRubiconNonGuaranteedTerms
* DealTermsRubiconNonGuaranteedTerms `object`
  * priorityPrice [Price](#price)
  * standardPrice [Price](#price)

### DeleteOrderDealsRequest
* DeleteOrderDealsRequest `object`
  * dealIds `array`: List of deals to delete for a given proposal
    * items `string`
  * proposalRevisionNumber `string`: The last known proposal revision number.
  * updateAction `string`: Indicates an optional action to take on the proposal

### DeleteOrderDealsResponse
* DeleteOrderDealsResponse `object`
  * deals `array`: List of deals deleted (in the same proposal as passed in the request)
    * items [MarketplaceDeal](#marketplacedeal)
  * proposalRevisionNumber `string`: The updated revision number for the proposal.

### DeliveryControl
* DeliveryControl `object`
  * creativeBlockingLevel `string`
  * deliveryRateType `string`
  * frequencyCaps `array`
    * items [DeliveryControlFrequencyCap](#deliverycontrolfrequencycap)

### DeliveryControlFrequencyCap
* DeliveryControlFrequencyCap `object`
  * maxImpressions `integer`
  * numTimeUnits `integer`
  * timeUnitType `string`

### Dimension
* Dimension `object`: This message carries publisher provided breakdown. E.g. {dimension_type: 'COUNTRY', [{dimension_value: {id: 1, name: 'US'}}, {dimension_value: {id: 2, name: 'UK'}}]}
  * dimensionType `string`
  * dimensionValues `array`
    * items [DimensionDimensionValue](#dimensiondimensionvalue)

### DimensionDimensionValue
* DimensionDimensionValue `object`: Value of the dimension.
  * id `integer`: Id of the dimension.
  * name `string`: Name of the dimension mainly for debugging purposes, except for the case of CREATIVE_SIZE. For CREATIVE_SIZE, strings are used instead of ids.
  * percentage `integer`: Percent of total impressions for a dimension type. e.g. {dimension_type: 'GENDER', [{dimension_value: {id: 1, name: 'MALE', percentage: 60}}]} Gender MALE is 60% of all impressions which have gender.

### EditAllOrderDealsRequest
* EditAllOrderDealsRequest `object`
  * deals `array`: List of deals to edit. Service may perform 3 different operations based on comparison of deals in this list vs deals already persisted in database: 1. Add new deal to proposal If a deal in this list does not exist in the proposal, the service will create a new deal and add it to the proposal. Validation will follow AddOrderDealsRequest. 2. Update existing deal in the proposal If a deal in this list already exist in the proposal, the service will update that existing deal to this new deal in the request. Validation will follow UpdateOrderDealsRequest. 3. Delete deals from the proposal (just need the id) If a existing deal in the proposal is not present in this list, the service will delete that deal from the proposal. Validation will follow DeleteOrderDealsRequest.
    * items [MarketplaceDeal](#marketplacedeal)
  * proposal [Proposal](#proposal)
  * proposalRevisionNumber `string`: The last known revision number for the proposal.
  * updateAction `string`: Indicates an optional action to take on the proposal

### EditAllOrderDealsResponse
* EditAllOrderDealsResponse `object`
  * deals `array`: List of all deals in the proposal after edit.
    * items [MarketplaceDeal](#marketplacedeal)
  * orderRevisionNumber `string`: The latest revision number after the update has been applied.

### GetOffersResponse
* GetOffersResponse `object`
  * products `array`: The returned list of products.
    * items [Product](#product)

### GetOrderDealsResponse
* GetOrderDealsResponse `object`
  * deals `array`: List of deals for the proposal
    * items [MarketplaceDeal](#marketplacedeal)

### GetOrderNotesResponse
* GetOrderNotesResponse `object`
  * notes `array`: The list of matching notes. The notes for a proposal are ordered from oldest to newest. If the notes span multiple proposals, they will be grouped by proposal, with the notes for the most recently modified proposal appearing first.
    * items [MarketplaceNote](#marketplacenote)

### GetOrdersResponse
* GetOrdersResponse `object`
  * proposals `array`: The list of matching proposals.
    * items [Proposal](#proposal)

### GetPublisherProfilesByAccountIdResponse
* GetPublisherProfilesByAccountIdResponse `object`
  * profiles `array`: Profiles for the requested publisher
    * items [PublisherProfileApiProto](#publisherprofileapiproto)

### MarketplaceDeal
* MarketplaceDeal `object`: A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
  * buyerPrivateData [PrivateData](#privatedata)
  * creationTimeMs `string`: The time (ms since epoch) of the deal creation. (readonly)
  * creativePreApprovalPolicy `string`: Specifies the creative pre-approval policy (buyer-readonly)
  * creativeSafeFrameCompatibility `string`: Specifies whether the creative is safeFrame compatible (buyer-readonly)
  * dealId `string`: A unique deal-id for the deal (readonly).
  * dealServingMetadata [DealServingMetadata](#dealservingmetadata)
  * deliveryControl [DeliveryControl](#deliverycontrol)
  * externalDealId `string`: The external deal id assigned to this deal once the deal is finalized. This is the deal-id that shows up in serving/reporting etc. (readonly)
  * flightEndTimeMs `string`: Proposed flight end time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable)
  * flightStartTimeMs `string`: Proposed flight start time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable)
  * inventoryDescription `string`: Description for the deal terms. (buyer-readonly)
  * isRfpTemplate `boolean`: Indicates whether the current deal is a RFP template. RFP template is created by buyer and not based on seller created products.
  * isSetupComplete `boolean`: True, if the buyside inventory setup is complete for this deal. (readonly, except via OrderSetupCompleted action)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceDeal".
  * lastUpdateTimeMs `string`: The time (ms since epoch) when the deal was last updated. (readonly)
  * makegoodRequestedReason `string`
  * name `string`: The name of the deal. (updatable)
  * productId `string`: The product-id from which this deal was created. (readonly, except on create)
  * productRevisionNumber `string`: The revision number of the product that the deal was created from (readonly, except on create)
  * programmaticCreativeSource `string`: Specifies the creative source for programmatic deals, PUBLISHER means creative is provided by seller and ADVERTISR means creative is provided by buyer. (buyer-readonly)
  * proposalId `string`
  * sellerContacts `array`: Optional Seller contact information for the deal (buyer-readonly)
    * items [ContactInformation](#contactinformation)
  * sharedTargetings `array`: The shared targeting visible to buyers and sellers. Each shared targeting entity is AND'd together. (updatable)
    * items [SharedTargeting](#sharedtargeting)
  * syndicationProduct `string`: The syndication product associated with the deal. (readonly, except on create)
  * terms [DealTerms](#dealterms)
  * webPropertyCode `string`

### MarketplaceDealParty
* MarketplaceDealParty `object`
  * buyer [Buyer](#buyer)
  * seller [Seller](#seller)

### MarketplaceLabel
* MarketplaceLabel `object`
  * accountId `string`: The accountId of the party that created the label.
  * createTimeMs `string`: The creation time (in ms since epoch) for the label.
  * deprecatedMarketplaceDealParty [MarketplaceDealParty](#marketplacedealparty)
  * label `string`: The label to use.

### MarketplaceNote
* MarketplaceNote `object`: A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number.
  * creatorRole `string`: The role of the person (buyer/seller) creating the note. (readonly)
  * dealId `string`: Notes can optionally be associated with a deal. (readonly, except on create)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceNote".
  * note `string`: The actual note to attach. (readonly, except on create)
  * noteId `string`: The unique id for the note. (readonly)
  * proposalId `string`: The proposalId that a note is attached to. (readonly)
  * proposalRevisionNumber `string`: If the note is associated with a proposal revision number, then store that here. (readonly, except on create)
  * timestampMs `string`: The timestamp (ms since epoch) that this note was created. (readonly)

### MobileApplication
* MobileApplication `object`
  * appStore `string`
  * externalAppId `string`

### PerformanceReport
* PerformanceReport `object`: The configuration data for an Ad Exchange performance report list.
  * bidRate `number`: The number of bid responses with an ad.
  * bidRequestRate `number`: The number of bid requests sent to your bidder.
  * calloutStatusRate `array`: Rate of various prefiltering statuses per match. Please refer to the callout-status-codes.txt file for different statuses.
  * cookieMatcherStatusRate `array`: Average QPS for cookie matcher operations.
  * creativeStatusRate `array`: Rate of ads with a given status. Please refer to the creative-status-codes.txt file for different statuses.
  * filteredBidRate `number`: The number of bid responses that were filtered due to a policy violation or other errors.
  * hostedMatchStatusRate `array`: Average QPS for hosted match operations.
  * inventoryMatchRate `number`: The number of potential queries based on your pretargeting settings.
  * kind `string`: Resource type.
  * latency50thPercentile `number`: The 50th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
  * latency85thPercentile `number`: The 85th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
  * latency95thPercentile `number`: The 95th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
  * noQuotaInRegion `number`: Rate of various quota account statuses per quota check.
  * outOfQuota `number`: Rate of various quota account statuses per quota check.
  * pixelMatchRequests `number`: Average QPS for pixel match requests from clients.
  * pixelMatchResponses `number`: Average QPS for pixel match responses from clients.
  * quotaConfiguredLimit `number`: The configured quota limits for this account.
  * quotaThrottledLimit `number`: The throttled quota limits for this account.
  * region `string`: The trading location of this data.
  * successfulRequestRate `number`: The number of properly formed bid responses received by our servers within the deadline.
  * timestamp `string`: The unix timestamp of the starting time of this performance data.
  * unsuccessfulRequestRate `number`: The number of bid responses that were unsuccessful due to timeouts, incorrect formatting, etc.

### PerformanceReportList
* PerformanceReportList `object`: The configuration data for an Ad Exchange performance report list.
  * kind `string`: Resource type.
  * performanceReport `array`: A list of performance reports relevant for the account.
    * items [PerformanceReport](#performancereport)

### PretargetingConfig
* PretargetingConfig `object`
  * billingId `string`: The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically.
  * configId `string`: The config id; generated automatically. Leave this field blank for insert requests.
  * configName `string`: The name of the config. Must be unique. Required for all requests.
  * creativeType `array`: List must contain exactly one of PRETARGETING_CREATIVE_TYPE_HTML or PRETARGETING_CREATIVE_TYPE_VIDEO.
    * items `string`
  * dimensions `array`: Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions.
    * items `object`
      * height `string`: Height in pixels.
      * width `string`: Width in pixels.
  * excludedContentLabels `array`: Requests with any of these content labels will not match. Values are from content-labels.txt in the downloadable files section.
    * items `string`
  * excludedGeoCriteriaIds `array`: Requests containing any of these geo criteria ids will not match.
    * items `string`
  * excludedPlacements `array`: Requests containing any of these placements will not match.
    * items `object`
      * token `string`: The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.
      * type `string`: The type of the placement.
  * excludedUserLists `array`: Requests containing any of these users list ids will not match.
    * items `string`
  * excludedVerticals `array`: Requests containing any of these vertical ids will not match. Values are from the publisher-verticals.txt file in the downloadable files section.
    * items `string`
  * geoCriteriaIds `array`: Requests containing any of these geo criteria ids will match.
    * items `string`
  * isActive `boolean`: Whether this config is active. Required for all requests.
  * kind `string`: The kind of the resource, i.e. "adexchangebuyer#pretargetingConfig".
  * languages `array`: Request containing any of these language codes will match.
    * items `string`
  * maximumQps `string`: The maximum QPS allocated to this pretargeting configuration, used for pretargeting-level QPS limits. By default, this is not set, which indicates that there is no QPS limit at the configuration level (a global or account-level limit may still be imposed).
  * minimumViewabilityDecile `integer`: Requests where the predicted viewability is below the specified decile will not match. E.g. if the buyer sets this value to 5, requests from slots where the predicted viewability is below 50% will not match. If the predicted viewability is unknown this field will be ignored.
  * mobileCarriers `array`: Requests containing any of these mobile carrier ids will match. Values are from mobile-carriers.csv in the downloadable files section.
    * items `string`
  * mobileDevices `array`: Requests containing any of these mobile device ids will match. Values are from mobile-devices.csv in the downloadable files section.
    * items `string`
  * mobileOperatingSystemVersions `array`: Requests containing any of these mobile operating system version ids will match. Values are from mobile-os.csv in the downloadable files section.
    * items `string`
  * placements `array`: Requests containing any of these placements will match.
    * items `object`
      * token `string`: The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.
      * type `string`: The type of the placement.
  * platforms `array`: Requests matching any of these platforms will match. Possible values are PRETARGETING_PLATFORM_MOBILE, PRETARGETING_PLATFORM_DESKTOP, and PRETARGETING_PLATFORM_TABLET.
    * items `string`
  * supportedCreativeAttributes `array`: Creative attributes should be declared here if all creatives corresponding to this pretargeting configuration have that creative attribute. Values are from pretargetable-creative-attributes.txt in the downloadable files section.
    * items `string`
  * userIdentifierDataRequired `array`: Requests containing the specified type of user data will match. Possible values are HOSTED_MATCH_DATA, which means the request is cookie-targetable and has a match in the buyer's hosted match table, and COOKIE_OR_IDFA, which means the request has either a targetable cookie or an iOS IDFA.
    * items `string`
  * userLists `array`: Requests containing any of these user list ids will match.
    * items `string`
  * vendorTypes `array`: Requests that allow any of these vendor ids will match. Values are from vendors.txt in the downloadable files section.
    * items `string`
  * verticals `array`: Requests containing any of these vertical ids will match.
    * items `string`
  * videoPlayerSizes `array`: Video requests satisfying any of these player size constraints will match.
    * items `object`
      * aspectRatio `string`: The type of aspect ratio. Leave this field blank to match all aspect ratios.
      * minHeight `string`: The minimum player height in pixels. Leave this field blank to match any player height.
      * minWidth `string`: The minimum player width in pixels. Leave this field blank to match any player width.

### PretargetingConfigList
* PretargetingConfigList `object`
  * items `array`: A list of pretargeting configs
    * items [PretargetingConfig](#pretargetingconfig)
  * kind `string`: Resource type.

### Price
* Price `object`
  * amountMicros `number`: The price value in micros.
  * currencyCode `string`: The currency code for the price.
  * expectedCpmMicros `number`: In case of CPD deals, the expected CPM in micros.
  * pricingType `string`: The pricing type for the deal/product.

### PricePerBuyer
* PricePerBuyer `object`: Used to specify pricing rules for buyers. Each PricePerBuyer in a product can become [0,1] deals. To check if there is a PricePerBuyer for a particular buyer we look for the most specific matching rule - we first look for a rule matching the buyer and otherwise look for a matching rule where no buyer is set.
  * auctionTier `string`: Optional access type for this buyer.
  * billedBuyer [Buyer](#buyer)
  * buyer [Buyer](#buyer)
  * price [Price](#price)

### PrivateData
* PrivateData `object`
  * referenceId `string`
  * referencePayload `string`

### Product
* Product `object`: A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:
  * billedBuyer [Buyer](#buyer)
  * buyer [Buyer](#buyer)
  * creationTimeMs `string`: Creation time in ms. since epoch (readonly)
  * creatorContacts `array`: Optional contact information for the creator of this product. (buyer-readonly)
    * items [ContactInformation](#contactinformation)
  * creatorRole `string`: The role that created the offer. Set to BUYER for buyer initiated offers.
  * deliveryControl [DeliveryControl](#deliverycontrol)
  * flightEndTimeMs `string`: The proposed end time for the deal (ms since epoch) (buyer-readonly)
  * flightStartTimeMs `string`: Inventory availability dates. (times are in ms since epoch) The granularity is generally in the order of seconds. (buyer-readonly)
  * hasCreatorSignedOff `boolean`: If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false.
  * inventorySource `string`: What exchange will provide this inventory (readonly, except on create).
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#product".
  * labels `array`: Optional List of labels for the product (optional, buyer-readonly).
    * items [MarketplaceLabel](#marketplacelabel)
  * lastUpdateTimeMs `string`: Time of last update in ms. since epoch (readonly)
  * legacyOfferId `string`: Optional legacy offer id if this offer is a preferred deal offer.
  * marketplacePublisherProfileId `string`: Marketplace publisher profile Id. This Id differs from the regular publisher_profile_id in that 1. This is a new id, the old Id will be deprecated in 2017. 2. This id uniquely identifies a publisher profile by itself.
  * name `string`: The name for this product as set by the seller. (buyer-readonly)
  * privateAuctionId `string`: Optional private auction id if this offer is a private auction offer.
  * productId `string`: The unique id for the product (readonly)
  * publisherProfileId `string`: Id of the publisher profile for a given seller. A (seller.account_id, publisher_profile_id) pair uniquely identifies a publisher profile. Buyers can call the PublisherProfiles::List endpoint to get a list of publisher profiles for a given seller.
  * publisherProvidedForecast [PublisherProvidedForecast](#publisherprovidedforecast)
  * revisionNumber `string`: The revision number of the product. (readonly)
  * seller [Seller](#seller)
  * sharedTargetings `array`: Targeting that is shared between the buyer and the seller. Each targeting criteria has a specified key and for each key there is a list of inclusion value or exclusion values. (buyer-readonly)
    * items [SharedTargeting](#sharedtargeting)
  * state `string`: The state of the product. (buyer-readonly)
  * syndicationProduct `string`: The syndication product associated with the deal. (readonly, except on create)
  * terms [DealTerms](#dealterms)
  * webPropertyCode `string`: The web property code for the seller. This field is meant to be copied over as is when creating deals.

### Proposal
* Proposal `object`: Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:
  * billedBuyer [Buyer](#buyer)
  * buyer [Buyer](#buyer)
  * buyerContacts `array`: Optional contact information of the buyer. (seller-readonly)
    * items [ContactInformation](#contactinformation)
  * buyerPrivateData [PrivateData](#privatedata)
  * dbmAdvertiserIds `array`: IDs of DBM advertisers permission to this proposal.
    * items `string`
  * hasBuyerSignedOff `boolean`: When an proposal is in an accepted state, indicates whether the buyer has signed off. Once both sides have signed off on a deal, the proposal can be finalized by the seller. (seller-readonly)
  * hasSellerSignedOff `boolean`: When an proposal is in an accepted state, indicates whether the buyer has signed off Once both sides have signed off on a deal, the proposal can be finalized by the seller. (buyer-readonly)
  * inventorySource `string`: What exchange will provide this inventory (readonly, except on create).
  * isRenegotiating `boolean`: True if the proposal is being renegotiated (readonly).
  * isSetupComplete `boolean`: True, if the buyside inventory setup is complete for this proposal. (readonly, except via OrderSetupCompleted action) Deprecated in favor of deal level setup complete flag.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#proposal".
  * labels `array`: List of labels associated with the proposal. (readonly)
    * items [MarketplaceLabel](#marketplacelabel)
  * lastUpdaterOrCommentorRole `string`: The role of the last user that either updated the proposal or left a comment. (readonly)
  * name `string`: The name for the proposal (updatable)
  * negotiationId `string`: Optional negotiation id if this proposal is a preferred deal proposal.
  * originatorRole `string`: Indicates whether the buyer/seller created the proposal.(readonly)
  * privateAuctionId `string`: Optional private auction id if this proposal is a private auction proposal.
  * proposalId `string`: The unique id of the proposal. (readonly).
  * proposalState `string`: The current state of the proposal. (readonly)
  * revisionNumber `string`: The revision number for the proposal (readonly).
  * revisionTimeMs `string`: The time (ms since epoch) when the proposal was last revised (readonly).
  * seller [Seller](#seller)
  * sellerContacts `array`: Optional contact information of the seller (buyer-readonly).
    * items [ContactInformation](#contactinformation)

### PublisherProfileApiProto
* PublisherProfileApiProto `object`
  * audience `string`: Publisher provided info on its audience.
  * buyerPitchStatement `string`: A pitch statement for the buyer
  * directContact `string`: Direct contact for the publisher profile.
  * exchange `string`: Exchange where this publisher profile is from. E.g. AdX, Rubicon etc...
  * googlePlusLink `string`: Link to publisher's Google+ page.
  * isParent `boolean`: True, if this is the parent profile, which represents all domains owned by the publisher.
  * isPublished `boolean`: True, if this profile is published. Deprecated for state.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#publisherProfileApiProto".
  * logoUrl `string`: The url to the logo for the publisher.
  * mediaKitLink `string`: The url for additional marketing and sales materials.
  * name `string`
  * overview `string`: Publisher provided overview.
  * profileId `integer`: The pair of (seller.account_id, profile_id) uniquely identifies a publisher profile for a given publisher.
  * programmaticContact `string`: Programmatic contact for the publisher profile.
  * publisherAppIds `array`: The list of app IDs represented in this pubisher profile. Empty if this is a parent profile. Deprecated in favor of publisher_app.
    * items `string`
  * publisherApps `array`: The list of apps represented in this pubisher profile. Empty if this is a parent profile.
    * items [MobileApplication](#mobileapplication)
  * publisherDomains `array`: The list of domains represented in this publisher profile. Empty if this is a parent profile.
    * items `string`
  * publisherProfileId `string`: Unique Id for publisher profile.
  * publisherProvidedForecast [PublisherProvidedForecast](#publisherprovidedforecast)
  * rateCardInfoLink `string`: Link to publisher rate card
  * samplePageLink `string`: Link for a sample content page.
  * seller [Seller](#seller)
  * state `string`: State of the publisher profile.
  * topHeadlines `array`: Publisher provided key metrics and rankings.
    * items `string`

### PublisherProvidedForecast
* PublisherProvidedForecast `object`: This message carries publisher provided forecasting information.
  * dimensions `array`: Publisher provided dimensions. E.g. geo, sizes etc...
    * items [Dimension](#dimension)
  * weeklyImpressions `string`: Publisher provided weekly impressions.
  * weeklyUniques `string`: Publisher provided weekly uniques.

### Seller
* Seller `object`
  * accountId `string`: The unique id for the seller. The seller fills in this field. The seller account id is then available to buyer in the product.
  * subAccountId `string`: Optional sub-account id for the seller.

### SharedTargeting
* SharedTargeting `object`
  * exclusions `array`: The list of values to exclude from targeting. Each value is AND'd together.
    * items [TargetingValue](#targetingvalue)
  * inclusions `array`: The list of value to include as part of the targeting. Each value is OR'd together.
    * items [TargetingValue](#targetingvalue)
  * key `string`: The key representing the shared targeting criterion.

### TargetingValue
* TargetingValue `object`
  * creativeSizeValue [TargetingValueCreativeSize](#targetingvaluecreativesize)
  * dayPartTargetingValue [TargetingValueDayPartTargeting](#targetingvaluedayparttargeting)
  * demogAgeCriteriaValue [TargetingValueDemogAgeCriteria](#targetingvaluedemogagecriteria)
  * demogGenderCriteriaValue [TargetingValueDemogGenderCriteria](#targetingvaluedemoggendercriteria)
  * longValue `string`: The long value to exclude/include.
  * requestPlatformTargetingValue [TargetingValueRequestPlatformTargeting](#targetingvaluerequestplatformtargeting)
  * stringValue `string`: The string value to exclude/include.

### TargetingValueCreativeSize
* TargetingValueCreativeSize `object`: Next Id: 7
  * allowedFormats `array`: The formats allowed by the publisher.
    * items `string`
  * companionSizes `array`: For video size type, the list of companion sizes.
    * items [TargetingValueSize](#targetingvaluesize)
  * creativeSizeType `string`: The Creative size type.
  * nativeTemplate `string`: The native template for native ad.
  * size [TargetingValueSize](#targetingvaluesize)
  * skippableAdType `string`: The skippable ad type for video size.

### TargetingValueDayPartTargeting
* TargetingValueDayPartTargeting `object`
  * dayParts `array`
    * items [TargetingValueDayPartTargetingDayPart](#targetingvaluedayparttargetingdaypart)
  * timeZoneType `string`

### TargetingValueDayPartTargetingDayPart
* TargetingValueDayPartTargetingDayPart `object`
  * dayOfWeek `string`
  * endHour `integer`
  * endMinute `integer`
  * startHour `integer`
  * startMinute `integer`

### TargetingValueDemogAgeCriteria
* TargetingValueDemogAgeCriteria `object`
  * demogAgeCriteriaIds `array`
    * items `string`

### TargetingValueDemogGenderCriteria
* TargetingValueDemogGenderCriteria `object`
  * demogGenderCriteriaIds `array`
    * items `string`

### TargetingValueRequestPlatformTargeting
* TargetingValueRequestPlatformTargeting `object`
  * requestPlatforms `array`
    * items `string`

### TargetingValueSize
* TargetingValueSize `object`
  * height `integer`: The height of the creative.
  * width `integer`: The width of the creative.

### UpdatePrivateAuctionProposalRequest
* UpdatePrivateAuctionProposalRequest `object`
  * externalDealId `string`: The externalDealId of the deal to be updated.
  * note [MarketplaceNote](#marketplacenote)
  * proposalRevisionNumber `string`: The current revision number of the proposal to be updated.
  * updateAction `string`: The proposed action on the private auction proposal.


