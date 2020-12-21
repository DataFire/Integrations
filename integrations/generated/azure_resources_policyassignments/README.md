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

.then(data => {
  console.log(data);
});
```

## Description

To manage and control access to your resources, you can define customized policies and assign them at a scope.

## Actions

### PolicyAssignments_List
This operation retrieves the list of all policy assignments associated with the given subscription that match the optional given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, the unfiltered list includes all policy assignments associated with the subscription, including those that apply directly or from management groups that contain the given subscription, as well as any applied to objects contained within the subscription. If $filter=atScope() is provided, the returned list includes all policy assignments that apply to the subscription, which is everything in the unfiltered list except those applied to objects contained within the subscription. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value}.


```js
azure_resources_policyassignments.PolicyAssignments_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PolicyAssignmentListResult](#policyassignmentlistresult)

### PolicyAssignments_ListForResourceGroup
This operation retrieves the list of all policy assignments associated with the given resource group in the given subscription that match the optional given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, the unfiltered list includes all policy assignments associated with the resource group, including those that apply directly or apply from containing scopes, as well as any applied to resources contained within the resource group. If $filter=atScope() is provided, the returned list includes all policy assignments that apply to the resource group, which is everything in the unfiltered list except those applied to resources contained within the resource group. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value} that apply to the resource group.


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
  * $filter `string`: The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PolicyAssignmentListResult](#policyassignmentlistresult)

### PolicyAssignments_ListForResource
This operation retrieves the list of all policy assignments associated with the specified resource in the given resource group and subscription that match the optional given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, the unfiltered list includes all policy assignments associated with the resource, including those that apply directly or from all containing scopes, as well as any applied to resources contained within the resource. If $filter=atScope() is provided, the returned list includes all policy assignments that apply to the resource, which is everything in the unfiltered list except those applied to resources contained within the resource. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value} that apply to the resource. Three parameters plus the resource name are used to identify a specific resource. If the resource is not part of a parent resource (the more common case), the parent resource path should not be provided (or provided as ''). For example a web app could be specified as ({resourceProviderNamespace} == 'Microsoft.Web', {parentResourcePath} == '', {resourceType} == 'sites', {resourceName} == 'MyWebApp'). If the resource is part of a parent resource, then all parameters should be provided. For example a virtual machine DNS name could be specified as ({resourceProviderNamespace} == 'Microsoft.Compute', {parentResourcePath} == 'virtualMachines/MyVirtualMachine', {resourceType} == 'domainNames', {resourceName} == 'MyComputerName'). A convenient alternative to providing the namespace and type name separately is to provide both in the {resourceType} parameter, format: ({resourceProviderNamespace} == '', {parentResourcePath} == '', {resourceType} == 'Microsoft.Web/sites', {resourceName} == 'MyWebApp').


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
  * resourceGroupName **required** `string`: The name of the resource group containing the resource.
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider. For example, the namespace of a virtual machine is Microsoft.Compute (from Microsoft.Compute/virtualMachines)
  * parentResourcePath **required** `string`: The parent resource path. Use empty string if there is none.
  * resourceType **required** `string`: The resource type name. For example the type name of a web app is 'sites' (from Microsoft.Web/sites).
  * resourceName **required** `string`: The name of the resource.
  * $filter `string`: The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PolicyAssignmentListResult](#policyassignmentlistresult)

### PolicyAssignments_DeleteById
This operation deletes the policy with the given ID. Policy assignment IDs have this format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid formats for {scope} are: '/providers/Microsoft.Management/managementGroups/{managementGroup}' (management group), '/subscriptions/{subscriptionId}' (subscription), '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' (resource group), or '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}' (resource).


```js
azure_resources_policyassignments.PolicyAssignments_DeleteById({
  "policyAssignmentId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyAssignmentId **required** `string`: The ID of the policy assignment to delete. Use the format '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicyAssignment](#policyassignment)

### PolicyAssignments_GetById
The operation retrieves the policy assignment with the given ID. Policy assignment IDs have this format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'.


```js
azure_resources_policyassignments.PolicyAssignments_GetById({
  "policyAssignmentId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyAssignmentId **required** `string`: The ID of the policy assignment to get. Use the format '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicyAssignment](#policyassignment)

### PolicyAssignments_CreateById
This operation creates or updates the policy assignment with the given ID. Policy assignments made on a scope apply to all resources contained in that scope. For example, when you assign a policy to a resource group that policy applies to all resources in the group. Policy assignment IDs have this format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'.


```js
azure_resources_policyassignments.PolicyAssignments_CreateById({
  "policyAssignmentId": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * policyAssignmentId **required** `string`: The ID of the policy assignment to create. Use the format '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.
  * parameters **required** [PolicyAssignment](#policyassignment)
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicyAssignment](#policyassignment)

### PolicyAssignments_Delete
This operation deletes a policy assignment, given its name and the scope it was created in. The scope of a policy assignment is the part of its ID preceding '/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.


```js
azure_resources_policyassignments.PolicyAssignments_Delete({
  "scope": "",
  "policyAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
  * policyAssignmentName **required** `string`: The name of the policy assignment to delete.
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicyAssignment](#policyassignment)

### PolicyAssignments_Get
This operation retrieves a single policy assignment, given its name and the scope it was created at.


```js
azure_resources_policyassignments.PolicyAssignments_Get({
  "scope": "",
  "policyAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
  * policyAssignmentName **required** `string`: The name of the policy assignment to get.
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicyAssignment](#policyassignment)

### PolicyAssignments_Create
 This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group.


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
  * scope **required** `string`: The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
  * policyAssignmentName **required** `string`: The name of the policy assignment.
  * parameters **required** [PolicyAssignment](#policyassignment)
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [PolicyAssignment](#policyassignment)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Error response indicates Azure Resource Manager is not able to process the incoming request. The reason is provided in the error message.
  * errorCode `string`: Error code.
  * errorMessage `string`: Error message indicating why the operation failed.
  * httpStatus `string`: Http status code.

### Identity
* Identity `object`: Identity for the resource.
  * principalId `string`: The principal ID of the resource identity.
  * tenantId `string`: The tenant ID of the resource identity.
  * type `string` (values: SystemAssigned, None): The identity type.

### PolicyAssignment
* PolicyAssignment `object`: The policy assignment.
  * id `string`: The ID of the policy assignment.
  * identity [Identity](#identity)
  * location `string`: The location of the policy assignment. Only required when utilizing managed identity.
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
  * enforcementMode `string` (values: Default, DoNotEnforce): The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
  * metadata `object`: The policy assignment metadata.
  * notScopes `array`: The policy's excluded scopes.
    * items `string`
  * parameters `object`: Required if a parameter is used in policy rule.
  * policyDefinitionId `string`: The ID of the policy definition or policy set definition being assigned.
  * scope `string`: The scope for the policy assignment.

### PolicySku
* PolicySku `object`: The policy sku. This property is optional, obsolete, and will be ignored.
  * name **required** `string`: The name of the policy sku. Possible values are A0 and A1.
  * tier `string`: The policy sku tier. Possible values are Free and Standard.


