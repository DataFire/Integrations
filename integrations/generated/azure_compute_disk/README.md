# @datafire/azure_compute_disk

Client library for DiskResourceProviderClient

## Installation and Usage
```bash
npm install --save @datafire/azure_compute_disk
```
```js
let azure_compute_disk = require('@datafire/azure_compute_disk').create({
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

The Disk Resource Provider Client.

## Actions

### Disks_List
Lists all the disks under a subscription.


```js
azure_compute_disk.Disks_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DiskList](#disklist)

### Snapshots_List
Lists snapshots under a subscription.


```js
azure_compute_disk.Snapshots_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SnapshotList](#snapshotlist)

### Disks_ListByResourceGroup
Lists all the disks under a resource group.


```js
azure_compute_disk.Disks_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DiskList](#disklist)

### Disks_Delete
Deletes a disk.


```js
azure_compute_disk.Disks_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "diskName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * diskName **required** `string`: The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Disks_Get
Gets information about a disk.


```js
azure_compute_disk.Disks_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "diskName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * diskName **required** `string`: The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Disk](#disk)

### Disks_Update
Updates (patches) a disk.


```js
azure_compute_disk.Disks_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "diskName": "",
  "api-version": "",
  "disk": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * diskName **required** `string`: The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
  * api-version **required** `string`: Client Api Version.
  * disk **required** [DiskUpdate](#diskupdate)

#### Output
* output [Disk](#disk)

### Disks_CreateOrUpdate
Creates or updates a disk.


```js
azure_compute_disk.Disks_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "diskName": "",
  "api-version": "",
  "disk": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * diskName **required** `string`: The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
  * api-version **required** `string`: Client Api Version.
  * disk **required** [Disk](#disk)

#### Output
* output [Disk](#disk)

### Disks_GrantAccess
Grants access to a disk.


```js
azure_compute_disk.Disks_GrantAccess({
  "subscriptionId": "",
  "resourceGroupName": "",
  "diskName": "",
  "api-version": "",
  "grantAccessData": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * diskName **required** `string`: The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
  * api-version **required** `string`: Client Api Version.
  * grantAccessData **required** [GrantAccessData](#grantaccessdata)

#### Output
* output [AccessUri](#accessuri)

### Disks_RevokeAccess
Revokes access to a disk.


```js
azure_compute_disk.Disks_RevokeAccess({
  "subscriptionId": "",
  "resourceGroupName": "",
  "diskName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * diskName **required** `string`: The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Snapshots_ListByResourceGroup
Lists snapshots under a resource group.


```js
azure_compute_disk.Snapshots_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SnapshotList](#snapshotlist)

### Snapshots_Delete
Deletes a snapshot.


```js
azure_compute_disk.Snapshots_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "snapshotName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * snapshotName **required** `string`: The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name length is 80 characters.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Snapshots_Get
Gets information about a snapshot.


```js
azure_compute_disk.Snapshots_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "snapshotName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * snapshotName **required** `string`: The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name length is 80 characters.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Snapshot](#snapshot)

### Snapshots_Update
Updates (patches) a snapshot.


```js
azure_compute_disk.Snapshots_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "snapshotName": "",
  "api-version": "",
  "snapshot": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * snapshotName **required** `string`: The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name length is 80 characters.
  * api-version **required** `string`: Client Api Version.
  * snapshot **required** [SnapshotUpdate](#snapshotupdate)

#### Output
* output [Snapshot](#snapshot)

### Snapshots_CreateOrUpdate
Creates or updates a snapshot.


```js
azure_compute_disk.Snapshots_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "snapshotName": "",
  "api-version": "",
  "snapshot": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * snapshotName **required** `string`: The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name length is 80 characters.
  * api-version **required** `string`: Client Api Version.
  * snapshot **required** [Snapshot](#snapshot)

#### Output
* output [Snapshot](#snapshot)

### Snapshots_GrantAccess
Grants access to a snapshot.


```js
azure_compute_disk.Snapshots_GrantAccess({
  "subscriptionId": "",
  "resourceGroupName": "",
  "snapshotName": "",
  "api-version": "",
  "grantAccessData": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * snapshotName **required** `string`: The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name length is 80 characters.
  * api-version **required** `string`: Client Api Version.
  * grantAccessData **required** [GrantAccessData](#grantaccessdata)

#### Output
* output [AccessUri](#accessuri)

### Snapshots_RevokeAccess
Revokes access to a snapshot.


```js
azure_compute_disk.Snapshots_RevokeAccess({
  "subscriptionId": "",
  "resourceGroupName": "",
  "snapshotName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * snapshotName **required** `string`: The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name length is 80 characters.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*



## Definitions

### AccessUri
* AccessUri `object`: A disk access SAS uri.
  * accessSAS `string`: A SAS uri for accessing a disk.

### CreationData
* CreationData `object`: Data used when creating a disk.
  * createOption **required** `string` (values: Empty, Attach, FromImage, Import, Copy, Restore, Upload): This enumerates the possible sources of a disk's creation.
  * imageReference [ImageDiskReference](#imagediskreference)
  * sourceResourceId `string`: If createOption is Copy, this is the ARM id of the source snapshot or disk.
  * sourceUniqueId `string`: If this field is set, this is the unique id identifying the source of this resource.
  * sourceUri `string`: If createOption is Import, this is the URI of a blob to be imported into a managed disk.
  * storageAccountId `string`: If createOption is Import, the Azure Resource Manager identifier of the storage account containing the blob to import as a disk. Required only if the blob is in a different subscription
  * uploadSizeBytes `integer`: If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer).

### Disk
* Disk `object`: Disk resource.
  * managedBy `string`: A relative URI containing the ID of the VM that has the disk attached.
  * properties [DiskProperties](#diskproperties)
  * sku [DiskSku](#disksku)
  * zones `array`: The Logical zone list for Disk.
    * items `string`
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### DiskList
* DiskList `object`: The List Disks operation response.
  * nextLink `string`: The uri to fetch the next page of disks. Call ListNext() with this to fetch the next page of disks.
  * value **required** `array`: A list of disks.
    * items [Disk](#disk)

### DiskProperties
* DiskProperties `object`: Disk resource properties.
  * creationData **required** [CreationData](#creationdata)
  * diskIOPSReadWrite `integer`: The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
  * diskMBpsReadWrite `integer`: The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
  * diskSizeBytes `integer`: The size of the disk in bytes. This field is read only.
  * diskSizeGB `integer`: If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
  * diskState `string` (values: Unattached, Attached, Reserved, ActiveSAS, ReadyToUpload, ActiveUpload): The state of the disk.
  * encryptionSettingsCollection [EncryptionSettingsCollection](#encryptionsettingscollection)
  * hyperVGeneration `string` (values: V1, V2): The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
  * osType `string` (values: Windows, Linux): The Operating System type.
  * provisioningState `string`: The disk provisioning state.
  * timeCreated `string`: The time when the disk was created.
  * uniqueId `string`: Unique Guid identifying the resource.

### DiskSku
* DiskSku `object`: The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS.
  * name `string` (values: Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS): The sku name.
  * tier `string`: The sku tier.

### DiskUpdate
* DiskUpdate `object`: Disk update resource.
  * properties [DiskUpdateProperties](#diskupdateproperties)
  * sku [DiskSku](#disksku)
  * tags `object`: Resource tags

### DiskUpdateProperties
* DiskUpdateProperties `object`: Disk resource update properties.
  * diskIOPSReadWrite `integer`: The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
  * diskMBpsReadWrite `integer`: The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
  * diskSizeGB `integer`: If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
  * encryptionSettingsCollection [EncryptionSettingsCollection](#encryptionsettingscollection)
  * osType `string` (values: Windows, Linux): the Operating System type.

### EncryptionSettingsCollection
* EncryptionSettingsCollection `object`: Encryption settings for disk or snapshot
  * enabled **required** `boolean`: Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
  * encryptionSettings `array`: A collection of encryption settings, one for each disk volume.
    * items [EncryptionSettingsElement](#encryptionsettingselement)
  * encryptionSettingsVersion `string`: Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption.

### EncryptionSettingsElement
* EncryptionSettingsElement `object`: Encryption settings for one disk volume.
  * diskEncryptionKey [KeyVaultAndSecretReference](#keyvaultandsecretreference)
  * keyEncryptionKey [KeyVaultAndKeyReference](#keyvaultandkeyreference)

### GrantAccessData
* GrantAccessData `object`: Data used for requesting a SAS.
  * access **required** `string` (values: None, Read, Write)
  * durationInSeconds **required** `integer`: Time duration in seconds until the SAS access expires.

### ImageDiskReference
* ImageDiskReference `object`: The source image used for creating the disk.
  * id **required** `string`: A relative uri containing either a Platform Image Repository or user image reference.
  * lun `integer`: If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.

### KeyVaultAndKeyReference
* KeyVaultAndKeyReference `object`: Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey
  * keyUrl **required** `string`: Url pointing to a key or secret in KeyVault
  * sourceVault **required** [SourceVault](#sourcevault)

### KeyVaultAndSecretReference
* KeyVaultAndSecretReference `object`: Key Vault Secret Url and vault id of the encryption key 
  * secretUrl **required** `string`: Url pointing to a key or secret in KeyVault
  * sourceVault **required** [SourceVault](#sourcevault)

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### Snapshot
* Snapshot `object`: Snapshot resource.
  * managedBy `string`: Unused. Always Null.
  * properties [SnapshotProperties](#snapshotproperties)
  * sku [SnapshotSku](#snapshotsku)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### SnapshotList
* SnapshotList `object`: The List Snapshots operation response.
  * nextLink `string`: The uri to fetch the next page of snapshots. Call ListNext() with this to fetch the next page of snapshots.
  * value **required** `array`: A list of snapshots.
    * items [Snapshot](#snapshot)

### SnapshotProperties
* SnapshotProperties `object`: Snapshot resource properties.
  * creationData **required** [CreationData](#creationdata)
  * diskSizeBytes `integer`: The size of the disk in bytes. This field is read only.
  * diskSizeGB `integer`: If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
  * encryptionSettingsCollection [EncryptionSettingsCollection](#encryptionsettingscollection)
  * hyperVGeneration `string` (values: V1, V2): The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
  * incremental `boolean`: Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed.
  * osType `string` (values: Windows, Linux): The Operating System type.
  * provisioningState `string`: The disk provisioning state.
  * timeCreated `string`: The time when the disk was created.
  * uniqueId `string`: Unique Guid identifying the resource.

### SnapshotSku
* SnapshotSku `object`: The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS.
  * name `string` (values: Standard_LRS, Premium_LRS, Standard_ZRS): The sku name.
  * tier `string`: The sku tier.

### SnapshotUpdate
* SnapshotUpdate `object`: Snapshot update resource.
  * properties [SnapshotUpdateProperties](#snapshotupdateproperties)
  * sku [SnapshotSku](#snapshotsku)
  * tags `object`: Resource tags

### SnapshotUpdateProperties
* SnapshotUpdateProperties `object`: Snapshot resource update properties.
  * diskSizeGB `integer`: If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
  * encryptionSettingsCollection [EncryptionSettingsCollection](#encryptionsettingscollection)
  * osType `string` (values: Windows, Linux): the Operating System type.

### SourceVault
* SourceVault `object`: The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
  * id `string`: Resource Id


