# @datafire/azure_sql_disasterrecoveryconfigurations

Client library for Azure SQL Database disaster recovery configurations

## Installation and Usage
```bash
npm install --save @datafire/azure_sql_disasterrecoveryconfigurations
```
```js
let azure_sql_disasterrecoveryconfigurations = require('@datafire/azure_sql_disasterrecoveryconfigurations').create({
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

Provides create, read, update, delete, and failover functionality for Azure SQL Database disaster recovery configurations.

## Actions

### DisasterRecoveryConfigurations_List
Lists a server's disaster recovery configuration.


```js
azure_sql_disasterrecoveryconfigurations.DisasterRecoveryConfigurations_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.

#### Output
* output [DisasterRecoveryConfigurationListResult](#disasterrecoveryconfigurationlistresult)

### DisasterRecoveryConfigurations_Delete
Deletes a disaster recovery configuration.


```js
azure_sql_disasterrecoveryconfigurations.DisasterRecoveryConfigurations_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "disasterRecoveryConfigurationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * disasterRecoveryConfigurationName **required** `string`: The name of the disaster recovery configuration to be deleted.

#### Output
*Output schema unknown*

### DisasterRecoveryConfigurations_Get
Gets a disaster recovery configuration.


```js
azure_sql_disasterrecoveryconfigurations.DisasterRecoveryConfigurations_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "disasterRecoveryConfigurationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * disasterRecoveryConfigurationName **required** `string`: The name of the disaster recovery configuration.

#### Output
* output [DisasterRecoveryConfiguration](#disasterrecoveryconfiguration)

### DisasterRecoveryConfigurations_CreateOrUpdate
Creates or updates a disaster recovery configuration.


```js
azure_sql_disasterrecoveryconfigurations.DisasterRecoveryConfigurations_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "disasterRecoveryConfigurationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * disasterRecoveryConfigurationName **required** `string`: The name of the disaster recovery configuration to be created/updated.

#### Output
* output [DisasterRecoveryConfiguration](#disasterrecoveryconfiguration)

### DisasterRecoveryConfigurations_Failover
Fails over from the current primary server to this server.


```js
azure_sql_disasterrecoveryconfigurations.DisasterRecoveryConfigurations_Failover({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "disasterRecoveryConfigurationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * disasterRecoveryConfigurationName **required** `string`: The name of the disaster recovery configuration to failover.

#### Output
*Output schema unknown*

### DisasterRecoveryConfigurations_FailoverAllowDataLoss
Fails over from the current primary server to this server. This operation might result in data loss.


```js
azure_sql_disasterrecoveryconfigurations.DisasterRecoveryConfigurations_FailoverAllowDataLoss({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "disasterRecoveryConfigurationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the request.
  * subscriptionId **required** `string`: The subscription ID that identifies an Azure subscription.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * serverName **required** `string`: The name of the server.
  * disasterRecoveryConfigurationName **required** `string`: The name of the disaster recovery configuration to failover forcefully.

#### Output
*Output schema unknown*



## Definitions

### DisasterRecoveryConfiguration
* DisasterRecoveryConfiguration `object`: Represents a disaster recovery configuration.
  * location `string`: Location of the server that contains this disaster recovery configuration.
  * properties **required** [DisasterRecoveryConfigurationProperties](#disasterrecoveryconfigurationproperties)
  * type `string`: Type of resource this is.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### DisasterRecoveryConfigurationListResult
* DisasterRecoveryConfigurationListResult `object`: Represents the response to a List disaster recovery configuration request.
  * value `array`: The list of disaster recovery configurations housed under the server.
    * items [DisasterRecoveryConfiguration](#disasterrecoveryconfiguration)

### DisasterRecoveryConfigurationProperties
* DisasterRecoveryConfigurationProperties `object`: Represents the properties of a disaster recovery configuration.
  * autoFailover **required** `string` (values: Off, On): Whether or not failover can be done automatically.
  * failoverPolicy **required** `string` (values: Manual, Automatic): How aggressive the automatic failover should be.
  * logicalServerName `string`: Logical name of the server.
  * partnerLogicalServerName `string`: Logical name of the partner server.
  * partnerServerId **required** `string`: Id of the partner server.
  * role `string` (values: None, Primary, Secondary): The role of the current server in the disaster recovery configuration.
  * status `string` (values: Creating, Ready, FailingOver, Dropping): The status of the disaster recovery configuration.


