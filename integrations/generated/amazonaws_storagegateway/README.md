# @datafire/amazonaws_storagegateway

Client library for AWS Storage Gateway

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_storagegateway
```
```js
let amazonaws_storagegateway = require('@datafire/amazonaws_storagegateway').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Storage Gateway Service</fullname> <p>AWS Storage Gateway is the service that connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between an organization's on-premises IT environment and the AWS storage infrastructure. The service enables you to securely upload data to the AWS Cloud for cost effective backup and rapid disaster recovery.</p> <p>Use the following links to get started using the <i>AWS Storage Gateway Service API Reference</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders">AWS Storage Gateway required request headers</a>: Describes the required headers that you must send with every POST request to AWS Storage Gateway.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests">Signing requests</a>: AWS Storage Gateway requires that you authenticate every request you send; this topic describes how sign such a request.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses">Error responses</a>: Provides reference information about AWS Storage Gateway errors.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html">Operations in AWS Storage Gateway</a>: Contains detailed descriptions of all AWS Storage Gateway operations, their request parameters, response elements, possible errors, and examples of requests and responses.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">AWS Storage Gateway endpoints and quotas</a>: Provides a list of each AWS Region and the endpoints available for use with AWS Storage Gateway.</p> </li> </ul> <note> <p>AWS Storage Gateway resource IDs are in uppercase. When you use these resource IDs with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change your resource ID to lowercase to use it with the EC2 API. For example, in Storage Gateway the ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use this ID with the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>. Otherwise, the EC2 API might not behave as expected.</p> </note> <important> <p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway volumes are changing to a longer format. Starting in December 2016, all new volumes and snapshots will be created with a 17-character string. Starting in April 2016, you will be able to use these longer IDs so you can test your systems with the new format. For more information, see <a href="http://aws.amazon.com/ec2/faqs/#longer-ids">Longer EC2 and EBS resource IDs</a>.</p> <p>For example, a volume Amazon Resource Name (ARN) with the longer volume ID format looks like the following:</p> <p> <code>arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG</code>.</p> <p>A snapshot ID with the longer ID format looks like the following: <code>snap-78e226633445566ee</code>.</p> <p>For more information, see <a href="http://forums.aws.amazon.com/ann.jspa?annID=3557">Announcement: Heads-up – Longer AWS Storage Gateway volume and snapshot IDs coming in 2016</a>.</p> </important>

## Actions

### ActivateGateway



```js
amazonaws_storagegateway.ActivateGateway({
  "ActivationKey": null,
  "GatewayName": null,
  "GatewayTimezone": null,
  "GatewayRegion": null
}, context)
```

