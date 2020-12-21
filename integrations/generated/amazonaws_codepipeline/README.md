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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS CodePipeline</fullname> <p> <b>Overview</b> </p> <p>This is the AWS CodePipeline API Reference. This guide provides descriptions of the actions and data types for AWS CodePipeline. Some functionality for your pipeline can only be configured through the API. For more information, see the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html">AWS CodePipeline User Guide</a>.</p> <p>You can use the AWS CodePipeline API to work with pipelines, stages, actions, and transitions.</p> <p> <i>Pipelines</i> are models of automated release processes. Each pipeline is uniquely named, and consists of stages, actions, and transitions. </p> <p>You can work with pipelines by calling:</p> <ul> <li> <p> <a>CreatePipeline</a>, which creates a uniquely named pipeline.</p> </li> <li> <p> <a>DeletePipeline</a>, which deletes the specified pipeline.</p> </li> <li> <p> <a>GetPipeline</a>, which returns information about the pipeline structure and pipeline metadata, including the pipeline Amazon Resource Name (ARN).</p> </li> <li> <p> <a>GetPipelineExecution</a>, which returns information about a specific execution of a pipeline.</p> </li> <li> <p> <a>GetPipelineState</a>, which returns information about the current state of the stages and actions of a pipeline.</p> </li> <li> <p> <a>ListActionExecutions</a>, which returns action-level details for past executions. The details include full stage and action-level details, including individual action duration, status, any errors that occurred during the execution, and input and output artifact location details.</p> </li> <li> <p> <a>ListPipelines</a>, which gets a summary of all of the pipelines associated with your account.</p> </li> <li> <p> <a>ListPipelineExecutions</a>, which gets a summary of the most recent executions for a pipeline.</p> </li> <li> <p> <a>StartPipelineExecution</a>, which runs the most recent revision of an artifact through the pipeline.</p> </li> <li> <p> <a>StopPipelineExecution</a>, which stops the specified pipeline execution from continuing through the pipeline.</p> </li> <li> <p> <a>UpdatePipeline</a>, which updates a pipeline with edits or changes to the structure of the pipeline.</p> </li> </ul> <p>Pipelines include <i>stages</i>. Each stage contains one or more actions that must complete before the next stage begins. A stage results in success or failure. If a stage fails, the pipeline stops at that stage and remains stopped until either a new version of an artifact appears in the source location, or a user takes action to rerun the most recent artifact through the pipeline. You can call <a>GetPipelineState</a>, which displays the status of a pipeline, including the status of stages in the pipeline, or <a>GetPipeline</a>, which returns the entire structure of the pipeline, including the stages of that pipeline. For more information about the structure of stages and actions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-structure.html">AWS CodePipeline Pipeline Structure Reference</a>.</p> <p>Pipeline stages include <i>actions</i> that are categorized into categories such as source or build actions performed in a stage of a pipeline. For example, you can use a source action to import artifacts into a pipeline from a source such as Amazon S3. Like stages, you do not work with actions directly in most cases, but you do define and interact with actions when working with pipeline operations such as <a>CreatePipeline</a> and <a>GetPipelineState</a>. Valid action categories are:</p> <ul> <li> <p>Source</p> </li> <li> <p>Build</p> </li> <li> <p>Test</p> </li> <li> <p>Deploy</p> </li> <li> <p>Approval</p> </li> <li> <p>Invoke</p> </li> </ul> <p>Pipelines also include <i>transitions</i>, which allow the transition of artifacts from one stage to the next in a pipeline after the actions in one stage complete.</p> <p>You can work with transitions by calling:</p> <ul> <li> <p> <a>DisableStageTransition</a>, which prevents artifacts from transitioning to the next stage in a pipeline.</p> </li> <li> <p> <a>EnableStageTransition</a>, which enables transition of artifacts between stages in a pipeline. </p> </li> </ul> <p> <b>Using the API to integrate with AWS CodePipeline</b> </p> <p>For third-party integrators or developers who want to create their own integrations with AWS CodePipeline, the expected sequence varies from the standard API user. To integrate with AWS CodePipeline, developers need to work with the following items:</p> <p> <b>Jobs</b>, which are instances of an action. For example, a job for a source action might import a revision of an artifact from a source. </p> <p>You can work with jobs by calling:</p> <ul> <li> <p> <a>AcknowledgeJob</a>, which confirms whether a job worker has received the specified job.</p> </li> <li> <p> <a>GetJobDetails</a>, which returns the details of a job.</p> </li> <li> <p> <a>PollForJobs</a>, which determines whether there are any jobs to act on.</p> </li> <li> <p> <a>PutJobFailureResult</a>, which provides details of a job failure. </p> </li> <li> <p> <a>PutJobSuccessResult</a>, which provides details of a job success.</p> </li> </ul> <p> <b>Third party jobs</b>, which are instances of an action created by a partner action and integrated into AWS CodePipeline. Partner actions are created by members of the AWS Partner Network.</p> <p>You can work with third party jobs by calling:</p> <ul> <li> <p> <a>AcknowledgeThirdPartyJob</a>, which confirms whether a job worker has received the specified job.</p> </li> <li> <p> <a>GetThirdPartyJobDetails</a>, which requests the details of a job for a partner action.</p> </li> <li> <p> <a>PollForThirdPartyJobs</a>, which determines whether there are any jobs to act on. </p> </li> <li> <p> <a>PutThirdPartyJobFailureResult</a>, which provides details of a job failure.</p> </li> <li> <p> <a>PutThirdPartyJobSuccessResult</a>, which provides details of a job success.</p> </li> </ul>

## Actions

### AcknowledgeJob



```js
amazonaws_codepipeline.AcknowledgeJob({
  "jobId": null,
  "nonce": null
}, context)
```

#### Input
* input `object`
  * jobId **required**
  * nonce **required**

