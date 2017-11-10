# @datafire/amazonaws_codepipeline

Client library for AWS CodePipeline

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_codepipeline
```

```js
let datafire = require('datafire');
let amazonaws_codepipeline = require('@datafire/amazonaws_codepipeline').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_codepipeline.AcknowledgeJob({}).then(data => {
  console.log(data);
})
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

#### Parameters
* jobId (string) **required**
* nonce (string) **required**

### AcknowledgeThirdPartyJob



```js
amazonaws_codepipeline.AcknowledgeThirdPartyJob({
  "jobId": "",
  "nonce": "",
  "clientToken": ""
}, context)
```

#### Parameters
* clientToken (string) **required**
* jobId (string) **required**
* nonce (string) **required**

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

#### Parameters
* category (string) **required**
* configurationProperties (array)
* inputArtifactDetails (object) **required** - Returns information about the details of an artifact.
* outputArtifactDetails (object) **required** - Returns information about the details of an artifact.
* provider (string) **required**
* settings (object) - Returns information about the settings for an action type.
* version (string) **required**

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

#### Parameters
* pipeline (object) **required** - Represents the structure of actions and stages to be performed in the pipeline.

### DeleteCustomActionType



```js
amazonaws_codepipeline.DeleteCustomActionType({
  "category": "",
  "provider": "",
  "version": ""
}, context)
```

#### Parameters
* category (string) **required**
* provider (string) **required**
* version (string) **required**

### DeletePipeline



```js
amazonaws_codepipeline.DeletePipeline({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**

### DisableStageTransition



```js
amazonaws_codepipeline.DisableStageTransition({
  "pipelineName": "",
  "stageName": "",
  "transitionType": "",
  "reason": ""
}, context)
```

#### Parameters
* pipelineName (string) **required**
* reason (string) **required**
* stageName (string) **required**
* transitionType (string) **required**

### EnableStageTransition



```js
amazonaws_codepipeline.EnableStageTransition({
  "pipelineName": "",
  "stageName": "",
  "transitionType": ""
}, context)
```

#### Parameters
* pipelineName (string) **required**
* stageName (string) **required**
* transitionType (string) **required**

### GetJobDetails



```js
amazonaws_codepipeline.GetJobDetails({
  "jobId": ""
}, context)
```

#### Parameters
* jobId (string) **required**

### GetPipeline



```js
amazonaws_codepipeline.GetPipeline({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**
* version (integer)

### GetPipelineExecution



```js
amazonaws_codepipeline.GetPipelineExecution({
  "pipelineName": "",
  "pipelineExecutionId": ""
}, context)
```

#### Parameters
* pipelineExecutionId (string) **required**
* pipelineName (string) **required**

### GetPipelineState



```js
amazonaws_codepipeline.GetPipelineState({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**

### GetThirdPartyJobDetails



```js
amazonaws_codepipeline.GetThirdPartyJobDetails({
  "jobId": "",
  "clientToken": ""
}, context)
```

#### Parameters
* clientToken (string) **required**
* jobId (string) **required**

### ListActionTypes



```js
amazonaws_codepipeline.ListActionTypes({}, context)
```

#### Parameters
* actionOwnerFilter (string)
* nextToken (string)

### ListPipelineExecutions



```js
amazonaws_codepipeline.ListPipelineExecutions({
  "pipelineName": ""
}, context)
```

#### Parameters
* maxResults (integer)
* nextToken (string)
* pipelineName (string) **required**

### ListPipelines



```js
amazonaws_codepipeline.ListPipelines({}, context)
```

#### Parameters
* nextToken (string)

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

#### Parameters
* actionTypeId (object) **required** - Represents information about an action type.
* maxBatchSize (integer)
* queryParam (array)

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

#### Parameters
* actionTypeId (object) **required** - Represents information about an action type.
* maxBatchSize (integer)

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

#### Parameters
* actionName (string) **required**
* actionRevision (object) **required** - Represents information about the version (or revision) of an action.
* pipelineName (string) **required**
* stageName (string) **required**

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

#### Parameters
* actionName (string) **required**
* pipelineName (string) **required**
* result (object) **required** - Represents information about the result of an approval request.
* stageName (string) **required**
* token (string) **required**

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

#### Parameters
* failureDetails (object) **required** - Represents information about failure details.
* jobId (string) **required**

### PutJobSuccessResult



```js
amazonaws_codepipeline.PutJobSuccessResult({
  "jobId": ""
}, context)
```

#### Parameters
* continuationToken (string)
* currentRevision (object) - Represents information about a current revision.
* executionDetails (object) - The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.
* jobId (string) **required**

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

#### Parameters
* clientToken (string) **required**
* failureDetails (object) **required** - Represents information about failure details.
* jobId (string) **required**

### PutThirdPartyJobSuccessResult



```js
amazonaws_codepipeline.PutThirdPartyJobSuccessResult({
  "jobId": "",
  "clientToken": ""
}, context)
```

#### Parameters
* clientToken (string) **required**
* continuationToken (string)
* currentRevision (object) - Represents information about a current revision.
* executionDetails (object) - The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.
* jobId (string) **required**

### RetryStageExecution



```js
amazonaws_codepipeline.RetryStageExecution({
  "pipelineName": "",
  "stageName": "",
  "pipelineExecutionId": "",
  "retryMode": ""
}, context)
```

#### Parameters
* pipelineExecutionId (string) **required**
* pipelineName (string) **required**
* retryMode (string) **required**
* stageName (string) **required**

### StartPipelineExecution



```js
amazonaws_codepipeline.StartPipelineExecution({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**

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

#### Parameters
* pipeline (object) **required** - Represents the structure of actions and stages to be performed in the pipeline.

