# @datafire/appveyor

Client library for AppVeyor

## Installation and Usage
```bash
npm install --save datafire @datafire/appveyor
```

```js
let datafire = require('datafire');
let appveyor = require('@datafire/appveyor').actions;

let account = {
  apiToken: "",
}
let context = new datafire.Context({
  accounts: {
    appveyor: account,
  }
})

appveyor.encryptValue({}, context).then(data => {
  console.log(data);
})
```

## Description
AppVeyor is a hosted continuous integration service which runs on Microsoft
Windows.  The AppVeyor REST API provides a RESTful way to interact with the
AppVeyor service.  This includes managing projects, builds, deployments,
and the teams that build them.

Additional help and discussion of the AppVeyor REST API is available at
http://help.appveyor.com/discussions

This Swagger definition is an **unofficial** description of the AppVeyor
REST API maintained at https://github.com/kevinoid/appveyor-swagger
Please report any issues or suggestions for this Swagger definition at
https://github.com/kevinoid/appveyor-swagger/issues/new

#### API Conventions

Fields which are missing from update operations (`PUT` requests) are
typically reset to their default values.  So although most fields are not
technically required, they should usually be specified in practice.


## Actions
### encryptValue
Encrypt a value for use in StoredValue.


```js
appveyor.encryptValue({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### getBuildLog
Download build log


```js
appveyor.getBuildLog({
  "jobId": ""
}, context)
```

#### Parameters
* jobId (string) **required** - Build ID (`jobId` property of `BuildJob`)

### startBuild
Start build of branch most recent commit


```js
appveyor.startBuild({
  "body": {
    "accountName": "",
    "projectSlug": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### cancelBuild
Cancel build


```js
appveyor.cancelBuild({
  "accountName": "",
  "projectSlug": "",
  "buildVersion": ""
}, context)
```

#### Parameters
* accountName (string) **required** - AppVeyor account name (`accountName` property of `UserAccount`)
* projectSlug (string) **required** - Project Slug
* buildVersion (string) **required** - Build Version (`version` property of `Build`)

### getCollaborators
Get collaborators


```js
appveyor.getCollaborators(null, context)
```


### addCollaborator
Add collaborator


```js
appveyor.addCollaborator({
  "body": {
    "email": "",
    "roleId": 0
  }
}, context)
```

#### Parameters
* body (object) **required** - Technically `roleId` has default value 0 and is not required, but

### updateCollaborator
Update collaborator


```js
appveyor.updateCollaborator({
  "body": {
    "userId": 0,
    "roleId": 0
  }
}, context)
```

#### Parameters
* body (object) **required** - Technically `userId` and `roleId` have default value 0 and are not

### deleteCollaborator
Delete collaborator


```js
appveyor.deleteCollaborator({
  "userId": 0
}, context)
```

#### Parameters
* userId (integer) **required** - User ID

### getCollaborator
Get collaborator


```js
appveyor.getCollaborator({
  "userId": 0
}, context)
```

#### Parameters
* userId (integer) **required** - User ID

### startDeployment
Start deployment


```js
appveyor.startDeployment({
  "body": {
    "environmentName": "",
    "accountName": "",
    "projectSlug": "",
    "buildVersion": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### cancelDeployment
Cancel deployment


```js
appveyor.cancelDeployment({
  "body": {
    "deploymentId": 0
  }
}, context)
```

#### Parameters
* body (object) **required**

### getDeployment
Get deployment


```js
appveyor.getDeployment({
  "deploymentId": 0
}, context)
```

#### Parameters
* deploymentId (integer) **required** - Deployment ID (`deploymentId` property of `Deployment`)

### getEnvironments
Get environments


```js
appveyor.getEnvironments(null, context)
```


### addEnvironment
Add environment


```js
appveyor.addEnvironment({
  "body": {
    "name": "",
    "provider": "",
    "settings": {}
  }
}, context)
```

#### Parameters
* body (object) **required**

### updateEnvironment
Update environment


```js
appveyor.updateEnvironment({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### deleteEnvironment
Delete environment


```js
appveyor.deleteEnvironment({
  "deploymentEnvironmentId": 0
}, context)
```

#### Parameters
* deploymentEnvironmentId (integer) **required** - Deployment Environment ID (`deploymentEnvironmentId` property of `DeploymentEnvironment`)

### getEnvironmentDeployments
Get environment deployments


```js
appveyor.getEnvironmentDeployments({
  "deploymentEnvironmentId": 0
}, context)
```

#### Parameters
* deploymentEnvironmentId (integer) **required** - Deployment Environment ID (`deploymentEnvironmentId` property of `DeploymentEnvironment`)

### getEnvironmentSettings
Get environment settings


```js
appveyor.getEnvironmentSettings({
  "deploymentEnvironmentId": 0
}, context)
```

#### Parameters
* deploymentEnvironmentId (integer) **required** - Deployment Environment ID (`deploymentEnvironmentId` property of `DeploymentEnvironment`)

### getProjects
Get projects


```js
appveyor.getProjects(null, context)
```


### addProject
Add project


```js
appveyor.addProject({
  "body": {
    "repositoryProvider": "",
    "repositoryName": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - `repositoryAuthentication` is only used for git, mercurial, subversion `repositoryProvider`.

### updateProject
Update project


```js
appveyor.updateProject({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### getPublicProjectStatusBadge
Get status badge image for a project with a public repository


```js
appveyor.getPublicProjectStatusBadge({
  "badgeRepoProvider": "",
  "repoAccountName": "",
  "repoSlug": ""
}, context)
```

#### Parameters
* branch (string) - Repository Branch
* svg (boolean) - Return an SVG image instead of PNG?  Exclusive with `retina`.
* retina (boolean) - Return a larger image suitable for retina displays?  Exclusive with `svg`.
* passingText (string) - Text to show in badge when build is passing.
* failingText (string) - Text to show in badge when build is failing.
* pendingText (string) - Text to show in badge when build is pending.
* badgeRepoProvider (string) **required** - Repository provider supported for badges
* repoAccountName (string) **required** - Account name with repository provider
* repoSlug (string) **required** - Slug (URL component) of repository.

### getProjectStatusBadge
Get project status badge image


```js
appveyor.getProjectStatusBadge({
  "webhookId": ""
}, context)
```

#### Parameters
* svg (boolean) - Return an SVG image instead of PNG?  Exclusive with `retina`.
* retina (boolean) - Return a larger image suitable for retina displays?  Exclusive with `svg`.
* passingText (string) - Text to show in badge when build is passing.
* failingText (string) - Text to show in badge when build is failing.
* pendingText (string) - Text to show in badge when build is pending.
* webhookId (string) **required** - Project webhook ID (`webhookId` from `ProjectWithConfiguration`)

### getProjectBranchStatusBadge
Get project branch status badge image


```js
appveyor.getProjectBranchStatusBadge({
  "webhookId": "",
  "buildBranch": ""
}, context)
```

#### Parameters
* svg (boolean) - Return an SVG image instead of PNG?  Exclusive with `retina`.
* retina (boolean) - Return a larger image suitable for retina displays?  Exclusive with `svg`.
* passingText (string) - Text to show in badge when build is passing.
* failingText (string) - Text to show in badge when build is failing.
* pendingText (string) - Text to show in badge when build is pending.
* webhookId (string) **required** - Project webhook ID (`webhookId` from `ProjectWithConfiguration`)
* buildBranch (string) **required** - Build Branch

### deleteProject
Delete project


```js
appveyor.deleteProject({
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Parameters
* accountName (string) **required** - AppVeyor account name (`accountName` property of `UserAccount`)
* projectSlug (string) **required** - Project Slug

### getProjectLastBuild
Get project last build


```js
appveyor.getProjectLastBuild({
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Parameters
* accountName (string) **required** - AppVeyor account name (`accountName` property of `UserAccount`)
* projectSlug (string) **required** - Project Slug

### getProjectLastBuildBranch
Get project last branch build


```js
appveyor.getProjectLastBuildBranch({
  "accountName": "",
  "projectSlug": "",
  "buildBranch": ""
}, context)
```

#### Parameters
* accountName (string) **required** - AppVeyor account name (`accountName` property of `UserAccount`)
* projectSlug (string) **required** - Project Slug
* buildBranch (string) **required** - Build Branch

### getProjectBuildByVersion
Get project build by version


```js
appveyor.getProjectBuildByVersion({
  "accountName": "",
  "projectSlug": "",
  "buildVersion": ""
}, context)
```

#### Parameters
* accountName (string) **required** - AppVeyor account name (`accountName` property of `UserAccount`)
* projectSlug (string) **required** - Project Slug
* buildVersion (string) **required** - Build Version (`version` property of `Build`)

### deleteProjectBuildCache
Delete project build cache


```js
appveyor.deleteProjectBuildCache({
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Parameters
* accountName (string) **required** - AppVeyor account name (`accountName` property of `UserAccount`)
* projectSlug (string) **required** - Project Slug

### getProjectDeployments
Get project deployments


```js
appveyor.getProjectDeployments({
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Parameters
* accountName (string) **required** - AppVeyor account name (`accountName` property of `UserAccount`)
* projectSlug (string) **required** - Project Slug

### getProjectHistory
Get project history


```js
appveyor.getProjectHistory({
  "recordsNumber": 0,
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Parameters
* recordsNumber (integer) **required** - Number of results to include in the response.
* startBuildId (integer) - Maximum `buildId` to include in the results (exclusive).
* branch (string) - Repository Branch
* accountName (string) **required** - AppVeyor account name (`accountName` property of `UserAccount`)
* projectSlug (string) **required** - Project Slug

### getProjectSettings
Get project settings


```js
appveyor.getProjectSettings({
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Parameters
* accountName (string) **required** - AppVeyor account name (`accountName` property of `UserAccount`)
* projectSlug (string) **required** - Project Slug

### updateProjectBuildNumber
Update project build number


```js
appveyor.updateProjectBuildNumber({
  "body": {
    "nextBuildNumber": 0
  },
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Parameters
* body (object) **required**
* accountName (string) **required** - AppVeyor account name (`accountName` property of `UserAccount`)
* projectSlug (string) **required** - Project Slug

### getProjectSettingsYaml
Get project settings in YAML


```js
appveyor.getProjectSettingsYaml({
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Parameters
* accountName (string) **required** - AppVeyor account name (`accountName` property of `UserAccount`)
* projectSlug (string) **required** - Project Slug

### updateProjectSettingsYaml
Update project settings in YAML


```js
appveyor.updateProjectSettingsYaml({
  "body": "",
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Parameters
* body (string) **required**
* accountName (string) **required** - AppVeyor account name (`accountName` property of `UserAccount`)
* projectSlug (string) **required** - Project Slug

### getRoles
Get roles


```js
appveyor.getRoles(null, context)
```


### addRole
Add role


```js
appveyor.addRole({
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* body (object) **required**

### updateRole
Update role


```js
appveyor.updateRole({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### deleteRole
Delete role


```js
appveyor.deleteRole({
  "roleId": 0
}, context)
```

#### Parameters
* roleId (integer) **required** - Role ID

### getRole
Get role


```js
appveyor.getRole({
  "roleId": 0
}, context)
```

#### Parameters
* roleId (integer) **required** - Role ID

### getUsers
Get users


```js
appveyor.getUsers(null, context)
```


### addUser
Add user


```js
appveyor.addUser({
  "body": {
    "fullName": "",
    "email": "",
    "roleId": 0
  }
}, context)
```

#### Parameters
* body (object) **required**

### updateUser
Update user


```js
appveyor.updateUser({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required**

### deleteUser
Delete user


```js
appveyor.deleteUser({
  "userId": 0
}, context)
```

#### Parameters
* userId (integer) **required** - User ID

### getUser
Get user


```js
appveyor.getUser({
  "userId": 0
}, context)
```

#### Parameters
* userId (integer) **required** - User ID

