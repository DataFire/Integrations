# @datafire/azure_hdinsight_job

Client library for HDInsightJobManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_hdinsight_job
```
```js
let azure_hdinsight_job = require('@datafire/azure_hdinsight_job').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The HDInsight Job Client.

## Actions

### Job_SubmitHiveJob
Submits a Hive job to an HDInsight cluster.


```js
azure_hdinsight_job.Job_SubmitHiveJob({
  "user.name": "",
  "content": {}
}, context)
```

#### Input
* input `object`
  * user.name **required** `string`: The user name used for running job.
  * content **required** `object`

#### Output
* output [JobSubmissionJsonResponse](#jobsubmissionjsonresponse)

### Job_List
Gets the list of jobs from the specified HDInsight cluster.


```js
azure_hdinsight_job.Job_List({
  "user.name": "",
  "showall": "",
  "fields": ""
}, context)
```

#### Input
* input `object`
  * user.name **required** `string`: The user name used for running job.
  * showall **required** `string` (values: true): If showall is set to 'true', the request will return all jobs the user has permission to view, not only the jobs belonging to the user.
  * fields **required** `string` (values: *): If fields set to '*', the request will return full details of the job. Currently the value can only be '*'.

#### Output
* output `array`
  * items [JobListJsonObject](#joblistjsonobject)

### Job_Kill
Initiates cancel on given running job in the specified HDInsight.


```js
azure_hdinsight_job.Job_Kill({
  "user.name": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * user.name **required** `string`: The user name used for running job.
  * jobId **required** `string`: The id of the job.

#### Output
* output [JobDetailRootJsonObject](#jobdetailrootjsonobject)

### Job_Get
Gets job details from the specified HDInsight cluster.


```js
azure_hdinsight_job.Job_Get({
  "user.name": "",
  "jobId": "",
  "fields": ""
}, context)
```

#### Input
* input `object`
  * user.name **required** `string`: The user name used for running job.
  * jobId **required** `string`: The id of the job.
  * fields **required** `string` (values: *): If fields set to '*', the request will return full details of the job. Currently the value can only be '*'.

#### Output
* output [JobDetailRootJsonObject](#jobdetailrootjsonobject)

### Job_ListAfterJobId
Gets numrecords Of Jobs after jobid from the specified HDInsight cluster.


```js
azure_hdinsight_job.Job_ListAfterJobId({
  "user.name": "",
  "showall": "",
  "fields": ""
}, context)
```

#### Input
* input `object`
  * user.name **required** `string`: The user name used for running job.
  * jobid `string`: JobId from where to list jobs.
  * numrecords `integer`: Number of jobs to fetch.
  * showall **required** `string` (values: true): If showall is set to 'true', the request will return all jobs the user has permission to view, not only the jobs belonging to the user.
  * fields **required** `string` (values: *): If fields set to '*', the request will return full details of the job. Currently the value can only be '*'.

#### Output
* output `array`
  * items [JobListJsonObject](#joblistjsonobject)

### Job_SubmitMapReduceJob
Submits a MapReduce job to an HDInsight cluster.


```js
azure_hdinsight_job.Job_SubmitMapReduceJob({
  "user.name": "",
  "content": {}
}, context)
```

#### Input
* input `object`
  * user.name **required** `string`: The user name used for running job.
  * content **required** `object`

#### Output
* output [JobSubmissionJsonResponse](#jobsubmissionjsonresponse)

### Job_SubmitMapReduceStreamingJob
Submits a MapReduce streaming job to an HDInsight cluster.


```js
azure_hdinsight_job.Job_SubmitMapReduceStreamingJob({
  "user.name": "",
  "content": {}
}, context)
```

#### Input
* input `object`
  * user.name **required** `string`: The user name used for running job.
  * content **required** `object`

#### Output
* output [JobSubmissionJsonResponse](#jobsubmissionjsonresponse)

### Job_SubmitPigJob
Submits a Pig job to an HDInsight cluster.


```js
azure_hdinsight_job.Job_SubmitPigJob({
  "user.name": "",
  "content": {}
}, context)
```

#### Input
* input `object`
  * user.name **required** `string`: The user name used for running job.
  * content **required** `object`

#### Output
* output [JobSubmissionJsonResponse](#jobsubmissionjsonresponse)

### Job_SubmitSqoopJob
Submits a Sqoop job to an HDInsight cluster.


```js
azure_hdinsight_job.Job_SubmitSqoopJob({
  "user.name": "",
  "content": {}
}, context)
```

#### Input
* input `object`
  * user.name **required** `string`: The user name used for running job.
  * content **required** `object`

#### Output
* output [JobSubmissionJsonResponse](#jobsubmissionjsonresponse)

### Job_GetAppState
Gets application state from the specified HDInsight cluster.


```js
azure_hdinsight_job.Job_GetAppState({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * appId **required** `string`: The id of the job.

#### Output
* output [AppState](#appstate)



## Definitions

### AppState
* AppState `object`: The State of the application.
  * state `string` (values: NEW, NEW_SAVING, SUBMITTED, ACCEPTED, RUNNING, FINISHED, FINISHING, FAILED, KILLED): The State of the application.

### JobACLs


### JobDetailRootJsonObject
* JobDetailRootJsonObject `object`: The object containing the job details.
  * callback `object`: The callback URL, if any.
  * completed `string`: The string representing completed status, for example 'done'.
  * exitValue `integer`: The job's exit value.
  * id `string`: The job ID.
  * msg `object`: The message returned.
  * parentId `string`: The parent job ID.
  * percentComplete `string`: The job completion percentage, for example '75% complete'.
  * profile [Profile](#profile)
  * status [Status](#status)
  * user `string`: The user name of the job creator.
  * userargs [Userargs](#userargs)

### JobID
* JobID `object`: The object with the Job ID.
  * id `integer`: The job number.
  * jtIdentifier `string`: The jobTracker identifier.

### JobListJsonObject
* JobListJsonObject `object`: The List Job operation response.
  * detail [JobDetailRootJsonObject](#jobdetailrootjsonobject)
  * id `string`: The Id of the job.

### JobOperationsErrorResponse
* JobOperationsErrorResponse `object`: Describes the format of Error response.
  * error `string`: Error message indicating why the operation failed.

### JobSubmissionJsonResponse
* JobSubmissionJsonResponse `object`: The job submission json response.
  * id `string`: The Id of the created job.

### Profile
* Profile `object`: The object containing the job profile information.
  * jobFile `string`: The job configuration file.
  * jobID [JobID](#jobid)
  * jobId `string`: The full ID of the job.
  * jobName `string`: The user-specified job name.
  * queueName `string`: The name of the queue to which the job is submitted.
  * url `string`: The link to the web-ui for details of the job.
  * user `string`: The userid of the person who submitted the job.

### Status
* Status `object`: Gets or sets the object containing the job status information.
  * cleanupProgress `number`: The progress made on the cleanup.
  * failureInfo `string`: The information about any failures that have occurred.
  * finishTime `integer`: The time at which the job completed. It is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00.
  * historyFile `string`: The history file of the job.
  * jobACLs [JobACLs](#jobacls)
  * jobComplete `boolean`: Whether or not the job has completed.
  * jobFile `string`: The job configuration file.
  * jobID [JobID](#jobid)
  * jobId `string`: The full ID of the job.
  * jobName `string`: The user-specified job name.
  * jobPriority `string`: The priority of the job.
  * mapProgress `number`: The progress made on the maps.
  * neededMem `integer`: The amount of memory needed for the job.
  * numReservedSlots `integer`: The number of slots reserved.
  * numUsedSlots `integer`: The number of slots used for the job.
  * priority `string`: The priority of the job.
  * queue `string`: The job queue name.
  * reduceProgress `number`: The progress made on the reduces.
  * reservedMem `integer`: The amount of memory reserved for the job.
  * retired `boolean`: Whether or not the job has been retired. 
  * runState `integer`: The current state of the job.
  * schedulingInfo `string`: The information about the scheduling of the job.
  * setupProgress `number`: The progress made on the setup.
  * startTime `integer`: The time at which the job started. It is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00.
  * state `string`: The state of the job.
  * trackingUrl `string`: The link to the web-ui for details of the job.
  * uber `boolean`: Whether job running in uber mode.
  * usedMem `integer`: The amount of memory used by the job.
  * username `string`: The userid of the person who submitted the job.

### Userargs
* Userargs `object`: Gets or sets the object containing the user arguments.
  * arg `array`: The list of args defined by the user.
    * items `string`
  * callback `object`: The callback URL, if any.
  * define `array`: The define properties defined by the user.
    * items `string`
  * enablelog `string`: Whether or not the user enabled logs.
  * execute `string`: The query defined by the user.
  * file `object`: The query file provided by the user.
  * files `object`: The files defined by the user.
  * jar `string`: The JAR file provided by the user.
  * statusdir `object`: The status directory defined by the user.


