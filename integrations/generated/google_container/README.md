# @datafire/google_container

Client library for Google Container Engine

## Installation and Usage
```bash
npm install --save datafire @datafire/google_container
```

```js
let datafire = require('datafire');
let google_container = require('@datafire/google_container').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_container.projects.zones.clusters.list({}).then(data => {
  console.log(data);
})
```

## Description
The Google Container Engine API is used for building and managing container based applications, powered by the open source Kubernetes technology.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_container.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_container.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### projects.zones.clusters.list
Lists all clusters owned by a project in either the specified zone or all
zones.


```js
google_container.projects.zones.clusters.list({
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

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

#### Parameters
* body (object) - CreateClusterRequest creates a cluster.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

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

#### Parameters
* clusterId (string) **required** - The name of the cluster to delete.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.get
Gets the details of a specific cluster.


```js
google_container.projects.zones.clusters.get({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* clusterId (string) **required** - The name of the cluster to retrieve.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.update
Updates the settings of a specific cluster.


```js
google_container.projects.zones.clusters.update({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* body (object) - UpdateClusterRequest updates the settings of a cluster.
* clusterId (string) **required** - The name of the cluster to upgrade.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.addons
Sets the addons of a specific cluster.


```js
google_container.projects.zones.clusters.addons({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* body (object) - SetAddonsConfigRequest sets the addons associated with the cluster.
* clusterId (string) **required** - The name of the cluster to upgrade.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.legacyAbac
Enables or disables the ABAC authorization mechanism on a cluster.


```js
google_container.projects.zones.clusters.legacyAbac({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* body (object) - SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for
* clusterId (string) **required** - The name of the cluster to update.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.locations
Sets the locations of a specific cluster.


```js
google_container.projects.zones.clusters.locations({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* body (object) - SetLocationsRequest sets the locations of the cluster.
* clusterId (string) **required** - The name of the cluster to upgrade.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.logging
Sets the logging service of a specific cluster.


```js
google_container.projects.zones.clusters.logging({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* body (object) - SetLoggingServiceRequest sets the logging service of a cluster.
* clusterId (string) **required** - The name of the cluster to upgrade.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.master
Updates the master of a specific cluster.


```js
google_container.projects.zones.clusters.master({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* body (object) - UpdateMasterRequest updates the master of the cluster.
* clusterId (string) **required** - The name of the cluster to upgrade.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.monitoring
Sets the monitoring service of a specific cluster.


```js
google_container.projects.zones.clusters.monitoring({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* body (object) - SetMonitoringServiceRequest sets the monitoring service of a cluster.
* clusterId (string) **required** - The name of the cluster to upgrade.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.nodePools.list
Lists the node pools for a cluster.


```js
google_container.projects.zones.clusters.nodePools.list({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* clusterId (string) **required** - The name of the cluster.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.nodePools.create
Creates a node pool for a cluster.


```js
google_container.projects.zones.clusters.nodePools.create({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* body (object) - CreateNodePoolRequest creates a node pool for a cluster.
* clusterId (string) **required** - The name of the cluster.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

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

#### Parameters
* clusterId (string) **required** - The name of the cluster.
* nodePoolId (string) **required** - The name of the node pool to delete.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

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

#### Parameters
* clusterId (string) **required** - The name of the cluster.
* nodePoolId (string) **required** - The name of the node pool.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

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

#### Parameters
* body (object) - SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.
* clusterId (string) **required** - The name of the cluster to upgrade.
* nodePoolId (string) **required** - The name of the node pool to upgrade.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

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

#### Parameters
* body (object) - SetNodePoolManagementRequest sets the node management properties of a node
* clusterId (string) **required** - The name of the cluster to update.
* nodePoolId (string) **required** - The name of the node pool to update.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

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

#### Parameters
* body (object) - SetNodePoolSizeRequest sets the size a node
* clusterId (string) **required** - The name of the cluster to update.
* nodePoolId (string) **required** - The name of the node pool to update.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

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

#### Parameters
* body (object) - UpdateNodePoolRequests update a node pool's image and/or version.
* clusterId (string) **required** - The name of the cluster to upgrade.
* nodePoolId (string) **required** - The name of the node pool to upgrade.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

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

#### Parameters
* body (object) - RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed
* clusterId (string) **required** - The name of the cluster to rollback.
* nodePoolId (string) **required** - The name of the node pool to rollback.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.resourceLabels
Sets labels on a cluster.


```js
google_container.projects.zones.clusters.resourceLabels({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* body (object) - SetLabelsRequest sets the Google Cloud Platform labels on a Google Container
* clusterId (string) **required** - The name of the cluster.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.completeIpRotation
Completes master IP rotation.


```js
google_container.projects.zones.clusters.completeIpRotation({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* body (object) - CompleteIPRotationRequest moves the cluster master back into single-IP mode.
* clusterId (string) **required** - The name of the cluster.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.setMaintenancePolicy
Sets the maintenance policy for a cluster.


```js
google_container.projects.zones.clusters.setMaintenancePolicy({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* body (object) - SetMaintenancePolicyRequest sets the maintenance policy for a cluster.
* clusterId (string) **required** - The name of the cluster to update.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

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

#### Parameters
* body (object) - SetMasterAuthRequest updates the admin password of a cluster.
* clusterId (string) **required** - The name of the cluster to upgrade.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.setNetworkPolicy
Enables/Disables Network Policy for a cluster.


```js
google_container.projects.zones.clusters.setNetworkPolicy({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* body (object) - SetNetworkPolicyRequest enables/disables network policy for a cluster.
* clusterId (string) **required** - The name of the cluster.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.clusters.startIpRotation
Start master IP rotation.


```js
google_container.projects.zones.clusters.startIpRotation({
  "clusterId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* body (object) - StartIPRotationRequest creates a new IP for the cluster and then performs
* clusterId (string) **required** - The name of the cluster.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.operations.list
Lists all operations in a project in a specific zone or all zones.


```js
google_container.projects.zones.operations.list({
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine [zone](/compute/docs/zones#available)
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.operations.get
Gets the specified operation.


```js
google_container.projects.zones.operations.get({
  "operationId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* operationId (string) **required** - The server-assigned `name` of the operation.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.operations.cancel
Cancels the specified operation.


```js
google_container.projects.zones.operations.cancel({
  "operationId": "",
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* body (object) - CancelOperationRequest cancels a single operation.
* operationId (string) **required** - The server-assigned `name` of the operation.
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### projects.zones.getServerconfig
Returns configuration info about the Container Engine service.


```js
google_container.projects.zones.getServerconfig({
  "projectId": "",
  "zone": ""
}, context)
```

#### Parameters
* projectId (string) **required** - The Google Developers Console [project ID or project
* zone (string) **required** - The name of the Google Compute Engine [zone](/compute/docs/zones#available)
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

