# @datafire/learnifier


## Operation: coursedesigns.get
Lists all global course design templates. Only api callers that have full access can call this method.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/CourseDesign"
  },
  "type": "array"
}
```
## Operation: extorgunit.get
Returns information about the organization unit with the specified external id.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "extid": {
      "type": "string",
      "format": "extid",
      "description": "The external id of the organization unit"
    }
  },
  "additionalProperties": false,
  "required": [
    "extid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrgUnit"
}
```
## Operation: extparticipation.get
Gets a participation by external id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "extid": {
      "type": "string",
      "format": "extid",
      "description": "The external id of the participation"
    }
  },
  "additionalProperties": false,
  "required": [
    "extid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Participation"
}
```
## Operation: extproject.get
Gets an Organization Unit by external id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "extid": {
      "type": "string",
      "format": "extid",
      "description": "The external id of the organization unit"
    }
  },
  "additionalProperties": false,
  "required": [
    "extid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: extuser.get
Gets a user by external id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "extid": {
      "type": "string",
      "format": "extid",
      "description": "The external id of the user"
    }
  },
  "additionalProperties": false,
  "required": [
    "extid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: globalusergroups.get
Returns a list of Global User Groups. Global User Groups are set up for the realm, and will generate groups that can be used on the client level.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/GlobalUserGroup"
  },
  "type": "array"
}
```
## Operation: globalusergroups.groupid.members.get
Returns a list of all members in User Groups that are based on the Global Group with this groupid.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupid": {
      "type": "integer",
      "format": "int64",
      "description": "ID of group"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupid"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/User"
  },
  "type": "array"
}
```
## Operation: orgunits.get
The orgunits endpoint returns information about the available organization units (orgunits).
The response includes the display name, internal and external id and client number.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrgUnits"
}
```
## Operation: orgunits.post
Adds an Organization Unit

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/AddOrganizationUnit"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AddOrganizationUnitResponse"
}
```
## Operation: orgunits.orgid.get
Returns information about the specified organization unit.
The response includes the display name, internal and external id and client number.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "description": "Id of the organization unit"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OrgUnit"
}
```
## Operation: orgunits.orgid.patch
Adds an Organization Unit

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/UpdateOrganizationUnit"
    },
    "orgid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "orgid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orgunits.orgid.projects.get
