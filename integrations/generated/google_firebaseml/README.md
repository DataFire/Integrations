# @datafire/google_firebaseml

Client library for Firebase ML API

## Installation and Usage
```bash
npm install --save @datafire/google_firebaseml
```
```js
let google_firebaseml = require('@datafire/google_firebaseml').create({
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

Access custom machine learning models hosted via Firebase ML.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_firebaseml.oauthCallback({
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
google_firebaseml.oauthRefresh(null, context)
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

### firebaseml.projects.models.delete
Deletes a model


```js
google_firebaseml.firebaseml.projects.models.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the model to delete. The name must have the form `projects/{project_id}/models/{model_id}`
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

### firebaseml.projects.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.


```js
google_firebaseml.firebaseml.projects.operations.get({
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
* output [Operation](#operation)

### firebaseml.projects.models.patch
Updates a model. The longrunning operation will eventually return a Model.


```js
google_firebaseml.firebaseml.projects.models.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model.
  * updateMask `string`: The update mask
  * body [Model](#model)
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

### firebaseml.projects.models.list
Lists the models


```js
google_firebaseml.firebaseml.projects.models.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the parent to list models for. The parent must have the form `projects/{project_id}'
  * filter `string`: A filter for the list e.g. 'tags: abc' to list models which are tagged with "abc"
  * pageSize `integer`: The maximum number of items to return
  * pageToken `string`: The next_page_token value returned from a previous List request, if any.
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
* output [ListModelsResponse](#listmodelsresponse)

### firebaseml.projects.models.create
Creates a model in Firebase ML. The longrunning operation will eventually return a Model


```js
google_firebaseml.firebaseml.projects.models.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent project resource where the model is to be created. The parent must have the form `projects/{project_id}`
  * body [Model](#model)
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



## Definitions

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### ListModelsResponse
* ListModelsResponse `object`: The response for list models
  * models `array`: The list of models
    * items [Model](#model)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### Model
* Model `object`: An ML model hosted in Firebase ML
  * tags `array`: User defined tags which can be used to group/filter models during listing
    * items `string`
  * activeOperations `array`: Output only. Lists operation ids associated with this model whose status is NOT done.
    * items [Operation](#operation)
  * createTime `string`: Output only. Timestamp when this model was created in Firebase ML.
  * displayName `string`: Required. The name of the model to create. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_) and ASCII digits 0-9. It must start with a letter.
  * etag `string`: Output only. See RFC7232 https://tools.ietf.org/html/rfc7232#section-2.3
  * modelHash `string`: Output only. The model_hash will change if a new file is available for download.
  * name `string`: The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model.
  * state [ModelState](#modelstate)
  * tfliteModel [TfLiteModel](#tflitemodel)
  * updateTime `string`: Output only. Timestamp when this model was updated in Firebase ML.

### ModelOperationMetadata
* ModelOperationMetadata `object`: This is returned in the longrunning operations for create/update.
  * basicOperationStatus `string` (values: BASIC_OPERATION_STATUS_UNSPECIFIED, BASIC_OPERATION_STATUS_UPLOADING, BASIC_OPERATION_STATUS_VERIFYING)
  * name `string`: The name of the model we are creating/updating The name must have the form `projects/{project_id}/models/{model_id}`

### ModelState
* ModelState `object`: State common to all model types. Includes publishing and validation information.
  * published `boolean`: Indicates if this model has been published.
  * validationError [Status](#status)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### TfLiteModel
* TfLiteModel `object`: Information that is specific to TfLite models.
  * automlModel `string`: The AutoML model id referencing a model you created with the AutoML API. The name should have format 'projects//locations//models/' (This is the model resource name returned from the AutoML API)
  * gcsTfliteUri `string`: The TfLite file containing the model. (Stored in Google Cloud). The gcs_tflite_uri should have form: gs://some-bucket/some-model.tflite Note: If you update the file in the original location, it is necessary to call UpdateModel for ML to pick up and validate the updated file.
  * sizeBytes `string`: Output only. The size of the TFLite model


