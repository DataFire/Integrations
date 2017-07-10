# @datafire/windows_arm_graphrbac
The Graph RBAC Management Client

## Operation: Applications_List
Lists applications by filter parameters.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "$filter": {
      "type": "string",
      "description": "The filters to apply to the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ApplicationListResult"
}
```
## Operation: Applications_Create
Create a new application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parameters": {
      "$ref": "#/definitions/ApplicationCreateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Application"
}
```
## Operation: Applications_Delete
Delete an application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "applicationObjectId": {
      "type": "string",
      "description": "Application object ID."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "applicationObjectId",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Applications_Get
Get an application by object ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "applicationObjectId": {
      "type": "string",
      "description": "Application object ID."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "applicationObjectId",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Application"
}
```
## Operation: Applications_Patch
Update an existing application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "applicationObjectId": {
      "type": "string",
      "description": "Application object ID."
    },
    "parameters": {
      "$ref": "#/definitions/ApplicationUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "applicationObjectId",
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Applications_ListKeyCredentials
Get the keyCredentials associated with an application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "applicationObjectId": {
      "type": "string",
      "description": "Application object ID."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "applicationObjectId",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/KeyCredentialListResult"
}
```
## Operation: Applications_UpdateKeyCredentials
Update the keyCredentials associated with an application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "applicationObjectId": {
      "type": "string",
      "description": "Application object ID."
    },
    "parameters": {
      "$ref": "#/definitions/KeyCredentialsUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "applicationObjectId",
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Applications_ListPasswordCredentials
Get the passwordCredentials associated with an application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "applicationObjectId": {
      "type": "string",
      "description": "Application object ID."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "applicationObjectId",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PasswordCredentialListResult"
}
```
## Operation: Applications_UpdatePasswordCredentials
Update passwordCredentials associated with an application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "applicationObjectId": {
      "type": "string",
      "description": "Application object ID."
    },
    "parameters": {
      "$ref": "#/definitions/PasswordCredentialsUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "applicationObjectId",
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Objects_GetObjectsByObjectIds
Gets AD group membership for the specified AD object IDs.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parameters": {
      "$ref": "#/definitions/GetObjectsParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetObjectsResult"
}
```
## Operation: Groups_List
Gets list of groups for the current tenant.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "$filter": {
      "type": "string",
      "description": "The filter to apply to the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupListResult"
}
```
## Operation: Groups_Create
Create a group in the directory.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parameters": {
      "$ref": "#/definitions/GroupCreateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ADGroup"
}
```
## Operation: Groups_Delete
Delete a group from the directory.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupObjectId": {
      "type": "string",
      "description": "The object ID of the group to delete."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "groupObjectId",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Groups_AddMember
Add a member to a group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupObjectId": {
      "type": "string",
      "description": "The object ID of the group to which to add the member."
    },
    "parameters": {
      "$ref": "#/definitions/GroupAddMemberParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "groupObjectId",
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Groups_RemoveMember
Remove a member from a group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupObjectId": {
      "type": "string",
      "description": "The object ID of the group from which to remove the member."
    },
    "memberObjectId": {
      "type": "string",
      "description": "Member object id"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "groupObjectId",
    "memberObjectId",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Groups_Get
Gets group information from the directory.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "objectId": {
      "type": "string",
      "description": "The object ID of the user for which to get group information."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "objectId",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ADGroup"
}
```
## Operation: Groups_GetMemberGroups
Gets a collection of object IDs of groups of which the specified group is a member.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "objectId": {
      "type": "string",
      "description": "The object ID of the group for which to get group membership."
    },
    "parameters": {
      "$ref": "#/definitions/GroupGetMemberGroupsParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "objectId",
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GroupGetMemberGroupsResult"
}
```
## Operation: Groups_GetGroupMembers
Gets the members of a group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "objectId": {
      "type": "string",
      "description": "The object ID of the group whose members should be retrieved."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "objectId",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetObjectsResult"
}
```
## Operation: Groups_IsMemberOf
Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parameters": {
      "$ref": "#/definitions/CheckGroupMembershipParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CheckGroupMembershipResult"
}
```
## Operation: Objects_GetCurrentUser
Gets the details for the currently logged-in user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AADObject"
}
```
## Operation: ServicePrincipals_List
Gets a list of service principals from the current tenant.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "$filter": {
      "type": "string",
      "description": "The filter to apply to the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServicePrincipalListResult"
}
```
## Operation: ServicePrincipals_Create
Creates a service principal in the directory.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parameters": {
      "$ref": "#/definitions/ServicePrincipalCreateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServicePrincipal"
}
```
## Operation: ServicePrincipals_Delete
Deletes a service principal from the directory.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "objectId": {
      "type": "string",
      "description": "The object ID of the service principal to delete."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "objectId",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ServicePrincipals_Get
Gets service principal information from the directory.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "objectId": {
      "type": "string",
      "description": "The object ID of the service principal to get."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "objectId",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ServicePrincipal"
}
```
## Operation: ServicePrincipals_ListKeyCredentials
Get the keyCredentials associated with the specified service principal.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "objectId": {
      "type": "string",
      "description": "The object ID of the service principal for which to get keyCredentials."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "objectId",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/KeyCredentialListResult"
}
```
## Operation: ServicePrincipals_UpdateKeyCredentials
Update the keyCredentials associated with a service principal.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "objectId": {
      "type": "string",
      "description": "The object ID for which to get service principal information."
    },
    "parameters": {
      "$ref": "#/definitions/KeyCredentialsUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "objectId",
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: ServicePrincipals_ListPasswordCredentials
Gets the passwordCredentials associated with a service principal.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "objectId": {
      "type": "string",
      "description": "The object ID of the service principal."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "objectId",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PasswordCredentialListResult"
}
```
## Operation: ServicePrincipals_UpdatePasswordCredentials
Updates the passwordCredentials associated with a service principal.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "objectId": {
      "type": "string",
      "description": "The object ID of the service principal."
    },
    "parameters": {
      "$ref": "#/definitions/PasswordCredentialsUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "objectId",
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Users_List
Gets list of users for the current tenant.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "$filter": {
      "type": "string",
      "description": "The filter to apply to the operation."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserListResult"
}
```
## Operation: Users_Create
Create a new user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parameters": {
      "$ref": "#/definitions/UserCreateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: Users_GetMemberGroups
Gets a collection that contains the object IDs of the groups of which the user is a member.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "objectId": {
      "type": "string",
      "description": "The object ID of the user for which to get group membership."
    },
    "parameters": {
      "$ref": "#/definitions/UserGetMemberGroupsParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "objectId",
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserGetMemberGroupsResult"
}
```
## Operation: Users_Delete
Delete a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "upnOrObjectId": {
      "type": "string",
      "description": "The object ID or principal name of the user to delete."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "upnOrObjectId",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Users_Get
Gets user information from the directory.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "upnOrObjectId": {
      "type": "string",
      "description": "The object ID or principal name of the user for which to get information."
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "upnOrObjectId",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: Users_Update
Updates a user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "upnOrObjectId": {
      "type": "string",
      "description": "The object ID or principal name of the user to update."
    },
    "parameters": {
      "$ref": "#/definitions/UserUpdateParameters"
    },
    "api-version": {
      "type": "string",
      "description": "Client API version."
    },
    "tenantID": {
      "type": "string",
      "description": "The tenant ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "upnOrObjectId",
    "parameters",
    "api-version",
    "tenantID"
  ]
}
```
### Output Schema
```json
{}
```
