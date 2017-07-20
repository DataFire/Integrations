# @datafire/amazonaws_codestar

Client library for AWS CodeStar

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_codestar
```

```js
let datafire = require('datafire');
let amazonaws_codestar = require('@datafire/amazonaws_codestar').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_codestar: account,
  }
})


amazonaws_codestar.AssociateTeamMember({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS CodeStar</fullname> <p>This is the API reference for AWS CodeStar. This reference provides descriptions of the operations and data types for the AWS CodeStar API along with usage examples.</p> <p>You can use the AWS CodeStar API to work with:</p> <p>Projects and their resources, by calling the following:</p> <ul> <li> <p> <a>DeleteProject</a>, which deletes a project in AWS CodeStar.</p> </li> <li> <p> <a>DescribeProject</a>, which lists the attributes of a project.</p> </li> <li> <p> <a>ListProjects</a>, which lists all AWS CodeStar projects associated with your AWS account.</p> </li> <li> <p> <a>ListResources</a>, which lists the resources associated with an AWS CodeStar project.</p> </li> <li> <p> <a>UpdateProject</a>, which updates the attributes of an AWS CodeStar project.</p> </li> </ul> <p>Teams and team members, by calling the following:</p> <ul> <li> <p> <a>AssociateTeamMember</a>, which adds an IAM user to the team for an AWS CodeStar project.</p> </li> <li> <p> <a>DisassociateTeamMember</a>, which removes an IAM user from the team for an AWS CodeStar project.</p> </li> <li> <p> <a>ListTeamMembers</a>, which lists all the IAM users in the team for an AWS CodeStar project, including their roles and attributes.</p> </li> </ul> <p>Users, by calling the following:</p> <ul> <li> <p> <a>CreateUserProfile</a>, which creates a user profile that contains data associated with the user across all AWS CodeStar projects.</p> </li> <li> <p> <a>DeleteUserProfile</a>, which deletes all user profile information across all AWS CodeStar projects.</p> </li> <li> <p> <a>DescribeUserProfile</a>, which describes the profile of a user.</p> </li> <li> <p> <a>ListUserProfiles</a>, which lists all AWS CodeStar user profiles.</p> </li> <li> <p> <a>UpdateUserProfile</a>, which updates the profile for an AWS CodeStar user. </p> </li> </ul>

## Actions
### AssociateTeamMember
Adds an IAM user to the team for an AWS CodeStar project.


```js
amazonaws_codestar.AssociateTeamMember({
  "body": {
    "projectId": "",
    "userArn": "",
    "projectRole": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateProject
Reserved for future use. To create a project, use the AWS CodeStar console.


```js
amazonaws_codestar.CreateProject({
  "body": {
    "name": "",
    "id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateUserProfile
Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.


```js
amazonaws_codestar.CreateUserProfile({
  "body": {
    "userArn": "",
    "displayName": "",
    "emailAddress": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteProject
Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.


```js
amazonaws_codestar.DeleteProject({
  "body": {
    "id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteUserProfile
Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.


```js
amazonaws_codestar.DeleteUserProfile({
  "body": {
    "userArn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeProject
Describes a project and its resources.


```js
amazonaws_codestar.DescribeProject({
  "body": {
    "id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeUserProfile
Describes a user in AWS CodeStar and the user attributes across all projects.


```js
amazonaws_codestar.DescribeUserProfile({
  "body": {
    "userArn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DisassociateTeamMember
Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.


```js
amazonaws_codestar.DisassociateTeamMember({
  "body": {
    "projectId": "",
    "userArn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListProjects
Lists all projects in AWS CodeStar associated with your AWS account.


```js
amazonaws_codestar.ListProjects({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListResources
Lists resources associated with a project in AWS CodeStar.


```js
amazonaws_codestar.ListResources({
  "body": {
    "projectId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListTeamMembers
Lists all team members associated with a project.


```js
amazonaws_codestar.ListTeamMembers({
  "body": {
    "projectId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListUserProfiles
Lists all the user profiles configured for your AWS account in AWS CodeStar.


```js
amazonaws_codestar.ListUserProfiles({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateProject
Updates a project in AWS CodeStar.


```js
amazonaws_codestar.UpdateProject({
  "body": {
    "id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateTeamMember
Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.


```js
amazonaws_codestar.UpdateTeamMember({
  "body": {
    "projectId": "",
    "userArn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateUserProfile
Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar. 


```js
amazonaws_codestar.UpdateUserProfile({
  "body": {
    "userArn": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

