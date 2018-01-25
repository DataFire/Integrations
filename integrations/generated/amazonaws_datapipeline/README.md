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

amazonaws_datapipeline.ActivatePipeline({
  "pipelineId": ""
}).then(data => {
  console.log(data);
});
```

## Description

<p>AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline handles the details of scheduling and ensuring that data dependencies are met so that your application can focus on processing the data.</p> <p>AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner. AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide custom data management.</p> <p>AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline and define data sources, schedules, dependencies, and the transforms to be performed on the data. Use the second set in your task runner application to receive the next task ready for processing. The logic for performing the task, such as querying the data, running data analysis, or converting the data from one format to another, is contained within the task runner. The task runner performs the task assigned to it by the web service, reporting progress to the web service as it does so. When the task is done, the task runner reports the final success or failure of the task to the web service.</p>

## Actions

### ActivatePipeline



```js
amazonaws_datapipeline.ActivatePipeline({
  "pipelineId": ""
}, context)
```

#### Input
* input `object`
  * parameterValues [ParameterValueList](#parametervaluelist)
  * pipelineId **required** [id](#id)
  * startTimestamp [timestamp](#timestamp)

#### Output
* output [ActivatePipelineOutput](#activatepipelineoutput)

### AddTags



```js
amazonaws_datapipeline.AddTags({
  "pipelineId": "",
  "tags": []
}, context)
```

#### Input
* input `object`
  * pipelineId **required** [id](#id)
  * tags **required** [tagList](#taglist)

#### Output
* output [AddTagsOutput](#addtagsoutput)

### CreatePipeline



```js
amazonaws_datapipeline.CreatePipeline({
  "name": "",
  "uniqueId": ""
}, context)
```

#### Input
* input `object`
  * description [string](#string)
  * name **required** [id](#id)
  * tags [tagList](#taglist)
  * uniqueId **required** [id](#id)

#### Output
* output [CreatePipelineOutput](#createpipelineoutput)

### DeactivatePipeline



```js
amazonaws_datapipeline.DeactivatePipeline({
  "pipelineId": ""
}, context)
```

#### Input
* input `object`
  * cancelActive [cancelActive](#cancelactive)
  * pipelineId **required** [id](#id)

#### Output
* output [DeactivatePipelineOutput](#deactivatepipelineoutput)

### DeletePipeline



```js
amazonaws_datapipeline.DeletePipeline({
  "pipelineId": ""
}, context)
```

#### Input
* input `object`
  * pipelineId **required** [id](#id)

#### Output
*Output schema unknown*

### DescribeObjects



```js
amazonaws_datapipeline.DescribeObjects({
  "pipelineId": "",
  "objectIds": []
}, context)
```

#### Input
* input `object`
  * marker `string`
  * evaluateExpressions [boolean](#boolean)
  * marker [string](#string)
  * objectIds **required** [idList](#idlist)
  * pipelineId **required** [id](#id)

#### Output
* output [DescribeObjectsOutput](#describeobjectsoutput)

### DescribePipelines



```js
amazonaws_datapipeline.DescribePipelines({
  "pipelineIds": []
}, context)
```

#### Input
* input `object`
  * pipelineIds **required** [idList](#idlist)

#### Output
* output [DescribePipelinesOutput](#describepipelinesoutput)

### EvaluateExpression



```js
amazonaws_datapipeline.EvaluateExpression({
  "pipelineId": "",
  "objectId": "",
  "expression": ""
}, context)
```

#### Input
* input `object`
  * expression **required** [longString](#longstring)
  * objectId **required** [id](#id)
  * pipelineId **required** [id](#id)

#### Output
* output [EvaluateExpressionOutput](#evaluateexpressionoutput)

### GetPipelineDefinition



```js
amazonaws_datapipeline.GetPipelineDefinition({
  "pipelineId": ""
}, context)
```

#### Input
* input `object`
  * pipelineId **required** [id](#id)
  * version [string](#string)

#### Output
* output [GetPipelineDefinitionOutput](#getpipelinedefinitionoutput)

### ListPipelines



```js
amazonaws_datapipeline.ListPipelines({}, context)
```

#### Input
* input `object`
  * marker `string`
  * marker [string](#string)

#### Output
* output [ListPipelinesOutput](#listpipelinesoutput)

### PollForTask



```js
amazonaws_datapipeline.PollForTask({
  "workerGroup": ""
}, context)
```

#### Input
* input `object`
  * hostname [id](#id)
  * instanceIdentity [InstanceIdentity](#instanceidentity)
  * workerGroup **required** [string](#string)

#### Output
* output [PollForTaskOutput](#pollfortaskoutput)

### PutPipelineDefinition



```js
amazonaws_datapipeline.PutPipelineDefinition({
  "pipelineId": "",
  "pipelineObjects": []
}, context)
```

#### Input
* input `object`
  * parameterObjects [ParameterObjectList](#parameterobjectlist)
  * parameterValues [ParameterValueList](#parametervaluelist)
  * pipelineId **required** [id](#id)
  * pipelineObjects **required** [PipelineObjectList](#pipelineobjectlist)

#### Output
* output [PutPipelineDefinitionOutput](#putpipelinedefinitionoutput)

### QueryObjects



```js
amazonaws_datapipeline.QueryObjects({
  "pipelineId": "",
  "sphere": ""
}, context)
```

#### Input
* input `object`
  * limit `string`
  * marker `string`
  * limit [int](#int)
  * marker [string](#string)
  * pipelineId **required** [id](#id)
  * query [Query](#query)
  * sphere **required** [string](#string)

#### Output
* output [QueryObjectsOutput](#queryobjectsoutput)

### RemoveTags



```js
amazonaws_datapipeline.RemoveTags({
  "pipelineId": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * pipelineId **required** [id](#id)
  * tagKeys **required** [stringList](#stringlist)

#### Output
* output [RemoveTagsOutput](#removetagsoutput)

### ReportTaskProgress



```js
amazonaws_datapipeline.ReportTaskProgress({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * fields [fieldList](#fieldlist)
  * taskId **required** [taskId](#taskid)

#### Output
* output [ReportTaskProgressOutput](#reporttaskprogressoutput)

### ReportTaskRunnerHeartbeat



```js
amazonaws_datapipeline.ReportTaskRunnerHeartbeat({
  "taskrunnerId": ""
}, context)
```

#### Input
* input `object`
  * hostname [id](#id)
  * taskrunnerId **required** [id](#id)
  * workerGroup [string](#string)

#### Output
* output [ReportTaskRunnerHeartbeatOutput](#reporttaskrunnerheartbeatoutput)

### SetStatus



```js
amazonaws_datapipeline.SetStatus({
  "pipelineId": "",
  "objectIds": [],
  "status": ""
}, context)
```

#### Input
* input `object`
  * objectIds **required** [idList](#idlist)
  * pipelineId **required** [id](#id)
  * status **required** [string](#string)

#### Output
*Output schema unknown*

### SetTaskStatus



```js
amazonaws_datapipeline.SetTaskStatus({
  "taskId": "",
  "taskStatus": ""
}, context)
```

#### Input
* input `object`
  * errorId [string](#string)
  * errorMessage [errorMessage](#errormessage)
  * errorStackTrace [string](#string)
  * taskId **required** [taskId](#taskid)
  * taskStatus **required** [TaskStatus](#taskstatus)

#### Output
* output [SetTaskStatusOutput](#settaskstatusoutput)

### ValidatePipelineDefinition



```js
amazonaws_datapipeline.ValidatePipelineDefinition({
  "pipelineId": "",
  "pipelineObjects": []
}, context)
```

#### Input
* input `object`
  * parameterObjects [ParameterObjectList](#parameterobjectlist)
  * parameterValues [ParameterValueList](#parametervaluelist)
  * pipelineId **required** [id](#id)
  * pipelineObjects **required** [PipelineObjectList](#pipelineobjectlist)

#### Output
* output [ValidatePipelineDefinitionOutput](#validatepipelinedefinitionoutput)



## Definitions

### ActivatePipelineInput
* ActivatePipelineInput `object`: Contains the parameters for ActivatePipeline.
  * parameterValues [ParameterValueList](#parametervaluelist)
  * pipelineId **required** [id](#id)
  * startTimestamp [timestamp](#timestamp)

### ActivatePipelineOutput
* ActivatePipelineOutput `object`: Contains the output of ActivatePipeline.

### AddTagsInput
* AddTagsInput `object`: Contains the parameters for AddTags.
  * pipelineId **required** [id](#id)
  * tags **required** [tagList](#taglist)

### AddTagsOutput
* AddTagsOutput `object`: Contains the output of AddTags.

### CreatePipelineInput
* CreatePipelineInput `object`: Contains the parameters for CreatePipeline.
  * description [string](#string)
  * name **required** [id](#id)
  * tags [tagList](#taglist)
  * uniqueId **required** [id](#id)

### CreatePipelineOutput
* CreatePipelineOutput `object`: Contains the output of CreatePipeline.
  * pipelineId **required** [id](#id)

### DeactivatePipelineInput
* DeactivatePipelineInput `object`: Contains the parameters for DeactivatePipeline.
  * cancelActive [cancelActive](#cancelactive)
  * pipelineId **required** [id](#id)

### DeactivatePipelineOutput
* DeactivatePipelineOutput `object`: Contains the output of DeactivatePipeline.

### DeletePipelineInput
* DeletePipelineInput `object`: Contains the parameters for DeletePipeline.
  * pipelineId **required** [id](#id)

### DescribeObjectsInput
* DescribeObjectsInput `object`: Contains the parameters for DescribeObjects.
  * evaluateExpressions [boolean](#boolean)
  * marker [string](#string)
  * objectIds **required** [idList](#idlist)
  * pipelineId **required** [id](#id)

### DescribeObjectsOutput
* DescribeObjectsOutput `object`: Contains the output of DescribeObjects.
  * hasMoreResults [boolean](#boolean)
  * marker [string](#string)
  * pipelineObjects **required** [PipelineObjectList](#pipelineobjectlist)

### DescribePipelinesInput
* DescribePipelinesInput `object`: Contains the parameters for DescribePipelines.
  * pipelineIds **required** [idList](#idlist)

### DescribePipelinesOutput
* DescribePipelinesOutput `object`: Contains the output of DescribePipelines.
  * pipelineDescriptionList **required** [PipelineDescriptionList](#pipelinedescriptionlist)

### EvaluateExpressionInput
* EvaluateExpressionInput `object`: Contains the parameters for EvaluateExpression.
  * expression **required** [longString](#longstring)
  * objectId **required** [id](#id)
  * pipelineId **required** [id](#id)

### EvaluateExpressionOutput
* EvaluateExpressionOutput `object`: Contains the output of EvaluateExpression.
  * evaluatedExpression **required** [longString](#longstring)

### Field
* Field `object`: A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both.
  * key **required** [fieldNameString](#fieldnamestring)
  * refValue [fieldNameString](#fieldnamestring)
  * stringValue [fieldStringValue](#fieldstringvalue)

### GetPipelineDefinitionInput
* GetPipelineDefinitionInput `object`: Contains the parameters for GetPipelineDefinition.
  * pipelineId **required** [id](#id)
  * version [string](#string)

### GetPipelineDefinitionOutput
* GetPipelineDefinitionOutput `object`: Contains the output of GetPipelineDefinition.
  * parameterObjects [ParameterObjectList](#parameterobjectlist)
  * parameterValues [ParameterValueList](#parametervaluelist)
  * pipelineObjects [PipelineObjectList](#pipelineobjectlist)

### InstanceIdentity
* InstanceIdentity `object`: <p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p>
  * document [string](#string)
  * signature [string](#string)

### InternalServiceError
* InternalServiceError `object`: An internal service error occurred.
  * message [errorMessage](#errormessage)

### InvalidRequestException
* InvalidRequestException `object`: The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.
  * message [errorMessage](#errormessage)

### ListPipelinesInput
* ListPipelinesInput `object`: Contains the parameters for ListPipelines.
  * marker [string](#string)

### ListPipelinesOutput
* ListPipelinesOutput `object`: Contains the output of ListPipelines.
  * hasMoreResults [boolean](#boolean)
  * marker [string](#string)
  * pipelineIdList **required** [pipelineList](#pipelinelist)

### Operator
* Operator `object`: Contains a logical operation for comparing the value of a field with a specified value.
  * type [OperatorType](#operatortype)
  * values [stringList](#stringlist)

### OperatorType
* OperatorType `string` (values: EQ, REF_EQ, LE, GE, BETWEEN)

### ParameterAttribute
* ParameterAttribute `object`: The attributes allowed or specified with a parameter object.
  * key **required** [attributeNameString](#attributenamestring)
  * stringValue **required** [attributeValueString](#attributevaluestring)

### ParameterAttributeList
* ParameterAttributeList `array`
  * items [ParameterAttribute](#parameterattribute)

### ParameterObject
* ParameterObject `object`: Contains information about a parameter object.
  * attributes **required** [ParameterAttributeList](#parameterattributelist)
  * id **required** [fieldNameString](#fieldnamestring)

### ParameterObjectList
* ParameterObjectList `array`
  * items [ParameterObject](#parameterobject)

### ParameterValue
* ParameterValue `object`: A value or list of parameter values. 
  * id **required** [fieldNameString](#fieldnamestring)
  * stringValue **required** [fieldStringValue](#fieldstringvalue)

### ParameterValueList
* ParameterValueList `array`
  * items [ParameterValue](#parametervalue)

### PipelineDeletedException
* PipelineDeletedException `object`: The specified pipeline has been deleted.
  * message [errorMessage](#errormessage)

### PipelineDescription
* PipelineDescription `object`: Contains pipeline metadata.
  * description [string](#string)
  * fields **required** [fieldList](#fieldlist)
  * name **required** [id](#id)
  * pipelineId **required** [id](#id)
  * tags [tagList](#taglist)

### PipelineDescriptionList
* PipelineDescriptionList `array`
  * items [PipelineDescription](#pipelinedescription)

### PipelineIdName
* PipelineIdName `object`: Contains the name and identifier of a pipeline.
  * id [id](#id)
  * name [id](#id)

### PipelineNotFoundException
* PipelineNotFoundException `object`: The specified pipeline was not found. Verify that you used the correct user and account identifiers.
  * message [errorMessage](#errormessage)

### PipelineObject
* PipelineObject `object`: Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.
  * fields **required** [fieldList](#fieldlist)
  * id **required** [id](#id)
  * name **required** [id](#id)

### PipelineObjectList
* PipelineObjectList `array`
  * items [PipelineObject](#pipelineobject)

### PipelineObjectMap
* PipelineObjectMap `array`
  * items `object`
    * key [id](#id)
    * value [PipelineObject](#pipelineobject)

### PollForTaskInput
* PollForTaskInput `object`: Contains the parameters for PollForTask.
  * hostname [id](#id)
  * instanceIdentity [InstanceIdentity](#instanceidentity)
  * workerGroup **required** [string](#string)

### PollForTaskOutput
* PollForTaskOutput `object`: Contains the output of PollForTask.
  * taskObject [TaskObject](#taskobject)

### PutPipelineDefinitionInput
* PutPipelineDefinitionInput `object`: Contains the parameters for PutPipelineDefinition.
  * parameterObjects [ParameterObjectList](#parameterobjectlist)
  * parameterValues [ParameterValueList](#parametervaluelist)
  * pipelineId **required** [id](#id)
  * pipelineObjects **required** [PipelineObjectList](#pipelineobjectlist)

### PutPipelineDefinitionOutput
* PutPipelineDefinitionOutput `object`: Contains the output of PutPipelineDefinition.
  * errored **required** [boolean](#boolean)
  * validationErrors [ValidationErrors](#validationerrors)
  * validationWarnings [ValidationWarnings](#validationwarnings)

### Query
* Query `object`: Defines the query to run against an object.
  * selectors [SelectorList](#selectorlist)

### QueryObjectsInput
* QueryObjectsInput `object`: Contains the parameters for QueryObjects.
  * limit [int](#int)
  * marker [string](#string)
  * pipelineId **required** [id](#id)
  * query [Query](#query)
  * sphere **required** [string](#string)

### QueryObjectsOutput
* QueryObjectsOutput `object`: Contains the output of QueryObjects.
  * hasMoreResults [boolean](#boolean)
  * ids [idList](#idlist)
  * marker [string](#string)

### RemoveTagsInput
* RemoveTagsInput `object`: Contains the parameters for RemoveTags.
  * pipelineId **required** [id](#id)
  * tagKeys **required** [stringList](#stringlist)

### RemoveTagsOutput
* RemoveTagsOutput `object`: Contains the output of RemoveTags.

### ReportTaskProgressInput
* ReportTaskProgressInput `object`: Contains the parameters for ReportTaskProgress.
  * fields [fieldList](#fieldlist)
  * taskId **required** [taskId](#taskid)

### ReportTaskProgressOutput
* ReportTaskProgressOutput `object`: Contains the output of ReportTaskProgress.
  * canceled **required** [boolean](#boolean)

### ReportTaskRunnerHeartbeatInput
* ReportTaskRunnerHeartbeatInput `object`: Contains the parameters for ReportTaskRunnerHeartbeat.
  * hostname [id](#id)
  * taskrunnerId **required** [id](#id)
  * workerGroup [string](#string)

### ReportTaskRunnerHeartbeatOutput
* ReportTaskRunnerHeartbeatOutput `object`: Contains the output of ReportTaskRunnerHeartbeat.
  * terminate **required** [boolean](#boolean)

### Selector
* Selector `object`: A comparision that is used to determine whether a query should return this object.
  * fieldName [string](#string)
  * operator [Operator](#operator)

### SelectorList
* SelectorList `array`: The list of Selectors that define queries on individual fields.
  * items [Selector](#selector)

### SetStatusInput
* SetStatusInput `object`: Contains the parameters for SetStatus.
  * objectIds **required** [idList](#idlist)
  * pipelineId **required** [id](#id)
  * status **required** [string](#string)

### SetTaskStatusInput
* SetTaskStatusInput `object`: Contains the parameters for SetTaskStatus.
  * errorId [string](#string)
  * errorMessage [errorMessage](#errormessage)
  * errorStackTrace [string](#string)
  * taskId **required** [taskId](#taskid)
  * taskStatus **required** [TaskStatus](#taskstatus)

### SetTaskStatusOutput
* SetTaskStatusOutput `object`: Contains the output of SetTaskStatus.

### Tag
* Tag `object`: Tags are key/value pairs defined by a user and associated with a pipeline to control access. AWS Data Pipeline allows you to associate ten tags per pipeline. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.
  * key **required** [tagKey](#tagkey)
  * value **required** [tagValue](#tagvalue)

### TaskNotFoundException
* TaskNotFoundException `object`: The specified task was not found. 
  * message [errorMessage](#errormessage)

### TaskObject
* TaskObject `object`: Contains information about a pipeline task that is assigned to a task runner.
  * attemptId [id](#id)
  * objects [PipelineObjectMap](#pipelineobjectmap)
  * pipelineId [id](#id)
  * taskId [taskId](#taskid)

### TaskStatus
* TaskStatus `string` (values: FINISHED, FAILED, FALSE)

### ValidatePipelineDefinitionInput
* ValidatePipelineDefinitionInput `object`: Contains the parameters for ValidatePipelineDefinition.
  * parameterObjects [ParameterObjectList](#parameterobjectlist)
  * parameterValues [ParameterValueList](#parametervaluelist)
  * pipelineId **required** [id](#id)
  * pipelineObjects **required** [PipelineObjectList](#pipelineobjectlist)

### ValidatePipelineDefinitionOutput
* ValidatePipelineDefinitionOutput `object`: Contains the output of ValidatePipelineDefinition.
  * errored **required** [boolean](#boolean)
  * validationErrors [ValidationErrors](#validationerrors)
  * validationWarnings [ValidationWarnings](#validationwarnings)

### ValidationError
* ValidationError `object`: Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.
  * errors [validationMessages](#validationmessages)
  * id [id](#id)

### ValidationErrors
* ValidationErrors `array`
  * items [ValidationError](#validationerror)

### ValidationWarning
* ValidationWarning `object`: Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.
  * id [id](#id)
  * warnings [validationMessages](#validationmessages)

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


