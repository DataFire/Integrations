# @datafire/windows_batch

Client library for BatchService

## Installation and Usage
```bash
npm install --save @datafire/windows_batch
```
```js
let windows_batch = require('@datafire/windows_batch').create();

windows_batch.Application_List({}).then(data => {
  console.log(data);
})
```

## Description

A client for issuing REST requests to the Azure Batch service.

## Actions

### Application_List
This operation returns only applications and versions that are available for use on compute nodes; that is, that can be used in an application package reference. For administrator information about applications and versions that are not yet available to compute nodes, use the Azure portal or the Azure Resource Manager API.


```js
windows_batch.Application_List({
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
Gets information about the specified application.


```js
windows_batch.Application_Get({
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
windows_batch.Certificate_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause.
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
windows_batch.Certificate_Add({
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
windows_batch.Certificate_Delete({
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
windows_batch.Certificate_Get({
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
windows_batch.Certificate_CancelDeletion({
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
windows_batch.Job_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause.
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
windows_batch.Job_Add({
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
Deleting a job also deletes all tasks that are part of that job, and all job statistics. This also overrides the retention period for task data; that is, if the job contains tasks which are still retained on compute nodes, the Batch services deletes those tasks' working directories and all their contents.


```js
windows_batch.Job_Delete({
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
windows_batch.Job_Get({
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
windows_batch.Job_Patch({
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
This fully replaces all the updateable properties of the job. For example, if the job has constraints associated with it and if constraints is not specified with this request, then the Batch service will remove the existing constraints.


```js
windows_batch.Job_Update({
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
Note that each task must have a unique ID. The Batch service may not return the results for each task in the same order the tasks were submitted in this request. If the server times out or the connection is closed during the request, the request may have been partially or fully processed, or not at all. In such cases, the user should re-issue the request. Note that it is up to the user to correctly handle failures when re-issuing a request. For example, you should use the same task ids during a retry so that if the prior operation succeeded, the retry will not create extra tasks unexpectedly.


```js
windows_batch.Task_AddCollection({
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
windows_batch.Job_Disable({
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
windows_batch.Job_Enable({
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
This API returns the Job Preparation and Job Release task status on all compute nodes that have run the Job Preparation or Job Release task. This includes nodes which have since been removed from the pool. 


```js
windows_batch.Job_ListPreparationAndReleaseTaskStatus({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job.
  * $filter `string`: An OData $filter clause.
  * $select `string`: An OData $select clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 tasks can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudJobListPreparationAndReleaseTaskStatusResult](#cloudjoblistpreparationandreleasetaskstatusresult)

### Task_List
For multi-instance tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary task. Use the list subtasks API to retrieve information about subtasks.


```js
windows_batch.Task_List({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job.
  * $filter `string`: An OData $filter clause.
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
Adds a task to the specified job.


```js
windows_batch.Task_Add({
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
windows_batch.Task_Delete({
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
windows_batch.Task_Get({
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
windows_batch.Task_Update({
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
windows_batch.File_ListFromTask({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the job that contains the task.
  * taskId **required** `string`: The ID of the task whose files you want to list.
  * $filter `string`: An OData $filter clause.
  * recursive `boolean`: Whether to list children of a directory. This parameter can be used in combination with the filter parameter to list specific type of files.
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
windows_batch.File_DeleteFromTask({
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
  * filePath **required** `string`: The path to the task file that you want to delete.
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
windows_batch.File_GetFromTask({
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
* output `file`

### File_GetPropertiesFromTask
Gets the properties of the specified task file.


```js
windows_batch.File_GetPropertiesFromTask({
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
Reactivation makes a task eligible to be retried again up to its maximum retry count. The task's state is changed to active. As the task is no longer in the completed state, any previous exit code or scheduling error is no longer available after reactivation. This will fail for tasks that are not completed or that previously completed successfully (with an exit code of 0). Additionally, this will fail if the job has completed (or is terminating or deleting).


```js
windows_batch.Task_Reactivate({
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
windows_batch.Task_ListSubtasks({
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
windows_batch.Task_Terminate({
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
When a Terminate Job request is received, the Batch service sets the job to the terminating state. The Batch service then terminates any active or running tasks associated with the job, and runs any required Job Release tasks. The job then moves into the completed state.


```js
windows_batch.Job_Terminate({
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
windows_batch.JobSchedule_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause.
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
windows_batch.JobSchedule_Add({
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
windows_batch.JobSchedule_Delete({
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
windows_batch.JobSchedule_Get({
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
windows_batch.JobSchedule_Exists({
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
windows_batch.JobSchedule_Patch({
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
This fully replaces all the updateable properties of the job schedule. For example, if the schedule property is not specified with this request, then the Batch service will remove the existing schedule. Changes to a job schedule only impact jobs created by the schedule after the update has taken place; currently running jobs are unaffected.


```js
windows_batch.JobSchedule_Update({
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
windows_batch.JobSchedule_Disable({
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
windows_batch.JobSchedule_Enable({
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
windows_batch.Job_ListFromJobSchedule({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the job schedule from which you want to get a list of jobs.
  * $filter `string`: An OData $filter clause.
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
windows_batch.JobSchedule_Terminate({
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
Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.


```js
windows_batch.Job_GetAllLifetimeStatistics({
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
Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.


```js
windows_batch.Pool_GetAllLifetimeStatistics({
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
windows_batch.Account_ListNodeAgentSkus({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 results will be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [AccountListNodeAgentSkusResult](#accountlistnodeagentskusresult)

### Pool_List
Lists all of the pools in the specified account.


```js
windows_batch.Pool_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause.
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
windows_batch.Pool_Add({
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
windows_batch.Pool_Delete({
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
windows_batch.Pool_Get({
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
windows_batch.Pool_Exists({
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
windows_batch.Pool_Patch({
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
windows_batch.Pool_DisableAutoScale({
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
windows_batch.Pool_EnableAutoScale({
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
This API is primarily for validating an autoscale formula, as it simply returns the result without applying the formula to the pool.


```js
windows_batch.Pool_EvaluateAutoScale({
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
windows_batch.ComputeNode_List({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool from which you want to list nodes.
  * $filter `string`: An OData $filter clause..
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
windows_batch.ComputeNode_Get({
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
Disables task scheduling on the specified compute node.


```js
windows_batch.ComputeNode_DisableScheduling({
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
Enables task scheduling on the specified compute node.


```js
windows_batch.ComputeNode_EnableScheduling({
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
windows_batch.File_ListFromComputeNode({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the pool that contains the compute node.
  * nodeId **required** `string`: The ID of the compute node whose files you want to list.
  * $filter `string`: An OData $filter clause.
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
Deletes the specified task file from the compute node.


```js
windows_batch.File_DeleteFromComputeNode({
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
  * filePath **required** `string`: The path to the file that you want to delete.
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
windows_batch.File_GetFromComputeNode({
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
* output `file`

### File_GetPropertiesFromComputeNode
Gets the properties of the specified compute node file.


```js
windows_batch.File_GetPropertiesFromComputeNode({
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
Before you can access a node by using the RDP file, you must create a user account on the node. This API can only be invoked on pools created with the cloud service configuration property.


```js
windows_batch.ComputeNode_GetRemoteDesktop({
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
* output `file`

### ComputeNode_Reboot
You can restart a node only if it is in an idle or running state.


```js
windows_batch.ComputeNode_Reboot({
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
windows_batch.ComputeNode_Reimage({
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
Before you can remotely login to a node using the remote login settings, you must create a user account on the node. This API can be invoked only on pools created with the virtual machine configuration property.


```js
windows_batch.ComputeNode_GetRemoteLoginSettings({
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

### ComputeNode_AddUser
You can add a user account to a node only when it is in the idle or running state.


```js
windows_batch.ComputeNode_AddUser({
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
windows_batch.ComputeNode_DeleteUser({
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
This operation replaces of all the updateable properties of the account. For example, if the expiryTime element is not specified, the current value is replaced with the default value, not left unmodified. You can update a user account on a node only when it is in the idle or running state.


```js
windows_batch.ComputeNode_UpdateUser({
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
windows_batch.Pool_RemoveNodes({
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
windows_batch.Pool_Resize({
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
This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state. A resize operation need not be an explicit resize pool request; this API can also be used to halt the initial sizing of the pool when it is created.


```js
windows_batch.Pool_StopResize({
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
This fully replaces all the updateable properties of the pool. For example, if the pool has a start task associated with it and if start task is not specified with this request, then the Batch service will remove the existing start task.


```js
windows_batch.Pool_UpdateProperties({
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
During an upgrade, the Batch service upgrades each compute node in the pool. When a compute node is chosen for upgrade, any tasks running on that node are removed from the node and returned to the queue to be rerun later (or on a different compute node). The node will be unavailable until the upgrade is complete. This operation results in temporarily reduced pool capacity as nodes are taken out of service to be upgraded. Although the Batch service tries to avoid upgrading all compute nodes at the same time, it does not guarantee to do this (particularly on small pools); therefore, the pool may be temporarily unavailable to run tasks. When this operation runs, the pool state changes to upgrading. When all compute nodes have finished upgrading, the pool state returns to active.


```js
windows_batch.Pool_UpgradeOS({
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
If you do not specify a $filter clause including a poolId, the response includes all pools that existed in the account in the time range of the returned aggregation intervals.


```js
windows_batch.Pool_ListUsageMetrics({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * starttime `string`: The earliest time from which to include metrics. This must be at least two and a half hours before the current time. If not specified this defaults to the start time of the last aggregation interval currently available.
  * endtime `string`: The latest time from which to include metrics. This must be at least two hours before the current time. If not specified this defaults to the end time of the last aggregation interval currently available.
  * $filter `string`: An OData $filter clause. If this is not specified the response includes all pools that existed in the account in the time range of the returned aggregation intervals.
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
  * affinityId **required** `string`: You can pass the affinityId of a compute node or task to indicate that this task needs to be placed close to the node or task.

### ApplicationListResult
* The result of listing the applications available in an account. `object`
  * odata.nextLink `string`
  * value `array`
    * items [ApplicationSummary](#applicationsummary)

### ApplicationPackageReference
* A reference to an application package to be deployed to compute nodes. `object`
  * applicationId **required** `string`
  * version `string`: If this is omitted, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences. If you are calling the REST API directly, the HTTP status code is 409.

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
  * autoPoolIdPrefix `string`: The Batch service assigns each auto pool a unique identifier on creation. To distinguish between pools created for different purposes, you can specify this element to add a prefix to the id that is assigned. The prefix can be up to 20 characters long.
  * keepAlive `boolean`: If false, the Batch service deletes the pool once its lifetime (as determined by the poolLifetimeOption setting) expires; that is, when the job or job schedule completes. If true, the Batch service does not delete the pool automatically. It is up to the user to delete auto pools created with this option.
  * pool [PoolSpecification](#poolspecification)
  * poolLifetimeOption **required** `string` (values: jobSchedule, job, unmapped): When the pool lifetime scope is jobSchedule level, the Batch service keeps track of the last autopool created for the job schedule, and deletes that pool when the job schedule completes. Batch will also delete this pool if the user updates the auto pool specification in a way that changes this lifetime.

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
  * scope `string` (values: task, pool): pool - specifies that the task runs as the common auto user account which is created on every node in a pool. task - specifies that the service should create a new user for the task. The default value is task.

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
  * certificateFormat `string` (values: pfx, cer, unmapped)
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
  * storeLocation `string` (values: currentUser, localMachine, unmapped): The default value is currentUser. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
  * storeName `string`: The default value is My. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference).
  * thumbprint **required** `string`
  * thumbprintAlgorithm **required** `string`
  * visibility `array`: The default is all accounts.
    * items `string` (values: startTask, task, remoteUser, unmapped)

### CertificateState
* The state of the certificate. `string` (values: active, deleting, deleteFailed)

### CloudJob
* An Azure Batch job. `object`
  * commonEnvironmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * constraints [JobConstraints](#jobconstraints)
  * creationTime `string`
  * displayName `string`
  * eTag `string`: This is an opaque string. You can use it to detect whether the job has changed between requests. In particular, you can be pass the ETag when updating a job to specify that your changes should take effect only if nobody else has modified the job in the meantime.
  * executionInfo [JobExecutionInformation](#jobexecutioninformation)
  * id `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. It is common to use a GUID for the id.
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
  * id `string`: It is common to use a GUID for the id.
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
  * allocationState `string` (values: steady, resizing, stopping): steady - The pool is not resizing. There are no changes to the number of nodes in the pool in progress. A pool enters this state when it is created and when no operations are being performed on the pool to change the number of dedicated nodes. resizing - The pool is resizing; that is, compute nodes are being added to or removed from the pool. stopping - The pool was resizing, but the user has requested that the resize be stopped, but the stop request has not yet been completed.
  * allocationStateTransitionTime `string`
  * applicationPackageReferences `array`
    * items [ApplicationPackageReference](#applicationpackagereference)
  * autoScaleEvaluationInterval `string`: This property is set only if the pool automatically scales, i.e. enableAutoScale is true.
  * autoScaleFormula `string`: This property is set only if the pool automatically scales, i.e. enableAutoScale is true.
  * autoScaleRun [AutoScaleRun](#autoscalerun)
  * certificateReferences `array`: For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * cloudServiceConfiguration [CloudServiceConfiguration](#cloudserviceconfiguration)
  * creationTime `string`
  * currentDedicated `integer`
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * eTag `string`: This is an opaque string. You can use it to detect whether the pool has changed between requests. In particular, you can be pass the ETag when updating a pool to specify that your changes should take effect only if nobody else has modified the pool in the meantime.
  * enableAutoScale `boolean`: If true, the autoScaleFormula property must be set. If false, the targetDedicated property must be set.
  * enableInterNodeCommunication `boolean`: This imposes restrictions on which nodes can be assigned to the pool. Specifying this value can reduce the chance of the requested number of nodes to be allocated in the pool.
  * id `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. It is common to use a GUID for the id.
  * lastModified `string`: This is the last time at which the pool level data, such as the targetDedicated or enableAutoscale settings, changed. It does not factor in node-level changes such as a compute node changing state.
  * maxTasksPerNode `integer`
  * metadata `array`
    * items [MetadataItem](#metadataitem)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * resizeError [ResizeError](#resizeerror)
  * resizeTimeout `string`: This is the timeout for the most recent resize operation. (The initial sizing when the pool is created counts as a resize.) The default value is 15 minutes.
  * startTask [StartTask](#starttask)
  * state `string` (values: active, deleting, upgrading): active - The pool is available to run tasks subject to the availability of compute nodes. deleting - The user has requested that the pool be deleted, but the delete operation has not yet completed. upgrading - The user has requested that the operating system of the pool's nodes be upgraded, but the upgrade operation has not yet completed (that is, some nodes in the pool have not yet been upgraded). While upgrading, the pool may be able to run tasks (with reduced capacity) but this is not guaranteed.
  * stateTransitionTime `string`
  * stats [PoolStatistics](#poolstatistics)
  * targetDedicated `integer`: This property is not set if enableAutoScale is true. It is required if enableAutoScale is false.
  * taskSchedulingPolicy [TaskSchedulingPolicy](#taskschedulingpolicy)
  * url `string`
  * userAccounts `array`
    * items [UserAccount](#useraccount)
  * virtualMachineConfiguration [VirtualMachineConfiguration](#virtualmachineconfiguration)
  * vmSize `string`: For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

### CloudPoolListResult
* The result of listing the pools in an account. `object`
  * odata.nextLink `string`
  * value `array`
    * items [CloudPool](#cloudpool)

### CloudServiceConfiguration
* The configuration for nodes in a pool based on the Azure Cloud Services platform. `object`
  * currentOSVersion `string`: This may differ from targetOSVersion if the pool state is Upgrading. In this case some virtual machines may be on the targetOSVersion and some may be on the currentOSVersion during the upgrade process. Once all virtual machines have upgraded, currentOSVersion is updated to be the same as targetOSVersion.
  * osFamily **required** `string`: Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. For more information, see Azure Guest OS Releases (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
  * targetOSVersion `string`: The default value is * which specifies the latest operating system version for the specified OS family.

### CloudTask
* An Azure Batch task. `object`
  * affinityInfo [AffinityInformation](#affinityinformation)
  * applicationPackageReferences `array`
    * items [ApplicationPackageReference](#applicationpackagereference)
  * authenticationTokenSettings [AuthenticationTokenSettings](#authenticationtokensettings)
  * commandLine `string`: For multi-instance tasks, the command line is executed as the primary task, after the primary task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
  * constraints [TaskConstraints](#taskconstraints)
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
  * previousState [TaskState](#taskstate)
  * previousStateTransitionTime `string`: This property is not set if the task is in its initial Active state.
  * resourceFiles `array`: For multi-instance tasks, the resource files will only be downloaded to the compute node on which the primary task is executed.
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
  * affinityId `string`
  * allocationTime `string`
  * certificateReferences `array`: For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * errors `array`
    * items [ComputeNodeError](#computenodeerror)
  * id `string`: Every node that is added to a pool is assigned a unique ID. Whenever a node is removed from a pool, all of its local files are deleted, and the ID is reclaimed and could be reused for new nodes.
  * ipAddress `string`: Every node that is added to a pool is assigned a unique IP address. Whenever a node is removed from a pool, all of its local files are deleted, and the IP address is reclaimed and could be reused for new nodes.
  * lastBootTime `string`: This property may not be present if the node state is unusable.
  * recentTasks `array`
    * items [TaskInformation](#taskinformation)
  * runningTasksCount `integer`
  * schedulingState `string` (values: enabled, disabled): enabled - Tasks can be scheduled on the node. disabled - No new tasks will be scheduled on the node. Tasks already running on the node may still run to completion. All nodes start with scheduling enabled.
  * startTask [StartTask](#starttask)
  * startTaskInfo [StartTaskInformation](#starttaskinformation)
  * state `string` (values: idle, rebooting, reimaging, running, unusable, creating, starting, waitingForStartTask, startTaskFailed, unknown, leavingPool, offline)
  * stateTransitionTime `string`
  * totalTasksRun `integer`
  * totalTasksSucceeded `integer`
  * url `string`
  * vmSize `string`: For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

### ComputeNodeDeallocationOption
* Determines what to do with a node and its running task(s) after it has been selected for deallocation. `string` (values: requeue, terminate, taskCompletion, retainedData)

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
* A user account on a compute node. `object`
  * expiryTime `string`: If omitted, the default is 1 day from the current time. For Linux compute nodes, the expiryTime has a precision up to a day.
  * isAdmin `boolean`: The default value is false.
  * name **required** `string`
  * password `string`: The password is required for Windows nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows image reference). For Linux compute nodes, the password can optionally be specified along with the sshPublicKey property.
  * sshPublicKey `string`: The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux nodes. If this is specified for a Windows node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).

### DeleteCertificateError
* An error encountered by the Batch service when deleting a certificate. `object`
  * code `string`
  * message `string`
  * values `array`: This list includes details such as the active pools and nodes referencing this certificate. However, if a large number of resources reference the certificate, the list contains only about the first hundred.
    * items [NameValuePair](#namevaluepair)

### ElevationLevel
* The elevation level of the user. `string` (values: nonAdmin, admin): nonAdmin - The user is a standard user without elevated access. admin - The user is a user with elevated access and operates with full Administrator permissions.

### EnvironmentSetting
* An environment variable to be set on a task process. `object`
  * name **required** `string`
  * value `string`

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
  * schedulingError [ExitOptions](#exitoptions)

### ExitOptions
* Specifies how the Batch service responds to a particular exit condition. `object`
  * dependencyAction `string` (values: satisfy, block): The default is 'satisfy' for exit code 0, and 'block' for all other exit conditions. If the job's usesTaskDependencies property is set to false, then specifying the dependencyAction property returns an error. The add task request fails with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400  (Bad Request).
  * jobAction `string` (values: none, disable, terminate): The default is none for exit code 0 and terminate for all other exit conditions. If the job's onTaskFailed property is noAction, then specify this property returns an error. The add task request fails with an invalid property value error;; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).

### FileProperties
* The properties of a file on a compute node. `object`
  * contentLength **required** `integer`
  * contentType `string`
  * creationTime `string`: The creation time is not returned for files on Linux compute nodes.
  * fileMode `string`: The file mode is returned only for files on Linux compute nodes.
  * lastModified **required** `string`

### ImageReference
* A reference to an Azure Virtual Machines Marketplace image. To get the list of all imageReferences verified by Azure Batch, see the 'List supported node agent SKUs' operation. `object`
  * offer **required** `string`: For example, UbuntuServer or WindowsServer.
  * publisher **required** `string`: For example, Canonical or MicrosoftWindowsServer.
  * sku **required** `string`: For example, 14.04.0-LTS or 2012-R2-Datacenter.
  * version `string`: A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.

### JobAddParameter
* An Azure Batch job to add. `object`
  * commonEnvironmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * constraints [JobConstraints](#jobconstraints)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * id **required** `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. It is common to use a GUID for the id.
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
  * disableTasks **required** `string` (values: requeue, terminate, wait): requeue - Terminate running tasks and requeue them. The tasks will run again when the job is enabled. terminate - Terminate running tasks. The tasks will not run again. wait - Allow currently running tasks to complete.

### JobExecutionInformation
* Contains information about the execution of a job in the Azure Batch service. `object`
  * endTime `string`: This property is set only if the job is in the completed state.
  * poolId `string`: This element contains the actual pool where the job is assigned. When you get job details from the service, they also contain a poolInfo element, which contains the pool configuration data from when the job was added or updated. That poolInfo element may also contain a poolId element. If it does, the two IDs are the same. If it does not, it means the job ran on an auto pool, and this property contains the id of that auto pool.
  * schedulingError [JobSchedulingError](#jobschedulingerror)
  * startTime **required** `string`: This is the time at which the job was created.
  * terminateReason `string`: This property is set only if the job is in the completed state. If the Batch service terminates the job, it sets the reason as follows: JMComplete - the Job Manager task completed, and killJobOnCompletion was set to true. MaxWallClockTimeExpiry - the job reached its maxWallClockTime constraint. TerminateJobSchedule - the job ran as part of a schedule, and the schedule terminated. AllTasksComplete - the job's onAllTasksComplete attribute is set to terminateJob, and all tasks in the job are complete. TaskFailed - the job's onTaskFailure attribute is set to performExitOptionsJobAction, and a task in the job failed with an exit condition that specified a jobAction of terminateJob. Any other string is a user-defined reason specified in a call to the 'Terminate a job' operation.

### JobManagerTask
* Specifies details of a Job Manager task. `object`
  * applicationPackageReferences `array`: Application packages are downloaded and deployed to a shared directory, not the task directory. Therefore, if a referenced package is already on the compute node, and is up to date, then it is not re-downloaded; the existing copy on the compute node is used. If a referenced application package cannot be installed, for example because the package has been deleted or because download failed, the task fails with a scheduling error. This property is currently not supported on jobs running on pools created using the virtualMachineConfiguration (IaaS) property. If a task specifying applicationPackageReferences runs on such a pool, it fails with a scheduling error with code TaskSchedulingConstraintFailed.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * authenticationTokenSettings [AuthenticationTokenSettings](#authenticationtokensettings)
  * commandLine **required** `string`: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
  * constraints [TaskConstraints](#taskconstraints)
  * displayName `string`: It need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * id **required** `string`: The id can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters.
  * killJobOnCompletion `boolean`: If true, when the Job Manager task completes, the Batch service marks the job as complete. If any tasks are still running at this time (other than Job Release), those tasks are terminated. If false, the completion of the Job Manager task does not affect the job status. In this case, you should either use the onAllTasksComplete attribute to terminate the job, or have a client or user terminate the job explicitly. An example of this is if the Job Manager creates a set of tasks but then takes no further role in their execution. The default value is true. If you are using the onAllTasksComplete and onTaskFailure attributes to control job lifetime, and using the Job Manager task only to create the tasks for the job (not to monitor progress), then it is important to set killJobOnCompletion to false.
  * resourceFiles `array`: Files listed under this element are located in the task's working directory.
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
* A Job Preparation task to run before any tasks of the job on any given compute node. `object`
  * commandLine **required** `string`: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
  * constraints [TaskConstraints](#taskconstraints)
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * id `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobpreparation'. No other task in the job can have the same id as the Job Preparation task. If you try to submit a task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobPreparationTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict).
  * rerunOnNodeRebootAfterSuccess `boolean`: The Job Preparation task is always rerun if a compute node is reimaged, or if the Job Preparation task did not complete (e.g. because the reboot occurred while the task was running). Therefore, you should always write a Job Preparation task to be idempotent and to behave correctly if run multiple times. The default value is true.
  * resourceFiles `array`: Files listed under this element are located in the task's working directory.
    * items [ResourceFile](#resourcefile)
  * userIdentity [UserIdentity](#useridentity)
  * waitForSuccess `boolean`: If true and the Job Preparation task fails on a compute node, the Batch service retries the Job Preparation task up to its maximum retry count (as specified in the constraints element). If the task has still not completed successfully after all retries, then the Batch service will not schedule tasks of the job to the compute node. The compute node remains active and eligible to run tasks of other jobs. If false, the Batch service will not wait for the Job Preparation task to complete. In this case, other tasks of the job can start executing on the compute node while the Job Preparation task is still running; and even if the Job Preparation task fails, new tasks will continue to be scheduled on the node. The default value is true.

### JobPreparationTaskExecutionInformation
* Contains information about the execution of a Job Preparation task on a compute node. `object`
  * endTime `string`: This property is set only if the task is in the Completed state.
  * exitCode `integer`: This parameter is returned only if the task is in the completed state. The exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. Note that the exit code may also be generated by the compute node operating system, such as when a process is forcibly terminated.
  * lastRetryTime `string`: This property is set only if the task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the task has been restarted for reasons other than retry; for example, if the compute node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not.
  * retryCount **required** `integer`
  * schedulingError [TaskSchedulingError](#taskschedulingerror)
  * startTime **required** `string`: Note that every time the task is restarted, this value is updated.
  * state **required** `string` (values: running, completed): running - the task is currently running (including retrying). completed - the task has exited with exit code 0, or the task has exhausted its retry limit, or the Batch service was unable to start the task due to scheduling errors.
  * taskRootDirectory `string`
  * taskRootDirectoryUrl `string`

### JobReleaseTask
* A Job Release task to run on job completion on any compute node where the job has run. `object`
  * commandLine **required** `string`: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * id `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobrelease'. No other task in the job can have the same id as the Job Release task. If you try to submit a task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict).
  * maxWallClockTime `string`
  * resourceFiles `array`: Files listed under this element are located in the task's working directory.
    * items [ResourceFile](#resourcefile)
  * retentionTime `string`: The default is infinite, i.e. the task directory will be retained until the compute node is removed or reimaged.
  * userIdentity [UserIdentity](#useridentity)

### JobReleaseTaskExecutionInformation
* Contains information about the execution of a Job Release task on a compute node. `object`
  * endTime `string`: This property is set only if the task is in the Completed state.
  * exitCode `integer`: This parameter is returned only if the task is in the completed state. The exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. Note that the exit code may also be generated by the compute node operating system, such as when a process is forcibly terminated.
  * schedulingError [TaskSchedulingError](#taskschedulingerror)
  * startTime **required** `string`
  * state **required** `string` (values: running, completed): running - the task is currently running (including retrying). completed - the task has exited, or the Batch service was unable to start the task due to scheduling errors.
  * taskRootDirectory `string`
  * taskRootDirectoryUrl `string`

### JobScheduleAddParameter
* A job schedule that allows recurring jobs by specifying when to run jobs and a specification used to create each job. `object`
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * id **required** `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The id is case-preserving and case-insensitive (that is, you may not have two ids within an account that differ only by case).
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
  * category **required** [SchedulingErrorCategory](#schedulingerrorcategory)
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
  * wallClockTime **required** `string`
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

### MetadataItem
* A name-value pair associated with a Batch service resource. `object`: The Batch service does not assign any meaning to this metadata; it is solely for the use of user code.
  * name **required** `string`
  * value **required** `string`

### MultiInstanceSettings
* Settings which specify how to run a multi-instance task. `object`: Multi-instance tasks are commonly used to support MPI tasks.
  * commonResourceFiles `array`: The difference between common resource files and task resource files is that common resource files are downloaded for all subtasks including the primary, whereas task resource files are downloaded only for the primary.
    * items [ResourceFile](#resourcefile)
  * coordinationCommandLine `string`: A typical coordination command line launches a background service and verifies that the service is ready to process inter-node messages.
  * numberOfInstances **required** `integer`

### NameValuePair
* Represents a name-value pair. `object`
  * name `string`
  * value `string`

### NetworkConfiguration
* NetworkConfiguration `object`: The network configuration for a pool.
  * subnetId `string`: The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn't have enough free IP addresses, the pool will partially allocate compute nodes, and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. This property can only be specified for pools created with a cloudServiceConfiguration.

### NodeAgentSku
* A node agent SKU supported by the Batch service. `object`: The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems.
  * id `string`
  * osType `string` (values: linux, windows, unmapped)
  * verifiedImageReferences `array`: This collection is not exhaustive (the node agent may be compatible with other images).
    * items [ImageReference](#imagereference)

### NodeDisableSchedulingParameter
* Options for disabling scheduling on a compute node. `object`
  * nodeDisableSchedulingOption `string` (values: requeue, terminate, taskCompletion): The default value is requeue.

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
  * nodeRebootOption `string` (values: requeue, terminate, taskCompletion, retainedData): The default value is requeue.

### NodeReimageParameter
* Options for reimaging a compute node. `object`
  * nodeReimageOption `string` (values: requeue, terminate, taskCompletion, retainedData): The default value is requeue.

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
* A reference to an OS disk image. `object`
  * caching `string` (values: none, readOnly, readWrite): none - The caching mode for the disk is not enabled. readOnly - The caching mode for the disk is read only. readWrite - The caching mode for the disk is read and write. The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
  * imageUris **required** `array`: All the VHDs must be identical and must reside in an Azure Storage account within the same subscription and same region as the Batch account. For best performance, it is recommended that each VHD resides in a separate Azure Storage account. Each VHD can serve upto 20 Windows compute nodes or 40 Linux compute nodes. You must supply enough VHD URIs to satisfy the 'targetDedicated' property of the pool. If you do not supply enough VHD URIs, the pool will partially allocate compute nodes, and a resize error will occur.
    * items `string`

### OnAllTasksComplete
* The action the Batch service should take when all tasks in the job are in the completed state. `string` (values: noAction, terminateJob): noAction - do nothing. The job remains active unless terminated or disabled by some other means. terminateJob - terminate the job. The job's terminateReason is set to 'AllTasksComplete'.

### OnTaskFailure
* The action the Batch service should take when any task in the job fails. A task is considered to have failed if it completes with a non-zero exit code and has exhausted its retry count, or if it had a scheduling error. `string` (values: noAction, performExitOptionsJobAction): noAction - do nothing. performExitOptionsJobAction - take the action associated with the task exit condition in the task's exitConditions collection. This may still result in no action being taken, if that is what the task specifies.

### PoolAddParameter
* A pool in the Azure Batch service to add. `object`
  * applicationPackageReferences `array`: This property is currently not supported on pools created using the virtualMachineConfiguration (IaaS) property.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * autoScaleEvaluationInterval `string`: The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * autoScaleFormula `string`: This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see 'Automatically scale compute nodes in an Azure Batch pool' (https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/).
  * certificateReferences `array`: For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * cloudServiceConfiguration [CloudServiceConfiguration](#cloudserviceconfiguration)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * enableAutoScale `boolean`: If true, the autoScaleFormula property must be set. If false, the targetDedicated property must be set. The default value is false.
  * enableInterNodeCommunication `boolean`: Enabling inter-node communication limits the maximum size of the pool due to deployment restrictions on the nodes of the pool. This may result in the pool not reaching its desired size. The default value is false.
  * id **required** `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two pool IDs within an account that differ only by case).
  * maxTasksPerNode `integer`: The default value is 1. The maximum value of this setting depends on the size of the compute nodes in the pool (the vmSize setting).
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * resizeTimeout `string`: This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * startTask [StartTask](#starttask)
  * targetDedicated `integer`: This property must have the default value if enableAutoScale is true. It is required if enableAutoScale is false.
  * taskSchedulingPolicy [TaskSchedulingPolicy](#taskschedulingpolicy)
  * userAccounts `array`
    * items [UserAccount](#useraccount)
  * virtualMachineConfiguration [VirtualMachineConfiguration](#virtualmachineconfiguration)
  * vmSize **required** `string`: For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

### PoolEnableAutoScaleParameter
* Options for enabling automatic scaling on a pool. `object`
  * autoScaleEvaluationInterval `string`: The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If you specify a new interval, then the existing autoscale evaluation schedule will be stopped and a new autoscale evaluation schedule will be started, with its starting time being the time when this request was issued.
  * autoScaleFormula `string`: The formula is checked for validity before it is applied to the pool. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see Automatically scale compute nodes in an Azure Batch pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).

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

### PoolPatchParameter
* The set of changes to be made to a pool. `object`
  * applicationPackageReferences `array`: Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. If this element is present, it replaces any existing application package references. If you specify an empty collection, then all application package references are removed from the pool. If omitted, any existing application package references are left unchanged.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * certificateReferences `array`: If omitted, any existing certificate references are left unchanged. For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * metadata `array`: If this element is present, it replaces any existing metadata configured on the pool. If you specify an empty collection, any metadata is removed from the pool. If omitted, any existing metadata is left unchanged.
    * items [MetadataItem](#metadataitem)
  * startTask [StartTask](#starttask)

### PoolResizeParameter
* Options for changing the size of a pool. `object`
  * nodeDeallocationOption [ComputeNodeDeallocationOption](#computenodedeallocationoption)
  * resizeTimeout `string`: The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * targetDedicated **required** `integer`

### PoolSpecification
* Specification for creating a new pool. `object`
  * applicationPackageReferences `array`: This property is currently not supported on auto pools created with the virtualMachineConfiguration (IaaS) property.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * autoScaleEvaluationInterval `string`: The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * autoScaleFormula `string`: This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information.
  * certificateReferences `array`: For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * cloudServiceConfiguration [CloudServiceConfiguration](#cloudserviceconfiguration)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * enableAutoScale `boolean`: If false, the targetDedicated element is required. If true, the autoScaleFormula element is required. The pool automatically resizes according to the formula. The default value is false.
  * enableInterNodeCommunication `boolean`: Enabling inter-node communication limits the maximum size of the pool due to deployment restrictions on the nodes of the pool. This may result in the pool not reaching its desired size. The default value is false.
  * maxTasksPerNode `integer`: The default value is 1. The maximum value of this setting depends on the size of the compute nodes in the pool (the vmSize setting).
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * resizeTimeout `string`: This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * startTask [StartTask](#starttask)
  * targetDedicated `integer`: This property must not be specified if enableAutoScale is set to true. It is required if enableAutoScale is set to false.
  * taskSchedulingPolicy [TaskSchedulingPolicy](#taskschedulingpolicy)
  * userAccounts `array`
    * items [UserAccount](#useraccount)
  * virtualMachineConfiguration [VirtualMachineConfiguration](#virtualmachineconfiguration)
  * vmSize **required** `string`: For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

### PoolStatistics
* Contains utilization and resource usage statistics for the lifetime of a pool. `object`
  * lastUpdateTime **required** `string`
  * resourceStats [ResourceStatistics](#resourcestatistics)
  * startTime **required** `string`
  * url **required** `string`
  * usageStats [UsageStatistics](#usagestatistics)

### PoolUpdatePropertiesParameter
* The set of changes to be made to a pool. `object`
  * applicationPackageReferences **required** `array`: Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. The list replaces any existing application package references. If omitted, or if you specify an empty collection, any existing application packages references are removed from the pool.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * certificateReferences **required** `array`: If you specify an empty collection, any existing certificate references are removed from the pool. For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
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
  * vmSize **required** `string`: For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

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

### SchedulingErrorCategory
* The category of the scheduling error. `string` (values: userError, serverError, unmapped)

### StartTask
* A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged. `object`
  * commandLine **required** `string`: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * maxTaskRetryCount `integer`: The Batch service retries a task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit.
  * resourceFiles `array`
    * items [ResourceFile](#resourcefile)
  * userIdentity [UserIdentity](#useridentity)
  * waitForSuccess `boolean`: If true and the start task fails on a compute node, the Batch service retries the start task up to its maximum retry count (maxTaskRetryCount). If the task has still not completed successfully after all retries, then the Batch service marks the compute node unusable, and will not schedule tasks to it. This condition can be detected via the node state and scheduling error detail. If false, the Batch service will not wait for the start task to complete. In this case, other tasks can start executing on the compute node while the start task is still running; and even if the start task fails, new tasks will continue to be scheduled on the node. The default is false.

### StartTaskInformation
* Information about a start task running on a compute node. `object`
  * endTime `string`: This is the end time of the most recent run of the start task, if that run has completed (even if that run failed and a retry is pending). This element is not present if the start task is currently running.
  * exitCode `integer`: This property is set only if the start task is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the start task (due to timeout, or user termination via the API) you may see an operating system-defined exit code.
  * lastRetryTime `string`: This element is present only if the task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the task has been restarted for reasons other than retry; for example, if the compute node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not.
  * retryCount **required** `integer`: The task is retried if it exits with a nonzero exit code, up to the specified MaxTaskRetryCount.
  * schedulingError [TaskSchedulingError](#taskschedulingerror)
  * startTime **required** `string`: This value is reset every time the task is restarted or retried (that is, this is the most recent time at which the start task started running).
  * state **required** `string` (values: running, completed): running - The start task is currently running. completed - The start task has exited with exit code 0, or the start task has failed and the retry limit has reached, or the start task process did not run due to scheduling errors.

### SubtaskInformation
* Information about an Azure Batch subtask. `object`
  * endTime `string`: This property is set only if the subtask is in the Completed state.
  * exitCode `integer`: This property is set only if the subtask is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the subtask (due to timeout, or user termination via the API) you may see an operating system-defined exit code.
  * id `integer`
  * nodeInfo [ComputeNodeInformation](#computenodeinformation)
  * previousState [SubtaskState](#subtaskstate)
  * previousStateTransitionTime `string`: This property is not set if the subtask is in its initial running state.
  * schedulingError [TaskSchedulingError](#taskschedulingerror)
  * startTime `string`
  * state [SubtaskState](#subtaskstate)
  * stateTransitionTime `string`

### SubtaskState
* The state of the subtask. `string` (values: preparing, running, completed)

### TaskAddCollectionParameter
* A collection of Azure Batch tasks to add. `object`
  * value **required** `array`
    * items [TaskAddParameter](#taskaddparameter)

### TaskAddCollectionResult
* The result of adding a collection of tasks to a job. `object`
  * value `array`
    * items [TaskAddResult](#taskaddresult)

### TaskAddParameter
* An Azure Batch task to add. `object`
  * affinityInfo [AffinityInformation](#affinityinformation)
  * applicationPackageReferences `array`
    * items [ApplicationPackageReference](#applicationpackagereference)
  * authenticationTokenSettings [AuthenticationTokenSettings](#authenticationtokensettings)
  * commandLine **required** `string`: For multi-instance tasks, the command line is executed as the primary task, after the primary task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
  * constraints [TaskConstraints](#taskconstraints)
  * dependsOn [TaskDependencies](#taskdependencies)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * exitConditions [ExitConditions](#exitconditions)
  * id **required** `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within a job that differ only by case).
  * multiInstanceSettings [MultiInstanceSettings](#multiinstancesettings)
  * resourceFiles `array`: For multi-instance tasks, the resource files will only be downloaded to the compute node on which the primary task is executed.
    * items [ResourceFile](#resourcefile)
  * userIdentity [UserIdentity](#useridentity)

### TaskAddResult
* Result for a single task added as part of an add task collection operation. `object`
  * eTag `string`
  * error [BatchError](#batcherror)
  * lastModified `string`
  * location `string`
  * status **required** `string` (values: success, clientError, serverError, unmapped)
  * taskId **required** `string`

### TaskConstraints
* Execution constraints to apply to a task. `object`
  * maxTaskRetryCount `integer`: Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit.
  * maxWallClockTime `string`: If this is not specified, there is no time limit on how long the task may run.
  * retentionTime `string`: The default is infinite, i.e. the task directory will be retained until the compute node is removed or reimaged.

### TaskDependencies
* Specifies any dependencies of a task. Any task that is explicitly specified or within a dependency range must complete before the dependant task will be scheduled. `object`
  * taskIdRanges `array`
    * items [TaskIdRange](#taskidrange)
  * taskIds `array`
    * items `string`

### TaskExecutionInformation
* Information about the execution of a task. `object`
  * endTime `string`: This property is set only if the task is in the Completed state.
  * exitCode `integer`: This property is set only if the task is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the task (due to timeout, or user termination via the API) you may see an operating system-defined exit code.
  * lastRequeueTime `string`: This property is set only if the requeueCount is nonzero.
  * lastRetryTime `string`: This element is present only if the task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the task has been restarted for reasons other than retry; for example, if the compute node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not.
  * requeueCount **required** `integer`: When the user removes nodes from a pool (by resizing/shrinking the pool) or when the job is being disabled, the user can specify that running tasks on the nodes be requeued for execution. This count tracks how many times the task has been requeued for these reasons.
  * retryCount **required** `integer`: The task is retried if it exits with a nonzero exit code, up to the specified maxTaskRetryCount.
  * schedulingError [TaskSchedulingError](#taskschedulingerror)
  * startTime `string`: 'Running' corresponds to the running state, so if the task specifies resource files or application packages, then the start time reflects the time at which the task started downloading or deploying these. If the task has been restarted or retried, this is the most recent time at which the task started running. This property is present only for tasks that are in the running or completed state.

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

### TaskSchedulingError
* Information about an error when scheduling a task. `object`
  * category **required** [SchedulingErrorCategory](#schedulingerrorcategory)
  * code `string`
  * details `array`
    * items [NameValuePair](#namevaluepair)
  * message `string`

### TaskSchedulingPolicy
* Specifies how tasks should be distributed across compute nodes. `object`
  * nodeFillType **required** `string` (values: spread, pack, unmapped)

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

### UsageStatistics
* Statistics related to pool usage information. `object`
  * dedicatedCoreTime **required** `string`
  * lastUpdateTime **required** `string`
  * startTime **required** `string`

### UserAccount
* Properties used to create a user on an Azure Batch node. `object`
  * elevationLevel [ElevationLevel](#elevationlevel)
  * name **required** `string`
  * password **required** `string`
  * sshPrivateKey `string`: The SSH private key establishes password-less SSH between nodes in a Linux pool when the pool's enableInterNodeCommunication property is true. This property will be ignored in a Windows pool.

### UserIdentity
* The definition of the user identity under which the task is run. `object`: Specify either the userName or autoUser property, but not both.
  * autoUser [AutoUserSpecification](#autouserspecification)
  * username `string`: The userName and autoUser properties are mutually exclusive; you must specify one but not both.

### VirtualMachineConfiguration
* The configuration for compute nodes in a pool based on the Azure Virtual Machines infrastructure. `object`
  * imageReference [ImageReference](#imagereference)
  * nodeAgentSKUId **required** `string`: The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the 'List supported node agent SKUs' operation.
  * osDisk [OSDisk](#osdisk)
  * windowsConfiguration [WindowsConfiguration](#windowsconfiguration)

### WindowsConfiguration
* Windows operating system settings to apply to the virtual machine. `object`
  * enableAutomaticUpdates `boolean`: If omitted, the default value is true.


