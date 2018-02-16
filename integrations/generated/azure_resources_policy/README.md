# @datafire/azure_resources_policy

Client library for PolicyClient

## Installation and Usage
```bash
npm install --save @datafire/azure_resources_policy
```
```js
let azure_resources_policy = require('@datafire/azure_resources_policy').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_resources_policy.PolicyAssignments_List({
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
azure_resources_policy.PolicyAssignments_List({
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

### PolicyDefinitions_List
Gets all the policy definitions for a subscription.


```js
azure_resources_policy.PolicyDefinitions_List({
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
* output [PolicyDefinitionListResult](#policydefinitionlistresult)

### PolicyDefinitions_Delete
Deletes a policy definition.


```js
azure_resources_policy.PolicyDefinitions_Delete({
  "policyDefinitionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * policyDefinitionName **required** `string`: The name of the policy definition to delete.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### PolicyDefinitions_Get
Gets the policy definition.


```js
azure_resources_policy.PolicyDefinitions_Get({
  "policyDefinitionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * policyDefinitionName **required** `string`: The name of the policy definition to get.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PolicyDefinition](#policydefinition)

### PolicyDefinitions_CreateOrUpdate
Creates or updates a policy definition.


```js
azure_resources_policy.PolicyDefinitions_CreateOrUpdate({
  "policyDefinitionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * policyDefinitionName **required** `string`: The name of the policy definition to create.
  * parameters **required** [PolicyDefinition](#policydefinition)
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PolicyDefinition](#policydefinition)

### PolicyAssignments_ListForResourceGroup
Gets policy assignments for the resource group.


```js
azure_resources_policy.PolicyAssignments_ListForResourceGroup({
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
azure_resources_policy.PolicyAssignments_ListForResource({
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
azure_resources_policy.PolicyAssignments_DeleteById({
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
azure_resources_policy.PolicyAssignments_GetById({
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
azure_resources_policy.PolicyAssignments_CreateById({
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
azure_resources_policy.PolicyAssignments_Delete({
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
azure_resources_policy.PolicyAssignments_Get({
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
azure_resources_policy.PolicyAssignments_Create({
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

### PolicyAssignment
* PolicyAssignment `object`: The policy assignment.
  * id `string`: The ID of the policy assignment.
  * name `string`: The name of the policy assignment.
  * properties [PolicyAssignmentProperties](#policyassignmentproperties)
  * type `string`: The type of the policy assignment.

### PolicyAssignmentListResult
* PolicyAssignmentListResult `object`: List of policy assignments.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of policy assignments.
    * items [PolicyAssignment](#policyassignment)

### PolicyAssignmentProperties
* PolicyAssignmentProperties `object`: The policy assignment properties.
  * displayName `string`: The display name of the policy assignment.
  * policyDefinitionId `string`: The ID of the policy definition.
  * scope `string`: The scope for the policy assignment.

### PolicyDefinition
* PolicyDefinition `object`: The policy definition.
  * id `string`: The ID of the policy definition.
  * name `string`: The name of the policy definition. If you do not specify a value for name, the value is inferred from the name value in the request URI.
  * properties [PolicyDefinitionProperties](#policydefinitionproperties)

### PolicyDefinitionListResult
* PolicyDefinitionListResult `object`: List of policy definitions.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of policy definitions.
    * items [PolicyDefinition](#policydefinition)

### PolicyDefinitionProperties
* PolicyDefinitionProperties `object`: The policy definition properties.
  * description `string`: The policy definition description.
  * displayName `string`: The display name of the policy definition.
  * policyRule `object`: The policy rule.
  * policyType `string` (values: NotSpecified, BuiltIn, Custom): The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.


