# @datafire/amazonaws_swf

Client library for Amazon Simple Workflow Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_swf
```

```js
let datafire = require('datafire');
let amazonaws_swf = require('@datafire/amazonaws_swf').create();

amazonaws_swf.CountClosedWorkflowExecutions({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Simple Workflow Service</fullname> <p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to coordinate work across distributed components. In Amazon SWF, a <i>task</i> represents a logical unit of work that is performed by a component of your workflow. Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and concurrency in accordance with the logical flow of the application.</p> <p>Amazon SWF gives you full control over implementing tasks and coordinating them without worrying about underlying complexities such as tracking their progress and maintaining their state.</p> <p>This documentation serves as reference only. For a broader overview of the Amazon SWF programming model, see the <i> <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a> </i>.</p>

## Actions
### CountClosedWorkflowExecutions



```js
amazonaws_swf.CountClosedWorkflowExecutions({}, context)
```


### CountOpenWorkflowExecutions



```js
amazonaws_swf.CountOpenWorkflowExecutions({}, context)
```


### CountPendingActivityTasks



```js
amazonaws_swf.CountPendingActivityTasks({}, context)
```


### CountPendingDecisionTasks



```js
amazonaws_swf.CountPendingDecisionTasks({}, context)
```


### DeprecateActivityType



```js
amazonaws_swf.DeprecateActivityType({}, context)
```


### DeprecateDomain



```js
amazonaws_swf.DeprecateDomain({}, context)
```


### DeprecateWorkflowType



```js
amazonaws_swf.DeprecateWorkflowType({}, context)
```


### DescribeActivityType



```js
amazonaws_swf.DescribeActivityType({}, context)
```


### DescribeDomain



```js
amazonaws_swf.DescribeDomain({}, context)
```


### DescribeWorkflowExecution



```js
amazonaws_swf.DescribeWorkflowExecution({}, context)
```


### DescribeWorkflowType



```js
amazonaws_swf.DescribeWorkflowType({}, context)
```


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


### RegisterActivityType



```js
amazonaws_swf.RegisterActivityType({}, context)
```


### RegisterDomain



```js
amazonaws_swf.RegisterDomain({}, context)
```


### RegisterWorkflowType



```js
amazonaws_swf.RegisterWorkflowType({}, context)
```


### RequestCancelWorkflowExecution



```js
amazonaws_swf.RequestCancelWorkflowExecution({}, context)
```


### RespondActivityTaskCanceled



```js
amazonaws_swf.RespondActivityTaskCanceled({}, context)
```


### RespondActivityTaskCompleted



```js
amazonaws_swf.RespondActivityTaskCompleted({}, context)
```


### RespondActivityTaskFailed



```js
amazonaws_swf.RespondActivityTaskFailed({}, context)
```


### RespondDecisionTaskCompleted



```js
amazonaws_swf.RespondDecisionTaskCompleted({}, context)
```


### SignalWorkflowExecution



```js
amazonaws_swf.SignalWorkflowExecution({}, context)
```


### StartWorkflowExecution



```js
amazonaws_swf.StartWorkflowExecution({}, context)
```


### TerminateWorkflowExecution



```js
amazonaws_swf.TerminateWorkflowExecution({}, context)
```


