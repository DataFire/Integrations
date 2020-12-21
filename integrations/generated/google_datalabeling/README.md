# @datafire/google_datalabeling

Client library for Data Labeling API

## Installation and Usage
```bash
npm install --save @datafire/google_datalabeling
```
```js
let google_datalabeling = require('@datafire/google_datalabeling').create({
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

Public API for Google Cloud AI Data Labeling Service.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_datalabeling.oauthCallback({
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
google_datalabeling.oauthRefresh(null, context)
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

### datalabeling.projects.operations.delete
Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.


```js
google_datalabeling.datalabeling.projects.operations.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be deleted.
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
* output [GoogleProtobufEmpty](#googleprotobufempty)

### datalabeling.projects.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.


```js
google_datalabeling.datalabeling.projects.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
  * filter `string`: Optional. An expression for filtering Examples. Filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}"
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### datalabeling.projects.evaluationJobs.patch
Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.


```js
google_datalabeling.datalabeling.projects.evaluationJobs.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}"
  * updateMask `string`: Optional. Mask for which fields to update. You can only provide the following fields: * `evaluationJobConfig.humanAnnotationConfig.instruction` * `evaluationJobConfig.exampleCount` * `evaluationJobConfig.exampleSamplePercentage` You can provide more than one of these fields by separating them with commas.
  * body [GoogleCloudDatalabelingV1beta1EvaluationJob](#googleclouddatalabelingv1beta1evaluationjob)
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
* output [GoogleCloudDatalabelingV1beta1EvaluationJob](#googleclouddatalabelingv1beta1evaluationjob)

### datalabeling.projects.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_datalabeling.datalabeling.projects.operations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation's parent resource.
  * filter `string`: The standard list filter.
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
* output [GoogleLongrunningListOperationsResponse](#googlelongrunninglistoperationsresponse)

### datalabeling.projects.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.


```js
google_datalabeling.datalabeling.projects.operations.cancel({
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
* output [GoogleProtobufEmpty](#googleprotobufempty)

### datalabeling.projects.datasets.exportData
Exports data and annotations from dataset.


```js
google_datalabeling.datalabeling.projects.datasets.exportData({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}
  * body [GoogleCloudDatalabelingV1beta1ExportDataRequest](#googleclouddatalabelingv1beta1exportdatarequest)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### datalabeling.projects.datasets.importData
Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.


```js
google_datalabeling.datalabeling.projects.datasets.importData({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}
  * body [GoogleCloudDatalabelingV1beta1ImportDataRequest](#googleclouddatalabelingv1beta1importdatarequest)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### datalabeling.projects.evaluationJobs.pause
Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.


```js
google_datalabeling.datalabeling.projects.evaluationJobs.pause({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the evaluation job that is going to be paused. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}"
  * body [GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest](#googleclouddatalabelingv1beta1pauseevaluationjobrequest)
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
* output [GoogleProtobufEmpty](#googleprotobufempty)

### datalabeling.projects.evaluationJobs.resume
Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.


```js
google_datalabeling.datalabeling.projects.evaluationJobs.resume({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the evaluation job that is going to be resumed. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}"
  * body [GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest](#googleclouddatalabelingv1beta1resumeevaluationjobrequest)
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
* output [GoogleProtobufEmpty](#googleprotobufempty)

### datalabeling.projects.datasets.annotatedDatasets.list
Lists annotated datasets for a dataset. Pagination is supported.


```js
google_datalabeling.datalabeling.projects.datasets.annotatedDatasets.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the dataset to list annotated datasets, format: projects/{project_id}/datasets/{dataset_id}
  * filter `string`: Optional. Filter is not supported at this moment.
  * pageSize `integer`: Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
  * pageToken `string`: Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotatedDatasetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotatedDatasets] call. Return first page if empty.
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
* output [GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse](#googleclouddatalabelingv1beta1listannotateddatasetsresponse)

### datalabeling.projects.annotationSpecSets.list
Lists annotation spec sets for a project. Pagination is supported.


```js
google_datalabeling.datalabeling.projects.annotationSpecSets.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Parent of AnnotationSpecSet resource, format: projects/{project_id}
  * filter `string`: Optional. Filter is not supported at this moment.
  * pageSize `integer`: Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
  * pageToken `string`: Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotationSpecSetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotationSpecSets] call. Return first page if empty.
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
* output [GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse](#googleclouddatalabelingv1beta1listannotationspecsetsresponse)

### datalabeling.projects.annotationSpecSets.create
Creates an annotation spec set by providing a set of labels.


```js
google_datalabeling.datalabeling.projects.annotationSpecSets.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. AnnotationSpecSet resource parent, format: projects/{project_id}
  * body [GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest](#googleclouddatalabelingv1beta1createannotationspecsetrequest)
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
* output [GoogleCloudDatalabelingV1beta1AnnotationSpecSet](#googleclouddatalabelingv1beta1annotationspecset)

### datalabeling.projects.datasets.dataItems.list
Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.


```js
google_datalabeling.datalabeling.projects.datasets.dataItems.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the dataset to list data items, format: projects/{project_id}/datasets/{dataset_id}
  * filter `string`: Optional. Filter is not supported at this moment.
  * pageSize `integer`: Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
  * pageToken `string`: Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty.
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
* output [GoogleCloudDatalabelingV1beta1ListDataItemsResponse](#googleclouddatalabelingv1beta1listdataitemsresponse)

### datalabeling.projects.datasets.list
Lists datasets under a project. Pagination is supported.


```js
google_datalabeling.datalabeling.projects.datasets.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Dataset resource parent, format: projects/{project_id}
  * filter `string`: Optional. Filter on dataset is not supported at this moment.
  * pageSize `integer`: Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
  * pageToken `string`: Optional. A token identifying a page of results for the server to return. Typically obtained by ListDatasetsResponse.next_page_token of the previous [DataLabelingService.ListDatasets] call. Returns the first page if empty.
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
* output [GoogleCloudDatalabelingV1beta1ListDatasetsResponse](#googleclouddatalabelingv1beta1listdatasetsresponse)

### datalabeling.projects.datasets.create
Creates dataset. If success return a Dataset resource.


```js
google_datalabeling.datalabeling.projects.datasets.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Dataset resource parent, format: projects/{project_id}
  * body [GoogleCloudDatalabelingV1beta1CreateDatasetRequest](#googleclouddatalabelingv1beta1createdatasetrequest)
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
* output [GoogleCloudDatalabelingV1beta1Dataset](#googleclouddatalabelingv1beta1dataset)

### datalabeling.projects.evaluationJobs.list
Lists all evaluation jobs within a project with possible filters. Pagination is supported.


```js
google_datalabeling.datalabeling.projects.evaluationJobs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Evaluation job resource parent. Format: "projects/{project_id}"
  * filter `string`: Optional. You can filter the jobs to list by model_id (also known as model_name, as described in EvaluationJob.modelVersion) or by evaluation job state (as described in EvaluationJob.state). To filter by both criteria, use the `AND` operator or the `OR` operator. For example, you can use the following string for your filter: "evaluation_job.model_id = {model_name} AND evaluation_job.state = {evaluation_job_state}"
  * pageSize `integer`: Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
  * pageToken `string`: Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken in the response to the previous request. The request returns the first page if this is empty.
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
* output [GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse](#googleclouddatalabelingv1beta1listevaluationjobsresponse)

### datalabeling.projects.evaluationJobs.create
Creates an evaluation job.


```js
google_datalabeling.datalabeling.projects.evaluationJobs.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Evaluation job resource parent. Format: "projects/{project_id}"
  * body [GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest](#googleclouddatalabelingv1beta1createevaluationjobrequest)
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
* output [GoogleCloudDatalabelingV1beta1EvaluationJob](#googleclouddatalabelingv1beta1evaluationjob)

### datalabeling.projects.evaluations.search
Searches evaluations within a project.


```js
google_datalabeling.datalabeling.projects.evaluations.search({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Evaluation search parent (project ID). Format: "projects/ {project_id}"
  * filter `string`: Optional. To search evaluations, you can filter by the following: * evaluation_job.evaluation_job_id (the last part of EvaluationJob.name) * evaluation_job.model_id (the {model_name} portion of EvaluationJob.modelVersion) * evaluation_job.evaluation_job_run_time_start (Minimum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.evaluation_job_run_time_end (Maximum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.job_state (EvaluationJob.state) * annotation_spec.display_name (the Evaluation contains a metric for the annotation spec with this displayName) To filter by multiple critiera, use the `AND` operator or the `OR` operator. The following examples shows a string that filters by several critiera: "evaluation_job.evaluation_job_id = {evaluation_job_id} AND evaluation_job.model_id = {model_name} AND evaluation_job.evaluation_job_run_time_start = {timestamp_1} AND evaluation_job.evaluation_job_run_time_end = {timestamp_2} AND annotation_spec.display_name = {display_name}"
  * pageSize `integer`: Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
  * pageToken `string`: Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search request. If you don't specify this field, the API call requests the first page of the search.
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
* output [GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse](#googleclouddatalabelingv1beta1searchevaluationsresponse)

### datalabeling.projects.datasets.evaluations.exampleComparisons.search
Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.


```js
google_datalabeling.datalabeling.projects.datasets.evaluations.exampleComparisons.search({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the Evaluation resource to search for example comparisons from. Format: "projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}"
  * body [GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest](#googleclouddatalabelingv1beta1searchexamplecomparisonsrequest)
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
* output [GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse](#googleclouddatalabelingv1beta1searchexamplecomparisonsresponse)

### datalabeling.projects.datasets.annotatedDatasets.examples.list
Lists examples in an annotated dataset. Pagination is supported.


```js
google_datalabeling.datalabeling.projects.datasets.annotatedDatasets.examples.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Example resource parent.
  * filter `string`: Optional. An expression for filtering Examples. For annotated datasets that have annotation spec set, filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}"
  * pageSize `integer`: Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
  * pageToken `string`: Optional. A token identifying a page of results for the server to return. Typically obtained by ListExamplesResponse.next_page_token of the previous [DataLabelingService.ListExamples] call. Return first page if empty.
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
* output [GoogleCloudDatalabelingV1beta1ListExamplesResponse](#googleclouddatalabelingv1beta1listexamplesresponse)

### datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.list
List FeedbackMessages with pagination.


```js
google_datalabeling.datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. FeedbackMessage resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}"
  * pageSize `integer`: Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
  * pageToken `string`: Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackMessages.next_page_token of the previous [DataLabelingService.ListFeedbackMessages] call. Return first page if empty.
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
* output [GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse](#googleclouddatalabelingv1beta1listfeedbackmessagesresponse)

### datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.create
Create a FeedbackMessage object.


```js
google_datalabeling.datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. FeedbackMessage resource parent, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}.
  * body [GoogleCloudDatalabelingV1beta1FeedbackMessage](#googleclouddatalabelingv1beta1feedbackmessage)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.list
List FeedbackThreads with pagination.


```js
google_datalabeling.datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. FeedbackThread resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}"
  * pageSize `integer`: Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
  * pageToken `string`: Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackThreads.next_page_token of the previous [DataLabelingService.ListFeedbackThreads] call. Return first page if empty.
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
* output [GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse](#googleclouddatalabelingv1beta1listfeedbackthreadsresponse)

### datalabeling.projects.datasets.image.label
Starts a labeling task for image. The type of image labeling task is configured by feature in the request.


```js
google_datalabeling.datalabeling.projects.datasets.image.label({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id}
  * body [GoogleCloudDatalabelingV1beta1LabelImageRequest](#googleclouddatalabelingv1beta1labelimagerequest)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### datalabeling.projects.instructions.list
Lists instructions for a project. Pagination is supported.


```js
google_datalabeling.datalabeling.projects.instructions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Instruction resource parent, format: projects/{project_id}
  * filter `string`: Optional. Filter is not supported at this moment.
  * pageSize `integer`: Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
  * pageToken `string`: Optional. A token identifying a page of results for the server to return. Typically obtained by ListInstructionsResponse.next_page_token of the previous [DataLabelingService.ListInstructions] call. Return first page if empty.
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
* output [GoogleCloudDatalabelingV1beta1ListInstructionsResponse](#googleclouddatalabelingv1beta1listinstructionsresponse)

### datalabeling.projects.instructions.create
Creates an instruction for how data should be labeled.


```js
google_datalabeling.datalabeling.projects.instructions.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Instruction resource parent, format: projects/{project_id}
  * body [GoogleCloudDatalabelingV1beta1CreateInstructionRequest](#googleclouddatalabelingv1beta1createinstructionrequest)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### datalabeling.projects.datasets.text.label
Starts a labeling task for text. The type of text labeling task is configured by feature in the request.


```js
google_datalabeling.datalabeling.projects.datasets.text.label({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the data set to request labeling task, format: projects/{project_id}/datasets/{dataset_id}
  * body [GoogleCloudDatalabelingV1beta1LabelTextRequest](#googleclouddatalabelingv1beta1labeltextrequest)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### datalabeling.projects.datasets.video.label
Starts a labeling task for video. The type of video labeling task is configured by feature in the request.


```js
google_datalabeling.datalabeling.projects.datasets.video.label({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id}
  * body [GoogleCloudDatalabelingV1beta1LabelVideoRequest](#googleclouddatalabelingv1beta1labelvideorequest)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)



## Definitions

### GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata
* GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata `object`: Metadata of a CreateInstruction operation.
  * createTime `string`: Timestamp when create instruction request was created.
  * instruction `string`: The name of the created Instruction. projects/{project_id}/instructions/{instruction_id}
  * partialFailures `array`: Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadata
* GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadata `object`: Metadata of an ExportData operation.
  * annotatedDataset `string`: Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".
  * createTime `string`: Output only. Timestamp when export dataset request was created.
  * dataset `string`: Output only. The name of dataset to be exported. "projects/*/datasets/*"
  * partialFailures `array`: Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse
* GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse `object`: Response used for ExportDataset longrunning operation.
  * annotatedDataset `string`: Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".
  * dataset `string`: Ouptut only. The name of dataset. "projects/*/datasets/*"
  * exportCount `integer`: Output only. Number of examples exported successfully.
  * labelStats [GoogleCloudDatalabelingV1alpha1LabelStats](#googleclouddatalabelingv1alpha1labelstats)
  * outputConfig [GoogleCloudDatalabelingV1alpha1OutputConfig](#googleclouddatalabelingv1alpha1outputconfig)
  * totalCount `integer`: Output only. Total number of examples requested to export

### GoogleCloudDatalabelingV1alpha1GcsDestination
* GoogleCloudDatalabelingV1alpha1GcsDestination `object`: Export destination of the data.Only gcs path is allowed in output_uri.
  * mimeType `string`: Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.
  * outputUri `string`: Required. The output uri of destination file.

### GoogleCloudDatalabelingV1alpha1GcsFolderDestination
* GoogleCloudDatalabelingV1alpha1GcsFolderDestination `object`: Export folder destination of the data.
  * outputFolderUri `string`: Required. Cloud Storage directory to export data to.

### GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig
* GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig `object`: Configuration for how human labeling task should be done.
  * annotatedDatasetDescription `string`: Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.
  * annotatedDatasetDisplayName `string`: Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .
  * contributorEmails `array`: Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/
    * items `string`
  * instruction `string`: Required. Instruction resource name.
  * labelGroup `string`: Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`.
  * languageCode `string`: Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.
  * questionDuration `string`: Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.
  * replicaCount `integer`: Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
  * userEmailAddress `string`: Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.

### GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadata
* GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadata `object`: Metadata of an ImportData operation.
  * createTime `string`: Output only. Timestamp when import dataset request was created.
  * dataset `string`: Output only. The name of imported dataset. "projects/*/datasets/*"
  * partialFailures `array`: Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDatalabelingV1alpha1ImportDataOperationResponse
* GoogleCloudDatalabelingV1alpha1ImportDataOperationResponse `object`: Response used for ImportData longrunning operation.
  * dataset `string`: Ouptut only. The name of imported dataset.
  * importCount `integer`: Output only. Number of examples imported successfully.
  * totalCount `integer`: Output only. Total number of examples requested to import

### GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata
* GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata `object`: Details of a LabelImageBoundingBox operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata
* GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata `object`: Details of LabelImageBoundingPoly operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata
* GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata `object`: Metadata of a LabelImageClassification operation.
  * basicConfig [GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata
* GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata `object`: Details of a LabelImageOrientedBoundingBox operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata
* GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata `object`: Details of LabelImagePolyline operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata
* GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata `object`: Details of a LabelImageSegmentation operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1alpha1LabelOperationMetadata
* GoogleCloudDatalabelingV1alpha1LabelOperationMetadata `object`: Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23
  * annotatedDataset `string`: Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".
  * createTime `string`: Output only. Timestamp when labeling request was created.
  * dataset `string`: Output only. The name of dataset to be labeled. "projects/*/datasets/*"
  * imageBoundingBoxDetails [GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata](#googleclouddatalabelingv1alpha1labelimageboundingboxoperationmetadata)
  * imageBoundingPolyDetails [GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata](#googleclouddatalabelingv1alpha1labelimageboundingpolyoperationmetadata)
  * imageClassificationDetails [GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata](#googleclouddatalabelingv1alpha1labelimageclassificationoperationmetadata)
  * imageOrientedBoundingBoxDetails [GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata](#googleclouddatalabelingv1alpha1labelimageorientedboundingboxoperationmetadata)
  * imagePolylineDetails [GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata](#googleclouddatalabelingv1alpha1labelimagepolylineoperationmetadata)
  * imageSegmentationDetails [GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata](#googleclouddatalabelingv1alpha1labelimagesegmentationoperationmetadata)
  * partialFailures `array`: Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)
  * progressPercent `integer`: Output only. Progress of label operation. Range: [0, 100].
  * textClassificationDetails [GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata](#googleclouddatalabelingv1alpha1labeltextclassificationoperationmetadata)
  * textEntityExtractionDetails [GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata](#googleclouddatalabelingv1alpha1labeltextentityextractionoperationmetadata)
  * videoClassificationDetails [GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata](#googleclouddatalabelingv1alpha1labelvideoclassificationoperationmetadata)
  * videoEventDetails [GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata](#googleclouddatalabelingv1alpha1labelvideoeventoperationmetadata)
  * videoObjectDetectionDetails [GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata](#googleclouddatalabelingv1alpha1labelvideoobjectdetectionoperationmetadata)
  * videoObjectTrackingDetails [GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata](#googleclouddatalabelingv1alpha1labelvideoobjecttrackingoperationmetadata)

### GoogleCloudDatalabelingV1alpha1LabelStats
* GoogleCloudDatalabelingV1alpha1LabelStats `object`: Statistics about annotation specs.
  * exampleCount `object`: Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.

### GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata
* GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata `object`: Details of a LabelTextClassification operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata
* GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata `object`: Details of a LabelTextEntityExtraction operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata
* GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata `object`: Details of a LabelVideoClassification operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata
* GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata `object`: Details of a LabelVideoEvent operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata
* GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata `object`: Details of a LabelVideoObjectDetection operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata
* GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata `object`: Details of a LabelVideoObjectTracking operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1alpha1OutputConfig
* GoogleCloudDatalabelingV1alpha1OutputConfig `object`: The configuration of output data.
  * gcsDestination [GoogleCloudDatalabelingV1alpha1GcsDestination](#googleclouddatalabelingv1alpha1gcsdestination)
  * gcsFolderDestination [GoogleCloudDatalabelingV1alpha1GcsFolderDestination](#googleclouddatalabelingv1alpha1gcsfolderdestination)

### GoogleCloudDatalabelingV1beta1AnnotatedDataset
* GoogleCloudDatalabelingV1beta1AnnotatedDataset `object`: AnnotatedDataset is a set holding annotations for data in a Dataset. Each labeling task will generate an AnnotatedDataset under the Dataset that the task is requested for.
  * annotationSource `string` (values: ANNOTATION_SOURCE_UNSPECIFIED, OPERATOR): Output only. Source of the annotation.
  * annotationType `string` (values: ANNOTATION_TYPE_UNSPECIFIED, IMAGE_CLASSIFICATION_ANNOTATION, IMAGE_BOUNDING_BOX_ANNOTATION, IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION, IMAGE_BOUNDING_POLY_ANNOTATION, IMAGE_POLYLINE_ANNOTATION, IMAGE_SEGMENTATION_ANNOTATION, VIDEO_SHOTS_CLASSIFICATION_ANNOTATION, VIDEO_OBJECT_TRACKING_ANNOTATION, VIDEO_OBJECT_DETECTION_ANNOTATION, VIDEO_EVENT_ANNOTATION, TEXT_CLASSIFICATION_ANNOTATION, TEXT_ENTITY_EXTRACTION_ANNOTATION, GENERAL_CLASSIFICATION_ANNOTATION): Output only. Type of the annotation. It is specified when starting labeling task.
  * blockingResources `array`: Output only. The names of any related resources that are blocking changes to the annotated dataset.
    * items `string`
  * completedExampleCount `string`: Output only. Number of examples that have annotation in the annotated dataset.
  * createTime `string`: Output only. Time the AnnotatedDataset was created.
  * description `string`: Output only. The description of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 10000 characters.
  * displayName `string`: Output only. The display name of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 64 characters.
  * exampleCount `string`: Output only. Number of examples in the annotated dataset.
  * labelStats [GoogleCloudDatalabelingV1beta1LabelStats](#googleclouddatalabelingv1beta1labelstats)
  * metadata [GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata](#googleclouddatalabelingv1beta1annotateddatasetmetadata)
  * name `string`: Output only. AnnotatedDataset resource name in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}

### GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata
* GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata `object`: Metadata on AnnotatedDataset.
  * boundingPolyConfig [GoogleCloudDatalabelingV1beta1BoundingPolyConfig](#googleclouddatalabelingv1beta1boundingpolyconfig)
  * eventConfig [GoogleCloudDatalabelingV1beta1EventConfig](#googleclouddatalabelingv1beta1eventconfig)
  * humanAnnotationConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)
  * imageClassificationConfig [GoogleCloudDatalabelingV1beta1ImageClassificationConfig](#googleclouddatalabelingv1beta1imageclassificationconfig)
  * objectDetectionConfig [GoogleCloudDatalabelingV1beta1ObjectDetectionConfig](#googleclouddatalabelingv1beta1objectdetectionconfig)
  * objectTrackingConfig [GoogleCloudDatalabelingV1beta1ObjectTrackingConfig](#googleclouddatalabelingv1beta1objecttrackingconfig)
  * polylineConfig [GoogleCloudDatalabelingV1beta1PolylineConfig](#googleclouddatalabelingv1beta1polylineconfig)
  * segmentationConfig [GoogleCloudDatalabelingV1beta1SegmentationConfig](#googleclouddatalabelingv1beta1segmentationconfig)
  * textClassificationConfig [GoogleCloudDatalabelingV1beta1TextClassificationConfig](#googleclouddatalabelingv1beta1textclassificationconfig)
  * textEntityExtractionConfig [GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig](#googleclouddatalabelingv1beta1textentityextractionconfig)
  * videoClassificationConfig [GoogleCloudDatalabelingV1beta1VideoClassificationConfig](#googleclouddatalabelingv1beta1videoclassificationconfig)

### GoogleCloudDatalabelingV1beta1Annotation
* GoogleCloudDatalabelingV1beta1Annotation `object`: Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation.
  * annotationMetadata [GoogleCloudDatalabelingV1beta1AnnotationMetadata](#googleclouddatalabelingv1beta1annotationmetadata)
  * annotationSentiment `string` (values: ANNOTATION_SENTIMENT_UNSPECIFIED, NEGATIVE, POSITIVE): Output only. Sentiment for this annotation.
  * annotationSource `string` (values: ANNOTATION_SOURCE_UNSPECIFIED, OPERATOR): Output only. The source of the annotation.
  * annotationValue [GoogleCloudDatalabelingV1beta1AnnotationValue](#googleclouddatalabelingv1beta1annotationvalue)
  * name `string`: Output only. Unique name of this annotation, format is: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset}/examples/{example_id}/annotations/{annotation_id}

### GoogleCloudDatalabelingV1beta1AnnotationMetadata
* GoogleCloudDatalabelingV1beta1AnnotationMetadata `object`: Additional information associated with the annotation.
  * operatorMetadata [GoogleCloudDatalabelingV1beta1OperatorMetadata](#googleclouddatalabelingv1beta1operatormetadata)

### GoogleCloudDatalabelingV1beta1AnnotationSpec
* GoogleCloudDatalabelingV1beta1AnnotationSpec `object`: Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.
  * description `string`: Optional. User-provided description of the annotation specification. The description can be up to 10,000 characters long.
  * displayName `string`: Required. The display name of the AnnotationSpec. Maximum of 64 characters.
  * index `integer`: Output only. This is the integer index of the AnnotationSpec. The index for the whole AnnotationSpecSet is sequential starting from 0. For example, an AnnotationSpecSet with classes `dog` and `cat`, might contain one AnnotationSpec with `{ display_name: "dog", index: 0 }` and one AnnotationSpec with `{ display_name: "cat", index: 1 }`. This is especially useful for model training as it encodes the string labels into numeric values.

### GoogleCloudDatalabelingV1beta1AnnotationSpecSet
* GoogleCloudDatalabelingV1beta1AnnotationSpecSet `object`: An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation.
  * annotationSpecs `array`: Required. The array of AnnotationSpecs that you define when you create the AnnotationSpecSet. These are the possible labels for the labeling task.
    * items [GoogleCloudDatalabelingV1beta1AnnotationSpec](#googleclouddatalabelingv1beta1annotationspec)
  * blockingResources `array`: Output only. The names of any related resources that are blocking changes to the annotation spec set.
    * items `string`
  * description `string`: Optional. User-provided description of the annotation specification set. The description can be up to 10,000 characters long.
  * displayName `string`: Required. The display name for AnnotationSpecSet that you define when you create it. Maximum of 64 characters.
  * name `string`: Output only. The AnnotationSpecSet resource name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}"

### GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig
* GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig `object`: Annotation spec set with the setting of allowing multi labels or not.
  * allowMultiLabel `boolean`: Optional. If allow_multi_label is true, contributors are able to choose multiple labels from one annotation spec set.
  * annotationSpecSet `string`: Required. Annotation spec set resource name.

### GoogleCloudDatalabelingV1beta1AnnotationValue
* GoogleCloudDatalabelingV1beta1AnnotationValue `object`: Annotation value for an example.
  * imageBoundingPolyAnnotation [GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation](#googleclouddatalabelingv1beta1imageboundingpolyannotation)
  * imageClassificationAnnotation [GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation](#googleclouddatalabelingv1beta1imageclassificationannotation)
  * imagePolylineAnnotation [GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation](#googleclouddatalabelingv1beta1imagepolylineannotation)
  * imageSegmentationAnnotation [GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation](#googleclouddatalabelingv1beta1imagesegmentationannotation)
  * textClassificationAnnotation [GoogleCloudDatalabelingV1beta1TextClassificationAnnotation](#googleclouddatalabelingv1beta1textclassificationannotation)
  * textEntityExtractionAnnotation [GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation](#googleclouddatalabelingv1beta1textentityextractionannotation)
  * videoClassificationAnnotation [GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation](#googleclouddatalabelingv1beta1videoclassificationannotation)
  * videoEventAnnotation [GoogleCloudDatalabelingV1beta1VideoEventAnnotation](#googleclouddatalabelingv1beta1videoeventannotation)
  * videoObjectTrackingAnnotation [GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation](#googleclouddatalabelingv1beta1videoobjecttrackingannotation)

### GoogleCloudDatalabelingV1beta1Attempt
* GoogleCloudDatalabelingV1beta1Attempt `object`: Records a failed evaluation job run.
  * attemptTime `string`
  * partialFailures `array`: Details of errors that occurred.
    * items [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDatalabelingV1beta1BigQuerySource
* GoogleCloudDatalabelingV1beta1BigQuerySource `object`: The BigQuery location for input data. If used in an EvaluationJob, this is where the service saves the prediction input and output sampled from the model version.
  * inputUri `string`: Required. BigQuery URI to a table, up to 2,000 characters long. If you specify the URI of a table that does not exist, Data Labeling Service creates a table at the URI with the correct schema when you create your EvaluationJob. If you specify the URI of a table that already exists, it must have the [correct schema](/ml-engine/docs/continuous-evaluation/create-job#table-schema). Provide the table URI in the following format: "bq://{your_project_id}/ {your_dataset_name}/{your_table_name}" [Learn more](/ml-engine/docs/continuous-evaluation/create-job#table-schema).

### GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions
* GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions `object`: Options regarding evaluation between bounding boxes.
  * iouThreshold `number`: Minimum [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) required for 2 bounding boxes to be considered a match. This must be a number between 0 and 1.

### GoogleCloudDatalabelingV1beta1BoundingPoly
* GoogleCloudDatalabelingV1beta1BoundingPoly `object`: A bounding polygon in the image.
  * vertices `array`: The bounding polygon vertices.
    * items [GoogleCloudDatalabelingV1beta1Vertex](#googleclouddatalabelingv1beta1vertex)

### GoogleCloudDatalabelingV1beta1BoundingPolyConfig
* GoogleCloudDatalabelingV1beta1BoundingPolyConfig `object`: Config for image bounding poly (and bounding box) human labeling task.
  * annotationSpecSet `string`: Required. Annotation spec set resource name.
  * instructionMessage `string`: Optional. Instruction message showed on contributors UI.

### GoogleCloudDatalabelingV1beta1ClassificationMetadata
* GoogleCloudDatalabelingV1beta1ClassificationMetadata `object`: Metadata for classification annotations.
  * isMultiLabel `boolean`: Whether the classification task is multi-label or not.

### GoogleCloudDatalabelingV1beta1ClassificationMetrics
* GoogleCloudDatalabelingV1beta1ClassificationMetrics `object`: Metrics calculated for a classification model.
  * confusionMatrix [GoogleCloudDatalabelingV1beta1ConfusionMatrix](#googleclouddatalabelingv1beta1confusionmatrix)
  * prCurve [GoogleCloudDatalabelingV1beta1PrCurve](#googleclouddatalabelingv1beta1prcurve)

### GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry
* GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry `object`
  * confidenceThreshold `number`: Threshold used for this entry. For classification tasks, this is a classification threshold: a predicted label is categorized as positive or negative (in the context of this point on the PR curve) based on whether the label's score meets this threshold. For image object detection (bounding box) tasks, this is the [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) threshold for the context of this point on the PR curve.
  * f1Score `number`: Harmonic mean of recall and precision.
  * f1ScoreAt1 `number`: The harmonic mean of recall_at1 and precision_at1.
  * f1ScoreAt5 `number`: The harmonic mean of recall_at5 and precision_at5.
  * precision `number`: Precision value.
  * precisionAt1 `number`: Precision value for entries with label that has highest score.
  * precisionAt5 `number`: Precision value for entries with label that has highest 5 scores.
  * recall `number`: Recall value.
  * recallAt1 `number`: Recall value for entries with label that has highest score.
  * recallAt5 `number`: Recall value for entries with label that has highest 5 scores.

### GoogleCloudDatalabelingV1beta1ConfusionMatrix
* GoogleCloudDatalabelingV1beta1ConfusionMatrix `object`: Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label.
  * row `array`
    * items [GoogleCloudDatalabelingV1beta1Row](#googleclouddatalabelingv1beta1row)

### GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry
* GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry `object`
  * annotationSpec [GoogleCloudDatalabelingV1beta1AnnotationSpec](#googleclouddatalabelingv1beta1annotationspec)
  * itemCount `integer`: Number of items predicted to have this label. (The ground truth label for these items is the `Row.annotationSpec` of this entry's parent.)

### GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest
* GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest `object`: Request message for CreateAnnotationSpecSet.
  * annotationSpecSet [GoogleCloudDatalabelingV1beta1AnnotationSpecSet](#googleclouddatalabelingv1beta1annotationspecset)

### GoogleCloudDatalabelingV1beta1CreateDatasetRequest
* GoogleCloudDatalabelingV1beta1CreateDatasetRequest `object`: Request message for CreateDataset.
  * dataset [GoogleCloudDatalabelingV1beta1Dataset](#googleclouddatalabelingv1beta1dataset)

### GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest
* GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest `object`: Request message for CreateEvaluationJob.
  * job [GoogleCloudDatalabelingV1beta1EvaluationJob](#googleclouddatalabelingv1beta1evaluationjob)

### GoogleCloudDatalabelingV1beta1CreateInstructionMetadata
* GoogleCloudDatalabelingV1beta1CreateInstructionMetadata `object`: Metadata of a CreateInstruction operation.
  * createTime `string`: Timestamp when create instruction request was created.
  * instruction `string`: The name of the created Instruction. projects/{project_id}/instructions/{instruction_id}
  * partialFailures `array`: Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDatalabelingV1beta1CreateInstructionRequest
* GoogleCloudDatalabelingV1beta1CreateInstructionRequest `object`: Request message for CreateInstruction.
  * instruction [GoogleCloudDatalabelingV1beta1Instruction](#googleclouddatalabelingv1beta1instruction)

### GoogleCloudDatalabelingV1beta1CsvInstruction
* GoogleCloudDatalabelingV1beta1CsvInstruction `object`: Deprecated: this instruction format is not supported any more. Instruction from a CSV file.
  * gcsFileUri `string`: CSV file for the instruction. Only gcs path is allowed.

### GoogleCloudDatalabelingV1beta1DataItem
* GoogleCloudDatalabelingV1beta1DataItem `object`: DataItem is a piece of data, without annotation. For example, an image.
  * imagePayload [GoogleCloudDatalabelingV1beta1ImagePayload](#googleclouddatalabelingv1beta1imagepayload)
  * name `string`: Output only. Name of the data item, in format of: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id}
  * textPayload [GoogleCloudDatalabelingV1beta1TextPayload](#googleclouddatalabelingv1beta1textpayload)
  * videoPayload [GoogleCloudDatalabelingV1beta1VideoPayload](#googleclouddatalabelingv1beta1videopayload)

### GoogleCloudDatalabelingV1beta1Dataset
* GoogleCloudDatalabelingV1beta1Dataset `object`: Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset.
  * blockingResources `array`: Output only. The names of any related resources that are blocking changes to the dataset.
    * items `string`
  * createTime `string`: Output only. Time the dataset is created.
  * dataItemCount `string`: Output only. The number of data items in the dataset.
  * description `string`: Optional. User-provided description of the annotation specification set. The description can be up to 10000 characters long.
  * displayName `string`: Required. The display name of the dataset. Maximum of 64 characters.
  * inputConfigs `array`: Output only. This is populated with the original input configs where ImportData is called. It is available only after the clients import data to this dataset.
    * items [GoogleCloudDatalabelingV1beta1InputConfig](#googleclouddatalabelingv1beta1inputconfig)
  * lastMigrateTime `string`: Last time that the Dataset is migrated to AI Platform V2. If any of the AnnotatedDataset is migrated, the last_migration_time in Dataset is also updated.
  * name `string`: Output only. Dataset resource name, format is: projects/{project_id}/datasets/{dataset_id}

### GoogleCloudDatalabelingV1beta1Evaluation
* GoogleCloudDatalabelingV1beta1Evaluation `object`: Describes an evaluation between a machine learning model's predictions and ground truth labels. Created when an EvaluationJob runs successfully.
  * annotationType `string` (values: ANNOTATION_TYPE_UNSPECIFIED, IMAGE_CLASSIFICATION_ANNOTATION, IMAGE_BOUNDING_BOX_ANNOTATION, IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION, IMAGE_BOUNDING_POLY_ANNOTATION, IMAGE_POLYLINE_ANNOTATION, IMAGE_SEGMENTATION_ANNOTATION, VIDEO_SHOTS_CLASSIFICATION_ANNOTATION, VIDEO_OBJECT_TRACKING_ANNOTATION, VIDEO_OBJECT_DETECTION_ANNOTATION, VIDEO_EVENT_ANNOTATION, TEXT_CLASSIFICATION_ANNOTATION, TEXT_ENTITY_EXTRACTION_ANNOTATION, GENERAL_CLASSIFICATION_ANNOTATION): Output only. Type of task that the model version being evaluated performs, as defined in the evaluationJobConfig.inputConfig.annotationType field of the evaluation job that created this evaluation.
  * config [GoogleCloudDatalabelingV1beta1EvaluationConfig](#googleclouddatalabelingv1beta1evaluationconfig)
  * createTime `string`: Output only. Timestamp for when this evaluation was created.
  * evaluatedItemCount `string`: Output only. The number of items in the ground truth dataset that were used for this evaluation. Only populated when the evaulation is for certain AnnotationTypes.
  * evaluationJobRunTime `string`: Output only. Timestamp for when the evaluation job that created this evaluation ran.
  * evaluationMetrics [GoogleCloudDatalabelingV1beta1EvaluationMetrics](#googleclouddatalabelingv1beta1evaluationmetrics)
  * name `string`: Output only. Resource name of an evaluation. The name has the following format: "projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}'

### GoogleCloudDatalabelingV1beta1EvaluationConfig
* GoogleCloudDatalabelingV1beta1EvaluationConfig `object`: Configuration details used for calculating evaluation metrics and creating an Evaluation.
  * boundingBoxEvaluationOptions [GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions](#googleclouddatalabelingv1beta1boundingboxevaluationoptions)

### GoogleCloudDatalabelingV1beta1EvaluationJob
* GoogleCloudDatalabelingV1beta1EvaluationJob `object`: Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation.
  * annotationSpecSet `string`: Required. Name of the AnnotationSpecSet describing all the labels that your machine learning model outputs. You must create this resource before you create an evaluation job and provide its name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}"
  * attempts `array`: Output only. Every time the evaluation job runs and an error occurs, the failed attempt is appended to this array.
    * items [GoogleCloudDatalabelingV1beta1Attempt](#googleclouddatalabelingv1beta1attempt)
  * createTime `string`: Output only. Timestamp of when this evaluation job was created.
  * description `string`: Required. Description of the job. The description can be up to 25,000 characters long.
  * evaluationJobConfig [GoogleCloudDatalabelingV1beta1EvaluationJobConfig](#googleclouddatalabelingv1beta1evaluationjobconfig)
  * labelMissingGroundTruth `boolean`: Required. Whether you want Data Labeling Service to provide ground truth labels for prediction input. If you want the service to assign human labelers to annotate your data, set this to `true`. If you want to provide your own ground truth labels in the evaluation job's BigQuery table, set this to `false`.
  * modelVersion `string`: Required. The [AI Platform Prediction model version](/ml-engine/docs/prediction-overview) to be evaluated. Prediction input and output is sampled from this model version. When creating an evaluation job, specify the model version in the following format: "projects/{project_id}/models/{model_name}/versions/{version_name}" There can only be one evaluation job per model version.
  * name `string`: Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}"
  * schedule `string`: Required. Describes the interval at which the job runs. This interval must be at least 1 day, and it is rounded to the nearest day. For example, if you specify a 50-hour interval, the job runs every 2 days. You can provide the schedule in [crontab format](/scheduler/docs/configuring/cron-job-schedules) or in an [English-like format](/appengine/docs/standard/python/config/cronref#schedule_format). Regardless of what you specify, the job will run at 10:00 AM UTC. Only the interval from this schedule is used, not the specific time of day.
  * state `string` (values: STATE_UNSPECIFIED, SCHEDULED, RUNNING, PAUSED, STOPPED): Output only. Describes the current state of the job.

### GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig
* GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig `object`: Provides details for how an evaluation job sends email alerts based on the results of a run.
  * email `string`: Required. An email address to send alerts to.
  * minAcceptableMeanAveragePrecision `number`: Required. A number between 0 and 1 that describes a minimum mean average precision threshold. When the evaluation job runs, if it calculates that your model version's predictions from the recent interval have meanAveragePrecision below this threshold, then it sends an alert to your specified email.

### GoogleCloudDatalabelingV1beta1EvaluationJobConfig
* GoogleCloudDatalabelingV1beta1EvaluationJobConfig `object`: Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob.
  * bigqueryImportKeys `object`: Required. Prediction keys that tell Data Labeling Service where to find the data for evaluation in your BigQuery table. When the service samples prediction input and output from your model version and saves it to BigQuery, the data gets stored as JSON strings in the BigQuery table. These keys tell Data Labeling Service how to parse the JSON. You can provide the following entries in this field: * `data_json_key`: the data key for prediction input. You must provide either this key or `reference_json_key`. * `reference_json_key`: the data reference key for prediction input. You must provide either this key or `data_json_key`. * `label_json_key`: the label key for prediction output. Required. * `label_score_json_key`: the score key for prediction output. Required. * `bounding_box_json_key`: the bounding box key for prediction output. Required if your model version perform image object detection. Learn [how to configure prediction keys](/ml-engine/docs/continuous-evaluation/create-job#prediction-keys).
  * boundingPolyConfig [GoogleCloudDatalabelingV1beta1BoundingPolyConfig](#googleclouddatalabelingv1beta1boundingpolyconfig)
  * evaluationConfig [GoogleCloudDatalabelingV1beta1EvaluationConfig](#googleclouddatalabelingv1beta1evaluationconfig)
  * evaluationJobAlertConfig [GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig](#googleclouddatalabelingv1beta1evaluationjobalertconfig)
  * exampleCount `integer`: Required. The maximum number of predictions to sample and save to BigQuery during each evaluation interval. This limit overrides `example_sample_percentage`: even if the service has not sampled enough predictions to fulfill `example_sample_perecentage` during an interval, it stops sampling predictions when it meets this limit.
  * exampleSamplePercentage `number`: Required. Fraction of predictions to sample and save to BigQuery during each evaluation interval. For example, 0.1 means 10% of predictions served by your model version get saved to BigQuery.
  * humanAnnotationConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)
  * imageClassificationConfig [GoogleCloudDatalabelingV1beta1ImageClassificationConfig](#googleclouddatalabelingv1beta1imageclassificationconfig)
  * inputConfig [GoogleCloudDatalabelingV1beta1InputConfig](#googleclouddatalabelingv1beta1inputconfig)
  * textClassificationConfig [GoogleCloudDatalabelingV1beta1TextClassificationConfig](#googleclouddatalabelingv1beta1textclassificationconfig)

### GoogleCloudDatalabelingV1beta1EvaluationMetrics
* GoogleCloudDatalabelingV1beta1EvaluationMetrics `object`
  * classificationMetrics [GoogleCloudDatalabelingV1beta1ClassificationMetrics](#googleclouddatalabelingv1beta1classificationmetrics)
  * objectDetectionMetrics [GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics](#googleclouddatalabelingv1beta1objectdetectionmetrics)

### GoogleCloudDatalabelingV1beta1EventConfig
* GoogleCloudDatalabelingV1beta1EventConfig `object`: Config for video event human labeling task.
  * annotationSpecSets `array`: Required. The list of annotation spec set resource name. Similar to video classification, we support selecting event from multiple AnnotationSpecSet at the same time.
    * items `string`
  * clipLength `integer`: Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 60s.
  * overlapLength `integer`: The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 1s.

### GoogleCloudDatalabelingV1beta1Example
* GoogleCloudDatalabelingV1beta1Example `object`: An Example is a piece of data and its annotation. For example, an image with label "house".
  * annotations `array`: Output only. Annotations for the piece of data in Example. One piece of data can have multiple annotations.
    * items [GoogleCloudDatalabelingV1beta1Annotation](#googleclouddatalabelingv1beta1annotation)
  * imagePayload [GoogleCloudDatalabelingV1beta1ImagePayload](#googleclouddatalabelingv1beta1imagepayload)
  * name `string`: Output only. Name of the example, in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}/examples/{example_id}
  * textPayload [GoogleCloudDatalabelingV1beta1TextPayload](#googleclouddatalabelingv1beta1textpayload)
  * videoPayload [GoogleCloudDatalabelingV1beta1VideoPayload](#googleclouddatalabelingv1beta1videopayload)

### GoogleCloudDatalabelingV1beta1ExampleComparison
* GoogleCloudDatalabelingV1beta1ExampleComparison `object`: Example comparisons comparing ground truth output and predictions for a specific input.
  * groundTruthExample [GoogleCloudDatalabelingV1beta1Example](#googleclouddatalabelingv1beta1example)
  * modelCreatedExamples `array`: Predictions by the model for the input.
    * items [GoogleCloudDatalabelingV1beta1Example](#googleclouddatalabelingv1beta1example)

### GoogleCloudDatalabelingV1beta1ExportDataOperationMetadata
* GoogleCloudDatalabelingV1beta1ExportDataOperationMetadata `object`: Metadata of an ExportData operation.
  * annotatedDataset `string`: Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".
  * createTime `string`: Output only. Timestamp when export dataset request was created.
  * dataset `string`: Output only. The name of dataset to be exported. "projects/*/datasets/*"
  * partialFailures `array`: Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDatalabelingV1beta1ExportDataOperationResponse
* GoogleCloudDatalabelingV1beta1ExportDataOperationResponse `object`: Response used for ExportDataset longrunning operation.
  * annotatedDataset `string`: Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".
  * dataset `string`: Ouptut only. The name of dataset. "projects/*/datasets/*"
  * exportCount `integer`: Output only. Number of examples exported successfully.
  * labelStats [GoogleCloudDatalabelingV1beta1LabelStats](#googleclouddatalabelingv1beta1labelstats)
  * outputConfig [GoogleCloudDatalabelingV1beta1OutputConfig](#googleclouddatalabelingv1beta1outputconfig)
  * totalCount `integer`: Output only. Total number of examples requested to export

### GoogleCloudDatalabelingV1beta1ExportDataRequest
* GoogleCloudDatalabelingV1beta1ExportDataRequest `object`: Request message for ExportData API.
  * annotatedDataset `string`: Required. Annotated dataset resource name. DataItem in Dataset and their annotations in specified annotated dataset will be exported. It's in format of projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}
  * filter `string`: Optional. Filter is not supported at this moment.
  * outputConfig [GoogleCloudDatalabelingV1beta1OutputConfig](#googleclouddatalabelingv1beta1outputconfig)
  * userEmailAddress `string`: Email of the user who started the export task and should be notified by email. If empty no notification will be sent.

### GoogleCloudDatalabelingV1beta1FeedbackMessage
* GoogleCloudDatalabelingV1beta1FeedbackMessage `object`: A feedback message inside a feedback thread.
  * body `string`: String content of the feedback. Maximum of 10000 characters.
  * createTime `string`: Create time.
  * image `string`: The image storing this feedback if the feedback is an image representing operator's comments.
  * name `string`: Name of the feedback message in a feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessage/{feedback_message_id}'
  * operatorFeedbackMetadata [GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata](#googleclouddatalabelingv1beta1operatorfeedbackmetadata)
  * requesterFeedbackMetadata [GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata](#googleclouddatalabelingv1beta1requesterfeedbackmetadata)

### GoogleCloudDatalabelingV1beta1FeedbackThread
* GoogleCloudDatalabelingV1beta1FeedbackThread `object`: A feedback thread of a certain labeling task on a certain annotated dataset.
  * feedbackThreadMetadata [GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata](#googleclouddatalabelingv1beta1feedbackthreadmetadata)
  * name `string`: Name of the feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}'

### GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata
* GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata `object`
  * createTime `string`: When the thread is created
  * lastUpdateTime `string`: When the thread is last updated.
  * status `string` (values: FEEDBACK_THREAD_STATUS_UNSPECIFIED, NEW, REPLIED)
  * thumbnail `string`: An image thumbnail of this thread.

### GoogleCloudDatalabelingV1beta1GcsDestination
* GoogleCloudDatalabelingV1beta1GcsDestination `object`: Export destination of the data.Only gcs path is allowed in output_uri.
  * mimeType `string`: Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.
  * outputUri `string`: Required. The output uri of destination file.

### GoogleCloudDatalabelingV1beta1GcsFolderDestination
* GoogleCloudDatalabelingV1beta1GcsFolderDestination `object`: Export folder destination of the data.
  * outputFolderUri `string`: Required. Cloud Storage directory to export data to.

### GoogleCloudDatalabelingV1beta1GcsSource
* GoogleCloudDatalabelingV1beta1GcsSource `object`: Source of the Cloud Storage file to be imported.
  * inputUri `string`: Required. The input URI of source file. This must be a Cloud Storage path (`gs://...`).
  * mimeType `string`: Required. The format of the source file. Only "text/csv" is supported.

### GoogleCloudDatalabelingV1beta1HumanAnnotationConfig
* GoogleCloudDatalabelingV1beta1HumanAnnotationConfig `object`: Configuration for how human labeling task should be done.
  * annotatedDatasetDescription `string`: Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.
  * annotatedDatasetDisplayName `string`: Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .
  * contributorEmails `array`: Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/
    * items `string`
  * instruction `string`: Required. Instruction resource name.
  * labelGroup `string`: Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`.
  * languageCode `string`: Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.
  * questionDuration `string`: Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.
  * replicaCount `integer`: Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
  * userEmailAddress `string`: Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.

### GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation
* GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation `object`: Image bounding poly annotation. It represents a polygon including bounding box in the image.
  * annotationSpec [GoogleCloudDatalabelingV1beta1AnnotationSpec](#googleclouddatalabelingv1beta1annotationspec)
  * boundingPoly [GoogleCloudDatalabelingV1beta1BoundingPoly](#googleclouddatalabelingv1beta1boundingpoly)
  * normalizedBoundingPoly [GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly](#googleclouddatalabelingv1beta1normalizedboundingpoly)

### GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation
* GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation `object`: Image classification annotation definition.
  * annotationSpec [GoogleCloudDatalabelingV1beta1AnnotationSpec](#googleclouddatalabelingv1beta1annotationspec)

### GoogleCloudDatalabelingV1beta1ImageClassificationConfig
* GoogleCloudDatalabelingV1beta1ImageClassificationConfig `object`: Config for image classification human labeling task.
  * allowMultiLabel `boolean`: Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one image.
  * annotationSpecSet `string`: Required. Annotation spec set resource name.
  * answerAggregationType `string` (values: STRING_AGGREGATION_TYPE_UNSPECIFIED, MAJORITY_VOTE, UNANIMOUS_VOTE, NO_AGGREGATION): Optional. The type of how to aggregate answers.

### GoogleCloudDatalabelingV1beta1ImagePayload
* GoogleCloudDatalabelingV1beta1ImagePayload `object`: Container of information about an image.
  * imageThumbnail `string`: A byte string of a thumbnail image.
  * imageUri `string`: Image uri from the user bucket.
  * mimeType `string`: Image format.
  * signedUri `string`: Signed uri of the image file in the service bucket.

### GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation
* GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation `object`: A polyline for the image annotation.
  * annotationSpec [GoogleCloudDatalabelingV1beta1AnnotationSpec](#googleclouddatalabelingv1beta1annotationspec)
  * normalizedPolyline [GoogleCloudDatalabelingV1beta1NormalizedPolyline](#googleclouddatalabelingv1beta1normalizedpolyline)
  * polyline [GoogleCloudDatalabelingV1beta1Polyline](#googleclouddatalabelingv1beta1polyline)

### GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation
* GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation `object`: Image segmentation annotation.
  * annotationColors `object`: The mapping between rgb color and annotation spec. The key is the rgb color represented in format of rgb(0, 0, 0). The value is the AnnotationSpec.
  * imageBytes `string`: A byte string of a full image's color map.
  * mimeType `string`: Image format.

### GoogleCloudDatalabelingV1beta1ImportDataOperationMetadata
* GoogleCloudDatalabelingV1beta1ImportDataOperationMetadata `object`: Metadata of an ImportData operation.
  * createTime `string`: Output only. Timestamp when import dataset request was created.
  * dataset `string`: Output only. The name of imported dataset. "projects/*/datasets/*"
  * partialFailures `array`: Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDatalabelingV1beta1ImportDataOperationResponse
* GoogleCloudDatalabelingV1beta1ImportDataOperationResponse `object`: Response used for ImportData longrunning operation.
  * dataset `string`: Ouptut only. The name of imported dataset.
  * importCount `integer`: Output only. Number of examples imported successfully.
  * totalCount `integer`: Output only. Total number of examples requested to import

### GoogleCloudDatalabelingV1beta1ImportDataRequest
* GoogleCloudDatalabelingV1beta1ImportDataRequest `object`: Request message for ImportData API.
  * inputConfig [GoogleCloudDatalabelingV1beta1InputConfig](#googleclouddatalabelingv1beta1inputconfig)
  * userEmailAddress `string`: Email of the user who started the import task and should be notified by email. If empty no notification will be sent.

### GoogleCloudDatalabelingV1beta1InputConfig
* GoogleCloudDatalabelingV1beta1InputConfig `object`: The configuration of input data, including data type, location, etc.
  * annotationType `string` (values: ANNOTATION_TYPE_UNSPECIFIED, IMAGE_CLASSIFICATION_ANNOTATION, IMAGE_BOUNDING_BOX_ANNOTATION, IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION, IMAGE_BOUNDING_POLY_ANNOTATION, IMAGE_POLYLINE_ANNOTATION, IMAGE_SEGMENTATION_ANNOTATION, VIDEO_SHOTS_CLASSIFICATION_ANNOTATION, VIDEO_OBJECT_TRACKING_ANNOTATION, VIDEO_OBJECT_DETECTION_ANNOTATION, VIDEO_EVENT_ANNOTATION, TEXT_CLASSIFICATION_ANNOTATION, TEXT_ENTITY_EXTRACTION_ANNOTATION, GENERAL_CLASSIFICATION_ANNOTATION): Optional. The type of annotation to be performed on this data. You must specify this field if you are using this InputConfig in an EvaluationJob.
  * bigquerySource [GoogleCloudDatalabelingV1beta1BigQuerySource](#googleclouddatalabelingv1beta1bigquerysource)
  * classificationMetadata [GoogleCloudDatalabelingV1beta1ClassificationMetadata](#googleclouddatalabelingv1beta1classificationmetadata)
  * dataType `string` (values: DATA_TYPE_UNSPECIFIED, IMAGE, VIDEO, TEXT, GENERAL_DATA): Required. Data type must be specifed when user tries to import data.
  * gcsSource [GoogleCloudDatalabelingV1beta1GcsSource](#googleclouddatalabelingv1beta1gcssource)
  * textMetadata [GoogleCloudDatalabelingV1beta1TextMetadata](#googleclouddatalabelingv1beta1textmetadata)

### GoogleCloudDatalabelingV1beta1Instruction
* GoogleCloudDatalabelingV1beta1Instruction `object`: Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.
  * blockingResources `array`: Output only. The names of any related resources that are blocking changes to the instruction.
    * items `string`
  * createTime `string`: Output only. Creation time of instruction.
  * csvInstruction [GoogleCloudDatalabelingV1beta1CsvInstruction](#googleclouddatalabelingv1beta1csvinstruction)
  * dataType `string` (values: DATA_TYPE_UNSPECIFIED, IMAGE, VIDEO, TEXT, GENERAL_DATA): Required. The data type of this instruction.
  * description `string`: Optional. User-provided description of the instruction. The description can be up to 10000 characters long.
  * displayName `string`: Required. The display name of the instruction. Maximum of 64 characters.
  * name `string`: Output only. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id}
  * pdfInstruction [GoogleCloudDatalabelingV1beta1PdfInstruction](#googleclouddatalabelingv1beta1pdfinstruction)
  * updateTime `string`: Output only. Last update time of instruction.

### GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata
* GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata `object`: Details of a LabelImageBoundingBox operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)

### GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata
* GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata `object`: Details of LabelImageBoundingPoly operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)

### GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata
* GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata `object`: Metadata of a LabelImageClassification operation.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)

### GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata
* GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata `object`: Details of a LabelImageOrientedBoundingBox operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)

### GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata
* GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata `object`: Details of LabelImagePolyline operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)

### GoogleCloudDatalabelingV1beta1LabelImageRequest
* GoogleCloudDatalabelingV1beta1LabelImageRequest `object`: Request message for starting an image labeling task.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)
  * boundingPolyConfig [GoogleCloudDatalabelingV1beta1BoundingPolyConfig](#googleclouddatalabelingv1beta1boundingpolyconfig)
  * feature `string` (values: FEATURE_UNSPECIFIED, CLASSIFICATION, BOUNDING_BOX, ORIENTED_BOUNDING_BOX, BOUNDING_POLY, POLYLINE, SEGMENTATION): Required. The type of image labeling task.
  * imageClassificationConfig [GoogleCloudDatalabelingV1beta1ImageClassificationConfig](#googleclouddatalabelingv1beta1imageclassificationconfig)
  * polylineConfig [GoogleCloudDatalabelingV1beta1PolylineConfig](#googleclouddatalabelingv1beta1polylineconfig)
  * segmentationConfig [GoogleCloudDatalabelingV1beta1SegmentationConfig](#googleclouddatalabelingv1beta1segmentationconfig)

### GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata
* GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata `object`: Details of a LabelImageSegmentation operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)

### GoogleCloudDatalabelingV1beta1LabelOperationMetadata
* GoogleCloudDatalabelingV1beta1LabelOperationMetadata `object`: Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23
  * annotatedDataset `string`: Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".
  * createTime `string`: Output only. Timestamp when labeling request was created.
  * dataset `string`: Output only. The name of dataset to be labeled. "projects/*/datasets/*"
  * imageBoundingBoxDetails [GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata](#googleclouddatalabelingv1beta1labelimageboundingboxoperationmetadata)
  * imageBoundingPolyDetails [GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata](#googleclouddatalabelingv1beta1labelimageboundingpolyoperationmetadata)
  * imageClassificationDetails [GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata](#googleclouddatalabelingv1beta1labelimageclassificationoperationmetadata)
  * imageOrientedBoundingBoxDetails [GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata](#googleclouddatalabelingv1beta1labelimageorientedboundingboxoperationmetadata)
  * imagePolylineDetails [GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata](#googleclouddatalabelingv1beta1labelimagepolylineoperationmetadata)
  * imageSegmentationDetails [GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata](#googleclouddatalabelingv1beta1labelimagesegmentationoperationmetadata)
  * partialFailures `array`: Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)
  * progressPercent `integer`: Output only. Progress of label operation. Range: [0, 100].
  * textClassificationDetails [GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata](#googleclouddatalabelingv1beta1labeltextclassificationoperationmetadata)
  * textEntityExtractionDetails [GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata](#googleclouddatalabelingv1beta1labeltextentityextractionoperationmetadata)
  * videoClassificationDetails [GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata](#googleclouddatalabelingv1beta1labelvideoclassificationoperationmetadata)
  * videoEventDetails [GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata](#googleclouddatalabelingv1beta1labelvideoeventoperationmetadata)
  * videoObjectDetectionDetails [GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata](#googleclouddatalabelingv1beta1labelvideoobjectdetectionoperationmetadata)
  * videoObjectTrackingDetails [GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata](#googleclouddatalabelingv1beta1labelvideoobjecttrackingoperationmetadata)

### GoogleCloudDatalabelingV1beta1LabelStats
* GoogleCloudDatalabelingV1beta1LabelStats `object`: Statistics about annotation specs.
  * exampleCount `object`: Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.

### GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata
* GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata `object`: Details of a LabelTextClassification operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)

### GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata
* GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata `object`: Details of a LabelTextEntityExtraction operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)

### GoogleCloudDatalabelingV1beta1LabelTextRequest
* GoogleCloudDatalabelingV1beta1LabelTextRequest `object`: Request message for LabelText.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)
  * feature `string` (values: FEATURE_UNSPECIFIED, TEXT_CLASSIFICATION, TEXT_ENTITY_EXTRACTION): Required. The type of text labeling task.
  * textClassificationConfig [GoogleCloudDatalabelingV1beta1TextClassificationConfig](#googleclouddatalabelingv1beta1textclassificationconfig)
  * textEntityExtractionConfig [GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig](#googleclouddatalabelingv1beta1textentityextractionconfig)

### GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata
* GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata `object`: Details of a LabelVideoClassification operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)

### GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata
* GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata `object`: Details of a LabelVideoEvent operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)

### GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata
* GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata `object`: Details of a LabelVideoObjectDetection operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)

### GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata
* GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata `object`: Details of a LabelVideoObjectTracking operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)

### GoogleCloudDatalabelingV1beta1LabelVideoRequest
* GoogleCloudDatalabelingV1beta1LabelVideoRequest `object`: Request message for LabelVideo.
  * basicConfig [GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#googleclouddatalabelingv1beta1humanannotationconfig)
  * eventConfig [GoogleCloudDatalabelingV1beta1EventConfig](#googleclouddatalabelingv1beta1eventconfig)
  * feature `string` (values: FEATURE_UNSPECIFIED, CLASSIFICATION, OBJECT_DETECTION, OBJECT_TRACKING, EVENT): Required. The type of video labeling task.
  * objectDetectionConfig [GoogleCloudDatalabelingV1beta1ObjectDetectionConfig](#googleclouddatalabelingv1beta1objectdetectionconfig)
  * objectTrackingConfig [GoogleCloudDatalabelingV1beta1ObjectTrackingConfig](#googleclouddatalabelingv1beta1objecttrackingconfig)
  * videoClassificationConfig [GoogleCloudDatalabelingV1beta1VideoClassificationConfig](#googleclouddatalabelingv1beta1videoclassificationconfig)

### GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse
* GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse `object`: Results of listing annotated datasets for a dataset.
  * annotatedDatasets `array`: The list of annotated datasets to return.
    * items [GoogleCloudDatalabelingV1beta1AnnotatedDataset](#googleclouddatalabelingv1beta1annotateddataset)
  * nextPageToken `string`: A token to retrieve next page of results.

### GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse
* GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse `object`: Results of listing annotation spec set under a project.
  * annotationSpecSets `array`: The list of annotation spec sets.
    * items [GoogleCloudDatalabelingV1beta1AnnotationSpecSet](#googleclouddatalabelingv1beta1annotationspecset)
  * nextPageToken `string`: A token to retrieve next page of results.

### GoogleCloudDatalabelingV1beta1ListDataItemsResponse
* GoogleCloudDatalabelingV1beta1ListDataItemsResponse `object`: Results of listing data items in a dataset.
  * dataItems `array`: The list of data items to return.
    * items [GoogleCloudDatalabelingV1beta1DataItem](#googleclouddatalabelingv1beta1dataitem)
  * nextPageToken `string`: A token to retrieve next page of results.

### GoogleCloudDatalabelingV1beta1ListDatasetsResponse
* GoogleCloudDatalabelingV1beta1ListDatasetsResponse `object`: Results of listing datasets within a project.
  * datasets `array`: The list of datasets to return.
    * items [GoogleCloudDatalabelingV1beta1Dataset](#googleclouddatalabelingv1beta1dataset)
  * nextPageToken `string`: A token to retrieve next page of results.

### GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse
* GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse `object`: Results for listing evaluation jobs.
  * evaluationJobs `array`: The list of evaluation jobs to return.
    * items [GoogleCloudDatalabelingV1beta1EvaluationJob](#googleclouddatalabelingv1beta1evaluationjob)
  * nextPageToken `string`: A token to retrieve next page of results.

### GoogleCloudDatalabelingV1beta1ListExamplesResponse
* GoogleCloudDatalabelingV1beta1ListExamplesResponse `object`: Results of listing Examples in and annotated dataset.
  * examples `array`: The list of examples to return.
    * items [GoogleCloudDatalabelingV1beta1Example](#googleclouddatalabelingv1beta1example)
  * nextPageToken `string`: A token to retrieve next page of results.

### GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse
* GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse `object`: Results for listing FeedbackMessages.
  * feedbackMessages `array`: The list of feedback messages to return.
    * items [GoogleCloudDatalabelingV1beta1FeedbackMessage](#googleclouddatalabelingv1beta1feedbackmessage)
  * nextPageToken `string`: A token to retrieve next page of results.

### GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse
* GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse `object`: Results for listing FeedbackThreads.
  * feedbackThreads `array`: The list of feedback threads to return.
    * items [GoogleCloudDatalabelingV1beta1FeedbackThread](#googleclouddatalabelingv1beta1feedbackthread)
  * nextPageToken `string`: A token to retrieve next page of results.

### GoogleCloudDatalabelingV1beta1ListInstructionsResponse
* GoogleCloudDatalabelingV1beta1ListInstructionsResponse `object`: Results of listing instructions under a project.
  * instructions `array`: The list of Instructions to return.
    * items [GoogleCloudDatalabelingV1beta1Instruction](#googleclouddatalabelingv1beta1instruction)
  * nextPageToken `string`: A token to retrieve next page of results.

### GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly
* GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly `object`: Normalized bounding polygon.
  * normalizedVertices `array`: The bounding polygon normalized vertices.
    * items [GoogleCloudDatalabelingV1beta1NormalizedVertex](#googleclouddatalabelingv1beta1normalizedvertex)

### GoogleCloudDatalabelingV1beta1NormalizedPolyline
* GoogleCloudDatalabelingV1beta1NormalizedPolyline `object`: Normalized polyline.
  * normalizedVertices `array`: The normalized polyline vertices.
    * items [GoogleCloudDatalabelingV1beta1NormalizedVertex](#googleclouddatalabelingv1beta1normalizedvertex)

### GoogleCloudDatalabelingV1beta1NormalizedVertex
* GoogleCloudDatalabelingV1beta1NormalizedVertex `object`: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
  * x `number`: X coordinate.
  * y `number`: Y coordinate.

### GoogleCloudDatalabelingV1beta1ObjectDetectionConfig
* GoogleCloudDatalabelingV1beta1ObjectDetectionConfig `object`: Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate.
  * annotationSpecSet `string`: Required. Annotation spec set resource name.
  * extractionFrameRate `number`: Required. Number of frames per second to be extracted from the video.

### GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics
* GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics `object`: Metrics calculated for an image object detection (bounding box) model.
  * prCurve [GoogleCloudDatalabelingV1beta1PrCurve](#googleclouddatalabelingv1beta1prcurve)

### GoogleCloudDatalabelingV1beta1ObjectTrackingConfig
* GoogleCloudDatalabelingV1beta1ObjectTrackingConfig `object`: Config for video object tracking human labeling task.
  * annotationSpecSet `string`: Required. Annotation spec set resource name.
  * clipLength `integer`: Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 20s.
  * overlapLength `integer`: The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 0.3s.

### GoogleCloudDatalabelingV1beta1ObjectTrackingFrame
* GoogleCloudDatalabelingV1beta1ObjectTrackingFrame `object`: Video frame level annotation for object detection and tracking.
  * boundingPoly [GoogleCloudDatalabelingV1beta1BoundingPoly](#googleclouddatalabelingv1beta1boundingpoly)
  * normalizedBoundingPoly [GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly](#googleclouddatalabelingv1beta1normalizedboundingpoly)
  * timeOffset `string`: The time offset of this frame relative to the beginning of the video.

### GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata
* GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata `object`: Metadata describing the feedback from the operator.

### GoogleCloudDatalabelingV1beta1OperatorMetadata
* GoogleCloudDatalabelingV1beta1OperatorMetadata `object`: General information useful for labels coming from contributors.
  * comments `array`: Comments from contributors.
    * items `string`
  * labelVotes `integer`: The total number of contributors that choose this label.
  * score `number`: Confidence score corresponding to a label. For examle, if 3 contributors have answered the question and 2 of them agree on the final label, the confidence score will be 0.67 (2/3).
  * totalVotes `integer`: The total number of contributors that answer this question.

### GoogleCloudDatalabelingV1beta1OutputConfig
* GoogleCloudDatalabelingV1beta1OutputConfig `object`: The configuration of output data.
  * gcsDestination [GoogleCloudDatalabelingV1beta1GcsDestination](#googleclouddatalabelingv1beta1gcsdestination)
  * gcsFolderDestination [GoogleCloudDatalabelingV1beta1GcsFolderDestination](#googleclouddatalabelingv1beta1gcsfolderdestination)

### GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest
* GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest `object`: Request message for PauseEvaluationJob.

### GoogleCloudDatalabelingV1beta1PdfInstruction
* GoogleCloudDatalabelingV1beta1PdfInstruction `object`: Instruction from a PDF file.
  * gcsFileUri `string`: PDF file for the instruction. Only gcs path is allowed.

### GoogleCloudDatalabelingV1beta1Polyline
* GoogleCloudDatalabelingV1beta1Polyline `object`: A line with multiple line segments.
  * vertices `array`: The polyline vertices.
    * items [GoogleCloudDatalabelingV1beta1Vertex](#googleclouddatalabelingv1beta1vertex)

### GoogleCloudDatalabelingV1beta1PolylineConfig
* GoogleCloudDatalabelingV1beta1PolylineConfig `object`: Config for image polyline human labeling task.
  * annotationSpecSet `string`: Required. Annotation spec set resource name.
  * instructionMessage `string`: Optional. Instruction message showed on contributors UI.

### GoogleCloudDatalabelingV1beta1PrCurve
* GoogleCloudDatalabelingV1beta1PrCurve `object`
  * annotationSpec [GoogleCloudDatalabelingV1beta1AnnotationSpec](#googleclouddatalabelingv1beta1annotationspec)
  * areaUnderCurve `number`: Area under the precision-recall curve. Not to be confused with area under a receiver operating characteristic (ROC) curve.
  * confidenceMetricsEntries `array`: Entries that make up the precision-recall graph. Each entry is a "point" on the graph drawn for a different `confidence_threshold`.
    * items [GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry](#googleclouddatalabelingv1beta1confidencemetricsentry)
  * meanAveragePrecision `number`: Mean average prcision of this curve.

### GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata
* GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata `object`: Metadata describing the feedback from the labeling task requester.

### GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest
* GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest `object`: Request message ResumeEvaluationJob.

### GoogleCloudDatalabelingV1beta1Row
* GoogleCloudDatalabelingV1beta1Row `object`: A row in the confusion matrix. Each entry in this row has the same ground truth label.
  * annotationSpec [GoogleCloudDatalabelingV1beta1AnnotationSpec](#googleclouddatalabelingv1beta1annotationspec)
  * entries `array`: A list of the confusion matrix entries. One entry for each possible predicted label.
    * items [GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry](#googleclouddatalabelingv1beta1confusionmatrixentry)

### GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse
* GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse `object`: Results of searching evaluations.
  * evaluations `array`: The list of evaluations matching the search.
    * items [GoogleCloudDatalabelingV1beta1Evaluation](#googleclouddatalabelingv1beta1evaluation)
  * nextPageToken `string`: A token to retrieve next page of results.

### GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest
* GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest `object`: Request message of SearchExampleComparisons.
  * pageSize `integer`: Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
  * pageToken `string`: Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search rquest. If you don't specify this field, the API call requests the first page of the search.

### GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse
* GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse `object`: Results of searching example comparisons.
  * exampleComparisons `array`: A list of example comparisons matching the search criteria.
    * items [GoogleCloudDatalabelingV1beta1ExampleComparison](#googleclouddatalabelingv1beta1examplecomparison)
  * nextPageToken `string`: A token to retrieve next page of results.

### GoogleCloudDatalabelingV1beta1SegmentationConfig
* GoogleCloudDatalabelingV1beta1SegmentationConfig `object`: Config for image segmentation
  * annotationSpecSet `string`: Required. Annotation spec set resource name. format: projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}
  * instructionMessage `string`: Instruction message showed on labelers UI.

### GoogleCloudDatalabelingV1beta1SentimentConfig
* GoogleCloudDatalabelingV1beta1SentimentConfig `object`: Config for setting up sentiments.
  * enableLabelSentimentSelection `boolean`: If set to true, contributors will have the option to select sentiment of the label they selected, to mark it as negative or positive label. Default is false.

### GoogleCloudDatalabelingV1beta1SequentialSegment
* GoogleCloudDatalabelingV1beta1SequentialSegment `object`: Start and end position in a sequence (e.g. text segment).
  * end `integer`: End position (exclusive).
  * start `integer`: Start position (inclusive).

### GoogleCloudDatalabelingV1beta1TextClassificationAnnotation
* GoogleCloudDatalabelingV1beta1TextClassificationAnnotation `object`: Text classification annotation.
  * annotationSpec [GoogleCloudDatalabelingV1beta1AnnotationSpec](#googleclouddatalabelingv1beta1annotationspec)

### GoogleCloudDatalabelingV1beta1TextClassificationConfig
* GoogleCloudDatalabelingV1beta1TextClassificationConfig `object`: Config for text classification human labeling task.
  * allowMultiLabel `boolean`: Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one text segment.
  * annotationSpecSet `string`: Required. Annotation spec set resource name.
  * sentimentConfig [GoogleCloudDatalabelingV1beta1SentimentConfig](#googleclouddatalabelingv1beta1sentimentconfig)

### GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation
* GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation `object`: Text entity extraction annotation.
  * annotationSpec [GoogleCloudDatalabelingV1beta1AnnotationSpec](#googleclouddatalabelingv1beta1annotationspec)
  * sequentialSegment [GoogleCloudDatalabelingV1beta1SequentialSegment](#googleclouddatalabelingv1beta1sequentialsegment)

### GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig
* GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig `object`: Config for text entity extraction human labeling task.
  * annotationSpecSet `string`: Required. Annotation spec set resource name.

### GoogleCloudDatalabelingV1beta1TextMetadata
* GoogleCloudDatalabelingV1beta1TextMetadata `object`: Metadata for the text.
  * languageCode `string`: The language of this text, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US.

### GoogleCloudDatalabelingV1beta1TextPayload
* GoogleCloudDatalabelingV1beta1TextPayload `object`: Container of information about a piece of text.
  * textContent `string`: Text content.

### GoogleCloudDatalabelingV1beta1TimeSegment
* GoogleCloudDatalabelingV1beta1TimeSegment `object`: A time period inside of an example that has a time dimension (e.g. video).
  * endTimeOffset `string`: End of the time segment (exclusive), represented as the duration since the example start.
  * startTimeOffset `string`: Start of the time segment (inclusive), represented as the duration since the example start.

### GoogleCloudDatalabelingV1beta1Vertex
* GoogleCloudDatalabelingV1beta1Vertex `object`: A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
  * x `integer`: X coordinate.
  * y `integer`: Y coordinate.

### GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation
* GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation `object`: Video classification annotation.
  * annotationSpec [GoogleCloudDatalabelingV1beta1AnnotationSpec](#googleclouddatalabelingv1beta1annotationspec)
  * timeSegment [GoogleCloudDatalabelingV1beta1TimeSegment](#googleclouddatalabelingv1beta1timesegment)

### GoogleCloudDatalabelingV1beta1VideoClassificationConfig
* GoogleCloudDatalabelingV1beta1VideoClassificationConfig `object`: Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip.
  * annotationSpecSetConfigs `array`: Required. The list of annotation spec set configs. Since watching a video clip takes much longer time than an image, we support label with multiple AnnotationSpecSet at the same time. Labels in each AnnotationSpecSet will be shown in a group to contributors. Contributors can select one or more (depending on whether to allow multi label) from each group.
    * items [GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig](#googleclouddatalabelingv1beta1annotationspecsetconfig)
  * applyShotDetection `boolean`: Optional. Option to apply shot detection on the video.

### GoogleCloudDatalabelingV1beta1VideoEventAnnotation
* GoogleCloudDatalabelingV1beta1VideoEventAnnotation `object`: Video event annotation.
  * annotationSpec [GoogleCloudDatalabelingV1beta1AnnotationSpec](#googleclouddatalabelingv1beta1annotationspec)
  * timeSegment [GoogleCloudDatalabelingV1beta1TimeSegment](#googleclouddatalabelingv1beta1timesegment)

### GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation
* GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation `object`: Video object tracking annotation.
  * annotationSpec [GoogleCloudDatalabelingV1beta1AnnotationSpec](#googleclouddatalabelingv1beta1annotationspec)
  * objectTrackingFrames `array`: The list of frames where this object track appears.
    * items [GoogleCloudDatalabelingV1beta1ObjectTrackingFrame](#googleclouddatalabelingv1beta1objecttrackingframe)
  * timeSegment [GoogleCloudDatalabelingV1beta1TimeSegment](#googleclouddatalabelingv1beta1timesegment)

### GoogleCloudDatalabelingV1beta1VideoPayload
* GoogleCloudDatalabelingV1beta1VideoPayload `object`: Container of information of a video.
  * frameRate `number`: FPS of the video.
  * mimeType `string`: Video format.
  * signedUri `string`: Signed uri of the video file in the service bucket.
  * videoThumbnails `array`: The list of video thumbnails.
    * items [GoogleCloudDatalabelingV1beta1VideoThumbnail](#googleclouddatalabelingv1beta1videothumbnail)
  * videoUri `string`: Video uri from the user bucket.

### GoogleCloudDatalabelingV1beta1VideoThumbnail
* GoogleCloudDatalabelingV1beta1VideoThumbnail `object`: Container of information of a video thumbnail.
  * thumbnail `string`: A byte string of the video frame.
  * timeOffset `string`: Time offset relative to the beginning of the video, corresponding to the video frame where the thumbnail has been extracted from.

### GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadata
* GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadata `object`: Metadata of a CreateInstruction operation.
  * createTime `string`: Timestamp when create instruction request was created.
  * instruction `string`: The name of the created Instruction. projects/{project_id}/instructions/{instruction_id}
  * partialFailures `array`: Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata `object`: Metadata of an ExportData operation.
  * annotatedDataset `string`: Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".
  * createTime `string`: Output only. Timestamp when export dataset request was created.
  * dataset `string`: Output only. The name of dataset to be exported. "projects/*/datasets/*"
  * partialFailures `array`: Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponse
* GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponse `object`: Response used for ExportDataset longrunning operation.
  * annotatedDataset `string`: Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".
  * dataset `string`: Ouptut only. The name of dataset. "projects/*/datasets/*"
  * exportCount `integer`: Output only. Number of examples exported successfully.
  * labelStats [GoogleCloudDatalabelingV1p1alpha1LabelStats](#googleclouddatalabelingv1p1alpha1labelstats)
  * outputConfig [GoogleCloudDatalabelingV1p1alpha1OutputConfig](#googleclouddatalabelingv1p1alpha1outputconfig)
  * totalCount `integer`: Output only. Total number of examples requested to export

### GoogleCloudDatalabelingV1p1alpha1GcsDestination
* GoogleCloudDatalabelingV1p1alpha1GcsDestination `object`: Export destination of the data.Only gcs path is allowed in output_uri.
  * mimeType `string`: Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.
  * outputUri `string`: Required. The output uri of destination file.

### GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination
* GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination `object`: Export folder destination of the data.
  * outputFolderUri `string`: Required. Cloud Storage directory to export data to.

### GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata `object`: Metadata of an GenerateAnalysisReport operation.
  * createTime `string`: Timestamp when generate report request was created.
  * dataset `string`: The name of the dataset for which the analysis report is generated. Format: "projects/*/datasets/*"

### GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig
* GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig `object`: Configuration for how human labeling task should be done.
  * annotatedDatasetDescription `string`: Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.
  * annotatedDatasetDisplayName `string`: Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .
  * contributorEmails `array`: Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/
    * items `string`
  * instruction `string`: Required. Instruction resource name.
  * labelGroup `string`: Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`.
  * languageCode `string`: Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.
  * questionDuration `string`: Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.
  * replicaCount `integer`: Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
  * userEmailAddress `string`: Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.

### GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadata `object`: Metadata of an ImportData operation.
  * createTime `string`: Output only. Timestamp when import dataset request was created.
  * dataset `string`: Output only. The name of imported dataset. "projects/*/datasets/*"
  * partialFailures `array`: Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponse
* GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponse `object`: Response used for ImportData longrunning operation.
  * dataset `string`: Ouptut only. The name of imported dataset.
  * importCount `integer`: Output only. Number of examples imported successfully.
  * totalCount `integer`: Output only. Total number of examples requested to import

### GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata `object`: Details of a LabelImageBoundingBox operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata `object`: Details of LabelImageBoundingPoly operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata `object`: Metadata of a LabelImageClassification operation.
  * basicConfig [GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata `object`: Details of a LabelImageOrientedBoundingBox operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata `object`: Details of LabelImagePolyline operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata `object`: Details of a LabelImageSegmentation operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata `object`: Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23
  * annotatedDataset `string`: Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".
  * createTime `string`: Output only. Timestamp when labeling request was created.
  * dataset `string`: Output only. The name of dataset to be labeled. "projects/*/datasets/*"
  * imageBoundingBoxDetails [GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata](#googleclouddatalabelingv1p1alpha1labelimageboundingboxoperationmetadata)
  * imageBoundingPolyDetails [GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata](#googleclouddatalabelingv1p1alpha1labelimageboundingpolyoperationmetadata)
  * imageClassificationDetails [GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata](#googleclouddatalabelingv1p1alpha1labelimageclassificationoperationmetadata)
  * imageOrientedBoundingBoxDetails [GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata](#googleclouddatalabelingv1p1alpha1labelimageorientedboundingboxoperationmetadata)
  * imagePolylineDetails [GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata](#googleclouddatalabelingv1p1alpha1labelimagepolylineoperationmetadata)
  * imageSegmentationDetails [GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata](#googleclouddatalabelingv1p1alpha1labelimagesegmentationoperationmetadata)
  * partialFailures `array`: Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)
  * progressPercent `integer`: Output only. Progress of label operation. Range: [0, 100].
  * textClassificationDetails [GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata](#googleclouddatalabelingv1p1alpha1labeltextclassificationoperationmetadata)
  * textEntityExtractionDetails [GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata](#googleclouddatalabelingv1p1alpha1labeltextentityextractionoperationmetadata)
  * videoClassificationDetails [GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata](#googleclouddatalabelingv1p1alpha1labelvideoclassificationoperationmetadata)
  * videoEventDetails [GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata](#googleclouddatalabelingv1p1alpha1labelvideoeventoperationmetadata)
  * videoObjectDetectionDetails [GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata](#googleclouddatalabelingv1p1alpha1labelvideoobjectdetectionoperationmetadata)
  * videoObjectTrackingDetails [GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata](#googleclouddatalabelingv1p1alpha1labelvideoobjecttrackingoperationmetadata)

### GoogleCloudDatalabelingV1p1alpha1LabelStats
* GoogleCloudDatalabelingV1p1alpha1LabelStats `object`: Statistics about annotation specs.
  * exampleCount `object`: Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.

### GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata `object`: Details of a LabelTextClassification operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata `object`: Details of a LabelTextEntityExtraction operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata `object`: Details of a LabelVideoClassification operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata `object`: Details of a LabelVideoEvent operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata `object`: Details of a LabelVideoObjectDetection operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata
* GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata `object`: Details of a LabelVideoObjectTracking operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p1alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p1alpha1OutputConfig
* GoogleCloudDatalabelingV1p1alpha1OutputConfig `object`: The configuration of output data.
  * gcsDestination [GoogleCloudDatalabelingV1p1alpha1GcsDestination](#googleclouddatalabelingv1p1alpha1gcsdestination)
  * gcsFolderDestination [GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination](#googleclouddatalabelingv1p1alpha1gcsfolderdestination)

### GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadata
* GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadata `object`: Metadata of a CreateInstruction operation.
  * createTime `string`: Timestamp when create instruction request was created.
  * instruction `string`: The name of the created Instruction. projects/{project_id}/instructions/{instruction_id}
  * partialFailures `array`: Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadata `object`: Metadata of an ExportData operation.
  * annotatedDataset `string`: Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".
  * createTime `string`: Output only. Timestamp when export dataset request was created.
  * dataset `string`: Output only. The name of dataset to be exported. "projects/*/datasets/*"
  * partialFailures `array`: Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponse
* GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponse `object`: Response used for ExportDataset longrunning operation.
  * annotatedDataset `string`: Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".
  * dataset `string`: Ouptut only. The name of dataset. "projects/*/datasets/*"
  * exportCount `integer`: Output only. Number of examples exported successfully.
  * labelStats [GoogleCloudDatalabelingV1p2alpha1LabelStats](#googleclouddatalabelingv1p2alpha1labelstats)
  * outputConfig [GoogleCloudDatalabelingV1p2alpha1OutputConfig](#googleclouddatalabelingv1p2alpha1outputconfig)
  * totalCount `integer`: Output only. Total number of examples requested to export

### GoogleCloudDatalabelingV1p2alpha1GcsDestination
* GoogleCloudDatalabelingV1p2alpha1GcsDestination `object`: Export destination of the data.Only gcs path is allowed in output_uri.
  * mimeType `string`: Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.
  * outputUri `string`: Required. The output uri of destination file.

### GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination
* GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination `object`: Export folder destination of the data.
  * outputFolderUri `string`: Required. Cloud Storage directory to export data to.

### GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig
* GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig `object`: Configuration for how human labeling task should be done.
  * annotatedDatasetDescription `string`: Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.
  * annotatedDatasetDisplayName `string`: Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .
  * contributorEmails `array`: Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/
    * items `string`
  * instruction `string`: Required. Instruction resource name.
  * labelGroup `string`: Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`.
  * languageCode `string`: Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.
  * questionDuration `string`: Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.
  * replicaCount `integer`: Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
  * userEmailAddress `string`: Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.

### GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadata `object`: Metadata of an ImportData operation.
  * createTime `string`: Output only. Timestamp when import dataset request was created.
  * dataset `string`: Output only. The name of imported dataset. "projects/*/datasets/*"
  * partialFailures `array`: Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse
* GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse `object`: Response used for ImportData longrunning operation.
  * dataset `string`: Ouptut only. The name of imported dataset.
  * importCount `integer`: Output only. Number of examples imported successfully.
  * totalCount `integer`: Output only. Total number of examples requested to import

### GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata `object`: Details of a LabelImageBoundingBox operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p2alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata `object`: Details of LabelImageBoundingPoly operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p2alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata `object`: Metadata of a LabelImageClassification operation.
  * basicConfig [GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p2alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata `object`: Details of a LabelImageOrientedBoundingBox operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p2alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata `object`: Details of LabelImagePolyline operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p2alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata `object`: Details of a LabelImageSegmentation operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p2alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadata `object`: Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23
  * annotatedDataset `string`: Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".
  * createTime `string`: Output only. Timestamp when labeling request was created.
  * dataset `string`: Output only. The name of dataset to be labeled. "projects/*/datasets/*"
  * imageBoundingBoxDetails [GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata](#googleclouddatalabelingv1p2alpha1labelimageboundingboxoperationmetadata)
  * imageBoundingPolyDetails [GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata](#googleclouddatalabelingv1p2alpha1labelimageboundingpolyoperationmetadata)
  * imageClassificationDetails [GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata](#googleclouddatalabelingv1p2alpha1labelimageclassificationoperationmetadata)
  * imageOrientedBoundingBoxDetails [GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata](#googleclouddatalabelingv1p2alpha1labelimageorientedboundingboxoperationmetadata)
  * imagePolylineDetails [GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata](#googleclouddatalabelingv1p2alpha1labelimagepolylineoperationmetadata)
  * imageSegmentationDetails [GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata](#googleclouddatalabelingv1p2alpha1labelimagesegmentationoperationmetadata)
  * partialFailures `array`: Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
    * items [GoogleRpcStatus](#googlerpcstatus)
  * progressPercent `integer`: Output only. Progress of label operation. Range: [0, 100].
  * textClassificationDetails [GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata](#googleclouddatalabelingv1p2alpha1labeltextclassificationoperationmetadata)
  * textEntityExtractionDetails [GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata](#googleclouddatalabelingv1p2alpha1labeltextentityextractionoperationmetadata)
  * videoClassificationDetails [GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata](#googleclouddatalabelingv1p2alpha1labelvideoclassificationoperationmetadata)
  * videoEventDetails [GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata](#googleclouddatalabelingv1p2alpha1labelvideoeventoperationmetadata)
  * videoObjectDetectionDetails [GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata](#googleclouddatalabelingv1p2alpha1labelvideoobjectdetectionoperationmetadata)
  * videoObjectTrackingDetails [GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata](#googleclouddatalabelingv1p2alpha1labelvideoobjecttrackingoperationmetadata)

### GoogleCloudDatalabelingV1p2alpha1LabelStats
* GoogleCloudDatalabelingV1p2alpha1LabelStats `object`: Statistics about annotation specs.
  * exampleCount `object`: Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.

### GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata `object`: Details of a LabelTextClassification operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p2alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata `object`: Details of a LabelTextEntityExtraction operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p2alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata `object`: Details of a LabelVideoClassification operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p2alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata `object`: Details of a LabelVideoEvent operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p2alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata `object`: Details of a LabelVideoObjectDetection operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p2alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata
* GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata `object`: Details of a LabelVideoObjectTracking operation metadata.
  * basicConfig [GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#googleclouddatalabelingv1p2alpha1humanannotationconfig)

### GoogleCloudDatalabelingV1p2alpha1OutputConfig
* GoogleCloudDatalabelingV1p2alpha1OutputConfig `object`: The configuration of output data.
  * gcsDestination [GoogleCloudDatalabelingV1p2alpha1GcsDestination](#googleclouddatalabelingv1p2alpha1gcsdestination)
  * gcsFolderDestination [GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination](#googleclouddatalabelingv1p2alpha1gcsfolderdestination)

### GoogleLongrunningListOperationsResponse
* GoogleLongrunningListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [GoogleLongrunningOperation](#googlelongrunningoperation)

### GoogleLongrunningOperation
* GoogleLongrunningOperation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [GoogleRpcStatus](#googlerpcstatus)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### GoogleProtobufEmpty
* GoogleProtobufEmpty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### GoogleRpcStatus
* GoogleRpcStatus `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.


