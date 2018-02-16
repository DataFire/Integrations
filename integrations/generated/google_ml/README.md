# @datafire/google_ml

Client library for Google Cloud Machine Learning Engine

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

google_ml.projects.models.versions.delete({
  "name": ""
}).then(data => {
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

### projects.models.versions.delete
Deletes a model version.

Each model can have multiple versions deployed and in use at any given
time. Use this method to remove a single version.

Note: You cannot delete the version that is set as the default version
of the model unless it is the only remaining version.


```js
google_ml.projects.models.versions.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the version. You can get the names of all the
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleLongrunning__Operation](#googlelongrunning__operation)

### projects.jobs.get
Describes a job.


```js
google_ml.projects.jobs.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the job to get the description of.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleCloudMlV1__Job](#googlecloudmlv1__job)

### projects.jobs.patch
Updates a specific job resource.

Currently the only supported fields to update are `labels`.


```js
google_ml.projects.jobs.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GoogleCloudMlV1__Job](#googlecloudmlv1__job)
  * name **required** `string`: Required. The job name.
  * updateMask `string`: Required. Specifies the path, relative to `Job`, of the field to update.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleCloudMlV1__Job](#googlecloudmlv1__job)

### projects.operations.list
Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.


```js
google_ml.projects.operations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: The standard list filter.
  * name **required** `string`: The name of the operation's parent resource.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleLongrunning__ListOperationsResponse](#googlelongrunning__listoperationsresponse)

### projects.jobs.cancel
Cancels a running job.


```js
google_ml.projects.jobs.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GoogleCloudMlV1__CancelJobRequest](#googlecloudmlv1__canceljobrequest)
  * name **required** `string`: Required. The name of the job to cancel.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleProtobuf__Empty](#googleprotobuf__empty)

### projects.getConfig
Get the service account information associated with your project. You need
this information in order to grant the service account persmissions for
the Google Cloud Storage location where you put your model training code
for training the model with Google Cloud Machine Learning.


```js
google_ml.projects.getConfig({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The project name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleCloudMlV1__GetConfigResponse](#googlecloudmlv1__getconfigresponse)

### projects.predict
Performs prediction on the data in the request.
Cloud ML Engine implements a custom `predict` verb on top of an HTTP POST
method. For details of the format, see the **guide to the
[predict request format](/ml-engine/docs/v1/predict-request)**.


```js
google_ml.projects.predict({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GoogleCloudMlV1__PredictRequest](#googlecloudmlv1__predictrequest)
  * name **required** `string`: Required. The resource name of a model or a version.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleApi__HttpBody](#googleapi__httpbody)

### projects.models.versions.setDefault
Designates a version to be the default for the model.

The default version is used for prediction requests made against the model
that don't specify a version.

The first version to be created for a model is automatically set as the
default. You must make any subsequent changes to the default version
setting manually using this method.


```js
google_ml.projects.models.versions.setDefault({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GoogleCloudMlV1__SetDefaultVersionRequest](#googlecloudmlv1__setdefaultversionrequest)
  * name **required** `string`: Required. The name of the version to make the default for the model. You
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleCloudMlV1__Version](#googlecloudmlv1__version)

### projects.jobs.list
Lists the jobs in the project.


```js
google_ml.projects.jobs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Optional. Specifies the subset of jobs to retrieve.
  * pageSize `integer`: Optional. The number of jobs to retrieve per "page" of results. If there
  * pageToken `string`: Optional. A page token to request the next page of results.
  * parent **required** `string`: Required. The name of the project for which to list jobs.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleCloudMlV1__ListJobsResponse](#googlecloudmlv1__listjobsresponse)

### projects.jobs.create
Creates a training or a batch prediction job.


```js
google_ml.projects.jobs.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [GoogleCloudMlV1__Job](#googlecloudmlv1__job)
  * parent **required** `string`: Required. The project name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleCloudMlV1__Job](#googlecloudmlv1__job)

### projects.locations.list
List all locations that provides at least one type of CMLE capability.


```js
google_ml.projects.locations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Optional. The number of locations to retrieve per "page" of results. If there
  * pageToken `string`: Optional. A page token to request the next page of results.
  * parent **required** `string`: Required. The name of the project for which available locations are to be
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleCloudMlV1__ListLocationsResponse](#googlecloudmlv1__listlocationsresponse)

### projects.models.list
Lists the models in a project.

Each project can contain multiple models, and each model can have multiple
versions.


```js
google_ml.projects.models.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Optional. Specifies the subset of models to retrieve.
  * pageSize `integer`: Optional. The number of models to retrieve per "page" of results. If there
  * pageToken `string`: Optional. A page token to request the next page of results.
  * parent **required** `string`: Required. The name of the project whose models are to be listed.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleCloudMlV1__ListModelsResponse](#googlecloudmlv1__listmodelsresponse)

### projects.models.create
Creates a model which will later contain one or more versions.

You must add at least one version before you can request predictions from
the model. Add versions by calling
[projects.models.versions.create](/ml-engine/reference/rest/v1/projects.models.versions/create).


```js
google_ml.projects.models.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [GoogleCloudMlV1__Model](#googlecloudmlv1__model)
  * parent **required** `string`: Required. The project name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleCloudMlV1__Model](#googlecloudmlv1__model)

### projects.models.versions.list
Gets basic information about all the versions of a model.

If you expect that a model has a lot of versions, or if you need to handle
only a limited number of results at a time, you can request that the list
be retrieved in batches (called pages):


```js
google_ml.projects.models.versions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Optional. Specifies the subset of versions to retrieve.
  * pageSize `integer`: Optional. The number of versions to retrieve per "page" of results. If
  * pageToken `string`: Optional. A page token to request the next page of results.
  * parent **required** `string`: Required. The name of the model for which to list the version.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleCloudMlV1__ListVersionsResponse](#googlecloudmlv1__listversionsresponse)

### projects.models.versions.create
Creates a new version of a model from a trained TensorFlow model.

If the version created in the cloud by this call is the first deployed
version of the specified model, it will be made the default version of the
model. When you add a version to a model that already has one or more
versions, the default version does not automatically change. If you want a
new version to be the default, you must call
[projects.models.versions.setDefault](/ml-engine/reference/rest/v1/projects.models.versions/setDefault).


```js
google_ml.projects.models.versions.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [GoogleCloudMlV1__Version](#googlecloudmlv1__version)
  * parent **required** `string`: Required. The name of the model.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleLongrunning__Operation](#googlelongrunning__operation)

### projects.jobs.getIamPolicy
Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.


```js
google_ml.projects.jobs.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleIamV1__Policy](#googleiamv1__policy)

### projects.jobs.setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy.


```js
google_ml.projects.jobs.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [GoogleIamV1__SetIamPolicyRequest](#googleiamv1__setiampolicyrequest)
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleIamV1__Policy](#googleiamv1__policy)

### projects.jobs.testIamPermissions
Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.


```js
google_ml.projects.jobs.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * body [GoogleIamV1__TestIamPermissionsRequest](#googleiamv1__testiampermissionsrequest)
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GoogleIamV1__TestIamPermissionsResponse](#googleiamv1__testiampermissionsresponse)



## Definitions

### GoogleApi__HttpBody
* GoogleApi__HttpBody `object`: Message that represents an arbitrary HTTP body. It should only be used for
  * contentType `string`: The HTTP Content-Type string representing the content type of the body.
  * data `string`: HTTP body binary data.
  * extensions `array`: Application specific response metadata. Must be set in the first response
    * items `object`

### GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric
* GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric `object`: An observed value of a metric.
  * objectiveValue `number`: The objective value at this training step.
  * trainingStep `string`: The global training step for this metric.

### GoogleCloudMlV1__AutoScaling
* GoogleCloudMlV1__AutoScaling `object`: Options for automatically scaling a model.
  * minNodes `integer`: Optional. The minimum number of nodes to allocate for this model. These

### GoogleCloudMlV1__CancelJobRequest
* GoogleCloudMlV1__CancelJobRequest `object`: Request message for the CancelJob method.

### GoogleCloudMlV1__Capability
* GoogleCloudMlV1__Capability `object`
  * availableAccelerators `array`: Available accelerators for the capability.
    * items `string` (values: ACCELERATOR_TYPE_UNSPECIFIED, NVIDIA_TESLA_K80, NVIDIA_TESLA_P100)
  * type `string` (values: TYPE_UNSPECIFIED, TRAINING, BATCH_PREDICTION, ONLINE_PREDICTION)

### GoogleCloudMlV1__GetConfigResponse
* GoogleCloudMlV1__GetConfigResponse `object`: Returns service account information associated with a project.
  * serviceAccount `string`: The service account Cloud ML uses to access resources in the project.
  * serviceAccountProject `string`: The project number for `service_account`.

### GoogleCloudMlV1__HyperparameterOutput
* GoogleCloudMlV1__HyperparameterOutput `object`: Represents the result of a single hyperparameter tuning trial from a
  * allMetrics `array`: All recorded object metrics for this trial. This field is not currently
    * items [GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric](#googlecloudmlv1_hyperparameteroutput_hyperparametermetric)
  * finalMetric [GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric](#googlecloudmlv1_hyperparameteroutput_hyperparametermetric)
  * hyperparameters `object`: The hyperparameters given to this trial.
  * trialId `string`: The trial id for these results.

### GoogleCloudMlV1__HyperparameterSpec
* GoogleCloudMlV1__HyperparameterSpec `object`: Represents a set of hyperparameters to optimize.
  * goal `string` (values: GOAL_TYPE_UNSPECIFIED, MAXIMIZE, MINIMIZE): Required. The type of goal to use for tuning. Available types are
  * hyperparameterMetricTag `string`: Optional. The Tensorflow summary tag name to use for optimizing trials. For
  * maxParallelTrials `integer`: Optional. The number of training trials to run concurrently.
  * maxTrials `integer`: Optional. How many training trials should be attempted to optimize
  * params `array`: Required. The set of parameters to tune.
    * items [GoogleCloudMlV1__ParameterSpec](#googlecloudmlv1__parameterspec)

### GoogleCloudMlV1__Job
* GoogleCloudMlV1__Job `object`: Represents a training or prediction job.
  * createTime `string`: Output only. When the job was created.
  * endTime `string`: Output only. When the job processing was completed.
  * errorMessage `string`: Output only. The details of a failure or a cancellation.
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * jobId `string`: Required. The user-specified id of the job.
  * labels `object`: Optional. One or more labels that you can add, to organize your jobs.
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
  * nextPageToken `string`: Optional. Pass this token as the `page_token` field of the request for a

### GoogleCloudMlV1__ListLocationsResponse
* GoogleCloudMlV1__ListLocationsResponse `object`
  * locations `array`: Locations where at least one type of CMLE capability is available.
    * items [GoogleCloudMlV1__Location](#googlecloudmlv1__location)
  * nextPageToken `string`: Optional. Pass this token as the `page_token` field of the request for a

### GoogleCloudMlV1__ListModelsResponse
* GoogleCloudMlV1__ListModelsResponse `object`: Response message for the ListModels method.
  * models `array`: The list of models.
    * items [GoogleCloudMlV1__Model](#googlecloudmlv1__model)
  * nextPageToken `string`: Optional. Pass this token as the `page_token` field of the request for a

### GoogleCloudMlV1__ListVersionsResponse
* GoogleCloudMlV1__ListVersionsResponse `object`: Response message for the ListVersions method.
  * nextPageToken `string`: Optional. Pass this token as the `page_token` field of the request for a
  * versions `array`: The list of versions.
    * items [GoogleCloudMlV1__Version](#googlecloudmlv1__version)

### GoogleCloudMlV1__Location
* GoogleCloudMlV1__Location `object`
  * capabilities `array`: Capabilities available in the location.
    * items [GoogleCloudMlV1__Capability](#googlecloudmlv1__capability)
  * name `string`

### GoogleCloudMlV1__ManualScaling
* GoogleCloudMlV1__ManualScaling `object`: Options for manually scaling a model.
  * nodes `integer`: The number of nodes to allocate for this model. These nodes are always up,

### GoogleCloudMlV1__Model
* GoogleCloudMlV1__Model `object`: Represents a machine learning solution.
  * defaultVersion [GoogleCloudMlV1__Version](#googlecloudmlv1__version)
  * description `string`: Optional. The description specified for the model when it was created.
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * labels `object`: Optional. One or more labels that you can add, to organize your models.
  * name `string`: Required. The name specified for the model when it was created.
  * onlinePredictionLogging `boolean`: Optional. If true, enables StackDriver Logging for online prediction.
  * regions `array`: Optional. The list of regions where the model is going to be deployed.
    * items `string`

### GoogleCloudMlV1__OperationMetadata
* GoogleCloudMlV1__OperationMetadata `object`: Represents the metadata of the long-running operation.
  * createTime `string`: The time the operation was submitted.
  * endTime `string`: The time operation processing completed.
  * isCancellationRequested `boolean`: Indicates whether a request to cancel this operation has been made.
  * labels `object`: The user labels, inherited from the model or the model version being
  * modelName `string`: Contains the name of the model associated with the operation.
  * operationType `string` (values: OPERATION_TYPE_UNSPECIFIED, CREATE_VERSION, DELETE_VERSION, DELETE_MODEL, UPDATE_MODEL, UPDATE_VERSION, UPDATE_CONFIG): The operation type.
  * projectNumber `string`: Contains the project number associated with the operation.
  * startTime `string`: The time operation processing started.
  * version [GoogleCloudMlV1__Version](#googlecloudmlv1__version)

### GoogleCloudMlV1__ParameterSpec
* GoogleCloudMlV1__ParameterSpec `object`: Represents a single hyperparameter to optimize.
  * categoricalValues `array`: Required if type is `CATEGORICAL`. The list of possible categories.
    * items `string`
  * discreteValues `array`: Required if type is `DISCRETE`.
    * items `number`
  * maxValue `number`: Required if typeis `DOUBLE` or `INTEGER`. This field
  * minValue `number`: Required if type is `DOUBLE` or `INTEGER`. This field
  * parameterName `string`: Required. The parameter name must be unique amongst all ParameterConfigs in
  * scaleType `string` (values: NONE, UNIT_LINEAR_SCALE, UNIT_LOG_SCALE, UNIT_REVERSE_LOG_SCALE): Optional. How the parameter should be scaled to the hypercube.
  * type `string` (values: PARAMETER_TYPE_UNSPECIFIED, DOUBLE, INTEGER, CATEGORICAL, DISCRETE): Required. The type of the parameter.

### GoogleCloudMlV1__PredictRequest
* GoogleCloudMlV1__PredictRequest `object`: Request for predictions to be issued against a trained model.
  * httpBody [GoogleApi__HttpBody](#googleapi__httpbody)

### GoogleCloudMlV1__PredictionInput
* GoogleCloudMlV1__PredictionInput `object`: Represents input parameters for a prediction job.
  * batchSize `string`: Optional. Number of records per batch, defaults to 64.
  * dataFormat `string` (values: DATA_FORMAT_UNSPECIFIED, JSON, TEXT, TF_RECORD, TF_RECORD_GZIP): Required. The format of the input data files.
  * inputPaths `array`: Required. The Google Cloud Storage location of the input data files.
    * items `string`
  * maxWorkerCount `string`: Optional. The maximum number of workers to be used for parallel processing.
  * modelName `string`: Use this field if you want to use the default version for the specified
  * outputPath `string`: Required. The output Google Cloud Storage location.
  * region `string`: Required. The Google Compute Engine region to run the prediction job in.
  * runtimeVersion `string`: Optional. The Google Cloud ML runtime version to use for this batch
  * signatureName `string`: Optional. The name of the signature defined in the SavedModel to use for
  * uri `string`: Use this field if you want to specify a Google Cloud Storage path for
  * versionName `string`: Use this field if you want to specify a version of the model to use. The

### GoogleCloudMlV1__PredictionOutput
* GoogleCloudMlV1__PredictionOutput `object`: Represents results of a prediction job.
  * errorCount `string`: The number of data instances which resulted in errors.
  * nodeHours `number`: Node hours used by the batch prediction job.
  * outputPath `string`: The output Google Cloud Storage location provided at the job creation time.
  * predictionCount `string`: The number of generated predictions.

### GoogleCloudMlV1__SetDefaultVersionRequest
* GoogleCloudMlV1__SetDefaultVersionRequest `object`: Request message for the SetDefaultVersion request.

### GoogleCloudMlV1__TrainingInput
* GoogleCloudMlV1__TrainingInput `object`: Represents input parameters for a training job.
  * args `array`: Optional. Command line arguments to pass to the program.
    * items `string`
  * hyperparameters [GoogleCloudMlV1__HyperparameterSpec](#googlecloudmlv1__hyperparameterspec)
  * jobDir `string`: Optional. A Google Cloud Storage path in which to store training outputs
  * masterType `string`: Optional. Specifies the type of virtual machine to use for your training
  * packageUris `array`: Required. The Google Cloud Storage location of the packages with
    * items `string`
  * parameterServerCount `string`: Optional. The number of parameter server replicas to use for the training
  * parameterServerType `string`: Optional. Specifies the type of virtual machine to use for your training
  * pythonModule `string`: Required. The Python module name to run after installing the packages.
  * pythonVersion `string`: Optional. The version of Python used in training. If not set, the default
  * region `string`: Required. The Google Compute Engine region to run the training job in.
  * runtimeVersion `string`: Optional. The Google Cloud ML runtime version to use for training.  If not
  * scaleTier `string` (values: BASIC, STANDARD_1, PREMIUM_1, BASIC_GPU, BASIC_TPU, CUSTOM): Required. Specifies the machine types, the number of replicas for workers
  * workerCount `string`: Optional. The number of worker replicas to use for the training job. Each
  * workerType `string`: Optional. Specifies the type of virtual machine to use for your training

### GoogleCloudMlV1__TrainingOutput
* GoogleCloudMlV1__TrainingOutput `object`: Represents results of a training job. Output only.
  * completedTrialCount `string`: The number of hyperparameter tuning trials that completed successfully.
  * consumedMLUnits `number`: The amount of ML units consumed by the job.
  * isHyperparameterTuningJob `boolean`: Whether this job is a hyperparameter tuning job.
  * trials `array`: Results for individual Hyperparameter trials.
    * items [GoogleCloudMlV1__HyperparameterOutput](#googlecloudmlv1__hyperparameteroutput)

### GoogleCloudMlV1__Version
* GoogleCloudMlV1__Version `object`: Represents a version of the model.
  * autoScaling [GoogleCloudMlV1__AutoScaling](#googlecloudmlv1__autoscaling)
  * createTime `string`: Output only. The time the version was created.
  * deploymentUri `string`: Required. The Google Cloud Storage location of the trained model used to
  * description `string`: Optional. The description specified for the version when it was created.
  * errorMessage `string`: Output only. The details of a failure or a cancellation.
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * isDefault `boolean`: Output only. If true, this version will be used to handle prediction
  * labels `object`: Optional. One or more labels that you can add, to organize your model
  * lastUseTime `string`: Output only. The time the version was last used for prediction.
  * manualScaling [GoogleCloudMlV1__ManualScaling](#googlecloudmlv1__manualscaling)
  * name `string`: Required.The name specified for the version when it was created.
  * runtimeVersion `string`: Optional. The Google Cloud ML runtime version to use for this deployment.
  * state `string` (values: UNKNOWN, READY, CREATING, FAILED, DELETING): Output only. The state of a version.

### GoogleIamV1__AuditConfig
* GoogleIamV1__AuditConfig `object`: Specifies the audit configuration for a service.
  * auditLogConfigs `array`: The configuration for logging of each type of permission.
    * items [GoogleIamV1__AuditLogConfig](#googleiamv1__auditlogconfig)
  * exemptedMembers `array`
    * items `string`
  * service `string`: Specifies a service that will be enabled for audit logging.

### GoogleIamV1__AuditLogConfig
* GoogleIamV1__AuditLogConfig `object`: Provides the configuration for logging a type of permissions.
  * exemptedMembers `array`: Specifies the identities that do not cause logging for this type of
    * items `string`
  * logType `string` (values: LOG_TYPE_UNSPECIFIED, ADMIN_READ, DATA_WRITE, DATA_READ): The log type that this config enables.

### GoogleIamV1__Binding
* GoogleIamV1__Binding `object`: Associates `members` with a `role`.
  * condition [GoogleType__Expr](#googletype__expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource.
    * items `string`
  * role `string`: Role that is assigned to `members`.

### GoogleIamV1__Policy
* GoogleIamV1__Policy `object`: Defines an Identity and Access Management (IAM) policy. It is used to
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [GoogleIamV1__AuditConfig](#googleiamv1__auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`.
    * items [GoogleIamV1__Binding](#googleiamv1__binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * iamOwned `boolean`
  * version `integer`: Version of the `Policy`. The default version is 0.

### GoogleIamV1__SetIamPolicyRequest
* GoogleIamV1__SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [GoogleIamV1__Policy](#googleiamv1__policy)
  * updateMask `string`: OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only

### GoogleIamV1__TestIamPermissionsRequest
* GoogleIamV1__TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with
    * items `string`

### GoogleIamV1__TestIamPermissionsResponse
* GoogleIamV1__TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is
    * items `string`

### GoogleLongrunning__ListOperationsResponse
* GoogleLongrunning__ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [GoogleLongrunning__Operation](#googlelongrunning__operation)

### GoogleLongrunning__Operation
* GoogleLongrunning__Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [GoogleRpc__Status](#googlerpc__status)
  * metadata `object`: Service-specific metadata associated with the operation.  It typically
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: The normal response of the operation in case of success.  If the original

### GoogleProtobuf__Empty
* GoogleProtobuf__Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### GoogleRpc__Status
* GoogleRpc__Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### GoogleType__Expr
* GoogleType__Expr `object`: Represents an expression text. Example:
  * description `string`: An optional description of the expression. This is a longer text which
  * expression `string`: Textual representation of an expression in
  * location `string`: An optional string indicating the location of the expression for error
  * title `string`: An optional title for the expression, i.e. a short string describing


