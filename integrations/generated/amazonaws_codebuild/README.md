# @datafire/amazonaws_codebuild

Client library for AWS CodeBuild

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_codebuild
```
```js
let amazonaws_codebuild = require('@datafire/amazonaws_codebuild').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS CodeBuild</fullname> <p>AWS CodeBuild is a fully managed build service in the cloud. AWS CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy. AWS CodeBuild eliminates the need to provision, manage, and scale your own build servers. It provides prepackaged build environments for the most popular programming languages and build tools, such as Apache Maven, Gradle, and more. You can also fully customize build environments in AWS CodeBuild to use your own build tools. AWS CodeBuild scales automatically to meet peak build requests. You pay only for the build time you consume. For more information about AWS CodeBuild, see the <i> <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html">AWS CodeBuild User Guide</a>.</i> </p> <p>AWS CodeBuild supports these operations:</p> <ul> <li> <p> <code>BatchDeleteBuilds</code>: Deletes one or more builds.</p> </li> <li> <p> <code>BatchGetBuilds</code>: Gets information about one or more builds.</p> </li> <li> <p> <code>BatchGetProjects</code>: Gets information about one or more build projects. A <i>build project</i> defines how AWS CodeBuild runs a build. This includes information such as where to get the source code to build, the build environment to use, the build commands to run, and where to store the build output. A <i>build environment</i> is a representation of operating system, programming language runtime, and tools that AWS CodeBuild uses to run a build. You can add tags to build projects to help manage your resources and costs.</p> </li> <li> <p> <code>BatchGetReportGroups</code>: Returns an array of report groups. </p> </li> <li> <p> <code>BatchGetReports</code>: Returns an array of reports. </p> </li> <li> <p> <code>CreateProject</code>: Creates a build project.</p> </li> <li> <p> <code>CreateReportGroup</code>: Creates a report group. A report group contains a collection of reports. </p> </li> <li> <p> <code>CreateWebhook</code>: For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> </li> <li> <p> <code>DeleteProject</code>: Deletes a build project.</p> </li> <li> <p> <code>DeleteReport</code>: Deletes a report. </p> </li> <li> <p> <code>DeleteReportGroup</code>: Deletes a report group. </p> </li> <li> <p> <code>DeleteResourcePolicy</code>: Deletes a resource policy that is identified by its resource ARN. </p> </li> <li> <p> <code>DeleteSourceCredentials</code>: Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.</p> </li> <li> <p> <code>DeleteWebhook</code>: For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code change is pushed to the repository.</p> </li> <li> <p> <code>DescribeTestCases</code>: Returns a list of details about test cases for a report. </p> </li> <li> <p> <code>GetResourcePolicy</code>: Gets a resource policy that is identified by its resource ARN. </p> </li> <li> <p> <code>ImportSourceCredentials</code>: Imports the source repository credentials for an AWS CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository.</p> </li> <li> <p> <code>InvalidateProjectCache</code>: Resets the cache for a project.</p> </li> <li> <p> <code>ListBuilds</code>: Gets a list of build IDs, with each build ID representing a single build.</p> </li> <li> <p> <code>ListBuildsForProject</code>: Gets a list of build IDs for the specified build project, with each build ID representing a single build.</p> </li> <li> <p> <code>ListCuratedEnvironmentImages</code>: Gets information about Docker images that are managed by AWS CodeBuild.</p> </li> <li> <p> <code>ListProjects</code>: Gets a list of build project names, with each build project name representing a single build project.</p> </li> <li> <p> <code>ListReportGroups</code>: Gets a list ARNs for the report groups in the current AWS account. </p> </li> <li> <p> <code>ListReports</code>: Gets a list ARNs for the reports in the current AWS account. </p> </li> <li> <p> <code>ListReportsForReportGroup</code>: Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>. </p> </li> <li> <p> <code>ListSharedProjects</code>: Gets a list of ARNs associated with projects shared with the current AWS account or user.</p> </li> <li> <p> <code>ListSharedReportGroups</code>: Gets a list of ARNs associated with report groups shared with the current AWS account or user</p> </li> <li> <p> <code>ListSourceCredentials</code>: Returns a list of <code>SourceCredentialsInfo</code> objects. Each <code>SourceCredentialsInfo</code> object includes the authentication type, token ARN, and type of source provider for one set of credentials.</p> </li> <li> <p> <code>PutResourcePolicy</code>: Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object. </p> </li> <li> <p> <code>StartBuild</code>: Starts running a build.</p> </li> <li> <p> <code>StopBuild</code>: Attempts to stop running a build.</p> </li> <li> <p> <code>UpdateProject</code>: Changes the settings of an existing build project.</p> </li> <li> <p> <code>UpdateReportGroup</code>: Changes a report group.</p> </li> <li> <p> <code>UpdateWebhook</code>: Changes the settings of an existing webhook.</p> </li> </ul>

## Actions

### BatchDeleteBuilds



```js
amazonaws_codebuild.BatchDeleteBuilds({
  "ids": null
}, context)
```

