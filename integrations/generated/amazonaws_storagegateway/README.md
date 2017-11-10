# @datafire/amazonaws_storagegateway

Client library for AWS Storage Gateway

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_storagegateway
```

```js
let datafire = require('datafire');
let amazonaws_storagegateway = require('@datafire/amazonaws_storagegateway').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_storagegateway.ActivateGateway({}).then(data => {
  console.log(data);
})
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

#### Parameters
* ActivationKey (string) **required**
* GatewayName (string) **required** - The name you configured for your gateway.
* GatewayRegion (string) **required**
* GatewayTimezone (string) **required**
* GatewayType (string)
* MediumChangerType (string)
* TapeDriveType (string)

### AddCache



```js
amazonaws_storagegateway.AddCache({
  "GatewayARN": "",
  "DiskIds": []
}, context)
```

#### Parameters
* DiskIds (array) **required**
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### AddTagsToResource



```js
amazonaws_storagegateway.AddTagsToResource({
  "ResourceARN": "",
  "Tags": []
}, context)
```

#### Parameters
* ResourceARN (string) **required**
* Tags (array) **required**

### AddUploadBuffer



```js
amazonaws_storagegateway.AddUploadBuffer({
  "GatewayARN": "",
  "DiskIds": []
}, context)
```

#### Parameters
* DiskIds (array) **required**
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### AddWorkingStorage



```js
amazonaws_storagegateway.AddWorkingStorage({
  "GatewayARN": "",
  "DiskIds": []
}, context)
```

#### Parameters
* DiskIds (array) **required**
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### CancelArchival



