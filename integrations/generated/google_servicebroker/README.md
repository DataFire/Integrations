# @datafire/google_servicebroker

Client library for Service Broker

## Installation and Usage
```bash
npm install --save @datafire/google_servicebroker
```
```js
let google_servicebroker = require('@datafire/google_servicebroker').create({
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

The Google Cloud Platform Service Broker API provides Google hosted
implementation of the Open Service Broker API
(https://www.openservicebrokerapi.org/).


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_servicebroker.oauthCallback({
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
google_servicebroker.oauthRefresh(null, context)
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

### servicebroker.projects.brokers.v2.service_instances.service_bindings.delete
Unbinds from a service instance.
For synchronous/asynchronous request details see CreateServiceInstance
method.
If binding does not exist HTTP 410 status will be returned.


```js
google_servicebroker.servicebroker.projects.brokers.v2.service_instances.service_bindings.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name must match
  * acceptsIncomplete `boolean`: See CreateServiceInstanceRequest for details.
  * planId `string`: The plan id of the service instance.
  * serviceId `string`: Additional query parameter hints.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GoogleCloudServicebrokerV1beta1__DeleteBindingResponse](#googlecloudservicebrokerv1beta1__deletebindingresponse)

### servicebroker.projects.brokers.v2.service_instances.service_bindings.get
GetBinding returns the binding information.


```js
google_servicebroker.servicebroker.projects.brokers.v2.service_instances.service_bindings.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name must match
  * planId `string`: Plan id.
  * serviceId `string`: Service id.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GoogleCloudServicebrokerV1beta1__GetBindingResponse](#googlecloudservicebrokerv1beta1__getbindingresponse)

### servicebroker.projects.brokers.v2.service_instances.patch
Updates an existing service instance.
See CreateServiceInstance for possible response codes.


```js
google_servicebroker.servicebroker.projects.brokers.v2.service_instances.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name must match
  * acceptsIncomplete `boolean`: See CreateServiceInstanceRequest for details.
  * body [GoogleCloudServicebrokerV1beta1__ServiceInstance](#googlecloudservicebrokerv1beta1__serviceinstance)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GoogleCloudServicebrokerV1beta1__UpdateServiceInstanceResponse](#googlecloudservicebrokerv1beta1__updateserviceinstanceresponse)

### servicebroker.projects.brokers.v2.service_instances.service_bindings.getLast_operation
Returns the state of the last operation for the binding.
Only last (or current) operation can be polled.


```js
google_servicebroker.servicebroker.projects.brokers.v2.service_instances.service_bindings.getLast_operation({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name must match
  * operation `string`: If `operation` was returned during mutation operation, this field must be
  * planId `string`: Plan id.
  * serviceId `string`: Service id.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GoogleCloudServicebrokerV1beta1__Operation](#googlecloudservicebrokerv1beta1__operation)

### servicebroker.projects.brokers.instances.bindings.list
Lists all the bindings in the instance.


```js
google_servicebroker.servicebroker.projects.brokers.instances.bindings.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent must match
  * pageSize `integer`: Specifies the number of results to return per page. If there are fewer
  * pageToken `string`: Specifies a page token to use. Set `pageToken` to a `nextPageToken`
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GoogleCloudServicebrokerV1beta1__ListBindingsResponse](#googlecloudservicebrokerv1beta1__listbindingsresponse)

### servicebroker.projects.brokers.list
ListBrokers lists brokers.


```js
google_servicebroker.servicebroker.projects.brokers.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent must match `projects/[PROJECT_ID]/brokers`.
  * pageSize `integer`: Specifies the number of results to return per page. If there are fewer
  * pageToken `string`: Specifies a page token to use. Set `pageToken` to a `nextPageToken`
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GoogleCloudServicebrokerV1beta1__ListBrokersResponse](#googlecloudservicebrokerv1beta1__listbrokersresponse)

### servicebroker.projects.brokers.create
CreateBroker creates a Broker.


```js
google_servicebroker.servicebroker.projects.brokers.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project in which to create broker.
  * body [GoogleCloudServicebrokerV1beta1__Broker](#googlecloudservicebrokerv1beta1__broker)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GoogleCloudServicebrokerV1beta1__Broker](#googlecloudservicebrokerv1beta1__broker)

### servicebroker.projects.brokers.instances.list
Lists all the instances in the brokers
This API is an extension and not part of the OSB spec.
Hence the path is a standard Google API URL.


```js
google_servicebroker.servicebroker.projects.brokers.instances.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
  * pageSize `integer`: Specifies the number of results to return per page. If there are fewer
  * pageToken `string`: Specifies a page token to use. Set `pageToken` to a `nextPageToken`
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GoogleCloudServicebrokerV1beta1__ListServiceInstancesResponse](#googlecloudservicebrokerv1beta1__listserviceinstancesresponse)

### servicebroker.projects.brokers.v2.service_instances.service_bindings.create
CreateBinding generates a service binding to an existing service instance.
See ProviServiceInstance for async operation details.


```js
google_servicebroker.servicebroker.projects.brokers.v2.service_instances.service_bindings.create({
  "parent": "",
  "binding_id": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The GCP container.
  * binding_id **required** `string`: The id of the binding. Must be unique within GCP project.
  * acceptsIncomplete `boolean`: See CreateServiceInstanceRequest for details.
  * body [GoogleCloudServicebrokerV1beta1__Binding](#googlecloudservicebrokerv1beta1__binding)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GoogleCloudServicebrokerV1beta1__CreateBindingResponse](#googlecloudservicebrokerv1beta1__createbindingresponse)

### servicebroker.projects.brokers.v2.catalog.list
Lists all the Services registered with this broker for consumption for
given service registry broker, which contains an set of services.
Note, that Service producer API is separate from Broker API.


```js
google_servicebroker.servicebroker.projects.brokers.v2.catalog.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
  * pageSize `integer`: Specifies the number of results to return per page. If there are fewer
  * pageToken `string`: Specifies a page token to use. Set `pageToken` to a `nextPageToken`
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GoogleCloudServicebrokerV1beta1__ListCatalogResponse](#googlecloudservicebrokerv1beta1__listcatalogresponse)

### servicebroker.projects.brokers.v2.service_instances.create
Provisions a service instance.
If `request.accepts_incomplete` is false and Broker cannot execute request
synchronously HTTP 422 error will be returned along with
FAILED_PRECONDITION status.
If `request.accepts_incomplete` is true and the Broker decides to execute
resource asynchronously then HTTP 202 response code will be returned and a
valid polling operation in the response will be included.
If Broker executes the request synchronously and it succeeds HTTP 201
response will be furnished.
If identical instance exists, then HTTP 200 response will be returned.
If an instance with identical ID but mismatching parameters exists, then
HTTP 409 status code will be returned.


```js
google_servicebroker.servicebroker.projects.brokers.v2.service_instances.create({
  "parent": "",
  "instance_id": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
  * instance_id **required** `string`: The id of the service instance. Must be unique within GCP project.
  * acceptsIncomplete `boolean`: Value indicating that API client supports asynchronous operations. If
  * body [GoogleCloudServicebrokerV1beta1__ServiceInstance](#googlecloudservicebrokerv1beta1__serviceinstance)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GoogleCloudServicebrokerV1beta1__CreateServiceInstanceResponse](#googlecloudservicebrokerv1beta1__createserviceinstanceresponse)

### servicebroker.getIamPolicy
Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.


```js
google_servicebroker.servicebroker.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested.
  * options.requestedPolicyVersion `integer`: Optional. The policy format version to be returned.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GoogleIamV1__Policy](#googleiamv1__policy)

### servicebroker.setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy.

Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED


```js
google_servicebroker.servicebroker.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified.
  * body [GoogleIamV1__SetIamPolicyRequest](#googleiamv1__setiampolicyrequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GoogleIamV1__Policy](#googleiamv1__policy)

### servicebroker.testIamPermissions
Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.


```js
google_servicebroker.servicebroker.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested.
  * body [GoogleIamV1__TestIamPermissionsRequest](#googleiamv1__testiampermissionsrequest)
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.

#### Output
* output [GoogleIamV1__TestIamPermissionsResponse](#googleiamv1__testiampermissionsresponse)



## Definitions

### GoogleCloudServicebrokerV1beta1__Binding
* GoogleCloudServicebrokerV1beta1__Binding `object`: Describes the binding.
  * parameters `object`: Configuration options for the service binding.
  * bind_resource `object`: A JSON object that contains data for platform resources associated with
  * binding_id `string`: The id of the binding. Must be unique within GCP project.
  * createTime `string`: Output only. Timestamp for when the binding was created.
  * deploymentName `string`: Output only. String containing the Deployment Manager deployment name that was created
  * plan_id `string`: The ID of the plan. See `Service` and `Plan` resources for details.
  * resourceName `string`: Output only. The resource name of the binding, e.g.
  * service_id `string`: The id of the service. Must be a valid identifier of a service

### GoogleCloudServicebrokerV1beta1__Broker
* GoogleCloudServicebrokerV1beta1__Broker `object`: Broker represents a consumable collection of Service Registry catalogs
  * createTime `string`: Output only. Timestamp for when the broker was created.
  * name `string`: Name of the broker in the format:
  * title `string`: User friendly title of the broker.
  * url `string`: Output only. URL of the broker OSB-compliant endpoint, for example:

### GoogleCloudServicebrokerV1beta1__CreateBindingResponse
* GoogleCloudServicebrokerV1beta1__CreateBindingResponse `object`: Response for the `CreateBinding()` method.
  * credentials `object`: Credentials to use the binding.
  * description `string`: Used to communicate description of the response. Usually for non-standard
  * operation `string`: If broker executes operation asynchronously, this is the operation ID that
  * route_service_url `string`: A URL to which the platform may proxy requests for the address sent with
  * syslog_drain_url `string`: From where to read system logs.
  * volume_mounts `array`: An array of configuration for mounting volumes.
    * items `object`

### GoogleCloudServicebrokerV1beta1__CreateServiceInstanceResponse
* GoogleCloudServicebrokerV1beta1__CreateServiceInstanceResponse `object`: Response for the `CreateServiceInstance()` method.
  * description `string`: Used to communicate description of the response. Usually for non-standard
  * operation `string`: If broker executes operation asynchronously, this is the operation ID that

### GoogleCloudServicebrokerV1beta1__DashboardClient
* GoogleCloudServicebrokerV1beta1__DashboardClient `object`: Message containing information required to activate Dashboard SSO feature.
  * id `string`: The id of the Oauth client that the dashboard will use.
  * redirect_uri `string`: A URI for the service dashboard.
  * secret `string`: A secret for the dashboard client.

### GoogleCloudServicebrokerV1beta1__DeleteBindingResponse
* GoogleCloudServicebrokerV1beta1__DeleteBindingResponse `object`: Response for the `DeleteBinding()` method.
  * description `string`: Used to communicate description of the response. Usually for non-standard
  * operation `string`: If broker executes operation asynchronously, this is the operation ID that

### GoogleCloudServicebrokerV1beta1__DeleteServiceInstanceResponse
* GoogleCloudServicebrokerV1beta1__DeleteServiceInstanceResponse `object`: Response for the `DeleteServiceInstance()` method.
  * description `string`: Used to communicate description of the response. Usually for non-standard
  * operation `string`: If broker executes operation asynchronously, this is the operation ID that

### GoogleCloudServicebrokerV1beta1__GetBindingResponse
* GoogleCloudServicebrokerV1beta1__GetBindingResponse `object`: Response for the `GetBinding()` method.
  * credentials `object`: Credentials to use the binding.
  * deploymentName `string`: String containing the Deployment Manager deployment name that was created
  * description `string`: Used to communicate description of the response. Usually for non-standard
  * resourceName `string`: Output only. The resource name of the binding, e.g.
  * route_service_url `string`: A URL to which the platform may proxy requests for the address sent with
  * syslog_drain_url `string`: From where to read system logs.
  * volume_mounts `array`: An array of configurations for mounting volumes.
    * items `object`

### GoogleCloudServicebrokerV1beta1__ListBindingsResponse
* GoogleCloudServicebrokerV1beta1__ListBindingsResponse `object`: The response for the `ListBindings()` method.
  * bindings `array`: The list of bindings in the instance.
    * items [GoogleCloudServicebrokerV1beta1__Binding](#googlecloudservicebrokerv1beta1__binding)
  * description `string`: Used to communicate description of the response. Usually for non-standard
  * nextPageToken `string`: This token allows you to get the next page of results for list requests.

### GoogleCloudServicebrokerV1beta1__ListBrokersResponse
* GoogleCloudServicebrokerV1beta1__ListBrokersResponse `object`: The response for the `ListBrokers()` method.
  * brokers `array`: The list of brokers in the container.
    * items [GoogleCloudServicebrokerV1beta1__Broker](#googlecloudservicebrokerv1beta1__broker)
  * nextPageToken `string`: This token allows you to get the next page of results for list requests.

### GoogleCloudServicebrokerV1beta1__ListCatalogResponse
* GoogleCloudServicebrokerV1beta1__ListCatalogResponse `object`: Response message for the `ListCatalog()` method.
  * description `string`: Used to communicate description of the response. Usually for non-standard
  * nextPageToken `string`: This token allows you to get the next page of results for list requests.
  * services `array`: The services available for the requested GCP project.
    * items [GoogleCloudServicebrokerV1beta1__Service](#googlecloudservicebrokerv1beta1__service)

### GoogleCloudServicebrokerV1beta1__ListServiceInstancesResponse
* GoogleCloudServicebrokerV1beta1__ListServiceInstancesResponse `object`: The response for the `ListServiceInstances()` method.
  * description `string`: Used to communicate description of the response. Usually for non-standard
  * instances `array`: The list of instances in the broker.
    * items [GoogleCloudServicebrokerV1beta1__ServiceInstance](#googlecloudservicebrokerv1beta1__serviceinstance)
  * nextPageToken `string`: This token allows you to get the next page of results for list requests.

### GoogleCloudServicebrokerV1beta1__Operation
* GoogleCloudServicebrokerV1beta1__Operation `object`: Describes a long running operation, which conforms to OpenService API.
  * description `string`: Optional description of the Operation state.
  * state `string`: The state of the operation.

### GoogleCloudServicebrokerV1beta1__Plan
* GoogleCloudServicebrokerV1beta1__Plan `object`: Plan message describes a Service Plan.
  * bindable `boolean`: Specifies whether instances of the service can be bound to applications.
  * description `string`: Textual description of the plan. Optional.
  * free `boolean`: Whether the service is free.
  * id `string`: ID is a globally unique identifier used to uniquely identify the plan.
  * metadata `object`: A list of metadata for a service offering.
  * name `string`: User friendly name of the plan.
  * schemas `object`: Schema definitions for service instances and bindings for the plan.

### GoogleCloudServicebrokerV1beta1__Service
* GoogleCloudServicebrokerV1beta1__Service `object`: The resource model mostly follows the Open Service Broker API, as
  * tags `array`: Tags provide a flexible mechanism to expose a classification, attribute, or
    * items `string`
  * bindable `boolean`: Specifies whether instances of the service can be bound to applications.
  * binding_retrievable `boolean`: Whether the service provides an endpoint to get service bindings.
  * bindings_retrievable `boolean`: Whether the service provides an endpoint to get service bindings.
  * dashboard_client [GoogleCloudServicebrokerV1beta1__DashboardClient](#googlecloudservicebrokerv1beta1__dashboardclient)
  * description `string`: Textual description of the service. Required.
  * id `string`: ID is a globally unique identifier used to uniquely identify the service.
  * instances_retrievable `boolean`: Whether the service provides an endpoint to get service instances.
  * metadata `object`: A list of metadata for a service offering.
  * name `string`: User friendly service name.
  * plan_updateable `boolean`: Whether the service supports upgrade/downgrade for some plans.
  * plans `array`: A list of plans for this service.
    * items [GoogleCloudServicebrokerV1beta1__Plan](#googlecloudservicebrokerv1beta1__plan)

### GoogleCloudServicebrokerV1beta1__ServiceInstance
* GoogleCloudServicebrokerV1beta1__ServiceInstance `object`: Message describing inputs to Provision and Update Service instance requests.
  * parameters `object`: Configuration options for the service instance.
  * context `object`: Platform specific contextual information under which the service instance
  * createTime `string`: Output only. Timestamp for when the instance was created.
  * deploymentName `string`: Output only. String containing the Deployment Manager deployment name that was created
  * description `string`: To return errors when GetInstance call is done via HTTP to be unified with
  * instance_id `string`: The id of the service instance. Must be unique within GCP project.
  * organization_guid `string`: The platform GUID for the organization under which the service is to be
  * plan_id `string`: The ID of the plan. See `Service` and `Plan` resources for details.
  * previous_values `object`: Used only in UpdateServiceInstance request to optionally specify previous
  * resourceName `string`: Output only. The resource name of the instance, e.g.
  * service_id `string`: The id of the service. Must be a valid identifier of a service
  * space_guid `string`: The identifier for the project space within the platform organization.

### GoogleCloudServicebrokerV1beta1__UpdateServiceInstanceResponse
* GoogleCloudServicebrokerV1beta1__UpdateServiceInstanceResponse `object`: Response for the `UpdateServiceInstance()` method.
  * description `string`: Used to communicate description of the response. Usually for non-standard
  * operation `string`: If broker executes operation asynchronously, this is the operation ID that

### GoogleIamV1__Binding
* GoogleIamV1__Binding `object`: Associates `members` with a `role`.
  * condition [GoogleType__Expr](#googletype__expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource.
    * items `string`
  * role `string`: Role that is assigned to `members`.

### GoogleIamV1__Policy
* GoogleIamV1__Policy `object`: An Identity and Access Management (IAM) policy, which specifies access
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a
    * items [GoogleIamV1__Binding](#googleiamv1__binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * version `integer`: Specifies the format of the policy.

### GoogleIamV1__SetIamPolicyRequest
* GoogleIamV1__SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [GoogleIamV1__Policy](#googleiamv1__policy)

### GoogleIamV1__TestIamPermissionsRequest
* GoogleIamV1__TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with
    * items `string`

### GoogleIamV1__TestIamPermissionsResponse
* GoogleIamV1__TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is
    * items `string`

### GoogleProtobuf__Empty
* GoogleProtobuf__Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### GoogleType__Expr
* GoogleType__Expr `object`: Represents an expression text. Example:
  * description `string`: An optional description of the expression. This is a longer text which
  * expression `string`: Textual representation of an expression in
  * location `string`: An optional string indicating the location of the expression for error
  * title `string`: An optional title for the expression, i.e. a short string describing


