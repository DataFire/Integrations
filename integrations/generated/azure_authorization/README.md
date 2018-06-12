# @datafire/azure_authorization

Client library for AuthorizationManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_authorization
```
```js
let azure_authorization = require('@datafire/azure_authorization').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_authorization.ProviderOperationsMetadata_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Role based access control provides you a way to apply granular level policy administration down to individual resources or resource groups. These operations enable you to manage role definitions and role assignments. A role definition describes the set of actions that can be performed on resources. A role assignment grants access to Azure Active Directory users.

## Actions

### ProviderOperationsMetadata_List
Gets provider operations metadata for all resource providers.


```js
azure_authorization.ProviderOperationsMetadata_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * $expand `string`: Specifies whether to expand the values.

#### Output
* output [ProviderOperationsMetadataListResult](#provideroperationsmetadatalistresult)

### ProviderOperationsMetadata_Get
Gets provider operations metadata for the specified resource provider.


```js
azure_authorization.ProviderOperationsMetadata_Get({
  "resourceProviderNamespace": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider.
  * api-version **required** `string`: The API version to use for the operation.
  * $expand `string`: Specifies whether to expand the values.

#### Output
* output [ProviderOperationsMetadata](#provideroperationsmetadata)

### ClassicAdministrators_List
Gets service administrator, account administrator, and co-administrators for the subscription.


```js
azure_authorization.ClassicAdministrators_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ClassicAdministratorListResult](#classicadministratorlistresult)

### RoleAssignments_List
Gets all role assignments for the subscription.


```js
azure_authorization.RoleAssignments_List({
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
azure_authorization.RoleAssignments_ListForResourceGroup({
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

### Permissions_ListForResourceGroup
Gets all permissions the caller has for a resource group.


```js
azure_authorization.Permissions_ListForResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to get the permissions for. The name is case insensitive.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PermissionGetResult](#permissiongetresult)

### Permissions_ListForResource
Gets all permissions the caller has for a resource.


```js
azure_authorization.Permissions_ListForResource({
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
  * parentResourcePath **required** `string`: The parent resource identity.
  * resourceType **required** `string`: The resource type of the resource.
  * resourceName **required** `string`: The name of the resource to get the permissions for.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PermissionGetResult](#permissiongetresult)

### RoleAssignments_ListForResource
Gets role assignments for a resource.


```js
azure_authorization.RoleAssignments_ListForResource({
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
azure_authorization.RoleAssignments_DeleteById({
  "roleAssignmentId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * roleAssignmentId **required** `string`: The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleAssignment](#roleassignment)

### RoleAssignments_GetById
Gets a role assignment by ID.


```js
azure_authorization.RoleAssignments_GetById({
  "roleAssignmentId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * roleAssignmentId **required** `string`: The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleAssignment](#roleassignment)

### RoleAssignments_CreateById
Creates a role assignment by ID.


```js
azure_authorization.RoleAssignments_CreateById({
  "roleAssignmentId": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * roleAssignmentId **required** `string`: The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
  * parameters **required** [RoleAssignmentCreateParameters](#roleassignmentcreateparameters)
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleAssignment](#roleassignment)

### RoleAssignments_ListForScope
Gets role assignments for a scope.


```js
azure_authorization.RoleAssignments_ListForScope({
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
azure_authorization.RoleAssignments_Delete({
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
azure_authorization.RoleAssignments_Get({
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
azure_authorization.RoleAssignments_Create({
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

### RoleDefinitions_List
Get all role definitions that are applicable at scope and above.


```js
azure_authorization.RoleDefinitions_List({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the role definition.
  * $filter `string`: The filter to apply on the operation. Use atScopeAndBelow filter to search below the given scope as well.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleDefinitionListResult](#roledefinitionlistresult)

### RoleDefinitions_Delete
Deletes a role definition.


```js
azure_authorization.RoleDefinitions_Delete({
  "scope": "",
  "roleDefinitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the role definition.
  * roleDefinitionId **required** `string`: The ID of the role definition to delete.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleDefinition](#roledefinition)

### RoleDefinitions_Get
Get role definition by name (GUID).


```js
azure_authorization.RoleDefinitions_Get({
  "scope": "",
  "roleDefinitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the role definition.
  * roleDefinitionId **required** `string`: The ID of the role definition.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleDefinition](#roledefinition)

### RoleDefinitions_CreateOrUpdate
Creates or updates a role definition.


```js
azure_authorization.RoleDefinitions_CreateOrUpdate({
  "scope": "",
  "roleDefinitionId": "",
  "roleDefinition": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the role definition.
  * roleDefinitionId **required** `string`: The ID of the role definition.
  * roleDefinition **required** [RoleDefinition](#roledefinition)
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleDefinition](#roledefinition)



## Definitions

### ClassicAdministrator
* ClassicAdministrator `object`: Classic Administrators
  * id `string`: The ID of the administrator.
  * name `string`: The name of the administrator.
  * properties [ClassicAdministratorProperties](#classicadministratorproperties)
  * type `string`: The type of the administrator.

### ClassicAdministratorListResult
* ClassicAdministratorListResult `object`: ClassicAdministrator list result information.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of administrators.
    * items [ClassicAdministrator](#classicadministrator)

### ClassicAdministratorProperties
* ClassicAdministratorProperties `object`: Classic Administrator properties.
  * emailAddress `string`: The email address of the administrator.
  * role `string`: The role of the administrator.

### Permission
* Permission `object`: Role definition permissions.
  * actions `array`: Allowed actions.
    * items `string`
  * notActions `array`: Denied actions.
    * items `string`

### PermissionGetResult
* PermissionGetResult `object`: Permissions information.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of permissions.
    * items [Permission](#permission)

### ProviderOperation
* ProviderOperation `object`: Operation
  * description `string`: The operation description.
  * displayName `string`: The operation display name.
  * name `string`: The operation name.
  * origin `string`: The operation origin.
  * properties `object`: The operation properties.

### ProviderOperationsMetadata
* ProviderOperationsMetadata `object`: Provider Operations metadata
  * displayName `string`: The provider display name.
  * id `string`: The provider id.
  * name `string`: The provider name.
  * operations `array`: The provider operations.
    * items [ProviderOperation](#provideroperation)
  * resourceTypes `array`: The provider resource types
    * items [ResourceType](#resourcetype)
  * type `string`: The provider type.

### ProviderOperationsMetadataListResult
* ProviderOperationsMetadataListResult `object`: Provider operations metadata list
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: The list of providers.
    * items [ProviderOperationsMetadata](#provideroperationsmetadata)

### ResourceType
* ResourceType `object`: Resource Type
  * displayName `string`: The resource type display name.
  * name `string`: The resource type name.
  * operations `array`: The resource type operations.
    * items [ProviderOperation](#provideroperation)

### RoleAssignment
* RoleAssignment `object`: Role Assignments
  * id `string`: The role assignment ID.
  * name `string`: The role assignment name.
  * properties [RoleAssignmentPropertiesWithScope](#roleassignmentpropertieswithscope)
  * type `string`: The role assignment type.

### RoleAssignmentCreateParameters
* RoleAssignmentCreateParameters `object`: Role assignment create parameters.
  * properties [RoleAssignmentProperties](#roleassignmentproperties)

### RoleAssignmentFilter
* RoleAssignmentFilter `object`: Role Assignments filter
  * principalId `string`: Returns role assignment of the specific principal.

### RoleAssignmentListResult
* RoleAssignmentListResult `object`: Role assignment list operation result.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: Role assignment list.
    * items [RoleAssignment](#roleassignment)

### RoleAssignmentProperties
* RoleAssignmentProperties `object`: Role assignment properties.
  * principalId `string`: The principal ID assigned to the role. This maps to the ID inside the Active Directory. It can point to a user, service principal, or security group.
  * roleDefinitionId `string`: The role definition ID used in the role assignment.

### RoleAssignmentPropertiesWithScope
* RoleAssignmentPropertiesWithScope `object`: Role assignment properties with scope.
  * principalId `string`: The principal ID.
  * roleDefinitionId `string`: The role definition ID.
  * scope `string`: The role assignment scope.

### RoleDefinition
* RoleDefinition `object`: Role definition.
  * id `string`: The role definition ID.
  * name `string`: The role definition name.
  * properties [RoleDefinitionProperties](#roledefinitionproperties)
  * type `string`: The role definition type.

### RoleDefinitionFilter
* RoleDefinitionFilter `object`: Role Definitions filter
  * roleName `string`: Returns role definition with the specific name.

### RoleDefinitionListResult
* RoleDefinitionListResult `object`: Role definition list operation result.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: Role definition list.
    * items [RoleDefinition](#roledefinition)

### RoleDefinitionProperties
* RoleDefinitionProperties `object`: Role definition properties.
  * assignableScopes `array`: Role definition assignable scopes.
    * items `string`
  * description `string`: The role definition description.
  * permissions `array`: Role definition permissions.
    * items [Permission](#permission)
  * roleName `string`: The role name.
  * type `string`: The role type.