```js
amazonaws_storagegateway.CancelArchival({
  "GatewayARN": "",
  "TapeARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* TapeARN (string) **required**

### CancelRetrieval



```js
amazonaws_storagegateway.CancelRetrieval({
  "GatewayARN": "",
  "TapeARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* TapeARN (string) **required**

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

#### Parameters
* ClientToken (string) **required**
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* NetworkInterfaceId (string) **required**
* SnapshotId (string)
* SourceVolumeARN (string)
* TargetName (string) **required**
* VolumeSizeInBytes (integer) **required**

### CreateNFSFileShare



```js
amazonaws_storagegateway.CreateNFSFileShare({
  "ClientToken": "",
  "GatewayARN": "",
  "Role": "",
  "LocationARN": ""
}, context)
```

#### Parameters
* ClientList (array) - The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks. 
* ClientToken (string) **required**
* DefaultStorageClass (string) - <p/>
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* KMSEncrypted (boolean) - A value that indicates whether the write status of a file share is read-only: "true" if write status is read-only, and otherwise "false".
* KMSKey (string) - The ARN of the KMS key used for Amazon S3 server side encryption. 
* LocationARN (string) **required** - The ARN of the backend storage used for storing file data. 
* NFSFileShareDefaults (object) - Describes file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported in the file gateway architecture.
* ReadOnly (boolean) - A value that indicates whether the write status of a file share is read-only: "true" if write status is read-only, and otherwise "false".
* Role (string) **required** - The ARN of the IAM role that file gateway assumes when it accesses the underlying storage. 
* Squash (string) - <p>The user mapped to anonymous user. Valid options are the following: </p> <ul> <li> <p>"RootSquash" - Only root is mapped to anonymous user.</p> </li> <li> <p>"NoSquash" - No one is mapped to anonymous user</p> </li> <li> <p>"AllSquash" - Everyone is mapped to anonymous user.</p> </li> </ul>

### CreateSnapshot



```js
amazonaws_storagegateway.CreateSnapshot({
  "VolumeARN": "",
  "SnapshotDescription": ""
}, context)
```

#### Parameters
* SnapshotDescription (string) **required**
* VolumeARN (string) **required**

### CreateSnapshotFromVolumeRecoveryPoint



```js
amazonaws_storagegateway.CreateSnapshotFromVolumeRecoveryPoint({
  "VolumeARN": "",
  "SnapshotDescription": ""
}, context)
```

#### Parameters
* SnapshotDescription (string) **required**
* VolumeARN (string) **required**

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

#### Parameters
* DiskId (string) **required**
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* NetworkInterfaceId (string) **required**
* PreserveExistingData (boolean) **required**
* SnapshotId (string)
* TargetName (string) **required**

### CreateTapeWithBarcode



```js
amazonaws_storagegateway.CreateTapeWithBarcode({
  "GatewayARN": "",
  "TapeSizeInBytes": 0,
  "TapeBarcode": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* TapeBarcode (string) **required**
* TapeSizeInBytes (integer) **required**

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

#### Parameters
* ClientToken (string) **required**
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* NumTapesToCreate (integer) **required**
* TapeBarcodePrefix (string) **required**
* TapeSizeInBytes (integer) **required**

### DeleteBandwidthRateLimit



```js
amazonaws_storagegateway.DeleteBandwidthRateLimit({
  "GatewayARN": "",
  "BandwidthType": ""
}, context)
```

#### Parameters
* BandwidthType (string) **required**
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### DeleteChapCredentials



```js
amazonaws_storagegateway.DeleteChapCredentials({
  "TargetARN": "",
  "InitiatorName": ""
}, context)
```

#### Parameters
* InitiatorName (string) **required**
* TargetARN (string) **required**

### DeleteFileShare



```js
amazonaws_storagegateway.DeleteFileShare({
  "FileShareARN": ""
}, context)
```

#### Parameters
* FileShareARN (string) **required** - The Amazon Resource Name (ARN) of the file share. 
* ForceDelete (boolean)

### DeleteGateway



```js
amazonaws_storagegateway.DeleteGateway({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### DeleteSnapshotSchedule



```js
amazonaws_storagegateway.DeleteSnapshotSchedule({
  "VolumeARN": ""
}, context)
```

#### Parameters
* VolumeARN (string) **required**

### DeleteTape



```js
amazonaws_storagegateway.DeleteTape({
  "GatewayARN": "",
  "TapeARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* TapeARN (string) **required**

### DeleteTapeArchive



```js
amazonaws_storagegateway.DeleteTapeArchive({
  "TapeARN": ""
}, context)
```

#### Parameters
* TapeARN (string) **required**

### DeleteVolume



```js
amazonaws_storagegateway.DeleteVolume({
  "VolumeARN": ""
}, context)
```

#### Parameters
* VolumeARN (string) **required**

### DescribeBandwidthRateLimit



```js
amazonaws_storagegateway.DescribeBandwidthRateLimit({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### DescribeCache



```js
amazonaws_storagegateway.DescribeCache({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### DescribeCachediSCSIVolumes



```js
amazonaws_storagegateway.DescribeCachediSCSIVolumes({
  "VolumeARNs": []
}, context)
```

#### Parameters
* VolumeARNs (array) **required**

### DescribeChapCredentials



```js
amazonaws_storagegateway.DescribeChapCredentials({
  "TargetARN": ""
}, context)
```

#### Parameters
* TargetARN (string) **required**

### DescribeGatewayInformation



```js
amazonaws_storagegateway.DescribeGatewayInformation({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### DescribeMaintenanceStartTime



```js
amazonaws_storagegateway.DescribeMaintenanceStartTime({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### DescribeNFSFileShares



```js
amazonaws_storagegateway.DescribeNFSFileShares({
  "FileShareARNList": []
}, context)
```

#### Parameters
* FileShareARNList (array) **required**

### DescribeSnapshotSchedule



```js
amazonaws_storagegateway.DescribeSnapshotSchedule({
  "VolumeARN": ""
}, context)
```

#### Parameters
* VolumeARN (string) **required**

### DescribeStorediSCSIVolumes



```js
amazonaws_storagegateway.DescribeStorediSCSIVolumes({
  "VolumeARNs": []
}, context)
```

#### Parameters
* VolumeARNs (array) **required**

### DescribeTapeArchives



```js
amazonaws_storagegateway.DescribeTapeArchives({}, context)
```

#### Parameters
* Limit (string)
* Marker (string)
* Limit (integer)
* Marker (string)
* TapeARNs (array) - The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS.

### DescribeTapeRecoveryPoints



```js
amazonaws_storagegateway.DescribeTapeRecoveryPoints({
  "GatewayARN": ""
}, context)
```

#### Parameters
* Limit (string)
* Marker (string)
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* Limit (integer)
* Marker (string)

### DescribeTapes



```js
amazonaws_storagegateway.DescribeTapes({
  "GatewayARN": ""
}, context)
```

#### Parameters
* Limit (string)
* Marker (string)
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* Limit (integer)
* Marker (string)
* TapeARNs (array) - The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS.

### DescribeUploadBuffer



```js
amazonaws_storagegateway.DescribeUploadBuffer({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### DescribeVTLDevices



```js
amazonaws_storagegateway.DescribeVTLDevices({
  "GatewayARN": ""
}, context)
```

#### Parameters
* Limit (string)
* Marker (string)
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* Limit (integer)
* Marker (string)
* VTLDeviceARNs (array)

### DescribeWorkingStorage



```js
amazonaws_storagegateway.DescribeWorkingStorage({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### DisableGateway



```js
amazonaws_storagegateway.DisableGateway({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### ListFileShares



```js
amazonaws_storagegateway.ListFileShares({}, context)
```

#### Parameters
* GatewayARN (string) - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* Limit (integer)
* Marker (string)

### ListGateways



```js
amazonaws_storagegateway.ListGateways({}, context)
```

#### Parameters
* Limit (string)
* Marker (string)
* Limit (integer)
* Marker (string)

### ListLocalDisks



```js
amazonaws_storagegateway.ListLocalDisks({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### ListTagsForResource



```js
amazonaws_storagegateway.ListTagsForResource({
  "ResourceARN": ""
}, context)
```

#### Parameters
* Limit (integer)
* Marker (string)
* ResourceARN (string) **required**

### ListTapes



```js
amazonaws_storagegateway.ListTapes({}, context)
```

#### Parameters
* Limit (integer)
* Marker (string)
* TapeARNs (array) - The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS.

### ListVolumeInitiators



```js
amazonaws_storagegateway.ListVolumeInitiators({
  "VolumeARN": ""
}, context)
```

#### Parameters
* VolumeARN (string) **required**

### ListVolumeRecoveryPoints



```js
amazonaws_storagegateway.ListVolumeRecoveryPoints({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### ListVolumes



```js
amazonaws_storagegateway.ListVolumes({}, context)
```

#### Parameters
* Limit (string)
* Marker (string)
* GatewayARN (string) - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* Limit (integer)
* Marker (string)

### RefreshCache



```js
amazonaws_storagegateway.RefreshCache({
  "FileShareARN": ""
}, context)
```

#### Parameters
* FileShareARN (string) **required** - The Amazon Resource Name (ARN) of the file share. 

### RemoveTagsFromResource



```js
amazonaws_storagegateway.RemoveTagsFromResource({
  "ResourceARN": "",
  "TagKeys": []
}, context)
```

#### Parameters
* ResourceARN (string) **required**
* TagKeys (array) **required**

### ResetCache



```js
amazonaws_storagegateway.ResetCache({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### RetrieveTapeArchive



```js
amazonaws_storagegateway.RetrieveTapeArchive({
  "TapeARN": "",
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* TapeARN (string) **required**

### RetrieveTapeRecoveryPoint



```js
amazonaws_storagegateway.RetrieveTapeRecoveryPoint({
  "TapeARN": "",
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* TapeARN (string) **required**

### SetLocalConsolePassword



```js
amazonaws_storagegateway.SetLocalConsolePassword({
  "GatewayARN": "",
  "LocalConsolePassword": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* LocalConsolePassword (string) **required**

### ShutdownGateway



```js
amazonaws_storagegateway.ShutdownGateway({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### StartGateway



```js
amazonaws_storagegateway.StartGateway({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### UpdateBandwidthRateLimit



```js
amazonaws_storagegateway.UpdateBandwidthRateLimit({
  "GatewayARN": ""
}, context)
```

#### Parameters
* AverageDownloadRateLimitInBitsPerSec (integer)
* AverageUploadRateLimitInBitsPerSec (integer)
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### UpdateChapCredentials



```js
amazonaws_storagegateway.UpdateChapCredentials({
  "TargetARN": "",
  "SecretToAuthenticateInitiator": "",
  "InitiatorName": ""
}, context)
```

#### Parameters
* InitiatorName (string) **required**
* SecretToAuthenticateInitiator (string) **required**
* SecretToAuthenticateTarget (string)
* TargetARN (string) **required**

### UpdateGatewayInformation



```js
amazonaws_storagegateway.UpdateGatewayInformation({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* GatewayName (string) - The name you configured for your gateway.
* GatewayTimezone (string)

### UpdateGatewaySoftwareNow



```js
amazonaws_storagegateway.UpdateGatewaySoftwareNow({
  "GatewayARN": ""
}, context)
```

#### Parameters
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.

### UpdateMaintenanceStartTime



```js
amazonaws_storagegateway.UpdateMaintenanceStartTime({
  "GatewayARN": "",
  "HourOfDay": 0,
  "MinuteOfHour": 0,
  "DayOfWeek": 0
}, context)
```

#### Parameters
* DayOfWeek (integer) **required**
* GatewayARN (string) **required** - The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.
* HourOfDay (integer) **required**
* MinuteOfHour (integer) **required**

### UpdateNFSFileShare



```js
amazonaws_storagegateway.UpdateNFSFileShare({
  "FileShareARN": ""
}, context)
```

#### Parameters
* ClientList (array) - The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks. 
* DefaultStorageClass (string) - <p/>
* FileShareARN (string) **required** - The Amazon Resource Name (ARN) of the file share. 
* KMSEncrypted (boolean) - A value that indicates whether the write status of a file share is read-only: "true" if write status is read-only, and otherwise "false".
* KMSKey (string) - The ARN of the KMS key used for Amazon S3 server side encryption. 
* NFSFileShareDefaults (object) - Describes file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported in the file gateway architecture.
* ReadOnly (boolean) - A value that indicates whether the write status of a file share is read-only: "true" if write status is read-only, and otherwise "false".
* Squash (string) - <p>The user mapped to anonymous user. Valid options are the following: </p> <ul> <li> <p>"RootSquash" - Only root is mapped to anonymous user.</p> </li> <li> <p>"NoSquash" - No one is mapped to anonymous user</p> </li> <li> <p>"AllSquash" - Everyone is mapped to anonymous user.</p> </li> </ul>

### UpdateSnapshotSchedule



```js
amazonaws_storagegateway.UpdateSnapshotSchedule({
  "VolumeARN": "",
  "StartAt": 0,
  "RecurrenceInHours": 0
}, context)
```

#### Parameters
* Description (string)
* RecurrenceInHours (integer) **required**
* StartAt (integer) **required**
* VolumeARN (string) **required**

### UpdateVTLDeviceType



```js
amazonaws_storagegateway.UpdateVTLDeviceType({
  "VTLDeviceARN": "",
  "DeviceType": ""
}, context)
```

#### Parameters
* DeviceType (string) **required**
* VTLDeviceARN (string) **required**

