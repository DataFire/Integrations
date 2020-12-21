# @datafire/google_vault

Client library for G Suite Vault API

## Installation and Usage
```bash
npm install --save @datafire/google_vault
```
```js
let google_vault = require('@datafire/google_vault').create({
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

Archiving and eDiscovery for G Suite.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_vault.oauthCallback({
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
google_vault.oauthRefresh(null, context)
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

### vault.matters.list
Lists matters the user has access to.


```js
google_vault.vault.matters.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The number of matters to return in the response. Default and maximum are 100.
  * pageToken `string`: The pagination token as returned in the response.
  * state `string` (values: STATE_UNSPECIFIED, OPEN, CLOSED, DELETED): If set, list only matters with that specific state. The default is listing matters of all states.
  * view `string` (values: VIEW_UNSPECIFIED, BASIC, FULL): Specifies which parts of the matter to return in response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListMattersResponse](#listmattersresponse)

### vault.matters.create
Creates a new matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.


```js
google_vault.vault.matters.create({}, context)
```

#### Input
* input `object`
  * body [Matter](#matter)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Matter](#matter)

### vault.matters.delete
Deletes the specified matter. Returns matter with updated state.


```js
google_vault.vault.matters.delete({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Matter](#matter)

### vault.matters.get
Gets the specified matter.


```js
google_vault.vault.matters.get({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * view `string` (values: VIEW_UNSPECIFIED, BASIC, FULL): Specifies which parts of the Matter to return in the response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Matter](#matter)

### vault.matters.update
Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.


```js
google_vault.vault.matters.update({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * body [Matter](#matter)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Matter](#matter)

### vault.matters.exports.list
Lists Exports.


```js
google_vault.vault.matters.exports.list({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * pageSize `integer`: The number of exports to return in the response.
  * pageToken `string`: The pagination token as returned in the response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListExportsResponse](#listexportsresponse)

### vault.matters.exports.create
Creates an Export.


```js
google_vault.vault.matters.exports.create({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * body [Export](#export)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Export](#export)

### vault.matters.exports.delete
Deletes an Export.


```js
google_vault.vault.matters.exports.delete({
  "matterId": "",
  "exportId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * exportId **required** `string`: The export ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
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

### vault.matters.exports.get
Gets an Export.


```js
google_vault.vault.matters.exports.get({
  "matterId": "",
  "exportId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * exportId **required** `string`: The export ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Export](#export)

### vault.matters.holds.list
Lists holds within a matter. An empty page token in ListHoldsResponse denotes no more holds to list.


```js
google_vault.vault.matters.holds.list({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * pageSize `integer`: The number of holds to return in the response, between 0 and 100 inclusive. Leaving this empty, or as 0, is the same as page_size = 100.
  * pageToken `string`: The pagination token as returned in the response. An empty token means start from the beginning.
  * view `string` (values: HOLD_VIEW_UNSPECIFIED, BASIC_HOLD, FULL_HOLD): Specifies which parts of the Hold to return.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListHoldsResponse](#listholdsresponse)

### vault.matters.holds.create
Creates a hold in the given matter.


```js
google_vault.vault.matters.holds.create({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * body [Hold](#hold)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Hold](#hold)

### vault.matters.holds.delete
Removes a hold by ID. This will release any HeldAccounts on this Hold.


```js
google_vault.vault.matters.holds.delete({
  "matterId": "",
  "holdId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * holdId **required** `string`: The hold ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
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

### vault.matters.holds.get
Gets a hold by ID.


```js
google_vault.vault.matters.holds.get({
  "matterId": "",
  "holdId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * holdId **required** `string`: The hold ID.
  * view `string` (values: HOLD_VIEW_UNSPECIFIED, BASIC_HOLD, FULL_HOLD): Specifies which parts of the Hold to return.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Hold](#hold)

### vault.matters.holds.update
Updates the OU and/or query parameters of a hold. You cannot add accounts to a hold that covers an OU, nor can you add OUs to a hold that covers individual accounts. Accounts listed in the hold will be ignored.


```js
google_vault.vault.matters.holds.update({
  "matterId": "",
  "holdId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * holdId **required** `string`: The ID of the hold.
  * body [Hold](#hold)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Hold](#hold)

### vault.matters.holds.accounts.list
Lists HeldAccounts for a hold. This will only list individually specified held accounts. If the hold is on an OU, then use Admin SDK to enumerate its members.


```js
google_vault.vault.matters.holds.accounts.list({
  "matterId": "",
  "holdId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * holdId **required** `string`: The hold ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListHeldAccountsResponse](#listheldaccountsresponse)

### vault.matters.holds.accounts.create
Adds a HeldAccount to a hold. Accounts can only be added to a hold that has no held_org_unit set. Attempting to add an account to an OU-based hold will result in an error.


```js
google_vault.vault.matters.holds.accounts.create({
  "matterId": "",
  "holdId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * holdId **required** `string`: The hold ID.
  * body [HeldAccount](#heldaccount)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [HeldAccount](#heldaccount)

### vault.matters.holds.accounts.delete
Removes a HeldAccount from a hold. If this request leaves the hold with no held accounts, the hold will not apply to any accounts.


```js
google_vault.vault.matters.holds.accounts.delete({
  "matterId": "",
  "holdId": "",
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * holdId **required** `string`: The hold ID.
  * accountId **required** `string`: The ID of the account to remove from the hold.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
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

### vault.matters.holds.addHeldAccounts
Adds HeldAccounts to a hold. Returns a list of accounts that have been successfully added. Accounts can only be added to an existing account-based hold.


```js
google_vault.vault.matters.holds.addHeldAccounts({
  "matterId": "",
  "holdId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * holdId **required** `string`: The hold ID.
  * body [AddHeldAccountsRequest](#addheldaccountsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AddHeldAccountsResponse](#addheldaccountsresponse)

### vault.matters.holds.removeHeldAccounts
Removes HeldAccounts from a hold. Returns a list of statuses in the same order as the request. If this request leaves the hold with no held accounts, the hold will not apply to any accounts.


```js
google_vault.vault.matters.holds.removeHeldAccounts({
  "matterId": "",
  "holdId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * holdId **required** `string`: The hold ID.
  * body [RemoveHeldAccountsRequest](#removeheldaccountsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [RemoveHeldAccountsResponse](#removeheldaccountsresponse)

### vault.matters.savedQueries.list
Lists saved queries within a matter. An empty page token in ListSavedQueriesResponse denotes no more saved queries to list.


```js
google_vault.vault.matters.savedQueries.list({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID of the parent matter for which the saved queries are to be retrieved.
  * pageSize `integer`: The maximum number of saved queries to return.
  * pageToken `string`: The pagination token as returned in the previous response. An empty token means start from the beginning.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListSavedQueriesResponse](#listsavedqueriesresponse)

### vault.matters.savedQueries.create
Creates a saved query.


```js
google_vault.vault.matters.savedQueries.create({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID of the parent matter for which the saved query is to be created.
  * body [SavedQuery](#savedquery)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SavedQuery](#savedquery)

### vault.matters.savedQueries.delete
Deletes a saved query by Id.


```js
google_vault.vault.matters.savedQueries.delete({
  "matterId": "",
  "savedQueryId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID of the parent matter for which the saved query is to be deleted.
  * savedQueryId **required** `string`: ID of the saved query to be deleted.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
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

### vault.matters.savedQueries.get
Retrieves a saved query by Id.


```js
google_vault.vault.matters.savedQueries.get({
  "matterId": "",
  "savedQueryId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID of the parent matter for which the saved query is to be retrieved.
  * savedQueryId **required** `string`: ID of the saved query to be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SavedQuery](#savedquery)

### vault.matters.addPermissions
Adds an account as a matter collaborator.


```js
google_vault.vault.matters.addPermissions({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * body [AddMatterPermissionsRequest](#addmatterpermissionsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [MatterPermission](#matterpermission)

### vault.matters.close
Closes the specified matter. Returns matter with updated state.


```js
google_vault.vault.matters.close({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * body [CloseMatterRequest](#closematterrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CloseMatterResponse](#closematterresponse)

### vault.matters.count
Counts the artifacts within the context of a matter and returns a detailed breakdown of metrics.


```js
google_vault.vault.matters.count({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * body [CountArtifactsRequest](#countartifactsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### vault.matters.removePermissions
Removes an account as a matter collaborator.


```js
google_vault.vault.matters.removePermissions({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * body [RemoveMatterPermissionsRequest](#removematterpermissionsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
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

### vault.matters.reopen
Reopens the specified matter. Returns matter with updated state.


```js
google_vault.vault.matters.reopen({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * body [ReopenMatterRequest](#reopenmatterrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ReopenMatterResponse](#reopenmatterresponse)

### vault.matters.undelete
Undeletes the specified matter. Returns matter with updated state.


```js
google_vault.vault.matters.undelete({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * body [UndeleteMatterRequest](#undeletematterrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Matter](#matter)

### vault.operations.delete
Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.


```js
google_vault.vault.operations.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be deleted.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
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

### vault.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_vault.vault.operations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation's parent resource.
  * filter `string`: The standard list filter.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListOperationsResponse](#listoperationsresponse)

### vault.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.


```js
google_vault.vault.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
  * body [CancelOperationRequest](#canceloperationrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
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



## Definitions

### AccountCount
* AccountCount `object`: Count number for each account.
  * account [UserInfo](#userinfo)
  * count `string`: The number of artifacts found for this account.

### AccountCountError
* AccountCountError `object`: An error that occurred when querying a specific account
  * account [UserInfo](#userinfo)
  * errorType `string` (values: ERROR_TYPE_UNSPECIFIED, WILDCARD_TOO_BROAD, TOO_MANY_TERMS, LOCATION_UNAVAILABLE, UNKNOWN, DEADLINE_EXCEEDED): Account query error.

### AccountInfo
* AccountInfo `object`: Accounts to search
  * emails `array`: A set of accounts to search.
    * items `string`

### AddHeldAccountResult
* AddHeldAccountResult `object`: A status detailing the status of each account creation, and the HeldAccount, if successful.
  * account [HeldAccount](#heldaccount)
  * status [Status](#status)

### AddHeldAccountsRequest
* AddHeldAccountsRequest `object`: Add a list of accounts to a hold.
  * accountIds `array`: Account IDs to identify which accounts to add. Only account_ids or only emails should be specified, but not both.
    * items `string`
  * emails `array`: Emails to identify which accounts to add. Only emails or only account_ids should be specified, but not both.
    * items `string`

### AddHeldAccountsResponse
* AddHeldAccountsResponse `object`: Response for batch create held accounts.
  * responses `array`: The list of responses, in the same order as the batch request.
    * items [AddHeldAccountResult](#addheldaccountresult)

### AddMatterPermissionsRequest
* AddMatterPermissionsRequest `object`: Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, it will be overwritten.
  * ccMe `boolean`: Only relevant if send_emails is true. True to CC requestor in the email message. False to not CC requestor.
  * matterPermission [MatterPermission](#matterpermission)
  * sendEmails `boolean`: True to send notification email to the added account. False to not send notification email.

### CancelOperationRequest
* CancelOperationRequest `object`: The request message for Operations.CancelOperation.

### CloseMatterRequest
* CloseMatterRequest `object`: Close a matter by ID.

### CloseMatterResponse
* CloseMatterResponse `object`: Response to a CloseMatterRequest.
  * matter [Matter](#matter)

### CloudStorageFile
* CloudStorageFile `object`: An export file on cloud storage
  * bucketName `string`: The cloud storage bucket name of this export file. Can be used in cloud storage JSON/XML API, but not to list the bucket contents. Instead, you can get individual export files by object name.
  * md5Hash `string`: The md5 hash of the file.
  * objectName `string`: The cloud storage object name of this export file. Can be used in cloud storage JSON/XML API.
  * size `string`: The size of the export file.

### CloudStorageSink
* CloudStorageSink `object`: Export sink for cloud storage files.
  * files `array`: Output only. The exported files on cloud storage.
    * items [CloudStorageFile](#cloudstoragefile)

### CorpusQuery
* CorpusQuery `object`: Corpus specific queries.
  * driveQuery [HeldDriveQuery](#helddrivequery)
  * groupsQuery [HeldGroupsQuery](#heldgroupsquery)
  * hangoutsChatQuery [HeldHangoutsChatQuery](#heldhangoutschatquery)
  * mailQuery [HeldMailQuery](#heldmailquery)
  * voiceQuery [HeldVoiceQuery](#heldvoicequery)

### CountArtifactsMetadata
* CountArtifactsMetadata `object`: Long running operation metadata for CountArtifacts.
  * endTime `string`: End time of count operation. Available when operation is done.
  * matterId `string`: The matter ID of the associated matter.
  * query [Query](#query)
  * startTime `string`: Creation time of count operation.

### CountArtifactsRequest
* CountArtifactsRequest `object`: Count artifacts request.
  * query [Query](#query)
  * view `string` (values: COUNT_RESULT_VIEW_UNSPECIFIED, TOTAL_COUNT, ALL): Specifies the granularity of the count result returned in response.

### CountArtifactsResponse
* CountArtifactsResponse `object`: Definition of the response for method CountArtifacts.
  * groupsCountResult [GroupsCountResult](#groupscountresult)
  * mailCountResult [MailCountResult](#mailcountresult)
  * totalCount `string`: Total count of artifacts. For mail and groups, artifacts refers to messages.

### DriveExportOptions
* DriveExportOptions `object`: The options for Drive export.
  * includeAccessInfo `boolean`: Set to true to include access level information for users with indirect access to files.

### DriveOptions
* DriveOptions `object`: Drive search advanced options
  * includeSharedDrives `boolean`: Set to true to include shared drive.
  * includeTeamDrives `boolean`: Set to true to include Team Drive.
  * versionDate `string`: Search the versions of the Drive file as of the reference date. These timestamps are in GMT and rounded down to the given date.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### Export
* Export `object`: An export
  * cloudStorageSink [CloudStorageSink](#cloudstoragesink)
  * createTime `string`: Output only. The time when the export was created.
  * exportOptions [ExportOptions](#exportoptions)
  * id `string`: Output only. The generated export ID.
  * matterId `string`: Output only. The matter ID.
  * name `string`: The export name.
  * query [Query](#query)
  * requester [UserInfo](#userinfo)
  * stats [ExportStats](#exportstats)
  * status `string` (values: EXPORT_STATUS_UNSPECIFIED, COMPLETED, FAILED, IN_PROGRESS): Output only. The export status.

### ExportOptions
* ExportOptions `object`: Export advanced options
  * driveOptions [DriveExportOptions](#driveexportoptions)
  * groupsOptions [GroupsExportOptions](#groupsexportoptions)
  * hangoutsChatOptions [HangoutsChatExportOptions](#hangoutschatexportoptions)
  * mailOptions [MailExportOptions](#mailexportoptions)
  * region `string` (values: EXPORT_REGION_UNSPECIFIED, ANY, US, EUROPE): The requested export location.
  * voiceOptions [VoiceExportOptions](#voiceexportoptions)

### ExportStats
* ExportStats `object`: Stats of an export.
  * exportedArtifactCount `string`: The number of documents already processed by the export.
  * sizeInBytes `string`: The size of export in bytes.
  * totalArtifactCount `string`: The number of documents to be exported.

### GroupsCountResult
* GroupsCountResult `object`: Groups specific count metrics.
  * accountCountErrors `array`: Error occurred when querying these accounts.
    * items [AccountCountError](#accountcounterror)
  * accountCounts `array`: Subtotal count per matching account that have more than zero messages.
    * items [AccountCount](#accountcount)
  * matchingAccountsCount `string`: Total number of accounts that can be queried and have more than zero messages.
  * nonQueryableAccounts `array`: When data scope is HELD_DATA in the request Query, these accounts in the request are not queried because they are not on hold. For other data scope, this field is not set.
    * items `string`
  * queriedAccountsCount `string`: Total number of accounts involved in this count operation.

### GroupsExportOptions
* GroupsExportOptions `object`: The options for groups export.
  * exportFormat `string` (values: EXPORT_FORMAT_UNSPECIFIED, MBOX, PST): The export format for groups export.

### HangoutsChatExportOptions
* HangoutsChatExportOptions `object`: The options for hangouts chat export.
  * exportFormat `string` (values: EXPORT_FORMAT_UNSPECIFIED, MBOX, PST): The export format for hangouts chat export.

### HangoutsChatInfo
* HangoutsChatInfo `object`: Accounts to search
  * roomId `array`: A set of rooms to search.
    * items `string`

### HangoutsChatOptions
* HangoutsChatOptions `object`: Hangouts chat search advanced options
  * includeRooms `boolean`: Set to true to include rooms.

### HeldAccount
* HeldAccount `object`: An account being held in a particular hold. This structure is immutable. This can be either a single user or a google group, depending on the corpus.
  * accountId `string`: The account's ID as provided by the Admin SDK.
  * email `string`: The primary email address of the account. If used as an input, this takes precedence over account ID.
  * firstName `string`: Output only. The first name of the account holder.
  * holdTime `string`: Output only. When the account was put on hold.
  * lastName `string`: Output only. The last name of the account holder.

### HeldDriveQuery
* HeldDriveQuery `object`: Query options for Drive holds.
  * includeSharedDriveFiles `boolean`: If true, include files in shared drives in the hold.
  * includeTeamDriveFiles `boolean`: If true, include files in Team Drives in the hold.

### HeldGroupsQuery
* HeldGroupsQuery `object`: Query options for group holds.
  * endTime `string`: The end time range for the search query. These timestamps are in GMT and rounded down to the start of the given date.
  * startTime `string`: The start time range for the search query. These timestamps are in GMT and rounded down to the start of the given date.
  * terms `string`: The search terms for the hold.

### HeldHangoutsChatQuery
* HeldHangoutsChatQuery `object`: Query options for hangouts chat holds.
  * includeRooms `boolean`: If true, include rooms the user has participated in.

### HeldMailQuery
* HeldMailQuery `object`: Query options for mail holds.
  * endTime `string`: The end time range for the search query. These timestamps are in GMT and rounded down to the start of the given date.
  * startTime `string`: The start time range for the search query. These timestamps are in GMT and rounded down to the start of the given date.
  * terms `string`: The search terms for the hold.

### HeldOrgUnit
* HeldOrgUnit `object`: A organizational unit being held in a particular hold. This structure is immutable.
  * holdTime `string`: When the org unit was put on hold. This property is immutable.
  * orgUnitId `string`: The org unit's immutable ID as provided by the Admin SDK.

### HeldVoiceQuery
* HeldVoiceQuery `object`: Query options for Voice holds.
  * coveredData `array`: Data covered by this rule. Should be non-empty. Order does not matter and duplicates will be ignored.
    * items `string` (values: COVERED_DATA_UNSPECIFIED, TEXT_MESSAGES, VOICEMAILS, CALL_LOGS)

### Hold
* Hold `object`: Represents a hold within Vault. A hold restricts purging of artifacts based on the combination of the query and accounts restrictions. A hold can be configured to either apply to an explicitly configured set of accounts, or can be applied to all members of an organizational unit.
  * accounts `array`: If set, the hold applies to the enumerated accounts and org_unit must be empty.
    * items [HeldAccount](#heldaccount)
  * corpus `string` (values: CORPUS_TYPE_UNSPECIFIED, DRIVE, MAIL, GROUPS, HANGOUTS_CHAT, VOICE): The corpus to be searched.
  * holdId `string`: The unique immutable ID of the hold. Assigned during creation.
  * name `string`: The name of the hold.
  * orgUnit [HeldOrgUnit](#heldorgunit)
  * query [CorpusQuery](#corpusquery)
  * updateTime `string`: The last time this hold was modified.

### ListExportsResponse
* ListExportsResponse `object`: The holds for a matter.
  * exports `array`: The list of exports.
    * items [Export](#export)
  * nextPageToken `string`: Page token to retrieve the next page of results in the list.

### ListHeldAccountsResponse
* ListHeldAccountsResponse `object`: Returns a list of held accounts for a hold.
  * accounts `array`: The held accounts on a hold.
    * items [HeldAccount](#heldaccount)

### ListHoldsResponse
* ListHoldsResponse `object`: The holds for a matter.
  * holds `array`: The list of holds.
    * items [Hold](#hold)
  * nextPageToken `string`: Page token to retrieve the next page of results in the list. If this is empty, then there are no more holds to list.

### ListMattersResponse
* ListMattersResponse `object`: Provides the list of matters.
  * matters `array`: List of matters.
    * items [Matter](#matter)
  * nextPageToken `string`: Page token to retrieve the next page of results in the list.

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### ListSavedQueriesResponse
* ListSavedQueriesResponse `object`: Definition of the response for method ListSaveQuery.
  * nextPageToken `string`: Page token to retrieve the next page of results in the list. If this is empty, then there are no more saved queries to list.
  * savedQueries `array`: List of output saved queries.
    * items [SavedQuery](#savedquery)

### MailCountResult
* MailCountResult `object`: Mail specific count metrics.
  * accountCountErrors `array`: Error occurred when querying these accounts.
    * items [AccountCountError](#accountcounterror)
  * accountCounts `array`: Subtotal count per matching account that have more than zero messages.
    * items [AccountCount](#accountcount)
  * matchingAccountsCount `string`: Total number of accounts that can be queried and have more than zero messages.
  * nonQueryableAccounts `array`: When data scope is HELD_DATA in the request Query, these accounts in the request are not queried because they are not on hold. For other data scope, this field is not set.
    * items `string`
  * queriedAccountsCount `string`: Total number of accounts involved in this count operation.

### MailExportOptions
* MailExportOptions `object`: The options for mail export.
  * exportFormat `string` (values: EXPORT_FORMAT_UNSPECIFIED, MBOX, PST): The export file format.
  * showConfidentialModeContent `boolean`: Set to true to export confidential mode content.

### MailOptions
* MailOptions `object`: Mail search advanced options
  * excludeDrafts `boolean`: Set to true to exclude drafts.

### Matter
* Matter `object`: Represents a matter.
  * description `string`: The description of the matter.
  * matterId `string`: The matter ID which is generated by the server. Should be blank when creating a new matter.
  * matterPermissions `array`: List of users and access to the matter. Currently there is no programmer defined limit on the number of permissions a matter can have.
    * items [MatterPermission](#matterpermission)
  * name `string`: The name of the matter.
  * state `string` (values: STATE_UNSPECIFIED, OPEN, CLOSED, DELETED): The state of the matter.

### MatterPermission
* MatterPermission `object`: Currently each matter only has one owner, and all others are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist.
  * accountId `string`: The account ID, as provided by Admin SDK.
  * role `string` (values: ROLE_UNSPECIFIED, COLLABORATOR, OWNER): The user's role in this matter.

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### OrgUnitInfo
* OrgUnitInfo `object`: Org Unit to search
  * orgUnitId `string`: Org unit to search, as provided by the Admin SDK Directory API.

### Query
* Query `object`: A query definition relevant for search & export.
  * accountInfo [AccountInfo](#accountinfo)
  * corpus `string` (values: CORPUS_TYPE_UNSPECIFIED, DRIVE, MAIL, GROUPS, HANGOUTS_CHAT, VOICE): The corpus to search.
  * dataScope `string` (values: DATA_SCOPE_UNSPECIFIED, ALL_DATA, HELD_DATA, UNPROCESSED_DATA): The data source to search from.
  * driveOptions [DriveOptions](#driveoptions)
  * endTime `string`: The end time range for the search query. These timestamps are in GMT and rounded down to the start of the given date.
  * hangoutsChatInfo [HangoutsChatInfo](#hangoutschatinfo)
  * hangoutsChatOptions [HangoutsChatOptions](#hangoutschatoptions)
  * mailOptions [MailOptions](#mailoptions)
  * method `string` (values: SEARCH_METHOD_UNSPECIFIED, ACCOUNT, ORG_UNIT, TEAM_DRIVE, ENTIRE_ORG, ROOM, SHARED_DRIVE): The search method to use. This field is similar to the search_method field but is introduced to support shared drives. It supports all search method types. In case the search_method is TEAM_DRIVE the response of this field will be SHARED_DRIVE only.
  * orgUnitInfo [OrgUnitInfo](#orgunitinfo)
  * searchMethod `string` (values: SEARCH_METHOD_UNSPECIFIED, ACCOUNT, ORG_UNIT, TEAM_DRIVE, ENTIRE_ORG, ROOM, SHARED_DRIVE): The search method to use.
  * sharedDriveInfo [SharedDriveInfo](#shareddriveinfo)
  * startTime `string`: The start time range for the search query. These timestamps are in GMT and rounded down to the start of the given date.
  * teamDriveInfo [TeamDriveInfo](#teamdriveinfo)
  * terms `string`: The corpus-specific search operators used to generate search results.
  * timeZone `string`: The time zone name. It should be an IANA TZ name, such as "America/Los_Angeles". For more information, see Time Zone.
  * voiceOptions [VoiceOptions](#voiceoptions)

### RemoveHeldAccountsRequest
* RemoveHeldAccountsRequest `object`: Remove a list of accounts from a hold.
  * accountIds `array`: Account IDs to identify HeldAccounts to remove.
    * items `string`

### RemoveHeldAccountsResponse
* RemoveHeldAccountsResponse `object`: Response for batch delete held accounts.
  * statuses `array`: A list of statuses for deleted accounts. Results have the same order as the request.
    * items [Status](#status)

### RemoveMatterPermissionsRequest
* RemoveMatterPermissionsRequest `object`: Remove an account as a matter collaborator.
  * accountId `string`: The account ID.

### ReopenMatterRequest
* ReopenMatterRequest `object`: Reopen a matter by ID.

### ReopenMatterResponse
* ReopenMatterResponse `object`: Response to a ReopenMatterRequest.
  * matter [Matter](#matter)

### SavedQuery
* SavedQuery `object`: Definition of the saved query.
  * createTime `string`: Output only. The server generated timestamp at which saved query was created.
  * displayName `string`: Name of the saved query.
  * matterId `string`: Output only. The matter ID of the associated matter. The server does not look at this field during create and always uses matter id in the URL.
  * query [Query](#query)
  * savedQueryId `string`: A unique identifier for the saved query.

### SharedDriveInfo
* SharedDriveInfo `object`: Shared drives to search
  * sharedDriveIds `array`: List of Shared drive IDs, as provided by Drive API.
    * items `string`

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### TeamDriveInfo
* TeamDriveInfo `object`: Team Drives to search
  * teamDriveIds `array`: List of Team Drive IDs, as provided by Drive API.
    * items `string`

### UndeleteMatterRequest
* UndeleteMatterRequest `object`: Undelete a matter by ID.

### UserInfo
* UserInfo `object`: User's information.
  * displayName `string`: The displayed name of the user.
  * email `string`: The email address of the user.

### VoiceExportOptions
* VoiceExportOptions `object`: The options for voice export.
  * exportFormat `string` (values: EXPORT_FORMAT_UNSPECIFIED, MBOX, PST): The export format for voice export.

### VoiceOptions
* VoiceOptions `object`: Voice search options
  * coveredData `array`: Datatypes to search
    * items `string` (values: COVERED_DATA_UNSPECIFIED, TEXT_MESSAGES, VOICEMAILS, CALL_LOGS)


