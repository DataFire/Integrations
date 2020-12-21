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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS CodeStar</fullname> <p>This is the API reference for AWS CodeStar. This reference provides descriptions of the operations and data types for the AWS CodeStar API along with usage examples.</p> <p>You can use the AWS CodeStar API to work with:</p> <p>Projects and their resources, by calling the following:</p> <ul> <li> <p> <code>DeleteProject</code>, which deletes a project.</p> </li> <li> <p> <code>DescribeProject</code>, which lists the attributes of a project.</p> </li> <li> <p> <code>ListProjects</code>, which lists all projects associated with your AWS account.</p> </li> <li> <p> <code>ListResources</code>, which lists the resources associated with a project.</p> </li> <li> <p> <code>ListTagsForProject</code>, which lists the tags associated with a project.</p> </li> <li> <p> <code>TagProject</code>, which adds tags to a project.</p> </li> <li> <p> <code>UntagProject</code>, which removes tags from a project.</p> </li> <li> <p> <code>UpdateProject</code>, which updates the attributes of a project.</p> </li> </ul> <p>Teams and team members, by calling the following:</p> <ul> <li> <p> <code>AssociateTeamMember</code>, which adds an IAM user to the team for a project.</p> </li> <li> <p> <code>DisassociateTeamMember</code>, which removes an IAM user from the team for a project.</p> </li> <li> <p> <code>ListTeamMembers</code>, which lists all the IAM users in the team for a project, including their roles and attributes.</p> </li> <li> <p> <code>UpdateTeamMember</code>, which updates a team member's attributes in a project.</p> </li> </ul> <p>Users, by calling the following:</p> <ul> <li> <p> <code>CreateUserProfile</code>, which creates a user profile that contains data associated with the user across all projects.</p> </li> <li> <p> <code>DeleteUserProfile</code>, which deletes all user profile information across all projects.</p> </li> <li> <p> <code>DescribeUserProfile</code>, which describes the profile of a user.</p> </li> <li> <p> <code>ListUserProfiles</code>, which lists all user profiles.</p> </li> <li> <p> <code>UpdateUserProfile</code>, which updates the profile for a user.</p> </li> </ul>

## Actions

### AssociateTeamMember



```js
amazonaws_codestar.AssociateTeamMember({
  "projectId": null,
  "userArn": null,
  "projectRole": null
}, context)
```

#### Input
* input `object`
  * clientRequestToken
  * projectId **required**
  * projectRole **required**
  * remoteAccessAllowed
  * userArn **required**

