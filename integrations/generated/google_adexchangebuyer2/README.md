# @datafire/google_adexchangebuyer2

Client library for Ad Exchange Buyer API II

## Installation and Usage
```bash
npm install --save @datafire/google_adexchangebuyer2
```
```js
let google_adexchangebuyer2 = require('@datafire/google_adexchangebuyer2').create({
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

Accesses the latest features for managing Authorized Buyers accounts, Real-Time Bidding configurations and auction metrics, and Marketplace programmatic deals.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_adexchangebuyer2.oauthCallback({
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
google_adexchangebuyer2.oauthRefresh(null, context)
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

### adexchangebuyer2.accounts.clients.list
Lists all the clients for the current sponsor buyer.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.clients.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Unique numerical account ID of the sponsor buyer to list the clients for.
  * pageSize `integer`: Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method.
  * partnerClientId `string`: Optional unique identifier (from the standpoint of an Ad Exchange sponsor buyer partner) of the client to return. If specified, at most one client will be returned in the response.
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
* output [ListClientsResponse](#listclientsresponse)

### adexchangebuyer2.accounts.clients.create
Creates a new client buyer.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.clients.create({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to create a client for. (required)
  * body [Client](#client)
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
* output [Client](#client)

### adexchangebuyer2.accounts.clients.get
Gets a client buyer with a given client account ID.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.clients.get({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Numerical account ID of the client's sponsor buyer. (required)
  * clientAccountId **required** `string`: Numerical account ID of the client buyer to retrieve. (required)
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
* output [Client](#client)

### adexchangebuyer2.accounts.clients.update
Updates an existing client buyer.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.clients.update({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to update a client for. (required)
  * clientAccountId **required** `string`: Unique numerical account ID of the client to update. (required)
  * body [Client](#client)
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
* output [Client](#client)

### adexchangebuyer2.accounts.clients.invitations.list
Lists all the client users invitations for a client with a given account ID.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.clients.invitations.list({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Numerical account ID of the client's sponsor buyer. (required)
  * clientAccountId **required** `string`: Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer.
  * pageSize `integer`: Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method.
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
* output [ListClientUserInvitationsResponse](#listclientuserinvitationsresponse)

### adexchangebuyer2.accounts.clients.invitations.create
Creates and sends out an email invitation to access an Ad Exchange client buyer account.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.clients.invitations.create({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Numerical account ID of the client's sponsor buyer. (required)
  * clientAccountId **required** `string`: Numerical account ID of the client buyer that the user should be associated with. (required)
  * body [ClientUserInvitation](#clientuserinvitation)
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
* output [ClientUserInvitation](#clientuserinvitation)

### adexchangebuyer2.accounts.clients.invitations.get
Retrieves an existing client user invitation.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.clients.invitations.get({
  "accountId": "",
  "clientAccountId": "",
  "invitationId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Numerical account ID of the client's sponsor buyer. (required)
  * clientAccountId **required** `string`: Numerical account ID of the client buyer that the user invitation to be retrieved is associated with. (required)
  * invitationId **required** `string`: Numerical identifier of the user invitation to retrieve. (required)
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
* output [ClientUserInvitation](#clientuserinvitation)

### adexchangebuyer2.accounts.clients.users.list
Lists all the known client users for a specified sponsor buyer account ID.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.clients.users.list({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Numerical account ID of the sponsor buyer of the client to list users for. (required)
  * clientAccountId **required** `string`: The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer.
  * pageSize `integer`: Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method.
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
* output [ListClientUsersResponse](#listclientusersresponse)

### adexchangebuyer2.accounts.clients.users.get
Retrieves an existing client user.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.clients.users.get({
  "accountId": "",
  "clientAccountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Numerical account ID of the client's sponsor buyer. (required)
  * clientAccountId **required** `string`: Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
  * userId **required** `string`: Numerical identifier of the user to retrieve. (required)
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
* output [ClientUser](#clientuser)

### adexchangebuyer2.accounts.clients.users.update
Updates an existing client user. Only the user status can be changed on update.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.clients.users.update({
  "accountId": "",
  "clientAccountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Numerical account ID of the client's sponsor buyer. (required)
  * clientAccountId **required** `string`: Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
  * userId **required** `string`: Numerical identifier of the user to retrieve. (required)
  * body [ClientUser](#clientuser)
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
* output [ClientUser](#clientuser)

### adexchangebuyer2.accounts.creatives.list
Lists creatives.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.creatives.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account to list the creatives from. Specify "-" to list all creatives the current user has access to.
  * pageSize `integer`: Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available via another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.next_page_token returned from the previous call to 'ListCreatives' method.
  * query `string`: An optional query string to filter creatives. If no filter is specified, all active creatives will be returned. Supported queries are: - accountId=*account_id_string* - creativeId=*creative_id_string* - dealsStatus: {approved, conditionally_approved, disapproved, not_checked} - openAuctionStatus: {approved, conditionally_approved, disapproved, not_checked} - attribute: {a numeric attribute from the list of attributes} - disapprovalReason: {a reason from DisapprovalReason} Example: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47'
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
* output [ListCreativesResponse](#listcreativesresponse)

### adexchangebuyer2.accounts.creatives.create
Creates a creative.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.creatives.create({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
  * duplicateIdMode `string` (values: NO_DUPLICATES, FORCE_ENABLE_DUPLICATE_IDS): Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).
  * body [Creative](#creative)
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
* output [Creative](#creative)

### adexchangebuyer2.accounts.creatives.get
Gets a creative.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.creatives.get({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account the creative belongs to.
  * creativeId **required** `string`: The ID of the creative to retrieve.
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
* output [Creative](#creative)

### adexchangebuyer2.accounts.creatives.update
Updates a creative.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.creatives.update({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
  * creativeId **required** `string`: The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.
  * body [Creative](#creative)
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
* output [Creative](#creative)

### adexchangebuyer2.accounts.creatives.dealAssociations.list
List all creative-deal associations.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.creatives.dealAssociations.list({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account to list the associations from. Specify "-" to list all creatives the current user has access to.
  * creativeId **required** `string`: The creative ID to list the associations from. Specify "-" to list all creatives under the above account.
  * pageSize `integer`: Requested page size. Server may return fewer associations than requested. If unspecified, server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListDealAssociationsResponse.next_page_token returned from the previous call to 'ListDealAssociations' method.
  * query `string`: An optional query string to filter deal associations. If no filter is specified, all associations will be returned. Supported queries are: - accountId=*account_id_string* - creativeId=*creative_id_string* - dealsId=*deals_id_string* - dealsStatus:{approved, conditionally_approved, disapproved, not_checked} - openAuctionStatus:{approved, conditionally_approved, disapproved, not_checked} Example: 'dealsId=12345 AND dealsStatus:disapproved'
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
* output [ListDealAssociationsResponse](#listdealassociationsresponse)

### adexchangebuyer2.accounts.creatives.dealAssociations.add
Associate an existing deal with a creative.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.creatives.dealAssociations.add({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account the creative belongs to.
  * creativeId **required** `string`: The ID of the creative associated with the deal.
  * body [AddDealAssociationRequest](#adddealassociationrequest)
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

### adexchangebuyer2.accounts.creatives.dealAssociations.remove
Remove the association between a deal and a creative.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.creatives.dealAssociations.remove({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account the creative belongs to.
  * creativeId **required** `string`: The ID of the creative associated with the deal.
  * body [RemoveDealAssociationRequest](#removedealassociationrequest)
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

### adexchangebuyer2.accounts.creatives.stopWatching
Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.creatives.stopWatching({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account of the creative to stop notifications for.
  * creativeId **required** `string`: The creative ID of the creative to stop notifications for. Specify "-" to specify stopping account level notifications.
  * body [StopWatchingCreativeRequest](#stopwatchingcreativerequest)
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

### adexchangebuyer2.accounts.creatives.watch
Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.creatives.watch({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account of the creative to watch.
  * creativeId **required** `string`: The creative ID to watch for status changes. Specify "-" to watch all creatives under the above account. If both creative-level and account-level notifications are sent, only a single notification will be sent to the creative-level notification topic.
  * body [WatchCreativeRequest](#watchcreativerequest)
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

### adexchangebuyer2.accounts.finalizedProposals.list
List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.finalizedProposals.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * filter `string`: An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.
  * filterSyntax `string` (values: FILTER_SYNTAX_UNSPECIFIED, PQL, LIST_FILTER): Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.
  * pageSize `integer`: Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: The page token as returned from ListProposalsResponse.
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
* output [ListProposalsResponse](#listproposalsresponse)

### adexchangebuyer2.accounts.products.list
List all products visible to the buyer (optionally filtered by the specified PQL query).


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.products.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * filter `string`: An optional PQL query used to query for products. See https://developers.google.com/ad-manager/docs/pqlreference for documentation about PQL and examples. Nested repeated fields, such as product.targetingCriterion.inclusions, cannot be filtered.
  * pageSize `integer`: Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: The page token as returned from ListProductsResponse.
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
* output [ListProductsResponse](#listproductsresponse)

### adexchangebuyer2.accounts.products.get
Gets the requested product by ID.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.products.get({
  "accountId": "",
  "productId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * productId **required** `string`: The ID for the product to get the head revision for.
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

### adexchangebuyer2.accounts.proposals.list
List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.proposals.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * filter `string`: An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.
  * filterSyntax `string` (values: FILTER_SYNTAX_UNSPECIFIED, PQL, LIST_FILTER): Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.
  * pageSize `integer`: Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: The page token as returned from ListProposalsResponse.
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
* output [ListProposalsResponse](#listproposalsresponse)

### adexchangebuyer2.accounts.proposals.create
Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.proposals.create({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * body [Proposal](#proposal)
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
* output [Proposal](#proposal)

### adexchangebuyer2.accounts.proposals.get
Gets a proposal given its ID. The proposal is returned at its head revision.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.proposals.get({
  "accountId": "",
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * proposalId **required** `string`: The unique ID of the proposal
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
* output [Proposal](#proposal)

### adexchangebuyer2.accounts.proposals.update
Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.proposals.update({
  "accountId": "",
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * proposalId **required** `string`: The unique ID of the proposal.
  * body [Proposal](#proposal)
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
* output [Proposal](#proposal)

### adexchangebuyer2.accounts.proposals.accept
Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.proposals.accept({
  "accountId": "",
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * proposalId **required** `string`: The ID of the proposal to accept.
  * body [AcceptProposalRequest](#acceptproposalrequest)
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
* output [Proposal](#proposal)

### adexchangebuyer2.accounts.proposals.addNote
Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.proposals.addNote({
  "accountId": "",
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * proposalId **required** `string`: The ID of the proposal to attach the note to.
  * body [AddNoteRequest](#addnoterequest)
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
* output [Note](#note)

### adexchangebuyer2.accounts.proposals.cancelNegotiation
Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.proposals.cancelNegotiation({
  "accountId": "",
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * proposalId **required** `string`: The ID of the proposal to cancel negotiation for.
  * body [CancelNegotiationRequest](#cancelnegotiationrequest)
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
* output [Proposal](#proposal)

### adexchangebuyer2.accounts.proposals.completeSetup
Update the given proposal to indicate that setup has been completed. This method is called by the buyer when the line items have been created on their end for a finalized proposal and all the required creatives have been uploaded using the creatives API. This call updates the `is_setup_completed` bit on the proposal and also notifies the seller. The server will advance the revision number of the most recent proposal.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.proposals.completeSetup({
  "accountId": "",
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * proposalId **required** `string`: The ID of the proposal to mark as setup completed.
  * body [CompleteSetupRequest](#completesetuprequest)
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
* output [Proposal](#proposal)

### adexchangebuyer2.accounts.proposals.pause
Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.proposals.pause({
  "accountId": "",
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * proposalId **required** `string`: The ID of the proposal to pause.
  * body [PauseProposalRequest](#pauseproposalrequest)
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
* output [Proposal](#proposal)

### adexchangebuyer2.accounts.proposals.resume
Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.proposals.resume({
  "accountId": "",
  "proposalId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * proposalId **required** `string`: The ID of the proposal to resume.
  * body [ResumeProposalRequest](#resumeproposalrequest)
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
* output [Proposal](#proposal)

### adexchangebuyer2.accounts.publisherProfiles.list
List all publisher profiles visible to the buyer


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.publisherProfiles.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * pageSize `integer`: Specify the number of results to include per page.
  * pageToken `string`: The page token as return from ListPublisherProfilesResponse.
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
* output [ListPublisherProfilesResponse](#listpublisherprofilesresponse)

### adexchangebuyer2.accounts.publisherProfiles.get
Gets the requested publisher profile by id.


```js
google_adexchangebuyer2.adexchangebuyer2.accounts.publisherProfiles.get({
  "accountId": "",
  "publisherProfileId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the buyer.
  * publisherProfileId **required** `string`: The id for the publisher profile to get.
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
* output [PublisherProfile](#publisherprofile)

### adexchangebuyer2.bidders.filterSets.bidMetrics.list
Lists all metrics that are measured in terms of number of bids.


```js
google_adexchangebuyer2.adexchangebuyer2.bidders.filterSets.bidMetrics.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`: Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
  * pageSize `integer`: Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
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
* output [ListBidMetricsResponse](#listbidmetricsresponse)

### adexchangebuyer2.bidders.filterSets.bidResponseErrors.list
List all errors that occurred in bid responses, with the number of bid responses affected for each reason.


```js
google_adexchangebuyer2.adexchangebuyer2.bidders.filterSets.bidResponseErrors.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`: Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
  * pageSize `integer`: Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
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
* output [ListBidResponseErrorsResponse](#listbidresponseerrorsresponse)

### adexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list
List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.


```js
google_adexchangebuyer2.adexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`: Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
  * pageSize `integer`: Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
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
* output [ListBidResponsesWithoutBidsResponse](#listbidresponseswithoutbidsresponse)

### adexchangebuyer2.bidders.filterSets.filteredBidRequests.list
List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.


```js
google_adexchangebuyer2.adexchangebuyer2.bidders.filterSets.filteredBidRequests.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`: Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
  * pageSize `integer`: Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
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
* output [ListFilteredBidRequestsResponse](#listfilteredbidrequestsresponse)

### adexchangebuyer2.bidders.filterSets.filteredBids.list
List all reasons for which bids were filtered, with the number of bids filtered for each reason.


```js
google_adexchangebuyer2.adexchangebuyer2.bidders.filterSets.filteredBids.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`: Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
  * pageSize `integer`: Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
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
* output [ListFilteredBidsResponse](#listfilteredbidsresponse)

### adexchangebuyer2.bidders.filterSets.filteredBids.creatives.list
List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.


```js
google_adexchangebuyer2.adexchangebuyer2.bidders.filterSets.filteredBids.creatives.list({
  "filterSetName": "",
  "creativeStatusId": 0
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`: Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
  * creativeStatusId **required** `integer`: The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
  * pageSize `integer`: Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
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
* output [ListCreativeStatusBreakdownByCreativeResponse](#listcreativestatusbreakdownbycreativeresponse)

### adexchangebuyer2.bidders.filterSets.filteredBids.details.list
List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.


```js
google_adexchangebuyer2.adexchangebuyer2.bidders.filterSets.filteredBids.details.list({
  "filterSetName": "",
  "creativeStatusId": 0
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`: Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
  * creativeStatusId **required** `integer`: The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
  * pageSize `integer`: Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
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
* output [ListCreativeStatusBreakdownByDetailResponse](#listcreativestatusbreakdownbydetailresponse)

### adexchangebuyer2.bidders.filterSets.impressionMetrics.list
Lists all metrics that are measured in terms of number of impressions.


```js
google_adexchangebuyer2.adexchangebuyer2.bidders.filterSets.impressionMetrics.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`: Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
  * pageSize `integer`: Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
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
* output [ListImpressionMetricsResponse](#listimpressionmetricsresponse)

### adexchangebuyer2.bidders.filterSets.losingBids.list
List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.


```js
google_adexchangebuyer2.adexchangebuyer2.bidders.filterSets.losingBids.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`: Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
  * pageSize `integer`: Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
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
* output [ListLosingBidsResponse](#listlosingbidsresponse)

### adexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list
List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.


```js
google_adexchangebuyer2.adexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`: Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
  * pageSize `integer`: Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
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
* output [ListNonBillableWinningBidsResponse](#listnonbillablewinningbidsresponse)

### adexchangebuyer2.bidders.filterSets.delete
Deletes the requested filter set from the account with the given account ID.


```js
google_adexchangebuyer2.adexchangebuyer2.bidders.filterSets.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
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

### adexchangebuyer2.bidders.filterSets.get
Retrieves the requested filter set for the account with the given account ID.


```js
google_adexchangebuyer2.adexchangebuyer2.bidders.filterSets.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
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
* output [FilterSet](#filterset)

### adexchangebuyer2.bidders.filterSets.list
Lists all filter sets for the account with the given account ID.


```js
google_adexchangebuyer2.adexchangebuyer2.bidders.filterSets.list({
  "ownerName": ""
}, context)
```

#### Input
* input `object`
  * ownerName **required** `string`: Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
  * pageSize `integer`: Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
  * pageToken `string`: A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
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
* output [ListFilterSetsResponse](#listfiltersetsresponse)

### adexchangebuyer2.bidders.filterSets.create
Creates the specified filter set for the account with the given account ID.


```js
google_adexchangebuyer2.adexchangebuyer2.bidders.filterSets.create({
  "ownerName": ""
}, context)
```

#### Input
* input `object`
  * ownerName **required** `string`: Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
  * isTransient `boolean`: Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
  * body [FilterSet](#filterset)
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
* output [FilterSet](#filterset)



## Definitions

### AbsoluteDateRange
* AbsoluteDateRange `object`: An absolute date range, specified by its start date and end date. The supported range of dates begins 30 days before today and ends today. Validity checked upon filter set creation. If a filter set with an absolute date range is run at a later date more than 30 days after start_date, it will fail.
  * endDate [Date](#date)
  * startDate [Date](#date)

### AcceptProposalRequest
* AcceptProposalRequest `object`: Request to accept a proposal.
  * proposalRevision `string`: The last known client revision number of the proposal.

### AdSize
* AdSize `object`: Represents size of a single ad slot, or a creative.
  * height `string`: The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`.
  * sizeType `string` (values: SIZE_TYPE_UNSPECIFIED, PIXEL, INTERSTITIAL, NATIVE, FLUID): The size type of the ad slot.
  * width `string`: The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`.

### AdTechnologyProviders
* AdTechnologyProviders `object`: Detected ad technology provider information.
  * detectedProviderIds `array`: The detected ad technology provider IDs for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. If the creative contains provider IDs that are outside of those listed in the `BidRequest.adslot.consented_providers_settings.consented_providers` field on the (Google bid protocol)[https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto] and the `BidRequest.user.ext.consented_providers_settings.consented_providers` field on the (OpenRTB protocol)[https://developers.google.com/authorized-buyers/rtb/downloads/openrtb-adx-proto], and a bid is submitted with that creative for an impression that will serve to an EEA user, the bid will be filtered before the auction.
    * items `string`
  * hasUnidentifiedProvider `boolean`: Whether the creative contains an unidentified ad technology provider. If true for a given creative, any bid submitted with that creative for an impression that will serve to an EEA user will be filtered before the auction.

### AddDealAssociationRequest
* AddDealAssociationRequest `object`: A request for associating a deal and a creative.
  * association [CreativeDealAssociation](#creativedealassociation)

### AddNoteRequest
* AddNoteRequest `object`: Request message for adding a note to a given proposal.
  * note [Note](#note)

### AppContext
* AppContext `object`: Output only. The app type the restriction applies to for mobile device.
  * appTypes `array`: The app types this restriction applies to.
    * items `string` (values: NATIVE, WEB)

### AuctionContext
* AuctionContext `object`: Output only. The auction type the restriction applies to.
  * auctionTypes `array`: The auction types this restriction applies to.
    * items `string` (values: OPEN_AUCTION, DIRECT_DEALS)

### BidMetricsRow
* BidMetricsRow `object`: The set of metrics that are measured in numbers of bids, representing how many bids with the specified dimension values were considered eligible at each stage of the bidding funnel;
  * bids [MetricValue](#metricvalue)
  * bidsInAuction [MetricValue](#metricvalue)
  * billedImpressions [MetricValue](#metricvalue)
  * impressionsWon [MetricValue](#metricvalue)
  * measurableImpressions [MetricValue](#metricvalue)
  * reachedQueries [MetricValue](#metricvalue)
  * rowDimensions [RowDimensions](#rowdimensions)
  * viewableImpressions [MetricValue](#metricvalue)

### BidResponseWithoutBidsStatusRow
* BidResponseWithoutBidsStatusRow `object`: The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status.
  * impressionCount [MetricValue](#metricvalue)
  * rowDimensions [RowDimensions](#rowdimensions)
  * status `string` (values: STATUS_UNSPECIFIED, RESPONSES_WITHOUT_BIDS, RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT, RESPONSES_WITHOUT_BIDS_FOR_DEAL): The status specifying why the bid responses were considered to have no applicable bids.

### Buyer
* Buyer `object`: Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID.
  * accountId `string`: Authorized Buyers account ID of the buyer.

### CalloutStatusRow
* CalloutStatusRow `object`: The number of impressions with the specified dimension values where the corresponding bid request or bid response was not successful, as described by the specified callout status.
  * calloutStatusId `integer`: The ID of the callout status. See [callout-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/callout-status-codes).
  * impressionCount [MetricValue](#metricvalue)
  * rowDimensions [RowDimensions](#rowdimensions)

### CancelNegotiationRequest
* CancelNegotiationRequest `object`: Request to cancel an ongoing negotiation.

### Client
* Client `object`: A client resource represents a client buyer—an agency, a brand, or an advertiser customer of the sponsor buyer. Users associated with the client buyer have restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the client buyer. All fields are required unless otherwise specified.
  * clientAccountId `string`: The globally-unique numerical ID of the client. The value of this field is ignored in create and update operations.
  * clientName `string`: Name used to represent this client to publishers. You may have multiple clients that map to the same entity, but for each client the combination of `clientName` and entity must be unique. You can specify this field as empty.
  * entityId `string`: Numerical identifier of the client entity. The entity can be an advertiser, a brand, or an agency. This identifier is unique among all the entities with the same type. The value of this field is ignored if the entity type is not provided. A list of all known advertisers with their identifiers is available in the [advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt) file. A list of all known brands with their identifiers is available in the [brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt) file. A list of all known agencies with their identifiers is available in the [agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt) file.
  * entityName `string`: The name of the entity. This field is automatically fetched based on the type and ID. The value of this field is ignored in create and update operations.
  * entityType `string` (values: ENTITY_TYPE_UNSPECIFIED, ADVERTISER, BRAND, AGENCY, ENTITY_TYPE_UNCLASSIFIED): An optional field for specifying the type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`.
  * partnerClientId `string`: Optional arbitrary unique identifier of this client buyer from the standpoint of its Ad Exchange sponsor buyer. This field can be used to associate a client buyer with the identifier in the namespace of its sponsor buyer, lookup client buyers by that identifier and verify whether an Ad Exchange counterpart of a given client buyer already exists. If present, must be unique among all the client buyers for its Ad Exchange sponsor buyer.
  * role `string` (values: CLIENT_ROLE_UNSPECIFIED, CLIENT_DEAL_VIEWER, CLIENT_DEAL_NEGOTIATOR, CLIENT_DEAL_APPROVER): The role which is assigned to the client buyer. Each role implies a set of permissions granted to the client. Must be one of `CLIENT_DEAL_VIEWER`, `CLIENT_DEAL_NEGOTIATOR` or `CLIENT_DEAL_APPROVER`.
  * status `string` (values: CLIENT_STATUS_UNSPECIFIED, DISABLED, ACTIVE): The status of the client buyer.
  * visibleToSeller `boolean`: Whether the client buyer will be visible to sellers.

### ClientUser
* ClientUser `object`: A client user is created under a client buyer and has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client buyer. The only way a new client user can be created is via accepting an email invitation (see the accounts.clients.invitations.create method). All fields are required unless otherwise specified.
  * clientAccountId `string`: Numerical account ID of the client buyer with which the user is associated; the buyer must be a client of the current sponsor buyer. The value of this field is ignored in an update operation.
  * email `string`: User's email address. The value of this field is ignored in an update operation.
  * status `string` (values: USER_STATUS_UNSPECIFIED, PENDING, ACTIVE, DISABLED): The status of the client user.
  * userId `string`: The unique numerical ID of the client user that has accepted an invitation. The value of this field is ignored in an update operation.

### ClientUserInvitation
* ClientUserInvitation `object`: An invitation for a new client user to get access to the Authorized Buyers UI. All fields are required unless otherwise specified.
  * clientAccountId `string`: Numerical account ID of the client buyer that the invited user is associated with. The value of this field is ignored in create operations.
  * email `string`: The email address to which the invitation is sent. Email addresses should be unique among all client users under each sponsor buyer.
  * invitationId `string`: The unique numerical ID of the invitation that is sent to the user. The value of this field is ignored in create operations.

### CompleteSetupRequest
* CompleteSetupRequest `object`: Request message for indicating that the proposal's setup step is complete.

### ContactInformation
* ContactInformation `object`: Contains information on how a buyer or seller can be reached.
  * email `string`: Email address for the contact.
  * name `string`: The name of the contact.

### Correction
* Correction `object`: Output only. Shows any corrections that were applied to this creative.
  * contexts `array`: The contexts for the correction.
    * items [ServingContext](#servingcontext)
  * details `array`: Additional details about what was corrected.
    * items `string`
  * type `string` (values: CORRECTION_TYPE_UNSPECIFIED, VENDOR_IDS_ADDED, SSL_ATTRIBUTE_REMOVED, FLASH_FREE_ATTRIBUTE_REMOVED, FLASH_FREE_ATTRIBUTE_ADDED, REQUIRED_ATTRIBUTE_ADDED, REQUIRED_VENDOR_ADDED, SSL_ATTRIBUTE_ADDED, IN_BANNER_VIDEO_ATTRIBUTE_ADDED, MRAID_ATTRIBUTE_ADDED, FLASH_ATTRIBUTE_REMOVED, VIDEO_IN_SNIPPET_ATTRIBUTE_ADDED): The type of correction that was applied to the creative.

### Creative
* Creative `object`: A creative and its classification data.
  * accountId `string`: The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
  * adChoicesDestinationUrl `string`: The link to AdChoices destination page.
  * adTechnologyProviders [AdTechnologyProviders](#adtechnologyproviders)
  * advertiserName `string`: The name of the company being advertised in the creative.
  * agencyId `string`: The agency ID for this creative.
  * apiUpdateTime `string`: Output only. The last update timestamp of the creative via API.
  * attributes `array`: All attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method.
    * items `string` (values: ATTRIBUTE_UNSPECIFIED, IMAGE_RICH_MEDIA, ADOBE_FLASH_FLV, IS_TAGGED, IS_COOKIE_TARGETED, IS_USER_INTEREST_TARGETED, EXPANDING_DIRECTION_NONE, EXPANDING_DIRECTION_UP, EXPANDING_DIRECTION_DOWN, EXPANDING_DIRECTION_LEFT, EXPANDING_DIRECTION_RIGHT, EXPANDING_DIRECTION_UP_LEFT, EXPANDING_DIRECTION_UP_RIGHT, EXPANDING_DIRECTION_DOWN_LEFT, EXPANDING_DIRECTION_DOWN_RIGHT, CREATIVE_TYPE_HTML, CREATIVE_TYPE_VAST_VIDEO, EXPANDING_DIRECTION_UP_OR_DOWN, EXPANDING_DIRECTION_LEFT_OR_RIGHT, EXPANDING_DIRECTION_ANY_DIAGONAL, EXPANDING_ACTION_ROLLOVER_TO_EXPAND, INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH, RICH_MEDIA_CAPABILITY_TYPE_MRAID, RICH_MEDIA_CAPABILITY_TYPE_FLASH, RICH_MEDIA_CAPABILITY_TYPE_HTML5, SKIPPABLE_INSTREAM_VIDEO, RICH_MEDIA_CAPABILITY_TYPE_SSL, RICH_MEDIA_CAPABILITY_TYPE_NON_SSL, RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL, NON_SKIPPABLE_INSTREAM_VIDEO, NATIVE_ELIGIBILITY_ELIGIBLE, NON_VPAID, NATIVE_ELIGIBILITY_NOT_ELIGIBLE, ANY_INTERSTITIAL, NON_INTERSTITIAL, IN_BANNER_VIDEO, RENDERING_SIZELESS_ADX, OMSDK_1_0)
  * clickThroughUrls `array`: The set of destination URLs for the creative.
    * items `string`
  * corrections `array`: Output only. Shows any corrections that were applied to this creative.
    * items [Correction](#correction)
  * creativeId `string`: The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.
  * dealsStatus `string` (values: STATUS_UNSPECIFIED, NOT_CHECKED, CONDITIONALLY_APPROVED, APPROVED, DISAPPROVED, PENDING_REVIEW, STATUS_TYPE_UNSPECIFIED): Output only. The top-level deals status of this creative. If disapproved, an entry for 'auctionType=DIRECT_DEALS' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.
  * declaredClickThroughUrls `array`: The set of declared destination URLs for the creative.
    * items `string`
  * detectedAdvertiserIds `array`: Output only. Detected advertiser IDs, if any.
    * items `string`
  * detectedDomains `array`: Output only. The detected domains for this creative.
    * items `string`
  * detectedLanguages `array`: Output only. The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes.
    * items `string`
  * detectedProductCategories `array`: Output only. Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs.
    * items `integer`
  * detectedSensitiveCategories `array`: Output only. Detected sensitive categories, if any. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids.
    * items `integer`
  * html [HtmlContent](#htmlcontent)
  * impressionTrackingUrls `array`: The set of URLs to be called to record an impression.
    * items `string`
  * native [NativeContent](#nativecontent)
  * openAuctionStatus `string` (values: STATUS_UNSPECIFIED, NOT_CHECKED, CONDITIONALLY_APPROVED, APPROVED, DISAPPROVED, PENDING_REVIEW, STATUS_TYPE_UNSPECIFIED): Output only. The top-level open auction status of this creative. If disapproved, an entry for 'auctionType = OPEN_AUCTION' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.
  * restrictedCategories `array`: All restricted categories for the ads that may be shown from this creative.
    * items `string` (values: NO_RESTRICTED_CATEGORIES, ALCOHOL)
  * servingRestrictions `array`: Output only. The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS vs HTTP request, or the type of auction).
    * items [ServingRestriction](#servingrestriction)
  * vendorIds `array`: All vendor IDs for the ads that may be shown from this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values.
    * items `integer`
  * version `integer`: Output only. The version of this creative.
  * video [VideoContent](#videocontent)

### CreativeDealAssociation
* CreativeDealAssociation `object`: The association between a creative and a deal.
  * accountId `string`: The account the creative belongs to.
  * creativeId `string`: The ID of the creative associated with the deal.
  * dealsId `string`: The externalDealId for the deal associated with the creative.

### CreativeRestrictions
* CreativeRestrictions `object`: Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals.
  * creativeFormat `string` (values: CREATIVE_FORMAT_UNSPECIFIED, DISPLAY, VIDEO): The format of the environment that the creatives will be displayed in.
  * creativeSpecifications `array`
    * items [CreativeSpecification](#creativespecification)
  * skippableAdType `string` (values: SKIPPABLE_AD_TYPE_UNSPECIFIED, SKIPPABLE, INSTREAM_SELECT, NOT_SKIPPABLE): Skippable video ads allow viewers to skip ads after 5 seconds.

### CreativeSize
* CreativeSize `object`: Specifies the size of the creative.
  * allowedFormats `array`: What formats are allowed by the publisher. If this repeated field is empty then all formats are allowed. For example, if this field contains AllowedFormatType.AUDIO then the publisher only allows an audio ad (without any video).
    * items `string` (values: UNKNOWN, AUDIO)
  * companionSizes `array`: For video creatives specifies the sizes of companion ads (if present). Companion sizes may be filled in only when creative_size_type = VIDEO
    * items [Size](#size)
  * creativeSizeType `string` (values: CREATIVE_SIZE_TYPE_UNSPECIFIED, REGULAR, INTERSTITIAL, VIDEO, NATIVE): The creative size type.
  * nativeTemplate `string` (values: UNKNOWN_NATIVE_TEMPLATE, NATIVE_CONTENT_AD, NATIVE_APP_INSTALL_AD, NATIVE_VIDEO_CONTENT_AD, NATIVE_VIDEO_APP_INSTALL_AD): Output only. The native template for this creative. It will have a value only if creative_size_type = CreativeSizeType.NATIVE.
  * size [Size](#size)
  * skippableAdType `string` (values: SKIPPABLE_AD_TYPE_UNSPECIFIED, GENERIC, INSTREAM_SELECT, NOT_SKIPPABLE): The type of skippable ad for this creative. It will have a value only if creative_size_type = CreativeSizeType.VIDEO.

### CreativeSpecification
* CreativeSpecification `object`: Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager.
  * creativeCompanionSizes `array`: Companion sizes may be filled in only when this is a video creative.
    * items [AdSize](#adsize)
  * creativeSize [AdSize](#adsize)

### CreativeStatusRow
* CreativeStatusRow `object`: The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status.
  * bidCount [MetricValue](#metricvalue)
  * creativeStatusId `integer`: The ID of the creative status. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
  * rowDimensions [RowDimensions](#rowdimensions)

### CriteriaTargeting
* CriteriaTargeting `object`: Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs.
  * excludedCriteriaIds `array`: A list of numeric IDs to be excluded.
    * items `string`
  * targetedCriteriaIds `array`: A list of numeric IDs to be included.
    * items `string`

### Date
* Date `object`: Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
  * day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

### DayPart
* DayPart `object`: Daypart targeting message that specifies if the ad can be shown only during certain parts of a day/week.
  * dayOfWeek `string` (values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY): The day of the week to target. If unspecified, applicable to all days.
  * endTime [TimeOfDay](#timeofday)
  * startTime [TimeOfDay](#timeofday)

### DayPartTargeting
* DayPartTargeting `object`: Specifies the day part targeting criteria.
  * dayParts `array`: A list of day part targeting criterion.
    * items [DayPart](#daypart)
  * timeZoneType `string` (values: TIME_ZONE_SOURCE_UNSPECIFIED, PUBLISHER, USER): The timezone to use for interpreting the day part targeting.

### Deal
* Deal `object`: A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
  * availableEndTime `string`: Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not required for Private Auction deals or Preferred Deals.
  * availableStartTime `string`: Optional. Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (e.g., in milliseconds) will be truncated towards the start of time in seconds.
  * buyerPrivateData [PrivateData](#privatedata)
  * createProductId `string`: The product ID from which this deal was created. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.
  * createProductRevision `string`: Optional. Revision number of the product that the deal was created from. If present on create, and the server `product_revision` has advanced since the passed-in `create_product_revision`, an `ABORTED` error will be returned. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.
  * createTime `string`: Output only. The time of the deal creation.
  * creativePreApprovalPolicy `string` (values: CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED, SELLER_PRE_APPROVAL_REQUIRED, SELLER_PRE_APPROVAL_NOT_REQUIRED): Output only. Specifies the creative pre-approval policy.
  * creativeRestrictions [CreativeRestrictions](#creativerestrictions)
  * creativeSafeFrameCompatibility `string` (values: CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED, COMPATIBLE, INCOMPATIBLE): Output only. Specifies whether the creative is safeFrame compatible.
  * dealId `string`: Output only. A unique deal ID for the deal (server-assigned).
  * dealServingMetadata [DealServingMetadata](#dealservingmetadata)
  * dealTerms [DealTerms](#dealterms)
  * deliveryControl [DeliveryControl](#deliverycontrol)
  * description `string`: Description for the deal terms.
  * displayName `string`: The name of the deal.
  * externalDealId `string`: Output only. The external deal ID assigned to this deal once the deal is finalized. This is the deal ID that shows up in serving/reporting etc.
  * isSetupComplete `boolean`: Output only. True, if the buyside inventory setup is complete for this deal.
  * programmaticCreativeSource `string` (values: PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED, ADVERTISER, PUBLISHER): Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by buyer.
  * proposalId `string`: Output only. ID of the proposal that this deal is part of.
  * sellerContacts `array`: Output only. Seller contact information for the deal.
    * items [ContactInformation](#contactinformation)
  * syndicationProduct `string` (values: SYNDICATION_PRODUCT_UNSPECIFIED, CONTENT, MOBILE, VIDEO, GAMES): The syndication product associated with the deal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.
  * targeting [MarketplaceTargeting](#marketplacetargeting)
  * targetingCriterion `array`: The shared targeting visible to buyers and sellers. Each shared targeting entity is AND'd together.
    * items [TargetingCriteria](#targetingcriteria)
  * updateTime `string`: Output only. The time when the deal was last updated.
  * webPropertyCode `string`: The web property code for the seller copied over from the product.

### DealPauseStatus
* DealPauseStatus `object`: Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true.
  * buyerPauseReason `string`: The buyer's reason for pausing, if the buyer paused the deal.
  * firstPausedBy `string` (values: BUYER_SELLER_ROLE_UNSPECIFIED, BUYER, SELLER): The role of the person who first paused this deal.
  * hasBuyerPaused `boolean`: True, if the buyer has paused the deal unilaterally.
  * hasSellerPaused `boolean`: True, if the seller has paused the deal unilaterally.
  * sellerPauseReason `string`: The seller's reason for pausing, if the seller paused the deal.

### DealServingMetadata
* DealServingMetadata `object`: Message captures metadata about the serving status of a deal.
  * dealPauseStatus [DealPauseStatus](#dealpausestatus)

### DealTerms
* DealTerms `object`: The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (e.g., fixed price, auction) and expected impressions from the publisher.
  * brandingType `string` (values: BRANDING_TYPE_UNSPECIFIED, BRANDED, SEMI_TRANSPARENT): Visibility of the URL in bid requests. (default: BRANDED)
  * description `string`: Publisher provided description for the terms.
  * estimatedGrossSpend [Price](#price)
  * estimatedImpressionsPerDay `string`: Non-binding estimate of the impressions served per day. Can be set by buyer or seller.
  * guaranteedFixedPriceTerms [GuaranteedFixedPriceTerms](#guaranteedfixedpriceterms)
  * nonGuaranteedAuctionTerms [NonGuaranteedAuctionTerms](#nonguaranteedauctionterms)
  * nonGuaranteedFixedPriceTerms [NonGuaranteedFixedPriceTerms](#nonguaranteedfixedpriceterms)
  * sellerTimeZone `string`: The time zone name. For deals with Cost Per Day billing, defines the time zone used to mark the boundaries of a day. It should be an IANA TZ name, such as "America/Los_Angeles". For more information, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.

### DeliveryControl
* DeliveryControl `object`: Message contains details about how the deals will be paced.
  * creativeBlockingLevel `string` (values: CREATIVE_BLOCKING_LEVEL_UNSPECIFIED, PUBLISHER_BLOCKING_RULES, ADX_POLICY_BLOCKING_ONLY): Output only. Specified the creative blocking levels to be applied.
  * deliveryRateType `string` (values: DELIVERY_RATE_TYPE_UNSPECIFIED, EVENLY, FRONT_LOADED, AS_FAST_AS_POSSIBLE): Output only. Specifies how the impression delivery will be paced.
  * frequencyCaps `array`: Output only. Specifies any frequency caps.
    * items [FrequencyCap](#frequencycap)

### Disapproval
* Disapproval `object`: Output only. The reason and details for a disapproval.
  * details `array`: Additional details about the reason for disapproval.
    * items `string`
  * reason `string` (values: LENGTH_OF_IMAGE_ANIMATION, BROKEN_URL, MEDIA_NOT_FUNCTIONAL, INVALID_FOURTH_PARTY_CALL, INCORRECT_REMARKETING_DECLARATION, LANDING_PAGE_ERROR, AD_SIZE_DOES_NOT_MATCH_AD_SLOT, NO_BORDER, FOURTH_PARTY_BROWSER_COOKIES, LSO_OBJECTS, BLANK_CREATIVE, DESTINATION_URLS_UNDECLARED, PROBLEM_WITH_CLICK_MACRO, INCORRECT_AD_TECHNOLOGY_DECLARATION, INCORRECT_DESTINATION_URL_DECLARATION, EXPANDABLE_INCORRECT_DIRECTION, EXPANDABLE_DIRECTION_NOT_SUPPORTED, EXPANDABLE_INVALID_VENDOR, EXPANDABLE_FUNCTIONALITY, VIDEO_INVALID_VENDOR, VIDEO_UNSUPPORTED_LENGTH, VIDEO_UNSUPPORTED_FORMAT, VIDEO_FUNCTIONALITY, LANDING_PAGE_DISABLED, MALWARE_SUSPECTED, ADULT_IMAGE_OR_VIDEO, INACCURATE_AD_TEXT, COUNTERFEIT_DESIGNER_GOODS, POP_UP, INVALID_RTB_PROTOCOL_USAGE, RAW_IP_ADDRESS_IN_SNIPPET, UNACCEPTABLE_CONTENT_SOFTWARE, UNAUTHORIZED_COOKIE_ON_GOOGLE_DOMAIN, UNDECLARED_FLASH_OBJECTS, INVALID_SSL_DECLARATION, DIRECT_DOWNLOAD_IN_AD, MAXIMUM_DOWNLOAD_SIZE_EXCEEDED, DESTINATION_URL_SITE_NOT_CRAWLABLE, BAD_URL_LEGAL_DISAPPROVAL, PHARMA_GAMBLING_ALCOHOL_NOT_ALLOWED, DYNAMIC_DNS_AT_DESTINATION_URL, POOR_IMAGE_OR_VIDEO_QUALITY, UNACCEPTABLE_IMAGE_CONTENT, INCORRECT_IMAGE_LAYOUT, IRRELEVANT_IMAGE_OR_VIDEO, DESTINATION_SITE_DOES_NOT_ALLOW_GOING_BACK, MISLEADING_CLAIMS_IN_AD, RESTRICTED_PRODUCTS, UNACCEPTABLE_CONTENT, AUTOMATED_AD_CLICKING, INVALID_URL_PROTOCOL, UNDECLARED_RESTRICTED_CONTENT, INVALID_REMARKETING_LIST_USAGE, DESTINATION_SITE_NOT_CRAWLABLE_ROBOTS_TXT, CLICK_TO_DOWNLOAD_NOT_AN_APP, INACCURATE_REVIEW_EXTENSION, SEXUALLY_EXPLICIT_CONTENT, GAINING_AN_UNFAIR_ADVANTAGE, GAMING_THE_GOOGLE_NETWORK, DANGEROUS_PRODUCTS_KNIVES, DANGEROUS_PRODUCTS_EXPLOSIVES, DANGEROUS_PRODUCTS_GUNS, DANGEROUS_PRODUCTS_DRUGS, DANGEROUS_PRODUCTS_TOBACCO, DANGEROUS_PRODUCTS_WEAPONS, UNCLEAR_OR_IRRELEVANT_AD, PROFESSIONAL_STANDARDS, DYSFUNCTIONAL_PROMOTION, INVALID_INTEREST_BASED_AD, MISUSE_OF_PERSONAL_INFORMATION, OMISSION_OF_RELEVANT_INFORMATION, UNAVAILABLE_PROMOTIONS, MISLEADING_PROMOTIONS, INAPPROPRIATE_CONTENT, SENSITIVE_EVENTS, SHOCKING_CONTENT, ENABLING_DISHONEST_BEHAVIOR, TECHNICAL_REQUIREMENTS, RESTRICTED_POLITICAL_CONTENT, UNSUPPORTED_CONTENT, INVALID_BIDDING_METHOD, VIDEO_TOO_LONG, VIOLATES_JAPANESE_PHARMACY_LAW, UNACCREDITED_PET_PHARMACY, ABORTION, CONTRACEPTIVES, NEED_CERTIFICATES_TO_ADVERTISE_IN_CHINA, KCDSP_REGISTRATION, NOT_FAMILY_SAFE, CLINICAL_TRIAL_RECRUITMENT, MAXIMUM_NUMBER_OF_HTTP_CALLS_EXCEEDED, MAXIMUM_NUMBER_OF_COOKIES_EXCEEDED, PERSONAL_LOANS, UNSUPPORTED_FLASH_CONTENT, MISUSE_BY_OMID_SCRIPT, NON_WHITELISTED_OMID_VENDOR, DESTINATION_EXPERIENCE, UNSUPPORTED_LANGUAGE, NON_SSL_COMPLIANT, TEMPORARY_PAUSE, BAIL_BONDS, EXPERIMENTAL_MEDICAL_TREATMENT): The categorized reason for disapproval.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### FilterSet
* FilterSet `object`: A set of filters that is applied to a request for data. Within a filter set, an AND operation is performed across the filters represented by each field. An OR operation is performed across the filters represented by the multiple values of a repeated field, e.g., "format=VIDEO AND deal_id=12 AND (seller_network_id=34 OR seller_network_id=56)".
  * absoluteDateRange [AbsoluteDateRange](#absolutedaterange)
  * breakdownDimensions `array`: The set of dimensions along which to break down the response; may be empty. If multiple dimensions are requested, the breakdown is along the Cartesian product of the requested dimensions.
    * items `string` (values: BREAKDOWN_DIMENSION_UNSPECIFIED, PUBLISHER_IDENTIFIER)
  * creativeId `string`: The ID of the creative on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, i.e., one whose name matches the `bidders/*/accounts/*/filterSets/*` pattern.
  * dealId `string`: The ID of the deal on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, i.e., one whose name matches the `bidders/*/accounts/*/filterSets/*` pattern.
  * environment `string` (values: ENVIRONMENT_UNSPECIFIED, WEB, APP): The environment on which to filter; optional.
  * format `string` (values: FORMAT_UNSPECIFIED, NATIVE_DISPLAY, NATIVE_VIDEO, NON_NATIVE_DISPLAY, NON_NATIVE_VIDEO): Creative format bidded on or allowed to bid on, can be empty.
  * formats `array`: Creative formats bidded on or allowed to bid on, can be empty. Although this field is a list, it can only be populated with a single item. A HTTP 400 bad request error will be returned in the response if you specify multiple items.
    * items `string` (values: FORMAT_UNSPECIFIED, NATIVE_DISPLAY, NATIVE_VIDEO, NON_NATIVE_DISPLAY, NON_NATIVE_VIDEO)
  * name `string`: A user-defined name of the filter set. Filter set names must be unique globally and match one of the patterns: - `bidders/*/filterSets/*` (for accessing bidder-level troubleshooting data) - `bidders/*/accounts/*/filterSets/*` (for accessing account-level troubleshooting data) This field is required in create operations.
  * platforms `array`: The list of platforms on which to filter; may be empty. The filters represented by multiple platforms are ORed together (i.e., if non-empty, results must match any one of the platforms).
    * items `string` (values: PLATFORM_UNSPECIFIED, DESKTOP, TABLET, MOBILE)
  * publisherIdentifiers `array`: For Open Bidding partners only. The list of publisher identifiers on which to filter; may be empty. The filters represented by multiple publisher identifiers are ORed together.
    * items `string`
  * realtimeTimeRange [RealtimeTimeRange](#realtimetimerange)
  * relativeDateRange [RelativeDateRange](#relativedaterange)
  * sellerNetworkIds `array`: For Authorized Buyers only. The list of IDs of the seller (publisher) networks on which to filter; may be empty. The filters represented by multiple seller network IDs are ORed together (i.e., if non-empty, results must match any one of the publisher networks). See [seller-network-ids](https://developers.google.com/authorized-buyers/rtb/downloads/seller-network-ids) file for the set of existing seller network IDs.
    * items `integer`
  * timeSeriesGranularity `string` (values: TIME_SERIES_GRANULARITY_UNSPECIFIED, HOURLY, DAILY): The granularity of time intervals if a time series breakdown is desired; optional.

### FilteredBidCreativeRow
* FilteredBidCreativeRow `object`: The number of filtered bids with the specified dimension values that have the specified creative.
  * bidCount [MetricValue](#metricvalue)
  * creativeId `string`: The ID of the creative.
  * rowDimensions [RowDimensions](#rowdimensions)

### FilteredBidDetailRow
* FilteredBidDetailRow `object`: The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (i.e. creative status), that have the specified detail.
  * bidCount [MetricValue](#metricvalue)
  * detail `string`: The ID of the detail, can be numeric or text. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message.
  * detailId `integer`: Note: this field will be deprecated, use "detail" field instead. When "detail" field represents an integer value, this field is populated as the same integer value "detail" field represents, otherwise this field will be 0. The ID of the detail. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message.
  * rowDimensions [RowDimensions](#rowdimensions)

### FirstPartyMobileApplicationTargeting
* FirstPartyMobileApplicationTargeting `object`: Represents a list of targeted and excluded mobile application IDs that publishers own. Mobile application IDs are from App Store and Google Play Store. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded.
  * excludedAppIds `array`: A list of application IDs to be excluded.
    * items `string`
  * targetedAppIds `array`: A list of application IDs to be included.
    * items `string`

### FrequencyCap
* FrequencyCap `object`: Frequency cap.
  * maxImpressions `integer`: The maximum number of impressions that can be served to a user within the specified time period.
  * numTimeUnits `integer`: The amount of time, in the units specified by time_unit_type. Defines the amount of time over which impressions per user are counted and capped.
  * timeUnitType `string` (values: TIME_UNIT_TYPE_UNSPECIFIED, MINUTE, HOUR, DAY, WEEK, MONTH, LIFETIME): The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped.

### GuaranteedFixedPriceTerms
* GuaranteedFixedPriceTerms `object`: Terms for Programmatic Guaranteed Deals.
  * fixedPrices `array`: Fixed price for the specified buyer.
    * items [PricePerBuyer](#priceperbuyer)
  * guaranteedImpressions `string`: Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy.
  * guaranteedLooks `string`: Count of guaranteed looks. Required for deal, optional for product.
  * minimumDailyLooks `string`: Daily minimum looks for CPD deal types.

### HtmlContent
* HtmlContent `object`: HTML content for a creative.
  * height `integer`: The height of the HTML snippet in pixels.
  * snippet `string`: The HTML snippet that displays the ad when inserted in the web page.
  * width `integer`: The width of the HTML snippet in pixels.

### Image
* Image `object`: An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.
  * height `integer`: Image height in pixels.
  * url `string`: The URL of the image.
  * width `integer`: Image width in pixels.

### ImpressionMetricsRow
* ImpressionMetricsRow `object`: The set of metrics that are measured in numbers of impressions, representing how many impressions with the specified dimension values were considered eligible at each stage of the bidding funnel.
  * availableImpressions [MetricValue](#metricvalue)
  * bidRequests [MetricValue](#metricvalue)
  * inventoryMatches [MetricValue](#metricvalue)
  * responsesWithBids [MetricValue](#metricvalue)
  * rowDimensions [RowDimensions](#rowdimensions)
  * successfulResponses [MetricValue](#metricvalue)

### InventorySizeTargeting
* InventorySizeTargeting `object`: Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager.
  * excludedInventorySizes `array`: A list of inventory sizes to be excluded.
    * items [AdSize](#adsize)
  * targetedInventorySizes `array`: A list of inventory sizes to be included.
    * items [AdSize](#adsize)

### ListBidMetricsResponse
* ListBidMetricsResponse `object`: Response message for listing the metrics that are measured in number of bids.
  * bidMetricsRows `array`: List of rows, each containing a set of bid metrics.
    * items [BidMetricsRow](#bidmetricsrow)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListBidMetricsRequest.pageToken field in the subsequent call to the bidMetrics.list method to retrieve the next page of results.

### ListBidResponseErrorsResponse
* ListBidResponseErrorsResponse `object`: Response message for listing all reasons that bid responses resulted in an error.
  * calloutStatusRows `array`: List of rows, with counts of bid responses aggregated by callout status.
    * items [CalloutStatusRow](#calloutstatusrow)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListBidResponseErrorsRequest.pageToken field in the subsequent call to the bidResponseErrors.list method to retrieve the next page of results.

### ListBidResponsesWithoutBidsResponse
* ListBidResponsesWithoutBidsResponse `object`: Response message for listing all reasons that bid responses were considered to have no applicable bids.
  * bidResponseWithoutBidsStatusRows `array`: List of rows, with counts of bid responses without bids aggregated by status.
    * items [BidResponseWithoutBidsStatusRow](#bidresponsewithoutbidsstatusrow)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListBidResponsesWithoutBidsRequest.pageToken field in the subsequent call to the bidResponsesWithoutBids.list method to retrieve the next page of results.

### ListClientUserInvitationsResponse
* ListClientUserInvitationsResponse `object`
  * invitations `array`: The returned list of client users.
    * items [ClientUserInvitation](#clientuserinvitation)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListClientUserInvitationsRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results.

### ListClientUsersResponse
* ListClientUsersResponse `object`
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results.
  * users `array`: The returned list of client users.
    * items [ClientUser](#clientuser)

### ListClientsResponse
* ListClientsResponse `object`
  * clients `array`: The returned list of clients.
    * items [Client](#client)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the accounts.clients.list method to retrieve the next page of results.

### ListCreativeStatusBreakdownByCreativeResponse
* ListCreativeStatusBreakdownByCreativeResponse `object`: Response message for listing all creatives associated with a given filtered bid reason.
  * filteredBidCreativeRows `array`: List of rows, with counts of bids with a given creative status aggregated by creative.
    * items [FilteredBidCreativeRow](#filteredbidcreativerow)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByCreativeRequest.pageToken field in the subsequent call to the filteredBids.creatives.list method to retrieve the next page of results.

### ListCreativeStatusBreakdownByDetailResponse
* ListCreativeStatusBreakdownByDetailResponse `object`: Response message for listing all details associated with a given filtered bid reason.
  * detailType `string` (values: DETAIL_TYPE_UNSPECIFIED, CREATIVE_ATTRIBUTE, VENDOR, SENSITIVE_CATEGORY, PRODUCT_CATEGORY, DISAPPROVAL_REASON, POLICY_TOPIC): The type of detail that the detail IDs represent.
  * filteredBidDetailRows `array`: List of rows, with counts of bids with a given creative status aggregated by detail.
    * items [FilteredBidDetailRow](#filteredbiddetailrow)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByDetailRequest.pageToken field in the subsequent call to the filteredBids.details.list method to retrieve the next page of results.

### ListCreativesResponse
* ListCreativesResponse `object`: A response for listing creatives.
  * creatives `array`: The list of creatives.
    * items [Creative](#creative)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListCreativesRequest.page_token field in the subsequent call to `ListCreatives` method to retrieve the next page of results.

### ListDealAssociationsResponse
* ListDealAssociationsResponse `object`: A response for listing creative and deal associations
  * associations `array`: The list of associations.
    * items [CreativeDealAssociation](#creativedealassociation)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListDealAssociationsRequest.page_token field in the subsequent call to 'ListDealAssociation' method to retrieve the next page of results.

### ListFilterSetsResponse
* ListFilterSetsResponse `object`: Response message for listing filter sets.
  * filterSets `array`: The filter sets belonging to the buyer.
    * items [FilterSet](#filterset)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListFilterSetsRequest.pageToken field in the subsequent call to the accounts.filterSets.list method to retrieve the next page of results.

### ListFilteredBidRequestsResponse
* ListFilteredBidRequestsResponse `object`: Response message for listing all reasons that bid requests were filtered and not sent to the buyer.
  * calloutStatusRows `array`: List of rows, with counts of filtered bid requests aggregated by callout status.
    * items [CalloutStatusRow](#calloutstatusrow)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListFilteredBidRequestsRequest.pageToken field in the subsequent call to the filteredBidRequests.list method to retrieve the next page of results.

### ListFilteredBidsResponse
* ListFilteredBidsResponse `object`: Response message for listing all reasons that bids were filtered from the auction.
  * creativeStatusRows `array`: List of rows, with counts of filtered bids aggregated by filtering reason (i.e. creative status).
    * items [CreativeStatusRow](#creativestatusrow)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListFilteredBidsRequest.pageToken field in the subsequent call to the filteredBids.list method to retrieve the next page of results.

### ListImpressionMetricsResponse
* ListImpressionMetricsResponse `object`: Response message for listing the metrics that are measured in number of impressions.
  * impressionMetricsRows `array`: List of rows, each containing a set of impression metrics.
    * items [ImpressionMetricsRow](#impressionmetricsrow)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListImpressionMetricsRequest.pageToken field in the subsequent call to the impressionMetrics.list method to retrieve the next page of results.

### ListLosingBidsResponse
* ListLosingBidsResponse `object`: Response message for listing all reasons that bids lost in the auction.
  * creativeStatusRows `array`: List of rows, with counts of losing bids aggregated by loss reason (i.e. creative status).
    * items [CreativeStatusRow](#creativestatusrow)
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListLosingBidsRequest.pageToken field in the subsequent call to the losingBids.list method to retrieve the next page of results.

### ListNonBillableWinningBidsResponse
* ListNonBillableWinningBidsResponse `object`: Response message for listing all reasons for which a buyer was not billed for a winning bid.
  * nextPageToken `string`: A token to retrieve the next page of results. Pass this value in the ListNonBillableWinningBidsRequest.pageToken field in the subsequent call to the nonBillableWinningBids.list method to retrieve the next page of results.
  * nonBillableWinningBidStatusRows `array`: List of rows, with counts of bids not billed aggregated by reason.
    * items [NonBillableWinningBidStatusRow](#nonbillablewinningbidstatusrow)

### ListProductsResponse
* ListProductsResponse `object`: Response message for listing products visible to the buyer.
  * nextPageToken `string`: List pagination support.
  * products `array`: The list of matching products at their head revision number.
    * items [Product](#product)

### ListProposalsResponse
* ListProposalsResponse `object`: Response message for listing proposals.
  * nextPageToken `string`: Continuation token for fetching the next page of results.
  * proposals `array`: The list of proposals.
    * items [Proposal](#proposal)

### ListPublisherProfilesResponse
* ListPublisherProfilesResponse `object`: Response message for profiles visible to the buyer.
  * nextPageToken `string`: List pagination support
  * publisherProfiles `array`: The list of matching publisher profiles.
    * items [PublisherProfile](#publisherprofile)

### LocationContext
* LocationContext `object`: Output only. The Geo criteria the restriction applies to.
  * geoCriteriaIds `array`: IDs representing the geo location for this context. Please refer to the [geo-table.csv](https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv) file for different geo criteria IDs.
    * items `integer`

### MarketplaceTargeting
* MarketplaceTargeting `object`: Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
  * geoTargeting [CriteriaTargeting](#criteriatargeting)
  * inventorySizeTargeting [InventorySizeTargeting](#inventorysizetargeting)
  * placementTargeting [PlacementTargeting](#placementtargeting)
  * technologyTargeting [TechnologyTargeting](#technologytargeting)
  * videoTargeting [VideoTargeting](#videotargeting)

### MetricValue
* MetricValue `object`: A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (i.e. when sampled).
  * value `string`: The expected value of the metric.
  * variance `string`: The variance (i.e. square of the standard deviation) of the metric value. If value is exact, variance is 0. Can be used to calculate margin of error as a percentage of value, using the following formula, where Z is the standard constant that depends on the desired size of the confidence interval (e.g. for 90% confidence interval, use Z = 1.645): marginOfError = 100 * Z * sqrt(variance) / value

### MobileApplicationTargeting
* MobileApplicationTargeting `object`: Mobile application targeting settings.
  * firstPartyTargeting [FirstPartyMobileApplicationTargeting](#firstpartymobileapplicationtargeting)

### Money
* Money `object`: Represents an amount of money with its currency type.
  * currencyCode `string`: The three-letter currency code defined in ISO 4217.
  * nanos `integer`: Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
  * units `string`: The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.

### NativeContent
* NativeContent `object`: Native content for a creative.
  * advertiserName `string`: The name of the advertiser or sponsor, to be displayed in the ad creative.
  * appIcon [Image](#image)
  * body `string`: A long description of the ad.
  * callToAction `string`: A label for the button that the user is supposed to click.
  * clickLinkUrl `string`: The URL that the browser/SDK will load when the user clicks the ad.
  * clickTrackingUrl `string`: The URL to use for click tracking.
  * headline `string`: A short title for the ad.
  * image [Image](#image)
  * logo [Image](#image)
  * priceDisplayText `string`: The price of the promoted app including currency info.
  * starRating `number`: The app rating in the app store. Must be in the range [0-5].
  * storeUrl `string`: The URL to the app store to purchase/download the promoted app.
  * videoUrl `string`: The URL to fetch a native video ad.

### NonBillableWinningBidStatusRow
* NonBillableWinningBidStatusRow `object`: The number of winning bids with the specified dimension values for which the buyer was not billed, as described by the specified status.
  * bidCount [MetricValue](#metricvalue)
  * rowDimensions [RowDimensions](#rowdimensions)
  * status `string` (values: STATUS_UNSPECIFIED, AD_NOT_RENDERED, INVALID_IMPRESSION, FATAL_VAST_ERROR, LOST_IN_MEDIATION): The status specifying why the winning bids were not billed.

### NonGuaranteedAuctionTerms
* NonGuaranteedAuctionTerms `object`: Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request.
  * autoOptimizePrivateAuction `boolean`: True if open auction buyers are allowed to compete with invited buyers in this private auction.
  * reservePricesPerBuyer `array`: Reserve price for the specified buyer.
    * items [PricePerBuyer](#priceperbuyer)

### NonGuaranteedFixedPriceTerms
* NonGuaranteedFixedPriceTerms `object`: Terms for Preferred Deals. Note that Preferred Deals cannot be created via the API at this time, but can be returned in a get or list request.
  * fixedPrices `array`: Fixed price for the specified buyer.
    * items [PricePerBuyer](#priceperbuyer)

### Note
* Note `object`: A proposal may be associated to several notes.
  * createTime `string`: Output only. The timestamp for when this note was created.
  * creatorRole `string` (values: BUYER_SELLER_ROLE_UNSPECIFIED, BUYER, SELLER): Output only. The role of the person (buyer/seller) creating the note.
  * note `string`: The actual note to attach. (max-length: 1024 unicode code units) Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.
  * noteId `string`: Output only. The unique ID for the note.
  * proposalRevision `string`: Output only. The revision number of the proposal when the note is created.

### OperatingSystemTargeting
* OperatingSystemTargeting `object`: Represents targeting information for operating systems.
  * operatingSystemCriteria [CriteriaTargeting](#criteriatargeting)
  * operatingSystemVersionCriteria [CriteriaTargeting](#criteriatargeting)

### PauseProposalRequest
* PauseProposalRequest `object`: Request message to pause serving for an already-finalized proposal.
  * reason `string`: The reason why the proposal is being paused. This human readable message will be displayed in the seller's UI. (Max length: 1000 unicode code units.)

### PlacementTargeting
* PlacementTargeting `object`: Represents targeting about where the ads can appear, e.g., certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
  * mobileApplicationTargeting [MobileApplicationTargeting](#mobileapplicationtargeting)
  * urlTargeting [UrlTargeting](#urltargeting)

### PlatformContext
* PlatformContext `object`: Output only. The type of platform the restriction applies to.
  * platforms `array`: The platforms this restriction applies to.
    * items `string` (values: DESKTOP, ANDROID, IOS)

### Price
* Price `object`: Represents a price and a pricing type for a product / deal.
  * amount [Money](#money)
  * pricingType `string` (values: PRICING_TYPE_UNSPECIFIED, COST_PER_MILLE, COST_PER_DAY): The pricing type for the deal/product. (default: CPM)

### PricePerBuyer
* PricePerBuyer `object`: Used to specify pricing rules for buyers/advertisers. Each PricePerBuyer in a product can become 0 or 1 deals. To check if there is a PricePerBuyer for a particular buyer or buyer/advertiser pair, we look for the most specific matching rule - we first look for a rule matching the buyer and advertiser, next a rule with the buyer but an empty advertiser list, and otherwise look for a matching rule where no buyer is set.
  * advertiserIds `array`: The list of advertisers for this price when associated with this buyer. If empty, all advertisers with this buyer pay this price.
    * items `string`
  * buyer [Buyer](#buyer)
  * price [Price](#price)

### PrivateData
* PrivateData `object`: Buyers are allowed to store certain types of private data in a proposal/deal.
  * referenceId `string`: A buyer or seller specified reference ID. This can be queried in the list operations (max-length: 1024 unicode code units).

### Product
* Product `object`: Note: this resource requires whitelisting for access. Please contact your account manager for access to Marketplace resources. A product is a segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory.
  * availableEndTime `string`: The proposed end time for the deal. The field will be truncated to the order of seconds during serving.
  * availableStartTime `string`: Inventory availability dates. The start time will be truncated to seconds during serving. Thus, a field specified as 3:23:34.456 (HH:mm:ss.SSS) will be truncated to 3:23:34 when serving.
  * createTime `string`: Creation time.
  * creatorContacts `array`: Optional contact information for the creator of this product.
    * items [ContactInformation](#contactinformation)
  * displayName `string`: The display name for this product as set by the seller.
  * hasCreatorSignedOff `boolean`: If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false.
  * productId `string`: The unique ID for the product.
  * productRevision `string`: The revision number of the product (auto-assigned by Marketplace).
  * publisherProfileId `string`: An ID which can be used by the Publisher Profile API to get more information about the seller that created this product.
  * seller [Seller](#seller)
  * syndicationProduct `string` (values: SYNDICATION_PRODUCT_UNSPECIFIED, CONTENT, MOBILE, VIDEO, GAMES): The syndication product associated with the deal.
  * targetingCriterion `array`: Targeting that is shared between the buyer and the seller. Each targeting criterion has a specified key and for each key there is a list of inclusion value or exclusion values.
    * items [TargetingCriteria](#targetingcriteria)
  * terms [DealTerms](#dealterms)
  * updateTime `string`: Time of last update.
  * webPropertyCode `string`: The web-property code for the seller. This needs to be copied as is when adding a new deal to a proposal.

### Proposal
* Proposal `object`: Note: this resource requires whitelisting for access. Please contact your account manager for access to Marketplace resources. Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: you can not update, create, or otherwise modify Private Auction or Preferred Deals deals through the API. Fields are updatable unless noted otherwise.
  * billedBuyer [Buyer](#buyer)
  * buyer [Buyer](#buyer)
  * buyerContacts `array`: Contact information for the buyer.
    * items [ContactInformation](#contactinformation)
  * buyerPrivateData [PrivateData](#privatedata)
  * deals `array`: The deals associated with this proposal. For Private Auction proposals (whose deals have NonGuaranteedAuctionTerms), there will only be one deal.
    * items [Deal](#deal)
  * displayName `string`: The name for the proposal.
  * isRenegotiating `boolean`: Output only. True if the proposal is being renegotiated.
  * isSetupComplete `boolean`: Output only. True, if the buyside inventory setup is complete for this proposal.
  * lastUpdaterOrCommentorRole `string` (values: BUYER_SELLER_ROLE_UNSPECIFIED, BUYER, SELLER): Output only. The role of the last user that either updated the proposal or left a comment.
  * notes `array`: Output only. The notes associated with this proposal.
    * items [Note](#note)
  * originatorRole `string` (values: BUYER_SELLER_ROLE_UNSPECIFIED, BUYER, SELLER): Output only. Indicates whether the buyer/seller created the proposal.
  * privateAuctionId `string`: Output only. Private auction ID if this proposal is a private auction proposal.
  * proposalId `string`: Output only. The unique ID of the proposal.
  * proposalRevision `string`: Output only. The revision number for the proposal. Each update to the proposal or the deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made.
  * proposalState `string` (values: PROPOSAL_STATE_UNSPECIFIED, PROPOSED, BUYER_ACCEPTED, SELLER_ACCEPTED, CANCELED, FINALIZED): Output only. The current state of the proposal.
  * seller [Seller](#seller)
  * sellerContacts `array`: Output only. Contact information for the seller.
    * items [ContactInformation](#contactinformation)
  * termsAndConditions `string`: Output only. The terms and conditions set by the publisher for this proposal.
  * updateTime `string`: Output only. The time when the proposal was last revised.

### PublisherProfile
* PublisherProfile `object`: Note: this resource requires whitelisting for access. Please contact your account manager for access to Marketplace resources. Represents a publisher profile (https://support.google.com/admanager/answer/6035806) in Marketplace. All fields are read only. All string fields are free-form text entered by the publisher unless noted otherwise.
  * audienceDescription `string`: Description on the publisher's audience.
  * buyerPitchStatement `string`: Statement explaining what's unique about publisher's business, and why buyers should partner with the publisher.
  * directDealsContact `string`: Contact information for direct reservation deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.
  * displayName `string`: Name of the publisher profile.
  * domains `array`: The list of domains represented in this publisher profile. Empty if this is a parent profile. These are top private domains, meaning that these will not contain a string like "photos.google.co.uk/123", but will instead contain "google.co.uk".
    * items `string`
  * googlePlusUrl `string`: URL to publisher's Google+ page.
  * isParent `boolean`: Indicates if this profile is the parent profile of the seller. A parent profile represents all the inventory from the seller, as opposed to child profile that is created to brand a portion of inventory. One seller should have only one parent publisher profile, and can have multiple child profiles. Publisher profiles for the same seller will have same value of field google.ads.adexchange.buyer.v2beta1.PublisherProfile.seller. See https://support.google.com/admanager/answer/6035806 for details.
  * logoUrl `string`: A Google public URL to the logo for this publisher profile. The logo is stored as a PNG, JPG, or GIF image.
  * mediaKitUrl `string`: URL to additional marketing and sales materials.
  * mobileApps `array`: The list of apps represented in this publisher profile. Empty if this is a parent profile.
    * items [PublisherProfileMobileApplication](#publisherprofilemobileapplication)
  * overview `string`: Overview of the publisher.
  * programmaticDealsContact `string`: Contact information for programmatic deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.
  * publisherProfileId `string`: Unique ID for publisher profile.
  * rateCardInfoUrl `string`: URL to a publisher rate card.
  * samplePageUrl `string`: URL to a sample content page.
  * seller [Seller](#seller)
  * topHeadlines `array`: Up to three key metrics and rankings. Max 100 characters each. For example "#1 Mobile News Site for 20 Straight Months".
    * items `string`

### PublisherProfileMobileApplication
* PublisherProfileMobileApplication `object`: A mobile application that contains a external app ID, name, and app store.
  * appStore `string` (values: APP_STORE_TYPE_UNSPECIFIED, APPLE_ITUNES, GOOGLE_PLAY, ROKU, AMAZON_FIRETV, PLAYSTATION, XBOX, SAMSUNG_TV, AMAZON, OPPO, SAMSUNG, VIVO, XIAOMI): The app store the app belongs to.
  * externalAppId `string`: The external ID for the app from its app store.
  * name `string`: The name of the app.

### RealtimeTimeRange
* RealtimeTimeRange `object`: An open-ended realtime time range specified by the start timestamp. For filter sets that specify a realtime time range RTB metrics continue to be aggregated throughout the lifetime of the filter set.
  * startTimestamp `string`: The start timestamp of the real-time RTB metrics aggregation.

### RelativeDateRange
* RelativeDateRange `object`: A relative date range, specified by an offset and a duration. The supported range of dates begins 30 days before today and ends today, i.e., the limits for these values are: offset_days >= 0 duration_days >= 1 offset_days + duration_days <= 30
  * durationDays `integer`: The number of days in the requested date range, e.g., for a range spanning today: 1. For a range spanning the last 7 days: 7.
  * offsetDays `integer`: The end date of the filter set, specified as the number of days before today, e.g., for a range where the last date is today: 0.

### RemoveDealAssociationRequest
* RemoveDealAssociationRequest `object`: A request for removing the association between a deal and a creative.
  * association [CreativeDealAssociation](#creativedealassociation)

### ResumeProposalRequest
* ResumeProposalRequest `object`: Request message to resume (unpause) serving for an already-finalized proposal.

### RowDimensions
* RowDimensions `object`: A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.
  * publisherIdentifier `string`: The publisher identifier for this row, if a breakdown by [BreakdownDimension.PUBLISHER_IDENTIFIER](https://developers.google.com/authorized-buyers/apis/reference/rest/v2beta1/bidders.accounts.filterSets#FilterSet.BreakdownDimension) was requested.
  * timeInterval [TimeInterval](#timeinterval)

### SecurityContext
* SecurityContext `object`: Output only. A security context.
  * securities `array`: The security types in this context.
    * items `string` (values: INSECURE, SSL)

### Seller
* Seller `object`: Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.
  * accountId `string`: The unique ID for the seller. The seller fills in this field. The seller account ID is then available to buyer in the product.
  * subAccountId `string`: Optional sub-account ID for the seller.

### ServingContext
* ServingContext `object`: The serving context for this restriction.
  * all `string` (values: SIMPLE_CONTEXT): Matches all contexts.
  * appType [AppContext](#appcontext)
  * auctionType [AuctionContext](#auctioncontext)
  * location [LocationContext](#locationcontext)
  * platform [PlatformContext](#platformcontext)
  * securityType [SecurityContext](#securitycontext)

### ServingRestriction
* ServingRestriction `object`: Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS vs HTTP request, or the type of auction).
  * contexts `array`: The contexts for the restriction.
    * items [ServingContext](#servingcontext)
  * disapproval [Disapproval](#disapproval)
  * disapprovalReasons `array`: Any disapprovals bound to this restriction. Only present if status=DISAPPROVED. Can be used to filter the response of the creatives.list method. Deprecated; please use disapproval field instead.
    * items [Disapproval](#disapproval)
  * status `string` (values: STATUS_UNSPECIFIED, DISAPPROVAL, PENDING_REVIEW): The status of the creative in this context (for example, it has been explicitly disapproved or is pending review).

### Size
* Size `object`: Message depicting the size of the creative. The units of width and height depend on the type of the targeting.
  * height `integer`: The height of the creative.
  * width `integer`: The width of the creative

### StopWatchingCreativeRequest
* StopWatchingCreativeRequest `object`: A request for stopping notifications for changes to creative Status.

### TargetingCriteria
* TargetingCriteria `object`: Advertisers can target different attributes of an ad slot. For example, they can choose to show ads only if the user is in the U.S. Such targeting criteria can be specified as part of Shared Targeting.
  * exclusions `array`: The list of values to exclude from targeting. Each value is AND'd together.
    * items [TargetingValue](#targetingvalue)
  * inclusions `array`: The list of value to include as part of the targeting. Each value is OR'd together.
    * items [TargetingValue](#targetingvalue)
  * key `string`: The key representing the shared targeting criterion. Targeting criteria defined by Google ad servers will begin with GOOG_. Third parties may define their own keys. A list of permissible keys along with the acceptable values will be provided as part of the external documentation.

### TargetingValue
* TargetingValue `object`: A polymorphic targeting value used as part of Shared Targeting.
  * creativeSizeValue [CreativeSize](#creativesize)
  * dayPartTargetingValue [DayPartTargeting](#dayparttargeting)
  * longValue `string`: The long value to include/exclude.
  * stringValue `string`: The string value to include/exclude.

### TechnologyTargeting
* TechnologyTargeting `object`: Represents targeting about various types of technology.
  * deviceCapabilityTargeting [CriteriaTargeting](#criteriatargeting)
  * deviceCategoryTargeting [CriteriaTargeting](#criteriatargeting)
  * operatingSystemTargeting [OperatingSystemTargeting](#operatingsystemtargeting)

### TimeInterval
* TimeInterval `object`: An interval of time, with an absolute start and end.
  * endTime `string`: The timestamp marking the end of the range (exclusive) for which data is included.
  * startTime `string`: The timestamp marking the start of the range (inclusive) for which data is included.

### TimeOfDay
* TimeOfDay `object`: Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
  * hours `integer`: Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  * minutes `integer`: Minutes of hour of day. Must be from 0 to 59.
  * nanos `integer`: Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * seconds `integer`: Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.

### UrlTargeting
* UrlTargeting `object`: Represents a list of targeted and excluded URLs (e.g., google.com). For Private Auction and AdX Preferred Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.
  * excludedUrls `array`: A list of URLs to be excluded.
    * items `string`
  * targetedUrls `array`: A list of URLs to be included.
    * items `string`

### VideoContent
* VideoContent `object`: Video content for a creative.
  * videoUrl `string`: The URL to fetch a video ad.
  * videoVastXml `string`: The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard.

### VideoTargeting
* VideoTargeting `object`: Represents targeting information about video.
  * excludedPositionTypes `array`: A list of video positions to be excluded. Position types can either be included or excluded (XOR).
    * items `string` (values: POSITION_TYPE_UNSPECIFIED, PREROLL, MIDROLL, POSTROLL)
  * targetedPositionTypes `array`: A list of video positions to be included. When the included list is present, the excluded list must be empty. When the excluded list is present, the included list must be empty.
    * items `string` (values: POSITION_TYPE_UNSPECIFIED, PREROLL, MIDROLL, POSTROLL)

### WatchCreativeRequest
* WatchCreativeRequest `object`: A request for watching changes to creative Status.
  * topic `string`: The Pub/Sub topic to publish notifications to. This topic must already exist and must give permission to ad-exchange-buyside-reports@google.com to write to the topic. This should be the full resource name in "projects/{project_id}/topics/{topic_id}" format.


