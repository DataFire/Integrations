# @datafire/azure_netapp

Client library for Microsoft NetApp

## Installation and Usage
```bash
npm install --save @datafire/azure_netapp
```
```js
let azure_netapp = require('@datafire/azure_netapp').create({
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

Microsoft NetApp Azure Resource Provider specification

## Actions

### Operations_List
Lists all of the available Microsoft.NetApp Rest API operations


```js
azure_netapp.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [OperationListResult](#operationlistresult)

### CheckFilePathAvailability
Check if a file path is available.


```js
azure_netapp.CheckFilePathAvailability({
  "body": {
    "name": "",
    "type": "",
    "resourceGroup": ""
  },
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [ResourceNameAvailabilityRequest](#resourcenameavailabilityrequest)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The location
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ResourceNameAvailability](#resourcenameavailability)

### CheckNameAvailability
Check if a resource name is available.


```js
azure_netapp.CheckNameAvailability({
  "body": {
    "name": "",
    "type": "",
    "resourceGroup": ""
  },
  "subscriptionId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [ResourceNameAvailabilityRequest](#resourcenameavailabilityrequest)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The location
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ResourceNameAvailability](#resourcenameavailability)

### Accounts_List
List and describe all NetApp accounts in the resource group


```js
azure_netapp.Accounts_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [netAppAccountList](#netappaccountlist)

### Accounts_Delete
Delete the specified NetApp account


```js
azure_netapp.Accounts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### Accounts_Get
Get the NetApp account


```js
azure_netapp.Accounts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [netAppAccount](#netappaccount)

### Accounts_Update
Patch the specified NetApp account


```js
azure_netapp.Accounts_Update({
  "body": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [netAppAccountPatch](#netappaccountpatch)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [netAppAccount](#netappaccount)

### Accounts_CreateOrUpdate
Create or update the specified NetApp account within the resource group


```js
azure_netapp.Accounts_CreateOrUpdate({
  "body": {
    "location": ""
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [netAppAccount](#netappaccount)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [netAppAccount](#netappaccount)

### Pools_List
List all capacity pools in the NetApp Account


```js
azure_netapp.Pools_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [capacityPoolList](#capacitypoollist)

### Pools_Delete
Delete the specified capacity pool


```js
azure_netapp.Pools_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### Pools_Get
Get details of the specified capacity pool


```js
azure_netapp.Pools_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [capacityPool](#capacitypool)

### Pools_Update
Patch the specified capacity pool


```js
azure_netapp.Pools_Update({
  "body": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [capacityPoolPatch](#capacitypoolpatch)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [capacityPool](#capacitypool)

### Pools_CreateOrUpdate
Create or Update a capacity pool


```js
azure_netapp.Pools_CreateOrUpdate({
  "body": {
    "location": "",
    "properties": {
      "size": 0,
      "serviceLevel": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [capacityPool](#capacitypool)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [capacityPool](#capacitypool)

### Volumes_List
List all volumes within the capacity pool


```js
azure_netapp.Volumes_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [volumeList](#volumelist)

### Volumes_Delete
Delete the specified volume


```js
azure_netapp.Volumes_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "volumeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * volumeName **required** `string`: The name of the volume
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### Volumes_Get
Get the details of the specified volume


```js
azure_netapp.Volumes_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "volumeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * volumeName **required** `string`: The name of the volume
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [volume](#volume)

### Volumes_Update
Patch the specified volume


```js
azure_netapp.Volumes_Update({
  "body": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "volumeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [volumePatch](#volumepatch)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * volumeName **required** `string`: The name of the volume
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [volume](#volume)

### Volumes_CreateOrUpdate
Create or update the specified volume within the capacity pool


```js
azure_netapp.Volumes_CreateOrUpdate({
  "body": {
    "location": "",
    "properties": {
      "creationToken": "",
      "usageThreshold": 0,
      "subnetId": ""
    }
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "volumeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [volume](#volume)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * volumeName **required** `string`: The name of the volume
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [volume](#volume)

### MountTargets_List
List all mount targets associated with the volume


```js
azure_netapp.MountTargets_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "volumeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * volumeName **required** `string`: The name of the volume
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [mountTargetList](#mounttargetlist)

### Snapshots_List
List all snapshots associated with the volume


```js
azure_netapp.Snapshots_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "volumeName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * volumeName **required** `string`: The name of the volume
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [snapshotsList](#snapshotslist)

### Snapshots_Delete
Delete snapshot


```js
azure_netapp.Snapshots_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "volumeName": "",
  "snapshotName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * volumeName **required** `string`: The name of the volume
  * snapshotName **required** `string`: The name of the mount target
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### Snapshots_Get
Get details of the specified snapshot


```js
azure_netapp.Snapshots_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "volumeName": "",
  "snapshotName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * volumeName **required** `string`: The name of the volume
  * snapshotName **required** `string`: The name of the mount target
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [snapshot](#snapshot)

### Snapshots_Update
Patch a snapshot


```js
azure_netapp.Snapshots_Update({
  "body": {},
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "volumeName": "",
  "snapshotName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [snapshotPatch](#snapshotpatch)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * volumeName **required** `string`: The name of the volume
  * snapshotName **required** `string`: The name of the mount target
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [snapshot](#snapshot)

### Snapshots_Create
Create the specified snapshot within the given volume


```js
azure_netapp.Snapshots_Create({
  "body": {
    "location": ""
  },
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "poolName": "",
  "volumeName": "",
  "snapshotName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * body **required** [snapshot](#snapshot)
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group.
  * accountName **required** `string`: The name of the NetApp account
  * poolName **required** `string`: The name of the capacity pool
  * volumeName **required** `string`: The name of the volume
  * snapshotName **required** `string`: The name of the mount target
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [snapshot](#snapshot)



## Definitions

### Dimension
* Dimension `object`: Dimension of blobs, possibly be blob type or access tier.
  * displayName `string`: Display name of dimension.
  * name `string`: Display name of dimension.

### MetricSpecification
* MetricSpecification `object`: Metric specification of operation.
  * aggregationType `string`: Aggregation type could be Average.
  * category `string`: The category this metric specification belong to, could be Capacity.
  * dimensions `array`: Dimensions of blobs, including blob type and access tier.
    * items [Dimension](#dimension)
  * displayDescription `string`: Display description of metric specification.
  * displayName `string`: Display name of metric specification.
  * fillGapWithZero `boolean`: The property to decide fill gap with zero or not.
  * name `string`: Name of metric specification.
  * resourceIdDimensionNameOverride `string`: Account Resource Id.
  * unit `string`: Unit could be Bytes or Count.

### Operation
* Operation `object`: Microsoft.NetApp REST API operation definition.
  * display `object`: Display metadata associated with the operation.
    * description `string`: Operation description.
    * operation `string`: Type of operation: get, read, delete, etc.
    * provider `string`: Service provider: Microsoft NetApp.
    * resource `string`: Resource on which the operation is performed etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}
  * origin `string`: The origin of operations.
  * properties [OperationProperties](#operationproperties)

### OperationListResult
* OperationListResult `object`: Result of the request to list Cloud Volume operations. It contains a list of operations and a URL link to get the next set of results.
  * value `array`: List of Storage operations supported by the Storage resource provider.
    * items [Operation](#operation)

### OperationProperties
* OperationProperties `object`: Properties of operation, include metric specifications.
  * serviceSpecification [ServiceSpecification](#servicespecification)

### ResourceNameAvailability
* ResourceNameAvailability `object`: Information regarding availability of a resource name.
  * isAvailable `boolean`: <code>true</code> indicates name is valid and available. <code>false</code> indicates the name is invalid, unavailable, or both.
  * message `string`: If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that resource name is already in use, and direct them to select a different name.
  * reason `string` (values: Invalid, AlreadyExists): <code>Invalid</code> indicates the name provided does not match Azure App Service naming requirements. <code>AlreadyExists</code> indicates that the name is already in use and is therefore unavailable.

### ResourceNameAvailabilityRequest
* ResourceNameAvailabilityRequest `object`: Resource name availability request content.
  * name **required** `string`: Resource name to verify.
  * resourceGroup **required** `string`: Resource group name.
  * type **required** `string` (values: Microsoft.NetApp/netAppAccounts, Microsoft.NetApp/netAppAccounts/capacityPools, Microsoft.NetApp/netAppAccounts/capacityPools/volumes, Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots): Resource type used for verification.

### ServiceSpecification
* ServiceSpecification `object`: One property of operation, include metric specifications.
  * metricSpecifications `array`: Metric specifications of operation.
    * items [MetricSpecification](#metricspecification)

### accountProperties
* accountProperties `object`: NetApp account properties
  * activeDirectories `array`: Active Directories
    * items [activeDirectory](#activedirectory)
  * provisioningState `string`: Azure lifecycle management

### activeDirectory
* activeDirectory `object`: Active Directory
  * activeDirectoryId `string`: Id of the Active Directory
  * dns `string`: Comma separated list of DNS server IP addresses for the Active Directory domain
  * domain `string`: Name of the Active Directory domain
  * organizationalUnit `string`: The Organizational Unit (OU) within the Windows Active Directory
  * password `string`: Plain text password of Active Directory domain administrator
  * smbServerName `string`: NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
  * status `string`: Status of the Active Directory
  * username `string`: Username of Active Directory domain administrator

### capacityPool
* capacityPool `object`: Capacity pool resource
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * properties **required** [poolProperties](#poolproperties)
  * tags [resourceTags](#resourcetags)
  * type `string`: Resource type

### capacityPoolList
* capacityPoolList `object`: List of capacity pool resources
  * value `array`: List of Capacity pools
    * items [capacityPool](#capacitypool)

### capacityPoolPatch
* capacityPoolPatch `object`: Capacity pool patch resource
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * properties [poolPatchProperties](#poolpatchproperties)
  * tags [resourceTags](#resourcetags)
  * type `string`: Resource type

### exportPolicyRule
* exportPolicyRule `object`: Volume Export Policy Rule
  * allowedClients `string`: Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names
  * cifs `boolean`: Allows CIFS protocol
  * nfsv3 `boolean`: Allows NFSv3 protocol
  * nfsv41 `boolean`: Allows NFSv4.1 protocol
  * ruleIndex `integer`: Order index
  * unixReadOnly `boolean`: Read only access
  * unixReadWrite `boolean`: Read and write access

### mountTarget
* mountTarget `object`: Mount Target
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * properties **required** [mountTargetProperties](#mounttargetproperties)
  * tags [resourceTags](#resourcetags)

### mountTargetList
* mountTargetList `object`: List of Mount Targets
  * value `array`: A list of Mount targets
    * items [mountTarget](#mounttarget)

### mountTargetProperties
* mountTargetProperties `object`: Mount target properties
  * endIp `string`: The end of IPv4 address range to use when creating a new mount target
  * fileSystemId **required** `string`: UUID v4 used to identify the MountTarget
  * gateway `string`: The gateway of the IPv4 address range to use when creating a new mount target
  * ipAddress `string`: The mount target's IPv4 address
  * mountTargetId `string`: UUID v4 used to identify the MountTarget
  * netmask `string`: The netmask of the IPv4 address range to use when creating a new mount target
  * provisioningState `string`: Azure lifecycle management
  * smbServerFqdn `string`: The SMB server's Fully Qualified Domain Name, FQDN
  * startIp `string`: The start of IPv4 address range to use when creating a new mount target
  * subnet `string`: The subnet

### netAppAccount
* netAppAccount `object`: NetApp account resource
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * properties [accountProperties](#accountproperties)
  * tags [resourceTags](#resourcetags)
  * type `string`: Resource type

### netAppAccountList
* netAppAccountList `object`: List of NetApp account resources
  * value `array`: Multiple NetApp accounts
    * items [netAppAccount](#netappaccount)

### netAppAccountPatch
* netAppAccountPatch `object`: NetApp account patch resource
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * properties [accountProperties](#accountproperties)
  * tags [resourceTags](#resourcetags)
  * type `string`: Resource type

### poolPatchProperties
* poolPatchProperties `object`: Patchable pool properties
  * serviceLevel `string` (values: Standard, Premium, Ultra): The service level of the file system
  * size `integer`: Provisioned size of the pool (in bytes). Allowed values are in 4TiB chunks (value must be multiply of 4398046511104).

### poolProperties
* poolProperties `object`: Pool properties
  * poolId `string`: UUID v4 used to identify the Pool
  * provisioningState `string`: Azure lifecycle management
  * serviceLevel **required** `string` (values: Standard, Premium, Ultra): The service level of the file system
  * size **required** `integer`: Provisioned size of the pool (in bytes). Allowed values are in 4TiB chunks (value must be multiply of 4398046511104).

### resourceTags
* resourceTags `object`: Resource tags

### snapshot
* snapshot `object`: Snapshot of a Volume
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * properties [snapshotProperties](#snapshotproperties)
  * tags [resourceTags](#resourcetags)
  * type `string`: Resource type

### snapshotPatch
* snapshotPatch `object`: Snapshot patch
  * tags [resourceTags](#resourcetags)

### snapshotProperties
* snapshotProperties `object`: Snapshot properties
  * created `string`: The creation date of the snapshot
  * fileSystemId `string`: UUID v4 used to identify the FileSystem
  * provisioningState `string`: Azure lifecycle management
  * snapshotId `string`: UUID v4 used to identify the Snapshot

### snapshotsList
* snapshotsList `object`: List of Snapshots
  * value `array`: A list of Snapshots
    * items [snapshot](#snapshot)

### volume
* volume `object`: Volume resource
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * properties **required** [volumeProperties](#volumeproperties)
  * tags [resourceTags](#resourcetags)
  * type `string`: Resource type

### volumeList
* volumeList `object`: List of volume resources
  * value `array`: List of volumes
    * items [volume](#volume)

### volumePatch
* volumePatch `object`: Volume patch resource
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * properties [volumePatchProperties](#volumepatchproperties)
  * tags [resourceTags](#resourcetags)
  * type `string`: Resource type

### volumePatchProperties
* volumePatchProperties `object`: Patchable volume properties
  * exportPolicy `object`: Set of export policy rules
    * rules `array`: Export policy rule
      * items [exportPolicyRule](#exportpolicyrule)
  * serviceLevel `string` (values: Standard, Premium, Ultra): The service level of the file system
  * usageThreshold `integer`: Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.

### volumeProperties
* volumeProperties `object`: Volume properties
  * baremetalTenantId `string`: Unique Baremetal Tenant Identifier.
  * creationToken **required** `string`: A unique file path for the volume. Used when creating mount targets
  * exportPolicy `object`: Set of export policy rules
    * rules `array`: Export policy rule
      * items [exportPolicyRule](#exportpolicyrule)
  * fileSystemId `string`: Unique FileSystem Identifier.
  * mountTargets: List of mount targets
    * items [mountTargetList](#mounttargetlist)
  * protocolTypes `array`: Set of protocol types
    * items `string`
  * provisioningState `string`: Azure lifecycle management
  * serviceLevel `string` (values: Standard, Premium, Ultra): The service level of the file system
  * snapshotId `string`: UUID v4 or resource identifier used to identify the Snapshot.
  * subnetId **required** `string`: The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
  * usageThreshold **required** `integer`: Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.


