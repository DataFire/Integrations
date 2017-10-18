# @datafire/azure_arm_recoveryservicessiterecovery

Client library for SiteRecoveryManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_recoveryservicessiterecovery
```

```js
let datafire = require('datafire');
let azure_arm_recoveryservicessiterecovery = require('@datafire/azure_arm_recoveryservicessiterecovery').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_recoveryservicessiterecovery.Operations_List({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### Operations_List
Operation to return the list of available operations.


```js
azure_arm_recoveryservicessiterecovery.Operations_List({
  "api-version": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.

### ReplicationAlertSettings_List
Gets the list of email notification(alert) configurations for the vault. .


```js
azure_arm_recoveryservicessiterecovery.ReplicationAlertSettings_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.

### ReplicationAlertSettings_Get
Gets the details of the specified email notification(alert) configuration.


```js
azure_arm_recoveryservicessiterecovery.ReplicationAlertSettings_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "alertSettingName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* alertSettingName (string) **required** - The name of the email notification configuration.

### ReplicationAlertSettings_Create
Create or update an email notification(alert) configuration.


```js
azure_arm_recoveryservicessiterecovery.ReplicationAlertSettings_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "alertSettingName": "",
  "request": {}
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* alertSettingName (string) **required** - The name of the email notification(alert) configuration.
* request (object) **required** - Request to configure alerts for the system.

### ReplicationEvents_List
Gets the list of Azure Site Recovery events for the vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationEvents_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.

### ReplicationEvents_Get
The operation to get the details of an Azure Site recovery event.


```js
azure_arm_recoveryservicessiterecovery.ReplicationEvents_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "eventName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* eventName (string) **required** - The name of the Azure Site Recovery event.

### ReplicationFabrics_List
Gets a list of the Azure Site Recovery fabrics in the vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationFabrics_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.

### ReplicationFabrics_Purge
The operation to purge(force delete) an Azure Site Recovery fabric.


```js
azure_arm_recoveryservicessiterecovery.ReplicationFabrics_Purge({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - ASR fabric to purge.

### ReplicationFabrics_Get
Gets the details of an Azure Site Recovery fabric.


```js
azure_arm_recoveryservicessiterecovery.ReplicationFabrics_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.

### ReplicationFabrics_Create
The operation to create an Azure Site Recovery fabric (for e.g. Hyper-V site)


```js
azure_arm_recoveryservicessiterecovery.ReplicationFabrics_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "input": {}
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Name of the ASR fabric.
* input (object) **required** - Site details provided during the time of site creation

### ReplicationFabrics_CheckConsistency
The operation to perform a consistency check on the fabric.


```js
azure_arm_recoveryservicessiterecovery.ReplicationFabrics_CheckConsistency({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.

### ReplicationFabrics_MigrateToAad
The operation to migrate an Azure Site Recovery fabric to AAD.


```js
azure_arm_recoveryservicessiterecovery.ReplicationFabrics_MigrateToAad({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - ASR fabric to migrate.

### ReplicationFabrics_ReassociateGateway
The operation to move replications from a process server to another process server.


```js
azure_arm_recoveryservicessiterecovery.ReplicationFabrics_ReassociateGateway({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "failoverProcessServerRequest": {}
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - The name of the fabric containing the process server.
* failoverProcessServerRequest (object) **required** - Request to failover a process server.

### ReplicationFabrics_Delete
The operation to delete or remove an Azure Site Recovery fabric.


```js
azure_arm_recoveryservicessiterecovery.ReplicationFabrics_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - ASR fabric to delete

### ReplicationFabrics_RenewCertificate
Renews the connection certificate for the ASR replication fabric.


```js
azure_arm_recoveryservicessiterecovery.ReplicationFabrics_RenewCertificate({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "renewCertificate": {}
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - fabric name to renew certs for.
* renewCertificate (object) **required** - Certificate renewal input.

### ReplicationLogicalNetworks_ListByReplicationFabrics
Lists all the logical networks of the Azure Site Recovery fabric


```js
azure_arm_recoveryservicessiterecovery.ReplicationLogicalNetworks_ListByReplicationFabrics({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Server Id.

### ReplicationLogicalNetworks_Get
Gets the details of a logical network.


```js
azure_arm_recoveryservicessiterecovery.ReplicationLogicalNetworks_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "logicalNetworkName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Server Id.
* logicalNetworkName (string) **required** - Logical network name.

### ReplicationNetworks_ListByReplicationFabrics
Lists the networks available for a fabric.


```js
azure_arm_recoveryservicessiterecovery.ReplicationNetworks_ListByReplicationFabrics({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name

### ReplicationNetworks_Get
Gets the details of a network.


```js
azure_arm_recoveryservicessiterecovery.ReplicationNetworks_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "networkName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Server Id.
* networkName (string) **required** - Primary network name.

### ReplicationNetworkMappings_ListByReplicationNetworks
Lists all ASR network mappings for the specified network.


```js
azure_arm_recoveryservicessiterecovery.ReplicationNetworkMappings_ListByReplicationNetworks({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "networkName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Primary fabric name.
* networkName (string) **required** - Primary network name.

### ReplicationNetworkMappings_Delete
The operation to delete a network mapping.


```js
azure_arm_recoveryservicessiterecovery.ReplicationNetworkMappings_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "networkName": "",
  "networkMappingName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Primary fabric name.
* networkName (string) **required** - Primary network name.
* networkMappingName (string) **required** - ARM Resource Name for network mapping.

### ReplicationNetworkMappings_Get
Gets the details of an ASR network mapping


```js
azure_arm_recoveryservicessiterecovery.ReplicationNetworkMappings_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "networkName": "",
  "networkMappingName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Primary fabric name.
* networkName (string) **required** - Primary network name.
* networkMappingName (string) **required** - Network mapping name.

### ReplicationNetworkMappings_Update
The operation to update an ASR network mapping.


```js
azure_arm_recoveryservicessiterecovery.ReplicationNetworkMappings_Update({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Primary fabric name.
* networkName (string) **required** - Primary network name.
* networkMappingName (string) **required** - Network mapping name.
* input (object) **required** - Update network mapping input.

### ReplicationNetworkMappings_Create
The operation to create an ASR network mapping.


```js
azure_arm_recoveryservicessiterecovery.ReplicationNetworkMappings_Create({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Primary fabric name.
* networkName (string) **required** - Primary network name.
* networkMappingName (string) **required** - Network mapping name.
* input (object) **required** - Create network mappings input.

### ReplicationProtectionContainers_ListByReplicationFabrics
Lists the protection containers in the specified fabric.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectionContainers_ListByReplicationFabrics({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.

### ReplicationProtectionContainers_Get
Gets the details of a protection container.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectionContainers_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* protectionContainerName (string) **required** - Protection container name.

### ReplicationProtectionContainers_Create
Operation to create a protection container.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectionContainers_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "creationInput": {}
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Unique fabric ARM name.
* protectionContainerName (string) **required** - Unique protection container ARM name.
* creationInput (object) **required** - Create protection container input.

### ReplicationProtectionContainers_DiscoverProtectableItem
The operation to a add a protectable item to a protection container(Add physical server.)


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectionContainers_DiscoverProtectableItem({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "discoverProtectableItemRequest": {}
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - The name of the fabric.
* protectionContainerName (string) **required** - The name of the protection container.
* discoverProtectableItemRequest (object) **required** - Request to add a physical machine as a protectable item in a container.

### ReplicationProtectionContainers_Delete
Operation to remove a protection container.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectionContainers_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Unique fabric ARM name.
* protectionContainerName (string) **required** - Unique protection container ARM name.

### ReplicationProtectableItems_ListByReplicationProtectionContainers
Lists the protectable items in a protection container.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectableItems_ListByReplicationProtectionContainers({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* protectionContainerName (string) **required** - Protection container name.

### ReplicationProtectableItems_Get
The operation to get the details of a protectable item.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectableItems_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "protectableItemName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* protectionContainerName (string) **required** - Protection container name.
* protectableItemName (string) **required** - Protectable item name.

### ReplicationProtectedItems_ListByReplicationProtectionContainers
Gets the list of ASR replication protected items in the protection container.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_ListByReplicationProtectionContainers({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* protectionContainerName (string) **required** - Protection container name.

### ReplicationProtectedItems_Purge
The operation to delete or purge a replication protected item. This operation will force delete the replication protected item. Use the remove operation on replication protected item to perform a clean disable replication for the item.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_Purge({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* protectionContainerName (string) **required** - Protection container name.
* replicatedProtectedItemName (string) **required** - Replication protected item name.

### ReplicationProtectedItems_Get
Gets the details of an ASR replication protected item.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric unique name.
* protectionContainerName (string) **required** - Protection container name.
* replicatedProtectedItemName (string) **required** - Replication protected item name.

### ReplicationProtectedItems_Update
The operation to update the recovery settings of an ASR replication protected item.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_Update({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* protectionContainerName (string) **required** - Protection container name.
* replicatedProtectedItemName (string) **required** - Replication protected item name.
* updateProtectionInput (object) **required** - Update replication protected item input.

### ReplicationProtectedItems_Create
The operation to create an ASR replication protected item (Enable replication).


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_Create({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Name of the fabric.
* protectionContainerName (string) **required** - Protection container name.
* replicatedProtectedItemName (string) **required** - A name for the replication protected item.
* input (object) **required** - Enable protection input.

### ReplicationProtectedItems_ApplyRecoveryPoint
The operation to change the recovery point of a failed over replication protected item.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_ApplyRecoveryPoint({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - The ARM fabric name.
* protectionContainerName (string) **required** - The protection container name.
* replicatedProtectedItemName (string) **required** - The replicated protected item's name.
* applyRecoveryPointInput (object) **required** - Input to apply recovery point.

### ReplicationProtectedItems_FailoverCommit
Operation to commit the failover of the replication protected item.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_FailoverCommit({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Unique fabric name.
* protectionContainerName (string) **required** - Protection container name.
* replicatedProtectedItemName (string) **required** - Replication protected item name.

### ReplicationProtectedItems_PlannedFailover
Operation to initiate a planned failover of the replication protected item.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_PlannedFailover({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Unique fabric name.
* protectionContainerName (string) **required** - Protection container name.
* replicatedProtectedItemName (string) **required** - Replication protected item name.
* failoverInput (object) **required** - Input definition for planned failover.

### ReplicationProtectedItems_Reprotect
Operation to reprotect or reverse replicate a failed over replication protected item.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_Reprotect({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Unique fabric name.
* protectionContainerName (string) **required** - Protection container name.
* replicatedProtectedItemName (string) **required** - Replication protected item name.
* rrInput (object) **required** - Reverse replication input.

### RecoveryPoints_ListByReplicationProtectedItems
Lists the available recovery points for a replication protected item.


```js
azure_arm_recoveryservicessiterecovery.RecoveryPoints_ListByReplicationProtectedItems({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - The fabric name.
* protectionContainerName (string) **required** - The protection container name.
* replicatedProtectedItemName (string) **required** - The replication protected item's name.

### RecoveryPoints_Get
Get the details of specified recovery point.


```js
azure_arm_recoveryservicessiterecovery.RecoveryPoints_Get({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - The fabric name.
* protectionContainerName (string) **required** - The protection container name.
* replicatedProtectedItemName (string) **required** - The replication protected item's name.
* recoveryPointName (string) **required** - The recovery point name.

### ReplicationProtectedItems_Delete
The operation to disable replication on a replication protected item. This will also remove the item.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_Delete({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* protectionContainerName (string) **required** - Protection container name.
* replicatedProtectedItemName (string) **required** - Replication protected item name.
* disableProtectionInput (object) **required** - Disable protection input.

### ReplicationProtectedItems_RepairReplication
The operation to start resynchronize/repair replication for a replication protected item requiring resynchronization.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_RepairReplication({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "replicatedProtectedItemName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - The name of the fabric.
* protectionContainerName (string) **required** - The name of the container.
* replicatedProtectedItemName (string) **required** - The name of the replication protected item.

### ReplicationProtectedItems_TestFailover
Operation to perform a test failover of the replication protected item.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_TestFailover({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Unique fabric name.
* protectionContainerName (string) **required** - Protection container name.
* replicatedProtectedItemName (string) **required** - Replication protected item name.
* failoverInput (object) **required** - Input definition for planned failover.

### ReplicationProtectedItems_TestFailoverCleanup
Operation to clean up the test failover of a replication protected item.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_TestFailoverCleanup({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Unique fabric name.
* protectionContainerName (string) **required** - Protection container name.
* replicatedProtectedItemName (string) **required** - Replication protected item name.
* cleanupInput (object) **required** - Input definition for test failover cleanup.

### ReplicationProtectedItems_UnplannedFailover
Operation to initiate a failover of the replication protected item.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_UnplannedFailover({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Unique fabric name.
* protectionContainerName (string) **required** - Protection container name.
* replicatedProtectedItemName (string) **required** - Replication protected item name.
* failoverInput (object) **required** - Input definition for planned failover.

### ReplicationProtectedItems_UpdateMobilityService
The operation to update(push update) the installed mobility service software on a replication protected item to the latest available version.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_UpdateMobilityService({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - The name of the fabric containing the protected item.
* protectionContainerName (string) **required** - The name of the container containing the protected item.
* replicationProtectedItemName (string) **required** - The name of the protected item on which the agent is to be updated.
* updateMobilityServiceRequest (object) **required** - Request to update the mobility service on a protected item.

### ReplicationProtectionContainerMappings_ListByReplicationProtectionContainers
Lists the protection container mappings for a protection container.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectionContainerMappings_ListByReplicationProtectionContainers({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* protectionContainerName (string) **required** - Protection container name.

### ReplicationProtectionContainerMappings_Purge
The operation to purge(force delete) a protection container mapping


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectionContainerMappings_Purge({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "mappingName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* protectionContainerName (string) **required** - Protection container name.
* mappingName (string) **required** - Protection container mapping name.

### ReplicationProtectionContainerMappings_Get
Gets the details of a protection container mapping.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectionContainerMappings_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "mappingName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* protectionContainerName (string) **required** - Protection container name.
* mappingName (string) **required** - Protection Container mapping name.

### ReplicationProtectionContainerMappings_Create
The operation to create a protection container mapping.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectionContainerMappings_Create({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* protectionContainerName (string) **required** - Protection container name.
* mappingName (string) **required** - Protection container mapping name.
* creationInput (object) **required** - Configure pairing input.

### ReplicationProtectionContainerMappings_Delete
The operation to delete or remove a protection container mapping.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectionContainerMappings_Delete({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* protectionContainerName (string) **required** - Protection container name.
* mappingName (string) **required** - Protection container mapping name.
* removalInput (object) **required** - Container unpairing input.

### ReplicationProtectionContainers_SwitchProtection
Operation to switch protection from one container to another or one replication provider to another.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectionContainers_SwitchProtection({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "protectionContainerName": "",
  "switchInput": {}
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Unique fabric name.
* protectionContainerName (string) **required** - Protection container name.
* switchInput (object) **required** - Switch protection input.

### ReplicationRecoveryServicesProviders_ListByReplicationFabrics
Lists the registered recovery services providers for the specified fabric.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryServicesProviders_ListByReplicationFabrics({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name

### ReplicationRecoveryServicesProviders_Purge
The operation to purge(force delete) a recovery services provider from the vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryServicesProviders_Purge({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "providerName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* providerName (string) **required** - Recovery services provider name.

### ReplicationRecoveryServicesProviders_Get
Gets the details of registered recovery services provider.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryServicesProviders_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "providerName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* providerName (string) **required** - Recovery services provider name

### ReplicationRecoveryServicesProviders_RefreshProvider
The operation to refresh the information from the recovery services provider.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryServicesProviders_RefreshProvider({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "providerName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* providerName (string) **required** - Recovery services provider name.

### ReplicationRecoveryServicesProviders_Delete
The operation to removes/delete(unregister) a recovery services provider from the vault


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryServicesProviders_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "providerName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* providerName (string) **required** - Recovery services provider name.

### ReplicationStorageClassifications_ListByReplicationFabrics
Lists the storage classifications available in the specified fabric.


```js
azure_arm_recoveryservicessiterecovery.ReplicationStorageClassifications_ListByReplicationFabrics({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Site name of interest.

### ReplicationStorageClassifications_Get
Gets the details of the specified storage classification.


```js
azure_arm_recoveryservicessiterecovery.ReplicationStorageClassifications_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "storageClassificationName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* storageClassificationName (string) **required** - Storage classification name.

### ReplicationStorageClassificationMappings_ListByReplicationStorageClassifications
Lists the storage classification mappings for the fabric.


```js
azure_arm_recoveryservicessiterecovery.ReplicationStorageClassificationMappings_ListByReplicationStorageClassifications({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "storageClassificationName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* storageClassificationName (string) **required** - Storage classfication name.

### ReplicationStorageClassificationMappings_Delete
The operation to delete a storage classification mapping.


```js
azure_arm_recoveryservicessiterecovery.ReplicationStorageClassificationMappings_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "storageClassificationName": "",
  "storageClassificationMappingName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* storageClassificationName (string) **required** - Storage classification name.
* storageClassificationMappingName (string) **required** - Storage classification mapping name.

### ReplicationStorageClassificationMappings_Get
Gets the details of the specified storage classification mapping.


```js
azure_arm_recoveryservicessiterecovery.ReplicationStorageClassificationMappings_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "storageClassificationName": "",
  "storageClassificationMappingName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* storageClassificationName (string) **required** - Storage classification name.
* storageClassificationMappingName (string) **required** - Storage classification mapping name.

### ReplicationStorageClassificationMappings_Create
The operation to create a storage classification mapping.


```js
azure_arm_recoveryservicessiterecovery.ReplicationStorageClassificationMappings_Create({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* storageClassificationName (string) **required** - Storage classification name.
* storageClassificationMappingName (string) **required** - Storage classification mapping name.
* pairingInput (object) **required** - Storage mapping input.

### ReplicationvCenters_ListByReplicationFabrics
Lists the vCenter servers registered in a fabric.


```js
azure_arm_recoveryservicessiterecovery.ReplicationvCenters_ListByReplicationFabrics({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.

### ReplicationvCenters_Delete
The operation to remove(unregister) a registered vCenter server from the vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationvCenters_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "vCenterName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* vCenterName (string) **required** - vCenter name.

### ReplicationvCenters_Get
Gets the details of a registered vCenter server(Add vCenter server.)


```js
azure_arm_recoveryservicessiterecovery.ReplicationvCenters_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "vCenterName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* vCenterName (string) **required** - vCenter name.

### ReplicationvCenters_Update
The operation to update a registered vCenter.


```js
azure_arm_recoveryservicessiterecovery.ReplicationvCenters_Update({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "vCenterName": "",
  "updateVCenterRequest": {}
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* vCenterName (string) **required** - vCeneter name
* updateVCenterRequest (object) **required** - Input required to update vCenter.

### ReplicationvCenters_Create
The operation to create a vCenter object..


```js
azure_arm_recoveryservicessiterecovery.ReplicationvCenters_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "fabricName": "",
  "vCenterName": "",
  "addVCenterRequest": {}
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* fabricName (string) **required** - Fabric name.
* vCenterName (string) **required** - vCenter name.
* addVCenterRequest (object) **required** - Input required to add vCenter.

### ReplicationJobs_List
Gets the list of Azure Site Recovery Jobs for the vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationJobs_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* $filter (string) - OData filter options.

### ReplicationJobs_Export
The operation to export the details of the Azure Site Recovery jobs of the vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationJobs_Export({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobQueryParameter": {}
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* jobQueryParameter (object) **required** - Query parameter to enumerate jobs.

### ReplicationJobs_Get
Get the details of an Azure Site Recovery job.


```js
azure_arm_recoveryservicessiterecovery.ReplicationJobs_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* jobName (string) **required** - Job identifier

### ReplicationJobs_Cancel
The operation to cancel an Azure Site Recovery job.


```js
azure_arm_recoveryservicessiterecovery.ReplicationJobs_Cancel({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* jobName (string) **required** - Job indentifier.

### ReplicationJobs_Restart
The operation to restart an Azure Site Recovery job.


```js
azure_arm_recoveryservicessiterecovery.ReplicationJobs_Restart({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* jobName (string) **required** - Job identifier.

### ReplicationJobs_Resume
The operation to resume an Azure Site Recovery job


```js
azure_arm_recoveryservicessiterecovery.ReplicationJobs_Resume({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "jobName": "",
  "resumeJobParams": {}
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* jobName (string) **required** - Job identifier.
* resumeJobParams (object) **required** - Resume job params.

### ReplicationNetworkMappings_List
Lists all ASR network mappings in the vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationNetworkMappings_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.

### ReplicationNetworks_List
Lists the networks available in a vault


```js
azure_arm_recoveryservicessiterecovery.ReplicationNetworks_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.

### ReplicationPolicies_List
Lists the replication policies for a vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationPolicies_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.

### ReplicationPolicies_Delete
The operation to delete a replication policy.


```js
azure_arm_recoveryservicessiterecovery.ReplicationPolicies_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* policyName (string) **required** - Replication policy name.

### ReplicationPolicies_Get
Gets the details of a replication policy.


```js
azure_arm_recoveryservicessiterecovery.ReplicationPolicies_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* policyName (string) **required** - Replication policy name.

### ReplicationPolicies_Update
The operation to update a replication policy.


```js
azure_arm_recoveryservicessiterecovery.ReplicationPolicies_Update({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": "",
  "input": {}
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* policyName (string) **required** - Protection profile Id.
* input (object) **required** - Update protection profile input.

### ReplicationPolicies_Create
The operation to create a replication policy


```js
azure_arm_recoveryservicessiterecovery.ReplicationPolicies_Create({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "policyName": "",
  "input": {}
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* policyName (string) **required** - Replication policy name
* input (object) **required** - Protection profile input.

### ReplicationProtectedItems_List
Gets the list of ASR replication protected items in the vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectedItems_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* skipToken (string) - The pagination token. Possible values: "FabricId" or "FabricId_CloudId" or null
* $filter (string) - OData filter options.

### ReplicationProtectionContainerMappings_List
Lists the protection container mappings in the vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectionContainerMappings_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.

### ReplicationProtectionContainers_List
Lists the protection containers in a vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationProtectionContainers_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.

### ReplicationRecoveryPlans_List
Lists the recovery plans in the vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryPlans_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.

### ReplicationRecoveryPlans_Delete
Delete a recovery plan.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryPlans_Delete({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* recoveryPlanName (string) **required** - Recovery plan name.

### ReplicationRecoveryPlans_Get
Gets the details of the recovery plan.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryPlans_Get({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* recoveryPlanName (string) **required** - Name of the recovery plan.

### ReplicationRecoveryPlans_Update
The operation to update a recovery plan.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryPlans_Update({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": "",
  "input": {}
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* recoveryPlanName (string) **required** - Recovery plan name.
* input (object) **required** - Update recovery plan input class.

### ReplicationRecoveryPlans_Create
The operation to create a recovery plan.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryPlans_Create({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* recoveryPlanName (string) **required** - Recovery plan name.
* input (object) **required** - Create recovery plan input class.

### ReplicationRecoveryPlans_FailoverCommit
The operation to commit the fail over of a recovery plan.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryPlans_FailoverCommit({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* recoveryPlanName (string) **required** - Recovery plan name.

### ReplicationRecoveryPlans_PlannedFailover
The operation to start the planned failover of a recovery plan.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryPlans_PlannedFailover({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* recoveryPlanName (string) **required** - Recovery plan name.
* input (object) **required** - Recovery plan planned failover input.

### ReplicationRecoveryPlans_Reprotect
The operation to reprotect(reverse replicate) a recovery plan.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryPlans_Reprotect({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": "",
  "recoveryPlanName": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* recoveryPlanName (string) **required** - Recovery plan name.

### ReplicationRecoveryPlans_TestFailover
The operation to start the test failover of a recovery plan.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryPlans_TestFailover({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* recoveryPlanName (string) **required** - Recovery plan name.
* input (object) **required** - Recovery plan test failover input.

### ReplicationRecoveryPlans_TestFailoverCleanup
The operation to cleanup test failover of a recovery plan.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryPlans_TestFailoverCleanup({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* recoveryPlanName (string) **required** - Recovery plan name.
* input (object) **required** - Recovery plan test failover cleanup input.

### ReplicationRecoveryPlans_UnplannedFailover
The operation to start the failover of a recovery plan.


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryPlans_UnplannedFailover({
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

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.
* recoveryPlanName (string) **required** - Recovery plan name.
* input (object) **required** - Recovery plan unplanned failover input.

### ReplicationRecoveryServicesProviders_List
Lists the registered recovery services providers in the vault


```js
azure_arm_recoveryservicessiterecovery.ReplicationRecoveryServicesProviders_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.

### ReplicationStorageClassificationMappings_List
Lists the storage classification mappings in the vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationStorageClassificationMappings_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.

### ReplicationStorageClassifications_List
Lists the storage classifications in the vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationStorageClassifications_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.

### ReplicationvCenters_List
Lists the vCenter servers registered in the vault.


```js
azure_arm_recoveryservicessiterecovery.ReplicationvCenters_List({
  "api-version": "",
  "resourceName": "",
  "resourceGroupName": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* resourceName (string) **required** - The name of the recovery services vault.
* resourceGroupName (string) **required** - The name of the resource group where the recovery services vault is present.
* subscriptionId (string) **required** - The subscription Id.