#### Input
* input `object`
  * ids **required**
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [BatchDeleteBuildsOutput](#batchdeletebuildsoutput)

### BatchGetBuildBatches



```js
amazonaws_codebuild.BatchGetBuildBatches({
  "ids": null
}, context)
```

#### Input
* input `object`
  * ids **required**
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [BatchGetBuildBatchesOutput](#batchgetbuildbatchesoutput)

### BatchGetBuilds



```js
amazonaws_codebuild.BatchGetBuilds({
  "ids": null
}, context)
```

#### Input
* input `object`
  * ids **required**
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [BatchGetBuildsOutput](#batchgetbuildsoutput)

### BatchGetProjects



```js
amazonaws_codebuild.BatchGetProjects({
  "names": null
}, context)
```

#### Input
* input `object`
  * names **required**
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [BatchGetProjectsOutput](#batchgetprojectsoutput)

### BatchGetReportGroups



```js
amazonaws_codebuild.BatchGetReportGroups({
  "reportGroupArns": null
}, context)
```

#### Input
* input `object`
  * reportGroupArns **required**
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [BatchGetReportGroupsOutput](#batchgetreportgroupsoutput)

### BatchGetReports



```js
amazonaws_codebuild.BatchGetReports({
  "reportArns": null
}, context)
```

#### Input
* input `object`
  * reportArns **required**
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [BatchGetReportsOutput](#batchgetreportsoutput)

### CreateProject



```js
amazonaws_codebuild.CreateProject({
  "name": null,
  "source": null,
  "artifacts": null,
  "environment": null,
  "serviceRole": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * artifacts **required**
    * artifactIdentifier
    * encryptionDisabled
    * location
    * name
    * namespaceType
    * overrideArtifactName
    * packaging
    * path
    * type **required**
  * badgeEnabled
  * buildBatchConfig
    * combineArtifacts
    * restrictions
      * computeTypesAllowed
        * items [NonEmptyString](#nonemptystring)
      * maximumBuildsAllowed
    * serviceRole
    * timeoutInMins
  * cache
    * location
    * modes
      * items [CacheMode](#cachemode)
    * type **required**
  * description
  * encryptionKey
  * environment **required**
    * certificate
    * computeType **required**
    * environmentVariables
      * items [EnvironmentVariable](#environmentvariable)
    * image **required**
    * imagePullCredentialsType
    * privilegedMode
    * registryCredential
      * credential **required**
      * credentialProvider **required**
    * type **required**
  * fileSystemLocations
    * items [ProjectFileSystemLocation](#projectfilesystemlocation)
  * logsConfig
    * cloudWatchLogs
      * groupName
      * status **required**
      * streamName
    * s3Logs
      * encryptionDisabled
      * location
      * status **required**
  * name **required**
  * queuedTimeoutInMinutes
  * secondaryArtifacts
    * items [ProjectArtifacts](#projectartifacts)
  * secondarySourceVersions
    * items [ProjectSourceVersion](#projectsourceversion)
  * secondarySources
    * items [ProjectSource](#projectsource)
  * serviceRole **required**
  * source **required**
    * auth
      * resource
      * type **required**
    * buildStatusConfig
      * context
      * targetUrl
    * buildspec
    * gitCloneDepth
    * gitSubmodulesConfig
      * fetchSubmodules **required**
    * insecureSsl
    * location
    * reportBuildStatus
    * sourceIdentifier
    * type **required**
  * sourceVersion
  * timeoutInMinutes
  * vpcConfig
    * securityGroupIds
      * items [NonEmptyString](#nonemptystring)
    * subnets
      * items [NonEmptyString](#nonemptystring)
    * vpcId

#### Output
* output [CreateProjectOutput](#createprojectoutput)

### CreateReportGroup



```js
amazonaws_codebuild.CreateReportGroup({
  "name": null,
  "type": null,
  "exportConfig": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * exportConfig **required**
    * exportConfigType
    * s3Destination
      * bucket
      * encryptionDisabled
      * encryptionKey
      * packaging
      * path
  * name **required**
  * type **required**

#### Output
* output [CreateReportGroupOutput](#createreportgroupoutput)

### CreateWebhook



```js
amazonaws_codebuild.CreateWebhook({
  "projectName": null
}, context)
```

#### Input
* input `object`
  * branchFilter
  * buildType
  * filterGroups
    * items [FilterGroup](#filtergroup)
  * projectName **required**

#### Output
* output [CreateWebhookOutput](#createwebhookoutput)

### DeleteBuildBatch



```js
amazonaws_codebuild.DeleteBuildBatch({
  "id": null
}, context)
```

#### Input
* input `object`
  * id **required**

#### Output
* output [DeleteBuildBatchOutput](#deletebuildbatchoutput)

### DeleteProject



```js
amazonaws_codebuild.DeleteProject({
  "name": null
}, context)
```

#### Input
* input `object`
  * name **required**

#### Output
* output [DeleteProjectOutput](#deleteprojectoutput)

### DeleteReport



```js
amazonaws_codebuild.DeleteReport({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [DeleteReportOutput](#deletereportoutput)

### DeleteReportGroup



```js
amazonaws_codebuild.DeleteReportGroup({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**
  * deleteReports

#### Output
* output [DeleteReportGroupOutput](#deletereportgroupoutput)

### DeleteResourcePolicy



```js
amazonaws_codebuild.DeleteResourcePolicy({
  "resourceArn": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**

#### Output
* output [DeleteResourcePolicyOutput](#deleteresourcepolicyoutput)

### DeleteSourceCredentials



```js
amazonaws_codebuild.DeleteSourceCredentials({
  "arn": null
}, context)
```

#### Input
* input `object`
  * arn **required**

#### Output
* output [DeleteSourceCredentialsOutput](#deletesourcecredentialsoutput)

### DeleteWebhook



```js
amazonaws_codebuild.DeleteWebhook({
  "projectName": null
}, context)
```

#### Input
* input `object`
  * projectName **required**

#### Output
* output [DeleteWebhookOutput](#deletewebhookoutput)

### DescribeCodeCoverages



```js
amazonaws_codebuild.DescribeCodeCoverages({
  "reportArn": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxLineCoveragePercentage
  * maxResults
  * minLineCoveragePercentage
  * nextToken
  * reportArn **required**
  * sortBy
  * sortOrder

#### Output
* output [DescribeCodeCoveragesOutput](#describecodecoveragesoutput)

### DescribeTestCases



```js
amazonaws_codebuild.DescribeTestCases({
  "reportArn": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter
    * keyword
    * status
  * maxResults
  * nextToken
  * reportArn **required**

#### Output
* output [DescribeTestCasesOutput](#describetestcasesoutput)

### GetReportGroupTrend



```js
amazonaws_codebuild.GetReportGroupTrend({
  "reportGroupArn": "",
  "trendField": ""
}, context)
```

#### Input
* input `object`
  * numOfReports [PageSize](#pagesize)
  * reportGroupArn **required** [NonEmptyString](#nonemptystring)
  * trendField **required** [ReportGroupTrendFieldType](#reportgrouptrendfieldtype)

#### Output
* output [GetReportGroupTrendOutput](#getreportgrouptrendoutput)

### GetResourcePolicy



```js
amazonaws_codebuild.GetResourcePolicy({
  "resourceArn": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**

#### Output
* output [GetResourcePolicyOutput](#getresourcepolicyoutput)

### ImportSourceCredentials



```js
amazonaws_codebuild.ImportSourceCredentials({
  "token": null,
  "serverType": null,
  "authType": null
}, context)
```

#### Input
* input `object`
  * authType **required**
  * serverType **required**
  * shouldOverwrite
  * token **required**
  * username

#### Output
* output [ImportSourceCredentialsOutput](#importsourcecredentialsoutput)

### InvalidateProjectCache



```js
amazonaws_codebuild.InvalidateProjectCache({
  "projectName": null
}, context)
```

#### Input
* input `object`
  * projectName **required**

#### Output
* output [InvalidateProjectCacheOutput](#invalidateprojectcacheoutput)

### ListBuildBatches



```js
amazonaws_codebuild.ListBuildBatches({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter
    * status
  * maxResults
  * nextToken
  * sortOrder

#### Output
* output [ListBuildBatchesOutput](#listbuildbatchesoutput)

### ListBuildBatchesForProject



```js
amazonaws_codebuild.ListBuildBatchesForProject({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter
    * status
  * maxResults
  * nextToken
  * projectName
  * sortOrder

#### Output
* output [ListBuildBatchesForProjectOutput](#listbuildbatchesforprojectoutput)

### ListBuilds



```js
amazonaws_codebuild.ListBuilds({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken
  * sortOrder

#### Output
* output [ListBuildsOutput](#listbuildsoutput)

### ListBuildsForProject



```js
amazonaws_codebuild.ListBuildsForProject({
  "projectName": null
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken
  * projectName **required**
  * sortOrder

#### Output
* output [ListBuildsForProjectOutput](#listbuildsforprojectoutput)

### ListCuratedEnvironmentImages



```js
amazonaws_codebuild.ListCuratedEnvironmentImages({}, context)
```

#### Input
* input `object`

#### Output
* output [ListCuratedEnvironmentImagesOutput](#listcuratedenvironmentimagesoutput)

### ListProjects



```js
amazonaws_codebuild.ListProjects({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken
  * sortBy
  * sortOrder

#### Output
* output [ListProjectsOutput](#listprojectsoutput)

### ListReportGroups



```js
amazonaws_codebuild.ListReportGroups({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * sortBy
  * sortOrder

#### Output
* output [ListReportGroupsOutput](#listreportgroupsoutput)

### ListReports



```js
amazonaws_codebuild.ListReports({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter
    * status
  * maxResults
  * nextToken
  * sortOrder

#### Output
* output [ListReportsOutput](#listreportsoutput)

### ListReportsForReportGroup



```js
amazonaws_codebuild.ListReportsForReportGroup({
  "reportGroupArn": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter
    * status
  * maxResults
  * nextToken
  * reportGroupArn **required**
  * sortOrder

#### Output
* output [ListReportsForReportGroupOutput](#listreportsforreportgroupoutput)

### ListSharedProjects



```js
amazonaws_codebuild.ListSharedProjects({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * sortBy
  * sortOrder

#### Output
* output [ListSharedProjectsOutput](#listsharedprojectsoutput)

### ListSharedReportGroups



```js
amazonaws_codebuild.ListSharedReportGroups({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * sortBy
  * sortOrder

#### Output
* output [ListSharedReportGroupsOutput](#listsharedreportgroupsoutput)

### ListSourceCredentials



```js
amazonaws_codebuild.ListSourceCredentials({}, context)
```

#### Input
* input `object`

#### Output
* output [ListSourceCredentialsOutput](#listsourcecredentialsoutput)

### PutResourcePolicy



```js
amazonaws_codebuild.PutResourcePolicy({
  "policy": null,
  "resourceArn": null
}, context)
```

#### Input
* input `object`
  * policy **required**
  * resourceArn **required**

#### Output
* output [PutResourcePolicyOutput](#putresourcepolicyoutput)

### RetryBuild



```js
amazonaws_codebuild.RetryBuild({}, context)
```

#### Input
* input `object`
  * id

#### Output
* output [RetryBuildOutput](#retrybuildoutput)

### RetryBuildBatch



```js
amazonaws_codebuild.RetryBuildBatch({}, context)
```

#### Input
* input `object`
  * id
  * retryType

#### Output
* output [RetryBuildBatchOutput](#retrybuildbatchoutput)

### StartBuild



```js
amazonaws_codebuild.StartBuild({
  "projectName": null
}, context)
```

#### Input
* input `object`
  * artifactsOverride
    * artifactIdentifier
    * encryptionDisabled
    * location
    * name
    * namespaceType
    * overrideArtifactName
    * packaging
    * path
    * type **required**
  * buildStatusConfigOverride
    * context
    * targetUrl
  * buildspecOverride
  * cacheOverride
    * location
    * modes
      * items [CacheMode](#cachemode)
    * type **required**
  * certificateOverride
  * computeTypeOverride
  * debugSessionEnabled
  * encryptionKeyOverride
  * environmentTypeOverride
  * environmentVariablesOverride
    * items [EnvironmentVariable](#environmentvariable)
  * gitCloneDepthOverride
  * gitSubmodulesConfigOverride
    * fetchSubmodules **required**
  * imageOverride
  * imagePullCredentialsTypeOverride
  * insecureSslOverride
  * logsConfigOverride
    * cloudWatchLogs
      * groupName
      * status **required**
      * streamName
    * s3Logs
      * encryptionDisabled
      * location
      * status **required**
  * privilegedModeOverride
  * projectName **required**
  * queuedTimeoutInMinutesOverride
  * registryCredentialOverride
    * credential **required**
    * credentialProvider **required**
  * reportBuildStatusOverride
  * secondaryArtifactsOverride
    * items [ProjectArtifacts](#projectartifacts)
  * secondarySourcesOverride
    * items [ProjectSource](#projectsource)
  * secondarySourcesVersionOverride
    * items [ProjectSourceVersion](#projectsourceversion)
  * serviceRoleOverride
  * sourceAuthOverride
    * resource
    * type **required**
  * sourceLocationOverride
  * sourceTypeOverride
  * sourceVersion
  * timeoutInMinutesOverride

#### Output
* output [StartBuildOutput](#startbuildoutput)

### StartBuildBatch



```js
amazonaws_codebuild.StartBuildBatch({
  "projectName": null
}, context)
```

#### Input
* input `object`
  * artifactsOverride
    * artifactIdentifier
    * encryptionDisabled
    * location
    * name
    * namespaceType
    * overrideArtifactName
    * packaging
    * path
    * type **required**
  * buildBatchConfigOverride
    * combineArtifacts
    * restrictions
      * computeTypesAllowed
        * items [NonEmptyString](#nonemptystring)
      * maximumBuildsAllowed
    * serviceRole
    * timeoutInMins
  * buildTimeoutInMinutesOverride
  * buildspecOverride
  * cacheOverride
    * location
    * modes
      * items [CacheMode](#cachemode)
    * type **required**
  * certificateOverride
  * computeTypeOverride
  * encryptionKeyOverride
  * environmentTypeOverride
  * environmentVariablesOverride
    * items [EnvironmentVariable](#environmentvariable)
  * gitCloneDepthOverride
  * gitSubmodulesConfigOverride
    * fetchSubmodules **required**
  * imageOverride
  * imagePullCredentialsTypeOverride
  * insecureSslOverride
  * logsConfigOverride
    * cloudWatchLogs
      * groupName
      * status **required**
      * streamName
    * s3Logs
      * encryptionDisabled
      * location
      * status **required**
  * privilegedModeOverride
  * projectName **required**
  * queuedTimeoutInMinutesOverride
  * registryCredentialOverride
    * credential **required**
    * credentialProvider **required**
  * reportBuildBatchStatusOverride
  * secondaryArtifactsOverride
    * items [ProjectArtifacts](#projectartifacts)
  * secondarySourcesOverride
    * items [ProjectSource](#projectsource)
  * secondarySourcesVersionOverride
    * items [ProjectSourceVersion](#projectsourceversion)
  * serviceRoleOverride
  * sourceAuthOverride
    * resource
    * type **required**
  * sourceLocationOverride
  * sourceTypeOverride
  * sourceVersion

#### Output
* output [StartBuildBatchOutput](#startbuildbatchoutput)

### StopBuild



```js
amazonaws_codebuild.StopBuild({
  "id": null
}, context)
```

#### Input
* input `object`
  * id **required**

#### Output
* output [StopBuildOutput](#stopbuildoutput)

### StopBuildBatch



```js
amazonaws_codebuild.StopBuildBatch({
  "id": null
}, context)
```

#### Input
* input `object`
  * id **required**

#### Output
* output [StopBuildBatchOutput](#stopbuildbatchoutput)

### UpdateProject



```js
amazonaws_codebuild.UpdateProject({
  "name": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * artifacts
    * artifactIdentifier
    * encryptionDisabled
    * location
    * name
    * namespaceType
    * overrideArtifactName
    * packaging
    * path
    * type **required**
  * badgeEnabled
  * buildBatchConfig [ProjectBuildBatchConfig](#projectbuildbatchconfig)
  * cache
    * location
    * modes
      * items [CacheMode](#cachemode)
    * type **required**
  * description
  * encryptionKey
  * environment
    * certificate
    * computeType **required**
    * environmentVariables
      * items [EnvironmentVariable](#environmentvariable)
    * image **required**
    * imagePullCredentialsType
    * privilegedMode
    * registryCredential
      * credential **required**
      * credentialProvider **required**
    * type **required**
  * fileSystemLocations
    * items [ProjectFileSystemLocation](#projectfilesystemlocation)
  * logsConfig
    * cloudWatchLogs
      * groupName
      * status **required**
      * streamName
    * s3Logs
      * encryptionDisabled
      * location
      * status **required**
  * name **required**
  * queuedTimeoutInMinutes
  * secondaryArtifacts
    * items [ProjectArtifacts](#projectartifacts)
  * secondarySourceVersions
    * items [ProjectSourceVersion](#projectsourceversion)
  * secondarySources
    * items [ProjectSource](#projectsource)
  * serviceRole
  * source
    * auth
      * resource
      * type **required**
    * buildStatusConfig
      * context
      * targetUrl
    * buildspec
    * gitCloneDepth
    * gitSubmodulesConfig
      * fetchSubmodules **required**
    * insecureSsl
    * location
    * reportBuildStatus
    * sourceIdentifier
    * type **required**
  * sourceVersion
  * timeoutInMinutes
  * vpcConfig
    * securityGroupIds
      * items [NonEmptyString](#nonemptystring)
    * subnets
      * items [NonEmptyString](#nonemptystring)
    * vpcId

#### Output
* output [UpdateProjectOutput](#updateprojectoutput)

### UpdateReportGroup



```js
amazonaws_codebuild.UpdateReportGroup({
  "arn": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * arn **required**
  * exportConfig
    * exportConfigType
    * s3Destination
      * bucket
      * encryptionDisabled
      * encryptionKey
      * packaging
      * path

#### Output
* output [UpdateReportGroupOutput](#updatereportgroupoutput)

### UpdateWebhook



```js
amazonaws_codebuild.UpdateWebhook({
  "projectName": null
}, context)
```

#### Input
* input `object`
  * branchFilter
  * buildType
  * filterGroups
    * items [FilterGroup](#filtergroup)
  * projectName **required**
  * rotateSecret

#### Output
* output [UpdateWebhookOutput](#updatewebhookoutput)



## Definitions

### AccountLimitExceededException


### ArtifactNamespace
* ArtifactNamespace `string` (values: NONE, BUILD_ID)

### ArtifactPackaging
* ArtifactPackaging `string` (values: NONE, ZIP)

### ArtifactsType
* ArtifactsType `string` (values: CODEPIPELINE, S3, NO_ARTIFACTS)

### AuthType
* AuthType `string` (values: OAUTH, BASIC_AUTH, PERSONAL_ACCESS_TOKEN)

### BatchDeleteBuildsInput
* BatchDeleteBuildsInput `object`
  * ids **required**
    * items [NonEmptyString](#nonemptystring)

### BatchDeleteBuildsOutput
* BatchDeleteBuildsOutput `object`
  * buildsDeleted
    * items [NonEmptyString](#nonemptystring)
  * buildsNotDeleted
    * items [BuildNotDeleted](#buildnotdeleted)

### BatchGetBuildBatchesInput
* BatchGetBuildBatchesInput `object`
  * ids **required**
    * items [NonEmptyString](#nonemptystring)

### BatchGetBuildBatchesOutput
* BatchGetBuildBatchesOutput `object`
  * buildBatches
    * items [BuildBatch](#buildbatch)
  * buildBatchesNotFound
    * items [NonEmptyString](#nonemptystring)

### BatchGetBuildsInput
* BatchGetBuildsInput `object`
  * ids **required**
    * items [NonEmptyString](#nonemptystring)

### BatchGetBuildsOutput
* BatchGetBuildsOutput `object`
  * builds
    * items [Build](#build)
  * buildsNotFound
    * items [NonEmptyString](#nonemptystring)

### BatchGetProjectsInput
* BatchGetProjectsInput `object`
  * names **required**
    * items [NonEmptyString](#nonemptystring)

### BatchGetProjectsOutput
* BatchGetProjectsOutput `object`
  * projects
    * items [Project](#project)
  * projectsNotFound
    * items [NonEmptyString](#nonemptystring)

### BatchGetReportGroupsInput
* BatchGetReportGroupsInput `object`
  * reportGroupArns **required**
    * items [NonEmptyString](#nonemptystring)

### BatchGetReportGroupsOutput
* BatchGetReportGroupsOutput `object`
  * reportGroups
    * items [ReportGroup](#reportgroup)
  * reportGroupsNotFound
    * items [NonEmptyString](#nonemptystring)

### BatchGetReportsInput
* BatchGetReportsInput `object`
  * reportArns **required**
    * items [NonEmptyString](#nonemptystring)

### BatchGetReportsOutput
* BatchGetReportsOutput `object`
  * reports
    * items [Report](#report)
  * reportsNotFound
    * items [NonEmptyString](#nonemptystring)

### BatchRestrictions
* BatchRestrictions `object`: Specifies restrictions for the batch build.
  * computeTypesAllowed
    * items [NonEmptyString](#nonemptystring)
  * maximumBuildsAllowed

### Boolean
* Boolean `boolean`

### Build
* Build `object`: Information about a build.
  * arn
  * artifacts
    * artifactIdentifier
    * encryptionDisabled
    * location
    * md5sum
    * overrideArtifactName
    * sha256sum
  * buildBatchArn
  * buildComplete
  * buildNumber
  * buildStatus
  * cache
    * location
    * modes
      * items [CacheMode](#cachemode)
    * type **required**
  * currentPhase
  * debugSession
    * sessionEnabled
    * sessionTarget
  * encryptionKey
  * endTime
  * environment
    * certificate
    * computeType **required**
    * environmentVariables
      * items [EnvironmentVariable](#environmentvariable)
    * image **required**
    * imagePullCredentialsType
    * privilegedMode
    * registryCredential
      * credential **required**
      * credentialProvider **required**
    * type **required**
  * exportedEnvironmentVariables
    * items [ExportedEnvironmentVariable](#exportedenvironmentvariable)
  * fileSystemLocations
    * items [ProjectFileSystemLocation](#projectfilesystemlocation)
  * id
  * initiator
  * logs
    * cloudWatchLogs
      * groupName
      * status **required**
      * streamName
    * cloudWatchLogsArn
    * deepLink
    * groupName
    * s3DeepLink
    * s3Logs
      * encryptionDisabled
      * location
      * status **required**
    * s3LogsArn
    * streamName
  * networkInterface
    * networkInterfaceId
    * subnetId
  * phases
    * items [BuildPhase](#buildphase)
  * projectName
  * queuedTimeoutInMinutes
  * reportArns
    * items [String](#string)
  * resolvedSourceVersion
  * secondaryArtifacts
    * items [BuildArtifacts](#buildartifacts)
  * secondarySourceVersions
    * items [ProjectSourceVersion](#projectsourceversion)
  * secondarySources
    * items [ProjectSource](#projectsource)
  * serviceRole
  * source
    * auth
      * resource
      * type **required**
    * buildStatusConfig
      * context
      * targetUrl
    * buildspec
    * gitCloneDepth
    * gitSubmodulesConfig
      * fetchSubmodules **required**
    * insecureSsl
    * location
    * reportBuildStatus
    * sourceIdentifier
    * type **required**
  * sourceVersion
  * startTime
  * timeoutInMinutes
  * vpcConfig
    * securityGroupIds
      * items [NonEmptyString](#nonemptystring)
    * subnets
      * items [NonEmptyString](#nonemptystring)
    * vpcId

### BuildArtifacts
* BuildArtifacts `object`: Information about build output artifacts.
  * artifactIdentifier
  * encryptionDisabled
  * location
  * md5sum
  * overrideArtifactName
  * sha256sum

### BuildArtifactsList
* BuildArtifactsList `array`
  * items [BuildArtifacts](#buildartifacts)

### BuildBatch
* BuildBatch `object`: Contains information about a batch build.
  * arn
  * artifacts
    * artifactIdentifier
    * encryptionDisabled
    * location
    * md5sum
    * overrideArtifactName
    * sha256sum
  * buildBatchConfig [ProjectBuildBatchConfig](#projectbuildbatchconfig)
  * buildBatchNumber
  * buildBatchStatus
  * buildGroups
    * items [BuildGroup](#buildgroup)
  * buildTimeoutInMinutes
  * cache [ProjectCache](#projectcache)
  * complete
  * currentPhase
  * encryptionKey
  * endTime
  * environment [ProjectEnvironment](#projectenvironment)
  * fileSystemLocations
    * items [ProjectFileSystemLocation](#projectfilesystemlocation)
  * id
  * initiator
  * logConfig [LogsConfig](#logsconfig)
  * phases
    * items [BuildBatchPhase](#buildbatchphase)
  * projectName
  * queuedTimeoutInMinutes
  * resolvedSourceVersion
  * secondaryArtifacts
    * items [BuildArtifacts](#buildartifacts)
  * secondarySourceVersions
    * items [ProjectSourceVersion](#projectsourceversion)
  * secondarySources
    * items [ProjectSource](#projectsource)
  * serviceRole
  * source [ProjectSource](#projectsource)
  * sourceVersion
  * startTime
  * vpcConfig [VpcConfig](#vpcconfig)

### BuildBatchFilter
* BuildBatchFilter `object`: Specifies filters when retrieving batch builds.
  * status

### BuildBatchIds
* BuildBatchIds `array`
  * items [NonEmptyString](#nonemptystring)

### BuildBatchPhase
* BuildBatchPhase `object`: Contains information about a stage for a batch build.
  * contexts
    * items [PhaseContext](#phasecontext)
  * durationInSeconds
  * endTime
  * phaseStatus
  * phaseType
  * startTime

### BuildBatchPhaseType
* BuildBatchPhaseType `string` (values: SUBMITTED, DOWNLOAD_BATCHSPEC, IN_PROGRESS, COMBINE_ARTIFACTS, SUCCEEDED, FAILED, STOPPED)

### BuildBatchPhases
* BuildBatchPhases `array`
  * items [BuildBatchPhase](#buildbatchphase)

### BuildBatches
* BuildBatches `array`
  * items [BuildBatch](#buildbatch)

### BuildGroup
* BuildGroup `object`: Contains information about a batch build build group. Build groups are used to combine builds that can run in parallel, while still being able to set dependencies on other build groups.
  * currentBuildSummary
    * arn
    * buildStatus
    * primaryArtifact
      * identifier
      * location
      * type
    * requestedOn
    * secondaryArtifacts
      * items [ResolvedArtifact](#resolvedartifact)
  * dependsOn
    * items [NonEmptyString](#nonemptystring)
  * identifier
  * ignoreFailure
  * priorBuildSummaryList
    * items [BuildSummary](#buildsummary)

### BuildGroups
* BuildGroups `array`
  * items [BuildGroup](#buildgroup)

### BuildIds
* BuildIds `array`
  * items [NonEmptyString](#nonemptystring)

### BuildNotDeleted
* BuildNotDeleted `object`: Information about a build that could not be successfully deleted.
  * id
  * statusCode

### BuildPhase
* BuildPhase `object`: Information about a stage for a build.
  * contexts
    * items [PhaseContext](#phasecontext)
  * durationInSeconds
  * endTime
  * phaseStatus
  * phaseType
  * startTime

### BuildPhaseType
* BuildPhaseType `string` (values: SUBMITTED, QUEUED, PROVISIONING, DOWNLOAD_SOURCE, INSTALL, PRE_BUILD, BUILD, POST_BUILD, UPLOAD_ARTIFACTS, FINALIZING, COMPLETED)

### BuildPhases
* BuildPhases `array`
  * items [BuildPhase](#buildphase)

### BuildReportArns
* BuildReportArns `array`
  * items [String](#string)

### BuildStatusConfig
* BuildStatusConfig `object`: Contains information that defines how the AWS CodeBuild build project reports the build status to the source provider. 
  * context
  * targetUrl

### BuildSummaries
* BuildSummaries `array`
  * items [BuildSummary](#buildsummary)

### BuildSummary
* BuildSummary `object`: Contains summary information about a batch build group.
  * arn
  * buildStatus
  * primaryArtifact
    * identifier
    * location
    * type
  * requestedOn
  * secondaryArtifacts
    * items [ResolvedArtifact](#resolvedartifact)

### Builds
* Builds `array`
  * items [Build](#build)

### BuildsNotDeleted
* BuildsNotDeleted `array`
  * items [BuildNotDeleted](#buildnotdeleted)

### CacheMode
* CacheMode `string` (values: LOCAL_DOCKER_LAYER_CACHE, LOCAL_SOURCE_CACHE, LOCAL_CUSTOM_CACHE)

### CacheType
* CacheType `string` (values: NO_CACHE, S3, LOCAL)

### CloudWatchLogsConfig
* CloudWatchLogsConfig `object`:  Information about Amazon CloudWatch Logs for a build project. 
  * groupName
  * status **required**
  * streamName

### CodeCoverage
* CodeCoverage `object`: <p>Contains code coverage report information.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p>
  * branchCoveragePercentage
  * branchesCovered
  * branchesMissed
  * expired
  * filePath
  * id
  * lineCoveragePercentage
  * linesCovered
  * linesMissed
  * reportARN

### CodeCoverageReportSummary
* CodeCoverageReportSummary `object`: <p>Contains a summary of a code coverage report.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p>
  * branchCoveragePercentage
  * branchesCovered
  * branchesMissed
  * lineCoveragePercentage
  * linesCovered
  * linesMissed

### CodeCoverages
* CodeCoverages `array`
  * items [CodeCoverage](#codecoverage)

### ComputeType
* ComputeType `string` (values: BUILD_GENERAL1_SMALL, BUILD_GENERAL1_MEDIUM, BUILD_GENERAL1_LARGE, BUILD_GENERAL1_2XLARGE)

### ComputeTypesAllowed
* ComputeTypesAllowed `array`
  * items [NonEmptyString](#nonemptystring)

### CreateProjectInput
* CreateProjectInput `object`
  * tags
    * items [Tag](#tag)
  * artifacts **required**
    * artifactIdentifier
    * encryptionDisabled
    * location
    * name
    * namespaceType
    * overrideArtifactName
    * packaging
    * path
    * type **required**
  * badgeEnabled
  * buildBatchConfig
    * combineArtifacts
    * restrictions
      * computeTypesAllowed
        * items [NonEmptyString](#nonemptystring)
      * maximumBuildsAllowed
    * serviceRole
    * timeoutInMins
  * cache
    * location
    * modes
      * items [CacheMode](#cachemode)
    * type **required**
  * description
  * encryptionKey
  * environment **required**
    * certificate
    * computeType **required**
    * environmentVariables
      * items [EnvironmentVariable](#environmentvariable)
    * image **required**
    * imagePullCredentialsType
    * privilegedMode
    * registryCredential
      * credential **required**
      * credentialProvider **required**
    * type **required**
  * fileSystemLocations
    * items [ProjectFileSystemLocation](#projectfilesystemlocation)
  * logsConfig
    * cloudWatchLogs
      * groupName
      * status **required**
      * streamName
    * s3Logs
      * encryptionDisabled
      * location
      * status **required**
  * name **required**
  * queuedTimeoutInMinutes
  * secondaryArtifacts
    * items [ProjectArtifacts](#projectartifacts)
  * secondarySourceVersions
    * items [ProjectSourceVersion](#projectsourceversion)
  * secondarySources
    * items [ProjectSource](#projectsource)
  * serviceRole **required**
  * source **required**
    * auth
      * resource
      * type **required**
    * buildStatusConfig
      * context
      * targetUrl
    * buildspec
    * gitCloneDepth
    * gitSubmodulesConfig
      * fetchSubmodules **required**
    * insecureSsl
    * location
    * reportBuildStatus
    * sourceIdentifier
    * type **required**
  * sourceVersion
  * timeoutInMinutes
  * vpcConfig
    * securityGroupIds
      * items [NonEmptyString](#nonemptystring)
    * subnets
      * items [NonEmptyString](#nonemptystring)
    * vpcId

### CreateProjectOutput
* CreateProjectOutput `object`
  * project
    * tags
      * items [Tag](#tag)
    * arn
    * artifacts
      * artifactIdentifier
      * encryptionDisabled
      * location
      * name
      * namespaceType
      * overrideArtifactName
      * packaging
      * path
      * type **required**
    * badge
      * badgeEnabled
      * badgeRequestUrl
    * buildBatchConfig
      * combineArtifacts
      * restrictions
        * computeTypesAllowed
          * items [NonEmptyString](#nonemptystring)
        * maximumBuildsAllowed
      * serviceRole
      * timeoutInMins
    * cache
      * location
      * modes
        * items [CacheMode](#cachemode)
      * type **required**
    * created
    * description
    * encryptionKey
    * environment
      * certificate
      * computeType **required**
      * environmentVariables
        * items [EnvironmentVariable](#environmentvariable)
      * image **required**
      * imagePullCredentialsType
      * privilegedMode
      * registryCredential
        * credential **required**
        * credentialProvider **required**
      * type **required**
    * fileSystemLocations
      * items [ProjectFileSystemLocation](#projectfilesystemlocation)
    * lastModified
    * logsConfig
      * cloudWatchLogs
        * groupName
        * status **required**
        * streamName
      * s3Logs
        * encryptionDisabled
        * location
        * status **required**
    * name
    * queuedTimeoutInMinutes
    * secondaryArtifacts
      * items [ProjectArtifacts](#projectartifacts)
    * secondarySourceVersions
      * items [ProjectSourceVersion](#projectsourceversion)
    * secondarySources
      * items [ProjectSource](#projectsource)
    * serviceRole
    * source
      * auth
        * resource
        * type **required**
      * buildStatusConfig
        * context
        * targetUrl
      * buildspec
      * gitCloneDepth
      * gitSubmodulesConfig
        * fetchSubmodules **required**
      * insecureSsl
      * location
      * reportBuildStatus
      * sourceIdentifier
      * type **required**
    * sourceVersion
    * timeoutInMinutes
    * vpcConfig
      * securityGroupIds
        * items [NonEmptyString](#nonemptystring)
      * subnets
        * items [NonEmptyString](#nonemptystring)
      * vpcId
    * webhook
      * branchFilter
      * buildType
      * filterGroups
        * items [FilterGroup](#filtergroup)
      * lastModifiedSecret
      * payloadUrl
      * secret
      * url

### CreateReportGroupInput
* CreateReportGroupInput `object`
  * tags
    * items [Tag](#tag)
  * exportConfig **required**
    * exportConfigType
    * s3Destination
      * bucket
      * encryptionDisabled
      * encryptionKey
      * packaging
      * path
  * name **required**
  * type **required**

### CreateReportGroupOutput
* CreateReportGroupOutput `object`
  * reportGroup
    * tags
      * items [Tag](#tag)
    * arn
    * created
    * exportConfig
      * exportConfigType
      * s3Destination
        * bucket
        * encryptionDisabled
        * encryptionKey
        * packaging
        * path
    * lastModified
    * name
    * status [ReportGroupStatusType](#reportgroupstatustype)
    * type

### CreateWebhookInput
* CreateWebhookInput `object`
  * branchFilter
  * buildType
  * filterGroups
    * items [FilterGroup](#filtergroup)
  * projectName **required**

### CreateWebhookOutput
* CreateWebhookOutput `object`
  * webhook
    * branchFilter
    * buildType
    * filterGroups
      * items [FilterGroup](#filtergroup)
    * lastModifiedSecret
    * payloadUrl
    * secret
    * url

### CredentialProviderType
* CredentialProviderType `string` (values: SECRETS_MANAGER)

### DebugSession
* DebugSession `object`: Contains information about the debug session for a build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>.
  * sessionEnabled
  * sessionTarget

### DeleteBuildBatchInput
* DeleteBuildBatchInput `object`
  * id **required**

### DeleteBuildBatchOutput
* DeleteBuildBatchOutput `object`
  * buildsDeleted
    * items [NonEmptyString](#nonemptystring)
  * buildsNotDeleted
    * items [BuildNotDeleted](#buildnotdeleted)
  * statusCode

### DeleteProjectInput
* DeleteProjectInput `object`
  * name **required**

### DeleteProjectOutput
* DeleteProjectOutput `object`

### DeleteReportGroupInput
* DeleteReportGroupInput `object`
  * arn **required**
  * deleteReports

### DeleteReportGroupOutput
* DeleteReportGroupOutput `object`

### DeleteReportInput
* DeleteReportInput `object`
  * arn **required**

### DeleteReportOutput
* DeleteReportOutput `object`

### DeleteResourcePolicyInput
* DeleteResourcePolicyInput `object`
  * resourceArn **required**

### DeleteResourcePolicyOutput
* DeleteResourcePolicyOutput `object`

### DeleteSourceCredentialsInput
* DeleteSourceCredentialsInput `object`
  * arn **required**

### DeleteSourceCredentialsOutput
* DeleteSourceCredentialsOutput `object`
  * arn

### DeleteWebhookInput
* DeleteWebhookInput `object`
  * projectName **required**

### DeleteWebhookOutput
* DeleteWebhookOutput `object`

### DescribeCodeCoveragesInput
* DescribeCodeCoveragesInput `object`
  * maxLineCoveragePercentage
  * maxResults
  * minLineCoveragePercentage
  * nextToken
  * reportArn **required**
  * sortBy
  * sortOrder

### DescribeCodeCoveragesOutput
* DescribeCodeCoveragesOutput `object`
  * codeCoverages
    * items [CodeCoverage](#codecoverage)
  * nextToken

### DescribeTestCasesInput
* DescribeTestCasesInput `object`
  * filter
    * keyword
    * status
  * maxResults
  * nextToken
  * reportArn **required**

### DescribeTestCasesOutput
* DescribeTestCasesOutput `object`
  * nextToken
  * testCases
    * items [TestCase](#testcase)

### EnvironmentImage
* EnvironmentImage `object`: Information about a Docker image that is managed by AWS CodeBuild.
  * description
  * name
  * versions
    * items [String](#string)

### EnvironmentImages
* EnvironmentImages `array`
  * items [EnvironmentImage](#environmentimage)

### EnvironmentLanguage
* EnvironmentLanguage `object`: A set of Docker images that are related by programming language and are managed by AWS CodeBuild.
  * images
    * items [EnvironmentImage](#environmentimage)
  * language

### EnvironmentLanguages
* EnvironmentLanguages `array`
  * items [EnvironmentLanguage](#environmentlanguage)

### EnvironmentPlatform
* EnvironmentPlatform `object`: A set of Docker images that are related by platform and are managed by AWS CodeBuild.
  * languages
    * items [EnvironmentLanguage](#environmentlanguage)
  * platform

### EnvironmentPlatforms
* EnvironmentPlatforms `array`
  * items [EnvironmentPlatform](#environmentplatform)

### EnvironmentType
* EnvironmentType `string` (values: WINDOWS_CONTAINER, LINUX_CONTAINER, LINUX_GPU_CONTAINER, ARM_CONTAINER, WINDOWS_SERVER_2019_CONTAINER)

### EnvironmentVariable
* EnvironmentVariable `object`: Information about an environment variable for a build project or a build.
  * name **required**
  * type
  * value **required**

### EnvironmentVariableType
* EnvironmentVariableType `string` (values: PLAINTEXT, PARAMETER_STORE, SECRETS_MANAGER)

### EnvironmentVariables
* EnvironmentVariables `array`
  * items [EnvironmentVariable](#environmentvariable)

### ExportedEnvironmentVariable
* ExportedEnvironmentVariable `object`:  Information about an exported environment variable. 
  * name
  * value

### ExportedEnvironmentVariables
* ExportedEnvironmentVariables `array`
  * items [ExportedEnvironmentVariable](#exportedenvironmentvariable)

### FileSystemType
* FileSystemType `string` (values: EFS)

### FilterGroup
* FilterGroup `array`
  * items [WebhookFilter](#webhookfilter)

### FilterGroups
* FilterGroups `array`
  * items [FilterGroup](#filtergroup)

### GetReportGroupTrendInput
* GetReportGroupTrendInput `object`
  * numOfReports [PageSize](#pagesize)
  * reportGroupArn **required** [NonEmptyString](#nonemptystring)
  * trendField **required** [ReportGroupTrendFieldType](#reportgrouptrendfieldtype)

### GetReportGroupTrendOutput
* GetReportGroupTrendOutput `object`
  * rawData [ReportGroupTrendRawDataList](#reportgrouptrendrawdatalist)
  * stats [ReportGroupTrendStats](#reportgrouptrendstats)

### GetResourcePolicyInput
* GetResourcePolicyInput `object`
  * resourceArn **required**

### GetResourcePolicyOutput
* GetResourcePolicyOutput `object`
  * policy

### GitCloneDepth
* GitCloneDepth `integer`

### GitSubmodulesConfig
* GitSubmodulesConfig `object`:  Information about the Git submodules configuration for an AWS CodeBuild build project. 
  * fetchSubmodules **required**

### Identifiers
* Identifiers `array`
  * items [NonEmptyString](#nonemptystring)

### ImagePullCredentialsType
* ImagePullCredentialsType `string` (values: CODEBUILD, SERVICE_ROLE)

### ImageVersions
* ImageVersions `array`
  * items [String](#string)

### ImportSourceCredentialsInput
* ImportSourceCredentialsInput `object`
  * authType **required**
  * serverType **required**
  * shouldOverwrite
  * token **required**
  * username

### ImportSourceCredentialsOutput
* ImportSourceCredentialsOutput `object`
  * arn

### InvalidInputException


### InvalidateProjectCacheInput
* InvalidateProjectCacheInput `object`
  * projectName **required**

### InvalidateProjectCacheOutput
* InvalidateProjectCacheOutput `object`

### KeyInput
* KeyInput `string`

### LanguageType
* LanguageType `string` (values: JAVA, PYTHON, NODE_JS, RUBY, GOLANG, DOCKER, ANDROID, DOTNET, BASE, PHP)

### ListBuildBatchesForProjectInput
* ListBuildBatchesForProjectInput `object`
  * filter
    * status
  * maxResults
  * nextToken
  * projectName
  * sortOrder

### ListBuildBatchesForProjectOutput
* ListBuildBatchesForProjectOutput `object`
  * ids
    * items [NonEmptyString](#nonemptystring)
  * nextToken

### ListBuildBatchesInput
* ListBuildBatchesInput `object`
  * filter
    * status
  * maxResults
  * nextToken
  * sortOrder

### ListBuildBatchesOutput
* ListBuildBatchesOutput `object`
  * ids
    * items [NonEmptyString](#nonemptystring)
  * nextToken

### ListBuildsForProjectInput
* ListBuildsForProjectInput `object`
  * nextToken
  * projectName **required**
  * sortOrder

### ListBuildsForProjectOutput
* ListBuildsForProjectOutput `object`
  * ids
    * items [NonEmptyString](#nonemptystring)
  * nextToken

### ListBuildsInput
* ListBuildsInput `object`
  * nextToken
  * sortOrder

### ListBuildsOutput
* ListBuildsOutput `object`
  * ids
    * items [NonEmptyString](#nonemptystring)
  * nextToken

### ListCuratedEnvironmentImagesInput
* ListCuratedEnvironmentImagesInput `object`

### ListCuratedEnvironmentImagesOutput
* ListCuratedEnvironmentImagesOutput `object`
  * platforms
    * items [EnvironmentPlatform](#environmentplatform)

### ListProjectsInput
* ListProjectsInput `object`
  * nextToken
  * sortBy
  * sortOrder

### ListProjectsOutput
* ListProjectsOutput `object`
  * nextToken
  * projects
    * items [NonEmptyString](#nonemptystring)

### ListReportGroupsInput
* ListReportGroupsInput `object`
  * maxResults
  * nextToken
  * sortBy
  * sortOrder

### ListReportGroupsOutput
* ListReportGroupsOutput `object`
  * nextToken
  * reportGroups
    * items [NonEmptyString](#nonemptystring)

### ListReportsForReportGroupInput
* ListReportsForReportGroupInput `object`
  * filter
    * status
  * maxResults
  * nextToken
  * reportGroupArn **required**
  * sortOrder

### ListReportsForReportGroupOutput
* ListReportsForReportGroupOutput `object`
  * nextToken
  * reports
    * items [NonEmptyString](#nonemptystring)

### ListReportsInput
* ListReportsInput `object`
  * filter
    * status
  * maxResults
  * nextToken
  * sortOrder

### ListReportsOutput
* ListReportsOutput `object`
  * nextToken
  * reports
    * items [NonEmptyString](#nonemptystring)

### ListSharedProjectsInput
* ListSharedProjectsInput `object`
  * maxResults
  * nextToken
  * sortBy
  * sortOrder

### ListSharedProjectsOutput
* ListSharedProjectsOutput `object`
  * nextToken
  * projects
    * items [NonEmptyString](#nonemptystring)

### ListSharedReportGroupsInput
* ListSharedReportGroupsInput `object`
  * maxResults
  * nextToken
  * sortBy
  * sortOrder

### ListSharedReportGroupsOutput
* ListSharedReportGroupsOutput `object`
  * nextToken
  * reportGroups
    * items [NonEmptyString](#nonemptystring)

### ListSourceCredentialsInput
* ListSourceCredentialsInput `object`

### ListSourceCredentialsOutput
* ListSourceCredentialsOutput `object`
  * sourceCredentialsInfos
    * items [SourceCredentialsInfo](#sourcecredentialsinfo)

### LogsConfig
* LogsConfig `object`:  Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both. 
  * cloudWatchLogs
    * groupName
    * status **required**
    * streamName
  * s3Logs
    * encryptionDisabled
    * location
    * status **required**

### LogsConfigStatusType
* LogsConfigStatusType `string` (values: ENABLED, DISABLED)

### LogsLocation
* LogsLocation `object`: Information about build logs in Amazon CloudWatch Logs.
  * cloudWatchLogs
    * groupName
    * status **required**
    * streamName
  * cloudWatchLogsArn
  * deepLink
  * groupName
  * s3DeepLink
  * s3Logs
    * encryptionDisabled
    * location
    * status **required**
  * s3LogsArn
  * streamName

### NetworkInterface
* NetworkInterface `object`: Describes a network interface.
  * networkInterfaceId
  * subnetId

### NonEmptyString
* NonEmptyString `string`

### NonNegativeInt
* NonNegativeInt `integer`

### OAuthProviderException


### PageSize
* PageSize `integer`

### Percentage
* Percentage `number`

### PhaseContext
* PhaseContext `object`: Additional information about a build phase that has an error. You can use this information for troubleshooting.
  * message
  * statusCode

### PhaseContexts
* PhaseContexts `array`
  * items [PhaseContext](#phasecontext)

### PlatformType
* PlatformType `string` (values: DEBIAN, AMAZON_LINUX, UBUNTU, WINDOWS_SERVER)

### Project
* Project `object`: Information about a build project.
  * tags
    * items [Tag](#tag)
  * arn
  * artifacts
    * artifactIdentifier
    * encryptionDisabled
    * location
    * name
    * namespaceType
    * overrideArtifactName
    * packaging
    * path
    * type **required**
  * badge
    * badgeEnabled
    * badgeRequestUrl
  * buildBatchConfig
    * combineArtifacts
    * restrictions
      * computeTypesAllowed
        * items [NonEmptyString](#nonemptystring)
      * maximumBuildsAllowed
    * serviceRole
    * timeoutInMins
  * cache
    * location
    * modes
      * items [CacheMode](#cachemode)
    * type **required**
  * created
  * description
  * encryptionKey
  * environment
    * certificate
    * computeType **required**
    * environmentVariables
      * items [EnvironmentVariable](#environmentvariable)
    * image **required**
    * imagePullCredentialsType
    * privilegedMode
    * registryCredential
      * credential **required**
      * credentialProvider **required**
    * type **required**
  * fileSystemLocations
    * items [ProjectFileSystemLocation](#projectfilesystemlocation)
  * lastModified
  * logsConfig
    * cloudWatchLogs
      * groupName
      * status **required**
      * streamName
    * s3Logs
      * encryptionDisabled
      * location
      * status **required**
  * name
  * queuedTimeoutInMinutes
  * secondaryArtifacts
    * items [ProjectArtifacts](#projectartifacts)
  * secondarySourceVersions
    * items [ProjectSourceVersion](#projectsourceversion)
  * secondarySources
    * items [ProjectSource](#projectsource)
  * serviceRole
  * source
    * auth
      * resource
      * type **required**
    * buildStatusConfig
      * context
      * targetUrl
    * buildspec
    * gitCloneDepth
    * gitSubmodulesConfig
      * fetchSubmodules **required**
    * insecureSsl
    * location
    * reportBuildStatus
    * sourceIdentifier
    * type **required**
  * sourceVersion
  * timeoutInMinutes
  * vpcConfig
    * securityGroupIds
      * items [NonEmptyString](#nonemptystring)
    * subnets
      * items [NonEmptyString](#nonemptystring)
    * vpcId
  * webhook
    * branchFilter
    * buildType
    * filterGroups
      * items [FilterGroup](#filtergroup)
    * lastModifiedSecret
    * payloadUrl
    * secret
    * url

### ProjectArns
* ProjectArns `array`
  * items [NonEmptyString](#nonemptystring)

### ProjectArtifacts
* ProjectArtifacts `object`: Information about the build output artifacts for the build project.
  * artifactIdentifier
  * encryptionDisabled
  * location
  * name
  * namespaceType
  * overrideArtifactName
  * packaging
  * path
  * type **required**

### ProjectArtifactsList
* ProjectArtifactsList `array`
  * items [ProjectArtifacts](#projectartifacts)

### ProjectBadge
* ProjectBadge `object`: Information about the build badge for the build project.
  * badgeEnabled
  * badgeRequestUrl

### ProjectBuildBatchConfig
* ProjectBuildBatchConfig `object`: Contains configuration information about a batch build project.
  * combineArtifacts
  * restrictions
    * computeTypesAllowed
      * items [NonEmptyString](#nonemptystring)
    * maximumBuildsAllowed
  * serviceRole
  * timeoutInMins

### ProjectCache
* ProjectCache `object`: Information about the cache for the build project.
  * location
  * modes
    * items [CacheMode](#cachemode)
  * type **required**

### ProjectCacheModes
* ProjectCacheModes `array`
  * items [CacheMode](#cachemode)

### ProjectDescription
* ProjectDescription `string`

### ProjectEnvironment
* ProjectEnvironment `object`: Information about the build environment of the build project.
  * certificate
  * computeType **required**
  * environmentVariables
    * items [EnvironmentVariable](#environmentvariable)
  * image **required**
  * imagePullCredentialsType
  * privilegedMode
  * registryCredential
    * credential **required**
    * credentialProvider **required**
  * type **required**

### ProjectFileSystemLocation
* ProjectFileSystemLocation `object`:  Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is Amazon Elastic File System?</a> 
  * identifier
  * location
  * mountOptions
  * mountPoint
  * type

### ProjectFileSystemLocations
* ProjectFileSystemLocations `array`
  * items [ProjectFileSystemLocation](#projectfilesystemlocation)

### ProjectName
* ProjectName `string`

### ProjectNames
* ProjectNames `array`
  * items [NonEmptyString](#nonemptystring)

### ProjectSecondarySourceVersions
* ProjectSecondarySourceVersions `array`
  * items [ProjectSourceVersion](#projectsourceversion)

### ProjectSortByType
* ProjectSortByType `string` (values: NAME, CREATED_TIME, LAST_MODIFIED_TIME)

### ProjectSource
* ProjectSource `object`: Information about the build input source code for the build project.
  * auth
    * resource
    * type **required**
  * buildStatusConfig
    * context
    * targetUrl
  * buildspec
  * gitCloneDepth
  * gitSubmodulesConfig
    * fetchSubmodules **required**
  * insecureSsl
  * location
  * reportBuildStatus
  * sourceIdentifier
  * type **required**

### ProjectSourceVersion
* ProjectSourceVersion `object`:  A source identifier and its corresponding version. 
  * sourceIdentifier **required**
  * sourceVersion **required**

### ProjectSources
* ProjectSources `array`
  * items [ProjectSource](#projectsource)

### Projects
* Projects `array`
  * items [Project](#project)

### PutResourcePolicyInput
* PutResourcePolicyInput `object`
  * policy **required**
  * resourceArn **required**

### PutResourcePolicyOutput
* PutResourcePolicyOutput `object`
  * resourceArn

### RegistryCredential
* RegistryCredential `object`: <p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with AWS Secrets Manager Sample for AWS CodeBuild</a>. </p>
  * credential **required**
  * credentialProvider **required**

### Report
* Report `object`: Information about the results from running a series of test cases during the run of a build project. The test cases are specified in the buildspec for the build project using one or more paths to the test case files. You can specify any type of tests you want, such as unit tests, integration tests, and functional tests. 
  * arn
  * codeCoverageSummary
    * branchCoveragePercentage
    * branchesCovered
    * branchesMissed
    * lineCoveragePercentage
    * linesCovered
    * linesMissed
  * created
  * executionId
  * expired
  * exportConfig
    * exportConfigType
    * s3Destination
      * bucket
      * encryptionDisabled
      * encryptionKey
      * packaging
      * path
  * name
  * reportGroupArn
  * status
  * testSummary
    * durationInNanoSeconds **required**
    * statusCounts **required**
    * total **required**
  * truncated
  * type

### ReportArns
* ReportArns `array`
  * items [NonEmptyString](#nonemptystring)

### ReportCodeCoverageSortByType
* ReportCodeCoverageSortByType `string` (values: LINE_COVERAGE_PERCENTAGE, FILE_PATH)

### ReportExportConfig
* ReportExportConfig `object`:  Information about the location where the run of a report is exported. 
  * exportConfigType
  * s3Destination
    * bucket
    * encryptionDisabled
    * encryptionKey
    * packaging
    * path

### ReportExportConfigType
* ReportExportConfigType `string` (values: S3, NO_EXPORT)

### ReportFilter
* ReportFilter `object`:  A filter used to return reports with the status specified by the input <code>status</code> parameter. 
  * status

### ReportGroup
* ReportGroup `object`:  A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files. 
  * tags
    * items [Tag](#tag)
  * arn
  * created
  * exportConfig
    * exportConfigType
    * s3Destination
      * bucket
      * encryptionDisabled
      * encryptionKey
      * packaging
      * path
  * lastModified
  * name
  * status [ReportGroupStatusType](#reportgroupstatustype)
  * type

### ReportGroupArns
* ReportGroupArns `array`
  * items [NonEmptyString](#nonemptystring)

### ReportGroupName
* ReportGroupName `string`

### ReportGroupSortByType
* ReportGroupSortByType `string` (values: NAME, CREATED_TIME, LAST_MODIFIED_TIME)

### ReportGroupStatusType
* ReportGroupStatusType `string` (values: ACTIVE, DELETING)

### ReportGroupTrendFieldType
* ReportGroupTrendFieldType `string` (values: PASS_RATE, DURATION, TOTAL, LINE_COVERAGE, LINES_COVERED, LINES_MISSED, BRANCH_COVERAGE, BRANCHES_COVERED, BRANCHES_MISSED)

### ReportGroupTrendRawDataList
* ReportGroupTrendRawDataList `array`
  * items [ReportWithRawData](#reportwithrawdata)

### ReportGroupTrendStats
* ReportGroupTrendStats `object`
  * average [String](#string)
  * max [String](#string)
  * min [String](#string)

### ReportGroups
* ReportGroups `array`
  * items [ReportGroup](#reportgroup)

### ReportPackagingType
* ReportPackagingType `string` (values: ZIP, NONE)

### ReportStatusCounts
* ReportStatusCounts `object`

### ReportStatusType
* ReportStatusType `string` (values: GENERATING, SUCCEEDED, FAILED, INCOMPLETE, DELETING)

### ReportType
* ReportType `string` (values: TEST, CODE_COVERAGE)

### ReportWithRawData
* ReportWithRawData `object`
  * data [String](#string)
  * reportArn [NonEmptyString](#nonemptystring)

### Reports
* Reports `array`
  * items [Report](#report)

### ResolvedArtifact
* ResolvedArtifact `object`: Represents a resolved build artifact. A resolve artifact is an artifact that is built and deployed to the destination, such as Amazon Simple Storage Service (Amazon S3).
  * identifier
  * location
  * type

### ResolvedSecondaryArtifacts
* ResolvedSecondaryArtifacts `array`
  * items [ResolvedArtifact](#resolvedartifact)

### ResourceAlreadyExistsException


### ResourceNotFoundException


### RetryBuildBatchInput
* RetryBuildBatchInput `object`
  * id
  * retryType

### RetryBuildBatchOutput
* RetryBuildBatchOutput `object`
  * buildBatch [BuildBatch](#buildbatch)

### RetryBuildBatchType
* RetryBuildBatchType `string` (values: RETRY_ALL_BUILDS, RETRY_FAILED_BUILDS)

### RetryBuildInput
* RetryBuildInput `object`
  * id

### RetryBuildOutput
* RetryBuildOutput `object`
  * build [Build](#build)

### S3LogsConfig
* S3LogsConfig `object`:  Information about S3 logs for a build project. 
  * encryptionDisabled
  * location
  * status **required**

### S3ReportExportConfig
* S3ReportExportConfig `object`:  Information about the S3 bucket where the raw data of a report are exported. 
  * bucket
  * encryptionDisabled
  * encryptionKey
  * packaging
  * path

### SecurityGroupIds
* SecurityGroupIds `array`
  * items [NonEmptyString](#nonemptystring)

### SensitiveNonEmptyString
* SensitiveNonEmptyString `string`

### ServerType
* ServerType `string` (values: GITHUB, BITBUCKET, GITHUB_ENTERPRISE)

### SharedResourceSortByType
* SharedResourceSortByType `string` (values: ARN, MODIFIED_TIME)

### SortOrderType
* SortOrderType `string` (values: ASCENDING, DESCENDING)

### SourceAuth
* SourceAuth `object`: <p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.</p>
  * resource
  * type **required**

### SourceAuthType
* SourceAuthType `string` (values: OAUTH)

### SourceCredentialsInfo
* SourceCredentialsInfo `object`:  Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository. 
  * arn
  * authType
  * serverType

### SourceCredentialsInfos
* SourceCredentialsInfos `array`
  * items [SourceCredentialsInfo](#sourcecredentialsinfo)

### SourceType
* SourceType `string` (values: CODECOMMIT, CODEPIPELINE, GITHUB, S3, BITBUCKET, GITHUB_ENTERPRISE, NO_SOURCE)

### StartBuildBatchInput
* StartBuildBatchInput `object`
  * artifactsOverride
    * artifactIdentifier
    * encryptionDisabled
    * location
    * name
    * namespaceType
    * overrideArtifactName
    * packaging
    * path
    * type **required**
  * buildBatchConfigOverride
    * combineArtifacts
    * restrictions
      * computeTypesAllowed
        * items [NonEmptyString](#nonemptystring)
      * maximumBuildsAllowed
    * serviceRole
    * timeoutInMins
  * buildTimeoutInMinutesOverride
  * buildspecOverride
  * cacheOverride
    * location
    * modes
      * items [CacheMode](#cachemode)
    * type **required**
  * certificateOverride
  * computeTypeOverride
  * encryptionKeyOverride
  * environmentTypeOverride
  * environmentVariablesOverride
    * items [EnvironmentVariable](#environmentvariable)
  * gitCloneDepthOverride
  * gitSubmodulesConfigOverride
    * fetchSubmodules **required**
  * imageOverride
  * imagePullCredentialsTypeOverride
  * insecureSslOverride
  * logsConfigOverride
    * cloudWatchLogs
      * groupName
      * status **required**
      * streamName
    * s3Logs
      * encryptionDisabled
      * location
      * status **required**
  * privilegedModeOverride
  * projectName **required**
  * queuedTimeoutInMinutesOverride
  * registryCredentialOverride
    * credential **required**
    * credentialProvider **required**
  * reportBuildBatchStatusOverride
  * secondaryArtifactsOverride
    * items [ProjectArtifacts](#projectartifacts)
  * secondarySourcesOverride
    * items [ProjectSource](#projectsource)
  * secondarySourcesVersionOverride
    * items [ProjectSourceVersion](#projectsourceversion)
  * serviceRoleOverride
  * sourceAuthOverride
    * resource
    * type **required**
  * sourceLocationOverride
  * sourceTypeOverride
  * sourceVersion

### StartBuildBatchOutput
* StartBuildBatchOutput `object`
  * buildBatch
    * arn
    * artifacts
      * artifactIdentifier
      * encryptionDisabled
      * location
      * md5sum
      * overrideArtifactName
      * sha256sum
    * buildBatchConfig [ProjectBuildBatchConfig](#projectbuildbatchconfig)
    * buildBatchNumber
    * buildBatchStatus
    * buildGroups
      * items [BuildGroup](#buildgroup)
    * buildTimeoutInMinutes
    * cache [ProjectCache](#projectcache)
    * complete
    * currentPhase
    * encryptionKey
    * endTime
    * environment [ProjectEnvironment](#projectenvironment)
    * fileSystemLocations
      * items [ProjectFileSystemLocation](#projectfilesystemlocation)
    * id
    * initiator
    * logConfig [LogsConfig](#logsconfig)
    * phases
      * items [BuildBatchPhase](#buildbatchphase)
    * projectName
    * queuedTimeoutInMinutes
    * resolvedSourceVersion
    * secondaryArtifacts
      * items [BuildArtifacts](#buildartifacts)
    * secondarySourceVersions
      * items [ProjectSourceVersion](#projectsourceversion)
    * secondarySources
      * items [ProjectSource](#projectsource)
    * serviceRole
    * source [ProjectSource](#projectsource)
    * sourceVersion
    * startTime
    * vpcConfig [VpcConfig](#vpcconfig)

### StartBuildInput
* StartBuildInput `object`
  * artifactsOverride
    * artifactIdentifier
    * encryptionDisabled
    * location
    * name
    * namespaceType
    * overrideArtifactName
    * packaging
    * path
    * type **required**
  * buildStatusConfigOverride
    * context
    * targetUrl
  * buildspecOverride
  * cacheOverride
    * location
    * modes
      * items [CacheMode](#cachemode)
    * type **required**
  * certificateOverride
  * computeTypeOverride
  * debugSessionEnabled
  * encryptionKeyOverride
  * environmentTypeOverride
  * environmentVariablesOverride
    * items [EnvironmentVariable](#environmentvariable)
  * gitCloneDepthOverride
  * gitSubmodulesConfigOverride
    * fetchSubmodules **required**
  * imageOverride
  * imagePullCredentialsTypeOverride
  * insecureSslOverride
  * logsConfigOverride
    * cloudWatchLogs
      * groupName
      * status **required**
      * streamName
    * s3Logs
      * encryptionDisabled
      * location
      * status **required**
  * privilegedModeOverride
  * projectName **required**
  * queuedTimeoutInMinutesOverride
  * registryCredentialOverride
    * credential **required**
    * credentialProvider **required**
  * reportBuildStatusOverride
  * secondaryArtifactsOverride
    * items [ProjectArtifacts](#projectartifacts)
  * secondarySourcesOverride
    * items [ProjectSource](#projectsource)
  * secondarySourcesVersionOverride
    * items [ProjectSourceVersion](#projectsourceversion)
  * serviceRoleOverride
  * sourceAuthOverride
    * resource
    * type **required**
  * sourceLocationOverride
  * sourceTypeOverride
  * sourceVersion
  * timeoutInMinutesOverride

### StartBuildOutput
* StartBuildOutput `object`
  * build
    * arn
    * artifacts
      * artifactIdentifier
      * encryptionDisabled
      * location
      * md5sum
      * overrideArtifactName
      * sha256sum
    * buildBatchArn
    * buildComplete
    * buildNumber
    * buildStatus
    * cache
      * location
      * modes
        * items [CacheMode](#cachemode)
      * type **required**
    * currentPhase
    * debugSession
      * sessionEnabled
      * sessionTarget
    * encryptionKey
    * endTime
    * environment
      * certificate
      * computeType **required**
      * environmentVariables
        * items [EnvironmentVariable](#environmentvariable)
      * image **required**
      * imagePullCredentialsType
      * privilegedMode
      * registryCredential
        * credential **required**
        * credentialProvider **required**
      * type **required**
    * exportedEnvironmentVariables
      * items [ExportedEnvironmentVariable](#exportedenvironmentvariable)
    * fileSystemLocations
      * items [ProjectFileSystemLocation](#projectfilesystemlocation)
    * id
    * initiator
    * logs
      * cloudWatchLogs
        * groupName
        * status **required**
        * streamName
      * cloudWatchLogsArn
      * deepLink
      * groupName
      * s3DeepLink
      * s3Logs
        * encryptionDisabled
        * location
        * status **required**
      * s3LogsArn
      * streamName
    * networkInterface
      * networkInterfaceId
      * subnetId
    * phases
      * items [BuildPhase](#buildphase)
    * projectName
    * queuedTimeoutInMinutes
    * reportArns
      * items [String](#string)
    * resolvedSourceVersion
    * secondaryArtifacts
      * items [BuildArtifacts](#buildartifacts)
    * secondarySourceVersions
      * items [ProjectSourceVersion](#projectsourceversion)
    * secondarySources
      * items [ProjectSource](#projectsource)
    * serviceRole
    * source
      * auth
        * resource
        * type **required**
      * buildStatusConfig
        * context
        * targetUrl
      * buildspec
      * gitCloneDepth
      * gitSubmodulesConfig
        * fetchSubmodules **required**
      * insecureSsl
      * location
      * reportBuildStatus
      * sourceIdentifier
      * type **required**
    * sourceVersion
    * startTime
    * timeoutInMinutes
    * vpcConfig
      * securityGroupIds
        * items [NonEmptyString](#nonemptystring)
      * subnets
        * items [NonEmptyString](#nonemptystring)
      * vpcId

### StatusType
* StatusType `string` (values: SUCCEEDED, FAILED, FAULT, TIMED_OUT, IN_PROGRESS, STOPPED)

### StopBuildBatchInput
* StopBuildBatchInput `object`
  * id **required**

### StopBuildBatchOutput
* StopBuildBatchOutput `object`
  * buildBatch [BuildBatch](#buildbatch)

### StopBuildInput
* StopBuildInput `object`
  * id **required**

### StopBuildOutput
* StopBuildOutput `object`
  * build
    * arn
    * artifacts
      * artifactIdentifier
      * encryptionDisabled
      * location
      * md5sum
      * overrideArtifactName
      * sha256sum
    * buildBatchArn
    * buildComplete
    * buildNumber
    * buildStatus
    * cache
      * location
      * modes
        * items [CacheMode](#cachemode)
      * type **required**
    * currentPhase
    * debugSession
      * sessionEnabled
      * sessionTarget
    * encryptionKey
    * endTime
    * environment
      * certificate
      * computeType **required**
      * environmentVariables
        * items [EnvironmentVariable](#environmentvariable)
      * image **required**
      * imagePullCredentialsType
      * privilegedMode
      * registryCredential
        * credential **required**
        * credentialProvider **required**
      * type **required**
    * exportedEnvironmentVariables
      * items [ExportedEnvironmentVariable](#exportedenvironmentvariable)
    * fileSystemLocations
      * items [ProjectFileSystemLocation](#projectfilesystemlocation)
    * id
    * initiator
    * logs
      * cloudWatchLogs
        * groupName
        * status **required**
        * streamName
      * cloudWatchLogsArn
      * deepLink
      * groupName
      * s3DeepLink
      * s3Logs
        * encryptionDisabled
        * location
        * status **required**
      * s3LogsArn
      * streamName
    * networkInterface
      * networkInterfaceId
      * subnetId
    * phases
      * items [BuildPhase](#buildphase)
    * projectName
    * queuedTimeoutInMinutes
    * reportArns
      * items [String](#string)
    * resolvedSourceVersion
    * secondaryArtifacts
      * items [BuildArtifacts](#buildartifacts)
    * secondarySourceVersions
      * items [ProjectSourceVersion](#projectsourceversion)
    * secondarySources
      * items [ProjectSource](#projectsource)
    * serviceRole
    * source
      * auth
        * resource
        * type **required**
      * buildStatusConfig
        * context
        * targetUrl
      * buildspec
      * gitCloneDepth
      * gitSubmodulesConfig
        * fetchSubmodules **required**
      * insecureSsl
      * location
      * reportBuildStatus
      * sourceIdentifier
      * type **required**
    * sourceVersion
    * startTime
    * timeoutInMinutes
    * vpcConfig
      * securityGroupIds
        * items [NonEmptyString](#nonemptystring)
      * subnets
        * items [NonEmptyString](#nonemptystring)
      * vpcId

### String
* String `string`

### Subnets
* Subnets `array`
  * items [NonEmptyString](#nonemptystring)

### Tag
* Tag `object`: <p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by AWS services that support tags in AWS CodeBuild.</p>
  * key
  * value

### TagList
* TagList `array`
  * items [Tag](#tag)

### TestCase
* TestCase `object`:  Information about a test case created using a framework such as NUnit or Cucumber. A test case might be a unit test or a configuration test. 
  * durationInNanoSeconds
  * expired
  * message
  * name
  * prefix
  * reportArn
  * status
  * testRawDataPath

### TestCaseFilter
* TestCaseFilter `object`: A filter used to return specific types of test cases. In order to pass the filter, the report must meet all of the filter properties.
  * keyword
  * status

### TestCases
* TestCases `array`
  * items [TestCase](#testcase)

### TestReportSummary
* TestReportSummary `object`:  Information about a test report. 
  * durationInNanoSeconds **required**
  * statusCounts **required**
  * total **required**

### TimeOut
* TimeOut `integer`

### Timestamp
* Timestamp `string`

### UpdateProjectInput
* UpdateProjectInput `object`
  * tags
    * items [Tag](#tag)
  * artifacts
    * artifactIdentifier
    * encryptionDisabled
    * location
    * name
    * namespaceType
    * overrideArtifactName
    * packaging
    * path
    * type **required**
  * badgeEnabled
  * buildBatchConfig [ProjectBuildBatchConfig](#projectbuildbatchconfig)
  * cache
    * location
    * modes
      * items [CacheMode](#cachemode)
    * type **required**
  * description
  * encryptionKey
  * environment
    * certificate
    * computeType **required**
    * environmentVariables
      * items [EnvironmentVariable](#environmentvariable)
    * image **required**
    * imagePullCredentialsType
    * privilegedMode
    * registryCredential
      * credential **required**
      * credentialProvider **required**
    * type **required**
  * fileSystemLocations
    * items [ProjectFileSystemLocation](#projectfilesystemlocation)
  * logsConfig
    * cloudWatchLogs
      * groupName
      * status **required**
      * streamName
    * s3Logs
      * encryptionDisabled
      * location
      * status **required**
  * name **required**
  * queuedTimeoutInMinutes
  * secondaryArtifacts
    * items [ProjectArtifacts](#projectartifacts)
  * secondarySourceVersions
    * items [ProjectSourceVersion](#projectsourceversion)
  * secondarySources
    * items [ProjectSource](#projectsource)
  * serviceRole
  * source
    * auth
      * resource
      * type **required**
    * buildStatusConfig
      * context
      * targetUrl
    * buildspec
    * gitCloneDepth
    * gitSubmodulesConfig
      * fetchSubmodules **required**
    * insecureSsl
    * location
    * reportBuildStatus
    * sourceIdentifier
    * type **required**
  * sourceVersion
  * timeoutInMinutes
  * vpcConfig
    * securityGroupIds
      * items [NonEmptyString](#nonemptystring)
    * subnets
      * items [NonEmptyString](#nonemptystring)
    * vpcId

### UpdateProjectOutput
* UpdateProjectOutput `object`
  * project
    * tags
      * items [Tag](#tag)
    * arn
    * artifacts
      * artifactIdentifier
      * encryptionDisabled
      * location
      * name
      * namespaceType
      * overrideArtifactName
      * packaging
      * path
      * type **required**
    * badge
      * badgeEnabled
      * badgeRequestUrl
    * buildBatchConfig
      * combineArtifacts
      * restrictions
        * computeTypesAllowed
          * items [NonEmptyString](#nonemptystring)
        * maximumBuildsAllowed
      * serviceRole
      * timeoutInMins
    * cache
      * location
      * modes
        * items [CacheMode](#cachemode)
      * type **required**
    * created
    * description
    * encryptionKey
    * environment
      * certificate
      * computeType **required**
      * environmentVariables
        * items [EnvironmentVariable](#environmentvariable)
      * image **required**
      * imagePullCredentialsType
      * privilegedMode
      * registryCredential
        * credential **required**
        * credentialProvider **required**
      * type **required**
    * fileSystemLocations
      * items [ProjectFileSystemLocation](#projectfilesystemlocation)
    * lastModified
    * logsConfig
      * cloudWatchLogs
        * groupName
        * status **required**
        * streamName
      * s3Logs
        * encryptionDisabled
        * location
        * status **required**
    * name
    * queuedTimeoutInMinutes
    * secondaryArtifacts
      * items [ProjectArtifacts](#projectartifacts)
    * secondarySourceVersions
      * items [ProjectSourceVersion](#projectsourceversion)
    * secondarySources
      * items [ProjectSource](#projectsource)
    * serviceRole
    * source
      * auth
        * resource
        * type **required**
      * buildStatusConfig
        * context
        * targetUrl
      * buildspec
      * gitCloneDepth
      * gitSubmodulesConfig
        * fetchSubmodules **required**
      * insecureSsl
      * location
      * reportBuildStatus
      * sourceIdentifier
      * type **required**
    * sourceVersion
    * timeoutInMinutes
    * vpcConfig
      * securityGroupIds
        * items [NonEmptyString](#nonemptystring)
      * subnets
        * items [NonEmptyString](#nonemptystring)
      * vpcId
    * webhook
      * branchFilter
      * buildType
      * filterGroups
        * items [FilterGroup](#filtergroup)
      * lastModifiedSecret
      * payloadUrl
      * secret
      * url

### UpdateReportGroupInput
* UpdateReportGroupInput `object`
  * tags
    * items [Tag](#tag)
  * arn **required**
  * exportConfig
    * exportConfigType
    * s3Destination
      * bucket
      * encryptionDisabled
      * encryptionKey
      * packaging
      * path

### UpdateReportGroupOutput
* UpdateReportGroupOutput `object`
  * reportGroup
    * tags
      * items [Tag](#tag)
    * arn
    * created
    * exportConfig
      * exportConfigType
      * s3Destination
        * bucket
        * encryptionDisabled
        * encryptionKey
        * packaging
        * path
    * lastModified
    * name
    * status [ReportGroupStatusType](#reportgroupstatustype)
    * type

### UpdateWebhookInput
* UpdateWebhookInput `object`
  * branchFilter
  * buildType
  * filterGroups
    * items [FilterGroup](#filtergroup)
  * projectName **required**
  * rotateSecret

### UpdateWebhookOutput
* UpdateWebhookOutput `object`
  * webhook
    * branchFilter
    * buildType
    * filterGroups
      * items [FilterGroup](#filtergroup)
    * lastModifiedSecret
    * payloadUrl
    * secret
    * url

### ValueInput
* ValueInput `string`

### VpcConfig
* VpcConfig `object`: Information about the VPC configuration that AWS CodeBuild accesses.
  * securityGroupIds
    * items [NonEmptyString](#nonemptystring)
  * subnets
    * items [NonEmptyString](#nonemptystring)
  * vpcId

### Webhook
* Webhook `object`: Information about a webhook that connects repository events to a build project in AWS CodeBuild.
  * branchFilter
  * buildType
  * filterGroups
    * items [FilterGroup](#filtergroup)
  * lastModifiedSecret
  * payloadUrl
  * secret
  * url

### WebhookBuildType
* WebhookBuildType `string` (values: BUILD, BUILD_BATCH)

### WebhookFilter
* WebhookFilter `object`:  A filter used to determine which webhooks trigger a build. 
  * excludeMatchedPattern
  * pattern **required**
  * type **required**

### WebhookFilterType
* WebhookFilterType `string` (values: EVENT, BASE_REF, HEAD_REF, ACTOR_ACCOUNT_ID, FILE_PATH, COMMIT_MESSAGE)

### WrapperBoolean
* WrapperBoolean `boolean`

### WrapperInt
* WrapperInt `integer`

### WrapperLong
* WrapperLong `integer`


