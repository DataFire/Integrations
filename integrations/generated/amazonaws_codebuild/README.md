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

amazonaws_codebuild.BatchDeleteBuilds({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>AWS CodeBuild</fullname> <p>AWS CodeBuild is a fully managed build service in the cloud. AWS CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy. AWS CodeBuild eliminates the need to provision, manage, and scale your own build servers. It provides prepackaged build environments for the most popular programming languages and build tools, such as Apache Maven, Gradle, and more. You can also fully customize build environments in AWS CodeBuild to use your own build tools. AWS CodeBuild scales automatically to meet peak build requests, and you pay only for the build time you consume. For more information about AWS CodeBuild, see the <i>AWS CodeBuild User Guide</i>.</p> <p>AWS CodeBuild supports these operations:</p> <ul> <li> <p> <code>BatchDeleteBuilds</code>: Deletes one or more builds.</p> </li> <li> <p> <code>BatchGetProjects</code>: Gets information about one or more build projects. A <i>build project</i> defines how AWS CodeBuild will run a build. This includes information such as where to get the source code to build, the build environment to use, the build commands to run, and where to store the build output. A <i>build environment</i> represents a combination of operating system, programming language runtime, and tools that AWS CodeBuild will use to run a build. Also, you can add tags to build projects to help manage your resources and costs.</p> </li> <li> <p> <code>CreateProject</code>: Creates a build project.</p> </li> <li> <p> <code>CreateWebhook</code>: For an existing AWS CodeBuild build project that has its source code stored in a GitHub repository, enables AWS CodeBuild to begin automatically rebuilding the source code every time a code change is pushed to the repository.</p> </li> <li> <p> <code>DeleteProject</code>: Deletes a build project.</p> </li> <li> <p> <code>DeleteWebhook</code>: For an existing AWS CodeBuild build project that has its source code stored in a GitHub repository, stops AWS CodeBuild from automatically rebuilding the source code every time a code change is pushed to the repository.</p> </li> <li> <p> <code>ListProjects</code>: Gets a list of build project names, with each build project name representing a single build project.</p> </li> <li> <p> <code>UpdateProject</code>: Changes the settings of an existing build project.</p> </li> <li> <p> <code>BatchGetBuilds</code>: Gets information about one or more builds.</p> </li> <li> <p> <code>ListBuilds</code>: Gets a list of build IDs, with each build ID representing a single build.</p> </li> <li> <p> <code>ListBuildsForProject</code>: Gets a list of build IDs for the specified build project, with each build ID representing a single build.</p> </li> <li> <p> <code>StartBuild</code>: Starts running a build.</p> </li> <li> <p> <code>StopBuild</code>: Attempts to stop running a build.</p> </li> <li> <p> <code>ListCuratedEnvironmentImages</code>: Gets information about Docker images that are managed by AWS CodeBuild.</p> </li> </ul>

## Actions

### BatchDeleteBuilds



```js
amazonaws_codebuild.BatchDeleteBuilds({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** [BuildIds](#buildids)

#### Output
* output [BatchDeleteBuildsOutput](#batchdeletebuildsoutput)

### BatchGetBuilds



```js
amazonaws_codebuild.BatchGetBuilds({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** [BuildIds](#buildids)

#### Output
* output [BatchGetBuildsOutput](#batchgetbuildsoutput)

### BatchGetProjects



```js
amazonaws_codebuild.BatchGetProjects({
  "names": []
}, context)
```

#### Input
* input `object`
  * names **required** [ProjectNames](#projectnames)

#### Output
* output [BatchGetProjectsOutput](#batchgetprojectsoutput)

### CreateProject



```js
amazonaws_codebuild.CreateProject({
  "name": "",
  "source": {
    "type": ""
  },
  "artifacts": {
    "type": ""
  },
  "environment": {
    "type": "",
    "image": "",
    "computeType": ""
  }
}, context)
```

#### Input
* input `object`
  * artifacts **required** [ProjectArtifacts](#projectartifacts)
  * description [ProjectDescription](#projectdescription)
  * encryptionKey [NonEmptyString](#nonemptystring)
  * environment **required** [ProjectEnvironment](#projectenvironment)
  * name **required** [ProjectName](#projectname)
  * serviceRole [NonEmptyString](#nonemptystring)
  * source **required** [ProjectSource](#projectsource)
  * tags [TagList](#taglist)
  * timeoutInMinutes [TimeOut](#timeout)

#### Output
* output [CreateProjectOutput](#createprojectoutput)

### CreateWebhook



```js
amazonaws_codebuild.CreateWebhook({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** [ProjectName](#projectname)

#### Output
* output [CreateWebhookOutput](#createwebhookoutput)

### DeleteProject



```js
amazonaws_codebuild.DeleteProject({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** [NonEmptyString](#nonemptystring)

#### Output
* output [DeleteProjectOutput](#deleteprojectoutput)

### DeleteWebhook



```js
amazonaws_codebuild.DeleteWebhook({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * projectName **required** [ProjectName](#projectname)

#### Output
* output [DeleteWebhookOutput](#deletewebhookoutput)

### ListBuilds



```js
amazonaws_codebuild.ListBuilds({}, context)
```

#### Input
* input `object`
  * nextToken [String](#string)
  * sortOrder [SortOrderType](#sortordertype)

#### Output
* output [ListBuildsOutput](#listbuildsoutput)

### ListBuildsForProject



```js
amazonaws_codebuild.ListBuildsForProject({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * nextToken [String](#string)
  * projectName **required** [NonEmptyString](#nonemptystring)
  * sortOrder [SortOrderType](#sortordertype)

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
  * nextToken [NonEmptyString](#nonemptystring)
  * sortBy [ProjectSortByType](#projectsortbytype)
  * sortOrder [SortOrderType](#sortordertype)

#### Output
* output [ListProjectsOutput](#listprojectsoutput)

### StartBuild



```js
amazonaws_codebuild.StartBuild({
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * artifactsOverride [ProjectArtifacts](#projectartifacts)
  * buildspecOverride [String](#string)
  * environmentVariablesOverride [EnvironmentVariables](#environmentvariables)
  * projectName **required** [NonEmptyString](#nonemptystring)
  * sourceVersion [String](#string)
  * timeoutInMinutesOverride [TimeOut](#timeout)

#### Output
* output [StartBuildOutput](#startbuildoutput)

### StopBuild



```js
amazonaws_codebuild.StopBuild({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** [NonEmptyString](#nonemptystring)

#### Output
* output [StopBuildOutput](#stopbuildoutput)

### UpdateProject



```js
amazonaws_codebuild.UpdateProject({
  "name": ""
}, context)
```

#### Input
* input `object`
  * artifacts [ProjectArtifacts](#projectartifacts)
  * description [ProjectDescription](#projectdescription)
  * encryptionKey [NonEmptyString](#nonemptystring)
  * environment [ProjectEnvironment](#projectenvironment)
  * name **required** [NonEmptyString](#nonemptystring)
  * serviceRole [NonEmptyString](#nonemptystring)
  * source [ProjectSource](#projectsource)
  * tags [TagList](#taglist)
  * timeoutInMinutes [TimeOut](#timeout)

#### Output
* output [UpdateProjectOutput](#updateprojectoutput)



## Definitions

### AccountLimitExceededException
* AccountLimitExceededException `object`: An AWS service limit was exceeded for the calling AWS account.

### ArtifactNamespace
* ArtifactNamespace `string` (values: NONE, BUILD_ID)

### ArtifactPackaging
* ArtifactPackaging `string` (values: NONE, ZIP)

### ArtifactsType
* ArtifactsType `string` (values: CODEPIPELINE, S3, NO_ARTIFACTS)

### BatchDeleteBuildsInput
* BatchDeleteBuildsInput `object`
  * ids **required** [BuildIds](#buildids)

### BatchDeleteBuildsOutput
* BatchDeleteBuildsOutput `object`
  * buildsDeleted [BuildIds](#buildids)
  * buildsNotDeleted [BuildsNotDeleted](#buildsnotdeleted)

### BatchGetBuildsInput
* BatchGetBuildsInput `object`
  * ids **required** [BuildIds](#buildids)

### BatchGetBuildsOutput
* BatchGetBuildsOutput `object`
  * builds [Builds](#builds)
  * buildsNotFound [BuildIds](#buildids)

### BatchGetProjectsInput
* BatchGetProjectsInput `object`
  * names **required** [ProjectNames](#projectnames)

### BatchGetProjectsOutput
* BatchGetProjectsOutput `object`
  * projects [Projects](#projects)
  * projectsNotFound [ProjectNames](#projectnames)

### Boolean
* Boolean `boolean`

### Build
* Build `object`: Information about a build.
  * arn [NonEmptyString](#nonemptystring)
  * artifacts [BuildArtifacts](#buildartifacts)
  * buildComplete [Boolean](#boolean)
  * buildStatus [StatusType](#statustype)
  * currentPhase [String](#string)
  * endTime [Timestamp](#timestamp)
  * environment [ProjectEnvironment](#projectenvironment)
  * id [NonEmptyString](#nonemptystring)
  * initiator [String](#string)
  * logs [LogsLocation](#logslocation)
  * phases [BuildPhases](#buildphases)
  * projectName [NonEmptyString](#nonemptystring)
  * source [ProjectSource](#projectsource)
  * sourceVersion [NonEmptyString](#nonemptystring)
  * startTime [Timestamp](#timestamp)
  * timeoutInMinutes [WrapperInt](#wrapperint)

### BuildArtifacts
* BuildArtifacts `object`: Information about build output artifacts.
  * location [String](#string)
  * md5sum [String](#string)
  * sha256sum [String](#string)

### BuildIds
* BuildIds `array`
  * items [NonEmptyString](#nonemptystring)

### BuildNotDeleted
* BuildNotDeleted `object`: Information about a build that could not be successfully deleted.
  * id [NonEmptyString](#nonemptystring)
  * statusCode [String](#string)

### BuildPhase
* BuildPhase `object`: Information about a stage for a build.
  * contexts [PhaseContexts](#phasecontexts)
  * durationInSeconds [WrapperLong](#wrapperlong)
  * endTime [Timestamp](#timestamp)
  * phaseStatus [StatusType](#statustype)
  * phaseType [BuildPhaseType](#buildphasetype)
  * startTime [Timestamp](#timestamp)

### BuildPhaseType
* BuildPhaseType `string` (values: SUBMITTED, PROVISIONING, DOWNLOAD_SOURCE, INSTALL, PRE_BUILD, BUILD, POST_BUILD, UPLOAD_ARTIFACTS, FINALIZING, COMPLETED)

### BuildPhases
* BuildPhases `array`
  * items [BuildPhase](#buildphase)

### Builds
* Builds `array`
  * items [Build](#build)

### BuildsNotDeleted
* BuildsNotDeleted `array`
  * items [BuildNotDeleted](#buildnotdeleted)

### ComputeType
* ComputeType `string` (values: BUILD_GENERAL1_SMALL, BUILD_GENERAL1_MEDIUM, BUILD_GENERAL1_LARGE)

### CreateProjectInput
* CreateProjectInput `object`
  * artifacts **required** [ProjectArtifacts](#projectartifacts)
  * description [ProjectDescription](#projectdescription)
  * encryptionKey [NonEmptyString](#nonemptystring)
  * environment **required** [ProjectEnvironment](#projectenvironment)
  * name **required** [ProjectName](#projectname)
  * serviceRole [NonEmptyString](#nonemptystring)
  * source **required** [ProjectSource](#projectsource)
  * tags [TagList](#taglist)
  * timeoutInMinutes [TimeOut](#timeout)

### CreateProjectOutput
* CreateProjectOutput `object`
  * project [Project](#project)

### CreateWebhookInput
* CreateWebhookInput `object`
  * projectName **required** [ProjectName](#projectname)

### CreateWebhookOutput
* CreateWebhookOutput `object`
  * webhook [Webhook](#webhook)

### DeleteProjectInput
* DeleteProjectInput `object`
  * name **required** [NonEmptyString](#nonemptystring)

### DeleteProjectOutput
* DeleteProjectOutput `object`

### DeleteWebhookInput
* DeleteWebhookInput `object`
  * projectName **required** [ProjectName](#projectname)

### DeleteWebhookOutput
* DeleteWebhookOutput `object`

### EnvironmentImage
* EnvironmentImage `object`: Information about a Docker image that is managed by AWS CodeBuild.
  * description [String](#string)
  * name [String](#string)

### EnvironmentImages
* EnvironmentImages `array`
  * items [EnvironmentImage](#environmentimage)

### EnvironmentLanguage
* EnvironmentLanguage `object`: A set of Docker images that are related by programming language and are managed by AWS CodeBuild.
  * images [EnvironmentImages](#environmentimages)
  * language [LanguageType](#languagetype)

### EnvironmentLanguages
* EnvironmentLanguages `array`
  * items [EnvironmentLanguage](#environmentlanguage)

### EnvironmentPlatform
* EnvironmentPlatform `object`: A set of Docker images that are related by platform and are managed by AWS CodeBuild.
  * languages [EnvironmentLanguages](#environmentlanguages)
  * platform [PlatformType](#platformtype)

### EnvironmentPlatforms
* EnvironmentPlatforms `array`
  * items [EnvironmentPlatform](#environmentplatform)

### EnvironmentType
* EnvironmentType `string` (values: LINUX_CONTAINER)

### EnvironmentVariable
* EnvironmentVariable `object`: Information about an environment variable for a build project or a build.
  * name **required** [NonEmptyString](#nonemptystring)
  * type [EnvironmentVariableType](#environmentvariabletype)
  * value **required** [String](#string)

### EnvironmentVariableType
* EnvironmentVariableType `string` (values: PLAINTEXT, PARAMETER_STORE)

### EnvironmentVariables
* EnvironmentVariables `array`
  * items [EnvironmentVariable](#environmentvariable)

### InvalidInputException
* InvalidInputException `object`: The input value that was provided is not valid.

### KeyInput
* KeyInput `string`

### LanguageType
* LanguageType `string` (values: JAVA, PYTHON, NODE_JS, RUBY, GOLANG, DOCKER, ANDROID, DOTNET, BASE)

### ListBuildsForProjectInput
* ListBuildsForProjectInput `object`
  * nextToken [String](#string)
  * projectName **required** [NonEmptyString](#nonemptystring)
  * sortOrder [SortOrderType](#sortordertype)

### ListBuildsForProjectOutput
* ListBuildsForProjectOutput `object`
  * ids [BuildIds](#buildids)
  * nextToken [String](#string)

### ListBuildsInput
* ListBuildsInput `object`
  * nextToken [String](#string)
  * sortOrder [SortOrderType](#sortordertype)

### ListBuildsOutput
* ListBuildsOutput `object`
  * ids [BuildIds](#buildids)
  * nextToken [String](#string)

### ListCuratedEnvironmentImagesInput
* ListCuratedEnvironmentImagesInput `object`

### ListCuratedEnvironmentImagesOutput
* ListCuratedEnvironmentImagesOutput `object`
  * platforms [EnvironmentPlatforms](#environmentplatforms)

### ListProjectsInput
* ListProjectsInput `object`
  * nextToken [NonEmptyString](#nonemptystring)
  * sortBy [ProjectSortByType](#projectsortbytype)
  * sortOrder [SortOrderType](#sortordertype)

### ListProjectsOutput
* ListProjectsOutput `object`
  * nextToken [String](#string)
  * projects [ProjectNames](#projectnames)

### LogsLocation
* LogsLocation `object`: Information about build logs in Amazon CloudWatch Logs.
  * deepLink [String](#string)
  * groupName [String](#string)
  * streamName [String](#string)

### NonEmptyString
* NonEmptyString `string`

### OAuthProviderException
* OAuthProviderException `object`: There was a problem with the underlying OAuth provider.

### PhaseContext
* PhaseContext `object`: Additional information about a build phase that has an error. You can use this information to help troubleshoot a failed build.
  * message [String](#string)
  * statusCode [String](#string)

### PhaseContexts
* PhaseContexts `array`
  * items [PhaseContext](#phasecontext)

### PlatformType
* PlatformType `string` (values: DEBIAN, AMAZON_LINUX, UBUNTU)

### Project
* Project `object`: Information about a build project.
  * arn [String](#string)
  * artifacts [ProjectArtifacts](#projectartifacts)
  * created [Timestamp](#timestamp)
  * description [ProjectDescription](#projectdescription)
  * encryptionKey [NonEmptyString](#nonemptystring)
  * environment [ProjectEnvironment](#projectenvironment)
  * lastModified [Timestamp](#timestamp)
  * name [ProjectName](#projectname)
  * serviceRole [NonEmptyString](#nonemptystring)
  * source [ProjectSource](#projectsource)
  * tags [TagList](#taglist)
  * timeoutInMinutes [TimeOut](#timeout)
  * webhook [Webhook](#webhook)

### ProjectArtifacts
* ProjectArtifacts `object`: Information about the build output artifacts for the build project.
  * location [String](#string)
  * name [String](#string)
  * namespaceType [ArtifactNamespace](#artifactnamespace)
  * packaging [ArtifactPackaging](#artifactpackaging)
  * path [String](#string)
  * type **required** [ArtifactsType](#artifactstype)

### ProjectDescription
* ProjectDescription `string`

### ProjectEnvironment
* ProjectEnvironment `object`: Information about the build environment of the build project.
  * computeType **required** [ComputeType](#computetype)
  * environmentVariables [EnvironmentVariables](#environmentvariables)
  * image **required** [NonEmptyString](#nonemptystring)
  * privilegedMode [WrapperBoolean](#wrapperboolean)
  * type **required** [EnvironmentType](#environmenttype)

### ProjectName
* ProjectName `string`

### ProjectNames
* ProjectNames `array`
  * items [NonEmptyString](#nonemptystring)

### ProjectSortByType
* ProjectSortByType `string` (values: NAME, CREATED_TIME, LAST_MODIFIED_TIME)

### ProjectSource
* ProjectSource `object`: Information about the build input source code for the build project.
  * auth [SourceAuth](#sourceauth)
  * buildspec [String](#string)
  * location [String](#string)
  * type **required** [SourceType](#sourcetype)

### Projects
* Projects `array`
  * items [Project](#project)

### ResourceAlreadyExistsException
* ResourceAlreadyExistsException `object`: The specified AWS resource cannot be created, because an AWS resource with the same settings already exists.

### ResourceNotFoundException
* ResourceNotFoundException `object`: The specified AWS resource cannot be found.

### SortOrderType
* SortOrderType `string` (values: ASCENDING, DESCENDING)

### SourceAuth
* SourceAuth `object`: <p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly (unless the build project's source <code>type</code> value is <code>BITBUCKET</code> or <code>GITHUB</code>).</p>
  * resource [String](#string)
  * type **required** [SourceAuthType](#sourceauthtype)

### SourceAuthType
* SourceAuthType `string` (values: OAUTH)

### SourceType
* SourceType `string` (values: CODECOMMIT, CODEPIPELINE, GITHUB, S3, BITBUCKET)

### StartBuildInput
* StartBuildInput `object`
  * artifactsOverride [ProjectArtifacts](#projectartifacts)
  * buildspecOverride [String](#string)
  * environmentVariablesOverride [EnvironmentVariables](#environmentvariables)
  * projectName **required** [NonEmptyString](#nonemptystring)
  * sourceVersion [String](#string)
  * timeoutInMinutesOverride [TimeOut](#timeout)

### StartBuildOutput
* StartBuildOutput `object`
  * build [Build](#build)

### StatusType
* StatusType `string` (values: SUCCEEDED, FAILED, FAULT, TIMED_OUT, IN_PROGRESS, STOPPED)

### StopBuildInput
* StopBuildInput `object`
  * id **required** [NonEmptyString](#nonemptystring)

### StopBuildOutput
* StopBuildOutput `object`
  * build [Build](#build)

### String
* String `string`

### Tag
* Tag `object`: <p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by AWS services that support tags in AWS CodeBuild.</p>
  * key [KeyInput](#keyinput)
  * value [ValueInput](#valueinput)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TimeOut
* TimeOut `integer`

### Timestamp
* Timestamp `string`

### UpdateProjectInput
* UpdateProjectInput `object`
  * artifacts [ProjectArtifacts](#projectartifacts)
  * description [ProjectDescription](#projectdescription)
  * encryptionKey [NonEmptyString](#nonemptystring)
  * environment [ProjectEnvironment](#projectenvironment)
  * name **required** [NonEmptyString](#nonemptystring)
  * serviceRole [NonEmptyString](#nonemptystring)
  * source [ProjectSource](#projectsource)
  * tags [TagList](#taglist)
  * timeoutInMinutes [TimeOut](#timeout)

### UpdateProjectOutput
* UpdateProjectOutput `object`
  * project [Project](#project)

### ValueInput
* ValueInput `string`

### Webhook
* Webhook `object`: Information about a webhook in GitHub that connects repository events to a build project in AWS CodeBuild.
  * url [NonEmptyString](#nonemptystring)

### WrapperBoolean
* WrapperBoolean `boolean`

### WrapperInt
* WrapperInt `integer`

### WrapperLong
* WrapperLong `integer`


