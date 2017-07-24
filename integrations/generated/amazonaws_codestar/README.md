# @datafire/amazonaws_codestar

Client library for AWS CodeStar

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_codestar
```

```js
let datafire = require('datafire');
let amazonaws_codestar = require('@datafire/amazonaws_codestar').actions;
let context = new datafire.Context();

amazonaws_codestar.AssociateTeamMember({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS CodeStar</fullname> <p>This is the API reference for AWS CodeStar. This reference provides descriptions of the operations and data types for the AWS CodeStar API along with usage examples.</p> <p>You can use the AWS CodeStar API to work with:</p> <p>Projects and their resources, by calling the following:</p> <ul> <li> <p> <a>DeleteProject</a>, which deletes a project in AWS CodeStar.</p> </li> <li> <p> <a>DescribeProject</a>, which lists the attributes of a project.</p> </li> <li> <p> <a>ListProjects</a>, which lists all AWS CodeStar projects associated with your AWS account.</p> </li> <li> <p> <a>ListResources</a>, which lists the resources associated with an AWS CodeStar project.</p> </li> <li> <p> <a>UpdateProject</a>, which updates the attributes of an AWS CodeStar project.</p> </li> </ul> <p>Teams and team members, by calling the following:</p> <ul> <li> <p> <a>AssociateTeamMember</a>, which adds an IAM user to the team for an AWS CodeStar project.</p> </li> <li> <p> <a>DisassociateTeamMember</a>, which removes an IAM user from the team for an AWS CodeStar project.</p> </li> <li> <p> <a>ListTeamMembers</a>, which lists all the IAM users in the team for an AWS CodeStar project, including their roles and attributes.</p> </li> </ul> <p>Users, by calling the following:</p> <ul> <li> <p> <a>CreateUserProfile</a>, which creates a user profile that contains data associated with the user across all AWS CodeStar projects.</p> </li> <li> <p> <a>DeleteUserProfile</a>, which deletes all user profile information across all AWS CodeStar projects.</p> </li> <li> <p> <a>DescribeUserProfile</a>, which describes the profile of a user.</p> </li> <li> <p> <a>ListUserProfiles</a>, which lists all AWS CodeStar user profiles.</p> </li> <li> <p> <a>UpdateUserProfile</a>, which updates the profile for an AWS CodeStar user. </p> </li> </ul>

## Actions
### AssociateTeamMember



```js
amazonaws_codestar.AssociateTeamMember({}, context)
```

#### Parameters

### CreateProject



```js
amazonaws_codestar.CreateProject({}, context)
```

#### Parameters

### CreateUserProfile



```js
amazonaws_codestar.CreateUserProfile({}, context)
```

#### Parameters

### DeleteProject



```js
amazonaws_codestar.DeleteProject({}, context)
```

#### Parameters

### DeleteUserProfile



```js
amazonaws_codestar.DeleteUserProfile({}, context)
```

#### Parameters

### DescribeProject



```js
amazonaws_codestar.DescribeProject({}, context)
```

#### Parameters

### DescribeUserProfile



```js
amazonaws_codestar.DescribeUserProfile({}, context)
```

#### Parameters

### DisassociateTeamMember



```js
amazonaws_codestar.DisassociateTeamMember({}, context)
```

#### Parameters

### ListProjects



```js
amazonaws_codestar.ListProjects({}, context)
```

#### Parameters

### ListResources



```js
amazonaws_codestar.ListResources({}, context)
```

#### Parameters

### ListTeamMembers



```js
amazonaws_codestar.ListTeamMembers({}, context)
```

#### Parameters

### ListUserProfiles



```js
amazonaws_codestar.ListUserProfiles({}, context)
```

#### Parameters

### UpdateProject



```js
amazonaws_codestar.UpdateProject({}, context)
```

#### Parameters

### UpdateTeamMember



```js
amazonaws_codestar.UpdateTeamMember({}, context)
```

#### Parameters

### UpdateUserProfile



```js
amazonaws_codestar.UpdateUserProfile({}, context)
```

#### Parameters

