# @datafire/amazonaws_sagemaker_a2i_runtime

Client library for Amazon Augmented AI Runtime

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_sagemaker_a2i_runtime
```
```js
let amazonaws_sagemaker_a2i_runtime = require('@datafire/amazonaws_sagemaker_a2i_runtime').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<important> <p>Amazon Augmented AI is in preview release and is subject to change. We do not recommend using this product in production environments.</p> </important> <p>Amazon Augmented AI (Amazon A2I) adds the benefit of human judgment to any machine learning application. When an AI application can't evaluate data with a high degree of confidence, human reviewers can take over. This human review is called a human review workflow. To create and start a human review workflow, you need three resources: a <i>worker task template</i>, a <i>flow definition</i>, and a <i>human loop</i>.</p> <p>For information about these resources and prerequisites for using Amazon A2I, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-getting-started.html">Get Started with Amazon Augmented AI</a> in the Amazon SageMaker Developer Guide.</p> <p>This API reference includes information about API actions and data types that you can use to interact with Amazon A2I programmatically. Use this guide to:</p> <ul> <li> <p>Start a human loop with the <code>StartHumanLoop</code> operation when using Amazon A2I with a <i>custom task type</i>. To learn more about the difference between custom and built-in task types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-task-types-general.html">Use Task Types </a>. To learn how to start a human loop using this API, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-start-human-loop.html#a2i-instructions-starthumanloop">Create and Start a Human Loop for a Custom Task Type </a> in the Amazon SageMaker Developer Guide.</p> </li> <li> <p>Manage your human loops. You can list all human loops that you have created, describe individual human loops, and stop and delete human loops. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-monitor-humanloop-results.html">Monitor and Manage Your Human Loop </a> in the Amazon SageMaker Developer Guide.</p> </li> </ul> <p>Amazon A2I integrates APIs from various AWS services to create and start human review workflows for those services. To learn how Amazon A2I uses these APIs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-api-references.html">Use APIs in Amazon A2I</a> in the Amazon SageMaker Developer Guide.</p>

## Actions

### StartHumanLoop



```js
amazonaws_sagemaker_a2i_runtime.StartHumanLoop({
  "HumanLoopName": "",
  "FlowDefinitionArn": "",
  "HumanLoopInput": {}
}, context)
```

#### Input
* input `object`
  * DataAttributes `object`: Attributes of the data specified by the customer. Use these to describe the data to be labeled.
    * ContentClassifiers
      * items [ContentClassifier](#contentclassifier)
  * FlowDefinitionArn **required** `string`: The Amazon Resource Name (ARN) of the flow definition associated with this human loop.
  * HumanLoopInput **required** `object`: An object containing the human loop input in JSON format.
    * InputContent
  * HumanLoopName **required** `string`: The name of the human loop.

#### Output
* output [StartHumanLoopResponse](#starthumanloopresponse)

### ListHumanLoops



```js
amazonaws_sagemaker_a2i_runtime.ListHumanLoops({
  "FlowDefinitionArn": ""
}, context)
```

#### Input
* input `object`
  * CreationTimeAfter `string`
  * CreationTimeBefore `string`
  * FlowDefinitionArn **required** `string`
  * SortOrder `string`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [ListHumanLoopsResponse](#listhumanloopsresponse)

### StopHumanLoop



```js
amazonaws_sagemaker_a2i_runtime.StopHumanLoop({
  "HumanLoopName": ""
}, context)
```

#### Input
* input `object`
  * HumanLoopName **required** `string`: The name of the human loop that you want to stop.

#### Output
* output [StopHumanLoopResponse](#stophumanloopresponse)

### DeleteHumanLoop



```js
amazonaws_sagemaker_a2i_runtime.DeleteHumanLoop({
  "HumanLoopName": ""
}, context)
```

#### Input
* input `object`
  * HumanLoopName **required** `string`

#### Output
* output [DeleteHumanLoopResponse](#deletehumanloopresponse)

### DescribeHumanLoop



```js
amazonaws_sagemaker_a2i_runtime.DescribeHumanLoop({
  "HumanLoopName": ""
}, context)
```

#### Input
* input `object`
  * HumanLoopName **required** `string`

#### Output
* output [DescribeHumanLoopResponse](#describehumanloopresponse)



## Definitions

### ConflictException


### ContentClassifier
* ContentClassifier `string` (values: FreeOfPersonallyIdentifiableInformation, FreeOfAdultContent)

### ContentClassifiers
* ContentClassifiers `array`
  * items [ContentClassifier](#contentclassifier)

### DeleteHumanLoopRequest
* DeleteHumanLoopRequest `object`

### DeleteHumanLoopResponse
* DeleteHumanLoopResponse `object`

### DescribeHumanLoopRequest
* DescribeHumanLoopRequest `object`

### DescribeHumanLoopResponse
* DescribeHumanLoopResponse `object`
  * CreationTime **required**
  * FailureCode
  * FailureReason
  * FlowDefinitionArn **required**
  * HumanLoopArn **required**
  * HumanLoopName **required**
  * HumanLoopOutput
    * OutputS3Uri **required**
  * HumanLoopStatus **required**

### FailureReason
* FailureReason `string`

### FlowDefinitionArn
* FlowDefinitionArn `string`

### HumanLoopArn
* HumanLoopArn `string`

### HumanLoopDataAttributes
* HumanLoopDataAttributes `object`: Attributes of the data specified by the customer. Use these to describe the data to be labeled.
  * ContentClassifiers **required**
    * items [ContentClassifier](#contentclassifier)

### HumanLoopInput
* HumanLoopInput `object`: An object containing the human loop input in JSON format.
  * InputContent **required**

### HumanLoopName
* HumanLoopName `string`

### HumanLoopOutput
* HumanLoopOutput `object`: Information about where the human output will be stored.
  * OutputS3Uri **required**

### HumanLoopStatus
* HumanLoopStatus `string` (values: InProgress, Failed, Completed, Stopped, Stopping)

### HumanLoopSummaries
* HumanLoopSummaries `array`
  * items [HumanLoopSummary](#humanloopsummary)

### HumanLoopSummary
* HumanLoopSummary `object`: Summary information about the human loop.
  * CreationTime
  * FailureReason
  * FlowDefinitionArn
  * HumanLoopName
  * HumanLoopStatus

### InputContent
* InputContent `string`

### InternalServerException


### ListHumanLoopsRequest
* ListHumanLoopsRequest `object`

### ListHumanLoopsResponse
* ListHumanLoopsResponse `object`
  * HumanLoopSummaries **required**
    * items [HumanLoopSummary](#humanloopsummary)
  * NextToken

### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### ResourceNotFoundException


### ServiceQuotaExceededException


### SortOrder
* SortOrder `string` (values: Ascending, Descending)

### StartHumanLoopRequest
* StartHumanLoopRequest `object`
  * DataAttributes
    * ContentClassifiers **required**
      * items [ContentClassifier](#contentclassifier)
  * FlowDefinitionArn **required**
  * HumanLoopInput **required**
    * InputContent **required**
  * HumanLoopName **required**

### StartHumanLoopResponse
* StartHumanLoopResponse `object`
  * HumanLoopArn

### StopHumanLoopRequest
* StopHumanLoopRequest `object`
  * HumanLoopName **required**

### StopHumanLoopResponse
* StopHumanLoopResponse `object`

### String
* String `string`

### ThrottlingException


### Timestamp
* Timestamp `string`

### ValidationException



