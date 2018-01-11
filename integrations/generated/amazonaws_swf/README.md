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

#### Input
* input `object`
  * closeStatusFilter [CloseStatusFilter](#closestatusfilter)
  * closeTimeFilter [ExecutionTimeFilter](#executiontimefilter)
  * domain **required** [DomainName](#domainname)
  * executionFilter [WorkflowExecutionFilter](#workflowexecutionfilter)
  * startTimeFilter [ExecutionTimeFilter](#executiontimefilter)
  * tagFilter [TagFilter](#tagfilter)
  * typeFilter [WorkflowTypeFilter](#workflowtypefilter)

#### Output
* output [WorkflowExecutionCount](#workflowexecutioncount)

### CountOpenWorkflowExecutions



```js
amazonaws_swf.CountOpenWorkflowExecutions({
  "domain": "",
  "startTimeFilter": {
    "oldestDate": ""
  }
}, context)
```

#### Input
* input `object`
  * domain **required** [DomainName](#domainname)
  * executionFilter [WorkflowExecutionFilter](#workflowexecutionfilter)
  * startTimeFilter **required** [ExecutionTimeFilter](#executiontimefilter)
  * tagFilter [TagFilter](#tagfilter)
  * typeFilter [WorkflowTypeFilter](#workflowtypefilter)

#### Output
* output [WorkflowExecutionCount](#workflowexecutioncount)

### CountPendingActivityTasks



```js
amazonaws_swf.CountPendingActivityTasks({
  "domain": "",
  "taskList": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * domain **required** [DomainName](#domainname)
  * taskList **required** [TaskList](#tasklist)

#### Output
* output [PendingTaskCount](#pendingtaskcount)

### CountPendingDecisionTasks



```js
amazonaws_swf.CountPendingDecisionTasks({
  "domain": "",
  "taskList": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * domain **required** [DomainName](#domainname)
  * taskList **required** [TaskList](#tasklist)

#### Output
* output [PendingTaskCount](#pendingtaskcount)

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

#### Input
* input `object`
  * activityType **required** [ActivityType](#activitytype)
  * domain **required** [DomainName](#domainname)

#### Output
*Output schema unknown*

### DeprecateDomain



```js
amazonaws_swf.DeprecateDomain({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** [DomainName](#domainname)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * domain **required** [DomainName](#domainname)
  * workflowType **required** [WorkflowType](#workflowtype)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * activityType **required** [ActivityType](#activitytype)
  * domain **required** [DomainName](#domainname)

#### Output
* output [ActivityTypeDetail](#activitytypedetail)

### DescribeDomain



```js
amazonaws_swf.DescribeDomain({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** [DomainName](#domainname)

#### Output
* output [DomainDetail](#domaindetail)

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

#### Input
* input `object`
  * domain **required** [DomainName](#domainname)
  * execution **required** [WorkflowExecution](#workflowexecution)

#### Output
* output [WorkflowExecutionDetail](#workflowexecutiondetail)

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

#### Input
* input `object`
  * domain **required** [DomainName](#domainname)
  * workflowType **required** [WorkflowType](#workflowtype)

#### Output
* output [WorkflowTypeDetail](#workflowtypedetail)

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

#### Input
* input `object`
  * maximumPageSize `string`
  * nextPageToken `string`
  * domain **required** [DomainName](#domainname)
  * execution **required** [WorkflowExecution](#workflowexecution)
  * maximumPageSize [PageSize](#pagesize)
  * nextPageToken [PageToken](#pagetoken)
  * reverseOrder [ReverseOrder](#reverseorder)

#### Output
* output [History](#history)

### ListActivityTypes



```js
amazonaws_swf.ListActivityTypes({
  "domain": "",
  "registrationStatus": ""
}, context)
```

#### Input
* input `object`
  * maximumPageSize `string`
  * nextPageToken `string`
  * domain **required** [DomainName](#domainname)
  * maximumPageSize [PageSize](#pagesize)
  * name [Name](#name)
  * nextPageToken [PageToken](#pagetoken)
  * registrationStatus **required** [RegistrationStatus](#registrationstatus)
  * reverseOrder [ReverseOrder](#reverseorder)

#### Output
* output [ActivityTypeInfos](#activitytypeinfos)

### ListClosedWorkflowExecutions



```js
amazonaws_swf.ListClosedWorkflowExecutions({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * maximumPageSize `string`
  * nextPageToken `string`
  * closeStatusFilter [CloseStatusFilter](#closestatusfilter)
  * closeTimeFilter [ExecutionTimeFilter](#executiontimefilter)
  * domain **required** [DomainName](#domainname)
  * executionFilter [WorkflowExecutionFilter](#workflowexecutionfilter)
  * maximumPageSize [PageSize](#pagesize)
  * nextPageToken [PageToken](#pagetoken)
  * reverseOrder [ReverseOrder](#reverseorder)
  * startTimeFilter [ExecutionTimeFilter](#executiontimefilter)
  * tagFilter [TagFilter](#tagfilter)
  * typeFilter [WorkflowTypeFilter](#workflowtypefilter)

#### Output
* output [WorkflowExecutionInfos](#workflowexecutioninfos)

### ListDomains



```js
amazonaws_swf.ListDomains({
  "registrationStatus": ""
}, context)
```

#### Input
* input `object`
  * maximumPageSize `string`
  * nextPageToken `string`
  * maximumPageSize [PageSize](#pagesize)
  * nextPageToken [PageToken](#pagetoken)
  * registrationStatus **required** [RegistrationStatus](#registrationstatus)
  * reverseOrder [ReverseOrder](#reverseorder)

#### Output
* output [DomainInfos](#domaininfos)

### ListOpenWorkflowExecutions



```js
amazonaws_swf.ListOpenWorkflowExecutions({
  "domain": "",
  "startTimeFilter": {
    "oldestDate": ""
  }
}, context)
```

#### Input
* input `object`
  * maximumPageSize `string`
  * nextPageToken `string`
  * domain **required** [DomainName](#domainname)
  * executionFilter [WorkflowExecutionFilter](#workflowexecutionfilter)
  * maximumPageSize [PageSize](#pagesize)
  * nextPageToken [PageToken](#pagetoken)
  * reverseOrder [ReverseOrder](#reverseorder)
  * startTimeFilter **required** [ExecutionTimeFilter](#executiontimefilter)
  * tagFilter [TagFilter](#tagfilter)
  * typeFilter [WorkflowTypeFilter](#workflowtypefilter)

#### Output
* output [WorkflowExecutionInfos](#workflowexecutioninfos)

### ListWorkflowTypes



```js
amazonaws_swf.ListWorkflowTypes({
  "domain": "",
  "registrationStatus": ""
}, context)
```

#### Input
* input `object`
  * maximumPageSize `string`
  * nextPageToken `string`
  * domain **required** [DomainName](#domainname)
  * maximumPageSize [PageSize](#pagesize)
  * name [Name](#name)
  * nextPageToken [PageToken](#pagetoken)
  * registrationStatus **required** [RegistrationStatus](#registrationstatus)
  * reverseOrder [ReverseOrder](#reverseorder)

#### Output
* output [WorkflowTypeInfos](#workflowtypeinfos)

### PollForActivityTask



```js
amazonaws_swf.PollForActivityTask({
  "domain": "",
  "taskList": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * domain **required** [DomainName](#domainname)
  * identity [Identity](#identity)
  * taskList **required** [TaskList](#tasklist)

#### Output
* output [ActivityTask](#activitytask)

### PollForDecisionTask



```js
amazonaws_swf.PollForDecisionTask({
  "domain": "",
  "taskList": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * maximumPageSize `string`
  * nextPageToken `string`
  * domain **required** [DomainName](#domainname)
  * identity [Identity](#identity)
  * maximumPageSize [PageSize](#pagesize)
  * nextPageToken [PageToken](#pagetoken)
  * reverseOrder [ReverseOrder](#reverseorder)
  * taskList **required** [TaskList](#tasklist)

#### Output
* output [DecisionTask](#decisiontask)

### RecordActivityTaskHeartbeat



```js
amazonaws_swf.RecordActivityTaskHeartbeat({
  "taskToken": ""
}, context)
```

#### Input
* input `object`
  * details [LimitedData](#limiteddata)
  * taskToken **required** [TaskToken](#tasktoken)

#### Output
* output [ActivityTaskStatus](#activitytaskstatus)

### RegisterActivityType



```js
amazonaws_swf.RegisterActivityType({
  "domain": "",
  "name": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * defaultTaskHeartbeatTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * defaultTaskList [TaskList](#tasklist)
  * defaultTaskPriority [TaskPriority](#taskpriority)
  * defaultTaskScheduleToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * defaultTaskScheduleToStartTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * defaultTaskStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * description [Description](#description)
  * domain **required** [DomainName](#domainname)
  * name **required** [Name](#name)
  * version **required** [Version](#version)

#### Output
*Output schema unknown*

### RegisterDomain



```js
amazonaws_swf.RegisterDomain({
  "name": "",
  "workflowExecutionRetentionPeriodInDays": ""
}, context)
```

#### Input
* input `object`
  * description [Description](#description)
  * name **required** [DomainName](#domainname)
  * workflowExecutionRetentionPeriodInDays **required** [DurationInDays](#durationindays)

#### Output
*Output schema unknown*

### RegisterWorkflowType



```js
amazonaws_swf.RegisterWorkflowType({
  "domain": "",
  "name": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * defaultChildPolicy [ChildPolicy](#childpolicy)
  * defaultExecutionStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * defaultLambdaRole [Arn](#arn)
  * defaultTaskList [TaskList](#tasklist)
  * defaultTaskPriority [TaskPriority](#taskpriority)
  * defaultTaskStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * description [Description](#description)
  * domain **required** [DomainName](#domainname)
  * name **required** [Name](#name)
  * version **required** [Version](#version)

#### Output
*Output schema unknown*

### RequestCancelWorkflowExecution



```js
amazonaws_swf.RequestCancelWorkflowExecution({
  "domain": "",
  "workflowId": ""
}, context)
```

#### Input
* input `object`
  * domain **required** [DomainName](#domainname)
  * runId [WorkflowRunIdOptional](#workflowrunidoptional)
  * workflowId **required** [WorkflowId](#workflowid)

#### Output
*Output schema unknown*

### RespondActivityTaskCanceled



```js
amazonaws_swf.RespondActivityTaskCanceled({
  "taskToken": ""
}, context)
```

#### Input
* input `object`
  * details [Data](#data)
  * taskToken **required** [TaskToken](#tasktoken)

#### Output
*Output schema unknown*

### RespondActivityTaskCompleted



```js
amazonaws_swf.RespondActivityTaskCompleted({
  "taskToken": ""
}, context)
```

#### Input
* input `object`
  * result [Data](#data)
  * taskToken **required** [TaskToken](#tasktoken)

#### Output
*Output schema unknown*

### RespondActivityTaskFailed



```js
amazonaws_swf.RespondActivityTaskFailed({
  "taskToken": ""
}, context)
```

#### Input
* input `object`
  * details [Data](#data)
  * reason [FailureReason](#failurereason)
  * taskToken **required** [TaskToken](#tasktoken)

#### Output
*Output schema unknown*

### RespondDecisionTaskCompleted



```js
amazonaws_swf.RespondDecisionTaskCompleted({
  "taskToken": ""
}, context)
```

#### Input
* input `object`
  * decisions [DecisionList](#decisionlist)
  * executionContext [Data](#data)
  * taskToken **required** [TaskToken](#tasktoken)

#### Output
*Output schema unknown*

### SignalWorkflowExecution



```js
amazonaws_swf.SignalWorkflowExecution({
  "domain": "",
  "workflowId": "",
  "signalName": ""
}, context)
```

#### Input
* input `object`
  * domain **required** [DomainName](#domainname)
  * input [Data](#data)
  * runId [WorkflowRunIdOptional](#workflowrunidoptional)
  * signalName **required** [SignalName](#signalname)
  * workflowId **required** [WorkflowId](#workflowid)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * childPolicy [ChildPolicy](#childpolicy)
  * domain **required** [DomainName](#domainname)
  * executionStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * input [Data](#data)
  * lambdaRole [Arn](#arn)
  * tagList [TagList](#taglist)
  * taskList [TaskList](#tasklist)
  * taskPriority [TaskPriority](#taskpriority)
  * taskStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * workflowId **required** [WorkflowId](#workflowid)
  * workflowType **required** [WorkflowType](#workflowtype)

#### Output
* output [Run](#run)

### TerminateWorkflowExecution



```js
amazonaws_swf.TerminateWorkflowExecution({
  "domain": "",
  "workflowId": ""
}, context)
```

#### Input
* input `object`
  * childPolicy [ChildPolicy](#childpolicy)
  * details [Data](#data)
  * domain **required** [DomainName](#domainname)
  * reason [TerminateReason](#terminatereason)
  * runId [WorkflowRunIdOptional](#workflowrunidoptional)
  * workflowId **required** [WorkflowId](#workflowid)

#### Output
*Output schema unknown*



## Definitions

### ActivityId
* ActivityId `string`

### ActivityTask
* ActivityTask `object`: Unit of work sent to an activity worker.
  * activityId **required** [ActivityId](#activityid)
  * activityType **required** [ActivityType](#activitytype)
  * input [Data](#data)
  * startedEventId **required** [EventId](#eventid)
  * taskToken **required** [TaskToken](#tasktoken)
  * workflowExecution **required** [WorkflowExecution](#workflowexecution)

### ActivityTaskCancelRequestedEventAttributes
* ActivityTaskCancelRequestedEventAttributes `object`: Provides the details of the <code>ActivityTaskCancelRequested</code> event.
  * activityId **required** [ActivityId](#activityid)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)

### ActivityTaskCanceledEventAttributes
* ActivityTaskCanceledEventAttributes `object`: Provides the details of the <code>ActivityTaskCanceled</code> event.
  * details [Data](#data)
  * latestCancelRequestedEventId [EventId](#eventid)
  * scheduledEventId **required** [EventId](#eventid)
  * startedEventId **required** [EventId](#eventid)

### ActivityTaskCompletedEventAttributes
* ActivityTaskCompletedEventAttributes `object`: Provides the details of the <code>ActivityTaskCompleted</code> event.
  * result [Data](#data)
  * scheduledEventId **required** [EventId](#eventid)
  * startedEventId **required** [EventId](#eventid)

### ActivityTaskFailedEventAttributes
* ActivityTaskFailedEventAttributes `object`: Provides the details of the <code>ActivityTaskFailed</code> event.
  * details [Data](#data)
  * reason [FailureReason](#failurereason)
  * scheduledEventId **required** [EventId](#eventid)
  * startedEventId **required** [EventId](#eventid)

### ActivityTaskScheduledEventAttributes
* ActivityTaskScheduledEventAttributes `object`: Provides the details of the <code>ActivityTaskScheduled</code> event.
  * activityId **required** [ActivityId](#activityid)
  * activityType **required** [ActivityType](#activitytype)
  * control [Data](#data)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * heartbeatTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * input [Data](#data)
  * scheduleToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * scheduleToStartTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * startToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * taskList **required** [TaskList](#tasklist)
  * taskPriority [TaskPriority](#taskpriority)

### ActivityTaskStartedEventAttributes
* ActivityTaskStartedEventAttributes `object`: Provides the details of the <code>ActivityTaskStarted</code> event.
  * identity [Identity](#identity)
  * scheduledEventId **required** [EventId](#eventid)

### ActivityTaskStatus
* ActivityTaskStatus `object`: Status information about an activity task.
  * cancelRequested **required** [Canceled](#canceled)

### ActivityTaskTimedOutEventAttributes
* ActivityTaskTimedOutEventAttributes `object`: Provides the details of the <code>ActivityTaskTimedOut</code> event.
  * details [LimitedData](#limiteddata)
  * scheduledEventId **required** [EventId](#eventid)
  * startedEventId **required** [EventId](#eventid)
  * timeoutType **required** [ActivityTaskTimeoutType](#activitytasktimeouttype)

### ActivityTaskTimeoutType
* ActivityTaskTimeoutType `string` (values: START_TO_CLOSE, SCHEDULE_TO_START, SCHEDULE_TO_CLOSE, HEARTBEAT)

### ActivityType
* ActivityType `object`: Represents an activity type.
  * name **required** [Name](#name)
  * version **required** [Version](#version)

### ActivityTypeConfiguration
* ActivityTypeConfiguration `object`: Configuration settings registered with the activity type.
  * defaultTaskHeartbeatTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * defaultTaskList [TaskList](#tasklist)
  * defaultTaskPriority [TaskPriority](#taskpriority)
  * defaultTaskScheduleToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * defaultTaskScheduleToStartTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * defaultTaskStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)

### ActivityTypeDetail
* ActivityTypeDetail `object`: Detailed information about an activity type.
  * configuration **required** [ActivityTypeConfiguration](#activitytypeconfiguration)
  * typeInfo **required** [ActivityTypeInfo](#activitytypeinfo)

### ActivityTypeInfo
* ActivityTypeInfo `object`: Detailed information about an activity type.
  * activityType **required** [ActivityType](#activitytype)
  * creationDate **required** [Timestamp](#timestamp)
  * deprecationDate [Timestamp](#timestamp)
  * description [Description](#description)
  * status **required** [RegistrationStatus](#registrationstatus)

### ActivityTypeInfoList
* ActivityTypeInfoList `array`
  * items [ActivityTypeInfo](#activitytypeinfo)

### ActivityTypeInfos
* ActivityTypeInfos `object`: Contains a paginated list of activity type information structures.
  * nextPageToken [PageToken](#pagetoken)
  * typeInfos **required** [ActivityTypeInfoList](#activitytypeinfolist)

### Arn
* Arn `string`

### CancelTimerDecisionAttributes
* CancelTimerDecisionAttributes `object`: <p>Provides the details of the <code>CancelTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * timerId **required** [TimerId](#timerid)

### CancelTimerFailedCause
* CancelTimerFailedCause `string` (values: TIMER_ID_UNKNOWN, OPERATION_NOT_PERMITTED)

### CancelTimerFailedEventAttributes
* CancelTimerFailedEventAttributes `object`: Provides the details of the <code>CancelTimerFailed</code> event.
  * cause **required** [CancelTimerFailedCause](#canceltimerfailedcause)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * timerId **required** [TimerId](#timerid)

### CancelWorkflowExecutionDecisionAttributes
* CancelWorkflowExecutionDecisionAttributes `object`: <p>Provides the details of the <code>CancelWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * details [Data](#data)

### CancelWorkflowExecutionFailedCause
* CancelWorkflowExecutionFailedCause `string` (values: UNHANDLED_DECISION, OPERATION_NOT_PERMITTED)

### CancelWorkflowExecutionFailedEventAttributes
* CancelWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>CancelWorkflowExecutionFailed</code> event.
  * cause **required** [CancelWorkflowExecutionFailedCause](#cancelworkflowexecutionfailedcause)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)

### Canceled
* Canceled `boolean`

### CauseMessage
* CauseMessage `string`

### ChildPolicy
* ChildPolicy `string` (values: TERMINATE, REQUEST_CANCEL, ABANDON)

### ChildWorkflowExecutionCanceledEventAttributes
* ChildWorkflowExecutionCanceledEventAttributes `object`: Provide details of the <code>ChildWorkflowExecutionCanceled</code> event.
  * details [Data](#data)
  * initiatedEventId **required** [EventId](#eventid)
  * startedEventId **required** [EventId](#eventid)
  * workflowExecution **required** [WorkflowExecution](#workflowexecution)
  * workflowType **required** [WorkflowType](#workflowtype)

### ChildWorkflowExecutionCompletedEventAttributes
* ChildWorkflowExecutionCompletedEventAttributes `object`: Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event.
  * initiatedEventId **required** [EventId](#eventid)
  * result [Data](#data)
  * startedEventId **required** [EventId](#eventid)
  * workflowExecution **required** [WorkflowExecution](#workflowexecution)
  * workflowType **required** [WorkflowType](#workflowtype)

### ChildWorkflowExecutionFailedEventAttributes
* ChildWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>ChildWorkflowExecutionFailed</code> event.
  * details [Data](#data)
  * initiatedEventId **required** [EventId](#eventid)
  * reason [FailureReason](#failurereason)
  * startedEventId **required** [EventId](#eventid)
  * workflowExecution **required** [WorkflowExecution](#workflowexecution)
  * workflowType **required** [WorkflowType](#workflowtype)

### ChildWorkflowExecutionStartedEventAttributes
* ChildWorkflowExecutionStartedEventAttributes `object`: Provides the details of the <code>ChildWorkflowExecutionStarted</code> event.
  * initiatedEventId **required** [EventId](#eventid)
  * workflowExecution **required** [WorkflowExecution](#workflowexecution)
  * workflowType **required** [WorkflowType](#workflowtype)

### ChildWorkflowExecutionTerminatedEventAttributes
* ChildWorkflowExecutionTerminatedEventAttributes `object`: Provides the details of the <code>ChildWorkflowExecutionTerminated</code> event.
  * initiatedEventId **required** [EventId](#eventid)
  * startedEventId **required** [EventId](#eventid)
  * workflowExecution **required** [WorkflowExecution](#workflowexecution)
  * workflowType **required** [WorkflowType](#workflowtype)

### ChildWorkflowExecutionTimedOutEventAttributes
* ChildWorkflowExecutionTimedOutEventAttributes `object`: Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event.
  * initiatedEventId **required** [EventId](#eventid)
  * startedEventId **required** [EventId](#eventid)
  * timeoutType **required** [WorkflowExecutionTimeoutType](#workflowexecutiontimeouttype)
  * workflowExecution **required** [WorkflowExecution](#workflowexecution)
  * workflowType **required** [WorkflowType](#workflowtype)

### CloseStatus
* CloseStatus `string` (values: COMPLETED, FAILED, CANCELED, TERMINATED, CONTINUED_AS_NEW, TIMED_OUT)

### CloseStatusFilter
* CloseStatusFilter `object`: Used to filter the closed workflow executions in visibility APIs by their close status.
  * status **required** [CloseStatus](#closestatus)

### CompleteWorkflowExecutionDecisionAttributes
* CompleteWorkflowExecutionDecisionAttributes `object`: <p>Provides the details of the <code>CompleteWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * result [Data](#data)

### CompleteWorkflowExecutionFailedCause
* CompleteWorkflowExecutionFailedCause `string` (values: UNHANDLED_DECISION, OPERATION_NOT_PERMITTED)

### CompleteWorkflowExecutionFailedEventAttributes
* CompleteWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event.
  * cause **required** [CompleteWorkflowExecutionFailedCause](#completeworkflowexecutionfailedcause)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)

### ContinueAsNewWorkflowExecutionDecisionAttributes
* ContinueAsNewWorkflowExecutionDecisionAttributes `object`: <p>Provides the details of the <code>ContinueAsNewWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tag</code> – A tag used to identify the workflow execution</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * childPolicy [ChildPolicy](#childpolicy)
  * executionStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * input [Data](#data)
  * lambdaRole [Arn](#arn)
  * tagList [TagList](#taglist)
  * taskList [TaskList](#tasklist)
  * taskPriority [TaskPriority](#taskpriority)
  * taskStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * workflowTypeVersion [Version](#version)

### ContinueAsNewWorkflowExecutionFailedCause
* ContinueAsNewWorkflowExecutionFailedCause `string` (values: UNHANDLED_DECISION, WORKFLOW_TYPE_DEPRECATED, WORKFLOW_TYPE_DOES_NOT_EXIST, DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED, DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED, DEFAULT_TASK_LIST_UNDEFINED, DEFAULT_CHILD_POLICY_UNDEFINED, CONTINUE_AS_NEW_WORKFLOW_EXECUTION_RATE_EXCEEDED, OPERATION_NOT_PERMITTED)

### ContinueAsNewWorkflowExecutionFailedEventAttributes
* ContinueAsNewWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event.
  * cause **required** [ContinueAsNewWorkflowExecutionFailedCause](#continueasnewworkflowexecutionfailedcause)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)

### Count
* Count `integer`

### CountClosedWorkflowExecutionsInput
* CountClosedWorkflowExecutionsInput `object`
  * closeStatusFilter [CloseStatusFilter](#closestatusfilter)
  * closeTimeFilter [ExecutionTimeFilter](#executiontimefilter)
  * domain **required** [DomainName](#domainname)
  * executionFilter [WorkflowExecutionFilter](#workflowexecutionfilter)
  * startTimeFilter [ExecutionTimeFilter](#executiontimefilter)
  * tagFilter [TagFilter](#tagfilter)
  * typeFilter [WorkflowTypeFilter](#workflowtypefilter)

### CountOpenWorkflowExecutionsInput
* CountOpenWorkflowExecutionsInput `object`
  * domain **required** [DomainName](#domainname)
  * executionFilter [WorkflowExecutionFilter](#workflowexecutionfilter)
  * startTimeFilter **required** [ExecutionTimeFilter](#executiontimefilter)
  * tagFilter [TagFilter](#tagfilter)
  * typeFilter [WorkflowTypeFilter](#workflowtypefilter)

### CountPendingActivityTasksInput
* CountPendingActivityTasksInput `object`
  * domain **required** [DomainName](#domainname)
  * taskList **required** [TaskList](#tasklist)

### CountPendingDecisionTasksInput
* CountPendingDecisionTasksInput `object`
  * domain **required** [DomainName](#domainname)
  * taskList **required** [TaskList](#tasklist)

### Data
* Data `string`

### Decision
* Decision `object`: <p>Specifies a decision made by the decider. A decision can be one of these types:</p> <ul> <li> <p> <code>CancelTimer</code> – Cancels a previously started timer and records a <code>TimerCanceled</code> event in the history.</p> </li> <li> <p> <code>CancelWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCanceled</code> event in the history.</p> </li> <li> <p> <code>CompleteWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCompleted</code> event in the history .</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecution</code> – Closes the workflow execution and starts a new workflow execution of the same type using the same workflow ID and a unique run Id. A <code>WorkflowExecutionContinuedAsNew</code> event is recorded in the history.</p> </li> <li> <p> <code>FailWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionFailed</code> event in the history.</p> </li> <li> <p> <code>RecordMarker</code> – Records a <code>MarkerRecorded</code> event in the history. Markers can be used for adding custom information in the history for instance to let deciders know that they don't need to look at the history beyond the marker event.</p> </li> <li> <p> <code>RequestCancelActivityTask</code> – Attempts to cancel a previously scheduled activity task. If the activity task was scheduled but has not been assigned to a worker, then it is canceled. If the activity task was already assigned to a worker, then the worker is informed that cancellation has been requested in the response to <a>RecordActivityTaskHeartbeat</a>.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecution</code> – Requests that a request be made to cancel the specified external workflow execution and records a <code>RequestCancelExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>ScheduleActivityTask</code> – Schedules an activity task.</p> </li> <li> <p> <code>SignalExternalWorkflowExecution</code> – Requests a signal to be delivered to the specified external workflow execution and records a <code>SignalExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>StartChildWorkflowExecution</code> – Requests that a child workflow execution be started and records a <code>StartChildWorkflowExecutionInitiated</code> event in the history. The child workflow execution is a separate workflow execution with its own history.</p> </li> <li> <p> <code>StartTimer</code> – Starts a timer for this workflow execution and records a <code>TimerStarted</code> event in the history. This timer fires after the specified delay and record a <code>TimerFired</code> event.</p> </li> </ul> <p> <b>Access Control</b> </p> <p>If you grant permission to use <code>RespondDecisionTaskCompleted</code>, you can use IAM policies to express permissions for the list of decisions returned by this action as if they were members of the API. Treating decisions as a pseudo API maintains a uniform conceptual model and helps keep policies readable. For details and example IAM policies, see <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <p> <b>Decision Failure</b> </p> <p>Decisions can fail for several reasons</p> <ul> <li> <p>The ordering of decisions should follow a logical flow. Some decisions might not make sense in the current context of the workflow execution and therefore fails.</p> </li> <li> <p>A limit on your account was reached.</p> </li> <li> <p>The decision lacks sufficient permissions.</p> </li> </ul> <p>One of the following events might be added to the history to indicate an error. The event attribute's <code>cause</code> parameter indicates the cause. If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <ul> <li> <p> <code>ScheduleActivityTaskFailed</code> – A <code>ScheduleActivityTask</code> decision failed. This could happen if the activity type specified in the decision isn't registered, is in a deprecated state, or the decision isn't properly configured.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – A <code>RequestCancelActivityTask</code> decision failed. This could happen if there is no open activity task with the specified activityId.</p> </li> <li> <p> <code>StartTimerFailed</code> – A <code>StartTimer</code> decision failed. This could happen if there is another open timer with the same timerId.</p> </li> <li> <p> <code>CancelTimerFailed</code> – A <code>CancelTimer</code> decision failed. This could happen if there is no open timer with the specified timerId.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – A <code>StartChildWorkflowExecution</code> decision failed. This could happen if the workflow type specified isn't registered, is deprecated, or the decision isn't properly configured.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – A <code>SignalExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – A <code>RequestCancelExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A <code>CancelWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – A <code>CompleteWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – A <code>ContinueAsNewWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution or the ContinueAsNewWorkflowExecution decision was not configured correctly.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A <code>FailWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> </ul> <p>The preceding error events might occur due to an error in the decider logic, which might put the workflow execution in an unstable state The cause field in the event structure for the error event indicates the cause of the error.</p> <note> <p>A workflow execution may be closed by the decider by returning one of the following decisions when completing a decision task: <code>CompleteWorkflowExecution</code>, <code>FailWorkflowExecution</code>, <code>CancelWorkflowExecution</code> and <code>ContinueAsNewWorkflowExecution</code>. An <code>UnhandledDecision</code> fault is returned if a workflow closing decision is specified and a signal or activity event had been added to the history while the decision task was being performed by the decider. Unlike the above situations which are logic issues, this fault is always possible because of race conditions in a distributed system. The right action here is to call <a>RespondDecisionTaskCompleted</a> without any decisions. This would result in another decision task with these new events included in the history. The decider should handle the new events and may decide to close the workflow execution.</p> </note> <p> <b>How to Code a Decision</b> </p> <p>You code a decision by first setting the decision type field to one of the above decision values, and then set the corresponding attributes field shown below:</p> <ul> <li> <p> <code> <a>ScheduleActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CompleteWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>FailWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>ContinueAsNewWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RecordMarkerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>SignalExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartChildWorkflowExecutionDecisionAttributes</a> </code> </p> </li> </ul>
  * cancelTimerDecisionAttributes [CancelTimerDecisionAttributes](#canceltimerdecisionattributes)
  * cancelWorkflowExecutionDecisionAttributes [CancelWorkflowExecutionDecisionAttributes](#cancelworkflowexecutiondecisionattributes)
  * completeWorkflowExecutionDecisionAttributes [CompleteWorkflowExecutionDecisionAttributes](#completeworkflowexecutiondecisionattributes)
  * continueAsNewWorkflowExecutionDecisionAttributes [ContinueAsNewWorkflowExecutionDecisionAttributes](#continueasnewworkflowexecutiondecisionattributes)
  * decisionType **required** [DecisionType](#decisiontype)
  * failWorkflowExecutionDecisionAttributes [FailWorkflowExecutionDecisionAttributes](#failworkflowexecutiondecisionattributes)
  * recordMarkerDecisionAttributes [RecordMarkerDecisionAttributes](#recordmarkerdecisionattributes)
  * requestCancelActivityTaskDecisionAttributes [RequestCancelActivityTaskDecisionAttributes](#requestcancelactivitytaskdecisionattributes)
  * requestCancelExternalWorkflowExecutionDecisionAttributes [RequestCancelExternalWorkflowExecutionDecisionAttributes](#requestcancelexternalworkflowexecutiondecisionattributes)
  * scheduleActivityTaskDecisionAttributes [ScheduleActivityTaskDecisionAttributes](#scheduleactivitytaskdecisionattributes)
  * scheduleLambdaFunctionDecisionAttributes [ScheduleLambdaFunctionDecisionAttributes](#schedulelambdafunctiondecisionattributes)
  * signalExternalWorkflowExecutionDecisionAttributes [SignalExternalWorkflowExecutionDecisionAttributes](#signalexternalworkflowexecutiondecisionattributes)
  * startChildWorkflowExecutionDecisionAttributes [StartChildWorkflowExecutionDecisionAttributes](#startchildworkflowexecutiondecisionattributes)
  * startTimerDecisionAttributes [StartTimerDecisionAttributes](#starttimerdecisionattributes)

### DecisionList
* DecisionList `array`
  * items [Decision](#decision)

### DecisionTask
* DecisionTask `object`: A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.
  * events **required** [HistoryEventList](#historyeventlist)
  * nextPageToken [PageToken](#pagetoken)
  * previousStartedEventId [EventId](#eventid)
  * startedEventId **required** [EventId](#eventid)
  * taskToken **required** [TaskToken](#tasktoken)
  * workflowExecution **required** [WorkflowExecution](#workflowexecution)
  * workflowType **required** [WorkflowType](#workflowtype)

### DecisionTaskCompletedEventAttributes
* DecisionTaskCompletedEventAttributes `object`: Provides the details of the <code>DecisionTaskCompleted</code> event.
  * executionContext [Data](#data)
  * scheduledEventId **required** [EventId](#eventid)
  * startedEventId **required** [EventId](#eventid)

### DecisionTaskScheduledEventAttributes
* DecisionTaskScheduledEventAttributes `object`: Provides details about the <code>DecisionTaskScheduled</code> event.
  * startToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * taskList **required** [TaskList](#tasklist)
  * taskPriority [TaskPriority](#taskpriority)

### DecisionTaskStartedEventAttributes
* DecisionTaskStartedEventAttributes `object`: Provides the details of the <code>DecisionTaskStarted</code> event.
  * identity [Identity](#identity)
  * scheduledEventId **required** [EventId](#eventid)

### DecisionTaskTimedOutEventAttributes
* DecisionTaskTimedOutEventAttributes `object`: Provides the details of the <code>DecisionTaskTimedOut</code> event.
  * scheduledEventId **required** [EventId](#eventid)
  * startedEventId **required** [EventId](#eventid)
  * timeoutType **required** [DecisionTaskTimeoutType](#decisiontasktimeouttype)

### DecisionTaskTimeoutType
* DecisionTaskTimeoutType `string` (values: START_TO_CLOSE)

### DecisionType
* DecisionType `string` (values: ScheduleActivityTask, RequestCancelActivityTask, CompleteWorkflowExecution, FailWorkflowExecution, CancelWorkflowExecution, ContinueAsNewWorkflowExecution, RecordMarker, StartTimer, CancelTimer, SignalExternalWorkflowExecution, RequestCancelExternalWorkflowExecution, StartChildWorkflowExecution, ScheduleLambdaFunction)

### DefaultUndefinedFault
* DefaultUndefinedFault `object`: <p>The <code>StartWorkflowExecution</code> API action was called without the required parameters set.</p> <p>Some workflow execution parameters, such as the decision <code>taskList</code>, must be set to start the execution. However, these parameters might have been set as defaults when the workflow type was registered. In this case, you can omit these parameters from the <code>StartWorkflowExecution</code> call and Amazon SWF uses the values defined in the workflow type.</p> <note> <p>If these parameters aren't set and no default parameters were defined in the workflow type, this error is displayed.</p> </note>
  * message [ErrorMessage](#errormessage)

### DeprecateActivityTypeInput
* DeprecateActivityTypeInput `object`
  * activityType **required** [ActivityType](#activitytype)
  * domain **required** [DomainName](#domainname)

### DeprecateDomainInput
* DeprecateDomainInput `object`
  * name **required** [DomainName](#domainname)

### DeprecateWorkflowTypeInput
* DeprecateWorkflowTypeInput `object`
  * domain **required** [DomainName](#domainname)
  * workflowType **required** [WorkflowType](#workflowtype)

### DescribeActivityTypeInput
* DescribeActivityTypeInput `object`
  * activityType **required** [ActivityType](#activitytype)
  * domain **required** [DomainName](#domainname)

### DescribeDomainInput
* DescribeDomainInput `object`
  * name **required** [DomainName](#domainname)

### DescribeWorkflowExecutionInput
* DescribeWorkflowExecutionInput `object`
  * domain **required** [DomainName](#domainname)
  * execution **required** [WorkflowExecution](#workflowexecution)

### DescribeWorkflowTypeInput
* DescribeWorkflowTypeInput `object`
  * domain **required** [DomainName](#domainname)
  * workflowType **required** [WorkflowType](#workflowtype)

### Description
* Description `string`

### DomainAlreadyExistsFault
* DomainAlreadyExistsFault `object`: Returned if the specified domain already exists. You get this fault even if the existing domain is in deprecated status.
  * message [ErrorMessage](#errormessage)

### DomainConfiguration
* DomainConfiguration `object`: Contains the configuration settings of a domain.
  * workflowExecutionRetentionPeriodInDays **required** [DurationInDays](#durationindays)

### DomainDeprecatedFault
* DomainDeprecatedFault `object`: Returned when the specified domain has been deprecated.
  * message [ErrorMessage](#errormessage)

### DomainDetail
* DomainDetail `object`: Contains details of a domain.
  * configuration **required** [DomainConfiguration](#domainconfiguration)
  * domainInfo **required** [DomainInfo](#domaininfo)

### DomainInfo
* DomainInfo `object`: Contains general information about a domain.
  * description [Description](#description)
  * name **required** [DomainName](#domainname)
  * status **required** [RegistrationStatus](#registrationstatus)

### DomainInfoList
* DomainInfoList `array`
  * items [DomainInfo](#domaininfo)

### DomainInfos
* DomainInfos `object`: Contains a paginated collection of DomainInfo structures.
  * domainInfos **required** [DomainInfoList](#domaininfolist)
  * nextPageToken [PageToken](#pagetoken)

### DomainName
* DomainName `string`

### DurationInDays
* DurationInDays `string`

### DurationInSeconds
* DurationInSeconds `string`

### DurationInSecondsOptional
* DurationInSecondsOptional `string`

### ErrorMessage
* ErrorMessage `string`

### EventId
* EventId `integer`

### EventType
* EventType `string` (values: WorkflowExecutionStarted, WorkflowExecutionCancelRequested, WorkflowExecutionCompleted, CompleteWorkflowExecutionFailed, WorkflowExecutionFailed, FailWorkflowExecutionFailed, WorkflowExecutionTimedOut, WorkflowExecutionCanceled, CancelWorkflowExecutionFailed, WorkflowExecutionContinuedAsNew, ContinueAsNewWorkflowExecutionFailed, WorkflowExecutionTerminated, DecisionTaskScheduled, DecisionTaskStarted, DecisionTaskCompleted, DecisionTaskTimedOut, ActivityTaskScheduled, ScheduleActivityTaskFailed, ActivityTaskStarted, ActivityTaskCompleted, ActivityTaskFailed, ActivityTaskTimedOut, ActivityTaskCanceled, ActivityTaskCancelRequested, RequestCancelActivityTaskFailed, WorkflowExecutionSignaled, MarkerRecorded, RecordMarkerFailed, TimerStarted, StartTimerFailed, TimerFired, TimerCanceled, CancelTimerFailed, StartChildWorkflowExecutionInitiated, StartChildWorkflowExecutionFailed, ChildWorkflowExecutionStarted, ChildWorkflowExecutionCompleted, ChildWorkflowExecutionFailed, ChildWorkflowExecutionTimedOut, ChildWorkflowExecutionCanceled, ChildWorkflowExecutionTerminated, SignalExternalWorkflowExecutionInitiated, SignalExternalWorkflowExecutionFailed, ExternalWorkflowExecutionSignaled, RequestCancelExternalWorkflowExecutionInitiated, RequestCancelExternalWorkflowExecutionFailed, ExternalWorkflowExecutionCancelRequested, LambdaFunctionScheduled, LambdaFunctionStarted, LambdaFunctionCompleted, LambdaFunctionFailed, LambdaFunctionTimedOut, ScheduleLambdaFunctionFailed, StartLambdaFunctionFailed)

### ExecutionStatus
* ExecutionStatus `string` (values: OPEN, CLOSED)

### ExecutionTimeFilter
* ExecutionTimeFilter `object`: Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code> 
  * latestDate [Timestamp](#timestamp)
  * oldestDate **required** [Timestamp](#timestamp)

### ExternalWorkflowExecutionCancelRequestedEventAttributes
* ExternalWorkflowExecutionCancelRequestedEventAttributes `object`: Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event.
  * initiatedEventId **required** [EventId](#eventid)
  * workflowExecution **required** [WorkflowExecution](#workflowexecution)

### ExternalWorkflowExecutionSignaledEventAttributes
* ExternalWorkflowExecutionSignaledEventAttributes `object`: Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event.
  * initiatedEventId **required** [EventId](#eventid)
  * workflowExecution **required** [WorkflowExecution](#workflowexecution)

### FailWorkflowExecutionDecisionAttributes
* FailWorkflowExecutionDecisionAttributes `object`: <p>Provides the details of the <code>FailWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * details [Data](#data)
  * reason [FailureReason](#failurereason)

### FailWorkflowExecutionFailedCause
* FailWorkflowExecutionFailedCause `string` (values: UNHANDLED_DECISION, OPERATION_NOT_PERMITTED)

### FailWorkflowExecutionFailedEventAttributes
* FailWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>FailWorkflowExecutionFailed</code> event.
  * cause **required** [FailWorkflowExecutionFailedCause](#failworkflowexecutionfailedcause)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)

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
  * domain **required** [DomainName](#domainname)
  * execution **required** [WorkflowExecution](#workflowexecution)
  * maximumPageSize [PageSize](#pagesize)
  * nextPageToken [PageToken](#pagetoken)
  * reverseOrder [ReverseOrder](#reverseorder)

### History
* History `object`: Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution.
  * events **required** [HistoryEventList](#historyeventlist)
  * nextPageToken [PageToken](#pagetoken)

### HistoryEvent
* HistoryEvent `object`: <p>Event within a workflow execution. A history event can be one of these types:</p> <ul> <li> <p> <code>ActivityTaskCancelRequested</code> – A <code>RequestCancelActivityTask</code> decision was received by the system.</p> </li> <li> <p> <code>ActivityTaskCanceled</code> – The activity task was successfully canceled.</p> </li> <li> <p> <code>ActivityTaskCompleted</code> – An activity worker successfully completed an activity task by calling <a>RespondActivityTaskCompleted</a>.</p> </li> <li> <p> <code>ActivityTaskFailed</code> – An activity worker failed an activity task by calling <a>RespondActivityTaskFailed</a>.</p> </li> <li> <p> <code>ActivityTaskScheduled</code> – An activity task was scheduled for execution.</p> </li> <li> <p> <code>ActivityTaskStarted</code> – The scheduled activity task was dispatched to a worker.</p> </li> <li> <p> <code>ActivityTaskTimedOut</code> – The activity task timed out.</p> </li> <li> <p> <code>CancelTimerFailed</code> – Failed to process CancelTimer decision. This happens when the decision isn't configured properly, for example no timer exists with the specified timer Id.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A request to cancel a workflow execution failed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCanceled</code> – A child workflow execution, started by this workflow execution, was canceled and closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCompleted</code> – A child workflow execution, started by this workflow execution, completed successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionFailed</code> – A child workflow execution, started by this workflow execution, failed to complete successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionStarted</code> – A child workflow execution was successfully started.</p> </li> <li> <p> <code>ChildWorkflowExecutionTerminated</code> – A child workflow execution, started by this workflow execution, was terminated.</p> </li> <li> <p> <code>ChildWorkflowExecutionTimedOut</code> – A child workflow execution, started by this workflow execution, timed out and was closed.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – The workflow execution failed to complete.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – The workflow execution failed to complete after being continued as a new workflow execution.</p> </li> <li> <p> <code>DecisionTaskCompleted</code> – The decider successfully completed a decision task by calling <a>RespondDecisionTaskCompleted</a>.</p> </li> <li> <p> <code>DecisionTaskScheduled</code> – A decision task was scheduled for the workflow execution.</p> </li> <li> <p> <code>DecisionTaskStarted</code> – The decision task was dispatched to a decider.</p> </li> <li> <p> <code>DecisionTaskTimedOut</code> – The decision task timed out.</p> </li> <li> <p> <code>ExternalWorkflowExecutionCancelRequested</code> – Request to cancel an external workflow execution was successfully delivered to the target execution.</p> </li> <li> <p> <code>ExternalWorkflowExecutionSignaled</code> – A signal, requested by this workflow execution, was successfully delivered to the target external workflow execution.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A request to mark a workflow execution as failed, itself failed.</p> </li> <li> <p> <code>MarkerRecorded</code> – A marker was recorded in the workflow history as the result of a <code>RecordMarker</code> decision.</p> </li> <li> <p> <code>RecordMarkerFailed</code> – A <code>RecordMarker</code> decision was returned as failed.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – Failed to process RequestCancelActivityTask decision. This happens when the decision isn't configured properly.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – Request to cancel an external workflow execution failed.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionInitiated</code> – A request was made to request the cancellation of an external workflow execution.</p> </li> <li> <p> <code>ScheduleActivityTaskFailed</code> – Failed to process ScheduleActivityTask decision. This happens when the decision isn't configured properly, for example the activity type specified isn't registered.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – The request to signal an external workflow execution failed.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionInitiated</code> – A request to signal an external workflow was made.</p> </li> <li> <p> <code>StartActivityTaskFailed</code> – A scheduled activity task failed to start.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – Failed to process StartChildWorkflowExecution decision. This happens when the decision isn't configured properly, for example the workflow type specified isn't registered.</p> </li> <li> <p> <code>StartChildWorkflowExecutionInitiated</code> – A request was made to start a child workflow execution.</p> </li> <li> <p> <code>StartTimerFailed</code> – Failed to process StartTimer decision. This happens when the decision isn't configured properly, for example a timer already exists with the specified timer Id.</p> </li> <li> <p> <code>TimerCanceled</code> – A timer, previously started for this workflow execution, was successfully canceled.</p> </li> <li> <p> <code>TimerFired</code> – A timer, previously started for this workflow execution, fired.</p> </li> <li> <p> <code>TimerStarted</code> – A timer was started for the workflow execution due to a <code>StartTimer</code> decision.</p> </li> <li> <p> <code>WorkflowExecutionCancelRequested</code> – A request to cancel this workflow execution was made.</p> </li> <li> <p> <code>WorkflowExecutionCanceled</code> – The workflow execution was successfully canceled and closed.</p> </li> <li> <p> <code>WorkflowExecutionCompleted</code> – The workflow execution was closed due to successful completion.</p> </li> <li> <p> <code>WorkflowExecutionContinuedAsNew</code> – The workflow execution was closed and a new execution of the same type was created with the same workflowId.</p> </li> <li> <p> <code>WorkflowExecutionFailed</code> – The workflow execution closed due to a failure.</p> </li> <li> <p> <code>WorkflowExecutionSignaled</code> – An external signal was received for the workflow execution.</p> </li> <li> <p> <code>WorkflowExecutionStarted</code> – The workflow execution was started.</p> </li> <li> <p> <code>WorkflowExecutionTerminated</code> – The workflow execution was terminated.</p> </li> <li> <p> <code>WorkflowExecutionTimedOut</code> – The workflow execution was closed because a time out was exceeded.</p> </li> </ul>
  * activityTaskCancelRequestedEventAttributes [ActivityTaskCancelRequestedEventAttributes](#activitytaskcancelrequestedeventattributes)
  * activityTaskCanceledEventAttributes [ActivityTaskCanceledEventAttributes](#activitytaskcanceledeventattributes)
  * activityTaskCompletedEventAttributes [ActivityTaskCompletedEventAttributes](#activitytaskcompletedeventattributes)
  * activityTaskFailedEventAttributes [ActivityTaskFailedEventAttributes](#activitytaskfailedeventattributes)
  * activityTaskScheduledEventAttributes [ActivityTaskScheduledEventAttributes](#activitytaskscheduledeventattributes)
  * activityTaskStartedEventAttributes [ActivityTaskStartedEventAttributes](#activitytaskstartedeventattributes)
  * activityTaskTimedOutEventAttributes [ActivityTaskTimedOutEventAttributes](#activitytasktimedouteventattributes)
  * cancelTimerFailedEventAttributes [CancelTimerFailedEventAttributes](#canceltimerfailedeventattributes)
  * cancelWorkflowExecutionFailedEventAttributes [CancelWorkflowExecutionFailedEventAttributes](#cancelworkflowexecutionfailedeventattributes)
  * childWorkflowExecutionCanceledEventAttributes [ChildWorkflowExecutionCanceledEventAttributes](#childworkflowexecutioncanceledeventattributes)
  * childWorkflowExecutionCompletedEventAttributes [ChildWorkflowExecutionCompletedEventAttributes](#childworkflowexecutioncompletedeventattributes)
  * childWorkflowExecutionFailedEventAttributes [ChildWorkflowExecutionFailedEventAttributes](#childworkflowexecutionfailedeventattributes)
  * childWorkflowExecutionStartedEventAttributes [ChildWorkflowExecutionStartedEventAttributes](#childworkflowexecutionstartedeventattributes)
  * childWorkflowExecutionTerminatedEventAttributes [ChildWorkflowExecutionTerminatedEventAttributes](#childworkflowexecutionterminatedeventattributes)
  * childWorkflowExecutionTimedOutEventAttributes [ChildWorkflowExecutionTimedOutEventAttributes](#childworkflowexecutiontimedouteventattributes)
  * completeWorkflowExecutionFailedEventAttributes [CompleteWorkflowExecutionFailedEventAttributes](#completeworkflowexecutionfailedeventattributes)
  * continueAsNewWorkflowExecutionFailedEventAttributes [ContinueAsNewWorkflowExecutionFailedEventAttributes](#continueasnewworkflowexecutionfailedeventattributes)
  * decisionTaskCompletedEventAttributes [DecisionTaskCompletedEventAttributes](#decisiontaskcompletedeventattributes)
  * decisionTaskScheduledEventAttributes [DecisionTaskScheduledEventAttributes](#decisiontaskscheduledeventattributes)
  * decisionTaskStartedEventAttributes [DecisionTaskStartedEventAttributes](#decisiontaskstartedeventattributes)
  * decisionTaskTimedOutEventAttributes [DecisionTaskTimedOutEventAttributes](#decisiontasktimedouteventattributes)
  * eventId **required** [EventId](#eventid)
  * eventTimestamp **required** [Timestamp](#timestamp)
  * eventType **required** [EventType](#eventtype)
  * externalWorkflowExecutionCancelRequestedEventAttributes [ExternalWorkflowExecutionCancelRequestedEventAttributes](#externalworkflowexecutioncancelrequestedeventattributes)
  * externalWorkflowExecutionSignaledEventAttributes [ExternalWorkflowExecutionSignaledEventAttributes](#externalworkflowexecutionsignaledeventattributes)
  * failWorkflowExecutionFailedEventAttributes [FailWorkflowExecutionFailedEventAttributes](#failworkflowexecutionfailedeventattributes)
  * lambdaFunctionCompletedEventAttributes [LambdaFunctionCompletedEventAttributes](#lambdafunctioncompletedeventattributes)
  * lambdaFunctionFailedEventAttributes [LambdaFunctionFailedEventAttributes](#lambdafunctionfailedeventattributes)
  * lambdaFunctionScheduledEventAttributes [LambdaFunctionScheduledEventAttributes](#lambdafunctionscheduledeventattributes)
  * lambdaFunctionStartedEventAttributes [LambdaFunctionStartedEventAttributes](#lambdafunctionstartedeventattributes)
  * lambdaFunctionTimedOutEventAttributes [LambdaFunctionTimedOutEventAttributes](#lambdafunctiontimedouteventattributes)
  * markerRecordedEventAttributes [MarkerRecordedEventAttributes](#markerrecordedeventattributes)
  * recordMarkerFailedEventAttributes [RecordMarkerFailedEventAttributes](#recordmarkerfailedeventattributes)
  * requestCancelActivityTaskFailedEventAttributes [RequestCancelActivityTaskFailedEventAttributes](#requestcancelactivitytaskfailedeventattributes)
  * requestCancelExternalWorkflowExecutionFailedEventAttributes [RequestCancelExternalWorkflowExecutionFailedEventAttributes](#requestcancelexternalworkflowexecutionfailedeventattributes)
  * requestCancelExternalWorkflowExecutionInitiatedEventAttributes [RequestCancelExternalWorkflowExecutionInitiatedEventAttributes](#requestcancelexternalworkflowexecutioninitiatedeventattributes)
  * scheduleActivityTaskFailedEventAttributes [ScheduleActivityTaskFailedEventAttributes](#scheduleactivitytaskfailedeventattributes)
  * scheduleLambdaFunctionFailedEventAttributes [ScheduleLambdaFunctionFailedEventAttributes](#schedulelambdafunctionfailedeventattributes)
  * signalExternalWorkflowExecutionFailedEventAttributes [SignalExternalWorkflowExecutionFailedEventAttributes](#signalexternalworkflowexecutionfailedeventattributes)
  * signalExternalWorkflowExecutionInitiatedEventAttributes [SignalExternalWorkflowExecutionInitiatedEventAttributes](#signalexternalworkflowexecutioninitiatedeventattributes)
  * startChildWorkflowExecutionFailedEventAttributes [StartChildWorkflowExecutionFailedEventAttributes](#startchildworkflowexecutionfailedeventattributes)
  * startChildWorkflowExecutionInitiatedEventAttributes [StartChildWorkflowExecutionInitiatedEventAttributes](#startchildworkflowexecutioninitiatedeventattributes)
  * startLambdaFunctionFailedEventAttributes [StartLambdaFunctionFailedEventAttributes](#startlambdafunctionfailedeventattributes)
  * startTimerFailedEventAttributes [StartTimerFailedEventAttributes](#starttimerfailedeventattributes)
  * timerCanceledEventAttributes [TimerCanceledEventAttributes](#timercanceledeventattributes)
  * timerFiredEventAttributes [TimerFiredEventAttributes](#timerfiredeventattributes)
  * timerStartedEventAttributes [TimerStartedEventAttributes](#timerstartedeventattributes)
  * workflowExecutionCancelRequestedEventAttributes [WorkflowExecutionCancelRequestedEventAttributes](#workflowexecutioncancelrequestedeventattributes)
  * workflowExecutionCanceledEventAttributes [WorkflowExecutionCanceledEventAttributes](#workflowexecutioncanceledeventattributes)
  * workflowExecutionCompletedEventAttributes [WorkflowExecutionCompletedEventAttributes](#workflowexecutioncompletedeventattributes)
  * workflowExecutionContinuedAsNewEventAttributes [WorkflowExecutionContinuedAsNewEventAttributes](#workflowexecutioncontinuedasneweventattributes)
  * workflowExecutionFailedEventAttributes [WorkflowExecutionFailedEventAttributes](#workflowexecutionfailedeventattributes)
  * workflowExecutionSignaledEventAttributes [WorkflowExecutionSignaledEventAttributes](#workflowexecutionsignaledeventattributes)
  * workflowExecutionStartedEventAttributes [WorkflowExecutionStartedEventAttributes](#workflowexecutionstartedeventattributes)
  * workflowExecutionTerminatedEventAttributes [WorkflowExecutionTerminatedEventAttributes](#workflowexecutionterminatedeventattributes)
  * workflowExecutionTimedOutEventAttributes [WorkflowExecutionTimedOutEventAttributes](#workflowexecutiontimedouteventattributes)

### HistoryEventList
* HistoryEventList `array`
  * items [HistoryEvent](#historyevent)

### Identity
* Identity `string`

### LambdaFunctionCompletedEventAttributes
* LambdaFunctionCompletedEventAttributes `object`: Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types.
  * result [Data](#data)
  * scheduledEventId **required** [EventId](#eventid)
  * startedEventId **required** [EventId](#eventid)

### LambdaFunctionFailedEventAttributes
* LambdaFunctionFailedEventAttributes `object`: Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types.
  * details [Data](#data)
  * reason [FailureReason](#failurereason)
  * scheduledEventId **required** [EventId](#eventid)
  * startedEventId **required** [EventId](#eventid)

### LambdaFunctionScheduledEventAttributes
* LambdaFunctionScheduledEventAttributes `object`: Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set for other event types.
  * control [Data](#data)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * id **required** [FunctionId](#functionid)
  * input [FunctionInput](#functioninput)
  * name **required** [FunctionName](#functionname)
  * startToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)

### LambdaFunctionStartedEventAttributes
* LambdaFunctionStartedEventAttributes `object`: Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types.
  * scheduledEventId **required** [EventId](#eventid)

### LambdaFunctionTimedOutEventAttributes
* LambdaFunctionTimedOutEventAttributes `object`: Provides details of the <code>LambdaFunctionTimedOut</code> event.
  * scheduledEventId **required** [EventId](#eventid)
  * startedEventId **required** [EventId](#eventid)
  * timeoutType [LambdaFunctionTimeoutType](#lambdafunctiontimeouttype)

### LambdaFunctionTimeoutType
* LambdaFunctionTimeoutType `string` (values: START_TO_CLOSE)

### LimitExceededFault
* LimitExceededFault `object`: Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.
  * message [ErrorMessage](#errormessage)

### LimitedData
* LimitedData `string`

### ListActivityTypesInput
* ListActivityTypesInput `object`
  * domain **required** [DomainName](#domainname)
  * maximumPageSize [PageSize](#pagesize)
  * name [Name](#name)
  * nextPageToken [PageToken](#pagetoken)
  * registrationStatus **required** [RegistrationStatus](#registrationstatus)
  * reverseOrder [ReverseOrder](#reverseorder)

### ListClosedWorkflowExecutionsInput
* ListClosedWorkflowExecutionsInput `object`
  * closeStatusFilter [CloseStatusFilter](#closestatusfilter)
  * closeTimeFilter [ExecutionTimeFilter](#executiontimefilter)
  * domain **required** [DomainName](#domainname)
  * executionFilter [WorkflowExecutionFilter](#workflowexecutionfilter)
  * maximumPageSize [PageSize](#pagesize)
  * nextPageToken [PageToken](#pagetoken)
  * reverseOrder [ReverseOrder](#reverseorder)
  * startTimeFilter [ExecutionTimeFilter](#executiontimefilter)
  * tagFilter [TagFilter](#tagfilter)
  * typeFilter [WorkflowTypeFilter](#workflowtypefilter)

### ListDomainsInput
* ListDomainsInput `object`
  * maximumPageSize [PageSize](#pagesize)
  * nextPageToken [PageToken](#pagetoken)
  * registrationStatus **required** [RegistrationStatus](#registrationstatus)
  * reverseOrder [ReverseOrder](#reverseorder)

### ListOpenWorkflowExecutionsInput
* ListOpenWorkflowExecutionsInput `object`
  * domain **required** [DomainName](#domainname)
  * executionFilter [WorkflowExecutionFilter](#workflowexecutionfilter)
  * maximumPageSize [PageSize](#pagesize)
  * nextPageToken [PageToken](#pagetoken)
  * reverseOrder [ReverseOrder](#reverseorder)
  * startTimeFilter **required** [ExecutionTimeFilter](#executiontimefilter)
  * tagFilter [TagFilter](#tagfilter)
  * typeFilter [WorkflowTypeFilter](#workflowtypefilter)

### ListWorkflowTypesInput
* ListWorkflowTypesInput `object`
  * domain **required** [DomainName](#domainname)
  * maximumPageSize [PageSize](#pagesize)
  * name [Name](#name)
  * nextPageToken [PageToken](#pagetoken)
  * registrationStatus **required** [RegistrationStatus](#registrationstatus)
  * reverseOrder [ReverseOrder](#reverseorder)

### MarkerName
* MarkerName `string`

### MarkerRecordedEventAttributes
* MarkerRecordedEventAttributes `object`: Provides the details of the <code>MarkerRecorded</code> event.
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * details [Data](#data)
  * markerName **required** [MarkerName](#markername)

### Name
* Name `string`

### OpenDecisionTasksCount
* OpenDecisionTasksCount `integer`

### OperationNotPermittedFault
* OperationNotPermittedFault `object`: Returned when the caller doesn't have sufficient permissions to invoke the action.
  * message [ErrorMessage](#errormessage)

### PageSize
* PageSize `integer`

### PageToken
* PageToken `string`

### PendingTaskCount
* PendingTaskCount `object`: Contains the count of tasks in a task list.
  * count **required** [Count](#count)
  * truncated [Truncated](#truncated)

### PollForActivityTaskInput
* PollForActivityTaskInput `object`
  * domain **required** [DomainName](#domainname)
  * identity [Identity](#identity)
  * taskList **required** [TaskList](#tasklist)

### PollForDecisionTaskInput
* PollForDecisionTaskInput `object`
  * domain **required** [DomainName](#domainname)
  * identity [Identity](#identity)
  * maximumPageSize [PageSize](#pagesize)
  * nextPageToken [PageToken](#pagetoken)
  * reverseOrder [ReverseOrder](#reverseorder)
  * taskList **required** [TaskList](#tasklist)

### RecordActivityTaskHeartbeatInput
* RecordActivityTaskHeartbeatInput `object`
  * details [LimitedData](#limiteddata)
  * taskToken **required** [TaskToken](#tasktoken)

### RecordMarkerDecisionAttributes
* RecordMarkerDecisionAttributes `object`: <p>Provides the details of the <code>RecordMarker</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * details [Data](#data)
  * markerName **required** [MarkerName](#markername)

### RecordMarkerFailedCause
* RecordMarkerFailedCause `string` (values: OPERATION_NOT_PERMITTED)

### RecordMarkerFailedEventAttributes
* RecordMarkerFailedEventAttributes `object`: Provides the details of the <code>RecordMarkerFailed</code> event.
  * cause **required** [RecordMarkerFailedCause](#recordmarkerfailedcause)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * markerName **required** [MarkerName](#markername)

### RegisterActivityTypeInput
* RegisterActivityTypeInput `object`
  * defaultTaskHeartbeatTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * defaultTaskList [TaskList](#tasklist)
  * defaultTaskPriority [TaskPriority](#taskpriority)
  * defaultTaskScheduleToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * defaultTaskScheduleToStartTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * defaultTaskStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * description [Description](#description)
  * domain **required** [DomainName](#domainname)
  * name **required** [Name](#name)
  * version **required** [Version](#version)

### RegisterDomainInput
* RegisterDomainInput `object`
  * description [Description](#description)
  * name **required** [DomainName](#domainname)
  * workflowExecutionRetentionPeriodInDays **required** [DurationInDays](#durationindays)

### RegisterWorkflowTypeInput
* RegisterWorkflowTypeInput `object`
  * defaultChildPolicy [ChildPolicy](#childpolicy)
  * defaultExecutionStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * defaultLambdaRole [Arn](#arn)
  * defaultTaskList [TaskList](#tasklist)
  * defaultTaskPriority [TaskPriority](#taskpriority)
  * defaultTaskStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * description [Description](#description)
  * domain **required** [DomainName](#domainname)
  * name **required** [Name](#name)
  * version **required** [Version](#version)

### RegistrationStatus
* RegistrationStatus `string` (values: REGISTERED, DEPRECATED)

### RequestCancelActivityTaskDecisionAttributes
* RequestCancelActivityTaskDecisionAttributes `object`: <p>Provides the details of the <code>RequestCancelActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * activityId **required** [ActivityId](#activityid)

### RequestCancelActivityTaskFailedCause
* RequestCancelActivityTaskFailedCause `string` (values: ACTIVITY_ID_UNKNOWN, OPERATION_NOT_PERMITTED)

### RequestCancelActivityTaskFailedEventAttributes
* RequestCancelActivityTaskFailedEventAttributes `object`: Provides the details of the <code>RequestCancelActivityTaskFailed</code> event.
  * activityId **required** [ActivityId](#activityid)
  * cause **required** [RequestCancelActivityTaskFailedCause](#requestcancelactivitytaskfailedcause)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)

### RequestCancelExternalWorkflowExecutionDecisionAttributes
* RequestCancelExternalWorkflowExecutionDecisionAttributes `object`: <p>Provides the details of the <code>RequestCancelExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * control [Data](#data)
  * runId [WorkflowRunIdOptional](#workflowrunidoptional)
  * workflowId **required** [WorkflowId](#workflowid)

### RequestCancelExternalWorkflowExecutionFailedCause
* RequestCancelExternalWorkflowExecutionFailedCause `string` (values: UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION, REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED, OPERATION_NOT_PERMITTED)

### RequestCancelExternalWorkflowExecutionFailedEventAttributes
* RequestCancelExternalWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event.
  * cause **required** [RequestCancelExternalWorkflowExecutionFailedCause](#requestcancelexternalworkflowexecutionfailedcause)
  * control [Data](#data)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * initiatedEventId **required** [EventId](#eventid)
  * runId [WorkflowRunIdOptional](#workflowrunidoptional)
  * workflowId **required** [WorkflowId](#workflowid)

### RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
* RequestCancelExternalWorkflowExecutionInitiatedEventAttributes `object`: Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event.
  * control [Data](#data)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * runId [WorkflowRunIdOptional](#workflowrunidoptional)
  * workflowId **required** [WorkflowId](#workflowid)

### RequestCancelWorkflowExecutionInput
* RequestCancelWorkflowExecutionInput `object`
  * domain **required** [DomainName](#domainname)
  * runId [WorkflowRunIdOptional](#workflowrunidoptional)
  * workflowId **required** [WorkflowId](#workflowid)

### RespondActivityTaskCanceledInput
* RespondActivityTaskCanceledInput `object`
  * details [Data](#data)
  * taskToken **required** [TaskToken](#tasktoken)

### RespondActivityTaskCompletedInput
* RespondActivityTaskCompletedInput `object`
  * result [Data](#data)
  * taskToken **required** [TaskToken](#tasktoken)

### RespondActivityTaskFailedInput
* RespondActivityTaskFailedInput `object`
  * details [Data](#data)
  * reason [FailureReason](#failurereason)
  * taskToken **required** [TaskToken](#tasktoken)

### RespondDecisionTaskCompletedInput
* RespondDecisionTaskCompletedInput `object`: Input data for a TaskCompleted response to a decision task.
  * decisions [DecisionList](#decisionlist)
  * executionContext [Data](#data)
  * taskToken **required** [TaskToken](#tasktoken)

### ReverseOrder
* ReverseOrder `boolean`

### Run
* Run `object`: Specifies the <code>runId</code> of a workflow execution.
  * runId [WorkflowRunId](#workflowrunid)

### ScheduleActivityTaskDecisionAttributes
* ScheduleActivityTaskDecisionAttributes `object`: <p>Provides the details of the <code>ScheduleActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code> – String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code> – String constraint. The key is <code>swf:activityType.version</code>.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * activityId **required** [ActivityId](#activityid)
  * activityType **required** [ActivityType](#activitytype)
  * control [Data](#data)
  * heartbeatTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * input [Data](#data)
  * scheduleToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * scheduleToStartTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * startToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * taskList [TaskList](#tasklist)
  * taskPriority [TaskPriority](#taskpriority)

### ScheduleActivityTaskFailedCause
* ScheduleActivityTaskFailedCause `string` (values: ACTIVITY_TYPE_DEPRECATED, ACTIVITY_TYPE_DOES_NOT_EXIST, ACTIVITY_ID_ALREADY_IN_USE, OPEN_ACTIVITIES_LIMIT_EXCEEDED, ACTIVITY_CREATION_RATE_EXCEEDED, DEFAULT_SCHEDULE_TO_CLOSE_TIMEOUT_UNDEFINED, DEFAULT_TASK_LIST_UNDEFINED, DEFAULT_SCHEDULE_TO_START_TIMEOUT_UNDEFINED, DEFAULT_START_TO_CLOSE_TIMEOUT_UNDEFINED, DEFAULT_HEARTBEAT_TIMEOUT_UNDEFINED, OPERATION_NOT_PERMITTED)

### ScheduleActivityTaskFailedEventAttributes
* ScheduleActivityTaskFailedEventAttributes `object`: Provides the details of the <code>ScheduleActivityTaskFailed</code> event.
  * activityId **required** [ActivityId](#activityid)
  * activityType **required** [ActivityType](#activitytype)
  * cause **required** [ScheduleActivityTaskFailedCause](#scheduleactivitytaskfailedcause)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)

### ScheduleLambdaFunctionDecisionAttributes
* ScheduleLambdaFunctionDecisionAttributes `object`: Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>.
  * control [Data](#data)
  * id **required** [FunctionId](#functionid)
  * input [FunctionInput](#functioninput)
  * name **required** [FunctionName](#functionname)
  * startToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)

### ScheduleLambdaFunctionFailedCause
* ScheduleLambdaFunctionFailedCause `string` (values: ID_ALREADY_IN_USE, OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED, LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED, LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION)

### ScheduleLambdaFunctionFailedEventAttributes
* ScheduleLambdaFunctionFailedEventAttributes `object`: Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types.
  * cause **required** [ScheduleLambdaFunctionFailedCause](#schedulelambdafunctionfailedcause)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * id **required** [FunctionId](#functionid)
  * name **required** [FunctionName](#functionname)

### SignalExternalWorkflowExecutionDecisionAttributes
* SignalExternalWorkflowExecutionDecisionAttributes `object`: <p>Provides the details of the <code>SignalExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * control [Data](#data)
  * input [Data](#data)
  * runId [WorkflowRunIdOptional](#workflowrunidoptional)
  * signalName **required** [SignalName](#signalname)
  * workflowId **required** [WorkflowId](#workflowid)

### SignalExternalWorkflowExecutionFailedCause
* SignalExternalWorkflowExecutionFailedCause `string` (values: UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION, SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED, OPERATION_NOT_PERMITTED)

### SignalExternalWorkflowExecutionFailedEventAttributes
* SignalExternalWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event.
  * cause **required** [SignalExternalWorkflowExecutionFailedCause](#signalexternalworkflowexecutionfailedcause)
  * control [Data](#data)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * initiatedEventId **required** [EventId](#eventid)
  * runId [WorkflowRunIdOptional](#workflowrunidoptional)
  * workflowId **required** [WorkflowId](#workflowid)

### SignalExternalWorkflowExecutionInitiatedEventAttributes
* SignalExternalWorkflowExecutionInitiatedEventAttributes `object`: Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event.
  * control [Data](#data)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * input [Data](#data)
  * runId [WorkflowRunIdOptional](#workflowrunidoptional)
  * signalName **required** [SignalName](#signalname)
  * workflowId **required** [WorkflowId](#workflowid)

### SignalName
* SignalName `string`

### SignalWorkflowExecutionInput
* SignalWorkflowExecutionInput `object`
  * domain **required** [DomainName](#domainname)
  * input [Data](#data)
  * runId [WorkflowRunIdOptional](#workflowrunidoptional)
  * signalName **required** [SignalName](#signalname)
  * workflowId **required** [WorkflowId](#workflowid)

### StartChildWorkflowExecutionDecisionAttributes
* StartChildWorkflowExecutionDecisionAttributes `object`: <p>Provides the details of the <code>StartChildWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.N</code> – The key is "swf:tagList.N" where N is the tag number from 0 to 4, inclusive.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code> – String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * childPolicy [ChildPolicy](#childpolicy)
  * control [Data](#data)
  * executionStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * input [Data](#data)
  * lambdaRole [Arn](#arn)
  * tagList [TagList](#taglist)
  * taskList [TaskList](#tasklist)
  * taskPriority [TaskPriority](#taskpriority)
  * taskStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * workflowId **required** [WorkflowId](#workflowid)
  * workflowType **required** [WorkflowType](#workflowtype)

### StartChildWorkflowExecutionFailedCause
* StartChildWorkflowExecutionFailedCause `string` (values: WORKFLOW_TYPE_DOES_NOT_EXIST, WORKFLOW_TYPE_DEPRECATED, OPEN_CHILDREN_LIMIT_EXCEEDED, OPEN_WORKFLOWS_LIMIT_EXCEEDED, CHILD_CREATION_RATE_EXCEEDED, WORKFLOW_ALREADY_RUNNING, DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED, DEFAULT_TASK_LIST_UNDEFINED, DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED, DEFAULT_CHILD_POLICY_UNDEFINED, OPERATION_NOT_PERMITTED)

### StartChildWorkflowExecutionFailedEventAttributes
* StartChildWorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event.
  * cause **required** [StartChildWorkflowExecutionFailedCause](#startchildworkflowexecutionfailedcause)
  * control [Data](#data)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * initiatedEventId **required** [EventId](#eventid)
  * workflowId **required** [WorkflowId](#workflowid)
  * workflowType **required** [WorkflowType](#workflowtype)

### StartChildWorkflowExecutionInitiatedEventAttributes
* StartChildWorkflowExecutionInitiatedEventAttributes `object`: Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event.
  * childPolicy **required** [ChildPolicy](#childpolicy)
  * control [Data](#data)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * executionStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * input [Data](#data)
  * lambdaRole [Arn](#arn)
  * tagList [TagList](#taglist)
  * taskList **required** [TaskList](#tasklist)
  * taskPriority [TaskPriority](#taskpriority)
  * taskStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * workflowId **required** [WorkflowId](#workflowid)
  * workflowType **required** [WorkflowType](#workflowtype)

### StartLambdaFunctionFailedCause
* StartLambdaFunctionFailedCause `string` (values: ASSUME_ROLE_FAILED)

### StartLambdaFunctionFailedEventAttributes
* StartLambdaFunctionFailedEventAttributes `object`: Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types.
  * cause [StartLambdaFunctionFailedCause](#startlambdafunctionfailedcause)
  * message [CauseMessage](#causemessage)
  * scheduledEventId [EventId](#eventid)

### StartTimerDecisionAttributes
* StartTimerDecisionAttributes `object`: <p>Provides the details of the <code>StartTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
  * control [Data](#data)
  * startToFireTimeout **required** [DurationInSeconds](#durationinseconds)
  * timerId **required** [TimerId](#timerid)

### StartTimerFailedCause
* StartTimerFailedCause `string` (values: TIMER_ID_ALREADY_IN_USE, OPEN_TIMERS_LIMIT_EXCEEDED, TIMER_CREATION_RATE_EXCEEDED, OPERATION_NOT_PERMITTED)

### StartTimerFailedEventAttributes
* StartTimerFailedEventAttributes `object`: Provides the details of the <code>StartTimerFailed</code> event.
  * cause **required** [StartTimerFailedCause](#starttimerfailedcause)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * timerId **required** [TimerId](#timerid)

### StartWorkflowExecutionInput
* StartWorkflowExecutionInput `object`
  * childPolicy [ChildPolicy](#childpolicy)
  * domain **required** [DomainName](#domainname)
  * executionStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * input [Data](#data)
  * lambdaRole [Arn](#arn)
  * tagList [TagList](#taglist)
  * taskList [TaskList](#tasklist)
  * taskPriority [TaskPriority](#taskpriority)
  * taskStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * workflowId **required** [WorkflowId](#workflowid)
  * workflowType **required** [WorkflowType](#workflowtype)

### Tag
* Tag `string`

### TagFilter
* TagFilter `object`: Used to filter the workflow executions in visibility APIs based on a tag.
  * tag **required** [Tag](#tag)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TaskList
* TaskList `object`: Represents a task list.
  * name **required** [Name](#name)

### TaskPriority
* TaskPriority `string`

### TaskToken
* TaskToken `string`

### TerminateReason
* TerminateReason `string`

### TerminateWorkflowExecutionInput
* TerminateWorkflowExecutionInput `object`
  * childPolicy [ChildPolicy](#childpolicy)
  * details [Data](#data)
  * domain **required** [DomainName](#domainname)
  * reason [TerminateReason](#terminatereason)
  * runId [WorkflowRunIdOptional](#workflowrunidoptional)
  * workflowId **required** [WorkflowId](#workflowid)

### TimerCanceledEventAttributes
* TimerCanceledEventAttributes `object`:  Provides the details of the <code>TimerCanceled</code> event. 
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * startedEventId **required** [EventId](#eventid)
  * timerId **required** [TimerId](#timerid)

### TimerFiredEventAttributes
* TimerFiredEventAttributes `object`: Provides the details of the <code>TimerFired</code> event.
  * startedEventId **required** [EventId](#eventid)
  * timerId **required** [TimerId](#timerid)

### TimerId
* TimerId `string`

### TimerStartedEventAttributes
* TimerStartedEventAttributes `object`: Provides the details of the <code>TimerStarted</code> event.
  * control [Data](#data)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * startToFireTimeout **required** [DurationInSeconds](#durationinseconds)
  * timerId **required** [TimerId](#timerid)

### Timestamp
* Timestamp `string`

### Truncated
* Truncated `boolean`

### TypeAlreadyExistsFault
* TypeAlreadyExistsFault `object`: Returned if the type already exists in the specified domain. You get this fault even if the existing type is in deprecated status. You can specify another version if the intent is to create a new distinct version of the type.
  * message [ErrorMessage](#errormessage)

### TypeDeprecatedFault
* TypeDeprecatedFault `object`: Returned when the specified activity or workflow type was already deprecated.
  * message [ErrorMessage](#errormessage)

### UnknownResourceFault
* UnknownResourceFault `object`: Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.
  * message [ErrorMessage](#errormessage)

### Version
* Version `string`

### VersionOptional
* VersionOptional `string`

### WorkflowExecution
* WorkflowExecution `object`: Represents a workflow execution.
  * runId **required** [WorkflowRunId](#workflowrunid)
  * workflowId **required** [WorkflowId](#workflowid)

### WorkflowExecutionAlreadyStartedFault
* WorkflowExecutionAlreadyStartedFault `object`: Returned by <a>StartWorkflowExecution</a> when an open execution with the same workflowId is already running in the specified domain.
  * message [ErrorMessage](#errormessage)

### WorkflowExecutionCancelRequestedCause
* WorkflowExecutionCancelRequestedCause `string` (values: CHILD_POLICY_APPLIED)

### WorkflowExecutionCancelRequestedEventAttributes
* WorkflowExecutionCancelRequestedEventAttributes `object`: Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.
  * cause [WorkflowExecutionCancelRequestedCause](#workflowexecutioncancelrequestedcause)
  * externalInitiatedEventId [EventId](#eventid)
  * externalWorkflowExecution [WorkflowExecution](#workflowexecution)

### WorkflowExecutionCanceledEventAttributes
* WorkflowExecutionCanceledEventAttributes `object`: Provides the details of the <code>WorkflowExecutionCanceled</code> event.
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * details [Data](#data)

### WorkflowExecutionCompletedEventAttributes
* WorkflowExecutionCompletedEventAttributes `object`: Provides the details of the <code>WorkflowExecutionCompleted</code> event.
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * result [Data](#data)

### WorkflowExecutionConfiguration
* WorkflowExecutionConfiguration `object`: The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.
  * childPolicy **required** [ChildPolicy](#childpolicy)
  * executionStartToCloseTimeout **required** [DurationInSeconds](#durationinseconds)
  * lambdaRole [Arn](#arn)
  * taskList **required** [TaskList](#tasklist)
  * taskPriority [TaskPriority](#taskpriority)
  * taskStartToCloseTimeout **required** [DurationInSeconds](#durationinseconds)

### WorkflowExecutionContinuedAsNewEventAttributes
* WorkflowExecutionContinuedAsNewEventAttributes `object`: Provides the details of the <code>WorkflowExecutionContinuedAsNew</code> event.
  * childPolicy **required** [ChildPolicy](#childpolicy)
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * executionStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * input [Data](#data)
  * lambdaRole [Arn](#arn)
  * newExecutionRunId **required** [WorkflowRunId](#workflowrunid)
  * tagList [TagList](#taglist)
  * taskList **required** [TaskList](#tasklist)
  * taskPriority [TaskPriority](#taskpriority)
  * taskStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * workflowType **required** [WorkflowType](#workflowtype)

### WorkflowExecutionCount
* WorkflowExecutionCount `object`: Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a> 
  * count **required** [Count](#count)
  * truncated [Truncated](#truncated)

### WorkflowExecutionDetail
* WorkflowExecutionDetail `object`: Contains details about a workflow execution.
  * executionConfiguration **required** [WorkflowExecutionConfiguration](#workflowexecutionconfiguration)
  * executionInfo **required** [WorkflowExecutionInfo](#workflowexecutioninfo)
  * latestActivityTaskTimestamp [Timestamp](#timestamp)
  * latestExecutionContext [Data](#data)
  * openCounts **required** [WorkflowExecutionOpenCounts](#workflowexecutionopencounts)

### WorkflowExecutionFailedEventAttributes
* WorkflowExecutionFailedEventAttributes `object`: Provides the details of the <code>WorkflowExecutionFailed</code> event.
  * decisionTaskCompletedEventId **required** [EventId](#eventid)
  * details [Data](#data)
  * reason [FailureReason](#failurereason)

### WorkflowExecutionFilter
* WorkflowExecutionFilter `object`: Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.
  * workflowId **required** [WorkflowId](#workflowid)

### WorkflowExecutionInfo
* WorkflowExecutionInfo `object`: Contains information about a workflow execution.
  * cancelRequested [Canceled](#canceled)
  * closeStatus [CloseStatus](#closestatus)
  * closeTimestamp [Timestamp](#timestamp)
  * execution **required** [WorkflowExecution](#workflowexecution)
  * executionStatus **required** [ExecutionStatus](#executionstatus)
  * parent [WorkflowExecution](#workflowexecution)
  * startTimestamp **required** [Timestamp](#timestamp)
  * tagList [TagList](#taglist)
  * workflowType **required** [WorkflowType](#workflowtype)

### WorkflowExecutionInfoList
* WorkflowExecutionInfoList `array`
  * items [WorkflowExecutionInfo](#workflowexecutioninfo)

### WorkflowExecutionInfos
* WorkflowExecutionInfos `object`: Contains a paginated list of information about workflow executions.
  * executionInfos **required** [WorkflowExecutionInfoList](#workflowexecutioninfolist)
  * nextPageToken [PageToken](#pagetoken)

### WorkflowExecutionOpenCounts
* WorkflowExecutionOpenCounts `object`: Contains the counts of open tasks, child workflow executions and timers for a workflow execution.
  * openActivityTasks **required** [Count](#count)
  * openChildWorkflowExecutions **required** [Count](#count)
  * openDecisionTasks **required** [OpenDecisionTasksCount](#opendecisiontaskscount)
  * openLambdaFunctions [Count](#count)
  * openTimers **required** [Count](#count)

### WorkflowExecutionSignaledEventAttributes
* WorkflowExecutionSignaledEventAttributes `object`: Provides the details of the <code>WorkflowExecutionSignaled</code> event.
  * externalInitiatedEventId [EventId](#eventid)
  * externalWorkflowExecution [WorkflowExecution](#workflowexecution)
  * input [Data](#data)
  * signalName **required** [SignalName](#signalname)

### WorkflowExecutionStartedEventAttributes
* WorkflowExecutionStartedEventAttributes `object`: Provides details of <code>WorkflowExecutionStarted</code> event.
  * childPolicy **required** [ChildPolicy](#childpolicy)
  * continuedExecutionRunId [WorkflowRunIdOptional](#workflowrunidoptional)
  * executionStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * input [Data](#data)
  * lambdaRole [Arn](#arn)
  * parentInitiatedEventId [EventId](#eventid)
  * parentWorkflowExecution [WorkflowExecution](#workflowexecution)
  * tagList [TagList](#taglist)
  * taskList **required** [TaskList](#tasklist)
  * taskPriority [TaskPriority](#taskpriority)
  * taskStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * workflowType **required** [WorkflowType](#workflowtype)

### WorkflowExecutionTerminatedCause
* WorkflowExecutionTerminatedCause `string` (values: CHILD_POLICY_APPLIED, EVENT_LIMIT_EXCEEDED, OPERATOR_INITIATED)

### WorkflowExecutionTerminatedEventAttributes
* WorkflowExecutionTerminatedEventAttributes `object`: Provides the details of the <code>WorkflowExecutionTerminated</code> event.
  * cause [WorkflowExecutionTerminatedCause](#workflowexecutionterminatedcause)
  * childPolicy **required** [ChildPolicy](#childpolicy)
  * details [Data](#data)
  * reason [TerminateReason](#terminatereason)

### WorkflowExecutionTimedOutEventAttributes
* WorkflowExecutionTimedOutEventAttributes `object`: Provides the details of the <code>WorkflowExecutionTimedOut</code> event.
  * childPolicy **required** [ChildPolicy](#childpolicy)
  * timeoutType **required** [WorkflowExecutionTimeoutType](#workflowexecutiontimeouttype)

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
  * name **required** [Name](#name)
  * version **required** [Version](#version)

### WorkflowTypeConfiguration
* WorkflowTypeConfiguration `object`: The configuration settings of a workflow type.
  * defaultChildPolicy [ChildPolicy](#childpolicy)
  * defaultExecutionStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)
  * defaultLambdaRole [Arn](#arn)
  * defaultTaskList [TaskList](#tasklist)
  * defaultTaskPriority [TaskPriority](#taskpriority)
  * defaultTaskStartToCloseTimeout [DurationInSecondsOptional](#durationinsecondsoptional)

### WorkflowTypeDetail
* WorkflowTypeDetail `object`: Contains details about a workflow type.
  * configuration **required** [WorkflowTypeConfiguration](#workflowtypeconfiguration)
  * typeInfo **required** [WorkflowTypeInfo](#workflowtypeinfo)

### WorkflowTypeFilter
* WorkflowTypeFilter `object`: Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.
  * name **required** [Name](#name)
  * version [VersionOptional](#versionoptional)

### WorkflowTypeInfo
* WorkflowTypeInfo `object`: Contains information about a workflow type.
  * creationDate **required** [Timestamp](#timestamp)
  * deprecationDate [Timestamp](#timestamp)
  * description [Description](#description)
  * status **required** [RegistrationStatus](#registrationstatus)
  * workflowType **required** [WorkflowType](#workflowtype)

### WorkflowTypeInfoList
* WorkflowTypeInfoList `array`
  * items [WorkflowTypeInfo](#workflowtypeinfo)

### WorkflowTypeInfos
* WorkflowTypeInfos `object`: Contains a paginated list of information structures about workflow types.
  * nextPageToken [PageToken](#pagetoken)
  * typeInfos **required** [WorkflowTypeInfoList](#workflowtypeinfolist)


