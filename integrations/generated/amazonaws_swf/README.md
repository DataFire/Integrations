# @datafire/amazonaws_swf

Client library for Amazon Simple Workflow Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_swf
```
```js
let amazonaws_swf = require('@datafire/amazonaws_swf').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Simple Workflow Service</fullname> <p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to coordinate work across distributed components. In Amazon SWF, a <i>task</i> represents a logical unit of work that is performed by a component of your workflow. Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and concurrency in accordance with the logical flow of the application.</p> <p>Amazon SWF gives you full control over implementing tasks and coordinating them without worrying about underlying complexities such as tracking their progress and maintaining their state.</p> <p>This documentation serves as reference only. For a broader overview of the Amazon SWF programming model, see the <i> <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a> </i>.</p>

## Actions

### CountClosedWorkflowExecutions



```js
amazonaws_swf.CountClosedWorkflowExecutions({
  "domain": null
}, context)
```

#### Input
* input `object`
  * closeStatusFilter
    * status **required**
  * closeTimeFilter
    * latestDate
    * oldestDate **required**
  * domain **required**
  * executionFilter
    * workflowId **required**
  * startTimeFilter
    * latestDate
    * oldestDate **required**
  * tagFilter
    * tag **required**
  * typeFilter
    * name **required**
    * version

#### Output
* output [WorkflowExecutionCount](#workflowexecutioncount)

### CountOpenWorkflowExecutions



```js
amazonaws_swf.CountOpenWorkflowExecutions({
  "domain": null,
  "startTimeFilter": null
}, context)
```

#### Input
* input `object`
  * domain **required**
  * executionFilter
    * workflowId **required**
  * startTimeFilter **required**
    * latestDate
    * oldestDate **required**
  * tagFilter
    * tag **required**
  * typeFilter
    * name **required**
    * version

#### Output
* output [WorkflowExecutionCount](#workflowexecutioncount)

### CountPendingActivityTasks



```js
amazonaws_swf.CountPendingActivityTasks({
  "domain": null,
  "taskList": null
}, context)
```

#### Input
* input `object`
  * domain **required**
  * taskList **required**
    * name **required**

#### Output
* output [PendingTaskCount](#pendingtaskcount)

### CountPendingDecisionTasks



```js
amazonaws_swf.CountPendingDecisionTasks({
  "domain": null,
  "taskList": null
}, context)
```

#### Input
* input `object`
  * domain **required**
  * taskList **required**
    * name **required**

#### Output
* output [PendingTaskCount](#pendingtaskcount)

### DeprecateActivityType



```js
amazonaws_swf.DeprecateActivityType({
  "domain": null,
  "activityType": null
}, context)
```

#### Input
* input `object`
  * activityType **required**
    * name **required**
    * version **required**
  * domain **required**

#### Output
*Output schema unknown*

### DeprecateDomain



```js
amazonaws_swf.DeprecateDomain({
  "name": null
}, context)
```

#### Input
* input `object`
  * name **required**

#### Output
*Output schema unknown*

### DeprecateWorkflowType



```js
amazonaws_swf.DeprecateWorkflowType({
  "domain": null,
  "workflowType": null
}, context)
```

#### Input
* input `object`
  * domain **required**
  * workflowType **required**
    * name **required**
    * version **required**

#### Output
*Output schema unknown*

### DescribeActivityType



```js
amazonaws_swf.DescribeActivityType({
  "domain": null,
  "activityType": null
}, context)
```

#### Input
* input `object`
  * activityType **required**
    * name **required**
    * version **required**
  * domain **required**

#### Output
* output [ActivityTypeDetail](#activitytypedetail)

### DescribeDomain



```js
amazonaws_swf.DescribeDomain({
  "name": null
}, context)
```

#### Input
* input `object`
  * name **required**

#### Output
* output [DomainDetail](#domaindetail)

### DescribeWorkflowExecution



```js
amazonaws_swf.DescribeWorkflowExecution({
  "domain": null,
  "execution": null
}, context)
```

#### Input
* input `object`
  * domain **required**
  * execution **required**
    * runId **required**
    * workflowId **required**

#### Output
* output [WorkflowExecutionDetail](#workflowexecutiondetail)

### DescribeWorkflowType



```js
amazonaws_swf.DescribeWorkflowType({
  "domain": null,
  "workflowType": null
}, context)
```

#### Input
* input `object`
  * domain **required**
  * workflowType **required**
    * name **required**
    * version **required**

#### Output
* output [WorkflowTypeDetail](#workflowtypedetail)

### GetWorkflowExecutionHistory



```js
amazonaws_swf.GetWorkflowExecutionHistory({
  "domain": null,
  "execution": null
}, context)
```

#### Input
* input `object`
  * maximumPageSize `string`
  * nextPageToken `string`
  * domain **required**
  * execution **required**
    * runId **required**
    * workflowId **required**
  * maximumPageSize
  * nextPageToken
  * reverseOrder

#### Output
* output [History](#history)

### ListActivityTypes



```js
amazonaws_swf.ListActivityTypes({
  "domain": null,
  "registrationStatus": null
}, context)
```

#### Input
* input `object`
  * maximumPageSize `string`
  * nextPageToken `string`
  * domain **required**
  * maximumPageSize
  * name
  * nextPageToken
  * registrationStatus **required**
  * reverseOrder

#### Output
* output [ActivityTypeInfos](#activitytypeinfos)

### ListClosedWorkflowExecutions



```js
amazonaws_swf.ListClosedWorkflowExecutions({
  "domain": null
}, context)
```

#### Input
* input `object`
  * maximumPageSize `string`
  * nextPageToken `string`
  * closeStatusFilter
    * status **required**
  * closeTimeFilter
    * latestDate
    * oldestDate **required**
  * domain **required**
  * executionFilter
    * workflowId **required**
  * maximumPageSize
  * nextPageToken
  * reverseOrder
  * startTimeFilter
    * latestDate
    * oldestDate **required**
  * tagFilter
    * tag **required**
  * typeFilter
    * name **required**
    * version

#### Output
* output [WorkflowExecutionInfos](#workflowexecutioninfos)

### ListDomains



```js
amazonaws_swf.ListDomains({
  "registrationStatus": null
}, context)
```

#### Input
* input `object`
  * maximumPageSize `string`
  * nextPageToken `string`
  * maximumPageSize
  * nextPageToken
  * registrationStatus **required**
  * reverseOrder

#### Output
* output [DomainInfos](#domaininfos)

### ListOpenWorkflowExecutions



```js
amazonaws_swf.ListOpenWorkflowExecutions({
  "domain": null,
  "startTimeFilter": null
}, context)
```

#### Input
* input `object`
  * maximumPageSize `string`
  * nextPageToken `string`
  * domain **required**
  * executionFilter
    * workflowId **required**
  * maximumPageSize
  * nextPageToken
  * reverseOrder
  * startTimeFilter **required**
    * latestDate
    * oldestDate **required**
  * tagFilter
    * tag **required**
  * typeFilter
    * name **required**
    * version

#### Output
* output [WorkflowExecutionInfos](#workflowexecutioninfos)

### ListTagsForResource



```js
amazonaws_swf.ListTagsForResource({
  "resourceArn": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### ListWorkflowTypes



```js
amazonaws_swf.ListWorkflowTypes({
  "domain": null,
  "registrationStatus": null
}, context)
```

#### Input
* input `object`
  * maximumPageSize `string`
  * nextPageToken `string`
  * domain **required**
  * maximumPageSize
  * name
  * nextPageToken
  * registrationStatus **required**
  * reverseOrder

#### Output
* output [WorkflowTypeInfos](#workflowtypeinfos)

### PollForActivityTask



```js
amazonaws_swf.PollForActivityTask({
  "domain": null,
  "taskList": null
}, context)
```

#### Input
* input `object`
  * domain **required**
  * identity
  * taskList **required**
    * name **required**

#### Output
* output [ActivityTask](#activitytask)

### PollForDecisionTask



```js
amazonaws_swf.PollForDecisionTask({
  "domain": null,
  "taskList": null
}, context)
```

#### Input
* input `object`
  * maximumPageSize `string`
  * nextPageToken `string`
  * domain **required**
  * identity
  * maximumPageSize
  * nextPageToken
  * reverseOrder
  * taskList **required**
    * name **required**

#### Output
* output [DecisionTask](#decisiontask)

### RecordActivityTaskHeartbeat



```js
amazonaws_swf.RecordActivityTaskHeartbeat({
  "taskToken": null
}, context)
```

#### Input
* input `object`
  * details
  * taskToken **required**

#### Output
* output [ActivityTaskStatus](#activitytaskstatus)

### RegisterActivityType



```js
amazonaws_swf.RegisterActivityType({
  "domain": null,
  "name": null,
  "version": null
}, context)
```

#### Input
* input `object`
  * defaultTaskHeartbeatTimeout
  * defaultTaskList
    * name **required**
  * defaultTaskPriority
  * defaultTaskScheduleToCloseTimeout
  * defaultTaskScheduleToStartTimeout
  * defaultTaskStartToCloseTimeout
  * description
  * domain **required**
  * name **required**
  * version **required**

#### Output
*Output schema unknown*

### RegisterDomain



```js
amazonaws_swf.RegisterDomain({
  "name": null,
  "workflowExecutionRetentionPeriodInDays": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [ResourceTag](#resourcetag)
  * description
  * name **required**
  * workflowExecutionRetentionPeriodInDays **required**

#### Output
*Output schema unknown*

### RegisterWorkflowType



```js
amazonaws_swf.RegisterWorkflowType({
  "domain": null,
  "name": null,
  "version": null
}, context)
```

#### Input
* input `object`
  * defaultChildPolicy
  * defaultExecutionStartToCloseTimeout
  * defaultLambdaRole
  * defaultTaskList
    * name **required**
  * defaultTaskPriority
  * defaultTaskStartToCloseTimeout
  * description
  * domain **required**
  * name **required**
  * version **required**

#### Output
*Output schema unknown*

### RequestCancelWorkflowExecution



```js
amazonaws_swf.RequestCancelWorkflowExecution({
  "domain": null,
  "workflowId": null
}, context)
```

#### Input
* input `object`
  * domain **required**
  * runId
  * workflowId **required**

#### Output
*Output schema unknown*

### RespondActivityTaskCanceled



```js
amazonaws_swf.RespondActivityTaskCanceled({
  "taskToken": null
}, context)
```

#### Input
* input `object`
  * details
  * taskToken **required**

#### Output
*Output schema unknown*

### RespondActivityTaskCompleted



```js
amazonaws_swf.RespondActivityTaskCompleted({
  "taskToken": null
}, context)
```

#### Input
* input `object`
  * result
  * taskToken **required**

#### Output
*Output schema unknown*

### RespondActivityTaskFailed



```js
amazonaws_swf.RespondActivityTaskFailed({
  "taskToken": null
}, context)
```

#### Input
* input `object`
  * details
  * reason
  * taskToken **required**

#### Output
*Output schema unknown*

### RespondDecisionTaskCompleted



```js
amazonaws_swf.RespondDecisionTaskCompleted({
  "taskToken": null
}, context)
```

#### Input
* input `object`
  * decisions
    * items [Decision](#decision)
  * executionContext
  * taskToken **required**

#### Output
*Output schema unknown*

### SignalWorkflowExecution



```js
amazonaws_swf.SignalWorkflowExecution({
  "domain": null,
  "workflowId": null,
  "signalName": null
}, context)
```

#### Input
* input `object`
  * domain **required**
  * input
  * runId
  * signalName **required**
  * workflowId **required**

#### Output
*Output schema unknown*

### StartWorkflowExecution



```js
amazonaws_swf.StartWorkflowExecution({
  "domain": null,
  "workflowId": null,
  "workflowType": null
}, context)
```

#### Input
* input `object`
  * childPolicy
  * domain **required**
  * executionStartToCloseTimeout
  * input
  * lambdaRole
  * tagList
    * items [Tag](#tag)
  * taskList
    * name **required**
  * taskPriority
  * taskStartToCloseTimeout
  * workflowId **required**
  * workflowType **required**
    * name **required**
    * version **required**

#### Output
* output [Run](#run)

### TagResource



```js
amazonaws_swf.TagResource({
  "resourceArn": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [ResourceTag](#resourcetag)
  * resourceArn **required**

#### Output
*Output schema unknown*

### TerminateWorkflowExecution



```js
amazonaws_swf.TerminateWorkflowExecution({
  "domain": null,
  "workflowId": null
}, context)
```

#### Input
* input `object`
  * childPolicy
  * details
  * domain **required**
  * reason
  * runId
  * workflowId **required**

#### Output
*Output schema unknown*

### UndeprecateActivityType



```js
amazonaws_swf.UndeprecateActivityType({
  "domain": null,
  "activityType": null
}, context)
```

#### Input
* input `object`
  * activityType **required**
    * name **required**
    * version **required**
  * domain **required**

#### Output
*Output schema unknown*

### UndeprecateDomain



```js
amazonaws_swf.UndeprecateDomain({
  "name": null
}, context)
```

#### Input
* input `object`
  * name **required**

#### Output
*Output schema unknown*

### UndeprecateWorkflowType



```js
amazonaws_swf.UndeprecateWorkflowType({
  "domain": null,
  "workflowType": null
}, context)
```

#### Input
* input `object`
  * domain **required**
  * workflowType **required**
    * name **required**
    * version **required**

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_swf.UntagResource({
  "resourceArn": null,
  "tagKeys": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [ResourceTagKey](#resourcetagkey)

#### Output
*Output schema unknown*



## Definitions

### ActivityId
* ActivityId `string`

### ActivityTask
* ActivityTask `object`: Unit of work sent to an activity worker.
  * activityId **required**
  * activityType **required**
    * name **required**
    * version **required**
  * input
  * startedEventId **required**
  * taskToken **required**
  * workflowExecution **required**
    * runId **required**
    * workflowId **required**

### ActivityTaskCancelRequestedEventAttributes
* ActivityTaskCancelRequestedEventAttributes `object`: Provides the details of the <code>ActivityTaskCancelRequested</code> event.
  * activityId **required**
  * decisionTaskCompletedEventId **required**

### ActivityTaskCanceledEventAttributes
* ActivityTaskCanceledEventAttributes `object`: Provides the details of the <code>ActivityTaskCanceled</code> event.
  * details
  * latestCancelRequestedEventId
  * scheduledEventId **required**
  * startedEventId **required**

### ActivityTaskCompletedEventAttributes
* ActivityTaskCompletedEventAttributes `object`: Provides the details of the <code>ActivityTaskCompleted</code> event.
  * result
  * scheduledEventId **required**
  * startedEventId **required**

### ActivityTaskFailedEventAttributes
* ActivityTaskFailedEventAttributes `object`: Provides the details of the <code>ActivityTaskFailed</code> event.
  * details
  * reason
  * scheduledEventId **required**
  * startedEventId **required**

### ActivityTaskScheduledEventAttributes
* ActivityTaskScheduledEventAttributes `object`: Provides the details of the <code>ActivityTaskScheduled</code> event.
  * activityId **required**
  * activityType **required**
    * name **required**
    * version **required**
  * control
  * decisionTaskCompletedEventId **required**
  * heartbeatTimeout
  * input
  * scheduleToCloseTimeout
  * scheduleToStartTimeout
  * startToCloseTimeout
  * taskList **required**
    * name **required**
  * taskPriority

### ActivityTaskStartedEventAttributes
* ActivityTaskStartedEventAttributes `object`: Provides the details of the <code>ActivityTaskStarted</code> event.
  * identity
  * scheduledEventId **required**

### ActivityTaskStatus
* ActivityTaskStatus `object`: Status information about an activity task.
  * cancelRequested **required**

### ActivityTaskTimedOutEventAttributes
* ActivityTaskTimedOutEventAttributes `object`: Provides the details of the <code>ActivityTaskTimedOut</code> event.
  * details
  * scheduledEventId **required**
  * startedEventId **required**
  * timeoutType **required**

### ActivityTaskTimeoutType
* ActivityTaskTimeoutType `string` (values: START_TO_CLOSE, SCHEDULE_TO_START, SCHEDULE_TO_CLOSE, HEARTBEAT)

### ActivityType
* ActivityType `object`: Represents an activity type.
  * name **required**
  * version **required**

### ActivityTypeConfiguration
* ActivityTypeConfiguration `object`: Configuration settings registered with the activity type.
  * defaultTaskHeartbeatTimeout
  * defaultTaskList
    * name **required**
  * defaultTaskPriority
  * defaultTaskScheduleToCloseTimeout
  * defaultTaskScheduleToStartTimeout
  * defaultTaskStartToCloseTimeout

### ActivityTypeDetail
* ActivityTypeDetail `object`: Detailed information about an activity type.
  * configuration **required**
    * defaultTaskHeartbeatTimeout
    * defaultTaskList
      * name **required**
    * defaultTaskPriority
    * defaultTaskScheduleToCloseTimeout
    * defaultTaskScheduleToStartTimeout
    * defaultTaskStartToCloseTimeout
  * typeInfo **required**
    * activityType **required**
      * name **required**
      * version **required**
    * creationDate **required**
    * deprecationDate
    * description
    * status **required**

### ActivityTypeInfo
* ActivityTypeInfo `object`: Detailed information about an activity type.
  * activityType **required**
    * name **required**
    * version **required**
  * creationDate **required**
  * deprecationDate
  * description
  * status **required**

### ActivityTypeInfoList
* ActivityTypeInfoList `array`
  * items [ActivityTypeInfo](#activitytypeinfo)

### ActivityTypeInfos
* ActivityTypeInfos `object`: Contains a paginated list of activity type information structures.
  * nextPageToken
  * typeInfos **required**
    * items [ActivityTypeInfo](#activitytypeinfo)

### Arn
* Arn `string`

### CancelTimerDecisionAttributes
* CancelTimerDecisionAttributes `object`: <p>Provides the details of the <code>CancelTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * timerId **required**

### CancelTimerFailedCause
* CancelTimerFailedCause `string` (values: TIMER_ID_UNKNOWN, OPERATION_NOT_PERMITTED)

### CancelTimerFailedEventAttributes
* CancelTimerFailedEventAttributes `object`: Provides the details of the <code>CancelTimerFailed</code> event.
  * cause **required**
  * decisionTaskCompletedEventId **required**
  * timerId **required**

### CancelWorkflowExecutionDecisionAttributes
* CancelWorkflowExecutionDecisionAttributes `object`: <p>Provides the details of the <code>CancelWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * details

### CancelWorkflowExecutionFailedCause
* CancelWorkflowExecutionFailedCause `string` (values: UNHANDLED_DECISION, OPERATION_NOT_PERMITTED)

### CancelWorkflowExecutionFailedEventAttributes
* CancelWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>CancelWorkflowExecutionFailed</code> event.
  * cause **required**
  * decisionTaskCompletedEventId **required**

### Canceled
* Canceled `boolean`

### CauseMessage
* CauseMessage `string`

### ChildPolicy
* ChildPolicy `string` (values: TERMINATE, REQUEST_CANCEL, ABANDON)

### ChildWorkflowExecutionCanceledEventAttributes
* ChildWorkflowExecutionCanceledEventAttributes `object`: Provide details of the <code>ChildWorkflowExecutionCanceled</code> event.
  * details
  * initiatedEventId **required**
  * startedEventId **required**
  * workflowExecution **required**
    * runId **required**
    * workflowId **required**
  * workflowType **required**
    * name **required**
    * version **required**

### ChildWorkflowExecutionCompletedEventAttributes
* ChildWorkflowExecutionCompletedEventAttributes `object`: Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event.
  * initiatedEventId **required**
  * result
  * startedEventId **required**
  * workflowExecution **required**
    * runId **required**
    * workflowId **required**
  * workflowType **required**
    * name **required**
    * version **required**

### ChildWorkflowExecutionFailedEventAttributes
* ChildWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>ChildWorkflowExecutionFailed</code> event.
  * details
  * initiatedEventId **required**
  * reason
  * startedEventId **required**
  * workflowExecution **required**
    * runId **required**
    * workflowId **required**
  * workflowType **required**
    * name **required**
    * version **required**

### ChildWorkflowExecutionStartedEventAttributes
* ChildWorkflowExecutionStartedEventAttributes `object`: Provides the details of the <code>ChildWorkflowExecutionStarted</code> event.
  * initiatedEventId **required**
  * workflowExecution **required**
    * runId **required**
    * workflowId **required**
  * workflowType **required**
    * name **required**
    * version **required**

### ChildWorkflowExecutionTerminatedEventAttributes
* ChildWorkflowExecutionTerminatedEventAttributes `object`: Provides the details of the <code>ChildWorkflowExecutionTerminated</code> event.
  * initiatedEventId **required**
  * startedEventId **required**
  * workflowExecution **required**
    * runId **required**
    * workflowId **required**
  * workflowType **required**
    * name **required**
    * version **required**

### ChildWorkflowExecutionTimedOutEventAttributes
* ChildWorkflowExecutionTimedOutEventAttributes `object`: Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event.
  * initiatedEventId **required**
  * startedEventId **required**
  * timeoutType **required**
  * workflowExecution **required**
    * runId **required**
    * workflowId **required**
  * workflowType **required**
    * name **required**
    * version **required**

### CloseStatus
* CloseStatus `string` (values: COMPLETED, FAILED, CANCELED, TERMINATED, CONTINUED_AS_NEW, TIMED_OUT)

### CloseStatusFilter
* CloseStatusFilter `object`: Used to filter the closed workflow executions in visibility APIs by their close status.
  * status **required**

### CompleteWorkflowExecutionDecisionAttributes
* CompleteWorkflowExecutionDecisionAttributes `object`: <p>Provides the details of the <code>CompleteWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * result

### CompleteWorkflowExecutionFailedCause
* CompleteWorkflowExecutionFailedCause `string` (values: UNHANDLED_DECISION, OPERATION_NOT_PERMITTED)

### CompleteWorkflowExecutionFailedEventAttributes
* CompleteWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event.
  * cause **required**
  * decisionTaskCompletedEventId **required**

### ContinueAsNewWorkflowExecutionDecisionAttributes
* ContinueAsNewWorkflowExecutionDecisionAttributes `object`: <p>Provides the details of the <code>ContinueAsNewWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tag</code> – A tag used to identify the workflow execution</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * childPolicy
  * executionStartToCloseTimeout
  * input
  * lambdaRole
  * tagList
    * items [Tag](#tag)
  * taskList
    * name **required**
  * taskPriority
  * taskStartToCloseTimeout
  * workflowTypeVersion

### ContinueAsNewWorkflowExecutionFailedCause
* ContinueAsNewWorkflowExecutionFailedCause `string` (values: UNHANDLED_DECISION, WORKFLOW_TYPE_DEPRECATED, WORKFLOW_TYPE_DOES_NOT_EXIST, DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED, DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED, DEFAULT_TASK_LIST_UNDEFINED, DEFAULT_CHILD_POLICY_UNDEFINED, CONTINUE_AS_NEW_WORKFLOW_EXECUTION_RATE_EXCEEDED, OPERATION_NOT_PERMITTED)

### ContinueAsNewWorkflowExecutionFailedEventAttributes
* ContinueAsNewWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event.
  * cause **required**
  * decisionTaskCompletedEventId **required**

### Count
* Count `integer`

### CountClosedWorkflowExecutionsInput
* CountClosedWorkflowExecutionsInput `object`
  * closeStatusFilter
    * status **required**
  * closeTimeFilter
    * latestDate
    * oldestDate **required**
  * domain **required**
  * executionFilter
    * workflowId **required**
  * startTimeFilter
    * latestDate
    * oldestDate **required**
  * tagFilter
    * tag **required**
  * typeFilter
    * name **required**
    * version

### CountOpenWorkflowExecutionsInput
* CountOpenWorkflowExecutionsInput `object`
  * domain **required**
  * executionFilter
    * workflowId **required**
  * startTimeFilter **required**
    * latestDate
    * oldestDate **required**
  * tagFilter
    * tag **required**
  * typeFilter
    * name **required**
    * version

### CountPendingActivityTasksInput
* CountPendingActivityTasksInput `object`
  * domain **required**
  * taskList **required**
    * name **required**

### CountPendingDecisionTasksInput
* CountPendingDecisionTasksInput `object`
  * domain **required**
  * taskList **required**
    * name **required**

### Data
* Data `string`

### Decision
* Decision `object`: <p>Specifies a decision made by the decider. A decision can be one of these types:</p> <ul> <li> <p> <code>CancelTimer</code> – Cancels a previously started timer and records a <code>TimerCanceled</code> event in the history.</p> </li> <li> <p> <code>CancelWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCanceled</code> event in the history.</p> </li> <li> <p> <code>CompleteWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCompleted</code> event in the history .</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecution</code> – Closes the workflow execution and starts a new workflow execution of the same type using the same workflow ID and a unique run Id. A <code>WorkflowExecutionContinuedAsNew</code> event is recorded in the history.</p> </li> <li> <p> <code>FailWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionFailed</code> event in the history.</p> </li> <li> <p> <code>RecordMarker</code> – Records a <code>MarkerRecorded</code> event in the history. Markers can be used for adding custom information in the history for instance to let deciders know that they don't need to look at the history beyond the marker event.</p> </li> <li> <p> <code>RequestCancelActivityTask</code> – Attempts to cancel a previously scheduled activity task. If the activity task was scheduled but has not been assigned to a worker, then it is canceled. If the activity task was already assigned to a worker, then the worker is informed that cancellation has been requested in the response to <a>RecordActivityTaskHeartbeat</a>.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecution</code> – Requests that a request be made to cancel the specified external workflow execution and records a <code>RequestCancelExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>ScheduleActivityTask</code> – Schedules an activity task.</p> </li> <li> <p> <code>SignalExternalWorkflowExecution</code> – Requests a signal to be delivered to the specified external workflow execution and records a <code>SignalExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>StartChildWorkflowExecution</code> – Requests that a child workflow execution be started and records a <code>StartChildWorkflowExecutionInitiated</code> event in the history. The child workflow execution is a separate workflow execution with its own history.</p> </li> <li> <p> <code>StartTimer</code> – Starts a timer for this workflow execution and records a <code>TimerStarted</code> event in the history. This timer fires after the specified delay and record a <code>TimerFired</code> event.</p> </li> </ul> <p> <b>Access Control</b> </p> <p>If you grant permission to use <code>RespondDecisionTaskCompleted</code>, you can use IAM policies to express permissions for the list of decisions returned by this action as if they were members of the API. Treating decisions as a pseudo API maintains a uniform conceptual model and helps keep policies readable. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <p> <b>Decision Failure</b> </p> <p>Decisions can fail for several reasons</p> <ul> <li> <p>The ordering of decisions should follow a logical flow. Some decisions might not make sense in the current context of the workflow execution and therefore fails.</p> </li> <li> <p>A limit on your account was reached.</p> </li> <li> <p>The decision lacks sufficient permissions.</p> </li> </ul> <p>One of the following events might be added to the history to indicate an error. The event attribute's <code>cause</code> parameter indicates the cause. If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <ul> <li> <p> <code>ScheduleActivityTaskFailed</code> – A <code>ScheduleActivityTask</code> decision failed. This could happen if the activity type specified in the decision isn't registered, is in a deprecated state, or the decision isn't properly configured.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – A <code>RequestCancelActivityTask</code> decision failed. This could happen if there is no open activity task with the specified activityId.</p> </li> <li> <p> <code>StartTimerFailed</code> – A <code>StartTimer</code> decision failed. This could happen if there is another open timer with the same timerId.</p> </li> <li> <p> <code>CancelTimerFailed</code> – A <code>CancelTimer</code> decision failed. This could happen if there is no open timer with the specified timerId.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – A <code>StartChildWorkflowExecution</code> decision failed. This could happen if the workflow type specified isn't registered, is deprecated, or the decision isn't properly configured.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – A <code>SignalExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – A <code>RequestCancelExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A <code>CancelWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – A <code>CompleteWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – A <code>ContinueAsNewWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution or the ContinueAsNewWorkflowExecution decision was not configured correctly.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A <code>FailWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> </ul> <p>The preceding error events might occur due to an error in the decider logic, which might put the workflow execution in an unstable state The cause field in the event structure for the error event indicates the cause of the error.</p> <note> <p>A workflow execution may be closed by the decider by returning one of the following decisions when completing a decision task: <code>CompleteWorkflowExecution</code>, <code>FailWorkflowExecution</code>, <code>CancelWorkflowExecution</code> and <code>ContinueAsNewWorkflowExecution</code>. An <code>UnhandledDecision</code> fault is returned if a workflow closing decision is specified and a signal or activity event had been added to the history while the decision task was being performed by the decider. Unlike the above situations which are logic issues, this fault is always possible because of race conditions in a distributed system. The right action here is to call <a>RespondDecisionTaskCompleted</a> without any decisions. This would result in another decision task with these new events included in the history. The decider should handle the new events and may decide to close the workflow execution.</p> </note> <p> <b>How to Code a Decision</b> </p> <p>You code a decision by first setting the decision type field to one of the above decision values, and then set the corresponding attributes field shown below:</p> <ul> <li> <p> <code> <a>ScheduleActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CompleteWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>FailWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>ContinueAsNewWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RecordMarkerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>SignalExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartChildWorkflowExecutionDecisionAttributes</a> </code> </p> </li> </ul>
  * cancelTimerDecisionAttributes
    * timerId **required**
  * cancelWorkflowExecutionDecisionAttributes
    * details
  * completeWorkflowExecutionDecisionAttributes
    * result
  * continueAsNewWorkflowExecutionDecisionAttributes
    * childPolicy
    * executionStartToCloseTimeout
    * input
    * lambdaRole
    * tagList
      * items [Tag](#tag)
    * taskList
      * name **required**
    * taskPriority
    * taskStartToCloseTimeout
    * workflowTypeVersion
  * decisionType **required**
  * failWorkflowExecutionDecisionAttributes
    * details
    * reason
  * recordMarkerDecisionAttributes
    * details
    * markerName **required**
  * requestCancelActivityTaskDecisionAttributes
    * activityId **required**
  * requestCancelExternalWorkflowExecutionDecisionAttributes
    * control
    * runId
    * workflowId **required**
  * scheduleActivityTaskDecisionAttributes
    * activityId **required**
    * activityType **required**
      * name **required**
      * version **required**
    * control
    * heartbeatTimeout
    * input
    * scheduleToCloseTimeout
    * scheduleToStartTimeout
    * startToCloseTimeout
    * taskList
      * name **required**
    * taskPriority
  * scheduleLambdaFunctionDecisionAttributes
    * control
    * id **required**
    * input
    * name **required**
    * startToCloseTimeout
  * signalExternalWorkflowExecutionDecisionAttributes
    * control
    * input
    * runId
    * signalName **required**
    * workflowId **required**
  * startChildWorkflowExecutionDecisionAttributes
    * childPolicy
    * control
    * executionStartToCloseTimeout
    * input
    * lambdaRole
    * tagList
      * items [Tag](#tag)
    * taskList
      * name **required**
    * taskPriority
    * taskStartToCloseTimeout
    * workflowId **required**
    * workflowType **required**
      * name **required**
      * version **required**
  * startTimerDecisionAttributes
    * control
    * startToFireTimeout **required**
    * timerId **required**

### DecisionList
* DecisionList `array`
  * items [Decision](#decision)

### DecisionTask
* DecisionTask `object`: A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.
  * events **required**
    * items [HistoryEvent](#historyevent)
  * nextPageToken
  * previousStartedEventId
  * startedEventId **required**
  * taskToken **required**
  * workflowExecution **required**
    * runId **required**
    * workflowId **required**
  * workflowType **required**
    * name **required**
    * version **required**

### DecisionTaskCompletedEventAttributes
* DecisionTaskCompletedEventAttributes `object`: Provides the details of the <code>DecisionTaskCompleted</code> event.
  * executionContext
  * scheduledEventId **required**
  * startedEventId **required**

### DecisionTaskScheduledEventAttributes
* DecisionTaskScheduledEventAttributes `object`: Provides details about the <code>DecisionTaskScheduled</code> event.
  * startToCloseTimeout
  * taskList **required**
    * name **required**
  * taskPriority

### DecisionTaskStartedEventAttributes
* DecisionTaskStartedEventAttributes `object`: Provides the details of the <code>DecisionTaskStarted</code> event.
  * identity
  * scheduledEventId **required**

### DecisionTaskTimedOutEventAttributes
* DecisionTaskTimedOutEventAttributes `object`: Provides the details of the <code>DecisionTaskTimedOut</code> event.
  * scheduledEventId **required**
  * startedEventId **required**
  * timeoutType **required**

### DecisionTaskTimeoutType
* DecisionTaskTimeoutType `string` (values: START_TO_CLOSE)

### DecisionType
* DecisionType `string` (values: ScheduleActivityTask, RequestCancelActivityTask, CompleteWorkflowExecution, FailWorkflowExecution, CancelWorkflowExecution, ContinueAsNewWorkflowExecution, RecordMarker, StartTimer, CancelTimer, SignalExternalWorkflowExecution, RequestCancelExternalWorkflowExecution, StartChildWorkflowExecution, ScheduleLambdaFunction)

### DefaultUndefinedFault


### DeprecateActivityTypeInput
* DeprecateActivityTypeInput `object`
  * activityType **required**
    * name **required**
    * version **required**
  * domain **required**

### DeprecateDomainInput
* DeprecateDomainInput `object`
  * name **required**

### DeprecateWorkflowTypeInput
* DeprecateWorkflowTypeInput `object`
  * domain **required**
  * workflowType **required**
    * name **required**
    * version **required**

### DescribeActivityTypeInput
* DescribeActivityTypeInput `object`
  * activityType **required**
    * name **required**
    * version **required**
  * domain **required**

### DescribeDomainInput
* DescribeDomainInput `object`
  * name **required**

### DescribeWorkflowExecutionInput
* DescribeWorkflowExecutionInput `object`
  * domain **required**
  * execution **required**
    * runId **required**
    * workflowId **required**

### DescribeWorkflowTypeInput
* DescribeWorkflowTypeInput `object`
  * domain **required**
  * workflowType **required**
    * name **required**
    * version **required**

### Description
* Description `string`

### DomainAlreadyExistsFault


### DomainConfiguration
* DomainConfiguration `object`: Contains the configuration settings of a domain.
  * workflowExecutionRetentionPeriodInDays **required**

### DomainDeprecatedFault


### DomainDetail
* DomainDetail `object`: Contains details of a domain.
  * configuration **required**
    * workflowExecutionRetentionPeriodInDays **required**
  * domainInfo **required**
    * arn
    * description
    * name **required**
    * status **required**

### DomainInfo
* DomainInfo `object`: Contains general information about a domain.
  * arn
  * description
  * name **required**
  * status **required**

### DomainInfoList
* DomainInfoList `array`
  * items [DomainInfo](#domaininfo)

### DomainInfos
* DomainInfos `object`: Contains a paginated collection of DomainInfo structures.
  * domainInfos **required**
    * items [DomainInfo](#domaininfo)
  * nextPageToken

### DomainName
* DomainName `string`

### DurationInDays
* DurationInDays `string`

### DurationInSeconds
* DurationInSeconds `string`

### DurationInSecondsOptional
* DurationInSecondsOptional `string`

### EventId
* EventId `integer`

### EventType
* EventType `string` (values: WorkflowExecutionStarted, WorkflowExecutionCancelRequested, WorkflowExecutionCompleted, CompleteWorkflowExecutionFailed, WorkflowExecutionFailed, FailWorkflowExecutionFailed, WorkflowExecutionTimedOut, WorkflowExecutionCanceled, CancelWorkflowExecutionFailed, WorkflowExecutionContinuedAsNew, ContinueAsNewWorkflowExecutionFailed, WorkflowExecutionTerminated, DecisionTaskScheduled, DecisionTaskStarted, DecisionTaskCompleted, DecisionTaskTimedOut, ActivityTaskScheduled, ScheduleActivityTaskFailed, ActivityTaskStarted, ActivityTaskCompleted, ActivityTaskFailed, ActivityTaskTimedOut, ActivityTaskCanceled, ActivityTaskCancelRequested, RequestCancelActivityTaskFailed, WorkflowExecutionSignaled, MarkerRecorded, RecordMarkerFailed, TimerStarted, StartTimerFailed, TimerFired, TimerCanceled, CancelTimerFailed, StartChildWorkflowExecutionInitiated, StartChildWorkflowExecutionFailed, ChildWorkflowExecutionStarted, ChildWorkflowExecutionCompleted, ChildWorkflowExecutionFailed, ChildWorkflowExecutionTimedOut, ChildWorkflowExecutionCanceled, ChildWorkflowExecutionTerminated, SignalExternalWorkflowExecutionInitiated, SignalExternalWorkflowExecutionFailed, ExternalWorkflowExecutionSignaled, RequestCancelExternalWorkflowExecutionInitiated, RequestCancelExternalWorkflowExecutionFailed, ExternalWorkflowExecutionCancelRequested, LambdaFunctionScheduled, LambdaFunctionStarted, LambdaFunctionCompleted, LambdaFunctionFailed, LambdaFunctionTimedOut, ScheduleLambdaFunctionFailed, StartLambdaFunctionFailed)

### ExecutionStatus
* ExecutionStatus `string` (values: OPEN, CLOSED)

### ExecutionTimeFilter
* ExecutionTimeFilter `object`: Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code> 
  * latestDate
  * oldestDate **required**

### ExternalWorkflowExecutionCancelRequestedEventAttributes
* ExternalWorkflowExecutionCancelRequestedEventAttributes `object`: Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event.
  * initiatedEventId **required**
  * workflowExecution **required**
    * runId **required**
    * workflowId **required**

### ExternalWorkflowExecutionSignaledEventAttributes
* ExternalWorkflowExecutionSignaledEventAttributes `object`: Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event.
  * initiatedEventId **required**
  * workflowExecution **required**
    * runId **required**
    * workflowId **required**

### FailWorkflowExecutionDecisionAttributes
* FailWorkflowExecutionDecisionAttributes `object`: <p>Provides the details of the <code>FailWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * details
  * reason

### FailWorkflowExecutionFailedCause
* FailWorkflowExecutionFailedCause `string` (values: UNHANDLED_DECISION, OPERATION_NOT_PERMITTED)

### FailWorkflowExecutionFailedEventAttributes
* FailWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>FailWorkflowExecutionFailed</code> event.
  * cause **required**
  * decisionTaskCompletedEventId **required**

### FailureReason
* FailureReason `string`

### FunctionId
* FunctionId `string`

### FunctionInput
* FunctionInput `string`

### FunctionName
* FunctionName `string`

### GetWorkflowExecutionHistoryInput
* GetWorkflowExecutionHistoryInput `object`
  * domain **required**
  * execution **required**
    * runId **required**
    * workflowId **required**
  * maximumPageSize
  * nextPageToken
  * reverseOrder

### History
* History `object`: Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution.
  * events **required**
    * items [HistoryEvent](#historyevent)
  * nextPageToken

### HistoryEvent
* HistoryEvent `object`: <p>Event within a workflow execution. A history event can be one of these types:</p> <ul> <li> <p> <code>ActivityTaskCancelRequested</code> – A <code>RequestCancelActivityTask</code> decision was received by the system.</p> </li> <li> <p> <code>ActivityTaskCanceled</code> – The activity task was successfully canceled.</p> </li> <li> <p> <code>ActivityTaskCompleted</code> – An activity worker successfully completed an activity task by calling <a>RespondActivityTaskCompleted</a>.</p> </li> <li> <p> <code>ActivityTaskFailed</code> – An activity worker failed an activity task by calling <a>RespondActivityTaskFailed</a>.</p> </li> <li> <p> <code>ActivityTaskScheduled</code> – An activity task was scheduled for execution.</p> </li> <li> <p> <code>ActivityTaskStarted</code> – The scheduled activity task was dispatched to a worker.</p> </li> <li> <p> <code>ActivityTaskTimedOut</code> – The activity task timed out.</p> </li> <li> <p> <code>CancelTimerFailed</code> – Failed to process CancelTimer decision. This happens when the decision isn't configured properly, for example no timer exists with the specified timer Id.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A request to cancel a workflow execution failed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCanceled</code> – A child workflow execution, started by this workflow execution, was canceled and closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCompleted</code> – A child workflow execution, started by this workflow execution, completed successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionFailed</code> – A child workflow execution, started by this workflow execution, failed to complete successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionStarted</code> – A child workflow execution was successfully started.</p> </li> <li> <p> <code>ChildWorkflowExecutionTerminated</code> – A child workflow execution, started by this workflow execution, was terminated.</p> </li> <li> <p> <code>ChildWorkflowExecutionTimedOut</code> – A child workflow execution, started by this workflow execution, timed out and was closed.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – The workflow execution failed to complete.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – The workflow execution failed to complete after being continued as a new workflow execution.</p> </li> <li> <p> <code>DecisionTaskCompleted</code> – The decider successfully completed a decision task by calling <a>RespondDecisionTaskCompleted</a>.</p> </li> <li> <p> <code>DecisionTaskScheduled</code> – A decision task was scheduled for the workflow execution.</p> </li> <li> <p> <code>DecisionTaskStarted</code> – The decision task was dispatched to a decider.</p> </li> <li> <p> <code>DecisionTaskTimedOut</code> – The decision task timed out.</p> </li> <li> <p> <code>ExternalWorkflowExecutionCancelRequested</code> – Request to cancel an external workflow execution was successfully delivered to the target execution.</p> </li> <li> <p> <code>ExternalWorkflowExecutionSignaled</code> – A signal, requested by this workflow execution, was successfully delivered to the target external workflow execution.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A request to mark a workflow execution as failed, itself failed.</p> </li> <li> <p> <code>MarkerRecorded</code> – A marker was recorded in the workflow history as the result of a <code>RecordMarker</code> decision.</p> </li> <li> <p> <code>RecordMarkerFailed</code> – A <code>RecordMarker</code> decision was returned as failed.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – Failed to process RequestCancelActivityTask decision. This happens when the decision isn't configured properly.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – Request to cancel an external workflow execution failed.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionInitiated</code> – A request was made to request the cancellation of an external workflow execution.</p> </li> <li> <p> <code>ScheduleActivityTaskFailed</code> – Failed to process ScheduleActivityTask decision. This happens when the decision isn't configured properly, for example the activity type specified isn't registered.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – The request to signal an external workflow execution failed.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionInitiated</code> – A request to signal an external workflow was made.</p> </li> <li> <p> <code>StartActivityTaskFailed</code> – A scheduled activity task failed to start.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – Failed to process StartChildWorkflowExecution decision. This happens when the decision isn't configured properly, for example the workflow type specified isn't registered.</p> </li> <li> <p> <code>StartChildWorkflowExecutionInitiated</code> – A request was made to start a child workflow execution.</p> </li> <li> <p> <code>StartTimerFailed</code> – Failed to process StartTimer decision. This happens when the decision isn't configured properly, for example a timer already exists with the specified timer Id.</p> </li> <li> <p> <code>TimerCanceled</code> – A timer, previously started for this workflow execution, was successfully canceled.</p> </li> <li> <p> <code>TimerFired</code> – A timer, previously started for this workflow execution, fired.</p> </li> <li> <p> <code>TimerStarted</code> – A timer was started for the workflow execution due to a <code>StartTimer</code> decision.</p> </li> <li> <p> <code>WorkflowExecutionCancelRequested</code> – A request to cancel this workflow execution was made.</p> </li> <li> <p> <code>WorkflowExecutionCanceled</code> – The workflow execution was successfully canceled and closed.</p> </li> <li> <p> <code>WorkflowExecutionCompleted</code> – The workflow execution was closed due to successful completion.</p> </li> <li> <p> <code>WorkflowExecutionContinuedAsNew</code> – The workflow execution was closed and a new execution of the same type was created with the same workflowId.</p> </li> <li> <p> <code>WorkflowExecutionFailed</code> – The workflow execution closed due to a failure.</p> </li> <li> <p> <code>WorkflowExecutionSignaled</code> – An external signal was received for the workflow execution.</p> </li> <li> <p> <code>WorkflowExecutionStarted</code> – The workflow execution was started.</p> </li> <li> <p> <code>WorkflowExecutionTerminated</code> – The workflow execution was terminated.</p> </li> <li> <p> <code>WorkflowExecutionTimedOut</code> – The workflow execution was closed because a time out was exceeded.</p> </li> </ul>
  * activityTaskCancelRequestedEventAttributes
    * activityId **required**
    * decisionTaskCompletedEventId **required**
  * activityTaskCanceledEventAttributes
    * details
    * latestCancelRequestedEventId
    * scheduledEventId **required**
    * startedEventId **required**
  * activityTaskCompletedEventAttributes
    * result
    * scheduledEventId **required**
    * startedEventId **required**
  * activityTaskFailedEventAttributes
    * details
    * reason
    * scheduledEventId **required**
    * startedEventId **required**
  * activityTaskScheduledEventAttributes
    * activityId **required**
    * activityType **required**
      * name **required**
      * version **required**
    * control
    * decisionTaskCompletedEventId **required**
    * heartbeatTimeout
    * input
    * scheduleToCloseTimeout
    * scheduleToStartTimeout
    * startToCloseTimeout
    * taskList **required**
      * name **required**
    * taskPriority
  * activityTaskStartedEventAttributes
    * identity
    * scheduledEventId **required**
  * activityTaskTimedOutEventAttributes
    * details
    * scheduledEventId **required**
    * startedEventId **required**
    * timeoutType **required**
  * cancelTimerFailedEventAttributes
    * cause **required**
    * decisionTaskCompletedEventId **required**
    * timerId **required**
  * cancelWorkflowExecutionFailedEventAttributes
    * cause **required**
    * decisionTaskCompletedEventId **required**
  * childWorkflowExecutionCanceledEventAttributes
    * details
    * initiatedEventId **required**
    * startedEventId **required**
    * workflowExecution **required**
      * runId **required**
      * workflowId **required**
    * workflowType **required**
      * name **required**
      * version **required**
  * childWorkflowExecutionCompletedEventAttributes
    * initiatedEventId **required**
    * result
    * startedEventId **required**
    * workflowExecution **required**
      * runId **required**
      * workflowId **required**
    * workflowType **required**
      * name **required**
      * version **required**
  * childWorkflowExecutionFailedEventAttributes
    * details
    * initiatedEventId **required**
    * reason
    * startedEventId **required**
    * workflowExecution **required**
      * runId **required**
      * workflowId **required**
    * workflowType **required**
      * name **required**
      * version **required**
  * childWorkflowExecutionStartedEventAttributes
    * initiatedEventId **required**
    * workflowExecution **required**
      * runId **required**
      * workflowId **required**
    * workflowType **required**
      * name **required**
      * version **required**
  * childWorkflowExecutionTerminatedEventAttributes
    * initiatedEventId **required**
    * startedEventId **required**
    * workflowExecution **required**
      * runId **required**
      * workflowId **required**
    * workflowType **required**
      * name **required**
      * version **required**
  * childWorkflowExecutionTimedOutEventAttributes
    * initiatedEventId **required**
    * startedEventId **required**
    * timeoutType **required**
    * workflowExecution **required**
      * runId **required**
      * workflowId **required**
    * workflowType **required**
      * name **required**
      * version **required**
  * completeWorkflowExecutionFailedEventAttributes
    * cause **required**
    * decisionTaskCompletedEventId **required**
  * continueAsNewWorkflowExecutionFailedEventAttributes
    * cause **required**
    * decisionTaskCompletedEventId **required**
  * decisionTaskCompletedEventAttributes
    * executionContext
    * scheduledEventId **required**
    * startedEventId **required**
  * decisionTaskScheduledEventAttributes
    * startToCloseTimeout
    * taskList **required**
      * name **required**
    * taskPriority
  * decisionTaskStartedEventAttributes
    * identity
    * scheduledEventId **required**
  * decisionTaskTimedOutEventAttributes
    * scheduledEventId **required**
    * startedEventId **required**
    * timeoutType **required**
  * eventId **required**
  * eventTimestamp **required**
  * eventType **required**
  * externalWorkflowExecutionCancelRequestedEventAttributes
    * initiatedEventId **required**
    * workflowExecution **required**
      * runId **required**
      * workflowId **required**
  * externalWorkflowExecutionSignaledEventAttributes
    * initiatedEventId **required**
    * workflowExecution **required**
      * runId **required**
      * workflowId **required**
  * failWorkflowExecutionFailedEventAttributes
    * cause **required**
    * decisionTaskCompletedEventId **required**
  * lambdaFunctionCompletedEventAttributes
    * result
    * scheduledEventId **required**
    * startedEventId **required**
  * lambdaFunctionFailedEventAttributes
    * details
    * reason
    * scheduledEventId **required**
    * startedEventId **required**
  * lambdaFunctionScheduledEventAttributes
    * control
    * decisionTaskCompletedEventId **required**
    * id **required**
    * input
    * name **required**
    * startToCloseTimeout
  * lambdaFunctionStartedEventAttributes
    * scheduledEventId **required**
  * lambdaFunctionTimedOutEventAttributes
    * scheduledEventId **required**
    * startedEventId **required**
    * timeoutType
  * markerRecordedEventAttributes
    * decisionTaskCompletedEventId **required**
    * details
    * markerName **required**
  * recordMarkerFailedEventAttributes
    * cause **required**
    * decisionTaskCompletedEventId **required**
    * markerName **required**
  * requestCancelActivityTaskFailedEventAttributes
    * activityId **required**
    * cause **required**
    * decisionTaskCompletedEventId **required**
  * requestCancelExternalWorkflowExecutionFailedEventAttributes
    * cause **required**
    * control
    * decisionTaskCompletedEventId **required**
    * initiatedEventId **required**
    * runId
    * workflowId **required**
  * requestCancelExternalWorkflowExecutionInitiatedEventAttributes
    * control
    * decisionTaskCompletedEventId **required**
    * runId
    * workflowId **required**
  * scheduleActivityTaskFailedEventAttributes
    * activityId **required**
    * activityType **required**
      * name **required**
      * version **required**
    * cause **required**
    * decisionTaskCompletedEventId **required**
  * scheduleLambdaFunctionFailedEventAttributes
    * cause **required**
    * decisionTaskCompletedEventId **required**
    * id **required**
    * name **required**
  * signalExternalWorkflowExecutionFailedEventAttributes
    * cause **required**
    * control
    * decisionTaskCompletedEventId **required**
    * initiatedEventId **required**
    * runId
    * workflowId **required**
  * signalExternalWorkflowExecutionInitiatedEventAttributes
    * control
    * decisionTaskCompletedEventId **required**
    * input
    * runId
    * signalName **required**
    * workflowId **required**
  * startChildWorkflowExecutionFailedEventAttributes
    * cause **required**
    * control
    * decisionTaskCompletedEventId **required**
    * initiatedEventId **required**
    * workflowId **required**
    * workflowType **required**
      * name **required**
      * version **required**
  * startChildWorkflowExecutionInitiatedEventAttributes
    * childPolicy **required**
    * control
    * decisionTaskCompletedEventId **required**
    * executionStartToCloseTimeout
    * input
    * lambdaRole
    * tagList
      * items [Tag](#tag)
    * taskList **required**
      * name **required**
    * taskPriority
    * taskStartToCloseTimeout
    * workflowId **required**
    * workflowType **required**
      * name **required**
      * version **required**
  * startLambdaFunctionFailedEventAttributes
    * cause
    * message
    * scheduledEventId
  * startTimerFailedEventAttributes
    * cause **required**
    * decisionTaskCompletedEventId **required**
    * timerId **required**
  * timerCanceledEventAttributes
    * decisionTaskCompletedEventId **required**
    * startedEventId **required**
    * timerId **required**
  * timerFiredEventAttributes
    * startedEventId **required**
    * timerId **required**
  * timerStartedEventAttributes
    * control
    * decisionTaskCompletedEventId **required**
    * startToFireTimeout **required**
    * timerId **required**
  * workflowExecutionCancelRequestedEventAttributes
    * cause
    * externalInitiatedEventId
    * externalWorkflowExecution
      * runId **required**
      * workflowId **required**
  * workflowExecutionCanceledEventAttributes
    * decisionTaskCompletedEventId **required**
    * details
  * workflowExecutionCompletedEventAttributes
    * decisionTaskCompletedEventId **required**
    * result
  * workflowExecutionContinuedAsNewEventAttributes
    * childPolicy **required**
    * decisionTaskCompletedEventId **required**
    * executionStartToCloseTimeout
    * input
    * lambdaRole
    * newExecutionRunId **required**
    * tagList
      * items [Tag](#tag)
    * taskList **required**
      * name **required**
    * taskPriority
    * taskStartToCloseTimeout
    * workflowType **required**
      * name **required**
      * version **required**
  * workflowExecutionFailedEventAttributes
    * decisionTaskCompletedEventId **required**
    * details
    * reason
  * workflowExecutionSignaledEventAttributes
    * externalInitiatedEventId
    * externalWorkflowExecution
      * runId **required**
      * workflowId **required**
    * input
    * signalName **required**
  * workflowExecutionStartedEventAttributes
    * childPolicy **required**
    * continuedExecutionRunId
    * executionStartToCloseTimeout
    * input
    * lambdaRole
    * parentInitiatedEventId
    * parentWorkflowExecution
      * runId **required**
      * workflowId **required**
    * tagList
      * items [Tag](#tag)
    * taskList **required**
      * name **required**
    * taskPriority
    * taskStartToCloseTimeout
    * workflowType **required**
      * name **required**
      * version **required**
  * workflowExecutionTerminatedEventAttributes
    * cause
    * childPolicy **required**
    * details
    * reason
  * workflowExecutionTimedOutEventAttributes
    * childPolicy **required**
    * timeoutType **required**

### HistoryEventList
* HistoryEventList `array`
  * items [HistoryEvent](#historyevent)

### Identity
* Identity `string`

### LambdaFunctionCompletedEventAttributes
* LambdaFunctionCompletedEventAttributes `object`: Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types.
  * result
  * scheduledEventId **required**
  * startedEventId **required**

### LambdaFunctionFailedEventAttributes
* LambdaFunctionFailedEventAttributes `object`: Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types.
  * details
  * reason
  * scheduledEventId **required**
  * startedEventId **required**

### LambdaFunctionScheduledEventAttributes
* LambdaFunctionScheduledEventAttributes `object`: Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set for other event types.
  * control
  * decisionTaskCompletedEventId **required**
  * id **required**
  * input
  * name **required**
  * startToCloseTimeout

### LambdaFunctionStartedEventAttributes
* LambdaFunctionStartedEventAttributes `object`: Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types.
  * scheduledEventId **required**

### LambdaFunctionTimedOutEventAttributes
* LambdaFunctionTimedOutEventAttributes `object`: Provides details of the <code>LambdaFunctionTimedOut</code> event.
  * scheduledEventId **required**
  * startedEventId **required**
  * timeoutType

### LambdaFunctionTimeoutType
* LambdaFunctionTimeoutType `string` (values: START_TO_CLOSE)

### LimitExceededFault


### LimitedData
* LimitedData `string`

### ListActivityTypesInput
* ListActivityTypesInput `object`
  * domain **required**
  * maximumPageSize
  * name
  * nextPageToken
  * registrationStatus **required**
  * reverseOrder

### ListClosedWorkflowExecutionsInput
* ListClosedWorkflowExecutionsInput `object`
  * closeStatusFilter
    * status **required**
  * closeTimeFilter
    * latestDate
    * oldestDate **required**
  * domain **required**
  * executionFilter
    * workflowId **required**
  * maximumPageSize
  * nextPageToken
  * reverseOrder
  * startTimeFilter
    * latestDate
    * oldestDate **required**
  * tagFilter
    * tag **required**
  * typeFilter
    * name **required**
    * version

### ListDomainsInput
* ListDomainsInput `object`
  * maximumPageSize
  * nextPageToken
  * registrationStatus **required**
  * reverseOrder

### ListOpenWorkflowExecutionsInput
* ListOpenWorkflowExecutionsInput `object`
  * domain **required**
  * executionFilter
    * workflowId **required**
  * maximumPageSize
  * nextPageToken
  * reverseOrder
  * startTimeFilter **required**
    * latestDate
    * oldestDate **required**
  * tagFilter
    * tag **required**
  * typeFilter
    * name **required**
    * version

### ListTagsForResourceInput
* ListTagsForResourceInput `object`
  * resourceArn **required**

### ListTagsForResourceOutput
* ListTagsForResourceOutput `object`
  * tags
    * items [ResourceTag](#resourcetag)

### ListWorkflowTypesInput
* ListWorkflowTypesInput `object`
  * domain **required**
  * maximumPageSize
  * name
  * nextPageToken
  * registrationStatus **required**
  * reverseOrder

### MarkerName
* MarkerName `string`

### MarkerRecordedEventAttributes
* MarkerRecordedEventAttributes `object`: Provides the details of the <code>MarkerRecorded</code> event.
  * decisionTaskCompletedEventId **required**
  * details
  * markerName **required**

### Name
* Name `string`

### OpenDecisionTasksCount
* OpenDecisionTasksCount `integer`

### OperationNotPermittedFault


### PageSize
* PageSize `integer`

### PageToken
* PageToken `string`

### PendingTaskCount
* PendingTaskCount `object`: Contains the count of tasks in a task list.
  * count **required**
  * truncated

### PollForActivityTaskInput
* PollForActivityTaskInput `object`
  * domain **required**
  * identity
  * taskList **required**
    * name **required**

### PollForDecisionTaskInput
* PollForDecisionTaskInput `object`
  * domain **required**
  * identity
  * maximumPageSize
  * nextPageToken
  * reverseOrder
  * taskList **required**
    * name **required**

### RecordActivityTaskHeartbeatInput
* RecordActivityTaskHeartbeatInput `object`
  * details
  * taskToken **required**

### RecordMarkerDecisionAttributes
* RecordMarkerDecisionAttributes `object`: <p>Provides the details of the <code>RecordMarker</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * details
  * markerName **required**

### RecordMarkerFailedCause
* RecordMarkerFailedCause `string` (values: OPERATION_NOT_PERMITTED)

### RecordMarkerFailedEventAttributes
* RecordMarkerFailedEventAttributes `object`: Provides the details of the <code>RecordMarkerFailed</code> event.
  * cause **required**
  * decisionTaskCompletedEventId **required**
  * markerName **required**

### RegisterActivityTypeInput
* RegisterActivityTypeInput `object`
  * defaultTaskHeartbeatTimeout
  * defaultTaskList
    * name **required**
  * defaultTaskPriority
  * defaultTaskScheduleToCloseTimeout
  * defaultTaskScheduleToStartTimeout
  * defaultTaskStartToCloseTimeout
  * description
  * domain **required**
  * name **required**
  * version **required**

### RegisterDomainInput
* RegisterDomainInput `object`
  * tags
    * items [ResourceTag](#resourcetag)
  * description
  * name **required**
  * workflowExecutionRetentionPeriodInDays **required**

### RegisterWorkflowTypeInput
* RegisterWorkflowTypeInput `object`
  * defaultChildPolicy
  * defaultExecutionStartToCloseTimeout
  * defaultLambdaRole
  * defaultTaskList
    * name **required**
  * defaultTaskPriority
  * defaultTaskStartToCloseTimeout
  * description
  * domain **required**
  * name **required**
  * version **required**

### RegistrationStatus
* RegistrationStatus `string` (values: REGISTERED, DEPRECATED)

### RequestCancelActivityTaskDecisionAttributes
* RequestCancelActivityTaskDecisionAttributes `object`: <p>Provides the details of the <code>RequestCancelActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * activityId **required**

### RequestCancelActivityTaskFailedCause
* RequestCancelActivityTaskFailedCause `string` (values: ACTIVITY_ID_UNKNOWN, OPERATION_NOT_PERMITTED)

### RequestCancelActivityTaskFailedEventAttributes
* RequestCancelActivityTaskFailedEventAttributes `object`: Provides the details of the <code>RequestCancelActivityTaskFailed</code> event.
  * activityId **required**
  * cause **required**
  * decisionTaskCompletedEventId **required**

### RequestCancelExternalWorkflowExecutionDecisionAttributes
* RequestCancelExternalWorkflowExecutionDecisionAttributes `object`: <p>Provides the details of the <code>RequestCancelExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * control
  * runId
  * workflowId **required**

### RequestCancelExternalWorkflowExecutionFailedCause
* RequestCancelExternalWorkflowExecutionFailedCause `string` (values: UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION, REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED, OPERATION_NOT_PERMITTED)

### RequestCancelExternalWorkflowExecutionFailedEventAttributes
* RequestCancelExternalWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event.
  * cause **required**
  * control
  * decisionTaskCompletedEventId **required**
  * initiatedEventId **required**
  * runId
  * workflowId **required**

### RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
* RequestCancelExternalWorkflowExecutionInitiatedEventAttributes `object`: Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event.
  * control
  * decisionTaskCompletedEventId **required**
  * runId
  * workflowId **required**

### RequestCancelWorkflowExecutionInput
* RequestCancelWorkflowExecutionInput `object`
  * domain **required**
  * runId
  * workflowId **required**

### ResourceTag
* ResourceTag `object`: <p>Tags are key-value pairs that can be associated with Amazon SWF state machines and activities.</p> <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>
  * key **required**
  * value

### ResourceTagKey
* ResourceTagKey `string`

### ResourceTagKeyList
* ResourceTagKeyList `array`
  * items [ResourceTagKey](#resourcetagkey)

### ResourceTagList
* ResourceTagList `array`
  * items [ResourceTag](#resourcetag)

### ResourceTagValue
* ResourceTagValue `string`

### RespondActivityTaskCanceledInput
* RespondActivityTaskCanceledInput `object`
  * details
  * taskToken **required**

### RespondActivityTaskCompletedInput
* RespondActivityTaskCompletedInput `object`
  * result
  * taskToken **required**

### RespondActivityTaskFailedInput
* RespondActivityTaskFailedInput `object`
  * details
  * reason
  * taskToken **required**

### RespondDecisionTaskCompletedInput
* RespondDecisionTaskCompletedInput `object`: Input data for a TaskCompleted response to a decision task.
  * decisions
    * items [Decision](#decision)
  * executionContext
  * taskToken **required**

### ReverseOrder
* ReverseOrder `boolean`

### Run
* Run `object`: Specifies the <code>runId</code> of a workflow execution.
  * runId

### ScheduleActivityTaskDecisionAttributes
* ScheduleActivityTaskDecisionAttributes `object`: <p>Provides the details of the <code>ScheduleActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code> – String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code> – String constraint. The key is <code>swf:activityType.version</code>.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * activityId **required**
  * activityType **required**
    * name **required**
    * version **required**
  * control
  * heartbeatTimeout
  * input
  * scheduleToCloseTimeout
  * scheduleToStartTimeout
  * startToCloseTimeout
  * taskList
    * name **required**
  * taskPriority

### ScheduleActivityTaskFailedCause
* ScheduleActivityTaskFailedCause `string` (values: ACTIVITY_TYPE_DEPRECATED, ACTIVITY_TYPE_DOES_NOT_EXIST, ACTIVITY_ID_ALREADY_IN_USE, OPEN_ACTIVITIES_LIMIT_EXCEEDED, ACTIVITY_CREATION_RATE_EXCEEDED, DEFAULT_SCHEDULE_TO_CLOSE_TIMEOUT_UNDEFINED, DEFAULT_TASK_LIST_UNDEFINED, DEFAULT_SCHEDULE_TO_START_TIMEOUT_UNDEFINED, DEFAULT_START_TO_CLOSE_TIMEOUT_UNDEFINED, DEFAULT_HEARTBEAT_TIMEOUT_UNDEFINED, OPERATION_NOT_PERMITTED)

### ScheduleActivityTaskFailedEventAttributes
* ScheduleActivityTaskFailedEventAttributes `object`: Provides the details of the <code>ScheduleActivityTaskFailed</code> event.
  * activityId **required**
  * activityType **required**
    * name **required**
    * version **required**
  * cause **required**
  * decisionTaskCompletedEventId **required**

### ScheduleLambdaFunctionDecisionAttributes
* ScheduleLambdaFunctionDecisionAttributes `object`: Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>.
  * control
  * id **required**
  * input
  * name **required**
  * startToCloseTimeout

### ScheduleLambdaFunctionFailedCause
* ScheduleLambdaFunctionFailedCause `string` (values: ID_ALREADY_IN_USE, OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED, LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED, LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION)

### ScheduleLambdaFunctionFailedEventAttributes
* ScheduleLambdaFunctionFailedEventAttributes `object`: Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types.
  * cause **required**
  * decisionTaskCompletedEventId **required**
  * id **required**
  * name **required**

### SignalExternalWorkflowExecutionDecisionAttributes
* SignalExternalWorkflowExecutionDecisionAttributes `object`: <p>Provides the details of the <code>SignalExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * control
  * input
  * runId
  * signalName **required**
  * workflowId **required**

### SignalExternalWorkflowExecutionFailedCause
* SignalExternalWorkflowExecutionFailedCause `string` (values: UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION, SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED, OPERATION_NOT_PERMITTED)

### SignalExternalWorkflowExecutionFailedEventAttributes
* SignalExternalWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event.
  * cause **required**
  * control
  * decisionTaskCompletedEventId **required**
  * initiatedEventId **required**
  * runId
  * workflowId **required**

### SignalExternalWorkflowExecutionInitiatedEventAttributes
* SignalExternalWorkflowExecutionInitiatedEventAttributes `object`: Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event.
  * control
  * decisionTaskCompletedEventId **required**
  * input
  * runId
  * signalName **required**
  * workflowId **required**

### SignalName
* SignalName `string`

### SignalWorkflowExecutionInput
* SignalWorkflowExecutionInput `object`
  * domain **required**
  * input
  * runId
  * signalName **required**
  * workflowId **required**

### StartChildWorkflowExecutionDecisionAttributes
* StartChildWorkflowExecutionDecisionAttributes `object`: <p>Provides the details of the <code>StartChildWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.N</code> – The key is "swf:tagList.N" where N is the tag number from 0 to 4, inclusive.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code> – String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * childPolicy
  * control
  * executionStartToCloseTimeout
  * input
  * lambdaRole
  * tagList
    * items [Tag](#tag)
  * taskList
    * name **required**
  * taskPriority
  * taskStartToCloseTimeout
  * workflowId **required**
  * workflowType **required**
    * name **required**
    * version **required**

### StartChildWorkflowExecutionFailedCause
* StartChildWorkflowExecutionFailedCause `string` (values: WORKFLOW_TYPE_DOES_NOT_EXIST, WORKFLOW_TYPE_DEPRECATED, OPEN_CHILDREN_LIMIT_EXCEEDED, OPEN_WORKFLOWS_LIMIT_EXCEEDED, CHILD_CREATION_RATE_EXCEEDED, WORKFLOW_ALREADY_RUNNING, DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED, DEFAULT_TASK_LIST_UNDEFINED, DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED, DEFAULT_CHILD_POLICY_UNDEFINED, OPERATION_NOT_PERMITTED)

### StartChildWorkflowExecutionFailedEventAttributes
* StartChildWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event.
  * cause **required**
  * control
  * decisionTaskCompletedEventId **required**
  * initiatedEventId **required**
  * workflowId **required**
  * workflowType **required**
    * name **required**
    * version **required**

### StartChildWorkflowExecutionInitiatedEventAttributes
* StartChildWorkflowExecutionInitiatedEventAttributes `object`: Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event.
  * childPolicy **required**
  * control
  * decisionTaskCompletedEventId **required**
  * executionStartToCloseTimeout
  * input
  * lambdaRole
  * tagList
    * items [Tag](#tag)
  * taskList **required**
    * name **required**
  * taskPriority
  * taskStartToCloseTimeout
  * workflowId **required**
  * workflowType **required**
    * name **required**
    * version **required**

### StartLambdaFunctionFailedCause
* StartLambdaFunctionFailedCause `string` (values: ASSUME_ROLE_FAILED)

### StartLambdaFunctionFailedEventAttributes
* StartLambdaFunctionFailedEventAttributes `object`: Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types.
  * cause
  * message
  * scheduledEventId

### StartTimerDecisionAttributes
* StartTimerDecisionAttributes `object`: <p>Provides the details of the <code>StartTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * control
  * startToFireTimeout **required**
  * timerId **required**

### StartTimerFailedCause
* StartTimerFailedCause `string` (values: TIMER_ID_ALREADY_IN_USE, OPEN_TIMERS_LIMIT_EXCEEDED, TIMER_CREATION_RATE_EXCEEDED, OPERATION_NOT_PERMITTED)

### StartTimerFailedEventAttributes
* StartTimerFailedEventAttributes `object`: Provides the details of the <code>StartTimerFailed</code> event.
  * cause **required**
  * decisionTaskCompletedEventId **required**
  * timerId **required**

### StartWorkflowExecutionInput
* StartWorkflowExecutionInput `object`
  * childPolicy
  * domain **required**
  * executionStartToCloseTimeout
  * input
  * lambdaRole
  * tagList
    * items [Tag](#tag)
  * taskList
    * name **required**
  * taskPriority
  * taskStartToCloseTimeout
  * workflowId **required**
  * workflowType **required**
    * name **required**
    * version **required**

### Tag
* Tag `string`

### TagFilter
* TagFilter `object`: Used to filter the workflow executions in visibility APIs based on a tag.
  * tag **required**

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceInput
* TagResourceInput `object`
  * tags **required**
    * items [ResourceTag](#resourcetag)
  * resourceArn **required**

### TaskList
* TaskList `object`: Represents a task list.
  * name **required**

### TaskPriority
* TaskPriority `string`

### TaskToken
* TaskToken `string`

### TerminateReason
* TerminateReason `string`

### TerminateWorkflowExecutionInput
* TerminateWorkflowExecutionInput `object`
  * childPolicy
  * details
  * domain **required**
  * reason
  * runId
  * workflowId **required**

### TimerCanceledEventAttributes
* TimerCanceledEventAttributes `object`:  Provides the details of the <code>TimerCanceled</code> event. 
  * decisionTaskCompletedEventId **required**
  * startedEventId **required**
  * timerId **required**

### TimerFiredEventAttributes
* TimerFiredEventAttributes `object`: Provides the details of the <code>TimerFired</code> event.
  * startedEventId **required**
  * timerId **required**

### TimerId
* TimerId `string`

### TimerStartedEventAttributes
* TimerStartedEventAttributes `object`: Provides the details of the <code>TimerStarted</code> event.
  * control
  * decisionTaskCompletedEventId **required**
  * startToFireTimeout **required**
  * timerId **required**

### Timestamp
* Timestamp `string`

### TooManyTagsFault


### Truncated
* Truncated `boolean`

### TypeAlreadyExistsFault


### TypeDeprecatedFault


### UndeprecateActivityTypeInput
* UndeprecateActivityTypeInput `object`
  * activityType **required**
    * name **required**
    * version **required**
  * domain **required**

### UndeprecateDomainInput
* UndeprecateDomainInput `object`
  * name **required**

### UndeprecateWorkflowTypeInput
* UndeprecateWorkflowTypeInput `object`
  * domain **required**
  * workflowType **required**
    * name **required**
    * version **required**

### UnknownResourceFault


### UntagResourceInput
* UntagResourceInput `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [ResourceTagKey](#resourcetagkey)

### Version
* Version `string`

### VersionOptional
* VersionOptional `string`

### WorkflowExecution
* WorkflowExecution `object`: Represents a workflow execution.
  * runId **required**
  * workflowId **required**

### WorkflowExecutionAlreadyStartedFault


### WorkflowExecutionCancelRequestedCause
* WorkflowExecutionCancelRequestedCause `string` (values: CHILD_POLICY_APPLIED)

### WorkflowExecutionCancelRequestedEventAttributes
* WorkflowExecutionCancelRequestedEventAttributes `object`: Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.
  * cause
  * externalInitiatedEventId
  * externalWorkflowExecution
    * runId **required**
    * workflowId **required**

### WorkflowExecutionCanceledEventAttributes
* WorkflowExecutionCanceledEventAttributes `object`: Provides the details of the <code>WorkflowExecutionCanceled</code> event.
  * decisionTaskCompletedEventId **required**
  * details

### WorkflowExecutionCompletedEventAttributes
* WorkflowExecutionCompletedEventAttributes `object`: Provides the details of the <code>WorkflowExecutionCompleted</code> event.
  * decisionTaskCompletedEventId **required**
  * result

### WorkflowExecutionConfiguration
* WorkflowExecutionConfiguration `object`: The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.
  * childPolicy **required**
  * executionStartToCloseTimeout **required**
  * lambdaRole
  * taskList **required**
    * name **required**
  * taskPriority
  * taskStartToCloseTimeout **required**

### WorkflowExecutionContinuedAsNewEventAttributes
* WorkflowExecutionContinuedAsNewEventAttributes `object`: Provides the details of the <code>WorkflowExecutionContinuedAsNew</code> event.
  * childPolicy **required**
  * decisionTaskCompletedEventId **required**
  * executionStartToCloseTimeout
  * input
  * lambdaRole
  * newExecutionRunId **required**
  * tagList
    * items [Tag](#tag)
  * taskList **required**
    * name **required**
  * taskPriority
  * taskStartToCloseTimeout
  * workflowType **required**
    * name **required**
    * version **required**

### WorkflowExecutionCount
* WorkflowExecutionCount `object`: Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a> 
  * count **required**
  * truncated

### WorkflowExecutionDetail
* WorkflowExecutionDetail `object`: Contains details about a workflow execution.
  * executionConfiguration **required**
    * childPolicy **required**
    * executionStartToCloseTimeout **required**
    * lambdaRole
    * taskList **required**
      * name **required**
    * taskPriority
    * taskStartToCloseTimeout **required**
  * executionInfo **required**
    * cancelRequested
    * closeStatus
    * closeTimestamp
    * execution **required**
      * runId **required**
      * workflowId **required**
    * executionStatus **required**
    * parent
      * runId **required**
      * workflowId **required**
    * startTimestamp **required**
    * tagList
      * items [Tag](#tag)
    * workflowType **required**
      * name **required**
      * version **required**
  * latestActivityTaskTimestamp
  * latestExecutionContext
  * openCounts **required**
    * openActivityTasks **required**
    * openChildWorkflowExecutions **required**
    * openDecisionTasks **required**
    * openLambdaFunctions
    * openTimers **required**

### WorkflowExecutionFailedEventAttributes
* WorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>WorkflowExecutionFailed</code> event.
  * decisionTaskCompletedEventId **required**
  * details
  * reason

### WorkflowExecutionFilter
* WorkflowExecutionFilter `object`: Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.
  * workflowId **required**

### WorkflowExecutionInfo
* WorkflowExecutionInfo `object`: Contains information about a workflow execution.
  * cancelRequested
  * closeStatus
  * closeTimestamp
  * execution **required**
    * runId **required**
    * workflowId **required**
  * executionStatus **required**
  * parent
    * runId **required**
    * workflowId **required**
  * startTimestamp **required**
  * tagList
    * items [Tag](#tag)
  * workflowType **required**
    * name **required**
    * version **required**

### WorkflowExecutionInfoList
* WorkflowExecutionInfoList `array`
  * items [WorkflowExecutionInfo](#workflowexecutioninfo)

### WorkflowExecutionInfos
* WorkflowExecutionInfos `object`: Contains a paginated list of information about workflow executions.
  * executionInfos **required**
    * items [WorkflowExecutionInfo](#workflowexecutioninfo)
  * nextPageToken

### WorkflowExecutionOpenCounts
* WorkflowExecutionOpenCounts `object`: Contains the counts of open tasks, child workflow executions and timers for a workflow execution.
  * openActivityTasks **required**
  * openChildWorkflowExecutions **required**
  * openDecisionTasks **required**
  * openLambdaFunctions
  * openTimers **required**

### WorkflowExecutionSignaledEventAttributes
* WorkflowExecutionSignaledEventAttributes `object`: Provides the details of the <code>WorkflowExecutionSignaled</code> event.
  * externalInitiatedEventId
  * externalWorkflowExecution
    * runId **required**
    * workflowId **required**
  * input
  * signalName **required**

### WorkflowExecutionStartedEventAttributes
* WorkflowExecutionStartedEventAttributes `object`: Provides details of <code>WorkflowExecutionStarted</code> event.
  * childPolicy **required**
  * continuedExecutionRunId
  * executionStartToCloseTimeout
  * input
  * lambdaRole
  * parentInitiatedEventId
  * parentWorkflowExecution
    * runId **required**
    * workflowId **required**
  * tagList
    * items [Tag](#tag)
  * taskList **required**
    * name **required**
  * taskPriority
  * taskStartToCloseTimeout
  * workflowType **required**
    * name **required**
    * version **required**

### WorkflowExecutionTerminatedCause
* WorkflowExecutionTerminatedCause `string` (values: CHILD_POLICY_APPLIED, EVENT_LIMIT_EXCEEDED, OPERATOR_INITIATED)

### WorkflowExecutionTerminatedEventAttributes
* WorkflowExecutionTerminatedEventAttributes `object`: Provides the details of the <code>WorkflowExecutionTerminated</code> event.
  * cause
  * childPolicy **required**
  * details
  * reason

### WorkflowExecutionTimedOutEventAttributes
* WorkflowExecutionTimedOutEventAttributes `object`: Provides the details of the <code>WorkflowExecutionTimedOut</code> event.
  * childPolicy **required**
  * timeoutType **required**

### WorkflowExecutionTimeoutType
* WorkflowExecutionTimeoutType `string` (values: START_TO_CLOSE)

### WorkflowId
* WorkflowId `string`

### WorkflowRunId
* WorkflowRunId `string`

### WorkflowRunIdOptional
* WorkflowRunIdOptional `string`

### WorkflowType
* WorkflowType `object`: Represents a workflow type.
  * name **required**
  * version **required**

### WorkflowTypeConfiguration
* WorkflowTypeConfiguration `object`: The configuration settings of a workflow type.
  * defaultChildPolicy
  * defaultExecutionStartToCloseTimeout
  * defaultLambdaRole
  * defaultTaskList
    * name **required**
  * defaultTaskPriority
  * defaultTaskStartToCloseTimeout

### WorkflowTypeDetail
* WorkflowTypeDetail `object`: Contains details about a workflow type.
  * configuration **required**
    * defaultChildPolicy
    * defaultExecutionStartToCloseTimeout
    * defaultLambdaRole
    * defaultTaskList
      * name **required**
    * defaultTaskPriority
    * defaultTaskStartToCloseTimeout
  * typeInfo **required**
    * creationDate **required**
    * deprecationDate
    * description
    * status **required**
    * workflowType **required**
      * name **required**
      * version **required**

### WorkflowTypeFilter
* WorkflowTypeFilter `object`: Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.
  * name **required**
  * version

### WorkflowTypeInfo
* WorkflowTypeInfo `object`: Contains information about a workflow type.
  * creationDate **required**
  * deprecationDate
  * description
  * status **required**
  * workflowType **required**
    * name **required**
    * version **required**

### WorkflowTypeInfoList
* WorkflowTypeInfoList `array`
  * items [WorkflowTypeInfo](#workflowtypeinfo)

### WorkflowTypeInfos
* WorkflowTypeInfos `object`: Contains a paginated list of information structures about workflow types.
  * nextPageToken
  * typeInfos **required**
    * items [WorkflowTypeInfo](#workflowtypeinfo)


