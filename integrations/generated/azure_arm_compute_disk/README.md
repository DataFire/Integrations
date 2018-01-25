# @datafire/azure_arm_compute_disk

Client library for DiskResourceProviderClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_compute_disk
```
```js
let azure_arm_compute_disk = require('@datafire/azure_arm_compute_disk').create();

azure_arm_compute_disk.Disks_List({
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DiskList](#disklist)

### Snapshots_List
Lists snapshots under a subscription.


```js
azure_arm_compute_disk.Snapshots_List({
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
azure_arm_compute_disk.Disks_ListByResourceGroup({
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
azure_arm_compute_disk.Disks_Delete({
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
  * diskName **required** `string`: The name of the disk within the given subscription and resource group.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * diskName **required** `string`: The name of the disk within the given subscription and resource group.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Disk](#disk)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * diskName **required** `string`: The name of the disk within the given subscription and resource group.
  * api-version **required** `string`: Client Api Version.
  * disk **required** [DiskUpdate](#diskupdate)

#### Output
* output [Disk](#disk)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * diskName **required** `string`: The name of the disk within the given subscription and resource group.
  * api-version **required** `string`: Client Api Version.
  * disk **required** [Disk](#disk)

#### Output
* output [Disk](#disk)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * diskName **required** `string`: The name of the disk within the given subscription and resource group.
  * api-version **required** `string`: Client Api Version.
  * grantAccessData **required** [GrantAccessData](#grantaccessdata)

#### Output
* output [AccessUri](#accessuri)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * diskName **required** `string`: The name of the disk within the given subscription and resource group.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

### Snapshots_ListByResourceGroup
Lists snapshots under a resource group.


```js
azure_arm_compute_disk.Snapshots_ListByResourceGroup({
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
azure_arm_compute_disk.Snapshots_Delete({
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
  * snapshotName **required** `string`: The name of the snapshot within the given subscription and resource group.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * snapshotName **required** `string`: The name of the snapshot within the given subscription and resource group.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Snapshot](#snapshot)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * snapshotName **required** `string`: The name of the snapshot within the given subscription and resource group.
  * api-version **required** `string`: Client Api Version.
  * snapshot **required** [SnapshotUpdate](#snapshotupdate)

#### Output
* output [Snapshot](#snapshot)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * snapshotName **required** `string`: The name of the snapshot within the given subscription and resource group.
  * api-version **required** `string`: Client Api Version.
  * snapshot **required** [Snapshot](#snapshot)

#### Output
* output [Snapshot](#snapshot)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * snapshotName **required** `string`: The name of the snapshot within the given subscription and resource group.
  * api-version **required** `string`: Client Api Version.
  * grantAccessData **required** [GrantAccessData](#grantaccessdata)

#### Output
* output [AccessUri](#accessuri)

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

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * snapshotName **required** `string`: The name of the snapshot within the given subscription and resource group.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationStatusResponse](#operationstatusresponse)



## Definitions

### AccessUri
* AccessUri `object`: A disk access SAS uri.
  * properties [AccessUriOutput](#accessurioutput)

### AccessUriOutput
* AccessUriOutput `object`: Azure properties, including output.
  * output [AccessUriRaw](#accessuriraw)

### AccessUriRaw
* AccessUriRaw `object`: This object gets 'bubbled up' through flattening.
  * accessSAS `string`: A SAS uri for accessing a disk.

### ApiError
* ApiError `object`: Api error.
  * code `string`: The error code.
  * details `array`: The Api error details
    * items [ApiErrorBase](#apierrorbase)
  * innererror [InnerError](#innererror)
  * message `string`: The error message.
  * target `string`: The target of the particular error.

### ApiErrorBase
* ApiErrorBase `object`: Api error base.
  * code `string`: The error code.
  * message `string`: The error message.
  * target `string`: The target of the particular error.

### CreationData
* CreationData `object`: Data used when creating a disk.
  * createOption **required** `string` (values: Empty, Attach, FromImage, Import, Copy, Restore)
  * imageReference [ImageDiskReference](#imagediskreference)
  * sourceResourceId `string`: If createOption is Copy, this is the ARM id of the source snapshot or disk. If creationOption is Restore, this is the ARM-like id of the source disk restore point.
  * sourceUri `string`: If creationOption is Import, this is a SAS URI to a blob to be imported into a managed disk. If creationOption is Copy, this is a relative Uri containing the id of the source snapshot to be copied into a managed disk.
  * storageAccountId `string`: If createOption is Import, the Azure Resource Manager identifier of the storage account containing the blob to import as a disk. Required only if the blob is in a different subscription

### Disk
* Disk `object`: Disk resource.
  * properties [DiskProperties](#diskproperties)
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### DiskList
* DiskList `object`: The List Disks operation response.
  * nextLink `string`: the uri to fetch the next page of disks. Call ListNext() with this to fetch the next page of disks.
  * value **required** `array`: A list of disks.
    * items [Disk](#disk)

### DiskProperties
* DiskProperties `object`: Disk resource properties.
  * accountType `string` (values: Standard_LRS, Premium_LRS): the storage account type of the disk.
  * creationData **required** [CreationData](#creationdata)
  * diskSizeGB `integer`: If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
  * encryptionSettings [EncryptionSettings](#encryptionsettings)
  * osType `string` (values: Windows, Linux): The Operating System type.
  * ownerId `string`: A relative URI containing the VM id that has the disk attached.
  * provisioningState `string`: The disk provisioning state.
  * timeCreated `string`: The time when the disk was created.

### DiskUpdate
* DiskUpdate `object`: Disk update resource.
  * properties [DiskUpdateProperties](#diskupdateproperties)
  * tags `object`: Resource tags

### DiskUpdateProperties
* DiskUpdateProperties `object`: Disk resource update properties.
  * accountType `string` (values: Standard_LRS, Premium_LRS): the storage account type of the disk.
  * creationData [CreationData](#creationdata)
  * diskSizeGB `integer`: If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
  * encryptionSettings [EncryptionSettings](#encryptionsettings)
  * osType `string` (values: Windows, Linux): the Operating System type.

### EncryptionSettings
* EncryptionSettings `object`: Encryption settings for disk or snapshot
  * diskEncryptionKey [KeyVaultAndSecretReference](#keyvaultandsecretreference)
  * enabled `boolean`: Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
  * keyEncryptionKey [KeyVaultAndKeyReference](#keyvaultandkeyreference)

### GrantAccessData
* GrantAccessData `object`: Data used for requesting a SAS.
  * access **required** `string` (values: None, Read)
  * durationInSeconds **required** `integer`: Time duration in seconds until the SAS access expires.

### ImageDiskReference
* ImageDiskReference `object`: The source image used for creating the disk.
  * id **required** `string`: A relative uri containing either a Platform Imgage Repository or user image reference.
  * lun `integer`: If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.

### InnerError
* InnerError `object`: Inner error details.
  * errordetail `string`: The internal error message or exception dump.
  * exceptiontype `string`: The exception type.

### KeyVaultAndKeyReference
* KeyVaultAndKeyReference `object`: Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey
  * keyUrl **required** `string`: Url pointing to a key or secret in KeyVault
  * sourceVault **required** [SourceVault](#sourcevault)

### KeyVaultAndSecretReference
* KeyVaultAndSecretReference `object`: Key Vault Secret Url and vault id of the encryption key 
  * secretUrl **required** `string`: Url pointing to a key or secret in KeyVault
  * sourceVault **required** [SourceVault](#sourcevault)

### OperationStatusResponse
* OperationStatusResponse `object`: Operation status response
  * endTime `string`: End time of the operation
  * error [ApiError](#apierror)
  * name `string`: Operation ID
  * startTime `string`: Start time of the operation
  * status `string`: Operation status

### Resource
* Resource `object`: The Resource model definition.
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ResourceUpdate
* ResourceUpdate `object`: The Resource model definition.
  * tags `object`: Resource tags

### Snapshot
* Snapshot `object`: Snapshot resource.
  * properties [DiskProperties](#diskproperties)
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

### SnapshotUpdate
* SnapshotUpdate `object`: Snapshot update resource.
  * properties [DiskUpdateProperties](#diskupdateproperties)
  * tags `object`: Resource tags

### SourceVault
* SourceVault `object`: The vault id is an Azure Resource Manager Resoure id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
  * id `string`: Resource Id


