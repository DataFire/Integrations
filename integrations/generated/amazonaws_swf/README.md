# @datafire/amazonaws_swf

Client library for Amazon Simple Workflow Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_swf
```

```js
let datafire = require('datafire');
let amazonaws_swf = require('@datafire/amazonaws_swf').actions;
let context = new datafire.Context();

amazonaws_swf.CountClosedWorkflowExecutions({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Simple Workflow Service</fullname> <p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to coordinate work across distributed components. In Amazon SWF, a <i>task</i> represents a logical unit of work that is performed by a component of your workflow. Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and concurrency in accordance with the logical flow of the application.</p> <p>Amazon SWF gives you full control over implementing tasks and coordinating them without worrying about underlying complexities such as tracking their progress and maintaining their state.</p> <p>This documentation serves as reference only. For a broader overview of the Amazon SWF programming model, see the <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a>.</p>

## Actions
### CountClosedWorkflowExecutions



```js
amazonaws_swf.CountClosedWorkflowExecutions({}, context)
```

#### Parameters

### CountOpenWorkflowExecutions



```js
amazonaws_swf.CountOpenWorkflowExecutions({}, context)
```

#### Parameters

### CountPendingActivityTasks



```js
amazonaws_swf.CountPendingActivityTasks({}, context)
```

#### Parameters

### CountPendingDecisionTasks



```js
amazonaws_swf.CountPendingDecisionTasks({}, context)
```

#### Parameters

### DeprecateActivityType



```js
amazonaws_swf.DeprecateActivityType({}, context)
```

#### Parameters

### DeprecateDomain



```js
amazonaws_swf.DeprecateDomain({}, context)
```

#### Parameters

### DeprecateWorkflowType



```js
amazonaws_swf.DeprecateWorkflowType({}, context)
```

#### Parameters

### DescribeActivityType



```js
amazonaws_swf.DescribeActivityType({}, context)
```

#### Parameters

### DescribeDomain



```js
amazonaws_swf.DescribeDomain({}, context)
```

#### Parameters

### DescribeWorkflowExecution



```js
amazonaws_swf.DescribeWorkflowExecution({}, context)
```

#### Parameters

### DescribeWorkflowType



```js
amazonaws_swf.DescribeWorkflowType({}, context)
```

#### Parameters

### GetWorkflowExecutionHistory



```js
amazonaws_swf.GetWorkflowExecutionHistory({}, context)
```

#### Parameters
* maximumPageSize (string)
* nextPageToken (string)

### ListActivityTypes



```js
amazonaws_swf.ListActivityTypes({}, context)
```

#### Parameters
* maximumPageSize (string)
* nextPageToken (string)

### ListClosedWorkflowExecutions



```js
amazonaws_swf.ListClosedWorkflowExecutions({}, context)
```

#### Parameters
* maximumPageSize (string)
* nextPageToken (string)

### ListDomains



```js
amazonaws_swf.ListDomains({}, context)
```

#### Parameters
* maximumPageSize (string)
* nextPageToken (string)

### ListOpenWorkflowExecutions



```js
amazonaws_swf.ListOpenWorkflowExecutions({}, context)
```

#### Parameters
* maximumPageSize (string)
* nextPageToken (string)

### ListWorkflowTypes



```js
amazonaws_swf.ListWorkflowTypes({}, context)
```

#### Parameters
* maximumPageSize (string)
* nextPageToken (string)

### PollForActivityTask



```js
amazonaws_swf.PollForActivityTask({}, context)
```

#### Parameters

### PollForDecisionTask



```js
amazonaws_swf.PollForDecisionTask({}, context)
```

#### Parameters
* maximumPageSize (string)
* nextPageToken (string)

### RecordActivityTaskHeartbeat



```js
amazonaws_swf.RecordActivityTaskHeartbeat({}, context)
```

#### Parameters

### RegisterActivityType



```js
amazonaws_swf.RegisterActivityType({}, context)
```

#### Parameters

### RegisterDomain



```js
amazonaws_swf.RegisterDomain({}, context)
```

#### Parameters

### RegisterWorkflowType



```js
amazonaws_swf.RegisterWorkflowType({}, context)
```

#### Parameters

### RequestCancelWorkflowExecution



```js
amazonaws_swf.RequestCancelWorkflowExecution({}, context)
```

#### Parameters

### RespondActivityTaskCanceled



```js
amazonaws_swf.RespondActivityTaskCanceled({}, context)
```

#### Parameters

### RespondActivityTaskCompleted



```js
amazonaws_swf.RespondActivityTaskCompleted({}, context)
```

#### Parameters

### RespondActivityTaskFailed



```js
amazonaws_swf.RespondActivityTaskFailed({}, context)
```

#### Parameters

### RespondDecisionTaskCompleted



```js
amazonaws_swf.RespondDecisionTaskCompleted({}, context)
```

#### Parameters

### SignalWorkflowExecution



```js
amazonaws_swf.SignalWorkflowExecution({}, context)
```

#### Parameters

### StartWorkflowExecution



```js
amazonaws_swf.StartWorkflowExecution({}, context)
```

#### Parameters

### TerminateWorkflowExecution



```js
amazonaws_swf.TerminateWorkflowExecution({}, context)
```

#### Parameters

