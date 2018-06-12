# @datafire/google_tpu

Client library for Cloud TPU

## Installation and Usage
```bash
npm install --save @datafire/google_tpu
```
```js
let google_tpu = require('@datafire/google_tpu').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_tpu.projects.locations.nodes.delete({
  "name": ""
}).then(data => {
  console.log(data);
});
```

## Description

TPU API provides customers with access to Google TPU technology.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_tpu.oauthCallback({
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
google_tpu.oauthRefresh(null, context)
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

### projects.locations.nodes.delete
Deletes a node.


```js
google_tpu.projects.locations.nodes.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)

### projects.locations.nodes.get
Gets the details of a node.


```js
google_tpu.projects.locations.nodes.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Node](#node)

### projects.locations.list
Lists information about the supported locations for this service.


```js
google_tpu.projects.locations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: The standard list filter.
  * name **required** `string`: The resource that owns the locations collection, if applicable.
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
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListLocationsResponse](#listlocationsresponse)

### projects.locations.operations.list
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
google_tpu.projects.locations.operations.list({
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
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListOperationsResponse](#listoperationsresponse)

### projects.locations.operations.cancel
Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.


```js
google_tpu.projects.locations.operations.cancel({
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
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

### projects.locations.nodes.reimage
Reimages a node's OS.


```js
google_tpu.projects.locations.nodes.reimage({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [ReimageNodeRequest](#reimagenoderequest)
  * name **required** `string`: The resource name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)

### projects.locations.nodes.reset
Resets a node, which stops and starts the VM.


```js
google_tpu.projects.locations.nodes.reset({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [ResetNodeRequest](#resetnoderequest)
  * name **required** `string`: The resource name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)

### projects.locations.nodes.start
Starts a node.


```js
google_tpu.projects.locations.nodes.start({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [StartNodeRequest](#startnoderequest)
  * name **required** `string`: The resource name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)

### projects.locations.nodes.stop
Stops a node.


```js
google_tpu.projects.locations.nodes.stop({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [StopNodeRequest](#stopnoderequest)
  * name **required** `string`: The resource name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)

### projects.locations.acceleratorTypes.list
Lists accelerator types supported by this API.


```js
google_tpu.projects.locations.acceleratorTypes.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: List filter.
  * orderBy `string`: Sort results.
  * pageSize `integer`: The maximum number of items to return.
  * pageToken `string`: The next_page_token value returned from a previous List request, if any.
  * parent **required** `string`: The parent resource name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListAcceleratorTypesResponse](#listacceleratortypesresponse)

### projects.locations.nodes.list
Lists nodes.


```js
google_tpu.projects.locations.nodes.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of items to return.
  * pageToken `string`: The next_page_token value returned from a previous List request, if any.
  * parent **required** `string`: The parent resource name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListNodesResponse](#listnodesresponse)

### projects.locations.nodes.create
Creates a node.


```js
google_tpu.projects.locations.nodes.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * body [Node](#node)
  * nodeId `string`: The unqualified resource name.
  * parent **required** `string`: The parent resource name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Operation](#operation)

### projects.locations.tensorflowVersions.list
Lists TensorFlow versions supported by this API.


```js
google_tpu.projects.locations.tensorflowVersions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: List filter.
  * orderBy `string`: Sort results.
  * pageSize `integer`: The maximum number of items to return.
  * pageToken `string`: The next_page_token value returned from a previous List request, if any.
  * parent **required** `string`: The parent resource name.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListTensorFlowVersionsResponse](#listtensorflowversionsresponse)



## Definitions

### AcceleratorType
* AcceleratorType `object`: A accelerator type that a Node can be configured with.
  * name `string`: The resource name.
  * type `string`: the accelerator type.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### ListAcceleratorTypesResponse
* ListAcceleratorTypesResponse `object`: Response for ListAcceleratorTypes.
  * acceleratorTypes `array`: The listed nodes.
    * items [AcceleratorType](#acceleratortype)
  * nextPageToken `string`: The next page token or empty if none.

### ListLocationsResponse
* ListLocationsResponse `object`: The response message for Locations.ListLocations.
  * locations `array`: A list of locations that matches the specified filter in the request.
    * items [Location](#location)
  * nextPageToken `string`: The standard List next-page token.

### ListNodesResponse
* ListNodesResponse `object`: Response for ListNodes.
  * nextPageToken `string`: The next page token or empty if none.
  * nodes `array`: The listed nodes.
    * items [Node](#node)

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### ListTensorFlowVersionsResponse
* ListTensorFlowVersionsResponse `object`: Response for ListTensorFlowVersions.
  * nextPageToken `string`: The next page token or empty if none.
  * tensorflowVersions `array`: The listed nodes.
    * items [TensorFlowVersion](#tensorflowversion)

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name.
  * labels `object`: Cross-service attributes for the location. For example
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given
  * name `string`: Resource name for the location, which may vary between implementations.

### NetworkEndpoint
* NetworkEndpoint `object`: A network endpoint over which a TPU worker can be reached.
  * ipAddress `string`: The IP address of this network endpoint.
  * port `integer`: The port of this network endpoint.

### Node
* Node `object`: A TPU instance.
  * acceleratorType `string`: The type of hardware accelerators associated with this node.
  * cidrBlock `string`: The CIDR block that the TPU node will use when selecting an IP address.
  * createTime `string`: Output only.
  * description `string`: The user-supplied description of the TPU. Maximum of 512 characters.
  * health `string` (values: HEALTH_UNSPECIFIED, HEALTHY, UNHEALTHY, TIMEOUT): The health status of the TPU node.
  * healthDescription `string`: Output only.
  * ipAddress `string`: Output only.
  * labels `object`: Resource labels to represent user-provided metadata.
  * name `string`: Output only.
  * network `string`: The name of a network they wish to peer the TPU node to. It must be a
  * networkEndpoints `array`: Output only. The network endpoints where TPU workers can be accessed and sent work.
    * items [NetworkEndpoint](#networkendpoint)
  * port `string`: Output only.
  * serviceAccount `string`: Output only.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, READY, RESTARTING, REIMAGING, DELETING, REPAIRING, STOPPED, STOPPING, STARTING): Output only.
  * tensorflowVersion `string`: The version of Tensorflow running in the Node.

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation.  It typically
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: The normal response of the operation in case of success.  If the original

### OperationMetadata
* OperationMetadata `object`: Represents the metadata of the long-running operation.
  * apiVersion `string`: [Output only] API version used to start the operation.
  * cancelRequested `boolean`: [Output only] Identifies whether the user has requested cancellation
  * createTime `string`: [Output only] The time the operation was created.
  * endTime `string`: [Output only] The time the operation finished running.
  * statusDetail `string`: [Output only] Human-readable status of the operation, if any.
  * target `string`: [Output only] Server-defined resource path for the target of the operation.
  * verb `string`: [Output only] Name of the verb executed by the operation.

### ReimageNodeRequest
* ReimageNodeRequest `object`: Request for ReimageNode.
  * tensorflowVersion `string`: The version for reimage to create.

### ResetNodeRequest
* ResetNodeRequest `object`: Request for ResetNode.

### StartNodeRequest
* StartNodeRequest `object`: Request for StartNode.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### StopNodeRequest
* StopNodeRequest `object`: Request for StopNode.

### TensorFlowVersion
* TensorFlowVersion `object`: A tensorflow version that a Node can be configured with.
  * name `string`: The resource name.
  * version `string`: the tensorflow version.


