# @datafire/windows_arm_graphrbac

Client library for GraphRbacManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/windows_arm_graphrbac
```

```js
let datafire = require('datafire');
let windows_arm_graphrbac = require('@datafire/windows_arm_graphrbac').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

windows_arm_graphrbac.Applications_List({}).then(data => {
  console.log(data);
})
```

## Description
The Graph RBAC Management Client

## Actions
### Applications_List
Lists applications by filter parameters.


```js
windows_arm_graphrbac.Applications_List({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* $filter (string) - The filters to apply to the operation.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Applications_Create
Create a new application.


```js
windows_arm_graphrbac.Applications_Create({
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* parameters (undefined) **required** - Request parameters for creating a new application.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Applications_Delete
Delete an application.


```js
windows_arm_graphrbac.Applications_Delete({
  "applicationObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* applicationObjectId (string) **required** - Application object ID.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Applications_Get
Get an application by object ID.


```js
windows_arm_graphrbac.Applications_Get({
  "applicationObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* applicationObjectId (string) **required** - Application object ID.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Applications_Patch
Update an existing application.


```js
windows_arm_graphrbac.Applications_Patch({
  "applicationObjectId": "",
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* applicationObjectId (string) **required** - Application object ID.
* parameters (undefined) **required** - Request parameters for updating an existing application.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Applications_ListKeyCredentials
Get the keyCredentials associated with an application.


```js
windows_arm_graphrbac.Applications_ListKeyCredentials({
  "applicationObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* applicationObjectId (string) **required** - Application object ID.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Applications_UpdateKeyCredentials
Update the keyCredentials associated with an application.


```js
windows_arm_graphrbac.Applications_UpdateKeyCredentials({
  "applicationObjectId": "",
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* applicationObjectId (string) **required** - Application object ID.
* parameters (undefined) **required** - Request parameters for a KeyCredentials update operation
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Applications_ListPasswordCredentials
Get the passwordCredentials associated with an application.


```js
windows_arm_graphrbac.Applications_ListPasswordCredentials({
  "applicationObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* applicationObjectId (string) **required** - Application object ID.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Applications_UpdatePasswordCredentials
Update passwordCredentials associated with an application.


```js
windows_arm_graphrbac.Applications_UpdatePasswordCredentials({
  "applicationObjectId": "",
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* applicationObjectId (string) **required** - Application object ID.
* parameters (undefined) **required** - Request parameters for a PasswordCredentials update operation.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Domains_List
Gets a list of domains for the current tenant.


```js
windows_arm_graphrbac.Domains_List({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* $filter (string) - The filter to apply to the operation.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Domains_Get
Gets a specific domain in the current tenant.


```js
windows_arm_graphrbac.Domains_Get({
  "domainName": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* domainName (string) **required** - name of the domain.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Objects_GetObjectsByObjectIds
Gets AD group membership for the specified AD object IDs.


```js
windows_arm_graphrbac.Objects_GetObjectsByObjectIds({
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* parameters (undefined) **required** - Request parameters for the GetObjectsByObjectIds API.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Groups_List
Gets list of groups for the current tenant.


```js
windows_arm_graphrbac.Groups_List({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* $filter (string) - The filter to apply to the operation.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Groups_Create
Create a group in the directory.


```js
windows_arm_graphrbac.Groups_Create({
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* parameters (undefined) **required** - Request parameters for creating a new group.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Groups_Delete
Delete a group from the directory.


```js
windows_arm_graphrbac.Groups_Delete({
  "groupObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* groupObjectId (string) **required** - The object ID of the group to delete.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Groups_AddMember
Add a member to a group.


```js
windows_arm_graphrbac.Groups_AddMember({
  "groupObjectId": "",
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* groupObjectId (string) **required** - The object ID of the group to which to add the member.
* parameters (undefined) **required** - Request parameters for adding a member to a group.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Groups_RemoveMember
Remove a member from a group.


```js
windows_arm_graphrbac.Groups_RemoveMember({
  "groupObjectId": "",
  "memberObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* groupObjectId (string) **required** - The object ID of the group from which to remove the member.
* memberObjectId (string) **required** - Member object id
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Groups_Get
Gets group information from the directory.


```js
windows_arm_graphrbac.Groups_Get({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* objectId (string) **required** - The object ID of the user for which to get group information.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Groups_GetMemberGroups
Gets a collection of object IDs of groups of which the specified group is a member.


```js
windows_arm_graphrbac.Groups_GetMemberGroups({
  "objectId": "",
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* objectId (string) **required** - The object ID of the group for which to get group membership.
* parameters (undefined) **required** - Request parameters for GetMemberGroups API call.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Groups_GetGroupMembers
Gets the members of a group.


```js
windows_arm_graphrbac.Groups_GetGroupMembers({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* objectId (string) **required** - The object ID of the group whose members should be retrieved.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Groups_IsMemberOf
Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.


```js
windows_arm_graphrbac.Groups_IsMemberOf({
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* parameters (undefined) **required** - Request parameters for IsMemberOf API call.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Objects_GetCurrentUser
Gets the details for the currently logged-in user.


```js
windows_arm_graphrbac.Objects_GetCurrentUser({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### ServicePrincipals_List
Gets a list of service principals from the current tenant.


```js
windows_arm_graphrbac.ServicePrincipals_List({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* $filter (string) - The filter to apply to the operation.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### ServicePrincipals_Create
Creates a service principal in the directory.


```js
windows_arm_graphrbac.ServicePrincipals_Create({
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* parameters (undefined) **required** - Request parameters for creating a new service principal.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### ServicePrincipals_Delete
Deletes a service principal from the directory.


```js
windows_arm_graphrbac.ServicePrincipals_Delete({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* objectId (string) **required** - The object ID of the service principal to delete.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### ServicePrincipals_Get
Gets service principal information from the directory.


```js
windows_arm_graphrbac.ServicePrincipals_Get({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* objectId (string) **required** - The object ID of the service principal to get.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### ServicePrincipals_ListKeyCredentials
Get the keyCredentials associated with the specified service principal.


```js
windows_arm_graphrbac.ServicePrincipals_ListKeyCredentials({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* objectId (string) **required** - The object ID of the service principal for which to get keyCredentials.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### ServicePrincipals_UpdateKeyCredentials
Update the keyCredentials associated with a service principal.


```js
windows_arm_graphrbac.ServicePrincipals_UpdateKeyCredentials({
  "objectId": "",
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* objectId (string) **required** - The object ID for which to get service principal information.
* parameters (undefined) **required** - Request parameters for a KeyCredentials update operation
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### ServicePrincipals_ListPasswordCredentials
Gets the passwordCredentials associated with a service principal.


```js
windows_arm_graphrbac.ServicePrincipals_ListPasswordCredentials({
  "objectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* objectId (string) **required** - The object ID of the service principal.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### ServicePrincipals_UpdatePasswordCredentials
Updates the passwordCredentials associated with a service principal.


```js
windows_arm_graphrbac.ServicePrincipals_UpdatePasswordCredentials({
  "objectId": "",
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* objectId (string) **required** - The object ID of the service principal.
* parameters (undefined) **required** - Request parameters for a PasswordCredentials update operation.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Users_List
Gets list of users for the current tenant.


```js
windows_arm_graphrbac.Users_List({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* $filter (string) - The filter to apply to the operation.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Users_Create
Create a new user.


```js
windows_arm_graphrbac.Users_Create({
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* parameters (undefined) **required** - Request parameters for creating a new work or school account user.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Users_GetMemberGroups
Gets a collection that contains the object IDs of the groups of which the user is a member.


```js
windows_arm_graphrbac.Users_GetMemberGroups({
  "objectId": "",
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* objectId (string) **required** - The object ID of the user for which to get group membership.
* parameters (undefined) **required** - Request parameters for GetMemberGroups API call.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Users_Delete
Delete a user.


```js
windows_arm_graphrbac.Users_Delete({
  "upnOrObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* upnOrObjectId (string) **required** - The object ID or principal name of the user to delete.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Users_Get
Gets user information from the directory.


```js
windows_arm_graphrbac.Users_Get({
  "upnOrObjectId": "",
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* upnOrObjectId (string) **required** - The object ID or principal name of the user for which to get information.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

### Users_Update
Updates a user.


```js
windows_arm_graphrbac.Users_Update({
  "upnOrObjectId": "",
  "parameters": null,
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Parameters
* upnOrObjectId (string) **required** - The object ID or principal name of the user to update.
* parameters (undefined) **required** - Request parameters for updating an existing work or school account user.
* api-version (string) **required** - Client API version.
* tenantID (string) **required** - The tenant ID.

