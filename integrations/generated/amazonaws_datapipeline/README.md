# @datafire/amazonaws_datapipeline

Client library for AWS Data Pipeline

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_datapipeline
```

```js
let datafire = require('datafire');
let amazonaws_datapipeline = require('@datafire/amazonaws_datapipeline').create();

amazonaws_datapipeline.ActivatePipeline({}).then(data => {
  console.log(data);
})
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

#### Parameters
* parameterValues (array)
* pipelineId (string) **required**
* startTimestamp (string)

### AddTags



```js
amazonaws_datapipeline.AddTags({
  "pipelineId": "",
  "tags": []
}, context)
```

#### Parameters
* pipelineId (string) **required**
* tags (array) **required**

### CreatePipeline



```js
amazonaws_datapipeline.CreatePipeline({
  "name": "",
  "uniqueId": ""
}, context)
```

#### Parameters
* description (string)
* name (string) **required**
* tags (array)
* uniqueId (string) **required**

### DeactivatePipeline



```js
amazonaws_datapipeline.DeactivatePipeline({
  "pipelineId": ""
}, context)
```

#### Parameters
* cancelActive (boolean)
* pipelineId (string) **required**

### DeletePipeline



```js
amazonaws_datapipeline.DeletePipeline({
  "pipelineId": ""
}, context)
```

#### Parameters
* pipelineId (string) **required**

### DescribeObjects



```js
amazonaws_datapipeline.DescribeObjects({
  "pipelineId": "",
  "objectIds": []
}, context)
```

#### Parameters
* marker (string)
* evaluateExpressions (boolean)
* marker (string)
* objectIds (array) **required**
* pipelineId (string) **required**

### DescribePipelines



```js
amazonaws_datapipeline.DescribePipelines({
  "pipelineIds": []
}, context)
```

#### Parameters
* pipelineIds (array) **required**

### EvaluateExpression



```js
amazonaws_datapipeline.EvaluateExpression({
  "pipelineId": "",
  "objectId": "",
  "expression": ""
}, context)
```

#### Parameters
* expression (string) **required**
* objectId (string) **required**
* pipelineId (string) **required**

### GetPipelineDefinition



```js
amazonaws_datapipeline.GetPipelineDefinition({
  "pipelineId": ""
}, context)
```

#### Parameters
* pipelineId (string) **required**
* version (string)

### ListPipelines



```js
amazonaws_datapipeline.ListPipelines({}, context)
```

#### Parameters
* marker (string)
* marker (string)

### PollForTask



```js
amazonaws_datapipeline.PollForTask({
  "workerGroup": ""
}, context)
```

#### Parameters
* hostname (string)
* instanceIdentity (object) - <p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p>
* workerGroup (string) **required**

### PutPipelineDefinition



```js
amazonaws_datapipeline.PutPipelineDefinition({
  "pipelineId": "",
  "pipelineObjects": []
}, context)
```

#### Parameters
* parameterObjects (array)
* parameterValues (array)
* pipelineId (string) **required**
* pipelineObjects (array) **required**

### QueryObjects



```js
amazonaws_datapipeline.QueryObjects({
  "pipelineId": "",
  "sphere": ""
}, context)
```

#### Parameters
* limit (string)
* marker (string)
* limit (integer)
* marker (string)
* pipelineId (string) **required**
* query (object) - Defines the query to run against an object.
* sphere (string) **required**

### RemoveTags



```js
amazonaws_datapipeline.RemoveTags({
  "pipelineId": "",
  "tagKeys": []
}, context)
```

#### Parameters
* pipelineId (string) **required**
* tagKeys (array) **required**

### ReportTaskProgress



```js
amazonaws_datapipeline.ReportTaskProgress({
  "taskId": ""
}, context)
```

#### Parameters
* fields (array)
* taskId (string) **required**

### ReportTaskRunnerHeartbeat



```js
amazonaws_datapipeline.ReportTaskRunnerHeartbeat({
  "taskrunnerId": ""
}, context)
```

#### Parameters
* hostname (string)
* taskrunnerId (string) **required**
* workerGroup (string)

### SetStatus



```js
amazonaws_datapipeline.SetStatus({
  "pipelineId": "",
  "objectIds": [],
  "status": ""
}, context)
```

#### Parameters
* objectIds (array) **required**
* pipelineId (string) **required**
* status (string) **required**

### SetTaskStatus



```js
amazonaws_datapipeline.SetTaskStatus({
  "taskId": "",
  "taskStatus": ""
}, context)
```

#### Parameters
* errorId (string)
* errorMessage (string)
* errorStackTrace (string)
* taskId (string) **required**
* taskStatus (string) **required**

### ValidatePipelineDefinition



```js
amazonaws_datapipeline.ValidatePipelineDefinition({
  "pipelineId": "",
  "pipelineObjects": []
}, context)
```

#### Parameters
* parameterObjects (array)
* parameterValues (array)
* pipelineId (string) **required**
* pipelineObjects (array) **required**

