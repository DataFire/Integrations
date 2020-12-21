# @datafire/azure_azsadmin_disks

Client library for ComputeDiskAdminManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_disks
```
```js
let azure_azsadmin_disks = require('@datafire/azure_azsadmin_disks').create({
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

The Admin Compute Disk Management Client.

## Actions

### Disks_List
Returns a list of disks.


```js
azure_azsadmin_disks.Disks_List({
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * userSubscriptionId `string`: User Subscription Id which the resource belongs to.
  * status `string`: The parameters of disk state.
  * sharePath `string`: The source share which the resource belongs to.
  * count `integer`: The maximum number of disks to return.
  * start `integer`: The start index of disks in query.
  * api-version **required** `string`: Client API Version.

#### Output
* output `object`: List of disks.
  * nextLink `string`: URI to the next page.
  * value `array`: List of disks.
    * items `object`: Managed Disk.
      * properties `object`: Managed disk properties.
        * actualSizeGB `integer`: The actual size of disk in GB.
        * diskId `string`: The disk id.
        * diskSku `string` (values: Standard_LRS, Standard_ZRS, Standard_GRS, Standard_RAGRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS): Disk Sku.
        * diskType `string` (values: Undefined, Disk, Snapshot, RestorePoint, ManagedBlob): Disk resource type.
        * managedBy `string`: Compute resource Uri which owns this disk.
        * provisionSizeGB `integer`: The provision size of disk in GB.
        * sharePath `string`: The disk share path.
        * status `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
        * userResourceId `string`: The disk resource Uri from user view.
      * id `string`: ID of the resource.
      * location `string`: Location of the resource.
      * name `string`: Name of the resource.
      * type `string`: Type of Resource.

### Disks_Get
Returns the disk.


```js
azure_azsadmin_disks.Disks_Get({
  "subscriptionId": "",
  "location": "",
  "DiskId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Location of the resource.
  * DiskId **required** `string`: The disk guid as identity.
  * api-version **required** `string`: Client API Version.

#### Output
* output `object`: Managed Disk.
  * properties `object`: Managed disk properties.
    * actualSizeGB `integer`: The actual size of disk in GB.
    * diskId `string`: The disk id.
    * diskSku `string` (values: Standard_LRS, Standard_ZRS, Standard_GRS, Standard_RAGRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS): Disk Sku.
    * diskType `string` (values: Undefined, Disk, Snapshot, RestorePoint, ManagedBlob): Disk resource type.
    * managedBy `string`: Compute resource Uri which owns this disk.
    * provisionSizeGB `integer`: The provision size of disk in GB.
    * sharePath `string`: The disk share path.
    * status `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
    * userResourceId `string`: The disk resource Uri from user view.
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.



## Definitions

### AccountType
* AccountType `string` (values: Standard_LRS, Standard_ZRS, Standard_GRS, Standard_RAGRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS): Disk Sku.

### Disk
* Disk `object`: Managed Disk.
  * properties `object`: Managed disk properties.
    * actualSizeGB `integer`: The actual size of disk in GB.
    * diskId `string`: The disk id.
    * diskSku `string` (values: Standard_LRS, Standard_ZRS, Standard_GRS, Standard_RAGRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS): Disk Sku.
    * diskType `string` (values: Undefined, Disk, Snapshot, RestorePoint, ManagedBlob): Disk resource type.
    * managedBy `string`: Compute resource Uri which owns this disk.
    * provisionSizeGB `integer`: The provision size of disk in GB.
    * sharePath `string`: The disk share path.
    * status `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
    * userResourceId `string`: The disk resource Uri from user view.
  * id `string`: ID of the resource.
  * location `string`: Location of the resource.
  * name `string`: Name of the resource.
  * type `string`: Type of Resource.

### DiskList
* DiskList `object`: List of disks.
  * nextLink `string`: URI to the next page.
  * value `array`: List of disks.
    * items `object`: Managed Disk.
      * properties `object`: Managed disk properties.
        * actualSizeGB `integer`: The actual size of disk in GB.
        * diskId `string`: The disk id.
        * diskSku `string` (values: Standard_LRS, Standard_ZRS, Standard_GRS, Standard_RAGRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS): Disk Sku.
        * diskType `string` (values: Undefined, Disk, Snapshot, RestorePoint, ManagedBlob): Disk resource type.
        * managedBy `string`: Compute resource Uri which owns this disk.
        * provisionSizeGB `integer`: The provision size of disk in GB.
        * sharePath `string`: The disk share path.
        * status `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
        * userResourceId `string`: The disk resource Uri from user view.
      * id `string`: ID of the resource.
      * location `string`: Location of the resource.
      * name `string`: Name of the resource.
      * type `string`: Type of Resource.

### DiskProperties
* DiskProperties `object`: Managed disk properties.
  * actualSizeGB `integer`: The actual size of disk in GB.
  * diskId `string`: The disk id.
  * diskSku `string` (values: Standard_LRS, Standard_ZRS, Standard_GRS, Standard_RAGRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS): Disk Sku.
  * diskType `string` (values: Undefined, Disk, Snapshot, RestorePoint, ManagedBlob): Disk resource type.
  * managedBy `string`: Compute resource Uri which owns this disk.
  * provisionSizeGB `integer`: The provision size of disk in GB.
  * sharePath `string`: The disk share path.
  * status `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.
  * userResourceId `string`: The disk resource Uri from user view.

### DiskResourceType
* DiskResourceType `string` (values: Undefined, Disk, Snapshot, RestorePoint, ManagedBlob): Disk resource type.

### DiskState
* DiskState `string` (values: Undefined, Unattached, Attached, Reserved, ActiveSAS, Unknown, All, Recommended, OfflineMigration, OnlineMigration): Disk State.


