# @datafire/learnifier

Client library for Learnifier

## Installation and Usage
```bash
npm install --save @datafire/learnifier
```
```js
let learnifier = require('@datafire/learnifier').create();

learnifier.users.get({}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### coursedesigns.get
Lists all global course design templates. Only api callers that have full access can call this method.


```js
learnifier.coursedesigns.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [CourseDesign](#coursedesign)

### extorgunit.get
Returns information about the organization unit with the specified external id.



```js
learnifier.extorgunit.get({
  "extid": ""
}, context)
```

#### Input
* input `object`
  * extid **required** `string`: The external id of the organization unit

#### Output
* output [OrgUnit](#orgunit)

### extparticipation.get
Gets a participation by external id.


```js
learnifier.extparticipation.get({
  "extid": ""
}, context)
```

#### Input
* input `object`
  * extid **required** `string`: The external id of the participation

#### Output
* output [Participation](#participation)

### extproject.get
Gets an Organization Unit by external id


```js
learnifier.extproject.get({
  "extid": ""
}, context)
```

#### Input
* input `object`
  * extid **required** `string`: The external id of the organization unit

#### Output
* output [Project](#project)

### extuser.get
Gets a user by external id.


```js
learnifier.extuser.get({
  "extid": ""
}, context)
```

#### Input
* input `object`
  * extid **required** `string`: The external id of the user

#### Output
* output [User](#user)

### globalusergroups.get
Returns a list of Global User Groups. Global User Groups are set up for the realm, and will generate groups that can be used on the client level.



```js
learnifier.globalusergroups.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [GlobalUserGroup](#globalusergroup)

### globalusergroups.groupid.members.get
Returns a list of all members in User Groups that are based on the Global Group with this groupid.



```js
learnifier.globalusergroups.groupid.members.get({
  "groupid": 0
}, context)
```

#### Input
* input `object`
  * groupid **required** `integer`: ID of group

#### Output
* output `array`
  * items [User](#user)

### orgunits.get
The orgunits endpoint returns information about the available organization units (orgunits).
The response includes the display name, internal and external id and client number.



```js
learnifier.orgunits.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OrgUnits](#orgunits)

### orgunits.post
Adds an Organization Unit


```js
learnifier.orgunits.post({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [AddOrganizationUnit](#addorganizationunit)

#### Output
* output [AddOrganizationUnitResponse](#addorganizationunitresponse)

### orgunits.orgid.get
Returns information about the specified organization unit.
The response includes the display name, internal and external id and client number.



```js
learnifier.orgunits.orgid.get({
  "orgid": 0
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: Id of the organization unit

#### Output
* output [OrgUnit](#orgunit)

### orgunits.orgid.patch
Adds an Organization Unit


```js
learnifier.orgunits.orgid.patch({
  "body": null,
  "orgid": ""
}, context)
```

#### Input
* input `object`
  * body **required** [UpdateOrganizationUnit](#updateorganizationunit)
  * orgid **required** `string`

#### Output
*Output schema unknown*

### orgunits.orgid.projects.get
Returns the available projects for the organization unit



```js
learnifier.orgunits.orgid.projects.get({
  "orgid": 0
}, context)
```

#### Input
* input `object`
  * orgid **required** `number`: Id of the organization unit

#### Output
* output `array`
  * items [Project](#project)

### orgunits.orgid.projects.post
Creates a new project



```js
learnifier.orgunits.orgid.projects.post({
  "orgid": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: Id of the organization unit
  * body **required** [AddProject](#addproject)

#### Output
* output [Project](#project)

### orgunits.orgid.projects.projectid.delete
Deletes the project. The project can only be deleted if the project do not contain any participants.



```js
learnifier.orgunits.orgid.projects.projectid.delete({
  "orgid": 0,
  "projectid": 0
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: Id of the organization unit
  * projectid **required** `integer`: Id of the project

#### Output
*Output schema unknown*

### orgunits.orgid.projects.projectid.get
Returns project information



```js
learnifier.orgunits.orgid.projects.projectid.get({
  "orgid": 0,
  "projectid": 0
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: Id of the organization unit
  * projectid **required** `integer`: Id of the project

#### Output
* output [Project](#project)

### orgunits.orgid.projects.projectid.patch
Updates information about a project. Values are only updated if the fields are specified in the input



```js
learnifier.orgunits.orgid.projects.projectid.patch({
  "orgid": 0,
  "projectid": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: Id of the organization unit
  * projectid **required** `integer`: Id of the project
  * body **required** [UpdateProject](#updateproject)

#### Output
* output [Project](#project)

### orgunits.orgid.projects.projectid.participants.get
Returns project participants



```js
learnifier.orgunits.orgid.projects.projectid.participants.get({
  "orgid": 0,
  "projectid": 0
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: Id of the organization unit
  * projectid **required** `integer`: Id of the project

#### Output
* output `array`
  * items [Participation](#participation)

### orgunits.orgid.projects.projectid.participants.post
Add a user to the project. Participant information is created for the user. In the body object, only one of either email or userid must be specified. The participant needs to be activated before it the user can access it.



```js
learnifier.orgunits.orgid.projects.projectid.participants.post({
  "orgid": 0,
  "projectid": 0,
  "body": null
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: Id of the organization unit
  * projectid **required** `integer`: Id of the project
  * body **required** [AddParticipant](#addparticipant)

#### Output
*Output schema unknown*

### orgunits.orgid.projects.projectid.participants._participantId.delete
Deletes a participant. The user itself will still remain but any state related to the project will be deleted.
It might not be possible due to constraints from the products in the project to delete the participant. However
this can only be determined at the time of the delete. If a delete fails the participant will have their inError
flag set.



```js
learnifier.orgunits.orgid.projects.projectid.participants._participantId.delete({
  "orgid": 0,
  "projectid": 0,
  "participantId": 0
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: Id of the organization unit
  * projectid **required** `integer`: Id of the project
  * participantId **required** `integer`: Participant id

#### Output
*Output schema unknown*

### orgunits.orgid.projects.projectid.participants._participantId.activate.post
Activates a participant so that it can be used



```js
learnifier.orgunits.orgid.projects.projectid.participants._participantId.activate.post({
  "orgid": 0,
  "projectid": 0,
  "participantId": 0
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: Id of the organization unit
  * projectid **required** `integer`: Id of the project
  * participantId **required** `integer`: Id of the participant

#### Output
*Output schema unknown*

### orgunits.orgid.projects.projectid.participants._participantId.loginlink.post
Returns a single sign on link for the participant. The link is only usable once and should be used directly. The link expires after a few minutes.

This operation requires the *login link* permission.



```js
learnifier.orgunits.orgid.projects.projectid.participants._participantId.loginlink.post({
  "orgid": 0,
  "projectid": 0,
  "participantId": 0
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: Id of the organization unit
  * projectid **required** `integer`: Id of the project
  * participantId **required** `integer`: Id of the participant

#### Output
* output [LoginLink](#loginlink)

### orgunits.orgid.projects.projectid.teammembers.get
Returns the project team members. A team member is a ....



```js
learnifier.orgunits.orgid.projects.projectid.teammembers.get({
  "orgid": 0,
  "projectid": 0
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: Id of the organization unit
  * projectid **required** `integer`: Id of the project

#### Output
* output `array`
  * items [ProjectTeamMember](#projectteammember)

### orgunits.orgid.usergroups.get
Returns a list of User Groups for the org unit.



```js
learnifier.orgunits.orgid.usergroups.get({
  "orgid": 0
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: ID of organization

#### Output
* output `array`
  * items [UserGroup](#usergroup)

### orgunits.orgid.usergroups.post
Create a User Group.



```js
learnifier.orgunits.orgid.usergroups.post({
  "body": null,
  "orgid": 0
}, context)
```

#### Input
* input `object`
  * body **required** [AddUserGroup](#addusergroup)
  * orgid **required** `integer`: ID of organization

#### Output
* output `array`
  * items [GroupId](#groupid)

### orgunits.orgid.usergroups.groupid.get
Returns single User Group.



```js
learnifier.orgunits.orgid.usergroups.groupid.get({
  "orgid": 0,
  "groupid": 0
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: ID of organization
  * groupid **required** `integer`: ID of group

#### Output
* output [UserGroup](#usergroup)

### orgunits.orgid.usergroups.groupid.members.get
Returns a list of all members in User Groups that are based on the Global Group with this groupid.



```js
learnifier.orgunits.orgid.usergroups.groupid.members.get({
  "orgid": 0,
  "groupid": 0
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: ID of organization
  * groupid **required** `integer`: ID of group

#### Output
* output `array`
  * items [User](#user)

### orgunits.orgid.usergroups.groupid.members.post
Adds a user to user group.



```js
learnifier.orgunits.orgid.usergroups.groupid.members.post({
  "body": null,
  "orgid": 0,
  "groupid": 0
}, context)
```

#### Input
* input `object`
  * body **required** [AddUserGroupMember](#addusergroupmember)
  * orgid **required** `integer`: ID of organization
  * groupid **required** `integer`: ID of group

#### Output
* output [UserId](#userid)

### orgunits.orgid.usergroups.groupid.members.uuid.delete
Removes a user from a user group.



```js
learnifier.orgunits.orgid.usergroups.groupid.members.uuid.delete({
  "orgid": 0,
  "groupid": 0,
  "uuid": ""
}, context)
```

#### Input
* input `object`
  * orgid **required** `integer`: ID of organization
  * groupid **required** `integer`: ID of group
  * uuid **required** `string`: UUID of user to remove from group.

#### Output
*Output schema unknown*

### users.get
Lists all users. Only api callers that have full access can call this method.


```js
learnifier.users.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The maximum number of users to return
  * offset `integer`: The offset to start listing users from

#### Output
* output `array`
  * items [UserWithPermissions](#userwithpermissions)

### users.post
Adds a user. No two users can have the same email address. Email is saved WITH case but compared regardless of case. Email can be changed for a user assuming it doesn't cause a conflict.


```js
learnifier.users.post({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [AddUser](#adduser)

#### Output
* output [AddUserResponse](#adduserresponse)

### users.userid.get
Returns information about a user



```js
learnifier.users.userid.get({
  "userid": ""
}, context)
```

#### Input
* input `object`
  * userid **required** `string`: A user id

#### Output
* output [User](#user)

### users.userid.patch
Updates a user. All values that have a key defined in the input will be set. So if a value should not be updated omit it totally from the input, otherwise it will be unset.


```js
learnifier.users.userid.patch({
  "userid": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * userid **required** `string`: The user id
  * body **required** [AddUser](#adduser)

#### Output
*Output schema unknown*

### users.userid.pic_key_APIKEY.get
Returns a thumbnail picture of the user. This can either be a selected picture or an auto generated image. This method doesn't require a full sign in. The api key is sufficient.
The image is square and is likely, but not necessary, to be in 128x128 PNG format. However the format will always be either PNG, JPEG or GIF.



```js
learnifier.users.userid.pic_key_APIKEY.get({
  "userid": "",
  "APIKEY": ""
}, context)
```

#### Input
* input `object`
  * userid **required** `string`: The user id
  * APIKEY **required** `string`

#### Output
*Output schema unknown*

### users.userid.projectParticipations.get
Returns information about the projects the user is a participant in. Only the projects that the current token have access to will be listed.



```js
learnifier.users.userid.projectParticipations.get({
  "userid": ""
}, context)
```

#### Input
* input `object`
  * userid **required** `string`: A user id

#### Output
* output [UserParticipationInfo](#userparticipationinfo)



## Definitions

### ActivationError
* ActivationError `object`
  * code `integer`: Optional error code
  * failures `array`
    * items [ProductFailure](#productfailure)
  * field `string`: The input field that the error was related to
  * message `string`: Optional error message

### AddOrganizationUnit
* AddOrganizationUnit `object`
  * caller `string`: The id of the user that initiated this operation
  * clientNumber `string`: A client number. Sometimes used when communicating with external system. Must be unique if specified.
  * country `string`: The country code that best matches the organization unit. If unspecified the platform default will be set.
  * displayName **required** `string`: The name shown for the organization unit
  * externalId `string`: The external id (foreign key). Must not exceed 255 characters.
  * parent `number`: A Organization Unit id of the parent Organization Unit (optional).

### AddOrganizationUnitResponse
* AddOrganizationUnitResponse `object`
  * ouId `number`: The Organization Unit id

### AddParticipant
* AddParticipant `object`
  * email `string`: The email of the user. If no user exists with the specified email a user will be created with default values and the specified email.
  * extid `string`: An optional external id for the participation
  * userid `string`

### AddProject
* AddProject `object`
  * country `string`: The country code. Default value will be used if not specified
  * createdBy `string`: The id of the user that created the project. If the creator is not known this value can be *null* or not specified
  * designId **required** `integer`: The id of the design this project should be based on
  * locale `string`: The primary locale for this project. Default value will be used if not specified
  * name **required** `string`: The internal name of the project
  * note `string`: The internal note field
  * timezone `string`: The main timezone for the project. Do not specify for default timezone
  * userDescription `string`: The description presented to participants. Do not specify for default value from design
  * userTitle `string`: The title presented to participants. Do not specify for default value from design

### AddUser
* AddUser `object`
  * displayName `string`: The name shown when the user is listed
  * externalId `string`: The external id (foreign key). Must not exceed 255 characters.
  * firstName `string`: The first (given) name of the user
  * hardLock `boolean`: True if the user should be locked from the system
  * homeOrg `integer`: The primary organization for the user. Must match the id of an Organization Unit.
  * locale `string`: The user's preferred language/locale setting. Affects date and number formatting.
  * primaryEmail `string`: The primary email for the user. Used for communication from the platform.

### AddUserGroup
* AddUserGroup `object`
  * name **required** `string`: Name of group.
  * parent `integer`: Optional ID of parent group.

### AddUserGroupMember
* AddUserGroupMember `object`
  * uuid **required** `string`: UUID of user to add to this group.

### AddUserResponse
* AddUserResponse `object`
  * userId `string`: The user id

### BackOfficeRole
* BackOfficeRole `object`
  * id **required** `string`: The id of the role
  * name **required** `string`: The name of the role

### ClientRole
* ClientRole `object`
  * id `string`: The id of the role
  * name `string`: The name of the role

### ClientRoles
* ClientRoles `object`
  * id `string`: An organization unit id
  * roles `array`: A list with client roles
    * items [ClientRole](#clientrole)

### CourseDesign
* CourseDesign `object`
  * created `string`: The time this entry was created
  * createdBy `string`: UUID of the user that created this entry.
  * description `string`: Course description
  * enabled **required** `boolean`: True if this design is enabled for use
  * locale **required** `string`: BCP-47 locale
  * locked `string`: The time when this entry was locked or null
  * lockedBy `string`: UUID of the user that has locked this design
  * lockedDesign **required** `boolean`: True if this design is locked for editing
  * name **required** `string`: The name
  * softid `string`: The soft identifier
  * sticky **required** `boolean`: True if this design is sticky
  * tags `array`: Course tags
    * items `string`

### Error
* Error `object`
  * code `integer`: Optional error code
  * field `string`: The input field that the error was related to
  * message `string`: Optional error message

### GlobalUserGroup
* GlobalUserGroup `object`
  * created **required** `string`: Timestamp when group was created.
  * createdBy `string`: UUID of the user that created this group.
  * id **required** `integer`: The id of the group.
  * name `string`: The name of the group.
  * parent `integer`: Id of parent group, null if group has no parent.
  * softiId `string`: Alternative unique ID for the group.
  * updated `string`: Timestamp when group was last modified.
  * updatedBy `string`: UUID of the user that last updated this group.

### GroupId
* GroupId `object`
  * groupId **required** `integer`: ID of group.

### LoginLink
* LoginLink `object`
  * link `string`: An full http url

### OrgUnit
* OrgUnit `object`
  * externalId `string`: The external id (foreign key). Must not exceed 255 characters.
  * id **required** `integer`: Unique identifier representing a specific organization unit. Id numbers are never reused.
  * name `string`: The name of the client.
  * parentId `integer`: Unique identifier of the parent or *null* if there is no parent.
  * type **required** `string`: The organization unit type. The only type is *client* at the moment.

### OrgUnits
* OrgUnits `object`
  * orgUnits `array`
    * items [OrgUnit](#orgunit)

### Participation
* Participation `object`
  * accessLink `string`: A link to access this particular participation. The link requires the user to login. Users that access the platform the first time must set a password. This value is null if this participation is not activated. 
  * activated `boolean`: True if this participation has been activated and can be used
  * activitiesCompleted `number`: The number of activities completed
  * activitiesTotal `number`: The total number of activities
  * errorMessage `string`: An optional error message that may describe why the participation is in error state.
  * expiration `string`: The timestamp when this participation will expire. Expiration never happens if this value is *null*.
  * externalId `string`: The external id (foreign key). Must not exceed 255 characters.
  * firstAccess `string`: The timestamp when the participant accessed the project for the first time. This value can be null
  * firstActivation `string`: The timestamp when this participation was first activated. This value can be null
  * firstMail `string`: The timestamp when the first mail was sent to this participant. This value can be null
  * id `integer`: Unique identifier representing this participation. Id numbers are never reused
  * inError `boolean`: True if this participation is in an error state. The user is not able to access participations that are in error state.
  * lastAccess `string`: The timestamp when the participant accessed the project the last time. This value can be null
  * lastActivation `string`: The timestamp when this participation was last activated. This value can be null
  * lastMail `string`: The timestamp when the last mail was sent to this participant. This value can be null
  * projectId `integer`: The id of the project this participation belongs to
  * userId `string`: The id of the user this participation belongs to

### ProductFailure
* ProductFailure `object`
  * message `string`: The error message
  * productId `string`: A product id
  * type `string`: The technical error type

### Project
* Project `object`
  * adminUrl `string`: URL to the page where project administration can be done. Administrative access is still required when accessing the url.
  * country `string`: The country code
  * created `string`: The timestamp when this project was created.
  * createdBy `string`: The id of the user that created the project. If the creator is not known this value is *null*
  * designId `integer`: The id of the design this project are using or null if no design is used
  * externalId `string`: The external id (foreign key). Must not exceed 255 characters.
  * id `integer`: Unique identifier representing a specific project. Id numbers are never reused.
  * locale `string`: The primary locale for this project
  * name `string`: The internal name of the project
  * note `string`: The internal note field
  * orgId `integer`: The id of the organization unit this project belongs to
  * status `string` (values: ACTIVATED, NEW, DISABLED): Project status. Can be either ACTIVATED, NEW or DISABLED
  * timezone `string`: The main timezone for the project
  * userDescription `string`: The description presented to participants. This value can be *null*.
  * userTitle `string`: The title presented to participants

### ProjectTeamMember
* ProjectTeamMember `object`
  * roles [TeamRole](#teamrole)
  * userid `string`: The id of the user that created the project. If the creator is not known this value is *null*

### TeamRole
* TeamRole `object`
  * name `string`
  * roleid `string`

### UpdateOrganizationUnit
* UpdateOrganizationUnit `object`
  * caller `string`: The id of the user that initiated this operation
  * clientNumber `string`: A client number. Sometimes used when communicating with external system. Must be unique if specified.
  * country `string`: The country code that best matches the organization unit. If unspecified the platform default will be set.
  * displayName `string`: The name shown for the organization unit
  * externalId `string`: The external id (foreign key). Must not exceed 255 characters.
  * parent `number`: A Organization Unit id of the parent Organization Unit (optional).

### UpdateProject
* UpdateProject `object`
  * country `string`: The country code
  * locale `string`: The primary locale for this project
  * name `string`: The internal name of the project
  * note `string`: The internal note field
  * status `string` (values: ACTIVATED, NEW, DISABLED): Project status. Can be either ACTIVATED, NEW or DISABLED
  * timezone `string`: The main timezone for the project
  * userDescription `string`: The description presented to participants. This value can be *null*.
  * userTitle `string`: The title presented to participants

### User
* User `object`
  * authorizationPossible `boolean`: True if the user can authorize herself/himself
  * displayName `string`: Full name of the user
  * externalId `string`: The external id (foreign key). Must not exceed 255 characters.
  * firstLogin `string`: The timestamp when the first login was made. This value can be *null*.
  * firstName `string`: The first name of the user (or given name)
  * hardLock `boolean`: True if the user is locked and the lock has been set by an administrator
  * homeOrg `integer`: The primary organization for the user. Must match the id of an Organization Unit.
  * id `string`: The id of the user this participation belongs to
  * lastLogin `string`: The timestamp when the last login was made. This value can be *null*.
  * lastName `string`: The last name of the user (or surname)
  * locked `boolean`: Lock status. A locked user will not be able to access the platform.
  * prefs [UserPreferences](#userpreferences)
  * primaryEmail `string`: The primary email for this user. If the user has no email this value is *null*.

### UserGroup
* UserGroup `object`
  * children `array`: Children User Groups.
    * items [UserGroup](#usergroup)
  * globalId `integer`: Global group ID if this group is based on a global group, otherwise null.
  * groupId `integer`: Unique identifier representing a User Group. Id numbers are never reused.
  * name **required** `string`: The name of the User Group.
  * parent `integer`: Unique identifier of the parent or *null* if there is no parent.
  * userGroup `integer`: If of internal user group object that holds the members of this group.

### UserId
* UserId `object`
  * uuid **required** `string`: UUID of user to add to this group.

### UserParticipationInfo
* UserParticipationInfo `object`
  * accessLink `string`: A link to access this particular participation. The link requires the user to login. Users that access the platform the first time must set a password. This value is null if this participation is not activated. 
  * activated `boolean`: True if this participation has been activated and can be used
  * activitiesCompleted `number`: The number of activities completed
  * activitiesTotal `number`: The total number of activities
  * errorMessage `string`: An optional error message that may describe why the participation is in error state.
  * expiration `string`: The timestamp when this participation will expire. Expiration never happens if this value is *null*.
  * externalId `string`: The external id (foreign key). Must not exceed 255 characters.
  * firstAccess `string`: The timestamp when the participant accessed the project for the first time. This value can be null
  * firstActivation `string`: The timestamp when this participation was first activated. This value can be null
  * firstMail `string`: The timestamp when the first mail was sent to this participant. This value can be null
  * id `integer`: Participation id
  * inError `boolean`: True if this participation is in an error state. The user is not able to access participations that are in error state.
  * lastAccess `string`: The timestamp when the participant accessed the project the last time. This value can be null
  * lastActivation `string`: The timestamp when this participation was last activated. This value can be null
  * lastMail `string`: The timestamp when the last mail was sent to this participant. This value can be null
  * projectId `integer`: Project id
  * projectName `string`: The internal name of the project
  * projectOrgId `integer`: The organization id
  * projectStatus `string` (values: ACTIVATED, NEW, DISABLED): Project status. Can be either ACTIVATED, NEW or DISABLED
  * projectThumbnail `string`: An url to the project thumbnail. This url can be accessed by anyone.
  * projectUserTitle `string`: The title presented to participants

### UserPreferences
* UserPreferences `object`
  * locale `string`: The preferred locale. This value can be *null* if no specific preference has been selected.

### UserWithPermissions
* UserWithPermissions
  * authorizationPossible `boolean`: True if the user can authorize herself/himself
  * displayName `string`: Full name of the user
  * externalId `string`: The external id (foreign key). Must not exceed 255 characters.
  * firstLogin `string`: The timestamp when the first login was made. This value can be *null*.
  * firstName `string`: The first name of the user (or given name)
  * hardLock `boolean`: True if the user is locked and the lock has been set by an administrator
  * homeOrg `integer`: The primary organization for the user. Must match the id of an Organization Unit.
  * id `string`: The id of the user this participation belongs to
  * lastLogin `string`: The timestamp when the last login was made. This value can be *null*.
  * lastName `string`: The last name of the user (or surname)
  * locked `boolean`: Lock status. A locked user will not be able to access the platform.
  * prefs [UserPreferences](#userpreferences)
  * primaryEmail `string`: The primary email for this user. If the user has no email this value is *null*.
  * backOfficeRoles `array`
    * items [BackOfficeRole](#backofficerole)
  * clientRoles `array`: A list with client roles
    * items [ClientRoles](#clientroles)


