# @datafire/google_ml

Client library for Google Cloud Machine Learning Engine

## Installation and Usage
```bash
npm install --save datafire @datafire/google_ml
```

```js
let datafire = require('datafire');
let google_ml = require('@datafire/google_ml').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_ml: account,
  }
})

google_ml.projects.models.versions.delete({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_ml.oauthRefresh(null, context)
```


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

#### Parameters
* name (string) **required** - Required. The name of the version. You can get the names of all the
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

### projects.jobs.get
Describes a job.


```js
google_ml.projects.jobs.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Required. The name of the job to get the description of.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

### projects.operations.list
Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding below allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`.


```js
google_ml.projects.operations.list({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the operation collection.
* filter (string) - The standard list filter.
* pageToken (string) - The standard list page token.
* pageSize (integer) - The standard list page size.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

### projects.jobs.cancel
Cancels a running job.


```js
google_ml.projects.jobs.cancel({
  "name": ""
}, context)
```

#### Parameters
* body (object) - Request message for the CancelJob method.
* name (string) **required** - Required. The name of the job to cancel.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* name (string) **required** - Required. The project name.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

### projects.predict
Performs prediction on the data in the request.

**** REMOVE FROM GENERATED DOCUMENTATION


```js
google_ml.projects.predict({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Required. The resource name of a model or a version.
* body (object) - Request for predictions to be issued against a trained model.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* body (object) - Request message for the SetDefaultVersion request.
* name (string) **required** - Required. The name of the version to make the default for the model. You
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

### projects.jobs.list
Lists the jobs in the project.


```js
google_ml.projects.jobs.list({
  "parent": ""
}, context)
```

#### Parameters
* parent (string) **required** - Required. The name of the project for which to list jobs.
* filter (string) - Optional. Specifies the subset of jobs to retrieve.
* pageToken (string) - Optional. A page token to request the next page of results.
* pageSize (integer) - Optional. The number of jobs to retrieve per "page" of results. If there
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

### projects.jobs.create
Creates a training or a batch prediction job.


```js
google_ml.projects.jobs.create({
  "parent": ""
}, context)
```

#### Parameters
* parent (string) **required** - Required. The project name.
* body (object) - Represents a training or prediction job.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

### projects.models.list
Lists the models in a project.

Each project can contain multiple models, and each model can have multiple
versions.


```js
google_ml.projects.models.list({
  "parent": ""
}, context)
```

#### Parameters
* parent (string) **required** - Required. The name of the project whose models are to be listed.
* pageToken (string) - Optional. A page token to request the next page of results.
* pageSize (integer) - Optional. The number of models to retrieve per "page" of results. If there
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* parent (string) **required** - Required. The project name.
* body (object) - Represents a machine learning solution.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* parent (string) **required** - Required. The name of the model for which to list the version.
* pageToken (string) - Optional. A page token to request the next page of results.
* pageSize (integer) - Optional. The number of versions to retrieve per "page" of results. If
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

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

#### Parameters
* parent (string) **required** - Required. The name of the model.
* body (object) - Represents a version of the model.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.

