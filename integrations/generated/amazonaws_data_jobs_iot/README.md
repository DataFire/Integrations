# @datafire/amazonaws_data_jobs_iot

Client library for AWS IoT Jobs Data Plane

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_data_jobs_iot
```
```js
let amazonaws_data_jobs_iot = require('@datafire/amazonaws_data_jobs_iot').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>AWS IoT Jobs is a service that allows you to define a set of jobs — remote operations that are sent to and executed on one or more devices connected to AWS IoT. For example, you can define a job that instructs a set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform remote troubleshooting operations.</p> <p> To create a job, you make a job document which is a description of the remote operations to be performed, and you specify a list of targets that should perform the operations. The targets can be individual things, thing groups or both.</p> <p> AWS IoT Jobs sends a message to inform the targets that a job is available. The target starts the execution of the job by downloading the job document, performing the operations it specifies, and reporting its progress to AWS IoT. The Jobs service provides commands to track the progress of a job on a specific target and for all the targets of the job</p>

## Actions

### GetPendingJobExecutions



```js
amazonaws_data_jobs_iot.GetPendingJobExecutions({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`

#### Output
* output [GetPendingJobExecutionsResponse](#getpendingjobexecutionsresponse)

### StartNextPendingJobExecution



```js
amazonaws_data_jobs_iot.StartNextPendingJobExecution({
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * thingName **required** `string`
  * statusDetails `object`: A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged.
  * stepTimeoutInMinutes `integer`: Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in field <code>stepTimeoutInMinutes</code>) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).

#### Output
* output [StartNextPendingJobExecutionResponse](#startnextpendingjobexecutionresponse)

### DescribeJobExecution



```js
amazonaws_data_jobs_iot.DescribeJobExecution({
  "jobId": "",
  "thingName": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`
  * thingName **required** `string`
  * includeJobDocument `boolean`
  * executionNumber `integer`

#### Output
* output [DescribeJobExecutionResponse](#describejobexecutionresponse)

### UpdateJobExecution



```js
amazonaws_data_jobs_iot.UpdateJobExecution({
  "jobId": "",
  "thingName": "",
  "status": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`
  * thingName **required** `string`
  * executionNumber `integer`: Optional. A number that identifies a particular job execution on a particular device.
  * expectedVersion `integer`: Optional. The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.)
  * includeJobDocument `boolean`: Optional. When set to true, the response contains the job document. The default is false.
  * includeJobExecutionState `boolean`: Optional. When included and set to true, the response contains the JobExecutionState data. The default is false.
  * status **required** `string` (values: QUEUED, IN_PROGRESS, SUCCEEDED, FAILED, TIMED_OUT, REJECTED, REMOVED, CANCELED): The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED). This must be specified on every update.
  * statusDetails `object`:  Optional. A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged.
  * stepTimeoutInMinutes `integer`: Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by again calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in this field) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting or resetting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).

#### Output
* output [UpdateJobExecutionResponse](#updatejobexecutionresponse)



## Definitions

### ApproximateSecondsBeforeTimedOut
* ApproximateSecondsBeforeTimedOut `integer`

### CertificateValidationException


### DescribeJobExecutionJobId
* DescribeJobExecutionJobId `string`

### DescribeJobExecutionRequest
* DescribeJobExecutionRequest `object`

### DescribeJobExecutionResponse
* DescribeJobExecutionResponse `object`
  * execution
    * approximateSecondsBeforeTimedOut
    * executionNumber
    * jobDocument
    * jobId
    * lastUpdatedAt
    * queuedAt
    * startedAt
    * status
    * statusDetails
    * thingName
    * versionNumber

### DetailsKey
* DetailsKey `string`

### DetailsMap
* DetailsMap `object`

### DetailsValue
* DetailsValue `string`

### ExecutionNumber
* ExecutionNumber `integer`

### ExpectedVersion
* ExpectedVersion `integer`

### GetPendingJobExecutionsRequest
* GetPendingJobExecutionsRequest `object`

### GetPendingJobExecutionsResponse
* GetPendingJobExecutionsResponse `object`
  * inProgressJobs
    * items [JobExecutionSummary](#jobexecutionsummary)
  * queuedJobs
    * items [JobExecutionSummary](#jobexecutionsummary)

### IncludeExecutionState
* IncludeExecutionState `boolean`

### IncludeJobDocument
* IncludeJobDocument `boolean`

### InvalidRequestException


### InvalidStateTransitionException


### JobDocument
* JobDocument `string`

### JobExecution
* JobExecution `object`: Contains data about a job execution.
  * approximateSecondsBeforeTimedOut
  * executionNumber
  * jobDocument
  * jobId
  * lastUpdatedAt
  * queuedAt
  * startedAt
  * status
  * statusDetails
  * thingName
  * versionNumber

### JobExecutionState
* JobExecutionState `object`: Contains data about the state of a job execution.
  * status
  * statusDetails
  * versionNumber

### JobExecutionStatus
* JobExecutionStatus `string` (values: QUEUED, IN_PROGRESS, SUCCEEDED, FAILED, TIMED_OUT, REJECTED, REMOVED, CANCELED)

### JobExecutionSummary
* JobExecutionSummary `object`: Contains a subset of information about a job execution.
  * executionNumber
  * jobId
  * lastUpdatedAt
  * queuedAt
  * startedAt
  * versionNumber

### JobExecutionSummaryList
* JobExecutionSummaryList `array`
  * items [JobExecutionSummary](#jobexecutionsummary)

### JobId
* JobId `string`

### LastUpdatedAt
* LastUpdatedAt `integer`

### QueuedAt
* QueuedAt `integer`

### ResourceNotFoundException


### ServiceUnavailableException


### StartNextPendingJobExecutionRequest
* StartNextPendingJobExecutionRequest `object`
  * statusDetails
  * stepTimeoutInMinutes

### StartNextPendingJobExecutionResponse
* StartNextPendingJobExecutionResponse `object`
  * execution
    * approximateSecondsBeforeTimedOut
    * executionNumber
    * jobDocument
    * jobId
    * lastUpdatedAt
    * queuedAt
    * startedAt
    * status
    * statusDetails
    * thingName
    * versionNumber

### StartedAt
* StartedAt `integer`

### StepTimeoutInMinutes
* StepTimeoutInMinutes `integer`

### TerminalStateException


### ThingName
* ThingName `string`

### ThrottlingException


### UpdateJobExecutionRequest
* UpdateJobExecutionRequest `object`
  * executionNumber
  * expectedVersion
  * includeJobDocument
  * includeJobExecutionState
  * status **required**
  * statusDetails
  * stepTimeoutInMinutes

### UpdateJobExecutionResponse
* UpdateJobExecutionResponse `object`
  * executionState
    * status
    * statusDetails
    * versionNumber
  * jobDocument

### VersionNumber
* VersionNumber `integer`


