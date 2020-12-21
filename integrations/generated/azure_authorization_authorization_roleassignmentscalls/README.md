# @datafire/azure_authorization_authorization_roleassignmentscalls

Client library for AuthorizationManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_authorization_authorization_roleassignmentscalls
```
```js
let azure_authorization_authorization_roleassignmentscalls = require('@datafire/azure_authorization_authorization_roleassignmentscalls').create({
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

Role based access control provides you a way to apply granular level policy administration down to individual resources or resource groups. These operations enable you to manage role assignments. A role assignment grants access to Azure Active Directory users.

## Actions

### RoleAssignments_List
Gets all role assignments for the subscription.


```js
azure_authorization_authorization_roleassignmentscalls.RoleAssignments_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [RoleAssignmentListResult](#roleassignmentlistresult)

### RoleAssignments_ListForResourceGroup
Gets role assignments for a resource group.


```js
azure_authorization_authorization_roleassignmentscalls.RoleAssignments_ListForResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * $filter `string`: The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [RoleAssignmentListResult](#roleassignmentlistresult)

### RoleAssignments_ListForResource
Gets role assignments for a resource.


```js
azure_authorization_authorization_roleassignmentscalls.RoleAssignments_ListForResource({
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
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider.
  * parentResourcePath **required** `string`: The parent resource identity.
  * resourceType **required** `string`: The resource type of the resource.
  * resourceName **required** `string`: The name of the resource to get role assignments for.
  * $filter `string`: The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [RoleAssignmentListResult](#roleassignmentlistresult)

### RoleAssignments_DeleteById
Deletes a role assignment.


```js
azure_authorization_authorization_roleassignmentscalls.RoleAssignments_DeleteById({
  "roleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * roleId **required** `string`: The ID of the role assignment to delete.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleAssignment](#roleassignment)

### RoleAssignments_GetById
Gets a role assignment by ID.


```js
azure_authorization_authorization_roleassignmentscalls.RoleAssignments_GetById({
  "roleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * roleId **required** `string`: The ID of the role assignment to get.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleAssignment](#roleassignment)

### RoleAssignments_CreateById
Creates a role assignment by ID.


```js
azure_authorization_authorization_roleassignmentscalls.RoleAssignments_CreateById({
  "roleId": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * roleId **required** `string`: The ID of the role assignment to create.
  * parameters **required** [RoleAssignmentCreateParameters](#roleassignmentcreateparameters)
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleAssignment](#roleassignment)

### RoleAssignments_ListForScope
Gets role assignments for a scope.


```js
azure_authorization_authorization_roleassignmentscalls.RoleAssignments_ListForScope({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the role assignments.
  * $filter `string`: The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleAssignmentListResult](#roleassignmentlistresult)

### RoleAssignments_Delete
Deletes a role assignment.


```js
azure_authorization_authorization_roleassignmentscalls.RoleAssignments_Delete({
  "scope": "",
  "roleAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the role assignment to delete.
  * roleAssignmentName **required** `string`: The name of the role assignment to delete.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleAssignment](#roleassignment)

### RoleAssignments_Get
Get the specified role assignment.


```js
azure_authorization_authorization_roleassignmentscalls.RoleAssignments_Get({
  "scope": "",
  "roleAssignmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the role assignment.
  * roleAssignmentName **required** `string`: The name of the role assignment to get.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleAssignment](#roleassignment)

### RoleAssignments_Create
Creates a role assignment.


```js
azure_authorization_authorization_roleassignmentscalls.RoleAssignments_Create({
  "scope": "",
  "roleAssignmentName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the role assignment to create. The scope can be any REST resource instance. For example, use '/subscriptions/{subscription-id}/' for a subscription, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}' for a resource.
  * roleAssignmentName **required** `string`: The name of the role assignment to create. It can be any valid GUID.
  * parameters **required** [RoleAssignmentCreateParameters](#roleassignmentcreateparameters)
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleAssignment](#roleassignment)



## Definitions

### RoleAssignment
* RoleAssignment `object`: Role Assignments
  * id `string`: The role assignment ID.
  * name `string`: The role assignment name.
  * properties [RoleAssignmentPropertiesWithScope](#roleassignmentpropertieswithscope)
  * type `string`: The role assignment type.

### RoleAssignmentCreateParameters
* RoleAssignmentCreateParameters `object`: Role assignment create parameters.
  * properties **required** [RoleAssignmentProperties](#roleassignmentproperties)

### RoleAssignmentFilter
* RoleAssignmentFilter `object`: Role Assignments filter
  * canDelegate `boolean`: The Delegation flag for the role assignment
  * principalId `string`: Returns role assignment of the specific principal.

### RoleAssignmentListResult
* RoleAssignmentListResult `object`: Role assignment list operation result.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: Role assignment list.
    * items [RoleAssignment](#roleassignment)

### RoleAssignmentProperties
* RoleAssignmentProperties `object`: Role assignment properties.
  * canDelegate `boolean`: The delegation flag used for creating a role assignment
  * principalId **required** `string`: The principal ID assigned to the role. This maps to the ID inside the Active Directory. It can point to a user, service principal, or security group.
  * principalType `string` (values: User, Group, ServicePrincipal, Unknown, DirectoryRoleTemplate, ForeignGroup, Application, MSI, DirectoryObjectOrGroup, Everyone): The principal type of the assigned principal ID.
  * roleDefinitionId **required** `string`: The role definition ID used in the role assignment.

### RoleAssignmentPropertiesWithScope
* RoleAssignmentPropertiesWithScope `object`: Role assignment properties with scope.
  * canDelegate `boolean`: The Delegation flag for the role assignment
  * principalId `string`: The principal ID.
  * principalType `string` (values: User, Group, ServicePrincipal, Unknown, DirectoryRoleTemplate, ForeignGroup, Application, MSI, DirectoryObjectOrGroup, Everyone): The principal type of the assigned principal ID.
  * roleDefinitionId `string`: The role definition ID.
  * scope `string`: The role assignment scope.


