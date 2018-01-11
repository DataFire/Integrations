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

amazonaws_states.CreateActivity({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>AWS Step Functions</fullname> <p>AWS Step Functions is a service that lets you coordinate the components of distributed applications and microservices using visual workflows.</p> <p>You can use Step Functions to build applications from individual components, each of which performs a discrete function, or <i>task</i>, allowing you to scale and change applications quickly. Step Functions provides a console that helps visualize the components of your application as a series of steps. Step Functions automatically triggers and tracks each step, and retries steps when there are errors, so your application executes predictably and in the right order every time. Step Functions logs the state of each step, so you can quickly diagnose and debug any issues.</p> <p>Step Functions manages operations and underlying infrastructure to ensure your application is available at any scale. You can run tasks on AWS, your own servers, or any system that has access to AWS. You can access and use Step Functions using the console, the AWS SDKs, or an HTTP API. For more information about Step Functions, see the <i> <a href="http://docs.aws.amazon.com/step-functions/latest/dg/welcome.html">AWS Step Functions Developer Guide</a> </i>.</p>

## Actions

### CreateActivity



```js
amazonaws_states.CreateActivity({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** [Name](#name)

#### Output
* output [CreateActivityOutput](#createactivityoutput)

### CreateStateMachine



```js
amazonaws_states.CreateStateMachine({
  "name": "",
  "definition": "",
  "roleArn": ""
}, context)
```

#### Input
* input `object`
  * definition **required** [Definition](#definition)
  * name **required** [Name](#name)
  * roleArn **required** [Arn](#arn)

#### Output
* output [CreateStateMachineOutput](#createstatemachineoutput)

### DeleteActivity



```js
amazonaws_states.DeleteActivity({
  "activityArn": ""
}, context)
```

#### Input
* input `object`
  * activityArn **required** [Arn](#arn)

#### Output
* output [DeleteActivityOutput](#deleteactivityoutput)

### DeleteStateMachine



```js
amazonaws_states.DeleteStateMachine({
  "stateMachineArn": ""
}, context)
```

#### Input
* input `object`
  * stateMachineArn **required** [Arn](#arn)

#### Output
* output [DeleteStateMachineOutput](#deletestatemachineoutput)

### DescribeActivity



```js
amazonaws_states.DescribeActivity({
  "activityArn": ""
}, context)
```

#### Input
* input `object`
  * activityArn **required** [Arn](#arn)

#### Output
* output [DescribeActivityOutput](#describeactivityoutput)

### DescribeExecution



```js
amazonaws_states.DescribeExecution({
  "executionArn": ""
}, context)
```

#### Input
* input `object`
  * executionArn **required** [Arn](#arn)

#### Output
* output [DescribeExecutionOutput](#describeexecutionoutput)

### DescribeStateMachine



```js
amazonaws_states.DescribeStateMachine({
  "stateMachineArn": ""
}, context)
```

#### Input
* input `object`
  * stateMachineArn **required** [Arn](#arn)

#### Output
* output [DescribeStateMachineOutput](#describestatemachineoutput)

### GetActivityTask



```js
amazonaws_states.GetActivityTask({
  "activityArn": ""
}, context)
```

#### Input
* input `object`
  * activityArn **required** [Arn](#arn)
  * workerName [Name](#name)

#### Output
* output [GetActivityTaskOutput](#getactivitytaskoutput)

### GetExecutionHistory



```js
amazonaws_states.GetExecutionHistory({
  "executionArn": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * executionArn **required** [Arn](#arn)
  * maxResults [PageSize](#pagesize)
  * nextToken [PageToken](#pagetoken)
  * reverseOrder [ReverseOrder](#reverseorder)

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
  * maxResults [PageSize](#pagesize)
  * nextToken [PageToken](#pagetoken)

#### Output
* output [ListActivitiesOutput](#listactivitiesoutput)

### ListExecutions



```js
amazonaws_states.ListExecutions({
  "stateMachineArn": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults [PageSize](#pagesize)
  * nextToken [PageToken](#pagetoken)
  * stateMachineArn **required** [Arn](#arn)
  * statusFilter [ExecutionStatus](#executionstatus)

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
  * maxResults [PageSize](#pagesize)
  * nextToken [PageToken](#pagetoken)

#### Output
* output [ListStateMachinesOutput](#liststatemachinesoutput)

### SendTaskFailure



```js
amazonaws_states.SendTaskFailure({
  "taskToken": ""
}, context)
```

#### Input
* input `object`
  * cause [Cause](#cause)
  * error [Error](#error)
  * taskToken **required** [TaskToken](#tasktoken)

#### Output
* output [SendTaskFailureOutput](#sendtaskfailureoutput)

### SendTaskHeartbeat



```js
amazonaws_states.SendTaskHeartbeat({
  "taskToken": ""
}, context)
```

#### Input
* input `object`
  * taskToken **required** [TaskToken](#tasktoken)

#### Output
* output [SendTaskHeartbeatOutput](#sendtaskheartbeatoutput)

### SendTaskSuccess



```js
amazonaws_states.SendTaskSuccess({
  "taskToken": "",
  "output": ""
}, context)
```

#### Input
* input `object`
  * output **required** [Data](#data)
  * taskToken **required** [TaskToken](#tasktoken)

#### Output
* output [SendTaskSuccessOutput](#sendtasksuccessoutput)

### StartExecution



```js
amazonaws_states.StartExecution({
  "stateMachineArn": ""
}, context)
```

#### Input
* input `object`
  * input [Data](#data)
  * name [Name](#name)
  * stateMachineArn **required** [Arn](#arn)

#### Output
* output [StartExecutionOutput](#startexecutionoutput)

### StopExecution



```js
amazonaws_states.StopExecution({
  "executionArn": ""
}, context)
```

#### Input
* input `object`
  * cause [Cause](#cause)
  * error [Error](#error)
  * executionArn **required** [Arn](#arn)

#### Output
* output [StopExecutionOutput](#stopexecutionoutput)



## Definitions

### ActivityDoesNotExist
* ActivityDoesNotExist `object`: The specified activity does not exist.
  * message [ErrorMessage](#errormessage)

### ActivityFailedEventDetails
* ActivityFailedEventDetails `object`: Contains details about an activity which failed during an execution.
  * cause [Cause](#cause)
  * error [Error](#error)

### ActivityLimitExceeded
* ActivityLimitExceeded `object`: The maximum number of activities has been reached. Existing activities must be deleted before a new activity can be created.
  * message [ErrorMessage](#errormessage)

### ActivityList
* ActivityList `array`
  * items [ActivityListItem](#activitylistitem)

### ActivityListItem
* ActivityListItem `object`: Contains details about an activity.
  * activityArn **required** [Arn](#arn)
  * creationDate **required** [Timestamp](#timestamp)
  * name **required** [Name](#name)

### ActivityScheduleFailedEventDetails
* ActivityScheduleFailedEventDetails `object`: Contains details about an activity schedule failure which occurred during an execution.
  * cause [Cause](#cause)
  * error [Error](#error)

### ActivityScheduledEventDetails
* ActivityScheduledEventDetails `object`: Contains details about an activity scheduled during an execution.
  * heartbeatInSeconds [TimeoutInSeconds](#timeoutinseconds)
  * input [Data](#data)
  * resource **required** [Arn](#arn)
  * timeoutInSeconds [TimeoutInSeconds](#timeoutinseconds)

### ActivityStartedEventDetails
* ActivityStartedEventDetails `object`: Contains details about the start of an activity during an execution.
  * workerName [Identity](#identity)

### ActivitySucceededEventDetails
* ActivitySucceededEventDetails `object`: Contains details about an activity which successfully terminated during an execution.
  * output [Data](#data)

### ActivityTimedOutEventDetails
* ActivityTimedOutEventDetails `object`: Contains details about an activity timeout which occurred during an execution.
  * cause [Cause](#cause)
  * error [Error](#error)

### ActivityWorkerLimitExceeded
* ActivityWorkerLimitExceeded `object`: The maximum number of workers concurrently polling for activity tasks has been reached.
  * message [ErrorMessage](#errormessage)

### Arn
* Arn `string`

### Cause
* Cause `string`

### CreateActivityInput
* CreateActivityInput `object`
  * name **required** [Name](#name)

### CreateActivityOutput
* CreateActivityOutput `object`
  * activityArn **required** [Arn](#arn)
  * creationDate **required** [Timestamp](#timestamp)

### CreateStateMachineInput
* CreateStateMachineInput `object`
  * definition **required** [Definition](#definition)
  * name **required** [Name](#name)
  * roleArn **required** [Arn](#arn)

### CreateStateMachineOutput
* CreateStateMachineOutput `object`
  * creationDate **required** [Timestamp](#timestamp)
  * stateMachineArn **required** [Arn](#arn)

### Data
* Data `string`

### Definition
* Definition `string`

### DeleteActivityInput
* DeleteActivityInput `object`
  * activityArn **required** [Arn](#arn)

### DeleteActivityOutput
* DeleteActivityOutput `object`

### DeleteStateMachineInput
* DeleteStateMachineInput `object`
  * stateMachineArn **required** [Arn](#arn)

### DeleteStateMachineOutput
* DeleteStateMachineOutput `object`

### DescribeActivityInput
* DescribeActivityInput `object`
  * activityArn **required** [Arn](#arn)

### DescribeActivityOutput
* DescribeActivityOutput `object`
  * activityArn **required** [Arn](#arn)
  * creationDate **required** [Timestamp](#timestamp)
  * name **required** [Name](#name)

### DescribeExecutionInput
* DescribeExecutionInput `object`
  * executionArn **required** [Arn](#arn)

### DescribeExecutionOutput
* DescribeExecutionOutput `object`
  * executionArn **required** [Arn](#arn)
  * input **required** [Data](#data)
  * name [Name](#name)
  * output [Data](#data)
  * startDate **required** [Timestamp](#timestamp)
  * stateMachineArn **required** [Arn](#arn)
  * status **required** [ExecutionStatus](#executionstatus)
  * stopDate [Timestamp](#timestamp)

### DescribeStateMachineInput
* DescribeStateMachineInput `object`
  * stateMachineArn **required** [Arn](#arn)

### DescribeStateMachineOutput
* DescribeStateMachineOutput `object`
  * creationDate **required** [Timestamp](#timestamp)
  * definition **required** [Definition](#definition)
  * name **required** [Name](#name)
  * roleArn **required** [Arn](#arn)
  * stateMachineArn **required** [Arn](#arn)
  * status [StateMachineStatus](#statemachinestatus)

### Error
* Error `string`

### ErrorMessage
* ErrorMessage `string`

### EventId
* EventId `integer`

### ExecutionAbortedEventDetails
* ExecutionAbortedEventDetails `object`: Contains details about an abort of an execution.
  * cause [Cause](#cause)
  * error [Error](#error)

### ExecutionAlreadyExists
* ExecutionAlreadyExists `object`: <p>The execution has the same <code>name</code> as another execution (but a different <code>input</code>).</p> <note> <p>Executions with the same <code>name</code> and <code>input</code> are considered idempotent.</p> </note>
  * message [ErrorMessage](#errormessage)

### ExecutionDoesNotExist
* ExecutionDoesNotExist `object`: The specified execution does not exist.
  * message [ErrorMessage](#errormessage)

### ExecutionFailedEventDetails
* ExecutionFailedEventDetails `object`: Contains details about an execution failure event.
  * cause [Cause](#cause)
  * error [Error](#error)

### ExecutionLimitExceeded
* ExecutionLimitExceeded `object`: The maximum number of running executions has been reached. Running executions must end or be stopped before a new execution can be started.
  * message [ErrorMessage](#errormessage)

### ExecutionList
* ExecutionList `array`
  * items [ExecutionListItem](#executionlistitem)

### ExecutionListItem
* ExecutionListItem `object`: Contains details about an execution.
  * executionArn **required** [Arn](#arn)
  * name **required** [Name](#name)
  * startDate **required** [Timestamp](#timestamp)
  * stateMachineArn **required** [Arn](#arn)
  * status **required** [ExecutionStatus](#executionstatus)
  * stopDate [Timestamp](#timestamp)

### ExecutionStartedEventDetails
* ExecutionStartedEventDetails `object`: Contains details about the start of the execution.
  * input [Data](#data)
  * roleArn [Arn](#arn)

### ExecutionStatus
* ExecutionStatus `string` (values: RUNNING, SUCCEEDED, FAILED, TIMED_OUT, ABORTED)

### ExecutionSucceededEventDetails
* ExecutionSucceededEventDetails `object`: Contains details about the successful termination of the execution.
  * output [Data](#data)

### ExecutionTimedOutEventDetails
* ExecutionTimedOutEventDetails `object`: Contains details about the execution timeout which occurred during the execution.
  * cause [Cause](#cause)
  * error [Error](#error)

### GetActivityTaskInput
* GetActivityTaskInput `object`
  * activityArn **required** [Arn](#arn)
  * workerName [Name](#name)

### GetActivityTaskOutput
* GetActivityTaskOutput `object`
  * input [Data](#data)
  * taskToken [TaskToken](#tasktoken)

### GetExecutionHistoryInput
* GetExecutionHistoryInput `object`
  * executionArn **required** [Arn](#arn)
  * maxResults [PageSize](#pagesize)
  * nextToken [PageToken](#pagetoken)
  * reverseOrder [ReverseOrder](#reverseorder)

### GetExecutionHistoryOutput
* GetExecutionHistoryOutput `object`
  * events **required** [HistoryEventList](#historyeventlist)
  * nextToken [PageToken](#pagetoken)

### HistoryEvent
* HistoryEvent `object`: Contains details about the events of an execution.
  * activityFailedEventDetails [ActivityFailedEventDetails](#activityfailedeventdetails)
  * activityScheduleFailedEventDetails [ActivityScheduleFailedEventDetails](#activityschedulefailedeventdetails)
  * activityScheduledEventDetails [ActivityScheduledEventDetails](#activityscheduledeventdetails)
  * activityStartedEventDetails [ActivityStartedEventDetails](#activitystartedeventdetails)
  * activitySucceededEventDetails [ActivitySucceededEventDetails](#activitysucceededeventdetails)
  * activityTimedOutEventDetails [ActivityTimedOutEventDetails](#activitytimedouteventdetails)
  * executionAbortedEventDetails [ExecutionAbortedEventDetails](#executionabortedeventdetails)
  * executionFailedEventDetails [ExecutionFailedEventDetails](#executionfailedeventdetails)
  * executionStartedEventDetails [ExecutionStartedEventDetails](#executionstartedeventdetails)
  * executionSucceededEventDetails [ExecutionSucceededEventDetails](#executionsucceededeventdetails)
  * executionTimedOutEventDetails [ExecutionTimedOutEventDetails](#executiontimedouteventdetails)
  * id **required** [EventId](#eventid)
  * lambdaFunctionFailedEventDetails [LambdaFunctionFailedEventDetails](#lambdafunctionfailedeventdetails)
  * lambdaFunctionScheduleFailedEventDetails [LambdaFunctionScheduleFailedEventDetails](#lambdafunctionschedulefailedeventdetails)
  * lambdaFunctionScheduledEventDetails [LambdaFunctionScheduledEventDetails](#lambdafunctionscheduledeventdetails)
  * lambdaFunctionStartFailedEventDetails [LambdaFunctionStartFailedEventDetails](#lambdafunctionstartfailedeventdetails)
  * lambdaFunctionSucceededEventDetails [LambdaFunctionSucceededEventDetails](#lambdafunctionsucceededeventdetails)
  * lambdaFunctionTimedOutEventDetails [LambdaFunctionTimedOutEventDetails](#lambdafunctiontimedouteventdetails)
  * previousEventId [EventId](#eventid)
  * stateEnteredEventDetails [StateEnteredEventDetails](#stateenteredeventdetails)
  * stateExitedEventDetails [StateExitedEventDetails](#stateexitedeventdetails)
  * timestamp **required** [Timestamp](#timestamp)
  * type **required** [HistoryEventType](#historyeventtype)

### HistoryEventList
* HistoryEventList `array`: Contains details about the events which occurred during an execution.
  * items [HistoryEvent](#historyevent)

### HistoryEventType
* HistoryEventType `string` (values: ActivityFailed, ActivityScheduleFailed, ActivityScheduled, ActivityStarted, ActivitySucceeded, ActivityTimedOut, ChoiceStateEntered, ChoiceStateExited, ExecutionFailed, ExecutionStarted, ExecutionSucceeded, ExecutionAborted, ExecutionTimedOut, FailStateEntered, LambdaFunctionFailed, LambdaFunctionScheduleFailed, LambdaFunctionScheduled, LambdaFunctionStartFailed, LambdaFunctionStarted, LambdaFunctionSucceeded, LambdaFunctionTimedOut, SucceedStateEntered, SucceedStateExited, TaskStateAborted, TaskStateEntered, TaskStateExited, PassStateEntered, PassStateExited, ParallelStateAborted, ParallelStateEntered, ParallelStateExited, ParallelStateFailed, ParallelStateStarted, ParallelStateSucceeded, WaitStateAborted, WaitStateEntered, WaitStateExited)

### Identity
* Identity `string`

### InvalidArn
* InvalidArn `object`: The provided Amazon Resource Name (ARN) is invalid.
  * message [ErrorMessage](#errormessage)

### InvalidDefinition
* InvalidDefinition `object`: The provided Amazon States Language definition is invalid.
  * message [ErrorMessage](#errormessage)

### InvalidExecutionInput
* InvalidExecutionInput `object`: The provided JSON input data is invalid.
  * message [ErrorMessage](#errormessage)

### InvalidName
* InvalidName `object`: The provided name is invalid.
  * message [ErrorMessage](#errormessage)

### InvalidOutput
* InvalidOutput `object`: The provided JSON output data is invalid.
  * message [ErrorMessage](#errormessage)

### InvalidToken
* InvalidToken `object`: The provided token is invalid.
  * message [ErrorMessage](#errormessage)

### LambdaFunctionFailedEventDetails
* LambdaFunctionFailedEventDetails `object`: Contains details about a lambda function which failed during an execution.
  * cause [Cause](#cause)
  * error [Error](#error)

### LambdaFunctionScheduleFailedEventDetails
* LambdaFunctionScheduleFailedEventDetails `object`: Contains details about a failed lambda function schedule event which occurred during an execution.
  * cause [Cause](#cause)
  * error [Error](#error)

### LambdaFunctionScheduledEventDetails
* LambdaFunctionScheduledEventDetails `object`: Contains details about a lambda function scheduled during an execution.
  * input [Data](#data)
  * resource **required** [Arn](#arn)
  * timeoutInSeconds [TimeoutInSeconds](#timeoutinseconds)

### LambdaFunctionStartFailedEventDetails
* LambdaFunctionStartFailedEventDetails `object`: Contains details about a lambda function which failed to start during an execution.
  * cause [Cause](#cause)
  * error [Error](#error)

### LambdaFunctionSucceededEventDetails
* LambdaFunctionSucceededEventDetails `object`: Contains details about a lambda function which successfully terminated during an execution.
  * output [Data](#data)

### LambdaFunctionTimedOutEventDetails
* LambdaFunctionTimedOutEventDetails `object`: Contains details about a lambda function timeout which occurred during an execution.
  * cause [Cause](#cause)
  * error [Error](#error)

### ListActivitiesInput
* ListActivitiesInput `object`
  * maxResults [PageSize](#pagesize)
  * nextToken [PageToken](#pagetoken)

### ListActivitiesOutput
* ListActivitiesOutput `object`
  * activities **required** [ActivityList](#activitylist)
  * nextToken [PageToken](#pagetoken)

### ListExecutionsInput
* ListExecutionsInput `object`
  * maxResults [PageSize](#pagesize)
  * nextToken [PageToken](#pagetoken)
  * stateMachineArn **required** [Arn](#arn)
  * statusFilter [ExecutionStatus](#executionstatus)

### ListExecutionsOutput
* ListExecutionsOutput `object`
  * executions **required** [ExecutionList](#executionlist)
  * nextToken [PageToken](#pagetoken)

### ListStateMachinesInput
* ListStateMachinesInput `object`
  * maxResults [PageSize](#pagesize)
  * nextToken [PageToken](#pagetoken)

### ListStateMachinesOutput
* ListStateMachinesOutput `object`
  * nextToken [PageToken](#pagetoken)
  * stateMachines **required** [StateMachineList](#statemachinelist)

### Name
* Name `string`

### PageSize
* PageSize `integer`

### PageToken
* PageToken `string`

### ReverseOrder
* ReverseOrder `boolean`

### SendTaskFailureInput
* SendTaskFailureInput `object`
  * cause [Cause](#cause)
  * error [Error](#error)
  * taskToken **required** [TaskToken](#tasktoken)

### SendTaskFailureOutput
* SendTaskFailureOutput `object`

### SendTaskHeartbeatInput
* SendTaskHeartbeatInput `object`
  * taskToken **required** [TaskToken](#tasktoken)

### SendTaskHeartbeatOutput
* SendTaskHeartbeatOutput `object`

### SendTaskSuccessInput
* SendTaskSuccessInput `object`
  * output **required** [Data](#data)
  * taskToken **required** [TaskToken](#tasktoken)

### SendTaskSuccessOutput
* SendTaskSuccessOutput `object`

### StartExecutionInput
* StartExecutionInput `object`
  * input [Data](#data)
  * name [Name](#name)
  * stateMachineArn **required** [Arn](#arn)

### StartExecutionOutput
* StartExecutionOutput `object`
  * executionArn **required** [Arn](#arn)
  * startDate **required** [Timestamp](#timestamp)

### StateEnteredEventDetails
* StateEnteredEventDetails `object`: Contains details about a state entered during an execution.
  * input [Data](#data)
  * name **required** [Name](#name)

### StateExitedEventDetails
* StateExitedEventDetails `object`: Contains details about an exit from a state during an execution.
  * name **required** [Name](#name)
  * output [Data](#data)

### StateMachineAlreadyExists
* StateMachineAlreadyExists `object`: A state machine with the same name but a different definition or role ARN already exists.
  * message [ErrorMessage](#errormessage)

### StateMachineDeleting
* StateMachineDeleting `object`: The specified state machine is being deleted.
  * message [ErrorMessage](#errormessage)

### StateMachineDoesNotExist
* StateMachineDoesNotExist `object`: The specified state machine does not exist.
  * message [ErrorMessage](#errormessage)

### StateMachineLimitExceeded
* StateMachineLimitExceeded `object`: The maximum number of state machines has been reached. Existing state machines must be deleted before a new state machine can be created.
  * message [ErrorMessage](#errormessage)

### StateMachineList
* StateMachineList `array`
  * items [StateMachineListItem](#statemachinelistitem)

### StateMachineListItem
* StateMachineListItem `object`: Contains details about the state machine.
  * creationDate **required** [Timestamp](#timestamp)
  * name **required** [Name](#name)
  * stateMachineArn **required** [Arn](#arn)

### StateMachineStatus
* StateMachineStatus `string` (values: ACTIVE, DELETING)

### StopExecutionInput
* StopExecutionInput `object`
  * cause [Cause](#cause)
  * error [Error](#error)
  * executionArn **required** [Arn](#arn)

### StopExecutionOutput
* StopExecutionOutput `object`
  * stopDate **required** [Timestamp](#timestamp)

### TaskDoesNotExist
* TaskDoesNotExist `object`
  * message [ErrorMessage](#errormessage)

### TaskTimedOut
* TaskTimedOut `object`
  * message [ErrorMessage](#errormessage)

### TaskToken
* TaskToken `string`

### TimeoutInSeconds
* TimeoutInSeconds `integer`

### Timestamp
* Timestamp `string`


