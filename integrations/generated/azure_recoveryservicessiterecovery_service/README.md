# @datafire/azure_recoveryservicessiterecovery_service

Client library for SiteRecoveryManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_recoveryservicessiterecovery_service
```
```js
let azure_recoveryservicessiterecovery_service = require('@datafire/azure_recoveryservicessiterecovery_service').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_recoveryservicessiterecovery_service.Operations_List({
  "api-version": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Operations_List
Operation to return the list of available operations.


```js
azure_recoveryservicessiterecovery_service.Operations_List({
  "api-version": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [OperationsDiscoveryCollection](#operationsdiscoverycollection)

### ReplicationAlertSettings_List
Gets the list of email notification(alert) configurations for the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationAlertSettings_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [AlertCollection](#alertcollection)

### ReplicationAlertSettings_Get
Gets the details of the specified email notification(alert) configuration.


```js
azure_recoveryservicessiterecovery_service.ReplicationAlertSettings_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "alertSettingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * alertSettingName **required** `string`: The name of the email notification configuration.

#### Output
* output [Alert](#alert)

### ReplicationAlertSettings_Create
Create or update an email notification(alert) configuration.


```js
azure_recoveryservicessiterecovery_service.ReplicationAlertSettings_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "alertSettingName": "",
  "request": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * alertSettingName **required** `string`: The name of the email notification(alert) configuration.
  * request **required** [ConfigureAlertRequest](#configurealertrequest)

#### Output
* output [Alert](#alert)

### ReplicationEvents_List
Gets the list of Azure Site Recovery events for the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationEvents_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * $filter `string`: OData filter options.

#### Output
* output [EventCollection](#eventcollection)

### ReplicationEvents_Get
The operation to get the details of an Azure Site recovery event.


```js
azure_recoveryservicessiterecovery_service.ReplicationEvents_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "eventName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * eventName **required** `string`: The name of the Azure Site Recovery event.

#### Output
* output [Event](#event)

### ReplicationFabrics_List
Gets a list of the Azure Site Recovery fabrics in the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationFabrics_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [FabricCollection](#fabriccollection)

### ReplicationFabrics_Purge
The operation to purge(force delete) an Azure Site Recovery fabric.


```js
azure_recoveryservicessiterecovery_service.ReplicationFabrics_Purge({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: ASR fabric to purge.

#### Output
*Output schema unknown*

### ReplicationFabrics_Get
Gets the details of an Azure Site Recovery fabric.


```js
azure_recoveryservicessiterecovery_service.ReplicationFabrics_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.

#### Output
* output [Fabric](#fabric)

### ReplicationFabrics_Create
The operation to create an Azure Site Recovery fabric (for e.g. Hyper-V site)


```js
azure_recoveryservicessiterecovery_service.ReplicationFabrics_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Name of the ASR fabric.
  * input **required** [FabricCreationInput](#fabriccreationinput)

#### Output
* output [Fabric](#fabric)

### ReplicationFabrics_CheckConsistency
The operation to perform a consistency check on the fabric.


```js
azure_recoveryservicessiterecovery_service.ReplicationFabrics_CheckConsistency({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.

#### Output
* output [Fabric](#fabric)

### ReplicationFabrics_MigrateToAad
The operation to migrate an Azure Site Recovery fabric to AAD.


```js
azure_recoveryservicessiterecovery_service.ReplicationFabrics_MigrateToAad({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: ASR fabric to migrate.

#### Output
*Output schema unknown*

### ReplicationFabrics_ReassociateGateway
The operation to move replications from a process server to another process server.


```js
azure_recoveryservicessiterecovery_service.ReplicationFabrics_ReassociateGateway({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "failoverProcessServerRequest": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: The name of the fabric containing the process server.
  * failoverProcessServerRequest **required** [FailoverProcessServerRequest](#failoverprocessserverrequest)

#### Output
* output [Fabric](#fabric)

### ReplicationFabrics_Delete
The operation to delete or remove an Azure Site Recovery fabric.


```js
azure_recoveryservicessiterecovery_service.ReplicationFabrics_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: ASR fabric to delete

#### Output
*Output schema unknown*

### ReplicationFabrics_RenewCertificate
Renews the connection certificate for the ASR replication fabric.


```js
azure_recoveryservicessiterecovery_service.ReplicationFabrics_RenewCertificate({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "renewCertificate": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: fabric name to renew certs for.
  * renewCertificate **required** [RenewCertificateInput](#renewcertificateinput)

#### Output
* output [Fabric](#fabric)

### ReplicationLogicalNetworks_ListByReplicationFabrics
Lists all the logical networks of the Azure Site Recovery fabric


```js
azure_recoveryservicessiterecovery_service.ReplicationLogicalNetworks_ListByReplicationFabrics({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Server Id.

#### Output
* output [LogicalNetworkCollection](#logicalnetworkcollection)

### ReplicationLogicalNetworks_Get
Gets the details of a logical network.


```js
azure_recoveryservicessiterecovery_service.ReplicationLogicalNetworks_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "logicalNetworkName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Server Id.
  * logicalNetworkName **required** `string`: Logical network name.

#### Output
* output [LogicalNetwork](#logicalnetwork)

### ReplicationNetworks_ListByReplicationFabrics
Lists the networks available for a fabric.


```js
azure_recoveryservicessiterecovery_service.ReplicationNetworks_ListByReplicationFabrics({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name

#### Output
* output [NetworkCollection](#networkcollection)

### ReplicationNetworks_Get
Gets the details of a network.


```js
azure_recoveryservicessiterecovery_service.ReplicationNetworks_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "networkName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Server Id.
  * networkName **required** `string`: Primary network name.

#### Output
* output [Network](#network)

### ReplicationNetworkMappings_ListByReplicationNetworks
Lists all ASR network mappings for the specified network.


```js
azure_recoveryservicessiterecovery_service.ReplicationNetworkMappings_ListByReplicationNetworks({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "networkName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Primary fabric name.
  * networkName **required** `string`: Primary network name.

#### Output
* output [NetworkMappingCollection](#networkmappingcollection)

### ReplicationNetworkMappings_Delete
The operation to delete a network mapping.


```js
azure_recoveryservicessiterecovery_service.ReplicationNetworkMappings_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "networkName": "",
  "networkMappingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Primary fabric name.
  * networkName **required** `string`: Primary network name.
  * networkMappingName **required** `string`: ARM Resource Name for network mapping.

#### Output
*Output schema unknown*

### ReplicationNetworkMappings_Get
Gets the details of an ASR network mapping


```js
azure_recoveryservicessiterecovery_service.ReplicationNetworkMappings_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "networkName": "",
  "networkMappingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Primary fabric name.
  * networkName **required** `string`: Primary network name.
  * networkMappingName **required** `string`: Network mapping name.

#### Output
* output [NetworkMapping](#networkmapping)

### ReplicationNetworkMappings_Update
The operation to update an ASR network mapping.


```js
azure_recoveryservicessiterecovery_service.ReplicationNetworkMappings_Update({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "networkName": "",
  "networkMappingName": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Primary fabric name.
  * networkName **required** `string`: Primary network name.
  * networkMappingName **required** `string`: Network mapping name.
  * input **required** [UpdateNetworkMappingInput](#updatenetworkmappinginput)

#### Output
* output [NetworkMapping](#networkmapping)

### ReplicationNetworkMappings_Create
The operation to create an ASR network mapping.


```js
azure_recoveryservicessiterecovery_service.ReplicationNetworkMappings_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "networkName": "",
  "networkMappingName": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Primary fabric name.
  * networkName **required** `string`: Primary network name.
  * networkMappingName **required** `string`: Network mapping name.
  * input **required** [CreateNetworkMappingInput](#createnetworkmappinginput)

#### Output
* output [NetworkMapping](#networkmapping)

### ReplicationProtectionContainers_ListByReplicationFabrics
Lists the protection containers in the specified fabric.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectionContainers_ListByReplicationFabrics({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.

#### Output
* output [ProtectionContainerCollection](#protectioncontainercollection)

### ReplicationProtectionContainers_Get
Gets the details of a protection container.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectionContainers_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * protectionContainerName **required** `string`: Protection container name.

#### Output
* output [ProtectionContainer](#protectioncontainer)

### ReplicationProtectionContainers_Create
Operation to create a protection container.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectionContainers_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "creationInput": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Unique fabric ARM name.
  * protectionContainerName **required** `string`: Unique protection container ARM name.
  * creationInput **required** [CreateProtectionContainerInput](#createprotectioncontainerinput)

#### Output
* output [ProtectionContainer](#protectioncontainer)

### ReplicationProtectionContainers_DiscoverProtectableItem
The operation to a add a protectable item to a protection container(Add physical server.)


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectionContainers_DiscoverProtectableItem({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "discoverProtectableItemRequest": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: The name of the fabric.
  * protectionContainerName **required** `string`: The name of the protection container.
  * discoverProtectableItemRequest **required** [DiscoverProtectableItemRequest](#discoverprotectableitemrequest)

#### Output
* output [ProtectionContainer](#protectioncontainer)

### ReplicationProtectionContainers_Delete
Operation to remove a protection container.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectionContainers_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Unique fabric ARM name.
  * protectionContainerName **required** `string`: Unique protection container ARM name.

#### Output
*Output schema unknown*

### ReplicationProtectableItems_ListByReplicationProtectionContainers
Lists the protectable items in a protection container.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectableItems_ListByReplicationProtectionContainers({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * $filter `string`: OData filter options.

#### Output
* output [ProtectableItemCollection](#protectableitemcollection)

### ReplicationProtectableItems_Get
The operation to get the details of a protectable item.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectableItems_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "protectableItemName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * protectableItemName **required** `string`: Protectable item name.

#### Output
* output [ProtectableItem](#protectableitem)

### ReplicationProtectedItems_ListByReplicationProtectionContainers
Gets the list of ASR replication protected items in the protection container.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_ListByReplicationProtectionContainers({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * protectionContainerName **required** `string`: Protection container name.

#### Output
* output [ReplicationProtectedItemCollection](#replicationprotecteditemcollection)

### ReplicationProtectedItems_Purge
The operation to delete or purge a replication protected item. This operation will force delete the replication protected item. Use the remove operation on replication protected item to perform a clean disable replication for the item.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_Purge({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * replicatedProtectedItemName **required** `string`: Replication protected item name.

#### Output
*Output schema unknown*

### ReplicationProtectedItems_Get
Gets the details of an ASR replication protected item.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric unique name.
  * protectionContainerName **required** `string`: Protection container name.
  * replicatedProtectedItemName **required** `string`: Replication protected item name.

#### Output
* output [ReplicationProtectedItem](#replicationprotecteditem)

### ReplicationProtectedItems_Update
The operation to update the recovery settings of an ASR replication protected item.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_Update({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": "",
  "updateProtectionInput": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * replicatedProtectedItemName **required** `string`: Replication protected item name.
  * updateProtectionInput **required** [UpdateReplicationProtectedItemInput](#updatereplicationprotectediteminput)

#### Output
* output [ReplicationProtectedItem](#replicationprotecteditem)

### ReplicationProtectedItems_Create
The operation to create an ASR replication protected item (Enable replication).


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Name of the fabric.
  * protectionContainerName **required** `string`: Protection container name.
  * replicatedProtectedItemName **required** `string`: A name for the replication protected item.
  * input **required** [EnableProtectionInput](#enableprotectioninput)

#### Output
* output [ReplicationProtectedItem](#replicationprotecteditem)

### ReplicationProtectedItems_ApplyRecoveryPoint
The operation to change the recovery point of a failed over replication protected item.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_ApplyRecoveryPoint({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": "",
  "applyRecoveryPointInput": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: The ARM fabric name.
  * protectionContainerName **required** `string`: The protection container name.
  * replicatedProtectedItemName **required** `string`: The replicated protected item's name.
  * applyRecoveryPointInput **required** [ApplyRecoveryPointInput](#applyrecoverypointinput)

#### Output
* output [ReplicationProtectedItem](#replicationprotecteditem)

### ReplicationProtectedItems_FailoverCommit
Operation to commit the failover of the replication protected item.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_FailoverCommit({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Unique fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * replicatedProtectedItemName **required** `string`: Replication protected item name.

#### Output
* output [ReplicationProtectedItem](#replicationprotecteditem)

### ReplicationProtectedItems_PlannedFailover
Operation to initiate a planned failover of the replication protected item.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_PlannedFailover({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": "",
  "failoverInput": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Unique fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * replicatedProtectedItemName **required** `string`: Replication protected item name.
  * failoverInput **required** [PlannedFailoverInput](#plannedfailoverinput)

#### Output
* output [ReplicationProtectedItem](#replicationprotecteditem)

### ReplicationProtectedItems_Reprotect
Operation to reprotect or reverse replicate a failed over replication protected item.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_Reprotect({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": "",
  "rrInput": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Unique fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * replicatedProtectedItemName **required** `string`: Replication protected item name.
  * rrInput **required** [ReverseReplicationInput](#reversereplicationinput)

#### Output
* output [ReplicationProtectedItem](#replicationprotecteditem)

### RecoveryPoints_ListByReplicationProtectedItems
Lists the available recovery points for a replication protected item.


```js
azure_recoveryservicessiterecovery_service.RecoveryPoints_ListByReplicationProtectedItems({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: The fabric name.
  * protectionContainerName **required** `string`: The protection container name.
  * replicatedProtectedItemName **required** `string`: The replication protected item's name.

#### Output
* output [RecoveryPointCollection](#recoverypointcollection)

### RecoveryPoints_Get
Get the details of specified recovery point.


```js
azure_recoveryservicessiterecovery_service.RecoveryPoints_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": "",
  "recoveryPointName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: The fabric name.
  * protectionContainerName **required** `string`: The protection container name.
  * replicatedProtectedItemName **required** `string`: The replication protected item's name.
  * recoveryPointName **required** `string`: The recovery point name.

#### Output
* output [RecoveryPoint](#recoverypoint)

### ReplicationProtectedItems_Delete
The operation to disable replication on a replication protected item. This will also remove the item.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": "",
  "disableProtectionInput": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * replicatedProtectedItemName **required** `string`: Replication protected item name.
  * disableProtectionInput **required** [DisableProtectionInput](#disableprotectioninput)

#### Output
*Output schema unknown*

### ReplicationProtectedItems_RepairReplication
The operation to start resynchronize/repair replication for a replication protected item requiring resynchronization.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_RepairReplication({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: The name of the fabric.
  * protectionContainerName **required** `string`: The name of the container.
  * replicatedProtectedItemName **required** `string`: The name of the replication protected item.

#### Output
* output [ReplicationProtectedItem](#replicationprotecteditem)

### TargetComputeSizes_ListByReplicationProtectedItems
Lists the available target compute sizes for a replication protected item.


```js
azure_recoveryservicessiterecovery_service.TargetComputeSizes_ListByReplicationProtectedItems({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * protectionContainerName **required** `string`: protection container name.
  * replicatedProtectedItemName **required** `string`: Replication protected item name.

#### Output
* output [TargetComputeSizeCollection](#targetcomputesizecollection)

### ReplicationProtectedItems_TestFailover
Operation to perform a test failover of the replication protected item.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_TestFailover({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": "",
  "failoverInput": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Unique fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * replicatedProtectedItemName **required** `string`: Replication protected item name.
  * failoverInput **required** [TestFailoverInput](#testfailoverinput)

#### Output
* output [ReplicationProtectedItem](#replicationprotecteditem)

### ReplicationProtectedItems_TestFailoverCleanup
Operation to clean up the test failover of a replication protected item.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_TestFailoverCleanup({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": "",
  "cleanupInput": {
    "properties": {}
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Unique fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * replicatedProtectedItemName **required** `string`: Replication protected item name.
  * cleanupInput **required** [TestFailoverCleanupInput](#testfailovercleanupinput)

#### Output
* output [ReplicationProtectedItem](#replicationprotecteditem)

### ReplicationProtectedItems_UnplannedFailover
Operation to initiate a failover of the replication protected item.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_UnplannedFailover({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": "",
  "failoverInput": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Unique fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * replicatedProtectedItemName **required** `string`: Replication protected item name.
  * failoverInput **required** [UnplannedFailoverInput](#unplannedfailoverinput)

#### Output
* output [ReplicationProtectedItem](#replicationprotecteditem)

### ReplicationProtectedItems_UpdateMobilityService
The operation to update(push update) the installed mobility service software on a replication protected item to the latest available version.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_UpdateMobilityService({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicationProtectedItemName": "",
  "updateMobilityServiceRequest": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: The name of the fabric containing the protected item.
  * protectionContainerName **required** `string`: The name of the container containing the protected item.
  * replicationProtectedItemName **required** `string`: The name of the protected item on which the agent is to be updated.
  * updateMobilityServiceRequest **required** [UpdateMobilityServiceRequest](#updatemobilityservicerequest)

#### Output
* output [ReplicationProtectedItem](#replicationprotecteditem)

### ReplicationProtectionContainerMappings_ListByReplicationProtectionContainers
Lists the protection container mappings for a protection container.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectionContainerMappings_ListByReplicationProtectionContainers({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * protectionContainerName **required** `string`: Protection container name.

#### Output
* output [ProtectionContainerMappingCollection](#protectioncontainermappingcollection)

### ReplicationProtectionContainerMappings_Purge
The operation to purge(force delete) a protection container mapping


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectionContainerMappings_Purge({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "mappingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * mappingName **required** `string`: Protection container mapping name.

#### Output
*Output schema unknown*

### ReplicationProtectionContainerMappings_Get
Gets the details of a protection container mapping.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectionContainerMappings_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "mappingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * mappingName **required** `string`: Protection Container mapping name.

#### Output
* output [ProtectionContainerMapping](#protectioncontainermapping)

### ReplicationProtectionContainerMappings_Update
The operation to update protection container mapping.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectionContainerMappings_Update({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "mappingName": "",
  "updateInput": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * mappingName **required** `string`: Protection container mapping name.
  * updateInput **required** [UpdateProtectionContainerMappingInput](#updateprotectioncontainermappinginput)

#### Output
* output [ProtectionContainerMapping](#protectioncontainermapping)

### ReplicationProtectionContainerMappings_Create
The operation to create a protection container mapping.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectionContainerMappings_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "mappingName": "",
  "creationInput": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * mappingName **required** `string`: Protection container mapping name.
  * creationInput **required** [CreateProtectionContainerMappingInput](#createprotectioncontainermappinginput)

#### Output
* output [ProtectionContainerMapping](#protectioncontainermapping)

### ReplicationProtectionContainerMappings_Delete
The operation to delete or remove a protection container mapping.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectionContainerMappings_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "mappingName": "",
  "removalInput": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * mappingName **required** `string`: Protection container mapping name.
  * removalInput **required** [RemoveProtectionContainerMappingInput](#removeprotectioncontainermappinginput)

#### Output
*Output schema unknown*

### ReplicationProtectionContainers_SwitchProtection
Operation to switch protection from one container to another or one replication provider to another.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectionContainers_SwitchProtection({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "switchInput": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Unique fabric name.
  * protectionContainerName **required** `string`: Protection container name.
  * switchInput **required** [SwitchProtectionInput](#switchprotectioninput)

#### Output
* output [ProtectionContainer](#protectioncontainer)

### ReplicationRecoveryServicesProviders_ListByReplicationFabrics
Lists the registered recovery services providers for the specified fabric.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryServicesProviders_ListByReplicationFabrics({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name

#### Output
* output [RecoveryServicesProviderCollection](#recoveryservicesprovidercollection)

### ReplicationRecoveryServicesProviders_Purge
The operation to purge(force delete) a recovery services provider from the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryServicesProviders_Purge({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "providerName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * providerName **required** `string`: Recovery services provider name.

#### Output
*Output schema unknown*

### ReplicationRecoveryServicesProviders_Get
Gets the details of registered recovery services provider.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryServicesProviders_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "providerName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * providerName **required** `string`: Recovery services provider name

#### Output
* output [RecoveryServicesProvider](#recoveryservicesprovider)

### ReplicationRecoveryServicesProviders_RefreshProvider
The operation to refresh the information from the recovery services provider.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryServicesProviders_RefreshProvider({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "providerName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * providerName **required** `string`: Recovery services provider name.

#### Output
* output [RecoveryServicesProvider](#recoveryservicesprovider)

### ReplicationRecoveryServicesProviders_Delete
The operation to removes/delete(unregister) a recovery services provider from the vault


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryServicesProviders_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "providerName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * providerName **required** `string`: Recovery services provider name.

#### Output
*Output schema unknown*

### ReplicationStorageClassifications_ListByReplicationFabrics
Lists the storage classifications available in the specified fabric.


```js
azure_recoveryservicessiterecovery_service.ReplicationStorageClassifications_ListByReplicationFabrics({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Site name of interest.

#### Output
* output [StorageClassificationCollection](#storageclassificationcollection)

### ReplicationStorageClassifications_Get
Gets the details of the specified storage classification.


```js
azure_recoveryservicessiterecovery_service.ReplicationStorageClassifications_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "storageClassificationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * storageClassificationName **required** `string`: Storage classification name.

#### Output
* output [StorageClassification](#storageclassification)

### ReplicationStorageClassificationMappings_ListByReplicationStorageClassifications
Lists the storage classification mappings for the fabric.


```js
azure_recoveryservicessiterecovery_service.ReplicationStorageClassificationMappings_ListByReplicationStorageClassifications({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "storageClassificationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * storageClassificationName **required** `string`: Storage classfication name.

#### Output
* output [StorageClassificationMappingCollection](#storageclassificationmappingcollection)

### ReplicationStorageClassificationMappings_Delete
The operation to delete a storage classification mapping.


```js
azure_recoveryservicessiterecovery_service.ReplicationStorageClassificationMappings_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "storageClassificationName": "",
  "storageClassificationMappingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * storageClassificationName **required** `string`: Storage classification name.
  * storageClassificationMappingName **required** `string`: Storage classification mapping name.

#### Output
*Output schema unknown*

### ReplicationStorageClassificationMappings_Get
Gets the details of the specified storage classification mapping.


```js
azure_recoveryservicessiterecovery_service.ReplicationStorageClassificationMappings_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "storageClassificationName": "",
  "storageClassificationMappingName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * storageClassificationName **required** `string`: Storage classification name.
  * storageClassificationMappingName **required** `string`: Storage classification mapping name.

#### Output
* output [StorageClassificationMapping](#storageclassificationmapping)

### ReplicationStorageClassificationMappings_Create
The operation to create a storage classification mapping.


```js
azure_recoveryservicessiterecovery_service.ReplicationStorageClassificationMappings_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "storageClassificationName": "",
  "storageClassificationMappingName": "",
  "pairingInput": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * storageClassificationName **required** `string`: Storage classification name.
  * storageClassificationMappingName **required** `string`: Storage classification mapping name.
  * pairingInput **required** [StorageClassificationMappingInput](#storageclassificationmappinginput)

#### Output
* output [StorageClassificationMapping](#storageclassificationmapping)

### ReplicationvCenters_ListByReplicationFabrics
Lists the vCenter servers registered in a fabric.


```js
azure_recoveryservicessiterecovery_service.ReplicationvCenters_ListByReplicationFabrics({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.

#### Output
* output [VCenterCollection](#vcentercollection)

### ReplicationvCenters_Delete
The operation to remove(unregister) a registered vCenter server from the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationvCenters_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "vCenterName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * vCenterName **required** `string`: vCenter name.

#### Output
*Output schema unknown*

### ReplicationvCenters_Get
Gets the details of a registered vCenter server(Add vCenter server.)


```js
azure_recoveryservicessiterecovery_service.ReplicationvCenters_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "vCenterName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * vCenterName **required** `string`: vCenter name.

#### Output
* output [VCenter](#vcenter)

### ReplicationvCenters_Update
The operation to update a registered vCenter.


```js
azure_recoveryservicessiterecovery_service.ReplicationvCenters_Update({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "vCenterName": "",
  "updateVCenterRequest": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * vCenterName **required** `string`: vCeneter name
  * updateVCenterRequest **required** [UpdateVCenterRequest](#updatevcenterrequest)

#### Output
* output [VCenter](#vcenter)

### ReplicationvCenters_Create
The operation to create a vCenter object..


```js
azure_recoveryservicessiterecovery_service.ReplicationvCenters_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "vCenterName": "",
  "addVCenterRequest": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * fabricName **required** `string`: Fabric name.
  * vCenterName **required** `string`: vCenter name.
  * addVCenterRequest **required** [AddVCenterRequest](#addvcenterrequest)

#### Output
* output [VCenter](#vcenter)

### ReplicationJobs_List
Gets the list of Azure Site Recovery Jobs for the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationJobs_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * $filter `string`: OData filter options.

#### Output
* output [JobCollection](#jobcollection)

### ReplicationJobs_Export
The operation to export the details of the Azure Site Recovery jobs of the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationJobs_Export({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobQueryParameter": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * jobQueryParameter **required** [JobQueryParameter](#jobqueryparameter)

#### Output
* output [Job](#job)

### ReplicationJobs_Get
Get the details of an Azure Site Recovery job.


```js
azure_recoveryservicessiterecovery_service.ReplicationJobs_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * jobName **required** `string`: Job identifier

#### Output
* output [Job](#job)

### ReplicationJobs_Cancel
The operation to cancel an Azure Site Recovery job.


```js
azure_recoveryservicessiterecovery_service.ReplicationJobs_Cancel({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * jobName **required** `string`: Job indentifier.

#### Output
* output [Job](#job)

### ReplicationJobs_Restart
The operation to restart an Azure Site Recovery job.


```js
azure_recoveryservicessiterecovery_service.ReplicationJobs_Restart({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * jobName **required** `string`: Job identifier.

#### Output
* output [Job](#job)

### ReplicationJobs_Resume
The operation to resume an Azure Site Recovery job


```js
azure_recoveryservicessiterecovery_service.ReplicationJobs_Resume({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": "",
  "resumeJobParams": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * jobName **required** `string`: Job identifier.
  * resumeJobParams **required** [ResumeJobParams](#resumejobparams)

#### Output
* output [Job](#job)

### ReplicationNetworkMappings_List
Lists all ASR network mappings in the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationNetworkMappings_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [NetworkMappingCollection](#networkmappingcollection)

### ReplicationNetworks_List
Lists the networks available in a vault


```js
azure_recoveryservicessiterecovery_service.ReplicationNetworks_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [NetworkCollection](#networkcollection)

### ReplicationPolicies_List
Lists the replication policies for a vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationPolicies_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [PolicyCollection](#policycollection)

### ReplicationPolicies_Delete
The operation to delete a replication policy.


```js
azure_recoveryservicessiterecovery_service.ReplicationPolicies_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * policyName **required** `string`: Replication policy name.

#### Output
*Output schema unknown*

### ReplicationPolicies_Get
Gets the details of a replication policy.


```js
azure_recoveryservicessiterecovery_service.ReplicationPolicies_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * policyName **required** `string`: Replication policy name.

#### Output
* output [Policy](#policy)

### ReplicationPolicies_Update
The operation to update a replication policy.


```js
azure_recoveryservicessiterecovery_service.ReplicationPolicies_Update({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * policyName **required** `string`: Policy Id.
  * input **required** [UpdatePolicyInput](#updatepolicyinput)

#### Output
* output [Policy](#policy)

### ReplicationPolicies_Create
The operation to create a replication policy


```js
azure_recoveryservicessiterecovery_service.ReplicationPolicies_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * policyName **required** `string`: Replication policy name
  * input **required** [CreatePolicyInput](#createpolicyinput)

#### Output
* output [Policy](#policy)

### ReplicationProtectedItems_List
Gets the list of ASR replication protected items in the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectedItems_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * skipToken `string`: The pagination token. Possible values: "FabricId" or "FabricId_CloudId" or null
  * $filter `string`: OData filter options.

#### Output
* output [ReplicationProtectedItemCollection](#replicationprotecteditemcollection)

### ReplicationProtectionContainerMappings_List
Lists the protection container mappings in the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectionContainerMappings_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [ProtectionContainerMappingCollection](#protectioncontainermappingcollection)

### ReplicationProtectionContainers_List
Lists the protection containers in a vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationProtectionContainers_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [ProtectionContainerCollection](#protectioncontainercollection)

### ReplicationRecoveryPlans_List
Lists the recovery plans in the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryPlans_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [RecoveryPlanCollection](#recoveryplancollection)

### ReplicationRecoveryPlans_Delete
Delete a recovery plan.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryPlans_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * recoveryPlanName **required** `string`: Recovery plan name.

#### Output
*Output schema unknown*

### ReplicationRecoveryPlans_Get
Gets the details of the recovery plan.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryPlans_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * recoveryPlanName **required** `string`: Name of the recovery plan.

#### Output
* output [RecoveryPlan](#recoveryplan)

### ReplicationRecoveryPlans_Update
The operation to update a recovery plan.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryPlans_Update({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": "",
  "input": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * recoveryPlanName **required** `string`: Recovery plan name.
  * input **required** [UpdateRecoveryPlanInput](#updaterecoveryplaninput)

#### Output
* output [RecoveryPlan](#recoveryplan)

### ReplicationRecoveryPlans_Create
The operation to create a recovery plan.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryPlans_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": "",
  "input": {
    "properties": {
      "primaryFabricId": "",
      "recoveryFabricId": "",
      "groups": []
    }
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * recoveryPlanName **required** `string`: Recovery plan name.
  * input **required** [CreateRecoveryPlanInput](#createrecoveryplaninput)

#### Output
* output [RecoveryPlan](#recoveryplan)

### ReplicationRecoveryPlans_FailoverCommit
The operation to commit the fail over of a recovery plan.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryPlans_FailoverCommit({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * recoveryPlanName **required** `string`: Recovery plan name.

#### Output
* output [RecoveryPlan](#recoveryplan)

### ReplicationRecoveryPlans_PlannedFailover
The operation to start the planned failover of a recovery plan.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryPlans_PlannedFailover({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": "",
  "input": {
    "properties": {
      "failoverDirection": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * recoveryPlanName **required** `string`: Recovery plan name.
  * input **required** [RecoveryPlanPlannedFailoverInput](#recoveryplanplannedfailoverinput)

#### Output
* output [RecoveryPlan](#recoveryplan)

### ReplicationRecoveryPlans_Reprotect
The operation to reprotect(reverse replicate) a recovery plan.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryPlans_Reprotect({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * recoveryPlanName **required** `string`: Recovery plan name.

#### Output
* output [RecoveryPlan](#recoveryplan)

### ReplicationRecoveryPlans_TestFailover
The operation to start the test failover of a recovery plan.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryPlans_TestFailover({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": "",
  "input": {
    "properties": {
      "failoverDirection": "",
      "networkType": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * recoveryPlanName **required** `string`: Recovery plan name.
  * input **required** [RecoveryPlanTestFailoverInput](#recoveryplantestfailoverinput)

#### Output
* output [RecoveryPlan](#recoveryplan)

### ReplicationRecoveryPlans_TestFailoverCleanup
The operation to cleanup test failover of a recovery plan.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryPlans_TestFailoverCleanup({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": "",
  "input": {
    "properties": {}
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * recoveryPlanName **required** `string`: Recovery plan name.
  * input **required** [RecoveryPlanTestFailoverCleanupInput](#recoveryplantestfailovercleanupinput)

#### Output
* output [RecoveryPlan](#recoveryplan)

### ReplicationRecoveryPlans_UnplannedFailover
The operation to start the failover of a recovery plan.


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryPlans_UnplannedFailover({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": "",
  "input": {
    "properties": {
      "failoverDirection": "",
      "sourceSiteOperations": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.
  * recoveryPlanName **required** `string`: Recovery plan name.
  * input **required** [RecoveryPlanUnplannedFailoverInput](#recoveryplanunplannedfailoverinput)

#### Output
* output [RecoveryPlan](#recoveryplan)

### ReplicationRecoveryServicesProviders_List
Lists the registered recovery services providers in the vault


```js
azure_recoveryservicessiterecovery_service.ReplicationRecoveryServicesProviders_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [RecoveryServicesProviderCollection](#recoveryservicesprovidercollection)

### ReplicationStorageClassificationMappings_List
Lists the storage classification mappings in the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationStorageClassificationMappings_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [StorageClassificationMappingCollection](#storageclassificationmappingcollection)

### ReplicationStorageClassifications_List
Lists the storage classifications in the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationStorageClassifications_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [StorageClassificationCollection](#storageclassificationcollection)

### ReplicationVaultHealth_Get
Gets the health details of the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationVaultHealth_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [VaultHealthDetails](#vaulthealthdetails)

### ReplicationVaultHealth_Refresh
Refreshes health summary of the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationVaultHealth_Refresh({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [VaultHealthDetails](#vaulthealthdetails)

### ReplicationvCenters_List
Lists the vCenter servers registered in the vault.


```js
azure_recoveryservicessiterecovery_service.ReplicationvCenters_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * resourceName **required** `string`: The name of the recovery services vault.
  * resourceGroupName **required** `string`: The name of the resource group where the recovery services vault is present.
  * subscriptionId **required** `string`: The subscription Id.

#### Output
* output [VCenterCollection](#vcentercollection)



## Definitions

### A2AApplyRecoveryPointInput
* A2AApplyRecoveryPointInput `object`: ApplyRecoveryPoint input specific to A2A provider.
  * instanceType `string`: The class type.

### A2AContainerCreationInput
* A2AContainerCreationInput `object`: A2A cloud creation input.
  * instanceType `string`: The class type.

### A2AContainerMappingInput
* A2AContainerMappingInput `object`: A2A container mapping input.
  * agentAutoUpdateStatus `string` (values: Disabled, Enabled): A value indicating whether the auto update is enabled.
  * automationAccountArmId `string`: The automation account arm id.
  * instanceType `string`: The class type.

### A2AEnableProtectionInput
* A2AEnableProtectionInput `object`: A2A enable protection input.
  * fabricObjectId `string`: The fabric specific object Id of the virtual machine.
  * multiVmGroupName `string`: The multi vm group name.
  * recoveryAvailabilitySetId `string`: The recovery availability set Id.
  * recoveryBootDiagStorageAccountId `string`: The boot diagnostic storage account.
  * recoveryCloudServiceId `string`: The recovery cloud service Id. Valid for V1 scenarios.
  * recoveryContainerId `string`: The recovery container Id.
  * recoveryResourceGroupId `string`: The recovery resource group Id. Valid for V2 scenarios.
  * vmDisks `array`: The list of vm disk details.
    * items [A2AVmDiskInputDetails](#a2avmdiskinputdetails)
  * vmManagedDisks `array`: The list of vm managed disk details.
    * items [A2AVmManagedDiskInputDetails](#a2avmmanageddiskinputdetails)
  * instanceType `string`: The class type.

### A2AEventDetails
* A2AEventDetails `object`: Model class for event details of a A2A event.
  * fabricLocation `string`: The fabric location.
  * fabricName `string`: Fabric arm name.
  * fabricObjectId `string`: The azure vm arm id.
  * protectedItemName `string`: The protected item arm name.
  * remoteFabricLocation `string`: Remote fabric location.
  * remoteFabricName `string`: Remote fabric arm name.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### A2AFailoverProviderInput
* A2AFailoverProviderInput `object`: A2A provider specific input for failover.
  * cloudServiceCreationOption `string`: A value indicating whether to use recovery cloud service for TFO or not.
  * recoveryPointId `string`: The recovery point id to be passed to failover to a particular recovery point. In case of latest recovery point, null should be passed.
  * instanceType `string`: The class type.

### A2APolicyCreationInput
* A2APolicyCreationInput `object`: A2A Policy creation input.
  * appConsistentFrequencyInMinutes `integer`: The app consistent snapshot frequency (in minutes).
  * crashConsistentFrequencyInMinutes `integer`: The crash consistent snapshot frequency (in minutes).
  * multiVmSyncStatus **required** `string` (values: Enable, Disable): A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
  * recoveryPointHistory `integer`: The duration in minutes until which the recovery points need to be stored.
  * instanceType `string`: The class type.

### A2APolicyDetails
* A2APolicyDetails `object`: A2A specific policy details.
  * appConsistentFrequencyInMinutes `integer`: The app consistent snapshot frequency in minutes.
  * crashConsistentFrequencyInMinutes `integer`: The crash consistent snapshot frequency in minutes.
  * multiVmSyncStatus `string`: A value indicating whether multi-VM sync has to be enabled.
  * recoveryPointHistory `integer`: The duration in minutes until which the recovery points need to be stored.
  * recoveryPointThresholdInMinutes `integer`: The recovery point threshold in minutes.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### A2AProtectedDiskDetails
* A2AProtectedDiskDetails `object`: A2A protected disk details.
  * dataPendingAtSourceAgentInMB `number`: The data pending at source virtual machine in MB.
  * dataPendingInStagingStorageAccountInMB `number`: The data pending for replication in MB at staging account.
  * diskCapacityInBytes `integer`: The disk capacity in bytes.
  * diskName `string`: The disk name.
  * diskType `string`: The type of disk.
  * diskUri `string`: The disk uri.
  * monitoringJobType `string`: The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
  * monitoringPercentageCompletion `integer`: The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
  * primaryDiskAzureStorageAccountId `string`: The primary disk storage account.
  * primaryStagingAzureStorageAccountId `string`: The primary staging storage account.
  * recoveryAzureStorageAccountId `string`: The recovery disk storage account.
  * recoveryDiskUri `string`: Recovery disk uri.
  * resyncRequired `boolean`: A value indicating whether resync is required for this disk.

### A2AProtectedManagedDiskDetails
* A2AProtectedManagedDiskDetails `object`: A2A protected managed disk details.
  * dataPendingAtSourceAgentInMB `number`: The data pending at source virtual machine in MB.
  * dataPendingInStagingStorageAccountInMB `number`: The data pending for replication in MB at staging account.
  * diskCapacityInBytes `integer`: The disk capacity in bytes.
  * diskId `string`: The managed disk Arm id.
  * diskName `string`: The disk name.
  * diskType `string`: The type of disk.
  * monitoringJobType `string`: The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
  * monitoringPercentageCompletion `integer`: The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
  * primaryStagingAzureStorageAccountId `string`: The primary staging storage account.
  * recoveryReplicaDiskAccountType `string`: The replica disk type. Its an optional value and will be same as source disk type if not user provided.
  * recoveryReplicaDiskId `string`: Recovery replica disk Arm Id.
  * recoveryResourceGroupId `string`: The recovery disk resource group Arm Id.
  * recoveryTargetDiskAccountType `string`: The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.
  * recoveryTargetDiskId `string`: Recovery target disk Arm Id.
  * resyncRequired `boolean`: A value indicating whether resync is required for this disk.

### A2AProtectionContainerMappingDetails
* A2AProtectionContainerMappingDetails `object`: A2A provider specific settings.
  * agentAutoUpdateStatus `string` (values: Disabled, Enabled): A value indicating whether the auto update is enabled.
  * automationAccountArmId `string`: The automation account arm id.
  * jobScheduleName `string`: The job schedule arm name.
  * scheduleName `string`: The schedule arm name.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### A2ARecoveryPointDetails
* A2ARecoveryPointDetails `object`: A2A provider specific recovery point details.
  * recoveryPointSyncType `string` (values: MultiVmSyncRecoveryPoint, PerVmRecoveryPoint): A value indicating whether the recovery point is multi VM consistent.
  * instanceType `string`: Gets the provider type.

### A2AReplicationDetails
* A2AReplicationDetails `object`: A2A provider specific settings.
  * agentVersion `string`: The agent version.
  * fabricObjectId `string`: The fabric specific object Id of the virtual machine.
  * isReplicationAgentUpdateRequired `boolean`: A value indicating whether replication agent update is required.
  * lastHeartbeat `string`: The last heartbeat received from the source server.
  * lastRpoCalculatedTime `string`: The time (in UTC) when the last RPO value was calculated by Protection Service.
  * lifecycleId `string`: An id associated with the PE that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the "same" protected item even though other internal Ids/ARM Id might be changing.
  * managementId `string`: The management Id.
  * monitoringJobType `string`: The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
  * monitoringPercentageCompletion `integer`: The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
  * multiVmGroupCreateOption `string` (values: AutoCreated, UserSpecified): Whether Multi VM group is auto created or specified by user.
  * multiVmGroupId `string`: The multi vm group Id.
  * multiVmGroupName `string`: The multi vm group name.
  * osType `string`: The type of operating system.
  * primaryFabricLocation `string`: Primary fabric location.
  * protectedDisks `array`: The list of protected disks.
    * items [A2AProtectedDiskDetails](#a2aprotecteddiskdetails)
  * protectedManagedDisks `array`: The list of protected managed disks.
    * items [A2AProtectedManagedDiskDetails](#a2aprotectedmanageddiskdetails)
  * recoveryAvailabilitySet `string`: The recovery availability set.
  * recoveryAzureResourceGroupId `string`: The recovery resource group.
  * recoveryAzureVMName `string`: The name of recovery virtual machine.
  * recoveryAzureVMSize `string`: The size of recovery virtual machine.
  * recoveryBootDiagStorageAccountId `string`: The recovery boot diagnostic storage account Arm Id.
  * recoveryCloudService `string`: The recovery cloud service.
  * recoveryFabricLocation `string`: The recovery fabric location.
  * recoveryFabricObjectId `string`: The recovery fabric object Id.
  * rpoInSeconds `integer`: The last RPO value in seconds.
  * selectedRecoveryAzureNetworkId `string`: The recovery virtual network.
  * testFailoverRecoveryFabricObjectId `string`: The test failover fabric object Id.
  * vmNics `array`: The virtual machine nic details.
    * items [VMNicDetails](#vmnicdetails)
  * vmProtectionState `string`: The protection state for the vm.
  * vmProtectionStateDescription `string`: The protection state description for the vm.
  * vmSyncedConfigDetails [AzureToAzureVmSyncedConfigDetails](#azuretoazurevmsyncedconfigdetails)
  * instanceType `string`: Gets the Instance type.

### A2AReprotectInput
* A2AReprotectInput `object`: Azure specific reprotect input.
  * policyId `string`: The Policy Id.
  * recoveryAvailabilitySetId `string`: The recovery availability set.
  * recoveryCloudServiceId `string`: The recovery cloud service Id. Valid for V1 scenarios.
  * recoveryContainerId `string`: The recovery container Id.
  * recoveryResourceGroupId `string`: The recovery resource group Id. Valid for V2 scenarios.
  * vmDisks `array`: The list of vm disk details.
    * items [A2AVmDiskInputDetails](#a2avmdiskinputdetails)
  * instanceType `string`: The class type.

### A2ASwitchProtectionInput
* A2ASwitchProtectionInput `object`: A2A specific switch protection input.
  * policyId `string`: The Policy Id.
  * recoveryAvailabilitySetId `string`: The recovery availability set.
  * recoveryBootDiagStorageAccountId `string`: The boot diagnostic storage account.
  * recoveryCloudServiceId `string`: The recovery cloud service Id. Valid for V1 scenarios.
  * recoveryContainerId `string`: The recovery container Id.
  * recoveryResourceGroupId `string`: The recovery resource group Id. Valid for V2 scenarios.
  * vmDisks `array`: The list of vm disk details.
    * items [A2AVmDiskInputDetails](#a2avmdiskinputdetails)
  * vmManagedDisks `array`: The list of vm managed disk details.
    * items [A2AVmManagedDiskInputDetails](#a2avmmanageddiskinputdetails)
  * instanceType `string`: Gets the Instance type.

### A2AUpdateContainerMappingInput
* A2AUpdateContainerMappingInput `object`: A2A update protection container mapping.
  * agentAutoUpdateStatus `string` (values: Disabled, Enabled): A value indicating whether the auto update is enabled.
  * automationAccountArmId `string`: The automation account arm id.
  * instanceType `string`: The class type.

### A2AUpdateReplicationProtectedItemInput
* A2AUpdateReplicationProtectedItemInput `object`: InMage Azure V2 input to update replication protected item.
  * managedDiskUpdateDetails `array`: Managed disk update details.
    * items [A2AVmManagedDiskUpdateDetails](#a2avmmanageddiskupdatedetails)
  * recoveryBootDiagStorageAccountId `string`: The boot diagnostic storage account.
  * recoveryCloudServiceId `string`: The target cloud service ARM Id (for V1).
  * recoveryResourceGroupId `string`: The target resource group ARM Id (for V2).
  * instanceType `string`: The class type.

### A2AVmDiskInputDetails
* A2AVmDiskInputDetails `object`: Azure VM disk input details.
  * diskUri `string`: The disk Uri.
  * primaryStagingAzureStorageAccountId `string`: The primary staging storage account Id.
  * recoveryAzureStorageAccountId `string`: The recovery VHD storage account Id.

### A2AVmManagedDiskInputDetails
* A2AVmManagedDiskInputDetails `object`: Azure VM managed disk input details.
  * diskId `string`: The disk Id.
  * primaryStagingAzureStorageAccountId `string`: The primary staging storage account Arm Id.
  * recoveryReplicaDiskAccountType `string`: The replica disk type. Its an optional value and will be same as source disk type if not user provided.
  * recoveryResourceGroupId `string`: The target resource group Arm Id.
  * recoveryTargetDiskAccountType `string`: The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.

### A2AVmManagedDiskUpdateDetails
* A2AVmManagedDiskUpdateDetails `object`: Azure VM managed disk update input details.
  * diskId `string`: The disk Id.
  * recoveryReplicaDiskAccountType `string`: The replica disk type before failover.
  * recoveryTargetDiskAccountType `string`: The target disk type before failover.

### ASRTask
* ASRTask `object`: Task of the Job.
  * allowedActions `array`: The state/actions applicable on this task.
    * items `string`
  * customDetails [TaskTypeDetails](#tasktypedetails)
  * endTime `string`: The end time.
  * errors `array`: The task error details.
    * items [JobErrorDetails](#joberrordetails)
  * friendlyName `string`: The name.
  * groupTaskCustomDetails [GroupTaskDetails](#grouptaskdetails)
  * name `string`: The unique Task name.
  * startTime `string`: The start time.
  * state `string`: The State. It is one of these values - NotStarted, InProgress, Succeeded, Failed, Cancelled, Suspended or Other.
  * stateDescription `string`: The description of the task state. For example - For Succeeded state, description can be Completed, PartiallySucceeded, CompletedWithInformation or Skipped.
  * taskId `string`: The Id.
  * taskType `string`: The type of task. Details in CustomDetails property depend on this type.

### AddVCenterRequest
* AddVCenterRequest `object`: Input required to add vCenter.
  * properties [AddVCenterRequestProperties](#addvcenterrequestproperties)

### AddVCenterRequestProperties
* AddVCenterRequestProperties `object`: The properties of an add vCenter request.
  * friendlyName `string`: The friendly name of the vCenter.
  * ipAddress `string`: The IP address of the vCenter to be discovered.
  * port `string`: The port number for discovery.
  * processServerId `string`: The process server Id from where the discovery is orchestrated.
  * runAsAccountId `string`: The account Id which has privileges to discover the vCenter.

### Alert
* Alert `object`: Implements the Alert class.
  * properties [AlertProperties](#alertproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### AlertCollection
* AlertCollection `object`: Collection of alerts.
  * nextLink `string`: The value of next link.
  * value `array`: The list of alerts.
    * items [Alert](#alert)

### AlertProperties
* AlertProperties `object`: The proprties of an alert.
  * customEmailAddresses `array`: The custom email address for sending emails.
    * items `string`
  * locale `string`: The locale for the email notification.
  * sendToOwners `string`: A value indicating whether to send email to subscription administrator.

### ApplyRecoveryPointInput
* ApplyRecoveryPointInput `object`: Input to apply recovery point.
  * properties [ApplyRecoveryPointInputProperties](#applyrecoverypointinputproperties)

### ApplyRecoveryPointInputProperties
* ApplyRecoveryPointInputProperties `object`: Input properties to apply recovery point.
  * providerSpecificDetails [ApplyRecoveryPointProviderSpecificInput](#applyrecoverypointproviderspecificinput)
  * recoveryPointId `string`: The recovery point Id.

### ApplyRecoveryPointProviderSpecificInput
* ApplyRecoveryPointProviderSpecificInput `object`: Provider specific input for apply recovery point.
  * instanceType `string`: The class type.

### AsrJobDetails
* AsrJobDetails `object`: This class represents job details based on specific job type.
  * affectedObjectDetails `object`: The affected object properties like source server, source cloud, target server, target cloud etc. based on the workflow object details.
  * instanceType `string`: Gets the type of job details (see JobDetailsTypes enum for possible values).

### AutomationRunbookTaskDetails
* AutomationRunbookTaskDetails `object`: This class represents the task details for an automation runbook.
  * accountName `string`: The automation account name of the runbook.
  * cloudServiceName `string`: The cloud service of the automation runbook account.
  * isPrimarySideScript `boolean`: A value indicating whether it is a primary side script or not.
  * jobId `string`: The job Id of the runbook execution.
  * jobOutput `string`: The execution output of the runbook.
  * name `string`: The recovery plan task name.
  * runbookId `string`: The runbook Id.
  * runbookName `string`: The runbook name.
  * subscriptionId `string`: The subscription Id of the automation runbook account.
  * instanceType `string`: The type of task details.

### AzureFabricCreationInput
* AzureFabricCreationInput `object`: Fabric provider specific settings.
  * location `string`: The Location.
  * instanceType `string`: Gets the class type.

### AzureFabricSpecificDetails
* AzureFabricSpecificDetails `object`: Azure Fabric Specific Details.
  * containerIds `array`: The container Ids for the Azure fabric.
    * items `string`
  * location `string`: The Location for the Azure fabric.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### AzureToAzureCreateNetworkMappingInput
* AzureToAzureCreateNetworkMappingInput `object`: Create network mappings input properties/behaviour specific to Azure to Azure Network mapping.
  * primaryNetworkId `string`: The primary azure vnet Id.
  * instanceType `string`: The instance type.

### AzureToAzureNetworkMappingSettings
* AzureToAzureNetworkMappingSettings `object`: A2A Network Mapping fabric specific settings.
  * primaryFabricLocation `string`: The primary fabric location.
  * recoveryFabricLocation `string`: The recovery fabric location.
  * instanceType `string`: Gets the Instance type.

### AzureToAzureUpdateNetworkMappingInput
* AzureToAzureUpdateNetworkMappingInput `object`: Updates network mappings input.
  * primaryNetworkId `string`: The primary azure vnet Id.
  * instanceType `string`: The instance type.

### AzureToAzureVmSyncedConfigDetails
* AzureToAzureVmSyncedConfigDetails `object`: Azure to Azure VM synced configuration details.
  * inputEndpoints `array`: The Azure VM input endpoints.
    * items [InputEndpoint](#inputendpoint)
  * roleAssignments `array`: The Azure role assignments.
    * items [RoleAssignment](#roleassignment)
  * tags `object`: The Azure VM tags.

### AzureVmDiskDetails
* AzureVmDiskDetails `object`: Disk details for E2A provider.
  * lunId `string`: Ordinal\LunId of the disk for the Azure VM.
  * maxSizeMB `string`: Max side in MB.
  * targetDiskLocation `string`: Blob uri of the Azure disk.
  * targetDiskName `string`: The target Azure disk name.
  * vhdId `string`: The VHD id.
  * vhdName `string`: VHD name.
  * vhdType `string`: VHD type.

### ComputeSizeErrorDetails
* ComputeSizeErrorDetails `object`: Represents the error used to indicate why the target compute size is not applicable.
  * message `string`: The error message.
  * severity `string`: The severity of the error.

### ConfigurationSettings
* ConfigurationSettings `object`: Replication provider specific settings.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### ConfigureAlertRequest
* ConfigureAlertRequest `object`: Request to configure alerts for the system.
  * properties [ConfigureAlertRequestProperties](#configurealertrequestproperties)

### ConfigureAlertRequestProperties
* ConfigureAlertRequestProperties `object`: Properties of a configure alert request.
  * customEmailAddresses `array`: The custom email address for sending emails.
    * items `string`
  * locale `string`: The locale for the email notification.
  * sendToOwners `string`: A value indicating whether to send email to subscription administrator.

### ConsistencyCheckTaskDetails
* ConsistencyCheckTaskDetails `object`: This class contains monitoring details of all the inconsistent Protected Entites in Vmm.
  * vmDetails `array`: The list of inconsistent Vm details.
    * items [InconsistentVmDetails](#inconsistentvmdetails)
  * instanceType `string`: The type of task details.

### CreateNetworkMappingInput
* CreateNetworkMappingInput `object`: Create network mappings input.
  * properties [CreateNetworkMappingInputProperties](#createnetworkmappinginputproperties)

### CreateNetworkMappingInputProperties
* CreateNetworkMappingInputProperties `object`: Common input details for network mapping operation.
  * fabricSpecificDetails [FabricSpecificCreateNetworkMappingInput](#fabricspecificcreatenetworkmappinginput)
  * recoveryFabricName `string`: Recovery fabric Name.
  * recoveryNetworkId `string`: Recovery network Id.

### CreatePolicyInput
* CreatePolicyInput `object`: Protection Policy input.
  * properties [CreatePolicyInputProperties](#createpolicyinputproperties)

### CreatePolicyInputProperties
* CreatePolicyInputProperties `object`: Policy creation properties.
  * providerSpecificInput [PolicyProviderSpecificInput](#policyproviderspecificinput)

### CreateProtectionContainerInput
* CreateProtectionContainerInput `object`: Create protection container input.
  * properties [CreateProtectionContainerInputProperties](#createprotectioncontainerinputproperties)

### CreateProtectionContainerInputProperties
* CreateProtectionContainerInputProperties `object`: Create protection container input properties.
  * providerSpecificInput `array`: Provider specific inputs for container creation.
    * items [ReplicationProviderSpecificContainerCreationInput](#replicationproviderspecificcontainercreationinput)

### CreateProtectionContainerMappingInput
* CreateProtectionContainerMappingInput `object`: Configure pairing input.
  * properties [CreateProtectionContainerMappingInputProperties](#createprotectioncontainermappinginputproperties)

### CreateProtectionContainerMappingInputProperties
* CreateProtectionContainerMappingInputProperties `object`: Configure pairing input properties.
  * policyId `string`: Applicable policy.
  * providerSpecificInput [ReplicationProviderSpecificContainerMappingInput](#replicationproviderspecificcontainermappinginput)
  * targetProtectionContainerId `string`: The target unique protection container name.

### CreateRecoveryPlanInput
* CreateRecoveryPlanInput `object`: Create recovery plan input class.
  * properties **required** [CreateRecoveryPlanInputProperties](#createrecoveryplaninputproperties)

### CreateRecoveryPlanInputProperties
* CreateRecoveryPlanInputProperties `object`: Recovery plan creation properties.
  * failoverDeploymentModel `string` (values: NotApplicable, Classic, ResourceManager): The failover deployment model.
  * groups **required** `array`: The recovery plan groups.
    * items [RecoveryPlanGroup](#recoveryplangroup)
  * primaryFabricId **required** `string`: The primary fabric Id.
  * recoveryFabricId **required** `string`: The recovery fabric Id.

### CurrentScenarioDetails
* CurrentScenarioDetails `object`: Current scenario details of the protected entity.
  * jobId `string`: ARM Id of the job being executed.
  * scenarioName `string`: Scenario name.
  * startTime `string`: Start time of the workflow.

### DataStore
* DataStore `object`: The datastore details of the MT.
  * capacity `string`: The capacity of data store in GBs.
  * freeSpace `string`: The free space of data store in GBs.
  * symbolicName `string`: The symbolic name of data store.
  * type `string`: The type of data store.
  * uuid `string`: The uuid of data store.

### DisableProtectionInput
* DisableProtectionInput `object`: Disable protection input.
  * properties [DisableProtectionInputProperties](#disableprotectioninputproperties)

### DisableProtectionInputProperties
* DisableProtectionInputProperties `object`: Disable protection input properties.
  * disableProtectionReason `string` (values: NotSpecified, MigrationComplete): Disable protection reason. It can have values NotSpecified/MigrationComplete.
  * replicationProviderInput [DisableProtectionProviderSpecificInput](#disableprotectionproviderspecificinput)

### DisableProtectionProviderSpecificInput
* DisableProtectionProviderSpecificInput `object`: Disable protection provider specific input.
  * instanceType `string`: The class type.

### DiscoverProtectableItemRequest
* DiscoverProtectableItemRequest `object`: Request to add a physical machine as a protectable item in a container.
  * properties [DiscoverProtectableItemRequestProperties](#discoverprotectableitemrequestproperties)

### DiscoverProtectableItemRequestProperties
* DiscoverProtectableItemRequestProperties `object`: Discover protectable item properties.
  * friendlyName `string`: The friendly name of the physical machine.
  * ipAddress `string`: The IP address of the physical machine to be discovered.
  * osType `string`: The OS type on the physical machine.

### DiskDetails
* DiskDetails `object`: Onprem disk details data.
  * maxSizeMB `integer`: The hard disk max size in MB.
  * vhdId `string`: The VHD Id.
  * vhdName `string`: The VHD name.
  * vhdType `string`: The type of the volume.

### DiskVolumeDetails
* DiskVolumeDetails `object`: Volume details.
  * label `string`: The volume label.
  * name `string`: The volume name.

### Display
* Display `object`: Contains the localized display information for this particular operation / action. These value will be used by several clients for (1) custom role definitions for RBAC; (2) complex query filters for the event service; and (3) audit history / records for management operations.
  * description `string`: The description. The localized friendly description for the operation, as it should be shown to the user. It should be thorough, yet concise – it will be used in tool tips and detailed views. Prescriptive guidance for namespaces: Read any 'display.provider' resource Create or Update any 'display.provider' resource Delete any 'display.provider' resource Perform any other action on any 'display.provider' resource Prescriptive guidance for namespaces: Read any 'display.resource' Create or Update any 'display.resource' Delete any 'display.resource' 'ActionName' any 'display.resources'
  * operation `string`: The operation. The localized friendly name for the operation, as it should be shown to the user. It should be concise (to fit in drop downs) but clear (i.e. self-documenting). It should use Title Casing. Prescriptive guidance: Read Create or Update Delete 'ActionName'
  * provider `string`: The provider. The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute."
  * resource `string`: The resource. The localized friendly form of the resource related to this action/operation – it should match the public documentation for the resource provider. It should use Title Casing. This value should be unique for a particular URL type (e.g. nested types should *not* reuse their parent’s display.resource field). e.g. "Virtual Machines" or "Scheduler Job Collections", or "Virtual Machine VM Sizes" or "Scheduler Jobs"

### EnableProtectionInput
* EnableProtectionInput `object`: Enable protection input.
  * properties [EnableProtectionInputProperties](#enableprotectioninputproperties)

### EnableProtectionInputProperties
* EnableProtectionInputProperties `object`: Enable protection input properties.
  * policyId `string`: The Policy Id.
  * protectableItemId `string`: The protectable item Id.
  * providerSpecificDetails [EnableProtectionProviderSpecificInput](#enableprotectionproviderspecificinput)

### EnableProtectionProviderSpecificInput
* EnableProtectionProviderSpecificInput `object`: Enable protection provider specific input.
  * instanceType `string`: The class type.

### EncryptionDetails
* EncryptionDetails `object`: Encryption details for the fabric.
  * kekCertExpiryDate `string`: The key encryption key certificate expiry date.
  * kekCertThumbprint `string`: The key encryption key certificate thumbprint.
  * kekState `string`: The key encryption key state for the Vmm.

### Event
* Event `object`: Implements the Event class.
  * properties [EventProperties](#eventproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### EventCollection
* EventCollection `object`: Collection of fabric details.
  * nextLink `string`: The value of next link.
  * value `array`: The list of events.
    * items [Event](#event)

### EventProperties
* EventProperties `object`: The properties of a monitoring event.
  * affectedObjectFriendlyName `string`: The friendly name of the source of the event on which it is raised (for example, VM, VMM etc).
  * description `string`: The event name.
  * eventCode `string`: The Id of the monitoring event.
  * eventSpecificDetails [EventSpecificDetails](#eventspecificdetails)
  * eventType `string`: The type of the event. for example: VM Health, Server Health, Job Failure etc.
  * fabricId `string`: The ARM ID of the fabric.
  * healthErrors `array`: The list of errors / warnings capturing details associated with the issue(s).
    * items [HealthError](#healtherror)
  * providerSpecificDetails [EventProviderSpecificDetails](#eventproviderspecificdetails)
  * severity `string`: The severity of the event.
  * timeOfOccurrence `string`: The time of occurence of the event.

### EventProviderSpecificDetails
* EventProviderSpecificDetails `object`: Model class for provider specific details for an event.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### EventQueryParameter
* EventQueryParameter `object`: Implements the event query parameter.
  * affectedObjectFriendlyName `string`: The affected object name of the events to be queried.
  * endTime `string`: The end time of the time range within which the events are to be queried.
  * eventCode `string`: The source id of the events to be queried.
  * eventType `string`: The type of the events to be queried.
  * fabricName `string`: The affected object server id of the events to be queried.
  * severity `string`: The severity of the events to be queried.
  * startTime `string`: The start time of the time range within which the events are to be queried.

### EventSpecificDetails
* EventSpecificDetails `object`: Model class for event specific details for an event.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### ExportJobDetails
* ExportJobDetails `object`: This class represents details for export jobs workflow.
  * blobUri `string`: BlobUri of the exported jobs.
  * sasToken `string`: The sas token to access blob.
  * affectedObjectDetails `object`: The affected object properties like source server, source cloud, target server, target cloud etc. based on the workflow object details.
  * instanceType `string`: Gets the type of job details (see JobDetailsTypes enum for possible values).

### Fabric
* Fabric `object`: Fabric definition.
  * properties [FabricProperties](#fabricproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### FabricCollection
* FabricCollection `object`: Collection of fabric details.
  * nextLink `string`: The value of next link.
  * value `array`: The fabric details.
    * items [Fabric](#fabric)

### FabricCreationInput
* FabricCreationInput `object`: Site details provided during the time of site creation
  * properties [FabricCreationInputProperties](#fabriccreationinputproperties)

### FabricCreationInputProperties
* FabricCreationInputProperties `object`: Properties of site details provided during the time of site creation
  * customDetails [FabricSpecificCreationInput](#fabricspecificcreationinput)

### FabricProperties
* FabricProperties `object`: Fabric properties.
  * bcdrState `string`: BCDR state of the fabric.
  * customDetails [FabricSpecificDetails](#fabricspecificdetails)
  * encryptionDetails [EncryptionDetails](#encryptiondetails)
  * friendlyName `string`: Friendly name of the fabric.
  * health `string`: Health of fabric.
  * healthErrorDetails `array`: Fabric health error details.
    * items [HealthError](#healtherror)
  * internalIdentifier `string`: Dra Registration Id.
  * rolloverEncryptionDetails [EncryptionDetails](#encryptiondetails)

### FabricReplicationGroupTaskDetails
* FabricReplicationGroupTaskDetails `object`: This class represents the fabric replication group task details.
  * jobTask [JobEntity](#jobentity)
  * skippedReason `string`: The skipped reason.
  * skippedReasonString `string`: The skipped reason string.
  * instanceType `string`: The type of task details.

### FabricSpecificCreateNetworkMappingInput
* FabricSpecificCreateNetworkMappingInput `object`: Input details specific to fabrics during Network Mapping.
  * instanceType `string`: The instance type.

### FabricSpecificCreationInput
* FabricSpecificCreationInput `object`: Fabric provider specific settings.
  * instanceType `string`: Gets the class type.

### FabricSpecificDetails
* FabricSpecificDetails `object`: Fabric specific details.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### FabricSpecificUpdateNetworkMappingInput
* FabricSpecificUpdateNetworkMappingInput `object`: Input details specific to fabrics during Network Mapping.
  * instanceType `string`: The instance type.

### FailoverJobDetails
* FailoverJobDetails `object`: This class represents the details for a failover job.
  * protectedItemDetails `array`: The test VM details.
    * items [FailoverReplicationProtectedItemDetails](#failoverreplicationprotecteditemdetails)
  * affectedObjectDetails `object`: The affected object properties like source server, source cloud, target server, target cloud etc. based on the workflow object details.
  * instanceType `string`: Gets the type of job details (see JobDetailsTypes enum for possible values).

### FailoverProcessServerRequest
* FailoverProcessServerRequest `object`: Request to failover a process server.
  * properties [FailoverProcessServerRequestProperties](#failoverprocessserverrequestproperties)

### FailoverProcessServerRequestProperties
* FailoverProcessServerRequestProperties `object`: The properties of the Failover Process Server request.
  * containerName `string`: The container identifier.
  * sourceProcessServerId `string`: The source process server.
  * targetProcessServerId `string`: The new process server.
  * updateType `string`: A value for failover type. It can be systemlevel/serverlevel
  * vmsToMigrate `array`: The VMS to migrate.
    * items `string`

### FailoverReplicationProtectedItemDetails
* FailoverReplicationProtectedItemDetails `object`: Failover details for a replication protected item.
  * friendlyName `string`: The friendly name.
  * name `string`: The name.
  * networkConnectionStatus `string`: The network connection status.
  * networkFriendlyName `string`: The network friendly name.
  * recoveryPointId `string`: The recovery point Id.
  * recoveryPointTime `string`: The recovery point time.
  * subnet `string`: The network subnet.
  * testVmFriendlyName `string`: The test Vm friendly name.
  * testVmName `string`: The test Vm name.

### GroupTaskDetails
* GroupTaskDetails `object`: This class represents the group task details when parent child relationship exists in the drill down.
  * childTasks `array`: The child tasks.
    * items [ASRTask](#asrtask)
  * instanceType `string`: The type of task details.

### HealthError
* HealthError `object`: Health Error
  * creationTimeUtc `string`: Error creation time (UTC)
  * entityId `string`: ID of the entity.
  * errorCategory `string`: Category of error.
  * errorCode `string`: Error code.
  * errorLevel `string`: Level of error.
  * errorMessage `string`: Error message.
  * errorSource `string`: Source of error.
  * errorType `string`: Type of error.
  * innerHealthErrors `array`: The inner health errors. HealthError having a list of HealthError as child errors is problematic. InnerHealthError is used because this will prevent an infinite loop of structures when Hydra tries to auto-generate the contract. We are exposing the related health errors as inner health errors and all API consumers can utilize this in the same fashion as Exception -&gt; InnerException.
    * items [InnerHealthError](#innerhealtherror)
  * possibleCauses `string`: Possible causes of error.
  * recommendedAction `string`: Recommended action to resolve error.
  * recoveryProviderErrorMessage `string`: DRA error message.
  * summaryMessage `string`: Summary message of the entity.

### HealthErrorSummary
* HealthErrorSummary `object`: class to define the summary of the health error details.
  * affectedResourceCorrelationIds `array`: The list of affected resource correlation Ids. This can be used to uniquely identify the count of items affected by a specific category and severity as well as count of item affected by an specific issue.
    * items `string`
  * affectedResourceSubtype `string`: The sub type of any subcomponent within the ARM resource that this might be applicable. Value remains null if not applicable.
  * affectedResourceType `string`: The type of affected ARM resource.
  * category `string` (values: None, Replication, TestFailover, Configuration, FabricInfrastructure, VersionExpiry, AgentAutoUpdate): The category of the health error.
  * severity `string` (values: NONE, Warning, Error, Info): Severity of error.
  * summaryCode `string`: The code of the health error.
  * summaryMessage `string`: The summary message of the health error.

### HyperVReplica2012EventDetails
* HyperVReplica2012EventDetails `object`: Model class for event details of a HyperVReplica E2E event.
  * containerName `string`: The container friendly name.
  * fabricName `string`: The fabric friendly name.
  * remoteContainerName `string`: The remote container name.
  * remoteFabricName `string`: The remote fabric name.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### HyperVReplica2012R2EventDetails
* HyperVReplica2012R2EventDetails `object`: Model class for event details of a HyperVReplica blue E2E event.
  * containerName `string`: The container friendly name.
  * fabricName `string`: The fabric friendly name.
  * remoteContainerName `string`: The remote container name.
  * remoteFabricName `string`: The remote fabric name.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### HyperVReplicaAzureApplyRecoveryPointInput
* HyperVReplicaAzureApplyRecoveryPointInput `object`: ApplyRecoveryPoint input specific to HyperVReplicaAzure provider.
  * primaryKekCertificatePfx `string`: The primary kek certificate pfx.
  * secondaryKekCertificatePfx `string`: The secondary kek certificate pfx.
  * vaultLocation `string`: The vault location where the recovery Vm resides.
  * instanceType `string`: The class type.

### HyperVReplicaAzureEnableProtectionInput
* HyperVReplicaAzureEnableProtectionInput `object`: Azure specific enable protection input.
  * disksToInclude `array`: The list of VHD IDs of disks to be protected.
    * items `string`
  * enableRdpOnTargetOption `string`: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
  * hvHostVmId `string`: The Hyper-V host Vm Id.
  * logStorageAccountId `string`: The storage account to be used for logging during replication.
  * osType `string`: The OS type associated with vm.
  * targetAzureNetworkId `string`: The selected target Azure network Id.
  * targetAzureSubnetId `string`: The selected target Azure subnet Id.
  * targetAzureV1ResourceGroupId `string`: The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
  * targetAzureV2ResourceGroupId `string`: The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
  * targetAzureVmName `string`: The target azure Vm Name.
  * targetStorageAccountId `string`: The storage account name.
  * useManagedDisks `string`: A value indicating whether managed disks should be used during failover.
  * vhdId `string`: The OS disk VHD id associated with vm.
  * vmName `string`: The Vm Name.
  * instanceType `string`: The class type.

### HyperVReplicaAzureEventDetails
* HyperVReplicaAzureEventDetails `object`: Model class for event details of a HyperVReplica E2A event.
  * containerName `string`: The container friendly name.
  * fabricName `string`: The fabric friendly name.
  * remoteContainerName `string`: The remote container name.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### HyperVReplicaAzureFailbackProviderInput
* HyperVReplicaAzureFailbackProviderInput `object`: HvrA provider specific input for failback.
  * dataSyncOption `string`: Data sync option.
  * providerIdForAlternateRecovery `string`: Provider ID for alternate location
  * recoveryVmCreationOption `string`: ALR options to create alternate recovery.
  * instanceType `string`: The class type.

### HyperVReplicaAzureFailoverProviderInput
* HyperVReplicaAzureFailoverProviderInput `object`: HvrA provider specific input for failover.
  * primaryKekCertificatePfx `string`: Primary kek certificate pfx.
  * recoveryPointId `string`: The recovery point id to be passed to failover to a particular recovery point. In case of latest recovery point, null should be passed.
  * secondaryKekCertificatePfx `string`: Secondary kek certificate pfx.
  * vaultLocation `string`: Location of the vault.
  * instanceType `string`: The class type.

### HyperVReplicaAzurePolicyDetails
* HyperVReplicaAzurePolicyDetails `object`: Hyper-V Replica Azure specific protection profile details.
  * activeStorageAccountId `string`: The active storage account Id.
  * applicationConsistentSnapshotFrequencyInHours `integer`: The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM.
  * encryption `string`: A value indicating whether encryption is enabled for virtual machines in this cloud.
  * onlineReplicationStartTime `string`: The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately.
  * recoveryPointHistoryDurationInHours `integer`: The duration (in hours) to which point the recovery history needs to be maintained.
  * replicationInterval `integer`: The replication interval.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### HyperVReplicaAzurePolicyInput
* HyperVReplicaAzurePolicyInput `object`: Hyper-V Replica Azure specific input for creating a protection profile.
  * applicationConsistentSnapshotFrequencyInHours `integer`: The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM.
  * onlineReplicationStartTime `string`: The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately.
  * recoveryPointHistoryDuration `integer`: The duration (in hours) to which point the recovery history needs to be maintained.
  * replicationInterval `integer`: The replication interval.
  * storageAccounts `array`: The list of storage accounts to which the VMs in the primary cloud can replicate to.
    * items `string`
  * instanceType `string`: The class type.

### HyperVReplicaAzureReplicationDetails
* HyperVReplicaAzureReplicationDetails `object`: Hyper V Replica Azure provider specific settings.
  * azureVmDiskDetails `array`: Azure VM Disk details.
    * items [AzureVmDiskDetails](#azurevmdiskdetails)
  * enableRdpOnTargetOption `string`: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
  * encryption `string`: The encryption info.
  * initialReplicationDetails [InitialReplicationDetails](#initialreplicationdetails)
  * lastReplicatedTime `string`: The Last replication time.
  * lastRpoCalculatedTime `string`: The last RPO calculated time.
  * licenseType `string`: License Type of the VM to be used.
  * oSDetails [OSDetails](#osdetails)
  * recoveryAvailabilitySetId `string`: The recovery availability set Id.
  * recoveryAzureLogStorageAccountId `string`: The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
  * recoveryAzureResourceGroupId `string`: The target resource group Id.
  * recoveryAzureStorageAccount `string`: The recovery Azure storage account.
  * recoveryAzureVMSize `string`: The Recovery Azure VM size.
  * recoveryAzureVmName `string`: Recovery Azure given name.
  * rpoInSeconds `integer`: Last RPO value.
  * selectedRecoveryAzureNetworkId `string`: The selected recovery azure network Id.
  * selectedSourceNicId `string`: The selected source nic Id which will be used as the primary nic during failover.
  * sourceVmCpuCount `integer`: The CPU count of the VM on the primary side.
  * sourceVmRamSizeInMB `integer`: The RAM size of the VM on the primary side.
  * useManagedDisks `string`: A value indicating whether managed disks should be used during failover.
  * vmId `string`: The virtual machine Id.
  * vmNics `array`: The PE Network details.
    * items [VMNicDetails](#vmnicdetails)
  * vmProtectionState `string`: The protection state for the vm.
  * vmProtectionStateDescription `string`: The protection state description for the vm.
  * instanceType `string`: Gets the Instance type.

### HyperVReplicaAzureReprotectInput
* HyperVReplicaAzureReprotectInput `object`: Azure specific reprotect input.
  * hvHostVmId `string`: The Hyper-V host Vm Id.
  * logStorageAccountId `string`: The storage account to be used for logging during replication.
  * osType `string`: The OS type associated with vm.
  * storageAccountId `string`: The storage account name.
  * vHDId `string`: The OS disk VHD id associated with vm.
  * vmName `string`: The Vm Name.
  * instanceType `string`: The class type.

### HyperVReplicaAzureUpdateReplicationProtectedItemInput
* HyperVReplicaAzureUpdateReplicationProtectedItemInput `object`: HyperV replica Azure input to update replication protected item.
  * recoveryAzureV1ResourceGroupId `string`: The recovery Azure resource group Id for classic deployment.
  * recoveryAzureV2ResourceGroupId `string`: The recovery Azure resource group Id for resource manager deployment.
  * useManagedDisks `string`: A value indicating whether managed disks should be used during failover.
  * instanceType `string`: The class type.

### HyperVReplicaBaseEventDetails
* HyperVReplicaBaseEventDetails `object`: Abstract model class for event details of a HyperVReplica E2E event.
  * containerName `string`: The container friendly name.
  * fabricName `string`: The fabric friendly name.
  * remoteContainerName `string`: The remote container name.
  * remoteFabricName `string`: The remote fabric name.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### HyperVReplicaBasePolicyDetails
* HyperVReplicaBasePolicyDetails `object`: Base class for HyperVReplica policy details.
  * allowedAuthenticationType `integer`: A value indicating the authentication type.
  * applicationConsistentSnapshotFrequencyInHours `integer`: A value indicating the application consistent frequency.
  * compression `string`: A value indicating whether compression has to be enabled.
  * initialReplicationMethod `string`: A value indicating whether IR is online.
  * offlineReplicationExportPath `string`: A value indicating the offline IR export path.
  * offlineReplicationImportPath `string`: A value indicating the offline IR import path.
  * onlineReplicationStartTime `string`: A value indicating the online IR start time.
  * recoveryPoints `integer`: A value indicating the number of recovery points.
  * replicaDeletionOption `string`: A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
  * replicationPort `integer`: A value indicating the recovery HTTPS port.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### HyperVReplicaBaseReplicationDetails
* HyperVReplicaBaseReplicationDetails `object`: Hyper V replica provider specific settings base class.
  * initialReplicationDetails [InitialReplicationDetails](#initialreplicationdetails)
  * lastReplicatedTime `string`: The Last replication time.
  * vMDiskDetails `array`: VM disk details.
    * items [DiskDetails](#diskdetails)
  * vmId `string`: The virtual machine Id.
  * vmNics `array`: The PE Network details.
    * items [VMNicDetails](#vmnicdetails)
  * vmProtectionState `string`: The protection state for the vm.
  * vmProtectionStateDescription `string`: The protection state description for the vm.
  * instanceType `string`: Gets the Instance type.

### HyperVReplicaBluePolicyDetails
* HyperVReplicaBluePolicyDetails `object`: Hyper-V Replica Blue specific protection profile details.
  * allowedAuthenticationType `integer`: A value indicating the authentication type.
  * applicationConsistentSnapshotFrequencyInHours `integer`: A value indicating the application consistent frequency.
  * compression `string`: A value indicating whether compression has to be enabled.
  * initialReplicationMethod `string`: A value indicating whether IR is online.
  * offlineReplicationExportPath `string`: A value indicating the offline IR export path.
  * offlineReplicationImportPath `string`: A value indicating the offline IR import path.
  * onlineReplicationStartTime `string`: A value indicating the online IR start time.
  * recoveryPoints `integer`: A value indicating the number of recovery points.
  * replicaDeletionOption `string`: A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
  * replicationFrequencyInSeconds `integer`: A value indicating the replication interval.
  * replicationPort `integer`: A value indicating the recovery HTTPS port.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### HyperVReplicaBluePolicyInput
* HyperVReplicaBluePolicyInput `object`: HyperV Replica Blue policy input.
  * allowedAuthenticationType `integer`: A value indicating the authentication type.
  * applicationConsistentSnapshotFrequencyInHours `integer`: A value indicating the application consistent frequency.
  * compression `string`: A value indicating whether compression has to be enabled.
  * initialReplicationMethod `string`: A value indicating whether IR is online.
  * offlineReplicationExportPath `string`: A value indicating the offline IR export path.
  * offlineReplicationImportPath `string`: A value indicating the offline IR import path.
  * onlineReplicationStartTime `string`: A value indicating the online IR start time.
  * recoveryPoints `integer`: A value indicating the number of recovery points.
  * replicaDeletion `string`: A value indicating whether the VM has to be auto deleted.
  * replicationFrequencyInSeconds `integer`: A value indicating the replication interval.
  * replicationPort `integer`: A value indicating the recovery HTTPS port.
  * instanceType `string`: The class type.

### HyperVReplicaBlueReplicationDetails
* HyperVReplicaBlueReplicationDetails `object`: HyperV replica 2012 R2 (Blue) replication details.
  * initialReplicationDetails [InitialReplicationDetails](#initialreplicationdetails)
  * lastReplicatedTime `string`: The Last replication time.
  * vMDiskDetails `array`: VM disk details.
    * items [DiskDetails](#diskdetails)
  * vmId `string`: The virtual machine Id.
  * vmNics `array`: The PE Network details.
    * items [VMNicDetails](#vmnicdetails)
  * vmProtectionState `string`: The protection state for the vm.
  * vmProtectionStateDescription `string`: The protection state description for the vm.
  * instanceType `string`: Gets the Instance type.

### HyperVReplicaPolicyDetails
* HyperVReplicaPolicyDetails `object`: Hyper-V Replica Blue specific protection profile details.
  * allowedAuthenticationType `integer`: A value indicating the authentication type.
  * applicationConsistentSnapshotFrequencyInHours `integer`: A value indicating the application consistent frequency.
  * compression `string`: A value indicating whether compression has to be enabled.
  * initialReplicationMethod `string`: A value indicating whether IR is online.
  * offlineReplicationExportPath `string`: A value indicating the offline IR export path.
  * offlineReplicationImportPath `string`: A value indicating the offline IR import path.
  * onlineReplicationStartTime `string`: A value indicating the online IR start time.
  * recoveryPoints `integer`: A value indicating the number of recovery points.
  * replicaDeletionOption `string`: A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
  * replicationPort `integer`: A value indicating the recovery HTTPS port.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### HyperVReplicaPolicyInput
* HyperVReplicaPolicyInput `object`: Hyper-V Replica specific policy Input.
  * allowedAuthenticationType `integer`: A value indicating the authentication type.
  * applicationConsistentSnapshotFrequencyInHours `integer`: A value indicating the application consistent frequency.
  * compression `string`: A value indicating whether compression has to be enabled.
  * initialReplicationMethod `string`: A value indicating whether IR is online.
  * offlineReplicationExportPath `string`: A value indicating the offline IR export path.
  * offlineReplicationImportPath `string`: A value indicating the offline IR import path.
  * onlineReplicationStartTime `string`: A value indicating the online IR start time.
  * recoveryPoints `integer`: A value indicating the number of recovery points.
  * replicaDeletion `string`: A value indicating whether the VM has to be auto deleted.
  * replicationPort `integer`: A value indicating the recovery HTTPS port.
  * instanceType `string`: The class type.

### HyperVReplicaReplicationDetails
* HyperVReplicaReplicationDetails `object`: HyperV replica 2012 replication details.
  * initialReplicationDetails [InitialReplicationDetails](#initialreplicationdetails)
  * lastReplicatedTime `string`: The Last replication time.
  * vMDiskDetails `array`: VM disk details.
    * items [DiskDetails](#diskdetails)
  * vmId `string`: The virtual machine Id.
  * vmNics `array`: The PE Network details.
    * items [VMNicDetails](#vmnicdetails)
  * vmProtectionState `string`: The protection state for the vm.
  * vmProtectionStateDescription `string`: The protection state description for the vm.
  * instanceType `string`: Gets the Instance type.

### HyperVSiteDetails
* HyperVSiteDetails `object`: HyperVSite fabric specific details.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### HyperVVirtualMachineDetails
* HyperVVirtualMachineDetails `object`: Single Host fabric provider specific VM settings.
  * diskDetails `array`: The Last successful failover time.
    * items [DiskDetails](#diskdetails)
  * generation `string`: The id of the object in fabric.
  * hasFibreChannelAdapter `string` (values: Unknown, Present, NotPresent): A value indicating whether the VM has a fibre channel adapter attached. String value of {SrsDataContract.PresenceStatus} enum.
  * hasPhysicalDisk `string` (values: Unknown, Present, NotPresent): A value indicating whether the VM has a physical disk attached. String value of {SrsDataContract.PresenceStatus} enum.
  * hasSharedVhd `string` (values: Unknown, Present, NotPresent): A value indicating whether the VM has a shared VHD attached. String value of {SrsDataContract.PresenceStatus} enum.
  * osDetails [OSDetails](#osdetails)
  * sourceItemId `string`: The source id of the object.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### IdentityInformation
* IdentityInformation `object`: Identity details.
  * aadAuthority `string`: The base authority for Azure Active Directory authentication.
  * applicationId `string`: The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
  * audience `string`: The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
  * certificateThumbprint `string`: The certificate thumbprint. Applicable only if IdentityProviderType is RecoveryServicesActiveDirectory.
  * identityProviderType `string` (values: RecoveryServicesActiveDirectory): The identity provider type. Value is the ToString() of a IdentityProviderType value.
  * objectId `string`: The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
  * tenantId `string`: The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.

### InMageAgentDetails
* InMageAgentDetails `object`: The details of the InMage agent.
  * agentExpiryDate `string`: Agent expiry date.
  * agentUpdateStatus `string`: A value indicating whether installed agent needs to be updated.
  * agentVersion `string`: The agent version.
  * postUpdateRebootStatus `string`: A value indicating whether reboot is required after update is applied.

### InMageAgentVersionDetails
* InMageAgentVersionDetails `object`: InMage agent version details.
  * expiryDate `string`: Version expiry date.
  * postUpdateRebootStatus `string`: A value indicating whether reboot is required after update is applied.
  * status `string` (values: Supported, NotSupported, Deprecated, UpdateRequired, SecurityUpdateRequired): A value indicating whether security update required.
  * version `string`: The agent version.

### InMageAzureV2ApplyRecoveryPointInput
* InMageAzureV2ApplyRecoveryPointInput `object`: ApplyRecoveryPoint input specific to InMageAzureV2 provider.
  * vaultLocation `string`: The vault location where the recovery Vm resides.
  * instanceType `string`: The class type.

### InMageAzureV2EnableProtectionInput
* InMageAzureV2EnableProtectionInput `object`: VMware Azure specific enable protection input.
  * disksToInclude `array`: The disks to include list.
    * items `string`
  * enableRdpOnTargetOption `string`: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
  * logStorageAccountId `string`: The storage account to be used for logging during replication.
  * masterTargetId `string`: The Master target Id.
  * multiVmGroupId `string`: The multi vm group Id.
  * multiVmGroupName `string`: The multi vm group name.
  * processServerId `string`: The Process Server Id.
  * runAsAccountId `string`: The CS account Id.
  * storageAccountId **required** `string`: The storage account name.
  * targetAzureNetworkId `string`: The selected target Azure network Id.
  * targetAzureSubnetId `string`: The selected target Azure subnet Id.
  * targetAzureV1ResourceGroupId `string`: The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
  * targetAzureV2ResourceGroupId `string`: The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
  * targetAzureVmName `string`: The target azure Vm Name.
  * useManagedDisks `string`: A value indicating whether managed disks should be used during failover.
  * instanceType `string`: The class type.

### InMageAzureV2EventDetails
* InMageAzureV2EventDetails `object`: Model class for event details of a VMwareAzureV2 event.
  * category `string`: InMage Event Category.
  * component `string`: InMage Event Component.
  * correctiveAction `string`: Corrective Action string for the event.
  * details `string`: InMage Event Details.
  * eventType `string`: InMage Event type. Takes one of the values of {InMageDataContract.InMageMonitoringEventType}.
  * siteName `string`: VMware Site name.
  * summary `string`: InMage Event Summary.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### InMageAzureV2FailoverProviderInput
* InMageAzureV2FailoverProviderInput `object`: InMageAzureV2 provider specific input for failover.
  * recoveryPointId `string`: The recovery point id to be passed to failover to a particular recovery point. In case of latest recovery point, null should be passed.
  * vaultLocation `string`: Location of the vault.
  * instanceType `string`: The class type.

### InMageAzureV2PolicyDetails
* InMageAzureV2PolicyDetails `object`: InMage Azure v2 specific protection profile details.
  * appConsistentFrequencyInMinutes `integer`: The app consistent snapshot frequency in minutes.
  * crashConsistentFrequencyInMinutes `integer`: The crash consistent snapshot frequency in minutes.
  * multiVmSyncStatus `string`: A value indicating whether multi-VM sync has to be enabled.
  * recoveryPointHistory `integer`: The duration in minutes until which the recovery points need to be stored.
  * recoveryPointThresholdInMinutes `integer`: The recovery point threshold in minutes.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### InMageAzureV2PolicyInput
* InMageAzureV2PolicyInput `object`: VMWare Azure specific policy Input.
  * appConsistentFrequencyInMinutes `integer`: The app consistent snapshot frequency (in minutes).
  * crashConsistentFrequencyInMinutes `integer`: The crash consistent snapshot frequency (in minutes).
  * multiVmSyncStatus **required** `string` (values: Enable, Disable): A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
  * recoveryPointHistory `integer`: The duration in minutes until which the recovery points need to be stored.
  * recoveryPointThresholdInMinutes `integer`: The recovery point threshold in minutes.
  * instanceType `string`: The class type.

### InMageAzureV2ProtectedDiskDetails
* InMageAzureV2ProtectedDiskDetails `object`: InMageAzureV2 protected disk details.
  * diskCapacityInBytes `integer`: The disk capacity in bytes.
  * diskId `string`: The disk id.
  * diskName `string`: The disk name.
  * diskResized `string`: A value indicating whether disk is resized.
  * fileSystemCapacityInBytes `integer`: The disk file system capacity in bytes.
  * healthErrorCode `string`: The health error code for the disk.
  * lastRpoCalculatedTime `string`: The last RPO calculated time.
  * protectionStage `string`: The protection stage.
  * psDataInMegaBytes `number`: The PS data transit in MB.
  * resyncDurationInSeconds `integer`: The resync duration in seconds.
  * resyncProgressPercentage `integer`: The resync progress percentage.
  * resyncRequired `string`: A value indicating whether resync is required for this disk.
  * rpoInSeconds `integer`: The RPO in seconds.
  * sourceDataInMegaBytes `number`: The source data transit in MB.
  * targetDataInMegaBytes `number`: The target data transit in MB.

### InMageAzureV2RecoveryPointDetails
* InMageAzureV2RecoveryPointDetails `object`: InMage Azure V2 provider specific recovery point details.
  * isMultiVmSyncPoint `string`: A value indicating whether the recovery point is multi VM consistent.
  * instanceType `string`: Gets the provider type.

### InMageAzureV2ReplicationDetails
* InMageAzureV2ReplicationDetails `object`: InMageAzureV2 provider specific settings
  * agentExpiryDate `string`: Agent expiry date.
  * agentVersion `string`: The agent version.
  * azureVMDiskDetails `array`: Azure VM Disk details.
    * items [AzureVmDiskDetails](#azurevmdiskdetails)
  * compressedDataRateInMB `number`: The compressed data change rate in MB.
  * datastores `array`: The datastores of the on-premise machine. Value can be list of strings that contain datastore names.
    * items `string`
  * discoveryType `string`: A value indicating the discovery type of the machine. Value can be vCenter or physical.
  * diskResized `string`: A value indicating whether any disk is resized for this VM.
  * enableRdpOnTargetOption `string`: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
  * infrastructureVmId `string`: The infrastructure VM Id.
  * ipAddress `string`: The source IP address.
  * isAgentUpdateRequired `string`: A value indicating whether installed agent needs to be updated.
  * isRebootAfterUpdateRequired `string`: A value indicating whether the source server requires a restart after update.
  * lastHeartbeat `string`: The last heartbeat received from the source server.
  * lastRpoCalculatedTime `string`: The last RPO calculated time.
  * lastUpdateReceivedTime `string`: The last update time received from on-prem components.
  * licenseType `string`: License Type of the VM to be used.
  * masterTargetId `string`: The master target Id.
  * multiVmGroupId `string`: The multi vm group Id.
  * multiVmGroupName `string`: The multi vm group name.
  * multiVmSyncStatus `string`: A value indicating whether multi vm sync is enabled or disabled.
  * osDiskId `string`: The id of the disk containing the OS.
  * osType `string`: The type of the OS on the VM.
  * osVersion `string`: The OS Version of the protected item.
  * processServerId `string`: The process server Id.
  * protectedDisks `array`: The list of protected disks.
    * items [InMageAzureV2ProtectedDiskDetails](#inmageazurev2protecteddiskdetails)
  * protectionStage `string`: The protection stage.
  * recoveryAvailabilitySetId `string`: The recovery availability set Id.
  * recoveryAzureLogStorageAccountId `string`: The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
  * recoveryAzureResourceGroupId `string`: The target resource group Id.
  * recoveryAzureStorageAccount `string`: The recovery Azure storage account.
  * recoveryAzureVMName `string`: Recovery Azure given name.
  * recoveryAzureVMSize `string`: The Recovery Azure VM size.
  * replicaId `string`: The replica id of the protected item.
  * resyncProgressPercentage `integer`: The resync progress percentage.
  * rpoInSeconds `integer`: The RPO in seconds.
  * selectedRecoveryAzureNetworkId `string`: The selected recovery azure network Id.
  * selectedSourceNicId `string`: The selected source nic Id which will be used as the primary nic during failover.
  * sourceVmCpuCount `integer`: The CPU count of the VM on the primary side.
  * sourceVmRamSizeInMB `integer`: The RAM size of the VM on the primary side.
  * targetVmId `string`: The ARM Id of the target Azure VM. This value will be null until the VM is failed over. Only after failure it will be populated with the ARM Id of the Azure VM.
  * uncompressedDataRateInMB `number`: The uncompressed data change rate in MB.
  * useManagedDisks `string`: A value indicating whether managed disks should be used during failover.
  * vCenterInfrastructureId `string`: The vCenter infrastructure Id.
  * validationErrors `array`: The validation errors of the on-premise machine Value can be list of validation errors.
    * items [HealthError](#healtherror)
  * vhdName `string`: The OS disk VHD name.
  * vmId `string`: The virtual machine Id.
  * vmNics `array`: The PE Network details.
    * items [VMNicDetails](#vmnicdetails)
  * vmProtectionState `string`: The protection state for the vm.
  * vmProtectionStateDescription `string`: The protection state description for the vm.
  * instanceType `string`: Gets the Instance type.

### InMageAzureV2ReprotectInput
* InMageAzureV2ReprotectInput `object`: InMageAzureV2 specific provider input.
  * disksToInclude `array`: The disks to include list.
    * items `string`
  * logStorageAccountId `string`: The storage account to be used for logging during replication.
  * masterTargetId `string`: The Master target Id.
  * policyId `string`: The Policy Id.
  * processServerId `string`: The Process Server Id.
  * runAsAccountId `string`: The CS account Id.
  * storageAccountId `string`: The storage account id.
  * instanceType `string`: The class type.

### InMageAzureV2UpdateReplicationProtectedItemInput
* InMageAzureV2UpdateReplicationProtectedItemInput `object`: InMage Azure V2 input to update replication protected item.
  * recoveryAzureV1ResourceGroupId `string`: The recovery Azure resource group Id for classic deployment.
  * recoveryAzureV2ResourceGroupId `string`: The recovery Azure resource group Id for resource manager deployment.
  * useManagedDisks `string`: A value indicating whether managed disks should be used during failover.
  * instanceType `string`: The class type.

### InMageBasePolicyDetails
* InMageBasePolicyDetails `object`: Base class for the policies of providers using InMage replication.
  * appConsistentFrequencyInMinutes `integer`: The app consistent snapshot frequency in minutes.
  * multiVmSyncStatus `string`: A value indicating whether multi-VM sync has to be enabled.
  * recoveryPointHistory `integer`: The duration in minutes until which the recovery points need to be stored.
  * recoveryPointThresholdInMinutes `integer`: The recovery point threshold in minutes.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### InMageDisableProtectionProviderSpecificInput
* InMageDisableProtectionProviderSpecificInput `object`: InMage disable protection provider specific input.
  * replicaVmDeletionStatus `string`: A value indicating whether the replica VM should be destroyed or retained. Values from Delete and Retain.
  * instanceType `string`: The class type.

### InMageDiskDetails
* InMageDiskDetails `object`: VMware/Physical specific Disk Details
  * diskConfiguration `string`: Whether disk is dynamic disk or basic disk.
  * diskId `string`: The disk Id.
  * diskName `string`: The disk name.
  * diskSizeInMB `string`: The disk size in MB.
  * diskType `string`: Whether disk is system disk or data disk.
  * volumeList `array`: Volumes of the disk.
    * items [DiskVolumeDetails](#diskvolumedetails)

### InMageDiskExclusionInput
* InMageDiskExclusionInput `object`: DiskExclusionInput when doing enable protection of virtual machine in InMage provider.
  * diskSignatureOptions `array`: The guest disk signature based option for disk exclusion.
    * items [InMageDiskSignatureExclusionOptions](#inmagedisksignatureexclusionoptions)
  * volumeOptions `array`: The volume label based option for disk exclusion.
    * items [InMageVolumeExclusionOptions](#inmagevolumeexclusionoptions)

### InMageDiskSignatureExclusionOptions
* InMageDiskSignatureExclusionOptions `object`: Guest disk signature based disk exclusion option when doing enable protection of virtual machine in InMage provider.
  * diskSignature `string`: The guest signature of disk to be excluded from replication.

### InMageEnableProtectionInput
* InMageEnableProtectionInput `object`: VMware Azure specific enable protection input.
  * datastoreName `string`: The target datastore name.
  * diskExclusionInput [InMageDiskExclusionInput](#inmagediskexclusioninput)
  * disksToInclude `array`: The disks to include list.
    * items `string`
  * masterTargetId **required** `string`: The Master Target Id.
  * multiVmGroupId **required** `string`: The multi vm group Id.
  * multiVmGroupName **required** `string`: The multi vm group name.
  * processServerId **required** `string`: The Process Server Id.
  * retentionDrive **required** `string`: The retention drive to use on the MT.
  * runAsAccountId `string`: The CS account Id.
  * vmFriendlyName `string`: The Vm Name.
  * instanceType `string`: The class type.

### InMageFailoverProviderInput
* InMageFailoverProviderInput `object`: Provider specific input for InMage failover.
  * recoveryPointId `string`: The recovery point id to be passed to failover to a particular recovery point. In case of latest recovery point, null should be passed.
  * recoveryPointType `string` (values: LatestTime, LatestTag, Custom): The recovery point type. Values from LatestTime, LatestTag or Custom. In the case of custom, the recovery point provided by RecoveryPointId will be used. In the other two cases, recovery point id will be ignored.
  * instanceType `string`: The class type.

### InMagePolicyDetails
* InMagePolicyDetails `object`: InMage specific protection profile details.
  * appConsistentFrequencyInMinutes `integer`: The app consistent snapshot frequency in minutes.
  * multiVmSyncStatus `string`: A value indicating whether multi-VM sync has to be enabled.
  * recoveryPointHistory `integer`: The duration in minutes until which the recovery points need to be stored.
  * recoveryPointThresholdInMinutes `integer`: The recovery point threshold in minutes.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### InMagePolicyInput
* InMagePolicyInput `object`: VMWare Azure specific protection profile Input.
  * appConsistentFrequencyInMinutes `integer`: The app consistent snapshot frequency (in minutes).
  * multiVmSyncStatus **required** `string` (values: Enable, Disable): A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
  * recoveryPointHistory `integer`: The duration in minutes until which the recovery points need to be stored.
  * recoveryPointThresholdInMinutes `integer`: The recovery point threshold in minutes.
  * instanceType `string`: The class type.

### InMageProtectedDiskDetails
* InMageProtectedDiskDetails `object`: InMage protected disk details.
  * diskCapacityInBytes `integer`: The disk capacity in bytes.
  * diskId `string`: The disk id.
  * diskName `string`: The disk name.
  * diskResized `string`: A value indicating whether disk is resized.
  * fileSystemCapacityInBytes `integer`: The file system capacity in bytes.
  * healthErrorCode `string`: The health error code for the disk.
  * lastRpoCalculatedTime `string`: The last RPO calculated time.
  * protectionStage `string`: The protection stage.
  * psDataInMB `number`: The PS data transit in MB.
  * resyncDurationInSeconds `integer`: The resync duration in seconds.
  * resyncProgressPercentage `integer`: The resync progress percentage.
  * resyncRequired `string`: A value indicating whether resync is required for this disk.
  * rpoInSeconds `integer`: The RPO in seconds.
  * sourceDataInMB `number`: The source data transit in MB.
  * targetDataInMB `number`: The target data transit in MB.

### InMageReplicationDetails
* InMageReplicationDetails `object`: InMage provider specific settings
  * activeSiteType `string`: The active location of the VM. If the VM is being protected from Azure, this field will take values from { Azure, OnPrem }. If the VM is being protected between two data-centers, this field will be OnPrem always.
  * agentDetails [InMageAgentDetails](#inmageagentdetails)
  * azureStorageAccountId `string`: A value indicating the underlying Azure storage account. If the VM is not running in Azure, this value shall be set to null.
  * compressedDataRateInMB `number`: The compressed data change rate in MB.
  * consistencyPoints `object`: The collection of Consistency points.
  * datastores `array`: The datastores of the on-premise machine Value can be list of strings that contain datastore names
    * items `string`
  * discoveryType `string`: A value indicating the discovery type of the machine.
  * diskResized `string`: A value indicating whether any disk is resized for this VM.
  * infrastructureVmId `string`: The infrastructure VM Id.
  * ipAddress `string`: The source IP address.
  * lastHeartbeat `string`: The last heartbeat received from the source server.
  * lastRpoCalculatedTime `string`: The last RPO calculated time.
  * lastUpdateReceivedTime `string`: The last update time received from on-prem components.
  * masterTargetId `string`: The master target Id.
  * multiVmGroupId `string`: The multi vm group Id, if any.
  * multiVmGroupName `string`: The multi vm group name, if any.
  * multiVmSyncStatus `string`: A value indicating whether the multi vm sync is enabled or disabled.
  * osDetails [OSDiskDetails](#osdiskdetails)
  * osVersion `string`: The OS Version of the protected item.
  * processServerId `string`: The process server Id.
  * protectedDisks `array`: The list of protected disks.
    * items [InMageProtectedDiskDetails](#inmageprotecteddiskdetails)
  * protectionStage `string`: The protection stage.
  * rebootAfterUpdateStatus `string`: A value indicating whether the source server requires a restart after update.
  * replicaId `string`: The replica id of the protected item.
  * resyncDetails [InitialReplicationDetails](#initialreplicationdetails)
  * retentionWindowEnd `string`: The retention window end time.
  * retentionWindowStart `string`: The retention window start time.
  * rpoInSeconds `integer`: The RPO in seconds.
  * sourceVmCpuCount `integer`: The CPU count of the VM on the primary side.
  * sourceVmRamSizeInMB `integer`: The RAM size of the VM on the primary side.
  * uncompressedDataRateInMB `number`: The uncompressed data change rate in MB.
  * vCenterInfrastructureId `string`: The vCenter infrastructure Id.
  * validationErrors `array`: The validation errors of the on-premise machine Value can be list of validation errors
    * items [HealthError](#healtherror)
  * vmId `string`: The virtual machine Id.
  * vmNics `array`: The PE Network details.
    * items [VMNicDetails](#vmnicdetails)
  * vmProtectionState `string`: The protection state for the vm.
  * vmProtectionStateDescription `string`: The protection state description for the vm.
  * instanceType `string`: Gets the Instance type.

### InMageReprotectInput
* InMageReprotectInput `object`: InMageAzureV2 specific provider input.
  * datastoreName `string`: The target datastore name.
  * diskExclusionInput [InMageDiskExclusionInput](#inmagediskexclusioninput)
  * disksToInclude `array`: The disks to include list.
    * items `string`
  * masterTargetId **required** `string`: The Master Target Id.
  * processServerId **required** `string`: The Process Server Id.
  * profileId **required** `string`: The Policy Id.
  * retentionDrive **required** `string`: The retention drive to use on the MT.
  * runAsAccountId `string`: The CS account Id.
  * instanceType `string`: The class type.

### InMageVolumeExclusionOptions
* InMageVolumeExclusionOptions `object`: Guest disk signature based disk exclusion option when doing enable protection of virtual machine in InMage provider.
  * onlyExcludeIfSingleVolume `string`: The value indicating whether to exclude multi volume disk or not. If a disk has multiple volumes and one of the volume has label matching with VolumeLabel this disk will be excluded from replication if OnlyExcludeIfSingleVolume is false.
  * volumeLabel `string`: The volume label. The disk having any volume with this label will be excluded from replication.

### InconsistentVmDetails
* InconsistentVmDetails `object`: This class stores the monitoring details for consistency check of inconsistent Protected Entity.
  * cloudName `string`: The Cloud name.
  * details `array`: The list of details regarding state of the Protected Entity in SRS and On prem.
    * items `string`
  * errorIds `array`: The list of error ids.
    * items `string`
  * vmName `string`: The Vm name.

### InitialReplicationDetails
* InitialReplicationDetails `object`: Initial replication details.
  * initialReplicationProgressPercentage `string`: The initial replication progress percentage.
  * initialReplicationType `string`: Initial replication type.

### InlineWorkflowTaskDetails
* InlineWorkflowTaskDetails `object`: This class represents the inline workflow task details.
  * workflowIds `array`: The list of child workflow ids.
    * items `string`
  * childTasks `array`: The child tasks.
    * items [ASRTask](#asrtask)
  * instanceType `string`: The type of task details.

### InnerHealthError
* InnerHealthError `object`: Implements InnerHealthError class. HealthError object has a list of InnerHealthErrors as child errors. InnerHealthError is used because this will prevent an infinite loop of structures when Hydra tries to auto-generate the contract. We are exposing the related health errors as inner health errors and all API consumers can utilize this in the same fashion as Exception -&gt; InnerException.
  * creationTimeUtc `string`: Error creation time (UTC)
  * entityId `string`: ID of the entity.
  * errorCategory `string`: Category of error.
  * errorCode `string`: Error code.
  * errorLevel `string`: Level of error.
  * errorMessage `string`: Error message.
  * errorSource `string`: Source of error.
  * errorType `string`: Type of error.
  * possibleCauses `string`: Possible causes of error.
  * recommendedAction `string`: Recommended action to resolve error.
  * recoveryProviderErrorMessage `string`: DRA error message.
  * summaryMessage `string`: Summary message of the entity.

### InputEndpoint
* InputEndpoint `object`: Azure VM input endpoint details.
  * endpointName `string`: The input endpoint name.
  * privatePort `integer`: The input endpoint private port.
  * protocol `string`: The input endpoint protocol.
  * publicPort `integer`: The input endpoint public port.

### Job
* Job `object`: Job details.
  * properties [JobProperties](#jobproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### JobCollection
* JobCollection `object`: Collection of jobs.
  * nextLink `string`: The value of next link.
  * value `array`: The list of jobs.
    * items [Job](#job)

### JobDetails
* JobDetails `object`: Job details based on specific job type.
  * affectedObjectDetails `object`: The affected object properties like source server, source cloud, target server, target cloud etc. based on the workflow object details.
  * instanceType `string`: Gets the type of job details (see JobDetailsTypes enum for possible values).

### JobEntity
* JobEntity `object`: This class contains the minimal job details required to navigate to the desired drill down.
  * jobFriendlyName `string`: The job display name.
  * jobId `string`: The job id.
  * jobScenarioName `string`: The job name. Enum type ScenarioName.
  * targetInstanceType `string`: The workflow affected object type.
  * targetObjectId `string`: The object id.
  * targetObjectName `string`: The object name.

### JobErrorDetails
* JobErrorDetails `object`: This class contains the error details per object.
  * creationTime `string`: The creation time of job error.
  * errorLevel `string`: Error level of error.
  * providerErrorDetails [ProviderError](#providererror)
  * serviceErrorDetails [ServiceError](#serviceerror)
  * taskId `string`: The Id of the task.

### JobProperties
* JobProperties `object`: Job custom data details.
  * activityId `string`: The activity id.
  * allowedActions `array`: The Allowed action the job.
    * items `string`
  * customDetails [JobDetails](#jobdetails)
  * endTime `string`: The end time.
  * errors `array`: The errors.
    * items [JobErrorDetails](#joberrordetails)
  * friendlyName `string`: The DisplayName.
  * scenarioName `string`: The ScenarioName.
  * startTime `string`: The start time.
  * state `string`: The status of the Job. It is one of these values - NotStarted, InProgress, Succeeded, Failed, Cancelled, Suspended or Other.
  * stateDescription `string`: The description of the state of the Job. For e.g. - For Succeeded state, description can be Completed, PartiallySucceeded, CompletedWithInformation or Skipped.
  * targetInstanceType `string`: The type of the affected object which is of {Microsoft.Azure.SiteRecovery.V2015_11_10.AffectedObjectType} class.
  * targetObjectId `string`: The affected Object Id.
  * targetObjectName `string`: The name of the affected object.
  * tasks `array`: The tasks.
    * items [ASRTask](#asrtask)

### JobQueryParameter
* JobQueryParameter `object`: Query parameter to enumerate jobs.
  * affectedObjectTypes `string`: The type of objects.
  * endTime `string`: Date time to get jobs upto.
  * fabricId `string`: The Id of the fabric to search jobs under.
  * jobStatus `string`: The states of the job to be filtered can be in.
  * startTime `string`: Date time to get jobs from.

### JobStatusEventDetails
* JobStatusEventDetails `object`: Model class for event details of a job status event.
  * affectedObjectType `string`: AffectedObjectType for the event.
  * jobFriendlyName `string`: JobName for the Event.
  * jobId `string`: Job arm id for the event.
  * jobStatus `string`: JobStatus for the Event.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### JobTaskDetails
* JobTaskDetails `object`: This class represents a task which is actually a workflow so that one can navigate to its individual drill down.
  * jobTask [JobEntity](#jobentity)
  * instanceType `string`: The type of task details.

### LogicalNetwork
* LogicalNetwork `object`: Logical network data model.
  * properties [LogicalNetworkProperties](#logicalnetworkproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### LogicalNetworkCollection
* LogicalNetworkCollection `object`: List of logical networks.
  * nextLink `string`: The value of next link.
  * value `array`: The Logical Networks list details.
    * items [LogicalNetwork](#logicalnetwork)

### LogicalNetworkProperties
* LogicalNetworkProperties `object`: Logical Network Properties.
  * friendlyName `string`: The Friendly Name.
  * logicalNetworkDefinitionsStatus `string`: A value indicating whether logical network definitions are isolated.
  * logicalNetworkUsage `string`: A value indicating whether logical network is used as private test network by test failover.
  * networkVirtualizationStatus `string`: A value indicating whether Network Virtualization is enabled for the logical network.

### ManualActionTaskDetails
* ManualActionTaskDetails `object`: This class represents the manual action task details.
  * instructions `string`: The instructions.
  * name `string`: The name.
  * observation `string`: The observation.
  * instanceType `string`: The type of task details.

### MasterTargetServer
* MasterTargetServer `object`: Details of a Master Target Server.
  * agentExpiryDate `string`: Agent expiry date.
  * agentVersion `string`: The version of the scout component on the server.
  * agentVersionDetails [VersionDetails](#versiondetails)
  * dataStores `array`: The list of data stores in the fabric.
    * items [DataStore](#datastore)
  * diskCount `integer`: Disk count of the master target.
  * healthErrors `array`: Health errors.
    * items [HealthError](#healtherror)
  * id `string`: The server Id.
  * ipAddress `string`: The IP address of the server.
  * lastHeartbeat `string`: The last heartbeat received from the server.
  * marsAgentExpiryDate `string`: MARS agent expiry date.
  * marsAgentVersion `string`: MARS agent version.
  * marsAgentVersionDetails [VersionDetails](#versiondetails)
  * name `string`: The server name.
  * osType `string`: The OS type of the server.
  * osVersion `string`: OS Version of the master target.
  * retentionVolumes `array`: The retention volumes of Master target Server.
    * items [RetentionVolume](#retentionvolume)
  * validationErrors `array`: Validation errors.
    * items [HealthError](#healtherror)
  * versionStatus `string`: Version status

### MobilityServiceUpdate
* MobilityServiceUpdate `object`: The Mobility Service update details.
  * osType `string`: The OS type.
  * rebootStatus `string`: The reboot status of the update - whether it is required or not.
  * version `string`: The version of the latest update.

### Network
* Network `object`: Network model.
  * properties [NetworkProperties](#networkproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### NetworkCollection
* NetworkCollection `object`: List of networks.
  * nextLink `string`: The value of next link.
  * value `array`: The Networks list details.
    * items [Network](#network)

### NetworkMapping
* NetworkMapping `object`: Network Mapping model. Ideally it should have been possible to inherit this class from prev version in InheritedModels as long as there is no difference in structure or method signature. Since there were no base Models for certain fields and methods viz NetworkMappingProperties and Load with required return type, the class has been introduced in its entirety with references to base models to facilitate exensions in subsequent versions.
  * properties [NetworkMappingProperties](#networkmappingproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### NetworkMappingCollection
* NetworkMappingCollection `object`: List of network mappings. As with NetworkMapping, it should be possible to reuse a prev version of this class. It doesn't seem likely this class could be anything more than a slightly bespoke collection of NetworkMapping. Hence it makes sense to override Load with Base.NetworkMapping instead of existing CurrentVersion.NetworkMapping.
  * nextLink `string`: The value of next link.
  * value `array`: The Network Mappings list.
    * items [NetworkMapping](#networkmapping)

### NetworkMappingFabricSpecificSettings
* NetworkMappingFabricSpecificSettings `object`: Network Mapping fabric specific settings.
  * instanceType `string`: Gets the Instance type.

### NetworkMappingProperties
* NetworkMappingProperties `object`: Network Mapping Properties.
  * fabricSpecificSettings [NetworkMappingFabricSpecificSettings](#networkmappingfabricspecificsettings)
  * primaryFabricFriendlyName `string`: The primary fabric friendly name.
  * primaryNetworkFriendlyName `string`: The primary network friendly name.
  * primaryNetworkId `string`: The primary network id for network mapping.
  * recoveryFabricArmId `string`: The recovery fabric ARM id.
  * recoveryFabricFriendlyName `string`: The recovery fabric friendly name.
  * recoveryNetworkFriendlyName `string`: The recovery network friendly name.
  * recoveryNetworkId `string`: The recovery network id for network mapping.
  * state `string`: The pairing state for network mapping.

### NetworkProperties
* NetworkProperties `object`: Network Properties
  * fabricType `string`: The Fabric Type.
  * friendlyName `string`: The Friendly Name.
  * networkType `string`: The Network Type.
  * subnets `array`: The List of subnets.
    * items [Subnet](#subnet)

### OSDetails
* OSDetails `object`: Disk Details.
  * oSMajorVersion `string`: The OS Major Version.
  * oSMinorVersion `string`: The OS Minor Version.
  * oSVersion `string`: The OS Version.
  * osEdition `string`: The OSEdition.
  * osType `string`: VM Disk details.
  * productType `string`: Product type.

### OSDiskDetails
* OSDiskDetails `object`: Details of the OS Disk.
  * osType `string`: The type of the OS on the VM.
  * osVhdId `string`: The id of the disk containing the OS.
  * vhdName `string`: The OS disk VHD name.

### Object
* Object `object`: Base of all objects.

### OperationsDiscovery
* OperationsDiscovery `object`: Operations discovery class.
  * display [Display](#display)
  * name `string`: Name of the API. The name of the operation being performed on this particular object. It should match the action name that appears in RBAC / the event service. Examples of operations include: * Microsoft.Compute/virtualMachine/capture/action * Microsoft.Compute/virtualMachine/restart/action * Microsoft.Compute/virtualMachine/write * Microsoft.Compute/virtualMachine/read * Microsoft.Compute/virtualMachine/delete Each action should include, in order: (1) Resource Provider Namespace (2) Type hierarchy for which the action applies (e.g. server/databases for a SQL Azure database) (3) Read, Write, Action or Delete indicating which type applies. If it is a PUT/PATCH on a collection or named value, Write should be used. If it is a GET, Read should be used. If it is a DELETE, Delete should be used. If it is a POST, Action should be used. As a note: all resource providers would need to include the "{Resource Provider Namespace}/register/action" operation in their response. This API is used to register for their service, and should include details about the operation (e.g. a localized name for the resource provider + any special considerations like PII release)
  * origin `string`: Origin. The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX. Default value is "user,system"
  * properties [OperationsDiscoveryProperties](#operationsdiscoveryproperties)

### OperationsDiscoveryCollection
* OperationsDiscoveryCollection `object`: Collection of ClientDiscovery details.
  * nextLink `string`: The value of next link.
  * value `array`: The ClientDiscovery details.
    * items [OperationsDiscovery](#operationsdiscovery)

### OperationsDiscoveryProperties
* OperationsDiscoveryProperties `object`: ClientDiscovery properties.

### PlannedFailoverInput
* PlannedFailoverInput `object`: Input definition for planned failover.
  * properties [PlannedFailoverInputProperties](#plannedfailoverinputproperties)

### PlannedFailoverInputProperties
* PlannedFailoverInputProperties `object`: Input definition for planned failover input properties.
  * failoverDirection `string`: Failover direction.
  * providerSpecificDetails [ProviderSpecificFailoverInput](#providerspecificfailoverinput)

### Policy
* Policy `object`: Protection profile details.
  * properties [PolicyProperties](#policyproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### PolicyCollection
* PolicyCollection `object`: Protection Profile Collection details.
  * nextLink `string`: The value of next link.
  * value `array`: The policy details.
    * items [Policy](#policy)

### PolicyProperties
* PolicyProperties `object`: Protection profile custom data details.
  * friendlyName `string`: The FriendlyName.
  * providerSpecificDetails [PolicyProviderSpecificDetails](#policyproviderspecificdetails)

### PolicyProviderSpecificDetails
* PolicyProviderSpecificDetails `object`: Base class for Provider specific details for policies.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### PolicyProviderSpecificInput
* PolicyProviderSpecificInput `object`: Base class for provider specific input
  * instanceType `string`: The class type.

### ProcessServer
* ProcessServer `object`: Details of the Process Server.
  * agentExpiryDate `string`: Agent expiry date.
  * agentVersion `string`: The version of the scout component on the server.
  * agentVersionDetails [VersionDetails](#versiondetails)
  * availableMemoryInBytes `integer`: The available memory.
  * availableSpaceInBytes `integer`: The available space.
  * cpuLoad `string`: The percentage of the CPU load.
  * cpuLoadStatus `string`: The CPU load status.
  * friendlyName `string`: The Process Server's friendly name.
  * healthErrors `array`: Health errors.
    * items [HealthError](#healtherror)
  * hostId `string`: The agent generated Id.
  * id `string`: The Process Server Id.
  * ipAddress `string`: The IP address of the server.
  * lastHeartbeat `string`: The last heartbeat received from the server.
  * machineCount `string`: The servers configured with this PS.
  * memoryUsageStatus `string`: The memory usage status.
  * mobilityServiceUpdates `array`: The list of the mobility service updates available on the Process Server.
    * items [MobilityServiceUpdate](#mobilityserviceupdate)
  * osType `string`: The OS type of the server.
  * osVersion `string`: OS Version of the process server. Note: This will get populated if user has CS version greater than 9.12.0.0.
  * psServiceStatus `string`: The PS service status.
  * replicationPairCount `string`: The number of replication pairs configured in this PS.
  * spaceUsageStatus `string`: The space usage status.
  * sslCertExpiryDate `string`: The PS SSL cert expiry date.
  * sslCertExpiryRemainingDays `integer`: CS SSL cert expiry date.
  * systemLoad `string`: The percentage of the system load.
  * systemLoadStatus `string`: The system load status.
  * totalMemoryInBytes `integer`: The total memory.
  * totalSpaceInBytes `integer`: The total space.
  * versionStatus `string`: Version status

### ProtectableItem
* ProtectableItem `object`: Replication protected item
  * properties [ProtectableItemProperties](#protectableitemproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### ProtectableItemCollection
* ProtectableItemCollection `object`: Protectable item collection.
  * nextLink `string`: The value of next link.
  * value `array`: The Protectable item details.
    * items [ProtectableItem](#protectableitem)

### ProtectableItemProperties
* ProtectableItemProperties `object`: Replication protected item custom data details.
  * customDetails [ConfigurationSettings](#configurationsettings)
  * friendlyName `string`: The name.
  * protectionReadinessErrors `array`: The Current protection readiness errors.
    * items `string`
  * protectionStatus `string`: The protection status.
  * recoveryServicesProviderId `string`: The recovery provider ARM Id.
  * replicationProtectedItemId `string`: The ARM resource of protected items.
  * supportedReplicationProviders `array`: The list of replication providers supported for the protectable item.
    * items `string`

### ProtectableItemQueryParameter
* ProtectableItemQueryParameter `object`: Query parameter to enumerate Protectable items.
  * state `string`: State of the Protectable item query filter.

### ProtectedItemsQueryParameter
* ProtectedItemsQueryParameter `object`: Query parameter to enumerate protected items.
  * instanceType `string`: The replication provider type.
  * multiVmGroupCreateOption `string` (values: AutoCreated, UserSpecified): Whether Multi VM group is auto created or specified by user.
  * recoveryPlanName `string`: The recovery plan filter.
  * sourceFabricName `string`: The source fabric name filter.
  * vCenterName `string`: The vCenter name filter.

### ProtectionContainer
* ProtectionContainer `object`: Protection container details.
  * properties [ProtectionContainerProperties](#protectioncontainerproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### ProtectionContainerCollection
* ProtectionContainerCollection `object`: Protection Container collection.
  * nextLink `string`: The value of next link.
  * value `array`: The Protection Container details.
    * items [ProtectionContainer](#protectioncontainer)

### ProtectionContainerFabricSpecificDetails
* ProtectionContainerFabricSpecificDetails `object`: Base class for fabric specific details of container.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### ProtectionContainerMapping
* ProtectionContainerMapping `object`: Protection container mapping object.
  * properties [ProtectionContainerMappingProperties](#protectioncontainermappingproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### ProtectionContainerMappingCollection
* ProtectionContainerMappingCollection `object`: Protection container mapping collection class.
  * nextLink `string`: Link to fetch rest of the data.
  * value `array`: List of container mappings.
    * items [ProtectionContainerMapping](#protectioncontainermapping)

### ProtectionContainerMappingProperties
* ProtectionContainerMappingProperties `object`: Protection container mapping properties.
  * health `string`: Health of pairing.
  * healthErrorDetails `array`: Health error.
    * items [HealthError](#healtherror)
  * policyFriendlyName `string`: Friendly name of replication policy.
  * policyId `string`: Policy ARM Id.
  * providerSpecificDetails [ProtectionContainerMappingProviderSpecificDetails](#protectioncontainermappingproviderspecificdetails)
  * sourceFabricFriendlyName `string`: Friendly name of source fabric.
  * sourceProtectionContainerFriendlyName `string`: Friendly name of source protection container.
  * state `string`: Association Status
  * targetFabricFriendlyName `string`: Friendly name of target fabric.
  * targetProtectionContainerFriendlyName `string`: Friendly name of paired container.
  * targetProtectionContainerId `string`: Paired protection container ARM ID.

### ProtectionContainerMappingProviderSpecificDetails
* ProtectionContainerMappingProviderSpecificDetails `object`: Container mapping provider specific details.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### ProtectionContainerProperties
* ProtectionContainerProperties `object`: Protection profile custom data details.
  * fabricFriendlyName `string`: Fabric friendly name.
  * fabricSpecificDetails [ProtectionContainerFabricSpecificDetails](#protectioncontainerfabricspecificdetails)
  * fabricType `string`: The fabric type.
  * friendlyName `string`: The name.
  * pairingStatus `string`: The pairing status of this cloud.
  * protectedItemCount `integer`: Number of protected PEs
  * role `string`: The role of this cloud.

### ProviderError
* ProviderError `object`: This class contains the error details per object.
  * errorCode `integer`: The Error code.
  * errorId `string`: The Provider error Id.
  * errorMessage `string`: The Error message.
  * possibleCauses `string`: The possible causes for the error.
  * recommendedAction `string`: The recommended action to resolve the error.

### ProviderSpecificFailoverInput
* ProviderSpecificFailoverInput `object`: Provider specific failover input.
  * instanceType `string`: The class type.

### ProviderSpecificRecoveryPointDetails
* ProviderSpecificRecoveryPointDetails `object`: Replication provider specific recovery point details.
  * instanceType `string`: Gets the provider type.

### RcmAzureMigrationPolicyDetails
* RcmAzureMigrationPolicyDetails `object`: RCM based Azure migration specific policy details.
  * appConsistentFrequencyInMinutes `integer`: The app consistent snapshot frequency in minutes.
  * crashConsistentFrequencyInMinutes `integer`: The crash consistent snapshot frequency in minutes.
  * multiVmSyncStatus `string` (values: Enabled, Disabled): A value indicating whether multi-VM sync has to be enabled.
  * recoveryPointHistory `integer`: The duration in minutes until which the recovery points need to be stored.
  * recoveryPointThresholdInMinutes `integer`: The recovery point threshold in minutes.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### RecoveryPlan
* RecoveryPlan `object`: Recovery plan details.
  * properties [RecoveryPlanProperties](#recoveryplanproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### RecoveryPlanA2AFailoverInput
* RecoveryPlanA2AFailoverInput `object`: Recovery plan A2A failover input.
  * cloudServiceCreationOption `string`: A value indicating whether to use recovery cloud service for TFO or not.
  * multiVmSyncPointOption `string` (values: UseMultiVmSyncRecoveryPoint, UsePerVmRecoveryPoint): A value indicating whether multi VM sync enabled VMs should use multi VM sync points for failover.
  * recoveryPointType **required** `string` (values: Latest, LatestApplicationConsistent, LatestCrashConsistent, LatestProcessed): The recovery point type.
  * instanceType `string`: The class type.

### RecoveryPlanAction
* RecoveryPlanAction `object`: Recovery plan action details.
  * actionName **required** `string`: The action name.
  * customDetails **required** [RecoveryPlanActionDetails](#recoveryplanactiondetails)
  * failoverDirections **required** `array`: The list of failover directions.
    * items `string` (values: PrimaryToRecovery, RecoveryToPrimary)
  * failoverTypes **required** `array`: The list of failover types.
    * items `string` (values: ReverseReplicate, Commit, PlannedFailover, UnplannedFailover, DisableProtection, TestFailover, TestFailoverCleanup, Failback, FinalizeFailback, ChangePit, RepairReplication, SwitchProtection, CompleteMigration)

### RecoveryPlanActionDetails
* RecoveryPlanActionDetails `object`: Recovery plan action custom details.
  * instanceType `string`: Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).

### RecoveryPlanAutomationRunbookActionDetails
* RecoveryPlanAutomationRunbookActionDetails `object`: Recovery plan Automation runbook action details.
  * fabricLocation **required** `string` (values: Primary, Recovery): The fabric location.
  * runbookId `string`: The runbook ARM Id.
  * timeout `string`: The runbook timeout.
  * instanceType `string`: Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).

### RecoveryPlanCollection
* RecoveryPlanCollection `object`: Recovery plan collection details.
  * nextLink `string`: The value of next link.
  * value `array`: The list of recovery plans.
    * items [RecoveryPlan](#recoveryplan)

### RecoveryPlanGroup
* RecoveryPlanGroup `object`: Recovery plan group details.
  * endGroupActions `array`: The end group actions.
    * items [RecoveryPlanAction](#recoveryplanaction)
  * groupType **required** `string` (values: Shutdown, Boot, Failover): The group type.
  * replicationProtectedItems `array`: The list of protected items.
    * items [RecoveryPlanProtectedItem](#recoveryplanprotecteditem)
  * startGroupActions `array`: The start group actions.
    * items [RecoveryPlanAction](#recoveryplanaction)

### RecoveryPlanGroupTaskDetails
* RecoveryPlanGroupTaskDetails `object`: This class represents the recovery plan group task.
  * groupId `string`: The group identifier.
  * name `string`: The name.
  * rpGroupType `string`: The group type.
  * childTasks `array`: The child tasks.
    * items [ASRTask](#asrtask)
  * instanceType `string`: The type of task details.

### RecoveryPlanHyperVReplicaAzureFailbackInput
* RecoveryPlanHyperVReplicaAzureFailbackInput `object`: Recovery plan HVR Azure failback input.
  * dataSyncOption **required** `string` (values: ForDownTime, ForSynchronization): The data sync option.
  * recoveryVmCreationOption **required** `string` (values: CreateVmIfNotFound, NoAction): The ALR option.
  * instanceType `string`: The class type.

### RecoveryPlanHyperVReplicaAzureFailoverInput
* RecoveryPlanHyperVReplicaAzureFailoverInput `object`: Recovery plan HVR Azure failover input.
  * primaryKekCertificatePfx `string`: The primary KEK certificate PFX.
  * recoveryPointType `string` (values: Latest, LatestApplicationConsistent, LatestProcessed): The recovery point type.
  * secondaryKekCertificatePfx `string`: The secondary KEK certificate PFX.
  * vaultLocation **required** `string`: The vault location.
  * instanceType `string`: The class type.

### RecoveryPlanInMageAzureV2FailoverInput
* RecoveryPlanInMageAzureV2FailoverInput `object`: Recovery plan InMageAzureV2 failover input.
  * recoveryPointType **required** `string` (values: Latest, LatestApplicationConsistent, LatestCrashConsistent, LatestProcessed): The recovery point type.
  * useMultiVmSyncPoint `string`: A value indicating whether multi VM sync enabled VMs should use multi VM sync points for failover.
  * vaultLocation **required** `string`: The vault location.
  * instanceType `string`: The class type.

### RecoveryPlanInMageFailoverInput
* RecoveryPlanInMageFailoverInput `object`: Recovery plan InMage failover input.
  * recoveryPointType **required** `string` (values: LatestTime, LatestTag, Custom): The recovery point type.
  * instanceType `string`: The class type.

### RecoveryPlanManualActionDetails
* RecoveryPlanManualActionDetails `object`: Recovery plan manual action details.
  * description `string`: The manual action description.
  * instanceType `string`: Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).

### RecoveryPlanPlannedFailoverInput
* RecoveryPlanPlannedFailoverInput `object`: Recovery plan planned failover input.
  * properties **required** [RecoveryPlanPlannedFailoverInputProperties](#recoveryplanplannedfailoverinputproperties)

### RecoveryPlanPlannedFailoverInputProperties
* RecoveryPlanPlannedFailoverInputProperties `object`: Recovery plan planned failover input properties.
  * failoverDirection **required** `string` (values: PrimaryToRecovery, RecoveryToPrimary): The failover direction.
  * providerSpecificDetails `array`: The provider specific properties.
    * items [RecoveryPlanProviderSpecificFailoverInput](#recoveryplanproviderspecificfailoverinput)

### RecoveryPlanProperties
* RecoveryPlanProperties `object`: Recovery plan custom details.
  * allowedOperations `array`: The list of allowed operations.
    * items `string`
  * currentScenario [CurrentScenarioDetails](#currentscenariodetails)
  * currentScenarioStatus `string`: The recovery plan status.
  * currentScenarioStatusDescription `string`: The recovery plan status description.
  * failoverDeploymentModel `string`: The failover deployment model.
  * friendlyName `string`: The friendly name.
  * groups `array`: The recovery plan groups.
    * items [RecoveryPlanGroup](#recoveryplangroup)
  * lastPlannedFailoverTime `string`: The start time of the last planned failover.
  * lastTestFailoverTime `string`: The start time of the last test failover.
  * lastUnplannedFailoverTime `string`: The start time of the last unplanned failover.
  * primaryFabricFriendlyName `string`: The primary fabric friendly name.
  * primaryFabricId `string`: The primary fabric Id.
  * recoveryFabricFriendlyName `string`: The recovery fabric friendly name.
  * recoveryFabricId `string`: The recovery fabric Id.
  * replicationProviders `array`: The list of replication providers.
    * items `string`

### RecoveryPlanProtectedItem
* RecoveryPlanProtectedItem `object`: Recovery plan protected item.
  * id `string`: The ARM Id of the recovery plan protected item.
  * virtualMachineId `string`: The virtual machine Id.

### RecoveryPlanProviderSpecificFailoverInput
* RecoveryPlanProviderSpecificFailoverInput `object`: Recovery plan provider specific failover input base class.
  * instanceType `string`: The class type.

### RecoveryPlanScriptActionDetails
* RecoveryPlanScriptActionDetails `object`: Recovery plan script action details.
  * fabricLocation **required** `string` (values: Primary, Recovery): The fabric location.
  * path **required** `string`: The script path.
  * timeout `string`: The script timeout.
  * instanceType `string`: Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).

### RecoveryPlanShutdownGroupTaskDetails
* RecoveryPlanShutdownGroupTaskDetails `object`: This class represents the recovery plan shutdown group task details.
  * groupId `string`: The group identifier.
  * name `string`: The name.
  * rpGroupType `string`: The group type.
  * childTasks `array`: The child tasks.
    * items [ASRTask](#asrtask)
  * instanceType `string`: The type of task details.

### RecoveryPlanTestFailoverCleanupInput
* RecoveryPlanTestFailoverCleanupInput `object`: Recovery plan test failover cleanup input.
  * properties **required** [RecoveryPlanTestFailoverCleanupInputProperties](#recoveryplantestfailovercleanupinputproperties)

### RecoveryPlanTestFailoverCleanupInputProperties
* RecoveryPlanTestFailoverCleanupInputProperties `object`: Recovery plan test failover cleanup input properties.
  * comments `string`: The test failover cleanup comments.

### RecoveryPlanTestFailoverInput
* RecoveryPlanTestFailoverInput `object`: Recovery plan test failover input.
  * properties **required** [RecoveryPlanTestFailoverInputProperties](#recoveryplantestfailoverinputproperties)

### RecoveryPlanTestFailoverInputProperties
* RecoveryPlanTestFailoverInputProperties `object`: Recovery plan test failover input properties.
  * failoverDirection **required** `string` (values: PrimaryToRecovery, RecoveryToPrimary): The failover direction.
  * networkId `string`: The Id of the network to be used for test failover.
  * networkType **required** `string`: The network type to be used for test failover.
  * providerSpecificDetails `array`: The provider specific properties.
    * items [RecoveryPlanProviderSpecificFailoverInput](#recoveryplanproviderspecificfailoverinput)
  * skipTestFailoverCleanup `string`: A value indicating whether the test failover cleanup is to be skipped.

### RecoveryPlanUnplannedFailoverInput
* RecoveryPlanUnplannedFailoverInput `object`: Recovery plan unplanned failover input.
  * properties **required** [RecoveryPlanUnplannedFailoverInputProperties](#recoveryplanunplannedfailoverinputproperties)

### RecoveryPlanUnplannedFailoverInputProperties
* RecoveryPlanUnplannedFailoverInputProperties `object`: Recovery plan unplanned failover input properties.
  * failoverDirection **required** `string` (values: PrimaryToRecovery, RecoveryToPrimary): The failover direction.
  * providerSpecificDetails `array`: The provider specific properties.
    * items [RecoveryPlanProviderSpecificFailoverInput](#recoveryplanproviderspecificfailoverinput)
  * sourceSiteOperations **required** `string` (values: Required, NotRequired): A value indicating whether source site operations are required.

### RecoveryPoint
* RecoveryPoint `object`: Base class representing a recovery point.
  * properties [RecoveryPointProperties](#recoverypointproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### RecoveryPointCollection
* RecoveryPointCollection `object`: Collection of recovery point details.
  * nextLink `string`: The value of next link.
  * value `array`: The recovery point details.
    * items [RecoveryPoint](#recoverypoint)

### RecoveryPointProperties
* RecoveryPointProperties `object`: Recovery point properties.
  * providerSpecificDetails [ProviderSpecificRecoveryPointDetails](#providerspecificrecoverypointdetails)
  * recoveryPointTime `string`: The recovery point time.
  * recoveryPointType `string`: The recovery point type: ApplicationConsistent, CrashConsistent.

### RecoveryServicesProvider
* RecoveryServicesProvider `object`: Provider details.
  * properties [RecoveryServicesProviderProperties](#recoveryservicesproviderproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### RecoveryServicesProviderCollection
* RecoveryServicesProviderCollection `object`: Collection of providers.
  * nextLink `string`: The value of next link.
  * value `array`: The Servers details.
    * items [RecoveryServicesProvider](#recoveryservicesprovider)

### RecoveryServicesProviderProperties
* RecoveryServicesProviderProperties `object`: Recovery services provider properties.
  * allowedScenarios `array`: The scenarios allowed on this provider.
    * items `string`
  * connectionStatus `string`: A value indicating whether DRA is responsive.
  * draIdentifier `string`: The DRA Id.
  * fabricFriendlyName `string`: The fabric friendly name.
  * fabricType `string`: Type of the site.
  * friendlyName `string`: Friendly name of the DRA.
  * healthErrorDetails `array`: The recovery services provider health error details.
    * items [HealthError](#healtherror)
  * identityDetails [IdentityInformation](#identityinformation)
  * lastHeartBeat `string`: Time when last heartbeat was sent by the DRA.
  * protectedItemCount `integer`: Number of protected VMs currently managed by the DRA.
  * providerVersion `string`: The provider version.
  * providerVersionDetails [VersionDetails](#versiondetails)
  * providerVersionExpiryDate `string`: Expiry date of the version.
  * providerVersionState `string`: DRA version status.
  * serverVersion `string`: The fabric provider.

### RemoveProtectionContainerMappingInput
* RemoveProtectionContainerMappingInput `object`: Container unpairing input.
  * properties [RemoveProtectionContainerMappingInputProperties](#removeprotectioncontainermappinginputproperties)

### RemoveProtectionContainerMappingInputProperties
* RemoveProtectionContainerMappingInputProperties `object`: Unpairing input properties.
  * providerSpecificInput [ReplicationProviderContainerUnmappingInput](#replicationprovidercontainerunmappinginput)

### RenewCertificateInput
* RenewCertificateInput `object`: Certificate renewal input.
  * properties [RenewCertificateInputProperties](#renewcertificateinputproperties)

### RenewCertificateInputProperties
* RenewCertificateInputProperties `object`: Renew Certificate input properties.
  * renewCertificateType `string`: Renew certificate type.

### ReplicationGroupDetails
* ReplicationGroupDetails `object`: Replication group details. This will be used in case of San and Wvr.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### ReplicationProtectedItem
* ReplicationProtectedItem `object`: Replication protected item.
  * properties [ReplicationProtectedItemProperties](#replicationprotecteditemproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### ReplicationProtectedItemCollection
* ReplicationProtectedItemCollection `object`: Replication protected item collection.
  * nextLink `string`: The value of next link.
  * value `array`: The Replication protected item details.
    * items [ReplicationProtectedItem](#replicationprotecteditem)

### ReplicationProtectedItemProperties
* ReplicationProtectedItemProperties `object`: Replication protected item custom data details.
  * activeLocation `string`: The Current active location of the PE.
  * allowedOperations `array`: The allowed operations on the Replication protected item.
    * items `string`
  * currentScenario [CurrentScenarioDetails](#currentscenariodetails)
  * failoverHealth `string`: The consolidated failover health for the VM.
  * failoverRecoveryPointId `string`: The recovery point ARM Id to which the Vm was failed over.
  * friendlyName `string`: The name.
  * healthErrors `array`: List of health errors.
    * items [HealthError](#healtherror)
  * lastSuccessfulFailoverTime `string`: The Last successful failover time.
  * lastSuccessfulTestFailoverTime `string`: The Last successful test failover time.
  * policyFriendlyName `string`: The name of Policy governing this PE.
  * policyId `string`: The ID of Policy governing this PE.
  * primaryFabricFriendlyName `string`: The friendly name of the primary fabric.
  * primaryFabricProvider `string`: The fabric provider of the primary fabric.
  * primaryProtectionContainerFriendlyName `string`: The name of primary protection container friendly name.
  * protectableItemId `string`: The protected item ARM Id.
  * protectedItemType `string`: The type of protected item type.
  * protectionState `string`: The protection status.
  * protectionStateDescription `string`: The protection state description.
  * providerSpecificDetails [ReplicationProviderSpecificSettings](#replicationproviderspecificsettings)
  * recoveryContainerId `string`: The recovery container Id.
  * recoveryFabricFriendlyName `string`: The friendly name of recovery fabric.
  * recoveryFabricId `string`: The Arm Id of recovery fabric.
  * recoveryProtectionContainerFriendlyName `string`: The name of recovery container friendly name.
  * recoveryServicesProviderId `string`: The recovery provider ARM Id.
  * replicationHealth `string`: The consolidated protection health for the VM taking any issues with SRS as well as all the replication units associated with the VM's replication group into account. This is a string representation of the ProtectionHealth enumeration.
  * testFailoverState `string`: The Test failover state.
  * testFailoverStateDescription `string`: The Test failover state description.

### ReplicationProviderContainerUnmappingInput
* ReplicationProviderContainerUnmappingInput `object`: Provider specific input for unpairing operations.
  * instanceType `string`: The class type.

### ReplicationProviderSpecificContainerCreationInput
* ReplicationProviderSpecificContainerCreationInput `object`: Provider specific input for container creation operation.
  * instanceType `string`: The class type.

### ReplicationProviderSpecificContainerMappingInput
* ReplicationProviderSpecificContainerMappingInput `object`: Provider specific input for pairing operations.
  * instanceType `string`: The class type.

### ReplicationProviderSpecificSettings
* ReplicationProviderSpecificSettings `object`: Replication provider specific settings.
  * instanceType `string`: Gets the Instance type.

### ReplicationProviderSpecificUpdateContainerMappingInput
* ReplicationProviderSpecificUpdateContainerMappingInput `object`: Provider specific input for update pairing operations.
  * instanceType `string`: The class type.

### Resource
* Resource `object`: Azure resource.
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### ResourceHealthSummary
* ResourceHealthSummary `object`: Base class to define the health summary of the resources contained under an Arm resource.
  * issues `array`: The list of summary of health errors across the resources under the container.
    * items [HealthErrorSummary](#healtherrorsummary)
  * resourceCount `integer`: The count of total resources umder the container.

### ResumeJobParams
* ResumeJobParams `object`: Resume job params.
  * properties [ResumeJobParamsProperties](#resumejobparamsproperties)

### ResumeJobParamsProperties
* ResumeJobParamsProperties `object`: Resume job properties.
  * comments `string`: Resume job comments.

### RetentionVolume
* RetentionVolume `object`: The retention details of the MT.
  * capacityInBytes `integer`: The volume capacity.
  * freeSpaceInBytes `integer`: The free space available in this volume.
  * thresholdPercentage `integer`: The threshold percentage.
  * volumeName `string`: The volume name.

### ReverseReplicationInput
* ReverseReplicationInput `object`: Reverse replication input.
  * properties [ReverseReplicationInputProperties](#reversereplicationinputproperties)

### ReverseReplicationInputProperties
* ReverseReplicationInputProperties `object`: Reverse replication input properties.
  * failoverDirection `string`: Failover direction.
  * providerSpecificDetails [ReverseReplicationProviderSpecificInput](#reversereplicationproviderspecificinput)

### ReverseReplicationProviderSpecificInput
* ReverseReplicationProviderSpecificInput `object`: Provider specific reverse replication input.
  * instanceType `string`: The class type.

### RoleAssignment
* RoleAssignment `object`: Azure role assignment details.
  * id `string`: The ARM Id of the role assignment.
  * name `string`: The name of the role assignment.
  * principalId `string`: Principal Id.
  * roleDefinitionId `string`: Role definition id.
  * scope `string`: Role assignment scope.

### RunAsAccount
* RunAsAccount `object`: CS Accounts Details.
  * accountId `string`: The CS RunAs account Id.
  * accountName `string`: The CS RunAs account name.

### SanEnableProtectionInput
* SanEnableProtectionInput `object`: San enable protection provider specific input.
  * instanceType `string`: The class type.

### ScriptActionTaskDetails
* ScriptActionTaskDetails `object`: This class represents the script action task details.
  * isPrimarySideScript `boolean`: A value indicating whether it is a primary side script or not.
  * name `string`: The name.
  * output `string`: The output.
  * path `string`: The path.
  * instanceType `string`: The type of task details.

### ServiceError
* ServiceError `object`: ASR error model
  * activityId `string`: Activity Id.
  * code `string`: Error code.
  * message `string`: Error message.
  * possibleCauses `string`: Possible causes of error.
  * recommendedAction `string`: Recommended action to resolve error.

### StorageClassification
* StorageClassification `object`: Storage object definition.
  * properties [StorageClassificationProperties](#storageclassificationproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### StorageClassificationCollection
* StorageClassificationCollection `object`: Collection of storage details.
  * nextLink `string`: The value of next link.
  * value `array`: The storage details.
    * items [StorageClassification](#storageclassification)

### StorageClassificationMapping
* StorageClassificationMapping `object`: Storage mapping object.
  * properties [StorageClassificationMappingProperties](#storageclassificationmappingproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### StorageClassificationMappingCollection
* StorageClassificationMappingCollection `object`: Collection of storage mapping details.
  * nextLink `string`: The value of next link.
  * value `array`: The storage details.
    * items [StorageClassificationMapping](#storageclassificationmapping)

### StorageClassificationMappingInput
* StorageClassificationMappingInput `object`: Storage mapping input.
  * properties [StorageMappingInputProperties](#storagemappinginputproperties)

### StorageClassificationMappingProperties
* StorageClassificationMappingProperties `object`: Storage mapping properties.
  * targetStorageClassificationId `string`: Target storage object Id.

### StorageClassificationProperties
* StorageClassificationProperties `object`: Storage object properties.
  * friendlyName `string`: Friendly name of the Storage classification.

### StorageMappingInputProperties
* StorageMappingInputProperties `object`: Storage mapping input properties.
  * targetStorageClassificationId `string`: The ID of the storage object.

### Subnet
* Subnet `object`: Subnets of the network.
  * addressList `array`: The list of addresses for the subnet.
    * items `string`
  * friendlyName `string`: The subnet friendly name.
  * name `string`: The subnet name.

### SwitchProtectionInput
* SwitchProtectionInput `object`: Switch protection input.
  * properties [SwitchProtectionInputProperties](#switchprotectioninputproperties)

### SwitchProtectionInputProperties
* SwitchProtectionInputProperties `object`: Switch protection input properties.
  * providerSpecificDetails [SwitchProtectionProviderSpecificInput](#switchprotectionproviderspecificinput)
  * replicationProtectedItemName `string`: The unique replication protected item name.

### SwitchProtectionJobDetails
* SwitchProtectionJobDetails `object`: This class represents details for switch protection job.
  * newReplicationProtectedItemId `string`: ARM Id of the new replication protected item.
  * affectedObjectDetails `object`: The affected object properties like source server, source cloud, target server, target cloud etc. based on the workflow object details.
  * instanceType `string`: Gets the type of job details (see JobDetailsTypes enum for possible values).

### SwitchProtectionProviderSpecificInput
* SwitchProtectionProviderSpecificInput `object`: Provider specific switch protection input.
  * instanceType `string`: Gets the Instance type.

### TargetComputeSize
* TargetComputeSize `object`: Represents applicable recovery vm sizes.
  * id `string`: The Id.
  * name `string`: The name.
  * properties [TargetComputeSizeProperties](#targetcomputesizeproperties)
  * type `string`: The Type of the object.

### TargetComputeSizeCollection
* TargetComputeSizeCollection `object`: Target compute size collection.
  * nextLink `string`: The value of next link.
  * value `array`: The list of target compute sizes.
    * items [TargetComputeSize](#targetcomputesize)

### TargetComputeSizeProperties
* TargetComputeSizeProperties `object`: Represents applicable recovery vm sizes properties.
  * cpuCoresCount `integer`: The maximum cpu cores count supported by target compute size.
  * errors `array`: The reasons why the target compute size is not applicable for the protected item.
    * items [ComputeSizeErrorDetails](#computesizeerrordetails)
  * friendlyName `string`: Target compute size display name.
  * highIopsSupported `string`: The value indicating whether the target compute size supports high Iops.
  * maxDataDiskCount `integer`: The maximum data disks count supported by target compute size.
  * maxNicsCount `integer`: The maximum Nics count supported by target compute size.
  * memoryInGB `number`: The maximum memory in GB supported by target compute size.
  * name `string`: Target compute size name.

### TaskTypeDetails
* TaskTypeDetails `object`: Task details based on specific task type.
  * instanceType `string`: The type of task details.

### TestFailoverCleanupInput
* TestFailoverCleanupInput `object`: Input definition for test failover cleanup.
  * properties **required** [TestFailoverCleanupInputProperties](#testfailovercleanupinputproperties)

### TestFailoverCleanupInputProperties
* TestFailoverCleanupInputProperties `object`: Input definition for test failover cleanup input properties.
  * comments `string`: Test failover cleanup comments.

### TestFailoverInput
* TestFailoverInput `object`: Input definition for planned failover.
  * properties [TestFailoverInputProperties](#testfailoverinputproperties)

### TestFailoverInputProperties
* TestFailoverInputProperties `object`: Input definition for planned failover input properties.
  * failoverDirection `string`: Failover direction.
  * networkId `string`: The id of the network to be used for test failover
  * networkType `string`: Network type to be used for test failover.
  * providerSpecificDetails [ProviderSpecificFailoverInput](#providerspecificfailoverinput)
  * skipTestFailoverCleanup `string`: A value indicating whether the test failover cleanup is to be skipped.

### TestFailoverJobDetails
* TestFailoverJobDetails `object`: This class represents the details for a test failover job.
  * comments `string`: The test failover comments.
  * networkFriendlyName `string`: The test network friendly name.
  * networkName `string`: The test network name.
  * networkType `string`: The test network type (see TestFailoverInput enum for possible values).
  * protectedItemDetails `array`: The test VM details.
    * items [FailoverReplicationProtectedItemDetails](#failoverreplicationprotecteditemdetails)
  * testFailoverStatus `string`: The test failover status.
  * affectedObjectDetails `object`: The affected object properties like source server, source cloud, target server, target cloud etc. based on the workflow object details.
  * instanceType `string`: Gets the type of job details (see JobDetailsTypes enum for possible values).

### UnplannedFailoverInput
* UnplannedFailoverInput `object`: Input definition for planned failover.
  * properties [UnplannedFailoverInputProperties](#unplannedfailoverinputproperties)

### UnplannedFailoverInputProperties
* UnplannedFailoverInputProperties `object`: Input definition for planned failover input properties.
  * failoverDirection `string`: Failover direction.
  * providerSpecificDetails [ProviderSpecificFailoverInput](#providerspecificfailoverinput)
  * sourceSiteOperations `string`: Source site operations status

### UpdateMobilityServiceRequest
* UpdateMobilityServiceRequest `object`: Request to update the mobility service on a protected item.
  * properties [UpdateMobilityServiceRequestProperties](#updatemobilityservicerequestproperties)

### UpdateMobilityServiceRequestProperties
* UpdateMobilityServiceRequestProperties `object`: The properties of an update mobility service request.
  * runAsAccountId `string`: The CS run as account Id.

### UpdateNetworkMappingInput
* UpdateNetworkMappingInput `object`: Update network mapping input.
  * properties [UpdateNetworkMappingInputProperties](#updatenetworkmappinginputproperties)

### UpdateNetworkMappingInputProperties
* UpdateNetworkMappingInputProperties `object`: Common input details for network mapping operation.
  * fabricSpecificDetails [FabricSpecificUpdateNetworkMappingInput](#fabricspecificupdatenetworkmappinginput)
  * recoveryFabricName `string`: Recovery fabric name.
  * recoveryNetworkId `string`: Recovery network Id.

### UpdatePolicyInput
* UpdatePolicyInput `object`: Update policy input.
  * properties [UpdatePolicyInputProperties](#updatepolicyinputproperties)

### UpdatePolicyInputProperties
* UpdatePolicyInputProperties `object`: Policy update properties.
  * replicationProviderSettings [PolicyProviderSpecificInput](#policyproviderspecificinput)

### UpdateProtectionContainerMappingInput
* UpdateProtectionContainerMappingInput `object`: Container pairing update input.
  * properties [UpdateProtectionContainerMappingInputProperties](#updateprotectioncontainermappinginputproperties)

### UpdateProtectionContainerMappingInputProperties
* UpdateProtectionContainerMappingInputProperties `object`: Container pairing update input.
  * providerSpecificInput [ReplicationProviderSpecificUpdateContainerMappingInput](#replicationproviderspecificupdatecontainermappinginput)

### UpdateRecoveryPlanInput
* UpdateRecoveryPlanInput `object`: Update recovery plan input class.
  * properties [UpdateRecoveryPlanInputProperties](#updaterecoveryplaninputproperties)

### UpdateRecoveryPlanInputProperties
* UpdateRecoveryPlanInputProperties `object`: Recovery plan updation properties.
  * groups `array`: The recovery plan groups.
    * items [RecoveryPlanGroup](#recoveryplangroup)

### UpdateReplicationProtectedItemInput
* UpdateReplicationProtectedItemInput `object`: Update replication protected item input.
  * properties [UpdateReplicationProtectedItemInputProperties](#updatereplicationprotectediteminputproperties)

### UpdateReplicationProtectedItemInputProperties
* UpdateReplicationProtectedItemInputProperties `object`: Update protected item input properties.
  * enableRdpOnTargetOption `string`: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
  * licenseType `string` (values: NotSpecified, NoLicenseType, WindowsServer): License type.
  * providerSpecificDetails [UpdateReplicationProtectedItemProviderInput](#updatereplicationprotecteditemproviderinput)
  * recoveryAvailabilitySetId `string`: The target availability set id.
  * recoveryAzureVMName `string`: Target azure VM name given by the user.
  * recoveryAzureVMSize `string`: Target Azure Vm size.
  * selectedRecoveryAzureNetworkId `string`: Target Azure Network Id.
  * selectedSourceNicId `string`: The selected source nic Id which will be used as the primary nic during failover.
  * vmNics `array`: The list of vm nic details.
    * items [VMNicInputDetails](#vmnicinputdetails)

### UpdateReplicationProtectedItemProviderInput
* UpdateReplicationProtectedItemProviderInput `object`: Update replication protected item provider specific input.
  * instanceType `string`: The class type.

### UpdateVCenterRequest
* UpdateVCenterRequest `object`: Input required to update vCenter.
  * properties [UpdateVCenterRequestProperties](#updatevcenterrequestproperties)

### UpdateVCenterRequestProperties
* UpdateVCenterRequestProperties `object`: The properties of an update vCenter request.
  * friendlyName `string`: The friendly name of the vCenter.
  * ipAddress `string`: The IP address of the vCenter to be discovered.
  * port `string`: The port number for discovery.
  * processServerId `string`: The process server Id from where the update can be orchestrated.
  * runAsAccountId `string`: The CS account Id which has priviliges to update the vCenter.

### VCenter
* VCenter `object`: vCenter definition.
  * properties [VCenterProperties](#vcenterproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### VCenterCollection
* VCenterCollection `object`: Collection of vCenter details.
  * nextLink `string`: The value of next link.
  * value `array`: The vCenter details.
    * items [VCenter](#vcenter)

### VCenterProperties
* VCenterProperties `object`: vCenter properties.
  * discoveryStatus `string`: The VCenter discovery status.
  * fabricArmResourceName `string`: The ARM resource name of the fabric containing this VCenter.
  * friendlyName `string`: Friendly name of the vCenter.
  * healthErrors `array`: The health errors for this VCenter.
    * items [HealthError](#healtherror)
  * infrastructureId `string`: The infrastructure Id of vCenter.
  * internalId `string`: VCenter internal ID.
  * ipAddress `string`: The IP address of the vCenter.
  * lastHeartbeat `string`: The time when the last heartbeat was reveived by vCenter.
  * port `string`: The port number for discovery.
  * processServerId `string`: The process server Id.
  * runAsAccountId `string`: The account Id which has privileges to discover the vCenter.

### VMNicDetails
* VMNicDetails `object`: Hyper V VM network details.
  * ipAddressType `string`: Ip address type.
  * nicId `string`: The nic Id.
  * primaryNicStaticIPAddress `string`: Primary nic static IP address.
  * recoveryNicIpAddressType `string`: IP allocation type for recovery VM.
  * recoveryVMNetworkId `string`: Recovery VM network Id.
  * recoveryVMSubnetName `string`: Recovery VM subnet name.
  * replicaNicId `string`: The replica nic Id.
  * replicaNicStaticIPAddress `string`: Replica nic static IP address.
  * selectionType `string`: Selection type for failover.
  * sourceNicArmId `string`: The source nic ARM Id.
  * vMNetworkName `string`: VM network name.
  * vMSubnetName `string`: VM subnet name.

### VMNicInputDetails
* VMNicInputDetails `object`: Hyper V VM network input details.
  * nicId `string`: The nic Id.
  * recoveryVMSubnetName `string`: Recovery VM subnet name.
  * replicaNicStaticIPAddress `string`: Replica nic static IP address.
  * selectionType `string`: Selection type for failover.

### VMwareCbtPolicyCreationInput
* VMwareCbtPolicyCreationInput `object`: VMware Cbt Policy creation input.
  * appConsistentFrequencyInMinutes `integer`: The app consistent snapshot frequency (in minutes).
  * crashConsistentFrequencyInMinutes `integer`: The crash consistent snapshot frequency (in minutes).
  * recoveryPointHistory `integer`: The duration in minutes until which the recovery points need to be stored.
  * instanceType `string`: The class type.

### VMwareDetails
* VMwareDetails `object`: Store the fabric details specific to the VMware fabric.
  * agentCount `string`: The number of source and target servers configured to talk to this CS.
  * agentExpiryDate `string`: Agent expiry date.
  * agentVersion `string`: The agent Version.
  * agentVersionDetails [VersionDetails](#versiondetails)
  * availableMemoryInBytes `integer`: The available memory.
  * availableSpaceInBytes `integer`: The available space.
  * cpuLoad `string`: The percentage of the CPU load.
  * cpuLoadStatus `string`: The CPU load status.
  * csServiceStatus `string`: The CS service status.
  * databaseServerLoad `string`: The database server load.
  * databaseServerLoadStatus `string`: The database server load status.
  * hostName `string`: The host name.
  * ipAddress `string`: The IP address.
  * lastHeartbeat `string`: The last heartbeat received from CS server.
  * masterTargetServers `array`: The list of Master Target servers associated with the fabric.
    * items [MasterTargetServer](#mastertargetserver)
  * memoryUsageStatus `string`: The memory usage status.
  * processServerCount `string`: The number of process servers.
  * processServers `array`: The list of Process Servers associated with the fabric.
    * items [ProcessServer](#processserver)
  * protectedServers `string`: The number of protected servers.
  * psTemplateVersion `string`: PS template version.
  * replicationPairCount `string`: The number of replication pairs configured in this CS.
  * runAsAccounts `array`: The list of run as accounts created on the server.
    * items [RunAsAccount](#runasaccount)
  * spaceUsageStatus `string`: The space usage status.
  * sslCertExpiryDate `string`: CS SSL cert expiry date.
  * sslCertExpiryRemainingDays `integer`: CS SSL cert expiry date.
  * systemLoad `string`: The percentage of the system load.
  * systemLoadStatus `string`: The system load status.
  * totalMemoryInBytes `integer`: The total memory.
  * totalSpaceInBytes `integer`: The total space.
  * versionStatus `string`: Version status
  * webLoad `string`: The web load.
  * webLoadStatus `string`: The web load status.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### VMwareV2FabricCreationInput
* VMwareV2FabricCreationInput `object`: Fabric provider specific settings.
  * keyVaultResourceArmId `string`: The Key Vault ARM Id.
  * keyVaultUrl `string`: The Key Vault URL.
  * instanceType `string`: Gets the class type.

### VMwareV2FabricSpecificDetails
* VMwareV2FabricSpecificDetails `object`: VMwareV2 fabric Specific Details.
  * keyVaultResourceArmId `string`: The Key Vault ARM Id.
  * keyVaultUrl `string`: The Key Vault URL.
  * rcmServiceEndpoint `string`: The endpoint for making requests to the RCM Service.
  * srsServiceEndpoint `string`: The endpoint for making requests to the SRS Service.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### VMwareVirtualMachineDetails
* VMwareVirtualMachineDetails `object`: VMware provider specific settings
  * agentGeneratedId `string`: The ID generated by the InMage agent after it gets installed on guest. This is the ID to be used during InMage CreateProtection.
  * agentInstalled `string`: The value indicating if InMage scout agent is installed on guest.
  * agentVersion `string`: The agent version.
  * discoveryType `string`: A value inidicating the discovery type of the machine. Value can be vCenter or physical.
  * diskDetails `array`: The disk details.
    * items [InMageDiskDetails](#inmagediskdetails)
  * ipAddress `string`: The IP address.
  * osType `string`: The OsType installed on VM.
  * poweredOn `string`: The value indicating whether VM is powered on.
  * vCenterInfrastructureId `string`: The VCenter infrastructure Id.
  * validationErrors `array`: The validation errors.
    * items [HealthError](#healtherror)
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### VaultHealthDetails
* VaultHealthDetails `object`: Vault health details definition.
  * properties [VaultHealthProperties](#vaulthealthproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * type `string`: Resource Type

### VaultHealthProperties
* VaultHealthProperties `object`: class to define the health summary of the Vault.
  * containersHealth [ResourceHealthSummary](#resourcehealthsummary)
  * fabricsHealth [ResourceHealthSummary](#resourcehealthsummary)
  * protectedItemsHealth [ResourceHealthSummary](#resourcehealthsummary)
  * vaultErrors `array`: The list of errors on the vault.
    * items [HealthError](#healtherror)

### VersionDetails
* VersionDetails `object`: Version related details.
  * expiryDate `string`: Version expiry date.
  * status `string` (values: Supported, NotSupported, Deprecated, UpdateRequired, SecurityUpdateRequired): A value indicating whether security update required.
  * version `string`: The agent version.

### VirtualMachineTaskDetails
* VirtualMachineTaskDetails `object`: This class represents the virtual machine task details.
  * jobTask [JobEntity](#jobentity)
  * skippedReason `string`: The skipped reason.
  * skippedReasonString `string`: The skipped reason string.
  * instanceType `string`: The type of task details.

### VmNicUpdatesTaskDetails
* VmNicUpdatesTaskDetails `object`: This class represents the vm NicUpdates task details.
  * name `string`: Name of the Nic.
  * nicId `string`: Nic Id.
  * vmId `string`: Virtual machine Id.
  * instanceType `string`: The type of task details.

### VmmDetails
* VmmDetails `object`: VMM fabric specific details.
  * instanceType `string`: Gets the class type. Overridden in derived classes.

### VmmToAzureCreateNetworkMappingInput
* VmmToAzureCreateNetworkMappingInput `object`: Create network mappings input properties/behaviour specific to Vmm to Azure Network mapping.
  * instanceType `string`: The instance type.

### VmmToAzureNetworkMappingSettings
* VmmToAzureNetworkMappingSettings `object`: E2A Network Mapping fabric specific settings.
  * instanceType `string`: Gets the Instance type.

### VmmToAzureUpdateNetworkMappingInput
* VmmToAzureUpdateNetworkMappingInput `object`: Update network mappings input properties/behaviour specific to vmm to azure.
  * instanceType `string`: The instance type.

### VmmToVmmCreateNetworkMappingInput
* VmmToVmmCreateNetworkMappingInput `object`: Create network mappings input properties/behaviour specific to vmm to vmm Network mapping.
  * instanceType `string`: The instance type.

### VmmToVmmNetworkMappingSettings
* VmmToVmmNetworkMappingSettings `object`: E2E Network Mapping fabric specific settings.
  * instanceType `string`: Gets the Instance type.

### VmmToVmmUpdateNetworkMappingInput
* VmmToVmmUpdateNetworkMappingInput `object`: Update network mappings input properties/behaviour specific to vmm to vmm.
  * instanceType `string`: The instance type.

### VmmVirtualMachineDetails
* VmmVirtualMachineDetails `object`: VMM fabric provider specific VM settings.
  * diskDetails `array`: The Last successful failover time.
    * items [DiskDetails](#diskdetails)
  * generation `string`: The id of the object in fabric.
  * hasFibreChannelAdapter `string` (values: Unknown, Present, NotPresent): A value indicating whether the VM has a fibre channel adapter attached. String value of {SrsDataContract.PresenceStatus} enum.
  * hasPhysicalDisk `string` (values: Unknown, Present, NotPresent): A value indicating whether the VM has a physical disk attached. String value of {SrsDataContract.PresenceStatus} enum.
  * hasSharedVhd `string` (values: Unknown, Present, NotPresent): A value indicating whether the VM has a shared VHD attached. String value of {SrsDataContract.PresenceStatus} enum.
  * osDetails [OSDetails](#osdetails)
  * sourceItemId `string`: The source id of the object.
  * instanceType `string`: Gets the class type. Overriden in derived classes.

### VmwareCbtPolicyDetails
* VmwareCbtPolicyDetails `object`: VMware Cbt specific policy details.
  * appConsistentFrequencyInMinutes `integer`: The app consistent snapshot frequency in minutes.
  * crashConsistentFrequencyInMinutes `integer`: The crash consistent snapshot frequency in minutes.
  * recoveryPointHistory `integer`: The duration in minutes until which the recovery points need to be stored.
  * recoveryPointThresholdInMinutes `integer`: The recovery point threshold in minutes.
  * instanceType `string`: Gets the class type. Overridden in derived classes.


