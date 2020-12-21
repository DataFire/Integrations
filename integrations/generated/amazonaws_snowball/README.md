# @datafire/amazonaws_snowball

Client library for Amazon Import/Export Snowball

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_snowball
```
```js
let amazonaws_snowball = require('@datafire/amazonaws_snowball').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS Snow Family is a petabyte-scale data transport solution that uses secure devices to transfer large amounts of data between your on-premises data centers and Amazon Simple Storage Service (Amazon S3). The Snow commands described here provide access to the same functionality that is available in the AWS Snow Family Management Console, which enables you to create and manage jobs for a Snow device. To transfer data locally with a Snow device, you'll need to use the Snowball Edge client or the Amazon S3 API Interface for Snowball or AWS OpsHub for Snow Family. For more information, see the <a href="https://docs.aws.amazon.com/AWSImportExport/latest/ug/api-reference.html">User Guide</a>.

## Actions

### CancelCluster



```js
amazonaws_snowball.CancelCluster({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**

#### Output
* output [CancelClusterResult](#cancelclusterresult)

### CancelJob



```js
amazonaws_snowball.CancelJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [CancelJobResult](#canceljobresult)

### CreateAddress



```js
amazonaws_snowball.CreateAddress({
  "Address": null
}, context)
```

#### Input
* input `object`
  * Address **required**
    * AddressId
    * City
    * Company
    * Country
    * IsRestricted
    * Landmark
    * Name
    * PhoneNumber
    * PostalCode
    * PrefectureOrDistrict
    * StateOrProvince
    * Street1
    * Street2
    * Street3

#### Output
* output [CreateAddressResult](#createaddressresult)

### CreateCluster



```js
amazonaws_snowball.CreateCluster({
  "JobType": null,
  "Resources": null,
  "AddressId": null,
  "RoleARN": null,
  "ShippingOption": null
}, context)
```

#### Input
* input `object`
  * AddressId **required**
  * Description
  * ForwardingAddressId
  * JobType **required**
  * KmsKeyARN
  * Notification
    * JobStatesToNotify
      * items [JobState](#jobstate)
    * NotifyAll
    * SnsTopicARN
  * Resources **required**
    * Ec2AmiResources
      * items [Ec2AmiResource](#ec2amiresource)
    * LambdaResources
      * items [LambdaResource](#lambdaresource)
    * S3Resources
      * items [S3Resource](#s3resource)
  * RoleARN **required**
  * ShippingOption **required**
  * SnowballType
  * TaxDocuments
    * IND [INDTaxDocuments](#indtaxdocuments)

#### Output
* output [CreateClusterResult](#createclusterresult)

### CreateJob



```js
amazonaws_snowball.CreateJob({}, context)
```

#### Input
* input `object`
  * AddressId
  * ClusterId
  * Description
  * DeviceConfiguration
    * SnowconeDeviceConfiguration
      * WirelessConnection
        * IsWifiEnabled
  * ForwardingAddressId
  * JobType
  * KmsKeyARN
  * Notification
    * JobStatesToNotify
      * items [JobState](#jobstate)
    * NotifyAll
    * SnsTopicARN
  * Resources
    * Ec2AmiResources
      * items [Ec2AmiResource](#ec2amiresource)
    * LambdaResources
      * items [LambdaResource](#lambdaresource)
    * S3Resources
      * items [S3Resource](#s3resource)
  * RoleARN
  * ShippingOption
  * SnowballCapacityPreference
  * SnowballType
  * TaxDocuments
    * IND [INDTaxDocuments](#indtaxdocuments)

#### Output
* output [CreateJobResult](#createjobresult)

### CreateReturnShippingLabel



```js
amazonaws_snowball.CreateReturnShippingLabel({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**
  * ShippingOption

#### Output
* output [CreateReturnShippingLabelResult](#createreturnshippinglabelresult)

### DescribeAddress



```js
amazonaws_snowball.DescribeAddress({
  "AddressId": null
}, context)
```

#### Input
* input `object`
  * AddressId **required**

#### Output
* output [DescribeAddressResult](#describeaddressresult)

### DescribeAddresses



```js
amazonaws_snowball.DescribeAddresses({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [DescribeAddressesResult](#describeaddressesresult)

### DescribeCluster



```js
amazonaws_snowball.DescribeCluster({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**

#### Output
* output [DescribeClusterResult](#describeclusterresult)

### DescribeJob



```js
amazonaws_snowball.DescribeJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [DescribeJobResult](#describejobresult)

### DescribeReturnShippingLabel



```js
amazonaws_snowball.DescribeReturnShippingLabel({}, context)
```

#### Input
* input `object`
  * JobId

#### Output
* output [DescribeReturnShippingLabelResult](#describereturnshippinglabelresult)

### GetJobManifest



```js
amazonaws_snowball.GetJobManifest({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [GetJobManifestResult](#getjobmanifestresult)

### GetJobUnlockCode



```js
amazonaws_snowball.GetJobUnlockCode({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [GetJobUnlockCodeResult](#getjobunlockcoderesult)

### GetSnowballUsage



```js
amazonaws_snowball.GetSnowballUsage({}, context)
```

#### Input
* input `object`

#### Output
* output [GetSnowballUsageResult](#getsnowballusageresult)

### GetSoftwareUpdates



```js
amazonaws_snowball.GetSoftwareUpdates({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [GetSoftwareUpdatesResult](#getsoftwareupdatesresult)

### ListClusterJobs



```js
amazonaws_snowball.ListClusterJobs({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**
  * MaxResults
  * NextToken

#### Output
* output [ListClusterJobsResult](#listclusterjobsresult)

### ListClusters



```js
amazonaws_snowball.ListClusters({}, context)
```

#### Input
* input `object`
  * MaxResults
  * NextToken

#### Output
* output [ListClustersResult](#listclustersresult)

### ListCompatibleImages



```js
amazonaws_snowball.ListCompatibleImages({}, context)
```

#### Input
* input `object`
  * MaxResults
  * NextToken

#### Output
* output [ListCompatibleImagesResult](#listcompatibleimagesresult)

### ListJobs



```js
amazonaws_snowball.ListJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListJobsResult](#listjobsresult)

### UpdateCluster



```js
amazonaws_snowball.UpdateCluster({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * AddressId
  * ClusterId **required**
  * Description
  * ForwardingAddressId
  * Notification
    * JobStatesToNotify
      * items [JobState](#jobstate)
    * NotifyAll
    * SnsTopicARN
  * Resources
    * Ec2AmiResources
      * items [Ec2AmiResource](#ec2amiresource)
    * LambdaResources
      * items [LambdaResource](#lambdaresource)
    * S3Resources
      * items [S3Resource](#s3resource)
  * RoleARN
  * ShippingOption

#### Output
* output [UpdateClusterResult](#updateclusterresult)

### UpdateJob



```js
amazonaws_snowball.UpdateJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * AddressId
  * Description
  * ForwardingAddressId
  * JobId **required**
  * Notification
    * JobStatesToNotify
      * items [JobState](#jobstate)
    * NotifyAll
    * SnsTopicARN
  * Resources
    * Ec2AmiResources
      * items [Ec2AmiResource](#ec2amiresource)
    * LambdaResources
      * items [LambdaResource](#lambdaresource)
    * S3Resources
      * items [S3Resource](#s3resource)
  * RoleARN
  * ShippingOption
  * SnowballCapacityPreference

#### Output
* output [UpdateJobResult](#updatejobresult)

### UpdateJobShipmentState



```js
amazonaws_snowball.UpdateJobShipmentState({
  "JobId": null,
  "ShipmentState": null
}, context)
```

#### Input
* input `object`
  * JobId **required**
  * ShipmentState **required**

#### Output
* output [UpdateJobShipmentStateResult](#updatejobshipmentstateresult)



## Definitions

### Address
* Address `object`: The address that you want the Snow device(s) associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown.
  * AddressId
  * City
  * Company
  * Country
  * IsRestricted
  * Landmark
  * Name
  * PhoneNumber
  * PostalCode
  * PrefectureOrDistrict
  * StateOrProvince
  * Street1
  * Street2
  * Street3

### AddressId
* AddressId `string`

### AddressList
* AddressList `array`
  * items [Address](#address)

### AmiId
* AmiId `string`

### Boolean
* Boolean `boolean`

### CancelClusterRequest
* CancelClusterRequest `object`
  * ClusterId **required**

### CancelClusterResult
* CancelClusterResult `object`

### CancelJobRequest
* CancelJobRequest `object`
  * JobId **required**

### CancelJobResult
* CancelJobResult `object`

### ClusterId
* ClusterId `string`

### ClusterLimitExceededException


### ClusterListEntry
* ClusterListEntry `object`: Contains a cluster's state, a cluster's ID, and other important information.
  * ClusterId
  * ClusterState
  * CreationDate
  * Description

### ClusterListEntryList
* ClusterListEntryList `array`
  * items [ClusterListEntry](#clusterlistentry)

### ClusterMetadata
* ClusterMetadata `object`: Contains metadata about a specific cluster.
  * AddressId
  * ClusterId
  * ClusterState
  * CreationDate
  * Description
  * ForwardingAddressId
  * JobType
  * KmsKeyARN
  * Notification
    * JobStatesToNotify
      * items [JobState](#jobstate)
    * NotifyAll
    * SnsTopicARN
  * Resources
    * Ec2AmiResources
      * items [Ec2AmiResource](#ec2amiresource)
    * LambdaResources
      * items [LambdaResource](#lambdaresource)
    * S3Resources
      * items [S3Resource](#s3resource)
  * RoleARN
  * ShippingOption
  * SnowballType
  * TaxDocuments
    * IND [INDTaxDocuments](#indtaxdocuments)

### ClusterState
* ClusterState `string` (values: AwaitingQuorum, Pending, InUse, Complete, Cancelled)

### CompatibleImage
* CompatibleImage `object`: A JSON-formatted object that describes a compatible Amazon Machine Image (AMI), including the ID and name for a Snow device AMI. This AMI is compatible with the device's physical hardware requirements, and it should be able to be run in an SBE1 instance on the device.
  * AmiId
  * Name

### CompatibleImageList
* CompatibleImageList `array`
  * items [CompatibleImage](#compatibleimage)

### ConflictException


### CreateAddressRequest
* CreateAddressRequest `object`
  * Address **required**
    * AddressId
    * City
    * Company
    * Country
    * IsRestricted
    * Landmark
    * Name
    * PhoneNumber
    * PostalCode
    * PrefectureOrDistrict
    * StateOrProvince
    * Street1
    * Street2
    * Street3

### CreateAddressResult
* CreateAddressResult `object`
  * AddressId

### CreateClusterRequest
* CreateClusterRequest `object`
  * AddressId **required**
  * Description
  * ForwardingAddressId
  * JobType **required**
  * KmsKeyARN
  * Notification
    * JobStatesToNotify
      * items [JobState](#jobstate)
    * NotifyAll
    * SnsTopicARN
  * Resources **required**
    * Ec2AmiResources
      * items [Ec2AmiResource](#ec2amiresource)
    * LambdaResources
      * items [LambdaResource](#lambdaresource)
    * S3Resources
      * items [S3Resource](#s3resource)
  * RoleARN **required**
  * ShippingOption **required**
  * SnowballType
  * TaxDocuments
    * IND [INDTaxDocuments](#indtaxdocuments)

### CreateClusterResult
* CreateClusterResult `object`
  * ClusterId

### CreateJobRequest
* CreateJobRequest `object`
  * AddressId
  * ClusterId
  * Description
  * DeviceConfiguration
    * SnowconeDeviceConfiguration
      * WirelessConnection
        * IsWifiEnabled
  * ForwardingAddressId
  * JobType
  * KmsKeyARN
  * Notification
    * JobStatesToNotify
      * items [JobState](#jobstate)
    * NotifyAll
    * SnsTopicARN
  * Resources
    * Ec2AmiResources
      * items [Ec2AmiResource](#ec2amiresource)
    * LambdaResources
      * items [LambdaResource](#lambdaresource)
    * S3Resources
      * items [S3Resource](#s3resource)
  * RoleARN
  * ShippingOption
  * SnowballCapacityPreference
  * SnowballType
  * TaxDocuments
    * IND [INDTaxDocuments](#indtaxdocuments)

### CreateJobResult
* CreateJobResult `object`
  * JobId

### CreateReturnShippingLabelRequest
* CreateReturnShippingLabelRequest `object`
  * JobId **required**
  * ShippingOption

### CreateReturnShippingLabelResult
* CreateReturnShippingLabelResult `object`
  * Status

### DataTransfer
* DataTransfer `object`: Defines the real-time status of a Snow device's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs.
  * BytesTransferred
  * ObjectsTransferred
  * TotalBytes
  * TotalObjects

### DescribeAddressRequest
* DescribeAddressRequest `object`
  * AddressId **required**

### DescribeAddressResult
* DescribeAddressResult `object`
  * Address
    * AddressId
    * City
    * Company
    * Country
    * IsRestricted
    * Landmark
    * Name
    * PhoneNumber
    * PostalCode
    * PrefectureOrDistrict
    * StateOrProvince
    * Street1
    * Street2
    * Street3

### DescribeAddressesRequest
* DescribeAddressesRequest `object`
  * MaxResults
  * NextToken

### DescribeAddressesResult
* DescribeAddressesResult `object`
  * Addresses
    * items [Address](#address)
  * NextToken

### DescribeClusterRequest
* DescribeClusterRequest `object`
  * ClusterId **required**

### DescribeClusterResult
* DescribeClusterResult `object`
  * ClusterMetadata
    * AddressId
    * ClusterId
    * ClusterState
    * CreationDate
    * Description
    * ForwardingAddressId
    * JobType
    * KmsKeyARN
    * Notification
      * JobStatesToNotify
        * items [JobState](#jobstate)
      * NotifyAll
      * SnsTopicARN
    * Resources
      * Ec2AmiResources
        * items [Ec2AmiResource](#ec2amiresource)
      * LambdaResources
        * items [LambdaResource](#lambdaresource)
      * S3Resources
        * items [S3Resource](#s3resource)
    * RoleARN
    * ShippingOption
    * SnowballType
    * TaxDocuments
      * IND [INDTaxDocuments](#indtaxdocuments)

### DescribeJobRequest
* DescribeJobRequest `object`
  * JobId **required**

### DescribeJobResult
* DescribeJobResult `object`
  * JobMetadata
    * AddressId
    * ClusterId
    * CreationDate
    * DataTransferProgress
      * BytesTransferred
      * ObjectsTransferred
      * TotalBytes
      * TotalObjects
    * Description
    * DeviceConfiguration [DeviceConfiguration](#deviceconfiguration)
    * ForwardingAddressId
    * JobId
    * JobLogInfo
      * JobCompletionReportURI
      * JobFailureLogURI
      * JobSuccessLogURI
    * JobState
    * JobType
    * KmsKeyARN
    * Notification
      * JobStatesToNotify
        * items [JobState](#jobstate)
      * NotifyAll
      * SnsTopicARN
    * Resources
      * Ec2AmiResources
        * items [Ec2AmiResource](#ec2amiresource)
      * LambdaResources
        * items [LambdaResource](#lambdaresource)
      * S3Resources
        * items [S3Resource](#s3resource)
    * RoleARN
    * ShippingDetails
      * InboundShipment
        * Status
        * TrackingNumber
      * OutboundShipment
        * Status
        * TrackingNumber
      * ShippingOption
    * SnowballCapacityPreference
    * SnowballType
    * TaxDocuments
      * IND [INDTaxDocuments](#indtaxdocuments)
  * SubJobMetadata
    * items [JobMetadata](#jobmetadata)

### DescribeReturnShippingLabelRequest
* DescribeReturnShippingLabelRequest `object`
  * JobId

### DescribeReturnShippingLabelResult
* DescribeReturnShippingLabelResult `object`
  * ExpirationDate
  * Status

### DeviceConfiguration
* DeviceConfiguration `object`: The container for <code>SnowconeDeviceConfiguration</code>. 
  * SnowconeDeviceConfiguration
    * WirelessConnection
      * IsWifiEnabled

### Ec2AmiResource
* Ec2AmiResource `object`: A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2 AMI ID and the Snow device AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the AWS Cloud and on the device.
  * AmiId **required**
  * SnowballAmiId

### Ec2AmiResourceList
* Ec2AmiResourceList `array`
  * items [Ec2AmiResource](#ec2amiresource)

### Ec2RequestFailedException


### EventTriggerDefinition
* EventTriggerDefinition `object`: The container for the <a>EventTriggerDefinition$EventResourceARN</a>.
  * EventResourceARN

### EventTriggerDefinitionList
* EventTriggerDefinitionList `array`
  * items [EventTriggerDefinition](#eventtriggerdefinition)

### GSTIN
* GSTIN `string`

### GetJobManifestRequest
* GetJobManifestRequest `object`
  * JobId **required**

### GetJobManifestResult
* GetJobManifestResult `object`
  * ManifestURI

### GetJobUnlockCodeRequest
* GetJobUnlockCodeRequest `object`
  * JobId **required**

### GetJobUnlockCodeResult
* GetJobUnlockCodeResult `object`
  * UnlockCode

### GetSnowballUsageRequest
* GetSnowballUsageRequest `object`

### GetSnowballUsageResult
* GetSnowballUsageResult `object`
  * SnowballLimit
  * SnowballsInUse

### GetSoftwareUpdatesRequest
* GetSoftwareUpdatesRequest `object`
  * JobId **required**

### GetSoftwareUpdatesResult
* GetSoftwareUpdatesResult `object`
  * UpdatesURI

### INDTaxDocuments
* INDTaxDocuments `object`: The tax documents required in AWS Regions in India.
  * GSTIN

### Integer
* Integer `integer`

### InvalidAddressException


### InvalidInputCombinationException


### InvalidJobStateException


### InvalidNextTokenException


### InvalidResourceException


### JobId
* JobId `string`

### JobListEntry
* JobListEntry `object`: Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job.
  * CreationDate
  * Description
  * IsMaster
  * JobId
  * JobState
  * JobType
  * SnowballType

### JobListEntryList
* JobListEntryList `array`
  * items [JobListEntry](#joblistentry)

### JobLogs
* JobLogs `object`: <p>Contains job logs. Whenever a Snow device is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the <code>DescribeJob</code> action.</p> <p>For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snow device for your job part is being delivered to you.</p> <p>The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.</p> <p>For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.</p>
  * JobCompletionReportURI
  * JobFailureLogURI
  * JobSuccessLogURI

### JobMetadata
* JobMetadata `object`: Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action.
  * AddressId
  * ClusterId
  * CreationDate
  * DataTransferProgress
    * BytesTransferred
    * ObjectsTransferred
    * TotalBytes
    * TotalObjects
  * Description
  * DeviceConfiguration [DeviceConfiguration](#deviceconfiguration)
  * ForwardingAddressId
  * JobId
  * JobLogInfo
    * JobCompletionReportURI
    * JobFailureLogURI
    * JobSuccessLogURI
  * JobState
  * JobType
  * KmsKeyARN
  * Notification
    * JobStatesToNotify
      * items [JobState](#jobstate)
    * NotifyAll
    * SnsTopicARN
  * Resources
    * Ec2AmiResources
      * items [Ec2AmiResource](#ec2amiresource)
    * LambdaResources
      * items [LambdaResource](#lambdaresource)
    * S3Resources
      * items [S3Resource](#s3resource)
  * RoleARN
  * ShippingDetails
    * InboundShipment
      * Status
      * TrackingNumber
    * OutboundShipment
      * Status
      * TrackingNumber
    * ShippingOption
  * SnowballCapacityPreference
  * SnowballType
  * TaxDocuments
    * IND [INDTaxDocuments](#indtaxdocuments)

### JobMetadataList
* JobMetadataList `array`
  * items [JobMetadata](#jobmetadata)

### JobResource
* JobResource `object`: Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job.
  * Ec2AmiResources
    * items [Ec2AmiResource](#ec2amiresource)
  * LambdaResources
    * items [LambdaResource](#lambdaresource)
  * S3Resources
    * items [S3Resource](#s3resource)

### JobState
* JobState `string` (values: New, PreparingAppliance, PreparingShipment, InTransitToCustomer, WithCustomer, InTransitToAWS, WithAWSSortingFacility, WithAWS, InProgress, Complete, Cancelled, Listing, Pending)

### JobStateList
* JobStateList `array`
  * items [JobState](#jobstate)

### JobType
* JobType `string` (values: IMPORT, EXPORT, LOCAL_USE)

### KMSRequestFailedException


### KeyRange
* KeyRange `object`: Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.
  * BeginMarker
  * EndMarker

### KmsKeyARN
* KmsKeyARN `string`

### LambdaResource
* LambdaResource `object`: Identifies 
  * EventTriggers
    * items [EventTriggerDefinition](#eventtriggerdefinition)
  * LambdaArn

### LambdaResourceList
* LambdaResourceList `array`
  * items [LambdaResource](#lambdaresource)

### ListClusterJobsRequest
* ListClusterJobsRequest `object`
  * ClusterId **required**
  * MaxResults
  * NextToken

### ListClusterJobsResult
* ListClusterJobsResult `object`
  * JobListEntries
    * items [JobListEntry](#joblistentry)
  * NextToken

### ListClustersRequest
* ListClustersRequest `object`
  * MaxResults
  * NextToken

### ListClustersResult
* ListClustersResult `object`
  * ClusterListEntries
    * items [ClusterListEntry](#clusterlistentry)
  * NextToken

### ListCompatibleImagesRequest
* ListCompatibleImagesRequest `object`
  * MaxResults
  * NextToken

### ListCompatibleImagesResult
* ListCompatibleImagesResult `object`
  * CompatibleImages
    * items [CompatibleImage](#compatibleimage)
  * NextToken

### ListJobsRequest
* ListJobsRequest `object`
  * MaxResults
  * NextToken

### ListJobsResult
* ListJobsResult `object`
  * JobListEntries
    * items [JobListEntry](#joblistentry)
  * NextToken

### ListLimit
* ListLimit `integer`

### Long
* Long `integer`

### Notification
* Notification `object`: <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p>
  * JobStatesToNotify
    * items [JobState](#jobstate)
  * NotifyAll
  * SnsTopicARN

### ResourceARN
* ResourceARN `string`

### ReturnShippingLabelAlreadyExistsException


### RoleARN
* RoleARN `string`

### S3Resource
* S3Resource `object`: Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into. For export jobs, this object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.
  * BucketArn
  * KeyRange
    * BeginMarker
    * EndMarker

### S3ResourceList
* S3ResourceList `array`
  * items [S3Resource](#s3resource)

### Shipment
* Shipment `object`: The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment.
  * Status
  * TrackingNumber

### ShipmentState
* ShipmentState `string` (values: RECEIVED, RETURNED)

### ShippingDetails
* ShippingDetails `object`: A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.
  * InboundShipment
    * Status
    * TrackingNumber
  * OutboundShipment
    * Status
    * TrackingNumber
  * ShippingOption

### ShippingLabelStatus
* ShippingLabelStatus `string` (values: InProgress, TimedOut, Succeeded, Failed)

### ShippingOption
* ShippingOption `string` (values: SECOND_DAY, NEXT_DAY, EXPRESS, STANDARD)

### SnowballCapacity
* SnowballCapacity `string` (values: T50, T80, T100, T42, T98, T8, NoPreference)

### SnowballType
* SnowballType `string` (values: STANDARD, EDGE, EDGE_C, EDGE_CG, EDGE_S, SNC1_HDD)

### SnowconeDeviceConfiguration
* SnowconeDeviceConfiguration `object`: Specifies the device configuration for an AWS Snowcone job. 
  * WirelessConnection
    * IsWifiEnabled

### SnsTopicARN
* SnsTopicARN `string`

### String
* String `string`

### TaxDocuments
* TaxDocuments `object`: The tax documents required in your AWS Region.
  * IND [INDTaxDocuments](#indtaxdocuments)

### Timestamp
* Timestamp `string`

### UnsupportedAddressException


### UpdateClusterRequest
* UpdateClusterRequest `object`
  * AddressId
  * ClusterId **required**
  * Description
  * ForwardingAddressId
  * Notification
    * JobStatesToNotify
      * items [JobState](#jobstate)
    * NotifyAll
    * SnsTopicARN
  * Resources
    * Ec2AmiResources
      * items [Ec2AmiResource](#ec2amiresource)
    * LambdaResources
      * items [LambdaResource](#lambdaresource)
    * S3Resources
      * items [S3Resource](#s3resource)
  * RoleARN
  * ShippingOption

### UpdateClusterResult
* UpdateClusterResult `object`

### UpdateJobRequest
* UpdateJobRequest `object`
  * AddressId
  * Description
  * ForwardingAddressId
  * JobId **required**
  * Notification
    * JobStatesToNotify
      * items [JobState](#jobstate)
    * NotifyAll
    * SnsTopicARN
  * Resources
    * Ec2AmiResources
      * items [Ec2AmiResource](#ec2amiresource)
    * LambdaResources
      * items [LambdaResource](#lambdaresource)
    * S3Resources
      * items [S3Resource](#s3resource)
  * RoleARN
  * ShippingOption
  * SnowballCapacityPreference

### UpdateJobResult
* UpdateJobResult `object`

### UpdateJobShipmentStateRequest
* UpdateJobShipmentStateRequest `object`
  * JobId **required**
  * ShipmentState **required**

### UpdateJobShipmentStateResult
* UpdateJobShipmentStateResult `object`

### WirelessConnection
* WirelessConnection `object`: Configures the wireless connection on an AWS Snowcone device.
  * IsWifiEnabled


