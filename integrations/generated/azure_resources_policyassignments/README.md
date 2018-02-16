# @datafire/azure_resources_policyassignments

Client library for PolicyClient

## Installation and Usage
```bash
npm install --save @datafire/azure_resources_policyassignments
```
```js
let azure_resources_policyassignments = require('@datafire/azure_resources_policyassignments').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_resources_policyassignments.PolicyAssignments_List({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

To manage and control access to your resources, you can define customized policies and assign them at a scope.

## Actions

### PolicyAssignments_List
Gets all the policy assignments for a subscription.


```js
azure_resources_policyassignments.PolicyAssignments_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filter to apply on the operation.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PolicyAssignmentListResult](#policyassignmentlistresult)

### PolicyAssignments_ListForResourceGroup
Gets policy assignments for the resource group.


```js
azure_resources_policyassignments.PolicyAssignments_ListForResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group that contains policy assignments.
  * $filter `string`: The filter to apply on the operation.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PolicyAssignmentListResult](#policyassignmentlistresult)

### PolicyAssignments_ListForResource
Gets policy assignments for a resource.


```js
azure_resources_policyassignments.PolicyAssignments_ListForResource({
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
  * resourceGroupName **required** `string`: The name of the resource group containing the resource. The name is case insensitive.
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider.
  * parentResourcePath **required** `string`: The parent resource path.
  * resourceType **required** `string`: The resource type.
  * resourceName **required** `string`: The name of the resource with policy assignments.
  * $filter `string`: The filter to apply on the operation.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PolicyAssignmentListResult](#policyassignmentlistresult)

### PolicyAssignments_DeleteById
When providing a scope for the assigment, use '/subscriptions/{subscription-id}/' for subscriptions, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for resource groups, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider-namespace}/{resource-type}/{resource-name}' for resources.


```js
azure_resources_policyassignments.PolicyAssignments_DeleteById({
  "policyAssignmentId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyAssignmentId **required** `string`: The ID of the policy assignment to delete. Use the format '/{scope}/providers/Microsoft.Authorization/policyAssignments/{policy-assignment-name}'.
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicyAssignment](#policyassignment)

### PolicyAssignments_GetById
When providing a scope for the assigment, use '/subscriptions/{subscription-id}/' for subscriptions, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for resource groups, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider-namespace}/{resource-type}/{resource-name}' for resources.


```js
azure_resources_policyassignments.PolicyAssignments_GetById({
  "policyAssignmentId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyAssignmentId **required** `string`: The ID of the policy assignment to get. Use the format '/{scope}/providers/Microsoft.Authorization/policyAssignments/{policy-assignment-name}'.
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicyAssignment](#policyassignment)

### PolicyAssignments_CreateById
Policy assignments are inherited by child resources. For example, when you apply a policy to a resource group that policy is assigned to all resources in the group. When providing a scope for the assigment, use '/subscriptions/{subscription-id}/' for subscriptions, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for resource groups, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider-namespace}/{resource-type}/{resource-name}' for resources.


```js
azure_resources_policyassignments.PolicyAssignments_CreateById({
  "policyAssignmentId": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyAssignmentId **required** `string`: The ID of the policy assignment to create. Use the format '/{scope}/providers/Microsoft.Authorization/policyAssignments/{policy-assignment-name}'.
  * parameters **required** [PolicyAssignment](#policyassignment)
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicyAssignment](#policyassignment)

### PolicyAssignments_Delete
Deletes a policy assignment.


```js
azure_resources_policyassignments.PolicyAssignments_Delete({
  "scope": "",
  "policyAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the policy assignment.
  * policyAssignmentName **required** `string`: The name of the policy assignment to delete.
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicyAssignment](#policyassignment)

### PolicyAssignments_Get
Gets a policy assignment.


```js
azure_resources_policyassignments.PolicyAssignments_Get({
  "scope": "",
  "policyAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the policy assignment.
  * policyAssignmentName **required** `string`: The name of the policy assignment to get.
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicyAssignment](#policyassignment)

### PolicyAssignments_Create
Policy assignments are inherited by child resources. For example, when you apply a policy to a resource group that policy is assigned to all resources in the group.


```js
azure_resources_policyassignments.PolicyAssignments_Create({
  "scope": "",
  "policyAssignmentName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the policy assignment.
  * policyAssignmentName **required** `string`: The name of the policy assignment.
  * parameters **required** [PolicyAssignment](#policyassignment)
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicyAssignment](#policyassignment)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Error reponse indicates ARM is not able to process the incoming request. The reason is provided in the error message.
  * errorCode `string`: Error code.
  * errorMessage `string`: Error message indicating why the operation failed.
  * httpStatus `string`: Http status code.

### PolicyAssignment
* PolicyAssignment `object`: The policy assignment.
  * id `string`: The ID of the policy assignment.
  * name `string`: The name of the policy assignment.
  * properties [PolicyAssignmentProperties](#policyassignmentproperties)
  * sku [PolicySku](#policysku)
  * type `string`: The type of the policy assignment.

### PolicyAssignmentListResult
* PolicyAssignmentListResult `object`: List of policy assignments.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of policy assignments.
    * items [PolicyAssignment](#policyassignment)

### PolicyAssignmentProperties
* PolicyAssignmentProperties `object`: The policy assignment properties.
  * description `string`: This message will be part of response in case of policy violation.
  * displayName `string`: The display name of the policy assignment.
  * metadata `object`: The policy assignment metadata.
  * notScopes `array`: The policy's excluded scopes.
    * items `string`
  * parameters `object`: Required if a parameter is used in policy rule.
  * policyDefinitionId `string`: The ID of the policy definition.
  * scope `string`: The scope for the policy assignment.

### PolicySku
* PolicySku `object`: The policy sku.
  * name **required** `string`: The name of the policy sku. Possible values are A0 and A1.
  * tier `string`: The policy sku tier. Possible values are Free and Standard.


