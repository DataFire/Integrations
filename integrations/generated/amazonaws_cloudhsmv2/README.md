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

amazonaws_cloudhsmv2.CreateCluster({
  "SubnetIds": [],
  "HsmType": ""
}).then(data => {
  console.log(data);
});
```

## Description

For more information about AWS CloudHSM, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a> and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>.

## Actions

### CreateCluster



```js
amazonaws_cloudhsmv2.CreateCluster({
  "SubnetIds": [],
  "HsmType": ""
}, context)
```

#### Input
* input `object`
  * HsmType **required** [HsmType](#hsmtype)
  * SourceBackupId [BackupId](#backupid)
  * SubnetIds **required** [SubnetIds](#subnetids)

#### Output
* output [CreateClusterResponse](#createclusterresponse)

### CreateHsm



```js
amazonaws_cloudhsmv2.CreateHsm({
  "ClusterId": "",
  "AvailabilityZone": ""
}, context)
```

#### Input
* input `object`
  * AvailabilityZone **required** [ExternalAz](#externalaz)
  * ClusterId **required** [ClusterId](#clusterid)
  * IpAddress [IpAddress](#ipaddress)

#### Output
* output [CreateHsmResponse](#createhsmresponse)

### DeleteCluster



```js
amazonaws_cloudhsmv2.DeleteCluster({
  "ClusterId": ""
}, context)
```

#### Input
* input `object`
  * ClusterId **required** [ClusterId](#clusterid)

#### Output
* output [DeleteClusterResponse](#deleteclusterresponse)

### DeleteHsm



```js
amazonaws_cloudhsmv2.DeleteHsm({
  "ClusterId": ""
}, context)
```

#### Input
* input `object`
  * ClusterId **required** [ClusterId](#clusterid)
  * EniId [EniId](#eniid)
  * EniIp [IpAddress](#ipaddress)
  * HsmId [HsmId](#hsmid)

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
  * Filters [Filters](#filters)
  * MaxResults [MaxSize](#maxsize)
  * NextToken [NextToken](#nexttoken)

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
  * Filters [Filters](#filters)
  * MaxResults [MaxSize](#maxsize)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeClustersResponse](#describeclustersresponse)

### InitializeCluster



```js
amazonaws_cloudhsmv2.InitializeCluster({
  "ClusterId": "",
  "SignedCert": "",
  "TrustAnchor": ""
}, context)
```

#### Input
* input `object`
  * ClusterId **required** [ClusterId](#clusterid)
  * SignedCert **required** [Cert](#cert)
  * TrustAnchor **required** [Cert](#cert)

#### Output
* output [InitializeClusterResponse](#initializeclusterresponse)

### ListTags



```js
amazonaws_cloudhsmv2.ListTags({
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [MaxSize](#maxsize)
  * NextToken [NextToken](#nexttoken)
  * ResourceId **required** [ClusterId](#clusterid)

#### Output
* output [ListTagsResponse](#listtagsresponse)

### TagResource



```js
amazonaws_cloudhsmv2.TagResource({
  "ResourceId": "",
  "TagList": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [ClusterId](#clusterid)
  * TagList **required** [TagList](#taglist)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_cloudhsmv2.UntagResource({
  "ResourceId": "",
  "TagKeyList": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [ClusterId](#clusterid)
  * TagKeyList **required** [TagKeyList](#tagkeylist)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### Backup
* Backup `object`: Contains information about a backup of an AWS CloudHSM cluster.
  * BackupId **required** [BackupId](#backupid)
  * BackupState [BackupState](#backupstate)
  * ClusterId [ClusterId](#clusterid)
  * CreateTimestamp [Timestamp](#timestamp)

### BackupId
* BackupId `string`

### BackupPolicy
* BackupPolicy `string` (values: DEFAULT)

### BackupState
* BackupState `string` (values: CREATE_IN_PROGRESS, READY, DELETED)

### Backups
* Backups `array`
  * items [Backup](#backup)

### Cert
* Cert `string`

### Certificates
* Certificates `object`: Contains one or more certificates or a certificate signing request (CSR).
  * AwsHardwareCertificate [Cert](#cert)
  * ClusterCertificate [Cert](#cert)
  * ClusterCsr [Cert](#cert)
  * HsmCertificate [Cert](#cert)
  * ManufacturerHardwareCertificate [Cert](#cert)

### CloudHsmAccessDeniedException
* CloudHsmAccessDeniedException `object`: The request was rejected because the requester does not have permission to perform the requested operation.
  * Message [errorMessage](#errormessage)

### CloudHsmInternalFailureException
* CloudHsmInternalFailureException `object`: The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.
  * Message [errorMessage](#errormessage)

### CloudHsmInvalidRequestException
* CloudHsmInvalidRequestException `object`: The request was rejected because it is not a valid request.
  * Message [errorMessage](#errormessage)

### CloudHsmResourceNotFoundException
* CloudHsmResourceNotFoundException `object`: The request was rejected because it refers to a resource that cannot be found.
  * Message [errorMessage](#errormessage)

### CloudHsmServiceException
* CloudHsmServiceException `object`: The request was rejected because an error occurred.
  * Message [errorMessage](#errormessage)

### Cluster
* Cluster `object`: Contains information about an AWS CloudHSM cluster.
  * BackupPolicy [BackupPolicy](#backuppolicy)
  * Certificates [Certificates](#certificates)
  * ClusterId [ClusterId](#clusterid)
  * CreateTimestamp [Timestamp](#timestamp)
  * HsmType [HsmType](#hsmtype)
  * Hsms [Hsms](#hsms)
  * PreCoPassword [PreCoPassword](#precopassword)
  * SecurityGroup [SecurityGroup](#securitygroup)
  * SourceBackupId [BackupId](#backupid)
  * State [ClusterState](#clusterstate)
  * StateMessage [StateMessage](#statemessage)
  * SubnetMapping [ExternalSubnetMapping](#externalsubnetmapping)
  * VpcId [VpcId](#vpcid)

### ClusterId
* ClusterId `string`

### ClusterState
* ClusterState `string` (values: CREATE_IN_PROGRESS, UNINITIALIZED, INITIALIZE_IN_PROGRESS, INITIALIZED, ACTIVE, UPDATE_IN_PROGRESS, DELETE_IN_PROGRESS, DELETED, DEGRADED)

### Clusters
* Clusters `array`
  * items [Cluster](#cluster)

### CreateClusterRequest
* CreateClusterRequest `object`
  * HsmType **required** [HsmType](#hsmtype)
  * SourceBackupId [BackupId](#backupid)
  * SubnetIds **required** [SubnetIds](#subnetids)

### CreateClusterResponse
* CreateClusterResponse `object`
  * Cluster [Cluster](#cluster)

### CreateHsmRequest
* CreateHsmRequest `object`
  * AvailabilityZone **required** [ExternalAz](#externalaz)
  * ClusterId **required** [ClusterId](#clusterid)
  * IpAddress [IpAddress](#ipaddress)

### CreateHsmResponse
* CreateHsmResponse `object`
  * Hsm [Hsm](#hsm)

### DeleteClusterRequest
* DeleteClusterRequest `object`
  * ClusterId **required** [ClusterId](#clusterid)

### DeleteClusterResponse
* DeleteClusterResponse `object`
  * Cluster [Cluster](#cluster)

### DeleteHsmRequest
* DeleteHsmRequest `object`
  * ClusterId **required** [ClusterId](#clusterid)
  * EniId [EniId](#eniid)
  * EniIp [IpAddress](#ipaddress)
  * HsmId [HsmId](#hsmid)

### DeleteHsmResponse
* DeleteHsmResponse `object`
  * HsmId [HsmId](#hsmid)

### DescribeBackupsRequest
* DescribeBackupsRequest `object`
  * Filters [Filters](#filters)
  * MaxResults [MaxSize](#maxsize)
  * NextToken [NextToken](#nexttoken)

### DescribeBackupsResponse
* DescribeBackupsResponse `object`
  * Backups [Backups](#backups)
  * NextToken [NextToken](#nexttoken)

### DescribeClustersRequest
* DescribeClustersRequest `object`
  * Filters [Filters](#filters)
  * MaxResults [MaxSize](#maxsize)
  * NextToken [NextToken](#nexttoken)

### DescribeClustersResponse
* DescribeClustersResponse `object`
  * Clusters [Clusters](#clusters)
  * NextToken [NextToken](#nexttoken)

### EniId
* EniId `string`

### ExternalAz
* ExternalAz `string`

### ExternalSubnetMapping
* ExternalSubnetMapping `array`
  * items `object`
    * key [ExternalAz](#externalaz)
    * value [SubnetId](#subnetid)

### Field
* Field `string`

### Filters
* Filters `array`
  * items `object`
    * key [Field](#field)
    * value [Strings](#strings)

### Hsm
* Hsm `object`: Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster.
  * AvailabilityZone [ExternalAz](#externalaz)
  * ClusterId [ClusterId](#clusterid)
  * EniId [EniId](#eniid)
  * EniIp [IpAddress](#ipaddress)
  * HsmId **required** [HsmId](#hsmid)
  * State [HsmState](#hsmstate)
  * StateMessage [String](#string)
  * SubnetId [SubnetId](#subnetid)

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
  * ClusterId **required** [ClusterId](#clusterid)
  * SignedCert **required** [Cert](#cert)
  * TrustAnchor **required** [Cert](#cert)

### InitializeClusterResponse
* InitializeClusterResponse `object`
  * State [ClusterState](#clusterstate)
  * StateMessage [StateMessage](#statemessage)

### IpAddress
* IpAddress `string`

### ListTagsRequest
* ListTagsRequest `object`
  * MaxResults [MaxSize](#maxsize)
  * NextToken [NextToken](#nexttoken)
  * ResourceId **required** [ClusterId](#clusterid)

### ListTagsResponse
* ListTagsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * TagList **required** [TagList](#taglist)

### MaxSize
* MaxSize `integer`

### NextToken
* NextToken `string`

### PreCoPassword
* PreCoPassword `string`

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
  * Key **required** [TagKey](#tagkey)
  * Value **required** [TagValue](#tagvalue)

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
  * ResourceId **required** [ClusterId](#clusterid)
  * TagList **required** [TagList](#taglist)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceId **required** [ClusterId](#clusterid)
  * TagKeyList **required** [TagKeyList](#tagkeylist)

### UntagResourceResponse
* UntagResourceResponse `object`

### VpcId
* VpcId `string`

### errorMessage
* errorMessage `string`


