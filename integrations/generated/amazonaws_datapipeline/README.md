# @datafire/amazonaws_datapipeline

Client library for AWS Data Pipeline

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_datapipeline
```
```js
let amazonaws_datapipeline = require('@datafire/amazonaws_datapipeline').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline handles the details of scheduling and ensuring that data dependencies are met so that your application can focus on processing the data.</p> <p>AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner. AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide custom data management.</p> <p>AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline and define data sources, schedules, dependencies, and the transforms to be performed on the data. Use the second set in your task runner application to receive the next task ready for processing. The logic for performing the task, such as querying the data, running data analysis, or converting the data from one format to another, is contained within the task runner. The task runner performs the task assigned to it by the web service, reporting progress to the web service as it does so. When the task is done, the task runner reports the final success or failure of the task to the web service.</p>

## Actions

### ActivatePipeline



```js
amazonaws_datapipeline.ActivatePipeline({
  "pipelineId": null
}, context)
```

#### Input
* input `object`
  * parameterValues
    * items [ParameterValue](#parametervalue)
  * pipelineId **required**
  * startTimestamp

#### Output
* output [ActivatePipelineOutput](#activatepipelineoutput)

### AddTags



```js
amazonaws_datapipeline.AddTags({
  "pipelineId": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [Tag](#tag)
  * pipelineId **required**

#### Output
* output [AddTagsOutput](#addtagsoutput)

### CreatePipeline



```js
amazonaws_datapipeline.CreatePipeline({
  "name": null,
  "uniqueId": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * description
  * name **required**
  * uniqueId **required**

#### Output
* output [CreatePipelineOutput](#createpipelineoutput)

### DeactivatePipeline



```js
amazonaws_datapipeline.DeactivatePipeline({
  "pipelineId": null
}, context)
```

#### Input
* input `object`
  * cancelActive
  * pipelineId **required**

#### Output
* output [DeactivatePipelineOutput](#deactivatepipelineoutput)

### DeletePipeline



```js
amazonaws_datapipeline.DeletePipeline({
  "pipelineId": null
}, context)
```

#### Input
* input `object`
  * pipelineId **required**

#### Output
*Output schema unknown*

### DescribeObjects



```js
amazonaws_datapipeline.DescribeObjects({
  "pipelineId": null,
  "objectIds": null
}, context)
```

#### Input
* input `object`
  * marker `string`
  * evaluateExpressions
  * marker
  * objectIds **required**
    * items [id](#id)
  * pipelineId **required**

#### Output
* output [DescribeObjectsOutput](#describeobjectsoutput)

### DescribePipelines



```js
amazonaws_datapipeline.DescribePipelines({
  "pipelineIds": null
}, context)
```

#### Input
* input `object`
  * pipelineIds **required**
    * items [id](#id)

#### Output
* output [DescribePipelinesOutput](#describepipelinesoutput)

### EvaluateExpression



```js
amazonaws_datapipeline.EvaluateExpression({
  "pipelineId": null,
  "objectId": null,
  "expression": null
}, context)
```

#### Input
* input `object`
  * expression **required**
  * objectId **required**
  * pipelineId **required**

#### Output
* output [EvaluateExpressionOutput](#evaluateexpressionoutput)

### GetPipelineDefinition



```js
amazonaws_datapipeline.GetPipelineDefinition({
  "pipelineId": null
}, context)
```

#### Input
* input `object`
  * pipelineId **required**
  * version

#### Output
* output [GetPipelineDefinitionOutput](#getpipelinedefinitionoutput)

### ListPipelines



```js
amazonaws_datapipeline.ListPipelines({}, context)
```

#### Input
* input `object`
  * marker `string`
  * marker

#### Output
* output [ListPipelinesOutput](#listpipelinesoutput)

### PollForTask



```js
amazonaws_datapipeline.PollForTask({
  "workerGroup": null
}, context)
```

#### Input
* input `object`
  * hostname
  * instanceIdentity
    * document
    * signature
  * workerGroup **required**

#### Output
* output [PollForTaskOutput](#pollfortaskoutput)

### PutPipelineDefinition



```js
amazonaws_datapipeline.PutPipelineDefinition({
  "pipelineId": null,
  "pipelineObjects": null
}, context)
```

#### Input
* input `object`
  * parameterObjects
    * items [ParameterObject](#parameterobject)
  * parameterValues
    * items [ParameterValue](#parametervalue)
  * pipelineId **required**
  * pipelineObjects **required**
    * items [PipelineObject](#pipelineobject)

#### Output
* output [PutPipelineDefinitionOutput](#putpipelinedefinitionoutput)

### QueryObjects



```js
amazonaws_datapipeline.QueryObjects({
  "pipelineId": null,
  "sphere": null
}, context)
```

#### Input
* input `object`
  * limit `string`
  * marker `string`
  * limit
  * marker
  * pipelineId **required**
  * query
    * selectors
      * items [Selector](#selector)
  * sphere **required**

#### Output
* output [QueryObjectsOutput](#queryobjectsoutput)

### RemoveTags



```js
amazonaws_datapipeline.RemoveTags({
  "pipelineId": null,
  "tagKeys": null
}, context)
```

#### Input
* input `object`
  * pipelineId **required**
  * tagKeys **required**
    * items [string](#string)

#### Output
* output [RemoveTagsOutput](#removetagsoutput)

### ReportTaskProgress



```js
amazonaws_datapipeline.ReportTaskProgress({
  "taskId": null
}, context)
```

#### Input
* input `object`
  * fields
    * items [Field](#field)
  * taskId **required**

#### Output
* output [ReportTaskProgressOutput](#reporttaskprogressoutput)

### ReportTaskRunnerHeartbeat



```js
amazonaws_datapipeline.ReportTaskRunnerHeartbeat({
  "taskrunnerId": null
}, context)
```

#### Input
* input `object`
  * hostname
  * taskrunnerId **required**
  * workerGroup

#### Output
* output [ReportTaskRunnerHeartbeatOutput](#reporttaskrunnerheartbeatoutput)

### SetStatus



```js
amazonaws_datapipeline.SetStatus({
  "pipelineId": null,
  "objectIds": null,
  "status": null
}, context)
```

#### Input
* input `object`
  * objectIds **required**
    * items [id](#id)
  * pipelineId **required**
  * status **required**

#### Output
*Output schema unknown*

### SetTaskStatus



```js
amazonaws_datapipeline.SetTaskStatus({
  "taskId": null,
  "taskStatus": null
}, context)
```

#### Input
* input `object`
  * errorId
  * errorMessage
  * errorStackTrace
  * taskId **required**
  * taskStatus **required**

#### Output
* output [SetTaskStatusOutput](#settaskstatusoutput)

### ValidatePipelineDefinition



```js
amazonaws_datapipeline.ValidatePipelineDefinition({
  "pipelineId": null,
  "pipelineObjects": null
}, context)
```

#### Input
* input `object`
  * parameterObjects
    * items [ParameterObject](#parameterobject)
  * parameterValues
    * items [ParameterValue](#parametervalue)
  * pipelineId **required**
  * pipelineObjects **required**
    * items [PipelineObject](#pipelineobject)

#### Output
* output [ValidatePipelineDefinitionOutput](#validatepipelinedefinitionoutput)



## Definitions

### ActivatePipelineInput
* ActivatePipelineInput `object`: Contains the parameters for ActivatePipeline.
  * parameterValues
    * items [ParameterValue](#parametervalue)
  * pipelineId **required**
  * startTimestamp

### ActivatePipelineOutput
* ActivatePipelineOutput `object`: Contains the output of ActivatePipeline.

### AddTagsInput
* AddTagsInput `object`: Contains the parameters for AddTags.
  * tags **required**
    * items [Tag](#tag)
  * pipelineId **required**

### AddTagsOutput
* AddTagsOutput `object`: Contains the output of AddTags.

### CreatePipelineInput
* CreatePipelineInput `object`: Contains the parameters for CreatePipeline.
  * tags
    * items [Tag](#tag)
  * description
  * name **required**
  * uniqueId **required**

### CreatePipelineOutput
* CreatePipelineOutput `object`: Contains the output of CreatePipeline.
  * pipelineId **required**

### DeactivatePipelineInput
* DeactivatePipelineInput `object`: Contains the parameters for DeactivatePipeline.
  * cancelActive
  * pipelineId **required**

### DeactivatePipelineOutput
* DeactivatePipelineOutput `object`: Contains the output of DeactivatePipeline.

### DeletePipelineInput
* DeletePipelineInput `object`: Contains the parameters for DeletePipeline.
  * pipelineId **required**

### DescribeObjectsInput
* DescribeObjectsInput `object`: Contains the parameters for DescribeObjects.
  * evaluateExpressions
  * marker
  * objectIds **required**
    * items [id](#id)
  * pipelineId **required**

### DescribeObjectsOutput
* DescribeObjectsOutput `object`: Contains the output of DescribeObjects.
  * hasMoreResults
  * marker
  * pipelineObjects **required**
    * items [PipelineObject](#pipelineobject)

### DescribePipelinesInput
* DescribePipelinesInput `object`: Contains the parameters for DescribePipelines.
  * pipelineIds **required**
    * items [id](#id)

### DescribePipelinesOutput
* DescribePipelinesOutput `object`: Contains the output of DescribePipelines.
  * pipelineDescriptionList **required**
    * items [PipelineDescription](#pipelinedescription)

### EvaluateExpressionInput
* EvaluateExpressionInput `object`: Contains the parameters for EvaluateExpression.
  * expression **required**
  * objectId **required**
  * pipelineId **required**

### EvaluateExpressionOutput
* EvaluateExpressionOutput `object`: Contains the output of EvaluateExpression.
  * evaluatedExpression **required**

### Field
* Field `object`: A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both.
  * key **required**
  * refValue
  * stringValue

### GetPipelineDefinitionInput
* GetPipelineDefinitionInput `object`: Contains the parameters for GetPipelineDefinition.
  * pipelineId **required**
  * version

### GetPipelineDefinitionOutput
* GetPipelineDefinitionOutput `object`: Contains the output of GetPipelineDefinition.
  * parameterObjects
    * items [ParameterObject](#parameterobject)
  * parameterValues
    * items [ParameterValue](#parametervalue)
  * pipelineObjects
    * items [PipelineObject](#pipelineobject)

### InstanceIdentity
* InstanceIdentity `object`: <p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p>
  * document
  * signature

### InternalServiceError
* InternalServiceError `object`: An internal service error occurred.
  * message

### InvalidRequestException
* InvalidRequestException `object`: The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.
  * message

### ListPipelinesInput
* ListPipelinesInput `object`: Contains the parameters for ListPipelines.
  * marker

### ListPipelinesOutput
* ListPipelinesOutput `object`: Contains the output of ListPipelines.
  * hasMoreResults
  * marker
  * pipelineIdList **required**
    * items [PipelineIdName](#pipelineidname)

### Operator
* Operator `object`: Contains a logical operation for comparing the value of a field with a specified value.
  * type
  * values
    * items [string](#string)

### OperatorType
* OperatorType `string` (values: EQ, REF_EQ, LE, GE, BETWEEN)

### ParameterAttribute
* ParameterAttribute `object`: The attributes allowed or specified with a parameter object.
  * key **required**
  * stringValue **required**

### ParameterAttributeList
* ParameterAttributeList `array`
  * items [ParameterAttribute](#parameterattribute)

### ParameterObject
* ParameterObject `object`: Contains information about a parameter object.
  * attributes **required**
    * items [ParameterAttribute](#parameterattribute)
  * id **required**

### ParameterObjectList
* ParameterObjectList `array`
  * items [ParameterObject](#parameterobject)

### ParameterValue
* ParameterValue `object`: A value or list of parameter values. 
  * id **required**
  * stringValue **required**

### ParameterValueList
* ParameterValueList `array`
  * items [ParameterValue](#parametervalue)

### PipelineDeletedException
* PipelineDeletedException `object`: The specified pipeline has been deleted.
  * message

### PipelineDescription
* PipelineDescription `object`: Contains pipeline metadata.
  * tags
    * items [Tag](#tag)
  * description
  * fields **required**
    * items [Field](#field)
  * name **required**
  * pipelineId **required**

### PipelineDescriptionList
* PipelineDescriptionList `array`
  * items [PipelineDescription](#pipelinedescription)

### PipelineIdName
* PipelineIdName `object`: Contains the name and identifier of a pipeline.
  * id
  * name

### PipelineNotFoundException
* PipelineNotFoundException `object`: The specified pipeline was not found. Verify that you used the correct user and account identifiers.
  * message

### PipelineObject
* PipelineObject `object`: Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.
  * fields **required**
    * items [Field](#field)
  * id **required**
  * name **required**

### PipelineObjectList
* PipelineObjectList `array`
  * items [PipelineObject](#pipelineobject)

### PipelineObjectMap
* PipelineObjectMap `object`

### PollForTaskInput
* PollForTaskInput `object`: Contains the parameters for PollForTask.
  * hostname
  * instanceIdentity
    * document
    * signature
  * workerGroup **required**

### PollForTaskOutput
* PollForTaskOutput `object`: Contains the output of PollForTask.
  * taskObject
    * attemptId
    * objects
    * pipelineId
    * taskId

### PutPipelineDefinitionInput
* PutPipelineDefinitionInput `object`: Contains the parameters for PutPipelineDefinition.
  * parameterObjects
    * items [ParameterObject](#parameterobject)
  * parameterValues
    * items [ParameterValue](#parametervalue)
  * pipelineId **required**
  * pipelineObjects **required**
    * items [PipelineObject](#pipelineobject)

### PutPipelineDefinitionOutput
* PutPipelineDefinitionOutput `object`: Contains the output of PutPipelineDefinition.
  * errored **required**
  * validationErrors
    * items [ValidationError](#validationerror)
  * validationWarnings
    * items [ValidationWarning](#validationwarning)

### Query
* Query `object`: Defines the query to run against an object.
  * selectors
    * items [Selector](#selector)

### QueryObjectsInput
* QueryObjectsInput `object`: Contains the parameters for QueryObjects.
  * limit
  * marker
  * pipelineId **required**
  * query
    * selectors
      * items [Selector](#selector)
  * sphere **required**

### QueryObjectsOutput
* QueryObjectsOutput `object`: Contains the output of QueryObjects.
  * hasMoreResults
  * ids
    * items [id](#id)
  * marker

### RemoveTagsInput
* RemoveTagsInput `object`: Contains the parameters for RemoveTags.
  * pipelineId **required**
  * tagKeys **required**
    * items [string](#string)

### RemoveTagsOutput
* RemoveTagsOutput `object`: Contains the output of RemoveTags.

### ReportTaskProgressInput
* ReportTaskProgressInput `object`: Contains the parameters for ReportTaskProgress.
  * fields
    * items [Field](#field)
  * taskId **required**

### ReportTaskProgressOutput
* ReportTaskProgressOutput `object`: Contains the output of ReportTaskProgress.
  * canceled **required**

### ReportTaskRunnerHeartbeatInput
* ReportTaskRunnerHeartbeatInput `object`: Contains the parameters for ReportTaskRunnerHeartbeat.
  * hostname
  * taskrunnerId **required**
  * workerGroup

### ReportTaskRunnerHeartbeatOutput
* ReportTaskRunnerHeartbeatOutput `object`: Contains the output of ReportTaskRunnerHeartbeat.
  * terminate **required**

### Selector
* Selector `object`: A comparision that is used to determine whether a query should return this object.
  * fieldName
  * operator [Operator](#operator)

### SelectorList
* SelectorList `array`: The list of Selectors that define queries on individual fields.
  * items [Selector](#selector)

### SetStatusInput
* SetStatusInput `object`: Contains the parameters for SetStatus.
  * objectIds **required**
    * items [id](#id)
  * pipelineId **required**
  * status **required**

### SetTaskStatusInput
* SetTaskStatusInput `object`: Contains the parameters for SetTaskStatus.
  * errorId
  * errorMessage
  * errorStackTrace
  * taskId **required**
  * taskStatus **required**

### SetTaskStatusOutput
* SetTaskStatusOutput `object`: Contains the output of SetTaskStatus.

### Tag
* Tag `object`: Tags are key/value pairs defined by a user and associated with a pipeline to control access. AWS Data Pipeline allows you to associate ten tags per pipeline. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.
  * key **required**
  * value **required**

### TaskNotFoundException
* TaskNotFoundException `object`: The specified task was not found. 
  * message

### TaskObject
* TaskObject `object`: Contains information about a pipeline task that is assigned to a task runner.
  * attemptId
  * objects
  * pipelineId
  * taskId

### TaskStatus
* TaskStatus `string` (values: FINISHED, FAILED, FALSE)

### ValidatePipelineDefinitionInput
* ValidatePipelineDefinitionInput `object`: Contains the parameters for ValidatePipelineDefinition.
  * parameterObjects
    * items [ParameterObject](#parameterobject)
  * parameterValues
    * items [ParameterValue](#parametervalue)
  * pipelineId **required**
  * pipelineObjects **required**
    * items [PipelineObject](#pipelineobject)

### ValidatePipelineDefinitionOutput
* ValidatePipelineDefinitionOutput `object`: Contains the output of ValidatePipelineDefinition.
  * errored **required**
  * validationErrors
    * items [ValidationError](#validationerror)
  * validationWarnings
    * items [ValidationWarning](#validationwarning)

### ValidationError
* ValidationError `object`: Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.
  * errors
    * items [validationMessage](#validationmessage)
  * id

### ValidationErrors
* ValidationErrors `array`
  * items [ValidationError](#validationerror)

### ValidationWarning
* ValidationWarning `object`: Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.
  * id
  * warnings
    * items [validationMessage](#validationmessage)

### ValidationWarnings
* ValidationWarnings `array`
  * items [ValidationWarning](#validationwarning)

### attributeNameString
* attributeNameString `string`

### attributeValueString
* attributeValueString `string`

### boolean
* boolean `boolean`

### cancelActive
* cancelActive `boolean`

### errorMessage
* errorMessage `string`

### fieldList
* fieldList `array`
  * items [Field](#field)

### fieldNameString
* fieldNameString `string`

### fieldStringValue
* fieldStringValue `string`

### id
* id `string`

### idList
* idList `array`
  * items [id](#id)

### int
* int `integer`

### longString
* longString `string`

### pipelineList
* pipelineList `array`
  * items [PipelineIdName](#pipelineidname)

### string
* string `string`

### stringList
* stringList `array`
  * items [string](#string)

### tagKey
* tagKey `string`

### tagList
* tagList `array`
  * items [Tag](#tag)

### tagValue
* tagValue `string`

### taskId
* taskId `string`

### timestamp
* timestamp `string`

### validationMessage
* validationMessage `string`

### validationMessages
* validationMessages `array`
  * items [validationMessage](#validationmessage)


