# @datafire/azure_recoveryservices_replicationusages

Client library for RecoveryServicesClient

## Installation and Usage
```bash
npm install --save @datafire/azure_recoveryservices_replicationusages
```
```js
let azure_recoveryservices_replicationusages = require('@datafire/azure_recoveryservices_replicationusages').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_recoveryservices_replicationusages.ReplicationUsages_List({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### ReplicationUsages_List
Fetches the replication usages of the vault.


```js
azure_recoveryservices_replicationusages.ReplicationUsages_List({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "vaultName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription Id.
  * api-version **required** `string`: Client Api Version.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * vaultName **required** `string`: The name of the recovery services vault.

#### Output
* output [ReplicationUsageList](#replicationusagelist)



## Definitions

### JobsSummary
* JobsSummary `object`: Summary of the replication job data for this vault.
  * failedJobs `integer`: Count of failed jobs.
  * inProgressJobs `integer`: Count of in-progress jobs.
  * suspendedJobs `integer`: Count of suspended jobs.

### MonitoringSummary
* MonitoringSummary `object`: Summary of the replication monitoring data for this vault.
  * deprecatedProviderCount `integer`: Count of all deprecated recovery service providers.
  * eventsCount `integer`: Count of all critical warnings.
  * supportedProviderCount `integer`: Count of all the supported recovery service providers.
  * unHealthyProviderCount `integer`: Count of unhealthy replication providers.
  * unHealthyVmCount `integer`: Count of unhealthy VMs.
  * unsupportedProviderCount `integer`: Count of all the unsupported recovery service providers.

### ReplicationUsage
* ReplicationUsage `object`: Replication usages of a vault.
  * jobsSummary [JobsSummary](#jobssummary)
  * monitoringSummary [MonitoringSummary](#monitoringsummary)
  * protectedItemCount `integer`: Number of replication protected items for this vault.
  * recoveryPlanCount `integer`: Number of replication recovery plans for this vault.
  * recoveryServicesProviderAuthType `integer`: The authentication type of recovery service providers in the vault.
  * registeredServersCount `integer`: Number of servers registered to this vault.

### ReplicationUsageList
* ReplicationUsageList `object`: Replication usages for vault.
  * value `array`: The list of replication usages for the given vault.
    * items [ReplicationUsage](#replicationusage)


