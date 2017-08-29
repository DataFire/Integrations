# @datafire/amazonaws_storagegateway

Client library for AWS Storage Gateway

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_storagegateway
```

```js
let datafire = require('datafire');
let amazonaws_storagegateway = require('@datafire/amazonaws_storagegateway').create();

amazonaws_storagegateway.ActivateGateway({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Storage Gateway Service</fullname> <p>AWS Storage Gateway is the service that connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between an organization's on-premises IT environment and AWS's storage infrastructure. The service enables you to securely upload data to the AWS cloud for cost effective backup and rapid disaster recovery.</p> <p>Use the following links to get started using the <i>AWS Storage Gateway Service API Reference</i>:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders">AWS Storage Gateway Required Request Headers</a>: Describes the required headers that you must send with every POST request to AWS Storage Gateway.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests">Signing Requests</a>: AWS Storage Gateway requires that you authenticate every request you send; this topic describes how sign such a request.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses">Error Responses</a>: Provides reference information about AWS Storage Gateway errors.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html">Operations in AWS Storage Gateway</a>: Contains detailed descriptions of all AWS Storage Gateway operations, their request parameters, response elements, possible errors, and examples of requests and responses.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/general/latest/general/latest/gr/rande.html#sg_region">AWS Storage Gateway Regions and Endpoints</a>: Provides a list of each region and endpoints available for use with AWS Storage Gateway.</p> </li> </ul> <note> <p>AWS Storage Gateway resource IDs are in uppercase. When you use these resource IDs with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change your resource ID to lowercase to use it with the EC2 API. For example, in Storage Gateway the ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use this ID with the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>. Otherwise, the EC2 API might not behave as expected.</p> </note> <important> <p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway volumes are changing to a longer format. Starting in December 2016, all new volumes and snapshots will be created with a 17-character string. Starting in April 2016, you will be able to use these longer IDs so you can test your systems with the new format. For more information, see <a href="https://aws.amazon.com/ec2/faqs/#longer-ids">Longer EC2 and EBS Resource IDs</a>.</p> <p> For example, a volume Amazon Resource Name (ARN) with the longer volume ID format looks like the following:</p> <p> <code>arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG</code>.</p> <p>A snapshot ID with the longer ID format looks like the following: <code>snap-78e226633445566ee</code>.</p> <p>For more information, see <a href="https://forums.aws.amazon.com/ann.jspa?annID=3557">Announcement: Heads-up – Longer AWS Storage Gateway volume and snapshot IDs coming in 2016</a>.</p> </important>

## Actions
### ActivateGateway



```js
amazonaws_storagegateway.ActivateGateway({}, context)
```


### AddCache



```js
amazonaws_storagegateway.AddCache({}, context)
```


### AddTagsToResource



```js
amazonaws_storagegateway.AddTagsToResource({}, context)
```


### AddUploadBuffer



```js
amazonaws_storagegateway.AddUploadBuffer({}, context)
```


### AddWorkingStorage



```js
amazonaws_storagegateway.AddWorkingStorage({}, context)
```


### CancelArchival



```js
amazonaws_storagegateway.CancelArchival({}, context)
```


### CancelRetrieval



```js
amazonaws_storagegateway.CancelRetrieval({}, context)
```


### CreateCachediSCSIVolume



```js
amazonaws_storagegateway.CreateCachediSCSIVolume({}, context)
```


### CreateNFSFileShare



```js
amazonaws_storagegateway.CreateNFSFileShare({}, context)
```


### CreateSnapshot



```js
amazonaws_storagegateway.CreateSnapshot({}, context)
```


### CreateSnapshotFromVolumeRecoveryPoint



```js
amazonaws_storagegateway.CreateSnapshotFromVolumeRecoveryPoint({}, context)
```


### CreateStorediSCSIVolume



```js
amazonaws_storagegateway.CreateStorediSCSIVolume({}, context)
```


### CreateTapeWithBarcode



```js
amazonaws_storagegateway.CreateTapeWithBarcode({}, context)
```


### CreateTapes



```js
amazonaws_storagegateway.CreateTapes({}, context)
```


### DeleteBandwidthRateLimit



```js
amazonaws_storagegateway.DeleteBandwidthRateLimit({}, context)
```


### DeleteChapCredentials



```js
amazonaws_storagegateway.DeleteChapCredentials({}, context)
```


### DeleteFileShare



```js
amazonaws_storagegateway.DeleteFileShare({}, context)
```


### DeleteGateway



```js
amazonaws_storagegateway.DeleteGateway({}, context)
```


### DeleteSnapshotSchedule



```js
amazonaws_storagegateway.DeleteSnapshotSchedule({}, context)
```


### DeleteTape



```js
amazonaws_storagegateway.DeleteTape({}, context)
```


### DeleteTapeArchive



```js
amazonaws_storagegateway.DeleteTapeArchive({}, context)
```


### DeleteVolume



```js
amazonaws_storagegateway.DeleteVolume({}, context)
```


### DescribeBandwidthRateLimit



```js
amazonaws_storagegateway.DescribeBandwidthRateLimit({}, context)
```


### DescribeCache



```js
amazonaws_storagegateway.DescribeCache({}, context)
```


### DescribeCachediSCSIVolumes



```js
amazonaws_storagegateway.DescribeCachediSCSIVolumes({}, context)
```


### DescribeChapCredentials



```js
amazonaws_storagegateway.DescribeChapCredentials({}, context)
```


### DescribeGatewayInformation



```js
amazonaws_storagegateway.DescribeGatewayInformation({}, context)
```


### DescribeMaintenanceStartTime



```js
amazonaws_storagegateway.DescribeMaintenanceStartTime({}, context)
```


### DescribeNFSFileShares



```js
amazonaws_storagegateway.DescribeNFSFileShares({}, context)
```


### DescribeSnapshotSchedule



```js
amazonaws_storagegateway.DescribeSnapshotSchedule({}, context)
```


### DescribeStorediSCSIVolumes



```js
amazonaws_storagegateway.DescribeStorediSCSIVolumes({}, context)
```


### DescribeTapeArchives



```js
amazonaws_storagegateway.DescribeTapeArchives({}, context)
```

#### Parameters
* Limit (string)
* Marker (string)

### DescribeTapeRecoveryPoints



```js
amazonaws_storagegateway.DescribeTapeRecoveryPoints({}, context)
```

#### Parameters
* Limit (string)
* Marker (string)

### DescribeTapes



```js
amazonaws_storagegateway.DescribeTapes({}, context)
```

#### Parameters
* Limit (string)
* Marker (string)

### DescribeUploadBuffer



```js
amazonaws_storagegateway.DescribeUploadBuffer({}, context)
```


### DescribeVTLDevices



```js
amazonaws_storagegateway.DescribeVTLDevices({}, context)
```

#### Parameters
* Limit (string)
* Marker (string)

### DescribeWorkingStorage



```js
amazonaws_storagegateway.DescribeWorkingStorage({}, context)
```


### DisableGateway



```js
amazonaws_storagegateway.DisableGateway({}, context)
```


### ListFileShares



```js
amazonaws_storagegateway.ListFileShares({}, context)
```


### ListGateways



```js
amazonaws_storagegateway.ListGateways({}, context)
```

#### Parameters
* Limit (string)
* Marker (string)

### ListLocalDisks



```js
amazonaws_storagegateway.ListLocalDisks({}, context)
```


### ListTagsForResource



```js
amazonaws_storagegateway.ListTagsForResource({}, context)
```


### ListTapes



```js
amazonaws_storagegateway.ListTapes({}, context)
```


### ListVolumeInitiators



```js
amazonaws_storagegateway.ListVolumeInitiators({}, context)
```


### ListVolumeRecoveryPoints



```js
amazonaws_storagegateway.ListVolumeRecoveryPoints({}, context)
```


### ListVolumes



```js
amazonaws_storagegateway.ListVolumes({}, context)
```

#### Parameters
* Limit (string)
* Marker (string)

### RefreshCache



```js
amazonaws_storagegateway.RefreshCache({}, context)
```


### RemoveTagsFromResource



```js
amazonaws_storagegateway.RemoveTagsFromResource({}, context)
```


### ResetCache



```js
amazonaws_storagegateway.ResetCache({}, context)
```


### RetrieveTapeArchive



```js
amazonaws_storagegateway.RetrieveTapeArchive({}, context)
```


### RetrieveTapeRecoveryPoint



```js
amazonaws_storagegateway.RetrieveTapeRecoveryPoint({}, context)
```


### SetLocalConsolePassword



```js
amazonaws_storagegateway.SetLocalConsolePassword({}, context)
```


### ShutdownGateway



```js
amazonaws_storagegateway.ShutdownGateway({}, context)
```


### StartGateway



```js
amazonaws_storagegateway.StartGateway({}, context)
```


### UpdateBandwidthRateLimit



```js
amazonaws_storagegateway.UpdateBandwidthRateLimit({}, context)
```


### UpdateChapCredentials



```js
amazonaws_storagegateway.UpdateChapCredentials({}, context)
```


### UpdateGatewayInformation



```js
amazonaws_storagegateway.UpdateGatewayInformation({}, context)
```


### UpdateGatewaySoftwareNow



```js
amazonaws_storagegateway.UpdateGatewaySoftwareNow({}, context)
```


### UpdateMaintenanceStartTime



```js
amazonaws_storagegateway.UpdateMaintenanceStartTime({}, context)
```


### UpdateNFSFileShare



```js
amazonaws_storagegateway.UpdateNFSFileShare({}, context)
```


### UpdateSnapshotSchedule



```js
amazonaws_storagegateway.UpdateSnapshotSchedule({}, context)
```


### UpdateVTLDeviceType



```js
amazonaws_storagegateway.UpdateVTLDeviceType({}, context)
```


