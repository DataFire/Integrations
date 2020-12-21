# @datafire/google_container

Client library for Kubernetes Engine API

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

.then(data => {
  console.log(data);
});
```

## Description

Builds and manages container-based applications, powered by the open source Kubernetes technology.

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

### container.projects.zones.clusters.list
Lists all clusters owned by a project in either the specified zone or all zones.


```js
google_container.container.projects.zones.clusters.list({
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
  * parent `string`: The parent (project and location) where the clusters will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions.
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
* output [ListClustersResponse](#listclustersresponse)

### container.projects.zones.clusters.create
Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.


```js
google_container.container.projects.zones.clusters.create({
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
  * body [CreateClusterRequest](#createclusterrequest)
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

### container.projects.zones.clusters.delete
Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.


```js
google_container.container.projects.zones.clusters.delete({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/*/locations/*/clusters/*`.
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

### container.projects.zones.clusters.get
Gets the details for a specific cluster.


```js
google_container.container.projects.zones.clusters.get({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*/locations/*/clusters/*`.
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
* output [Cluster](#cluster)

### container.projects.zones.clusters.update
Updates the settings for a specific cluster.


```js
google_container.container.projects.zones.clusters.update({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * body [UpdateClusterRequest](#updateclusterrequest)
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

### container.projects.zones.clusters.addons
Sets the addons for a specific cluster.


```js
google_container.container.projects.zones.clusters.addons({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * body [SetAddonsConfigRequest](#setaddonsconfigrequest)
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

### container.projects.zones.clusters.legacyAbac
Enables or disables the ABAC authorization mechanism on a cluster.


```js
google_container.container.projects.zones.clusters.legacyAbac({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
  * body [SetLegacyAbacRequest](#setlegacyabacrequest)
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

### container.projects.zones.clusters.locations
Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.


```js
google_container.container.projects.zones.clusters.locations({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * body [SetLocationsRequest](#setlocationsrequest)
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

### container.projects.zones.clusters.logging
Sets the logging service for a specific cluster.


```js
google_container.container.projects.zones.clusters.logging({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * body [SetLoggingServiceRequest](#setloggingservicerequest)
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

### container.projects.zones.clusters.master
Updates the master for a specific cluster.


```js
google_container.container.projects.zones.clusters.master({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * body [UpdateMasterRequest](#updatemasterrequest)
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

### container.projects.zones.clusters.monitoring
Sets the monitoring service for a specific cluster.


```js
google_container.container.projects.zones.clusters.monitoring({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * body [SetMonitoringServiceRequest](#setmonitoringservicerequest)
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

### container.projects.zones.clusters.nodePools.list
Lists the node pools for a cluster.


```js
google_container.container.projects.zones.clusters.nodePools.list({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
  * parent `string`: The parent (project, location, cluster id) where the node pools will be listed. Specified in the format `projects/*/locations/*/clusters/*`.
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
* output [ListNodePoolsResponse](#listnodepoolsresponse)

### container.projects.zones.clusters.nodePools.create
Creates a node pool for a cluster.


```js
google_container.container.projects.zones.clusters.nodePools.create({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
  * body [CreateNodePoolRequest](#createnodepoolrequest)
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

### container.projects.zones.clusters.nodePools.delete
Deletes a node pool from a cluster.


```js
google_container.container.projects.zones.clusters.nodePools.delete({
  "projectId": "",
  "zone": "",
  "clusterId": "",
  "nodePoolId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
  * nodePoolId **required** `string`: Required. Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.
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

### container.projects.zones.clusters.nodePools.get
Retrieves the requested node pool.


```js
google_container.container.projects.zones.clusters.nodePools.get({
  "projectId": "",
  "zone": "",
  "clusterId": "",
  "nodePoolId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
  * nodePoolId **required** `string`: Required. Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.
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
* output [NodePool](#nodepool)

### container.projects.zones.clusters.nodePools.autoscaling
Sets the autoscaling settings of a specific node pool.


```js
google_container.container.projects.zones.clusters.nodePools.autoscaling({
  "projectId": "",
  "zone": "",
  "clusterId": "",
  "nodePoolId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * nodePoolId **required** `string`: Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
  * body [SetNodePoolAutoscalingRequest](#setnodepoolautoscalingrequest)
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

### container.projects.zones.clusters.nodePools.setManagement
Sets the NodeManagement options for a node pool.


```js
google_container.container.projects.zones.clusters.nodePools.setManagement({
  "projectId": "",
  "zone": "",
  "clusterId": "",
  "nodePoolId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
  * nodePoolId **required** `string`: Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
  * body [SetNodePoolManagementRequest](#setnodepoolmanagementrequest)
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

### container.projects.zones.clusters.nodePools.setSize
SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.


```js
google_container.container.projects.zones.clusters.nodePools.setSize({
  "projectId": "",
  "zone": "",
  "clusterId": "",
  "nodePoolId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
  * nodePoolId **required** `string`: Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
  * body [SetNodePoolSizeRequest](#setnodepoolsizerequest)
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

### container.projects.zones.clusters.nodePools.update
Updates the version and/or image type of a specific node pool.


```js
google_container.container.projects.zones.clusters.nodePools.update({
  "projectId": "",
  "zone": "",
  "clusterId": "",
  "nodePoolId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * nodePoolId **required** `string`: Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
  * body [UpdateNodePoolRequest](#updatenodepoolrequest)
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

### container.projects.zones.clusters.nodePools.rollback
Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.


```js
google_container.container.projects.zones.clusters.nodePools.rollback({
  "projectId": "",
  "zone": "",
  "clusterId": "",
  "nodePoolId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.
  * nodePoolId **required** `string`: Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.
  * body [RollbackNodePoolUpgradeRequest](#rollbacknodepoolupgraderequest)
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

### container.projects.zones.clusters.resourceLabels
Sets labels on a cluster.


```js
google_container.container.projects.zones.clusters.resourceLabels({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
  * body [SetLabelsRequest](#setlabelsrequest)
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

### container.projects.zones.clusters.completeIpRotation
Completes master IP rotation.


```js
google_container.container.projects.zones.clusters.completeIpRotation({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
  * body [CompleteIPRotationRequest](#completeiprotationrequest)
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

### container.projects.zones.clusters.setMaintenancePolicy
Sets the maintenance policy for a cluster.


```js
google_container.container.projects.zones.clusters.setMaintenancePolicy({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
  * zone **required** `string`: Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides.
  * clusterId **required** `string`: Required. The name of the cluster to update.
  * body [SetMaintenancePolicyRequest](#setmaintenancepolicyrequest)
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

### container.projects.zones.clusters.setMasterAuth
Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.


```js
google_container.container.projects.zones.clusters.setMasterAuth({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * body [SetMasterAuthRequest](#setmasterauthrequest)
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

### container.projects.zones.clusters.setNetworkPolicy
Enables or disables Network Policy for a cluster.


```js
google_container.container.projects.zones.clusters.setNetworkPolicy({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
  * body [SetNetworkPolicyRequest](#setnetworkpolicyrequest)
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

### container.projects.zones.clusters.startIpRotation
Starts master IP rotation.


```js
google_container.container.projects.zones.clusters.startIpRotation({
  "projectId": "",
  "zone": "",
  "clusterId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * clusterId **required** `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
  * body [StartIPRotationRequest](#startiprotationrequest)
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

### container.projects.zones.operations.list
Lists all operations in a project in the specified zone or all zones.


```js
google_container.container.projects.zones.operations.list({
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
  * parent `string`: The parent (project and location) where the operations will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions.
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

### container.projects.zones.operations.get
Gets the specified operation.


```js
google_container.container.projects.zones.operations.get({
  "projectId": "",
  "zone": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
  * operationId **required** `string`: Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project, location, operation id) of the operation to get. Specified in the format `projects/*/locations/*/operations/*`.
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

### container.projects.zones.operations.cancel
Cancels the specified operation.


```js
google_container.container.projects.zones.operations.cancel({
  "projectId": "",
  "zone": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.
  * operationId **required** `string`: Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
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

### container.projects.zones.getServerconfig
Returns configuration info about the Google Kubernetes Engine service.


```js
google_container.container.projects.zones.getServerconfig({
  "projectId": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone **required** `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project and location) of the server config to get, specified in the format `projects/*/locations/*`.
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
* output [ServerConfig](#serverconfig)

### container.projects.locations.clusters.nodePools.delete
Deletes a node pool from a cluster.


```js
google_container.container.projects.locations.clusters.nodePools.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.
  * clusterId `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
  * nodePoolId `string`: Required. Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
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

### container.projects.locations.operations.get
Gets the specified operation.


```js
google_container.container.projects.locations.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, operation id) of the operation to get. Specified in the format `projects/*/locations/*/operations/*`.
  * operationId `string`: Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
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

### container.projects.locations.clusters.nodePools.update
Updates the version and/or image type of a specific node pool.


```js
google_container.container.projects.locations.clusters.nodePools.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.
  * body [UpdateNodePoolRequest](#updatenodepoolrequest)
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

### container.projects.locations.getServerConfig
Returns configuration info about the Google Kubernetes Engine service.


```js
google_container.container.projects.locations.getServerConfig({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project and location) of the server config to get, specified in the format `projects/*/locations/*`.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.
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
* output [ServerConfig](#serverconfig)

### container.projects.locations.operations.cancel
Cancels the specified operation.


```js
google_container.container.projects.locations.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/*/locations/*/operations/*`.
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

### container.projects.locations.clusters.completeIpRotation
Completes master IP rotation.


```js
google_container.container.projects.locations.clusters.completeIpRotation({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster id) of the cluster to complete IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.
  * body [CompleteIPRotationRequest](#completeiprotationrequest)
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

### container.projects.locations.clusters.nodePools.rollback
Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.


```js
google_container.container.projects.locations.clusters.nodePools.rollback({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.
  * body [RollbackNodePoolUpgradeRequest](#rollbacknodepoolupgraderequest)
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

### container.projects.locations.clusters.setAddons
Sets the addons for a specific cluster.


```js
google_container.container.projects.locations.clusters.setAddons({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/*/locations/*/clusters/*`.
  * body [SetAddonsConfigRequest](#setaddonsconfigrequest)
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

### container.projects.locations.clusters.nodePools.setAutoscaling
Sets the autoscaling settings of a specific node pool.


```js
google_container.container.projects.locations.clusters.nodePools.setAutoscaling({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.
  * body [SetNodePoolAutoscalingRequest](#setnodepoolautoscalingrequest)
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

### container.projects.locations.clusters.setLegacyAbac
Enables or disables the ABAC authorization mechanism on a cluster.


```js
google_container.container.projects.locations.clusters.setLegacyAbac({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster id) of the cluster to set legacy abac. Specified in the format `projects/*/locations/*/clusters/*`.
  * body [SetLegacyAbacRequest](#setlegacyabacrequest)
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

### container.projects.locations.clusters.setLocations
Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.


```js
google_container.container.projects.locations.clusters.setLocations({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/*/locations/*/clusters/*`.
  * body [SetLocationsRequest](#setlocationsrequest)
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

### container.projects.locations.clusters.setLogging
Sets the logging service for a specific cluster.


```js
google_container.container.projects.locations.clusters.setLogging({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/*/locations/*/clusters/*`.
  * body [SetLoggingServiceRequest](#setloggingservicerequest)
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

### container.projects.locations.clusters.setMaintenancePolicy
Sets the maintenance policy for a cluster.


```js
google_container.container.projects.locations.clusters.setMaintenancePolicy({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster id) of the cluster to set maintenance policy. Specified in the format `projects/*/locations/*/clusters/*`.
  * body [SetMaintenancePolicyRequest](#setmaintenancepolicyrequest)
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

### container.projects.locations.clusters.nodePools.setManagement
Sets the NodeManagement options for a node pool.


```js
google_container.container.projects.locations.clusters.nodePools.setManagement({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.
  * body [SetNodePoolManagementRequest](#setnodepoolmanagementrequest)
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

### container.projects.locations.clusters.setMasterAuth
Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.


```js
google_container.container.projects.locations.clusters.setMasterAuth({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/*/locations/*/clusters/*`.
  * body [SetMasterAuthRequest](#setmasterauthrequest)
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

### container.projects.locations.clusters.setMonitoring
Sets the monitoring service for a specific cluster.


```js
google_container.container.projects.locations.clusters.setMonitoring({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/*/locations/*/clusters/*`.
  * body [SetMonitoringServiceRequest](#setmonitoringservicerequest)
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

### container.projects.locations.clusters.setNetworkPolicy
Enables or disables Network Policy for a cluster.


```js
google_container.container.projects.locations.clusters.setNetworkPolicy({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster id) of the cluster to set networking policy. Specified in the format `projects/*/locations/*/clusters/*`.
  * body [SetNetworkPolicyRequest](#setnetworkpolicyrequest)
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

### container.projects.locations.clusters.setResourceLabels
Sets labels on a cluster.


```js
google_container.container.projects.locations.clusters.setResourceLabels({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster id) of the cluster to set labels. Specified in the format `projects/*/locations/*/clusters/*`.
  * body [SetLabelsRequest](#setlabelsrequest)
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

### container.projects.locations.clusters.nodePools.setSize
SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.


```js
google_container.container.projects.locations.clusters.nodePools.setSize({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.
  * body [SetNodePoolSizeRequest](#setnodepoolsizerequest)
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

### container.projects.locations.clusters.startIpRotation
Starts master IP rotation.


```js
google_container.container.projects.locations.clusters.startIpRotation({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster id) of the cluster to start IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.
  * body [StartIPRotationRequest](#startiprotationrequest)
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

### container.projects.locations.clusters.updateMaster
Updates the master for a specific cluster.


```js
google_container.container.projects.locations.clusters.updateMaster({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`.
  * body [UpdateMasterRequest](#updatemasterrequest)
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

### v1beta1.parent..well_known.openid_configuration.get
Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.


```js
google_container.v1beta1.parent..well_known.openid_configuration.get({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The cluster (project, location, cluster id) to get the discovery document for. Specified in the format `projects/*/locations/*/clusters/*`.
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
* output [GetOpenIDConfigResponse](#getopenidconfigresponse)

### container.projects.aggregated.usableSubnetworks.list
Lists subnetworks that can be used for creating clusters in a project.


```js
google_container.container.projects.aggregated.usableSubnetworks.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent project where subnetworks are usable. Specified in the format `projects/*`.
  * filter `string`: Filtering currently only supports equality on the networkProjectId and must be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId` is the project which owns the listed subnetworks. This defaults to the parent project ID.
  * pageSize `integer`: The max number of results per page that should be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be used to get the next page of results in subsequent requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
  * pageToken `string`: Specifies a page token to use. Set this to the nextPageToken returned by previous list requests to get the next page of results.
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
* output [ListUsableSubnetworksResponse](#listusablesubnetworksresponse)

### container.projects.locations.clusters.list
Lists all clusters owned by a project in either the specified zone or all zones.


```js
google_container.container.projects.locations.clusters.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The parent (project and location) where the clusters will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.
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
* output [ListClustersResponse](#listclustersresponse)

### container.projects.locations.clusters.create
Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.


```js
google_container.container.projects.locations.clusters.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The parent (project and location) where the cluster will be created. Specified in the format `projects/*/locations/*`.
  * body [CreateClusterRequest](#createclusterrequest)
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

### container.projects.locations.clusters.getJwks
Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.


```js
google_container.container.projects.locations.clusters.getJwks({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The cluster (project, location, cluster id) to get keys for. Specified in the format `projects/*/locations/*/clusters/*`.
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
* output [GetJSONWebKeysResponse](#getjsonwebkeysresponse)

### container.projects.locations.list
Fetches locations that offer Google Kubernetes Engine.


```js
google_container.container.projects.locations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Contains the name of the resource requested. Specified in the format `projects/*`.
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

### container.projects.locations.clusters.nodePools.list
Lists the node pools for a cluster.


```js
google_container.container.projects.locations.clusters.nodePools.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The parent (project, location, cluster id) where the node pools will be listed. Specified in the format `projects/*/locations/*/clusters/*`.
  * clusterId `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
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
* output [ListNodePoolsResponse](#listnodepoolsresponse)

### container.projects.locations.clusters.nodePools.create
Creates a node pool for a cluster.


```js
google_container.container.projects.locations.clusters.nodePools.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The parent (project, location, cluster id) where the node pool will be created. Specified in the format `projects/*/locations/*/clusters/*`.
  * body [CreateNodePoolRequest](#createnodepoolrequest)
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

### container.projects.locations.operations.list
Lists all operations in a project in the specified zone or all zones.


```js
google_container.container.projects.locations.operations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The parent (project and location) where the operations will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.
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



## Definitions

### AcceleratorConfig
* AcceleratorConfig `object`: AcceleratorConfig represents a Hardware Accelerator request.
  * acceleratorCount `string`: The number of the accelerator cards exposed to an instance.
  * acceleratorType `string`: The accelerator type resource name. List of supported accelerators [here](https://cloud.google.com/compute/docs/gpus)

### AddonsConfig
* AddonsConfig `object`: Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
  * cloudRunConfig [CloudRunConfig](#cloudrunconfig)
  * configConnectorConfig [ConfigConnectorConfig](#configconnectorconfig)
  * dnsCacheConfig [DnsCacheConfig](#dnscacheconfig)
  * gcePersistentDiskCsiDriverConfig [GcePersistentDiskCsiDriverConfig](#gcepersistentdiskcsidriverconfig)
  * horizontalPodAutoscaling [HorizontalPodAutoscaling](#horizontalpodautoscaling)
  * httpLoadBalancing [HttpLoadBalancing](#httploadbalancing)
  * istioConfig [IstioConfig](#istioconfig)
  * kalmConfig [KalmConfig](#kalmconfig)
  * kubernetesDashboard [KubernetesDashboard](#kubernetesdashboard)
  * networkPolicyConfig [NetworkPolicyConfig](#networkpolicyconfig)

### AuthenticatorGroupsConfig
* AuthenticatorGroupsConfig `object`: Configuration for returning group information from authenticators.
  * enabled `boolean`: Whether this cluster should return group membership lookups during authentication using a group of security groups.
  * securityGroup `string`: The name of the security group-of-groups to be used. Only relevant if enabled = true.

### AutoUpgradeOptions
* AutoUpgradeOptions `object`: AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed.
  * autoUpgradeStartTime `string`: [Output only] This field is set when upgrades are about to commence with the approximate start time for the upgrades, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
  * description `string`: [Output only] This field is set when upgrades are about to commence with the description of the upgrade.

### AutoprovisioningNodePoolDefaults
* AutoprovisioningNodePoolDefaults `object`: AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.
  * bootDiskKmsKey `string`:  The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption
  * diskSizeGb `integer`: Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB.
  * diskType `string`: Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard'
  * management [NodeManagement](#nodemanagement)
  * minCpuPlatform `string`: Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as `minCpuPlatform: "Intel Haswell"` or `minCpuPlatform: "Intel Sandy Bridge"`. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) To unset the min cpu platform field pass "automatic" as field value.
  * oauthScopes `array`: The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Google Container Registry](https://cloud.google.com/container-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added.
    * items `string`
  * serviceAccount `string`: The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used.
  * shieldedInstanceConfig [ShieldedInstanceConfig](#shieldedinstanceconfig)
  * upgradeSettings [UpgradeSettings](#upgradesettings)

### AvailableVersion
* AvailableVersion `object`: Deprecated.
  * reason `string`: Reason for availability.
  * version `string`: Kubernetes version.

### BigQueryDestination
* BigQueryDestination `object`: Parameters for using BigQuery as the destination of resource usage export.
  * datasetId `string`: The ID of a BigQuery Dataset.

### BinaryAuthorization
* BinaryAuthorization `object`: Configuration for Binary Authorization.
  * enabled `boolean`: Enable Binary Authorization for this cluster. If enabled, all container images will be validated by Google Binauthz.

### CancelOperationRequest
* CancelOperationRequest `object`: CancelOperationRequest cancels a single operation.
  * name `string`: The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/*/locations/*/operations/*`.
  * operationId `string`: Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.

### CidrBlock
* CidrBlock `object`: CidrBlock contains an optional name and one CIDR block.
  * cidrBlock `string`: cidr_block must be specified in CIDR notation.
  * displayName `string`: display_name is an optional field for users to identify CIDR blocks.

### ClientCertificateConfig
* ClientCertificateConfig `object`: Configuration for client certificates on the cluster.
  * issueClientCertificate `boolean`: Issue a client certificate.

### CloudRunConfig
* CloudRunConfig `object`: Configuration options for the Cloud Run feature.
  * disabled `boolean`: Whether Cloud Run addon is enabled for this cluster.
  * loadBalancerType `string` (values: LOAD_BALANCER_TYPE_UNSPECIFIED, LOAD_BALANCER_TYPE_EXTERNAL, LOAD_BALANCER_TYPE_INTERNAL): Which load balancer type is installed for Cloud Run.

### Cluster
* Cluster `object`: A Google Kubernetes Engine cluster.
  * addonsConfig [AddonsConfig](#addonsconfig)
  * authenticatorGroupsConfig [AuthenticatorGroupsConfig](#authenticatorgroupsconfig)
  * autoscaling [ClusterAutoscaling](#clusterautoscaling)
  * binaryAuthorization [BinaryAuthorization](#binaryauthorization)
  * clusterIpv4Cidr `string`: The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.
  * clusterTelemetry [ClusterTelemetry](#clustertelemetry)
  * conditions `array`: Which conditions caused the current cluster state.
    * items [StatusCondition](#statuscondition)
  * confidentialNodes [ConfidentialNodes](#confidentialnodes)
  * createTime `string`: [Output only] The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
  * currentMasterVersion `string`: [Output only] The current software version of the master endpoint.
  * currentNodeCount `integer`: [Output only] The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information.
  * currentNodeVersion `string`: [Output only] Deprecated, use [NodePool.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes.
  * databaseEncryption [DatabaseEncryption](#databaseencryption)
  * defaultMaxPodsConstraint [MaxPodsConstraint](#maxpodsconstraint)
  * description `string`: An optional description of this cluster.
  * enableKubernetesAlpha `boolean`: Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1beta1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation.
  * enableTpu `boolean`: Enable the ability to use Cloud TPUs in this cluster. This field is deprecated, use tpu_config.enabled instead.
  * endpoint `string`: [Output only] The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information.
  * expireTime `string`: [Output only] The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
  * initialClusterVersion `string`: The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version
  * initialNodeCount `integer`: The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead.
  * instanceGroupUrls `array`: Deprecated. Use node_pools.instance_group_urls.
    * items `string`
  * ipAllocationPolicy [IPAllocationPolicy](#ipallocationpolicy)
  * labelFingerprint `string`: The fingerprint of the set of labels for this cluster.
  * legacyAbac [LegacyAbac](#legacyabac)
  * location `string`: [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.
  * locations `array`: The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed.
    * items `string`
  * loggingService `string`: The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.
  * maintenancePolicy [MaintenancePolicy](#maintenancepolicy)
  * master [Master](#master)
  * masterAuth [MasterAuth](#masterauth)
  * masterAuthorizedNetworksConfig [MasterAuthorizedNetworksConfig](#masterauthorizednetworksconfig)
  * masterIpv4CidrBlock `string`: The IP prefix in CIDR notation to use for the hosted master network. This prefix will be used for assigning private IP addresses to the master or set of masters, as well as the ILB VIP. This field is deprecated, use private_cluster_config.master_ipv4_cidr_block instead.
  * monitoringService `string`: The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
  * name `string`: The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.
  * network `string`: The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used. On output this shows the network ID instead of the name.
  * networkConfig [NetworkConfig](#networkconfig)
  * networkPolicy [NetworkPolicy](#networkpolicy)
  * nodeConfig [NodeConfig](#nodeconfig)
  * nodeIpv4CidrSize `integer`: [Output only] The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode.
  * nodePools `array`: The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified.
    * items [NodePool](#nodepool)
  * notificationConfig [NotificationConfig](#notificationconfig)
  * podSecurityPolicyConfig [PodSecurityPolicyConfig](#podsecuritypolicyconfig)
  * privateCluster `boolean`: If this is a private cluster setup. Private clusters are clusters that, by default have no external IP addresses on the nodes and where nodes and the master communicate over private IP addresses. This field is deprecated, use private_cluster_config.enable_private_nodes instead.
  * privateClusterConfig [PrivateClusterConfig](#privateclusterconfig)
  * releaseChannel [ReleaseChannel](#releasechannel)
  * resourceLabels `object`: The resource labels for the cluster to use to annotate any related Google Compute Engine resources.
  * resourceUsageExportConfig [ResourceUsageExportConfig](#resourceusageexportconfig)
  * selfLink `string`: [Output only] Server-defined URL for the resource.
  * servicesIpv4Cidr `string`: [Output only] The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR.
  * shieldedNodes [ShieldedNodes](#shieldednodes)
  * status `string` (values: STATUS_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED): [Output only] The current status of this cluster.
  * statusMessage `string`: [Output only] Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available.
  * subnetwork `string`: The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected. On output this shows the subnetwork ID instead of the name.
  * tpuConfig [TpuConfig](#tpuconfig)
  * tpuIpv4CidrBlock `string`: [Output only] The IP address range of the Cloud TPUs in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`).
  * verticalPodAutoscaling [VerticalPodAutoscaling](#verticalpodautoscaling)
  * workloadIdentityConfig [WorkloadIdentityConfig](#workloadidentityconfig)
  * zone `string`: [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead.

### ClusterAutoscaling
* ClusterAutoscaling `object`: ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.
  * autoprovisioningLocations `array`: The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes can be created by NAP.
    * items `string`
  * autoprovisioningNodePoolDefaults [AutoprovisioningNodePoolDefaults](#autoprovisioningnodepooldefaults)
  * autoscalingProfile `string` (values: PROFILE_UNSPECIFIED, OPTIMIZE_UTILIZATION, BALANCED): Defines autoscaling behaviour.
  * enableNodeAutoprovisioning `boolean`: Enables automatic node pool creation and deletion.
  * resourceLimits `array`: Contains global constraints regarding minimum and maximum amount of resources in the cluster.
    * items [ResourceLimit](#resourcelimit)

### ClusterTelemetry
* ClusterTelemetry `object`: Telemetry integration for the cluster.
  * type `string` (values: UNSPECIFIED, DISABLED, ENABLED, SYSTEM_ONLY): Type of the integration.

### ClusterUpdate
* ClusterUpdate `object`: ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided.
  * desiredAddonsConfig [AddonsConfig](#addonsconfig)
  * desiredBinaryAuthorization [BinaryAuthorization](#binaryauthorization)
  * desiredClusterAutoscaling [ClusterAutoscaling](#clusterautoscaling)
  * desiredClusterTelemetry [ClusterTelemetry](#clustertelemetry)
  * desiredDatabaseEncryption [DatabaseEncryption](#databaseencryption)
  * desiredDatapathProvider `string` (values: DATAPATH_PROVIDER_UNSPECIFIED, LEGACY_DATAPATH, ADVANCED_DATAPATH): The desired datapath provider for the cluster.
  * desiredDefaultSnatStatus [DefaultSnatStatus](#defaultsnatstatus)
  * desiredImageType `string`: The desired image type for the node pool. NOTE: Set the "desired_node_pool" field as well.
  * desiredIntraNodeVisibilityConfig [IntraNodeVisibilityConfig](#intranodevisibilityconfig)
  * desiredLocations `array`: The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This list must always include the cluster's primary zone. Warning: changing cluster locations will update the locations of all node pools and will result in nodes being added and/or removed.
    * items `string`
  * desiredLoggingService `string`: The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.
  * desiredMaster [Master](#master)
  * desiredMasterAuthorizedNetworksConfig [MasterAuthorizedNetworksConfig](#masterauthorizednetworksconfig)
  * desiredMasterVersion `string`: The Kubernetes version to change the master to. The only valid value is the latest supported version. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version
  * desiredMonitoringService `string`: The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
  * desiredNodePoolAutoscaling [NodePoolAutoscaling](#nodepoolautoscaling)
  * desiredNodePoolId `string`: The node pool to be upgraded. This field is mandatory if "desired_node_version", "desired_image_family", "desired_node_pool_autoscaling", or "desired_workload_metadata_config" is specified and there is more than one node pool on the cluster.
  * desiredNodeVersion `string`: The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version
  * desiredNotificationConfig [NotificationConfig](#notificationconfig)
  * desiredPodSecurityPolicyConfig [PodSecurityPolicyConfig](#podsecuritypolicyconfig)
  * desiredPrivateClusterConfig [PrivateClusterConfig](#privateclusterconfig)
  * desiredPrivateIpv6GoogleAccess `string` (values: PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED, PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED, PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE, PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL): The desired state of IPv6 connectivity to Google Services.
  * desiredReleaseChannel [ReleaseChannel](#releasechannel)
  * desiredResourceUsageExportConfig [ResourceUsageExportConfig](#resourceusageexportconfig)
  * desiredShieldedNodes [ShieldedNodes](#shieldednodes)
  * desiredTpuConfig [TpuConfig](#tpuconfig)
  * desiredVerticalPodAutoscaling [VerticalPodAutoscaling](#verticalpodautoscaling)
  * desiredWorkloadIdentityConfig [WorkloadIdentityConfig](#workloadidentityconfig)

### CompleteIPRotationRequest
* CompleteIPRotationRequest `object`: CompleteIPRotationRequest moves the cluster master back into single-IP mode.
  * clusterId `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project, location, cluster id) of the cluster to complete IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### ConfidentialNodes
* ConfidentialNodes `object`: ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.
  * enabled `boolean`: Whether Confidential Nodes feature is enabled for all nodes in this cluster.

### ConfigConnectorConfig
* ConfigConnectorConfig `object`: Configuration options for the Config Connector add-on.
  * enabled `boolean`: Whether Cloud Connector is enabled for this cluster.

### ConsumptionMeteringConfig
* ConsumptionMeteringConfig `object`: Parameters for controlling consumption metering.
  * enabled `boolean`: Whether to enable consumption metering for this cluster. If enabled, a second BigQuery table will be created to hold resource consumption records.

### CreateClusterRequest
* CreateClusterRequest `object`: CreateClusterRequest creates a cluster.
  * cluster [Cluster](#cluster)
  * parent `string`: The parent (project and location) where the cluster will be created. Specified in the format `projects/*/locations/*`.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the parent field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.

### CreateNodePoolRequest
* CreateNodePoolRequest `object`: CreateNodePoolRequest creates a node pool for a cluster.
  * clusterId `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
  * nodePool [NodePool](#nodepool)
  * parent `string`: The parent (project, location, cluster id) where the node pool will be created. Specified in the format `projects/*/locations/*/clusters/*`.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the parent field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.

### DailyMaintenanceWindow
* DailyMaintenanceWindow `object`: Time window specified for daily maintenance operations.
  * duration `string`: [Output only] Duration of the time window, automatically chosen to be smallest possible in the given scenario.
  * startTime `string`: Time within the maintenance window to start the maintenance operations. It must be in format "HH:MM", where HH : [00-23] and MM : [00-59] GMT.

### DatabaseEncryption
* DatabaseEncryption `object`: Configuration of etcd encryption.
  * keyName `string`: Name of CloudKMS key to use for the encryption of secrets in etcd. Ex. projects/my-project/locations/global/keyRings/my-ring/cryptoKeys/my-key
  * state `string` (values: UNKNOWN, ENCRYPTED, DECRYPTED): Denotes the state of etcd encryption.

### DefaultSnatStatus
* DefaultSnatStatus `object`: DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster.
  * disabled `boolean`: Disables cluster default sNAT rules.

### DnsCacheConfig
* DnsCacheConfig `object`: Configuration for NodeLocal DNSCache
  * enabled `boolean`: Whether NodeLocal DNSCache is enabled for this cluster.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### EphemeralStorageConfig
* EphemeralStorageConfig `object`: EphemeralStorageConfig contains configuration for the ephemeral storage filesystem.
  * localSsdCount `integer`: Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD is 375 GB in size. If zero, it means to disable using local SSDs as ephemeral storage.

### GcePersistentDiskCsiDriverConfig
* GcePersistentDiskCsiDriverConfig `object`: Configuration for the Compute Engine PD CSI driver.
  * enabled `boolean`: Whether the Compute Engine PD CSI driver is enabled for this cluster.

### GetJSONWebKeysResponse
* GetJSONWebKeysResponse `object`: GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517
  * cacheHeader [HttpCacheControlResponseHeader](#httpcachecontrolresponseheader)
  * keys `array`: The public component of the keys used by the cluster to sign token requests.
    * items [Jwk](#jwk)

### GetOpenIDConfigResponse
* GetOpenIDConfigResponse `object`: GetOpenIDConfigResponse is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details.
  * cacheHeader [HttpCacheControlResponseHeader](#httpcachecontrolresponseheader)
  * claims_supported `array`: Supported claims.
    * items `string`
  * grant_types `array`: Supported grant types.
    * items `string`
  * id_token_signing_alg_values_supported `array`: supported ID Token signing Algorithms.
    * items `string`
  * issuer `string`: OIDC Issuer.
  * jwks_uri `string`: JSON Web Key uri.
  * response_types_supported `array`: Supported response types.
    * items `string`
  * subject_types_supported `array`: Supported subject types.
    * items `string`

### HorizontalPodAutoscaling
* HorizontalPodAutoscaling `object`: Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.
  * disabled `boolean`: Whether the Horizontal Pod Autoscaling feature is enabled in the cluster. When enabled, it ensures that metrics are collected into Stackdriver Monitoring.

### HttpCacheControlResponseHeader
* HttpCacheControlResponseHeader `object`: RFC-2616: cache control support
  * age `string`: 14.6 response cache age, in seconds since the response is generated
  * directive `string`: 14.9 request and response directives
  * expires `string`: 14.21 response cache expires, in RFC 1123 date format

### HttpLoadBalancing
* HttpLoadBalancing `object`: Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.
  * disabled `boolean`: Whether the HTTP Load Balancing controller is enabled in the cluster. When enabled, it runs a small pod in the cluster that manages the load balancers.

### IPAllocationPolicy
* IPAllocationPolicy `object`: Configuration for controlling how IPs are allocated in the cluster.
  * allowRouteOverlap `boolean`: If true, allow allocation of cluster CIDR ranges that overlap with certain kinds of network routes. By default we do not allow cluster CIDR ranges to intersect with any user declared routes. With allow_route_overlap == true, we allow overlapping with CIDR ranges that are larger than the cluster CIDR range. If this field is set to true, then cluster and services CIDRs must be fully-specified (e.g. `10.96.0.0/14`, but not `/14`), which means: 1) When `use_ip_aliases` is true, `cluster_ipv4_cidr_block` and `services_ipv4_cidr_block` must be fully-specified. 2) When `use_ip_aliases` is false, `cluster.cluster_ipv4_cidr` muse be fully-specified.
  * clusterIpv4Cidr `string`: This field is deprecated, use cluster_ipv4_cidr_block.
  * clusterIpv4CidrBlock `string`: The IP address range for the cluster pod IPs. If this field is set, then `cluster.cluster_ipv4_cidr` must be left blank. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
  * clusterSecondaryRangeName `string`: The name of the secondary range to be used for the cluster CIDR block. The secondary range will be used for pod IP addresses. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false.
  * createSubnetwork `boolean`: Whether a new subnetwork will be created automatically for the cluster. This field is only applicable when `use_ip_aliases` is true.
  * nodeIpv4Cidr `string`: This field is deprecated, use node_ipv4_cidr_block.
  * nodeIpv4CidrBlock `string`: The IP address range of the instance IPs in this cluster. This is applicable only if `create_subnetwork` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
  * servicesIpv4Cidr `string`: This field is deprecated, use services_ipv4_cidr_block.
  * servicesIpv4CidrBlock `string`: The IP address range of the services IPs in this cluster. If blank, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.
  * servicesSecondaryRangeName `string`: The name of the secondary range to be used as for the services CIDR block. The secondary range will be used for service ClusterIPs. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false.
  * subnetworkName `string`: A custom subnetwork name to be used if `create_subnetwork` is true. If this field is empty, then an automatic name will be chosen for the new subnetwork.
  * tpuIpv4CidrBlock `string`: The IP address range of the Cloud TPUs in this cluster. If unspecified, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. If unspecified, the range will use the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. This field is deprecated, use cluster.tpu_config.ipv4_cidr_block instead.
  * useIpAliases `boolean`: Whether alias IPs will be used for pod IPs in the cluster. This is used in conjunction with use_routes. It cannot be true if use_routes is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode
  * useRoutes `boolean`: Whether routes will be used for pod IPs in the cluster. This is used in conjunction with use_ip_aliases. It cannot be true if use_ip_aliases is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode

### IntraNodeVisibilityConfig
* IntraNodeVisibilityConfig `object`: IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster.
  * enabled `boolean`: Enables intra node visibility for this cluster.

### IstioConfig
* IstioConfig `object`: Configuration options for Istio addon.
  * auth `string` (values: AUTH_NONE, AUTH_MUTUAL_TLS): The specified Istio auth mode, either none, or mutual TLS.
  * disabled `boolean`: Whether Istio is enabled for this cluster.

### Jwk
* Jwk `object`: Jwk is a JSON Web Key as specified in RFC 7517
  * alg `string`: Algorithm.
  * crv `string`: Used for ECDSA keys.
  * e `string`: Used for RSA keys.
  * kid `string`: Key ID.
  * kty `string`: Key Type.
  * n `string`: Used for RSA keys.
  * use `string`: Permitted uses for the public keys.
  * x `string`: Used for ECDSA keys.
  * y `string`: Used for ECDSA keys.

### KalmConfig
* KalmConfig `object`: Configuration options for the KALM addon.
  * enabled `boolean`: Whether KALM is enabled for this cluster.

### KubernetesDashboard
* KubernetesDashboard `object`: Configuration for the Kubernetes Dashboard.
  * disabled `boolean`: Whether the Kubernetes Dashboard is enabled for this cluster.

### LegacyAbac
* LegacyAbac `object`: Configuration for the legacy Attribute Based Access Control authorization mode.
  * enabled `boolean`: Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM.

### LinuxNodeConfig
* LinuxNodeConfig `object`: Parameters that can be configured on Linux nodes.
  * sysctls `object`: The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. The following parameters are supported. net.core.netdev_max_backlog net.core.rmem_max net.core.wmem_default net.core.wmem_max net.core.optmem_max net.core.somaxconn net.ipv4.tcp_rmem net.ipv4.tcp_wmem net.ipv4.tcp_tw_reuse

### ListClustersResponse
* ListClustersResponse `object`: ListClustersResponse is the result of ListClustersRequest.
  * clusters `array`: A list of clusters in the project in the specified zone, or across all ones.
    * items [Cluster](#cluster)
  * missingZones `array`: If any zones are listed here, the list of clusters returned may be missing those zones.
    * items `string`

### ListLocationsResponse
* ListLocationsResponse `object`: ListLocationsResponse returns the list of all GKE locations and their recommendation state.
  * locations `array`: A full list of GKE locations.
    * items [Location](#location)
  * nextPageToken `string`: Only return ListLocationsResponse that occur after the page_token. This value should be populated from the ListLocationsResponse.next_page_token if that response token was set (which happens when listing more Locations than fit in a single ListLocationsResponse).

### ListNodePoolsResponse
* ListNodePoolsResponse `object`: ListNodePoolsResponse is the result of ListNodePoolsRequest.
  * nodePools `array`: A list of node pools for a cluster.
    * items [NodePool](#nodepool)

### ListOperationsResponse
* ListOperationsResponse `object`: ListOperationsResponse is the result of ListOperationsRequest.
  * missingZones `array`: If any zones are listed here, the list of operations returned may be missing the operations from those zones.
    * items `string`
  * operations `array`: A list of operations in the project in the specified zone.
    * items [Operation](#operation)

### ListUsableSubnetworksResponse
* ListUsableSubnetworksResponse `object`: ListUsableSubnetworksResponse is the response of ListUsableSubnetworksRequest.
  * nextPageToken `string`: This token allows you to get the next page of results for list requests. If the number of results is larger than `page_size`, use the `next_page_token` as a value for the query parameter `page_token` in the next request. The value will become empty when there are no more pages.
  * subnetworks `array`: A list of usable subnetworks in the specified network project.
    * items [UsableSubnetwork](#usablesubnetwork)

### Location
* Location `object`: Location returns the location name, and if the location is recommended for GKE cluster scheduling.
  * name `string`: Contains the name of the resource requested. Specified in the format `projects/*/locations/*`.
  * recommended `boolean`: Whether the location is recomended for GKE cluster scheduling.
  * type `string` (values: LOCATION_TYPE_UNSPECIFIED, ZONE, REGION): Contains the type of location this Location is for. Regional or Zonal.

### MaintenancePolicy
* MaintenancePolicy `object`: MaintenancePolicy defines the maintenance policy to be used for the cluster.
  * resourceVersion `string`: A hash identifying the version of this policy, so that updates to fields of the policy won't accidentally undo intermediate changes (and so that users of the API unaware of some fields won't accidentally remove other fields). Make a `get()` request to the cluster to get the current resource version and include it with requests to set the policy.
  * window [MaintenanceWindow](#maintenancewindow)

### MaintenanceWindow
* MaintenanceWindow `object`: MaintenanceWindow defines the maintenance window to be used for the cluster.
  * dailyMaintenanceWindow [DailyMaintenanceWindow](#dailymaintenancewindow)
  * maintenanceExclusions `object`: Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows.
  * recurringWindow [RecurringTimeWindow](#recurringtimewindow)

### Master
* Master `object`: Master is the configuration for components on master.

### MasterAuth
* MasterAuth `object`: The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.
  * clientCertificate `string`: [Output only] Base64-encoded public certificate used by clients to authenticate to the cluster endpoint.
  * clientCertificateConfig [ClientCertificateConfig](#clientcertificateconfig)
  * clientKey `string`: [Output only] Base64-encoded private key used by clients to authenticate to the cluster endpoint.
  * clusterCaCertificate `string`
  * password `string`: The password to use for HTTP basic authentication to the master endpoint. Because the master endpoint is open to the Internet, you should create a strong password. If a password is provided for cluster creation, username must be non-empty. Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication
  * username `string`: The username to use for HTTP basic authentication to the master endpoint. For clusters v1.6.0 and later, basic authentication can be disabled by leaving username unspecified (or setting it to the empty string). Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication

### MasterAuthorizedNetworksConfig
* MasterAuthorizedNetworksConfig `object`: Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
  * cidrBlocks `array`: cidr_blocks define up to 10 external networks that could access Kubernetes master through HTTPS.
    * items [CidrBlock](#cidrblock)
  * enabled `boolean`: Whether or not master authorized networks is enabled.

### MaxPodsConstraint
* MaxPodsConstraint `object`: Constraints applied to pods.
  * maxPodsPerNode `string`: Constraint enforced on the max num of pods per node.

### Metric
* Metric `object`: Progress metric is (string, int|float|string) pair.
  * doubleValue `number`: For metrics with floating point value.
  * intValue `string`: For metrics with integer value.
  * name `string`: Required. Metric name, e.g., "nodes total", "percent done".
  * stringValue `string`: For metrics with custom values (ratios, visual progress, etc.).

### NetworkConfig
* NetworkConfig `object`: NetworkConfig reports the relative names of network & subnetwork.
  * datapathProvider `string` (values: DATAPATH_PROVIDER_UNSPECIFIED, LEGACY_DATAPATH, ADVANCED_DATAPATH): The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation.
  * defaultSnatStatus [DefaultSnatStatus](#defaultsnatstatus)
  * enableIntraNodeVisibility `boolean`: Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.
  * network `string`: Output only. The relative name of the Google Compute Engine network(https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. Example: projects/my-project/global/networks/my-network
  * privateIpv6GoogleAccess `string` (values: PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED, PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED, PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE, PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL): The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4)
  * subnetwork `string`: Output only. The relative name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/vpc) to which the cluster is connected. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet

### NetworkPolicy
* NetworkPolicy `object`: Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
  * enabled `boolean`: Whether network policy is enabled on the cluster.
  * provider `string` (values: PROVIDER_UNSPECIFIED, CALICO): The selected network policy provider.

### NetworkPolicyConfig
* NetworkPolicyConfig `object`: Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.
  * disabled `boolean`: Whether NetworkPolicy is enabled for this cluster.

### NodeConfig
* NodeConfig `object`: Parameters that describe the nodes in a cluster.
  * tags `array`: The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster or node pool creation. Each tag within the list must comply with RFC1035.
    * items `string`
  * accelerators `array`: A list of hardware accelerators to be attached to each node. See https://cloud.google.com/compute/docs/gpus for more information about support for GPUs.
    * items [AcceleratorConfig](#acceleratorconfig)
  * bootDiskKmsKey `string`:  The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption
  * diskSizeGb `integer`: Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB.
  * diskType `string`: Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard'
  * ephemeralStorageConfig [EphemeralStorageConfig](#ephemeralstorageconfig)
  * imageType `string`: The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  * kubeletConfig [NodeKubeletConfig](#nodekubeletconfig)
  * labels `object`: The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it's best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
  * linuxNodeConfig [LinuxNodeConfig](#linuxnodeconfig)
  * localSsdCount `integer`: The number of local SSD disks to be attached to the node. The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information.
  * machineType `string`: The name of a Google Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-types). If unspecified, the default machine type is `e2-medium`.
  * metadata `object`: The metadata key/value pairs assigned to instances in the cluster. Keys must conform to the regexp `[a-zA-Z0-9-_]+` and be less than 128 bytes in length. These are reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: - "cluster-location" - "cluster-name" - "cluster-uid" - "configure-sh" - "containerd-configure-sh" - "enable-oslogin" - "gci-ensure-gke-docker" - "gci-metrics-enabled" - "gci-update-strategy" - "instance-template" - "kube-env" - "startup-script" - "user-data" - "disable-address-manager" - "windows-startup-script-ps1" - "common-psm1" - "k8s-node-setup-psm1" - "install-ssh-psm1" - "user-profile-psm1" The following keys are reserved for Windows nodes: - "serial-port-logging-enable" Values are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on them is that each value's size must be less than or equal to 32 KB. The total size of all keys and values must be less than 512 KB.
  * minCpuPlatform `string`: Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as `minCpuPlatform: "Intel Haswell"` or `minCpuPlatform: "Intel Sandy Bridge"`. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
  * nodeGroup `string`: Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes).
  * oauthScopes `array`: The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Google Container Registry](https://cloud.google.com/container-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added.
    * items `string`
  * preemptible `boolean`: Whether the nodes are created as preemptible VM instances. See: https://cloud.google.com/compute/docs/instances/preemptible for more inforamtion about preemptible VM instances.
  * reservationAffinity [ReservationAffinity](#reservationaffinity)
  * sandboxConfig [SandboxConfig](#sandboxconfig)
  * serviceAccount `string`: The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used.
  * shieldedInstanceConfig [ShieldedInstanceConfig](#shieldedinstanceconfig)
  * taints `array`: List of kubernetes taints to be applied to each node. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
    * items [NodeTaint](#nodetaint)
  * workloadMetadataConfig [WorkloadMetadataConfig](#workloadmetadataconfig)

### NodeKubeletConfig
* NodeKubeletConfig `object`: Node kubelet configs.
  * cpuCfsQuota `boolean`: Enable CPU CFS quota enforcement for containers that specify CPU limits. This option is enabled by default which makes kubelet use CFS quota (https://www.kernel.org/doc/Documentation/scheduler/sched-bwc.txt) to enforce container CPU limits. Otherwise, CPU limits will not be enforced at all. Disable this option to mitigate CPU throttling problems while still having your pods to be in Guaranteed QoS class by specifying the CPU limits. The default value is 'true' if unspecified.
  * cpuCfsQuotaPeriod `string`: Set the CPU CFS quota period value 'cpu.cfs_period_us'. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The value must be a positive duration.
  * cpuManagerPolicy `string`: Control the CPU management policy on the node. See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. - "none": the default, which represents the existing scheduling behavior. - "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node. The default value is 'none' if unspecified.

### NodeManagement
* NodeManagement `object`: NodeManagement defines the set of node management services turned on for the node pool.
  * autoRepair `boolean`: Whether the nodes will be automatically repaired.
  * autoUpgrade `boolean`: Whether the nodes will be automatically upgraded.
  * upgradeOptions [AutoUpgradeOptions](#autoupgradeoptions)

### NodePool
* NodePool `object`: NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.
  * autoscaling [NodePoolAutoscaling](#nodepoolautoscaling)
  * conditions `array`: Which conditions caused the current node pool state.
    * items [StatusCondition](#statuscondition)
  * config [NodeConfig](#nodeconfig)
  * initialNodeCount `integer`: The initial node count for the pool. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota.
  * instanceGroupUrls `array`: [Output only] The resource URLs of the [managed instance groups](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with this node pool.
    * items `string`
  * locations `array`: The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes should be located. If this value is unspecified during node pool creation, the [Cluster.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.FIELDS.locations) value will be used, instead. Warning: changing node pool locations will result in nodes being added and/or removed.
    * items `string`
  * management [NodeManagement](#nodemanagement)
  * maxPodsConstraint [MaxPodsConstraint](#maxpodsconstraint)
  * name `string`: The name of the node pool.
  * podIpv4CidrSize `integer`: [Output only] The pod CIDR block size per node in this node pool.
  * selfLink `string`: [Output only] Server-defined URL for the resource.
  * status `string` (values: STATUS_UNSPECIFIED, PROVISIONING, RUNNING, RUNNING_WITH_ERROR, RECONCILING, STOPPING, ERROR): [Output only] The status of the nodes in this pool instance.
  * statusMessage `string`: [Output only] Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available.
  * upgradeSettings [UpgradeSettings](#upgradesettings)
  * version `string`: The version of the Kubernetes of this node.

### NodePoolAutoscaling
* NodePoolAutoscaling `object`: NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
  * autoprovisioned `boolean`: Can this node pool be deleted automatically.
  * enabled `boolean`: Is autoscaling enabled for this node pool.
  * maxNodeCount `integer`: Maximum number of nodes in the NodePool. Must be >= min_node_count. There has to enough quota to scale up the cluster.
  * minNodeCount `integer`: Minimum number of nodes in the NodePool. Must be >= 1 and <= max_node_count.

### NodeTaint
* NodeTaint `object`: Kubernetes taint is comprised of three fields: key, value, and effect. Effect can only be one of three types: NoSchedule, PreferNoSchedule or NoExecute. See [here](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration) for more information, including usage and the valid values.
  * effect `string` (values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE): Effect for taint.
  * key `string`: Key for taint.
  * value `string`: Value for taint.

### NotificationConfig
* NotificationConfig `object`: NotificationConfig is the configuration of notifications.
  * pubsub [PubSub](#pubsub)

### Operation
* Operation `object`: This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only.
  * clusterConditions `array`: Which conditions caused the current cluster state. Deprecated. Use field error instead.
    * items [StatusCondition](#statuscondition)
  * detail `string`: Detailed operation progress, if available.
  * endTime `string`: [Output only] The time the operation completed, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
  * error [Status](#status)
  * location `string`: [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.
  * name `string`: The server-assigned ID for the operation.
  * nodepoolConditions `array`: Which conditions caused the current node pool state. Deprecated. Use field error instead.
    * items [StatusCondition](#statuscondition)
  * operationType `string` (values: TYPE_UNSPECIFIED, CREATE_CLUSTER, DELETE_CLUSTER, UPGRADE_MASTER, UPGRADE_NODES, REPAIR_CLUSTER, UPDATE_CLUSTER, CREATE_NODE_POOL, DELETE_NODE_POOL, SET_NODE_POOL_MANAGEMENT, AUTO_REPAIR_NODES, AUTO_UPGRADE_NODES, SET_LABELS, SET_MASTER_AUTH, SET_NODE_POOL_SIZE, SET_NETWORK_POLICY, SET_MAINTENANCE_POLICY): The operation type.
  * progress [OperationProgress](#operationprogress)
  * selfLink `string`: Server-defined URL for the resource.
  * startTime `string`: [Output only] The time the operation started, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
  * status `string` (values: STATUS_UNSPECIFIED, PENDING, RUNNING, DONE, ABORTING): The current status of the operation.
  * statusMessage `string`: Output only. If an error has occurred, a textual description of the error. Deprecated. Use field error instead.
  * targetLink `string`: Server-defined URL for the target of the operation.
  * zone `string`: The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation is taking place. This field is deprecated, use location instead.

### OperationProgress
* OperationProgress `object`: Information about operation (or operation stage) progress.
  * metrics `array`: Progress metric bundle, for example: metrics: [{name: "nodes done", int_value: 15}, {name: "nodes total", int_value: 32}] or metrics: [{name: "progress", double_value: 0.56}, {name: "progress scale", double_value: 1.0}]
    * items [Metric](#metric)
  * name `string`: A non-parameterized string describing an operation stage. Unset for single-stage operations.
  * stages `array`: Substages of an operation or a stage.
    * items [OperationProgress](#operationprogress)
  * status `string` (values: STATUS_UNSPECIFIED, PENDING, RUNNING, DONE, ABORTING): Status of an operation stage. Unset for single-stage operations.

### PodSecurityPolicyConfig
* PodSecurityPolicyConfig `object`: Configuration for the PodSecurityPolicy feature.
  * enabled `boolean`: Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created.

### PrivateClusterConfig
* PrivateClusterConfig `object`: Configuration options for private clusters.
  * enablePrivateEndpoint `boolean`: Whether the master's internal IP address is used as the cluster endpoint.
  * enablePrivateNodes `boolean`: Whether nodes have internal IP addresses only. If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking.
  * masterGlobalAccessConfig [PrivateClusterMasterGlobalAccessConfig](#privateclustermasterglobalaccessconfig)
  * masterIpv4CidrBlock `string`: The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning internal IP addresses to the master or set of masters, as well as the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network.
  * peeringName `string`: Output only. The peering name in the customer VPC used by this cluster.
  * privateEndpoint `string`: Output only. The internal IP address of this cluster's master endpoint.
  * publicEndpoint `string`: Output only. The external IP address of this cluster's master endpoint.

### PrivateClusterMasterGlobalAccessConfig
* PrivateClusterMasterGlobalAccessConfig `object`: Configuration for controlling master global access settings.
  * enabled `boolean`: Whenever master is accessible globally or not.

### PubSub
* PubSub `object`: Pub/Sub specific notification config.
  * enabled `boolean`: Enable notifications for Pub/Sub.
  * topic `string`: The desired Pub/Sub topic to which notifications will be sent by GKE. Format is `projects/{project}/topics/{topic}`.

### RecurringTimeWindow
* RecurringTimeWindow `object`: Represents an arbitrary window of time that recurs.
  * recurrence `string`: An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window reccurs. They go on for the span of time between the start and end time. For example, to have something repeat every weekday, you'd use: `FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR` To repeat some window daily (equivalent to the DailyMaintenanceWindow): `FREQ=DAILY` For the first weekend of every month: `FREQ=MONTHLY;BYSETPOS=1;BYDAY=SA,SU` This specifies how frequently the window starts. Eg, if you wanted to have a 9-5 UTC-4 window every weekday, you'd use something like: ``` start time = 2019-01-01T09:00:00-0400 end time = 2019-01-01T17:00:00-0400 recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR ``` Windows can span multiple days. Eg, to make the window encompass every weekend from midnight Saturday till the last minute of Sunday UTC: ``` start time = 2019-01-05T00:00:00Z end time = 2019-01-07T23:59:00Z recurrence = FREQ=WEEKLY;BYDAY=SA ``` Note the start and end time's specific dates are largely arbitrary except to specify duration of the window and when it first starts. The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported.
  * window [TimeWindow](#timewindow)

### ReleaseChannel
* ReleaseChannel `object`: ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled.
  * channel `string` (values: UNSPECIFIED, RAPID, REGULAR, STABLE): channel specifies which release channel the cluster is subscribed to.

### ReleaseChannelConfig
* ReleaseChannelConfig `object`: ReleaseChannelConfig exposes configuration for a release channel.
  * availableVersions `array`: Deprecated. This field has been deprecated and replaced with the valid_versions field.
    * items [AvailableVersion](#availableversion)
  * channel `string` (values: UNSPECIFIED, RAPID, REGULAR, STABLE): The release channel this configuration applies to.
  * defaultVersion `string`: The default version for newly created clusters on the channel.
  * validVersions `array`: List of valid versions for the channel.
    * items `string`

### ReservationAffinity
* ReservationAffinity `object`: [ReservationAffinity](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) is the configuration of desired reservation which instances could take capacity from.
  * consumeReservationType `string` (values: UNSPECIFIED, NO_RESERVATION, ANY_RESERVATION, SPECIFIC_RESERVATION): Corresponds to the type of reservation consumption.
  * key `string`: Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify "googleapis.com/reservation-name" as the key and specify the name of your reservation as its value.
  * values `array`: Corresponds to the label value(s) of reservation resource(s).
    * items `string`

### ResourceLimit
* ResourceLimit `object`: Contains information about amount of some resource in the cluster. For memory, value should be in GB.
  * maximum `string`: Maximum amount of the resource in the cluster.
  * minimum `string`: Minimum amount of the resource in the cluster.
  * resourceType `string`: Resource name "cpu", "memory" or gpu-specific string.

### ResourceUsageExportConfig
* ResourceUsageExportConfig `object`: Configuration for exporting cluster resource usages.
  * bigqueryDestination [BigQueryDestination](#bigquerydestination)
  * consumptionMeteringConfig [ConsumptionMeteringConfig](#consumptionmeteringconfig)
  * enableNetworkEgressMetering `boolean`: Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic.

### RollbackNodePoolUpgradeRequest
* RollbackNodePoolUpgradeRequest `object`: RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.
  * clusterId `string`: Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.
  * nodePoolId `string`: Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### SandboxConfig
* SandboxConfig `object`: SandboxConfig contains configurations of the sandbox to use for the node.
  * sandboxType `string`: Type of the sandbox to use for the node (e.g. 'gvisor')
  * type `string` (values: UNSPECIFIED, GVISOR): Type of the sandbox to use for the node.

### ServerConfig
* ServerConfig `object`: Kubernetes Engine service configuration.
  * channels `array`: List of release channel configurations.
    * items [ReleaseChannelConfig](#releasechannelconfig)
  * defaultClusterVersion `string`: Version of Kubernetes the service deploys by default.
  * defaultImageType `string`: Default image type.
  * validImageTypes `array`: List of valid image types.
    * items `string`
  * validMasterVersions `array`: List of valid master versions, in descending order.
    * items `string`
  * validNodeVersions `array`: List of valid node upgrade target versions, in descending order.
    * items `string`

### SetAddonsConfigRequest
* SetAddonsConfigRequest `object`: SetAddonsRequest sets the addons associated with the cluster.
  * addonsConfig [AddonsConfig](#addonsconfig)
  * clusterId `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/*/locations/*/clusters/*`.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### SetLabelsRequest
* SetLabelsRequest `object`: SetLabelsRequest sets the Google Cloud Platform labels on a Google Container Engine cluster, which will in turn set them for Google Compute Engine resources used by that cluster
  * clusterId `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
  * labelFingerprint `string`: Required. The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Kubernetes Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash when updating or changing labels. Make a `get()` request to the resource to get the latest fingerprint.
  * name `string`: The name (project, location, cluster id) of the cluster to set labels. Specified in the format `projects/*/locations/*/clusters/*`.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
  * resourceLabels `object`: Required. The labels to set for that cluster.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### SetLegacyAbacRequest
* SetLegacyAbacRequest `object`: SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for a cluster.
  * clusterId `string`: Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
  * enabled `boolean`: Required. Whether ABAC authorization will be enabled in the cluster.
  * name `string`: The name (project, location, cluster id) of the cluster to set legacy abac. Specified in the format `projects/*/locations/*/clusters/*`.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### SetLocationsRequest
* SetLocationsRequest `object`: SetLocationsRequest sets the locations of the cluster.
  * clusterId `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * locations `array`: Required. The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. Changing the locations a cluster is in will result in nodes being either created or removed from the cluster, depending on whether locations are being added or removed. This list must always include the cluster's primary zone.
    * items `string`
  * name `string`: The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/*/locations/*/clusters/*`.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### SetLoggingServiceRequest
* SetLoggingServiceRequest `object`: SetLoggingServiceRequest sets the logging service of a cluster.
  * clusterId `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * loggingService `string`: Required. The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.
  * name `string`: The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/*/locations/*/clusters/*`.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### SetMaintenancePolicyRequest
* SetMaintenancePolicyRequest `object`: SetMaintenancePolicyRequest sets the maintenance policy for a cluster.
  * clusterId `string`: Required. The name of the cluster to update.
  * maintenancePolicy [MaintenancePolicy](#maintenancepolicy)
  * name `string`: The name (project, location, cluster id) of the cluster to set maintenance policy. Specified in the format `projects/*/locations/*/clusters/*`.
  * projectId `string`: Required. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
  * zone `string`: Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides.

### SetMasterAuthRequest
* SetMasterAuthRequest `object`: SetMasterAuthRequest updates the admin password of a cluster.
  * action `string` (values: UNKNOWN, SET_PASSWORD, GENERATE_PASSWORD, SET_USERNAME): Required. The exact form of action to be taken on the master auth.
  * clusterId `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/*/locations/*/clusters/*`.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * update [MasterAuth](#masterauth)
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### SetMonitoringServiceRequest
* SetMonitoringServiceRequest `object`: SetMonitoringServiceRequest sets the monitoring service of a cluster.
  * clusterId `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * monitoringService `string`: Required. The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
  * name `string`: The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/*/locations/*/clusters/*`.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### SetNetworkPolicyRequest
* SetNetworkPolicyRequest `object`: SetNetworkPolicyRequest enables/disables network policy for a cluster.
  * clusterId `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project, location, cluster id) of the cluster to set networking policy. Specified in the format `projects/*/locations/*/clusters/*`.
  * networkPolicy [NetworkPolicy](#networkpolicy)
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### SetNodePoolAutoscalingRequest
* SetNodePoolAutoscalingRequest `object`: SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.
  * autoscaling [NodePoolAutoscaling](#nodepoolautoscaling)
  * clusterId `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.
  * nodePoolId `string`: Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### SetNodePoolManagementRequest
* SetNodePoolManagementRequest `object`: SetNodePoolManagementRequest sets the node management properties of a node pool.
  * clusterId `string`: Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
  * management [NodeManagement](#nodemanagement)
  * name `string`: The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.
  * nodePoolId `string`: Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### SetNodePoolSizeRequest
* SetNodePoolSizeRequest `object`: SetNodePoolSizeRequest sets the size of a node pool.
  * clusterId `string`: Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.
  * nodeCount `integer`: Required. The desired node count for the pool.
  * nodePoolId `string`: Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### ShieldedInstanceConfig
* ShieldedInstanceConfig `object`: A set of Shielded Instance options.
  * enableIntegrityMonitoring `boolean`: Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created.
  * enableSecureBoot `boolean`: Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails.

### ShieldedNodes
* ShieldedNodes `object`: Configuration of Shielded Nodes feature.
  * enabled `boolean`: Whether Shielded Nodes features are enabled on all nodes in this cluster.

### StartIPRotationRequest
* StartIPRotationRequest `object`: StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP.
  * clusterId `string`: Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project, location, cluster id) of the cluster to start IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field has been deprecated and replaced by the name field.
  * rotateCredentials `boolean`: Whether to rotate credentials during IP rotation.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### StatusCondition
* StatusCondition `object`: StatusCondition describes why a cluster or a node pool has a certain status (e.g., ERROR or DEGRADED).
  * canonicalCode `string` (values: OK, CANCELLED, UNKNOWN, INVALID_ARGUMENT, DEADLINE_EXCEEDED, NOT_FOUND, ALREADY_EXISTS, PERMISSION_DENIED, UNAUTHENTICATED, RESOURCE_EXHAUSTED, FAILED_PRECONDITION, ABORTED, OUT_OF_RANGE, UNIMPLEMENTED, INTERNAL, UNAVAILABLE, DATA_LOSS): Canonical code of the condition.
  * code `string` (values: UNKNOWN, GCE_STOCKOUT, GKE_SERVICE_ACCOUNT_DELETED, GCE_QUOTA_EXCEEDED, SET_BY_OPERATOR, CLOUD_KMS_KEY_ERROR): Machine-friendly representation of the condition Deprecated. Use canonical_code instead.
  * message `string`: Human-friendly representation of the condition

### TimeWindow
* TimeWindow `object`: Represents an arbitrary window of time.
  * endTime `string`: The time that the window ends. The end time should take place after the start time.
  * startTime `string`: The time that the window first starts.

### TpuConfig
* TpuConfig `object`: Configuration for Cloud TPU.
  * enabled `boolean`: Whether Cloud TPU integration is enabled or not.
  * ipv4CidrBlock `string`: IPv4 CIDR block reserved for Cloud TPU in the VPC.
  * useServiceNetworking `boolean`: Whether to use service networking for Cloud TPU or not.

### UpdateClusterRequest
* UpdateClusterRequest `object`: UpdateClusterRequest updates the settings of a cluster.
  * clusterId `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * name `string`: The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * update [ClusterUpdate](#clusterupdate)
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### UpdateMasterRequest
* UpdateMasterRequest `object`: UpdateMasterRequest updates the master of the cluster.
  * clusterId `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * masterVersion `string`: Required. The Kubernetes version to change the master to. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version
  * name `string`: The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`.
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### UpdateNodePoolRequest
* UpdateNodePoolRequest `object`: SetNodePoolVersionRequest updates the version of a node pool.
  * clusterId `string`: Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
  * imageType `string`: Required. The desired image type for the node pool.
  * kubeletConfig [NodeKubeletConfig](#nodekubeletconfig)
  * linuxNodeConfig [LinuxNodeConfig](#linuxnodeconfig)
  * locations `array`: The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the node pool's nodes should be located. Changing the locations for a node pool will result in nodes being either created or removed from the node pool, depending on whether locations are being added or removed.
    * items `string`
  * name `string`: The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.
  * nodePoolId `string`: Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
  * nodeVersion `string`: Required. The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version
  * projectId `string`: Required. Deprecated. The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field has been deprecated and replaced by the name field.
  * upgradeSettings [UpgradeSettings](#upgradesettings)
  * workloadMetadataConfig [WorkloadMetadataConfig](#workloadmetadataconfig)
  * zone `string`: Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.

### UpgradeEvent
* UpgradeEvent `object`: UpgradeEvent is a notification sent to customers by the cluster server when a resource is upgrading.
  * currentVersion `string`: Required. The current version before the upgrade.
  * operation `string`: Required. The operation associated with this upgrade.
  * operationStartTime `string`: Required. The time when the operation was started.
  * resource `string`: Optional. Optional relative path to the resource. For example in node pool upgrades, the relative path of the node pool.
  * resourceType `string` (values: UPGRADE_RESOURCE_TYPE_UNSPECIFIED, MASTER, NODE_POOL): Required. The resource type that is upgrading.
  * targetVersion `string`: Required. The target version for the upgrade.

### UpgradeSettings
* UpgradeSettings `object`: These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available.
  * maxSurge `integer`: The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.
  * maxUnavailable `integer`: The maximum number of nodes that can be simultaneously unavailable during the upgrade process. A node is considered available if its status is Ready.

### UsableSubnetwork
* UsableSubnetwork `object`: UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range.
  * ipCidrRange `string`: The range of internal addresses that are owned by this subnetwork.
  * network `string`: Network Name. Example: projects/my-project/global/networks/my-network
  * secondaryIpRanges `array`: Secondary IP ranges.
    * items [UsableSubnetworkSecondaryRange](#usablesubnetworksecondaryrange)
  * statusMessage `string`: A human readable status message representing the reasons for cases where the caller cannot use the secondary ranges under the subnet. For example if the secondary_ip_ranges is empty due to a permission issue, an insufficient permission message will be given by status_message.
  * subnetwork `string`: Subnetwork Name. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet

### UsableSubnetworkSecondaryRange
* UsableSubnetworkSecondaryRange `object`: Secondary IP range of a usable subnetwork.
  * ipCidrRange `string`: The range of IP addresses belonging to this subnetwork secondary range.
  * rangeName `string`: The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance.
  * status `string` (values: UNKNOWN, UNUSED, IN_USE_SERVICE, IN_USE_SHAREABLE_POD, IN_USE_MANAGED_POD): This field is to determine the status of the secondary range programmably.

### VerticalPodAutoscaling
* VerticalPodAutoscaling `object`: VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it.
  * enabled `boolean`: Enables vertical pod autoscaling.

### WorkloadIdentityConfig
* WorkloadIdentityConfig `object`: Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
  * identityNamespace `string`: IAM Identity Namespace to attach all Kubernetes Service Accounts to.
  * identityProvider `string`: identity provider is the third party identity provider.
  * workloadPool `string`: The workload pool to attach all Kubernetes service accounts to.

### WorkloadMetadataConfig
* WorkloadMetadataConfig `object`: WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool.
  * mode `string` (values: MODE_UNSPECIFIED, GCE_METADATA, GKE_METADATA): Mode is the configuration for how to expose metadata to workloads running on the node pool.
  * nodeMetadata `string` (values: UNSPECIFIED, SECURE, EXPOSE, GKE_METADATA_SERVER): NodeMetadata is the configuration for how to expose metadata to the workloads running on the node.


