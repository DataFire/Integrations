# @datafire/gitea

Client library for Gitea API.

## Installation and Usage
```bash
npm install --save @datafire/gitea
```
```js
let gitea = require('@datafire/gitea').create({
  AccessToken: "",
  AuthorizationHeaderToken: "",
  username: "",
  password: "",
  SudoHeader: "",
  SudoParam: "",
  Token: ""
});

gitea.userSearch({}).then(data => {
  console.log(data);
});
```

## Description

This documentation describes the Gitea API.

## Actions

### adminCreateUser
Create a user


```js
gitea.adminCreateUser({}, context)
```

#### Input
* input `object`
  * body [CreateUserOption](#createuseroption)

#### Output
* output [User](#user)

### adminDeleteUser
Delete a user


```js
gitea.adminDeleteUser({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user to delete

#### Output
*Output schema unknown*

### adminEditUser
Edit an existing user


```js
gitea.adminEditUser({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user to edit
  * body [EditUserOption](#edituseroption)

#### Output
* output [User](#user)

### adminCreatePublicKey
Add a public key on behalf of a user


```js
gitea.adminCreatePublicKey({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of the user
  * key [CreateKeyOption](#createkeyoption)

#### Output
* output [PublicKey](#publickey)

### adminDeleteUserPublicKey
Delete a user's public key


```js
gitea.adminDeleteUserPublicKey({
  "username": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user
  * id **required** `integer`: id of the key to delete

#### Output
*Output schema unknown*

### adminCreateOrg
Create an organization


```js
gitea.adminCreateOrg({
  "username": "",
  "organization": {
    "username": ""
  }
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of the user that will own the created organization
  * organization **required** [CreateOrgOption](#createorgoption)

#### Output
* output [Organization](#organization)

### adminCreateRepo
Create a repository on behalf a user


```js
gitea.adminCreateRepo({
  "username": "",
  "repository": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of the user. This user will own the created repository
  * repository **required** [CreateRepoOption](#createrepooption)

#### Output
* output [Repository](#repository)

### renderMarkdown
Render a markdown document as HTML


```js
gitea.renderMarkdown({}, context)
```

#### Input
* input `object`
  * body [MarkdownOption](#markdownoption)

#### Output
*Output schema unknown*

### renderMarkdownRaw
Render raw markdown as HTML


```js
gitea.renderMarkdownRaw({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`

#### Output
*Output schema unknown*

### createOrgRepo
Create a repository in an organization


```js
gitea.createOrgRepo({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of organization
  * body [CreateRepoOption](#createrepooption)

#### Output
* output [Repository](#repository)

### orgGet
Get an organization


```js
gitea.orgGet({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization to get

#### Output
* output [Organization](#organization)

### orgEdit
Edit an organization


```js
gitea.orgEdit({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization to edit
  * body [EditOrgOption](#editorgoption)

#### Output
* output [Organization](#organization)

### orgListHooks
List an organization's webhooks


```js
gitea.orgListHooks({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization

#### Output
* output `array`
  * items [Branch](#branch)

### orgCreateHook
Create a hook


```js
gitea.orgCreateHook({
  "org": "",
  "body": {
    "type": "",
    "config": {}
  }
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * body **required** [CreateHookOption](#createhookoption)

#### Output
* output `array`
  * items [Branch](#branch)

### orgDeleteHook
Delete a hook


```js
gitea.orgDeleteHook({
  "org": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * id **required** `integer`: id of the hook to delete

#### Output
*Output schema unknown*

### orgGetHook
Get a hook


```js
gitea.orgGetHook({
  "org": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * id **required** `integer`: id of the hook to get

#### Output
* output `array`
  * items [Branch](#branch)

### orgEditHook
Update a hook


```js
gitea.orgEditHook({
  "org": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * id **required** `integer`: id of the hook to update
  * body [EditHookOption](#edithookoption)

#### Output
* output `array`
  * items [Branch](#branch)

### orgListMembers
List an organization's members


```js
gitea.orgListMembers({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization

#### Output
* output `array`
  * items [User](#user)

### orgDeleteMember
Remove a member from an organization


```js
gitea.orgDeleteMember({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * username **required** `string`: username of the user

#### Output
*Output schema unknown*

### orgIsMember
Check if a user is a member of an organization


```js
gitea.orgIsMember({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * username **required** `string`: username of the user

#### Output
*Output schema unknown*

### orgListPublicMembers
List an organization's public members


```js
gitea.orgListPublicMembers({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization

#### Output
* output `array`
  * items [User](#user)

### orgConcealMember
Conceal a user's membership


```js
gitea.orgConcealMember({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * username **required** `string`: username of the user

#### Output
*Output schema unknown*

### orgIsPublicMember
Check if a user is a public member of an organization


```js
gitea.orgIsPublicMember({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * username **required** `string`: username of the user

#### Output
*Output schema unknown*

### orgPublicizeMember
Publicize a user's membership


```js
gitea.orgPublicizeMember({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * username **required** `string`: username of the user

#### Output
*Output schema unknown*

### orgListRepos
List an organization's repos


```js
gitea.orgListRepos({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization

#### Output
* output `array`
  * items [Repository](#repository)

### orgListTeams
List an organization's teams


```js
gitea.orgListTeams({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization

#### Output
* output `array`
  * items [Team](#team)

### orgCreateTeam
Create a team


```js
gitea.orgCreateTeam({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * body [CreateTeamOption](#createteamoption)

#### Output
* output [Team](#team)

### repoMigrate
Migrate a remote git repository


```js
gitea.repoMigrate({}, context)
```

#### Input
* input `object`
  * body [MigrateRepoForm](#migraterepoform)

#### Output
* output [Repository](#repository)

### repoSearch
Search for repositories


```js
gitea.repoSearch({}, context)
```

#### Input
* input `object`
  * q `string`: keyword
  * uid `integer`: search only for repos that the user with the given id owns or contributes to
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results, maximum page size is 50
  * mode `string`: type of repository to search for. Supported values are "fork", "source", "mirror" and "collaborative"
  * exclusive `boolean`: if `uid` is given, search only for repos that the user owns
  * sort `string`: sort repos by attribute. Supported values are "alpha", "created", "updated", "size", and "id". Default is "alpha"
  * order `string`: sort order, either "asc" (ascending) or "desc" (descending). Default is "asc", ignored if "sort" is not specified.

#### Output
* output [SearchResults](#searchresults)

### repoDelete
Delete a repository


```js
gitea.repoDelete({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo to delete
  * repo **required** `string`: name of the repo to delete

#### Output
*Output schema unknown*

### repoGet
Get a repository


```js
gitea.repoGet({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output [Repository](#repository)

### repoGetArchive
Get an archive of a repository


```js
gitea.repoGetArchive({
  "owner": "",
  "repo": "",
  "archive": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * archive **required** `string`: archive to download, consisting of a git reference and archive

#### Output
*Output schema unknown*

### repoListBranches
List a repository's branches


```js
gitea.repoListBranches({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output `array`
  * items [Branch](#branch)

### repoGetBranch
Retrieve a specific branch from a repository


```js
gitea.repoGetBranch({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * branch **required** `string`: branch to get

#### Output
* output [Branch](#branch)

### repoListCollaborators
List a repository's collaborators


```js
gitea.repoListCollaborators({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output `array`
  * items [User](#user)

### repoDeleteCollaborator
Delete a collaborator from a repository


```js
gitea.repoDeleteCollaborator({
  "owner": "",
  "repo": "",
  "collaborator": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * collaborator **required** `string`: username of the collaborator to delete

#### Output
*Output schema unknown*

### repoCheckCollaborator
Check if a user is a collaborator of a repository


```js
gitea.repoCheckCollaborator({
  "owner": "",
  "repo": "",
  "collaborator": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * collaborator **required** `string`: username of the collaborator

#### Output
*Output schema unknown*

### repoAddCollaborator
Add a collaborator to a repository


```js
gitea.repoAddCollaborator({
  "owner": "",
  "repo": "",
  "collaborator": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * collaborator **required** `string`: username of the collaborator to add
  * body [AddCollaboratorOption](#addcollaboratoroption)

#### Output
*Output schema unknown*

### repoGetCombinedStatusByRef
Get a commit's combined status, by branch/tag/commit reference


```js
gitea.repoGetCombinedStatusByRef({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * ref **required** `string`: name of branch/tag/commit

#### Output
* output [Status](#status)

### repoGetEditorConfig
Get the EditorConfig definitions of a file in a repository


```js
gitea.repoGetEditorConfig({
  "owner": "",
  "repo": "",
  "filepath": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * filepath **required** `string`: filepath of file to get

#### Output
*Output schema unknown*

### listForks
List a repository's forks


```js
gitea.listForks({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output `array`
  * items [Repository](#repository)

### createFork
Fork a repository


```js
gitea.createFork({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo to fork
  * repo **required** `string`: name of the repo to fork
  * body [CreateForkOption](#createforkoption)

#### Output
* output [Repository](#repository)

### repoListHooks
List the hooks in a repository


```js
gitea.repoListHooks({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output `array`
  * items [Branch](#branch)

### repoCreateHook
Create a hook


```js
gitea.repoCreateHook({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * body [CreateHookOption](#createhookoption)

#### Output
* output `array`
  * items [Branch](#branch)

### repoDeleteHook
Delete a hook in a repository


```js
gitea.repoDeleteHook({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the hook to delete

#### Output
*Output schema unknown*

### repoGetHook
Get a hook


```js
gitea.repoGetHook({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the hook to get

#### Output
* output `array`
  * items [Branch](#branch)

### repoEditHook
Edit a hook in a repository


```js
gitea.repoEditHook({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: index of the hook
  * body [EditHookOption](#edithookoption)

#### Output
* output `array`
  * items [Branch](#branch)

### repoTestHook
Test a push webhook


```js
gitea.repoTestHook({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the hook to test

#### Output
*Output schema unknown*

### issueListIssues
List a repository's issues


```js
gitea.issueListIssues({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * state `string`: whether issue is open or closed
  * page `integer`: page number of requested issues
  * q `string`: search string

#### Output
* output `array`
  * items [Issue](#issue)

### issueCreateIssue
Create an issue


```js
gitea.issueCreateIssue({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * body [CreateIssueOption](#createissueoption)

#### Output
* output [Issue](#issue)

### issueGetRepoComments
List all comments in a repository


```js
gitea.issueGetRepoComments({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * since `string`: if provided, only comments updated since the provided time are returned.

#### Output
* output `array`
  * items [Comment](#comment)

### issueDeleteComment
Delete a comment


```js
gitea.issueDeleteComment({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of comment to delete

#### Output
*Output schema unknown*

### issueEditComment
Edit a comment


```js
gitea.issueEditComment({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the comment to edit
  * body [EditIssueCommentOption](#editissuecommentoption)

#### Output
* output [Comment](#comment)

### issueTrackedTimes
List an issue's tracked times


```js
gitea.issueTrackedTimes({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: index of the issue

#### Output
* output `array`
  * items [TrackedTime](#trackedtime)

### issueAddTime
Add a tracked time to a issue


```js
gitea.issueAddTime({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: index of the issue to add tracked time to
  * body [AddTimeOption](#addtimeoption)

#### Output
* output [TrackedTime](#trackedtime)

### issueGetIssue
Get an issue


```js
gitea.issueGetIssue({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue to get

#### Output
* output [Issue](#issue)

### issueEditIssue
Edit an issue


```js
gitea.issueEditIssue({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue to edit
  * body [EditIssueOption](#editissueoption)

#### Output
* output [Issue](#issue)

### issueGetComments
List all comments on an issue


```js
gitea.issueGetComments({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue
  * since `string`: if provided, only comments updated since the specified time are returned.

#### Output
* output `array`
  * items [Comment](#comment)

### issueCreateComment
Add a comment to an issue


```js
gitea.issueCreateComment({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue
  * body [CreateIssueCommentOption](#createissuecommentoption)

#### Output
* output [Comment](#comment)

### issueDeleteCommentDeprecated
Delete a comment


```js
gitea.issueDeleteCommentDeprecated({
  "owner": "",
  "repo": "",
  "index": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: this parameter is ignored
  * id **required** `integer`: id of comment to delete

#### Output
*Output schema unknown*

### issueEditCommentDeprecated
Edit a comment


```js
gitea.issueEditCommentDeprecated({
  "owner": "",
  "repo": "",
  "index": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: this parameter is ignored
  * id **required** `integer`: id of the comment to edit
  * body [EditIssueCommentOption](#editissuecommentoption)

#### Output
* output [Comment](#comment)

### issueEditIssueDeadline
Set an issue deadline. If set to null, the deadline is deleted.


```js
gitea.issueEditIssueDeadline({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue to create or update a deadline on
  * body [EditDeadlineOption](#editdeadlineoption)

#### Output
* output [IssueDeadline](#issuedeadline)

### issueClearLabels
Remove all labels from an issue


```js
gitea.issueClearLabels({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue

#### Output
*Output schema unknown*

### issueGetLabels
Get an issue's labels


```js
gitea.issueGetLabels({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue

#### Output
* output `array`
  * items [Label](#label)

### issueAddLabel
Add a label to an issue


```js
gitea.issueAddLabel({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue
  * body [IssueLabelsOption](#issuelabelsoption)

#### Output
* output `array`
  * items [Label](#label)

### issueReplaceLabels
Replace an issue's labels


```js
gitea.issueReplaceLabels({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue
  * body [IssueLabelsOption](#issuelabelsoption)

#### Output
* output `array`
  * items [Label](#label)

### issueRemoveLabel
Remove a label from an issue


```js
gitea.issueRemoveLabel({
  "owner": "",
  "repo": "",
  "index": 0,
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue
  * id **required** `integer`: id of the label to remove

#### Output
*Output schema unknown*

### repoListKeys
List a repository's keys


```js
gitea.repoListKeys({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output `array`
  * items [DeployKey](#deploykey)

### repoCreateKey
Add a key to a repository


```js
gitea.repoCreateKey({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * body [CreateKeyOption](#createkeyoption)

#### Output
* output [DeployKey](#deploykey)

### repoDeleteKey
Delete a key from a repository


```js
gitea.repoDeleteKey({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the key to delete

#### Output
*Output schema unknown*

### repoGetKey
Get a repository's key by id


```js
gitea.repoGetKey({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the key to get

#### Output
* output [DeployKey](#deploykey)

### issueListLabels
Get all of a repository's labels


```js
gitea.issueListLabels({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output `array`
  * items [Label](#label)

### issueCreateLabel
Create a label


```js
gitea.issueCreateLabel({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * body [CreateLabelOption](#createlabeloption)

#### Output
* output [Label](#label)

### issueDeleteLabel
Delete a label


```js
gitea.issueDeleteLabel({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the label to delete

#### Output
*Output schema unknown*

### issueGetLabel
Get a single label


```js
gitea.issueGetLabel({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the label to get

#### Output
* output [Label](#label)

### issueEditLabel
Update a label


```js
gitea.issueEditLabel({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the label to edit
  * body [EditLabelOption](#editlabeloption)

#### Output
* output [Label](#label)

### issueGetMilestonesList
Get all of a repository's milestones


```js
gitea.issueGetMilestonesList({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output `array`
  * items [Milestone](#milestone)

### issueCreateMilestone
Create a milestone


```js
gitea.issueCreateMilestone({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * body [CreateMilestoneOption](#createmilestoneoption)

#### Output
* output [Milestone](#milestone)

### issueDeleteMilestone
Delete a milestone


```js
gitea.issueDeleteMilestone({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the milestone to delete

#### Output
*Output schema unknown*

### issueGetMilestone
Get a milestone


```js
gitea.issueGetMilestone({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the milestone

#### Output
* output [Milestone](#milestone)

### issueEditMilestone
Update a milestone


```js
gitea.issueEditMilestone({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the milestone
  * body [EditMilestoneOption](#editmilestoneoption)

#### Output
* output [Milestone](#milestone)

### repoMirrorSync
Sync a mirrored repository


```js
gitea.repoMirrorSync({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo to sync
  * repo **required** `string`: name of the repo to sync

#### Output
*Output schema unknown*

### repoListPullRequests
List a repo's pull requests


```js
gitea.repoListPullRequests({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * page `integer`: Page number
  * state `string` (values: closed, open, all): State of pull request: open or closed (optional)
  * sort `string` (values: oldest, recentupdate, leastupdate, mostcomment, leastcomment, priority): Type of sort
  * milestone `integer`: ID of the milestone
  * labels `array`: Label IDs

#### Output
* output `array`
  * items [PullRequest](#pullrequest)

### repoCreatePullRequest
Create a pull request


```js
gitea.repoCreatePullRequest({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * body [CreatePullRequestOption](#createpullrequestoption)

#### Output
* output [PullRequest](#pullrequest)

### repoGetPullRequest
Get a pull request


```js
gitea.repoGetPullRequest({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the pull request to get

#### Output
* output [PullRequest](#pullrequest)

### repoEditPullRequest
Update a pull request


```js
gitea.repoEditPullRequest({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the pull request to edit
  * body [EditPullRequestOption](#editpullrequestoption)

#### Output
* output [PullRequest](#pullrequest)

### repoPullRequestIsMerged
Check if a pull request has been merged


```js
gitea.repoPullRequestIsMerged({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the pull request

#### Output
*Output schema unknown*

### repoMergePullRequest
Merge a pull request


```js
gitea.repoMergePullRequest({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the pull request to merge

#### Output
*Output schema unknown*

### repoGetRawFile
Get a file from a repository


```js
gitea.repoGetRawFile({
  "owner": "",
  "repo": "",
  "filepath": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * filepath **required** `string`: filepath of the file to get

#### Output
*Output schema unknown*

### repoListReleases
List a repo's releases


```js
gitea.repoListReleases({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output `array`
  * items [Release](#release)

### repoCreateRelease
Create a release


```js
gitea.repoCreateRelease({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * body [CreateReleaseOption](#createreleaseoption)

#### Output
* output [Release](#release)

### repoDeleteRelease
Delete a release


```js
gitea.repoDeleteRelease({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the release to delete

#### Output
*Output schema unknown*

### repoGetRelease
Get a release


```js
gitea.repoGetRelease({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the release to get

#### Output
* output [Release](#release)

### repoEditRelease
Update a release


```js
gitea.repoEditRelease({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the release to edit
  * body [EditReleaseOption](#editreleaseoption)

#### Output
* output [Release](#release)

### repoListReleaseAttachments
List release's attachments


```js
gitea.repoListReleaseAttachments({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the release

#### Output
* output `array`
  * items [Attachment](#attachment)

### repoCreateReleaseAttachment
Create a release attachment


```js
gitea.repoCreateReleaseAttachment({
  "owner": "",
  "repo": "",
  "id": 0,
  "attachment": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the release
  * name `string`: name of the attachment
  * attachment **required** `string`, `object`: attachment to upload
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [Attachment](#attachment)

### repoDeleteReleaseAttachment
Delete a release attachment


```js
gitea.repoDeleteReleaseAttachment({
  "owner": "",
  "repo": "",
  "id": 0,
  "attachment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the release
  * attachment_id **required** `integer`: id of the attachment to delete

#### Output
*Output schema unknown*

### repoGetReleaseAttachment
Get a release attachment


```js
gitea.repoGetReleaseAttachment({
  "owner": "",
  "repo": "",
  "id": 0,
  "attachment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the release
  * attachment_id **required** `integer`: id of the attachment to get

#### Output
* output [Attachment](#attachment)

### repoEditReleaseAttachment
Edit a release attachment


```js
gitea.repoEditReleaseAttachment({
  "owner": "",
  "repo": "",
  "id": 0,
  "attachment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the release
  * attachment_id **required** `integer`: id of the attachment to edit
  * body [EditAttachmentOptions](#editattachmentoptions)

#### Output
* output [Attachment](#attachment)

### repoListStargazers
List a repo's stargazers


```js
gitea.repoListStargazers({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output `array`
  * items [User](#user)

### repoListStatuses
Get a commit's statuses


```js
gitea.repoListStatuses({
  "owner": "",
  "repo": "",
  "sha": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * sha **required** `string`: sha of the commit

#### Output
* output `array`
  * items [Status](#status)

### repoCreateStatus
Create a commit status


```js
gitea.repoCreateStatus({
  "owner": "",
  "repo": "",
  "sha": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * sha **required** `string`: sha of the commit
  * body [CreateStatusOption](#createstatusoption)

#### Output
* output `array`
  * items [Status](#status)

### repoListSubscribers
List a repo's watchers


```js
gitea.repoListSubscribers({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output `array`
  * items [User](#user)

### userCurrentDeleteSubscription
Unwatch a repo


```js
gitea.userCurrentDeleteSubscription({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
*Output schema unknown*

### userCurrentCheckSubscription
Check if the current user is watching a repo


```js
gitea.userCurrentCheckSubscription({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output [WatchInfo](#watchinfo)

### userCurrentPutSubscription
Watch a repo


```js
gitea.userCurrentPutSubscription({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output [WatchInfo](#watchinfo)

### repoTrackedTimes
List a repo's tracked times


```js
gitea.repoTrackedTimes({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output `array`
  * items [TrackedTime](#trackedtime)

### userTrackedTimes
List a user's tracked times in a repo


```js
gitea.userTrackedTimes({
  "owner": "",
  "repo": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * user **required** `string`: username of user

#### Output
* output `array`
  * items [TrackedTime](#trackedtime)

### repoGetByID
Get a repository by id


```js
gitea.repoGetByID({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the repo to get

#### Output
* output [Repository](#repository)

### orgDeleteTeam
Delete a team


```js
gitea.orgDeleteTeam({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the team to delete

#### Output
*Output schema unknown*

### orgGetTeam
Get a team


```js
gitea.orgGetTeam({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the team to get

#### Output
* output [Team](#team)

### orgEditTeam
Edit a team


```js
gitea.orgEditTeam({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the team to edit
  * body [EditTeamOption](#editteamoption)

#### Output
* output [Team](#team)

### orgListTeamMembers
List a team's members


```js
gitea.orgListTeamMembers({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the team

#### Output
* output `array`
  * items [User](#user)

### orgRemoveTeamMember
Remove a team member


```js
gitea.orgRemoveTeamMember({
  "id": 0,
  "username": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the team
  * username **required** `string`: username of the user to remove

#### Output
*Output schema unknown*

### orgAddTeamMember
Add a team member


```js
gitea.orgAddTeamMember({
  "id": 0,
  "username": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the team
  * username **required** `string`: username of the user to add

#### Output
*Output schema unknown*

### orgListTeamRepos
List a team's repos


```js
gitea.orgListTeamRepos({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the team

#### Output
* output `array`
  * items [Repository](#repository)

### orgRemoveTeamRepository
This does not delete the repository, it only removes the repository from the team.


```js
gitea.orgRemoveTeamRepository({
  "id": 0,
  "org": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the team
  * org **required** `string`: organization that owns the repo to remove
  * repo **required** `string`: name of the repo to remove

#### Output
*Output schema unknown*

### orgAddTeamRepository
Add a repository to a team


```js
gitea.orgAddTeamRepository({
  "id": 0,
  "org": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the team
  * org **required** `string`: organization that owns the repo to add
  * repo **required** `string`: name of the repo to add

#### Output
*Output schema unknown*

### topicSearch
search topics via keyword


```js
gitea.topicSearch({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: keywords to search

#### Output
* output [Repository](#repository)

### userGetCurrent
Get the authenticated user


```js
gitea.userGetCurrent(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### userDeleteEmail
Delete email addresses


```js
gitea.userDeleteEmail({}, context)
```

#### Input
* input `object`
  * body [DeleteEmailOption](#deleteemailoption)

#### Output
*Output schema unknown*

### userListEmails
List the authenticated user's email addresses


```js
gitea.userListEmails(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Email](#email)

### userAddEmail
Add email addresses


```js
gitea.userAddEmail({}, context)
```

#### Input
* input `object`
  * body [CreateEmailOption](#createemailoption)

#### Output
* output `array`
  * items [Email](#email)

### userCurrentListFollowers
List the authenticated user's followers


```js
gitea.userCurrentListFollowers(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [User](#user)

### userCurrentListFollowing
List the users that the authenticated user is following


```js
gitea.userCurrentListFollowing(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [User](#user)

### userCurrentDeleteFollow
Unfollow a user


```js
gitea.userCurrentDeleteFollow({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user to unfollow

#### Output
*Output schema unknown*

### userCurrentCheckFollowing
Check whether a user is followed by the authenticated user


```js
gitea.userCurrentCheckFollowing({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of followed user

#### Output
*Output schema unknown*

### userCurrentPutFollow
Follow a user


```js
gitea.userCurrentPutFollow({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user to follow

#### Output
*Output schema unknown*

### userCurrentListGPGKeys
List the authenticated user's GPG keys


```js
gitea.userCurrentListGPGKeys(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [GPGKey](#gpgkey)

### userCurrentPostGPGKey
Create a GPG key


```js
gitea.userCurrentPostGPGKey({}, context)
```

#### Input
* input `object`
  * Form [CreateGPGKeyOption](#creategpgkeyoption)

#### Output
* output [GPGKey](#gpgkey)

### userCurrentDeleteGPGKey
Remove a GPG key


```js
gitea.userCurrentDeleteGPGKey({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of key to delete

#### Output
*Output schema unknown*

### userCurrentGetGPGKey
Get a GPG key


```js
gitea.userCurrentGetGPGKey({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of key to get

#### Output
* output [GPGKey](#gpgkey)

### userCurrentListKeys
List the authenticated user's public keys


```js
gitea.userCurrentListKeys(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [PublicKey](#publickey)

### userCurrentPostKey
Create a public key


```js
gitea.userCurrentPostKey({}, context)
```

#### Input
* input `object`
  * body [CreateKeyOption](#createkeyoption)

#### Output
* output [PublicKey](#publickey)

### userCurrentDeleteKey
Delete a public key


```js
gitea.userCurrentDeleteKey({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of key to delete

#### Output
*Output schema unknown*

### userCurrentGetKey
Get a public key


```js
gitea.userCurrentGetKey({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of key to get

#### Output
* output [PublicKey](#publickey)

### orgListCurrentUserOrgs
List the current user's organizations


```js
gitea.orgListCurrentUserOrgs(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Organization](#organization)

### userCurrentListRepos
List the repos that the authenticated user owns or has access to


```js
gitea.userCurrentListRepos(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Repository](#repository)

### createCurrentUserRepo
Create a repository


```js
gitea.createCurrentUserRepo({}, context)
```

#### Input
* input `object`
  * body [CreateRepoOption](#createrepooption)

#### Output
* output [Repository](#repository)

### userCurrentListStarred
The repos that the authenticated user has starred


```js
gitea.userCurrentListStarred(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Repository](#repository)

### userCurrentDeleteStar
Unstar the given repo


```js
gitea.userCurrentDeleteStar({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo to unstar
  * repo **required** `string`: name of the repo to unstar

#### Output
*Output schema unknown*

### userCurrentCheckStarring
Whether the authenticated is starring the repo


```js
gitea.userCurrentCheckStarring({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
*Output schema unknown*

### userCurrentPutStar
Star the given repo


```js
gitea.userCurrentPutStar({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo to star
  * repo **required** `string`: name of the repo to star

#### Output
*Output schema unknown*

### userCurrentListSubscriptions
List repositories watched by the authenticated user


```js
gitea.userCurrentListSubscriptions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Repository](#repository)

### userCurrentTrackedTimes
List the current user's tracked times


```js
gitea.userCurrentTrackedTimes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [TrackedTime](#trackedtime)

### orgListUserOrgs
List a user's organizations


```js
gitea.orgListUserOrgs({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user

#### Output
* output `array`
  * items [Organization](#organization)

### userSearch
Search for users


```js
gitea.userSearch({}, context)
```

#### Input
* input `object`
  * q `string`: keyword
  * uid `integer`: ID of the user to search for
  * limit `integer`: maximum number of users to return

#### Output
* output `object`
  * data `array`
    * items [User](#user)
  * ok `boolean`

### userCheckFollowing
Check if one user is following another user


```js
gitea.userCheckFollowing({
  "follower": "",
  "followee": ""
}, context)
```

#### Input
* input `object`
  * follower **required** `string`: username of following user
  * followee **required** `string`: username of followed user

#### Output
*Output schema unknown*

### userGet
Get a user


```js
gitea.userGet({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user to get

#### Output
* output [User](#user)

### userListFollowers
List the given user's followers


```js
gitea.userListFollowers({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user

#### Output
* output `array`
  * items [User](#user)

### userListFollowing
List the users that the given user is following


```js
gitea.userListFollowing({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user

#### Output
* output `array`
  * items [User](#user)

### userListGPGKeys
List the given user's GPG keys


```js
gitea.userListGPGKeys({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user

#### Output
* output `array`
  * items [GPGKey](#gpgkey)

### userListKeys
List the given user's public keys


```js
gitea.userListKeys({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user

#### Output
* output `array`
  * items [PublicKey](#publickey)

### userListRepos
List the repos owned by the given user


```js
gitea.userListRepos({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user

#### Output
* output `array`
  * items [Repository](#repository)

### userListStarred
The repos that the given user has starred


```js
gitea.userListStarred({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user

#### Output
* output `array`
  * items [Repository](#repository)

### userListSubscriptions
List the repositories watched by a user


```js
gitea.userListSubscriptions({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of the user

#### Output
* output `array`
  * items [Repository](#repository)

### userGetTokens
List the authenticated user's access tokens


```js
gitea.userGetTokens({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user

#### Output
*Output schema unknown*

### userCreateToken
Create an access token


```js
gitea.userCreateToken({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user
  * accessToken `object`
    * name **required** `string`

#### Output
*Output schema unknown*

### userDeleteAccessToken
delete an access token


```js
gitea.userDeleteAccessToken({
  "username": "",
  "token": 0
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user
  * token **required** `integer`: token to be deleted

#### Output
*Output schema unknown*

### getVersion
Returns the version of the Gitea application


```js
gitea.getVersion(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ServerVersion](#serverversion)



## Definitions

### AddCollaboratorOption
* AddCollaboratorOption `object`: AddCollaboratorOption options when adding a user as a collaborator of a repository
  * permission `string`

### AddTimeOption
* AddTimeOption `object`: AddTimeOption options for adding time to an issue
  * time **required** `integer`: time in seconds

### Attachment
* Attachment `object`: Attachment a generic attachment
  * browser_download_url `string`
  * created_at `string`
  * download_count `integer`
  * id `integer`
  * name `string`
  * size `integer`
  * uuid `string`

### Branch
* Branch `object`: Branch represents a repository branch
  * commit [PayloadCommit](#payloadcommit)
  * name `string`

### Comment
* Comment `object`: Comment represents a comment on a commit or issue
  * body `string`
  * created_at `string`
  * html_url `string`
  * id `integer`
  * issue_url `string`
  * pull_request_url `string`
  * updated_at `string`
  * user [User](#user)

### CreateEmailOption
* CreateEmailOption `object`: CreateEmailOption options when creating email addresses
  * emails `array`: email addresses to add
    * items `string`

### CreateForkOption
* CreateForkOption `object`: CreateForkOption options for creating a fork
  * organization `string`: organization name, if forking into an organization

### CreateGPGKeyOption
* CreateGPGKeyOption `object`: CreateGPGKeyOption options create user GPG key
  * armored_public_key **required** `string`: An armored GPG key to add

### CreateHookOption
* CreateHookOption `object`: CreateHookOption options when create a hook
  * active `boolean`
  * config **required** `object`
  * events `array`
    * items `string`
  * type **required** `string` (values: gitea, gogs, slack, discord)

### CreateIssueCommentOption
* CreateIssueCommentOption `object`: CreateIssueCommentOption options for creating a comment on an issue
  * body **required** `string`

### CreateIssueOption
* CreateIssueOption `object`: CreateIssueOption options to create one issue
  * assignee `string`: username of assignee
  * assignees `array`
    * items `string`
  * body `string`
  * closed `boolean`
  * due_date `string`
  * labels `array`: list of label ids
    * items `integer`
  * milestone `integer`: milestone id
  * title **required** `string`

### CreateKeyOption
* CreateKeyOption `object`: CreateKeyOption options when creating a key
  * key **required** `string`: An armored SSH key to add
  * read_only `boolean`: Describe if the key has only read access or read/write
  * title **required** `string`: Title of the key to add

### CreateLabelOption
* CreateLabelOption `object`: CreateLabelOption options for creating a label
  * color **required** `string`
  * name **required** `string`

### CreateMilestoneOption
* CreateMilestoneOption `object`: CreateMilestoneOption options for creating a milestone
  * description `string`
  * due_on `string`
  * title `string`

### CreateOrgOption
* CreateOrgOption `object`: CreateOrgOption options for creating an organization
  * description `string`
  * full_name `string`
  * location `string`
  * username **required** `string`
  * website `string`

### CreatePullRequestOption
* CreatePullRequestOption `object`: CreatePullRequestOption options when creating a pull request
  * assignee `string`
  * assignees `array`
    * items `string`
  * base `string`
  * body `string`
  * due_date `string`
  * head `string`
  * labels `array`
    * items `integer`
  * milestone `integer`
  * title `string`

### CreateReleaseOption
* CreateReleaseOption `object`: CreateReleaseOption options when creating a release
  * body `string`
  * draft `boolean`
  * name `string`
  * prerelease `boolean`
  * tag_name **required** `string`
  * target_commitish `string`

### CreateRepoOption
* CreateRepoOption `object`: CreateRepoOption options when creating repository
  * auto_init `boolean`: Whether the repository should be auto-intialized?
  * description `string`: Description of the repository to create
  * gitignores `string`: Gitignores to use
  * license `string`: License to use
  * name **required** `string`: Name of the repository to create
  * private `boolean`: Whether the repository is private
  * readme `string`: Readme of the repository to create

### CreateStatusOption
* CreateStatusOption `object`: CreateStatusOption holds the information needed to create a new Status for a Commit
  * context `string`
  * description `string`
  * state [StatusState](#statusstate)
  * target_url `string`

### CreateTeamOption
* CreateTeamOption `object`: CreateTeamOption options for creating a team
  * description `string`
  * name **required** `string`
  * permission `string` (values: read, write, admin)

### CreateUserOption
* CreateUserOption `object`: CreateUserOption create user options
  * email **required** `string`
  * full_name `string`
  * login_name `string`
  * password **required** `string`
  * send_notify `boolean`
  * source_id `integer`
  * username **required** `string`

### DeleteEmailOption
* DeleteEmailOption `object`: DeleteEmailOption options when deleting email addresses
  * emails `array`: email addresses to delete
    * items `string`

### DeployKey
* DeployKey `object`: DeployKey a deploy key
  * created_at `string`
  * id `integer`
  * key `string`
  * read_only `boolean`
  * title `string`
  * url `string`

### EditAttachmentOptions
* EditAttachmentOptions `object`: EditAttachmentOptions options for editing attachments
  * name `string`

### EditDeadlineOption
* EditDeadlineOption `object`: EditDeadlineOption options for creating a deadline
  * due_date **required** `string`

### EditHookOption
* EditHookOption `object`: EditHookOption options when modify one hook
  * active `boolean`
  * config `object`
  * events `array`
    * items `string`

### EditIssueCommentOption
* EditIssueCommentOption `object`: EditIssueCommentOption options for editing a comment
  * body **required** `string`

### EditIssueOption
* EditIssueOption `object`: EditIssueOption options for editing an issue
  * assignee `string`
  * assignees `array`
    * items `string`
  * body `string`
  * due_date `string`
  * milestone `integer`
  * state `string`
  * title `string`

### EditLabelOption
* EditLabelOption `object`: EditLabelOption options for editing a label
  * color `string`
  * name `string`

### EditMilestoneOption
* EditMilestoneOption `object`: EditMilestoneOption options for editing a milestone
  * description `string`
  * due_on `string`
  * state `string`
  * title `string`

### EditOrgOption
* EditOrgOption `object`: EditOrgOption options for editing an organization
  * description `string`
  * full_name `string`
  * location `string`
  * website `string`

### EditPullRequestOption
* EditPullRequestOption `object`: EditPullRequestOption options when modify pull request
  * assignee `string`
  * assignees `array`
    * items `string`
  * body `string`
  * due_date `string`
  * labels `array`
    * items `integer`
  * milestone `integer`
  * state `string`
  * title `string`

### EditReleaseOption
* EditReleaseOption `object`: EditReleaseOption options when editing a release
  * body `string`
  * draft `boolean`
  * name `string`
  * prerelease `boolean`
  * tag_name `string`
  * target_commitish `string`

### EditTeamOption
* EditTeamOption `object`: EditTeamOption options for editing a team
  * description `string`
  * name **required** `string`
  * permission `string` (values: read, write, admin)

### EditUserOption
* EditUserOption `object`: EditUserOption edit user options
  * active `boolean`
  * admin `boolean`
  * allow_create_organization `boolean`
  * allow_git_hook `boolean`
  * allow_import_local `boolean`
  * email **required** `string`
  * full_name `string`
  * location `string`
  * login_name `string`
  * max_repo_creation `integer`
  * password `string`
  * prohibit_login `boolean`
  * source_id `integer`
  * website `string`

### Email
* Email `object`: Email an email address belonging to a user
  * email `string`
  * primary `boolean`
  * verified `boolean`

### GPGKey
* GPGKey `object`: GPGKey a user GPG key to sign commit and tag in repository
  * can_certify `boolean`
  * can_encrypt_comms `boolean`
  * can_encrypt_storage `boolean`
  * can_sign `boolean`
  * created_at `string`
  * emails `array`
    * items [GPGKeyEmail](#gpgkeyemail)
  * expires_at `string`
  * id `integer`
  * key_id `string`
  * primary_key_id `string`
  * public_key `string`
  * subkeys `array`
    * items [GPGKey](#gpgkey)

### GPGKeyEmail
* GPGKeyEmail `object`: GPGKeyEmail an email attached to a GPGKey
  * email `string`
  * verified `boolean`

### Issue
* Issue `object`: Issue represents an issue in a repository
  * assignee [User](#user)
  * assignees `array`
    * items [User](#user)
  * body `string`
  * closed_at `string`
  * comments `integer`
  * created_at `string`
  * due_date `string`
  * id `integer`
  * labels `array`
    * items [Label](#label)
  * milestone [Milestone](#milestone)
  * number `integer`
  * pull_request [PullRequestMeta](#pullrequestmeta)
  * state [StateType](#statetype)
  * title `string`
  * updated_at `string`
  * url `string`
  * user [User](#user)

### IssueDeadline
* IssueDeadline `object`: IssueDeadline represents an issue deadline
  * due_date `string`

### IssueLabelsOption
* IssueLabelsOption `object`: IssueLabelsOption a collection of labels
  * labels `array`: list of label IDs
    * items `integer`

### Label
* Label `object`: Label a label to an issue or a pr
  * color `string`
  * id `integer`
  * name `string`
  * url `string`

### MarkdownOption
* MarkdownOption `object`: MarkdownOption markdown options
  * Context `string`: Context to render
  * Mode `string`: Mode to render
  * Text `string`: Text markdown to render
  * Wiki `boolean`: Is it a wiki page ?

### MigrateRepoForm
* MigrateRepoForm `object`: MigrateRepoForm form for migrating repository
  * auth_password `string`
  * auth_username `string`
  * clone_addr **required** `string`
  * description `string`
  * mirror `boolean`
  * private `boolean`
  * repo_name **required** `string`
  * uid **required** `integer`

### Milestone
* Milestone `object`: Milestone milestone is a collection of issues on one repository
  * closed_at `string`
  * closed_issues `integer`
  * description `string`
  * due_on `string`
  * id `integer`
  * open_issues `integer`
  * state [StateType](#statetype)
  * title `string`

### Organization
* Organization `object`: Organization represents an organization
  * avatar_url `string`
  * description `string`
  * full_name `string`
  * id `integer`
  * location `string`
  * username `string`
  * website `string`

### PRBranchInfo
* PRBranchInfo `object`: PRBranchInfo information about a branch
  * label `string`
  * ref `string`
  * repo [Repository](#repository)
  * repo_id `integer`
  * sha `string`

### PayloadCommit
* PayloadCommit `object`: PayloadCommit represents a commit
  * author [PayloadUser](#payloaduser)
  * committer [PayloadUser](#payloaduser)
  * id `string`: sha1 hash of the commit
  * message `string`
  * timestamp `string`
  * url `string`
  * verification [PayloadCommitVerification](#payloadcommitverification)

### PayloadCommitVerification
* PayloadCommitVerification `object`: PayloadCommitVerification represents the GPG verification of a commit
  * payload `string`
  * reason `string`
  * signature `string`
  * verified `boolean`

### PayloadUser
* PayloadUser `object`: PayloadUser represents the author or committer of a commit
  * email `string`
  * name `string`: Full name of the commit author
  * username `string`

### Permission
* Permission `object`: Permission represents a set of permissions
  * admin `boolean`
  * pull `boolean`
  * push `boolean`

### PublicKey
* PublicKey `object`: PublicKey publickey is a user key to push code to repository
  * created_at `string`
  * fingerprint `string`
  * id `integer`
  * key `string`
  * title `string`
  * url `string`

### PullRequest
* PullRequest `object`: PullRequest represents a pull request
  * assignee [User](#user)
  * assignees `array`
    * items [User](#user)
  * base [PRBranchInfo](#prbranchinfo)
  * body `string`
  * closed_at `string`
  * comments `integer`
  * created_at `string`
  * diff_url `string`
  * due_date `string`
  * head [PRBranchInfo](#prbranchinfo)
  * html_url `string`
  * id `integer`
  * labels `array`
    * items [Label](#label)
  * merge_base `string`
  * merge_commit_sha `string`
  * mergeable `boolean`
  * merged `boolean`
  * merged_at `string`
  * merged_by [User](#user)
  * milestone [Milestone](#milestone)
  * number `integer`
  * patch_url `string`
  * state [StateType](#statetype)
  * title `string`
  * updated_at `string`
  * url `string`
  * user [User](#user)

### PullRequestMeta
* PullRequestMeta `object`: PullRequestMeta PR info if an issue is a PR
  * merged `boolean`
  * merged_at `string`

### Release
* Release `object`: Release represents a repository release
  * assets `array`
    * items [Attachment](#attachment)
  * author [User](#user)
  * body `string`
  * created_at `string`
  * draft `boolean`
  * id `integer`
  * name `string`
  * prerelease `boolean`
  * published_at `string`
  * tag_name `string`
  * tarball_url `string`
  * target_commitish `string`
  * url `string`
  * zipball_url `string`

### Repository
* Repository `object`: Repository represents a repository
  * clone_url `string`
  * created_at `string`
  * default_branch `string`
  * description `string`
  * empty `boolean`
  * fork `boolean`
  * forks_count `integer`
  * full_name `string`
  * html_url `string`
  * id `integer`
  * mirror `boolean`
  * name `string`
  * open_issues_count `integer`
  * owner [User](#user)
  * parent [Repository](#repository)
  * permissions [Permission](#permission)
  * private `boolean`
  * size `integer`
  * ssh_url `string`
  * stars_count `integer`
  * updated_at `string`
  * watchers_count `integer`
  * website `string`

### SearchResults
* SearchResults `object`: SearchResults results of a successful search
  * data `array`
    * items [Repository](#repository)
  * ok `boolean`

### ServerVersion
* ServerVersion `object`: ServerVersion wraps the version of the server
  * version `string`

### StateType
* StateType `string`: StateType issue state type

### Status
* Status `object`: Status holds a single Status of a single Commit
  * context `string`
  * created_at `string`
  * creator [User](#user)
  * description `string`
  * id `integer`
  * status [StatusState](#statusstate)
  * target_url `string`
  * updated_at `string`
  * url `string`

### StatusState
* StatusState `string`: StatusState holds the state of a Status

### Team
* Team `object`: Team represents a team in an organization
  * description `string`
  * id `integer`
  * name `string`
  * permission `string` (values: none, read, write, admin, owner)

### TrackedTime
* TrackedTime `object`: TrackedTime worked time for an issue / pr
  * created `string`
  * id `integer`
  * issue_id `integer`
  * time `integer`: Time in seconds
  * user_id `integer`

### User
* User `object`: User represents a user
  * avatar_url `string`: URL to the user's avatar
  * email `string`
  * full_name `string`: the user's full name
  * id `integer`: the user's id
  * language `string`: User locale
  * login `string`: the user's username

### WatchInfo
* WatchInfo `object`: WatchInfo represents an API watch status of one repository
  * created_at `string`
  * ignored `boolean`
  * reason `object`
  * repository_url `string`
  * subscribed `boolean`
  * url `string`


