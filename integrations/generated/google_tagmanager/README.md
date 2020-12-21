# @datafire/google_tagmanager

Client library for Tag Manager API

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

.then(data => {
  console.log(data);
});
```

## Description

This API allows clients to access and modify container and tag configuration.

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

### tagmanager.accounts.list
Lists all GTM Accounts that a user has access to.


```js
google_tagmanager.tagmanager.accounts.list({}, context)
```

#### Input
* input `object`
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListAccountsResponse](#listaccountsresponse)

### tagmanager.accounts.containers.workspaces.built_in_variables.list
Lists all the enabled Built-In Variables of a GTM Container.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.built_in_variables.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListEnabledBuiltInVariablesResponse](#listenabledbuiltinvariablesresponse)

### tagmanager.accounts.containers.workspaces.built_in_variables.create
Creates one or more GTM Built-In Variables.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.built_in_variables.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * type `array`: The types of built-in variables to enable.
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
* output [CreateBuiltInVariableResponse](#createbuiltinvariableresponse)

### tagmanager.accounts.containers.list
Lists all Containers that belongs to a GTM Account.


```js
google_tagmanager.tagmanager.accounts.containers.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Accounts's API relative path. Example: accounts/{account_id}.
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListContainersResponse](#listcontainersresponse)

### tagmanager.accounts.containers.create
Creates a Container.


```js
google_tagmanager.tagmanager.accounts.containers.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Account's API relative path. Example: accounts/{account_id}.
  * body [Container](#container)
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
* output [Container](#container)

### tagmanager.accounts.containers.environments.list
Lists all GTM Environments of a GTM Container.


```js
google_tagmanager.tagmanager.accounts.containers.environments.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListEnvironmentsResponse](#listenvironmentsresponse)

### tagmanager.accounts.containers.environments.create
Creates a GTM Environment.


```js
google_tagmanager.tagmanager.accounts.containers.environments.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
  * body [Environment](#environment)
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
* output [Environment](#environment)

### tagmanager.accounts.containers.workspaces.folders.list
Lists all GTM Folders of a Container.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.folders.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListFoldersResponse](#listfoldersresponse)

### tagmanager.accounts.containers.workspaces.folders.create
Creates a GTM Folder.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.folders.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * body [Folder](#folder)
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
* output [Folder](#folder)

### tagmanager.accounts.containers.workspaces.tags.list
Lists all GTM Tags of a Container.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.tags.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListTagsResponse](#listtagsresponse)

### tagmanager.accounts.containers.workspaces.tags.create
Creates a GTM Tag.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.tags.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * body [Tag](#tag)
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
* output [Tag](#tag)

### tagmanager.accounts.containers.workspaces.templates.list
Lists all GTM Templates of a GTM container workspace.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.templates.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListTemplatesResponse](#listtemplatesresponse)

### tagmanager.accounts.containers.workspaces.templates.create
Creates a GTM Custom Template.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.templates.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * body [CustomTemplate](#customtemplate)
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
* output [CustomTemplate](#customtemplate)

### tagmanager.accounts.containers.workspaces.triggers.list
Lists all GTM Triggers of a Container.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.triggers.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Workspaces's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListTriggersResponse](#listtriggersresponse)

### tagmanager.accounts.containers.workspaces.triggers.create
Creates a GTM Trigger.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.triggers.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Workspaces's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * body [Trigger](#trigger)
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
* output [Trigger](#trigger)

### tagmanager.accounts.user_permissions.list
List all users that have access to the account along with Account and Container user access granted to each of them.


```js
google_tagmanager.tagmanager.accounts.user_permissions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Accounts's API relative path. Example: accounts/{account_id}
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListUserPermissionsResponse](#listuserpermissionsresponse)

### tagmanager.accounts.user_permissions.create
Creates a user's Account & Container access.


```js
google_tagmanager.tagmanager.accounts.user_permissions.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Account's API relative path. Example: accounts/{account_id}
  * body [UserPermission](#userpermission)
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
* output [UserPermission](#userpermission)

### tagmanager.accounts.containers.workspaces.variables.list
Lists all GTM Variables of a Container.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.variables.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListVariablesResponse](#listvariablesresponse)

### tagmanager.accounts.containers.workspaces.variables.create
Creates a GTM Variable.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.variables.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * body [Variable](#variable)
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
* output [Variable](#variable)

### tagmanager.accounts.containers.version_headers.list
Lists all Container Versions of a GTM Container.


```js
google_tagmanager.tagmanager.accounts.containers.version_headers.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
  * includeDeleted `boolean`: Also retrieve deleted (archived) versions when true.
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListContainerVersionsResponse](#listcontainerversionsresponse)

### tagmanager.accounts.containers.version_headers.latest
Gets the latest container version header


```js
google_tagmanager.tagmanager.accounts.containers.version_headers.latest({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
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
* output [ContainerVersionHeader](#containerversionheader)

### tagmanager.accounts.containers.versions.live
Gets the live (i.e. published) container version


```js
google_tagmanager.tagmanager.accounts.containers.versions.live({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
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
* output [ContainerVersion](#containerversion)

### tagmanager.accounts.containers.workspaces.list
Lists all Workspaces that belong to a GTM Container.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListWorkspacesResponse](#listworkspacesresponse)

### tagmanager.accounts.containers.workspaces.create
Creates a Workspace.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
  * body [Workspace](#workspace)
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
* output [Workspace](#workspace)

### tagmanager.accounts.containers.workspaces.zones.list
Lists all GTM Zones of a GTM container workspace.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.zones.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListZonesResponse](#listzonesresponse)

### tagmanager.accounts.containers.workspaces.zones.create
Creates a GTM Zone.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.zones.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * body [Zone](#zone)
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
* output [Zone](#zone)

### tagmanager.accounts.user_permissions.delete
Removes a user from the account, revoking access to it and all of its containers.


```js
google_tagmanager.tagmanager.accounts.user_permissions.delete({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
  * type `array`: The types of built-in variables to delete.
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

### tagmanager.accounts.user_permissions.get
Gets a user's Account & Container access.


```js
google_tagmanager.tagmanager.accounts.user_permissions.get({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
  * containerVersionId `string`: The GTM ContainerVersion ID. Specify published to retrieve the currently published version.
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
* output [UserPermission](#userpermission)

### tagmanager.accounts.user_permissions.update
Updates a user's Account & Container access.


```js
google_tagmanager.tagmanager.accounts.user_permissions.update({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
  * fingerprint `string`: When provided, this fingerprint must match the fingerprint of the zone in storage.
  * body [UserPermission](#userpermission)
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
* output [UserPermission](#userpermission)

### tagmanager.accounts.containers.workspaces.built_in_variables.revert
Reverts changes to a GTM Built-In Variables in a GTM Workspace.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.built_in_variables.revert({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM BuiltInVariable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/built_in_variables
  * type `string` (values: builtInVariableTypeUnspecified, pageUrl, pageHostname, pagePath, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, firstPartyServingUrl, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, newHistoryUrl, oldHistoryUrl, newHistoryFragment, oldHistoryFragment, newHistoryState, oldHistoryState, historySource, containerVersion, debugMode, randomNumber, containerId, appId, appName, appVersionCode, appVersionName, language, osVersion, platform, sdkVersion, deviceName, resolution, advertiserId, advertisingTrackingEnabled, htmlId, environmentName, ampBrowserLanguage, ampCanonicalPath, ampCanonicalUrl, ampCanonicalHost, ampReferrer, ampTitle, ampClientId, ampClientTimezone, ampClientTimestamp, ampClientScreenWidth, ampClientScreenHeight, ampClientScrollX, ampClientScrollY, ampClientMaxScrollX, ampClientMaxScrollY, ampTotalEngagedTime, ampPageViewId, ampPageLoadTime, ampPageDownloadTime, ampGtmEvent, eventName, firebaseEventParameterCampaign, firebaseEventParameterCampaignAclid, firebaseEventParameterCampaignAnid, firebaseEventParameterCampaignClickTimestamp, firebaseEventParameterCampaignContent, firebaseEventParameterCampaignCp1, firebaseEventParameterCampaignGclid, firebaseEventParameterCampaignSource, firebaseEventParameterCampaignTerm, firebaseEventParameterCurrency, firebaseEventParameterDynamicLinkAcceptTime, firebaseEventParameterDynamicLinkLinkid, firebaseEventParameterNotificationMessageDeviceTime, firebaseEventParameterNotificationMessageId, firebaseEventParameterNotificationMessageName, firebaseEventParameterNotificationMessageTime, firebaseEventParameterNotificationTopic, firebaseEventParameterPreviousAppVersion, firebaseEventParameterPreviousOsVersion, firebaseEventParameterPrice, firebaseEventParameterProductId, firebaseEventParameterQuantity, firebaseEventParameterValue, videoProvider, videoUrl, videoTitle, videoDuration, videoPercent, videoVisible, videoStatus, videoCurrentTime, scrollDepthThreshold, scrollDepthUnits, scrollDepthDirection, elementVisibilityRatio, elementVisibilityTime, elementVisibilityFirstTime, elementVisibilityRecentTime, requestPath, requestMethod, clientName, queryString): The type of built-in variable to revert.
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
* output [RevertBuiltInVariableResponse](#revertbuiltinvariableresponse)

### tagmanager.accounts.containers.workspaces.getStatus
Finds conflicting and modified entities in the workspace.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.getStatus({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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
* output [GetWorkspaceStatusResponse](#getworkspacestatusresponse)

### tagmanager.accounts.containers.workspaces.create_version
Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.create_version({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * body [CreateContainerVersionRequestVersionOptions](#createcontainerversionrequestversionoptions)
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
* output [CreateContainerVersionResponse](#createcontainerversionresponse)

### tagmanager.accounts.containers.workspaces.folders.entities
List all entities in a GTM Folder.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.folders.entities({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [FolderEntities](#folderentities)

### tagmanager.accounts.containers.workspaces.folders.move_entities_to_folder
Moves entities to a GTM Folder.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.folders.move_entities_to_folder({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
  * tagId `array`: The tags to be moved to the folder.
  * triggerId `array`: The triggers to be moved to the folder.
  * variableId `array`: The variables to be moved to the folder.
  * body [Folder](#folder)
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

### tagmanager.accounts.containers.versions.publish
Publishes a Container Version.


```js
google_tagmanager.tagmanager.accounts.containers.versions.publish({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
  * fingerprint `string`: When provided, this fingerprint must match the fingerprint of the container version in storage.
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
* output [PublishContainerVersionResponse](#publishcontainerversionresponse)

### tagmanager.accounts.containers.workspaces.quick_preview
Quick previews a workspace by creating a fake container version from all entities in the provided workspace.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.quick_preview({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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
* output [QuickPreviewResponse](#quickpreviewresponse)

### tagmanager.accounts.containers.environments.reauthorize
Re-generates the authorization code for a GTM Environment.


```js
google_tagmanager.tagmanager.accounts.containers.environments.reauthorize({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
  * body [Environment](#environment)
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
* output [Environment](#environment)

### tagmanager.accounts.containers.workspaces.resolve_conflict
Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.resolve_conflict({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
  * fingerprint `string`: When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict.
  * body [Entity](#entity)
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

### tagmanager.accounts.containers.workspaces.zones.revert
Reverts changes to a GTM Zone in a GTM Workspace.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.zones.revert({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM Zone's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/zones/{zone_id}
  * fingerprint `string`: When provided, this fingerprint must match the fingerprint of the zone in storage.
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
* output [RevertZoneResponse](#revertzoneresponse)

### tagmanager.accounts.containers.versions.set_latest
Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.


```js
google_tagmanager.tagmanager.accounts.containers.versions.set_latest({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
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
* output [ContainerVersion](#containerversion)

### tagmanager.accounts.containers.workspaces.sync
Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.


```js
google_tagmanager.tagmanager.accounts.containers.workspaces.sync({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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
* output [SyncWorkspaceResponse](#syncworkspaceresponse)

### tagmanager.accounts.containers.versions.undelete
Undeletes a Container Version.


```js
google_tagmanager.tagmanager.accounts.containers.versions.undelete({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
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
* output [ContainerVersion](#containerversion)



## Definitions

### Account
* Account `object`: Represents a Google Tag Manager Account.
  * accountId `string`: The Account ID uniquely identifies the GTM Account.
  * fingerprint `string`: The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified.
  * name `string`: Account display name. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update
  * path `string`: GTM Account's API relative path.
  * shareData `boolean`: Whether the account shares data anonymously with Google and others. This flag enables benchmarking by sharing your data in an anonymous form. Google will remove all identifiable information about your website, combine the data with hundreds of other anonymous sites and report aggregate trends in the benchmarking service. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update
  * tagManagerUrl `string`: Auto generated link to the tag manager UI

### AccountAccess
* AccountAccess `object`: Defines the Google Tag Manager Account access permissions.
  * permission `string` (values: accountPermissionUnspecified, noAccess, user, admin): Whether the user has no access, user access, or admin access to an account. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update

### BuiltInVariable
* BuiltInVariable `object`: Built-in variables are a special category of variables that are pre-created and non-customizable. They provide common functionality like accessing propeties of the gtm data layer, monitoring clicks, or accessing elements of a page URL.
  * accountId `string`: GTM Account ID.
  * containerId `string`: GTM Container ID.
  * name `string`: Name of the built-in variable to be used to refer to the built-in variable.
  * path `string`: GTM BuiltInVariable's API relative path.
  * type `string` (values: builtInVariableTypeUnspecified, pageUrl, pageHostname, pagePath, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, firstPartyServingUrl, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, newHistoryUrl, oldHistoryUrl, newHistoryFragment, oldHistoryFragment, newHistoryState, oldHistoryState, historySource, containerVersion, debugMode, randomNumber, containerId, appId, appName, appVersionCode, appVersionName, language, osVersion, platform, sdkVersion, deviceName, resolution, advertiserId, advertisingTrackingEnabled, htmlId, environmentName, ampBrowserLanguage, ampCanonicalPath, ampCanonicalUrl, ampCanonicalHost, ampReferrer, ampTitle, ampClientId, ampClientTimezone, ampClientTimestamp, ampClientScreenWidth, ampClientScreenHeight, ampClientScrollX, ampClientScrollY, ampClientMaxScrollX, ampClientMaxScrollY, ampTotalEngagedTime, ampPageViewId, ampPageLoadTime, ampPageDownloadTime, ampGtmEvent, eventName, firebaseEventParameterCampaign, firebaseEventParameterCampaignAclid, firebaseEventParameterCampaignAnid, firebaseEventParameterCampaignClickTimestamp, firebaseEventParameterCampaignContent, firebaseEventParameterCampaignCp1, firebaseEventParameterCampaignGclid, firebaseEventParameterCampaignSource, firebaseEventParameterCampaignTerm, firebaseEventParameterCurrency, firebaseEventParameterDynamicLinkAcceptTime, firebaseEventParameterDynamicLinkLinkid, firebaseEventParameterNotificationMessageDeviceTime, firebaseEventParameterNotificationMessageId, firebaseEventParameterNotificationMessageName, firebaseEventParameterNotificationMessageTime, firebaseEventParameterNotificationTopic, firebaseEventParameterPreviousAppVersion, firebaseEventParameterPreviousOsVersion, firebaseEventParameterPrice, firebaseEventParameterProductId, firebaseEventParameterQuantity, firebaseEventParameterValue, videoProvider, videoUrl, videoTitle, videoDuration, videoPercent, videoVisible, videoStatus, videoCurrentTime, scrollDepthThreshold, scrollDepthUnits, scrollDepthDirection, elementVisibilityRatio, elementVisibilityTime, elementVisibilityFirstTime, elementVisibilityRecentTime, requestPath, requestMethod, clientName, queryString): Type of built-in variable. @required.tagmanager.accounts.containers.workspaces.built_in_variable.update @mutable tagmanager.accounts.containers.workspaces.built_in_variable.update
  * workspaceId `string`: GTM Workspace ID.

### Client
* Client `object`
  * accountId `string`: GTM Account ID.
  * clientId `string`: The Client ID uniquely identifies the GTM client.
  * containerId `string`: GTM Container ID.
  * fingerprint `string`: The fingerprint of the GTM Client as computed at storage time. This value is recomputed whenever the client is modified.
  * name `string`: Client display name. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update
  * parameter `array`: The client's parameters. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update
    * items [Parameter](#parameter)
  * parentFolderId `string`: Parent folder id.
  * path `string`: GTM client's API relative path.
  * priority `integer`: Priority determines relative firing order. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update
  * tagManagerUrl `string`: Auto generated link to the tag manager UI
  * type `string`: Client type. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update
  * workspaceId `string`: GTM Workspace ID.

### Condition
* Condition `object`: Represents a predicate.
  * parameter `array`: A list of named parameters (key/value), depending on the condition's type. Notes: - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. - At this time, the left operand (arg0) must be a reference to a variable. - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
    * items [Parameter](#parameter)
  * type `string` (values: conditionTypeUnspecified, equals, contains, startsWith, endsWith, matchRegex, greater, greaterOrEquals, less, lessOrEquals, cssSelector, urlMatches): The type of operator for this condition. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update

### Container
* Container `object`: Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions.
  * accountId `string`: GTM Account ID.
  * containerId `string`: The Container ID uniquely identifies the GTM Container.
  * domainName `array`: List of domain names associated with the Container. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
    * items `string`
  * fingerprint `string`: The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified.
  * name `string`: Container display name. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
  * notes `string`: Container Notes. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
  * path `string`: GTM Container's API relative path.
  * publicId `string`: Container Public ID.
  * tagManagerUrl `string`: Auto generated link to the tag manager UI
  * usageContext `array`: List of Usage Contexts for the Container. Valid values include: web, android, or ios. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
    * items `string` (values: usageContextUnspecified, web, android, ios, androidSdk5, iosSdk5, amp, server)

### ContainerAccess
* ContainerAccess `object`: Defines the Google Tag Manager Container access permissions.
  * containerId `string`: GTM Container ID. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
  * permission `string` (values: containerPermissionUnspecified, noAccess, read, edit, approve, publish): List of Container permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update

### ContainerVersion
* ContainerVersion `object`: Represents a Google Tag Manager Container Version.
  * accountId `string`: GTM Account ID.
  * builtInVariable `array`: The built-in variables in the container that this version was taken from.
    * items [BuiltInVariable](#builtinvariable)
  * client `array`: The clients in the container that this version was taken from.
    * items [Client](#client)
  * container [Container](#container)
  * containerId `string`: GTM Container ID.
  * containerVersionId `string`: The Container Version ID uniquely identifies the GTM Container Version.
  * customTemplate `array`: The custom templates in the container that this version was taken from.
    * items [CustomTemplate](#customtemplate)
  * deleted `boolean`: A value of true indicates this container version has been deleted.
  * description `string`: Container version description. @mutable tagmanager.accounts.containers.versions.update
  * fingerprint `string`: The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified.
  * folder `array`: The folders in the container that this version was taken from.
    * items [Folder](#folder)
  * name `string`: Container version display name. @mutable tagmanager.accounts.containers.versions.update
  * path `string`: GTM ContainerVersions's API relative path.
  * tag `array`: The tags in the container that this version was taken from.
    * items [Tag](#tag)
  * tagManagerUrl `string`: Auto generated link to the tag manager UI
  * trigger `array`: The triggers in the container that this version was taken from.
    * items [Trigger](#trigger)
  * variable `array`: The variables in the container that this version was taken from.
    * items [Variable](#variable)
  * zone `array`: The zones in the container that this version was taken from.
    * items [Zone](#zone)

### ContainerVersionHeader
* ContainerVersionHeader `object`: Represents a Google Tag Manager Container Version Header.
  * accountId `string`: GTM Account ID.
  * containerId `string`: GTM Container ID.
  * containerVersionId `string`: The Container Version ID uniquely identifies the GTM Container Version.
  * deleted `boolean`: A value of true indicates this container version has been deleted.
  * name `string`: Container version display name.
  * numClients `string`: Number of clients in the container version.
  * numCustomTemplates `string`: Number of custom templates in the container version.
  * numMacros `string`: Number of macros in the container version.
  * numRules `string`: Number of rules in the container version.
  * numTags `string`: Number of tags in the container version.
  * numTriggers `string`: Number of triggers in the container version.
  * numVariables `string`: Number of variables in the container version.
  * numZones `string`: Number of zones in the container version.
  * path `string`: GTM Container Versions's API relative path.

### CreateBuiltInVariableResponse
* CreateBuiltInVariableResponse `object`
  * builtInVariable `array`: List of created built-in variables.
    * items [BuiltInVariable](#builtinvariable)

### CreateContainerVersionRequestVersionOptions
* CreateContainerVersionRequestVersionOptions `object`: Options for new container versions.
  * name `string`: The name of the container version to be created.
  * notes `string`: The notes of the container version to be created.

### CreateContainerVersionResponse
* CreateContainerVersionResponse `object`: Create container versions response.
  * compilerError `boolean`: Compiler errors or not.
  * containerVersion [ContainerVersion](#containerversion)
  * newWorkspacePath `string`: Auto generated workspace path created as a result of version creation. This field should only be populated if the created version was not a quick preview.
  * syncStatus [SyncStatus](#syncstatus)

### CustomTemplate
* CustomTemplate `object`: Represents a Google Tag Manager Custom Template's contents.
  * accountId `string`: GTM Account ID.
  * containerId `string`: GTM Container ID.
  * fingerprint `string`: The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template is modified.
  * galleryReference [GalleryReference](#galleryreference)
  * name `string`: Custom Template display name.
  * path `string`: GTM Custom Template's API relative path.
  * tagManagerUrl `string`: Auto generated link to the tag manager UI
  * templateData `string`: The custom template in text format.
  * templateId `string`: The Custom Template ID uniquely identifies the GTM custom template.
  * workspaceId `string`: GTM Workspace ID.

### Entity
* Entity `object`: A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.
  * changeStatus `string` (values: changeStatusUnspecified, none, added, deleted, updated): Represents how the entity has been changed in the workspace.
  * client [Client](#client)
  * folder [Folder](#folder)
  * tag [Tag](#tag)
  * trigger [Trigger](#trigger)
  * variable [Variable](#variable)

### Environment
* Environment `object`: Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.
  * accountId `string`: GTM Account ID.
  * authorizationCode `string`: The environment authorization code.
  * authorizationTimestamp `string`: The last update time-stamp for the authorization code.
  * containerId `string`: GTM Container ID.
  * containerVersionId `string`: Represents a link to a container version.
  * description `string`: The environment description. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
  * enableDebug `boolean`: Whether or not to enable debug by default for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
  * environmentId `string`: GTM Environment ID uniquely identifies the GTM Environment.
  * fingerprint `string`: The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.
  * name `string`: The environment display name. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
  * path `string`: GTM Environment's API relative path.
  * tagManagerUrl `string`: Auto generated link to the tag manager UI
  * type `string` (values: user, live, latest, workspace): The type of this environment.
  * url `string`: Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
  * workspaceId `string`: Represents a link to a quick preview of a workspace.

### Folder
* Folder `object`: Represents a Google Tag Manager Folder.
  * accountId `string`: GTM Account ID.
  * containerId `string`: GTM Container ID.
  * fingerprint `string`: The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.
  * folderId `string`: The Folder ID uniquely identifies the GTM Folder.
  * name `string`: Folder display name. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update
  * notes `string`: User notes on how to apply this folder in the container. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update
  * path `string`: GTM Folder's API relative path.
  * tagManagerUrl `string`: Auto generated link to the tag manager UI
  * workspaceId `string`: GTM Workspace ID.

### FolderEntities
* FolderEntities `object`: Represents a Google Tag Manager Folder's contents.
  * nextPageToken `string`: Continuation token for fetching the next page of results.
  * tag `array`: The list of tags inside the folder.
    * items [Tag](#tag)
  * trigger `array`: The list of triggers inside the folder.
    * items [Trigger](#trigger)
  * variable `array`: The list of variables inside the folder.
    * items [Variable](#variable)

### GalleryReference
* GalleryReference `object`: Represents the link between a custom template and an entry on the Community Template Gallery site.
  * host `string`: The name of the host for the community gallery template.
  * isModified `boolean`: If a user has manually edited the community gallery template.
  * owner `string`: The name of the owner for the community gallery template.
  * repository `string`: The name of the repository for the community gallery template.
  * signature `string`: The signature of the community gallery template as computed at import time. This value is recomputed whenever the template is updated from the gallery.
  * version `string`: The version of the community gallery template.

### GetWorkspaceStatusResponse
* GetWorkspaceStatusResponse `object`: The changes that have occurred in the workspace since the base container version.
  * mergeConflict `array`: The merge conflict after sync.
    * items [MergeConflict](#mergeconflict)
  * workspaceChange `array`: Entities that have been changed in the workspace.
    * items [Entity](#entity)

### ListAccountsResponse
* ListAccountsResponse `object`: List Accounts Response.
  * account `array`: List of GTM Accounts that a user has access to.
    * items [Account](#account)
  * nextPageToken `string`: Continuation token for fetching the next page of results.

### ListContainerVersionsResponse
* ListContainerVersionsResponse `object`: List container versions response.
  * containerVersionHeader `array`: All container version headers of a GTM Container.
    * items [ContainerVersionHeader](#containerversionheader)
  * nextPageToken `string`: Continuation token for fetching the next page of results.

### ListContainersResponse
* ListContainersResponse `object`: List Containers Response.
  * container `array`: All Containers of a GTM Account.
    * items [Container](#container)
  * nextPageToken `string`: Continuation token for fetching the next page of results.

### ListEnabledBuiltInVariablesResponse
* ListEnabledBuiltInVariablesResponse `object`: A list of enabled built-in variables.
  * builtInVariable `array`: All GTM BuiltInVariables of a GTM container.
    * items [BuiltInVariable](#builtinvariable)
  * nextPageToken `string`: Continuation token for fetching the next page of results.

### ListEnvironmentsResponse
* ListEnvironmentsResponse `object`: List Environments Response.
  * environment `array`: All Environments of a GTM Container.
    * items [Environment](#environment)
  * nextPageToken `string`: Continuation token for fetching the next page of results.

### ListFoldersResponse
* ListFoldersResponse `object`: List Folders Response.
  * folder `array`: All GTM Folders of a GTM Container.
    * items [Folder](#folder)
  * nextPageToken `string`: Continuation token for fetching the next page of results.

### ListTagsResponse
* ListTagsResponse `object`: List Tags Response.
  * nextPageToken `string`: Continuation token for fetching the next page of results.
  * tag `array`: All GTM Tags of a GTM Container.
    * items [Tag](#tag)

### ListTemplatesResponse
* ListTemplatesResponse `object`
  * nextPageToken `string`: Continuation token for fetching the next page of results.
  * template `array`: All GTM Custom Templates of a GTM Container.
    * items [CustomTemplate](#customtemplate)

### ListTriggersResponse
* ListTriggersResponse `object`: List triggers response.
  * nextPageToken `string`: Continuation token for fetching the next page of results.
  * trigger `array`: All GTM Triggers of a GTM Container.
    * items [Trigger](#trigger)

### ListUserPermissionsResponse
* ListUserPermissionsResponse `object`: List user permissions response.
  * nextPageToken `string`: Continuation token for fetching the next page of results.
  * userPermission `array`: All GTM UserPermissions of a GTM Account.
    * items [UserPermission](#userpermission)

### ListVariablesResponse
* ListVariablesResponse `object`: List Variables Response.
  * nextPageToken `string`: Continuation token for fetching the next page of results.
  * variable `array`: All GTM Variables of a GTM Container.
    * items [Variable](#variable)

### ListWorkspacesResponse
* ListWorkspacesResponse `object`: A list of workspaces in a container.
  * nextPageToken `string`: Continuation token for fetching the next page of results.
  * workspace `array`: All Workspaces of a GTM Container.
    * items [Workspace](#workspace)

### ListZonesResponse
* ListZonesResponse `object`
  * nextPageToken `string`: Continuation token for fetching the next page of results.
  * zone `array`: All GTM Zones of a GTM Container.
    * items [Zone](#zone)

### MergeConflict
* MergeConflict `object`: Represents a merge conflict.
  * entityInBaseVersion [Entity](#entity)
  * entityInWorkspace [Entity](#entity)

### Parameter
* Parameter `object`: Represents a Google Tag Manager Parameter.
  * key `string`: The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
  * list `array`: This list parameter's parameters (keys will be ignored). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
    * items [Parameter](#parameter)
  * map `array`: This map parameter's parameters (must have keys; keys must be unique). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
    * items [Parameter](#parameter)
  * type `string` (values: typeUnspecified, template, integer, boolean, list, map, triggerReference, tagReference): The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
  * value `string`: A parameter's value (may contain variable references such as "{{myVariable}}") as appropriate to the specified type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update

### PublishContainerVersionResponse
* PublishContainerVersionResponse `object`: Publish container version response.
  * compilerError `boolean`: Compiler errors or not.
  * containerVersion [ContainerVersion](#containerversion)

### QuickPreviewResponse
* QuickPreviewResponse `object`: Response to quick previewing a workspace.
  * compilerError `boolean`: Were there compiler errors or not.
  * containerVersion [ContainerVersion](#containerversion)
  * syncStatus [SyncStatus](#syncstatus)

### RevertBuiltInVariableResponse
* RevertBuiltInVariableResponse `object`: The result of reverting a built-in variable in a workspace.
  * enabled `boolean`: Whether the built-in variable is enabled after reversion.

### RevertFolderResponse
* RevertFolderResponse `object`: The result of reverting folder changes in a workspace.
  * folder [Folder](#folder)

### RevertTagResponse
* RevertTagResponse `object`: The result of reverting a tag in a workspace.
  * tag [Tag](#tag)

### RevertTemplateResponse
* RevertTemplateResponse `object`: The result of reverting a template in a workspace.
  * template [CustomTemplate](#customtemplate)

### RevertTriggerResponse
* RevertTriggerResponse `object`: The result of reverting a trigger in a workspace.
  * trigger [Trigger](#trigger)

### RevertVariableResponse
* RevertVariableResponse `object`: The result of reverting a variable in a workspace.
  * variable [Variable](#variable)

### RevertZoneResponse
* RevertZoneResponse `object`: The result of reverting a zone in a workspace.
  * zone [Zone](#zone)

### SetupTag
* SetupTag `object`: Represents a reference to atag that fires before another tag in order to set up dependencies.
  * stopOnSetupFailure `boolean`: If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status.
  * tagName `string`: The name of the setup tag.

### SyncStatus
* SyncStatus `object`: The status of a workspace after synchronization.
  * mergeConflict `boolean`: Synchornization operation detected a merge conflict.
  * syncError `boolean`: An error occurred during the synchronization operation.

### SyncWorkspaceResponse
* SyncWorkspaceResponse `object`: A response after synchronizing the workspace to the latest container version.
  * mergeConflict `array`: The merge conflict after sync. If this field is not empty, the sync is still treated as successful. But a version cannot be created until all conflicts are resolved.
    * items [MergeConflict](#mergeconflict)
  * syncStatus [SyncStatus](#syncstatus)

### Tag
* Tag `object`: Represents a Google Tag Manager Tag.
  * accountId `string`: GTM Account ID.
  * blockingRuleId `array`: Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
    * items `string`
  * blockingTriggerId `array`: Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
    * items `string`
  * containerId `string`: GTM Container ID.
  * fingerprint `string`: The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.
  * firingRuleId `array`: Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
    * items `string`
  * firingTriggerId `array`: Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
    * items `string`
  * liveOnly `boolean`: If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
  * monitoringMetadata [Parameter](#parameter)
  * monitoringMetadataTagNameKey `string`: If non-empty, then the tag display name will be included in the monitoring metadata map using the key specified. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
  * name `string`: Tag display name. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
  * notes `string`: User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
  * parameter `array`: The tag's parameters. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
    * items [Parameter](#parameter)
  * parentFolderId `string`: Parent folder id.
  * path `string`: GTM Tag's API relative path.
  * paused `boolean`: Indicates whether the tag is paused, which prevents the tag from firing. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
  * priority [Parameter](#parameter)
  * scheduleEndMs `string`: The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
  * scheduleStartMs `string`: The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
  * setupTag `array`: The list of setup tags. Currently we only allow one.
    * items [SetupTag](#setuptag)
  * tagFiringOption `string` (values: tagFiringOptionUnspecified, unlimited, oncePerEvent, oncePerLoad): Option to fire this tag.
  * tagId `string`: The Tag ID uniquely identifies the GTM Tag.
  * tagManagerUrl `string`: Auto generated link to the tag manager UI
  * teardownTag `array`: The list of teardown tags. Currently we only allow one.
    * items [TeardownTag](#teardowntag)
  * type `string`: GTM Tag Type. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
  * workspaceId `string`: GTM Workspace ID.

### TeardownTag
* TeardownTag `object`: Represents a tag that fires after another tag in order to tear down dependencies.
  * stopTeardownOnFailure `boolean`: If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status.
  * tagName `string`: The name of the teardown tag.

### Trigger
* Trigger `object`: Represents a Google Tag Manager Trigger
  * accountId `string`: GTM Account ID.
  * autoEventFilter `array`: Used in the case of auto event tracking. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
    * items [Condition](#condition)
  * checkValidation [Parameter](#parameter)
  * containerId `string`: GTM Container ID.
  * continuousTimeMinMilliseconds [Parameter](#parameter)
  * customEventFilter `array`: Used in the case of custom event, which is fired iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
    * items [Condition](#condition)
  * eventName [Parameter](#parameter)
  * filter `array`: The trigger will only fire iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
    * items [Condition](#condition)
  * fingerprint `string`: The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified.
  * horizontalScrollPercentageList [Parameter](#parameter)
  * interval [Parameter](#parameter)
  * intervalSeconds [Parameter](#parameter)
  * limit [Parameter](#parameter)
  * maxTimerLengthSeconds [Parameter](#parameter)
  * name `string`: Trigger display name. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
  * notes `string`: User notes on how to apply this trigger in the container. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
  * parameter `array`: Additional parameters. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
    * items [Parameter](#parameter)
  * parentFolderId `string`: Parent folder id.
  * path `string`: GTM Trigger's API relative path.
  * selector [Parameter](#parameter)
  * tagManagerUrl `string`: Auto generated link to the tag manager UI
  * totalTimeMinMilliseconds [Parameter](#parameter)
  * triggerId `string`: The Trigger ID uniquely identifies the GTM Trigger.
  * type `string` (values: eventTypeUnspecified, pageview, domReady, windowLoaded, customEvent, triggerGroup, always, firebaseAppException, firebaseAppUpdate, firebaseCampaign, firebaseFirstOpen, firebaseInAppPurchase, firebaseNotificationDismiss, firebaseNotificationForeground, firebaseNotificationOpen, firebaseNotificationReceive, firebaseOsUpdate, firebaseSessionStart, firebaseUserEngagement, formSubmission, click, linkClick, jsError, historyChange, timer, ampClick, ampTimer, ampScroll, ampVisibility, youTubeVideo, scrollDepth, elementVisibility): Defines the data layer event that causes this trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
  * uniqueTriggerId [Parameter](#parameter)
  * verticalScrollPercentageList [Parameter](#parameter)
  * visibilitySelector [Parameter](#parameter)
  * visiblePercentageMax [Parameter](#parameter)
  * visiblePercentageMin [Parameter](#parameter)
  * waitForTags [Parameter](#parameter)
  * waitForTagsTimeout [Parameter](#parameter)
  * workspaceId `string`: GTM Workspace ID.

### UserPermission
* UserPermission `object`: Represents a user's permissions to an account and its container.
  * accountAccess [AccountAccess](#accountaccess)
  * accountId `string`: The Account ID uniquely identifies the GTM Account.
  * containerAccess `array`: GTM Container access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
    * items [ContainerAccess](#containeraccess)
  * emailAddress `string`: User's email address. @mutable tagmanager.accounts.permissions.create
  * path `string`: GTM UserPermission's API relative path.

### Variable
* Variable `object`: Represents a Google Tag Manager Variable.
  * accountId `string`: GTM Account ID.
  * containerId `string`: GTM Container ID.
  * disablingTriggerId `array`: For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
    * items `string`
  * enablingTriggerId `array`: For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
    * items `string`
  * fingerprint `string`: The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified.
  * formatValue [VariableFormatValue](#variableformatvalue)
  * name `string`: Variable display name. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
  * notes `string`: User notes on how to apply this variable in the container. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
  * parameter `array`: The variable's parameters. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
    * items [Parameter](#parameter)
  * parentFolderId `string`: Parent folder id.
  * path `string`: GTM Variable's API relative path.
  * scheduleEndMs `string`: The end timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
  * scheduleStartMs `string`: The start timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
  * tagManagerUrl `string`: Auto generated link to the tag manager UI
  * type `string`: GTM Variable Type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
  * variableId `string`: The Variable ID uniquely identifies the GTM Variable.
  * workspaceId `string`: GTM Workspace ID.

### VariableFormatValue
* VariableFormatValue `object`
  * caseConversionType `string` (values: none, lowercase, uppercase): The option to convert a string-type variable value to either lowercase or uppercase.
  * convertFalseToValue [Parameter](#parameter)
  * convertNullToValue [Parameter](#parameter)
  * convertTrueToValue [Parameter](#parameter)
  * convertUndefinedToValue [Parameter](#parameter)

### Workspace
* Workspace `object`: Represents a Google Tag Manager Container Workspace.
  * accountId `string`: GTM Account ID.
  * containerId `string`: GTM Container ID.
  * description `string`: Workspace description. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update
  * fingerprint `string`: The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is modified.
  * name `string`: Workspace display name. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update
  * path `string`: GTM Workspace's API relative path.
  * tagManagerUrl `string`: Auto generated link to the tag manager UI
  * workspaceId `string`: The Workspace ID uniquely identifies the GTM Workspace.

### Zone
* Zone `object`: Represents a Google Tag Manager Zone's contents.
  * accountId `string`: GTM Account ID.
  * boundary [ZoneBoundary](#zoneboundary)
  * childContainer `array`: Containers that are children of this Zone.
    * items [ZoneChildContainer](#zonechildcontainer)
  * containerId `string`: GTM Container ID.
  * fingerprint `string`: The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified.
  * name `string`: Zone display name.
  * notes `string`: User notes on how to apply this zone in the container.
  * path `string`: GTM Zone's API relative path.
  * tagManagerUrl `string`: Auto generated link to the tag manager UI
  * typeRestriction [ZoneTypeRestriction](#zonetyperestriction)
  * workspaceId `string`: GTM Workspace ID.
  * zoneId `string`: The Zone ID uniquely identifies the GTM Zone.

### ZoneBoundary
* ZoneBoundary `object`: Represents a Zone's boundaries.
  * condition `array`: The conditions that, when conjoined, make up the boundary.
    * items [Condition](#condition)
  * customEvaluationTriggerId `array`: Custom evaluation trigger IDs. A zone will evaluate its boundary conditions when any of the listed triggers are true.
    * items `string`

### ZoneChildContainer
* ZoneChildContainer `object`: Represents a child container of a Zone.
  * nickname `string`: The zone's nickname for the child container.
  * publicId `string`: The child container's public id.

### ZoneTypeRestriction
* ZoneTypeRestriction `object`: Represents a Zone's type restrictions.
  * enable `boolean`: True if type restrictions have been enabled for this Zone.
  * whitelistedTypeId `array`: List of type public ids that have been whitelisted for use in this Zone.
    * items `string`


