# @datafire/amazonaws_codepipeline

Client library for AWS CodePipeline

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_codepipeline
```
```js
let amazonaws_codepipeline = require('@datafire/amazonaws_codepipeline').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_codepipeline.AcknowledgeJob({
  "jobId": "",
  "nonce": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS CodePipeline</fullname> <p> <b>Overview</b> </p> <p>This is the AWS CodePipeline API Reference. This guide provides descriptions of the actions and data types for AWS CodePipeline. Some functionality for your pipeline is only configurable through the API. For additional information, see the <a href="http://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html">AWS CodePipeline User Guide</a>.</p> <p>You can use the AWS CodePipeline API to work with pipelines, stages, actions, gates, and transitions, as described below.</p> <p> <i>Pipelines</i> are models of automated release processes. Each pipeline is uniquely named, and consists of actions, gates, and stages. </p> <p>You can work with pipelines by calling:</p> <ul> <li> <p> <a>CreatePipeline</a>, which creates a uniquely-named pipeline.</p> </li> <li> <p> <a>DeletePipeline</a>, which deletes the specified pipeline.</p> </li> <li> <p> <a>GetPipeline</a>, which returns information about the pipeline structure and pipeline metadata, including the pipeline Amazon Resource Name (ARN).</p> </li> <li> <p> <a>GetPipelineExecution</a>, which returns information about a specific execution of a pipeline.</p> </li> <li> <p> <a>GetPipelineState</a>, which returns information about the current state of the stages and actions of a pipeline.</p> </li> <li> <p> <a>ListPipelines</a>, which gets a summary of all of the pipelines associated with your account.</p> </li> <li> <p> <a>ListPipelineExecutions</a>, which gets a summary of the most recent executions for a pipeline.</p> </li> <li> <p> <a>StartPipelineExecution</a>, which runs the the most recent revision of an artifact through the pipeline.</p> </li> <li> <p> <a>UpdatePipeline</a>, which updates a pipeline with edits or changes to the structure of the pipeline.</p> </li> </ul> <p>Pipelines include <i>stages</i>, which are logical groupings of gates and actions. Each stage contains one or more actions that must complete before the next stage begins. A stage will result in success or failure. If a stage fails, then the pipeline stops at that stage and will remain stopped until either a new version of an artifact appears in the source location, or a user takes action to re-run the most recent artifact through the pipeline. You can call <a>GetPipelineState</a>, which displays the status of a pipeline, including the status of stages in the pipeline, or <a>GetPipeline</a>, which returns the entire structure of the pipeline, including the stages of that pipeline. For more information about the structure of stages and actions, also refer to the <a href="http://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-structure.html">AWS CodePipeline Pipeline Structure Reference</a>.</p> <p>Pipeline stages include <i>actions</i>, which are categorized into categories such as source or build actions performed within a stage of a pipeline. For example, you can use a source action to import artifacts into a pipeline from a source such as Amazon S3. Like stages, you do not work with actions directly in most cases, but you do define and interact with actions when working with pipeline operations such as <a>CreatePipeline</a> and <a>GetPipelineState</a>. </p> <p>Pipelines also include <i>transitions</i>, which allow the transition of artifacts from one stage to the next in a pipeline after the actions in one stage complete.</p> <p>You can work with transitions by calling:</p> <ul> <li> <p> <a>DisableStageTransition</a>, which prevents artifacts from transitioning to the next stage in a pipeline.</p> </li> <li> <p> <a>EnableStageTransition</a>, which enables transition of artifacts between stages in a pipeline. </p> </li> </ul> <p> <b>Using the API to integrate with AWS CodePipeline</b> </p> <p>For third-party integrators or developers who want to create their own integrations with AWS CodePipeline, the expected sequence varies from the standard API user. In order to integrate with AWS CodePipeline, developers will need to work with the following items:</p> <p> <b>Jobs</b>, which are instances of an action. For example, a job for a source action might import a revision of an artifact from a source. </p> <p>You can work with jobs by calling:</p> <ul> <li> <p> <a>AcknowledgeJob</a>, which confirms whether a job worker has received the specified job,</p> </li> <li> <p> <a>GetJobDetails</a>, which returns the details of a job,</p> </li> <li> <p> <a>PollForJobs</a>, which determines whether there are any jobs to act upon, </p> </li> <li> <p> <a>PutJobFailureResult</a>, which provides details of a job failure, and</p> </li> <li> <p> <a>PutJobSuccessResult</a>, which provides details of a job success.</p> </li> </ul> <p> <b>Third party jobs</b>, which are instances of an action created by a partner action and integrated into AWS CodePipeline. Partner actions are created by members of the AWS Partner Network.</p> <p>You can work with third party jobs by calling:</p> <ul> <li> <p> <a>AcknowledgeThirdPartyJob</a>, which confirms whether a job worker has received the specified job,</p> </li> <li> <p> <a>GetThirdPartyJobDetails</a>, which requests the details of a job for a partner action,</p> </li> <li> <p> <a>PollForThirdPartyJobs</a>, which determines whether there are any jobs to act upon, </p> </li> <li> <p> <a>PutThirdPartyJobFailureResult</a>, which provides details of a job failure, and</p> </li> <li> <p> <a>PutThirdPartyJobSuccessResult</a>, which provides details of a job success.</p> </li> </ul>

## Actions

### AcknowledgeJob



```js
amazonaws_codepipeline.AcknowledgeJob({
  "jobId": "",
  "nonce": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** [JobId](#jobid)
  * nonce **required** [Nonce](#nonce)

#### Output
* output [AcknowledgeJobOutput](#acknowledgejoboutput)

### AcknowledgeThirdPartyJob



```js
amazonaws_codepipeline.AcknowledgeThirdPartyJob({
  "jobId": "",
  "nonce": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * clientToken **required** [ClientToken](#clienttoken)
  * jobId **required** [ThirdPartyJobId](#thirdpartyjobid)
  * nonce **required** [Nonce](#nonce)

#### Output
* output [AcknowledgeThirdPartyJobOutput](#acknowledgethirdpartyjoboutput)

### CreateCustomActionType



```js
amazonaws_codepipeline.CreateCustomActionType({
  "category": "",
  "provider": "",
  "version": "",
  "inputArtifactDetails": {
    "minimumCount": 0,
    "maximumCount": 0
  },
  "outputArtifactDetails": {
    "minimumCount": 0,
    "maximumCount": 0
  }
}, context)
```

#### Input
* input `object`
  * category **required** [ActionCategory](#actioncategory)
  * configurationProperties [ActionConfigurationPropertyList](#actionconfigurationpropertylist)
  * inputArtifactDetails **required** [ArtifactDetails](#artifactdetails)
  * outputArtifactDetails **required** [ArtifactDetails](#artifactdetails)
  * provider **required** [ActionProvider](#actionprovider)
  * settings [ActionTypeSettings](#actiontypesettings)
  * version **required** [Version](#version)

#### Output
* output [CreateCustomActionTypeOutput](#createcustomactiontypeoutput)

### CreatePipeline



```js
amazonaws_codepipeline.CreatePipeline({
  "pipeline": {
    "name": "",
    "roleArn": "",
    "artifactStore": {
      "type": "",
      "location": ""
    },
    "stages": []
  }
}, context)
```

#### Input
* input `object`
  * pipeline **required** [PipelineDeclaration](#pipelinedeclaration)

#### Output
* output [CreatePipelineOutput](#createpipelineoutput)

### DeleteCustomActionType



```js
amazonaws_codepipeline.DeleteCustomActionType({
  "category": "",
  "provider": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * category **required** [ActionCategory](#actioncategory)
  * provider **required** [ActionProvider](#actionprovider)
  * version **required** [Version](#version)

#### Output
*Output schema unknown*

### DeletePipeline



```js
amazonaws_codepipeline.DeletePipeline({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** [PipelineName](#pipelinename)

#### Output
*Output schema unknown*

### DisableStageTransition



```js
amazonaws_codepipeline.DisableStageTransition({
  "pipelineName": "",
  "stageName": "",
  "transitionType": "",
  "reason": ""
}, context)
```

#### Input
* input `object`
  * pipelineName **required** [PipelineName](#pipelinename)
  * reason **required** [DisabledReason](#disabledreason)
  * stageName **required** [StageName](#stagename)
  * transitionType **required** [StageTransitionType](#stagetransitiontype)

#### Output
*Output schema unknown*

### EnableStageTransition



```js
amazonaws_codepipeline.EnableStageTransition({
  "pipelineName": "",
  "stageName": "",
  "transitionType": ""
}, context)
```

#### Input
* input `object`
  * pipelineName **required** [PipelineName](#pipelinename)
  * stageName **required** [StageName](#stagename)
  * transitionType **required** [StageTransitionType](#stagetransitiontype)

#### Output
*Output schema unknown*

### GetJobDetails



```js
amazonaws_codepipeline.GetJobDetails({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** [JobId](#jobid)

#### Output
* output [GetJobDetailsOutput](#getjobdetailsoutput)

### GetPipeline



```js
amazonaws_codepipeline.GetPipeline({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** [PipelineName](#pipelinename)
  * version [PipelineVersion](#pipelineversion)

#### Output
* output [GetPipelineOutput](#getpipelineoutput)

### GetPipelineExecution



```js
amazonaws_codepipeline.GetPipelineExecution({
  "pipelineName": "",
  "pipelineExecutionId": ""
}, context)
```

#### Input
* input `object`
  * pipelineExecutionId **required** [PipelineExecutionId](#pipelineexecutionid)
  * pipelineName **required** [PipelineName](#pipelinename)

#### Output
* output [GetPipelineExecutionOutput](#getpipelineexecutionoutput)

### GetPipelineState



```js
amazonaws_codepipeline.GetPipelineState({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** [PipelineName](#pipelinename)

#### Output
* output [GetPipelineStateOutput](#getpipelinestateoutput)

### GetThirdPartyJobDetails



```js
amazonaws_codepipeline.GetThirdPartyJobDetails({
  "jobId": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * clientToken **required** [ClientToken](#clienttoken)
  * jobId **required** [ThirdPartyJobId](#thirdpartyjobid)

#### Output
* output [GetThirdPartyJobDetailsOutput](#getthirdpartyjobdetailsoutput)

### ListActionTypes



```js
amazonaws_codepipeline.ListActionTypes({}, context)
```

#### Input
* input `object`
  * actionOwnerFilter [ActionOwner](#actionowner)
  * nextToken [NextToken](#nexttoken)

#### Output
* output [ListActionTypesOutput](#listactiontypesoutput)

### ListPipelineExecutions



```js
amazonaws_codepipeline.ListPipelineExecutions({
  "pipelineName": ""
}, context)
```

#### Input
* input `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * pipelineName **required** [PipelineName](#pipelinename)

#### Output
* output [ListPipelineExecutionsOutput](#listpipelineexecutionsoutput)

### ListPipelines



```js
amazonaws_codepipeline.ListPipelines({}, context)
```

#### Input
* input `object`
  * nextToken [NextToken](#nexttoken)

#### Output
* output [ListPipelinesOutput](#listpipelinesoutput)

### PollForJobs



```js
amazonaws_codepipeline.PollForJobs({
  "actionTypeId": {
    "category": "",
    "owner": "",
    "provider": "",
    "version": ""
  }
}, context)
```

#### Input
* input `object`
  * actionTypeId **required** [ActionTypeId](#actiontypeid)
  * maxBatchSize [MaxBatchSize](#maxbatchsize)
  * queryParam [QueryParamMap](#queryparammap)

#### Output
* output [PollForJobsOutput](#pollforjobsoutput)

### PollForThirdPartyJobs



```js
amazonaws_codepipeline.PollForThirdPartyJobs({
  "actionTypeId": {
    "category": "",
    "owner": "",
    "provider": "",
    "version": ""
  }
}, context)
```

#### Input
* input `object`
  * actionTypeId **required** [ActionTypeId](#actiontypeid)
  * maxBatchSize [MaxBatchSize](#maxbatchsize)

#### Output
* output [PollForThirdPartyJobsOutput](#pollforthirdpartyjobsoutput)

### PutActionRevision



```js
amazonaws_codepipeline.PutActionRevision({
  "pipelineName": "",
  "stageName": "",
  "actionName": "",
  "actionRevision": {
    "revisionId": "",
    "revisionChangeId": "",
    "created": ""
  }
}, context)
```

#### Input
* input `object`
  * actionName **required** [ActionName](#actionname)
  * actionRevision **required** [ActionRevision](#actionrevision)
  * pipelineName **required** [PipelineName](#pipelinename)
  * stageName **required** [StageName](#stagename)

#### Output
* output [PutActionRevisionOutput](#putactionrevisionoutput)

### PutApprovalResult



```js
amazonaws_codepipeline.PutApprovalResult({
  "pipelineName": "",
  "stageName": "",
  "actionName": "",
  "result": {
    "summary": "",
    "status": ""
  },
  "token": ""
}, context)
```

#### Input
* input `object`
  * actionName **required** [ActionName](#actionname)
  * pipelineName **required** [PipelineName](#pipelinename)
  * result **required** [ApprovalResult](#approvalresult)
  * stageName **required** [StageName](#stagename)
  * token **required** [ApprovalToken](#approvaltoken)

#### Output
* output [PutApprovalResultOutput](#putapprovalresultoutput)

### PutJobFailureResult



```js
amazonaws_codepipeline.PutJobFailureResult({
  "jobId": "",
  "failureDetails": {
    "type": "",
    "message": ""
  }
}, context)
```

#### Input
* input `object`
  * failureDetails **required** [FailureDetails](#failuredetails)
  * jobId **required** [JobId](#jobid)

#### Output
*Output schema unknown*

### PutJobSuccessResult



```js
amazonaws_codepipeline.PutJobSuccessResult({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * continuationToken [ContinuationToken](#continuationtoken)
  * currentRevision [CurrentRevision](#currentrevision)
  * executionDetails [ExecutionDetails](#executiondetails)
  * jobId **required** [JobId](#jobid)

#### Output
*Output schema unknown*

### PutThirdPartyJobFailureResult



```js
amazonaws_codepipeline.PutThirdPartyJobFailureResult({
  "jobId": "",
  "clientToken": "",
  "failureDetails": {
    "type": "",
    "message": ""
  }
}, context)
```

#### Input
* input `object`
  * clientToken **required** [ClientToken](#clienttoken)
  * failureDetails **required** [FailureDetails](#failuredetails)
  * jobId **required** [ThirdPartyJobId](#thirdpartyjobid)

#### Output
*Output schema unknown*

### PutThirdPartyJobSuccessResult



```js
amazonaws_codepipeline.PutThirdPartyJobSuccessResult({
  "jobId": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * clientToken **required** [ClientToken](#clienttoken)
  * continuationToken [ContinuationToken](#continuationtoken)
  * currentRevision [CurrentRevision](#currentrevision)
  * executionDetails [ExecutionDetails](#executiondetails)
  * jobId **required** [ThirdPartyJobId](#thirdpartyjobid)

#### Output
*Output schema unknown*

### RetryStageExecution



```js
amazonaws_codepipeline.RetryStageExecution({
  "pipelineName": "",
  "stageName": "",
  "pipelineExecutionId": "",
  "retryMode": ""
}, context)
```

#### Input
* input `object`
  * pipelineExecutionId **required** [PipelineExecutionId](#pipelineexecutionid)
  * pipelineName **required** [PipelineName](#pipelinename)
  * retryMode **required** [StageRetryMode](#stageretrymode)
  * stageName **required** [StageName](#stagename)

#### Output
* output [RetryStageExecutionOutput](#retrystageexecutionoutput)

### StartPipelineExecution



```js
amazonaws_codepipeline.StartPipelineExecution({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** [PipelineName](#pipelinename)

#### Output
* output [StartPipelineExecutionOutput](#startpipelineexecutionoutput)

### UpdatePipeline



```js
amazonaws_codepipeline.UpdatePipeline({
  "pipeline": {
    "name": "",
    "roleArn": "",
    "artifactStore": {
      "type": "",
      "location": ""
    },
    "stages": []
  }
}, context)
```

#### Input
* input `object`
  * pipeline **required** [PipelineDeclaration](#pipelinedeclaration)

#### Output
* output [UpdatePipelineOutput](#updatepipelineoutput)



## Definitions

### AWSSessionCredentials
* AWSSessionCredentials `object`: Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the Amazon S3 bucket used to store artifact for the pipeline in AWS CodePipeline.
  * accessKeyId **required** [AccessKeyId](#accesskeyid)
  * secretAccessKey **required** [SecretAccessKey](#secretaccesskey)
  * sessionToken **required** [SessionToken](#sessiontoken)

### AccessKeyId
* AccessKeyId `string`

### AccountId
* AccountId `string`

### AcknowledgeJobInput
* AcknowledgeJobInput `object`: Represents the input of an AcknowledgeJob action.
  * jobId **required** [JobId](#jobid)
  * nonce **required** [Nonce](#nonce)

### AcknowledgeJobOutput
* AcknowledgeJobOutput `object`: Represents the output of an AcknowledgeJob action.
  * status [JobStatus](#jobstatus)

### AcknowledgeThirdPartyJobInput
* AcknowledgeThirdPartyJobInput `object`: Represents the input of an AcknowledgeThirdPartyJob action.
  * clientToken **required** [ClientToken](#clienttoken)
  * jobId **required** [ThirdPartyJobId](#thirdpartyjobid)
  * nonce **required** [Nonce](#nonce)

### AcknowledgeThirdPartyJobOutput
* AcknowledgeThirdPartyJobOutput `object`: Represents the output of an AcknowledgeThirdPartyJob action.
  * status [JobStatus](#jobstatus)

### ActionCategory
* ActionCategory `string` (values: Source, Build, Deploy, Test, Invoke, Approval)

### ActionConfiguration
* ActionConfiguration `object`: Represents information about an action configuration.
  * configuration [ActionConfigurationMap](#actionconfigurationmap)

### ActionConfigurationKey
* ActionConfigurationKey `string`

### ActionConfigurationMap
* ActionConfigurationMap `array`
  * items `object`
    * key [ActionConfigurationKey](#actionconfigurationkey)
    * value [ActionConfigurationValue](#actionconfigurationvalue)

### ActionConfigurationProperty
* ActionConfigurationProperty `object`: Represents information about an action configuration property.
  * description [Description](#description)
  * key **required** [Boolean](#boolean)
  * name **required** [ActionConfigurationKey](#actionconfigurationkey)
  * queryable [Boolean](#boolean)
  * required **required** [Boolean](#boolean)
  * secret **required** [Boolean](#boolean)
  * type [ActionConfigurationPropertyType](#actionconfigurationpropertytype)

### ActionConfigurationPropertyList
* ActionConfigurationPropertyList `array`
  * items [ActionConfigurationProperty](#actionconfigurationproperty)

### ActionConfigurationPropertyType
* ActionConfigurationPropertyType `string` (values: String, Number, Boolean)

### ActionConfigurationQueryableValue
* ActionConfigurationQueryableValue `string`

### ActionConfigurationValue
* ActionConfigurationValue `string`

### ActionContext
* ActionContext `object`: Represents the context of an action within the stage of a pipeline to a job worker.
  * name [ActionName](#actionname)

### ActionDeclaration
* ActionDeclaration `object`: Represents information about an action declaration.
  * actionTypeId **required** [ActionTypeId](#actiontypeid)
  * configuration [ActionConfigurationMap](#actionconfigurationmap)
  * inputArtifacts [InputArtifactList](#inputartifactlist)
  * name **required** [ActionName](#actionname)
  * outputArtifacts [OutputArtifactList](#outputartifactlist)
  * roleArn [RoleArn](#rolearn)
  * runOrder [ActionRunOrder](#actionrunorder)

### ActionExecution
* ActionExecution `object`: Represents information about the run of an action.
  * errorDetails [ErrorDetails](#errordetails)
  * externalExecutionId [ExecutionId](#executionid)
  * externalExecutionUrl [Url](#url)
  * lastStatusChange [Timestamp](#timestamp)
  * lastUpdatedBy [LastUpdatedBy](#lastupdatedby)
  * percentComplete [Percentage](#percentage)
  * status [ActionExecutionStatus](#actionexecutionstatus)
  * summary [ExecutionSummary](#executionsummary)
  * token [ActionExecutionToken](#actionexecutiontoken)

### ActionExecutionStatus
* ActionExecutionStatus `string` (values: InProgress, Succeeded, Failed)

### ActionExecutionToken
* ActionExecutionToken `string`

### ActionName
* ActionName `string`

### ActionNotFoundException
* ActionNotFoundException `object`: The specified action cannot be found.

### ActionOwner
* ActionOwner `string` (values: AWS, ThirdParty, Custom)

### ActionProvider
* ActionProvider `string`

### ActionRevision
* ActionRevision `object`: Represents information about the version (or revision) of an action.
  * created **required** [Timestamp](#timestamp)
  * revisionChangeId **required** [RevisionChangeIdentifier](#revisionchangeidentifier)
  * revisionId **required** [Revision](#revision)

### ActionRunOrder
* ActionRunOrder `integer`

### ActionState
* ActionState `object`: Represents information about the state of an action.
  * actionName [ActionName](#actionname)
  * currentRevision [ActionRevision](#actionrevision)
  * entityUrl [Url](#url)
  * latestExecution [ActionExecution](#actionexecution)
  * revisionUrl [Url](#url)

### ActionStateList
* ActionStateList `array`
  * items [ActionState](#actionstate)

### ActionType
* ActionType `object`: Returns information about the details of an action type.
  * actionConfigurationProperties [ActionConfigurationPropertyList](#actionconfigurationpropertylist)
  * id **required** [ActionTypeId](#actiontypeid)
  * inputArtifactDetails **required** [ArtifactDetails](#artifactdetails)
  * outputArtifactDetails **required** [ArtifactDetails](#artifactdetails)
  * settings [ActionTypeSettings](#actiontypesettings)

### ActionTypeId
* ActionTypeId `object`: Represents information about an action type.
  * category **required** [ActionCategory](#actioncategory)
  * owner **required** [ActionOwner](#actionowner)
  * provider **required** [ActionProvider](#actionprovider)
  * version **required** [Version](#version)

### ActionTypeList
* ActionTypeList `array`
  * items [ActionType](#actiontype)

### ActionTypeNotFoundException
* ActionTypeNotFoundException `object`: The specified action type cannot be found.

### ActionTypeSettings
* ActionTypeSettings `object`: Returns information about the settings for an action type.
  * entityUrlTemplate [UrlTemplate](#urltemplate)
  * executionUrlTemplate [UrlTemplate](#urltemplate)
  * revisionUrlTemplate [UrlTemplate](#urltemplate)
  * thirdPartyConfigurationUrl [Url](#url)

### ApprovalAlreadyCompletedException
* ApprovalAlreadyCompletedException `object`: The approval action has already been approved or rejected.

### ApprovalResult
* ApprovalResult `object`: Represents information about the result of an approval request.
  * status **required** [ApprovalStatus](#approvalstatus)
  * summary **required** [ApprovalSummary](#approvalsummary)

### ApprovalStatus
* ApprovalStatus `string` (values: Approved, Rejected)

### ApprovalSummary
* ApprovalSummary `string`

### ApprovalToken
* ApprovalToken `string`

### Artifact
* Artifact `object`: Represents information about an artifact that will be worked upon by actions in the pipeline.
  * location [ArtifactLocation](#artifactlocation)
  * name [ArtifactName](#artifactname)
  * revision [Revision](#revision)

### ArtifactDetails
* ArtifactDetails `object`: Returns information about the details of an artifact.
  * maximumCount **required** [MaximumArtifactCount](#maximumartifactcount)
  * minimumCount **required** [MinimumArtifactCount](#minimumartifactcount)

### ArtifactList
* ArtifactList `array`
  * items [Artifact](#artifact)

### ArtifactLocation
* ArtifactLocation `object`: Represents information about the location of an artifact.
  * s3Location [S3ArtifactLocation](#s3artifactlocation)
  * type [ArtifactLocationType](#artifactlocationtype)

### ArtifactLocationType
* ArtifactLocationType `string` (values: S3)

### ArtifactName
* ArtifactName `string`

### ArtifactRevision
* ArtifactRevision `object`: Represents revision details of an artifact. 
  * created [Timestamp](#timestamp)
  * name [ArtifactName](#artifactname)
  * revisionChangeIdentifier [RevisionChangeIdentifier](#revisionchangeidentifier)
  * revisionId [Revision](#revision)
  * revisionSummary [RevisionSummary](#revisionsummary)
  * revisionUrl [Url](#url)

### ArtifactRevisionList
* ArtifactRevisionList `array`
  * items [ArtifactRevision](#artifactrevision)

### ArtifactStore
* ArtifactStore `object`: The Amazon S3 bucket where artifacts are stored for the pipeline.
  * encryptionKey [EncryptionKey](#encryptionkey)
  * location **required** [ArtifactStoreLocation](#artifactstorelocation)
  * type **required** [ArtifactStoreType](#artifactstoretype)

### ArtifactStoreLocation
* ArtifactStoreLocation `string`

### ArtifactStoreType
* ArtifactStoreType `string` (values: S3)

### BlockerDeclaration
* BlockerDeclaration `object`: Reserved for future use.
  * name **required** [BlockerName](#blockername)
  * type **required** [BlockerType](#blockertype)

### BlockerName
* BlockerName `string`

### BlockerType
* BlockerType `string` (values: Schedule)

### Boolean
* Boolean `boolean`

### ClientId
* ClientId `string`

### ClientToken
* ClientToken `string`

### Code
* Code `string`

### ContinuationToken
* ContinuationToken `string`

### CreateCustomActionTypeInput
* CreateCustomActionTypeInput `object`: Represents the input of a CreateCustomActionType operation.
  * category **required** [ActionCategory](#actioncategory)
  * configurationProperties [ActionConfigurationPropertyList](#actionconfigurationpropertylist)
  * inputArtifactDetails **required** [ArtifactDetails](#artifactdetails)
  * outputArtifactDetails **required** [ArtifactDetails](#artifactdetails)
  * provider **required** [ActionProvider](#actionprovider)
  * settings [ActionTypeSettings](#actiontypesettings)
  * version **required** [Version](#version)

### CreateCustomActionTypeOutput
* CreateCustomActionTypeOutput `object`: Represents the output of a CreateCustomActionType operation.
  * actionType **required** [ActionType](#actiontype)

### CreatePipelineInput
* CreatePipelineInput `object`: Represents the input of a CreatePipeline action.
  * pipeline **required** [PipelineDeclaration](#pipelinedeclaration)

### CreatePipelineOutput
* CreatePipelineOutput `object`: Represents the output of a CreatePipeline action.
  * pipeline [PipelineDeclaration](#pipelinedeclaration)

### CurrentRevision
* CurrentRevision `object`: Represents information about a current revision.
  * changeIdentifier **required** [RevisionChangeIdentifier](#revisionchangeidentifier)
  * created [Time](#time)
  * revision **required** [Revision](#revision)
  * revisionSummary [RevisionSummary](#revisionsummary)

### DeleteCustomActionTypeInput
* DeleteCustomActionTypeInput `object`: Represents the input of a DeleteCustomActionType operation. The custom action will be marked as deleted.
  * category **required** [ActionCategory](#actioncategory)
  * provider **required** [ActionProvider](#actionprovider)
  * version **required** [Version](#version)

### DeletePipelineInput
* DeletePipelineInput `object`: Represents the input of a DeletePipeline action.
  * name **required** [PipelineName](#pipelinename)

### Description
* Description `string`

### DisableStageTransitionInput
* DisableStageTransitionInput `object`: Represents the input of a DisableStageTransition action.
  * pipelineName **required** [PipelineName](#pipelinename)
  * reason **required** [DisabledReason](#disabledreason)
  * stageName **required** [StageName](#stagename)
  * transitionType **required** [StageTransitionType](#stagetransitiontype)

### DisabledReason
* DisabledReason `string`

### EnableStageTransitionInput
* EnableStageTransitionInput `object`: Represents the input of an EnableStageTransition action.
  * pipelineName **required** [PipelineName](#pipelinename)
  * stageName **required** [StageName](#stagename)
  * transitionType **required** [StageTransitionType](#stagetransitiontype)

### Enabled
* Enabled `boolean`

### EncryptionKey
* EncryptionKey `object`: Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.
  * id **required** [EncryptionKeyId](#encryptionkeyid)
  * type **required** [EncryptionKeyType](#encryptionkeytype)

### EncryptionKeyId
* EncryptionKeyId `string`

### EncryptionKeyType
* EncryptionKeyType `string` (values: KMS)

### ErrorDetails
* ErrorDetails `object`: Represents information about an error in AWS CodePipeline.
  * code [Code](#code)
  * message [Message](#message)

### ExecutionDetails
* ExecutionDetails `object`: The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.
  * externalExecutionId [ExecutionId](#executionid)
  * percentComplete [Percentage](#percentage)
  * summary [ExecutionSummary](#executionsummary)

### ExecutionId
* ExecutionId `string`

### ExecutionSummary
* ExecutionSummary `string`

### FailureDetails
* FailureDetails `object`: Represents information about failure details.
  * externalExecutionId [ExecutionId](#executionid)
  * message **required** [Message](#message)
  * type **required** [FailureType](#failuretype)

### FailureType
* FailureType `string` (values: JobFailed, ConfigurationError, PermissionError, RevisionOutOfSync, RevisionUnavailable, SystemUnavailable)

### GetJobDetailsInput
* GetJobDetailsInput `object`: Represents the input of a GetJobDetails action.
  * jobId **required** [JobId](#jobid)

### GetJobDetailsOutput
* GetJobDetailsOutput `object`: Represents the output of a GetJobDetails action.
  * jobDetails [JobDetails](#jobdetails)

### GetPipelineExecutionInput
* GetPipelineExecutionInput `object`: Represents the input of a GetPipelineExecution action.
  * pipelineExecutionId **required** [PipelineExecutionId](#pipelineexecutionid)
  * pipelineName **required** [PipelineName](#pipelinename)

### GetPipelineExecutionOutput
* GetPipelineExecutionOutput `object`: Represents the output of a GetPipelineExecution action.
  * pipelineExecution [PipelineExecution](#pipelineexecution)

### GetPipelineInput
* GetPipelineInput `object`: Represents the input of a GetPipeline action.
  * name **required** [PipelineName](#pipelinename)
  * version [PipelineVersion](#pipelineversion)

### GetPipelineOutput
* GetPipelineOutput `object`: Represents the output of a GetPipeline action.
  * metadata [PipelineMetadata](#pipelinemetadata)
  * pipeline [PipelineDeclaration](#pipelinedeclaration)

### GetPipelineStateInput
* GetPipelineStateInput `object`: Represents the input of a GetPipelineState action.
  * name **required** [PipelineName](#pipelinename)

### GetPipelineStateOutput
* GetPipelineStateOutput `object`: Represents the output of a GetPipelineState action.
  * created [Timestamp](#timestamp)
  * pipelineName [PipelineName](#pipelinename)
  * pipelineVersion [PipelineVersion](#pipelineversion)
  * stageStates [StageStateList](#stagestatelist)
  * updated [Timestamp](#timestamp)

### GetThirdPartyJobDetailsInput
* GetThirdPartyJobDetailsInput `object`: Represents the input of a GetThirdPartyJobDetails action.
  * clientToken **required** [ClientToken](#clienttoken)
  * jobId **required** [ThirdPartyJobId](#thirdpartyjobid)

### GetThirdPartyJobDetailsOutput
* GetThirdPartyJobDetailsOutput `object`: Represents the output of a GetThirdPartyJobDetails action.
  * jobDetails [ThirdPartyJobDetails](#thirdpartyjobdetails)

### InputArtifact
* InputArtifact `object`: Represents information about an artifact to be worked on, such as a test or build artifact.
  * name **required** [ArtifactName](#artifactname)

### InputArtifactList
* InputArtifactList `array`
  * items [InputArtifact](#inputartifact)

### InvalidActionDeclarationException
* InvalidActionDeclarationException `object`: The specified action declaration was specified in an invalid format.

### InvalidApprovalTokenException
* InvalidApprovalTokenException `object`: The approval request already received a response or has expired.

### InvalidBlockerDeclarationException
* InvalidBlockerDeclarationException `object`: Reserved for future use.

### InvalidClientTokenException
* InvalidClientTokenException `object`: The client token was specified in an invalid format

### InvalidJobException
* InvalidJobException `object`: The specified job was specified in an invalid format or cannot be found.

### InvalidJobStateException
* InvalidJobStateException `object`: The specified job state was specified in an invalid format.

### InvalidNextTokenException
* InvalidNextTokenException `object`: The next token was specified in an invalid format. Make sure that the next token you provided is the token returned by a previous call.

### InvalidNonceException
* InvalidNonceException `object`: The specified nonce was specified in an invalid format.

### InvalidStageDeclarationException
* InvalidStageDeclarationException `object`: The specified stage declaration was specified in an invalid format.

### InvalidStructureException
* InvalidStructureException `object`: The specified structure was specified in an invalid format.

### Job
* Job `object`: Represents information about a job.
  * accountId [AccountId](#accountid)
  * data [JobData](#jobdata)
  * id [JobId](#jobid)
  * nonce [Nonce](#nonce)

### JobData
* JobData `object`: Represents additional information about a job required for a job worker to complete the job.
  * actionConfiguration [ActionConfiguration](#actionconfiguration)
  * actionTypeId [ActionTypeId](#actiontypeid)
  * artifactCredentials [AWSSessionCredentials](#awssessioncredentials)
  * continuationToken [ContinuationToken](#continuationtoken)
  * encryptionKey [EncryptionKey](#encryptionkey)
  * inputArtifacts [ArtifactList](#artifactlist)
  * outputArtifacts [ArtifactList](#artifactlist)
  * pipelineContext [PipelineContext](#pipelinecontext)

### JobDetails
* JobDetails `object`: Represents information about the details of a job.
  * accountId [AccountId](#accountid)
  * data [JobData](#jobdata)
  * id [JobId](#jobid)

### JobId
* JobId `string`

### JobList
* JobList `array`
  * items [Job](#job)

### JobNotFoundException
* JobNotFoundException `object`: The specified job was specified in an invalid format or cannot be found.

### JobStatus
* JobStatus `string` (values: Created, Queued, Dispatched, InProgress, TimedOut, Succeeded, Failed)

### LastChangedAt
* LastChangedAt `string`

### LastChangedBy
* LastChangedBy `string`

### LastUpdatedBy
* LastUpdatedBy `string`

### LimitExceededException
* LimitExceededException `object`: The number of pipelines associated with the AWS account has exceeded the limit allowed for the account.

### ListActionTypesInput
* ListActionTypesInput `object`: Represents the input of a ListActionTypes action.
  * actionOwnerFilter [ActionOwner](#actionowner)
  * nextToken [NextToken](#nexttoken)

### ListActionTypesOutput
* ListActionTypesOutput `object`: Represents the output of a ListActionTypes action.
  * actionTypes **required** [ActionTypeList](#actiontypelist)
  * nextToken [NextToken](#nexttoken)

### ListPipelineExecutionsInput
* ListPipelineExecutionsInput `object`: Represents the input of a ListPipelineExecutions action.
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * pipelineName **required** [PipelineName](#pipelinename)

### ListPipelineExecutionsOutput
* ListPipelineExecutionsOutput `object`: Represents the output of a ListPipelineExecutions action.
  * nextToken [NextToken](#nexttoken)
  * pipelineExecutionSummaries [PipelineExecutionSummaryList](#pipelineexecutionsummarylist)

### ListPipelinesInput
* ListPipelinesInput `object`: Represents the input of a ListPipelines action.
  * nextToken [NextToken](#nexttoken)

### ListPipelinesOutput
* ListPipelinesOutput `object`: Represents the output of a ListPipelines action.
  * nextToken [NextToken](#nexttoken)
  * pipelines [PipelineList](#pipelinelist)

### MaxBatchSize
* MaxBatchSize `integer`

### MaxResults
* MaxResults `integer`

### MaximumArtifactCount
* MaximumArtifactCount `integer`

### Message
* Message `string`

### MinimumArtifactCount
* MinimumArtifactCount `integer`

### NextToken
* NextToken `string`

### Nonce
* Nonce `string`

### NotLatestPipelineExecutionException
* NotLatestPipelineExecutionException `object`: The stage has failed in a later run of the pipeline and the pipelineExecutionId associated with the request is out of date.

### OutputArtifact
* OutputArtifact `object`: Represents information about the output of an action.
  * name **required** [ArtifactName](#artifactname)

### OutputArtifactList
* OutputArtifactList `array`
  * items [OutputArtifact](#outputartifact)

### Percentage
* Percentage `integer`

### PipelineArn
* PipelineArn `string`

### PipelineContext
* PipelineContext `object`: Represents information about a pipeline to a job worker.
  * action [ActionContext](#actioncontext)
  * pipelineName [PipelineName](#pipelinename)
  * stage [StageContext](#stagecontext)

### PipelineDeclaration
* PipelineDeclaration `object`: Represents the structure of actions and stages to be performed in the pipeline.
  * artifactStore **required** [ArtifactStore](#artifactstore)
  * name **required** [PipelineName](#pipelinename)
  * roleArn **required** [RoleArn](#rolearn)
  * stages **required** [PipelineStageDeclarationList](#pipelinestagedeclarationlist)
  * version [PipelineVersion](#pipelineversion)

### PipelineExecution
* PipelineExecution `object`: Represents information about an execution of a pipeline.
  * artifactRevisions [ArtifactRevisionList](#artifactrevisionlist)
  * pipelineExecutionId [PipelineExecutionId](#pipelineexecutionid)
  * pipelineName [PipelineName](#pipelinename)
  * pipelineVersion [PipelineVersion](#pipelineversion)
  * status [PipelineExecutionStatus](#pipelineexecutionstatus)

### PipelineExecutionId
* PipelineExecutionId `string`

### PipelineExecutionNotFoundException
* PipelineExecutionNotFoundException `object`: The pipeline execution was specified in an invalid format or cannot be found, or an execution ID does not belong to the specified pipeline. 

### PipelineExecutionStatus
* PipelineExecutionStatus `string` (values: InProgress, Succeeded, Superseded, Failed)

### PipelineExecutionSummary
* PipelineExecutionSummary `object`: Summary information about a pipeline execution.
  * lastUpdateTime [Timestamp](#timestamp)
  * pipelineExecutionId [PipelineExecutionId](#pipelineexecutionid)
  * startTime [Timestamp](#timestamp)
  * status [PipelineExecutionStatus](#pipelineexecutionstatus)

### PipelineExecutionSummaryList
* PipelineExecutionSummaryList `array`
  * items [PipelineExecutionSummary](#pipelineexecutionsummary)

### PipelineList
* PipelineList `array`
  * items [PipelineSummary](#pipelinesummary)

### PipelineMetadata
* PipelineMetadata `object`: Information about a pipeline.
  * created [Timestamp](#timestamp)
  * pipelineArn [PipelineArn](#pipelinearn)
  * updated [Timestamp](#timestamp)

### PipelineName
* PipelineName `string`

### PipelineNameInUseException
* PipelineNameInUseException `object`: The specified pipeline name is already in use.

### PipelineNotFoundException
* PipelineNotFoundException `object`: The specified pipeline was specified in an invalid format or cannot be found.

### PipelineStageDeclarationList
* PipelineStageDeclarationList `array`
  * items [StageDeclaration](#stagedeclaration)

### PipelineSummary
* PipelineSummary `object`: Returns a summary of a pipeline.
  * created [Timestamp](#timestamp)
  * name [PipelineName](#pipelinename)
  * updated [Timestamp](#timestamp)
  * version [PipelineVersion](#pipelineversion)

### PipelineVersion
* PipelineVersion `integer`

### PipelineVersionNotFoundException
* PipelineVersionNotFoundException `object`: The specified pipeline version was specified in an invalid format or cannot be found.

### PollForJobsInput
* PollForJobsInput `object`: Represents the input of a PollForJobs action.
  * actionTypeId **required** [ActionTypeId](#actiontypeid)
  * maxBatchSize [MaxBatchSize](#maxbatchsize)
  * queryParam [QueryParamMap](#queryparammap)

### PollForJobsOutput
* PollForJobsOutput `object`: Represents the output of a PollForJobs action.
  * jobs [JobList](#joblist)

### PollForThirdPartyJobsInput
* PollForThirdPartyJobsInput `object`: Represents the input of a PollForThirdPartyJobs action.
  * actionTypeId **required** [ActionTypeId](#actiontypeid)
  * maxBatchSize [MaxBatchSize](#maxbatchsize)

### PollForThirdPartyJobsOutput
* PollForThirdPartyJobsOutput `object`: Represents the output of a PollForThirdPartyJobs action.
  * jobs [ThirdPartyJobList](#thirdpartyjoblist)

### PutActionRevisionInput
* PutActionRevisionInput `object`: Represents the input of a PutActionRevision action.
  * actionName **required** [ActionName](#actionname)
  * actionRevision **required** [ActionRevision](#actionrevision)
  * pipelineName **required** [PipelineName](#pipelinename)
  * stageName **required** [StageName](#stagename)

### PutActionRevisionOutput
* PutActionRevisionOutput `object`: Represents the output of a PutActionRevision action.
  * newRevision [Boolean](#boolean)
  * pipelineExecutionId [PipelineExecutionId](#pipelineexecutionid)

### PutApprovalResultInput
* PutApprovalResultInput `object`: Represents the input of a PutApprovalResult action.
  * actionName **required** [ActionName](#actionname)
  * pipelineName **required** [PipelineName](#pipelinename)
  * result **required** [ApprovalResult](#approvalresult)
  * stageName **required** [StageName](#stagename)
  * token **required** [ApprovalToken](#approvaltoken)

### PutApprovalResultOutput
* PutApprovalResultOutput `object`: Represents the output of a PutApprovalResult action.
  * approvedAt [Timestamp](#timestamp)

### PutJobFailureResultInput
* PutJobFailureResultInput `object`: Represents the input of a PutJobFailureResult action.
  * failureDetails **required** [FailureDetails](#failuredetails)
  * jobId **required** [JobId](#jobid)

### PutJobSuccessResultInput
* PutJobSuccessResultInput `object`: Represents the input of a PutJobSuccessResult action.
  * continuationToken [ContinuationToken](#continuationtoken)
  * currentRevision [CurrentRevision](#currentrevision)
  * executionDetails [ExecutionDetails](#executiondetails)
  * jobId **required** [JobId](#jobid)

### PutThirdPartyJobFailureResultInput
* PutThirdPartyJobFailureResultInput `object`: Represents the input of a PutThirdPartyJobFailureResult action.
  * clientToken **required** [ClientToken](#clienttoken)
  * failureDetails **required** [FailureDetails](#failuredetails)
  * jobId **required** [ThirdPartyJobId](#thirdpartyjobid)

### PutThirdPartyJobSuccessResultInput
* PutThirdPartyJobSuccessResultInput `object`: Represents the input of a PutThirdPartyJobSuccessResult action.
  * clientToken **required** [ClientToken](#clienttoken)
  * continuationToken [ContinuationToken](#continuationtoken)
  * currentRevision [CurrentRevision](#currentrevision)
  * executionDetails [ExecutionDetails](#executiondetails)
  * jobId **required** [ThirdPartyJobId](#thirdpartyjobid)

### QueryParamMap
* QueryParamMap `array`
  * items `object`
    * key [ActionConfigurationKey](#actionconfigurationkey)
    * value [ActionConfigurationQueryableValue](#actionconfigurationqueryablevalue)

### RetryStageExecutionInput
* RetryStageExecutionInput `object`: Represents the input of a RetryStageExecution action.
  * pipelineExecutionId **required** [PipelineExecutionId](#pipelineexecutionid)
  * pipelineName **required** [PipelineName](#pipelinename)
  * retryMode **required** [StageRetryMode](#stageretrymode)
  * stageName **required** [StageName](#stagename)

### RetryStageExecutionOutput
* RetryStageExecutionOutput `object`: Represents the output of a RetryStageExecution action.
  * pipelineExecutionId [PipelineExecutionId](#pipelineexecutionid)

### Revision
* Revision `string`

### RevisionChangeIdentifier
* RevisionChangeIdentifier `string`

### RevisionSummary
* RevisionSummary `string`

### RoleArn
* RoleArn `string`

### S3ArtifactLocation
* S3ArtifactLocation `object`: The location of the Amazon S3 bucket that contains a revision.
  * bucketName **required** [S3BucketName](#s3bucketname)
  * objectKey **required** [S3ObjectKey](#s3objectkey)

### S3BucketName
* S3BucketName `string`

### S3ObjectKey
* S3ObjectKey `string`

### SecretAccessKey
* SecretAccessKey `string`

### SessionToken
* SessionToken `string`

### StageActionDeclarationList
* StageActionDeclarationList `array`
  * items [ActionDeclaration](#actiondeclaration)

### StageBlockerDeclarationList
* StageBlockerDeclarationList `array`
  * items [BlockerDeclaration](#blockerdeclaration)

### StageContext
* StageContext `object`: Represents information about a stage to a job worker.
  * name [StageName](#stagename)

### StageDeclaration
* StageDeclaration `object`: Represents information about a stage and its definition.
  * actions **required** [StageActionDeclarationList](#stageactiondeclarationlist)
  * blockers [StageBlockerDeclarationList](#stageblockerdeclarationlist)
  * name **required** [StageName](#stagename)

### StageExecution
* StageExecution `object`: Represents information about the run of a stage.
  * pipelineExecutionId **required** [PipelineExecutionId](#pipelineexecutionid)
  * status **required** [StageExecutionStatus](#stageexecutionstatus)

### StageExecutionStatus
* StageExecutionStatus `string` (values: InProgress, Failed, Succeeded)

### StageName
* StageName `string`

### StageNotFoundException
* StageNotFoundException `object`: The specified stage was specified in an invalid format or cannot be found.

### StageNotRetryableException
* StageNotRetryableException `object`: The specified stage can't be retried because the pipeline structure or stage state changed after the stage was not completed; the stage contains no failed actions; one or more actions are still in progress; or another retry attempt is already in progress. 

### StageRetryMode
* StageRetryMode `string` (values: FAILED_ACTIONS)

### StageState
* StageState `object`: Represents information about the state of the stage.
  * actionStates [ActionStateList](#actionstatelist)
  * inboundTransitionState [TransitionState](#transitionstate)
  * latestExecution [StageExecution](#stageexecution)
  * stageName [StageName](#stagename)

### StageStateList
* StageStateList `array`
  * items [StageState](#stagestate)

### StageTransitionType
* StageTransitionType `string` (values: Inbound, Outbound)

### StartPipelineExecutionInput
* StartPipelineExecutionInput `object`: Represents the input of a StartPipelineExecution action.
  * name **required** [PipelineName](#pipelinename)

### StartPipelineExecutionOutput
* StartPipelineExecutionOutput `object`: Represents the output of a StartPipelineExecution action.
  * pipelineExecutionId [PipelineExecutionId](#pipelineexecutionid)

### ThirdPartyJob
* ThirdPartyJob `object`: A response to a PollForThirdPartyJobs request returned by AWS CodePipeline when there is a job to be worked upon by a partner action.
  * clientId [ClientId](#clientid)
  * jobId [JobId](#jobid)

### ThirdPartyJobData
* ThirdPartyJobData `object`: Represents information about the job data for a partner action.
  * actionConfiguration [ActionConfiguration](#actionconfiguration)
  * actionTypeId [ActionTypeId](#actiontypeid)
  * artifactCredentials [AWSSessionCredentials](#awssessioncredentials)
  * continuationToken [ContinuationToken](#continuationtoken)
  * encryptionKey [EncryptionKey](#encryptionkey)
  * inputArtifacts [ArtifactList](#artifactlist)
  * outputArtifacts [ArtifactList](#artifactlist)
  * pipelineContext [PipelineContext](#pipelinecontext)

### ThirdPartyJobDetails
* ThirdPartyJobDetails `object`: The details of a job sent in response to a GetThirdPartyJobDetails request.
  * data [ThirdPartyJobData](#thirdpartyjobdata)
  * id [ThirdPartyJobId](#thirdpartyjobid)
  * nonce [Nonce](#nonce)

### ThirdPartyJobId
* ThirdPartyJobId `string`

### ThirdPartyJobList
* ThirdPartyJobList `array`
  * items [ThirdPartyJob](#thirdpartyjob)

### Time
* Time `string`

### Timestamp
* Timestamp `string`

### TransitionState
* TransitionState `object`: Represents information about the state of transitions between one stage and another stage.
  * disabledReason [DisabledReason](#disabledreason)
  * enabled [Enabled](#enabled)
  * lastChangedAt [LastChangedAt](#lastchangedat)
  * lastChangedBy [LastChangedBy](#lastchangedby)

### UpdatePipelineInput
* UpdatePipelineInput `object`: Represents the input of an UpdatePipeline action.
  * pipeline **required** [PipelineDeclaration](#pipelinedeclaration)

### UpdatePipelineOutput
* UpdatePipelineOutput `object`: Represents the output of an UpdatePipeline action.
  * pipeline [PipelineDeclaration](#pipelinedeclaration)

### Url
* Url `string`

### UrlTemplate
* UrlTemplate `string`

### ValidationException
* ValidationException `object`: The validation was specified in an invalid format.

### Version
* Version `string`


