# @datafire/google_gameservices

Client library for Game Services API

## Installation and Usage
```bash
npm install --save @datafire/google_gameservices
```
```js
let google_gameservices = require('@datafire/google_gameservices').create({
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

Deploy and manage infrastructure for global multiplayer gaming experiences.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_gameservices.oauthCallback({
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
google_gameservices.oauthRefresh(null, context)
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

### gameservices.projects.locations.realms.gameServerClusters.delete
Deletes a single game server cluster.


```js
google_gameservices.gameservices.projects.locations.realms.gameServerClusters.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the game server cluster to delete, in the following form: `projects/{project}/locations/{location}/gameServerClusters/{cluster}`.
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

### gameservices.projects.locations.realms.gameServerClusters.get
Gets details of a single game server cluster.


```js
google_gameservices.gameservices.projects.locations.realms.gameServerClusters.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the game server cluster to retrieve, in the following form: `projects/{project}/locations/{location}/realms/{realm-id}/gameServerClusters/{cluster}`.
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
* output [GameServerCluster](#gameservercluster)

### gameservices.projects.locations.realms.gameServerClusters.patch
Patches a single game server cluster.


```js
google_gameservices.gameservices.projects.locations.realms.gameServerClusters.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the game server cluster, in the following form: `projects/{project}/locations/{location}/realms/{realm}/gameServerClusters/{cluster}`. For example, `projects/my-project/locations/{location}/realms/zanzibar/gameServerClusters/my-onprem-cluster`.
  * updateMask `string`: Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
  * body [GameServerCluster](#gameservercluster)
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

### gameservices.projects.locations.list
Lists information about the supported locations for this service.


```js
google_gameservices.gameservices.projects.locations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource that owns the locations collection, if applicable.
  * filter `string`: The standard list filter.
  * includeUnrevealedLocations `boolean`: If true, the returned list will include locations which are not yet revealed.
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
* output [ListLocationsResponse](#listlocationsresponse)

### gameservices.projects.locations.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_gameservices.gameservices.projects.locations.operations.list({
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
* output [ListOperationsResponse](#listoperationsresponse)

### gameservices.projects.locations.gameServerDeployments.getRollout
Gets details a single game server deployment rollout.


```js
google_gameservices.gameservices.projects.locations.gameServerDeployments.getRollout({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the game server delpoyment to retrieve, in the following form: `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/rollout`.
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
* output [GameServerDeploymentRollout](#gameserverdeploymentrollout)

### gameservices.projects.locations.gameServerDeployments.updateRollout
Patches a single game server deployment rollout. The method will not return an error if the update does not affect any existing realms. For example - if the default_game_server_config is changed but all existing realms use the override, that is valid. Similarly, if a non existing realm is explicitly called out in game_server_config_overrides field, that will also not result in an error.


```js
google_gameservices.gameservices.projects.locations.gameServerDeployments.updateRollout({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the game server deployment rollout, in the following form: `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/rollout`. For example, `projects/my-project/locations/global/gameServerDeployments/my-deployment/rollout`.
  * updateMask `string`: Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
  * body [GameServerDeploymentRollout](#gameserverdeploymentrollout)
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

### gameservices.projects.locations.gameServerDeployments.previewRollout
Previews the game server deployment rollout. This API does not mutate the rollout resource.


```js
google_gameservices.gameservices.projects.locations.gameServerDeployments.previewRollout({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the game server deployment rollout, in the following form: `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/rollout`. For example, `projects/my-project/locations/global/gameServerDeployments/my-deployment/rollout`.
  * previewTime `string`: Optional. The target timestamp to compute the preview. Defaults to the immediately after the proposed rollout completes.
  * updateMask `string`: Optional. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
  * body [GameServerDeploymentRollout](#gameserverdeploymentrollout)
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
* output [PreviewGameServerDeploymentRolloutResponse](#previewgameserverdeploymentrolloutresponse)

### gameservices.projects.locations.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.


```js
google_gameservices.gameservices.projects.locations.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
  * body [CancelOperationRequest](#canceloperationrequest)
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

### gameservices.projects.locations.gameServerDeployments.fetchDeploymentState
Retrieves information about the current state of the game server deployment. Gathers all the Agones fleets and Agones autoscalers, including fleets running an older version of the game server deployment.


```js
google_gameservices.gameservices.projects.locations.gameServerDeployments.fetchDeploymentState({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the game server delpoyment, in the following form: `projects/{project}/locations/{location}/gameServerDeployments/{deployment}`.
  * body [FetchDeploymentStateRequest](#fetchdeploymentstaterequest)
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
* output [FetchDeploymentStateResponse](#fetchdeploymentstateresponse)

### gameservices.projects.locations.realms.gameServerClusters.previewDelete
Previews deletion of a single game server cluster.


```js
google_gameservices.gameservices.projects.locations.realms.gameServerClusters.previewDelete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the game server cluster to delete, in the following form: `projects/{project}/locations/{location}/gameServerClusters/{cluster}`.
  * previewTime `string`: Optional. The target timestamp to compute the preview.
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
* output [PreviewDeleteGameServerClusterResponse](#previewdeletegameserverclusterresponse)

### gameservices.projects.locations.realms.gameServerClusters.previewUpdate
Previews updating a GameServerCluster.


```js
google_gameservices.gameservices.projects.locations.realms.gameServerClusters.previewUpdate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the game server cluster, in the following form: `projects/{project}/locations/{location}/realms/{realm}/gameServerClusters/{cluster}`. For example, `projects/my-project/locations/{location}/realms/zanzibar/gameServerClusters/my-onprem-cluster`.
  * previewTime `string`: Optional. The target timestamp to compute the preview.
  * updateMask `string`: Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
  * body [GameServerCluster](#gameservercluster)
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
* output [PreviewUpdateGameServerClusterResponse](#previewupdategameserverclusterresponse)

### gameservices.projects.locations.gameServerDeployments.configs.list
Lists game server configs in a given project, location, and game server deployment.


```js
google_gameservices.gameservices.projects.locations.gameServerDeployments.configs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name, in the following form: `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/configs/*`.
  * filter `string`: Optional. The filter to apply to list results.
  * orderBy `string`: Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
  * pageSize `integer`: Optional. The maximum number of items to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerConfigs left to be queried.
  * pageToken `string`: Optional. The next_page_token value returned from a previous list request, if any.
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
* output [ListGameServerConfigsResponse](#listgameserverconfigsresponse)

### gameservices.projects.locations.gameServerDeployments.configs.create
Creates a new game server config in a given project, location, and game server deployment. Game server configs are immutable, and are not applied until referenced in the game server deployment rollout resource.


```js
google_gameservices.gameservices.projects.locations.gameServerDeployments.configs.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name, in the following form: `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/`.
  * configId `string`: Required. The ID of the game server config resource to be created.
  * body [GameServerConfig](#gameserverconfig)
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

### gameservices.projects.locations.realms.gameServerClusters.list
Lists game server clusters in a given project and location.


```js
google_gameservices.gameservices.projects.locations.realms.gameServerClusters.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name, in the following form: "projects/{project}/locations/{location}/realms/{realm}".
  * filter `string`: Optional. The filter to apply to list results.
  * orderBy `string`: Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
  * pageSize `integer`: Optional. The maximum number of items to return. If unspecified, the server will pick an appropriate default. The server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerClusters left to be queried.
  * pageToken `string`: Optional. The next_page_token value returned from a previous List request, if any.
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
* output [ListGameServerClustersResponse](#listgameserverclustersresponse)

### gameservices.projects.locations.realms.gameServerClusters.create
Creates a new game server cluster in a given project and location.


```js
google_gameservices.gameservices.projects.locations.realms.gameServerClusters.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name, in the following form: `projects/{project}/locations/{location}/realms/{realm-id}`.
  * gameServerClusterId `string`: Required. The ID of the game server cluster resource to be created.
  * body [GameServerCluster](#gameservercluster)
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

### gameservices.projects.locations.realms.gameServerClusters.previewCreate
Previews creation of a new game server cluster in a given project and location.


```js
google_gameservices.gameservices.projects.locations.realms.gameServerClusters.previewCreate({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name, in the following form: `projects/{project}/locations/{location}/realms/{realm}`.
  * gameServerClusterId `string`: Required. The ID of the game server cluster resource to be created.
  * previewTime `string`: Optional. The target timestamp to compute the preview.
  * body [GameServerCluster](#gameservercluster)
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
* output [PreviewCreateGameServerClusterResponse](#previewcreategameserverclusterresponse)

### gameservices.projects.locations.gameServerDeployments.list
Lists game server deployments in a given project and location.


```js
google_gameservices.gameservices.projects.locations.gameServerDeployments.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name, in the following form: `projects/{project}/locations/{location}`.
  * filter `string`: Optional. The filter to apply to list results.
  * orderBy `string`: Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
  * pageSize `integer`: Optional. The maximum number of items to return. If unspecified, the server will pick an appropriate default. The server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerDeployments left to be queried.
  * pageToken `string`: Optional. The next_page_token value returned from a previous List request, if any.
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
* output [ListGameServerDeploymentsResponse](#listgameserverdeploymentsresponse)

### gameservices.projects.locations.gameServerDeployments.create
Creates a new game server deployment in a given project and location.


```js
google_gameservices.gameservices.projects.locations.gameServerDeployments.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name, in the following form: `projects/{project}/locations/{location}`.
  * deploymentId `string`: Required. The ID of the game server delpoyment resource to be created.
  * body [GameServerDeployment](#gameserverdeployment)
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

### gameservices.projects.locations.realms.list
Lists realms in a given project and location.


```js
google_gameservices.gameservices.projects.locations.realms.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name, in the following form: `projects/{project}/locations/{location}`.
  * filter `string`: Optional. The filter to apply to list results.
  * orderBy `string`: Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
  * pageSize `integer`: Optional. The maximum number of items to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more realms left to be queried.
  * pageToken `string`: Optional. The next_page_token value returned from a previous List request, if any.
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
* output [ListRealmsResponse](#listrealmsresponse)

### gameservices.projects.locations.realms.create
Creates a new realm in a given project and location.


```js
google_gameservices.gameservices.projects.locations.realms.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name, in the following form: `projects/{project}/locations/{location}`.
  * realmId `string`: Required. The ID of the realm resource to be created.
  * body [Realm](#realm)
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

### gameservices.projects.locations.gameServerDeployments.getIamPolicy
Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.


```js
google_gameservices.gameservices.projects.locations.gameServerDeployments.getIamPolicy({
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
* output [Policy](#policy)

### gameservices.projects.locations.gameServerDeployments.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.


```js
google_gameservices.gameservices.projects.locations.gameServerDeployments.setIamPolicy({
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

### gameservices.projects.locations.gameServerDeployments.testIamPermissions
Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.


```js
google_gameservices.gameservices.projects.locations.gameServerDeployments.testIamPermissions({
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

### AuditConfig
* AuditConfig `object`: Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
  * auditLogConfigs `array`: The configuration for logging of each type of permission.
    * items [AuditLogConfig](#auditlogconfig)
  * exemptedMembers `array`
    * items `string`
  * service `string`: Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.

### AuditLogConfig
* AuditLogConfig `object`: Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
  * exemptedMembers `array`: Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
    * items `string`
  * ignoreChildExemptions `boolean`
  * logType `string` (values: LOG_TYPE_UNSPECIFIED, ADMIN_READ, DATA_WRITE, DATA_READ): The log type that this config enables.

### AuthorizationLoggingOptions
* AuthorizationLoggingOptions `object`: Authorization-related information used by Cloud Audit Logging.
  * permissionType `string` (values: PERMISSION_TYPE_UNSPECIFIED, ADMIN_READ, ADMIN_WRITE, DATA_READ, DATA_WRITE): The type of the permission that was checked.

### Binding
* Binding `object`: Associates `members` with a `role`.
  * bindingId `string`
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### CancelOperationRequest
* CancelOperationRequest `object`: The request message for Operations.CancelOperation.

### CloudAuditOptions
* CloudAuditOptions `object`: Write a Cloud Audit log
  * authorizationLoggingOptions [AuthorizationLoggingOptions](#authorizationloggingoptions)
  * logName `string` (values: UNSPECIFIED_LOG_NAME, ADMIN_ACTIVITY, DATA_ACCESS): The log_name to populate in the Cloud Audit Record.

### Condition
* Condition `object`: A condition to be met.
  * iam `string` (values: NO_ATTR, AUTHORITY, ATTRIBUTION, SECURITY_REALM, APPROVER, JUSTIFICATION_TYPE, CREDENTIALS_TYPE, CREDS_ASSERTION): Trusted attributes supplied by the IAM system.
  * op `string` (values: NO_OP, EQUALS, NOT_EQUALS, IN, NOT_IN, DISCHARGED): An operator to apply the subject with.
  * svc `string`: Trusted attributes discharged by the service.
  * sys `string` (values: NO_ATTR, REGION, SERVICE, NAME, IP): Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
  * values `array`: The objects of the condition.
    * items `string`

### CounterOptions
* CounterOptions `object`: Increment a streamz counter with the specified metric and field names. Metric names should start with a '/', generally be lowercase-only, and end in "_count". Field names should not contain an initial slash. The actual exported metric names will have "/iam/policy" prepended. Field names correspond to IAM request parameters and field values are their respective values. Supported field names: - "authority", which is "[token]" if IAMContext.token is present, otherwise the value of IAMContext.authority_selector if present, and otherwise a representation of IAMContext.principal; or - "iam_principal", a representation of IAMContext.principal even if a token or authority selector is present; or - "" (empty string), resulting in a counter with no fields. Examples: counter { metric: "/debug_access_count" field: "iam_principal" } ==> increment counter /iam/policy/debug_access_count {iam_principal=[value of IAMContext.principal]}
  * customFields `array`: Custom fields.
    * items [CustomField](#customfield)
  * field `string`: The field value to attribute.
  * metric `string`: The metric to update.

### CustomField
* CustomField `object`: Custom fields. These can be used to create a counter with arbitrary field/value pairs. See: go/rpcsp-custom-fields.
  * name `string`: Name is the field name.
  * value `string`: Value is the field value. It is important that in contrast to the CounterOptions.field, the value here is a constant that is not derived from the IAMContext.

### DataAccessOptions
* DataAccessOptions `object`: Write a Data Access (Gin) log
  * logMode `string` (values: LOG_MODE_UNSPECIFIED, LOG_FAIL_CLOSED)

### DeployedClusterState
* DeployedClusterState `object`: The game server cluster changes made by the game server deployment.
  * cluster `string`: The name of the cluster.
  * fleetDetails `array`: The details about the Agones fleets and autoscalers created in the game server cluster.
    * items [DeployedFleetDetails](#deployedfleetdetails)

### DeployedFleet
* DeployedFleet `object`: Agones fleet specification and details.
  * fleet `string`: The name of the Agones fleet.
  * fleetSpec `string`: The fleet spec retrieved from the Agones fleet.
  * specSource [SpecSource](#specsource)
  * status [DeployedFleetStatus](#deployedfleetstatus)

### DeployedFleetAutoscaler
* DeployedFleetAutoscaler `object`: Details about the Agones autoscaler.
  * autoscaler `string`: The name of the Agones autoscaler.
  * fleetAutoscalerSpec `string`: The autoscaler spec retrieved from Agones.
  * specSource [SpecSource](#specsource)

### DeployedFleetDetails
* DeployedFleetDetails `object`: Details of the deployed Agones fleet.
  * deployedAutoscaler [DeployedFleetAutoscaler](#deployedfleetautoscaler)
  * deployedFleet [DeployedFleet](#deployedfleet)

### DeployedFleetStatus
* DeployedFleetStatus `object`: DeployedFleetStatus has details about the Agones fleets such as how many are running, how many allocated, and so on.
  * allocatedReplicas `string`: The number of GameServer replicas in the ALLOCATED state in this fleet.
  * readyReplicas `string`: The number of GameServer replicas in the READY state in this fleet.
  * replicas `string`: The total number of current GameServer replicas in this fleet.
  * reservedReplicas `string`: The number of GameServer replicas in the RESERVED state in this fleet. Reserved instances won't be deleted on scale down, but won't cause an autoscaler to scale up.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### FetchDeploymentStateRequest
* FetchDeploymentStateRequest `object`: Request message for GameServerDeploymentsService.FetchDeploymentState.

### FetchDeploymentStateResponse
* FetchDeploymentStateResponse `object`: Response message for GameServerDeploymentsService.FetchDeploymentState.
  * clusterState `array`: The state of the game server deployment in each game server cluster.
    * items [DeployedClusterState](#deployedclusterstate)
  * unavailable `array`: List of locations that could not be reached.
    * items `string`

### FleetConfig
* FleetConfig `object`: Fleet configs for Agones.
  * fleetSpec `string`: Agones fleet spec. Example spec: `https://agones.dev/site/docs/reference/fleet/`.
  * name `string`: The name of the FleetConfig.

### GameServerCluster
* GameServerCluster `object`: A game server cluster resource.
  * connectionInfo [GameServerClusterConnectionInfo](#gameserverclusterconnectioninfo)
  * createTime `string`: Output only. The creation time.
  * description `string`: Human readable description of the cluster.
  * etag `string`: ETag of the resource.
  * labels `object`: The labels associated with this game server cluster. Each label is a key-value pair.
  * name `string`: Required. The resource name of the game server cluster, in the following form: `projects/{project}/locations/{location}/realms/{realm}/gameServerClusters/{cluster}`. For example, `projects/my-project/locations/{location}/realms/zanzibar/gameServerClusters/my-onprem-cluster`.
  * updateTime `string`: Output only. The last-modified time.

### GameServerClusterConnectionInfo
* GameServerClusterConnectionInfo `object`: The game server cluster connection information.
  * gkeClusterReference [GkeClusterReference](#gkeclusterreference)
  * namespace `string`: Namespace designated on the game server cluster where the Agones game server instances will be created. Existence of the namespace will be validated during creation.

### GameServerConfig
* GameServerConfig `object`: A game server config resource.
  * createTime `string`: Output only. The creation time.
  * description `string`: The description of the game server config.
  * fleetConfigs `array`: FleetConfig contains a list of Agones fleet specs. Only one FleetConfig is allowed.
    * items [FleetConfig](#fleetconfig)
  * labels `object`: The labels associated with this game server config. Each label is a key-value pair.
  * name `string`: The resource name of the game server config, in the following form: `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/configs/{config}`. For example, `projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config`.
  * scalingConfigs `array`: The autoscaling settings.
    * items [ScalingConfig](#scalingconfig)
  * updateTime `string`: Output only. The last-modified time.

### GameServerConfigOverride
* GameServerConfigOverride `object`: A game server config override.
  * configVersion `string`: The game server config for this override.
  * realmsSelector [RealmSelector](#realmselector)

### GameServerDeployment
* GameServerDeployment `object`: A game server deployment resource.
  * createTime `string`: Output only. The creation time.
  * description `string`: Human readable description of the game server delpoyment.
  * etag `string`: ETag of the resource.
  * labels `object`: The labels associated with this game server deployment. Each label is a key-value pair.
  * name `string`: The resource name of the game server deployment, in the following form: `projects/{project}/locations/{location}/gameServerDeployments/{deployment}`. For example, `projects/my-project/locations/global/gameServerDeployments/my-deployment`.
  * updateTime `string`: Output only. The last-modified time.

### GameServerDeploymentRollout
* GameServerDeploymentRollout `object`: The game server deployment rollout which represents the desired rollout state.
  * createTime `string`: Output only. The creation time.
  * defaultGameServerConfig `string`: The default game server config is applied to all realms unless overridden in the rollout. For example, `projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config`.
  * etag `string`: ETag of the resource.
  * gameServerConfigOverrides `array`: Contains the game server config rollout overrides. Overrides are processed in the order they are listed. Once a match is found for a realm, the rest of the list is not processed.
    * items [GameServerConfigOverride](#gameserverconfigoverride)
  * name `string`: The resource name of the game server deployment rollout, in the following form: `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/rollout`. For example, `projects/my-project/locations/global/gameServerDeployments/my-deployment/rollout`.
  * updateTime `string`: Output only. The last-modified time.

### GkeClusterReference
* GkeClusterReference `object`: A reference to a GKE cluster.
  * cluster `string`: The full or partial name of a GKE cluster, using one of the following forms: * `projects/{project}/locations/{location}/clusters/{cluster}` * `locations/{location}/clusters/{cluster}` * `{cluster}` If project and location are not specified, the project and location of the GameServerCluster resource are used to generate the full name of the GKE cluster.

### LabelSelector
* LabelSelector `object`: The label selector, used to group labels on the resources.
  * labels `object`: Resource labels for this selector.

### ListGameServerClustersResponse
* ListGameServerClustersResponse `object`: Response message for GameServerClustersService.ListGameServerClusters.
  * gameServerClusters `array`: The list of game server clusters.
    * items [GameServerCluster](#gameservercluster)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * unreachable `array`: List of locations that could not be reached.
    * items `string`

### ListGameServerConfigsResponse
* ListGameServerConfigsResponse `object`: Response message for GameServerConfigsService.ListGameServerConfigs.
  * gameServerConfigs `array`: The list of game server configs.
    * items [GameServerConfig](#gameserverconfig)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * unreachable `array`: List of locations that could not be reached.
    * items `string`

### ListGameServerDeploymentsResponse
* ListGameServerDeploymentsResponse `object`: Response message for GameServerDeploymentsService.ListGameServerDeployments.
  * gameServerDeployments `array`: The list of game server deployments.
    * items [GameServerDeployment](#gameserverdeployment)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * unreachable `array`: List of locations that could not be reached.
    * items `string`

### ListLocationsResponse
* ListLocationsResponse `object`: The response message for Locations.ListLocations.
  * locations `array`: A list of locations that matches the specified filter in the request.
    * items [Location](#location)
  * nextPageToken `string`: The standard List next-page token.

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### ListRealmsResponse
* ListRealmsResponse `object`: Response message for RealmsService.ListRealms.
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * realms `array`: The list of realms.
    * items [Realm](#realm)
  * unreachable `array`: List of locations that could not be reached.
    * items `string`

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  * labels `object`: Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given location.
  * name `string`: Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`

### LogConfig
* LogConfig `object`: Specifies what kind of log the caller must write
  * cloudAudit [CloudAuditOptions](#cloudauditoptions)
  * counter [CounterOptions](#counteroptions)
  * dataAccess [DataAccessOptions](#dataaccessoptions)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### OperationMetadata
* OperationMetadata `object`: Represents the metadata of the long-running operation.
  * apiVersion `string`: Output only. API version used to start the operation.
  * createTime `string`: Output only. The time the operation was created.
  * endTime `string`: Output only. The time the operation finished running.
  * operationStatus `object`: Output only. Operation status for Game Services API operations. Operation status is in the form of key-value pairs where keys are resource IDs and the values show the status of the operation. In case of failures, the value includes an error code and error message.
  * requestedCancellation `boolean`: Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
  * statusMessage `string`: Output only. Human-readable status of the operation, if any.
  * target `string`: Output only. Server-defined resource path for the target of the operation.
  * unreachable `array`: Output only. List of Locations that could not be reached.
    * items `string`
  * verb `string`: Output only. Name of the verb executed by the operation.

### OperationStatus
* OperationStatus `object`
  * done `boolean`: Output only. Whether the operation is done or still in progress.
  * errorCode `string` (values: ERROR_CODE_UNSPECIFIED, INTERNAL_ERROR, PERMISSION_DENIED, CLUSTER_CONNECTION): The error code in case of failures.
  * errorMessage `string`: The human-readable error message.

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [AuditConfig](#auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * iamOwned `boolean`
  * rules `array`: If more than one rule is specified, the rules are applied in the following manner: - All matching LOG rules are always applied. - If any DENY/DENY_WITH_LOG rule matches, permission is denied. Logging will be applied if one or more matching rule requires logging. - Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is granted. Logging will be applied if one or more matching rule requires logging. - Otherwise, if no rule applies, permission is denied.
    * items [Rule](#rule)
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### PreviewCreateGameServerClusterResponse
* PreviewCreateGameServerClusterResponse `object`: Response message for GameServerClustersService.PreviewCreateGameServerCluster.
  * etag `string`: The ETag of the game server cluster.
  * targetState [TargetState](#targetstate)

### PreviewDeleteGameServerClusterResponse
* PreviewDeleteGameServerClusterResponse `object`: Response message for GameServerClustersService.PreviewDeleteGameServerCluster.
  * etag `string`: The ETag of the game server cluster.
  * targetState [TargetState](#targetstate)

### PreviewGameServerDeploymentRolloutResponse
* PreviewGameServerDeploymentRolloutResponse `object`: Response message for PreviewGameServerDeploymentRollout. This has details about the Agones fleet and autoscaler to be actuated.
  * etag `string`: ETag of the game server deployment.
  * targetState [TargetState](#targetstate)
  * unavailable `array`: Locations that could not be reached on this request.
    * items `string`

### PreviewRealmUpdateResponse
* PreviewRealmUpdateResponse `object`: Response message for RealmsService.PreviewRealmUpdate.
  * etag `string`: ETag of the realm.
  * targetState [TargetState](#targetstate)

### PreviewUpdateGameServerClusterResponse
* PreviewUpdateGameServerClusterResponse `object`: Response message for GameServerClustersService.PreviewUpdateGameServerCluster
  * etag `string`: The ETag of the game server cluster.
  * targetState [TargetState](#targetstate)

### Realm
* Realm `object`: A realm resource.
  * createTime `string`: Output only. The creation time.
  * description `string`: Human readable description of the realm.
  * etag `string`: ETag of the resource.
  * labels `object`: The labels associated with this realm. Each label is a key-value pair.
  * name `string`: The resource name of the realm, in the following form: `projects/{project}/locations/{location}/realms/{realm}`. For example, `projects/my-project/locations/{location}/realms/my-realm`.
  * timeZone `string`: Required. Time zone where all policies targeting this realm are evaluated. The value of this field must be from the IANA time zone database: https://www.iana.org/time-zones.
  * updateTime `string`: Output only. The last-modified time.

### RealmSelector
* RealmSelector `object`: The realm selector, used to match realm resources.
  * realms `array`: List of realms to match.
    * items `string`

### Rule
* Rule `object`: A rule to be applied in a Policy.
  * action `string` (values: NO_ACTION, ALLOW, ALLOW_WITH_LOG, DENY, DENY_WITH_LOG, LOG): Required
  * conditions `array`: Additional restrictions that must be met. All conditions must pass for the rule to match.
    * items [Condition](#condition)
  * description `string`: Human-readable description of the rule.
  * in `array`: If one or more 'in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
    * items `string`
  * logConfig `array`: The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action.
    * items [LogConfig](#logconfig)
  * notIn `array`: If one or more 'not_in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries. The format for in and not_in entries can be found at in the Local IAM documentation (see go/local-iam#features).
    * items `string`
  * permissions `array`: A permission is a string of form '..' (e.g., 'storage.buckets.list'). A value of '*' matches all permissions, and a verb part of '*' (e.g., 'storage.buckets.*') matches all verbs.
    * items `string`

### ScalingConfig
* ScalingConfig `object`: Autoscaling config for an Agones fleet.
  * fleetAutoscalerSpec `string`: Required. Agones fleet autoscaler spec. Example spec: https://agones.dev/site/docs/reference/fleetautoscaler/
  * name `string`: Required. The name of the Scaling Config
  * schedules `array`: The schedules to which this Scaling Config applies.
    * items [Schedule](#schedule)
  * selectors `array`: Labels used to identify the game server clusters to which this Agones scaling config applies. A game server cluster is subject to this Agones scaling config if its labels match any of the selector entries.
    * items [LabelSelector](#labelselector)

### Schedule
* Schedule `object`: The schedule of a recurring or one time event. The event's time span is specified by start_time and end_time. If the scheduled event's timespan is larger than the cron_spec + cron_job_duration, the event will be recurring. If only cron_spec + cron_job_duration are specified, the event is effective starting at the local time specified by cron_spec, and is recurring. start_time|-------[cron job]-------[cron job]-------[cron job]---|end_time cron job: cron spec start time + duration
  * cronJobDuration `string`: The duration for the cron job event. The duration of the event is effective after the cron job's start time.
  * cronSpec `string`: The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the realm.
  * endTime `string`: The end time of the event.
  * startTime `string`: The start time of the event.

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)
  * updateMask `string`: OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`

### SpecSource
* SpecSource `object`: Encapsulates Agones fleet spec and Agones autoscaler spec sources.
  * gameServerConfigName `string`: The game server config resource. Uses the form: `projects/{project}/locations/{location}/gameServerDeployments/{deployment_id}/configs/{config_id}`.
  * name `string`: The name of the Agones leet config or Agones scaling config used to derive the Agones fleet or Agones autoscaler spec.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### TargetDetails
* TargetDetails `object`: Details about the Agones resources.
  * fleetDetails `array`: Agones fleet details for game server clusters and game server deployments.
    * items [TargetFleetDetails](#targetfleetdetails)
  * gameServerClusterName `string`: The game server cluster name. Uses the form: `projects/{project}/locations/{location}/realms/{realm}/gameServerClusters/{cluster}`.
  * gameServerDeploymentName `string`: The game server deployment name. Uses the form: `projects/{project}/locations/{location}/gameServerDeployments/{deployment_id}`.

### TargetFleet
* TargetFleet `object`: Target Agones fleet specification.
  * name `string`: The name of the Agones fleet.
  * specSource [SpecSource](#specsource)

### TargetFleetAutoscaler
* TargetFleetAutoscaler `object`: Target Agones autoscaler policy reference.
  * name `string`: The name of the Agones autoscaler.
  * specSource [SpecSource](#specsource)

### TargetFleetDetails
* TargetFleetDetails `object`: Details of the target Agones fleet.
  * autoscaler [TargetFleetAutoscaler](#targetfleetautoscaler)
  * fleet [TargetFleet](#targetfleet)

### TargetState
* TargetState `object`: Encapsulates the Target state.
  * details `array`: Details about Agones fleets.
    * items [TargetDetails](#targetdetails)

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`


