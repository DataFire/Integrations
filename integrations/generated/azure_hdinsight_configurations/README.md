# @datafire/azure_hdinsight_configurations

Client library for HDInsightManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_hdinsight_configurations
```
```js
let azure_hdinsight_configurations = require('@datafire/azure_hdinsight_configurations').create({
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

### Configurations_List
Gets all configuration information for an HDI cluster.


```js
azure_hdinsight_configurations.Configurations_List({
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
* output [ClusterConfigurations](#clusterconfigurations)

### Configurations_Get
The configuration object for the specified cluster. This API is not recommended and might be removed in the future. Please consider using List configurations API instead.


```js
azure_hdinsight_configurations.Configurations_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "configurationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * configurationName **required** `string`: The name of the cluster configuration.
  * api-version **required** `string`: The HDInsight client API Version.

#### Output
* output [ClusterConfiguration](#clusterconfiguration)

### Configurations_Update
Configures the HTTP settings on the specified cluster. This API is deprecated, please use UpdateGatewaySettings in cluster endpoint instead.


```js
azure_hdinsight_configurations.Configurations_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "clusterName": "",
  "configurationName": "",
  "api-version": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * clusterName **required** `string`: The name of the cluster.
  * configurationName **required** `string`: The name of the cluster configuration.
  * api-version **required** `string`: The HDInsight client API Version.
  * parameters **required** [ClusterConfiguration](#clusterconfiguration)

#### Output
*Output schema unknown*



## Definitions

### ClusterConfiguration
* ClusterConfiguration `object`: The configuration object for the specified configuration for the specified cluster.

### ClusterConfigurations
* ClusterConfigurations `object`: The configuration object for the specified cluster.
  * configurations `object`: The configuration object for the specified configuration for the specified cluster.


