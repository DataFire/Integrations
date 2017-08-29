# @datafire/learnifier

Client library for Learnifier

## Installation and Usage
```bash
npm install --save datafire @datafire/learnifier
```

```js
let datafire = require('datafire');
let learnifier = require('@datafire/learnifier').create();

learnifier.users.get({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### coursedesigns.get
Lists all global course design templates. Only api callers that have full access can call this method.


```js
learnifier.coursedesigns.get(null, context)
```


### extorgunit.get
Returns information about the organization unit with the specified external id.



```js
learnifier.extorgunit.get({
  "extid": ""
}, context)
```

#### Parameters
* extid (string) **required** - The external id of the organization unit

### extparticipation.get
Gets a participation by external id.


```js
learnifier.extparticipation.get({
  "extid": ""
}, context)
```

#### Parameters
* extid (string) **required** - The external id of the participation

### extproject.get
Gets an Organization Unit by external id


```js
learnifier.extproject.get({
  "extid": ""
}, context)
```

#### Parameters
* extid (string) **required** - The external id of the organization unit

### extuser.get
Gets a user by external id.


```js
learnifier.extuser.get({
  "extid": ""
}, context)
```

#### Parameters
* extid (string) **required** - The external id of the user

### globalusergroups.get
Returns a list of Global User Groups. Global User Groups are set up for the realm, and will generate groups that can be used on the client level.



```js
learnifier.globalusergroups.get(null, context)
```


### globalusergroups.groupid.members.get
Returns a list of all members in User Groups that are based on the Global Group with this groupid.



```js
learnifier.globalusergroups.groupid.members.get({
  "groupid": 0
}, context)
```

#### Parameters
* groupid (integer) **required** - ID of group

### orgunits.get
The orgunits endpoint returns information about the available organization units (orgunits).
The response includes the display name, internal and external id and client number.



```js
learnifier.orgunits.get(null, context)
```


### orgunits.post
Adds an Organization Unit


```js
learnifier.orgunits.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### orgunits.orgid.get
Returns information about the specified organization unit.
The response includes the display name, internal and external id and client number.



```js
learnifier.orgunits.orgid.get({
  "orgid": 0
}, context)
```

#### Parameters
* orgid (integer) **required** - Id of the organization unit

### orgunits.orgid.patch
Adds an Organization Unit


```js
learnifier.orgunits.orgid.patch({
  "body": null,
  "orgid": ""
}, context)
```

#### Parameters
* body (undefined) **required**
* orgid (string) **required**

### orgunits.orgid.projects.get
Returns the available projects for the organization unit



```js
learnifier.orgunits.orgid.projects.get({
  "orgid": 0
}, context)
```

#### Parameters
* orgid (number) **required** - Id of the organization unit

### orgunits.orgid.projects.post
Creates a new project



```js
learnifier.orgunits.orgid.projects.post({
  "orgid": 0,
  "body": null
}, context)
```

#### Parameters
* orgid (integer) **required** - Id of the organization unit
* body (undefined) **required**

### orgunits.orgid.projects.projectid.delete
Deletes the project. The project can only be deleted if the project do not contain any participants.



```js
learnifier.orgunits.orgid.projects.projectid.delete({
  "orgid": 0,
  "projectid": 0
}, context)
```

#### Parameters
* orgid (integer) **required** - Id of the organization unit
* projectid (integer) **required** - Id of the project

### orgunits.orgid.projects.projectid.get
Returns project information



```js
learnifier.orgunits.orgid.projects.projectid.get({
  "orgid": 0,
  "projectid": 0
}, context)
```

#### Parameters
* orgid (integer) **required** - Id of the organization unit
* projectid (integer) **required** - Id of the project

### orgunits.orgid.projects.projectid.patch
Updates information about a project. Values are only updated if the fields are specified in the input



```js
learnifier.orgunits.orgid.projects.projectid.patch({
  "orgid": 0,
  "projectid": 0,
  "body": null
}, context)
```

#### Parameters
* orgid (integer) **required** - Id of the organization unit
* projectid (integer) **required** - Id of the project
* body (undefined) **required**

### orgunits.orgid.projects.projectid.participants.get
Returns project participants



```js
learnifier.orgunits.orgid.projects.projectid.participants.get({
  "orgid": 0,
  "projectid": 0
}, context)
```

#### Parameters
* orgid (integer) **required** - Id of the organization unit
* projectid (integer) **required** - Id of the project

### orgunits.orgid.projects.projectid.participants.post
Add a user to the project. Participant information is created for the user. In the body object, only one of either email or userid must be specified. The participant needs to be activated before it the user can access it.



```js
learnifier.orgunits.orgid.projects.projectid.participants.post({
  "orgid": 0,
  "projectid": 0,
  "body": null
}, context)
```

#### Parameters
* orgid (integer) **required** - Id of the organization unit
* projectid (integer) **required** - Id of the project
* body (undefined) **required**

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

