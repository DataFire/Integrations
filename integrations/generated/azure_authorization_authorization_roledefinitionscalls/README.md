# @datafire/azure_authorization_authorization_roledefinitionscalls

Client library for AuthorizationManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_authorization_authorization_roledefinitionscalls
```
```js
let azure_authorization_authorization_roledefinitionscalls = require('@datafire/azure_authorization_authorization_roledefinitionscalls').create({
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

Role based access control provides you a way to apply granular level policy administration down to individual resources or resource groups. These operations allow you to manage role definitions. A role definition describes the set of actions that can be performed on resources.

## Actions

### Permissions_ListForResourceGroup
Gets all permissions the caller has for a resource group.


```js
azure_authorization_authorization_roledefinitionscalls.Permissions_ListForResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PermissionGetResult](#permissiongetresult)

### Permissions_ListForResource
Gets all permissions the caller has for a resource.


```js
azure_authorization_authorization_roledefinitionscalls.Permissions_ListForResource({
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
  * resourceName **required** `string`: The name of the resource to get the permissions for.
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [PermissionGetResult](#permissiongetresult)

### RoleDefinitions_List
Get all role definitions that are applicable at scope and above.


```js
azure_authorization_authorization_roledefinitionscalls.RoleDefinitions_List({
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
azure_authorization_authorization_roledefinitionscalls.RoleDefinitions_Delete({
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
azure_authorization_authorization_roledefinitionscalls.RoleDefinitions_Get({
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
azure_authorization_authorization_roledefinitionscalls.RoleDefinitions_CreateOrUpdate({
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

### Permission
* Permission `object`: Role definition permissions.
  * actions `array`: Allowed actions.
    * items `string`
  * dataActions `array`: Allowed Data actions.
    * items `string`
  * notActions `array`: Denied actions.
    * items `string`
  * notDataActions `array`: Denied Data actions.
    * items `string`

### PermissionGetResult
* PermissionGetResult `object`: Permissions information.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of permissions.
    * items [Permission](#permission)

### RoleDefinition
* RoleDefinition `object`: Role definition.
  * id `string`: The role definition ID.
  * name `string`: The role definition name.
  * properties [RoleDefinitionProperties](#roledefinitionproperties)
  * type `string`: The role definition type.

### RoleDefinitionFilter
* RoleDefinitionFilter `object`: Role Definitions filter
  * roleName `string`: Returns role definition with the specific name.
  * type `string`: Returns role definition with the specific type.

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


