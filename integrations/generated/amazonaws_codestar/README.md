# @datafire/amazonaws_codestar

Client library for AWS CodeStar

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_codestar
```
```js
let amazonaws_codestar = require('@datafire/amazonaws_codestar').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_codestar.AssociateTeamMember({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>AWS CodeStar</fullname> <p>This is the API reference for AWS CodeStar. This reference provides descriptions of the operations and data types for the AWS CodeStar API along with usage examples.</p> <p>You can use the AWS CodeStar API to work with:</p> <p>Projects and their resources, by calling the following:</p> <ul> <li> <p> <code>DeleteProject</code>, which deletes a project.</p> </li> <li> <p> <code>DescribeProject</code>, which lists the attributes of a project.</p> </li> <li> <p> <code>ListProjects</code>, which lists all projects associated with your AWS account.</p> </li> <li> <p> <code>ListResources</code>, which lists the resources associated with a project.</p> </li> <li> <p> <code>ListTagsForProject</code>, which lists the tags associated with a project.</p> </li> <li> <p> <code>TagProject</code>, which adds tags to a project.</p> </li> <li> <p> <code>UntagProject</code>, which removes tags from a project.</p> </li> <li> <p> <code>UpdateProject</code>, which updates the attributes of a project.</p> </li> </ul> <p>Teams and team members, by calling the following:</p> <ul> <li> <p> <code>AssociateTeamMember</code>, which adds an IAM user to the team for a project.</p> </li> <li> <p> <code>DisassociateTeamMember</code>, which removes an IAM user from the team for a project.</p> </li> <li> <p> <code>ListTeamMembers</code>, which lists all the IAM users in the team for a project, including their roles and attributes.</p> </li> <li> <p> <code>UpdateTeamMember</code>, which updates a team member's attributes in a project.</p> </li> </ul> <p>Users, by calling the following:</p> <ul> <li> <p> <code>CreateUserProfile</code>, which creates a user profile that contains data associated with the user across all projects.</p> </li> <li> <p> <code>DeleteUserProfile</code>, which deletes all user profile information across all projects.</p> </li> <li> <p> <code>DescribeUserProfile</code>, which describes the profile of a user.</p> </li> <li> <p> <code>ListUserProfiles</code>, which lists all user profiles.</p> </li> <li> <p> <code>UpdateUserProfile</code>, which updates the profile for a user.</p> </li> </ul>

## Actions

### AssociateTeamMember



```js
amazonaws_codestar.AssociateTeamMember({
  "projectId": "",
  "userArn": "",
  "projectRole": ""
}, context)
```

#### Input
* input `object`
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * projectId **required** [ProjectId](#projectid)
  * projectRole **required** [Role](#role)
  * remoteAccessAllowed [RemoteAccessAllowed](#remoteaccessallowed)
  * userArn **required** [UserArn](#userarn)

#### Output
* output [AssociateTeamMemberResult](#associateteammemberresult)

### CreateProject



```js
amazonaws_codestar.CreateProject({
  "name": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * description [ProjectDescription](#projectdescription)
  * id **required** [ProjectId](#projectid)
  * name **required** [ProjectName](#projectname)

#### Output
* output [CreateProjectResult](#createprojectresult)

### CreateUserProfile



```js
amazonaws_codestar.CreateUserProfile({
  "userArn": "",
  "displayName": "",
  "emailAddress": ""
}, context)
```

#### Input
* input `object`
  * displayName **required** [UserProfileDisplayName](#userprofiledisplayname)
  * emailAddress **required** [Email](#email)
  * sshPublicKey [SshPublicKey](#sshpublickey)
  * userArn **required** [UserArn](#userarn)

#### Output
* output [CreateUserProfileResult](#createuserprofileresult)

### DeleteProject



```js
amazonaws_codestar.DeleteProject({
  "id": ""
}, context)
```

#### Input
* input `object`
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * deleteStack [DeleteStack](#deletestack)
  * id **required** [ProjectId](#projectid)

#### Output
* output [DeleteProjectResult](#deleteprojectresult)

### DeleteUserProfile



```js
amazonaws_codestar.DeleteUserProfile({
  "userArn": ""
}, context)
```

#### Input
* input `object`
  * userArn **required** [UserArn](#userarn)

#### Output
* output [DeleteUserProfileResult](#deleteuserprofileresult)

### DescribeProject



```js
amazonaws_codestar.DescribeProject({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** [ProjectId](#projectid)

#### Output
* output [DescribeProjectResult](#describeprojectresult)

### DescribeUserProfile



```js
amazonaws_codestar.DescribeUserProfile({
  "userArn": ""
}, context)
```

#### Input
* input `object`
  * userArn **required** [UserArn](#userarn)

#### Output
* output [DescribeUserProfileResult](#describeuserprofileresult)

### DisassociateTeamMember



```js
amazonaws_codestar.DisassociateTeamMember({
  "projectId": "",
  "userArn": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** [ProjectId](#projectid)
  * userArn **required** [UserArn](#userarn)

#### Output
* output [DisassociateTeamMemberResult](#disassociateteammemberresult)

### ListProjects



```js
amazonaws_codestar.ListProjects({}, context)
```

#### Input
* input `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListProjectsResult](#listprojectsresult)

### ListResources



```js
amazonaws_codestar.ListResources({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [PaginationToken](#paginationtoken)
  * projectId **required** [ProjectId](#projectid)

#### Output
* output [ListResourcesResult](#listresourcesresult)

### ListTagsForProject



```js
amazonaws_codestar.ListTagsForProject({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** [ProjectId](#projectid)
  * maxResults [MaxResults](#maxresults)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListTagsForProjectResult](#listtagsforprojectresult)

### ListTeamMembers



```js
amazonaws_codestar.ListTeamMembers({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [PaginationToken](#paginationtoken)
  * projectId **required** [ProjectId](#projectid)

#### Output
* output [ListTeamMembersResult](#listteammembersresult)

### ListUserProfiles



```js
amazonaws_codestar.ListUserProfiles({}, context)
```

#### Input
* input `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListUserProfilesResult](#listuserprofilesresult)

### TagProject



```js
amazonaws_codestar.TagProject({
  "id": "",
  "tags": []
}, context)
```

#### Input
* input `object`
  * id **required** [ProjectId](#projectid)
  * tags **required** [Tags](#tags)

#### Output
* output [TagProjectResult](#tagprojectresult)

### UntagProject



```js
amazonaws_codestar.UntagProject({
  "id": "",
  "tags": []
}, context)
```

#### Input
* input `object`
  * id **required** [ProjectId](#projectid)
  * tags **required** [TagKeys](#tagkeys)

#### Output
* output [UntagProjectResult](#untagprojectresult)

### UpdateProject



```js
amazonaws_codestar.UpdateProject({
  "id": ""
}, context)
```

#### Input
* input `object`
  * description [ProjectDescription](#projectdescription)
  * id **required** [ProjectId](#projectid)
  * name [ProjectName](#projectname)

#### Output
* output [UpdateProjectResult](#updateprojectresult)

### UpdateTeamMember



```js
amazonaws_codestar.UpdateTeamMember({
  "projectId": "",
  "userArn": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** [ProjectId](#projectid)
  * projectRole [Role](#role)
  * remoteAccessAllowed [RemoteAccessAllowed](#remoteaccessallowed)
  * userArn **required** [UserArn](#userarn)

#### Output
* output [UpdateTeamMemberResult](#updateteammemberresult)

### UpdateUserProfile



```js
amazonaws_codestar.UpdateUserProfile({
  "userArn": ""
}, context)
```

#### Input
* input `object`
  * displayName [UserProfileDisplayName](#userprofiledisplayname)
  * emailAddress [Email](#email)
  * sshPublicKey [SshPublicKey](#sshpublickey)
  * userArn **required** [UserArn](#userarn)

#### Output
* output [UpdateUserProfileResult](#updateuserprofileresult)



## Definitions

### AssociateTeamMemberRequest
* AssociateTeamMemberRequest `object`
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * projectId **required** [ProjectId](#projectid)
  * projectRole **required** [Role](#role)
  * remoteAccessAllowed [RemoteAccessAllowed](#remoteaccessallowed)
  * userArn **required** [UserArn](#userarn)

### AssociateTeamMemberResult
* AssociateTeamMemberResult `object`
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)

### ClientRequestToken
* ClientRequestToken `string`

### ConcurrentModificationException
* ConcurrentModificationException `object`: Another modification is being made. That modification must complete before you can make your change.

### CreateProjectRequest
* CreateProjectRequest `object`
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * description [ProjectDescription](#projectdescription)
  * id **required** [ProjectId](#projectid)
  * name **required** [ProjectName](#projectname)

### CreateProjectResult
* CreateProjectResult `object`
  * arn **required** [ProjectArn](#projectarn)
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * id **required** [ProjectId](#projectid)
  * projectTemplateId [ProjectTemplateId](#projecttemplateid)

### CreateUserProfileRequest
* CreateUserProfileRequest `object`
  * displayName **required** [UserProfileDisplayName](#userprofiledisplayname)
  * emailAddress **required** [Email](#email)
  * sshPublicKey [SshPublicKey](#sshpublickey)
  * userArn **required** [UserArn](#userarn)

### CreateUserProfileResult
* CreateUserProfileResult `object`
  * createdTimestamp [CreatedTimestamp](#createdtimestamp)
  * displayName [UserProfileDisplayName](#userprofiledisplayname)
  * emailAddress [Email](#email)
  * lastModifiedTimestamp [LastModifiedTimestamp](#lastmodifiedtimestamp)
  * sshPublicKey [SshPublicKey](#sshpublickey)
  * userArn **required** [UserArn](#userarn)

### CreatedTimestamp
* CreatedTimestamp `string`

### DeleteProjectRequest
* DeleteProjectRequest `object`
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * deleteStack [DeleteStack](#deletestack)
  * id **required** [ProjectId](#projectid)

### DeleteProjectResult
* DeleteProjectResult `object`
  * projectArn [ProjectArn](#projectarn)
  * stackId [StackId](#stackid)

### DeleteStack
* DeleteStack `boolean`

### DeleteUserProfileRequest
* DeleteUserProfileRequest `object`
  * userArn **required** [UserArn](#userarn)

### DeleteUserProfileResult
* DeleteUserProfileResult `object`
  * userArn **required** [UserArn](#userarn)

### DescribeProjectRequest
* DescribeProjectRequest `object`
  * id **required** [ProjectId](#projectid)

### DescribeProjectResult
* DescribeProjectResult `object`
  * arn [ProjectArn](#projectarn)
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * createdTimeStamp [CreatedTimestamp](#createdtimestamp)
  * description [ProjectDescription](#projectdescription)
  * id [ProjectId](#projectid)
  * name [ProjectName](#projectname)
  * projectTemplateId [ProjectTemplateId](#projecttemplateid)
  * stackId [StackId](#stackid)

### DescribeUserProfileRequest
* DescribeUserProfileRequest `object`
  * userArn **required** [UserArn](#userarn)

### DescribeUserProfileResult
* DescribeUserProfileResult `object`
  * createdTimestamp **required** [CreatedTimestamp](#createdtimestamp)
  * displayName [UserProfileDisplayName](#userprofiledisplayname)
  * emailAddress [Email](#email)
  * lastModifiedTimestamp **required** [LastModifiedTimestamp](#lastmodifiedtimestamp)
  * sshPublicKey [SshPublicKey](#sshpublickey)
  * userArn **required** [UserArn](#userarn)

### DisassociateTeamMemberRequest
* DisassociateTeamMemberRequest `object`
  * projectId **required** [ProjectId](#projectid)
  * userArn **required** [UserArn](#userarn)

### DisassociateTeamMemberResult
* DisassociateTeamMemberResult `object`

### Email
* Email `string`

### InvalidNextTokenException
* InvalidNextTokenException `object`: The next token is not valid.

### InvalidServiceRoleException
* InvalidServiceRoleException `object`: The service role is not valid.

### LastModifiedTimestamp
* LastModifiedTimestamp `string`

### LimitExceededException
* LimitExceededException `object`: A resource limit has been exceeded.

### ListProjectsRequest
* ListProjectsRequest `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [PaginationToken](#paginationtoken)

### ListProjectsResult
* ListProjectsResult `object`
  * nextToken [PaginationToken](#paginationtoken)
  * projects **required** [ProjectsList](#projectslist)

### ListResourcesRequest
* ListResourcesRequest `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [PaginationToken](#paginationtoken)
  * projectId **required** [ProjectId](#projectid)

### ListResourcesResult
* ListResourcesResult `object`
  * nextToken [PaginationToken](#paginationtoken)
  * resources [ResourcesResult](#resourcesresult)

### ListTagsForProjectRequest
* ListTagsForProjectRequest `object`
  * id **required** [ProjectId](#projectid)
  * maxResults [MaxResults](#maxresults)
  * nextToken [PaginationToken](#paginationtoken)

### ListTagsForProjectResult
* ListTagsForProjectResult `object`
  * nextToken [PaginationToken](#paginationtoken)
  * tags [Tags](#tags)

### ListTeamMembersRequest
* ListTeamMembersRequest `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [PaginationToken](#paginationtoken)
  * projectId **required** [ProjectId](#projectid)

### ListTeamMembersResult
* ListTeamMembersResult `object`
  * nextToken [PaginationToken](#paginationtoken)
  * teamMembers **required** [TeamMemberResult](#teammemberresult)

### ListUserProfilesRequest
* ListUserProfilesRequest `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [PaginationToken](#paginationtoken)

### ListUserProfilesResult
* ListUserProfilesResult `object`
  * nextToken [PaginationToken](#paginationtoken)
  * userProfiles **required** [UserProfilesList](#userprofileslist)

### MaxResults
* MaxResults `integer`

### PaginationToken
* PaginationToken `string`

### ProjectAlreadyExistsException
* ProjectAlreadyExistsException `object`: An AWS CodeStar project with the same ID already exists in this region for the AWS account. AWS CodeStar project IDs must be unique within a region for the AWS account.

### ProjectArn
* ProjectArn `string`

### ProjectConfigurationException
* ProjectConfigurationException `object`: Project configuration information is required but not specified.

### ProjectCreationFailedException
* ProjectCreationFailedException `object`: The project creation request was valid, but a nonspecific exception or error occurred during project creation. The project could not be created in AWS CodeStar.

### ProjectDescription
* ProjectDescription `string`

### ProjectId
* ProjectId `string`

### ProjectName
* ProjectName `string`

### ProjectNotFoundException
* ProjectNotFoundException `object`: The specified AWS CodeStar project was not found.

### ProjectSummary
* ProjectSummary `object`: Information about the metadata for a project.
  * projectArn [ProjectArn](#projectarn)
  * projectId [ProjectId](#projectid)

### ProjectTemplateId
* ProjectTemplateId `string`

### ProjectsList
* ProjectsList `array`
  * items [ProjectSummary](#projectsummary)

### RemoteAccessAllowed
* RemoteAccessAllowed `boolean`

### Resource
* Resource `object`: Information about a resource for a project.
  * id **required** [ResourceId](#resourceid)

### ResourceId
* ResourceId `string`

### ResourcesResult
* ResourcesResult `array`
  * items [Resource](#resource)

### Role
* Role `string`

### SshPublicKey
* SshPublicKey `string`

### StackId
* StackId `string`

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagProjectRequest
* TagProjectRequest `object`
  * id **required** [ProjectId](#projectid)
  * tags **required** [Tags](#tags)

### TagProjectResult
* TagProjectResult `object`
  * tags [Tags](#tags)

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items `object`
    * key [TagKey](#tagkey)
    * value [TagValue](#tagvalue)

### TeamMember
* TeamMember `object`: Information about a team member in a project.
  * projectRole **required** [Role](#role)
  * remoteAccessAllowed [RemoteAccessAllowed](#remoteaccessallowed)
  * userArn **required** [UserArn](#userarn)

### TeamMemberAlreadyAssociatedException
* TeamMemberAlreadyAssociatedException `object`: The team member is already associated with a role in this project.

### TeamMemberNotFoundException
* TeamMemberNotFoundException `object`: The specified team member was not found.

### TeamMemberResult
* TeamMemberResult `array`
  * items [TeamMember](#teammember)

### UntagProjectRequest
* UntagProjectRequest `object`
  * id **required** [ProjectId](#projectid)
  * tags **required** [TagKeys](#tagkeys)

### UntagProjectResult
* UntagProjectResult `object`

### UpdateProjectRequest
* UpdateProjectRequest `object`
  * description [ProjectDescription](#projectdescription)
  * id **required** [ProjectId](#projectid)
  * name [ProjectName](#projectname)

### UpdateProjectResult
* UpdateProjectResult `object`

### UpdateTeamMemberRequest
* UpdateTeamMemberRequest `object`
  * projectId **required** [ProjectId](#projectid)
  * projectRole [Role](#role)
  * remoteAccessAllowed [RemoteAccessAllowed](#remoteaccessallowed)
  * userArn **required** [UserArn](#userarn)

### UpdateTeamMemberResult
* UpdateTeamMemberResult `object`
  * projectRole [Role](#role)
  * remoteAccessAllowed [RemoteAccessAllowed](#remoteaccessallowed)
  * userArn [UserArn](#userarn)

### UpdateUserProfileRequest
* UpdateUserProfileRequest `object`
  * displayName [UserProfileDisplayName](#userprofiledisplayname)
  * emailAddress [Email](#email)
  * sshPublicKey [SshPublicKey](#sshpublickey)
  * userArn **required** [UserArn](#userarn)

### UpdateUserProfileResult
* UpdateUserProfileResult `object`
  * createdTimestamp [CreatedTimestamp](#createdtimestamp)
  * displayName [UserProfileDisplayName](#userprofiledisplayname)
  * emailAddress [Email](#email)
  * lastModifiedTimestamp [LastModifiedTimestamp](#lastmodifiedtimestamp)
  * sshPublicKey [SshPublicKey](#sshpublickey)
  * userArn **required** [UserArn](#userarn)

### UserArn
* UserArn `string`

### UserProfileAlreadyExistsException
* UserProfileAlreadyExistsException `object`: A user profile with that name already exists in this region for the AWS account. AWS CodeStar user profile names must be unique within a region for the AWS account. 

### UserProfileDisplayName
* UserProfileDisplayName `string`

### UserProfileNotFoundException
* UserProfileNotFoundException `object`: The user profile was not found.

### UserProfileSummary
* UserProfileSummary `object`: Information about a user's profile in AWS CodeStar.
  * displayName [UserProfileDisplayName](#userprofiledisplayname)
  * emailAddress [Email](#email)
  * sshPublicKey [SshPublicKey](#sshpublickey)
  * userArn [UserArn](#userarn)

### UserProfilesList
* UserProfilesList `array`
  * items [UserProfileSummary](#userprofilesummary)

### ValidationException
* ValidationException `object`: The specified input is either not valid, or it could not be validated.


