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

google_adexchangebuyer2.accounts.clients.list({
  "accountId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Accesses the latest features for managing Ad Exchange accounts, Real-Time Bidding configurations and auction metrics, and Marketplace programmatic deals.

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

### accounts.clients.list
Lists all the clients for the current sponsor buyer.


```js
google_adexchangebuyer2.accounts.clients.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [ListClientsResponse](#listclientsresponse)

### accounts.clients.create
Creates a new client buyer.


```js
google_adexchangebuyer2.accounts.clients.create({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Client](#client)

### accounts.clients.get
Gets a client buyer with a given client account ID.


```js
google_adexchangebuyer2.accounts.clients.get({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * clientAccountId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Client](#client)

### accounts.clients.update
Updates an existing client buyer.


```js
google_adexchangebuyer2.accounts.clients.update({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * clientAccountId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Client](#client)

### accounts.clients.invitations.list
Lists all the client users invitations for a client
with a given account ID.


```js
google_adexchangebuyer2.accounts.clients.invitations.list({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * clientAccountId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [ListClientUserInvitationsResponse](#listclientuserinvitationsresponse)

### accounts.clients.invitations.create
Creates and sends out an email invitation to access
an Ad Exchange client buyer account.


```js
google_adexchangebuyer2.accounts.clients.invitations.create({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * clientAccountId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [ClientUserInvitation](#clientuserinvitation)

### accounts.clients.invitations.get
Retrieves an existing client user invitation.


```js
google_adexchangebuyer2.accounts.clients.invitations.get({
  "accountId": "",
  "clientAccountId": "",
  "invitationId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * clientAccountId **required** `string`
  * invitationId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [ClientUserInvitation](#clientuserinvitation)

### accounts.clients.users.list
Lists all the known client users for a specified
sponsor buyer account ID.


```js
google_adexchangebuyer2.accounts.clients.users.list({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * clientAccountId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [ListClientUsersResponse](#listclientusersresponse)

### accounts.clients.users.get
Retrieves an existing client user.


```js
google_adexchangebuyer2.accounts.clients.users.get({
  "accountId": "",
  "clientAccountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * clientAccountId **required** `string`
  * userId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [ClientUser](#clientuser)

### accounts.clients.users.update
Updates an existing client user.
Only the user status can be changed on update.


```js
google_adexchangebuyer2.accounts.clients.users.update({
  "accountId": "",
  "clientAccountId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * clientAccountId **required** `string`
  * userId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [ClientUser](#clientuser)

### accounts.creatives.list
Lists creatives.


```js
google_adexchangebuyer2.accounts.creatives.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [ListCreativesResponse](#listcreativesresponse)

### accounts.creatives.create
Creates a creative.


```js
google_adexchangebuyer2.accounts.creatives.create({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Creative](#creative)

### accounts.creatives.get
Gets a creative.


```js
google_adexchangebuyer2.accounts.creatives.get({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * creativeId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Creative](#creative)

### accounts.creatives.update
Updates a creative.


```js
google_adexchangebuyer2.accounts.creatives.update({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * creativeId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Creative](#creative)

### accounts.creatives.dealAssociations.list
List all creative-deal associations.


```js
google_adexchangebuyer2.accounts.creatives.dealAssociations.list({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * creativeId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [ListDealAssociationsResponse](#listdealassociationsresponse)

### accounts.creatives.dealAssociations.add
Associate an existing deal with a creative.


```js
google_adexchangebuyer2.accounts.creatives.dealAssociations.add({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * creativeId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Empty](#empty)

### accounts.creatives.dealAssociations.remove
Remove the association between a deal and a creative.


```js
google_adexchangebuyer2.accounts.creatives.dealAssociations.remove({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * creativeId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Empty](#empty)

### accounts.creatives.stopWatching
Stops watching a creative. Will stop push notifications being sent to the
topics when the creative changes status.


```js
google_adexchangebuyer2.accounts.creatives.stopWatching({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * creativeId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Empty](#empty)

### accounts.creatives.watch
Watches a creative. Will result in push notifications being sent to the
topic when the creative changes status.


```js
google_adexchangebuyer2.accounts.creatives.watch({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`
  * creativeId **required** `string`
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Empty](#empty)

### bidders.accounts.filterSets.bidMetrics.list
Lists all metrics that are measured in terms of number of bids.


```js
google_adexchangebuyer2.bidders.accounts.filterSets.bidMetrics.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListBidMetricsResponse](#listbidmetricsresponse)

### bidders.accounts.filterSets.bidResponseErrors.list
List all errors that occurred in bid responses, with the number of bid
responses affected for each reason.


```js
google_adexchangebuyer2.bidders.accounts.filterSets.bidResponseErrors.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListBidResponseErrorsResponse](#listbidresponseerrorsresponse)

### bidders.accounts.filterSets.bidResponsesWithoutBids.list
List all reasons for which bid responses were considered to have no
applicable bids, with the number of bid responses affected for each reason.


```js
google_adexchangebuyer2.bidders.accounts.filterSets.bidResponsesWithoutBids.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListBidResponsesWithoutBidsResponse](#listbidresponseswithoutbidsresponse)

### bidders.accounts.filterSets.filteredBidRequests.list
List all reasons that caused a bid request not to be sent for an
impression, with the number of bid requests not sent for each reason.


```js
google_adexchangebuyer2.bidders.accounts.filterSets.filteredBidRequests.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListFilteredBidRequestsResponse](#listfilteredbidrequestsresponse)

### bidders.accounts.filterSets.filteredBids.list
List all reasons for which bids were filtered, with the number of bids
filtered for each reason.


```js
google_adexchangebuyer2.bidders.accounts.filterSets.filteredBids.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListFilteredBidsResponse](#listfilteredbidsresponse)

### bidders.accounts.filterSets.filteredBids.creatives.list
List all creatives associated with a specific reason for which bids were
filtered, with the number of bids filtered for each creative.


```js
google_adexchangebuyer2.bidders.accounts.filterSets.filteredBids.creatives.list({
  "creativeStatusId": "",
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * creativeStatusId **required** `string`
  * filterSetName **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListCreativeStatusBreakdownByCreativeResponse](#listcreativestatusbreakdownbycreativeresponse)

### bidders.accounts.filterSets.filteredBids.details.list
List all details associated with a specific reason for which bids were
filtered, with the number of bids filtered for each detail.


```js
google_adexchangebuyer2.bidders.accounts.filterSets.filteredBids.details.list({
  "creativeStatusId": "",
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * creativeStatusId **required** `string`
  * filterSetName **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListCreativeStatusBreakdownByDetailResponse](#listcreativestatusbreakdownbydetailresponse)

### bidders.accounts.filterSets.impressionMetrics.list
Lists all metrics that are measured in terms of number of impressions.


```js
google_adexchangebuyer2.bidders.accounts.filterSets.impressionMetrics.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListImpressionMetricsResponse](#listimpressionmetricsresponse)

### bidders.accounts.filterSets.losingBids.list
List all reasons for which bids lost in the auction, with the number of
bids that lost for each reason.


```js
google_adexchangebuyer2.bidders.accounts.filterSets.losingBids.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListLosingBidsResponse](#listlosingbidsresponse)

### bidders.accounts.filterSets.nonBillableWinningBids.list
List all reasons for which winning bids were not billable, with the number
of bids not billed for each reason.


```js
google_adexchangebuyer2.bidders.accounts.filterSets.nonBillableWinningBids.list({
  "filterSetName": ""
}, context)
```

#### Input
* input `object`
  * filterSetName **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListNonBillableWinningBidsResponse](#listnonbillablewinningbidsresponse)

### bidders.accounts.filterSets.delete
Deletes the requested filter set from the account with the given account
ID.


```js
google_adexchangebuyer2.bidders.accounts.filterSets.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

### bidders.accounts.filterSets.get
Retrieves the requested filter set for the account with the given account
ID.


```js
google_adexchangebuyer2.bidders.accounts.filterSets.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [FilterSet](#filterset)

### bidders.accounts.filterSets.list
Lists all filter sets for the account with the given account ID.


```js
google_adexchangebuyer2.bidders.accounts.filterSets.list({
  "ownerName": ""
}, context)
```

#### Input
* input `object`
  * ownerName **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListFilterSetsResponse](#listfiltersetsresponse)

### bidders.accounts.filterSets.create
Creates the specified filter set for the account with the given account ID.


```js
google_adexchangebuyer2.bidders.accounts.filterSets.create({
  "ownerName": ""
}, context)
```

#### Input
* input `object`
  * ownerName **required** `string`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [FilterSet](#filterset)



## Definitions

### AbsoluteDateRange
* AbsoluteDateRange `object`: An absolute date range, specified by its start date and end date.
  * endDate [Date](#date)
  * startDate [Date](#date)

### AddDealAssociationRequest
* AddDealAssociationRequest `object`: A request for associating a deal and a creative.
  * association [CreativeDealAssociation](#creativedealassociation)

### AppContext
* AppContext `object`: @OutputOnly The app type the restriction applies to for mobile device.
  * appTypes `array`: The app types this restriction applies to.
    * items `string` (values: NATIVE, WEB)

### AuctionContext
* AuctionContext `object`: @OutputOnly The auction type the restriction applies to.
  * auctionTypes `array`: The auction types this restriction applies to.
    * items `string` (values: OPEN_AUCTION, DIRECT_DEALS)

### BidMetricsRow
* BidMetricsRow `object`: The set of metrics that are measured in numbers of bids, representing how
  * bids [MetricValue](#metricvalue)
  * bidsInAuction [MetricValue](#metricvalue)
  * billedImpressions [MetricValue](#metricvalue)
  * impressionsWon [MetricValue](#metricvalue)
  * measurableImpressions [MetricValue](#metricvalue)
  * rowDimensions [RowDimensions](#rowdimensions)
  * viewableImpressions [MetricValue](#metricvalue)

### BidResponseWithoutBidsStatusRow
* BidResponseWithoutBidsStatusRow `object`: The number of impressions with the specified dimension values that were
  * impressionCount [MetricValue](#metricvalue)
  * rowDimensions [RowDimensions](#rowdimensions)
  * status `string` (values: STATUS_UNSPECIFIED, RESPONSES_WITHOUT_BIDS, RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT, RESPONSES_WITHOUT_BIDS_FOR_DEAL): The status specifying why the bid responses were considered to have no

### CalloutStatusRow
* CalloutStatusRow `object`: The number of impressions with the specified dimension values where the
  * calloutStatusId `integer`: The ID of the callout status.
  * impressionCount [MetricValue](#metricvalue)
  * rowDimensions [RowDimensions](#rowdimensions)

### Client
* Client `object`: A client resource represents a client buyer&mdash;an agency,
  * clientAccountId `string`: The globally-unique numerical ID of the client.
  * clientName `string`: Name used to represent this client to publishers.
  * entityId `string`: Numerical identifier of the client entity.
  * entityName `string`: The name of the entity. This field is automatically fetched based on
  * entityType `string` (values: ENTITY_TYPE_UNSPECIFIED, ADVERTISER, BRAND, AGENCY): The type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`.
  * role `string` (values: CLIENT_ROLE_UNSPECIFIED, CLIENT_DEAL_VIEWER, CLIENT_DEAL_NEGOTIATOR, CLIENT_DEAL_APPROVER): The role which is assigned to the client buyer. Each role implies a set of
  * status `string` (values: CLIENT_STATUS_UNSPECIFIED, DISABLED, ACTIVE): The status of the client buyer.
  * visibleToSeller `boolean`: Whether the client buyer will be visible to sellers.

### ClientUser
* ClientUser `object`: A client user is created under a client buyer and has restricted access to
  * clientAccountId `string`: Numerical account ID of the client buyer
  * email `string`: User's email address. The value of this field
  * status `string` (values: USER_STATUS_UNSPECIFIED, PENDING, ACTIVE, DISABLED): The status of the client user.
  * userId `string`: The unique numerical ID of the client user

### ClientUserInvitation
* ClientUserInvitation `object`: An invitation for a new client user to get access to the Ad Exchange
  * clientAccountId `string`: Numerical account ID of the client buyer
  * email `string`: The email address to which the invitation is sent. Email
  * invitationId `string`: The unique numerical ID of the invitation that is sent to the user.

### Correction
* Correction `object`: @OutputOnly Shows any corrections that were applied to this creative.
  * contexts `array`: The contexts for the correction.
    * items [ServingContext](#servingcontext)
  * details `array`: Additional details about what was corrected.
    * items `string`
  * type `string` (values: CORRECTION_TYPE_UNSPECIFIED, VENDOR_IDS_ADDED, SSL_ATTRIBUTE_REMOVED, FLASH_FREE_ATTRIBUTE_REMOVED, FLASH_FREE_ATTRIBUTE_ADDED, REQUIRED_ATTRIBUTE_ADDED, REQUIRED_VENDOR_ADDED, SSL_ATTRIBUTE_ADDED, IN_BANNER_VIDEO_ATTRIBUTE_ADDED, MRAID_ATTRIBUTE_ADDED, FLASH_ATTRIBUTE_REMOVED, VIDEO_IN_SNIPPET_ATTRIBUTE_ADDED): The type of correction that was applied to the creative.

### Creative
* Creative `object`: A creative and its classification data.
  * accountId `string`: The account that this creative belongs to.
  * adChoicesDestinationUrl `string`: The link to AdChoices destination page.
  * advertiserName `string`: The name of the company being advertised in the creative.
  * agencyId `string`: The agency ID for this creative.
  * apiUpdateTime `string`: @OutputOnly The last update timestamp of the creative via API.
  * attributes `array`: All attributes for the ads that may be shown from this creative.
    * items `string` (values: ATTRIBUTE_UNSPECIFIED, IS_TAGGED, IS_COOKIE_TARGETED, IS_USER_INTEREST_TARGETED, EXPANDING_DIRECTION_NONE, EXPANDING_DIRECTION_UP, EXPANDING_DIRECTION_DOWN, EXPANDING_DIRECTION_LEFT, EXPANDING_DIRECTION_RIGHT, EXPANDING_DIRECTION_UP_LEFT, EXPANDING_DIRECTION_UP_RIGHT, EXPANDING_DIRECTION_DOWN_LEFT, EXPANDING_DIRECTION_DOWN_RIGHT, EXPANDING_DIRECTION_UP_OR_DOWN, EXPANDING_DIRECTION_LEFT_OR_RIGHT, EXPANDING_DIRECTION_ANY_DIAGONAL, EXPANDING_ACTION_ROLLOVER_TO_EXPAND, INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH, RICH_MEDIA_CAPABILITY_TYPE_MRAID, RICH_MEDIA_CAPABILITY_TYPE_SSL, RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL, NATIVE_ELIGIBILITY_ELIGIBLE, NATIVE_ELIGIBILITY_NOT_ELIGIBLE, RENDERING_SIZELESS_ADX)
  * clickThroughUrls `array`: The set of destination URLs for the creative.
    * items `string`
  * corrections `array`: @OutputOnly Shows any corrections that were applied to this creative.
    * items [Correction](#correction)
  * creativeId `string`: The buyer-defined creative ID of this creative.
  * dealsStatus `string` (values: STATUS_UNSPECIFIED, NOT_CHECKED, CONDITIONALLY_APPROVED, APPROVED, DISAPPROVED): @OutputOnly The top-level deals status of this creative.
  * detectedAdvertiserIds `array`: @OutputOnly Detected advertiser IDs, if any.
    * items `string`
  * detectedDomains `array`: @OutputOnly
    * items `string`
  * detectedLanguages `array`: @OutputOnly
    * items `string`
  * detectedProductCategories `array`: @OutputOnly Detected product categories, if any.
    * items `integer`
  * detectedSensitiveCategories `array`: @OutputOnly Detected sensitive categories, if any.
    * items `integer`
  * filteringStats [FilteringStats](#filteringstats)
  * html [HtmlContent](#htmlcontent)
  * impressionTrackingUrls `array`: The set of URLs to be called to record an impression.
    * items `string`
  * native [NativeContent](#nativecontent)
  * openAuctionStatus `string` (values: STATUS_UNSPECIFIED, NOT_CHECKED, CONDITIONALLY_APPROVED, APPROVED, DISAPPROVED): @OutputOnly The top-level open auction status of this creative.
  * restrictedCategories `array`: All restricted categories for the ads that may be shown from this creative.
    * items `string` (values: NO_RESTRICTED_CATEGORIES, ALCOHOL)
  * servingRestrictions `array`: @OutputOnly The granular status of this ad in specific contexts.
    * items [ServingRestriction](#servingrestriction)
  * vendorIds `array`: All vendor IDs for the ads that may be shown from this creative.
    * items `integer`
  * version `integer`: @OutputOnly The version of this creative.
  * video [VideoContent](#videocontent)

### CreativeDealAssociation
* CreativeDealAssociation `object`: The association between a creative and a deal.
  * accountId `string`: The account the creative belongs to.
  * creativeId `string`: The ID of the creative associated with the deal.
  * dealsId `string`: The externalDealId for the deal associated with the creative.

### CreativeStatusRow
* CreativeStatusRow `object`: The number of bids with the specified dimension values that did not win the
  * bidCount [MetricValue](#metricvalue)
  * creativeStatusId `integer`: The ID of the creative status.
  * rowDimensions [RowDimensions](#rowdimensions)

### Date
* Date `object`: Represents a whole calendar date, e.g. date of birth. The time of day and
  * day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month, or 0
  * month `integer`: Month of year. Must be from 1 to 12.
  * year `integer`: Year of date. Must be from 1 to 9999, or 0 if specifying a date without

### Disapproval
* Disapproval `object`: @OutputOnly The reason and details for a disapproval.
  * details `array`: Additional details about the reason for disapproval.
    * items `string`
  * reason `string` (values: LENGTH_OF_IMAGE_ANIMATION, BROKEN_URL, MEDIA_NOT_FUNCTIONAL, INVALID_FOURTH_PARTY_CALL, INCORRECT_REMARKETING_DECLARATION, LANDING_PAGE_ERROR, AD_SIZE_DOES_NOT_MATCH_AD_SLOT, NO_BORDER, FOURTH_PARTY_BROWSER_COOKIES, LSO_OBJECTS, BLANK_CREATIVE, DESTINATION_URLS_UNDECLARED, PROBLEM_WITH_CLICK_MACRO, INCORRECT_AD_TECHNOLOGY_DECLARATION, INCORRECT_DESTINATION_URL_DECLARATION, EXPANDABLE_INCORRECT_DIRECTION, EXPANDABLE_DIRECTION_NOT_SUPPORTED, EXPANDABLE_INVALID_VENDOR, EXPANDABLE_FUNCTIONALITY, VIDEO_INVALID_VENDOR, VIDEO_UNSUPPORTED_LENGTH, VIDEO_UNSUPPORTED_FORMAT, VIDEO_FUNCTIONALITY, LANDING_PAGE_DISABLED, MALWARE_SUSPECTED, ADULT_IMAGE_OR_VIDEO, INACCURATE_AD_TEXT, COUNTERFEIT_DESIGNER_GOODS, POP_UP, INVALID_RTB_PROTOCOL_USAGE, RAW_IP_ADDRESS_IN_SNIPPET, UNACCEPTABLE_CONTENT_SOFTWARE, UNAUTHORIZED_COOKIE_ON_GOOGLE_DOMAIN, UNDECLARED_FLASH_OBJECTS, INVALID_SSL_DECLARATION, DIRECT_DOWNLOAD_IN_AD, MAXIMUM_DOWNLOAD_SIZE_EXCEEDED, DESTINATION_URL_SITE_NOT_CRAWLABLE, BAD_URL_LEGAL_DISAPPROVAL, PHARMA_GAMBLING_ALCOHOL_NOT_ALLOWED, DYNAMIC_DNS_AT_DESTINATION_URL, POOR_IMAGE_OR_VIDEO_QUALITY, UNACCEPTABLE_IMAGE_CONTENT, INCORRECT_IMAGE_LAYOUT, IRRELEVANT_IMAGE_OR_VIDEO, DESTINATION_SITE_DOES_NOT_ALLOW_GOING_BACK, MISLEADING_CLAIMS_IN_AD, RESTRICTED_PRODUCTS, UNACCEPTABLE_CONTENT, AUTOMATED_AD_CLICKING, INVALID_URL_PROTOCOL, UNDECLARED_RESTRICTED_CONTENT, INVALID_REMARKETING_LIST_USAGE, DESTINATION_SITE_NOT_CRAWLABLE_ROBOTS_TXT, CLICK_TO_DOWNLOAD_NOT_AN_APP, INACCURATE_REVIEW_EXTENSION, SEXUALLY_EXPLICIT_CONTENT, GAINING_AN_UNFAIR_ADVANTAGE, GAMING_THE_GOOGLE_NETWORK, DANGEROUS_PRODUCTS_KNIVES, DANGEROUS_PRODUCTS_EXPLOSIVES, DANGEROUS_PRODUCTS_GUNS, DANGEROUS_PRODUCTS_DRUGS, DANGEROUS_PRODUCTS_TOBACCO, DANGEROUS_PRODUCTS_WEAPONS, UNCLEAR_OR_IRRELEVANT_AD, PROFESSIONAL_STANDARDS, DYSFUNCTIONAL_PROMOTION, INVALID_INTEREST_BASED_AD, MISUSE_OF_PERSONAL_INFORMATION, OMISSION_OF_RELEVANT_INFORMATION, UNAVAILABLE_PROMOTIONS, MISLEADING_PROMOTIONS, INAPPROPRIATE_CONTENT, SENSITIVE_EVENTS, SHOCKING_CONTENT, ENABLING_DISHONEST_BEHAVIOR, TECHNICAL_REQUIREMENTS, RESTRICTED_POLITICAL_CONTENT, UNSUPPORTED_CONTENT, INVALID_BIDDING_METHOD, VIDEO_TOO_LONG, VIOLATES_JAPANESE_PHARMACY_LAW, UNACCREDITED_PET_PHARMACY, ABORTION, CONTRACEPTIVES, NEED_CERTIFICATES_TO_ADVERTISE_IN_CHINA, KCDSP_REGISTRATION, NOT_FAMILY_SAFE, CLINICAL_TRIAL_RECRUITMENT, MAXIMUM_NUMBER_OF_HTTP_CALLS_EXCEEDED, MAXIMUM_NUMBER_OF_COOKIES_EXCEEDED, PERSONAL_LOANS, UNSUPPORTED_FLASH_CONTENT): The categorized reason for disapproval.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### FilterSet
* FilterSet `object`: A set of filters that is applied to a request for data.
  * absoluteDateRange [AbsoluteDateRange](#absolutedaterange)
  * buyerAccountId `string`: The ID of the buyer account on which to filter; optional.
  * creativeId `string`: The ID of the creative on which to filter; optional.
  * dealId `string`: The ID of the deal on which to filter; optional.
  * environment `string` (values: ENVIRONMENT_UNSPECIFIED, WEB, APP): The environment on which to filter; optional.
  * filterSetId `string`: The ID of the filter set; unique within the account of the filter set
  * format `string` (values: FORMAT_UNSPECIFIED, DISPLAY, VIDEO): The format on which to filter; optional.
  * name `string`: A user-defined name of the filter set. Filter set names must be unique
  * ownerAccountId `string`: The account ID of the buyer who owns this filter set.
  * platforms `array`: The list of platforms on which to filter; may be empty. The filters
    * items `string` (values: PLATFORM_UNSPECIFIED, DESKTOP, TABLET, MOBILE)
  * realtimeTimeRange [RealtimeTimeRange](#realtimetimerange)
  * relativeDateRange [RelativeDateRange](#relativedaterange)
  * sellerNetworkIds `array`: The list of IDs of the seller (publisher) networks on which to filter;
    * items `integer`
  * timeSeriesGranularity `string` (values: TIME_SERIES_GRANULARITY_UNSPECIFIED, HOURLY, DAILY): The granularity of time intervals if a time series breakdown is desired;

### FilteredBidCreativeRow
* FilteredBidCreativeRow `object`: The number of filtered bids with the specified dimension values that have the
  * bidCount [MetricValue](#metricvalue)
  * creativeId `string`: The ID of the creative.
  * rowDimensions [RowDimensions](#rowdimensions)

### FilteredBidDetailRow
* FilteredBidDetailRow `object`: The number of filtered bids with the specified dimension values, among those
  * bidCount [MetricValue](#metricvalue)
  * detailId `integer`: The ID of the detail. The associated value can be looked up in the
  * rowDimensions [RowDimensions](#rowdimensions)

### FilteringStats
* FilteringStats `object`: @OutputOnly Filtering reasons for this creative during a period of a single
  * date [Date](#date)
  * reasons `array`: The set of filtering reasons for this date.
    * items [Reason](#reason)

### HtmlContent
* HtmlContent `object`: HTML content for a creative.
  * height `integer`: The height of the HTML snippet in pixels.
  * snippet `string`: The HTML snippet that displays the ad when inserted in the web page.
  * width `integer`: The width of the HTML snippet in pixels.

### Image
* Image `object`: An image resource. You may provide a larger image than was requested,
  * height `integer`: Image height in pixels.
  * url `string`: The URL of the image.
  * width `integer`: Image width in pixels.

### ImpressionMetricsRow
* ImpressionMetricsRow `object`: The set of metrics that are measured in numbers of impressions, representing
  * availableImpressions [MetricValue](#metricvalue)
  * bidRequests [MetricValue](#metricvalue)
  * inventoryMatches [MetricValue](#metricvalue)
  * responsesWithBids [MetricValue](#metricvalue)
  * rowDimensions [RowDimensions](#rowdimensions)
  * successfulResponses [MetricValue](#metricvalue)

### ListBidMetricsResponse
* ListBidMetricsResponse `object`: Response message for listing the metrics that are measured in number of bids.
  * bidMetricsRows `array`: List of rows, each containing a set of bid metrics.
    * items [BidMetricsRow](#bidmetricsrow)
  * nextPageToken `string`: A token to retrieve the next page of results.

### ListBidResponseErrorsResponse
* ListBidResponseErrorsResponse `object`: Response message for listing all reasons that bid responses resulted in an
  * calloutStatusRows `array`: List of rows, with counts of bid responses aggregated by callout status.
    * items [CalloutStatusRow](#calloutstatusrow)
  * nextPageToken `string`: A token to retrieve the next page of results.

### ListBidResponsesWithoutBidsResponse
* ListBidResponsesWithoutBidsResponse `object`: Response message for listing all reasons that bid responses were considered
  * bidResponseWithoutBidsStatusRows `array`: List of rows, with counts of bid responses without bids aggregated by
    * items [BidResponseWithoutBidsStatusRow](#bidresponsewithoutbidsstatusrow)
  * nextPageToken `string`: A token to retrieve the next page of results.

### ListClientUserInvitationsResponse
* ListClientUserInvitationsResponse `object`
  * invitations `array`: The returned list of client users.
    * items [ClientUserInvitation](#clientuserinvitation)
  * nextPageToken `string`: A token to retrieve the next page of results.

### ListClientUsersResponse
* ListClientUsersResponse `object`
  * nextPageToken `string`: A token to retrieve the next page of results.
  * users `array`: The returned list of client users.
    * items [ClientUser](#clientuser)

### ListClientsResponse
* ListClientsResponse `object`
  * clients `array`: The returned list of clients.
    * items [Client](#client)
  * nextPageToken `string`: A token to retrieve the next page of results.

### ListCreativeStatusBreakdownByCreativeResponse
* ListCreativeStatusBreakdownByCreativeResponse `object`: Response message for listing all creatives associated with a given filtered
  * filteredBidCreativeRows `array`: List of rows, with counts of bids with a given creative status aggregated
    * items [FilteredBidCreativeRow](#filteredbidcreativerow)
  * nextPageToken `string`: A token to retrieve the next page of results.

### ListCreativeStatusBreakdownByDetailResponse
* ListCreativeStatusBreakdownByDetailResponse `object`: Response message for listing all details associated with a given filtered bid
  * detailType `string` (values: DETAIL_TYPE_UNSPECIFIED, CREATIVE_ATTRIBUTE, VENDOR, SENSITIVE_CATEGORY, PRODUCT_CATEGORY, DISAPPROVAL_REASON): The type of detail that the detail IDs represent.
  * filteredBidDetailRows `array`: List of rows, with counts of bids with a given creative status aggregated
    * items [FilteredBidDetailRow](#filteredbiddetailrow)
  * nextPageToken `string`: A token to retrieve the next page of results.

### ListCreativesResponse
* ListCreativesResponse `object`: A response for listing creatives.
  * creatives `array`: The list of creatives.
    * items [Creative](#creative)
  * nextPageToken `string`: A token to retrieve the next page of results.

### ListDealAssociationsResponse
* ListDealAssociationsResponse `object`: A response for listing creative and deal associations
  * associations `array`: The list of associations.
    * items [CreativeDealAssociation](#creativedealassociation)
  * nextPageToken `string`: A token to retrieve the next page of results.

### ListFilterSetsResponse
* ListFilterSetsResponse `object`: Response message for listing filter sets.
  * filterSets `array`: The filter sets belonging to the buyer.
    * items [FilterSet](#filterset)
  * nextPageToken `string`: A token to retrieve the next page of results.

### ListFilteredBidRequestsResponse
* ListFilteredBidRequestsResponse `object`: Response message for listing all reasons that bid requests were filtered and
  * calloutStatusRows `array`: List of rows, with counts of filtered bid requests aggregated by callout
    * items [CalloutStatusRow](#calloutstatusrow)
  * nextPageToken `string`: A token to retrieve the next page of results.

### ListFilteredBidsResponse
* ListFilteredBidsResponse `object`: Response message for listing all reasons that bids were filtered from the
  * creativeStatusRows `array`: List of rows, with counts of filtered bids aggregated by filtering reason
    * items [CreativeStatusRow](#creativestatusrow)
  * nextPageToken `string`: A token to retrieve the next page of results.

### ListImpressionMetricsResponse
* ListImpressionMetricsResponse `object`: Response message for listing the metrics that are measured in number of
  * impressionMetricsRows `array`: List of rows, each containing a set of impression metrics.
    * items [ImpressionMetricsRow](#impressionmetricsrow)
  * nextPageToken `string`: A token to retrieve the next page of results.

### ListLosingBidsResponse
* ListLosingBidsResponse `object`: Response message for listing all reasons that bids lost in the auction.
  * creativeStatusRows `array`: List of rows, with counts of losing bids aggregated by loss reason (i.e.
    * items [CreativeStatusRow](#creativestatusrow)
  * nextPageToken `string`: A token to retrieve the next page of results.

### ListNonBillableWinningBidsResponse
* ListNonBillableWinningBidsResponse `object`: Response message for listing all reasons for which a buyer was not billed for
  * nextPageToken `string`: A token to retrieve the next page of results.
  * nonBillableWinningBidStatusRows `array`: List of rows, with counts of bids not billed aggregated by reason.
    * items [NonBillableWinningBidStatusRow](#nonbillablewinningbidstatusrow)

### LocationContext
* LocationContext `object`: @OutputOnly The Geo criteria the restriction applies to.
  * geoCriteriaIds `array`: IDs representing the geo location for this context.
    * items `integer`

### MetricValue
* MetricValue `object`: A metric value, with an expected value and a variance; represents a count
  * value `string`: The expected value of the metric.
  * variance `string`: The variance (i.e. square of the standard deviation) of the metric value.

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
* NonBillableWinningBidStatusRow `object`: The number of winning bids with the specified dimension values for which the
  * bidCount [MetricValue](#metricvalue)
  * rowDimensions [RowDimensions](#rowdimensions)
  * status `string` (values: STATUS_UNSPECIFIED, AD_NOT_RENDERED, INVALID_IMPRESSION): The status specifying why the winning bids were not billed.

### PlatformContext
* PlatformContext `object`: @OutputOnly The type of platform the restriction applies to.
  * platforms `array`: The platforms this restriction applies to.
    * items `string` (values: DESKTOP, ANDROID, IOS)

### RealtimeTimeRange
* RealtimeTimeRange `object`: An open-ended realtime time range specified by the start timestamp.
  * startTimestamp `string`: The start timestamp of the real-time RTB metrics aggregation.

### Reason
* Reason `object`: A specific filtering status and how many times it occurred.
  * count `string`: The number of times the creative was filtered for the status. The
  * status `integer`: The filtering status code. Please refer to the

### RelativeDateRange
* RelativeDateRange `object`: A relative date range, specified by an offset and a duration.
  * durationDays `integer`: The number of days in the requested date range. E.g. for a range spanning
  * offsetDays `integer`: The end date of the filter set, specified as the number of days before

### RemoveDealAssociationRequest
* RemoveDealAssociationRequest `object`: A request for removing the association between a deal and a creative.
  * association [CreativeDealAssociation](#creativedealassociation)

### RowDimensions
* RowDimensions `object`: A response may include multiple rows, breaking down along various dimensions.
  * timeInterval [TimeInterval](#timeinterval)

### SecurityContext
* SecurityContext `object`: @OutputOnly A security context.
  * securities `array`: The security types in this context.
    * items `string` (values: INSECURE, SSL)

### ServingContext
* ServingContext `object`: The serving context for this restriction.
  * all `string` (values: SIMPLE_CONTEXT): Matches all contexts.
  * appType [AppContext](#appcontext)
  * auctionType [AuctionContext](#auctioncontext)
  * location [LocationContext](#locationcontext)
  * platform [PlatformContext](#platformcontext)
  * securityType [SecurityContext](#securitycontext)

### ServingRestriction
* ServingRestriction `object`: @OutputOnly A representation of the status of an ad in a
  * contexts `array`: The contexts for the restriction.
    * items [ServingContext](#servingcontext)
  * disapprovalReasons `array`: Any disapprovals bound to this restriction.
    * items [Disapproval](#disapproval)
  * status `string` (values: STATUS_UNSPECIFIED, DISAPPROVAL, PENDING_REVIEW): The status of the creative in this context (for example, it has been

### StopWatchingCreativeRequest
* StopWatchingCreativeRequest `object`: A request for stopping notifications for changes to creative Status.

### TimeInterval
* TimeInterval `object`: An interval of time, with an absolute start and end.
  * endTime `string`: The timestamp marking the end of the range (exclusive) for which data is
  * startTime `string`: The timestamp marking the start of the range (inclusive) for which data is

### VideoContent
* VideoContent `object`: Video content for a creative.
  * videoUrl `string`: The URL to fetch a video ad.

### WatchCreativeRequest
* WatchCreativeRequest `object`: A request for watching changes to creative Status.
  * topic `string`: The Pub/Sub topic to publish notifications to.


