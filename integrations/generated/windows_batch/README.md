# @datafire/windows_batch

Client library for BatchService

## Installation and Usage
```bash
npm install --save datafire @datafire/windows_batch
```

```js
let datafire = require('datafire');
let windows_batch = require('@datafire/windows_batch').actions;
let context = new datafire.Context();

windows_batch.Application_List({}, context).then(data => {
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

#### Parameters
* maxresults (integer) - The maximum number of items to return in the response. A maximum of 1000 applications can be returned.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Application_Get
Gets information about the specified application.


```js
windows_batch.Application_Get({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Parameters
* applicationId (string) **required** - The ID of the application.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Certificate_List
Lists all of the certificates that have been added to the specified account.


```js
windows_batch.Certificate_List({
  "api-version": ""
}, context)
```

#### Parameters
* $filter (string) - An OData $filter clause.
* $select (string) - An OData $select clause.
* maxresults (integer) - The maximum number of items to return in the response. A maximum of 1000 certificates can be returned.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Certificate_Add
Adds a certificate to the specified account.


```js
windows_batch.Certificate_Add({
  "certificate": null,
  "api-version": ""
}, context)
```

#### Parameters
* certificate (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Certificate_Delete
You cannot delete a certificate if a resource (pool or compute node) is using it. Before you can delete a certificate, you must therefore make sure that the certificate is not associated with any existing pools, the certificate is not installed on any compute nodes (even if you remove a certificate from a pool, it is not removed from existing compute nodes in that pool until they restart), and no running tasks depend on the certificate. If you try to delete a certificate that is in use, the deletion fails. The certificate status changes to deleteFailed. You can use Cancel Delete Certificate to set the status back to active if you decide that you want to continue using the certificate.


```js
windows_batch.Certificate_Delete({
  "thumbprintAlgorithm": "",
  "thumbprint": "",
  "api-version": ""
}, context)
```

#### Parameters
* thumbprintAlgorithm (string) **required** - The algorithm used to derive the thumbprint parameter. This must be sha1.
* thumbprint (string) **required** - The thumbprint of the certificate to be deleted.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Certificate_Get
Gets information about the specified certificate.


```js
windows_batch.Certificate_Get({
  "thumbprintAlgorithm": "",
  "thumbprint": "",
  "api-version": ""
}, context)
```

#### Parameters
* thumbprintAlgorithm (string) **required** - The algorithm used to derive the thumbprint parameter. This must be sha1.
* thumbprint (string) **required** - The thumbprint of the certificate to get.
* $select (string) - An OData $select clause.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Certificate_CancelDeletion
If you try to delete a certificate that is being used by a pool or compute node, the status of the certificate changes to deleteFailed. If you decide that you want to continue using the certificate, you can use this operation to set the status of the certificate back to active. If you intend to delete the certificate, you do not need to run this operation after the deletion failed. You must make sure that the certificate is not being used by any resources, and then you can try again to delete the certificate.


```js
windows_batch.Certificate_CancelDeletion({
  "thumbprintAlgorithm": "",
  "thumbprint": "",
  "api-version": ""
}, context)
```

#### Parameters
* thumbprintAlgorithm (string) **required** - The algorithm used to derive the thumbprint parameter. This must be sha1.
* thumbprint (string) **required** - The thumbprint of the certificate being deleted.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Job_List
Lists all of the jobs in the specified account.


```js
windows_batch.Job_List({
  "api-version": ""
}, context)
```

#### Parameters
* $filter (string) - An OData $filter clause.
* $select (string) - An OData $select clause.
* $expand (string) - An OData $expand clause.
* maxresults (integer) - The maximum number of items to return in the response. A maximum of 1000 jobs can be returned.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Job_Add
The Batch service supports two ways to control the work done as part of a job. In the first approach, the user specifies a Job Manager task. The Batch service launches this task when it is ready to start the job. The Job Manager task controls all other tasks that run under this job, by using the Task APIs. In the second approach, the user directly controls the execution of tasks under an active job, by using the Task APIs. Also note: when naming jobs, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers.


```js
windows_batch.Job_Add({
  "job": null,
  "api-version": ""
}, context)
```

#### Parameters
* job (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Job_Delete
Deleting a job also deletes all tasks that are part of that job, and all job statistics. This also overrides the retention period for task data; that is, if the job contains tasks which are still retained on compute nodes, the Batch services deletes those tasks' working directories and all their contents.


```js
windows_batch.Job_Delete({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job to delete.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Job_Get
Gets information about the specified job.


```js
windows_batch.Job_Get({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job.
* $select (string) - An OData $select clause.
* $expand (string) - An OData $expand clause.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Job_Patch
This replaces only the job properties specified in the request. For example, if the job has constraints, and a request does not specify the constraints element, then the job keeps the existing constraints.


```js
windows_batch.Job_Patch({
  "jobId": "",
  "jobPatchParameter": null,
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job whose properties you want to update.
* jobPatchParameter (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Job_Update
This fully replaces all the updateable properties of the job. For example, if the job has constraints associated with it and if constraints is not specified with this request, then the Batch service will remove the existing constraints.


```js
windows_batch.Job_Update({
  "jobId": "",
  "jobUpdateParameter": null,
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job whose properties you want to update.
* jobUpdateParameter (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Task_AddCollection
Note that each task must have a unique ID. The Batch service may not return the results for each task in the same order the tasks were submitted in this request. If the server times out or the connection is closed during the request, the request may have been partially or fully processed, or not at all. In such cases, the user should re-issue the request. Note that it is up to the user to correctly handle failures when re-issuing a request. For example, you should use the same task ids during a retry so that if the prior operation succeeded, the retry will not create extra tasks unexpectedly.


```js
windows_batch.Task_AddCollection({
  "jobId": "",
  "taskCollection": null,
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job to which the task collection is to be added.
* taskCollection (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Job_Disable
The Batch Service immediately moves the job to the disabling state. Batch then uses the disableTasks parameter to determine what to do with the currently running tasks of the job. The job remains in the disabling state until the disable operation is completed and all tasks have been dealt with according to the disableTasks option; the job then moves to the disabled state. No new tasks are started under the job until it moves back to active state. If you try to disable a job that is in any state other than active, disabling, or disabled, the request fails with status code 409.


```js
windows_batch.Job_Disable({
  "jobId": "",
  "jobDisableParameter": null,
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job to disable.
* jobDisableParameter (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Job_Enable
When you call this API, the Batch service sets a disabled job to the enabling state. After the this operation is completed, the job moves to the active state, and scheduling of new tasks under the job resumes. The Batch service does not allow a task to remain in the active state for more than 7 days. Therefore, if you enable a job containing active tasks which were added more than 7 days ago, those tasks will not run.


```js
windows_batch.Job_Enable({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job to enable.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Job_ListPreparationAndReleaseTaskStatus
This API returns the Job Preparation and Job Release task status on all compute nodes that have run the Job Preparation or Job Release task. This includes nodes which have since been removed from the pool. 


```js
windows_batch.Job_ListPreparationAndReleaseTaskStatus({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job.
* $filter (string) - An OData $filter clause.
* $select (string) - An OData $select clause.
* maxresults (integer) - The maximum number of items to return in the response. A maximum of 1000 tasks can be returned.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Task_List
For multi-instance tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary task. Use the list subtasks API to retrieve information about subtasks.


```js
windows_batch.Task_List({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job.
* $filter (string) - An OData $filter clause.
* $select (string) - An OData $select clause.
* $expand (string) - An OData $expand clause.
* maxresults (integer) - The maximum number of items to return in the response. A maximum of 1000 tasks can be returned.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Task_Add
Adds a task to the specified job.


```js
windows_batch.Task_Add({
  "jobId": "",
  "task": null,
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job to which the task is to be added.
* task (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Task_Delete
When a task is deleted, all of the files in its directory on the compute node where it ran are also deleted (regardless of the retention time). For multi-instance tasks, the delete task operation applies synchronously to the primary task; subtasks and their files are then deleted asynchronously in the background.


```js
windows_batch.Task_Delete({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job from which to delete the task.
* taskId (string) **required** - The ID of the task to delete.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Task_Get
For multi-instance tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary task. Use the list subtasks API to retrieve information about subtasks.


```js
windows_batch.Task_Get({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job that contains the task.
* taskId (string) **required** - The ID of the task to get information about.
* $select (string) - An OData $select clause.
* $expand (string) - An OData $expand clause.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

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

#### Parameters
* jobId (string) **required** - The ID of the job containing the task.
* taskId (string) **required** - The ID of the task to update.
* taskUpdateParameter (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### File_ListFromTask
Lists the files in a task's directory on its compute node.


```js
windows_batch.File_ListFromTask({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job that contains the task.
* taskId (string) **required** - The ID of the task whose files you want to list.
* $filter (string) - An OData $filter clause.
* recursive (boolean) - Whether to list children of a directory. This parameter can be used in combination with the filter parameter to list specific type of files.
* maxresults (integer) - The maximum number of items to return in the response. A maximum of 1000 files can be returned.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

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

#### Parameters
* jobId (string) **required** - The ID of the job that contains the task.
* taskId (string) **required** - The ID of the task whose file you want to delete.
* filePath (string) **required** - The path to the task file that you want to delete.
* recursive (boolean) - Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

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

#### Parameters
* jobId (string) **required** - The ID of the job that contains the task.
* taskId (string) **required** - The ID of the task whose file you want to retrieve.
* filePath (string) **required** - The path to the task file that you want to get the content of.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* ocp-range (string) - The byte range to be retrieved. The default is to retrieve the entire file. The format is bytes=startRange-endRange.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

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

#### Parameters
* jobId (string) **required** - The ID of the job that contains the task.
* taskId (string) **required** - The ID of the task whose file you want to get the properties of.
* filePath (string) **required** - The path to the task file that you want to get the properties of.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Task_Reactivate
Reactivation makes a task eligible to be retried again up to its maximum retry count. The task's state is changed to active. As the task is no longer in the completed state, any previous exit code or scheduling error is no longer available after reactivation. This will fail for tasks that are not completed or that previously completed successfully (with an exit code of 0). Additionally, this will fail if the job has completed (or is terminating or deleting).


```js
windows_batch.Task_Reactivate({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job containing the task.
* taskId (string) **required** - The ID of the task to reactivate.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Task_ListSubtasks
If the task is not a multi-instance task then this returns an empty collection.


```js
windows_batch.Task_ListSubtasks({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job.
* taskId (string) **required** - The ID of the task.
* $select (string) - An OData $select clause.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Task_Terminate
When the task has been terminated, it moves to the completed state. For multi-instance tasks, the terminate task operation applies synchronously to the primary task; subtasks are then terminated asynchronously in the background.


```js
windows_batch.Task_Terminate({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job containing the task.
* taskId (string) **required** - The ID of the task to terminate.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Job_Terminate
When a Terminate Job request is received, the Batch service sets the job to the terminating state. The Batch service then terminates any active or running tasks associated with the job, and runs any required Job Release tasks. The job then moves into the completed state.


```js
windows_batch.Job_Terminate({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobId (string) **required** - The ID of the job to terminate.
* jobTerminateParameter (undefined)
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### JobSchedule_List
Lists all of the job schedules in the specified account.


```js
windows_batch.JobSchedule_List({
  "api-version": ""
}, context)
```

#### Parameters
* $filter (string) - An OData $filter clause.
* $select (string) - An OData $select clause.
* $expand (string) - An OData $expand clause.
* maxresults (integer) - The maximum number of items to return in the response. A maximum of 1000 job schedules can be returned.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### JobSchedule_Add
Adds a job schedule to the specified account.


```js
windows_batch.JobSchedule_Add({
  "cloudJobSchedule": null,
  "api-version": ""
}, context)
```

#### Parameters
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* cloudJobSchedule (undefined) **required**
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### JobSchedule_Delete
When you delete a job schedule, this also deletes all jobs and tasks under that schedule. When tasks are deleted, all the files in their working directories on the compute nodes are also deleted (the retention period is ignored). The job schedule statistics are no longer accessible once the job schedule is deleted, though they are still counted towards account lifetime statistics.


```js
windows_batch.JobSchedule_Delete({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobScheduleId (string) **required** - The ID of the job schedule to delete.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### JobSchedule_Get
Gets information about the specified job schedule.


```js
windows_batch.JobSchedule_Get({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobScheduleId (string) **required** - The ID of the job schedule to get.
* $select (string) - An OData $select clause.
* $expand (string) - An OData $expand clause.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### JobSchedule_Exists
Checks the specified job schedule exists.


```js
windows_batch.JobSchedule_Exists({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobScheduleId (string) **required** - The ID of the job schedule which you want to check.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### JobSchedule_Patch
This replaces only the job schedule properties specified in the request. For example, if the schedule property is not specified with this request, then the Batch service will keep the existing schedule. Changes to a job schedule only impact jobs created by the schedule after the update has taken place; currently running jobs are unaffected.


```js
windows_batch.JobSchedule_Patch({
  "jobScheduleId": "",
  "jobSchedulePatchParameter": null,
  "api-version": ""
}, context)
```

#### Parameters
* jobScheduleId (string) **required** - The ID of the job schedule to update.
* jobSchedulePatchParameter (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### JobSchedule_Update
This fully replaces all the updateable properties of the job schedule. For example, if the schedule property is not specified with this request, then the Batch service will remove the existing schedule. Changes to a job schedule only impact jobs created by the schedule after the update has taken place; currently running jobs are unaffected.


```js
windows_batch.JobSchedule_Update({
  "jobScheduleId": "",
  "jobScheduleUpdateParameter": null,
  "api-version": ""
}, context)
```

#### Parameters
* jobScheduleId (string) **required** - The ID of the job schedule to update.
* jobScheduleUpdateParameter (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### JobSchedule_Disable
No new jobs will be created until the job schedule is enabled again.


```js
windows_batch.JobSchedule_Disable({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobScheduleId (string) **required** - The ID of the job schedule to disable.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### JobSchedule_Enable
Enables a job schedule.


```js
windows_batch.JobSchedule_Enable({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobScheduleId (string) **required** - The ID of the job schedule to enable.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Job_ListFromJobSchedule
Lists the jobs that have been created under the specified job schedule.


```js
windows_batch.Job_ListFromJobSchedule({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobScheduleId (string) **required** - The ID of the job schedule from which you want to get a list of jobs.
* $filter (string) - An OData $filter clause.
* $select (string) - An OData $select clause.
* $expand (string) - An OData $expand clause.
* maxresults (integer) - The maximum number of items to return in the response. A maximum of 1000 jobs can be returned.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### JobSchedule_Terminate
Terminates a job schedule.


```js
windows_batch.JobSchedule_Terminate({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Parameters
* jobScheduleId (string) **required** - The ID of the job schedule to terminates.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Job_GetAllLifetimeStatistics
Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.


```js
windows_batch.Job_GetAllLifetimeStatistics({
  "api-version": ""
}, context)
```

#### Parameters
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Pool_GetAllLifetimeStatistics
Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.


```js
windows_batch.Pool_GetAllLifetimeStatistics({
  "api-version": ""
}, context)
```

#### Parameters
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Account_ListNodeAgentSkus
Lists all node agent SKUs supported by the Azure Batch service.


```js
windows_batch.Account_ListNodeAgentSkus({
  "api-version": ""
}, context)
```

#### Parameters
* $filter (string) - An OData $filter clause.
* maxresults (integer) - The maximum number of items to return in the response. A maximum of 1000 results will be returned.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Pool_List
Lists all of the pools in the specified account.


```js
windows_batch.Pool_List({
  "api-version": ""
}, context)
```

#### Parameters
* $filter (string) - An OData $filter clause.
* $select (string) - An OData $select clause.
* $expand (string) - An OData $expand clause.
* maxresults (integer) - The maximum number of items to return in the response. A maximum of 1000 pools can be returned.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Pool_Add
When naming pools, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers.


```js
windows_batch.Pool_Add({
  "pool": null,
  "api-version": ""
}, context)
```

#### Parameters
* pool (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Pool_Delete
When you request that a pool be deleted, the following actions occur: the pool state is set to deleting; any ongoing resize operation on the pool are stopped; the Batch service starts resizing the pool to zero nodes; any tasks running on existing nodes are terminated and requeued (as if a resize pool operation had been requested with the default requeue option); finally, the pool is removed from the system. Because running tasks are requeued, the user can rerun these tasks by updating their job to target a different pool. The tasks can then run on the new pool. If you want to override the requeue behavior, then you should call resize pool explicitly to shrink the pool to zero size before deleting the pool. If you call an Update, Patch or Delete API on a pool in the deleting state, it will fail with HTTP status code 409 with error code PoolBeingDeleted.


```js
windows_batch.Pool_Delete({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool to delete.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Pool_Get
Gets information about the specified pool.


```js
windows_batch.Pool_Get({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool to get.
* $select (string) - An OData $select clause.
* $expand (string) - An OData $expand clause.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Pool_Exists
Gets basic properties of a pool.


```js
windows_batch.Pool_Exists({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool to get.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Pool_Patch
This only replaces the pool properties specified in the request. For example, if the pool has a start task associated with it, and a request does not specify a start task element, then the pool keeps the existing start task.


```js
windows_batch.Pool_Patch({
  "poolId": "",
  "poolPatchParameter": null,
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool to update.
* poolPatchParameter (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Pool_DisableAutoScale
Disables automatic scaling for a pool.


```js
windows_batch.Pool_DisableAutoScale({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool on which to disable automatic scaling.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Pool_EnableAutoScale
You cannot enable automatic scaling on a pool if a resize operation is in progress on the pool. If automatic scaling of the pool is currently disabled, you must specify a valid autoscale formula as part of the request. If automatic scaling of the pool is already enabled, you may specify a new autoscale formula and/or a new evaluation interval. You cannot call this API for the same pool more than once every 30 seconds.


```js
windows_batch.Pool_EnableAutoScale({
  "poolId": "",
  "poolEnableAutoScaleParameter": null,
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool on which to enable automatic scaling.
* poolEnableAutoScaleParameter (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Pool_EvaluateAutoScale
This API is primarily for validating an autoscale formula, as it simply returns the result without applying the formula to the pool.


```js
windows_batch.Pool_EvaluateAutoScale({
  "poolId": "",
  "poolEvaluateAutoScaleParameter": null,
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool on which to evaluate the automatic scaling formula.
* poolEvaluateAutoScaleParameter (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### ComputeNode_List
Lists the compute nodes in the specified pool.


```js
windows_batch.ComputeNode_List({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool from which you want to list nodes.
* $filter (string) - An OData $filter clause..
* $select (string) - An OData $select clause.
* maxresults (integer) - The maximum number of items to return in the response. A maximum of 1000 nodes can be returned.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### ComputeNode_Get
Gets information about the specified compute node.


```js
windows_batch.ComputeNode_Get({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool that contains the compute node.
* nodeId (string) **required** - The ID of the compute node that you want to get information about.
* $select (string) - An OData $select clause.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### ComputeNode_DisableScheduling
Disables task scheduling on the specified compute node.


```js
windows_batch.ComputeNode_DisableScheduling({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool that contains the compute node.
* nodeId (string) **required** - The ID of the compute node on which you want to disable task scheduling.
* nodeDisableSchedulingParameter (undefined)
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### ComputeNode_EnableScheduling
Enables task scheduling on the specified compute node.


```js
windows_batch.ComputeNode_EnableScheduling({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool that contains the compute node.
* nodeId (string) **required** - The ID of the compute node on which you want to enable task scheduling.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### File_ListFromComputeNode
Lists all of the files in task directories on the specified compute node.


```js
windows_batch.File_ListFromComputeNode({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool that contains the compute node.
* nodeId (string) **required** - The ID of the compute node whose files you want to list.
* $filter (string) - An OData $filter clause.
* recursive (boolean) - Whether to list children of a directory.
* maxresults (integer) - The maximum number of items to return in the response. A maximum of 1000 files can be returned.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

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

#### Parameters
* poolId (string) **required** - The ID of the pool that contains the compute node.
* nodeId (string) **required** - The ID of the compute node from which you want to delete the file.
* filePath (string) **required** - The path to the file that you want to delete.
* recursive (boolean) - Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

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

#### Parameters
* poolId (string) **required** - The ID of the pool that contains the compute node.
* nodeId (string) **required** - The ID of the compute node that contains the file.
* filePath (string) **required** - The path to the compute node file that you want to get the content of.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* ocp-range (string) - The byte range to be retrieved. The default is to retrieve the entire file. The format is bytes=startRange-endRange.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

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

#### Parameters
* poolId (string) **required** - The ID of the pool that contains the compute node.
* nodeId (string) **required** - The ID of the compute node that contains the file.
* filePath (string) **required** - The path to the compute node file that you want to get the properties of.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### ComputeNode_GetRemoteDesktop
Before you can access a node by using the RDP file, you must create a user account on the node. This API can only be invoked on pools created with the cloud service configuration property.


```js
windows_batch.ComputeNode_GetRemoteDesktop({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool that contains the compute node.
* nodeId (string) **required** - The ID of the compute node for which you want to get the Remote Desktop Protocol file.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### ComputeNode_Reboot
You can restart a node only if it is in an idle or running state.


```js
windows_batch.ComputeNode_Reboot({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool that contains the compute node.
* nodeId (string) **required** - The ID of the compute node that you want to restart.
* nodeRebootParameter (undefined)
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### ComputeNode_Reimage
You can reinstall the operating system on a node only if it is in an idle or running state. This API can be invoked only on pools created with the cloud service configuration property.


```js
windows_batch.ComputeNode_Reimage({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool that contains the compute node.
* nodeId (string) **required** - The ID of the compute node that you want to restart.
* nodeReimageParameter (undefined)
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### ComputeNode_GetRemoteLoginSettings
Before you can remotely login to a node using the remote login settings, you must create a user account on the node. This API can be invoked only on pools created with the virtual machine configuration property.


```js
windows_batch.ComputeNode_GetRemoteLoginSettings({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool that contains the compute node.
* nodeId (string) **required** - The ID of the compute node for which to obtain the remote login settings.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

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

#### Parameters
* poolId (string) **required** - The ID of the pool that contains the compute node.
* nodeId (string) **required** - The ID of the machine on which you want to create a user account.
* user (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

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

#### Parameters
* poolId (string) **required** - The ID of the pool that contains the compute node.
* nodeId (string) **required** - The ID of the machine on which you want to delete a user account.
* userName (string) **required** - The name of the user account to delete.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

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

#### Parameters
* poolId (string) **required** - The ID of the pool that contains the compute node.
* nodeId (string) **required** - The ID of the machine on which you want to update a user account.
* userName (string) **required** - The name of the user account to update.
* nodeUpdateUserParameter (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Pool_RemoveNodes
This operation can only run when the allocation state of the pool is steady. When this operation runs, the allocation state changes from steady to resizing.


```js
windows_batch.Pool_RemoveNodes({
  "poolId": "",
  "nodeRemoveParameter": null,
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool from which you want to remove nodes.
* nodeRemoveParameter (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Pool_Resize
You can only resize a pool when its allocation state is steady. If the pool is already resizing, the request fails with status code 409. When you resize a pool, the pool's allocation state changes from steady to resizing. You cannot resize pools which are configured for automatic scaling. If you try to do this, the Batch service returns an error 409. If you resize a pool downwards, the Batch service chooses which nodes to remove. To remove specific nodes, use the pool remove nodes API instead.


```js
windows_batch.Pool_Resize({
  "poolId": "",
  "poolResizeParameter": null,
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool to resize.
* poolResizeParameter (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Pool_StopResize
This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state. A resize operation need not be an explicit resize pool request; this API can also be used to halt the initial sizing of the pool when it is created.


```js
windows_batch.Pool_StopResize({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool whose resizing you want to stop.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Pool_UpdateProperties
This fully replaces all the updateable properties of the pool. For example, if the pool has a start task associated with it and if start task is not specified with this request, then the Batch service will remove the existing start task.


```js
windows_batch.Pool_UpdateProperties({
  "poolId": "",
  "poolUpdatePropertiesParameter": null,
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool to update.
* poolUpdatePropertiesParameter (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

### Pool_UpgradeOS
During an upgrade, the Batch service upgrades each compute node in the pool. When a compute node is chosen for upgrade, any tasks running on that node are removed from the node and returned to the queue to be rerun later (or on a different compute node). The node will be unavailable until the upgrade is complete. This operation results in temporarily reduced pool capacity as nodes are taken out of service to be upgraded. Although the Batch service tries to avoid upgrading all compute nodes at the same time, it does not guarantee to do this (particularly on small pools); therefore, the pool may be temporarily unavailable to run tasks. When this operation runs, the pool state changes to upgrading. When all compute nodes have finished upgrading, the pool state returns to active.


```js
windows_batch.Pool_UpgradeOS({
  "poolId": "",
  "poolUpgradeOSParameter": null,
  "api-version": ""
}, context)
```

#### Parameters
* poolId (string) **required** - The ID of the pool to upgrade.
* poolUpgradeOSParameter (undefined) **required**
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* If-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client.
* If-None-Match (string) - An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client.
* If-Modified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time.
* If-Unmodified-Since (string) - A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time.
* api-version (string) **required** - Client API Version.

### Pool_ListUsageMetrics
If you do not specify a $filter clause including a poolId, the response includes all pools that existed in the account in the time range of the returned aggregation intervals.


```js
windows_batch.Pool_ListUsageMetrics({
  "api-version": ""
}, context)
```

#### Parameters
* starttime (string) - The earliest time from which to include metrics. This must be at least two and a half hours before the current time. If not specified this defaults to the start time of the last aggregation interval currently available.
* endtime (string) - The latest time from which to include metrics. This must be at least two hours before the current time. If not specified this defaults to the end time of the last aggregation interval currently available.
* $filter (string) - An OData $filter clause. If this is not specified the response includes all pools that existed in the account in the time range of the returned aggregation intervals.
* maxresults (integer) - The maximum number of items to return in the response. A maximum of 1000 results will be returned.
* timeout (integer) - The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
* client-request-id (string) - The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
* return-client-request-id (boolean) - Whether the server should return the client-request-id in the response.
* ocp-date (string) - The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
* api-version (string) **required** - Client API Version.

