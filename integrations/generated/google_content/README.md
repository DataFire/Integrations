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

### content.accounts.authinfo
Returns information about the authenticated user.


```js
google_content.content.accounts.authinfo({}, context)
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
google_content.content.accounts.custombatch({}, context)
```

#### Input
* input `object`
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

### content.accounts.labels.list
Lists the labels assigned to an account.


```js
google_content.content.accounts.labels.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Required. The account id for whose labels are to be listed.
  * pageSize `integer`: The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
  * pageToken `string`: A page token, received from a previous `ListAccountLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLabels` must match the call that provided the page token.
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
* output [ListAccountLabelsResponse](#listaccountlabelsresponse)

### content.accounts.labels.create
Creates a new label, not assigned to any account.


```js
google_content.content.accounts.labels.create({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Required. The id of the account this label belongs to.
  * body [AccountLabel](#accountlabel)
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
* output [AccountLabel](#accountlabel)

### content.accounts.labels.delete
Deletes a label and removes it from all accounts to which it was assigned.


```js
google_content.content.accounts.labels.delete({
  "accountId": "",
  "labelId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Required. The id of the account that owns the label.
  * labelId **required** `string`: Required. The id of the label to delete.
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

### content.accounts.labels.patch
Updates a label.


```js
google_content.content.accounts.labels.patch({
  "accountId": "",
  "labelId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Required. The id of the account this label belongs to.
  * labelId **required** `string`: Required. The id of the label to update.
  * body [AccountLabel](#accountlabel)
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
* output [AccountLabel](#accountlabel)

### content.accountstatuses.custombatch
Retrieves multiple Merchant Center account statuses in a single request.


```js
google_content.content.accountstatuses.custombatch({}, context)
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
google_content.content.accounttax.custombatch({}, context)
```

#### Input
* input `object`
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
google_content.content.datafeeds.custombatch({}, context)
```

#### Input
* input `object`
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
google_content.content.datafeedstatuses.custombatch({}, context)
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

### content.liasettings.custombatch
Retrieves and/or updates the LIA settings of multiple accounts in a single request.


```js
google_content.content.liasettings.custombatch({}, context)
```

#### Input
* input `object`
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
google_content.content.liasettings.listposdataproviders({}, context)
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

### content.localinventory.custombatch
Updates local inventory for multiple products or stores in a single request.


```js
google_content.content.localinventory.custombatch({}, context)
```

#### Input
* input `object`
  * body [LocalinventoryCustomBatchRequest](#localinventorycustombatchrequest)
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
* output [LocalinventoryCustomBatchResponse](#localinventorycustombatchresponse)

### content.pos.custombatch
Batches multiple POS-related calls in a single request.


```js
google_content.content.pos.custombatch({}, context)
```

#### Input
* input `object`
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
google_content.content.products.custombatch({}, context)
```

#### Input
* input `object`
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
google_content.content.productstatuses.custombatch({}, context)
```

#### Input
* input `object`
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

### content.regionalinventory.custombatch
Updates regional inventory for multiple products or regions in a single request.


```js
google_content.content.regionalinventory.custombatch({}, context)
```

#### Input
* input `object`
  * body [RegionalinventoryCustomBatchRequest](#regionalinventorycustombatchrequest)
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
* output [RegionalinventoryCustomBatchResponse](#regionalinventorycustombatchresponse)

### content.returnaddress.custombatch
Batches multiple return address related calls in a single request.


```js
google_content.content.returnaddress.custombatch({}, context)
```

#### Input
* input `object`
  * body [ReturnaddressCustomBatchRequest](#returnaddresscustombatchrequest)
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
* output [ReturnaddressCustomBatchResponse](#returnaddresscustombatchresponse)

### content.returnpolicy.custombatch
Batches multiple return policy related calls in a single request.


```js
google_content.content.returnpolicy.custombatch({}, context)
```

#### Input
* input `object`
  * body [ReturnpolicyCustomBatchRequest](#returnpolicycustombatchrequest)
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
* output [ReturnpolicyCustomBatchResponse](#returnpolicycustombatchresponse)

### content.shippingsettings.custombatch
Retrieves and updates the shipping settings of multiple accounts in a single request.


```js
google_content.content.shippingsettings.custombatch({}, context)
```

#### Input
* input `object`
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

### content.csses.list
Lists CSS domains affiliated with a CSS group.


```js
google_content.content.csses.list({
  "cssGroupId": ""
}, context)
```

#### Input
* input `object`
  * cssGroupId **required** `string`: Required. The CSS group ID of CSS domains to be listed.
  * pageSize `integer`: The maximum number of CSS domains to return. The service may return fewer than this value. If unspecified, at most 50 CSS domains will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
  * pageToken `string`: A page token, received from a previous `ListCsses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCsses` must match the call that provided the page token.
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
* output [ListCssesResponse](#listcssesresponse)

### content.csses.get
Retrieves a single CSS domain by ID.


```js
google_content.content.csses.get({
  "cssGroupId": "",
  "cssDomainId": ""
}, context)
```

#### Input
* input `object`
  * cssGroupId **required** `string`: Required. The ID of the managing account. If this parameter is not the same as [cssDomainId](#cssDomainId), then this ID must be a CSS group ID and `cssDomainId` must be the ID of a CSS domain affiliated with this group.
  * cssDomainId **required** `string`: Required. The ID of the CSS domain to return.
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
* output [Css](#css)

### content.csses.updatelabels
Updates labels that are assigned to a CSS domain by its CSS group.


```js
google_content.content.csses.updatelabels({
  "cssGroupId": "",
  "cssDomainId": ""
}, context)
```

#### Input
* input `object`
  * cssGroupId **required** `string`: Required. The CSS group ID of the updated CSS domain.
  * cssDomainId **required** `string`: Required. The ID of the updated CSS domain.
  * body [LabelIds](#labelids)
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
* output [Css](#css)

### content.accounts.list
Lists the sub-accounts in your Merchant Center account.


```js
google_content.content.accounts.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account.
  * label `string`: If view is set to "css", only return accounts that are assigned label with given ID.
  * maxResults `integer`: The maximum number of accounts to return in the response, used for paging.
  * pageToken `string`: The token returned by the previous request.
  * view `string` (values: MERCHANT, CSS): Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant".
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
google_content.content.accounts.insert({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account.
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
google_content.content.accounts.delete({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account.
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
google_content.content.accounts.get({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account.
  * view `string` (values: MERCHANT, CSS): Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant".
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
google_content.content.accounts.update({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account.
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
google_content.content.accounts.claimwebsite({
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
google_content.content.accounts.link({
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

### content.accounts.listlinks
Returns the list of accounts linked to your Merchant Center account.


```js
google_content.content.accounts.listlinks({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account for which to list links.
  * maxResults `integer`: The maximum number of links to return in the response, used for pagination.
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
* output [AccountsListLinksResponse](#accountslistlinksresponse)

### content.accounts.updatelabels
Updates labels that are assigned to the Merchant Center account by CSS user.


```js
google_content.content.accounts.updatelabels({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account.
  * accountId **required** `string`: The ID of the account whose labels are updated.
  * body [AccountsUpdateLabelsRequest](#accountsupdatelabelsrequest)
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
* output [AccountsUpdateLabelsResponse](#accountsupdatelabelsresponse)

### content.accountstatuses.list
Lists the statuses of the sub-accounts in your Merchant Center account.


```js
google_content.content.accountstatuses.list({
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
google_content.content.accountstatuses.get({
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
google_content.content.accounttax.list({
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
google_content.content.accounttax.get({
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
google_content.content.accounttax.update({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account for which to get/update account tax settings.
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
google_content.content.datafeeds.list({
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
google_content.content.datafeeds.insert({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
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
google_content.content.datafeeds.delete({
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
*Output schema unknown*

### content.datafeeds.get
Retrieves a datafeed configuration from your Merchant Center account.


```js
google_content.content.datafeeds.get({
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
google_content.content.datafeeds.update({
  "merchantId": "",
  "datafeedId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
  * datafeedId **required** `string`: The ID of the datafeed.
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
google_content.content.datafeeds.fetchnow({
  "merchantId": "",
  "datafeedId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the datafeed. This account cannot be a multi-client account.
  * datafeedId **required** `string`: The ID of the datafeed to be fetched.
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
google_content.content.datafeedstatuses.list({
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
google_content.content.datafeedstatuses.get({
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

### content.liasettings.list
Lists the LIA settings of the sub-accounts in your Merchant Center account.


```js
google_content.content.liasettings.list({
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
google_content.content.liasettings.get({
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
google_content.content.liasettings.update({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account for which to get or update LIA settings.
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
google_content.content.liasettings.getaccessiblegmbaccounts({
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
google_content.content.liasettings.requestgmbaccess({
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
google_content.content.liasettings.requestinventoryverification({
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
google_content.content.liasettings.setinventoryverificationcontact({
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
google_content.content.liasettings.setposdataprovider({
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
google_content.content.orderinvoices.createchargeinvoice({
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
google_content.content.orderinvoices.createrefundinvoice({
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
google_content.content.orderreports.listdisbursements({
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
google_content.content.orderreports.listtransactions({
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
google_content.content.orderreturns.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * acknowledged `boolean`: Obtains order returns that match the acknowledgement status. When set to true, obtains order returns that have been acknowledged. When false, obtains order returns that have not been acknowledged. When not provided, obtains order returns regardless of their acknowledgement status. We recommend using this filter set to `false`, in conjunction with the `acknowledge` call, such that only un-acknowledged order returns are returned. 
  * createdEndDate `string`: Obtains order returns created before this date (inclusively), in ISO 8601 format.
  * createdStartDate `string`: Obtains order returns created after this date (inclusively), in ISO 8601 format.
  * googleOrderIds `array`: Obtains order returns with the specified order ids. If this parameter is provided, createdStartDate, createdEndDate, shipmentType, shipmentStatus, shipmentState and acknowledged parameters must be not set. Note: if googleOrderId and shipmentTrackingNumber parameters are provided, the obtained results will include all order returns that either match the specified order id or the specified tracking number.
  * maxResults `integer`: The maximum number of order returns to return in the response, used for paging. The default value is 25 returns per page, and the maximum allowed value is 250 returns per page.
  * orderBy `string` (values: RETURN_CREATION_TIME_DESC, RETURN_CREATION_TIME_ASC): Return the results in the specified order.
  * pageToken `string`: The token returned by the previous request.
  * shipmentStates `array`: Obtains order returns that match any shipment state provided in this parameter. When this parameter is not provided, order returns are obtained regardless of their shipment states.
  * shipmentStatus `array`: Obtains order returns that match any shipment status provided in this parameter. When this parameter is not provided, order returns are obtained regardless of their shipment statuses.
  * shipmentTrackingNumbers `array`: Obtains order returns with the specified tracking numbers. If this parameter is provided, createdStartDate, createdEndDate, shipmentType, shipmentStatus, shipmentState and acknowledged parameters must be not set. Note: if googleOrderId and shipmentTrackingNumber parameters are provided, the obtained results will include all order returns that either match the specified order id or the specified tracking number.
  * shipmentTypes `array`: Obtains order returns that match any shipment type provided in this parameter. When this parameter is not provided, order returns are obtained regardless of their shipment types.
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

### content.orderreturns.createorderreturn
Create return in your Merchant Center account.


```js
google_content.content.orderreturns.createorderreturn({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * body [OrderreturnsCreateOrderReturnRequest](#orderreturnscreateorderreturnrequest)
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
* output [OrderreturnsCreateOrderReturnResponse](#orderreturnscreateorderreturnresponse)

### content.orderreturns.get
Retrieves an order return from your Merchant Center account.


```js
google_content.content.orderreturns.get({
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

### content.orderreturns.acknowledge
Acks an order return in your Merchant Center account.


```js
google_content.content.orderreturns.acknowledge({
  "merchantId": "",
  "returnId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * returnId **required** `string`: The ID of the return.
  * body [OrderreturnsAcknowledgeRequest](#orderreturnsacknowledgerequest)
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
* output [OrderreturnsAcknowledgeResponse](#orderreturnsacknowledgeresponse)

### content.orderreturns.process
Processes return in your Merchant Center account.


```js
google_content.content.orderreturns.process({
  "merchantId": "",
  "returnId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * returnId **required** `string`: The ID of the return.
  * body [OrderreturnsProcessRequest](#orderreturnsprocessrequest)
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
* output [OrderreturnsProcessResponse](#orderreturnsprocessresponse)

### content.orders.list
Lists the orders in your Merchant Center account.


```js
google_content.content.orders.list({
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
google_content.content.orders.get({
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
google_content.content.orders.acknowledge({
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
google_content.content.orders.cancel({
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
google_content.content.orders.cancellineitem({
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
google_content.content.orders.instorerefundlineitem({
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

### content.orders.refunditem
Issues a partial or total refund for items and shipment.


```js
google_content.content.orders.refunditem({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order to refund.
  * body [OrdersRefundItemRequest](#ordersrefunditemrequest)
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
* output [OrdersRefundItemResponse](#ordersrefunditemresponse)

### content.orders.refundorder
Issues a partial or total refund for an order.


```js
google_content.content.orders.refundorder({
  "merchantId": "",
  "orderId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that manages the order. This cannot be a multi-client account.
  * orderId **required** `string`: The ID of the order to refund.
  * body [OrdersRefundOrderRequest](#ordersrefundorderrequest)
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
* output [OrdersRefundOrderResponse](#ordersrefundorderresponse)

### content.orders.rejectreturnlineitem
Rejects return on an line item.


```js
google_content.content.orders.rejectreturnlineitem({
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

### content.orders.returnrefundlineitem
Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.


```js
google_content.content.orders.returnrefundlineitem({
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
google_content.content.orders.setlineitemmetadata({
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
google_content.content.orders.shiplineitems({
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
google_content.content.orders.createtestreturn({
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
google_content.content.orders.updatelineitemshippingdetails({
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
google_content.content.orders.updatemerchantorderid({
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
google_content.content.orders.updateshipment({
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
google_content.content.orders.getbymerchantorderid({
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

### content.ordertrackingsignals.create
Creates new order tracking signal.


```js
google_content.content.ordertrackingsignals.create({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the merchant for which the order signal is created.
  * body [OrderTrackingSignal](#ordertrackingsignal)
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
* output [OrderTrackingSignal](#ordertrackingsignal)

### content.pos.inventory
Submit inventory for the given merchant.


```js
google_content.content.pos.inventory({
  "merchantId": "",
  "targetMerchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the POS or inventory data provider.
  * targetMerchantId **required** `string`: The ID of the target merchant.
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
google_content.content.pos.sale({
  "merchantId": "",
  "targetMerchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the POS or inventory data provider.
  * targetMerchantId **required** `string`: The ID of the target merchant.
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
google_content.content.pos.list({
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
google_content.content.pos.insert({
  "merchantId": "",
  "targetMerchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the POS or inventory data provider.
  * targetMerchantId **required** `string`: The ID of the target merchant.
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
google_content.content.pos.delete({
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
*Output schema unknown*

### content.pos.get
Retrieves information about the given store.


```js
google_content.content.pos.get({
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
google_content.content.products.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the products. This account cannot be a multi-client account.
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
google_content.content.products.insert({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * feedId `string`: The Content API Supplemental Feed ID.
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
google_content.content.products.delete({
  "merchantId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * productId **required** `string`: The REST ID of the product.
  * feedId `string`: The Content API Supplemental Feed ID.
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
google_content.content.products.get({
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

### content.localinventory.insert
Updates the local inventory of a product in your Merchant Center account.


```js
google_content.content.localinventory.insert({
  "merchantId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * productId **required** `string`: The REST ID of the product for which to update local inventory.
  * body [LocalInventory](#localinventory)
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
* output [LocalInventory](#localinventory)

### content.regionalinventory.insert
Update the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.


```js
google_content.content.regionalinventory.insert({
  "merchantId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * productId **required** `string`: The REST ID of the product for which to update the regional inventory.
  * body [RegionalInventory](#regionalinventory)
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
* output [RegionalInventory](#regionalinventory)

### content.productstatuses.list
Lists the statuses of the products in your Merchant Center account.


```js
google_content.content.productstatuses.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the products. This account cannot be a multi-client account.
  * destinations `array`: If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
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
google_content.content.productstatuses.get({
  "merchantId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that contains the product. This account cannot be a multi-client account.
  * productId **required** `string`: The REST ID of the product.
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
* output [ProductStatus](#productstatus)

### content.productstatuses.repricingreports.list
Lists the metrics report for a given Repricing product. Reports of the last 3 days may not be complete.


```js
google_content.content.productstatuses.repricingreports.list({
  "merchantId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: Required. Id of the merchant who owns the Repricing rule.
  * productId **required** `string`: Required. Id of the Repricing product. Also known as the [REST_ID](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.id)
  * endDate `string`: Gets Repricing reports on and before this date in the merchant's timezone. You can only retrieve data up to 3 days ago (default) or earlier. Format is YYYY-MM-DD.
  * pageSize `integer`: Maximum number of days of reports to return. There can be more than one rule report returned per day. For example, if 3 rule types got applied to the same product within a 24-hour period, then a page_size of 1 will return 3 rule reports. The page size defaults to 50 and values above 1000 are coerced to 1000. This service may return fewer days of reports than this value, for example, if the time between your start and end date is less than the page size.
  * pageToken `string`: Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
  * ruleId `string`: Id of the Repricing rule. If specified, only gets this rule's reports.
  * startDate `string`: Gets Repricing reports on and after this date in the merchant's timezone, up to one year ago. Do not use a start date later than 3 days ago (default). Format is YYYY-MM-DD.
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
* output [ListRepricingProductReportsResponse](#listrepricingproductreportsresponse)

### content.pubsubnotificationsettings.get
Retrieves a Merchant Center account's pubsub notification settings.


```js
google_content.content.pubsubnotificationsettings.get({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account for which to get pubsub notification settings.
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
* output [PubsubNotificationSettings](#pubsubnotificationsettings)

### content.pubsubnotificationsettings.update
Register a Merchant Center account for pubsub notifications. Note that cloud topic name should not be provided as part of the request.


```js
google_content.content.pubsubnotificationsettings.update({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account.
  * body [PubsubNotificationSettings](#pubsubnotificationsettings)
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
* output [PubsubNotificationSettings](#pubsubnotificationsettings)

### content.regions.list
Lists the regions in your Merchant Center account.


```js
google_content.content.regions.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: Required. The id of the merchant for which to list region definitions.
  * pageSize `integer`: The maximum number of regions to return. The service may return fewer than this value. If unspecified, at most 50 rules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
  * pageToken `string`: A page token, received from a previous `ListRegions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegions` must match the call that provided the page token.
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
* output [ListRegionsResponse](#listregionsresponse)

### content.regions.create
Creates a region definition in your Merchant Center account.


```js
google_content.content.regions.create({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: Required. The id of the merchant for which to create region definition.
  * regionId `string`: Required. The id of the region to create.
  * body [Region](#region)
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
* output [Region](#region)

### content.regions.delete
Deletes a region definition from your Merchant Center account.


```js
google_content.content.regions.delete({
  "merchantId": "",
  "regionId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: Required. The id of the merchant for which to delete region definition.
  * regionId **required** `string`: Required. The id of the region to delete.
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

### content.regions.get
Retrieves a region defined in your Merchant Center account.


```js
google_content.content.regions.get({
  "merchantId": "",
  "regionId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: Required. The id of the merchant for which to retrieve region definition.
  * regionId **required** `string`: Required. The id of the region to retrieve.
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
* output [Region](#region)

### content.regions.patch
Updates a region definition in your Merchant Center account.


```js
google_content.content.regions.patch({
  "merchantId": "",
  "regionId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: Required. The id of the merchant for which to update region definition.
  * regionId **required** `string`: Required. The id of the region to update.
  * updateMask `string`: Optional. The field mask indicating the fields to update.
  * body [Region](#region)
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
* output [Region](#region)

### content.repricingrules.list
Lists the repricing rules in your Merchant Center account.


```js
google_content.content.repricingrules.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: Required. The id of the merchant who owns the repricing rule.
  * countryCode `string`: CLDR country code (e.g. "US"), used as a filter on repricing rules.
  * languageCode `string`: The two-letter ISO 639-1 language code associated with the repricing rule, used as a filter.
  * pageSize `integer`: The maximum number of repricing rules to return. The service may return fewer than this value. If unspecified, at most 50 rules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
  * pageToken `string`: A page token, received from a previous `ListRepricingRules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRepricingRules` must match the call that provided the page token.
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
* output [ListRepricingRulesResponse](#listrepricingrulesresponse)

### content.repricingrules.create
Creates a repricing rule for your Merchant Center account.


```js
google_content.content.repricingrules.create({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: Required. The id of the merchant who owns the repricing rule.
  * ruleId `string`: Required. The id of the rule to create.
  * body [RepricingRule](#repricingrule)
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
* output [RepricingRule](#repricingrule)

### content.repricingrules.delete
Deletes a repricing rule in your Merchant Center account.


```js
google_content.content.repricingrules.delete({
  "merchantId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: Required. The id of the merchant who owns the repricing rule.
  * ruleId **required** `string`: Required. The id of the rule to Delete.
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

### content.repricingrules.get
Retrieves a repricing rule from your Merchant Center account.


```js
google_content.content.repricingrules.get({
  "merchantId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: Required. The id of the merchant who owns the repricing rule.
  * ruleId **required** `string`: Required. The id of the rule to retrieve.
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
* output [RepricingRule](#repricingrule)

### content.repricingrules.patch
Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.


```js
google_content.content.repricingrules.patch({
  "merchantId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: Required. The id of the merchant who owns the repricing rule.
  * ruleId **required** `string`: Required. The id of the rule to update.
  * body [RepricingRule](#repricingrule)
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
* output [RepricingRule](#repricingrule)

### content.repricingrules.repricingreports.list
Lists the metrics report for a given Repricing rule. Reports of the last 3 days may not be complete.


```js
google_content.content.repricingrules.repricingreports.list({
  "merchantId": "",
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: Required. Id of the merchant who owns the Repricing rule.
  * ruleId **required** `string`: Required. Id of the Repricing rule.
  * endDate `string`: Gets Repricing reports on and before this date in the merchant's timezone. You can only retrieve data up to 3 days ago (default) or earlier. Format: YYYY-MM-DD.
  * pageSize `integer`: Maximum number of daily reports to return. Each report includes data from a single 24-hour period. The page size defaults to 50 and values above 1000 are coerced to 1000. This service may return fewer days than this value, for example, if the time between your start and end date is less than page size.
  * pageToken `string`: Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
  * startDate `string`: Gets Repricing reports on and after this date in the merchant's timezone, up to one year ago. Do not use a start date later than 3 days ago (default). Format: YYYY-MM-DD.
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
* output [ListRepricingRuleReportsResponse](#listrepricingrulereportsresponse)

### content.returnaddress.list
Lists the return addresses of the Merchant Center account.


```js
google_content.content.returnaddress.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The Merchant Center account to list return addresses for.
  * country `string`: List only return addresses applicable to the given country of sale. When omitted, all return addresses are listed.
  * maxResults `integer`: The maximum number of addresses in the response, used for paging.
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
* output [ReturnaddressListResponse](#returnaddresslistresponse)

### content.returnaddress.insert
Inserts a return address for the Merchant Center account.


```js
google_content.content.returnaddress.insert({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The Merchant Center account to insert a return address for.
  * body [ReturnAddress](#returnaddress)
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
* output [ReturnAddress](#returnaddress)

### content.returnaddress.delete
Deletes a return address for the given Merchant Center account.


```js
google_content.content.returnaddress.delete({
  "merchantId": "",
  "returnAddressId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The Merchant Center account from which to delete the given return address.
  * returnAddressId **required** `string`: Return address ID generated by Google.
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

### content.returnaddress.get
Gets a return address of the Merchant Center account.


```js
google_content.content.returnaddress.get({
  "merchantId": "",
  "returnAddressId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The Merchant Center account to get a return address for.
  * returnAddressId **required** `string`: Return address ID generated by Google.
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
* output [ReturnAddress](#returnaddress)

### content.returnpolicy.list
Lists the return policies of the Merchant Center account.


```js
google_content.content.returnpolicy.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The Merchant Center account to list return policies for.
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
* output [ReturnpolicyListResponse](#returnpolicylistresponse)

### content.returnpolicy.insert
Inserts a return policy for the Merchant Center account.


```js
google_content.content.returnpolicy.insert({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The Merchant Center account to insert a return policy for.
  * body [ReturnPolicy](#returnpolicy)
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
* output [ReturnPolicy](#returnpolicy)

### content.returnpolicy.delete
Deletes a return policy for the given Merchant Center account.


```js
google_content.content.returnpolicy.delete({
  "merchantId": "",
  "returnPolicyId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The Merchant Center account from which to delete the given return policy.
  * returnPolicyId **required** `string`: Return policy ID generated by Google.
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

### content.returnpolicy.get
Gets a return policy of the Merchant Center account.


```js
google_content.content.returnpolicy.get({
  "merchantId": "",
  "returnPolicyId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The Merchant Center account to get a return policy for.
  * returnPolicyId **required** `string`: Return policy ID generated by Google.
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
* output [ReturnPolicy](#returnpolicy)

### content.settlementreports.list
Retrieves a list of settlement reports from your Merchant Center account.


```js
google_content.content.settlementreports.list({
  "merchantId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The Merchant Center account to list settlements for.
  * maxResults `integer`: The maximum number of settlements to return in the response, used for paging. The default value is 200 returns per page, and the maximum allowed value is 5000 returns per page.
  * pageToken `string`: The token returned by the previous request.
  * transferEndDate `string`: Obtains settlements which have transactions before this date (inclusively), in ISO 8601 format.
  * transferStartDate `string`: Obtains settlements which have transactions after this date (inclusively), in ISO 8601 format.
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
* output [SettlementreportsListResponse](#settlementreportslistresponse)

### content.settlementreports.get
Retrieves a settlement report from your Merchant Center account.


```js
google_content.content.settlementreports.get({
  "merchantId": "",
  "settlementId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The Merchant Center account of the settlement report.
  * settlementId **required** `string`: The Google-provided ID of the settlement.
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
* output [SettlementReport](#settlementreport)

### content.settlementtransactions.list
Retrieves a list of transactions for the settlement.


```js
google_content.content.settlementtransactions.list({
  "merchantId": "",
  "settlementId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The Merchant Center account to list transactions for.
  * settlementId **required** `string`: The Google-provided ID of the settlement.
  * maxResults `integer`: The maximum number of transactions to return in the response, used for paging. The default value is 200 transactions per page, and the maximum allowed value is 5000 transactions per page.
  * pageToken `string`: The token returned by the previous request.
  * transactionIds `array`: The list of transactions to return. If not set, all transactions will be returned.
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
* output [SettlementtransactionsListResponse](#settlementtransactionslistresponse)

### content.shippingsettings.list
Lists the shipping settings of the sub-accounts in your Merchant Center account.


```js
google_content.content.shippingsettings.list({
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
google_content.content.shippingsettings.get({
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
google_content.content.shippingsettings.update({
  "merchantId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
  * accountId **required** `string`: The ID of the account for which to get/update shipping settings.
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
google_content.content.shippingsettings.getsupportedcarriers({
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
google_content.content.shippingsettings.getsupportedholidays({
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
google_content.content.shippingsettings.getsupportedpickupservices({
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
google_content.content.orders.createtestorder({
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
google_content.content.orders.advancetestorder({
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
google_content.content.orders.canceltestorderbycustomer({
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
google_content.content.orders.gettestordertemplate({
  "merchantId": "",
  "templateName": ""
}, context)
```

#### Input
* input `object`
  * merchantId **required** `string`: The ID of the account that should manage the order. This cannot be a multi-client account.
  * templateName **required** `string` (values: TEMPLATE1, TEMPLATE2, TEMPLATE1A, TEMPLATE1B, TEMPLATE3, TEMPLATE4): The name of the template to retrieve.
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
  * adsLinks `array`: List of linked Ads accounts that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected either in the Ads interface or through the AdWords API. To delete an active link, or to cancel a link request, remove it from the list.
    * items [AccountAdsLink](#accountadslink)
  * adultContent `boolean`: Indicates whether the merchant sells adult content.
  * businessInformation [AccountBusinessInformation](#accountbusinessinformation)
  * cssId `string`: ID of CSS the account belongs to.
  * googleMyBusinessLink [AccountGoogleMyBusinessLink](#accountgooglemybusinesslink)
  * id `string`: Required for update. Merchant Center account ID.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#account`"
  * labelIds `array`: List of label IDs that are assigned to the account by CSS.
    * items `string`
  * name `string`: Required. Display name for the account.
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

### AccountAdsLink
* AccountAdsLink `object`
  * adsId `string`: Customer ID of the Ads account.
  * status `string`: Status of the link between this Merchant Center account and the Ads account. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in Google Ads or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. Acceptable values are: - "`active`" - "`pending`" 

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
  * gmbAccountId `string`: The ID of the GMB account. If this is provided, then `gmbEmail` is ignored. The value of this field should match the `accountId` used by the GMB API.
  * gmbEmail `string`: The GMB email address of which a specific account within a GMB account. A sample account within a GMB account could be a business account with set of locations, managed under the GMB account.
  * status `string`: Status of the link between this Merchant Center account and the GMB account. Acceptable values are: - "`active`" - "`pending`" 

### AccountIdentifier
* AccountIdentifier `object`
  * aggregatorId `string`: The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount).
  * merchantId `string`: The merchant account ID, set for individual accounts and subaccounts.

### AccountLabel
* AccountLabel `object`: Label assigned by CSS domain or CSS group to one of its sub-accounts.
  * accountId `string`: Immutable. The ID of account this label belongs to.
  * description `string`: The description of this label.
  * labelId `string`: Output only. The ID of the label.
  * name `string`: The display name of this label.

### AccountStatus
* AccountStatus `object`: The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time.
  * accountId `string`: The ID of the account for which the status is reported.
  * accountLevelIssues `array`: A list of account level issues.
    * items [AccountStatusAccountLevelIssue](#accountstatusaccountlevelissue)
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
  * view `string`: Controls which fields are visible. Only applicable if the method is 'get'.

### AccountsCustomBatchRequestEntryLinkRequest
* AccountsCustomBatchRequestEntryLinkRequest `object`
  * action `string`: Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" 
  * linkType `string`: Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" 
  * linkedAccountId `string`: The ID of the linked account.
  * services `array`: Provided services. Acceptable values are: - "`shoppingAdsProductManagement`" - "`shoppingAdsOther`" - "`shoppingActionsProductManagement`" - "`shoppingActionsOrderManagement`" - "`shoppingActionsOther`" 
    * items `string`

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

### AccountsLinkRequest
* AccountsLinkRequest `object`
  * action `string`: Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" 
  * linkType `string`: Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" 
  * linkedAccountId `string`: The ID of the linked account.
  * services `array`: List of provided services.
    * items `string`

### AccountsLinkResponse
* AccountsLinkResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountsLinkResponse".

### AccountsListLinksResponse
* AccountsListLinksResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountsListLinksResponse".
  * links `array`: The list of available links.
    * items [LinkedAccount](#linkedaccount)
  * nextPageToken `string`: The token for the retrieval of the next page of links.

### AccountsListResponse
* AccountsListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountsListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of accounts.
  * resources `array`
    * items [Account](#account)

### AccountsUpdateLabelsRequest
* AccountsUpdateLabelsRequest `object`
  * labelIds `array`: The IDs of labels that should be assigned to the account.
    * items `string`

### AccountsUpdateLabelsResponse
* AccountsUpdateLabelsResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#accountsUpdateLabelsResponse".

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
  * priceAmount [Price](#price)
  * taxAmount [Price](#price)

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

### Css
* Css `object`: Information about CSS domain.
  * cssDomainId `string`: Output only. Immutable. The CSS domain ID.
  * cssGroupId `string`: Output only. Immutable. The ID of the CSS group this CSS domain is affiliated with. Only populated for CSS group users.
  * displayName `string`: Output only. Immutable. The CSS domain's display name, used when space is constrained.
  * fullName `string`: Output only. Immutable. The CSS domain's full name.
  * homepageUri `string`: Output only. Immutable. The CSS domain's homepage.
  * labelIds `array`: A list of label IDs that are assigned to this CSS domain by its CSS group. Only populated for CSS group users.
    * items `string`

### CustomAttribute
* CustomAttribute `object`
  * groupValues `array`: Subattributes within this attribute group. Exactly one of value or groupValues must be provided.
    * items [CustomAttribute](#customattribute)
  * name `string`: The name of the attribute. Underscores will be replaced by spaces upon insertion.
  * value `string`: The value of the attribute.

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
  * contentType `string`: Required. The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are supported. Acceptable values are: - "`local products`" - "`product inventory`" - "`products`" 
  * fetchSchedule [DatafeedFetchSchedule](#datafeedfetchschedule)
  * fileName `string`: Required. The filename of the feed. All feeds must have a unique file name.
  * format [DatafeedFormat](#datafeedformat)
  * id `string`: Required for update. The ID of the data feed.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#datafeed`"
  * name `string`: Required for insert. A descriptive name of the data feed.
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

### Date
* Date `object`: Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
  * day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

### DateTime
* DateTime `object`: Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year is 0, the DateTime is considered not to have a specific year. month and day must have valid, non-zero values. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
  * day `integer`: Required. Day of month. Must be from 1 to 31 and valid for the year and month.
  * hours `integer`: Required. Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  * minutes `integer`: Required. Minutes of hour of day. Must be from 0 to 59.
  * month `integer`: Required. Month of year. Must be from 1 to 12.
  * nanos `integer`: Required. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * seconds `integer`: Required. Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  * timeZone [TimeZone](#timezone)
  * utcOffset `string`: UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.
  * year `integer`: Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.

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

### InapplicabilityDetails
* InapplicabilityDetails `object`: Map of inapplicability details.
  * inapplicableCount `string`: Count of this inapplicable reason code.
  * inapplicableReason `string` (values: INAPPLICABLE_REASON_UNSPECIFIED, CANNOT_BEAT_BUYBOX_WINNER, ALREADY_WINNING_BUYBOX, TRIUMPHED_OVER_BY_SAME_TYPE_RULE, TRIUMPHED_OVER_BY_OTHER_RULE_ON_OFFER, RESTRICTIONS_NOT_MET): Reason code this rule was not applicable.

### Installment
* Installment `object`
  * amount [Price](#price)
  * months `string`: The number of installments the buyer has to pay.

### InvoiceSummary
* InvoiceSummary `object`
  * additionalChargeSummaries `array`: Summary of the total amounts of the additional charges.
    * items [InvoiceSummaryAdditionalChargeSummary](#invoicesummaryadditionalchargesummary)
  * productTotal [Amount](#amount)

### InvoiceSummaryAdditionalChargeSummary
* InvoiceSummaryAdditionalChargeSummary `object`
  * totalAmount [Amount](#amount)
  * type `string`: [required] Type of the additional charge. Acceptable values are: - "`shipping`" 

### LabelIds
* LabelIds `object`: The IDs of labels that should be assigned to the CSS domain.
  * labelIds `array`: The list of label IDs.
    * items `string`

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

### LinkService
* LinkService `object`
  * service `string`: Service provided to or by the linked account. Acceptable values are: - "`shoppingActionsOrderManagement`" - "`shoppingActionsProductManagement`" - "`shoppingAdsProductManagement`" 
  * status `string`: Status of the link Acceptable values are: - "`active`" - "`inactive`" - "`pending`" 

### LinkedAccount
* LinkedAccount `object`
  * linkedAccountId `string`: The ID of the linked account.
  * services `array`: List of provided services.
    * items [LinkService](#linkservice)

### ListAccountLabelsResponse
* ListAccountLabelsResponse `object`: Response message for the `ListAccountLabels` method.
  * accountLabels `array`: The labels from the specified account.
    * items [AccountLabel](#accountlabel)
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### ListCssesResponse
* ListCssesResponse `object`: The response message for the `ListCsses` method
  * csses `array`: The CSS domains affiliated with the specified CSS group.
    * items [Css](#css)
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### ListRegionsResponse
* ListRegionsResponse `object`: Response message for the `ListRegions` method.
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * regions `array`: The regions from the specified merchant.
    * items [Region](#region)

### ListRepricingProductReportsResponse
* ListRepricingProductReportsResponse `object`: Response message for the ListRepricingProductReports method.
  * nextPageToken `string`: A token for retrieving the next page. Its absence means there is no subsequent page.
  * repricingProductReports `array`: Periodic reports for the given Repricing product.
    * items [RepricingProductReport](#repricingproductreport)

### ListRepricingRuleReportsResponse
* ListRepricingRuleReportsResponse `object`: Response message for the ListRepricingRuleReports method.
  * nextPageToken `string`: A token for retrieving the next page. Its absence means there is no subsequent page.
  * repricingRuleReports `array`: Daily reports for the given Repricing rule.
    * items [RepricingRuleReport](#repricingrulereport)

### ListRepricingRulesResponse
* ListRepricingRulesResponse `object`: Response message for the `ListRepricingRules` method.
  * nextPageToken `string`: A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
  * repricingRules `array`: The rules from the specified merchant.
    * items [RepricingRule](#repricingrule)

### LocalInventory
* LocalInventory `object`: Local inventory resource. For accepted attribute values, see the local product inventory feed specification.
  * availability `string`: Availability of the product. For accepted attribute values, see the local product inventory feed specification.
  * instoreProductLocation `string`: In-store product location.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#localInventory`"
  * pickupMethod `string`: Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the local product inventory feed // specification.
  * pickupSla `string`: Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the local product inventory feed specification.
  * price [Price](#price)
  * quantity `integer`: Quantity of the product. Must be nonnegative.
  * salePrice [Price](#price)
  * salePriceEffectiveDate `string`: A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates may be specified as 'null' if undecided.
  * storeCode `string`: Required. Store code of this local inventory resource.

### LocalinventoryCustomBatchRequest
* LocalinventoryCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [LocalinventoryCustomBatchRequestEntry](#localinventorycustombatchrequestentry)

### LocalinventoryCustomBatchRequestEntry
* LocalinventoryCustomBatchRequestEntry `object`: Batch entry encoding a single local inventory update request.
  * batchId `integer`: An entry ID, unique within the batch request.
  * localInventory [LocalInventory](#localinventory)
  * merchantId `string`: The ID of the managing account.
  * method `string`: Method of the batch request entry. Acceptable values are: - "`insert`" 
  * productId `string`: The ID of the product for which to update local inventory.

### LocalinventoryCustomBatchResponse
* LocalinventoryCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [LocalinventoryCustomBatchResponseEntry](#localinventorycustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#localinventoryCustomBatchResponse".

### LocalinventoryCustomBatchResponseEntry
* LocalinventoryCustomBatchResponseEntry `object`: Batch entry encoding a single local inventory update response.
  * batchId `integer`: The ID of the request entry this entry responds to.
  * errors [Errors](#errors)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#localinventoryCustomBatchResponseEntry`"

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
  * returnPricingInfo [ReturnPricingInfo](#returnpricinginfo)
  * returnShipments `array`: Shipments of the return.
    * items [ReturnShipment](#returnshipment)

### MerchantOrderReturnItem
* MerchantOrderReturnItem `object`
  * customerReturnReason [CustomerReturnReason](#customerreturnreason)
  * itemId `string`: Product level item ID. If the returned items are of the same product, they will have the same ID.
  * merchantRejectionReason [MerchantRejectionReason](#merchantrejectionreason)
  * merchantReturnReason [RefundReason](#refundreason)
  * product [OrderLineItemProduct](#orderlineitemproduct)
  * refundableAmount [MonetaryAmount](#monetaryamount)
  * returnItemId `string`: Unit level ID for the return item. Different units of the same product will have different IDs.
  * returnShipmentIds `array`: IDs of the return shipments that this return item belongs to.
    * items `string`
  * shipmentGroupId `string`: ID of the original shipment group. Provided for shipments with invoice support.
  * shipmentUnitId `string`: ID of the shipment unit assigned by the merchant. Provided for shipments with invoice support.
  * state `string`: State of the item. Acceptable values are: - "`canceled`" - "`new`" - "`received`" - "`refunded`" - "`rejected`" 

### MerchantRejectionReason
* MerchantRejectionReason `object`
  * description `string`: Description of the reason.
  * reasonCode `string`: Code of the rejection reason.

### MinimumOrderValueTable
* MinimumOrderValueTable `object`
  * storeCodeSetWithMovs `array`
    * items [MinimumOrderValueTableStoreCodeSetWithMov](#minimumordervaluetablestorecodesetwithmov)

### MinimumOrderValueTableStoreCodeSetWithMov
* MinimumOrderValueTableStoreCodeSetWithMov `object`: A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency.
  * storeCodes `array`: A list of unique store codes or empty for the catch all.
    * items `string`
  * value [Price](#price)

### MonetaryAmount
* MonetaryAmount `object`
  * priceAmount [Price](#price)
  * taxAmount [Price](#price)

### Order
* Order `object`: Order. Production access (all methods) requires the order manager role. Sandbox access does not.
  * acknowledged `boolean`: Whether the order was acknowledged.
  * annotations `array`: List of key-value pairs that are attached to a given order.
    * items [OrderOrderAnnotation](#orderorderannotation)
  * billingAddress [OrderAddress](#orderaddress)
  * customer [OrderCustomer](#ordercustomer)
  * deliveryDetails [OrderDeliveryDetails](#orderdeliverydetails)
  * id `string`: The REST ID of the order. Globally unique.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#order`"
  * lineItems `array`: Line items that are ordered.
    * items [OrderLineItem](#orderlineitem)
  * merchantId `string`
  * merchantOrderId `string`: Merchant-provided ID of the order.
  * netPriceAmount [Price](#price)
  * netTaxAmount [Price](#price)
  * paymentStatus `string`: The status of the payment. Acceptable values are: - "`paymentCaptured`" - "`paymentRejected`" - "`paymentSecured`" - "`pendingAuthorization`" 
  * pickupDetails [OrderPickupDetails](#orderpickupdetails)
  * placedDate `string`: The date when the order was placed, in ISO 8601 format.
  * promotions `array`: Promotions associated with the order. To determine which promotions apply to which products, check the `Promotions[].appliedItems[].lineItemId` field against the `LineItems[].id` field for each promotion. If a promotion is applied to more than 1 offerId, divide the discount value by the number of affected offers to determine how much discount to apply to each offerId. Examples: 1. To calculate price paid by the customer for a single line item including the discount: For each promotion, subtract the `LineItems[].adjustments[].priceAdjustment.value` amount from the `LineItems[].Price.value`. 2. To calculate price paid by the customer for a single line item including the discount in case of multiple quantity: For each promotion, divide the `LineItems[].adjustments[].priceAdjustment.value` by the quantity of products then subtract the resulting value from the `LineItems[].Product.Price.value` for each quantity item. Only 1 promotion can be applied to an offerId in a given order. To refund an item which had a promotion applied to it, make sure to refund the amount after first subtracting the promotion discount from the item price. More details about the program are here.
    * items [OrderPromotion](#orderpromotion)
  * refunds `array`: Refunds for the order.
    * items [OrderRefund](#orderrefund)
  * shipments `array`: Shipments of the order.
    * items [OrderShipment](#ordershipment)
  * shippingCost [Price](#price)
  * shippingCostTax [Price](#price)
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
  * fullName `string`: Full name of the customer.
  * invoiceReceivingEmail `string`: Email address for the merchant to send value-added tax or invoice documentation of the order. Only the last document sent is made available to the customer. For more information, see About automated VAT invoicing for Buy on Google.
  * loyaltyInfo [OrderCustomerLoyaltyInfo](#ordercustomerloyaltyinfo)
  * marketingRightsInfo [OrderCustomerMarketingRightsInfo](#ordercustomermarketingrightsinfo)

### OrderCustomerLoyaltyInfo
* OrderCustomerLoyaltyInfo `object`
  * loyaltyNumber `string`: The loyalty card/membership number.
  * name `string`: Name of card/membership holder, this field will be populated when

### OrderCustomerMarketingRightsInfo
* OrderCustomerMarketingRightsInfo `object`
  * explicitMarketingPreference `string`: Last known customer selection regarding marketing preferences. In certain cases this selection might not be known, so this field would be empty. If a customer selected `granted` in their most recent order, they can be subscribed to marketing emails. Customers who have chosen `denied` must not be subscribed, or must be unsubscribed if already opted-in. Acceptable values are: - "`denied`" - "`granted`" 
  * lastUpdatedTimestamp `string`: Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet.
  * marketingEmailAddress `string`: Email address that can be used for marketing purposes. The field may be empty even if `explicitMarketingPreference` is 'granted'. This happens when retrieving an old order from the customer who deleted their account.

### OrderDeliveryDetails
* OrderDeliveryDetails `object`
  * address [OrderAddress](#orderaddress)
  * phoneNumber `string`: The phone number of the person receiving the delivery.

### OrderLineItem
* OrderLineItem `object`
  * adjustments `array`: Price and tax adjustments applied on the line item.
    * items [OrderLineItemAdjustment](#orderlineitemadjustment)
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
  * quantityUndeliverable `integer`: Number of items undeliverable.
  * returnInfo [OrderLineItemReturnInfo](#orderlineitemreturninfo)
  * returns `array`: Returns of the line item.
    * items [OrderReturn](#orderreturn)
  * shippingDetails [OrderLineItemShippingDetails](#orderlineitemshippingdetails)
  * tax [Price](#price)

### OrderLineItemAdjustment
* OrderLineItemAdjustment `object`
  * priceAdjustment [Price](#price)
  * taxAdjustment [Price](#price)
  * type `string`: Type of this adjustment. Acceptable values are: - "`promotion`" 

### OrderLineItemProduct
* OrderLineItemProduct `object`
  * brand `string`: Brand of the item.
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
  * pickupPromiseInMinutes `integer`: The promised time in minutes in which the order will be ready for pickup. This only applies to buy-online-pickup-in-store same-day order.
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

### OrderOrderAnnotation
* OrderOrderAnnotation `object`
  * key `string`: Key for additional google provided (as key-value pairs) annotation.
  * value `string`: Value for additional google provided (as key-value pairs) annotation.

### OrderPickupDetails
* OrderPickupDetails `object`
  * address [OrderAddress](#orderaddress)
  * collectors `array`: Collectors authorized to pick up shipment from the pickup location.
    * items [OrderPickupDetailsCollector](#orderpickupdetailscollector)
  * locationId `string`: ID of the pickup location.
  * pickupType `string`: The pickup type of this order. Acceptable values are: - "`merchantStore`" - "`merchantStoreCurbside`" - "`merchantStoreLocker`" - "`thirdPartyPickupPoint`" - "`thirdPartyLocker`" 

### OrderPickupDetailsCollector
* OrderPickupDetailsCollector `object`
  * name `string`: Name of the person picking up the shipment.
  * phoneNumber `string`: Phone number of the person picking up the shipment.

### OrderPromotion
* OrderPromotion `object`
  * applicableItems `array`: Items that this promotion may be applied to. If empty, there are no restrictions on applicable items and quantity. This field will also be empty for shipping promotions because shipping is not tied to any specific item.
    * items [OrderPromotionItem](#orderpromotionitem)
  * appliedItems `array`: Items that this promotion have been applied to. Do not provide for `orders.createtestorder`. This field will be empty for shipping promotions because shipping is not tied to any specific item.
    * items [OrderPromotionItem](#orderpromotionitem)
  * endTime `string`: Promotion end time in ISO 8601 format. Date, time, and offset required, e.g., "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z".
  * funder `string`: Required. The party funding the promotion. Only `merchant` is supported for `orders.createtestorder`. Acceptable values are: - "`google`" - "`merchant`" 
  * merchantPromotionId `string`: Required. This field is used to identify promotions within merchants' own systems.
  * priceValue [Price](#price)
  * shortTitle `string`: A short title of the promotion to be shown on the checkout page. Do not provide for `orders.createtestorder`.
  * startTime `string`: Promotion start time in ISO 8601 format. Date, time, and offset required, e.g., "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z".
  * subtype `string`: Required. The category of the promotion. Only `moneyOff` is supported for `orders.createtestorder`. Acceptable values are: - "`buyMGetMoneyOff`" - "`buyMGetNMoneyOff`" - "`buyMGetNPercentOff`" - "`buyMGetPercentOff`" - "`freeGift`" - "`freeGiftWithItemId`" - "`freeGiftWithValue`" - "`freeShippingOvernight`" - "`freeShippingStandard`" - "`freeShippingTwoDay`" - "`moneyOff`" - "`percentOff`" - "`rewardPoints`" - "`salePrice`" 
  * taxValue [Price](#price)
  * title `string`: Required. The title of the promotion.
  * type `string`: Required. The scope of the promotion. Only `product` is supported for `orders.createtestorder`. Acceptable values are: - "`product`" - "`shipping`" 

### OrderPromotionItem
* OrderPromotionItem `object`
  * lineItemId `string`: The line item ID of a product. Do not provide for `orders.createtestorder`.
  * offerId `string`: Required. Offer ID of a product. Only for `orders.createtestorder`.
  * productId `string`: `orders.createtestorder`.
  * quantity `integer`: The quantity of the associated product. Do not provide for `orders.createtestorder`.

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
  * productAmount [ProductAmount](#productamount)
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
  * shipmentGroupId `string`: The shipment group ID of the shipment. This is set in shiplineitems request.
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

### OrderTrackingSignal
* OrderTrackingSignal `object`: Represents a merchant trade from which signals are extracted, e.g. shipping.
  * customerShippingFee [PriceAmount](#priceamount)
  * deliveryPostalCode `string`: Required. The delivery postal code, as a continuous string without spaces or dashes, e.g. "95016".
  * deliveryRegionCode `string`: Required. The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping destination.
  * lineItems `array`: Information about line items in the order.
    * items [OrderTrackingSignalLineItemDetails](#ordertrackingsignallineitemdetails)
  * merchantId `string`: The Google merchant ID of this order tracking signal. This value is optional. If left unset, the caller's merchant ID is used. You must request access in order to provide data on behalf of another merchant. For more information, see [Submitting Order Tracking Signals](/shopping-content/guides/order-tracking-signals).
  * orderCreatedTime [DateTime](#datetime)
  * orderId `string`: Required. The ID of the order on the merchant side.
  * orderTrackingSignalId `string`: Output only. The ID that uniquely identifies this order tracking signal.
  * shipmentLineItemMapping `array`: The mapping of the line items to the shipment information.
    * items [OrderTrackingSignalShipmentLineItemMapping](#ordertrackingsignalshipmentlineitemmapping)
  * shippingInfo `array`: The shipping information for the order.
    * items [OrderTrackingSignalShippingInfo](#ordertrackingsignalshippinginfo)

### OrderTrackingSignalLineItemDetails
* OrderTrackingSignalLineItemDetails `object`: The line items of the order.
  * gtin `string`: The Global Trade Item Number.
  * lineItemId `string`: Required. The ID for this line item.
  * mpn `string`: The manufacturer part number.
  * productId `string`: Required. The Content API REST ID of the product, in the form channel:contentLanguage:targetCountry:offerId.
  * quantity `string`: Required. The quantity of the line item in the order.

### OrderTrackingSignalShipmentLineItemMapping
* OrderTrackingSignalShipmentLineItemMapping `object`: Represents how many items are in the shipment for the given shipment_id and line_item_id.
  * lineItemId `string`: Required. The line item ID.
  * quantity `string`: Required. The line item quantity in the shipment.
  * shipmentId `string`: Required. The shipment ID.

### OrderTrackingSignalShippingInfo
* OrderTrackingSignalShippingInfo `object`: The shipping information for the order.
  * actualDeliveryTime [DateTime](#datetime)
  * carrierName `string`: The name of the shipping carrier for the delivery. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time.
  * carrierServiceName `string`: The service type for fulfillment, e.g., GROUND, FIRST_CLASS, etc.
  * earliestDeliveryPromiseTime [DateTime](#datetime)
  * latestDeliveryPromiseTime [DateTime](#datetime)
  * originPostalCode `string`: The origin postal code, as a continuous string without spaces or dashes, e.g. "95016".
  * originRegionCode `string`: The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping origin.
  * shipmentId `string`: Required. The shipment ID.
  * shippedTime [DateTime](#datetime)
  * shippingStatus `string` (values: SHIPPING_STATE_UNSPECIFIED, SHIPPED, DELIVERED): The status of the shipment.
  * trackingId `string`: The tracking ID of the shipment. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time.

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

### OrderreturnsAcknowledgeRequest
* OrderreturnsAcknowledgeRequest `object`
  * operationId `string`: [required] The ID of the operation, unique across all operations for a given order return.

### OrderreturnsAcknowledgeResponse
* OrderreturnsAcknowledgeResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#orderreturnsAcknowledgeResponse".

### OrderreturnsCreateOrderReturnRequest
* OrderreturnsCreateOrderReturnRequest `object`
  * lineItems `array`: The list of line items to return.
    * items [OrderreturnsLineItem](#orderreturnslineitem)
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * orderId `string`: The ID of the order.
  * returnMethodType `string`: The way of the package being returned.

### OrderreturnsCreateOrderReturnResponse
* OrderreturnsCreateOrderReturnResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#orderreturnsCreateOrderReturnResponse".
  * orderReturn [MerchantOrderReturn](#merchantorderreturn)

### OrderreturnsLineItem
* OrderreturnsLineItem `object`
  * lineItemId `string`: The ID of the line item. This value is assigned by Google when an order is created.
  * quantity `integer`: The quantity of this line item.

### OrderreturnsListResponse
* OrderreturnsListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#orderreturnsListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of returns.
  * resources `array`
    * items [MerchantOrderReturn](#merchantorderreturn)

### OrderreturnsPartialRefund
* OrderreturnsPartialRefund `object`
  * priceAmount [Price](#price)
  * taxAmount [Price](#price)

### OrderreturnsProcessRequest
* OrderreturnsProcessRequest `object`
  * fullChargeReturnShippingCost `boolean`: Option to charge the customer return shipping cost.
  * operationId `string`: [required] The ID of the operation, unique across all operations for a given order return.
  * refundShippingFee [OrderreturnsRefundOperation](#orderreturnsrefundoperation)
  * returnItems `array`: The list of items to return.
    * items [OrderreturnsReturnItem](#orderreturnsreturnitem)

### OrderreturnsProcessResponse
* OrderreturnsProcessResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#orderreturnsProcessResponse".

### OrderreturnsRefundOperation
* OrderreturnsRefundOperation `object`
  * fullRefund `boolean`: If true, the item will be fully refunded. Allowed only when payment_type is FOP. Merchant can choose this refund option to indicate the full remaining amount of corresponding object to be refunded to the customer via FOP.
  * partialRefund [OrderreturnsPartialRefund](#orderreturnspartialrefund)
  * paymentType `string`: The payment way of issuing refund. Default value is ORIGINAL_FOP if not set.
  * reasonText `string`: The explanation of the reason.
  * returnRefundReason `string`: Code of the refund reason.

### OrderreturnsRejectOperation
* OrderreturnsRejectOperation `object`
  * reason `string`: The reason for the return.
  * reasonText `string`: The explanation of the reason.

### OrderreturnsReturnItem
* OrderreturnsReturnItem `object`
  * refund [OrderreturnsRefundOperation](#orderreturnsrefundoperation)
  * reject [OrderreturnsRejectOperation](#orderreturnsrejectoperation)
  * returnItemId `string`: Unit level ID for the return item. Different units of the same product will have different IDs.

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

### OrdersCustomBatchRequestEntryCreateTestReturnReturnItem
* OrdersCustomBatchRequestEntryCreateTestReturnReturnItem `object`
  * lineItemId `string`: The ID of the line item to return.
  * quantity `integer`: Quantity that is returned.

### OrdersCustomBatchRequestEntryRefundItemItem
* OrdersCustomBatchRequestEntryRefundItemItem `object`
  * amount [MonetaryAmount](#monetaryamount)
  * fullRefund `boolean`: If true, the full item will be refunded. If this is true, amount should not be provided and will be ignored.
  * lineItemId `string`: The ID of the line item. Either lineItemId or productId is required.
  * productId `string`: The ID of the product. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * quantity `integer`: The number of products that are refunded.

### OrdersCustomBatchRequestEntryRefundItemShipping
* OrdersCustomBatchRequestEntryRefundItemShipping `object`
  * amount [Price](#price)
  * fullRefund `boolean`: If set to true, all shipping costs for the order will be refunded. If this is true, amount should not be provided and will be ignored.

### OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo
* OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo `object`
  * carrier `string`: The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values.
  * shipmentId `string`: Required. The ID of the shipment. This is assigned by the merchant and is unique to each shipment.
  * trackingId `string`: The tracking ID for the shipment.

### OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails
* OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails `object`: ScheduledDeliveryDetails used to update the scheduled delivery order.
  * carrierPhoneNumber `string`: The phone number of the carrier fulfilling the delivery. The phone number should be formatted as the international notation in
  * scheduledDate `string`: The date a shipment is scheduled for delivery, in ISO 8601 format.

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
  * lineItemId `string`: The ID of the line item to return. Either lineItemId or productId is required.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * priceAmount [Price](#price)
  * productId `string`: The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * quantity `integer`: The quantity to return and refund.
  * reason `string`: The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" 
  * reasonText `string`: The explanation of the reason.
  * taxAmount [Price](#price)

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

### OrdersRefundItemRequest
* OrdersRefundItemRequest `object`
  * items `array`: The items that are refunded. Either Item or Shipping must be provided in the request.
    * items [OrdersCustomBatchRequestEntryRefundItemItem](#orderscustombatchrequestentryrefunditemitem)
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * reason `string`: The reason for the refund. Acceptable values are: - "`shippingCostAdjustment`" - "`priceAdjustment`" - "`taxAdjustment`" - "`feeAdjustment`" - "`courtesyAdjustment`" - "`adjustment`" - "`customerCancelled`" - "`noInventory`" - "`productNotAsDescribed`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`" - "`lateShipmentCredit`" - "`deliveredLateByCarrier`" - "`productArrivedDamaged`" 
  * reasonText `string`: The explanation of the reason.
  * shipping [OrdersCustomBatchRequestEntryRefundItemShipping](#orderscustombatchrequestentryrefunditemshipping)

### OrdersRefundItemResponse
* OrdersRefundItemResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersRefundItemResponse".

### OrdersRefundOrderRequest
* OrdersRefundOrderRequest `object`
  * amount [MonetaryAmount](#monetaryamount)
  * fullRefund `boolean`: If true, the full order will be refunded, including shipping. If this is true, amount should not be provided and will be ignored.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * reason `string`: The reason for the refund. Acceptable values are: - "`courtesyAdjustment`" - "`other`" 
  * reasonText `string`: The explanation of the reason.

### OrdersRefundOrderResponse
* OrdersRefundOrderResponse `object`
  * executionStatus `string`: The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" 
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#ordersRefundOrderResponse".

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

### OrdersReturnRefundLineItemRequest
* OrdersReturnRefundLineItemRequest `object`
  * lineItemId `string`: The ID of the line item to return. Either lineItemId or productId is required.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * priceAmount [Price](#price)
  * productId `string`: The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
  * quantity `integer`: The quantity to return and refund.
  * reason `string`: The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" 
  * reasonText `string`: The explanation of the reason.
  * taxAmount [Price](#price)

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
  * lineItems `array`: Line items to ship.
    * items [OrderShipmentLineItemShipment](#ordershipmentlineitemshipment)
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * shipmentGroupId `string`: ID of the shipment group. Required for orders that use the orderinvoices service.
  * shipmentInfos `array`: Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs).
    * items [OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo](#orderscustombatchrequestentryshiplineitemsshipmentinfo)

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
  * lastPickupDate `string`: Date after which the pickup will expire, in ISO 8601 format. Required only when order is buy-online-pickup-in-store(BOPIS) and `status` is `ready for pickup`.
  * operationId `string`: The ID of the operation. Unique across all operations for a given order.
  * readyPickupDate `string`: Date on which the shipment has been ready for pickup, in ISO 8601 format. Optional and can be provided only if `status` is `ready for pickup`.
  * scheduledDeliveryDetails [OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails](#orderscustombatchrequestentryupdateshipmentscheduleddeliverydetails)
  * shipmentId `string`: The ID of the shipment.
  * status `string`: New status for the shipment. Not updated if missing. Acceptable values are: - "`delivered`" - "`undeliverable`" - "`readyForPickup`" 
  * trackingId `string`: The tracking ID for the shipment. Not updated if missing.
  * undeliveredDate `string`: Date on which the shipment has been undeliverable, in ISO 8601 format. Optional and can be provided only if `status` is `undeliverable`.

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

### PriceAmount
* PriceAmount `object`: The price represented as a number and currency.
  * currency `string`: The currency of the price.
  * value `string`: The price represented as a number.

### Product
* Product `object`:  Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Some attributes are country-specific, so make sure you select the appropriate country in the drop-down selector at the top of the page. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
  * additionalImageLinks `array`: Additional URLs of images of the item.
    * items `string`
  * adsGrouping `string`: Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise.
  * adsLabels `array`: Similar to ads_grouping, but only works on CPC.
    * items `string`
  * adsRedirect `string`: Allows advertisers to override the item URL when the product is shown within the context of Product Ads.
  * adult `boolean`: Should be set to true if the item is targeted towards adults.
  * ageGroup `string`: Target age group of the item.
  * availability `string`: Availability status of the item.
  * availabilityDate `string`: The day a pre-ordered product becomes available for delivery, in ISO 8601 format.
  * brand `string`: Brand of the item.
  * canonicalLink `string`: URL for the canonical version of your item's landing page.
  * channel `string`: Required. The item's channel (online or local). Acceptable values are: - "`local`" - "`online`" 
  * color `string`: Color of the item.
  * condition `string`: Condition or state of the item.
  * contentLanguage `string`: Required. The two-letter ISO 639-1 language code for the item.
  * costOfGoodsSold [Price](#price)
  * customAttributes `array`: A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (e.g., `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google (formerly known as Shopping Actions).
    * items [CustomAttribute](#customattribute)
  * customLabel0 `string`: Custom label 0 for custom grouping of items in a Shopping campaign.
  * customLabel1 `string`: Custom label 1 for custom grouping of items in a Shopping campaign.
  * customLabel2 `string`: Custom label 2 for custom grouping of items in a Shopping campaign.
  * customLabel3 `string`: Custom label 3 for custom grouping of items in a Shopping campaign.
  * customLabel4 `string`: Custom label 4 for custom grouping of items in a Shopping campaign.
  * description `string`: Description of the item.
  * displayAdsId `string`: An identifier for an item for dynamic remarketing campaigns.
  * displayAdsLink `string`: URL directly to your item's landing page for dynamic remarketing campaigns.
  * displayAdsSimilarIds `array`: Advertiser-specified recommendations.
    * items `string`
  * displayAdsTitle `string`: Title of an item for dynamic remarketing campaigns.
  * displayAdsValue `number`: Offer margin for dynamic remarketing campaigns.
  * energyEfficiencyClass `string`: The energy efficiency class as defined in EU directive 2010/30/EU.
  * excludedDestinations `array`: The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center).
    * items `string`
  * expirationDate `string`: Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is too far in the future.
  * gender `string`: Target gender of the item.
  * googleProductCategory `string`: Google's category of the item (see Google product taxonomy).
  * gtin `string`: Global Trade Item Number (GTIN) of the item.
  * id `string`: The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter. The REST ID for a product is of the form channel:contentLanguage: targetCountry: offerId.
  * identifierExists `boolean`: False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada.
  * imageLink `string`: URL of an image of the item.
  * includedDestinations `array`: The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`.
    * items `string`
  * installment [Installment](#installment)
  * isBundle `boolean`: Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price.
  * itemGroupId `string`: Shared identifier for all variants of the same product.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#product`"
  * link `string`: URL directly linking to your item's page on your website.
  * loyaltyPoints [LoyaltyPoints](#loyaltypoints)
  * material `string`: The material of which the item is made.
  * maxEnergyEfficiencyClass `string`: The energy efficiency class as defined in EU directive 2010/30/EU.
  * maxHandlingTime `string`: Maximal product handling time (in business days).
  * minEnergyEfficiencyClass `string`: The energy efficiency class as defined in EU directive 2010/30/EU.
  * minHandlingTime `string`: Minimal product handling time (in business days).
  * mobileLink `string`: URL for the mobile-optimized version of your item's landing page.
  * mpn `string`: Manufacturer Part Number (MPN) of the item.
  * multipack `string`: The number of identical products in a merchant-defined multipack.
  * offerId `string`: Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details. *Note:* Content API methods that operate on products take the REST ID of the product, *not* this identifier.
  * pattern `string`: The item's pattern (e.g. polka dots).
  * price [Price](#price)
  * productDetails `array`: Technical specification or additional product details.
    * items [ProductProductDetail](#productproductdetail)
  * productHighlights `array`: Bullet points describing the most relevant highlights of a product.
    * items `string`
  * productTypes `array`: Categories of the item (formatted as in products data specification).
    * items `string`
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
  * shoppingAdsExcludedCountries `array`: List of country codes (ISO 3166-1 alpha-2) to exclude the offer from Shopping Ads destination. Countries from this list are removed from countries configured in MC feed settings.
    * items `string`
  * sizeSystem `string`: System in which the size is specified. Recommended for apparel items.
  * sizeType `string`: The cut of the item. Recommended for apparel items.
  * sizes `array`: Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value (see size definition).
    * items `string`
  * source `string`: The source of the offer, i.e., how the offer was created. Acceptable values are: - "`api`" - "`crawl`" - "`feed`" 
  * subscriptionCost [ProductSubscriptionCost](#productsubscriptioncost)
  * targetCountry `string`: Required. The CLDR territory code for the item.
  * taxCategory `string`: The tax category of the product, used to configure detailed tax nexus in account-level tax settings.
  * taxes `array`: Tax information.
    * items [ProductTax](#producttax)
  * title `string`: Title of the item.
  * transitTimeLabel `string`: The transit time label of the product, used to group product in account-level transit time tables.
  * unitPricingBaseMeasure [ProductUnitPricingBaseMeasure](#productunitpricingbasemeasure)
  * unitPricingMeasure [ProductUnitPricingMeasure](#productunitpricingmeasure)

### ProductAmount
* ProductAmount `object`
  * priceAmount [Price](#price)
  * remittedTaxAmount [Price](#price)
  * taxAmount [Price](#price)

### ProductProductDetail
* ProductProductDetail `object`
  * attributeName `string`: The name of the product detail.
  * attributeValue `string`: The value of the product detail.
  * sectionName `string`: The section header used to group a set of product details.

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
  * destinationStatuses `array`: The intended destinations for the product.
    * items [ProductStatusDestinationStatus](#productstatusdestinationstatus)
  * googleExpirationDate `string`: Date on which the item expires in Google Shopping, in ISO 8601 format.
  * itemLevelIssues `array`: A list of all issues associated with the product.
    * items [ProductStatusItemLevelIssue](#productstatusitemlevelissue)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#productStatus`"
  * lastUpdateDate `string`: Date on which the item has been last updated, in ISO 8601 format.
  * link `string`: The link to the product.
  * productId `string`: The ID of the product for which status is reported.
  * title `string`: The title of the product.

### ProductStatusDestinationStatus
* ProductStatusDestinationStatus `object`
  * approvedCountries `array`: List of country codes (ISO 3166-1 alpha-2) where the offer is approved.
    * items `string`
  * destination `string`: The name of the destination
  * disapprovedCountries `array`: List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved.
    * items `string`
  * pendingCountries `array`: List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval.
    * items `string`
  * status `string`: Destination approval status in `targetCountry` of the offer.

### ProductStatusItemLevelIssue
* ProductStatusItemLevelIssue `object`
  * applicableCountries `array`: List of country codes (ISO 3166-1 alpha-2) where issue applies to the offer.
    * items `string`
  * attributeName `string`: The attribute's name, if the issue is caused by a single attribute.
  * code `string`: The error code of the issue.
  * description `string`: A short issue description in English.
  * destination `string`: The destination the issue applies to.
  * detail `string`: A detailed issue description in English.
  * documentation `string`: The URL of a web page to help with resolving this issue.
  * resolution `string`: Whether the issue can be resolved by the merchant.
  * servability `string`: How this issue affects serving of the offer.

### ProductSubscriptionCost
* ProductSubscriptionCost `object`
  * amount [Price](#price)
  * period `string`: The type of subscription period.
  * periodLength `string`: The number of subscription periods the buyer has to pay.

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
  * feedId `string`: The Content API feed id.
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

### PubsubNotificationSettings
* PubsubNotificationSettings `object`: Settings for Pub/Sub notifications, all methods require that the caller is a direct user of the merchant center account.
  * cloudTopicName `string`: Cloud pub/sub topic to which notifications are sent (read-only).
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#pubsubNotificationSettings`"
  * registeredEvents `array`: List of event types. Acceptable values are: - "`orderPendingShipment`" 
    * items `string`

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

### Region
* Region `object`: Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
  * displayName `string`: The display name of the region.
  * geotargetArea [RegionGeoTargetArea](#regiongeotargetarea)
  * merchantId `string`: Output only. Immutable. Merchant that owns the region.
  * postalCodeArea [RegionPostalCodeArea](#regionpostalcodearea)
  * regionId `string`: Output only. Immutable. The ID uniquely identifying each region.
  * regionalInventoryEligible `boolean`: Output only. Indicates if the region is eligible to use in the Regional Inventory configuration.
  * shippingEligible `boolean`: Output only. Indicates if the region is eligible to use in the Shipping Services configuration.

### RegionGeoTargetArea
* RegionGeoTargetArea `object`: A list of geotargets that defines the region area.
  * geotargetCriteriaIds `array`: Required. A non-empty list of [location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). They must all be of the same location type (e.g., state).
    * items `string`

### RegionPostalCodeArea
* RegionPostalCodeArea `object`: A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource.
  * postalCodes `array`: Required. A range of postal codes.
    * items [RegionPostalCodeAreaPostalCodeRange](#regionpostalcodeareapostalcoderange)
  * regionCode `string`: Required. CLDR territory code or the country the postal code group applies to.

### RegionPostalCodeAreaPostalCodeRange
* RegionPostalCodeAreaPostalCodeRange `object`: A range of postal codes that defines the region area.
  * begin `string`: Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: "94108", "9410*", "9*".
  * end `string`: Optional. A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area. It must have the same length as postalCodeRangeBegin: if postalCodeRangeBegin is a postal code then postalCodeRangeEnd must be a postal code too; if postalCodeRangeBegin is a pattern then postalCodeRangeEnd must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching postalCodeRangeBegin.

### RegionalInventory
* RegionalInventory `object`: Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region.
  * availability `string`: The availability of the product.
  * customAttributes `array`: A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form.
    * items [CustomAttribute](#customattribute)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#regionalInventory".
  * price [Price](#price)
  * regionId `string`: The ID uniquely identifying each region.
  * salePrice [Price](#price)
  * salePriceEffectiveDate `string`: A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided.

### RegionalinventoryCustomBatchRequest
* RegionalinventoryCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [RegionalinventoryCustomBatchRequestEntry](#regionalinventorycustombatchrequestentry)

### RegionalinventoryCustomBatchRequestEntry
* RegionalinventoryCustomBatchRequestEntry `object`: A batch entry encoding a single non-batch regional inventory request.
  * batchId `integer`: An entry ID, unique within the batch request.
  * merchantId `string`: The ID of the managing account.
  * method `string`: Method of the batch request entry. Acceptable values are: - "`insert`" 
  * productId `string`: The ID of the product for which to update price and availability.
  * regionalInventory [RegionalInventory](#regionalinventory)

### RegionalinventoryCustomBatchResponse
* RegionalinventoryCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [RegionalinventoryCustomBatchResponseEntry](#regionalinventorycustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#regionalinventoryCustomBatchResponse".

### RegionalinventoryCustomBatchResponseEntry
* RegionalinventoryCustomBatchResponseEntry `object`: A batch entry encoding a single non-batch regional inventory response.
  * batchId `integer`: The ID of the request entry this entry responds to.
  * errors [Errors](#errors)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#regionalinventoryCustomBatchResponseEntry".
  * regionalInventory [RegionalInventory](#regionalinventory)

### RepricingProductReport
* RepricingProductReport `object`: Resource that represents a daily Repricing product report. Each report contains stats for a single type of Repricing rule for a single product on a given day. If there are multiple rules of the same type for the product on that day, the report lists all the rules by rule ids, combines the stats, and paginates the results by date. To retrieve the stats of a particular rule, provide the rule_id in the request.
  * applicationCount `string`: Total count of Repricer applications. This value captures how many times the rule of this type was applied to this product during this reporting period.
  * buyboxWinningProductStats [RepricingProductReportBuyboxWinningProductStats](#repricingproductreportbuyboxwinningproductstats)
  * date [Date](#date)
  * highWatermark [PriceAmount](#priceamount)
  * inapplicabilityDetails `array`: List of all reasons the rule did not apply to the product during the specified reporting period.
    * items [InapplicabilityDetails](#inapplicabilitydetails)
  * lowWatermark [PriceAmount](#priceamount)
  * orderItemCount `integer`: Total unit count of impacted products ordered while the rule was active on the date of the report. This count includes all orders that were started while the rule was active, even if the rule was no longer active when the order was completed.
  * ruleIds `array`: Ids of the Repricing rule for this report.
    * items `string`
  * totalGmv [PriceAmount](#priceamount)
  * type `string` (values: REPRICING_RULE_TYPE_UNSPECIFIED, TYPE_WIN_BUY_BOX, TYPE_STATS_BASED, TYPE_COGS_BASED): Type of the rule.

### RepricingProductReportBuyboxWinningProductStats
* RepricingProductReportBuyboxWinningProductStats `object`: Stats specific to buybox winning rules for product report.
  * buyboxWinsCount `integer`: Number of times this product won the buybox with these rules during this time period.

### RepricingRule
* RepricingRule `object`: Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met. Next ID: 24
  * cogsBasedRule [RepricingRuleCostOfGoodsSaleRule](#repricingrulecostofgoodssalerule)
  * countryCode `string`: Required. Immutable. CLDR country code (e.g. "US").
  * effectiveTimePeriod [RepricingRuleEffectiveTime](#repricingruleeffectivetime)
  * eligibleOfferMatcher [RepricingRuleEligibleOfferMatcher](#repricingruleeligibleoffermatcher)
  * languageCode `string`: Required. Immutable. The two-letter ISO 639-1 language code associated with the repricing rule.
  * merchantId `string`: Output only. Immutable. Merchant that owns the repricing rule.
  * paused `boolean`: Represents whether a rule is paused. A paused rule will behave like a non-paused rule within CRUD operations, with the major difference that a paused rule will not be evaluated and will have no effect on offers.
  * restriction [RepricingRuleRestriction](#repricingrulerestriction)
  * ruleId `string`: Output only. Immutable. The ID to uniquely identify each repricing rule.
  * statsBasedRule [RepricingRuleStatsBasedRule](#repricingrulestatsbasedrule)
  * title `string`: The title for the rule.
  * type `string` (values: REPRICING_RULE_TYPE_UNSPECIFIED, TYPE_WIN_BUY_BOX, TYPE_STATS_BASED, TYPE_COGS_BASED): Required. Immutable. The type of the rule.

### RepricingRuleCostOfGoodsSaleRule
* RepricingRuleCostOfGoodsSaleRule `object`: A repricing rule that changes the sale price based on cost of goods sale.
  * percentageDelta `integer`: The percent change against the COGS. Ex: 20 would mean to set the adjusted price 1.2X of the COGS data.
  * priceDelta `string`: The price delta against the COGS. E.g. 2 means $2 more of the COGS.

### RepricingRuleEffectiveTime
* RepricingRuleEffectiveTime `object`
  * fixedTimePeriods `array`: A list of fixed time periods combined with OR. The maximum number of entries is limited to 5.
    * items [RepricingRuleEffectiveTimeFixedTimePeriod](#repricingruleeffectivetimefixedtimeperiod)

### RepricingRuleEffectiveTimeFixedTimePeriod
* RepricingRuleEffectiveTimeFixedTimePeriod `object`: Definition of a fixed time period.
  * endTime `string`: The end time (exclusive) of the period. It can only be hour granularity.
  * startTime `string`: The start time (inclusive) of the period. It can only be hour granularity.

### RepricingRuleEligibleOfferMatcher
* RepricingRuleEligibleOfferMatcher `object`: Matcher that specifies eligible offers. When the USE_FEED_ATTRIBUTE option is selected, only the repricing_rule_id attribute on the product feed is used to specify offer-rule mapping. When the CUSTOM_FILTER option is selected, only the *_matcher fields are used to filter the offers for offer-rule mapping. If the CUSTOM_FILTER option is selected, an offer needs to satisfy each custom filter matcher to be eligible for a rule. Size limit: the sum of the number of entries in all the matchers should not exceed 20. For example, there can be 15 product ids and 5 brands, but not 10 product ids and 11 brands.
  * brandMatcher [RepricingRuleEligibleOfferMatcherStringMatcher](#repricingruleeligibleoffermatcherstringmatcher)
  * itemGroupIdMatcher [RepricingRuleEligibleOfferMatcherStringMatcher](#repricingruleeligibleoffermatcherstringmatcher)
  * matcherOption `string` (values: MATCHER_OPTION_UNSPECIFIED, MATCHER_OPTION_CUSTOM_FILTER, MATCHER_OPTION_USE_FEED_ATTRIBUTE, MATCHER_OPTION_ALL_PRODUCTS): Determines whether to use the custom matchers or the product feed attribute "repricing_rule_id" to specify offer-rule mapping.
  * offerIdMatcher [RepricingRuleEligibleOfferMatcherStringMatcher](#repricingruleeligibleoffermatcherstringmatcher)
  * skipWhenOnPromotion `boolean`: When true, the rule won't be applied to offers with active promotions.

### RepricingRuleEligibleOfferMatcherStringMatcher
* RepricingRuleEligibleOfferMatcherStringMatcher `object`: Matcher by string attributes.
  * strAttributes `array`: String attributes, as long as such attribute of an offer is one of the string attribute values, the offer is considered as passing the matcher. The string matcher checks an offer for inclusivity in the string attributes, not equality. Only literal string matching is supported, no regex.
    * items `string`

### RepricingRuleReport
* RepricingRuleReport `object`: Resource that represents a daily Repricing rule report. Next ID: 11
  * buyboxWinningRuleStats [RepricingRuleReportBuyboxWinningRuleStats](#repricingrulereportbuyboxwinningrulestats)
  * date [Date](#date)
  * impactedProducts `array`: List of product ids that are impacted by this rule during this reporting period. Out of stock products and products not searched for by customers are examples of non-impacted products.
    * items `string`
  * inapplicabilityDetails `array`: List of all reasons the rule did not apply to the inapplicable products during the specified reporting period.
    * items [InapplicabilityDetails](#inapplicabilitydetails)
  * inapplicableProducts `array`: List of product ids that are inapplicable to this rule during this reporting period. To get the inapplicable reason for a specific product, see RepricingProductReport.
    * items `string`
  * orderItemCount `integer`: Total unit count of impacted products ordered while the rule was active on the date of the report. This count includes all orders that were started while the rule was active, even if the rule was no longer active when the order was completed.
  * ruleId `string`: Id of the Repricing rule for this report.
  * totalGmv [PriceAmount](#priceamount)
  * type `string` (values: REPRICING_RULE_TYPE_UNSPECIFIED, TYPE_WIN_BUY_BOX, TYPE_STATS_BASED, TYPE_COGS_BASED): Type of the rule.

### RepricingRuleReportBuyboxWinningRuleStats
* RepricingRuleReportBuyboxWinningRuleStats `object`: Stats specific to buybox winning rules for rule report.
  * buyboxWonProductCount `integer`: Number of unique products that won the buybox with this rule during this period of time.

### RepricingRuleRestriction
* RepricingRuleRestriction `object`: Definition of a rule restriction. At least one of the following needs to be true: (1) use_auto_pricing_min_price is true (2) floor.price_delta exists (3) floor.percentage_delta exists If floor.price_delta and floor.percentage_delta are both set on a rule, the highest value will be chosen by the Repricer. In other words, for a product with a price of $50, if the `floor.percentage_delta` is "-10" and the floor.price_delta is "-12", the offer price will only be lowered $5 (10% lower than the original offer price).
  * floor [RepricingRuleRestrictionBoundary](#repricingrulerestrictionboundary)
  * useAutoPricingMinPrice `boolean`: If true, use the AUTO_PRICING_MIN_PRICE offer attribute as the lower bound of the rule. If use_auto_pricing_min_price is true, then only offers with `AUTO_PRICING_MIN_PRICE` existing on the offer will get Repricer treatment, even if a floor value is set on the rule. Also, if use_auto_pricing_min_price is true, the floor restriction will be ignored.

### RepricingRuleRestrictionBoundary
* RepricingRuleRestrictionBoundary `object`: Definition of a boundary.
  * percentageDelta `integer`: The percentage delta relative to the offer selling price. This field is signed. It must be negative in floor. When it is used in floor, it should be > -100. For example, if an offer is selling at $10 and this field is -30 in floor, the repricing rule only applies if the calculated new price is >= $7.
  * priceDelta `string`: The price micros relative to the offer selling price. This field is signed. It must be negative in floor. For example, if an offer is selling at $10 and this field is -$2 in floor, the repricing rule only applies if the calculated new price is >= $8.

### RepricingRuleStatsBasedRule
* RepricingRuleStatsBasedRule `object`: Definition of stats based rule.
  * percentageDelta `integer`: The percent change against the price target. Valid from 0 to 100 inclusively.
  * priceDelta `string`: The price delta against the above price target. A positive value means the price should be adjusted to be above statistical measure, and a negative value means below. Currency code must not be included.

### ReturnAddress
* ReturnAddress `object`: Return address resource.
  * address [ReturnAddressAddress](#returnaddressaddress)
  * country `string`: Required. The country of sale where the return address is applicable.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#returnAddress`"
  * label `string`: Required. The user-defined label of the return address. For the default address, use the label "default".
  * phoneNumber `string`: Required. The merchant's contact phone number regarding the return.
  * returnAddressId `string`: Return address ID generated by Google.

### ReturnAddressAddress
* ReturnAddressAddress `object`
  * country `string`: CLDR country code (e.g. "US").
  * locality `string`: City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
  * postalCode `string`: Postal code or ZIP (e.g. "94043").
  * recipientName `string`: Name of the recipient to address returns to.
  * region `string`: Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
  * streetAddress `array`: Street-level part of the address. May be up to two lines, each line specified as an array element.
    * items `string`

### ReturnPolicy
* ReturnPolicy `object`: Return policy resource.
  * country `string`: Required. The country of sale where the return policy is applicable.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#returnPolicy`"
  * label `string`: Required. The user-defined label of the return policy. For the default policy, use the label "default".
  * name `string`: Required. The name of the policy as shown in Merchant Center.
  * nonFreeReturnReasons `array`: Return reasons that will incur return fees.
    * items `string`
  * policy [ReturnPolicyPolicy](#returnpolicypolicy)
  * returnPolicyId `string`: Return policy ID generated by Google.
  * seasonalOverrides `array`: An optional list of seasonal overrides.
    * items [ReturnPolicySeasonalOverride](#returnpolicyseasonaloverride)

### ReturnPolicyPolicy
* ReturnPolicyPolicy `object`
  * lastReturnDate `string`: Required. Last day for returning the items. In ISO 8601 format. When specifying the return window like this, set the policy type to "lastReturnDate". Use this for seasonal overrides only.
  * numberOfDays `string`: The number of days items can be returned after delivery, where one day is defined to be 24 hours after the delivery timestamp. When specifying the return window like this, set the policy type to "numberOfDaysAfterDelivery". Acceptable values are 30, 45, 60, 90, 100, 180, 270 and 365 for the default policy. Additional policies further allow 14, 15, 21 and 28 days, but note that for most items a minimum of 30 days is required for returns. Exceptions may be made for electronics. A policy of less than 30 days can only be applied to those items.
  * type `string`: Policy type. Use "lastReturnDate" for seasonal overrides only. Note that for most items a minimum of 30 days is required for returns. Exceptions may be made for electronics or non-returnable items such as food, perishables, and living things. A policy of less than 30 days can only be applied to those items. Acceptable values are: - "`lastReturnDate`" - "`lifetimeReturns`" - "`noReturns`" - "`numberOfDaysAfterDelivery`" 

### ReturnPolicySeasonalOverride
* ReturnPolicySeasonalOverride `object`
  * endDate `string`: Required. Last day on which the override applies. In ISO 8601 format.
  * name `string`: Required. The name of the seasonal override as shown in Merchant Center.
  * policy [ReturnPolicyPolicy](#returnpolicypolicy)
  * startDate `string`: Required. First day on which the override applies. In ISO 8601 format.

### ReturnPricingInfo
* ReturnPricingInfo `object`
  * chargeReturnShippingFee `boolean`: Default option for whether merchant should charge the customer for return shipping costs, based on customer selected return reason and merchant's return policy for the items being returned.
  * maxReturnShippingFee [MonetaryAmount](#monetaryamount)
  * refundableItemsTotalAmount [MonetaryAmount](#monetaryamount)
  * refundableShippingAmount [MonetaryAmount](#monetaryamount)
  * totalRefundedAmount [MonetaryAmount](#monetaryamount)

### ReturnShipment
* ReturnShipment `object`
  * creationDate `string`: The date of creation of the shipment, in ISO 8601 format.
  * deliveryDate `string`: The date of delivery of the shipment, in ISO 8601 format.
  * returnMethodType `string`: Type of the return method. Acceptable values are: - "`byMail`" - "`contactCustomerSupport`" - "`returnless`" - "`inStore`" 
  * shipmentId `string`: Shipment ID generated by Google.
  * shipmentTrackingInfos `array`: Tracking information of the shipment. One return shipment might be handled by several shipping carriers sequentially.
    * items [ShipmentTrackingInfo](#shipmenttrackinginfo)
  * shippingDate `string`: The date of shipping of the shipment, in ISO 8601 format.
  * state `string`: State of the shipment. Acceptable values are: - "`completed`" - "`new`" - "`shipped`" - "`undeliverable`" - "`pending`" 

### ReturnaddressCustomBatchRequest
* ReturnaddressCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [ReturnaddressCustomBatchRequestEntry](#returnaddresscustombatchrequestentry)

### ReturnaddressCustomBatchRequestEntry
* ReturnaddressCustomBatchRequestEntry `object`
  * batchId `integer`: An entry ID, unique within the batch request.
  * merchantId `string`: The Merchant Center account ID.
  * method `string`: Method of the batch request entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" 
  * returnAddress [ReturnAddress](#returnaddress)
  * returnAddressId `string`: The return address ID. This should be set only if the method is `delete` or `get`.

### ReturnaddressCustomBatchResponse
* ReturnaddressCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [ReturnaddressCustomBatchResponseEntry](#returnaddresscustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#returnaddressCustomBatchResponse".

### ReturnaddressCustomBatchResponseEntry
* ReturnaddressCustomBatchResponseEntry `object`
  * batchId `integer`: The ID of the request entry to which this entry responds.
  * errors [Errors](#errors)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressCustomBatchResponseEntry`"
  * returnAddress [ReturnAddress](#returnaddress)

### ReturnaddressListResponse
* ReturnaddressListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#returnaddressListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of addresses.
  * resources `array`
    * items [ReturnAddress](#returnaddress)

### ReturnpolicyCustomBatchRequest
* ReturnpolicyCustomBatchRequest `object`
  * entries `array`: The request entries to be processed in the batch.
    * items [ReturnpolicyCustomBatchRequestEntry](#returnpolicycustombatchrequestentry)

### ReturnpolicyCustomBatchRequestEntry
* ReturnpolicyCustomBatchRequestEntry `object`
  * batchId `integer`: An entry ID, unique within the batch request.
  * merchantId `string`: The Merchant Center account ID.
  * method `string`: Method of the batch request entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" 
  * returnPolicy [ReturnPolicy](#returnpolicy)
  * returnPolicyId `string`: The return policy ID. This should be set only if the method is `delete` or `get`.

### ReturnpolicyCustomBatchResponse
* ReturnpolicyCustomBatchResponse `object`
  * entries `array`: The result of the execution of the batch requests.
    * items [ReturnpolicyCustomBatchResponseEntry](#returnpolicycustombatchresponseentry)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#returnpolicyCustomBatchResponse".

### ReturnpolicyCustomBatchResponseEntry
* ReturnpolicyCustomBatchResponseEntry `object`
  * batchId `integer`: The ID of the request entry to which this entry responds.
  * errors [Errors](#errors)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyCustomBatchResponseEntry`"
  * returnPolicy [ReturnPolicy](#returnpolicy)

### ReturnpolicyListResponse
* ReturnpolicyListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#returnpolicyListResponse".
  * resources `array`
    * items [ReturnPolicy](#returnpolicy)

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

### SettlementReport
* SettlementReport `object`:  Settlement reports detail order-level and item-level credits and debits between you and Google.
  * endDate `string`: The end date on which all transactions are included in the report, in ISO 8601 format.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#settlementReport`"
  * previousBalance [Price](#price)
  * settlementId `string`: The ID of the settlement report.
  * startDate `string`: The start date on which all transactions are included in the report, in ISO 8601 format.
  * transferAmount [Price](#price)
  * transferDate `string`: Date on which transfer for this payment was initiated by Google, in ISO 8601 format.
  * transferIds `array`: The list of bank identifiers used for the transfer. e.g. Trace ID for Federal Automated Clearing House (ACH). This may also be known as the Wire ID.
    * items `string`

### SettlementTransaction
* SettlementTransaction `object`: Settlement transactions give a detailed breakdown of the settlement report.
  * amount [SettlementTransactionAmount](#settlementtransactionamount)
  * identifiers [SettlementTransactionIdentifiers](#settlementtransactionidentifiers)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#settlementTransaction`"
  * transaction [SettlementTransactionTransaction](#settlementtransactiontransaction)

### SettlementTransactionAmount
* SettlementTransactionAmount `object`
  * commission [SettlementTransactionAmountCommission](#settlementtransactionamountcommission)
  * description `string`: The description of the event. Acceptable values are: - "`taxWithhold`" - "`principal`" - "`principalAdjustment`" - "`shippingFee`" - "`merchantRemittedSalesTax`" - "`googleRemittedSalesTax`" - "`merchantCoupon`" - "`merchantCouponTax`" - "`merchantRemittedDisposalTax`" - "`googleRemittedDisposalTax`" - "`merchantRemittedRedemptionFee`" - "`googleRemittedRedemptionFee`" - "`eeeEcoFee`" - "`furnitureEcoFee`" - "`copyPrivateFee`" - "`eeeEcoFeeCommission`" - "`furnitureEcoFeeCommission`" - "`copyPrivateFeeCommission`" - "`principalRefund`" - "`principalRefundTax`" - "`itemCommission`" - "`adjustmentCommission`" - "`shippingFeeCommission`" - "`commissionRefund`" - "`damaged`" - "`damagedOrDefectiveItem`" - "`expiredItem`" - "`faultyItem`" - "`incorrectItemReceived`" - "`itemMissing`" - "`qualityNotExpected`" - "`receivedTooLate`" - "`storePackageMissing`" - "`transitPackageMissing`" - "`unsuccessfulDeliveryUndeliverable`" - "`wrongChargeInStore`" - "`wrongItem`" - "`returns`" - "`undeliverable`" - "`refundFromMerchant`" - "`returnLabelShippingFee`" - "`pspFee`" 
  * transactionAmount [Price](#price)
  * type `string`: The type of the amount. Acceptable values are: - "`itemPrice`" - "`orderPrice`" - "`refund`" - "`earlyRefund`" - "`courtesyRefund`" - "`returnRefund`" - "`returnLabelShippingFeeAmount`" 

### SettlementTransactionAmountCommission
* SettlementTransactionAmountCommission `object`
  * category `string`: The category of the commission. Acceptable values are: - "`animalsAndPetSupplies`" - "`dogCatFoodAndCatLitter`" - "`apparelAndAccessories`" - "`shoesHandbagsAndSunglasses`" - "`costumesAndAccessories`" - "`jewelry`" - "`watches`" - "`hobbiesArtsAndCrafts`" - "`homeAndGarden`" - "`entertainmentCollectibles`" - "`collectibleCoins`" - "`sportsCollectibles`" - "`sportingGoods`" - "`toysAndGames`" - "`musicalInstruments`" - "`giftCards`" - "`babyAndToddler`" - "`babyFoodWipesAndDiapers`" - "`businessAndIndustrial`" - "`camerasOpticsAndPhotography`" - "`consumerElectronics`" - "`electronicsAccessories`" - "`personalComputers`" - "`videoGameConsoles`" - "`foodAndGrocery`" - "`beverages`" - "`tobaccoProducts`" - "`furniture`" - "`hardware`" - "`buildingMaterials`" - "`tools`" - "`healthAndPersonalCare`" - "`beauty`" - "`householdSupplies`" - "`kitchenAndDining`" - "`majorAppliances`" - "`luggageAndBags`" - "`media`" - "`officeSupplies`" - "`softwareAndVideoGames`" - "`vehiclePartsAndAccessories`" - "`vehicleTiresAndWheels`" - "`vehicles`" - "`everythingElse`" 
  * rate `string`: Rate of the commission in percentage.

### SettlementTransactionIdentifiers
* SettlementTransactionIdentifiers `object`
  * adjustmentId `string`: The identifier of the adjustments, if it is available.
  * merchantOrderId `string`: The merchant provided order ID.
  * orderItemId `string`: The identifier of the item.
  * settlementEntryId `string`: The unique ID of the settlement transaction entry.
  * shipmentIds `array`: The shipment ids for the item.
    * items `string`
  * transactionId `string`: The Google transaction ID.

### SettlementTransactionTransaction
* SettlementTransactionTransaction `object`
  * postDate `string`: The time on which the event occurred in ISO 8601 format.
  * type `string`: The type of the transaction that occurred. Acceptable values are: - "`order`" - "`reversal`" - "`orderRefund`" - "`reversalRefund`" - "`issueRelatedRefundAndReplacement`" - "`returnLabelShippingFeeTransaction`" - "`reversalIssueRelatedRefundAndReplacement`" - "`reversalReturnLabelShippingFeeTransaction`" 

### SettlementreportsListResponse
* SettlementreportsListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#settlementreportsListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of returns.
  * resources `array`
    * items [SettlementReport](#settlementreport)

### SettlementtransactionsListResponse
* SettlementtransactionsListResponse `object`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "content#settlementtransactionsListResponse".
  * nextPageToken `string`: The token for the retrieval of the next page of returns.
  * resources `array`
    * items [SettlementTransaction](#settlementtransaction)

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
  * deliveryDetails [TestOrderDeliveryDetails](#testorderdeliverydetails)
  * enableOrderinvoices `boolean`: Whether the orderinvoices service should support this order.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "`content#testOrder`"
  * lineItems `array`: Required. Line items that are ordered. At least one line item must be provided.
    * items [TestOrderLineItem](#testorderlineitem)
  * notificationMode `string`: Restricted. Do not use.
  * pickupDetails [TestOrderPickupDetails](#testorderpickupdetails)
  * predefinedBillingAddress `string`: Required. The billing address. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" 
  * predefinedDeliveryAddress `string`: Required. Identifier of one of the predefined delivery addresses for the delivery. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" 
  * predefinedEmail `string`: Required. Email address of the customer. Acceptable values are: - "`pog.dwight.schrute@gmail.com`" - "`pog.jim.halpert@gmail.com`" - "`penpog.pam.beesly@gmail.comding`" 
  * predefinedPickupDetails `string`: Identifier of one of the predefined pickup details. Required for orders containing line items with shipping type `pickup`. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" 
  * promotions `array`: Promotions associated with the order.
    * items [OrderPromotion](#orderpromotion)
  * shippingCost [Price](#price)
  * shippingOption `string`: Required. The requested shipping option. Acceptable values are: - "`economy`" - "`expedited`" - "`oneDay`" - "`sameDay`" - "`standard`" - "`twoDay`" 

### TestOrderAddress
* TestOrderAddress `object`
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

### TestOrderDeliveryDetails
* TestOrderDeliveryDetails `object`
  * address [TestOrderAddress](#testorderaddress)
  * isScheduledDelivery `boolean`: Whether the order is scheduled delivery order.
  * phoneNumber `string`: The phone number of the person receiving the delivery.

### TestOrderLineItem
* TestOrderLineItem `object`
  * product [TestOrderLineItemProduct](#testorderlineitemproduct)
  * quantityOrdered `integer`: Required. Number of items ordered.
  * returnInfo [OrderLineItemReturnInfo](#orderlineitemreturninfo)
  * shippingDetails [OrderLineItemShippingDetails](#orderlineitemshippingdetails)

### TestOrderLineItemProduct
* TestOrderLineItemProduct `object`
  * brand `string`: Required. Brand of the item.
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

### TestOrderPickupDetails
* TestOrderPickupDetails `object`
  * locationCode `string`: Required. Code of the location defined by provider or merchant.
  * pickupLocationAddress [TestOrderAddress](#testorderaddress)
  * pickupLocationType `string`: Pickup location type. Acceptable values are: - "`locker`" - "`store`" - "`curbside`" 
  * pickupPersons `array`: Required. all pickup persons set by users.
    * items [TestOrderPickupDetailsPickupPerson](#testorderpickupdetailspickupperson)

### TestOrderPickupDetailsPickupPerson
* TestOrderPickupDetailsPickupPerson `object`
  * name `string`: Required. Full name of the pickup person.
  * phoneNumber `string`: Required. The phone number of the person picking up the items.

### TimeZone
* TimeZone `object`: Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
  * id `string`: IANA Time Zone Database time zone, e.g. "America/New_York".
  * version `string`: Optional. IANA Time Zone Database version number, e.g. "2019a".

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
  * unitPrice [Price](#price)
  * unitPriceTaxes `array`: Tax amounts to apply to the unit price.
    * items [UnitInvoiceTaxLine](#unitinvoicetaxline)

### UnitInvoiceAdditionalCharge
* UnitInvoiceAdditionalCharge `object`
  * additionalChargeAmount [Amount](#amount)
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


