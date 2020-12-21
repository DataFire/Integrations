# @datafire/amazonaws_states

Client library for AWS Step Functions

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_states
```
```js
let amazonaws_states = require('@datafire/amazonaws_states').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Step Functions</fullname> <p>AWS Step Functions is a service that lets you coordinate the components of distributed applications and microservices using visual workflows.</p> <p>You can use Step Functions to build applications from individual components, each of which performs a discrete function, or <i>task</i>, allowing you to scale and change applications quickly. Step Functions provides a console that helps visualize the components of your application as a series of steps. Step Functions automatically triggers and tracks each step, and retries steps when there are errors, so your application executes predictably and in the right order every time. Step Functions logs the state of each step, so you can quickly diagnose and debug any issues.</p> <p>Step Functions manages operations and underlying infrastructure to ensure your application is available at any scale. You can run tasks on AWS, your own servers, or any system that has access to AWS. You can access and use Step Functions using the console, the AWS SDKs, or an HTTP API. For more information about Step Functions, see the <i> <a href="https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html">AWS Step Functions Developer Guide</a> </i>.</p>

## Actions

### CreateActivity



```js
amazonaws_states.CreateActivity({
  "name": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * name **required**

#### Output
* output [CreateActivityOutput](#createactivityoutput)

### CreateStateMachine



```js
amazonaws_states.CreateStateMachine({
  "name": null,
  "definition": null,
  "roleArn": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * definition **required**
  * loggingConfiguration
    * destinations
      * items [LogDestination](#logdestination)
    * includeExecutionData
    * level
  * name **required**
  * roleArn **required**
  * tracingConfiguration
    * enabled
  * type

#### Output
* output [CreateStateMachineOutput](#createstatemachineoutput)

### DeleteActivity



```js
amazonaws_states.DeleteActivity({
  "activityArn": null
}, context)
```

#### Input
* input `object`
  * activityArn **required**

#### Output
* output [DeleteActivityOutput](#deleteactivityoutput)

### DeleteStateMachine



```js
amazonaws_states.DeleteStateMachine({
  "stateMachineArn": null
}, context)
```

#### Input
* input `object`
  * stateMachineArn **required**

#### Output
* output [DeleteStateMachineOutput](#deletestatemachineoutput)

### DescribeActivity



```js
amazonaws_states.DescribeActivity({
  "activityArn": null
}, context)
```

#### Input
* input `object`
  * activityArn **required**

#### Output
* output [DescribeActivityOutput](#describeactivityoutput)

### DescribeExecution



```js
amazonaws_states.DescribeExecution({
  "executionArn": null
}, context)
```

#### Input
* input `object`
  * executionArn **required**

#### Output
* output [DescribeExecutionOutput](#describeexecutionoutput)

### DescribeStateMachine



```js
amazonaws_states.DescribeStateMachine({
  "stateMachineArn": null
}, context)
```

#### Input
* input `object`
  * stateMachineArn **required**

#### Output
* output [DescribeStateMachineOutput](#describestatemachineoutput)

### DescribeStateMachineForExecution



```js
amazonaws_states.DescribeStateMachineForExecution({
  "executionArn": null
}, context)
```

#### Input
* input `object`
  * executionArn **required**

#### Output
* output [DescribeStateMachineForExecutionOutput](#describestatemachineforexecutionoutput)

### GetActivityTask



```js
amazonaws_states.GetActivityTask({
  "activityArn": null
}, context)
```

#### Input
* input `object`
  * activityArn **required**
  * workerName

#### Output
* output [GetActivityTaskOutput](#getactivitytaskoutput)

### GetExecutionHistory



```js
amazonaws_states.GetExecutionHistory({
  "executionArn": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * executionArn **required**
  * includeExecutionData
  * maxResults
  * nextToken
  * reverseOrder

#### Output
* output [GetExecutionHistoryOutput](#getexecutionhistoryoutput)

### ListActivities



```js
amazonaws_states.ListActivities({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken

#### Output
* output [ListActivitiesOutput](#listactivitiesoutput)

### ListExecutions



```js
amazonaws_states.ListExecutions({
  "stateMachineArn": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * stateMachineArn **required**
  * statusFilter

#### Output
* output [ListExecutionsOutput](#listexecutionsoutput)

### ListStateMachines



```js
amazonaws_states.ListStateMachines({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken

#### Output
* output [ListStateMachinesOutput](#liststatemachinesoutput)

### ListTagsForResource



```js
amazonaws_states.ListTagsForResource({
  "resourceArn": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### SendTaskFailure



```js
amazonaws_states.SendTaskFailure({
  "taskToken": null
}, context)
```

#### Input
* input `object`
  * cause
  * error
  * taskToken **required**

#### Output
* output [SendTaskFailureOutput](#sendtaskfailureoutput)

### SendTaskHeartbeat



```js
amazonaws_states.SendTaskHeartbeat({
  "taskToken": null
}, context)
```

#### Input
* input `object`
  * taskToken **required**

#### Output
* output [SendTaskHeartbeatOutput](#sendtaskheartbeatoutput)

### SendTaskSuccess



```js
amazonaws_states.SendTaskSuccess({
  "taskToken": null,
  "output": null
}, context)
```

#### Input
* input `object`
  * output **required**
  * taskToken **required**

#### Output
* output [SendTaskSuccessOutput](#sendtasksuccessoutput)

### StartExecution



```js
amazonaws_states.StartExecution({
  "stateMachineArn": null
}, context)
```

#### Input
* input `object`
  * input
  * name
  * stateMachineArn **required**
  * traceHeader

#### Output
* output [StartExecutionOutput](#startexecutionoutput)

### StartSyncExecution



```js
amazonaws_states.StartSyncExecution({
  "stateMachineArn": null
}, context)
```

#### Input
* input `object`
  * input
  * name
  * stateMachineArn **required**
  * traceHeader

#### Output
* output [StartSyncExecutionOutput](#startsyncexecutionoutput)

### StopExecution



```js
amazonaws_states.StopExecution({
  "executionArn": null
}, context)
```

#### Input
* input `object`
  * cause
  * error
  * executionArn **required**

#### Output
* output [StopExecutionOutput](#stopexecutionoutput)

### TagResource



```js
amazonaws_states.TagResource({
  "resourceArn": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

#### Output
* output [TagResourceOutput](#tagresourceoutput)

### UntagResource



```js
amazonaws_states.UntagResource({
  "resourceArn": null,
  "tagKeys": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceOutput](#untagresourceoutput)

### UpdateStateMachine



```js
amazonaws_states.UpdateStateMachine({
  "stateMachineArn": null
}, context)
```

#### Input
* input `object`
  * definition
  * loggingConfiguration
    * destinations
      * items [LogDestination](#logdestination)
    * includeExecutionData
    * level
  * roleArn
  * stateMachineArn **required**
  * tracingConfiguration
    * enabled

#### Output
* output [UpdateStateMachineOutput](#updatestatemachineoutput)



## Definitions

### ActivityDoesNotExist


### ActivityFailedEventDetails
* ActivityFailedEventDetails `object`: Contains details about an activity that failed during an execution.
  * cause
  * error

### ActivityLimitExceeded


### ActivityList
* ActivityList `array`
  * items [ActivityListItem](#activitylistitem)

### ActivityListItem
* ActivityListItem `object`: Contains details about an activity.
  * activityArn **required**
  * creationDate **required**
  * name **required**

### ActivityScheduleFailedEventDetails
* ActivityScheduleFailedEventDetails `object`: Contains details about an activity schedule failure that occurred during an execution.
  * cause
  * error

### ActivityScheduledEventDetails
* ActivityScheduledEventDetails `object`: Contains details about an activity scheduled during an execution.
  * heartbeatInSeconds
  * input
  * inputDetails
    * truncated
  * resource **required**
  * timeoutInSeconds

### ActivityStartedEventDetails
* ActivityStartedEventDetails `object`: Contains details about the start of an activity during an execution.
  * workerName

### ActivitySucceededEventDetails
* ActivitySucceededEventDetails `object`: Contains details about an activity that successfully terminated during an execution.
  * output
  * outputDetails
    * truncated

### ActivityTimedOutEventDetails
* ActivityTimedOutEventDetails `object`: Contains details about an activity timeout that occurred during an execution.
  * cause
  * error

### ActivityWorkerLimitExceeded


### Arn
* Arn `string`

### BilledDuration
* BilledDuration `integer`

### BilledMemoryUsed
* BilledMemoryUsed `integer`

### BillingDetails
* BillingDetails `object`: An object that describes workflow billing details.
  * billedDurationInMilliseconds
  * billedMemoryUsedInMB

### CloudWatchEventsExecutionDataDetails
* CloudWatchEventsExecutionDataDetails `object`: Provides details about execution input or output.
  * included

### CloudWatchLogsLogGroup
* CloudWatchLogsLogGroup `object`: <p/>
  * logGroupArn

### ConnectorParameters
* ConnectorParameters `string`

### CreateActivityInput
* CreateActivityInput `object`
  * tags
    * items [Tag](#tag)
  * name **required**

### CreateActivityOutput
* CreateActivityOutput `object`
  * activityArn **required**
  * creationDate **required**

### CreateStateMachineInput
* CreateStateMachineInput `object`
  * tags
    * items [Tag](#tag)
  * definition **required**
  * loggingConfiguration
    * destinations
      * items [LogDestination](#logdestination)
    * includeExecutionData
    * level
  * name **required**
  * roleArn **required**
  * tracingConfiguration
    * enabled
  * type

### CreateStateMachineOutput
* CreateStateMachineOutput `object`
  * creationDate **required**
  * stateMachineArn **required**

### Definition
* Definition `string`

### DeleteActivityInput
* DeleteActivityInput `object`
  * activityArn **required**

### DeleteActivityOutput
* DeleteActivityOutput `object`

### DeleteStateMachineInput
* DeleteStateMachineInput `object`
  * stateMachineArn **required**

### DeleteStateMachineOutput
* DeleteStateMachineOutput `object`

### DescribeActivityInput
* DescribeActivityInput `object`
  * activityArn **required**

### DescribeActivityOutput
* DescribeActivityOutput `object`
  * activityArn **required**
  * creationDate **required**
  * name **required**

### DescribeExecutionInput
* DescribeExecutionInput `object`
  * executionArn **required**

### DescribeExecutionOutput
* DescribeExecutionOutput `object`
  * executionArn **required**
  * input
  * inputDetails [CloudWatchEventsExecutionDataDetails](#cloudwatcheventsexecutiondatadetails)
  * name
  * output
  * outputDetails [CloudWatchEventsExecutionDataDetails](#cloudwatcheventsexecutiondatadetails)
  * startDate **required**
  * stateMachineArn **required**
  * status **required**
  * stopDate
  * traceHeader

### DescribeStateMachineForExecutionInput
* DescribeStateMachineForExecutionInput `object`
  * executionArn **required**

### DescribeStateMachineForExecutionOutput
* DescribeStateMachineForExecutionOutput `object`
  * definition **required**
  * loggingConfiguration [LoggingConfiguration](#loggingconfiguration)
  * name **required**
  * roleArn **required**
  * stateMachineArn **required**
  * tracingConfiguration
    * enabled
  * updateDate **required**

### DescribeStateMachineInput
* DescribeStateMachineInput `object`
  * stateMachineArn **required**

### DescribeStateMachineOutput
* DescribeStateMachineOutput `object`
  * creationDate **required**
  * definition **required**
  * loggingConfiguration [LoggingConfiguration](#loggingconfiguration)
  * name **required**
  * roleArn **required**
  * stateMachineArn **required**
  * status
  * tracingConfiguration
    * enabled
  * type **required**

### Enabled
* Enabled `boolean`

### EventId
* EventId `integer`

### ExecutionAbortedEventDetails
* ExecutionAbortedEventDetails `object`: Contains details about an abort of an execution.
  * cause
  * error

### ExecutionAlreadyExists


### ExecutionDoesNotExist


### ExecutionFailedEventDetails
* ExecutionFailedEventDetails `object`: Contains details about an execution failure event.
  * cause
  * error

### ExecutionLimitExceeded


### ExecutionList
* ExecutionList `array`
  * items [ExecutionListItem](#executionlistitem)

### ExecutionListItem
* ExecutionListItem `object`: Contains details about an execution.
  * executionArn **required**
  * name **required**
  * startDate **required**
  * stateMachineArn **required**
  * status **required**
  * stopDate

### ExecutionStartedEventDetails
* ExecutionStartedEventDetails `object`: Contains details about the start of the execution.
  * input
  * inputDetails
    * truncated
  * roleArn

### ExecutionStatus
* ExecutionStatus `string` (values: RUNNING, SUCCEEDED, FAILED, TIMED_OUT, ABORTED)

### ExecutionSucceededEventDetails
* ExecutionSucceededEventDetails `object`: Contains details about the successful termination of the execution.
  * output
  * outputDetails
    * truncated

### ExecutionTimedOutEventDetails
* ExecutionTimedOutEventDetails `object`: Contains details about the execution timeout that occurred during the execution.
  * cause
  * error

### GetActivityTaskInput
* GetActivityTaskInput `object`
  * activityArn **required**
  * workerName

### GetActivityTaskOutput
* GetActivityTaskOutput `object`
  * input
  * taskToken

### GetExecutionHistoryInput
* GetExecutionHistoryInput `object`
  * executionArn **required**
  * includeExecutionData
  * maxResults
  * nextToken
  * reverseOrder

### GetExecutionHistoryOutput
* GetExecutionHistoryOutput `object`
  * events **required**
    * items [HistoryEvent](#historyevent)
  * nextToken

### HistoryEvent
* HistoryEvent `object`: Contains details about the events of an execution.
  * activityFailedEventDetails [ActivityFailedEventDetails](#activityfailedeventdetails)
  * activityScheduleFailedEventDetails
    * cause
    * error
  * activityScheduledEventDetails [ActivityScheduledEventDetails](#activityscheduledeventdetails)
  * activityStartedEventDetails [ActivityStartedEventDetails](#activitystartedeventdetails)
  * activitySucceededEventDetails [ActivitySucceededEventDetails](#activitysucceededeventdetails)
  * activityTimedOutEventDetails [ActivityTimedOutEventDetails](#activitytimedouteventdetails)
  * executionAbortedEventDetails [ExecutionAbortedEventDetails](#executionabortedeventdetails)
  * executionFailedEventDetails [ExecutionFailedEventDetails](#executionfailedeventdetails)
  * executionStartedEventDetails [ExecutionStartedEventDetails](#executionstartedeventdetails)
  * executionSucceededEventDetails [ExecutionSucceededEventDetails](#executionsucceededeventdetails)
  * executionTimedOutEventDetails [ExecutionTimedOutEventDetails](#executiontimedouteventdetails)
  * id **required**
  * lambdaFunctionFailedEventDetails [LambdaFunctionFailedEventDetails](#lambdafunctionfailedeventdetails)
  * lambdaFunctionScheduleFailedEventDetails [LambdaFunctionScheduleFailedEventDetails](#lambdafunctionschedulefailedeventdetails)
  * lambdaFunctionScheduledEventDetails [LambdaFunctionScheduledEventDetails](#lambdafunctionscheduledeventdetails)
  * lambdaFunctionStartFailedEventDetails
    * cause
    * error
  * lambdaFunctionSucceededEventDetails
    * output
    * outputDetails
      * truncated
  * lambdaFunctionTimedOutEventDetails [LambdaFunctionTimedOutEventDetails](#lambdafunctiontimedouteventdetails)
  * mapIterationAbortedEventDetails
    * index
    * name
  * mapIterationFailedEventDetails
    * index
    * name
  * mapIterationStartedEventDetails
    * index
    * name
  * mapIterationSucceededEventDetails
    * index
    * name
  * mapStateStartedEventDetails
    * length
  * previousEventId
  * stateEnteredEventDetails [StateEnteredEventDetails](#stateenteredeventdetails)
  * stateExitedEventDetails [StateExitedEventDetails](#stateexitedeventdetails)
  * taskFailedEventDetails
    * cause
    * error
    * resource **required**
    * resourceType **required**
  * taskScheduledEventDetails
    * parameters **required**
    * heartbeatInSeconds
    * region **required**
    * resource **required**
    * resourceType **required**
    * timeoutInSeconds
  * taskStartFailedEventDetails
    * cause
    * error
    * resource **required**
    * resourceType **required**
  * taskStartedEventDetails
    * resource **required**
    * resourceType **required**
  * taskSubmitFailedEventDetails
    * cause
    * error
    * resource **required**
    * resourceType **required**
  * taskSubmittedEventDetails
    * output
    * outputDetails
      * truncated
    * resource **required**
    * resourceType **required**
  * taskSucceededEventDetails
    * output
    * outputDetails
      * truncated
    * resource **required**
    * resourceType **required**
  * taskTimedOutEventDetails
    * cause
    * error
    * resource **required**
    * resourceType **required**
  * timestamp **required**
  * type **required**

### HistoryEventExecutionDataDetails
* HistoryEventExecutionDataDetails `object`: Provides details about input or output in an execution history event.
  * truncated

### HistoryEventList
* HistoryEventList `array`: Contains details about the events that occurred during an execution.
  * items [HistoryEvent](#historyevent)

### HistoryEventType
* HistoryEventType `string` (values: ActivityFailed, ActivityScheduled, ActivityScheduleFailed, ActivityStarted, ActivitySucceeded, ActivityTimedOut, ChoiceStateEntered, ChoiceStateExited, ExecutionAborted, ExecutionFailed, ExecutionStarted, ExecutionSucceeded, ExecutionTimedOut, FailStateEntered, LambdaFunctionFailed, LambdaFunctionScheduled, LambdaFunctionScheduleFailed, LambdaFunctionStarted, LambdaFunctionStartFailed, LambdaFunctionSucceeded, LambdaFunctionTimedOut, MapIterationAborted, MapIterationFailed, MapIterationStarted, MapIterationSucceeded, MapStateAborted, MapStateEntered, MapStateExited, MapStateFailed, MapStateStarted, MapStateSucceeded, ParallelStateAborted, ParallelStateEntered, ParallelStateExited, ParallelStateFailed, ParallelStateStarted, ParallelStateSucceeded, PassStateEntered, PassStateExited, SucceedStateEntered, SucceedStateExited, TaskFailed, TaskScheduled, TaskStarted, TaskStartFailed, TaskStateAborted, TaskStateEntered, TaskStateExited, TaskSubmitFailed, TaskSubmitted, TaskSucceeded, TaskTimedOut, WaitStateAborted, WaitStateEntered, WaitStateExited)

### Identity
* Identity `string`

### IncludeExecutionData
* IncludeExecutionData `boolean`

### IncludeExecutionDataGetExecutionHistory
* IncludeExecutionDataGetExecutionHistory `boolean`

### InvalidArn


### InvalidDefinition


### InvalidExecutionInput


### InvalidLoggingConfiguration


### InvalidName


### InvalidOutput


### InvalidToken


### InvalidTracingConfiguration


### LambdaFunctionFailedEventDetails
* LambdaFunctionFailedEventDetails `object`: Contains details about a lambda function that failed during an execution.
  * cause
  * error

### LambdaFunctionScheduleFailedEventDetails
* LambdaFunctionScheduleFailedEventDetails `object`: Contains details about a failed lambda function schedule event that occurred during an execution.
  * cause
  * error

### LambdaFunctionScheduledEventDetails
* LambdaFunctionScheduledEventDetails `object`: Contains details about a lambda function scheduled during an execution.
  * input
  * inputDetails
    * truncated
  * resource **required**
  * timeoutInSeconds

### LambdaFunctionStartFailedEventDetails
* LambdaFunctionStartFailedEventDetails `object`: Contains details about a lambda function that failed to start during an execution.
  * cause
  * error

### LambdaFunctionSucceededEventDetails
* LambdaFunctionSucceededEventDetails `object`: Contains details about a lambda function that successfully terminated during an execution.
  * output
  * outputDetails
    * truncated

### LambdaFunctionTimedOutEventDetails
* LambdaFunctionTimedOutEventDetails `object`: Contains details about a lambda function timeout that occurred during an execution.
  * cause
  * error

### ListActivitiesInput
* ListActivitiesInput `object`
  * maxResults
  * nextToken

### ListActivitiesOutput
* ListActivitiesOutput `object`
  * activities **required**
    * items [ActivityListItem](#activitylistitem)
  * nextToken

### ListExecutionsInput
* ListExecutionsInput `object`
  * maxResults
  * nextToken
  * stateMachineArn **required**
  * statusFilter

### ListExecutionsOutput
* ListExecutionsOutput `object`
  * executions **required**
    * items [ExecutionListItem](#executionlistitem)
  * nextToken

### ListExecutionsPageToken
* ListExecutionsPageToken `string`

### ListStateMachinesInput
* ListStateMachinesInput `object`
  * maxResults
  * nextToken

### ListStateMachinesOutput
* ListStateMachinesOutput `object`
  * nextToken
  * stateMachines **required** [StateMachineList](#statemachinelist)

### ListTagsForResourceInput
* ListTagsForResourceInput `object`
  * resourceArn **required**

### ListTagsForResourceOutput
* ListTagsForResourceOutput `object`
  * tags
    * items [Tag](#tag)

### LogDestination
* LogDestination `object`: <p/>
  * cloudWatchLogsLogGroup
    * logGroupArn

### LogDestinationList
* LogDestinationList `array`
  * items [LogDestination](#logdestination)

### LogLevel
* LogLevel `string` (values: ALL, ERROR, FATAL, OFF)

### LoggingConfiguration
* LoggingConfiguration `object`: The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.
  * destinations
    * items [LogDestination](#logdestination)
  * includeExecutionData
  * level

### MapIterationEventDetails
* MapIterationEventDetails `object`: Contains details about an iteration of a Map state.
  * index
  * name

### MapStateStartedEventDetails
* MapStateStartedEventDetails `object`: Details about a Map state that was started.
  * length

### MissingRequiredParameter


### Name
* Name `string`

### PageSize
* PageSize `integer`

### PageToken
* PageToken `string`

### ResourceNotFound


### ReverseOrder
* ReverseOrder `boolean`

### SendTaskFailureInput
* SendTaskFailureInput `object`
  * cause
  * error
  * taskToken **required**

### SendTaskFailureOutput
* SendTaskFailureOutput `object`

### SendTaskHeartbeatInput
* SendTaskHeartbeatInput `object`
  * taskToken **required**

### SendTaskHeartbeatOutput
* SendTaskHeartbeatOutput `object`

### SendTaskSuccessInput
* SendTaskSuccessInput `object`
  * output **required**
  * taskToken **required**

### SendTaskSuccessOutput
* SendTaskSuccessOutput `object`

### SensitiveCause
* SensitiveCause `string`

### SensitiveData
* SensitiveData `string`

### SensitiveDataJobInput
* SensitiveDataJobInput `string`

### SensitiveError
* SensitiveError `string`

### StartExecutionInput
* StartExecutionInput `object`
  * input
  * name
  * stateMachineArn **required**
  * traceHeader

### StartExecutionOutput
* StartExecutionOutput `object`
  * executionArn **required**
  * startDate **required**

### StartSyncExecutionInput
* StartSyncExecutionInput `object`
  * input
  * name
  * stateMachineArn **required**
  * traceHeader

### StartSyncExecutionOutput
* StartSyncExecutionOutput `object`
  * billingDetails
    * billedDurationInMilliseconds
    * billedMemoryUsedInMB
  * cause
  * error
  * executionArn **required**
  * input
  * inputDetails [CloudWatchEventsExecutionDataDetails](#cloudwatcheventsexecutiondatadetails)
  * name
  * output
  * outputDetails [CloudWatchEventsExecutionDataDetails](#cloudwatcheventsexecutiondatadetails)
  * startDate **required**
  * stateMachineArn
  * status **required**
  * stopDate **required**
  * traceHeader

### StateEnteredEventDetails
* StateEnteredEventDetails `object`: Contains details about a state entered during an execution.
  * input
  * inputDetails
    * truncated
  * name **required**

### StateExitedEventDetails
* StateExitedEventDetails `object`: Contains details about an exit from a state during an execution.
  * name **required**
  * output
  * outputDetails
    * truncated

### StateMachineAlreadyExists


### StateMachineDeleting


### StateMachineDoesNotExist


### StateMachineLimitExceeded


### StateMachineList
* StateMachineList `array`
  * items [StateMachineListItem](#statemachinelistitem)

### StateMachineListItem
* StateMachineListItem `object`: Contains details about the state machine.
  * creationDate **required**
  * name **required**
  * stateMachineArn **required**
  * type **required**

### StateMachineStatus
* StateMachineStatus `string` (values: ACTIVE, DELETING)

### StateMachineType
* StateMachineType `string` (values: STANDARD, EXPRESS)

### StateMachineTypeNotSupported


### StopExecutionInput
* StopExecutionInput `object`
  * cause
  * error
  * executionArn **required**

### StopExecutionOutput
* StopExecutionOutput `object`
  * stopDate **required**

### SyncExecutionStatus
* SyncExecutionStatus `string` (values: SUCCEEDED, FAILED, TIMED_OUT)

### Tag
* Tag `object`: <p>Tags are key-value pairs that can be associated with Step Functions state machines and activities.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
  * key
  * value

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceInput
* TagResourceInput `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

### TagResourceOutput
* TagResourceOutput `object`

### TagValue
* TagValue `string`

### TaskDoesNotExist


### TaskFailedEventDetails
* TaskFailedEventDetails `object`: Contains details about a task failure event.
  * cause
  * error
  * resource **required**
  * resourceType **required**

### TaskScheduledEventDetails
* TaskScheduledEventDetails `object`: Contains details about a task scheduled during an execution.
  * parameters **required**
  * heartbeatInSeconds
  * region **required**
  * resource **required**
  * resourceType **required**
  * timeoutInSeconds

### TaskStartFailedEventDetails
* TaskStartFailedEventDetails `object`: Contains details about a task that failed to start during an execution.
  * cause
  * error
  * resource **required**
  * resourceType **required**

### TaskStartedEventDetails
* TaskStartedEventDetails `object`: Contains details about the start of a task during an execution.
  * resource **required**
  * resourceType **required**

### TaskSubmitFailedEventDetails
* TaskSubmitFailedEventDetails `object`: Contains details about a task that failed to submit during an execution.
  * cause
  * error
  * resource **required**
  * resourceType **required**

### TaskSubmittedEventDetails
* TaskSubmittedEventDetails `object`: Contains details about a task submitted to a resource .
  * output
  * outputDetails
    * truncated
  * resource **required**
  * resourceType **required**

### TaskSucceededEventDetails
* TaskSucceededEventDetails `object`: Contains details about the successful completion of a task state.
  * output
  * outputDetails
    * truncated
  * resource **required**
  * resourceType **required**

### TaskTimedOut


### TaskTimedOutEventDetails
* TaskTimedOutEventDetails `object`: Contains details about a resource timeout that occurred during an execution.
  * cause
  * error
  * resource **required**
  * resourceType **required**

### TaskToken
* TaskToken `string`

### TimeoutInSeconds
* TimeoutInSeconds `integer`

### Timestamp
* Timestamp `string`

### TooManyTags


### TraceHeader
* TraceHeader `string`

### TracingConfiguration
* TracingConfiguration `object`: Selects whether or not the state machine's AWS X-Ray tracing is enabled. Default is <code>false</code> 
  * enabled

### UnsignedInteger
* UnsignedInteger `integer`

### UntagResourceInput
* UntagResourceInput `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceOutput
* UntagResourceOutput `object`

### UpdateStateMachineInput
* UpdateStateMachineInput `object`
  * definition
  * loggingConfiguration
    * destinations
      * items [LogDestination](#logdestination)
    * includeExecutionData
    * level
  * roleArn
  * stateMachineArn **required**
  * tracingConfiguration
    * enabled

### UpdateStateMachineOutput
* UpdateStateMachineOutput `object`
  * updateDate **required**

### includedDetails
* includedDetails `boolean`

### truncated
* truncated `boolean`