#### Output
* output [AcknowledgeJobOutput](#acknowledgejoboutput)

### AcknowledgeThirdPartyJob



```js
amazonaws_codepipeline.AcknowledgeThirdPartyJob({
  "jobId": null,
  "nonce": null,
  "clientToken": null
}, context)
```

#### Input
* input `object`
  * clientToken **required**
  * jobId **required**
  * nonce **required**

#### Output
* output [AcknowledgeThirdPartyJobOutput](#acknowledgethirdpartyjoboutput)

### CreateCustomActionType



```js
amazonaws_codepipeline.CreateCustomActionType({
  "category": null,
  "provider": null,
  "version": null,
  "inputArtifactDetails": null,
  "outputArtifactDetails": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * category **required**
  * configurationProperties
    * items [ActionConfigurationProperty](#actionconfigurationproperty)
  * inputArtifactDetails **required**
    * maximumCount **required**
    * minimumCount **required**
  * outputArtifactDetails **required**
    * maximumCount **required**
    * minimumCount **required**
  * provider **required**
  * settings
    * entityUrlTemplate
    * executionUrlTemplate
    * revisionUrlTemplate
    * thirdPartyConfigurationUrl
  * version **required**

#### Output
* output [CreateCustomActionTypeOutput](#createcustomactiontypeoutput)

### CreatePipeline



```js
amazonaws_codepipeline.CreatePipeline({
  "pipeline": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * pipeline **required**
    * artifactStore
      * encryptionKey
        * id **required**
        * type **required**
      * location **required**
      * type **required**
    * artifactStores
    * name **required**
    * roleArn **required**
    * stages **required**
      * items [StageDeclaration](#stagedeclaration)
    * version

#### Output
* output [CreatePipelineOutput](#createpipelineoutput)

### DeleteCustomActionType



```js
amazonaws_codepipeline.DeleteCustomActionType({
  "category": null,
  "provider": null,
  "version": null
}, context)
```

#### Input
* input `object`
  * category **required**
  * provider **required**
  * version **required**

#### Output
*Output schema unknown*

### DeletePipeline



```js
amazonaws_codepipeline.DeletePipeline({
  "name": null
}, context)
```

#### Input
* input `object`
  * name **required**

#### Output
*Output schema unknown*

### DeleteWebhook



```js
amazonaws_codepipeline.DeleteWebhook({
  "name": null
}, context)
```

#### Input
* input `object`
  * name **required**

#### Output
* output [DeleteWebhookOutput](#deletewebhookoutput)

### DeregisterWebhookWithThirdParty



```js
amazonaws_codepipeline.DeregisterWebhookWithThirdParty({}, context)
```

#### Input
* input `object`
  * webhookName

#### Output
* output [DeregisterWebhookWithThirdPartyOutput](#deregisterwebhookwiththirdpartyoutput)

### DisableStageTransition



```js
amazonaws_codepipeline.DisableStageTransition({
  "pipelineName": null,
  "stageName": null,
  "transitionType": null,
  "reason": null
}, context)
```

#### Input
* input `object`
  * pipelineName **required**
  * reason **required**
  * stageName **required**
  * transitionType **required**

#### Output
*Output schema unknown*

### EnableStageTransition



```js
amazonaws_codepipeline.EnableStageTransition({
  "pipelineName": null,
  "stageName": null,
  "transitionType": null
}, context)
```

#### Input
* input `object`
  * pipelineName **required**
  * stageName **required**
  * transitionType **required**

#### Output
*Output schema unknown*

### GetJobDetails



```js
amazonaws_codepipeline.GetJobDetails({
  "jobId": null
}, context)
```

#### Input
* input `object`
  * jobId **required**

#### Output
* output [GetJobDetailsOutput](#getjobdetailsoutput)

### GetPipeline



```js
amazonaws_codepipeline.GetPipeline({
  "name": null
}, context)
```

#### Input
* input `object`
  * name **required**
  * version

#### Output
* output [GetPipelineOutput](#getpipelineoutput)

### GetPipelineExecution



```js
amazonaws_codepipeline.GetPipelineExecution({
  "pipelineName": null,
  "pipelineExecutionId": null
}, context)
```

#### Input
* input `object`
  * pipelineExecutionId **required**
  * pipelineName **required**

#### Output
* output [GetPipelineExecutionOutput](#getpipelineexecutionoutput)

### GetPipelineState



```js
amazonaws_codepipeline.GetPipelineState({
  "name": null
}, context)
```

#### Input
* input `object`
  * name **required**

#### Output
* output [GetPipelineStateOutput](#getpipelinestateoutput)

### GetThirdPartyJobDetails



```js
amazonaws_codepipeline.GetThirdPartyJobDetails({
  "jobId": null,
  "clientToken": null
}, context)
```

#### Input
* input `object`
  * clientToken **required**
  * jobId **required**

#### Output
* output [GetThirdPartyJobDetailsOutput](#getthirdpartyjobdetailsoutput)

### ListActionExecutions



```js
amazonaws_codepipeline.ListActionExecutions({
  "pipelineName": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter
    * pipelineExecutionId
  * maxResults
  * nextToken
  * pipelineName **required**

#### Output
* output [ListActionExecutionsOutput](#listactionexecutionsoutput)

### ListActionTypes



```js
amazonaws_codepipeline.ListActionTypes({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * actionOwnerFilter
  * nextToken

#### Output
* output [ListActionTypesOutput](#listactiontypesoutput)

### ListPipelineExecutions



```js
amazonaws_codepipeline.ListPipelineExecutions({
  "pipelineName": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * pipelineName **required**

#### Output
* output [ListPipelineExecutionsOutput](#listpipelineexecutionsoutput)

### ListPipelines



```js
amazonaws_codepipeline.ListPipelines({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken

#### Output
* output [ListPipelinesOutput](#listpipelinesoutput)

### ListTagsForResource



```js
amazonaws_codepipeline.ListTagsForResource({
  "resourceArn": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * resourceArn **required**

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### ListWebhooks



```js
amazonaws_codepipeline.ListWebhooks({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListWebhooksOutput](#listwebhooksoutput)

### PollForJobs



```js
amazonaws_codepipeline.PollForJobs({
  "actionTypeId": null
}, context)
```

#### Input
* input `object`
  * actionTypeId **required**
    * category **required**
    * owner **required**
    * provider **required**
    * version **required**
  * maxBatchSize
  * queryParam

#### Output
* output [PollForJobsOutput](#pollforjobsoutput)

### PollForThirdPartyJobs



```js
amazonaws_codepipeline.PollForThirdPartyJobs({
  "actionTypeId": null
}, context)
```

#### Input
* input `object`
  * actionTypeId **required**
    * category **required**
    * owner **required**
    * provider **required**
    * version **required**
  * maxBatchSize

#### Output
* output [PollForThirdPartyJobsOutput](#pollforthirdpartyjobsoutput)

### PutActionRevision



```js
amazonaws_codepipeline.PutActionRevision({
  "pipelineName": null,
  "stageName": null,
  "actionName": null,
  "actionRevision": null
}, context)
```

#### Input
* input `object`
  * actionName **required**
  * actionRevision **required**
    * created **required**
    * revisionChangeId **required**
    * revisionId **required**
  * pipelineName **required**
  * stageName **required**

#### Output
* output [PutActionRevisionOutput](#putactionrevisionoutput)

### PutApprovalResult



```js
amazonaws_codepipeline.PutApprovalResult({
  "pipelineName": null,
  "stageName": null,
  "actionName": null,
  "result": null,
  "token": null
}, context)
```

#### Input
* input `object`
  * actionName **required**
  * pipelineName **required**
  * result **required**
    * status **required**
    * summary **required**
  * stageName **required**
  * token **required**

#### Output
* output [PutApprovalResultOutput](#putapprovalresultoutput)

### PutJobFailureResult



```js
amazonaws_codepipeline.PutJobFailureResult({
  "jobId": null,
  "failureDetails": null
}, context)
```

#### Input
* input `object`
  * failureDetails **required**
    * externalExecutionId
    * message **required**
    * type **required**
  * jobId **required**

#### Output
*Output schema unknown*

### PutJobSuccessResult



```js
amazonaws_codepipeline.PutJobSuccessResult({
  "jobId": null
}, context)
```

#### Input
* input `object`
  * continuationToken
  * currentRevision
    * changeIdentifier **required**
    * created
    * revision **required**
    * revisionSummary
  * executionDetails
    * externalExecutionId
    * percentComplete
    * summary
  * jobId **required**
  * outputVariables

#### Output
*Output schema unknown*

### PutThirdPartyJobFailureResult



```js
amazonaws_codepipeline.PutThirdPartyJobFailureResult({
  "jobId": null,
  "clientToken": null,
  "failureDetails": null
}, context)
```

#### Input
* input `object`
  * clientToken **required**
  * failureDetails **required**
    * externalExecutionId
    * message **required**
    * type **required**
  * jobId **required**

#### Output
*Output schema unknown*

### PutThirdPartyJobSuccessResult



```js
amazonaws_codepipeline.PutThirdPartyJobSuccessResult({
  "jobId": null,
  "clientToken": null
}, context)
```

#### Input
* input `object`
  * clientToken **required**
  * continuationToken
  * currentRevision
    * changeIdentifier **required**
    * created
    * revision **required**
    * revisionSummary
  * executionDetails
    * externalExecutionId
    * percentComplete
    * summary
  * jobId **required**

#### Output
*Output schema unknown*

### PutWebhook



```js
amazonaws_codepipeline.PutWebhook({
  "webhook": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * webhook **required**
    * authentication **required**
    * authenticationConfiguration **required**
      * AllowedIPRange
      * SecretToken
    * filters **required**
      * items [WebhookFilterRule](#webhookfilterrule)
    * name **required**
    * targetAction **required**
    * targetPipeline **required**

#### Output
* output [PutWebhookOutput](#putwebhookoutput)

### RegisterWebhookWithThirdParty



```js
amazonaws_codepipeline.RegisterWebhookWithThirdParty({}, context)
```

#### Input
* input `object`
  * webhookName

#### Output
* output [RegisterWebhookWithThirdPartyOutput](#registerwebhookwiththirdpartyoutput)

### RetryStageExecution



```js
amazonaws_codepipeline.RetryStageExecution({
  "pipelineName": null,
  "stageName": null,
  "pipelineExecutionId": null,
  "retryMode": null
}, context)
```

#### Input
* input `object`
  * pipelineExecutionId **required**
  * pipelineName **required**
  * retryMode **required**
  * stageName **required**

#### Output
* output [RetryStageExecutionOutput](#retrystageexecutionoutput)

### StartPipelineExecution



```js
amazonaws_codepipeline.StartPipelineExecution({
  "name": null
}, context)
```

#### Input
* input `object`
  * clientRequestToken
  * name **required**

#### Output
* output [StartPipelineExecutionOutput](#startpipelineexecutionoutput)

### StopPipelineExecution



```js
amazonaws_codepipeline.StopPipelineExecution({
  "pipelineName": null,
  "pipelineExecutionId": null
}, context)
```

#### Input
* input `object`
  * abandon
  * pipelineExecutionId **required**
  * pipelineName **required**
  * reason

#### Output
* output [StopPipelineExecutionOutput](#stoppipelineexecutionoutput)

### TagResource



```js
amazonaws_codepipeline.TagResource({
  "resourceArn": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

#### Output
* output [TagResourceOutput](#tagresourceoutput)

### UntagResource



```js
amazonaws_codepipeline.UntagResource({
  "resourceArn": null,
  "tagKeys": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceOutput](#untagresourceoutput)

### UpdatePipeline



```js
amazonaws_codepipeline.UpdatePipeline({
  "pipeline": null
}, context)
```

#### Input
* input `object`
  * pipeline **required**
    * artifactStore
      * encryptionKey
        * id **required**
        * type **required**
      * location **required**
      * type **required**
    * artifactStores
    * name **required**
    * roleArn **required**
    * stages **required**
      * items [StageDeclaration](#stagedeclaration)
    * version

#### Output
* output [UpdatePipelineOutput](#updatepipelineoutput)



## Definitions

### AWSRegionName
* AWSRegionName `string`

### AWSSessionCredentials
* AWSSessionCredentials `object`: Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in AWS CodePipeline.
  * accessKeyId **required**
  * secretAccessKey **required**
  * sessionToken **required**

### AccessKeyId
* AccessKeyId `string`

### AccountId
* AccountId `string`

### AcknowledgeJobInput
* AcknowledgeJobInput `object`: Represents the input of an AcknowledgeJob action.
  * jobId **required**
  * nonce **required**

### AcknowledgeJobOutput
* AcknowledgeJobOutput `object`: Represents the output of an AcknowledgeJob action.
  * status

### AcknowledgeThirdPartyJobInput
* AcknowledgeThirdPartyJobInput `object`: Represents the input of an AcknowledgeThirdPartyJob action.
  * clientToken **required**
  * jobId **required**
  * nonce **required**

### AcknowledgeThirdPartyJobOutput
* AcknowledgeThirdPartyJobOutput `object`: Represents the output of an AcknowledgeThirdPartyJob action.
  * status

### ActionCategory
* ActionCategory `string` (values: Source, Build, Deploy, Test, Invoke, Approval)

### ActionConfiguration
* ActionConfiguration `object`: Represents information about an action configuration.
  * configuration

### ActionConfigurationKey
* ActionConfigurationKey `string`

### ActionConfigurationMap
* ActionConfigurationMap `object`

### ActionConfigurationProperty
* ActionConfigurationProperty `object`: Represents information about an action configuration property.
  * description
  * key **required**
  * name **required**
  * queryable
  * required **required**
  * secret **required**
  * type

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
* ActionContext `object`: Represents the context of an action in the stage of a pipeline to a job worker.
  * actionExecutionId
  * name

### ActionDeclaration
* ActionDeclaration `object`: Represents information about an action declaration.
  * actionTypeId **required**
    * category **required**
    * owner **required**
    * provider **required**
    * version **required**
  * configuration
  * inputArtifacts
    * items [InputArtifact](#inputartifact)
  * name **required**
  * namespace
  * outputArtifacts
    * items [OutputArtifact](#outputartifact)
  * region
  * roleArn
  * runOrder

### ActionExecution
* ActionExecution `object`: Represents information about the run of an action.
  * actionExecutionId
  * errorDetails
    * code
    * message
  * externalExecutionId
  * externalExecutionUrl
  * lastStatusChange
  * lastUpdatedBy
  * percentComplete
  * status
  * summary
  * token

### ActionExecutionDetail
* ActionExecutionDetail `object`: Returns information about an execution of an action, including the action execution ID, and the name, version, and timing of the action. 
  * actionExecutionId
  * actionName
  * input
    * actionTypeId [ActionTypeId](#actiontypeid)
    * configuration
    * inputArtifacts
      * items [ArtifactDetail](#artifactdetail)
    * namespace
    * region
    * resolvedConfiguration
    * roleArn
  * lastUpdateTime
  * output
    * executionResult
      * externalExecutionId
      * externalExecutionSummary
      * externalExecutionUrl
    * outputArtifacts
      * items [ArtifactDetail](#artifactdetail)
    * outputVariables
  * pipelineExecutionId
  * pipelineVersion
  * stageName
  * startTime
  * status

### ActionExecutionDetailList
* ActionExecutionDetailList `array`
  * items [ActionExecutionDetail](#actionexecutiondetail)

### ActionExecutionFilter
* ActionExecutionFilter `object`: Filter values for the action execution.
  * pipelineExecutionId

### ActionExecutionId
* ActionExecutionId `string`

### ActionExecutionInput
* ActionExecutionInput `object`: Input information used for an action execution.
  * actionTypeId [ActionTypeId](#actiontypeid)
  * configuration
  * inputArtifacts
    * items [ArtifactDetail](#artifactdetail)
  * namespace
  * region
  * resolvedConfiguration
  * roleArn

### ActionExecutionOutput
* ActionExecutionOutput `object`: Output details listed for an action execution, such as the action execution result.
  * executionResult
    * externalExecutionId
    * externalExecutionSummary
    * externalExecutionUrl
  * outputArtifacts
    * items [ArtifactDetail](#artifactdetail)
  * outputVariables

### ActionExecutionResult
* ActionExecutionResult `object`: Execution result information, such as the external execution ID.
  * externalExecutionId
  * externalExecutionSummary
  * externalExecutionUrl

### ActionExecutionStatus
* ActionExecutionStatus `string` (values: InProgress, Abandoned, Succeeded, Failed)

### ActionExecutionToken
* ActionExecutionToken `string`

### ActionName
* ActionName `string`

### ActionNamespace
* ActionNamespace `string`

### ActionNotFoundException


### ActionOwner
* ActionOwner `string` (values: AWS, ThirdParty, Custom)

### ActionProvider
* ActionProvider `string`

### ActionRevision
* ActionRevision `object`: Represents information about the version (or revision) of an action.
  * created **required**
  * revisionChangeId **required**
  * revisionId **required**

### ActionRunOrder
* ActionRunOrder `integer`

### ActionState
* ActionState `object`: Represents information about the state of an action.
  * actionName
  * currentRevision
    * created **required**
    * revisionChangeId **required**
    * revisionId **required**
  * entityUrl
  * latestExecution
    * actionExecutionId
    * errorDetails
      * code
      * message
    * externalExecutionId
    * externalExecutionUrl
    * lastStatusChange
    * lastUpdatedBy
    * percentComplete
    * status
    * summary
    * token
  * revisionUrl

### ActionStateList
* ActionStateList `array`
  * items [ActionState](#actionstate)

### ActionType
* ActionType `object`: Returns information about the details of an action type.
  * actionConfigurationProperties
    * items [ActionConfigurationProperty](#actionconfigurationproperty)
  * id **required**
    * category **required**
    * owner **required**
    * provider **required**
    * version **required**
  * inputArtifactDetails **required**
    * maximumCount **required**
    * minimumCount **required**
  * outputArtifactDetails **required**
    * maximumCount **required**
    * minimumCount **required**
  * settings
    * entityUrlTemplate
    * executionUrlTemplate
    * revisionUrlTemplate
    * thirdPartyConfigurationUrl

### ActionTypeId
* ActionTypeId `object`: Represents information about an action type.
  * category **required**
  * owner **required**
  * provider **required**
  * version **required**

### ActionTypeList
* ActionTypeList `array`
  * items [ActionType](#actiontype)

### ActionTypeNotFoundException


### ActionTypeSettings
* ActionTypeSettings `object`: Returns information about the settings for an action type.
  * entityUrlTemplate
  * executionUrlTemplate
  * revisionUrlTemplate
  * thirdPartyConfigurationUrl

### ApprovalAlreadyCompletedException


### ApprovalResult
* ApprovalResult `object`: Represents information about the result of an approval request.
  * status **required**
  * summary **required**

### ApprovalStatus
* ApprovalStatus `string` (values: Approved, Rejected)

### ApprovalSummary
* ApprovalSummary `string`

### ApprovalToken
* ApprovalToken `string`

### Artifact
* Artifact `object`: Represents information about an artifact that is worked on by actions in the pipeline.
  * location
    * s3Location
      * bucketName **required**
      * objectKey **required**
    * type
  * name
  * revision

### ArtifactDetail
* ArtifactDetail `object`: Artifact details for the action execution, such as the artifact location.
  * name
  * s3location
    * bucket
    * key

### ArtifactDetailList
* ArtifactDetailList `array`
  * items [ArtifactDetail](#artifactdetail)

### ArtifactDetails
* ArtifactDetails `object`: Returns information about the details of an artifact.
  * maximumCount **required**
  * minimumCount **required**

### ArtifactList
* ArtifactList `array`
  * items [Artifact](#artifact)

### ArtifactLocation
* ArtifactLocation `object`: Represents information about the location of an artifact.
  * s3Location
    * bucketName **required**
    * objectKey **required**
  * type

### ArtifactLocationType
* ArtifactLocationType `string` (values: S3)

### ArtifactName
* ArtifactName `string`

### ArtifactRevision
* ArtifactRevision `object`: Represents revision details of an artifact. 
  * created
  * name
  * revisionChangeIdentifier
  * revisionId
  * revisionSummary
  * revisionUrl

### ArtifactRevisionList
* ArtifactRevisionList `array`
  * items [ArtifactRevision](#artifactrevision)

### ArtifactStore
* ArtifactStore `object`: <p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>
  * encryptionKey
    * id **required**
    * type **required**
  * location **required**
  * type **required**

### ArtifactStoreLocation
* ArtifactStoreLocation `string`

### ArtifactStoreMap
* ArtifactStoreMap `object`

### ArtifactStoreType
* ArtifactStoreType `string` (values: S3)

### BlockerDeclaration
* BlockerDeclaration `object`: Reserved for future use.
  * name **required**
  * type **required**

### BlockerName
* BlockerName `string`

### BlockerType
* BlockerType `string` (values: Schedule)

### Boolean
* Boolean `boolean`

### ClientId
* ClientId `string`

### ClientRequestToken
* ClientRequestToken `string`

### ClientToken
* ClientToken `string`

### Code
* Code `string`

### ConcurrentModificationException


### ConflictException


### ContinuationToken
* ContinuationToken `string`

### CreateCustomActionTypeInput
* CreateCustomActionTypeInput `object`: Represents the input of a CreateCustomActionType operation.
  * tags
    * items [Tag](#tag)
  * category **required**
  * configurationProperties
    * items [ActionConfigurationProperty](#actionconfigurationproperty)
  * inputArtifactDetails **required**
    * maximumCount **required**
    * minimumCount **required**
  * outputArtifactDetails **required**
    * maximumCount **required**
    * minimumCount **required**
  * provider **required**
  * settings
    * entityUrlTemplate
    * executionUrlTemplate
    * revisionUrlTemplate
    * thirdPartyConfigurationUrl
  * version **required**

### CreateCustomActionTypeOutput
* CreateCustomActionTypeOutput `object`: Represents the output of a <code>CreateCustomActionType</code> operation.
  * tags
    * items [Tag](#tag)
  * actionType **required**
    * actionConfigurationProperties
      * items [ActionConfigurationProperty](#actionconfigurationproperty)
    * id **required**
      * category **required**
      * owner **required**
      * provider **required**
      * version **required**
    * inputArtifactDetails **required**
      * maximumCount **required**
      * minimumCount **required**
    * outputArtifactDetails **required**
      * maximumCount **required**
      * minimumCount **required**
    * settings
      * entityUrlTemplate
      * executionUrlTemplate
      * revisionUrlTemplate
      * thirdPartyConfigurationUrl

### CreatePipelineInput
* CreatePipelineInput `object`: Represents the input of a <code>CreatePipeline</code> action.
  * tags
    * items [Tag](#tag)
  * pipeline **required**
    * artifactStore
      * encryptionKey
        * id **required**
        * type **required**
      * location **required**
      * type **required**
    * artifactStores
    * name **required**
    * roleArn **required**
    * stages **required**
      * items [StageDeclaration](#stagedeclaration)
    * version

### CreatePipelineOutput
* CreatePipelineOutput `object`: Represents the output of a <code>CreatePipeline</code> action.
  * tags
    * items [Tag](#tag)
  * pipeline
    * artifactStore
      * encryptionKey
        * id **required**
        * type **required**
      * location **required**
      * type **required**
    * artifactStores
    * name **required**
    * roleArn **required**
    * stages **required**
      * items [StageDeclaration](#stagedeclaration)
    * version

### CurrentRevision
* CurrentRevision `object`: Represents information about a current revision.
  * changeIdentifier **required**
  * created
  * revision **required**
  * revisionSummary

### DeleteCustomActionTypeInput
* DeleteCustomActionTypeInput `object`: Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted.
  * category **required**
  * provider **required**
  * version **required**

### DeletePipelineInput
* DeletePipelineInput `object`: Represents the input of a <code>DeletePipeline</code> action.
  * name **required**

### DeleteWebhookInput
* DeleteWebhookInput `object`
  * name **required**

### DeleteWebhookOutput
* DeleteWebhookOutput `object`

### DeregisterWebhookWithThirdPartyInput
* DeregisterWebhookWithThirdPartyInput `object`
  * webhookName

### DeregisterWebhookWithThirdPartyOutput
* DeregisterWebhookWithThirdPartyOutput `object`

### Description
* Description `string`

### DisableStageTransitionInput
* DisableStageTransitionInput `object`: Represents the input of a <code>DisableStageTransition</code> action.
  * pipelineName **required**
  * reason **required**
  * stageName **required**
  * transitionType **required**

### DisabledReason
* DisabledReason `string`

### DuplicatedStopRequestException


### EnableStageTransitionInput
* EnableStageTransitionInput `object`: Represents the input of an <code>EnableStageTransition</code> action.
  * pipelineName **required**
  * stageName **required**
  * transitionType **required**

### Enabled
* Enabled `boolean`

### EncryptionKey
* EncryptionKey `object`: Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.
  * id **required**
  * type **required**

### EncryptionKeyId
* EncryptionKeyId `string`

### EncryptionKeyType
* EncryptionKeyType `string` (values: KMS)

### ErrorDetails
* ErrorDetails `object`: Represents information about an error in AWS CodePipeline.
  * code
  * message

### ExecutionDetails
* ExecutionDetails `object`: The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.
  * externalExecutionId
  * percentComplete
  * summary

### ExecutionId
* ExecutionId `string`

### ExecutionSummary
* ExecutionSummary `string`

### ExecutionTrigger
* ExecutionTrigger `object`: The interaction or event that started a pipeline execution.
  * triggerDetail
  * triggerType

### ExternalExecutionId
* ExternalExecutionId `string`

### ExternalExecutionSummary
* ExternalExecutionSummary `string`

### FailureDetails
* FailureDetails `object`: Represents information about failure details.
  * externalExecutionId
  * message **required**
  * type **required**

### FailureType
* FailureType `string` (values: JobFailed, ConfigurationError, PermissionError, RevisionOutOfSync, RevisionUnavailable, SystemUnavailable)

### GetJobDetailsInput
* GetJobDetailsInput `object`: Represents the input of a <code>GetJobDetails</code> action.
  * jobId **required**

### GetJobDetailsOutput
* GetJobDetailsOutput `object`: Represents the output of a <code>GetJobDetails</code> action.
  * jobDetails
    * accountId
    * data
      * actionConfiguration
        * configuration
      * actionTypeId
        * category **required**
        * owner **required**
        * provider **required**
        * version **required**
      * artifactCredentials
        * accessKeyId **required**
        * secretAccessKey **required**
        * sessionToken **required**
      * continuationToken
      * encryptionKey
        * id **required**
        * type **required**
      * inputArtifacts
        * items [Artifact](#artifact)
      * outputArtifacts
        * items [Artifact](#artifact)
      * pipelineContext
        * action
          * actionExecutionId
          * name
        * pipelineArn
        * pipelineExecutionId
        * pipelineName
        * stage
          * name
    * id

### GetPipelineExecutionInput
* GetPipelineExecutionInput `object`: Represents the input of a <code>GetPipelineExecution</code> action.
  * pipelineExecutionId **required**
  * pipelineName **required**

### GetPipelineExecutionOutput
* GetPipelineExecutionOutput `object`: Represents the output of a <code>GetPipelineExecution</code> action.
  * pipelineExecution
    * artifactRevisions
      * items [ArtifactRevision](#artifactrevision)
    * pipelineExecutionId
    * pipelineName
    * pipelineVersion
    * status

### GetPipelineInput
* GetPipelineInput `object`: Represents the input of a <code>GetPipeline</code> action.
  * name **required**
  * version

### GetPipelineOutput
* GetPipelineOutput `object`: Represents the output of a <code>GetPipeline</code> action.
  * metadata
    * created
    * pipelineArn
    * updated
  * pipeline
    * artifactStore
      * encryptionKey
        * id **required**
        * type **required**
      * location **required**
      * type **required**
    * artifactStores
    * name **required**
    * roleArn **required**
    * stages **required**
      * items [StageDeclaration](#stagedeclaration)
    * version

### GetPipelineStateInput
* GetPipelineStateInput `object`: Represents the input of a <code>GetPipelineState</code> action.
  * name **required**

### GetPipelineStateOutput
* GetPipelineStateOutput `object`: Represents the output of a <code>GetPipelineState</code> action.
  * created
  * pipelineName
  * pipelineVersion
  * stageStates
    * items [StageState](#stagestate)
  * updated

### GetThirdPartyJobDetailsInput
* GetThirdPartyJobDetailsInput `object`: Represents the input of a <code>GetThirdPartyJobDetails</code> action.
  * clientToken **required**
  * jobId **required**

### GetThirdPartyJobDetailsOutput
* GetThirdPartyJobDetailsOutput `object`: Represents the output of a <code>GetThirdPartyJobDetails</code> action.
  * jobDetails
    * data
      * actionConfiguration
        * configuration
      * actionTypeId
        * category **required**
        * owner **required**
        * provider **required**
        * version **required**
      * artifactCredentials
        * accessKeyId **required**
        * secretAccessKey **required**
        * sessionToken **required**
      * continuationToken
      * encryptionKey
        * id **required**
        * type **required**
      * inputArtifacts
        * items [Artifact](#artifact)
      * outputArtifacts
        * items [Artifact](#artifact)
      * pipelineContext
        * action
          * actionExecutionId
          * name
        * pipelineArn
        * pipelineExecutionId
        * pipelineName
        * stage
          * name
    * id
    * nonce

### InputArtifact
* InputArtifact `object`: Represents information about an artifact to be worked on, such as a test or build artifact.
  * name **required**

### InputArtifactList
* InputArtifactList `array`
  * items [InputArtifact](#inputartifact)

### InvalidActionDeclarationException


### InvalidApprovalTokenException


### InvalidArnException


### InvalidBlockerDeclarationException


### InvalidClientTokenException


### InvalidJobException


### InvalidJobStateException


### InvalidNextTokenException


### InvalidNonceException


### InvalidStageDeclarationException


### InvalidStructureException


### InvalidTagsException


### InvalidWebhookAuthenticationParametersException


### InvalidWebhookFilterPatternException


### Job
* Job `object`: Represents information about a job.
  * accountId
  * data
    * actionConfiguration
      * configuration
    * actionTypeId
      * category **required**
      * owner **required**
      * provider **required**
      * version **required**
    * artifactCredentials
      * accessKeyId **required**
      * secretAccessKey **required**
      * sessionToken **required**
    * continuationToken
    * encryptionKey
      * id **required**
      * type **required**
    * inputArtifacts
      * items [Artifact](#artifact)
    * outputArtifacts
      * items [Artifact](#artifact)
    * pipelineContext
      * action
        * actionExecutionId
        * name
      * pipelineArn
      * pipelineExecutionId
      * pipelineName
      * stage
        * name
  * id
  * nonce

### JobData
* JobData `object`: Represents other information about a job required for a job worker to complete the job.
  * actionConfiguration
    * configuration
  * actionTypeId
    * category **required**
    * owner **required**
    * provider **required**
    * version **required**
  * artifactCredentials
    * accessKeyId **required**
    * secretAccessKey **required**
    * sessionToken **required**
  * continuationToken
  * encryptionKey
    * id **required**
    * type **required**
  * inputArtifacts
    * items [Artifact](#artifact)
  * outputArtifacts
    * items [Artifact](#artifact)
  * pipelineContext
    * action
      * actionExecutionId
      * name
    * pipelineArn
    * pipelineExecutionId
    * pipelineName
    * stage
      * name

### JobDetails
* JobDetails `object`: Represents information about the details of a job.
  * accountId
  * data
    * actionConfiguration
      * configuration
    * actionTypeId
      * category **required**
      * owner **required**
      * provider **required**
      * version **required**
    * artifactCredentials
      * accessKeyId **required**
      * secretAccessKey **required**
      * sessionToken **required**
    * continuationToken
    * encryptionKey
      * id **required**
      * type **required**
    * inputArtifacts
      * items [Artifact](#artifact)
    * outputArtifacts
      * items [Artifact](#artifact)
    * pipelineContext
      * action
        * actionExecutionId
        * name
      * pipelineArn
      * pipelineExecutionId
      * pipelineName
      * stage
        * name
  * id

### JobId
* JobId `string`

### JobList
* JobList `array`
  * items [Job](#job)

### JobNotFoundException


### JobStatus
* JobStatus `string` (values: Created, Queued, Dispatched, InProgress, TimedOut, Succeeded, Failed)

### JsonPath
* JsonPath `string`

### LastChangedAt
* LastChangedAt `string`

### LastChangedBy
* LastChangedBy `string`

### LastUpdatedBy
* LastUpdatedBy `string`

### LimitExceededException


### ListActionExecutionsInput
* ListActionExecutionsInput `object`
  * filter
    * pipelineExecutionId
  * maxResults
  * nextToken
  * pipelineName **required**

### ListActionExecutionsOutput
* ListActionExecutionsOutput `object`
  * actionExecutionDetails
    * items [ActionExecutionDetail](#actionexecutiondetail)
  * nextToken

### ListActionTypesInput
* ListActionTypesInput `object`: Represents the input of a <code>ListActionTypes</code> action.
  * actionOwnerFilter
  * nextToken

### ListActionTypesOutput
* ListActionTypesOutput `object`: Represents the output of a <code>ListActionTypes</code> action.
  * actionTypes **required**
    * items [ActionType](#actiontype)
  * nextToken

### ListPipelineExecutionsInput
* ListPipelineExecutionsInput `object`: Represents the input of a <code>ListPipelineExecutions</code> action.
  * maxResults
  * nextToken
  * pipelineName **required**

### ListPipelineExecutionsOutput
* ListPipelineExecutionsOutput `object`: Represents the output of a <code>ListPipelineExecutions</code> action.
  * nextToken
  * pipelineExecutionSummaries
    * items [PipelineExecutionSummary](#pipelineexecutionsummary)

### ListPipelinesInput
* ListPipelinesInput `object`: Represents the input of a <code>ListPipelines</code> action.
  * nextToken

### ListPipelinesOutput
* ListPipelinesOutput `object`: Represents the output of a <code>ListPipelines</code> action.
  * nextToken
  * pipelines
    * items [PipelineSummary](#pipelinesummary)

### ListTagsForResourceInput
* ListTagsForResourceInput `object`
  * maxResults
  * nextToken
  * resourceArn **required**

### ListTagsForResourceOutput
* ListTagsForResourceOutput `object`
  * tags
    * items [Tag](#tag)
  * nextToken

### ListWebhookItem
* ListWebhookItem `object`: The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN.
  * tags
    * items [Tag](#tag)
  * arn
  * definition **required**
    * authentication **required**
    * authenticationConfiguration **required**
      * AllowedIPRange
      * SecretToken
    * filters **required**
      * items [WebhookFilterRule](#webhookfilterrule)
    * name **required**
    * targetAction **required**
    * targetPipeline **required**
  * errorCode
  * errorMessage
  * lastTriggered
  * url **required**

### ListWebhooksInput
* ListWebhooksInput `object`
  * MaxResults
  * NextToken

### ListWebhooksOutput
* ListWebhooksOutput `object`
  * NextToken
  * webhooks
    * items [ListWebhookItem](#listwebhookitem)

### MatchEquals
* MatchEquals `string`

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


### OutputArtifact
* OutputArtifact `object`: Represents information about the output of an action.
  * name **required**

### OutputArtifactList
* OutputArtifactList `array`
  * items [OutputArtifact](#outputartifact)

### OutputVariablesKey
* OutputVariablesKey `string`

### OutputVariablesMap
* OutputVariablesMap `object`

### OutputVariablesSizeExceededException


### OutputVariablesValue
* OutputVariablesValue `string`

### Percentage
* Percentage `integer`

### PipelineArn
* PipelineArn `string`

### PipelineContext
* PipelineContext `object`: <p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note>
  * action
    * actionExecutionId
    * name
  * pipelineArn
  * pipelineExecutionId
  * pipelineName
  * stage
    * name

### PipelineDeclaration
* PipelineDeclaration `object`: Represents the structure of actions and stages to be performed in the pipeline.
  * artifactStore
    * encryptionKey
      * id **required**
      * type **required**
    * location **required**
    * type **required**
  * artifactStores
  * name **required**
  * roleArn **required**
  * stages **required**
    * items [StageDeclaration](#stagedeclaration)
  * version

### PipelineExecution
* PipelineExecution `object`: Represents information about an execution of a pipeline.
  * artifactRevisions
    * items [ArtifactRevision](#artifactrevision)
  * pipelineExecutionId
  * pipelineName
  * pipelineVersion
  * status

### PipelineExecutionId
* PipelineExecutionId `string`

### PipelineExecutionNotFoundException


### PipelineExecutionNotStoppableException


### PipelineExecutionStatus
* PipelineExecutionStatus `string` (values: InProgress, Stopped, Stopping, Succeeded, Superseded, Failed)

### PipelineExecutionSummary
* PipelineExecutionSummary `object`: Summary information about a pipeline execution.
  * lastUpdateTime
  * pipelineExecutionId
  * sourceRevisions
    * items [SourceRevision](#sourcerevision)
  * startTime
  * status
  * stopTrigger
    * reason
  * trigger
    * triggerDetail
    * triggerType

### PipelineExecutionSummaryList
* PipelineExecutionSummaryList `array`
  * items [PipelineExecutionSummary](#pipelineexecutionsummary)

### PipelineList
* PipelineList `array`
  * items [PipelineSummary](#pipelinesummary)

### PipelineMetadata
* PipelineMetadata `object`: Information about a pipeline.
  * created
  * pipelineArn
  * updated

### PipelineName
* PipelineName `string`

### PipelineNameInUseException


### PipelineNotFoundException


### PipelineStageDeclarationList
* PipelineStageDeclarationList `array`
  * items [StageDeclaration](#stagedeclaration)

### PipelineSummary
* PipelineSummary `object`: Returns a summary of a pipeline.
  * created
  * name
  * updated
  * version

### PipelineVersion
* PipelineVersion `integer`

### PipelineVersionNotFoundException


### PollForJobsInput
* PollForJobsInput `object`: Represents the input of a <code>PollForJobs</code> action.
  * actionTypeId **required**
    * category **required**
    * owner **required**
    * provider **required**
    * version **required**
  * maxBatchSize
  * queryParam

### PollForJobsOutput
* PollForJobsOutput `object`: Represents the output of a <code>PollForJobs</code> action.
  * jobs
    * items [Job](#job)

### PollForThirdPartyJobsInput
* PollForThirdPartyJobsInput `object`: Represents the input of a <code>PollForThirdPartyJobs</code> action.
  * actionTypeId **required**
    * category **required**
    * owner **required**
    * provider **required**
    * version **required**
  * maxBatchSize

### PollForThirdPartyJobsOutput
* PollForThirdPartyJobsOutput `object`: Represents the output of a <code>PollForThirdPartyJobs</code> action.
  * jobs
    * items [ThirdPartyJob](#thirdpartyjob)

### PutActionRevisionInput
* PutActionRevisionInput `object`: Represents the input of a <code>PutActionRevision</code> action.
  * actionName **required**
  * actionRevision **required**
    * created **required**
    * revisionChangeId **required**
    * revisionId **required**
  * pipelineName **required**
  * stageName **required**

### PutActionRevisionOutput
* PutActionRevisionOutput `object`: Represents the output of a <code>PutActionRevision</code> action.
  * newRevision
  * pipelineExecutionId

### PutApprovalResultInput
* PutApprovalResultInput `object`: Represents the input of a <code>PutApprovalResult</code> action.
  * actionName **required**
  * pipelineName **required**
  * result **required**
    * status **required**
    * summary **required**
  * stageName **required**
  * token **required**

### PutApprovalResultOutput
* PutApprovalResultOutput `object`: Represents the output of a <code>PutApprovalResult</code> action.
  * approvedAt

### PutJobFailureResultInput
* PutJobFailureResultInput `object`: Represents the input of a <code>PutJobFailureResult</code> action.
  * failureDetails **required**
    * externalExecutionId
    * message **required**
    * type **required**
  * jobId **required**

### PutJobSuccessResultInput
* PutJobSuccessResultInput `object`: Represents the input of a <code>PutJobSuccessResult</code> action.
  * continuationToken
  * currentRevision
    * changeIdentifier **required**
    * created
    * revision **required**
    * revisionSummary
  * executionDetails
    * externalExecutionId
    * percentComplete
    * summary
  * jobId **required**
  * outputVariables

### PutThirdPartyJobFailureResultInput
* PutThirdPartyJobFailureResultInput `object`: Represents the input of a <code>PutThirdPartyJobFailureResult</code> action.
  * clientToken **required**
  * failureDetails **required**
    * externalExecutionId
    * message **required**
    * type **required**
  * jobId **required**

### PutThirdPartyJobSuccessResultInput
* PutThirdPartyJobSuccessResultInput `object`: Represents the input of a <code>PutThirdPartyJobSuccessResult</code> action.
  * clientToken **required**
  * continuationToken
  * currentRevision
    * changeIdentifier **required**
    * created
    * revision **required**
    * revisionSummary
  * executionDetails
    * externalExecutionId
    * percentComplete
    * summary
  * jobId **required**

### PutWebhookInput
* PutWebhookInput `object`
  * tags
    * items [Tag](#tag)
  * webhook **required**
    * authentication **required**
    * authenticationConfiguration **required**
      * AllowedIPRange
      * SecretToken
    * filters **required**
      * items [WebhookFilterRule](#webhookfilterrule)
    * name **required**
    * targetAction **required**
    * targetPipeline **required**

### PutWebhookOutput
* PutWebhookOutput `object`
  * webhook
    * tags
      * items [Tag](#tag)
    * arn
    * definition **required**
      * authentication **required**
      * authenticationConfiguration **required**
        * AllowedIPRange
        * SecretToken
      * filters **required**
        * items [WebhookFilterRule](#webhookfilterrule)
      * name **required**
      * targetAction **required**
      * targetPipeline **required**
    * errorCode
    * errorMessage
    * lastTriggered
    * url **required**

### QueryParamMap
* QueryParamMap `object`

### RegisterWebhookWithThirdPartyInput
* RegisterWebhookWithThirdPartyInput `object`
  * webhookName

### RegisterWebhookWithThirdPartyOutput
* RegisterWebhookWithThirdPartyOutput `object`

### ResolvedActionConfigurationMap
* ResolvedActionConfigurationMap `object`

### ResourceArn
* ResourceArn `string`

### ResourceNotFoundException


### RetryStageExecutionInput
* RetryStageExecutionInput `object`: Represents the input of a <code>RetryStageExecution</code> action.
  * pipelineExecutionId **required**
  * pipelineName **required**
  * retryMode **required**
  * stageName **required**

### RetryStageExecutionOutput
* RetryStageExecutionOutput `object`: Represents the output of a <code>RetryStageExecution</code> action.
  * pipelineExecutionId

### Revision
* Revision `string`

### RevisionChangeIdentifier
* RevisionChangeIdentifier `string`

### RevisionSummary
* RevisionSummary `string`

### RoleArn
* RoleArn `string`

### S3ArtifactLocation
* S3ArtifactLocation `object`: The location of the S3 bucket that contains a revision.
  * bucketName **required**
  * objectKey **required**

### S3Bucket
* S3Bucket `string`

### S3BucketName
* S3BucketName `string`

### S3Key
* S3Key `string`

### S3Location
* S3Location `object`: The Amazon S3 artifact location for an action's artifacts.
  * bucket
  * key

### S3ObjectKey
* S3ObjectKey `string`

### SecretAccessKey
* SecretAccessKey `string`

### SessionToken
* SessionToken `string`

### SourceRevision
* SourceRevision `object`: Information about the version (or revision) of a source artifact that initiated a pipeline execution.
  * actionName **required**
  * revisionId
  * revisionSummary
  * revisionUrl

### SourceRevisionList
* SourceRevisionList `array`
  * items [SourceRevision](#sourcerevision)

### StageActionDeclarationList
* StageActionDeclarationList `array`
  * items [ActionDeclaration](#actiondeclaration)

### StageBlockerDeclarationList
* StageBlockerDeclarationList `array`
  * items [BlockerDeclaration](#blockerdeclaration)

### StageContext
* StageContext `object`: Represents information about a stage to a job worker.
  * name

### StageDeclaration
* StageDeclaration `object`: Represents information about a stage and its definition.
  * actions **required**
    * items [ActionDeclaration](#actiondeclaration)
  * blockers
    * items [BlockerDeclaration](#blockerdeclaration)
  * name **required**

### StageExecution
* StageExecution `object`: Represents information about the run of a stage.
  * pipelineExecutionId **required**
  * status **required**

### StageExecutionStatus
* StageExecutionStatus `string` (values: InProgress, Failed, Stopped, Stopping, Succeeded)

### StageName
* StageName `string`

### StageNotFoundException


### StageNotRetryableException


### StageRetryMode
* StageRetryMode `string` (values: FAILED_ACTIONS)

### StageState
* StageState `object`: Represents information about the state of the stage.
  * actionStates
    * items [ActionState](#actionstate)
  * inboundExecution [StageExecution](#stageexecution)
  * inboundTransitionState
    * disabledReason
    * enabled
    * lastChangedAt
    * lastChangedBy
  * latestExecution
    * pipelineExecutionId **required**
    * status **required**
  * stageName

### StageStateList
* StageStateList `array`
  * items [StageState](#stagestate)

### StageTransitionType
* StageTransitionType `string` (values: Inbound, Outbound)

### StartPipelineExecutionInput
* StartPipelineExecutionInput `object`: Represents the input of a <code>StartPipelineExecution</code> action.
  * clientRequestToken
  * name **required**

### StartPipelineExecutionOutput
* StartPipelineExecutionOutput `object`: Represents the output of a <code>StartPipelineExecution</code> action.
  * pipelineExecutionId

### StopExecutionTrigger
* StopExecutionTrigger `object`: The interaction that stopped a pipeline execution.
  * reason

### StopPipelineExecutionInput
* StopPipelineExecutionInput `object`
  * abandon
  * pipelineExecutionId **required**
  * pipelineName **required**
  * reason

### StopPipelineExecutionOutput
* StopPipelineExecutionOutput `object`
  * pipelineExecutionId

### StopPipelineExecutionReason
* StopPipelineExecutionReason `string`

### String
* String `string`

### Tag
* Tag `object`: A tag is a key-value pair that is used to manage the resource.
  * key **required**
  * value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceInput
* TagResourceInput `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

### TagResourceOutput
* TagResourceOutput `object`

### TagValue
* TagValue `string`

### ThirdPartyJob
* ThirdPartyJob `object`: A response to a <code>PollForThirdPartyJobs</code> request returned by AWS CodePipeline when there is a job to be worked on by a partner action.
  * clientId
  * jobId

### ThirdPartyJobData
* ThirdPartyJobData `object`: Represents information about the job data for a partner action.
  * actionConfiguration
    * configuration
  * actionTypeId
    * category **required**
    * owner **required**
    * provider **required**
    * version **required**
  * artifactCredentials
    * accessKeyId **required**
    * secretAccessKey **required**
    * sessionToken **required**
  * continuationToken
  * encryptionKey
    * id **required**
    * type **required**
  * inputArtifacts
    * items [Artifact](#artifact)
  * outputArtifacts
    * items [Artifact](#artifact)
  * pipelineContext
    * action
      * actionExecutionId
      * name
    * pipelineArn
    * pipelineExecutionId
    * pipelineName
    * stage
      * name

### ThirdPartyJobDetails
* ThirdPartyJobDetails `object`: The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request.
  * data
    * actionConfiguration
      * configuration
    * actionTypeId
      * category **required**
      * owner **required**
      * provider **required**
      * version **required**
    * artifactCredentials
      * accessKeyId **required**
      * secretAccessKey **required**
      * sessionToken **required**
    * continuationToken
    * encryptionKey
      * id **required**
      * type **required**
    * inputArtifacts
      * items [Artifact](#artifact)
    * outputArtifacts
      * items [Artifact](#artifact)
    * pipelineContext
      * action
        * actionExecutionId
        * name
      * pipelineArn
      * pipelineExecutionId
      * pipelineName
      * stage
        * name
  * id
  * nonce

### ThirdPartyJobId
* ThirdPartyJobId `string`

### ThirdPartyJobList
* ThirdPartyJobList `array`
  * items [ThirdPartyJob](#thirdpartyjob)

### Time
* Time `string`

### Timestamp
* Timestamp `string`

### TooManyTagsException


### TransitionState
* TransitionState `object`: Represents information about the state of transitions between one stage and another stage.
  * disabledReason
  * enabled
  * lastChangedAt
  * lastChangedBy

### TriggerDetail
* TriggerDetail `string`

### TriggerType
* TriggerType `string` (values: CreatePipeline, StartPipelineExecution, PollForSourceChanges, Webhook, CloudWatchEvent, PutActionRevision)

### UntagResourceInput
* UntagResourceInput `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceOutput
* UntagResourceOutput `object`

### UpdatePipelineInput
* UpdatePipelineInput `object`: Represents the input of an <code>UpdatePipeline</code> action.
  * pipeline **required**
    * artifactStore
      * encryptionKey
        * id **required**
        * type **required**
      * location **required**
      * type **required**
    * artifactStores
    * name **required**
    * roleArn **required**
    * stages **required**
      * items [StageDeclaration](#stagedeclaration)
    * version

### UpdatePipelineOutput
* UpdatePipelineOutput `object`: Represents the output of an <code>UpdatePipeline</code> action.
  * pipeline
    * artifactStore
      * encryptionKey
        * id **required**
        * type **required**
      * location **required**
      * type **required**
    * artifactStores
    * name **required**
    * roleArn **required**
    * stages **required**
      * items [StageDeclaration](#stagedeclaration)
    * version

### Url
* Url `string`

### UrlTemplate
* UrlTemplate `string`

### ValidationException


### Version
* Version `string`

### WebhookArn
* WebhookArn `string`

### WebhookAuthConfiguration
* WebhookAuthConfiguration `object`: The authentication applied to incoming webhook trigger requests.
  * AllowedIPRange
  * SecretToken

### WebhookAuthConfigurationAllowedIPRange
* WebhookAuthConfigurationAllowedIPRange `string`

### WebhookAuthConfigurationSecretToken
* WebhookAuthConfigurationSecretToken `string`

### WebhookAuthenticationType
* WebhookAuthenticationType `string` (values: GITHUB_HMAC, IP, UNAUTHENTICATED)

### WebhookDefinition
* WebhookDefinition `object`: Represents information about a webhook and its definition.
  * authentication **required**
  * authenticationConfiguration **required**
    * AllowedIPRange
    * SecretToken
  * filters **required**
    * items [WebhookFilterRule](#webhookfilterrule)
  * name **required**
  * targetAction **required**
  * targetPipeline **required**

### WebhookErrorCode
* WebhookErrorCode `string`

### WebhookErrorMessage
* WebhookErrorMessage `string`

### WebhookFilterRule
* WebhookFilterRule `object`: The event criteria that specify when a webhook notification is sent to your URL.
  * jsonPath **required**
  * matchEquals

### WebhookFilters
* WebhookFilters `array`
  * items [WebhookFilterRule](#webhookfilterrule)

### WebhookLastTriggered
* WebhookLastTriggered `string`

### WebhookList
* WebhookList `array`
  * items [ListWebhookItem](#listwebhookitem)

### WebhookName
* WebhookName `string`

### WebhookNotFoundException


### WebhookUrl
* WebhookUrl `string`


