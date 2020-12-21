# @datafire/windows_batch_batchservice

Client library for BatchService

## Installation and Usage
```bash
npm install --save @datafire/windows_batch_batchservice
```
```js
let windows_batch_batchservice = require('@datafire/windows_batch_batchservice').create();

.then(data => {
  console.log(data);
});
```

## Description

A client for issuing REST requests to the Azure Batch service.

## Actions

### Application_List
This operation returns only applications and versions that are available for use on compute nodes; that is, that can be used in an application package reference. For administrator information about applications and versions that are not yet available to compute nodes, use the Azure portal or the Azure Resource Manager API.


```js
windows_batch_batchservice.Application_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 applications can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ApplicationListResult](#applicationlistresult)

### Application_Get
This operation returns only applications and versions that are available for use on compute nodes; that is, that can be used in an application package reference. For administrator information about applications and versions that are not yet available to compute nodes, use the Azure portal or the Azure Resource Manager API.


```js
windows_batch_batchservice.Application_Get({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The ID of the application.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ApplicationSummary](#applicationsummary)

### Certificate_List
Lists all of the certificates that have been added to the specified account.


```js
windows_batch_batchservice.Certificate_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-certificates.
  * $select `string`: An OData $select clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 certificates can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CertificateListResult](#certificatelistresult)

### Certificate_Add
Adds a certificate to the specified account.


```js
windows_batch_batchservice.Certificate_Add({
  "certificate": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * certificate **required** [CertificateAddParameter](#certificateaddparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Certificate_Delete
You cannot delete a certificate if a resource (pool or compute node) is using it. Before you can delete a certificate, you must therefore make sure that the certificate is not associated with any existing pools, the certificate is not installed on any compute nodes (even if you remove a certificate from a pool, it is not removed from existing compute nodes in that pool until they restart), and no running tasks depend on the certificate. If you try to delete a certificate that is in use, the deletion fails. The certificate status changes to deleteFailed. You can use Cancel Delete Certificate to set the status back to active if you decide that you want to continue using the certificate.


```js
windows_batch_batchservice.Certificate_Delete({
  "thumbprintAlgorithm": "",
  "thumbprint": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * thumbprintAlgorithm **required** `string`: The algorithm used to derive the thumbprint parameter. This must be sha1.
  * thumbprint **required** `string`: The thumbprint of the certificate to be deleted.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Certificate_Get
Gets information about the specified certificate.


```js
windows_batch_batchservice.Certificate_Get({
  "thumbprintAlgorithm": "",
  "thumbprint": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * thumbprintAlgorithm **required** `string`: The algorithm used to derive the thumbprint parameter. This must be sha1.
  * thumbprint **required** `string`: The thumbprint of the certificate to get.
  * $select `string`: An OData $select clause.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [Certificate](#certificate)

### Certificate_CancelDeletion
If you try to delete a certificate that is being used by a pool or compute node, the status of the certificate changes to deleteFailed. If you decide that you want to continue using the certificate, you can use this operation to set the status of the certificate back to active. If you intend to delete the certificate, you do not need to run this operation after the deletion failed. You must make sure that the certificate is not being used by any resources, and then you can try again to delete the certificate.


```js
windows_batch_batchservice.Certificate_CancelDeletion({
  "thumbprintAlgorithm": "",
  "thumbprint": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * thumbprintAlgorithm **required** `string`: The algorithm used to derive the thumbprint parameter. This must be sha1.
  * thumbprint **required** `string`: The thumbprint of the certificate being deleted.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Job_List
Lists all of the jobs in the specified account.


```js
windows_batch_batchservice.Job_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs.
  * $select `string`: An OData $select clause.
  * $expand `string`: An OData $expand clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 jobs can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudJobListResult](#cloudjoblistresult)

### Job_Add
The Batch service supports two ways to control the work done as part of a job. In the first approach, the user specifies a Job Manager task. The Batch service launches this task when it is ready to start the job. The Job Manager task controls all other tasks that run under this job, by using the Task APIs. In the second approach, the user directly controls the execution of tasks under an active job, by using the Task APIs. Also note: when naming jobs, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers.


```js
windows_batch_batchservice.Job_Add({
  "job": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * job **required** [JobAddParameter](#jobaddparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Job_Delete
Deleting a job also deletes all tasks that are part of that job, and all job statistics. This also overrides the retention period for task data; that is, if the job contains tasks which are still retained on compute nodes, the Batch services deletes those tasks' working directories and all their contents.  When a Delete Job request is received, the Batch service sets the job to the deleting state. All update operations on a job that is in deleting state will fail with status code 409 (Conflict), with additional information indicating that the job is being deleted.


```js
windows_batch_batchservice.Job_Delete({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job to delete.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Job_Get
Gets information about the specified job.


```js
windows_batch_batchservice.Job_Get({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job.
  * $select `string`: An OData $select clause.
  * $expand `string`: An OData $expand clause.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudJob](#cloudjob)

### Job_Patch
This replaces only the job properties specified in the request. For example, if the job has constraints, and a request does not specify the constraints element, then the job keeps the existing constraints.


```js
windows_batch_batchservice.Job_Patch({
  "jobId": "",
  "jobPatchParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job whose properties you want to update.
  * jobPatchParameter **required** [JobPatchParameter](#jobpatchparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Job_Update
This fully replaces all the updatable properties of the job. For example, if the job has constraints associated with it and if constraints is not specified with this request, then the Batch service will remove the existing constraints.


```js
windows_batch_batchservice.Job_Update({
  "jobId": "",
  "jobUpdateParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job whose properties you want to update.
  * jobUpdateParameter **required** [JobUpdateParameter](#jobupdateparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Task_AddCollection
Note that each task must have a unique ID. The Batch service may not return the results for each task in the same order the tasks were submitted in this request. If the server times out or the connection is closed during the request, the request may have been partially or fully processed, or not at all. In such cases, the user should re-issue the request. Note that it is up to the user to correctly handle failures when re-issuing a request. For example, you should use the same task IDs during a retry so that if the prior operation succeeded, the retry will not create extra tasks unexpectedly. If the response contains any tasks which failed to add, a client can retry the request. In a retry, it is most efficient to resubmit only tasks that failed to add, and to omit tasks that were successfully added on the first attempt. The maximum lifetime of a task from addition to completion is 7 days. If a task has not completed within 7 days of being added it will be terminated by the Batch service and left in whatever state it was in at that time.


```js
windows_batch_batchservice.Task_AddCollection({
  "jobId": "",
  "taskCollection": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job to which the task collection is to be added.
  * taskCollection **required** [TaskAddCollectionParameter](#taskaddcollectionparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [TaskAddCollectionResult](#taskaddcollectionresult)

### Job_Disable
The Batch Service immediately moves the job to the disabling state. Batch then uses the disableTasks parameter to determine what to do with the currently running tasks of the job. The job remains in the disabling state until the disable operation is completed and all tasks have been dealt with according to the disableTasks option; the job then moves to the disabled state. No new tasks are started under the job until it moves back to active state. If you try to disable a job that is in any state other than active, disabling, or disabled, the request fails with status code 409.


```js
windows_batch_batchservice.Job_Disable({
  "jobId": "",
  "jobDisableParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job to disable.
  * jobDisableParameter **required** [JobDisableParameter](#jobdisableparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Job_Enable
When you call this API, the Batch service sets a disabled job to the enabling state. After the this operation is completed, the job moves to the active state, and scheduling of new tasks under the job resumes. The Batch service does not allow a task to remain in the active state for more than 7 days. Therefore, if you enable a job containing active tasks which were added more than 7 days ago, those tasks will not run.


```js
windows_batch_batchservice.Job_Enable({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job to enable.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Job_ListPreparationAndReleaseTaskStatus
This API returns the Job Preparation and Job Release task status on all compute nodes that have run the Job Preparation or Job Release task. This includes nodes which have since been removed from the pool. If this API is invoked on a job which has no Job Preparation or Job Release task, the Batch service returns HTTP status code 409 (Conflict) with an error code of JobPreparationTaskNotSpecified.


```js
windows_batch_batchservice.Job_ListPreparationAndReleaseTaskStatus({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job.
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status.
  * $select `string`: An OData $select clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 tasks can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudJobListPreparationAndReleaseTaskStatusResult](#cloudjoblistpreparationandreleasetaskstatusresult)

### Job_GetTaskCounts
Task counts provide a count of the tasks by active, running or completed task state, and a count of tasks which succeeded or failed. Tasks in the preparing state are counted as running.


```js
windows_batch_batchservice.Job_GetTaskCounts({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [TaskCounts](#taskcounts)

### Task_List
For multi-instance tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary task. Use the list subtasks API to retrieve information about subtasks.


```js
windows_batch_batchservice.Task_List({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job.
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-tasks.
  * $select `string`: An OData $select clause.
  * $expand `string`: An OData $expand clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 tasks can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudTaskListResult](#cloudtasklistresult)

### Task_Add
The maximum lifetime of a task from addition to completion is 7 days. If a task has not completed within 7 days of being added it will be terminated by the Batch service and left in whatever state it was in at that time.


```js
windows_batch_batchservice.Task_Add({
  "jobId": "",
  "task": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job to which the task is to be added.
  * task **required** [TaskAddParameter](#taskaddparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Task_Delete
When a task is deleted, all of the files in its directory on the compute node where it ran are also deleted (regardless of the retention time). For multi-instance tasks, the delete task operation applies synchronously to the primary task; subtasks and their files are then deleted asynchronously in the background.


```js
windows_batch_batchservice.Task_Delete({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job from which to delete the task.
  * taskId **required** `string`: The ID of the task to delete.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Task_Get
For multi-instance tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary task. Use the list subtasks API to retrieve information about subtasks.


```js
windows_batch_batchservice.Task_Get({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job that contains the task.
  * taskId **required** `string`: The ID of the task to get information about.
  * $select `string`: An OData $select clause.
  * $expand `string`: An OData $expand clause.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudTask](#cloudtask)

### Task_Update
Updates the properties of the specified task.


```js
windows_batch_batchservice.Task_Update({
  "jobId": "",
  "taskId": "",
  "taskUpdateParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job containing the task.
  * taskId **required** `string`: The ID of the task to update.
  * taskUpdateParameter **required** [TaskUpdateParameter](#taskupdateparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### File_ListFromTask
Lists the files in a task's directory on its compute node.


```js
windows_batch_batchservice.File_ListFromTask({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job that contains the task.
  * taskId **required** `string`: The ID of the task whose files you want to list.
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files.
  * recursive `boolean`: Whether to list children of the task directory. This parameter can be used in combination with the filter parameter to list specific type of files.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [NodeFileListResult](#nodefilelistresult)

### File_DeleteFromTask
Deletes the specified task file from the compute node where the task ran.


```js
windows_batch_batchservice.File_DeleteFromTask({
  "jobId": "",
  "taskId": "",
  "filePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job that contains the task.
  * taskId **required** `string`: The ID of the task whose file you want to delete.
  * filePath **required** `string`: The path to the task file or directory that you want to delete.
  * recursive `boolean`: Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### File_GetFromTask
Returns the content of the specified task file.


```js
windows_batch_batchservice.File_GetFromTask({
  "jobId": "",
  "taskId": "",
  "filePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job that contains the task.
  * taskId **required** `string`: The ID of the task whose file you want to retrieve.
  * filePath **required** `string`: The path to the task file that you want to get the content of.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * ocp-range `string`: The byte range to be retrieved. The default is to retrieve the entire file. The format is bytes=startRange-endRange.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
* output `object`

### File_GetPropertiesFromTask
Gets the properties of the specified task file.


```js
windows_batch_batchservice.File_GetPropertiesFromTask({
  "jobId": "",
  "taskId": "",
  "filePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job that contains the task.
  * taskId **required** `string`: The ID of the task whose file you want to get the properties of.
  * filePath **required** `string`: The path to the task file that you want to get the properties of.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Task_Reactivate
Reactivation makes a task eligible to be retried again up to its maximum retry count. The task's state is changed to active. As the task is no longer in the completed state, any previous exit code or failure information is no longer available after reactivation. Each time a task is reactivated, its retry count is reset to 0. Reactivation will fail for tasks that are not completed or that previously completed successfully (with an exit code of 0). Additionally, it will fail if the job has completed (or is terminating or deleting).


```js
windows_batch_batchservice.Task_Reactivate({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job containing the task.
  * taskId **required** `string`: The ID of the task to reactivate.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Task_ListSubtasks
If the task is not a multi-instance task then this returns an empty collection.


```js
windows_batch_batchservice.Task_ListSubtasks({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job.
  * taskId **required** `string`: The ID of the task.
  * $select `string`: An OData $select clause.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudTaskListSubtasksResult](#cloudtasklistsubtasksresult)

### Task_Terminate
When the task has been terminated, it moves to the completed state. For multi-instance tasks, the terminate task operation applies synchronously to the primary task; subtasks are then terminated asynchronously in the background.


```js
windows_batch_batchservice.Task_Terminate({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job containing the task.
  * taskId **required** `string`: The ID of the task to terminate.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Job_Terminate
When a Terminate Job request is received, the Batch service sets the job to the terminating state. The Batch service then terminates any running tasks associated with the job and runs any required job release tasks. Then the job moves into the completed state. If there are any tasks in the job in the active state, they will remain in the active state. Once a job is terminated, new tasks cannot be added and any remaining active tasks will not be scheduled.


```js
windows_batch_batchservice.Job_Terminate({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job to terminate.
  * jobTerminateParameter [JobTerminateParameter](#jobterminateparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### JobSchedule_List
Lists all of the job schedules in the specified account.


```js
windows_batch_batchservice.JobSchedule_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules.
  * $select `string`: An OData $select clause.
  * $expand `string`: An OData $expand clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 job schedules can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudJobScheduleListResult](#cloudjobschedulelistresult)

### JobSchedule_Add
Adds a job schedule to the specified account.


```js
windows_batch_batchservice.JobSchedule_Add({
  "cloudJobSchedule": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * cloudJobSchedule **required** [JobScheduleAddParameter](#jobscheduleaddparameter)
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### JobSchedule_Delete
When you delete a job schedule, this also deletes all jobs and tasks under that schedule. When tasks are deleted, all the files in their working directories on the compute nodes are also deleted (the retention period is ignored). The job schedule statistics are no longer accessible once the job schedule is deleted, though they are still counted towards account lifetime statistics.


```js
windows_batch_batchservice.JobSchedule_Delete({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the job schedule to delete.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### JobSchedule_Get
Gets information about the specified job schedule.


```js
windows_batch_batchservice.JobSchedule_Get({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the job schedule to get.
  * $select `string`: An OData $select clause.
  * $expand `string`: An OData $expand clause.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudJobSchedule](#cloudjobschedule)

### JobSchedule_Exists
Checks the specified job schedule exists.


```js
windows_batch_batchservice.JobSchedule_Exists({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the job schedule which you want to check.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### JobSchedule_Patch
This replaces only the job schedule properties specified in the request. For example, if the schedule property is not specified with this request, then the Batch service will keep the existing schedule. Changes to a job schedule only impact jobs created by the schedule after the update has taken place; currently running jobs are unaffected.


```js
windows_batch_batchservice.JobSchedule_Patch({
  "jobScheduleId": "",
  "jobSchedulePatchParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the job schedule to update.
  * jobSchedulePatchParameter **required** [JobSchedulePatchParameter](#jobschedulepatchparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### JobSchedule_Update
This fully replaces all the updatable properties of the job schedule. For example, if the schedule property is not specified with this request, then the Batch service will remove the existing schedule. Changes to a job schedule only impact jobs created by the schedule after the update has taken place; currently running jobs are unaffected.


```js
windows_batch_batchservice.JobSchedule_Update({
  "jobScheduleId": "",
  "jobScheduleUpdateParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the job schedule to update.
  * jobScheduleUpdateParameter **required** [JobScheduleUpdateParameter](#jobscheduleupdateparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### JobSchedule_Disable
No new jobs will be created until the job schedule is enabled again.


```js
windows_batch_batchservice.JobSchedule_Disable({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the job schedule to disable.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### JobSchedule_Enable
Enables a job schedule.


```js
windows_batch_batchservice.JobSchedule_Enable({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the job schedule to enable.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Job_ListFromJobSchedule
Lists the jobs that have been created under the specified job schedule.


```js
windows_batch_batchservice.Job_ListFromJobSchedule({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the job schedule from which you want to get a list of jobs.
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs-in-a-job-schedule.
  * $select `string`: An OData $select clause.
  * $expand `string`: An OData $expand clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 jobs can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudJobListResult](#cloudjoblistresult)

### JobSchedule_Terminate
Terminates a job schedule.


```js
windows_batch_batchservice.JobSchedule_Terminate({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the job schedule to terminates.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Job_GetAllLifetimeStatistics
Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes.


```js
windows_batch_batchservice.Job_GetAllLifetimeStatistics({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [JobStatistics](#jobstatistics)

### Pool_GetAllLifetimeStatistics
Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes.


```js
windows_batch_batchservice.Pool_GetAllLifetimeStatistics({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [PoolStatistics](#poolstatistics)

### Account_ListNodeAgentSkus
Lists all node agent SKUs supported by the Azure Batch service.


```js
windows_batch_batchservice.Account_ListNodeAgentSkus({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-node-agent-skus.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 results will be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [AccountListNodeAgentSkusResult](#accountlistnodeagentskusresult)

### Account_ListPoolNodeCounts
Gets the number of nodes in each state, grouped by pool.


```js
windows_batch_batchservice.Account_ListPoolNodeCounts({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch.
  * maxresults `integer`: The maximum number of items to return in the response.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [PoolNodeCountsListResult](#poolnodecountslistresult)

### Pool_List
Lists all of the pools in the specified account.


```js
windows_batch_batchservice.Pool_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools.
  * $select `string`: An OData $select clause.
  * $expand `string`: An OData $expand clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 pools can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudPoolListResult](#cloudpoollistresult)

### Pool_Add
When naming pools, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers.


```js
windows_batch_batchservice.Pool_Add({
  "pool": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * pool **required** [PoolAddParameter](#pooladdparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_Delete
When you request that a pool be deleted, the following actions occur: the pool state is set to deleting; any ongoing resize operation on the pool are stopped; the Batch service starts resizing the pool to zero nodes; any tasks running on existing nodes are terminated and requeued (as if a resize pool operation had been requested with the default requeue option); finally, the pool is removed from the system. Because running tasks are requeued, the user can rerun these tasks by updating their job to target a different pool. The tasks can then run on the new pool. If you want to override the requeue behavior, then you should call resize pool explicitly to shrink the pool to zero size before deleting the pool. If you call an Update, Patch or Delete API on a pool in the deleting state, it will fail with HTTP status code 409 with error code PoolBeingDeleted.


```js
windows_batch_batchservice.Pool_Delete({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool to delete.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_Get
Gets information about the specified pool.


```js
windows_batch_batchservice.Pool_Get({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool to get.
  * $select `string`: An OData $select clause.
  * $expand `string`: An OData $expand clause.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudPool](#cloudpool)

### Pool_Exists
Gets basic properties of a pool.


```js
windows_batch_batchservice.Pool_Exists({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool to get.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_Patch
This only replaces the pool properties specified in the request. For example, if the pool has a start task associated with it, and a request does not specify a start task element, then the pool keeps the existing start task.


```js
windows_batch_batchservice.Pool_Patch({
  "poolId": "",
  "poolPatchParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool to update.
  * poolPatchParameter **required** [PoolPatchParameter](#poolpatchparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_DisableAutoScale
Disables automatic scaling for a pool.


```js
windows_batch_batchservice.Pool_DisableAutoScale({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool on which to disable automatic scaling.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_EnableAutoScale
You cannot enable automatic scaling on a pool if a resize operation is in progress on the pool. If automatic scaling of the pool is currently disabled, you must specify a valid autoscale formula as part of the request. If automatic scaling of the pool is already enabled, you may specify a new autoscale formula and/or a new evaluation interval. You cannot call this API for the same pool more than once every 30 seconds.


```js
windows_batch_batchservice.Pool_EnableAutoScale({
  "poolId": "",
  "poolEnableAutoScaleParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool on which to enable automatic scaling.
  * poolEnableAutoScaleParameter **required** [PoolEnableAutoScaleParameter](#poolenableautoscaleparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_EvaluateAutoScale
This API is primarily for validating an autoscale formula, as it simply returns the result without applying the formula to the pool. The pool must have auto scaling enabled in order to evaluate a formula.


```js
windows_batch_batchservice.Pool_EvaluateAutoScale({
  "poolId": "",
  "poolEvaluateAutoScaleParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool on which to evaluate the automatic scaling formula.
  * poolEvaluateAutoScaleParameter **required** [PoolEvaluateAutoScaleParameter](#poolevaluateautoscaleparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [AutoScaleRun](#autoscalerun)

### ComputeNode_List
Lists the compute nodes in the specified pool.


```js
windows_batch_batchservice.ComputeNode_List({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool from which you want to list nodes.
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool.
  * $select `string`: An OData $select clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 nodes can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ComputeNodeListResult](#computenodelistresult)

### ComputeNode_Get
Gets information about the specified compute node.


```js
windows_batch_batchservice.ComputeNode_Get({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the compute node that you want to get information about.
  * $select `string`: An OData $select clause.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ComputeNode](#computenode)

### ComputeNode_DisableScheduling
You can disable task scheduling on a node only if its current scheduling state is enabled.


```js
windows_batch_batchservice.ComputeNode_DisableScheduling({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the compute node on which you want to disable task scheduling.
  * nodeDisableSchedulingParameter [NodeDisableSchedulingParameter](#nodedisableschedulingparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ComputeNode_EnableScheduling
You can enable task scheduling on a node only if its current scheduling state is disabled


```js
windows_batch_batchservice.ComputeNode_EnableScheduling({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the compute node on which you want to enable task scheduling.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### File_ListFromComputeNode
Lists all of the files in task directories on the specified compute node.


```js
windows_batch_batchservice.File_ListFromComputeNode({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the compute node whose files you want to list.
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files.
  * recursive `boolean`: Whether to list children of a directory.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [NodeFileListResult](#nodefilelistresult)

### File_DeleteFromComputeNode
Deletes the specified file from the compute node.


```js
windows_batch_batchservice.File_DeleteFromComputeNode({
  "poolId": "",
  "nodeId": "",
  "filePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the compute node from which you want to delete the file.
  * filePath **required** `string`: The path to the file or directory that you want to delete.
  * recursive `boolean`: Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### File_GetFromComputeNode
Returns the content of the specified compute node file.


```js
windows_batch_batchservice.File_GetFromComputeNode({
  "poolId": "",
  "nodeId": "",
  "filePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the compute node that contains the file.
  * filePath **required** `string`: The path to the compute node file that you want to get the content of.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * ocp-range `string`: The byte range to be retrieved. The default is to retrieve the entire file. The format is bytes=startRange-endRange.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
* output `object`

### File_GetPropertiesFromComputeNode
Gets the properties of the specified compute node file.


```js
windows_batch_batchservice.File_GetPropertiesFromComputeNode({
  "poolId": "",
  "nodeId": "",
  "filePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the compute node that contains the file.
  * filePath **required** `string`: The path to the compute node file that you want to get the properties of.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ComputeNode_GetRemoteDesktop
Before you can access a node by using the RDP file, you must create a user account on the node. This API can only be invoked on pools created with a cloud service configuration. For pools created with a virtual machine configuration, see the GetRemoteLoginSettings API.


```js
windows_batch_batchservice.ComputeNode_GetRemoteDesktop({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the compute node for which you want to get the Remote Desktop Protocol file.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output `object`

### ComputeNode_Reboot
You can restart a node only if it is in an idle or running state.


```js
windows_batch_batchservice.ComputeNode_Reboot({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the compute node that you want to restart.
  * nodeRebootParameter [NodeRebootParameter](#noderebootparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ComputeNode_Reimage
You can reinstall the operating system on a node only if it is in an idle or running state. This API can be invoked only on pools created with the cloud service configuration property.


```js
windows_batch_batchservice.ComputeNode_Reimage({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the compute node that you want to restart.
  * nodeReimageParameter [NodeReimageParameter](#nodereimageparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ComputeNode_GetRemoteLoginSettings
Before you can remotely login to a node using the remote login settings, you must create a user account on the node. This API can be invoked only on pools created with the virtual machine configuration property. For pools created with a cloud service configuration, see the GetRemoteDesktop API.


```js
windows_batch_batchservice.ComputeNode_GetRemoteLoginSettings({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the compute node for which to obtain the remote login settings.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ComputeNodeGetRemoteLoginSettingsResult](#computenodegetremoteloginsettingsresult)

### ComputeNode_UploadBatchServiceLogs
This is for gathering Azure Batch service log files in an automated fashion from nodes if you are experiencing an error and wish to escalate to Azure support. The Azure Batch service log files should be shared with Azure support to aid in debugging issues with the Batch service.


```js
windows_batch_batchservice.ComputeNode_UploadBatchServiceLogs({
  "poolId": "",
  "nodeId": "",
  "uploadBatchServiceLogsConfiguration": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the compute node from which you want to upload the Azure Batch service log files.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * uploadBatchServiceLogsConfiguration **required** [UploadBatchServiceLogsConfiguration](#uploadbatchservicelogsconfiguration)
  * api-version **required** `string`: Client API Version.

#### Output
* output [UploadBatchServiceLogsResult](#uploadbatchservicelogsresult)

### ComputeNode_AddUser
You can add a user account to a node only when it is in the idle or running state.


```js
windows_batch_batchservice.ComputeNode_AddUser({
  "poolId": "",
  "nodeId": "",
  "user": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the machine on which you want to create a user account.
  * user **required** [ComputeNodeUser](#computenodeuser)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ComputeNode_DeleteUser
You can delete a user account to a node only when it is in the idle or running state.


```js
windows_batch_batchservice.ComputeNode_DeleteUser({
  "poolId": "",
  "nodeId": "",
  "userName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the machine on which you want to delete a user account.
  * userName **required** `string`: The name of the user account to delete.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ComputeNode_UpdateUser
This operation replaces of all the updatable properties of the account. For example, if the expiryTime element is not specified, the current value is replaced with the default value, not left unmodified. You can update a user account on a node only when it is in the idle or running state.


```js
windows_batch_batchservice.ComputeNode_UpdateUser({
  "poolId": "",
  "nodeId": "",
  "userName": "",
  "nodeUpdateUserParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the machine on which you want to update a user account.
  * userName **required** `string`: The name of the user account to update.
  * nodeUpdateUserParameter **required** [NodeUpdateUserParameter](#nodeupdateuserparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_RemoveNodes
This operation can only run when the allocation state of the pool is steady. When this operation runs, the allocation state changes from steady to resizing.


```js
windows_batch_batchservice.Pool_RemoveNodes({
  "poolId": "",
  "nodeRemoveParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool from which you want to remove nodes.
  * nodeRemoveParameter **required** [NodeRemoveParameter](#noderemoveparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_Resize
You can only resize a pool when its allocation state is steady. If the pool is already resizing, the request fails with status code 409. When you resize a pool, the pool's allocation state changes from steady to resizing. You cannot resize pools which are configured for automatic scaling. If you try to do this, the Batch service returns an error 409. If you resize a pool downwards, the Batch service chooses which nodes to remove. To remove specific nodes, use the pool remove nodes API instead.


```js
windows_batch_batchservice.Pool_Resize({
  "poolId": "",
  "poolResizeParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool to resize.
  * poolResizeParameter **required** [PoolResizeParameter](#poolresizeparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_StopResize
This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state. After stopping, the pool stabilizes at the number of nodes it was at when the stop operation was done. During the stop operation, the pool allocation state changes first to stopping and then to steady. A resize operation need not be an explicit resize pool request; this API can also be used to halt the initial sizing of the pool when it is created.


```js
windows_batch_batchservice.Pool_StopResize({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool whose resizing you want to stop.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_UpdateProperties
This fully replaces all the updatable properties of the pool. For example, if the pool has a start task associated with it and if start task is not specified with this request, then the Batch service will remove the existing start task.


```js
windows_batch_batchservice.Pool_UpdateProperties({
  "poolId": "",
  "poolUpdatePropertiesParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool to update.
  * poolUpdatePropertiesParameter **required** [PoolUpdatePropertiesParameter](#poolupdatepropertiesparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_UpgradeOS
During an upgrade, the Batch service upgrades each compute node in the pool. When a compute node is chosen for upgrade, any tasks running on that node are removed from the node and returned to the queue to be rerun later (or on a different compute node). The node will be unavailable until the upgrade is complete. This operation results in temporarily reduced pool capacity as nodes are taken out of service to be upgraded. Although the Batch service tries to avoid upgrading all compute nodes at the same time, it does not guarantee to do this (particularly on small pools); therefore, the pool may be temporarily unavailable to run tasks. When this operation runs, the pool state changes to upgrading. When all compute nodes have finished upgrading, the pool state returns to active. While the upgrade is in progress, the pool's currentOSVersion reflects the OS version that nodes are upgrading from, and targetOSVersion reflects the OS version that nodes are upgrading to. Once the upgrade is complete, currentOSVersion is updated to reflect the OS version now running on all nodes. This operation can only be invoked on pools created with the cloudServiceConfiguration property.


```js
windows_batch_batchservice.Pool_UpgradeOS({
  "poolId": "",
  "poolUpgradeOSParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool to upgrade.
  * poolUpgradeOSParameter **required** [PoolUpgradeOSParameter](#poolupgradeosparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * If-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
  * If-None-Match `string`: An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
  * If-Modified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
  * If-Unmodified-Since `string`: A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_ListUsageMetrics
If you do not specify a $filter clause including a poolId, the response includes all pools that existed in the account in the time range of the returned aggregation intervals. If you do not specify a $filter clause including a startTime or endTime these filters default to the start and end times of the last aggregation interval currently available; that is, only the last aggregation interval is returned.


```js
windows_batch_batchservice.Pool_ListUsageMetrics({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * starttime `string`: The earliest time from which to include metrics. This must be at least two and a half hours before the current time. If not specified this defaults to the start time of the last aggregation interval currently available.
  * endtime `string`: The latest time from which to include metrics. This must be at least two hours before the current time. If not specified this defaults to the end time of the last aggregation interval currently available.
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-account-usage-metrics.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 results will be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [PoolListUsageMetricsResult](#poollistusagemetricsresult)



## Definitions

### AccountListNodeAgentSkusResult
* The result of listing the supported node agent SKUs. `object`
  * odata.nextLink `string`
  * value `array`
    * items [NodeAgentSku](#nodeagentsku)

### AffinityInformation
* A locality hint that can be used by the Batch service to select a compute node on which to start a task. `object`
  * affinityId **required** `string`: You can pass the affinityId of a compute node to indicate that this task needs to run on that compute node. Note that this is just a soft affinity. If the target node is busy or unavailable at the time the task is scheduled, then the task will be scheduled elsewhere.

### ApplicationListResult
* The result of listing the applications available in an account. `object`
  * odata.nextLink `string`
  * value `array`
    * items [ApplicationSummary](#applicationsummary)

### ApplicationPackageReference
* A reference to an application package to be deployed to compute nodes. `object`
  * applicationId **required** `string`
  * version `string`: If this is omitted on a pool, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences and HTTP status code 409. If this is omitted on a task, and no default version is specified for this application, the task fails with a pre-processing error.

### ApplicationSummary
* Contains information about an application in an Azure Batch account. `object`
  * displayName **required** `string`
  * id **required** `string`
  * versions **required** `array`
    * items `string`

### AuthenticationTokenSettings
* The settings for an authentication token that the task can use to perform Batch service operations. `object`
  * access `array`: The authentication token grants access to a limited set of Batch service operations. Currently the only supported value for the access property is 'job', which grants access to all operations related to the job which contains the task.
    * items `string` (values: job)

### AutoPoolSpecification
* Specifies characteristics for a temporary 'auto pool'. The Batch service will create this auto pool when the job is submitted. `object`
  * autoPoolIdPrefix `string`: The Batch service assigns each auto pool a unique identifier on creation. To distinguish between pools created for different purposes, you can specify this element to add a prefix to the ID that is assigned. The prefix can be up to 20 characters long.
  * keepAlive `boolean`: If false, the Batch service deletes the pool once its lifetime (as determined by the poolLifetimeOption setting) expires; that is, when the job or job schedule completes. If true, the Batch service does not delete the pool automatically. It is up to the user to delete auto pools created with this option.
  * pool [PoolSpecification](#poolspecification)
  * poolLifetimeOption **required** `string` (values: jobschedule, job)

### AutoScaleRun
* The results and errors from an execution of a pool autoscale formula. `object`
  * error [AutoScaleRunError](#autoscalerunerror)
  * results `string`: Each variable value is returned in the form $variable=value, and variables are separated by semicolons.
  * timestamp **required** `string`

### AutoScaleRunError
* An error that occurred when executing or evaluating a pool autoscale formula. `object`
  * code `string`
  * message `string`
  * values `array`
    * items [NameValuePair](#namevaluepair)

### AutoUserSpecification
* Specifies the parameters for the auto user that runs a task on the Batch service. `object`
  * elevationLevel [ElevationLevel](#elevationlevel)
  * scope `string` (values: task, pool): The default value is task.

### BatchError
* An error response received from the Azure Batch service. `object`
  * code `string`
  * message [ErrorMessage](#errormessage)
  * values `array`
    * items [BatchErrorDetail](#batcherrordetail)

### BatchErrorDetail
* An item of additional information included in an Azure Batch error response. `object`
  * key `string`
  * value `string`

### CachingType
* The type of caching to enable for the disk. `string` (values: none, readonly, readwrite): The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.

### Certificate
* Certificate `object`: A certificate that can be installed on compute nodes and can be used to authenticate operations on the machine.
  * deleteCertificateError [DeleteCertificateError](#deletecertificateerror)
  * previousState [CertificateState](#certificatestate)
  * previousStateTransitionTime `string`: This property is not set if the certificate is in its initial Active state.
  * publicData `string`
  * state [CertificateState](#certificatestate)
  * stateTransitionTime `string`
  * thumbprint `string`
  * thumbprintAlgorithm `string`
  * url `string`

### CertificateAddParameter
* A certificate that can be installed on compute nodes and can be used to authenticate operations on the machine. `object`
  * certificateFormat `string` (values: pfx, cer)
  * data **required** `string`
  * password `string`: This is required if the certificate format is pfx. It should be omitted if the certificate format is cer.
  * thumbprint **required** `string`
  * thumbprintAlgorithm **required** `string`

### CertificateListResult
* The result of listing the certificates in the account. `object`
  * odata.nextLink `string`
  * value `array`
    * items [Certificate](#certificate)

### CertificateReference
* A reference to a certificate to be installed on compute nodes in a pool. `object`
  * storeLocation `string` (values: currentuser, localmachine): The default value is currentuser. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
  * storeName `string`: This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My.
  * thumbprint **required** `string`
  * thumbprintAlgorithm **required** `string`
  * visibility `array`: You can specify more than one visibility in this collection. The default is all accounts.
    * items `string` (values: starttask, task, remoteuser)

### CertificateState
* The state of the certificate. `string` (values: active, deleting, deletefailed)

### CloudJob
* An Azure Batch job. `object`
  * commonEnvironmentSettings `array`: Individual tasks can override an environment setting specified here by specifying the same setting name with a different value.
    * items [EnvironmentSetting](#environmentsetting)
  * constraints [JobConstraints](#jobconstraints)
  * creationTime `string`
  * displayName `string`
  * eTag `string`: This is an opaque string. You can use it to detect whether the job has changed between requests. In particular, you can be pass the ETag when updating a job to specify that your changes should take effect only if nobody else has modified the job in the meantime.
  * executionInfo [JobExecutionInformation](#jobexecutioninformation)
  * id `string`: The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an account that differ only by case).
  * jobManagerTask [JobManagerTask](#jobmanagertask)
  * jobPreparationTask [JobPreparationTask](#jobpreparationtask)
  * jobReleaseTask [JobReleaseTask](#jobreleasetask)
  * lastModified `string`: This is the last time at which the job level data, such as the job state or priority, changed. It does not factor in task-level changes such as adding new tasks or tasks changing state.
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * onAllTasksComplete [OnAllTasksComplete](#onalltaskscomplete)
  * onTaskFailure [OnTaskFailure](#ontaskfailure)
  * poolInfo [PoolInformation](#poolinformation)
  * previousState [JobState](#jobstate)
  * previousStateTransitionTime `string`: This property is not set if the job is in its initial Active state.
  * priority `integer`: Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
  * state [JobState](#jobstate)
  * stateTransitionTime `string`
  * stats [JobStatistics](#jobstatistics)
  * url `string`
  * usesTaskDependencies `boolean`

### CloudJobListPreparationAndReleaseTaskStatusResult
* The result of listing the status of the Job Preparation and Job Release tasks for a job. `object`
  * odata.nextLink `string`
  * value `array`
    * items [JobPreparationAndReleaseTaskExecutionInformation](#jobpreparationandreleasetaskexecutioninformation)

### CloudJobListResult
* The result of listing the jobs in an account. `object`
  * odata.nextLink `string`
  * value `array`
    * items [CloudJob](#cloudjob)

### CloudJobSchedule
* A job schedule that allows recurring jobs by specifying when to run jobs and a specification used to create each job. `object`
  * creationTime `string`
  * displayName `string`
  * eTag `string`: This is an opaque string. You can use it to detect whether the job schedule has changed between requests. In particular, you can be pass the ETag with an Update Job Schedule request to specify that your changes should take effect only if nobody else has modified the schedule in the meantime.
  * executionInfo [JobScheduleExecutionInformation](#jobscheduleexecutioninformation)
  * id `string`
  * jobSpecification [JobSpecification](#jobspecification)
  * lastModified `string`: This is the last time at which the schedule level data, such as the job specification or recurrence information, changed. It does not factor in job-level changes such as new jobs being created or jobs changing state.
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * previousState [JobScheduleState](#jobschedulestate)
  * previousStateTransitionTime `string`: This property is not present if the job schedule is in its initial active state.
  * schedule [Schedule](#schedule)
  * state [JobScheduleState](#jobschedulestate)
  * stateTransitionTime `string`
  * stats [JobScheduleStatistics](#jobschedulestatistics)
  * url `string`

### CloudJobScheduleListResult
* The result of listing the job schedules in an account. `object`
  * odata.nextLink `string`
  * value `array`
    * items [CloudJobSchedule](#cloudjobschedule)

### CloudPool
* A pool in the Azure Batch service. `object`
  * allocationState `string` (values: steady, resizing, stopping)
  * allocationStateTransitionTime `string`
  * applicationLicenses `array`: The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail.
    * items `string`
  * applicationPackageReferences `array`
    * items [ApplicationPackageReference](#applicationpackagereference)
  * autoScaleEvaluationInterval `string`: This property is set only if the pool automatically scales, i.e. enableAutoScale is true.
  * autoScaleFormula `string`: This property is set only if the pool automatically scales, i.e. enableAutoScale is true.
  * autoScaleRun [AutoScaleRun](#autoscalerun)
  * certificateReferences `array`: For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * cloudServiceConfiguration [CloudServiceConfiguration](#cloudserviceconfiguration)
  * creationTime `string`
  * currentDedicatedNodes `integer`
  * currentLowPriorityNodes `integer`: Low-priority compute nodes which have been preempted are included in this count.
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * eTag `string`: This is an opaque string. You can use it to detect whether the pool has changed between requests. In particular, you can be pass the ETag when updating a pool to specify that your changes should take effect only if nobody else has modified the pool in the meantime.
  * enableAutoScale `boolean`: If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula property is required and the pool automatically resizes according to the formula. The default value is false.
  * enableInterNodeCommunication `boolean`: This imposes restrictions on which nodes can be assigned to the pool. Specifying this value can reduce the chance of the requested number of nodes to be allocated in the pool.
  * id `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an account that differ only by case).
  * lastModified `string`: This is the last time at which the pool level data, such as the targetDedicatedNodes or enableAutoscale settings, changed. It does not factor in node-level changes such as a compute node changing state.
  * maxTasksPerNode `integer`
  * metadata `array`
    * items [MetadataItem](#metadataitem)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * resizeErrors `array`: This property is set only if one or more errors occurred during the last pool resize, and only when the pool allocationState is Steady.
    * items [ResizeError](#resizeerror)
  * resizeTimeout `string`: This is the timeout for the most recent resize operation. (The initial sizing when the pool is created counts as a resize.) The default value is 15 minutes.
  * startTask [StartTask](#starttask)
  * state `string` (values: active, deleting, upgrading)
  * stateTransitionTime `string`
  * stats [PoolStatistics](#poolstatistics)
  * targetDedicatedNodes `integer`
  * targetLowPriorityNodes `integer`
  * taskSchedulingPolicy [TaskSchedulingPolicy](#taskschedulingpolicy)
  * url `string`
  * userAccounts `array`
    * items [UserAccount](#useraccount)
  * virtualMachineConfiguration [VirtualMachineConfiguration](#virtualmachineconfiguration)
  * vmSize `string`: For information about available sizes of virtual machines in pools, see Choose a VM size for compute nodes in an Azure Batch pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).

### CloudPoolListResult
* The result of listing the pools in an account. `object`
  * odata.nextLink `string`
  * value `array`
    * items [CloudPool](#cloudpool)

### CloudServiceConfiguration
* The configuration for nodes in a pool based on the Azure Cloud Services platform. `object`
  * currentOSVersion `string`: This may differ from targetOSVersion if the pool state is Upgrading. In this case some virtual machines may be on the targetOSVersion and some may be on the currentOSVersion during the upgrade process. Once all virtual machines have upgraded, currentOSVersion is updated to be the same as targetOSVersion.
  * osFamily **required** `string`: Possible values are:
  * targetOSVersion `string`: The default value is * which specifies the latest operating system version for the specified OS family.

### CloudTask
* An Azure Batch task. `object`: Batch will retry tasks when a recovery operation is triggered on a compute node. Examples of recovery operations include (but are not limited to) when an unhealthy compute node is rebooted or a compute node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all tasks should be idempotent. This means tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running tasks is to use some form of checkpointing.
  * affinityInfo [AffinityInformation](#affinityinformation)
  * applicationPackageReferences `array`: Application packages are downloaded and deployed to a shared directory, not the task working directory. Therefore, if a referenced package is already on the compute node, and is up to date, then it is not re-downloaded; the existing copy on the compute node is used. If a referenced application package cannot be installed, for example because the package has been deleted or because download failed, the task fails.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * authenticationTokenSettings [AuthenticationTokenSettings](#authenticationtokensettings)
  * commandLine `string`: For multi-instance tasks, the command line is executed as the primary task, after the primary task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
  * constraints [TaskConstraints](#taskconstraints)
  * containerSettings [TaskContainerSettings](#taskcontainersettings)
  * creationTime `string`
  * dependsOn [TaskDependencies](#taskdependencies)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * eTag `string`: This is an opaque string. You can use it to detect whether the task has changed between requests. In particular, you can be pass the ETag when updating a task to specify that your changes should take effect only if nobody else has modified the task in the meantime.
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * executionInfo [TaskExecutionInformation](#taskexecutioninformation)
  * exitConditions [ExitConditions](#exitconditions)
  * id `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters.
  * lastModified `string`
  * multiInstanceSettings [MultiInstanceSettings](#multiinstancesettings)
  * nodeInfo [ComputeNodeInformation](#computenodeinformation)
  * outputFiles `array`: For multi-instance tasks, the files will only be uploaded from the compute node on which the primary task is executed.
    * items [OutputFile](#outputfile)
  * previousState [TaskState](#taskstate)
  * previousStateTransitionTime `string`: This property is not set if the task is in its initial Active state.
  * resourceFiles `array`: For multi-instance tasks, the resource files will only be downloaded to the compute node on which the primary task is executed. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers.
    * items [ResourceFile](#resourcefile)
  * state [TaskState](#taskstate)
  * stateTransitionTime `string`
  * stats [TaskStatistics](#taskstatistics)
  * url `string`
  * userIdentity [UserIdentity](#useridentity)

### CloudTaskListResult
* The result of listing the tasks in a job. `object`
  * odata.nextLink `string`
  * value `array`
    * items [CloudTask](#cloudtask)

### CloudTaskListSubtasksResult
* The result of listing the subtasks of a task. `object`
  * value `array`
    * items [SubtaskInformation](#subtaskinformation)

### ComputeNode
* A compute node in the Batch service. `object`
  * affinityId `string`: Note that this is just a soft affinity. If the target node is busy or unavailable at the time the task is scheduled, then the task will be scheduled elsewhere.
  * allocationTime `string`
  * certificateReferences `array`: For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * endpointConfiguration [ComputeNodeEndpointConfiguration](#computenodeendpointconfiguration)
  * errors `array`
    * items [ComputeNodeError](#computenodeerror)
  * id `string`: Every node that is added to a pool is assigned a unique ID. Whenever a node is removed from a pool, all of its local files are deleted, and the ID is reclaimed and could be reused for new nodes.
  * ipAddress `string`: Every node that is added to a pool is assigned a unique IP address. Whenever a node is removed from a pool, all of its local files are deleted, and the IP address is reclaimed and could be reused for new nodes.
  * isDedicated `boolean`
  * lastBootTime `string`: This property may not be present if the node state is unusable.
  * nodeAgentInfo [NodeAgentInformation](#nodeagentinformation)
  * recentTasks `array`: This property is present only if at least one task has run on this node since it was assigned to the pool.
    * items [TaskInformation](#taskinformation)
  * runningTasksCount `integer`
  * schedulingState `string` (values: enabled, disabled)
  * startTask [StartTask](#starttask)
  * startTaskInfo [StartTaskInformation](#starttaskinformation)
  * state `string` (values: idle, rebooting, reimaging, running, unusable, creating, starting, waitingforstarttask, starttaskfailed, unknown, leavingpool, offline, preempted): The low-priority node has been preempted. Tasks which were running on the node when it was preempted will be rescheduled when another node becomes available.
  * stateTransitionTime `string`
  * totalTasksRun `integer`
  * totalTasksSucceeded `integer`
  * url `string`
  * vmSize `string`: For information about available sizes of virtual machines in pools, see Choose a VM size for compute nodes in an Azure Batch pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).

### ComputeNodeDeallocationOption
* Determines what to do with a node and its running task(s) after it has been selected for deallocation. `string` (values: requeue, terminate, taskcompletion, retaineddata): The default value is requeue.

### ComputeNodeEndpointConfiguration
* The endpoint configuration for the compute node. `object`
  * inboundEndpoints **required** `array`
    * items [InboundEndpoint](#inboundendpoint)

### ComputeNodeError
* An error encountered by a compute node. `object`
  * code `string`
  * errorDetails `array`
    * items [NameValuePair](#namevaluepair)
  * message `string`

### ComputeNodeGetRemoteLoginSettingsResult
* The remote login settings for a compute node. `object`
  * remoteLoginIPAddress **required** `string`
  * remoteLoginPort **required** `integer`

### ComputeNodeInformation
* Information about the compute node on which a task ran. `object`
  * affinityId `string`
  * nodeId `string`
  * nodeUrl `string`
  * poolId `string`
  * taskRootDirectory `string`
  * taskRootDirectoryUrl `string`

### ComputeNodeListResult
* The result of listing the compute nodes in a pool. `object`
  * odata.nextLink `string`
  * value `array`
    * items [ComputeNode](#computenode)

### ComputeNodeUser
* A user account for RDP or SSH access on a compute node. `object`
  * expiryTime `string`: If omitted, the default is 1 day from the current time. For Linux compute nodes, the expiryTime has a precision up to a day.
  * isAdmin `boolean`: The default value is false.
  * name **required** `string`
  * password `string`: The password is required for Windows nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows image reference). For Linux compute nodes, the password can optionally be specified along with the sshPublicKey property.
  * sshPublicKey `string`: The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux nodes. If this is specified for a Windows node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).

### ContainerConfiguration
* The configuration for container-enabled pools. `object`
  * containerImageNames `array`: This is the full image reference, as would be specified to "docker pull". An image will be sourced from the default Docker registry unless the image is fully qualified with an alternative registry.
    * items `string`
  * containerRegistries `array`: If any images must be downloaded from a private registry which requires credentials, then those credentials must be provided here.
    * items [ContainerRegistry](#containerregistry)
  * type **required** `string` (values: dockerCompatible)

### ContainerRegistry
* A private container registry. `object`
  * password **required** `string`
  * registryServer `string`: If omitted, the default is "docker.io".
  * username **required** `string`

### DataDisk
* Settings which will be used by the data disks associated to compute nodes in the pool. `object`
  * caching [CachingType](#cachingtype)
  * diskSizeGB **required** `integer`
  * lun **required** `integer`: The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun.
  * storageAccountType [StorageAccountType](#storageaccounttype)

### DeleteCertificateError
* An error encountered by the Batch service when deleting a certificate. `object`
  * code `string`
  * message `string`
  * values `array`: This list includes details such as the active pools and nodes referencing this certificate. However, if a large number of resources reference the certificate, the list contains only about the first hundred.
    * items [NameValuePair](#namevaluepair)

### ElevationLevel
* The elevation level of the user. `string` (values: nonadmin, admin)

### EnvironmentSetting
* An environment variable to be set on a task process. `object`
  * name **required** `string`
  * value `string`

### ErrorCategory
* The category of the error. `string` (values: usererror, servererror)

### ErrorMessage
* An error message received in an Azure Batch error response. `object`
  * lang `string`
  * value `string`

### ExitCodeMapping
* How the Batch service should respond if a task exits with a particular exit code. `object`
  * code **required** `integer`
  * exitOptions **required** [ExitOptions](#exitoptions)

### ExitCodeRangeMapping
* A range of exit codes and how the Batch service should respond to exit codes within that range. `object`
  * end **required** `integer`
  * exitOptions **required** [ExitOptions](#exitoptions)
  * start **required** `integer`

### ExitConditions
* Specifies how the Batch service should respond when the task completes. `object`
  * default [ExitOptions](#exitoptions)
  * exitCodeRanges `array`
    * items [ExitCodeRangeMapping](#exitcoderangemapping)
  * exitCodes `array`
    * items [ExitCodeMapping](#exitcodemapping)
  * fileUploadError [ExitOptions](#exitoptions)
  * preProcessingError [ExitOptions](#exitoptions)

### ExitOptions
* Specifies how the Batch service responds to a particular exit condition. `object`
  * dependencyAction `string` (values: satisfy, block): The default is 'satisfy' for exit code 0, and 'block' for all other exit conditions. If the job's usesTaskDependencies property is set to false, then specifying the dependencyAction property returns an error and the add task request fails with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400  (Bad Request).
  * jobAction `string` (values: none, disable, terminate): The default is none for exit code 0 and terminate for all other exit conditions. If the job's onTaskFailed property is noAction, then specifying this property returns an error and the add task request fails with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).

### FileProperties
* The properties of a file on a compute node. `object`
  * contentLength **required** `integer`
  * contentType `string`
  * creationTime `string`: The creation time is not returned for files on Linux compute nodes.
  * fileMode `string`: The file mode is returned only for files on Linux compute nodes.
  * lastModified **required** `string`

### ImageReference
* A reference to an Azure Virtual Machines Marketplace image or a custom Azure Virtual Machine image. To get the list of all Azure Marketplace image references verified by Azure Batch, see the 'List node agent SKUs' operation. `object`
  * offer `string`: For example, UbuntuServer or WindowsServer.
  * publisher `string`: For example, Canonical or MicrosoftWindowsServer.
  * sku `string`: For example, 14.04.0-LTS or 2012-R2-Datacenter.
  * version `string`: A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.
  * virtualMachineImageId `string`: This property is mutually exclusive with other ImageReference properties. The virtual machine image must be in the same region and subscription as the Azure Batch account. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration.

### InboundEndpoint
* An inbound endpoint on a compute node. `object`
  * backendPort **required** `integer`
  * frontendPort **required** `integer`
  * name **required** `string`
  * protocol **required** [InboundEndpointProtocol](#inboundendpointprotocol)
  * publicFQDN **required** `string`
  * publicIPAddress **required** `string`

### InboundEndpointProtocol
* The protocol of the endpoint. `string` (values: tcp, udp)

### InboundNATPool
* A inbound NAT pool that can be used to address specific ports on compute nodes in a Batch pool externally. `object`
  * backendPort **required** `integer`: This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
  * frontendPortRangeEnd **required** `integer`: Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
  * frontendPortRangeStart **required** `integer`: Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
  * name **required** `string`: The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
  * networkSecurityGroupRules `array`: The maximum number of rules that can be specified across all the endpoints on a Batch pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400.
    * items [NetworkSecurityGroupRule](#networksecuritygrouprule)
  * protocol **required** [InboundEndpointProtocol](#inboundendpointprotocol)

### JobAddParameter
* An Azure Batch job to add. `object`
  * commonEnvironmentSettings `array`: Individual tasks can override an environment setting specified here by specifying the same setting name with a different value.
    * items [EnvironmentSetting](#environmentsetting)
  * constraints [JobConstraints](#jobconstraints)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * id **required** `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an account that differ only by case).
  * jobManagerTask [JobManagerTask](#jobmanagertask)
  * jobPreparationTask [JobPreparationTask](#jobpreparationtask)
  * jobReleaseTask [JobReleaseTask](#jobreleasetask)
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * onAllTasksComplete [OnAllTasksComplete](#onalltaskscomplete)
  * onTaskFailure [OnTaskFailure](#ontaskfailure)
  * poolInfo **required** [PoolInformation](#poolinformation)
  * priority `integer`: Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
  * usesTaskDependencies `boolean`

### JobConstraints
* The execution constraints for a job. `object`
  * maxTaskRetryCount `integer`: Note that this value specifically controls the number of retries. The Batch service will try each task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry tasks. If the maximum retry count is -1, the Batch service retries tasks without limit. The default value is 0 (no retries).
  * maxWallClockTime `string`: If the job does not complete within the time limit, the Batch service terminates it and any tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the job may run.

### JobDisableParameter
* Options when disabling a job. `object`
  * disableTasks **required** `string` (values: requeue, terminate, wait)

### JobExecutionInformation
* Contains information about the execution of a job in the Azure Batch service. `object`
  * endTime `string`: This property is set only if the job is in the completed state.
  * poolId `string`: This element contains the actual pool where the job is assigned. When you get job details from the service, they also contain a poolInfo element, which contains the pool configuration data from when the job was added or updated. That poolInfo element may also contain a poolId element. If it does, the two IDs are the same. If it does not, it means the job ran on an auto pool, and this property contains the ID of that auto pool.
  * schedulingError [JobSchedulingError](#jobschedulingerror)
  * startTime **required** `string`: This is the time at which the job was created.
  * terminateReason `string`: This property is set only if the job is in the completed state. If the Batch service terminates the job, it sets the reason as follows: JMComplete - the Job Manager task completed, and killJobOnCompletion was set to true. MaxWallClockTimeExpiry - the job reached its maxWallClockTime constraint. TerminateJobSchedule - the job ran as part of a schedule, and the schedule terminated. AllTasksComplete - the job's onAllTasksComplete attribute is set to terminatejob, and all tasks in the job are complete. TaskFailed - the job's onTaskFailure attribute is set to performExitOptionsJobAction, and a task in the job failed with an exit condition that specified a jobAction of terminatejob. Any other string is a user-defined reason specified in a call to the 'Terminate a job' operation.

### JobManagerTask
* Specifies details of a Job Manager task. `object`: The Job Manager task is automatically started when the job is created. The Batch service tries to schedule the Job Manager task before any other tasks in the job. When shrinking a pool, the Batch service tries to preserve compute nodes where Job Manager tasks are running for as long as possible (that is, nodes running 'normal' tasks are removed before nodes running Job Manager tasks). When a Job Manager task fails and needs to be restarted, the system tries to schedule it at the highest priority. If there are no idle nodes available, the system may terminate one of the running tasks in the pool and return it to the queue in order to make room for the Job Manager task to restart. Note that a Job Manager task in one job does not have priority over tasks in other jobs. Across jobs, only job level priorities are observed. For example, if a Job Manager in a priority 0 job needs to be restarted, it will not displace tasks of a priority 1 job. Batch will retry tasks when a recovery operation is triggered on a compute node. Examples of recovery operations include (but are not limited to) when an unhealthy compute node is rebooted or a compute node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all tasks should be idempotent. This means tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running tasks is to use some form of checkpointing.
  * allowLowPriorityNode `boolean`: The default value is true.
  * applicationPackageReferences `array`: Application packages are downloaded and deployed to a shared directory, not the task working directory. Therefore, if a referenced package is already on the compute node, and is up to date, then it is not re-downloaded; the existing copy on the compute node is used. If a referenced application package cannot be installed, for example because the package has been deleted or because download failed, the task fails.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * authenticationTokenSettings [AuthenticationTokenSettings](#authenticationtokensettings)
  * commandLine **required** `string`: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
  * constraints [TaskConstraints](#taskconstraints)
  * containerSettings [TaskContainerSettings](#taskcontainersettings)
  * displayName `string`: It need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * id **required** `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters.
  * killJobOnCompletion `boolean`: If true, when the Job Manager task completes, the Batch service marks the job as complete. If any tasks are still running at this time (other than Job Release), those tasks are terminated. If false, the completion of the Job Manager task does not affect the job status. In this case, you should either use the onAllTasksComplete attribute to terminate the job, or have a client or user terminate the job explicitly. An example of this is if the Job Manager creates a set of tasks but then takes no further role in their execution. The default value is true. If you are using the onAllTasksComplete and onTaskFailure attributes to control job lifetime, and using the Job Manager task only to create the tasks for the job (not to monitor progress), then it is important to set killJobOnCompletion to false.
  * outputFiles `array`: For multi-instance tasks, the files will only be uploaded from the compute node on which the primary task is executed.
    * items [OutputFile](#outputfile)
  * resourceFiles `array`: Files listed under this element are located in the task's working directory. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers.
    * items [ResourceFile](#resourcefile)
  * runExclusive `boolean`: If true, no other tasks will run on the same compute node for as long as the Job Manager is running. If false, other tasks can run simultaneously with the Job Manager on a compute node. The Job Manager task counts normally against the node's concurrent task limit, so this is only relevant if the node allows multiple concurrent tasks. The default value is true.
  * userIdentity [UserIdentity](#useridentity)

### JobPatchParameter
* The set of changes to be made to a job. `object`
  * constraints [JobConstraints](#jobconstraints)
  * metadata `array`: If omitted, the existing job metadata is left unchanged.
    * items [MetadataItem](#metadataitem)
  * onAllTasksComplete [OnAllTasksComplete](#onalltaskscomplete)
  * poolInfo [PoolInformation](#poolinformation)
  * priority `integer`: Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the job is left unchanged.

### JobPreparationAndReleaseTaskExecutionInformation
* The status of the Job Preparation and Job Release tasks on a compute node. `object`
  * jobPreparationTaskExecutionInfo [JobPreparationTaskExecutionInformation](#jobpreparationtaskexecutioninformation)
  * jobReleaseTaskExecutionInfo [JobReleaseTaskExecutionInformation](#jobreleasetaskexecutioninformation)
  * nodeId `string`
  * nodeUrl `string`
  * poolId `string`

### JobPreparationTask
* A Job Preparation task to run before any tasks of the job on any given compute node. `object`: You can use Job Preparation to prepare a compute node to run tasks for the job. Activities commonly performed in Job Preparation include: Downloading common resource files used by all the tasks in the job. The Job Preparation task can download these common resource files to the shared location on the compute node. (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service on the compute node so that all tasks of that job can communicate with it. If the Job Preparation task fails (that is, exhausts its retry count before exiting with exit code 0), Batch will not run tasks of this job on the compute node. The node remains ineligible to run tasks of this job until it is reimaged. The node remains active and can be used for other jobs. The Job Preparation task can run multiple times on the same compute node. Therefore, you should write the Job Preparation task to handle re-execution. If the compute node is rebooted, the Job Preparation task is run again on the node before scheduling any other task of the job, if rerunOnNodeRebootAfterSuccess is true or if the Job Preparation task did not previously complete. If the compute node is reimaged, the Job Preparation task is run again before scheduling any task of the job. Batch will retry tasks when a recovery operation is triggered on a compute node. Examples of recovery operations include (but are not limited to) when an unhealthy compute node is rebooted or a compute node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all tasks should be idempotent. This means tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running tasks is to use some form of checkpointing.
  * commandLine **required** `string`: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
  * constraints [TaskConstraints](#taskconstraints)
  * containerSettings [TaskContainerSettings](#taskcontainersettings)
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * id `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobpreparation'. No other task in the job can have the same ID as the Job Preparation task. If you try to submit a task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobPreparationTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict).
  * rerunOnNodeRebootAfterSuccess `boolean`: The Job Preparation task is always rerun if a compute node is reimaged, or if the Job Preparation task did not complete (e.g. because the reboot occurred while the task was running). Therefore, you should always write a Job Preparation task to be idempotent and to behave correctly if run multiple times. The default value is true.
  * resourceFiles `array`: Files listed under this element are located in the task's working directory.  There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers.
    * items [ResourceFile](#resourcefile)
  * userIdentity [UserIdentity](#useridentity)
  * waitForSuccess `boolean`: If true and the Job Preparation task fails on a compute node, the Batch service retries the Job Preparation task up to its maximum retry count (as specified in the constraints element). If the task has still not completed successfully after all retries, then the Batch service will not schedule tasks of the job to the compute node. The compute node remains active and eligible to run tasks of other jobs. If false, the Batch service will not wait for the Job Preparation task to complete. In this case, other tasks of the job can start executing on the compute node while the Job Preparation task is still running; and even if the Job Preparation task fails, new tasks will continue to be scheduled on the node. The default value is true.

### JobPreparationTaskExecutionInformation
* Contains information about the execution of a Job Preparation task on a compute node. `object`
  * containerInfo [TaskContainerExecutionInformation](#taskcontainerexecutioninformation)
  * endTime `string`: This property is set only if the task is in the Completed state.
  * exitCode `integer`: This parameter is returned only if the task is in the completed state. The exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. Note that the exit code may also be generated by the compute node operating system, such as when a process is forcibly terminated.
  * failureInfo [TaskFailureInformation](#taskfailureinformation)
  * lastRetryTime `string`: This property is set only if the task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the task has been restarted for reasons other than retry; for example, if the compute node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not.
  * result [TaskExecutionResult](#taskexecutionresult)
  * retryCount **required** `integer`: Task application failures (non-zero exit code) are retried, pre-processing errors (the task could not be run) and file upload errors are not retried. The Batch service will retry the task up to the limit specified by the constraints.
  * startTime **required** `string`: If the task has been restarted or retried, this is the most recent time at which the task started running.
  * state **required** `string` (values: running, completed)
  * taskRootDirectory `string`
  * taskRootDirectoryUrl `string`

### JobReleaseTask
* A Job Release task to run on job completion on any compute node where the job has run. `object`: The Job Release task runs when the job ends, because of one of the following: The user calls the Terminate Job API, or the Delete Job API while the job is still active, the job's maximum wall clock time constraint is reached, and the job is still active, or the job's Job Manager task completed, and the job is configured to terminate when the Job Manager completes. The Job Release task runs on each compute node where tasks of the job have run and the Job Preparation task ran and completed. If you reimage a compute node after it has run the Job Preparation task, and the job ends without any further tasks of the job running on that compute node (and hence the Job Preparation task does not re-run), then the Job Release task does not run on that node. If a compute node reboots while the Job Release task is still running, the Job Release task runs again when the compute node starts up. The job is not marked as complete until all Job Release tasks have completed. The Job Release task runs in the background. It does not occupy a scheduling slot; that is, it does not count towards the maxTasksPerNode limit specified on the pool.
  * commandLine **required** `string`: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
  * containerSettings [TaskContainerSettings](#taskcontainersettings)
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * id `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobrelease'. No other task in the job can have the same ID as the Job Release task. If you try to submit a task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict).
  * maxWallClockTime `string`
  * resourceFiles `array`: Files listed under this element are located in the task's working directory.
    * items [ResourceFile](#resourcefile)
  * retentionTime `string`: The default is infinite, i.e. the task directory will be retained until the compute node is removed or reimaged.
  * userIdentity [UserIdentity](#useridentity)

### JobReleaseTaskExecutionInformation
* Contains information about the execution of a Job Release task on a compute node. `object`
  * containerInfo [TaskContainerExecutionInformation](#taskcontainerexecutioninformation)
  * endTime `string`: This property is set only if the task is in the Completed state.
  * exitCode `integer`: This parameter is returned only if the task is in the completed state. The exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. Note that the exit code may also be generated by the compute node operating system, such as when a process is forcibly terminated.
  * failureInfo [TaskFailureInformation](#taskfailureinformation)
  * result [TaskExecutionResult](#taskexecutionresult)
  * startTime **required** `string`: If the task has been restarted or retried, this is the most recent time at which the task started running.
  * state **required** `string` (values: running, completed)
  * taskRootDirectory `string`
  * taskRootDirectoryUrl `string`

### JobScheduleAddParameter
* A job schedule that allows recurring jobs by specifying when to run jobs and a specification used to create each job. `object`
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * id **required** `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an account that differ only by case).
  * jobSpecification **required** [JobSpecification](#jobspecification)
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * schedule **required** [Schedule](#schedule)

### JobScheduleExecutionInformation
* Contains information about jobs that have been and will be run under a job schedule. `object`
  * endTime `string`: This property is set only if the job schedule is in the completed state.
  * nextRunTime `string`: This property is meaningful only if the schedule is in the active state when the time comes around. For example, if the schedule is disabled, no job will be created at nextRunTime unless the job is enabled before then.
  * recentJob [RecentJob](#recentjob)

### JobSchedulePatchParameter
* The set of changes to be made to a job schedule. `object`
  * jobSpecification [JobSpecification](#jobspecification)
  * metadata `array`: If you do not specify this element, existing metadata is left unchanged.
    * items [MetadataItem](#metadataitem)
  * schedule [Schedule](#schedule)

### JobScheduleState
* The state of the job schedule. `string` (values: active, completed, disabled, terminating, deleting)

### JobScheduleStatistics
* Resource usage statistics for a job schedule. `object`
  * kernelCPUTime **required** `string`
  * lastUpdateTime **required** `string`
  * numFailedTasks **required** `integer`
  * numSucceededTasks **required** `integer`
  * numTaskRetries **required** `integer`
  * readIOGiB **required** `number`
  * readIOps **required** `integer`
  * startTime **required** `string`
  * url **required** `string`
  * userCPUTime **required** `string`
  * waitTime **required** `string`: This value is only reported in the account lifetime statistics; it is not included in the job statistics.
  * wallClockTime **required** `string`: The wall clock time is the elapsed time from when the task started running on a compute node to when it finished (or to the last time the statistics were updated, if the task had not finished by then). If a task was retried, this includes the wall clock time of all the task retries.
  * writeIOGiB **required** `number`
  * writeIOps **required** `integer`

### JobScheduleUpdateParameter
* The set of changes to be made to a job schedule. `object`
  * jobSpecification **required** [JobSpecification](#jobspecification)
  * metadata `array`: If you do not specify this element, it takes the default value of an empty list; in effect, any existing metadata is deleted.
    * items [MetadataItem](#metadataitem)
  * schedule **required** [Schedule](#schedule)

### JobSchedulingError
* An error encountered by the Batch service when scheduling a job. `object`
  * category **required** [ErrorCategory](#errorcategory)
  * code `string`
  * details `array`
    * items [NameValuePair](#namevaluepair)
  * message `string`

### JobSpecification
* Specifies details of the jobs to be created on a schedule. `object`
  * commonEnvironmentSettings `array`: Individual tasks can override an environment setting specified here by specifying the same setting name with a different value.
    * items [EnvironmentSetting](#environmentsetting)
  * constraints [JobConstraints](#jobconstraints)
  * displayName `string`: The name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * jobManagerTask [JobManagerTask](#jobmanagertask)
  * jobPreparationTask [JobPreparationTask](#jobpreparationtask)
  * jobReleaseTask [JobReleaseTask](#jobreleasetask)
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * onAllTasksComplete [OnAllTasksComplete](#onalltaskscomplete)
  * onTaskFailure [OnTaskFailure](#ontaskfailure)
  * poolInfo **required** [PoolInformation](#poolinformation)
  * priority `integer`: Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all jobs under the job schedule. You can update a job's priority after it has been created using by using the update job API.
  * usesTaskDependencies `boolean`

### JobState
* The state of the job. `string` (values: active, disabling, disabled, enabling, terminating, completed, deleting)

### JobStatistics
* Resource usage statistics for a job. `object`
  * kernelCPUTime **required** `string`
  * lastUpdateTime **required** `string`
  * numFailedTasks **required** `integer`: A task fails if it exhausts its maximum retry count without returning exit code 0.
  * numSucceededTasks **required** `integer`: A task completes successfully if it returns exit code 0.
  * numTaskRetries **required** `integer`
  * readIOGiB **required** `number`
  * readIOps **required** `integer`
  * startTime **required** `string`
  * url **required** `string`
  * userCPUTime **required** `string`
  * waitTime **required** `string`: The wait time for a task is defined as the elapsed time between the creation of the task and the start of task execution. (If the task is retried due to failures, the wait time is the time to the most recent task execution.) This value is only reported in the account lifetime statistics; it is not included in the job statistics.
  * wallClockTime **required** `string`:  The wall clock time is the elapsed time from when the task started running on a compute node to when it finished (or to the last time the statistics were updated, if the task had not finished by then). If a task was retried, this includes the wall clock time of all the task retries.
  * writeIOGiB **required** `number`
  * writeIOps **required** `integer`

### JobTerminateParameter
* Options when terminating a job. `object`
  * terminateReason `string`

### JobUpdateParameter
* The set of changes to be made to a job. `object`
  * constraints [JobConstraints](#jobconstraints)
  * metadata `array`: If omitted, it takes the default value of an empty list; in effect, any existing metadata is deleted.
    * items [MetadataItem](#metadataitem)
  * onAllTasksComplete [OnAllTasksComplete](#onalltaskscomplete)
  * poolInfo **required** [PoolInformation](#poolinformation)
  * priority `integer`: Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, it is set to the default value 0.

### LinuxUserConfiguration
* Properties used to create a user account on a Linux node. `object`
  * gid `integer`: The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid.
  * sshPrivateKey `string`: The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between nodes in a Linux pool when the pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between nodes (no modification of the user's .ssh directory is done).
  * uid `integer`: The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid.

### MetadataItem
* A name-value pair associated with a Batch service resource. `object`: The Batch service does not assign any meaning to this metadata; it is solely for the use of user code.
  * name **required** `string`
  * value **required** `string`

### MultiInstanceSettings
* Settings which specify how to run a multi-instance task. `object`: Multi-instance tasks are commonly used to support MPI tasks.
  * commonResourceFiles `array`: The difference between common resource files and task resource files is that common resource files are downloaded for all subtasks including the primary, whereas task resource files are downloaded only for the primary. Also note that these resource files are not downloaded to the task working directory, but instead are downloaded to the task root directory (one directory above the working directory).  There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers.
    * items [ResourceFile](#resourcefile)
  * coordinationCommandLine **required** `string`: A typical coordination command line launches a background service and verifies that the service is ready to process inter-node messages.
  * numberOfInstances `integer`: If omitted, the default is 1.

### NameValuePair
* Represents a name-value pair. `object`
  * name `string`
  * value `string`

### NetworkConfiguration
* NetworkConfiguration `object`: The network configuration for a pool.
  * endpointConfiguration [PoolEndpointConfiguration](#poolendpointconfiguration)
  * subnetId `string`: The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn't have enough free IP addresses, the pool will partially allocate compute nodes, and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. For pools created with virtualMachineConfiguration only ARM virtual networks ('Microsoft.Network/virtualNetworks') are supported, but for pools created with cloudServiceConfiguration both ARM and classic virtual networks are supported. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration

### NetworkSecurityGroupRule
* A network security group rule to apply to an inbound endpoint. `object`
  * access **required** `string` (values: allow, deny)
  * priority **required** `integer`: Priorities within a pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 3500. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
  * sourceAddressPrefix **required** `string`: Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400.

### NodeAgentInformation
* Information about the node agent. `object`: The Batch node agent is a program that runs on each node in the pool and provides Batch capability on the compute node.
  * lastUpdateTime **required** `string`: This is the most recent time that the node agent was updated to a new version.
  * version **required** `string`: This version number can be checked against the node agent release notes located at https://github.com/Azure/Batch/blob/master/changelogs/nodeagent/CHANGELOG.md.

### NodeAgentSku
* A node agent SKU supported by the Batch service. `object`: The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems.
  * id `string`
  * osType `string` (values: linux, windows)
  * verifiedImageReferences `array`: This collection is not exhaustive (the node agent may be compatible with other images).
    * items [ImageReference](#imagereference)

### NodeCounts
* The number of nodes in each node state. `object`
  * creating **required** `integer`
  * idle **required** `integer`
  * leavingPool **required** `integer`
  * offline **required** `integer`
  * preempted **required** `integer`
  * rebooting **required** `integer`
  * reimaging **required** `integer`
  * running **required** `integer`
  * startTaskFailed **required** `integer`
  * starting **required** `integer`
  * total **required** `integer`
  * unknown **required** `integer`
  * unusable **required** `integer`
  * waitingForStartTask **required** `integer`

### NodeDisableSchedulingParameter
* Options for disabling scheduling on a compute node. `object`
  * nodeDisableSchedulingOption `string` (values: requeue, terminate, taskcompletion): The default value is requeue.

### NodeFile
* Information about a file or directory on a compute node. `object`
  * isDirectory `boolean`
  * name `string`
  * properties [FileProperties](#fileproperties)
  * url `string`

### NodeFileListResult
* The result of listing the files on a compute node, or the files associated with a task on a node. `object`
  * odata.nextLink `string`
  * value `array`
    * items [NodeFile](#nodefile)

### NodeRebootParameter
* Options for rebooting a compute node. `object`
  * nodeRebootOption `string` (values: requeue, terminate, taskcompletion, retaineddata): The default value is requeue.

### NodeReimageParameter
* Options for reimaging a compute node. `object`
  * nodeReimageOption `string` (values: requeue, terminate, taskcompletion, retaineddata): The default value is requeue.

### NodeRemoveParameter
* Options for removing compute nodes from a pool. `object`
  * nodeDeallocationOption [ComputeNodeDeallocationOption](#computenodedeallocationoption)
  * nodeList **required** `array`
    * items `string`
  * resizeTimeout `string`: The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).

### NodeUpdateUserParameter
* The set of changes to be made to a user account on a node. `object`
  * expiryTime `string`: If omitted, the default is 1 day from the current time. For Linux compute nodes, the expiryTime has a precision up to a day.
  * password `string`: The password is required for Windows nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows image reference). For Linux compute nodes, the password can optionally be specified along with the sshPublicKey property. If omitted, any existing password is removed.
  * sshPublicKey `string`: The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux nodes. If this is specified for a Windows node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If omitted, any existing SSH public key is removed.

### OSDisk
* Settings for the operating system disk of the virtual machine. `object`
  * caching [CachingType](#cachingtype)

### OnAllTasksComplete
* The action the Batch service should take when all tasks in the job are in the completed state. `string` (values: noaction, terminatejob)

### OnTaskFailure
* The action the Batch service should take when any task in the job fails. `string` (values: noaction, performexitoptionsjobaction): A task is considered to have failed if has a failureInfo. A failureInfo is set if the task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the task, for example due to a resource file download error. The default is noaction.

### OutputFile
* A specification for uploading files from an Azure Batch node to another location after the Batch service has finished executing the task process. `object`
  * destination **required** [OutputFileDestination](#outputfiledestination)
  * filePattern **required** `string`: Both relative and absolute paths are supported. Relative paths are relative to the task working directory. The following wildcards are supported: * matches 0 or more characters (for example pattern abc* would match abc or abcdef), ** matches any directory, ? matches any single character, [abc] matches one character in the brackets, and [a-c] matches one character in the range. Brackets can include a negation to match any character not specified (for example [!abc] matches any character but a, b, or c). If a file name starts with "." it is ignored by default but may be matched by specifying it explicitly (for example *.gif will not match .a.gif, but .*.gif will). A simple example: **\*.txt matches any file that does not start in '.' and ends with .txt in the task working directory or any subdirectory. If the filename contains a wildcard character it can be escaped using brackets (for example abc[*] would match a file named abc*). Note that both \ and / are treated as directory separators on Windows, but only / is on Linux. Environment variables (%var% on Windows or $var on Linux) are expanded prior to the pattern being applied.
  * uploadOptions **required** [OutputFileUploadOptions](#outputfileuploadoptions)

### OutputFileBlobContainerDestination
* Specifies a file upload destination within an Azure blob storage container. `object`
  * containerUrl **required** `string`: The URL must include a Shared Access Signature (SAS) granting write permissions to the container.
  * path `string`: If filePattern refers to a specific file (i.e. contains no wildcards), then path is the name of the blob to which to upload that file. If filePattern contains one or more wildcards (and therefore may match multiple files), then path is the name of the blob virtual directory (which is prepended to each blob name) to which to upload the file(s). If omitted, file(s) are uploaded to the root of the container with a blob name matching their file name.

### OutputFileDestination
* The destination to which a file should be uploaded. `object`
  * container [OutputFileBlobContainerDestination](#outputfileblobcontainerdestination)

### OutputFileUploadCondition
* The conditions under which a task output file or set of files should be uploaded. `string` (values: tasksuccess, taskfailure, taskcompletion)

### OutputFileUploadOptions
* Details about an output file upload operation, including under what conditions to perform the upload. `object`
  * uploadCondition **required** [OutputFileUploadCondition](#outputfileuploadcondition)

### PoolAddParameter
* A pool in the Azure Batch service to add. `object`
  * applicationLicenses `array`: The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail.
    * items `string`
  * applicationPackageReferences `array`
    * items [ApplicationPackageReference](#applicationpackagereference)
  * autoScaleEvaluationInterval `string`: The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * autoScaleFormula `string`: This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see 'Automatically scale compute nodes in an Azure Batch pool' (https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/).
  * certificateReferences `array`: For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * cloudServiceConfiguration [CloudServiceConfiguration](#cloudserviceconfiguration)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * enableAutoScale `boolean`: If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula property is required and the pool automatically resizes according to the formula. The default value is false.
  * enableInterNodeCommunication `boolean`: Enabling inter-node communication limits the maximum size of the pool due to deployment restrictions on the nodes of the pool. This may result in the pool not reaching its desired size. The default value is false.
  * id **required** `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two pool IDs within an account that differ only by case).
  * maxTasksPerNode `integer`: The default value is 1. The maximum value of this setting depends on the size of the compute nodes in the pool (the vmSize setting).
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * resizeTimeout `string`: This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * startTask [StartTask](#starttask)
  * targetDedicatedNodes `integer`: This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
  * targetLowPriorityNodes `integer`: This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
  * taskSchedulingPolicy [TaskSchedulingPolicy](#taskschedulingpolicy)
  * userAccounts `array`
    * items [UserAccount](#useraccount)
  * virtualMachineConfiguration [VirtualMachineConfiguration](#virtualmachineconfiguration)
  * vmSize **required** `string`: For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

### PoolEnableAutoScaleParameter
* Options for enabling automatic scaling on a pool. `object`
  * autoScaleEvaluationInterval `string`: The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If you specify a new interval, then the existing autoscale evaluation schedule will be stopped and a new autoscale evaluation schedule will be started, with its starting time being the time when this request was issued.
  * autoScaleFormula `string`: The formula is checked for validity before it is applied to the pool. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see Automatically scale compute nodes in an Azure Batch pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).

### PoolEndpointConfiguration
* The endpoint configuration for a pool. `object`
  * inboundNATPools **required** `array`: The maximum number of inbound NAT pools per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded the request fails with HTTP status code 400.
    * items [InboundNATPool](#inboundnatpool)

### PoolEvaluateAutoScaleParameter
* Options for evaluating an automatic scaling formula on a pool. `object`
  * autoScaleFormula **required** `string`: The formula is validated and its results calculated, but it is not applied to the pool. To apply the formula to the pool, 'Enable automatic scaling on a pool'. For more information about specifying this formula, see Automatically scale compute nodes in an Azure Batch pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).

### PoolInformation
* Specifies how a job should be assigned to a pool. `object`
  * autoPoolSpecification [AutoPoolSpecification](#autopoolspecification)
  * poolId `string`: You must ensure that the pool referenced by this property exists. If the pool does not exist at the time the Batch service tries to schedule a job, no tasks for the job will run until you create a pool with that id. Note that the Batch service will not reject the job request; it will simply not run tasks until the pool exists. You must specify either the pool ID or the auto pool specification, but not both.

### PoolListUsageMetricsResult
* The result of a listing the usage metrics for an account. `object`
  * odata.nextLink `string`
  * value `array`
    * items [PoolUsageMetrics](#poolusagemetrics)

### PoolNodeCounts
* The number of nodes in each state for a pool. `object`
  * dedicated [NodeCounts](#nodecounts)
  * lowPriority [NodeCounts](#nodecounts)
  * poolId **required** `string`

### PoolNodeCountsListResult
* The result of listing the node counts in the account. `object`
  * odata.nextLink `string`
  * value `array`: A list of node counts by pool.
    * items [PoolNodeCounts](#poolnodecounts)

### PoolPatchParameter
* The set of changes to be made to a pool. `object`
  * applicationPackageReferences `array`: Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. If this element is present, it replaces any existing application package references. If you specify an empty collection, then all application package references are removed from the pool. If omitted, any existing application package references are left unchanged.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * certificateReferences `array`: If this element is present, it replaces any existing certificate references configured on the pool. If omitted, any existing certificate references are left unchanged. For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * metadata `array`: If this element is present, it replaces any existing metadata configured on the pool. If you specify an empty collection, any metadata is removed from the pool. If omitted, any existing metadata is left unchanged.
    * items [MetadataItem](#metadataitem)
  * startTask [StartTask](#starttask)

### PoolResizeParameter
* Options for changing the size of a pool. `object`
  * nodeDeallocationOption [ComputeNodeDeallocationOption](#computenodedeallocationoption)
  * resizeTimeout `string`: The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * targetDedicatedNodes `integer`
  * targetLowPriorityNodes `integer`

### PoolSpecification
* Specification for creating a new pool. `object`
  * applicationLicenses `array`: The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail. The permitted licenses available on the pool are 'maya', 'vray', '3dsmax', 'arnold'. An additional charge applies for each application license added to the pool.
    * items `string`
  * applicationPackageReferences `array`
    * items [ApplicationPackageReference](#applicationpackagereference)
  * autoScaleEvaluationInterval `string`: The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * autoScaleFormula `string`: This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information.
  * certificateReferences `array`: For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * cloudServiceConfiguration [CloudServiceConfiguration](#cloudserviceconfiguration)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * enableAutoScale `boolean`: If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula element is required. The pool automatically resizes according to the formula. The default value is false.
  * enableInterNodeCommunication `boolean`: Enabling inter-node communication limits the maximum size of the pool due to deployment restrictions on the nodes of the pool. This may result in the pool not reaching its desired size. The default value is false.
  * maxTasksPerNode `integer`: The default value is 1. The maximum value of this setting depends on the size of the compute nodes in the pool (the vmSize setting).
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * resizeTimeout `string`: This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * startTask [StartTask](#starttask)
  * targetDedicatedNodes `integer`: This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
  * targetLowPriorityNodes `integer`: This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
  * taskSchedulingPolicy [TaskSchedulingPolicy](#taskschedulingpolicy)
  * userAccounts `array`
    * items [UserAccount](#useraccount)
  * virtualMachineConfiguration [VirtualMachineConfiguration](#virtualmachineconfiguration)
  * vmSize **required** `string`: For information about available sizes of virtual machines in pools, see Choose a VM size for compute nodes in an Azure Batch pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).

### PoolStatistics
* Contains utilization and resource usage statistics for the lifetime of a pool. `object`
  * lastUpdateTime **required** `string`
  * resourceStats [ResourceStatistics](#resourcestatistics)
  * startTime **required** `string`
  * url **required** `string`
  * usageStats [UsageStatistics](#usagestatistics)

### PoolUpdatePropertiesParameter
* The set of changes to be made to a pool. `object`
  * applicationPackageReferences **required** `array`: The list replaces any existing application package references on the pool. Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. If omitted, or if you specify an empty collection, any existing application packages references are removed from the pool.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * certificateReferences **required** `array`: This list replaces any existing certificate references configured on the pool. If you specify an empty collection, any existing certificate references are removed from the pool. For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * metadata **required** `array`: This list replaces any existing metadata configured on the pool. If omitted, or if you specify an empty collection, any existing metadata is removed from the pool.
    * items [MetadataItem](#metadataitem)
  * startTask [StartTask](#starttask)

### PoolUpgradeOSParameter
* Options for upgrading the operating system of compute nodes in a pool. `object`
  * targetOSVersion **required** `string`

### PoolUsageMetrics
* Usage metrics for a pool across an aggregation interval. `object`
  * dataEgressGiB **required** `number`
  * dataIngressGiB **required** `number`
  * endTime **required** `string`
  * poolId **required** `string`
  * startTime **required** `string`
  * totalCoreHours **required** `number`
  * vmSize **required** `string`: For information about available sizes of virtual machines in pools, see Choose a VM size for compute nodes in an Azure Batch pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).

### RecentJob
* Information about the most recent job to run under the job schedule. `object`
  * id `string`
  * url `string`

### ResizeError
* An error that occurred when resizing a pool. `object`
  * code `string`
  * message `string`
  * values `array`
    * items [NameValuePair](#namevaluepair)

### ResourceFile
* A file to be downloaded from Azure blob storage to a compute node. `object`
  * blobSource **required** `string`: This URL must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access.
  * fileMode `string`: This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file.
  * filePath **required** `string`

### ResourceStatistics
* Statistics related to resource consumption by compute nodes in a pool. `object`
  * avgCPUPercentage **required** `number`
  * avgDiskGiB **required** `number`
  * avgMemoryGiB **required** `number`
  * diskReadGiB **required** `number`
  * diskReadIOps **required** `integer`
  * diskWriteGiB **required** `number`
  * diskWriteIOps **required** `integer`
  * lastUpdateTime **required** `string`
  * networkReadGiB **required** `number`
  * networkWriteGiB **required** `number`
  * peakDiskGiB **required** `number`
  * peakMemoryGiB **required** `number`
  * startTime **required** `string`

### Schedule
* The schedule according to which jobs will be created `object`
  * doNotRunAfter `string`: If you do not specify a doNotRunAfter time, and you are creating a recurring job schedule, the job schedule will remain active until you explicitly terminate it.
  * doNotRunUntil `string`: If you do not specify a doNotRunUntil time, the schedule becomes ready to create jobs immediately.
  * recurrenceInterval `string`: Because a job schedule can have at most one active job under it at any given time, if it is time to create a new job under a job schedule, but the previous job is still running, the Batch service will not create the new job until the previous job finishes. If the previous job does not finish within the startWindow period of the new recurrenceInterval, then no new job will be scheduled for that interval. For recurring jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when jobs are created, add tasks to the jobs and terminate the jobs ready for the next recurrence. The default is that the schedule does not recur: one job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * startWindow `string`: If a job is not created within the startWindow interval, then the 'opportunity' is lost; no job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).

### StartTask
* A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged. `object`: Batch will retry tasks when a recovery operation is triggered on a compute node. Examples of recovery operations include (but are not limited to) when an unhealthy compute node is rebooted or a compute node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all tasks should be idempotent. This means tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running tasks is to use some form of checkpointing.
  * commandLine **required** `string`: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
  * containerSettings [TaskContainerSettings](#taskcontainersettings)
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * maxTaskRetryCount `integer`: The Batch service retries a task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit.
  * resourceFiles `array`: Files listed under this element are located in the task's working directory.
    * items [ResourceFile](#resourcefile)
  * userIdentity [UserIdentity](#useridentity)
  * waitForSuccess `boolean`: If true and the start task fails on a compute node, the Batch service retries the start task up to its maximum retry count (maxTaskRetryCount). If the task has still not completed successfully after all retries, then the Batch service marks the compute node unusable, and will not schedule tasks to it. This condition can be detected via the node state and failure info details. If false, the Batch service will not wait for the start task to complete. In this case, other tasks can start executing on the compute node while the start task is still running; and even if the start task fails, new tasks will continue to be scheduled on the node. The default is false.

### StartTaskInformation
* Information about a start task running on a compute node. `object`
  * containerInfo [TaskContainerExecutionInformation](#taskcontainerexecutioninformation)
  * endTime `string`: This is the end time of the most recent run of the start task, if that run has completed (even if that run failed and a retry is pending). This element is not present if the start task is currently running.
  * exitCode `integer`: This property is set only if the start task is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the start task (due to timeout, or user termination via the API) you may see an operating system-defined exit code.
  * failureInfo [TaskFailureInformation](#taskfailureinformation)
  * lastRetryTime `string`: This element is present only if the task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the task has been restarted for reasons other than retry; for example, if the compute node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not.
  * result [TaskExecutionResult](#taskexecutionresult)
  * retryCount **required** `integer`: Task application failures (non-zero exit code) are retried, pre-processing errors (the task could not be run) and file upload errors are not retried. The Batch service will retry the task up to the limit specified by the constraints.
  * startTime **required** `string`: This value is reset every time the task is restarted or retried (that is, this is the most recent time at which the start task started running).
  * state **required** `string` (values: running, completed)

### StorageAccountType
* The storage account type for use in creating data disks. `string` (values: standard_lrs, premium_lrs)

### SubtaskInformation
* Information about an Azure Batch subtask. `object`
  * containerInfo [TaskContainerExecutionInformation](#taskcontainerexecutioninformation)
  * endTime `string`: This property is set only if the subtask is in the Completed state.
  * exitCode `integer`: This property is set only if the subtask is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the subtask (due to timeout, or user termination via the API) you may see an operating system-defined exit code.
  * failureInfo [TaskFailureInformation](#taskfailureinformation)
  * id `integer`
  * nodeInfo [ComputeNodeInformation](#computenodeinformation)
  * previousState [SubtaskState](#subtaskstate)
  * previousStateTransitionTime `string`: This property is not set if the subtask is in its initial running state.
  * result [TaskExecutionResult](#taskexecutionresult)
  * startTime `string`
  * state [SubtaskState](#subtaskstate)
  * stateTransitionTime `string`

### SubtaskState
* The state of the subtask. `string` (values: preparing, running, completed)

### TaskAddCollectionParameter
* A collection of Azure Batch tasks to add. `object`
  * value **required** `array`: The total serialized size of this collection must be less than 1MB. If it is greater than 1MB (for example if each task has 100's of resource files or environment variables), the request will fail with code 'RequestBodyTooLarge' and should be retried again with fewer tasks.
    * items [TaskAddParameter](#taskaddparameter)

### TaskAddCollectionResult
* The result of adding a collection of tasks to a job. `object`
  * value `array`
    * items [TaskAddResult](#taskaddresult)

### TaskAddParameter
* An Azure Batch task to add. `object`: Batch will retry tasks when a recovery operation is triggered on a compute node. Examples of recovery operations include (but are not limited to) when an unhealthy compute node is rebooted or a compute node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all tasks should be idempotent. This means tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running tasks is to use some form of checkpointing.
  * affinityInfo [AffinityInformation](#affinityinformation)
  * applicationPackageReferences `array`: Application packages are downloaded and deployed to a shared directory, not the task working directory. Therefore, if a referenced package is already on the compute node, and is up to date, then it is not re-downloaded; the existing copy on the compute node is used. If a referenced application package cannot be installed, for example because the package has been deleted or because download failed, the task fails.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * authenticationTokenSettings [AuthenticationTokenSettings](#authenticationtokensettings)
  * commandLine **required** `string`: For multi-instance tasks, the command line is executed as the primary task, after the primary task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
  * constraints [TaskConstraints](#taskconstraints)
  * containerSettings [TaskContainerSettings](#taskcontainersettings)
  * dependsOn [TaskDependencies](#taskdependencies)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * exitConditions [ExitConditions](#exitconditions)
  * id **required** `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within a job that differ only by case).
  * multiInstanceSettings [MultiInstanceSettings](#multiinstancesettings)
  * outputFiles `array`: For multi-instance tasks, the files will only be uploaded from the compute node on which the primary task is executed.
    * items [OutputFile](#outputfile)
  * resourceFiles `array`: For multi-instance tasks, the resource files will only be downloaded to the compute node on which the primary task is executed. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers.
    * items [ResourceFile](#resourcefile)
  * userIdentity [UserIdentity](#useridentity)

### TaskAddResult
* Result for a single task added as part of an add task collection operation. `object`
  * eTag `string`: You can use this to detect whether the task has changed between requests. In particular, you can be pass the ETag with an Update Task request to specify that your changes should take effect only if nobody else has modified the job in the meantime.
  * error [BatchError](#batcherror)
  * lastModified `string`
  * location `string`
  * status **required** `string` (values: success, clienterror, servererror)
  * taskId **required** `string`

### TaskConstraints
* Execution constraints to apply to a task. `object`
  * maxTaskRetryCount `integer`: Note that this value specifically controls the number of retries for the task executable due to a nonzero exit code. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task after the first attempt. If the maximum retry count is -1, the Batch service retries the task without limit. Resource files and application packages are only downloaded again if the task is retried on a new compute node.
  * maxWallClockTime `string`: If this is not specified, there is no time limit on how long the task may run.
  * retentionTime `string`: The default is infinite, i.e. the task directory will be retained until the compute node is removed or reimaged.

### TaskContainerExecutionInformation
* Contains information about the container which a task is executing. `object`
  * containerId `string`
  * error `string`: This is the detailed error string from the Docker service, if available. It is equivalent to the error field returned by "docker inspect".
  * state `string`: This is the state of the container according to the Docker service. It is equivalent to the status field returned by "docker inspect".

### TaskContainerSettings
* The container settings for a task. `object`
  * containerRunOptions `string`: These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service.
  * imageName **required** `string`: This is the full image reference, as would be specified to "docker pull". If no tag is provided as part of the image name, the tag ":latest" is used as a default.
  * registry [ContainerRegistry](#containerregistry)

### TaskCounts
* The task counts for a job. `object`
  * active **required** `integer`
  * completed **required** `integer`
  * failed **required** `integer`
  * running **required** `integer`
  * succeeded **required** `integer`

### TaskDependencies
* Specifies any dependencies of a task. Any task that is explicitly specified or within a dependency range must complete before the dependant task will be scheduled. `object`
  * taskIdRanges `array`
    * items [TaskIdRange](#taskidrange)
  * taskIds `array`: The taskIds collection is limited to 64000 characters total (i.e. the combined length of all task IDs). If the taskIds collection exceeds the maximum length, the Add Task request fails with error code TaskDependencyListTooLong. In this case consider using task ID ranges instead.
    * items `string`

### TaskExecutionInformation
* Information about the execution of a task. `object`
  * containerInfo [TaskContainerExecutionInformation](#taskcontainerexecutioninformation)
  * endTime `string`: This property is set only if the task is in the Completed state.
  * exitCode `integer`: This property is set only if the task is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the task (due to timeout, or user termination via the API) you may see an operating system-defined exit code.
  * failureInfo [TaskFailureInformation](#taskfailureinformation)
  * lastRequeueTime `string`: This property is set only if the requeueCount is nonzero.
  * lastRetryTime `string`: This element is present only if the task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the task has been restarted for reasons other than retry; for example, if the compute node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not.
  * requeueCount **required** `integer`: When the user removes nodes from a pool (by resizing/shrinking the pool) or when the job is being disabled, the user can specify that running tasks on the nodes be requeued for execution. This count tracks how many times the task has been requeued for these reasons.
  * result [TaskExecutionResult](#taskexecutionresult)
  * retryCount **required** `integer`: Task application failures (non-zero exit code) are retried, pre-processing errors (the task could not be run) and file upload errors are not retried. The Batch service will retry the task up to the limit specified by the constraints.
  * startTime `string`: 'Running' corresponds to the running state, so if the task specifies resource files or application packages, then the start time reflects the time at which the task started downloading or deploying these. If the task has been restarted or retried, this is the most recent time at which the task started running. This property is present only for tasks that are in the running or completed state.

### TaskExecutionResult
* The result of task execution. `string` (values: success, failure)

### TaskFailureInformation
* Information about a task failure. `object`
  * category **required** [ErrorCategory](#errorcategory)
  * code `string`
  * details `array`
    * items [NameValuePair](#namevaluepair)
  * message `string`

### TaskIdRange
* A range of task IDs that a task can depend on. All tasks with IDs in the range must complete successfully before the dependent task can be scheduled. `object`: The start and end of the range are inclusive. For example, if a range has start 9 and end 12, then it represents tasks '9', '10', '11' and '12'.
  * end **required** `integer`
  * start **required** `integer`

### TaskInformation
* Information about a task running on a compute node. `object`
  * executionInfo [TaskExecutionInformation](#taskexecutioninformation)
  * jobId `string`
  * subtaskId `integer`
  * taskId `string`
  * taskState **required** [TaskState](#taskstate)
  * taskUrl `string`

### TaskSchedulingPolicy
* Specifies how tasks should be distributed across compute nodes. `object`
  * nodeFillType **required** `string` (values: spread, pack)

### TaskState
* The state of the task. `string` (values: active, preparing, running, completed)

### TaskStatistics
* Resource usage statistics for a task. `object`
  * kernelCPUTime **required** `string`
  * lastUpdateTime **required** `string`
  * readIOGiB **required** `number`
  * readIOps **required** `integer`
  * startTime **required** `string`
  * url **required** `string`
  * userCPUTime **required** `string`
  * waitTime **required** `string`
  * wallClockTime **required** `string`: The wall clock time is the elapsed time from when the task started running on a compute node to when it finished (or to the last time the statistics were updated, if the task had not finished by then). If the task was retried, this includes the wall clock time of all the task retries.
  * writeIOGiB **required** `number`
  * writeIOps **required** `integer`

### TaskUpdateParameter
* The set of changes to be made to a task. `object`
  * constraints [TaskConstraints](#taskconstraints)

### UploadBatchServiceLogsConfiguration
* The Azure Batch service log files upload configuration for a compute node. `object`
  * containerUrl **required** `string`: The URL must include a Shared Access Signature (SAS) granting write permissions to the container. The SAS duration must allow enough time for the upload to finish. The start time for SAS is optional and recommended to not be specified.
  * endTime `string`: Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested. If omitted, the default is to upload all logs available after the startTime.
  * startTime **required** `string`: Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested.

### UploadBatchServiceLogsResult
* The result of uploading Batch service log files from a specific compute node. `object`
  * numberOfFilesUploaded **required** `integer`
  * virtualDirectoryName **required** `string`: The virtual directory name is part of the blob name for each log file uploaded, and it is built based poolId, nodeId and a unique identifier.

### UsageStatistics
* Statistics related to pool usage information. `object`
  * dedicatedCoreTime **required** `string`
  * lastUpdateTime **required** `string`
  * startTime **required** `string`

### UserAccount
* Properties used to create a user used to execute tasks on an Azure Batch node. `object`
  * elevationLevel [ElevationLevel](#elevationlevel)
  * linuxUserConfiguration [LinuxUserConfiguration](#linuxuserconfiguration)
  * name **required** `string`
  * password **required** `string`

### UserIdentity
* The definition of the user identity under which the task is run. `object`: Specify either the userName or autoUser property, but not both. On CloudServiceConfiguration pools, this user is logged in with the INTERACTIVE flag. On Windows VirtualMachineConfiguration pools, this user is logged in with the BATCH flag.
  * autoUser [AutoUserSpecification](#autouserspecification)
  * username `string`: The userName and autoUser properties are mutually exclusive; you must specify one but not both.

### VirtualMachineConfiguration
* The configuration for compute nodes in a pool based on the Azure Virtual Machines infrastructure. `object`
  * containerConfiguration [ContainerConfiguration](#containerconfiguration)
  * dataDisks `array`: This property must be specified if the compute nodes in the pool need to have empty data disks attached to them. This cannot be updated. Each node gets its own disk (the disk is not a file share). Existing disks cannot be attached, each attached disk is empty. When the node is removed from the pool, the disk and all data associated with it is also deleted. The disk is not formatted after being attached, it must be formatted before use - for more information see https://docs.microsoft.com/en-us/azure/virtual-machines/linux/classic/attach-disk#initialize-a-new-data-disk-in-linux and https://docs.microsoft.com/en-us/azure/virtual-machines/windows/attach-disk-ps#add-an-empty-data-disk-to-a-virtual-machine.
    * items [DataDisk](#datadisk)
  * imageReference **required** [ImageReference](#imagereference)
  * licenseType `string`: This only applies to images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:
  * nodeAgentSKUId **required** `string`: The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the 'List supported node agent SKUs' operation.
  * osDisk [OSDisk](#osdisk)
  * windowsConfiguration [WindowsConfiguration](#windowsconfiguration)

### WindowsConfiguration
* Windows operating system settings to apply to the virtual machine. `object`
  * enableAutomaticUpdates `boolean`: If omitted, the default value is true.


