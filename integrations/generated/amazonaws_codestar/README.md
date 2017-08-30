# @datafire/amazonaws_codestar

Client library for AWS CodeStar

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_codestar
```

```js
let datafire = require('datafire');
let amazonaws_codestar = require('@datafire/amazonaws_codestar').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_codestar.AssociateTeamMember({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS CodeStar</fullname> <p>This is the API reference for AWS CodeStar. This reference provides descriptions of the operations and data types for the AWS CodeStar API along with usage examples.</p> <p>You can use the AWS CodeStar API to work with:</p> <p>Projects and their resources, by calling the following:</p> <ul> <li> <p> <a>DeleteProject</a>, which deletes a project in AWS CodeStar.</p> </li> <li> <p> <a>DescribeProject</a>, which lists the attributes of a project.</p> </li> <li> <p> <a>ListProjects</a>, which lists all AWS CodeStar projects associated with your AWS account.</p> </li> <li> <p> <a>ListResources</a>, which lists the resources associated with an AWS CodeStar project.</p> </li> <li> <p> <a>UpdateProject</a>, which updates the attributes of an AWS CodeStar project.</p> </li> </ul> <p>Teams and team members, by calling the following:</p> <ul> <li> <p> <a>AssociateTeamMember</a>, which adds an IAM user to the team for an AWS CodeStar project.</p> </li> <li> <p> <a>DisassociateTeamMember</a>, which removes an IAM user from the team for an AWS CodeStar project.</p> </li> <li> <p> <a>ListTeamMembers</a>, which lists all the IAM users in the team for an AWS CodeStar project, including their roles and attributes.</p> </li> </ul> <p>Users, by calling the following:</p> <ul> <li> <p> <a>CreateUserProfile</a>, which creates a user profile that contains data associated with the user across all AWS CodeStar projects.</p> </li> <li> <p> <a>DeleteUserProfile</a>, which deletes all user profile information across all AWS CodeStar projects.</p> </li> <li> <p> <a>DescribeUserProfile</a>, which describes the profile of a user.</p> </li> <li> <p> <a>ListUserProfiles</a>, which lists all AWS CodeStar user profiles.</p> </li> <li> <p> <a>UpdateUserProfile</a>, which updates the profile for an AWS CodeStar user. </p> </li> </ul>

## Actions
### AssociateTeamMember



```js
amazonaws_codestar.AssociateTeamMember({
  "projectId": "",
  "userArn": "",
  "projectRole": ""
}, context)
```

#### Parameters
* clientRequestToken (string)
* projectId (string) **required**
* projectRole (string) **required**
* remoteAccessAllowed (boolean)
* userArn (string) **required**

### CreateProject



```js
amazonaws_codestar.CreateProject({
  "name": "",
  "id": ""
}, context)
```

#### Parameters
* clientRequestToken (string)
* description (string)
* id (string) **required**
* name (string) **required**

### CreateUserProfile



```js
amazonaws_codestar.CreateUserProfile({
  "userArn": "",
  "displayName": "",
  "emailAddress": ""
}, context)
```

#### Parameters
* displayName (string) **required**
* emailAddress (string) **required**
* sshPublicKey (string)
* userArn (string) **required**

### DeleteProject



```js
amazonaws_codestar.DeleteProject({
  "id": ""
}, context)
```

#### Parameters
* clientRequestToken (string)
* deleteStack (boolean)
* id (string) **required**

### DeleteUserProfile



```js
amazonaws_codestar.DeleteUserProfile({
  "userArn": ""
}, context)
```

#### Parameters
* userArn (string) **required**

### DescribeProject



```js
amazonaws_codestar.DescribeProject({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### DescribeUserProfile



```js
amazonaws_codestar.DescribeUserProfile({
  "userArn": ""
}, context)
```

#### Parameters
* userArn (string) **required**

### DisassociateTeamMember



```js
amazonaws_codestar.DisassociateTeamMember({
  "projectId": "",
  "userArn": ""
}, context)
```

#### Parameters
* projectId (string) **required**
* userArn (string) **required**

### ListProjects



```js
amazonaws_codestar.ListProjects({}, context)
```

#### Parameters
* maxResults (integer)
* nextToken (string)

### ListResources



```js
amazonaws_codestar.ListResources({
  "projectId": ""
}, context)
```

#### Parameters
* maxResults (integer)
* nextToken (string)
* projectId (string) **required**

### ListTeamMembers



```js
amazonaws_codestar.ListTeamMembers({
  "projectId": ""
}, context)
```

#### Parameters
* maxResults (integer)
* nextToken (string)
* projectId (string) **required**

### ListUserProfiles



```js
amazonaws_codestar.ListUserProfiles({}, context)
```

#### Parameters
* maxResults (integer)
* nextToken (string)

### UpdateProject



```js
amazonaws_codestar.UpdateProject({
  "id": ""
}, context)
```

#### Parameters
* description (string)
* id (string) **required**
* name (string)

### UpdateTeamMember



```js
amazonaws_codestar.UpdateTeamMember({
  "projectId": "",
  "userArn": ""
}, context)
```

#### Parameters
* projectId (string) **required**
* projectRole (string)
* remoteAccessAllowed (boolean)
* userArn (string) **required**

### UpdateUserProfile



```js
amazonaws_codestar.UpdateUserProfile({
  "userArn": ""
}, context)
```

#### Parameters
* displayName (string)
* emailAddress (string)
* sshPublicKey (string)
* userArn (string) **required**

