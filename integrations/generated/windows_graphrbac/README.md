# @datafire/windows_graphrbac

Client library for GraphRbacManagementClient

## Installation and Usage
```bash
npm install --save @datafire/windows_graphrbac
```
```js
let windows_graphrbac = require('@datafire/windows_graphrbac').create({
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

The Graph RBAC Management Client

## Actions

### Applications_List
Lists applications by filter parameters.


```js
windows_graphrbac.Applications_List({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filters to apply to the operation.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [ApplicationListResult](#applicationlistresult)

### Applications_Create
Create a new application.


```js
windows_graphrbac.Applications_Create({
  "parameters": {
    "displayName": ""
  },
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [ApplicationCreateParameters](#applicationcreateparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [Application](#application)

### Applications_Delete
Delete an application.


```js
windows_graphrbac.Applications_Delete({
  "applicationObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * applicationObjectId **required** `string`: Application object ID.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### Applications_Get
Get an application by object ID.


```js
windows_graphrbac.Applications_Get({
  "applicationObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * applicationObjectId **required** `string`: Application object ID.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [Application](#application)

### Applications_Patch
Update an existing application.


```js
windows_graphrbac.Applications_Patch({
  "applicationObjectId": "",
  "parameters": {},
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * applicationObjectId **required** `string`: Application object ID.
  * parameters **required** [ApplicationUpdateParameters](#applicationupdateparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### Applications_AddOwner
Add an owner to an application.


```js
windows_graphrbac.Applications_AddOwner({
  "applicationObjectId": "",
  "parameters": {
    "url": ""
  },
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * applicationObjectId **required** `string`: The object ID of the application to which to add the owner.
  * parameters **required** [AddOwnerParameters](#addownerparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### Applications_RemoveOwner
Remove a member from owners.


```js
windows_graphrbac.Applications_RemoveOwner({
  "applicationObjectId": "",
  "ownerObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * applicationObjectId **required** `string`: The object ID of the application from which to remove the owner.
  * ownerObjectId **required** `string`: Owner object id
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### Applications_ListKeyCredentials
Get the keyCredentials associated with an application.


```js
windows_graphrbac.Applications_ListKeyCredentials({
  "applicationObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * applicationObjectId **required** `string`: Application object ID.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [KeyCredentialListResult](#keycredentiallistresult)

### Applications_UpdateKeyCredentials
Update the keyCredentials associated with an application.


```js
windows_graphrbac.Applications_UpdateKeyCredentials({
  "applicationObjectId": "",
  "parameters": {
    "value": []
  },
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * applicationObjectId **required** `string`: Application object ID.
  * parameters **required** [KeyCredentialsUpdateParameters](#keycredentialsupdateparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### Applications_ListOwners
The owners are a set of non-admin users who are allowed to modify this object.


```js
windows_graphrbac.Applications_ListOwners({
  "applicationObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * applicationObjectId **required** `string`: The object ID of the application for which to get owners.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [DirectoryObjectListResult](#directoryobjectlistresult)

### Applications_ListPasswordCredentials
Get the passwordCredentials associated with an application.


```js
windows_graphrbac.Applications_ListPasswordCredentials({
  "applicationObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * applicationObjectId **required** `string`: Application object ID.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [PasswordCredentialListResult](#passwordcredentiallistresult)

### Applications_UpdatePasswordCredentials
Update passwordCredentials associated with an application.


```js
windows_graphrbac.Applications_UpdatePasswordCredentials({
  "applicationObjectId": "",
  "parameters": {
    "value": []
  },
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * applicationObjectId **required** `string`: Application object ID.
  * parameters **required** [PasswordCredentialsUpdateParameters](#passwordcredentialsupdateparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### DeletedApplications_List
Gets a list of deleted applications in the directory.


```js
windows_graphrbac.DeletedApplications_List({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filter to apply to the operation.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [ApplicationListResult](#applicationlistresult)

### DeletedApplications_HardDelete
Hard-delete an application.


```js
windows_graphrbac.DeletedApplications_HardDelete({
  "applicationObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * applicationObjectId **required** `string`: Application object ID.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### DeletedApplications_Restore
Restores the deleted application in the directory.


```js
windows_graphrbac.DeletedApplications_Restore({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: Application object ID.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [Application](#application)

### Domains_List
Gets a list of domains for the current tenant.


```js
windows_graphrbac.Domains_List({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filter to apply to the operation.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [DomainListResult](#domainlistresult)

### Domains_Get
Gets a specific domain in the current tenant.


```js
windows_graphrbac.Domains_Get({
  "domainName": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * domainName **required** `string`: name of the domain.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [Domain](#domain)

### Objects_GetObjectsByObjectIds
Gets the directory objects specified in a list of object IDs. You can also specify which resource collections (users, groups, etc.) should be searched by specifying the optional types parameter.


```js
windows_graphrbac.Objects_GetObjectsByObjectIds({
  "parameters": {},
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [GetObjectsParameters](#getobjectsparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [DirectoryObjectListResult](#directoryobjectlistresult)

### Groups_List
Gets list of groups for the current tenant.


```js
windows_graphrbac.Groups_List({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filter to apply to the operation.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [GroupListResult](#grouplistresult)

### Groups_Create
Create a group in the directory.


```js
windows_graphrbac.Groups_Create({
  "parameters": {
    "displayName": "",
    "mailEnabled": true,
    "mailNickname": "",
    "securityEnabled": true
  },
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [GroupCreateParameters](#groupcreateparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [ADGroup](#adgroup)

### Groups_AddMember
Add a member to a group.


```js
windows_graphrbac.Groups_AddMember({
  "groupObjectId": "",
  "parameters": {
    "url": ""
  },
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * groupObjectId **required** `string`: The object ID of the group to which to add the member.
  * parameters **required** [GroupAddMemberParameters](#groupaddmemberparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### Groups_RemoveMember
Remove a member from a group.


```js
windows_graphrbac.Groups_RemoveMember({
  "groupObjectId": "",
  "memberObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * groupObjectId **required** `string`: The object ID of the group from which to remove the member.
  * memberObjectId **required** `string`: Member object id
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### Groups_Delete
Delete a group from the directory.


```js
windows_graphrbac.Groups_Delete({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the group to delete.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### Groups_Get
Gets group information from the directory.


```js
windows_graphrbac.Groups_Get({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the user for which to get group information.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [ADGroup](#adgroup)

### Groups_AddOwner
Add an owner to a group.


```js
windows_graphrbac.Groups_AddOwner({
  "objectId": "",
  "parameters": {
    "url": ""
  },
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the application to which to add the owner.
  * parameters **required** [AddOwnerParameters](#addownerparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### Groups_RemoveOwner
Remove a member from owners.


```js
windows_graphrbac.Groups_RemoveOwner({
  "objectId": "",
  "ownerObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the group from which to remove the owner.
  * ownerObjectId **required** `string`: Owner object id
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### Groups_GetMemberGroups
Gets a collection of object IDs of groups of which the specified group is a member.


```js
windows_graphrbac.Groups_GetMemberGroups({
  "objectId": "",
  "parameters": {
    "securityEnabledOnly": true
  },
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the group for which to get group membership.
  * parameters **required** [GroupGetMemberGroupsParameters](#groupgetmembergroupsparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [GroupGetMemberGroupsResult](#groupgetmembergroupsresult)

### Groups_GetGroupMembers
Gets the members of a group.


```js
windows_graphrbac.Groups_GetGroupMembers({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the group whose members should be retrieved.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [DirectoryObjectListResult](#directoryobjectlistresult)

### Groups_ListOwners
The owners are a set of non-admin users who are allowed to modify this object.


```js
windows_graphrbac.Groups_ListOwners({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the group for which to get owners.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [DirectoryObjectListResult](#directoryobjectlistresult)

### Groups_IsMemberOf
Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.


```js
windows_graphrbac.Groups_IsMemberOf({
  "parameters": {
    "groupId": "",
    "memberId": ""
  },
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [CheckGroupMembershipParameters](#checkgroupmembershipparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [CheckGroupMembershipResult](#checkgroupmembershipresult)

### SignedInUser_Get
Gets the details for the currently logged-in user.


```js
windows_graphrbac.SignedInUser_Get({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [User](#user)

### SignedInUser_ListOwnedObjects
Get the list of directory objects that are owned by the user.


```js
windows_graphrbac.SignedInUser_ListOwnedObjects({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [DirectoryObjectListResult](#directoryobjectlistresult)

### OAuth2PermissionGrant_List
Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.


```js
windows_graphrbac.OAuth2PermissionGrant_List({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: This is the Service Principal ObjectId associated with the app
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [OAuth2PermissionGrantListResult](#oauth2permissiongrantlistresult)

### OAuth2PermissionGrant_Create
Grants OAuth2 permissions for the relevant resource Ids of an app.


```js
windows_graphrbac.OAuth2PermissionGrant_Create({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * body [OAuth2PermissionGrant](#oauth2permissiongrant)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [OAuth2PermissionGrant](#oauth2permissiongrant)

### OAuth2PermissionGrant_Delete
Delete a OAuth2 permission grant for the relevant resource Ids of an app.


```js
windows_graphrbac.OAuth2PermissionGrant_Delete({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of a permission grant.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### ServicePrincipals_List
Gets a list of service principals from the current tenant.


```js
windows_graphrbac.ServicePrincipals_List({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filter to apply to the operation.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [ServicePrincipalListResult](#serviceprincipallistresult)

### ServicePrincipals_Create
Creates a service principal in the directory.


```js
windows_graphrbac.ServicePrincipals_Create({
  "parameters": {
    "appId": ""
  },
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [ServicePrincipalCreateParameters](#serviceprincipalcreateparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [ServicePrincipal](#serviceprincipal)

### ServicePrincipals_Delete
Deletes a service principal from the directory.


```js
windows_graphrbac.ServicePrincipals_Delete({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the service principal to delete.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### ServicePrincipals_Get
Gets service principal information from the directory. Query by objectId or pass a filter to query by appId


```js
windows_graphrbac.ServicePrincipals_Get({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the service principal to get.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [ServicePrincipal](#serviceprincipal)

### ServicePrincipals_Update
Updates a service principal in the directory.


```js
windows_graphrbac.ServicePrincipals_Update({
  "objectId": "",
  "parameters": {},
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the service principal to delete.
  * parameters **required** [ServicePrincipalUpdateParameters](#serviceprincipalupdateparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### ServicePrincipals_ListKeyCredentials
Get the keyCredentials associated with the specified service principal.


```js
windows_graphrbac.ServicePrincipals_ListKeyCredentials({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the service principal for which to get keyCredentials.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [KeyCredentialListResult](#keycredentiallistresult)

### ServicePrincipals_UpdateKeyCredentials
Update the keyCredentials associated with a service principal.


```js
windows_graphrbac.ServicePrincipals_UpdateKeyCredentials({
  "objectId": "",
  "parameters": {
    "value": []
  },
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID for which to get service principal information.
  * parameters **required** [KeyCredentialsUpdateParameters](#keycredentialsupdateparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### ServicePrincipals_ListOwners
The owners are a set of non-admin users who are allowed to modify this object.


```js
windows_graphrbac.ServicePrincipals_ListOwners({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the service principal for which to get owners.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [DirectoryObjectListResult](#directoryobjectlistresult)

### ServicePrincipals_ListPasswordCredentials
Gets the passwordCredentials associated with a service principal.


```js
windows_graphrbac.ServicePrincipals_ListPasswordCredentials({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the service principal.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [PasswordCredentialListResult](#passwordcredentiallistresult)

### ServicePrincipals_UpdatePasswordCredentials
Updates the passwordCredentials associated with a service principal.


```js
windows_graphrbac.ServicePrincipals_UpdatePasswordCredentials({
  "objectId": "",
  "parameters": {
    "value": []
  },
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the service principal.
  * parameters **required** [PasswordCredentialsUpdateParameters](#passwordcredentialsupdateparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### Applications_GetServicePrincipalsIdByAppId
Gets an object id for a given application id from the current tenant.


```js
windows_graphrbac.Applications_GetServicePrincipalsIdByAppId({
  "api-version": "",
  "tenantID": "",
  "applicationID": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.
  * applicationID **required** `string`: The application ID.

#### Output
* output [ServicePrincipalObjectResult](#serviceprincipalobjectresult)

### Users_List
Gets list of users for the current tenant.


```js
windows_graphrbac.Users_List({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filter to apply to the operation.
  * $expand `string`: The expand value for the operation result.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [UserListResult](#userlistresult)

### Users_Create
Create a new user.


```js
windows_graphrbac.Users_Create({
  "parameters": {
    "accountEnabled": true,
    "displayName": "",
    "passwordProfile": {
      "password": ""
    },
    "userPrincipalName": "",
    "mailNickname": ""
  },
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [UserCreateParameters](#usercreateparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [User](#user)

### Users_GetMemberGroups
Gets a collection that contains the object IDs of the groups of which the user is a member.


```js
windows_graphrbac.Users_GetMemberGroups({
  "objectId": "",
  "parameters": {
    "securityEnabledOnly": true
  },
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * objectId **required** `string`: The object ID of the user for which to get group membership.
  * parameters **required** [UserGetMemberGroupsParameters](#usergetmembergroupsparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [UserGetMemberGroupsResult](#usergetmembergroupsresult)

### Users_Delete
Delete a user.


```js
windows_graphrbac.Users_Delete({
  "upnOrObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * upnOrObjectId **required** `string`: The object ID or principal name of the user to delete.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*

### Users_Get
Gets user information from the directory.


```js
windows_graphrbac.Users_Get({
  "upnOrObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * upnOrObjectId **required** `string`: The object ID or principal name of the user for which to get information.
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [User](#user)

### Users_Update
Updates a user.


```js
windows_graphrbac.Users_Update({
  "upnOrObjectId": "",
  "parameters": {},
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * upnOrObjectId **required** `string`: The object ID or principal name of the user to update.
  * parameters **required** [UserUpdateParameters](#userupdateparameters)
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
*Output schema unknown*



## Definitions

### ADGroup
* ADGroup `object`: Active Directory group information.
  * displayName `string`: The display name of the group.
  * mail `string`: The primary email address of the group.
  * mailEnabled `boolean`: Whether the group is mail-enabled. Must be false. This is because only pure security groups can be created using the Graph API.
  * mailNickname `string`: The mail alias for the group. 
  * securityEnabled `boolean`: Whether the group is security-enable.
  * deletionTimestamp `string`: The time at which the directory object was deleted.
  * objectId `string`: The object ID.
  * objectType **required** `string`: The object type.

### AddOwnerParameters
* AddOwnerParameters `object`: Request parameters for adding a owner to an application.
  * url **required** `string`: A owner object URL, such as "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd", where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the owner (user, application, servicePrincipal, group) to be added.

### AppRole
* AppRole `object`
  * allowedMemberTypes `array`: Specifies whether this app role definition can be assigned to users and groups by setting to 'User', or to other applications (that are accessing this application in daemon service scenarios) by setting to 'Application', or to both. 
    * items `string`
  * description `string`: Permission help text that appears in the admin app assignment and consent experiences.
  * displayName `string`: Display name for the permission that appears in the admin consent and app assignment experiences.
  * id `string`: Unique role identifier inside the appRoles collection.
  * isEnabled `boolean`: When creating or updating a role definition, this must be set to true (which is the default). To delete a role, this must first be set to false. At that point, in a subsequent call, this role may be removed.
  * value `string`: Specifies the value of the roles claim that the application should expect in the authentication and access tokens.

### Application
* Application `object`: Active Directory application information.
  * allowGuestsSignIn `boolean`: A property on the application to indicate if the application accepts other IDPs or not or partially accepts.
  * allowPassthroughUsers `boolean`: Indicates that the application supports pass through users who have no presence in the resource tenant.
  * appId `string`: The application ID.
  * appLogoUrl `string`: The url for the application logo image stored in a CDN.
  * appPermissions `array`: The application permissions.
    * items `string`
  * appRoles `array`: The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.
    * items [AppRole](#approle)
  * availableToOtherTenants `boolean`: Whether the application is available to other tenants.
  * displayName `string`: The display name of the application.
  * errorUrl `string`: A URL provided by the author of the application to report errors when using the application.
  * groupMembershipClaims [GroupMembershipClaims](#groupmembershipclaims)
  * homepage `string`: The home page of the application.
  * identifierUris `array`: A collection of URIs for the application.
    * items `string`
  * informationalUrls [InformationalUrl](#informationalurl)
  * isDeviceOnlyAuthSupported `boolean`: Specifies whether this application supports device authentication without a user. The default is false.
  * keyCredentials `array`: A collection of KeyCredential objects.
    * items [KeyCredential](#keycredential)
  * knownClientApplications `array`: Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource).
    * items `string`
  * logoutUrl `string`: the url of the logout page
  * oauth2AllowImplicitFlow `boolean`: Whether to allow implicit grant flow for OAuth2
  * oauth2AllowUrlPathMatching `boolean`: Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false.
  * oauth2Permissions `array`: The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent.
    * items [OAuth2Permission](#oauth2permission)
  * oauth2RequirePostResponse `boolean`: Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed.
  * optionalClaims [OptionalClaims](#optionalclaims)
  * orgRestrictions `array`: A list of tenants allowed to access application.
    * items `string`
  * passwordCredentials `array`: A collection of PasswordCredential objects
    * items [PasswordCredential](#passwordcredential)
  * preAuthorizedApplications `array`: list of pre-authorized applications.
    * items [PreAuthorizedApplication](#preauthorizedapplication)
  * publicClient `boolean`: Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false.
  * publisherDomain `string`: Reliable domain which can be used to identify an application.
  * replyUrls `array`: A collection of reply URLs for the application.
    * items `string`
  * requiredResourceAccess `array`: Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.
    * items [RequiredResourceAccess](#requiredresourceaccess)
  * samlMetadataUrl `string`: The URL to the SAML metadata for the application.
  * signInAudience `string`: Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts).
  * wwwHomepage `string`: The primary Web page.
  * deletionTimestamp `string`: The time at which the directory object was deleted.
  * objectId `string`: The object ID.
  * objectType **required** `string`: The object type.

### ApplicationBase
* ApplicationBase `object`: Active Directive Application common properties shared among GET, POST and PATCH
  * allowGuestsSignIn `boolean`: A property on the application to indicate if the application accepts other IDPs or not or partially accepts.
  * allowPassthroughUsers `boolean`: Indicates that the application supports pass through users who have no presence in the resource tenant.
  * appLogoUrl `string`: The url for the application logo image stored in a CDN.
  * appPermissions `array`: The application permissions.
    * items `string`
  * appRoles `array`: The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.
    * items [AppRole](#approle)
  * availableToOtherTenants `boolean`: Whether the application is available to other tenants.
  * errorUrl `string`: A URL provided by the author of the application to report errors when using the application.
  * groupMembershipClaims [GroupMembershipClaims](#groupmembershipclaims)
  * homepage `string`: The home page of the application.
  * informationalUrls [InformationalUrl](#informationalurl)
  * isDeviceOnlyAuthSupported `boolean`: Specifies whether this application supports device authentication without a user. The default is false.
  * keyCredentials `array`: A collection of KeyCredential objects.
    * items [KeyCredential](#keycredential)
  * knownClientApplications `array`: Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource).
    * items `string`
  * logoutUrl `string`: the url of the logout page
  * oauth2AllowImplicitFlow `boolean`: Whether to allow implicit grant flow for OAuth2
  * oauth2AllowUrlPathMatching `boolean`: Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false.
  * oauth2Permissions `array`: The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent.
    * items [OAuth2Permission](#oauth2permission)
  * oauth2RequirePostResponse `boolean`: Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed.
  * optionalClaims [OptionalClaims](#optionalclaims)
  * orgRestrictions `array`: A list of tenants allowed to access application.
    * items `string`
  * passwordCredentials `array`: A collection of PasswordCredential objects
    * items [PasswordCredential](#passwordcredential)
  * preAuthorizedApplications `array`: list of pre-authorized applications.
    * items [PreAuthorizedApplication](#preauthorizedapplication)
  * publicClient `boolean`: Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false.
  * publisherDomain `string`: Reliable domain which can be used to identify an application.
  * replyUrls `array`: A collection of reply URLs for the application.
    * items `string`
  * requiredResourceAccess `array`: Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.
    * items [RequiredResourceAccess](#requiredresourceaccess)
  * samlMetadataUrl `string`: The URL to the SAML metadata for the application.
  * signInAudience `string`: Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts).
  * wwwHomepage `string`: The primary Web page.

### ApplicationCreateParameters
* ApplicationCreateParameters `object`: Request parameters for creating a new application.
  * displayName **required** `string`: The display name of the application.
  * identifierUris `array`: A collection of URIs for the application.
    * items `string`
  * allowGuestsSignIn `boolean`: A property on the application to indicate if the application accepts other IDPs or not or partially accepts.
  * allowPassthroughUsers `boolean`: Indicates that the application supports pass through users who have no presence in the resource tenant.
  * appLogoUrl `string`: The url for the application logo image stored in a CDN.
  * appPermissions `array`: The application permissions.
    * items `string`
  * appRoles `array`: The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.
    * items [AppRole](#approle)
  * availableToOtherTenants `boolean`: Whether the application is available to other tenants.
  * errorUrl `string`: A URL provided by the author of the application to report errors when using the application.
  * groupMembershipClaims [GroupMembershipClaims](#groupmembershipclaims)
  * homepage `string`: The home page of the application.
  * informationalUrls [InformationalUrl](#informationalurl)
  * isDeviceOnlyAuthSupported `boolean`: Specifies whether this application supports device authentication without a user. The default is false.
  * keyCredentials `array`: A collection of KeyCredential objects.
    * items [KeyCredential](#keycredential)
  * knownClientApplications `array`: Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource).
    * items `string`
  * logoutUrl `string`: the url of the logout page
  * oauth2AllowImplicitFlow `boolean`: Whether to allow implicit grant flow for OAuth2
  * oauth2AllowUrlPathMatching `boolean`: Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false.
  * oauth2Permissions `array`: The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent.
    * items [OAuth2Permission](#oauth2permission)
  * oauth2RequirePostResponse `boolean`: Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed.
  * optionalClaims [OptionalClaims](#optionalclaims)
  * orgRestrictions `array`: A list of tenants allowed to access application.
    * items `string`
  * passwordCredentials `array`: A collection of PasswordCredential objects
    * items [PasswordCredential](#passwordcredential)
  * preAuthorizedApplications `array`: list of pre-authorized applications.
    * items [PreAuthorizedApplication](#preauthorizedapplication)
  * publicClient `boolean`: Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false.
  * publisherDomain `string`: Reliable domain which can be used to identify an application.
  * replyUrls `array`: A collection of reply URLs for the application.
    * items `string`
  * requiredResourceAccess `array`: Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.
    * items [RequiredResourceAccess](#requiredresourceaccess)
  * samlMetadataUrl `string`: The URL to the SAML metadata for the application.
  * signInAudience `string`: Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts).
  * wwwHomepage `string`: The primary Web page.

### ApplicationListResult
* ApplicationListResult `object`: Application list operation result.
  * odata.nextLink `string`: The URL to get the next set of results.
  * value `array`: A collection of applications.
    * items [Application](#application)

### ApplicationUpdateParameters
* ApplicationUpdateParameters `object`: Request parameters for updating a new application.
  * displayName `string`: The display name of the application.
  * identifierUris `array`: A collection of URIs for the application.
    * items `string`
  * allowGuestsSignIn `boolean`: A property on the application to indicate if the application accepts other IDPs or not or partially accepts.
  * allowPassthroughUsers `boolean`: Indicates that the application supports pass through users who have no presence in the resource tenant.
  * appLogoUrl `string`: The url for the application logo image stored in a CDN.
  * appPermissions `array`: The application permissions.
    * items `string`
  * appRoles `array`: The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.
    * items [AppRole](#approle)
  * availableToOtherTenants `boolean`: Whether the application is available to other tenants.
  * errorUrl `string`: A URL provided by the author of the application to report errors when using the application.
  * groupMembershipClaims [GroupMembershipClaims](#groupmembershipclaims)
  * homepage `string`: The home page of the application.
  * informationalUrls [InformationalUrl](#informationalurl)
  * isDeviceOnlyAuthSupported `boolean`: Specifies whether this application supports device authentication without a user. The default is false.
  * keyCredentials `array`: A collection of KeyCredential objects.
    * items [KeyCredential](#keycredential)
  * knownClientApplications `array`: Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource).
    * items `string`
  * logoutUrl `string`: the url of the logout page
  * oauth2AllowImplicitFlow `boolean`: Whether to allow implicit grant flow for OAuth2
  * oauth2AllowUrlPathMatching `boolean`: Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false.
  * oauth2Permissions `array`: The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent.
    * items [OAuth2Permission](#oauth2permission)
  * oauth2RequirePostResponse `boolean`: Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed.
  * optionalClaims [OptionalClaims](#optionalclaims)
  * orgRestrictions `array`: A list of tenants allowed to access application.
    * items `string`
  * passwordCredentials `array`: A collection of PasswordCredential objects
    * items [PasswordCredential](#passwordcredential)
  * preAuthorizedApplications `array`: list of pre-authorized applications.
    * items [PreAuthorizedApplication](#preauthorizedapplication)
  * publicClient `boolean`: Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false.
  * publisherDomain `string`: Reliable domain which can be used to identify an application.
  * replyUrls `array`: A collection of reply URLs for the application.
    * items `string`
  * requiredResourceAccess `array`: Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.
    * items [RequiredResourceAccess](#requiredresourceaccess)
  * samlMetadataUrl `string`: The URL to the SAML metadata for the application.
  * signInAudience `string`: Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts).
  * wwwHomepage `string`: The primary Web page.

### CheckGroupMembershipParameters
* CheckGroupMembershipParameters `object`: Request parameters for IsMemberOf API call.
  * groupId **required** `string`: The object ID of the group to check.
  * memberId **required** `string`: The object ID of the contact, group, user, or service principal to check for membership in the specified group.

### CheckGroupMembershipResult
* CheckGroupMembershipResult `object`: Server response for IsMemberOf API call
  * value `boolean`: True if the specified user, group, contact, or service principal has either direct or transitive membership in the specified group; otherwise, false.

### DirectoryObject
* DirectoryObject `object`: Represents an Azure Active Directory object.
  * deletionTimestamp `string`: The time at which the directory object was deleted.
  * objectId `string`: The object ID.
  * objectType **required** `string`: The object type.

### DirectoryObjectListResult
* DirectoryObjectListResult `object`: DirectoryObject list operation result.
  * odata.nextLink `string`: The URL to get the next set of results.
  * value `array`: A collection of DirectoryObject.
    * items [DirectoryObject](#directoryobject)

### Domain
* Domain `object`: Active Directory Domain information.
  * authenticationType `string`: the type of the authentication into the domain.
  * isDefault `boolean`: if this is the default domain in the tenant.
  * isVerified `boolean`: if this domain's ownership is verified.
  * name **required** `string`: the domain name.

### DomainListResult
* DomainListResult `object`: Server response for Get tenant domains API call.
  * value `array`: the list of domains.
    * items [Domain](#domain)

### ErrorMessage
* ErrorMessage `object`: Active Directory error message.
  * value `string`: Error message value.

### GetObjectsParameters
* GetObjectsParameters `object`: Request parameters for the GetObjectsByObjectIds API.
  * includeDirectoryObjectReferences `boolean`: If true, also searches for object IDs in the partner tenant.
  * objectIds `array`: The requested object IDs.
    * items `string`
  * types `array`: The requested object types.
    * items `string`

### GraphError
* GraphError `object`: Active Directory error information.
  * odata.error [OdataError](#odataerror)

### GroupAddMemberParameters
* GroupAddMemberParameters `object`: Request parameters for adding a member to a group.
  * url **required** `string`: A member object URL, such as "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd", where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the member (user, application, servicePrincipal, group) to be added.

### GroupCreateParameters
* GroupCreateParameters `object`: Request parameters for creating a new group.
  * displayName **required** `string`: Group display name
  * mailEnabled **required** `boolean` (values: false): Whether the group is mail-enabled. Must be false. This is because only pure security groups can be created using the Graph API.
  * mailNickname **required** `string`: Mail nickname
  * securityEnabled **required** `boolean` (values: true): Whether the group is a security group. Must be true. This is because only pure security groups can be created using the Graph API.

### GroupGetMemberGroupsParameters
* GroupGetMemberGroupsParameters `object`: Request parameters for GetMemberGroups API call.
  * securityEnabledOnly **required** `boolean`: If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked.

### GroupGetMemberGroupsResult
* GroupGetMemberGroupsResult `object`: Server response for GetMemberGroups API call.
  * value `array`: A collection of group IDs of which the group is a member.
    * items `string`

### GroupListResult
* GroupListResult `object`: Server response for Get tenant groups API call
  * odata.nextLink `string`: The URL to get the next set of results.
  * value `array`: A collection of Active Directory groups.
    * items [ADGroup](#adgroup)

### GroupMembershipClaims
* GroupMembershipClaims `string` (values: None, SecurityGroup, All): Configures the groups claim issued in a user or OAuth 2.0 access token that the app expects.

### InformationalUrl
* InformationalUrl `object`: Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.
  * marketing `string`: The marketing URI
  * privacy `string`: The privacy policy URI
  * support `string`: The support URI
  * termsOfService `string`: The terms of service URI

### KeyCredential
* KeyCredential `object`: Active Directory Key Credential information.
  * customKeyIdentifier `string`: Custom Key Identifier
  * endDate `string`: End date.
  * keyId `string`: Key ID.
  * startDate `string`: Start date.
  * type `string`: Type. Acceptable values are 'AsymmetricX509Cert' and 'Symmetric'.
  * usage `string`: Usage. Acceptable values are 'Verify' and 'Sign'.
  * value `string`: Key value.

### KeyCredentialListResult
* KeyCredentialListResult `object`: KeyCredential list operation result.
  * value `array`: A collection of KeyCredentials.
    * items [KeyCredential](#keycredential)

### KeyCredentialsUpdateParameters
* KeyCredentialsUpdateParameters `object`: Request parameters for a KeyCredentials update operation
  * value **required** `array`: A collection of KeyCredentials.
    * items [KeyCredential](#keycredential)

### OAuth2Permission
* OAuth2Permission `object`: Represents an OAuth 2.0 delegated permission scope. The specified OAuth 2.0 delegated permission scopes may be requested by client applications (through the requiredResourceAccess collection on the Application object) when calling a resource application. The oauth2Permissions property of the ServicePrincipal entity and of the Application entity is a collection of OAuth2Permission.
  * adminConsentDescription `string`: Permission help text that appears in the admin consent and app assignment experiences.
  * adminConsentDisplayName `string`: Display name for the permission that appears in the admin consent and app assignment experiences.
  * id `string`: Unique scope permission identifier inside the oauth2Permissions collection.
  * isEnabled `boolean`: When creating or updating a permission, this property must be set to true (which is the default). To delete a permission, this property must first be set to false. At that point, in a subsequent call, the permission may be removed. 
  * type `string`: Specifies whether this scope permission can be consented to by an end user, or whether it is a tenant-wide permission that must be consented to by a Company Administrator. Possible values are "User" or "Admin".
  * userConsentDescription `string`: Permission help text that appears in the end user consent experience.
  * userConsentDisplayName `string`: Display name for the permission that appears in the end user consent experience.
  * value `string`: The value of the scope claim that the resource application should expect in the OAuth 2.0 access token.

### OAuth2PermissionGrant
* OAuth2PermissionGrant `object`
  * clientId `string`: The id of the resource's service principal granted consent to impersonate the user when accessing the resource (represented by the resourceId property).
  * consentType `string` (values: AllPrincipals, Principal): Indicates if consent was provided by the administrator (on behalf of the organization) or by an individual.
  * expiryTime `string`: Expiry time for TTL
  * objectId `string`: The id of the permission grant
  * odata.type `string`: Microsoft.DirectoryServices.OAuth2PermissionGrant
  * principalId `string`: When consent type is Principal, this property specifies the id of the user that granted consent and applies only for that user.
  * resourceId `string`: Object Id of the resource you want to grant
  * scope `string`: Specifies the value of the scope claim that the resource application should expect in the OAuth 2.0 access token. For example, User.Read
  * startTime `string`: Start time for TTL

### OAuth2PermissionGrantListResult
* OAuth2PermissionGrantListResult `object`: Server response for get oauth2 permissions grants
  * odata.nextLink `string`: the URL to get the next set of results.
  * value `array`: the list of oauth2 permissions grants
    * items [OAuth2PermissionGrant](#oauth2permissiongrant)

### OdataError
* OdataError `object`: Active Directory OData error information.
  * code `string`: Error code.
  * message [ErrorMessage](#errormessage)

### OptionalClaim
* OptionalClaim `object`: Specifying the claims to be included in a token.
  * additionalProperties `object`
  * essential `boolean`: Is this a required claim.
  * name `string`: Claim name.
  * source `string`: Claim source.

### OptionalClaims
* OptionalClaims `object`: Specifying the claims to be included in the token.
  * accessToken `array`: Optional claims requested to be included in the access token.
    * items [OptionalClaim](#optionalclaim)
  * idToken `array`: Optional claims requested to be included in the id token.
    * items [OptionalClaim](#optionalclaim)
  * samlToken `array`: Optional claims requested to be included in the saml token.
    * items [OptionalClaim](#optionalclaim)

### PasswordCredential
* PasswordCredential `object`: Active Directory Password Credential information.
  * customKeyIdentifier `string`: Custom Key Identifier
  * endDate `string`: End date.
  * keyId `string`: Key ID.
  * startDate `string`: Start date.
  * value `string`: Key value.

### PasswordCredentialListResult
* PasswordCredentialListResult `object`: PasswordCredential list operation result.
  * value `array`: A collection of PasswordCredentials.
    * items [PasswordCredential](#passwordcredential)

### PasswordCredentialsUpdateParameters
* PasswordCredentialsUpdateParameters `object`: Request parameters for a PasswordCredentials update operation.
  * value **required** `array`: A collection of PasswordCredentials.
    * items [PasswordCredential](#passwordcredential)

### PasswordProfile
* PasswordProfile `object`: The password profile associated with a user.
  * forceChangePasswordNextLogin `boolean`: Whether to force a password change on next login.
  * password **required** `string`: Password

### PreAuthorizedApplication
* PreAuthorizedApplication `object`: Contains information about pre authorized client application.
  * appId `string`: Represents the application id.
  * extensions `array`: Collection of extensions from the resource application.
    * items [PreAuthorizedApplicationExtension](#preauthorizedapplicationextension)
  * permissions `array`: Collection of required app permissions/entitlements from the resource application.
    * items [PreAuthorizedApplicationPermission](#preauthorizedapplicationpermission)

### PreAuthorizedApplicationExtension
* PreAuthorizedApplicationExtension `object`: Representation of an app PreAuthorizedApplicationExtension required by a pre authorized client app.
  * conditions `array`: The extension's conditions.
    * items `string`

### PreAuthorizedApplicationPermission
* PreAuthorizedApplicationPermission `object`: Contains information about the pre-authorized permissions.
  * accessGrants `array`: The list of permissions.
    * items `string`
  * directAccessGrant `boolean`: Indicates whether the permission set is DirectAccess or impersonation.

### RequiredResourceAccess
* RequiredResourceAccess `object`: Specifies the set of OAuth 2.0 permission scopes and app roles under the specified resource that an application requires access to. The specified OAuth 2.0 permission scopes may be requested by client applications (through the requiredResourceAccess collection) when calling a resource application. The requiredResourceAccess property of the Application entity is a collection of RequiredResourceAccess.
  * resourceAccess **required** `array`: The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource.
    * items [ResourceAccess](#resourceaccess)
  * resourceAppId `string`: The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.

### ResourceAccess
* ResourceAccess `object`: Specifies an OAuth 2.0 permission scope or an app role that an application requires. The resourceAccess property of the RequiredResourceAccess type is a collection of ResourceAccess.
  * id **required** `string`: The unique identifier for one of the OAuth2Permission or AppRole instances that the resource application exposes.
  * type `string`: Specifies whether the id property references an OAuth2Permission or an AppRole. Possible values are "scope" or "role".

### ServicePrincipal
* ServicePrincipal `object`: Active Directory service principal information.
  * accountEnabled `boolean`: whether or not the service principal account is enabled
  * alternativeNames `array`: alternative names
    * items `string`
  * appDisplayName `string`: The display name exposed by the associated application.
  * appId `string`: The application ID.
  * appOwnerTenantId `string`
  * appRoleAssignmentRequired `boolean`: Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application.
  * appRoles `array`: The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.
    * items [AppRole](#approle)
  * displayName `string`: The display name of the service principal.
  * errorUrl `string`: A URL provided by the author of the associated application to report errors when using the application.
  * homepage `string`: The URL to the homepage of the associated application.
  * keyCredentials `array`: The collection of key credentials associated with the service principal.
    * items [KeyCredential](#keycredential)
  * logoutUrl `string`: A URL provided by the author of the associated application to logout
  * oauth2Permissions `array`: The OAuth 2.0 permissions exposed by the associated application.
    * items [OAuth2Permission](#oauth2permission)
  * passwordCredentials `array`: The collection of password credentials associated with the service principal.
    * items [PasswordCredential](#passwordcredential)
  * preferredTokenSigningKeyThumbprint `string`: The thumbprint of preferred certificate to sign the token
  * publisherName `string`: The publisher's name of the associated application
  * replyUrls `array`: The URLs that user tokens are sent to for sign in with the associated application.  The redirect URIs that the oAuth 2.0 authorization code and access tokens are sent to for the associated application.
    * items `string`
  * samlMetadataUrl `string`: The URL to the SAML metadata of the associated application
  * servicePrincipalNames `array`: A collection of service principal names.
    * items `string`
  * servicePrincipalType `string`: the type of the service principal
  * tags `array`: Optional list of tags that you can apply to your service principals. Not nullable.
    * items `string`
  * deletionTimestamp `string`: The time at which the directory object was deleted.
  * objectId `string`: The object ID.
  * objectType **required** `string`: The object type.

### ServicePrincipalBase
* ServicePrincipalBase `object`: Active Directory service principal common properties shared among GET, POST and PATCH
  * accountEnabled `boolean`: whether or not the service principal account is enabled
  * appRoleAssignmentRequired `boolean`: Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application.
  * keyCredentials `array`: The collection of key credentials associated with the service principal.
    * items [KeyCredential](#keycredential)
  * passwordCredentials `array`: The collection of password credentials associated with the service principal.
    * items [PasswordCredential](#passwordcredential)
  * servicePrincipalType `string`: the type of the service principal
  * tags `array`: Optional list of tags that you can apply to your service principals. Not nullable.
    * items `string`

### ServicePrincipalCreateParameters
* ServicePrincipalCreateParameters `object`: Request parameters for creating a new service principal.
  * appId **required** `string`: The application ID.
  * accountEnabled `boolean`: whether or not the service principal account is enabled
  * appRoleAssignmentRequired `boolean`: Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application.
  * keyCredentials `array`: The collection of key credentials associated with the service principal.
    * items [KeyCredential](#keycredential)
  * passwordCredentials `array`: The collection of password credentials associated with the service principal.
    * items [PasswordCredential](#passwordcredential)
  * servicePrincipalType `string`: the type of the service principal
  * tags `array`: Optional list of tags that you can apply to your service principals. Not nullable.
    * items `string`

### ServicePrincipalListResult
* ServicePrincipalListResult `object`: Server response for get tenant service principals API call.
  * odata.nextLink `string`: the URL to get the next set of results.
  * value `array`: the list of service principals.
    * items [ServicePrincipal](#serviceprincipal)

### ServicePrincipalObjectResult
* ServicePrincipalObjectResult `object`: Service Principal Object Result.
  * odata.metadata `string`: The URL representing edm equivalent.
  * value `string`: The Object ID of the service principal with the specified application ID.

### ServicePrincipalUpdateParameters
* ServicePrincipalUpdateParameters `object`: Request parameters for update an existing service principal.
  * accountEnabled `boolean`: whether or not the service principal account is enabled
  * appRoleAssignmentRequired `boolean`: Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application.
  * keyCredentials `array`: The collection of key credentials associated with the service principal.
    * items [KeyCredential](#keycredential)
  * passwordCredentials `array`: The collection of password credentials associated with the service principal.
    * items [PasswordCredential](#passwordcredential)
  * servicePrincipalType `string`: the type of the service principal
  * tags `array`: Optional list of tags that you can apply to your service principals. Not nullable.
    * items `string`

### SignInName
* SignInName `object`: Contains information about a sign-in name of a local account user in an Azure Active Directory B2C tenant.
  * type `string`: A string value that can be used to classify user sign-in types in your directory, such as 'emailAddress' or 'userName'.
  * value `string`: The sign-in used by the local account. Must be unique across the company/tenant. For example, 'johnc@example.com'.

### User
* User `object`: Active Directory user information.
  * accountEnabled `boolean`: Whether the account is enabled.
  * displayName `string`: The display name of the user.
  * givenName `string`: The given name for the user.
  * immutableId `string`: This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object.
  * mail `string`: The primary email address of the user.
  * mailNickname `string`: The mail alias for the user.
  * signInNames `array`: The sign-in names of the user.
    * items [SignInName](#signinname)
  * surname `string`: The user's surname (family name or last name).
  * usageLocation `string`: A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB".
  * userPrincipalName `string`: The principal name of the user.
  * userType `string` (values: Member, Guest): A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'.
  * deletionTimestamp `string`: The time at which the directory object was deleted.
  * objectId `string`: The object ID.
  * objectType **required** `string`: The object type.

### UserBase
* UserBase `object`
  * givenName `string`: The given name for the user.
  * immutableId `string`: This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object.
  * surname `string`: The user's surname (family name or last name).
  * usageLocation `string`: A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB".
  * userType `string` (values: Member, Guest): A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'.

### UserCreateParameters
* UserCreateParameters `object`: Request parameters for creating a new work or school account user.
  * accountEnabled **required** `boolean`: Whether the account is enabled.
  * displayName **required** `string`: The display name of the user.
  * mail `string`: The primary email address of the user.
  * mailNickname **required** `string`: The mail alias for the user.
  * passwordProfile **required** [PasswordProfile](#passwordprofile)
  * userPrincipalName **required** `string`: The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant.
  * givenName `string`: The given name for the user.
  * immutableId `string`: This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object.
  * surname `string`: The user's surname (family name or last name).
  * usageLocation `string`: A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB".
  * userType `string` (values: Member, Guest): A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'.

### UserGetMemberGroupsParameters
* UserGetMemberGroupsParameters `object`: Request parameters for GetMemberGroups API call.
  * securityEnabledOnly **required** `boolean`: If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked.

### UserGetMemberGroupsResult
* UserGetMemberGroupsResult `object`: Server response for GetMemberGroups API call.
  * value `array`: A collection of group IDs of which the user is a member.
    * items `string`

### UserListResult
* UserListResult `object`: Server response for Get tenant users API call.
  * odata.nextLink `string`: The URL to get the next set of results.
  * value `array`: the list of users.
    * items [User](#user)

### UserUpdateParameters
* UserUpdateParameters `object`: Request parameters for updating an existing work or school account user.
  * accountEnabled `boolean`: Whether the account is enabled.
  * displayName `string`: The display name of the user.
  * mailNickname `string`: The mail alias for the user.
  * passwordProfile [PasswordProfile](#passwordprofile)
  * userPrincipalName `string`: The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant.
  * givenName `string`: The given name for the user.
  * immutableId `string`: This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object.
  * surname `string`: The user's surname (family name or last name).
  * usageLocation `string`: A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB".
  * userType `string` (values: Member, Guest): A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'.


