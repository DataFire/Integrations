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

amazonaws_data_jobs_iot.GetPendingJobExecutions({
  "thingName": ""
}).then(data => {
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
  * statusDetails [DetailsMap](#detailsmap)

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
  * executionNumber [ExecutionNumber](#executionnumber)
  * expectedVersion [ExpectedVersion](#expectedversion)
  * includeJobDocument [IncludeJobDocument](#includejobdocument)
  * includeJobExecutionState [IncludeExecutionState](#includeexecutionstate)
  * status **required** [JobExecutionStatus](#jobexecutionstatus)
  * statusDetails [DetailsMap](#detailsmap)

#### Output
* output [UpdateJobExecutionResponse](#updatejobexecutionresponse)



## Definitions

### CertificateValidationException
* CertificateValidationException `object`: The certificate is invalid.
  * message [errorMessage](#errormessage)

### DescribeJobExecutionJobId
* DescribeJobExecutionJobId `string`

### DescribeJobExecutionRequest
* DescribeJobExecutionRequest `object`

### DescribeJobExecutionResponse
* DescribeJobExecutionResponse `object`
  * execution [JobExecution](#jobexecution)

### DetailsKey
* DetailsKey `string`

### DetailsMap
* DetailsMap `array`
  * items `object`
    * key [DetailsKey](#detailskey)
    * value [DetailsValue](#detailsvalue)

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
  * inProgressJobs [JobExecutionSummaryList](#jobexecutionsummarylist)
  * queuedJobs [JobExecutionSummaryList](#jobexecutionsummarylist)

### IncludeExecutionState
* IncludeExecutionState `boolean`

### IncludeJobDocument
* IncludeJobDocument `boolean`

### InvalidRequestException
* InvalidRequestException `object`: The contents of the request were invalid. For example, this code is returned when an UpdateJobExecution request contains invalid status details. The message contains details about the error.
  * message [errorMessage](#errormessage)

### InvalidStateTransitionException
* InvalidStateTransitionException `object`: An update attempted to change the job execution to a state that is invalid because of the job execution's current state (for example, an attempt to change a request in state SUCCESS to state IN_PROGRESS). In this case, the body of the error message also contains the executionState field.
  * message [errorMessage](#errormessage)

### JobDocument
* JobDocument `string`

### JobExecution
* JobExecution `object`: Contains data about a job execution.
  * executionNumber [ExecutionNumber](#executionnumber)
  * jobDocument [JobDocument](#jobdocument)
  * jobId [JobId](#jobid)
  * lastUpdatedAt [LastUpdatedAt](#lastupdatedat)
  * queuedAt [QueuedAt](#queuedat)
  * startedAt [StartedAt](#startedat)
  * status [JobExecutionStatus](#jobexecutionstatus)
  * statusDetails [DetailsMap](#detailsmap)
  * thingName [ThingName](#thingname)
  * versionNumber [VersionNumber](#versionnumber)

### JobExecutionState
* JobExecutionState `object`: Contains data about the state of a job execution.
  * status [JobExecutionStatus](#jobexecutionstatus)
  * statusDetails [DetailsMap](#detailsmap)
  * versionNumber [VersionNumber](#versionnumber)

### JobExecutionStatus
* JobExecutionStatus `string` (values: QUEUED, IN_PROGRESS, SUCCEEDED, FAILED, REJECTED, REMOVED, CANCELED)

### JobExecutionSummary
* JobExecutionSummary `object`: Contains a subset of information about a job execution.
  * executionNumber [ExecutionNumber](#executionnumber)
  * jobId [JobId](#jobid)
  * lastUpdatedAt [LastUpdatedAt](#lastupdatedat)
  * queuedAt [QueuedAt](#queuedat)
  * startedAt [StartedAt](#startedat)
  * versionNumber [VersionNumber](#versionnumber)

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
* ResourceNotFoundException `object`: The specified resource does not exist.
  * message [errorMessage](#errormessage)

### ServiceUnavailableException
* ServiceUnavailableException `object`: The service is temporarily unavailable.
  * message [errorMessage](#errormessage)

### StartNextPendingJobExecutionRequest
* StartNextPendingJobExecutionRequest `object`
  * statusDetails [DetailsMap](#detailsmap)

### StartNextPendingJobExecutionResponse
* StartNextPendingJobExecutionResponse `object`
  * execution [JobExecution](#jobexecution)

### StartedAt
* StartedAt `integer`

### TerminalStateException
* TerminalStateException `object`: The job is in a terminal state.
  * message [errorMessage](#errormessage)

### ThingName
* ThingName `string`

### ThrottlingException
* ThrottlingException `object`: The rate exceeds the limit.
  * message [errorMessage](#errormessage)

### UpdateJobExecutionRequest
* UpdateJobExecutionRequest `object`
  * executionNumber [ExecutionNumber](#executionnumber)
  * expectedVersion [ExpectedVersion](#expectedversion)
  * includeJobDocument [IncludeJobDocument](#includejobdocument)
  * includeJobExecutionState [IncludeExecutionState](#includeexecutionstate)
  * status **required** [JobExecutionStatus](#jobexecutionstatus)
  * statusDetails [DetailsMap](#detailsmap)

### UpdateJobExecutionResponse
* UpdateJobExecutionResponse `object`
  * executionState [JobExecutionState](#jobexecutionstate)
  * jobDocument [JobDocument](#jobdocument)

### VersionNumber
* VersionNumber `integer`

### errorMessage
* errorMessage `string`


