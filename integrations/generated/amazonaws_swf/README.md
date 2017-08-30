# @datafire/amazonaws_swf

Client library for Amazon Simple Workflow Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_swf
```

```js
let datafire = require('datafire');
let amazonaws_swf = require('@datafire/amazonaws_swf').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_swf.CountClosedWorkflowExecutions({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Simple Workflow Service</fullname> <p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to coordinate work across distributed components. In Amazon SWF, a <i>task</i> represents a logical unit of work that is performed by a component of your workflow. Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and concurrency in accordance with the logical flow of the application.</p> <p>Amazon SWF gives you full control over implementing tasks and coordinating them without worrying about underlying complexities such as tracking their progress and maintaining their state.</p> <p>This documentation serves as reference only. For a broader overview of the Amazon SWF programming model, see the <i> <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a> </i>.</p>

## Actions
### CountClosedWorkflowExecutions



```js
amazonaws_swf.CountClosedWorkflowExecutions({
  "domain": ""
}, context)
```

#### Parameters
* closeStatusFilter (object) - Used to filter the closed workflow executions in visibility APIs by their close status.
* closeTimeFilter (object) - Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code>
* domain (string) **required**
* executionFilter (object) - Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.
* startTimeFilter (object) - Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code>
* tagFilter (object) - Used to filter the workflow executions in visibility APIs based on a tag.
* typeFilter (object) - Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.

### CountOpenWorkflowExecutions



```js
amazonaws_swf.CountOpenWorkflowExecutions({
  "domain": "",
  "startTimeFilter": {
    "oldestDate": ""
  }
}, context)
```

#### Parameters
* domain (string) **required**
* executionFilter (object) - Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.
* startTimeFilter (object) **required** - Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code>
* tagFilter (object) - Used to filter the workflow executions in visibility APIs based on a tag.
* typeFilter (object) - Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.

### CountPendingActivityTasks



```js
amazonaws_swf.CountPendingActivityTasks({
  "domain": "",
  "taskList": {
    "name": ""
  }
}, context)
```

#### Parameters
* domain (string) **required**
* taskList (object) **required** - Represents a task list.

### CountPendingDecisionTasks



```js
amazonaws_swf.CountPendingDecisionTasks({
  "domain": "",
  "taskList": {
    "name": ""
  }
}, context)
```

#### Parameters
* domain (string) **required**
* taskList (object) **required** - Represents a task list.

### DeprecateActivityType



```js
amazonaws_swf.DeprecateActivityType({
  "domain": "",
  "activityType": {
    "name": "",
    "version": ""
  }
}, context)
```

#### Parameters
* activityType (object) **required** - Represents an activity type.
* domain (string) **required**

### DeprecateDomain



```js
amazonaws_swf.DeprecateDomain({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**

### DeprecateWorkflowType



```js
amazonaws_swf.DeprecateWorkflowType({
  "domain": "",
  "workflowType": {
    "name": "",
    "version": ""
  }
}, context)
```

#### Parameters
* domain (string) **required**
* workflowType (object) **required** - Represents a workflow type.

### DescribeActivityType



```js
amazonaws_swf.DescribeActivityType({
  "domain": "",
  "activityType": {
    "name": "",
    "version": ""
  }
}, context)
```

#### Parameters
* activityType (object) **required** - Represents an activity type.
* domain (string) **required**

### DescribeDomain



```js
amazonaws_swf.DescribeDomain({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**

### DescribeWorkflowExecution



```js
amazonaws_swf.DescribeWorkflowExecution({
  "domain": "",
  "execution": {
    "workflowId": "",
    "runId": ""
  }
}, context)
```

#### Parameters
* domain (string) **required**
* execution (object) **required** - Represents a workflow execution.

### DescribeWorkflowType



```js
amazonaws_swf.DescribeWorkflowType({
  "domain": "",
  "workflowType": {
    "name": "",
    "version": ""
  }
}, context)
```

#### Parameters
* domain (string) **required**
* workflowType (object) **required** - Represents a workflow type.

### GetWorkflowExecutionHistory



```js
amazonaws_swf.GetWorkflowExecutionHistory({
  "domain": "",
  "execution": {
    "workflowId": "",
    "runId": ""
  }
}, context)
```

#### Parameters
* maximumPageSize (string)
* nextPageToken (string)
* domain (string) **required**
* execution (object) **required** - Represents a workflow execution.
* maximumPageSize (integer)
* nextPageToken (string)
* reverseOrder (boolean)

### ListActivityTypes



```js
amazonaws_swf.ListActivityTypes({
  "domain": "",
  "registrationStatus": ""
}, context)
```

#### Parameters
* maximumPageSize (string)
* nextPageToken (string)
* domain (string) **required**
* maximumPageSize (integer)
* name (string)
* nextPageToken (string)
* registrationStatus (string) **required**
* reverseOrder (boolean)

### ListClosedWorkflowExecutions



```js
amazonaws_swf.ListClosedWorkflowExecutions({
  "domain": ""
}, context)
```

#### Parameters
* maximumPageSize (string)
* nextPageToken (string)
* closeStatusFilter (object) - Used to filter the closed workflow executions in visibility APIs by their close status.
* closeTimeFilter (object) - Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code>
* domain (string) **required**
* executionFilter (object) - Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.
* maximumPageSize (integer)
* nextPageToken (string)
* reverseOrder (boolean)
* startTimeFilter (object) - Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code>
* tagFilter (object) - Used to filter the workflow executions in visibility APIs based on a tag.
* typeFilter (object) - Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.

### ListDomains



```js
amazonaws_swf.ListDomains({
  "registrationStatus": ""
}, context)
```

#### Parameters
* maximumPageSize (string)
* nextPageToken (string)
* maximumPageSize (integer)
* nextPageToken (string)
* registrationStatus (string) **required**
* reverseOrder (boolean)

### ListOpenWorkflowExecutions



```js
amazonaws_swf.ListOpenWorkflowExecutions({
  "domain": "",
  "startTimeFilter": {
    "oldestDate": ""
  }
}, context)
```

#### Parameters
* maximumPageSize (string)
* nextPageToken (string)
* domain (string) **required**
* executionFilter (object) - Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.
* maximumPageSize (integer)
* nextPageToken (string)
* reverseOrder (boolean)
* startTimeFilter (object) **required** - Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code>
* tagFilter (object) - Used to filter the workflow executions in visibility APIs based on a tag.
* typeFilter (object) - Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.

### ListWorkflowTypes



```js
amazonaws_swf.ListWorkflowTypes({
  "domain": "",
  "registrationStatus": ""
}, context)
```

#### Parameters
* maximumPageSize (string)
* nextPageToken (string)
* domain (string) **required**
* maximumPageSize (integer)
* name (string)
* nextPageToken (string)
* registrationStatus (string) **required**
* reverseOrder (boolean)

### PollForActivityTask



```js
amazonaws_swf.PollForActivityTask({
  "domain": "",
  "taskList": {
    "name": ""
  }
}, context)
```

#### Parameters
* domain (string) **required**
* identity (string)
* taskList (object) **required** - Represents a task list.

### PollForDecisionTask



```js
amazonaws_swf.PollForDecisionTask({
  "domain": "",
  "taskList": {
    "name": ""
  }
}, context)
```

#### Parameters
* maximumPageSize (string)
* nextPageToken (string)
* domain (string) **required**
* identity (string)
* maximumPageSize (integer)
* nextPageToken (string)
* reverseOrder (boolean)
* taskList (object) **required** - Represents a task list.

### RecordActivityTaskHeartbeat



```js
amazonaws_swf.RecordActivityTaskHeartbeat({
  "taskToken": ""
}, context)
```

#### Parameters
* details (string)
* taskToken (string) **required**

### RegisterActivityType



```js
amazonaws_swf.RegisterActivityType({
  "domain": "",
  "name": "",
  "version": ""
}, context)
```

#### Parameters
* defaultTaskHeartbeatTimeout (string)
* defaultTaskList (object) - Represents a task list.
* defaultTaskPriority (string)
* defaultTaskScheduleToCloseTimeout (string)
* defaultTaskScheduleToStartTimeout (string)
* defaultTaskStartToCloseTimeout (string)
* description (string)
* domain (string) **required**
* name (string) **required**
* version (string) **required**

### RegisterDomain



```js
amazonaws_swf.RegisterDomain({
  "name": "",
  "workflowExecutionRetentionPeriodInDays": ""
}, context)
```

#### Parameters
* description (string)
* name (string) **required**
* workflowExecutionRetentionPeriodInDays (string) **required**

### RegisterWorkflowType



```js
amazonaws_swf.RegisterWorkflowType({
  "domain": "",
  "name": "",
  "version": ""
}, context)
```

#### Parameters
* defaultChildPolicy (string)
* defaultExecutionStartToCloseTimeout (string)
* defaultLambdaRole (string)
* defaultTaskList (object) - Represents a task list.
* defaultTaskPriority (string)
* defaultTaskStartToCloseTimeout (string)
* description (string)
* domain (string) **required**
* name (string) **required**
* version (string) **required**

### RequestCancelWorkflowExecution



```js
amazonaws_swf.RequestCancelWorkflowExecution({
  "domain": "",
  "workflowId": ""
}, context)
```

#### Parameters
* domain (string) **required**
* runId (string)
* workflowId (string) **required**

### RespondActivityTaskCanceled



```js
amazonaws_swf.RespondActivityTaskCanceled({
  "taskToken": ""
}, context)
```

#### Parameters
* details (string)
* taskToken (string) **required**

### RespondActivityTaskCompleted



```js
amazonaws_swf.RespondActivityTaskCompleted({
  "taskToken": ""
}, context)
```

#### Parameters
* result (string)
* taskToken (string) **required**

### RespondActivityTaskFailed



```js
amazonaws_swf.RespondActivityTaskFailed({
  "taskToken": ""
}, context)
```

#### Parameters
* details (string)
* reason (string)
* taskToken (string) **required**

### RespondDecisionTaskCompleted



```js
amazonaws_swf.RespondDecisionTaskCompleted({
  "taskToken": ""
}, context)
```

#### Parameters
* decisions (array)
* executionContext (string)
* taskToken (string) **required**

### SignalWorkflowExecution



```js
amazonaws_swf.SignalWorkflowExecution({
  "domain": "",
  "workflowId": "",
  "signalName": ""
}, context)
```

#### Parameters
* domain (string) **required**
* input (string)
* runId (string)
* signalName (string) **required**
* workflowId (string) **required**

### StartWorkflowExecution



```js
amazonaws_swf.StartWorkflowExecution({
  "domain": "",
  "workflowId": "",
  "workflowType": {
    "name": "",
    "version": ""
  }
}, context)
```

#### Parameters
* childPolicy (string)
* domain (string) **required**
* executionStartToCloseTimeout (string)
* input (string)
* lambdaRole (string)
* tagList (array)
* taskList (object) - Represents a task list.
* taskPriority (string)
* taskStartToCloseTimeout (string)
* workflowId (string) **required**
* workflowType (object) **required** - Represents a workflow type.

### TerminateWorkflowExecution



```js
amazonaws_swf.TerminateWorkflowExecution({
  "domain": "",
  "workflowId": ""
}, context)
```

#### Parameters
* childPolicy (string)
* details (string)
* domain (string) **required**
* reason (string)
* runId (string)
* workflowId (string) **required**

