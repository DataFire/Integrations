# @datafire/fecru_local

Client library for Fisheye Crucible

## Installation and Usage
```bash
npm install --save @datafire/fecru_local
```
```js
let fecru_local = require('@datafire/fecru_local').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### rest_service_fecru.admin.groups.get
Retrieve a page of groups.


```js
fecru_local.rest_service_fecru.admin.groups.get({}, context)
```

#### Input
* input `object`
  * prefix `string`: filter groups by name prefix

#### Output
*Output schema unknown*

### rest_service_fecru.admin.groups.post
Creates a new user group.


```js
fecru_local.rest_service_fecru.admin.groups.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### rest_service_fecru.admin.groups.name.delete
Deletes a group by name


```js
fecru_local.rest_service_fecru.admin.groups.name.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: group name

#### Output
*Output schema unknown*

### rest_service_fecru.admin.groups.name.get
Retrieve a group by name.


```js
fecru_local.rest_service_fecru.admin.groups.name.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: group name

#### Output
*Output schema unknown*

### rest_service_fecru.admin.groups.name.put
Updates an existing group.


```js
fecru_local.rest_service_fecru.admin.groups.name.put({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: group name

#### Output
*Output schema unknown*

### rest_service_fecru.admin.groups.name.users.delete
Removes user from group


```js
fecru_local.rest_service_fecru.admin.groups.name.users.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: group name

#### Output
*Output schema unknown*

### listGroupUsers
Lists group's user names


