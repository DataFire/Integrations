# @datafire/amazonaws_datapipeline

Client library for AWS Data Pipeline

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_datapipeline
```

```js
let datafire = require('datafire');
let amazonaws_datapipeline = require('@datafire/amazonaws_datapipeline').actions;
let context = new datafire.Context();

amazonaws_datapipeline.ActivatePipeline({}, context).then(data => {
  console.log(data);
})
```

## Description
<p>AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline handles the details of scheduling and ensuring that data dependencies are met so that your application can focus on processing the data.</p> <p>AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner. AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide custom data management.</p> <p>AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline and define data sources, schedules, dependencies, and the transforms to be performed on the data. Use the second set in your task runner application to receive the next task ready for processing. The logic for performing the task, such as querying the data, running data analysis, or converting the data from one format to another, is contained within the task runner. The task runner performs the task assigned to it by the web service, reporting progress to the web service as it does so. When the task is done, the task runner reports the final success or failure of the task to the web service.</p>

## Actions
### ActivatePipeline



```js
amazonaws_datapipeline.ActivatePipeline({}, context)
```


### AddTags



```js
amazonaws_datapipeline.AddTags({}, context)
```


### CreatePipeline



```js
amazonaws_datapipeline.CreatePipeline({}, context)
```


### DeactivatePipeline



```js
amazonaws_datapipeline.DeactivatePipeline({}, context)
```


### DeletePipeline



```js
amazonaws_datapipeline.DeletePipeline({}, context)
```


### DescribeObjects



```js
amazonaws_datapipeline.DescribeObjects({}, context)
```

#### Parameters
* marker (string)

### DescribePipelines



```js
amazonaws_datapipeline.DescribePipelines({}, context)
```


### EvaluateExpression



```js
amazonaws_datapipeline.EvaluateExpression({}, context)
```


### GetPipelineDefinition



```js
amazonaws_datapipeline.GetPipelineDefinition({}, context)
```


### ListPipelines



```js
amazonaws_datapipeline.ListPipelines({}, context)
```

#### Parameters
* marker (string)

### PollForTask



```js
amazonaws_datapipeline.PollForTask({}, context)
```


### PutPipelineDefinition



```js
amazonaws_datapipeline.PutPipelineDefinition({}, context)
```


### QueryObjects



```js
amazonaws_datapipeline.QueryObjects({}, context)
```

#### Parameters
* limit (string)
* marker (string)

### RemoveTags



```js
amazonaws_datapipeline.RemoveTags({}, context)
```


### ReportTaskProgress



```js
amazonaws_datapipeline.ReportTaskProgress({}, context)
```


### ReportTaskRunnerHeartbeat



```js
amazonaws_datapipeline.ReportTaskRunnerHeartbeat({}, context)
```


### SetStatus



```js
amazonaws_datapipeline.SetStatus({}, context)
```


### SetTaskStatus



```js
amazonaws_datapipeline.SetTaskStatus({}, context)
```


### ValidatePipelineDefinition



```js
amazonaws_datapipeline.ValidatePipelineDefinition({}, context)
```


