# @datafire/azure_machinelearning_workspaces

Client library for Machine Learning Workspaces Management Client

## Installation and Usage
```bash
npm install --save @datafire/azure_machinelearning_workspaces
```
```js
let azure_machinelearning_workspaces = require('@datafire/azure_machinelearning_workspaces').create({
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

These APIs allow end users to operate on Azure Machine Learning Workspace resources. They support CRUD operations for Azure Machine Learning Workspaces.

## Actions

### Operations_List
Lists all of the available Azure Machine Learning Studio REST API operations.


```js
azure_machinelearning_workspaces.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.

#### Output
* output [OperationListResult](#operationlistresult)

### Workspaces_List
Lists all the available machine learning workspaces under the specified subscription.


```js
azure_machinelearning_workspaces.Workspaces_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.

#### Output
* output [WorkspaceListResult](#workspacelistresult)

### Workspaces_ListByResourceGroup
Lists all the available machine learning workspaces under the specified resource group.


```js
azure_machinelearning_workspaces.Workspaces_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning workspace belongs.

#### Output
* output [WorkspaceListResult](#workspacelistresult)

### Workspaces_Delete
Deletes a machine learning workspace.


```js
azure_machinelearning_workspaces.Workspaces_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning workspace belongs.
  * workspaceName **required** `string`: The name of the machine learning workspace.

#### Output
*Output schema unknown*

### Workspaces_Get
Gets the properties of the specified machine learning workspace.


```js
azure_machinelearning_workspaces.Workspaces_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning workspace belongs.
  * workspaceName **required** `string`: The name of the machine learning workspace.

#### Output
* output [Workspace](#workspace)

### Workspaces_Update
Updates a machine learning workspace with the specified parameters.


```js
azure_machinelearning_workspaces.Workspaces_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning workspace belongs.
  * workspaceName **required** `string`: The name of the machine learning workspace.
  * parameters **required** [WorkspaceUpdateParameters](#workspaceupdateparameters)

#### Output
* output [Workspace](#workspace)

### Workspaces_CreateOrUpdate
Creates or updates a workspace with the specified parameters.


```js
azure_machinelearning_workspaces.Workspaces_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning workspace belongs.
  * workspaceName **required** `string`: The name of the machine learning workspace.
  * parameters **required** [Workspace](#workspace)

#### Output
* output [Workspace](#workspace)

### Workspaces_ListWorkspaceKeys
List the authorization keys associated with this workspace.


```js
azure_machinelearning_workspaces.Workspaces_ListWorkspaceKeys({
  "api-version": "",
  "subscriptionId": "",
  "workspaceName": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * workspaceName **required** `string`: The name of the machine learning workspace.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning workspace belongs.

#### Output
* output [WorkspaceKeysResponse](#workspacekeysresponse)

### Workspaces_ResyncStorageKeys
Resync storage keys associated with this workspace.


```js
azure_machinelearning_workspaces.Workspaces_ResyncStorageKeys({
  "api-version": "",
  "subscriptionId": "",
  "workspaceName": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * workspaceName **required** `string`: The name of the machine learning workspace.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning workspace belongs.

#### Output
*Output schema unknown*



## Definitions

### ErrorResponse
* ErrorResponse `object`: The error response send when an operation fails.
  * code **required** `string`: error code
  * message **required** `string`: error message

### Operation
* Operation `object`: Azure Machine Learning Studio REST API operation
  * display `object`: Display name of operation
    * description `string`: The description for the operation.
    * operation `string`: The operation that users can perform.
    * provider `string`: The resource provider name: Microsoft.MachineLearning
    * resource `string`: The resource on which the operation is performed.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: An array of operations supported by the resource provider.
  * value `array`: List of AML Studio operations supported by the AML Studio resource provider.
    * items [Operation](#operation)

### Resource
* Resource `object`: An Azure resource.
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * sku [Sku](#sku)
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### Sku
* Sku `object`: Sku of the resource
  * name `string`: Name of the sku
  * tier `string`: Tier of the sku like Basic or Enterprise

### Workspace
* Workspace `object`: An object that represents a machine learning workspace.
  * properties [WorkspaceProperties](#workspaceproperties)
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * sku [Sku](#sku)
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### WorkspaceKeysResponse
* WorkspaceKeysResponse `object`: Workspace authorization keys for a workspace.
  * primaryToken `string`: Primary authorization key for this workspace.
  * secondaryToken `string`: Secondary authorization key for this workspace.

### WorkspaceListResult
* WorkspaceListResult `object`: The result of a request to list machine learning workspace keys.
  * nextLink `string`: The URI that can be used to request the next list of machine learning workspaces.
  * value `array`: The list of machine learning workspaces. Since this list may be incomplete, the nextLink field should be used to request the next list of machine learning workspaces.
    * items [Workspace](#workspace)

### WorkspaceProperties
* WorkspaceProperties `object`: The properties of a machine learning workspace.
  * creationTime `string`: The creation time for this workspace resource.
  * keyVaultIdentifierId `string`: The key vault identifier used for encrypted workspaces.
  * ownerEmail **required** `string`: The email id of the owner for this workspace.
  * studioEndpoint `string`: The regional endpoint for the machine learning studio service which hosts this workspace.
  * userStorageAccountId **required** `string`: The fully qualified arm id of the storage account associated with this workspace.
  * workspaceId `string`: The immutable id associated with this workspace.
  * workspaceState `string` (values: Deleted, Enabled, Disabled, Migrated, Updated, Registered, Unregistered): The current state of workspace resource.
  * workspaceType `string` (values: Production, Free, Anonymous, PaidStandard, PaidPremium): The type of this workspace.

### WorkspacePropertiesUpdateParameters
* WorkspacePropertiesUpdateParameters `object`: The parameters for updating the properties of a machine learning workspace.
  * keyVaultIdentifierId `string`: The key vault identifier used for encrypted workspaces.
  * sku [Sku](#sku)
  * workspaceState `string` (values: Deleted, Enabled, Disabled, Migrated, Updated, Registered, Unregistered): The current state of workspace resource.

### WorkspaceUpdateParameters
* WorkspaceUpdateParameters `object`: The parameters for updating a machine learning workspace.
  * properties [WorkspacePropertiesUpdateParameters](#workspacepropertiesupdateparameters)
  * tags `object`: The resource tags for the machine learning workspace.


