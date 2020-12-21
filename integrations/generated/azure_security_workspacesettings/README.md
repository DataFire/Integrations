# @datafire/azure_security_workspacesettings

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_workspacesettings
```
```js
let azure_security_workspacesettings = require('@datafire/azure_security_workspacesettings').create({
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

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### WorkspaceSettings_List
Settings about where we should store your security data and logs. If the result is empty, it means that no custom-workspace configuration was set


```js
azure_security_workspacesettings.WorkspaceSettings_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID

#### Output
* output [WorkspaceSettingList](#workspacesettinglist)

### WorkspaceSettings_Delete
Deletes the custom workspace settings for this subscription. new VMs will report to the default workspace


```js
azure_security_workspacesettings.WorkspaceSettings_Delete({
  "api-version": "",
  "subscriptionId": "",
  "workspaceSettingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * workspaceSettingName **required** `string`: Name of the security setting

#### Output
*Output schema unknown*

### WorkspaceSettings_Get
Settings about where we should store your security data and logs. If the result is empty, it means that no custom-workspace configuration was set


```js
azure_security_workspacesettings.WorkspaceSettings_Get({
  "api-version": "",
  "subscriptionId": "",
  "workspaceSettingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * workspaceSettingName **required** `string`: Name of the security setting

#### Output
* output [WorkspaceSetting](#workspacesetting)

### WorkspaceSettings_Update
Settings about where we should store your security data and logs


```js
azure_security_workspacesettings.WorkspaceSettings_Update({
  "api-version": "",
  "subscriptionId": "",
  "workspaceSettingName": "",
  "workspaceSetting": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * workspaceSettingName **required** `string`: Name of the security setting
  * workspaceSetting **required** [WorkspaceSetting](#workspacesetting)

#### Output
* output [WorkspaceSetting](#workspacesetting)

### WorkspaceSettings_Create
creating settings about where we should store your security data and logs


```js
azure_security_workspacesettings.WorkspaceSettings_Create({
  "api-version": "",
  "subscriptionId": "",
  "workspaceSettingName": "",
  "workspaceSetting": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * workspaceSettingName **required** `string`: Name of the security setting
  * workspaceSetting **required** [WorkspaceSetting](#workspacesetting)

#### Output
* output [WorkspaceSetting](#workspacesetting)



## Definitions

### WorkspaceSetting
* WorkspaceSetting `object`: Configures where to store the OMS agent data for workspaces under a scope
  * properties [WorkspaceSettingProperties](#workspacesettingproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### WorkspaceSettingList
* WorkspaceSettingList `object`: List of workspace settings response
  * nextLink `string`: The URI to fetch the next page.
  * value **required** `array`: List of workspace settings
    * items [WorkspaceSetting](#workspacesetting)

### WorkspaceSettingProperties
* WorkspaceSettingProperties `object`: Workspace setting data
  * scope **required** `string`: All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
  * workspaceId **required** `string`: The full Azure ID of the workspace to save the data in


