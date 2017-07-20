# @datafire/amazonaws_storagegateway

Client library for AWS Storage Gateway

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_storagegateway
```

```js
let datafire = require('datafire');
let amazonaws_storagegateway = require('@datafire/amazonaws_storagegateway').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_storagegateway: account,
  }
})

amazonaws_storagegateway.ActivateGateway({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Storage Gateway Service</fullname> <p>AWS Storage Gateway is the service that connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between an organization's on-premises IT environment and AWS's storage infrastructure. The service enables you to securely upload data to the AWS cloud for cost effective backup and rapid disaster recovery.</p> <p>Use the following links to get started using the <i>AWS Storage Gateway Service API Reference</i>:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders">AWS Storage Gateway Required Request Headers</a>: Describes the required headers that you must send with every POST request to AWS Storage Gateway.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests">Signing Requests</a>: AWS Storage Gateway requires that you authenticate every request you send; this topic describes how sign such a request.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses">Error Responses</a>: Provides reference information about AWS Storage Gateway errors.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html">Operations in AWS Storage Gateway</a>: Contains detailed descriptions of all AWS Storage Gateway operations, their request parameters, response elements, possible errors, and examples of requests and responses.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/general/latest/general/latest/gr/rande.html#sg_region">AWS Storage Gateway Regions and Endpoints</a>: Provides a list of each region and endpoints available for use with AWS Storage Gateway.</p> </li> </ul> <note> <p>AWS Storage Gateway resource IDs are in uppercase. When you use these resource IDs with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change your resource ID to lowercase to use it with the EC2 API. For example, in Storage Gateway the ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use this ID with the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>. Otherwise, the EC2 API might not behave as expected.</p> </note> <important> <p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway volumes are changing to a longer format. Starting in December 2016, all new volumes and snapshots will be created with a 17-character string. Starting in April 2016, you will be able to use these longer IDs so you can test your systems with the new format. For more information, see <a href="https://aws.amazon.com/ec2/faqs/#longer-ids">Longer EC2 and EBS Resource IDs</a>.</p> <p> For example, a volume Amazon Resource Name (ARN) with the longer volume ID format looks like the following:</p> <p> <code>arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG</code>.</p> <p>A snapshot ID with the longer ID format looks like the following: <code>snap-78e226633445566ee</code>.</p> <p>For more information, see <a href="https://forums.aws.amazon.com/ann.jspa?annID=3557">Announcement: Heads-up – Longer AWS Storage Gateway volume and snapshot IDs coming in 2016</a>.</p> </important>

## Actions
### ActivateGateway
<p>Activates the gateway you previously deployed on your host. For more information, see <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedActivateGateway-common.html"> Activate the AWS Storage Gateway</a>. In the activation process, you specify information such as the region you want to use for storing snapshots, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account; for more information, see <a>UpdateGatewayInformation</a>.</p> <note> <p>You must turn on the gateway VM before you can activate your gateway.</p> </note>


```js
amazonaws_storagegateway.ActivateGateway({
  "body": {
    "ActivationKey": "",
    "GatewayName": "",
    "GatewayTimezone": "",
    "GatewayRegion": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>ActivateGatewayInput$ActivationKey</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayName</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayRegion</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayTimezone</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$TapeDriveType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$MediumChangerType</a> </p> </li> </ul>
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AddCache
<p>Configures one or more gateway local disks as cache for a cached volumes gateway. This operation is only supported in the cached volumes gateway architecture (see <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html">Storage Gateway Concepts</a>).</p> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you want to configure as cache.</p>


```js
amazonaws_storagegateway.AddCache({
  "body": {
    "GatewayARN": "",
    "DiskIds": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AddTagsToResource
<p>Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or team. Each tag consists of a key and a value, which you define. You can add tags to the following AWS Storage Gateway resources:</p> <ul> <li> <p>Storage gateways of all types</p> </li> </ul> <ul> <li> <p>Storage Volumes</p> </li> </ul> <ul> <li> <p>Virtual Tapes</p> </li> </ul> <p>You can create a maximum of 10 tags for each resource. Virtual tapes and storage volumes that are recovered to a new gateway maintain their tags.</p>


```js
amazonaws_storagegateway.AddTagsToResource({
  "body": {
    "ResourceARN": "",
    "Tags": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - AddTagsToResourceInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AddUploadBuffer
<p>Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is supported for both the stored volumes and cached volumes gateway architectures.</p> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to configure as upload buffer.</p>


```js
amazonaws_storagegateway.AddUploadBuffer({
  "body": {
    "GatewayARN": "",
    "DiskIds": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AddWorkingStorage
<p>Configures one or more gateway local disks as working storage for a gateway. This operation is only supported in the stored volume gateway architecture. This operation is deprecated in cached-volumes API version 20120630. Use <a>AddUploadBuffer</a> instead.</p> <note> <p>Working storage is also referred to as upload buffer. You can also use the <a>AddUploadBuffer</a> operation to add upload buffer to a stored-volume gateway.</p> </note> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you want to configure as working storage.</p>


```js
amazonaws_storagegateway.AddWorkingStorage({
  "body": {
    "GatewayARN": "",
    "DiskIds": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>AddWorkingStorageInput$DiskIds</a> </p> </li> </ul>
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CancelArchival
Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated. This operation is only supported in tape gateways.


```js
amazonaws_storagegateway.CancelArchival({
  "body": {
    "GatewayARN": "",
    "TapeARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - CancelArchivalInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CancelRetrieval
Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated. The virtual tape is returned to the VTS.


```js
amazonaws_storagegateway.CancelRetrieval({
  "body": {
    "GatewayARN": "",
    "TapeARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - CancelRetrievalInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateCachediSCSIVolume
<p>Creates a cached volume on a specified cached volumes gateway. This operation is only supported in the cached volumes gateway architecture.</p> <note> <p>Cache storage must be allocated to the gateway before you can create a cached volume. Use the <a>AddCache</a> operation to add cache storage to a gateway. </p> </note> <p>In the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client token. In response, AWS Storage Gateway creates the volume and returns information about it. This information includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</p> <p>Optionally, you can provide the ARN for an existing volume as the <code>SourceVolumeARN</code> for this cached volume, which creates an exact copy of the existing volume’s latest recovery point. The <code>VolumeSizeInBytes</code> value must be equal to or larger than the size of the copied volume, in bytes.</p>


```js
amazonaws_storagegateway.CreateCachediSCSIVolume({
  "body": {
    "GatewayARN": "",
    "VolumeSizeInBytes": 0,
    "TargetName": "",
    "NetworkInterfaceId": "",
    "ClientToken": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateNFSFileShare
Creates a file share on an existing file gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using a Network File System (NFS) interface. This operation is only supported in file gateways.


```js
amazonaws_storagegateway.CreateNFSFileShare({
  "body": {
    "ClientToken": "",
    "GatewayARN": "",
    "Role": "",
    "LocationARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - CreateNFSFileShareInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateSnapshot
<p>Initiates a snapshot of a volume.</p> <p>AWS Storage Gateway provides the ability to back up point-in-time snapshots of your data to Amazon Simple Storage (S3) for durable off-site recovery, as well as import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad-hoc basis. This API enables you to take ad-hoc snapshot. For more information, see <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/WorkingWithSnapshots.html">Working With Snapshots in the AWS Storage Gateway Console</a>.</p> <p>In the CreateSnapshot request you identify the volume by providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When AWS Storage Gateway takes the snapshot of specified volume, the snapshot and description appears in the AWS Storage Gateway Console. In response, AWS Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only supported in stored and cached volumes gateways.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Operations.html">EC2 API reference</a>.</p> </note> <important> <p>Volume and snapshot IDs are changing to a longer length ID format. For more information, see the important note on the <a href="http://docs.aws.amazon.com/storagegateway/latest/APIReference/Welcome.html">Welcome</a> page.</p> </important>


```js
amazonaws_storagegateway.CreateSnapshot({
  "body": {
    "VolumeARN": "",
    "SnapshotDescription": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateSnapshotInput$SnapshotDescription</a> </p> </li> <li> <p> <a>CreateSnapshotInput$VolumeARN</a> </p> </li> </ul>
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateSnapshotFromVolumeRecoveryPoint
<p>Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the cached volumes gateway architecture.</p> <p>A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volumes gateway, use <a>ListVolumeRecoveryPoints</a>.</p> <p>In the <code>CreateSnapshotFromVolumeRecoveryPoint</code> request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When AWS Storage Gateway takes a snapshot of the specified volume, the snapshot and its description appear in the AWS Storage Gateway console. In response, AWS Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, in <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note>


```js
amazonaws_storagegateway.CreateSnapshotFromVolumeRecoveryPoint({
  "body": {
    "VolumeARN": "",
    "SnapshotDescription": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateStorediSCSIVolume
<p>Creates a volume on a specified gateway. This operation is only supported in the stored volumes gateway architecture.</p> <p>The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty gateway volume, then any existing data on the disk is erased.</p> <p>In the request you must specify the gateway and the disk information on which you are creating the volume. In response, AWS Storage Gateway creates the volume and returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</p>


```js
amazonaws_storagegateway.CreateStorediSCSIVolume({
  "body": {
    "GatewayARN": "",
    "DiskId": "",
    "PreserveExistingData": true,
    "TargetName": "",
    "NetworkInterfaceId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateStorediSCSIVolumeInput$DiskId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$NetworkInterfaceId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$PreserveExistingData</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$SnapshotId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$TargetName</a> </p> </li> </ul>
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateTapeWithBarcode
<p>Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the tape. This operation is only supported in tape gateways.</p> <note> <p>Cache storage must be allocated to the gateway before you can create a virtual tape. Use the <a>AddCache</a> operation to add cache storage to a gateway.</p> </note>


```js
amazonaws_storagegateway.CreateTapeWithBarcode({
  "body": {
    "GatewayARN": "",
    "TapeSizeInBytes": 0,
    "TapeBarcode": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - CreateTapeWithBarcodeInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateTapes
<p>Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This operation is only supported in tape gateways.</p> <note> <p>Cache storage must be allocated to the gateway before you can create virtual tapes. Use the <a>AddCache</a> operation to add cache storage to a gateway. </p> </note>


```js
amazonaws_storagegateway.CreateTapes({
  "body": {
    "GatewayARN": "",
    "TapeSizeInBytes": 0,
    "ClientToken": "",
    "NumTapesToCreate": 0,
    "TapeBarcodePrefix": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - CreateTapesInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteBandwidthRateLimit
Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request.


```js
amazonaws_storagegateway.DeleteBandwidthRateLimit({
  "body": {
    "GatewayARN": "",
    "BandwidthType": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DeleteBandwidthRateLimitInput$BandwidthType</a> </p> </li> </ul>
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteChapCredentials
Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair.


```js
amazonaws_storagegateway.DeleteChapCredentials({
  "body": {
    "TargetARN": "",
    "InitiatorName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>DeleteChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>DeleteChapCredentialsInput$TargetARN</a> </p> </li> </ul>
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteFileShare
Deletes a file share from a file gateway. This operation is only supported in file gateways.


```js
amazonaws_storagegateway.DeleteFileShare({
  "body": {
    "FileShareARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - DeleteFileShareInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteGateway
<p>Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM) from your host computer.</p> <p>After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After you delete a gateway, your next step is to remove it from your environment.</p> <important> <p>You no longer pay software charges after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using the Amazon EC2 console. For more information, see the <a href="http://aws.amazon.com/storagegateway"> AWS Storage Gateway Detail Page</a>. </p> </important>


```js
amazonaws_storagegateway.DeleteGateway({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A JSON object containing the id of the gateway to delete.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteSnapshotSchedule
<p>Deletes a snapshot of a volume.</p> <p>You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/WorkingWithSnapshots.html">Working with Snapshots</a>. In the <code>DeleteSnapshotSchedule</code> request, you identify the volume by providing its Amazon Resource Name (ARN). </p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. in <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note>


```js
amazonaws_storagegateway.DeleteSnapshotSchedule({
  "body": {
    "VolumeARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteTape
Deletes the specified virtual tape. This operation is only supported in tape gateways.


```js
amazonaws_storagegateway.DeleteTape({
  "body": {
    "GatewayARN": "",
    "TapeARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - DeleteTapeInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteTapeArchive
Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in tape gateways.


```js
amazonaws_storagegateway.DeleteTapeArchive({
  "body": {
    "TapeARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - DeleteTapeArchiveInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteVolume
<p>Deletes the specified gateway volume that you previously created using the <a>CreateCachediSCSIVolume</a> or <a>CreateStorediSCSIVolume</a> API. For stored volumes gateways, the local disk that was configured as the storage volume is not deleted. You can reuse the local disk to create another storage volume. </p> <p>Before you delete a gateway volume, make sure there are no iSCSI connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and check the snapshot status. For more information, go to <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> <p>In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to delete.</p>


```js
amazonaws_storagegateway.DeleteVolume({
  "body": {
    "VolumeARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A JSON object containing the <a>DeleteVolumeInput$VolumeARN</a> to delete.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeBandwidthRateLimit
<p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no bandwidth rate limiting is in effect.</p> <p>This operation only returns a value for a bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>


```js
amazonaws_storagegateway.DescribeBandwidthRateLimit({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A JSON object containing the of the gateway.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeCache
<p>Returns information about the cache of a gateway. This operation is only supported in the cached volumes gateway architecture.</p> <p>The response includes disk IDs that are configured as cache, and it includes the amount of cache allocated and used.</p>


```js
amazonaws_storagegateway.DescribeCache({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeCachediSCSIVolumes
<p>Returns a description of the gateway volumes specified in the request. This operation is only supported in the cached volumes gateway architecture.</p> <p>The list of gateway volumes in the request must be from one gateway. In the response Amazon Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).</p>


```js
amazonaws_storagegateway.DescribeCachediSCSIVolumes({
  "body": {
    "VolumeARNs": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeChapCredentials
Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair.


```js
amazonaws_storagegateway.DescribeChapCredentials({
  "body": {
    "TargetARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume target.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeGatewayInformation
Returns metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not). To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.


```js
amazonaws_storagegateway.DescribeGatewayInformation({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A JSON object containing the id of the gateway.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeMaintenanceStartTime
Returns your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone.


```js
amazonaws_storagegateway.DescribeMaintenanceStartTime({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A JSON object containing the of the gateway.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeNFSFileShares
Gets a description for one or more file shares from a file gateway. This operation is only supported in file gateways.


```js
amazonaws_storagegateway.DescribeNFSFileShares({
  "body": {
    "FileShareARNList": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - DescribeNFSFileSharesInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeSnapshotSchedule
Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes intervals at which snapshots are automatically initiated on the volume.


```js
amazonaws_storagegateway.DescribeSnapshotSchedule({
  "body": {
    "VolumeARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A JSON object containing the <a>DescribeSnapshotScheduleInput$VolumeARN</a> of the volume.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeStorediSCSIVolumes
Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the request must be from one gateway. In the response Amazon Storage Gateway returns volume information sorted by volume ARNs. This operation is only supported in stored volumes gateways.


```js
amazonaws_storagegateway.DescribeStorediSCSIVolumes({
  "body": {
    "VolumeARNs": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A JSON object containing a list of <a>DescribeStorediSCSIVolumesInput$VolumeARNs</a>.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeTapeArchives
<p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS).</p> <p>If a specific <code>TapeARN</code> is not specified, AWS Storage Gateway returns a description of all virtual tapes found in the VTS associated with your account. This operation is only supported in tape gateways.</p>


```js
amazonaws_storagegateway.DescribeTapeArchives({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - DescribeTapeArchivesInput
* Limit (string) - Pagination limit
* Marker (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeTapeRecoveryPoints
<p>Returns a list of virtual tape recovery points that are available for the specified tape gateway.</p> <p>A recovery point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is only supported in tape gateways.</p>


```js
amazonaws_storagegateway.DescribeTapeRecoveryPoints({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - DescribeTapeRecoveryPointsInput
* Limit (string) - Pagination limit
* Marker (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeTapes
Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes. If a <code>TapeARN</code> is not specified, returns a description of all virtual tapes associated with the specified gateway. This operation is only supported in tape gateways.


```js
amazonaws_storagegateway.DescribeTapes({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - DescribeTapesInput
* Limit (string) - Pagination limit
* Marker (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeUploadBuffer
<p>Returns information about the upload buffer of a gateway. This operation is supported for both the stored volume and cached volumes gateway architectures.</p> <p>The response includes disk IDs that are configured as upload buffer space, and it includes the amount of upload buffer space allocated and used.</p>


```js
amazonaws_storagegateway.DescribeUploadBuffer({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeVTLDevices
<p>Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response, AWS Storage Gateway returns VTL device information.</p> <p>This operation is only supported in tape gateways.</p>


```js
amazonaws_storagegateway.DescribeVTLDevices({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - DescribeVTLDevicesInput
* Limit (string) - Pagination limit
* Marker (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeWorkingStorage
<p>Returns information about the working storage of a gateway. This operation is only supported in the stored volumes gateway architecture. This operation is deprecated in cached-volumes API version (20120630). Use DescribeUploadBuffer instead.</p> <note> <p>Working storage is also referred to as upload buffer. You can also use the DescribeUploadBuffer operation to add upload buffer to a stored-volume gateway.</p> </note> <p>The response includes disk IDs that are configured as working storage, and it includes the amount of working storage allocated and used.</p>


```js
amazonaws_storagegateway.DescribeWorkingStorage({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A JSON object containing the of the gateway.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DisableGateway
<p>Disables a gateway when the gateway is no longer functioning. For example, if your gateway VM is damaged, you can disable the gateway so you can recover virtual tapes.</p> <p>Use this operation for a tape gateway that is not reachable or not functioning.</p> <important> <p>Once a gateway is disabled it cannot be enabled.</p> </important>


```js
amazonaws_storagegateway.DisableGateway({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - DisableGatewayInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListFileShares
Gets a list of the file shares for a specific file gateway, or the list of file shares that belong to the calling user account. This operation is only supported in file gateways.


```js
amazonaws_storagegateway.ListFileShares({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - ListFileShareInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListGateways
<p>Lists gateways owned by an AWS account in a region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN).</p> <p>By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response.</p> <p>If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.</p>


```js
amazonaws_storagegateway.ListGateways({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p>A JSON object containing zero or more of the following fields:</p> <ul> <li> <p> <a>ListGatewaysInput$Limit</a> </p> </li> <li> <p> <a>ListGatewaysInput$Marker</a> </p> </li> </ul>
* Limit (string) - Pagination limit
* Marker (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListLocalDisks
<p>Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p> <p>The request returns a list of all disks, specifying which are configured as working storage, cache storage, or stored volume or not configured at all. The response includes a <code>DiskStatus</code> field. This field can have a value of present (the disk is available to use), missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that has incorrect metadata or the disk content is corrupted). </p>


```js
amazonaws_storagegateway.ListLocalDisks({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A JSON object containing the of the gateway.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListTagsForResource
Lists the tags that have been added to the specified resource.


```js
amazonaws_storagegateway.ListTagsForResource({
  "body": {
    "ResourceARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - ListTagsForResourceInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListTapes
<p>Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS.</p> <p>This operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the <code>Limit</code> parameter in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a <code>Marker</code> element that you can use in your subsequent request to retrieve the next set of tapes. This operation is only supported in tape gateways.</p>


```js
amazonaws_storagegateway.ListTapes({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListTapesInput$Limit</a> </p> </li> <li> <p> <a>ListTapesInput$Marker</a> </p> </li> <li> <p> <a>ListTapesInput$TapeARNs</a> </p> </li> </ul>
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListVolumeInitiators
Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a volume is being used or not.


```js
amazonaws_storagegateway.ListVolumeInitiators({
  "body": {
    "VolumeARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - ListVolumeInitiatorsInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListVolumeRecoveryPoints
<p>Lists the recovery points for a specified gateway. This operation is only supported in the cached volumes gateway architecture.</p> <p>Each cache volume has one recovery point. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a source volume. To create a snapshot from a volume recovery point use the <a>CreateSnapshotFromVolumeRecoveryPoint</a> operation.</p>


```js
amazonaws_storagegateway.ListVolumeRecoveryPoints({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListVolumes
<p>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the <a>DescribeStorediSCSIVolumes</a> or the <a>DescribeCachediSCSIVolumes</a> API.</p> <p>The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the <code>Limit</code> field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes.</p>


```js
amazonaws_storagegateway.ListVolumes({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListVolumesInput$Limit</a> </p> </li> <li> <p> <a>ListVolumesInput$Marker</a> </p> </li> </ul>
* Limit (string) - Pagination limit
* Marker (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RefreshCache
Refreshes the cache for the specified file share. This operation finds objects in the Amazon S3 bucket that were added or removed since the gateway last listed the bucket's contents and cached the results.


```js
amazonaws_storagegateway.RefreshCache({
  "body": {
    "FileShareARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RemoveTagsFromResource
Removes one or more tags from the specified resource.


```js
amazonaws_storagegateway.RemoveTagsFromResource({
  "body": {
    "ResourceARN": "",
    "TagKeys": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - RemoveTagsFromResourceInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ResetCache
<p>Resets all cache disks that have encountered a error and makes the disks available for reconfiguration as cache storage. If your cache disk encounters a error, the gateway prevents read and write operations on virtual tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the gateway loses its cache storage. At this point you can reconfigure the disks as cache disks.</p> <important> <p>If the cache disk you are resetting contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk for your gateway to function properly.</p> </important>


```js
amazonaws_storagegateway.ResetCache({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RetrieveTapeArchive
<p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS.</p> <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway.</p>


```js
amazonaws_storagegateway.RetrieveTapeArchive({
  "body": {
    "TapeARN": "",
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - RetrieveTapeArchiveInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RetrieveTapeRecoveryPoint
<p>Retrieves the recovery point for the specified virtual tape.</p> <p>A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.</p> <note> <p>The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.</p> </note>


```js
amazonaws_storagegateway.RetrieveTapeRecoveryPoint({
  "body": {
    "TapeARN": "",
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - RetrieveTapeRecoveryPointInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### SetLocalConsolePassword
Sets the password for your VM local console. When you log in to the local console for the first time, you log in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the default password to set a new password.


```js
amazonaws_storagegateway.SetLocalConsolePassword({
  "body": {
    "GatewayARN": "",
    "LocalConsolePassword": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - SetLocalConsolePasswordInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ShutdownGateway
<p>Shuts down a gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request.</p> <p>The operation shuts down the gateway service component running in the storage gateway's virtual machine (VM) and not the VM.</p> <note> <p>If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions.</p> </note> <p>After the gateway is shutdown, you cannot call any other API except <a>StartGateway</a>, <a>DescribeGatewayInformation</a>, and <a>ListGateways</a>. For more information, see <a>ActivateGateway</a>. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken.</p> <note> <p>When you make a shutdown request, you will get a <code>200 OK</code> success response immediately. However, it might take some time for the gateway to shut down. You can call the <a>DescribeGatewayInformation</a> API to check the status. For more information, see <a>ActivateGateway</a>.</p> </note> <p>If do not intend to use the gateway again, you must delete the gateway (using <a>DeleteGateway</a>) to no longer pay software charges associated with the gateway.</p>


```js
amazonaws_storagegateway.ShutdownGateway({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A JSON object containing the of the gateway to shut down.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### StartGateway
<p>Starts a gateway that you previously shut down (see <a>ShutdownGateway</a>). After the gateway starts, you can then make other API calls, your applications can read from or write to the gateway's storage volumes and you will be able to take snapshot backups.</p> <note> <p>When you make a request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to be ready. You should call <a>DescribeGatewayInformation</a> and check the status before making any additional API calls. For more information, see <a>ActivateGateway</a>.</p> </note> <p>To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.</p>


```js
amazonaws_storagegateway.StartGateway({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A JSON object containing the of the gateway to start.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateBandwidthRateLimit
<p>Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains.</p> <p>By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its bandwidth usage and could potentially use the maximum available bandwidth.</p> <p>To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</p>


```js
amazonaws_storagegateway.UpdateBandwidthRateLimit({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageDownloadRateLimitInBitsPerSec</a> </p> </li> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageUploadRateLimitInBitsPerSec</a> </p> </li> </ul>
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateChapCredentials
<p>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security, you might use it.</p> <important> <p>When you update CHAP credentials, all existing connections on the target are closed and initiators must reconnect with the new credentials.</p> </important>


```js
amazonaws_storagegateway.UpdateChapCredentials({
  "body": {
    "TargetARN": "",
    "SecretToAuthenticateInitiator": "",
    "InitiatorName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateInitiator</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateTarget</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$TargetARN</a> </p> </li> </ul>
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateGatewayInformation
<p>Updates a gateway's metadata, which includes the gateway's name and time zone. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</p> <note> <p>For Gateways activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name. However, changing the name of the gateway has no effect on the gateway's ARN.</p> </note>


```js
amazonaws_storagegateway.UpdateGatewayInformation({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateGatewaySoftwareNow
<p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete. You can call <a>DescribeGatewayInformation</a> to verify the gateway is in the <code>STATE_RUNNING</code> state.</p> </note> <important> <p>A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorWindowsClient.html#CustomizeWindowsiSCSISettings">Customizing Your Windows iSCSI Settings</a> and <a href="http://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorRedHatClient.html#CustomizeLinuxiSCSISettings">Customizing Your Linux iSCSI Settings</a>, respectively.</p> </important>


```js
amazonaws_storagegateway.UpdateGatewaySoftwareNow({
  "body": {
    "GatewayARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A JSON object containing the of the gateway to update.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateMaintenanceStartTime
Updates a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone.


```js
amazonaws_storagegateway.UpdateMaintenanceStartTime({
  "body": {
    "GatewayARN": "",
    "HourOfDay": 0,
    "MinuteOfHour": 0,
    "DayOfWeek": 0
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfWeek</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$HourOfDay</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$MinuteOfHour</a> </p> </li> </ul>
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateNFSFileShare
<p>Updates a file share. This operation is only supported in file gateways.</p> <note> <p>To leave a file share field unchanged, set the corresponding input field to null.</p> </note>


```js
amazonaws_storagegateway.UpdateNFSFileShare({
  "body": {
    "FileShareARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - UpdateNFSFileShareInput
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateSnapshotSchedule
<p>Updates a snapshot schedule configured for a gateway volume.</p> <p>The default snapshot schedule for volume is once every 24 hours, starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for the volume.</p> <p>In the request you must identify the gateway volume whose snapshot schedule you want to update, and the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of snapshots.</p>


```js
amazonaws_storagegateway.UpdateSnapshotSchedule({
  "body": {
    "VolumeARN": "",
    "StartAt": 0,
    "RecurrenceInHours": 0
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateSnapshotScheduleInput$Description</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$RecurrenceInHours</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$StartAt</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$VolumeARN</a> </p> </li> </ul>
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateVTLDeviceType
Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium changer type for the tape gateway. This operation enables you to select a different type of medium changer after a tape gateway is activated. This operation is only supported in tape gateways.


```js
amazonaws_storagegateway.UpdateVTLDeviceType({
  "body": {
    "VTLDeviceARN": "",
    "DeviceType": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

