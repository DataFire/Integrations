# @datafire/azure_authorization_authorization_denyassignmentgetcalls

Client library for AuthorizationManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_authorization_authorization_denyassignmentgetcalls
```
```js
let azure_authorization_authorization_denyassignmentgetcalls = require('@datafire/azure_authorization_authorization_denyassignmentgetcalls').create({
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

Role based access control provides you a way to apply granular level policy administration down to individual resources or resource groups. These operations enable you to get deny assignments. A deny assignment describes the set of actions on resources that are denied for Azure Active Directory users.

## Actions

### DenyAssignments_List
Gets all deny assignments for the subscription.


```js
azure_authorization_authorization_denyassignmentgetcalls.DenyAssignments_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * api-version **required** `string`: The API version to use for this operation.
  * $filter `string`: The filter to apply on the operation. Use $filter=atScope() to return all deny assignments at or above the scope. Use $filter=denyAssignmentName eq '{name}' to search deny assignments by name at specified scope. Use $filter=principalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. Use $filter=gdprExportPrincipalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned.

#### Output
* output [DenyAssignmentListResult](#denyassignmentlistresult)

### DenyAssignments_ListForResourceGroup
Gets deny assignments for a resource group.


```js
azure_authorization_authorization_denyassignmentgetcalls.DenyAssignments_ListForResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: The API version to use for this operation.
  * $filter `string`: The filter to apply on the operation. Use $filter=atScope() to return all deny assignments at or above the scope. Use $filter=denyAssignmentName eq '{name}' to search deny assignments by name at specified scope. Use $filter=principalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. Use $filter=gdprExportPrincipalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned.

#### Output
* output [DenyAssignmentListResult](#denyassignmentlistresult)

### DenyAssignments_ListForResource
Gets deny assignments for a resource.


```js
azure_authorization_authorization_denyassignmentgetcalls.DenyAssignments_ListForResource({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceProviderNamespace": "",
  "parentResourcePath": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider.
  * parentResourcePath **required** `string`: The parent resource identity.
  * resourceType **required** `string`: The resource type of the resource.
  * resourceName **required** `string`: The name of the resource to get deny assignments for.
  * api-version **required** `string`: The API version to use for this operation.
  * $filter `string`: The filter to apply on the operation. Use $filter=atScope() to return all deny assignments at or above the scope. Use $filter=denyAssignmentName eq '{name}' to search deny assignments by name at specified scope. Use $filter=principalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. Use $filter=gdprExportPrincipalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned.

#### Output
* output [DenyAssignmentListResult](#denyassignmentlistresult)

### DenyAssignments_GetById
Gets a deny assignment by ID.


```js
azure_authorization_authorization_denyassignmentgetcalls.DenyAssignments_GetById({
  "denyAssignmentId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * denyAssignmentId **required** `string`: The fully qualified deny assignment ID. For example, use the format, /subscriptions/{guid}/providers/Microsoft.Authorization/denyAssignments/{denyAssignmentId} for subscription level deny assignments, or /providers/Microsoft.Authorization/denyAssignments/{denyAssignmentId} for tenant level deny assignments.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DenyAssignment](#denyassignment)

### DenyAssignments_ListForScope
Gets deny assignments for a scope.


```js
azure_authorization_authorization_denyassignmentgetcalls.DenyAssignments_ListForScope({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the deny assignments.
  * api-version **required** `string`: The API version to use for this operation.
  * $filter `string`: The filter to apply on the operation. Use $filter=atScope() to return all deny assignments at or above the scope. Use $filter=denyAssignmentName eq '{name}' to search deny assignments by name at specified scope. Use $filter=principalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. Use $filter=gdprExportPrincipalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned.

#### Output
* output [DenyAssignmentListResult](#denyassignmentlistresult)

### DenyAssignments_Get
Get the specified deny assignment.


```js
azure_authorization_authorization_denyassignmentgetcalls.DenyAssignments_Get({
  "scope": "",
  "denyAssignmentId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope of the deny assignment.
  * denyAssignmentId **required** `string`: The ID of the deny assignment to get.
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [DenyAssignment](#denyassignment)



## Definitions

### DenyAssignment
* DenyAssignment `object`: Deny Assignment
  * id `string`: The deny assignment ID.
  * name `string`: The deny assignment name.
  * properties [DenyAssignmentProperties](#denyassignmentproperties)
  * type `string`: The deny assignment type.

### DenyAssignmentFilter
* DenyAssignmentFilter `object`: Deny Assignments filter
  * denyAssignmentName `string`: Return deny assignment with specified name.
  * gdprExportPrincipalId `string`: Return all deny assignments where the specified principal is listed either in the principals list or exclude principals list of deny assignments.
  * principalId `string`: Return all deny assignments where the specified principal is listed in the principals list of deny assignments.

### DenyAssignmentListResult
* DenyAssignmentListResult `object`: Deny assignment list operation result.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: Deny assignment list.
    * items [DenyAssignment](#denyassignment)

### DenyAssignmentPermission
* DenyAssignmentPermission `object`: Deny assignment permissions.
  * actions `array`: Actions to which the deny assignment does not grant access.
    * items `string`
  * dataActions `array`: Data actions to which the deny assignment does not grant access.
    * items `string`
  * notActions `array`: Actions to exclude from that the deny assignment does not grant access.
    * items `string`
  * notDataActions `array`: Data actions to exclude from that the deny assignment does not grant access.
    * items `string`

### DenyAssignmentProperties
* DenyAssignmentProperties `object`: Deny assignment properties.
  * denyAssignmentName `string`: The display name of the deny assignment.
  * description `string`: The description of the deny assignment.
  * doNotApplyToChildScopes `boolean`: Determines if the deny assignment applies to child scopes. Default value is false.
  * excludePrincipals `array`: Array of principals to which the deny assignment does not apply.
    * items [Principal](#principal)
  * isSystemProtected `boolean`: Specifies whether this deny assignment was created by Azure and cannot be edited or deleted.
  * permissions `array`: An array of permissions that are denied by the deny assignment.
    * items [DenyAssignmentPermission](#denyassignmentpermission)
  * principals `array`: Array of principals to which the deny assignment applies.
    * items [Principal](#principal)
  * scope `string`: The deny assignment scope.

### Principal
* Principal `object`: Deny assignment principal.
  * id `string`: Object ID of the Azure AD principal (user, group, or service principal) to which the deny assignment applies. An empty guid '00000000-0000-0000-0000-000000000000' as principal id and principal type as 'Everyone' represents all users, groups and service principals.
  * type `string`: Type of object represented by principal id (user, group, or service principal). An empty guid '00000000-0000-0000-0000-000000000000' as principal id and principal type as 'Everyone' represents all users, groups and service principals.


