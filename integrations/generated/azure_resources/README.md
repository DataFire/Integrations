# @datafire/azure_resources

Client library for ResourceManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_resources
```
```js
let azure_resources = require('@datafire/azure_resources').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_resources.Providers_List({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Provides operations for working with resources and resource groups.

## Actions

### Providers_List
Gets all resource providers for a subscription.


```js
azure_resources.Providers_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $top `integer`: The number of results to return. If null is passed returns all deployments.
  * $expand `string`: The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ProviderListResult](#providerlistresult)

### Providers_Get
Gets the specified resource provider.


```js
azure_resources.Providers_Get({
  "resourceProviderNamespace": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $expand `string`: The $expand query parameter. For example, to include property aliases in response, use $expand=resourceTypes/aliases.
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [Provider](#provider)

### Providers_Register
Registers a subscription with a resource provider.


```js
azure_resources.Providers_Register({
  "resourceProviderNamespace": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider to register.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [Provider](#provider)

### Providers_Unregister
Unregisters a subscription from a resource provider.


```js
azure_resources.Providers_Unregister({
  "resourceProviderNamespace": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider to unregister.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [Provider](#provider)

### Resources_ListByResourceGroup
Get all the resources for a resource group.


```js
azure_resources.Resources_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group with the resources to get.
  * $filter `string`: The filter to apply on the operation.
  * $expand `string`: The $expand query parameter
  * $top `integer`: The number of results to return. If null is passed, returns all resources.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ResourceListResult](#resourcelistresult)

### Resources_MoveResources
The resources to move must be in the same source resource group. The target resource group may be in a different subscription. When moving resources, both the source group and the target group are locked for the duration of the operation. Write and delete operations are blocked on the groups until the move completes. 


```js
azure_resources.Resources_MoveResources({
  "sourceResourceGroupName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * sourceResourceGroupName **required** `string`: The name of the resource group containing the resources to move.
  * parameters **required** [ResourcesMoveInfo](#resourcesmoveinfo)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### Resources_ValidateMoveResources
This operation checks whether the specified resources can be moved to the target. The resources to move must be in the same source resource group. The target resource group may be in a different subscription. If validation succeeds, it returns HTTP response code 204 (no content). If validation fails, it returns HTTP response code 409 (Conflict) with an error message. Retrieve the URL in the Location header value to check the result of the long-running operation.


```js
azure_resources.Resources_ValidateMoveResources({
  "sourceResourceGroupName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * sourceResourceGroupName **required** `string`: The name of the resource group containing the resources to validate for move.
  * parameters **required** [ResourcesMoveInfo](#resourcesmoveinfo)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### ResourceGroups_List
Gets all the resource groups for a subscription.


```js
azure_resources.ResourceGroups_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filter to apply on the operation.
  * $top `integer`: The number of results to return. If null is passed, returns all resource groups.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ResourceGroupListResult](#resourcegrouplistresult)

### ResourceGroups_Delete
When you delete a resource group, all of its resources are also deleted. Deleting a resource group deletes all of its template deployments and currently stored operations.


```js
azure_resources.ResourceGroups_Delete({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to delete. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### ResourceGroups_Get
Gets a resource group.


```js
azure_resources.ResourceGroups_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ResourceGroup](#resourcegroup)

### ResourceGroups_CheckExistence
Checks whether a resource group exists.


```js
azure_resources.ResourceGroups_CheckExistence({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to check. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### ResourceGroups_Update
Resource groups can be updated through a simple PATCH operation to a group address. The format of the request is the same as that for creating a resource group. If a field is unspecified, the current value is retained.


```js
azure_resources.ResourceGroups_Update({
  "resourceGroupName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to update. The name is case insensitive.
  * parameters **required** [ResourceGroupPatchable](#resourcegrouppatchable)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ResourceGroup](#resourcegroup)

### ResourceGroups_CreateOrUpdate
Creates or updates a resource group.


```js
azure_resources.ResourceGroups_CreateOrUpdate({
  "resourceGroupName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to create or update.
  * parameters **required** [ResourceGroup](#resourcegroup)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ResourceGroup](#resourcegroup)

### DeploymentOperations_List
Gets all deployments operations for a deployment.


```js
azure_resources.DeploymentOperations_List({
  "resourceGroupName": "",
  "deploymentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * deploymentName **required** `string`: The name of the deployment with the operation to get.
  * $top `integer`: The number of results to return.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [DeploymentOperationsListResult](#deploymentoperationslistresult)

### DeploymentOperations_Get
Gets a deployments operation.


```js
azure_resources.DeploymentOperations_Get({
  "resourceGroupName": "",
  "deploymentName": "",
  "operationId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * deploymentName **required** `string`: The name of the deployment.
  * operationId **required** `string`: The ID of the operation to get.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [DeploymentOperation](#deploymentoperation)

### ResourceGroups_ExportTemplate
Captures the specified resource group as a template.


```js
azure_resources.ResourceGroups_ExportTemplate({
  "resourceGroupName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to export as a template.
  * parameters **required** [ExportTemplateRequest](#exporttemplaterequest)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ResourceGroupExportResult](#resourcegroupexportresult)

### Deployments_ListByResourceGroup
Get all the deployments for a resource group.


```js
azure_resources.Deployments_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group with the deployments to get. The name is case insensitive.
  * $filter `string`: The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'.
  * $top `integer`: The number of results to get. If null is passed, returns all deployments.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [DeploymentListResult](#deploymentlistresult)

### Deployments_Delete
A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. Deleting a template deployment does not affect the state of the resource group. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.


```js
azure_resources.Deployments_Delete({
  "resourceGroupName": "",
  "deploymentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group with the deployment to delete. The name is case insensitive.
  * deploymentName **required** `string`: The name of the deployment to delete.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### Deployments_Get
Gets a deployment.


```js
azure_resources.Deployments_Get({
  "resourceGroupName": "",
  "deploymentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * deploymentName **required** `string`: The name of the deployment to get.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [DeploymentExtended](#deploymentextended)

### Deployments_CheckExistence
Checks whether the deployment exists.


```js
azure_resources.Deployments_CheckExistence({
  "resourceGroupName": "",
  "deploymentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group with the deployment to check. The name is case insensitive.
  * deploymentName **required** `string`: The name of the deployment to check.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### Deployments_CreateOrUpdate
You can provide the template and parameters directly in the request or link to JSON files.


```js
azure_resources.Deployments_CreateOrUpdate({
  "resourceGroupName": "",
  "deploymentName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to deploy the resources to. The name is case insensitive. The resource group must already exist.
  * deploymentName **required** `string`: The name of the deployment.
  * parameters **required** [Deployment](#deployment)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [DeploymentExtended](#deploymentextended)

### Deployments_Cancel
You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resource group partially deployed.


```js
azure_resources.Deployments_Cancel({
  "resourceGroupName": "",
  "deploymentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * deploymentName **required** `string`: The name of the deployment to cancel.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### Deployments_ExportTemplate
Exports the template used for specified deployment.


```js
azure_resources.Deployments_ExportTemplate({
  "resourceGroupName": "",
  "deploymentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * deploymentName **required** `string`: The name of the deployment from which to get the template.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [DeploymentExportResult](#deploymentexportresult)

### Deployments_Validate
Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..


```js
azure_resources.Deployments_Validate({
  "resourceGroupName": "",
  "deploymentName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group the template will be deployed to. The name is case insensitive.
  * deploymentName **required** `string`: The name of the deployment.
  * parameters **required** [Deployment](#deployment)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [DeploymentValidateResult](#deploymentvalidateresult)

### Resources_Delete
Deletes a resource.


```js
azure_resources.Resources_Delete({
  "resourceGroupName": "",
  "resourceProviderNamespace": "",
  "parentResourcePath": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource to delete. The name is case insensitive.
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider.
  * parentResourcePath **required** `string`: The parent resource identity.
  * resourceType **required** `string`: The resource type.
  * resourceName **required** `string`: The name of the resource to delete.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### Resources_Get
Gets a resource.


```js
azure_resources.Resources_Get({
  "resourceGroupName": "",
  "resourceProviderNamespace": "",
  "parentResourcePath": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the resource to get. The name is case insensitive.
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider.
  * parentResourcePath **required** `string`: The parent resource identity.
  * resourceType **required** `string`: The resource type of the resource.
  * resourceName **required** `string`: The name of the resource to get.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [GenericResource](#genericresource)

### Resources_CheckExistence
Checks whether a resource exists.


```js
azure_resources.Resources_CheckExistence({
  "resourceGroupName": "",
  "resourceProviderNamespace": "",
  "parentResourcePath": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the resource to check. The name is case insensitive.
  * resourceProviderNamespace **required** `string`: The resource provider of the resource to check.
  * parentResourcePath **required** `string`: The parent resource identity.
  * resourceType **required** `string`: The resource type.
  * resourceName **required** `string`: The name of the resource to check whether it exists.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### Resources_Update
Updates a resource.


```js
azure_resources.Resources_Update({
  "resourceGroupName": "",
  "resourceProviderNamespace": "",
  "parentResourcePath": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": "",
  "parameters": null,
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group for the resource. The name is case insensitive.
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider.
  * parentResourcePath **required** `string`: The parent resource identity.
  * resourceType **required** `string`: The resource type of the resource to update.
  * resourceName **required** `string`: The name of the resource to update.
  * api-version **required** `string`: The API version to use for the operation.
  * parameters **required** [GenericResource](#genericresource)
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [GenericResource](#genericresource)

### Resources_CreateOrUpdate
Creates a resource.


```js
azure_resources.Resources_CreateOrUpdate({
  "resourceGroupName": "",
  "resourceProviderNamespace": "",
  "parentResourcePath": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": "",
  "parameters": null,
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group for the resource. The name is case insensitive.
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider.
  * parentResourcePath **required** `string`: The parent resource identity.
  * resourceType **required** `string`: The resource type of the resource to create.
  * resourceName **required** `string`: The name of the resource to create.
  * api-version **required** `string`: The API version to use for the operation.
  * parameters **required** [GenericResource](#genericresource)
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [GenericResource](#genericresource)

### Resources_List
Get all the resources in a subscription.


```js
azure_resources.Resources_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filter to apply on the operation.
  * $expand `string`: The $expand query parameter.
  * $top `integer`: The number of results to return. If null is passed, returns all resource groups.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ResourceListResult](#resourcelistresult)

### Tags_List
Gets the names and values of all resource tags that are defined in a subscription.


```js
azure_resources.Tags_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [TagsListResult](#tagslistresult)

### Tags_Delete
You must remove all values from a resource tag before you can delete it.


```js
azure_resources.Tags_Delete({
  "tagName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * tagName **required** `string`: The name of the tag.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### Tags_CreateOrUpdate
The tag name can have a maximum of 512 characters and is case insensitive. Tag names created by Azure have prefixes of microsoft, azure, or windows. You cannot create tags with one of these prefixes.


```js
azure_resources.Tags_CreateOrUpdate({
  "tagName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * tagName **required** `string`: The name of the tag to create.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [TagDetails](#tagdetails)

### Tags_DeleteValue
Deletes a tag value.


```js
azure_resources.Tags_DeleteValue({
  "tagName": "",
  "tagValue": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * tagName **required** `string`: The name of the tag.
  * tagValue **required** `string`: The value of the tag to delete.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### Tags_CreateOrUpdateValue
Creates a tag value. The name of the tag must already exist.


```js
azure_resources.Tags_CreateOrUpdateValue({
  "tagName": "",
  "tagValue": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * tagName **required** `string`: The name of the tag.
  * tagValue **required** `string`: The value of the tag to create.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [TagValue](#tagvalue)

### Resources_DeleteById
Deletes a resource by ID.


```js
azure_resources.Resources_DeleteById({
  "resourceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The fully qualified ID of the resource, including the resource name and resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
  * api-version **required** `string`: The API version to use for the operation.

#### Output
*Output schema unknown*

### Resources_GetById
Gets a resource by ID.


```js
azure_resources.Resources_GetById({
  "resourceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The fully qualified ID of the resource, including the resource name and resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [GenericResource](#genericresource)

### Resources_CheckExistenceById
Checks by ID whether a resource exists.


```js
azure_resources.Resources_CheckExistenceById({
  "resourceId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The fully qualified ID of the resource, including the resource name and resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
  * api-version **required** `string`: The API version to use for the operation.

#### Output
*Output schema unknown*

### Resources_UpdateById
Updates a resource by ID.


```js
azure_resources.Resources_UpdateById({
  "resourceId": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The fully qualified ID of the resource, including the resource name and resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
  * api-version **required** `string`: The API version to use for the operation.
  * parameters **required** [GenericResource](#genericresource)

#### Output
* output [GenericResource](#genericresource)

### Resources_CreateOrUpdateById
Create a resource by ID.


```js
azure_resources.Resources_CreateOrUpdateById({
  "resourceId": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The fully qualified ID of the resource, including the resource name and resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
  * api-version **required** `string`: The API version to use for the operation.
  * parameters **required** [GenericResource](#genericresource)

#### Output
* output [GenericResource](#genericresource)



## Definitions

### AliasPathType
* AliasPathType `object`: The type of the paths for alias. 
  * apiVersions `array`: The API versions.
    * items `string`
  * path `string`: The path of an alias.

### AliasType
* AliasType `object`: The alias type. 
  * name `string`: The alias name.
  * paths `array`: The paths for an alias.
    * items [AliasPathType](#aliaspathtype)

### BasicDependency
* BasicDependency `object`: Deployment dependency information.
  * id `string`: The ID of the dependency.
  * resourceName `string`: The dependency resource name.
  * resourceType `string`: The dependency resource type.

### DebugSetting
* DebugSetting `object`
  * detailLevel `string`: Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations.

### Dependency
* Dependency `object`: Deployment dependency information.
  * dependsOn `array`: The list of dependencies.
    * items [BasicDependency](#basicdependency)
  * id `string`: The ID of the dependency.
  * resourceName `string`: The dependency resource name.
  * resourceType `string`: The dependency resource type.

### Deployment
* Deployment `object`: Deployment operation parameters.
  * properties **required** [DeploymentProperties](#deploymentproperties)

### DeploymentExportResult
* DeploymentExportResult `object`: The deployment export result. 
  * template `object`: The template content.

### DeploymentExtended
* DeploymentExtended `object`: Deployment information.
  * id `string`: The ID of the deployment.
  * name **required** `string`: The name of the deployment.
  * properties [DeploymentPropertiesExtended](#deploymentpropertiesextended)

### DeploymentExtendedFilter
* DeploymentExtendedFilter `object`: Deployment filter.
  * provisioningState `string`: The provisioning state.

### DeploymentListResult
* DeploymentListResult `object`: List of deployments.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of deployments.
    * items [DeploymentExtended](#deploymentextended)

### DeploymentOperation
* DeploymentOperation `object`: Deployment operation information.
  * id `string`: Full deployment operation ID.
  * operationId `string`: Deployment operation ID.
  * properties [DeploymentOperationProperties](#deploymentoperationproperties)

### DeploymentOperationProperties
* DeploymentOperationProperties `object`: Deployment operation properties.
  * provisioningState `string`: The state of the provisioning.
  * request [HttpMessage](#httpmessage)
  * response [HttpMessage](#httpmessage)
  * serviceRequestId `string`: Deployment operation service request id.
  * statusCode `string`: Operation status code.
  * statusMessage `object`: Operation status message.
  * targetResource [TargetResource](#targetresource)
  * timestamp `string`: The date and time of the operation.

### DeploymentOperationsListResult
* DeploymentOperationsListResult `object`: List of deployment operations.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of deployment operations.
    * items [DeploymentOperation](#deploymentoperation)

### DeploymentProperties
* DeploymentProperties `object`: Deployment properties.
  * debugSetting [DebugSetting](#debugsetting)
  * mode **required** `string` (values: Incremental, Complete): The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
  * onErrorDeployment [OnErrorDeployment](#onerrordeployment)
  * parameters `object`: Name and value pairs that define the deployment parameters for the template. You use this element when you want to provide the parameter values directly in the request rather than link to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string.
  * parametersLink [ParametersLink](#parameterslink)
  * template `object`: The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both.
  * templateLink [TemplateLink](#templatelink)

### DeploymentPropertiesExtended
* DeploymentPropertiesExtended `object`: Deployment properties with additional details.
  * correlationId `string`: The correlation ID of the deployment.
  * debugSetting [DebugSetting](#debugsetting)
  * dependencies `array`: The list of deployment dependencies.
    * items [Dependency](#dependency)
  * mode `string` (values: Incremental, Complete): The deployment mode. Possible values are Incremental and Complete.
  * onErrorDeployment [OnErrorDeploymentExtended](#onerrordeploymentextended)
  * outputs `object`: Key/value pairs that represent deploymentoutput.
  * parameters `object`: Deployment parameters. Use only one of Parameters or ParametersLink.
  * parametersLink [ParametersLink](#parameterslink)
  * providers `array`: The list of resource providers needed for the deployment.
    * items [Provider](#provider)
  * provisioningState `string`: The state of the provisioning.
  * template `object`: The template content. Use only one of Template or TemplateLink.
  * templateLink [TemplateLink](#templatelink)
  * timestamp `string`: The timestamp of the template deployment.

### DeploymentValidateResult
* DeploymentValidateResult `object`: Information from validate template deployment response.
  * error [ResourceManagementErrorWithDetails](#resourcemanagementerrorwithdetails)
  * properties [DeploymentPropertiesExtended](#deploymentpropertiesextended)

### ExportTemplateRequest
* ExportTemplateRequest `object`: Export resource group template request parameters.
  * options `string`: The export template options. Supported values include 'IncludeParameterDefaultValue', 'IncludeComments' or 'IncludeParameterDefaultValue, IncludeComments
  * resources `array`: The IDs of the resources. The only supported string currently is '*' (all resources). Future updates will support exporting specific resources.
    * items `string`

### GenericResource
* GenericResource `object`: Resource information.
  * identity [Identity](#identity)
  * kind `string`: The kind of the resource.
  * managedBy `string`: ID of the resource that manages this resource.
  * plan [Plan](#plan)
  * properties `object`: The resource properties.
  * sku [Sku](#sku)
  * id `string`: Resource ID
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### GenericResourceFilter
* GenericResourceFilter `object`: Resource filter.
  * resourceType `string`: The resource type.
  * tagname `string`: The tag name.
  * tagvalue `string`: The tag value.

### HttpMessage
* HttpMessage `object`: HTTP message.
  * content `object`: HTTP message content.

### Identity
* Identity `object`: Identity for the resource.
  * principalId `string`: The principal ID of resource identity.
  * tenantId `string`: The tenant ID of resource.
  * type `string` (values: SystemAssigned, UserAssigned, SystemAssigned, UserAssigned, None): The identity type.

### OnErrorDeployment
* OnErrorDeployment `object`: Deployment on error behavior.
  * deploymentName `string`: The deployment to be used on error case.
  * type `string` (values: LastSuccessful, SpecificDeployment): The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.

### OnErrorDeploymentExtended
* OnErrorDeploymentExtended `object`: Deployment on error behavior with additional details.
  * deploymentName `string`: The deployment to be used on error case.
  * provisioningState `string`: The state of the provisioning for the on error deployment.
  * type `string` (values: LastSuccessful, SpecificDeployment): The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.

### ParametersLink
* ParametersLink `object`: Entity representing the reference to the deployment paramaters.
  * contentVersion `string`: If included, must match the ContentVersion in the template.
  * uri **required** `string`: The URI of the parameters file.

### Plan
* Plan `object`: Plan for the resource.
  * name `string`: The plan ID.
  * product `string`: The offer ID.
  * promotionCode `string`: The promotion code.
  * publisher `string`: The publisher ID.
  * version `string`: The plan's version.

### Provider
* Provider `object`: Resource provider information.
  * id `string`: The provider ID.
  * namespace `string`: The namespace of the resource provider.
  * registrationState `string`: The registration state of the provider.
  * resourceTypes `array`: The collection of provider resource types.
    * items [ProviderResourceType](#providerresourcetype)

### ProviderListResult
* ProviderListResult `object`: List of resource providers.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of resource providers.
    * items [Provider](#provider)

### ProviderResourceType
* ProviderResourceType `object`: Resource type managed by the resource provider.
  * aliases `array`: The aliases that are supported by this resource type.
    * items [AliasType](#aliastype)
  * apiVersions `array`: The API version.
    * items `string`
  * locations `array`: The collection of locations where this resource type can be created.
    * items `string`
  * properties `object`: The properties.
  * resourceType `string`: The resource type.

### Resource
* Resource `object`: Resource.
  * id `string`: Resource ID
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ResourceGroup
* ResourceGroup `object`: Resource group information.
  * id `string`: The ID of the resource group.
  * location **required** `string`: The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
  * managedBy `string`: The ID of the resource that manages this resource group.
  * name `string`: The name of the resource group.
  * properties [ResourceGroupProperties](#resourcegroupproperties)
  * tags `object`: The tags attached to the resource group.

### ResourceGroupExportResult
* ResourceGroupExportResult `object`: Resource group export result.
  * error [ResourceManagementErrorWithDetails](#resourcemanagementerrorwithdetails)
  * template `object`: The template content.

### ResourceGroupFilter
* ResourceGroupFilter `object`: Resource group filter.
  * tagName `string`: The tag name.
  * tagValue `string`: The tag value.

### ResourceGroupListResult
* ResourceGroupListResult `object`: List of resource groups.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of resource groups.
    * items [ResourceGroup](#resourcegroup)

### ResourceGroupPatchable
* ResourceGroupPatchable `object`: Resource group information.
  * managedBy `string`: The ID of the resource that manages this resource group.
  * name `string`: The name of the resource group.
  * properties [ResourceGroupProperties](#resourcegroupproperties)
  * tags `object`: The tags attached to the resource group.

### ResourceGroupProperties
* ResourceGroupProperties `object`: The resource group properties.
  * provisioningState `string`: The provisioning state. 

### ResourceListResult
* ResourceListResult `object`: List of resource groups.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of resources.
    * items [GenericResource](#genericresource)

### ResourceManagementErrorWithDetails
* ResourceManagementErrorWithDetails `object`: The detailed error message of resource management.
  * code `string`: The error code returned when exporting the template.
  * details `array`: Validation error.
    * items [ResourceManagementErrorWithDetails](#resourcemanagementerrorwithdetails)
  * message `string`: The error message describing the export error.
  * target `string`: The target of the error.

### ResourceProviderOperationDisplayProperties
* ResourceProviderOperationDisplayProperties `object`: Resource provider operation's display properties.
  * description `string`: Operation description.
  * operation `string`: Operation.
  * provider `string`: Operation provider.
  * publisher `string`: Operation description.
  * resource `string`: Operation resource.

### ResourcesMoveInfo
* ResourcesMoveInfo `object`: Parameters of move resources.
  * resources `array`: The IDs of the resources.
    * items `string`
  * targetResourceGroup `string`: The target resource group.

### Sku
* Sku `object`: SKU for the resource.
  * capacity `integer`: The SKU capacity.
  * family `string`: The SKU family.
  * model `string`: The SKU model.
  * name `string`: The SKU name.
  * size `string`: The SKU size.
  * tier `string`: The SKU tier.

### SubResource
* SubResource `object`: Sub-resource.
  * id `string`: Resource ID

### TagCount
* TagCount `object`: Tag count.
  * type `string`: Type of count.
  * value `integer`: Value of count.

### TagDetails
* TagDetails `object`: Tag details.
  * count [TagCount](#tagcount)
  * id `string`: The tag ID.
  * tagName `string`: The tag name.
  * values `array`: The list of tag values.
    * items [TagValue](#tagvalue)

### TagValue
* TagValue `object`: Tag information.
  * count [TagCount](#tagcount)
  * id `string`: The tag ID.
  * tagValue `string`: The tag value.

### TagsListResult
* TagsListResult `object`: List of subscription tags.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of tags.
    * items [TagDetails](#tagdetails)

### TargetResource
* TargetResource `object`: Target resource.
  * id `string`: The ID of the resource.
  * resourceName `string`: The name of the resource.
  * resourceType `string`: The type of the resource.

### TemplateLink
* TemplateLink `object`: Entity representing the reference to the template.
  * contentVersion `string`: If included, must match the ContentVersion in the template.
  * uri **required** `string`: The URI of the template to deploy.


