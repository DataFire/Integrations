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

amazonaws_snowball.CancelCluster({
  "ClusterId": ""
}).then(data => {
  console.log(data);
});
```

## Description

AWS Snowball is a petabyte-scale data transport solution that uses secure appliances to transfer large amounts of data between your on-premises data centers and Amazon Simple Storage Service (Amazon S3). The Snowball commands described here provide access to the same functionality that is available in the AWS Snowball Management Console, which enables you to create and manage jobs for Snowball. To transfer data locally with a Snowball appliance, you'll need to use the Snowball client or the Amazon S3 API adapter for Snowball. For more information, see the <a href="http://docs.aws.amazon.com/AWSImportExport/latest/ug/api-reference.html">User Guide</a>.

## Actions

### CancelCluster



```js
amazonaws_snowball.CancelCluster({
  "ClusterId": ""
}, context)
```

#### Input
* input `object`
  * ClusterId **required** [ClusterId](#clusterid)

#### Output
* output [CancelClusterResult](#cancelclusterresult)

### CancelJob



```js
amazonaws_snowball.CancelJob({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** [JobId](#jobid)

#### Output
* output [CancelJobResult](#canceljobresult)

### CreateAddress



```js
amazonaws_snowball.CreateAddress({
  "Address": {}
}, context)
```

#### Input
* input `object`
  * Address **required** [Address](#address)

#### Output
* output [CreateAddressResult](#createaddressresult)

### CreateCluster



```js
amazonaws_snowball.CreateCluster({
  "JobType": "",
  "Resources": {},
  "AddressId": "",
  "RoleARN": "",
  "ShippingOption": ""
}, context)
```

#### Input
* input `object`
  * AddressId **required** [AddressId](#addressid)
  * Description [String](#string)
  * ForwardingAddressId [AddressId](#addressid)
  * JobType **required** [JobType](#jobtype)
  * KmsKeyARN [KmsKeyARN](#kmskeyarn)
  * Notification [Notification](#notification)
  * Resources **required** [JobResource](#jobresource)
  * RoleARN **required** [RoleARN](#rolearn)
  * ShippingOption **required** [ShippingOption](#shippingoption)
  * SnowballType [SnowballType](#snowballtype)

#### Output
* output [CreateClusterResult](#createclusterresult)

### CreateJob



```js
amazonaws_snowball.CreateJob({}, context)
```

#### Input
* input `object`
  * AddressId [AddressId](#addressid)
  * ClusterId [ClusterId](#clusterid)
  * Description [String](#string)
  * ForwardingAddressId [AddressId](#addressid)
  * JobType [JobType](#jobtype)
  * KmsKeyARN [KmsKeyARN](#kmskeyarn)
  * Notification [Notification](#notification)
  * Resources [JobResource](#jobresource)
  * RoleARN [RoleARN](#rolearn)
  * ShippingOption [ShippingOption](#shippingoption)
  * SnowballCapacityPreference [SnowballCapacity](#snowballcapacity)
  * SnowballType [SnowballType](#snowballtype)

#### Output
* output [CreateJobResult](#createjobresult)

### DescribeAddress



```js
amazonaws_snowball.DescribeAddress({
  "AddressId": ""
}, context)
```

#### Input
* input `object`
  * AddressId **required** [AddressId](#addressid)

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
  * MaxResults [ListLimit](#listlimit)
  * NextToken [String](#string)

#### Output
* output [DescribeAddressesResult](#describeaddressesresult)

### DescribeCluster



```js
amazonaws_snowball.DescribeCluster({
  "ClusterId": ""
}, context)
```

#### Input
* input `object`
  * ClusterId **required** [ClusterId](#clusterid)

#### Output
* output [DescribeClusterResult](#describeclusterresult)

### DescribeJob



```js
amazonaws_snowball.DescribeJob({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** [JobId](#jobid)

#### Output
* output [DescribeJobResult](#describejobresult)

### GetJobManifest



```js
amazonaws_snowball.GetJobManifest({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** [JobId](#jobid)

#### Output
* output [GetJobManifestResult](#getjobmanifestresult)

### GetJobUnlockCode



```js
amazonaws_snowball.GetJobUnlockCode({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * JobId **required** [JobId](#jobid)

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

### ListClusterJobs



```js
amazonaws_snowball.ListClusterJobs({
  "ClusterId": ""
}, context)
```

#### Input
* input `object`
  * ClusterId **required** [ClusterId](#clusterid)
  * MaxResults [ListLimit](#listlimit)
  * NextToken [String](#string)

#### Output
* output [ListClusterJobsResult](#listclusterjobsresult)

### ListClusters



```js
amazonaws_snowball.ListClusters({}, context)
```

#### Input
* input `object`
  * MaxResults [ListLimit](#listlimit)
  * NextToken [String](#string)

#### Output
* output [ListClustersResult](#listclustersresult)

### ListJobs



```js
amazonaws_snowball.ListJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [ListLimit](#listlimit)
  * NextToken [String](#string)

#### Output
* output [ListJobsResult](#listjobsresult)

### UpdateCluster



```js
amazonaws_snowball.UpdateCluster({
  "ClusterId": ""
}, context)
```

#### Input
* input `object`
  * AddressId [AddressId](#addressid)
  * ClusterId **required** [ClusterId](#clusterid)
  * Description [String](#string)
  * ForwardingAddressId [AddressId](#addressid)
  * Notification [Notification](#notification)
  * Resources [JobResource](#jobresource)
  * RoleARN [RoleARN](#rolearn)
  * ShippingOption [ShippingOption](#shippingoption)

#### Output
* output [UpdateClusterResult](#updateclusterresult)

### UpdateJob



```js
amazonaws_snowball.UpdateJob({
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * AddressId [AddressId](#addressid)
  * Description [String](#string)
  * ForwardingAddressId [AddressId](#addressid)
  * JobId **required** [JobId](#jobid)
  * Notification [Notification](#notification)
  * Resources [JobResource](#jobresource)
  * RoleARN [RoleARN](#rolearn)
  * ShippingOption [ShippingOption](#shippingoption)
  * SnowballCapacityPreference [SnowballCapacity](#snowballcapacity)

#### Output
* output [UpdateJobResult](#updatejobresult)



## Definitions

### Address
* Address `object`: The address that you want the Snowball or Snowballs associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown.
  * AddressId [AddressId](#addressid)
  * City [String](#string)
  * Company [String](#string)
  * Country [String](#string)
  * IsRestricted [Boolean](#boolean)
  * Landmark [String](#string)
  * Name [String](#string)
  * PhoneNumber [String](#string)
  * PostalCode [String](#string)
  * PrefectureOrDistrict [String](#string)
  * StateOrProvince [String](#string)
  * Street1 [String](#string)
  * Street2 [String](#string)
  * Street3 [String](#string)

### AddressId
* AddressId `string`

### AddressList
* AddressList `array`
  * items [Address](#address)

### Boolean
* Boolean `boolean`

### CancelClusterRequest
* CancelClusterRequest `object`
  * ClusterId **required** [ClusterId](#clusterid)

### CancelClusterResult
* CancelClusterResult `object`

### CancelJobRequest
* CancelJobRequest `object`
  * JobId **required** [JobId](#jobid)

### CancelJobResult
* CancelJobResult `object`

### ClusterId
* ClusterId `string`

### ClusterLimitExceededException
* ClusterLimitExceededException `object`: Job creation failed. Currently, clusters support five nodes. If you have less than five nodes for your cluster and you have more nodes to create for this cluster, try again and create jobs until your cluster has exactly five notes.
  * Message [String](#string)

### ClusterListEntry
* ClusterListEntry `object`: Contains a cluster's state, a cluster's ID, and other important information.
  * ClusterId [String](#string)
  * ClusterState [ClusterState](#clusterstate)
  * CreationDate [Timestamp](#timestamp)
  * Description [String](#string)

### ClusterListEntryList
* ClusterListEntryList `array`
  * items [ClusterListEntry](#clusterlistentry)

### ClusterMetadata
* ClusterMetadata `object`: Contains metadata about a specific cluster.
  * AddressId [AddressId](#addressid)
  * ClusterId [String](#string)
  * ClusterState [ClusterState](#clusterstate)
  * CreationDate [Timestamp](#timestamp)
  * Description [String](#string)
  * ForwardingAddressId [AddressId](#addressid)
  * JobType [JobType](#jobtype)
  * KmsKeyARN [KmsKeyARN](#kmskeyarn)
  * Notification [Notification](#notification)
  * Resources [JobResource](#jobresource)
  * RoleARN [RoleARN](#rolearn)
  * ShippingOption [ShippingOption](#shippingoption)
  * SnowballType [SnowballType](#snowballtype)

### ClusterState
* ClusterState `string` (values: AwaitingQuorum, Pending, InUse, Complete, Cancelled)

### CreateAddressRequest
* CreateAddressRequest `object`
  * Address **required** [Address](#address)

### CreateAddressResult
* CreateAddressResult `object`
  * AddressId [String](#string)

### CreateClusterRequest
* CreateClusterRequest `object`
  * AddressId **required** [AddressId](#addressid)
  * Description [String](#string)
  * ForwardingAddressId [AddressId](#addressid)
  * JobType **required** [JobType](#jobtype)
  * KmsKeyARN [KmsKeyARN](#kmskeyarn)
  * Notification [Notification](#notification)
  * Resources **required** [JobResource](#jobresource)
  * RoleARN **required** [RoleARN](#rolearn)
  * ShippingOption **required** [ShippingOption](#shippingoption)
  * SnowballType [SnowballType](#snowballtype)

### CreateClusterResult
* CreateClusterResult `object`
  * ClusterId [ClusterId](#clusterid)

### CreateJobRequest
* CreateJobRequest `object`
  * AddressId [AddressId](#addressid)
  * ClusterId [ClusterId](#clusterid)
  * Description [String](#string)
  * ForwardingAddressId [AddressId](#addressid)
  * JobType [JobType](#jobtype)
  * KmsKeyARN [KmsKeyARN](#kmskeyarn)
  * Notification [Notification](#notification)
  * Resources [JobResource](#jobresource)
  * RoleARN [RoleARN](#rolearn)
  * ShippingOption [ShippingOption](#shippingoption)
  * SnowballCapacityPreference [SnowballCapacity](#snowballcapacity)
  * SnowballType [SnowballType](#snowballtype)

### CreateJobResult
* CreateJobResult `object`
  * JobId [JobId](#jobid)

### DataTransfer
* DataTransfer `object`: Defines the real-time status of a Snowball's data transfer while the appliance is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs.
  * BytesTransferred [Long](#long)
  * ObjectsTransferred [Long](#long)
  * TotalBytes [Long](#long)
  * TotalObjects [Long](#long)

### DescribeAddressRequest
* DescribeAddressRequest `object`
  * AddressId **required** [AddressId](#addressid)

### DescribeAddressResult
* DescribeAddressResult `object`
  * Address [Address](#address)

### DescribeAddressesRequest
* DescribeAddressesRequest `object`
  * MaxResults [ListLimit](#listlimit)
  * NextToken [String](#string)

### DescribeAddressesResult
* DescribeAddressesResult `object`
  * Addresses [AddressList](#addresslist)
  * NextToken [String](#string)

### DescribeClusterRequest
* DescribeClusterRequest `object`
  * ClusterId **required** [ClusterId](#clusterid)

### DescribeClusterResult
* DescribeClusterResult `object`
  * ClusterMetadata [ClusterMetadata](#clustermetadata)

### DescribeJobRequest
* DescribeJobRequest `object`
  * JobId **required** [JobId](#jobid)

### DescribeJobResult
* DescribeJobResult `object`
  * JobMetadata [JobMetadata](#jobmetadata)
  * SubJobMetadata [JobMetadataList](#jobmetadatalist)

### EventTriggerDefinition
* EventTriggerDefinition `object`: The container for the <a>EventTriggerDefinition$EventResourceARN</a>.
  * EventResourceARN [ResourceARN](#resourcearn)

### EventTriggerDefinitionList
* EventTriggerDefinitionList `array`
  * items [EventTriggerDefinition](#eventtriggerdefinition)

### GetJobManifestRequest
* GetJobManifestRequest `object`
  * JobId **required** [JobId](#jobid)

### GetJobManifestResult
* GetJobManifestResult `object`
  * ManifestURI [String](#string)

### GetJobUnlockCodeRequest
* GetJobUnlockCodeRequest `object`
  * JobId **required** [JobId](#jobid)

### GetJobUnlockCodeResult
* GetJobUnlockCodeResult `object`
  * UnlockCode [String](#string)

### GetSnowballUsageRequest
* GetSnowballUsageRequest `object`

### GetSnowballUsageResult
* GetSnowballUsageResult `object`
  * SnowballLimit [Integer](#integer)
  * SnowballsInUse [Integer](#integer)

### Integer
* Integer `integer`

### InvalidAddressException
* InvalidAddressException `object`: The address provided was invalid. Check the address with your region's carrier, and try again.
  * Message [String](#string)

### InvalidInputCombinationException
* InvalidInputCombinationException `object`: Job or cluster creation failed. One ore more inputs were invalid. Confirm that the <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.
  * Message [String](#string)

### InvalidJobStateException
* InvalidJobStateException `object`: The action can't be performed because the job's current state doesn't allow that action to be performed.
  * Message [String](#string)

### InvalidNextTokenException
* InvalidNextTokenException `object`: The <code>NextToken</code> string was altered unexpectedly, and the operation has stopped. Run the operation without changing the <code>NextToken</code> string, and try again.
  * Message [String](#string)

### InvalidResourceException
* InvalidResourceException `object`: The specified resource can't be found. Check the information you provided in your last request, and try again.
  * Message [String](#string)

### JobId
* JobId `string`

### JobListEntry
* JobListEntry `object`: Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job.
  * CreationDate [Timestamp](#timestamp)
  * Description [String](#string)
  * IsMaster [Boolean](#boolean)
  * JobId [String](#string)
  * JobState [JobState](#jobstate)
  * JobType [JobType](#jobtype)
  * SnowballType [SnowballType](#snowballtype)

### JobListEntryList
* JobListEntryList `array`
  * items [JobListEntry](#joblistentry)

### JobLogs
* JobLogs `object`: <p>Contains job logs. Whenever Snowball is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the <code>DescribeJob</code> action.</p> <p>For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snowball for your job part is being delivered to you.</p> <p>The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.</p> <p>For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.</p>
  * JobCompletionReportURI [String](#string)
  * JobFailureLogURI [String](#string)
  * JobSuccessLogURI [String](#string)

### JobMetadata
* JobMetadata `object`: Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action.
  * AddressId [AddressId](#addressid)
  * ClusterId [String](#string)
  * CreationDate [Timestamp](#timestamp)
  * DataTransferProgress [DataTransfer](#datatransfer)
  * Description [String](#string)
  * ForwardingAddressId [AddressId](#addressid)
  * JobId [String](#string)
  * JobLogInfo [JobLogs](#joblogs)
  * JobState [JobState](#jobstate)
  * JobType [JobType](#jobtype)
  * KmsKeyARN [KmsKeyARN](#kmskeyarn)
  * Notification [Notification](#notification)
  * Resources [JobResource](#jobresource)
  * RoleARN [RoleARN](#rolearn)
  * ShippingDetails [ShippingDetails](#shippingdetails)
  * SnowballCapacityPreference [SnowballCapacity](#snowballcapacity)
  * SnowballType [SnowballType](#snowballtype)

### JobMetadataList
* JobMetadataList `array`
  * items [JobMetadata](#jobmetadata)

### JobResource
* JobResource `object`: Contains an array of <code>S3Resource</code> objects. Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into.
  * LambdaResources [LambdaResourceList](#lambdaresourcelist)
  * S3Resources [S3ResourceList](#s3resourcelist)

### JobState
* JobState `string` (values: New, PreparingAppliance, PreparingShipment, InTransitToCustomer, WithCustomer, InTransitToAWS, WithAWS, InProgress, Complete, Cancelled, Listing, Pending)

### JobStateList
* JobStateList `array`
  * items [JobState](#jobstate)

### JobType
* JobType `string` (values: IMPORT, EXPORT, LOCAL_USE)

### KMSRequestFailedException
* KMSRequestFailedException `object`: The provided AWS Key Management Service key lacks the permissions to perform the specified <a>CreateJob</a> or <a>UpdateJob</a> action.
  * Message [String](#string)

### KeyRange
* KeyRange `object`: Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.
  * BeginMarker [String](#string)
  * EndMarker [String](#string)

### KmsKeyARN
* KmsKeyARN `string`

### LambdaResource
* LambdaResource `object`: Identifies 
  * EventTriggers [EventTriggerDefinitionList](#eventtriggerdefinitionlist)
  * LambdaArn [ResourceARN](#resourcearn)

### LambdaResourceList
* LambdaResourceList `array`
  * items [LambdaResource](#lambdaresource)

### ListClusterJobsRequest
* ListClusterJobsRequest `object`
  * ClusterId **required** [ClusterId](#clusterid)
  * MaxResults [ListLimit](#listlimit)
  * NextToken [String](#string)

### ListClusterJobsResult
* ListClusterJobsResult `object`
  * JobListEntries [JobListEntryList](#joblistentrylist)
  * NextToken [String](#string)

### ListClustersRequest
* ListClustersRequest `object`
  * MaxResults [ListLimit](#listlimit)
  * NextToken [String](#string)

### ListClustersResult
* ListClustersResult `object`
  * ClusterListEntries [ClusterListEntryList](#clusterlistentrylist)
  * NextToken [String](#string)

### ListJobsRequest
* ListJobsRequest `object`
  * MaxResults [ListLimit](#listlimit)
  * NextToken [String](#string)

### ListJobsResult
* ListJobsResult `object`
  * JobListEntries [JobListEntryList](#joblistentrylist)
  * NextToken [String](#string)

### ListLimit
* ListLimit `integer`

### Long
* Long `integer`

### Notification
* Notification `object`: <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p>
  * JobStatesToNotify [JobStateList](#jobstatelist)
  * NotifyAll [Boolean](#boolean)
  * SnsTopicARN [SnsTopicARN](#snstopicarn)

### ResourceARN
* ResourceARN `string`

### RoleARN
* RoleARN `string`

### S3Resource
* S3Resource `object`: Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into. For export jobs, this object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.
  * BucketArn [ResourceARN](#resourcearn)
  * KeyRange [KeyRange](#keyrange)

### S3ResourceList
* S3ResourceList `array`
  * items [S3Resource](#s3resource)

### Shipment
* Shipment `object`: The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment.
  * Status [String](#string)
  * TrackingNumber [String](#string)

### ShippingDetails
* ShippingDetails `object`: A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.
  * InboundShipment [Shipment](#shipment)
  * OutboundShipment [Shipment](#shipment)
  * ShippingOption [ShippingOption](#shippingoption)

### ShippingOption
* ShippingOption `string` (values: SECOND_DAY, NEXT_DAY, EXPRESS, STANDARD)

### SnowballCapacity
* SnowballCapacity `string` (values: T50, T80, T100, NoPreference)

### SnowballType
* SnowballType `string` (values: STANDARD, EDGE)

### SnsTopicARN
* SnsTopicARN `string`

### String
* String `string`

### Timestamp
* Timestamp `string`

### UnsupportedAddressException
* UnsupportedAddressException `object`: The address is either outside the serviceable area for your region, or an error occurred. Check the address with your region's carrier and try again. If the issue persists, contact AWS Support.
  * Message [String](#string)

### UpdateClusterRequest
* UpdateClusterRequest `object`
  * AddressId [AddressId](#addressid)
  * ClusterId **required** [ClusterId](#clusterid)
  * Description [String](#string)
  * ForwardingAddressId [AddressId](#addressid)
  * Notification [Notification](#notification)
  * Resources [JobResource](#jobresource)
  * RoleARN [RoleARN](#rolearn)
  * ShippingOption [ShippingOption](#shippingoption)

### UpdateClusterResult
* UpdateClusterResult `object`

### UpdateJobRequest
* UpdateJobRequest `object`
  * AddressId [AddressId](#addressid)
  * Description [String](#string)
  * ForwardingAddressId [AddressId](#addressid)
  * JobId **required** [JobId](#jobid)
  * Notification [Notification](#notification)
  * Resources [JobResource](#jobresource)
  * RoleARN [RoleARN](#rolearn)
  * ShippingOption [ShippingOption](#shippingoption)
  * SnowballCapacityPreference [SnowballCapacity](#snowballcapacity)

### UpdateJobResult
* UpdateJobResult `object`


