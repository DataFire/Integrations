# @datafire/azure_hdinsight_extensions

Client library for HDInsightManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_hdinsight_extensions
```
```js
let azure_hdinsight_extensions = require('@datafire/azure_hdinsight_extensions').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_hdinsight_extensions.Extension_DisableMonitoring({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The HDInsight Management Client.

## Actions

### Extension_DisableMonitoring
Disables the Operations Management Suite (OMS) on the HDInsight cluster.


```js
azure_hdinsight_extensions.Extension_DisableMonitoring({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Extension_GetMonitoringStatus
Gets the status of Operations Management Suite (OMS) on the HDInsight cluster.


```js
azure_hdinsight_extensions.Extension_GetMonitoringStatus({
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ClusterMonitoringResponse](#clustermonitoringresponse)

### Extension_EnableMonitoring
Enables the Operations Management Suite (OMS) on the HDInsight cluster.


```js
azure_hdinsight_extensions.Extension_EnableMonitoring({
  "resourceGroupName": "",
  "clusterName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * parameters **required** [ClusterMonitoringRequest](#clustermonitoringrequest)
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Extension_Delete
Deletes the specified extension for HDInsight cluster.


```js
azure_hdinsight_extensions.Extension_Delete({
  "resourceGroupName": "",
  "clusterName": "",
  "extensionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * extensionName **required** `string` (values: clustermonitoring): The name of the cluster extension.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Extension_Get
Gets the extension properties for the specified HDInsight cluster extension.


```js
azure_hdinsight_extensions.Extension_Get({
  "resourceGroupName": "",
  "clusterName": "",
  "extensionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * extensionName **required** `string` (values: clustermonitoring): The name of the cluster extension.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Extension](#extension)

### Extension_Create
Creates an HDInsight cluster extension.


```js
azure_hdinsight_extensions.Extension_Create({
  "resourceGroupName": "",
  "clusterName": "",
  "parameters": null,
  "extensionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * parameters **required** [Extension](#extension)
  * extensionName **required** `string` (values: clustermonitoring): The name of the cluster extension.
  * api-version **required** `string`: The HDInsight client API Version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*



## Definitions

### ClusterMonitoringRequest
* ClusterMonitoringRequest `object`: The Operations Management Suite (OMS) parameters.
  * primaryKey `string`: The Operations Management Suite (OMS) workspace key.
  * workspaceId `string`: The Operations Management Suite (OMS) workspace ID.

### ClusterMonitoringResponse
* ClusterMonitoringResponse `object`: The Operations Management Suite (OMS) status response
  * ClusterMonitoringEnabled `boolean`: The status of the Operations Management Suite (OMS) on the HDInsight cluster.
  * WorkspaceId `string`: The workspace ID of the Operations Management Suite (OMS) on the HDInsight cluster.

### Extension
* Extension `object`: Cluster monitoring extensions
  * primaryKey `string`: The certificate for the cluster monitoring extensions.
  * workspaceId `string`: The workspace ID for the cluster monitoring extension.


