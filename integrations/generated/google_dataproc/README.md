# @datafire/google_dataproc

Client library for Google Cloud Dataproc

## Installation and Usage
```bash
npm install --save @datafire/google_dataproc
```
```js
let google_dataproc = require('@datafire/google_dataproc').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_dataproc.projects.regions.clusters.list({}).then(data => {
  console.log(data);
})
```

## Description

Manages Hadoop-based clusters and jobs on Google Cloud Platform.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_dataproc.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_dataproc.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### projects.regions.clusters.list
Lists all regions/{region}/clusters in a project.


```js
google_dataproc.projects.regions.clusters.list({
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, or UPDATING. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING and ERROR states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = *
  * pageSize `integer`: Optional. The standard List page size.
  * pageToken `string`: Optional. The standard List page token.
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the cluster belongs to.
  * region **required** `string`: Required. The Cloud Dataproc region in which to handle the request.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [ListClustersResponse](#listclustersresponse)

### projects.regions.clusters.create
Creates a cluster in a project.


```js
google_dataproc.projects.regions.clusters.create({
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [Cluster](#cluster)
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the cluster belongs to.
  * region **required** `string`: Required. The Cloud Dataproc region in which to handle the request.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Operation](#operation)

### projects.regions.clusters.delete
Deletes a cluster in a project.


```js
google_dataproc.projects.regions.clusters.delete({
  "clusterName": "",
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * clusterName **required** `string`: Required. The cluster name.
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the cluster belongs to.
  * region **required** `string`: Required. The Cloud Dataproc region in which to handle the request.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Operation](#operation)

### projects.regions.clusters.get
Gets the resource representation for a cluster in a project.


```js
google_dataproc.projects.regions.clusters.get({
  "clusterName": "",
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * clusterName **required** `string`: Required. The cluster name.
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the cluster belongs to.
  * region **required** `string`: Required. The Cloud Dataproc region in which to handle the request.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Cluster](#cluster)

### projects.regions.clusters.patch
Updates a cluster in a project.


```js
google_dataproc.projects.regions.clusters.patch({
  "clusterName": "",
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [Cluster](#cluster)
  * clusterName **required** `string`: Required. The cluster name.
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project the cluster belongs to.
  * region **required** `string`: Required. The Cloud Dataproc region in which to handle the request.
  * updateMask `string`: Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows:
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Operation](#operation)

### projects.regions.clusters.diagnose
Gets cluster diagnostic information. After the operation completes, the Operation.response field contains DiagnoseClusterOutputLocation.


```js
google_dataproc.projects.regions.clusters.diagnose({
  "clusterName": "",
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [DiagnoseClusterRequest](#diagnoseclusterrequest)
  * clusterName **required** `string`: Required. The cluster name.
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the cluster belongs to.
  * region **required** `string`: Required. The Cloud Dataproc region in which to handle the request.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Operation](#operation)

### projects.regions.jobs.list
Lists regions/{region}/jobs in a project.


```js
google_dataproc.projects.regions.jobs.list({
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * clusterName `string`: Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster.
  * filter `string`: Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or INACTIVE. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = *
  * jobStateMatcher `string` (values: ALL, ACTIVE, NON_ACTIVE): Optional. Specifies enumerated categories of jobs to list (default = match ALL jobs).
  * pageSize `integer`: Optional. The number of results to return in each response.
  * pageToken `string`: Optional. The page token, returned by a previous call, to request the next page of results.
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the job belongs to.
  * region **required** `string`: Required. The Cloud Dataproc region in which to handle the request.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [ListJobsResponse](#listjobsresponse)

### projects.regions.jobs.delete
Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.


```js
google_dataproc.projects.regions.jobs.delete({
  "jobId": "",
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: Required. The job ID.
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the job belongs to.
  * region **required** `string`: Required. The Cloud Dataproc region in which to handle the request.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Empty](#empty)

### projects.regions.jobs.get
Gets the resource representation for a job in a project.


```js
google_dataproc.projects.regions.jobs.get({
  "jobId": "",
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: Required. The job ID.
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the job belongs to.
  * region **required** `string`: Required. The Cloud Dataproc region in which to handle the request.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Job](#job)

### projects.regions.jobs.patch
Updates a job in a project.


```js
google_dataproc.projects.regions.jobs.patch({
  "jobId": "",
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [Job](#job)
  * jobId **required** `string`: Required. The job ID.
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the job belongs to.
  * region **required** `string`: Required. The Cloud Dataproc region in which to handle the request.
  * updateMask `string`: Required. Specifies the path, relative to <code>Job</code>, of the field to update. For example, to update the labels of a Job the <code>update_mask</code> parameter would be specified as <code>labels</code>, and the PATCH request body would specify the new value. <strong>Note:</strong> Currently, <code>labels</code> is the only field that can be updated.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Job](#job)

### projects.regions.jobs.cancel
Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list or regions/{region}/jobs.get.


```js
google_dataproc.projects.regions.jobs.cancel({
  "jobId": "",
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [CancelJobRequest](#canceljobrequest)
  * jobId **required** `string`: Required. The job ID.
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the job belongs to.
  * region **required** `string`: Required. The Cloud Dataproc region in which to handle the request.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Job](#job)

### projects.regions.jobs.submit
Submits a job to a cluster.


```js
google_dataproc.projects.regions.jobs.submit({
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * body [SubmitJobRequest](#submitjobrequest)
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the job belongs to.
  * region **required** `string`: Required. The Cloud Dataproc region in which to handle the request.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Job](#job)

### projects.regions.operations.delete
Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.


```js
google_dataproc.projects.regions.operations.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be deleted.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Empty](#empty)

### projects.regions.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.


```js
google_dataproc.projects.regions.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Operation](#operation)

### projects.regions.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.


```js
google_dataproc.projects.regions.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.

#### Output
* output [Empty](#empty)



## Definitions

### AcceleratorConfig
* AcceleratorConfig `object`: Specifies the type and number of accelerator cards attached to the instances of an instance group (see GPUs on Compute Engine).
  * acceleratorCount `integer`: The number of the accelerator cards of this type exposed to this instance.
  * acceleratorTypeUri `string`: Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See Google Compute Engine AcceleratorTypes( /compute/docs/reference/beta/acceleratorTypes)Examples * https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80 * projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80 * nvidia-tesla-k80

### CancelJobRequest
* CancelJobRequest `object`: A request to cancel a job.

### Cluster
* Cluster `object`: Describes the identifying information, config, and status of a cluster of Google Compute Engine instances.
  * clusterName `string`: Required. The cluster name. Cluster names within a project must be unique. Names of deleted clusters can be reused.
  * clusterUuid `string`: Output-only. A cluster UUID (Unique Universal Identifier). Cloud Dataproc generates this value when it creates the cluster.
  * config [ClusterConfig](#clusterconfig)
  * labels `object`: Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.
  * metrics [ClusterMetrics](#clustermetrics)
  * projectId `string`: Required. The Google Cloud Platform project ID that the cluster belongs to.
  * status [ClusterStatus](#clusterstatus)
  * statusHistory `array`: Output-only. The previous cluster status.
    * items [ClusterStatus](#clusterstatus)

### ClusterConfig
* ClusterConfig `object`: The cluster config.
  * configBucket `string`: Optional. A Google Cloud Storage staging bucket used for sharing generated SSH keys and config. If you do not specify a staging bucket, Cloud Dataproc will determine an appropriate Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Google Compute Engine zone where your cluster is deployed, and then it will create and manage this project-level, per-location bucket for you.
  * gceClusterConfig [GceClusterConfig](#gceclusterconfig)
  * initializationActions `array`: Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget):
    * items [NodeInitializationAction](#nodeinitializationaction)
  * masterConfig [InstanceGroupConfig](#instancegroupconfig)
  * secondaryWorkerConfig [InstanceGroupConfig](#instancegroupconfig)
  * softwareConfig [SoftwareConfig](#softwareconfig)
  * workerConfig [InstanceGroupConfig](#instancegroupconfig)

### ClusterMetrics
* ClusterMetrics `object`: Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
  * hdfsMetrics `object`: The HDFS metrics.
  * yarnMetrics `object`: The YARN metrics.

### ClusterOperationMetadata
* ClusterOperationMetadata `object`: Metadata describing the operation.
  * clusterName `string`: Output-only. Name of the cluster for the operation.
  * clusterUuid `string`: Output-only. Cluster UUID for the operation.
  * description `string`: Output-only. Short description of operation.
  * labels `object`: Output-only. Labels associated with the operation
  * operationType `string`: Output-only. The operation type.
  * status [ClusterOperationStatus](#clusteroperationstatus)
  * statusHistory `array`: Output-only. The previous operation status.
    * items [ClusterOperationStatus](#clusteroperationstatus)
  * warnings `array`: Output-only. Errors encountered during operation execution.
    * items `string`

### ClusterOperationStatus
* ClusterOperationStatus `object`: The status of the operation.
  * details `string`: Output-only.A message containing any operation metadata details.
  * innerState `string`: Output-only. A message containing the detailed operation state.
  * state `string` (values: UNKNOWN, PENDING, RUNNING, DONE): Output-only. A message containing the operation state.
  * stateStartTime `string`: Output-only. The time this state was entered.

### ClusterStatus
* ClusterStatus `object`: The status of a cluster and its instances.
  * detail `string`: Output-only. Optional details of cluster's state.
  * state `string` (values: UNKNOWN, CREATING, RUNNING, ERROR, DELETING, UPDATING): Output-only. The cluster's state.
  * stateStartTime `string`: Output-only. Time when this state was entered.
  * substate `string` (values: UNSPECIFIED, UNHEALTHY, STALE_STATUS): Output-only. Additional state information that includes status reported by the agent.

### DiagnoseClusterRequest
* DiagnoseClusterRequest `object`: A request to collect cluster diagnostic information.

### DiagnoseClusterResults
* DiagnoseClusterResults `object`: The location of diagnostic output.
  * outputUri `string`: Output-only. The Google Cloud Storage URI of the diagnostic output. The output report is a plain text file with a summary of collected diagnostics.

### DiskConfig
* DiskConfig `object`: Specifies the config of disk options for a group of VM instances.
  * bootDiskSizeGb `integer`: Optional. Size in GB of the boot disk (default is 500GB).
  * numLocalSsds `integer`: Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:

### GceClusterConfig
* GceClusterConfig `object`: Common config settings for resources of Google Compute Engine cluster instances, applicable to all instances in the cluster.
  * internalIpOnly `boolean`: Optional. If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This internal_ip_only restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.
  * metadata `object`: The Google Compute Engine metadata entries to add to all instances (see Project and instance metadata (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
  * networkUri `string`: Optional. The Google Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither network_uri nor subnetwork_uri is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see Using Subnetworks for more information).A full URL, partial URI, or short name are valid. Examples:
  * serviceAccount `string`: Optional. The service account of the instances. Defaults to the default Google Compute Engine service account. Custom service accounts need permissions equivalent to the folloing IAM roles:
  * serviceAccountScopes `array`: Optional. The URIs of service account scopes to be included in Google Compute Engine instances. The following base set of scopes is always included:
    * items `string`
  * subnetworkUri `string`: Optional. The Google Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri.A full URL, partial URI, or short name are valid. Examples:
  * tags `array`: The Google Compute Engine tags to add to all instances (see Tagging instances).
    * items `string`
  * zoneUri `string`: Optional. The zone where the Google Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a non-global Cloud Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present.A full URL, partial URI, or short name are valid. Examples:

### HadoopJob
* HadoopJob `object`: A Cloud Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).
  * archiveUris `array`: Optional. HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip.
    * items `string`
  * args `array`: Optional. The arguments to pass to the driver. Do not include arguments, such as -libjars or -Dfoo=bar, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
    * items `string`
  * fileUris `array`: Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks.
    * items `string`
  * jarFileUris `array`: Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks.
    * items `string`
  * loggingConfig [LoggingConfig](#loggingconfig)
  * mainClass `string`: The name of the driver's main class. The jar file containing the class must be in the default CLASSPATH or specified in jar_file_uris.
  * mainJarFileUri `string`: The HCFS URI of the jar file containing the main class. Examples:  'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar'  'hdfs:/tmp/test-samples/custom-wordcount.jar'  'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar'
  * properties `object`: Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code.

### HiveJob
* HiveJob `object`: A Cloud Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.
  * continueOnFailure `boolean`: Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
  * jarFileUris `array`: Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
    * items `string`
  * properties `object`: Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
  * queryFileUri `string`: The HCFS URI of the script that contains Hive queries.
  * queryList [QueryList](#querylist)
  * scriptVariables `object`: Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).

### InstanceGroupConfig
* InstanceGroupConfig `object`: Optional. The config settings for Google Compute Engine resources in an instance group, such as a master or worker group.
  * accelerators `array`: Optional. The Google Compute Engine accelerator configuration for these instances.Beta Feature: This feature is still under development. It may be changed before final release.
    * items [AcceleratorConfig](#acceleratorconfig)
  * diskConfig [DiskConfig](#diskconfig)
  * imageUri `string`: Output-only. The Google Compute Engine image resource used for cluster instances. Inferred from SoftwareConfig.image_version.
  * instanceNames `array`: Optional. The list of instance names. Cloud Dataproc derives the names from cluster_name, num_instances, and the instance group if not set by user (recommended practice is to let Cloud Dataproc derive the name).
    * items `string`
  * isPreemptible `boolean`: Optional. Specifies that this instance group contains preemptible instances.
  * machineTypeUri `string`: Optional. The Google Compute Engine machine type used for cluster instances.A full URL, partial URI, or short name are valid. Examples:
  * managedGroupConfig [ManagedGroupConfig](#managedgroupconfig)
  * numInstances `integer`: Optional. The number of VM instances in the instance group. For master instance groups, must be set to 1.

### Job
* Job `object`: A Cloud Dataproc job resource.
  * driverControlFilesUri `string`: Output-only. If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files may be placed in the same location as driver_output_uri.
  * driverOutputResourceUri `string`: Output-only. A URI pointing to the location of the stdout of the job's driver program.
  * hadoopJob [HadoopJob](#hadoopjob)
  * hiveJob [HiveJob](#hivejob)
  * labels `object`: Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job.
  * pigJob [PigJob](#pigjob)
  * placement [JobPlacement](#jobplacement)
  * pysparkJob [PySparkJob](#pysparkjob)
  * reference [JobReference](#jobreference)
  * scheduling [JobScheduling](#jobscheduling)
  * sparkJob [SparkJob](#sparkjob)
  * sparkSqlJob [SparkSqlJob](#sparksqljob)
  * status [JobStatus](#jobstatus)
  * statusHistory `array`: Output-only. The previous job status.
    * items [JobStatus](#jobstatus)
  * yarnApplications `array`: Output-only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
    * items [YarnApplication](#yarnapplication)

### JobPlacement
* JobPlacement `object`: Cloud Dataproc job config.
  * clusterName `string`: Required. The name of the cluster where the job will be submitted.
  * clusterUuid `string`: Output-only. A cluster UUID generated by the Cloud Dataproc service when the job is submitted.

### JobReference
* JobReference `object`: Encapsulates the full scoping used to reference a job.
  * jobId `string`: Optional. The job ID, which must be unique within the project. The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.
  * projectId `string`: Required. The ID of the Google Cloud Platform project that the job belongs to.

### JobScheduling
* JobScheduling `object`: Job scheduling options.Beta Feature: These options are available for testing purposes only. They may be changed before final release.
  * maxFailuresPerHour `integer`: Optional. Maximum number of times per hour a driver may be restarted as a result of driver terminating with non-zero code before job is reported failed.A job may be reported as thrashing if driver exits with non-zero code 4 times within 10 minute window.Maximum value is 10.

### JobStatus
* JobStatus `object`: Cloud Dataproc job status.
  * details `string`: Output-only. Optional job state details, such as an error description if the state is <code>ERROR</code>.
  * state `string` (values: STATE_UNSPECIFIED, PENDING, SETUP_DONE, RUNNING, CANCEL_PENDING, CANCEL_STARTED, CANCELLED, DONE, ERROR, ATTEMPT_FAILURE): Output-only. A state message specifying the overall job state.
  * stateStartTime `string`: Output-only. The time when this state was entered.
  * substate `string` (values: UNSPECIFIED, SUBMITTED, QUEUED, STALE_STATUS): Output-only. Additional state information, which includes status reported by the agent.

### ListClustersResponse
* ListClustersResponse `object`: The list of all clusters in a project.
  * clusters `array`: Output-only. The clusters in the project.
    * items [Cluster](#cluster)
  * nextPageToken `string`: Output-only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListClustersRequest.

### ListJobsResponse
* ListJobsResponse `object`: A list of jobs in a project.
  * jobs `array`: Output-only. Jobs list.
    * items [Job](#job)
  * nextPageToken `string`: Optional. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent <code>ListJobsRequest</code>.

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### LoggingConfig
* LoggingConfig `object`: The runtime logging config of the job.
  * driverLogLevels `object`: The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples:  'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'

### ManagedGroupConfig
* ManagedGroupConfig `object`: Specifies the resources used to actively manage an instance group.
  * instanceGroupManagerName `string`: Output-only. The name of the Instance Group Manager for this group.
  * instanceTemplateName `string`: Output-only. The name of the Instance Template used for the Managed Instance Group.

### NodeInitializationAction
* NodeInitializationAction `object`: Specifies an executable to run on a fully configured node and a timeout period for executable completion.
  * executableFile `string`: Required. Google Cloud Storage URI of executable file.
  * executionTimeout `string`: Optional. Amount of time executable has to complete. Default is 10 minutes. Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should have the format of operations/some/unique/name.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.

### PigJob
* PigJob `object`: A Cloud Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.
  * continueOnFailure `boolean`: Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
  * jarFileUris `array`: Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
    * items `string`
  * loggingConfig [LoggingConfig](#loggingconfig)
  * properties `object`: Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.
  * queryFileUri `string`: The HCFS URI of the script that contains the Pig queries.
  * queryList [QueryList](#querylist)
  * scriptVariables `object`: Optional. Mapping of query variable names to values (equivalent to the Pig command: name=[value]).

### PySparkJob
* PySparkJob `object`: A Cloud Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN.
  * archiveUris `array`: Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.
    * items `string`
  * args `array`: Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
    * items `string`
  * fileUris `array`: Optional. HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks.
    * items `string`
  * jarFileUris `array`: Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.
    * items `string`
  * loggingConfig [LoggingConfig](#loggingconfig)
  * mainPythonFileUri `string`: Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.
  * properties `object`: Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
  * pythonFileUris `array`: Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.
    * items `string`

### QueryList
* QueryList `object`: A list of queries to run on a cluster.
  * queries `array`: Required. The queries to execute. You do not need to terminate a query with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of an Cloud Dataproc API snippet that uses a QueryList to specify a HiveJob:
    * items `string`

### SoftwareConfig
* SoftwareConfig `object`: Specifies the selection and config of software inside the cluster.
  * imageVersion `string`: Optional. The version of software inside the cluster. It must match the regular expression [0-9]+\.[0-9]+. If unspecified, it defaults to the latest version (see Cloud Dataproc Versioning).
  * properties `object`: Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, such as core:fs.defaultFS. The following are supported prefixes and their mappings:

### SparkJob
* SparkJob `object`: A Cloud Dataproc job for running Apache Spark (http://spark.apache.org/) applications on YARN.
  * archiveUris `array`: Optional. HCFS URIs of archives to be extracted in the working directory of Spark drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
    * items `string`
  * args `array`: Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
    * items `string`
  * fileUris `array`: Optional. HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks.
    * items `string`
  * jarFileUris `array`: Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
    * items `string`
  * loggingConfig [LoggingConfig](#loggingconfig)
  * mainClass `string`: The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris.
  * mainJarFileUri `string`: The HCFS URI of the jar file that contains the main class.
  * properties `object`: Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

### SparkSqlJob
* SparkSqlJob `object`: A Cloud Dataproc job for running Apache Spark SQL (http://spark.apache.org/sql/) queries.
  * jarFileUris `array`: Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.
    * items `string`
  * loggingConfig [LoggingConfig](#loggingconfig)
  * properties `object`: Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Cloud Dataproc API may be overwritten.
  * queryFileUri `string`: The HCFS URI of the script that contains SQL queries.
  * queryList [QueryList](#querylist)
  * scriptVariables `object`: Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

### Status
* Status `object`: The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). The error model is designed to be:
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### SubmitJobRequest
* SubmitJobRequest `object`: A request to submit a job.
  * job [Job](#job)

### YarnApplication
* YarnApplication `object`: A YARN application created by a job. Application information is a subset of <code>org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto</code>.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
  * name `string`: Required. The application name.
  * progress `number`: Required. The numerical progress of the application, from 1 to 100.
  * state `string` (values: STATE_UNSPECIFIED, NEW, NEW_SAVING, SUBMITTED, ACCEPTED, RUNNING, FINISHED, FAILED, KILLED): Required. The application state.
  * trackingUrl `string`: Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides application-specific information. The URL uses the internal hostname, and requires a proxy server for resolution and, possibly, access.


