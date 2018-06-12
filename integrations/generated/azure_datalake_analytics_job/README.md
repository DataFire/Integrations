# @datafire/azure_datalake_analytics_job

Client library for DataLakeAnalyticsJobManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_datalake_analytics_job
```
```js
let azure_datalake_analytics_job = require('@datafire/azure_datalake_analytics_job').create();

azure_datalake_analytics_job.Job_Build({
  "parameters": null,
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Creates an Azure Data Lake Analytics job client.

## Actions

### Job_Build
Builds (compiles) the specified job in the specified Data Lake Analytics account for job correctness and validation.


```js
azure_datalake_analytics_job.Job_Build({
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [BuildJobParameters](#buildjobparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobInformation](#jobinformation)

### Job_List
Lists the jobs, if any, associated with the specified Data Lake Analytics account. The response includes a link to the next page of results, if any.


```js
azure_datalake_analytics_job.Job_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: OData filter. Optional.
  * $top `integer`: The number of items to return. Optional.
  * $skip `integer`: The number of items to skip over before returning elements. Optional.
  * $select `string`: OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
  * $orderby `string`: OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
  * $count `boolean`: The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobInfoListResult](#jobinfolistresult)

### Job_Get
Gets the job information for the specified job ID.


```js
azure_datalake_analytics_job.Job_Get({
  "jobIdentity": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobIdentity **required** `string`: JobInfo ID.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobInformation](#jobinformation)

### Job_Update
Updates the job information for the specified job ID. (Only for use internally with Scope job type.)


```js
azure_datalake_analytics_job.Job_Update({
  "jobIdentity": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobIdentity **required** `string`: Job identifier. Uniquely identifies the job across all jobs submitted to the service.
  * parameters [UpdateJobParameters](#updatejobparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobInformation](#jobinformation)

### Job_Create
Submits a job to the specified Data Lake Analytics account.


```js
azure_datalake_analytics_job.Job_Create({
  "jobIdentity": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobIdentity **required** `string`: Job identifier. Uniquely identifies the job across all jobs submitted to the service.
  * parameters **required** [CreateJobParameters](#createjobparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobInformation](#jobinformation)

### Job_Cancel
Cancels the running job specified by the job ID.


```js
azure_datalake_analytics_job.Job_Cancel({
  "jobIdentity": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobIdentity **required** `string`: Job identifier. Uniquely identifies the job across all jobs submitted to the service.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Job_GetDebugDataPath
Gets the job debug data information specified by the job ID.


```js
azure_datalake_analytics_job.Job_GetDebugDataPath({
  "jobIdentity": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobIdentity **required** `string`: Job identifier. Uniquely identifies the job across all jobs submitted to the service.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobDataPath](#jobdatapath)

### Job_GetStatistics
Gets statistics of the specified job.


```js
azure_datalake_analytics_job.Job_GetStatistics({
  "jobIdentity": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobIdentity **required** `string`: Job Information ID.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobStatistics](#jobstatistics)

### Job_Yield
Pauses the specified job and places it back in the job queue, behind other jobs of equal or higher importance, based on priority. (Only for use internally with Scope job type.)


```js
azure_datalake_analytics_job.Job_Yield({
  "jobIdentity": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobIdentity **required** `string`: Job identifier. Uniquely identifies the job across all jobs submitted to the service.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Pipeline_List
Lists all pipelines.


```js
azure_datalake_analytics_job.Pipeline_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * startDateTime `string`: The start date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart.
  * endDateTime `string`: The end date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobPipelineInformationListResult](#jobpipelineinformationlistresult)

### Pipeline_Get
Gets the Pipeline information for the specified pipeline ID.


```js
azure_datalake_analytics_job.Pipeline_Get({
  "pipelineIdentity": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * pipelineIdentity **required** `string`: Pipeline ID.
  * startDateTime `string`: The start date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart.
  * endDateTime `string`: The end date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobPipelineInformation](#jobpipelineinformation)

### Recurrence_List
Lists all recurrences.


```js
azure_datalake_analytics_job.Recurrence_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * startDateTime `string`: The start date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart.
  * endDateTime `string`: The end date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobRecurrenceInformationListResult](#jobrecurrenceinformationlistresult)

### Recurrence_Get
Gets the recurrence information for the specified recurrence ID.


```js
azure_datalake_analytics_job.Recurrence_Get({
  "recurrenceIdentity": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * recurrenceIdentity **required** `string`: Recurrence ID.
  * startDateTime `string`: The start date for when to get the recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart.
  * endDateTime `string`: The end date for when to get recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobRecurrenceInformation](#jobrecurrenceinformation)



## Definitions

### BaseJobParameters
* BaseJobParameters `object`: Data Lake Analytics Job Parameters base class for build and submit.
  * properties **required** [CreateJobProperties](#createjobproperties)
  * type **required** `string` (values: USql, Hive, Scope): The job type of the current job (Hive, USql, or Scope (for internal use only)).

### BuildJobParameters
* BuildJobParameters `object`: The parameters used to build a new Data Lake Analytics job.
  * name `string`: The friendly name of the job to build.
  * properties **required** [CreateJobProperties](#createjobproperties)
  * type **required** `string` (values: USql, Hive, Scope): The job type of the current job (Hive, USql, or Scope (for internal use only)).

### CreateJobParameters
* CreateJobParameters `object`: The parameters used to submit a new Data Lake Analytics job.
  * degreeOfParallelism `integer`: The degree of parallelism to use for this job. This must be greater than 0, if set to less than 0 it will default to 1.
  * logFilePatterns `array`: The list of log file name patterns to find in the logFolder. '*' is the only matching character allowed. Example format: jobExecution*.log or *mylog*.txt
    * items `string`
  * name **required** `string`: The friendly name of the job to submit.
  * priority `integer`: The priority value to use for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0.
  * related [JobRelationshipProperties](#jobrelationshipproperties)
  * properties **required** [CreateJobProperties](#createjobproperties)
  * type **required** `string` (values: USql, Hive, Scope): The job type of the current job (Hive, USql, or Scope (for internal use only)).

### CreateJobProperties
* CreateJobProperties `object`: The common Data Lake Analytics job properties for job submission.
  * runtimeVersion `string`: The runtime version of the Data Lake Analytics engine to use for the specific type of job being run.
  * script **required** `string`: The script to run. Please note that the maximum script size is 3 MB.
  * type **required** `string`: The job type of the current job (Hive, USql, or Scope (for internal use only)).

### CreateScopeJobParameters
* CreateScopeJobParameters `object`: The parameters used to submit a new Data Lake Analytics Scope job. (Only for use internally with Scope job type.)
  * tags `object`: The key-value pairs used to add additional metadata to the job information.
  * degreeOfParallelism `integer`: The degree of parallelism to use for this job. This must be greater than 0, if set to less than 0 it will default to 1.
  * logFilePatterns `array`: The list of log file name patterns to find in the logFolder. '*' is the only matching character allowed. Example format: jobExecution*.log or *mylog*.txt
    * items `string`
  * name **required** `string`: The friendly name of the job to submit.
  * priority `integer`: The priority value to use for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0.
  * related [JobRelationshipProperties](#jobrelationshipproperties)
  * properties **required** [CreateJobProperties](#createjobproperties)
  * type **required** `string` (values: USql, Hive, Scope): The job type of the current job (Hive, USql, or Scope (for internal use only)).

### CreateScopeJobProperties
* CreateScopeJobProperties `object`: Scope job properties used when submitting Scope jobs. (Only for use internally with Scope job type.)
  * notifier `string`: The list of email addresses, separated by semi-colons, to notify when the job reaches a terminal state.
  * resources `array`: The list of resources that are required by the job.
    * items [ScopeJobResource](#scopejobresource)
  * runtimeVersion `string`: The runtime version of the Data Lake Analytics engine to use for the specific type of job being run.
  * script **required** `string`: The script to run. Please note that the maximum script size is 3 MB.
  * type **required** `string`: The job type of the current job (Hive, USql, or Scope (for internal use only)).

### CreateUSqlJobProperties
* CreateUSqlJobProperties `object`: U-SQL job properties used when submitting U-SQL jobs.
  * compileMode `string` (values: Semantic, Full, SingleBox): The specific compilation mode for the job used during execution. If this is not specified during submission, the server will determine the optimal compilation mode.
  * runtimeVersion `string`: The runtime version of the Data Lake Analytics engine to use for the specific type of job being run.
  * script **required** `string`: The script to run. Please note that the maximum script size is 3 MB.
  * type **required** `string`: The job type of the current job (Hive, USql, or Scope (for internal use only)).

### Diagnostics
* Diagnostics `object`: Error diagnostic information for failed jobs.
  * columnNumber `integer`: The column where the error occured.
  * end `integer`: The ending index of the error.
  * lineNumber `integer`: The line number the error occured on.
  * message `string`: The error message.
  * severity `string` (values: Warning, Error, Info, SevereWarning, Deprecated, UserWarning): The severity of the error.
  * start `integer`: The starting index of the error.

### HiveJobProperties
* HiveJobProperties `object`: Hive job properties used when retrieving Hive jobs.
  * executedStatementCount `integer`: The number of statements that have been run based on the script.
  * logsLocation `string`: The Hive logs location.
  * outputLocation `string`: The location of Hive job output files (both execution output and results).
  * statementCount `integer`: The number of statements that will be run based on the script.
  * runtimeVersion `string`: The runtime version of the Data Lake Analytics engine to use for the specific type of job being run.
  * script **required** `string`: The script to run. Please note that the maximum script size is 3 MB.
  * type **required** `string`: The job type of the current job (Hive, USql, or Scope (for internal use only)).

### JobDataPath
* JobDataPath `object`: A Data Lake Analytics job data path item.
  * command `string`: The command that this job data relates to.
  * jobId `string`: The ID of the job this data is for.
  * paths `array`: The list of paths to all of the job data.
    * items `string`

### JobErrorDetails
* JobErrorDetails `object`: The Data Lake Analytics job error details.
  * description `string`: The error message description.
  * details `string`: The details of the error message.
  * endOffset `integer`: The end offset in the job where the error was found.
  * errorId `string`: The specific identifier for the type of error encountered in the job.
  * filePath `string`: The path to any supplemental error files, if any.
  * helpLink `string`: The link to MSDN or Azure help for this type of error, if any.
  * innerError [JobInnerError](#jobinnererror)
  * internalDiagnostics `string`: The internal diagnostic stack trace if the user requesting the job error details has sufficient permissions it will be retrieved, otherwise it will be empty.
  * lineNumber `integer`: The specific line number in the job where the error occured.
  * message `string`: The user friendly error message for the failure.
  * resolution `string`: The recommended resolution for the failure, if any.
  * severity `string` (values: Warning, Error, Info, SevereWarning, Deprecated, UserWarning): The severity level of the failure.
  * source `string`: The ultimate source of the failure (usually either SYSTEM or USER).
  * startOffset `integer`: The start offset in the job where the error was found

### JobInfoListResult
* JobInfoListResult `object`: List of JobInfo items.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of JobInfo items.
    * items [JobInformationBasic](#jobinformationbasic)

### JobInformation
* JobInformation `object`: The extended Data Lake Analytics job information properties returned when retrieving a specific job.
  * errorMessage `array`: The error message details for the job, if the job failed.
    * items [JobErrorDetails](#joberrordetails)
  * properties **required** [JobProperties](#jobproperties)
  * stateAuditRecords `array`: The job state audit records, indicating when various operations have been performed on this job.
    * items [JobStateAuditRecord](#jobstateauditrecord)
  * degreeOfParallelism `integer`: The degree of parallelism used for this job. This must be greater than 0, if set to less than 0 it will default to 1.
  * endTime `string`: The completion time of the job.
  * jobId `string`: The job's unique identifier (a GUID).
  * logFilePatterns `array`: The list of log file name patterns to find in the logFolder. '*' is the only matching character allowed. Example format: jobExecution*.log or *mylog*.txt
    * items `string`
  * logFolder `string`: The log folder path to use in the following format: adl://<accountName>.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/03/13/17/18/5fe51957-93bc-4de0-8ddc-c5a4753b068b/logs/.
  * name **required** `string`: The friendly name of the job.
  * priority `integer`: The priority value for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0.
  * related [JobRelationshipProperties](#jobrelationshipproperties)
  * result `string` (values: None, Succeeded, Cancelled, Failed): The result of job execution or the current result of the running job.
  * startTime `string`: The start time of the job.
  * state `string` (values: Accepted, Compiling, Ended, New, Queued, Running, Scheduling, Starting, Paused, WaitingForCapacity): The job state. When the job is in the Ended state, refer to Result and ErrorMessage for details.
  * submitTime `string`: The time the job was submitted to the service.
  * submitter `string`: The user or account that submitted the job.
  * tags `object`: The key-value pairs used to add additional metadata to the job information. (Only for use internally with Scope job type.)
  * type **required** `string` (values: USql, Hive, Scope): The job type of the current job (Hive, USql, or Scope (for internal use only)).

### JobInformationBasic
* JobInformationBasic `object`: The common Data Lake Analytics job information properties.
  * degreeOfParallelism `integer`: The degree of parallelism used for this job. This must be greater than 0, if set to less than 0 it will default to 1.
  * endTime `string`: The completion time of the job.
  * jobId `string`: The job's unique identifier (a GUID).
  * logFilePatterns `array`: The list of log file name patterns to find in the logFolder. '*' is the only matching character allowed. Example format: jobExecution*.log or *mylog*.txt
    * items `string`
  * logFolder `string`: The log folder path to use in the following format: adl://<accountName>.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/03/13/17/18/5fe51957-93bc-4de0-8ddc-c5a4753b068b/logs/.
  * name **required** `string`: The friendly name of the job.
  * priority `integer`: The priority value for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0.
  * related [JobRelationshipProperties](#jobrelationshipproperties)
  * result `string` (values: None, Succeeded, Cancelled, Failed): The result of job execution or the current result of the running job.
  * startTime `string`: The start time of the job.
  * state `string` (values: Accepted, Compiling, Ended, New, Queued, Running, Scheduling, Starting, Paused, WaitingForCapacity): The job state. When the job is in the Ended state, refer to Result and ErrorMessage for details.
  * submitTime `string`: The time the job was submitted to the service.
  * submitter `string`: The user or account that submitted the job.
  * tags `object`: The key-value pairs used to add additional metadata to the job information. (Only for use internally with Scope job type.)
  * type **required** `string` (values: USql, Hive, Scope): The job type of the current job (Hive, USql, or Scope (for internal use only)).

### JobInnerError
* JobInnerError `object`: The Data Lake Analytics job error details.
  * component `string`: The component that failed.
  * description `string`: The error message description.
  * details `string`: The details of the error message.
  * diagnosticCode `integer`: The diagnostic error code.
  * errorId `string`: The specific identifier for the type of error encountered in the job.
  * helpLink `string`: The link to MSDN or Azure help for this type of error, if any.
  * innerError [JobInnerError](#jobinnererror)
  * internalDiagnostics `string`: The internal diagnostic stack trace if the user requesting the job error details has sufficient permissions it will be retrieved, otherwise it will be empty.
  * message `string`: The user friendly error message for the failure.
  * resolution `string`: The recommended resolution for the failure, if any.
  * severity `string` (values: Warning, Error, Info, SevereWarning, Deprecated, UserWarning): The severity level of the failure.
  * source `string`: The ultimate source of the failure (usually either SYSTEM or USER).

### JobPipelineInformation
* JobPipelineInformation `object`: Job Pipeline Information, showing the relationship of jobs and recurrences of those jobs in a pipeline.
  * auHoursCanceled `number`: The number of job execution hours that resulted in canceled jobs.
  * auHoursFailed `number`: The number of job execution hours that resulted in failed jobs.
  * auHoursSucceeded `number`: The number of job execution hours that resulted in successful jobs.
  * lastSubmitTime `string`: The last time a job in this pipeline was submitted.
  * numJobsCanceled `integer`: The number of jobs in this pipeline that have been canceled.
  * numJobsFailed `integer`: The number of jobs in this pipeline that have failed.
  * numJobsSucceeded `integer`: The number of jobs in this pipeline that have succeeded.
  * pipelineId `string`: The job relationship pipeline identifier (a GUID).
  * pipelineName `string`: The friendly name of the job relationship pipeline, which does not need to be unique.
  * pipelineUri `string`: The pipeline uri, unique, links to the originating service for this pipeline.
  * recurrences `array`: The list of recurrence identifiers representing each run of this pipeline.
    * items `string`
  * runs `array`: The list of recurrence identifiers representing each run of this pipeline.
    * items [JobPipelineRunInformation](#jobpipelineruninformation)

### JobPipelineInformationListResult
* JobPipelineInformationListResult `object`: List of job pipeline information items.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of job pipeline information items.
    * items [JobPipelineInformation](#jobpipelineinformation)

### JobPipelineRunInformation
* JobPipelineRunInformation `object`: Run info for a specific job pipeline.
  * lastSubmitTime `string`: The time this instance was last submitted.
  * runId `string`: The run identifier of an instance of pipeline executions (a GUID).

### JobProperties
* JobProperties `object`: The common Data Lake Analytics job properties.
  * runtimeVersion `string`: The runtime version of the Data Lake Analytics engine to use for the specific type of job being run.
  * script **required** `string`: The script to run. Please note that the maximum script size is 3 MB.
  * type **required** `string`: The job type of the current job (Hive, USql, or Scope (for internal use only)).

### JobRecurrenceInformation
* JobRecurrenceInformation `object`: Recurrence job information for a specific recurrence.
  * auHoursCanceled `number`: The number of job execution hours that resulted in canceled jobs.
  * auHoursFailed `number`: The number of job execution hours that resulted in failed jobs.
  * auHoursSucceeded `number`: The number of job execution hours that resulted in successful jobs.
  * lastSubmitTime `string`: The last time a job in this recurrence was submitted.
  * numJobsCanceled `integer`: The number of jobs in this recurrence that have been canceled.
  * numJobsFailed `integer`: The number of jobs in this recurrence that have failed.
  * numJobsSucceeded `integer`: The number of jobs in this recurrence that have succeeded.
  * recurrenceId `string`: The recurrence identifier (a GUID), unique per activity/script, regardless of iterations. This is something to link different occurrences of the same job together.
  * recurrenceName `string`: The recurrence name, user friendly name for the correlation between jobs.

### JobRecurrenceInformationListResult
* JobRecurrenceInformationListResult `object`: List of job recurrence information items.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: The list of job recurrence information items.
    * items [JobRecurrenceInformation](#jobrecurrenceinformation)

### JobRelationshipProperties
* JobRelationshipProperties `object`: Job relationship information properties including pipeline information, correlation information, etc.
  * pipelineId `string`: The job relationship pipeline identifier (a GUID).
  * pipelineName `string`: The friendly name of the job relationship pipeline, which does not need to be unique.
  * pipelineUri `string`: The pipeline uri, unique, links to the originating service for this pipeline.
  * recurrenceId **required** `string`: The recurrence identifier (a GUID), unique per activity/script, regardless of iterations. This is something to link different occurrences of the same job together.
  * recurrenceName `string`: The recurrence name, user friendly name for the correlation between jobs.
  * runId `string`: The run identifier (a GUID), unique identifier of the iteration of this pipeline.

### JobResource
* JobResource `object`: The Data Lake Analytics job resources.
  * name `string`: The name of the resource.
  * resourcePath `string`: The path to the resource.
  * type `string` (values: VertexResource, JobManagerResource, StatisticsResource, VertexResourceInUserFolder, JobManagerResourceInUserFolder, StatisticsResourceInUserFolder): The job resource type.

### JobStateAuditRecord
* JobStateAuditRecord `object`: The Data Lake Analytics job state audit records for tracking the lifecycle of a job.
  * details `string`: The details of the audit log.
  * newState `string`: The new state the job is in.
  * requestedByUser `string`: The user who requests the change.
  * timeStamp `string`: The time stamp that the state change took place.

### JobStatistics
* JobStatistics `object`: The Data Lake Analytics job execution statistics.
  * finalizingTimeUtc `string`: The job finalizing start time.
  * lastUpdateTimeUtc `string`: The last update time for the statistics.
  * stages `array`: The list of stages for the job.
    * items [JobStatisticsVertexStage](#jobstatisticsvertexstage)

### JobStatisticsVertex
* JobStatisticsVertex `object`: The detailed information for a vertex.
  * dataRead `integer`: The amount of data read of the vertex, in bytes.
  * executionTime `string`: The amount of execution time of the vertex.
  * name `string`: The name of the vertex.
  * peakMemUsage `integer`: The amount of peak memory usage of the vertex, in bytes.
  * vertexId `string`: The id of the vertex.

### JobStatisticsVertexStage
* JobStatisticsVertexStage `object`: The Data Lake Analytics job statistics vertex stage information.
  * allocatedContainerCpuCoreCount [ResourceUsageStatistics](#resourceusagestatistics)
  * allocatedContainerMemSize [ResourceUsageStatistics](#resourceusagestatistics)
  * dataRead `integer`: The amount of data read, in bytes.
  * dataReadCrossPod `integer`: The amount of data read across multiple pods, in bytes.
  * dataReadIntraPod `integer`: The amount of data read in one pod, in bytes.
  * dataToRead `integer`: The amount of data remaining to be read, in bytes.
  * dataWritten `integer`: The amount of data written, in bytes.
  * duplicateDiscardCount `integer`: The number of duplicates that were discarded.
  * estimatedVertexCpuCoreCount `integer`: The estimated vertex CPU core count.
  * estimatedVertexMemSize `integer`: The estimated vertex memory size, in bytes.
  * estimatedVertexPeakCpuCoreCount `integer`: The estimated vertex peak CPU core count.
  * failedCount `integer`: The number of failures that occured in this stage.
  * maxDataReadVertex [JobStatisticsVertex](#jobstatisticsvertex)
  * maxExecutionTimeVertex [JobStatisticsVertex](#jobstatisticsvertex)
  * maxPeakMemUsageVertex [JobStatisticsVertex](#jobstatisticsvertex)
  * maxVertexDataRead `integer`: The maximum amount of data read in a single vertex, in bytes.
  * minVertexDataRead `integer`: The minimum amount of data read in a single vertex, in bytes.
  * readFailureCount `integer`: The number of read failures in this stage.
  * revocationCount `integer`: The number of vertices that were revoked during this stage.
  * runningCount `integer`: The number of currently running vertices in this stage.
  * scheduledCount `integer`: The number of currently scheduled vertices in this stage.
  * stageName `string`: The name of this stage in job execution.
  * succeededCount `integer`: The number of vertices that succeeded in this stage.
  * tempDataWritten `integer`: The amount of temporary data written, in bytes.
  * totalCount `integer`: The total vertex count for this stage.
  * totalExecutionTime `string`: The sum of the total execution time of all the vertices in the stage.
  * totalFailedTime `string`: The amount of time that failed vertices took up in this stage.
  * totalPeakMemUsage `integer`: The sum of the peak memory usage of all the vertices in the stage, in bytes.
  * totalProgress `integer`: The current progress of this stage, as a percentage.
  * totalSucceededTime `string`: The amount of time all successful vertices took in this stage.
  * usedVertexCpuCoreCount [ResourceUsageStatistics](#resourceusagestatistics)
  * usedVertexPeakMemSize [ResourceUsageStatistics](#resourceusagestatistics)

### ResourceUsageStatistics
* ResourceUsageStatistics `object`: The statistics information for resource usage.
  * average `number`: The average value.
  * maximum `integer`: The maximum value.
  * minimum `integer`: The minimum value.

### ScopeJobProperties
* ScopeJobProperties `object`: Scope job properties used when submitting and retrieving Scope jobs. (Only for use internally with Scope job type.)
  * notifier `string`: The list of email addresses, separated by semi-colons, to notify when the job reaches a terminal state.
  * resources `array`: The list of resources that are required by the job.
    * items [ScopeJobResource](#scopejobresource)
  * rootProcessNodeId `string`: The ID used to identify the job manager coordinating job execution. This value should not be set by the user and will be ignored if it is.
  * totalCompilationTime `string`: The total time this job spent compiling. This value should not be set by the user and will be ignored if it is.
  * totalPausedTime `string`: The total time this job spent paused. This value should not be set by the user and will be ignored if it is.
  * totalQueuedTime `string`: The total time this job spent queued. This value should not be set by the user and will be ignored if it is.
  * totalRunningTime `string`: The total time this job spent executing. This value should not be set by the user and will be ignored if it is.
  * userAlgebraPath `string`: The algebra file path after the job has completed.
  * yarnApplicationId `string`: The ID used to identify the yarn application executing the job. This value should not be set by the user and will be ignored if it is.
  * runtimeVersion `string`: The runtime version of the Data Lake Analytics engine to use for the specific type of job being run.
  * script **required** `string`: The script to run. Please note that the maximum script size is 3 MB.
  * type **required** `string`: The job type of the current job (Hive, USql, or Scope (for internal use only)).

### ScopeJobResource
* ScopeJobResource `object`: The Scope job resources. (Only for use internally with Scope job type.)
  * name `string`: The name of the resource.
  * path `string`: The path to the resource.

### USqlJobProperties
* USqlJobProperties `object`: U-SQL job properties used when retrieving U-SQL jobs.
  * algebraFilePath `string`: The algebra file path after the job has completed.
  * compileMode `string` (values: Semantic, Full, SingleBox): The specific compilation mode for the job used during execution. If this is not specified during submission, the server will determine the optimal compilation mode.
  * debugData [JobDataPath](#jobdatapath)
  * diagnostics `array`: The diagnostics for the job.
    * items [Diagnostics](#diagnostics)
  * resources `array`: The list of resources that are required by the job.
    * items [JobResource](#jobresource)
  * rootProcessNodeId `string`: The ID used to identify the job manager coordinating job execution. This value should not be set by the user and will be ignored if it is.
  * statistics [JobStatistics](#jobstatistics)
  * totalCompilationTime `string`: The total time this job spent compiling. This value should not be set by the user and will be ignored if it is.
  * totalPausedTime `string`: The total time this job spent paused. This value should not be set by the user and will be ignored if it is.
  * totalQueuedTime `string`: The total time this job spent queued. This value should not be set by the user and will be ignored if it is.
  * totalRunningTime `string`: The total time this job spent executing. This value should not be set by the user and will be ignored if it is.
  * yarnApplicationId `string`: The ID used to identify the yarn application executing the job. This value should not be set by the user and will be ignored if it is.
  * yarnApplicationTimeStamp `integer`: The timestamp (in ticks) for the yarn application executing the job. This value should not be set by the user and will be ignored if it is.
  * runtimeVersion `string`: The runtime version of the Data Lake Analytics engine to use for the specific type of job being run.
  * script **required** `string`: The script to run. Please note that the maximum script size is 3 MB.
  * type **required** `string`: The job type of the current job (Hive, USql, or Scope (for internal use only)).

### UpdateJobParameters
* UpdateJobParameters `object`: The parameters that can be used to update existing Data Lake Analytics job information properties. (Only for use internally with Scope job type.)
  * degreeOfParallelism `integer`: The degree of parallelism used for this job. This must be greater than 0, if set to less than 0 it will default to 1.
  * priority `integer`: The priority value for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0.
  * tags `object`: The key-value pairs used to add additional metadata to the job information.


