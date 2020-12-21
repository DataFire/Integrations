# @datafire/google_ml

Client library for AI Platform Training & Prediction API

## Installation and Usage
```bash
npm install --save @datafire/google_ml
```
```js
let google_ml = require('@datafire/google_ml').create({
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

An API to enable creating and using machine learning models.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_ml.oauthCallback({
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
google_ml.oauthRefresh(null, context)
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

### ml.projects.models.versions.delete
Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.


```js
google_ml.ml.projects.models.versions.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the version. You can get the names of all the versions of a model by calling projects.models.versions.list.
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
* output [GoogleLongrunning__Operation](#googlelongrunning__operation)

### ml.projects.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.


```js
google_ml.ml.projects.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
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
* output [GoogleLongrunning__Operation](#googlelongrunning__operation)

### ml.projects.models.versions.patch
Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.


```js
google_ml.ml.projects.models.versions.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the model.
  * updateMask `string`: Required. Specifies the path, relative to `Version`, of the field to update. Must be present and non-empty. For example, to change the description of a version to "foo", the `update_mask` parameter would be specified as `description`, and the `PATCH` request body would specify the new value, as follows: ``` { "description": "foo" } ``` Currently the only supported update mask fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`. However, you can only update `manualScaling.nodes` if the version uses a [Compute Engine (N1) machine type](/ml-engine/docs/machine-types-online-prediction).
  * body [GoogleCloudMlV1__Version](#googlecloudmlv1__version)
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
* output [GoogleLongrunning__Operation](#googlelongrunning__operation)

### ml.projects.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_ml.ml.projects.operations.list({
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
* output [GoogleLongrunning__ListOperationsResponse](#googlelongrunning__listoperationsresponse)

### ml.projects.locations.studies.trials.addMeasurement
Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.


```js
google_ml.ml.projects.locations.studies.trials.addMeasurement({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The trial name.
  * body [GoogleCloudMlV1__AddTrialMeasurementRequest](#googlecloudmlv1__addtrialmeasurementrequest)
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
* output [GoogleCloudMlV1__Trial](#googlecloudmlv1__trial)

### ml.projects.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.


```js
google_ml.ml.projects.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
  * body [GoogleCloudMlV1__CancelJobRequest](#googlecloudmlv1__canceljobrequest)
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
* output [GoogleProtobuf__Empty](#googleprotobuf__empty)

### ml.projects.locations.studies.trials.checkEarlyStoppingState
Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.


```js
google_ml.ml.projects.locations.studies.trials.checkEarlyStoppingState({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The trial name.
  * body [GoogleCloudMlV1__CheckTrialEarlyStoppingStateRequest](#googlecloudmlv1__checktrialearlystoppingstaterequest)
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
* output [GoogleLongrunning__Operation](#googlelongrunning__operation)

### ml.projects.locations.studies.trials.complete
Marks a trial as complete.


```js
google_ml.ml.projects.locations.studies.trials.complete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The trial name.metat
  * body [GoogleCloudMlV1__CompleteTrialRequest](#googlecloudmlv1__completetrialrequest)
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
* output [GoogleCloudMlV1__Trial](#googlecloudmlv1__trial)

### ml.projects.explain
Performs explanation on the data in the request. {% dynamic include "/ai-platform/includes/___explain-request" %} 


```js
google_ml.ml.projects.explain({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of a model or a version. Authorization: requires the `predict` permission on the specified resource.
  * body [GoogleCloudMlV1__ExplainRequest](#googlecloudmlv1__explainrequest)
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
* output [GoogleApi__HttpBody](#googleapi__httpbody)

### ml.projects.getConfig
Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.


```js
google_ml.ml.projects.getConfig({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The project name.
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
* output [GoogleCloudMlV1__GetConfigResponse](#googlecloudmlv1__getconfigresponse)

### ml.projects.predict
Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %} 


```js
google_ml.ml.projects.predict({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of a model or a version. Authorization: requires the `predict` permission on the specified resource.
  * body [GoogleCloudMlV1__PredictRequest](#googlecloudmlv1__predictrequest)
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
* output [GoogleApi__HttpBody](#googleapi__httpbody)

### ml.projects.models.versions.setDefault
Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.


```js
google_ml.ml.projects.models.versions.setDefault({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the version to make the default for the model. You can get the names of all the versions of a model by calling projects.models.versions.list.
  * body [GoogleCloudMlV1__SetDefaultVersionRequest](#googlecloudmlv1__setdefaultversionrequest)
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
* output [GoogleCloudMlV1__Version](#googlecloudmlv1__version)

### ml.projects.locations.studies.trials.stop
Stops a trial.


```js
google_ml.ml.projects.locations.studies.trials.stop({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The trial name.
  * body [GoogleCloudMlV1__StopTrialRequest](#googlecloudmlv1__stoptrialrequest)
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
* output [GoogleCloudMlV1__Trial](#googlecloudmlv1__trial)

### ml.projects.jobs.list
Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.


```js
google_ml.ml.projects.jobs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project for which to list jobs.
  * filter `string`: Optional. Specifies the subset of jobs to retrieve. You can filter on the value of one or more attributes of the job object. For example, retrieve jobs with a job identifier that starts with 'census': gcloud ai-platform jobs list --filter='jobId:census*' List all failed jobs with names that start with 'rnn': gcloud ai-platform jobs list --filter='jobId:rnn* AND state:FAILED' For more examples, see the guide to monitoring jobs.
  * pageSize `integer`: Optional. The number of jobs to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.
  * pageToken `string`: Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.
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
* output [GoogleCloudMlV1__ListJobsResponse](#googlecloudmlv1__listjobsresponse)

### ml.projects.jobs.create
Creates a training or a batch prediction job.


```js
google_ml.ml.projects.jobs.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project name.
  * body [GoogleCloudMlV1__Job](#googlecloudmlv1__job)
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
* output [GoogleCloudMlV1__Job](#googlecloudmlv1__job)

### ml.projects.locations.list
List all locations that provides at least one type of CMLE capability.


```js
google_ml.ml.projects.locations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project for which available locations are to be listed (since some locations might be whitelisted for specific projects).
  * pageSize `integer`: Optional. The number of locations to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.
  * pageToken `string`: Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.
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
* output [GoogleCloudMlV1__ListLocationsResponse](#googlecloudmlv1__listlocationsresponse)

### ml.projects.models.list
Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.


```js
google_ml.ml.projects.models.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project whose models are to be listed.
  * filter `string`: Optional. Specifies the subset of models to retrieve.
  * pageSize `integer`: Optional. The number of models to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.
  * pageToken `string`: Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.
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
* output [GoogleCloudMlV1__ListModelsResponse](#googlecloudmlv1__listmodelsresponse)

### ml.projects.models.create
Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.


```js
google_ml.ml.projects.models.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project name.
  * body [GoogleCloudMlV1__Model](#googlecloudmlv1__model)
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
* output [GoogleCloudMlV1__Model](#googlecloudmlv1__model)

### ml.projects.locations.studies.list
Lists all the studies in a region for an associated project.


```js
google_ml.ml.projects.locations.studies.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project and location that the study belongs to. Format: projects/{project}/locations/{location}
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
* output [GoogleCloudMlV1__ListStudiesResponse](#googlecloudmlv1__liststudiesresponse)

### ml.projects.locations.studies.create
Creates a study.


```js
google_ml.ml.projects.locations.studies.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project and location that the study belongs to. Format: projects/{project}/locations/{location}
  * studyId `string`: Required. The ID to use for the study, which will become the final component of the study's resource name.
  * body [GoogleCloudMlV1__Study](#googlecloudmlv1__study)
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
* output [GoogleCloudMlV1__Study](#googlecloudmlv1__study)

### ml.projects.locations.studies.trials.list
Lists the trials associated with a study.


```js
google_ml.ml.projects.locations.studies.trials.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the study that the trial belongs to.
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
* output [GoogleCloudMlV1__ListTrialsResponse](#googlecloudmlv1__listtrialsresponse)

### ml.projects.locations.studies.trials.create
Adds a user provided trial to a study.


```js
google_ml.ml.projects.locations.studies.trials.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the study that the trial belongs to.
  * body [GoogleCloudMlV1__Trial](#googlecloudmlv1__trial)
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
* output [GoogleCloudMlV1__Trial](#googlecloudmlv1__trial)

### ml.projects.locations.studies.trials.listOptimalTrials
Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency


```js
google_ml.ml.projects.locations.studies.trials.listOptimalTrials({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the study that the pareto-optimal trial belongs to.
  * body [GoogleCloudMlV1__ListOptimalTrialsRequest](#googlecloudmlv1__listoptimaltrialsrequest)
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
* output [GoogleCloudMlV1__ListOptimalTrialsResponse](#googlecloudmlv1__listoptimaltrialsresponse)

### ml.projects.locations.studies.trials.suggest
Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.


```js
google_ml.ml.projects.locations.studies.trials.suggest({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the study that the trial belongs to.
  * body [GoogleCloudMlV1__SuggestTrialsRequest](#googlecloudmlv1__suggesttrialsrequest)
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
* output [GoogleLongrunning__Operation](#googlelongrunning__operation)

### ml.projects.models.versions.list
Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.


```js
google_ml.ml.projects.models.versions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the model for which to list the version.
  * filter `string`: Optional. Specifies the subset of versions to retrieve.
  * pageSize `integer`: Optional. The number of versions to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.
  * pageToken `string`: Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.
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
* output [GoogleCloudMlV1__ListVersionsResponse](#googlecloudmlv1__listversionsresponse)

### ml.projects.models.versions.create
Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.


```js
google_ml.ml.projects.models.versions.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the model.
  * body [GoogleCloudMlV1__Version](#googlecloudmlv1__version)
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
* output [GoogleLongrunning__Operation](#googlelongrunning__operation)

### ml.projects.models.getIamPolicy
Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.


```js
google_ml.ml.projects.models.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
  * options.requestedPolicyVersion `integer`: Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
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
* output [GoogleIamV1__Policy](#googleiamv1__policy)

### ml.projects.models.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.


```js
google_ml.ml.projects.models.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
  * body [GoogleIamV1__SetIamPolicyRequest](#googleiamv1__setiampolicyrequest)
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
* output [GoogleIamV1__Policy](#googleiamv1__policy)

### ml.projects.models.testIamPermissions
Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.


```js
google_ml.ml.projects.models.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
  * body [GoogleIamV1__TestIamPermissionsRequest](#googleiamv1__testiampermissionsrequest)
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
* output [GoogleIamV1__TestIamPermissionsResponse](#googleiamv1__testiampermissionsresponse)



## Definitions

### GoogleApi__HttpBody
* GoogleApi__HttpBody `object`: Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
  * contentType `string`: The HTTP Content-Type header value specifying the content type of the body.
  * data `string`: The HTTP request/response body as raw binary.
  * extensions `array`: Application specific response metadata. Must be set in the first response for streaming APIs.
    * items `object`

### GoogleCloudMlV1_AutomatedStoppingConfig_DecayCurveAutomatedStoppingConfig
* GoogleCloudMlV1_AutomatedStoppingConfig_DecayCurveAutomatedStoppingConfig `object`
  * useElapsedTime `boolean`: If true, measurement.elapsed_time is used as the x-axis of each Trials Decay Curve. Otherwise, Measurement.steps will be used as the x-axis.

### GoogleCloudMlV1_AutomatedStoppingConfig_MedianAutomatedStoppingConfig
* GoogleCloudMlV1_AutomatedStoppingConfig_MedianAutomatedStoppingConfig `object`: The median automated stopping rule stops a pending trial if the trial's best objective_value is strictly below the median 'performance' of all completed trials reported up to the trial's last measurement. Currently, 'performance' refers to the running average of the objective values reported by the trial in each measurement.
  * useElapsedTime `boolean`: If true, the median automated stopping rule applies to measurement.use_elapsed_time, which means the elapsed_time field of the current trial's latest measurement is used to compute the median objective value for each completed trial.

### GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric
* GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric `object`: An observed value of a metric.
  * objectiveValue `number`: The objective value at this training step.
  * trainingStep `string`: The global training step for this metric.

### GoogleCloudMlV1_Measurement_Metric
* GoogleCloudMlV1_Measurement_Metric `object`: A message representing a metric in the measurement.
  * metric `string`: Required. Metric name.
  * value `number`: Required. The value for this metric.

### GoogleCloudMlV1_StudyConfigParameterSpec_CategoricalValueSpec
* GoogleCloudMlV1_StudyConfigParameterSpec_CategoricalValueSpec `object`
  * values `array`: Must be specified if type is `CATEGORICAL`. The list of possible categories.
    * items `string`

### GoogleCloudMlV1_StudyConfigParameterSpec_DiscreteValueSpec
* GoogleCloudMlV1_StudyConfigParameterSpec_DiscreteValueSpec `object`
  * values `array`: Must be specified if type is `DISCRETE`. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values.
    * items `number`

### GoogleCloudMlV1_StudyConfigParameterSpec_DoubleValueSpec
* GoogleCloudMlV1_StudyConfigParameterSpec_DoubleValueSpec `object`
  * maxValue `number`: Must be specified if type is `DOUBLE`. Maximum value of the parameter.
  * minValue `number`: Must be specified if type is `DOUBLE`. Minimum value of the parameter.

### GoogleCloudMlV1_StudyConfigParameterSpec_IntegerValueSpec
* GoogleCloudMlV1_StudyConfigParameterSpec_IntegerValueSpec `object`
  * maxValue `string`: Must be specified if type is `INTEGER`. Maximum value of the parameter.
  * minValue `string`: Must be specified if type is `INTEGER`. Minimum value of the parameter.

### GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentCategoricalValueSpec
* GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentCategoricalValueSpec `object`: Represents the spec to match categorical values from parent parameter.
  * values `array`: Matches values of the parent parameter with type 'CATEGORICAL'. All values must exist in `categorical_value_spec` of parent parameter.
    * items `string`

### GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentDiscreteValueSpec
* GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentDiscreteValueSpec `object`: Represents the spec to match discrete values from parent parameter.
  * values `array`: Matches values of the parent parameter with type 'DISCRETE'. All values must exist in `discrete_value_spec` of parent parameter.
    * items `number`

### GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentIntValueSpec
* GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentIntValueSpec `object`: Represents the spec to match integer values from parent parameter.
  * values `array`: Matches values of the parent parameter with type 'INTEGER'. All values must lie in `integer_value_spec` of parent parameter.
    * items `string`

### GoogleCloudMlV1_StudyConfig_MetricSpec
* GoogleCloudMlV1_StudyConfig_MetricSpec `object`: Represents a metric to optimize.
  * goal `string` (values: GOAL_TYPE_UNSPECIFIED, MAXIMIZE, MINIMIZE): Required. The optimization goal of the metric.
  * metric `string`: Required. The name of the metric.

### GoogleCloudMlV1_StudyConfig_ParameterSpec
* GoogleCloudMlV1_StudyConfig_ParameterSpec `object`: Represents a single parameter to optimize.
  * categoricalValueSpec [GoogleCloudMlV1_StudyConfigParameterSpec_CategoricalValueSpec](#googlecloudmlv1_studyconfigparameterspec_categoricalvaluespec)
  * childParameterSpecs `array`: A child node is active if the parameter's value matches the child node's matching_parent_values. If two items in child_parameter_specs have the same name, they must have disjoint matching_parent_values.
    * items [GoogleCloudMlV1_StudyConfig_ParameterSpec](#googlecloudmlv1_studyconfig_parameterspec)
  * discreteValueSpec [GoogleCloudMlV1_StudyConfigParameterSpec_DiscreteValueSpec](#googlecloudmlv1_studyconfigparameterspec_discretevaluespec)
  * doubleValueSpec [GoogleCloudMlV1_StudyConfigParameterSpec_DoubleValueSpec](#googlecloudmlv1_studyconfigparameterspec_doublevaluespec)
  * integerValueSpec [GoogleCloudMlV1_StudyConfigParameterSpec_IntegerValueSpec](#googlecloudmlv1_studyconfigparameterspec_integervaluespec)
  * parameter `string`: Required. The parameter name must be unique amongst all ParameterSpecs.
  * parentCategoricalValues [GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentCategoricalValueSpec](#googlecloudmlv1_studyconfigparameterspec_matchingparentcategoricalvaluespec)
  * parentDiscreteValues [GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentDiscreteValueSpec](#googlecloudmlv1_studyconfigparameterspec_matchingparentdiscretevaluespec)
  * parentIntValues [GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentIntValueSpec](#googlecloudmlv1_studyconfigparameterspec_matchingparentintvaluespec)
  * scaleType `string` (values: SCALE_TYPE_UNSPECIFIED, UNIT_LINEAR_SCALE, UNIT_LOG_SCALE, UNIT_REVERSE_LOG_SCALE): How the parameter should be scaled. Leave unset for categorical parameters.
  * type `string` (values: PARAMETER_TYPE_UNSPECIFIED, DOUBLE, INTEGER, CATEGORICAL, DISCRETE): Required. The type of the parameter.

### GoogleCloudMlV1_Trial_Parameter
* GoogleCloudMlV1_Trial_Parameter `object`: A message representing a parameter to be tuned. Contains the name of the parameter and the suggested value to use for this trial.
  * floatValue `number`: Must be set if ParameterType is DOUBLE or DISCRETE.
  * intValue `string`: Must be set if ParameterType is INTEGER
  * parameter `string`: The name of the parameter.
  * stringValue `string`: Must be set if ParameterTypeis CATEGORICAL

### GoogleCloudMlV1__AcceleratorConfig
* GoogleCloudMlV1__AcceleratorConfig `object`: Represents a hardware accelerator request config. Note that the AcceleratorConfig can be used in both Jobs and Versions. Learn more about [accelerators for training](/ml-engine/docs/using-gpus) and [accelerators for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus).
  * count `string`: The number of accelerators to attach to each machine running the job.
  * type `string` (values: ACCELERATOR_TYPE_UNSPECIFIED, NVIDIA_TESLA_K80, NVIDIA_TESLA_P100, NVIDIA_TESLA_V100, NVIDIA_TESLA_P4, NVIDIA_TESLA_T4, NVIDIA_TESLA_A100, TPU_V2, TPU_V3): The type of accelerator to use.

### GoogleCloudMlV1__AddTrialMeasurementRequest
* GoogleCloudMlV1__AddTrialMeasurementRequest `object`: The request message for the AddTrialMeasurement service method.
  * measurement [GoogleCloudMlV1__Measurement](#googlecloudmlv1__measurement)

### GoogleCloudMlV1__AutoScaling
* GoogleCloudMlV1__AutoScaling `object`: Options for automatically scaling a model.
  * maxNodes `integer`: The maximum number of nodes to scale this model under load. The actual value will depend on resource quota and availability.
  * metrics `array`: MetricSpec contains the specifications to use to calculate the desired nodes count.
    * items [GoogleCloudMlV1__MetricSpec](#googlecloudmlv1__metricspec)
  * minNodes `integer`: Optional. The minimum number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed. Therefore, the cost of operating this model will be at least `rate` * `min_nodes` * number of hours since last billing cycle, where `rate` is the cost per node-hour as documented in the [pricing guide](/ml-engine/docs/pricing), even if no predictions are performed. There is additional cost for each prediction performed. Unlike manual scaling, if the load gets too heavy for the nodes that are up, the service will automatically add nodes to handle the increased load as well as scale back as traffic drops, always maintaining at least `min_nodes`. You will be charged for the time in which additional nodes are used. If `min_nodes` is not specified and AutoScaling is used with a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction), `min_nodes` defaults to 0, in which case, when traffic to a model stops (and after a cool-down period), nodes will be shut down and no charges will be incurred until traffic to the model resumes. If `min_nodes` is not specified and AutoScaling is used with a [Compute Engine (N1) machine type](/ml-engine/docs/machine-types-online-prediction), `min_nodes` defaults to 1. `min_nodes` must be at least 1 for use with a Compute Engine machine type. Note that you cannot use AutoScaling if your version uses [GPUs](#Version.FIELDS.accelerator_config). Instead, you must use ManualScaling. You can set `min_nodes` when creating the model version, and you can also update `min_nodes` for an existing version: update_body.json: { 'autoScaling': { 'minNodes': 5 } } HTTP request: PATCH https://ml.googleapis.com/v1/{name=projects/*/models/*/versions/*}?update_mask=autoScaling.minNodes -d @./update_body.json 

### GoogleCloudMlV1__AutomatedStoppingConfig
* GoogleCloudMlV1__AutomatedStoppingConfig `object`: Configuration for Automated Early Stopping of Trials. If no implementation_config is set, automated early stopping will not be run.
  * decayCurveStoppingConfig [GoogleCloudMlV1_AutomatedStoppingConfig_DecayCurveAutomatedStoppingConfig](#googlecloudmlv1_automatedstoppingconfig_decaycurveautomatedstoppingconfig)
  * medianAutomatedStoppingConfig [GoogleCloudMlV1_AutomatedStoppingConfig_MedianAutomatedStoppingConfig](#googlecloudmlv1_automatedstoppingconfig_medianautomatedstoppingconfig)

### GoogleCloudMlV1__BuiltInAlgorithmOutput
* GoogleCloudMlV1__BuiltInAlgorithmOutput `object`: Represents output related to a built-in algorithm Job.
  * framework `string`: Framework on which the built-in algorithm was trained.
  * modelPath `string`: The Cloud Storage path to the `model/` directory where the training job saves the trained model. Only set for successful jobs that don't use hyperparameter tuning.
  * pythonVersion `string`: Python version on which the built-in algorithm was trained.
  * runtimeVersion `string`: AI Platform runtime version on which the built-in algorithm was trained.

### GoogleCloudMlV1__CancelJobRequest
* GoogleCloudMlV1__CancelJobRequest `object`: Request message for the CancelJob method.

### GoogleCloudMlV1__Capability
* GoogleCloudMlV1__Capability `object`
  * availableAccelerators `array`: Available accelerators for the capability.
    * items `string` (values: ACCELERATOR_TYPE_UNSPECIFIED, NVIDIA_TESLA_K80, NVIDIA_TESLA_P100, NVIDIA_TESLA_V100, NVIDIA_TESLA_P4, NVIDIA_TESLA_T4, NVIDIA_TESLA_A100, TPU_V2, TPU_V3)
  * type `string` (values: TYPE_UNSPECIFIED, TRAINING, BATCH_PREDICTION, ONLINE_PREDICTION)

### GoogleCloudMlV1__CheckTrialEarlyStoppingStateMetatdata
* GoogleCloudMlV1__CheckTrialEarlyStoppingStateMetatdata `object`: This message will be placed in the metadata field of a google.longrunning.Operation associated with a CheckTrialEarlyStoppingState request.
  * createTime `string`: The time at which the operation was submitted.
  * study `string`: The name of the study that the trial belongs to.
  * trial `string`: The trial name.

### GoogleCloudMlV1__CheckTrialEarlyStoppingStateRequest
* GoogleCloudMlV1__CheckTrialEarlyStoppingStateRequest `object`: The request message for the CheckTrialEarlyStoppingState service method.

### GoogleCloudMlV1__CheckTrialEarlyStoppingStateResponse
* GoogleCloudMlV1__CheckTrialEarlyStoppingStateResponse `object`: The message will be placed in the response field of a completed google.longrunning.Operation associated with a CheckTrialEarlyStoppingState request.
  * endTime `string`: The time at which operation processing completed.
  * shouldStop `boolean`: True if the Trial should stop.
  * startTime `string`: The time at which the operation was started.

### GoogleCloudMlV1__CompleteTrialRequest
* GoogleCloudMlV1__CompleteTrialRequest `object`: The request message for the CompleteTrial service method.
  * finalMeasurement [GoogleCloudMlV1__Measurement](#googlecloudmlv1__measurement)
  * infeasibleReason `string`: Optional. A human readable reason why the trial was infeasible. This should only be provided if `trial_infeasible` is true.
  * trialInfeasible `boolean`: Optional. True if the trial cannot be run with the given Parameter, and final_measurement will be ignored.

### GoogleCloudMlV1__Config
* GoogleCloudMlV1__Config `object`
  * tpuServiceAccount `string`: The service account Cloud ML uses to run on TPU node.

### GoogleCloudMlV1__ContainerPort
* GoogleCloudMlV1__ContainerPort `object`: Represents a network port in a single container. This message is a subset of the [Kubernetes ContainerPort v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#containerport-v1-core).
  * containerPort `integer`: Number of the port to expose on the container. This must be a valid port number: 0 < PORT_NUMBER < 65536.

### GoogleCloudMlV1__ContainerSpec
* GoogleCloudMlV1__ContainerSpec `object`: Specification of a custom container for serving predictions. This message is a subset of the [Kubernetes Container v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).
  * args `array`: Immutable. Specifies arguments for the command that runs when the container starts. This overrides the container's [`CMD`](https://docs.docker.com/engine/reference/builder/#cmd). Specify this field as an array of executable and arguments, similar to a Docker `CMD`'s "default parameters" form. If you don't specify this field but do specify the command field, then the command from the `command` field runs without any additional arguments. See the [Kubernetes documentation about how the `command` and `args` fields interact with a container's `ENTRYPOINT` and `CMD`](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#notes). If you don't specify this field and don't specify the `commmand` field, then the container's [`ENTRYPOINT`](https://docs.docker.com/engine/reference/builder/#cmd) and `CMD` determine what runs based on their default behavior. See the [Docker documentation about how `CMD` and `ENTRYPOINT` interact](https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact). In this field, you can reference [environment variables set by AI Platform Prediction](/ai-platform/prediction/docs/custom-container-requirements#aip-variables) and environment variables set in the env field. You cannot reference environment variables set in the Docker image. In order for environment variables to be expanded, reference them by using the following syntax: $( VARIABLE_NAME) Note that this differs from Bash variable expansion, which does not use parentheses. If a variable cannot be resolved, the reference in the input string is used unchanged. To avoid variable expansion, you can escape this syntax with `$$`; for example: $$(VARIABLE_NAME) This field corresponds to the `args` field of the [Kubernetes Containers v1 core API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).
    * items `string`
  * command `array`: Immutable. Specifies the command that runs when the container starts. This overrides the container's [`ENTRYPOINT`](https://docs.docker.com/engine/reference/builder/#entrypoint). Specify this field as an array of executable and arguments, similar to a Docker `ENTRYPOINT`'s "exec" form, not its "shell" form. If you do not specify this field, then the container's `ENTRYPOINT` runs, in conjunction with the args field or the container's [`CMD`](https://docs.docker.com/engine/reference/builder/#cmd), if either exists. If this field is not specified and the container does not have an `ENTRYPOINT`, then refer to the [Docker documentation about how `CMD` and `ENTRYPOINT` interact](https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact). If you specify this field, then you can also specify the `args` field to provide additional arguments for this command. However, if you specify this field, then the container's `CMD` is ignored. See the [Kubernetes documentation about how the `command` and `args` fields interact with a container's `ENTRYPOINT` and `CMD`](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#notes). In this field, you can reference [environment variables set by AI Platform Prediction](/ai-platform/prediction/docs/custom-container-requirements#aip-variables) and environment variables set in the env field. You cannot reference environment variables set in the Docker image. In order for environment variables to be expanded, reference them by using the following syntax: $( VARIABLE_NAME) Note that this differs from Bash variable expansion, which does not use parentheses. If a variable cannot be resolved, the reference in the input string is used unchanged. To avoid variable expansion, you can escape this syntax with `$$`; for example: $$(VARIABLE_NAME) This field corresponds to the `command` field of the [Kubernetes Containers v1 core API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).
    * items `string`
  * env `array`: Immutable. List of environment variables to set in the container. After the container starts running, code running in the container can read these environment variables. Additionally, the command and args fields can reference these variables. Later entries in this list can also reference earlier entries. For example, the following example sets the variable `VAR_2` to have the value `foo bar`: ```json [ { "name": "VAR_1", "value": "foo" }, { "name": "VAR_2", "value": "$(VAR_1) bar" } ] ``` If you switch the order of the variables in the example, then the expansion does not occur. This field corresponds to the `env` field of the [Kubernetes Containers v1 core API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).
    * items [GoogleCloudMlV1__EnvVar](#googlecloudmlv1__envvar)
  * image `string`: URI of the Docker image to be used as the custom container for serving predictions. This URI must identify [an image in Artifact Registry](/artifact-registry/docs/overview) and begin with the hostname `{REGION}-docker.pkg.dev`, where `{REGION}` is replaced by the region that matches AI Platform Prediction [regional endpoint](/ai-platform/prediction/docs/regional-endpoints) that you are using. For example, if you are using the `us-central1-ml.googleapis.com` endpoint, then this URI must begin with `us-central1-docker.pkg.dev`. To use a custom container, the [AI Platform Google-managed service account](/ai-platform/prediction/docs/custom-service-account#default) must have permission to pull (read) the Docker image at this URI. The AI Platform Google-managed service account has the following format: `service-{PROJECT_NUMBER}@cloud-ml.google.com.iam.gserviceaccount.com` {PROJECT_NUMBER} is replaced by your Google Cloud project number. By default, this service account has necessary permissions to pull an Artifact Registry image in the same Google Cloud project where you are using AI Platform Prediction. In this case, no configuration is necessary. If you want to use an image from a different Google Cloud project, learn how to [grant the Artifact Registry Reader (roles/artifactregistry.reader) role for a repository](/artifact-registry/docs/access-control#grant-repo) to your projet's AI Platform Google-managed service account. To learn about the requirements for the Docker image itself, read [Custom container requirements](/ai-platform/prediction/docs/custom-container-requirements).
  * ports `array`: Immutable. List of ports to expose from the container. AI Platform Prediction sends any prediction requests that it receives to the first port on this list. AI Platform Prediction also sends [liveness and health checks](/ai-platform/prediction/docs/custom-container-requirements#health) to this port. If you do not specify this field, it defaults to following value: ```json [ { "containerPort": 8080 } ] ``` AI Platform Prediction does not use ports other than the first one listed. This field corresponds to the `ports` field of the [Kubernetes Containers v1 core API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).
    * items [GoogleCloudMlV1__ContainerPort](#googlecloudmlv1__containerport)

### GoogleCloudMlV1__DiskConfig
* GoogleCloudMlV1__DiskConfig `object`: Represents the config of disk options.
  * bootDiskSizeGb `integer`: Size in GB of the boot disk (default is 100GB).
  * bootDiskType `string`: Type of the boot disk (default is "pd-standard"). Valid values: "pd-ssd" (Persistent Disk Solid State Drive) or "pd-standard" (Persistent Disk Hard Disk Drive).

### GoogleCloudMlV1__EncryptionConfig
* GoogleCloudMlV1__EncryptionConfig `object`: Represents a custom encryption key configuration that can be applied to a resource.
  * kmsKeyName `string`: The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a training job. It has the following format: `projects/{PROJECT_ID}/locations/{REGION}/keyRings/{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}`

### GoogleCloudMlV1__EnvVar
* GoogleCloudMlV1__EnvVar `object`: Represents an environment variable to be made available in a container. This message is a subset of the [Kubernetes EnvVar v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#envvar-v1-core).
  * name `string`: Name of the environment variable. Must be a [valid C identifier](https://github.com/kubernetes/kubernetes/blob/v1.18.8/staging/src/k8s.io/apimachinery/pkg/util/validation/validation.go#L258) and must not begin with the prefix `AIP_`.
  * value `string`: Value of the environment variable. Defaults to an empty string. In this field, you can reference [environment variables set by AI Platform Prediction](/ai-platform/prediction/docs/custom-container-requirements#aip-variables) and environment variables set earlier in the same env field as where this message occurs. You cannot reference environment variables set in the Docker image. In order for environment variables to be expanded, reference them by using the following syntax: $(VARIABLE_NAME) Note that this differs from Bash variable expansion, which does not use parentheses. If a variable cannot be resolved, the reference in the input string is used unchanged. To avoid variable expansion, you can escape this syntax with `$$`; for example: $$(VARIABLE_NAME)

### GoogleCloudMlV1__ExplainRequest
* GoogleCloudMlV1__ExplainRequest `object`: Request for explanations to be issued against a trained model.
  * httpBody [GoogleApi__HttpBody](#googleapi__httpbody)

### GoogleCloudMlV1__ExplanationConfig
* GoogleCloudMlV1__ExplanationConfig `object`: Message holding configuration options for explaining model predictions. There are three feature attribution methods supported for TensorFlow models: integrated gradients, sampled Shapley, and XRAI. [Learn more about feature attributions.](/ai-platform/prediction/docs/ai-explanations/overview)
  * integratedGradientsAttribution [GoogleCloudMlV1__IntegratedGradientsAttribution](#googlecloudmlv1__integratedgradientsattribution)
  * sampledShapleyAttribution [GoogleCloudMlV1__SampledShapleyAttribution](#googlecloudmlv1__sampledshapleyattribution)
  * xraiAttribution [GoogleCloudMlV1__XraiAttribution](#googlecloudmlv1__xraiattribution)

### GoogleCloudMlV1__GetConfigResponse
* GoogleCloudMlV1__GetConfigResponse `object`: Returns service account information associated with a project.
  * config [GoogleCloudMlV1__Config](#googlecloudmlv1__config)
  * serviceAccount `string`: The service account Cloud ML uses to access resources in the project.
  * serviceAccountProject `string`: The project number for `service_account`.

### GoogleCloudMlV1__HyperparameterOutput
* GoogleCloudMlV1__HyperparameterOutput `object`: Represents the result of a single hyperparameter tuning trial from a training job. The TrainingOutput object that is returned on successful completion of a training job with hyperparameter tuning includes a list of HyperparameterOutput objects, one for each successful trial.
  * allMetrics `array`: All recorded object metrics for this trial. This field is not currently populated.
    * items [GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric](#googlecloudmlv1_hyperparameteroutput_hyperparametermetric)
  * builtInAlgorithmOutput [GoogleCloudMlV1__BuiltInAlgorithmOutput](#googlecloudmlv1__builtinalgorithmoutput)
  * endTime `string`: Output only. End time for the trial.
  * finalMetric [GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric](#googlecloudmlv1_hyperparameteroutput_hyperparametermetric)
  * hyperparameters `object`: The hyperparameters given to this trial.
  * isTrialStoppedEarly `boolean`: True if the trial is stopped early.
  * startTime `string`: Output only. Start time for the trial.
  * state `string` (values: STATE_UNSPECIFIED, QUEUED, PREPARING, RUNNING, SUCCEEDED, FAILED, CANCELLING, CANCELLED): Output only. The detailed state of the trial.
  * trialId `string`: The trial id for these results.

### GoogleCloudMlV1__HyperparameterSpec
* GoogleCloudMlV1__HyperparameterSpec `object`: Represents a set of hyperparameters to optimize.
  * algorithm `string` (values: ALGORITHM_UNSPECIFIED, GRID_SEARCH, RANDOM_SEARCH): Optional. The search algorithm specified for the hyperparameter tuning job. Uses the default AI Platform hyperparameter tuning algorithm if unspecified.
  * enableTrialEarlyStopping `boolean`: Optional. Indicates if the hyperparameter tuning job enables auto trial early stopping.
  * goal `string` (values: GOAL_TYPE_UNSPECIFIED, MAXIMIZE, MINIMIZE): Required. The type of goal to use for tuning. Available types are `MAXIMIZE` and `MINIMIZE`. Defaults to `MAXIMIZE`.
  * hyperparameterMetricTag `string`: Optional. The TensorFlow summary tag name to use for optimizing trials. For current versions of TensorFlow, this tag name should exactly match what is shown in TensorBoard, including all scopes. For versions of TensorFlow prior to 0.12, this should be only the tag passed to tf.Summary. By default, "training/hptuning/metric" will be used.
  * maxFailedTrials `integer`: Optional. The number of failed trials that need to be seen before failing the hyperparameter tuning job. You can specify this field to override the default failing criteria for AI Platform hyperparameter tuning jobs. Defaults to zero, which means the service decides when a hyperparameter job should fail.
  * maxParallelTrials `integer`: Optional. The number of training trials to run concurrently. You can reduce the time it takes to perform hyperparameter tuning by adding trials in parallel. However, each trail only benefits from the information gained in completed trials. That means that a trial does not get access to the results of trials running at the same time, which could reduce the quality of the overall optimization. Each trial will use the same scale tier and machine types. Defaults to one.
  * maxTrials `integer`: Optional. How many training trials should be attempted to optimize the specified hyperparameters. Defaults to one.
  * params `array`: Required. The set of parameters to tune.
    * items [GoogleCloudMlV1__ParameterSpec](#googlecloudmlv1__parameterspec)
  * resumePreviousJobId `string`: Optional. The prior hyperparameter tuning job id that users hope to continue with. The job id will be used to find the corresponding vizier study guid and resume the study.

### GoogleCloudMlV1__IntegratedGradientsAttribution
* GoogleCloudMlV1__IntegratedGradientsAttribution `object`: Attributes credit by computing the Aumann-Shapley value taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365
  * numIntegralSteps `integer`: Number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range.

### GoogleCloudMlV1__Job
* GoogleCloudMlV1__Job `object`: Represents a training or prediction job.
  * createTime `string`: Output only. When the job was created.
  * endTime `string`: Output only. When the job processing was completed.
  * errorMessage `string`: Output only. The details of a failure or a cancellation.
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a job from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform job updates in order to avoid race conditions: An `etag` is returned in the response to `GetJob`, and systems are expected to put that etag in the request to `UpdateJob` to ensure that their change will be applied to the same version of the job.
  * jobId `string`: Required. The user-specified id of the job.
  * labels `object`: Optional. One or more labels that you can add, to organize your jobs. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels.
  * predictionInput [GoogleCloudMlV1__PredictionInput](#googlecloudmlv1__predictioninput)
  * predictionOutput [GoogleCloudMlV1__PredictionOutput](#googlecloudmlv1__predictionoutput)
  * startTime `string`: Output only. When the job processing was started.
  * state `string` (values: STATE_UNSPECIFIED, QUEUED, PREPARING, RUNNING, SUCCEEDED, FAILED, CANCELLING, CANCELLED): Output only. The detailed state of a job.
  * trainingInput [GoogleCloudMlV1__TrainingInput](#googlecloudmlv1__traininginput)
  * trainingOutput [GoogleCloudMlV1__TrainingOutput](#googlecloudmlv1__trainingoutput)

### GoogleCloudMlV1__ListJobsResponse
* GoogleCloudMlV1__ListJobsResponse `object`: Response message for the ListJobs method.
  * jobs `array`: The list of jobs.
    * items [GoogleCloudMlV1__Job](#googlecloudmlv1__job)
  * nextPageToken `string`: Optional. Pass this token as the `page_token` field of the request for a subsequent call.

### GoogleCloudMlV1__ListLocationsResponse
* GoogleCloudMlV1__ListLocationsResponse `object`
  * locations `array`: Locations where at least one type of CMLE capability is available.
    * items [GoogleCloudMlV1__Location](#googlecloudmlv1__location)
  * nextPageToken `string`: Optional. Pass this token as the `page_token` field of the request for a subsequent call.

### GoogleCloudMlV1__ListModelsResponse
* GoogleCloudMlV1__ListModelsResponse `object`: Response message for the ListModels method.
  * models `array`: The list of models.
    * items [GoogleCloudMlV1__Model](#googlecloudmlv1__model)
  * nextPageToken `string`: Optional. Pass this token as the `page_token` field of the request for a subsequent call.

### GoogleCloudMlV1__ListOptimalTrialsRequest
* GoogleCloudMlV1__ListOptimalTrialsRequest `object`: The request message for the ListTrials service method.

### GoogleCloudMlV1__ListOptimalTrialsResponse
* GoogleCloudMlV1__ListOptimalTrialsResponse `object`: The response message for the ListOptimalTrials method.
  * trials `array`: The pareto-optimal trials for multiple objective study or the optimal trial for single objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency
    * items [GoogleCloudMlV1__Trial](#googlecloudmlv1__trial)

### GoogleCloudMlV1__ListStudiesResponse
* GoogleCloudMlV1__ListStudiesResponse `object`
  * studies `array`: The studies associated with the project.
    * items [GoogleCloudMlV1__Study](#googlecloudmlv1__study)

### GoogleCloudMlV1__ListTrialsResponse
* GoogleCloudMlV1__ListTrialsResponse `object`: The response message for the ListTrials method.
  * trials `array`: The trials associated with the study.
    * items [GoogleCloudMlV1__Trial](#googlecloudmlv1__trial)

### GoogleCloudMlV1__ListVersionsResponse
* GoogleCloudMlV1__ListVersionsResponse `object`: Response message for the ListVersions method.
  * nextPageToken `string`: Optional. Pass this token as the `page_token` field of the request for a subsequent call.
  * versions `array`: The list of versions.
    * items [GoogleCloudMlV1__Version](#googlecloudmlv1__version)

### GoogleCloudMlV1__Location
* GoogleCloudMlV1__Location `object`
  * capabilities `array`: Capabilities available in the location.
    * items [GoogleCloudMlV1__Capability](#googlecloudmlv1__capability)
  * name `string`

### GoogleCloudMlV1__ManualScaling
* GoogleCloudMlV1__ManualScaling `object`: Options for manually scaling a model.
  * nodes `integer`: The number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed, so the cost of operating this model will be proportional to `nodes` * number of hours since last billing cycle plus the cost for each prediction performed.

### GoogleCloudMlV1__Measurement
* GoogleCloudMlV1__Measurement `object`: A message representing a measurement.
  * elapsedTime `string`: Output only. Time that the trial has been running at the point of this measurement.
  * metrics `array`: Provides a list of metrics that act as inputs into the objective function.
    * items [GoogleCloudMlV1_Measurement_Metric](#googlecloudmlv1_measurement_metric)
  * stepCount `string`: The number of steps a machine learning model has been trained for. Must be non-negative.

### GoogleCloudMlV1__MetricSpec
* GoogleCloudMlV1__MetricSpec `object`: MetricSpec contains the specifications to use to calculate the desired nodes count when autoscaling is enabled.
  * name `string` (values: METRIC_NAME_UNSPECIFIED, CPU_USAGE, GPU_DUTY_CYCLE): metric name.
  * target `integer`: Target specifies the target value for the given metric; once real metric deviates from the threshold by a certain percentage, the node count changes.

### GoogleCloudMlV1__Model
* GoogleCloudMlV1__Model `object`: Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.
  * defaultVersion [GoogleCloudMlV1__Version](#googlecloudmlv1__version)
  * description `string`: Optional. The description specified for the model when it was created.
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetModel`, and systems are expected to put that etag in the request to `UpdateModel` to ensure that their change will be applied to the model as intended.
  * labels `object`: Optional. One or more labels that you can add, to organize your models. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels.
  * name `string`: Required. The name specified for the model when it was created. The model name must be unique within the project it is created in.
  * onlinePredictionConsoleLogging `boolean`: Optional. If true, online prediction nodes send `stderr` and `stdout` streams to Cloud Logging. These can be more verbose than the standard access logs (see `onlinePredictionLogging`) and can incur higher cost. However, they are helpful for debugging. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high QPS. Estimate your costs before enabling this option. Default is false.
  * onlinePredictionLogging `boolean`: Optional. If true, online prediction access logs are sent to Cloud Logging. These logs are like standard server access logs, containing information like timestamp and latency for each request. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option. Default is false.
  * regions `array`: Optional. The list of regions where the model is going to be deployed. Only one region per model is supported. Defaults to 'us-central1' if nothing is set. See the available regions for AI Platform services. Note: * No matter where a model is deployed, it can always be accessed by users from anywhere, both for online and batch prediction. * The region for a batch prediction job is set by the region field when submitting the batch prediction job and does not take its value from this field.
    * items `string`

### GoogleCloudMlV1__OperationMetadata
* GoogleCloudMlV1__OperationMetadata `object`: Represents the metadata of the long-running operation.
  * createTime `string`: The time the operation was submitted.
  * endTime `string`: The time operation processing completed.
  * isCancellationRequested `boolean`: Indicates whether a request to cancel this operation has been made.
  * labels `object`: The user labels, inherited from the model or the model version being operated on.
  * modelName `string`: Contains the name of the model associated with the operation.
  * operationType `string` (values: OPERATION_TYPE_UNSPECIFIED, CREATE_VERSION, DELETE_VERSION, DELETE_MODEL, UPDATE_MODEL, UPDATE_VERSION, UPDATE_CONFIG): The operation type.
  * projectNumber `string`: Contains the project number associated with the operation.
  * startTime `string`: The time operation processing started.
  * version [GoogleCloudMlV1__Version](#googlecloudmlv1__version)

### GoogleCloudMlV1__ParameterSpec
* GoogleCloudMlV1__ParameterSpec `object`: Represents a single hyperparameter to optimize.
  * categoricalValues `array`: Required if type is `CATEGORICAL`. The list of possible categories.
    * items `string`
  * discreteValues `array`: Required if type is `DISCRETE`. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values.
    * items `number`
  * maxValue `number`: Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is `INTEGER`.
  * minValue `number`: Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is INTEGER.
  * parameterName `string`: Required. The parameter name must be unique amongst all ParameterConfigs in a HyperparameterSpec message. E.g., "learning_rate".
  * scaleType `string` (values: NONE, UNIT_LINEAR_SCALE, UNIT_LOG_SCALE, UNIT_REVERSE_LOG_SCALE): Optional. How the parameter should be scaled to the hypercube. Leave unset for categorical parameters. Some kind of scaling is strongly recommended for real or integral parameters (e.g., `UNIT_LINEAR_SCALE`).
  * type `string` (values: PARAMETER_TYPE_UNSPECIFIED, DOUBLE, INTEGER, CATEGORICAL, DISCRETE): Required. The type of the parameter.

### GoogleCloudMlV1__PredictRequest
* GoogleCloudMlV1__PredictRequest `object`: Request for predictions to be issued against a trained model.
  * httpBody [GoogleApi__HttpBody](#googleapi__httpbody)

### GoogleCloudMlV1__PredictionInput
* GoogleCloudMlV1__PredictionInput `object`: Represents input parameters for a prediction job.
  * batchSize `string`: Optional. Number of records per batch, defaults to 64. The service will buffer batch_size number of records in memory before invoking one Tensorflow prediction call internally. So take the record size and memory available into consideration when setting this parameter.
  * dataFormat `string` (values: DATA_FORMAT_UNSPECIFIED, JSON, TEXT, TF_RECORD, TF_RECORD_GZIP, CSV): Required. The format of the input data files.
  * inputPaths `array`: Required. The Cloud Storage location of the input data files. May contain wildcards.
    * items `string`
  * maxWorkerCount `string`: Optional. The maximum number of workers to be used for parallel processing. Defaults to 10 if not specified.
  * modelName `string`: Use this field if you want to use the default version for the specified model. The string must use the following format: `"projects/YOUR_PROJECT/models/YOUR_MODEL"`
  * outputDataFormat `string` (values: DATA_FORMAT_UNSPECIFIED, JSON, TEXT, TF_RECORD, TF_RECORD_GZIP, CSV): Optional. Format of the output data files, defaults to JSON.
  * outputPath `string`: Required. The output Google Cloud Storage location.
  * region `string`: Required. The Google Compute Engine region to run the prediction job in. See the available regions for AI Platform services.
  * runtimeVersion `string`: Optional. The AI Platform runtime version to use for this batch prediction. If not set, AI Platform will pick the runtime version used during the CreateVersion request for this model version, or choose the latest stable version when model version information is not available such as when the model is specified by uri.
  * signatureName `string`: Optional. The name of the signature defined in the SavedModel to use for this job. Please refer to [SavedModel](https://tensorflow.github.io/serving/serving_basic.html) for information about how to use signatures. Defaults to [DEFAULT_SERVING_SIGNATURE_DEF_KEY](https://www.tensorflow.org/api_docs/python/tf/saved_model/signature_constants) , which is "serving_default".
  * uri `string`: Use this field if you want to specify a Google Cloud Storage path for the model to use.
  * versionName `string`: Use this field if you want to specify a version of the model to use. The string is formatted the same way as `model_version`, with the addition of the version information: `"projects/YOUR_PROJECT/models/YOUR_MODEL/versions/YOUR_VERSION"`

### GoogleCloudMlV1__PredictionOutput
* GoogleCloudMlV1__PredictionOutput `object`: Represents results of a prediction job.
  * errorCount `string`: The number of data instances which resulted in errors.
  * nodeHours `number`: Node hours used by the batch prediction job.
  * outputPath `string`: The output Google Cloud Storage location provided at the job creation time.
  * predictionCount `string`: The number of generated predictions.

### GoogleCloudMlV1__ReplicaConfig
* GoogleCloudMlV1__ReplicaConfig `object`: Represents the configuration for a replica in a cluster.
  * acceleratorConfig [GoogleCloudMlV1__AcceleratorConfig](#googlecloudmlv1__acceleratorconfig)
  * containerArgs `array`: Arguments to the entrypoint command. The following rules apply for container_command and container_args: - If you do not supply command or args: The defaults defined in the Docker image are used. - If you supply a command but no args: The default EntryPoint and the default Cmd defined in the Docker image are ignored. Your command is run without any arguments. - If you supply only args: The default Entrypoint defined in the Docker image is run with the args that you supplied. - If you supply a command and args: The default Entrypoint and the default Cmd defined in the Docker image are ignored. Your command is run with your args. It cannot be set if custom container image is not provided. Note that this field and [TrainingInput.args] are mutually exclusive, i.e., both cannot be set at the same time.
    * items `string`
  * containerCommand `array`: The command with which the replica's custom container is run. If provided, it will override default ENTRYPOINT of the docker image. If not provided, the docker image's ENTRYPOINT is used. It cannot be set if custom container image is not provided. Note that this field and [TrainingInput.args] are mutually exclusive, i.e., both cannot be set at the same time.
    * items `string`
  * diskConfig [GoogleCloudMlV1__DiskConfig](#googlecloudmlv1__diskconfig)
  * imageUri `string`: The Docker image to run on the replica. This image must be in Container Registry. Learn more about [configuring custom containers](/ai-platform/training/docs/distributed-training-containers).
  * tpuTfVersion `string`: The AI Platform runtime version that includes a TensorFlow version matching the one used in the custom container. This field is required if the replica is a TPU worker that uses a custom container. Otherwise, do not specify this field. This must be a [runtime version that currently supports training with TPUs](/ml-engine/docs/tensorflow/runtime-version-list#tpu-support). Note that the version of TensorFlow included in a runtime version may differ from the numbering of the runtime version itself, because it may have a different [patch version](https://www.tensorflow.org/guide/version_compat#semantic_versioning_20). In this field, you must specify the runtime version (TensorFlow minor version). For example, if your custom container runs TensorFlow `1.x.y`, specify `1.x`.

### GoogleCloudMlV1__RequestLoggingConfig
* GoogleCloudMlV1__RequestLoggingConfig `object`: Configuration for logging request-response pairs to a BigQuery table. Online prediction requests to a model version and the responses to these requests are converted to raw strings and saved to the specified BigQuery table. Logging is constrained by [BigQuery quotas and limits](/bigquery/quotas). If your project exceeds BigQuery quotas or limits, AI Platform Prediction does not log request-response pairs, but it continues to serve predictions. If you are using [continuous evaluation](/ml-engine/docs/continuous-evaluation/), you do not need to specify this configuration manually. Setting up continuous evaluation automatically enables logging of request-response pairs.
  * bigqueryTableName `string`: Required. Fully qualified BigQuery table name in the following format: " project_id.dataset_name.table_name" The specified table must already exist, and the "Cloud ML Service Agent" for your project must have permission to write to it. The table must have the following [schema](/bigquery/docs/schemas): Field nameType Mode model STRING REQUIRED model_version STRING REQUIRED time TIMESTAMP REQUIRED raw_data STRING REQUIRED raw_prediction STRING NULLABLE groundtruth STRING NULLABLE 
  * samplingPercentage `number`: Percentage of requests to be logged, expressed as a fraction from 0 to 1. For example, if you want to log 10% of requests, enter `0.1`. The sampling window is the lifetime of the model version. Defaults to 0.

### GoogleCloudMlV1__RouteMap
* GoogleCloudMlV1__RouteMap `object`: Specifies HTTP paths served by a custom container. AI Platform Prediction sends requests to these paths on the container; the custom container must run an HTTP server that responds to these requests with appropriate responses. Read [Custom container requirements](/ai-platform/prediction/docs/custom-container-requirements) for details on how to create your container image to meet these requirements.
  * health `string`: HTTP path on the container to send health checkss to. AI Platform Prediction intermittently sends GET requests to this path on the container's IP address and port to check that the container is healthy. Read more about [health checks](/ai-platform/prediction/docs/custom-container-requirements#checks). For example, if you set this field to `/bar`, then AI Platform Prediction intermittently sends a GET request to the `/bar` path on the port of your container specified by the first value of Version.container.ports. If you don't specify this field, it defaults to the following value: /v1/models/ MODEL/versions/VERSION The placeholders in this value are replaced as follows: * MODEL: The name of the parent Model. This does not include the "projects/PROJECT_ID/models/" prefix that the API returns in output; it is the bare model name, as provided to projects.models.create. * VERSION: The name of the model version. This does not include the "projects/PROJECT_ID /models/MODEL/versions/" prefix that the API returns in output; it is the bare version name, as provided to projects.models.versions.create.
  * predict `string`: HTTP path on the container to send prediction requests to. AI Platform Prediction forwards requests sent using projects.predict to this path on the container's IP address and port. AI Platform Prediction then returns the container's response in the API response. For example, if you set this field to `/foo`, then when AI Platform Prediction receives a prediction request, it forwards the request body in a POST request to the `/foo` path on the port of your container specified by the first value of Version.container.ports. If you don't specify this field, it defaults to the following value: /v1/models/MODEL/versions/VERSION:predict The placeholders in this value are replaced as follows: * MODEL: The name of the parent Model. This does not include the "projects/PROJECT_ID/models/" prefix that the API returns in output; it is the bare model name, as provided to projects.models.create. * VERSION: The name of the model version. This does not include the "projects/PROJECT_ID/models/MODEL/versions/" prefix that the API returns in output; it is the bare version name, as provided to projects.models.versions.create.

### GoogleCloudMlV1__SampledShapleyAttribution
* GoogleCloudMlV1__SampledShapleyAttribution `object`: An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features.
  * numPaths `integer`: The number of feature permutations to consider when approximating the Shapley values.

### GoogleCloudMlV1__Scheduling
* GoogleCloudMlV1__Scheduling `object`: All parameters related to scheduling of training jobs.
  * maxRunningTime `string`: Optional. The maximum job running time, expressed in seconds. The field can contain up to nine fractional digits, terminated by `s`. If not specified, this field defaults to `604800s` (seven days). If the training job is still running after this duration, AI Platform Training cancels it. The duration is measured from when the job enters the `RUNNING` state; therefore it does not overlap with the duration limited by Scheduling.max_wait_time. For example, if you want to ensure your job runs for no more than 2 hours, set this field to `7200s` (2 hours * 60 minutes / hour * 60 seconds / minute). If you submit your training job using the `gcloud` tool, you can [specify this field in a `config.yaml` file](/ai-platform/training/docs/training-jobs#formatting_your_configuration_parameters). For example: ```yaml trainingInput: scheduling: maxRunningTime: 7200s ```
  * maxWaitTime `string`: Optional. The maximum job wait time, expressed in seconds. The field can contain up to nine fractional digits, terminated by `s`. If not specified, there is no limit to the wait time. The minimum for this field is `1800s` (30 minutes). If the training job has not entered the `RUNNING` state after this duration, AI Platform Training cancels it. After the job begins running, it can no longer be cancelled due to the maximum wait time. Therefore the duration limited by this field does not overlap with the duration limited by Scheduling.max_running_time. For example, if the job temporarily stops running and retries due to a [VM restart](/ai-platform/training/docs/overview#restarts), this cannot lead to a maximum wait time cancellation. However, independently of this constraint, AI Platform Training might stop a job if there are too many retries due to exhausted resources in a region. The following example describes how you might use this field: To cancel your job if it doesn't start running within 1 hour, set this field to `3600s` (1 hour * 60 minutes / hour * 60 seconds / minute). If the job is still in the `QUEUED` or `PREPARING` state after an hour of waiting, AI Platform Training cancels the job. If you submit your training job using the `gcloud` tool, you can [specify this field in a `config.yaml` file](/ai-platform/training/docs/training-jobs#formatting_your_configuration_parameters). For example: ```yaml trainingInput: scheduling: maxWaitTime: 3600s ```

### GoogleCloudMlV1__SetDefaultVersionRequest
* GoogleCloudMlV1__SetDefaultVersionRequest `object`: Request message for the SetDefaultVersion request.

### GoogleCloudMlV1__StopTrialRequest
* GoogleCloudMlV1__StopTrialRequest `object`

### GoogleCloudMlV1__Study
* GoogleCloudMlV1__Study `object`: A message representing a Study.
  * createTime `string`: Output only. Time at which the study was created.
  * inactiveReason `string`: Output only. A human readable reason why the Study is inactive. This should be empty if a study is ACTIVE or COMPLETED.
  * name `string`: Output only. The name of a study.
  * state `string` (values: STATE_UNSPECIFIED, ACTIVE, INACTIVE, COMPLETED): Output only. The detailed state of a study.
  * studyConfig [GoogleCloudMlV1__StudyConfig](#googlecloudmlv1__studyconfig)

### GoogleCloudMlV1__StudyConfig
* GoogleCloudMlV1__StudyConfig `object`: Represents configuration of a study.
  * parameters `array`: Required. The set of parameters to tune.
    * items [GoogleCloudMlV1_StudyConfig_ParameterSpec](#googlecloudmlv1_studyconfig_parameterspec)
  * algorithm `string` (values: ALGORITHM_UNSPECIFIED, GAUSSIAN_PROCESS_BANDIT, GRID_SEARCH, RANDOM_SEARCH): The search algorithm specified for the study.
  * automatedStoppingConfig [GoogleCloudMlV1__AutomatedStoppingConfig](#googlecloudmlv1__automatedstoppingconfig)
  * metrics `array`: Metric specs for the study.
    * items [GoogleCloudMlV1_StudyConfig_MetricSpec](#googlecloudmlv1_studyconfig_metricspec)

### GoogleCloudMlV1__SuggestTrialsMetadata
* GoogleCloudMlV1__SuggestTrialsMetadata `object`: Metadata field of a google.longrunning.Operation associated with a SuggestTrialsRequest.
  * clientId `string`: The identifier of the client that is requesting the suggestion.
  * createTime `string`: The time operation was submitted.
  * study `string`: The name of the study that the trial belongs to.
  * suggestionCount `integer`: The number of suggestions requested.

### GoogleCloudMlV1__SuggestTrialsRequest
* GoogleCloudMlV1__SuggestTrialsRequest `object`: The request message for the SuggestTrial service method.
  * clientId `string`: Required. The identifier of the client that is requesting the suggestion. If multiple SuggestTrialsRequests have the same `client_id`, the service will return the identical suggested trial if the trial is pending, and provide a new trial if the last suggested trial was completed.
  * suggestionCount `integer`: Required. The number of suggestions requested.

### GoogleCloudMlV1__SuggestTrialsResponse
* GoogleCloudMlV1__SuggestTrialsResponse `object`: This message will be placed in the response field of a completed google.longrunning.Operation associated with a SuggestTrials request.
  * endTime `string`: The time at which operation processing completed.
  * startTime `string`: The time at which the operation was started.
  * studyState `string` (values: STATE_UNSPECIFIED, ACTIVE, INACTIVE, COMPLETED): The state of the study.
  * trials `array`: A list of trials.
    * items [GoogleCloudMlV1__Trial](#googlecloudmlv1__trial)

### GoogleCloudMlV1__TrainingInput
* GoogleCloudMlV1__TrainingInput `object`: Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to [submitting a training job](/ai-platform/training/docs/training-jobs).
  * args `array`: Optional. Command-line arguments passed to the training application when it starts. If your job uses a custom container, then the arguments are passed to the container's `ENTRYPOINT` command.
    * items `string`
  * encryptionConfig [GoogleCloudMlV1__EncryptionConfig](#googlecloudmlv1__encryptionconfig)
  * evaluatorConfig [GoogleCloudMlV1__ReplicaConfig](#googlecloudmlv1__replicaconfig)
  * evaluatorCount `string`: Optional. The number of evaluator replicas to use for the training job. Each replica in the cluster will be of the type specified in `evaluator_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `evaluator_type`. The default value is zero.
  * evaluatorType `string`: Optional. Specifies the type of virtual machine to use for your training job's evaluator nodes. The supported values are the same as those described in the entry for `masterType`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. This value must be present when `scaleTier` is set to `CUSTOM` and `evaluatorCount` is greater than zero.
  * hyperparameters [GoogleCloudMlV1__HyperparameterSpec](#googlecloudmlv1__hyperparameterspec)
  * jobDir `string`: Optional. A Google Cloud Storage path in which to store training outputs and other data needed for training. This path is passed to your TensorFlow program as the '--job-dir' command-line argument. The benefit of specifying this field is that Cloud ML validates the path for use in training.
  * masterConfig [GoogleCloudMlV1__ReplicaConfig](#googlecloudmlv1__replicaconfig)
  * masterType `string`: Optional. Specifies the type of virtual machine to use for your training job's master worker. You must specify this field when `scaleTier` is set to `CUSTOM`. You can use certain Compute Engine machine types directly in this field. The following types are supported: - `n1-standard-4` - `n1-standard-8` - `n1-standard-16` - `n1-standard-32` - `n1-standard-64` - `n1-standard-96` - `n1-highmem-2` - `n1-highmem-4` - `n1-highmem-8` - `n1-highmem-16` - `n1-highmem-32` - `n1-highmem-64` - `n1-highmem-96` - `n1-highcpu-16` - `n1-highcpu-32` - `n1-highcpu-64` - `n1-highcpu-96` Learn more about [using Compute Engine machine types](/ml-engine/docs/machine-types#compute-engine-machine-types). Alternatively, you can use the following legacy machine types: - `standard` - `large_model` - `complex_model_s` - `complex_model_m` - `complex_model_l` - `standard_gpu` - `complex_model_m_gpu` - `complex_model_l_gpu` - `standard_p100` - `complex_model_m_p100` - `standard_v100` - `large_model_v100` - `complex_model_m_v100` - `complex_model_l_v100` Learn more about [using legacy machine types](/ml-engine/docs/machine-types#legacy-machine-types). Finally, if you want to use a TPU for training, specify `cloud_tpu` in this field. Learn more about the [special configuration options for training with TPUs](/ml-engine/docs/tensorflow/using-tpus#configuring_a_custom_tpu_machine).
  * network `string`: Optional. The full name of the [Compute Engine network](/vpc/docs/vpc) to which the Job is peered. For example, `projects/12345/global/networks/myVPC`. The format of this field is `projects/{project}/global/networks/{network}`, where {project} is a project number (like `12345`) and {network} is network name. Private services access must already be configured for the network. If left unspecified, the Job is not peered with any network. [Learn about using VPC Network Peering.](/ai-platform/training/docs/vpc-peering).
  * packageUris `array`: Required. The Google Cloud Storage location of the packages with the training program and any additional dependencies. The maximum number of package URIs is 100.
    * items `string`
  * parameterServerConfig [GoogleCloudMlV1__ReplicaConfig](#googlecloudmlv1__replicaconfig)
  * parameterServerCount `string`: Optional. The number of parameter server replicas to use for the training job. Each replica in the cluster will be of the type specified in `parameter_server_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `parameter_server_type`. The default value is zero.
  * parameterServerType `string`: Optional. Specifies the type of virtual machine to use for your training job's parameter server. The supported values are the same as those described in the entry for `master_type`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. This value must be present when `scaleTier` is set to `CUSTOM` and `parameter_server_count` is greater than zero.
  * pythonModule `string`: Required. The Python module name to run after installing the packages.
  * pythonVersion `string`: Optional. The version of Python used in training. You must either specify this field or specify `masterConfig.imageUri`. The following Python versions are available: * Python '3.7' is available when `runtime_version` is set to '1.15' or later. * Python '3.5' is available when `runtime_version` is set to a version from '1.4' to '1.14'. * Python '2.7' is available when `runtime_version` is set to '1.15' or earlier. Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list).
  * region `string`: Required. The region to run the training job in. See the [available regions](/ai-platform/training/docs/regions) for AI Platform Training.
  * runtimeVersion `string`: Optional. The AI Platform runtime version to use for training. You must either specify this field or specify `masterConfig.imageUri`. For more information, see the [runtime version list](/ai-platform/training/docs/runtime-version-list) and learn [how to manage runtime versions](/ai-platform/training/docs/versioning).
  * scaleTier `string` (values: BASIC, STANDARD_1, PREMIUM_1, BASIC_GPU, BASIC_TPU, CUSTOM): Required. Specifies the machine types, the number of replicas for workers and parameter servers.
  * scheduling [GoogleCloudMlV1__Scheduling](#googlecloudmlv1__scheduling)
  * serviceAccount `string`: Optional. The email address of a service account to use when running the training appplication. You must have the `iam.serviceAccounts.actAs` permission for the specified service account. In addition, the AI Platform Training Google-managed service account must have the `roles/iam.serviceAccountAdmin` role for the specified service account. [Learn more about configuring a service account.](/ai-platform/training/docs/custom-service-account) If not specified, the AI Platform Training Google-managed service account is used by default.
  * useChiefInTfConfig `boolean`: Optional. Use `chief` instead of `master` in the `TF_CONFIG` environment variable when training with a custom container. Defaults to `false`. [Learn more about this field.](/ai-platform/training/docs/distributed-training-details#chief-versus-master) This field has no effect for training jobs that don't use a custom container.
  * workerConfig [GoogleCloudMlV1__ReplicaConfig](#googlecloudmlv1__replicaconfig)
  * workerCount `string`: Optional. The number of worker replicas to use for the training job. Each replica in the cluster will be of the type specified in `worker_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `worker_type`. The default value is zero.
  * workerType `string`: Optional. Specifies the type of virtual machine to use for your training job's worker nodes. The supported values are the same as those described in the entry for `masterType`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. If you use `cloud_tpu` for this value, see special instructions for [configuring a custom TPU machine](/ml-engine/docs/tensorflow/using-tpus#configuring_a_custom_tpu_machine). This value must be present when `scaleTier` is set to `CUSTOM` and `workerCount` is greater than zero.

### GoogleCloudMlV1__TrainingOutput
* GoogleCloudMlV1__TrainingOutput `object`: Represents results of a training job. Output only.
  * builtInAlgorithmOutput [GoogleCloudMlV1__BuiltInAlgorithmOutput](#googlecloudmlv1__builtinalgorithmoutput)
  * completedTrialCount `string`: The number of hyperparameter tuning trials that completed successfully. Only set for hyperparameter tuning jobs.
  * consumedMLUnits `number`: The amount of ML units consumed by the job.
  * hyperparameterMetricTag `string`: The TensorFlow summary tag name used for optimizing hyperparameter tuning trials. See [`HyperparameterSpec.hyperparameterMetricTag`](#HyperparameterSpec.FIELDS.hyperparameter_metric_tag) for more information. Only set for hyperparameter tuning jobs.
  * isBuiltInAlgorithmJob `boolean`: Whether this job is a built-in Algorithm job.
  * isHyperparameterTuningJob `boolean`: Whether this job is a hyperparameter tuning job.
  * trials `array`: Results for individual Hyperparameter trials. Only set for hyperparameter tuning jobs.
    * items [GoogleCloudMlV1__HyperparameterOutput](#googlecloudmlv1__hyperparameteroutput)

### GoogleCloudMlV1__Trial
* GoogleCloudMlV1__Trial `object`: A message representing a trial.
  * parameters `array`: The parameters of the trial.
    * items [GoogleCloudMlV1_Trial_Parameter](#googlecloudmlv1_trial_parameter)
  * clientId `string`: Output only. The identifier of the client that originally requested this trial.
  * endTime `string`: Output only. Time at which the trial's status changed to COMPLETED.
  * finalMeasurement [GoogleCloudMlV1__Measurement](#googlecloudmlv1__measurement)
  * infeasibleReason `string`: Output only. A human readable string describing why the trial is infeasible. This should only be set if trial_infeasible is true.
  * measurements `array`: A list of measurements that are strictly lexicographically ordered by their induced tuples (steps, elapsed_time). These are used for early stopping computations.
    * items [GoogleCloudMlV1__Measurement](#googlecloudmlv1__measurement)
  * name `string`: Output only. Name of the trial assigned by the service.
  * startTime `string`: Output only. Time at which the trial was started.
  * state `string` (values: STATE_UNSPECIFIED, REQUESTED, ACTIVE, COMPLETED, STOPPING): The detailed state of a trial.
  * trialInfeasible `boolean`: Output only. If true, the parameters in this trial are not attempted again.

### GoogleCloudMlV1__Version
* GoogleCloudMlV1__Version `object`: Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list.
  * acceleratorConfig [GoogleCloudMlV1__AcceleratorConfig](#googlecloudmlv1__acceleratorconfig)
  * autoScaling [GoogleCloudMlV1__AutoScaling](#googlecloudmlv1__autoscaling)
  * container [GoogleCloudMlV1__ContainerSpec](#googlecloudmlv1__containerspec)
  * createTime `string`: Output only. The time the version was created.
  * deploymentUri `string`: The Cloud Storage URI of a directory containing trained model artifacts to be used to create the model version. See the [guide to deploying models](/ai-platform/prediction/docs/deploying-models) for more information. The total number of files under this directory must not exceed 1000. During projects.models.versions.create, AI Platform Prediction copies all files from the specified directory to a location managed by the service. From then on, AI Platform Prediction uses these copies of the model artifacts to serve predictions, not the original files in Cloud Storage, so this location is useful only as a historical record. If you specify container, then this field is optional. Otherwise, it is required. Learn [how to use this field with a custom container](/ai-platform/prediction/docs/custom-container-requirements#artifacts).
  * description `string`: Optional. The description specified for the version when it was created.
  * errorMessage `string`: Output only. The details of a failure or a cancellation.
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetVersion`, and systems are expected to put that etag in the request to `UpdateVersion` to ensure that their change will be applied to the model as intended.
  * explanationConfig [GoogleCloudMlV1__ExplanationConfig](#googlecloudmlv1__explanationconfig)
  * framework `string` (values: FRAMEWORK_UNSPECIFIED, TENSORFLOW, SCIKIT_LEARN, XGBOOST): Optional. The machine learning framework AI Platform uses to train this version of the model. Valid values are `TENSORFLOW`, `SCIKIT_LEARN`, `XGBOOST`. If you do not specify a framework, AI Platform will analyze files in the deployment_uri to determine a framework. If you choose `SCIKIT_LEARN` or `XGBOOST`, you must also set the runtime version of the model to 1.4 or greater. Do **not** specify a framework if you're deploying a [custom prediction routine](/ai-platform/prediction/docs/custom-prediction-routines) or if you're using a [custom container](/ai-platform/prediction/docs/use-custom-container).
  * isDefault `boolean`: Output only. If true, this version will be used to handle prediction requests that do not specify a version. You can change the default version by calling projects.methods.versions.setDefault.
  * labels `object`: Optional. One or more labels that you can add, to organize your model versions. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels.
  * lastUseTime `string`: Output only. The time the version was last used for prediction.
  * machineType `string`: Optional. The type of machine on which to serve the model. Currently only applies to online prediction service. If this field is not specified, it defaults to `mls1-c1-m2`. Online prediction supports the following machine types: * `mls1-c1-m2` * `mls1-c4-m2` * `n1-standard-2` * `n1-standard-4` * `n1-standard-8` * `n1-standard-16` * `n1-standard-32` * `n1-highmem-2` * `n1-highmem-4` * `n1-highmem-8` * `n1-highmem-16` * `n1-highmem-32` * `n1-highcpu-2` * `n1-highcpu-4` * `n1-highcpu-8` * `n1-highcpu-16` * `n1-highcpu-32` `mls1-c4-m2` is in beta. All other machine types are generally available. Learn more about the [differences between machine types](/ml-engine/docs/machine-types-online-prediction).
  * manualScaling [GoogleCloudMlV1__ManualScaling](#googlecloudmlv1__manualscaling)
  * name `string`: Required. The name specified for the version when it was created. The version name must be unique within the model it is created in.
  * packageUris `array`: Optional. Cloud Storage paths (`gs://…`) of packages for [custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines) or [scikit-learn pipelines with custom code](/ml-engine/docs/scikit/exporting-for-prediction#custom-pipeline-code). For a custom prediction routine, one of these packages must contain your Predictor class (see [`predictionClass`](#Version.FIELDS.prediction_class)). Additionally, include any dependencies used by your Predictor or scikit-learn pipeline uses that are not already included in your selected [runtime version](/ml-engine/docs/tensorflow/runtime-version-list). If you specify this field, you must also set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater.
    * items `string`
  * predictionClass `string`: Optional. The fully qualified name (module_name.class_name) of a class that implements the Predictor interface described in this reference field. The module containing this class should be included in a package provided to the [`packageUris` field](#Version.FIELDS.package_uris). Specify this field if and only if you are deploying a [custom prediction routine (beta)](/ml-engine/docs/tensorflow/custom-prediction-routines). If you specify this field, you must set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater and you must set `machineType` to a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction). The following code sample provides the Predictor interface: class Predictor(object): """Interface for constructing custom predictors.""" def predict(self, instances, **kwargs): """Performs custom prediction. Instances are the decoded values from the request. They have already been deserialized from JSON. Args: instances: A list of prediction input instances. **kwargs: A dictionary of keyword args provided as additional fields on the predict request body. Returns: A list of outputs containing the prediction results. This list must be JSON serializable. """ raise NotImplementedError() @classmethod def from_path(cls, model_dir): """Creates an instance of Predictor using the given path. Loading of the predictor should be done in this method. Args: model_dir: The local directory that contains the exported model file along with any additional files uploaded when creating the version resource. Returns: An instance implementing this Predictor class. """ raise NotImplementedError() Learn more about [the Predictor interface and custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines).
  * pythonVersion `string`: Required. The version of Python used in prediction. The following Python versions are available: * Python '3.7' is available when `runtime_version` is set to '1.15' or later. * Python '3.5' is available when `runtime_version` is set to a version from '1.4' to '1.14'. * Python '2.7' is available when `runtime_version` is set to '1.15' or earlier. Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list).
  * requestLoggingConfig [GoogleCloudMlV1__RequestLoggingConfig](#googlecloudmlv1__requestloggingconfig)
  * routes [GoogleCloudMlV1__RouteMap](#googlecloudmlv1__routemap)
  * runtimeVersion `string`: Required. The AI Platform runtime version to use for this deployment. For more information, see the [runtime version list](/ml-engine/docs/runtime-version-list) and [how to manage runtime versions](/ml-engine/docs/versioning).
  * serviceAccount `string`: Optional. Specifies the service account for resource access control. If you specify this field, then you must also specify either the `containerSpec` or the `predictionClass` field. Learn more about [using a custom service account](/ai-platform/prediction/docs/custom-service-account).
  * state `string` (values: UNKNOWN, READY, CREATING, FAILED, DELETING, UPDATING): Output only. The state of a version.

### GoogleCloudMlV1__XraiAttribution
* GoogleCloudMlV1__XraiAttribution `object`: Attributes credit by computing the XRAI taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Currently only implemented for models with natural image inputs.
  * numIntegralSteps `integer`: Number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range.

### GoogleIamV1__AuditConfig
* GoogleIamV1__AuditConfig `object`: Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
  * auditLogConfigs `array`: The configuration for logging of each type of permission.
    * items [GoogleIamV1__AuditLogConfig](#googleiamv1__auditlogconfig)
  * service `string`: Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.

### GoogleIamV1__AuditLogConfig
* GoogleIamV1__AuditLogConfig `object`: Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
  * exemptedMembers `array`: Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
    * items `string`
  * logType `string` (values: LOG_TYPE_UNSPECIFIED, ADMIN_READ, DATA_WRITE, DATA_READ): The log type that this config enables.

### GoogleIamV1__Binding
* GoogleIamV1__Binding `object`: Associates `members` with a `role`.
  * condition [GoogleType__Expr](#googletype__expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### GoogleIamV1__Policy
* GoogleIamV1__Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [GoogleIamV1__AuditConfig](#googleiamv1__auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [GoogleIamV1__Binding](#googleiamv1__binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### GoogleIamV1__SetIamPolicyRequest
* GoogleIamV1__SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [GoogleIamV1__Policy](#googleiamv1__policy)
  * updateMask `string`: OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`

### GoogleIamV1__TestIamPermissionsRequest
* GoogleIamV1__TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### GoogleIamV1__TestIamPermissionsResponse
* GoogleIamV1__TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

### GoogleLongrunning__ListOperationsResponse
* GoogleLongrunning__ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [GoogleLongrunning__Operation](#googlelongrunning__operation)

### GoogleLongrunning__Operation
* GoogleLongrunning__Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [GoogleRpc__Status](#googlerpc__status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### GoogleProtobuf__Empty
* GoogleProtobuf__Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### GoogleRpc__Status
* GoogleRpc__Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### GoogleType__Expr
* GoogleType__Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.


