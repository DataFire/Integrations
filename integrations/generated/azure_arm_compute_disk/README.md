# @datafire/azure_arm_compute_disk

Client library for DiskResourceProviderClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_compute_disk
```

```js
let datafire = require('datafire');
let azure_arm_compute_disk = require('@datafire/azure_arm_compute_disk').create();

azure_arm_compute_disk.Disks_List({}).then(data => {
  console.log(data);
})
```

## Description
The Disk Resource Provider Client.

## Actions
### Disks_List
Lists all the disks under a subscription.


```js
azure_arm_compute_disk.Disks_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client Api Version.

### Snapshots_List
Lists snapshots under a subscription.


```js
azure_arm_compute_disk.Snapshots_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client Api Version.

### Disks_ListByResourceGroup
Lists all the disks under a resource group.


```js
azure_arm_compute_disk.Disks_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.

### Disks_Delete
Deletes a disk.


```js
azure_arm_compute_disk.Disks_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "diskName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* diskName (string) **required** - The name of the disk within the given subscription and resource group.
* api-version (string) **required** - Client Api Version.

### Disks_Get
Gets information about a disk.


```js
azure_arm_compute_disk.Disks_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "diskName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* diskName (string) **required** - The name of the disk within the given subscription and resource group.
* api-version (string) **required** - Client Api Version.

### Disks_Update
Updates (patches) a disk.


```js
azure_arm_compute_disk.Disks_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "diskName": "",
  "api-version": "",
  "disk": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* diskName (string) **required** - The name of the disk within the given subscription and resource group.
* api-version (string) **required** - Client Api Version.
* disk (undefined) **required** - Disk update resource.

### Disks_CreateOrUpdate
Creates or updates a disk.


```js
azure_arm_compute_disk.Disks_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "diskName": "",
  "api-version": "",
  "disk": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* diskName (string) **required** - The name of the disk within the given subscription and resource group.
* api-version (string) **required** - Client Api Version.
* disk (undefined) **required** - Disk resource.

### Disks_GrantAccess
Grants access to a disk.


```js
azure_arm_compute_disk.Disks_GrantAccess({
  "subscriptionId": "",
  "resourceGroupName": "",
  "diskName": "",
  "api-version": "",
  "grantAccessData": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* diskName (string) **required** - The name of the disk within the given subscription and resource group.
* api-version (string) **required** - Client Api Version.
* grantAccessData (undefined) **required** - Data used for requesting a SAS.

### Disks_RevokeAccess
Revokes access to a disk.


```js
azure_arm_compute_disk.Disks_RevokeAccess({
  "subscriptionId": "",
  "resourceGroupName": "",
  "diskName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* diskName (string) **required** - The name of the disk within the given subscription and resource group.
* api-version (string) **required** - Client Api Version.

### Snapshots_ListByResourceGroup
Lists snapshots under a resource group.


```js
azure_arm_compute_disk.Snapshots_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.

### Snapshots_Delete
Deletes a snapshot.


```js
azure_arm_compute_disk.Snapshots_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "snapshotName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* snapshotName (string) **required** - The name of the snapshot within the given subscription and resource group.
* api-version (string) **required** - Client Api Version.

### Snapshots_Get
Gets information about a snapshot.


```js
azure_arm_compute_disk.Snapshots_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "snapshotName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* snapshotName (string) **required** - The name of the snapshot within the given subscription and resource group.
* api-version (string) **required** - Client Api Version.

### Snapshots_Update
Updates (patches) a snapshot.


```js
azure_arm_compute_disk.Snapshots_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "snapshotName": "",
  "api-version": "",
  "snapshot": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* snapshotName (string) **required** - The name of the snapshot within the given subscription and resource group.
* api-version (string) **required** - Client Api Version.
* snapshot (undefined) **required** - Snapshot update resource.

### Snapshots_CreateOrUpdate
Creates or updates a snapshot.


```js
azure_arm_compute_disk.Snapshots_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "snapshotName": "",
  "api-version": "",
  "snapshot": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* snapshotName (string) **required** - The name of the snapshot within the given subscription and resource group.
* api-version (string) **required** - Client Api Version.
* snapshot (undefined) **required** - Snapshot resource.

### Snapshots_GrantAccess
Grants access to a snapshot.


```js
azure_arm_compute_disk.Snapshots_GrantAccess({
  "subscriptionId": "",
  "resourceGroupName": "",
  "snapshotName": "",
  "api-version": "",
  "grantAccessData": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* snapshotName (string) **required** - The name of the snapshot within the given subscription and resource group.
* api-version (string) **required** - Client Api Version.
* grantAccessData (undefined) **required** - Data used for requesting a SAS.

### Snapshots_RevokeAccess
Revokes access to a snapshot.


```js
azure_arm_compute_disk.Snapshots_RevokeAccess({
  "subscriptionId": "",
  "resourceGroupName": "",
  "snapshotName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* snapshotName (string) **required** - The name of the snapshot within the given subscription and resource group.
* api-version (string) **required** - Client Api Version.

