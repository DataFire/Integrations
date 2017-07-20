# @datafire/azure_arm_authorization

Client library for AuthorizationManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_authorization
```

```js
let datafire = require('datafire');
let azure_arm_authorization = require('@datafire/azure_arm_authorization').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_authorization: account,
  }
})

azure_arm_authorization.ProviderOperationsMetadata_List({}, context).then(data => {
  console.log(data);
})
```

## Description
Role based access control provides you a way to apply granular level policy administration down to individual resources or resource groups. These operations enable you to manage role definitions and role assignments. A role definition describes the set of actions that can be performed on resources. A role assignment grants access to Azure Active Directory users.

## Actions
### ProviderOperationsMetadata_List
Gets provider operations metadata for all resource providers.


```js
azure_arm_authorization.ProviderOperationsMetadata_List({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for this operation.
* $expand (string) - Specifies whether to expand the values.

### ProviderOperationsMetadata_Get
Gets provider operations metadata for the specified resource provider.


```js
azure_arm_authorization.ProviderOperationsMetadata_Get({
  "resourceProviderNamespace": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceProviderNamespace (string) **required** - The namespace of the resource provider.
* api-version (string) **required** - The API version to use for the operation.
* $expand (string) - Specifies whether to expand the values.

### ClassicAdministrators_List
Gets service administrator, account administrator, and co-administrators for the subscription.


```js
azure_arm_authorization.ClassicAdministrators_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The API version to use for this operation.
* subscriptionId (string) **required** - The ID of the target subscription.

### RoleAssignments_List
Gets all role assignments for the subscription.


```js
azure_arm_authorization.RoleAssignments_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* $filter (string) - The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
* api-version (string) **required** - The API version to use for this operation.
* subscriptionId (string) **required** - The ID of the target subscription.

### RoleAssignments_ListForResourceGroup
Gets role assignments for a resource group.


```js
azure_arm_authorization.RoleAssignments_ListForResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* $filter (string) - The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
* api-version (string) **required** - The API version to use for this operation.
* subscriptionId (string) **required** - The ID of the target subscription.

### Permissions_ListForResourceGroup
Gets all permissions the caller has for a resource group.


```js
azure_arm_authorization.Permissions_ListForResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group to get the permissions for. The name is case insensitive.
* api-version (string) **required** - The API version to use for this operation.
* subscriptionId (string) **required** - The ID of the target subscription.

### Permissions_ListForResource
Gets all permissions the caller has for a resource.


```js
azure_arm_authorization.Permissions_ListForResource({
  "resourceGroupName": "",
  "resourceProviderNamespace": "",
  "parentResourcePath": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group containing the resource. The name is case insensitive.
* resourceProviderNamespace (string) **required** - The namespace of the resource provider.
* parentResourcePath (string) **required** - The parent resource identity.
* resourceType (string) **required** - The resource type of the resource.
* resourceName (string) **required** - The name of the resource to get the permissions for.
* api-version (string) **required** - The API version to use for this operation.
* subscriptionId (string) **required** - The ID of the target subscription.

### RoleAssignments_ListForResource
Gets role assignments for a resource.


```js
azure_arm_authorization.RoleAssignments_ListForResource({
  "resourceGroupName": "",
  "resourceProviderNamespace": "",
  "parentResourcePath": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* resourceProviderNamespace (string) **required** - The namespace of the resource provider.
* parentResourcePath (string) **required** - The parent resource identity.
* resourceType (string) **required** - The resource type of the resource.
* resourceName (string) **required** - The name of the resource to get role assignments for.
* $filter (string) - The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
* api-version (string) **required** - The API version to use for this operation.
* subscriptionId (string) **required** - The ID of the target subscription.

### RoleAssignments_DeleteById
Deletes a role assignment.


```js
azure_arm_authorization.RoleAssignments_DeleteById({
  "roleAssignmentId": "",
  "api-version": ""
}, context)
```

#### Parameters
* roleAssignmentId (string) **required** - The ID of the role assignment to delete.
* api-version (string) **required** - The API version to use for this operation.

### RoleAssignments_GetById
Gets a role assignment by ID.


```js
azure_arm_authorization.RoleAssignments_GetById({
  "roleAssignmentId": "",
  "api-version": ""
}, context)
```

#### Parameters
* roleAssignmentId (string) **required** - The ID of the role assignment to get.
* api-version (string) **required** - The API version to use for this operation.

### RoleAssignments_CreateById
Creates a role assignment by ID.


```js
azure_arm_authorization.RoleAssignments_CreateById({
  "roleAssignmentId": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Parameters
* roleAssignmentId (string) **required** - The ID of the role assignment to create.
* parameters (undefined) **required** - Role assignment create parameters.
* api-version (string) **required** - The API version to use for this operation.

### RoleDefinitions_GetById
Gets a role definition by ID.


```js
azure_arm_authorization.RoleDefinitions_GetById({
  "roleDefinitionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* roleDefinitionId (string) **required** - The fully qualified role definition ID to get.
* api-version (string) **required** - The API version to use for this operation.

### RoleAssignments_ListForScope
Gets role assignments for a scope.


```js
azure_arm_authorization.RoleAssignments_ListForScope({
  "scope": "",
  "api-version": ""
}, context)
```

#### Parameters
* scope (string) **required** - The scope of the role assignments.
* $filter (string) - The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
* api-version (string) **required** - The API version to use for this operation.

### RoleAssignments_Delete
Deletes a role assignment.


```js
azure_arm_authorization.RoleAssignments_Delete({
  "scope": "",
  "roleAssignmentName": "",
  "api-version": ""
}, context)
```

#### Parameters
* scope (string) **required** - The scope of the role assignment to delete.
* roleAssignmentName (string) **required** - The name of the role assignment to delete.
* api-version (string) **required** - The API version to use for this operation.

### RoleAssignments_Get
Get the specified role assignment.


```js
azure_arm_authorization.RoleAssignments_Get({
  "scope": "",
  "roleAssignmentName": "",
  "api-version": ""
}, context)
```

#### Parameters
* scope (string) **required** - The scope of the role assignment.
* roleAssignmentName (string) **required** - The name of the role assignment to get.
* api-version (string) **required** - The API version to use for this operation.

### RoleAssignments_Create
Creates a role assignment.


```js
azure_arm_authorization.RoleAssignments_Create({
  "scope": "",
  "roleAssignmentName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Parameters
* scope (string) **required** - The scope of the role assignment to create. The scope can be any REST resource instance. For example, use '/subscriptions/{subscription-id}/' for a subscription, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}' for a resource.
* roleAssignmentName (string) **required** - The name of the role assignment to create. It can be any valid GUID.
* parameters (undefined) **required** - Role assignment create parameters.
* api-version (string) **required** - The API version to use for this operation.

### RoleDefinitions_List
Get all role definitions that are applicable at scope and above.


```js
azure_arm_authorization.RoleDefinitions_List({
  "scope": "",
  "api-version": ""
}, context)
```

#### Parameters
* scope (string) **required** - The scope of the role definition.
* $filter (string) - The filter to apply on the operation. Use atScopeAndBelow filter to search below the given scope as well.
* api-version (string) **required** - The API version to use for this operation.

### RoleDefinitions_Delete
Deletes a role definition.


```js
azure_arm_authorization.RoleDefinitions_Delete({
  "scope": "",
  "roleDefinitionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* scope (string) **required** - The scope of the role definition.
* roleDefinitionId (string) **required** - The ID of the role definition to delete.
* api-version (string) **required** - The API version to use for this operation.

### RoleDefinitions_Get
Get role definition by name (GUID).


```js
azure_arm_authorization.RoleDefinitions_Get({
  "scope": "",
  "roleDefinitionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* scope (string) **required** - The scope of the role definition.
* roleDefinitionId (string) **required** - The ID of the role definition.
* api-version (string) **required** - The API version to use for this operation.

### RoleDefinitions_CreateOrUpdate
Creates or updates a role definition.


```js
azure_arm_authorization.RoleDefinitions_CreateOrUpdate({
  "scope": "",
  "roleDefinitionId": "",
  "roleDefinition": null,
  "api-version": ""
}, context)
```

#### Parameters
* scope (string) **required** - The scope of the role definition.
* roleDefinitionId (string) **required** - The ID of the role definition.
* roleDefinition (undefined) **required** - Role definition.
* api-version (string) **required** - The API version to use for this operation.

