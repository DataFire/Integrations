# @datafire/google_adexchangebuyer2

Client library for Ad Exchange Buyer API II

## Installation and Usage
```bash
npm install --save datafire @datafire/google_adexchangebuyer2
```

```js
let datafire = require('datafire');
let google_adexchangebuyer2 = require('@datafire/google_adexchangebuyer2').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_adexchangebuyer2.accounts.clients.list({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_adexchangebuyer2.oauthRefresh(null, context)
```


### accounts.clients.list
Lists all the clients for the current sponsor buyer.


```js
google_adexchangebuyer2.accounts.clients.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Unique numerical account ID of the sponsor buyer to list the clients for.
* pageToken (string) - A token identifying a page of results the server should return.
* pageSize (integer) - Requested page size. The server may return fewer clients than requested.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.clients.create
Creates a new client buyer.


```js
google_adexchangebuyer2.accounts.clients.create({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Unique numerical account ID for the buyer of which the client buyer
* body (object) - A client resource represents a client buyer&mdash;an agency,
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.clients.get
Gets a client buyer with a given client account ID.


```js
google_adexchangebuyer2.accounts.clients.get({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Numerical account ID of the client's sponsor buyer. (required)
* clientAccountId (string) **required** - Numerical account ID of the client buyer to retrieve. (required)
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.clients.update
Updates an existing client buyer.


```js
google_adexchangebuyer2.accounts.clients.update({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Unique numerical account ID for the buyer of which the client buyer
* clientAccountId (string) **required** - Unique numerical account ID of the client to update. (required)
* body (object) - A client resource represents a client buyer&mdash;an agency,
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.clients.invitations.list
Lists all the client users invitations for a client
with a given account ID.


```js
google_adexchangebuyer2.accounts.clients.invitations.list({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Numerical account ID of the client's sponsor buyer. (required)
* clientAccountId (string) **required** - Numerical account ID of the client buyer to list invitations for.
* pageToken (string) - A token identifying a page of results the server should return.
* pageSize (integer) - Requested page size. Server may return fewer clients than requested.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.clients.invitations.create
Creates and sends out an email invitation to access
an Ad Exchange client buyer account.


```js
google_adexchangebuyer2.accounts.clients.invitations.create({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Numerical account ID of the client's sponsor buyer. (required)
* clientAccountId (string) **required** - Numerical account ID of the client buyer that the user
* body (object) - An invitation for a new client user to get access to the Ad Exchange
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.clients.invitations.get
Retrieves an existing client user invitation.


```js
google_adexchangebuyer2.accounts.clients.invitations.get({
  "accountId": "",
  "clientAccountId": "",
  "invitationId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Numerical account ID of the client's sponsor buyer. (required)
* clientAccountId (string) **required** - Numerical account ID of the client buyer that the user invitation
* invitationId (string) **required** - Numerical identifier of the user invitation to retrieve. (required)
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.clients.users.list
Lists all the known client users for a specified
sponsor buyer account ID.


```js
google_adexchangebuyer2.accounts.clients.users.list({
  "accountId": "",
  "clientAccountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Numerical account ID of the sponsor buyer of the client to list users for.
* clientAccountId (string) **required** - The account ID of the client buyer to list users for. (required)
* pageToken (string) - A token identifying a page of results the server should return.
* pageSize (integer) - Requested page size. The server may return fewer clients than requested.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.clients.users.get
Retrieves an existing client user.


```js
google_adexchangebuyer2.accounts.clients.users.get({
  "accountId": "",
  "clientAccountId": "",
  "userId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Numerical account ID of the client's sponsor buyer. (required)
* clientAccountId (string) **required** - Numerical account ID of the client buyer
* userId (string) **required** - Numerical identifier of the user to retrieve. (required)
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

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

#### Parameters
* accountId (string) **required** - Numerical account ID of the client's sponsor buyer. (required)
* clientAccountId (string) **required** - Numerical account ID of the client buyer that the user to be retrieved
* userId (string) **required** - Numerical identifier of the user to retrieve. (required)
* body (object) - A client user is created under a client buyer and has restricted access to
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.creatives.list
Lists creatives.


```js
google_adexchangebuyer2.accounts.creatives.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account to list the creatives from.
* pageToken (string) - A token identifying a page of results the server should return.
* pageSize (integer) - Requested page size. The server may return fewer creatives than requested
* query (string) - An optional query string to filter creatives. If no filter is specified,
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.creatives.create
Creates a creative.


```js
google_adexchangebuyer2.accounts.creatives.create({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account that this creative belongs to.
* duplicateIdMode (string) - Indicates if multiple creatives can share an ID or not. Default is
* body (object) - A creative and its classification data.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.creatives.get
Gets a creative.


```js
google_adexchangebuyer2.accounts.creatives.get({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account the creative belongs to.
* creativeId (string) **required** - The ID of the creative to retrieve.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.creatives.update
Updates a creative.


```js
google_adexchangebuyer2.accounts.creatives.update({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account that this creative belongs to.
* creativeId (string) **required** - The buyer-defined creative ID of this creative.
* body (object) - A creative and its classification data.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.creatives.dealAssociations.list
List all creative-deal associations.


```js
google_adexchangebuyer2.accounts.creatives.dealAssociations.list({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account to list the associations from.
* creativeId (string) **required** - The creative ID to list the associations from.
* pageToken (string) - A token identifying a page of results the server should return.
* pageSize (integer) - Requested page size. Server may return fewer associations than requested.
* query (string) - An optional query string to filter deal associations. If no filter is
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.creatives.dealAssociations.add
Associate an existing deal with a creative.


```js
google_adexchangebuyer2.accounts.creatives.dealAssociations.add({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account the creative belongs to.
* creativeId (string) **required** - The ID of the creative associated with the deal.
* body (object) - A request for associating a deal and a creative.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.creatives.dealAssociations.remove
Remove the association between a deal and a creative.


```js
google_adexchangebuyer2.accounts.creatives.dealAssociations.remove({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account the creative belongs to.
* creativeId (string) **required** - The ID of the creative associated with the deal.
* body (object) - A request for removing the association between a deal and a creative.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.creatives.stopWatching
Stops watching a creative. Will stop push notifications being sent to the
topics when the creative changes status.


```js
google_adexchangebuyer2.accounts.creatives.stopWatching({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account of the creative to stop notifications for.
* creativeId (string) **required** - The creative ID of the creative to stop notifications for.
* body (object) - A request for stopping notifications for changes to creative Status.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### accounts.creatives.watch
Watches a creative. Will result in push notifications being sent to the
topic when the creative changes status.


```js
google_adexchangebuyer2.accounts.creatives.watch({
  "accountId": "",
  "creativeId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account of the creative to watch.
* creativeId (string) **required** - The creative ID to watch for status changes.
* body (object) - A request for watching changes to creative Status.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

