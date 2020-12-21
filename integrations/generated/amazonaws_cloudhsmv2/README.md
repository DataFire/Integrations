# @datafire/amazonaws_cloudhsmv2

Client library for AWS CloudHSM V2

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_cloudhsmv2
```
```js
let amazonaws_cloudhsmv2 = require('@datafire/amazonaws_cloudhsmv2').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

For more information about AWS CloudHSM, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a> and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>.

## Actions

### CopyBackupToRegion



```js
amazonaws_cloudhsmv2.CopyBackupToRegion({
  "DestinationRegion": null,
  "BackupId": null
}, context)
```

#### Input
* input `object`
  * BackupId **required**
  * DestinationRegion **required**
  * TagList
    * items [Tag](#tag)

#### Output
* output [CopyBackupToRegionResponse](#copybackuptoregionresponse)

### CreateCluster



```js
amazonaws_cloudhsmv2.CreateCluster({
  "HsmType": null,
  "SubnetIds": null
}, context)
```

#### Input
* input `object`
  * BackupRetentionPolicy
    * Type
    * Value
  * HsmType **required**
  * SourceBackupId
  * SubnetIds **required**
    * items [SubnetId](#subnetid)
  * TagList
    * items [Tag](#tag)

#### Output
* output [CreateClusterResponse](#createclusterresponse)

### CreateHsm



```js
amazonaws_cloudhsmv2.CreateHsm({
  "ClusterId": null,
  "AvailabilityZone": null
}, context)
```

#### Input
* input `object`
  * AvailabilityZone **required**
  * ClusterId **required**
  * IpAddress

#### Output
* output [CreateHsmResponse](#createhsmresponse)

### DeleteBackup



```js
amazonaws_cloudhsmv2.DeleteBackup({
  "BackupId": null
}, context)
```

#### Input
* input `object`
  * BackupId **required**

#### Output
* output [DeleteBackupResponse](#deletebackupresponse)

### DeleteCluster



```js
amazonaws_cloudhsmv2.DeleteCluster({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**

#### Output
* output [DeleteClusterResponse](#deleteclusterresponse)

### DeleteHsm



```js
amazonaws_cloudhsmv2.DeleteHsm({
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**
  * EniId
  * EniIp
  * HsmId

#### Output
* output [DeleteHsmResponse](#deletehsmresponse)

### DescribeBackups



```js
amazonaws_cloudhsmv2.DescribeBackups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
  * MaxResults
  * NextToken
  * SortAscending

#### Output
* output [DescribeBackupsResponse](#describebackupsresponse)

### DescribeClusters



```js
amazonaws_cloudhsmv2.DescribeClusters({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters
  * MaxResults
  * NextToken

#### Output
* output [DescribeClustersResponse](#describeclustersresponse)

### InitializeCluster



```js
amazonaws_cloudhsmv2.InitializeCluster({
  "ClusterId": null,
  "SignedCert": null,
  "TrustAnchor": null
}, context)
```

#### Input
* input `object`
  * ClusterId **required**
  * SignedCert **required**
  * TrustAnchor **required**

#### Output
* output [InitializeClusterResponse](#initializeclusterresponse)

### ListTags



```js
amazonaws_cloudhsmv2.ListTags({
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ResourceId **required**

#### Output
* output [ListTagsResponse](#listtagsresponse)

### ModifyBackupAttributes



```js
amazonaws_cloudhsmv2.ModifyBackupAttributes({
  "BackupId": null,
  "NeverExpires": null
}, context)
```

#### Input
* input `object`
  * BackupId **required**
  * NeverExpires **required**

#### Output
* output [ModifyBackupAttributesResponse](#modifybackupattributesresponse)

### ModifyCluster



```js
amazonaws_cloudhsmv2.ModifyCluster({
  "BackupRetentionPolicy": null,
  "ClusterId": null
}, context)
```

#### Input
* input `object`
  * BackupRetentionPolicy **required**
    * Type
    * Value
  * ClusterId **required**

#### Output
* output [ModifyClusterResponse](#modifyclusterresponse)

### RestoreBackup



```js
amazonaws_cloudhsmv2.RestoreBackup({
  "BackupId": null
}, context)
```

#### Input
* input `object`
  * BackupId **required**

#### Output
* output [RestoreBackupResponse](#restorebackupresponse)

### TagResource



```js
amazonaws_cloudhsmv2.TagResource({
  "ResourceId": null,
  "TagList": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * TagList **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_cloudhsmv2.UntagResource({
  "ResourceId": null,
  "TagKeyList": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * TagKeyList **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### Backup
* Backup `object`: Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>, <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is pending deletion will include the <code>DeleteTimestamp</code> parameter.
  * BackupId **required**
  * BackupState
  * ClusterId
  * CopyTimestamp
  * CreateTimestamp
  * DeleteTimestamp
  * NeverExpires
  * SourceBackup
  * SourceCluster
  * SourceRegion
  * TagList
    * items [Tag](#tag)

### BackupId
* BackupId `string`

### BackupPolicy
* BackupPolicy `string` (values: DEFAULT)

### BackupRetentionPolicy
* BackupRetentionPolicy `object`: A policy that defines the number of days to retain backups.
  * Type
  * Value

### BackupRetentionType
* BackupRetentionType `string` (values: DAYS)

### BackupRetentionValue
* BackupRetentionValue `string`

### BackupState
* BackupState `string` (values: CREATE_IN_PROGRESS, READY, DELETED, PENDING_DELETION)

### Backups
* Backups `array`
  * items [Backup](#backup)

### BackupsMaxSize
* BackupsMaxSize `integer`

### Boolean
* Boolean `boolean`

### Cert
* Cert `string`

### Certificates
* Certificates `object`: Contains one or more certificates or a certificate signing request (CSR).
  * AwsHardwareCertificate
  * ClusterCertificate
  * ClusterCsr
  * HsmCertificate
  * ManufacturerHardwareCertificate

### CloudHsmAccessDeniedException


### CloudHsmInternalFailureException


### CloudHsmInvalidRequestException


### CloudHsmResourceNotFoundException


### CloudHsmServiceException


### CloudHsmTagException


### Cluster
* Cluster `object`: Contains information about an AWS CloudHSM cluster.
  * BackupPolicy
  * BackupRetentionPolicy
    * Type
    * Value
  * Certificates
    * AwsHardwareCertificate
    * ClusterCertificate
    * ClusterCsr
    * HsmCertificate
    * ManufacturerHardwareCertificate
  * ClusterId
  * CreateTimestamp
  * HsmType
  * Hsms
    * items [Hsm](#hsm)
  * PreCoPassword
  * SecurityGroup
  * SourceBackupId
  * State
  * StateMessage
  * SubnetMapping
  * TagList
    * items [Tag](#tag)
  * VpcId

### ClusterId
* ClusterId `string`

### ClusterState
* ClusterState `string` (values: CREATE_IN_PROGRESS, UNINITIALIZED, INITIALIZE_IN_PROGRESS, INITIALIZED, ACTIVE, UPDATE_IN_PROGRESS, DELETE_IN_PROGRESS, DELETED, DEGRADED)

### Clusters
* Clusters `array`
  * items [Cluster](#cluster)

### ClustersMaxSize
* ClustersMaxSize `integer`

### CopyBackupToRegionRequest
* CopyBackupToRegionRequest `object`
  * BackupId **required**
  * DestinationRegion **required**
  * TagList
    * items [Tag](#tag)

### CopyBackupToRegionResponse
* CopyBackupToRegionResponse `object`
  * DestinationBackup
    * CreateTimestamp
    * SourceBackup
    * SourceCluster
    * SourceRegion

### CreateClusterRequest
* CreateClusterRequest `object`
  * BackupRetentionPolicy
    * Type
    * Value
  * HsmType **required**
  * SourceBackupId
  * SubnetIds **required**
    * items [SubnetId](#subnetid)
  * TagList
    * items [Tag](#tag)

### CreateClusterResponse
* CreateClusterResponse `object`
  * Cluster
    * BackupPolicy
    * BackupRetentionPolicy
      * Type
      * Value
    * Certificates
      * AwsHardwareCertificate
      * ClusterCertificate
      * ClusterCsr
      * HsmCertificate
      * ManufacturerHardwareCertificate
    * ClusterId
    * CreateTimestamp
    * HsmType
    * Hsms
      * items [Hsm](#hsm)
    * PreCoPassword
    * SecurityGroup
    * SourceBackupId
    * State
    * StateMessage
    * SubnetMapping
    * TagList
      * items [Tag](#tag)
    * VpcId

### CreateHsmRequest
* CreateHsmRequest `object`
  * AvailabilityZone **required**
  * ClusterId **required**
  * IpAddress

### CreateHsmResponse
* CreateHsmResponse `object`
  * Hsm
    * AvailabilityZone
    * ClusterId
    * EniId
    * EniIp
    * HsmId **required**
    * State
    * StateMessage
    * SubnetId

### DeleteBackupRequest
* DeleteBackupRequest `object`
  * BackupId **required**

### DeleteBackupResponse
* DeleteBackupResponse `object`
  * Backup
    * BackupId **required**
    * BackupState
    * ClusterId
    * CopyTimestamp
    * CreateTimestamp
    * DeleteTimestamp
    * NeverExpires
    * SourceBackup
    * SourceCluster
    * SourceRegion
    * TagList
      * items [Tag](#tag)

### DeleteClusterRequest
* DeleteClusterRequest `object`
  * ClusterId **required**

### DeleteClusterResponse
* DeleteClusterResponse `object`
  * Cluster
    * BackupPolicy
    * BackupRetentionPolicy
      * Type
      * Value
    * Certificates
      * AwsHardwareCertificate
      * ClusterCertificate
      * ClusterCsr
      * HsmCertificate
      * ManufacturerHardwareCertificate
    * ClusterId
    * CreateTimestamp
    * HsmType
    * Hsms
      * items [Hsm](#hsm)
    * PreCoPassword
    * SecurityGroup
    * SourceBackupId
    * State
    * StateMessage
    * SubnetMapping
    * TagList
      * items [Tag](#tag)
    * VpcId

### DeleteHsmRequest
* DeleteHsmRequest `object`
  * ClusterId **required**
  * EniId
  * EniIp
  * HsmId

### DeleteHsmResponse
* DeleteHsmResponse `object`
  * HsmId

### DescribeBackupsRequest
* DescribeBackupsRequest `object`
  * Filters
  * MaxResults
  * NextToken
  * SortAscending

### DescribeBackupsResponse
* DescribeBackupsResponse `object`
  * Backups
    * items [Backup](#backup)
  * NextToken

### DescribeClustersRequest
* DescribeClustersRequest `object`
  * Filters
  * MaxResults
  * NextToken

### DescribeClustersResponse
* DescribeClustersResponse `object`
  * Clusters
    * items [Cluster](#cluster)
  * NextToken

### DestinationBackup
* DestinationBackup `object`: Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation.
  * CreateTimestamp
  * SourceBackup
  * SourceCluster
  * SourceRegion

### EniId
* EniId `string`

### ExternalAz
* ExternalAz `string`

### ExternalSubnetMapping
* ExternalSubnetMapping `object`

### Field
* Field `string`

### Filters
* Filters `object`

### Hsm
* Hsm `object`: Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster.
  * AvailabilityZone
  * ClusterId
  * EniId
  * EniIp
  * HsmId **required**
  * State
  * StateMessage
  * SubnetId

### HsmId
* HsmId `string`

### HsmState
* HsmState `string` (values: CREATE_IN_PROGRESS, ACTIVE, DEGRADED, DELETE_IN_PROGRESS, DELETED)

### HsmType
* HsmType `string`

### Hsms
* Hsms `array`
  * items [Hsm](#hsm)

### InitializeClusterRequest
* InitializeClusterRequest `object`
  * ClusterId **required**
  * SignedCert **required**
  * TrustAnchor **required**

### InitializeClusterResponse
* InitializeClusterResponse `object`
  * State
  * StateMessage

### IpAddress
* IpAddress `string`

### ListTagsRequest
* ListTagsRequest `object`
  * MaxResults
  * NextToken
  * ResourceId **required**

### ListTagsResponse
* ListTagsResponse `object`
  * NextToken
  * TagList **required**
    * items [Tag](#tag)

### MaxSize
* MaxSize `integer`

### ModifyBackupAttributesRequest
* ModifyBackupAttributesRequest `object`
  * BackupId **required**
  * NeverExpires **required**

### ModifyBackupAttributesResponse
* ModifyBackupAttributesResponse `object`
  * Backup [Backup](#backup)

### ModifyClusterRequest
* ModifyClusterRequest `object`
  * BackupRetentionPolicy **required**
    * Type
    * Value
  * ClusterId **required**

### ModifyClusterResponse
* ModifyClusterResponse `object`
  * Cluster [Cluster](#cluster)

### NextToken
* NextToken `string`

### PreCoPassword
* PreCoPassword `string`

### Region
* Region `string`

### ResourceId
* ResourceId `string`

### RestoreBackupRequest
* RestoreBackupRequest `object`
  * BackupId **required**

### RestoreBackupResponse
* RestoreBackupResponse `object`
  * Backup
    * BackupId **required**
    * BackupState
    * ClusterId
    * CopyTimestamp
    * CreateTimestamp
    * DeleteTimestamp
    * NeverExpires
    * SourceBackup
    * SourceCluster
    * SourceRegion
    * TagList
      * items [Tag](#tag)

### SecurityGroup
* SecurityGroup `string`

### StateMessage
* StateMessage `string`

### String
* String `string`

### Strings
* Strings `array`
  * items [String](#string)

### SubnetId
* SubnetId `string`

### SubnetIds
* SubnetIds `array`
  * items [SubnetId](#subnetid)

### Tag
* Tag `object`: Contains a tag. A tag is a key-value pair.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceId **required**
  * TagList **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceId **required**
  * TagKeyList **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### VpcId
* VpcId `string`