Returns the available projects for the organization unit


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "number",
      "description": "Id of the organization unit"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Project"
  },
  "type": "array"
}
```
## Operation: orgunits.orgid.projects.post
Creates a new project


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "description": "Id of the organization unit"
    },
    "body": {
      "$ref": "#/definitions/AddProject"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: orgunits.orgid.projects.projectid.delete
Deletes the project. The project can only be deleted if the project do not contain any participants.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "description": "Id of the organization unit"
    },
    "projectid": {
      "type": "integer",
      "description": "Id of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid",
    "projectid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orgunits.orgid.projects.projectid.get
Returns project information


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "description": "Id of the organization unit"
    },
    "projectid": {
      "type": "integer",
      "description": "Id of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid",
    "projectid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: orgunits.orgid.projects.projectid.patch
Updates information about a project. Values are only updated if the fields are specified in the input


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "description": "Id of the organization unit"
    },
    "projectid": {
      "type": "integer",
      "description": "Id of the project"
    },
    "body": {
      "$ref": "#/definitions/UpdateProject"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid",
    "projectid",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Project"
}
```
## Operation: orgunits.orgid.projects.projectid.participants.get
Returns project participants


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "description": "Id of the organization unit"
    },
    "projectid": {
      "type": "integer",
      "description": "Id of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid",
    "projectid"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Participation"
  },
  "type": "array"
}
```
## Operation: orgunits.orgid.projects.projectid.participants.post
Add a user to the project. Participant information is created for the user. In the body object, only one of either email or userid must be specified. The participant needs to be activated before it the user can access it.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "description": "Id of the organization unit"
    },
    "projectid": {
      "type": "integer",
      "description": "Id of the project"
    },
    "body": {
      "$ref": "#/definitions/AddParticipant"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid",
    "projectid",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orgunits.orgid.projects.projectid.participants._participantId.delete
Deletes a participant. The user itself will still remain but any state related to the project will be deleted. 
It might not be possible due to constraints from the products in the project to delete the participant. However
this can only be determined at the time of the delete. If a delete fails the participant will have their inError
flag set.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "description": "Id of the organization unit"
    },
    "projectid": {
      "type": "integer",
      "description": "Id of the project"
    },
    "participantId": {
      "type": "integer",
      "description": "Participant id"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid",
    "projectid",
    "participantId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orgunits.orgid.projects.projectid.participants._participantId.activate.post
Activates a participant so that it can be used


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "description": "Id of the organization unit"
    },
    "projectid": {
      "type": "integer",
      "description": "Id of the project"
    },
    "participantId": {
      "type": "integer",
      "description": "Id of the participant"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid",
    "projectid",
    "participantId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orgunits.orgid.projects.projectid.participants._participantId.loginlink.post
Returns a single sign on link for the participant. The link is only usable once and should be used directly. The link expires after a few minutes.

This operation requires the *login link* permission.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "description": "Id of the organization unit"
    },
    "projectid": {
      "type": "integer",
      "description": "Id of the project"
    },
    "participantId": {
      "type": "integer",
      "description": "Id of the participant"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid",
    "projectid",
    "participantId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LoginLink"
}
```
## Operation: orgunits.orgid.projects.projectid.teammembers.get
Returns the project team members. A team member is a ....


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "description": "Id of the organization unit"
    },
    "projectid": {
      "type": "integer",
      "description": "Id of the project"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid",
    "projectid"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ProjectTeamMember"
  },
  "type": "array"
}
```
## Operation: orgunits.orgid.usergroups.get
Returns a list of User Groups for the org unit.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "format": "int64",
      "description": "ID of organization"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UserGroup"
  },
  "type": "array"
}
```
## Operation: orgunits.orgid.usergroups.post
Create a User Group.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/AddUserGroup"
    },
    "orgid": {
      "type": "integer",
      "format": "int64",
      "description": "ID of organization"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "orgid"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/GroupId"
  },
  "type": "array"
}
```
## Operation: orgunits.orgid.usergroups.groupid.get
Returns single User Group.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "format": "int64",
      "description": "ID of organization"
    },
    "groupid": {
      "type": "integer",
      "format": "int64",
      "description": "ID of group"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid",
    "groupid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserGroup"
}
```
## Operation: orgunits.orgid.usergroups.groupid.members.get
Returns a list of all members in User Groups that are based on the Global Group with this groupid.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "format": "int64",
      "description": "ID of organization"
    },
    "groupid": {
      "type": "integer",
      "format": "int64",
      "description": "ID of group"
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid",
    "groupid"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/User"
  },
  "type": "array"
}
```
## Operation: orgunits.orgid.usergroups.groupid.members.post
Adds a user to user group.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/AddUserGroupMember"
    },
    "orgid": {
      "type": "integer",
      "format": "int64",
      "description": "ID of organization"
    },
    "groupid": {
      "type": "integer",
      "format": "int64",
      "description": "ID of group"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "orgid",
    "groupid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserId"
}
```
## Operation: orgunits.orgid.usergroups.groupid.members.uuid.delete
Removes a user from a user group.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orgid": {
      "type": "integer",
      "format": "int64",
      "description": "ID of organization"
    },
    "groupid": {
      "type": "integer",
      "format": "int64",
      "description": "ID of group"
    },
    "uuid": {
      "type": "string",
      "format": "uuid",
      "description": "UUID of user to remove from group."
    }
  },
  "additionalProperties": false,
  "required": [
    "orgid",
    "groupid",
    "uuid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.get
Lists all users. Only api callers that have full access can call this method.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "format": "integer",
      "description": "The maximum number of users to return"
    },
    "offset": {
      "type": "integer",
      "format": "integer",
      "description": "The offset to start listing users from"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UserWithPermissions"
  },
  "type": "array"
}
```
## Operation: users.post
Adds a user. No two users can have the same email address. Email is saved WITH case but compared regardless of case. Email can be changed for a user assuming it doesn't cause a conflict.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/AddUser"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AddUserResponse"
}
```
## Operation: users.userid.get
Returns information about a user


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userid": {
      "type": "string",
      "description": "A user id"
    }
  },
  "additionalProperties": false,
  "required": [
    "userid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: users.userid.patch
Updates a user. All values that have a key defined in the input will be set. So if a value should not be updated omit it totally from the input, otherwise it will be unset.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userid": {
      "type": "string",
      "format": "uuid",
      "description": "The user id"
    },
    "body": {
      "$ref": "#/definitions/AddUser"
    }
  },
  "additionalProperties": false,
  "required": [
    "userid",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.userid.pic_key_APIKEY.get
Returns a thumbnail picture of the user. This can either be a selected picture or an auto generated image. This method doesn't require a full sign in. The api key is sufficient.
The image is square and is likely, but not necessary, to be in 128x128 PNG format. However the format will always be either PNG, JPEG or GIF.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userid": {
      "type": "string",
      "description": "The user id"
    },
    "APIKEY": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userid",
    "APIKEY"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.userid.projectParticipations.get
Returns information about the projects the user is a participant in. Only the projects that the current token have access to will be listed.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userid": {
      "type": "string",
      "format": "uuid",
      "description": "A user id"
    }
  },
  "additionalProperties": false,
  "required": [
    "userid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserParticipationInfo"
}
```
