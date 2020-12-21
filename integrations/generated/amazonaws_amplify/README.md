# @datafire/amazonaws_amplify

Client library for AWS Amplify

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_amplify
```
```js
let amazonaws_amplify = require('@datafire/amazonaws_amplify').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amplify enables developers to develop and deploy cloud-powered mobile and web apps. The Amplify Console provides a continuous delivery and hosting service for web applications. For more information, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify Console User Guide</a>. The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework.</a> 

## Actions

### ListApps



```js
amazonaws_amplify.ListApps({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListAppsResult](#listappsresult)

### CreateApp



```js
amazonaws_amplify.CreateApp({
  "name": ""
}, context)
```

#### Input
* input `object`
  * tags `object`:  The tag for an Amplify app. 
  * accessToken `string`:  The personal access token for a third-party source control system for an Amplify app. The personal access token is used to create a webhook and a read-only deploy key. The token is not stored. 
  * autoBranchCreationConfig `object`:  Describes the automated branch creation configuration. 
    * basicAuthCredentials
    * buildSpec
    * enableAutoBuild
    * enableBasicAuth
    * enablePerformanceMode
    * enablePullRequestPreview
    * environmentVariables
    * framework
    * pullRequestEnvironmentName
    * stage
  * autoBranchCreationPatterns `array`:  The automated branch creation glob patterns for an Amplify app. 
    * items [AutoBranchCreationPattern](#autobranchcreationpattern)
  * basicAuthCredentials `string`:  The credentials for basic authorization for an Amplify app. 
  * buildSpec `string`:  The build specification (build spec) file for an Amplify app build. 
  * customHeaders `string`: The custom HTTP headers for an Amplify app.
  * customRules `array`:  The custom rewrite and redirect rules for an Amplify app. 
    * items [CustomRule](#customrule)
  * description `string`:  The description for an Amplify app. 
  * enableAutoBranchCreation `boolean`:  Enables automated branch creation for an Amplify app. 
  * enableBasicAuth `boolean`:  Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app. 
  * enableBranchAutoBuild `boolean`:  Enables the auto building of branches for an Amplify app. 
  * enableBranchAutoDeletion `boolean`:  Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository. 
  * environmentVariables `object`:  The environment variables map for an Amplify app. 
  * iamServiceRoleArn `string`:  The AWS Identity and Access Management (IAM) service role for an Amplify app. 
  * name **required** `string`:  The name for an Amplify app. 
  * oauthToken `string`:  The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key. The OAuth token is not stored. 
  * platform `string` (values: WEB):  The platform or framework for an Amplify app. 
  * repository `string`:  The repository for an Amplify app. 

#### Output
* output [CreateAppResult](#createappresult)

### DeleteApp



```js
amazonaws_amplify.DeleteApp({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
* output [DeleteAppResult](#deleteappresult)

### GetApp



```js
amazonaws_amplify.GetApp({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`

#### Output
* output [GetAppResult](#getappresult)

### UpdateApp



```js
amazonaws_amplify.UpdateApp({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * accessToken `string`:  The personal access token for a third-party source control system for an Amplify app. The token is used to create webhook and a read-only deploy key. The token is not stored. 
  * autoBranchCreationConfig `object`:  Describes the automated branch creation configuration. 
    * basicAuthCredentials
    * buildSpec
    * enableAutoBuild
    * enableBasicAuth
    * enablePerformanceMode
    * enablePullRequestPreview
    * environmentVariables
    * framework
    * pullRequestEnvironmentName
    * stage
  * autoBranchCreationPatterns `array`:  Describes the automated branch creation glob patterns for an Amplify app. 
    * items [AutoBranchCreationPattern](#autobranchcreationpattern)
  * basicAuthCredentials `string`:  The basic authorization credentials for an Amplify app. 
  * buildSpec `string`:  The build specification (build spec) file for an Amplify app build. 
  * customHeaders `string`: The custom HTTP headers for an Amplify app.
  * customRules `array`:  The custom redirect and rewrite rules for an Amplify app. 
    * items [CustomRule](#customrule)
  * description `string`:  The description for an Amplify app. 
  * enableAutoBranchCreation `boolean`:  Enables automated branch creation for an Amplify app. 
  * enableBasicAuth `boolean`:  Enables basic authorization for an Amplify app. 
  * enableBranchAutoBuild `boolean`:  Enables branch auto-building for an Amplify app. 
  * enableBranchAutoDeletion `boolean`:  Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository. 
  * environmentVariables `object`:  The environment variables for an Amplify app. 
  * iamServiceRoleArn `string`:  The AWS Identity and Access Management (IAM) service role for an Amplify app. 
  * name `string`:  The name for an Amplify app. 
  * oauthToken `string`:  The OAuth token for a third-party source control system for an Amplify app. The token is used to create a webhook and a read-only deploy key. The OAuth token is not stored. 
  * platform `string` (values: WEB):  The platform for an Amplify app. 
  * repository `string`:  The name of the repository for an Amplify app 

#### Output
* output [UpdateAppResult](#updateappresult)

### GenerateAccessLogs



```js
amazonaws_amplify.GenerateAccessLogs({
  "appId": "",
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * domainName **required** `string`:  The name of the domain. 
  * endTime `string`:  The time at which the logs should end. The time range specified is inclusive of the end time. 
  * startTime `string`:  The time at which the logs should start. The time range specified is inclusive of the start time. 

#### Output
* output [GenerateAccessLogsResult](#generateaccesslogsresult)

### ListBackendEnvironments



```js
amazonaws_amplify.ListBackendEnvironments({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * environmentName `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListBackendEnvironmentsResult](#listbackendenvironmentsresult)

### CreateBackendEnvironment



```js
amazonaws_amplify.CreateBackendEnvironment({
  "appId": "",
  "environmentName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * deploymentArtifacts `string`:  The name of deployment artifacts. 
  * environmentName **required** `string`:  The name for the backend environment. 
  * stackName `string`:  The AWS CloudFormation stack name of a backend environment. 

#### Output
* output [CreateBackendEnvironmentResult](#createbackendenvironmentresult)

### DeleteBackendEnvironment



```js
amazonaws_amplify.DeleteBackendEnvironment({
  "appId": "",
  "environmentName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * environmentName **required** `string`

#### Output
* output [DeleteBackendEnvironmentResult](#deletebackendenvironmentresult)

### GetBackendEnvironment



```js
amazonaws_amplify.GetBackendEnvironment({
  "appId": "",
  "environmentName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * environmentName **required** `string`

#### Output
* output [GetBackendEnvironmentResult](#getbackendenvironmentresult)

### ListBranches



```js
amazonaws_amplify.ListBranches({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListBranchesResult](#listbranchesresult)

### CreateBranch



```js
amazonaws_amplify.CreateBranch({
  "appId": "",
  "branchName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * tags `object`:  The tag for the branch. 
  * backendEnvironmentArn `string`:  The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app. 
  * basicAuthCredentials `string`:  The basic authorization credentials for the branch. 
  * branchName **required** `string`:  The name for the branch. 
  * buildSpec `string`:  The build specification (build spec) file for an Amplify app build. 
  * description `string`:  The description for the branch. 
  * displayName `string`:  The display name for a branch. This is used as the default domain prefix. 
  * enableAutoBuild `boolean`:  Enables auto building for the branch. 
  * enableBasicAuth `boolean`:  Enables basic authorization for the branch. 
  * enableNotification `boolean`:  Enables notifications for the branch. 
  * enablePerformanceMode `boolean`: <p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>
  * enablePullRequestPreview `boolean`:  Enables pull request previews for this branch. 
  * environmentVariables `object`:  The environment variables for the branch. 
  * framework `string`:  The framework for the branch. 
  * pullRequestEnvironmentName `string`:  The Amplify environment name for the pull request. 
  * stage `string` (values: PRODUCTION, BETA, DEVELOPMENT, EXPERIMENTAL, PULL_REQUEST):  Describes the current stage for the branch. 
  * ttl `string`:  The content Time to Live (TTL) for the website in seconds. 

#### Output
* output [CreateBranchResult](#createbranchresult)

### DeleteBranch



```js
amazonaws_amplify.DeleteBranch({
  "appId": "",
  "branchName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * branchName **required** `string`

#### Output
* output [DeleteBranchResult](#deletebranchresult)

### GetBranch



```js
amazonaws_amplify.GetBranch({
  "appId": "",
  "branchName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * branchName **required** `string`

#### Output
* output [GetBranchResult](#getbranchresult)

### UpdateBranch



```js
amazonaws_amplify.UpdateBranch({
  "appId": "",
  "branchName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * branchName **required** `string`
  * backendEnvironmentArn `string`:  The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app. 
  * basicAuthCredentials `string`:  The basic authorization credentials for the branch. 
  * buildSpec `string`:  The build specification (build spec) file for an Amplify app build. 
  * description `string`:  The description for the branch. 
  * displayName `string`:  The display name for a branch. This is used as the default domain prefix. 
  * enableAutoBuild `boolean`:  Enables auto building for the branch. 
  * enableBasicAuth `boolean`:  Enables basic authorization for the branch. 
  * enableNotification `boolean`:  Enables notifications for the branch. 
  * enablePerformanceMode `boolean`: <p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p>
  * enablePullRequestPreview `boolean`:  Enables pull request previews for this branch. 
  * environmentVariables `object`:  The environment variables for the branch. 
  * framework `string`:  The framework for the branch. 
  * pullRequestEnvironmentName `string`:  The Amplify environment name for the pull request. 
  * stage `string` (values: PRODUCTION, BETA, DEVELOPMENT, EXPERIMENTAL, PULL_REQUEST):  Describes the current stage for the branch. 
  * ttl `string`:  The content Time to Live (TTL) for the website in seconds. 

#### Output
* output [UpdateBranchResult](#updatebranchresult)

### CreateDeployment



```js
amazonaws_amplify.CreateDeployment({
  "appId": "",
  "branchName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * branchName **required** `string`
  * fileMap `object`:  An optional file map that contains the file name as the key and the file content md5 hash as the value. If this argument is provided, the service will generate a unique upload URL per file. Otherwise, the service will only generate a single upload URL for the zipped files. 

#### Output
* output [CreateDeploymentResult](#createdeploymentresult)

### StartDeployment



```js
amazonaws_amplify.StartDeployment({
  "appId": "",
  "branchName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * branchName **required** `string`
  * jobId `string`:  The job ID for this deployment, generated by the create deployment request. 
  * sourceUrl `string`:  The source URL for this deployment, used when calling start deployment without create deployment. The source URL can be any HTTP GET URL that is publicly accessible and downloads a single .zip file. 

#### Output
* output [StartDeploymentResult](#startdeploymentresult)

### ListJobs



```js
amazonaws_amplify.ListJobs({
  "appId": "",
  "branchName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * branchName **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListJobsResult](#listjobsresult)

### StartJob



```js
amazonaws_amplify.StartJob({
  "appId": "",
  "branchName": "",
  "jobType": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * branchName **required** `string`
  * commitId `string`:  The commit ID from a third-party repository provider for the job. 
  * commitMessage `string`:  The commit message from a third-party repository provider for the job. 
  * commitTime `string`:  The commit date and time for the job. 
  * jobId `string`:  The unique ID for an existing job. This is required if the value of <code>jobType</code> is <code>RETRY</code>. 
  * jobReason `string`:  A descriptive reason for starting this job. 
  * jobType **required** `string` (values: RELEASE, RETRY, MANUAL, WEB_HOOK):  Describes the type for the job. The job type <code>RELEASE</code> starts a new job with the latest change from the specified branch. This value is available only for apps that are connected to a repository. The job type <code>RETRY</code> retries an existing job. If the job type value is <code>RETRY</code>, the <code>jobId</code> is also required. 

#### Output
* output [StartJobResult](#startjobresult)

### DeleteJob



```js
amazonaws_amplify.DeleteJob({
  "appId": "",
  "branchName": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * branchName **required** `string`
  * jobId **required** `string`

#### Output
* output [DeleteJobResult](#deletejobresult)

### GetJob



```js
amazonaws_amplify.GetJob({
  "appId": "",
  "branchName": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * branchName **required** `string`
  * jobId **required** `string`

#### Output
* output [GetJobResult](#getjobresult)

### ListArtifacts



```js
amazonaws_amplify.ListArtifacts({
  "appId": "",
  "branchName": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * branchName **required** `string`
  * jobId **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListArtifactsResult](#listartifactsresult)

### StopJob



```js
amazonaws_amplify.StopJob({
  "appId": "",
  "branchName": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * branchName **required** `string`
  * jobId **required** `string`

#### Output
* output [StopJobResult](#stopjobresult)

### ListDomainAssociations



```js
amazonaws_amplify.ListDomainAssociations({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListDomainAssociationsResult](#listdomainassociationsresult)

### CreateDomainAssociation



```js
amazonaws_amplify.CreateDomainAssociation({
  "appId": "",
  "domainName": "",
  "subDomainSettings": []
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * autoSubDomainCreationPatterns `array`:  Sets the branch patterns for automatic subdomain creation. 
    * items [AutoSubDomainCreationPattern](#autosubdomaincreationpattern)
  * autoSubDomainIAMRole `string`:  The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains. 
  * domainName **required** `string`:  The domain name for the domain association. 
  * enableAutoSubDomain `boolean`:  Enables the automated creation of subdomains for branches. 
  * subDomainSettings **required** `array`:  The setting for the subdomain. 
    * items [SubDomainSetting](#subdomainsetting)

#### Output
* output [CreateDomainAssociationResult](#createdomainassociationresult)

### DeleteDomainAssociation



```js
amazonaws_amplify.DeleteDomainAssociation({
  "appId": "",
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * domainName **required** `string`

#### Output
* output [DeleteDomainAssociationResult](#deletedomainassociationresult)

### GetDomainAssociation



```js
amazonaws_amplify.GetDomainAssociation({
  "appId": "",
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * domainName **required** `string`

#### Output
* output [GetDomainAssociationResult](#getdomainassociationresult)

### UpdateDomainAssociation



```js
amazonaws_amplify.UpdateDomainAssociation({
  "appId": "",
  "domainName": "",
  "subDomainSettings": []
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * domainName **required** `string`
  * autoSubDomainCreationPatterns `array`:  Sets the branch patterns for automatic subdomain creation. 
    * items [AutoSubDomainCreationPattern](#autosubdomaincreationpattern)
  * autoSubDomainIAMRole `string`:  The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains. 
  * enableAutoSubDomain `boolean`:  Enables the automated creation of subdomains for branches. 
  * subDomainSettings **required** `array`:  Describes the settings for the subdomain. 
    * items [SubDomainSetting](#subdomainsetting)

#### Output
* output [UpdateDomainAssociationResult](#updatedomainassociationresult)

### ListWebhooks



```js
amazonaws_amplify.ListWebhooks({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListWebhooksResult](#listwebhooksresult)

### CreateWebhook



```js
amazonaws_amplify.CreateWebhook({
  "appId": "",
  "branchName": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`
  * branchName **required** `string`:  The name for a branch that is part of an Amplify app. 
  * description `string`:  The description for a webhook. 

#### Output
* output [CreateWebhookResult](#createwebhookresult)

### GetArtifactUrl



```js
amazonaws_amplify.GetArtifactUrl({
  "artifactId": ""
}, context)
```

#### Input
* input `object`
  * artifactId **required** `string`

#### Output
* output [GetArtifactUrlResult](#getartifacturlresult)

### ListTagsForResource



```js
amazonaws_amplify.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_amplify.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`:  The tags used to tag the resource. 

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_amplify.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### DeleteWebhook



```js
amazonaws_amplify.DeleteWebhook({
  "webhookId": ""
}, context)
```

#### Input
* input `object`
  * webhookId **required** `string`

#### Output
* output [DeleteWebhookResult](#deletewebhookresult)

### GetWebhook



```js
amazonaws_amplify.GetWebhook({
  "webhookId": ""
}, context)
```

#### Input
* input `object`
  * webhookId **required** `string`

#### Output
* output [GetWebhookResult](#getwebhookresult)

### UpdateWebhook



```js
amazonaws_amplify.UpdateWebhook({
  "webhookId": ""
}, context)
```

#### Input
* input `object`
  * webhookId **required** `string`
  * branchName `string`:  The name for a branch that is part of an Amplify app. 
  * description `string`:  The description for a webhook. 

#### Output
* output [UpdateWebhookResult](#updatewebhookresult)



## Definitions

### AccessToken
* AccessToken `string`

### ActiveJobId
* ActiveJobId `string`

### App
* App `object`:  Represents the different branches of a repository for building, deploying, and hosting an Amplify app. 
  * tags
  * appArn **required**
  * appId **required**
  * autoBranchCreationConfig
    * basicAuthCredentials
    * buildSpec
    * enableAutoBuild
    * enableBasicAuth
    * enablePerformanceMode
    * enablePullRequestPreview
    * environmentVariables
    * framework
    * pullRequestEnvironmentName
    * stage
  * autoBranchCreationPatterns
    * items [AutoBranchCreationPattern](#autobranchcreationpattern)
  * basicAuthCredentials
  * buildSpec
  * createTime **required**
  * customHeaders
  * customRules
    * items [CustomRule](#customrule)
  * defaultDomain **required**
  * description **required**
  * enableAutoBranchCreation
  * enableBasicAuth **required**
  * enableBranchAutoBuild **required**
  * enableBranchAutoDeletion
  * environmentVariables **required**
  * iamServiceRoleArn
  * name **required**
  * platform **required**
  * productionBranch
    * branchName
    * lastDeployTime
    * status
    * thumbnailUrl
  * repository **required**
  * updateTime **required**

### AppArn
* AppArn `string`

### AppId
* AppId `string`

### Apps
* Apps `array`
  * items [App](#app)

### Artifact
* Artifact `object`:  Describes an artifact. 
  * artifactFileName **required**
  * artifactId **required**

### ArtifactFileName
* ArtifactFileName `string`

### ArtifactId
* ArtifactId `string`

### ArtifactUrl
* ArtifactUrl `string`

### Artifacts
* Artifacts `array`
  * items [Artifact](#artifact)

### ArtifactsUrl
* ArtifactsUrl `string`

### AssociatedResource
* AssociatedResource `string`

### AssociatedResources
* AssociatedResources `array`
  * items [AssociatedResource](#associatedresource)

### AutoBranchCreationConfig
* AutoBranchCreationConfig `object`:  Describes the automated branch creation configuration. 
  * basicAuthCredentials
  * buildSpec
  * enableAutoBuild
  * enableBasicAuth
  * enablePerformanceMode
  * enablePullRequestPreview
  * environmentVariables
  * framework
  * pullRequestEnvironmentName
  * stage

### AutoBranchCreationPattern
* AutoBranchCreationPattern `string`

### AutoBranchCreationPatterns
* AutoBranchCreationPatterns `array`
  * items [AutoBranchCreationPattern](#autobranchcreationpattern)

### AutoSubDomainCreationPattern
* AutoSubDomainCreationPattern `string`

### AutoSubDomainCreationPatterns
* AutoSubDomainCreationPatterns `array`
  * items [AutoSubDomainCreationPattern](#autosubdomaincreationpattern)

### AutoSubDomainIAMRole
* AutoSubDomainIAMRole `string`

### BackendEnvironment
* BackendEnvironment `object`:  Describes the backend environment for an Amplify app. 
  * backendEnvironmentArn **required**
  * createTime **required**
  * deploymentArtifacts
  * environmentName **required**
  * stackName
  * updateTime **required**

### BackendEnvironmentArn
* BackendEnvironmentArn `string`

### BackendEnvironments
* BackendEnvironments `array`
  * items [BackendEnvironment](#backendenvironment)

### BadRequestException


### BasicAuthCredentials
* BasicAuthCredentials `string`

### Branch
* Branch `object`:  The branch for an Amplify app, which maps to a third-party repository branch. 
  * tags
  * activeJobId **required**
  * associatedResources
    * items [AssociatedResource](#associatedresource)
  * backendEnvironmentArn
  * basicAuthCredentials
  * branchArn **required**
  * branchName **required**
  * buildSpec
  * createTime **required**
  * customDomains **required**
    * items [CustomDomain](#customdomain)
  * description **required**
  * destinationBranch
  * displayName **required**
  * enableAutoBuild **required**
  * enableBasicAuth **required**
  * enableNotification **required**
  * enablePerformanceMode
  * enablePullRequestPreview **required**
  * environmentVariables **required**
  * framework **required**
  * pullRequestEnvironmentName
  * sourceBranch
  * stage **required**
  * thumbnailUrl
  * totalNumberOfJobs **required**
  * ttl **required**
  * updateTime **required**

### BranchArn
* BranchArn `string`

### BranchName
* BranchName `string`

### Branches
* Branches `array`
  * items [Branch](#branch)

### BuildSpec
* BuildSpec `string`:  The build specification (build spec) file for an Amplify app build. 

### CertificateVerificationDNSRecord
* CertificateVerificationDNSRecord `string`

### CommitId
* CommitId `string`

### CommitMessage
* CommitMessage `string`

### CommitTime
* CommitTime `string`

### Condition
* Condition `string`

### Context
* Context `string`

### CreateAppRequest
* CreateAppRequest `object`:  The request structure used to create apps in Amplify. 
  * tags
  * accessToken
  * autoBranchCreationConfig
    * basicAuthCredentials
    * buildSpec
    * enableAutoBuild
    * enableBasicAuth
    * enablePerformanceMode
    * enablePullRequestPreview
    * environmentVariables
    * framework
    * pullRequestEnvironmentName
    * stage
  * autoBranchCreationPatterns
    * items [AutoBranchCreationPattern](#autobranchcreationpattern)
  * basicAuthCredentials
  * buildSpec
  * customHeaders
  * customRules
    * items [CustomRule](#customrule)
  * description
  * enableAutoBranchCreation
  * enableBasicAuth
  * enableBranchAutoBuild
  * enableBranchAutoDeletion
  * environmentVariables
  * iamServiceRoleArn
  * name **required**
  * oauthToken
  * platform
  * repository

### CreateAppResult
* CreateAppResult `object`
  * app **required** [App](#app)

### CreateBackendEnvironmentRequest
* CreateBackendEnvironmentRequest `object`:  The request structure for the backend environment create request. 
  * deploymentArtifacts
  * environmentName **required**
  * stackName

### CreateBackendEnvironmentResult
* CreateBackendEnvironmentResult `object`:  The result structure for the create backend environment request. 
  * backendEnvironment **required**
    * backendEnvironmentArn **required**
    * createTime **required**
    * deploymentArtifacts
    * environmentName **required**
    * stackName
    * updateTime **required**

### CreateBranchRequest
* CreateBranchRequest `object`:  The request structure for the create branch request. 
  * tags
  * backendEnvironmentArn
  * basicAuthCredentials
  * branchName **required**
  * buildSpec
  * description
  * displayName
  * enableAutoBuild
  * enableBasicAuth
  * enableNotification
  * enablePerformanceMode
  * enablePullRequestPreview
  * environmentVariables
  * framework
  * pullRequestEnvironmentName
  * stage
  * ttl

### CreateBranchResult
* CreateBranchResult `object`:  The result structure for create branch request. 
  * branch **required**
    * tags
    * activeJobId **required**
    * associatedResources
      * items [AssociatedResource](#associatedresource)
    * backendEnvironmentArn
    * basicAuthCredentials
    * branchArn **required**
    * branchName **required**
    * buildSpec
    * createTime **required**
    * customDomains **required**
      * items [CustomDomain](#customdomain)
    * description **required**
    * destinationBranch
    * displayName **required**
    * enableAutoBuild **required**
    * enableBasicAuth **required**
    * enableNotification **required**
    * enablePerformanceMode
    * enablePullRequestPreview **required**
    * environmentVariables **required**
    * framework **required**
    * pullRequestEnvironmentName
    * sourceBranch
    * stage **required**
    * thumbnailUrl
    * totalNumberOfJobs **required**
    * ttl **required**
    * updateTime **required**

### CreateDeploymentRequest
* CreateDeploymentRequest `object`:  The request structure for the create a new deployment request. 
  * fileMap

### CreateDeploymentResult
* CreateDeploymentResult `object`:  The result structure for the create a new deployment request. 
  * fileUploadUrls **required**
  * jobId
  * zipUploadUrl **required**

### CreateDomainAssociationRequest
* CreateDomainAssociationRequest `object`:  The request structure for the create domain association request. 
  * autoSubDomainCreationPatterns
    * items [AutoSubDomainCreationPattern](#autosubdomaincreationpattern)
  * autoSubDomainIAMRole
  * domainName **required**
  * enableAutoSubDomain
  * subDomainSettings **required**
    * items [SubDomainSetting](#subdomainsetting)

### CreateDomainAssociationResult
* CreateDomainAssociationResult `object`:  The result structure for the create domain association request. 
  * domainAssociation **required**
    * autoSubDomainCreationPatterns
      * items [AutoSubDomainCreationPattern](#autosubdomaincreationpattern)
    * autoSubDomainIAMRole
    * certificateVerificationDNSRecord
    * domainAssociationArn **required**
    * domainName **required**
    * domainStatus **required**
    * enableAutoSubDomain **required**
    * statusReason **required**
    * subDomains **required**
      * items [SubDomain](#subdomain)

### CreateTime
* CreateTime `string`

### CreateWebhookRequest
* CreateWebhookRequest `object`:  The request structure for the create webhook request. 
  * branchName **required**
  * description

### CreateWebhookResult
* CreateWebhookResult `object`:  The result structure for the create webhook request. 
  * webhook **required**
    * branchName **required**
    * createTime **required**
    * description **required**
    * updateTime **required**
    * webhookArn **required**
    * webhookId **required**
    * webhookUrl **required**

### CustomDomain
* CustomDomain `string`

### CustomDomains
* CustomDomains `array`
  * items [CustomDomain](#customdomain)

### CustomHeaders
* CustomHeaders `string`

### CustomRule
* CustomRule `object`:  Describes a custom rewrite or redirect rule. 
  * condition
  * source **required**
  * status
  * target **required**

### CustomRules
* CustomRules `array`
  * items [CustomRule](#customrule)

### DNSRecord
* DNSRecord `string`

### DefaultDomain
* DefaultDomain `string`

### DeleteAppRequest
* DeleteAppRequest `object`:  Describes the request structure for the delete app request. 

### DeleteAppResult
* DeleteAppResult `object`:  The result structure for the delete app request. 
  * app **required** [App](#app)

### DeleteBackendEnvironmentRequest
* DeleteBackendEnvironmentRequest `object`:  The request structure for the delete backend environment request. 

### DeleteBackendEnvironmentResult
* DeleteBackendEnvironmentResult `object`:  The result structure of the delete backend environment result. 
  * backendEnvironment **required**
    * backendEnvironmentArn **required**
    * createTime **required**
    * deploymentArtifacts
    * environmentName **required**
    * stackName
    * updateTime **required**

### DeleteBranchRequest
* DeleteBranchRequest `object`:  The request structure for the delete branch request. 

### DeleteBranchResult
* DeleteBranchResult `object`:  The result structure for the delete branch request. 
  * branch **required**
    * tags
    * activeJobId **required**
    * associatedResources
      * items [AssociatedResource](#associatedresource)
    * backendEnvironmentArn
    * basicAuthCredentials
    * branchArn **required**
    * branchName **required**
    * buildSpec
    * createTime **required**
    * customDomains **required**
      * items [CustomDomain](#customdomain)
    * description **required**
    * destinationBranch
    * displayName **required**
    * enableAutoBuild **required**
    * enableBasicAuth **required**
    * enableNotification **required**
    * enablePerformanceMode
    * enablePullRequestPreview **required**
    * environmentVariables **required**
    * framework **required**
    * pullRequestEnvironmentName
    * sourceBranch
    * stage **required**
    * thumbnailUrl
    * totalNumberOfJobs **required**
    * ttl **required**
    * updateTime **required**

### DeleteDomainAssociationRequest
* DeleteDomainAssociationRequest `object`:  The request structure for the delete domain association request. 

### DeleteDomainAssociationResult
* DeleteDomainAssociationResult `object`
  * domainAssociation **required** [DomainAssociation](#domainassociation)

### DeleteJobRequest
* DeleteJobRequest `object`:  The request structure for the delete job request. 

### DeleteJobResult
* DeleteJobResult `object`:  The result structure for the delete job request. 
  * jobSummary **required** [JobSummary](#jobsummary)

### DeleteWebhookRequest
* DeleteWebhookRequest `object`:  The request structure for the delete webhook request. 

### DeleteWebhookResult
* DeleteWebhookResult `object`:  The result structure for the delete webhook request. 
  * webhook **required**
    * branchName **required**
    * createTime **required**
    * description **required**
    * updateTime **required**
    * webhookArn **required**
    * webhookId **required**
    * webhookUrl **required**

### DependentServiceFailureException


### DeploymentArtifacts
* DeploymentArtifacts `string`

### Description
* Description `string`

### DisplayName
* DisplayName `string`

### DomainAssociation
* DomainAssociation `object`:  Describes a domain association that associates a custom domain with an Amplify app. 
  * autoSubDomainCreationPatterns
    * items [AutoSubDomainCreationPattern](#autosubdomaincreationpattern)
  * autoSubDomainIAMRole
  * certificateVerificationDNSRecord
  * domainAssociationArn **required**
  * domainName **required**
  * domainStatus **required**
  * enableAutoSubDomain **required**
  * statusReason **required**
  * subDomains **required**
    * items [SubDomain](#subdomain)

### DomainAssociationArn
* DomainAssociationArn `string`

### DomainAssociations
* DomainAssociations `array`
  * items [DomainAssociation](#domainassociation)

### DomainName
* DomainName `string`

### DomainPrefix
* DomainPrefix `string`

### DomainStatus
* DomainStatus `string` (values: PENDING_VERIFICATION, IN_PROGRESS, AVAILABLE, PENDING_DEPLOYMENT, FAILED, CREATING, REQUESTING_CERTIFICATE, UPDATING)

### EnableAutoBranchCreation
* EnableAutoBranchCreation `boolean`

### EnableAutoBuild
* EnableAutoBuild `boolean`

### EnableAutoSubDomain
* EnableAutoSubDomain `boolean`

### EnableBasicAuth
* EnableBasicAuth `boolean`

### EnableBranchAutoBuild
* EnableBranchAutoBuild `boolean`

### EnableBranchAutoDeletion
* EnableBranchAutoDeletion `boolean`

### EnableNotification
* EnableNotification `boolean`

### EnablePerformanceMode
* EnablePerformanceMode `boolean`

### EnablePullRequestPreview
* EnablePullRequestPreview `boolean`

### EndTime
* EndTime `string`

### EnvKey
* EnvKey `string`

### EnvValue
* EnvValue `string`

### EnvironmentName
* EnvironmentName `string`

### EnvironmentVariables
* EnvironmentVariables `object`

### FileMap
* FileMap `object`

### FileName
* FileName `string`

### FileUploadUrls
* FileUploadUrls `object`

### Framework
* Framework `string`

### GenerateAccessLogsRequest
* GenerateAccessLogsRequest `object`:  The request structure for the generate access logs request. 
  * domainName **required**
  * endTime
  * startTime

### GenerateAccessLogsResult
* GenerateAccessLogsResult `object`:  The result structure for the generate access logs request. 
  * logUrl

### GetAppRequest
* GetAppRequest `object`:  The request structure for the get app request. 

### GetAppResult
* GetAppResult `object`
  * app **required** [App](#app)

### GetArtifactUrlRequest
* GetArtifactUrlRequest `object`:  Returns the request structure for the get artifact request. 

### GetArtifactUrlResult
* GetArtifactUrlResult `object`:  Returns the result structure for the get artifact request. 
  * artifactId **required**
  * artifactUrl **required**

### GetBackendEnvironmentRequest
* GetBackendEnvironmentRequest `object`:  The request structure for the get backend environment request. 

### GetBackendEnvironmentResult
* GetBackendEnvironmentResult `object`:  The result structure for the get backend environment result. 
  * backendEnvironment **required**
    * backendEnvironmentArn **required**
    * createTime **required**
    * deploymentArtifacts
    * environmentName **required**
    * stackName
    * updateTime **required**

### GetBranchRequest
* GetBranchRequest `object`:  The request structure for the get branch request. 

### GetBranchResult
* GetBranchResult `object`
  * branch **required** [Branch](#branch)

### GetDomainAssociationRequest
* GetDomainAssociationRequest `object`:  The request structure for the get domain association request. 

### GetDomainAssociationResult
* GetDomainAssociationResult `object`:  The result structure for the get domain association request. 
  * domainAssociation **required**
    * autoSubDomainCreationPatterns
      * items [AutoSubDomainCreationPattern](#autosubdomaincreationpattern)
    * autoSubDomainIAMRole
    * certificateVerificationDNSRecord
    * domainAssociationArn **required**
    * domainName **required**
    * domainStatus **required**
    * enableAutoSubDomain **required**
    * statusReason **required**
    * subDomains **required**
      * items [SubDomain](#subdomain)

### GetJobRequest
* GetJobRequest `object`:  The request structure for the get job request. 

### GetJobResult
* GetJobResult `object`
  * job **required** [Job](#job)

### GetWebhookRequest
* GetWebhookRequest `object`:  The request structure for the get webhook request. 

### GetWebhookResult
* GetWebhookResult `object`:  The result structure for the get webhook request. 
  * webhook **required**
    * branchName **required**
    * createTime **required**
    * description **required**
    * updateTime **required**
    * webhookArn **required**
    * webhookId **required**
    * webhookUrl **required**

### InternalFailureException


### Job
* Job `object`:  Describes an execution job for an Amplify app. 
  * steps **required**
    * items [Step](#step)
  * summary **required**
    * commitId **required**
    * commitMessage **required**
    * commitTime **required**
    * endTime
    * jobArn **required**
    * jobId **required**
    * jobType **required**
    * startTime **required**
    * status **required**

### JobArn
* JobArn `string`

### JobId
* JobId `string`

### JobReason
* JobReason `string`

### JobStatus
* JobStatus `string` (values: PENDING, PROVISIONING, RUNNING, FAILED, SUCCEED, CANCELLING, CANCELLED)

### JobSummaries
* JobSummaries `array`
  * items [JobSummary](#jobsummary)

### JobSummary
* JobSummary `object`:  Describes the summary for an execution job for an Amplify app. 
  * commitId **required**
  * commitMessage **required**
  * commitTime **required**
  * endTime
  * jobArn **required**
  * jobId **required**
  * jobType **required**
  * startTime **required**
  * status **required**

### JobType
* JobType `string` (values: RELEASE, RETRY, MANUAL, WEB_HOOK)

### LastDeployTime
* LastDeployTime `string`

### LimitExceededException


### ListAppsRequest
* ListAppsRequest `object`:  The request structure for the list apps request. 

### ListAppsResult
* ListAppsResult `object`:  The result structure for an Amplify app list request. 
  * apps **required**
    * items [App](#app)
  * nextToken

### ListArtifactsRequest
* ListArtifactsRequest `object`:  Describes the request structure for the list artifacts request. 

### ListArtifactsResult
* ListArtifactsResult `object`:  The result structure for the list artifacts request. 
  * artifacts **required**
    * items [Artifact](#artifact)
  * nextToken

### ListBackendEnvironmentsRequest
* ListBackendEnvironmentsRequest `object`:  The request structure for the list backend environments request. 

### ListBackendEnvironmentsResult
* ListBackendEnvironmentsResult `object`:  The result structure for the list backend environments result. 
  * backendEnvironments **required**
    * items [BackendEnvironment](#backendenvironment)
  * nextToken

### ListBranchesRequest
* ListBranchesRequest `object`:  The request structure for the list branches request. 

### ListBranchesResult
* ListBranchesResult `object`:  The result structure for the list branches request. 
  * branches **required**
    * items [Branch](#branch)
  * nextToken

### ListDomainAssociationsRequest
* ListDomainAssociationsRequest `object`:  The request structure for the list domain associations request. 

### ListDomainAssociationsResult
* ListDomainAssociationsResult `object`:  The result structure for the list domain association request. 
  * domainAssociations **required**
    * items [DomainAssociation](#domainassociation)
  * nextToken

### ListJobsRequest
* ListJobsRequest `object`:  The request structure for the list jobs request. 

### ListJobsResult
* ListJobsResult `object`:  The maximum number of records to list in a single response. 
  * jobSummaries **required**
    * items [JobSummary](#jobsummary)
  * nextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`:  The request structure to use to list tags for a resource. 

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`:  The response for the list tags for resource request. 
  * tags

### ListWebhooksRequest
* ListWebhooksRequest `object`:  The request structure for the list webhooks request. 

### ListWebhooksResult
* ListWebhooksResult `object`:  The result structure for the list webhooks request. 
  * nextToken
  * webhooks **required**
    * items [Webhook](#webhook)

### LogUrl
* LogUrl `string`

### MD5Hash
* MD5Hash `string`

### MaxResults
* MaxResults `integer`

### Name
* Name `string`

### NextToken
* NextToken `string`

### NotFoundException


### OauthToken
* OauthToken `string`

### Platform
* Platform `string` (values: WEB)

### ProductionBranch
* ProductionBranch `object`:  Describes the information about a production branch for an Amplify app. 
  * branchName
  * lastDeployTime
  * status
  * thumbnailUrl

### PullRequestEnvironmentName
* PullRequestEnvironmentName `string`

### Repository
* Repository `string`

### ResourceArn
* ResourceArn `string`

### ResourceNotFoundException


### Screenshots
* Screenshots `object`

### ServiceRoleArn
* ServiceRoleArn `string`

### Source
* Source `string`

### SourceUrl
* SourceUrl `string`

### StackName
* StackName `string`

### Stage
* Stage `string` (values: PRODUCTION, BETA, DEVELOPMENT, EXPERIMENTAL, PULL_REQUEST)

### StartDeploymentRequest
* StartDeploymentRequest `object`:  The request structure for the start a deployment request. 
  * jobId
  * sourceUrl

### StartDeploymentResult
* StartDeploymentResult `object`:  The result structure for the start a deployment request. 
  * jobSummary **required**
    * commitId **required**
    * commitMessage **required**
    * commitTime **required**
    * endTime
    * jobArn **required**
    * jobId **required**
    * jobType **required**
    * startTime **required**
    * status **required**

### StartJobRequest
* StartJobRequest `object`:  The request structure for the start job request. 
  * commitId
  * commitMessage
  * commitTime
  * jobId
  * jobReason
  * jobType **required**

### StartJobResult
* StartJobResult `object`:  The result structure for the run job request. 
  * jobSummary **required**
    * commitId **required**
    * commitMessage **required**
    * commitTime **required**
    * endTime
    * jobArn **required**
    * jobId **required**
    * jobType **required**
    * startTime **required**
    * status **required**

### StartTime
* StartTime `string`

### Status
* Status `string`

### StatusReason
* StatusReason `string`

### Step
* Step `object`:  Describes an execution step, for an execution job, for an Amplify app. 
  * artifactsUrl
  * context
  * endTime **required**
  * logUrl
  * screenshots
  * startTime **required**
  * status **required**
  * statusReason
  * stepName **required**
  * testArtifactsUrl
  * testConfigUrl

### StepName
* StepName `string`

### Steps
* Steps `array`
  * items [Step](#step)

### StopJobRequest
* StopJobRequest `object`:  The request structure for the stop job request. 

### StopJobResult
* StopJobResult `object`:  The result structure for the stop job request. 
  * jobSummary **required**
    * commitId **required**
    * commitMessage **required**
    * commitTime **required**
    * endTime
    * jobArn **required**
    * jobId **required**
    * jobType **required**
    * startTime **required**
    * status **required**

### SubDomain
* SubDomain `object`:  The subdomain for the domain association. 
  * dnsRecord **required**
  * subDomainSetting **required**
    * branchName **required**
    * prefix **required**
  * verified **required**

### SubDomainSetting
* SubDomainSetting `object`:  Describes the settings for the subdomain. 
  * branchName **required**
  * prefix **required**

### SubDomainSettings
* SubDomainSettings `array`
  * items [SubDomainSetting](#subdomainsetting)

### SubDomains
* SubDomains `array`
  * items [SubDomain](#subdomain)

### TTL
* TTL `string`:  The content Time to Live (TTL) for the website in seconds. 

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`:  The request structure to tag a resource with a tag key and value. 
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`:  The response for the tag resource request. 

### TagValue
* TagValue `string`

### Target
* Target `string`

### TestArtifactsUrl
* TestArtifactsUrl `string`

### TestConfigUrl
* TestConfigUrl `string`

### ThumbnailName
* ThumbnailName `string`

### ThumbnailUrl
* ThumbnailUrl `string`

### TotalNumberOfJobs
* TotalNumberOfJobs `string`

### UnauthorizedException


### UntagResourceRequest
* UntagResourceRequest `object`:  The request structure for the untag resource request. 

### UntagResourceResponse
* UntagResourceResponse `object`:  The response for the untag resource request. 

### UpdateAppRequest
* UpdateAppRequest `object`:  The request structure for the update app request. 
  * accessToken
  * autoBranchCreationConfig
    * basicAuthCredentials
    * buildSpec
    * enableAutoBuild
    * enableBasicAuth
    * enablePerformanceMode
    * enablePullRequestPreview
    * environmentVariables
    * framework
    * pullRequestEnvironmentName
    * stage
  * autoBranchCreationPatterns
    * items [AutoBranchCreationPattern](#autobranchcreationpattern)
  * basicAuthCredentials
  * buildSpec
  * customHeaders
  * customRules
    * items [CustomRule](#customrule)
  * description
  * enableAutoBranchCreation
  * enableBasicAuth
  * enableBranchAutoBuild
  * enableBranchAutoDeletion
  * environmentVariables
  * iamServiceRoleArn
  * name
  * oauthToken
  * platform
  * repository

### UpdateAppResult
* UpdateAppResult `object`:  The result structure for an Amplify app update request. 
  * app **required**
    * tags
    * appArn **required**
    * appId **required**
    * autoBranchCreationConfig
      * basicAuthCredentials
      * buildSpec
      * enableAutoBuild
      * enableBasicAuth
      * enablePerformanceMode
      * enablePullRequestPreview
      * environmentVariables
      * framework
      * pullRequestEnvironmentName
      * stage
    * autoBranchCreationPatterns
      * items [AutoBranchCreationPattern](#autobranchcreationpattern)
    * basicAuthCredentials
    * buildSpec
    * createTime **required**
    * customHeaders
    * customRules
      * items [CustomRule](#customrule)
    * defaultDomain **required**
    * description **required**
    * enableAutoBranchCreation
    * enableBasicAuth **required**
    * enableBranchAutoBuild **required**
    * enableBranchAutoDeletion
    * environmentVariables **required**
    * iamServiceRoleArn
    * name **required**
    * platform **required**
    * productionBranch
      * branchName
      * lastDeployTime
      * status
      * thumbnailUrl
    * repository **required**
    * updateTime **required**

### UpdateBranchRequest
* UpdateBranchRequest `object`:  The request structure for the update branch request. 
  * backendEnvironmentArn
  * basicAuthCredentials
  * buildSpec
  * description
  * displayName
  * enableAutoBuild
  * enableBasicAuth
  * enableNotification
  * enablePerformanceMode
  * enablePullRequestPreview
  * environmentVariables
  * framework
  * pullRequestEnvironmentName
  * stage
  * ttl

### UpdateBranchResult
* UpdateBranchResult `object`:  The result structure for the update branch request. 
  * branch **required**
    * tags
    * activeJobId **required**
    * associatedResources
      * items [AssociatedResource](#associatedresource)
    * backendEnvironmentArn
    * basicAuthCredentials
    * branchArn **required**
    * branchName **required**
    * buildSpec
    * createTime **required**
    * customDomains **required**
      * items [CustomDomain](#customdomain)
    * description **required**
    * destinationBranch
    * displayName **required**
    * enableAutoBuild **required**
    * enableBasicAuth **required**
    * enableNotification **required**
    * enablePerformanceMode
    * enablePullRequestPreview **required**
    * environmentVariables **required**
    * framework **required**
    * pullRequestEnvironmentName
    * sourceBranch
    * stage **required**
    * thumbnailUrl
    * totalNumberOfJobs **required**
    * ttl **required**
    * updateTime **required**

### UpdateDomainAssociationRequest
* UpdateDomainAssociationRequest `object`:  The request structure for the update domain association request. 
  * autoSubDomainCreationPatterns
    * items [AutoSubDomainCreationPattern](#autosubdomaincreationpattern)
  * autoSubDomainIAMRole
  * enableAutoSubDomain
  * subDomainSettings **required**
    * items [SubDomainSetting](#subdomainsetting)

### UpdateDomainAssociationResult
* UpdateDomainAssociationResult `object`:  The result structure for the update domain association request. 
  * domainAssociation **required**
    * autoSubDomainCreationPatterns
      * items [AutoSubDomainCreationPattern](#autosubdomaincreationpattern)
    * autoSubDomainIAMRole
    * certificateVerificationDNSRecord
    * domainAssociationArn **required**
    * domainName **required**
    * domainStatus **required**
    * enableAutoSubDomain **required**
    * statusReason **required**
    * subDomains **required**
      * items [SubDomain](#subdomain)

### UpdateTime
* UpdateTime `string`

### UpdateWebhookRequest
* UpdateWebhookRequest `object`:  The request structure for the update webhook request. 
  * branchName
  * description

### UpdateWebhookResult
* UpdateWebhookResult `object`:  The result structure for the update webhook request. 
  * webhook **required**
    * branchName **required**
    * createTime **required**
    * description **required**
    * updateTime **required**
    * webhookArn **required**
    * webhookId **required**
    * webhookUrl **required**

### UploadUrl
* UploadUrl `string`

### Verified
* Verified `boolean`

### Webhook
* Webhook `object`:  Describes a webhook that connects repository events to an Amplify app. 
  * branchName **required**
  * createTime **required**
  * description **required**
  * updateTime **required**
  * webhookArn **required**
  * webhookId **required**
  * webhookUrl **required**

### WebhookArn
* WebhookArn `string`

### WebhookId
* WebhookId `string`

### WebhookUrl
* WebhookUrl `string`

### Webhooks
* Webhooks `array`
  * items [Webhook](#webhook)