```js
fecru_local.listGroupUsers({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: group name

#### Output
*Output schema unknown*

### rest_service_fecru.admin.groups.name.users.put
Adds user to group


```js
fecru_local.rest_service_fecru.admin.groups.name.users.put({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: group name

#### Output
*Output schema unknown*

### rest_service_fecru.admin.permission_schemes.get
Retrieve a page of permission schemes.


```js
fecru_local.rest_service_fecru.admin.permission_schemes.get({}, context)
```

#### Input
* input `object`
  * name `string`: permission scheme name part filter, case insensitive, optional

#### Output
*Output schema unknown*

### rest_service_fecru.admin.permission_schemes.post
Creates a new permission scheme. The new permission scheme is blank or can be created from another existing permission scheme.


```js
fecru_local.rest_service_fecru.admin.permission_schemes.post({}, context)
```

#### Input
* input `object`
  * copyFrom `string`: if set, the new permission scheme will be a copy of permissionSchemeName

#### Output
*Output schema unknown*

### rest_service_fecru.admin.permission_schemes.name.delete
Deletes a permission scheme by name


```js
fecru_local.rest_service_fecru.admin.permission_schemes.name.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### rest_service_fecru.admin.permission_schemes.name.get
Retrieve a permission scheme by name


```js
fecru_local.rest_service_fecru.admin.permission_schemes.name.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### rest_service_fecru.admin.permission_schemes.name.put
Updates an existing permission scheme.


```js
fecru_local.rest_service_fecru.admin.permission_schemes.name.put({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### deletePermissionSchemeAnonymousUsers
Removes anonymous-user permission [action name] from given permission scheme


```js
fecru_local.deletePermissionSchemeAnonymousUsers({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### listAnonymousUsersPrincipalAssociation
Retrieve a page of anonymous users permissions [action name] for given permission scheme.


```js
fecru_local.listAnonymousUsersPrincipalAssociation({
  "name": ""
}, context)
```

#### Input
* input `object`
  * action `string`: action name
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### addPermissionSchemeAnonymousUsers
Add anonymous-user permission [action name] to given permission scheme
 List of available action names:


```js
fecru_local.addPermissionSchemeAnonymousUsers({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### deletePermissionSchemeGroup
Removes group permission [group name, action name] from given permission scheme


```js
fecru_local.deletePermissionSchemeGroup({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### listGroupPrincipalAssociation
Retrieve a page of group permissions [group name, action name] for given permission scheme.


```js
fecru_local.listGroupPrincipalAssociation({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name_query `string`: group name
  * action `string`: action name
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### addPermissionSchemeGroup
Add group permission [group name, action name] to given permission scheme
 List of available action names:


```js
fecru_local.addPermissionSchemeGroup({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### deletePermissionSchemeLoggedUsers
Removes logged-in-users permission [action name] from given permission scheme


```js
fecru_local.deletePermissionSchemeLoggedUsers({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### listLoggedUsersPrincipalAssociation
Retrieve a page of logged in users permissions [action name] for given permission scheme.


```js
fecru_local.listLoggedUsersPrincipalAssociation({
  "name": ""
}, context)
```

#### Input
* input `object`
  * action `string`: action name
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### addPermissionSchemeLoggedUsers
Add logged-in-users permission [action name] to given permission scheme
 List of available action names:


```js
fecru_local.addPermissionSchemeLoggedUsers({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### listProjects
Retrieve a page of projects for given permission scheme.


```js
fecru_local.listProjects({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### deletePermissionSchemeRole
Removes review-role permission [role name, action name] from given permission scheme


```js
fecru_local.deletePermissionSchemeRole({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### listRolesPrincipalAssociation
Retrieve a page of review-roles permissions [role name, action name] for given permission scheme.


```js
fecru_local.listRolesPrincipalAssociation({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name_query `string`: role name
  * action `string`: action name
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### addPermissionSchemeReviewRole
Add review-role permission [role name, action name] to given permission scheme
 List of available action names:
 

 List of available role names:


```js
fecru_local.addPermissionSchemeReviewRole({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### deletePermissionSchemeUser
Removes user permission [username, action name] from given permission scheme


```js
fecru_local.deletePermissionSchemeUser({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### listUserPrincipalAssociation
Retrieve a page of user permissions [username, action name] for given permission scheme.


```js
fecru_local.listUserPrincipalAssociation({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name_query `string`: permission scheme name
  * action `string`: action name
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### addPermissionSchemeUser
Add user permission [username, action name] to given permission scheme
 List of available action names:


```js
fecru_local.addPermissionSchemeUser({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: permission scheme name

#### Output
*Output schema unknown*

### rest_service_fecru.admin.projects.get
Retrieve a page of projects.


```js
fecru_local.rest_service_fecru.admin.projects.get({}, context)
```

#### Input
* input `object`
  * name `string`: project's name part filter, optional
  * key `string`: project's key part filter, optional
  * defaultRepositoryName `string`: project's default repository key part filter, optional
  * permissionSchemeName `string`: project's permission scheme pare name filter, optional

#### Output
*Output schema unknown*

### rest_service_fecru.admin.projects.post
Creates a new project.


```js
fecru_local.rest_service_fecru.admin.projects.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### rest_service_fecru.admin.projects.key.delete
Deletes a project by key (including all reviews in this project).
 Use 
 to move reviews to another project.


```js
fecru_local.rest_service_fecru.admin.projects.key.delete({
  "key": ""
}, context)
```

#### Input
* input `object`
  * deleteProjectReviews `boolean`: if true deletes reviews in project
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### rest_service_fecru.admin.projects.key.get
Retrieve a project by key.


```js
fecru_local.rest_service_fecru.admin.projects.key.get({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### rest_service_fecru.admin.projects.key.put
Updates an existing project.


```js
fecru_local.rest_service_fecru.admin.projects.key.put({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### deleteAllowedReviewerGroup
Delete group from project's allowed reviewer group list


```js
fecru_local.deleteAllowedReviewerGroup({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### allowedReviewerGroups
Retrieves project's allowed reviewer groups


```js
fecru_local.allowedReviewerGroups({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### addAllowedReviewerGroup
Add group to project's allowed reviewer group list


```js
fecru_local.addAllowedReviewerGroup({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### deleteAllowedReviewerUser
Remove user from project's allowed reviewer users list


```js
fecru_local.deleteAllowedReviewerUser({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### allowedReviewerUsers
Retrieves project's allowed reviewer users


```js
fecru_local.allowedReviewerUsers({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### addAllowedReviewerUser
Add user to project's allowed reviewer users list


```js
fecru_local.addAllowedReviewerUser({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### deleteDefaultReviewerGroup
Delete group from project's default reviewer group list


```js
fecru_local.deleteDefaultReviewerGroup({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### defaultReviewerGroups
Retrieves project's default reviewer groups


```js
fecru_local.defaultReviewerGroups({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### addDefaultReviewerGroup
Add group to project's default reviewer group list


```js
fecru_local.addDefaultReviewerGroup({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### deleteDefaultReviewerUser
Remove user from project's default reviewer users list


```js
fecru_local.deleteDefaultReviewerUser({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### listDefaultReviewerUsers
Retrieves project's default reviewer users


```js
fecru_local.listDefaultReviewerUsers({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### addDefaultReviewerUser
Add user to project's default reviewer users list


```js
fecru_local.addDefaultReviewerUser({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: project key

#### Output
*Output schema unknown*

### moveAllReviews
Move reviews and snippets from source project to destination project


```js
fecru_local.moveAllReviews({
  "sourceProjectKey": "",
  "destinationProjectKey": ""
}, context)
```

#### Input
* input `object`
  * sourceProjectKey **required** `string`: project key of reviews and snippets source project
  * destinationProjectKey **required** `string`: project key of reviews and snippets destination project

#### Output
*Output schema unknown*

### rest_service_fecru.admin.repositories.get
Retrieve a page of repositories. Repository properties with default values may not be returned.


```js
fecru_local.rest_service_fecru.admin.repositories.get({}, context)
```

#### Input
* input `object`
  * type `string`: filter repositories by repository type: svn, git, hg, cvs, p4, ...
  * enabled `boolean`: filter repositories by enabled flag
  * started `boolean`: filter repositories by started flag

#### Output
*Output schema unknown*

### rest_service_fecru.admin.repositories.post
Creates a repository.


```js
fecru_local.rest_service_fecru.admin.repositories.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### addRepository
Adds repository


```js
fecru_local.addRepository(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### rest_service_fecru.admin.repositories_v1.repository.get
Returns information about the status of the repository and the current indexing status


```js
fecru_local.rest_service_fecru.admin.repositories_v1.repository.get({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*

### deleteRepository
Deletes repository.
 Warning: you can not undo this operation


```js
fecru_local.deleteRepository({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to delete

#### Output
*Output schema unknown*

### disableRepository
Disables repository.


```js
fecru_local.disableRepository({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to disable

#### Output
*Output schema unknown*

### enableRepository
Enables repository.


```js
fecru_local.enableRepository({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to enable

#### Output
*Output schema unknown*

### reindexChangesetComments
Rebuilds the changeset discussion index for the specified repository. The index is used to display changeset
 discussions in activity streams.


```js
fecru_local.reindexChangesetComments({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to perform the operation for

#### Output
*Output schema unknown*

### rest_service_fecru.admin.repositories_v1.repository.reindex_linecount.post
Re-indexes the linecount data used to generate the LOC graphs. The linecount data will be recalculated in daily
 buckets based on the server timezone.


```js
fecru_local.rest_service_fecru.admin.repositories_v1.repository.reindex_linecount.post({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to re-index

#### Output
*Output schema unknown*

### doReviewRevisionReindex
Re-indexes all the Crucible revision data (which revisions have been reviewed)


```js
fecru_local.doReviewRevisionReindex({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * synchronous `boolean`: if true will wait for the indexing to finish before returning
  * repository **required** `string`: the key of the repository to reindex

#### Output
*Output schema unknown*

### rebuildSearchIndex
Rebuilds the search index data for the given repository. This will rebuild the data used to search by path,
 commit message and comitter, also used for activity streams and JIRA integration.


```js
fecru_local.rebuildSearchIndex({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to re-index.

#### Output
*Output schema unknown*

### rest_service_fecru.admin.repositories_v1.repository.reindex_source.post
Deletes the existing cache and re-indexes the repository from scratch.
 For large or slow repositories this may take some time, during which some functionality will be unavailable.
 This action will also restart the repository.


```js
fecru_local.rest_service_fecru.admin.repositories_v1.repository.reindex_source.post({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * clone `boolean`: if true and the repository is a dvcs repository (git or mercurial) it will re-clone the repository
  * repository **required** `string`: the key of the repository to reindex

#### Output
*Output schema unknown*

### rest_service_fecru.admin.repositories_v1.repository.rescan_metadata.post
Re-scans the repository metadata for SVN and Perforce repositories. Only valid for Perforce and SVN repositories.


```js
fecru_local.rest_service_fecru.admin.repositories_v1.repository.rescan_metadata.post({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * from `integer`: the revision number to start at
  * to `integer`: the revision number to end at
  * repository **required** `string`: the key of the repository to re-scan

#### Output
*Output schema unknown*

### scan
Runs an incremental repository index now.  This is the same operation as triggered by scheduled indexing.
 Can be called using the REST Api Token to authorize.


```js
fecru_local.scan({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * synchronous `boolean`: if true will wait for the indexing to finish before returning
  * repository **required** `string`: the key of the repository to run scan for

#### Output
*Output schema unknown*

### scanCvs
Scans the whole CVS repository for any changes since the last scan. Only valid for CVS repositories.


```js
fecru_local.scanCvs({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to scan

#### Output
*Output schema unknown*

### startRepository
Starts the repository.


```js
fecru_local.startRepository({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to start

#### Output
*Output schema unknown*

### stopRepository
Stops the repository. Does not wait for the repository to stop before returning.


```js
fecru_local.stopRepository({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to stop

#### Output
*Output schema unknown*

### rest_service_fecru.admin.repositories.repository.delete
Deletes a repository by key


```js
fecru_local.rest_service_fecru.admin.repositories.repository.delete({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*

### rest_service_fecru.admin.repositories.repository.get
Retrieve a repository by key. Repository properties with default values may not be returned.


```js
fecru_local.rest_service_fecru.admin.repositories.repository.get({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*

### rest_service_fecru.admin.repositories.repository.put
Updates an existing repository.


```js
fecru_local.rest_service_fecru.admin.repositories.repository.put({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*

### fullIncrementalIndex
Runs an full incremental repository index.
 For CVS: scans the whole CVS repository for any changes since the last scan.
 For other repository types will trigger an incremental index.


```js
fecru_local.fullIncrementalIndex({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to scan

#### Output
*Output schema unknown*

### incrementalIndex
Runs an incremental repository index.  This is the same operation as triggered by scheduled indexing.
 Can be called using the REST API Token to authorize.


```js
fecru_local.incrementalIndex({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * wait `boolean`: if true will wait for the indexing to finish before returning
  * repository **required** `string`: the key of the repository to stop

#### Output
*Output schema unknown*

### permissions
Retrieve repository permissions properties.


```js
fecru_local.permissions({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*

### updatePermissions
Updates repository permissions properties.

 Valid permission settings: any combination of useDefaults, allowAnonymous, allowLoggedIn.


```js
fecru_local.updatePermissions({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*

### removeGroupToPermissions
Delete group from repository allowed groups


```js
fecru_local.removeGroupToPermissions({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*

### permissionsGroups
Note: use /rest-service-fecru/admin/repository-permissions/ endpoint for full repository permission administration functionality
 Lists groups allowed to access repository.


```js
fecru_local.permissionsGroups({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*

### addGroupToPermissions
Note: use /rest-service-fecru/admin/repository-permissions/ endpoint for full repository permission administration functionality
 Adds group to repository allowed groups


```js
fecru_local.addGroupToPermissions({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*

### reindexChangesetDiscussion
Rebuilds the changeset discussion index for the specified repository. The index is used to display changeset
 discussions in activity streams.


```js
fecru_local.reindexChangesetDiscussion({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to perform the operation for

#### Output
*Output schema unknown*

### rest_service_fecru.admin.repositories.repository.reindex_linecount.put
Re-indexes the linecount data used to generate the LOC graphs. The linecount data will be recalculated in daily
 buckets based on the server timezone.


```js
fecru_local.rest_service_fecru.admin.repositories.repository.reindex_linecount.put({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to re-index

#### Output
*Output schema unknown*

### reindexReviews
Re-indexes all the Crucible revision data (which revisions have been reviewed)


```js
fecru_local.reindexReviews({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to reindex

#### Output
*Output schema unknown*

### reindexSearch
Rebuilds the search index data for the given repository. This will rebuild the data used to search by path,
 commit message and committer, also used for activity streams and JIRA integration.


```js
fecru_local.reindexSearch({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to re-index.

#### Output
*Output schema unknown*

### rest_service_fecru.admin.repositories.repository.reindex_source.put
Deletes the existing cache and re-indexes the repository from scratch.
 For large or slow repositories this may take some time, during which some functionality will be unavailable.
 This action will also restart the repository.


```js
fecru_local.rest_service_fecru.admin.repositories.repository.reindex_source.put({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * clone `boolean`: if true and the repository is a dvcs repository (git or mercurial) it will re-clone the repository before re-indexing
  * repository **required** `string`: the key of the repository to reindex

#### Output
*Output schema unknown*

### rest_service_fecru.admin.repositories.repository.rescan_metadata.put
Re-scans the repository metadata. Only valid for Perforce and SVN repositories.


```js
fecru_local.rest_service_fecru.admin.repositories.repository.rescan_metadata.put({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * from `string`: the revision number to start at
  * to `string`: the revision number to end at
  * repository **required** `string`: the key of the repository to re-scan

#### Output
*Output schema unknown*

### start
Starts repository. Does not wait for the repository to start before returning.


```js
fecru_local.start({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to start

#### Output
*Output schema unknown*

### stop
Stops repository. Does not wait for the repository to stop before returning.


```js
fecru_local.stop({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to stop

#### Output
*Output schema unknown*

### repositoryUpdates
Retrieves repository updates properties.


```js
fecru_local.repositoryUpdates({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: repository key

#### Output
*Output schema unknown*

### updateRepositoryUpdates



```js
fecru_local.updateRepositoryUpdates({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: repository key

#### Output
*Output schema unknown*

### defaultPermissions
Retrieve default repository permissions properties.


```js
fecru_local.defaultPermissions(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### updateDefaultPermissions
Updates default repository permissions properties.

 Valid permission settings: any combination of allowAnonymous, allowLoggedIn


```js
fecru_local.updateDefaultPermissions(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### rest_service_fecru.admin.users.get
Retrieve a page of users.


```js
fecru_local.rest_service_fecru.admin.users.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### rest_service_fecru.admin.users.post
Creates a new user. Tries to add the user to fisheye-users and crucible-users groups if those exist.


```js
fecru_local.rest_service_fecru.admin.users.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### rest_service_fecru.admin.users.name.delete
Deletes a user by name


```js
fecru_local.rest_service_fecru.admin.users.name.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: user name

#### Output
*Output schema unknown*

### rest_service_fecru.admin.users.name.get
Retrieve a user by name.


```js
fecru_local.rest_service_fecru.admin.users.name.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: user name

#### Output
*Output schema unknown*

### rest_service_fecru.admin.users.name.put
Updates an existing user.


```js
fecru_local.rest_service_fecru.admin.users.name.put({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: user name

#### Output
*Output schema unknown*

### rest_service_fecru.admin.users.name.groups.delete
Removes user from group


```js
fecru_local.rest_service_fecru.admin.users.name.groups.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: user name

#### Output
*Output schema unknown*

### listUserGroups
Lists user's group names


```js
fecru_local.listUserGroups({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: user name

#### Output
*Output schema unknown*

### rest_service_fecru.admin.users.name.groups.put
Adds user to group


```js
fecru_local.rest_service_fecru.admin.users.name.groups.put({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: user name

#### Output
*Output schema unknown*

### login
Get the user authentication token.


```js
fecru_local.login(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### rest_service_fecru.indexing_status_v1.status.repository.get
Returns indexing status of given repository.


```js
fecru_local.rest_service_fecru.indexing_status_v1.status.repository.get({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository to get status of

#### Output
*Output schema unknown*

### getRecent
Get a list of recently visited items for the currently logged in user.


```js
fecru_local.getRecent(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getRecentDetailed
Get a list of recently visisted items for the currently logged in user, including the detailed entities.


```js
fecru_local.getRecentDetailed(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getRecentProjects
Get a list of recently visited projects for the currently logged in user.


```js
fecru_local.getRecentProjects(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getRecentProjectsDetailed
Get a list of recently visited projects for the currently logged in Project, including the detailed entities.


```js
fecru_local.getRecentProjectsDetailed(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getRecentRepositories
Get a list of recently visited repositories for the currently logged in user.


```js
fecru_local.getRecentRepositories(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getRecentRepositoriesDetailed
Get a list of recently visisted repositories for the currently logged in user, including the detailed entities.


```js
fecru_local.getRecentRepositoriesDetailed(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getRecentReviews
Get a list of recently visited reviews for the currently logged in user.


```js
fecru_local.getRecentReviews(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getRecentReviewsDetailed
Get a list of recently visited reviews for the currently logged in user, including the detailed entities.


```js
fecru_local.getRecentReviewsDetailed(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getRecentSnippets
Get a list of recently visited snippets for the currently logged in user.


```js
fecru_local.getRecentSnippets(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getRecentSnippetsDetailed
Get a list of recently visited snippets for the currently logged in user, including the detailed entities.


```js
fecru_local.getRecentSnippetsDetailed(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getRecentUsers
Get a list of recently visited users for the currently logged in user.


```js
fecru_local.getRecentUsers(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getRecentUsersDetailed
Get a list of recently visited users for the currently logged in user, including the detailed entities.


```js
fecru_local.getRecentUsersDetailed(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getInfo
Provides general information about the server's configuration.


```js
fecru_local.getInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### doShareContent



```js
fecru_local.doShareContent(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### setPref
Using POST method to set a user preference.
 If repo is not set, the preference will be recognised as a global preference.


```js
fecru_local.setPref(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getGlobalPref
Getting user's global preference


```js
fecru_local.getGlobalPref({
  "property": ""
}, context)
```

#### Input
* input `object`
  * property **required** `string`: the property(preference) name

#### Output
*Output schema unknown*

### getRepoPref
Getting user's preference related to a certain repository


```js
fecru_local.getRepoPref({
  "property": "",
  "repository": ""
}, context)
```

#### Input
* input `object`
  * property **required** `string`: the property(preference) name
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
