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

.then(data => {
  console.log(data);
});
```

## Description

The HDInsight Management Client.

## Actions

### Extensions_DisableMonitoring
Disables the Operations Management Suite (OMS) on the HDInsight cluster.


```js
azure_hdinsight_extensions.Extensions_DisableMonitoring({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
*Output schema unknown*

### Extensions_GetMonitoringStatus
Gets the status of Operations Management Suite (OMS) on the HDInsight cluster.


```js
azure_hdinsight_extensions.Extensions_GetMonitoringStatus({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
* output [ClusterMonitoringResponse](#clustermonitoringresponse)

### Extensions_EnableMonitoring
Enables the Operations Management Suite (OMS) on the HDInsight cluster.


```js
azure_hdinsight_extensions.Extensions_EnableMonitoring({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * api-version **required** `string`: The HDInsight client API Version.
  * parameters **required** [ClusterMonitoringRequest](#clustermonitoringrequest)

#### Output
*Output schema unknown*

### Extensions_Delete
Deletes the specified extension for HDInsight cluster.


```js
azure_hdinsight_extensions.Extensions_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "extensionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * extensionName **required** `string`: The name of the cluster extension.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
*Output schema unknown*

### Extensions_Get
Gets the extension properties for the specified HDInsight cluster extension.


```js
azure_hdinsight_extensions.Extensions_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "extensionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * extensionName **required** `string`: The name of the cluster extension.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
* output [Extension](#extension)

### Extensions_Create
Creates an HDInsight cluster extension.


```js
azure_hdinsight_extensions.Extensions_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "extensionName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * extensionName **required** `string`: The name of the cluster extension.
  * api-version **required** `string`: The HDInsight client API Version.
  * parameters **required** [Extension](#extension)

#### Output
*Output schema unknown*



## Definitions

### ClusterMonitoringRequest
* ClusterMonitoringRequest `object`: The Operations Management Suite (OMS) parameters.
  * primaryKey `string`: The Operations Management Suite (OMS) workspace key.
  * workspaceId `string`: The Operations Management Suite (OMS) workspace ID.

### ClusterMonitoringResponse
* ClusterMonitoringResponse `object`: The Operations Management Suite (OMS) status response
  * clusterMonitoringEnabled `boolean`: The status of the Operations Management Suite (OMS) on the HDInsight cluster.
  * workspaceId `string`: The workspace ID of the Operations Management Suite (OMS) on the HDInsight cluster.

### Extension
* Extension `object`: Cluster monitoring extensions
  * primaryKey `string`: The certificate for the cluster monitoring extensions.
  * workspaceId `string`: The workspace ID for the cluster monitoring extension.


