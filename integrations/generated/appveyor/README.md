# @datafire/appveyor

Client library for AppVeyor

## Installation and Usage
```bash
npm install --save @datafire/appveyor
```
```js
let appveyor = require('@datafire/appveyor').create({
  apiToken: ""
});

appveyor.encryptValue({}).then(data => {
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

#### Input
* input `object`
  * body **required** [EncryptRequest](#encryptrequest)

#### Output
* output `string`

### getBuildLog
Download build log


```js
appveyor.getBuildLog({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: Build ID (`jobId` property of `BuildJob`)

#### Output
* output `file`

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

#### Input
* input `object`
  * body **required** [BuildStartRequest](#buildstartrequest)

#### Output
* output [Build](#build)

### cancelBuild
Cancel build


```js
appveyor.cancelBuild({
  "accountName": "",
  "projectSlug": "",
  "buildVersion": ""
}, context)
```

#### Input
* input `object`
  * accountName **required** `string`: AppVeyor account name (`accountName` property of `UserAccount`)
  * projectSlug **required** `string`: Project Slug
  * buildVersion **required** `string`: Build Version (`version` property of `Build`)

#### Output
*Output schema unknown*

### getCollaborators
Get collaborators


```js
appveyor.getCollaborators(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [UserAccount](#useraccount)

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

#### Input
* input `object`
  * body **required** [CollaboratorAddition](#collaboratoraddition)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * body **required** [CollaboratorUpdate](#collaboratorupdate)

#### Output
*Output schema unknown*

### deleteCollaborator
Delete collaborator


```js
appveyor.deleteCollaborator({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
*Output schema unknown*

### getCollaborator
Get collaborator


```js
appveyor.getCollaborator({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [UserAccountRolesResults](#useraccountrolesresults)

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

#### Input
* input `object`
  * body **required** [DeploymentStartRequest](#deploymentstartrequest)

#### Output
* output [Deployment](#deployment)

### cancelDeployment
Cancel deployment


```js
appveyor.cancelDeployment({
  "body": {
    "deploymentId": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [DeploymentCancellation](#deploymentcancellation)

#### Output
*Output schema unknown*

### getDeployment
Get deployment


```js
appveyor.getDeployment({
  "deploymentId": 0
}, context)
```

#### Input
* input `object`
  * deploymentId **required** `integer`: Deployment ID (`deploymentId` property of `Deployment`)

#### Output
* output [ProjectDeployment](#projectdeployment)

### getEnvironments
Get environments


```js
appveyor.getEnvironments(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [DeploymentEnvironmentLookupModel](#deploymentenvironmentlookupmodel)

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

#### Input
* input `object`
  * body **required** [DeploymentEnvironmentAddition](#deploymentenvironmentaddition)

#### Output
* output [DeploymentEnvironmentWithSettings](#deploymentenvironmentwithsettings)

### updateEnvironment
Update environment


```js
appveyor.updateEnvironment({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [DeploymentEnvironmentWithSettings](#deploymentenvironmentwithsettings)

#### Output
* output [DeploymentEnvironmentWithSettings](#deploymentenvironmentwithsettings)

### deleteEnvironment
Delete environment


```js
appveyor.deleteEnvironment({
  "deploymentEnvironmentId": 0
}, context)
```

#### Input
* input `object`
  * deploymentEnvironmentId **required** `integer`: Deployment Environment ID (`deploymentEnvironmentId` property of `DeploymentEnvironment`)

#### Output
*Output schema unknown*

### getEnvironmentDeployments
Get environment deployments


```js
appveyor.getEnvironmentDeployments({
  "deploymentEnvironmentId": 0
}, context)
```

#### Input
* input `object`
  * deploymentEnvironmentId **required** `integer`: Deployment Environment ID (`deploymentEnvironmentId` property of `DeploymentEnvironment`)

#### Output
* output [DeploymentEnvironmentDeploymentsResults](#deploymentenvironmentdeploymentsresults)

### getEnvironmentSettings
Get environment settings


```js
appveyor.getEnvironmentSettings({
  "deploymentEnvironmentId": 0
}, context)
```

#### Input
* input `object`
  * deploymentEnvironmentId **required** `integer`: Deployment Environment ID (`deploymentEnvironmentId` property of `DeploymentEnvironment`)

#### Output
* output [DeploymentEnvironmentSettingsResults](#deploymentenvironmentsettingsresults)

### getProjects
Get projects


```js
appveyor.getProjects(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Project](#project)

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

#### Input
* input `object`
  * body **required** [ProjectAddition](#projectaddition)

#### Output
* output [Project](#project)

### updateProject
Update project


```js
appveyor.updateProject({
  "body": {
    "versionFormat": "",
    "configuration": {}
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ProjectWithConfiguration](#projectwithconfiguration)

#### Output
*Output schema unknown*

### getPublicProjectStatusBadge
Get status badge image for a project with a public repository


```js
appveyor.getPublicProjectStatusBadge({
  "badgeRepoProvider": "",
  "repoAccountName": "",
  "repoSlug": ""
}, context)
```

#### Input
* input `object`
  * branch `string`: Repository Branch
  * svg `boolean`: Return an SVG image instead of PNG?  Exclusive with `retina`.
  * retina `boolean`: Return a larger image suitable for retina displays?  Exclusive with `svg`.
  * passingText `string`: Text to show in badge when build is passing.
  * failingText `string`: Text to show in badge when build is failing.
  * pendingText `string`: Text to show in badge when build is pending.
  * badgeRepoProvider **required** `string` (values: bitBucket, gitHub): Repository provider supported for badges
  * repoAccountName **required** `string`: Account name with repository provider
  * repoSlug **required** `string`: Slug (URL component) of repository.

#### Output
* output `file`

### getProjectStatusBadge
Get project status badge image


```js
appveyor.getProjectStatusBadge({
  "statusBadgeId": ""
}, context)
```

#### Input
* input `object`
  * svg `boolean`: Return an SVG image instead of PNG?  Exclusive with `retina`.
  * retina `boolean`: Return a larger image suitable for retina displays?  Exclusive with `svg`.
  * passingText `string`: Text to show in badge when build is passing.
  * failingText `string`: Text to show in badge when build is failing.
  * pendingText `string`: Text to show in badge when build is pending.
  * statusBadgeId **required** `string`: ID of the status badge (`statusBadgeId` from `ProjectWithConfiguration`).

#### Output
* output `file`

### getProjectBranchStatusBadge
Get project branch status badge image


```js
appveyor.getProjectBranchStatusBadge({
  "statusBadgeId": "",
  "buildBranch": ""
}, context)
```

#### Input
* input `object`
  * svg `boolean`: Return an SVG image instead of PNG?  Exclusive with `retina`.
  * retina `boolean`: Return a larger image suitable for retina displays?  Exclusive with `svg`.
  * passingText `string`: Text to show in badge when build is passing.
  * failingText `string`: Text to show in badge when build is failing.
  * pendingText `string`: Text to show in badge when build is pending.
  * statusBadgeId **required** `string`: ID of the status badge (`statusBadgeId` from `ProjectWithConfiguration`).
  * buildBranch **required** `string`: Build Branch

#### Output
* output `file`

### deleteProject
Delete project


```js
appveyor.deleteProject({
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Input
* input `object`
  * accountName **required** `string`: AppVeyor account name (`accountName` property of `UserAccount`)
  * projectSlug **required** `string`: Project Slug

#### Output
*Output schema unknown*

### getProjectLastBuild
Get project last build


```js
appveyor.getProjectLastBuild({
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Input
* input `object`
  * accountName **required** `string`: AppVeyor account name (`accountName` property of `UserAccount`)
  * projectSlug **required** `string`: Project Slug

#### Output
* output [ProjectBuildResults](#projectbuildresults)

### getProjectLastBuildBranch
Get project last branch build


```js
appveyor.getProjectLastBuildBranch({
  "accountName": "",
  "projectSlug": "",
  "buildBranch": ""
}, context)
```

#### Input
* input `object`
  * accountName **required** `string`: AppVeyor account name (`accountName` property of `UserAccount`)
  * projectSlug **required** `string`: Project Slug
  * buildBranch **required** `string`: Build Branch

#### Output
* output [ProjectBuildResults](#projectbuildresults)

### getProjectBuildByVersion
Get project build by version


```js
appveyor.getProjectBuildByVersion({
  "accountName": "",
  "projectSlug": "",
  "buildVersion": ""
}, context)
```

#### Input
* input `object`
  * accountName **required** `string`: AppVeyor account name (`accountName` property of `UserAccount`)
  * projectSlug **required** `string`: Project Slug
  * buildVersion **required** `string`: Build Version (`version` property of `Build`)

#### Output
* output [ProjectBuildResults](#projectbuildresults)

### deleteProjectBuildCache
Delete project build cache


```js
appveyor.deleteProjectBuildCache({
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Input
* input `object`
  * accountName **required** `string`: AppVeyor account name (`accountName` property of `UserAccount`)
  * projectSlug **required** `string`: Project Slug

#### Output
*Output schema unknown*

### getProjectDeployments
Get project deployments


```js
appveyor.getProjectDeployments({
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Input
* input `object`
  * accountName **required** `string`: AppVeyor account name (`accountName` property of `UserAccount`)
  * projectSlug **required** `string`: Project Slug

#### Output
* output [ProjectDeploymentsResults](#projectdeploymentsresults)

### getProjectHistory
Get project history


```js
appveyor.getProjectHistory({
  "recordsNumber": 0,
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Input
* input `object`
  * recordsNumber **required** `integer`: Number of results to include in the response.
  * startBuildId `integer`: Maximum `buildId` to include in the results (exclusive).
  * branch `string`: Repository Branch
  * accountName **required** `string`: AppVeyor account name (`accountName` property of `UserAccount`)
  * projectSlug **required** `string`: Project Slug

#### Output
* output [ProjectHistory](#projecthistory)

### getProjectSettings
Get project settings


```js
appveyor.getProjectSettings({
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Input
* input `object`
  * accountName **required** `string`: AppVeyor account name (`accountName` property of `UserAccount`)
  * projectSlug **required** `string`: Project Slug

#### Output
* output [ProjectSettingsResults](#projectsettingsresults)

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

#### Input
* input `object`
  * body **required** [ProjectBuildNumberUpdate](#projectbuildnumberupdate)
  * accountName **required** `string`: AppVeyor account name (`accountName` property of `UserAccount`)
  * projectSlug **required** `string`: Project Slug

#### Output
*Output schema unknown*

### getProjectSettingsYaml
Get project settings in YAML


```js
appveyor.getProjectSettingsYaml({
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Input
* input `object`
  * accountName **required** `string`: AppVeyor account name (`accountName` property of `UserAccount`)
  * projectSlug **required** `string`: Project Slug

#### Output
* output `string`

### updateProjectSettingsYaml
Update project settings in YAML


```js
appveyor.updateProjectSettingsYaml({
  "body": "",
  "accountName": "",
  "projectSlug": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`
  * accountName **required** `string`: AppVeyor account name (`accountName` property of `UserAccount`)
  * projectSlug **required** `string`: Project Slug

#### Output
*Output schema unknown*

### getRoles
Get roles


```js
appveyor.getRoles(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Role](#role)

### addRole
Add role


```js
appveyor.addRole({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [RoleAddition](#roleaddition)

#### Output
* output [RoleWithGroups](#rolewithgroups)

### updateRole
Update role


```js
appveyor.updateRole({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [RoleWithGroups](#rolewithgroups)

#### Output
* output [RoleWithGroups](#rolewithgroups)

### deleteRole
Delete role


```js
appveyor.deleteRole({
  "roleId": 0
}, context)
```

#### Input
* input `object`
  * roleId **required** `integer`: Role ID

#### Output
*Output schema unknown*

### getRole
Get role


```js
appveyor.getRole({
  "roleId": 0
}, context)
```

#### Input
* input `object`
  * roleId **required** `integer`: Role ID

#### Output
* output [RoleWithGroups](#rolewithgroups)

### getUsers
Get users


```js
appveyor.getUsers(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [UserAccount](#useraccount)

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

#### Input
* input `object`
  * body **required** [UserAddition](#useraddition)

#### Output
*Output schema unknown*

### updateUser
Update user


```js
appveyor.updateUser({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [UserAccount](#useraccount)

#### Output
*Output schema unknown*

### deleteUser
Delete user


```js
appveyor.deleteUser({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
*Output schema unknown*

### getUser
Get user


```js
appveyor.getUser({
  "userId": 0
}, context)
```

#### Input
* input `object`
  * userId **required** `integer`: User ID

#### Output
* output [UserAccountRolesResults](#useraccountrolesresults)



## Definitions

### AccessRightName
* AccessRightName `string` (values: Delete, Deploy, RunBuild, Update, View)

### AceAccessRight
* AceAccessRight `object`
  * allowed `boolean`
  * name **required** [AccessRightName](#accessrightname)

### AceAccessRightDefinition
* AceAccessRightDefinition `object`
  * description `string`
  * name **required** [AccessRightName](#accessrightname)

### Artifact
* Artifact `object`
  * name **required** `string`
  * path **required** `string`
  * type [ArtifactType](#artifacttype)

### ArtifactType
* ArtifactType `string` (values: WebDeployPackage)

### Build
* Build
  * branch `string`
  * buildId `integer`
  * message `string`
  * version `string`
  * created `string`
  * updated `string`
  * authorName `string`
  * authorUsername `string`
  * buildNumber `integer`
  * commitId `string`
  * committed `string`
  * committerName `string`
  * committerUsername `string`
  * finished `string`
  * isTag `boolean`
  * jobs `array`: Always empty in getProjectHistory and startDeployment responses.
    * items [BuildJob](#buildjob)
  * messageExtended `string`
  * messages `array`
    * items [BuildMessage](#buildmessage)
  * pullRequestId `integer`
  * pullRequestName `string`
  * started `string`
  * status [Status](#status)

### BuildCloudName
* BuildCloudName `string` (values: gce, pro-vs2013, pro-win2016, pro-vs2017, ubuntu)

### BuildJob
* BuildJob
  * created `string`
  * updated `string`
  * finished `string`
  * jobId `string`
  * name `string`
  * started `string`
  * status [Status](#status)
  * allowFailure `boolean`
  * artifactsCount `integer`
  * compilationErrorsCount `integer`
  * compilationMessagesCount `integer`
  * compilationWarningsCount `integer`
  * failedTestsCount `integer`
  * messagesCount `integer`
  * osType [OSType](#ostype)
  * passedTestsCount `integer`
  * testsCount `integer`

### BuildLookupModel
* BuildLookupModel `object`
  * branch `string`
  * buildId `integer`
  * message `string`
  * version `string`

### BuildMessage
* BuildMessage `object`
  * category [BuildMessageCategory](#buildmessagecategory)
  * created `string`
  * message `string`

### BuildMessageCategory
* BuildMessageCategory `string` (values: information, warning)

### BuildMode
* BuildMode `string` (values: msbuild, none, script)

### BuildNotificationFrequency
* BuildNotificationFrequency `string` (values: all, myCommits, none)

### BuildStartRequest
* BuildStartRequest `object`
  * accountName **required** `string`
  * branch `string`
  * commitId `string`
  * environmentVariables `object`
  * projectSlug **required** `string`
  * pullRequestId `integer`: Can not be used with `branch` or `commitId`

### BuildWorkerImage
* BuildWorkerImage `object`
  * buildCloudName [BuildCloudName](#buildcloudname)
  * buildWorkerImageId **required** `integer`
  * name **required** [BuildWorkerImageName](#buildworkerimagename)
  * osType [OSType](#ostype)

### BuildWorkerImageName
* BuildWorkerImageName `string` (values: Previous Visual Studio 2013, Previous Visual Studio 2015, Previous Visual Studio 2017, Ubuntu, Visual Studio 2013, Visual Studio 2015, Visual Studio 2017, Visual Studio 2017 Preview, WMF 5)

### CollaboratorAddition
* CollaboratorAddition `object`: Technically `roleId` has default value 0 and is not required, but
  * email **required** `string`
  * roleId **required** `integer`

### CollaboratorUpdate
* CollaboratorUpdate `object`: Technically `userId` and `roleId` have default value 0 and are not
  * roleId **required** `integer`
  * userId **required** `integer`

### DeployMode
* DeployMode `string` (values: providers, none, script)

### Deployment
* Deployment
  * build [BuildLookupModel](#buildlookupmodel)
  * deploymentId `integer`
  * finished `string`
  * started `string`
  * status [Status](#status)
  * created `string`
  * updated `string`
  * build [Build](#build)
  * environment [DeploymentEnvironment](#deploymentenvironment)
  * jobs `array`
    * items [DeploymentJob](#deploymentjob)

### DeploymentCancellation
* DeploymentCancellation `object`
  * deploymentId **required** `integer`

### DeploymentEnvironment
* DeploymentEnvironment
  * deploymentEnvironmentId `integer`
  * name `string`
  * provider [DeploymentProviderType](#deploymentprovidertype)
  * created `string`
  * updated `string`
  * accountId `integer`
  * projectsMode `integer` (values: 0, 1, 2): 0 is "Any project can be deployed to the environment"
  * securityDescriptor [SecurityDescriptor](#securitydescriptor)

### DeploymentEnvironmentAddition
* DeploymentEnvironmentAddition `object`
  * name **required** `string`
  * provider **required** [DeploymentProviderType](#deploymentprovidertype)
  * settings **required** [DeploymentEnvironmentSettings](#deploymentenvironmentsettings)

### DeploymentEnvironmentDeploymentsResults
* DeploymentEnvironmentDeploymentsResults `object`
  * deployments **required** `array`
    * items [EnvironmentDeploymentModel](#environmentdeploymentmodel)
  * environment **required** [DeploymentEnvironment](#deploymentenvironment)

### DeploymentEnvironmentLookupModel
* DeploymentEnvironmentLookupModel `object`
  * deploymentEnvironmentId `integer`
  * name `string`
  * provider [DeploymentProviderType](#deploymentprovidertype)

### DeploymentEnvironmentProject
* DeploymentEnvironmentProject `object`
  * isSelected **required** `boolean`
  * name **required** `string`
  * projectId **required** `integer`

### DeploymentEnvironmentSettings
* DeploymentEnvironmentSettings `object`
  * environmentVariables `array`
    * items [StoredNameValue](#storednamevalue)
  * notifications `array`
    * items [NotificationProviderSettings](#notificationprovidersettings)
  * providerSettings `array`
    * items [StoredNameValue](#storednamevalue)

### DeploymentEnvironmentSettingsResults
* DeploymentEnvironmentSettingsResults `object`
  * environment [DeploymentEnvironmentWithSettings](#deploymentenvironmentwithsettings)

### DeploymentEnvironmentWithSettings
* DeploymentEnvironmentWithSettings
  * deploymentEnvironmentId `integer`
  * name `string`
  * provider [DeploymentProviderType](#deploymentprovidertype)
  * created `string`
  * updated `string`
  * accountId `integer`
  * projectsMode `integer` (values: 0, 1, 2): 0 is "Any project can be deployed to the environment"
  * securityDescriptor [SecurityDescriptor](#securitydescriptor)
  * environmentAccessKey `string`
  * projects `array`: Projects available for selection in UI.
    * items [DeploymentEnvironmentProject](#deploymentenvironmentproject)
  * selectedProjects `array`: Project IDs of selected projects
    * items `integer`
  * settings [DeploymentEnvironmentSettings](#deploymentenvironmentsettings)

### DeploymentJob
* DeploymentJob
  * created `string`
  * updated `string`
  * finished `string`
  * jobId `string`
  * name `string`
  * started `string`
  * status [Status](#status)
  * messagesCount `integer`

### DeploymentLookupModel
* DeploymentLookupModel `object`
  * build [BuildLookupModel](#buildlookupmodel)
  * deploymentId `integer`
  * finished `string`
  * started `string`
  * status [Status](#status)

### DeploymentNotificationFrequency
* DeploymentNotificationFrequency `string` (values: all, none)

### DeploymentProvider
* DeploymentProvider `object`
  * onBranch `array`
    * items [StringValueObject](#stringvalueobject)
  * onEnvironmentVariables `array`
    * items [StoredNameValue](#storednamevalue)
  * provider **required** [DeploymentProviderType](#deploymentprovidertype)
  * providerSettings `array`
    * items [StoredNameValue](#storednamevalue)

### DeploymentProviderType
* DeploymentProviderType `string` (values: Agent, AzureBlob, AzureCS, AzureWebJob, BinTray, FTP, GitHub, NuGet, S3, SqlDatabase, WebDeploy, Webhook)

### DeploymentStartRequest
* DeploymentStartRequest `object`
  * accountName **required** `string`
  * buildJobId `string`: Optional job id with artifacts if build contains multiple jobs.
  * buildVersion **required** `string`: Build to deploy
  * environmentName **required** `string`
  * environmentVariables `object`
  * projectSlug **required** `string`

### EncryptRequest
* EncryptRequest `object`
  * plainValue `string`

### EnvironmentDeploymentModel
* EnvironmentDeploymentModel
  * build [BuildLookupModel](#buildlookupmodel)
  * deploymentId `integer`
  * finished `string`
  * started `string`
  * status [Status](#status)
  * project [ProjectLookupModel](#projectlookupmodel)

### Error
* Error `object`
  * message **required** `string`
  * modelState `object`: When present, this property is a map of property names in the format

### GroupName
* GroupName `string` (values: Account, BuildEnvironment, Environments, Projects, Roles, User, Users)

### GroupPermissions
* GroupPermissions `object`
  * name **required** [GroupName](#groupname)
  * permissions **required** `array`
    * items [PermissionState](#permissionstate)

### HostEntry
* HostEntry `object`
  * host **required** `string`
  * ip **required** `string`

### HttpMethodRestricted
* HttpMethodRestricted `string` (values: GET, POST)

### Job
* Job
  * created `string`
  * updated `string`
  * finished `string`
  * jobId `string`
  * name `string`
  * started `string`
  * status [Status](#status)

### MSBuildVerbosity
* MSBuildVerbosity `string` (values: quiet, minimal, normal, detailed)

### NotificationProviderSettings
* NotificationProviderSettings `object`
  * provider **required** [NotificationProviderType](#notificationprovidertype)
  * settings **required** [NotificationSettings](#notificationsettings)

### NotificationProviderType
* NotificationProviderType `string` (values: Campfire, Email, GitHubPullRequest, HipChat, Slack, Webhook, VSOTeamRoom)

### NotificationSettings
* NotificationSettings `object`: This type is the union of the settings types for each of the various
  * $type [NotificationSettingsType](#notificationsettingstype)
  * account `string`
  * addCustomRequestBody `boolean`
  * authToken [StoredValue](#storedvalue)
  * bodyTemplate `string`
  * channel `string`
  * customRequestBody `string`
  * customRequestBodyContentType `string`
  * from `string`
  * headers `array`
    * items [StoredNameValue](#storednamevalue)
  * headersValue `string`
  * incomingWebhookUrl `string`
  * method [HttpMethodRestricted](#httpmethodrestricted)
  * onBuildFailure `boolean`
  * onBuildStatusChanged `boolean`
  * onBuildSuccess `boolean`
  * password [StoredValue](#storedvalue)
  * recipients `array`
    * items [StringValueObject](#stringvalueobject)
  * recipientsValue `string`
  * room `string`
  * serverUrl `string`
  * subjectTemplate `string`
  * template `string`
  * url `string`
  * username `string`
  * vsoAccount `string`

### NotificationSettingsType
* NotificationSettingsType `string` (values: Appveyor.Models.CampfireNotificationSettings, Appveyor.Models, Appveyor.Models.EmailNotificationSettings, Appveyor.Models, Appveyor.Models.GitHubPullRequestNotificationSettings, Appveyor.Models, Appveyor.Models.HipChatNotificationSettings, Appveyor.Models, Appveyor.Models.SlackNotificationSettings, Appveyor.Models, Appveyor.Models.WebhookNotificationSettings, Appveyor.Models, Appveyor.Models.VSOTeamRoomNotificationSettings, Appveyor.Models)

### NuGetFeed
* NuGetFeed
  * created `string`
  * updated `string`
  * accountId `integer`
  * id `string`
  * name `string`
  * projectId `integer`
  * publishingEnabled `boolean`

### OSServiceName
* OSServiceName `string` (values: iis, mongodb, msmq, mssql2008r2sp2, mssql2008r2sp2rs, mssql2012sp1, mssql2012sp1rs, mssql2014, mssql2014rs, mssql2016, mysql, postgresql)

### OSType
* OSType `string` (values: Ubuntu, Windows)

### PermissionName
* PermissionName `string` (values: ManageApplicationAuthorizations, UpdateAccountDetails, UpdateBillingDetails, ConfigureBuildEnvironment, DeployToEnvironment, ManageEnvironments, UpdateEnvironmentSettings, ManageProjects, RunProjectBuild, UpdateProjectSettings, AddRole, DeleteRole, UpdateRoleDetails, ConfigureApiKeys, AddUser, DeleteUser, UpdateUserDetails): Available permission names.  The names correspond to the following groups:

### PermissionState
* PermissionState `object`
  * allowed `boolean`: State of the named permission.  `true` to allow, `false` to deny,
  * description `string`
  * name **required** [PermissionName](#permissionname)

### PlatformName
* PlatformName `string` (values: ARM, Any CPU, x64, x86)

### Project
* Project
  * accountName `string`
  * name `string`
  * projectId **required** `integer`
  * slug `string`
  * created `string`
  * updated `string`
  * accountId `integer`
  * alwaysBuildClosedPullRequests `boolean`
  * builds `array`: Only non-empty for response from getProjects.
    * items [Build](#build)
  * enableDeploymentInPullRequests `boolean`
  * enableSecureVariablesInPullRequests `boolean`
  * enableSecureVariablesInPullRequestsFromSameRepo `boolean`
  * isPrivate `boolean`
  * nuGetFeed [NuGetFeed](#nugetfeed)
  * repositoryBranch `string`: Not present in response from addProject.
  * repositoryName **required** `string`
  * repositoryScm [RepositoryScm](#repositoryscm)
  * repositoryType [RepositoryProvider](#repositoryprovider)
  * rollingBuilds `boolean`
  * rollingBuildsDoNotCancelRunningBuilds `boolean`
  * saveBuildCacheInPullRequests `boolean`
  * securityDescriptor [SecurityDescriptor](#securitydescriptor)
  * skipBranchesWithoutAppveyorYml `boolean`
  * tags `string`

### ProjectAddition
* ProjectAddition `object`: `repositoryAuthentication` is only used for git, mercurial, subversion `repositoryProvider`.
  * repositoryAuthentication [RepositoryAuthenticationType](#repositoryauthenticationtype)
  * repositoryName **required** `string`: URL when repositoryProvider is git, mercurial, subversion username/project when repositoryProvider is gitHub
  * repositoryPassword `string`: Required if repositoryAuthentication is credentials
  * repositoryProvider **required** [RepositoryProvider](#repositoryprovider)
  * repositoryUsername `string`: Required if repositoryAuthentication is credentials

### ProjectBranchesMode
* ProjectBranchesMode `string` (values: exclude, include)

### ProjectBuildNumberUpdate
* ProjectBuildNumberUpdate `object`
  * nextBuildNumber **required** `integer`

### ProjectBuildResults
* ProjectBuildResults `object`
  * build [Build](#build)
  * project [Project](#project)

### ProjectConfiguration
* ProjectConfiguration `object`
  * afterBuildScripts `array`
    * items [Script](#script)
  * afterDeployScripts `array`
    * items [Script](#script)
  * afterTestScripts `array`
    * items [Script](#script)
  * artifacts `array`
    * items [Artifact](#artifact)
  * assemblyFileVersionFormat `string`
  * assemblyInfoFile `string`
  * assemblyInformationalVersionFormat `string`
  * assemblyVersionFormat `string`
  * beforeBuildScripts `array`
    * items [Script](#script)
  * beforeDeployScripts `array`
    * items [Script](#script)
  * beforePackageScripts `array`
    * items [Script](#script)
  * beforeTestScripts `array`
    * items [Script](#script)
  * branchesMode [ProjectBranchesMode](#projectbranchesmode)
  * buildCloud `array`
    * items [StringValueObject](#stringvalueobject)
  * buildMode [BuildMode](#buildmode)
  * buildScripts `array`: Only set/used when `buildMode` is `script`.
    * items [Script](#script)
  * cacheEntries `array`
    * items [StringValueObject](#stringvalueobject)
  * cloneDepth `integer`
  * cloneFolder `string`
  * cloneScripts `array`
    * items [Script](#script)
  * configuration `array`
    * items [StringValueObject](#stringvalueobject)
  * configureNuGetAccountSource `boolean`
  * configureNuGetProjectSource `boolean`
  * deployMode [DeployMode](#deploymode)
  * deployScripts `array`
    * items [Script](#script)
  * deployments `array`
    * items [DeploymentProvider](#deploymentprovider)
  * disableNuGetPublishOnPullRequests `boolean`
  * doNotIncrementBuildNumberOnPullRequests `boolean`
  * dotnetCsprojAssemblyVersionFormat `string`
  * dotnetCsprojFile `string`
  * dotnetCsprojFileVersionFormat `string`
  * dotnetCsprojInformationalVersionFormat `string`
  * dotnetCsprojPackageVersionFormat `string`
  * dotnetCsprojVersionFormat `string`
  * environmentVariables `array`
    * items [StoredNameValue](#storednamevalue)
  * environmentVariablesMatrix `array`
    * items [StoredNameValueMatrix](#storednamevaluematrix)
  * excludeBranches `array`
    * items [StringValueObject](#stringvalueobject)
  * forceHttpsClone `boolean`
  * hostsEntries `array`
    * items [HostEntry](#hostentry)
  * hotFixScripts `array`
    * items [Script](#script)
  * includeBranches `array`
    * items [StringValueObject](#stringvalueobject)
  * includeNuGetReferences `boolean`
  * initScripts `array`
    * items [Script](#script)
  * installScripts `array`
    * items [Script](#script)
  * matrixAllowFailures `array`: Although the names and values are not enforced, the combinations which are meaningful are documented at https://www.appveyor.com/docs/build-configuration/#allow-failing-jobs
    * items [StoredNameValueMatrix](#storednamevaluematrix)
  * matrixExclude `array`
    * items [StoredNameValueMatrix](#storednamevaluematrix)
  * matrixFastFinish `boolean`
  * maxJobs `integer`
  * msBuildInParallel `boolean`
  * msBuildProjectFileName `string`
  * msBuildVerbosity [MSBuildVerbosity](#msbuildverbosity)
  * notifications `array`
    * items [NotificationProviderSettings](#notificationprovidersettings)
  * onBuildErrorScripts `array`
    * items [Script](#script)
  * onBuildFinishScripts `array`
    * items [Script](#script)
  * onBuildSuccessScripts `array`
    * items [Script](#script)
  * onlyCommitsFiles `array`
    * items [StringValueObject](#stringvalueobject)
  * operatingSystem `array`
    * items `object`
      * value **required** [BuildWorkerImageName](#buildworkerimagename)
  * packageAzureCloudServiceProjects `boolean`
  * packageNuGetProjects `boolean`
  * packageNuGetSymbols `boolean`
  * packageWebApplicationProjects `boolean`
  * packageWebApplicationProjectsXCopy `boolean`
  * patchAssemblyInfo `boolean`
  * patchDotnetCsproj `boolean`
  * platform `array`
    * items `object`
      * value **required** [PlatformName](#platformname)
  * services `array`
    * items `object`
      * value **required** [OSServiceName](#osservicename)
  * shallowClone `boolean`
  * skipBranchWithPullRequests `boolean`
  * skipCommitsFiles `array`
    * items [StringValueObject](#stringvalueobject)
  * skipNonTags `boolean`
  * skipTags `boolean`
  * testAssemblies `array`
    * items [StringValueObject](#stringvalueobject)
  * testCategories `array`
    * items [StringValueObject](#stringvalueobject)
  * testCategoriesMatrix `array`
    * items `object`
      * categories `array`
        * items [StringValueObject](#stringvalueobject)
  * testCategoriesMode `string` (values: exclude, include)
  * testMode [TestMode](#testmode)
  * testScripts `array`: Only set/used when `testMode` is `script`.
    * items [Script](#script)
  * xamarinRegisterAndroidProduct `boolean`
  * xamarinRegisterIosProduct `boolean`

### ProjectDeployment
* ProjectDeployment `object`
  * deployment **required** [Deployment](#deployment)
  * project **required** [Project](#project)

### ProjectDeploymentModel
* ProjectDeploymentModel
  * build [BuildLookupModel](#buildlookupmodel)
  * deploymentId `integer`
  * finished `string`
  * started `string`
  * status [Status](#status)
  * environment [DeploymentEnvironmentLookupModel](#deploymentenvironmentlookupmodel)

### ProjectDeploymentsResults
* ProjectDeploymentsResults `object`
  * deployments `array`
    * items [ProjectDeploymentModel](#projectdeploymentmodel)
  * project [Project](#project)

### ProjectHistory
* ProjectHistory `object`
  * builds `array`
    * items [Build](#build)
  * project [Project](#project)

### ProjectLookupModel
* ProjectLookupModel `object`
  * accountName `string`
  * name `string`
  * projectId **required** `integer`
  * slug `string`

### ProjectSettingsResults
* ProjectSettingsResults `object`
  * buildClouds `array`
    * items [StringValueObject](#stringvalueobject)
  * defaultImageName `string`
  * images `array`
    * items [BuildWorkerImage](#buildworkerimage)
  * project [Project](#project)
  * settings [ProjectWithConfiguration](#projectwithconfiguration)

### ProjectWithConfiguration
* ProjectWithConfiguration `object`
  * accountName `string`
  * name `string`
  * projectId **required** `integer`
  * slug `string`
  * created `string`
  * updated `string`
  * accountId `integer`
  * alwaysBuildClosedPullRequests `boolean`
  * builds `array`: Only non-empty for response from getProjects.
    * items [Build](#build)
  * enableDeploymentInPullRequests `boolean`
  * enableSecureVariablesInPullRequests `boolean`
  * enableSecureVariablesInPullRequestsFromSameRepo `boolean`
  * isPrivate `boolean`
  * nuGetFeed [NuGetFeed](#nugetfeed)
  * repositoryBranch `string`: Not present in response from addProject.
  * repositoryName **required** `string`
  * repositoryScm [RepositoryScm](#repositoryscm)
  * repositoryType [RepositoryProvider](#repositoryprovider)
  * rollingBuilds `boolean`
  * rollingBuildsDoNotCancelRunningBuilds `boolean`
  * saveBuildCacheInPullRequests `boolean`
  * securityDescriptor [SecurityDescriptor](#securitydescriptor)
  * skipBranchesWithoutAppveyorYml `boolean`
  * tags `string`
  * buildPriority `integer`
  * configuration **required** [ProjectConfiguration](#projectconfiguration)
  * customYmlName `string`
  * ignoreAppveyorYml `boolean`
  * nextBuildNumber `integer`
  * repositoryAuthentication [RepositoryAuthenticationType](#repositoryauthenticationtype)
  * repositoryUsername `string`
  * scheduleCrontabExpression `string`: Build schedule as an NCrontab Expression.  See https://github.com/atifaziz/NCrontab/wiki/Crontab-Expression
  * sshPublicKey `string`
  * statusBadgeId `string`
  * versionFormat **required** `string`
  * webhookId `string`
  * webhookUrl `string`

### RepositoryAuthenticationType
* RepositoryAuthenticationType `string` (values: credentials, ssh)

### RepositoryProvider
* RepositoryProvider `string` (values: bitBucket, git, gitHub, gitLab, kiln, mercurial, stash, subversion, vso)

### RepositoryScm
* RepositoryScm `string` (values: git, mercurial, subversion)

### Role
* Role: Technically `roleId` has default value 0 and is not required, but
  * created `string`
  * updated `string`
  * isSystem `boolean`
  * name **required** `string`
  * roleId **required** `integer`

### RoleAce
* RoleAce `object`
  * accessRights `array`
    * items [AceAccessRight](#aceaccessright)
  * isAdmin `boolean`
  * name `string`
  * roleId `integer`

### RoleAddition
* RoleAddition `object`
  * name **required** `string`

### RoleWithGroups
* RoleWithGroups
  * created `string`
  * updated `string`
  * isSystem `boolean`
  * name **required** `string`
  * roleId **required** `integer`
  * groups `array`
    * items [GroupPermissions](#grouppermissions)

### Script
* Script `object`
  * language [ScriptLanguage](#scriptlanguage)
  * script **required** `string`

### ScriptLanguage
* ScriptLanguage `string` (values: cmd, ps)

### SecurityDescriptor
* SecurityDescriptor `object`
  * accessRightDefinitions `array`
    * items [AceAccessRightDefinition](#aceaccessrightdefinition)
  * roleAces `array`
    * items [RoleAce](#roleace)

### Status
* Status `string` (values: cancelled, cancelling, failed, queued, running, success)

### StoredNameValue
* StoredNameValue `object`
  * name **required** `string`
  * value **required** [StoredValue](#storedvalue)

### StoredNameValueMatrix
* StoredNameValueMatrix `object`
  * variables [StoredNameValue](#storednamevalue)

### StoredValue
* StoredValue `object`
  * isEncrypted `boolean`
  * value `string`: Encrypted values can be created using the encryptValue operation.

### StringValueObject
* StringValueObject `object`
  * value `string`

### TestMode
* TestMode `string` (values: auto, none, script)

### Timestamped
* Timestamped `object`
  * created `string`
  * updated `string`

### UserAccount
* UserAccount
  * created `string`
  * updated `string`
  * failedBuildNotification **required** [BuildNotificationFrequency](#buildnotificationfrequency)
  * failedDeploymentNotification **required** [DeploymentNotificationFrequency](#deploymentnotificationfrequency)
  * notifyWhenBuildStatusChangedOnly `boolean`: Note that this value is `true` on user creation, but behaves as
  * notifyWhenDeploymentStatusChangedOnly `boolean`: Note that this value is `true` on user creation, but behaves as
  * successfulBuildNotification **required** [BuildNotificationFrequency](#buildnotificationfrequency)
  * successfulDeploymentNotification **required** [DeploymentNotificationFrequency](#deploymentnotificationfrequency)
  * accountId `integer`
  * accountName `string`
  * email **required** `string`
  * fullName **required** `string`
  * isCollaborator `boolean`
  * isOwner `boolean`
  * pageSize `integer`
  * password `string`
  * roleId `integer`
  * roleName `string`
  * userId `integer`

### UserAccountRolesResults
* UserAccountRolesResults `object`: The roles property contains all roles, not only the role for which the user is a member.
  * roles `array`
    * items [Role](#role)
  * user [UserAccount](#useraccount)

### UserAccountSettings
* UserAccountSettings `object`
  * failedBuildNotification **required** [BuildNotificationFrequency](#buildnotificationfrequency)
  * failedDeploymentNotification **required** [DeploymentNotificationFrequency](#deploymentnotificationfrequency)
  * notifyWhenBuildStatusChangedOnly `boolean`: Note that this value is `true` on user creation, but behaves as
  * notifyWhenDeploymentStatusChangedOnly `boolean`: Note that this value is `true` on user creation, but behaves as
  * successfulBuildNotification **required** [BuildNotificationFrequency](#buildnotificationfrequency)
  * successfulDeploymentNotification **required** [DeploymentNotificationFrequency](#deploymentnotificationfrequency)

### UserAddition
* UserAddition `object`
  * confirmPassword `string`
  * email **required** `string`
  * fullName **required** `string`
  * generatePassword `boolean`
  * password `string`
  * roleId **required** `integer`: Technically `roleId` has default value 0 and is not required, but


