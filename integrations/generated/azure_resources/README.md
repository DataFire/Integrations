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

.then(data => {
  console.log(data);
});
```

## Description

Provides operations for working with resources and resource groups.

## Actions

### Providers_ListAtTenantScope
Gets all resource providers for the tenant.


```js
azure_resources.Providers_ListAtTenantScope({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $top `integer`: The number of results to return. If null is passed returns all providers.
  * $expand `string`: The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [ProviderListResult](#providerlistresult)

### Deployments_ListAtManagementGroupScope
Get all the deployments for a management group.


```js
azure_resources.Deployments_ListAtManagementGroupScope({
  "groupId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The management group ID.
  * $filter `string`: The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'.
  * $top `integer`: The number of results to get. If null is passed, returns all deployments.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentListResult](#deploymentlistresult)

### Deployments_DeleteAtManagementGroupScope
A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.


```js
azure_resources.Deployments_DeleteAtManagementGroupScope({
  "groupId": "",
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The management group ID.
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Deployments_GetAtManagementGroupScope
Gets a deployment.


```js
azure_resources.Deployments_GetAtManagementGroupScope({
  "groupId": "",
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The management group ID.
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentExtended](#deploymentextended)

### Deployments_CheckExistenceAtManagementGroupScope
Checks whether the deployment exists.


```js
azure_resources.Deployments_CheckExistenceAtManagementGroupScope({
  "groupId": "",
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The management group ID.
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Deployments_CreateOrUpdateAtManagementGroupScope
You can provide the template and parameters directly in the request or link to JSON files.


```js
azure_resources.Deployments_CreateOrUpdateAtManagementGroupScope({
  "groupId": "",
  "deploymentName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The management group ID.
  * deploymentName **required** `string`: The name of the deployment.
  * parameters **required** [ScopedDeployment](#scopeddeployment)
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentExtended](#deploymentextended)

### Deployments_CancelAtManagementGroupScope
You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resources partially deployed.


```js
azure_resources.Deployments_CancelAtManagementGroupScope({
  "groupId": "",
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The management group ID.
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Deployments_ExportTemplateAtManagementGroupScope
Exports the template used for specified deployment.


```js
azure_resources.Deployments_ExportTemplateAtManagementGroupScope({
  "groupId": "",
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The management group ID.
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentExportResult](#deploymentexportresult)

### DeploymentOperations_ListAtManagementGroupScope
Gets all deployments operations for a deployment.


```js
azure_resources.DeploymentOperations_ListAtManagementGroupScope({
  "groupId": "",
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The management group ID.
  * deploymentName **required** `string`: The name of the deployment.
  * $top `integer`: The number of results to return.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentOperationsListResult](#deploymentoperationslistresult)

### DeploymentOperations_GetAtManagementGroupScope
Gets a deployments operation.


```js
azure_resources.DeploymentOperations_GetAtManagementGroupScope({
  "groupId": "",
  "deploymentName": "",
  "operationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The management group ID.
  * deploymentName **required** `string`: The name of the deployment.
  * operationId **required** `string`: The ID of the operation to get.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentOperation](#deploymentoperation)

### Deployments_ValidateAtManagementGroupScope
Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..


```js
azure_resources.Deployments_ValidateAtManagementGroupScope({
  "groupId": "",
  "deploymentName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The management group ID.
  * deploymentName **required** `string`: The name of the deployment.
  * parameters **required** [ScopedDeployment](#scopeddeployment)
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentValidateResult](#deploymentvalidateresult)

### Deployments_CalculateTemplateHash
Calculate the hash of the given template.


```js
azure_resources.Deployments_CalculateTemplateHash({
  "api-version": "",
  "template": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * template **required** `object`

#### Output
* output [TemplateHashResult](#templatehashresult)

### Deployments_ListAtTenantScope
Get all the deployments at the tenant scope.


```js
azure_resources.Deployments_ListAtTenantScope({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'.
  * $top `integer`: The number of results to get. If null is passed, returns all deployments.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentListResult](#deploymentlistresult)

### Deployments_DeleteAtTenantScope
A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.


```js
azure_resources.Deployments_DeleteAtTenantScope({
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Deployments_GetAtTenantScope
Gets a deployment.


```js
azure_resources.Deployments_GetAtTenantScope({
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentExtended](#deploymentextended)

### Deployments_CheckExistenceAtTenantScope
Checks whether the deployment exists.


```js
azure_resources.Deployments_CheckExistenceAtTenantScope({
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Deployments_CreateOrUpdateAtTenantScope
You can provide the template and parameters directly in the request or link to JSON files.


```js
azure_resources.Deployments_CreateOrUpdateAtTenantScope({
  "deploymentName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * parameters **required** [ScopedDeployment](#scopeddeployment)
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentExtended](#deploymentextended)

### Deployments_CancelAtTenantScope
You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resources partially deployed.


```js
azure_resources.Deployments_CancelAtTenantScope({
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Deployments_ExportTemplateAtTenantScope
Exports the template used for specified deployment.


```js
azure_resources.Deployments_ExportTemplateAtTenantScope({
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentExportResult](#deploymentexportresult)

### DeploymentOperations_ListAtTenantScope
Gets all deployments operations for a deployment.


```js
azure_resources.DeploymentOperations_ListAtTenantScope({
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * $top `integer`: The number of results to return.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentOperationsListResult](#deploymentoperationslistresult)

### DeploymentOperations_GetAtTenantScope
Gets a deployments operation.


```js
azure_resources.DeploymentOperations_GetAtTenantScope({
  "deploymentName": "",
  "operationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * operationId **required** `string`: The ID of the operation to get.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentOperation](#deploymentoperation)

### Deployments_ValidateAtTenantScope
Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..


```js
azure_resources.Deployments_ValidateAtTenantScope({
  "deploymentName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * parameters **required** [ScopedDeployment](#scopeddeployment)
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentValidateResult](#deploymentvalidateresult)

### Operations_List
Lists all of the available Microsoft.Resources REST API operations.


```js
azure_resources.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [OperationListResult](#operationlistresult)

### Providers_GetAtTenantScope
Gets the specified resource provider at the tenant level.


```js
azure_resources.Providers_GetAtTenantScope({
  "resourceProviderNamespace": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $expand `string`: The $expand query parameter. For example, to include property aliases in response, use $expand=resourceTypes/aliases.
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [Provider](#provider)

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

### Deployments_ListAtSubscriptionScope
Get all the deployments for a subscription.


```js
azure_resources.Deployments_ListAtSubscriptionScope({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'.
  * $top `integer`: The number of results to get. If null is passed, returns all deployments.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [DeploymentListResult](#deploymentlistresult)

### Deployments_DeleteAtSubscriptionScope
A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.


```js
azure_resources.Deployments_DeleteAtSubscriptionScope({
  "deploymentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### Deployments_GetAtSubscriptionScope
Gets a deployment.


```js
azure_resources.Deployments_GetAtSubscriptionScope({
  "deploymentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [DeploymentExtended](#deploymentextended)

### Deployments_CheckExistenceAtSubscriptionScope
Checks whether the deployment exists.


```js
azure_resources.Deployments_CheckExistenceAtSubscriptionScope({
  "deploymentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### Deployments_CreateOrUpdateAtSubscriptionScope
You can provide the template and parameters directly in the request or link to JSON files.


```js
azure_resources.Deployments_CreateOrUpdateAtSubscriptionScope({
  "deploymentName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * parameters **required** [Deployment](#deployment)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [DeploymentExtended](#deploymentextended)

### Deployments_CancelAtSubscriptionScope
You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resources partially deployed.


```js
azure_resources.Deployments_CancelAtSubscriptionScope({
  "deploymentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### Deployments_ExportTemplateAtSubscriptionScope
Exports the template used for specified deployment.


```js
azure_resources.Deployments_ExportTemplateAtSubscriptionScope({
  "deploymentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [DeploymentExportResult](#deploymentexportresult)

### DeploymentOperations_ListAtSubscriptionScope
Gets all deployments operations for a deployment.


```js
azure_resources.DeploymentOperations_ListAtSubscriptionScope({
  "deploymentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * $top `integer`: The number of results to return.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [DeploymentOperationsListResult](#deploymentoperationslistresult)

### DeploymentOperations_GetAtSubscriptionScope
Gets a deployments operation.


```js
azure_resources.DeploymentOperations_GetAtSubscriptionScope({
  "deploymentName": "",
  "operationId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * operationId **required** `string`: The ID of the operation to get.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [DeploymentOperation](#deploymentoperation)

### Deployments_ValidateAtSubscriptionScope
Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..


```js
azure_resources.Deployments_ValidateAtSubscriptionScope({
  "deploymentName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * parameters **required** [Deployment](#deployment)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [DeploymentValidateResult](#deploymentvalidateresult)

### Deployments_WhatIfAtSubscriptionScope
Returns changes that will be made by the deployment if executed at the scope of the subscription.


```js
azure_resources.Deployments_WhatIfAtSubscriptionScope({
  "deploymentName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * deploymentName **required** `string`: The name of the deployment.
  * parameters **required** [DeploymentWhatIf](#deploymentwhatif)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [WhatIfOperationResult](#whatifoperationresult)

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
  * $filter `string`: The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'. When you filter by a tag name and value, the tags for each resource are not returned in the results.<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId.
  * $expand `string`: The $expand query parameter. You can expand createdTime and changedTime. For example, to expand both properties, use $expand=changedTime,createdTime
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
  * $filter `string`: The filter to apply on the operation.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'
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
  * resourceGroupName **required** `string`: The name of the resource group to create or update. Can include alphanumeric, underscore, parentheses, hyphen, period (except at end), and Unicode characters that match the allowed characters.
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
  * deploymentName **required** `string`: The name of the deployment.
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
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * parameters **required** [ExportTemplateRequest](#exporttemplaterequest)

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
  * deploymentName **required** `string`: The name of the deployment.
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
  * deploymentName **required** `string`: The name of the deployment.
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
  * deploymentName **required** `string`: The name of the deployment.
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
  * deploymentName **required** `string`: The name of the deployment.
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
  * deploymentName **required** `string`: The name of the deployment.
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

### Deployments_WhatIf
Returns changes that will be made by the deployment if executed at the scope of the resource group.


```js
azure_resources.Deployments_WhatIf({
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
  * parameters **required** [DeploymentWhatIf](#deploymentwhatif)
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [WhatIfOperationResult](#whatifoperationresult)

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
  * api-version **required** `string`: The API version to use for this operation.
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
  * api-version **required** `string`: The API version to use for this operation.
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
  * api-version **required** `string`: The API version to use for this operation.
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
  * api-version **required** `string`: The API version to use for this operation.
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
  * api-version **required** `string`: The API version to use for this operation.
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
  * $filter `string`: The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'. When you filter by a tag name and value, the tags for each resource are not returned in the results.<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId.
  * $expand `string`: The $expand query parameter. You can expand createdTime and changedTime. For example, to expand both properties, use $expand=changedTime,createdTime
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
  * api-version **required** `string`: The API version to use for this operation.

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
  * api-version **required** `string`: The API version to use for this operation.

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
  * api-version **required** `string`: The API version to use for this operation.

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
  * api-version **required** `string`: The API version to use for this operation.
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
  * api-version **required** `string`: The API version to use for this operation.
  * parameters **required** [GenericResource](#genericresource)

#### Output
* output [GenericResource](#genericresource)

### Deployments_ListAtScope
Get all the deployments at the given scope.


```js
azure_resources.Deployments_ListAtScope({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of a deployment.
  * $filter `string`: The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'.
  * $top `integer`: The number of results to get. If null is passed, returns all deployments.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentListResult](#deploymentlistresult)

### Deployments_DeleteAtScope
A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.


```js
azure_resources.Deployments_DeleteAtScope({
  "scope": "",
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of a deployment.
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Deployments_GetAtScope
Gets a deployment.


```js
azure_resources.Deployments_GetAtScope({
  "scope": "",
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of a deployment.
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentExtended](#deploymentextended)

### Deployments_CheckExistenceAtScope
Checks whether the deployment exists.


```js
azure_resources.Deployments_CheckExistenceAtScope({
  "scope": "",
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of a deployment.
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Deployments_CreateOrUpdateAtScope
You can provide the template and parameters directly in the request or link to JSON files.


```js
azure_resources.Deployments_CreateOrUpdateAtScope({
  "scope": "",
  "deploymentName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of a deployment.
  * deploymentName **required** `string`: The name of the deployment.
  * parameters **required** [Deployment](#deployment)
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentExtended](#deploymentextended)

### Deployments_CancelAtScope
You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resources partially deployed.


```js
azure_resources.Deployments_CancelAtScope({
  "scope": "",
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of a deployment.
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Deployments_ExportTemplateAtScope
Exports the template used for specified deployment.


```js
azure_resources.Deployments_ExportTemplateAtScope({
  "scope": "",
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of a deployment.
  * deploymentName **required** `string`: The name of the deployment.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentExportResult](#deploymentexportresult)

### DeploymentOperations_ListAtScope
Gets all deployments operations for a deployment.


```js
azure_resources.DeploymentOperations_ListAtScope({
  "scope": "",
  "deploymentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of a deployment.
  * deploymentName **required** `string`: The name of the deployment.
  * $top `integer`: The number of results to return.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentOperationsListResult](#deploymentoperationslistresult)

### DeploymentOperations_GetAtScope
Gets a deployments operation.


```js
azure_resources.DeploymentOperations_GetAtScope({
  "scope": "",
  "deploymentName": "",
  "operationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of a deployment.
  * deploymentName **required** `string`: The name of the deployment.
  * operationId **required** `string`: The ID of the operation to get.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentOperation](#deploymentoperation)

### Deployments_ValidateAtScope
Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..


```js
azure_resources.Deployments_ValidateAtScope({
  "scope": "",
  "deploymentName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of a deployment.
  * deploymentName **required** `string`: The name of the deployment.
  * parameters **required** [Deployment](#deployment)
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DeploymentValidateResult](#deploymentvalidateresult)



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

### CloudError
* CloudError `object`: An error response for a resource management request.
  * error `object`: The resource management error response.
    * additionalInfo `array`: The error additional info.
      * items `object`: The resource management error additional info.
        * info `object`: The additional info.
        * type `string`: The additional info type.
    * code `string`: The error code.
    * details `array`: The error details.
      * items [ErrorResponse](#errorresponse)
    * message `string`: The error message.
    * target `string`: The error target.

### DebugSetting
* DebugSetting `object`: The debug setting.
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
  * location `string`: The location to store the deployment data.
  * properties **required** [DeploymentProperties](#deploymentproperties)

### DeploymentExportResult
* DeploymentExportResult `object`: The deployment export result. 
  * template `object`: The template content.

### DeploymentExtended
* DeploymentExtended `object`: Deployment information.
  * id `string`: The ID of the deployment.
  * location `string`: the location of the deployment.
  * name `string`: The name of the deployment.
  * properties [DeploymentPropertiesExtended](#deploymentpropertiesextended)
  * type `string`: The type of the deployment.

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
  * duration `string`: The duration of the operation.
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
  * duration `string`: The duration of the template deployment.
  * mode `string` (values: Incremental, Complete): The deployment mode. Possible values are Incremental and Complete.
  * onErrorDeployment [OnErrorDeploymentExtended](#onerrordeploymentextended)
  * outputs `object`: Key/value pairs that represent deployment output.
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
  * error `object`: The resource management error response.
    * additionalInfo `array`: The error additional info.
      * items `object`: The resource management error additional info.
        * info `object`: The additional info.
        * type `string`: The additional info type.
    * code `string`: The error code.
    * details `array`: The error details.
      * items [ErrorResponse](#errorresponse)
    * message `string`: The error message.
    * target `string`: The error target.
  * properties [DeploymentPropertiesExtended](#deploymentpropertiesextended)

### DeploymentWhatIf
* DeploymentWhatIf `object`: Deployment What-if operation parameters.
  * location `string`: The location to store the deployment data.
  * properties **required** [DeploymentWhatIfProperties](#deploymentwhatifproperties)

### DeploymentWhatIfProperties
* DeploymentWhatIfProperties `object`: Deployment What-if properties.
  * whatIfSettings [DeploymentWhatIfSettings](#deploymentwhatifsettings)
  * debugSetting [DebugSetting](#debugsetting)
  * mode **required** `string` (values: Incremental, Complete): The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
  * onErrorDeployment [OnErrorDeployment](#onerrordeployment)
  * parameters `object`: Name and value pairs that define the deployment parameters for the template. You use this element when you want to provide the parameter values directly in the request rather than link to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string.
  * parametersLink [ParametersLink](#parameterslink)
  * template `object`: The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both.
  * templateLink [TemplateLink](#templatelink)

### DeploymentWhatIfSettings
* DeploymentWhatIfSettings `object`: Deployment What-If operation settings.
  * resultFormat `string` (values: ResourceIdOnly, FullResourcePayloads): The format of the What-If results

### ErrorResponse


### ExportTemplateRequest
* ExportTemplateRequest `object`: Export resource group template request parameters.
  * options `string`: The export template options. A CSV-formatted list containing zero or more of the following: 'IncludeParameterDefaultValue', 'IncludeComments', 'SkipResourceNameParameterization', 'SkipAllParameterization'
  * resources `array`: The IDs of the resources to filter the export by. To export all resources, supply an array with single entry '*'.
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
  * userAssignedIdentities `object`: The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

### OnErrorDeployment
* OnErrorDeployment `object`: Deployment on error behavior.
  * deploymentName `string`: The deployment to be used on error case.
  * type `string` (values: LastSuccessful, SpecificDeployment): The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.

### OnErrorDeploymentExtended
* OnErrorDeploymentExtended `object`: Deployment on error behavior with additional details.
  * deploymentName `string`: The deployment to be used on error case.
  * provisioningState `string`: The state of the provisioning for the on error deployment.
  * type `string` (values: LastSuccessful, SpecificDeployment): The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.

### Operation
* Operation `object`: Microsoft.Resources operation
  * display `object`: The object that represents the operation.
    * description `string`: Description of the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Resources
    * resource `string`: Resource on which the operation is performed: Profile, endpoint, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list Microsoft.Resources operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Microsoft.Resources operations.
    * items [Operation](#operation)

### ParametersLink
* ParametersLink `object`: Entity representing the reference to the deployment parameters.
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
  * registrationPolicy `string`: The registration policy of the resource provider.
  * registrationState `string`: The registration state of the resource provider.
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
  * capabilities `string`: The additional capabilities offered by this resource type.
  * locations `array`: The collection of locations where this resource type can be created.
    * items `string`
  * properties `object`: The properties.
  * resourceType `string`: The resource type.

### Resource
* Resource `object`: Specified resource.
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
  * type `string`: The type of the resource group.

### ResourceGroupExportResult
* ResourceGroupExportResult `object`: Resource group export result.
  * error `object`: The resource management error response.
    * additionalInfo `array`: The error additional info.
      * items `object`: The resource management error additional info.
        * info `object`: The additional info.
        * type `string`: The additional info type.
    * code `string`: The error code.
    * details `array`: The error details.
      * items [ErrorResponse](#errorresponse)
    * message `string`: The error message.
    * target `string`: The error target.
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

### ResourceProviderOperationDisplayProperties
* ResourceProviderOperationDisplayProperties `object`: Resource provider operation's display properties.
  * description `string`: Operation description.
  * operation `string`: Resource provider operation.
  * provider `string`: Operation provider.
  * publisher `string`: Operation description.
  * resource `string`: Operation resource.

### ResourcesMoveInfo
* ResourcesMoveInfo `object`: Parameters of move resources.
  * resources `array`: The IDs of the resources.
    * items `string`
  * targetResourceGroup `string`: The target resource group.

### ScopedDeployment
* ScopedDeployment `object`: Deployment operation parameters.
  * location **required** `string`: The location to store the deployment data.
  * properties **required** [DeploymentProperties](#deploymentproperties)

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

### TemplateHashResult
* TemplateHashResult `object`: Result of the request to calculate template hash. It contains a string of minified template and its hash.
  * minifiedTemplate `string`: The minified template string.
  * templateHash `string`: The template hash.

### TemplateLink
* TemplateLink `object`: Entity representing the reference to the template.
  * contentVersion `string`: If included, must match the ContentVersion in the template.
  * uri **required** `string`: The URI of the template to deploy.

### WhatIfChange
* WhatIfChange `object`: Information about a single resource change predicted by What-If operation.
  * after `object`: The predicted snapshot of the resource after the deployment is executed.
  * before `object`: The snapshot of the resource before the deployment is executed.
  * changeType **required** `string` (values: Create, Delete, Ignore, Deploy, NoChange, Modify): Type of change that will be made to the resource when the deployment is executed.
  * delta `array`: The predicted changes to resource properties.
    * items [WhatIfPropertyChange](#whatifpropertychange)
  * resourceId **required** `string`: Resource ID

### WhatIfOperationProperties
* WhatIfOperationProperties `object`: Deployment operation properties.
  * changes `array`: List of resource changes predicted by What-If operation.
    * items [WhatIfChange](#whatifchange)

### WhatIfOperationResult
* WhatIfOperationResult `object`: Result of the What-If operation. Contains a list of predicted changes and a URL link to get to the next set of results.
  * error `object`: The resource management error response.
    * additionalInfo `array`: The error additional info.
      * items `object`: The resource management error additional info.
        * info `object`: The additional info.
        * type `string`: The additional info type.
    * code `string`: The error code.
    * details `array`: The error details.
      * items [ErrorResponse](#errorresponse)
    * message `string`: The error message.
    * target `string`: The error target.
  * properties [WhatIfOperationProperties](#whatifoperationproperties)
  * status `string`: Status of the What-If operation.

### WhatIfPropertyChange
* WhatIfPropertyChange `object`: The predicted change to the resource property.
  * after `object`: The value of the property after the deployment is executed.
  * before `object`: The value of the property before the deployment is executed.
  * children `array`: Nested property changes.
    * items [WhatIfPropertyChange](#whatifpropertychange)
  * path **required** `string`: The path of the property.
  * propertyChangeType **required** `string` (values: Create, Delete, Modify, Array): The type of property change.


