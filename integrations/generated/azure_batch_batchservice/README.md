# @datafire/azure_batch_batchservice

Client library for BatchService

## Installation and Usage
```bash
npm install --save @datafire/azure_batch_batchservice
```
```js
let azure_batch_batchservice = require('@datafire/azure_batch_batchservice').create({
  api_key: "",
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

A client for issuing REST requests to the Azure Batch service.

## Actions

### Application_List
This operation returns only Applications and versions that are available for use on Compute Nodes; that is, that can be used in an Package reference. For administrator information about applications and versions that are not yet available to Compute Nodes, use the Azure portal or the Azure Resource Manager API.


```js
azure_batch_batchservice.Application_List({
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
This operation returns only Applications and versions that are available for use on Compute Nodes; that is, that can be used in an Package reference. For administrator information about Applications and versions that are not yet available to Compute Nodes, use the Azure portal or the Azure Resource Manager API.


```js
azure_batch_batchservice.Application_Get({
  "applicationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The ID of the Application.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ApplicationSummary](#applicationsummary)

### Certificate_List
Lists all of the Certificates that have been added to the specified Account.


```js
azure_batch_batchservice.Certificate_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-certificates.
  * $select `string`: An OData $select clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 Certificates can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CertificateListResult](#certificatelistresult)

### Certificate_Add
Adds a Certificate to the specified Account.


```js
azure_batch_batchservice.Certificate_Add({
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
You cannot delete a Certificate if a resource (Pool or Compute Node) is using it. Before you can delete a Certificate, you must therefore make sure that the Certificate is not associated with any existing Pools, the Certificate is not installed on any Nodes (even if you remove a Certificate from a Pool, it is not removed from existing Compute Nodes in that Pool until they restart), and no running Tasks depend on the Certificate. If you try to delete a Certificate that is in use, the deletion fails. The Certificate status changes to deleteFailed. You can use Cancel Delete Certificate to set the status back to active if you decide that you want to continue using the Certificate.


```js
azure_batch_batchservice.Certificate_Delete({
  "thumbprintAlgorithm": "",
  "thumbprint": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * thumbprintAlgorithm **required** `string`: The algorithm used to derive the thumbprint parameter. This must be sha1.
  * thumbprint **required** `string`: The thumbprint of the Certificate to be deleted.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Certificate_Get
Gets information about the specified Certificate.


```js
azure_batch_batchservice.Certificate_Get({
  "thumbprintAlgorithm": "",
  "thumbprint": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * thumbprintAlgorithm **required** `string`: The algorithm used to derive the thumbprint parameter. This must be sha1.
  * thumbprint **required** `string`: The thumbprint of the Certificate to get.
  * $select `string`: An OData $select clause.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [Certificate](#certificate)

### Certificate_CancelDeletion
If you try to delete a Certificate that is being used by a Pool or Compute Node, the status of the Certificate changes to deleteFailed. If you decide that you want to continue using the Certificate, you can use this operation to set the status of the Certificate back to active. If you intend to delete the Certificate, you do not need to run this operation after the deletion failed. You must make sure that the Certificate is not being used by any resources, and then you can try again to delete the Certificate.


```js
azure_batch_batchservice.Certificate_CancelDeletion({
  "thumbprintAlgorithm": "",
  "thumbprint": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * thumbprintAlgorithm **required** `string`: The algorithm used to derive the thumbprint parameter. This must be sha1.
  * thumbprint **required** `string`: The thumbprint of the Certificate being deleted.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Job_List
Lists all of the Jobs in the specified Account.


```js
azure_batch_batchservice.Job_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs.
  * $select `string`: An OData $select clause.
  * $expand `string`: An OData $expand clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 Jobs can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudJobListResult](#cloudjoblistresult)

### Job_Add
The Batch service supports two ways to control the work done as part of a Job. In the first approach, the user specifies a Job Manager Task. The Batch service launches this Task when it is ready to start the Job. The Job Manager Task controls all other Tasks that run under this Job, by using the Task APIs. In the second approach, the user directly controls the execution of Tasks under an active Job, by using the Task APIs. Also note: when naming Jobs, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers.


```js
azure_batch_batchservice.Job_Add({
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
Deleting a Job also deletes all Tasks that are part of that Job, and all Job statistics. This also overrides the retention period for Task data; that is, if the Job contains Tasks which are still retained on Compute Nodes, the Batch services deletes those Tasks' working directories and all their contents.  When a Delete Job request is received, the Batch service sets the Job to the deleting state. All update operations on a Job that is in deleting state will fail with status code 409 (Conflict), with additional information indicating that the Job is being deleted.


```js
azure_batch_batchservice.Job_Delete({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job to delete.
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
Gets information about the specified Job.


```js
azure_batch_batchservice.Job_Get({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job.
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
This replaces only the Job properties specified in the request. For example, if the Job has constraints, and a request does not specify the constraints element, then the Job keeps the existing constraints.


```js
azure_batch_batchservice.Job_Patch({
  "jobId": "",
  "jobPatchParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job whose properties you want to update.
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
This fully replaces all the updatable properties of the Job. For example, if the Job has constraints associated with it and if constraints is not specified with this request, then the Batch service will remove the existing constraints.


```js
azure_batch_batchservice.Job_Update({
  "jobId": "",
  "jobUpdateParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job whose properties you want to update.
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
Note that each Task must have a unique ID. The Batch service may not return the results for each Task in the same order the Tasks were submitted in this request. If the server times out or the connection is closed during the request, the request may have been partially or fully processed, or not at all. In such cases, the user should re-issue the request. Note that it is up to the user to correctly handle failures when re-issuing a request. For example, you should use the same Task IDs during a retry so that if the prior operation succeeded, the retry will not create extra Tasks unexpectedly. If the response contains any Tasks which failed to add, a client can retry the request. In a retry, it is most efficient to resubmit only Tasks that failed to add, and to omit Tasks that were successfully added on the first attempt. The maximum lifetime of a Task from addition to completion is 180 days. If a Task has not completed within 180 days of being added it will be terminated by the Batch service and left in whatever state it was in at that time.


```js
azure_batch_batchservice.Task_AddCollection({
  "jobId": "",
  "taskCollection": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job to which the Task collection is to be added.
  * taskCollection **required** [TaskAddCollectionParameter](#taskaddcollectionparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [TaskAddCollectionResult](#taskaddcollectionresult)

### Job_Disable
The Batch Service immediately moves the Job to the disabling state. Batch then uses the disableTasks parameter to determine what to do with the currently running Tasks of the Job. The Job remains in the disabling state until the disable operation is completed and all Tasks have been dealt with according to the disableTasks option; the Job then moves to the disabled state. No new Tasks are started under the Job until it moves back to active state. If you try to disable a Job that is in any state other than active, disabling, or disabled, the request fails with status code 409.


```js
azure_batch_batchservice.Job_Disable({
  "jobId": "",
  "jobDisableParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job to disable.
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
When you call this API, the Batch service sets a disabled Job to the enabling state. After the this operation is completed, the Job moves to the active state, and scheduling of new Tasks under the Job resumes. The Batch service does not allow a Task to remain in the active state for more than 180 days. Therefore, if you enable a Job containing active Tasks which were added more than 180 days ago, those Tasks will not run.


```js
azure_batch_batchservice.Job_Enable({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job to enable.
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
This API returns the Job Preparation and Job Release Task status on all Compute Nodes that have run the Job Preparation or Job Release Task. This includes Compute Nodes which have since been removed from the Pool. If this API is invoked on a Job which has no Job Preparation or Job Release Task, the Batch service returns HTTP status code 409 (Conflict) with an error code of JobPreparationTaskNotSpecified.


```js
azure_batch_batchservice.Job_ListPreparationAndReleaseTaskStatus({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job.
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status.
  * $select `string`: An OData $select clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 Tasks can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudJobListPreparationAndReleaseTaskStatusResult](#cloudjoblistpreparationandreleasetaskstatusresult)

### Job_GetTaskCounts
Task counts provide a count of the Tasks by active, running or completed Task state, and a count of Tasks which succeeded or failed. Tasks in the preparing state are counted as running.


```js
azure_batch_batchservice.Job_GetTaskCounts({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [TaskCounts](#taskcounts)

### Task_List
For multi-instance Tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary Task. Use the list subtasks API to retrieve information about subtasks.


```js
azure_batch_batchservice.Task_List({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job.
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-tasks.
  * $select `string`: An OData $select clause.
  * $expand `string`: An OData $expand clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 Tasks can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudTaskListResult](#cloudtasklistresult)

### Task_Add
The maximum lifetime of a Task from addition to completion is 180 days. If a Task has not completed within 180 days of being added it will be terminated by the Batch service and left in whatever state it was in at that time.


```js
azure_batch_batchservice.Task_Add({
  "jobId": "",
  "task": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job to which the Task is to be added.
  * task **required** [TaskAddParameter](#taskaddparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Task_Delete
When a Task is deleted, all of the files in its directory on the Compute Node where it ran are also deleted (regardless of the retention time). For multi-instance Tasks, the delete Task operation applies synchronously to the primary task; subtasks and their files are then deleted asynchronously in the background.


```js
azure_batch_batchservice.Task_Delete({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job from which to delete the Task.
  * taskId **required** `string`: The ID of the Task to delete.
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
For multi-instance Tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary Task. Use the list subtasks API to retrieve information about subtasks.


```js
azure_batch_batchservice.Task_Get({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job that contains the Task.
  * taskId **required** `string`: The ID of the Task to get information about.
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
Updates the properties of the specified Task.


```js
azure_batch_batchservice.Task_Update({
  "jobId": "",
  "taskId": "",
  "taskUpdateParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job containing the Task.
  * taskId **required** `string`: The ID of the Task to update.
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
Lists the files in a Task's directory on its Compute Node.


```js
azure_batch_batchservice.File_ListFromTask({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job that contains the Task.
  * taskId **required** `string`: The ID of the Task whose files you want to list.
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files.
  * recursive `boolean`: Whether to list children of the Task directory. This parameter can be used in combination with the filter parameter to list specific type of files.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 files can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [NodeFileListResult](#nodefilelistresult)

### File_DeleteFromTask
Deletes the specified Task file from the Compute Node where the Task ran.


```js
azure_batch_batchservice.File_DeleteFromTask({
  "jobId": "",
  "taskId": "",
  "filePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job that contains the Task.
  * taskId **required** `string`: The ID of the Task whose file you want to delete.
  * filePath **required** `string`: The path to the Task file or directory that you want to delete.
  * recursive `boolean`: Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### File_GetFromTask
Returns the content of the specified Task file.


```js
azure_batch_batchservice.File_GetFromTask({
  "jobId": "",
  "taskId": "",
  "filePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job that contains the Task.
  * taskId **required** `string`: The ID of the Task whose file you want to retrieve.
  * filePath **required** `string`: The path to the Task file that you want to get the content of.
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
Gets the properties of the specified Task file.


```js
azure_batch_batchservice.File_GetPropertiesFromTask({
  "jobId": "",
  "taskId": "",
  "filePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job that contains the Task.
  * taskId **required** `string`: The ID of the Task whose file you want to get the properties of.
  * filePath **required** `string`: The path to the Task file that you want to get the properties of.
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
Reactivation makes a Task eligible to be retried again up to its maximum retry count. The Task's state is changed to active. As the Task is no longer in the completed state, any previous exit code or failure information is no longer available after reactivation. Each time a Task is reactivated, its retry count is reset to 0. Reactivation will fail for Tasks that are not completed or that previously completed successfully (with an exit code of 0). Additionally, it will fail if the Job has completed (or is terminating or deleting).


```js
azure_batch_batchservice.Task_Reactivate({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job containing the Task.
  * taskId **required** `string`: The ID of the Task to reactivate.
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
If the Task is not a multi-instance Task then this returns an empty collection.


```js
azure_batch_batchservice.Task_ListSubtasks({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job.
  * taskId **required** `string`: The ID of the Task.
  * $select `string`: An OData $select clause.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudTaskListSubtasksResult](#cloudtasklistsubtasksresult)

### Task_Terminate
When the Task has been terminated, it moves to the completed state. For multi-instance Tasks, the terminate Task operation applies synchronously to the primary task; subtasks are then terminated asynchronously in the background.


```js
azure_batch_batchservice.Task_Terminate({
  "jobId": "",
  "taskId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job containing the Task.
  * taskId **required** `string`: The ID of the Task to terminate.
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
When a Terminate Job request is received, the Batch service sets the Job to the terminating state. The Batch service then terminates any running Tasks associated with the Job and runs any required Job release Tasks. Then the Job moves into the completed state. If there are any Tasks in the Job in the active state, they will remain in the active state. Once a Job is terminated, new Tasks cannot be added and any remaining active Tasks will not be scheduled.


```js
azure_batch_batchservice.Job_Terminate({
  "jobId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The ID of the Job to terminate.
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
Lists all of the Job Schedules in the specified Account.


```js
azure_batch_batchservice.JobSchedule_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules.
  * $select `string`: An OData $select clause.
  * $expand `string`: An OData $expand clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 Job Schedules can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudJobScheduleListResult](#cloudjobschedulelistresult)

### JobSchedule_Add
Adds a Job Schedule to the specified Account.


```js
azure_batch_batchservice.JobSchedule_Add({
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
When you delete a Job Schedule, this also deletes all Jobs and Tasks under that schedule. When Tasks are deleted, all the files in their working directories on the Compute Nodes are also deleted (the retention period is ignored). The Job Schedule statistics are no longer accessible once the Job Schedule is deleted, though they are still counted towards Account lifetime statistics.


```js
azure_batch_batchservice.JobSchedule_Delete({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the Job Schedule to delete.
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
Gets information about the specified Job Schedule.


```js
azure_batch_batchservice.JobSchedule_Get({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the Job Schedule to get.
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
Checks the specified Job Schedule exists.


```js
azure_batch_batchservice.JobSchedule_Exists({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the Job Schedule which you want to check.
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
This replaces only the Job Schedule properties specified in the request. For example, if the schedule property is not specified with this request, then the Batch service will keep the existing schedule. Changes to a Job Schedule only impact Jobs created by the schedule after the update has taken place; currently running Jobs are unaffected.


```js
azure_batch_batchservice.JobSchedule_Patch({
  "jobScheduleId": "",
  "jobSchedulePatchParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the Job Schedule to update.
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
This fully replaces all the updatable properties of the Job Schedule. For example, if the schedule property is not specified with this request, then the Batch service will remove the existing schedule. Changes to a Job Schedule only impact Jobs created by the schedule after the update has taken place; currently running Jobs are unaffected.


```js
azure_batch_batchservice.JobSchedule_Update({
  "jobScheduleId": "",
  "jobScheduleUpdateParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the Job Schedule to update.
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
No new Jobs will be created until the Job Schedule is enabled again.


```js
azure_batch_batchservice.JobSchedule_Disable({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the Job Schedule to disable.
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
Enables a Job Schedule.


```js
azure_batch_batchservice.JobSchedule_Enable({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the Job Schedule to enable.
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
Lists the Jobs that have been created under the specified Job Schedule.


```js
azure_batch_batchservice.Job_ListFromJobSchedule({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the Job Schedule from which you want to get a list of Jobs.
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs-in-a-job-schedule.
  * $select `string`: An OData $select clause.
  * $expand `string`: An OData $expand clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 Jobs can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudJobListResult](#cloudjoblistresult)

### JobSchedule_Terminate
Terminates a Job Schedule.


```js
azure_batch_batchservice.JobSchedule_Terminate({
  "jobScheduleId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * jobScheduleId **required** `string`: The ID of the Job Schedule to terminates.
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
Statistics are aggregated across all Jobs that have ever existed in the Account, from Account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes.


```js
azure_batch_batchservice.Job_GetAllLifetimeStatistics({
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
Statistics are aggregated across all Pools that have ever existed in the Account, from Account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes.


```js
azure_batch_batchservice.Pool_GetAllLifetimeStatistics({
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

### Account_ListPoolNodeCounts
Gets the number of Compute Nodes in each state, grouped by Pool.


```js
azure_batch_batchservice.Account_ListPoolNodeCounts({
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
Lists all of the Pools in the specified Account.


```js
azure_batch_batchservice.Pool_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools.
  * $select `string`: An OData $select clause.
  * $expand `string`: An OData $expand clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 Pools can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [CloudPoolListResult](#cloudpoollistresult)

### Pool_Add
When naming Pools, avoid including sensitive information such as user names or secret project names. This information may appear in telemetry logs accessible to Microsoft Support engineers.


```js
azure_batch_batchservice.Pool_Add({
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
When you request that a Pool be deleted, the following actions occur: the Pool state is set to deleting; any ongoing resize operation on the Pool are stopped; the Batch service starts resizing the Pool to zero Compute Nodes; any Tasks running on existing Compute Nodes are terminated and requeued (as if a resize Pool operation had been requested with the default requeue option); finally, the Pool is removed from the system. Because running Tasks are requeued, the user can rerun these Tasks by updating their Job to target a different Pool. The Tasks can then run on the new Pool. If you want to override the requeue behavior, then you should call resize Pool explicitly to shrink the Pool to zero size before deleting the Pool. If you call an Update, Patch or Delete API on a Pool in the deleting state, it will fail with HTTP status code 409 with error code PoolBeingDeleted.


```js
azure_batch_batchservice.Pool_Delete({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool to delete.
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
Gets information about the specified Pool.


```js
azure_batch_batchservice.Pool_Get({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool to get.
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
Gets basic properties of a Pool.


```js
azure_batch_batchservice.Pool_Exists({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool to get.
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
This only replaces the Pool properties specified in the request. For example, if the Pool has a StartTask associated with it, and a request does not specify a StartTask element, then the Pool keeps the existing StartTask.


```js
azure_batch_batchservice.Pool_Patch({
  "poolId": "",
  "poolPatchParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool to update.
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
Disables automatic scaling for a Pool.


```js
azure_batch_batchservice.Pool_DisableAutoScale({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool on which to disable automatic scaling.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_EnableAutoScale
You cannot enable automatic scaling on a Pool if a resize operation is in progress on the Pool. If automatic scaling of the Pool is currently disabled, you must specify a valid autoscale formula as part of the request. If automatic scaling of the Pool is already enabled, you may specify a new autoscale formula and/or a new evaluation interval. You cannot call this API for the same Pool more than once every 30 seconds.


```js
azure_batch_batchservice.Pool_EnableAutoScale({
  "poolId": "",
  "poolEnableAutoScaleParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool on which to enable automatic scaling.
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
This API is primarily for validating an autoscale formula, as it simply returns the result without applying the formula to the Pool. The Pool must have auto scaling enabled in order to evaluate a formula.


```js
azure_batch_batchservice.Pool_EvaluateAutoScale({
  "poolId": "",
  "poolEvaluateAutoScaleParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool on which to evaluate the automatic scaling formula.
  * poolEvaluateAutoScaleParameter **required** [PoolEvaluateAutoScaleParameter](#poolevaluateautoscaleparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [AutoScaleRun](#autoscalerun)

### ComputeNode_List
Lists the Compute Nodes in the specified Pool.


```js
azure_batch_batchservice.ComputeNode_List({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool from which you want to list Compute Nodes.
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool.
  * $select `string`: An OData $select clause.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 Compute Nodes can be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ComputeNodeListResult](#computenodelistresult)

### ComputeNode_Get
Gets information about the specified Compute Node.


```js
azure_batch_batchservice.ComputeNode_Get({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the Compute Node that you want to get information about.
  * $select `string`: An OData $select clause.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ComputeNode](#computenode)

### ComputeNode_DisableScheduling
You can disable Task scheduling on a Compute Node only if its current scheduling state is enabled.


```js
azure_batch_batchservice.ComputeNode_DisableScheduling({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the Compute Node on which you want to disable Task scheduling.
  * nodeDisableSchedulingParameter [NodeDisableSchedulingParameter](#nodedisableschedulingparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ComputeNode_EnableScheduling
You can enable Task scheduling on a Compute Node only if its current scheduling state is disabled


```js
azure_batch_batchservice.ComputeNode_EnableScheduling({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the Compute Node on which you want to enable Task scheduling.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### File_ListFromComputeNode
Lists all of the files in Task directories on the specified Compute Node.


```js
azure_batch_batchservice.File_ListFromComputeNode({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the Compute Node whose files you want to list.
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
Deletes the specified file from the Compute Node.


```js
azure_batch_batchservice.File_DeleteFromComputeNode({
  "poolId": "",
  "nodeId": "",
  "filePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the Compute Node from which you want to delete the file.
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
Returns the content of the specified Compute Node file.


```js
azure_batch_batchservice.File_GetFromComputeNode({
  "poolId": "",
  "nodeId": "",
  "filePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the Compute Node that contains the file.
  * filePath **required** `string`: The path to the Compute Node file that you want to get the content of.
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
Gets the properties of the specified Compute Node file.


```js
azure_batch_batchservice.File_GetPropertiesFromComputeNode({
  "poolId": "",
  "nodeId": "",
  "filePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the Compute Node that contains the file.
  * filePath **required** `string`: The path to the Compute Node file that you want to get the properties of.
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
Before you can access a Compute Node by using the RDP file, you must create a user Account on the Compute Node. This API can only be invoked on Pools created with a cloud service configuration. For Pools created with a virtual machine configuration, see the GetRemoteLoginSettings API.


```js
azure_batch_batchservice.ComputeNode_GetRemoteDesktop({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the Compute Node for which you want to get the Remote Desktop Protocol file.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output `object`

### ComputeNode_Reboot
You can restart a Compute Node only if it is in an idle or running state.


```js
azure_batch_batchservice.ComputeNode_Reboot({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the Compute Node that you want to restart.
  * nodeRebootParameter [NodeRebootParameter](#noderebootparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ComputeNode_Reimage
You can reinstall the operating system on a Compute Node only if it is in an idle or running state. This API can be invoked only on Pools created with the cloud service configuration property.


```js
azure_batch_batchservice.ComputeNode_Reimage({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the Compute Node that you want to restart.
  * nodeReimageParameter [NodeReimageParameter](#nodereimageparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ComputeNode_GetRemoteLoginSettings
Before you can remotely login to a Compute Node using the remote login settings, you must create a user Account on the Compute Node. This API can be invoked only on Pools created with the virtual machine configuration property. For Pools created with a cloud service configuration, see the GetRemoteDesktop API.


```js
azure_batch_batchservice.ComputeNode_GetRemoteLoginSettings({
  "poolId": "",
  "nodeId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the Compute Node for which to obtain the remote login settings.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [ComputeNodeGetRemoteLoginSettingsResult](#computenodegetremoteloginsettingsresult)

### ComputeNode_UploadBatchServiceLogs
This is for gathering Azure Batch service log files in an automated fashion from Compute Nodes if you are experiencing an error and wish to escalate to Azure support. The Azure Batch service log files should be shared with Azure support to aid in debugging issues with the Batch service.


```js
azure_batch_batchservice.ComputeNode_UploadBatchServiceLogs({
  "poolId": "",
  "nodeId": "",
  "uploadBatchServiceLogsConfiguration": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the Compute Node from which you want to upload the Azure Batch service log files.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * uploadBatchServiceLogsConfiguration **required** [UploadBatchServiceLogsConfiguration](#uploadbatchservicelogsconfiguration)
  * api-version **required** `string`: Client API Version.

#### Output
* output [UploadBatchServiceLogsResult](#uploadbatchservicelogsresult)

### ComputeNode_AddUser
You can add a user Account to a Compute Node only when it is in the idle or running state.


```js
azure_batch_batchservice.ComputeNode_AddUser({
  "poolId": "",
  "nodeId": "",
  "user": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the machine on which you want to create a user Account.
  * user **required** [ComputeNodeUser](#computenodeuser)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ComputeNode_DeleteUser
You can delete a user Account to a Compute Node only when it is in the idle or running state.


```js
azure_batch_batchservice.ComputeNode_DeleteUser({
  "poolId": "",
  "nodeId": "",
  "userName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the machine on which you want to delete a user Account.
  * userName **required** `string`: The name of the user Account to delete.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### ComputeNode_UpdateUser
This operation replaces of all the updatable properties of the Account. For example, if the expiryTime element is not specified, the current value is replaced with the default value, not left unmodified. You can update a user Account on a Compute Node only when it is in the idle or running state.


```js
azure_batch_batchservice.ComputeNode_UpdateUser({
  "poolId": "",
  "nodeId": "",
  "userName": "",
  "nodeUpdateUserParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool that contains the Compute Node.
  * nodeId **required** `string`: The ID of the machine on which you want to update a user Account.
  * userName **required** `string`: The name of the user Account to update.
  * nodeUpdateUserParameter **required** [NodeUpdateUserParameter](#nodeupdateuserparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_RemoveNodes
This operation can only run when the allocation state of the Pool is steady. When this operation runs, the allocation state changes from steady to resizing.


```js
azure_batch_batchservice.Pool_RemoveNodes({
  "poolId": "",
  "nodeRemoveParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool from which you want to remove Compute Nodes.
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
You can only resize a Pool when its allocation state is steady. If the Pool is already resizing, the request fails with status code 409. When you resize a Pool, the Pool's allocation state changes from steady to resizing. You cannot resize Pools which are configured for automatic scaling. If you try to do this, the Batch service returns an error 409. If you resize a Pool downwards, the Batch service chooses which Compute Nodes to remove. To remove specific Compute Nodes, use the Pool remove Compute Nodes API instead.


```js
azure_batch_batchservice.Pool_Resize({
  "poolId": "",
  "poolResizeParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool to resize.
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
This does not restore the Pool to its previous state before the resize operation: it only stops any further changes being made, and the Pool maintains its current state. After stopping, the Pool stabilizes at the number of Compute Nodes it was at when the stop operation was done. During the stop operation, the Pool allocation state changes first to stopping and then to steady. A resize operation need not be an explicit resize Pool request; this API can also be used to halt the initial sizing of the Pool when it is created.


```js
azure_batch_batchservice.Pool_StopResize({
  "poolId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool whose resizing you want to stop.
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
This fully replaces all the updatable properties of the Pool. For example, if the Pool has a StartTask associated with it and if StartTask is not specified with this request, then the Batch service will remove the existing StartTask.


```js
azure_batch_batchservice.Pool_UpdateProperties({
  "poolId": "",
  "poolUpdatePropertiesParameter": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * poolId **required** `string`: The ID of the Pool to update.
  * poolUpdatePropertiesParameter **required** [PoolUpdatePropertiesParameter](#poolupdatepropertiesparameter)
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
*Output schema unknown*

### Pool_ListUsageMetrics
If you do not specify a $filter clause including a poolId, the response includes all Pools that existed in the Account in the time range of the returned aggregation intervals. If you do not specify a $filter clause including a startTime or endTime these filters default to the start and end times of the last aggregation interval currently available; that is, only the last aggregation interval is returned.


```js
azure_batch_batchservice.Pool_ListUsageMetrics({
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

### Account_ListSupportedImages
Lists all Virtual Machine Images supported by the Azure Batch service.


```js
azure_batch_batchservice.Account_ListSupportedImages({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-support-images.
  * maxresults `integer`: The maximum number of items to return in the response. A maximum of 1000 results will be returned.
  * timeout `integer`: The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
  * client-request-id `string`: The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
  * return-client-request-id `boolean`: Whether the server should return the client-request-id in the response.
  * ocp-date `string`: The time the request was issued. Client libraries typically set this to the current system clock time; set it explicitly if you are calling the REST API directly.
  * api-version **required** `string`: Client API Version.

#### Output
* output [AccountListSupportedImagesResult](#accountlistsupportedimagesresult)



## Definitions

### AccountListSupportedImagesResult
* The result of listing the supported Virtual Machine Images. `object`
  * odata.nextLink `string`
  * value `array`
    * items [ImageInformation](#imageinformation)

### AffinityInformation
* A locality hint that can be used by the Batch service to select a Compute Node on which to start a Task. `object`
  * affinityId **required** `string`: You can pass the affinityId of a Node to indicate that this Task needs to run on that Compute Node. Note that this is just a soft affinity. If the target Compute Node is busy or unavailable at the time the Task is scheduled, then the Task will be scheduled elsewhere.

### ApplicationListResult
* The result of listing the applications available in an Account. `object`
  * odata.nextLink `string`
  * value `array`
    * items [ApplicationSummary](#applicationsummary)

### ApplicationPackageReference
* A reference to an Package to be deployed to Compute Nodes. `object`
  * applicationId **required** `string`
  * version `string`: If this is omitted on a Pool, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences and HTTP status code 409. If this is omitted on a Task, and no default version is specified for this application, the Task fails with a pre-processing error.

### ApplicationSummary
* Contains information about an application in an Azure Batch Account. `object`
  * displayName **required** `string`
  * id **required** `string`
  * versions **required** `array`
    * items `string`

### AuthenticationTokenSettings
* The settings for an authentication token that the Task can use to perform Batch service operations. `object`
  * access `array`: The authentication token grants access to a limited set of Batch service operations. Currently the only supported value for the access property is 'job', which grants access to all operations related to the Job which contains the Task.
    * items `string` (values: job)

### AutoPoolSpecification
* Specifies characteristics for a temporary 'auto pool'. The Batch service will create this auto Pool when the Job is submitted. `object`
  * autoPoolIdPrefix `string`: The Batch service assigns each auto Pool a unique identifier on creation. To distinguish between Pools created for different purposes, you can specify this element to add a prefix to the ID that is assigned. The prefix can be up to 20 characters long.
  * keepAlive `boolean`: If false, the Batch service deletes the Pool once its lifetime (as determined by the poolLifetimeOption setting) expires; that is, when the Job or Job Schedule completes. If true, the Batch service does not delete the Pool automatically. It is up to the user to delete auto Pools created with this option.
  * pool [PoolSpecification](#poolspecification)
  * poolLifetimeOption **required** `string` (values: jobschedule, job)

### AutoScaleRun
* The results and errors from an execution of a Pool autoscale formula. `object`
  * error [AutoScaleRunError](#autoscalerunerror)
  * results `string`: Each variable value is returned in the form $variable=value, and variables are separated by semicolons.
  * timestamp **required** `string`

### AutoScaleRunError
* An error that occurred when executing or evaluating a Pool autoscale formula. `object`
  * code `string`
  * message `string`
  * values `array`
    * items [NameValuePair](#namevaluepair)

### AutoUserSpecification
* Specifies the parameters for the auto user that runs a Task on the Batch service. `object`
  * elevationLevel [ElevationLevel](#elevationlevel)
  * scope `string` (values: task, pool): The default value is pool. If the pool is running Windows a value of Task should be specified if stricter isolation between tasks is required. For example, if the task mutates the registry in a way which could impact other tasks, or if certificates have been specified on the pool which should not be accessible by normal tasks but should be accessible by StartTasks.

### AzureBlobFileSystemConfiguration
* Information used to connect to an Azure Storage Container using Blobfuse. `object`
  * accountKey `string`: This property is mutually exclusive with sasKey and one must be specified.
  * accountName **required** `string`
  * blobfuseOptions `string`: These are 'net use' options in Windows and 'mount' options in Linux.
  * containerName **required** `string`
  * relativeMountPath **required** `string`: All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
  * sasKey `string`: This property is mutually exclusive with accountKey and one must be specified.

### AzureFileShareConfiguration
* Information used to connect to an Azure Fileshare. `object`
  * accountKey **required** `string`
  * accountName **required** `string`
  * azureFileUrl **required** `string`: This is of the form 'https://{account}.file.core.windows.net/'.
  * mountOptions `string`: These are 'net use' options in Windows and 'mount' options in Linux.
  * relativeMountPath **required** `string`: All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.

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

### CIFSMountConfiguration
* Information used to connect to a CIFS file system. `object`
  * mountOptions `string`: These are 'net use' options in Windows and 'mount' options in Linux.
  * password **required** `string`
  * relativeMountPath **required** `string`: All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
  * source **required** `string`
  * username **required** `string`

### CachingType
* The type of caching to enable for the disk. `string` (values: none, readonly, readwrite): The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.

### Certificate
* Certificate `object`: A Certificate that can be installed on Compute Nodes and can be used to authenticate operations on the machine.
  * deleteCertificateError [DeleteCertificateError](#deletecertificateerror)
  * previousState [CertificateState](#certificatestate)
  * previousStateTransitionTime `string`: This property is not set if the Certificate is in its initial Active state.
  * publicData `string`
  * state [CertificateState](#certificatestate)
  * stateTransitionTime `string`
  * thumbprint `string`
  * thumbprintAlgorithm `string`
  * url `string`

### CertificateAddParameter
* A Certificate that can be installed on Compute Nodes and can be used to authenticate operations on the machine. `object`
  * certificateFormat `string` (values: pfx, cer)
  * data **required** `string`
  * password `string`: This is required if the Certificate format is pfx. It should be omitted if the Certificate format is cer.
  * thumbprint **required** `string`
  * thumbprintAlgorithm **required** `string`

### CertificateListResult
* The result of listing the Certificates in the Account. `object`
  * odata.nextLink `string`
  * value `array`
    * items [Certificate](#certificate)

### CertificateReference
* A reference to a Certificate to be installed on Compute Nodes in a Pool. `object`
  * storeLocation `string` (values: currentuser, localmachine): The default value is currentuser. This property is applicable only for Pools configured with Windows Compute Nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows Image reference). For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory.
  * storeName `string`: This property is applicable only for Pools configured with Windows Compute Nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows Image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My.
  * thumbprint **required** `string`
  * thumbprintAlgorithm **required** `string`
  * visibility `array`: You can specify more than one visibility in this collection. The default is all Accounts.
    * items `string` (values: starttask, task, remoteuser)

### CertificateState
* The state of the Certificate. `string` (values: active, deleting, deletefailed)

### CloudJob
* An Azure Batch Job. `object`
  * commonEnvironmentSettings `array`: Individual Tasks can override an environment setting specified here by specifying the same setting name with a different value.
    * items [EnvironmentSetting](#environmentsetting)
  * constraints [JobConstraints](#jobconstraints)
  * creationTime `string`
  * displayName `string`
  * eTag `string`: This is an opaque string. You can use it to detect whether the Job has changed between requests. In particular, you can be pass the ETag when updating a Job to specify that your changes should take effect only if nobody else has modified the Job in the meantime.
  * executionInfo [JobExecutionInformation](#jobexecutioninformation)
  * id `string`: The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case).
  * jobManagerTask [JobManagerTask](#jobmanagertask)
  * jobPreparationTask [JobPreparationTask](#jobpreparationtask)
  * jobReleaseTask [JobReleaseTask](#jobreleasetask)
  * lastModified `string`: This is the last time at which the Job level data, such as the Job state or priority, changed. It does not factor in task-level changes such as adding new Tasks or Tasks changing state.
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * networkConfiguration [JobNetworkConfiguration](#jobnetworkconfiguration)
  * onAllTasksComplete [OnAllTasksComplete](#onalltaskscomplete)
  * onTaskFailure [OnTaskFailure](#ontaskfailure)
  * poolInfo [PoolInformation](#poolinformation)
  * previousState [JobState](#jobstate)
  * previousStateTransitionTime `string`: This property is not set if the Job is in its initial Active state.
  * priority `integer`: Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
  * state [JobState](#jobstate)
  * stateTransitionTime `string`
  * stats [JobStatistics](#jobstatistics)
  * url `string`
  * usesTaskDependencies `boolean`

### CloudJobListPreparationAndReleaseTaskStatusResult
* The result of listing the status of the Job Preparation and Job Release Tasks for a Job. `object`
  * odata.nextLink `string`
  * value `array`
    * items [JobPreparationAndReleaseTaskExecutionInformation](#jobpreparationandreleasetaskexecutioninformation)

### CloudJobListResult
* The result of listing the Jobs in an Account. `object`
  * odata.nextLink `string`
  * value `array`
    * items [CloudJob](#cloudjob)

### CloudJobSchedule
* A Job Schedule that allows recurring Jobs by specifying when to run Jobs and a specification used to create each Job. `object`
  * creationTime `string`
  * displayName `string`
  * eTag `string`: This is an opaque string. You can use it to detect whether the Job Schedule has changed between requests. In particular, you can be pass the ETag with an Update Job Schedule request to specify that your changes should take effect only if nobody else has modified the schedule in the meantime.
  * executionInfo [JobScheduleExecutionInformation](#jobscheduleexecutioninformation)
  * id `string`
  * jobSpecification [JobSpecification](#jobspecification)
  * lastModified `string`: This is the last time at which the schedule level data, such as the Job specification or recurrence information, changed. It does not factor in job-level changes such as new Jobs being created or Jobs changing state.
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * previousState [JobScheduleState](#jobschedulestate)
  * previousStateTransitionTime `string`: This property is not present if the Job Schedule is in its initial active state.
  * schedule [Schedule](#schedule)
  * state [JobScheduleState](#jobschedulestate)
  * stateTransitionTime `string`
  * stats [JobScheduleStatistics](#jobschedulestatistics)
  * url `string`

### CloudJobScheduleListResult
* The result of listing the Job Schedules in an Account. `object`
  * odata.nextLink `string`
  * value `array`
    * items [CloudJobSchedule](#cloudjobschedule)

### CloudPool
* A Pool in the Azure Batch service. `object`
  * allocationState `string` (values: steady, resizing, stopping)
  * allocationStateTransitionTime `string`
  * applicationLicenses `array`: The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, Pool creation will fail.
    * items `string`
  * applicationPackageReferences `array`: Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Package references on any given Pool.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * autoScaleEvaluationInterval `string`: This property is set only if the Pool automatically scales, i.e. enableAutoScale is true.
  * autoScaleFormula `string`: This property is set only if the Pool automatically scales, i.e. enableAutoScale is true.
  * autoScaleRun [AutoScaleRun](#autoscalerun)
  * certificateReferences `array`: For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * cloudServiceConfiguration [CloudServiceConfiguration](#cloudserviceconfiguration)
  * creationTime `string`
  * currentDedicatedNodes `integer`
  * currentLowPriorityNodes `integer`: Low-priority Compute Nodes which have been preempted are included in this count.
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * eTag `string`: This is an opaque string. You can use it to detect whether the Pool has changed between requests. In particular, you can be pass the ETag when updating a Pool to specify that your changes should take effect only if nobody else has modified the Pool in the meantime.
  * enableAutoScale `boolean`: If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula property is required and the Pool automatically resizes according to the formula. The default value is false.
  * enableInterNodeCommunication `boolean`: This imposes restrictions on which Compute Nodes can be assigned to the Pool. Specifying this value can reduce the chance of the requested number of Compute Nodes to be allocated in the Pool.
  * id `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case).
  * lastModified `string`: This is the last time at which the Pool level data, such as the targetDedicatedNodes or enableAutoscale settings, changed. It does not factor in node-level changes such as a Compute Node changing state.
  * maxTasksPerNode `integer`: The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the Pool or 256.
  * metadata `array`
    * items [MetadataItem](#metadataitem)
  * mountConfiguration `array`: This supports Azure Files, NFS, CIFS/SMB, and Blobfuse.
    * items [MountConfiguration](#mountconfiguration)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * resizeErrors `array`: This property is set only if one or more errors occurred during the last Pool resize, and only when the Pool allocationState is Steady.
    * items [ResizeError](#resizeerror)
  * resizeTimeout `string`: This is the timeout for the most recent resize operation. (The initial sizing when the Pool is created counts as a resize.) The default value is 15 minutes.
  * startTask [StartTask](#starttask)
  * state `string` (values: active, deleting)
  * stateTransitionTime `string`
  * stats [PoolStatistics](#poolstatistics)
  * targetDedicatedNodes `integer`
  * targetLowPriorityNodes `integer`
  * taskSchedulingPolicy [TaskSchedulingPolicy](#taskschedulingpolicy)
  * url `string`
  * userAccounts `array`
    * items [UserAccount](#useraccount)
  * virtualMachineConfiguration [VirtualMachineConfiguration](#virtualmachineconfiguration)
  * vmSize `string`: For information about available sizes of virtual machines in Pools, see Choose a VM size for Compute Nodes in an Azure Batch Pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).

### CloudPoolListResult
* The result of listing the Pools in an Account. `object`
  * odata.nextLink `string`
  * value `array`
    * items [CloudPool](#cloudpool)

### CloudServiceConfiguration
* The configuration for Compute Nodes in a Pool based on the Azure Cloud Services platform. `object`
  * osFamily **required** `string`: Possible values are:
  * osVersion `string`: The default value is * which specifies the latest operating system version for the specified OS family.

### CloudTask
* An Azure Batch Task. `object`: Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing.
  * affinityInfo [AffinityInformation](#affinityinformation)
  * applicationPackageReferences `array`: Application packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced package is already on the Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * authenticationTokenSettings [AuthenticationTokenSettings](#authenticationtokensettings)
  * commandLine `string`: For multi-instance Tasks, the command line is executed as the primary Task, after the primary Task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
  * constraints [TaskConstraints](#taskconstraints)
  * containerSettings [TaskContainerSettings](#taskcontainersettings)
  * creationTime `string`
  * dependsOn [TaskDependencies](#taskdependencies)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * eTag `string`: This is an opaque string. You can use it to detect whether the Task has changed between requests. In particular, you can be pass the ETag when updating a Task to specify that your changes should take effect only if nobody else has modified the Task in the meantime.
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * executionInfo [TaskExecutionInformation](#taskexecutioninformation)
  * exitConditions [ExitConditions](#exitconditions)
  * id `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters.
  * lastModified `string`
  * multiInstanceSettings [MultiInstanceSettings](#multiinstancesettings)
  * nodeInfo [ComputeNodeInformation](#computenodeinformation)
  * outputFiles `array`: For multi-instance Tasks, the files will only be uploaded from the Compute Node on which the primary Task is executed.
    * items [OutputFile](#outputfile)
  * previousState [TaskState](#taskstate)
  * previousStateTransitionTime `string`: This property is not set if the Task is in its initial Active state.
  * resourceFiles `array`: For multi-instance Tasks, the resource files will only be downloaded to the Compute Node on which the primary Task is executed. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers.
    * items [ResourceFile](#resourcefile)
  * state [TaskState](#taskstate)
  * stateTransitionTime `string`
  * stats [TaskStatistics](#taskstatistics)
  * url `string`
  * userIdentity [UserIdentity](#useridentity)

### CloudTaskListResult
* The result of listing the Tasks in a Job. `object`
  * odata.nextLink `string`
  * value `array`
    * items [CloudTask](#cloudtask)

### CloudTaskListSubtasksResult
* The result of listing the subtasks of a Task. `object`
  * value `array`
    * items [SubtaskInformation](#subtaskinformation)

### ComputeNode
* A Compute Node in the Batch service. `object`
  * affinityId `string`: Note that this is just a soft affinity. If the target Compute Node is busy or unavailable at the time the Task is scheduled, then the Task will be scheduled elsewhere.
  * allocationTime `string`: This is the time when the Compute Node was initially allocated and doesn't change once set. It is not updated when the Compute Node is service healed or preempted.
  * certificateReferences `array`: For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * endpointConfiguration [ComputeNodeEndpointConfiguration](#computenodeendpointconfiguration)
  * errors `array`
    * items [ComputeNodeError](#computenodeerror)
  * id `string`: Every Compute Node that is added to a Pool is assigned a unique ID. Whenever a Compute Node is removed from a Pool, all of its local files are deleted, and the ID is reclaimed and could be reused for new Compute Nodes.
  * ipAddress `string`: Every Compute Node that is added to a Pool is assigned a unique IP address. Whenever a Compute Node is removed from a Pool, all of its local files are deleted, and the IP address is reclaimed and could be reused for new Compute Nodes.
  * isDedicated `boolean`
  * lastBootTime `string`: This property may not be present if the Compute Node state is unusable.
  * nodeAgentInfo [NodeAgentInformation](#nodeagentinformation)
  * recentTasks `array`: This property is present only if at least one Task has run on this Compute Node since it was assigned to the Pool.
    * items [TaskInformation](#taskinformation)
  * runningTasksCount `integer`
  * schedulingState `string` (values: enabled, disabled)
  * startTask [StartTask](#starttask)
  * startTaskInfo [StartTaskInformation](#starttaskinformation)
  * state `string` (values: idle, rebooting, reimaging, running, unusable, creating, starting, waitingforstarttask, starttaskfailed, unknown, leavingpool, offline, preempted): The low-priority Compute Node has been preempted. Tasks which were running on the Compute Node when it was preempted will be rescheduled when another Compute Node becomes available.
  * stateTransitionTime `string`
  * totalTasksRun `integer`
  * totalTasksSucceeded `integer`
  * url `string`
  * vmSize `string`: For information about available sizes of virtual machines in Pools, see Choose a VM size for Compute Nodes in an Azure Batch Pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).

### ComputeNodeDeallocationOption
* Determines what to do with a Compute Node and its running task(s) after it has been selected for deallocation. `string` (values: requeue, terminate, taskcompletion, retaineddata): The default value is requeue.

### ComputeNodeEndpointConfiguration
* The endpoint configuration for the Compute Node. `object`
  * inboundEndpoints **required** `array`
    * items [InboundEndpoint](#inboundendpoint)

### ComputeNodeError
* An error encountered by a Compute Node. `object`
  * code `string`
  * errorDetails `array`
    * items [NameValuePair](#namevaluepair)
  * message `string`

### ComputeNodeGetRemoteLoginSettingsResult
* The remote login settings for a Compute Node. `object`
  * remoteLoginIPAddress **required** `string`
  * remoteLoginPort **required** `integer`

### ComputeNodeInformation
* Information about the Compute Node on which a Task ran. `object`
  * affinityId `string`
  * nodeId `string`
  * nodeUrl `string`
  * poolId `string`
  * taskRootDirectory `string`
  * taskRootDirectoryUrl `string`

### ComputeNodeListResult
* The result of listing the Compute Nodes in a Pool. `object`
  * odata.nextLink `string`
  * value `array`
    * items [ComputeNode](#computenode)

### ComputeNodeUser
* A user Account for RDP or SSH access on a Compute Node. `object`
  * expiryTime `string`: If omitted, the default is 1 day from the current time. For Linux Compute Nodes, the expiryTime has a precision up to a day.
  * isAdmin `boolean`: The default value is false.
  * name **required** `string`
  * password `string`: The password is required for Windows Compute Nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows Image reference). For Linux Compute Nodes, the password can optionally be specified along with the sshPublicKey property.
  * sshPublicKey `string`: The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux Compute Nodes. If this is specified for a Windows Compute Node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).

### ContainerConfiguration
* The configuration for container-enabled Pools. `object`
  * containerImageNames `array`: This is the full Image reference, as would be specified to "docker pull". An Image will be sourced from the default Docker registry unless the Image is fully qualified with an alternative registry.
    * items `string`
  * containerRegistries `array`: If any Images must be downloaded from a private registry which requires credentials, then those credentials must be provided here.
    * items [ContainerRegistry](#containerregistry)
  * type **required** `string` (values: dockerCompatible)

### ContainerRegistry
* A private container registry. `object`
  * password **required** `string`
  * registryServer `string`: If omitted, the default is "docker.io".
  * username **required** `string`

### DataDisk
* Settings which will be used by the data disks associated to Compute Nodes in the Pool. When using attached data disks, you need to mount and format the disks from within a VM to use them. `object`
  * caching [CachingType](#cachingtype)
  * diskSizeGB **required** `integer`
  * lun **required** `integer`: The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun.
  * storageAccountType [StorageAccountType](#storageaccounttype)

### DeleteCertificateError
* An error encountered by the Batch service when deleting a Certificate. `object`
  * code `string`
  * message `string`
  * values `array`: This list includes details such as the active Pools and Compute Nodes referencing this Certificate. However, if a large number of resources reference the Certificate, the list contains only about the first hundred.
    * items [NameValuePair](#namevaluepair)

### ElevationLevel
* The elevation level of the user. `string` (values: nonadmin, admin)

### EnvironmentSetting
* An environment variable to be set on a Task process. `object`
  * name **required** `string`
  * value `string`

### ErrorCategory
* The category of the error. `string` (values: usererror, servererror)

### ErrorMessage
* An error message received in an Azure Batch error response. `object`
  * lang `string`
  * value `string`

### ExitCodeMapping
* How the Batch service should respond if a Task exits with a particular exit code. `object`
  * code **required** `integer`
  * exitOptions **required** [ExitOptions](#exitoptions)

### ExitCodeRangeMapping
* A range of exit codes and how the Batch service should respond to exit codes within that range. `object`
  * end **required** `integer`
  * exitOptions **required** [ExitOptions](#exitoptions)
  * start **required** `integer`

### ExitConditions
* Specifies how the Batch service should respond when the Task completes. `object`
  * default [ExitOptions](#exitoptions)
  * exitCodeRanges `array`
    * items [ExitCodeRangeMapping](#exitcoderangemapping)
  * exitCodes `array`
    * items [ExitCodeMapping](#exitcodemapping)
  * fileUploadError [ExitOptions](#exitoptions)
  * preProcessingError [ExitOptions](#exitoptions)

### ExitOptions
* Specifies how the Batch service responds to a particular exit condition. `object`
  * dependencyAction `string` (values: satisfy, block): Possible values are 'satisfy' (allowing dependent tasks to progress) and 'block' (dependent tasks continue to wait). Batch does not yet support cancellation of dependent tasks.
  * jobAction `string` (values: none, disable, terminate): The default is none for exit code 0 and terminate for all other exit conditions. If the Job's onTaskFailed property is noaction, then specifying this property returns an error and the add Task request fails with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).

### FileProperties
* The properties of a file on a Compute Node. `object`
  * contentLength **required** `integer`
  * contentType `string`
  * creationTime `string`: The creation time is not returned for files on Linux Compute Nodes.
  * fileMode `string`: The file mode is returned only for files on Linux Compute Nodes.
  * lastModified **required** `string`

### ImageInformation
* A reference to the Azure Virtual Machines Marketplace Image and additional information about the Image. `object`
  * batchSupportEndOfLife `string`
  * capabilities `array`: Not every capability of the Image is listed. Capabilities in this list are considered of special interest and are generally related to integration with other features in the Azure Batch service.
    * items `string`
  * imageReference **required** [ImageReference](#imagereference)
  * nodeAgentSKUId **required** `string`
  * osType **required** `string` (values: linux, windows)
  * verificationType **required** `string` (values: verified, unverified)

### ImageReference
* A reference to an Azure Virtual Machines Marketplace Image or a custom Azure Virtual Machine Image. To get the list of all Azure Marketplace Image references verified by Azure Batch, see the 'List supported Images' operation. `object`
  * offer `string`: For example, UbuntuServer or WindowsServer.
  * publisher `string`: For example, Canonical or MicrosoftWindowsServer.
  * sku `string`: For example, 18.04-LTS or 2019-Datacenter.
  * version `string`: A value of 'latest' can be specified to select the latest version of an Image. If omitted, the default is 'latest'.
  * virtualMachineImageId `string`: This property is mutually exclusive with other ImageReference properties. For Virtual Machine Image it must be in the same region and subscription as the Azure Batch account. For SIG image it must have replicas in the same region as the Azure Batch account. For information about the firewall settings for the Batch Compute Node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration.

### InboundEndpoint
* An inbound endpoint on a Compute Node. `object`
  * backendPort **required** `integer`
  * frontendPort **required** `integer`
  * name **required** `string`
  * protocol **required** [InboundEndpointProtocol](#inboundendpointprotocol)
  * publicFQDN **required** `string`
  * publicIPAddress **required** `string`

### InboundEndpointProtocol
* The protocol of the endpoint. `string` (values: tcp, udp)

### InboundNATPool
* A inbound NAT Pool that can be used to address specific ports on Compute Nodes in a Batch Pool externally. `object`
  * backendPort **required** `integer`: This must be unique within a Batch Pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
  * frontendPortRangeEnd **required** `integer`: Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a Pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
  * frontendPortRangeStart **required** `integer`: Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a Pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
  * name **required** `string`: The name must be unique within a Batch Pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
  * networkSecurityGroupRules `array`: The maximum number of rules that can be specified across all the endpoints on a Batch Pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400.
    * items [NetworkSecurityGroupRule](#networksecuritygrouprule)
  * protocol **required** [InboundEndpointProtocol](#inboundendpointprotocol)

### JobAddParameter
* An Azure Batch Job to add. `object`
  * commonEnvironmentSettings `array`: Individual Tasks can override an environment setting specified here by specifying the same setting name with a different value.
    * items [EnvironmentSetting](#environmentsetting)
  * constraints [JobConstraints](#jobconstraints)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * id **required** `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case).
  * jobManagerTask [JobManagerTask](#jobmanagertask)
  * jobPreparationTask [JobPreparationTask](#jobpreparationtask)
  * jobReleaseTask [JobReleaseTask](#jobreleasetask)
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * networkConfiguration [JobNetworkConfiguration](#jobnetworkconfiguration)
  * onAllTasksComplete [OnAllTasksComplete](#onalltaskscomplete)
  * onTaskFailure [OnTaskFailure](#ontaskfailure)
  * poolInfo **required** [PoolInformation](#poolinformation)
  * priority `integer`: Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
  * usesTaskDependencies `boolean`

### JobConstraints
* The execution constraints for a Job. `object`
  * maxTaskRetryCount `integer`: Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries).
  * maxWallClockTime `string`: If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run.

### JobDisableParameter
* Options when disabling a Job. `object`
  * disableTasks **required** `string` (values: requeue, terminate, wait)

### JobExecutionInformation
* Contains information about the execution of a Job in the Azure Batch service. `object`
  * endTime `string`: This property is set only if the Job is in the completed state.
  * poolId `string`: This element contains the actual Pool where the Job is assigned. When you get Job details from the service, they also contain a poolInfo element, which contains the Pool configuration data from when the Job was added or updated. That poolInfo element may also contain a poolId element. If it does, the two IDs are the same. If it does not, it means the Job ran on an auto Pool, and this property contains the ID of that auto Pool.
  * schedulingError [JobSchedulingError](#jobschedulingerror)
  * startTime **required** `string`: This is the time at which the Job was created.
  * terminateReason `string`: This property is set only if the Job is in the completed state. If the Batch service terminates the Job, it sets the reason as follows: JMComplete - the Job Manager Task completed, and killJobOnCompletion was set to true. MaxWallClockTimeExpiry - the Job reached its maxWallClockTime constraint. TerminateJobSchedule - the Job ran as part of a schedule, and the schedule terminated. AllTasksComplete - the Job's onAllTasksComplete attribute is set to terminatejob, and all Tasks in the Job are complete. TaskFailed - the Job's onTaskFailure attribute is set to performExitOptionsJobAction, and a Task in the Job failed with an exit condition that specified a jobAction of terminatejob. Any other string is a user-defined reason specified in a call to the 'Terminate a Job' operation.

### JobManagerTask
* Specifies details of a Job Manager Task. `object`: The Job Manager Task is automatically started when the Job is created. The Batch service tries to schedule the Job Manager Task before any other Tasks in the Job. When shrinking a Pool, the Batch service tries to preserve Nodes where Job Manager Tasks are running for as long as possible (that is, Compute Nodes running 'normal' Tasks are removed before Compute Nodes running Job Manager Tasks). When a Job Manager Task fails and needs to be restarted, the system tries to schedule it at the highest priority. If there are no idle Compute Nodes available, the system may terminate one of the running Tasks in the Pool and return it to the queue in order to make room for the Job Manager Task to restart. Note that a Job Manager Task in one Job does not have priority over Tasks in other Jobs. Across Jobs, only Job level priorities are observed. For example, if a Job Manager in a priority 0 Job needs to be restarted, it will not displace Tasks of a priority 1 Job. Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing.
  * allowLowPriorityNode `boolean`: The default value is true.
  * applicationPackageReferences `array`: Application Packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced Application Package is already on the Compute Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Application Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * authenticationTokenSettings [AuthenticationTokenSettings](#authenticationtokensettings)
  * commandLine **required** `string`: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
  * constraints [TaskConstraints](#taskconstraints)
  * containerSettings [TaskContainerSettings](#taskcontainersettings)
  * displayName `string`: It need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * id **required** `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters.
  * killJobOnCompletion `boolean`: If true, when the Job Manager Task completes, the Batch service marks the Job as complete. If any Tasks are still running at this time (other than Job Release), those Tasks are terminated. If false, the completion of the Job Manager Task does not affect the Job status. In this case, you should either use the onAllTasksComplete attribute to terminate the Job, or have a client or user terminate the Job explicitly. An example of this is if the Job Manager creates a set of Tasks but then takes no further role in their execution. The default value is true. If you are using the onAllTasksComplete and onTaskFailure attributes to control Job lifetime, and using the Job Manager Task only to create the Tasks for the Job (not to monitor progress), then it is important to set killJobOnCompletion to false.
  * outputFiles `array`: For multi-instance Tasks, the files will only be uploaded from the Compute Node on which the primary Task is executed.
    * items [OutputFile](#outputfile)
  * resourceFiles `array`: Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers.
    * items [ResourceFile](#resourcefile)
  * runExclusive `boolean`: If true, no other Tasks will run on the same Node for as long as the Job Manager is running. If false, other Tasks can run simultaneously with the Job Manager on a Compute Node. The Job Manager Task counts normally against the Compute Node's concurrent Task limit, so this is only relevant if the Compute Node allows multiple concurrent Tasks. The default value is true.
  * userIdentity [UserIdentity](#useridentity)

### JobNetworkConfiguration
* The network configuration for the Job. `object`
  * subnetId **required** `string`: The virtual network must be in the same region and subscription as the Azure Batch Account. The specified subnet should have enough free IP addresses to accommodate the number of Compute Nodes which will run Tasks from the Job. This can be up to the number of Compute Nodes in the Pool. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet so that Azure Batch service can schedule Tasks on the Nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the Nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the Compute Nodes to unusable. This is of the form /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication from the Azure Batch service. For Pools created with a Virtual Machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. Port 443 is also required to be open for outbound connections for communications to Azure Storage. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration

### JobPatchParameter
* The set of changes to be made to a Job. `object`
  * constraints [JobConstraints](#jobconstraints)
  * metadata `array`: If omitted, the existing Job metadata is left unchanged.
    * items [MetadataItem](#metadataitem)
  * onAllTasksComplete [OnAllTasksComplete](#onalltaskscomplete)
  * poolInfo [PoolInformation](#poolinformation)
  * priority `integer`: Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the Job is left unchanged.

### JobPreparationAndReleaseTaskExecutionInformation
* The status of the Job Preparation and Job Release Tasks on a Compute Node. `object`
  * jobPreparationTaskExecutionInfo [JobPreparationTaskExecutionInformation](#jobpreparationtaskexecutioninformation)
  * jobReleaseTaskExecutionInfo [JobReleaseTaskExecutionInformation](#jobreleasetaskexecutioninformation)
  * nodeId `string`
  * nodeUrl `string`
  * poolId `string`

### JobPreparationTask
* A Job Preparation Task to run before any Tasks of the Job on any given Compute Node. `object`: You can use Job Preparation to prepare a Node to run Tasks for the Job. Activities commonly performed in Job Preparation include: Downloading common resource files used by all the Tasks in the Job. The Job Preparation Task can download these common resource files to the shared location on the Node. (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service on the Node so that all Tasks of that Job can communicate with it. If the Job Preparation Task fails (that is, exhausts its retry count before exiting with exit code 0), Batch will not run Tasks of this Job on the Node. The Compute Node remains ineligible to run Tasks of this Job until it is reimaged. The Compute Node remains active and can be used for other Jobs. The Job Preparation Task can run multiple times on the same Node. Therefore, you should write the Job Preparation Task to handle re-execution. If the Node is rebooted, the Job Preparation Task is run again on the Compute Node before scheduling any other Task of the Job, if rerunOnNodeRebootAfterSuccess is true or if the Job Preparation Task did not previously complete. If the Node is reimaged, the Job Preparation Task is run again before scheduling any Task of the Job. Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing.
  * commandLine **required** `string`: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
  * constraints [TaskConstraints](#taskconstraints)
  * containerSettings [TaskContainerSettings](#taskcontainersettings)
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * id `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobpreparation'. No other Task in the Job can have the same ID as the Job Preparation Task. If you try to submit a Task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobPreparationTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict).
  * rerunOnNodeRebootAfterSuccess `boolean`: The Job Preparation Task is always rerun if a Compute Node is reimaged, or if the Job Preparation Task did not complete (e.g. because the reboot occurred while the Task was running). Therefore, you should always write a Job Preparation Task to be idempotent and to behave correctly if run multiple times. The default value is true.
  * resourceFiles `array`: Files listed under this element are located in the Task's working directory.  There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers.
    * items [ResourceFile](#resourcefile)
  * userIdentity [UserIdentity](#useridentity)
  * waitForSuccess `boolean`: If true and the Job Preparation Task fails on a Node, the Batch service retries the Job Preparation Task up to its maximum retry count (as specified in the constraints element). If the Task has still not completed successfully after all retries, then the Batch service will not schedule Tasks of the Job to the Node. The Node remains active and eligible to run Tasks of other Jobs. If false, the Batch service will not wait for the Job Preparation Task to complete. In this case, other Tasks of the Job can start executing on the Compute Node while the Job Preparation Task is still running; and even if the Job Preparation Task fails, new Tasks will continue to be scheduled on the Compute Node. The default value is true.

### JobPreparationTaskExecutionInformation
* Contains information about the execution of a Job Preparation Task on a Compute Node. `object`
  * containerInfo [TaskContainerExecutionInformation](#taskcontainerexecutioninformation)
  * endTime `string`: This property is set only if the Task is in the Completed state.
  * exitCode `integer`: This parameter is returned only if the Task is in the completed state. The exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. Note that the exit code may also be generated by the Compute Node operating system, such as when a process is forcibly terminated.
  * failureInfo [TaskFailureInformation](#taskfailureinformation)
  * lastRetryTime `string`: This property is set only if the Task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the Task has been restarted for reasons other than retry; for example, if the Compute Node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not.
  * result [TaskExecutionResult](#taskexecutionresult)
  * retryCount **required** `integer`: Task application failures (non-zero exit code) are retried, pre-processing errors (the Task could not be run) and file upload errors are not retried. The Batch service will retry the Task up to the limit specified by the constraints.
  * startTime **required** `string`: If the Task has been restarted or retried, this is the most recent time at which the Task started running.
  * state **required** `string` (values: running, completed)
  * taskRootDirectory `string`
  * taskRootDirectoryUrl `string`

### JobReleaseTask
* A Job Release Task to run on Job completion on any Compute Node where the Job has run. `object`: The Job Release Task runs when the Job ends, because of one of the following: The user calls the Terminate Job API, or the Delete Job API while the Job is still active, the Job's maximum wall clock time constraint is reached, and the Job is still active, or the Job's Job Manager Task completed, and the Job is configured to terminate when the Job Manager completes. The Job Release Task runs on each Node where Tasks of the Job have run and the Job Preparation Task ran and completed. If you reimage a Node after it has run the Job Preparation Task, and the Job ends without any further Tasks of the Job running on that Node (and hence the Job Preparation Task does not re-run), then the Job Release Task does not run on that Compute Node. If a Node reboots while the Job Release Task is still running, the Job Release Task runs again when the Compute Node starts up. The Job is not marked as complete until all Job Release Tasks have completed. The Job Release Task runs in the background. It does not occupy a scheduling slot; that is, it does not count towards the maxTasksPerNode limit specified on the Pool.
  * commandLine **required** `string`: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
  * containerSettings [TaskContainerSettings](#taskcontainersettings)
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * id `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobrelease'. No other Task in the Job can have the same ID as the Job Release Task. If you try to submit a Task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict).
  * maxWallClockTime `string`
  * resourceFiles `array`: Files listed under this element are located in the Task's working directory.
    * items [ResourceFile](#resourcefile)
  * retentionTime `string`: The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted.
  * userIdentity [UserIdentity](#useridentity)

### JobReleaseTaskExecutionInformation
* Contains information about the execution of a Job Release Task on a Compute Node. `object`
  * containerInfo [TaskContainerExecutionInformation](#taskcontainerexecutioninformation)
  * endTime `string`: This property is set only if the Task is in the Completed state.
  * exitCode `integer`: This parameter is returned only if the Task is in the completed state. The exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. Note that the exit code may also be generated by the Compute Node operating system, such as when a process is forcibly terminated.
  * failureInfo [TaskFailureInformation](#taskfailureinformation)
  * result [TaskExecutionResult](#taskexecutionresult)
  * startTime **required** `string`: If the Task has been restarted or retried, this is the most recent time at which the Task started running.
  * state **required** `string` (values: running, completed)
  * taskRootDirectory `string`
  * taskRootDirectoryUrl `string`

### JobScheduleAddParameter
* A Job Schedule that allows recurring Jobs by specifying when to run Jobs and a specification used to create each Job. `object`
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * id **required** `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case).
  * jobSpecification **required** [JobSpecification](#jobspecification)
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * schedule **required** [Schedule](#schedule)

### JobScheduleExecutionInformation
* Contains information about Jobs that have been and will be run under a Job Schedule. `object`
  * endTime `string`: This property is set only if the Job Schedule is in the completed state.
  * nextRunTime `string`: This property is meaningful only if the schedule is in the active state when the time comes around. For example, if the schedule is disabled, no Job will be created at nextRunTime unless the Job is enabled before then.
  * recentJob [RecentJob](#recentjob)

### JobSchedulePatchParameter
* The set of changes to be made to a Job Schedule. `object`
  * jobSpecification [JobSpecification](#jobspecification)
  * metadata `array`: If you do not specify this element, existing metadata is left unchanged.
    * items [MetadataItem](#metadataitem)
  * schedule [Schedule](#schedule)

### JobScheduleState
* The state of the Job Schedule. `string` (values: active, completed, disabled, terminating, deleting)

### JobScheduleStatistics
* Resource usage statistics for a Job Schedule. `object`
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
  * waitTime **required** `string`: This value is only reported in the Account lifetime statistics; it is not included in the Job statistics.
  * wallClockTime **required** `string`: The wall clock time is the elapsed time from when the Task started running on a Compute Node to when it finished (or to the last time the statistics were updated, if the Task had not finished by then). If a Task was retried, this includes the wall clock time of all the Task retries.
  * writeIOGiB **required** `number`
  * writeIOps **required** `integer`

### JobScheduleUpdateParameter
* The set of changes to be made to a Job Schedule. `object`
  * jobSpecification **required** [JobSpecification](#jobspecification)
  * metadata `array`: If you do not specify this element, it takes the default value of an empty list; in effect, any existing metadata is deleted.
    * items [MetadataItem](#metadataitem)
  * schedule **required** [Schedule](#schedule)

### JobSchedulingError
* An error encountered by the Batch service when scheduling a Job. `object`
  * category **required** [ErrorCategory](#errorcategory)
  * code `string`
  * details `array`
    * items [NameValuePair](#namevaluepair)
  * message `string`

### JobSpecification
* Specifies details of the Jobs to be created on a schedule. `object`
  * commonEnvironmentSettings `array`: Individual Tasks can override an environment setting specified here by specifying the same setting name with a different value.
    * items [EnvironmentSetting](#environmentsetting)
  * constraints [JobConstraints](#jobconstraints)
  * displayName `string`: The name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * jobManagerTask [JobManagerTask](#jobmanagertask)
  * jobPreparationTask [JobPreparationTask](#jobpreparationtask)
  * jobReleaseTask [JobReleaseTask](#jobreleasetask)
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * networkConfiguration [JobNetworkConfiguration](#jobnetworkconfiguration)
  * onAllTasksComplete [OnAllTasksComplete](#onalltaskscomplete)
  * onTaskFailure [OnTaskFailure](#ontaskfailure)
  * poolInfo **required** [PoolInformation](#poolinformation)
  * priority `integer`: Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all Jobs under the Job Schedule. You can update a Job's priority after it has been created using by using the update Job API.
  * usesTaskDependencies `boolean`

### JobState
* The state of the Job. `string` (values: active, disabling, disabled, enabling, terminating, completed, deleting)

### JobStatistics
* Resource usage statistics for a Job. `object`
  * kernelCPUTime **required** `string`
  * lastUpdateTime **required** `string`
  * numFailedTasks **required** `integer`: A Task fails if it exhausts its maximum retry count without returning exit code 0.
  * numSucceededTasks **required** `integer`: A Task completes successfully if it returns exit code 0.
  * numTaskRetries **required** `integer`
  * readIOGiB **required** `number`
  * readIOps **required** `integer`
  * startTime **required** `string`
  * url **required** `string`
  * userCPUTime **required** `string`
  * waitTime **required** `string`: The wait time for a Task is defined as the elapsed time between the creation of the Task and the start of Task execution. (If the Task is retried due to failures, the wait time is the time to the most recent Task execution.) This value is only reported in the Account lifetime statistics; it is not included in the Job statistics.
  * wallClockTime **required** `string`:  The wall clock time is the elapsed time from when the Task started running on a Compute Node to when it finished (or to the last time the statistics were updated, if the Task had not finished by then). If a Task was retried, this includes the wall clock time of all the Task retries.
  * writeIOGiB **required** `number`
  * writeIOps **required** `integer`

### JobTerminateParameter
* Options when terminating a Job. `object`
  * terminateReason `string`

### JobUpdateParameter
* The set of changes to be made to a Job. `object`
  * constraints [JobConstraints](#jobconstraints)
  * metadata `array`: If omitted, it takes the default value of an empty list; in effect, any existing metadata is deleted.
    * items [MetadataItem](#metadataitem)
  * onAllTasksComplete [OnAllTasksComplete](#onalltaskscomplete)
  * poolInfo **required** [PoolInformation](#poolinformation)
  * priority `integer`: Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, it is set to the default value 0.

### LinuxUserConfiguration
* Properties used to create a user Account on a Linux Compute Node. `object`
  * gid `integer`: The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid.
  * sshPrivateKey `string`: The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between Compute Nodes in a Linux Pool when the Pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between Compute Nodes (no modification of the user's .ssh directory is done).
  * uid `integer`: The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid.

### MetadataItem
* A name-value pair associated with a Batch service resource. `object`: The Batch service does not assign any meaning to this metadata; it is solely for the use of user code.
  * name **required** `string`
  * value **required** `string`

### MountConfiguration
* The file system to mount on each node. `object`
  * azureBlobFileSystemConfiguration [AzureBlobFileSystemConfiguration](#azureblobfilesystemconfiguration)
  * azureFileShareConfiguration [AzureFileShareConfiguration](#azurefileshareconfiguration)
  * cifsMountConfiguration [CIFSMountConfiguration](#cifsmountconfiguration)
  * nfsMountConfiguration [NFSMountConfiguration](#nfsmountconfiguration)

### MultiInstanceSettings
* Settings which specify how to run a multi-instance Task. `object`: Multi-instance Tasks are commonly used to support MPI Tasks. In the MPI case, if any of the subtasks fail (for example due to exiting with a non-zero exit code) the entire multi-instance Task fails. The multi-instance Task is then terminated and retried, up to its retry limit.
  * commonResourceFiles `array`: The difference between common resource files and Task resource files is that common resource files are downloaded for all subtasks including the primary, whereas Task resource files are downloaded only for the primary. Also note that these resource files are not downloaded to the Task working directory, but instead are downloaded to the Task root directory (one directory above the working directory).  There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers.
    * items [ResourceFile](#resourcefile)
  * coordinationCommandLine **required** `string`: A typical coordination command line launches a background service and verifies that the service is ready to process inter-node messages.
  * numberOfInstances `integer`: If omitted, the default is 1.

### NFSMountConfiguration
* Information used to connect to an NFS file system. `object`
  * mountOptions `string`: These are 'net use' options in Windows and 'mount' options in Linux.
  * relativeMountPath **required** `string`: All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
  * source **required** `string`

### NameValuePair
* Represents a name-value pair. `object`
  * name `string`
  * value `string`

### NetworkConfiguration
* NetworkConfiguration `object`: The network configuration for a Pool.
  * dynamicVNetAssignmentScope `string` (values: none, job)
  * endpointConfiguration [PoolEndpointConfiguration](#poolendpointconfiguration)
  * publicIPs `array`: The number of IPs specified here limits the maximum size of the Pool - 50 dedicated nodes or 20 low-priority nodes can be allocated for each public IP. For example, a pool needing 150 dedicated VMs would need at least 3 public IPs specified. Each element of this collection is of the form: /subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Network/publicIPAddresses/{ip}.
    * items `string`
  * subnetId `string`: The virtual network must be in the same region and subscription as the Azure Batch Account. The specified subnet should have enough free IP addresses to accommodate the number of Compute Nodes in the Pool. If the subnet doesn't have enough free IP addresses, the Pool will partially allocate Nodes, and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule Tasks on the Nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the Nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the Compute Nodes to unusable. For Pools created with virtualMachineConfiguration only ARM virtual networks ('Microsoft.Network/virtualNetworks') are supported, but for Pools created with cloudServiceConfiguration both ARM and classic virtual networks are supported. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For Pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For Pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration

### NetworkSecurityGroupRule
* A network security group rule to apply to an inbound endpoint. `object`
  * access **required** `string` (values: allow, deny)
  * priority **required** `integer`: Priorities within a Pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 3500. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
  * sourceAddressPrefix **required** `string`: Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400.
  * sourcePortRanges `array`: Valid values are '*' (for all ports 0 - 65535), a specific port (i.e. 22), or a port range (i.e. 100-200). The ports must be in the range of 0 to 65535. Each entry in this collection must not overlap any other entry (either a range or an individual port). If any other values are provided the request fails with HTTP status code 400. The default value is '*'.
    * items `string`

### NodeAgentInformation
* Information about the Compute Node agent. `object`: The Batch Compute Node agent is a program that runs on each Compute Node in the Pool and provides Batch capability on the Compute Node.
  * lastUpdateTime **required** `string`: This is the most recent time that the Compute Node agent was updated to a new version.
  * version **required** `string`: This version number can be checked against the Compute Node agent release notes located at https://github.com/Azure/Batch/blob/master/changelogs/nodeagent/CHANGELOG.md.

### NodeCounts
* The number of Compute Nodes in each Compute Node state. `object`
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
* Options for disabling scheduling on a Compute Node. `object`
  * nodeDisableSchedulingOption `string` (values: requeue, terminate, taskcompletion): The default value is requeue.

### NodeFile
* Information about a file or directory on a Compute Node. `object`
  * isDirectory `boolean`
  * name `string`
  * properties [FileProperties](#fileproperties)
  * url `string`

### NodeFileListResult
* The result of listing the files on a Compute Node, or the files associated with a Task on a Compute Node. `object`
  * odata.nextLink `string`
  * value `array`
    * items [NodeFile](#nodefile)

### NodeRebootParameter
* Options for rebooting a Compute Node. `object`
  * nodeRebootOption `string` (values: requeue, terminate, taskcompletion, retaineddata): The default value is requeue.

### NodeReimageParameter
* Options for reimaging a Compute Node. `object`
  * nodeReimageOption `string` (values: requeue, terminate, taskcompletion, retaineddata): The default value is requeue.

### NodeRemoveParameter
* Options for removing Compute Nodes from a Pool. `object`
  * nodeDeallocationOption [ComputeNodeDeallocationOption](#computenodedeallocationoption)
  * nodeList **required** `array`
    * items `string`
  * resizeTimeout `string`: The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).

### NodeUpdateUserParameter
* The set of changes to be made to a user Account on a Compute Node. `object`
  * expiryTime `string`: If omitted, the default is 1 day from the current time. For Linux Compute Nodes, the expiryTime has a precision up to a day.
  * password `string`: The password is required for Windows Compute Nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows Image reference). For Linux Compute Nodes, the password can optionally be specified along with the sshPublicKey property. If omitted, any existing password is removed.
  * sshPublicKey `string`: The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux Compute Nodes. If this is specified for a Windows Compute Node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If omitted, any existing SSH public key is removed.

### OnAllTasksComplete
* The action the Batch service should take when all Tasks in the Job are in the completed state. `string` (values: noaction, terminatejob)

### OnTaskFailure
* The action the Batch service should take when any Task in the Job fails. `string` (values: noaction, performexitoptionsjobaction): A Task is considered to have failed if has a failureInfo. A failureInfo is set if the Task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the Task, for example due to a resource file download error. The default is noaction.

### OutputFile
* A specification for uploading files from an Azure Batch Compute Node to another location after the Batch service has finished executing the Task process. `object`
  * destination **required** [OutputFileDestination](#outputfiledestination)
  * filePattern **required** `string`: Both relative and absolute paths are supported. Relative paths are relative to the Task working directory. The following wildcards are supported: * matches 0 or more characters (for example pattern abc* would match abc or abcdef), ** matches any directory, ? matches any single character, [abc] matches one character in the brackets, and [a-c] matches one character in the range. Brackets can include a negation to match any character not specified (for example [!abc] matches any character but a, b, or c). If a file name starts with "." it is ignored by default but may be matched by specifying it explicitly (for example *.gif will not match .a.gif, but .*.gif will). A simple example: **\*.txt matches any file that does not start in '.' and ends with .txt in the Task working directory or any subdirectory. If the filename contains a wildcard character it can be escaped using brackets (for example abc[*] would match a file named abc*). Note that both \ and / are treated as directory separators on Windows, but only / is on Linux. Environment variables (%var% on Windows or $var on Linux) are expanded prior to the pattern being applied.
  * uploadOptions **required** [OutputFileUploadOptions](#outputfileuploadoptions)

### OutputFileBlobContainerDestination
* Specifies a file upload destination within an Azure blob storage container. `object`
  * containerUrl **required** `string`: The URL must include a Shared Access Signature (SAS) granting write permissions to the container.
  * path `string`: If filePattern refers to a specific file (i.e. contains no wildcards), then path is the name of the blob to which to upload that file. If filePattern contains one or more wildcards (and therefore may match multiple files), then path is the name of the blob virtual directory (which is prepended to each blob name) to which to upload the file(s). If omitted, file(s) are uploaded to the root of the container with a blob name matching their file name.

### OutputFileDestination
* The destination to which a file should be uploaded. `object`
  * container [OutputFileBlobContainerDestination](#outputfileblobcontainerdestination)

### OutputFileUploadCondition
* The conditions under which a Task output file or set of files should be uploaded. `string` (values: tasksuccess, taskfailure, taskcompletion)

### OutputFileUploadOptions
* Details about an output file upload operation, including under what conditions to perform the upload. `object`
  * uploadCondition **required** [OutputFileUploadCondition](#outputfileuploadcondition)

### PoolAddParameter
* A Pool in the Azure Batch service to add. `object`
  * applicationLicenses `array`: The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, Pool creation will fail.
    * items `string`
  * applicationPackageReferences `array`: Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Package references on any given Pool.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * autoScaleEvaluationInterval `string`: The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * autoScaleFormula `string`: This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the Pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see 'Automatically scale Compute Nodes in an Azure Batch Pool' (https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/).
  * certificateReferences `array`: For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * cloudServiceConfiguration [CloudServiceConfiguration](#cloudserviceconfiguration)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * enableAutoScale `boolean`: If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula property is required and the Pool automatically resizes according to the formula. The default value is false.
  * enableInterNodeCommunication `boolean`: Enabling inter-node communication limits the maximum size of the Pool due to deployment restrictions on the Compute Nodes of the Pool. This may result in the Pool not reaching its desired size. The default value is false.
  * id **required** `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two Pool IDs within an Account that differ only by case).
  * maxTasksPerNode `integer`: The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the Pool or 256.
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * mountConfiguration `array`: Mount the storage using Azure fileshare, NFS, CIFS or Blobfuse based file system.
    * items [MountConfiguration](#mountconfiguration)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * resizeTimeout `string`: This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * startTask [StartTask](#starttask)
  * targetDedicatedNodes `integer`: This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
  * targetLowPriorityNodes `integer`: This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
  * taskSchedulingPolicy [TaskSchedulingPolicy](#taskschedulingpolicy)
  * userAccounts `array`
    * items [UserAccount](#useraccount)
  * virtualMachineConfiguration [VirtualMachineConfiguration](#virtualmachineconfiguration)
  * vmSize **required** `string`: For information about available sizes of virtual machines for Cloud Services Pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for Pools using Images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

### PoolEnableAutoScaleParameter
* Options for enabling automatic scaling on a Pool. `object`
  * autoScaleEvaluationInterval `string`: The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If you specify a new interval, then the existing autoscale evaluation schedule will be stopped and a new autoscale evaluation schedule will be started, with its starting time being the time when this request was issued.
  * autoScaleFormula `string`: The formula is checked for validity before it is applied to the Pool. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).

### PoolEndpointConfiguration
* The endpoint configuration for a Pool. `object`
  * inboundNATPools **required** `array`: The maximum number of inbound NAT Pools per Batch Pool is 5. If the maximum number of inbound NAT Pools is exceeded the request fails with HTTP status code 400.
    * items [InboundNATPool](#inboundnatpool)

### PoolEvaluateAutoScaleParameter
* Options for evaluating an automatic scaling formula on a Pool. `object`
  * autoScaleFormula **required** `string`: The formula is validated and its results calculated, but it is not applied to the Pool. To apply the formula to the Pool, 'Enable automatic scaling on a Pool'. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).

### PoolInformation
* Specifies how a Job should be assigned to a Pool. `object`
  * autoPoolSpecification [AutoPoolSpecification](#autopoolspecification)
  * poolId `string`: You must ensure that the Pool referenced by this property exists. If the Pool does not exist at the time the Batch service tries to schedule a Job, no Tasks for the Job will run until you create a Pool with that id. Note that the Batch service will not reject the Job request; it will simply not run Tasks until the Pool exists. You must specify either the Pool ID or the auto Pool specification, but not both.

### PoolListUsageMetricsResult
* The result of a listing the usage metrics for an Account. `object`
  * odata.nextLink `string`
  * value `array`
    * items [PoolUsageMetrics](#poolusagemetrics)

### PoolNodeCounts
* The number of Compute Nodes in each state for a Pool. `object`
  * dedicated [NodeCounts](#nodecounts)
  * lowPriority [NodeCounts](#nodecounts)
  * poolId **required** `string`

### PoolNodeCountsListResult
* The result of listing the Compute Node counts in the Account. `object`
  * odata.nextLink `string`
  * value `array`: A list of Compute Node counts by Pool.
    * items [PoolNodeCounts](#poolnodecounts)

### PoolPatchParameter
* The set of changes to be made to a Pool. `object`
  * applicationPackageReferences `array`: Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. If this element is present, it replaces any existing Package references. If you specify an empty collection, then all Package references are removed from the Pool. If omitted, any existing Package references are left unchanged.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * certificateReferences `array`: If this element is present, it replaces any existing Certificate references configured on the Pool. If omitted, any existing Certificate references are left unchanged. For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * metadata `array`: If this element is present, it replaces any existing metadata configured on the Pool. If you specify an empty collection, any metadata is removed from the Pool. If omitted, any existing metadata is left unchanged.
    * items [MetadataItem](#metadataitem)
  * startTask [StartTask](#starttask)

### PoolResizeParameter
* Options for changing the size of a Pool. `object`
  * nodeDeallocationOption [ComputeNodeDeallocationOption](#computenodedeallocationoption)
  * resizeTimeout `string`: The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * targetDedicatedNodes `integer`
  * targetLowPriorityNodes `integer`

### PoolSpecification
* Specification for creating a new Pool. `object`
  * applicationLicenses `array`: The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, Pool creation will fail. The permitted licenses available on the Pool are 'maya', 'vray', '3dsmax', 'arnold'. An additional charge applies for each application license added to the Pool.
    * items `string`
  * applicationPackageReferences `array`: Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Package references on any given Pool.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * autoScaleEvaluationInterval `string`: The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * autoScaleFormula `string`: This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the Pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information.
  * certificateReferences `array`: For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * cloudServiceConfiguration [CloudServiceConfiguration](#cloudserviceconfiguration)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * enableAutoScale `boolean`: If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula element is required. The Pool automatically resizes according to the formula. The default value is false.
  * enableInterNodeCommunication `boolean`: Enabling inter-node communication limits the maximum size of the Pool due to deployment restrictions on the Compute Nodes of the Pool. This may result in the Pool not reaching its desired size. The default value is false.
  * maxTasksPerNode `integer`: The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the Pool or 256.
  * metadata `array`: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
    * items [MetadataItem](#metadataitem)
  * mountConfiguration `array`: This supports Azure Files, NFS, CIFS/SMB, and Blobfuse.
    * items [MountConfiguration](#mountconfiguration)
  * networkConfiguration [NetworkConfiguration](#networkconfiguration)
  * resizeTimeout `string`: This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * startTask [StartTask](#starttask)
  * targetDedicatedNodes `integer`: This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
  * targetLowPriorityNodes `integer`: This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
  * taskSchedulingPolicy [TaskSchedulingPolicy](#taskschedulingpolicy)
  * userAccounts `array`
    * items [UserAccount](#useraccount)
  * virtualMachineConfiguration [VirtualMachineConfiguration](#virtualmachineconfiguration)
  * vmSize **required** `string`: For information about available sizes of virtual machines in Pools, see Choose a VM size for Compute Nodes in an Azure Batch Pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).

### PoolStatistics
* Contains utilization and resource usage statistics for the lifetime of a Pool. `object`
  * lastUpdateTime **required** `string`
  * resourceStats [ResourceStatistics](#resourcestatistics)
  * startTime **required** `string`
  * url **required** `string`
  * usageStats [UsageStatistics](#usagestatistics)

### PoolUpdatePropertiesParameter
* The set of changes to be made to a Pool. `object`
  * applicationPackageReferences **required** `array`: The list replaces any existing Application Package references on the Pool. Changes to Application Package references affect all new Compute Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Application Package references on any given Pool. If omitted, or if you specify an empty collection, any existing Application Packages references are removed from the Pool. A maximum of 10 references may be specified on a given Pool.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * certificateReferences **required** `array`: This list replaces any existing Certificate references configured on the Pool. If you specify an empty collection, any existing Certificate references are removed from the Pool. For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory.
    * items [CertificateReference](#certificatereference)
  * metadata **required** `array`: This list replaces any existing metadata configured on the Pool. If omitted, or if you specify an empty collection, any existing metadata is removed from the Pool.
    * items [MetadataItem](#metadataitem)
  * startTask [StartTask](#starttask)

### PoolUsageMetrics
* Usage metrics for a Pool across an aggregation interval. `object`
  * endTime **required** `string`
  * poolId **required** `string`
  * startTime **required** `string`
  * totalCoreHours **required** `number`
  * vmSize **required** `string`: For information about available sizes of virtual machines in Pools, see Choose a VM size for Compute Nodes in an Azure Batch Pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).

### RecentJob
* Information about the most recent Job to run under the Job Schedule. `object`
  * id `string`
  * url `string`

### ResizeError
* An error that occurred when resizing a Pool. `object`
  * code `string`
  * message `string`
  * values `array`
    * items [NameValuePair](#namevaluepair)

### ResourceFile
* A single file or multiple files to be downloaded to a Compute Node. `object`
  * autoStorageContainerName `string`: The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified.
  * blobPrefix `string`: The property is valid only when autoStorageContainerName or storageContainerUrl is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded.
  * fileMode `string`: This property applies only to files being downloaded to Linux Compute Nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows Compute Node. If this property is not specified for a Linux Compute Node, then a default value of 0770 is applied to the file.
  * filePath `string`: If the httpUrl property is specified, the filePath is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the autoStorageContainerName or storageContainerUrl property is specified, filePath is optional and is the directory to download the files to. In the case where filePath is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the Task's working directory (for example by using '..').
  * httpUrl `string`: The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. If the URL points to Azure Blob Storage, it must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access.
  * storageContainerUrl `string`: The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. This URL must be readable and listable using anonymous access; that is, the Batch service does not present any credentials when downloading blobs from the container. There are two ways to get such a URL for a container in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the container, or set the ACL for the container to allow public access.

### ResourceStatistics
* Statistics related to resource consumption by Compute Nodes in a Pool. `object`
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
* The schedule according to which Jobs will be created `object`
  * doNotRunAfter `string`: If you do not specify a doNotRunAfter time, and you are creating a recurring Job Schedule, the Job Schedule will remain active until you explicitly terminate it.
  * doNotRunUntil `string`: If you do not specify a doNotRunUntil time, the schedule becomes ready to create Jobs immediately.
  * recurrenceInterval `string`: Because a Job Schedule can have at most one active Job under it at any given time, if it is time to create a new Job under a Job Schedule, but the previous Job is still running, the Batch service will not create the new Job until the previous Job finishes. If the previous Job does not finish within the startWindow period of the new recurrenceInterval, then no new Job will be scheduled for that interval. For recurring Jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when Jobs are created, add Tasks to the Jobs and terminate the Jobs ready for the next recurrence. The default is that the schedule does not recur: one Job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that Job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
  * startWindow `string`: If a Job is not created within the startWindow interval, then the 'opportunity' is lost; no Job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the Job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).

### StartTask
* A Task which is run when a Node joins a Pool in the Azure Batch service, or when the Compute Node is rebooted or reimaged. `object`: Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. In some cases the StartTask may be re-run even though the Compute Node was not rebooted. Special care should be taken to avoid StartTasks which create breakaway process or install/launch services from the StartTask working directory, as this will block Batch from being able to re-run the StartTask.
  * commandLine **required** `string`: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
  * containerSettings [TaskContainerSettings](#taskcontainersettings)
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * maxTaskRetryCount `integer`: The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task. If the maximum retry count is -1, the Batch service retries the Task without limit.
  * resourceFiles `array`: Files listed under this element are located in the Task's working directory.
    * items [ResourceFile](#resourcefile)
  * userIdentity [UserIdentity](#useridentity)
  * waitForSuccess `boolean`: If true and the StartTask fails on a Node, the Batch service retries the StartTask up to its maximum retry count (maxTaskRetryCount). If the Task has still not completed successfully after all retries, then the Batch service marks the Node unusable, and will not schedule Tasks to it. This condition can be detected via the Compute Node state and failure info details. If false, the Batch service will not wait for the StartTask to complete. In this case, other Tasks can start executing on the Compute Node while the StartTask is still running; and even if the StartTask fails, new Tasks will continue to be scheduled on the Compute Node. The default is true.

### StartTaskInformation
* Information about a StartTask running on a Compute Node. `object`
  * containerInfo [TaskContainerExecutionInformation](#taskcontainerexecutioninformation)
  * endTime `string`: This is the end time of the most recent run of the StartTask, if that run has completed (even if that run failed and a retry is pending). This element is not present if the StartTask is currently running.
  * exitCode `integer`: This property is set only if the StartTask is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the StartTask (due to timeout, or user termination via the API) you may see an operating system-defined exit code.
  * failureInfo [TaskFailureInformation](#taskfailureinformation)
  * lastRetryTime `string`: This element is present only if the Task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the Task has been restarted for reasons other than retry; for example, if the Compute Node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not.
  * result [TaskExecutionResult](#taskexecutionresult)
  * retryCount **required** `integer`: Task application failures (non-zero exit code) are retried, pre-processing errors (the Task could not be run) and file upload errors are not retried. The Batch service will retry the Task up to the limit specified by the constraints.
  * startTime **required** `string`: This value is reset every time the Task is restarted or retried (that is, this is the most recent time at which the StartTask started running).
  * state **required** `string` (values: running, completed)

### StorageAccountType
* The storage Account type for use in creating data disks. `string` (values: standard_lrs, premium_lrs)

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
* A collection of Azure Batch Tasks to add. `object`
  * value **required** `array`: The total serialized size of this collection must be less than 1MB. If it is greater than 1MB (for example if each Task has 100's of resource files or environment variables), the request will fail with code 'RequestBodyTooLarge' and should be retried again with fewer Tasks.
    * items [TaskAddParameter](#taskaddparameter)

### TaskAddCollectionResult
* The result of adding a collection of Tasks to a Job. `object`
  * value `array`
    * items [TaskAddResult](#taskaddresult)

### TaskAddParameter
* An Azure Batch Task to add. `object`: Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing.
  * affinityInfo [AffinityInformation](#affinityinformation)
  * applicationPackageReferences `array`: Application packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced package is already on the Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails.
    * items [ApplicationPackageReference](#applicationpackagereference)
  * authenticationTokenSettings [AuthenticationTokenSettings](#authenticationtokensettings)
  * commandLine **required** `string`: For multi-instance Tasks, the command line is executed as the primary Task, after the primary Task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
  * constraints [TaskConstraints](#taskconstraints)
  * containerSettings [TaskContainerSettings](#taskcontainersettings)
  * dependsOn [TaskDependencies](#taskdependencies)
  * displayName `string`: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
  * environmentSettings `array`
    * items [EnvironmentSetting](#environmentsetting)
  * exitConditions [ExitConditions](#exitconditions)
  * id **required** `string`: The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within a Job that differ only by case).
  * multiInstanceSettings [MultiInstanceSettings](#multiinstancesettings)
  * outputFiles `array`: For multi-instance Tasks, the files will only be uploaded from the Compute Node on which the primary Task is executed.
    * items [OutputFile](#outputfile)
  * resourceFiles `array`: For multi-instance Tasks, the resource files will only be downloaded to the Compute Node on which the primary Task is executed. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers.
    * items [ResourceFile](#resourcefile)
  * userIdentity [UserIdentity](#useridentity)

### TaskAddResult
* Result for a single Task added as part of an add Task collection operation. `object`
  * eTag `string`: You can use this to detect whether the Task has changed between requests. In particular, you can be pass the ETag with an Update Task request to specify that your changes should take effect only if nobody else has modified the Job in the meantime.
  * error [BatchError](#batcherror)
  * lastModified `string`
  * location `string`
  * status **required** `string` (values: success, clienterror, servererror)
  * taskId **required** `string`

### TaskConstraints
* Execution constraints to apply to a Task. `object`
  * maxTaskRetryCount `integer`: Note that this value specifically controls the number of retries for the Task executable due to a nonzero exit code. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task after the first attempt. If the maximum retry count is -1, the Batch service retries the Task without limit.
  * maxWallClockTime `string`: If this is not specified, there is no time limit on how long the Task may run.
  * retentionTime `string`: The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted.

### TaskContainerExecutionInformation
* Contains information about the container which a Task is executing. `object`
  * containerId `string`
  * error `string`: This is the detailed error string from the Docker service, if available. It is equivalent to the error field returned by "docker inspect".
  * state `string`: This is the state of the container according to the Docker service. It is equivalent to the status field returned by "docker inspect".

### TaskContainerSettings
* The container settings for a Task. `object`
  * containerRunOptions `string`: These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service.
  * imageName **required** `string`: This is the full Image reference, as would be specified to "docker pull". If no tag is provided as part of the Image name, the tag ":latest" is used as a default.
  * registry [ContainerRegistry](#containerregistry)
  * workingDirectory `string` (values: taskWorkingDirectory, containerImageDefault): The default is 'taskWorkingDirectory'.

### TaskCounts
* The Task counts for a Job. `object`
  * active **required** `integer`
  * completed **required** `integer`
  * failed **required** `integer`
  * running **required** `integer`
  * succeeded **required** `integer`

### TaskDependencies
* Specifies any dependencies of a Task. Any Task that is explicitly specified or within a dependency range must complete before the dependant Task will be scheduled. `object`
  * taskIdRanges `array`
    * items [TaskIdRange](#taskidrange)
  * taskIds `array`: The taskIds collection is limited to 64000 characters total (i.e. the combined length of all Task IDs). If the taskIds collection exceeds the maximum length, the Add Task request fails with error code TaskDependencyListTooLong. In this case consider using Task ID ranges instead.
    * items `string`

### TaskExecutionInformation
* Information about the execution of a Task. `object`
  * containerInfo [TaskContainerExecutionInformation](#taskcontainerexecutioninformation)
  * endTime `string`: This property is set only if the Task is in the Completed state.
  * exitCode `integer`: This property is set only if the Task is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the Task (due to timeout, or user termination via the API) you may see an operating system-defined exit code.
  * failureInfo [TaskFailureInformation](#taskfailureinformation)
  * lastRequeueTime `string`: This property is set only if the requeueCount is nonzero.
  * lastRetryTime `string`: This element is present only if the Task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the Task has been restarted for reasons other than retry; for example, if the Compute Node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not.
  * requeueCount **required** `integer`: When the user removes Compute Nodes from a Pool (by resizing/shrinking the pool) or when the Job is being disabled, the user can specify that running Tasks on the Compute Nodes be requeued for execution. This count tracks how many times the Task has been requeued for these reasons.
  * result [TaskExecutionResult](#taskexecutionresult)
  * retryCount **required** `integer`: Task application failures (non-zero exit code) are retried, pre-processing errors (the Task could not be run) and file upload errors are not retried. The Batch service will retry the Task up to the limit specified by the constraints.
  * startTime `string`: 'Running' corresponds to the running state, so if the Task specifies resource files or Packages, then the start time reflects the time at which the Task started downloading or deploying these. If the Task has been restarted or retried, this is the most recent time at which the Task started running. This property is present only for Tasks that are in the running or completed state.

### TaskExecutionResult
* The result of Task execution. `string` (values: success, failure)

### TaskFailureInformation
* Information about a Task failure. `object`
  * category **required** [ErrorCategory](#errorcategory)
  * code `string`
  * details `array`
    * items [NameValuePair](#namevaluepair)
  * message `string`

### TaskIdRange
* A range of Task IDs that a Task can depend on. All Tasks with IDs in the range must complete successfully before the dependent Task can be scheduled. `object`: The start and end of the range are inclusive. For example, if a range has start 9 and end 12, then it represents Tasks '9', '10', '11' and '12'.
  * end **required** `integer`
  * start **required** `integer`

### TaskInformation
* Information about a Task running on a Compute Node. `object`
  * executionInfo [TaskExecutionInformation](#taskexecutioninformation)
  * jobId `string`
  * subtaskId `integer`
  * taskId `string`
  * taskState **required** [TaskState](#taskstate)
  * taskUrl `string`

### TaskSchedulingPolicy
* Specifies how Tasks should be distributed across Compute Nodes. `object`
  * nodeFillType **required** `string` (values: spread, pack): If not specified, the default is spread.

### TaskState
* The state of the Task. `string` (values: active, preparing, running, completed)

### TaskStatistics
* Resource usage statistics for a Task. `object`
  * kernelCPUTime **required** `string`
  * lastUpdateTime **required** `string`
  * readIOGiB **required** `number`
  * readIOps **required** `integer`
  * startTime **required** `string`
  * url **required** `string`
  * userCPUTime **required** `string`
  * waitTime **required** `string`
  * wallClockTime **required** `string`: The wall clock time is the elapsed time from when the Task started running on a Compute Node to when it finished (or to the last time the statistics were updated, if the Task had not finished by then). If the Task was retried, this includes the wall clock time of all the Task retries.
  * writeIOGiB **required** `number`
  * writeIOps **required** `integer`

### TaskUpdateParameter
* The set of changes to be made to a Task. `object`
  * constraints [TaskConstraints](#taskconstraints)

### UploadBatchServiceLogsConfiguration
* The Azure Batch service log files upload configuration for a Compute Node. `object`
  * containerUrl **required** `string`: The URL must include a Shared Access Signature (SAS) granting write permissions to the container. The SAS duration must allow enough time for the upload to finish. The start time for SAS is optional and recommended to not be specified.
  * endTime `string`: Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested. If omitted, the default is to upload all logs available after the startTime.
  * startTime **required** `string`: Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested.

### UploadBatchServiceLogsResult
* The result of uploading Batch service log files from a specific Compute Node. `object`
  * numberOfFilesUploaded **required** `integer`
  * virtualDirectoryName **required** `string`: The virtual directory name is part of the blob name for each log file uploaded, and it is built based poolId, nodeId and a unique identifier.

### UsageStatistics
* Statistics related to Pool usage information. `object`
  * dedicatedCoreTime **required** `string`
  * lastUpdateTime **required** `string`
  * startTime **required** `string`

### UserAccount
* Properties used to create a user used to execute Tasks on an Azure Batch Compute Node. `object`
  * elevationLevel [ElevationLevel](#elevationlevel)
  * linuxUserConfiguration [LinuxUserConfiguration](#linuxuserconfiguration)
  * name **required** `string`
  * password **required** `string`
  * windowsUserConfiguration [WindowsUserConfiguration](#windowsuserconfiguration)

### UserIdentity
* The definition of the user identity under which the Task is run. `object`: Specify either the userName or autoUser property, but not both.
  * autoUser [AutoUserSpecification](#autouserspecification)
  * username `string`: The userName and autoUser properties are mutually exclusive; you must specify one but not both.

### VirtualMachineConfiguration
* The configuration for Compute Nodes in a Pool based on the Azure Virtual Machines infrastructure. `object`
  * containerConfiguration [ContainerConfiguration](#containerconfiguration)
  * dataDisks `array`: This property must be specified if the Compute Nodes in the Pool need to have empty data disks attached to them. This cannot be updated. Each Compute Node gets its own disk (the disk is not a file share). Existing disks cannot be attached, each attached disk is empty. When the Compute Node is removed from the Pool, the disk and all data associated with it is also deleted. The disk is not formatted after being attached, it must be formatted before use - for more information see https://docs.microsoft.com/en-us/azure/virtual-machines/linux/classic/attach-disk#initialize-a-new-data-disk-in-linux and https://docs.microsoft.com/en-us/azure/virtual-machines/windows/attach-disk-ps#add-an-empty-data-disk-to-a-virtual-machine.
    * items [DataDisk](#datadisk)
  * imageReference **required** [ImageReference](#imagereference)
  * licenseType `string`: This only applies to Images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the Compute Nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:
  * nodeAgentSKUId **required** `string`: The Batch Compute Node agent is a program that runs on each Compute Node in the Pool, and provides the command-and-control interface between the Compute Node and the Batch service. There are different implementations of the Compute Node agent, known as SKUs, for different operating systems. You must specify a Compute Node agent SKU which matches the selected Image reference. To get the list of supported Compute Node agent SKUs along with their list of verified Image references, see the 'List supported Compute Node agent SKUs' operation.
  * windowsConfiguration [WindowsConfiguration](#windowsconfiguration)

### WindowsConfiguration
* Windows operating system settings to apply to the virtual machine. `object`
  * enableAutomaticUpdates `boolean`: If omitted, the default value is true.

### WindowsUserConfiguration
* Properties used to create a user Account on a Windows Compute Node. `object`
  * loginMode `string` (values: batch, interactive): The default value for VirtualMachineConfiguration Pools is 'batch' and for CloudServiceConfiguration Pools is 'interactive'.


