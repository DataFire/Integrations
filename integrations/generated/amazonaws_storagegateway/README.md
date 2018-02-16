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

amazonaws_storagegateway.ActivateGateway({
  "ActivationKey": "",
  "GatewayName": "",
  "GatewayTimezone": "",
  "GatewayRegion": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Storage Gateway Service</fullname> <p>AWS Storage Gateway is the service that connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between an organization's on-premises IT environment and AWS's storage infrastructure. The service enables you to securely upload data to the AWS cloud for cost effective backup and rapid disaster recovery.</p> <p>Use the following links to get started using the <i>AWS Storage Gateway Service API Reference</i>:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders">AWS Storage Gateway Required Request Headers</a>: Describes the required headers that you must send with every POST request to AWS Storage Gateway.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests">Signing Requests</a>: AWS Storage Gateway requires that you authenticate every request you send; this topic describes how sign such a request.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses">Error Responses</a>: Provides reference information about AWS Storage Gateway errors.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html">Operations in AWS Storage Gateway</a>: Contains detailed descriptions of all AWS Storage Gateway operations, their request parameters, response elements, possible errors, and examples of requests and responses.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#sg_region">AWS Storage Gateway Regions and Endpoints:</a> Provides a list of each region and endpoints available for use with AWS Storage Gateway. </p> </li> </ul> <note> <p>AWS Storage Gateway resource IDs are in uppercase. When you use these resource IDs with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change your resource ID to lowercase to use it with the EC2 API. For example, in Storage Gateway the ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use this ID with the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>. Otherwise, the EC2 API might not behave as expected.</p> </note> <important> <p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway volumes are changing to a longer format. Starting in December 2016, all new volumes and snapshots will be created with a 17-character string. Starting in April 2016, you will be able to use these longer IDs so you can test your systems with the new format. For more information, see <a href="https://aws.amazon.com/ec2/faqs/#longer-ids">Longer EC2 and EBS Resource IDs</a>.</p> <p> For example, a volume Amazon Resource Name (ARN) with the longer volume ID format looks like the following:</p> <p> <code>arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG</code>.</p> <p>A snapshot ID with the longer ID format looks like the following: <code>snap-78e226633445566ee</code>.</p> <p>For more information, see <a href="https://forums.aws.amazon.com/ann.jspa?annID=3557">Announcement: Heads-up – Longer AWS Storage Gateway volume and snapshot IDs coming in 2016</a>.</p> </important>

## Actions

### ActivateGateway



```js
amazonaws_storagegateway.ActivateGateway({
  "ActivationKey": "",
  "GatewayName": "",
  "GatewayTimezone": "",
  "GatewayRegion": ""
}, context)
```

#### Input
* input `object`
  * ActivationKey **required** [ActivationKey](#activationkey)
  * GatewayName **required** [GatewayName](#gatewayname)
  * GatewayRegion **required** [RegionId](#regionid)
  * GatewayTimezone **required** [GatewayTimezone](#gatewaytimezone)
  * GatewayType [GatewayType](#gatewaytype)
  * MediumChangerType [MediumChangerType](#mediumchangertype)
  * TapeDriveType [TapeDriveType](#tapedrivetype)

#### Output
* output [ActivateGatewayOutput](#activategatewayoutput)

### AddCache



```js
amazonaws_storagegateway.AddCache({
  "GatewayARN": "",
  "DiskIds": []
}, context)
```

#### Input
* input `object`
  * DiskIds **required** [DiskIds](#diskids)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [AddCacheOutput](#addcacheoutput)

### AddTagsToResource



```js
amazonaws_storagegateway.AddTagsToResource({
  "ResourceARN": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceARN **required** [ResourceARN](#resourcearn)
  * Tags **required** [Tags](#tags)

#### Output
* output [AddTagsToResourceOutput](#addtagstoresourceoutput)

### AddUploadBuffer



```js
amazonaws_storagegateway.AddUploadBuffer({
  "GatewayARN": "",
  "DiskIds": []
}, context)
```

#### Input
* input `object`
  * DiskIds **required** [DiskIds](#diskids)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [AddUploadBufferOutput](#adduploadbufferoutput)

### AddWorkingStorage



```js
amazonaws_storagegateway.AddWorkingStorage({
  "GatewayARN": "",
  "DiskIds": []
}, context)
```

#### Input
* input `object`
  * DiskIds **required** [DiskIds](#diskids)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [AddWorkingStorageOutput](#addworkingstorageoutput)

### CancelArchival



```js
amazonaws_storagegateway.CancelArchival({
  "GatewayARN": "",
  "TapeARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required** [TapeARN](#tapearn)

#### Output
* output [CancelArchivalOutput](#cancelarchivaloutput)

### CancelRetrieval



```js
amazonaws_storagegateway.CancelRetrieval({
  "GatewayARN": "",
  "TapeARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required** [TapeARN](#tapearn)

#### Output
* output [CancelRetrievalOutput](#cancelretrievaloutput)

### CreateCachediSCSIVolume



```js
amazonaws_storagegateway.CreateCachediSCSIVolume({
  "GatewayARN": "",
  "VolumeSizeInBytes": 0,
  "TargetName": "",
  "NetworkInterfaceId": "",
  "ClientToken": ""
}, context)
```

#### Input
* input `object`
  * ClientToken **required** [ClientToken](#clienttoken)
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * NetworkInterfaceId **required** [NetworkInterfaceId](#networkinterfaceid)
  * SnapshotId [SnapshotId](#snapshotid)
  * SourceVolumeARN [VolumeARN](#volumearn)
  * TargetName **required** [TargetName](#targetname)
  * VolumeSizeInBytes **required** [long](#long)

#### Output
* output [CreateCachediSCSIVolumeOutput](#createcachediscsivolumeoutput)

### CreateNFSFileShare



```js
amazonaws_storagegateway.CreateNFSFileShare({
  "ClientToken": "",
  "GatewayARN": "",
  "Role": "",
  "LocationARN": ""
}, context)
```

#### Input
* input `object`
  * ClientList [FileShareClientList](#fileshareclientlist)
  * ClientToken **required** [ClientToken](#clienttoken)
  * DefaultStorageClass [StorageClass](#storageclass)
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * GuessMIMETypeEnabled [Boolean](#boolean)
  * KMSEncrypted [Boolean](#boolean)
  * KMSKey [KMSKey](#kmskey)
  * LocationARN **required** [LocationARN](#locationarn)
  * NFSFileShareDefaults [NFSFileShareDefaults](#nfsfilesharedefaults)
  * ReadOnly [Boolean](#boolean)
  * Role **required** [Role](#role)
  * Squash [Squash](#squash)

#### Output
* output [CreateNFSFileShareOutput](#createnfsfileshareoutput)

### CreateSnapshot



```js
amazonaws_storagegateway.CreateSnapshot({
  "VolumeARN": "",
  "SnapshotDescription": ""
}, context)
```

#### Input
* input `object`
  * SnapshotDescription **required** [SnapshotDescription](#snapshotdescription)
  * VolumeARN **required** [VolumeARN](#volumearn)

#### Output
* output [CreateSnapshotOutput](#createsnapshotoutput)

### CreateSnapshotFromVolumeRecoveryPoint



```js
amazonaws_storagegateway.CreateSnapshotFromVolumeRecoveryPoint({
  "VolumeARN": "",
  "SnapshotDescription": ""
}, context)
```

#### Input
* input `object`
  * SnapshotDescription **required** [SnapshotDescription](#snapshotdescription)
  * VolumeARN **required** [VolumeARN](#volumearn)

#### Output
* output [CreateSnapshotFromVolumeRecoveryPointOutput](#createsnapshotfromvolumerecoverypointoutput)

### CreateStorediSCSIVolume



```js
amazonaws_storagegateway.CreateStorediSCSIVolume({
  "GatewayARN": "",
  "DiskId": "",
  "PreserveExistingData": true,
  "TargetName": "",
  "NetworkInterfaceId": ""
}, context)
```

#### Input
* input `object`
  * DiskId **required** [DiskId](#diskid)
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * NetworkInterfaceId **required** [NetworkInterfaceId](#networkinterfaceid)
  * PreserveExistingData **required** [boolean](#boolean)
  * SnapshotId [SnapshotId](#snapshotid)
  * TargetName **required** [TargetName](#targetname)

#### Output
* output [CreateStorediSCSIVolumeOutput](#createstorediscsivolumeoutput)

### CreateTapeWithBarcode



```js
amazonaws_storagegateway.CreateTapeWithBarcode({
  "GatewayARN": "",
  "TapeSizeInBytes": 0,
  "TapeBarcode": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeBarcode **required** [TapeBarcode](#tapebarcode)
  * TapeSizeInBytes **required** [TapeSize](#tapesize)

#### Output
* output [CreateTapeWithBarcodeOutput](#createtapewithbarcodeoutput)

### CreateTapes



```js
amazonaws_storagegateway.CreateTapes({
  "GatewayARN": "",
  "TapeSizeInBytes": 0,
  "ClientToken": "",
  "NumTapesToCreate": 0,
  "TapeBarcodePrefix": ""
}, context)
```

#### Input
* input `object`
  * ClientToken **required** [ClientToken](#clienttoken)
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * NumTapesToCreate **required** [NumTapesToCreate](#numtapestocreate)
  * TapeBarcodePrefix **required** [TapeBarcodePrefix](#tapebarcodeprefix)
  * TapeSizeInBytes **required** [TapeSize](#tapesize)

#### Output
* output [CreateTapesOutput](#createtapesoutput)

### DeleteBandwidthRateLimit



```js
amazonaws_storagegateway.DeleteBandwidthRateLimit({
  "GatewayARN": "",
  "BandwidthType": ""
}, context)
```

#### Input
* input `object`
  * BandwidthType **required** [BandwidthType](#bandwidthtype)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [DeleteBandwidthRateLimitOutput](#deletebandwidthratelimitoutput)

### DeleteChapCredentials



```js
amazonaws_storagegateway.DeleteChapCredentials({
  "TargetARN": "",
  "InitiatorName": ""
}, context)
```

#### Input
* input `object`
  * InitiatorName **required** [IqnName](#iqnname)
  * TargetARN **required** [TargetARN](#targetarn)

#### Output
* output [DeleteChapCredentialsOutput](#deletechapcredentialsoutput)

### DeleteFileShare



```js
amazonaws_storagegateway.DeleteFileShare({
  "FileShareARN": ""
}, context)
```

#### Input
* input `object`
  * FileShareARN **required** [FileShareARN](#filesharearn)
  * ForceDelete [boolean](#boolean)

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
  "VolumeARN": ""
}, context)
```

#### Input
* input `object`
  * VolumeARN **required** [VolumeARN](#volumearn)

#### Output
* output [DeleteSnapshotScheduleOutput](#deletesnapshotscheduleoutput)

### DeleteTape



```js
amazonaws_storagegateway.DeleteTape({
  "GatewayARN": "",
  "TapeARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required** [TapeARN](#tapearn)

#### Output
* output [DeleteTapeOutput](#deletetapeoutput)

### DeleteTapeArchive



```js
amazonaws_storagegateway.DeleteTapeArchive({
  "TapeARN": ""
}, context)
```

#### Input
* input `object`
  * TapeARN **required** [TapeARN](#tapearn)

#### Output
* output [DeleteTapeArchiveOutput](#deletetapearchiveoutput)

### DeleteVolume



```js
amazonaws_storagegateway.DeleteVolume({
  "VolumeARN": ""
}, context)
```

#### Input
* input `object`
  * VolumeARN **required** [VolumeARN](#volumearn)

#### Output
* output [DeleteVolumeOutput](#deletevolumeoutput)

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
  "VolumeARNs": []
}, context)
```

#### Input
* input `object`
  * VolumeARNs **required** [VolumeARNs](#volumearns)

#### Output
* output [DescribeCachediSCSIVolumesOutput](#describecachediscsivolumesoutput)

### DescribeChapCredentials



```js
amazonaws_storagegateway.DescribeChapCredentials({
  "TargetARN": ""
}, context)
```

#### Input
* input `object`
  * TargetARN **required** [TargetARN](#targetarn)

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
  "FileShareARNList": []
}, context)
```

#### Input
* input `object`
  * FileShareARNList **required** [FileShareARNList](#filesharearnlist)

#### Output
* output [DescribeNFSFileSharesOutput](#describenfsfilesharesoutput)

### DescribeSnapshotSchedule



```js
amazonaws_storagegateway.DescribeSnapshotSchedule({
  "VolumeARN": ""
}, context)
```

#### Input
* input `object`
  * VolumeARN **required** [VolumeARN](#volumearn)

#### Output
* output [DescribeSnapshotScheduleOutput](#describesnapshotscheduleoutput)

### DescribeStorediSCSIVolumes



```js
amazonaws_storagegateway.DescribeStorediSCSIVolumes({
  "VolumeARNs": []
}, context)
```

#### Input
* input `object`
  * VolumeARNs **required** [VolumeARNs](#volumearns)

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
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)
  * TapeARNs [TapeARNs](#tapearns)

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
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)

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
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)
  * TapeARNs [TapeARNs](#tapearns)

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
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)
  * VTLDeviceARNs [VTLDeviceARNs](#vtldevicearns)

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

### ListFileShares



```js
amazonaws_storagegateway.ListFileShares({}, context)
```

#### Input
* input `object`
  * GatewayARN [GatewayARN](#gatewayarn)
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)

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
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)

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
  "ResourceARN": ""
}, context)
```

#### Input
* input `object`
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)
  * ResourceARN **required** [ResourceARN](#resourcearn)

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### ListTapes



```js
amazonaws_storagegateway.ListTapes({}, context)
```

#### Input
* input `object`
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)
  * TapeARNs [TapeARNs](#tapearns)

#### Output
* output [ListTapesOutput](#listtapesoutput)

### ListVolumeInitiators



```js
amazonaws_storagegateway.ListVolumeInitiators({
  "VolumeARN": ""
}, context)
```

#### Input
* input `object`
  * VolumeARN **required** [VolumeARN](#volumearn)

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
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)

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
  "FileShareARN": ""
}, context)
```

#### Input
* input `object`
  * FileShareARN **required** [FileShareARN](#filesharearn)

#### Output
* output [RefreshCacheOutput](#refreshcacheoutput)

### RemoveTagsFromResource



```js
amazonaws_storagegateway.RemoveTagsFromResource({
  "ResourceARN": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceARN **required** [ResourceARN](#resourcearn)
  * TagKeys **required** [TagKeys](#tagkeys)

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
  "TapeARN": "",
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required** [TapeARN](#tapearn)

#### Output
* output [RetrieveTapeArchiveOutput](#retrievetapearchiveoutput)

### RetrieveTapeRecoveryPoint



```js
amazonaws_storagegateway.RetrieveTapeRecoveryPoint({
  "TapeARN": "",
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required** [TapeARN](#tapearn)

#### Output
* output [RetrieveTapeRecoveryPointOutput](#retrievetaperecoverypointoutput)

### SetLocalConsolePassword



```js
amazonaws_storagegateway.SetLocalConsolePassword({
  "GatewayARN": "",
  "LocalConsolePassword": ""
}, context)
```

#### Input
* input `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * LocalConsolePassword **required** [LocalConsolePassword](#localconsolepassword)

#### Output
* output [SetLocalConsolePasswordOutput](#setlocalconsolepasswordoutput)

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

### UpdateBandwidthRateLimit



```js
amazonaws_storagegateway.UpdateBandwidthRateLimit({
  "GatewayARN": ""
}, context)
```

#### Input
* input `object`
  * AverageDownloadRateLimitInBitsPerSec [BandwidthDownloadRateLimit](#bandwidthdownloadratelimit)
  * AverageUploadRateLimitInBitsPerSec [BandwidthUploadRateLimit](#bandwidthuploadratelimit)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

#### Output
* output [UpdateBandwidthRateLimitOutput](#updatebandwidthratelimitoutput)

### UpdateChapCredentials



```js
amazonaws_storagegateway.UpdateChapCredentials({
  "TargetARN": "",
  "SecretToAuthenticateInitiator": "",
  "InitiatorName": ""
}, context)
```

#### Input
* input `object`
  * InitiatorName **required** [IqnName](#iqnname)
  * SecretToAuthenticateInitiator **required** [ChapSecret](#chapsecret)
  * SecretToAuthenticateTarget [ChapSecret](#chapsecret)
  * TargetARN **required** [TargetARN](#targetarn)

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
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * GatewayName [GatewayName](#gatewayname)
  * GatewayTimezone [GatewayTimezone](#gatewaytimezone)

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
  "HourOfDay": 0,
  "MinuteOfHour": 0,
  "DayOfWeek": 0
}, context)
```

#### Input
* input `object`
  * DayOfWeek **required** [DayOfWeek](#dayofweek)
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * HourOfDay **required** [HourOfDay](#hourofday)
  * MinuteOfHour **required** [MinuteOfHour](#minuteofhour)

#### Output
* output [UpdateMaintenanceStartTimeOutput](#updatemaintenancestarttimeoutput)

### UpdateNFSFileShare



```js
amazonaws_storagegateway.UpdateNFSFileShare({
  "FileShareARN": ""
}, context)
```

#### Input
* input `object`
  * ClientList [FileShareClientList](#fileshareclientlist)
  * DefaultStorageClass [StorageClass](#storageclass)
  * FileShareARN **required** [FileShareARN](#filesharearn)
  * GuessMIMETypeEnabled [Boolean](#boolean)
  * KMSEncrypted [Boolean](#boolean)
  * KMSKey [KMSKey](#kmskey)
  * NFSFileShareDefaults [NFSFileShareDefaults](#nfsfilesharedefaults)
  * ReadOnly [Boolean](#boolean)
  * Squash [Squash](#squash)

#### Output
* output [UpdateNFSFileShareOutput](#updatenfsfileshareoutput)

### UpdateSnapshotSchedule



```js
amazonaws_storagegateway.UpdateSnapshotSchedule({
  "VolumeARN": "",
  "StartAt": 0,
  "RecurrenceInHours": 0
}, context)
```

#### Input
* input `object`
  * Description [Description](#description)
  * RecurrenceInHours **required** [RecurrenceInHours](#recurrenceinhours)
  * StartAt **required** [HourOfDay](#hourofday)
  * VolumeARN **required** [VolumeARN](#volumearn)

#### Output
* output [UpdateSnapshotScheduleOutput](#updatesnapshotscheduleoutput)

### UpdateVTLDeviceType



```js
amazonaws_storagegateway.UpdateVTLDeviceType({
  "VTLDeviceARN": "",
  "DeviceType": ""
}, context)
```

#### Input
* input `object`
  * DeviceType **required** [DeviceType](#devicetype)
  * VTLDeviceARN **required** [VTLDeviceARN](#vtldevicearn)

#### Output
* output [UpdateVTLDeviceTypeOutput](#updatevtldevicetypeoutput)



## Definitions

### ActivateGatewayInput
* ActivateGatewayInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>ActivateGatewayInput$ActivationKey</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayName</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayRegion</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayTimezone</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$TapeDriveType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$MediumChangerType</a> </p> </li> </ul>
  * ActivationKey **required** [ActivationKey](#activationkey)
  * GatewayName **required** [GatewayName](#gatewayname)
  * GatewayRegion **required** [RegionId](#regionid)
  * GatewayTimezone **required** [GatewayTimezone](#gatewaytimezone)
  * GatewayType [GatewayType](#gatewaytype)
  * MediumChangerType [MediumChangerType](#mediumchangertype)
  * TapeDriveType [TapeDriveType](#tapedrivetype)

### ActivateGatewayOutput
* ActivateGatewayOutput `object`: <p>AWS Storage Gateway returns the Amazon Resource Name (ARN) of the activated gateway. It is a string made of information such as your account, gateway name, and region. This ARN is used to reference the gateway in other API operations as well as resource-based authorization.</p> <note> <p>For gateways activated prior to September 02, 2015, the gateway ARN contains the gateway name rather than the gateway ID. Changing the name of the gateway has no effect on the gateway ARN.</p> </note>
  * GatewayARN [GatewayARN](#gatewayarn)

### ActivationKey
* ActivationKey `string`

### AddCacheInput
* AddCacheInput `object`
  * DiskIds **required** [DiskIds](#diskids)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### AddCacheOutput
* AddCacheOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### AddTagsToResourceInput
* AddTagsToResourceInput `object`: AddTagsToResourceInput
  * ResourceARN **required** [ResourceARN](#resourcearn)
  * Tags **required** [Tags](#tags)

### AddTagsToResourceOutput
* AddTagsToResourceOutput `object`: AddTagsToResourceOutput
  * ResourceARN [ResourceARN](#resourcearn)

### AddUploadBufferInput
* AddUploadBufferInput `object`
  * DiskIds **required** [DiskIds](#diskids)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### AddUploadBufferOutput
* AddUploadBufferOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### AddWorkingStorageInput
* AddWorkingStorageInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>AddWorkingStorageInput$DiskIds</a> </p> </li> </ul>
  * DiskIds **required** [DiskIds](#diskids)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### AddWorkingStorageOutput
* AddWorkingStorageOutput `object`: A JSON object containing the of the gateway for which working storage was configured.
  * GatewayARN [GatewayARN](#gatewayarn)

### BandwidthDownloadRateLimit
* BandwidthDownloadRateLimit `integer`

### BandwidthType
* BandwidthType `string`

### BandwidthUploadRateLimit
* BandwidthUploadRateLimit `integer`

### Boolean
* Boolean `boolean`: A value that indicates whether the write status of a file share is read-only: "true" if write status is read-only, and otherwise "false".

### CachediSCSIVolume
* CachediSCSIVolume `object`: Describes an iSCSI cached volume.
  * CreatedDate [CreatedDate](#createddate)
  * SourceSnapshotId [SnapshotId](#snapshotid)
  * VolumeARN [VolumeARN](#volumearn)
  * VolumeId [VolumeId](#volumeid)
  * VolumeProgress [DoubleObject](#doubleobject)
  * VolumeSizeInBytes [long](#long)
  * VolumeStatus [VolumeStatus](#volumestatus)
  * VolumeType [VolumeType](#volumetype)
  * VolumeUsedInBytes [VolumeUsedInBytes](#volumeusedinbytes)
  * VolumeiSCSIAttributes [VolumeiSCSIAttributes](#volumeiscsiattributes)

### CachediSCSIVolumes
* CachediSCSIVolumes `array`
  * items [CachediSCSIVolume](#cachediscsivolume)

### CancelArchivalInput
* CancelArchivalInput `object`: CancelArchivalInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required** [TapeARN](#tapearn)

### CancelArchivalOutput
* CancelArchivalOutput `object`: CancelArchivalOutput
  * TapeARN [TapeARN](#tapearn)

### CancelRetrievalInput
* CancelRetrievalInput `object`: CancelRetrievalInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required** [TapeARN](#tapearn)

### CancelRetrievalOutput
* CancelRetrievalOutput `object`: CancelRetrievalOutput
  * TapeARN [TapeARN](#tapearn)

### ChapCredentials
* ChapCredentials `array`
  * items [ChapInfo](#chapinfo)

### ChapInfo
* ChapInfo `object`: Describes Challenge-Handshake Authentication Protocol (CHAP) information that supports authentication between your gateway and iSCSI initiators.
  * InitiatorName [IqnName](#iqnname)
  * SecretToAuthenticateInitiator [ChapSecret](#chapsecret)
  * SecretToAuthenticateTarget [ChapSecret](#chapsecret)
  * TargetARN [TargetARN](#targetarn)

### ChapSecret
* ChapSecret `string`

### ClientToken
* ClientToken `string`

### CreateCachediSCSIVolumeInput
* CreateCachediSCSIVolumeInput `object`
  * ClientToken **required** [ClientToken](#clienttoken)
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * NetworkInterfaceId **required** [NetworkInterfaceId](#networkinterfaceid)
  * SnapshotId [SnapshotId](#snapshotid)
  * SourceVolumeARN [VolumeARN](#volumearn)
  * TargetName **required** [TargetName](#targetname)
  * VolumeSizeInBytes **required** [long](#long)

### CreateCachediSCSIVolumeOutput
* CreateCachediSCSIVolumeOutput `object`
  * TargetARN [TargetARN](#targetarn)
  * VolumeARN [VolumeARN](#volumearn)

### CreateNFSFileShareInput
* CreateNFSFileShareInput `object`: CreateNFSFileShareInput
  * ClientList [FileShareClientList](#fileshareclientlist)
  * ClientToken **required** [ClientToken](#clienttoken)
  * DefaultStorageClass [StorageClass](#storageclass)
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * GuessMIMETypeEnabled [Boolean](#boolean)
  * KMSEncrypted [Boolean](#boolean)
  * KMSKey [KMSKey](#kmskey)
  * LocationARN **required** [LocationARN](#locationarn)
  * NFSFileShareDefaults [NFSFileShareDefaults](#nfsfilesharedefaults)
  * ReadOnly [Boolean](#boolean)
  * Role **required** [Role](#role)
  * Squash [Squash](#squash)

### CreateNFSFileShareOutput
* CreateNFSFileShareOutput `object`: CreateNFSFileShareOutput
  * FileShareARN [FileShareARN](#filesharearn)

### CreateSnapshotFromVolumeRecoveryPointInput
* CreateSnapshotFromVolumeRecoveryPointInput `object`
  * SnapshotDescription **required** [SnapshotDescription](#snapshotdescription)
  * VolumeARN **required** [VolumeARN](#volumearn)

### CreateSnapshotFromVolumeRecoveryPointOutput
* CreateSnapshotFromVolumeRecoveryPointOutput `object`
  * SnapshotId [SnapshotId](#snapshotid)
  * VolumeARN [VolumeARN](#volumearn)
  * VolumeRecoveryPointTime [string](#string)

### CreateSnapshotInput
* CreateSnapshotInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateSnapshotInput$SnapshotDescription</a> </p> </li> <li> <p> <a>CreateSnapshotInput$VolumeARN</a> </p> </li> </ul>
  * SnapshotDescription **required** [SnapshotDescription](#snapshotdescription)
  * VolumeARN **required** [VolumeARN](#volumearn)

### CreateSnapshotOutput
* CreateSnapshotOutput `object`: A JSON object containing the following fields:
  * SnapshotId [SnapshotId](#snapshotid)
  * VolumeARN [VolumeARN](#volumearn)

### CreateStorediSCSIVolumeInput
* CreateStorediSCSIVolumeInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateStorediSCSIVolumeInput$DiskId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$NetworkInterfaceId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$PreserveExistingData</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$SnapshotId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$TargetName</a> </p> </li> </ul>
  * DiskId **required** [DiskId](#diskid)
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * NetworkInterfaceId **required** [NetworkInterfaceId](#networkinterfaceid)
  * PreserveExistingData **required** [boolean](#boolean)
  * SnapshotId [SnapshotId](#snapshotid)
  * TargetName **required** [TargetName](#targetname)

### CreateStorediSCSIVolumeOutput
* CreateStorediSCSIVolumeOutput `object`: A JSON object containing the following fields:
  * TargetARN [TargetARN](#targetarn)
  * VolumeARN [VolumeARN](#volumearn)
  * VolumeSizeInBytes [long](#long)

### CreateTapeWithBarcodeInput
* CreateTapeWithBarcodeInput `object`: CreateTapeWithBarcodeInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeBarcode **required** [TapeBarcode](#tapebarcode)
  * TapeSizeInBytes **required** [TapeSize](#tapesize)

### CreateTapeWithBarcodeOutput
* CreateTapeWithBarcodeOutput `object`: CreateTapeOutput
  * TapeARN [TapeARN](#tapearn)

### CreateTapesInput
* CreateTapesInput `object`: CreateTapesInput
  * ClientToken **required** [ClientToken](#clienttoken)
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * NumTapesToCreate **required** [NumTapesToCreate](#numtapestocreate)
  * TapeBarcodePrefix **required** [TapeBarcodePrefix](#tapebarcodeprefix)
  * TapeSizeInBytes **required** [TapeSize](#tapesize)

### CreateTapesOutput
* CreateTapesOutput `object`: CreateTapeOutput
  * TapeARNs [TapeARNs](#tapearns)

### CreatedDate
* CreatedDate `string`

### DayOfWeek
* DayOfWeek `integer`

### DeleteBandwidthRateLimitInput
* DeleteBandwidthRateLimitInput `object`: <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DeleteBandwidthRateLimitInput$BandwidthType</a> </p> </li> </ul>
  * BandwidthType **required** [BandwidthType](#bandwidthtype)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DeleteBandwidthRateLimitOutput
* DeleteBandwidthRateLimitOutput `object`: A JSON object containing the of the gateway whose bandwidth rate information was deleted.
  * GatewayARN [GatewayARN](#gatewayarn)

### DeleteChapCredentialsInput
* DeleteChapCredentialsInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>DeleteChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>DeleteChapCredentialsInput$TargetARN</a> </p> </li> </ul>
  * InitiatorName **required** [IqnName](#iqnname)
  * TargetARN **required** [TargetARN](#targetarn)

### DeleteChapCredentialsOutput
* DeleteChapCredentialsOutput `object`: A JSON object containing the following fields:
  * InitiatorName [IqnName](#iqnname)
  * TargetARN [TargetARN](#targetarn)

### DeleteFileShareInput
* DeleteFileShareInput `object`: DeleteFileShareInput
  * FileShareARN **required** [FileShareARN](#filesharearn)
  * ForceDelete [boolean](#boolean)

### DeleteFileShareOutput
* DeleteFileShareOutput `object`: DeleteFileShareOutput
  * FileShareARN [FileShareARN](#filesharearn)

### DeleteGatewayInput
* DeleteGatewayInput `object`: A JSON object containing the ID of the gateway to delete.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DeleteGatewayOutput
* DeleteGatewayOutput `object`: A JSON object containing the ID of the deleted gateway.
  * GatewayARN [GatewayARN](#gatewayarn)

### DeleteSnapshotScheduleInput
* DeleteSnapshotScheduleInput `object`
  * VolumeARN **required** [VolumeARN](#volumearn)

### DeleteSnapshotScheduleOutput
* DeleteSnapshotScheduleOutput `object`
  * VolumeARN [VolumeARN](#volumearn)

### DeleteTapeArchiveInput
* DeleteTapeArchiveInput `object`: DeleteTapeArchiveInput
  * TapeARN **required** [TapeARN](#tapearn)

### DeleteTapeArchiveOutput
* DeleteTapeArchiveOutput `object`: DeleteTapeArchiveOutput
  * TapeARN [TapeARN](#tapearn)

### DeleteTapeInput
* DeleteTapeInput `object`: DeleteTapeInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required** [TapeARN](#tapearn)

### DeleteTapeOutput
* DeleteTapeOutput `object`: DeleteTapeOutput
  * TapeARN [TapeARN](#tapearn)

### DeleteVolumeInput
* DeleteVolumeInput `object`: A JSON object containing the <a>DeleteVolumeInput$VolumeARN</a> to delete.
  * VolumeARN **required** [VolumeARN](#volumearn)

### DeleteVolumeOutput
* DeleteVolumeOutput `object`: A JSON object containing the of the storage volume that was deleted
  * VolumeARN [VolumeARN](#volumearn)

### DescribeBandwidthRateLimitInput
* DescribeBandwidthRateLimitInput `object`: A JSON object containing the of the gateway.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeBandwidthRateLimitOutput
* DescribeBandwidthRateLimitOutput `object`: A JSON object containing the following fields:
  * AverageDownloadRateLimitInBitsPerSec [BandwidthDownloadRateLimit](#bandwidthdownloadratelimit)
  * AverageUploadRateLimitInBitsPerSec [BandwidthUploadRateLimit](#bandwidthuploadratelimit)
  * GatewayARN [GatewayARN](#gatewayarn)

### DescribeCacheInput
* DescribeCacheInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeCacheOutput
* DescribeCacheOutput `object`
  * CacheAllocatedInBytes [long](#long)
  * CacheDirtyPercentage [double](#double)
  * CacheHitPercentage [double](#double)
  * CacheMissPercentage [double](#double)
  * CacheUsedPercentage [double](#double)
  * DiskIds [DiskIds](#diskids)
  * GatewayARN [GatewayARN](#gatewayarn)

### DescribeCachediSCSIVolumesInput
* DescribeCachediSCSIVolumesInput `object`
  * VolumeARNs **required** [VolumeARNs](#volumearns)

### DescribeCachediSCSIVolumesOutput
* DescribeCachediSCSIVolumesOutput `object`: A JSON object containing the following fields:
  * CachediSCSIVolumes [CachediSCSIVolumes](#cachediscsivolumes)

### DescribeChapCredentialsInput
* DescribeChapCredentialsInput `object`: A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume target.
  * TargetARN **required** [TargetARN](#targetarn)

### DescribeChapCredentialsOutput
* DescribeChapCredentialsOutput `object`: A JSON object containing a .
  * ChapCredentials [ChapCredentials](#chapcredentials)

### DescribeGatewayInformationInput
* DescribeGatewayInformationInput `object`: A JSON object containing the ID of the gateway.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeGatewayInformationOutput
* DescribeGatewayInformationOutput `object`: A JSON object containing the following fields:
  * GatewayARN [GatewayARN](#gatewayarn)
  * GatewayId [GatewayId](#gatewayid)
  * GatewayName [string](#string)
  * GatewayNetworkInterfaces [GatewayNetworkInterfaces](#gatewaynetworkinterfaces)
  * GatewayState [GatewayState](#gatewaystate)
  * GatewayTimezone [GatewayTimezone](#gatewaytimezone)
  * GatewayType [GatewayType](#gatewaytype)
  * LastSoftwareUpdate [LastSoftwareUpdate](#lastsoftwareupdate)
  * NextUpdateAvailabilityDate [NextUpdateAvailabilityDate](#nextupdateavailabilitydate)

### DescribeMaintenanceStartTimeInput
* DescribeMaintenanceStartTimeInput `object`: A JSON object containing the of the gateway.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeMaintenanceStartTimeOutput
* DescribeMaintenanceStartTimeOutput `object`: <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DescribeMaintenanceStartTimeOutput$DayOfWeek</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$HourOfDay</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$MinuteOfHour</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$Timezone</a> </p> </li> </ul>
  * DayOfWeek [DayOfWeek](#dayofweek)
  * GatewayARN [GatewayARN](#gatewayarn)
  * HourOfDay [HourOfDay](#hourofday)
  * MinuteOfHour [MinuteOfHour](#minuteofhour)
  * Timezone [GatewayTimezone](#gatewaytimezone)

### DescribeNFSFileSharesInput
* DescribeNFSFileSharesInput `object`: DescribeNFSFileSharesInput
  * FileShareARNList **required** [FileShareARNList](#filesharearnlist)

### DescribeNFSFileSharesOutput
* DescribeNFSFileSharesOutput `object`: DescribeNFSFileSharesOutput
  * NFSFileShareInfoList [NFSFileShareInfoList](#nfsfileshareinfolist)

### DescribeSnapshotScheduleInput
* DescribeSnapshotScheduleInput `object`: A JSON object containing the <a>DescribeSnapshotScheduleInput$VolumeARN</a> of the volume.
  * VolumeARN **required** [VolumeARN](#volumearn)

### DescribeSnapshotScheduleOutput
* DescribeSnapshotScheduleOutput `object`
  * Description [Description](#description)
  * RecurrenceInHours [RecurrenceInHours](#recurrenceinhours)
  * StartAt [HourOfDay](#hourofday)
  * Timezone [GatewayTimezone](#gatewaytimezone)
  * VolumeARN [VolumeARN](#volumearn)

### DescribeStorediSCSIVolumesInput
* DescribeStorediSCSIVolumesInput `object`: A JSON object containing a list of <a>DescribeStorediSCSIVolumesInput$VolumeARNs</a>.
  * VolumeARNs **required** [VolumeARNs](#volumearns)

### DescribeStorediSCSIVolumesOutput
* DescribeStorediSCSIVolumesOutput `object`
  * StorediSCSIVolumes [StorediSCSIVolumes](#storediscsivolumes)

### DescribeTapeArchivesInput
* DescribeTapeArchivesInput `object`: DescribeTapeArchivesInput
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)
  * TapeARNs [TapeARNs](#tapearns)

### DescribeTapeArchivesOutput
* DescribeTapeArchivesOutput `object`: DescribeTapeArchivesOutput
  * Marker [Marker](#marker)
  * TapeArchives [TapeArchives](#tapearchives)

### DescribeTapeRecoveryPointsInput
* DescribeTapeRecoveryPointsInput `object`: DescribeTapeRecoveryPointsInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)

### DescribeTapeRecoveryPointsOutput
* DescribeTapeRecoveryPointsOutput `object`: DescribeTapeRecoveryPointsOutput
  * GatewayARN [GatewayARN](#gatewayarn)
  * Marker [Marker](#marker)
  * TapeRecoveryPointInfos [TapeRecoveryPointInfos](#taperecoverypointinfos)

### DescribeTapesInput
* DescribeTapesInput `object`: DescribeTapesInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)
  * TapeARNs [TapeARNs](#tapearns)

### DescribeTapesOutput
* DescribeTapesOutput `object`: DescribeTapesOutput
  * Marker [Marker](#marker)
  * Tapes [Tapes](#tapes)

### DescribeUploadBufferInput
* DescribeUploadBufferInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeUploadBufferOutput
* DescribeUploadBufferOutput `object`
  * DiskIds [DiskIds](#diskids)
  * GatewayARN [GatewayARN](#gatewayarn)
  * UploadBufferAllocatedInBytes [long](#long)
  * UploadBufferUsedInBytes [long](#long)

### DescribeVTLDevicesInput
* DescribeVTLDevicesInput `object`: DescribeVTLDevicesInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)
  * VTLDeviceARNs [VTLDeviceARNs](#vtldevicearns)

### DescribeVTLDevicesOutput
* DescribeVTLDevicesOutput `object`: DescribeVTLDevicesOutput
  * GatewayARN [GatewayARN](#gatewayarn)
  * Marker [Marker](#marker)
  * VTLDevices [VTLDevices](#vtldevices)

### DescribeWorkingStorageInput
* DescribeWorkingStorageInput `object`: A JSON object containing the of the gateway.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DescribeWorkingStorageOutput
* DescribeWorkingStorageOutput `object`: A JSON object containing the following fields:
  * DiskIds [DiskIds](#diskids)
  * GatewayARN [GatewayARN](#gatewayarn)
  * WorkingStorageAllocatedInBytes [long](#long)
  * WorkingStorageUsedInBytes [long](#long)

### Description
* Description `string`

### DeviceType
* DeviceType `string`

### DeviceiSCSIAttributes
* DeviceiSCSIAttributes `object`: Lists iSCSI information about a VTL device.
  * ChapEnabled [boolean](#boolean)
  * NetworkInterfaceId [NetworkInterfaceId](#networkinterfaceid)
  * NetworkInterfacePort [integer](#integer)
  * TargetARN [TargetARN](#targetarn)

### DisableGatewayInput
* DisableGatewayInput `object`: DisableGatewayInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### DisableGatewayOutput
* DisableGatewayOutput `object`: DisableGatewayOutput
  * GatewayARN [GatewayARN](#gatewayarn)

### Disk
* Disk `object`
  * DiskAllocationResource [string](#string)
  * DiskAllocationType [DiskAllocationType](#diskallocationtype)
  * DiskId [DiskId](#diskid)
  * DiskNode [string](#string)
  * DiskPath [string](#string)
  * DiskSizeInBytes [long](#long)
  * DiskStatus [string](#string)

### DiskAllocationType
* DiskAllocationType `string`

### DiskId
* DiskId `string`

### DiskIds
* DiskIds `array`
  * items [DiskId](#diskid)

### Disks
* Disks `array`
  * items [Disk](#disk)

### DoubleObject
* DoubleObject `number`

### ErrorCode
* ErrorCode `string` (values: ActivationKeyExpired, ActivationKeyInvalid, ActivationKeyNotFound, GatewayInternalError, GatewayNotConnected, GatewayNotFound, GatewayProxyNetworkConnectionBusy, AuthenticationFailure, BandwidthThrottleScheduleNotFound, Blocked, CannotExportSnapshot, ChapCredentialNotFound, DiskAlreadyAllocated, DiskDoesNotExist, DiskSizeGreaterThanVolumeMaxSize, DiskSizeLessThanVolumeSize, DiskSizeNotGigAligned, DuplicateCertificateInfo, DuplicateSchedule, EndpointNotFound, IAMNotSupported, InitiatorInvalid, InitiatorNotFound, InternalError, InvalidGateway, InvalidEndpoint, InvalidParameters, InvalidSchedule, LocalStorageLimitExceeded, LunAlreadyAllocated , LunInvalid, MaximumContentLengthExceeded, MaximumTapeCartridgeCountExceeded, MaximumVolumeCountExceeded, NetworkConfigurationChanged, NoDisksAvailable, NotImplemented, NotSupported, OperationAborted, OutdatedGateway, ParametersNotImplemented, RegionInvalid, RequestTimeout, ServiceUnavailable, SnapshotDeleted, SnapshotIdInvalid, SnapshotInProgress, SnapshotNotFound, SnapshotScheduleNotFound, StagingAreaFull, StorageFailure, TapeCartridgeNotFound, TargetAlreadyExists, TargetInvalid, TargetNotFound, UnauthorizedOperation, VolumeAlreadyExists, VolumeIdInvalid, VolumeInUse, VolumeNotFound, VolumeNotReady)

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
  * GatewayARN [GatewayARN](#gatewayarn)

### FileShareInfoList
* FileShareInfoList `array`
  * items [FileShareInfo](#fileshareinfo)

### FileShareStatus
* FileShareStatus `string`: The status of the file share. Possible values are CREATING, UPDATING, AVAILABLE and DELETING. 

### GatewayARN
* GatewayARN `string`: The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### GatewayId
* GatewayId `string`

### GatewayInfo
* GatewayInfo `object`: Describes a gateway object.
  * GatewayARN [GatewayARN](#gatewayarn)
  * GatewayId [GatewayId](#gatewayid)
  * GatewayName [string](#string)
  * GatewayOperationalState [GatewayOperationalState](#gatewayoperationalstate)
  * GatewayType [GatewayType](#gatewaytype)

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
* InternalServerError `object`: An internal server error has occurred during the request. For more information, see the error and message fields.
  * error [StorageGatewayError](#storagegatewayerror)
  * message [string](#string)

### InvalidGatewayRequestException
* InvalidGatewayRequestException `object`: An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.
  * error [StorageGatewayError](#storagegatewayerror)
  * message [string](#string)

### IqnName
* IqnName `string`

### KMSKey
* KMSKey `string`: The ARN of the KMS key used for Amazon S3 server side encryption. 

### LastSoftwareUpdate
* LastSoftwareUpdate `string`

### ListFileSharesInput
* ListFileSharesInput `object`: ListFileShareInput
  * GatewayARN [GatewayARN](#gatewayarn)
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)

### ListFileSharesOutput
* ListFileSharesOutput `object`: ListFileShareOutput
  * FileShareInfoList [FileShareInfoList](#fileshareinfolist)
  * Marker [Marker](#marker)
  * NextMarker [Marker](#marker)

### ListGatewaysInput
* ListGatewaysInput `object`: <p>A JSON object containing zero or more of the following fields:</p> <ul> <li> <p> <a>ListGatewaysInput$Limit</a> </p> </li> <li> <p> <a>ListGatewaysInput$Marker</a> </p> </li> </ul>
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)

### ListGatewaysOutput
* ListGatewaysOutput `object`
  * Gateways [Gateways](#gateways)
  * Marker [Marker](#marker)

### ListLocalDisksInput
* ListLocalDisksInput `object`: A JSON object containing the of the gateway.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### ListLocalDisksOutput
* ListLocalDisksOutput `object`
  * Disks [Disks](#disks)
  * GatewayARN [GatewayARN](#gatewayarn)

### ListTagsForResourceInput
* ListTagsForResourceInput `object`: ListTagsForResourceInput
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)
  * ResourceARN **required** [ResourceARN](#resourcearn)

### ListTagsForResourceOutput
* ListTagsForResourceOutput `object`: ListTagsForResourceOutput
  * Marker [Marker](#marker)
  * ResourceARN [ResourceARN](#resourcearn)
  * Tags [Tags](#tags)

### ListTapesInput
* ListTapesInput `object`: <p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListTapesInput$Limit</a> </p> </li> <li> <p> <a>ListTapesInput$Marker</a> </p> </li> <li> <p> <a>ListTapesInput$TapeARNs</a> </p> </li> </ul>
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)
  * TapeARNs [TapeARNs](#tapearns)

### ListTapesOutput
* ListTapesOutput `object`: <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListTapesOutput$Marker</a> </p> </li> <li> <p> <a>ListTapesOutput$VolumeInfos</a> </p> </li> </ul>
  * Marker [Marker](#marker)
  * TapeInfos [TapeInfos](#tapeinfos)

### ListVolumeInitiatorsInput
* ListVolumeInitiatorsInput `object`: ListVolumeInitiatorsInput
  * VolumeARN **required** [VolumeARN](#volumearn)

### ListVolumeInitiatorsOutput
* ListVolumeInitiatorsOutput `object`: ListVolumeInitiatorsOutput
  * Initiators [Initiators](#initiators)

### ListVolumeRecoveryPointsInput
* ListVolumeRecoveryPointsInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### ListVolumeRecoveryPointsOutput
* ListVolumeRecoveryPointsOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)
  * VolumeRecoveryPointInfos [VolumeRecoveryPointInfos](#volumerecoverypointinfos)

### ListVolumesInput
* ListVolumesInput `object`: <p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListVolumesInput$Limit</a> </p> </li> <li> <p> <a>ListVolumesInput$Marker</a> </p> </li> </ul>
  * GatewayARN [GatewayARN](#gatewayarn)
  * Limit [PositiveIntObject](#positiveintobject)
  * Marker [Marker](#marker)

### ListVolumesOutput
* ListVolumesOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)
  * Marker [Marker](#marker)
  * VolumeInfos [VolumeInfos](#volumeinfos)

### LocalConsolePassword
* LocalConsolePassword `string`

### LocationARN
* LocationARN `string`: The ARN of the backend storage used for storing file data. 

### Marker
* Marker `string`

### MediumChangerType
* MediumChangerType `string`

### MinuteOfHour
* MinuteOfHour `integer`

### NFSFileShareDefaults
* NFSFileShareDefaults `object`: Describes file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported in the file gateway type.
  * DirectoryMode [PermissionMode](#permissionmode)
  * FileMode [PermissionMode](#permissionmode)
  * GroupId [PermissionId](#permissionid)
  * OwnerId [PermissionId](#permissionid)

### NFSFileShareInfo
* NFSFileShareInfo `object`: The Unix file permissions and ownership information assigned, by default, to native S3 objects when file gateway discovers them in S3 buckets. This operation is only supported in file gateways.
  * ClientList [FileShareClientList](#fileshareclientlist)
  * DefaultStorageClass [StorageClass](#storageclass)
  * FileShareARN [FileShareARN](#filesharearn)
  * FileShareId [FileShareId](#fileshareid)
  * FileShareStatus [FileShareStatus](#filesharestatus)
  * GatewayARN [GatewayARN](#gatewayarn)
  * GuessMIMETypeEnabled [Boolean](#boolean)
  * KMSEncrypted [boolean](#boolean)
  * KMSKey [KMSKey](#kmskey)
  * LocationARN [LocationARN](#locationarn)
  * NFSFileShareDefaults [NFSFileShareDefaults](#nfsfilesharedefaults)
  * Path [Path](#path)
  * ReadOnly [Boolean](#boolean)
  * Role [Role](#role)
  * Squash [Squash](#squash)

### NFSFileShareInfoList
* NFSFileShareInfoList `array`
  * items [NFSFileShareInfo](#nfsfileshareinfo)

### NetworkInterface
* NetworkInterface `object`: Describes a gateway's network interface.
  * Ipv4Address [string](#string)
  * Ipv6Address [string](#string)
  * MacAddress [string](#string)

### NetworkInterfaceId
* NetworkInterfaceId `string`

### NextUpdateAvailabilityDate
* NextUpdateAvailabilityDate `string`

### NotificationId
* NotificationId `string`: The randomly generated ID of the notification that was sent. This ID is in UUID format.

### NotifyWhenUploadedInput
* NotifyWhenUploadedInput `object`
  * FileShareARN **required** [FileShareARN](#filesharearn)

### NotifyWhenUploadedOutput
* NotifyWhenUploadedOutput `object`
  * FileShareARN [FileShareARN](#filesharearn)
  * NotificationId [NotificationId](#notificationid)

### NumTapesToCreate
* NumTapesToCreate `integer`

### Path
* Path `string`: The file share path used by the NFS client to identify the mount point. 

### PermissionId
* PermissionId `integer`

### PermissionMode
* PermissionMode `string`

### PositiveIntObject
* PositiveIntObject `integer`

### RecurrenceInHours
* RecurrenceInHours `integer`

### RefreshCacheInput
* RefreshCacheInput `object`
  * FileShareARN **required** [FileShareARN](#filesharearn)

### RefreshCacheOutput
* RefreshCacheOutput `object`
  * FileShareARN [FileShareARN](#filesharearn)

### RegionId
* RegionId `string`

### RemoveTagsFromResourceInput
* RemoveTagsFromResourceInput `object`: RemoveTagsFromResourceInput
  * ResourceARN **required** [ResourceARN](#resourcearn)
  * TagKeys **required** [TagKeys](#tagkeys)

### RemoveTagsFromResourceOutput
* RemoveTagsFromResourceOutput `object`: RemoveTagsFromResourceOutput
  * ResourceARN [ResourceARN](#resourcearn)

### ResetCacheInput
* ResetCacheInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### ResetCacheOutput
* ResetCacheOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### ResourceARN
* ResourceARN `string`

### RetrieveTapeArchiveInput
* RetrieveTapeArchiveInput `object`: RetrieveTapeArchiveInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required** [TapeARN](#tapearn)

### RetrieveTapeArchiveOutput
* RetrieveTapeArchiveOutput `object`: RetrieveTapeArchiveOutput
  * TapeARN [TapeARN](#tapearn)

### RetrieveTapeRecoveryPointInput
* RetrieveTapeRecoveryPointInput `object`: RetrieveTapeRecoveryPointInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * TapeARN **required** [TapeARN](#tapearn)

### RetrieveTapeRecoveryPointOutput
* RetrieveTapeRecoveryPointOutput `object`: RetrieveTapeRecoveryPointOutput
  * TapeARN [TapeARN](#tapearn)

### Role
* Role `string`: The ARN of the IAM role that file gateway assumes when it accesses the underlying storage. 

### ServiceUnavailableError
* ServiceUnavailableError `object`: An internal server error has occurred because the service is unavailable. For more information, see the error and message fields.
  * error [StorageGatewayError](#storagegatewayerror)
  * message [string](#string)

### SetLocalConsolePasswordInput
* SetLocalConsolePasswordInput `object`: SetLocalConsolePasswordInput
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * LocalConsolePassword **required** [LocalConsolePassword](#localconsolepassword)

### SetLocalConsolePasswordOutput
* SetLocalConsolePasswordOutput `object`
  * GatewayARN [GatewayARN](#gatewayarn)

### ShutdownGatewayInput
* ShutdownGatewayInput `object`: A JSON object containing the of the gateway to shut down.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### ShutdownGatewayOutput
* ShutdownGatewayOutput `object`: A JSON object containing the of the gateway that was shut down.
  * GatewayARN [GatewayARN](#gatewayarn)

### SnapshotDescription
* SnapshotDescription `string`

### SnapshotId
* SnapshotId `string`

### Squash
* Squash `string`: <p>The user mapped to anonymous user. Valid options are the following: </p> <ul> <li> <p>"RootSquash" - Only root is mapped to anonymous user.</p> </li> <li> <p>"NoSquash" - No one is mapped to anonymous user</p> </li> <li> <p>"AllSquash" - Everyone is mapped to anonymous user.</p> </li> </ul>

### StartGatewayInput
* StartGatewayInput `object`: A JSON object containing the of the gateway to start.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### StartGatewayOutput
* StartGatewayOutput `object`: A JSON object containing the of the gateway that was restarted.
  * GatewayARN [GatewayARN](#gatewayarn)

### StorageClass
* StorageClass `string`: <p/>

### StorageGatewayError
* StorageGatewayError `object`: Provides additional information about an error that was returned by the service as an or. See the <code>errorCode</code> and <code>errorDetails</code> members for more information about the error.
  * errorCode [ErrorCode](#errorcode)
  * errorDetails [errorDetails](#errordetails)

### StorediSCSIVolume
* StorediSCSIVolume `object`: Describes an iSCSI stored volume.
  * CreatedDate [CreatedDate](#createddate)
  * PreservedExistingData [boolean](#boolean)
  * SourceSnapshotId [SnapshotId](#snapshotid)
  * VolumeARN [VolumeARN](#volumearn)
  * VolumeDiskId [DiskId](#diskid)
  * VolumeId [VolumeId](#volumeid)
  * VolumeProgress [DoubleObject](#doubleobject)
  * VolumeSizeInBytes [long](#long)
  * VolumeStatus [VolumeStatus](#volumestatus)
  * VolumeType [VolumeType](#volumetype)
  * VolumeUsedInBytes [VolumeUsedInBytes](#volumeusedinbytes)
  * VolumeiSCSIAttributes [VolumeiSCSIAttributes](#volumeiscsiattributes)

### StorediSCSIVolumes
* StorediSCSIVolumes `array`
  * items [StorediSCSIVolume](#storediscsivolume)

### Tag
* Tag `object`
  * Key **required** [TagKey](#tagkey)
  * Value **required** [TagValue](#tagvalue)

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
  * Progress [DoubleObject](#doubleobject)
  * TapeARN [TapeARN](#tapearn)
  * TapeBarcode [TapeBarcode](#tapebarcode)
  * TapeCreatedDate [Time](#time)
  * TapeSizeInBytes [TapeSize](#tapesize)
  * TapeStatus [TapeStatus](#tapestatus)
  * TapeUsedInBytes [TapeUsage](#tapeusage)
  * VTLDevice [VTLDeviceARN](#vtldevicearn)

### TapeARN
* TapeARN `string`

### TapeARNs
* TapeARNs `array`: The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS.
  * items [TapeARN](#tapearn)

### TapeArchive
* TapeArchive `object`: Represents a virtual tape that is archived in the virtual tape shelf (VTS).
  * CompletionTime [Time](#time)
  * RetrievedTo [GatewayARN](#gatewayarn)
  * TapeARN [TapeARN](#tapearn)
  * TapeBarcode [TapeBarcode](#tapebarcode)
  * TapeCreatedDate [Time](#time)
  * TapeSizeInBytes [TapeSize](#tapesize)
  * TapeStatus [TapeArchiveStatus](#tapearchivestatus)
  * TapeUsedInBytes [TapeUsage](#tapeusage)

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
  * GatewayARN [GatewayARN](#gatewayarn)
  * TapeARN [TapeARN](#tapearn)
  * TapeBarcode [TapeBarcode](#tapebarcode)
  * TapeSizeInBytes [TapeSize](#tapesize)
  * TapeStatus [TapeStatus](#tapestatus)

### TapeInfos
* TapeInfos `array`: An array of <a>TapeInfo</a> objects, where each object describes an a single tape. If there not tapes in the tape library or VTS, then the <code>TapeInfos</code> is an empty array.
  * items [TapeInfo](#tapeinfo)

### TapeRecoveryPointInfo
* TapeRecoveryPointInfo `object`: Describes a recovery point.
  * TapeARN [TapeARN](#tapearn)
  * TapeRecoveryPointTime [Time](#time)
  * TapeSizeInBytes [TapeSize](#tapesize)
  * TapeStatus [TapeRecoveryPointStatus](#taperecoverypointstatus)

### TapeRecoveryPointInfos
* TapeRecoveryPointInfos `array`
  * items [TapeRecoveryPointInfo](#taperecoverypointinfo)

### TapeRecoveryPointStatus
* TapeRecoveryPointStatus `string`

### TapeSize
* TapeSize `integer`

### TapeStatus
* TapeStatus `string`

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

### UpdateBandwidthRateLimitInput
* UpdateBandwidthRateLimitInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageDownloadRateLimitInBitsPerSec</a> </p> </li> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageUploadRateLimitInBitsPerSec</a> </p> </li> </ul>
  * AverageDownloadRateLimitInBitsPerSec [BandwidthDownloadRateLimit](#bandwidthdownloadratelimit)
  * AverageUploadRateLimitInBitsPerSec [BandwidthUploadRateLimit](#bandwidthuploadratelimit)
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### UpdateBandwidthRateLimitOutput
* UpdateBandwidthRateLimitOutput `object`: A JSON object containing the of the gateway whose throttle information was updated.
  * GatewayARN [GatewayARN](#gatewayarn)

### UpdateChapCredentialsInput
* UpdateChapCredentialsInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateInitiator</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateTarget</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$TargetARN</a> </p> </li> </ul>
  * InitiatorName **required** [IqnName](#iqnname)
  * SecretToAuthenticateInitiator **required** [ChapSecret](#chapsecret)
  * SecretToAuthenticateTarget [ChapSecret](#chapsecret)
  * TargetARN **required** [TargetARN](#targetarn)

### UpdateChapCredentialsOutput
* UpdateChapCredentialsOutput `object`: A JSON object containing the following fields:
  * InitiatorName [IqnName](#iqnname)
  * TargetARN [TargetARN](#targetarn)

### UpdateGatewayInformationInput
* UpdateGatewayInformationInput `object`
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * GatewayName [GatewayName](#gatewayname)
  * GatewayTimezone [GatewayTimezone](#gatewaytimezone)

### UpdateGatewayInformationOutput
* UpdateGatewayInformationOutput `object`: A JSON object containing the ARN of the gateway that was updated.
  * GatewayARN [GatewayARN](#gatewayarn)
  * GatewayName [string](#string)

### UpdateGatewaySoftwareNowInput
* UpdateGatewaySoftwareNowInput `object`: A JSON object containing the of the gateway to update.
  * GatewayARN **required** [GatewayARN](#gatewayarn)

### UpdateGatewaySoftwareNowOutput
* UpdateGatewaySoftwareNowOutput `object`: A JSON object containing the of the gateway that was updated.
  * GatewayARN [GatewayARN](#gatewayarn)

### UpdateMaintenanceStartTimeInput
* UpdateMaintenanceStartTimeInput `object`: <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfWeek</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$HourOfDay</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$MinuteOfHour</a> </p> </li> </ul>
  * DayOfWeek **required** [DayOfWeek](#dayofweek)
  * GatewayARN **required** [GatewayARN](#gatewayarn)
  * HourOfDay **required** [HourOfDay](#hourofday)
  * MinuteOfHour **required** [MinuteOfHour](#minuteofhour)

### UpdateMaintenanceStartTimeOutput
* UpdateMaintenanceStartTimeOutput `object`: A JSON object containing the of the gateway whose maintenance start time is updated.
  * GatewayARN [GatewayARN](#gatewayarn)

### UpdateNFSFileShareInput
* UpdateNFSFileShareInput `object`: UpdateNFSFileShareInput
  * ClientList [FileShareClientList](#fileshareclientlist)
  * DefaultStorageClass [StorageClass](#storageclass)
  * FileShareARN **required** [FileShareARN](#filesharearn)
  * GuessMIMETypeEnabled [Boolean](#boolean)
  * KMSEncrypted [Boolean](#boolean)
  * KMSKey [KMSKey](#kmskey)
  * NFSFileShareDefaults [NFSFileShareDefaults](#nfsfilesharedefaults)
  * ReadOnly [Boolean](#boolean)
  * Squash [Squash](#squash)

### UpdateNFSFileShareOutput
* UpdateNFSFileShareOutput `object`: UpdateNFSFileShareOutput
  * FileShareARN [FileShareARN](#filesharearn)

### UpdateSnapshotScheduleInput
* UpdateSnapshotScheduleInput `object`: <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateSnapshotScheduleInput$Description</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$RecurrenceInHours</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$StartAt</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$VolumeARN</a> </p> </li> </ul>
  * Description [Description](#description)
  * RecurrenceInHours **required** [RecurrenceInHours](#recurrenceinhours)
  * StartAt **required** [HourOfDay](#hourofday)
  * VolumeARN **required** [VolumeARN](#volumearn)

### UpdateSnapshotScheduleOutput
* UpdateSnapshotScheduleOutput `object`: A JSON object containing the of the updated storage volume.
  * VolumeARN [VolumeARN](#volumearn)

### UpdateVTLDeviceTypeInput
* UpdateVTLDeviceTypeInput `object`
  * DeviceType **required** [DeviceType](#devicetype)
  * VTLDeviceARN **required** [VTLDeviceARN](#vtldevicearn)

### UpdateVTLDeviceTypeOutput
* UpdateVTLDeviceTypeOutput `object`: UpdateVTLDeviceTypeOutput
  * VTLDeviceARN [VTLDeviceARN](#vtldevicearn)

### VTLDevice
* VTLDevice `object`: Represents a device object associated with a tape gateway.
  * DeviceiSCSIAttributes [DeviceiSCSIAttributes](#deviceiscsiattributes)
  * VTLDeviceARN [VTLDeviceARN](#vtldevicearn)
  * VTLDeviceProductIdentifier [VTLDeviceProductIdentifier](#vtldeviceproductidentifier)
  * VTLDeviceType [VTLDeviceType](#vtldevicetype)
  * VTLDeviceVendor [VTLDeviceVendor](#vtldevicevendor)

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

### VolumeId
* VolumeId `string`

### VolumeInfo
* VolumeInfo `object`: Describes a storage volume object.
  * GatewayARN [GatewayARN](#gatewayarn)
  * GatewayId [GatewayId](#gatewayid)
  * VolumeARN [VolumeARN](#volumearn)
  * VolumeId [VolumeId](#volumeid)
  * VolumeSizeInBytes [long](#long)
  * VolumeType [VolumeType](#volumetype)

### VolumeInfos
* VolumeInfos `array`
  * items [VolumeInfo](#volumeinfo)

### VolumeRecoveryPointInfo
* VolumeRecoveryPointInfo `object`
  * VolumeARN [VolumeARN](#volumearn)
  * VolumeRecoveryPointTime [string](#string)
  * VolumeSizeInBytes [long](#long)
  * VolumeUsageInBytes [long](#long)

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
  * ChapEnabled [boolean](#boolean)
  * LunNumber [PositiveIntObject](#positiveintobject)
  * NetworkInterfaceId [NetworkInterfaceId](#networkinterfaceid)
  * NetworkInterfacePort [integer](#integer)
  * TargetARN [TargetARN](#targetarn)

### boolean
* boolean `boolean`

### double
* double `number`

### errorDetails
* errorDetails `array`
  * items `object`
    * key [string](#string)
    * value [string](#string)

### integer
* integer `integer`

### long
* long `integer`

### string
* string `string`


