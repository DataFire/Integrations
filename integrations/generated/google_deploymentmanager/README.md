# @datafire/google_deploymentmanager

Client library for Cloud Deployment Manager V2 API

## Installation and Usage
```bash
npm install --save @datafire/google_deploymentmanager
```
```js
let google_deploymentmanager = require('@datafire/google_deploymentmanager').create({
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

The Google Cloud Deployment Manager v2 API provides services for configuring, deploying, and viewing Google Cloud services and APIs via templates which specify deployments of Cloud resources.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_deploymentmanager.oauthCallback({
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
google_deploymentmanager.oauthRefresh(null, context)
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

### deploymentmanager.compositeTypes.list
Lists all composite types for Deployment Manager.


```js
google_deploymentmanager.deploymentmanager.compositeTypes.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * filter `string`: A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either `=`, `!=`, `>`, or `<`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ```
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
  * pageToken `string`: Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
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
* output [CompositeTypesListResponse](#compositetypeslistresponse)

### deploymentmanager.compositeTypes.insert
Creates a composite type.


```js
google_deploymentmanager.deploymentmanager.compositeTypes.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * body [CompositeType](#compositetype)
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

### deploymentmanager.compositeTypes.delete
Deletes a composite type.


```js
google_deploymentmanager.deploymentmanager.compositeTypes.delete({
  "project": "",
  "compositeType": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * compositeType **required** `string`: The name of the type for this request.
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

### deploymentmanager.compositeTypes.get
Gets information about a specific composite type.


```js
google_deploymentmanager.deploymentmanager.compositeTypes.get({
  "project": "",
  "compositeType": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * compositeType **required** `string`: The name of the composite type for this request.
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
* output [CompositeType](#compositetype)

### deploymentmanager.compositeTypes.patch
Patches a composite type.


```js
google_deploymentmanager.deploymentmanager.compositeTypes.patch({
  "project": "",
  "compositeType": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * compositeType **required** `string`: The name of the composite type for this request.
  * body [CompositeType](#compositetype)
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

### deploymentmanager.compositeTypes.update
Updates a composite type.


```js
google_deploymentmanager.deploymentmanager.compositeTypes.update({
  "project": "",
  "compositeType": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * compositeType **required** `string`: The name of the composite type for this request.
  * body [CompositeType](#compositetype)
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

### deploymentmanager.deployments.list
Lists all deployments for a given project.


```js
google_deploymentmanager.deploymentmanager.deployments.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * filter `string`: A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either `=`, `!=`, `>`, or `<`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ```
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
  * pageToken `string`: Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
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
* output [DeploymentsListResponse](#deploymentslistresponse)

### deploymentmanager.deployments.insert
Creates a deployment and all of the resources described by the deployment manifest.


```js
google_deploymentmanager.deploymentmanager.deployments.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * createPolicy `string` (values: CREATE_OR_ACQUIRE, ACQUIRE, CREATE): Sets the policy to use for creating new resources.
  * preview `boolean`: If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the `update()` method or you can use the `cancelPreview()` method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
  * body [Deployment](#deployment)
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

### deploymentmanager.deployments.delete
Deletes a deployment and all of the resources in the deployment.


```js
google_deploymentmanager.deploymentmanager.deployments.delete({
  "project": "",
  "deployment": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * deployment **required** `string`: The name of the deployment for this request.
  * deletePolicy `string` (values: DELETE, ABANDON): Sets the policy to use for deleting resources.
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

### deploymentmanager.deployments.get
Gets information about a specific deployment.


```js
google_deploymentmanager.deploymentmanager.deployments.get({
  "project": "",
  "deployment": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * deployment **required** `string`: The name of the deployment for this request.
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
* output [Deployment](#deployment)

### deploymentmanager.deployments.patch
Patches a deployment and all of the resources described by the deployment manifest.


```js
google_deploymentmanager.deploymentmanager.deployments.patch({
  "project": "",
  "deployment": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * deployment **required** `string`: The name of the deployment for this request.
  * createPolicy `string` (values: CREATE_OR_ACQUIRE, ACQUIRE, CREATE): Sets the policy to use for creating new resources.
  * deletePolicy `string` (values: DELETE, ABANDON): Sets the policy to use for deleting resources.
  * preview `boolean`: If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a `target.config` with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the `update()` or you can `cancelPreview()` to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
  * body [Deployment](#deployment)
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

### deploymentmanager.deployments.update
Updates a deployment and all of the resources described by the deployment manifest.


```js
google_deploymentmanager.deploymentmanager.deployments.update({
  "project": "",
  "deployment": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * deployment **required** `string`: The name of the deployment for this request.
  * createPolicy `string` (values: CREATE_OR_ACQUIRE, ACQUIRE, CREATE): Sets the policy to use for creating new resources.
  * deletePolicy `string` (values: DELETE, ABANDON): Sets the policy to use for deleting resources.
  * preview `boolean`: If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a `target.config` with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the `update()` or you can `cancelPreview()` to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
  * body [Deployment](#deployment)
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

### deploymentmanager.deployments.cancelPreview
Cancels and removes the preview currently associated with the deployment.


```js
google_deploymentmanager.deploymentmanager.deployments.cancelPreview({
  "project": "",
  "deployment": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * deployment **required** `string`: The name of the deployment for this request.
  * body [DeploymentsCancelPreviewRequest](#deploymentscancelpreviewrequest)
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

### deploymentmanager.manifests.list
Lists all manifests for a given deployment.


```js
google_deploymentmanager.deploymentmanager.manifests.list({
  "project": "",
  "deployment": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * deployment **required** `string`: The name of the deployment for this request.
  * filter `string`: A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either `=`, `!=`, `>`, or `<`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ```
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
  * pageToken `string`: Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
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
* output [ManifestsListResponse](#manifestslistresponse)

### deploymentmanager.manifests.get
Gets information about a specific manifest.


```js
google_deploymentmanager.deploymentmanager.manifests.get({
  "project": "",
  "deployment": "",
  "manifest": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * deployment **required** `string`: The name of the deployment for this request.
  * manifest **required** `string`: The name of the manifest for this request.
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
* output [Manifest](#manifest)

### deploymentmanager.resources.list
Lists all resources in a given deployment.


```js
google_deploymentmanager.deploymentmanager.resources.list({
  "project": "",
  "deployment": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * deployment **required** `string`: The name of the deployment for this request.
  * filter `string`: A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either `=`, `!=`, `>`, or `<`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ```
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
  * pageToken `string`: Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
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
* output [ResourcesListResponse](#resourceslistresponse)

### deploymentmanager.resources.get
Gets information about a single resource.


```js
google_deploymentmanager.deploymentmanager.resources.get({
  "project": "",
  "deployment": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * deployment **required** `string`: The name of the deployment for this request.
  * resource **required** `string`: The name of the resource for this request.
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
* output [Resource](#resource)

### deploymentmanager.deployments.stop
Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.


```js
google_deploymentmanager.deploymentmanager.deployments.stop({
  "project": "",
  "deployment": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * deployment **required** `string`: The name of the deployment for this request.
  * body [DeploymentsStopRequest](#deploymentsstoprequest)
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

### deploymentmanager.deployments.getIamPolicy
Gets the access control policy for a resource. May be empty if no such policy or resource exists.


```js
google_deploymentmanager.deploymentmanager.deployments.getIamPolicy({
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * resource **required** `string`: Name or id of the resource for this request.
  * optionsRequestedPolicyVersion `integer`: Requested IAM Policy version.
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

### deploymentmanager.deployments.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy.


```js
google_deploymentmanager.deploymentmanager.deployments.setIamPolicy({
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * resource **required** `string`: Name or id of the resource for this request.
  * body [GlobalSetPolicyRequest](#globalsetpolicyrequest)
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

### deploymentmanager.deployments.testIamPermissions
Returns permissions that a caller has on the specified resource.


```js
google_deploymentmanager.deploymentmanager.deployments.testIamPermissions({
  "project": "",
  "resource": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Project ID for this request.
  * resource **required** `string`: Name or id of the resource for this request.
  * body [TestPermissionsRequest](#testpermissionsrequest)
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
* output [TestPermissionsResponse](#testpermissionsresponse)

### deploymentmanager.operations.list
Lists all operations for a project.


```js
google_deploymentmanager.deploymentmanager.operations.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * filter `string`: A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either `=`, `!=`, `>`, or `<`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ```
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
  * pageToken `string`: Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
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
* output [OperationsListResponse](#operationslistresponse)

### deploymentmanager.operations.get
Gets information about a specific operation.


```js
google_deploymentmanager.deploymentmanager.operations.get({
  "project": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * operation **required** `string`: The name of the operation for this request.
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

### deploymentmanager.typeProviders.list
Lists all resource type providers for Deployment Manager.


```js
google_deploymentmanager.deploymentmanager.typeProviders.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * filter `string`: A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either `=`, `!=`, `>`, or `<`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ```
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
  * pageToken `string`: Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
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
* output [TypeProvidersListResponse](#typeproviderslistresponse)

### deploymentmanager.typeProviders.insert
Creates a type provider.


```js
google_deploymentmanager.deploymentmanager.typeProviders.insert({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * body [TypeProvider](#typeprovider)
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

### deploymentmanager.typeProviders.delete
Deletes a type provider.


```js
google_deploymentmanager.deploymentmanager.typeProviders.delete({
  "project": "",
  "typeProvider": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * typeProvider **required** `string`: The name of the type provider for this request.
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

### deploymentmanager.typeProviders.get
Gets information about a specific type provider.


```js
google_deploymentmanager.deploymentmanager.typeProviders.get({
  "project": "",
  "typeProvider": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * typeProvider **required** `string`: The name of the type provider for this request.
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
* output [TypeProvider](#typeprovider)

### deploymentmanager.typeProviders.patch
Patches a type provider.


```js
google_deploymentmanager.deploymentmanager.typeProviders.patch({
  "project": "",
  "typeProvider": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * typeProvider **required** `string`: The name of the type provider for this request.
  * body [TypeProvider](#typeprovider)
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

### deploymentmanager.typeProviders.update
Updates a type provider.


```js
google_deploymentmanager.deploymentmanager.typeProviders.update({
  "project": "",
  "typeProvider": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * typeProvider **required** `string`: The name of the type provider for this request.
  * body [TypeProvider](#typeprovider)
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

### deploymentmanager.typeProviders.listTypes
Lists all the type info for a TypeProvider.


```js
google_deploymentmanager.deploymentmanager.typeProviders.listTypes({
  "project": "",
  "typeProvider": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * typeProvider **required** `string`: The name of the type provider for this request.
  * filter `string`: A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either `=`, `!=`, `>`, or `<`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ```
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
  * pageToken `string`: Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
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
* output [TypeProvidersListTypesResponse](#typeproviderslisttypesresponse)

### deploymentmanager.typeProviders.getType
Gets a type info for a type provided by a TypeProvider.


```js
google_deploymentmanager.deploymentmanager.typeProviders.getType({
  "project": "",
  "typeProvider": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * typeProvider **required** `string`: The name of the type provider for this request.
  * type **required** `string`: The name of the type provider type for this request.
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
* output [TypeInfo](#typeinfo)

### deploymentmanager.types.list
Lists all resource types for Deployment Manager.


```js
google_deploymentmanager.deploymentmanager.types.list({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The project ID for this request.
  * filter `string`: A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either `=`, `!=`, `>`, or `<`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ```
  * maxResults `integer`: The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
  * orderBy `string`: Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
  * pageToken `string`: Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
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
* output [TypesListResponse](#typeslistresponse)



## Definitions

### AsyncOptions
* AsyncOptions `object`: Async options that determine when a resource should finish.
  * methodMatch `string`: Method regex where this policy will apply.
  * pollingOptions [PollingOptions](#pollingoptions)

### AuditConfig
* AuditConfig `object`: Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
  * auditLogConfigs `array`: The configuration for logging of each type of permission.
    * items [AuditLogConfig](#auditlogconfig)
  * service `string`: Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.

### AuditLogConfig
* AuditLogConfig `object`: Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
  * exemptedMembers `array`: Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
    * items `string`
  * logType `string` (values: LOG_TYPE_UNSPECIFIED, ADMIN_READ, DATA_WRITE, DATA_READ): The log type that this config enables.

### BaseType
* BaseType `object`: BaseType that describes a service-backed Type.
  * collectionOverrides `array`: Allows resource handling overrides for specific collections
    * items [CollectionOverride](#collectionoverride)
  * credential [Credential](#credential)
  * descriptorUrl `string`: Descriptor Url for the this type.
  * options [Options](#options)

### BasicAuth
* BasicAuth `object`: Basic Auth used as a credential.
  * password `string`
  * user `string`

### Binding
* Binding `object`: Associates `members` with a `role`.
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### CollectionOverride
* CollectionOverride `object`: CollectionOverride allows resource handling overrides for specific resources within a BaseType
  * collection `string`: The collection that identifies this resource within its service.
  * options [Options](#options)

### CompositeType
* CompositeType `object`: Holds the composite type.
  * description `string`: An optional textual description of the resource; provided by the client when the resource is created.
  * id `string`
  * insertTime `string`: Output only. Creation timestamp in RFC3339 text format.
  * labels `array`: Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
    * items [CompositeTypeLabelEntry](#compositetypelabelentry)
  * name `string`: Name of the composite type, must follow the expression: `[a-z]([-a-z0-9_.]{0,61}[a-z0-9])?`.
  * operation [Operation](#operation)
  * selfLink `string`: Output only. Server defined URL for the resource.
  * status `string` (values: UNKNOWN_STATUS, DEPRECATED, EXPERIMENTAL, SUPPORTED)
  * templateContents [TemplateContents](#templatecontents)

### CompositeTypeLabelEntry
* CompositeTypeLabelEntry `object`: Label object for CompositeTypes
  * key `string`: Key of the label
  * value `string`: Value of the label

### CompositeTypesListResponse
* CompositeTypesListResponse `object`: A response that returns all Composite Types supported by Deployment Manager
  * compositeTypes `array`: Output only. A list of resource composite types supported by Deployment Manager.
    * items [CompositeType](#compositetype)
  * nextPageToken `string`: A token used to continue a truncated list request.

### ConfigFile
* ConfigFile `object`
  * content `string`: The contents of the file.

### Credential
* Credential `object`: The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.
  * basicAuth [BasicAuth](#basicauth)
  * serviceAccount [ServiceAccount](#serviceaccount)
  * useProjectDefault `boolean`: Specify to use the project default credential, only supported by Deployment.

### Deployment
* Deployment `object`
  * description `string`: An optional user-provided description of the deployment.
  * fingerprint `string`: Provides a fingerprint to use in requests to modify a deployment, such as `update()`, `stop()`, and `cancelPreview()` requests. A fingerprint is a randomly generated value that must be provided with `update()`, `stop()`, and `cancelPreview()` requests to perform optimistic locking. This ensures optimistic concurrency so that only one request happens at a time. The fingerprint is initially generated by Deployment Manager and changes after every request to modify data. To get the latest fingerprint value, perform a `get()` request to a deployment.
  * id `string`
  * insertTime `string`: Output only. Creation timestamp in RFC3339 text format.
  * labels `array`: Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
    * items [DeploymentLabelEntry](#deploymentlabelentry)
  * manifest `string`: Output only. URL of the manifest representing the last manifest that was successfully deployed. If no manifest has been successfully deployed, this field will be absent.
  * name `string`: Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * operation [Operation](#operation)
  * selfLink `string`: Output only. Server defined URL for the resource.
  * target [TargetConfiguration](#targetconfiguration)
  * update [DeploymentUpdate](#deploymentupdate)
  * updateTime `string`: Output only. Update timestamp in RFC3339 text format.

### DeploymentLabelEntry
* DeploymentLabelEntry `object`: Label object for Deployments
  * key `string`: Key of the label
  * value `string`: Value of the label

### DeploymentUpdate
* DeploymentUpdate `object`
  * description `string`: Output only. An optional user-provided description of the deployment after the current update has been applied.
  * labels `array`: Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
    * items [DeploymentUpdateLabelEntry](#deploymentupdatelabelentry)
  * manifest `string`: Output only. URL of the manifest representing the update configuration of this deployment.

### DeploymentUpdateLabelEntry
* DeploymentUpdateLabelEntry `object`: Label object for DeploymentUpdate
  * key `string`: Key of the label
  * value `string`: Value of the label

### DeploymentsCancelPreviewRequest
* DeploymentsCancelPreviewRequest `object`
  * fingerprint `string`: Specifies a fingerprint for `cancelPreview()` requests. A fingerprint is a randomly generated value that must be provided in `cancelPreview()` requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to cancel a preview, this would prevent one of the requests). The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a `get()` request on the deployment.

### DeploymentsListResponse
* DeploymentsListResponse `object`: A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated.
  * deployments `array`: Output only. The deployments contained in this response.
    * items [Deployment](#deployment)
  * nextPageToken `string`: Output only. A token used to continue a truncated list request.

### DeploymentsStopRequest
* DeploymentsStopRequest `object`
  * fingerprint `string`: Specifies a fingerprint for `stop()` requests. A fingerprint is a randomly generated value that must be provided in `stop()` requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to stop an ongoing update request, this would prevent a collision). The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a `get()` request on the deployment.

### Diagnostic
* Diagnostic `object`
  * field `string`: JsonPath expression on the resource that if non empty, indicates that this field needs to be extracted as a diagnostic.
  * level `string` (values: UNKNOWN, INFORMATION, WARNING, ERROR): Level to record this diagnostic.

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### GlobalSetPolicyRequest
* GlobalSetPolicyRequest `object`
  * bindings `array`: Flatten Policy to create a backward compatible wire-format. Deprecated. Use 'policy' to specify bindings.
    * items [Binding](#binding)
  * etag `string`: Flatten Policy to create a backward compatible wire-format. Deprecated. Use 'policy' to specify the etag.
  * policy [Policy](#policy)

### ImportFile
* ImportFile `object`
  * content `string`: The contents of the file.
  * name `string`: The name of the file.

### InputMapping
* InputMapping `object`: InputMapping creates a 'virtual' property that will be injected into the properties before sending the request to the underlying API.
  * fieldName `string`: The name of the field that is going to be injected.
  * location `string` (values: UNKNOWN, PATH, QUERY, BODY, HEADER): The location where this mapping applies.
  * methodMatch `string`: Regex to evaluate on method to decide if input applies.
  * value `string`: A jsonPath expression to select an element.

### Manifest
* Manifest `object`
  * config [ConfigFile](#configfile)
  * expandedConfig `string`: Output only. The fully-expanded configuration file, including any templates and references.
  * id `string`
  * imports `array`: Output only. The imported files for this manifest.
    * items [ImportFile](#importfile)
  * insertTime `string`: Output only. Creation timestamp in RFC3339 text format.
  * layout `string`: Output only. The YAML layout for this manifest.
  * name `string`: Output only. The name of the manifest.
  * selfLink `string`: Output only. Self link for the manifest.

### ManifestsListResponse
* ManifestsListResponse `object`: A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.
  * manifests `array`: Output only. Manifests contained in this list response.
    * items [Manifest](#manifest)
  * nextPageToken `string`: Output only. A token used to continue a truncated list request.

### Operation
* Operation `object`: Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zonalOperations` resource. For more information, read Global, Regional, and Zonal Resources.
  * clientOperationId `string`: [Output Only] The value of `requestId` if you provided it in the request. Not present otherwise.
  * creationTimestamp `string`: [Deprecated] This field is deprecated.
  * description `string`: [Output Only] A textual description of the operation, which is set when the operation is created.
  * endTime `string`: [Output Only] The time that this operation was completed. This value is in RFC3339 text format.
  * error `object`: [Output Only] If errors are generated during processing of the operation, this field will be populated.
    * errors `array`: [Output Only] The array of errors encountered while processing this operation.
      * items `object`
        * code `string`: [Output Only] The error type identifier for this error.
        * location `string`: [Output Only] Indicates the field in the request that caused the error. This property is optional.
        * message `string`: [Output Only] An optional, human-readable error message.
  * httpErrorMessage `string`: [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as `NOT FOUND`.
  * httpErrorStatusCode `integer`: [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a `404` means the resource was not found.
  * id `string`: [Output Only] The unique identifier for the operation. This identifier is defined by the server.
  * insertTime `string`: [Output Only] The time that this operation was requested. This value is in RFC3339 text format.
  * kind `string`: [Output Only] Type of the resource. Always `compute#operation` for Operation resources.
  * name `string`: [Output Only] Name of the operation.
  * operationType `string`: [Output Only] The type of operation, such as `insert`, `update`, or `delete`, and so on.
  * progress `integer`: [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.
  * region `string`: [Output Only] The URL of the region where the operation resides. Only applicable when performing regional operations.
  * selfLink `string`: [Output Only] Server-defined URL for the resource.
  * startTime `string`: [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.
  * status `string` (values: PENDING, RUNNING, DONE): [Output Only] The status of the operation, which can be one of the following: `PENDING`, `RUNNING`, or `DONE`.
  * statusMessage `string`: [Output Only] An optional textual description of the current status of the operation.
  * targetId `string`: [Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
  * targetLink `string`: [Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from.
  * user `string`: [Output Only] User who requested the operation, for example: `user@example.com`.
  * warnings `array`: [Output Only] If warning messages are generated during processing of the operation, this field will be populated.
    * items `object`
      * code `string` (values: DEPRECATED_RESOURCE_USED, NO_RESULTS_ON_PAGE, UNREACHABLE, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_NOT_RUNNING, INJECTED_KERNELS_DEPRECATED, REQUIRED_TOS_AGREEMENT, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, RESOURCE_NOT_DELETED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, NOT_CRITICAL_ERROR, CLEANUP_FAILED, FIELD_VALUE_OVERRIDEN, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, MISSING_TYPE_DEPENDENCY, EXTERNAL_API_WARNING, SCHEMA_VALIDATION_IGNORED, UNDECLARED_PROPERTIES, EXPERIMENTAL_TYPE_USED, DEPRECATED_TYPE_USED, PARTIAL_SUCCESS, LARGE_DEPLOYMENT_WARNING): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
      * data `array`: [Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" } 
        * items `object`
          * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
          * value `string`: [Output Only] A warning data value corresponding to the key.
      * message `string`: [Output Only] A human-readable description of the warning code.
  * zone `string`: [Output Only] The URL of the zone where the operation resides. Only applicable when performing per-zone operations.

### OperationsListResponse
* OperationsListResponse `object`: A response containing a partial list of operations and a page token used to build the next request if the request has been truncated.
  * nextPageToken `string`: Output only. A token used to continue a truncated list request.
  * operations `array`: Output only. Operations contained in this list response.
    * items [Operation](#operation)

### Options
* Options `object`: Options allows customized resource handling by Deployment Manager.
  * asyncOptions `array`: Options regarding how to thread async requests.
    * items [AsyncOptions](#asyncoptions)
  * inputMappings `array`: The mappings that apply for requests.
    * items [InputMapping](#inputmapping)
  * validationOptions [ValidationOptions](#validationoptions)
  * virtualProperties `string`: Additional properties block described as a jsonSchema, these properties will never be part of the json payload, but they can be consumed by InputMappings, this must be a valid json schema draft-04. The properties specified here will be decouple in a different section. This schema will be merged to the schema validation, and properties here will be extracted From the payload and consumed explicitly by InputMappings. ex: field1: type: string field2: type: number

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [AuditConfig](#auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### PollingOptions
* PollingOptions `object`
  * diagnostics `array`: An array of diagnostics to be collected by Deployment Manager, these diagnostics will be displayed to the user.
    * items [Diagnostic](#diagnostic)
  * failCondition `string`: JsonPath expression that determines if the request failed.
  * finishCondition `string`: JsonPath expression that determines if the request is completed.
  * pollingLink `string`: JsonPath expression that evaluates to string, it indicates where to poll.
  * targetLink `string`: JsonPath expression, after polling is completed, indicates where to fetch the resource.

### Resource
* Resource `object`
  * accessControl [ResourceAccessControl](#resourceaccesscontrol)
  * finalProperties `string`: Output only. The evaluated properties of the resource with references expanded. Returned as serialized YAML.
  * id `string`
  * insertTime `string`: Output only. Creation timestamp in RFC3339 text format.
  * manifest `string`: Output only. URL of the manifest representing the current configuration of this resource.
  * name `string`: Output only. The name of the resource as it appears in the YAML config.
  * properties `string`: Output only. The current properties of the resource before any references have been filled in. Returned as serialized YAML.
  * type `string`: Output only. The type of the resource, for example `compute.v1.instance`, or `cloudfunctions.v1beta1.function`.
  * update [ResourceUpdate](#resourceupdate)
  * updateTime `string`: Output only. Update timestamp in RFC3339 text format.
  * url `string`: Output only. The URL of the actual resource.
  * warnings `array`: Output only. If warning messages are generated during processing of this resource, this field will be populated.
    * items `object`
      * code `string` (values: DEPRECATED_RESOURCE_USED, NO_RESULTS_ON_PAGE, UNREACHABLE, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_NOT_RUNNING, INJECTED_KERNELS_DEPRECATED, REQUIRED_TOS_AGREEMENT, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, RESOURCE_NOT_DELETED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, NOT_CRITICAL_ERROR, CLEANUP_FAILED, FIELD_VALUE_OVERRIDEN, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, MISSING_TYPE_DEPENDENCY, EXTERNAL_API_WARNING, SCHEMA_VALIDATION_IGNORED, UNDECLARED_PROPERTIES, EXPERIMENTAL_TYPE_USED, DEPRECATED_TYPE_USED, PARTIAL_SUCCESS, LARGE_DEPLOYMENT_WARNING): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
      * data `array`: [Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" } 
        * items `object`
          * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
          * value `string`: [Output Only] A warning data value corresponding to the key.
      * message `string`: [Output Only] A human-readable description of the warning code.

### ResourceAccessControl
* ResourceAccessControl `object`: The access controls set on the resource.
  * gcpIamPolicy `string`: The GCP IAM Policy to set on the resource.

### ResourceUpdate
* ResourceUpdate `object`
  * accessControl [ResourceAccessControl](#resourceaccesscontrol)
  * error `object`: Output only. If errors are generated during update of the resource, this field will be populated.
    * errors `array`: [Output Only] The array of errors encountered while processing this operation.
      * items `object`
        * code `string`: [Output Only] The error type identifier for this error.
        * location `string`: [Output Only] Indicates the field in the request that caused the error. This property is optional.
        * message `string`: [Output Only] An optional, human-readable error message.
  * finalProperties `string`: Output only. The expanded properties of the resource with reference values expanded. Returned as serialized YAML.
  * intent `string` (values: CREATE_OR_ACQUIRE, DELETE, ACQUIRE, UPDATE, ABANDON, CREATE): Output only. The intent of the resource: `PREVIEW`, `UPDATE`, or `CANCEL`.
  * manifest `string`: Output only. URL of the manifest representing the update configuration of this resource.
  * properties `string`: Output only. The set of updated properties for this resource, before references are expanded. Returned as serialized YAML.
  * state `string` (values: PENDING, IN_PROGRESS, IN_PREVIEW, FAILED, ABORTED): Output only. The state of the resource.
  * warnings `array`: Output only. If warning messages are generated during processing of this resource, this field will be populated.
    * items `object`
      * code `string` (values: DEPRECATED_RESOURCE_USED, NO_RESULTS_ON_PAGE, UNREACHABLE, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_NOT_RUNNING, INJECTED_KERNELS_DEPRECATED, REQUIRED_TOS_AGREEMENT, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, RESOURCE_NOT_DELETED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, NOT_CRITICAL_ERROR, CLEANUP_FAILED, FIELD_VALUE_OVERRIDEN, RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING, MISSING_TYPE_DEPENDENCY, EXTERNAL_API_WARNING, SCHEMA_VALIDATION_IGNORED, UNDECLARED_PROPERTIES, EXPERIMENTAL_TYPE_USED, DEPRECATED_TYPE_USED, PARTIAL_SUCCESS, LARGE_DEPLOYMENT_WARNING): [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
      * data `array`: [Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" } 
        * items `object`
          * key `string`: [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
          * value `string`: [Output Only] A warning data value corresponding to the key.
      * message `string`: [Output Only] A human-readable description of the warning code.

### ResourcesListResponse
* ResourcesListResponse `object`: A response containing a partial list of resources and a page token used to build the next request if the request has been truncated.
  * nextPageToken `string`: A token used to continue a truncated list request.
  * resources `array`: Resources contained in this list response.
    * items [Resource](#resource)

### ServiceAccount
* ServiceAccount `object`: Service Account used as a credential.
  * email `string`: The IAM service account email address like test@myproject.iam.gserviceaccount.com

### TargetConfiguration
* TargetConfiguration `object`
  * config [ConfigFile](#configfile)
  * imports `array`: Specifies any files to import for this configuration. This can be used to import templates or other files. For example, you might import a text file in order to use the file in a template.
    * items [ImportFile](#importfile)

### TemplateContents
* TemplateContents `object`: Files that make up the template contents of a template type.
  * imports `array`: Import files referenced by the main template.
    * items [ImportFile](#importfile)
  * interpreter `string` (values: UNKNOWN_INTERPRETER, PYTHON, JINJA): Which interpreter (python or jinja) should be used during expansion.
  * mainTemplate `string`: The filename of the mainTemplate
  * schema `string`: The contents of the template schema.
  * template `string`: The contents of the main template file.

### TestPermissionsRequest
* TestPermissionsRequest `object`
  * permissions `array`: The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed.
    * items `string`

### TestPermissionsResponse
* TestPermissionsResponse `object`
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

### Type
* Type `object`: A resource type supported by Deployment Manager.
  * base [BaseType](#basetype)
  * description `string`: An optional textual description of the resource; provided by the client when the resource is created.
  * id `string`
  * insertTime `string`: Output only. Creation timestamp in RFC3339 text format.
  * labels `array`: Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
    * items [TypeLabelEntry](#typelabelentry)
  * name `string`: Name of the type.
  * operation [Operation](#operation)
  * selfLink `string`: Output only. Server defined URL for the resource.

### TypeInfo
* TypeInfo `object`: Type Information. Contains detailed information about a composite type, base type, or base type with specific collection.
  * description `string`: The description of the type.
  * documentationLink `string`: For swagger 2.0 externalDocs field will be used. For swagger 1.2 this field will be empty.
  * kind `string`: Output only. Type of the output. Always `deploymentManager#TypeInfo` for TypeInfo.
  * name `string`: The base type or composite type name.
  * schema [TypeInfoSchemaInfo](#typeinfoschemainfo)
  * selfLink `string`: Output only. Self link for the type provider.
  * title `string`: The title on the API descriptor URL provided.

### TypeInfoSchemaInfo
* TypeInfoSchemaInfo `object`
  * input `string`: The properties that this composite type or base type collection accept as input, represented as a json blob, format is: JSON Schema Draft V4
  * output `string`: The properties that this composite type or base type collection exposes as output, these properties can be used for references, represented as json blob, format is: JSON Schema Draft V4

### TypeLabelEntry
* TypeLabelEntry `object`: Label object for Types
  * key `string`: Key of the label
  * value `string`: Value of the label

### TypeProvider
* TypeProvider `object`: A type provider that describes a service-backed Type.
  * collectionOverrides `array`: Allows resource handling overrides for specific collections
    * items [CollectionOverride](#collectionoverride)
  * credential [Credential](#credential)
  * customCertificateAuthorityRoots `array`: List of up to 2 custom certificate authority roots to use for TLS authentication when making calls on behalf of this type provider. If set, TLS authentication will exclusively use these roots instead of relying on publicly trusted certificate authorities when validating TLS certificate authenticity. The certificates must be in base64-encoded PEM format. The maximum size of each certificate must not exceed 10KB.
    * items `string`
  * description `string`: An optional textual description of the resource; provided by the client when the resource is created.
  * descriptorUrl `string`: Descriptor Url for the this type provider.
  * id `string`: Output only. Unique identifier for the resource defined by the server.
  * insertTime `string`: Output only. Creation timestamp in RFC3339 text format.
  * labels `array`: Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`
    * items [TypeProviderLabelEntry](#typeproviderlabelentry)
  * name `string`: Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * operation [Operation](#operation)
  * options [Options](#options)
  * selfLink `string`: Output only. Self link for the type provider.

### TypeProviderLabelEntry
* TypeProviderLabelEntry `object`: Label object for TypeProviders
  * key `string`: Key of the label
  * value `string`: Value of the label

### TypeProvidersListResponse
* TypeProvidersListResponse `object`: A response that returns all Type Providers supported by Deployment Manager
  * nextPageToken `string`: A token used to continue a truncated list request.
  * typeProviders `array`: Output only. A list of resource type providers supported by Deployment Manager.
    * items [TypeProvider](#typeprovider)

### TypeProvidersListTypesResponse
* TypeProvidersListTypesResponse `object`
  * nextPageToken `string`: A token used to continue a truncated list request.
  * types `array`: Output only. A list of resource type info.
    * items [TypeInfo](#typeinfo)

### TypesListResponse
* TypesListResponse `object`: A response that returns all Types supported by Deployment Manager
  * nextPageToken `string`: A token used to continue a truncated list request.
  * types `array`: Output only. A list of resource types supported by Deployment Manager.
    * items [Type](#type)

### ValidationOptions
* ValidationOptions `object`: Options for how to validate and process properties on a resource.
  * schemaValidation `string` (values: UNKNOWN, IGNORE, IGNORE_WITH_WARNINGS, FAIL): Customize how deployment manager will validate the resource against schema errors.
  * undeclaredProperties `string` (values: UNKNOWN, INCLUDE, IGNORE, INCLUDE_WITH_WARNINGS, IGNORE_WITH_WARNINGS, FAIL): Specify what to do with extra properties when executing a request.