#### Output
* output [AssociateTeamMemberResult](#associateteammemberresult)

### CreateProject



```js
amazonaws_codestar.CreateProject({
  "name": null,
  "id": null
}, context)
```

#### Input
* input `object`
  * tags
  * clientRequestToken
  * description
  * id **required**
  * name **required**
  * sourceCode
    * items [Code](#code)
  * toolchain
    * roleArn
    * source **required**
      * s3 **required**
        * bucketKey
        * bucketName
    * stackParameters

#### Output
* output [CreateProjectResult](#createprojectresult)

### CreateUserProfile



```js
amazonaws_codestar.CreateUserProfile({
  "userArn": null,
  "displayName": null,
  "emailAddress": null
}, context)
```

#### Input
* input `object`
  * displayName **required**
  * emailAddress **required**
  * sshPublicKey
  * userArn **required**

#### Output
* output [CreateUserProfileResult](#createuserprofileresult)

### DeleteProject



```js
amazonaws_codestar.DeleteProject({
  "id": null
}, context)
```

#### Input
* input `object`
  * clientRequestToken
  * deleteStack
  * id **required**

#### Output
* output [DeleteProjectResult](#deleteprojectresult)

### DeleteUserProfile



```js
amazonaws_codestar.DeleteUserProfile({
  "userArn": null
}, context)
```

#### Input
* input `object`
  * userArn **required**

#### Output
* output [DeleteUserProfileResult](#deleteuserprofileresult)

### DescribeProject



```js
amazonaws_codestar.DescribeProject({
  "id": null
}, context)
```

#### Input
* input `object`
  * id **required**

#### Output
* output [DescribeProjectResult](#describeprojectresult)

### DescribeUserProfile



```js
amazonaws_codestar.DescribeUserProfile({
  "userArn": null
}, context)
```

#### Input
* input `object`
  * userArn **required**

#### Output
* output [DescribeUserProfileResult](#describeuserprofileresult)

### DisassociateTeamMember



```js
amazonaws_codestar.DisassociateTeamMember({
  "projectId": null,
  "userArn": null
}, context)
```

#### Input
* input `object`
  * projectId **required**
  * userArn **required**

#### Output
* output [DisassociateTeamMemberResult](#disassociateteammemberresult)

### ListProjects



```js
amazonaws_codestar.ListProjects({}, context)
```

#### Input
* input `object`
  * maxResults
  * nextToken

#### Output
* output [ListProjectsResult](#listprojectsresult)

### ListResources



```js
amazonaws_codestar.ListResources({
  "projectId": null
}, context)
```

#### Input
* input `object`
  * maxResults
  * nextToken
  * projectId **required**

#### Output
* output [ListResourcesResult](#listresourcesresult)

### ListTagsForProject



```js
amazonaws_codestar.ListTagsForProject({
  "id": null
}, context)
```

#### Input
* input `object`
  * id **required**
  * maxResults
  * nextToken

#### Output
* output [ListTagsForProjectResult](#listtagsforprojectresult)

### ListTeamMembers



```js
amazonaws_codestar.ListTeamMembers({
  "projectId": null
}, context)
```

#### Input
* input `object`
  * maxResults
  * nextToken
  * projectId **required**

#### Output
* output [ListTeamMembersResult](#listteammembersresult)

### ListUserProfiles



```js
amazonaws_codestar.ListUserProfiles({}, context)
```

#### Input
* input `object`
  * maxResults
  * nextToken

#### Output
* output [ListUserProfilesResult](#listuserprofilesresult)

### TagProject



```js
amazonaws_codestar.TagProject({
  "id": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
  * id **required**

#### Output
* output [TagProjectResult](#tagprojectresult)

### UntagProject



```js
amazonaws_codestar.UntagProject({
  "id": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [TagKey](#tagkey)
  * id **required**

#### Output
* output [UntagProjectResult](#untagprojectresult)

### UpdateProject



```js
amazonaws_codestar.UpdateProject({
  "id": null
}, context)
```

#### Input
* input `object`
  * description
  * id **required**
  * name

#### Output
* output [UpdateProjectResult](#updateprojectresult)

### UpdateTeamMember



```js
amazonaws_codestar.UpdateTeamMember({
  "projectId": null,
  "userArn": null
}, context)
```

#### Input
* input `object`
  * projectId **required**
  * projectRole
  * remoteAccessAllowed
  * userArn **required**

#### Output
* output [UpdateTeamMemberResult](#updateteammemberresult)

### UpdateUserProfile



```js
amazonaws_codestar.UpdateUserProfile({
  "userArn": null
}, context)
```

#### Input
* input `object`
  * displayName
  * emailAddress
  * sshPublicKey
  * userArn **required**

#### Output
* output [UpdateUserProfileResult](#updateuserprofileresult)



## Definitions

### AssociateTeamMemberRequest
* AssociateTeamMemberRequest `object`
  * clientRequestToken
  * projectId **required**
  * projectRole **required**
  * remoteAccessAllowed
  * userArn **required**

### AssociateTeamMemberResult
* AssociateTeamMemberResult `object`
  * clientRequestToken

### BucketKey
* BucketKey `string`

### BucketName
* BucketName `string`

### ClientRequestToken
* ClientRequestToken `string`

### Code
* Code `object`: Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation.
  * destination **required**
    * codeCommit
      * name **required**
    * gitHub
      * description
      * issuesEnabled **required**
      * name **required**
      * owner **required**
      * privateRepository **required**
      * token **required**
      * type **required**
  * source **required**
    * s3 **required**
      * bucketKey
      * bucketName

### CodeCommitCodeDestination
* CodeCommitCodeDestination `object`: Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.
  * name **required**

### CodeDestination
* CodeDestination `object`: The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository.
  * codeCommit
    * name **required**
  * gitHub
    * description
    * issuesEnabled **required**
    * name **required**
    * owner **required**
    * privateRepository **required**
    * token **required**
    * type **required**

### CodeSource
* CodeSource `object`: The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation.
  * s3 **required**
    * bucketKey
    * bucketName

### ConcurrentModificationException


### CreateProjectRequest
* CreateProjectRequest `object`
  * tags
  * clientRequestToken
  * description
  * id **required**
  * name **required**
  * sourceCode
    * items [Code](#code)
  * toolchain
    * roleArn
    * source **required**
      * s3 **required**
        * bucketKey
        * bucketName
    * stackParameters

### CreateProjectResult
* CreateProjectResult `object`
  * arn **required**
  * clientRequestToken
  * id **required**
  * projectTemplateId

### CreateUserProfileRequest
* CreateUserProfileRequest `object`
  * displayName **required**
  * emailAddress **required**
  * sshPublicKey
  * userArn **required**

### CreateUserProfileResult
* CreateUserProfileResult `object`
  * createdTimestamp
  * displayName
  * emailAddress
  * lastModifiedTimestamp
  * sshPublicKey
  * userArn **required**

### CreatedTimestamp
* CreatedTimestamp `string`

### DeleteProjectRequest
* DeleteProjectRequest `object`
  * clientRequestToken
  * deleteStack
  * id **required**

### DeleteProjectResult
* DeleteProjectResult `object`
  * projectArn
  * stackId

### DeleteStack
* DeleteStack `boolean`

### DeleteUserProfileRequest
* DeleteUserProfileRequest `object`
  * userArn **required**

### DeleteUserProfileResult
* DeleteUserProfileResult `object`
  * userArn **required**

### DescribeProjectRequest
* DescribeProjectRequest `object`
  * id **required**

### DescribeProjectResult
* DescribeProjectResult `object`
  * arn
  * clientRequestToken
  * createdTimeStamp
  * description
  * id
  * name
  * projectTemplateId
  * stackId
  * status
    * reason
    * state **required**

### DescribeUserProfileRequest
* DescribeUserProfileRequest `object`
  * userArn **required**

### DescribeUserProfileResult
* DescribeUserProfileResult `object`
  * createdTimestamp **required**
  * displayName
  * emailAddress
  * lastModifiedTimestamp **required**
  * sshPublicKey
  * userArn **required**

### DisassociateTeamMemberRequest
* DisassociateTeamMemberRequest `object`
  * projectId **required**
  * userArn **required**

### DisassociateTeamMemberResult
* DisassociateTeamMemberResult `object`

### Email
* Email `string`

### GitHubCodeDestination
* GitHubCodeDestination `object`: Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.
  * description
  * issuesEnabled **required**
  * name **required**
  * owner **required**
  * privateRepository **required**
  * token **required**
  * type **required**

### GitHubPersonalToken
* GitHubPersonalToken `string`

### InvalidNextTokenException


### InvalidServiceRoleException


### LastModifiedTimestamp
* LastModifiedTimestamp `string`

### LimitExceededException


### ListProjectsRequest
* ListProjectsRequest `object`
  * maxResults
  * nextToken

### ListProjectsResult
* ListProjectsResult `object`
  * nextToken
  * projects **required**
    * items [ProjectSummary](#projectsummary)

### ListResourcesRequest
* ListResourcesRequest `object`
  * maxResults
  * nextToken
  * projectId **required**

### ListResourcesResult
* ListResourcesResult `object`
  * nextToken
  * resources
    * items [Resource](#resource)

### ListTagsForProjectRequest
* ListTagsForProjectRequest `object`
  * id **required**
  * maxResults
  * nextToken

### ListTagsForProjectResult
* ListTagsForProjectResult `object`
  * tags
  * nextToken

### ListTeamMembersRequest
* ListTeamMembersRequest `object`
  * maxResults
  * nextToken
  * projectId **required**

### ListTeamMembersResult
* ListTeamMembersResult `object`
  * nextToken
  * teamMembers **required**
    * items [TeamMember](#teammember)

### ListUserProfilesRequest
* ListUserProfilesRequest `object`
  * maxResults
  * nextToken

### ListUserProfilesResult
* ListUserProfilesResult `object`
  * nextToken
  * userProfiles **required**
    * items [UserProfileSummary](#userprofilesummary)

### MaxResults
* MaxResults `integer`

### PaginationToken
* PaginationToken `string`

### ProjectAlreadyExistsException


### ProjectArn
* ProjectArn `string`

### ProjectConfigurationException


### ProjectCreationFailedException


### ProjectDescription
* ProjectDescription `string`

### ProjectId
* ProjectId `string`

### ProjectName
* ProjectName `string`

### ProjectNotFoundException


### ProjectStatus
* ProjectStatus `object`: An indication of whether a project creation or deletion is failed or successful.
  * reason
  * state **required**

### ProjectSummary
* ProjectSummary `object`: Information about the metadata for a project.
  * projectArn
  * projectId

### ProjectTemplateId
* ProjectTemplateId `string`

### ProjectsList
* ProjectsList `array`
  * items [ProjectSummary](#projectsummary)

### Reason
* Reason `string`

### RemoteAccessAllowed
* RemoteAccessAllowed `boolean`

### RepositoryDescription
* RepositoryDescription `string`

### RepositoryEnableIssues
* RepositoryEnableIssues `boolean`

### RepositoryIsPrivate
* RepositoryIsPrivate `boolean`

### RepositoryName
* RepositoryName `string`

### RepositoryOwner
* RepositoryOwner `string`

### RepositoryType
* RepositoryType `string`

### Resource
* Resource `object`: Information about a resource for a project.
  * id **required**

### ResourceId
* ResourceId `string`

### ResourcesResult
* ResourcesResult `array`
  * items [Resource](#resource)

### Role
* Role `string`

### RoleArn
* RoleArn `string`

### S3Location
* S3Location `object`: The Amazon S3 location where the source code files provided with the project request are stored.
  * bucketKey
  * bucketName

### SourceCode
* SourceCode `array`
  * items [Code](#code)

### SshPublicKey
* SshPublicKey `string`

### StackId
* StackId `string`

### State
* State `string`

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagProjectRequest
* TagProjectRequest `object`
  * tags **required**
  * id **required**

### TagProjectResult
* TagProjectResult `object`
  * tags

### TagValue
* TagValue `string`

### Tags
* Tags `object`

### TeamMember
* TeamMember `object`: Information about a team member in a project.
  * projectRole **required**
  * remoteAccessAllowed
  * userArn **required**

### TeamMemberAlreadyAssociatedException


### TeamMemberNotFoundException


### TeamMemberResult
* TeamMemberResult `array`
  * items [TeamMember](#teammember)

### TemplateParameterKey
* TemplateParameterKey `string`

### TemplateParameterMap
* TemplateParameterMap `object`

### TemplateParameterValue
* TemplateParameterValue `string`

### Toolchain
* Toolchain `object`: The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation.
  * roleArn
  * source **required**
    * s3 **required**
      * bucketKey
      * bucketName
  * stackParameters

### ToolchainSource
* ToolchainSource `object`: The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation.
  * s3 **required**
    * bucketKey
    * bucketName

### UntagProjectRequest
* UntagProjectRequest `object`
  * tags **required**
    * items [TagKey](#tagkey)
  * id **required**

### UntagProjectResult
* UntagProjectResult `object`

### UpdateProjectRequest
* UpdateProjectRequest `object`
  * description
  * id **required**
  * name

### UpdateProjectResult
* UpdateProjectResult `object`

### UpdateTeamMemberRequest
* UpdateTeamMemberRequest `object`
  * projectId **required**
  * projectRole
  * remoteAccessAllowed
  * userArn **required**

### UpdateTeamMemberResult
* UpdateTeamMemberResult `object`
  * projectRole
  * remoteAccessAllowed
  * userArn

### UpdateUserProfileRequest
* UpdateUserProfileRequest `object`
  * displayName
  * emailAddress
  * sshPublicKey
  * userArn **required**

### UpdateUserProfileResult
* UpdateUserProfileResult `object`
  * createdTimestamp
  * displayName
  * emailAddress
  * lastModifiedTimestamp
  * sshPublicKey
  * userArn **required**

### UserArn
* UserArn `string`

### UserProfileAlreadyExistsException


### UserProfileDisplayName
* UserProfileDisplayName `string`

### UserProfileNotFoundException


### UserProfileSummary
* UserProfileSummary `object`: Information about a user's profile in AWS CodeStar.
  * displayName
  * emailAddress
  * sshPublicKey
  * userArn

### UserProfilesList
* UserProfilesList `array`
  * items [UserProfileSummary](#userprofilesummary)

### ValidationException



