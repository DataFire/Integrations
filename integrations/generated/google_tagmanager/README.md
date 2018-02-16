# @datafire/google_tagmanager

Client library for Tag Manager

## Installation and Usage
```bash
npm install --save @datafire/google_tagmanager
```
```js
let google_tagmanager = require('@datafire/google_tagmanager').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_tagmanager.accounts.list({}).then(data => {
  console.log(data);
});
```

## Description

Accesses Tag Manager accounts and containers.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_tagmanager.oauthCallback({
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
google_tagmanager.oauthRefresh(null, context)
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

### accounts.list
Lists all GTM Accounts that a user has access to.


```js
google_tagmanager.accounts.list({}, context)
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
* output [ListAccountsResponse](#listaccountsresponse)

### accounts.get
Gets a GTM Account.


```js
google_tagmanager.accounts.get({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
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
Updates a GTM Account.


```js
google_tagmanager.accounts.update({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Account](#account)
  * fingerprint `string`: When provided, this fingerprint must match the fingerprint of the account in storage.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Account](#account)

### accounts.containers.list
Lists all Containers that belongs to a GTM Account.


```js
google_tagmanager.accounts.containers.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListContainersResponse](#listcontainersresponse)

### accounts.containers.create
Creates a Container.


```js
google_tagmanager.accounts.containers.create({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Container](#container)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Container](#container)

### accounts.containers.delete
Deletes a Container.


```js
google_tagmanager.accounts.containers.delete({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### accounts.containers.get
Gets a Container.


```js
google_tagmanager.accounts.containers.get({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Container](#container)

### accounts.containers.update
Updates a Container.


```js
google_tagmanager.accounts.containers.update({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Container](#container)
  * containerId **required** `string`: The GTM Container ID.
  * fingerprint `string`: When provided, this fingerprint must match the fingerprint of the container in storage.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Container](#container)

### accounts.containers.environments.list
Lists all GTM Environments of a GTM Container.


```js
google_tagmanager.accounts.containers.environments.list({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListEnvironmentsResponse](#listenvironmentsresponse)

### accounts.containers.environments.create
Creates a GTM Environment.


```js
google_tagmanager.accounts.containers.environments.create({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Environment](#environment)
  * containerId **required** `string`: The GTM Container ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Environment](#environment)

### accounts.containers.environments.delete
Deletes a GTM Environment.


```js
google_tagmanager.accounts.containers.environments.delete({
  "accountId": "",
  "containerId": "",
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * environmentId **required** `string`: The GTM Environment ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### accounts.containers.environments.get
Gets a GTM Environment.


```js
google_tagmanager.accounts.containers.environments.get({
  "accountId": "",
  "containerId": "",
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * environmentId **required** `string`: The GTM Environment ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Environment](#environment)

### accounts.containers.environments.patch
Updates a GTM Environment. This method supports patch semantics.


```js
google_tagmanager.accounts.containers.environments.patch({
  "accountId": "",
  "containerId": "",
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Environment](#environment)
  * containerId **required** `string`: The GTM Container ID.
  * environmentId **required** `string`: The GTM Environment ID.
  * fingerprint `string`: When provided, this fingerprint must match the fingerprint of the environment in storage.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Environment](#environment)

### accounts.containers.environments.update
Updates a GTM Environment.


```js
google_tagmanager.accounts.containers.environments.update({
  "accountId": "",
  "containerId": "",
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Environment](#environment)
  * containerId **required** `string`: The GTM Container ID.
  * environmentId **required** `string`: The GTM Environment ID.
  * fingerprint `string`: When provided, this fingerprint must match the fingerprint of the environment in storage.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Environment](#environment)

### accounts.containers.folders.list
Lists all GTM Folders of a Container.


```js
google_tagmanager.accounts.containers.folders.list({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListFoldersResponse](#listfoldersresponse)

### accounts.containers.folders.create
Creates a GTM Folder.


```js
google_tagmanager.accounts.containers.folders.create({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Folder](#folder)
  * containerId **required** `string`: The GTM Container ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Folder](#folder)

### accounts.containers.folders.delete
Deletes a GTM Folder.


```js
google_tagmanager.accounts.containers.folders.delete({
  "accountId": "",
  "containerId": "",
  "folderId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * folderId **required** `string`: The GTM Folder ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### accounts.containers.folders.get
Gets a GTM Folder.


```js
google_tagmanager.accounts.containers.folders.get({
  "accountId": "",
  "containerId": "",
  "folderId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * folderId **required** `string`: The GTM Folder ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Folder](#folder)

### accounts.containers.folders.update
Updates a GTM Folder.


```js
google_tagmanager.accounts.containers.folders.update({
  "accountId": "",
  "containerId": "",
  "folderId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Folder](#folder)
  * containerId **required** `string`: The GTM Container ID.
  * fingerprint `string`: When provided, this fingerprint must match the fingerprint of the folder in storage.
  * folderId **required** `string`: The GTM Folder ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Folder](#folder)

### accounts.containers.folders.entities.list
List all entities in a GTM Folder.


```js
google_tagmanager.accounts.containers.folders.entities.list({
  "accountId": "",
  "containerId": "",
  "folderId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * folderId **required** `string`: The GTM Folder ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [FolderEntities](#folderentities)

### accounts.containers.move_folders.update
Moves entities to a GTM Folder.


```js
google_tagmanager.accounts.containers.move_folders.update({
  "accountId": "",
  "containerId": "",
  "folderId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Folder](#folder)
  * containerId **required** `string`: The GTM Container ID.
  * folderId **required** `string`: The GTM Folder ID.
  * tagId `array`: The tags to be moved to the folder.
  * triggerId `array`: The triggers to be moved to the folder.
  * variableId `array`: The variables to be moved to the folder.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### accounts.containers.reauthorize_environments.update
Re-generates the authorization code for a GTM Environment.


```js
google_tagmanager.accounts.containers.reauthorize_environments.update({
  "accountId": "",
  "containerId": "",
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Environment](#environment)
  * containerId **required** `string`: The GTM Container ID.
  * environmentId **required** `string`: The GTM Environment ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Environment](#environment)

### accounts.containers.tags.list
Lists all GTM Tags of a Container.


```js
google_tagmanager.accounts.containers.tags.list({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListTagsResponse](#listtagsresponse)

### accounts.containers.tags.create
Creates a GTM Tag.


```js
google_tagmanager.accounts.containers.tags.create({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Tag](#tag)
  * containerId **required** `string`: The GTM Container ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Tag](#tag)

### accounts.containers.tags.delete
Deletes a GTM Tag.


```js
google_tagmanager.accounts.containers.tags.delete({
  "accountId": "",
  "containerId": "",
  "tagId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * tagId **required** `string`: The GTM Tag ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### accounts.containers.tags.get
Gets a GTM Tag.


```js
google_tagmanager.accounts.containers.tags.get({
  "accountId": "",
  "containerId": "",
  "tagId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * tagId **required** `string`: The GTM Tag ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Tag](#tag)

### accounts.containers.tags.update
Updates a GTM Tag.


```js
google_tagmanager.accounts.containers.tags.update({
  "accountId": "",
  "containerId": "",
  "tagId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Tag](#tag)
  * containerId **required** `string`: The GTM Container ID.
  * fingerprint `string`: When provided, this fingerprint must match the fingerprint of the tag in storage.
  * tagId **required** `string`: The GTM Tag ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Tag](#tag)

### accounts.containers.triggers.list
Lists all GTM Triggers of a Container.


```js
google_tagmanager.accounts.containers.triggers.list({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListTriggersResponse](#listtriggersresponse)

### accounts.containers.triggers.create
Creates a GTM Trigger.


```js
google_tagmanager.accounts.containers.triggers.create({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Trigger](#trigger)
  * containerId **required** `string`: The GTM Container ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Trigger](#trigger)

### accounts.containers.triggers.delete
Deletes a GTM Trigger.


```js
google_tagmanager.accounts.containers.triggers.delete({
  "accountId": "",
  "containerId": "",
  "triggerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * triggerId **required** `string`: The GTM Trigger ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### accounts.containers.triggers.get
Gets a GTM Trigger.


```js
google_tagmanager.accounts.containers.triggers.get({
  "accountId": "",
  "containerId": "",
  "triggerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * triggerId **required** `string`: The GTM Trigger ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Trigger](#trigger)

### accounts.containers.triggers.update
Updates a GTM Trigger.


```js
google_tagmanager.accounts.containers.triggers.update({
  "accountId": "",
  "containerId": "",
  "triggerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Trigger](#trigger)
  * containerId **required** `string`: The GTM Container ID.
  * fingerprint `string`: When provided, this fingerprint must match the fingerprint of the trigger in storage.
  * triggerId **required** `string`: The GTM Trigger ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Trigger](#trigger)

### accounts.containers.variables.list
Lists all GTM Variables of a Container.


```js
google_tagmanager.accounts.containers.variables.list({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListVariablesResponse](#listvariablesresponse)

### accounts.containers.variables.create
Creates a GTM Variable.


```js
google_tagmanager.accounts.containers.variables.create({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Variable](#variable)
  * containerId **required** `string`: The GTM Container ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Variable](#variable)

### accounts.containers.variables.delete
Deletes a GTM Variable.


```js
google_tagmanager.accounts.containers.variables.delete({
  "accountId": "",
  "containerId": "",
  "variableId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * variableId **required** `string`: The GTM Variable ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### accounts.containers.variables.get
Gets a GTM Variable.


```js
google_tagmanager.accounts.containers.variables.get({
  "accountId": "",
  "containerId": "",
  "variableId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * variableId **required** `string`: The GTM Variable ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Variable](#variable)

### accounts.containers.variables.update
Updates a GTM Variable.


```js
google_tagmanager.accounts.containers.variables.update({
  "accountId": "",
  "containerId": "",
  "variableId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [Variable](#variable)
  * containerId **required** `string`: The GTM Container ID.
  * fingerprint `string`: When provided, this fingerprint must match the fingerprint of the variable in storage.
  * variableId **required** `string`: The GTM Variable ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Variable](#variable)

### accounts.containers.versions.list
Lists all Container Versions of a GTM Container.


```js
google_tagmanager.accounts.containers.versions.list({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * headers `boolean`: Retrieve headers only when true.
  * includeDeleted `boolean`: Also retrieve deleted (archived) versions when true.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListContainerVersionsResponse](#listcontainerversionsresponse)

### accounts.containers.versions.create
Creates a Container Version.


```js
google_tagmanager.accounts.containers.versions.create({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [CreateContainerVersionRequestVersionOptions](#createcontainerversionrequestversionoptions)
  * containerId **required** `string`: The GTM Container ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CreateContainerVersionResponse](#createcontainerversionresponse)

### accounts.containers.versions.delete
Deletes a Container Version.


```js
google_tagmanager.accounts.containers.versions.delete({
  "accountId": "",
  "containerId": "",
  "containerVersionId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * containerVersionId **required** `string`: The GTM Container Version ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### accounts.containers.versions.get
Gets a Container Version.


```js
google_tagmanager.accounts.containers.versions.get({
  "accountId": "",
  "containerId": "",
  "containerVersionId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * containerVersionId **required** `string`: The GTM Container Version ID. Specify published to retrieve the currently published version.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ContainerVersion](#containerversion)

### accounts.containers.versions.update
Updates a Container Version.


```js
google_tagmanager.accounts.containers.versions.update({
  "accountId": "",
  "containerId": "",
  "containerVersionId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [ContainerVersion](#containerversion)
  * containerId **required** `string`: The GTM Container ID.
  * containerVersionId **required** `string`: The GTM Container Version ID.
  * fingerprint `string`: When provided, this fingerprint must match the fingerprint of the container version in storage.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ContainerVersion](#containerversion)

### accounts.containers.versions.publish
Publishes a Container Version.


```js
google_tagmanager.accounts.containers.versions.publish({
  "accountId": "",
  "containerId": "",
  "containerVersionId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * containerVersionId **required** `string`: The GTM Container Version ID.
  * fingerprint `string`: When provided, this fingerprint must match the fingerprint of the container version in storage.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PublishContainerVersionResponse](#publishcontainerversionresponse)

### accounts.containers.versions.restore
Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).


```js
google_tagmanager.accounts.containers.versions.restore({
  "accountId": "",
  "containerId": "",
  "containerVersionId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * containerVersionId **required** `string`: The GTM Container Version ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ContainerVersion](#containerversion)

### accounts.containers.versions.undelete
Undeletes a Container Version.


```js
google_tagmanager.accounts.containers.versions.undelete({
  "accountId": "",
  "containerId": "",
  "containerVersionId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * containerId **required** `string`: The GTM Container ID.
  * containerVersionId **required** `string`: The GTM Container Version ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ContainerVersion](#containerversion)

### accounts.permissions.list
List all users that have access to the account along with Account and Container Permissions granted to each of them.


```js
google_tagmanager.accounts.permissions.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID. @required tagmanager.accounts.permissions.list
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListAccountUsersResponse](#listaccountusersresponse)

### accounts.permissions.create
Creates a user's Account & Container Permissions.


```js
google_tagmanager.accounts.permissions.create({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [UserAccess](#useraccess)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UserAccess](#useraccess)

### accounts.permissions.delete
Removes a user from the account, revoking access to it and all of its containers.


```js
google_tagmanager.accounts.permissions.delete({
  "accountId": "",
  "permissionId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * permissionId **required** `string`: The GTM User ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### accounts.permissions.get
Gets a user's Account & Container Permissions.


```js
google_tagmanager.accounts.permissions.get({
  "accountId": "",
  "permissionId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * permissionId **required** `string`: The GTM User ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UserAccess](#useraccess)

### accounts.permissions.update
Updates a user's Account & Container Permissions.


```js
google_tagmanager.accounts.permissions.update({
  "accountId": "",
  "permissionId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The GTM Account ID.
  * body [UserAccess](#useraccess)
  * permissionId **required** `string`: The GTM User ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UserAccess](#useraccess)



## Definitions

### Account
* Account `object`: Represents a Google Tag Manager Account.
  * accountId `string`: The Account ID uniquely identifies the GTM Account.
  * fingerprint `string`: The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified.
  * name `string`: Account display name.
  * shareData `boolean`: Whether the account shares data anonymously with Google and others.

### AccountAccess
* AccountAccess `object`: Defines the Google Tag Manager Account access permissions.
  * permission `array`: List of Account permissions. Valid account permissions are read and manage.
    * items `string` (values: delete, edit, editWorkspace, manage, publish, read)

### Condition
* Condition `object`: Represents a predicate.
  * parameter `array`: A list of named parameters (key/value), depending on the condition's type. Notes: 
    * items [Parameter](#parameter)
  * type `string` (values: contains, cssSelector, endsWith, equals, greater, greaterOrEquals, less, lessOrEquals, matchRegex, startsWith, urlMatches): The type of operator for this condition.

### Container
* Container `object`: Represents a Google Tag Manager Container.
  * accountId `string`: GTM Account ID.
  * containerId `string`: The Container ID uniquely identifies the GTM Container.
  * domainName `array`: Optional list of domain names associated with the Container.
    * items `string`
  * enabledBuiltInVariable `array`: List of enabled built-in variables. Valid values include: pageUrl, pageHostname, pagePath, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, newHistoryFragment, oldHistoryFragment, newHistoryState, oldHistoryState, historySource, containerVersion, debugMode, randomNumber, containerId.
    * items `string` (values: advertiserId, advertisingTrackingEnabled, ampBrowserLanguage, ampCanonicalHost, ampCanonicalPath, ampCanonicalUrl, ampClientId, ampClientMaxScrollX, ampClientMaxScrollY, ampClientScreenHeight, ampClientScreenWidth, ampClientScrollX, ampClientScrollY, ampClientTimestamp, ampClientTimezone, ampGtmEvent, ampPageDownloadTime, ampPageLoadTime, ampPageViewId, ampReferrer, ampTitle, ampTotalEngagedTime, appId, appName, appVersionCode, appVersionName, clickClasses, clickElement, clickId, clickTarget, clickText, clickUrl, containerId, containerVersion, debugMode, deviceName, elementVisibilityFirstTime, elementVisibilityRatio, elementVisibilityRecentTime, elementVisibilityTime, environmentName, errorLine, errorMessage, errorUrl, event, eventName, firebaseEventParameterCampaign, firebaseEventParameterCampaignAclid, firebaseEventParameterCampaignAnid, firebaseEventParameterCampaignClickTimestamp, firebaseEventParameterCampaignContent, firebaseEventParameterCampaignCp1, firebaseEventParameterCampaignGclid, firebaseEventParameterCampaignSource, firebaseEventParameterCampaignTerm, firebaseEventParameterCurrency, firebaseEventParameterDynamicLinkAcceptTime, firebaseEventParameterDynamicLinkLinkid, firebaseEventParameterNotificationMessageDeviceTime, firebaseEventParameterNotificationMessageId, firebaseEventParameterNotificationMessageName, firebaseEventParameterNotificationMessageTime, firebaseEventParameterNotificationTopic, firebaseEventParameterPreviousAppVersion, firebaseEventParameterPreviousOsVersion, firebaseEventParameterPrice, firebaseEventParameterProductId, firebaseEventParameterQuantity, firebaseEventParameterValue, formClasses, formElement, formId, formTarget, formText, formUrl, historySource, htmlId, language, newHistoryFragment, newHistoryState, oldHistoryFragment, oldHistoryState, osVersion, pageHostname, pagePath, pageUrl, platform, randomNumber, referrer, resolution, scrollDepthDirection, scrollDepthThreshold, scrollDepthUnits, sdkVersion, videoCurrentTime, videoDuration, videoPercent, videoProvider, videoStatus, videoTitle, videoUrl, videoVisible)
  * fingerprint `string`: The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified.
  * name `string`: Container display name.
  * notes `string`: Container Notes.
  * publicId `string`: Container Public ID.
  * timeZoneCountryId `string`: Container Country ID.
  * timeZoneId `string`: Container Time Zone ID.
  * usageContext `array`: List of Usage Contexts for the Container. Valid values include: web, android, ios.
    * items `string` (values: amp, android, androidSdk5, ios, iosSdk5, web)

### ContainerAccess
* ContainerAccess `object`: Defines the Google Tag Manager Container access permissions.
  * containerId `string`: GTM Container ID.
  * permission `array`: List of Container permissions. Valid container permissions are: read, edit, delete, publish.
    * items `string` (values: delete, edit, editWorkspace, manage, publish, read)

### ContainerVersion
* ContainerVersion `object`: Represents a Google Tag Manager Container Version.
  * accountId `string`: GTM Account ID.
  * container [Container](#container)
  * containerId `string`: GTM Container ID.
  * containerVersionId `string`: The Container Version ID uniquely identifies the GTM Container Version.
  * deleted `boolean`: A value of true indicates this container version has been deleted.
  * fingerprint `string`: The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified.
  * folder `array`: The folders in the container that this version was taken from.
    * items [Folder](#folder)
  * macro `array`: The macros in the container that this version was taken from.
    * items [Macro](#macro)
  * name `string`: Container version display name.
  * notes `string`: User notes on how to apply this container version in the container.
  * rule `array`: The rules in the container that this version was taken from.
    * items [Rule](#rule)
  * tag `array`: The tags in the container that this version was taken from.
    * items [Tag](#tag)
  * trigger `array`: The triggers in the container that this version was taken from.
    * items [Trigger](#trigger)
  * variable `array`: The variables in the container that this version was taken from.
    * items [Variable](#variable)

### ContainerVersionHeader
* ContainerVersionHeader `object`: Represents a Google Tag Manager Container Version Header.
  * accountId `string`: GTM Account ID.
  * containerId `string`: GTM Container ID.
  * containerVersionId `string`: The Container Version ID uniquely identifies the GTM Container Version.
  * deleted `boolean`: A value of true indicates this container version has been deleted.
  * name `string`: Container version display name.
  * numMacros `string`: Number of macros in the container version.
  * numRules `string`: Number of rules in the container version.
  * numTags `string`: Number of tags in the container version.
  * numTriggers `string`: Number of triggers in the container version.
  * numVariables `string`: Number of variables in the container version.

### CreateContainerVersionRequestVersionOptions
* CreateContainerVersionRequestVersionOptions `object`: Options for new container versions.
  * name `string`: The name of the container version to be created.
  * notes `string`: The notes of the container version to be created.
  * quickPreview `boolean`: The creation of this version may be for quick preview and shouldn't be saved.

### CreateContainerVersionResponse
* CreateContainerVersionResponse `object`: Create container versions response.
  * compilerError `boolean`: Compiler errors or not.
  * containerVersion [ContainerVersion](#containerversion)

### Environment
* Environment `object`: Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.
  * accountId `string`: GTM Account ID.
  * authorizationCode `string`: The environment authorization code.
  * authorizationTimestampMs `string`: The last update time-stamp for the authorization code.
  * containerId `string`: GTM Container ID.
  * containerVersionId `string`
  * description `string`: The environment description. Can be set or changed only on USER type environments.
  * enableDebug `boolean`: Whether or not to enable debug by default on for the environment.
  * environmentId `string`: GTM Environment ID uniquely identifies the GTM Environment.
  * fingerprint `string`: The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.
  * name `string`: The environment display name. Can be set or changed only on USER type environments.
  * type `string` (values: draft, latest, live, user): The type of this environment.
  * url `string`: Default preview page url for the environment.

### Folder
* Folder `object`: Represents a Google Tag Manager Folder.
  * accountId `string`: GTM Account ID.
  * containerId `string`: GTM Container ID.
  * fingerprint `string`: The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.
  * folderId `string`: The Folder ID uniquely identifies the GTM Folder.
  * name `string`: Folder display name.

### FolderEntities
* FolderEntities `object`: Represents a Google Tag Manager Folder's contents.
  * tag `array`: The list of tags inside the folder.
    * items [Tag](#tag)
  * trigger `array`: The list of triggers inside the folder.
    * items [Trigger](#trigger)
  * variable `array`: The list of variables inside the folder.
    * items [Variable](#variable)

### ListAccountUsersResponse
* ListAccountUsersResponse `object`: List AccountUsers Response.
  * userAccess `array`: All GTM AccountUsers of a GTM Account.
    * items [UserAccess](#useraccess)

### ListAccountsResponse
* ListAccountsResponse `object`: List Accounts Response.
  * accounts `array`: List of GTM Accounts that a user has access to.
    * items [Account](#account)

### ListContainerVersionsResponse
* ListContainerVersionsResponse `object`: List container versions response.
  * containerVersion `array`: All versions of a GTM Container.
    * items [ContainerVersion](#containerversion)
  * containerVersionHeader `array`: All container version headers of a GTM Container.
    * items [ContainerVersionHeader](#containerversionheader)

### ListContainersResponse
* ListContainersResponse `object`: List Containers Response.
  * containers `array`: All Containers of a GTM Account.
    * items [Container](#container)

### ListEnvironmentsResponse
* ListEnvironmentsResponse `object`: List Environments Response.
  * environments `array`: All Environments of a GTM Container.
    * items [Environment](#environment)

### ListFoldersResponse
* ListFoldersResponse `object`: List Folders Response.
  * folders `array`: All GTM Folders of a GTM Container.
    * items [Folder](#folder)

### ListTagsResponse
* ListTagsResponse `object`: List Tags Response.
  * tags `array`: All GTM Tags of a GTM Container.
    * items [Tag](#tag)

### ListTriggersResponse
* ListTriggersResponse `object`: List triggers response.
  * triggers `array`: All GTM Triggers of a GTM Container.
    * items [Trigger](#trigger)

### ListVariablesResponse
* ListVariablesResponse `object`: List Variables Response.
  * variables `array`: All GTM Variables of a GTM Container.
    * items [Variable](#variable)

### Macro
* Macro `object`: Represents a Google Tag Manager Macro.
  * accountId `string`: GTM Account ID.
  * containerId `string`: GTM Container ID.
  * disablingRuleId `array`: For mobile containers only: A list of rule IDs for disabling conditional macros; the macro is enabled if one of the enabling rules is true while all the disabling rules are false. Treated as an unordered set.
    * items `string`
  * enablingRuleId `array`: For mobile containers only: A list of rule IDs for enabling conditional macros; the macro is enabled if one of the enabling rules is true while all the disabling rules are false. Treated as an unordered set.
    * items `string`
  * fingerprint `string`: The fingerprint of the GTM Macro as computed at storage time. This value is recomputed whenever the macro is modified.
  * macroId `string`: The Macro ID uniquely identifies the GTM Macro.
  * name `string`: Macro display name.
  * notes `string`: User notes on how to apply this macro in the container.
  * parameter `array`: The macro's parameters.
    * items [Parameter](#parameter)
  * parentFolderId `string`: Parent folder id.
  * scheduleEndMs `string`: The end timestamp in milliseconds to schedule a macro.
  * scheduleStartMs `string`: The start timestamp in milliseconds to schedule a macro.
  * type `string`: GTM Macro Type.

### Parameter
* Parameter `object`: Represents a Google Tag Manager Parameter.
  * key `string`: The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values.
  * list `array`: This list parameter's parameters (keys will be ignored).
    * items [Parameter](#parameter)
  * map `array`: This map parameter's parameters (must have keys; keys must be unique).
    * items [Parameter](#parameter)
  * type `string` (values: boolean, integer, list, map, template): The parameter type. Valid values are: 
  * value `string`: A parameter's value (may contain variable references such as "{{myVariable}}") as appropriate to the specified type.

### PublishContainerVersionResponse
* PublishContainerVersionResponse `object`: Publish container version response.
  * compilerError `boolean`: Compiler errors or not.
  * containerVersion [ContainerVersion](#containerversion)

### Rule
* Rule `object`: Represents a Google Tag Manager Rule.
  * accountId `string`: GTM Account ID.
  * condition `array`: The list of conditions that make up this rule (implicit AND between them).
    * items [Condition](#condition)
  * containerId `string`: GTM Container ID.
  * fingerprint `string`: The fingerprint of the GTM Rule as computed at storage time. This value is recomputed whenever the rule is modified.
  * name `string`: Rule display name.
  * notes `string`: User notes on how to apply this rule in the container.
  * ruleId `string`: The Rule ID uniquely identifies the GTM Rule.

### SetupTag
* SetupTag `object`
  * stopOnSetupFailure `boolean`: If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status.
  * tagName `string`: The name of the setup tag.

### Tag
* Tag `object`: Represents a Google Tag Manager Tag.
  * accountId `string`: GTM Account ID.
  * blockingRuleId `array`: Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire.
    * items `string`
  * blockingTriggerId `array`: Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire.
    * items `string`
  * containerId `string`: GTM Container ID.
  * fingerprint `string`: The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.
  * firingRuleId `array`: Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false.
    * items `string`
  * firingTriggerId `array`: Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false.
    * items `string`
  * liveOnly `boolean`: If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode).
  * name `string`: Tag display name.
  * notes `string`: User notes on how to apply this tag in the container.
  * parameter `array`: The tag's parameters.
    * items [Parameter](#parameter)
  * parentFolderId `string`: Parent folder id.
  * paused `boolean`: True if the tag is paused.
  * priority [Parameter](#parameter)
  * scheduleEndMs `string`: The end timestamp in milliseconds to schedule a tag.
  * scheduleStartMs `string`: The start timestamp in milliseconds to schedule a tag.
  * setupTag `array`: The list of setup tags. Currently we only allow one.
    * items [SetupTag](#setuptag)
  * tagFiringOption `string` (values: oncePerEvent, oncePerLoad, unlimited): Option to fire this tag.
  * tagId `string`: The Tag ID uniquely identifies the GTM Tag.
  * teardownTag `array`: The list of teardown tags. Currently we only allow one.
    * items [TeardownTag](#teardowntag)
  * type `string`: GTM Tag Type.

### TeardownTag
* TeardownTag `object`
  * stopTeardownOnFailure `boolean`: If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status.
  * tagName `string`: The name of the teardown tag.

### Trigger
* Trigger `object`: Represents a Google Tag Manager Trigger
  * accountId `string`: GTM Account ID.
  * autoEventFilter `array`: Used in the case of auto event tracking.
    * items [Condition](#condition)
  * checkValidation [Parameter](#parameter)
  * containerId `string`: GTM Container ID.
  * continuousTimeMinMilliseconds [Parameter](#parameter)
  * customEventFilter `array`: Used in the case of custom event, which is fired iff all Conditions are true.
    * items [Condition](#condition)
  * eventName [Parameter](#parameter)
  * filter `array`: The trigger will only fire iff all Conditions are true.
    * items [Condition](#condition)
  * fingerprint `string`: The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified.
  * horizontalScrollPercentageList [Parameter](#parameter)
  * interval [Parameter](#parameter)
  * intervalSeconds [Parameter](#parameter)
  * limit [Parameter](#parameter)
  * maxTimerLengthSeconds [Parameter](#parameter)
  * name `string`: Trigger display name.
  * parameter `array`: Additional parameters.
    * items [Parameter](#parameter)
  * parentFolderId `string`: Parent folder id.
  * selector [Parameter](#parameter)
  * totalTimeMinMilliseconds [Parameter](#parameter)
  * triggerId `string`: The Trigger ID uniquely identifies the GTM Trigger.
  * type `string` (values: always, ampClick, ampScroll, ampTimer, ampVisibility, click, customEvent, domReady, elementVisibility, formSubmission, historyChange, jsError, linkClick, pageview, scrollDepth, timer, windowLoaded, youTubeVideo): Defines the data layer event that causes this trigger.
  * uniqueTriggerId [Parameter](#parameter)
  * verticalScrollPercentageList [Parameter](#parameter)
  * visibilitySelector [Parameter](#parameter)
  * visiblePercentageMax [Parameter](#parameter)
  * visiblePercentageMin [Parameter](#parameter)
  * waitForTags [Parameter](#parameter)
  * waitForTagsTimeout [Parameter](#parameter)

### UserAccess
* UserAccess `object`: Represents a user's permissions to an account and its container.
  * accountAccess [AccountAccess](#accountaccess)
  * accountId `string`: GTM Account ID.
  * containerAccess `array`: GTM Container access permissions.
    * items [ContainerAccess](#containeraccess)
  * emailAddress `string`: User's email address.
  * permissionId `string`: Account Permission ID.

### Variable
* Variable `object`: Represents a Google Tag Manager Variable.
  * accountId `string`: GTM Account ID.
  * containerId `string`: GTM Container ID.
  * disablingTriggerId `array`: For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set.
    * items `string`
  * enablingTriggerId `array`: For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set.
    * items `string`
  * fingerprint `string`: The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified.
  * name `string`: Variable display name.
  * notes `string`: User notes on how to apply this variable in the container.
  * parameter `array`: The variable's parameters.
    * items [Parameter](#parameter)
  * parentFolderId `string`: Parent folder id.
  * scheduleEndMs `string`: The end timestamp in milliseconds to schedule a variable.
  * scheduleStartMs `string`: The start timestamp in milliseconds to schedule a variable.
  * type `string`: GTM Variable Type.
  * variableId `string`: The Variable ID uniquely identifies the GTM Variable.


