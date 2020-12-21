# @datafire/google_dataproc

Client library for Cloud Dataproc API

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

.then(data => {
  console.log(data);
});
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

### dataproc.projects.regions.clusters.list
Lists all regions/{region}/clusters in a project alphabetically.


```js
google_dataproc.dataproc.projects.regions.clusters.list({
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the cluster belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * filter `string`: Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, or UPDATING. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING and ERROR states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = *
  * pageSize `integer`: Optional. The standard List page size.
  * pageToken `string`: Optional. The standard List page token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListClustersResponse](#listclustersresponse)

### dataproc.projects.regions.clusters.create
Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1beta2#clusteroperationmetadata).


```js
google_dataproc.dataproc.projects.regions.clusters.create({
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the cluster belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * requestId `string`: Optional. A unique id used to identify the request. If the server receives two CreateClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
  * body [Cluster](#cluster)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### dataproc.projects.regions.clusters.delete
Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1beta2#clusteroperationmetadata).


```js
google_dataproc.dataproc.projects.regions.clusters.delete({
  "projectId": "",
  "region": "",
  "clusterName": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the cluster belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * clusterName **required** `string`: Required. The cluster name.
  * clusterUuid `string`: Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist.
  * requestId `string`: Optional. A unique id used to identify the request. If the server receives two DeleteClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### dataproc.projects.regions.clusters.get
Gets the resource representation for a cluster in a project.


```js
google_dataproc.dataproc.projects.regions.clusters.get({
  "projectId": "",
  "region": "",
  "clusterName": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the cluster belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * clusterName **required** `string`: Required. The cluster name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Cluster](#cluster)

### dataproc.projects.regions.clusters.patch
Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1beta2#clusteroperationmetadata).


```js
google_dataproc.dataproc.projects.regions.clusters.patch({
  "projectId": "",
  "region": "",
  "clusterName": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project the cluster belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * clusterName **required** `string`: Required. The cluster name.
  * gracefulDecommissionTimeout `string`: Optional. Timeout for graceful YARN decomissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher.
  * requestId `string`: Optional. A unique id used to identify the request. If the server receives two UpdateClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
  * updateMask `string`: Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } *Note:* currently only the following fields can be updated: *Mask* *Purpose* labels Updates labels config.worker_config.num_instances Resize primary worker group config.secondary_worker_config.num_instances Resize secondary worker group config.lifecycle_config.auto_delete_ttl Reset MAX TTL duration config.lifecycle_config.auto_delete_time Update MAX TTL deletion timestamp config.lifecycle_config.idle_delete_ttl Update Idle TTL duration config.autoscaling_config.policy_uri Use, stop using, or change autoscaling policies 
  * body [Cluster](#cluster)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### dataproc.projects.regions.clusters.diagnose
Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1beta2#clusteroperationmetadata). After the operation completes, Operation.response contains Empty.


```js
google_dataproc.dataproc.projects.regions.clusters.diagnose({
  "projectId": "",
  "region": "",
  "clusterName": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the cluster belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * clusterName **required** `string`: Required. The cluster name.
  * body [DiagnoseClusterRequest](#diagnoseclusterrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### dataproc.projects.regions.clusters.start
Starts a cluster in a project.


```js
google_dataproc.dataproc.projects.regions.clusters.start({
  "projectId": "",
  "region": "",
  "clusterName": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project the cluster belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * clusterName **required** `string`: Required. The cluster name.
  * body [StartClusterRequest](#startclusterrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### dataproc.projects.regions.clusters.stop
Stops a cluster in a project.


```js
google_dataproc.dataproc.projects.regions.clusters.stop({
  "projectId": "",
  "region": "",
  "clusterName": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project the cluster belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * clusterName **required** `string`: Required. The cluster name.
  * body [StopClusterRequest](#stopclusterrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### dataproc.projects.regions.jobs.list
Lists regions/{region}/jobs in a project.


```js
google_dataproc.dataproc.projects.regions.jobs.list({
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the job belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * clusterName `string`: Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster.
  * filter `string`: Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or NON_ACTIVE. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = *
  * jobStateMatcher `string` (values: ALL, ACTIVE, NON_ACTIVE): Optional. Specifies enumerated categories of jobs to list. (default = match ALL jobs).If filter is provided, jobStateMatcher will be ignored.
  * pageSize `integer`: Optional. The number of results to return in each response.
  * pageToken `string`: Optional. The page token, returned by a previous call, to request the next page of results.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListJobsResponse](#listjobsresponse)

### dataproc.projects.regions.jobs.delete
Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.


```js
google_dataproc.dataproc.projects.regions.jobs.delete({
  "projectId": "",
  "region": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the job belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * jobId **required** `string`: Required. The job ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### dataproc.projects.regions.jobs.get
Gets the resource representation for a job in a project.


```js
google_dataproc.dataproc.projects.regions.jobs.get({
  "projectId": "",
  "region": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the job belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * jobId **required** `string`: Required. The job ID.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Job](#job)

### dataproc.projects.regions.jobs.patch
Updates a job in a project.


```js
google_dataproc.dataproc.projects.regions.jobs.patch({
  "projectId": "",
  "region": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the job belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * jobId **required** `string`: Required. The job ID.
  * updateMask `string`: Required. Specifies the path, relative to Job, of the field to update. For example, to update the labels of a Job the update_mask parameter would be specified as labels, and the PATCH request body would specify the new value. *Note:* Currently, labels is the only field that can be updated.
  * body [Job](#job)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Job](#job)

### dataproc.projects.regions.jobs.cancel
Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1beta2/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1beta2/projects.regions.jobs/get).


```js
google_dataproc.dataproc.projects.regions.jobs.cancel({
  "projectId": "",
  "region": "",
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the job belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * jobId **required** `string`: Required. The job ID.
  * body [CancelJobRequest](#canceljobrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Job](#job)

### dataproc.projects.regions.jobs.submit
Submits a job to a cluster.


```js
google_dataproc.dataproc.projects.regions.jobs.submit({
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the job belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * body [SubmitJobRequest](#submitjobrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Job](#job)

### dataproc.projects.regions.jobs.submitAsOperation
Submits job to a cluster.


```js
google_dataproc.dataproc.projects.regions.jobs.submitAsOperation({
  "projectId": "",
  "region": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The ID of the Google Cloud Platform project that the job belongs to.
  * region **required** `string`: Required. The Dataproc region in which to handle the request.
  * body [SubmitJobRequest](#submitjobrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### dataproc.projects.regions.workflowTemplates.delete
Deletes a workflow template. It does not cancel in-progress workflows.


```js
google_dataproc.dataproc.projects.regions.workflowTemplates.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.delete, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
  * version `integer`: Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### dataproc.projects.regions.workflowTemplates.get
Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.


```js
google_dataproc.dataproc.projects.regions.workflowTemplates.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.get, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
  * version `integer`: Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [WorkflowTemplate](#workflowtemplate)

### dataproc.projects.regions.workflowTemplates.update
Updates (replaces) workflow template. The updated template must contain version that matches the current server version.


```js
google_dataproc.dataproc.projects.regions.workflowTemplates.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
  * body [WorkflowTemplate](#workflowtemplate)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [WorkflowTemplate](#workflowtemplate)

### dataproc.projects.regions.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.


```js
google_dataproc.dataproc.projects.regions.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### dataproc.projects.regions.workflowTemplates.instantiate
Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1beta2#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.


```js
google_dataproc.dataproc.projects.regions.workflowTemplates.instantiate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates.instantiate, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
  * body [InstantiateWorkflowTemplateRequest](#instantiateworkflowtemplaterequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### dataproc.projects.regions.autoscalingPolicies.list
Lists autoscaling policies in the project.


```js
google_dataproc.dataproc.projects.regions.autoscalingPolicies.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.list, the resource name of the location has the following format: projects/{project_id}/locations/{location}
  * pageSize `integer`: Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.
  * pageToken `string`: Optional. The page token, returned by a previous call, to request the next page of results.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListAutoscalingPoliciesResponse](#listautoscalingpoliciesresponse)

### dataproc.projects.regions.autoscalingPolicies.create
Creates new autoscaling policy.


```js
google_dataproc.dataproc.projects.regions.autoscalingPolicies.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies.create, the resource name has the following format: projects/{project_id}/regions/{region} For projects.locations.autoscalingPolicies.create, the resource name has the following format: projects/{project_id}/locations/{location}
  * body [AutoscalingPolicy](#autoscalingpolicy)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AutoscalingPolicy](#autoscalingpolicy)

### dataproc.projects.regions.workflowTemplates.list
Lists workflows that match the specified filter in the request.


```js
google_dataproc.dataproc.projects.regions.workflowTemplates.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,list, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.list, the resource name of the location has the following format: projects/{project_id}/locations/{location}
  * pageSize `integer`: Optional. The maximum number of results to return in each response.
  * pageToken `string`: Optional. The page token, returned by a previous call, to request the next page of results.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListWorkflowTemplatesResponse](#listworkflowtemplatesresponse)

### dataproc.projects.regions.workflowTemplates.create
Creates new workflow template.


```js
google_dataproc.dataproc.projects.regions.workflowTemplates.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,create, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.create, the resource name of the location has the following format: projects/{project_id}/locations/{location}
  * body [WorkflowTemplate](#workflowtemplate)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [WorkflowTemplate](#workflowtemplate)

### dataproc.projects.regions.workflowTemplates.instantiateInline
Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.


```js
google_dataproc.dataproc.projects.regions.workflowTemplates.instantiateInline({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the region or location, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates,instantiateinline, the resource name of the region has the following format: projects/{project_id}/regions/{region} For projects.locations.workflowTemplates.instantiateinline, the resource name of the location has the following format: projects/{project_id}/locations/{location}
  * instanceId `string`: Deprecated. Please use request_id field instead.
  * requestId `string`: Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
  * body [WorkflowTemplate](#workflowtemplate)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### dataproc.projects.regions.workflowTemplates.getIamPolicy
Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.


```js
google_dataproc.dataproc.projects.regions.workflowTemplates.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
  * options.requestedPolicyVersion `integer`: Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Policy](#policy)

### dataproc.projects.regions.workflowTemplates.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.


```js
google_dataproc.dataproc.projects.regions.workflowTemplates.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
  * body [SetIamPolicyRequest](#setiampolicyrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Policy](#policy)

### dataproc.projects.regions.workflowTemplates.testIamPermissions
Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.


```js
google_dataproc.dataproc.projects.regions.workflowTemplates.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [TestIamPermissionsResponse](#testiampermissionsresponse)



## Definitions

### AcceleratorConfig
* AcceleratorConfig `object`: Specifies the type and number of accelerator cards attached to the instances of an instance group (see GPUs on Compute Engine (https://cloud.google.com/compute/docs/gpus/)).
  * acceleratorCount `integer`: The number of the accelerator cards of this type exposed to this instance.
  * acceleratorTypeUri `string`: Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See Compute Engine AcceleratorTypes (https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes)Examples * https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80 * projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80 * nvidia-tesla-k80Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-k80.

### AutoscalingConfig
* AutoscalingConfig `object`: Autoscaling Policy config associated with the cluster.
  * policyUri `string`: Optional. The autoscaling policy used by the cluster.Only resource names including projectid and location (region) are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id] projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]Note that the policy must be in the same project and Dataproc region.

### AutoscalingPolicy
* AutoscalingPolicy `object`: Describes an autoscaling policy for Dataproc cluster autoscaler.
  * basicAlgorithm [BasicAutoscalingAlgorithm](#basicautoscalingalgorithm)
  * id `string`: Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.
  * name `string`: Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For projects.locations.autoscalingPolicies, the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
  * secondaryWorkerConfig [InstanceGroupAutoscalingPolicyConfig](#instancegroupautoscalingpolicyconfig)
  * workerConfig [InstanceGroupAutoscalingPolicyConfig](#instancegroupautoscalingpolicyconfig)

### BasicAutoscalingAlgorithm
* BasicAutoscalingAlgorithm `object`: Basic algorithm for autoscaling.
  * cooldownPeriod `string`: Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.Bounds: 2m, 1d. Default: 2m.
  * yarnConfig [BasicYarnAutoscalingConfig](#basicyarnautoscalingconfig)

### BasicYarnAutoscalingConfig
* BasicYarnAutoscalingConfig `object`: Basic autoscaling configurations for YARN.
  * gracefulDecommissionTimeout `string`: Required. Timeout for YARN graceful decommissioning of Node Managers. Specifies the duration to wait for jobs to complete before forcefully removing workers (and potentially interrupting jobs). Only applicable to downscaling operations.Bounds: 0s, 1d.
  * scaleDownFactor `number`: Required. Fraction of average YARN pending memory in the last cooldown period for which to remove workers. A scale-down factor of 1 will result in scaling down so that there is no available memory remaining after the update (more aggressive scaling). A scale-down factor of 0 disables removing workers, which can be beneficial for autoscaling a single job. See How autoscaling works for more information.Bounds: 0.0, 1.0.
  * scaleDownMinWorkerFraction `number`: Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.
  * scaleUpFactor `number`: Required. Fraction of average YARN pending memory in the last cooldown period for which to add workers. A scale-up factor of 1.0 will result in scaling up so that there is no pending memory remaining after the update (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling). See How autoscaling works for more information.Bounds: 0.0, 1.0.
  * scaleUpMinWorkerFraction `number`: Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.

### Binding
* Binding `object`: Associates members with a role.
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. members can have the following values: allUsers: A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers: A special identifier that represents anyone who is authenticated with a Google account or a service account. user:{emailid}: An email address that represents a specific Google account. For example, alice@example.com . serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. deleted:user:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a user that has been recently deleted. For example, alice@example.com?uid=123456789012345678901. If the user is recovered, this value reverts to user:{emailid} and the recovered user retains the role in the binding. deleted:serviceAccount:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901. If the service account is undeleted, this value reverts to serviceAccount:{emailid} and the undeleted service account retains the role in the binding. deleted:group:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, admins@example.com?uid=123456789012345678901. If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding. domain:{domain}: The G Suite domain (primary) that represents all the users of that domain. For example, google.com or example.com.
    * items `string`
  * role `string`: Role that is assigned to members. For example, roles/viewer, roles/editor, or roles/owner.

### CancelJobRequest
* CancelJobRequest `object`: A request to cancel a job.

### Cluster
* Cluster `object`: Describes the identifying information, config, and status of a cluster of Compute Engine instances.
  * clusterName `string`: Required. The cluster name. Cluster names within a project must be unique. Names of deleted clusters can be reused.
  * clusterUuid `string`: Output only. A cluster UUID (Unique Universal Identifier). Dataproc generates this value when it creates the cluster.
  * config [ClusterConfig](#clusterconfig)
  * labels `object`: Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.
  * metrics [ClusterMetrics](#clustermetrics)
  * projectId `string`: Required. The Google Cloud Platform project ID that the cluster belongs to.
  * status [ClusterStatus](#clusterstatus)
  * statusHistory `array`: Output only. The previous cluster status.
    * items [ClusterStatus](#clusterstatus)

### ClusterConfig
* ClusterConfig `object`: The cluster config.
  * autoscalingConfig [AutoscalingConfig](#autoscalingconfig)
  * configBucket `string`: Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging bucket (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)).
  * encryptionConfig [EncryptionConfig](#encryptionconfig)
  * endpointConfig [EndpointConfig](#endpointconfig)
  * gceClusterConfig [GceClusterConfig](#gceclusterconfig)
  * gkeClusterConfig [GkeClusterConfig](#gkeclusterconfig)
  * initializationActions `array`: Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1beta2/instance/attributes/dataproc-role) if [[ "${ROLE}" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi 
    * items [NodeInitializationAction](#nodeinitializationaction)
  * lifecycleConfig [LifecycleConfig](#lifecycleconfig)
  * masterConfig [InstanceGroupConfig](#instancegroupconfig)
  * metastoreConfig [MetastoreConfig](#metastoreconfig)
  * secondaryWorkerConfig [InstanceGroupConfig](#instancegroupconfig)
  * securityConfig [SecurityConfig](#securityconfig)
  * softwareConfig [SoftwareConfig](#softwareconfig)
  * tempBucket `string`: Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket.
  * workerConfig [InstanceGroupConfig](#instancegroupconfig)

### ClusterMetrics
* ClusterMetrics `object`: Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
  * hdfsMetrics `object`: The HDFS metrics.
  * yarnMetrics `object`: The YARN metrics.

### ClusterOperation
* ClusterOperation `object`: The cluster operation triggered by a workflow.
  * done `boolean`: Output only. Indicates the operation is done.
  * error `string`: Output only. Error, if operation failed.
  * operationId `string`: Output only. The id of the cluster operation.

### ClusterOperationMetadata
* ClusterOperationMetadata `object`: Metadata describing the operation.
  * clusterName `string`: Output only. Name of the cluster for the operation.
  * clusterUuid `string`: Output only. Cluster UUID for the operation.
  * description `string`: Output only. Short description of operation.
  * labels `object`: Output only. Labels associated with the operation
  * operationType `string`: Output only. The operation type.
  * status [ClusterOperationStatus](#clusteroperationstatus)
  * statusHistory `array`: Output only. The previous operation status.
    * items [ClusterOperationStatus](#clusteroperationstatus)
  * warnings `array`: Output only. Errors encountered during operation execution.
    * items `string`

### ClusterOperationStatus
* ClusterOperationStatus `object`: The status of the operation.
  * details `string`: Output only. A message containing any operation metadata details.
  * innerState `string`: Output only. A message containing the detailed operation state.
  * state `string` (values: UNKNOWN, PENDING, RUNNING, DONE): Output only. A message containing the operation state.
  * stateStartTime `string`: Output only. The time this state was entered.

### ClusterSelector
* ClusterSelector `object`: A selector that chooses target cluster for jobs based on metadata.
  * clusterLabels `object`: Required. The cluster labels. Cluster must have all labels to match.
  * zone `string`: Optional. The zone where workflow process executes. This parameter does not affect the selection of the cluster.If unspecified, the zone of the first cluster matching the selector is used.

### ClusterStatus
* ClusterStatus `object`: The status of a cluster and its instances.
  * detail `string`: Output only. Optional details of cluster's state.
  * state `string` (values: UNKNOWN, CREATING, RUNNING, ERROR, DELETING, UPDATING, STOPPING, STOPPED, STARTING): Output only. The cluster's state.
  * stateStartTime `string`: Output only. Time when this state was entered (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)).
  * substate `string` (values: UNSPECIFIED, UNHEALTHY, STALE_STATUS): Output only. Additional state information that includes status reported by the agent.

### DiagnoseClusterRequest
* DiagnoseClusterRequest `object`: A request to collect cluster diagnostic information.

### DiagnoseClusterResults
* DiagnoseClusterResults `object`: The location of diagnostic output.
  * outputUri `string`: Output only. The Cloud Storage URI of the diagnostic output. The output report is a plain text file with a summary of collected diagnostics.

### DiskConfig
* DiskConfig `object`: Specifies the config of disk options for a group of VM instances.
  * bootDiskSizeGb `integer`: Optional. Size in GB of the boot disk (default is 500GB).
  * bootDiskType `string`: Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-ssd" (Persistent Disk Solid State Drive) or "pd-standard" (Persistent Disk Hard Disk Drive).
  * numLocalSsds `integer`: Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for Empty is empty JSON object {}.

### EncryptionConfig
* EncryptionConfig `object`: Encryption settings for the cluster.
  * gcePdKmsKeyName `string`: Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.

### EndpointConfig
* EndpointConfig `object`: Endpoint config for this cluster
  * enableHttpPortAccess `boolean`: Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false.
  * httpPorts `object`: Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true.

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### GceClusterConfig
* GceClusterConfig `object`: Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.
  * tags `array`: The Compute Engine tags to add to all instances (see Tagging instances (https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
    * items `string`
  * internalIpOnly `boolean`: Optional. If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This internal_ip_only restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.
  * metadata `object`: The Compute Engine metadata entries to add to all instances (see Project and instance metadata (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
  * networkUri `string`: Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither network_uri nor subnetwork_uri is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see Using Subnetworks (https://cloud.google.com/compute/docs/subnetworks) for more information).A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default projects/[project_id]/regions/global/default default
  * nodeGroupAffinity [NodeGroupAffinity](#nodegroupaffinity)
  * privateIpv6GoogleAccess `string` (values: PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED, INHERIT_FROM_SUBNETWORK, OUTBOUND, BIDIRECTIONAL): Optional. The type of IPv6 access for a cluster.
  * reservationAffinity [ReservationAffinity](#reservationaffinity)
  * serviceAccount `string`: Optional. The Dataproc service account (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc) (also see VM Data Plane identity (https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity)) used by Dataproc cluster VM instances to access Google Cloud Platform services.If not specified, the Compute Engine default service account (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
  * serviceAccountScopes `array`: Optional. The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read_write https://www.googleapis.com/auth/logging.writeIf no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full_control
    * items `string`
  * shieldedInstanceConfig [ShieldedInstanceConfig](#shieldedinstanceconfig)
  * subnetworkUri `string`: Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0 projects/[project_id]/regions/us-east1/subnetworks/sub0 sub0
  * zoneUri `string`: Optional. The zone where the Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a non-global Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone] projects/[project_id]/zones/[zone] us-central1-f

### GetIamPolicyRequest
* GetIamPolicyRequest `object`: Request message for GetIamPolicy method.
  * options [GetPolicyOptions](#getpolicyoptions)

### GetPolicyOptions
* GetPolicyOptions `object`: Encapsulates settings provided to GetIamPolicy.
  * requestedPolicyVersion `integer`: Optional. The policy format version to be returned.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).

### GkeClusterConfig
* GkeClusterConfig `object`: The GKE config for this cluster.
  * namespacedGkeDeploymentTarget [NamespacedGkeDeploymentTarget](#namespacedgkedeploymenttarget)

### HadoopJob
* HadoopJob `object`: A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).
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
  * mainJarFileUri `string`: The HCFS URI of the jar file containing the main class. Examples: 'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar' 'hdfs:/tmp/test-samples/custom-wordcount.jar' 'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar'
  * properties `object`: Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code.

### HiveJob
* HiveJob `object`: A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.
  * continueOnFailure `boolean`: Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
  * jarFileUris `array`: Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
    * items `string`
  * properties `object`: Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
  * queryFileUri `string`: The HCFS URI of the script that contains Hive queries.
  * queryList [QueryList](#querylist)
  * scriptVariables `object`: Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).

### InstanceGroupAutoscalingPolicyConfig
* InstanceGroupAutoscalingPolicyConfig `object`: Configuration for the size bounds of an instance group, including its proportional size to other groups.
  * maxInstances `integer`: Optional. Maximum number of instances for this group. Required for primary workers. Note that by default, clusters will not use secondary workers. Required for secondary workers if the minimum secondary instances is set.Primary workers - Bounds: [min_instances, ). Required. Secondary workers - Bounds: [min_instances, ). Default: 0.
  * minInstances `integer`: Optional. Minimum number of instances for this group.Primary workers - Bounds: 2, max_instances. Default: 2. Secondary workers - Bounds: 0, max_instances. Default: 0.
  * weight `integer`: Optional. Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. For example, if primary workers have weight 2, and secondary workers have weight 1, the cluster will have approximately 2 primary workers for each secondary worker.The cluster may not reach the specified balance if constrained by min/max bounds or other autoscaling settings. For example, if max_instances for secondary workers is 0, then only primary workers will be added. The cluster can also be out of balance when created.If weight is not set on any instance group, the cluster will default to equal weight for all groups: the cluster will attempt to maintain an equal number of workers in each group within the configured size bounds for each group. If weight is set for one group only, the cluster will default to zero weight on the unset group. For example if weight is set only on primary workers, the cluster will use primary workers only and no secondary workers.

### InstanceGroupConfig
* InstanceGroupConfig `object`: The config settings for Compute Engine resources in an instance group, such as a master or worker group.
  * accelerators `array`: Optional. The Compute Engine accelerator configuration for these instances.
    * items [AcceleratorConfig](#acceleratorconfig)
  * diskConfig [DiskConfig](#diskconfig)
  * imageUri `string`: Optional. The Compute Engine image resource used for cluster instances.The URI can represent an image or image family.Image examples: https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/[image-id] projects/[project_id]/global/images/[image-id] image-idImage family examples. Dataproc will use the most recent image from the family: https://www.googleapis.com/compute/beta/projects/[project_id]/global/images/family/[custom-image-family-name] projects/[project_id]/global/images/family/[custom-image-family-name]If the URI is unspecified, it will be inferred from SoftwareConfig.image_version or the system default.
  * instanceNames `array`: Output only. The list of instance names. Dataproc derives the names from cluster_name, num_instances, and the instance group.
    * items `string`
  * instanceReferences `array`: Output only. List of references to Compute Engine instances.
    * items [InstanceReference](#instancereference)
  * isPreemptible `boolean`: Output only. Specifies that this instance group contains preemptible instances.
  * machineTypeUri `string`: Optional. The Compute Engine machine type used for cluster instances.A full URL, partial URI, or short name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2 projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2 n1-standard-2Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the machine type resource, for example, n1-standard-2.
  * managedGroupConfig [ManagedGroupConfig](#managedgroupconfig)
  * minCpuPlatform `string`: Specifies the minimum cpu platform for the Instance Group. See Dataproc -> Minimum CPU Platform (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
  * numInstances `integer`: Optional. The number of VM instances in the instance group. For master instance groups, must be set to 1.
  * preemptibility `string` (values: PREEMPTIBILITY_UNSPECIFIED, NON_PREEMPTIBLE, PREEMPTIBLE): Optional. Specifies the preemptibility of the instance group.The default value for master and worker groups is NON_PREEMPTIBLE. This default cannot be changed.The default value for secondary instances is PREEMPTIBLE.

### InstanceReference
* InstanceReference `object`: A reference to a Compute Engine instance.
  * instanceId `string`: The unique identifier of the Compute Engine instance.
  * instanceName `string`: The user-friendly name of the Compute Engine instance.
  * publicKey `string`: The public key used for sharing data with this instance.

### InstantiateWorkflowTemplateRequest
* InstantiateWorkflowTemplateRequest `object`: A request to instantiate a workflow template.
  * parameters `object`: Optional. Map from parameter names to values that should be used for those parameters. Values may not exceed 1000 characters.
  * instanceId `string`: Deprecated. Please use request_id field instead.
  * requestId `string`: Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
  * version `integer`: Optional. The version of workflow template to instantiate. If specified, the workflow will be instantiated only if the current version of the workflow template has the supplied version.This option cannot be used to instantiate a previous version of workflow template.

### Job
* Job `object`: A Dataproc job resource.
  * done `boolean`: Output only. Indicates whether the job is completed. If the value is false, the job is still in progress. If true, the job is completed, and status.state field will indicate if it was successful, failed, or cancelled.
  * driverControlFilesUri `string`: Output only. If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files may be placed in the same location as driver_output_uri.
  * driverOutputResourceUri `string`: Output only. A URI pointing to the location of the stdout of the job's driver program.
  * hadoopJob [HadoopJob](#hadoopjob)
  * hiveJob [HiveJob](#hivejob)
  * jobUuid `string`: Output only. A UUID that uniquely identifies a job within the project over time. This is in contrast to a user-settable reference.job_id that may be reused over time.
  * labels `object`: Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job.
  * pigJob [PigJob](#pigjob)
  * placement [JobPlacement](#jobplacement)
  * prestoJob [PrestoJob](#prestojob)
  * pysparkJob [PySparkJob](#pysparkjob)
  * reference [JobReference](#jobreference)
  * scheduling [JobScheduling](#jobscheduling)
  * sparkJob [SparkJob](#sparkjob)
  * sparkRJob [SparkRJob](#sparkrjob)
  * sparkSqlJob [SparkSqlJob](#sparksqljob)
  * status [JobStatus](#jobstatus)
  * statusHistory `array`: Output only. The previous job status.
    * items [JobStatus](#jobstatus)
  * submittedBy `string`: Output only. The email address of the user submitting the job. For jobs submitted on the cluster, the address is username@hostname.
  * yarnApplications `array`: Output only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
    * items [YarnApplication](#yarnapplication)

### JobMetadata
* JobMetadata `object`: Job Operation metadata.
  * jobId `string`: Output only. The job id.
  * operationType `string`: Output only. Operation type.
  * startTime `string`: Output only. Job submission time.
  * status [JobStatus](#jobstatus)

### JobPlacement
* JobPlacement `object`: Dataproc job config.
  * clusterName `string`: Required. The name of the cluster where the job will be submitted.
  * clusterUuid `string`: Output only. A cluster UUID generated by the Dataproc service when the job is submitted.

### JobReference
* JobReference `object`: Encapsulates the full scoping used to reference a job.
  * jobId `string`: Optional. The job ID, which must be unique within the project. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.If not specified by the caller, the job ID will be provided by the server.
  * projectId `string`: Optional. The ID of the Google Cloud Platform project that the job belongs to. If specified, must match the request project ID.

### JobScheduling
* JobScheduling `object`: Job scheduling options.
  * maxFailuresPerHour `integer`: Optional. Maximum number of times per hour a driver may be restarted as a result of driver terminating with non-zero code before job is reported failed.A job may be reported as thrashing if driver exits with non-zero code 4 times within 10 minute window.Maximum value is 10.
  * maxFailuresTotal `integer`: Optional. Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed. Maximum value is 240

### JobStatus
* JobStatus `object`: Dataproc job status.
  * details `string`: Output only. Optional Job state details, such as an error description if the state is ERROR.
  * state `string` (values: STATE_UNSPECIFIED, PENDING, SETUP_DONE, RUNNING, CANCEL_PENDING, CANCEL_STARTED, CANCELLED, DONE, ERROR, ATTEMPT_FAILURE): Output only. A state message specifying the overall job state.
  * stateStartTime `string`: Output only. The time when this state was entered.
  * substate `string` (values: UNSPECIFIED, SUBMITTED, QUEUED, STALE_STATUS): Output only. Additional state information, which includes status reported by the agent.

### KerberosConfig
* KerberosConfig `object`: Specifies Kerberos related configuration.
  * crossRealmTrustAdminServer `string`: Optional. The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
  * crossRealmTrustKdc `string`: Optional. The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
  * crossRealmTrustRealm `string`: Optional. The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust.
  * crossRealmTrustSharedPasswordUri `string`: Optional. The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship.
  * enableKerberos `boolean`: Optional. Flag to indicate whether to Kerberize the cluster (default: false). Set this field to true to enable Kerberos on a cluster.
  * kdcDbKeyUri `string`: Optional. The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database.
  * keyPasswordUri `string`: Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc.
  * keystorePasswordUri `string`: Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore. For the self-signed certificate, this password is generated by Dataproc.
  * keystoreUri `string`: Optional. The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
  * kmsKeyUri `string`: Optional. The uri of the KMS key used to encrypt various sensitive files.
  * realm `string`: Optional. The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm.
  * rootPrincipalPasswordUri `string`: Optional. The Cloud Storage URI of a KMS encrypted file containing the root principal password.
  * tgtLifetimeHours `integer`: Optional. The lifetime of the ticket granting ticket, in hours. If not specified, or user specifies 0, then default value 10 will be used.
  * truststorePasswordUri `string`: Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc.
  * truststoreUri `string`: Optional. The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.

### LifecycleConfig
* LifecycleConfig `object`: Specifies the cluster auto-delete schedule configuration.
  * autoDeleteTime `string`: Optional. The time when cluster will be auto-deleted. (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)).
  * autoDeleteTtl `string`: Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).
  * idleDeleteTtl `string`: Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json).
  * idleStartTime `string`: Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)).

### ListAutoscalingPoliciesResponse
* ListAutoscalingPoliciesResponse `object`: A response to a request to list autoscaling policies in a project.
  * nextPageToken `string`: Output only. This token is included in the response if there are more results to fetch.
  * policies `array`: Output only. Autoscaling policies list.
    * items [AutoscalingPolicy](#autoscalingpolicy)

### ListClustersResponse
* ListClustersResponse `object`: The list of all clusters in a project.
  * clusters `array`: Output only. The clusters in the project.
    * items [Cluster](#cluster)
  * nextPageToken `string`: Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListClustersRequest.

### ListJobsResponse
* ListJobsResponse `object`: A list of jobs in a project.
  * jobs `array`: Output only. Jobs list.
    * items [Job](#job)
  * nextPageToken `string`: Optional. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListJobsRequest.

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### ListWorkflowTemplatesResponse
* ListWorkflowTemplatesResponse `object`: A response to a request to list workflow templates in a project.
  * nextPageToken `string`: Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListWorkflowTemplatesRequest.
  * templates `array`: Output only. WorkflowTemplates list.
    * items [WorkflowTemplate](#workflowtemplate)

### LoggingConfig
* LoggingConfig `object`: The runtime logging config of the job.
  * driverLogLevels `object`: The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'

### ManagedCluster
* ManagedCluster `object`: Cluster that is managed by the workflow.
  * clusterName `string`: Required. The cluster name prefix. A unique cluster name will be formed by appending a random suffix.The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-). Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35 characters.
  * config [ClusterConfig](#clusterconfig)
  * labels `object`: Optional. The labels to associate with this cluster.Label keys must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given cluster.

### ManagedGroupConfig
* ManagedGroupConfig `object`: Specifies the resources used to actively manage an instance group.
  * instanceGroupManagerName `string`: Output only. The name of the Instance Group Manager for this group.
  * instanceTemplateName `string`: Output only. The name of the Instance Template used for the Managed Instance Group.

### MetastoreConfig
* MetastoreConfig `object`: Specifies a Metastore configuration.
  * dataprocMetastoreService `string`: Required. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[dataproc_region]/services/[service-name]

### NamespacedGkeDeploymentTarget
* NamespacedGkeDeploymentTarget `object`: A full, namespace-isolated deployment target for an existing GKE cluster.
  * clusterNamespace `string`: Optional. A namespace within the GKE cluster to deploy into.
  * targetGkeCluster `string`: Optional. The target GKE cluster to deploy to. Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'

### NodeGroupAffinity
* NodeGroupAffinity `object`: Node Group Affinity for clusters using sole-tenant node groups.
  * nodeGroupUri `string`: Required. The URI of a sole-tenant node group resource (https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on.A full URL, partial URI, or node group name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1 projects/[project_id]/zones/us-central1-a/nodeGroups/node-group-1 node-group-1

### NodeInitializationAction
* NodeInitializationAction `object`: Specifies an executable to run on a fully configured node and a timeout period for executable completion.
  * executableFile `string`: Required. Cloud Storage URI of executable file.
  * executionTimeout `string`: Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.

### OrderedJob
* OrderedJob `object`: A job executed by the workflow.
  * hadoopJob [HadoopJob](#hadoopjob)
  * hiveJob [HiveJob](#hivejob)
  * labels `object`: Optional. The labels to associate with this job.Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given job.
  * pigJob [PigJob](#pigjob)
  * prerequisiteStepIds `array`: Optional. The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow.
    * items `string`
  * prestoJob [PrestoJob](#prestojob)
  * pysparkJob [PySparkJob](#pysparkjob)
  * scheduling [JobScheduling](#jobscheduling)
  * sparkJob [SparkJob](#sparkjob)
  * sparkRJob [SparkRJob](#sparkrjob)
  * sparkSqlJob [SparkSqlJob](#sparksqljob)
  * stepId `string`: Required. The step id. The id must be unique among all jobs within the template.The step id is used as prefix for job id, as job goog-dataproc-workflow-step-id label, and in prerequisiteStepIds field from other steps.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.

### ParameterValidation
* ParameterValidation `object`: Configuration for parameter validation.
  * regex [RegexValidation](#regexvalidation)
  * values [ValueValidation](#valuevalidation)

### PigJob
* PigJob `object`: A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.
  * continueOnFailure `boolean`: Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
  * jarFileUris `array`: Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
    * items `string`
  * loggingConfig [LoggingConfig](#loggingconfig)
  * properties `object`: Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.
  * queryFileUri `string`: The HCFS URI of the script that contains the Pig queries.
  * queryList [QueryList](#querylist)
  * scriptVariables `object`: Optional. Mapping of query variable names to values (equivalent to the Pig command: name=[value]).

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members to a single role. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/).
  * bindings `array`: Associates a list of members to a role. Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.
  * version `integer`: Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).

### PrestoJob
* PrestoJob `object`: A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster.
  * clientTags `array`: Optional. Presto client tags to attach to this query
    * items `string`
  * continueOnFailure `boolean`: Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
  * loggingConfig [LoggingConfig](#loggingconfig)
  * outputFormat `string`: Optional. The format in which query output will be displayed. See the Presto documentation for supported output formats
  * properties `object`: Optional. A mapping of property names to values. Used to set Presto session properties (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI
  * queryFileUri `string`: The HCFS URI of the script that contains SQL queries.
  * queryList [QueryList](#querylist)

### PySparkJob
* PySparkJob `object`: A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN.
  * archiveUris `array`: Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
    * items `string`
  * args `array`: Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
    * items `string`
  * fileUris `array`: Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
    * items `string`
  * jarFileUris `array`: Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.
    * items `string`
  * loggingConfig [LoggingConfig](#loggingconfig)
  * mainPythonFileUri `string`: Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.
  * properties `object`: Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
  * pythonFileUris `array`: Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.
    * items `string`

### QueryList
* QueryList `object`: A list of queries to run on a cluster.
  * queries `array`: Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": { "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } } 
    * items `string`

### RegexValidation
* RegexValidation `object`: Validation based on regular expressions.
  * regexes `array`: Required. RE2 regular expressions used to validate the parameter's value. The value must match the regex in its entirety (substring matches are not sufficient).
    * items `string`

### ReservationAffinity
* ReservationAffinity `object`: Reservation Affinity for consuming Zonal reservation.
  * consumeReservationType `string` (values: TYPE_UNSPECIFIED, NO_RESERVATION, ANY_RESERVATION, SPECIFIC_RESERVATION): Optional. Type of reservation to consume
  * key `string`: Optional. Corresponds to the label key of reservation resource.
  * values `array`: Optional. Corresponds to the label values of reservation resource.
    * items `string`

### SecurityConfig
* SecurityConfig `object`: Security related configuration, including encryption, Kerberos, etc.
  * kerberosConfig [KerberosConfig](#kerberosconfig)

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for SetIamPolicy method.
  * policy [Policy](#policy)

### ShieldedInstanceConfig
* ShieldedInstanceConfig `object`: Shielded Instance Config for clusters using shielded VMs.
  * enableIntegrityMonitoring `boolean`: Optional. Defines whether instances have integrity monitoring enabled.
  * enableSecureBoot `boolean`: Optional. Defines whether instances have Secure Boot enabled.
  * enableVtpm `boolean`: Optional. Defines whether instances have the vTPM enabled.

### SoftwareConfig
* SoftwareConfig `object`: Specifies the selection and config of software inside the cluster.
  * imageVersion `string`: Optional. The version of software inside the cluster. It must be one of the supported Dataproc Versions (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported_dataproc_versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the "preview" version (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version.
  * optionalComponents `array`: The set of optional components to activate on the cluster.
    * items `string` (values: COMPONENT_UNSPECIFIED, ANACONDA, DOCKER, DRUID, FLINK, HBASE, HIVE_WEBHCAT, JUPYTER, KERBEROS, PRESTO, RANGER, SOLR, ZEPPELIN, ZOOKEEPER)
  * properties `object`: Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. The following are supported prefixes and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xmlFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).

### SparkJob
* SparkJob `object`: A Dataproc job for running Apache Spark (http://spark.apache.org/) applications on YARN. The specification of the main method to call to drive the job. Specify either the jar file that contains the main class or the main class name. To pass both a main jar and a main class in that jar, add the jar to CommonJob.jar_file_uris, and then specify the main class name in main_class.
  * archiveUris `array`: Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
    * items `string`
  * args `array`: Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
    * items `string`
  * fileUris `array`: Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
    * items `string`
  * jarFileUris `array`: Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
    * items `string`
  * loggingConfig [LoggingConfig](#loggingconfig)
  * mainClass `string`: The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris.
  * mainJarFileUri `string`: The HCFS URI of the jar file that contains the main class.
  * properties `object`: Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

### SparkRJob
* SparkRJob `object`: A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN.
  * archiveUris `array`: Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
    * items `string`
  * args `array`: Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
    * items `string`
  * fileUris `array`: Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
    * items `string`
  * loggingConfig [LoggingConfig](#loggingconfig)
  * mainRFileUri `string`: Required. The HCFS URI of the main R file to use as the driver. Must be a .R file.
  * properties `object`: Optional. A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

### SparkSqlJob
* SparkSqlJob `object`: A Dataproc job for running Apache Spark SQL (http://spark.apache.org/sql/) queries.
  * jarFileUris `array`: Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.
    * items `string`
  * loggingConfig [LoggingConfig](#loggingconfig)
  * properties `object`: Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API may be overwritten.
  * queryFileUri `string`: The HCFS URI of the script that contains SQL queries.
  * queryList [QueryList](#querylist)
  * scriptVariables `object`: Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

### StartClusterRequest
* StartClusterRequest `object`: A request to start a cluster.
  * clusterUuid `string`: Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist.
  * requestId `string`: Optional. A unique id used to identify the request. If the server receives two StartClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.

### Status
* Status `object`: The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### StopClusterRequest
* StopClusterRequest `object`: A request to stop a cluster.
  * clusterUuid `string`: Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist.
  * requestId `string`: Optional. A unique id used to identify the request. If the server receives two StopClusterRequest requests with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.

### SubmitJobRequest
* SubmitJobRequest `object`: A request to submit a job.
  * job [Job](#job)
  * requestId `string`: Optional. A unique id used to identify the request. If the server receives two SubmitJobRequest requests with the same id, then the second request will be ignored and the first Job created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.

### TemplateParameter
* TemplateParameter `object`: A configurable parameter that replaces one or more fields in the template. Parameterizable fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in HadoopJob and SparkJob) - Zone (in ClusterSelector)
  * description `string`: Optional. Brief description of the parameter. Must not exceed 1024 characters.
  * fields `array`: Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter's list of field paths.A field path is similar in syntax to a google.protobuf.FieldMask. For example, a field path that references the zone field of a workflow template's cluster selector would be specified as placement.clusterSelector.zone.Also, field paths can reference fields using the following syntax: Values in maps can be referenced by key: labels'key' placement.clusterSelector.clusterLabels'key' placement.managedCluster.labels'key' placement.clusterSelector.clusterLabels'key' jobs'step-id'.labels'key' Jobs in the jobs list can be referenced by step-id: jobs'step-id'.hadoopJob.mainJarFileUri jobs'step-id'.hiveJob.queryFileUri jobs'step-id'.pySparkJob.mainPythonFileUri jobs'step-id'.hadoopJob.jarFileUris0 jobs'step-id'.hadoopJob.archiveUris0 jobs'step-id'.hadoopJob.fileUris0 jobs'step-id'.pySparkJob.pythonFileUris0 Items in repeated fields can be referenced by a zero-based index: jobs'step-id'.sparkJob.args0 Other examples: jobs'step-id'.hadoopJob.properties'key' jobs'step-id'.hadoopJob.args0 jobs'step-id'.hiveJob.scriptVariables'key' jobs'step-id'.hadoopJob.mainJarFileUri placement.clusterSelector.zoneIt may not be possible to parameterize maps and repeated fields in their entirety since only individual map values and individual items in repeated fields can be referenced. For example, the following field paths are invalid: placement.clusterSelector.clusterLabels jobs'step-id'.sparkJob.args
    * items `string`
  * name `string`: Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters.
  * validation [ParameterValidation](#parametervalidation)

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for TestIamPermissions method.
  * permissions `array`: The set of permissions to check for the resource. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for TestIamPermissions method.
  * permissions `array`: A subset of TestPermissionsRequest.permissions that the caller is allowed.
    * items `string`

### ValueValidation
* ValueValidation `object`: Validation based on a list of allowed values.
  * values `array`: Required. List of allowed values for the parameter.
    * items `string`

### WorkflowGraph
* WorkflowGraph `object`: The workflow graph.
  * nodes `array`: Output only. The workflow nodes.
    * items [WorkflowNode](#workflownode)

### WorkflowMetadata
* WorkflowMetadata `object`: A Dataproc workflow template resource.
  * parameters `object`: Map from parameter names to values that were used for those parameters.
  * clusterName `string`: Output only. The name of the target cluster.
  * clusterUuid `string`: Output only. The UUID of target cluster.
  * createCluster [ClusterOperation](#clusteroperation)
  * dagEndTime `string`: Output only. DAG end time, which is only set for workflows with dag_timeout when the DAG ends.
  * dagStartTime `string`: Output only. DAG start time, which is only set for workflows with dag_timeout when the DAG begins.
  * dagTimeout `string`: Output only. The timeout duration for the DAG of jobs. Minimum timeout duration is 10 minutes and maximum is 24 hours, expressed as a google.protobuf.Duration. For example, "1800" = 1800 seconds/30 minutes duration.
  * deleteCluster [ClusterOperation](#clusteroperation)
  * endTime `string`: Output only. Workflow end time.
  * graph [WorkflowGraph](#workflowgraph)
  * startTime `string`: Output only. Workflow start time.
  * state `string` (values: UNKNOWN, PENDING, RUNNING, DONE): Output only. The workflow state.
  * template `string`: Output only. The resource name of the workflow template as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
  * version `integer`: Output only. The version of template at the time of workflow instantiation.

### WorkflowNode
* WorkflowNode `object`: The workflow node.
  * error `string`: Output only. The error detail.
  * jobId `string`: Output only. The job id; populated after the node enters RUNNING state.
  * prerequisiteStepIds `array`: Output only. Node's prerequisite nodes.
    * items `string`
  * state `string` (values: NODE_STATUS_UNSPECIFIED, BLOCKED, RUNNABLE, RUNNING, COMPLETED, FAILED): Output only. The node state.
  * stepId `string`: Output only. The name of the node.

### WorkflowTemplate
* WorkflowTemplate `object`: A Dataproc workflow template resource.
  * parameters `array`: Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.
    * items [TemplateParameter](#templateparameter)
  * createTime `string`: Output only. The time template was created.
  * dagTimeout `string`: Optional. Timeout duration for the DAG of jobs. You can use "s", "m", "h", and "d" suffixes for second, minute, hour, and day duration values, respectively. The timeout duration must be from 10 minutes ("10m") to 24 hours ("24h" or "1d"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a managed cluster, the cluster is deleted.
  * id `string`: Required. The template id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters..
  * jobs `array`: Required. The Directed Acyclic Graph of Jobs to submit.
    * items [OrderedJob](#orderedjob)
  * labels `object`: Optional. The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance.Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt).No more than 32 labels can be associated with a template.
  * name `string`: Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. For projects.regions.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/regions/{region}/workflowTemplates/{template_id} For projects.locations.workflowTemplates, the resource name of the template has the following format: projects/{project_id}/locations/{location}/workflowTemplates/{template_id}
  * placement [WorkflowTemplatePlacement](#workflowtemplateplacement)
  * updateTime `string`: Output only. The time template was last updated.
  * version `integer`: Optional. Used to perform a consistent read-modify-write.This field should be left blank for a CreateWorkflowTemplate request. It is required for an UpdateWorkflowTemplate request, and must match the current server version. A typical update template flow would fetch the current template with a GetWorkflowTemplate request, which will return the current template with the version field filled in with the current server version. The user updates other fields in the template, then returns it as part of the UpdateWorkflowTemplate request.

### WorkflowTemplatePlacement
* WorkflowTemplatePlacement `object`: Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
  * clusterSelector [ClusterSelector](#clusterselector)
  * managedCluster [ManagedCluster](#managedcluster)

### YarnApplication
* YarnApplication `object`: A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
  * name `string`: Output only. The application name.
  * progress `number`: Output only. The numerical progress of the application, from 1 to 100.
  * state `string` (values: STATE_UNSPECIFIED, NEW, NEW_SAVING, SUBMITTED, ACCEPTED, RUNNING, FINISHED, FAILED, KILLED): Output only. The application state.
  * trackingUrl `string`: Output only. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides application-specific information. The URL uses the internal hostname, and requires a proxy server for resolution and, possibly, access.


