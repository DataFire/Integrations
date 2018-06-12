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

windows_graphrbac.Applications_List({
  "api-version": "",
  "tenantID": ""
}).then(data => {
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
    "availableToOtherTenants": true,
    "displayName": "",
    "identifierUris": []
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
  * parameters **required** [ApplicationAddOwnerParameters](#applicationaddownerparameters)
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
Gets AD group membership for the specified AD object IDs.


```js
windows_graphrbac.Objects_GetObjectsByObjectIds({
  "parameters": {
    "includeDirectoryObjectReferences": true
  },
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
* output [GetObjectsResult](#getobjectsresult)

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
* output [GetObjectsResult](#getobjectsresult)

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

### Objects_GetCurrentUser
Gets the details for the currently logged-in user.


```js
windows_graphrbac.Objects_GetCurrentUser({
  "api-version": "",
  "tenantID": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * tenantID **required** `string`: The tenant ID.

#### Output
* output [AADObject](#aadobject)

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
    "appId": "",
    "accountEnabled": true
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
Gets service principal information from the directory.


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

### AADObject
* AADObject `object`: The properties of an Active Directory object.
  * appId `string`: The application ID.
  * appPermissions `array`: The application permissions.
    * items `string`
  * availableToOtherTenants `boolean`: Whether the application is be available to other tenants.
  * displayName `string`: The display name of the object.
  * homepage `string`: The home page of the application.
  * identifierUris `array`: A collection of URIs for the application.
    * items `string`
  * mail `string`: The primary email address of the object.
  * mailEnabled `boolean`: Whether the AAD object is mail-enabled.
  * mailNickname `string`: The mail alias for the user.
  * objectId `string`: The ID of the object.
  * objectType `string`: The type of AAD object.
  * replyUrls `array`: A collection of reply URLs for the application.
    * items `string`
  * securityEnabled `boolean`: Whether the AAD object is security-enabled.
  * servicePrincipalNames `array`: A collection of service principal names associated with the object.
    * items `string`
  * signInName `string`: The sign-in name of the object.
  * usageLocation `string`: A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB".
  * userPrincipalName `string`: The principal name of the object.
  * userType `string`: The user type of the object.

### ADGroup
* ADGroup `object`: Active Directory group information.
  * displayName `string`: The display name of the group.
  * mail `string`: The primary email address of the group.
  * securityEnabled `boolean`: Whether the group is security-enable.
  * deletionTimestamp `string`: The time at which the directory object was deleted.
  * objectId `string`: The object ID.
  * objectType `string`: The object type.

### Application
* Application `object`: Active Directory application information.
  * appId `string`: The application ID.
  * appPermissions `array`: The application permissions.
    * items `string`
  * availableToOtherTenants `boolean`: Whether the application is be available to other tenants.
  * displayName `string`: The display name of the application.
  * homepage `string`: The home page of the application.
  * identifierUris `array`: A collection of URIs for the application.
    * items `string`
  * oauth2AllowImplicitFlow `boolean`: Whether to allow implicit grant flow for OAuth2
  * replyUrls `array`: A collection of reply URLs for the application.
    * items `string`
  * deletionTimestamp `string`: The time at which the directory object was deleted.
  * objectId `string`: The object ID.
  * objectType `string`: The object type.

### ApplicationAddOwnerParameters
* ApplicationAddOwnerParameters `object`: Request parameters for adding a owner to an application.
  * url **required** `string`: A owner object URL, such as "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd", where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the owner (user, application, servicePrincipal, group) to be added.

### ApplicationCreateParameters
* ApplicationCreateParameters `object`: Request parameters for creating a new application.
  * availableToOtherTenants **required** `boolean`: Whether the application is available to other tenants.
  * displayName **required** `string`: The display name of the application.
  * homepage `string`: The home page of the application.
  * identifierUris **required** `array`: A collection of URIs for the application.
    * items `string`
  * keyCredentials `array`: The list of KeyCredential objects.
    * items [KeyCredential](#keycredential)
  * oauth2AllowImplicitFlow `boolean`: Whether to allow implicit grant flow for OAuth2
  * passwordCredentials `array`: The list of PasswordCredential objects.
    * items [PasswordCredential](#passwordcredential)
  * replyUrls `array`: A collection of reply URLs for the application.
    * items `string`
  * requiredResourceAccess `array`: Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.
    * items [RequiredResourceAccess](#requiredresourceaccess)

### ApplicationListResult
* ApplicationListResult `object`: Application list operation result.
  * odata.nextLink `string`: The URL to get the next set of results.
  * value `array`: A collection of applications.
    * items [Application](#application)

### ApplicationUpdateParameters
* ApplicationUpdateParameters `object`: Request parameters for updating an existing application.
  * availableToOtherTenants `boolean`: Whether the application is available to other tenants
  * displayName `string`: The display name of the application.
  * homepage `string`: The home page of the application.
  * identifierUris `array`: A collection of URIs for the application.
    * items `string`
  * keyCredentials `array`: The list of KeyCredential objects.
    * items [KeyCredential](#keycredential)
  * oauth2AllowImplicitFlow `boolean`: Whether to allow implicit grant flow for OAuth2
  * passwordCredentials `array`: The list of PasswordCredential objects.
    * items [PasswordCredential](#passwordcredential)
  * replyUrls `array`: A collection of reply URLs for the application.
    * items `string`
  * requiredResourceAccess `array`: Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.
    * items [RequiredResourceAccess](#requiredresourceaccess)

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
  * objectType `string`: The object type.

### DirectoryObjectListResult
* DirectoryObjectListResult `object`: DirectoryObject list operation result.
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
  * includeDirectoryObjectReferences **required** `boolean`: If true, also searches for object IDs in the partner tenant.
  * objectIds `array`: The requested object IDs.
    * items `string`
  * types `array`: The requested object types.
    * items `string`

### GetObjectsResult
* GetObjectsResult `object`: The response to an Active Directory object inquiry API request.
  * odata.nextLink `string`: The URL to get the next set of results.
  * value `array`: A collection of Active Directory objects.
    * items [AADObject](#aadobject)

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

### OdataError
* OdataError `object`: Active Directory OData error information.
  * code `string`: Error code.
  * message [ErrorMessage](#errormessage)

### PasswordCredential
* PasswordCredential `object`: Active Directory Password Credential information.
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

### RequiredResourceAccess
* RequiredResourceAccess `object`: Specifies the set of OAuth 2.0 permission scopes and app roles under the specified resource that an application requires access to. The specified OAuth 2.0 permission scopes may be requested by client applications (through the requiredResourceAccess collection) when calling a resource application. The requiredResourceAccess property of the Application entity is a collection of ReqiredResourceAccess.
  * resourceAccess **required** `array`: The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource.
    * items [ResourceAccess](#resourceaccess)
  * resourceAppId `string`: The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.

### ResourceAccess
* ResourceAccess `object`: Specifies an OAuth 2.0 permission scope or an app role that an application requires. The resourceAccess property of the RequiredResourceAccess type is a collection of ResourceAccess.
  * id **required** `string`: The unique identifier for one of the OAuth2Permission or AppRole instances that the resource application exposes.
  * type `string`: Specifies whether the id property references an OAuth2Permission or an AppRole. Possible values are "scope" or "role".

### ServicePrincipal
* ServicePrincipal `object`: Active Directory service principal information.
  * appId `string`: The application ID.
  * displayName `string`: The display name of the service principal.
  * servicePrincipalNames `array`: A collection of service principal names.
    * items `string`
  * deletionTimestamp `string`: The time at which the directory object was deleted.
  * objectId `string`: The object ID.
  * objectType `string`: The object type.

### ServicePrincipalCreateParameters
* ServicePrincipalCreateParameters `object`: Request parameters for creating a new service principal.
  * accountEnabled **required** `boolean`: Whether the account is enabled
  * appId **required** `string`: application Id
  * keyCredentials `array`: A collection of KeyCredential objects.
    * items [KeyCredential](#keycredential)
  * passwordCredentials `array`: A collection of PasswordCredential objects
    * items [PasswordCredential](#passwordcredential)

### ServicePrincipalListResult
* ServicePrincipalListResult `object`: Server response for get tenant service principals API call.
  * odata.nextLink `string`: the URL to get the next set of results.
  * value `array`: the list of service principals.
    * items [ServicePrincipal](#serviceprincipal)

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
  * objectType `string`: The object type.

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


