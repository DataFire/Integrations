# @datafire/google_container

Client library for Google Kubernetes Engine

## Installation and Usage
```bash
npm install --save @datafire/google_container
```
```js
let google_container = require('@datafire/google_container').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_container.projects.zones.clusters.list({
  "projectId": "",
  "zone": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Google Kubernetes Engine API is used for building and managing container based applications, powered by the open source Kubernetes technology.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_container.oauthCallback({
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
google_container.oauthRefresh(null, context)
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

### projects.zones.clusters.list
Lists all clusters owned by a project in either the specified zone or all
zones.


```js
google_container.projects.zones.clusters.list({
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [ListClustersResponse](#listclustersresponse)

### projects.zones.clusters.create
Creates a cluster, consisting of the specified number and type of Google
Compute Engine instances.

By default, the cluster is created in the project's
[default network](/compute/docs/networks-and-firewalls#networks).

One firewall is added for the cluster. After cluster creation,
the cluster creates routes for each node to allow the containers
on that node to communicate with all other instances in the
cluster.

Finally, an entry is added to the project's global metadata indicating
which CIDR range is being used by the cluster.


```js
google_container.projects.zones.clusters.create({
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [CreateClusterRequest](#createclusterrequest)
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.delete
Deletes the cluster, including the Kubernetes endpoint and all worker
nodes.

Firewalls and routes that were configured during cluster creation
are also deleted.

Other Google Compute Engine resources that might be in use by the cluster
(e.g. load balancer resources) will not be deleted if they weren't present
at the initial create time.


```js
google_container.projects.zones.clusters.delete({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * clusterId **required** `string`: The name of the cluster to delete.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.get
Gets the details of a specific cluster.


```js
google_container.projects.zones.clusters.get({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * clusterId **required** `string`: The name of the cluster to retrieve.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Cluster](#cluster)

### projects.zones.clusters.update
Updates the settings of a specific cluster.


```js
google_container.projects.zones.clusters.update({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateClusterRequest](#updateclusterrequest)
  * clusterId **required** `string`: The name of the cluster to upgrade.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.addons
Sets the addons of a specific cluster.


```js
google_container.projects.zones.clusters.addons({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [SetAddonsConfigRequest](#setaddonsconfigrequest)
  * clusterId **required** `string`: The name of the cluster to upgrade.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.legacyAbac
Enables or disables the ABAC authorization mechanism on a cluster.


```js
google_container.projects.zones.clusters.legacyAbac({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [SetLegacyAbacRequest](#setlegacyabacrequest)
  * clusterId **required** `string`: The name of the cluster to update.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.locations
Sets the locations of a specific cluster.


```js
google_container.projects.zones.clusters.locations({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [SetLocationsRequest](#setlocationsrequest)
  * clusterId **required** `string`: The name of the cluster to upgrade.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.logging
Sets the logging service of a specific cluster.


```js
google_container.projects.zones.clusters.logging({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [SetLoggingServiceRequest](#setloggingservicerequest)
  * clusterId **required** `string`: The name of the cluster to upgrade.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.master
Updates the master of a specific cluster.


```js
google_container.projects.zones.clusters.master({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateMasterRequest](#updatemasterrequest)
  * clusterId **required** `string`: The name of the cluster to upgrade.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.monitoring
Sets the monitoring service of a specific cluster.


```js
google_container.projects.zones.clusters.monitoring({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [SetMonitoringServiceRequest](#setmonitoringservicerequest)
  * clusterId **required** `string`: The name of the cluster to upgrade.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.nodePools.list
Lists the node pools for a cluster.


```js
google_container.projects.zones.clusters.nodePools.list({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * clusterId **required** `string`: The name of the cluster.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [ListNodePoolsResponse](#listnodepoolsresponse)

### projects.zones.clusters.nodePools.create
Creates a node pool for a cluster.


```js
google_container.projects.zones.clusters.nodePools.create({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [CreateNodePoolRequest](#createnodepoolrequest)
  * clusterId **required** `string`: The name of the cluster.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.nodePools.delete
Deletes a node pool from a cluster.


```js
google_container.projects.zones.clusters.nodePools.delete({
  "clusterId": "",
  "nodePoolId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * clusterId **required** `string`: The name of the cluster.
  * nodePoolId **required** `string`: The name of the node pool to delete.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.nodePools.get
Retrieves the node pool requested.


```js
google_container.projects.zones.clusters.nodePools.get({
  "clusterId": "",
  "nodePoolId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * clusterId **required** `string`: The name of the cluster.
  * nodePoolId **required** `string`: The name of the node pool.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [NodePool](#nodepool)

### projects.zones.clusters.nodePools.autoscaling
Sets the autoscaling settings of a specific node pool.


```js
google_container.projects.zones.clusters.nodePools.autoscaling({
  "clusterId": "",
  "nodePoolId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [SetNodePoolAutoscalingRequest](#setnodepoolautoscalingrequest)
  * clusterId **required** `string`: The name of the cluster to upgrade.
  * nodePoolId **required** `string`: The name of the node pool to upgrade.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.nodePools.setManagement
Sets the NodeManagement options for a node pool.


```js
google_container.projects.zones.clusters.nodePools.setManagement({
  "clusterId": "",
  "nodePoolId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [SetNodePoolManagementRequest](#setnodepoolmanagementrequest)
  * clusterId **required** `string`: The name of the cluster to update.
  * nodePoolId **required** `string`: The name of the node pool to update.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.nodePools.setSize
Sets the size of a specific node pool.


```js
google_container.projects.zones.clusters.nodePools.setSize({
  "clusterId": "",
  "nodePoolId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [SetNodePoolSizeRequest](#setnodepoolsizerequest)
  * clusterId **required** `string`: The name of the cluster to update.
  * nodePoolId **required** `string`: The name of the node pool to update.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.nodePools.update
Updates the version and/or image type of a specific node pool.


```js
google_container.projects.zones.clusters.nodePools.update({
  "clusterId": "",
  "nodePoolId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateNodePoolRequest](#updatenodepoolrequest)
  * clusterId **required** `string`: The name of the cluster to upgrade.
  * nodePoolId **required** `string`: The name of the node pool to upgrade.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.nodePools.rollback
Roll back the previously Aborted or Failed NodePool upgrade.
This will be an no-op if the last upgrade successfully completed.


```js
google_container.projects.zones.clusters.nodePools.rollback({
  "clusterId": "",
  "nodePoolId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [RollbackNodePoolUpgradeRequest](#rollbacknodepoolupgraderequest)
  * clusterId **required** `string`: The name of the cluster to rollback.
  * nodePoolId **required** `string`: The name of the node pool to rollback.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.resourceLabels
Sets labels on a cluster.


```js
google_container.projects.zones.clusters.resourceLabels({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [SetLabelsRequest](#setlabelsrequest)
  * clusterId **required** `string`: The name of the cluster.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.completeIpRotation
Completes master IP rotation.


```js
google_container.projects.zones.clusters.completeIpRotation({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [CompleteIPRotationRequest](#completeiprotationrequest)
  * clusterId **required** `string`: The name of the cluster.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.setMaintenancePolicy
Sets the maintenance policy for a cluster.


```js
google_container.projects.zones.clusters.setMaintenancePolicy({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [SetMaintenancePolicyRequest](#setmaintenancepolicyrequest)
  * clusterId **required** `string`: The name of the cluster to update.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.setMasterAuth
Used to set master auth materials. Currently supports :-
Changing the admin password of a specific cluster.
This can be either via password generation or explicitly set the password.


```js
google_container.projects.zones.clusters.setMasterAuth({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [SetMasterAuthRequest](#setmasterauthrequest)
  * clusterId **required** `string`: The name of the cluster to upgrade.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.setNetworkPolicy
Enables/Disables Network Policy for a cluster.


```js
google_container.projects.zones.clusters.setNetworkPolicy({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [SetNetworkPolicyRequest](#setnetworkpolicyrequest)
  * clusterId **required** `string`: The name of the cluster.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.clusters.startIpRotation
Start master IP rotation.


```js
google_container.projects.zones.clusters.startIpRotation({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [StartIPRotationRequest](#startiprotationrequest)
  * clusterId **required** `string`: The name of the cluster.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.operations.list
Lists all operations in a project in a specific zone or all zones.


```js
google_container.projects.zones.operations.list({
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine [zone](/compute/docs/zones#available)
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
* output [ListOperationsResponse](#listoperationsresponse)

### projects.zones.operations.get
Gets the specified operation.


```js
google_container.projects.zones.operations.get({
  "operationId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * operationId **required** `string`: The server-assigned `name` of the operation.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Operation](#operation)

### projects.zones.operations.cancel
Cancels the specified operation.


```js
google_container.projects.zones.operations.cancel({
  "operationId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [CancelOperationRequest](#canceloperationrequest)
  * operationId **required** `string`: The server-assigned `name` of the operation.
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine
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
* output [Empty](#empty)

### projects.zones.getServerconfig
Returns configuration info about the Kubernetes Engine service.


```js
google_container.projects.zones.getServerconfig({
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The Google Developers Console [project ID or project
  * zone **required** `string`: The name of the Google Compute Engine [zone](/compute/docs/zones#available)
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
* output [ServerConfig](#serverconfig)



## Definitions

### AcceleratorConfig
* AcceleratorConfig `object`: AcceleratorConfig represents a Hardware Accelerator request.
  * acceleratorCount `string`: The number of the accelerator cards exposed to an instance.
  * acceleratorType `string`: The accelerator type resource name. List of supported accelerators

### AddonsConfig
* AddonsConfig `object`: Configuration for the addons that can be automatically spun up in the
  * horizontalPodAutoscaling [HorizontalPodAutoscaling](#horizontalpodautoscaling)
  * httpLoadBalancing [HttpLoadBalancing](#httploadbalancing)
  * kubernetesDashboard [KubernetesDashboard](#kubernetesdashboard)
  * networkPolicyConfig [NetworkPolicyConfig](#networkpolicyconfig)

### AutoUpgradeOptions
* AutoUpgradeOptions `object`: AutoUpgradeOptions defines the set of options for the user to control how
  * autoUpgradeStartTime `string`: [Output only] This field is set when upgrades are about to commence
  * description `string`: [Output only] This field is set when upgrades are about to commence

### CancelOperationRequest
* CancelOperationRequest `object`: CancelOperationRequest cancels a single operation.

### CidrBlock
* CidrBlock `object`: CidrBlock contains an optional name and one CIDR block.
  * cidrBlock `string`: cidr_block must be specified in CIDR notation.
  * displayName `string`: display_name is an optional field for users to identify CIDR blocks.

### ClientCertificateConfig
* ClientCertificateConfig `object`: Configuration for client certificates on the cluster.
  * issueClientCertificate `boolean`: Issue a client certificate.

### Cluster
* Cluster `object`: A Google Kubernetes Engine cluster.
  * addonsConfig [AddonsConfig](#addonsconfig)
  * clusterIpv4Cidr `string`: The IP address range of the container pods in this cluster, in
  * createTime `string`: [Output only] The time the cluster was created, in
  * currentMasterVersion `string`: [Output only] The current software version of the master endpoint.
  * currentNodeCount `integer`: [Output only] The number of nodes currently in the cluster.
  * currentNodeVersion `string`: [Output only] The current version of the node software components.
  * description `string`: An optional description of this cluster.
  * enableKubernetesAlpha `boolean`: Kubernetes alpha features are enabled on this cluster. This includes alpha
  * endpoint `string`: [Output only] The IP address of this cluster's master endpoint.
  * expireTime `string`: [Output only] The time the cluster will be automatically
  * initialClusterVersion `string`: The initial Kubernetes version for this cluster.  Valid versions are those
  * initialNodeCount `integer`: The number of nodes to create in this cluster. You must ensure that your
  * instanceGroupUrls `array`: Deprecated. Use node_pools.instance_group_urls.
    * items `string`
  * ipAllocationPolicy [IPAllocationPolicy](#ipallocationpolicy)
  * labelFingerprint `string`: The fingerprint of the set of labels for this cluster.
  * legacyAbac [LegacyAbac](#legacyabac)
  * locations `array`: The list of Google Compute Engine
    * items `string`
  * loggingService `string`: The logging service the cluster should use to write logs.
  * maintenancePolicy [MaintenancePolicy](#maintenancepolicy)
  * masterAuth [MasterAuth](#masterauth)
  * masterAuthorizedNetworksConfig [MasterAuthorizedNetworksConfig](#masterauthorizednetworksconfig)
  * monitoringService `string`: The monitoring service the cluster should use to write metrics.
  * name `string`: The name of this cluster. The name must be unique within this project
  * network `string`: The name of the Google Compute Engine
  * networkPolicy [NetworkPolicy](#networkpolicy)
  * nodeConfig [NodeConfig](#nodeconfig)
  * nodeIpv4CidrSize `integer`: [Output only] The size of the address space on each node for hosting
  * nodePools `array`: The node pools associated with this cluster.
    * items [NodePool](#nodepool)
  * resourceLabels `object`: The resource labels for the cluster to use to annotate any related
  * selfLink `string`: [Output only] Server-defined URL for the resource.
  * servicesIpv4Cidr `string`: [Output only] The IP address range of the Kubernetes services in
  * status `string` (values: STATUS_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR): [Output only] The current status of this cluster.
  * statusMessage `string`: [Output only] Additional information about the current status of this
  * subnetwork `string`: The name of the Google Compute Engine
  * zone `string`: [Output only] The name of the Google Compute Engine

### ClusterUpdate
* ClusterUpdate `object`: ClusterUpdate describes an update to the cluster. Exactly one update can
  * desiredAddonsConfig [AddonsConfig](#addonsconfig)
  * desiredImageType `string`: The desired image type for the node pool.
  * desiredLocations `array`: The desired list of Google Compute Engine
    * items `string`
  * desiredMasterAuthorizedNetworksConfig [MasterAuthorizedNetworksConfig](#masterauthorizednetworksconfig)
  * desiredMasterVersion `string`: The Kubernetes version to change the master to. The only valid value is the
  * desiredMonitoringService `string`: The monitoring service the cluster should use to write metrics.
  * desiredNodePoolAutoscaling [NodePoolAutoscaling](#nodepoolautoscaling)
  * desiredNodePoolId `string`: The node pool to be upgraded. This field is mandatory if
  * desiredNodeVersion `string`: The Kubernetes version to change the nodes to (typically an

### CompleteIPRotationRequest
* CompleteIPRotationRequest `object`: CompleteIPRotationRequest moves the cluster master back into single-IP mode.

### CreateClusterRequest
* CreateClusterRequest `object`: CreateClusterRequest creates a cluster.
  * cluster [Cluster](#cluster)

### CreateNodePoolRequest
* CreateNodePoolRequest `object`: CreateNodePoolRequest creates a node pool for a cluster.
  * nodePool [NodePool](#nodepool)

### DailyMaintenanceWindow
* DailyMaintenanceWindow `object`: Time window specified for daily maintenance operations.
  * duration `string`: [Output only] Duration of the time window, automatically chosen to be
  * startTime `string`: Time within the maintenance window to start the maintenance operations.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### HorizontalPodAutoscaling
* HorizontalPodAutoscaling `object`: Configuration options for the horizontal pod autoscaling feature, which
  * disabled `boolean`: Whether the Horizontal Pod Autoscaling feature is enabled in the cluster.

### HttpLoadBalancing
* HttpLoadBalancing `object`: Configuration options for the HTTP (L7) load balancing controller addon,
  * disabled `boolean`: Whether the HTTP Load Balancing controller is enabled in the cluster.

### IPAllocationPolicy
* IPAllocationPolicy `object`: Configuration for controlling how IPs are allocated in the cluster.
  * clusterIpv4Cidr `string`: This field is deprecated, use cluster_ipv4_cidr_block.
  * clusterIpv4CidrBlock `string`: The IP address range for the cluster pod IPs. If this field is set, then
  * clusterSecondaryRangeName `string`: The name of the secondary range to be used for the cluster CIDR
  * createSubnetwork `boolean`: Whether a new subnetwork will be created automatically for the cluster.
  * nodeIpv4Cidr `string`: This field is deprecated, use node_ipv4_cidr_block.
  * nodeIpv4CidrBlock `string`: The IP address range of the instance IPs in this cluster.
  * servicesIpv4Cidr `string`: This field is deprecated, use services_ipv4_cidr_block.
  * servicesIpv4CidrBlock `string`: The IP address range of the services IPs in this cluster. If blank, a range
  * servicesSecondaryRangeName `string`: The name of the secondary range to be used as for the services
  * subnetworkName `string`: A custom subnetwork name to be used if `create_subnetwork` is true.  If
  * useIpAliases `boolean`: Whether alias IPs will be used for pod IPs in the cluster.

### KubernetesDashboard
* KubernetesDashboard `object`: Configuration for the Kubernetes Dashboard.
  * disabled `boolean`: Whether the Kubernetes Dashboard is enabled for this cluster.

### LegacyAbac
* LegacyAbac `object`: Configuration for the legacy Attribute Based Access Control authorization
  * enabled `boolean`: Whether the ABAC authorizer is enabled for this cluster. When enabled,

### ListClustersResponse
* ListClustersResponse `object`: ListClustersResponse is the result of ListClustersRequest.
  * clusters `array`: A list of clusters in the project in the specified zone, or
    * items [Cluster](#cluster)
  * missingZones `array`: If any zones are listed here, the list of clusters returned
    * items `string`

### ListNodePoolsResponse
* ListNodePoolsResponse `object`: ListNodePoolsResponse is the result of ListNodePoolsRequest.
  * nodePools `array`: A list of node pools for a cluster.
    * items [NodePool](#nodepool)

### ListOperationsResponse
* ListOperationsResponse `object`: ListOperationsResponse is the result of ListOperationsRequest.
  * missingZones `array`: If any zones are listed here, the list of operations returned
    * items `string`
  * operations `array`: A list of operations in the project in the specified zone.
    * items [Operation](#operation)

### MaintenancePolicy
* MaintenancePolicy `object`: MaintenancePolicy defines the maintenance policy to be used for the cluster.
  * window [MaintenanceWindow](#maintenancewindow)

### MaintenanceWindow
* MaintenanceWindow `object`: MaintenanceWindow defines the maintenance window to be used for the cluster.
  * dailyMaintenanceWindow [DailyMaintenanceWindow](#dailymaintenancewindow)

### MasterAuth
* MasterAuth `object`: The authentication information for accessing the master endpoint.
  * clientCertificate `string`: [Output only] Base64-encoded public certificate used by clients to
  * clientCertificateConfig [ClientCertificateConfig](#clientcertificateconfig)
  * clientKey `string`: [Output only] Base64-encoded private key used by clients to authenticate
  * clusterCaCertificate `string`: [Output only] Base64-encoded public certificate that is the root of
  * password `string`: The password to use for HTTP basic authentication to the master endpoint.
  * username `string`: The username to use for HTTP basic authentication to the master endpoint.

### MasterAuthorizedNetworksConfig
* MasterAuthorizedNetworksConfig `object`: Master authorized networks is a Beta feature.
  * cidrBlocks `array`: cidr_blocks define up to 10 external networks that could access
    * items [CidrBlock](#cidrblock)
  * enabled `boolean`: Whether or not master authorized networks is enabled.

### NetworkPolicy
* NetworkPolicy `object`: Configuration options for the NetworkPolicy feature.
  * enabled `boolean`: Whether network policy is enabled on the cluster.
  * provider `string` (values: PROVIDER_UNSPECIFIED, CALICO): The selected network policy provider.

### NetworkPolicyConfig
* NetworkPolicyConfig `object`: Configuration for NetworkPolicy. This only tracks whether the addon
  * disabled `boolean`: Whether NetworkPolicy is enabled for this cluster.

### NodeConfig
* NodeConfig `object`: Parameters that describe the nodes in a cluster.
  * accelerators `array`: A list of hardware accelerators to be attached to each node.
    * items [AcceleratorConfig](#acceleratorconfig)
  * diskSizeGb `integer`: Size of the disk attached to each node, specified in GB.
  * imageType `string`: The image type to use for this node. Note that for a given image type,
  * labels `object`: The map of Kubernetes labels (key/value pairs) to be applied to each node.
  * localSsdCount `integer`: The number of local SSD disks to be attached to the node.
  * machineType `string`: The name of a Google Compute Engine [machine
  * metadata `object`: The metadata key/value pairs assigned to instances in the cluster.
  * minCpuPlatform `string`: Minimum CPU platform to be used by this instance. The instance may be
  * oauthScopes `array`: The set of Google API scopes to be made available on all of the
    * items `string`
  * preemptible `boolean`: Whether the nodes are created as preemptible VM instances. See:
  * serviceAccount `string`: The Google Cloud Platform Service Account to be used by the node VMs. If
  * tags `array`: The list of instance tags applied to all nodes. Tags are used to identify
    * items `string`

### NodeManagement
* NodeManagement `object`: NodeManagement defines the set of node management services turned on for the
  * autoRepair `boolean`: A flag that specifies whether the node auto-repair is enabled for the node
  * autoUpgrade `boolean`: A flag that specifies whether node auto-upgrade is enabled for the node
  * upgradeOptions [AutoUpgradeOptions](#autoupgradeoptions)

### NodePool
* NodePool `object`: NodePool contains the name and configuration for a cluster's node pool.
  * autoscaling [NodePoolAutoscaling](#nodepoolautoscaling)
  * config [NodeConfig](#nodeconfig)
  * initialNodeCount `integer`: The initial node count for the pool. You must ensure that your
  * instanceGroupUrls `array`: [Output only] The resource URLs of the [managed instance
    * items `string`
  * management [NodeManagement](#nodemanagement)
  * name `string`: The name of the node pool.
  * selfLink `string`: [Output only] Server-defined URL for the resource.
  * status `string` (values: STATUS_UNSPECIFIED, PROVISIONING, RUNNING, RUNNING_WITH_ERROR, RECONCILING, STOPPING, ERROR): [Output only] The status of the nodes in this pool instance.
  * statusMessage `string`: [Output only] Additional information about the current status of this
  * version `string`: The version of the Kubernetes of this node.

### NodePoolAutoscaling
* NodePoolAutoscaling `object`: NodePoolAutoscaling contains information required by cluster autoscaler to
  * enabled `boolean`: Is autoscaling enabled for this node pool.
  * maxNodeCount `integer`: Maximum number of nodes in the NodePool. Must be >= min_node_count. There
  * minNodeCount `integer`: Minimum number of nodes in the NodePool. Must be >= 1 and <=

### Operation
* Operation `object`: This operation resource represents operations that may have happened or are
  * detail `string`: Detailed operation progress, if available.
  * endTime `string`: [Output only] The time the operation completed, in
  * name `string`: The server-assigned ID for the operation.
  * operationType `string` (values: TYPE_UNSPECIFIED, CREATE_CLUSTER, DELETE_CLUSTER, UPGRADE_MASTER, UPGRADE_NODES, REPAIR_CLUSTER, UPDATE_CLUSTER, CREATE_NODE_POOL, DELETE_NODE_POOL, SET_NODE_POOL_MANAGEMENT, AUTO_REPAIR_NODES, AUTO_UPGRADE_NODES, SET_LABELS, SET_MASTER_AUTH, SET_NODE_POOL_SIZE, SET_NETWORK_POLICY, SET_MAINTENANCE_POLICY): The operation type.
  * selfLink `string`: Server-defined URL for the resource.
  * startTime `string`: [Output only] The time the operation started, in
  * status `string` (values: STATUS_UNSPECIFIED, PENDING, RUNNING, DONE, ABORTING): The current status of the operation.
  * statusMessage `string`: If an error has occurred, a textual description of the error.
  * targetLink `string`: Server-defined URL for the target of the operation.
  * zone `string`: The name of the Google Compute Engine

### RollbackNodePoolUpgradeRequest
* RollbackNodePoolUpgradeRequest `object`: RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed

### ServerConfig
* ServerConfig `object`: Kubernetes Engine service configuration.
  * defaultClusterVersion `string`: Version of Kubernetes the service deploys by default.
  * defaultImageType `string`: Default image type.
  * validImageTypes `array`: List of valid image types.
    * items `string`
  * validMasterVersions `array`: List of valid master versions.
    * items `string`
  * validNodeVersions `array`: List of valid node upgrade target versions.
    * items `string`

### SetAddonsConfigRequest
* SetAddonsConfigRequest `object`: SetAddonsConfigRequest sets the addons associated with the cluster.
  * addonsConfig [AddonsConfig](#addonsconfig)

### SetLabelsRequest
* SetLabelsRequest `object`: SetLabelsRequest sets the Google Cloud Platform labels on a Google Container
  * labelFingerprint `string`: The fingerprint of the previous set of labels for this resource,
  * resourceLabels `object`: The labels to set for that cluster.

### SetLegacyAbacRequest
* SetLegacyAbacRequest `object`: SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for
  * enabled `boolean`: Whether ABAC authorization will be enabled in the cluster.

### SetLocationsRequest
* SetLocationsRequest `object`: SetLocationsRequest sets the locations of the cluster.
  * locations `array`: The desired list of Google Compute Engine
    * items `string`

### SetLoggingServiceRequest
* SetLoggingServiceRequest `object`: SetLoggingServiceRequest sets the logging service of a cluster.
  * loggingService `string`: The logging service the cluster should use to write metrics.

### SetMaintenancePolicyRequest
* SetMaintenancePolicyRequest `object`: SetMaintenancePolicyRequest sets the maintenance policy for a cluster.
  * maintenancePolicy [MaintenancePolicy](#maintenancepolicy)

### SetMasterAuthRequest
* SetMasterAuthRequest `object`: SetMasterAuthRequest updates the admin password of a cluster.
  * action `string` (values: UNKNOWN, SET_PASSWORD, GENERATE_PASSWORD, SET_USERNAME): The exact form of action to be taken on the master auth.
  * update [MasterAuth](#masterauth)

### SetMonitoringServiceRequest
* SetMonitoringServiceRequest `object`: SetMonitoringServiceRequest sets the monitoring service of a cluster.
  * monitoringService `string`: The monitoring service the cluster should use to write metrics.

### SetNetworkPolicyRequest
* SetNetworkPolicyRequest `object`: SetNetworkPolicyRequest enables/disables network policy for a cluster.
  * networkPolicy [NetworkPolicy](#networkpolicy)

### SetNodePoolAutoscalingRequest
* SetNodePoolAutoscalingRequest `object`: SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.
  * autoscaling [NodePoolAutoscaling](#nodepoolautoscaling)

### SetNodePoolManagementRequest
* SetNodePoolManagementRequest `object`: SetNodePoolManagementRequest sets the node management properties of a node
  * management [NodeManagement](#nodemanagement)

### SetNodePoolSizeRequest
* SetNodePoolSizeRequest `object`: SetNodePoolSizeRequest sets the size a node
  * nodeCount `integer`: The desired node count for the pool.

### StartIPRotationRequest
* StartIPRotationRequest `object`: StartIPRotationRequest creates a new IP for the cluster and then performs

### UpdateClusterRequest
* UpdateClusterRequest `object`: UpdateClusterRequest updates the settings of a cluster.
  * update [ClusterUpdate](#clusterupdate)

### UpdateMasterRequest
* UpdateMasterRequest `object`: UpdateMasterRequest updates the master of the cluster.
  * masterVersion `string`: The Kubernetes version to change the master to. Use "-" to have the server

### UpdateNodePoolRequest
* UpdateNodePoolRequest `object`: UpdateNodePoolRequests update a node pool's image and/or version.
  * imageType `string`: The desired image type for the node pool.
  * nodeVersion `string`: The Kubernetes version to change the nodes to (typically an


