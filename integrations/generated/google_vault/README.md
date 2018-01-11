# @datafire/google_vault

Client library for Google Vault

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

google_vault.matters.create({}).then(data => {
  console.log(data);
})
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

### matters.list
Lists matters the user has access to.


```js
google_vault.matters.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The number of matters to return in the response.
  * pageToken `string`: The pagination token as returned in the response.
  * state `string` (values: STATE_UNSPECIFIED, OPEN, CLOSED, DELETED): If set, list only matters with that specific state. The default is listing
  * view `string` (values: VIEW_UNSPECIFIED, BASIC, FULL): Specifies which parts of the matter to return in response.
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
* output [ListMattersResponse](#listmattersresponse)

### matters.create
Creates a new matter with the given name and description. The initial state
is open, and the owner is the method caller. Returns the created matter
with default view.


```js
google_vault.matters.create({}, context)
```

#### Input
* input `object`
  * body [Matter](#matter)
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
* output [Matter](#matter)

### matters.delete
Deletes the specified matter. Returns matter with updated state.


```js
google_vault.matters.delete({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID
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
* output [Matter](#matter)

### matters.get
Gets the specified matter.


```js
google_vault.matters.get({
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
* output [Matter](#matter)

### matters.update
Updates the specified matter.
This updates only the name and description of the matter, identified by
matter id. Changes to any other fields are ignored.
Returns the default view of the matter.


```js
google_vault.matters.update({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * body [Matter](#matter)
  * matterId **required** `string`: The matter ID.
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
* output [Matter](#matter)

### matters.holds.list
Lists holds within a matter. An empty page token in ListHoldsResponse
denotes no more holds to list.


```js
google_vault.matters.holds.list({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * matterId **required** `string`: The matter ID.
  * pageSize `integer`: The number of holds to return in the response, between 0 and 100 inclusive.
  * pageToken `string`: The pagination token as returned in the response.
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
* output [ListHoldsResponse](#listholdsresponse)

### matters.holds.create
Creates a hold in the given matter.


```js
google_vault.matters.holds.create({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * body [Hold](#hold)
  * matterId **required** `string`: The matter ID.
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
* output [Hold](#hold)

### matters.holds.delete
Removes a hold by ID. This will release any HeldAccounts on this Hold.


```js
google_vault.matters.holds.delete({
  "holdId": "",
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * holdId **required** `string`: The hold ID.
  * matterId **required** `string`: The matter ID.
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

### matters.holds.get
Gets a hold by ID.


```js
google_vault.matters.holds.get({
  "holdId": "",
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * holdId **required** `string`: The hold ID.
  * matterId **required** `string`: The matter ID.
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
* output [Hold](#hold)

### matters.holds.update
Updates the OU and/or query parameters of a hold. You cannot add accounts
to a hold that covers an OU, nor can you add OUs to a hold that covers
individual accounts. Accounts listed in the hold will be ignored.


```js
google_vault.matters.holds.update({
  "holdId": "",
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * body [Hold](#hold)
  * holdId **required** `string`: The ID of the hold.
  * matterId **required** `string`: The matter ID.
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
* output [Hold](#hold)

### matters.holds.accounts.list
Lists HeldAccounts for a hold. This will only list individually specified
held accounts. If the hold is on an OU, then use
<a href="https://developers.google.com/admin-sdk/">Admin SDK</a>
to enumerate its members.


```js
google_vault.matters.holds.accounts.list({
  "holdId": "",
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * holdId **required** `string`: The hold ID.
  * matterId **required** `string`: The matter ID.
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
* output [ListHeldAccountsResponse](#listheldaccountsresponse)

### matters.holds.accounts.create
Adds a HeldAccount to a hold. Accounts can only be added to a hold that
has no held_org_unit set. Attempting to add an account to an OU-based
hold will result in an error.


```js
google_vault.matters.holds.accounts.create({
  "holdId": "",
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * body [HeldAccount](#heldaccount)
  * holdId **required** `string`: The hold ID.
  * matterId **required** `string`: The matter ID.
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
* output [HeldAccount](#heldaccount)

### matters.holds.accounts.delete
Removes a HeldAccount from a hold. If this request leaves the hold with
no held accounts, the hold will not apply to any accounts.


```js
google_vault.matters.holds.accounts.delete({
  "accountId": "",
  "holdId": "",
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The ID of the account to remove from the hold.
  * holdId **required** `string`: The hold ID.
  * matterId **required** `string`: The matter ID.
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

### matters.addPermissions
Adds an account as a matter collaborator.


```js
google_vault.matters.addPermissions({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * body [AddMatterPermissionsRequest](#addmatterpermissionsrequest)
  * matterId **required** `string`: The matter ID.
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
* output [MatterPermission](#matterpermission)

### matters.close
Closes the specified matter. Returns matter with updated state.


```js
google_vault.matters.close({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * body [CloseMatterRequest](#closematterrequest)
  * matterId **required** `string`: The matter ID.
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
* output [CloseMatterResponse](#closematterresponse)

### matters.removePermissions
Removes an account as a matter collaborator.


```js
google_vault.matters.removePermissions({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * body [RemoveMatterPermissionsRequest](#removematterpermissionsrequest)
  * matterId **required** `string`: The matter ID.
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

### matters.reopen
Reopens the specified matter. Returns matter with updated state.


```js
google_vault.matters.reopen({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * body [ReopenMatterRequest](#reopenmatterrequest)
  * matterId **required** `string`: The matter ID.
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
* output [ReopenMatterResponse](#reopenmatterresponse)

### matters.undelete
Undeletes the specified matter. Returns matter with updated state.


```js
google_vault.matters.undelete({
  "matterId": ""
}, context)
```

#### Input
* input `object`
  * body [UndeleteMatterRequest](#undeletematterrequest)
  * matterId **required** `string`: The matter ID.
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
* output [Matter](#matter)



## Definitions

### AddMatterPermissionsRequest
* AddMatterPermissionsRequest `object`: Add an account with the permission specified. The role cannot be owner.
  * ccMe `boolean`: Only relevant if send_emails is true.
  * matterPermission [MatterPermission](#matterpermission)
  * sendEmails `boolean`: True to send notification email to the added account.

### CloseMatterRequest
* CloseMatterRequest `object`: Close a matter by ID.

### CloseMatterResponse
* CloseMatterResponse `object`: Response to a CloseMatterRequest.
  * matter [Matter](#matter)

### CorpusQuery
* CorpusQuery `object`: Corpus specific queries.
  * driveQuery [HeldDriveQuery](#helddrivequery)
  * groupsQuery [HeldGroupsQuery](#heldgroupsquery)
  * mailQuery [HeldMailQuery](#heldmailquery)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### HeldAccount
* HeldAccount `object`: An account being held in a particular hold. This structure is immutable.
  * accountId `string`: The account's ID as provided by the
  * holdTime `string`: When the account was put on hold.

### HeldDriveQuery
* HeldDriveQuery `object`: Query options for drive holds.
  * includeTeamDriveFiles `boolean`: If true, include files in Team Drives in the hold.

### HeldGroupsQuery
* HeldGroupsQuery `object`: Query options for group holds.
  * endTime `string`: The end date range for the search query. These timestamps are in GMT and
  * startTime `string`: The start date range for the search query. These timestamps are in GMT and
  * terms `string`: The search terms for the hold.

### HeldMailQuery
* HeldMailQuery `object`: Query options for mail holds.
  * endTime `string`: The end date range for the search query. These timestamps are in GMT and
  * startTime `string`: The start date range for the search query. These timestamps are in GMT and
  * terms `string`: The search terms for the hold.

### HeldOrgUnit
* HeldOrgUnit `object`: A organizational unit being held in a particular hold.
  * holdTime `string`: When the org unit was put on hold. This property is immutable.
  * orgUnitId `string`: The org unit's immutable ID as provided by the admin SDK.

### Hold
* Hold `object`: Represents a hold within Vault. A hold restricts purging of
  * accounts `array`: If set, the hold applies to the enumerated accounts and org_unit must be
    * items [HeldAccount](#heldaccount)
  * corpus `string` (values: CORPUS_TYPE_UNSPECIFIED, DRIVE, MAIL, GROUPS): The corpus to be searched.
  * holdId `string`: The unique immutable ID of the hold. Assigned during creation.
  * name `string`: The name of the hold.
  * orgUnit [HeldOrgUnit](#heldorgunit)
  * query [CorpusQuery](#corpusquery)
  * updateTime `string`: The last time this hold was modified.

### ListHeldAccountsResponse
* ListHeldAccountsResponse `object`: Returns a list of held accounts for a hold.
  * accounts `array`: The held accounts on a hold.
    * items [HeldAccount](#heldaccount)

### ListHoldsResponse
* ListHoldsResponse `object`: The holds for a matter.
  * holds `array`: The list of holds.
    * items [Hold](#hold)
  * nextPageToken `string`: Page token to retrieve the next page of results in the list.

### ListMattersResponse
* ListMattersResponse `object`: Provides the list of matters.
  * matters `array`: List of matters.
    * items [Matter](#matter)
  * nextPageToken `string`: Page token to retrieve the next page of results in the list.

### Matter
* Matter `object`: Represents a matter.
  * description `string`: The description of the matter.
  * matterId `string`: The matter ID which is generated by the server.
  * matterPermissions `array`: List of users and access to the matter. Currently there is no programmer
    * items [MatterPermission](#matterpermission)
  * name `string`: The name of the matter.
  * state `string` (values: STATE_UNSPECIFIED, OPEN, CLOSED, DELETED): The state of the matter.

### MatterPermission
* MatterPermission `object`: Currently each matter only has one owner, and all others are collaborators.
  * accountId `string`: The account id, as provided by <a href="https://developers.google.com/admin-sdk/">Admin SDK</a>.
  * role `string` (values: ROLE_UNSPECIFIED, COLLABORATOR, OWNER): The user's role in this matter.

### RemoveMatterPermissionsRequest
* RemoveMatterPermissionsRequest `object`: Remove an account as a matter collaborator.
  * accountId `string`: The account ID.

### ReopenMatterRequest
* ReopenMatterRequest `object`: Reopen a matter by ID.

### ReopenMatterResponse
* ReopenMatterResponse `object`: Response to a ReopenMatterRequest.
  * matter [Matter](#matter)

### UndeleteMatterRequest
* UndeleteMatterRequest `object`: Undelete a matter by ID.