#### Input
* input `object`
  * ActivationKey **required**
  * GatewayName **required**
  * GatewayRegion **required**
  * GatewayTimezone **required**
  * GatewayType
  * MediumChangerType
  * Tags
    * items [Tag](#tag)
  * TapeDriveType

#### Output
* output [ActivateGatewayOutput](#activategatewayoutput)

### AddCache



```js
amazonaws_storagegateway.AddCache({
  "GatewayARN": "",
  "DiskIds": null
}, context)
```

#### Input
* input `object`
  * DiskIds **required**
    * items [DiskId](#diskid)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [AddCacheOutput](#addcacheoutput)

### AddTagsToResource



```js
amazonaws_storagegateway.AddTagsToResource({
  "ResourceARN": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [AddTagsToResourceOutput](#addtagstoresourceoutput)

### AddUploadBuffer



```js
amazonaws_storagegateway.AddUploadBuffer({
  "GatewayARN": "",
  "DiskIds": null
}, context)
```

#### Input
* input `object`
  * DiskIds **required**
    * items [DiskId](#diskid)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [AddUploadBufferOutput](#adduploadbufferoutput)

### AddWorkingStorage



```js
amazonaws_storagegateway.AddWorkingStorage({
  "GatewayARN": "",
  "DiskIds": null
}, context)
```

#### Input
* input `object`
  * DiskIds **required**
    * items [DiskId](#diskid)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [AddWorkingStorageOutput](#addworkingstorageoutput)

### AssignTapePool



```js
amazonaws_storagegateway.AssignTapePool({
  "TapeARN": null,
  "PoolId": null
}, context)
```

#### Input
* input `object`
  * BypassGovernanceRetention
  * PoolId **required**
  * TapeARN **required**

#### Output
* output [AssignTapePoolOutput](#assigntapepooloutput)

### AttachVolume



```js
amazonaws_storagegateway.AttachVolume({
  "GatewayARN": null,
  "VolumeARN": null,
  "NetworkInterfaceId": null
}, context)
```

#### Input
* input `object`
  * DiskId
  * GatewayARN **required**
  * NetworkInterfaceId **required**
  * TargetName
  * VolumeARN **required**

#### Output
* output [AttachVolumeOutput](#attachvolumeoutput)

### CancelArchival



```js
amazonaws_storagegateway.CancelArchival({
  "GatewayARN": "",
  "TapeARN": null
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required**

#### Output
* output [CancelArchivalOutput](#cancelarchivaloutput)

### CancelRetrieval



```js
amazonaws_storagegateway.CancelRetrieval({
  "GatewayARN": "",
  "TapeARN": null
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required**

#### Output
* output [CancelRetrievalOutput](#cancelretrievaloutput)

### CreateCachediSCSIVolume



```js
amazonaws_storagegateway.CreateCachediSCSIVolume({
  "GatewayARN": "",
  "VolumeSizeInBytes": null,
  "TargetName": null,
  "NetworkInterfaceId": null,
  "ClientToken": null
}, context)
```

#### Input
* input `object`
  * ClientToken **required**
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * KMSEncrypted
  * KMSKey
  * NetworkInterfaceId **required**
  * SnapshotId
  * SourceVolumeARN
  * Tags
    * items [Tag](#tag)
  * TargetName **required**
  * VolumeSizeInBytes **required**

#### Output
* output [CreateCachediSCSIVolumeOutput](#createcachediscsivolumeoutput)

### CreateNFSFileShare



```js
amazonaws_storagegateway.CreateNFSFileShare({
  "ClientToken": null,
  "GatewayARN": null,
  "Role": null,
  "LocationARN": null
}, context)
```

#### Input
* input `object`
  * CacheAttributes
    * CacheStaleTimeoutInSeconds
  * ClientList
    * items [IPV4AddressCIDR](#ipv4addresscidr)
  * ClientToken **required**
  * DefaultStorageClass
  * FileShareName
  * GatewayARN **required**
  * GuessMIMETypeEnabled
  * KMSEncrypted
  * KMSKey
  * LocationARN **required**
  * NFSFileShareDefaults
    * DirectoryMode
    * FileMode
    * GroupId
    * OwnerId
  * NotificationPolicy
  * ObjectACL
  * ReadOnly
  * RequesterPays
  * Role **required**
  * Squash
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateNFSFileShareOutput](#createnfsfileshareoutput)

### CreateSMBFileShare



```js
amazonaws_storagegateway.CreateSMBFileShare({
  "ClientToken": null,
  "GatewayARN": null,
  "Role": null,
  "LocationARN": null
}, context)
```

#### Input
* input `object`
  * AccessBasedEnumeration
  * AdminUserList
    * items [FileShareUser](#fileshareuser)
  * AuditDestinationARN
  * Authentication
  * CacheAttributes
    * CacheStaleTimeoutInSeconds
  * CaseSensitivity
  * ClientToken **required**
  * DefaultStorageClass
  * FileShareName
  * GatewayARN **required**
  * GuessMIMETypeEnabled
  * InvalidUserList
    * items [FileShareUser](#fileshareuser)
  * KMSEncrypted
  * KMSKey
  * LocationARN **required**
  * NotificationPolicy
  * ObjectACL
  * ReadOnly
  * RequesterPays
  * Role **required**
  * SMBACLEnabled
  * Tags
    * items [Tag](#tag)
  * ValidUserList
    * items [FileShareUser](#fileshareuser)

#### Output
* output [CreateSMBFileShareOutput](#createsmbfileshareoutput)

### CreateSnapshot



```js
amazonaws_storagegateway.CreateSnapshot({
  "VolumeARN": null,
  "SnapshotDescription": null
}, context)
```

#### Input
* input `object`
  * SnapshotDescription **required**
  * Tags
    * items [Tag](#tag)
  * VolumeARN **required**

#### Output
* output [CreateSnapshotOutput](#createsnapshotoutput)

### CreateSnapshotFromVolumeRecoveryPoint



```js
amazonaws_storagegateway.CreateSnapshotFromVolumeRecoveryPoint({
  "VolumeARN": null,
  "SnapshotDescription": null
}, context)
```

#### Input
* input `object`
  * SnapshotDescription **required**
  * Tags
    * items [Tag](#tag)
  * VolumeARN **required**

#### Output
* output [CreateSnapshotFromVolumeRecoveryPointOutput](#createsnapshotfromvolumerecoverypointoutput)

### CreateStorediSCSIVolume



```js
amazonaws_storagegateway.CreateStorediSCSIVolume({
  "GatewayARN": "",
  "DiskId": null,
  "PreserveExistingData": null,
  "TargetName": null,
  "NetworkInterfaceId": null
}, context)
```

#### Input
* input `object`
  * DiskId **required**
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * KMSEncrypted
  * KMSKey
  * NetworkInterfaceId **required**
  * PreserveExistingData **required**
  * SnapshotId
  * Tags
    * items [Tag](#tag)
  * TargetName **required**

#### Output
* output [CreateStorediSCSIVolumeOutput](#createstorediscsivolumeoutput)

### CreateTapePool



```js
amazonaws_storagegateway.CreateTapePool({
  "PoolName": null,
  "StorageClass": null
}, context)
```

#### Input
* input `object`
  * PoolName **required**
  * RetentionLockTimeInDays
  * RetentionLockType
  * StorageClass **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateTapePoolOutput](#createtapepooloutput)

### CreateTapeWithBarcode



```js
amazonaws_storagegateway.CreateTapeWithBarcode({
  "GatewayARN": null,
  "TapeSizeInBytes": null,
  "TapeBarcode": null
}, context)
```

#### Input
* input `object`
  * GatewayARN **required**
  * KMSEncrypted
  * KMSKey
  * PoolId
  * Tags
    * items [Tag](#tag)
  * TapeBarcode **required**
  * TapeSizeInBytes **required**
  * Worm

#### Output
* output [CreateTapeWithBarcodeOutput](#createtapewithbarcodeoutput)

### CreateTapes



```js
amazonaws_storagegateway.CreateTapes({
  "GatewayARN": null,
  "TapeSizeInBytes": null,
  "ClientToken": null,
  "NumTapesToCreate": null,
  "TapeBarcodePrefix": null
}, context)
```

#### Input
* input `object`
  * ClientToken **required**
  * GatewayARN **required**
  * KMSEncrypted
  * KMSKey
  * NumTapesToCreate **required**
  * PoolId
  * Tags
    * items [Tag](#tag)
  * TapeBarcodePrefix **required**
  * TapeSizeInBytes **required**
  * Worm

#### Output
* output [CreateTapesOutput](#createtapesoutput)

### DeleteAutomaticTapeCreationPolicy



```js
amazonaws_storagegateway.DeleteAutomaticTapeCreationPolicy({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [DeleteAutomaticTapeCreationPolicyOutput](#deleteautomatictapecreationpolicyoutput)

### DeleteBandwidthRateLimit



```js
amazonaws_storagegateway.DeleteBandwidthRateLimit({
  "GatewayARN": "",
  "BandwidthType": null
}, context)
```

#### Input
* input `object`
  * BandwidthType **required**
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [DeleteBandwidthRateLimitOutput](#deletebandwidthratelimitoutput)

### DeleteChapCredentials



```js
amazonaws_storagegateway.DeleteChapCredentials({
  "TargetARN": null,
  "InitiatorName": null
}, context)
```

#### Input
* input `object`
  * InitiatorName **required**
  * TargetARN **required**

#### Output
* output [DeleteChapCredentialsOutput](#deletechapcredentialsoutput)

### DeleteFileShare



```js
amazonaws_storagegateway.DeleteFileShare({
  "FileShareARN": null
}, context)
```

#### Input
* input `object`
  * FileShareARN **required**
  * ForceDelete

#### Output
* output [DeleteFileShareOutput](#deletefileshareoutput)

### DeleteGateway



```js
amazonaws_storagegateway.DeleteGateway({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [DeleteGatewayOutput](#deletegatewayoutput)

### DeleteSnapshotSchedule



```js
amazonaws_storagegateway.DeleteSnapshotSchedule({
  "VolumeARN": null
}, context)
```

#### Input
* input `object`
  * VolumeARN **required**

#### Output
* output [DeleteSnapshotScheduleOutput](#deletesnapshotscheduleoutput)

### DeleteTape



```js
amazonaws_storagegateway.DeleteTape({
  "GatewayARN": null,
  "TapeARN": null
}, context)
```

#### Input
* input `object`
  * BypassGovernanceRetention
  * GatewayARN **required**
  * TapeARN **required**

#### Output
* output [DeleteTapeOutput](#deletetapeoutput)

### DeleteTapeArchive



```js
amazonaws_storagegateway.DeleteTapeArchive({
  "TapeARN": null
}, context)
```

#### Input
* input `object`
  * BypassGovernanceRetention
  * TapeARN **required**

#### Output
* output [DeleteTapeArchiveOutput](#deletetapearchiveoutput)

### DeleteTapePool



```js
amazonaws_storagegateway.DeleteTapePool({
  "PoolARN": null
}, context)
```

#### Input
* input `object`
  * PoolARN **required**

#### Output
* output [DeleteTapePoolOutput](#deletetapepooloutput)

### DeleteVolume



```js
amazonaws_storagegateway.DeleteVolume({
  "VolumeARN": null
}, context)
```

#### Input
* input `object`
  * VolumeARN **required**

#### Output
* output [DeleteVolumeOutput](#deletevolumeoutput)

### DescribeAvailabilityMonitorTest



```js
amazonaws_storagegateway.DescribeAvailabilityMonitorTest({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [DescribeAvailabilityMonitorTestOutput](#describeavailabilitymonitortestoutput)

### DescribeBandwidthRateLimit



```js
amazonaws_storagegateway.DescribeBandwidthRateLimit({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [DescribeBandwidthRateLimitOutput](#describebandwidthratelimitoutput)

### DescribeBandwidthRateLimitSchedule



```js
amazonaws_storagegateway.DescribeBandwidthRateLimitSchedule({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [DescribeBandwidthRateLimitScheduleOutput](#describebandwidthratelimitscheduleoutput)

### DescribeCache



```js
amazonaws_storagegateway.DescribeCache({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [DescribeCacheOutput](#describecacheoutput)

### DescribeCachediSCSIVolumes



```js
amazonaws_storagegateway.DescribeCachediSCSIVolumes({
  "VolumeARNs": null
}, context)
```

#### Input
* input `object`
  * VolumeARNs **required**
    * items [VolumeARN](#volumearn)

#### Output
* output [DescribeCachediSCSIVolumesOutput](#describecachediscsivolumesoutput)

### DescribeChapCredentials



```js
amazonaws_storagegateway.DescribeChapCredentials({
  "TargetARN": null
}, context)
```

#### Input
* input `object`
  * TargetARN **required**

#### Output
* output [DescribeChapCredentialsOutput](#describechapcredentialsoutput)

### DescribeGatewayInformation



```js
amazonaws_storagegateway.DescribeGatewayInformation({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [DescribeGatewayInformationOutput](#describegatewayinformationoutput)

### DescribeMaintenanceStartTime



```js
amazonaws_storagegateway.DescribeMaintenanceStartTime({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [DescribeMaintenanceStartTimeOutput](#describemaintenancestarttimeoutput)

### DescribeNFSFileShares



```js
amazonaws_storagegateway.DescribeNFSFileShares({
  "FileShareARNList": null
}, context)
```

#### Input
* input `object`
  * FileShareARNList **required**
    * items [FileShareARN](#filesharearn)

#### Output
* output [DescribeNFSFileSharesOutput](#describenfsfilesharesoutput)

### DescribeSMBFileShares



```js
amazonaws_storagegateway.DescribeSMBFileShares({
  "FileShareARNList": null
}, context)
```

#### Input
* input `object`
  * FileShareARNList **required**
    * items [FileShareARN](#filesharearn)

#### Output
* output [DescribeSMBFileSharesOutput](#describesmbfilesharesoutput)

### DescribeSMBSettings



```js
amazonaws_storagegateway.DescribeSMBSettings({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [DescribeSMBSettingsOutput](#describesmbsettingsoutput)

### DescribeSnapshotSchedule



```js
amazonaws_storagegateway.DescribeSnapshotSchedule({
  "VolumeARN": null
}, context)
```

#### Input
* input `object`
  * VolumeARN **required**

#### Output
* output [DescribeSnapshotScheduleOutput](#describesnapshotscheduleoutput)

### DescribeStorediSCSIVolumes



```js
amazonaws_storagegateway.DescribeStorediSCSIVolumes({
  "VolumeARNs": null
}, context)
```

#### Input
* input `object`
  * VolumeARNs **required**
    * items [VolumeARN](#volumearn)

#### Output
* output [DescribeStorediSCSIVolumesOutput](#describestorediscsivolumesoutput)

### DescribeTapeArchives



```js
amazonaws_storagegateway.DescribeTapeArchives({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * Limit
  * Marker
  * TapeARNs
    * items [TapeARN](#tapearn)

#### Output
* output [DescribeTapeArchivesOutput](#describetapearchivesoutput)

### DescribeTapeRecoveryPoints



```js
amazonaws_storagegateway.DescribeTapeRecoveryPoints({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * Limit
  * Marker

#### Output
* output [DescribeTapeRecoveryPointsOutput](#describetaperecoverypointsoutput)

### DescribeTapes



```js
amazonaws_storagegateway.DescribeTapes({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * Limit
  * Marker
  * TapeARNs
    * items [TapeARN](#tapearn)

#### Output
* output [DescribeTapesOutput](#describetapesoutput)

### DescribeUploadBuffer



```js
amazonaws_storagegateway.DescribeUploadBuffer({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [DescribeUploadBufferOutput](#describeuploadbufferoutput)

### DescribeVTLDevices



```js
amazonaws_storagegateway.DescribeVTLDevices({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * Limit
  * Marker
  * VTLDeviceARNs
    * items [VTLDeviceARN](#vtldevicearn)

#### Output
* output [DescribeVTLDevicesOutput](#describevtldevicesoutput)

### DescribeWorkingStorage



```js
amazonaws_storagegateway.DescribeWorkingStorage({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [DescribeWorkingStorageOutput](#describeworkingstorageoutput)

### DetachVolume



```js
amazonaws_storagegateway.DetachVolume({
  "VolumeARN": null
}, context)
```

#### Input
* input `object`
  * ForceDetach
  * VolumeARN **required**

#### Output
* output [DetachVolumeOutput](#detachvolumeoutput)

### DisableGateway



```js
amazonaws_storagegateway.DisableGateway({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [DisableGatewayOutput](#disablegatewayoutput)

### JoinDomain



```js
amazonaws_storagegateway.JoinDomain({
  "GatewayARN": null,
  "DomainName": null,
  "UserName": null,
  "Password": null
}, context)
```

#### Input
* input `object`
  * DomainControllers
    * items [Host](#host)
  * DomainName **required**
  * GatewayARN **required**
  * OrganizationalUnit
  * Password **required**
  * TimeoutInSeconds
  * UserName **required**

#### Output
* output [JoinDomainOutput](#joindomainoutput)

### ListAutomaticTapeCreationPolicies



```js
amazonaws_storagegateway.ListAutomaticTapeCreationPolicies({}, context)
```

#### Input
* input `object`
  * GatewayARN [GatewayARN](#gatewayarn)

#### Output
* output [ListAutomaticTapeCreationPoliciesOutput](#listautomatictapecreationpoliciesoutput)

### ListFileShares



```js
amazonaws_storagegateway.ListFileShares({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * GatewayARN
  * Limit
  * Marker

#### Output
* output [ListFileSharesOutput](#listfilesharesoutput)

### ListGateways



```js
amazonaws_storagegateway.ListGateways({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * Limit
  * Marker

#### Output
* output [ListGatewaysOutput](#listgatewaysoutput)

### ListLocalDisks



```js
amazonaws_storagegateway.ListLocalDisks({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [ListLocalDisksOutput](#listlocaldisksoutput)

### ListTagsForResource



```js
amazonaws_storagegateway.ListTagsForResource({
  "ResourceARN": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * Limit
  * Marker
  * ResourceARN **required**

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### ListTapePools



```js
amazonaws_storagegateway.ListTapePools({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * Limit
  * Marker
  * PoolARNs
    * items [PoolARN](#poolarn)

#### Output
* output [ListTapePoolsOutput](#listtapepoolsoutput)

### ListTapes



```js
amazonaws_storagegateway.ListTapes({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * Limit
  * Marker
  * TapeARNs [TapeARNs](#tapearns)

#### Output
* output [ListTapesOutput](#listtapesoutput)

### ListVolumeInitiators



```js
amazonaws_storagegateway.ListVolumeInitiators({
  "VolumeARN": null
}, context)
```

#### Input
* input `object`
  * VolumeARN **required**

#### Output
* output [ListVolumeInitiatorsOutput](#listvolumeinitiatorsoutput)

### ListVolumeRecoveryPoints



```js
amazonaws_storagegateway.ListVolumeRecoveryPoints({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [ListVolumeRecoveryPointsOutput](#listvolumerecoverypointsoutput)

### ListVolumes



```js
amazonaws_storagegateway.ListVolumes({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * Marker `string`
  * GatewayARN [GatewayARN](#gatewayarn)
  * Limit
  * Marker

#### Output
* output [ListVolumesOutput](#listvolumesoutput)

### NotifyWhenUploaded



```js
amazonaws_storagegateway.NotifyWhenUploaded({
  "FileShareARN": ""
}, context)
```

#### Input
* input `object`
  * FileShareARN **required** [FileShareARN](#filesharearn)

#### Output
* output [NotifyWhenUploadedOutput](#notifywhenuploadedoutput)

### RefreshCache



```js
amazonaws_storagegateway.RefreshCache({
  "FileShareARN": null
}, context)
```

#### Input
* input `object`
  * FileShareARN **required**
  * FolderList
    * items [Folder](#folder)
  * Recursive

#### Output
* output [RefreshCacheOutput](#refreshcacheoutput)

### RemoveTagsFromResource



```js
amazonaws_storagegateway.RemoveTagsFromResource({
  "ResourceARN": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [RemoveTagsFromResourceOutput](#removetagsfromresourceoutput)

### ResetCache



```js
amazonaws_storagegateway.ResetCache({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [ResetCacheOutput](#resetcacheoutput)

### RetrieveTapeArchive



```js
amazonaws_storagegateway.RetrieveTapeArchive({
  "TapeARN": null,
  "GatewayARN": null
}, context)
```

#### Input
* input `object`
  * GatewayARN **required**
  * TapeARN **required**

#### Output
* output [RetrieveTapeArchiveOutput](#retrievetapearchiveoutput)

### RetrieveTapeRecoveryPoint



```js
amazonaws_storagegateway.RetrieveTapeRecoveryPoint({
  "TapeARN": null,
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required**

#### Output
* output [RetrieveTapeRecoveryPointOutput](#retrievetaperecoverypointoutput)

### SetLocalConsolePassword



```js
amazonaws_storagegateway.SetLocalConsolePassword({
  "GatewayARN": "",
  "LocalConsolePassword": null
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * LocalConsolePassword **required**

#### Output
* output [SetLocalConsolePasswordOutput](#setlocalconsolepasswordoutput)

### SetSMBGuestPassword



```js
amazonaws_storagegateway.SetSMBGuestPassword({
  "GatewayARN": null,
  "Password": null
}, context)
```

#### Input
* input `object`
  * GatewayARN **required**
  * Password **required**

#### Output
* output [SetSMBGuestPasswordOutput](#setsmbguestpasswordoutput)

### ShutdownGateway



```js
amazonaws_storagegateway.ShutdownGateway({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [ShutdownGatewayOutput](#shutdowngatewayoutput)

### StartAvailabilityMonitorTest



```js
amazonaws_storagegateway.StartAvailabilityMonitorTest({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [StartAvailabilityMonitorTestOutput](#startavailabilitymonitortestoutput)

### StartGateway



```js
amazonaws_storagegateway.StartGateway({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [StartGatewayOutput](#startgatewayoutput)

### UpdateAutomaticTapeCreationPolicy



```js
amazonaws_storagegateway.UpdateAutomaticTapeCreationPolicy({
  "AutomaticTapeCreationRules": null,
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * AutomaticTapeCreationRules **required**
    * items [AutomaticTapeCreationRule](#automatictapecreationrule)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [UpdateAutomaticTapeCreationPolicyOutput](#updateautomatictapecreationpolicyoutput)

### UpdateBandwidthRateLimit



```js
amazonaws_storagegateway.UpdateBandwidthRateLimit({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * AverageDownloadRateLimitInBitsPerSec
  * AverageUploadRateLimitInBitsPerSec
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [UpdateBandwidthRateLimitOutput](#updatebandwidthratelimitoutput)

### UpdateBandwidthRateLimitSchedule



```js
amazonaws_storagegateway.UpdateBandwidthRateLimitSchedule({
  "GatewayARN": "",
  "BandwidthRateLimitIntervals": null
}, context)
```

#### Input
* input `object`
  * BandwidthRateLimitIntervals **required**
    * items [BandwidthRateLimitInterval](#bandwidthratelimitinterval)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [UpdateBandwidthRateLimitScheduleOutput](#updatebandwidthratelimitscheduleoutput)

### UpdateChapCredentials



```js
amazonaws_storagegateway.UpdateChapCredentials({
  "TargetARN": null,
  "SecretToAuthenticateInitiator": null,
  "InitiatorName": null
}, context)
```

#### Input
* input `object`
  * InitiatorName **required**
  * SecretToAuthenticateInitiator **required**
  * SecretToAuthenticateTarget
  * TargetARN **required**

#### Output
* output [UpdateChapCredentialsOutput](#updatechapcredentialsoutput)

### UpdateGatewayInformation



```js
amazonaws_storagegateway.UpdateGatewayInformation({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * CloudWatchLogGroupARN
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * GatewayName [GatewayName](#gatewayname)
  * GatewayTimezone

#### Output
* output [UpdateGatewayInformationOutput](#updategatewayinformationoutput)

### UpdateGatewaySoftwareNow



```js
amazonaws_storagegateway.UpdateGatewaySoftwareNow({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [UpdateGatewaySoftwareNowOutput](#updategatewaysoftwarenowoutput)

### UpdateMaintenanceStartTime



```js
amazonaws_storagegateway.UpdateMaintenanceStartTime({
  "GatewayARN": "",
  "HourOfDay": null,
  "MinuteOfHour": null
}, context)
```

#### Input
* input `object`
  * DayOfMonth
  * DayOfWeek
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * HourOfDay **required**
  * MinuteOfHour **required**

#### Output
* output [UpdateMaintenanceStartTimeOutput](#updatemaintenancestarttimeoutput)

### UpdateNFSFileShare



```js
amazonaws_storagegateway.UpdateNFSFileShare({
  "FileShareARN": null
}, context)
```

#### Input
* input `object`
  * CacheAttributes
    * CacheStaleTimeoutInSeconds
  * ClientList
    * items [IPV4AddressCIDR](#ipv4addresscidr)
  * DefaultStorageClass
  * FileShareARN **required**
  * FileShareName
  * GuessMIMETypeEnabled
  * KMSEncrypted
  * KMSKey
  * NFSFileShareDefaults
    * DirectoryMode
    * FileMode
    * GroupId
    * OwnerId
  * NotificationPolicy
  * ObjectACL
  * ReadOnly
  * RequesterPays
  * Squash

#### Output
* output [UpdateNFSFileShareOutput](#updatenfsfileshareoutput)

### UpdateSMBFileShare



```js
amazonaws_storagegateway.UpdateSMBFileShare({
  "FileShareARN": null
}, context)
```

#### Input
* input `object`
  * AccessBasedEnumeration
  * AdminUserList
    * items [FileShareUser](#fileshareuser)
  * AuditDestinationARN
  * CacheAttributes
    * CacheStaleTimeoutInSeconds
  * CaseSensitivity
  * DefaultStorageClass
  * FileShareARN **required**
  * FileShareName
  * GuessMIMETypeEnabled
  * InvalidUserList
    * items [FileShareUser](#fileshareuser)
  * KMSEncrypted
  * KMSKey
  * NotificationPolicy
  * ObjectACL
  * ReadOnly
  * RequesterPays
  * SMBACLEnabled
  * ValidUserList
    * items [FileShareUser](#fileshareuser)

#### Output
* output [UpdateSMBFileShareOutput](#updatesmbfileshareoutput)

### UpdateSMBFileShareVisibility



```js
amazonaws_storagegateway.UpdateSMBFileShareVisibility({
  "GatewayARN": "",
  "FileSharesVisible": null
}, context)
```

#### Input
* input `object`
  * FileSharesVisible **required**
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [UpdateSMBFileShareVisibilityOutput](#updatesmbfilesharevisibilityoutput)

### UpdateSMBSecurityStrategy



```js
amazonaws_storagegateway.UpdateSMBSecurityStrategy({
  "GatewayARN": "",
  "SMBSecurityStrategy": null
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * SMBSecurityStrategy **required**

#### Output
* output [UpdateSMBSecurityStrategyOutput](#updatesmbsecuritystrategyoutput)

### UpdateSnapshotSchedule



```js
amazonaws_storagegateway.UpdateSnapshotSchedule({
  "VolumeARN": null,
  "StartAt": null,
  "RecurrenceInHours": null
}, context)
```

#### Input
* input `object`
  * Description
  * RecurrenceInHours **required**
  * StartAt **required**
  * Tags
    * items [Tag](#tag)
  * VolumeARN **required**

#### Output
* output [UpdateSnapshotScheduleOutput](#updatesnapshotscheduleoutput)

### UpdateVTLDeviceType



```js
amazonaws_storagegateway.UpdateVTLDeviceType({
  "VTLDeviceARN": null,
  "DeviceType": null
}, context)
```

#### Input
* input `object`
  * DeviceType **required**
  * VTLDeviceARN **required**

#### Output
* output [UpdateVTLDeviceTypeOutput](#updatevtldevicetypeoutput)



## Definitions

### ActivateGatewayInput
* ActivateGatewayInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>ActivateGatewayInput$ActivationKey</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayName</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayRegion</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayTimezone</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$MediumChangerType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$TapeDriveType</a> </p> </li> </ul>
  * ActivationKey **required**
  * GatewayName **required**
  * GatewayRegion **required**
  * GatewayTimezone **required**
  * GatewayType
  * MediumChangerType
  * Tags
    * items [Tag](#tag)
  * TapeDriveType

### ActivateGatewayOutput
* ActivateGatewayOutput `object`: <p>AWS Storage Gateway returns the Amazon Resource Name (ARN) of the activated gateway. It is a string made of information such as your account, gateway name, and AWS Region. This ARN is used to reference the gateway in other API operations as well as resource-based authorization.</p> <note> <p>For gateways activated prior to September 02, 2015, the gateway ARN contains the gateway name rather than the gateway ID. Changing the name of the gateway has no effect on the gateway ARN.</p> </note>
  * GatewayARN [GatewayARN](#gatewayarn)

### ActivationKey
* ActivationKey `string`

### ActiveDirectoryStatus
* ActiveDirectoryStatus `string` (values: ACCESS_DENIED, DETACHED, JOINED, JOINING, NETWORK_ERROR, TIMEOUT, UNKNOWN_ERROR)

### AddCacheInput
* AddCacheInput `object`
  * DiskIds **required**
    * items [DiskId](#diskid)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### AddCacheOutput
* AddCacheOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### AddTagsToResourceInput
* AddTagsToResourceInput `object`: AddTagsToResourceInput
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### AddTagsToResourceOutput
* AddTagsToResourceOutput `object`: AddTagsToResourceOutput
  * ResourceARN

### AddUploadBufferInput
* AddUploadBufferInput `object`
  * DiskIds **required**
    * items [DiskId](#diskid)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### AddUploadBufferOutput
* AddUploadBufferOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### AddWorkingStorageInput
* AddWorkingStorageInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>AddWorkingStorageInput$DiskIds</a> </p> </li> </ul>
  * DiskIds **required**
    * items [DiskId](#diskid)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### AddWorkingStorageOutput
* AddWorkingStorageOutput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway for which working storage was configured.
  * GatewayARN [GatewayARN](#gatewayarn)

### AssignTapePoolInput
* AssignTapePoolInput `object`
  * BypassGovernanceRetention
  * PoolId **required**
  * TapeARN **required**

### AssignTapePoolOutput
* AssignTapePoolOutput `object`
  * TapeARN

### AttachVolumeInput
* AttachVolumeInput `object`: AttachVolumeInput
  * DiskId
  * GatewayARN **required**
  * NetworkInterfaceId **required**
  * TargetName
  * VolumeARN **required**

### AttachVolumeOutput
* AttachVolumeOutput `object`: AttachVolumeOutput
  * TargetARN
  * VolumeARN

### AuditDestinationARN
* AuditDestinationARN `string`

### Authentication
* Authentication `string`: <p>The authentication method of the file share. The default is <code>ActiveDirectory</code>.</p> <p>Valid Values: <code>ActiveDirectory</code> | <code>GuestAccess</code> </p>

### AutomaticTapeCreationPolicyInfo
* AutomaticTapeCreationPolicyInfo `object`: Information about the gateway's automatic tape creation policies, including the automatic tape creation rules and the gateway that is using the policies.
  * AutomaticTapeCreationRules
    * items [AutomaticTapeCreationRule](#automatictapecreationrule)
  * GatewayARN [GatewayARN](#gatewayarn)

### AutomaticTapeCreationPolicyInfos
* AutomaticTapeCreationPolicyInfos `array`
  * items [AutomaticTapeCreationPolicyInfo](#automatictapecreationpolicyinfo)

### AutomaticTapeCreationRule
* AutomaticTapeCreationRule `object`: An automatic tape creation policy consists of automatic tape creation rules where each rule defines when and how to create new tapes. For more information about automatic tape creation, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateTapes.html#CreateTapesAutomatically">Creating Tapes Automatically</a>.
  * MinimumNumTapes **required**
  * PoolId **required**
  * TapeBarcodePrefix **required**
  * TapeSizeInBytes **required**
  * Worm

### AutomaticTapeCreationRules
* AutomaticTapeCreationRules `array`
  * items [AutomaticTapeCreationRule](#automatictapecreationrule)

### AvailabilityMonitorTestStatus
* AvailabilityMonitorTestStatus `string` (values: COMPLETE, FAILED, PENDING)

### BandwidthDownloadRateLimit
* BandwidthDownloadRateLimit `integer`

### BandwidthRateLimitInterval
* BandwidthRateLimitInterval `object`:  Describes a bandwidth rate limit interval for a gateway. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both. 
  * AverageDownloadRateLimitInBitsPerSec
  * AverageUploadRateLimitInBitsPerSec
  * DaysOfWeek **required**
    * items [DayOfWeek](#dayofweek)
  * EndHourOfDay **required**
  * EndMinuteOfHour **required**
  * StartHourOfDay **required**
  * StartMinuteOfHour **required**

### BandwidthRateLimitIntervals
* BandwidthRateLimitIntervals `array`
  * items [BandwidthRateLimitInterval](#bandwidthratelimitinterval)

### BandwidthType
* BandwidthType `string`

### BandwidthUploadRateLimit
* BandwidthUploadRateLimit `integer`

### Boolean
* Boolean `boolean`

### CacheAttributes
* CacheAttributes `object`: Lists refresh cache information.
  * CacheStaleTimeoutInSeconds

### CacheStaleTimeoutInSeconds
* CacheStaleTimeoutInSeconds `integer`

### CachediSCSIVolume
* CachediSCSIVolume `object`: Describes an iSCSI cached volume.
  * CreatedDate
  * KMSKey [KMSKey](#kmskey)
  * SourceSnapshotId
  * TargetName
  * VolumeARN
  * VolumeAttachmentStatus
  * VolumeId
  * VolumeProgress
  * VolumeSizeInBytes
  * VolumeStatus
  * VolumeType
  * VolumeUsedInBytes
  * VolumeiSCSIAttributes
    * ChapEnabled
    * LunNumber
    * NetworkInterfaceId
    * NetworkInterfacePort
    * TargetARN

### CachediSCSIVolumes
* CachediSCSIVolumes `array`
  * items [CachediSCSIVolume](#cachediscsivolume)

### CancelArchivalInput
* CancelArchivalInput `object`: CancelArchivalInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required**

### CancelArchivalOutput
* CancelArchivalOutput `object`: CancelArchivalOutput
  * TapeARN

### CancelRetrievalInput
* CancelRetrievalInput `object`: CancelRetrievalInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required**

### CancelRetrievalOutput
* CancelRetrievalOutput `object`: CancelRetrievalOutput
  * TapeARN

### CaseSensitivity
* CaseSensitivity `string` (values: ClientSpecified, CaseSensitive)

### ChapCredentials
* ChapCredentials `array`
  * items [ChapInfo](#chapinfo)

### ChapInfo
* ChapInfo `object`: Describes Challenge-Handshake Authentication Protocol (CHAP) information that supports authentication between your gateway and iSCSI initiators.
  * InitiatorName
  * SecretToAuthenticateInitiator
  * SecretToAuthenticateTarget
  * TargetARN

### ChapSecret
* ChapSecret `string`

### ClientToken
* ClientToken `string`

### CloudWatchLogGroupARN
* CloudWatchLogGroupARN `string`

### CreateCachediSCSIVolumeInput
* CreateCachediSCSIVolumeInput `object`
  * ClientToken **required**
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * KMSEncrypted
  * KMSKey
  * NetworkInterfaceId **required**
  * SnapshotId
  * SourceVolumeARN
  * Tags
    * items [Tag](#tag)
  * TargetName **required**
  * VolumeSizeInBytes **required**

### CreateCachediSCSIVolumeOutput
* CreateCachediSCSIVolumeOutput `object`
  * TargetARN
  * VolumeARN

### CreateNFSFileShareInput
* CreateNFSFileShareInput `object`: CreateNFSFileShareInput
  * CacheAttributes
    * CacheStaleTimeoutInSeconds
  * ClientList
    * items [IPV4AddressCIDR](#ipv4addresscidr)
  * ClientToken **required**
  * DefaultStorageClass
  * FileShareName
  * GatewayARN **required**
  * GuessMIMETypeEnabled
  * KMSEncrypted
  * KMSKey
  * LocationARN **required**
  * NFSFileShareDefaults
    * DirectoryMode
    * FileMode
    * GroupId
    * OwnerId
  * NotificationPolicy
  * ObjectACL
  * ReadOnly
  * RequesterPays
  * Role **required**
  * Squash
  * Tags
    * items [Tag](#tag)

### CreateNFSFileShareOutput
* CreateNFSFileShareOutput `object`: CreateNFSFileShareOutput
  * FileShareARN

### CreateSMBFileShareInput
* CreateSMBFileShareInput `object`: CreateSMBFileShareInput
  * AccessBasedEnumeration
  * AdminUserList
    * items [FileShareUser](#fileshareuser)
  * AuditDestinationARN
  * Authentication
  * CacheAttributes
    * CacheStaleTimeoutInSeconds
  * CaseSensitivity
  * ClientToken **required**
  * DefaultStorageClass
  * FileShareName
  * GatewayARN **required**
  * GuessMIMETypeEnabled
  * InvalidUserList
    * items [FileShareUser](#fileshareuser)
  * KMSEncrypted
  * KMSKey
  * LocationARN **required**
  * NotificationPolicy
  * ObjectACL
  * ReadOnly
  * RequesterPays
  * Role **required**
  * SMBACLEnabled
  * Tags
    * items [Tag](#tag)
  * ValidUserList
    * items [FileShareUser](#fileshareuser)

### CreateSMBFileShareOutput
* CreateSMBFileShareOutput `object`: CreateSMBFileShareOutput
  * FileShareARN

### CreateSnapshotFromVolumeRecoveryPointInput
* CreateSnapshotFromVolumeRecoveryPointInput `object`
  * SnapshotDescription **required**
  * Tags
    * items [Tag](#tag)
  * VolumeARN **required**

### CreateSnapshotFromVolumeRecoveryPointOutput
* CreateSnapshotFromVolumeRecoveryPointOutput `object`
  * SnapshotId
  * VolumeARN
  * VolumeRecoveryPointTime

### CreateSnapshotInput
* CreateSnapshotInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateSnapshotInput$SnapshotDescription</a> </p> </li> <li> <p> <a>CreateSnapshotInput$VolumeARN</a> </p> </li> </ul>
  * SnapshotDescription **required**
  * Tags
    * items [Tag](#tag)
  * VolumeARN **required**

### CreateSnapshotOutput
* CreateSnapshotOutput `object`: A JSON object containing the following fields:
  * SnapshotId
  * VolumeARN

### CreateStorediSCSIVolumeInput
* CreateStorediSCSIVolumeInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateStorediSCSIVolumeInput$DiskId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$NetworkInterfaceId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$PreserveExistingData</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$SnapshotId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$TargetName</a> </p> </li> </ul>
  * DiskId **required**
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * KMSEncrypted
  * KMSKey
  * NetworkInterfaceId **required**
  * PreserveExistingData **required**
  * SnapshotId
  * Tags
    * items [Tag](#tag)
  * TargetName **required**

### CreateStorediSCSIVolumeOutput
* CreateStorediSCSIVolumeOutput `object`: A JSON object containing the following fields:
  * TargetARN
  * VolumeARN
  * VolumeSizeInBytes

### CreateTapePoolInput
* CreateTapePoolInput `object`
  * PoolName **required**
  * RetentionLockTimeInDays
  * RetentionLockType
  * StorageClass **required**
  * Tags
    * items [Tag](#tag)

### CreateTapePoolOutput
* CreateTapePoolOutput `object`
  * PoolARN

### CreateTapeWithBarcodeInput
* CreateTapeWithBarcodeInput `object`: CreateTapeWithBarcodeInput
  * GatewayARN **required**
  * KMSEncrypted
  * KMSKey
  * PoolId
  * Tags
    * items [Tag](#tag)
  * TapeBarcode **required**
  * TapeSizeInBytes **required**
  * Worm

### CreateTapeWithBarcodeOutput
* CreateTapeWithBarcodeOutput `object`: CreateTapeOutput
  * TapeARN

### CreateTapesInput
* CreateTapesInput `object`: CreateTapesInput
  * ClientToken **required**
  * GatewayARN **required**
  * KMSEncrypted
  * KMSKey
  * NumTapesToCreate **required**
  * PoolId
  * Tags
    * items [Tag](#tag)
  * TapeBarcodePrefix **required**
  * TapeSizeInBytes **required**
  * Worm

### CreateTapesOutput
* CreateTapesOutput `object`: CreateTapeOutput
  * TapeARNs
    * items [TapeARN](#tapearn)

### CreatedDate
* CreatedDate `string`

### DayOfMonth
* DayOfMonth `integer`

### DayOfWeek
* DayOfWeek `integer`

### DaysOfWeek
* DaysOfWeek `array`
  * items [DayOfWeek](#dayofweek)

### DeleteAutomaticTapeCreationPolicyInput
* DeleteAutomaticTapeCreationPolicyInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DeleteAutomaticTapeCreationPolicyOutput
* DeleteAutomaticTapeCreationPolicyOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### DeleteBandwidthRateLimitInput
* DeleteBandwidthRateLimitInput `object`: <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DeleteBandwidthRateLimitInput$BandwidthType</a> </p> </li> </ul>
  * BandwidthType **required**
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DeleteBandwidthRateLimitOutput
* DeleteBandwidthRateLimitOutput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway whose bandwidth rate information was deleted.
  * GatewayARN [GatewayARN](#gatewayarn)

### DeleteChapCredentialsInput
* DeleteChapCredentialsInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>DeleteChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>DeleteChapCredentialsInput$TargetARN</a> </p> </li> </ul>
  * InitiatorName **required**
  * TargetARN **required**

### DeleteChapCredentialsOutput
* DeleteChapCredentialsOutput `object`: A JSON object containing the following fields:
  * InitiatorName
  * TargetARN

### DeleteFileShareInput
* DeleteFileShareInput `object`: DeleteFileShareInput
  * FileShareARN **required**
  * ForceDelete

### DeleteFileShareOutput
* DeleteFileShareOutput `object`: DeleteFileShareOutput
  * FileShareARN

### DeleteGatewayInput
* DeleteGatewayInput `object`: A JSON object containing the ID of the gateway to delete.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DeleteGatewayOutput
* DeleteGatewayOutput `object`: A JSON object containing the ID of the deleted gateway.
  * GatewayARN [GatewayARN](#gatewayarn)

### DeleteSnapshotScheduleInput
* DeleteSnapshotScheduleInput `object`
  * VolumeARN **required**

### DeleteSnapshotScheduleOutput
* DeleteSnapshotScheduleOutput `object`
  * VolumeARN

### DeleteTapeArchiveInput
* DeleteTapeArchiveInput `object`: DeleteTapeArchiveInput
  * BypassGovernanceRetention
  * TapeARN **required**

### DeleteTapeArchiveOutput
* DeleteTapeArchiveOutput `object`: DeleteTapeArchiveOutput
  * TapeARN

### DeleteTapeInput
* DeleteTapeInput `object`: DeleteTapeInput
  * BypassGovernanceRetention
  * GatewayARN **required**
  * TapeARN **required**

### DeleteTapeOutput
* DeleteTapeOutput `object`: DeleteTapeOutput
  * TapeARN

### DeleteTapePoolInput
* DeleteTapePoolInput `object`
  * PoolARN **required**

### DeleteTapePoolOutput
* DeleteTapePoolOutput `object`
  * PoolARN

### DeleteVolumeInput
* DeleteVolumeInput `object`: A JSON object containing the <a>DeleteVolumeInput$VolumeARN</a> to delete.
  * VolumeARN **required**

### DeleteVolumeOutput
* DeleteVolumeOutput `object`: A JSON object containing the Amazon Resource Name (ARN) of the storage volume that was deleted.
  * VolumeARN

### DeprecationDate
* DeprecationDate `string`

### DescribeAvailabilityMonitorTestInput
* DescribeAvailabilityMonitorTestInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeAvailabilityMonitorTestOutput
* DescribeAvailabilityMonitorTestOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)
  * StartTime
  * Status

### DescribeBandwidthRateLimitInput
* DescribeBandwidthRateLimitInput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeBandwidthRateLimitOutput
* DescribeBandwidthRateLimitOutput `object`: A JSON object containing the following fields:
  * AverageDownloadRateLimitInBitsPerSec
  * AverageUploadRateLimitInBitsPerSec
  * GatewayARN [GatewayARN](#gatewayarn)

### DescribeBandwidthRateLimitScheduleInput
* DescribeBandwidthRateLimitScheduleInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeBandwidthRateLimitScheduleOutput
* DescribeBandwidthRateLimitScheduleOutput `object`
  * BandwidthRateLimitIntervals
    * items [BandwidthRateLimitInterval](#bandwidthratelimitinterval)
  * GatewayARN [GatewayARN](#gatewayarn)

### DescribeCacheInput
* DescribeCacheInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeCacheOutput
* DescribeCacheOutput `object`
  * CacheAllocatedInBytes
  * CacheDirtyPercentage
  * CacheHitPercentage
  * CacheMissPercentage
  * CacheUsedPercentage
  * DiskIds
    * items [DiskId](#diskid)
  * GatewayARN [GatewayARN](#gatewayarn)

### DescribeCachediSCSIVolumesInput
* DescribeCachediSCSIVolumesInput `object`
  * VolumeARNs **required**
    * items [VolumeARN](#volumearn)

### DescribeCachediSCSIVolumesOutput
* DescribeCachediSCSIVolumesOutput `object`: A JSON object containing the following fields:
  * CachediSCSIVolumes
    * items [CachediSCSIVolume](#cachediscsivolume)

### DescribeChapCredentialsInput
* DescribeChapCredentialsInput `object`: A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume target.
  * TargetARN **required**

### DescribeChapCredentialsOutput
* DescribeChapCredentialsOutput `object`: A JSON object containing the following fields:
  * ChapCredentials
    * items [ChapInfo](#chapinfo)

### DescribeGatewayInformationInput
* DescribeGatewayInformationInput `object`: A JSON object containing the ID of the gateway.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeGatewayInformationOutput
* DescribeGatewayInformationOutput `object`: A JSON object containing the following fields:
  * CloudWatchLogGroupARN
  * DeprecationDate
  * Ec2InstanceId
  * Ec2InstanceRegion
  * EndpointType
  * GatewayARN [GatewayARN](#gatewayarn)
  * GatewayId
  * GatewayName
  * GatewayNetworkInterfaces
    * items [NetworkInterface](#networkinterface)
  * GatewayState
  * GatewayTimezone
  * GatewayType
  * HostEnvironment
  * LastSoftwareUpdate
  * NextUpdateAvailabilityDate
  * SoftwareUpdatesEndDate
  * Tags
    * items [Tag](#tag)
  * VPCEndpoint

### DescribeMaintenanceStartTimeInput
* DescribeMaintenanceStartTimeInput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeMaintenanceStartTimeOutput
* DescribeMaintenanceStartTimeOutput `object`: <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DescribeMaintenanceStartTimeOutput$DayOfMonth</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$DayOfWeek</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$HourOfDay</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$MinuteOfHour</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$Timezone</a> </p> </li> </ul>
  * DayOfMonth
  * DayOfWeek
  * GatewayARN [GatewayARN](#gatewayarn)
  * HourOfDay
  * MinuteOfHour
  * Timezone

### DescribeNFSFileSharesInput
* DescribeNFSFileSharesInput `object`: DescribeNFSFileSharesInput
  * FileShareARNList **required**
    * items [FileShareARN](#filesharearn)

### DescribeNFSFileSharesOutput
* DescribeNFSFileSharesOutput `object`: DescribeNFSFileSharesOutput
  * NFSFileShareInfoList
    * items [NFSFileShareInfo](#nfsfileshareinfo)

### DescribeSMBFileSharesInput
* DescribeSMBFileSharesInput `object`: DescribeSMBFileSharesInput
  * FileShareARNList **required**
    * items [FileShareARN](#filesharearn)

### DescribeSMBFileSharesOutput
* DescribeSMBFileSharesOutput `object`: DescribeSMBFileSharesOutput
  * SMBFileShareInfoList
    * items [SMBFileShareInfo](#smbfileshareinfo)

### DescribeSMBSettingsInput
* DescribeSMBSettingsInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeSMBSettingsOutput
* DescribeSMBSettingsOutput `object`
  * ActiveDirectoryStatus
  * DomainName
  * FileSharesVisible
  * GatewayARN [GatewayARN](#gatewayarn)
  * SMBGuestPasswordSet
  * SMBSecurityStrategy

### DescribeSnapshotScheduleInput
* DescribeSnapshotScheduleInput `object`: A JSON object containing the <a>DescribeSnapshotScheduleInput$VolumeARN</a> of the volume.
  * VolumeARN **required**

### DescribeSnapshotScheduleOutput
* DescribeSnapshotScheduleOutput `object`
  * Description
  * RecurrenceInHours
  * StartAt
  * Tags
    * items [Tag](#tag)
  * Timezone
  * VolumeARN

### DescribeStorediSCSIVolumesInput
* DescribeStorediSCSIVolumesInput `object`: A JSON object containing a list of <a>DescribeStorediSCSIVolumesInput$VolumeARNs</a>.
  * VolumeARNs **required**
    * items [VolumeARN](#volumearn)

### DescribeStorediSCSIVolumesOutput
* DescribeStorediSCSIVolumesOutput `object`
  * StorediSCSIVolumes
    * items [StorediSCSIVolume](#storediscsivolume)

### DescribeTapeArchivesInput
* DescribeTapeArchivesInput `object`: DescribeTapeArchivesInput
  * Limit
  * Marker
  * TapeARNs
    * items [TapeARN](#tapearn)

### DescribeTapeArchivesOutput
* DescribeTapeArchivesOutput `object`: DescribeTapeArchivesOutput
  * Marker
  * TapeArchives
    * items [TapeArchive](#tapearchive)

### DescribeTapeRecoveryPointsInput
* DescribeTapeRecoveryPointsInput `object`: DescribeTapeRecoveryPointsInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * Limit
  * Marker

### DescribeTapeRecoveryPointsOutput
* DescribeTapeRecoveryPointsOutput `object`: DescribeTapeRecoveryPointsOutput
  * GatewayARN [GatewayARN](#gatewayarn)
  * Marker
  * TapeRecoveryPointInfos
    * items [TapeRecoveryPointInfo](#taperecoverypointinfo)

### DescribeTapesInput
* DescribeTapesInput `object`: DescribeTapesInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * Limit
  * Marker
  * TapeARNs
    * items [TapeARN](#tapearn)

### DescribeTapesOutput
* DescribeTapesOutput `object`: DescribeTapesOutput
  * Marker
  * Tapes
    * items [Tape](#tape)

### DescribeUploadBufferInput
* DescribeUploadBufferInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeUploadBufferOutput
* DescribeUploadBufferOutput `object`
  * DiskIds
    * items [DiskId](#diskid)
  * GatewayARN [GatewayARN](#gatewayarn)
  * UploadBufferAllocatedInBytes
  * UploadBufferUsedInBytes

### DescribeVTLDevicesInput
* DescribeVTLDevicesInput `object`: DescribeVTLDevicesInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * Limit
  * Marker
  * VTLDeviceARNs
    * items [VTLDeviceARN](#vtldevicearn)

### DescribeVTLDevicesOutput
* DescribeVTLDevicesOutput `object`: DescribeVTLDevicesOutput
  * GatewayARN [GatewayARN](#gatewayarn)
  * Marker
  * VTLDevices
    * items [VTLDevice](#vtldevice)

### DescribeWorkingStorageInput
* DescribeWorkingStorageInput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeWorkingStorageOutput
* DescribeWorkingStorageOutput `object`: A JSON object containing the following fields:
  * DiskIds
    * items [DiskId](#diskid)
  * GatewayARN [GatewayARN](#gatewayarn)
  * WorkingStorageAllocatedInBytes
  * WorkingStorageUsedInBytes

### Description
* Description `string`

### DetachVolumeInput
* DetachVolumeInput `object`: AttachVolumeInput
  * ForceDetach
  * VolumeARN **required**

### DetachVolumeOutput
* DetachVolumeOutput `object`: AttachVolumeOutput
  * VolumeARN

### DeviceType
* DeviceType `string`

### DeviceiSCSIAttributes
* DeviceiSCSIAttributes `object`: Lists iSCSI information about a VTL device.
  * ChapEnabled
  * NetworkInterfaceId
  * NetworkInterfacePort
  * TargetARN

### DisableGatewayInput
* DisableGatewayInput `object`: DisableGatewayInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DisableGatewayOutput
* DisableGatewayOutput `object`: DisableGatewayOutput
  * GatewayARN

### Disk
* Disk `object`: Represents a gateway's local disk.
  * DiskAllocationResource
  * DiskAllocationType [DiskAllocationType](#diskallocationtype)
  * DiskAttributeList [DiskAttributeList](#diskattributelist)
  * DiskId
  * DiskNode
  * DiskPath
  * DiskSizeInBytes
  * DiskStatus

### DiskAllocationType
* DiskAllocationType `string`: <p>One of the <code>DiskAllocationType</code> enumeration values that identifies how a local disk is used.</p> <p>Valid Values: <code>UPLOAD_BUFFER</code> | <code>CACHE_STORAGE</code> </p>

### DiskAttribute
* DiskAttribute `string`

### DiskAttributeList
* DiskAttributeList `array`: A list of values that represents attributes of a local disk.
  * items [DiskAttribute](#diskattribute)

### DiskId
* DiskId `string`

### DiskIds
* DiskIds `array`
  * items [DiskId](#diskid)

### Disks
* Disks `array`
  * items [Disk](#disk)

### DomainName
* DomainName `string`

### DomainUserName
* DomainUserName `string`

### DomainUserPassword
* DomainUserPassword `string`

### DoubleObject
* DoubleObject `number`

### Ec2InstanceId
* Ec2InstanceId `string`

### Ec2InstanceRegion
* Ec2InstanceRegion `string`

### EndpointType
* EndpointType `string`

### FileShareARN
* FileShareARN `string`: The Amazon Resource Name (ARN) of the file share.

### FileShareARNList
* FileShareARNList `array`
  * items [FileShareARN](#filesharearn)

### FileShareClientList
* FileShareClientList `array`: The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks.
  * items [IPV4AddressCIDR](#ipv4addresscidr)

### FileShareId
* FileShareId `string`: The ID of the file share.

### FileShareInfo
* FileShareInfo `object`: Describes a file share.
  * FileShareARN [FileShareARN](#filesharearn)
  * FileShareId [FileShareId](#fileshareid)
  * FileShareStatus [FileShareStatus](#filesharestatus)
  * FileShareType [FileShareType](#filesharetype)
  * GatewayARN [GatewayARN](#gatewayarn)

### FileShareInfoList
* FileShareInfoList `array`
  * items [FileShareInfo](#fileshareinfo)

### FileShareName
* FileShareName `string`

### FileShareStatus
* FileShareStatus `string`: <p>The status of the file share.</p> <p>Valid Values: <code>CREATING</code> | <code>UPDATING</code> | <code>AVAILABLE</code> | <code>DELETING</code> </p>

### FileShareType
* FileShareType `string` (values: NFS, SMB): The type of the file share.

### FileShareUser
* FileShareUser `string`

### FileShareUserList
* FileShareUserList `array`
  * items [FileShareUser](#fileshareuser)

### Folder
* Folder `string`

### FolderList
* FolderList `array`
  * items [Folder](#folder)

### GatewayARN
* GatewayARN `string`: The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and AWS Region.

### GatewayId
* GatewayId `string`

### GatewayInfo
* GatewayInfo `object`: Describes a gateway object.
  * Ec2InstanceId
  * Ec2InstanceRegion
  * GatewayARN
  * GatewayId
  * GatewayName
  * GatewayOperationalState
  * GatewayType

### GatewayName
* GatewayName `string`: The name you configured for your gateway.

### GatewayNetworkInterfaces
* GatewayNetworkInterfaces `array`
  * items [NetworkInterface](#networkinterface)

### GatewayOperationalState
* GatewayOperationalState `string`

### GatewayState
* GatewayState `string`

### GatewayTimezone
* GatewayTimezone `string`

### GatewayType
* GatewayType `string`

### Gateways
* Gateways `array`
  * items [GatewayInfo](#gatewayinfo)

### Host
* Host `string`

### HostEnvironment
* HostEnvironment `string` (values: VMWARE, HYPER-V, EC2, KVM, OTHER)

### Hosts
* Hosts `array`
  * items [Host](#host)

### HourOfDay
* HourOfDay `integer`

### IPV4AddressCIDR
* IPV4AddressCIDR `string`

### Initiator
* Initiator `string`

### Initiators
* Initiators `array`
  * items [Initiator](#initiator)

### InternalServerError


### InvalidGatewayRequestException


### IqnName
* IqnName `string`

### JoinDomainInput
* JoinDomainInput `object`: JoinDomainInput
  * DomainControllers
    * items [Host](#host)
  * DomainName **required**
  * GatewayARN **required**
  * OrganizationalUnit
  * Password **required**
  * TimeoutInSeconds
  * UserName **required**

### JoinDomainOutput
* JoinDomainOutput `object`: JoinDomainOutput
  * ActiveDirectoryStatus
  * GatewayARN

### KMSKey
* KMSKey `string`: The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when <code>KMSEncrypted</code> is <code>true</code>. Optional.

### LastSoftwareUpdate
* LastSoftwareUpdate `string`

### ListAutomaticTapeCreationPoliciesInput
* ListAutomaticTapeCreationPoliciesInput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### ListAutomaticTapeCreationPoliciesOutput
* ListAutomaticTapeCreationPoliciesOutput `object`
  * AutomaticTapeCreationPolicyInfos
    * items [AutomaticTapeCreationPolicyInfo](#automatictapecreationpolicyinfo)

### ListFileSharesInput
* ListFileSharesInput `object`: ListFileShareInput
  * GatewayARN
  * Limit
  * Marker

### ListFileSharesOutput
* ListFileSharesOutput `object`: ListFileShareOutput
  * FileShareInfoList
    * items [FileShareInfo](#fileshareinfo)
  * Marker
  * NextMarker

### ListGatewaysInput
* ListGatewaysInput `object`: <p>A JSON object containing zero or more of the following fields:</p> <ul> <li> <p> <a>ListGatewaysInput$Limit</a> </p> </li> <li> <p> <a>ListGatewaysInput$Marker</a> </p> </li> </ul>
  * Limit
  * Marker

### ListGatewaysOutput
* ListGatewaysOutput `object`
  * Gateways
    * items [GatewayInfo](#gatewayinfo)
  * Marker

### ListLocalDisksInput
* ListLocalDisksInput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### ListLocalDisksOutput
* ListLocalDisksOutput `object`
  * Disks
    * items [Disk](#disk)
  * GatewayARN [GatewayARN](#gatewayarn)

### ListTagsForResourceInput
* ListTagsForResourceInput `object`: ListTagsForResourceInput
  * Limit
  * Marker
  * ResourceARN **required**

### ListTagsForResourceOutput
* ListTagsForResourceOutput `object`: ListTagsForResourceOutput
  * Marker
  * ResourceARN
  * Tags
    * items [Tag](#tag)

### ListTapePoolsInput
* ListTapePoolsInput `object`
  * Limit
  * Marker
  * PoolARNs
    * items [PoolARN](#poolarn)

### ListTapePoolsOutput
* ListTapePoolsOutput `object`
  * Marker
  * PoolInfos
    * items [PoolInfo](#poolinfo)

### ListTapesInput
* ListTapesInput `object`: <p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListTapesInput$Limit</a> </p> </li> <li> <p> <a>ListTapesInput$Marker</a> </p> </li> <li> <p> <a>ListTapesInput$TapeARNs</a> </p> </li> </ul>
  * Limit
  * Marker
  * TapeARNs [TapeARNs](#tapearns)

### ListTapesOutput
* ListTapesOutput `object`: <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListTapesOutput$Marker</a> </p> </li> <li> <p> <a>ListTapesOutput$VolumeInfos</a> </p> </li> </ul>
  * Marker
  * TapeInfos [TapeInfos](#tapeinfos)

### ListVolumeInitiatorsInput
* ListVolumeInitiatorsInput `object`: ListVolumeInitiatorsInput
  * VolumeARN **required**

### ListVolumeInitiatorsOutput
* ListVolumeInitiatorsOutput `object`: ListVolumeInitiatorsOutput
  * Initiators
    * items [Initiator](#initiator)

### ListVolumeRecoveryPointsInput
* ListVolumeRecoveryPointsInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### ListVolumeRecoveryPointsOutput
* ListVolumeRecoveryPointsOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)
  * VolumeRecoveryPointInfos
    * items [VolumeRecoveryPointInfo](#volumerecoverypointinfo)

### ListVolumesInput
* ListVolumesInput `object`: <p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListVolumesInput$Limit</a> </p> </li> <li> <p> <a>ListVolumesInput$Marker</a> </p> </li> </ul>
  * GatewayARN [GatewayARN](#gatewayarn)
  * Limit
  * Marker

### ListVolumesOutput
* ListVolumesOutput `object`: <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListVolumesOutput$Marker</a> </p> </li> <li> <p> <a>ListVolumesOutput$VolumeInfos</a> </p> </li> </ul>
  * GatewayARN [GatewayARN](#gatewayarn)
  * Marker
  * VolumeInfos
    * items [VolumeInfo](#volumeinfo)

### LocalConsolePassword
* LocalConsolePassword `string`

### LocationARN
* LocationARN `string`: The ARN of the backend storage used for storing file data. A prefix name can be added to the S3 bucket name. It must end with a "/".

### Marker
* Marker `string`

### MediumChangerType
* MediumChangerType `string`

### MinimumNumTapes
* MinimumNumTapes `integer`

### MinuteOfHour
* MinuteOfHour `integer`

### NFSFileShareDefaults
* NFSFileShareDefaults `object`: Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for file gateways.
  * DirectoryMode
  * FileMode
  * GroupId
  * OwnerId

### NFSFileShareInfo
* NFSFileShareInfo `object`: The Unix file permissions and ownership information assigned, by default, to native S3 objects when file gateway discovers them in S3 buckets. This operation is only supported in file gateways.
  * CacheAttributes
    * CacheStaleTimeoutInSeconds
  * ClientList [FileShareClientList](#fileshareclientlist)
  * DefaultStorageClass
  * FileShareARN [FileShareARN](#filesharearn)
  * FileShareId [FileShareId](#fileshareid)
  * FileShareName
  * FileShareStatus [FileShareStatus](#filesharestatus)
  * GatewayARN [GatewayARN](#gatewayarn)
  * GuessMIMETypeEnabled
  * KMSEncrypted
  * KMSKey [KMSKey](#kmskey)
  * LocationARN [LocationARN](#locationarn)
  * NFSFileShareDefaults [NFSFileShareDefaults](#nfsfilesharedefaults)
  * NotificationPolicy
  * ObjectACL [ObjectACL](#objectacl)
  * Path [Path](#path)
  * ReadOnly
  * RequesterPays
  * Role [Role](#role)
  * Squash [Squash](#squash)
  * Tags
    * items [Tag](#tag)

### NFSFileShareInfoList
* NFSFileShareInfoList `array`
  * items [NFSFileShareInfo](#nfsfileshareinfo)

### NetworkInterface
* NetworkInterface `object`: Describes a gateway's network interface.
  * Ipv4Address
  * Ipv6Address
  * MacAddress

### NetworkInterfaceId
* NetworkInterfaceId `string`

### NextUpdateAvailabilityDate
* NextUpdateAvailabilityDate `string`

### NotificationId
* NotificationId `string`: The randomly generated ID of the notification that was sent. This ID is in UUID format.

### NotificationPolicy
* NotificationPolicy `string`

### NotifyWhenUploadedInput
* NotifyWhenUploadedInput `object`
  * FileShareARN **required** [FileShareARN](#filesharearn)

### NotifyWhenUploadedOutput
* NotifyWhenUploadedOutput `object`
  * FileShareARN [FileShareARN](#filesharearn)
  * NotificationId [NotificationId](#notificationid)

### NumTapesToCreate
* NumTapesToCreate `integer`

### ObjectACL
* ObjectACL `string` (values: private, public-read, public-read-write, authenticated-read, bucket-owner-read, bucket-owner-full-control, aws-exec-read): A value that sets the access control list (ACL) permission for objects in the S3 bucket that a file gateway puts objects into. The default value is <code>private</code>.

### OrganizationalUnit
* OrganizationalUnit `string`

### Path
* Path `string`: The file share path used by the NFS client to identify the mount point.

### PermissionId
* PermissionId `integer`

### PermissionMode
* PermissionMode `string`

### PoolARN
* PoolARN `string`

### PoolARNs
* PoolARNs `array`
  * items [PoolARN](#poolarn)

### PoolId
* PoolId `string`

### PoolInfo
* PoolInfo `object`: Describes a custom tape pool.
  * PoolARN
  * PoolName
  * PoolStatus
  * RetentionLockTimeInDays
  * RetentionLockType
  * StorageClass

### PoolInfos
* PoolInfos `array`
  * items [PoolInfo](#poolinfo)

### PoolName
* PoolName `string`

### PoolStatus
* PoolStatus `string` (values: ACTIVE, DELETED)

### PositiveIntObject
* PositiveIntObject `integer`

### RecurrenceInHours
* RecurrenceInHours `integer`

### RefreshCacheInput
* RefreshCacheInput `object`: RefreshCacheInput
  * FileShareARN **required**
  * FolderList
    * items [Folder](#folder)
  * Recursive

### RefreshCacheOutput
* RefreshCacheOutput `object`: RefreshCacheOutput
  * FileShareARN [FileShareARN](#filesharearn)
  * NotificationId [NotificationId](#notificationid)

### RegionId
* RegionId `string`

### RemoveTagsFromResourceInput
* RemoveTagsFromResourceInput `object`: RemoveTagsFromResourceInput
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### RemoveTagsFromResourceOutput
* RemoveTagsFromResourceOutput `object`: RemoveTagsFromResourceOutput
  * ResourceARN

### ResetCacheInput
* ResetCacheInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### ResetCacheOutput
* ResetCacheOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### ResourceARN
* ResourceARN `string`

### RetentionLockTimeInDays
* RetentionLockTimeInDays `integer`

### RetentionLockType
* RetentionLockType `string` (values: COMPLIANCE, GOVERNANCE, NONE)

### RetrieveTapeArchiveInput
* RetrieveTapeArchiveInput `object`: RetrieveTapeArchiveInput
  * GatewayARN **required**
  * TapeARN **required**

### RetrieveTapeArchiveOutput
* RetrieveTapeArchiveOutput `object`: RetrieveTapeArchiveOutput
  * TapeARN

### RetrieveTapeRecoveryPointInput
* RetrieveTapeRecoveryPointInput `object`: RetrieveTapeRecoveryPointInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required**

### RetrieveTapeRecoveryPointOutput
* RetrieveTapeRecoveryPointOutput `object`: RetrieveTapeRecoveryPointOutput
  * TapeARN

### Role
* Role `string`: The ARN of the IAM role that file gateway assumes when it accesses the underlying storage.

### SMBFileShareInfo
* SMBFileShareInfo `object`: The Windows file permissions and ownership information assigned, by default, to native S3 objects when file gateway discovers them in S3 buckets. This operation is only supported for file gateways.
  * AccessBasedEnumeration
  * AdminUserList
    * items [FileShareUser](#fileshareuser)
  * AuditDestinationARN
  * Authentication [Authentication](#authentication)
  * CacheAttributes
    * CacheStaleTimeoutInSeconds
  * CaseSensitivity
  * DefaultStorageClass
  * FileShareARN [FileShareARN](#filesharearn)
  * FileShareId [FileShareId](#fileshareid)
  * FileShareName
  * FileShareStatus [FileShareStatus](#filesharestatus)
  * GatewayARN [GatewayARN](#gatewayarn)
  * GuessMIMETypeEnabled
  * InvalidUserList
    * items [FileShareUser](#fileshareuser)
  * KMSEncrypted
  * KMSKey [KMSKey](#kmskey)
  * LocationARN [LocationARN](#locationarn)
  * NotificationPolicy
  * ObjectACL [ObjectACL](#objectacl)
  * Path
  * ReadOnly
  * RequesterPays
  * Role [Role](#role)
  * SMBACLEnabled
  * Tags
    * items [Tag](#tag)
  * ValidUserList
    * items [FileShareUser](#fileshareuser)

### SMBFileShareInfoList
* SMBFileShareInfoList `array`
  * items [SMBFileShareInfo](#smbfileshareinfo)

### SMBGuestPassword
* SMBGuestPassword `string`

### SMBSecurityStrategy
* SMBSecurityStrategy `string` (values: ClientSpecified, MandatorySigning, MandatoryEncryption)

### ServiceUnavailableError


### SetLocalConsolePasswordInput
* SetLocalConsolePasswordInput `object`: SetLocalConsolePasswordInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * LocalConsolePassword **required**

### SetLocalConsolePasswordOutput
* SetLocalConsolePasswordOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### SetSMBGuestPasswordInput
* SetSMBGuestPasswordInput `object`: SetSMBGuestPasswordInput
  * GatewayARN **required**
  * Password **required**

### SetSMBGuestPasswordOutput
* SetSMBGuestPasswordOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### ShutdownGatewayInput
* ShutdownGatewayInput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway to shut down.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### ShutdownGatewayOutput
* ShutdownGatewayOutput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway that was shut down.
  * GatewayARN [GatewayARN](#gatewayarn)

### SnapshotDescription
* SnapshotDescription `string`

### SnapshotId
* SnapshotId `string`

### SoftwareUpdatesEndDate
* SoftwareUpdatesEndDate `string`

### Squash
* Squash `string`: <p>The user mapped to anonymous user. Valid options are the following:</p> <ul> <li> <p> <code>RootSquash</code>: Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code>: No one is mapped to anonymous user.</p> </li> <li> <p> <code>AllSquash</code>: Everyone is mapped to anonymous user.</p> </li> </ul>

### StartAvailabilityMonitorTestInput
* StartAvailabilityMonitorTestInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### StartAvailabilityMonitorTestOutput
* StartAvailabilityMonitorTestOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### StartGatewayInput
* StartGatewayInput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway to start.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### StartGatewayOutput
* StartGatewayOutput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway that was restarted.
  * GatewayARN [GatewayARN](#gatewayarn)

### StorageClass
* StorageClass `string`: <p/>

### StorediSCSIVolume
* StorediSCSIVolume `object`: Describes an iSCSI stored volume.
  * CreatedDate
  * KMSKey [KMSKey](#kmskey)
  * PreservedExistingData
  * SourceSnapshotId
  * TargetName
  * VolumeARN
  * VolumeAttachmentStatus
  * VolumeDiskId
  * VolumeId
  * VolumeProgress
  * VolumeSizeInBytes
  * VolumeStatus
  * VolumeType
  * VolumeUsedInBytes
  * VolumeiSCSIAttributes
    * ChapEnabled
    * LunNumber
    * NetworkInterfaceId
    * NetworkInterfacePort
    * TargetARN

### StorediSCSIVolumes
* StorediSCSIVolumes `array`
  * items [StorediSCSIVolume](#storediscsivolume)

### Tag
* Tag `object`: A key-value pair that helps you manage, filter, and search for your resource. Allowed characters: letters, white space, and numbers, representable in UTF-8, and the following characters: + - = . _ : /.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### Tape
* Tape `object`: Describes a virtual tape object.
  * KMSKey [KMSKey](#kmskey)
  * PoolEntryDate
  * PoolId
  * Progress
  * RetentionStartDate
  * TapeARN
  * TapeBarcode
  * TapeCreatedDate
  * TapeSizeInBytes
  * TapeStatus
  * TapeUsedInBytes
  * VTLDevice
  * Worm

### TapeARN
* TapeARN `string`

### TapeARNs
* TapeARNs `array`: The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS.
  * items [TapeARN](#tapearn)

### TapeArchive
* TapeArchive `object`: Represents a virtual tape that is archived in the virtual tape shelf (VTS).
  * CompletionTime
  * KMSKey [KMSKey](#kmskey)
  * PoolEntryDate
  * PoolId
  * RetentionStartDate
  * RetrievedTo
  * TapeARN
  * TapeBarcode
  * TapeCreatedDate
  * TapeSizeInBytes
  * TapeStatus
  * TapeUsedInBytes
  * Worm

### TapeArchiveStatus
* TapeArchiveStatus `string`

### TapeArchives
* TapeArchives `array`
  * items [TapeArchive](#tapearchive)

### TapeBarcode
* TapeBarcode `string`

### TapeBarcodePrefix
* TapeBarcodePrefix `string`

### TapeDriveType
* TapeDriveType `string`

### TapeInfo
* TapeInfo `object`: Describes a virtual tape.
  * GatewayARN
  * PoolEntryDate
  * PoolId
  * RetentionStartDate
  * TapeARN
  * TapeBarcode
  * TapeSizeInBytes
  * TapeStatus

### TapeInfos
* TapeInfos `array`: An array of <a>TapeInfo</a> objects, where each object describes a single tape. If there are no tapes in the tape library or VTS, then the <code>TapeInfos</code> is an empty array.
  * items [TapeInfo](#tapeinfo)

### TapeRecoveryPointInfo
* TapeRecoveryPointInfo `object`: Describes a recovery point.
  * TapeARN
  * TapeRecoveryPointTime
  * TapeSizeInBytes
  * TapeStatus

### TapeRecoveryPointInfos
* TapeRecoveryPointInfos `array`
  * items [TapeRecoveryPointInfo](#taperecoverypointinfo)

### TapeRecoveryPointStatus
* TapeRecoveryPointStatus `string`

### TapeSize
* TapeSize `integer`

### TapeStatus
* TapeStatus `string`

### TapeStorageClass
* TapeStorageClass `string` (values: DEEP_ARCHIVE, GLACIER)

### TapeUsage
* TapeUsage `integer`

### Tapes
* Tapes `array`
  * items [Tape](#tape)

### TargetARN
* TargetARN `string`

### TargetName
* TargetName `string`

### Time
* Time `string`

### TimeoutInSeconds
* TimeoutInSeconds `integer`

### UpdateAutomaticTapeCreationPolicyInput
* UpdateAutomaticTapeCreationPolicyInput `object`
  * AutomaticTapeCreationRules **required**
    * items [AutomaticTapeCreationRule](#automatictapecreationrule)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### UpdateAutomaticTapeCreationPolicyOutput
* UpdateAutomaticTapeCreationPolicyOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### UpdateBandwidthRateLimitInput
* UpdateBandwidthRateLimitInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageDownloadRateLimitInBitsPerSec</a> </p> </li> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageUploadRateLimitInBitsPerSec</a> </p> </li> </ul>
  * AverageDownloadRateLimitInBitsPerSec
  * AverageUploadRateLimitInBitsPerSec
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### UpdateBandwidthRateLimitOutput
* UpdateBandwidthRateLimitOutput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway whose throttle information was updated.
  * GatewayARN [GatewayARN](#gatewayarn)

### UpdateBandwidthRateLimitScheduleInput
* UpdateBandwidthRateLimitScheduleInput `object`
  * BandwidthRateLimitIntervals **required**
    * items [BandwidthRateLimitInterval](#bandwidthratelimitinterval)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### UpdateBandwidthRateLimitScheduleOutput
* UpdateBandwidthRateLimitScheduleOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### UpdateChapCredentialsInput
* UpdateChapCredentialsInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateInitiator</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateTarget</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$TargetARN</a> </p> </li> </ul>
  * InitiatorName **required**
  * SecretToAuthenticateInitiator **required**
  * SecretToAuthenticateTarget
  * TargetARN **required**

### UpdateChapCredentialsOutput
* UpdateChapCredentialsOutput `object`: A JSON object containing the following fields:
  * InitiatorName
  * TargetARN

### UpdateGatewayInformationInput
* UpdateGatewayInformationInput `object`
  * CloudWatchLogGroupARN
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * GatewayName [GatewayName](#gatewayname)
  * GatewayTimezone

### UpdateGatewayInformationOutput
* UpdateGatewayInformationOutput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway that was updated.
  * GatewayARN [GatewayARN](#gatewayarn)
  * GatewayName

### UpdateGatewaySoftwareNowInput
* UpdateGatewaySoftwareNowInput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway to update.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### UpdateGatewaySoftwareNowOutput
* UpdateGatewaySoftwareNowOutput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway that was updated.
  * GatewayARN [GatewayARN](#gatewayarn)

### UpdateMaintenanceStartTimeInput
* UpdateMaintenanceStartTimeInput `object`: <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfMonth</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfWeek</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$HourOfDay</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$MinuteOfHour</a> </p> </li> </ul>
  * DayOfMonth
  * DayOfWeek
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * HourOfDay **required**
  * MinuteOfHour **required**

### UpdateMaintenanceStartTimeOutput
* UpdateMaintenanceStartTimeOutput `object`: A JSON object containing the Amazon Resource Name (ARN) of the gateway whose maintenance start time is updated.
  * GatewayARN [GatewayARN](#gatewayarn)

### UpdateNFSFileShareInput
* UpdateNFSFileShareInput `object`: UpdateNFSFileShareInput
  * CacheAttributes
    * CacheStaleTimeoutInSeconds
  * ClientList
    * items [IPV4AddressCIDR](#ipv4addresscidr)
  * DefaultStorageClass
  * FileShareARN **required**
  * FileShareName
  * GuessMIMETypeEnabled
  * KMSEncrypted
  * KMSKey
  * NFSFileShareDefaults
    * DirectoryMode
    * FileMode
    * GroupId
    * OwnerId
  * NotificationPolicy
  * ObjectACL
  * ReadOnly
  * RequesterPays
  * Squash

### UpdateNFSFileShareOutput
* UpdateNFSFileShareOutput `object`: UpdateNFSFileShareOutput
  * FileShareARN

### UpdateSMBFileShareInput
* UpdateSMBFileShareInput `object`: UpdateSMBFileShareInput
  * AccessBasedEnumeration
  * AdminUserList
    * items [FileShareUser](#fileshareuser)
  * AuditDestinationARN
  * CacheAttributes
    * CacheStaleTimeoutInSeconds
  * CaseSensitivity
  * DefaultStorageClass
  * FileShareARN **required**
  * FileShareName
  * GuessMIMETypeEnabled
  * InvalidUserList
    * items [FileShareUser](#fileshareuser)
  * KMSEncrypted
  * KMSKey
  * NotificationPolicy
  * ObjectACL
  * ReadOnly
  * RequesterPays
  * SMBACLEnabled
  * ValidUserList
    * items [FileShareUser](#fileshareuser)

### UpdateSMBFileShareOutput
* UpdateSMBFileShareOutput `object`: UpdateSMBFileShareOutput
  * FileShareARN

### UpdateSMBFileShareVisibilityInput
* UpdateSMBFileShareVisibilityInput `object`
  * FileSharesVisible **required**
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### UpdateSMBFileShareVisibilityOutput
* UpdateSMBFileShareVisibilityOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### UpdateSMBSecurityStrategyInput
* UpdateSMBSecurityStrategyInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * SMBSecurityStrategy **required**

### UpdateSMBSecurityStrategyOutput
* UpdateSMBSecurityStrategyOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### UpdateSnapshotScheduleInput
* UpdateSnapshotScheduleInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateSnapshotScheduleInput$Description</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$RecurrenceInHours</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$StartAt</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$VolumeARN</a> </p> </li> </ul>
  * Description
  * RecurrenceInHours **required**
  * StartAt **required**
  * Tags
    * items [Tag](#tag)
  * VolumeARN **required**

### UpdateSnapshotScheduleOutput
* UpdateSnapshotScheduleOutput `object`: A JSON object containing the Amazon Resource Name (ARN) of the updated storage volume.
  * VolumeARN

### UpdateVTLDeviceTypeInput
* UpdateVTLDeviceTypeInput `object`
  * DeviceType **required**
  * VTLDeviceARN **required**

### UpdateVTLDeviceTypeOutput
* UpdateVTLDeviceTypeOutput `object`: UpdateVTLDeviceTypeOutput
  * VTLDeviceARN

### VTLDevice
* VTLDevice `object`: Represents a device object associated with a tape gateway.
  * DeviceiSCSIAttributes
    * ChapEnabled
    * NetworkInterfaceId
    * NetworkInterfacePort
    * TargetARN
  * VTLDeviceARN
  * VTLDeviceProductIdentifier
  * VTLDeviceType
  * VTLDeviceVendor

### VTLDeviceARN
* VTLDeviceARN `string`

### VTLDeviceARNs
* VTLDeviceARNs `array`
  * items [VTLDeviceARN](#vtldevicearn)

### VTLDeviceProductIdentifier
* VTLDeviceProductIdentifier `string`

### VTLDeviceType
* VTLDeviceType `string`

### VTLDeviceVendor
* VTLDeviceVendor `string`

### VTLDevices
* VTLDevices `array`
  * items [VTLDevice](#vtldevice)

### VolumeARN
* VolumeARN `string`

### VolumeARNs
* VolumeARNs `array`
  * items [VolumeARN](#volumearn)

### VolumeAttachmentStatus
* VolumeAttachmentStatus `string`

### VolumeId
* VolumeId `string`

### VolumeInfo
* VolumeInfo `object`: Describes a storage volume object.
  * GatewayARN [GatewayARN](#gatewayarn)
  * GatewayId
  * VolumeARN
  * VolumeAttachmentStatus
  * VolumeId
  * VolumeSizeInBytes
  * VolumeType

### VolumeInfos
* VolumeInfos `array`
  * items [VolumeInfo](#volumeinfo)

### VolumeRecoveryPointInfo
* VolumeRecoveryPointInfo `object`: Describes a storage volume recovery point object.
  * VolumeARN
  * VolumeRecoveryPointTime
  * VolumeSizeInBytes
  * VolumeUsageInBytes

### VolumeRecoveryPointInfos
* VolumeRecoveryPointInfos `array`
  * items [VolumeRecoveryPointInfo](#volumerecoverypointinfo)

### VolumeStatus
* VolumeStatus `string`

### VolumeType
* VolumeType `string`

### VolumeUsedInBytes
* VolumeUsedInBytes `integer`

### VolumeiSCSIAttributes
* VolumeiSCSIAttributes `object`: Lists iSCSI information about a volume.
  * ChapEnabled
  * LunNumber
  * NetworkInterfaceId
  * NetworkInterfacePort
  * TargetARN

### boolean
* boolean `boolean`

### double
* double `number`

### integer
* integer `integer`

### long
* long `integer`

### string
* string `string`


