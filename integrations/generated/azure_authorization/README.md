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

### RoleDefinitions_GetById
Gets a role definition by ID.


```js
azure_authorization.RoleDefinitions_GetById({
  "roleDefinitionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * roleDefinitionId **required** `string`: The fully qualified role definition ID. Use the format, /subscriptions/{guid}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId} for subscription level role definitions, or /providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId} for tenant level role definitions.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [RoleDefinition](#roledefinition)

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