#### Parameters
* orgid (integer) **required** - Id of the organization unit
* projectid (integer) **required** - Id of the project
* participantId (integer) **required** - Participant id

### orgunits.orgid.projects.projectid.participants._participantId.activate.post
Activates a participant so that it can be used



```js
learnifier.orgunits.orgid.projects.projectid.participants._participantId.activate.post({
  "orgid": 0,
  "projectid": 0,
  "participantId": 0
}, context)
```

#### Parameters
* orgid (integer) **required** - Id of the organization unit
* projectid (integer) **required** - Id of the project
* participantId (integer) **required** - Id of the participant

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

#### Parameters
* orgid (integer) **required** - Id of the organization unit
* projectid (integer) **required** - Id of the project
* participantId (integer) **required** - Id of the participant

### orgunits.orgid.projects.projectid.teammembers.get
Returns the project team members. A team member is a ....



```js
learnifier.orgunits.orgid.projects.projectid.teammembers.get({
  "orgid": 0,
  "projectid": 0
}, context)
```

#### Parameters
* orgid (integer) **required** - Id of the organization unit
* projectid (integer) **required** - Id of the project

### orgunits.orgid.usergroups.get
Returns a list of User Groups for the org unit.



```js
learnifier.orgunits.orgid.usergroups.get({
  "orgid": 0
}, context)
```

#### Parameters
* orgid (integer) **required** - ID of organization

### orgunits.orgid.usergroups.post
Create a User Group.



```js
learnifier.orgunits.orgid.usergroups.post({
  "body": null,
  "orgid": 0
}, context)
```

#### Parameters
* body (undefined) **required**
* orgid (integer) **required** - ID of organization

### orgunits.orgid.usergroups.groupid.get
Returns single User Group.



```js
learnifier.orgunits.orgid.usergroups.groupid.get({
  "orgid": 0,
  "groupid": 0
}, context)
```

#### Parameters
* orgid (integer) **required** - ID of organization
* groupid (integer) **required** - ID of group

### orgunits.orgid.usergroups.groupid.members.get
Returns a list of all members in User Groups that are based on the Global Group with this groupid.



```js
learnifier.orgunits.orgid.usergroups.groupid.members.get({
  "orgid": 0,
  "groupid": 0
}, context)
```

#### Parameters
* orgid (integer) **required** - ID of organization
* groupid (integer) **required** - ID of group

### orgunits.orgid.usergroups.groupid.members.post
Adds a user to user group.



```js
learnifier.orgunits.orgid.usergroups.groupid.members.post({
  "body": null,
  "orgid": 0,
  "groupid": 0
}, context)
```

#### Parameters
* body (undefined) **required**
* orgid (integer) **required** - ID of organization
* groupid (integer) **required** - ID of group

### orgunits.orgid.usergroups.groupid.members.uuid.delete
Removes a user from a user group.



```js
learnifier.orgunits.orgid.usergroups.groupid.members.uuid.delete({
  "orgid": 0,
  "groupid": 0,
  "uuid": ""
}, context)
```

#### Parameters
* orgid (integer) **required** - ID of organization
* groupid (integer) **required** - ID of group
* uuid (string) **required** - UUID of user to remove from group.

### users.get
Lists all users. Only api callers that have full access can call this method.


```js
learnifier.users.get({}, context)
```

#### Parameters
* limit (integer) - The maximum number of users to return
* offset (integer) - The offset to start listing users from

### users.post
Adds a user. No two users can have the same email address. Email is saved WITH case but compared regardless of case. Email can be changed for a user assuming it doesn't cause a conflict.


```js
learnifier.users.post({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### users.userid.get
Returns information about a user



```js
learnifier.users.userid.get({
  "userid": ""
}, context)
```

#### Parameters
* userid (string) **required** - A user id

### users.userid.patch
Updates a user. All values that have a key defined in the input will be set. So if a value should not be updated omit it totally from the input, otherwise it will be unset.


```js
learnifier.users.userid.patch({
  "userid": "",
  "body": null
}, context)
```

#### Parameters
* userid (string) **required** - The user id
* body (undefined) **required**

### users.userid.pic_key_APIKEY.get
Returns a thumbnail picture of the user. This can either be a selected picture or an auto generated image. This method doesn't require a full sign in. The api key is sufficient.
The image is square and is likely, but not necessary, to be in 128x128 PNG format. However the format will always be either PNG, JPEG or GIF.



```js
learnifier.users.userid.pic_key_APIKEY.get({
  "userid": "",
  "APIKEY": ""
}, context)
```

#### Parameters
* userid (string) **required** - The user id
* APIKEY (string) **required**

### users.userid.projectParticipations.get
Returns information about the projects the user is a participant in. Only the projects that the current token have access to will be listed.



```js
learnifier.users.userid.projectParticipations.get({
  "userid": ""
}, context)
```

#### Parameters
* userid (string) **required** - A user id

