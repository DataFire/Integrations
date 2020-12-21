# @datafire/azure_databricks

Client library for DatabricksClient

## Installation and Usage
```bash
npm install --save @datafire/azure_databricks
```
```js
let azure_databricks = require('@datafire/azure_databricks').create({
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

ARM Databricks

## Actions

### Operations_List
Lists all of the available RP operations.


```js
azure_databricks.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [OperationListResult](#operationlistresult)

### Workspaces_ListBySubscription
Gets all the workspaces within a subscription.


```js
azure_databricks.Workspaces_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [WorkspaceListResult](#workspacelistresult)

### Workspaces_ListByResourceGroup
Gets all the workspaces within a resource group.


```js
azure_databricks.Workspaces_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [WorkspaceListResult](#workspacelistresult)

### Workspaces_Delete
Deletes the workspace.


```js
azure_databricks.Workspaces_Delete({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### Workspaces_Get
Gets the workspace.


```js
azure_databricks.Workspaces_Get({
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [Workspace](#workspace)

### Workspaces_Update
Updates a workspace.


```js
azure_databricks.Workspaces_Update({
  "parameters": {},
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [WorkspaceUpdate](#workspaceupdate)
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [Workspace](#workspace)

### Workspaces_CreateOrUpdate
Creates a new workspace.


```js
azure_databricks.Workspaces_CreateOrUpdate({
  "parameters": null,
  "resourceGroupName": "",
  "workspaceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [Workspace](#workspace)
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * workspaceName **required** `string`: The name of the workspace.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [Workspace](#workspace)



## Definitions

### ErrorDetail
* Error details. `object`
  * code **required** `string`: The error's code.
  * message **required** `string`: A human readable error message.
  * target `string`: Indicates which property in the request is responsible for the error.

### ErrorInfo
* The code and message for an error. `object`
  * code **required** `string`: A machine readable error code.
  * details `array`: error details.
    * items [ErrorDetail](#errordetail)
  * innererror `string`: Inner error details if they exist.
  * message **required** `string`: A human readable error message.

### ErrorResponse
* Error response. `object`: Contains details when the response code indicates an error.
  * error **required** [ErrorInfo](#errorinfo)

### Operation
* Operation `object`: REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.ResourceProvider
    * resource `string`: Resource on which the operation is performed.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list Resource Provider operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Resource Provider operations supported by the Resource Provider resource provider.
    * items [Operation](#operation)

### ProvisioningState
* ProvisioningState `string` (values: Accepted, Running, Ready, Creating, Created, Deleting, Deleted, Canceled, Failed, Succeeded, Updating): Provisioning status of the workspace.

### Resource
* Resource `object`: The core properties of ARM resources
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### Sku
* Sku `object`: SKU for the resource.
  * name **required** `string`: The SKU name.
  * tier `string`: The SKU tier.

### TrackedResource
* TrackedResource `object`: The resource model definition for a ARM tracked top level resource
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### Workspace
* Workspace `object`: Information about workspace.
  * properties **required** [WorkspaceProperties](#workspaceproperties)
  * sku [Sku](#sku)
  * location **required** `string`: The geo-location where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### WorkspaceCustomBooleanParameter
* WorkspaceCustomBooleanParameter `object`: The value which should be used for this field.
  * type [WorkspaceCustomParameterType](#workspacecustomparametertype)
  * value **required** `boolean`: The value which should be used for this field.

### WorkspaceCustomObjectParameter
* WorkspaceCustomObjectParameter `object`: The value which should be used for this field.
  * type [WorkspaceCustomParameterType](#workspacecustomparametertype)
  * value **required** `object`: The value which should be used for this field.

### WorkspaceCustomParameterType
* WorkspaceCustomParameterType `string` (values: Bool, Object, String): Provisioning status of the workspace.

### WorkspaceCustomParameters
* WorkspaceCustomParameters `object`: Custom Parameters used for Cluster Creation.
  * amlWorkspaceId [WorkspaceCustomStringParameter](#workspacecustomstringparameter)
  * customPrivateSubnetName [WorkspaceCustomStringParameter](#workspacecustomstringparameter)
  * customPublicSubnetName [WorkspaceCustomStringParameter](#workspacecustomstringparameter)
  * customVirtualNetworkId [WorkspaceCustomStringParameter](#workspacecustomstringparameter)
  * enableNoPublicIp [WorkspaceCustomBooleanParameter](#workspacecustombooleanparameter)
  * loadBalancerBackendPoolName [WorkspaceCustomStringParameter](#workspacecustomstringparameter)
  * loadBalancerId [WorkspaceCustomStringParameter](#workspacecustomstringparameter)
  * relayNamespaceName [WorkspaceCustomStringParameter](#workspacecustomstringparameter)
  * resourceTags [WorkspaceCustomObjectParameter](#workspacecustomobjectparameter)
  * storageAccountName [WorkspaceCustomStringParameter](#workspacecustomstringparameter)
  * storageAccountSkuName [WorkspaceCustomStringParameter](#workspacecustomstringparameter)
  * vnetAddressPrefix [WorkspaceCustomStringParameter](#workspacecustomstringparameter)

### WorkspaceCustomStringParameter
* WorkspaceCustomStringParameter `object`: The Value.
  * type [WorkspaceCustomParameterType](#workspacecustomparametertype)
  * value **required** `string`: The value which should be used for this field.

### WorkspaceListResult
* WorkspaceListResult `object`: List of workspaces.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: The array of workspaces.
    * items [Workspace](#workspace)

### WorkspaceProperties
* WorkspaceProperties `object`: The workspace properties.
  * authorizations `array`: The workspace provider authorizations.
    * items [WorkspaceProviderAuthorization](#workspaceproviderauthorization)
  * managedResourceGroupId **required** `string`: The managed resource group Id.
  * parameters [WorkspaceCustomParameters](#workspacecustomparameters)
  * provisioningState [ProvisioningState](#provisioningstate)
  * uiDefinitionUri `string`: The blob URI where the UI definition file is located.

### WorkspaceProviderAuthorization
* WorkspaceProviderAuthorization `object`: The workspace provider authorization.
  * principalId **required** `string`: The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the workspace resources.
  * roleDefinitionId **required** `string`: The provider's role definition identifier. This role will define all the permissions that the provider must have on the workspace's container resource group. This role definition cannot have permission to delete the resource group.

### WorkspaceUpdate
* WorkspaceUpdate `object`: An update to a workspace.
  * tags `object`: Resource tags.


