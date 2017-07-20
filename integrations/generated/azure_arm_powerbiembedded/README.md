# @datafire/azure_arm_powerbiembedded

Client library for Power BI Embedded Management Client

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_powerbiembedded
```

```js
let datafire = require('datafire');
let azure_arm_powerbiembedded = require('@datafire/azure_arm_powerbiembedded').actions;
let context = new datafire.Context();

azure_arm_powerbiembedded.getAvailableOperations({}, context).then(data => {
  console.log(data);
})
```

## Description
Client to manage your Power BI Embedded workspace collections and retrieve workspaces.

## Actions
### getAvailableOperations
Indicates which operations can be performed by the Power BI Resource Provider.


```js
azure_arm_powerbiembedded.getAvailableOperations({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.

### WorkspaceCollections_checkNameAvailability
Verify the specified Power BI Workspace Collection name is valid and not already in use.


```js
azure_arm_powerbiembedded.WorkspaceCollections_checkNameAvailability({
  "subscriptionId": "",
  "location": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* location (string) **required** - Azure location
* api-version (string) **required** - Client Api Version.
* body (object) **required**

### WorkspaceCollections_listBySubscription
Retrieves all existing Power BI workspace collections in the specified subscription.


```js
azure_arm_powerbiembedded.WorkspaceCollections_listBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client Api Version.

### WorkspaceCollections_migrate
Migrates an existing Power BI Workspace Collection to a different resource group and/or subscription.


```js
azure_arm_powerbiembedded.WorkspaceCollections_migrate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - Azure resource group
* api-version (string) **required** - Client Api Version.
* body (object) **required**

### WorkspaceCollections_listByResourceGroup
Retrieves all existing Power BI workspace collections in the specified resource group.


```js
azure_arm_powerbiembedded.WorkspaceCollections_listByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - Azure resource group
* api-version (string) **required** - Client Api Version.

### WorkspaceCollections_delete
Delete a Power BI Workspace Collection.


```js
azure_arm_powerbiembedded.WorkspaceCollections_delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceCollectionName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - Azure resource group
* workspaceCollectionName (string) **required** - Power BI Embedded Workspace Collection name
* api-version (string) **required** - Client Api Version.

### WorkspaceCollections_getByName
Retrieves an existing Power BI Workspace Collection.


```js
azure_arm_powerbiembedded.WorkspaceCollections_getByName({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceCollectionName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - Azure resource group
* workspaceCollectionName (string) **required** - Power BI Embedded Workspace Collection name
* api-version (string) **required** - Client Api Version.

### WorkspaceCollections_update
Update an existing Power BI Workspace Collection with the specified properties.


```js
azure_arm_powerbiembedded.WorkspaceCollections_update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceCollectionName": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - Azure resource group
* workspaceCollectionName (string) **required** - Power BI Embedded Workspace Collection name
* api-version (string) **required** - Client Api Version.
* body (object) **required**

### WorkspaceCollections_create
Creates a new Power BI Workspace Collection with the specified properties. A Power BI Workspace Collection contains one or more workspaces, and can be used to provision keys that provide API access to those workspaces.


```js
azure_arm_powerbiembedded.WorkspaceCollections_create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceCollectionName": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - Azure resource group
* workspaceCollectionName (string) **required** - Power BI Embedded Workspace Collection name
* api-version (string) **required** - Client Api Version.
* body (object) **required**

### WorkspaceCollections_getAccessKeys
Retrieves the primary and secondary access keys for the specified Power BI Workspace Collection.


```js
azure_arm_powerbiembedded.WorkspaceCollections_getAccessKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceCollectionName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - Azure resource group
* workspaceCollectionName (string) **required** - Power BI Embedded Workspace Collection name
* api-version (string) **required** - Client Api Version.

### WorkspaceCollections_regenerateKey
Regenerates the primary or secondary access key for the specified Power BI Workspace Collection.


```js
azure_arm_powerbiembedded.WorkspaceCollections_regenerateKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceCollectionName": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - Azure resource group
* workspaceCollectionName (string) **required** - Power BI Embedded Workspace Collection name
* api-version (string) **required** - Client Api Version.
* body (object) **required**

### Workspaces_List
Retrieves all existing Power BI workspaces in the specified workspace collection.


```js
azure_arm_powerbiembedded.Workspaces_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceCollectionName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - Azure resource group
* workspaceCollectionName (string) **required** - Power BI Embedded Workspace Collection name
* api-version (string) **required** - Client Api Version.

