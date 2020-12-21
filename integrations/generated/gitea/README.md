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
  TOTPHeader: "",
  Token: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This documentation describes the Gitea API.

## Actions

### adminCronList
List cron tasks


```js
gitea.adminCronList({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Cron](#cron)

### adminCronRun
Run cron task


```js
gitea.adminCronRun({
  "task": ""
}, context)
```

#### Input
* input `object`
  * task **required** `string`: task to run

#### Output
*Output schema unknown*

### adminGetAllOrgs
List all organizations


```js
gitea.adminGetAllOrgs({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Organization](#organization)

### adminUnadoptedList
List unadopted repositories


```js
gitea.adminUnadoptedList({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results
  * pattern `string`: pattern of repositories to search for

#### Output
* output `array`
  * items `string`

### adminDeleteUnadoptedRepository
Delete unadopted files


```js
gitea.adminDeleteUnadoptedRepository({
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

### adminAdoptRepository
Adopt unadopted files as a repository


```js
gitea.adminAdoptRepository({
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

### adminGetAllUsers
List all users


```js
gitea.adminGetAllUsers({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [User](#user)

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
Create a repository on behalf of a user


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
* output `string`

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
* output `string`

### notifyGetList
List users's notification threads


```js
gitea.notifyGetList({}, context)
```

#### Input
* input `object`
  * all `string`: If true, show notifications marked as read. Default value is false
  * status-types `array`: Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread & pinned.
  * since `string`: Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
  * before `string`: Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [NotificationThread](#notificationthread)

### notifyReadList
Mark notification threads as read, pinned or unread


```js
gitea.notifyReadList({}, context)
```

#### Input
* input `object`
  * last_read_at `string`: Describes the last point that notifications were checked. Anything updated since this time will not be updated.
  * all `string`: If true, mark all notifications on this repo. Default value is false
  * status-types `array`: Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread.
  * to-status `string`: Status to mark notifications as, Defaults to read.

#### Output
*Output schema unknown*

### notifyNewAvailable
Check if unread notifications exist


```js
gitea.notifyNewAvailable(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [NotificationCount](#notificationcount)

### notifyGetThread
Get notification thread by ID


```js
gitea.notifyGetThread({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: id of notification thread

#### Output
* output [NotificationThread](#notificationthread)

### notifyReadThread
Mark notification thread as read by ID


```js
gitea.notifyReadThread({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: id of notification thread
  * to-status `string`: Status to mark notifications as

#### Output
*Output schema unknown*

### createOrgRepoDeprecated
Create a repository in an organization


```js
gitea.createOrgRepoDeprecated({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of organization
  * body [CreateRepoOption](#createrepooption)

#### Output
* output [Repository](#repository)

### orgGetAll
Get list of organizations


```js
gitea.orgGetAll({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Organization](#organization)

### orgCreate
Create an organization


```js
gitea.orgCreate({
  "organization": {
    "username": ""
  }
}, context)
```

#### Input
* input `object`
  * organization **required** [CreateOrgOption](#createorgoption)

#### Output
* output [Organization](#organization)

### orgDelete
Delete an organization


```js
gitea.orgDelete({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: organization that is to be deleted

#### Output
*Output schema unknown*

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
  "org": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization to edit
  * body **required** [EditOrgOption](#editorgoption)

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Hook](#hook)

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
* output [Hook](#hook)

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
* output [Hook](#hook)

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
* output [Hook](#hook)

### orgListLabels
List an organization's labels


```js
gitea.orgListLabels({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Label](#label)

### orgCreateLabel
Create a label for an organization


```js
gitea.orgCreateLabel({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * body [CreateLabelOption](#createlabeloption)

#### Output
* output [Label](#label)

### orgDeleteLabel
Delete a label


```js
gitea.orgDeleteLabel({
  "org": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * id **required** `integer`: id of the label to delete

#### Output
*Output schema unknown*

### orgGetLabel
Get a single label


```js
gitea.orgGetLabel({
  "org": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * id **required** `integer`: id of the label to get

#### Output
* output [Label](#label)

### orgEditLabel
Update a label


```js
gitea.orgEditLabel({
  "org": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * id **required** `integer`: id of the label to edit
  * body [EditLabelOption](#editlabeloption)

#### Output
* output [Label](#label)

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Repository](#repository)

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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

### teamSearch
Search for teams within an organization


```js
gitea.teamSearch({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`: name of the organization
  * q `string`: keywords to search
  * include_desc `boolean`: include search within team description (defaults to true)
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `object`
  * data `array`
    * items [Team](#team)
  * ok `boolean`

### issueSearchIssues
Search for issues across the repositories that the user has access to


```js
gitea.issueSearchIssues({}, context)
```

#### Input
* input `object`
  * state `string`: whether issue is open or closed
  * labels `string`: comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded
  * q `string`: search string
  * priority_repo_id `integer`: repository to prioritize in the results
  * type `string`: filter by type (issues / pulls) if set
  * since `string`: Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
  * before `string`: Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
  * assigned `boolean`: filter (issues / pulls) assigned to you, default is false
  * created `boolean`: filter (issues / pulls) created by you, default is false
  * mentioned `boolean`: filter (issues / pulls) mentioning you, default is false
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Issue](#issue)

### repoMigrate
Migrate a remote git repository


```js
gitea.repoMigrate({}, context)
```

#### Input
* input `object`
  * body [MigrateRepoOptions](#migraterepooptions)

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
  * topic `boolean`: Limit search to repositories with keyword as topic
  * includeDesc `boolean`: include search of keyword within repository description
  * uid `integer`: search only for repos that the user with the given id owns or contributes to
  * priority_owner_id `integer`: repo owner to prioritize in the results
  * starredBy `integer`: search only for repos that the user with the given id has starred
  * private `boolean`: include private repositories this user has access to (defaults to true)
  * is_private `boolean`: show only pubic, private or all repositories (defaults to all)
  * template `boolean`: include template repositories this user has access to (defaults to true)
  * archived `boolean`: show only archived, non-archived or all repositories (defaults to all)
  * mode `string`: type of repository to search for. Supported values are "fork", "source", "mirror" and "collaborative"
  * exclusive `boolean`: if `uid` is given, search only for repos that the user owns
  * sort `string`: sort repos by attribute. Supported values are "alpha", "created", "updated", "size", and "id". Default is "alpha"
  * order `string`: sort order, either "asc" (ascending) or "desc" (descending). Default is "asc", ignored if "sort" is not specified.
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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

### repoEdit
Edit a repository's properties. Only fields that are set will be changed.


```js
gitea.repoEdit({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo to edit
  * repo **required** `string`: name of the repo to edit
  * body [EditRepoOption](#editrepooption)

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
  * archive **required** `string`: the git reference for download with attached archive format (e.g. master.zip)

#### Output
*Output schema unknown*

### repoListBranchProtection
List branch protections for a repository


```js
gitea.repoListBranchProtection({
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
  * items [BranchProtection](#branchprotection)

### repoCreateBranchProtection
Create a branch protections for a repository


```js
gitea.repoCreateBranchProtection({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * body [CreateBranchProtectionOption](#createbranchprotectionoption)

#### Output
* output [BranchProtection](#branchprotection)

### repoDeleteBranchProtection
Delete a specific branch protection for the repository


```js
gitea.repoDeleteBranchProtection({
  "owner": "",
  "repo": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * name **required** `string`: name of protected branch

#### Output
*Output schema unknown*

### repoGetBranchProtection
Get a specific branch protection for the repository


```js
gitea.repoGetBranchProtection({
  "owner": "",
  "repo": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * name **required** `string`: name of protected branch

#### Output
* output [BranchProtection](#branchprotection)

### repoEditBranchProtection
Edit a branch protections for a repository. Only fields that are set will be changed


```js
gitea.repoEditBranchProtection({
  "owner": "",
  "repo": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * name **required** `string`: name of protected branch
  * body [EditBranchProtectionOption](#editbranchprotectionoption)

#### Output
* output [BranchProtection](#branchprotection)

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

### repoCreateBranch
Create a branch


```js
gitea.repoCreateBranch({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * body [CreateBranchRepoOption](#createbranchrepooption)

#### Output
* output [Branch](#branch)

### repoDeleteBranch
Delete a specific branch from a repository


```js
gitea.repoDeleteBranch({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * branch **required** `string`: branch to delete

#### Output
*Output schema unknown*

### repoGetBranch
Retrieve a specific branch from a repository, including its effective branch protection


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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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

### repoGetAllCommits
Get a list of all commits from a repository


```js
gitea.repoGetAllCommits({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * sha `string`: SHA or branch to start listing commits from (usually 'master')
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Commit](#commit)

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
  * page `integer`: page number of results

#### Output
* output [Status](#status)

### repoGetContentsList
Gets the metadata of all the entries of the root dir


```js
gitea.repoGetContentsList({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * ref `string`: The name of the commit/branch/tag. Default the repository’s default branch (usually master)

#### Output
* output `array`
  * items [ContentsResponse](#contentsresponse)

### repoDeleteFile
Delete a file in a repository


```js
gitea.repoDeleteFile({
  "owner": "",
  "repo": "",
  "filepath": "",
  "body": {
    "sha": ""
  }
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * filepath **required** `string`: path of the file to delete
  * body **required** [DeleteFileOptions](#deletefileoptions)

#### Output
* output [FileDeleteResponse](#filedeleteresponse)

### repoGetContents
Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir


```js
gitea.repoGetContents({
  "owner": "",
  "repo": "",
  "filepath": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * filepath **required** `string`: path of the dir, file, symlink or submodule in the repo
  * ref `string`: The name of the commit/branch/tag. Default the repository’s default branch (usually master)

#### Output
* output [ContentsResponse](#contentsresponse)

### repoCreateFile
Create a file in a repository


```js
gitea.repoCreateFile({
  "owner": "",
  "repo": "",
  "filepath": "",
  "body": {
    "content": ""
  }
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * filepath **required** `string`: path of the file to create
  * body **required** [CreateFileOptions](#createfileoptions)

#### Output
* output [FileResponse](#fileresponse)

### repoUpdateFile
Update a file in a repository


```js
gitea.repoUpdateFile({
  "owner": "",
  "repo": "",
  "filepath": "",
  "body": {
    "sha": "",
    "content": ""
  }
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * filepath **required** `string`: path of the file to update
  * body **required** [UpdateFileOptions](#updatefileoptions)

#### Output
* output [FileResponse](#fileresponse)

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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

### GetBlob
Gets the blob of a repository.


```js
gitea.GetBlob({
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
* output [GitBlobResponse](#gitblobresponse)

### repoGetSingleCommit
Get a single commit from a repository


```js
gitea.repoGetSingleCommit({
  "owner": "",
  "repo": "",
  "sha": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * sha **required** `string`: a git ref or commit sha

#### Output
* output [Commit](#commit)

### repoListAllGitRefs
Get specified ref or filtered repository's refs


```js
gitea.repoListAllGitRefs({
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
  * items [Reference](#reference)

### repoListGitRefs
Get specified ref or filtered repository's refs


```js
gitea.repoListGitRefs({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * ref **required** `string`: part or full name of the ref

#### Output
* output `array`
  * items [Reference](#reference)

### GetTag
Gets the tag object of an annotated tag (not lightweight tags)


```js
gitea.GetTag({
  "owner": "",
  "repo": "",
  "sha": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * sha **required** `string`: sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags.

#### Output
* output [AnnotatedTag](#annotatedtag)

### GetTree
Gets the tree of a repository.


```js
gitea.GetTree({
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
  * recursive `boolean`: show all directories and files
  * page `integer`: page number; the 'truncated' field in the response will be true if there are still more items after this page, false if the last page
  * per_page `integer`: number of items per page

#### Output
* output [GitTreeResponse](#gittreeresponse)

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Hook](#hook)

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
* output [Hook](#hook)

### repoListGitHooks
List the Git hooks in a repository


```js
gitea.repoListGitHooks({
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
  * items [GitHook](#githook)

### repoDeleteGitHook
Delete a Git hook in a repository


```js
gitea.repoDeleteGitHook({
  "owner": "",
  "repo": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `string`: id of the hook to get

#### Output
*Output schema unknown*

### repoGetGitHook
Get a Git hook


```js
gitea.repoGetGitHook({
  "owner": "",
  "repo": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `string`: id of the hook to get

#### Output
* output [GitHook](#githook)

### repoEditGitHook
Edit a Git hook in a repository


```js
gitea.repoEditGitHook({
  "owner": "",
  "repo": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `string`: id of the hook to get
  * body [EditGitHookOption](#editgithookoption)

#### Output
* output [GitHook](#githook)

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
* output [Hook](#hook)

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
* output [Hook](#hook)

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

### repoGetIssueTemplates
Get available issue templates for a repository


```js
gitea.repoGetIssueTemplates({
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
  * items [IssueTemplate](#issuetemplate)

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
  * state `string` (values: closed, open, all): whether issue is open or closed
  * labels `string`: comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded
  * q `string`: search string
  * type `string` (values: issues, pulls): filter by type (issues / pulls) if set
  * milestones `string`: comma separated list of milestone names or ids. It uses names and fall back to ids. Fetch only issues that have any of this milestones. Non existent milestones are discarded
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Issue](#issue)

### issueCreateIssue
Create an issue. If using deadline only the date will be taken into account, and time of day ignored.


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
  * before `string`: if provided, only comments updated before the provided time are returned.
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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

### issueGetComment
Get a comment


```js
gitea.issueGetComment({
  "owner": "",
  "repo": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `integer`: id of the comment

#### Output
* output [Comment](#comment)

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

### issueDeleteCommentReaction
Remove a reaction from a comment of an issue


```js
gitea.issueDeleteCommentReaction({
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
  * content [EditReactionOption](#editreactionoption)

#### Output
*Output schema unknown*

### issueGetCommentReactions
Get a list of reactions from a comment of an issue


```js
gitea.issueGetCommentReactions({
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

#### Output
* output `array`
  * items [Reaction](#reaction)

### issuePostCommentReaction
Add a reaction to a comment of an issue


```js
gitea.issuePostCommentReaction({
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
  * content [EditReactionOption](#editreactionoption)

#### Output
* output [Reaction](#reaction)

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
Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.


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
  * before `string`: if provided, only comments updated before the provided time are returned.

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
Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.


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

### issueDeleteIssueReaction
Remove a reaction from an issue


```js
gitea.issueDeleteIssueReaction({
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
  * content [EditReactionOption](#editreactionoption)

#### Output
*Output schema unknown*

### issueGetIssueReactions
Get a list reactions of an issue


```js
gitea.issueGetIssueReactions({
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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Reaction](#reaction)

### issuePostIssueReaction
Add a reaction to an issue


```js
gitea.issuePostIssueReaction({
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
  * content [EditReactionOption](#editreactionoption)

#### Output
* output [Reaction](#reaction)

### issueDeleteStopWatch
Delete an issue's existing stopwatch.


```js
gitea.issueDeleteStopWatch({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue to stop the stopwatch on

#### Output
*Output schema unknown*

### issueStartStopWatch
Start stopwatch on an issue.


```js
gitea.issueStartStopWatch({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue to create the stopwatch on

#### Output
*Output schema unknown*

### issueStopStopWatch
Stop an issue's existing stopwatch.


```js
gitea.issueStopStopWatch({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue to stop the stopwatch on

#### Output
*Output schema unknown*

### issueSubscriptions
Get users who subscribed on an issue.


```js
gitea.issueSubscriptions({
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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [User](#user)

### issueCheckSubscription
Check if user is subscribed to an issue


```js
gitea.issueCheckSubscription({
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
* output [WatchInfo](#watchinfo)

### issueDeleteSubscription
Unsubscribe user from issue


```js
gitea.issueDeleteSubscription({
  "owner": "",
  "repo": "",
  "index": 0,
  "user": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue
  * user **required** `string`: user witch unsubscribe

#### Output
*Output schema unknown*

### issueAddSubscription
Subscribe user to issue


```js
gitea.issueAddSubscription({
  "owner": "",
  "repo": "",
  "index": 0,
  "user": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue
  * user **required** `string`: user to subscribe

#### Output
*Output schema unknown*

### issueResetTime
Reset a tracked time of an issue


```js
gitea.issueResetTime({
  "owner": "",
  "repo": "",
  "index": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the issue to add tracked time to

#### Output
*Output schema unknown*

### issueTrackedTimes
List an issue's tracked times


```js
gitea.issueTrackedTimes({
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
  * since `string`: Only show times updated after the given time. This is a timestamp in RFC 3339 format
  * before `string`: Only show times updated before the given time. This is a timestamp in RFC 3339 format
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [TrackedTime](#trackedtime)

### issueAddTime
Add tracked time to a issue


```js
gitea.issueAddTime({
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
  * body [AddTimeOption](#addtimeoption)

#### Output
* output [TrackedTime](#trackedtime)

### issueDeleteTime
Delete specific tracked time


```js
gitea.issueDeleteTime({
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
  * id **required** `integer`: id of time to delete

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
  * key_id `integer`: the key_id to search for
  * fingerprint `string`: fingerprint of the key
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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

### repoGetLanguages
Get languages and number of bytes of code written


```js
gitea.repoGetLanguages({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output `object`

### issueGetMilestonesList
Get all of a repository's opened milestones


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
  * state `string`: Milestone state, Recognised values are open, closed and all. Defaults to "open"
  * name `string`: filter by milestone name
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
  "id": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `string`: the milestone to delete, identified by ID and if not available by name

#### Output
*Output schema unknown*

### issueGetMilestone
Get a milestone


```js
gitea.issueGetMilestone({
  "owner": "",
  "repo": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `string`: the milestone to get, identified by ID and if not available by name

#### Output
* output [Milestone](#milestone)

### issueEditMilestone
Update a milestone


```js
gitea.issueEditMilestone({
  "owner": "",
  "repo": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * id **required** `string`: the milestone to edit, identified by ID and if not available by name
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

### notifyGetRepoList
List users's notification threads on a specific repo


```js
gitea.notifyGetRepoList({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * all `string`: If true, show notifications marked as read. Default value is false
  * status-types `array`: Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread & pinned
  * since `string`: Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
  * before `string`: Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [NotificationThread](#notificationthread)

### notifyReadRepoList
Mark notification threads as read, pinned or unread on a specific repo


```js
gitea.notifyReadRepoList({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * all `string`: If true, mark all notifications on this repo. Default value is false
  * status-types `array`: Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread.
  * to-status `string`: Status to mark notifications as. Defaults to read.
  * last_read_at `string`: Describes the last point that notifications were checked. Anything updated since this time will not be updated.

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
  * state `string` (values: closed, open, all): State of pull request: open or closed (optional)
  * sort `string` (values: oldest, recentupdate, leastupdate, mostcomment, leastcomment, priority): Type of sort
  * milestone `integer`: ID of the milestone
  * labels `array`: Label IDs
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.


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

### repoDownloadPullDiff
Get a pull request diff


```js
gitea.repoDownloadPullDiff({
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
* output `string`

### repoDownloadPullPatch
Get a pull request patch file


```js
gitea.repoDownloadPullPatch({
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
* output `string`

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
  * body [MergePullRequestOption](#mergepullrequestoption)

#### Output
*Output schema unknown*

### repoDeletePullReviewRequests
cancel review requests for a pull request


```js
gitea.repoDeletePullReviewRequests({
  "owner": "",
  "repo": "",
  "index": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the pull request
  * body **required** [PullReviewRequestOptions](#pullreviewrequestoptions)

#### Output
*Output schema unknown*

### repoCreatePullReviewRequests
create review requests for a pull request


```js
gitea.repoCreatePullReviewRequests({
  "owner": "",
  "repo": "",
  "index": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the pull request
  * body **required** [PullReviewRequestOptions](#pullreviewrequestoptions)

#### Output
* output `array`
  * items [PullReview](#pullreview)

### repoListPullReviews
List all reviews for a pull request


```js
gitea.repoListPullReviews({
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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [PullReview](#pullreview)

### repoCreatePullReview
Create a review to an pull request


```js
gitea.repoCreatePullReview({
  "owner": "",
  "repo": "",
  "index": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the pull request
  * body **required** [CreatePullReviewOptions](#createpullreviewoptions)

#### Output
* output [PullReview](#pullreview)

### repoDeletePullReview
Delete a specific review from a pull request


```js
gitea.repoDeletePullReview({
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
  * index **required** `integer`: index of the pull request
  * id **required** `integer`: id of the review

#### Output
*Output schema unknown*

### repoGetPullReview
Get a specific review for a pull request


```js
gitea.repoGetPullReview({
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
  * index **required** `integer`: index of the pull request
  * id **required** `integer`: id of the review

#### Output
* output [PullReview](#pullreview)

### repoSubmitPullReview
Submit a pending review to an pull request


```js
gitea.repoSubmitPullReview({
  "owner": "",
  "repo": "",
  "index": 0,
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * index **required** `integer`: index of the pull request
  * id **required** `integer`: id of the review
  * body **required** [SubmitPullReviewOptions](#submitpullreviewoptions)

#### Output
* output [PullReview](#pullreview)

### repoGetPullReviewComments
Get a specific review for a pull request


```js
gitea.repoGetPullReviewComments({
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
  * index **required** `integer`: index of the pull request
  * id **required** `integer`: id of the review

#### Output
* output `array`
  * items [PullReviewComment](#pullreviewcomment)

### repoUpdatePullRequest
Merge PR's baseBranch into headBranch


```js
gitea.repoUpdatePullRequest({
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
  * per_page `integer`: page size of results, deprecated - use limit
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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

### repoDeleteReleaseTag
Delete a release tag


```js
gitea.repoDeleteReleaseTag({
  "owner": "",
  "repo": "",
  "tag": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * tag **required** `string`: name of the tag to delete

#### Output
*Output schema unknown*

### repoGetReleaseTag
Get a release by tag name


```js
gitea.repoGetReleaseTag({
  "owner": "",
  "repo": "",
  "tag": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * tag **required** `string`: tagname of the release to get

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

### repoSigningKey
Get signing-key.gpg for given repository


```js
gitea.repoSigningKey({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo

#### Output
* output `string`

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
  * sort `string` (values: oldest, recentupdate, leastupdate, leastindex, highestindex): type of sort
  * state `string` (values: pending, success, error, failure, warning): type of state
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
* output [Status](#status)

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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

### repoListTags
List a repository's tags


```js
gitea.repoListTags({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results, default maximum page size is 50

#### Output
* output `array`
  * items [Tag](#tag)

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
  * user `string`: optional filter by user
  * since `string`: Only show times updated after the given time. This is a timestamp in RFC 3339 format
  * before `string`: Only show times updated before the given time. This is a timestamp in RFC 3339 format
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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

### repoListTopics
Get list of topics that a repository has


```js
gitea.repoListTopics({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output [TopicName](#topicname)

### repoUpdateTopics
Replace list of topics for a repository


```js
gitea.repoUpdateTopics({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * body [RepoTopicOptions](#repotopicoptions)

#### Output
*Output schema unknown*

### repoDeleteTopic
Delete a topic from a repository


```js
gitea.repoDeleteTopic({
  "owner": "",
  "repo": "",
  "topic": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * topic **required** `string`: name of the topic to delete

#### Output
*Output schema unknown*

### repos.owner.repo.topics.topic.put
Add a topic to a repository


```js
gitea.repos.owner.repo.topics.topic.put({
  "owner": "",
  "repo": "",
  "topic": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo
  * repo **required** `string`: name of the repo
  * topic **required** `string`: name of the topic to add

#### Output
*Output schema unknown*

### repoTransfer
Transfer a repo ownership


```js
gitea.repoTransfer({
  "owner": "",
  "repo": "",
  "body": {
    "new_owner": ""
  }
}, context)
```

#### Input
* input `object`
  * owner **required** `string`: owner of the repo to transfer
  * repo **required** `string`: name of the repo to transfer
  * body **required** [TransferRepoOption](#transferrepooption)

#### Output
* output [Repository](#repository)

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

### getGeneralAPISettings
Get instance's global settings for api


```js
gitea.getGeneralAPISettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [GeneralAPISettings](#generalapisettings)

### getGeneralAttachmentSettings
Get instance's global settings for Attachment


```js
gitea.getGeneralAttachmentSettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [GeneralAttachmentSettings](#generalattachmentsettings)

### getGeneralRepositorySettings
Get instance's global settings for repositories


```js
gitea.getGeneralRepositorySettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [GeneralRepoSettings](#generalreposettings)

### getGeneralUISettings
Get instance's global settings for ui


```js
gitea.getGeneralUISettings(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [GeneralUISettings](#generaluisettings)

### getSigningKey
Get default signing-key.gpg


```js
gitea.getSigningKey(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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

### orgListTeamMember
List a particular member of team


```js
gitea.orgListTeamMember({
  "id": 0,
  "username": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the team
  * username **required** `string`: username of the member to list

#### Output
* output [User](#user)

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [TopicResponse](#topicresponse)

### userGetCurrent
Get the authenticated user


```js
gitea.userGetCurrent(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### userGetOauth2Application
List the authenticated user's oauth2 applications


```js
gitea.userGetOauth2Application({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [OAuth2Application](#oauth2application)

### userCreateOAuth2Application
creates a new OAuth2 application


```js
gitea.userCreateOAuth2Application({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CreateOAuth2ApplicationOptions](#createoauth2applicationoptions)

#### Output
* output [OAuth2Application](#oauth2application)

### userDeleteOAuth2Application
delete an OAuth2 Application


```js
gitea.userDeleteOAuth2Application({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: token to be deleted

#### Output
*Output schema unknown*

### userGetOAuth2Application
get an OAuth2 Application


```js
gitea.userGetOAuth2Application({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Application ID to be found

#### Output
* output [OAuth2Application](#oauth2application)

### userUpdateOAuth2Application
update an OAuth2 Application, this includes regenerating the client secret


```js
gitea.userUpdateOAuth2Application({
  "id": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: application to be updated
  * body **required** [CreateOAuth2ApplicationOptions](#createoauth2applicationoptions)

#### Output
* output [OAuth2Application](#oauth2application)

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
gitea.userCurrentListFollowers({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [User](#user)

### userCurrentListFollowing
List the users that the authenticated user is following


```js
gitea.userCurrentListFollowing({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
gitea.userCurrentListGPGKeys({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
gitea.userCurrentListKeys({}, context)
```

#### Input
* input `object`
  * fingerprint `string`: fingerprint of the key
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
gitea.orgListCurrentUserOrgs({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Organization](#organization)

### userCurrentListRepos
List the repos that the authenticated user owns or has access to


```js
gitea.userCurrentListRepos({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
gitea.userCurrentListStarred({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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

### userGetStopWatches
Get list of all existing stopwatches


```js
gitea.userGetStopWatches({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [StopWatch](#stopwatch)

### userCurrentListSubscriptions
List repositories watched by the authenticated user


```js
gitea.userCurrentListSubscriptions({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Repository](#repository)

### userListTeams
List all the teams a user belongs to


```js
gitea.userListTeams({}, context)
```

#### Input
* input `object`
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Team](#team)

### userCurrentTrackedTimes
List the current user's tracked times


```js
gitea.userCurrentTrackedTimes({}, context)
```

#### Input
* input `object`
  * since `string`: Only show times updated after the given time. This is a timestamp in RFC 3339 format
  * before `string`: Only show times updated before the given time. This is a timestamp in RFC 3339 format

#### Output
* output `array`
  * items [TrackedTime](#trackedtime)

### userSearch
Search for users


```js
gitea.userSearch({}, context)
```

#### Input
* input `object`
  * q `string`: keyword
  * uid `integer`: ID of the user to search for
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [GPGKey](#gpgkey)

### userGetHeatmapData
Get a user's heatmap


```js
gitea.userGetHeatmapData({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user to get

#### Output
* output `array`
  * items [UserHeatmapData](#userheatmapdata)

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
  * fingerprint `string`: fingerprint of the key
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [PublicKey](#publickey)

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [Organization](#organization)

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

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
  * page `integer`: page number of results to return (1-based)
  * limit `integer`: page size of results

#### Output
* output `array`
  * items [AccessToken](#accesstoken)

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
  "token": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: username of user
  * token **required** `string`: token to be deleted, identified by ID and if not available by name

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

### APIError
* APIError `object`: APIError is an api error with a message
  * message `string`
  * url `string`

### AccessToken
* AccessToken represents an API access token. `object`
  * id `integer`
  * name `string`
  * sha1 `string`
  * token_last_eight `string`

### AddCollaboratorOption
* AddCollaboratorOption `object`: AddCollaboratorOption options when adding a user as a collaborator of a repository
  * permission `string`

### AddTimeOption
* AddTimeOption `object`: AddTimeOption options for adding time to an issue
  * created `string`
  * time **required** `integer`: time in seconds
  * user_name `string`: User who spent the time (optional)

### AnnotatedTag
* AnnotatedTag `object`: AnnotatedTag represents an annotated tag
  * message `string`
  * object [AnnotatedTagObject](#annotatedtagobject)
  * sha `string`
  * tag `string`
  * tagger [CommitUser](#commituser)
  * url `string`
  * verification [PayloadCommitVerification](#payloadcommitverification)

### AnnotatedTagObject
* AnnotatedTagObject `object`: AnnotatedTagObject contains meta information of the tag object
  * sha `string`
  * type `string`
  * url `string`

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
  * effective_branch_protection_name `string`
  * enable_status_check `boolean`
  * name `string`
  * protected `boolean`
  * required_approvals `integer`
  * status_check_contexts `array`
    * items `string`
  * user_can_merge `boolean`
  * user_can_push `boolean`

### BranchProtection
* BranchProtection `object`: BranchProtection represents a branch protection for a repository
  * approvals_whitelist_teams `array`
    * items `string`
  * approvals_whitelist_username `array`
    * items `string`
  * block_on_official_review_requests `boolean`
  * block_on_outdated_branch `boolean`
  * block_on_rejected_reviews `boolean`
  * branch_name `string`
  * created_at `string`
  * dismiss_stale_approvals `boolean`
  * enable_approvals_whitelist `boolean`
  * enable_merge_whitelist `boolean`
  * enable_push `boolean`
  * enable_push_whitelist `boolean`
  * enable_status_check `boolean`
  * merge_whitelist_teams `array`
    * items `string`
  * merge_whitelist_usernames `array`
    * items `string`
  * protected_file_patterns `string`
  * push_whitelist_deploy_keys `boolean`
  * push_whitelist_teams `array`
    * items `string`
  * push_whitelist_usernames `array`
    * items `string`
  * require_signed_commits `boolean`
  * required_approvals `integer`
  * status_check_contexts `array`
    * items `string`
  * updated_at `string`

### Comment
* Comment `object`: Comment represents a comment on a commit or issue
  * body `string`
  * created_at `string`
  * html_url `string`
  * id `integer`
  * issue_url `string`
  * original_author `string`
  * original_author_id `integer`
  * pull_request_url `string`
  * updated_at `string`
  * user [User](#user)

### Commit
* Commit contains information generated from a Git commit. `object`
  * author [User](#user)
  * commit [RepoCommit](#repocommit)
  * committer [User](#user)
  * created `string`
  * html_url `string`
  * parents `array`
    * items [CommitMeta](#commitmeta)
  * sha `string`
  * url `string`

### CommitDateOptions
* CommitDateOptions `object`: CommitDateOptions store dates for GIT_AUTHOR_DATE and GIT_COMMITTER_DATE
  * author `string`
  * committer `string`

### CommitMeta
* CommitMeta contains meta information of a commit in terms of API. `object`
  * created `string`
  * sha `string`
  * url `string`

### CommitUser
* CommitUser contains information of a user in the context of a commit. `object`
  * date `string`
  * email `string`
  * name `string`

### ContentsResponse
* ContentsResponse `object`: ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content
  * _links [FileLinksResponse](#filelinksresponse)
  * content `string`: `content` is populated when `type` is `file`, otherwise null
  * download_url `string`
  * encoding `string`: `encoding` is populated when `type` is `file`, otherwise null
  * git_url `string`
  * html_url `string`
  * name `string`
  * path `string`
  * sha `string`
  * size `integer`
  * submodule_git_url `string`: `submodule_git_url` is populated when `type` is `submodule`, otherwise null
  * target `string`: `target` is populated when `type` is `symlink`, otherwise null
  * type `string`: `type` will be `file`, `dir`, `symlink`, or `submodule`
  * url `string`

### CreateBranchProtectionOption
* CreateBranchProtectionOption `object`: CreateBranchProtectionOption options for creating a branch protection
  * approvals_whitelist_teams `array`
    * items `string`
  * approvals_whitelist_username `array`
    * items `string`
  * block_on_official_review_requests `boolean`
  * block_on_outdated_branch `boolean`
  * block_on_rejected_reviews `boolean`
  * branch_name `string`
  * dismiss_stale_approvals `boolean`
  * enable_approvals_whitelist `boolean`
  * enable_merge_whitelist `boolean`
  * enable_push `boolean`
  * enable_push_whitelist `boolean`
  * enable_status_check `boolean`
  * merge_whitelist_teams `array`
    * items `string`
  * merge_whitelist_usernames `array`
    * items `string`
  * protected_file_patterns `string`
  * push_whitelist_deploy_keys `boolean`
  * push_whitelist_teams `array`
    * items `string`
  * push_whitelist_usernames `array`
    * items `string`
  * require_signed_commits `boolean`
  * required_approvals `integer`
  * status_check_contexts `array`
    * items `string`

### CreateBranchRepoOption
* CreateBranchRepoOption `object`: CreateBranchRepoOption options when creating a branch in a repository
  * new_branch_name **required** `string`: Name of the branch to create
  * old_branch_name `string`: Name of the old branch to create from

### CreateEmailOption
* CreateEmailOption `object`: CreateEmailOption options when creating email addresses
  * emails `array`: email addresses to add
    * items `string`

### CreateFileOptions
* CreateFileOptions `object`: CreateFileOptions options for creating files
  * author [Identity](#identity)
  * branch `string`: branch (optional) to base this file from. if not given, the default branch is used
  * committer [Identity](#identity)
  * content **required** `string`: content must be base64 encoded
  * dates [CommitDateOptions](#commitdateoptions)
  * message `string`: message (optional) for the commit of this file. if not supplied, a default message will be used
  * new_branch `string`: new_branch (optional) will make a new branch from `branch` before creating the file

### CreateForkOption
* CreateForkOption `object`: CreateForkOption options for creating a fork
  * organization `string`: organization name, if forking into an organization

### CreateGPGKeyOption
* CreateGPGKeyOption `object`: CreateGPGKeyOption options create user GPG key
  * armored_public_key **required** `string`: An armored GPG key to add

### CreateHookOption
* CreateHookOption `object`: CreateHookOption options when create a hook
  * active `boolean`
  * branch_filter `string`
  * config **required** [CreateHookOptionConfig](#createhookoptionconfig)
  * events `array`
    * items `string`
  * type **required** `string` (values: dingtalk, discord, gitea, gogs, msteams, slack, telegram, feishu)

### CreateHookOptionConfig
* CreateHookOptionConfig `object`: CreateHookOptionConfig has all config options in it

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
  * description `string`
  * name **required** `string`

### CreateMilestoneOption
* CreateMilestoneOption `object`: CreateMilestoneOption options for creating a milestone
  * description `string`
  * due_on `string`
  * state `string` (values: open, closed)
  * title `string`

### CreateOAuth2ApplicationOptions
* CreateOAuth2ApplicationOptions `object`: CreateOAuth2ApplicationOptions holds options to create an oauth2 application
  * name `string`
  * redirect_uris `array`
    * items `string`

### CreateOrgOption
* CreateOrgOption `object`: CreateOrgOption options for creating an organization
  * description `string`
  * full_name `string`
  * location `string`
  * repo_admin_change_team_access `boolean`
  * username **required** `string`
  * visibility `string` (values: public, limited, private): possible values are `public` (default), `limited` or `private`
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

### CreatePullReviewComment
* CreatePullReviewComment `object`: CreatePullReviewComment represent a review comment for creation api
  * body `string`
  * new_position `integer`: if comment to new file line or 0
  * old_position `integer`: if comment to old file line or 0
  * path `string`: the tree path

### CreatePullReviewOptions
* CreatePullReviewOptions `object`: CreatePullReviewOptions are options to create a pull review
  * body `string`
  * comments `array`
    * items [CreatePullReviewComment](#createpullreviewcomment)
  * commit_id `string`
  * event [ReviewStateType](#reviewstatetype)

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
  * default_branch `string`: DefaultBranch of the repository (used when initializes and in template)
  * description `string`: Description of the repository to create
  * gitignores `string`: Gitignores to use
  * issue_labels `string`: Issue Label set to use
  * license `string`: License to use
  * name **required** `string`: Name of the repository to create
  * private `boolean`: Whether the repository is private
  * readme `string`: Readme of the repository to create
  * template `boolean`: Whether the repository is template
  * trust_model `string` (values: default, collaborator, committer, collaboratorcommitter): TrustModel of the repository

### CreateStatusOption
* CreateStatusOption `object`: CreateStatusOption holds the information needed to create a new Status for a Commit
  * context `string`
  * description `string`
  * state [StatusState](#statusstate)
  * target_url `string`

### CreateTeamOption
* CreateTeamOption `object`: CreateTeamOption options for creating a team
  * can_create_org_repo `boolean`
  * description `string`
  * includes_all_repositories `boolean`
  * name **required** `string`
  * permission `string` (values: read, write, admin)
  * units `array`
    * items `string`

### CreateUserOption
* CreateUserOption `object`: CreateUserOption create user options
  * email **required** `string`
  * full_name `string`
  * login_name `string`
  * must_change_password `boolean`
  * password **required** `string`
  * send_notify `boolean`
  * source_id `integer`
  * username **required** `string`

### Cron
* Cron `object`: Cron represents a Cron task
  * exec_times `integer`
  * name `string`
  * next `string`
  * prev `string`
  * schedule `string`

### DeleteEmailOption
* DeleteEmailOption `object`: DeleteEmailOption options when deleting email addresses
  * emails `array`: email addresses to delete
    * items `string`

### DeleteFileOptions
* DeleteFileOptions `object`: DeleteFileOptions options for deleting files (used for other File structs below)
  * author [Identity](#identity)
  * branch `string`: branch (optional) to base this file from. if not given, the default branch is used
  * committer [Identity](#identity)
  * dates [CommitDateOptions](#commitdateoptions)
  * message `string`: message (optional) for the commit of this file. if not supplied, a default message will be used
  * new_branch `string`: new_branch (optional) will make a new branch from `branch` before creating the file
  * sha **required** `string`: sha is the SHA for the file that already exists

### DeployKey
* DeployKey `object`: DeployKey a deploy key
  * created_at `string`
  * fingerprint `string`
  * id `integer`
  * key `string`
  * key_id `integer`
  * read_only `boolean`
  * repository [Repository](#repository)
  * title `string`
  * url `string`

### EditAttachmentOptions
* EditAttachmentOptions `object`: EditAttachmentOptions options for editing attachments
  * name `string`

### EditBranchProtectionOption
* EditBranchProtectionOption `object`: EditBranchProtectionOption options for editing a branch protection
  * approvals_whitelist_teams `array`
    * items `string`
  * approvals_whitelist_username `array`
    * items `string`
  * block_on_official_review_requests `boolean`
  * block_on_outdated_branch `boolean`
  * block_on_rejected_reviews `boolean`
  * dismiss_stale_approvals `boolean`
  * enable_approvals_whitelist `boolean`
  * enable_merge_whitelist `boolean`
  * enable_push `boolean`
  * enable_push_whitelist `boolean`
  * enable_status_check `boolean`
  * merge_whitelist_teams `array`
    * items `string`
  * merge_whitelist_usernames `array`
    * items `string`
  * protected_file_patterns `string`
  * push_whitelist_deploy_keys `boolean`
  * push_whitelist_teams `array`
    * items `string`
  * push_whitelist_usernames `array`
    * items `string`
  * require_signed_commits `boolean`
  * required_approvals `integer`
  * status_check_contexts `array`
    * items `string`

### EditDeadlineOption
* EditDeadlineOption `object`: EditDeadlineOption options for creating a deadline
  * due_date **required** `string`

### EditGitHookOption
* EditGitHookOption `object`: EditGitHookOption options when modifying one Git hook
  * content `string`

### EditHookOption
* EditHookOption `object`: EditHookOption options when modify one hook
  * active `boolean`
  * branch_filter `string`
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
  * unset_due_date `boolean`

### EditLabelOption
* EditLabelOption `object`: EditLabelOption options for editing a label
  * color `string`
  * description `string`
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
  * repo_admin_change_team_access `boolean`
  * visibility `string` (values: public, limited, private): possible values are `public`, `limited` or `private`
  * website `string`

### EditPullRequestOption
* EditPullRequestOption `object`: EditPullRequestOption options when modify pull request
  * assignee `string`
  * assignees `array`
    * items `string`
  * base `string`
  * body `string`
  * due_date `string`
  * labels `array`
    * items `integer`
  * milestone `integer`
  * state `string`
  * title `string`
  * unset_due_date `boolean`

### EditReactionOption
* EditReactionOption `object`: EditReactionOption contain the reaction type
  * content `string`

### EditReleaseOption
* EditReleaseOption `object`: EditReleaseOption options when editing a release
  * body `string`
  * draft `boolean`
  * name `string`
  * prerelease `boolean`
  * tag_name `string`
  * target_commitish `string`

### EditRepoOption
* EditRepoOption `object`: EditRepoOption options when editing a repository's properties
  * allow_merge_commits `boolean`: either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. `has_pull_requests` must be `true`.
  * allow_rebase `boolean`: either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. `has_pull_requests` must be `true`.
  * allow_rebase_explicit `boolean`: either `true` to allow rebase with explicit merge commits (--no-ff), or `false` to prevent rebase with explicit merge commits. `has_pull_requests` must be `true`.
  * allow_squash_merge `boolean`: either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. `has_pull_requests` must be `true`.
  * archived `boolean`: set to `true` to archive this repository.
  * default_branch `string`: sets the default branch for this repository.
  * description `string`: a short description of the repository.
  * external_tracker [ExternalTracker](#externaltracker)
  * external_wiki [ExternalWiki](#externalwiki)
  * has_issues `boolean`: either `true` to enable issues for this repository or `false` to disable them.
  * has_projects `boolean`: either `true` to enable project unit, or `false` to disable them.
  * has_pull_requests `boolean`: either `true` to allow pull requests, or `false` to prevent pull request.
  * has_wiki `boolean`: either `true` to enable the wiki for this repository or `false` to disable it.
  * ignore_whitespace_conflicts `boolean`: either `true` to ignore whitespace for conflicts, or `false` to not ignore whitespace. `has_pull_requests` must be `true`.
  * internal_tracker [InternalTracker](#internaltracker)
  * name `string`: name of the repository
  * private `boolean`: either `true` to make the repository private or `false` to make it public.
  * template `boolean`: either `true` to make this repository a template or `false` to make it a normal repository
  * website `string`: a URL with more information about the repository.

### EditTeamOption
* EditTeamOption `object`: EditTeamOption options for editing a team
  * can_create_org_repo `boolean`
  * description `string`
  * includes_all_repositories `boolean`
  * name **required** `string`
  * permission `string` (values: read, write, admin)
  * units `array`
    * items `string`

### EditUserOption
* EditUserOption `object`: EditUserOption edit user options
  * active `boolean`
  * admin `boolean`
  * allow_create_organization `boolean`
  * allow_git_hook `boolean`
  * allow_import_local `boolean`
  * email `string`
  * full_name `string`
  * location `string`
  * login_name **required** `string`
  * max_repo_creation `integer`
  * must_change_password `boolean`
  * password `string`
  * prohibit_login `boolean`
  * source_id **required** `integer`
  * website `string`

### Email
* Email `object`: Email an email address belonging to a user
  * email `string`
  * primary `boolean`
  * verified `boolean`

### ExternalTracker
* ExternalTracker `object`: ExternalTracker represents settings for external tracker
  * external_tracker_format `string`: External Issue Tracker URL Format. Use the placeholders {user}, {repo} and {index} for the username, repository name and issue index.
  * external_tracker_style `string`: External Issue Tracker Number Format, either `numeric` or `alphanumeric`
  * external_tracker_url `string`: URL of external issue tracker.

### ExternalWiki
* ExternalWiki `object`: ExternalWiki represents setting for external wiki
  * external_wiki_url `string`: URL of external wiki.

### FileCommitResponse
* FileCommitResponse contains information generated from a Git commit for a repo's file. `object`
  * author [CommitUser](#commituser)
  * committer [CommitUser](#commituser)
  * created `string`
  * html_url `string`
  * message `string`
  * parents `array`
    * items [CommitMeta](#commitmeta)
  * sha `string`
  * tree [CommitMeta](#commitmeta)
  * url `string`

### FileDeleteResponse
* FileDeleteResponse `object`: FileDeleteResponse contains information about a repo's file that was deleted
  * commit [FileCommitResponse](#filecommitresponse)
  * content `object`
  * verification [PayloadCommitVerification](#payloadcommitverification)

### FileLinksResponse
* FileLinksResponse `object`: FileLinksResponse contains the links for a repo's file
  * git `string`
  * html `string`
  * self `string`

### FileResponse
* FileResponse `object`: FileResponse contains information about a repo's file
  * commit [FileCommitResponse](#filecommitresponse)
  * content [ContentsResponse](#contentsresponse)
  * verification [PayloadCommitVerification](#payloadcommitverification)

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

### GeneralAPISettings
* GeneralAPISettings `object`: GeneralAPISettings contains global api settings exposed by it
  * default_git_trees_per_page `integer`
  * default_max_blob_size `integer`
  * default_paging_num `integer`
  * max_response_items `integer`

### GeneralAttachmentSettings
* GeneralAttachmentSettings `object`: GeneralAttachmentSettings contains global Attachment settings exposed by API
  * allowed_types `string`
  * enabled `boolean`
  * max_files `integer`
  * max_size `integer`

### GeneralRepoSettings
* GeneralRepoSettings `object`: GeneralRepoSettings contains global repository settings exposed by API
  * http_git_disabled `boolean`
  * mirrors_disabled `boolean`

### GeneralUISettings
* GeneralUISettings `object`: GeneralUISettings contains global ui settings exposed by API
  * allowed_reactions `array`
    * items `string`
  * default_theme `string`

### GitBlobResponse
* GitBlobResponse `object`: GitBlobResponse represents a git blob
  * content `string`
  * encoding `string`
  * sha `string`
  * size `integer`
  * url `string`

### GitEntry
* GitEntry `object`: GitEntry represents a git tree
  * mode `string`
  * path `string`
  * sha `string`
  * size `integer`
  * type `string`
  * url `string`

### GitHook
* GitHook `object`: GitHook represents a Git repository hook
  * content `string`
  * is_active `boolean`
  * name `string`

### GitObject
* GitObject represents a Git object. `object`
  * sha `string`
  * type `string`
  * url `string`

### GitServiceType
* GitServiceType `integer`: GitServiceType represents a git service

### GitTreeResponse
* GitTreeResponse `object`: GitTreeResponse returns a git tree
  * page `integer`
  * sha `string`
  * total_count `integer`
  * tree `array`
    * items [GitEntry](#gitentry)
  * truncated `boolean`
  * url `string`

### Hook
* Hook `object`: Hook a hook is a web hook when one repository changed
  * active `boolean`
  * config `object`
  * created_at `string`
  * events `array`
    * items `string`
  * id `integer`
  * type `string`
  * updated_at `string`

### Identity
* Identity `object`: Identity for a person's identity like an author or committer
  * email `string`
  * name `string`

### InternalTracker
* InternalTracker `object`: InternalTracker represents settings for internal tracker
  * allow_only_contributors_to_track_time `boolean`: Let only contributors track time (Built-in issue tracker)
  * enable_issue_dependencies `boolean`: Enable dependencies for issues and pull requests (Built-in issue tracker)
  * enable_time_tracker `boolean`: Enable time tracking (Built-in issue tracker)

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
  * html_url `string`
  * id `integer`
  * is_locked `boolean`
  * labels `array`
    * items [Label](#label)
  * milestone [Milestone](#milestone)
  * number `integer`
  * original_author `string`
  * original_author_id `integer`
  * pull_request [PullRequestMeta](#pullrequestmeta)
  * ref `string`
  * repository [RepositoryMeta](#repositorymeta)
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

### IssueTemplate
* IssueTemplate `object`: IssueTemplate represents an issue template for a repository
  * about `string`
  * content `string`
  * file_name `string`
  * labels `array`
    * items `string`
  * name `string`
  * title `string`

### Label
* Label `object`: Label a label to an issue or a pr
  * color `string`
  * description `string`
  * id `integer`
  * name `string`
  * url `string`

### MarkdownOption
* MarkdownOption `object`: MarkdownOption markdown options
  * Context `string`: Context to render
  * Mode `string`: Mode to render
  * Text `string`: Text markdown to render
  * Wiki `boolean`: Is it a wiki page ?

### MergePullRequestOption
* MergePullRequestOption `object`: MergePullRequestForm form for merging Pull Request
  * Do **required** `string` (values: merge, rebase, rebase-merge, squash)
  * MergeMessageField `string`
  * MergeTitleField `string`
  * force_merge `boolean`

### MigrateRepoForm
* MigrateRepoForm `object`: MigrateRepoForm form for migrating repository
  * auth_password `string`
  * auth_token `string`
  * auth_username `string`
  * clone_addr **required** `string`
  * description `string`
  * issues `boolean`
  * labels `boolean`
  * milestones `boolean`
  * mirror `boolean`
  * private `boolean`
  * pull_requests `boolean`
  * releases `boolean`
  * repo_name **required** `string`
  * service [GitServiceType](#gitservicetype)
  * uid **required** `integer`
  * wiki `boolean`

### MigrateRepoOptions
* MigrateRepoOptions `object`: MigrateRepoOptions options for migrating repository's
  * auth_password `string`
  * auth_token `string`
  * auth_username `string`
  * clone_addr **required** `string`
  * description `string`
  * issues `boolean`
  * labels `boolean`
  * milestones `boolean`
  * mirror `boolean`
  * private `boolean`
  * pull_requests `boolean`
  * releases `boolean`
  * repo_name **required** `string`
  * repo_owner `string`: Name of User or Organisation who will own Repo after migration
  * service `string` (values: git, github, gitea, gitlab)
  * uid `integer`: deprecated (only for backwards compatibility)
  * wiki `boolean`

### Milestone
* Milestone `object`: Milestone milestone is a collection of issues on one repository
  * closed_at `string`
  * closed_issues `integer`
  * created_at `string`
  * description `string`
  * due_on `string`
  * id `integer`
  * open_issues `integer`
  * state [StateType](#statetype)
  * title `string`
  * updated_at `string`

### NotificationCount
* NotificationCount `object`: NotificationCount number of unread notifications
  * new `integer`

### NotificationSubject
* NotificationSubject `object`: NotificationSubject contains the notification subject (Issue/Pull/Commit)
  * latest_comment_url `string`
  * state [StateType](#statetype)
  * title `string`
  * type `string`
  * url `string`

### NotificationThread
* NotificationThread `object`: NotificationThread expose Notification on API
  * id `integer`
  * pinned `boolean`
  * repository [Repository](#repository)
  * subject [NotificationSubject](#notificationsubject)
  * unread `boolean`
  * updated_at `string`
  * url `string`

### OAuth2Application
* OAuth2Application represents an OAuth2 application. `object`
  * client_id `string`
  * client_secret `string`
  * created `string`
  * id `integer`
  * name `string`
  * redirect_uris `array`
    * items `string`

### Organization
* Organization `object`: Organization represents an organization
  * avatar_url `string`
  * description `string`
  * full_name `string`
  * id `integer`
  * location `string`
  * repo_admin_change_team_access `boolean`
  * username `string`
  * visibility `string`
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
  * added `array`
    * items `string`
  * author [PayloadUser](#payloaduser)
  * committer [PayloadUser](#payloaduser)
  * id `string`: sha1 hash of the commit
  * message `string`
  * modified `array`
    * items `string`
  * removed `array`
    * items `string`
  * timestamp `string`
  * url `string`
  * verification [PayloadCommitVerification](#payloadcommitverification)

### PayloadCommitVerification
* PayloadCommitVerification `object`: PayloadCommitVerification represents the GPG verification of a commit
  * payload `string`
  * reason `string`
  * signature `string`
  * signer [PayloadUser](#payloaduser)
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
  * key_type `string`
  * read_only `boolean`
  * title `string`
  * url `string`
  * user [User](#user)

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
  * is_locked `boolean`
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

### PullReview
* PullReview `object`: PullReview represents a pull request review
  * body `string`
  * comments_count `integer`
  * commit_id `string`
  * html_url `string`
  * id `integer`
  * official `boolean`
  * pull_request_url `string`
  * stale `boolean`
  * state [ReviewStateType](#reviewstatetype)
  * submitted_at `string`
  * team [Team](#team)
  * user [User](#user)

### PullReviewComment
* PullReviewComment `object`: PullReviewComment represents a comment on a pull request review
  * body `string`
  * commit_id `string`
  * created_at `string`
  * diff_hunk `string`
  * html_url `string`
  * id `integer`
  * original_commit_id `string`
  * original_position `integer`
  * path `string`
  * position `integer`
  * pull_request_review_id `integer`
  * pull_request_url `string`
  * updated_at `string`
  * user [User](#user)

### PullReviewRequestOptions
* PullReviewRequestOptions `object`: PullReviewRequestOptions are options to add or remove pull review requests
  * reviewers `array`
    * items `string`
  * team_reviewers `array`
    * items `string`

### Reaction
* Reaction `object`: Reaction contain one reaction
  * content `string`
  * created_at `string`
  * user [User](#user)

### Reference
* Reference represents a Git reference. `object`
  * object [GitObject](#gitobject)
  * ref `string`
  * url `string`

### Release
* Release `object`: Release represents a repository release
  * assets `array`
    * items [Attachment](#attachment)
  * author [User](#user)
  * body `string`
  * created_at `string`
  * draft `boolean`
  * html_url `string`
  * id `integer`
  * name `string`
  * prerelease `boolean`
  * published_at `string`
  * tag_name `string`
  * tarball_url `string`
  * target_commitish `string`
  * url `string`
  * zipball_url `string`

### RepoCommit
* RepoCommit contains information of a commit in the context of a repository. `object`
  * author [CommitUser](#commituser)
  * committer [CommitUser](#commituser)
  * message `string`
  * tree [CommitMeta](#commitmeta)
  * url `string`

### RepoTopicOptions
* RepoTopicOptions `object`: RepoTopicOptions a collection of repo topic names
  * topics `array`: list of topic names
    * items `string`

### Repository
* Repository `object`: Repository represents a repository
  * allow_merge_commits `boolean`
  * allow_rebase `boolean`
  * allow_rebase_explicit `boolean`
  * allow_squash_merge `boolean`
  * archived `boolean`
  * avatar_url `string`
  * clone_url `string`
  * created_at `string`
  * default_branch `string`
  * description `string`
  * empty `boolean`
  * external_tracker [ExternalTracker](#externaltracker)
  * external_wiki [ExternalWiki](#externalwiki)
  * fork `boolean`
  * forks_count `integer`
  * full_name `string`
  * has_issues `boolean`
  * has_projects `boolean`
  * has_pull_requests `boolean`
  * has_wiki `boolean`
  * html_url `string`
  * id `integer`
  * ignore_whitespace_conflicts `boolean`
  * internal `boolean`
  * internal_tracker [InternalTracker](#internaltracker)
  * mirror `boolean`
  * name `string`
  * open_issues_count `integer`
  * open_pr_counter `integer`
  * original_url `string`
  * owner [User](#user)
  * parent [Repository](#repository)
  * permissions [Permission](#permission)
  * private `boolean`
  * release_counter `integer`
  * size `integer`
  * ssh_url `string`
  * stars_count `integer`
  * template `boolean`
  * updated_at `string`
  * watchers_count `integer`
  * website `string`

### RepositoryMeta
* RepositoryMeta `object`: RepositoryMeta basic repository information
  * full_name `string`
  * id `integer`
  * name `string`
  * owner `string`

### ReviewStateType
* ReviewStateType `string`: ReviewStateType review state type

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

### StopWatch
* StopWatch `object`: StopWatch represent a running stopwatch
  * created `string`
  * issue_index `integer`
  * issue_title `string`
  * repo_name `string`
  * repo_owner_name `string`

### SubmitPullReviewOptions
* SubmitPullReviewOptions `object`: SubmitPullReviewOptions are options to submit a pending pull review
  * body `string`
  * event [ReviewStateType](#reviewstatetype)

### Tag
* Tag `object`: Tag represents a repository tag
  * commit [CommitMeta](#commitmeta)
  * id `string`
  * name `string`
  * tarball_url `string`
  * zipball_url `string`

### Team
* Team `object`: Team represents a team in an organization
  * can_create_org_repo `boolean`
  * description `string`
  * id `integer`
  * includes_all_repositories `boolean`
  * name `string`
  * organization [Organization](#organization)
  * permission `string` (values: none, read, write, admin, owner)
  * units `array`
    * items `string`

### TimeStamp
* TimeStamp `integer`: TimeStamp defines a timestamp

### TopicName
* TopicName `object`: TopicName a list of repo topic names
  * topics `array`
    * items `string`

### TopicResponse
* TopicResponse `object`: TopicResponse for returning topics
  * created `string`
  * id `integer`
  * repo_count `integer`
  * topic_name `string`
  * updated `string`

### TrackedTime
* TrackedTime `object`: TrackedTime worked time for an issue / pr
  * created `string`
  * id `integer`
  * issue [Issue](#issue)
  * issue_id `integer`: deprecated (only for backwards compatibility)
  * time `integer`: Time in seconds
  * user_id `integer`: deprecated (only for backwards compatibility)
  * user_name `string`

### TransferRepoOption
* TransferRepoOption `object`: TransferRepoOption options when transfer a repository's ownership
  * new_owner **required** `string`
  * team_ids `array`: ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
    * items `integer`

### UpdateFileOptions
* UpdateFileOptions `object`: UpdateFileOptions options for updating files
  * author [Identity](#identity)
  * branch `string`: branch (optional) to base this file from. if not given, the default branch is used
  * committer [Identity](#identity)
  * content **required** `string`: content must be base64 encoded
  * dates [CommitDateOptions](#commitdateoptions)
  * from_path `string`: from_path (optional) is the path of the original file which will be moved/renamed to the path in the URL
  * message `string`: message (optional) for the commit of this file. if not supplied, a default message will be used
  * new_branch `string`: new_branch (optional) will make a new branch from `branch` before creating the file
  * sha **required** `string`: sha is the SHA for the file that already exists

### User
* User `object`: User represents a user
  * avatar_url `string`: URL to the user's avatar
  * created `string`
  * email `string`
  * full_name `string`: the user's full name
  * id `integer`: the user's id
  * is_admin `boolean`: Is the user an administrator
  * language `string`: User locale
  * last_login `string`
  * login `string`: the user's username

### UserHeatmapData
* UserHeatmapData `object`: UserHeatmapData represents the data needed to create a heatmap
  * contributions `integer`
  * timestamp [TimeStamp](#timestamp)

### WatchInfo
* WatchInfo `object`: WatchInfo represents an API watch status of one repository
  * created_at `string`
  * ignored `boolean`
  * reason `object`
  * repository_url `string`
  * subscribed `boolean`
  * url `string`


