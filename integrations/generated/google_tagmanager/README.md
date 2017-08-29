# @datafire/google_tagmanager

Client library for Tag Manager

## Installation and Usage
```bash
npm install --save datafire @datafire/google_tagmanager
```

```js
let datafire = require('datafire');
let google_tagmanager = require('@datafire/google_tagmanager').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_tagmanager.accounts.list({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_tagmanager.oauthRefresh(null, context)
```


### accounts.list
Lists all GTM Accounts that a user has access to.


```js
google_tagmanager.accounts.list({}, context)
```

#### Parameters
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.get
Gets a GTM Account.


```js
google_tagmanager.accounts.get({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.update
Updates a GTM Account.


```js
google_tagmanager.accounts.update({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* fingerprint (string) - When provided, this fingerprint must match the fingerprint of the account in storage.
* body (object) - Represents a Google Tag Manager Account.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.list
Lists all Containers that belongs to a GTM Account.


```js
google_tagmanager.accounts.containers.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.create
Creates a Container.


```js
google_tagmanager.accounts.containers.create({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* body (object) - Represents a Google Tag Manager Container.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.delete
Deletes a Container.


```js
google_tagmanager.accounts.containers.delete({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.get
Gets a Container.


```js
google_tagmanager.accounts.containers.get({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.update
Updates a Container.


```js
google_tagmanager.accounts.containers.update({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* fingerprint (string) - When provided, this fingerprint must match the fingerprint of the container in storage.
* body (object) - Represents a Google Tag Manager Container.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.environments.list
Lists all GTM Environments of a GTM Container.


```js
google_tagmanager.accounts.containers.environments.list({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.environments.create
Creates a GTM Environment.


```js
google_tagmanager.accounts.containers.environments.create({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* body (object) - Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.environments.delete
Deletes a GTM Environment.


```js
google_tagmanager.accounts.containers.environments.delete({
  "accountId": "",
  "containerId": "",
  "environmentId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* environmentId (string) **required** - The GTM Environment ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.environments.get
Gets a GTM Environment.


```js
google_tagmanager.accounts.containers.environments.get({
  "accountId": "",
  "containerId": "",
  "environmentId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* environmentId (string) **required** - The GTM Environment ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.environments.patch
Updates a GTM Environment. This method supports patch semantics.


```js
google_tagmanager.accounts.containers.environments.patch({
  "accountId": "",
  "containerId": "",
  "environmentId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* environmentId (string) **required** - The GTM Environment ID.
* fingerprint (string) - When provided, this fingerprint must match the fingerprint of the environment in storage.
* body (object) - Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.environments.update
Updates a GTM Environment.


```js
google_tagmanager.accounts.containers.environments.update({
  "accountId": "",
  "containerId": "",
  "environmentId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* environmentId (string) **required** - The GTM Environment ID.
* fingerprint (string) - When provided, this fingerprint must match the fingerprint of the environment in storage.
* body (object) - Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.folders.list
Lists all GTM Folders of a Container.


```js
google_tagmanager.accounts.containers.folders.list({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.folders.create
Creates a GTM Folder.


```js
google_tagmanager.accounts.containers.folders.create({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* body (object) - Represents a Google Tag Manager Folder.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.folders.delete
Deletes a GTM Folder.


```js
google_tagmanager.accounts.containers.folders.delete({
  "accountId": "",
  "containerId": "",
  "folderId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* folderId (string) **required** - The GTM Folder ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.folders.get
Gets a GTM Folder.


```js
google_tagmanager.accounts.containers.folders.get({
  "accountId": "",
  "containerId": "",
  "folderId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* folderId (string) **required** - The GTM Folder ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.folders.update
Updates a GTM Folder.


```js
google_tagmanager.accounts.containers.folders.update({
  "accountId": "",
  "containerId": "",
  "folderId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* folderId (string) **required** - The GTM Folder ID.
* fingerprint (string) - When provided, this fingerprint must match the fingerprint of the folder in storage.
* body (object) - Represents a Google Tag Manager Folder.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.folders.entities.list
List all entities in a GTM Folder.


```js
google_tagmanager.accounts.containers.folders.entities.list({
  "accountId": "",
  "containerId": "",
  "folderId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* folderId (string) **required** - The GTM Folder ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.move_folders.update
Moves entities to a GTM Folder.


```js
google_tagmanager.accounts.containers.move_folders.update({
  "accountId": "",
  "containerId": "",
  "folderId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* folderId (string) **required** - The GTM Folder ID.
* tagId (array) - The tags to be moved to the folder.
* triggerId (array) - The triggers to be moved to the folder.
* variableId (array) - The variables to be moved to the folder.
* body (object) - Represents a Google Tag Manager Folder.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.reauthorize_environments.update
Re-generates the authorization code for a GTM Environment.


```js
google_tagmanager.accounts.containers.reauthorize_environments.update({
  "accountId": "",
  "containerId": "",
  "environmentId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* environmentId (string) **required** - The GTM Environment ID.
* body (object) - Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.tags.list
Lists all GTM Tags of a Container.


```js
google_tagmanager.accounts.containers.tags.list({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.tags.create
Creates a GTM Tag.


```js
google_tagmanager.accounts.containers.tags.create({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* body (object) - Represents a Google Tag Manager Tag.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.tags.delete
Deletes a GTM Tag.


```js
google_tagmanager.accounts.containers.tags.delete({
  "accountId": "",
  "containerId": "",
  "tagId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* tagId (string) **required** - The GTM Tag ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.tags.get
Gets a GTM Tag.


```js
google_tagmanager.accounts.containers.tags.get({
  "accountId": "",
  "containerId": "",
  "tagId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* tagId (string) **required** - The GTM Tag ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.tags.update
Updates a GTM Tag.


```js
google_tagmanager.accounts.containers.tags.update({
  "accountId": "",
  "containerId": "",
  "tagId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* tagId (string) **required** - The GTM Tag ID.
* fingerprint (string) - When provided, this fingerprint must match the fingerprint of the tag in storage.
* body (object) - Represents a Google Tag Manager Tag.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.triggers.list
Lists all GTM Triggers of a Container.


```js
google_tagmanager.accounts.containers.triggers.list({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.triggers.create
Creates a GTM Trigger.


```js
google_tagmanager.accounts.containers.triggers.create({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* body (object) - Represents a Google Tag Manager Trigger
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.triggers.delete
Deletes a GTM Trigger.


```js
google_tagmanager.accounts.containers.triggers.delete({
  "accountId": "",
  "containerId": "",
  "triggerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* triggerId (string) **required** - The GTM Trigger ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.triggers.get
Gets a GTM Trigger.


```js
google_tagmanager.accounts.containers.triggers.get({
  "accountId": "",
  "containerId": "",
  "triggerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* triggerId (string) **required** - The GTM Trigger ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.triggers.update
Updates a GTM Trigger.


```js
google_tagmanager.accounts.containers.triggers.update({
  "accountId": "",
  "containerId": "",
  "triggerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* triggerId (string) **required** - The GTM Trigger ID.
* fingerprint (string) - When provided, this fingerprint must match the fingerprint of the trigger in storage.
* body (object) - Represents a Google Tag Manager Trigger
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.variables.list
Lists all GTM Variables of a Container.


```js
google_tagmanager.accounts.containers.variables.list({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.variables.create
Creates a GTM Variable.


```js
google_tagmanager.accounts.containers.variables.create({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* body (object) - Represents a Google Tag Manager Variable.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.variables.delete
Deletes a GTM Variable.


```js
google_tagmanager.accounts.containers.variables.delete({
  "accountId": "",
  "containerId": "",
  "variableId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* variableId (string) **required** - The GTM Variable ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.variables.get
Gets a GTM Variable.


```js
google_tagmanager.accounts.containers.variables.get({
  "accountId": "",
  "containerId": "",
  "variableId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* variableId (string) **required** - The GTM Variable ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.variables.update
Updates a GTM Variable.


```js
google_tagmanager.accounts.containers.variables.update({
  "accountId": "",
  "containerId": "",
  "variableId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* variableId (string) **required** - The GTM Variable ID.
* fingerprint (string) - When provided, this fingerprint must match the fingerprint of the variable in storage.
* body (object) - Represents a Google Tag Manager Variable.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.versions.list
Lists all Container Versions of a GTM Container.


```js
google_tagmanager.accounts.containers.versions.list({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* headers (boolean) - Retrieve headers only when true.
* includeDeleted (boolean) - Also retrieve deleted (archived) versions when true.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.versions.create
Creates a Container Version.


```js
google_tagmanager.accounts.containers.versions.create({
  "accountId": "",
  "containerId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* body (object) - Options for new container versions.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.versions.delete
Deletes a Container Version.


```js
google_tagmanager.accounts.containers.versions.delete({
  "accountId": "",
  "containerId": "",
  "containerVersionId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* containerVersionId (string) **required** - The GTM Container Version ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.versions.get
Gets a Container Version.


```js
google_tagmanager.accounts.containers.versions.get({
  "accountId": "",
  "containerId": "",
  "containerVersionId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* containerVersionId (string) **required** - The GTM Container Version ID. Specify published to retrieve the currently published version.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.versions.update
Updates a Container Version.


```js
google_tagmanager.accounts.containers.versions.update({
  "accountId": "",
  "containerId": "",
  "containerVersionId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* containerVersionId (string) **required** - The GTM Container Version ID.
* fingerprint (string) - When provided, this fingerprint must match the fingerprint of the container version in storage.
* body (object) - Represents a Google Tag Manager Container Version.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.versions.publish
Publishes a Container Version.


```js
google_tagmanager.accounts.containers.versions.publish({
  "accountId": "",
  "containerId": "",
  "containerVersionId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* containerVersionId (string) **required** - The GTM Container Version ID.
* fingerprint (string) - When provided, this fingerprint must match the fingerprint of the container version in storage.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.versions.restore
Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).


```js
google_tagmanager.accounts.containers.versions.restore({
  "accountId": "",
  "containerId": "",
  "containerVersionId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* containerVersionId (string) **required** - The GTM Container Version ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.containers.versions.undelete
Undeletes a Container Version.


```js
google_tagmanager.accounts.containers.versions.undelete({
  "accountId": "",
  "containerId": "",
  "containerVersionId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* containerId (string) **required** - The GTM Container ID.
* containerVersionId (string) **required** - The GTM Container Version ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.permissions.list
List all users that have access to the account along with Account and Container Permissions granted to each of them.


```js
google_tagmanager.accounts.permissions.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID. @required tagmanager.accounts.permissions.list
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.permissions.create
Creates a user's Account & Container Permissions.


```js
google_tagmanager.accounts.permissions.create({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* body (object) - Represents a user's permissions to an account and its container.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.permissions.delete
Removes a user from the account, revoking access to it and all of its containers.


```js
google_tagmanager.accounts.permissions.delete({
  "accountId": "",
  "permissionId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* permissionId (string) **required** - The GTM User ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.permissions.get
Gets a user's Account & Container Permissions.


```js
google_tagmanager.accounts.permissions.get({
  "accountId": "",
  "permissionId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* permissionId (string) **required** - The GTM User ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.permissions.update
Updates a user's Account & Container Permissions.


```js
google_tagmanager.accounts.permissions.update({
  "accountId": "",
  "permissionId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The GTM Account ID.
* permissionId (string) **required** - The GTM User ID.
* body (object) - Represents a user's permissions to an account and its container.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

